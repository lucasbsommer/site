# /finance — Content Pack Outline (draft v0)

The first domain where the `/hub` engine *doesn't* cleanly fit. Marketing/sales/validation are all about *which interventions to run, in what order*. Finance is about *what state the business is in, what decisions to make, and what to set up once*.

So `/finance` uses a **mixed pattern**: a few "spokes" for one-time setup activities (like `/hub`), plus **decision trees** for situations (pricing, fundraising, taxes) and **standing dashboards** for ongoing health (cash, unit economics).

This file outlines the shape. Catalog drafting happens after the model is agreed.

---

## Finance Questions (the "spine")

6 questions:

1. **M1 — Money in?** Can you take payment from the customers you're trying to serve?
2. **M2 — Pricing?** Have you set price on intent (value, capture) vs. on guess?
3. **M3 — Books?** Are revenues and expenses being recorded somewhere reconcilable?
4. **M4 — Cash?** Do you know your runway to the day?
5. **M5 — Unit economics?** Do you know what one customer costs to win and is worth (CAC, LTV, payback)?
6. **M6 — Capital?** Do you have a plan for the next funding event (bootstrap, debt, equity)?

---

## Domain shape — three patterns, not one

### Pattern A — Spokes (set-up-once activities)
Same shape as `/hub` / `/sales`. Examples:
- Set up business bank account
- File for EIN
- Pick accounting software (Xero / QuickBooks / Wave)
- Set up payment processor (Stripe / Square / direct invoicing)
- Set up payroll (Gusto / Rippling)
- Engage bookkeeper
- File for sales tax permits where required
- Set up expense management (Ramp / Brex / Divvy)

These can use the existing catalog pattern: id, name, cost, ttv, effort, prereqs, output, failmode.

### Pattern B — Decision trees (situational guidance)
Things `/finance` should *teach the user how to decide*, not just queue up.

- **Pricing decision tree.** Cost-plus / value-based / competitive / freemium / usage. Inputs: business model, customer type, willingness-to-pay data. Output: a recommended approach + a sketch price.
- **Entity decision tree.** Sole prop / LLC / S-corp / C-corp. Inputs: liability exposure, partnership shape, funding plans, state of operation. Output: recommended structure + reasons.
- **Funding decision tree.** Bootstrap / debt / SAFE / priced round / strategic. Inputs: capital needed, time horizon, gross margin, control preferences. Output: recommended path.
- **Hire vs. contractor decision tree.** Worker classification rules + cost comparison. Inputs: role, hours, control level. Output: classification + total cost.
- **Reinvest vs. distribute decision tree.** For profitable bootstrapped businesses. Inputs: growth opportunities, tax situation, owner goals.

Each tree is short (3–5 questions), opinionated, and ends with a single recommendation + 1–2 alternatives.

### Pattern C — Dashboards (ongoing health)
Things you watch, not things you do.

- **Cash position + runway** — bank balance, burn rate, runway in months, runway-to-date.
- **Unit economics dashboard** — CAC, LTV, gross margin, payback period.
- **P&L summary** — top-line revenue, gross profit, operating expenses, net.
- **AR aging** — who owes you, how late.
- **Tax estimates dashboard** — federal, state, sales tax owed YTD, next payment dates.

These need actual data, not just user inputs. v1: user types in their numbers. v2: integrations with Stripe / banks / accounting software via Plaid or vendor APIs.

---

## Recommended v1 scope

Don't ship the whole thing. v1 should cover:

1. **All Pattern A setup spokes** for two business shapes — (a) solo / freelance, (b) seed-stage startup with one employee + 1099s. ~15 spokes.
2. **Pricing decision tree only** (Pattern B). Most-used, most-valuable, most-asked.
3. **Cash + runway dashboard only** (Pattern C). The only number that *must* be right and watched. Defer the rest.

Total v1 effort: comparable to `/validate` content scope. Defers the harder integrations.

---

## Content sourcing risk

Finance is the first domain where being wrong has real cost (missed taxes, bad entity choice, IRS penalties, lawsuit exposure). Two implications:

- Every Pattern A/B item should ship with: "this is general guidance, not professional advice; here are the situations where you should pay an accountant/lawyer."
- Pattern B decision trees should be conservative — surface uncertainty rather than over-prescribe. "If your annual revenue is >$X and you operate in multiple states, get a CPA before deciding LLC vs S-corp."
- Decision: do we let users pay to be connected to a vetted CPA/lawyer via the tool? Monetization path; also a trust hazard if we don't vet well. Defer to post-launch.

---

## Engine notes — what changes vs. `/hub`

- The "primary intervention" model breaks down. A pricing question doesn't have one experiment to run; it has a *decision* to make. We need a UI surface for decision trees (a guided flow ending in a recommendation).
- Cash dashboard needs *recurring* input (this month's balance, this month's burn). The existing localStorage state model handles this fine — just need a "monthly check-in" UX pattern.
- Cross-domain feeders: `/validate`'s pricing experiments produce inputs to `/finance`'s pricing decision tree. `/sales`'s ACV and cycle length produce inputs to unit economics. We should pass values across when we wire the lifecycle layer.

---

## Open design questions

- [ ] Should `/finance` be one tool or split (e.g. `/money` for setup + dashboards, `/raise` for fundraising)? Splitting reduces cognitive scope; merging keeps state shared. Lean toward **one tool** for v1.
- [ ] Decision-tree UI: linear wizard, branching questionnaire, or interactive decision tree (clickable nodes)? Wizard is cheapest; tree is most educational.
- [ ] How do we handle multi-currency / multi-country? US-only for v1 is honest; flag it on the page.
- [ ] Should we plug into Plaid / Stripe / accounting tools in v1, or strictly typed-in numbers? Typed v1, integrated v2.
- [ ] How prescriptive should we be about *which* tool (Stripe vs. Square, Gusto vs. Rippling)? Recommendation: yes, name names. Founders without strong opinions are paralyzed by parity comparisons.
