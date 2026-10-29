# Headless Product card

`ProductCard` is the behaviour of the styled [Product card](https://parntengza.github.io/kanok-ui-docs/en/product-card/) (Carbon for IBM Products' legacy `ProductiveCard` and `ExpressiveCard`) as unstyled React parts. For new work, use [Headless Card](https://parntengza.github.io/kanok-ui-docs/en/headless-card/) instead.

What the parts give you is a clickable zone that never swallows the card's own controls. `ProductCard.ClickZone` is an empty `<button>` that you lay over the zone (`position: absolute; inset: 0`), with the card's buttons stacked above it. The buttons stay siblings of the zone's button: separate tab stops whose clicks never press the card. The zone's button is named by `ProductCard.Title` (else `Label`, else `Body`) and described by `Description`; a click, Enter or Space on it calls the root's `onClick`. You own the layout, the buttons and every style.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { ProductCard } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { ProductCard } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <ProductCard.Root className="max-w-sm bg-layer-1 p-4 text-ink">
      <ProductCard.Label className="text-xs text-ink-muted">Department</ProductCard.Label>
      <ProductCard.Title className="text-base font-semibold">Legal</ProductCard.Title>
      <ProductCard.Description className="text-xs text-ink-muted">6 people</ProductCard.Description>
      <ProductCard.Body className="pt-2 text-sm">14 contracts in review, 2 overdue.</ProductCard.Body>
    </ProductCard.Root>
  );
}
```

## Anatomy

```tsx
<ProductCard.Root>
  <ProductCard.ClickZone />
  <ProductCard.Label />
  <ProductCard.Title />
  <ProductCard.Description />
  <ProductCard.Body />
</ProductCard.Root>
```

## Clickable card

Give `Root` an `onClick` and `position: relative`, put `ClickZone` in it with `position: absolute; inset: 0`, and lift the card's own buttons above it with `position: relative; z-index: 1`. Here a click on the card opens the project, and the edit button only edits.


React (live React example):

```tsx
import { useState } from 'react';
import { ProductCard } from '@purpurabog/ui/headless';

export default function Example() {
  const [log, setLog] = useState('nothing yet');
  return (
    <div className="grid gap-2">
      <ProductCard.Root
        onClick={() => setLog('card: open the project')}
        className="relative max-w-sm border border-border-tile-1 bg-layer-1 p-4 text-ink hover:bg-layer-hover-1"
      >
        <ProductCard.ClickZone className="absolute inset-0 cursor-pointer focus:outline-2 focus:-outline-offset-2 focus:outline-focus" />
        <div className="flex items-start justify-between gap-2">
          <div>
            <ProductCard.Title className="text-base font-semibold">Branch renovation</ProductCard.Title>
            <ProductCard.Description className="text-xs text-ink-muted">Due in 3 days</ProductCard.Description>
          </div>
          <button
            type="button"
            aria-label="Edit"
            onClick={() => setLog('edit button')}
            className="relative z-1 flex size-8 items-center justify-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
          >
            <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
              <path d="M1 13h14v1H1zM12.7 4.5 10.5 2.3a1 1 0 0 0-1.4 0L3 8.4V11h2.6l6.1-6.1a1 1 0 0 0 0-1.4zM5.2 10H4V8.8l4-4 1.2 1.2zm4.7-4.7L8.7 4.1l1.1-1.1L11 4.2z" />
            </svg>
          </button>
        </div>
        <ProductCard.Body className="pt-2 text-sm">Silom branch, second floor.</ProductCard.Body>
      </ProductCard.Root>
      <p className="text-xs text-ink-muted">Last press: {log}</p>
    </div>
  );
}
```

## A smaller zone

Carbon's productive card can make only part of the card clickable: the header with the body, or the body alone. Put `ClickZone` inside that part and make the part `position: relative`. The footer button below stays outside the zone.


React (live React example):

```tsx
import { useState } from 'react';
import { ProductCard } from '@purpurabog/ui/headless';

export default function Example() {
  const [log, setLog] = useState('nothing yet');
  return (
    <div className="grid gap-2">
      <ProductCard.Root onClick={() => setLog('zone: open the request')} className="max-w-sm bg-layer-1 text-ink">
        <div className="p-4 pb-2">
          <ProductCard.Title className="text-base font-semibold">Approval request</ProductCard.Title>
          <ProductCard.Description className="text-xs text-ink-muted">From Malee S.</ProductCard.Description>
        </div>
        <ProductCard.Body className="relative p-4 pt-0 text-sm hover:bg-layer-hover-1">
          <ProductCard.ClickZone className="absolute inset-0 cursor-pointer focus:outline-2 focus:-outline-offset-2 focus:outline-focus" />
          Purchase of 20 laptops for the Finance department, 640,000 baht.
        </ProductCard.Body>
        <div className="border-t border-hairline">
          <button
            type="button"
            onClick={() => setLog('Approve button')}
            className="h-10 px-4 text-sm text-link hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
          >
            Approve
          </button>
        </div>
      </ProductCard.Root>
      <p className="text-xs text-ink-muted">Last press: {log}</p>
    </div>
  );
}
```

## What names the zone

`ClickZone` points `aria-labelledby` at the `Title`, or at the `Label` when there is no title, or at the `Body` when there is neither. `aria-describedby` points at the `Description`. Pass your own `aria-labelledby` or `aria-describedby` on `ClickZone` to change them. The parts make their own ids; an `id` you pass is used instead.


React (live React example):

```tsx
import { useState } from 'react';
import { ProductCard } from '@purpurabog/ui/headless';

