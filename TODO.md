# lucassommer.com — TODO

## Content
- [ ] Fill in /ideas page with real business ideas — first one below
- [ ] Review and finalize 8 Core Truths on /about page
- [ ] Comedy document — Lucas has an existing jokes/comedy document (not in this repo, lives locally or in another tool). Get it into the project when ready and figure out what to do with it (site page, content for socials, book material, etc.)
- [ ] Add referral/affiliate links section — tools Lucas actually uses and recommends, with referral codes for income. Examples: Ramp (corporate cards), Gusto (payroll), Zoho (business suite). Likely lives on /resources or a new /stack page. Gather full list of services + referral URLs, then build out a clean card grid with logo, what it is, why Lucas uses it, and the CTA link.
- [ ] Pull TLP (The Launch Pad) resources into the site + git repo — ingest all content/resources currently hosted elsewhere, mirror them into this repo, and integrate them into /resources (or a dedicated /launchpad section). Need to identify the source (URL, Notion, Airtable, etc.) and a content format/structure. Probably markdown files per resource, rendered as individual pages with search/filter.

## Business Ideas to Add

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


## Features
- [ ] Wire up email capture forms (currently client-side fakes)
- [ ] OG social preview image for link sharing
- [ ] Explore Anthropic Managed Agents for Onit (see details below)

## Managed Agents x Onit

Managed Agents = programmatic, autonomous Claude Code sessions via API ($0.08/session-hour + tokens). Different from Claude Code web (included in Pro/Max). Onit could use these to do real marketing work at scale, autonomously.

### How it works
1. Client onboards via Onit chat UI
2. Onit backend calls Anthropic API → spins up a Managed Agent session
3. Agent gets full sandbox (terminal, browser, file system, code execution)
4. Agent runs autonomously — crawls sites, writes code, generates deliverables
5. Onit surfaces results in client dashboard

### Use cases
- [ ] **Onboarding audit** — agent analyzes client website, competitors, ad accounts → custom 103-channel strategy in minutes vs. 2-week agency process
- [ ] **Campaign builds** — client says "launch Google Ads for summer sale" → agent writes ad copy, targeting, bid strategy, landing page code
- [ ] **Weekly reporting** — scheduled agent pulls analytics, writes narrative insights + next steps
- [ ] **Creative generation** — 20 ad copy variants, email sequences, social posts, all brand-voice matched
- [ ] **Technical SEO** — agent crawls site, identifies issues, generates fix-it code (schema, meta tags, sitemaps)
- [ ] **Landing page factory** — agent builds complete pages from a brief, outputs deployable HTML/CSS

### Economics
- 15-min onboarding audit: ~$0.02 compute + ~$0.50 tokens = under $1
- Equivalent agency value: 10 hours @ $150/hr = $1,500
- Margin play: deliver $1,500 of value for <$1 in AI cost
- At 1,000 clients: ~$1,000/month in agent costs vs. millions in agency-equivalent output

## Infrastructure
- [ ] Consider media asset strategy — small assets in /public (served by Cloudflare CDN), large media on Cloudflare R2 or S3
