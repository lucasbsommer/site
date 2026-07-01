# /customer-success — Content Pack (draft v0)

The Launch/Grow/Scale-stage tool. Handles the arc from *"they just paid"* to *"they paid again and referred someone."* Sales wins; CS keeps. In most businesses, CS is the highest-leverage revenue lever — retained customers cost 5–10x less than new ones.

---

## Customer Success Questions (the "spine")

6 questions:

1. **C1 — Time-to-value?** Does a new customer reach the promised outcome within their first defined window (an hour, a day, a week)?
2. **C2 — Activation?** What % of signups complete the specific event that captures value?
3. **C3 — Retention?** What are your week-1, month-1, month-3 retention curves?
4. **C4 — Health?** Can you tell who's at risk *before* they churn?
5. **C5 — Expansion?** Do customers buy more, buy more often, or refer others?
6. **C6 — Voice?** Do product, sales, and leadership hear the customer's *actual* voice at least monthly?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`category` ∈ `onboard` | `activate` | `retain` | `save` | `expand` | `advocate` | `voice`

---

## Catalog (20 plays)

### C1–C2 — Onboarding & Activation

#### `activation-event-definition`
- **Define the Activation Event** · `activate`
- **Answers:** C2
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** One user action, written down, that signals "captured value." Not signup. Not a login. The specific first-outcome (e.g. sent first invoice; onboarded first team member; got first delivery).
- **When:** Before anything else in CS. Without this, "activation rate" is a made-up number.
- **Failmode:** Picking a metric because it's easy to measure. The right activation event is the one that correlates with 30-day retention.

