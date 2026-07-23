# The Hub & Spoke Method

A working spec for the methodology behind `/hub`, `/validate`, `/ideate`, `/product`, `/sales`, `/customer-success`, `/finance`, `/legal`, `/ops`, `/people`, and `/governance`. Written after those tools shipped, not before — so the abstractions here have already survived contact with 11 different domains.

**Version:** v1 (extracted from working implementations, July 2026)
**Scope:** Small business / entrepreneurship operating framework
**Author:** Lucas Sommer + Claude

---

## 1. What "Hub & Spoke" actually means

**Hub & Spoke** started life as a marketing metaphor (central website + distribution channels) but the *methodology* underneath generalizes to any domain where a founder has to decide *what to do next among many possible actions*.

The methodology is this:

> **You have one central thing that captures value. You have many peripheral things that feed value into it. Which peripheral things to activate — and in what order — depends on the state of the business, the constraints of the founder, and the rules of the domain.**

The hub is where **value gets captured** — money changes hands, decisions get made, trust gets banked. The spokes are where **value gets acquired** — attention, evidence, capital, capability, permission. The hub is the *why*. The spokes are the *how*.

Everything else in this document is a formalization of that idea.

---

## 2. Core concepts

### 2.1 The Hub

The **hub** is the *single asset that captures the outcome the domain is trying to produce*.

| Domain | Hub | Why it's the hub |
|---|---|---|
| Marketing | The business's website | Where a stranger becomes a lead becomes a customer. The one thing you own outright. |
| Sales | The customer's signed commitment | Where interest becomes revenue. Everything upstream is prep. |
| Validate | The founder's evidence base | The store of quotes, receipts, and pre-orders that de-risks the build. |
| Ideate | The one-page brief | The artifact that everything downstream draws from. |
| Product | The shipped v1 | The thing customers touch. The scope you defended in public. |
| Customer Success | Retention itself | Repeat use is where the LTV lives. The book of business. |
| Finance | The books + runway dashboard | Where every other domain gets its truth-check. |
| Legal | The entity + its IP | The container that protects everything else. |
| Ops | The delivery process | The doc that lets someone other than the founder produce the outcome. |
| People | The team + culture | The compounding asset that lets the business scale beyond the founder. |
| Governance | The cap table + decision log | The paper trail that survives every change. |

**A hub must be owned by the business.** If it can be taken away by a platform, a partner, or a policy change, it isn't a hub — it's a rented asset. This is the single most important test.

### 2.2 The Spokes

A **spoke** is any *bounded action or ongoing practice that feeds value into the hub*.

Spokes have a fixed schema. Every spoke in every one of the 11 tools has these fields:

```
id           # short slug
name         # display
category     # what type of intervention this is (varies by domain)
answers      # which of the domain's questions this moves the needle on
cost         # $ (≈free), $$ (≈$100–1k), $$$ (≈$1k+)
ttv          # time-to-value (hours / days / weeks)
effort       # solo-hour | solo-day | solo-week | team-week
output       # the artifact / evidence you walk away with
when         # when to run it (fit conditions)
failmode     # the most common way founders get it wrong
```

Two axes vary by domain:
- **Category** (what kind of spoke it is) — marketing has 8 categories, sales has 10, etc.
- **A secondary axis** that filters which spokes fit the current context:
  - Marketing: **ownership** (owned / rented / earned / paid / shared)
  - Sales: **motion** (founder-led / inside-sales / field / plg-assisted / channel)
  - Product: **founder shape** (technical / non-technical / mixed-team)
  - Ops: **business shape** (SaaS / e-commerce / service / physical / marketplace)
  - Legal: **counsel required** (required / recommended / optional)
  - Finance: **pattern** (setup spoke / decision tree / dashboard)

The secondary axis is what makes the framework specific instead of generic. A SaaS founder should not see "time-per-unit tracking" in ops; a non-technical founder should not see "stack-pick day" in product.

### 2.3 The Questions (the "spine")

Each domain has 5–7 **questions** the founder must eventually answer with real evidence. The spokes exist to move the needle on those questions.

