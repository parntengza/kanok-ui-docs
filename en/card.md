# Card

A card is a box built from parts: media, a header with a title and its actions, a body and a footer. Use it for a set of things the user browses or picks from: projects, reports, documents. It is Carbon's `Card` (a preview in Carbon): square, no border, no shadow, on the next layer colour.


HTML:

```html
<ui-card style="max-width: 360px">
  <ui-card-media ratio="16x9">
    <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
  </ui-card-media>
  <ui-card-header>
    <ui-card-title label="Contract" description="Updated 3 October 2026">Office lease, Silom branch</ui-card-title>
  </ui-card-header>
  <ui-card-body>Three-year lease from 1 January 2027. Waiting for the landlord's signature.</ui-card-body>
  <ui-card-footer>
    <ui-card-action><ui-button kind="ghost">Open contract</ui-button></ui-card-action>
  </ui-card-footer>
</ui-card>
```

React:

```tsx
<UiCard style={{ maxWidth: 360 }}>
  <UiCardMedia ratio="16x9"><img alt="" src={leaseImage} /></UiCardMedia>
  <UiCardHeader>
    <UiCardTitle label="Contract" description="Updated 3 October 2026">Office lease, Silom branch</UiCardTitle>
  </UiCardHeader>
  <UiCardBody>Three-year lease from 1 January 2027. Waiting for the landlord's signature.</UiCardBody>
  <UiCardFooter>
    <UiCardAction><UiButton kind="ghost">Open contract</UiButton></UiCardAction>
  </UiCardFooter>
</UiCard>
```

React + Tailwind:

```tsx
<Card className="max-w-[360px]">
  <CardMedia ratio="16x9"><img alt="" src={leaseImage} /></CardMedia>
  <CardHeader>
    <CardTitle label="Contract" description="Updated 3 October 2026">Office lease, Silom branch</CardTitle>
  </CardHeader>
  <CardBody>Three-year lease from 1 January 2027. Waiting for the landlord's signature.</CardBody>
  <CardFooter>
    <CardAction><Button kind="ghost">Open contract</Button></CardAction>
  </CardFooter>
</Card>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/card
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-card
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/card.json
#    to its target:
#    components/ui/primitives/card/card-action.ts
#    components/ui/primitives/card/card-actions.ts
#    components/ui/primitives/card/card-body.ts
#    components/ui/primitives/card/card-footer.ts
#    components/ui/primitives/card/card-header-media.ts
#    components/ui/primitives/card/card-header.ts
#    components/ui/primitives/card/card-media.ts
#    components/ui/primitives/card/card-title-media.ts
#    components/ui/primitives/card/card-title.ts
#    components/ui/primitives/card/card.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-overflow, menu, overflow-menu, shared-element, shared-field, shared-localize, shared-navigate, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-card.json
#    to its target:
#    components/ui/react-tw/card.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-overflow, tw-i18n, tw-icon-button, tw-menu, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

All the parts load from one module. In React, import a wrapper for each element (`UiCard`, `UiCardHeader`, `UiCardTitle` …) from `@purpurabog/ui/react`.


HTML:

```html
<script type="module">import '@purpurabog/ui/card';</script>

<ui-card>
  <ui-card-header><ui-card-title>Office lease</ui-card-title></ui-card-header>
  <ui-card-body>Waiting for the landlord's signature.</ui-card-body>
</ui-card>
```

React:

```tsx
import { UiCard, UiCardHeader, UiCardTitle, UiCardBody } from '@purpurabog/ui/react';

<UiCard>
  <UiCardHeader><UiCardTitle>Office lease</UiCardTitle></UiCardHeader>
  <UiCardBody>Waiting for the landlord's signature.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
import { Card, CardHeader, CardTitle, CardBody } from '@/components/ui/react-tw/card';

<Card>
  <CardHeader><CardTitle>Office lease</CardTitle></CardHeader>
  <CardBody>Waiting for the landlord's signature.</CardBody>
