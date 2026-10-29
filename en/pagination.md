# Pagination

Pagination splits a long list into pages: "Items per page", the range shown, a page select and previous / next buttons (Carbon `Pagination`). Put it under a table or a list. It only holds the page and the page size; showing the right rows is your code's.


HTML:

```html
<ui-pagination total-items="95"></ui-pagination>
```

React:

```tsx
<UiPagination totalItems={95} />
```

React + Tailwind:

```tsx
<Pagination totalItems={95} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/pagination
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-pagination
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/pagination.json
#    to its target:
#    components/ui/primitives/pagination/pagination.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-pagination, shared-element, shared-field, shared-localize, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-pagination.json
#    to its target:
#    components/ui/react-tw/pagination.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-i18n, core-pagination, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/pagination';</script>

<ui-pagination total-items="95" page-size="25"></ui-pagination>
```

React:

```tsx
import { UiPagination } from '@purpurabog/ui/react';

<UiPagination totalItems={95} pageSize={25} />
```

React + Tailwind:

```tsx
import { Pagination } from '@/components/ui/react-tw/pagination';

<Pagination totalItems={95} defaultPageSize={25} />
```

## Pagination or pagination nav?

| Component | Use it when |
|---|---|
| Pagination | Under a table or a list of data: the user picks the page size and jumps to any page. The total may be unknown. |
| [Pagination nav](https://parntengza.github.io/kanok-ui-docs/en/pagination-nav/) | Page numbers as links, for search results or an article list, where each page has its own URL. |

A [data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/#pages) has this pagination built in: set its `page-size`.

## Page and page size

`page` (from 1) and `page-size` set where the bar starts; `page-sizes` lists the page-size choices (default `10,25,50`). `ui-change` fires with `{ page, pageSize }` after the user changes either. A new page size goes back to page 1, as in Carbon.


HTML:

```html
<ui-pagination id="pagination-change" total-items="230" page="3" page-size="20" page-sizes="20,50,100"></ui-pagination>
<p>Page: <output id="pagination-change-page">3</output>, page size: <output id="pagination-change-size">20</output></p>

<script type="module">
  const bar = document.getElementById('pagination-change');
  bar.addEventListener('ui-change', (event) => {
    document.getElementById('pagination-change-page').value = event.detail.page;
    document.getElementById('pagination-change-size').value = event.detail.pageSize;
  });
</script>
```

React:

```tsx
const [paging, setPaging] = useState({ page: 3, pageSize: 20 });

<UiPagination totalItems={230} page={paging.page} pageSize={paging.pageSize} pageSizes="20,50,100" onUiChange={(e) => setPaging(e.detail)} />
<p>Page: <output>{paging.page}</output>, page size: <output>{paging.pageSize}</output></p>
```

React + Tailwind:

```tsx
const [paging, setPaging] = useState({ page: 3, pageSize: 20 });

<Pagination totalItems={230} page={paging.page} pageSize={paging.pageSize} pageSizes={[20, 50, 100]} onChange={setPaging} />
<p>Page: <output>{paging.page}</output>, page size: <output>{paging.pageSize}</output></p>
```

React + Tailwind takes `pageSizes` as an array of numbers, and `defaultPage` / `defaultPageSize` when the bar keeps the state itself.

## Show the rows of the page

Slice your rows with the page and the page size from `ui-change`. When the data comes from a server, ask it for that page instead and keep `total-items` at the server's count.


HTML:

```html
<ol id="pagination-list" style="margin: 0; padding-inline-start: 24px"></ol>
<ui-pagination id="pagination-list-bar" total-items="23" page-size="5" page-sizes="5,10"></ui-pagination>

<script type="module">
  const contracts = Array.from({ length: 23 }, (_, i) => `Contract ${String(i + 1).padStart(3, '0')}`);
  const list = document.getElementById('pagination-list');
  const bar = document.getElementById('pagination-list-bar');
  const show = ({ page, pageSize }) => {
    const start = (page - 1) * pageSize;
    list.start = start + 1;
    list.replaceChildren(...contracts.slice(start, start + pageSize).map((name) => Object.assign(document.createElement('li'), { textContent: name })));
  };
  show({ page: 1, pageSize: 5 });
  bar.addEventListener('ui-change', (event) => show(event.detail));
</script>
```

React:

```tsx
const contracts = Array.from({ length: 23 }, (_, i) => `Contract ${String(i + 1).padStart(3, '0')}`);
const [paging, setPaging] = useState({ page: 1, pageSize: 5 });
const start = (paging.page - 1) * paging.pageSize;

<ol start={start + 1}>
  {contracts.slice(start, start + paging.pageSize).map((name) => <li key={name}>{name}</li>)}
</ol>
<UiPagination totalItems={contracts.length} page={paging.page} pageSize={paging.pageSize} pageSizes="5,10" onUiChange={(e) => setPaging(e.detail)} />
```

React + Tailwind:

```tsx
const contracts = Array.from({ length: 23 }, (_, i) => `Contract ${String(i + 1).padStart(3, '0')}`);
const [paging, setPaging] = useState({ page: 1, pageSize: 5 });
const start = (paging.page - 1) * paging.pageSize;

<ol start={start + 1}>
  {contracts.slice(start, start + paging.pageSize).map((name) => <li key={name}>{name}</li>)}
</ol>
<Pagination totalItems={contracts.length} page={paging.page} pageSize={paging.pageSize} pageSizes={[5, 10]} onChange={setPaging} />
```

## Sizes

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px. Match the rows of the table above it.


HTML:

```html
<ui-pagination size="sm" total-items="40"></ui-pagination>
<ui-pagination total-items="40"></ui-pagination>
<ui-pagination size="lg" total-items="40"></ui-pagination>
```

React:

```tsx
<UiPagination size="sm" totalItems={40} />
<UiPagination totalItems={40} />
<UiPagination size="lg" totalItems={40} />
```

React + Tailwind:

```tsx
<Pagination size="sm" totalItems={40} />
<Pagination totalItems={40} />
<Pagination size="lg" totalItems={40} />
```

## A fixed page size

An empty `page-sizes` hides "Items per page" when the page size is fixed, for example in a narrow panel.


HTML:

```html
<div style="max-width: 480px">
  <ui-pagination total-items="48" page-size="12" page-sizes=""></ui-pagination>
</div>
```

React:

```tsx
<UiPagination totalItems={48} pageSize={12} pageSizes="" />
```

React + Tailwind:

```tsx
<Pagination totalItems={48} defaultPageSize={12} pageSizes={[]} />
```

## Total unknown

With `pages-unknown` the bar doesn't need `total-items`: the page select becomes plain text ("page 3") and the range has no total. Use it with cursor-based APIs that only say whether there is a next page. Set `is-last-page` when the server says there is none, so Next disables.


HTML:

```html
<ui-pagination id="pagination-cursor" pages-unknown page-size="25" page-sizes=""></ui-pagination>
<p>The demo's server has 4 pages.</p>

<script type="module">
  const bar = document.getElementById('pagination-cursor');
  bar.addEventListener('ui-change', (event) => {
    // ask the server for the page; here, page 4 is the last one
    bar.isLastPage = event.detail.page >= 4;
  });
</script>
```

React:

```tsx
const [page, setPage] = useState(1);
const [last, setLast] = useState(false);

<UiPagination pagesUnknown isLastPage={last} page={page} pageSize={25} pageSizes="" onUiChange={async (e) => {
  setPage(e.detail.page);
  setLast(!(await fetchPage(e.detail.page)).hasNext);
}} />
```

React + Tailwind:

```tsx
<Pagination pagesUnknown isLastPage={last} page={page} defaultPageSize={25} pageSizes={[]} onChange={async ({ page }) => {
  setPage(page);
  setLast(!(await fetchPage(page)).hasNext);
}} />
```

## Texts

Every text can be replaced. The range and page texts are templates: `{min}`, `{max}`, `{total}` and `{page}` are filled in. Without them the bar uses its translation, in English or Thai from the page's `lang`. An empty text shows nothing, as in Carbon.


HTML:

```html
<ui-pagination
  total-items="57"
  items-per-page-text="Contracts per page:"
  item-range-text="{min}–{max} of {total} contracts"
  page-range-text="of {total}"
  page-text="Page {page}"
  page-select-label="Go to page"
  previous-label="Previous contracts"
  next-label="Next contracts"
></ui-pagination>
```

React:

```tsx
<UiPagination
  totalItems={57}
  itemsPerPageText="Contracts per page:"
  itemRangeText="{min}–{max} of {total} contracts"
  pageRangeText="of {total}"
  pageText="Page {page}"
  pageSelectLabel="Go to page"
  previousLabel="Previous contracts"
  nextLabel="Next contracts"
/>
```

React + Tailwind:

```tsx
<Pagination
  totalItems={57}
  itemsPerPageText="Contracts per page:"
  itemRangeText="{min}–{max} of {total} contracts"
  pageRangeText="of {total}"
  pageText="Page {page}"
  pageSelectLabel="Go to page"
  previousLabel="Previous contracts"
  nextLabel="Next contracts"
/>
```

`item-text` is the range while the total is unknown (`{min}–{max} items`).

## Disabled

`disabled` turns off both selects and both buttons, for example while the next page loads.


HTML:

```html
<ui-pagination total-items="95" page="2" disabled></ui-pagination>
```

React:

```tsx
<UiPagination totalItems={95} page={2} disabled />
```

React + Tailwind:

```tsx
<Pagination totalItems={95} defaultPage={2} disabled />
```

## Accessibility

- The page-size select has a visible label; the page select is named "Page number" (`page-select-label`).
- The arrows are named "Previous page" and "Next page" (`previous-label`, `next-label`). On the first or last page the pressed arrow disables, and focus moves to the other one instead of falling to the page.
- The selects are native, so the browser's own keys and the phone's picker work.
- Tell screen reader users that the rows changed, for example with a polite status line ("Showing 21–40 of 230").

Unstyled React parts with the same behaviour: [Headless Pagination](https://parntengza.github.io/kanok-ui-docs/en/headless-pagination/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-pagination>` · React `UiPagination`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `page` | `page` | `number` | `1` | 1-based current page. |
| `page-size` | `pageSize` | `number` | `10` |  |
| `page-sizes` | `pageSizes` | `string` | `'10,25,50'` | Choices for the page-size select, e.g. "10,25,50". Empty hides the select. |
| `total-items` | `totalItems` | `number` | `0` |  |
| `pages-unknown` | `pagesUnknown` | `boolean` | `false` | Total unknown: no page select, next never disabled (Carbon `pagesUnknown`). |
| `is-last-page` | `isLastPage` | `boolean` | `false` | With `pages-unknown`: this is the last page, so Next is disabled (Carbon `isLastPage`; cursor-based APIs). |
| `size` | `size` | `PaginationSize` | `'md'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `items-per-page-text` | `itemsPerPageText` | `string \| undefined` |  |  |
| `item-range-text` | `itemRangeText` | `string \| undefined` |  |  |
| `item-text` | `itemText` | `string \| undefined` |  | Range text while the total is unknown. |
| `page-range-text` | `pageRangeText` | `string \| undefined` |  |  |
| `page-text` | `pageText` | `string \| undefined` |  | Label of each page option and the page text while unknown. |
| `page-select-label` | `pageSelectLabel` | `string \| undefined` |  |  |
| `previous-label` | `previousLabel` | `string \| undefined` |  |  |
| `next-label` | `nextLabel` | `string \| undefined` |  |  |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the first control that shows (the page-size select; narrow, an arrow). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-change` | `onUiChange` | detail: { page, pageSize } after the user changed either |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The bar |
| `page-size-select` | The items-per-page select |
| `range` | The item range text |
| `page-select` | The page select |
| `pages` | The "of N pages" text |
| `previous-button` | Previous page |
| `next-button` | Next page |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-pagination-border` |  | / --ui-pagination-background / --ui-pagination-divider - The bar's top rule, fill and the rules between its parts (default hairline, the layer, hairline; Kanok: open, undivided) |
| `--ui-pagination-gap` |  | / --ui-pagination-range-ink - Space within each side and the range text colour (default none, ink) |
| `--ui-pagination-select-border` |  | / --ui-pagination-select-radius / --ui-pagination-button-radius - The selects' outline and corners, the arrows' corners (default none, 0, 0; Kanok: outlined 6px selects, round arrows) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |


