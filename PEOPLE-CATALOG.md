# /people — Content Pack (draft v0)

The Grow/Scale-stage tool. The most-avoided domain among founders and the one with the highest failure cost per bad decision. Bad hires stay for 12–18 months. Bad comp systems break trust and can't be un-broken quickly. Bad culture takes years to un-write.

Content voice here should be conservative on legal edges and opinionated on the strategic choices most founders defer.

---

## People Questions (the "spine")

6 questions:

1. **H1 — Hire timed right?** Are you hiring against a defined, persistent bottleneck — not against vanity?
2. **H2 — Role defined?** Is the job in writing, focused on outcomes rather than tasks?
3. **H3 — Comp defensible?** Do you have a comp framework (bands, equity, levels) you'd show a candidate without editing?
4. **H4 — Process consistent?** Do you have a structured interview loop with scorecards used every time?
5. **H5 — Onboarding effective?** Does a new hire produce meaningful work in their first 30 days?
6. **H6 — Performance loop?** Are there regular 1:1s and periodic performance conversations so people grow and problems get caught early?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`category` ∈ `decide` | `role` | `comp` | `source` | `evaluate` | `offer` | `onboard` | `manage` | `grow` | `exit`

---

## Catalog (17 interventions)

### H1 — Hire Timing

#### `hire-timing-decision`
- **"Should I Hire?" Decision Tree** · `decide`
- **Answers:** H1
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** A brief walk-through: (1) Is the bottleneck people-shaped, not process- or product-shaped? (2) Is the work stable enough to define? (3) Can I afford 12 months of this hire even if revenue flatlines? (4) Have I documented what "success in 90 days" looks like? If any answer is no, don't hire yet.
- **When:** Every time the answer feels like yes. Especially when it feels obvious.
- **Failmode:** Hiring against exhaustion instead of against a bottleneck. Exhaustion is a symptom; the bottleneck may or may not be human.

#### `contractor-vs-employee-decision`
- **Contractor vs. Employee** · `decide`
- **Answers:** H1
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** Decision on the specific role: contractor (short-term, well-defined project, independent), fractional (specific skill needed part-time, e.g. CFO, CTO), or employee (recurring, integrated, requires control). Includes IRS classification check (cross-references `/legal`).
- **When:** Before every hire decision.
- **Failmode:** Misclassifying employees as contractors to save on taxes/benefits. Ends in expensive back-payment penalties.

---

### H2 — Role Definition

#### `role-definition-outcomes`
- **Role Definition (Outcomes-Based)** · `role`
- **Answers:** H2
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** One page: 3–5 specific outcomes this role delivers in 12 months, the top 2 measures of success, the failure modes you're hiring to prevent. Not a list of tasks; a list of results.
- **When:** Every role, before the first candidate is sourced.
- **Failmode:** Job descriptions that describe the day-to-day. That's an operator's spec, not a hiring spec.

#### `title-and-level-decision`
- **Title & Level Decision** · `role`
- **Answers:** H2, H3
- **Cost / TTV / Effort:** $ · 30 min · solo-hour
- **Output:** A defined level (IC vs. manager; junior/mid/senior; head-of/director/VP if applicable) with rationale. Anchors comp band and interview loop.
- **When:** Before the role goes live. Titles are easy to inflate and painful to deflate.
- **Failmode:** Over-titling to attract senior candidates you can't afford. They accept, disengage, and leave.

---

### H3 — Compensation

#### `comp-band-creation`
- **Comp Band Creation** · `comp`
- **Answers:** H3
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** For each role/level, a base salary range (Pave / Levels.fyi / Radford data as anchors, adjusted for stage and location). Bonus target where applicable. Equity range. Written down; used consistently.
- **When:** Before hiring #2. Solo-hire negotiation without bands anchors your future comp badly.
- **Failmode:** Bands you don't stick to. First exception invalidates the framework.