</Card>
```

## Card, tile or product card?

| Component | Use it when |
|---|---|
| [Tile](https://parntengza.github.io/kanok-ui-docs/en/tile/) | A plain box of content, or one link. No header or footer of its own. |
| Card | Content with a title, media and actions, built from parts. The choice for new work. |
| [Product card](https://parntengza.github.io/kanok-ui-docs/en/product-card/) | A screen must match IBM product UIs that use Carbon for IBM Products' `ProductiveCard` or `ExpressiveCard`. |

## The parts

Every part is optional; put them in this order.

| Part | Holds |
|---|---|
| `ui-card-media` | An image or video across the card, at `ratio` |
| `ui-card-header` | The header grid: `ui-card-header-media`, `ui-card-title-media`, `ui-card-title`, `ui-card-actions` |
| `ui-card-header-media` | A pictogram across the top of the header, at most 64px tall |
| `ui-card-title-media` | A logo before the title, 48–64px |
| `ui-card-title` | A label above, the title, a description below |
| `ui-card-actions` | Small buttons in the header's top-end corner |
| `ui-card-body` | The content, with 16px padding (none with `is-flush`) |
| `ui-card-footer` | Text, or a row of `ui-card-action`s |
| `ui-card-action` | One button in the footer or in `ui-card-actions` |


HTML:

```html
<ui-card style="max-width: 360px">
  <ui-card-header>
    <ui-card-header-media>
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden="true"><path d="M8 3h11l5 5v21H8zM19 3v5h5M12 14h8M12 18h8M12 22h5" /></svg>
    </ui-card-header-media>
    <ui-card-title label="Template" description="Used 128 times">Non-disclosure agreement</ui-card-title>
  </ui-card-header>
  <ui-card-body>Two-way NDA in Thai and English, approved by the legal department.</ui-card-body>
  <ui-card-footer>Last reviewed 1 September 2026</ui-card-footer>
</ui-card>
```

React:

```tsx
<UiCard style={{ maxWidth: 360 }}>
  <UiCardHeader>
    <UiCardHeaderMedia>{documentPictogram}</UiCardHeaderMedia>
    <UiCardTitle label="Template" description="Used 128 times">Non-disclosure agreement</UiCardTitle>
  </UiCardHeader>
  <UiCardBody>Two-way NDA in Thai and English, approved by the legal department.</UiCardBody>
  <UiCardFooter>Last reviewed 1 September 2026</UiCardFooter>
</UiCard>
```

React + Tailwind:

```tsx
<Card className="max-w-[360px]">
  <CardHeader>
    <CardHeaderMedia>{documentPictogram}</CardHeaderMedia>
    <CardTitle label="Template" description="Used 128 times">Non-disclosure agreement</CardTitle>
  </CardHeader>
  <CardBody>Two-way NDA in Thai and English, approved by the legal department.</CardBody>
  <CardFooter>Last reviewed 1 September 2026</CardFooter>
</Card>
```

## Media

`ui-card-media` fills the card's width at `ratio`: `16x9`, `9x16`, `2x1`, `1x2`, `4x3`, `3x4`, `3x2`, `2x3` or `1x1`. The image covers the box and is cropped to fit. Without `ratio` it keeps the image's own shape.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; align-items: start">
  <ui-card>
    <ui-card-media ratio="16x9">
      <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
    </ui-card-media>
    <ui-card-header><ui-card-title>16x9</ui-card-title></ui-card-header>
  </ui-card>
  <ui-card>
    <ui-card-media ratio="2x1">
      <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
    </ui-card-media>
    <ui-card-header><ui-card-title>2x1</ui-card-title></ui-card-header>
  </ui-card>
  <ui-card>
    <ui-card-media ratio="1x1">
      <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
    </ui-card-media>
    <ui-card-header><ui-card-title>1x1</ui-card-title></ui-card-header>
  </ui-card>
</div>
```

React:

```tsx
<UiCard>
  <UiCardMedia ratio="16x9"><img alt="" src={leaseImage} /></UiCardMedia>
  <UiCardHeader><UiCardTitle>16x9</UiCardTitle></UiCardHeader>
</UiCard>
<UiCard>
  <UiCardMedia ratio="2x1"><img alt="" src={leaseImage} /></UiCardMedia>
  <UiCardHeader><UiCardTitle>2x1</UiCardTitle></UiCardHeader>
</UiCard>
<UiCard>
  <UiCardMedia ratio="1x1"><img alt="" src={leaseImage} /></UiCardMedia>
  <UiCardHeader><UiCardTitle>1x1</UiCardTitle></UiCardHeader>
</UiCard>
```

React + Tailwind:

```tsx
<Card>
  <CardMedia ratio="16x9"><img alt="" src={leaseImage} /></CardMedia>
  <CardHeader><CardTitle>16x9</CardTitle></CardHeader>
</Card>
<Card>
  <CardMedia ratio="2x1"><img alt="" src={leaseImage} /></CardMedia>
  <CardHeader><CardTitle>2x1</CardTitle></CardHeader>
</Card>
<Card>
  <CardMedia ratio="1x1"><img alt="" src={leaseImage} /></CardMedia>
  <CardHeader><CardTitle>1x1</CardTitle></CardHeader>
</Card>
```

