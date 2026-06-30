# /sales — Content Pack (draft v0)

The Launch/Grow-stage tool. Tests whether the `/hub` engine generalizes within a related-but-different domain. Marketing is **distribution to strangers**; sales is **converting interest into paid commitment**. Different motion, same underlying engine (Inputs + Catalog + Rules → Plan).

---

## Sales Questions (the "spine")

7 questions, evidence-based, parallel to `/validate`'s spine:

1. **S1 — ICP?** Do you have a defined Ideal Customer Profile (named, sharp)?
2. **S2 — Source?** Do you have ≥1 working source of qualified leads?
3. **S3 — Discovery?** Do you have a discovery process that surfaces real fit/pain in <2 calls?
4. **S4 — Close?** Is your close rate within band for your motion (PLG: 2–5%, SMB: 15–30%, mid-market: 20–40%, enterprise: 10–25%)?
5. **S5 — Cycle?** Is your sales cycle length acceptable for your ACV (rough rule: cycle months ≤ ACV/$1k)?
6. **S6 — Expansion?** Do customers expand (NRR > 100% if B2B; repeat purchase > 30% if B2C)?
7. **S7 — Scalable?** Is the founder no longer the only one who can close?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`category` ∈ `icp` | `lead-gen` | `qualify` | `discovery` | `demo` | `close` | `handoff` | `expansion` | `ops` | `enable`

`motion` (additional axis, multi-select) ∈ `founder-led` | `inside-sales` | `field` | `plg-assisted` | `channel`

---

## Catalog (24 sales activities/processes)

### S1 — ICP

#### `icp-write-up`
- **ICP One-Pager** · `icp`
- **Answers:** S1
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** One page: firmographics (size, geo, vertical), trigger event (what just happened that makes them buy *now*), buyer + user + economic-buyer roles, and explicit *anti*-ICP (who you refuse).
- **When:** Before any outbound. Without a written ICP, "qualified lead" means nothing.
- **Failmode:** Writing it once, ignoring it forever. ICP should be revisited every 90 days as data comes in.

#### `icp-50-named-accounts`
- **50 Named Accounts** · `icp`
- **Answers:** S1, S2
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A list of 50 real, named target accounts (or 100 named individual buyers for PLG/SMB). If you can't write the list, your ICP is too broad.
- **When:** Right after the ICP one-pager. Forces specificity.
- **Failmode:** Listing logos you'd love to win that don't match your actual ICP. Logos ≠ accounts.

#### `disqualification-criteria`
- **Disqualification Criteria** · `icp`
- **Answers:** S1, S3
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** 3–5 written reasons you'd hang up on a prospect even if they wanted to buy (wrong size, wrong tech stack, wrong timing, wrong team). Saying no faster is the highest-leverage sales skill.
- **When:** Before your first call. Founders accept everything early and learn this expensively.
- **Failmode:** Soft disqualifiers ("not a great fit"). Real ones are mechanical: "<10 employees" or "no AWS."

---

### S2 — Lead generation

#### `cold-outbound-sprint`
- **Cold Outbound Sprint** · `lead-gen` · founder-led, inside-sales
- **Answers:** S2, S3, S4
- **Cost / TTV / Effort:** $ · 4 weeks · solo-week
- **Output:** 100–200 personalized outreach attempts (email + LinkedIn) to the named-account list. Track: reply rate, meeting-booked rate, meeting-show rate, advance-to-discovery rate.
- **When:** First lead source for B2B with mid+ ACV. Founders should personally do the first 100. Don't delegate before you've felt it.
- **Failmode:** Templated spray. Real personalization (their post, their hire, their event) gets 10x the reply rate of "I noticed your company has 50 employees."

#### `inbound-content-system`
- **Inbound Content System** · `lead-gen` · plg-assisted
- **Answers:** S2
- **Cost / TTV / Effort:** $$ · 12+ weeks · solo-week (recurring)
- **Output:** A content engine (blog, podcast, newsletter) that targets the keywords and questions your ICP searches. Compounds slowly; pays forever.
- **When:** Anytime, but don't expect leads in <90 days. Pair with another channel that hits faster.
- **Failmode:** Producing content for your peers instead of your buyers. Write to your customer, not your investors.

#### `referral-mechanic`
- **Referral Mechanic** · `lead-gen`
- **Answers:** S2
- **Cost / TTV / Effort:** $ · 4 weeks · solo-week
- **Output:** A deliberate ask, with structure: which moment in the customer journey you ask, who they should refer (template), and the incentive (or none). Best referral programs use the moment of delight ("you just saved 3 hours — who else has this problem?").
- **When:** After you have ≥10 happy customers. Earlier is wasted breath.
- **Failmode:** "Tell your friends!" with no mechanic. Asking everyone, anytime, for anyone.

