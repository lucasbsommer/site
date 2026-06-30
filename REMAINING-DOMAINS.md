# Remaining Domain Packs — Outlines (draft v0)

Shorter outlines for the five domains that haven't earned a full catalog yet: `/legal`, `/customer-success`, `/ops`, `/people`, `/governance`. Same shape (questions spine + intervention categories), but the specific catalog is sketched rather than fully written. Full drafts come after the priority ones (`/hub`, `/validate`, `/ideate`, `/sales`, `/product`, `/finance`) are battle-tested.

---

## `/legal` — Compliance & Protection

**Stage activation:** Build, Launch (entity + basics); Grow, Scale (employment + contracts).

**The spine — 6 questions:**

1. **L1 — Entity?** Have you formed the right legal entity for your liability/funding shape?
2. **L2 — IP ownership?** Is all IP (code, designs, marks) owned by the entity, not contributors?
3. **L3 — Customer contracts?** Are your terms of service, privacy policy, and contracts defensible?
4. **L4 — Worker classification?** Are employees vs. contractors classified correctly?
5. **L5 — Regulated activity?** Are you compliant in the jurisdictions and industries you operate in?
6. **L6 — Disputes?** Is there a clear process when something goes wrong (customer complaint, partner breakup, IP dispute)?

**Catalog shape:** Mostly **decision trees + setup spokes**, similar to `/finance`. Few experiments; many "set up once correctly."

**Sketch of interventions (~15):**

- Entity formation decision (sole prop / LLC / S-corp / C-corp; state of incorporation)
- EIN application
- Operating agreement / corporate bylaws
- Founder IP-assignment agreement
- Contractor IP-assignment + work-for-hire clauses
- Standard MSA / SOW template for B2B
- Terms of service + privacy policy (with real teeth, not free generators for serious products)
- Trademark scan (USPTO + common-law) for the brand name
- Trademark filing (after revenue, usually)
- Data-protection compliance gate (GDPR / CCPA / HIPAA / PCI — depending on data)
- Employment offer letter + at-will language
- Equity-grant vesting docs
- Insurance pack (general liability, E&O / professional, cyber, D&O when relevant)
- Sales-tax nexus check (where are you obligated to collect?)
- Industry-specific licensing (financial, health, food, alcohol, professional services)

**Content sourcing risk (high):** Same as `/finance`. Every node must say: "general guidance, not legal advice." Decision points that legitimately need a lawyer should *route the user to a lawyer*, not pretend we can answer.

**Hard call to make:** Should this domain include "recommended lawyers"? Could be a monetization channel (referral fees, where ethical), could be a trust hazard if vendors are picked poorly. Defer until v2.

---

## `/customer-success` — Onboarding, Retention, Expansion

**Stage activation:** Launch (onboarding); Grow, Scale (retention + expansion).

**The spine — 6 questions:**

1. **C1 — Time-to-value?** Does a new customer reach the core outcome within their first defined window (hour, day, week)?
2. **C2 — Activation?** What % of signups complete the activation event you've defined?
3. **C3 — Retention?** What's your week-1, month-1, month-3 retention curve?
4. **C4 — Health visibility?** Can you tell who's at risk before they churn?
5. **C5 — Expansion?** Do customers buy more, more often, or refer others?
6. **C6 — Voice of customer?** Do product/sales/leadership hear the customer's actual voice at least monthly?

**Catalog shape:** Catalog of plays (like `/sales`), grouped by lifecycle moment: onboarding, activation, health monitoring, save plays, expansion plays, advocacy.

**Sketch of interventions (~18):**

- Define the activation event (one specific user action that signals captured value)
- Onboarding email sequence
- In-product onboarding flow (tour vs. checklist vs. concierge)
- First-week check-in call (high-touch)
- Health score model (usage signals + meeting frequency + open-issue count)
- "At risk" alerting & playbook
- Save call protocol when a churn signal fires
- QBR template (mid-market+)
- Renewal motion: time-boxed renewal conversations
- Win-back sequence for churned customers
- Customer advisory board (for top accounts)
- Expansion trigger detection (usage milestones, new use cases)
- Cross-sell discovery (what *else* could they buy?)
- Referral mechanic (handed off from `/sales` catalog)
- Testimonial collection process
- Case-study production process
- NPS / CSAT measurement (sparingly — surveys without action are worse than nothing)
- Customer-voice routing: how do feedback themes get to product?

**Cross-domain handoffs:**
- `/sales` hands off won customers; CS owns retention + expansion; expansion deals route back to `/sales` for closing.
- `/product` consumes thematic feedback from CS for roadmap input.

---

## `/ops` — Delivery & Operations

**Stage activation:** Launch (delivery basics); Grow, Scale (process + vendor + supply).

**The spine — 6 questions:**

1. **O1 — Delivery defined?** Can you write down how the product/service gets delivered without the founder?
2. **O2 — Quality consistent?** Does the customer get the same experience every time?
3. **O3 — Unit-level efficient?** Do you know the time, cost, and inputs per delivered unit?
4. **O4 — Vendor managed?** Are critical vendors (suppliers, contractors, infra) documented with backups?
5. **O5 — Incidents handled?** Is there a process when something goes wrong (outage, defect, missed deadline)?
6. **O6 — Process scaling?** Are bottlenecks identified and being attacked?

**Catalog shape:** Highly variable by business model. Most "spokes" are process-documentation activities and one-time setups. Some industry-specific (supply chain for products, infra for SaaS, scheduling for services).

**Sketch of interventions (~15):**

- Delivery process document (one page per service/product line)
- Standard operating procedure (SOP) for top 5 recurring tasks
- Vendor list + contact + backup
- Inventory / supply tracking (for physical)
- Capacity planning sheet (for services)
- Quality checklist (post-delivery customer-facing or internal)
- Incident response runbook
- Status-page / customer-comms template
- Postmortem template (blameless, fact-first)
- KPI dashboard (delivery-time, defect-rate, on-time-%)
- Bottleneck analysis (Theory of Constraints–lite)
- Process automation gate (when to script vs. when to hire vs. when to leave manual)
- Subcontractor / freelancer evaluation rubric
- COGS / unit-cost worksheet (cross-references `/finance` unit econ)
- Insurance + liability for the operations footprint (cross-references `/legal`)

**Hard call:** The `/ops` domain is the most business-model-dependent. SaaS ops, e-commerce ops, service-business ops, and physical-product ops barely overlap. We'll likely need ops-pack *variants* keyed off the business model the user picked in `/hub`.

---

## `/people` — Hiring, Culture, Compensation

**Stage activation:** Grow (first hire); Scale (team + culture + comp + org design).

**The spine — 6 questions:**

1. **H1 — First hire timed right?** Are you hiring against a defined bottleneck or against vanity?
2. **H2 — Role defined?** Is the job in writing with outcomes (not tasks)?
3. **H3 — Comp defensible?** Do you have a comp framework (bands, equity, levels) you'd show a candidate?
4. **H4 — Hiring process working?** Do you have a defined interview loop with structured scorecards?
5. **H5 — Onboarding?** Does a new hire produce in their first 30 days?
6. **H6 — Performance loop?** Is there a regular 1:1 + feedback rhythm so people grow and you catch problems early?

**Catalog shape:** Catalog of plays + decision trees (when to hire, contractor vs. employee, equity vs. cash, lay off vs. coach).

**Sketch of interventions (~16):**

- "Is this the right time to hire?" decision tree
- Role definition template (outcomes, not tasks)
- Comp band creation (use Pave / Levels.fyi anchors)
- Equity grant policy
- Sourcing channel pick (network, recruiter, job boards, communities)
- Structured interview loop (4–5 stages with scorecards)
- Reference check protocol
- Offer + negotiation playbook
- 30/60/90 onboarding plan
- 1:1 cadence + template
- Quarterly performance conversation template
- Bonus / merit-increase process
- Underperformer protocol (coach → PIP → exit)
- First management hire (when to add a layer)
- Culture document — only write one after you have ≥10 people and patterns of what you actually do
- Layoffs — done humanely if/when needed; this is a serious doc, not an outline note

**Content sourcing note:** People domain has high emotional + legal stakes. Hire-fire content should be conservative. Avoid prescribing PIP language; instead, point to legal counsel for the actionable parts.

---

## `/governance` — Board, Advisors, Investors

**Stage activation:** Scale primarily. (Earlier-stage founders rarely benefit from formal governance until they take outside money.)

**The spine — 5 questions:**

1. **G1 — Reporting cadence?** Do you produce a monthly or quarterly investor/board update without prompting?
2. **G2 — Board composition?** If you have a board, are seats well-allocated (founder, investor, independent)?
3. **G3 — Advisors useful?** Do your advisors actually contribute (intros, decisions, judgment) or just collect equity?
4. **G4 — Decisions tracked?** Are major decisions documented with reasoning so future-you and future-board can audit?
5. **G5 — Equity hygiene?** Is the cap table clean, current, and understood?

**Catalog shape:** Smaller — most "interventions" are documents and cadences, not experiments.

**Sketch of interventions (~10):**

- Monthly investor update template (highlights, lowlights, asks, metrics)
- Quarterly board deck template
- Board meeting cadence + minutes template
- Advisor agreement template (vesting, scope, equity %)
- Cap-table maintenance (use Carta / Pulley / Capbase)
- Stock-option administration
- 409A valuation (when needed)
- Decision log (for major strategic decisions; future-proofs hindsight bias)
- Annual budget + variance review with board
- Strategic review (yearly; what did we say last year, what happened, what changed)

**Hard call:** This domain mostly applies to *funded* startups. Bootstrapped founders may never need it. The lifecycle routing should reflect that.

---

## Summary — What's left to build

| Domain | Status | Effort to ship a v1 |
|---|---|---|
| `/hub` | **Shipped (v3)** | Done |
| `/validate` | Catalog drafted | Wire-up (~1 day) |
| `/ideate` | Catalog drafted | Wire-up (~1 day) |
| `/sales` | Catalog drafted | Wire-up (~1 day) |
| `/finance` | Outline only | Catalog draft + decision-tree UI (~2–3 days) |
| `/product` | Catalog drafted | Wire-up (~1 day) |
| `/customer-success` | Outline above | Catalog draft (~1 day) + wire-up (~1 day) |
| `/legal` | Outline above | Decision-tree heavy; needs legal review (~3–5 days + lawyer time) |
| `/ops` | Outline above | Business-model variants; catalog draft (~2 days) + wire-up (~1 day) |
| `/people` | Outline above | Catalog draft (~1 day) + wire-up (~1 day) |
| `/governance` | Outline above | Smaller catalog (~½ day) + wire-up (~½ day) |
| Lifecycle shell `/` | Copy drafted | Build (~1 day) + quiz logic (~½ day) |

**Realistic delivery shape:**
- **Sprint 1 (1 week):** Lifecycle shell + wire-up `/validate`, `/ideate`, `/sales`, `/product`. Now 5 domains live.
- **Sprint 2 (1 week):** `/customer-success` + `/people` + `/governance`. Now 8 domains live; growth+scale cycle covered.
- **Sprint 3 (1–2 weeks):** `/finance` + `/ops` (with model variants). Hardest two.
- **Sprint 4:** `/legal` with lawyer review.

End state: a tool that says "where are you, here's what's next" across 12 lifecycle stages and 11 domains, all driven by one engine.
