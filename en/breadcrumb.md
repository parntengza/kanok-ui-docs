# Breadcrumb

A breadcrumb shows where the current page sits in the site's hierarchy, and links back up to each level above it. Put it at the top of the page, above the title.


HTML:

```html
<ui-breadcrumb no-trailing-slash>
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb noTrailingSlash>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb noTrailingSlash>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/breadcrumb
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-breadcrumb
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/breadcrumb.json
#    to its target:
#    components/ui/primitives/breadcrumb/breadcrumb-item.ts
#    components/ui/primitives/breadcrumb/breadcrumb-skeleton.ts
#    components/ui/primitives/breadcrumb/breadcrumb.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-overflow, menu, overflow-menu, shared-element, shared-localize, shared-navigate, shared-skeleton, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-breadcrumb.json
#    to its target:
#    components/ui/react-tw/breadcrumb.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-overflow, tw-dom, tw-i18n, tw-menu, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

`<ui-breadcrumb>` renders a `<nav>` landmark with an ordered list; each `<ui-breadcrumb-item href>` is one link in it.


HTML:

```html
<script type="module">import '@purpurabog/ui/breadcrumb';</script>

<ui-breadcrumb>
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/contracts">Contracts</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
import { UiBreadcrumb, UiBreadcrumbItem } from '@purpurabog/ui/react';

<UiBreadcrumb>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/react-tw/breadcrumb';

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
</Breadcrumb>
```

## Current page and the trailing slash

Every item is followed by a "/", the last one too, as in Carbon: a trail of links only, with the page title under it, reads as "you are inside Contracts". When the trail ends with the page the user is on, mark that item `current` (plain text with `aria-current="page"`) and drop the last slash with `no-trailing-slash` (`noTrailingSlash`).


HTML:

```html
<ui-breadcrumb>
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Contracts</ui-breadcrumb-item>
</ui-breadcrumb>
<ui-breadcrumb no-trailing-slash>
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
</UiBreadcrumb>
<UiBreadcrumb noTrailingSlash>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb noTrailingSlash>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## A level without a page

An item without `href` renders as plain text, for a level of the hierarchy that has no page of its own (a group in the menu, say). Unlike `current`, it doesn't claim to be the page the user is on.


HTML:

```html
<ui-breadcrumb no-trailing-slash>
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item>Legal</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb noTrailingSlash>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem>Legal</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb noTrailingSlash>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Legal</BreadcrumbItem>
  <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## Small

`size="sm"` uses the 12px label type and a 4px gap around the slashes. Use it in dense headers and side panels.


HTML:

```html
<ui-breadcrumb size="sm" no-trailing-slash>
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb size="sm" noTrailingSlash>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb size="sm" noTrailingSlash>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## Long trails wrap

A trail that doesn't fit wraps onto the next line; each item stays on one line. To keep it on one line, set the CSS custom property `--ui-breadcrumb-wrap: nowrap`, or collapse it with `overflow` (next section).


HTML:

```html
<ui-breadcrumb no-trailing-slash style="max-width: 320px">
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-legal">Legal department</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Procurement contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-vendor">Siam Office Supplies</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb noTrailingSlash style={{ maxWidth: 320 }}>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/legal">Legal department</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/legal/procurement">Procurement contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/vendors/siam-office">Siam Office Supplies</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb noTrailingSlash className="max-w-[320px]">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/legal">Legal department</BreadcrumbItem>
  <BreadcrumbItem href="/legal/procurement">Procurement contracts</BreadcrumbItem>
  <BreadcrumbItem href="/vendors/siam-office">Siam Office Supplies</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## Collapse a long trail

`overflow` keeps the trail on one line: the crumbs that don't fit go, from the end, into a "…" menu just before the last crumb, which always stays. The first crumbs stay as long as they fit. Choosing a crumb in the menu follows its link. `overflow-label` (`overflowLabel`) names the menu button (default "More breadcrumbs"). Make the box narrower or wider to see the menu change.


HTML:

```html
<ui-breadcrumb overflow overflow-label="More levels" no-trailing-slash style="max-width: 420px">
  <ui-breadcrumb-item href="#breadcrumb-home">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-legal">Legal department</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-contracts">Procurement contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-vendor">Siam Office Supplies</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb overflow overflowLabel="More levels" noTrailingSlash style={{ maxWidth: 420 }}>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/legal">Legal department</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/legal/procurement">Procurement contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/vendors/siam-office">Siam Office Supplies</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb overflow overflowLabel="More levels" noTrailingSlash className="max-w-[420px]">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/legal">Legal department</BreadcrumbItem>
  <BreadcrumbItem href="/legal/procurement">Procurement contracts</BreadcrumbItem>
  <BreadcrumbItem href="/vendors/siam-office">Siam Office Supplies</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## Route in a single-page app

A plain click on an item's link first fires a cancelable `ui-navigate` with `detail.href`, bubbling out of the breadcrumb. Call `preventDefault()` and hand the path to your router; Ctrl-, ⌘- and middle-clicks stay normal links. In React put `onUiNavigate` once on `UiBreadcrumb` (or on a single `UiBreadcrumbItem`). In React + Tailwind the items are plain `<a>`s: route in their `onClick`.


HTML:

