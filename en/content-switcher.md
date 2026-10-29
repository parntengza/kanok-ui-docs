# Content switcher

A content switcher shows the same content in another way: a filter (all requests or only mine) or a view (table or grid). Exactly one item is selected, and the switch happens at once.


HTML:

```html
<ui-content-switcher aria-label="Requests" style="max-width: 560px">
  <ui-content-switcher-item name="all">All requests</ui-content-switcher-item>
  <ui-content-switcher-item name="mine">Assigned to me</ui-content-switcher-item>
  <ui-content-switcher-item name="archived">Archived</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Requests" style={{ maxWidth: 560 }}>
  <UiContentSwitcherItem name="all">All requests</UiContentSwitcherItem>
  <UiContentSwitcherItem name="mine">Assigned to me</UiContentSwitcherItem>
  <UiContentSwitcherItem name="archived">Archived</UiContentSwitcherItem>
</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Requests" className="max-w-[560px]">
  <ContentSwitcherItem name="all">All requests</ContentSwitcherItem>
  <ContentSwitcherItem name="mine">Assigned to me</ContentSwitcherItem>
  <ContentSwitcherItem name="archived">Archived</ContentSwitcherItem>
</ContentSwitcher>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/content-switcher
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-content-switcher
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/content-switcher.json
#    to its target:
#    components/ui/primitives/content-switcher/content-switcher-item.ts
#    components/ui/primitives/content-switcher/content-switcher.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-roving, shared-element, shared-field, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-content-switcher.json
#    to its target:
#    components/ui/react-tw/content-switcher.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Name the group with `aria-label`. The switcher fills the width it is given and shares it evenly between the items.


HTML:

```html
<script type="module">import '@purpurabog/ui/content-switcher';</script>

<ui-content-switcher aria-label="Requests">
  <ui-content-switcher-item name="all">All requests</ui-content-switcher-item>
  <ui-content-switcher-item name="mine">Assigned to me</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
import { UiContentSwitcher, UiContentSwitcherItem } from '@purpurabog/ui/react';

<UiContentSwitcher aria-label="Requests">
  <UiContentSwitcherItem name="all">All requests</UiContentSwitcherItem>
  <UiContentSwitcherItem name="mine">Assigned to me</UiContentSwitcherItem>
</UiContentSwitcher>
```

React + Tailwind:

```tsx
import { ContentSwitcher, ContentSwitcherItem } from '@/components/ui/react-tw/content-switcher';

<ContentSwitcher aria-label="Requests">
  <ContentSwitcherItem name="all">All requests</ContentSwitcherItem>
  <ContentSwitcherItem name="mine">Assigned to me</ContentSwitcherItem>
</ContentSwitcher>
```

When the items are different sections of one thing (a contract's terms, parties and history), use [Tabs](https://parntengza.github.io/kanok-ui-docs/en/tabs/) instead.

## Switch the content

The switcher only reports the choice: `ui-change` fires with `detail.index` and `detail.name` of the item the user selected. Showing the matching content is yours. Put that content right after the switcher.


HTML:

```html
<ui-content-switcher id="content-switcher-filter" aria-label="Requests" style="max-width: 560px">
  <ui-content-switcher-item name="all">All requests</ui-content-switcher-item>
  <ui-content-switcher-item name="mine">Assigned to me</ui-content-switcher-item>
  <ui-content-switcher-item name="overdue">Overdue</ui-content-switcher-item>
</ui-content-switcher>
<ul id="content-switcher-list" style="margin: 0; padding-inline-start: 24px"></ul>

<script type="module">
  const requests = [
    { title: 'Renew the server lease', mine: true, overdue: false },
    { title: 'Approve the catering contract', mine: false, overdue: true },
    { title: 'Sign the NDA with Siam Office Supplies', mine: true, overdue: true },
    { title: 'Review the car rental terms', mine: false, overdue: false },
  ];
  const switcher = document.getElementById('content-switcher-filter');
  const list = document.getElementById('content-switcher-list');
  const show = (name) =>
    list.replaceChildren(...requests.filter((r) => name === 'all' || r[name]).map((r) => Object.assign(document.createElement('li'), { textContent: r.title })));
  show('all');
  switcher.addEventListener('ui-change', (event) => show(event.detail.name));
