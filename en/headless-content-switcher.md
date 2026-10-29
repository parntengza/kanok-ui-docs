# Headless Content switcher

`ContentSwitcher` is the behaviour of the styled [Content switcher](https://parntengza.github.io/kanok-ui-docs/en/content-switcher/) as unstyled React parts: a `tablist` where exactly one item is selected, one Tab stop on the selected item, the arrow keys (wrapping and skipping disabled items), Home and End, and automatic or manual selection. State shows as `data-*` attributes to style on.

You own the markup and every style: the track, the selected fill, the dividers, the icons and tooltips, and the content that changes.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { ContentSwitcher } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { ContentSwitcher } from '@purpurabog/ui/headless';

const item =
  'flex h-10 min-w-0 flex-1 cursor-pointer items-center border-0 border-y border-solid border-border-inverse px-4 text-sm whitespace-nowrap text-ink-muted first:rounded-s-[4px] first:border-s last:rounded-e-[4px] last:border-e hover:bg-ghost-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:rounded-[4px] data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <ContentSwitcher.Root aria-label="Requests" className="flex max-w-xl">
      <ContentSwitcher.Item name="all" className={item}>All requests</ContentSwitcher.Item>
      <ContentSwitcher.Item name="mine" className={item}>Assigned to me</ContentSwitcher.Item>
      <ContentSwitcher.Item name="archived" className={item}>Archived</ContentSwitcher.Item>
    </ContentSwitcher.Root>
  );
}
```

## Anatomy

```tsx
<ContentSwitcher.Root>
  <ContentSwitcher.Item />
  <ContentSwitcher.Item />
</ContentSwitcher.Root>
```

Each direct child of `Root` is one item, by position. `Root` reads the `name` and `disabled` props of its children, so a component of your own that wraps an `Item` must take those two props too.

## Switch the content

`onChange` gets `{ index, name }` of the item the user selected. Showing the matching content is yours; put it right after the switcher.


React (live React example):

```tsx
import { useState } from 'react';
import { ContentSwitcher } from '@purpurabog/ui/headless';

const item =
  'flex h-10 min-w-0 flex-1 cursor-pointer items-center border-0 border-y border-solid border-border-inverse px-4 text-sm whitespace-nowrap text-ink-muted first:rounded-s-[4px] first:border-s last:rounded-e-[4px] last:border-e hover:bg-ghost-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:rounded-[4px] data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink';
const requests = [
  { title: 'Renew the server lease', mine: true, overdue: false },
  { title: 'Approve the catering contract', mine: false, overdue: true },
  { title: 'Sign the NDA with Siam Office Supplies', mine: true, overdue: true },
  { title: 'Review the car rental terms', mine: false, overdue: false },
];

