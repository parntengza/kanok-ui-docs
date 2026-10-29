# Headless Card

`Card` is the behaviour of the styled [Card](https://parntengza.github.io/kanok-ui-docs/en/card/) as two unstyled React parts. `Card.Root` is the card: with `href` one link (`<a>`), with `clickable` one button (a `<div role="button">`, since a card holds block content a `<button>` may not), else a plain box (`<div>`). A click, or Enter or Space on the card itself, calls `onClick`. `Card.Actions` marks the card's own small buttons: a click or key that starts inside it belongs to that button, not to the card.

You own everything else: the media, the header, the title, the body, the footer and every style. The styled card's other parts (media, header, title, body, footer) are layout, so here they are your own elements.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Card } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Card } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Card.Root className="max-w-sm bg-layer-1 text-ink">
      <div className="p-4">
        <p className="text-xs text-ink-muted">Contract</p>
        <h3 className="text-base font-semibold">Office lease, Silom branch</h3>
      </div>
      <p className="p-4 pt-0 text-sm">Waiting for the landlord's signature.</p>
    </Card.Root>
  );
}
```

## Anatomy

```tsx
<Card.Root>
  <Card.Actions />
</Card.Root>
```

## Linked card

With `href` the whole card is one `<a>` (with `tabIndex={0}`, so Safari focuses it on a click and stops on it with Tab). `target="_blank"` adds `rel="noopener noreferrer"`. `onClick` runs too, so a single-page app can route the click; the example prevents the navigation and shows the address. Name the link with `aria-label`, as its whole text would make a long name.


React (live React example):

```tsx
import { useState } from 'react';
import { Card } from '@purpurabog/ui/headless';

export default function Example() {
  const [opened, setOpened] = useState('');
  return (
    <div className="grid gap-2">
      <Card.Root
        href="/policies/procurement"
        aria-label="Open the procurement policy"
        onClick={(event) => {
          event.preventDefault();
          setOpened('/policies/procurement');
        }}
        className="block max-w-sm border border-border-tile-1 bg-layer-1 p-4 text-ink no-underline hover:bg-layer-hover-1 focus:outline-2 focus:outline-focus"
      >
        <p className="text-xs text-ink-muted">Policy</p>
        <h3 className="mb-4 text-base font-semibold">Procurement policy</h3>
        <p className="text-sm">Who can approve purchases, and up to what amount.</p>
      </Card.Root>
      <p className="text-xs text-ink-muted">Router would open: {opened || 'nothing yet'}</p>
    </div>
  );
}
```

## Clickable card

With `clickable` the card is a `<div role="button" tabIndex={0}>`: a click, or Enter or Space while the card itself has focus, calls `onClick`. Name it with `aria-label`.


React (live React example):

```tsx
import { useState } from 'react';
import { Card } from '@purpurabog/ui/headless';

const templates = [
  { id: 'sale', title: 'Sale contract', text: 'Goods, price and delivery.' },
  { id: 'lease', title: 'Lease contract', text: 'Property, rent and term.' },
];

export default function Example() {
  const [chosen, setChosen] = useState('');
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {templates.map((template) => (
          <Card.Root
            key={template.id}
            clickable
            aria-label={`Start a ${template.title.toLowerCase()}`}
            onClick={() => setChosen(template.title)}
            className="cursor-pointer border border-border-tile-1 bg-layer-1 p-4 text-ink hover:bg-layer-hover-1 active:bg-layer-active-1 focus:outline-2 focus:outline-focus"
          >
            <p className="text-xs text-ink-muted">Template</p>
            <h3 className="mb-4 text-base font-semibold">{template.title}</h3>
            <p className="text-sm">{template.text}</p>
          </Card.Root>
        ))}
      </div>
      <p className="text-xs text-ink-muted">Chosen: {chosen || 'nothing yet'}</p>
    </div>
  );
}
```

## Buttons inside a card

Carbon's guideline keeps other controls out of a link or clickable card: put buttons in a plain card, or use a [Headless Product card](https://parntengza.github.io/kanok-ui-docs/en/headless-product-card/) with click zones. If a button must sit inside one anyway, wrap it in `Card.Actions` (a `<div data-card-actions>`). A click inside it is that button's: the card's `onClick` doesn't run. Enter and Space on a focused button never press the card either, as the card only answers keys while it has focus itself. Screen readers handle controls inside a `role="button"` poorly, which is why Carbon advises against it.


React (live React example):

```tsx
import { useState } from 'react';
import { Card } from '@purpurabog/ui/headless';

