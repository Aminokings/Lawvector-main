# Keeping Recent Decisions current

The Recent Decisions section is fed by one file, `cases-recent.js`. Nothing else needs to change to add a case.

This document is the brief for whoever — or whatever — updates it. It is written to be handed to a scheduled task and followed literally.

---

## The one rule

**No source, no entry.**

Every case must link to the judgment itself or to an official court page. Not a news article about the judgment, not a law firm's summary, not a search result. The judgment, or the court's own page for it.

If a case cannot be sourced that way, it does not go in. There is no exception for a case that seems important.

## The second rule

**Only summarise a judgment that has actually been read.**

`sum` is a claim about what a real court really decided. People come to this site because something has gone wrong in their lives, and a confident wrong summary is worse than no summary at all.

If the outcome has not been confirmed from the judgment, leave `sum` empty. The entry then renders under *"listed, not yet summarised"* with a link, which tells the reader the truth: we know this was decided, we have not read it, here it is.

Saying less is always allowed. Guessing is not.

---

## What belongs here

Two streams, and the distinction matters.

**`stream: 'people'`** — the ruling changes what an ordinary person can actually do. Their rights at work, at home, with the police, with their money, with their children. The test: could someone reading this discover that their own position has changed?

**`stream: 'landmark'`** — the ruling changes the law itself. A precedent overruled, a new test, a constitutional question settled. The test: will this be cited in ten years?

A case can qualify on both counts; put it where it lands hardest.

## What does not belong here

- Procedural rulings, case management, permission decisions
- Anything where the significance is only to the parties
- Cases reported only by content farms or SEO blogs
- Commentary, opinion, or "experts say" pieces
- Any case whose outcome cannot be confirmed from a primary source
- Anything that reads as a prediction about how a future case will go

Courts hand down hundreds of decisions weekly and nearly all of them fail these tests. **Adding nothing is a correct outcome for an update.** An empty run means the filter is working, not that it failed.

---

## Where to look

Official sources first, always:

- UK Supreme Court — `supremecourt.uk/decided-cases`
- Court of Justice of the EU — `curia.europa.eu`
- European Court of Human Rights — HUDOC
- US Supreme Court — `supremecourt.gov/opinions`
- Supreme Court of Canada — `scc-csc.ca`
- High Court of Australia — `hcourt.gov.au`
- National constitutional and supreme courts for the other jurisdictions the site covers

Coverage is currently strongest for the UK. Widening it is good, but not at the cost of the two rules above.

---

## The procedure

1. **Read** the current `cases-recent.js` so nothing is duplicated. Check the `id` values.
2. **Search** the official sources for judgments handed down since `RECENT_UPDATED`.
3. **Filter** hard against the tests above. Expect most weeks to yield one or two, often none.
4. **For each survivor**, open the judgment. If the holding is clear, write `sum` and `why` in plain English — no Latin, no unexplained terms of art, short sentences, and say what it means for a reader rather than for a lawyer. If the holding is not clear, leave both empty and let it be a listed entry.
5. **Add** the entries to `RECENT`, newest anywhere in the array — the section sorts by date itself.
6. **Update** `RECENT_UPDATED` to today, whether or not anything was added. It is a review date, not a change date.
7. **Validate**: run `node validate-cases.js` from the site folder.
8. **If validation fails, stop.** Fix it or revert. Never commit a file that does not pass.
9. **Commit** only `cases-recent.js`, with a message naming the cases added, e.g. `Recent decisions: add [2026] UKSC 16, review to 3 Sep`.

## House style for `sum` and `why`

- `sum` answers *what did the court decide* — the holding and enough of the reasoning that it makes sense.
- `why` answers *why should you care* — concrete, and honest about who loses as well as who gains. A ruling that helps one group usually costs another; say so.
- No jargon without immediate definition in the same sentence.
- No "landmark", "groundbreaking" or "historic" unless the entry then earns it.
- Numbers only if they came from a source, and say which.
- Never advise. Explain what changed; do not tell anyone what to do about it.

---

## Why the file is separate from `app.js`

So a bad write cannot take the site down.

`cases-recent.js` loads before `app.js`, and `app.js` checks that `RECENT` exists and is an array before using it. If this file is deleted, emptied, malformed, or has the wrong type in it, every other section of the site keeps working and Recent Decisions simply shows nothing.

That has been tested against all five failure modes. Keep it that way: **never move this data into `app.js`, and never have `app.js` depend on it existing.**
