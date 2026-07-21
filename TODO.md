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
- [ ] **Add a /people section — the network I can call on** — Cards for everyone meaningful in Lucas's network: co-founders, operators, advisors, vendors, friends-of-friends, people-with-skills, people-with-capital. Each card: name, role / what they do, where they overlap with Lucas (project, era, intro context), how to reach them (when public-safe). Likely two views: a public 'people I'd vouch for' (light, intentional) and a curator-only private rolodex (visibility=private). Reuses the existing card grid + 3-state visibility lock.  _tags: #cards #curator #people_
- [ ] **Audit + deepen project pages (real meta + detail)** — Each project page should be genuinely interesting, not a paragraph + tags. Want: founding story, status today, traction or proof, what makes it weird / contrarian, what's in flight now, tech stack, the people, the place. Audit all project pages, find the thin ones (Onit and Monkey Business are thinnest), fill them out.  _tags: #audit #content #projects_
- [ ] **Find the 'timeline' document and ingest it into /about** — Someone (family member? friend?) gave Lucas a document with his timeline of events — dates, milestones, photos, memory prompts. Find it (iCloud / Notes / Drive / email — search), bring it into the repo, hand it to Claude, weave it into the /about timeline. Deepens the bio without Lucas having to write it.  _tags: #about #ingest #timeline_

## Features

- [ ] **Provision Resend (or alternate provider) for email capture** — pipeline is live at `functions/api/subscribe.ts`; set `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` in Cloudflare Pages env. Without those, submissions validate and log but don't forward.  _refs: `functions/api/subscribe.ts`_
- [x] **OG social preview image for link sharing** — `/og.png` shipped, meta tags in BaseLayout. Regenerate with `scripts/og/generate.sh`.  _refs: `/og.png`, `scripts/og/generate.sh`_
- [ ] **Explore Anthropic Managed Agents for Onit (see details below)**
- [ ] **Add project pins to /map (including Munch in the Middle East)** — Every project should have a pin so the geographic footprint is visible. Munch in the Middle East would look great — global reach, not just Portland. Action: enumerate every project (active, exited, parked), give each a lat/lng, drop it on the map. Pins link through to project pages. Probably needs a data file for editable project locations.  _tags: #leaflet #map #projects_
- [ ] **Wire family-contribute chat (Deborah & close people)** — Deborah and other close family should be able to chat with the site and ADD to it — anecdotes, corrections, memories, photos. Distinct from public 'talk to Lucas AI'. Needs an invite/identity mechanism — likely extends the existing email-gate with a per-person allowlist + role flag in subscribers. Privacy first: only allowlisted contributors can write.  _tags: #chat #email-gate #family #private_

## Infrastructure

- [ ] **Media asset strategy** — small assets in /public (served by Cloudflare CDN), large media on Cloudflare R2 or S3
- [ ] **Productize the stack — 'personal website for entrepreneurs'** — Everything built here (curator layer, agent with soul/memory/context, email gate, pages editor, chat, local-tunnel + Astro + SQLite) is a TEMPLATE. Goal: package it so another founder runs one command and gets their version, with their own soul.md / memory.md / context.md, an agent that knows them, gateable resources. Documentation should let an agent (Claude Code or otherwise) stand it up end-to-end. Names to consider: founder-site, operator.site, or extend carcin.ai. Meta-play: the site I built for me becomes the productized 'personal OS for entrepreneurs.'  _tags: #meta #productize #template_

## Managed Agents x Onit

- [ ] **Onboarding audit** — agent analyzes client website, competitors, ad accounts → custom 103-channel strategy in minutes vs. 2-week agency process
- [ ] **Campaign builds** — client says "launch Google Ads for summer sale" → agent writes ad copy, targeting, bid strategy, landing page code
- [ ] **Weekly reporting** — scheduled agent pulls analytics, writes narrative insights + next steps
- [ ] **Creative generation** — 20 ad copy variants, email sequences, social posts, all brand-voice matched
- [ ] **Technical SEO** — agent crawls site, identifies issues, generates fix-it code (schema, meta tags, sitemaps)
- [ ] **Landing page factory** — agent builds complete pages from a brief, outputs deployable HTML/CSS

---
_25 tasks · open 23 · done 2 · blocked 0_
