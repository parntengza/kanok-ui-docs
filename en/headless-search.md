# Headless Search

`Search` is the behaviour of the styled [Search](https://parntengza.github.io/kanok-ui-docs/en/search/) as unstyled React parts: a `role="search"` landmark named by its label, an `<input type="search">`, a clear button, and the magnifier button of an expandable search. The parts handle Esc, where focus goes after a clear, open or close, and when the clear button is in the Tab order. An uncontrolled field goes back to `defaultValue` when its form resets.

You own the markup: the icons, how the label is hidden, the button names and every style. The parts set `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Search } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { Search } from '@purpurabog/ui/headless';

export default function Example() {
  const [query, setQuery] = useState('');
  return (
    <div className="grid max-w-sm gap-2">
      <Search.Root value={query}>
        <Search.Landmark className="grid gap-2">
          <Search.Label className="text-xs text-ink-muted">Search contracts</Search.Label>
          <div className="flex border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1">
            <Search.Input
              name="q"
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus [&::-webkit-search-cancel-button]:appearance-none"
            />
            <Search.Clear
              aria-label="Clear search input"
              className="size-10 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-hidden:invisible"
            >
              ×
            </Search.Clear>
          </div>
        </Search.Landmark>
      </Search.Root>
      <p className="text-xs text-ink-muted">Value: {query}</p>
    </div>
  );
}
```

- `value`, `defaultValue`, `disabled` and `readOnly` go on `Root`, not on `Input`.
- Clearing empties the field with a real `input` event, so your `onChange` sees it; `onClear` runs after.
- Always render `Label`, even when you hide it: it names the landmark and the input.

## Anatomy

```tsx
<Search.Root>
  <Search.Landmark>
    <Search.Label />
    <Search.Trigger /> {/* expandable only */}
    <Search.Input />
    <Search.Clear />
  </Search.Landmark>
</Search.Root>
```

## Clear the text

`Clear` empties the field and keeps focus in it. Esc in a filled field does the same. On an empty field Esc does nothing, so a dialog around the search can still close on Esc. While there is nothing to clear (the field is empty or read-only), `Clear` is out of the Tab order and has `data-hidden`; hide it with your CSS.


React (live React example):

```tsx
import { useState } from 'react';
import { Search } from '@purpurabog/ui/headless';

export default function Example() {
  const [cleared, setCleared] = useState(0);
  return (
    <div className="grid max-w-sm gap-2">
      <Search.Root defaultValue="Somchai" onClear={() => setCleared((n) => n + 1)}>
        <Search.Landmark className="flex border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1">
          <Search.Label className="sr-only">Search tenants</Search.Label>
          <Search.Input
            placeholder="Search tenants"
            className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus [&::-webkit-search-cancel-button]:appearance-none"
          />
          {/* data-hidden while there is nothing to clear */}
          <Search.Clear
            aria-label="Clear tenant search"
            className="size-10 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-hidden:invisible"
          >
            ×
          </Search.Clear>
        </Search.Landmark>
      </Search.Root>
      <p className="text-xs text-ink-muted">onClear ran {cleared} times</p>
    </div>
  );
}
```

## Expandable search

`expandable` (Carbon's `ExpandableSearch`) collapses the search to its `Trigger` until someone clicks it or presses Enter or Space; then it opens and focus moves to the field. When focus leaves an empty open search for anywhere outside its `Landmark`, it collapses. Esc on an empty open search collapses it and focuses the `Trigger`.


React (live React example):

```tsx
import { useState } from 'react';
import { Search } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid justify-items-start gap-2">
      <Search.Root expandable onExpandedChange={setOpen}>
        <Search.Landmark className="flex border-b border-border-strong-1 bg-field-1 data-collapsed:border-transparent data-collapsed:bg-transparent">
          <Search.Label className="sr-only">Search the table</Search.Label>
          <Search.Trigger
            aria-label="Search the table"
            className="grid size-10 shrink-0 place-items-center text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
              <path d="m15 14.3-4.3-4.3a5.5 5.5 0 1 0-.7.7l4.3 4.3zM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0" />
            </svg>
          </Search.Trigger>
          <Search.Input className="h-10 w-56 bg-transparent pe-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-collapsed:w-0 data-collapsed:pe-0 [&::-webkit-search-cancel-button]:appearance-none" />
          <Search.Clear
            aria-label="Clear search input"
            className="size-10 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-hidden:hidden"
          >
            ×
          </Search.Clear>
        </Search.Landmark>
      </Search.Root>
      <p className="text-xs text-ink-muted">Expanded: {String(open)}</p>
    </div>
  );
}
```

- `expanded` controls the state; `defaultExpanded` sets where it starts.
- While collapsed, `Landmark` and `Input` have `data-collapsed` and the input is out of the Tab order. Hiding or narrowing the input is your CSS.

## Style it


React (live React example):

```tsx
import { Search } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="max-w-sm">
      <Search.Root>
        <Search.Landmark className="group flex h-10 items-center border-b border-border-strong-1 bg-field-1 data-disabled:opacity-50">
          <Search.Label className="sr-only">Search</Search.Label>
          <Search.Input
            placeholder="Search"
            className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus group-data-collapsed:w-0 group-data-collapsed:px-0 [&::-webkit-search-cancel-button]:appearance-none"
          />
          <Search.Clear
            aria-label="Clear search input"
            className="size-10 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-hidden:invisible"
          >
            ×
          </Search.Clear>
        </Search.Landmark>
      </Search.Root>
    </div>
  );
}
```
```css
[role="search"][data-collapsed] input { width: 0; padding: 0; }
button[data-hidden] { visibility: hidden; }
```

## Parts

### Search.Root

Renders no element; it holds the text and the open state.

| Prop | Type | Default | |
|---|---|---|---|
| `inputId` | `string` | generated | The input's id. The label's id is `${inputId}-label`. |
| `value` | `string \| number \| readonly string[]` | — | The text (controlled; follow the input's `onChange`). |
| `defaultValue` | `string \| number \| readonly string[]` | — | The starting text (uncontrolled). |
| `disabled` | `boolean` | `false` | Turns off the input and the buttons. |
| `readOnly` | `boolean` | `false` | Keeps the text: nothing to clear. |
| `onClear` | `() => void` | — | After `Clear` or Esc emptied the field. |
| `expandable` | `boolean` | `false` | Collapsed to its `Trigger` until opened. |
| `expanded` | `boolean` | — | Whether an expandable search is open (controlled). |
| `defaultExpanded` | `boolean` | `false` | Whether it starts open. |
| `onExpandedChange` | `(expanded: boolean) => void` | — | Each open or close. |

### Search.Landmark

Renders a `<div role="search">` named by `Label` (`aria-labelledby`). It adds no props.

| Attribute | When |
|---|---|
| `data-empty` | The field has no text |
| `data-collapsed` | An expandable search is collapsed |
| `data-disabled` | `Root` is disabled |
| `data-readonly` | `Root` is read-only |

### Search.Label

Renders a `<label>` for the input, with the id the landmark points to. You can't set its `htmlFor` or `id`.

### Search.Input

Renders an `<input type="search" autoComplete="off">`. It takes every `<input>` prop except `type`, `id`, `value`, `defaultValue`, `disabled` and `readOnly`, which come from `Root`. It has the same `data-*` attributes as `Landmark`.

### Search.Clear

Renders a `<button type="button">`. It adds no props, and takes no `disabled` (it follows `Root`). Its mousedown is cancelled, so focus stays in the field.

| Attribute | When |
|---|---|
| `data-hidden` | Nothing to clear: the field is empty or read-only |

### Search.Trigger

Renders a `<button type="button">` with `aria-expanded` and `aria-controls` pointing at the input. It adds no props, and takes no `disabled` (it follows `Root`). It is a Tab stop only while the search is collapsed.

| Attribute | When |
|---|---|
| `data-expanded` | The search is open (always, unless `expandable`) |

### Search.useSearchContext()

Returns the state of the enclosing `Root`, such as `empty`, `clearable`, `open`, `expandable`, `inputId` and `labelId`.

## Keyboard and accessibility

| Key | What it does |
|---|---|
| Esc | Clears the text and keeps focus in the field; on an empty open expandable search, collapses it and focuses the `Trigger` |
| Enter | Submits the form the search sits in, as a native input does |
| Enter or Space on the `Trigger` | Opens an expandable search; it doesn't submit the form |
| Tab | Moves to `Clear` only while there is text to clear |

- `Landmark` is a `role="search"` landmark named by `Label`, so screen reader users can jump to it.
- Carbon hides the label on screen. Hide it with a visually-hidden class, not `display: none`.
- You add names for `Clear` and `Trigger` (`aria-label`) and `aria-hidden="true"` on their icons.
