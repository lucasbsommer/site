# /finance — Content Pack (draft v0)

Supersedes `FINANCE-OUTLINE.md`. The Launch/Grow/Scale-stage tool. Uses the mixed-pattern engine approach identified in the outline: **setup spokes** (one-time, like `/hub` catalog items), **decision trees** (situational guidance), and **dashboards** (ongoing health). Not everything fits the standard catalog schema; we mark which pattern each intervention uses.

**Universal disclaimer:** General guidance, not tax, accounting, or legal advice. Everything here should be reviewed by a CPA and (where applicable) a tax attorney against your specific facts.

---

## Finance Questions (the "spine")

6 questions:

1. **M1 — Money in?** Can you take payment from the customers you're trying to serve, in the way they want to pay?
2. **M2 — Pricing?** Have you set price with intent (based on value, capture strategy, comps) rather than by feel?
3. **M3 — Books?** Are revenues and expenses being recorded somewhere reconcilable, monthly?
4. **M4 — Cash?** Do you know your runway to the day?
5. **M5 — Unit economics?** Do you know what one customer costs to win (CAC), what they're worth (LTV), and how fast you recover the cost (payback)?
6. **M6 — Capital?** Do you have a plan for the next funding event, whether that's a bootstrap milestone, a debt facility, or a raise?

---

## Field structure

`id` · `name` · `pattern` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`pattern` ∈ `spoke` (setup) | `tree` (decision guidance) | `dashboard` (ongoing)

`category` ∈ `payments` | `pricing` | `bookkeeping` | `cash` | `unit-econ` | `taxes` | `capital` | `owner-comp`

---

## Catalog (19 interventions)

### M1 — Money In (Setup)

#### `business-bank-account`
- **Business Bank Account** · `spoke` · `payments`
- **Answers:** M1
- **Cost / TTV / Effort:** $ · 1 week · solo-day
- **Output:** A dedicated business checking account (Mercury / Relay / your local bank). Personal + business commingling is a fast path to piercing the corporate veil.
- **When:** Immediately after entity + EIN. Before your first sale.
- **Failmode:** Using a personal account "for now." Now becomes 18 months and unraveling the mixed history costs 40 accountant hours.

#### `payment-processor-setup`
- **Payment Processor Setup** · `spoke` · `payments`
- **Answers:** M1
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Stripe (default for SaaS, e-comm, most online), Square (default for physical retail + service), direct ACH via bank (default for B2B invoicing), Bill.com or Anrok for B2B AR. Configured with tax collection where required.
- **When:** Before revenue. Tested end-to-end (real charge, real refund) before public launch.
- **Failmode:** Building your own; putting off tax integration; not testing refunds. Refunds go wrong.

#### `invoicing-and-ar-flow`
- **Invoicing + AR Flow (B2B)** · `spoke` · `payments`
- **Answers:** M1, M4
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A defined flow: invoice sent day X, terms (Net 15 / 30 / 45), first reminder day 5-past-due, second day 15-past-due, escalation day 30-past-due. Automated where possible.
- **When:** Before you have >5 open invoices. Founders write off late payments they shouldn't have.
- **Failmode:** No follow-up cadence. AR ages, cash starves, "we're growing fast but broke."

---

### M2 — Pricing

#### `pricing-strategy-tree`
- **Pricing Strategy Decision Tree** · `tree` · `pricing`
- **Answers:** M2
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A guided flow → picked approach: cost-plus (default for commodity + physical goods with clear margins), value-based (default for B2B where you save/make customer money), competitive (default in commoditized software), freemium + paid tiers (default for horizontal SaaS with viral loops), usage-based (default when consumption varies wildly across customers).
- **When:** Before setting or resetting price.
- **Failmode:** Cost-plus for value-based businesses. Undercharging by 3–10x is the modal early-founder mistake.

#### `wtp-signal-from-validate`
- **WTP Signal Import (from `/validate`)** · `spoke` · `pricing`
- **Answers:** M2
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** Take WTP data collected during `/validate` (van Westendorp, pricing interviews) and set an initial price at the *high end of "acceptable"* rather than the middle. Adjust after 20+ sales.
- **When:** Immediately after `/validate` produces pricing signal.
- **Failmode:** Setting price at the middle of the acceptable range. You can always discount from a higher list; raising is harder.