Give the image `alt=""` when it only decorates, and a real `alt` when it carries information the text doesn't.

## Logo beside the title

`ui-card-title-media` puts a logo or an avatar before the title; the title moves over to make room.


HTML:

```html
<ui-card style="max-width: 360px">
  <ui-card-header>
    <ui-card-title-media>
      <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" style="fill: var(--ui-primary)" /><text x="24" y="30" fill="#ffffff" font-family="sans-serif" font-size="16" text-anchor="middle">SL</text></svg>
    </ui-card-title-media>
    <ui-card-title label="Supplier" description="Bangkok · since 2019">Siam Logistics Co., Ltd.</ui-card-title>
  </ui-card-header>
  <ui-card-body>Freight and warehousing. 14 active contracts.</ui-card-body>
</ui-card>
```

React:

```tsx
<UiCard style={{ maxWidth: 360 }}>
  <UiCardHeader>
    <UiCardTitleMedia>{supplierLogo}</UiCardTitleMedia>
    <UiCardTitle label="Supplier" description="Bangkok · since 2019">Siam Logistics Co., Ltd.</UiCardTitle>
  </UiCardHeader>
  <UiCardBody>Freight and warehousing. 14 active contracts.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card className="max-w-[360px]">
  <CardHeader>
    <CardTitleMedia>{supplierLogo}</CardTitleMedia>
    <CardTitle label="Supplier" description="Bangkok · since 2019">Siam Logistics Co., Ltd.</CardTitle>
  </CardHeader>
  <CardBody>Freight and warehousing. 14 active contracts.</CardBody>
</Card>
```

## Title, label and description

`ui-card-title` holds the title text. `label` goes above it and `description` below, both in small muted text. For markup in them, use the `label` and `description` slots instead. Icons go before or after the title in the `title-start` and `title-end` slots (`titleStart` and `titleEnd` in React + Tailwind).


HTML:

```html
<ui-card style="max-width: 360px">
  <ui-card-header>
    <ui-card-title>
      Supply agreement C-2026-014
      <svg slot="title-end" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-label="Signed" role="img"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7 11 4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11Z" /></svg>
      <span slot="label">Chiang Mai plant</span>
      <span slot="description">Signed by <b>both parties</b> on 2 October 2026</span>
    </ui-card-title>
  </ui-card-header>
  <ui-card-body>Delivery of packaging materials, monthly, until December 2027.</ui-card-body>
</ui-card>
```

React:

```tsx
<UiCard style={{ maxWidth: 360 }}>
  <UiCardHeader>
    <UiCardTitle>
      Supply agreement C-2026-014
      <svg slot="title-end" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-label="Signed" role="img">…</svg>
      <span slot="label">Chiang Mai plant</span>
      <span slot="description">Signed by <b>both parties</b> on 2 October 2026</span>
    </UiCardTitle>
  </UiCardHeader>
  <UiCardBody>Delivery of packaging materials, monthly, until December 2027.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card className="max-w-[360px]">
  <CardHeader>
    <CardTitle
      label="Chiang Mai plant"
      description={<>Signed by <b>both parties</b> on 2 October 2026</>}
      titleEnd={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-label="Signed" role="img">…</svg>}
    >
      Supply agreement C-2026-014
    </CardTitle>
  </CardHeader>
  <CardBody>Delivery of packaging materials, monthly, until December 2027.</CardBody>
</Card>
```

## Cut long text

Long titles wrap. `title-truncate` cuts the title instead: on its own to one line with an ellipsis, with a number to that many lines. `label-truncate` and `description-truncate` work the same. `max-width` limits how wide a cut title gets.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; align-items: start">
  <ui-card>
    <ui-card-header>
      <ui-card-title title-truncate description="Title and description on one line each" description-truncate>Memorandum of understanding on joint procurement between three provincial offices</ui-card-title>
    </ui-card-header>
  </ui-card>
  <ui-card>
    <ui-card-header>
      <ui-card-title title-truncate="2" description="The description is cut to one line when it is longer than the card is wide" description-truncate="1">Memorandum of understanding on joint procurement between three provincial offices</ui-card-title>
    </ui-card-header>
  </ui-card>
</div>
```

React:

```tsx
<UiCard>
  <UiCardHeader>
    <UiCardTitle titleTruncate="" description="Title and description on one line each" descriptionTruncate="">Memorandum of understanding on joint procurement between three provincial offices</UiCardTitle>
  </UiCardHeader>
