# Writing-page Style Guide

Every long-form article in `writing/` shares one design system, defined in `assets/style.css`. Use the components below — they are all already styled consistently. If you need a component that isn't listed, add it to the stylesheet first, not inline on a single page.

## Page skeleton

```html
<main class="article-shell container">
  <article class="article">
    <section class="hero">
      <div class="eyebrow">AI risk note</div>
      <h1>Title in Inter Tight 600</h1>
      <p class="subtitle">One-line summary.</p>
      <div class="meta-row">
        <span class="pill">tag 1</span>
        <span class="pill">tag 2</span>
      </div>
    </section>

    <!-- optional hero figure under the title -->
    <div class="hero-figure"><img src="../assets/<file>.svg" alt="..." /></div>

    <h2 id="section-1">Section one</h2>
    <p>Body text. Inter 17.5px.</p>

    <!-- … rest of article body … -->

    <section class="references" id="references">
      <h2>References</h2>
      <ul><li>…</li></ul>
    </section>

    <div class="related">
      <h2>Related reading</h2>
      <a href="…"><strong>Title</strong><br><span>tag · tag</span></a>
    </div>

    <nav class="series-nav">
      <a class="series-link" href="…"><span>Previous</span><strong>Title</strong></a>
      <a class="series-link" href="…"><span>Next</span><strong>Title</strong></a>
    </nav>
  </article>

  <aside class="toc">
    <h2>On this page</h2>
    <a href="#section-1">Section one</a>
  </aside>
</main>
```

## Components

| Class | Use it for |
|---|---|
| `.hero` | Article intro — eyebrow + h1 + subtitle + pills |
| `.eyebrow` | Mono kicker label above any heading; navy accent |
| `.subtitle` | One-line summary under h1, 19px muted |
| `.pill` | Small mono tag chip used in `.meta-row` |
| `.hero-figure` | Hero image card below the intro |
| `.figure-card` | Body image with optional `<figcaption>` below |
| `.callout` + `.callout-title` | Highlighted side note inside the article body |
| `.source-note` | Subtle inline citation with a navy left rule |
| `.note` | One-paragraph note with accent-tinted background |
| `.inline-code` | Mono chip for ticker symbols (`MES`, `ES`) |
| `.hero-card` | Thesis or pull-quote block, navy-tinted |
| `.grid-2` / `.grid.two` | Two-column row of cards |
| `.risk-card` | Small panel inside `.grid-2` |
| `.table-wrap` + `<table>` | Regular table with rounded card and scroll fallback |
| `.matrix` + `<table>` | Wider table with horizontal scroll (760px+) |
| `.timeline` + `.node` | 4-column timeline strip |
| `.references` + `<ul>`/`<ol class="refs">` | References block — white card |
| `.related` | Related reading block — vertical link list |
| `.series-nav` + `.series-link` | Previous / Next inter-article footer |
| `.series-grid` (`.three`) + `.series-card` | Series-lead chapter grid |
| `.topic-stack` + `.topic-section` + `.topic-header` + `.topic-kicker` | Series-lead topic organiser |
| `.toc` | Right-rail sticky table of contents |

## Typography baseline

- Display headlines (h1, h2, h3): `var(--display)` — Inter Tight, weight 600.
- Body text: `var(--sans)` — Inter, 17.5px / 1.7 line-height.
- Eyebrow, kicker, date, tag: `var(--mono)` — JetBrains Mono, 11–12px, 0.14em tracking, uppercase.
- Color tokens used everywhere: `--ink`, `--ink-soft`, `--ink-mute`, `--rule`, `--accent` (`#1f3a5f`), `--paper`.

## Rules

1. Never style anything inline in an article HTML file. Add a class.
2. Every image must sit inside `.hero-figure`, `.figure-card`, or a plain `<figure>` — never bare in body text. The stylesheet forces `max-width: 100%; height: auto` on every article image.
3. Every section title uses `<h2 id="...">` so the `.toc` sidebar can deep-link.
4. References go inside `<section class="references" id="references">`. Bare `<h2 id="references">` followed by a `<ul>` is wrong and renders inconsistently.
5. The Previous / Next nav uses `<nav class="series-nav">` with two `<a class="series-link">` children. If there is no next post, leave an empty `<span></span>` in its place so the grid columns stay aligned.
6. Use `.note` for short callouts. Use `.callout` for longer ones with their own `.callout-title`. Use `.hero-card` only for the thesis or pull-quote at the top.

## Adding a new article

1. Copy `writing/why-ai-fails.html` as a template.
2. Update the `<title>`, `<meta name="description">`, `.eyebrow`, `<h1>`, `.subtitle`, and `.meta-row` pills.
3. Write the body using only the classes above.
4. Add an entry to `writing.html` under the right Thread block (`<a class="post">…</a>`).
5. If the post belongs in the homepage feature list, add it to the `writingItems` array in `index.html`'s inline `<script>`.

## Adding a new component

Add the CSS to `assets/style.css` in the `12b. Extra article components` section, with a comment explaining what it's for. Update this guide.