export default function Example() {
  const [pressed, setPressed] = useState(0);
  return (
    <div className="grid gap-2">
      <ProductCard.Root onClick={() => setPressed(pressed + 1)} className="relative max-w-sm bg-layer-1 p-4 text-ink hover:bg-layer-hover-1">
        <ProductCard.ClickZone className="absolute inset-0 cursor-pointer focus:outline-2 focus:-outline-offset-2 focus:outline-focus" />
        <ProductCard.Label className="text-xs text-ink-muted">Only a label: it names the zone</ProductCard.Label>
        <ProductCard.Body className="pt-2 text-sm">The body would name it if there were no label either.</ProductCard.Body>
      </ProductCard.Root>
      <p className="text-xs text-ink-muted">Presses: {pressed}</p>
    </div>
  );
}
```

## Disabled

`disabled` on `Root` stops `onClick` and sets `aria-disabled` on the card and the zone's button, as Carbon does. The button stays focusable, so screen readers still find it and hear that it's disabled. Nothing else changes: grey it out yourself with `data-disabled`, and say why.


React (live React example):

```tsx
import { ProductCard } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <ProductCard.Root disabled onClick={() => alert('never runs')} className="relative max-w-sm bg-layer-1 p-4 text-ink data-disabled:text-ink-disabled">
      <ProductCard.ClickZone className="absolute inset-0 data-disabled:cursor-not-allowed focus:outline-2 focus:-outline-offset-2 focus:outline-focus" />
      <ProductCard.Title className="text-base font-semibold">Loan contract template</ProductCard.Title>
      <ProductCard.Description className="text-xs">Being revised until 15 October</ProductCard.Description>
    </ProductCard.Root>
  );
}
```

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { ProductCard } from '@purpurabog/ui/headless';

export default function Example() {
  const [disabled, setDisabled] = useState(false);
  const [presses, setPresses] = useState(0);
  return (
    <div className="grid gap-4">
      <ProductCard.Root
        disabled={disabled}
        onClick={() => setPresses(presses + 1)}
        className="relative max-w-sm border border-border-tile-1 bg-layer-1 p-4 text-ink hover:bg-layer-hover-1 data-disabled:text-ink-disabled data-disabled:hover:bg-layer-1"
      >
        <ProductCard.ClickZone className="absolute inset-0 cursor-pointer outline-transparent focus:outline-2 focus:-outline-offset-2 focus:outline-focus data-disabled:cursor-not-allowed" />
        <ProductCard.Label className="text-xs text-ink-muted data-disabled:text-ink-disabled">Report</ProductCard.Label>
        <ProductCard.Title className="text-base font-semibold">Monthly contract summary</ProductCard.Title>
        <ProductCard.Body className="pt-2 text-sm">48 contracts signed in September.</ProductCard.Body>
      </ProductCard.Root>
      <div className="flex items-center gap-4 text-sm text-ink">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
          disabled
        </label>
        <span className="text-xs text-ink-muted">Presses: {presses}</span>
      </div>
    </div>
  );
}
```
```css
.product-card { position: relative; background: #f4f4f4; }
.product-card [data-click-zone] { position: absolute; inset: 0; cursor: pointer; }
.product-card > :is(a, button):not([data-click-zone]) { position: relative; z-index: 1; }
.product-card[data-disabled] { color: #8d8d8d; }
[data-click-zone][data-disabled] { cursor: not-allowed; }
```

## Parts

### ProductCard.Root

A `<div>`, the card. It takes every `<div>` prop except `onClick`, which here means the click zone.

| Prop | Type | Default | |
|---|---|---|---|
| `onClick` | `(event: MouseEvent<HTMLButtonElement>) => void` | — | The click zone was pressed (a click, Enter or Space on `ClickZone`); never while `disabled` |
| `disabled` | `boolean` | `false` | Sets `aria-disabled`; the zone then calls no `onClick` |

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` is set |

### ProductCard.ClickZone

An empty `<button type="button">` with `tabIndex={0}`, to lay over the zone. It takes every button prop except `type` and `children`; your own `onClick` runs before the root's.

| Attribute | When |
|---|---|
| `data-click-zone` | Always (to leave it out of rules such as `[&>button]:relative`) |
| `data-disabled` | The root is disabled |

### ProductCard.Title

A heading, `<h2>` by default. It takes every heading prop. It names the click zone.

| Prop | Type | Default | |
|---|---|---|---|
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h2'` | The heading level |

### ProductCard.Label

A `<p>`, the text above the title. It names the click zone when there is no title.

### ProductCard.Description

A `<p>`, the text below the title. It describes the click zone.

### ProductCard.Body

A `<div>`, the content. It names the click zone when there is neither title nor label.

Every part except `Root` throws when it isn't inside a `ProductCard.Root`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | Moves to the zone's button and, separately, to each of the card's own controls |
| Enter, Space | Presses the zone's button (calls `onClick`) or the focused control |

The parts set the zone's `aria-labelledby`, `aria-describedby` and `aria-disabled`, and give each named part an id.

You add:

- The positioning: the zone's button over its part, the card's own controls above it.
- A visible focus style on the zone's button; it covers the zone, so an outline on it outlines the zone.
- Names for icon-only buttons.
- A disabled look, if you want one; the parts only announce it.