</UiCard>
<UiCard>
  <UiCardHeader>
    <UiCardTitle titleTruncate="2" description="The description is cut to one line when it is longer than the card is wide" descriptionTruncate="1">Memorandum of understanding on joint procurement between three provincial offices</UiCardTitle>
  </UiCardHeader>
</UiCard>
```

React + Tailwind:

```tsx
<Card>
  <CardHeader>
    <CardTitle titleTruncate description="Title and description on one line each" descriptionTruncate>Memorandum of understanding on joint procurement between three provincial offices</CardTitle>
  </CardHeader>
</Card>
<Card>
  <CardHeader>
    <CardTitle titleTruncate={2} description="The description is cut to one line when it is longer than the card is wide" descriptionTruncate={1}>Memorandum of understanding on joint procurement between three provincial offices</CardTitle>
  </CardHeader>
</Card>
```

On the element these are attributes whose presence means one line (in React pass `""`, or the number of lines as a string). React + Tailwind takes `true` or a number.

## Header actions

`ui-card-actions` puts small buttons in the header's top-end corner, in at most half its width. Put each `ui-icon-button kind="ghost" size="sm"` in a `ui-card-action`. Buttons that don't fit move into an overflow menu; choosing an item clicks that button. The narrow card shows it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: start">
  <ui-card id="card-actions" style="width: 360px">
    <ui-card-header>
      <ui-card-title label="Project" description="Due in 3 days">Branch renovation</ui-card-title>
      <ui-card-actions>
        <ui-card-action><ui-icon-button kind="ghost" size="sm" label="Edit"><svg viewBox="0 0 16 16"><path d="M1 13h14v1H1zM12.7 4.5 10.5 2.3a1 1 0 0 0-1.4 0L3 8.4V11h2.6l6.1-6.1a1 1 0 0 0 0-1.4zM5.2 10H4V8.8l4-4 1.2 1.2zm4.7-4.7L8.7 4.1l1.1-1.1L11 4.2z" /></svg></ui-icon-button></ui-card-action>
        <ui-card-action><ui-icon-button kind="ghost" size="sm" label="Delete"><svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9zM2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3zm2 11V4h8v10zM6 1h4v1H6z" /></svg></ui-icon-button></ui-card-action>
      </ui-card-actions>
    </ui-card-header>
    <ui-card-body>Silom branch, second floor. Contractor starts on 1 November.</ui-card-body>
  </ui-card>
  <ui-card id="card-actions-narrow" style="width: 200px">
    <ui-card-header>
      <ui-card-title>Narrow</ui-card-title>
      <ui-card-actions>
        <ui-card-action><ui-icon-button kind="ghost" size="sm" label="Edit"><svg viewBox="0 0 16 16"><path d="M1 13h14v1H1zM12.7 4.5 10.5 2.3a1 1 0 0 0-1.4 0L3 8.4V11h2.6l6.1-6.1a1 1 0 0 0 0-1.4zM5.2 10H4V8.8l4-4 1.2 1.2zm4.7-4.7L8.7 4.1l1.1-1.1L11 4.2z" /></svg></ui-icon-button></ui-card-action>
        <ui-card-action label="Duplicate"><ui-icon-button kind="ghost" size="sm" label="Duplicate"><svg viewBox="0 0 16 16"><path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" /></svg></ui-icon-button></ui-card-action>
        <ui-card-action><ui-icon-button kind="ghost" size="sm" label="Delete"><svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9zM2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3zm2 11V4h8v10zM6 1h4v1H6z" /></svg></ui-icon-button></ui-card-action>
      </ui-card-actions>
    </ui-card-header>
    <ui-card-body>Two buttons go to the menu.</ui-card-body>
  </ui-card>
</div>
<p>Pressed: <output id="card-actions-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('card-actions-out');
  for (const button of document.querySelectorAll('#card-actions ui-icon-button, #card-actions-narrow ui-icon-button')) {
    button.addEventListener('click', () => (out.value = button.getAttribute('label')));
  }
</script>
```

React:

```tsx
<UiCard style={{ width: 360 }}>
  <UiCardHeader>
    <UiCardTitle label="Project" description="Due in 3 days">Branch renovation</UiCardTitle>
    <UiCardActions>
      <UiCardAction><UiIconButton kind="ghost" size="sm" label="Edit" onClick={edit}>{editIcon}</UiIconButton></UiCardAction>
      <UiCardAction><UiIconButton kind="ghost" size="sm" label="Delete" onClick={remove}>{trashIcon}</UiIconButton></UiCardAction>
    </UiCardActions>
  </UiCardHeader>
  <UiCardBody>Silom branch, second floor. Contractor starts on 1 November.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card className="w-[360px]">
  <CardHeader>
    <CardTitle label="Project" description="Due in 3 days">Branch renovation</CardTitle>
    <CardActions>
      <CardAction><IconButton kind="ghost" size="sm" label="Edit" onClick={edit}>{editIcon}</IconButton></CardAction>
      <CardAction><IconButton kind="ghost" size="sm" label="Delete" onClick={remove}>{trashIcon}</IconButton></CardAction>
    </CardActions>
  </CardHeader>
  <CardBody>Silom branch, second floor. Contractor starts on 1 November.</CardBody>
</Card>
```