</script>
```

React:

```tsx
// requests as in the HTML tab
const [filter, setFilter] = useState('all');

<UiContentSwitcher aria-label="Requests" onUiChange={(e) => setFilter(e.detail.name)}>
  <UiContentSwitcherItem name="all">All requests</UiContentSwitcherItem>
  <UiContentSwitcherItem name="mine">Assigned to me</UiContentSwitcherItem>
  <UiContentSwitcherItem name="overdue">Overdue</UiContentSwitcherItem>
</UiContentSwitcher>
<ul>
  {requests.filter((r) => filter === 'all' || r[filter as 'mine' | 'overdue']).map((r) => <li key={r.title}>{r.title}</li>)}
</ul>
```

React + Tailwind:

```tsx
// requests as in the HTML tab
const [filter, setFilter] = useState('all');

<ContentSwitcher aria-label="Requests" onChange={({ name }) => setFilter(name)}>
  <ContentSwitcherItem name="all">All requests</ContentSwitcherItem>
  <ContentSwitcherItem name="mine">Assigned to me</ContentSwitcherItem>
  <ContentSwitcherItem name="overdue">Overdue</ContentSwitcherItem>
</ContentSwitcher>
<ul>
  {requests.filter((r) => filter === 'all' || r[filter as 'mine' | 'overdue']).map((r) => <li key={r.title}>{r.title}</li>)}
</ul>
```

## Starting item

`selected-index` (`selectedIndex`) is the selected item's position, from 0; the first item by default. The switcher updates it as the user chooses.


HTML:

```html
<ui-content-switcher id="content-switcher-start" aria-label="Period" selected-index="1" style="max-width: 560px">
  <ui-content-switcher-item name="week">This week</ui-content-switcher-item>
  <ui-content-switcher-item name="month">This month</ui-content-switcher-item>
  <ui-content-switcher-item name="year">This year</ui-content-switcher-item>
</ui-content-switcher>
<p>Selected: <output id="content-switcher-start-out"></output></p>

<script type="module">
  const switcher = document.getElementById('content-switcher-start');
  const out = document.getElementById('content-switcher-start-out');
  out.value = `index ${switcher.selectedIndex}`;
  switcher.addEventListener('ui-change', (event) => (out.value = `index ${event.detail.index}, name ${event.detail.name}`));
</script>
```

React:

```tsx
const [index, setIndex] = useState(1);

<UiContentSwitcher aria-label="Period" selectedIndex={index} onUiChange={(e) => setIndex(e.detail.index)}>
  <UiContentSwitcherItem name="week">This week</UiContentSwitcherItem>
  <UiContentSwitcherItem name="month">This month</UiContentSwitcherItem>
  <UiContentSwitcherItem name="year">This year</UiContentSwitcherItem>
</UiContentSwitcher>
<p>Selected: <output>index {index}</output></p>
```

React + Tailwind:

```tsx
const [index, setIndex] = useState(1);

<ContentSwitcher aria-label="Period" selectedIndex={index} onChange={(change) => setIndex(change.index)}>
  <ContentSwitcherItem name="week">This week</ContentSwitcherItem>
  <ContentSwitcherItem name="month">This month</ContentSwitcherItem>
  <ContentSwitcherItem name="year">This year</ContentSwitcherItem>
</ContentSwitcher>
<p>Selected: <output>index {index}</output></p>
```

React + Tailwind also takes `defaultSelectedIndex` for an uncontrolled start.

## With icons

A 16px icon in the item's `icon` slot (the `icon` prop in React + Tailwind) goes before the text, and takes the item's colours: grey at rest, white when selected.


HTML:

```html
<ui-content-switcher aria-label="Layout" style="max-width: 560px">
  <ui-content-switcher-item name="table"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 7h4v2H3Zm5 0h5v2H8Zm5-4v3H3V3ZM3 10h4v3H3Zm5 3v-3h5v3Z" /></svg>Table</ui-content-switcher-item>
  <ui-content-switcher-item name="grid"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M7 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 5H3V3h4Zm6-5H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 5H9V3h4ZM7 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 5H3v-4h4Zm6-5H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 5H9v-4h4Z" /></svg>Grid</ui-content-switcher-item>
  <ui-content-switcher-item name="list"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12v1H2zm0 3.5h12v1H2zM2 11h12v1H2z" /></svg>List</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