export default function Example() {
  const [log, setLog] = useState('nothing yet');
  const [starred, setStarred] = useState(false);
  return (
    <div className="grid gap-2">
      <Card.Root
        clickable
        aria-label="Open the branch renovation project"
        onClick={() => setLog('card: open the project')}
        className="relative max-w-sm cursor-pointer border border-border-tile-1 bg-layer-1 p-4 text-ink hover:bg-layer-hover-1 focus:outline-2 focus:outline-focus"
      >
        <p className="text-xs text-ink-muted">Project</p>
        <h3 className="mb-4 text-base font-semibold">Branch renovation</h3>
        <p className="text-sm">Silom branch, second floor.</p>
        <Card.Actions className="absolute end-2 top-2">
          <button
            type="button"
            aria-label="Star"
            aria-pressed={starred}
            onClick={() => {
              setStarred(!starred);
              setLog(starred ? 'star: off' : 'star: on');
            }}
            className="flex size-8 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
          >
            {starred ? '★' : '☆'}
          </button>
        </Card.Actions>
      </Card.Root>
      <p className="text-xs text-ink-muted">Last press: {log}</p>
    </div>
  );
}
```

## Disabled

`disabled` stops `onClick`. A disabled linked card becomes a plain box (or the button, when it is also `clickable`); a disabled clickable card keeps its role, gets `aria-disabled` and leaves the tab order (`tabIndex={-1}`). The box and the button have `data-disabled`.


React (live React example):

```tsx
import { Card } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Card.Root
      clickable
      disabled
      aria-label="Start a loan contract (unavailable)"
      onClick={() => alert('never runs')}
      className="max-w-sm border border-border-tile-1 bg-layer-1 p-4 text-ink data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-ink-disabled"
    >
      <p className="text-xs">Template</p>
      <h3 className="mb-4 text-base font-semibold">Loan contract</h3>
      <p className="text-sm">Being revised by the legal department until 15 October.</p>
    </Card.Root>
  );
}
```

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Card } from '@purpurabog/ui/headless';

export default function Example() {
  const [disabled, setDisabled] = useState(false);
  const [presses, setPresses] = useState(0);
  return (
    <div className="grid gap-4">
      <Card.Root
        clickable
        disabled={disabled}
        aria-label="Open the monthly summary"
        onClick={() => setPresses(presses + 1)}
        className="max-w-sm bg-layer-1 text-ink outline-transparent data-clickable:cursor-pointer data-clickable:border data-clickable:border-border-tile-1 data-clickable:hover:bg-layer-hover-1 focus:outline-2 focus:outline-focus data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-ink-disabled data-disabled:hover:bg-layer-1"
      >
        <div className="p-4">
          <p className="text-xs">Report</p>
          <h3 className="text-base font-semibold">Monthly contract summary</h3>
        </div>
        <div className="flex justify-end p-4" aria-hidden="true">
          <svg viewBox="0 0 16 16" className="size-4 fill-current">
            <path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" />
          </svg>
        </div>
      </Card.Root>
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
.card { background: #f4f4f4; }
.card[data-link],
.card[data-clickable] { border: 1px solid #c6c6c6; cursor: pointer; }
.card[data-link]:hover,
.card[data-clickable]:hover { background: #e8e8e8; }
.card[data-disabled] { color: #8d8d8d; cursor: not-allowed; }
```

## Parts

### Card.Root

An `<a>` with `href` (unless disabled), a `<div role="button">` with `clickable`, else a `<div>`. It takes every `<div>` prop; `ref` points at whichever element it renders.

| Prop | Type | Default | |
|---|---|---|---|
| `href` | `string` | — | Makes the whole card one link |
| `target` | `'_self' \| '_blank'` | `'_self'` | `_blank` adds `rel="noopener noreferrer"` |
| `clickable` | `boolean` | `false` | Makes the whole card one button (`tabIndex` 0, Enter and Space) |
| `onClick` | `(event: MouseEvent<HTMLElement> \| KeyboardEvent<HTMLElement>) => void` | — | The card was pressed: a linked or clickable card only, not from inside `Card.Actions`, not while disabled |
| `disabled` | `boolean` | `false` | No `onClick`; a link falls back to the box or the button |

| Attribute | When |
|---|---|
| `data-link` | It renders the link |
| `data-clickable` | It renders the button |
| `data-disabled` | `disabled` is set, on the box or the button |

### Card.Actions

A `<div data-card-actions>` for a button that must sit inside a link or clickable card (Carbon advises against it). It takes every `<div>` prop. A click that starts inside it doesn't call the card's `onClick`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | Moves to a linked or clickable card, then to the buttons inside it |
| Enter | Follows a linked card; presses a clickable card that has focus itself |
| Space | Presses a clickable card that has focus itself |

The part sets `role="button"`, `tabIndex`, `aria-disabled` and `rel`.

You add:

- A name on a linked or clickable card: `aria-label`, since its whole text would be read as the name.
- Headings for the titles, at the level the page needs.
- `alt` text for media that carries information, `alt=""` for decoration.
- A visible focus style on the card and its buttons.
- A sentence in a disabled card saying why it can't be used.
