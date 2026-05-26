#!/usr/bin/env python3
"""
Ingest Business Ideas.csv (at the repo parent dir) into src/data/ideas.ts.

After this runs, the spreadsheet is no longer the source of truth — the TS
file is. Edit the TS directly going forward.
"""
import csv
import re
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = HERE.parent
CSV_PATH = HERE / "archive" / "Business Ideas.csv"  # archived after initial ingest
OUT_PATH = SITE / "src" / "data" / "ideas.ts"

HIDDEN_PATTERNS = [re.compile(r"teasecombo|adult entertainment", re.I)]

DRAFTED = [
    {
        "id": "geiger-ambient-code-monitor",
        "name": "Geiger — Ambient code activity monitor",
        "description": (
            "A vibe-coded desktop app that tracks local keystrokes and file changes, then translates the "
            "activity into ambient audio. Sounds like a Geiger counter picking up radiation — but instead of "
            "radiation, it's picking up your dev flow.\n\n"
            "**The vibe:** Listen to the factory. Your code has a rhythm. You can hear when it's running hot, "
            "cooling off, or stalled.\n\n"
            "**The feature:** Pings you when activity stops — a subtle nudge when you've drifted away from the "
            "keyboard, or when a long-running agent goes quiet.\n\n"
            "**Why it works:** Devs already have music/lofi playing. This replaces the passive soundtrack with a "
            "productivity-tuned one. For agent-driven coding (Claude Code sessions), it solves the 'is it still "
            "working?' problem — you hear it working.\n\n"
            "**Build stack:** Electron or Tauri, listens to fs events + OS-level keystroke counts (no content, "
            "just rate), routes to Web Audio oscillator/sample playback. Probably a weekend vibe-code.\n\n"
            "**Who should build it:** A solo dev who loves ambient/generative music. Distribute as a $9 one-time "
            "download or $3/mo. Niche but sticky."
        ),
        "tags": ["Desktop", "Developer Tools", "Audio", "Indie"],
    },
    {
        "id": "business-mcp",
        "name": "Business MCP — The solo founder's back-office in one Claude integration",
        "description": (
            "A Model Context Protocol (MCP) server that gives any Claude user access to every tool a one-person "
            "business needs to run. One install → Claude walks you through every piece of business admin "
            "bullshit you'd otherwise pay an ops person, bookkeeper, or EA to handle.\n\n"
            "**The vibe:** 'Claude, run my business today.' Claude has every tool it needs, wired up, ready to go.\n\n"
            "**What it handles:** Invoicing, expenses, payroll, bank reconciliation, contracts, CRM, email "
            "follow-ups, scheduling, tax prep, legal filings, state compliance (annual reports, registered agents), "
            "trademarks, insurance renewals, vendor management, 1099s/W2s.\n\n"
            "**Why it works:** Solo founders + creators hate running the back office. Most of this work is rote + "
            "repeatable. Claude is already the tool they want to use — MCP just makes it capable. Aggregates "
            "integrations (QuickBooks, Zoho, Gusto, Ramp, DocuSign, Google Workspace) under one namespace.\n\n"
            "**Business model:** $29–$99/mo per user. Referral revenue from the underlying tools (double "
            "monetization). Enterprise/team tier for bookkeepers/agencies running multiple clients through it.\n\n"
            "**Moat:** The guided flows. Anyone can wrap APIs. The value is the playbook — 'end of month? here's "
            "what Claude needs to close your books in 15 min.' Draws on 20+ years of running small businesses.\n\n"
            "**Who should build it:** Someone who has actually run small businesses and felt the pain. Sits at the "
            "intersection of Onit (product), Ad-Apt experience, and the tools you already use."
        ),
        "tags": ["AI", "SaaS", "MCP", "Operations", "Solo Founder"],
    },
    {
        "id": "ar-basketball-training",
        "name": "AR Basketball Training App",
        "description": (
            "Smart glasses that overlay a digital hoop in any space. White dots on the ball enable vision-based "
            "shot tracking — arc, form, release, follow-through. Coaching layer gives real-time feedback on "
            "whether moves are being executed correctly. Target: solo shooters, youth players, trainers."
        ),
        "tags": ["AR", "Sports", "Consumer Hardware"],
    },
    {
        "id": "physical-net-ar-hoop",
        "name": "Physical Net + AR Hoop System",
        "description": (
            "Cheap, deployable physical net that catches shots and returns the ball, paired with AR glasses that "
            "render a digital hoop/rim with correct physics. Counts makes/misses against the virtual hoop. "
            "Portable, no permanent installation needed. Combines the solo-training convenience of a shot-return "
            "net with the accountability of a real hoop."
        ),
        "tags": ["AR", "Sports", "Hardware"],
    },
    {
        "id": "posture-fixing-wearable",
        "name": "Posture-Fixing Wearable System",
        "description": (
            "Multiple form factors worth exploring:\n"
            "- Office-chair seatbelt-style posture corrector\n"
            "- Magnet-based: embedded magnet in chair cover + wearable magnet in clothing, detects slouching via proximity\n"
            "- **Best form:** smart undershirt/underwear with embedded sensors that measure spine posture, "
            "shoulder alignment, and sitting pressure. Feeds an app that tracks posture over time and nudges when "
            "slouching."
        ),
        "tags": ["Health", "Wearable", "Hardware"],
    },
]


