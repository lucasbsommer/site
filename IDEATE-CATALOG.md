# /ideate — Stage 0–1 Content Pack (draft v0)

The front-of-funnel tool. Two jobs: **generate** an idea if the user doesn't have one, and **frame** the one they do have so `/validate` can take it from there.

This isn't validation — nothing is tested here. The deliverable is a one-page brief that becomes the input for `/validate`.

---

## Framing Questions (the "spine")

`/validate` has 7 questions about evidence. `/ideate` has 5 questions about clarity:

1. **F1 — Articulated?** Can you state the problem in one sentence without jargon?
2. **F2 — Specific customer?** Can you name one real human (or write a sharp persona) who has this problem?
3. **F3 — Unfair angle?** Why is *you* the person to solve this? What do you have that others don't?
4. **F4 — Why now?** What changed in the last 1–3 years that makes this possible/urgent now?
5. **F5 — Worst-acceptable v1?** Can you describe the embarrassing version you'd still ship?

A founder is "out" of `/ideate` and ready for `/validate` when all five are crisply answered.

---

## Field structure per intervention

Same shape as `/hub` and `/validate`:
- `id` · `name` · `category` · `answers` (which F-question)
- `cost` · `ttv` · `effort`
- `output` (the artifact)
- `when` · `failmode`

`category` ∈ `generate` (no idea yet) | `frame` (have idea, need to sharpen) | `pressure-test` (about to leave for /validate)

---

## Catalog (20 interventions)

### Generate (you don't have an idea, or you have one but it's not loved)

#### `pain-inventory`
- **Personal Pain Inventory** · `generate`
- **Answers:** F1
- **Cost / TTV / Effort:** $ · 1 day · solo-hour
- **Output:** A list of 30–50 frustrations you've personally hit in the last 90 days, ranked by frequency and burn.
- **When:** First intervention if you're idea-less. Founders solve their own problems better than anyone else's.
- **Failmode:** Stopping at 10. The 30th item is where the non-obvious patterns show up.

#### `expertise-scan`
- **Adjacent Expertise Scan** · `generate`
- **Answers:** F3
- **Cost / TTV / Effort:** $ · 1 day · solo-hour
- **Output:** A list of 5–10 domains where you have unfair access, language fluency, or pattern recognition that most builders don't.
- **When:** Always, before generating ideas. Bias generation toward where you have advantage.
- **Failmode:** Listing job titles instead of *specific* knowledge ("worked in healthcare" is useless; "spent 3 years inside the prior-auth workflow at a mid-size payor" is gold).

#### `pattern-mining`
- **Industry Pattern Mining** · `generate`
- **Answers:** F1, F4
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A doc of "what's old and broken in industry X" — workflows still done in spreadsheets, processes still requiring phone calls, software UIs that look like 2008.
- **When:** When you have access to an industry but no specific pain in mind.
- **Failmode:** Describing surface ugliness instead of structural waste. The cosmetic stuff has been tried.

#### `trend-stack`
- **Trend Stacking** · `generate`
- **Answers:** F4
- **Cost / TTV / Effort:** $ · 2–3 days · solo-day
- **Output:** A list of 2- and 3-trend collisions (e.g. AI agents × regulated industries × old API surfaces). Idea sits at the intersection.
- **When:** You want differentiation. Single-trend ideas attract too many entrants.
- **Failmode:** Stacking trends nobody will pay for yet. "Crypto × VR × wellness" sounds clever and dies.

#### `steal-with-pride`
- **Steal-With-Pride Lateral Scan** · `generate`
- **Answers:** F1, F3
- **Cost / TTV / Effort:** $ · 2–3 days · solo-day
- **Output:** A list of working models in one industry that haven't shipped in another (Toast for restaurants → Toast for [vertical X]).
- **When:** You have access to a vertical that's underserved. Most "vertical SaaS" ideas come from this exercise.
- **Failmode:** Copying without naming the structural reason it hasn't already been done. If the lateral hasn't happened, there's usually a why.

