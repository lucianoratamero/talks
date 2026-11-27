---
title: frontends modernos com django-vite
description: como ter um frontend moderno com vite sem separar seu projeto django em dois. Chega mais!
theme: dark
---
<!-- .slide: data-step data-background-image="../../static/shared/hoshi-slides/eu.jpg" data-background-opacity="0.15" -->
## quem?

37 anos, friburguense

amo música, poesia, fotografia e videogames

jornalista de formação

dev web, com foco em frontend desde 2010

trabalho na [Lincoln Loop](https://lincolnloop.com/), empresa de consultoria dos EUA, desde 2022

atualmente sou parte do time que trabalha no site [firefox.com](https://firefox.com)

---
<!-- .slide: data-step -->
## avisos

tudo que eu vou falar é sobre prós e contras

gosto de dar um apanhado geral pra vocês tomarem suas próprias decisões

aberto para perguntas a qualquer momento

palavras de baixo calão

---
<!-- .slide: data-auto-animate -->

antes de tudo...

## eu <3 vite

---
<!-- .slide: data-auto-animate -->

...e também...

## eu <3 django

---
<!-- .slide: data-auto-animate data-theme="dark" data-background-image="../../static/shared/hoshi-slides/pybr.jpg" data-background-opacity="0.15" -->

...mas além de tudo

## eu <3 python

---

## o que é o django?

- framework web com baterias inclusas
- ferramentas completas desde o banco de dados até formulários, templates, e interface administrativa (django admin)
- arquitetura flexível e modular

---

no entanto

## grande parte dos projetos django são APIs REST

django rest framework e django ninja são ferramentas sensacionais para APIs

---

### isso diz muito sobre django

ele é tão bom que as pessoas preferem continuar usando, mesmo ignorando duas partes gigantescas do framework

---

se o django tem ferramentas maravilhosas pro frontend

## qual o problema com as ferramentas de front do django?

---

## MPA vs SPA

e todas as coisas no meio

---

### MPAs

- *Multi-Page Applications*
- seguem as diretrizes clássicas da web
- toda vez que um link é clicado, o navegador refaz a tela inteira, o que pode dar a sensação de lentidão ao usuário
- em geral implementadas em um framework tradicional, como o django

---

### SPAs

- *Single-Page Applications*
- focam na experiência do usuário e na rápida prototipagem
- quando um link é clicado, o JS captura o click, muda a rota, pega os dados que precisa e mostra o que deve, sem reiniciar a página
- em geral implementadas com vite por baixo dos panos

---

## hora do código

---

então, se quisermos os dois

## vamos separar o front e o back em dois projetos

---

mas se a gente quiser o front separado

## agora a gente tem dois problemas

---

### dois projetos = dois deploys = manutenção dupla

e, nos dias de hoje, mais vai e vem na hora de usar IA

---
<!-- .slide: data-step -->

### equipes separadas

- geram burocracia de gestão
- geram feudos de conhecimento
- geram ruído de comunicação
- geram rixas entre os times

---

mas e se eu te dissesse que

## dá pra ter todos os benefícios dos projetos separados sem nenhum dos problemas?

---

## `django-vite`

- é uma biblioteca (uma app django) que traz ferramentas para integrar um projeto vite ao django
- interfere indiretamente na renderização da aplicação
- te permite usar o que você precisa de ferramentas de front
- se acopla às ferramentas de controle de arquivos estáticos do django

---

## hora do código

---

## conclusão

- inclui devs de um time no código do outro
- por manter a arquitetura monolítica, facilita muito os deploys e as resoluções de problemas
- é mais uma ferramenta na hora de tomar decisões

---

## referências

- [django](https://docs.djangoproject.com/)
- [django-vite](https://github.com/MrBin99/django-vite)
- [vite](https://vite.dev/)
- [svelte](https://svelte.dev/)
- [código de exemplo](https://github.com/lucianoratamero/django-vite-sample)
