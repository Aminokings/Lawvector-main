# Working on LawOrchard

**This folder is the live website.** It is a clone of `Aminokings/Lawvector-main`, published by GitHub Pages. Edit the files here directly — never build a copy elsewhere and hand over a zip.

Amin reviews the diff in GitHub Desktop and pushes. Do not commit or push without being asked.

## The files

| File | What it is |
|---|---|
| `index.html` + 7 section pages | `situation`, `lab`, `world`, `learn`, `tools`, `careers`, `about` |
| `game-*.html` | 13 game pages, one per Law Lab game |
| `app.js` | All content and logic. ~550KB. Shared by every page |
| `cases-recent.js` | Recent Decisions data, curated by hand. Loads *before* `app.js`. Summaries live here and nowhere else |
| `cases-incoming.js` | **Generated — never edit by hand.** Machine-listed, unread judgments. `fetch-cases.js` overwrites it |
| `fetch-cases.js` | Reads court feeds, writes `cases-incoming.js`. Listings only; it may never write a summary |
| `.github/workflows/update-cases.yml` | Runs the above daily and pushes by itself. The only thing here that pushes unattended |
| `styles.css` | All styling, all four themes |
| `fx.js` | Hero scenes and motion |
| `validate-cases.js` | Run before committing any change to `cases-recent.js` |
| `DEPLOY.md`, `UPDATING.md` | Hosting notes, and the brief for updating cases |

The old Legal Wire section on About was folded into Recent Decisions — most of it was unsourced trend writing and did not survive the sourcing rule. Do not reintroduce a second "what's new" area.

No build step, no dependencies, no framework. Plain HTML, CSS and JS.

## Before finishing any change

1. `node --check app.js` — one enormous file; a syntax error takes down every page
2. `node validate-cases.js` — if `cases-recent.js` or `cases-incoming.js` was touched
3. Render-test with jsdom. Parsing clean is not the same as rendering; the bugs are in rendering

When render-testing, concatenate `fx.js`, `cases-recent.js`, `cases-incoming.js` and `app.js` and evaluate them as **one** string. Evaluated separately, each file's top-level `const` is invisible to the next and everything silently renders empty.

## The line that must not move

A summary is a claim about what a real court decided, read by people whose lives have gone wrong. Two things follow, and both are enforced in code rather than left to good intentions:

- Machine-written listings go in `cases-incoming.js` and carry **no** `sum` or `why`. `validate-cases.js` fails if they do.
- Anything that pushes unattended may only publish facts copied from a court. Prose waits for review.

Loosening either of these is not a refactor. It is a change of editorial policy, and it needs Amin's explicit say-so.

## Things that have bitten before

- **Guard strings that already exist.** A conditional edit keyed on a phrase appearing elsewhere in the file skips silently and still reports success. Use a unique marker from the block being inserted.
- **`const` is not a window property.** Top-level `const` does not attach to `window`, and does not become a property of a VM context either. Test code reading `w.SOMETHING` gets `undefined`.
- **Assert *after* writing, never before.** A session once validated in-memory edits, then wrote, and silently discarded an entire block.
- **Never re-render an element mid-drag.** Sliders lost their grab until `liveRefresh()` was added — it patches `[data-live]` regions rather than replacing the host.
- **`localStorage` throws on `file://`.** Every access is wrapped in try/catch. Keep it that way.
- **Theme specificity.** `:root` and `[data-theme]` carry equal weight; theme overrides need `html[data-theme="x"]`.

## House style

Written for people who are not lawyers and may be frightened. Plain language, define terms in the same sentence, short paragraphs. Say who loses as well as who gains. Never advise — explain what the law is, not what someone should do. Every factual claim that could matter carries a source or a confidence label.

Counts change; check before repeating one in copy. Currently: 112 jurisdictions, 42 landmark cases, 13 games, 9 annotated documents, 6 process maps, 5 issue-spotter fact patterns, 36 help jurisdictions, 24 qualification routes, 12 recent decisions and 2 currents.