#### `partner-channel`
- **Partner Channel** · `lead-gen` · channel
- **Answers:** S2
- **Cost / TTV / Effort:** $$ · 12+ weeks · solo-week
- **Output:** 2–3 signed partners (agencies, complementary vendors, system integrators) actively referring or reselling. Commission/rev-share structure documented.
- **When:** When you have a category that another vendor already touches but doesn't fully serve (e.g. Klaviyo integrators referring to a niche email tool). Slow ramp; high leverage once it works.
- **Failmode:** Signing partners with no enablement and no scorecard. Partners need leads-from-you to start sending leads-to-you.

#### `event-presence`
- **Targeted Event Presence** · `lead-gen` · field
- **Answers:** S2
- **Cost / TTV / Effort:** $$$ · 1–4 weeks per event · team-week
- **Output:** Attending (or sponsoring) 2–3 events where ICP concentrates. Goal isn't booth traffic; it's 5–10 hand-shake meetings booked in advance.
- **When:** B2B mid-market+ where in-person trust still matters. Skip for PLG/consumer.
- **Failmode:** Showing up unprepared. The event is the meeting *delivery* venue; the meetings get booked beforehand via cold outreach.

---

### S3 — Discovery & qualification

#### `discovery-call-script`
- **Discovery Call Script** · `discovery`
- **Answers:** S3, S4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A repeatable 30-minute structure: situation → pain → impact → consequence → urgency → process. Not a checklist; a flow. Document for transfer.
- **When:** Once you've had 10+ unstructured discovery calls and noticed which questions actually unlock answers.
- **Failmode:** Reading the script. The script is rehearsed enough to disappear.

#### `meddic-or-bant`
- **Qualification Framework (MEDDIC / BANT / SPICED)** · `qualify`
- **Answers:** S3, S4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A picked qualification framework (BANT for SMB, MEDDIC for mid-market+, SPICED for relationship-led), with each dimension scored in your CRM.
- **When:** Once you have ≥20 deals in pipeline. Before that, your qual is "I have a hunch."
- **Failmode:** Adopting a framework you don't actually use. If it's not in the CRM, it's not a framework.

#### `champion-test`
- **Champion Test** · `qualify`
- **Answers:** S3, S5
- **Cost / TTV / Effort:** $ · concurrent · solo-hour
- **Output:** A test of whether your "champion" can actually move the deal: get you a meeting with their boss in <2 weeks, share an internal doc, name the budget approver. If they can't, they're not a champion; they're a curious bystander.
- **When:** Every multi-stakeholder deal. The wrong champion is the #1 cause of stalled mid-market deals.
- **Failmode:** Mistaking enthusiasm for influence. Champions can mobilize their org; enthusiasts can't.

---

### S4 — Demo & close

#### `demo-script`
- **Demo Script (Pain-First)** · `demo`
- **Answers:** S4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A 20-minute demo that opens with the *prospect's* pain (paraphrased back from discovery) and shows only the slice of the product that addresses it. Save the rest for round 2.
- **When:** Once you've heard ≥5 prospects describe the pain in their own words. Otherwise you're guessing.
- **Failmode:** Feature tours. The product's tour is for marketing; sales is for closing.

#### `proof-of-value`
- **Pilot / Proof-of-Value Structure** · `close`
- **Answers:** S4, S5
- **Cost / TTV / Effort:** $$ · 2–6 weeks per deal · solo-week
- **Output:** A signed pilot agreement with: scope, success metric, decision date, conversion path to paid. Time-boxed; auto-converts unless cancelled.
- **When:** Mid-market+ deals where the prospect needs proof before signing. Avoid for SMB (too much overhead).
- **Failmode:** Open-ended pilots. "Try it for a while" becomes "try it forever." Always a fixed end-date with a default conversion.

#### `objection-handling-doc`
- **Objection Handling Doc** · `close`
- **Answers:** S4, S5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A living doc of the top 10 objections, the underlying real concern beneath each, and 2 verbal moves to handle each. Built from listening to lost-deal calls.
- **When:** After ≥20 deals. You'll have heard the patterns by then.
- **Failmode:** Treating objections as scripts to argue against. They're invitations to learn what's actually blocking the deal.

#### `discount-discipline`
- **Discount Discipline** · `close`
- **Answers:** S4, S5
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** A written rule: when you'll discount, by how much, in exchange for what (multi-year, prepay, case study, logo rights, larger seat count). Discounts without trades teach customers to expect them.
- **When:** Before you give your first one. Founders give too much, too fast, to too few.
- **Failmode:** Discounting to close. If price is the objection, value isn't established.

