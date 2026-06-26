# /validate — Experiment Catalog (draft v0)

The first content pack for the `/validate` domain. Mirrors the `/hub` framework's pattern: a catalog of interventions (here, **experiments**) that get prioritized by which **validation question** the user still has open.

**The 7 validation questions (the "spine"):**

1. **Q1 — Real?** Is the problem real?
2. **Q2 — Painful?** Painful or frequent enough to matter?
3. **Q3 — Reachable?** Can you reach the customer at low cost?
4. **Q4 — Pay?** Will they pay?
5. **Q5 — Margin?** Will they pay *enough* for a viable business?
6. **Q6 — Deliver?** Can you actually deliver the solution?
7. **Q7 — Stay?** Will they keep using / repeat-buy?

**Field structure per experiment** (mirrors `/hub` spoke schema):

- `id` — short slug
- `name` — display
- `category` — `interview` | `signal` | `smoke-test` | `prototype` | `presale` | `delivery` | `retention`
- `answers` — which Q's this experiment moves the needle on
- `prereqs` — what must be true before running
- `cost` — `$` (≈free), `$$` (≈$100–$1k), `$$$` (≈$1k+)
- `ttv` — time-to-evidence (days / weeks)
- `effort` — `solo-hour` | `solo-day` | `solo-week` | `team-week`
- `output` — what evidence you walk away with
- `when` — fit conditions
- `failmode` — most common ways founders run it wrong

---

## Catalog (25 experiments)

### Q1 — Is the problem real?

#### `mom-test-interviews`
- **Mom Test Interviews** · `interview`
- **Answers:** Q1, Q2
- **Prereqs:** A working hypothesis of who the customer is and the problem they have.
- **Cost / TTV / Effort:** $ · 1–2 weeks · solo-week
- **Output:** 5–10 conversation notes; recurring problems, language they actually use, what they've already tried/paid for.
- **When:** Always, first. The cheapest, highest-leverage early experiment.
- **Failmode:** Pitching instead of listening. Talking about the future ("would you use…?") instead of the past ("when did this last happen?"). Talking to friends, who lie politely.

#### `community-mining`
- **Forum / Subreddit / Discord Mining** · `signal`
- **Answers:** Q1, Q2
- **Prereqs:** Identified ≥3 places target customers congregate online.
- **Cost / TTV / Effort:** $ · 2–3 days · solo-day
- **Output:** A doc of unsolicited complaints, with frequency counts and direct quotes.
- **When:** Always. Even when no users will talk to you, they'll complain to the internet.
- **Failmode:** Cherry-picking complaints that match your idea; ignoring the boring ones that recur more often.

#### `search-demand-audit`
- **Search Demand Audit** · `signal`
- **Answers:** Q1, Q2, Q3
- **Prereqs:** Can articulate the problem in the words customers would use (often refined from interviews).
- **Cost / TTV / Effort:** $ · 1 day · solo-hour
- **Output:** Volume and trend for problem-shaped queries (Google Trends, Keywords Everywhere, AnswerThePublic, Reddit search counts).
- **When:** When the problem has natural search demand (most B2C, lots of B2B). Useless for problems people don't realize they have.
- **Failmode:** Searching solution keywords ("CRM software") instead of problem keywords ("can't keep track of clients").

#### `competitor-1-star`
- **Competitor 1-Star Review Mining** · `signal`
- **Answers:** Q1, Q2
- **Prereqs:** ≥1 existing solution in the space, with public reviews (G2, Capterra, App Store, Yelp, Amazon).
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** Doc of recurring frustrations with incumbents. The negative space is your opportunity space.
- **When:** Whenever incumbents exist. Especially powerful for "the same but better" plays.
- **Failmode:** Treating one angry review as a trend. Pattern is signal; outlier is noise.