```html
<ui-breadcrumb id="breadcrumb-route" no-trailing-slash>
  <ui-breadcrumb-item href="/">Home</ui-breadcrumb-item>
  <ui-breadcrumb-item href="/contracts">Contracts</ui-breadcrumb-item>
  <ui-breadcrumb-item current>CT-2026-0142</ui-breadcrumb-item>
</ui-breadcrumb>
<p>Router got: <output id="breadcrumb-route-out"></output></p>

<script type="module">
  const trail = document.getElementById('breadcrumb-route');
  const out = document.getElementById('breadcrumb-route-out');
  trail.addEventListener('ui-navigate', (event) => {
    event.preventDefault();
    out.value = event.detail.href;
  });
</script>
```

React:

```tsx
import type { NavigateDetail } from '@purpurabog/ui/react';

const navigate = useNavigate(); // your router
const route = (e: CustomEvent<NavigateDetail>) => {
  e.preventDefault();
  navigate(e.detail.href);
};

<UiBreadcrumb noTrailingSlash onUiNavigate={route}>
  <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
  <UiBreadcrumbItem current>CT-2026-0142</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
import type { MouseEvent } from 'react';

const navigate = useNavigate(); // your router
const route = (e: MouseEvent<HTMLAnchorElement>) => {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  navigate(e.currentTarget.getAttribute('href') ?? '/');
};

<Breadcrumb noTrailingSlash>
  <BreadcrumbItem href="/" onClick={route}>Home</BreadcrumbItem>
  <BreadcrumbItem href="/contracts" onClick={route}>Contracts</BreadcrumbItem>
  <BreadcrumbItem current>CT-2026-0142</BreadcrumbItem>
</Breadcrumb>
```

## Name the landmark

The `<nav>` is named "Breadcrumb" (translated with the page's language). When a page has two trails, or the default name doesn't fit, set `label`.


HTML:

```html
<ui-breadcrumb label="Contract location" no-trailing-slash>
  <ui-breadcrumb-item href="#breadcrumb-archive">Archive</ui-breadcrumb-item>
  <ui-breadcrumb-item href="#breadcrumb-year">2026</ui-breadcrumb-item>
  <ui-breadcrumb-item current>Box 14</ui-breadcrumb-item>
</ui-breadcrumb>
```

React:

```tsx
<UiBreadcrumb label="Contract location" noTrailingSlash>
  <UiBreadcrumbItem href="/archive">Archive</UiBreadcrumbItem>
  <UiBreadcrumbItem href="/archive/2026">2026</UiBreadcrumbItem>
  <UiBreadcrumbItem current>Box 14</UiBreadcrumbItem>
</UiBreadcrumb>
```

React + Tailwind:

```tsx
<Breadcrumb label="Contract location" noTrailingSlash>
  <BreadcrumbItem href="/archive">Archive</BreadcrumbItem>
  <BreadcrumbItem href="/archive/2026">2026</BreadcrumbItem>
  <BreadcrumbItem current>Box 14</BreadcrumbItem>
</Breadcrumb>
```

## Skeleton

While the trail loads, `ui-breadcrumb-skeleton` shows `items` bars of 100 × 16px (3 by default), each followed by a slash. It takes `size` and `no-trailing-slash` like the breadcrumb, and is hidden from screen readers.


HTML:

```html
<ui-breadcrumb-skeleton></ui-breadcrumb-skeleton>
<ui-breadcrumb-skeleton items="4" size="sm" no-trailing-slash></ui-breadcrumb-skeleton>
```

React:

```tsx
import { UiBreadcrumbSkeleton } from '@purpurabog/ui/react';

<UiBreadcrumbSkeleton />
<UiBreadcrumbSkeleton items={4} size="sm" noTrailingSlash />
```

React + Tailwind:

```tsx
import { BreadcrumbSkeleton } from '@/components/ui/react-tw/breadcrumb';

<BreadcrumbSkeleton />
<BreadcrumbSkeleton items={4} size="sm" noTrailingSlash />
```

On the web component, import it from `@purpurabog/ui/breadcrumb-skeleton`.

## Accessibility

- The trail is a `<nav>` landmark named "Breadcrumb" (or `label`) holding an ordered list, so screen readers announce how many levels it has.
- The current page is text with `aria-current="page"`, not a link to itself.
- The slashes are drawn by CSS and aren't read out.
- Each link is a Tab stop. In a collapsed trail the "…" button is one more; its menu lists the hidden crumbs.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-breadcrumb>` · React `UiBreadcrumb`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Accessible name of the navigation landmark. |
| `no-trailing-slash` | `noTrailingSlash` | `boolean` | `false` |  |
| `size` | `size` | `BreadcrumbSize` | `'md'` |  |
| `overflow` | `overflow` | `boolean` | `false` | On one line, the crumbs that don't fit go into a "…" menu before the last one. |
| `overflow-label` | `overflowLabel` | `string` | `''` | The overflow menu's name (default: the translation's "More breadcrumbs"). |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the first crumb's link. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-breadcrumb-item>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The `<nav>` |
| `list` | The `<ol>` |
| `overflow` | The "…" item holding the overflow menu (`overflow` only) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-breadcrumb-wrap` |  | `nowrap` keeps the trail on one line (the page header's bar does) |

### `<ui-breadcrumb-item>` · React `UiBreadcrumbItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `''` |  |
| `current` | `current` | `boolean` | `false` | The page the user is on: plain text with `aria-current="page"`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | The item text |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The link or the current-page text |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-breadcrumb-trailing-slash` |  | `display` of the slash after the last item (default inline; Kanok: none) |

### `<ui-breadcrumb-skeleton>` · React `UiBreadcrumbSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `items` | `items` | `number` | `3` |  |
| `no-trailing-slash` | `noTrailingSlash` | `boolean` | `false` |  |
| `size` | `size` | `'sm' \| 'md'` | `'md'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `item` | Each bar |