An item in the overflow menu is named by the action's `label`, else by its button's `label` or text. `overflow-menu-label` names the menu button ("More actions" by default, translated).

## Footer actions

A `ui-card-footer` with `ui-card-action`s becomes a row of buttons across the card under a thin line: a `ui-button` stretches to share the row, a `ui-icon-button` keeps its size at the end. A footer with plain content just pads it.


HTML:

```html
<ui-card id="card-footer" style="max-width: 360px">
  <ui-card-header>
    <ui-card-title label="Report" description="September 2026">Monthly contract summary</ui-card-title>
  </ui-card-header>
  <ui-card-body>48 contracts signed, 5 expiring in the next 30 days.</ui-card-body>
  <ui-card-footer>
    <ui-card-action><ui-button kind="ghost">View report</ui-button></ui-card-action>
    <ui-card-action><ui-icon-button kind="ghost" size="md" label="Download"><svg viewBox="0 0 16 16"><path d="M13 12v2H3v-2H2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2zM13 7l-.7-.7-3.8 3.8V1h-1v9.1L3.7 6.3 3 7l5 5z" /></svg></ui-icon-button></ui-card-action>
  </ui-card-footer>
</ui-card>
<p>Pressed: <output id="card-footer-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('card-footer-out');
  for (const button of document.querySelectorAll('#card-footer ui-card-action > *')) {
    button.addEventListener('click', () => (out.value = button.getAttribute('label') ?? button.textContent.trim()));
  }
</script>
```

React:

```tsx
<UiCard style={{ maxWidth: 360 }}>
  <UiCardHeader>
    <UiCardTitle label="Report" description="September 2026">Monthly contract summary</UiCardTitle>
  </UiCardHeader>
  <UiCardBody>48 contracts signed, 5 expiring in the next 30 days.</UiCardBody>
  <UiCardFooter>
    <UiCardAction><UiButton kind="ghost" onClick={view}>View report</UiButton></UiCardAction>
    <UiCardAction><UiIconButton kind="ghost" size="md" label="Download" onClick={download}>{downloadIcon}</UiIconButton></UiCardAction>
  </UiCardFooter>
</UiCard>
```

React + Tailwind:

```tsx
<Card className="max-w-[360px]">
  <CardHeader>
    <CardTitle label="Report" description="September 2026">Monthly contract summary</CardTitle>
  </CardHeader>
  <CardBody>48 contracts signed, 5 expiring in the next 30 days.</CardBody>
  <CardFooter>
    <CardAction><Button kind="ghost" onClick={view}>View report</Button></CardAction>
    <CardAction><IconButton kind="ghost" size="md" label="Download" onClick={download}>{downloadIcon}</IconButton></CardAction>
  </CardFooter>
</Card>
```

## Linked card