export default function Example() {
  const [filter, setFilter] = useState('all');
  const shown = requests.filter((r) => filter === 'all' || r[filter as 'mine' | 'overdue']);
  return (
    <div className="grid max-w-xl gap-4">
      <ContentSwitcher.Root aria-label="Requests" onChange={({ name }) => setFilter(name)} className="flex">
        <ContentSwitcher.Item name="all" className={item}>All requests</ContentSwitcher.Item>
        <ContentSwitcher.Item name="mine" className={item}>Assigned to me</ContentSwitcher.Item>
        <ContentSwitcher.Item name="overdue" className={item}>Overdue</ContentSwitcher.Item>
      </ContentSwitcher.Root>
      <ul className="m-0 list-disc ps-6 text-sm text-ink">
        {shown.map((r) => (
          <li key={r.title}>{r.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Controlled selection

Use `selectedIndex` with `onChange` for a controlled switcher, or `defaultSelectedIndex` (0 by default) for an uncontrolled one.


React (live React example):

```tsx
import { useState } from 'react';
import { ContentSwitcher } from '@purpurabog/ui/headless';

const item =
  'flex h-10 min-w-0 flex-1 cursor-pointer items-center border-0 border-y border-solid border-border-inverse px-4 text-sm whitespace-nowrap text-ink-muted first:rounded-s-[4px] first:border-s last:rounded-e-[4px] last:border-e hover:bg-ghost-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:rounded-[4px] data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink';

export default function Example() {
  const [index, setIndex] = useState(1);
  return (
    <div className="grid max-w-xl gap-2">
      <ContentSwitcher.Root aria-label="Period" selectedIndex={index} onChange={(change) => setIndex(change.index)} className="flex">
        <ContentSwitcher.Item name="week" className={item}>This week</ContentSwitcher.Item>
        <ContentSwitcher.Item name="month" className={item}>This month</ContentSwitcher.Item>
        <ContentSwitcher.Item name="year" className={item}>This year</ContentSwitcher.Item>
      </ContentSwitcher.Root>
      <p className="text-xs text-ink-muted">Selected index: {index}</p>
    </div>
  );
}
```

## Disabled items and manual selection

A `disabled` item gets `aria-disabled` and `data-disabled`: the arrow keys skip it, and a click does nothing. With `selectionMode="manual"` the arrow keys only move focus, and Enter or Space selects.


React (live React example):

```tsx
import { ContentSwitcher } from '@purpurabog/ui/headless';

const item =
  'flex h-10 min-w-0 flex-1 cursor-pointer items-center border-0 border-y border-solid border-border-inverse px-4 text-sm whitespace-nowrap text-ink-muted first:rounded-s-[4px] first:border-s last:rounded-e-[4px] last:border-e hover:bg-ghost-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:rounded-[4px] data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';

export default function Example() {
  return (
    <ContentSwitcher.Root aria-label="Report" selectionMode="manual" defaultSelectedIndex={1} className="flex max-w-xl">
      <ContentSwitcher.Item name="summary" className={item}>Summary</ContentSwitcher.Item>
      <ContentSwitcher.Item name="details" className={item}>Details</ContentSwitcher.Item>
      <ContentSwitcher.Item name="audit" disabled className={item}>Audit trail</ContentSwitcher.Item>
    </ContentSwitcher.Root>
  );
}
```

## Icon only

An item that shows only an icon needs a name: `aria-label` on the `Item`. Add a tooltip for sighted users; here `title` stands in for one.


React (live React example):

```tsx
import { ContentSwitcher } from '@purpurabog/ui/headless';

const item =
  'grid size-10 cursor-pointer place-items-center border-0 border-y border-solid border-border-inverse text-icon-secondary first:rounded-s-[4px] first:border-s last:rounded-e-[4px] last:border-e hover:bg-ghost-hover hover:text-icon-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:rounded-[4px] data-selected:bg-layer-selected-inverse data-selected:text-icon-inverse';

export default function Example() {
  return (
    <ContentSwitcher.Root aria-label="Layout" className="flex">
      <ContentSwitcher.Item name="table" aria-label="Table" title="Table" className={item}>
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current"><path d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 7h4v2H3Zm5 0h5v2H8Zm5-4v3H3V3ZM3 10h4v3H3Zm5 3v-3h5v3Z" /></svg>
      </ContentSwitcher.Item>
      <ContentSwitcher.Item name="grid" aria-label="Grid" title="Grid" className={item}>
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current"><path d="M7 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 5H3V3h4Zm6-5H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 5H9V3h4ZM7 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 5H3v-4h4Zm6-5H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 5H9v-4h4Z" /></svg>
      </ContentSwitcher.Item>
      <ContentSwitcher.Item name="list" aria-label="List" title="List" className={item}>
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current"><path d="M2 4h12v1H2zm0 3.5h12v1H2zM2 11h12v1H2z" /></svg>
      </ContentSwitcher.Item>
    </ContentSwitcher.Root>
  );
}
```

## Style it

The low-contrast look: a grey track, and the selected item a light pill with bold text. The keyboard focus ring sits on the item with `focus-visible`.


React (live React example):

```tsx
import { ContentSwitcher } from '@purpurabog/ui/headless';

const item =
  'flex h-8 min-w-0 flex-1 cursor-pointer items-center justify-center rounded-[4px] border-0 px-4 text-sm whitespace-nowrap text-ink-muted hover:bg-content-switcher-background-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:bg-content-switcher-selected data-selected:font-semibold data-selected:text-ink data-selected:shadow-[inset_0_0_0_1px_var(--ui-border-inverse)] data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <ContentSwitcher.Root aria-label="Requests" className="flex max-w-xl rounded-[4px] bg-content-switcher-background outline-1 -outline-offset-1 outline-hairline-strong">
      <ContentSwitcher.Item name="all" className={item}>All requests</ContentSwitcher.Item>
      <ContentSwitcher.Item name="mine" className={item}>Assigned to me</ContentSwitcher.Item>
      <ContentSwitcher.Item name="archived" disabled className={item}>Archived</ContentSwitcher.Item>
    </ContentSwitcher.Root>
  );
}
```
```css
[role='tablist'] { display: flex; border-radius: 4px; background: #e8e8e8; }
[role='tab'] { flex: 1; padding: 0 16px; color: #525252; cursor: pointer; }
[role='tab'][data-selected] { background: #fff; color: #161616; font-weight: 600; }
[role='tab'][data-disabled] { color: #a8a8a8; cursor: not-allowed; }
```

## Parts

### ContentSwitcher.Root

Renders a `<div role="tablist">` and wraps each child so it knows its position. It takes every `<div>` prop; name it with `aria-label`.

| Prop | Type | Default | |
|---|---|---|---|
| `selectedIndex` | `number` | — | The selected item's position (controlled) |
| `defaultSelectedIndex` | `number` | `0` | The starting item (uncontrolled) |
| `onChange` | `(change: { index: number; name: string }) => void` | — | After the user selects another item; `name` is the item's `name` prop, or `''` |
| `selectionMode` | `'automatic' \| 'manual'` | `'automatic'` | `automatic` selects as the arrows move; `manual` selects on Enter or Space |

### ContentSwitcher.Item

Renders a `<div role="tab">` with `aria-selected`. Only the Tab stop (the selected item, else the first enabled one) has `tabIndex={0}`. It takes every `<div>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `name` | `string` | — | Reported in `onChange` (read by `Root`) |
| `disabled` | `boolean` | `false` | `aria-disabled`: stays visible and announced, but can't be selected or reached with the arrows |

| Attribute | When |
|---|---|
| `data-selected` | It is the selected item |
| `data-disabled` | `disabled` is set |

`ContentSwitcher.useContentSwitcherContext()` gives your own parts the state (`selected`, `focusable`, `count`, `selectionMode`, `select(index)`), and `ContentSwitcher.useItemIndex()` the position of the item it is called in.

## Keyboard and accessibility

| Key | Does |
|---|---|
| ← / → | Previous / next enabled item, wrapping (mirrored right-to-left); in automatic mode it also selects |
| Home / End | First / last enabled item |
| Enter, Space | Select the focused item |
| Tab | Leaves the switcher |

The parts set `role="tablist"`, `role="tab"`, `aria-selected`, `aria-disabled` and the roving `tabIndex`.

You add:

- A name for the group: `aria-label` or `aria-labelledby` on `Root`.
- `aria-label` on items that show only an icon, and a tooltip.
- The content that changes, right after the switcher. The items control no panel, so there is no `aria-controls`.
