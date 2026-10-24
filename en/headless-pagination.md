# Headless Pagination

`Pagination` is the behaviour of the styled [Pagination](https://parntengza.github.io/kanok-ui-docs/en/pagination/) as unstyled React parts. `Root` holds the page, the page size and the total; inside it go a `PageSizeSelect` (a new size goes back to page 1, as in Carbon), a `PageSelect` (one option per page) and `Prev` / `Next` buttons that disable at the ends and hand focus to each other.

You own the markup: the labels, the range text ("1–10 of 95 items"), the icons and every style. `usePaginationContext()` gives you the numbers for the texts.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Pagination } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Pagination } from '@purpurabog/ui/headless';

function Range() {
  const { min, max, totalItems } = Pagination.usePaginationContext();
  return <span className="px-4 text-ink">{min}–{max} of {totalItems} items</span>;
}

const select = 'h-10 cursor-pointer border-x border-hairline bg-transparent px-4 text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
const arrow = 'size-10 border-s border-hairline text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';

export default function Example() {
  return (
    <Pagination.Root totalItems={95} className="flex items-center justify-between border-t border-hairline bg-surface-1 text-sm">
      <div className="flex items-center">
        <label htmlFor="pagination-size" className="ps-4 pe-2 text-ink-muted">Items per page:</label>
        <Pagination.PageSizeSelect id="pagination-size" pageSizes={[10, 25, 50]} className={select} />
        <Range />
      </div>
      <div className="flex items-center">
        <Pagination.PageSelect aria-label="Page number" className={select} />
        <Pagination.Prev aria-label="Previous page" className={arrow}>‹</Pagination.Prev>
        <Pagination.Next aria-label="Next page" className={arrow}>›</Pagination.Next>
      </div>
    </Pagination.Root>
  );
}
```

## Anatomy

```tsx
<Pagination.Root>
  <label />
  <Pagination.PageSizeSelect />
  <Pagination.PageSelect />
  <Pagination.Prev />
  <Pagination.Next />
</Pagination.Root>
```

Every part is optional: a bar with only `Prev` and `Next` works too.

## The texts

`usePaginationContext()` returns `min` and `max` (the first and last item the page shows), `totalItems`, `page`, `pageSize` and `pageCount`. Write them in your own words and language. `PageSelect` takes `renderPage` for the text of each option.


React (live React example):

```tsx
import { Pagination } from '@purpurabog/ui/headless';

function Status() {
  const { min, max, totalItems, page, pageCount } = Pagination.usePaginationContext();
  return (
    <p className="text-sm text-ink">
      Contracts {min}–{max} of {totalItems} · page {page} of {pageCount}
    </p>
  );
}

const button = 'h-8 border border-border-strong-1 px-3 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <Pagination.Root totalItems={57} defaultPageSize={20} className="grid max-w-md gap-3">
      <Status />
      <div className="flex items-center gap-2">
        <Pagination.Prev className={button}>Previous</Pagination.Prev>
        <Pagination.PageSelect aria-label="Go to page" renderPage={(p) => `Page ${p}`} className="h-8 border-b border-border-strong-1 bg-field-1 px-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-focus" />
        <Pagination.Next className={button}>Next</Pagination.Next>
      </div>
    </Pagination.Root>
  );
}
```

## Show the rows of the page

Hold `page` and `pageSize` yourself with `onChange`, and slice your rows with them (or ask the server for that page).


React (live React example):

```tsx
import { useState } from 'react';
import { Pagination } from '@purpurabog/ui/headless';

const contracts = Array.from({ length: 23 }, (_, i) => `Contract ${String(i + 1).padStart(3, '0')}`);
const arrow = 'size-8 text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';

