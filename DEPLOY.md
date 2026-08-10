# Putting Lawvector online

You have everything you need. There is no build step, no server, no database and no dependencies to install — the whole site is one HTML file that runs in the browser.

## What to upload

| File | Why |
|---|---|
| `index.html` | The site. Must be named exactly this. |
| `og-image.png` | The preview card shown when the link is shared. |
| `robots.txt` | Tells search engines they may index it. |
| `sitemap.xml` | Helps search engines find it. |

Put all four in one folder. That folder *is* the website.

---

## Step 1 — Replace the placeholder domain

Open `index.html`, `robots.txt` and `sitemap.xml` in any text editor and find-and-replace:

```
YOUR-DOMAIN.com   →   your actual domain
```

There are 6 occurrences in `index.html` and 1 each in the other two. If you skip this the site still works perfectly — only the link-preview card and search-engine hints break.

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

Create a repository, upload the four files, then in **Settings → Pages** set the source to your main branch. Live at `yourname.github.io/repo-name` within a minute or two.

Netlify, Vercel and GitHub Pages all cap free bandwidth at roughly 100 GB per month. That is a very large amount of traffic for a 376 KB page — around a quarter of a million visits. Cloudflare has no cap.

---

## Step 3 — A domain name

Optional. Costs roughly $10–15 a year from any registrar (Namecheap, Porkbun, Cloudflare Registrar).

`lawvector.com` is a coined compound, so there is a good chance it is free. Check it first — if it is available, take it.

Fallbacks worth checking in order:

- `lawvector.org` — fits a free public-benefit resource well
- `lawvector.help`, `lawvector.guide`, `lawvector.co`
- `getlawvector.com`, `trylawvector.com`
- `lawvector.ma` if you want the Moroccan connection

Buy the `.com` even if you plan to use another one — it stops someone else taking it later.

Once bought, add it in your host's dashboard under *Custom domain* and follow their DNS instructions. HTTPS is issued automatically and usually takes a few minutes.

---

## Step 4 — Optional, once it is live

**Check the link preview.** Paste your URL into a Slack or WhatsApp message, or use a card validator, to confirm `og-image.png` is loading.

**Add analytics.** If you want visitor counts without tracking people, Plausible, Fathom and Cloudflare Web Analytics are all cookie-free and privacy-respecting. Each gives you one `<script>` tag to paste before `</head>`.

**Nothing else is required.** No cookie banner is needed, because the site sets no cookies and collects nothing.

---

## Updating it later

Edit `index.html` and re-upload. On Netlify and Cloudflare you drag the folder again; on GitHub Pages you commit the file. There is nothing to rebuild.

---

## Two things to keep an eye on

**The Method page states a review date.** It currently says the data was reviewed in 2026. If the site is still up in a year with the same figures, that claim stops being true — either refresh the data or change the date.

**The Find help page will drift.** Organisations rename, merge and change eligibility rules. It carries a warning telling people to verify, but it is worth re-checking once a year, especially the phone number.

---

## What it costs to run

Nothing. A static file on a free host with a free certificate. The only recurring cost is the domain, if you buy one.