// tableIcon = <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="…" /></svg>, the same for the others
<UiContentSwitcher aria-label="Layout">
  <UiContentSwitcherItem name="table">{tableIcon}Table</UiContentSwitcherItem>
  <UiContentSwitcherItem name="grid">{gridIcon}Grid</UiContentSwitcherItem>
  <UiContentSwitcherItem name="list">{listIcon}List</UiContentSwitcherItem>
</UiContentSwitcher>
```

React + Tailwind:

```tsx
// tableIcon = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="…" /></svg>, the same for the others
<ContentSwitcher aria-label="Layout">
  <ContentSwitcherItem name="table" icon={tableIcon}>Table</ContentSwitcherItem>
  <ContentSwitcherItem name="grid" icon={gridIcon}>Grid</ContentSwitcherItem>
  <ContentSwitcherItem name="list" icon={listIcon}>List</ContentSwitcherItem>
</ContentSwitcher>
```

## Icon only

With `icon-only` (`iconOnly`) on every item, each item is a square button and the switcher shrinks to fit them. `label` is then required: it names the item and shows as its tooltip on hover and keyboard focus. `tooltip-placement` (`tooltipPlacement`) moves the tooltip; it shows above by default.


HTML:

```html
<ui-content-switcher aria-label="Layout">
  <ui-content-switcher-item icon-only label="Table" name="table"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 7h4v2H3Zm5 0h5v2H8Zm5-4v3H3V3ZM3 10h4v3H3Zm5 3v-3h5v3Z" /></svg></ui-content-switcher-item>
  <ui-content-switcher-item icon-only label="Grid" name="grid"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M7 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 5H3V3h4Zm6-5H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 5H9V3h4ZM7 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 5H3v-4h4Zm6-5H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm0 5H9v-4h4Z" /></svg></ui-content-switcher-item>
  <ui-content-switcher-item icon-only label="List" name="list" tooltip-placement="bottom"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12v1H2zm0 3.5h12v1H2zM2 11h12v1H2z" /></svg></ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Layout">
  <UiContentSwitcherItem iconOnly label="Table" name="table">{tableIcon}</UiContentSwitcherItem>
  <UiContentSwitcherItem iconOnly label="Grid" name="grid">{gridIcon}</UiContentSwitcherItem>
  <UiContentSwitcherItem iconOnly label="List" name="list" tooltipPlacement="bottom">{listIcon}</UiContentSwitcherItem>
</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Layout">
  <ContentSwitcherItem iconOnly label="Table" name="table" icon={tableIcon} />
  <ContentSwitcherItem iconOnly label="Grid" name="grid" icon={gridIcon} />
  <ContentSwitcherItem iconOnly label="List" name="list" icon={listIcon} tooltipPlacement="bottom" />
</ContentSwitcher>
```

## Sizes

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px. Icons grow to 20px in `lg`. Match the height of the fields and buttons beside it.


HTML:

```html
<ui-content-switcher aria-label="Small" size="sm" style="max-width: 560px">
  <ui-content-switcher-item>All</ui-content-switcher-item>
  <ui-content-switcher-item>Mine</ui-content-switcher-item>
  <ui-content-switcher-item>Archived</ui-content-switcher-item>
</ui-content-switcher>
<ui-content-switcher aria-label="Medium" style="max-width: 560px">
  <ui-content-switcher-item>All</ui-content-switcher-item>
  <ui-content-switcher-item>Mine</ui-content-switcher-item>
  <ui-content-switcher-item>Archived</ui-content-switcher-item>
