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
    localStorage.setItem("curatorToken", params.get("curate"));
    params.delete("curate");
    var qs = params.toString();
    history.replaceState({}, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
  }
  var TOKEN = localStorage.getItem("curatorToken");
  if (!TOKEN) return; // not a curator — stay invisible

  var HEADERS = { "Content-Type": "application/json", "X-Curator-Token": TOKEN };
  var PAGE = location.pathname;
  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var SELECTORS = [
    ".project-card", ".ship-card", ".testimonial-card", ".cred-item", ".press-item",
    ".idea-card", ".idea-card-compact", ".domain-card", ".resource-card",
    ".truth", ".timeline-item", ".service-card", ".update-item", ".related-card",
    ".past-card", ".team-card", ".wine-card", ".tool-card", ".sum-card", ".compare-card"
  ].join(",");

  var ICON = {
    comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    eyeOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
  };

  var state = {};                 // card_id -> { comment, hidden }
  var deleted = Object.create(null); // session-only delete set

  // ---- helpers --------------------------------------------------------------
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }
  function idFor(el) {
    if (el.dataset.cardId) return el.dataset.cardId;
    var href = el.getAttribute("href") || (el.querySelector("a") && el.querySelector("a").getAttribute("href"));
    var head = el.querySelector("h1,h2,h3,h4,.project-name,.ship-name,.domain-name,.timeline-title,.update-title,.testimonial-attr,.cred-text");
    var key = (href || (head && head.textContent) || el.textContent.slice(0, 40) || "card").trim();
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

  function init() {
    document.body.classList.add("curator-on");
    document.querySelectorAll(SELECTORS).forEach(wire);
    buildDock();
  }

  function wire(el) {
    if (el.closest(".curator-ui") || el.dataset.curated) return;
    el.dataset.curated = "1";
    var id = idFor(el);
    el.dataset.cardId = id;
    el.classList.add("cc-card");

    var s = state[id];
    if (s && s.comment) el.classList.add("cc-has-comment");
    if (s && s.hidden) el.classList.add("cc-hidden");

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
      } else if (act.dataset.act === "exit") {
        localStorage.removeItem("curatorToken");
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
      ' &middot; <button data-act="exit" class="cc-link">exit</button>';
  }
})();
