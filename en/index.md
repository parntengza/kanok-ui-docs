# @purpurabog/ui

Components that follow IBM's Carbon Design System, made for forms in Thai and English: fields, lists, dates (Buddhist era), overlays, data tables and the UI shell. This site is built with them.

The same components come in three forms. Pick the one that fits your app:

| You build with | Use | You get |
|---|---|---|
| Any framework, or plain HTML | Lit web components (`<ui-date-picker>`) | Carbon's look and behaviour, styled with tokens and `::part()` |
| React + Tailwind | Components copied into your app with shadcn (`npx shadcn add`) | Carbon's look as Tailwind classes you can edit line by line |
| React, your own design | [Unstyled parts](https://parntengza.github.io/kanok-ui-docs/en/headless/) (`@purpurabog/ui/headless`) | Carbon's keyboard, focus and ARIA with no classes at all |

All three share one core, so the behaviour is the same everywhere: every component is tested against Carbon in Chrome and WebKit, with axe and with the keyboard.

## Try it

```html
<ui-date-picker label="Contract start" helper-text="dd/mm/yyyy"></ui-date-picker>
```

Change the theme or the language in the settings at the top right: the components follow the page's `data-theme` and `lang`.

## What next

- [Install the package](https://parntengza.github.io/kanok-ui-docs/en/installation/) or copy components with shadcn.
- Browse every element, its attributes, slots, parts and events in the Storybook.