#### `ride-along`
- **Ride-Along / Day-in-the-Life** · `interview`
- **Answers:** Q1, Q2
- **Prereqs:** Access to one target customer willing to be shadowed for a few hours.
- **Cost / TTV / Effort:** $$ · 1 week · solo-day
- **Output:** Observed (not reported) friction; the things they don't think to complain about because they're routine.
- **When:** B2B ops/workflow problems; consumer behavior problems where stated preference ≠ actual behavior.
- **Failmode:** Subject performs for you; you change what you came to observe. Stay quiet, take notes.

---

### Q2 — Painful or frequent enough?

#### `diary-study`
- **Diary Study** · `signal`
- **Answers:** Q2
- **Prereqs:** 3–5 target users willing to log a behavior for 7–14 days.
- **Cost / TTV / Effort:** $$ · 2 weeks · solo-day
- **Output:** Frequency data: how often the problem occurs in real life, not how often they remember.
- **When:** When you suspect the problem is occasional but you need to confirm. Recall is unreliable.
- **Failmode:** No compliance — set up daily reminders and a $20 thank-you to keep them logging.

#### `hair-on-fire`
- **"Hair on Fire" Check** · `interview`
- **Answers:** Q2, Q4
- **Prereqs:** You're already running interviews.
- **Cost / TTV / Effort:** $ · concurrent · solo-hour
- **Output:** Evidence the customer has *already tried things and spent time/money* on the problem. If they haven't, it's not painful enough.
- **When:** Every interview. Two questions: "What have you already tried?" and "What did that cost you?"
- **Failmode:** Accepting "yeah it's annoying" as pain. Real pain triggers action, not just complaint.

#### `wtp-baseline`
- **WTP Sensitivity Baseline** · `interview`
- **Answers:** Q2, Q5
- **Prereqs:** Customers can imagine the solution clearly enough to price it.
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Van Westendorp meter (too cheap / bargain / expensive / too expensive) → acceptable price range.
- **When:** Before pricing experiments. Use the floor and ceiling to design fake-door / smoke-test prices.
- **Failmode:** Trusting hypotheticals as if they were behavior. Use for *range*, not for *commitment*.

---

### Q3 — Customer reachable?

#### `audience-cartography`
- **Audience Cartography** · `signal`
- **Answers:** Q3
- **Prereqs:** Sharp customer description (one role, one segment, not "everyone").
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** Map of where they congregate: subreddits, Slack/Discord communities, newsletters, conferences, podcasts, trade pubs, LinkedIn groups, in-person spaces.
- **When:** Before any acquisition experiments. If you can't list 5 specific places, your ICP is too broad.
- **Failmode:** Listing channels ("LinkedIn") instead of *specific* destinations ("the r/devops mod team, the SRECon conference, the Charity Majors newsletter").

#### `cold-reply-rate`
- **Cold Outreach Reply Test** · `signal`
- **Answers:** Q3
- **Prereqs:** A list of 20–50 specific named targets (people, not orgs) and a one-line value hypothesis.
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Reply rate, meeting-booked rate. <5% reply → channel/message broken. >15% → you've got something.
- **When:** B2B problems where founder-led sales is plausible.
- **Failmode:** Pitching in the cold message. Goal of cold outreach is to *book a conversation*, not to close.

#### `lookalike-feasibility`
- **Ad-Platform Audience Build** · `signal`
- **Answers:** Q3
- **Prereqs:** A defined segment (job title, interest, behavior). Ad-platform account.
- **Cost / TTV / Effort:** $ · 1 day · solo-hour
- **Output:** Whether Meta / Google / LinkedIn can even build an audience of your segment, and how large it is.
- **When:** Anywhere paid acquisition might be the path. Confirms a reachable population exists.
- **Failmode:** Trusting "audience size" estimates as TAM. They're useful for *existence*, not for forecasting.

#### `beachhead-naming`
- **Beachhead Naming** · `interview`
- **Answers:** Q3
- **Prereqs:** None.
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** A written list of 50 specific real-world customers, by name, you could try to win. If you can't write the list, the segment is too vague.
- **When:** Whenever the ICP feels mushy. Forces specificity.
- **Failmode:** Listing categories ("startups", "SMBs") instead of named entities.