With `href` the whole card is one link and a single tab stop. Name it with `label`: the card's whole text would be a long link name. A linked card gets a border and the hover colour, and hides its footer: one link can't hold other controls, so leave out header actions too. They still show if you add them (as in Carbon, whose guidelines say a clickable card holds no interactive elements), inside the link. A plain click fires a cancelable `ui-navigate` first, for your [SPA router](https://parntengza.github.io/kanok-ui-docs/en/frameworks/#route-links-with-your-spa-router).


HTML:

```html
<ui-card href="#accessibility" label="Open the procurement policy" style="max-width: 360px">
  <ui-card-header>
    <ui-card-title label="Policy" description="Version 4, 2026">Procurement policy</ui-card-title>
  </ui-card-header>
  <ui-card-body>Who can approve purchases, and up to what amount.</ui-card-body>
</ui-card>
```

React:

```tsx
<UiCard href="/policies/procurement" label="Open the procurement policy" style={{ maxWidth: 360 }}>
  <UiCardHeader>
    <UiCardTitle label="Policy" description="Version 4, 2026">Procurement policy</UiCardTitle>
  </UiCardHeader>
  <UiCardBody>Who can approve purchases, and up to what amount.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card href="/policies/procurement" aria-label="Open the procurement policy" className="max-w-[360px]">
  <CardHeader>
    <CardTitle label="Policy" description="Version 4, 2026">Procurement policy</CardTitle>
  </CardHeader>
  <CardBody>Who can approve purchases, and up to what amount.</CardBody>
</Card>
```

`target="_blank"` opens a new tab; the card adds "(opens in a new tab)" for screen readers and `rel="noopener noreferrer"`.

## Clickable card

`clickable` makes the whole card one button: a click, or Enter or Space while the card has focus, fires `click`. An arrow in the bottom-end corner shows it can be pressed; replace it with the `footer-icon` slot (`footerIcon` in React + Tailwind). Name the card with `label`, and put no other controls in it.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px">
  <ui-card id="card-pick-sale" clickable label="Start a sale contract">
    <ui-card-header><ui-card-title label="Template">Sale contract</ui-card-title></ui-card-header>
    <ui-card-body>Goods, price and delivery.</ui-card-body>
  </ui-card>
  <ui-card id="card-pick-lease" clickable label="Start a lease contract">
    <ui-card-header><ui-card-title label="Template">Lease contract</ui-card-title></ui-card-header>
    <ui-card-body>Property, rent and term.</ui-card-body>
  </ui-card>
</div>
<p>Chosen: <output id="card-pick-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('card-pick-out');
  for (const id of ['card-pick-sale', 'card-pick-lease']) {
    const card = document.getElementById(id);
    card.addEventListener('click', () => (out.value = card.label));
  }
</script>
```

React:

```tsx
const [chosen, setChosen] = useState('');

<UiCard clickable label="Start a sale contract" onClick={() => setChosen('sale')}>
  <UiCardHeader><UiCardTitle label="Template">Sale contract</UiCardTitle></UiCardHeader>
  <UiCardBody>Goods, price and delivery.</UiCardBody>
</UiCard>
<UiCard clickable label="Start a lease contract" onClick={() => setChosen('lease')}>
  <UiCardHeader><UiCardTitle label="Template">Lease contract</UiCardTitle></UiCardHeader>
  <UiCardBody>Property, rent and term.</UiCardBody>
</UiCard>
<p>Chosen: <output>{chosen}</output></p>
```

React + Tailwind:

```tsx
const [chosen, setChosen] = useState('');

<Card clickable aria-label="Start a sale contract" onClick={() => setChosen('sale')}>
  <CardHeader><CardTitle label="Template">Sale contract</CardTitle></CardHeader>
  <CardBody>Goods, price and delivery.</CardBody>
</Card>
<Card clickable aria-label="Start a lease contract" onClick={() => setChosen('lease')}>
  <CardHeader><CardTitle label="Template">Lease contract</CardTitle></CardHeader>
  <CardBody>Property, rent and term.</CardBody>
</Card>
<p>Chosen: <output>{chosen}</output></p>
```

## Disabled

`disabled` greys the text and the arrow. A disabled clickable card fires no `click` and leaves the tab order; a disabled linked card is no longer a link. Say in the card why it can't be used.


HTML:

```html
<ui-card clickable disabled label="Start a loan contract (unavailable)" style="max-width: 320px">
  <ui-card-header><ui-card-title label="Template">Loan contract</ui-card-title></ui-card-header>
  <ui-card-body>Being revised by the legal department until 15 October.</ui-card-body>
</ui-card>
```

React:

```tsx
<UiCard clickable disabled label="Start a loan contract (unavailable)" style={{ maxWidth: 320 }}>
  <UiCardHeader><UiCardTitle label="Template">Loan contract</UiCardTitle></UiCardHeader>
  <UiCardBody>Being revised by the legal department until 15 October.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card clickable disabled aria-label="Start a loan contract (unavailable)" className="max-w-[320px]">
  <CardHeader><CardTitle label="Template">Loan contract</CardTitle></CardHeader>
  <CardBody>Being revised by the legal department until 15 October.</CardBody>
</Card>
```

## Horizontal

`horizontal` puts the media beside the content: at the start by default, at the end with `media-position="end"`. The media takes a third of the card; `media-width` on `ui-card-media` changes that.


HTML:

```html
<ui-card horizontal style="max-width: 560px">
  <ui-card-media>
    <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
  </ui-card-media>
  <ui-card-header><ui-card-title label="Guide" description="5 minutes to read">Signing a contract online</ui-card-title></ui-card-header>
  <ui-card-body>Check the parties, sign with your one-time code, and download the signed copy.</ui-card-body>
</ui-card>
<ui-card horizontal media-position="end" style="max-width: 560px">
  <ui-card-media media-width="40%">
    <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
  </ui-card-media>
  <ui-card-header><ui-card-title label="Guide" description="3 minutes to read">Asking for an approval</ui-card-title></ui-card-header>
  <ui-card-body>Pick the approvers, add a note, and follow the request from your inbox.</ui-card-body>
</ui-card>
```

React:

```tsx
<UiCard horizontal style={{ maxWidth: 560 }}>
  <UiCardMedia><img alt="" src={guideImage} /></UiCardMedia>
  <UiCardHeader><UiCardTitle label="Guide" description="5 minutes to read">Signing a contract online</UiCardTitle></UiCardHeader>
  <UiCardBody>Check the parties, sign with your one-time code, and download the signed copy.</UiCardBody>
</UiCard>
<UiCard horizontal mediaPosition="end" style={{ maxWidth: 560 }}>
  <UiCardMedia mediaWidth="40%"><img alt="" src={guideImage} /></UiCardMedia>
  <UiCardHeader><UiCardTitle label="Guide" description="3 minutes to read">Asking for an approval</UiCardTitle></UiCardHeader>
  <UiCardBody>Pick the approvers, add a note, and follow the request from your inbox.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card horizontal className="max-w-[560px]">
  <CardMedia><img alt="" src={guideImage} /></CardMedia>
  <CardHeader><CardTitle label="Guide" description="5 minutes to read">Signing a contract online</CardTitle></CardHeader>
  <CardBody>Check the parties, sign with your one-time code, and download the signed copy.</CardBody>
</Card>
<Card horizontal mediaPosition="end" className="max-w-[560px]">
  <CardMedia mediaWidth="40%"><img alt="" src={guideImage} /></CardMedia>
  <CardHeader><CardTitle label="Guide" description="3 minutes to read">Asking for an approval</CardTitle></CardHeader>
  <CardBody>Pick the approvers, add a note, and follow the request from your inbox.</CardBody>
</Card>
```

## Expressive

`density="expressive"` sets the title in the larger heading-03 type, for marketing-like pages with few cards. The default `productive` suits dense product screens.


HTML:

```html
<ui-card density="expressive" style="max-width: 360px">
  <ui-card-header><ui-card-title label="New">E-signature for every branch</ui-card-title></ui-card-header>
  <ui-card-body>From November, every branch can sign contracts online.</ui-card-body>
</ui-card>
```

React:

```tsx
<UiCard density="expressive" style={{ maxWidth: 360 }}>
  <UiCardHeader><UiCardTitle label="New">E-signature for every branch</UiCardTitle></UiCardHeader>
  <UiCardBody>From November, every branch can sign contracts online.</UiCardBody>
</UiCard>
```

React + Tailwind:

```tsx
<Card density="expressive" className="max-w-[360px]">
  <CardHeader><CardTitle label="New">E-signature for every branch</CardTitle></CardHeader>
  <CardBody>From November, every branch can sign contracts online.</CardBody>
</Card>
```

## On a layer

A card draws itself in the layer colour it sits on. Inside a `ui-layer` it takes the next one, so cards on a grey panel still stand out.


HTML:

```html
<ui-layer level="1" with-background style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; padding: 16px">
  <ui-card>
    <ui-card-header><ui-card-title label="Sales">12 open deals</ui-card-title></ui-card-header>
    <ui-card-body>Worth 3.4 million baht.</ui-card-body>
  </ui-card>
  <ui-card>
    <ui-card-header><ui-card-title label="Legal">5 reviews</ui-card-title></ui-card-header>
    <ui-card-body>2 due this week.</ui-card-body>
  </ui-card>
</ui-layer>
```

React:

```tsx
<UiLayer level={1} withBackground style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, padding: 16 }}>
  <UiCard>
    <UiCardHeader><UiCardTitle label="Sales">12 open deals</UiCardTitle></UiCardHeader>
    <UiCardBody>Worth 3.4 million baht.</UiCardBody>
  </UiCard>
  <UiCard>
    <UiCardHeader><UiCardTitle label="Legal">5 reviews</UiCardTitle></UiCardHeader>
    <UiCardBody>2 due this week.</UiCardBody>
  </UiCard>