</ui-content-switcher>
<ui-content-switcher aria-label="Large" size="lg" style="max-width: 560px">
  <ui-content-switcher-item>All</ui-content-switcher-item>
  <ui-content-switcher-item>Mine</ui-content-switcher-item>
  <ui-content-switcher-item>Archived</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Small" size="sm">…</UiContentSwitcher>
<UiContentSwitcher aria-label="Medium">…</UiContentSwitcher>
<UiContentSwitcher aria-label="Large" size="lg">…</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Small" size="sm">…</ContentSwitcher>
<ContentSwitcher aria-label="Medium">…</ContentSwitcher>
<ContentSwitcher aria-label="Large" size="lg">…</ContentSwitcher>
```

## Low contrast

`low-contrast` (`lowContrast`) is the quieter variant: a grey track, and the selected item a light pill with bold text instead of a dark fill. Use it where a dark selected item would draw too much attention.


HTML:

```html
<ui-content-switcher aria-label="Requests" low-contrast style="max-width: 560px">
  <ui-content-switcher-item name="all">All requests</ui-content-switcher-item>
  <ui-content-switcher-item name="mine">Assigned to me</ui-content-switcher-item>
  <ui-content-switcher-item name="archived">Archived</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Requests" lowContrast>…</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Requests" lowContrast>…</ContentSwitcher>
```

## Disabled item

`disabled` on an item greys it out; the arrow keys skip it and a click does nothing. While any item is disabled, the track's outline turns grey too, as in Carbon.


HTML:

```html
<ui-content-switcher aria-label="Requests" selected-index="1" style="max-width: 560px">
  <ui-content-switcher-item name="all">All requests</ui-content-switcher-item>
  <ui-content-switcher-item name="mine">Assigned to me</ui-content-switcher-item>
  <ui-content-switcher-item name="archived" disabled>Archived</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Requests" selectedIndex={1}>
  <UiContentSwitcherItem name="all">All requests</UiContentSwitcherItem>
  <UiContentSwitcherItem name="mine">Assigned to me</UiContentSwitcherItem>
  <UiContentSwitcherItem name="archived" disabled>Archived</UiContentSwitcherItem>
</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Requests" defaultSelectedIndex={1}>
  <ContentSwitcherItem name="all">All requests</ContentSwitcherItem>
  <ContentSwitcherItem name="mine">Assigned to me</ContentSwitcherItem>
  <ContentSwitcherItem name="archived" disabled>Archived</ContentSwitcherItem>
</ContentSwitcher>
```

## Manual selection

By default the arrow keys select as they move (`selection-mode="automatic"`). With `selection-mode="manual"` (`selectionMode`), they only move focus, and Enter or Space selects. Use it when switching loads data.


HTML:

```html
<ui-content-switcher aria-label="Report" selection-mode="manual" style="max-width: 560px">
  <ui-content-switcher-item name="summary">Summary</ui-content-switcher-item>
  <ui-content-switcher-item name="details">Details</ui-content-switcher-item>
  <ui-content-switcher-item name="audit">Audit trail</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Report" selectionMode="manual">…</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Report" selectionMode="manual">…</ContentSwitcher>
```

## Long labels

Items share the width evenly. A label longer than its share ends in an ellipsis, so keep labels short: one or two words.


HTML:

```html
<ui-content-switcher aria-label="Contracts" style="max-width: 360px">
  <ui-content-switcher-item name="draft">Drafts</ui-content-switcher-item>
  <ui-content-switcher-item name="waiting">Waiting for the counterparty's signature</ui-content-switcher-item>
  <ui-content-switcher-item name="signed">Signed</ui-content-switcher-item>
</ui-content-switcher>
```

React:

```tsx
<UiContentSwitcher aria-label="Contracts" style={{ maxWidth: 360 }}>
  <UiContentSwitcherItem name="draft">Drafts</UiContentSwitcherItem>
  <UiContentSwitcherItem name="waiting">Waiting for the counterparty's signature</UiContentSwitcherItem>
  <UiContentSwitcherItem name="signed">Signed</UiContentSwitcherItem>
