# /product — Content Pack (draft v0)

The Build-stage tool. Most opinionated of the domain packs because product is where founders most often make the wrong tradeoff: building too much, building the wrong thing, or building in a way they can't change.

Marketing is *distribution to strangers*. Sales is *converting interest to commitment*. Product is *building the thing that earns the right to ask*.

---

## Product Questions (the "spine")

7 questions:

1. **P1 — Scope?** Do you know what the worst-acceptable v1 includes — and explicitly excludes?
2. **P2 — Stack?** Have you picked tools you can ship a v1 with in <2 weeks?
3. **P3 — Built?** Is there a working version a real user (not you) could actually use?
4. **P4 — Used?** Have ≥3 real users completed the core action without help?
5. **P5 — Feedback?** Do you have a way to capture, triage, and respond to user feedback within a week?
6. **P6 — Cadence?** Are you shipping something user-visible at least weekly?
7. **P7 — Debt?** Do you know what you've knowingly traded off, and when it will bite?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`category` ∈ `scope` | `pick` | `build` | `test` | `feedback` | `ship` | `debt` | `coordinate`

`founder-shape` (axis) ∈ `technical` | `non-technical` | `mixed-team` — many interventions only fit one shape.

---

## Catalog (22 interventions)

### P1 — Scope

#### `mvp-scope-cut`
- **MVP Scope-Cut Workshop** · `scope`
- **Answers:** P1
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Three lists: SHIP (in v1), DEFER (post-v1), CUT (won't build). Every item on SHIP has to defend its presence.
- **When:** First exercise before any code. Run again before any major v2 spec.
- **Failmode:** Padding SHIP with "while we're at it" features. Rule: if it's not directly required for the core action, defer or cut.

#### `kill-criteria-feature`
- **Per-Feature Kill Criteria** · `scope`
- **Answers:** P1, P7
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** For each SHIP item, one sentence on what would tell you to cut it after launch (low usage by week 4, no feedback, support cost > revenue).
- **When:** After the scope cut. Pre-committed kill criteria are the only ones that get used.
- **Failmode:** Soft criteria ("if it's not working great"). Real ones name a number and a date.

#### `worst-version-spike`
- **Worst-Version Spike** · `scope`
- **Answers:** P1, P3
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A throwaway prototype (paper, Figma, Glide, a notion doc with screenshots) that walks one user through the worst-acceptable flow end-to-end. Shows you what's missing before you build.
- **When:** Always, before real engineering. Cheap to learn what's wrong.
- **Failmode:** Treating the spike as the v1. Throw it away. Build the real thing knowing what the spike taught you.

---

### P2 — Stack

#### `stack-pick-day`
- **Stack-Pick Day** · `pick` · technical, mixed-team
- **Answers:** P2
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Decisions documented: language, framework, database, hosting, auth, payment, analytics. One choice each, with a one-sentence rationale. Rule: pick the most boring stack you can credibly ship with.
- **When:** Before code. Re-doing this mid-build costs a week per swap.
- **Failmode:** Picking by hotness ("everyone uses X"). Pick by your speed-to-ship and your familiarity. Novelty is a tax.

#### `no-code-feasibility`
- **No-Code Feasibility Pass** · `pick` · non-technical
- **Answers:** P2, P3
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** A decision: can the worst-acceptable v1 be built with Webflow + Airtable + Zapier (or Glide, Bubble, Softr, Stacker)? If yes, default to no-code. If no, what's the smallest piece that needs custom code?
- **When:** First-time non-technical founders. Almost everyone overestimates how much custom code v1 needs.
- **Failmode:** Picking custom because no-code "doesn't scale." V1 doesn't need to scale.

#### `find-the-one-engineer`
- **Find the One Engineer** · `pick` · non-technical
- **Answers:** P2, P3
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** A working relationship with one technical builder — cofounder, contractor, agency, or in-network favor. Defined scope, defined deliverable, defined exit.
- **When:** When the v1 needs real code and no-code can't carry it.
- **Failmode:** Hiring an agency to build the *whole* thing. Agencies ship features; they don't iterate. Find someone who can stay attached for 90 days minimum.

---

### P3 — Build

#### `dogfood-loop`
- **Dogfood Loop** · `build`
- **Answers:** P3, P4
- **Cost / TTV / Effort:** $ · concurrent · solo-week
- **Output:** You use your own product every day for the use case it's built for. Or, if you can't, a designated alpha user does. Reveals what's broken before customers do.
- **When:** Always, during build. The product you don't use is the product nobody uses.
- **Failmode:** Founder dogfoods a *different* use case than the customer ICP. Useful, but not enough.

#### `auth-payment-first`
- **Auth + Payment First** · `build`
- **Answers:** P3
- **Cost / TTV / Effort:** $ · 2–3 days · solo-week
- **Output:** Login working, payment integration tested end-to-end (real credit card, real refund). Done in week 1, not week 6. They're slow to debug, easy to defer, fatal to ship without.
- **When:** First feature you build. Even before the core feature.
- **Failmode:** Deferring "until we know what we're charging." Ship a placeholder price; you'll change it.

#### `error-handling-floor`
- **Error-Handling Floor** · `build`
- **Answers:** P3, P5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Every form has validation. Every API call has a try/catch. Every error shows the user something useful, not a stack trace. Crash-reporting hooked up (Sentry, Rollbar, free tier).
- **When:** Before any external user touches the product.
- **Failmode:** Treating polish as a v2 problem. Errors are not polish; they're trust.

---

### P4 — Used

#### `five-user-usability`
- **Five-User Usability Test** · `test`
- **Answers:** P4
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** 5 target-ICP users attempting the core action while you watch (in person or screenshare). Don't help them. Note where each gets stuck. Five users surfaces ~85% of usability issues per the Nielsen research.
- **When:** As soon as the first end-to-end flow works. Run again after major changes.
- **Failmode:** Helping them. Or interviewing friends instead of ICP.

#### `friction-log`
- **Friction Log** · `test`
- **Answers:** P4, P5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** You walk through your product as a brand-new user and log every moment of confusion, every wait, every dead-end, every place you had to think. Fix the top 5 first.
- **When:** Weekly. The product changes; your familiarity changes faster. Friction logs catch what dogfooding misses.
- **Failmode:** Logging without fixing. The list is worthless if it doesn't generate work.

#### `empty-state-audit`
- **Empty-State Audit** · `test`
- **Answers:** P4
- **Cost / TTV / Effort:** $ · 4 hours · solo-hour
- **Output:** Every screen has a defined empty state (no data, first time, no permissions) with copy that tells the user what to do next.
- **When:** Before launch. Empty states are where users decide if they're going to stick around.
- **Failmode:** A blank page or "No data" text. That's where users churn.

---

### P5 — Feedback

#### `feedback-inbox`
- **Feedback Inbox** · `feedback`
- **Answers:** P5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** One unified place where user feedback goes (Linear/Notion/Airtable/a tagged Gmail label). Source (interview, support, in-app), date, user, raw quote, your inference, your decision.
- **When:** From day 1 of having users. The feedback you don't capture is feedback you can't act on.
- **Failmode:** Multiple inboxes (Twitter DMs + email + Slack + memory). Or, no inference column — just a wall of raw quotes you'll never re-read.

#### `hotline-watching`
- **Hotline Watching** · `feedback`
- **Answers:** P4, P5
- **Cost / TTV / Effort:** $ · 1 day · solo-week
- **Output:** Session recordings (FullStory free tier, PostHog) or scheduled screenshare with a user where you watch them use the product without prompts. The thing they do that confuses you is the thing to fix.
- **When:** Weekly until the core flow is obviously smooth. Then monthly.
- **Failmode:** Watching reams of sessions without taking notes. Pick one flow, watch 5 sessions, log specifics.

#### `triage-cadence`
- **Triage Cadence** · `feedback`
- **Answers:** P5
- **Cost / TTV / Effort:** $ · 1 hour weekly · solo-hour
- **Output:** A weekly 30-minute review of new feedback. Each item: fix-now, fix-soon, won't-fix (with reason), or theme-emerging. Themes get a follow-up interview.
- **When:** Once you have >5 items/week incoming. Before that, react in the moment.
- **Failmode:** Treating every individual request as a roadmap input. Themes count; one-off requests rarely do.

---

### P6 — Ship cadence

#### `friday-ship-ritual`
- **Friday Ship Ritual** · `ship`
- **Answers:** P6
- **Cost / TTV / Effort:** $ · weekly · solo-day
- **Output:** Every Friday, ship at least one user-visible change and write a one-paragraph changelog entry. Internal habit; external signal.
- **When:** From v1 onward. Weekly cadence is the floor; faster is fine.
- **Failmode:** Shipping internal-only changes ("refactored auth") and calling it shipping. User-visible or it doesn't count.

#### `public-changelog`
- **Public Changelog** · `ship`
- **Answers:** P6
- **Cost / TTV / Effort:** $ · weekly · solo-hour
- **Output:** A page (a Notion doc, a `/changelog` route, an email list) where you write what you shipped, in plain language. Customers love it; trust compounds.
- **When:** Once you have ≥10 customers. Before that, send personal emails.
- **Failmode:** Marketing copy in the changelog. Write like an engineer: terse, specific, honest.

#### `release-checklist`
- **Pre-Release Checklist** · `ship`
- **Answers:** P6
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** A 5–10 item checklist before any release: tested, error tracking deployed, changelog written, customer-impact assessed, rollback plan. One page.
- **When:** After your second bad release. (There will be one.)
- **Failmode:** Checklists that are never updated. Add the thing that caused the last bug. Cut the items nobody actually checks.

---

### P7 — Debt awareness

#### `debt-ledger`
- **Technical Debt Ledger** · `debt`
- **Answers:** P7
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** A running list of known shortcuts (security, scale, code quality, dependencies) and *what threshold or event* triggers paying them off. Visible and shared.
- **When:** Once you start shipping fast. Debt is fine — invisible debt isn't.
- **Failmode:** Confusing debt with "things we want to clean up." Real debt has a future cost; cleanup is just preference.

#### `rebuild-vs-iterate`
- **Rebuild-vs-Iterate Decision** · `debt` · technical, mixed-team
- **Answers:** P7
- **Cost / TTV / Effort:** $$ · 1 week · solo-week
- **Output:** A decision framework when a rewrite tempts you: what does the rewrite *not* solve? What can you achieve by refactoring instead? What's the cost in shipped-features-per-week during the rewrite? Most rewrites fail; bias against them.
- **When:** The moment "we should rewrite this in X" enters discussion. Run the framework.
- **Failmode:** Rewriting before having a load that the current system actually broke under.

---

### Cross — Coordinate (especially non-technical founders)

#### `eng-translation-doc`
- **Founder-to-Engineer Translation Doc** · `coordinate` · non-technical, mixed-team
- **Answers:** P1, P5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A single doc that the founder writes for each new feature, in customer-language: who, problem, success criterion, acceptable scope. Engineer translates to spec. Saves weeks.
- **When:** Every non-trivial feature when founder isn't the builder.
- **Failmode:** Founder writes specs ("add a dropdown for X"). Wrong direction. Founder writes *intent*; engineer writes *spec*.

#### `weekly-build-sync`
- **Weekly Build Sync** · `coordinate` · mixed-team
- **Answers:** P5, P6
- **Cost / TTV / Effort:** $ · 30 min weekly · solo-hour
- **Output:** A 30-minute meeting: what shipped last week (with proof), what's shipping this week (with definition of done), what's blocked. Recorded. Searchable.
- **When:** As soon as the team is more than one person.
- **Failmode:** Status updates ("I'm working on X"). The sync is about completed and committed work, not in-progress narratives.

---

## Engine notes

- Prioritization same shape as `/validate` and `/sales`. The `founder-shape` axis is a filter: hide `technical` interventions for non-technical founders and vice versa.
- This catalog assumes the founder has been through `/validate` and has a defined customer + problem. If the user lands here without that, push back: "the problem isn't built right because the problem isn't framed right. Have you been through `/ideate` or `/validate`?"
- The dogfood + feedback + hotline group is the cheapest, most-skipped intervention cluster. The engine should weight them aggressively.