#### `pain-interviews-generative`
- **Generative Pain Interviews** · `generate`
- **Answers:** F1, F2
- **Cost / TTV / Effort:** $ · 1–2 weeks · solo-week
- **Output:** 5+ interviews with people in a target role, where you go in with NO product idea and just listen for what eats their week. Different from `/validate`'s Mom Test (you don't have a hypothesis yet).
- **When:** You know who you want to serve but not what to sell them.
- **Failmode:** Showing up with a half-baked idea and contaminating the listening. Don't.

#### `ai-leverage-lens`
- **AI-Leverage Lens** · `generate`
- **Answers:** F4
- **Cost / TTV / Effort:** $ · 1 day · solo-hour
- **Output:** A list of jobs that just got 10x cheaper to do, or 10x more tractable, with current AI capabilities. Pick the ones in industries that don't yet realize it.
- **When:** Any time. Almost every domain has $1B of "things that became possible in the last 18 months."
- **Failmode:** Building "AI for X" without a real workflow to replace. AI is the *capability*, not the product.

#### `distribution-first`
- **Distribution-First Inversion** · `generate`
- **Answers:** F2, F3
- **Cost / TTV / Effort:** $ · 1 day · solo-hour
- **Output:** A list of audiences you already have or can cheaply reach (your newsletter, an industry community you're in, a niche you've earned credibility in) — then ask: what would they buy from you?
- **When:** You have audience or access but no product idea. Distribution is harder than product; start where you already won.
- **Failmode:** Confusing "I know people in X industry" with "I have distribution in X industry." Distribution = they read/listen/respond.

---

### Frame (you have an idea; you need it sharp)

#### `one-page-brief`
- **One-Page Brief** · `frame`
- **Answers:** F1, F2, F3, F4, F5
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A single page covering: the problem, the customer, the wedge, why-now, the worst-acceptable v1, and one sentence on what success looks like.
- **When:** Always. This is the exit deliverable from `/ideate`.
- **Failmode:** Writing two pages. If you can't say it on one page, you don't know it yet.

#### `jtbd-statement`
- **Jobs-To-Be-Done Statement** · `frame`
- **Answers:** F1, F2
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** "When [situation], I want to [motivation], so I can [outcome]." Written from the customer's POV, in their words. Three versions; pick the sharpest.
- **When:** When the problem statement keeps shifting. JTBD forces situational specificity.
- **Failmode:** Writing the *features* you want to ship, not the job. "I want to use AI to..." is not a JTBD.

#### `persona-sketch`
- **Sharp Persona Sketch** · `frame`
- **Answers:** F2
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** One named, real-feeling person. Role, daily reality, what they read, who they trust, what they've already tried for this problem, what they spend on adjacent things. <1 page.
- **When:** Always, before the brief. A persona that could be 5 different people is a persona that's useless.
- **Failmode:** Demographics instead of behavior. "Marketing managers, 30–45, urban" is not a persona; "Allie, runs ops at a 40-person Shopify brand, came up through customer service, lurks in r/ecommerce, uses Klaviyo, hates Salesforce" is.

#### `why-now-stack`
- **Why-Now Stack** · `frame`
- **Answers:** F4
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** A short list of *structural* shifts (tech, regulation, cost, behavior, competition) that make this idea makeable/sellable now and not 5 years ago.
- **When:** Before the brief. Strong why-now is the single best predictor of timing.
- **Failmode:** Soft why-nows ("more people work from home now"). Real why-nows are sharp: a specific API now exists, a specific regulation just changed, a specific cost dropped 80%.

#### `unfair-advantage-audit`
- **Unfair-Advantage Audit** · `frame`
- **Answers:** F3
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** A list of things you have that 99% of would-be competitors don't (specific access, specific data, specific relationships, specific scar tissue). Then circle the ones that actually matter for this idea.
- **When:** Before the brief. Founders without an unfair angle should consider whether they're the right person, or whether to partner.
- **Failmode:** Listing generic advantages ("I'm a hard worker", "I can code"). Those don't survive contact with funded competition.

