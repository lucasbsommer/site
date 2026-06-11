# lucassommer.com — TODO

## Content
- [ ] Fill in /ideas page with real business ideas — first ones captured below
- [ ] Review and finalize 8 Core Truths on /about page
- [ ] Update the /about timeline with the spreadsheet Lucas's family made (memory prompts + dates)
- [ ] Comedy document — Lucas has an existing jokes/comedy document (not in this repo, lives locally or in another tool). Get it into the project when ready and figure out what to do with it (site page, content for socials, book material, etc.)
- [ ] Add referral/affiliate links section — tools Lucas actually uses and recommends, with referral codes for income. Examples: Ramp (corporate cards), Gusto (payroll), Zoho (business suite). Likely lives on /resources or a new /stack page. Gather full list of services + referral URLs, then build out a clean card grid with logo, what it is, why Lucas uses it, and the CTA link.
- [ ] Pull TLP (The Launch Pad) resources into the site + git repo — ingest all content/resources currently hosted elsewhere, mirror them into this repo, and integrate them into /resources (or a dedicated /launchpad section). Need to identify the source (URL, Notion, Airtable, etc.) and a content format/structure. Probably markdown files per resource, rendered as individual pages with search/filter.
- [ ] Funny Stories section (new page or homepage block) — once the comedy doc is imported, extract the best stories. Seeds below.
- [ ] Add a "Domains Owned" section — curate the decent domains for potential projects or to signal breadth of ideas
- [ ] Consider a "Capital T" truths section — philosophical/foundational. Note: /about already has a "Core Truths" section (8 operating principles); decide whether Capital T replaces/renames that or is a separate deeper layer

## Features
- [ ] Wire up email capture forms (currently client-side fakes)
- [ ] OG social preview image for link sharing
- [ ] Explore Anthropic Managed Agents for Onit (see details below)

## Infrastructure
- [ ] Media asset strategy — small assets in /public (served by Cloudflare CDN), large media on Cloudflare R2 or S3

