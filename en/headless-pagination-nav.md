# Headless Pagination nav

`PaginationNav` is the behaviour of the styled [Pagination nav](https://parntengza.github.io/kanok-ui-docs/en/pagination-nav/) as unstyled React parts. `Root` holds the page (0-based, as in Carbon) and lays out the row: which page numbers show, and which pages fold into the "…" menus at either end, following the current page as Carbon's do. `Prev`, `Next`, `Page` and `Overflow` move between pages, and `Status` announces the change.

You own the markup and every style: the list, the icons, the underline of the current page, the "…" over each menu, and the words screen readers hear.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { PaginationNav } from '@purpurabog/ui/headless';
```

## Use it

`Root` doesn't render the row itself: read `items` from `PaginationNav.usePaginationNavContext()` in a component inside it, and render each item as a `Page` or an `Overflow`.


React (live React example):

```tsx
import { PaginationNav } from '@purpurabog/ui/headless';

const pageClass =
  'relative h-10 min-w-10 cursor-pointer border-0 bg-transparent px-1 text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:font-semibold data-current:after:absolute data-current:after:bottom-0 data-current:after:start-[calc(50%-8px)] data-current:after:h-1 data-current:after:w-4 data-current:after:bg-border-interactive';
const stepClass =
  'grid size-10 cursor-pointer place-items-center border-0 bg-transparent text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';
const overflowClass =
  'h-10 w-10 cursor-pointer appearance-none border-0 bg-transparent text-transparent hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed [&>option]:bg-layer-1 [&>option]:text-ink';

function Row() {
  const { items, page, total } = PaginationNav.usePaginationNavContext();
  return (
    <>
      <ul className="m-0 flex list-none items-center p-0">
        <li>
          <PaginationNav.Prev aria-label="Previous" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M20 24 10 16 20 8z" /></svg>
          </PaginationNav.Prev>
        </li>
        {items.map((item) =>
          item.kind === 'page' ? (
            <li key={`page-${item.page}`}>
              <PaginationNav.Page page={item.page} className={pageClass}>
                <span className="sr-only">Page </span>
                {item.page + 1}
              </PaginationNav.Page>
            </li>
          ) : (
            <li key={`overflow-${item.from}`} className="relative">
              <PaginationNav.Overflow from={item.from} count={item.count} aria-label="Select page number" className={overflowClass} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center text-ink">…</span>
            </li>
          ),
        )}
        <li>
          <PaginationNav.Next aria-label="Next" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M12 8 22 16 12 24z" /></svg>
          </PaginationNav.Next>
        </li>
      </ul>
      <PaginationNav.Status className="sr-only">Page {page + 1} of {total}</PaginationNav.Status>
    </>
  );
}

export default function Example() {
  return (
    <PaginationNav.Root totalItems={25} aria-label="Pagination">
      <Row />
    </PaginationNav.Root>
  );
}
```

## Anatomy

```tsx
<PaginationNav.Root>
  <PaginationNav.Prev />
  <PaginationNav.Page />
  <PaginationNav.Overflow />
  <PaginationNav.Next />
  <PaginationNav.Status />
</PaginationNav.Root>
```

`items` (from `usePaginationNavContext()`) is the row in order: the first page, a front overflow, the pages around the current one, a back overflow and the last page. Each item is `{ kind: 'page', page, active }` or `{ kind: 'overflow', from, count }`.

## Controlled page

Use `page` with `onChange` for a controlled row (both 0-based), or `defaultPage` for an uncontrolled one.


React (live React example):

```tsx
import { useState } from 'react';
import { PaginationNav } from '@purpurabog/ui/headless';

const pageClass =
  'relative h-10 min-w-10 cursor-pointer border-0 bg-transparent px-1 text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:font-semibold data-current:after:absolute data-current:after:bottom-0 data-current:after:start-[calc(50%-8px)] data-current:after:h-1 data-current:after:w-4 data-current:after:bg-border-interactive';
const stepClass =
  'grid size-10 cursor-pointer place-items-center border-0 bg-transparent text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';
const overflowClass =
  'h-10 w-10 cursor-pointer appearance-none border-0 bg-transparent text-transparent hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed [&>option]:bg-layer-1 [&>option]:text-ink';

function Row() {
  const { items, page, total } = PaginationNav.usePaginationNavContext();
  return (
    <>
      <ul className="m-0 flex list-none items-center p-0">
        <li>
          <PaginationNav.Prev aria-label="Previous" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M20 24 10 16 20 8z" /></svg>
          </PaginationNav.Prev>
        </li>
        {items.map((item) =>
          item.kind === 'page' ? (
            <li key={`page-${item.page}`}>
              <PaginationNav.Page page={item.page} className={pageClass}>
                <span className="sr-only">Page </span>
                {item.page + 1}
              </PaginationNav.Page>
            </li>
          ) : (
            <li key={`overflow-${item.from}`} className="relative">
              <PaginationNav.Overflow from={item.from} count={item.count} aria-label="Select page number" className={overflowClass} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center text-ink">…</span>
            </li>
          ),
        )}
        <li>
          <PaginationNav.Next aria-label="Next" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M12 8 22 16 12 24z" /></svg>
          </PaginationNav.Next>
        </li>
      </ul>
      <PaginationNav.Status className="sr-only">Page {page + 1} of {total}</PaginationNav.Status>
    </>
  );
}

export default function Example() {
  const [page, setPage] = useState(3);
  return (
    <div className="grid gap-2">
      <PaginationNav.Root totalItems={25} page={page} onChange={setPage} aria-label="Pagination">
        <Row />
      </PaginationNav.Root>
      <p className="text-xs text-ink-muted">Page {page + 1} of 25</p>
    </div>
  );
}
```

## Wrap around

With `loop`, `Prev` on the first page goes to the last, and `Next` on the last page to the first. Without it they are disabled at the ends (`disabled` and `data-disabled`).


React (live React example):

```tsx
import { PaginationNav } from '@purpurabog/ui/headless';

const pageClass =
  'relative h-10 min-w-10 cursor-pointer border-0 bg-transparent px-1 text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:font-semibold data-current:after:absolute data-current:after:bottom-0 data-current:after:start-[calc(50%-8px)] data-current:after:h-1 data-current:after:w-4 data-current:after:bg-border-interactive';
const stepClass =
  'grid size-10 cursor-pointer place-items-center border-0 bg-transparent text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';
const overflowClass =
  'h-10 w-10 cursor-pointer appearance-none border-0 bg-transparent text-transparent hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed [&>option]:bg-layer-1 [&>option]:text-ink';

function Row() {
  const { items, page, total } = PaginationNav.usePaginationNavContext();
  return (
    <>
      <ul className="m-0 flex list-none items-center p-0">
        <li>
          <PaginationNav.Prev aria-label="Previous" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M20 24 10 16 20 8z" /></svg>
          </PaginationNav.Prev>
        </li>
        {items.map((item) =>
          item.kind === 'page' ? (
            <li key={`page-${item.page}`}>
              <PaginationNav.Page page={item.page} className={pageClass}>
                <span className="sr-only">Page </span>
                {item.page + 1}
              </PaginationNav.Page>
            </li>
          ) : (
            <li key={`overflow-${item.from}`} className="relative">
              <PaginationNav.Overflow from={item.from} count={item.count} aria-label="Select page number" className={overflowClass} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center text-ink">…</span>
            </li>
          ),
        )}
        <li>
          <PaginationNav.Next aria-label="Next" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M12 8 22 16 12 24z" /></svg>
          </PaginationNav.Next>
        </li>
      </ul>
      <PaginationNav.Status className="sr-only">Page {page + 1} of {total}</PaginationNav.Status>
    </>
  );
}

export default function Example() {
  return (
    <PaginationNav.Root totalItems={8} loop aria-label="Pagination">
      <Row />
    </PaginationNav.Root>
  );
}
```

## Fewer items, or no menus

`itemsShown` is how many items the row holds, the overflows included (10 by default, at least 4); below 320px the row holds fewer by itself. `disableOverflow` keeps the overflows in the row but disables them.


React (live React example):

```tsx
import { PaginationNav } from '@purpurabog/ui/headless';

const pageClass =
  'relative h-10 min-w-10 cursor-pointer border-0 bg-transparent px-1 text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:font-semibold data-current:after:absolute data-current:after:bottom-0 data-current:after:start-[calc(50%-8px)] data-current:after:h-1 data-current:after:w-4 data-current:after:bg-border-interactive';
const stepClass =
  'grid size-10 cursor-pointer place-items-center border-0 bg-transparent text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';
const overflowClass =
  'h-10 w-10 cursor-pointer appearance-none border-0 bg-transparent text-transparent hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed [&>option]:bg-layer-1 [&>option]:text-ink';

function Row() {
  const { items, page, total } = PaginationNav.usePaginationNavContext();
  return (
    <>
      <ul className="m-0 flex list-none items-center p-0">
        <li>
          <PaginationNav.Prev aria-label="Previous" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M20 24 10 16 20 8z" /></svg>
          </PaginationNav.Prev>
        </li>
        {items.map((item) =>
          item.kind === 'page' ? (
            <li key={`page-${item.page}`}>
              <PaginationNav.Page page={item.page} className={pageClass}>
                <span className="sr-only">Page </span>
                {item.page + 1}
              </PaginationNav.Page>
            </li>
          ) : (
            <li key={`overflow-${item.from}`} className="relative">
              <PaginationNav.Overflow from={item.from} count={item.count} aria-label="Select page number" className={overflowClass} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center text-ink">…</span>
            </li>
          ),
        )}
        <li>
          <PaginationNav.Next aria-label="Next" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M12 8 22 16 12 24z" /></svg>
          </PaginationNav.Next>
        </li>
      </ul>
      <PaginationNav.Status className="sr-only">Page {page + 1} of {total}</PaginationNav.Status>
    </>
  );
}

export default function Example() {
  return (
    <div className="grid gap-4">
      <PaginationNav.Root totalItems={25} itemsShown={5} defaultPage={12} aria-label="Pagination, five items">
        <Row />
      </PaginationNav.Root>
      <PaginationNav.Root totalItems={25} defaultPage={12} disableOverflow aria-label="Pagination, no menus">
        <Row />
      </PaginationNav.Root>
    </div>
  );
}
```

## Name the hidden pages

`renderPage` sets the text of each option in an `Overflow` (the 1-based number by default).


React (live React example):

```tsx
import { PaginationNav } from '@purpurabog/ui/headless';

const pageClass =
  'relative h-10 min-w-10 cursor-pointer border-0 bg-transparent px-1 text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:font-semibold data-current:after:absolute data-current:after:bottom-0 data-current:after:start-[calc(50%-8px)] data-current:after:h-1 data-current:after:w-4 data-current:after:bg-border-interactive';
const stepClass =
  'grid size-10 cursor-pointer place-items-center border-0 bg-transparent text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';
const overflowClass =
  'h-10 w-10 cursor-pointer appearance-none border-0 bg-transparent text-transparent hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed [&>option]:bg-layer-1 [&>option]:text-ink';

function Row() {
  const { items, page, total } = PaginationNav.usePaginationNavContext();
  return (
    <>
      <ul className="m-0 flex list-none items-center p-0">
        <li>
          <PaginationNav.Prev aria-label="Previous" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M20 24 10 16 20 8z" /></svg>
          </PaginationNav.Prev>
        </li>
        {items.map((item) =>
          item.kind === 'page' ? (
            <li key={`page-${item.page}`}>
              <PaginationNav.Page page={item.page} className={pageClass}>
                <span className="sr-only">Page </span>
                {item.page + 1}
              </PaginationNav.Page>
            </li>
          ) : (
            <li key={`overflow-${item.from}`} className="relative">
              <PaginationNav.Overflow from={item.from} count={item.count} aria-label="Select page number" renderPage={(page) => `Page ${page + 1}`} className={overflowClass} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center text-ink">…</span>
            </li>
          ),
        )}
        <li>
          <PaginationNav.Next aria-label="Next" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M12 8 22 16 12 24z" /></svg>
          </PaginationNav.Next>
        </li>
      </ul>
      <PaginationNav.Status className="sr-only">Page {page + 1} of {total}</PaginationNav.Status>
    </>
  );
}

export default function Example() {
  return (
    <PaginationNav.Root totalItems={40} defaultPage={20} aria-label="Pagination">
      <Row />
    </PaginationNav.Root>
  );
}
```

## Your own row

The parts don't need the "…" menus: render only the `Page` items, and text buttons for `Prev` and `Next`. Here a list of 12 contracts shows three per page.


React (live React example):

```tsx
import { useState } from 'react';
import { PaginationNav } from '@purpurabog/ui/headless';

const contracts = [
  'Office supplies', 'Cleaning services', 'Server lease', 'Car rental',
  'Printer maintenance', 'Security guards', 'Catering', 'Software licences',
  'Office lease', 'Legal advice', 'Translation', 'Courier services',
];
const perPage = 3;
const pageClass =
  'h-8 min-w-8 cursor-pointer border-0 bg-transparent px-1 text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:bg-interactive data-current:text-on-primary';
const stepClass =
  'h-8 cursor-pointer border-0 bg-transparent px-3 text-sm text-link hover:underline focus-visible:outline-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:no-underline';

function Pages() {
  const { items } = PaginationNav.usePaginationNavContext();
  return items.map((item) =>
    item.kind === 'page' ? (
      <li key={item.page}>
        <PaginationNav.Page page={item.page} className={pageClass}>
          {item.page + 1}
        </PaginationNav.Page>
      </li>
    ) : null,
  );
}

export default function Example() {
  const [page, setPage] = useState(0);
  return (
    <div className="grid gap-4">
      <ol start={page * perPage + 1} className="m-0 ps-6 text-sm text-ink">
        {contracts.slice(page * perPage, (page + 1) * perPage).map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
      <PaginationNav.Root totalItems={Math.ceil(contracts.length / perPage)} page={page} onChange={setPage} aria-label="Contract pages">
        <ul className="m-0 flex list-none items-center gap-1 p-0">
          <li><PaginationNav.Prev className={stepClass}>Previous</PaginationNav.Prev></li>
          <Pages />
          <li><PaginationNav.Next className={stepClass}>Next</PaginationNav.Next></li>
        </ul>
        <PaginationNav.Status className="sr-only">Page {page + 1} of {Math.ceil(contracts.length / perPage)}</PaginationNav.Status>
      </PaginationNav.Root>
    </div>
  );
}
```

## Style it

The current `Page` has `data-current` (and `aria-current="page"`); `Prev`, `Next` and a disabled `Overflow` have `data-disabled`. Here they give round pages, the current one filled, and faded ends.


React (live React example):

```tsx
import { PaginationNav } from '@purpurabog/ui/headless';

const pageClass =
  'size-8 cursor-pointer rounded-full border-0 bg-transparent text-sm text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-current:bg-interactive data-current:font-semibold data-current:text-on-primary';
const stepClass =
  'grid size-8 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:opacity-40';
const overflowClass =
  'size-8 cursor-pointer appearance-none rounded-full border-0 bg-transparent text-transparent hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:opacity-40 [&>option]:bg-layer-1 [&>option]:text-ink';

function Row() {
  const { items, page, total } = PaginationNav.usePaginationNavContext();
  return (
    <>
      <ul className="m-0 flex list-none items-center p-0">
        <li>
          <PaginationNav.Prev aria-label="Previous" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M20 24 10 16 20 8z" /></svg>
          </PaginationNav.Prev>
        </li>
        {items.map((item) =>
          item.kind === 'page' ? (
            <li key={`page-${item.page}`}>
              <PaginationNav.Page page={item.page} className={pageClass}>
                <span className="sr-only">Page </span>
                {item.page + 1}
              </PaginationNav.Page>
            </li>
          ) : (
            <li key={`overflow-${item.from}`} className="relative">
              <PaginationNav.Overflow from={item.from} count={item.count} aria-label="Select page number" className={overflowClass} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center text-ink">…</span>
            </li>
          ),
        )}
        <li>
          <PaginationNav.Next aria-label="Next" className={stepClass}>
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-current"><path d="M12 8 22 16 12 24z" /></svg>
          </PaginationNav.Next>
        </li>
      </ul>
      <PaginationNav.Status className="sr-only">Page {page + 1} of {total}</PaginationNav.Status>
    </>
  );
}

export default function Example() {
  return (
    <PaginationNav.Root totalItems={12} itemsShown={7} aria-label="Pagination">
      <Row />
    </PaginationNav.Root>
  );
}
```
```css
nav button[data-current] { background: #0f62fe; color: #fff; font-weight: 600; }
nav :is(button, select)[data-disabled] { opacity: 0.4; cursor: not-allowed; }
nav select { appearance: none; color: transparent; }
nav select option { color: #161616; }
```

## Parts

### PaginationNav.Root

Renders a `<nav>`; name it with `aria-label` ("Pagination"). It takes every `<nav>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `totalItems` | `number` | — | The number of pages (Carbon's name; required) |
| `page` | `number` | — | The current page, 0-based (controlled) |
| `defaultPage` | `number` | `0` | The starting page (uncontrolled) |
| `onChange` | `(page: number) => void` | — | After the user chose a page (0-based) |
| `itemsShown` | `number` | `10` | Items in the row, the overflows included (at least 4) |
| `loop` | `boolean` | `false` | `Prev` on the first page goes to the last, `Next` on the last to the first |
| `disableOverflow` | `boolean` | `false` | The overflows can't be opened |
| `size` | `'sm' \| 'md' \| 'lg'` | `'lg'` | Only how many items fit on a window narrower than 320px (Carbon) |

### PaginationNav.Prev, PaginationNav.Next

Each renders a `<button type="button">` that moves one page back or forward; name it with `aria-label`. Disabled at the ends unless `loop`.

| Attribute | When |
|---|---|
| `data-disabled` | It can't move (or you set `disabled`) |

### PaginationNav.Page

Renders a `<button type="button">` that goes to its page, with `aria-current="page"` on the current one and `tabIndex={0}` (so Safari focuses it on click).

| Prop | Type | Default | |
|---|---|---|---|
| `page` | `number` | — | Its page, 0-based (required) |

| Attribute | When |
|---|---|
| `data-current` | It is the current page |
| `data-page` | Always: its page, 1-based |

### PaginationNav.Overflow

Renders a `<select>` of the hidden pages, with an empty, hidden first option, so it shows nothing: draw your "…" over it. Choosing an option goes to that page. Name it with `aria-label`.

| Prop | Type | Default | |
|---|---|---|---|
| `from` | `number` | — | The first hidden page, 0-based (required) |
| `count` | `number` | — | How many pages it holds (required) |
| `renderPage` | `(page: number) => ReactNode` | the 1-based number | An option's text |

| Attribute | When |
|---|---|
| `data-disabled` | `disableOverflow` on `Root`, or you set `disabled` |

### PaginationNav.Status

Renders a `<div aria-live="polite" aria-atomic="true">`. Its text is yours: "Page 5 of 25", usually visually hidden.

### usePaginationNavContext()

Returns the state of the enclosing `Root`: `page` (0-based), `total`, `items`, `loop`, `disableOverflow`, `go(page)`, `step(-1 | 1)` and `stepDisabled(-1 | 1)`.

## Keyboard and accessibility

Every page, `Prev`, `Next` and overflow is a native button or select, so Tab moves through them and Enter, Space and the select's own keys work. The parts set `aria-current="page"`, `disabled` at the ends, and the polite live region.

You add:

- The landmark's name: `aria-label` on `Root`.
- Names for `Prev`, `Next` and each `Overflow` (`aria-label`), and the "…" drawn over each overflow with `aria-hidden="true"` and `pointer-events: none`.
- Words before each number for screen readers ("Page 4"), as the visually hidden text in the examples, and the `Status` text.
