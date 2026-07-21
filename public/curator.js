/*
 * curator.js — owner-only curation layer for lucassommer.com
 *
 * Activates ONLY when a curator token is present (visit /?curate=<token> once).
 * For everyone else this script does nothing, so the public site is untouched.
 *
 * Per card it adds a hover toolbar:
 *   - Comment : a note-to-self, saved to the local backend (/api/annotations)
 *   - Hide    : eye toggle, collapses the card; persists; restore from the dock
 *   - Delete  : removes the card for THIS SESSION only; siblings FLIP to fill
 */
(function () {
  "use strict";

  // ---- token capture / gate -------------------------------------------------
  var params = new URLSearchParams(location.search);
  if (params.has("curate")) {
    var ct = params.get("curate");
    localStorage.setItem("curatorToken", ct);
    document.cookie = "cur=" + ct + "; path=/; max-age=31536000; samesite=lax";
    params.delete("curate");
    var qs = params.toString();
    history.replaceState({}, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
  }
  var TOKEN = localStorage.getItem("curatorToken");
  if (!TOKEN) return; // not a curator — stay invisible
  // keep the access cookie in sync (lets the owner load private pages)
  if (TOKEN && document.cookie.indexOf("cur=") === -1) {
    document.cookie = "cur=" + TOKEN + "; path=/; max-age=31536000; samesite=lax";
  }

  var HEADERS = { "Content-Type": "application/json", "X-Curator-Token": TOKEN };
  var PAGE = location.pathname;
  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Structural targeting — NOT a hand-maintained class list. A node is a target
  // if it's a <section>/<article>, a content <li>, a known card/row/item, OR any
  // block that directly holds a heading (catches section headers, hero, bios,
  // titled cards, etc.). New content is covered automatically, every page.
  var CARD_CLASSES = ".project-card,.ship-card,.know-card,.testimonial-card,.cred-item,.press-item,.idea-card,.idea-card-compact,.domain-card,.resource-card,.truth,.timeline-item,.service-card,.update-item,.related-card,.past-card,.team-card,.wine-card,.tool-card,.sum-card,.compare-card,.info-card,.setting-card,.demo-card";
  var BLOCK_CLASSES = ".section-header,.story-bridge,.bio-hero,.hero,.email-capture,.domains-cta,.domains-empty,.truths-intro";

  function isTarget(el) {
    if (!el || el.nodeType !== 1 || el === document.body) return false;
    if (el.closest(".curator-ui")) return false;
    var tag = el.tagName;
    if (tag === "SECTION" || tag === "ARTICLE" || tag === "LI") return true;
    if (el.matches(CARD_CLASSES) || el.matches(BLOCK_CLASSES)) return true;
    if (el.querySelector(":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5")) return true;
    return false;
  }

  var ICON = {
    comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    eyeOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    lockOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
    lockMail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 7l10 7 10-7"/></svg>',
    lockClosed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  };

  var state = {};                 // card_id -> { comment, hidden }
  var deleted = Object.create(null); // session-only delete set

  // ---- helpers --------------------------------------------------------------
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }
  function idFor(el) {
    // An element's own link wins (keeps card IDs stable across this change).
    if (el.tagName === "A" && el.getAttribute("href")) return PAGE + "::" + slug(el.getAttribute("href"));
    // Else the element's title: own heading first, then a name element, then the
    // first descendant heading (so a <section> keys off its own header, not a
    // child card's link).
    var nameEl = el.querySelector(
      ":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5," +
      ".project-name, .ship-name, .know-name, .domain-name, .timeline-title, .update-title, .testimonial-attr, .cred-text," +
      "h1, h2, h3, h4"
    );
    var key = (nameEl && nameEl.textContent.trim()) || (el.textContent || "").trim().slice(0, 40) || el.tagName.toLowerCase();
    return PAGE + "::" + slug(key);
  }
  function save(id) {
    var s = state[id] || (state[id] = {});
    fetch("/api/annotations", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ card_id: id, page: PAGE, comment: s.comment || "", hidden: s.hidden ? 1 : 0 })
    }).catch(function () {});
  }

  // ---- boot -----------------------------------------------------------------
  fetch("/api/annotations", { headers: HEADERS })
    .then(function (r) { return r.ok ? r.json() : { annotations: [] }; })
    .then(function (d) {
      (d.annotations || []).forEach(function (a) { state[a.card_id] = { comment: a.comment || "", hidden: !!a.hidden }; });
    })
    .catch(function () {})
    .finally(init);

  var idCounts = Object.create(null);
  function uniqueId(base) {
    if (!idCounts[base]) { idCounts[base] = 1; return base; }
    idCounts[base] += 1;
    return base + "~" + idCounts[base];
  }

  function init() {
    document.body.classList.add("curator-on");
    // Document order: ancestors marked before descendants, so a section keys off
    // its own heading before a child card claims a colliding id.
    document.querySelectorAll("main section, main article, main li, main div, main a").forEach(mark);
    buildDock();
    setupHover();
    setupPagesMenu();
  }

  // ---- pages menu: visibility (lock) + nav membership editor ----------------
  function setupPagesMenu() {
    var np = document.querySelector(".nav-pages");
    if (!np) return;
    np.hidden = false;
    var btn = np.querySelector(".nav-pages-btn");
    var menu = np.querySelector(".nav-pages-menu");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.hidden = !menu.hidden;
      btn.setAttribute("aria-expanded", String(!menu.hidden));
      if (!menu.hidden) loadPages(menu);
    });
    document.addEventListener("click", function (e) { if (!np.contains(e.target)) menu.hidden = true; });
  }

  function loadPages(menu) {
    menu.innerHTML = '<div class="np-loading">Loading…</div>';
    fetch("/api/site", { headers: HEADERS })
      .then(function (r) { return r.ok ? r.json() : { pages: [] }; })
      .then(function (d) { renderPages(menu, d.pages || []); })
      .catch(function () { menu.innerHTML = '<div class="np-loading">Failed to load.</div>'; });
  }

  function renderPages(menu, pages) {
    menu.innerHTML = "";
    var inNav = pages.filter(function (p) { return p.in_nav; });
    var rest = pages.filter(function (p) { return !p.in_nav; });
    function group(t) { var g = document.createElement("div"); g.className = "np-group"; g.textContent = t; menu.appendChild(g); }
    if (inNav.length) { group("In nav"); inNav.forEach(function (p) { menu.appendChild(pageRow(p)); }); }
    if (rest.length) { group("Not in nav"); rest.forEach(function (p) { menu.appendChild(pageRow(p)); }); }
  }

  function pageRow(p) {
    var row = document.createElement("div");
    row.className = "cc-page-row";
    if (p.visibility === "private") row.classList.add("is-private");
    else if (p.visibility === "gated") row.classList.add("is-gated");
    var lock = document.createElement("button");
    lock.type = "button"; lock.className = "cc-lock";
    var icon, title, nextVis;
    if (p.visibility === "private") {
      icon = ICON.lockClosed; title = "Private — click to make public"; nextVis = "public";
    } else if (p.visibility === "gated") {
      icon = ICON.lockMail; title = "Email-gated — click to make private"; nextVis = "private";
    } else {
      icon = ICON.lockOpen; title = "Public — click to gate behind email"; nextVis = "gated";
    }
    lock.title = title; lock.innerHTML = icon;
    var link = document.createElement("a");
    link.className = "cc-page-link"; link.href = p.path; link.textContent = p.label || p.path;
    if (p.path === location.pathname || p.path + "/" === location.pathname) link.classList.add("np-active");
    var nav = document.createElement("button");
    nav.type = "button"; nav.className = "cc-nav-toggle" + (p.in_nav ? " on" : "");
    nav.title = p.in_nav ? "In nav — click to remove" : "Add to nav";
    nav.textContent = "nav";
    lock.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      savePage(p.path, { visibility: nextVis });
    });
    nav.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      savePage(p.path, { in_nav: p.in_nav ? 0 : 1 });
    });
    row.appendChild(lock); row.appendChild(link); row.appendChild(nav);
    return row;
  }

  function savePage(path, fields) {
    var body = { path: path };
    for (var k in fields) body[k] = fields[k];
    fetch("/api/site", { method: "POST", headers: HEADERS, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var menu = document.querySelector(".nav-pages-menu");
        if (d.ok && menu && !menu.hidden) loadPages(menu);
      })
      .catch(function () {});
  }

  // Lightweight: tag the element + restore persisted state. The toolbar is built
  // lazily on first hover so pages with hundreds of blocks stay fast.
  function mark(el) {
    if (el.hasAttribute("data-cc") || !isTarget(el)) return;
    var id = uniqueId(idFor(el));
    el.setAttribute("data-cc", "");
    el.dataset.cardId = id;
    el.classList.add("cc-card");
    var s = state[id];
    if (s && s.comment) el.classList.add("cc-has-comment");
    if (s && s.hidden) el.classList.add("cc-hidden");
  }

  function ensureBar(el) {
    if (el.querySelector(":scope > .cc-bar")) return;
    var id = el.dataset.cardId;
    var s = state[id];
    var bar = document.createElement("div");
    bar.className = "cc-bar curator-ui";
    bar.innerHTML =
      '<button class="cc-btn cc-comment" type="button" aria-label="Comment" title="Comment">' + ICON.comment + "</button>" +
      '<button class="cc-btn cc-hide" type="button" aria-label="Hide" title="Hide">' + (s && s.hidden ? ICON.eyeOff : ICON.eyeOpen) + "</button>" +
      '<button class="cc-btn cc-del" type="button" aria-label="Delete this session" title="Delete (this session)">' + ICON.trash + "</button>";
    el.appendChild(bar);

    function stop(fn) {
      return function (e) { e.preventDefault(); e.stopPropagation(); fn(); };
    }
    bar.querySelector(".cc-comment").addEventListener("click", stop(function () { openComment(el, id); }));
    bar.querySelector(".cc-hide").addEventListener("click", stop(function () { toggleHide(el, id, bar); }));
    bar.querySelector(".cc-del").addEventListener("click", stop(function () { removeCard(el, id); }));
  }

  // Innermost-only hover: show controls for the deepest target under the cursor,
  // so a card inside a section doesn't stack two toolbars.
  var active = null;
  function setupHover() {
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-cc]");
      if (t === active) return;
      if (active) active.classList.remove("cc-active");
      active = t;
      if (t) { ensureBar(t); t.classList.add("cc-active"); }
    });
  }

  // ---- comment --------------------------------------------------------------
  var pop = null;
  function openComment(el, id) {
    closePop();
    var s = state[id] || (state[id] = {});
    pop = document.createElement("div");
    pop.className = "cc-pop curator-ui";
    pop.innerHTML =
      '<textarea class="cc-text" placeholder="Note to self — cut this? rewrite? keep?"></textarea>' +
      '<div class="cc-pop-row">' +
        '<button class="cc-save" type="button">Save</button>' +
        '<button class="cc-clear" type="button">Clear</button>' +
        '<button class="cc-cancel" type="button">Cancel</button>' +
      "</div>";
    document.body.appendChild(pop);
    var ta = pop.querySelector(".cc-text");
    ta.value = s.comment || "";
    var r = el.getBoundingClientRect();
    pop.style.top = (window.scrollY + r.top + 8) + "px";
    pop.style.left = (window.scrollX + Math.max(8, r.right - 320)) + "px";
    ta.focus();

    pop.querySelector(".cc-save").addEventListener("click", function () {
      s.comment = ta.value.trim();
      el.classList.toggle("cc-has-comment", !!s.comment);
      save(id); closePop();
    });
    pop.querySelector(".cc-clear").addEventListener("click", function () {
      s.comment = ""; el.classList.remove("cc-has-comment"); save(id); closePop();
    });
    pop.querySelector(".cc-cancel").addEventListener("click", closePop);
  }
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePop(); });
  document.addEventListener("click", function (e) {
    if (pop && !pop.contains(e.target) && !e.target.closest(".cc-comment")) closePop();
  });

  // ---- hide / restore -------------------------------------------------------
  function toggleHide(el, id, bar) {
    var s = state[id] || (state[id] = {});
    s.hidden = !s.hidden;
    bar.querySelector(".cc-hide").innerHTML = s.hidden ? ICON.eyeOff : ICON.eyeOpen;
    if (s.hidden) flipOut(el, false, updateDock);
    else { el.classList.remove("cc-hidden"); updateDock(); }
    save(id);
  }

  // ---- delete (session only) ------------------------------------------------
  function removeCard(el, id) {
    deleted[id] = true;
    flipOut(el, true);
  }

  // ---- FLIP reflow ----------------------------------------------------------
  function flipOut(el, remove, onDone) {
    var container = el.parentElement;
    var sibs = [].slice.call(container.children).filter(function (c) {
      return c !== el && c.classList && c.classList.contains("cc-card") &&
             !c.classList.contains("cc-hidden") && c.style.display !== "none";
    });
    var firsts = sibs.map(function (s) { return s.getBoundingClientRect(); });

    function settle() {
      if (remove) el.remove();
      else el.classList.add("cc-hidden");
      if (onDone) onDone();
      if (REDUCE) return;
      sibs.forEach(function (s, i) {
        var last = s.getBoundingClientRect();
        var dx = firsts[i].left - last.left, dy = firsts[i].top - last.top;
        if (!dx && !dy) return;
        s.style.transition = "none";
        s.style.transform = "translate(" + dx + "px," + dy + "px)";
      });
      requestAnimationFrame(function () {
        sibs.forEach(function (s) {
          s.style.transition = "transform .35s cubic-bezier(.2,.7,.2,1)";
          s.style.transform = "";
          s.addEventListener("transitionend", function clear() {
            s.style.transition = ""; s.removeEventListener("transitionend", clear);
          });
        });
      });
    }

    if (REDUCE) { settle(); return; }
    el.style.transition = "opacity .2s ease, transform .2s ease";
    el.style.opacity = "0";
    el.style.transform = "scale(.92)";
    el.addEventListener("transitionend", function once() {
      el.removeEventListener("transitionend", once);
      el.style.opacity = ""; el.style.transform = ""; el.style.transition = "";
      settle();
    }, { once: true });
  }

  // ---- dock (status + restore + exit) --------------------------------------
  var dock;
  function buildDock() {
    dock = document.createElement("div");
    dock.className = "cc-dock curator-ui";
    document.body.appendChild(dock);
    updateDock();
    dock.addEventListener("click", function (e) {
      var act = e.target.closest("[data-act]");
      if (!act) return;
      if (act.dataset.act === "show") {
        document.querySelectorAll(".cc-card.cc-hidden").forEach(function (el) {
          var id = el.dataset.cardId, s = state[id];
          el.classList.remove("cc-hidden");
          if (s) { s.hidden = false; save(id); }
          var hb = el.querySelector(".cc-hide");
          if (hb) hb.innerHTML = ICON.eyeOpen;
        });
        updateDock();
      } else if (act.dataset.act === "agent") {
        openAgentEditor();
      } else if (act.dataset.act === "exit") {
        localStorage.removeItem("curatorToken");
        document.cookie = "cur=; path=/; max-age=0";
        location.reload();
      }
    });
  }
  function updateDock() {
    if (!dock) return;
    var hidden = document.querySelectorAll(".cc-card.cc-hidden").length;
    dock.innerHTML =
      '<span class="cc-dot"></span><span>Curator</span>' +
      (hidden ? ' &middot; <button data-act="show" class="cc-link">' + hidden + " hidden — show all</button>" : "") +
      ' &middot; <button data-act="agent" class="cc-link">agent</button>' +
      ' &middot; <button data-act="exit" class="cc-link">exit</button>';
  }

  // ---- agent file editor (curator-only: soul / memory / context / learned) --
  function openAgentEditor() {
    if (document.querySelector(".cc-modal-overlay")) return;
    var overlay = document.createElement("div");
    overlay.className = "cc-modal-overlay curator-ui";
    overlay.innerHTML =
      '<div class="cc-modal">' +
        '<div class="cc-modal-head"><strong>Agent files</strong>' +
          '<button class="cc-modal-x" type="button" aria-label="Close">&times;</button></div>' +
        '<div class="cc-tabs"></div>' +
        '<textarea class="cc-editor" spellcheck="false" placeholder="Loading…"></textarea>' +
        '<div class="cc-modal-foot"><span class="cc-save-status"></span>' +
          '<button class="cc-save-file" type="button">Save</button></div>' +
      "</div>";
    document.body.appendChild(overlay);
    var tabsEl = overlay.querySelector(".cc-tabs");
    var editor = overlay.querySelector(".cc-editor");
    var status = overlay.querySelector(".cc-save-status");
    var files = {}, current = null;

    function selectTab(name) {
      if (current) files[current] = editor.value; // keep unsaved edits across tabs
      current = name;
      editor.value = files[name] || "";
      tabsEl.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("active", b.dataset.f === name);
      });
    }
    function close() { overlay.remove(); }
    overlay.querySelector(".cc-modal-x").addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });

    fetch("/api/agent/files", { headers: HEADERS })
      .then(function (r) { return r.ok ? r.json() : { files: {} }; })
      .then(function (d) {
        files = d.files || {};
        Object.keys(files).forEach(function (name) {
          var b = document.createElement("button");
          b.type = "button"; b.dataset.f = name; b.textContent = name;
          b.addEventListener("click", function () { selectTab(name); });
          tabsEl.appendChild(b);
        });
        var first = Object.keys(files)[0];
        if (first) selectTab(first);
        else editor.placeholder = "No agent files found.";
      })
      .catch(function () { editor.placeholder = "Failed to load."; });

    overlay.querySelector(".cc-save-file").addEventListener("click", function () {
      if (!current) return;
      files[current] = editor.value;
      status.textContent = "Saving…";
      fetch("/api/agent/file", {
        method: "POST", headers: HEADERS,
        body: JSON.stringify({ name: current, content: editor.value }),
      })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          status.textContent = d.ok ? "Saved ✓ (live next message)" : (d.error || "Error");
          setTimeout(function () { status.textContent = ""; }, 2500);
        })
        .catch(function () { status.textContent = "Error"; });
    });
  }
})();