</UiLayer>
```

React + Tailwind:

```tsx
<Layer level={1} withBackground className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 p-4">
  <Card>
    <CardHeader><CardTitle label="Sales">12 open deals</CardTitle></CardHeader>
    <CardBody>Worth 3.4 million baht.</CardBody>
  </Card>
  <Card>
    <CardHeader><CardTitle label="Legal">5 reviews</CardTitle></CardHeader>
    <CardBody>2 due this week.</CardBody>
  </Card>
</Layer>
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves to a linked or clickable card, or to the buttons in a plain card's header and footer |
| Enter | Follows a linked card; presses a clickable card |
| Space | Presses a clickable card |

## Accessibility

- The title is not a heading element. When the cards form a list with headings on the page, wrap the title text in a heading of the right level, or name the list.
- A linked or clickable card is one control. Name it with `label`, since its whole text would make a long name, and don't put other controls inside.
- A clickable card is a `role="button"`; a disabled one has `aria-disabled` and leaves the tab order.
- The arrow of a clickable card and the media are decorative. Give an image a real `alt` only when it carries information.
- The header actions are separate buttons, each with its own `label`; those in the overflow menu keep their names.

Unstyled React parts with the same behaviour: [Headless Card](https://parntengza.github.io/kanok-ui-docs/en/headless-card/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-card>` · React `UiCard`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `''` | Makes the whole card one link. |
| `target` | `target` | `'_self' \| '_blank'` | `'_self'` |  |
| `clickable` | `clickable` | `boolean` | `false` | Makes the whole card one button (listen for `click`). |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `label` | `label` | `string` | `''` | The accessible name of a linked or clickable card (Carbon asks for one). |
| `density` | `density` | `CardDensity` | `'productive'` |  |
| `horizontal` | `horizontal` | `boolean` | `false` |  |
| `media-position` | `mediaPosition` | `'start' \| 'end'` | `'start'` | Where a horizontal card's media goes. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of a linked card; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | The parts |
| `media` | (filled for you) the media of a horizontal card |
| `footer-icon` | Replaces the clickable card's arrow |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The card (`<div>`, or `<a>` with `href`) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-card-radius` |  | Corner radius (default 0; Kanok: 12px) |
| `--ui-card-border` |  | Border of every card, not only clickable ones (default none; Kanok: a hairline) |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-card-clickable-border` |  | Border of a clickable card (default 1px `--ui-border-tile-1`; Kanok: none) |
| `--ui-card-overflow` |  | `overflow` of the card (default visible; Kanok: clip, so media follow the rounded corners) |

### `<ui-card-media>` · React `UiCardMedia`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `ratio` | `ratio` | `CardMediaRatio \| ''` | `''` |  |
| `media-width` | `mediaWidth` | `string` | `'33.33%'` | A horizontal card's media width (Carbon's default 33.33%). |

#### Slots

| Slot | Description |
|---|---|
| (default) | An `<img>`, `<video>`, … |

### `<ui-card-header>` · React `UiCardHeader`

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-card-header-media>`, `<ui-card-title-media>`, `<ui-card-title>`, `<ui-card-actions>` |

### `<ui-card-header-media>` · React `UiCardHeaderMedia`

#### Slots

| Slot | Description |
|---|---|
| (default) | The media |

### `<ui-card-title-media>` · React `UiCardTitleMedia`

#### Slots

| Slot | Description |
|---|---|
| (default) | The media |

### `<ui-card-title>` · React `UiCardTitle`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `description` | `description` | `string` | `''` |  |
| `title-truncate` | `titleTruncate` | `string \| null` | `null` |  |
| `label-truncate` | `labelTruncate` | `string \| null` | `null` |  |
| `description-truncate` | `descriptionTruncate` | `string \| null` | `null` |  |
| `max-width` | `maxWidth` | `string` | `'100%'` | A truncated title's widest. |

#### Slots

| Slot | Description |
|---|---|
| (default) | The title text |
| `label` | Replaces `label` |
| `description` | Replaces `description` |
| `title-start` | An icon before the title |
| `title-end` | An icon after the title |

### `<ui-card-body>` · React `UiCardBody`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `is-flush` | `isFlush` | `boolean` | `false` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | The content |

### `<ui-card-footer>` · React `UiCardFooter`

#### Slots

| Slot | Description |
|---|---|
| (default) | Content or `<ui-card-action>`s |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-card-actions-padding` |  | / --ui-card-actions-gap - Around and between the footer's buttons (default 0 and 1px: full-bleed; Kanok: 8px and 8px) |

### `<ui-card-action>` · React `UiCardAction`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Its name in the header's overflow menu (else the button's label or text). |

#### Slots

| Slot | Description |
|---|---|
| (default) | A `<ui-button>` or `<ui-icon-button>` |

### `<ui-card-actions>` · React `UiCardActions`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `overflow-menu-label` | `overflowMenuLabel` | `string` | `''` | The overflow menu's name (default: the translation's "More actions"). |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-card-action>`s, each with a small `<ui-icon-button>` (or `<ui-button size="sm">`) |


