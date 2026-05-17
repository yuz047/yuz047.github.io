# v2/ — Sirius Zhang personal site, redesign

A from-scratch rebuild of `~/Desktop/personal-website`, kept in a sibling folder so the live v1 is untouched while v2 is reviewed.

## Design direction

An **editorial-finance** look — closer to Stripe Press, FT Alphaville's long-form pages, and Patrick Collison's reading-room than to a generic dev portfolio. The goal is to read as a serious practitioner page for a brokerage / exchange / quant audience.

Specific choices:
- Warm paper background (`#faf8f3`), deep ink, single navy accent (`#1f3a5f`).
- **Fraunces** serif for display headlines (gives the "publication" feel without being precious).
- **Inter** for body copy. **JetBrains Mono** for tags, kickers, timestamps — a data-typography signal.
- Single accent color used sparingly. No gradients. No animated marketing fluff.
- Card-based grids with thin warm rules (`#e6e1d3`) instead of heavy borders.
- Hairline status pills (`Live`, `Draft`) on the Work cards so placeholders read as honest, not unfinished.
- Multilingual greeting kept (cycles HELLO / 你好 / こんにちは / 안녕하세요 / BONJOUR / HOLA), now stamped as a tiny mono-typography meta line on the hero instead of a centred banner.
- Expertise word cloud kept (six terms), but rebuilt in serif italic so it reads as quoted concepts rather than tags.

Inspiration references that informed the look: Stripe Press editorial pages, FT Alphaville long-form, Patrick Collison's personal site, Karpathy's lab page. Search context from current 2026 trends in minimalist finance design (deep navy + paper white + editorial typography) is in `../SITE_INVENTORY.md`'s "design direction" notes.

## File tree

```
v2/
  index.html                     # hero + word cloud + Work/Writing tabs
  work.html                      # 3-card index with live/draft status pills
  writing.html                   # 3 threads × posts grouped by topic
  cv.html                        # full CV (Webull, Theia, Georgetown, UCSD, etc.)
  contact.html                   # email + LinkedIn + GitHub cards
  README.md                      # this file
  assets/
    style.css                    # SINGLE stylesheet for the whole site
    blog.js                      # image lightbox for article figures
    *.svg, *.png                 # diagrams + plots used by articles
    high-risk-symbols/           # PNG plots for the high-risk-symbol post
  data/
    sample_positions.csv         # stress lab sample data
    sample_margin_rates.csv
    reported_high_risk_symbol_case_dataset.csv
  writing/
    *.html                       # 13 long-form articles (ported)
  work/
    futures-margin-stress-lab.html       # real interactive project (~45KB)
    asset-universe-risk-engine.html      # placeholder
    llm-risk-ops-copilot.html            # placeholder
```

## Single design system

Everything reads from `assets/style.css`. The CSS is sectioned with header comments:

1. **Tokens** — color, type, radius, shadow.
2. **Base** — body, links, selection.
3. **Layout** — `.container`, `.section`, `.rule`, `.eyebrow`.
4. **Header / nav** — sticky, blurred, with active-page underline.
5. **Hero** — asymmetric 1.15 : 0.85 grid + cloud.
6. **Word cloud** — absolute terms + `termPulse` keyframes.
7. **Tabs** — Work / Writing switcher on the homepage.
8. **Card grid** — used by Work and the homepage feature row.
9. **CV** — section heads with mono eyebrow, item heads with date column, skill tiles.
10. **Contact** — three-up cards.
11. **Writing index** — topic blocks with row-style post list.
12. **Article** — long-form post layout (article shell, hero card, callout, tables, figures, TOC, references, related).
13. **Footer** — mono caps row.

If you want to change a color, edit `:root` at the top — everything cascades.

## Article pages

The 13 posts under `writing/` are the original v1 articles, with:
- their stylesheet swapped from `futures-blog.css` to v2's `style.css`,
- header replaced with v2's nav + `is-current` flag on Writing,
- footer replaced with v2's footer.

Article body markup (`.article-shell`, `.hero-card`, `.callout`, `.figure-card`, `.table-wrap`, etc.) is preserved verbatim — v2's stylesheet defines those classes with the new typography. Lightbox (`blog.js`) still works.

## How to add a new blog post

1. Copy any existing file in `writing/` (e.g. `writing/why-ai-fails.html`).
2. Update `<title>`, `<meta name="description">`, `.eyebrow`, `<h1>`, `.subtitle`, `.meta-row` pills.
3. Write the body using `.callout`, `.source-note`, `.figure-card`, `.table-wrap`, `.grid-2`, `.risk-card`, `.timeline` — all defined in `style.css`.
4. Add the post to `writing.html` under the right Thread block: copy the `<a class="post">…</a>` row and fill in.
5. If it's a flagship piece, add it to the `writingItems` array in `index.html`'s `<script>`.

## How to add a new Work project

1. Copy `work/asset-universe-risk-engine.html` (the placeholder template).
2. Update title, eyebrow, h1, body.
3. Add the card to `work.html`. Pick a status: `live` or `draft`.
4. If it should appear on the homepage, add it to `workItems` in `index.html`.

## What is intentionally not in v2

- No React, no Tailwind CDN, no build step.
- No `_legacy-preview/` Vite shell.
- No `src/pages/*.jsx`.
- No duplicate CSS files (one `style.css` instead of `site.css` + `futures-blog.css`).
- No old "Series map" navigation block on `prediction-markets-series.html`.

## What carried over verbatim

- Every CV bullet (Webull Financial, Theia Insights, Georgetown RA).
- Every blog post body, references, and tables.
- Every project pitch (Futures Margin Stress Lab body is the original interactive page).
- All asset PNGs, SVGs, and CSV sample data.
- Contact details: `yuz047@outlook.com`, `linkedin.com/in/yuz047/`, `github.com/yuz047`.

## How to promote v2 to live

When you're happy with v2:

```bash
cd ~/Desktop/personal-website
# back up v1
mkdir -p _v1-backup
mv index.html work.html writing.html cv.html contact.html _v1-backup/
mv writing _v1-backup/writing-v1
mv work _v1-backup/work-v1
mv assets _v1-backup/assets-v1
# promote v2
mv v2/* .
rmdir v2
```

Or simply keep v2/ as the public folder if your host can point to a subdirectory.

## Known follow-ups

- The Work placeholders (`asset-universe-risk-engine.html`, `llm-risk-ops-copilot.html`) still use the v1 `.panel` class. They render but are visually thin. Fill them with real content using the source bundles in `../input_zips/`.
- `prediction-markets-series.html` has internal `#prediction-markets-101`, `#event-contracts-market-structure`, `#bots-manipulation-mispricing` anchors that survived the series-map removal — useful for deep links.
- v2 currently loads Google Fonts (Fraunces / Inter / JetBrains Mono). For offline-first rendering, self-host them in `assets/fonts/` and replace the `<link>` in the page heads.
