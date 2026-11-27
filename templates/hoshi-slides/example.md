---
title: Talk title
description: What the talk is about. Chega mais!
about: frontend dev at Some Company
theme: light
bullets: all
paragraphs: all
---

## section title

first point

point revealed on next step <!-- .element: class="fragment" -->

Note: speaker notes, press S to see them

---

## step through content

shown right away

then this, on the next click <!-- .element: class="fragment" -->

then this, fading up <!-- .element: class="fragment fade-up" -->

---

<!-- .slide: data-step -->

## step through paragraphs and bullets

every paragraph and bullet on this slide waits for a click

- items with [links](https://example.com) or `code` work too
- `bullets: step` in the front matter does it for bullets on every slide

and `paragraphs: step` does it for paragraphs

---

## step through code

```js [1|2-4|3]
const items = ['a', 'b'];
for (const item of items) {
  console.log(item);
}
```

each click moves the highlight: line 1, then 2-4, then 3

---

## Referências

[reference](https://example.com)
