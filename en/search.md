# Search

A search field lets people find or filter content by typing. Carbon hides its label and shows a magnifier instead; a clear button appears once there is text.


HTML:

```html
<ui-search label="Search contracts" placeholder="Search by name or number"></ui-search>
```

React:

```tsx
<UiSearch label="Search contracts" placeholder="Search by name or number" />
```

React + Tailwind:

```tsx
<Search label="Search contracts" placeholder="Search by name or number" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/search
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-search
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/search.json
#    to its target:
#    components/ui/primitives/search/search-skeleton.ts
#    components/ui/primitives/search/search.styles.ts
#    components/ui/primitives/search/search.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-search.json
#    to its target:
#    components/ui/react-tw/search.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-field, tw-i18n, tw-skeleton, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/search';</script>

<ui-search label="Search contracts" name="q"></ui-search>
```

React:

```tsx
import { UiSearch } from '@purpurabog/ui/react';

<UiSearch label="Search contracts" name="q" onInput={(e) => setQuery((e.target as HTMLInputElement).value)} onUiClear={() => setQuery('')} />
```

React + Tailwind:

```tsx
import { Search } from '@/components/ui/react-tw/search';

<Search label="Search contracts" name="q" value={query} onChange={(e) => setQuery(e.target.value)} />
```

- The element fires `input` on every keystroke, `change` when the value is committed (leaving the field, Enter) or cleared, and `ui-clear` after the clear button or Esc emptied it.
- In React + Tailwind, clearing empties the field with a real `input` event, so your `onChange` sees it; `onClear` runs after.
- Always give it a `label`, even though it doesn't show: it names the search landmark and the field ("Search" when you leave it out).

## Sizes

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px. Match the height of what sits next to it, such as a table toolbar or a button.


HTML:

```html
<ui-search label="Search" size="sm" placeholder="Small"></ui-search>
<ui-search label="Search" placeholder="Medium"></ui-search>
<ui-search label="Search" size="lg" placeholder="Large"></ui-search>
```

React:

```tsx
<UiSearch label="Search" size="sm" placeholder="Small" />
<UiSearch label="Search" placeholder="Medium" />
<UiSearch label="Search" size="lg" placeholder="Large" />
```

React + Tailwind:

```tsx
<Search label="Search" size="sm" placeholder="Small" />
<Search label="Search" placeholder="Medium" />
<Search label="Search" size="lg" placeholder="Large" />
```

## Clear the text

The × button appears once there is text and empties the field, keeping focus in it. Esc does the same from the keyboard. On an empty field Esc does nothing, so a dialog around the search can still close on Esc. `clear-label` renames the button ("Clear search input" by default, translated).


HTML:

```html
<ui-search label="Search tenants" value="Somchai" clear-label="Clear tenant search"></ui-search>
```

React:

```tsx
<UiSearch label="Search tenants" value="Somchai" clearLabel="Clear tenant search" onUiClear={() => resetResults()} />
```

React + Tailwind:

```tsx
<Search label="Search tenants" defaultValue="Somchai" clearLabel="Clear tenant search" onClear={() => resetResults()} />
```

## Filter a list as you type

For a short list that is already on the page, filter it on `input`. It fires on every keystroke and when the field is cleared, so one listener keeps the list in step.


HTML:

```html
<ui-search id="search-departments" label="Filter departments" placeholder="Filter departments"></ui-search>
<ul id="search-departments-list">
  <li>Legal</li>
  <li>Finance</li>
  <li>Procurement</li>
  <li>Human resources</li>
  <li>Facilities</li>
</ul>
<p>Showing <output id="search-departments-out">5</output> of 5</p>
<script type="module">
  const search = document.getElementById('search-departments');
  const items = [...document.querySelectorAll('#search-departments-list li')];
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let shown = 0;
    for (const item of items) {
      item.hidden = !item.textContent.toLowerCase().includes(query);
      if (!item.hidden) shown += 1;
    }
    document.getElementById('search-departments-out').textContent = shown;
  });
</script>
```

React:

```tsx
const shown = departments.filter((name) => name.toLowerCase().includes(query.trim().toLowerCase()));

<UiSearch label="Filter departments" placeholder="Filter departments" onInput={(e) => setQuery((e.target as HTMLInputElement).value)} />
<ul>{shown.map((name) => <li key={name}>{name}</li>)}</ul>
```

React + Tailwind:

```tsx
const shown = departments.filter((name) => name.toLowerCase().includes(query.trim().toLowerCase()));

<Search label="Filter departments" placeholder="Filter departments" value={query} onChange={(e) => setQuery(e.target.value)} />
<ul>{shown.map((name) => <li key={name}>{name}</li>)}</ul>
```

## Expandable search

