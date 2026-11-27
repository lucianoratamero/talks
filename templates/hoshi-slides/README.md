# hoshi-slides template

The reveal.js setup from the 2021 talks: hoshi theme (gradient `<mark>` headings), a title slide,
an "Olá :]" slide with photo, age and social links, and an "Obrigado! :]" slide. Everything it loads lives
in `static/shared/`: the theme, `hoshi-slides/custom.css`, `eu.jpg`, and in `vendor/` (each folder has its
LICENSE) reveal.js 6.0.2 (its highlight plugin bundles highlight.js 11.11.1), the highlight.js 11.12.0
`tomorrow-night-bright` color theme, and `highlightjs-svelte` 1.0.6 for ```` ```svelte ```` blocks.
The 2021 talks still load reveal 4.1.0 from `static/shared/dist` and `static/shared/plugin`; leave those alone.

To upgrade reveal later: `npm pack reveal.js@<version>`, copy `dist/{reveal.js,reveal.css,reset.css}` and the
five plugins the template loads from `dist/plugin/` into a new `vendor/reveal.js-<version>/`, and point the
template's paths at it (old built talks keep the old folder until rebuilt).

Text is set in Allo (bold headings and bold text, regular elsewhere) and code in JetBrainsMono Nerd Font.
Both are self-hosted by `static/shared/hoshi-slides/template.css` from the files in `fonts/` (SIL OFL, see the
`*-OFL.txt` files), so a built talk needs no network: serve or open it offline. Only this template links
`template.css` (which also styles code: a faint chip behind inline `code`, rounded padded code blocks),
so the 2021 talks keep Source Sans Pro, IBM Plex Mono and their original code look.

There are two ways to start a talk from it.

## Option 1: write it in markdown (recommended)

```sh
mkdir 2026/my-talk
cp templates/hoshi-slides/example.md 2026/my-talk/slides.md
npm run build:talk -- 2026/my-talk/slides.md   # writes 2026/my-talk/index.html once
npm run watch:talk -- 2026/my-talk/slides.md   # same, then rebuilds on every save (ctrl+c to stop)
```

Watch mode also rebuilds when the template changes. A save that breaks the build (e.g. a missing
front matter key) prints the error and keeps watching. It doesn't reload the browser; refresh it yourself.

Open `index.html` directly or serve the repo root, e.g. `python3 -m http.server`,
then go to `http://localhost:8000/2026/my-talk/`.
The talk folder must sit two levels deep (`<year>/<talk>/`) because the template links `../../static/`.

The build refuses to overwrite an `index.html` it didn't generate, so it can't clobber a hand-written talk.
Don't edit the generated `index.html`; your changes are lost on the next build.

### Front matter

The file must start with a front matter block, one key per line. Values are plain text (HTML is
escaped, and there are no YAML comments or multi-line values).

```md
---
title: Talk title
description: One line. Chega mais!
about: what I do / where I work
theme: dark
---
```

- `title` (required): the page `<title>` and the title slide
- `description` (required): `<meta name="description">`
- `about` (required): the line under your name on the "Olá :]" slide
- `theme` (optional): `light` (default) or `dark`. Anything else is a build error.
- `bullets` (optional): `all` (default, a list shows at once) or `step` (every list item in the talk
  appears on its own click). Anything else is a build error.
- `paragraphs` (optional): same as `bullets`, for paragraphs.
- `age` (optional): shown after your name on the "Olá :]" slide. Defaults to your age on the day you
  build (birthday is in `ageOn` in `scripts/build-talk.mjs`), so rebuilding a talk a year later bumps it.
  Set it to pin the age you had when you gave the talk.

Dark mode is a set of `html.dark` rules at the end of `static/shared/hoshi-slides/custom.css`, with a
lighter gradient so headings stay readable. Talks without `class="dark"` on `<html>` (all the older
ones) are unaffected; an old talk can opt in by adding that class by hand.

While presenting, press `D` to flip between light and dark on the fly (it's also listed in reveal's
`?` help overlay). The toggle isn't saved: a reload goes back to the front matter `theme`, and the
speaker notes window (`S`) keeps its own theme.

### Slides

Rendered in the browser by reveal's markdown plugin (marked). Inline HTML works.