#### `worst-version-test`
- **Worst-Acceptable v1** · `frame`
- **Answers:** F5
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** A 3-paragraph description of the most embarrassing version you'd still launch — what's in, what's deferred, what's manual, what's ugly.
- **When:** Before going near `/validate`. If you can't describe a v1 you'd ship in 6 weeks, the idea is too big.
- **Failmode:** Describing v3. Or, opposite: describing something so embarrassing you wouldn't actually ship it. The point is the *minimum* you'd defend in public.

#### `anti-vision`
- **Anti-Vision Statement** · `frame`
- **Answers:** F3, F5
- **Cost / TTV / Effort:** $ · 30 min · solo-hour
- **Output:** A short paragraph: what you're *not* building, who you're *not* serving, where you'd *refuse* to go even if it grew the business. Forces clarity by negation.
- **When:** When the idea feels too open-ended. Constraints reveal shape.
- **Failmode:** Lying. Saying "we'd refuse to take VC" while actively raising. Anti-vision is a promise to your future self; only count the ones you'd keep.

---

### Pressure-test (last gates before `/validate`)

#### `pre-mortem`
- **Pre-Mortem** · `pressure-test`
- **Answers:** F4, F5
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** Imagine it's 18 months from now and the project failed. Write the top 5 reasons. Then for each, name what evidence would tell you it's happening early.
- **When:** Before exiting `/ideate`. Pre-mortems surface the assumptions that need to become `/validate` experiments.
- **Failmode:** Hand-waving ("we just didn't execute"). Pre-mortem requires specific, testable failure modes.

#### `competitor-honesty`
- **Competitor Honesty Audit** · `pressure-test`
- **Answers:** F3
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A list of every existing thing that solves any part of this problem — products, hacks, spreadsheets, agencies, "doing nothing." A sentence on why people stick with each, and why your wedge beats it.
- **When:** Before exiting `/ideate`. If your honest answer is "they don't have a real reason to switch," you've found the work that needs doing.
- **Failmode:** Saying "no real competitors." There are always competitors; the spreadsheet is a competitor.

#### `ten-friend-test`
- **Ten-Friend Test** · `pressure-test`
- **Answers:** F1, F4
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** Send your one-page brief to 10 people whose judgment you trust. Track which parts they understood immediately, which they had to re-read, and which they pushed back on.
- **When:** Before exiting `/ideate`. Cheap, fast, brutally clarifying.
- **Failmode:** Sending it to 10 people who'll be polite. Pick people who've shipped, not people who love you.

#### `pricing-sketch`
- **Pricing Sketch** · `pressure-test`
- **Answers:** F4, F5
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** A back-of-envelope: target price, gross margin, customers needed for $X ARR/revenue, and whether the math implies "you can charge $5 to consumers" (very hard) or "$5k to mid-market" (much easier).
- **When:** Before exiting `/ideate`. Many ideas die here because the math doesn't survive.
- **Failmode:** Dodging it. "We'll figure out pricing later" is the founder version of "we'll figure out distribution later."

#### `disqualifier-list`
- **Disqualifier List** · `pressure-test`
- **Answers:** F4
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** A short list of conditions that would make you *kill the idea* — and would they actually make you kill it? E.g., "if cold-outreach reply rate is <2%", "if I can't get one paying customer in 90 days", "if BOM cost is >$40."
- **When:** Before exiting `/ideate`. Pre-commit to kill criteria; you won't kill it in the moment.
- **Failmode:** Listing soft criteria you'd negotiate around. Real disqualifiers have to actually disqualify.

---

## Engine notes

- Prioritization rule: cluster interventions by category. If the user has *no idea* (state flag at intake), surface `generate` only. Once an idea exists, surface `frame`. Once F1–F5 have first drafts, surface `pressure-test`. Locked sections stay dim with a one-liner explaining the gate.
- Exit deliverable: **the One-Page Brief**, exportable to the same `?plan=` URL handoff. `/validate` reads the brief on load and pre-fills its intake (we know the customer, problem, offer).
- For users who *already* have a brief, allow a "I have an idea, take me straight to validation" skip on `/ideate`'s landing.
