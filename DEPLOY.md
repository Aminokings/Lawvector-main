# Putting LawOrchard online

You have everything you need. There is no build step, no server, no database and no dependencies to install — plain HTML, CSS and JavaScript that run in the browser.

## What to upload

Upload **everything in the folder**, keeping the filenames exactly as they are. The pages link to each other by name, so renaming anything breaks the navigation.

| File | Why |
|---|---|
| `index.html` | Home — Start here |
| `situation.html` | Your situation — your letter, what happens next, help, walkthrough, questions, letters |
| `lab.html` | The Law Lab (index of 13 games) |
| `game-*.html` | One page per game — 13 of them |
| `world.html` | World systems |
| `learn.html` | Case law, brief trainer, quiz |
| `tools.html` | The seven models |
| `careers.html` | Practice areas, AI risk, qualifying, fit |
| `about.html` | Method and the wire |
| `styles.css` | All styling, shared by every page |
| `app.js` | All content and logic, shared by every page |
| `cases-recent.js` | Recent decisions — the only file the automatic update writes to |
| `validate-cases.js` | Checks that file before it is committed. Never loaded by a page |
| `UPDATING.md` | The brief for whoever updates the cases |
| `fx.js` | Hero scenes and motion |
| `og-image.png` | Link preview card |
| `robots.txt`, `sitemap.xml` | Search engine basics |

Because `styles.css`, `app.js` and `fx.js` are shared, the browser downloads them once and reuses them on every page — so moving between pages is close to instant after the first load.

---

## Step 1 — Nothing to edit

The files already point at `laworchard.com`. If you ever move to a different address, find-and-replace `laworchard.com` across `index.html`, `robots.txt` and `sitemap.xml`.

---

## Step 2 — Get it on the internet

Three routes, easiest first. All are free and all give you HTTPS automatically.

### Netlify Drop — about 30 seconds, no account needed to start

1. Go to **app.netlify.com/drop**
2. Drag your folder onto the page
3. It is live, on a URL like `random-name-123.netlify.app`

Best for seeing it live immediately. Create an account afterwards if you want to keep the URL and attach a domain.

### Cloudflare Pages — best if it might get busy

Unlimited bandwidth on the free plan, which none of the others offer. Upload the folder directly, or connect a GitHub repository so it redeploys whenever you change a file.

### GitHub Pages — best if you want version history

Create a repository, upload every file in the folder, then in **Settings → Pages** set the source to your main branch. Live at `yourname.github.io/repo-name` within a minute or two.

Netlify, Vercel and GitHub Pages all cap free bandwidth at roughly 100 GB per month. That is a very large amount of traffic for a page of this size — around a quarter of a million visits. Cloudflare has no cap.

---

## Step 3 — A domain name

You already have `laworchard.com`. In your host's dashboard, add it under *Custom domain* and follow the DNS instructions it gives you. HTTPS is issued automatically and usually takes a few minutes.

If you are staying on GitHub Pages: **Settings → Pages → Custom domain**, enter `laworchard.com`, then add the DNS records GitHub shows you at your registrar. Tick **Enforce HTTPS** once it goes green.

---

## Step 4 — Optional, once it is live

**Check the link preview.** Paste your URL into a Slack or WhatsApp message, or use a card validator, to confirm `og-image.png` is loading.

**Add analytics.** Worth doing early. Right now nobody knows which parts of the site people actually use, and that means every decision about what to build next is a guess.

Plausible, Fathom and Cloudflare Web Analytics are all cookie-free, need no consent banner, and give you one `<script>` tag to paste before `</head>` on each page.

The site has a hook built in for this. Because most navigation happens without a page reload, a plain script tag only records the first page someone lands on. To record section changes too:

1. Paste your analytics `<script>` tag into the `<head>` of every `.html` file
2. In `app.js`, find `const ANALYTICS=false;` near the top and change it to `true`

It is `false` by default and does nothing at all until you change it. No cookie is set and nobody is identified either way — it reports which section was viewed, and that is all.

**Nothing else is required.** No cookie banner is needed, because the site sets no cookies and collects nothing.

---

## Updating it later

Edit the file you want to change and re-upload it. Content lives in `app.js`, styling in `styles.css`, the hero scenes in `fx.js`, and the page headings in each `.html` file. There is nothing to rebuild.

If you change `app.js` or `styles.css` and do not see the change, hard-refresh with `⌘⇧R` — shared files cache aggressively, which is the price of them being fast.

---

## The recent decisions file

`cases-recent.js` is deliberately separate from `app.js`. It holds the Recent Decisions section and nothing else.

If it is missing, or if a bad edit breaks it, the rest of the site carries on working and that one section simply shows nothing. That is why updates are written there and nowhere else.

Two rules apply to anything added to it, and they are written at the top of the file:

- **Every entry needs a source.** A link to the judgment itself, or to an official court page. No source, no entry.
- **Only summarise a judgment that has been read.** If the outcome is not confirmed, leave the summary blank — the entry then renders under "listed, not yet summarised" with a link. Saying less is better than saying something wrong about a real case.

## Two things to keep an eye on

**The Method page states a review date.** It currently says the data was reviewed in 2026. If the site is still up in a year with the same figures, that claim stops being true — either refresh the data or change the date.

**The Find help page will drift.** Organisations rename, merge and change eligibility rules. It carries a warning telling people to verify, but it is worth re-checking once a year, especially the phone number.

**The tour shows once.** First-time visitors get a five-card introduction, remembered on their device. Anyone can reopen it from **More → Show the introduction**. If you change the site substantially, the tour text lives in `TOUR` in `app.js`.

**The Law Lab weights are illustrative.** The jury evidence values and sentencing multipliers are teaching devices, and each one says so on screen. Keep those disclaimers if you edit the numbers.

---

## What it costs to run

Nothing. A static file on a free host with a free certificate. The only recurring cost is the domain, if you buy one.
