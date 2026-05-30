# site — TODO

<!-- AUTO-GENERATED from https://app.lucassommer.com/api/projects/site/render — edit via the Tasks UI or API, not this file. Local edits will be overwritten. -->

## Content

- [x] **Ingest Business Ideas spreadsheet into /ideas** — 239 ideas live at `/ideas`, sourced from `src/data/ideas.ts` (edit directly). Ingestion script at `scripts/ingest-ideas.py` (one-shot). 4 detailed, 50 drafts, 24 sketches, 161 seeds. 1 row hidden. Source spreadsheet at `../../Business Ideas.csv` can be archived — TS file is now the source of truth.  _refs: `src/data/ideas.ts`, `scripts/ingest-ideas.py`_
- [ ] **Review and finalize 8 Core Truths on /about page**
- [ ] **Update the /about timeline with the spreadsheet Lucas's family made (memory prompts + dates)**
- [ ] **Comedy document** — Lucas has an existing jokes/comedy document (not in this repo, lives locally or in another tool). Get it into the project when ready and figure out what to do with it (site page, content for socials, book material, etc.)
- [ ] **Add referral/affiliate links section** — tools Lucas actually uses and recommends, with referral codes for income. Examples: Ramp (corporate cards), Gusto (payroll), Zoho (business suite). Likely lives on /resources or a new /stack page. Gather full list of services + referral URLs, then build out a clean card grid with logo, what it is, why Lucas uses it, and the CTA link.
- [ ] **Pull TLP (The Launch Pad) resources into the site + git repo** — ingest all content/resources currently hosted elsewhere, mirror them into this repo, and integrate them into /resources (or a dedicated /launchpad section). Need to identify the source (URL, Notion, Airtable, etc.) and a content format/structure. Probably markdown files per resource, rendered as individual pages with search/filter.
- [ ] **Funny Stories section (new page or homepage block)** — once the comedy doc is imported, extract the best stories. Seeds below.
- [ ] **Curate and populate the Domains Owned list** — page scaffold lives at `/domains` (src/pages/domains.astro); fill the `domains` array with `{ name, status, note?, link? }` entries and link it from nav if you want it surfaced
- [ ] **Consider a "Capital T" truths section** — philosophical/foundational. Note: /about already has a "Core Truths" section (8 operating principles); decide whether Capital T replaces/renames that or is a separate deeper layer

## Features

- [ ] **Provision Resend (or alternate provider) for email capture** — pipeline is live at `functions/api/subscribe.ts`; set `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` in Cloudflare Pages env. Without those, submissions validate and log but don't forward.  _refs: `functions/api/subscribe.ts`_
- [x] **OG social preview image for link sharing** — `/og.png` shipped, meta tags in BaseLayout. Regenerate with `scripts/og/generate.sh`.  _refs: `/og.png`, `scripts/og/generate.sh`_
- [ ] **Explore Anthropic Managed Agents for Onit (see details below)**

## Infrastructure

- [ ] **Media asset strategy** — small assets in /public (served by Cloudflare CDN), large media on Cloudflare R2 or S3

## Managed Agents x Onit

- [ ] **Onboarding audit** — agent analyzes client website, competitors, ad accounts → custom 103-channel strategy in minutes vs. 2-week agency process
- [ ] **Campaign builds** — client says "launch Google Ads for summer sale" → agent writes ad copy, targeting, bid strategy, landing page code
- [ ] **Weekly reporting** — scheduled agent pulls analytics, writes narrative insights + next steps
- [ ] **Creative generation** — 20 ad copy variants, email sequences, social posts, all brand-voice matched
- [ ] **Technical SEO** — agent crawls site, identifies issues, generates fix-it code (schema, meta tags, sitemaps)
- [ ] **Landing page factory** — agent builds complete pages from a brief, outputs deployable HTML/CSS

---
_19 tasks · open 17 · done 2 · blocked 0_