| You want | Write |
| --- | --- |
| New slide | a line with only `---` |
| Heading with the hoshi gradient | `## heading` (every `#` heading gets `<mark>` automatically) |
| Speaker notes (press `S`) | a line starting with `Note:`; everything after it until the next `---` is notes, and markdown (lists, **bold**, `code`) works there |
| Reveal on next click | `point <!-- .element: class="fragment" -->` (styles: `fragment fade-up`, `fade-in-then-out`, … see revealjs.com/fragments) |
| Bullets one per click, whole talk | `bullets: step` in the front matter |
| Paragraphs one per click, whole talk | `paragraphs: step` in the front matter |
| Bullets and paragraphs one per click, one slide | `<!-- .slide: data-step -->` at the top of the slide |
| Slide attributes | `<!-- .slide: class="title-slide" data-background="#000" -->` |
| Code with highlight | a fenced block with a language: ```` ```js ````, ```` ```python ````, ```` ```svelte ```` … |
| Step through code lines | ```` ```js [1\|2-4\|3] ```` highlights line 1, then 2-4, then 3, one per click |
| Image | `![alt](./media/pic.png)`, path relative to the talk folder |
| Image filling the rest of the slide | `<img class="r-stretch" src="./media/pic.png" alt="…">` on its own line (not `![]()`) |
| Align a whole slide | `<!-- .slide: class="align-left" -->` (or `align-center`, which also centers list items, or `align-right`) |
| Align one element | the same classes with `<!-- .element: class="align-right" -->` on its own line right after the paragraph/list; on a list, `align-left`/`align-right` move the whole list |
| Huge text filling the width | `## big <!-- .element: class="r-fit-text" -->` |
| Two columns | `<div class="r-hstack">` with one `<div>` per column; leave blank lines around the markdown inside each `<div>`. Columns get equal widths |
| Animate between two slides | `<!-- .slide: data-auto-animate -->` on both; matching headings/text/images move |
| Background image | `<!-- .slide: data-background-image="./media/pic.png" data-background-opacity="0.15" -->` |
| Table | a normal markdown table (`\| a \| b \|` rows, `\| --- \| --- \|` under the header) |

`example.md` has a slide for each of these (except plain images and slide attributes). The `align-*`
classes and the equal-width columns are ours (`template.css`); the rest is reveal.js, documented at
revealjs.com (layout, auto-animate, backgrounds).

Gotchas:
- A line containing only `---` inside a code block still splits the slide.
- With the `concave` transition, the slides next to the current one (left/right and up/down) are kept flat
  while idle and only rotate during the transition (the template's script does it): Firefox cuts off part of the current
  slide whenever a neighbor sits rotated in 3D.
- For bullets, use `bullets: step`/`data-step` rather than a `.element` comment per item: the comment attaches
  to the closest element before it, so on an item with a link or `code` only that link/code steps.
- `paragraphs: step` steps every paragraph, including a short "kicker" line above a heading, which then
  appears after the heading. On slides like that, leave the talk at `all` and use `data-step` per slide.
- The talk-wide switches only touch slides written in markdown (not the Olá/Obrigado slides), and never
  speaker notes. A paragraph inside a list item steps with its item.
- Old 2021 slides used `class="title-slide"`; it only changes `h1` (left-aligned, tight line height).

## Option 2: write HTML by hand

```sh
cp -r templates/hoshi-slides 2026/my-talk
rm 2026/my-talk/README.md 2026/my-talk/example.md
```

Replace `{{title}}`, `{{description}}`, `{{about}}`, `{{age}}` and `{{theme}}` (`light` or `dark`) in `index.html`, then write `<section>`s between
`<!-- slides:start -->` and `<!-- slides:end -->`. The sample slides there show the hoshi conventions:
headings wrapped in `<mark>`, `class="fragment"`, `<aside class="notes">`, and
`<pre><code class="language-js" data-trim data-noescape>`.

## Changing the template

`index.html` here is the template for both options. Keep the `{{key}}` placeholders and the two
`slides:` marker comments; the build fills the first from front matter (a missing key is an error)
and replaces everything between the markers with the markdown. Run `npm test` after touching
`scripts/build-talk.mjs`.

New talks are not added to the root `index.html`; add the link there yourself.