export default function Example() {
  const [paging, setPaging] = useState({ page: 1, pageSize: 5 });
  const start = (paging.page - 1) * paging.pageSize;
  return (
    <div className="grid max-w-sm gap-2 text-sm text-ink">
      <ol start={start + 1} className="list-decimal ps-6">
        {contracts.slice(start, start + paging.pageSize).map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
      <Pagination.Root totalItems={contracts.length} page={paging.page} pageSize={paging.pageSize} onChange={setPaging} className="flex items-center gap-2 border-t border-hairline pt-2">
        <label htmlFor="pagination-rows-size" className="text-ink-muted">Per page</label>
        <Pagination.PageSizeSelect id="pagination-rows-size" pageSizes={[5, 10]} className="h-8 bg-field-1 px-2 focus-visible:outline-2 focus-visible:outline-focus" />
        <span className="ms-auto" />
        <Pagination.Prev aria-label="Previous page" className={arrow}>‹</Pagination.Prev>
        <Pagination.Next aria-label="Next page" className={arrow}>›</Pagination.Next>
      </Pagination.Root>
      <p className="text-xs text-ink-muted">Page {paging.page}, page size {paging.pageSize}</p>
    </div>
  );
}
```

## Total unknown

With `pagesUnknown`, `Root` doesn't need `totalItems` and has no last page: render no `PageSelect`, and set `isLastPage` when your cursor-based API says there is no next page.


React (live React example):

```tsx
import { useState } from 'react';
import { Pagination } from '@purpurabog/ui/headless';

const button = 'h-8 border border-border-strong-1 px-3 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-ink-disabled';

function PageText() {
  const { page, min, max } = Pagination.usePaginationContext();
  return <span className="text-sm text-ink">Page {page} · items {min}–{max}</span>;
}

export default function Example() {
  const [page, setPage] = useState(1);
  return (
    <Pagination.Root pagesUnknown isLastPage={page >= 4} page={page} pageSize={25} onChange={(change) => setPage(change.page)} className="flex items-center gap-3">
      <Pagination.Prev className={button}>Previous</Pagination.Prev>
      <PageText />
      <Pagination.Next className={button}>Next</Pagination.Next>
    </Pagination.Root>
  );
}
```

Here the "server" has four pages: `isLastPage` turns true on page 4.

## Style it

Every part has `data-disabled` while it can't be used: `Prev` on the first page, `Next` on the last, and all of them when `Root` is `disabled`.


React (live React example):

```tsx
import { useState } from 'react';
import { Pagination } from '@purpurabog/ui/headless';

const select = 'h-10 cursor-pointer border-x border-hairline bg-transparent px-4 text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';
const arrow = 'size-10 border-s border-hairline text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';

export default function Example() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="grid gap-3">
      <Pagination.Root totalItems={95} disabled={disabled} className="flex items-center justify-end border-t border-hairline bg-surface-1 text-sm data-disabled:opacity-75">
        <Pagination.PageSelect aria-label="Page number" className={select} />
        <Pagination.Prev aria-label="Previous page" className={arrow}>‹</Pagination.Prev>
        <Pagination.Next aria-label="Next page" className={arrow}>›</Pagination.Next>
      </Pagination.Root>
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
        disabled
      </label>
    </div>
  );
}
```
```css
.pagination select:hover,
.pagination button:hover { background: #e8e8e8; }
.pagination [data-disabled] { color: #c6c6c6; cursor: not-allowed; }
.pagination [data-disabled]:hover { background: transparent; }
```

## Parts

### Pagination.Root

Renders a `<div>` around the parts and gives them its state. It takes every `<div>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `page` | `number` | | The page, from 1 (controlled) |
| `defaultPage` | `number` | `1` | The starting page (uncontrolled) |
| `pageSize` | `number` | | Items per page (controlled) |
| `defaultPageSize` | `number` | `10` | The starting page size (uncontrolled) |
| `totalItems` | `number` | `0` | Items across every page |
| `pagesUnknown` | `boolean` | `false` | No page count: `Next` stops only with `isLastPage` |
| `isLastPage` | `boolean` | `false` | With `pagesUnknown`: this is the last page |
| `disabled` | `boolean` | `false` | Disables every select and button |
| `onChange` | `(change: { page, pageSize }) => void` | | After the user changed the page or the page size |

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` is set |

`Pagination.usePaginationContext()` returns `page`, `pageSize`, `totalItems`, `pageCount`, `min`, `max`, `atFirst`, `atLast`, `pagesUnknown`, `disabled`, and `goTo(page)`, `setPageSize(size)`, `step(1 | -1)` to any component inside `Root`.

### Pagination.PageSizeSelect

Renders a `<select>` of page sizes; give it a `<label>`. A new size goes back to page 1. It takes every `<select>` prop except `value` and `defaultValue`.

| Prop | Type | Default | |
|---|---|---|---|
| `pageSizes` | `readonly number[]` | `[]` | The choices, one `<option>` each (unless you pass your own `<option>` children) |

| Attribute | When |
|---|---|
| `data-disabled` | `Root` or the select is disabled |

### Pagination.PageSelect

Renders a `<select>` with one option per page; name it with `aria-label`. It takes every `<select>` prop except `value`, `defaultValue` and `children`.

| Prop | Type | Default | |
|---|---|---|---|
| `renderPage` | `(page: number) => ReactNode` | `String` | The text of each page's option |

| Attribute | When |
|---|---|
| `data-disabled` | `Root` or the select is disabled |

### Pagination.Prev, Pagination.Next

Each renders a `<button type="button">` that steps one page. Name icon-only buttons with `aria-label`.

| Attribute | When |
|---|---|
| `data-disabled` | On the first page (`Prev`), on the last page (`Next`), or `Root` is disabled |

## Keyboard and accessibility

- The selects are native: the browser's keys and the phone's picker work.
- `Prev` and `Next` are buttons in the Tab order (`tabIndex={0}`, as Carbon, so Safari focuses them on click). When the pressed arrow disables at the first or last page, focus moves to the other arrow.
- You add the page-size `<label>`, the `aria-label` of the page select and of icon-only arrows, and the range text.
- Tell screen reader users that the rows changed, for example with a polite status line.