## Entrepreneurship Tool — Expansion Plan
Extending the `/hub` framework beyond marketing into a full-scope small-business / entrepreneurship operating tool. Design pattern that already works for `/hub`: **Inputs (situation) + Catalog (interventions) + Rules (what's relevant when) → Sequenced plan → Roadmap**. Same engine, swappable content packs per domain.

- [ ] **Lifecycle shell at `/`** — both styles: a homepage with cards for each stage (Just an idea / Have a concept / Talking to customers / Building MVP / Have early users / Scaling), plus a guided "where are you?" quiz that routes you to the right tool. Cards = transparent reference, quiz = guided next step.
- [ ] **Domain pack #2: `/validate`** — Idea Validation. Catalog = validation experiments (Mom Test interviews, landing-page smoke test, fake door, concierge MVP, Wizard of Oz, pre-orders, paid-ad demand test, support-forum mining, etc.). Each experiment has cost, time-to-value, prerequisites, and tags which validation questions it answers.
- [ ] **Future domain packs** — Sales, Operations, Customer Success, Finance, Legal, People, Tech, Governance, Product. Build one at a time; only abstract a shared framework after #2 ships so we learn what actually generalizes.
- [ ] **Content sourcing** — AI generates the catalog outlines; Lucas edits for accuracy and voice. Bias toward strategic-structure quality over polished copy at this stage.

### Validation framework variants — for future A/B testing
The first `/validate` build uses a 7-question spine (Is the problem real? / Painful or frequent enough? / Customer reachable? / Will they pay? / Pay enough? / Can you deliver? / Will they stay?). Other established models worth building as variants and testing against each other later:

- [ ] **Lean Riskiest Assumption Test (RAT)** — strip each idea down to its single riskiest assumption and design the cheapest experiment to kill it. Variant where the tool forces you to name one RAT before listing experiments.
- [ ] **Mom Test only** — Rob Fitzpatrick's interview-only loop. Variant that defers all other experiments until the interview-based problem validation passes.
- [ ] **Problem → Solution → Market → Business Model → Channel** — linear funnel framing. Variant that gates each stage on the previous one being signed off, instead of running questions in parallel.
- [ ] **Jobs-To-Be-Done (JTBD)** — frame validation around the "job" the customer is hiring your product to do. Variant that opens with the job-statement template before any experiments are surfaced.
- [ ] **Lean Canvas / Business Model Canvas** — variant where validation is structured around the 9 canvas boxes, with each box gating its own experiments.
- [ ] **YC's "talk to users / build something people want"** — minimalist variant: only two experiment categories (talk-to-users / build-and-ship), no taxonomy.

Decision point once we have data: do users find the 7-question spine more useful, or one of these variants? Could become a "pick your validation philosophy" toggle, or we converge on the highest-performing one.

---

## Business Ideas to Add to /ideas

### 1. Geiger — Ambient code activity monitor
A vibe-coded desktop app that tracks local keystrokes and file changes, then translates the activity into ambient audio. Sounds like a Geiger counter picking up radiation — but instead of radiation, it's picking up your dev flow.

- **The vibe:** Listen to the factory. Your code has a rhythm. You can hear when it's running hot, cooling off, or stalled.
- **The feature:** Pings you when activity stops — a subtle nudge when you've drifted away from the keyboard, or when a long-running agent goes quiet.
- **Why it works:** Devs already have music/lofi playing. This replaces the passive soundtrack with a productivity-tuned one. For agent-driven coding (like Claude Code sessions), it solves the "is it still working?" problem — you hear it working.
- **Build stack:** Electron or Tauri app, listens to fs events + OS-level keystroke counts (no content, just rate), routes to Web Audio oscillator/sample playback. Probably a weekend vibe-code.
- **Who should build it:** A solo dev who loves ambient/generative music. Distribute as a $9 one-time download or $3/mo. Niche but sticky.

### 2. Business MCP — The solo founder's back-office in one Claude integration
A Model Context Protocol (MCP) server that gives any Claude user access to every tool a one-person business needs to run. One install → Claude walks you through every piece of business admin bullshit you'd otherwise pay an ops person, bookkeeper, or EA to handle.

- **The vibe:** "Claude, run my business today." Claude has every tool it needs, wired up, ready to go.
- **What it handles:** Invoicing, expenses, payroll, bank reconciliation, contracts, CRM, email follow-ups, scheduling, tax prep, legal filings, state compliance (annual reports, registered agents), trademarks, insurance renewals, vendor management, 1099s/W2s.
- **Why it works:** Solo founders + creators hate running the back office. Most of this work is rote + repeatable. Claude is already the tool they want to use — MCP just makes it capable. Aggregates integrations (QuickBooks, Zoho, Gusto, Ramp, DocuSign, Google Workspace, etc.) under one namespace.
- **Business model:** $29–$99/mo per user. Referral revenue from the underlying tools (same list as the /resources referral section — double monetization). Enterprise/team tier for bookkeepers/agencies running multiple clients through it.
- **Moat:** The guided flows. Anyone can wrap APIs. The value is the playbook — "end of month? here's what Claude needs to close your books in 15 min." Draws on Lucas's 20+ years of running multiple small businesses.
- **Who should build it:** Someone who has actually run small businesses and felt the pain. (Lucas.) Sits at the intersection of Onit (product), Ad-Apt experience, and the tools you already use.

### 3. AR Basketball Training App
Smart glasses that overlay a digital hoop in any space. White dots on the ball enable vision-based shot tracking — arc, form, release, follow-through. Coaching layer gives real-time feedback on whether moves are being executed correctly. Target: solo shooters, youth players, trainers.

### 4. Physical Net + AR Hoop System
Cheap, deployable physical net that catches shots and returns the ball, paired with AR glasses that render a digital hoop/rim with correct physics. Counts makes/misses against the virtual hoop. Portable, no permanent installation needed. Combines the solo-training convenience of a shot-return net with the accountability of a real hoop.

### 5. Posture-Fixing Wearable System
Multiple form factors worth exploring:
- Office-chair seatbelt-style posture corrector
- Magnet-based: embedded magnet in chair cover + wearable magnet in clothing, detects slouching via proximity
- **Best form:** smart undershirt/underwear with embedded sensors that measure spine posture, shoulder alignment, and sitting pressure. Feeds an app that tracks posture over time and nudges when slouching.

---

## Stories to Write Up (for Funny Stories / comedy content)

- **Chris the office guy** — Suite 100 office mate who was always making weird noises. One day it escalated — "F... u... c..." then he walked out around 4pm. Lucas went Jurassic Park mode — stayed silent, moved chair to block the door — then his phone rang. Connects to the Daniel-the-other-office-mate story (basically lived there).
- **Chris's wife Victoria** — Weeping in the office the next day after the blowup. Six months prior, she'd snuck into the office late at night with another man. Broken-person material.

---

## Larger Sprints (plan separately)

### Live Site-Editing Chatbot
A front-end chatbot widget embedded in the site that can edit pages live.
- **Page context:** bot knows which page it's on and can read that page's content
- **Repo access:** bot has access to the site repo (same access Claude Code has)
- **Model selection:** UI lets Lucas pick the model (Opus/Sonnet/Haiku, etc.)
- **Edit & ship:** prompt the bot ("add a new picture here") → it edits the page source → commits → pushes → deploys → live
- **Scope separately:** auth (only Lucas can trigger edits), model API wiring, build pipeline, deploy automation, safety guardrails

### Auto-Deploy (Push-to-Deploy) for a local prod machine
- Set up a local script/webhook so merging to `main` on GitHub auto-pulls and rebuilds on a local prod machine
- Options: GitHub webhook listener, cron polling, or a systemd service watching for changes
- Flow: merge PR to main → GitHub notifies local machine → `git pull && npm run build` → served via CF Tunnel
- (Currently deploys are handled by Cloudflare Pages automatically; this is for an alternate self-hosted setup)

### Managed Agents x Onit
Managed Agents = programmatic, autonomous Claude Code sessions via API ($0.08/session-hour + tokens). Different from Claude Code web (included in Pro/Max). Onit could use these to do real marketing work at scale, autonomously.

**How it works:**
1. Client onboards via Onit chat UI
2. Onit backend calls Anthropic API → spins up a Managed Agent session
3. Agent gets full sandbox (terminal, browser, file system, code execution)
4. Agent runs autonomously — crawls sites, writes code, generates deliverables
5. Onit surfaces results in client dashboard

**Use cases:**
- [ ] Onboarding audit — agent analyzes client website, competitors, ad accounts → custom 103-channel strategy in minutes vs. 2-week agency process
- [ ] Campaign builds — client says "launch Google Ads for summer sale" → agent writes ad copy, targeting, bid strategy, landing page code
- [ ] Weekly reporting — scheduled agent pulls analytics, writes narrative insights + next steps
- [ ] Creative generation — 20 ad copy variants, email sequences, social posts, all brand-voice matched
- [ ] Technical SEO — agent crawls site, identifies issues, generates fix-it code (schema, meta tags, sitemaps)
- [ ] Landing page factory — agent builds complete pages from a brief, outputs deployable HTML/CSS

**Economics:**
- 15-min onboarding audit: ~$0.02 compute + ~$0.50 tokens = under $1
- Equivalent agency value: 10 hours @ $150/hr = $1,500
- Margin play: deliver $1,500 of value for <$1 in AI cost
- At 1,000 clients: ~$1,000/month in agent costs vs. millions in agency-equivalent output