#### `onboarding-email-sequence`
- **Onboarding Email Sequence** · `onboard`
- **Answers:** C1, C2
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** 4–7 emails over the first 14 days, each with one specific ask and one specific piece of guidance. Behavior-triggered when possible (sent based on what user did or didn't do), not calendar-triggered.
- **When:** Once you have ≥5 signups/week. Before that, hand-write it.
- **Failmode:** Feature overviews. The user doesn't want a tour; they want to get to their outcome.

#### `in-product-onboarding`
- **In-Product Onboarding Flow** · `onboard`
- **Answers:** C1, C2
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** A picked pattern (checklist / progress bar / concierge chat), executed. Checklists beat tours for most B2B. Concierge (real human hand-holding) wins for anything > $500/mo.
- **When:** When your activation rate is <40% and you've watched enough sessions to know why.
- **Failmode:** Adding a product tour and calling it done. Tours don't survive first contact with people who skip.

#### `first-week-highthouch-checkin`
- **First-Week Check-In Call** · `onboard`
- **Answers:** C1, C2, C6
- **Cost / TTV / Effort:** $ · concurrent · solo-week
- **Output:** A 20-minute call with every new customer in their first 7 days. Ask three things: what were you trying to do, what worked, what didn't. Founder does this personally until customer #100.
- **When:** Every deal above ~$1k. For sub-$1k SaaS, use an async form + selective calls with signals.
- **Failmode:** Turning it into a sales call. The check-in is data collection, not upsell.

#### `time-to-value-measurement`
- **Time-to-Value Measurement** · `activate`
- **Answers:** C1
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Median days from signup → activation event. Tracked weekly. When it drops, celebrate; when it rises, root-cause.
- **When:** As soon as activation event is defined.
- **Failmode:** Reporting average instead of median. A few power users skew the average and hide the actual experience.

---

### C3–C4 — Retention & Health

#### `retention-cohort-review`
- **Weekly Retention Cohort Review** · `retain`
- **Answers:** C3
- **Cost / TTV / Effort:** $ · 30 min weekly · solo-hour
- **Output:** A cohort chart (rows = signup week, cols = weeks since signup, cells = % active). Read the diagonals to spot shifts. The single most-important CS chart.
- **When:** Once you have ≥8 weeks of data. Before that, cohorts are too small.
- **Failmode:** Looking only at aggregate retention. The aggregate hides which cohort is failing.

#### `health-score-model`
- **Health Score Model** · `retain`
- **Answers:** C4
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** A composite score per customer (product usage + support velocity + relationship signals + payment health). Tuned against known churns and known expansions. Not a magic number; a working hypothesis.
- **When:** Once you have ≥20 customers and ≥5 churns worth of data.
- **Failmode:** Building a health score too early, treating it as truth. Your first version will be wrong; iterate every quarter.

#### `at-risk-playbook`
- **At-Risk Playbook** · `save`
- **Answers:** C4
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A written protocol: what triggers a red flag (usage drop of X%, support-issue count > Y, exec sponsor left), who owns the outreach, what the first call opens with, what the offer looks like.
- **When:** Once the health score is running and you've watched a few churns you might have caved.
- **Failmode:** Automated "we noticed you haven't logged in" emails. Real save motions are human, specific, and offer something.

#### `save-call-protocol`
- **Save Call Protocol** · `save`
- **Answers:** C3, C4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A structured 30-minute conversation for when a customer signals cancellation: understand why, address what's addressable, offer a specific concession (pause, discount, feature commitment), respect a "no."
- **When:** After your first 3 unnecessary churns.
- **Failmode:** Discounting first. Discount is the last card, not the first.

---

### C5 — Expansion

#### `expansion-trigger-detection`
- **Expansion Trigger Detection** · `expand`
- **Answers:** C5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A written list of events that mean "this customer is ready to buy more": usage over threshold, new use case detected, new department active, headcount growth.
- **When:** Once you have ≥1 expansion signal type observed. Codify it.
- **Failmode:** Waiting for the customer to ask. Most customers won't ask; they'll leak.

#### `qbr-template`
- **Quarterly Business Review Template** · `expand`
- **Answers:** C5, C6
- **Cost / TTV / Effort:** $ · 2 days · solo-week
- **Output:** A repeatable QBR deck: customer's stated outcomes, evidence of progress toward those outcomes, gaps, what's next. Focused on customer's business, not your feature roadmap.
- **When:** Mid-market+ accounts post-90-day onboarding.
- **Failmode:** QBRs that become product update meetings. If the customer isn't the star, cut the QBR.

#### `renewal-motion`
- **Time-Boxed Renewal Motion** · `expand`
- **Answers:** C3, C5
- **Cost / TTV / Effort:** $ · 4 weeks per renewal · solo-week
- **Output:** A defined sequence starting 90 days pre-renewal: usage audit → outcome check → renewal proposal (often with expansion) → close by day 60 pre-renewal. Auto-renew is not a renewal motion.
- **When:** Any B2B contract with fixed terms.
- **Failmode:** Waiting until day 30 pre-renewal. That's crisis mode.

#### `cross-sell-discovery`
- **Cross-Sell Discovery** · `expand`
- **Answers:** C5, C6
- **Cost / TTV / Effort:** $ · concurrent · solo-week
- **Output:** In every QBR or check-in, one question: "what else are you spending time or money on that's adjacent to what we solve?" Feeds product roadmap *and* expansion.
- **When:** Every customer touchpoint past onboarding.
- **Failmode:** Pitching your other product first. Ask, listen, connect later.

#### `winback-sequence`
- **Win-Back Sequence** · `expand`
- **Answers:** C5
- **Cost / TTV / Effort:** $ · concurrent · solo-week
- **Output:** For churned customers: a 30 / 90 / 180-day sequence. Not "please come back" — instead, "we shipped X, do you want to see it?" or "the thing you asked about is live." Personal.
- **When:** From your first churn onward.
- **Failmode:** Generic re-engagement blasts. Cheaper to write from your own inbox, personally.

---

### C6 — Voice & Advocacy

#### `feedback-theme-routing`
- **Feedback Theme Routing** · `voice`
- **Answers:** C6
- **Cost / TTV / Effort:** $ · monthly · solo-day
- **Output:** A monthly summary: top 5 themes from customer conversations, tagged with #product / #sales / #ops / #pricing. Routed to the right owner with counts and quotes.
- **When:** From day 1 of having a CS function. Even solo founders benefit.
- **Failmode:** No routing — everything piles up in one Notion doc nobody reads. Themes without owners die.

#### `customer-roundtable`
- **Customer Roundtable / Advisory Group** · `voice` `advocate`
- **Answers:** C6
- **Cost / TTV / Effort:** $$ · monthly (recurring) · solo-week
- **Output:** 5–8 customers meeting quarterly (video is fine). Roadmap review, pain-point discussion, competitive intel. Best product-development shortcut in the game.
- **When:** Post ~25 customers, before ~200.
- **Failmode:** Turning it into a customer marketing group. It's for *them* to teach *you*, not the other way around.

#### `testimonial-collection`
- **Testimonial Collection Process** · `advocate`
- **Answers:** C5
- **Cost / TTV / Effort:** $ · concurrent · solo-hour
- **Output:** A moment (post-activation, post-outcome, post-renewal) at which the customer is systematically asked for a testimonial. Two-question ask, screenshotable answer.
- **When:** Immediately post-customer-outcome. Delay kills spontaneity.
- **Failmode:** Copy-editing testimonials into unrecognizability. Weaker in customer-voice > polished in yours.

#### `case-study-production`
- **Case Study Production** · `advocate`
- **Answers:** C5, C6
- **Cost / TTV / Effort:** $$ · 4 weeks per study · solo-week
- **Output:** 2–4 case studies per year: real customer, real numbers, real friction on the path to value. Reviewed by legal/customer, published, used in sales.
- **When:** Once you have customers with quantifiable outcomes and permission to talk.
- **Failmode:** Case studies that read like ads. Real ones include the friction.

#### `nps-restraint`
- **NPS / CSAT — Used Sparingly** · `voice`
- **Answers:** C4, C6
- **Cost / TTV / Effort:** $ · quarterly · solo-hour
- **Output:** Quarterly NPS *tied to a follow-up motion*: promoters → asked for referral, passives → asked what's missing, detractors → save call scheduled. NPS without follow-up is theater.
- **When:** After you have >30 customers and a save-call protocol.
- **Failmode:** Sending surveys and reporting the number. That's the whole antipattern.

#### `referral-mechanic` *(cross-domain: also in /sales)*
- **Referral Mechanic** · `advocate`
- **Answers:** C5
- **Cost / TTV / Effort:** $ · 4 weeks · solo-week
- **Output:** A moment + a mechanism. Trigger it at delight (post-outcome, not post-purchase). Ask specifically ("who else in your org has this problem"), not generally ("tell your friends").
- **When:** Once you have ≥10 happy customers with defined outcomes.
- **Failmode:** Incentive-heavy programs with no ask motion. The ask matters more than the reward.

---

## Engine notes

- Prioritization: retention beats expansion beats acquisition on marginal-ROI. Weight C3/C4 heavily.
- Handoffs: `/sales` closes → CS onboards. Expansion deals identified in CS → routed back to `/sales` for closing.
- Cross-links to `/product` (feedback themes) and `/finance` (unit econ / LTV inputs).
