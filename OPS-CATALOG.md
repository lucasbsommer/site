# /ops — Content Pack (draft v0)

The Grow/Scale-stage tool. Once product works and sales flow, ops is what decides whether the business is buildable or a treadmill. Highly business-model dependent — the same "delivery process" doc looks completely different for a SaaS company, an e-commerce brand, a service business, and a physical-product operation. We ship a generic core catalog and note which items fork by shape.

---

## Ops Questions (the "spine")

6 questions:

1. **O1 — Delivery defined?** Can the product/service be delivered by someone other than the founder, using a doc, without loss of quality?
2. **O2 — Consistent?** Does each customer get the same experience — the same quality, the same speed, the same fixes when things go wrong?
3. **O3 — Unit-level economic?** Do you know the time, cost, and inputs required per delivered unit — and where they're moving?
4. **O4 — Vendor risk managed?** Are critical vendors (suppliers, contractors, infra) documented, priced, and backed up?
5. **O5 — Incidents handled?** When something breaks, is there a defined response that doesn't require heroics?
6. **O6 — Bottlenecks attacked?** Are the top 1–2 constraints identified and being actively worked on?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`category` ∈ `process-doc` | `quality` | `unit-econ` | `vendor` | `incident` | `scaling`

`business-shape` (axis, filter): `saas` | `ecommerce` | `service` | `physical` | `marketplace` — several interventions only make sense for one or two shapes.

---

## Catalog (16 interventions)

### O1 — Delivery Defined

#### `delivery-process-doc`
- **Delivery Process Doc** · `process-doc`
- **Answers:** O1
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** One page per product/service line: inputs required, steps in order, handoffs between roles, expected duration, output artifact. Written so a new hire could execute in 30 days.
- **When:** The moment the founder is the delivery bottleneck for >20 hrs/week.
- **Failmode:** Writing the doc how it *should* work instead of how it actually does. Document from a real recent delivery.

#### `top-5-sops`
- **Top-5 Standard Operating Procedures** · `process-doc`
- **Answers:** O1, O2
- **Cost / TTV / Effort:** $ · 2 weeks · solo-week
- **Output:** The 5 most-frequent recurring tasks (invoicing, onboarding a customer, refund processing, monthly close, delivery day) each documented with steps + checklist + owner.
- **When:** Once tasks are being done more than 4x/month by someone other than the founder.
- **Failmode:** SOPs written for edge cases. Optimize for the 90% path; note the exceptions.

#### `role-clarity-raci`
- **Role Clarity (RACI-lite)** · `process-doc`
- **Answers:** O1, O2
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** For each core process, one person Responsible, one Accountable (owns outcome). Consulted/Informed only where they matter. Every process has an accountable person or it's already broken.
- **When:** As soon as ≥3 people share operational responsibility.
- **Failmode:** Committee accountability. Two people accountable = zero people accountable.

---

### O2 — Quality Consistent

#### `quality-checklist`
- **Quality Checklist** · `quality`
- **Answers:** O2
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** A short pre-delivery checklist for each product/service line. 5–10 items max. Prevents the top recurring defects.
- **When:** After you've fixed the same defect twice.
- **Failmode:** 40-item checklists nobody uses. Add items from real defects; remove items nobody checks.

#### `defect-log`
- **Defect / Complaint Log** · `quality`
- **Answers:** O2, O5
- **Cost / TTV / Effort:** $ · concurrent · solo-hour
- **Output:** Every defect, complaint, or "why did that happen?" moment logged: date, symptom, root cause, resolution, prevention added. Reviewed monthly.
- **When:** From your first customer.
- **Failmode:** Fixing without logging. Same defect ships next year with no institutional memory.

#### `customer-facing-comms-template`
- **Customer Comms Template Library** · `quality` `incident`
- **Answers:** O2, O5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Pre-written messages for common situations: shipment delay, service outage, refund request, complaint acknowledgment. Consistent voice, faster response, no panic writing.
- **When:** Once you're sending >10 customer messages/week or after the first embarrassing on-the-fly one.
- **Failmode:** Templates that sound corporate. Match your brand voice; edit before sending.

---

### O3 — Unit-Level Economic

#### `time-tracking-per-unit`
- **Time-per-Unit Tracking** · `unit-econ` · service, physical
- **Answers:** O3
- **Cost / TTV / Effort:** $ · 4 weeks · solo-week
- **Output:** Actual hours (or minutes) it takes to deliver one unit of your service/product. Founder logs first; team logs after. Reveals which parts are secretly unprofitable.
- **When:** As soon as you have >5 units delivered/month.
- **Failmode:** Estimating instead of logging. Founder estimates are systematically 40% low.