#### `pricing-review-cadence`
- **Pricing Review Cadence** · `dashboard` · `pricing`
- **Answers:** M2
- **Cost / TTV / Effort:** $ · quarterly · solo-day
- **Output:** Quarterly review: what % of prospects push back on price (target: some, not all), what % of the last 20 deals took a discount, is price the top reason for lost deals? Trigger for annual list-price increase.
- **When:** Quarterly from launch.
- **Failmode:** Never revisiting price. List prices should rise ~annually with value; grandfathering existing customers.

---

### M3 — Bookkeeping

#### `accounting-software-setup`
- **Accounting Software Setup** · `spoke` · `bookkeeping`
- **Answers:** M3
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Xero or QuickBooks Online configured with a real chart of accounts (not the default). Bank feed, payment-processor feed, expense-tool feed all connected. Reconciled to zero.
- **When:** Same week as opening bank account.
- **Failmode:** Deferring until "we have time." Then having to reconstruct 12 months of records at year-end for taxes at 3x the cost.

#### `bookkeeper-engagement`
- **Bookkeeper Engagement** · `spoke` · `bookkeeping`
- **Answers:** M3
- **Cost / TTV / Effort:** $$ · 4 weeks · solo-week
- **Output:** A bookkeeper (~$300–800/mo for early stage; more later) doing monthly reconciliation, categorization, and month-end close. Not a CPA (yet) — a bookkeeper is enough for the mechanics.
- **When:** Once monthly transactions exceed ~50 or founder-hours on books exceed 3/week.
- **Failmode:** Founder-as-bookkeeper for 18 months. Hourly rate math: bookkeepers cost less than your time.

#### `monthly-close-cadence`
- **Monthly Close Cadence** · `dashboard` · `bookkeeping`
- **Answers:** M3, M4
- **Cost / TTV / Effort:** $ · monthly · solo-day
- **Output:** By day 10 of each month: prior month is closed (reconciled, categorized, reviewed). P&L, balance sheet, and cash flow statement generated. Board and investor updates written *from* this data.
- **When:** From the moment you have a bookkeeper.
- **Failmode:** Closing when needed for a specific event. Nothing tests bookkeeping like a due-diligence request against 18 months of un-closed books.

---

### M4 — Cash

#### `cash-runway-dashboard`
- **Cash + Runway Dashboard** · `dashboard` · `cash`
- **Answers:** M4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A single view (spreadsheet is fine early; tools like Runway or Pry later): current bank balance, monthly burn (rolling 3-mo average), runway in months. Refreshed weekly.
- **When:** From day 1 of having a bank account.
- **Failmode:** Runway calculated only at board meetings. The number that must be right and known always.

#### `13-week-cash-forecast`
- **13-Week Cash Forecast** · `dashboard` · `cash`
- **Answers:** M4
- **Cost / TTV / Effort:** $ · 1 day · solo-week
- **Output:** Week-by-week forecast for the next 13 weeks: expected receipts (dated), expected outflows (payroll, vendors, rent, taxes), ending balance. Updated weekly by the bookkeeper or founder.
- **When:** Once runway drops below 12 months or when growing team creates lumpiness in cash.
- **Failmode:** Monthly forecast at monthly resolution. Cash gaps happen in weeks; monthly views hide them until day 25.

#### `runway-trigger-thresholds`
- **Runway Trigger Thresholds** · `tree` · `cash`
- **Answers:** M4, M6
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** Pre-committed decisions: at 9 months runway → begin fundraising or cash-flow-plan review. At 6 months → decision point (raise / cut / stretch). At 3 months → survival mode (deep cuts, hard conversations). Decisions committed *now*; painful cuts made faster later.
- **When:** Set once, revisit annually.
- **Failmode:** Waiting until 4 months to start raising. Rounds take 6.

---

### M5 — Unit Economics

#### `unit-economics-dashboard`
- **Unit Economics Dashboard** · `dashboard` · `unit-econ`
- **Answers:** M5
- **Cost / TTV / Effort:** $$ · 2 weeks · solo-week
- **Output:** Per-customer / per-unit view: CAC (blended and by channel), gross margin, contribution margin, LTV (with defined discount rate + churn assumption), payback period. Refreshed monthly.
- **When:** Once you have >30 customers or >6 months of retention data.
- **Failmode:** CAC based only on paid ads. Blended CAC (all G&A + marketing spend / new customers) is the truer number.

