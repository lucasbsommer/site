# Lifecycle Framework — draft v0

The orchestration layer that ties `/hub`, `/validate`, and future domain packs together. Answers the user's first question: **"Where am I, and what do I do next?"**

Two surfaces:
- **`/` (homepage)** — visible cards for each stage, transparent reference
- **`/` quiz** — a 5-question intake that routes you to the right tool for your stage

Same content, two affordances. Quiz is for "I don't know where to start." Cards are for "I know where I am, take me there."

---

## The 6 Stages

| # | Stage | Founder's mental state | Exit criteria |
|---|---|---|---|
| 0 | **Seed** | "I have an idea I haven't done anything with." | You've written down the problem, the customer, and your unfair angle in <1 page. |
| 1 | **Discover** | "I want to know if the idea is real, but I haven't talked to anyone yet." | You've heard the problem in customers' own words at least 5 times unprompted. |
| 2 | **Validate** | "I've talked to people. I need to know if they'll actually pay." | You have real money on the table (pre-order, deposit, pilot) from ≥3 customers. |
| 3 | **Build** | "I have signal. I'm building the first real version." | You can deliver the core value to a customer end-to-end without you babysitting it. |
| 4 | **Launch** | "I'm trying to get first customers and learn what they actually do with it." | You've hit 10–20 paying customers and you know what's working to acquire them. |
| 5 | **Grow** | "I have repeat customers and predictable channels. I need more of both." | Customer acquisition is repeatable; unit economics work; founder isn't a bottleneck for sales. |
| 6 | **Scale** | "I have PMF. The constraint is operations, hiring, or capital." | You've graduated. We're a worse fit for you than a real CFO/COO/operator coach. |

**Notes on the model:**
- Stage 0 is the "blank page" state. Many tools skip it; we shouldn't.
- The gap between Validate and Build is the most expensive mistake stage — founders build before evidence is in. The framework should *resist* skipping ahead.
- Stage 6 is the natural endpoint for our tool. We say so plainly rather than pretending we keep adding value at scale.

---

## Domain Map — Which Domains Matter at Which Stage

A domain pack is "on" at a stage if it's a *next step*, not just relevant. The point is to limit what shows up so founders can act.

| Stage | Primary domains (do this now) | Secondary (be aware) | Off |
|---|---|---|---|
| **Seed** | `/ideate` | — | All others |
| **Discover** | `/validate` (Q1–Q2 only) | `/ideate` | All others |
| **Validate** | `/validate` (full) | `/legal` (entity basics), `/finance` (pricing only) | `/hub`, `/sales`, `/ops`, `/people` |
| **Build** | `/product`, `/legal`, `/finance` (cash) | `/validate` (Q6–Q7), `/ops` (delivery basics) | `/hub`, `/sales`, `/people` |
| **Launch** | `/hub`, `/sales` | `/customer-success`, `/finance` (unit econ) | `/people`, `/governance` |
| **Grow** | `/hub`, `/sales`, `/customer-success`, `/finance` | `/ops`, `/people` (first hires) | `/governance` |
| **Scale** | `/people`, `/ops`, `/finance`, `/governance` | `/hub`, `/sales` | — (validation is behind you) |

**Domain pack inventory** (to be built; current state in parens):
- `/ideate` — idea generation, problem framing, JTBD canvases. *(not built)*
- `/validate` — experiment-driven validation. *(catalog drafted in `VALIDATE-CATALOG.md`)*
- `/hub` — marketing & distribution. *(shipped, v3)*
- `/product` — building, shipping, MVP scoping, technical-debt triage. *(not built)*
- `/sales` — founder-led sales, pipeline, first reps. *(not built)*
- `/customer-success` — onboarding, retention, expansion. *(not built)*
- `/ops` — delivery, fulfillment, processes, vendor mgmt. *(not built)*
- `/finance` — pricing, cash flow, accounting, fundraising. *(not built)*
- `/legal` — entity, IP, contracts, compliance, employment. *(not built)*
- `/people` — hiring, culture, comp, org design. *(not built)*
- `/governance` — board, advisors, investor reporting. *(not built)*

**Recommended build order** (after `/validate`):
1. `/sales` — closest cousin to `/hub`; tests whether the engine generalizes within "growth-shaped" domains.
2. `/finance` — most universally requested; pricing alone is high-value standalone.
3. `/product` — most opinionated; will force decisions about how prescriptive the tool should be.
4. `/legal` — has the biggest "trust" content problem; do it after we've earned credibility on simpler domains.
5. The rest in parallel as content allows.