#### `unit-cogs-worksheet`
- **Unit COGS Worksheet** · `unit-econ`
- **Answers:** O3
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Fully-loaded cost per unit: labor (yours or others'), materials/inputs, allocable overhead, delivery cost. Feeds `/finance` unit econ dashboard.
- **When:** Before setting or changing prices.
- **Failmode:** Ignoring your own labor cost. Cost your time at market rate, not zero.

#### `capacity-plan`
- **Capacity Plan** · `unit-econ` · service, physical
- **Answers:** O3, O6
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Given current process/team, how many units/month can you deliver at target quality? Where is the ceiling? What breaks first when you cross it?
- **When:** Once demand exceeds ~70% of estimated capacity.
- **Failmode:** Assuming linear capacity. Add a customer, add 10% more overhead than expected; that's the pattern.

---

### O4 — Vendor Management

#### `vendor-list-and-backups`
- **Vendor List + Backups** · `vendor`
- **Answers:** O4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Every vendor: what they provide, spend/year, contract terms, contact, and (critically) named backup. Reviewed twice a year.
- **When:** Once you have >5 recurring vendors or one vendor >10% of ops cost.
- **Failmode:** No backup for critical vendors. You find out the wrong way that they were.

#### `contract-review-cadence`
- **Contract Review Cadence** · `vendor`
- **Answers:** O4
- **Cost / TTV / Effort:** $ · quarterly · solo-day
- **Output:** Quarterly 60-min review of vendor contracts: what's expiring, what's over-priced now (many auto-renew at higher rates), what's under-used, what's un-needed.
- **When:** Once total vendor spend > ~$5k/month.
- **Failmode:** Never opening the folder. Auto-renewals eat margin quietly.

---

### O5 — Incidents

#### `incident-runbook`
- **Incident Runbook + Severity Levels** · `incident`
- **Answers:** O5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** 3 severity levels (SEV1 = business-halting, SEV2 = customer-impacting, SEV3 = internal). For each: who's on-call, first 15-minute response, customer-comm trigger, resolution owner.
- **When:** After your first bad incident. (There will be one.)
- **Failmode:** Runbook that doesn't get used because it lives 6 clicks deep. Pin it.

#### `blameless-postmortem`
- **Blameless Postmortem Template** · `incident`
- **Answers:** O5
- **Cost / TTV / Effort:** $ · 1 day per incident · solo-day
- **Output:** Post-SEV1/SEV2 write-up: timeline, root cause, contributing factors, what went well, what didn't, action items (owner + date). Fact-first, no fingers pointed.
- **When:** Every SEV1/SEV2 incident. Immediate skip is what leaks trust from a team.
- **Failmode:** Blame. Root-cause culture dies on the first "who screwed up?"

#### `status-page`
- **Status Page** · `incident` · saas, service
- **Answers:** O5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A public URL (Statuspage / free tools / a `/status` route) that shows current health and history. Automatically updated where possible.
- **When:** Once outages meaningfully impact customers (SaaS: right away; service: after you have ≥50 customers).
- **Failmode:** Only updated during outages. Customers assume no update = you're hiding something. Ship the "all systems operational" state too.

---

### O6 — Bottleneck Attack

#### `bottleneck-audit`
- **Bottleneck Audit (Theory of Constraints–lite)** · `scaling`
- **Answers:** O6
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Identify the *single* constraint limiting throughput this quarter. Write down what would relieve it. Don't optimize anything else until this one moves.
- **When:** Whenever you feel like everything needs improvement. It doesn't. One thing does.
- **Failmode:** Attacking multiple bottlenecks in parallel. Focus is the point.

#### `automation-gate`
- **Automate vs. Hire vs. Endure — Gate** · `scaling`
- **Answers:** O3, O6
- **Cost / TTV / Effort:** $ · 2 hours per candidate · solo-hour
- **Output:** For each recurring task consuming >5 hrs/week: is the cheapest solution to automate (script/tool), hire (contractor/employee), or endure (accept, defer)? Answer with math: time saved × months × your hourly cost vs. build cost.
- **When:** For every task hit >5 hrs/week for >3 months.
- **Failmode:** Automating too early (before you understand the task) or too late (after it dominates your calendar for a year). Rule of thumb: automate after task is stable, before it consumes 20% of your week.

#### `hiring-trigger-ops`
- **First Ops Hire Trigger** · `scaling`
- **Answers:** O1, O6
- **Cost / TTV / Effort:** — · one-time decision · solo-hour
- **Output:** Explicit criteria for when to hire your first operations person: recurring tasks are documented, bottleneck is people-shaped (not process-shaped), founder is losing >10 hrs/week to ops. Cross-references `/people`.
- **When:** Before you're desperate. Desperate hires fail.
- **Failmode:** Hiring hoping they'll fix undocumented chaos. They can't. Document first.

---

## Engine notes

- Business-shape filter is essential. A SaaS founder gets the incident runbook and status page; a service founder gets capacity planning and time-per-unit tracking. Show only relevant interventions per shape.
- Ops maturity mostly correlates with team size. Below 3 people, most of this is deferred. Above 10, most of it is table stakes.
- Cross-links: `/finance` (unit econ, COGS), `/legal` (vendor contracts, insurance), `/people` (hiring triggers), `/product` (SEV-1 postmortems for SaaS).