`expandable` (Carbon's `ExpandableSearch`) shows only the magnifier until someone clicks it or presses Enter or Space; then it opens to its full width with focus in the field. Leaving it empty, or Esc on an empty field, closes it again. `expanded` is the state: set it to open the search from your code. Each open or close fires `ui-toggle` with `detail.expanded`.


HTML:

```html
<ui-search label="Search the table" expandable></ui-search>
```

React:

```tsx
<UiSearch label="Search the table" expandable onUiToggle={(e) => setOpen(e.detail.expanded)} />
```

React + Tailwind:

```tsx
// or <Search expandable … />
<ExpandableSearch label="Search the table" onExpandedChange={setOpen} />
```

The magnifier is a button named by the `label`, with the label as its tooltip. `ExpandableSearch` comes with the same `tw-search` file.

## Open with an earlier search

An expandable search with text stays open: it closes only when it's empty. Set `expanded` and `value` together to show a search the user ran before, such as a table filter kept in the address. Clear it and leave the field, and it closes.


HTML:

```html
<ui-search id="search-table" label="Search the table" expandable expanded value="lease"></ui-search>
<p>Open: <output id="search-table-out">yes</output></p>
<script type="module">
  document.getElementById('search-table').addEventListener('ui-toggle', (event) => {
    document.getElementById('search-table-out').textContent = event.detail.expanded ? 'yes' : 'no';
  });
</script>
```

React:

```tsx
<UiSearch label="Search the table" expandable expanded={open} value={query} onUiToggle={(e) => setOpen(e.detail.expanded)} />
```

React + Tailwind:

```tsx
<ExpandableSearch label="Search the table" defaultExpanded defaultValue="lease" onExpandedChange={setOpen} />
```

## Fluid

`fluid` (Carbon's `FluidSearch`), or a `<ui-fluid-form>` around it, shows the label inside a 64px box, so the search lines up with the other fluid fields of a form.


HTML:

```html
<ui-search label="Search suppliers" name="supplier" placeholder="Name or tax ID" fluid></ui-search>
```

React:

```tsx
<UiSearch label="Search suppliers" name="supplier" placeholder="Name or tax ID" fluid />
```

React + Tailwind:

```tsx
<Search label="Search suppliers" name="supplier" placeholder="Name or tax ID" fluid />
```

## Outlined (Kanok design)

In the Kanok design, fields are filled by default: a soft grey fill, no edge. Put `data-field-variant="outlined"` on an element around the field (a `<form>`, or `<html>` for the whole app) for a 1px edge on no fill; focus is still the soft blue halo. The attribute does nothing in the Carbon design, so the example below sits inside `data-design="kanok"`. See [Kanok design](https://parntengza.github.io/kanok-ui-docs/en/kanok/#outlined-fields) for the details.


HTML:

```html
<div data-design="kanok" data-theme="paper" data-field-variant="outlined">
  <ui-search label="Search contracts" placeholder="Search by name or number"></ui-search>
</div>
```

React:

```tsx
<div data-field-variant="outlined">
  <UiSearch label="Search contracts" placeholder="Search by name or number" />
</div>
```

React + Tailwind:

```tsx
<div data-field-variant="outlined">
  <Search label="Search contracts" placeholder="Search by name or number" />
</div>
```

## Read-only and disabled

`readonly` keeps the text, still submits it and hides the clear button: use it to show the search behind a saved report. `disabled` greys the field out, for a search that can't be used yet.


HTML:

```html
<ui-search label="Search contracts" name="q" value="lease" readonly></ui-search>
<ui-search label="Search archived contracts" value="2019" disabled></ui-search>
```

React:

```tsx
<UiSearch label="Search contracts" name="q" value="lease" readonly />
<UiSearch label="Search archived contracts" value="2019" disabled />
```

React + Tailwind:

```tsx
<Search label="Search contracts" name="q" defaultValue="lease" readOnly />
<Search label="Search archived contracts" defaultValue="2019" disabled />
```

## In a form

- Give it a `name` and it submits like `<input type="search">`. Enter submits the form it sits in.
- `required`, `pattern`, `minlength` and `maxlength` work as on a native search input. Carbon's search has no error line, so a failed check shows the browser's bubble.
- `readonly` keeps the text and hides the clear button. `disabled` greys the field out.
- `fluid`, or a fluid form around it, shows the label inside a 64px box (Carbon's `FluidSearch`).

Type at least two characters and press Enter.


HTML:

```html
<form id="search-form" method="dialog">
  <ui-search label="Search contracts" name="q" minlength="2" placeholder="Contract name or number"></ui-search>
</form>
<p>Searched for: <output id="search-form-out"></output></p>
<script type="module">
  const form = document.getElementById('search-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('search-form-out').textContent = new FormData(form).get('q');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); runSearch(new FormData(e.currentTarget).get('q')); }}>
  <UiSearch label="Search contracts" name="q" minlength={2} placeholder="Contract name or number" />
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); runSearch(new FormData(e.currentTarget).get('q')); }}>
  <Search label="Search contracts" name="q" minLength={2} placeholder="Contract name or number" />
</form>
```

## Skeleton

While the results load, `<ui-search-skeleton>` keeps the search's place: one bar at its `size`, or a fluid box with `fluid`. Screen readers skip it, so say "loading" on the area around it (for example `aria-busy="true"`).


HTML:

```html
<ui-search-skeleton></ui-search-skeleton>
<ui-search-skeleton fluid></ui-search-skeleton>
```

React:

```tsx
import { UiSearchSkeleton } from '@purpurabog/ui/react';

<UiSearchSkeleton />
<UiSearchSkeleton fluid />
```

React + Tailwind:

```tsx
import { SearchSkeleton } from '@/components/ui/react-tw/search';

<SearchSkeleton />
<SearchSkeleton fluid />
```

## Keyboard

| Key | What it does |
|---|---|
| Esc | Clears the text and keeps focus in the field; on an empty expandable search, closes it and focuses the magnifier |
| Enter | Commits the value and submits the form the search sits in |
| Enter or Space on the magnifier | Opens an expandable search |
| Tab | Moves to the clear button while there is text (it's skipped when there is nothing to clear) |

## Accessibility

- It's a `role="search"` landmark named by its label, so screen reader users can jump to it.
- The label is hidden on screen, as in Carbon, but the field and the landmark use it. `aria-label` on the element doesn't reach the inner input; use `label`.
- Pressing the clear button keeps focus in the field, so keyboard users can type again right away.

Unstyled React parts with the same behaviour: [Headless Search](https://parntengza.github.io/kanok-ui-docs/en/headless-search/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-search>` · React `UiSearch`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Accessible name of the field (visually hidden, as in Carbon). |
| `placeholder` | `placeholder` | `string` | `''` |  |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `SearchSize` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `autocomplete` | `autocomplete` | `string` | `'off'` |  |
| `inputmode` | `inputmode` | `string` | `''` | Passed to the text box: the virtual keyboard to show (`numeric`, `decimal`, `email`, `tel`, `url`, `search`…). |
| `enterkeyhint` | `enterkeyhint` | `string` | `''` | Passed to the text box: the label of the virtual keyboard's Enter key (`search`, `send`, `next`, `done`…). |
| `clear-label` | `clearLabel` | `string` | `''` | Accessible name of the clear button. |
| `required` | `required` | `boolean` | `false` | Constraint validation like `<input type="search">`: blocks submit and reports in the browser's bubble (Carbon Search has no error line). |
| `pattern` | `pattern` | `string` | `''` |  |
| `minlength` | `minlength` | `number \| undefined` |  |  |
| `maxlength` | `maxlength` | `number \| undefined` |  |  |
| `readonly` | `readonly` | `boolean` | `false` | Value can be selected and submitted but not changed; no clear button. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidSearch`: the label inside a 64px box. `<ui-fluid-form>` sets it for every field inside. |
| `expandable` | `expandable` | `boolean` | `false` | Carbon `ExpandableSearch`: collapsed to its magnifier until opened. |
| `expanded` | `expanded` | `boolean` | `false` | Whether an expandable search is open. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid until cleared with ''. |
| `clear()` | Empties the field, keeps focus in it and announces the change (`input`, `change`, `ui-clear`). |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | `onChange` | When the value is committed (blur / Enter) or cleared |
| `ui-toggle` | `onUiToggle` | detail: { expanded } when an expandable search opens or collapses |
| `input` | `onInput` | On every keystroke |
| `ui-clear` | `onUiClear` | After the clear button or Esc emptied the field |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The role=search wrapper |
| `input` | The native search input |
| `label` | The label (visually hidden, as in Carbon; shown inside the box when `fluid`) |
| `magnifier` | The search icon |
| `clear-button` | The clear button |
| `magnifier-button` | The magnifier of an expandable search |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-border` |  | Border on every side of the box (default none: Carbon's underline only; Kanok: a 1px outline) |
| `--ui-field-disabled-border-color` |  | Border colour when disabled (default: the underline transparent) |
| `--ui-field-readonly-border-color` |  | Border colour when read-only (default: a hairline underline) |
| `--ui-field-radius` |  | Corner radius of the box (default 0; Kanok: 6px) |
| `--ui-field-background` |  | Fill of the box (default `--ui-surface-1`; Kanok: transparent) |
| `--ui-label-font` |  | Font of the label (default `--ui-font-caption`; Kanok: 14px semibold) |
| `--ui-label-color` |  | Colour of the label (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |


