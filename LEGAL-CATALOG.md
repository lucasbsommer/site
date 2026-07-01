# /legal — Content Pack (draft v0)

The Build/Launch-stage tool. Legal is the domain where being wrong is expensive and being unclear is fatal. Almost every item here is *set-up-once, correctly*. Very few experiments; many decisions.

**This entire domain, every entry, carries the same disclaimer: general guidance, not legal advice. When a specific state, industry, or amount of money is involved, engage a lawyer. Where an intervention warrants immediate legal counsel, we say so explicitly.**

---

## Legal Questions (the "spine")

6 questions:

1. **L1 — Entity?** Have you formed the right legal entity for your liability, tax, and funding shape — in the right state?
2. **L2 — IP owned?** Is all IP (code, designs, marks, content) demonstrably owned by the entity, not scattered across founders and contractors?
3. **L3 — Customer contracts?** Are your customer-facing legal docs (ToS, Privacy, MSA/SOW) defensible if challenged?
4. **L4 — Workers classified?** Are employees vs. contractors classified correctly under IRS and state rules?
5. **L5 — Regulated activity?** Are you compliant in every jurisdiction and industry you operate in?
6. **L6 — Disputes handled?** Is there a process when something goes wrong — customer complaint, IP dispute, partner breakup?

---

## Field structure

`id` · `name` · `category` · `answers` · `cost` · `ttv` · `effort` · `output` · `when` · `failmode` · `lawyer` (⚠ when a lawyer is not optional)

`category` ∈ `entity` | `ip` | `contracts` | `workers` | `regulated` | `disputes`

---

## Catalog (16 interventions)

### L1 — Entity Formation

#### `entity-decision`
- **Entity Formation Decision** · `entity`
- **Answers:** L1
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Decision on legal entity: sole proprietorship (default, no liability shield), LLC (default for most bootstrapped businesses), S-Corp election (tax-optimized LLC or corp), C-Corp (default for VC-track startups). Includes rationale, tax implications, and admin overhead expectation.
- **When:** Before generating meaningful revenue or hiring anyone.
- **Failmode:** Defaulting to LLC because it sounds sophisticated when a sole prop is fine, or defaulting to C-Corp because a friend "raised" and now you have franchise taxes you can't afford.
- **⚠ Lawyer:** Recommended if raising capital, taking on partners, or in regulated industries. Optional for solo consultants.

#### `state-of-incorporation`
- **State of Incorporation Decision** · `entity`
- **Answers:** L1
- **Cost / TTV / Effort:** $ · 2 hours · solo-hour
- **Output:** Decision on the state where the entity is formed. Delaware for C-Corp (investor default), your home state for most LLCs (avoids foreign-qualification fees), Wyoming/Nevada for privacy-motivated LLCs (limited real benefit).
- **When:** Same step as entity decision.
- **Failmode:** Delaware LLC when you operate only in your home state — you now pay two annual fees and foreign-qualify at home for zero benefit.

#### `ein-application`
- **EIN Application** · `entity`
- **Answers:** L1
- **Cost / TTV / Effort:** $ · 1 hour · solo-hour
- **Output:** IRS-issued Employer Identification Number. Filed via IRS website, free, instant. Required to open bank accounts, hire people, and file taxes as an entity.
- **When:** Immediately after entity is filed.
- **Failmode:** Paying a service $100 for what the IRS does for free in 10 minutes.

#### `operating-agreement-or-bylaws`
- **Operating Agreement (LLC) or Bylaws (Corp)** · `entity`
- **Answers:** L1
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** The internal governance document: ownership, voting, distributions, transfer restrictions, dissolution. Single-founder LLCs can use templates; multi-founder anything requires a lawyer.
- **When:** Immediately at formation. Not "later."
- **Failmode:** No operating agreement between co-founders. When you fight (and you will), state default rules apply, and they favor whoever files first.
- **⚠ Lawyer:** Required if there are multiple founders.

---

### L2 — IP Ownership

#### `founder-ip-assignment`
- **Founder IP Assignment** · `ip`
- **Answers:** L2
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** Written agreement assigning each founder's pre-formation work related to the business to the entity. Prevents disputes if a founder leaves.
- **When:** At formation. Every day this is missing is unforced legal risk.
- **Failmode:** Assuming "we're friends, we don't need paper." Investors will require this before funding; buyers will require it in diligence. Do it early or pay later.
- **⚠ Lawyer:** Yes.

#### `contractor-ip-assignment`
- **Contractor IP Assignment + Work-for-Hire** · `ip`
- **Answers:** L2
- **Cost / TTV / Effort:** $ · 2 hours per contractor · solo-hour
- **Output:** A signed IP-assignment clause in every contractor contract before they start work. Includes "work for hire" language plus a backstop present-tense assignment (courts have narrowed work-for-hire in some cases).
- **When:** Every contractor, before code touches a keyboard.
- **Failmode:** Getting the deliverable but not the assignment. Now the freelancer owns the code your product runs on.
- **⚠ Lawyer:** Yes, for the template; then reuse.

#### `trademark-scan`
- **Trademark Scan** · `ip`
- **Answers:** L2
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** A knock-out search: USPTO (TESS database), common-law web search, domain availability, social-handle availability. If a mark is already used by someone in your class, choose differently now.
- **When:** Before naming the company or product. Later name changes are expensive.
- **Failmode:** Assuming an available `.com` means the name is free. Trademark and domain are separate.

#### `trademark-filing`
- **Trademark Filing** · `ip`
- **Answers:** L2
- **Cost / TTV / Effort:** $$ · 8–14 months · solo-week
- **Output:** Federal trademark application (USPTO) for the name/logo you've committed to using. Provides nationwide priority; enables enforcement.
- **When:** After you have revenue (or clearly will), before you spend meaningful money on brand.
- **Failmode:** Filing too early on a name you might change. Or too late, after someone else files.
- **⚠ Lawyer:** Strongly recommended (attorneys catch class-selection and description errors that kill applications).

---

### L3 — Customer-Facing Contracts

#### `terms-of-service-and-privacy`
- **Terms of Service + Privacy Policy** · `contracts`
- **Answers:** L3
- **Cost / TTV / Effort:** $$ · 2–3 weeks · solo-week
- **Output:** ToS and Privacy Policy tailored to your actual data flows and jurisdictions. Free generators are a starting point but almost always over-promise or under-cover.
- **When:** Before public launch.
- **Failmode:** Copying a competitor's docs verbatim (their business isn't yours; the risk shapes differ; they may have infringing clauses). Or using a free generator without reading it and promising more than you deliver.
- **⚠ Lawyer:** Yes, at least for review.

#### `msa-sow-templates`
- **MSA / SOW Templates (B2B)** · `contracts`
- **Answers:** L3
- **Cost / TTV / Effort:** $$ · 2 weeks · solo-week
- **Output:** Master Services Agreement (governs relationship) + Statement of Work template (governs each engagement). Written to your standard terms; customer red-lines negotiated case-by-case.
- **When:** Before your third B2B deal.
- **Failmode:** Signing customer paper by default. Their terms are written for their protection; yours should be your default.
- **⚠ Lawyer:** Yes, for templates.

#### `data-protection-gate`
- **Data-Protection Compliance Gate** · `contracts` `regulated`
- **Answers:** L3, L5
- **Cost / TTV / Effort:** $$ – $$$ · 4–12 weeks · solo-week to team-week
- **Output:** Decision + implementation: does your data + jurisdiction footprint trigger GDPR (EU users), CCPA (California users at scale), HIPAA (healthcare PHI), PCI (card data), or SOC2 (enterprise-security demands)? If yes: consent flows, DPIA/DPA, subject-access process, encryption/access controls, and (for SOC2) formal audit.
- **When:** Before onboarding customers in the triggering jurisdiction/industry.
- **Failmode:** Deferring compliance until an enterprise deal demands it in 2 weeks — you can't retrofit in 2 weeks; you lose the deal.
- **⚠ Lawyer:** Yes for GDPR/HIPAA. Consultant + lawyer for SOC2.

---

### L4 — Workers

#### `worker-classification-check`
- **Worker Classification Check (IRS + State)** · `workers`
- **Answers:** L4
- **Cost / TTV / Effort:** $ · 2 hours per worker · solo-hour
- **Output:** For each contributor: employee or contractor? Applied against IRS 20-factor test + state-specific tests (California AB5, Massachusetts, others are stricter than federal). Documented rationale.
- **When:** Before every engagement. Re-check annually.
- **Failmode:** Classifying an integrated, ongoing worker as a contractor to save employer taxes and benefits. Back-taxes, penalties, and (in some states) private lawsuits result.
- **⚠ Lawyer:** Recommended for edge cases, especially California.

