# Pagination nav

Pagination nav moves between numbered pages: Previous, the page numbers, and Next. The pages that don't fit fold into "…" menus at either end. `page` is 0-based, as in Carbon.


HTML:

```html
<ui-pagination-nav total-items="25"></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={25} />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={25} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/pagination-nav
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-pagination-nav
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/pagination-nav.json
#    to its target:
#    components/ui/primitives/pagination-nav/pagination-nav.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-pagination-nav, icon-button, shared-element, shared-field, shared-localize, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-pagination-nav.json
#    to its target:
#    components/ui/react-tw/pagination-nav.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-i18n, core-pagination-nav, core-position, tw-i18n, tw-icon-button, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

`total-items` is the number of pages (Carbon's name).


HTML:

```html
<script type="module">import '@purpurabog/ui/pagination-nav';</script>

<ui-pagination-nav total-items="25"></ui-pagination-nav>
```

React:

```tsx
import { UiPaginationNav } from '@purpurabog/ui/react';

<UiPaginationNav totalItems={25} />
```

React + Tailwind:

```tsx
import { PaginationNav } from '@/components/ui/react-tw/pagination-nav';

<PaginationNav totalItems={25} />
```

## Pagination or pagination nav?

| Component | Use it when |
|---|---|
| [Pagination](https://parntengza.github.io/kanok-ui-docs/en/pagination/) | Under a data table: the user picks how many rows a page shows and sees "1–10 of 240 items". |
| Pagination nav | Numbered pages of content that reads like a book: search results, a long report, the pages of a scanned contract. |

## Starting page and changes

`page` is the current page, 0-based: `page="3"` shows page 4. `ui-change` fires after the user chose another page, with the 0-based page in `detail.page`.


HTML:

```html
<ui-pagination-nav id="pagination-nav-start" total-items="25" page="3"></ui-pagination-nav>
<p>Page: <output id="pagination-nav-start-out"></output></p>

<script type="module">
  const nav = document.getElementById('pagination-nav-start');
  const out = document.getElementById('pagination-nav-start-out');
  out.value = `${nav.page + 1} of ${nav.totalItems}`;
  nav.addEventListener('ui-change', (event) => (out.value = `${event.detail.page + 1} of ${nav.totalItems}`));
</script>
```

React:

```tsx
const [page, setPage] = useState(3);

<UiPaginationNav totalItems={25} page={page} onUiChange={(e) => setPage(e.detail.page)} />
<p>Page: <output>{page + 1} of 25</output></p>
```

React + Tailwind:

```tsx
const [page, setPage] = useState(3);

<PaginationNav totalItems={25} page={page} onChange={setPage} />
<p>Page: <output>{page + 1} of 25</output></p>
```

React + Tailwind also takes `defaultPage` for an uncontrolled start.

## Every page fits

With as many pages as `items-shown` or fewer, every number shows and there are no "…" menus.


HTML:

```html
<ui-pagination-nav total-items="5"></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={5} />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={5} />
```

## How many items show

`items-shown` (`itemsShown`) is how many page items the row holds, the "…" menus included: 10 by default, 4 at least. Lower it where the row has little room.


HTML:

```html
<ui-pagination-nav total-items="25" items-shown="5" page="12"></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={25} itemsShown={5} page={12} />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={25} itemsShown={5} defaultPage={12} />
```

On a window narrower than 320px, the row falls back to fewer items by itself.

## Wrap around

With `loop`, Previous on the first page goes to the last one, and Next on the last page to the first. Without it, they are disabled at the ends.


HTML:

```html
<ui-pagination-nav total-items="8" loop></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={8} loop />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={8} loop />
```

## Turn off the "…" menus

`disable-overflow` (`disableOverflow`) keeps the "…" in the row but stops it from opening. The user then moves with Previous, Next and the numbers shown.


HTML:

```html
<ui-pagination-nav total-items="25" page="12" disable-overflow></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={25} page={12} disableOverflow />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={25} defaultPage={12} disableOverflow />
```

## Sizes

`size`: `sm` 32px, `md` 40px, `lg` 48px (the default). Previous and Next follow the same size.


HTML:

```html
<ui-pagination-nav total-items="25" size="sm"></ui-pagination-nav>
<ui-pagination-nav total-items="25" size="md"></ui-pagination-nav>
<ui-pagination-nav total-items="25"></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={25} size="sm" />
<UiPaginationNav totalItems={25} size="md" />
<UiPaginationNav totalItems={25} />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={25} size="sm" />
<PaginationNav totalItems={25} size="md" />
<PaginationNav totalItems={25} />
```

## Tooltip placement

Previous and Next are icon buttons: their name shows as a tooltip on hover and focus, below them by default. `tooltip-placement` (`tooltipPlacement`) moves it, for example above a row that sits at the bottom of the window.


HTML:

```html
<ui-pagination-nav total-items="25" tooltip-placement="top"></ui-pagination-nav>
```

React:

```tsx
<UiPaginationNav totalItems={25} tooltipPlacement="top" />
```

React + Tailwind:

```tsx
<PaginationNav totalItems={25} tooltipPlacement="top" />
```

## Page through a list

The component only says which page to show; slicing the content is yours. Here 12 contracts show three per page.


HTML:

```html
<ol id="pagination-nav-list" start="1" style="margin: 0; padding-inline-start: 24px"></ol>
<ui-pagination-nav id="pagination-nav-records" total-items="4" size="md"></ui-pagination-nav>