---

## The Routing Quiz (5 questions)

Each answer carries a stage-bias. Tallies are summed; highest-scoring stage wins. Ties break in favor of the earlier stage (we'd rather under-promise than push a founder forward too fast).

### Q1. How long have you been working on this?
- "Today / this week" → Seed +3
- "A few weeks" → Discover +2, Validate +1
- "A few months" → Validate +2, Build +1
- "A year+" → Build +1, Launch +1, Grow +1, Scale +1 *(low signal; Q4–Q5 will resolve)*

### Q2. Have you spoken to potential customers about the problem (not pitching, listening)?
- "Not yet" → Seed +2, Discover +2
- "A few conversations" → Discover +2, Validate +1
- "10+ deep ones" → Validate +2
- "Past validation; I'm building or selling" → Build +1, Launch +1

### Q3. Is there a product (even rough) that someone could use?
- "No, still thinking" → Seed +1, Discover +1
- "A clickable mockup or doc" → Validate +2
- "A working v1, ugly but functional" → Build +2
- "Polished product in market" → Launch +1, Grow +1, Scale +1

### Q4. Has anyone paid you for this?
- "No money has changed hands" → Seed +0, Discover +0, Validate +1 *(no penalty; just no boost)*
- "Pre-orders / deposits / pilots" → Validate +3
- "A handful of paying customers" → Launch +3
- "Tens to hundreds of paying customers" → Grow +2, Scale +1
- "Predictable revenue, growing" → Scale +3

### Q5. What's your biggest constraint right now?
- "I don't know if this is a real idea" → Seed +2, Discover +1
- "I don't know if anyone will pay" → Validate +2
- "I don't know how to build it / not built yet" → Build +2
- "I can't find customers" → Launch +2
- "I can find them but they don't stick / channels are leaky" → Grow +2
- "Hiring, ops, capital — the org can't keep up" → Scale +2

### Routing
- Tally stage scores from the 5 answers.
- Route to the highest-scoring stage's primary domain.
- If two stages tie, route to the **earlier** one (under-promise).
- If the highest score is Seed or Discover and the user has selected "Q5: don't know if real," consider opening `/validate` directly at Q1 mode — they're cheap and they cover Seed-stage needs.
- If the highest score is Scale, show the "you've graduated" page with referrals to operator/CFO/COO resources.

---

## Cards UI (transparent navigation)

A grid on `/`, one card per stage:

```
┌────────────────────────────────────────────────────────────┐
│  0 · SEED       1 · DISCOVER    2 · VALIDATE    3 · BUILD  │
│  Frame it       Hear it         Prove it        Make it    │
│  → /ideate      → /validate     → /validate     → /product │
├────────────────────────────────────────────────────────────┤
│  4 · LAUNCH     5 · GROW        6 · SCALE                  │
│  Sell it        Multiply it     Operate it                 │
│  → /hub         → /hub          → graduation               │
└────────────────────────────────────────────────────────────┘
```

Above the grid: "Not sure where you are? **Take the 1-minute quiz →**"

Below the grid: a single line — "Each stage tells you which 2–3 domains matter most. Everything else can wait."

---

## Open design questions

- [ ] Should we let users save their stage to localStorage and auto-skip the quiz on return? (Default: yes.)
- [ ] Should the quiz also capture *industry* or *business model* (B2B / B2C / marketplace / service) and use it to filter domain content? (`/hub` already does this; we should pass it through if we ask once at the top level.)
- [ ] How do we handle multi-founder teams where each founder is at a different stage? (Probably ignore for v1; the tool serves one person at a time.)
- [ ] Do we want a "where did you come from?" question — referrer / persona (first-time founder vs. serial, technical vs. non-technical) — to bias the prose without changing the routing?
- [ ] Stage 6 "graduation" — do we want a referral page (operator coaches, fractional CFOs, lawyers) or just a kind goodbye? Referral page is monetizable but easy to do wrong.

---

## Implementation notes (for when we wire it)

- The quiz can be the same single-HTML-file pattern as `/hub` and `/validate`. No backend needed.
- Quiz state goes to localStorage under key `lifecycle_stage`; the cards page reads it and visually marks the current stage.
- Each domain pack (`/hub`, `/validate`, etc.) can read `lifecycle_stage` on load and pre-fill its own intake (we know they're at Validate stage, so don't ask them basic problem-existence questions again).
- The export-to-roadmap pattern from `/hub` should carry through every domain pack so the roadmap viewer eventually shows a consolidated multi-domain plan.
