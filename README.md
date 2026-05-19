# yuz047.github.io

Personal site of **Sirius Zhang** — quantitative researcher working at the
intersection of trading, risk, AI, and data.

Live at <https://yuz047.github.io>.

## What's here

| Page | Purpose |
|---|---|
| `index.html` | Home — short intro plus a tabbed Work / Writing strip. |
| `work.html` | Applied projects — interactive tools and research write-ups. |
| `writing.html` | Long-form essays grouped by thread (AI in markets, prediction markets, futures margin, etc.). |
| `cv.html` | Full CV. |
| `contact.html` | Email, LinkedIn, GitHub. |
| `work/*.html` | Individual project pages. |
| `writing/*.html` | Individual articles. |
| `assets/style.css` | Single stylesheet for the whole site. |

The site is **static HTML** — no build step, no framework, no JavaScript
beyond a small image lightbox and a couple of inline `<script>` blocks for
the tabbed homepage and the multilingual greeting. Hosted on GitHub Pages
straight from the `main` branch.

## Design system

Editorial / finance-newsroom direction. Three font families, one accent
color, thin warm rules:

| Token | Value |
|---|---|
| `--paper` | `#faf8f3` (warm cream background) |
| `--ink` | `#14161a` (primary text) |
| `--accent` | `#1f3a5f` (navy — used sparingly) |
| `--rule` | `#e6e1d3` (hairline borders) |
| `--display` | Inter Tight 600 (headlines) |
| `--sans` | Inter (body) |
| `--mono` | JetBrains Mono (kickers, dates, tags) |

All visual primitives live in `assets/style.css` under labeled sections —
tokens, base, layout, header, hero, cards, articles, footer. To re-skin
the site, edit `:root`.

## Tech

- HTML / CSS only for the site itself.
- `Chart.js` (CDN) on `work/greenlight-trader.html` for the live equity
  curve.
- Google Fonts (Inter Tight, Inter, JetBrains Mono) — preconnected and
  loaded with `display=swap`.
- GitHub Pages serves `main` directly.

## License

The text and code in this repo are MIT-licensed (see `LICENSE`).
Project-specific data files in `data/` and `work/*.json` are public
research artifacts shared under the same license unless noted otherwise
in the file.