<script type="module">
  const contracts = [
    'Office supplies', 'Cleaning services', 'Server lease', 'Car rental',
    'Printer maintenance', 'Security guards', 'Catering', 'Software licences',
    'Office lease', 'Legal advice', 'Translation', 'Courier services',
  ];
  const perPage = 3;
  const list = document.getElementById('pagination-nav-list');
  const nav = document.getElementById('pagination-nav-records');
  const show = (page) => {
    list.start = page * perPage + 1;
    list.replaceChildren(...contracts.slice(page * perPage, (page + 1) * perPage).map((name) => Object.assign(document.createElement('li'), { textContent: name })));
  };
  show(nav.page);
  nav.addEventListener('ui-change', (event) => show(event.detail.page));
</script>
```

React:

```tsx
// contracts as in the HTML tab
const perPage = 3;
const [page, setPage] = useState(0);

<ol start={page * perPage + 1}>
  {contracts.slice(page * perPage, (page + 1) * perPage).map((name) => <li key={name}>{name}</li>)}
</ol>
<UiPaginationNav totalItems={Math.ceil(contracts.length / perPage)} size="md" page={page} onUiChange={(e) => setPage(e.detail.page)} />
```

React + Tailwind:

```tsx
<ol start={page * perPage + 1}>
  {contracts.slice(page * perPage, (page + 1) * perPage).map((name) => <li key={name}>{name}</li>)}
</ol>
<PaginationNav totalItems={Math.ceil(contracts.length / perPage)} size="md" page={page} onChange={setPage} />
```

## Accessibility

- The row is a `<nav>` landmark named "Pagination" (translated), holding a list.
- Each page is a button that screen readers read as "Page 4"; the current one reads "Active, Page 4" and has `aria-current="page"`.
- Each "…" is a `<select>` named "Select page number": the keyboard and phones open it like any select.
- After a change, a polite live region says "Page 5 of 25".
- Previous and Next are icon buttons named "Previous" and "Next", with tooltips; they are disabled at the ends unless `loop` is on.

Unstyled React parts with the same behaviour: [Headless Pagination nav](https://parntengza.github.io/kanok-ui-docs/en/headless-pagination-nav/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-pagination-nav>` · React `UiPaginationNav`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `page` | `page` | `number` | `0` | The current page, 0-based (Carbon). |
| `total-items` | `totalItems` | `number` | `1` |  |
| `items-shown` | `itemsShown` | `number` | `10` | Page items in the row (at least 4). |
| `loop` | `loop` | `boolean` | `false` | Previous on the first page goes to the last, Next on the last to the first. |
| `disable-overflow` | `disableOverflow` | `boolean` | `false` | The "…" selects can't be opened. |
| `size` | `size` | `NavSize` | `'lg'` |  |
| `tooltip-placement` | `tooltipPlacement` | `TooltipPlacement` | `'bottom'` | Where Previous / Next show their tooltip. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-change` | `onUiChange` | detail: { page } (0-based) after the user chose a page |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The `<nav>` |
| `page` | Each page button |
| `overflow` | Each "…" select |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-button-radius` |  | Corner radius of the page buttons (the button setting) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |
| `--ui-pagination-nav-mark-height` |  | Height of the current page's underline (default 4px; Kanok: 2px) |