#### `contribution-margin-analysis`
- **Contribution Margin Analysis** · `dashboard` · `unit-econ`
- **Answers:** M5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** For each product line or customer segment: revenue minus variable cost per unit. Reveals which segments actually contribute to fixed cost recovery. Some "high-revenue" customers are unprofitable.
- **When:** Once you have >1 product/service line or >3 customer segments.
- **Failmode:** Ignoring COGS drift over time. Contribution margin should be recomputed quarterly at least.

---

### M6 — Capital

#### `funding-path-tree`
- **Funding Path Decision Tree** · `tree` · `capital`
- **Answers:** M6
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A guided decision: bootstrap (default when unit econ + growth allow), revenue-based financing (for scale-up SaaS with predictable ARR), SBA loan (SMB with 2+ years operating history), debt facility (mature revenue), SAFE / seed round (pre-revenue tech startup on venture track), priced round (post-PMF venture-track). Rationale documented per choice.
- **When:** Before pursuing any capital. Most founders skip this and default to whichever is loudest in their feed.
- **Failmode:** Raising equity for a business that could bootstrap. Or bootstrapping a business that competes with well-funded peers who will out-run you.

#### `bootstrap-vs-raise-framework`
- **Bootstrap-vs-Raise Framework** · `tree` · `capital`
- **Answers:** M6
- **Cost / TTV / Effort:** $ · 4 hours · solo-hour
- **Output:** Three-question test: (1) Is winning this market a land-grab where speed dominates? (2) Do we need capital-intensive investment (inventory, sales team, moat-building) before revenue can catch up? (3) Am I willing to run this company for outside stakeholders on their timeline? Two "yes" answers → raise. Otherwise → bootstrap.
- **When:** Once. Before any fundraising conversation.
- **Failmode:** Answering yes to (3) because you like the idea of being an investor-backed founder. That's not a strategy; it's a personality preference.

#### `investor-update-loop` *(cross-domain: also in /governance)*
- **Monthly Investor Update Loop** · `spoke` · `capital`
- **Answers:** M6
- **Cost / TTV / Effort:** $ · monthly · solo-hour
- **Output:** Email format described in `/governance`; from a finance angle, ensures the numbers reported are consistent with your monthly close.
- **When:** From the first outside dollar.
- **Failmode:** Numbers in the update that don't tie to the books. First diligence request exposes it.

---

### Owner Comp & Taxes (Additional)

#### `owner-comp-decision`
- **Owner Compensation Decision** · `tree` · `owner-comp`
- **Answers:** M2, M4, M6
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** Structured decision on founder salary, distributions, and equity treatment. S-Corp: reasonable salary requirement + distributions. C-Corp: salary only, no distributions to common. LLC: draws. Below-market pay for VC-funded seed founders is normal; above-market for bootstrapped-profitable is normal.
- **When:** At incorporation; annually thereafter.
- **Failmode:** Zero pay for years while profits accumulate. Or aggressive draws that starve growth or trigger IRS "reasonable comp" audits.

#### `tax-estimates-dashboard`
- **Tax Estimates + Deadlines Dashboard** · `dashboard` · `taxes`
- **Answers:** M3
- **Cost / TTV / Effort:** $ · quarterly · solo-day
- **Output:** A calendar: estimated federal + state income tax due (April, June, September, January), sales tax filings (varies by state), payroll tax deadlines (quarterly/annual), franchise tax (Delaware and others). Amounts estimated by bookkeeper/CPA.
- **When:** Set up at first year-end. Never skip a due date.
- **Failmode:** Under-estimating and being hit with underpayment penalties. Or missing a franchise-tax deadline in Delaware and having the entity voided.

---

## Engine notes

- Three UI modes are needed (unlike `/hub`, which is single-mode):
  - **Spoke mode** for setup activities (same as `/hub`).
  - **Tree mode** for decision guidance — a guided flow that ends in a recommendation + rationale + "here's how to execute."
  - **Dashboard mode** for ongoing metrics — user inputs monthly / weekly figures; system displays trends and triggers alerts (runway crossing threshold, unit econ deteriorating, etc.).
- The engine should present these three modes as visually distinct so the user knows which shape of interaction to expect.
- Cross-references: `/hub` (CAC feeds unit econ), `/sales` (ACV + cycle → forecast), `/validate` (pricing signal), `/legal` (entity + tax structure + sales-tax nexus), `/governance` (investor reporting + cap-table), `/customer-success` (LTV + retention curves).
- Explicit anti-scope: `/finance` does not replace a CPA or CFO. The value is *decisions and hygiene*, not tax filing or financial modeling for institutional investors.
