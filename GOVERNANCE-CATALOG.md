# /governance — Content Pack (draft v0)

The Scale-stage tool. Governance mostly matters *after* you've taken outside capital or grown past a certain size. Bootstrapped businesses may never need most of this. Founded businesses need it well before they think they do — the first missing board meeting or advisor equity misfire is the one that stings for years.

Smaller catalog than the other domains. Most interventions are documents, cadences, and clean-ups rather than experiments.

---

## Governance Questions (the "spine")

5 questions:

1. **G1 — Reporting?** Do you produce a regular investor / board update (monthly or quarterly) without being asked?
2. **G2 — Board?** If you have a board, is it well-composed and being used well?
3. **G3 — Advisors?** Are your advisors contributing (intros, decisions, judgment), or just accruing equity?
4. **G4 — Decisions logged?** Are major strategic decisions documented with reasoning, so future-you and future-board can audit?
5. **G5 — Cap table?** Is the cap table clean, current, and understood by every party who should understand it?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode`

`category` ∈ `report` | `board` | `advisor` | `decisions` | `equity`

---

## Catalog (10 interventions)

### G1 — Reporting

#### `monthly-investor-update`
- **Monthly Investor Update Template** · `report`
- **Answers:** G1
- **Cost / TTV / Effort:** $ · 1 hour monthly · solo-hour
- **Output:** A short email (not deck) sent by the 5th of each month: 3 highlights, 3 lowlights, key metrics (revenue, growth, cash, runway, hires), 1–2 specific asks (intro to X, feedback on Y). Same format every month.
- **When:** From the moment you have any outside investors, including friends-and-family checks.
- **Failmode:** Skipping updates when things go poorly. Investors write off silence faster than they write off bad numbers.

#### `quarterly-board-deck`
- **Quarterly Board Deck** · `report` `board`
- **Answers:** G1, G2
- **Cost / TTV / Effort:** $ · 1 day quarterly · solo-day
- **Output:** A 10–15 slide deck: last quarter's key results vs. plan, current quarter's priorities, forward-looking risks, discussion topics (not just updates). Sent 48+ hours before the meeting; not read aloud in the meeting.
- **When:** Once you have a formal board — typically post-priced round or post-first-independent-director.
- **Failmode:** Reading the deck slide-by-slide. Board meetings are for discussion; the deck is homework.

---

### G2 — Board Composition & Cadence

#### `board-meeting-cadence`
- **Board Meeting Cadence + Minutes** · `board`
- **Answers:** G2
- **Cost / TTV / Effort:** $ · quarterly · solo-day
- **Output:** Defined meeting cadence (quarterly for most; monthly early), consistent agenda template, formal minutes signed by the secretary. Boring, unglamorous, saves you in disputes and diligence.
- **When:** From your first formal board meeting.
- **Failmode:** No minutes. Or minutes written weeks later from memory. Or minutes that read like marketing.

#### `board-composition-review`
- **Board Composition Review** · `board`
- **Answers:** G2
- **Cost / TTV / Effort:** $ · 1 day annually · solo-day
- **Output:** Annual assessment of board fit: are all seats allocated intentionally (founders, investors, independent)? Is each director *actively contributing*? Are there seats that should be added (industry expertise, functional expertise) or removed (investor rep from a fund that's disengaged)?
- **When:** Annually. And whenever you're negotiating a new financing that touches board composition.
- **Failmode:** Adding board members casually. Removing them requires their consent — often painful. Every seat is a five-year decision at minimum.

---

### G3 — Advisors

#### `advisor-agreement`
- **Advisor Agreement Template** · `advisor`
- **Answers:** G3
- **Cost / TTV / Effort:** $ · 2 days · solo-day
- **Output:** Standard advisor agreement: defined scope (typical: 2 hrs/month or specific quarterly deliverables), vesting terms (typical: 24-month vest, no cliff, monthly), equity grant (typical: 0.10–0.50% depending on stage and expected value), termination clause. FAST agreement (Founder-Advisor Standard Template) is a solid free anchor.
- **When:** Before granting equity to any advisor.
- **Failmode:** Handshake advisor deals with vague equity ("half a percent, we'll paper it later"). Never gets papered; ends in dispute.

#### `advisor-quarterly-review`
- **Advisor Quarterly Review** · `advisor`
- **Answers:** G3
- **Cost / TTV / Effort:** $ · quarterly · solo-hour
- **Output:** A 30-min check-in with each active advisor: what value did they add this quarter, what could they help with next quarter, is this still the right fit? Vesting stops if the answer to the last question is no.
- **When:** Every quarter with every advisor.
- **Failmode:** Advisors accruing equity for years without contributing. Founder discovers this at exit and feels sick.

---

### G4 — Decision Logging

#### `strategic-decision-log`
- **Strategic Decision Log** · `decisions`
- **Answers:** G4
- **Cost / TTV / Effort:** $ · concurrent · solo-hour
- **Output:** A running doc of major decisions: (1) what was decided, (2) what alternatives were considered, (3) what reasoning drove the choice, (4) what would trigger revisiting. One entry per decision; brief.
- **When:** From the first major decision. Retroactive logging is fiction.
- **Failmode:** Only logging the wins. The decisions worth remembering are the ones where you were wrong — those teach.

#### `annual-strategic-review`
- **Annual Strategic Review** · `decisions`
- **Answers:** G1, G4
- **Cost / TTV / Effort:** $ · 2 days annually · solo-week
- **Output:** A once-a-year exercise: what did we say last year? What actually happened? What changed in the world? What's changing in our plan for next year? Reviewed with board or (bootstrapped) with a trusted advisor.
- **When:** Every year. Same month. Non-negotiable.
- **Failmode:** Confusing the annual strategic review with the annual budget. Budget = numbers next year. Review = truth about last year.

---

### G5 — Equity Hygiene

#### `cap-table-maintenance`
- **Cap Table Maintenance** · `equity`
- **Answers:** G5
- **Cost / TTV / Effort:** $$ · monthly · solo-hour
- **Output:** A cap-table tool (Carta / Pulley / Capbase / AngelList) reflecting *every* holder including all option grants, SAFEs, warrants. Updated within 30 days of every event.
- **When:** From the first non-founder holder onward.
- **Failmode:** Spreadsheet cap tables. Fine at 3 people; a diligence nightmare at 30.

#### `409a-valuation`
- **409A Valuation** · `equity`
- **Answers:** G5
- **Cost / TTV / Effort:** $$ · 4 weeks · solo-week
- **Output:** An IRS-defensible fair-market valuation of common stock. Required before issuing stock options; refreshed every 12 months or after any material event (priced round, significant revenue change).
- **When:** Before your first option grant. Most cap-table platforms bundle this or partner with providers.
- **Failmode:** Skipping the 409A and pricing options informally. IRS penalties for grantees can be severe.

---

## Engine notes

- Governance mostly gates in at *Stage 5+ (Grow/Scale)*. For bootstrapped businesses without outside capital, the strategic-decision log and annual review are the only relevant items — surface the rest as locked with "when this matters" notes.
- Cross-links: `/finance` (cap-table implicated in fundraising; investor updates draw on cash + metrics), `/people` (equity policy for employees flows through here), `/legal` (equity documentation, board resolutions).
- The board vs. advisor confusion is real and expensive. The engine should present these as distinct tracks with distinct decisions — never mixed.