</UiContentSwitcher>
```

React + Tailwind:

```tsx
<ContentSwitcher aria-label="Contracts" className="max-w-[360px]">
  <ContentSwitcherItem name="draft">Drafts</ContentSwitcherItem>
  <ContentSwitcherItem name="waiting">Waiting for the counterparty's signature</ContentSwitcherItem>
  <ContentSwitcherItem name="signed">Signed</ContentSwitcherItem>
</ContentSwitcher>
```

## Accessibility

- The switcher is a `tablist` and each item a `tab` with `aria-selected`; name the group with `aria-label`.
- One Tab stop: the selected item (or the first enabled one). ← and → move and wrap, skipping disabled items (mirrored right-to-left); Home and End jump to the ends. Enter and Space select in manual mode.
- The items control no panel (`aria-controls`): put the content they change right after the switcher, so it is the next thing a keyboard or screen reader user reaches.
- Icon-only items need `label`: it is their name and their tooltip.

Unstyled React parts with the same behaviour: [Headless Content switcher](https://parntengza.github.io/kanok-ui-docs/en/headless-content-switcher/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-content-switcher>` · React `UiContentSwitcher`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `selected-index` | `selectedIndex` | `number` | `0` |  |
| `size` | `size` | `ContentSwitcherSize` | `'md'` |  |
| `selection-mode` | `selectionMode` | `ContentSwitcherSelectionMode` | `'automatic'` |  |
| `low-contrast` | `lowContrast` | `boolean` | `false` |  |
| `icon-only` | `iconOnly` | `boolean` | `false` | Reflected by the switcher itself when every item is `icon-only`. |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the selected item (the tab stop). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-change` | `onUiChange` | detail: { index, name } after the user selects a different item |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-content-switcher-item>` elements |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-content-switcher-border` |  | / --ui-content-switcher-selected-fill / --ui-content-switcher-selected-ink - Border, selected fill and selected text of the default kind (default: Carbon's inverse; Kanok: no border, a segment in the page colour with ink text) |
| `--ui-content-switcher-track` |  | / --ui-content-switcher-padding / --ui-content-switcher-radius / --ui-content-switcher-outline - The track around the items (default transparent, 0, 4px, border-inverse: Carbon's outlined group; Kanok: the contained tabs' segmented track) |
| `--ui-content-switcher-item-radius` |  | / --ui-content-switcher-item-size / --ui-content-switcher-item-grow / --ui-content-switcher-divider / --ui-content-switcher-selected-shadow - Its items (on `<ui-content-switcher-item>`) |

### `<ui-content-switcher-item>` · React `UiContentSwitcherItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `name` | `name` | `string` | `''` | Identifies the item in `ui-change` (Carbon `name`). |
| `label` | `label` | `string` | `''` | Accessible name — required with `icon-only`. |
| `selected` | `selected` | `boolean` | `false` | Set by the switcher from its `selected-index` (it overwrites any value you set): read it or style on `[selected]`; select an item with the switcher's `selected-index`. |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `icon-only` | `iconOnly` | `boolean` | `false` |  |
| `tooltip-placement` | `tooltipPlacement` | `TooltipPlacement` | `'top'` | Where the `icon-only` tooltip shows (Carbon `align`, default top). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `focusable` | `boolean` | Set by the switcher: which item is the single tab stop (the selected one, or the first enabled one). |

#### Slots

| Slot | Description |
|---|---|
| (default) | Label text |
| `icon` | A 16px icon (20px in `size="lg"`) before the text, or alone with `icon-only` + `label` |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label wrapper |
| `tooltip` | The `<ui-tooltip>` of an `icon-only` item |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-content-switcher-item-radius` |  | / --ui-content-switcher-item-size / --ui-content-switcher-item-grow - Corner radius, `inline-size` and `flex-grow` (default 4px, 100%, 0) |
| `--ui-content-switcher-divider` |  | / --ui-content-switcher-selected-shadow - The rule between items and the selected one's shadow (default hairline, none) |


