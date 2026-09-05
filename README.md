# murtezamirjaylany.com

A responsive one-page portfolio. No build step, no dependencies — upload the
files and it runs.

## Files

| File | What it is |
|---|---|
| `index.html` | All page content |
| `styles.css` | All styling |
| `script.js` | Mobile menu, scope animation, footer year |
| `favicon.svg` | Browser tab icon |
| `apple-touch-icon.png` | Icon when saved to a phone home screen |
| `og-image.png` | Preview image for LinkedIn, X, iMessage, Slack |
| `robots.txt` | Tells search engines to index the site |
| `sitemap.xml` | Page list for Google Search Console |

---

## Do these three things before you publish

**1. Add your email.** Open `index.html`, search for `YOUR_EMAIL_HERE`, and
replace it with your real address. Then delete the line just below it that
starts with `<p class="setup mono">` — it's a reminder to yourself, not part of
the design.

**2. Check every claim.** I wrote the copy from your existing site, but you are
the one publishing it. Confirm these read correctly before it goes live:

- Job titles and company names (NUURBY, Telli Community Platforms, Noorby Inc.)
- Degrees and institutions — the education section lists no schools or dates, so
  add them if you want them, but only where you can back them up
- The five numbers in the strip under the hero: 10,000+ users, 3 companies,
  5 browser products, 9 aviation courses, 2 books
- Award names (Dean's List, National Leadership Award, Golden Key Award)
- Every project description in "Selected work"

**3. Rewrite the "Now" section.** It's the block near the bottom describing what
you're working on this season. It's marked with an `EDIT ME` comment. Update it
every few months — a stale "now" page is worse than none.

---

## Publishing

### Option A — Cloudflare Pages (recommended)

Free, fast worldwide, automatic HTTPS, and you keep the domain at GoDaddy.
Better suited to a static site than shared hosting.

1. Create a free account at `dash.cloudflare.com`.
2. Go to **Workers & Pages → Create → Pages → Upload assets**.
3. Drag in the folder containing these files. Deploy.
4. You get a live `something.pages.dev` URL. Check it works.
5. Add `murtezamirjaylany.com` as a site in Cloudflare. It will give you two
   nameservers.
6. In GoDaddy: **Domain Portfolio → murtezamirjaylany.com → DNS → Nameservers →
   "I'll use my own nameservers"**. Paste in Cloudflare's two.
7. Back in your Pages project: **Custom domains → Set up a domain →**
   `murtezamirjaylany.com`. Add `www.murtezamirjaylany.com` too.

An apex domain like `murtezamirjaylany.com` has to use Cloudflare's nameservers —
a CNAME alone won't work for the root. Propagation is usually under an hour.

**Note:** switching nameservers moves *all* DNS for the domain, including any
email records. If you have email on this domain, copy your existing MX and TXT
records into Cloudflare before you flip the nameservers.

### Option B — GoDaddy hosting you already pay for

Only if you have a GoDaddy **Web Hosting** plan with cPanel.

1. GoDaddy → **My Products → Web Hosting → Manage → cPanel Admin**.
2. Open **File Manager**, go to `public_html`.
3. Delete or rename whatever is producing the "Launching Soon" page.
4. Upload all files from this folder into `public_html` — not into a subfolder.
5. Visit the domain. In cPanel, confirm **SSL/TLS Status** shows a valid
   certificate so the site loads over `https://`.

### Turning off the "Launching Soon" page

That page is coming from one of three places. Check in this order:

- **Websites + Marketing:** GoDaddy → My Products. If there's a Websites +
  Marketing entry attached to the domain, it's overriding everything. Either
  delete that site or unlink the domain from it.
- **Domain forwarding:** Domain Portfolio → your domain → check for an active
  forwarding rule and remove it.
- **A parked A record:** Domain Portfolio → your domain → DNS. A parked domain
  points to a GoDaddy IP. Your host will replace this record.

---

## After it's live

1. Add the site to **Google Search Console**, verify ownership with a TXT record
   in GoDaddy DNS, and submit `sitemap.xml`.
2. Paste the URL into LinkedIn's post composer to confirm `og-image.png` renders.
3. Run it through PageSpeed Insights.
4. Swap `og-image.png` for one with your headshot once you have a good one —
   1200 × 630 pixels.

## What to build next

Roughly in order of how much each one helps:

1. **A professional headshot** in the hero, replacing or beside the scope.
2. **A resume page** with a Download PDF button.
3. **GitHub links on every project.** Right now the work is described but not
   evidenced — links are the single biggest credibility gain available to you.
4. **Screenshots and architecture diagrams** for the OT/ICS scanner and the AWS
   discovery tool.
5. **Chrome Web Store links** for all five extensions.
6. **Amazon links** for both books.
7. **A contact form** with categories (Employment, Research, Investment,
   Business, Aviation, Speaking) — Formspree or Cloudflare Workers can handle it
   without a backend.
8. **3–6 recommendations** from professors, executives, or clients.
9. **Split into multiple pages** once any single section outgrows the homepage.

## Editing notes

Colours live at the top of `styles.css` as CSS variables. `--mag` is the magenta
accent on dark sections; `--mag-deep` is its darker counterpart on light ones.
Changing those two changes the whole site.

Sections alternate between `band--void` (dark) and `band--chart` (light). To move
a section, move its whole `<section>` block and keep the class on it.

The hero scope is inline SVG in `index.html`. To change which protocols appear,
edit both the `.readout` list and the `DELAYS` array in `script.js` so the
contact count still matches.
