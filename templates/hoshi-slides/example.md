---
title: Talk title
description: What the talk is about. Chega mais!
about: frontend dev at Some Company
theme: light
bullets: all
paragraphs: all
---

## speaker notes

press `S` to open the speaker view: everything after `Note:` shows there, not on the slide

Note:
These are the notes for this slide. They can span several lines and use markdown:

- **remember** to mention the demo
- the timer and the next slide are in the speaker view too

Everything up to the next `---` is part of the notes.

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

<!-- .slide: class="align-center" -->

## everything centered

- `class="align-center"` on the slide
- centers list items too
- by default a list is a left-aligned block

---

<!-- .slide: class="align-left" -->

## left-aligned

`class="align-left"` puts the heading, text and lists on the left

- like this list

---

## aligning one element

this paragraph goes left

<!-- .element: class="align-left" -->

this one goes right, [links](https://example.com) and all

<!-- .element: class="align-right" -->

- and this whole list
- sits on the left

<!-- .element: class="align-left" -->

---

## make it big <!-- .element: class="r-fit-text" -->

`r-fit-text` grows the text to fill the slide's width

---

## images

<img class="r-stretch" src="../../static/shared/hoshi-slides/eu.jpg" alt="Luciano">

`r-stretch` fills the rest of the slide (needs an `<img>` tag on its own line)

---

## two columns

<div class="r-hstack">
<div>

- text on the left
- code on the right
- blank lines around the markdown inside each `<div>`

</div>
<div>

```python
def hello(name):
    return f"olá, {name}!"
```

</div>
</div>

---

<!-- .slide: data-auto-animate -->

## auto-animate

---

<!-- .slide: data-auto-animate -->

## auto-animate

on two slides in a row marked `data-auto-animate`, matching elements move between them

---

<!-- .slide: data-background-image="../../static/shared/hoshi-slides/eu.jpg" data-background-opacity="0.15" -->

## background image

`data-background-image`, faded with `data-background-opacity`

---

## tables

| you want | front matter |
| --- | --- |
| dark mode | `theme: dark` |
| bullets one per click | `bullets: step` |
| paragraphs one per click | `paragraphs: step` |

---

## Referências

[reference](https://example.com)