| Domain | # of questions | Sample question |
|---|---|---|
| Ideate | 5 | "Can you state the problem in one sentence without jargon?" |
| Validate | 7 | "Will they pay?" |
| Product | 7 | "Have ≥3 real users completed the core action without help?" |
| Sales | 7 | "Is your close rate within band for your motion?" |
| Customer Success | 6 | "Can you tell who's at risk before they churn?" |
| Finance | 6 | "Do you know your runway to the day?" |
| Legal | 6 | "Is IP demonstrably owned by the entity, not scattered?" |
| Ops | 6 | "Can delivery happen without the founder?" |
| People | 6 | "Do you have a comp framework you'd show a candidate?" |
| Governance | 5 | "Is the cap table clean, current, and understood?" |

Questions are the **destination**. Spokes are the **paths**. Rules are the **map**.

### 2.4 State

Every spoke exists in one of four states relative to the current business:

- **Locked** — a prerequisite isn't met. Cannot be run yet.
- **Ready** — prerequisites are met, dependencies satisfied. Available now.
- **Running / In progress** — the founder is actively doing this.
- **Done** — evidence is captured; the spoke has served its purpose.

Same four states apply to questions:
- **To do** — no evidence yet
- **In progress** — evidence being gathered
- **Signal / Done** — enough evidence to call it answered
- (No locked state for questions — they're the destination, not the path)

### 2.5 Readiness

Each domain defines a threshold for **readiness to graduate** — the point at which the founder should leave this domain and move to the next in the lifecycle.

| Domain | Readiness threshold | Next domain |
|---|---|---|
| Ideate | 5/5 framing questions answered | Validate |
| Validate | 4/7 questions with signal + Q4 (will they pay) done | Product |
| Product | 6/7 questions done | Hub (marketing) |
| Hub | Ships the marketing plan | Sales |
| Sales | 6/7 questions done, motion repeatable | Customer Success |
| CS | Retention curve stabilized | Finance |
| Finance | Runway ≥12mo, unit econ known | Ops |
| Ops | Delivery not founder-dependent | People |
| People | Comp bands + hiring loop working | Governance |
| Governance | Reporting cadence + cap table hygiene | Graduation |

Graduation is honest. At Governance done, the tool has stopped adding value — the founder needs an operator coach, fractional CFO, or experienced board, not a framework.

---

## 3. The Engine

The methodology's operational core — same in every domain — is:

```
Inputs (situation)  +  Catalog (interventions)  +  Rules (what's relevant when)
                            ↓
              Sequenced Plan (what to do next)
                            ↓
                       Roadmap (customer-facing view)
```

Three components:

**Inputs.** The founder's answers to structured questions about where they are: business model, vertical, geography, offerings, service area, existing assets, tracking infrastructure, team capacity, budget, timeline, and domain-specific data (ACV, cycle, activation event, runway, entity, etc.).

**Catalog.** The domain's full list of spokes, each with the schema in §2.2.

**Rules.** The logic that:
1. Filters the catalog by the secondary axis (e.g., business shape, motion, founder shape).
2. Determines which spokes are locked (prerequisites unmet) vs. ready.
3. Scores each ready spoke on which questions it moves the needle on.
4. Weights higher those that answer the founder's most-unanswered question, with ties broken by cost (lower is better), then TTV (faster is better), then effort (less is better).
5. Detects readiness to graduate to the next domain.

The output is a *sequenced list of what to do next*, plus a rollup report the founder can share with their team, advisor, or roadmap viewer.

---

## 4. Prioritization Rules (formal)

The engine uses a scoring function to rank ready spokes:

```
score(spoke) = Σ over each Q in spoke.answers:
                  Q_weight(state) × question_priority(Q)
              × ownership_boost(spoke.ownership)   # marketing only
              × motion_fit(spoke.motion, S.motions) # sales only
              × cost_penalty(spoke.cost)
              × ttv_penalty(spoke.ttv)
              × effort_penalty(spoke.effort)
```

Where:
- **Q_weight(state)** = 2.0 if Q is `to-do`, 1.0 if `in-progress`, 0.0 if `done`. (Spokes that answer questions already done get de-prioritized.)
- **question_priority(Q)** = 1.0 by default; some domains weight the "foundational" questions higher (e.g., in Ideate, F1 problem-articulation weights higher than F5 worst-v1).
- **cost_penalty($) = 1.0, ($$) = 0.7, ($$$) = 0.4.** (Cheaper wins ties.)
- **ttv_penalty(fast) = 1.0, (medium) = 0.8, (slow) = 0.5.** (Faster wins ties.)
- **effort_penalty(solo-hour) = 1.0, (solo-day) = 0.9, (solo-week) = 0.7, (team-week) = 0.4.**

**Ties break toward earlier lifecycle stages** — a principle the routing quiz on `/start` also uses. We'd rather under-promise than push the founder forward too fast.

---

## 5. Dependencies

Spokes can be locked by other spokes. The dependency graph is domain-specific but follows one universal rule:

> **A spoke that requires evidence from an unanswered question is locked until that question has some evidence.**

Examples:
- In `/validate`, Q5–Q7 experiments (unit economics, delivery, retention) are locked until Q1–Q4 (problem, pain, reach, pay) have any evidence. Rationale: don't optimize retention on an unvalidated business.
- In `/sales`, the "expansion playbook" spoke is locked until S1 (ICP defined) has signal. Rationale: you cannot expand a poorly-defined customer.
- In `/product`, "rebuild vs. iterate" is locked until you've shipped v1. Rationale: rewriting nothing is impossible.

Locked spokes are shown to the founder (they should know what they'll unlock) but dimmed and non-clickable. This makes the progression visible without letting the founder skip stages.

---

## 6. State handoff between domains

Every tool exports a JSON snapshot in a **shared schema shape**:

```json
{
  "meta": {
    "framework": "Validate",     // canonical name of source tool
    "version": "v1",
    "exported": "2026-07-21T...",
    "importedFrom": "Ideate"     // if this tool imported from a prior tool
  },
  "inputs": {                    // domain-specific inputs
    "businessName": "...",
    "problem": "...",
    "customer": "...",
    ...
  },
  "progress": {                  // per-question status
    "Q1": { "status": "done", "notes": "..." },
    "Q2": { "status": "wip",  "notes": "..." },
    ...
  },
  "experimentsRun": [ ... ],     // completed spokes
  "readiness": {                 // domain-specific readiness flags
    "questionsWithSignal": 5,
    "readyForNext": true
  }
}
```

The **downstream tool merges non-empty fields into its own state.** It never overwrites a value the founder has already entered. This gives us:
- Idempotent chain traversal (running the chain twice doesn't change state)
- Non-destructive imports (in-progress work is preserved)
- Clear "imported from /X" badge for user transparency

The URL-encoded handoff uses `?plan=<base64(utf-8(json))>`. Any tool can be entered from any other tool this way.

---

## 7. When the framework fits — and when it doesn't

**Fits cleanly:**
- Marketing (`/hub`), Sales (`/sales`), Customer Success (`/customer-success`), Validate (`/validate`), Ideate (`/ideate`), Product (`/product`), People (`/people`), Ops (`/ops`).
- Any domain where there's a bounded set of *interventions* and prioritization is the main question.

**Fits with modification:**
- **Finance.** Introduces three intervention *patterns* instead of one:
  - `spoke` — one-time setup (like classic catalog items)
  - `tree` — a guided decision (pricing, funding, entity)
  - `dashboard` — an ongoing metric to watch (runway, unit econ, tax deadlines)
  Marked with a color-coded left border in the UI so the founder knows which mode of interaction to expect.
- **Legal.** Adds an explicit `lawyer` field to every spoke (`required` / `recommended` / `optional`). Half the value is telling the founder *not to try this without counsel*.

**Doesn't fit at all:**
- Governance below Series-A scale. Most items are dashboards + cadences, not interventions. We shipped a small catalog of 10 anyway, but the value density is lower than other domains.
- Anything that requires *real-time continuous adjustment* (e.g., trading, live event ops). The Hub & Spoke pattern assumes discrete interventions with defined start/end, not continuous control loops.

**Anti-signal for using this pattern:** if you can't write down what the *hub* is in one sentence, the domain probably isn't Hub & Spoke shaped. Don't force it.

---

## 8. Implementation Spec

A tool that implements the Hub & Spoke method has three surfaces:

### 8.1 Left panel — inputs

- **Identity block** — business name + any identifying fields. Imported from prior tool if `?plan=` is present; badge shows source.
- **Domain-specific input tiers** — grouped by "tier 1: fast unlock" (things that gate the rest of the tool) vs. later tiers. Sections are collapsible; open state persists across re-renders via a module-scoped Set (not lost on every input change — this was a real bug we hit in `/hub` early).
- **Per-question status blocks** — for each question in the spine, a textarea for evidence + three-state buttons (to-do / in-progress / done).
- **Submit bar** — Save (persist to localStorage), Clear (reset with confirm), Submit → Report (gated on ≥N questions done).

### 8.2 Right panel — output

Four tabs, present in every tool:

- **Formula** — the spine. Show all questions with current status. Explain the domain in one paragraph.
- **Interventions (or Experiments / Plays / Activities / Items)** — the filtered, ranked catalog. Two filter axes (question + category, sometimes + a third). Each card has the spoke schema (§2.2), a checkbox for "done / running", and a free-form notes field.
- **Report** — a shareable render of the current state. Identity + all questions with evidence + completed spokes + readiness section + next-step recommendation.
- **Export** — the JSON payload + three CTAs: "Continue to /next" (lifecycle-driven), "Open Roadmap" (customer-facing view), "Copy JSON" (raw handoff).

### 8.3 Roadmap — customer-facing

A separate route (`/roadmap`) that consumes the standard JSON schema (§6). Two render paths:

- **Marketing / Hub** shape → the original detailed marketing roadmap (charts, offering pages, service-area map, deployment order).
- **Generic domain** shape → a status report with hero, context, per-question spine (color-coded by status), items complete, readiness badges, and a "Continue to /next" CTA driven by a `FRAMEWORK_META` lookup table.

The framework-aware dispatch is a single top-of-function check:

```js
function render(data) {
  const fw = data.meta?.framework;
  if (fw && FRAMEWORK_META[fw]) return renderGenericDomain(data);
  // ...fall through to the marketing renderer
}
```

---

## 9. Voice and content principles

Consistency in tone across all tools makes the framework feel like one product. The rules:

- **Verbs over adjectives.** "Ship the worst version" beats "consider an MVP approach."
- **Specifics over abstractions.** "Cold outreach reply rate under 2%" beats "low engagement."
- **Negatives carry weight.** "Don't hire reps before you have a motion" lands harder than "consider timing."
- **One opinion per paragraph.** If you can't defend it, cut it.
- **Every spoke has a failmode.** The most-common way founders run this wrong. Non-negotiable field.
- **No emojis, no "we get it" empathy filler, no exclamation marks past one per page.**
- **Refuse to answer what you can't answer well.** In Legal, "should I incorporate as an LLC?" gets "Depends. Here's the 3-question tree." — never "Great question!"

---

## 10. Where this came from, honestly

The Hub & Spoke marketing framework was already a working thing when we started — a v3 tool at `/hub` with 70+ marketing channels, priority weighting, and the "spoke" vocabulary. What this document formalizes is the *pattern that emerged when we built the second, third, fourth, and eventually eleventh domain using the same engine.*

The most useful discovery, mid-build:
> **The pattern generalizes because it isn't really about "hubs" and "spokes" — it's about a domain having a bounded catalog of interventions, a spine of questions to answer with evidence, and prioritization rules that turn founder state into a sequenced plan.**

The metaphor of hub-and-spoke stays because it's evocative and because most domains do have a central captured-value asset. But the engine underneath is more general than the metaphor implies. Future domains that don't fit the metaphor — Finance's decision trees, Governance's cadences — still fit the *engine*, just with modified surface UI.

---

## 11. Open questions worth answering later

- **Can the engine ever be one physical implementation shared across 11 tools?** Currently each tool is a self-contained HTML file with its own catalog and rules baked in. There's meaningful duplication in the CSS/JS scaffolding. A shared runtime (module or Astro island) that reads a per-domain content JSON is possible; whether it's worth it depends on how often catalogs change.
- **Should we allow multi-domain planning in one session?** Right now the founder walks the chain one tool at a time. A "portfolio view" that shows the current state across all activated domains might be more useful for founders past Stage 4.
- **Retention of prior evidence in the roadmap.** When a founder passes through 4 tools and lands on `/roadmap`, only the last tool's state is rendered. A merged "here's where you are across all domains" render is a future feature.
- **The variants noted in TODO.md** — Riskiest Assumption Test, Mom Test only, Problem→Solution→Market→Business Model→Channel, JTBD, Lean Canvas, YC minimalist. These are alternative validation frameworks that could be built as A/B-testable variants of `/validate`. The engine supports it (each variant is a different catalog + rule set). The content is the missing piece.

---

## 12. The one-line summary

> **Hub & Spoke is: a bounded catalog of interventions, a spine of questions to answer with evidence, and rules that turn founder state into a sequenced plan.**

Every other piece of this document is elaboration on that sentence.