#### `equity-grant-policy`
- **Equity Grant Policy** · `comp`
- **Answers:** H3
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** By-level equity guidelines (e.g. Senior IC: 0.05–0.15%; Director: 0.2–0.5%). Vesting terms (usually 4-year vest, 1-year cliff). Exit-treatment terms. Reviewed by lawyer before first grant.
- **When:** Before any equity is granted. Reversing equity mistakes is the hardest possible reversal.
- **Failmode:** Loose equity grants ("I'll give you 1%") that you can't sustain when hire #10 wants parity.

#### `founder-comp-decision`
- **Founder Compensation Decision** · `comp` · pre-Scale
- **Answers:** H3
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** Explicit founder salary decision, with math. Bootstrapped and profitable? Pay yourself market-adjusted. Seed-funded? Below market, above subsistence. Cross-references `/finance` cash runway.
- **When:** At incorporation. Revisit annually.
- **Failmode:** Zero pay for years, becoming resentful. Or paying yourself so aggressively you starve the business.

---

### H4 — Hiring Process

#### `interview-loop-structure`
- **Structured Interview Loop** · `evaluate`
- **Answers:** H4
- **Cost / TTV / Effort:** $ · 3 days · solo-week
- **Output:** A defined 4–5 stage loop: (1) recruiter screen or founder-call, (2) hiring-manager deep-dive, (3) skills work (paid case study or work session), (4) team fit + reverse pitch, (5) reference checks. Each stage has a scorecard.
- **When:** Before your first hire. Ad-hoc interviewing scales terribly.
- **Failmode:** "Chemistry" interviews with no rubric. Feels intuitive; reproduces bias; hires the loudest not the best.

#### `interview-scorecard`
- **Per-Interview Scorecard** · `evaluate`
- **Answers:** H4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** For each stage: 4–6 signals to evaluate, each rated (1–4). Interviewers commit to their rating *before* debrief so they don't cascade to consensus.
- **When:** Every interview. No exceptions.
- **Failmode:** Debating without prior scores. Groupthink turns 6 opinions into 1.

#### `paid-work-session`
- **Paid Work Session (a.k.a. "Homework")** · `evaluate`
- **Answers:** H4
- **Cost / TTV / Effort:** $$ · 1–2 weeks per candidate · solo-week
- **Output:** A realistic work sample (a 3–6 hour project or a paid half-day pairing). Pay for the time. Reveals skill in ways interviews can't.
- **When:** Every senior IC / any role with disputed technical bar.
- **Failmode:** Unpaid, unbounded "take-home" tests. Candidates hate them; the best decline.

#### `reference-check-protocol`
- **Reference Check Protocol** · `evaluate`
- **Answers:** H4
- **Cost / TTV / Effort:** $ · 2 days per hire · solo-day
- **Output:** Structured calls with 3–4 references, at least one back-channel (someone not on the reference list). Two open questions: "What was it like managing them?" and "What would you push them to work on?" Real signal comes from the pause before the answer.
- **When:** Every serious hire, always. Skipping references is where most bad hires get through.
- **Failmode:** Perfunctory calls with the candidate's picked references. Rehearsed responses. Do the back-channel.

---

### H5 — Offer & Onboarding

#### `offer-negotiation-playbook`
- **Offer + Negotiation Playbook** · `offer`
- **Answers:** H3
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A defined offer flow: verbal offer (with headline numbers), written offer (24-hour turnaround), one negotiation round with pre-decided flexibility (usually ±10% on comp, occasional signing bonus), close-by date.
- **When:** Before the first offer goes out.
- **Failmode:** Endless negotiation rounds. Or negotiating on principle instead of on need. Or refusing to negotiate and losing hires that would have accepted a small stretch.

#### `30-60-90-onboarding`
- **30/60/90-Day Onboarding Plan** · `onboard`
- **Answers:** H5
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** For each new hire, a plan: what they'll learn / meet / ship in each of days 1–30, 31–60, 61–90. Reviewed with them on day 1. Real work in the first week — no "shadowing purgatory."
- **When:** Before every new hire's start date.
- **Failmode:** No plan. New hire drifts, disengages, or bothers the founder for direction. Losing early attention is losing the hire.