#### `employment-offer-letter`
- **Employment Offer Letter** · `workers`
- **Answers:** L4
- **Cost / TTV / Effort:** $ · 1 day · solo-day
- **Output:** Template letter: role, start, comp, benefits, at-will (in at-will states), confidentiality, IP assignment reference. Reviewed once by lawyer; reused thereafter.
- **When:** Before first hire. Sooner if in a right-to-work / at-will jurisdiction.
- **Failmode:** Verbal offers without a paper trail. Or hidden clauses in offer letters (non-competes are unenforceable in many states now — don't include what you can't enforce).
- **⚠ Lawyer:** Yes, for first template.

---

### L5 — Regulated Activity

#### `sales-tax-nexus-check`
- **Sales-Tax Nexus Check** · `regulated`
- **Answers:** L5
- **Cost / TTV / Effort:** $$ · 1–2 weeks · solo-week
- **Output:** For each state where you have customers/employees/inventory, determination of sales-tax obligation. Post-*South Dakota v. Wayfair*, economic-nexus thresholds trigger in almost every state (typically $100k revenue or 200 transactions per state per year).
- **When:** As soon as multi-state sales begin. Ignoring this becomes exponentially painful.
- **Failmode:** Assuming "we're online, we don't have a physical presence, we're fine." That reasoning ended in 2018.
- **⚠ Lawyer or specialist:** Yes — sales tax accountant or platform (Avalara / TaxJar).

#### `industry-license-check`
- **Industry Licensing Check** · `regulated`
- **Answers:** L5
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** For your specific industry, an audit of required licenses / registrations / bonds. Common triggers: financial services (broker-dealer, investment adviser, money transmitter), health (HIPAA + state-medical), food (state health + FDA where applicable), alcohol (federal + state + local), professional services (state boards).
- **When:** Before offering the regulated service. Retroactive licensing is expensive; enforcement is worse.
- **Failmode:** Believing "we're just a marketplace" or "we're just software" exempts you. Regulators disagree with startups on this monthly.
- **⚠ Lawyer:** Yes, industry-specific.

---

### L6 — Insurance & Disputes

#### `insurance-pack`
- **Insurance Pack** · `disputes`
- **Answers:** L6
- **Cost / TTV / Effort:** $ – $$ · 2 weeks · solo-week
- **Output:** Coverage decisions: General Liability (baseline for physical presence or events), Errors & Omissions / Professional Liability (baseline for services and software), Cyber Liability (baseline once you hold customer data at any scale), D&O (once you have outside board members), Workers' Comp (required by state once you have employees).
- **When:** Before the first meaningful lawsuit-risk event: first customer with data, first employee, first event.
- **Failmode:** Under-buying to save premium. First claim reveals the gap.

#### `dispute-response-protocol`
- **Dispute Response Protocol** · `disputes`
- **Answers:** L6
- **Cost / TTV / Effort:** $ · 1 week · solo-week
- **Output:** A short protocol for the first hours of any dispute (customer legal threat, cease-and-desist, subpoena, regulator inquiry): who receives it, immediate silence-window (do NOT reply to the sender until legal counsel is engaged), 24-hour lawyer contact, no public statements, preservation-of-evidence trigger (don't delete anything).
- **When:** Before the first dispute lands. It will.
- **Failmode:** Replying to a demand letter in the moment, on emotion. First-response instincts almost always weaken the legal position.
- **⚠ Lawyer:** Yes, on receipt.

---

## Engine notes

- Nearly all interventions are one-time setups with maintenance. The engine surfaces them at the *stage* they're due; then marks them done and moves them out of the queue.
- Content-risk gate: for every intervention with `⚠ Lawyer`, the UI should visibly display "consult a lawyer" and (v2) route to a vetted directory. In v1: link to state-bar find-a-lawyer directories.
- Cross-links: `/finance` (sales-tax overlap, entity → tax structure), `/people` (worker classification, employment law), `/product` (data protection maps to product data flows), `/governance` (equity docs, corporate secretary work).
- Explicit anti-scope: this domain never provides legal advice. It surfaces decisions, warns of risks, and hands off to counsel. The value is in *knowing when a lawyer is needed*, not replacing one.
