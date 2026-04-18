# lucassommer.com — Todo

## In Progress
- [ ] Review homepage hero + brand improvements (branch: claude/lucas-sommer-next-steps-0SLeI)

## Up Next
- [ ] Update the timeline with the spreadsheet my family made me
- [ ] Review the "comedy" document to extract the best stories for a Funny Stories section (new page or homepage section)
- [ ] Add business ideas from the "business ideas" spreadsheet to the site (Ideas section)
- [ ] Add a "Domains Owned" section to the site — curate the decent ones for potential projects
- [ ] Create a "Capital T" section — core Truths that can't be reasoned away. Note: About page already has a "Core Truths" section (8 operating principles); decide later whether Capital T replaces/renames that or is a separate foundational/philosophical section.

## Larger Sprints (plan separately)

### Live Site-Editing Chatbot
- [ ] Build a front-end chatbot widget embedded in the site that can edit pages live
  - **Page context:** bot knows which page it's on and can read that page's content
  - **Repo access:** bot has access to the site repo (same access Claude Code has)
  - **Model selection:** front-end UI lets Lucas pick the model (Opus/Sonnet/Haiku, etc.)
  - **Edit & ship:** prompt the bot ("add a new picture here") → it edits the page source → commits → pushes → deploys → live
  - **Plan this as its own sprint** — scope, auth, model API wiring, build pipeline, deploy automation, safety guardrails (auth so only Lucas can trigger edits)

### Auto-Deploy (Push-to-Deploy)
- [ ] Set up a local script/webhook so that merging to `main` on GitHub auto-pulls and rebuilds on the local prod machine
  - Options: GitHub webhook listener, cron polling, or a small systemd service that watches for changes
  - Flow: merge PR to main → GitHub notifies local machine → `git pull && npm run build` runs automatically
  - CF Tunnel already handles serving — just need the rebuild trigger

## Ideas / Backlog

### Business Ideas to Document on Site
- [ ] **AR Basketball Training App** — Glasses that create a digital hoop overlay. White dots on ball for vision tracking. Tracks shot arc, form, and whether moves are executed correctly. Coaching feedback layer.
- [ ] **Physical Net + AR Hoop System** — Cheap deployable physical net that captures shots and returns the ball. Paired with glasses that render a digital hoop/rim with correct physics. Counts makes/misses against the virtual hoop. Portable, no permanent installation needed.
- [ ] **Posture-Fixing Wearable System** — Multiple form factors to explore:
  - Office chair seatbelt-style corrector
  - Magnet-based: embedded magnet in chair cover + wearable magnet in clothing, detects slouching via proximity
  - **Best idea:** smart undershirt/underwear with embedded wires/sensors that measure spine posture, shoulder alignment, and sitting pressure. Feeds an app that tracks posture over time and alerts when slouching.

### Stories to Write Up (for Funny Stories / Comedy section)
- [ ] **Chris the Office Guy** — Suite 100 office mate who was always making weird noises. Sounded like he was pooping. One day it was different — "F... u... c..." then he walked out around 4pm. Lucas went Jurassic Park mode — stayed silent, moved chair to block the door — then his phone rang. Ties into the story about Daniel, the other office mate who was basically living there.
- [ ] **Chris's wife Victoria** — She was weeping in the office the next day after the blowup. Also ~6 months before that, she snuck into the office very late at night with another dude. She was a broken person. Related to the Chris story above.

## Done
- [x] Initial site build (14 pages, all project pages, about, map, resources)
- [x] Rewrote homepage hero to lead with credentials (exits, companies, years)
- [x] Added "The Story So Far" narrative bridge section on homepage
- [x] Upgraded press section to "Press & Recognition" with WeMedia win + Georgetown lecture