---

### H6 — Performance & Growth

#### `1on1-cadence`
- **1:1 Cadence + Template** · `manage`
- **Answers:** H6
- **Cost / TTV / Effort:** $ · weekly · solo-hour
- **Output:** Weekly 30-min 1:1 per direct report. Owned by the report (they set agenda). Template: what's going well, what's stuck, what do you need from me, what's coming up. Notes shared and revisited next time.
- **When:** From day 1 of having a report. Skipped 1:1s always cost more than they save.
- **Failmode:** Status updates disguised as 1:1s. If the meeting is about your questions, not theirs, it's not a 1:1.

#### `performance-conversation-cadence`
- **Quarterly Performance Conversation** · `grow`
- **Answers:** H6
- **Cost / TTV / Effort:** $ · quarterly · solo-day
- **Output:** A structured 60-min quarterly conversation per report: What went well? What didn't? What's changing next quarter? Not tied to comp; tied to growth. Comp review is a separate meeting.
- **When:** Once you have a report for >90 days.
- **Failmode:** Annual reviews. Feedback held for 12 months isn't feedback; it's ambush.

#### `underperformer-protocol`
- **Underperformer Protocol** · `exit`
- **Answers:** H6
- **Cost / TTV / Effort:** $ · 4–8 weeks per case · solo-week
- **Output:** A defined path: (1) direct, specific feedback conversation, (2) 30-day coaching sprint with clear success criteria, (3) if uncorrected, formal PIP with HR/legal review, (4) exit if no change. Documented at every step.
- **When:** The moment underperformance is observed. Delay costs more; the team knows before you name it.
- **Failmode:** Ambushing with a PIP without prior direct feedback. Or, opposite: coaching for 9 months hoping it fixes itself.

#### `layoff-protocol`
- **Layoff Protocol** · `exit`
- **Answers:** H1, H6
- **Cost / TTV / Effort:** $$ · 2 weeks planning + execution · team-week
- **Output:** If ever needed: a decision on scope (people, roles, geographic), severance policy, legal review (WARN Act triggers, state-specific), communication sequence (managers first, affected next, all-hands third), same-day compassion. Not a template — a protocol done with lawyer + HR.
- **When:** When runway math forces it. Never delay hoping for a miracle; a shallower cut sooner beats a deeper one later.
- **Failmode:** Cutting too shallow, having to do it again. Or, botching the human side — treating people as line items. Trust with survivors is what determines whether the company recovers.

---

### First Management Hire

#### `first-manager-hire`
- **First Manager Hire (Adding a Layer)** · `decide` `role`
- **Answers:** H1
- **Cost / TTV / Effort:** $$$ · 8–12 weeks · solo-week
- **Output:** A deliberate first-management hire — someone to own a function, not a task. Includes: expanded interview loop with peer-manager evals, mutual expectations doc, 90-day org-scan mandate ("tell me what you see").
- **When:** Around 8–15 headcount, when founder-touch is the bottleneck across too many functions.
- **Failmode:** Promoting a strong IC into management as reward. Some make the leap; most don't. Reward with more scope + comp; don't force management on someone.

---

## Engine notes

- Most People interventions are Grow/Scale-stage. Below ~5 headcount, most of this is deferred (founder-comp, contractor-vs-employee, and hire-timing are the exceptions).
- Cross-references: `/legal` (worker classification, employment law, equity documentation, PIP legal review), `/finance` (comp cash impact, equity dilution modeling, layoff runway math), `/governance` (equity pool refreshes, executive comp visibility to board).
- Content-risk note: PIP and layoff content should always route to "consult employment lawyer for your state." We provide the shape and the humanity; the specific legal execution is not ours to prescribe.
