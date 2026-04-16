# lucassommer.com — TODO

## Content
- [ ] Fill in /ideas page with real business ideas (waiting on Lucas to provide)
- [ ] Review and finalize 8 Core Truths on /about page

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