---

### Q4 — Will they pay?

#### `landing-smoke-test`
- **Landing-Page Smoke Test** · `smoke-test`
- **Answers:** Q3, Q4
- **Prereqs:** Clear value prop. Reachable channel. Modest ad budget ($100–500).
- **Cost / TTV / Effort:** $$ · 1–2 weeks · solo-week
- **Output:** CTR on the ad, email-capture or pre-order CTR on the landing page. Benchmarks: >2% landing-page conversion = strong signal; <0.5% = weak.
- **When:** When you can articulate the offer in one screen and want behavioral (not stated) signal.
- **Failmode:** Targeting too broad → no real signal. Vanity metrics (impressions, visits) not conversion.

#### `fake-door`
- **Fake Door Test** · `smoke-test`
- **Answers:** Q4
- **Prereqs:** An existing product or landing page with traffic.
- **Cost / TTV / Effort:** $ · 1 week · solo-day
- **Output:** % of users who click through to a feature/product that doesn't exist yet. Honestly tell them it's coming and capture email.
- **When:** Inside an existing product, when you want to validate the *next* feature before building.
- **Failmode:** Leaving users disappointed and silent. Always show a "coming soon, here's why" page after the click.

#### `wizard-of-oz`
- **Wizard of Oz** · `prototype`
- **Answers:** Q4, Q6, Q7
- **Prereqs:** You can manually do the work the software would do, for a few customers.
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** Real customers paying for what looks like a product, where you're doing the work behind the curtain. Reveals what they actually use, what they ignore.
- **When:** When the value prop is clear but the tech to deliver it is expensive. Defer the build.
- **Failmode:** Burning out doing manual work without learning. Set a hard stop at N customers or N weeks.

#### `concierge-mvp`
- **Concierge MVP** · `prototype`
- **Answers:** Q4, Q6, Q7
- **Prereqs:** None beyond the willingness to do it.
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** Same as Wizard of Oz, but the customer *knows* you're doing it manually. Faster trust-building, easier to charge premium.
- **When:** Service-shaped value props; high-touch / consulting / coaching; first version of any marketplace.
- **Failmode:** Becoming a service business by accident. Concierge is research, not the business model.

---

### Q5 — Pay enough?

#### `preorders`
- **Pre-Orders / Paid Waitlist** · `presale`
- **Answers:** Q4, Q5
- **Prereqs:** Can articulate a delivery date and what they'll get. Refund-ready.
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** Actual dollars on the table for a product that doesn't yet exist. The hardest possible Q4/Q5 signal.
- **When:** Physical products, consumer apps, courses, anything with a defined deliverable and patient customers.
- **Failmode:** Promising too much, too soon. Charge a deposit, set expectations honestly, deliver or refund.

#### `pricing-interview`
- **Pricing Interview** · `interview`
- **Answers:** Q5
- **Prereqs:** ≥10 interviews completed; you've heard the value language in their words.
- **Cost / TTV / Effort:** $ · 2 weeks · solo-week
- **Output:** Anchored reactions to 3 price points (low, target, high). Watch the face, not the words.
- **When:** Before pre-orders or smoke tests, to anchor the price experiment.
- **Failmode:** Asking "would you pay $X?" — the answer is always "maybe." Better: "If I told you this cost $X, what would your reaction be? What would you compare it to?"

#### `founder-sales-sprint`
- **Founder-Led Sales Sprint** · `presale`
- **Answers:** Q3, Q4, Q5, Q6
- **Prereqs:** Defined offer with a price. A list of ≥20 qualified prospects.
- **Cost / TTV / Effort:** $$ · 4 weeks · solo-week
- **Output:** Close rate, ACV, sales-cycle length, top objections. The objections are the real product roadmap.
- **When:** B2B. Whenever the sales motion will eventually require founder selling — start there.
- **Failmode:** Outsourcing too early. SDRs and partners can't validate; only the founder can.