def slugify(s: str, fallback_i: int) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", (s or "").lower()).strip("-")[:60]
    return s or f"idea-{fallback_i}"


def depth_of(name: str, desc: str) -> str:
    if not desc:
        return "oneliner"
    total = len(name) + len(desc)
    if total < 180:
        return "sketch"
    if total < 600:
        return "draft"
    return "detailed"


def clean(s: str) -> str:
    return (s or "").strip()


def ingest_csv():
    ideas = []
    seen_slugs = set()
    with CSV_PATH.open(encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f)
        for i, row in enumerate(reader):
            if i == 0:
                continue  # header
            if not row or not clean(row[0]):
                continue
            name = clean(row[0])
            desc = clean(row[1]) if len(row) > 1 else ""
            link = clean(row[2]) if len(row) > 2 else ""

            # One row had an entire pasted email glued to the idea name
            if name.lower().startswith("sell ad-apt to hawk"):
                name = "Sell Ad-Apt to Hawk"

            # Truncate absurdly long single-line names into name + description
            if len(name) > 140 and not desc:
                sentences = re.split(r"(?<=[.!?])\s+", name, maxsplit=1)
                if len(sentences) == 2 and len(sentences[0]) < 140:
                    name, desc = sentences[0], sentences[1]

            slug_base = slugify(re.split(r"[:,\.]", name)[0][:60], i)
            slug = slug_base
            n = 2
            while slug in seen_slugs:
                slug = f"{slug_base}-{n}"
                n += 1
            seen_slugs.add(slug)

            hidden = any(p.search(f"{name} {desc}") for p in HIDDEN_PATTERNS)

            ideas.append({
                "id": slug,
                "name": name,
                "description": desc or None,
                "link": link or None,
                "status": "open",
                "depth": depth_of(name, desc),
                "tags": [],
                "hidden": hidden or None,
                "source": "csv",
                "addedAt": "2026-04-15",
            })
    return ideas


def build_drafted():
    out = []
    for d in DRAFTED:
        name, desc = d["name"], d["description"]
        out.append({
            "id": d["id"],
            "name": name,
            "description": desc,
            "link": None,
            "status": "open",
            "depth": depth_of(name, desc),
            "tags": d.get("tags", []),
            "hidden": None,
            "source": "todo-backlog",
            "addedAt": "2026-04-19",
        })
    return out


def to_ts(ideas):
    header = '''// Generated initially by scripts/ingest-ideas.py from Business Ideas.csv.
// From here on, edit this file directly — it's the source of truth.

export type IdeaStatus = 'open' | 'exploring' | 'building' | 'parked';
export type IdeaDepth = 'oneliner' | 'sketch' | 'draft' | 'detailed';

export interface Idea {
  id: string;
  name: string;
  description?: string | null;
  link?: string | null;
  status: IdeaStatus;
  depth: IdeaDepth;
  tags?: string[];
  hidden?: boolean | null;
  source: 'csv' | 'todo-backlog' | 'manual';
  addedAt: string;
  updatedAt?: string;
  notes?: string;
}

export const ideas: Idea[] = '''
    body = json.dumps(ideas, indent=2, ensure_ascii=False)
    # JSON null → TS null is fine; JSON keys are quoted, TS accepts that.
    return header + body + ";\n"


def main():
    if not CSV_PATH.exists():
        raise SystemExit(f"CSV not found at {CSV_PATH}")
    drafted = build_drafted()
    csv_ideas = ingest_csv()
    # Put drafted ideas first — these are the highest-signal entries
    ideas = drafted + csv_ideas
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(to_ts(ideas), encoding="utf-8")
    counts = {}
    for x in ideas:
        counts[x["depth"]] = counts.get(x["depth"], 0) + 1
    hidden = sum(1 for x in ideas if x.get("hidden"))
    print(f"wrote {OUT_PATH} — {len(ideas)} ideas ({counts}), hidden={hidden}")


if __name__ == "__main__":
    main()