---

### S5 — Cycle / pipeline

#### `pipeline-stages`
- **Defined Pipeline Stages** · `ops`
- **Answers:** S5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** 5–7 written stages with explicit entry criteria for each (not "in discovery" but "completed discovery call AND identified pain AND confirmed budget owner"). No deal advances without meeting criteria.
- **When:** Once you have ≥20 active deals. Before that, single-spreadsheet is fine.
- **Failmode:** Stages that describe activity, not commitment. "Demoed" is activity; "agreed pain + budget + timeline" is commitment.

#### `weighted-forecast`
- **Weighted Forecast** · `ops`
- **Answers:** S5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Pipeline value × stage-specific close probability = weighted forecast. Tracked monthly; calibrated quarterly.
- **When:** Once pipeline > 3x your needed monthly revenue. Forecasting earlier is fiction.
- **Failmode:** Letting reps set probabilities by gut. Probabilities come from data, not optimism.

#### `cycle-time-audit`
- **Sales-Cycle Time Audit** · `ops`
- **Answers:** S5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Median time-in-stage by stage and by deal size. Where deals stall, you have a process gap or a qualification gap.
- **When:** Once you have ≥30 closed deals. Pattern emerges.
- **Failmode:** Treating cycle length as fixed. It's a knob you control; identify the single longest stage and attack it.

---

### S6 — Expansion

#### `expansion-playbook`
- **Expansion Playbook** · `expansion`
- **Answers:** S6
- **Cost / TTV / Effort:** $$ · 4–8 weeks · solo-week
- **Output:** Documented triggers for expansion (usage hits X, new use case detected, headcount grows) and the play to run for each.
- **When:** When NRR is the constraint, not new-logo growth. Usually post-PMF.
- **Failmode:** Treating CS as the expansion org without giving them sales skills. Or treating sales as the expansion org without account knowledge.

#### `qbr-template`
- **Customer QBR Template** · `expansion`
- **Answers:** S6, S7
- **Cost / TTV / Effort:** $ · 2 days · solo-week
- **Output:** A quarterly business review template focused on the customer's outcomes (not your features). Becomes the venue for expansion conversations.
- **When:** Mid-market+ accounts post 90-day onboarding.
- **Failmode:** QBRs that become status meetings. They should end with the customer asking what's next.

---

### S7 — Scalable beyond founder

#### `founder-to-rep-transition`
- **Founder-to-First-Rep Transition** · `enable`
- **Answers:** S7
- **Cost / TTV / Effort:** $$$ · 12+ weeks · team-week
- **Output:** A 90-day plan to transition founder-closed deals to a sales rep: ride-alongs, shadowing, joint deals, then independent close. Don't hire a rep until you have a repeatable motion to hand off.
- **When:** When founder is in deal review on >15hr/week and the business is being neglected elsewhere.
- **Failmode:** Hiring a senior AE to "figure out the motion." Reps need a motion to execute; they don't invent one.

#### `sales-enablement-doc-set`
- **Enablement Document Set** · `enable`
- **Answers:** S7
- **Cost / TTV / Effort:** $$ · 4 weeks · solo-week
- **Output:** A pack: ICP, discovery script, demo flow, objection handling, pricing & discount rules, competitive battle cards, lost-deal patterns. Everything a new rep needs to onboard in 30 days.
- **When:** Just before hiring rep #1.
- **Failmode:** Building it after the hire. The doc is the prerequisite, not the deliverable.

#### `win-loss-analysis`
- **Win/Loss Analysis** · `ops`
- **Answers:** S4, S5, S6, S7
- **Cost / TTV / Effort:** $ · 2 weeks per cohort · solo-week
- **Output:** Interviews with 5 won and 5 lost prospects. What they considered, why they chose / didn't choose you, what they wish you'd done differently.
- **When:** Every ~50 closed deals. Sales' best feedback loop, and the most-neglected one.
- **Failmode:** Asking the buyer instead of the loser. People who chose you will rationalize; people who didn't will tell you the truth if you stop selling.

---

## Engine notes

- Prioritization mirrors `/validate`: experiments/processes that answer the highest unanswered S-question rank highest.
- Many sales activities are *ongoing* rather than one-time. The engine should distinguish "set up once" (icp-write-up) from "operate weekly" (cold-outbound-sprint).
- Cross-domain handoff: `/hub` generates leads; `/sales` converts them. A lead generated in `/hub` is a lead inputted to `/sales`. We should let users link plans.