---

### Q6 — Can you deliver?

#### `concierge-delivery-cost`
- **Concierge Delivery Cost Test** · `delivery`
- **Answers:** Q5, Q6
- **Prereqs:** 3–5 paying or pre-ordering customers.
- **Cost / TTV / Effort:** $$ · 4 weeks · solo-week
- **Output:** Real hours-per-customer and dollars-per-customer to deliver. Reveals if unit economics can ever work.
- **When:** Always, on the first cohort. Cheap to learn now, expensive to learn later.
- **Failmode:** Not tracking time honestly. Treat your own time at a market rate, not zero.

#### `painful-mvp`
- **The Painful MVP** · `prototype`
- **Answers:** Q4, Q6, Q7
- **Prereqs:** Sufficient Q1–Q5 evidence; a defined minimum-viable scope.
- **Cost / TTV / Effort:** $$$ · 4–12 weeks · team-week
- **Output:** The slowest, narrowest, most embarrassing version of the product that actually delivers the core value. Shipped.
- **When:** After cheaper experiments have de-risked the why; when only build can answer remaining questions.
- **Failmode:** Building the MVP first. Building too much MVP. Both equally fatal.

#### `supply-feasibility`
- **Supply / BOM / Partner Feasibility** · `delivery`
- **Answers:** Q5, Q6
- **Prereqs:** Defined product spec or service offering.
- **Cost / TTV / Effort:** $$ · 2–4 weeks · solo-week
- **Output:** Real costed bill-of-materials, partner availability, lead times. Reveals whether the dream is buildable at the price the market accepts.
- **When:** Physical products, regulated industries, anything with supply chain or licensing.
- **Failmode:** Optimistic quotes ("at scale we'll get to X cents/unit"). Validate with current real prices.

---

### Q7 — Will they stay?

#### `cohort-followup`
- **Cohort Follow-Up Check-In** · `retention`
- **Answers:** Q7
- **Prereqs:** Real customers using the real (or concierge) product.
- **Cost / TTV / Effort:** $ · 4 weeks · solo-week
- **Output:** % of cohort active at day 1, 7, 30. The shape of that curve is the retention truth.
- **When:** Always, on every cohort. The earliest leading indicator of business viability.
- **Failmode:** "Active" defined too loosely. Pick the *core action* that signals value capture and count only that.

#### `churn-interview`
- **Churn Diagnosis Interview** · `interview`
- **Answers:** Q7
- **Prereqs:** ≥3 customers who used and then stopped, willing to talk.
- **Cost / TTV / Effort:** $ · 2 weeks · solo-week
- **Output:** True reasons for churn. Almost never the reasons in cancellation surveys.
- **When:** First sign of churn. Don't wait for a pattern.
- **Failmode:** Defensiveness. Goal is to learn, not to recover the customer in the call.

#### `unprompted-repeat`
- **Unprompted Repeat-Use Test** · `retention`
- **Answers:** Q7
- **Prereqs:** A delivered product or first transaction.
- **Cost / TTV / Effort:** $ · 2–4 weeks · solo-day
- **Output:** % of customers who returned without you reminding them. The cleanest signal of organic pull.
- **When:** After every meaningful first transaction. Resist the urge to remind them; observe.
- **Failmode:** Confusing prompted-return (email blast, push notification) with unprompted pull.

---

## Notes for the framework engine

- Each experiment maps to ≥1 question. Prioritization rule: experiments that answer the user's *highest unanswered question* rank highest, weighted by cost (cheaper > expensive) and TTV (faster > slower) within ties.
- "Unanswered" is captured from the input form (a state assessment: which Q's already have evidence?).
- Stage gates: a founder hasn't earned the right to run Q5–Q7 experiments until they have *some* Q1–Q4 evidence. Show those as locked/dimmed until prereqs flip.
- Lifecycle handoff: when Q1–Q7 all have signal, route the user to `/hub` (marketing & growth).
