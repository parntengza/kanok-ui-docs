# Contained list

A contained list is a titled list of rows separated by thin rules, for settings panels, side panels and tiles (Carbon `ContainedList`). A row can carry an icon and an action, or be a button itself.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list label="Documents">
    <ui-icon-button slot="action" label="Add document">
      <svg viewBox="0 0 16 16"><path d="M8.5 7.5V3h-1v4.5H3v1h4.5V13h1V8.5H13v-1z" /></svg>
    </ui-icon-button>
    <ui-contained-list-item>Service agreement.pdf</ui-contained-list-item>
    <ui-contained-list-item>Appendix A – Price list.pdf</ui-contained-list-item>
    <ui-contained-list-item>Power of attorney.pdf</ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList label="Documents">
  <UiIconButton slot="action" label="Add document">
    <svg viewBox="0 0 16 16"><path d="M8.5 7.5V3h-1v4.5H3v1h4.5V13h1V8.5H13v-1z" /></svg>
  </UiIconButton>
  <UiContainedListItem>Service agreement.pdf</UiContainedListItem>
  <UiContainedListItem>Appendix A – Price list.pdf</UiContainedListItem>
  <UiContainedListItem>Power of attorney.pdf</UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList
  label="Documents"
  action={<IconButton label="Add document"><svg viewBox="0 0 16 16"><path d="M8.5 7.5V3h-1v4.5H3v1h4.5V13h1V8.5H13v-1z" /></svg></IconButton>}
>
  <ContainedListItem>Service agreement.pdf</ContainedListItem>
  <ContainedListItem>Appendix A – Price list.pdf</ContainedListItem>
  <ContainedListItem>Power of attorney.pdf</ContainedListItem>
</ContainedList>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/contained-list
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-contained-list
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/contained-list.json
#    to its target:
#    components/ui/primitives/contained-list/contained-list-item.ts
#    components/ui/primitives/contained-list/contained-list.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-field, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-contained-list.json
#    to its target:
#    components/ui/react-tw/contained-list.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/contained-list';</script>

<ui-contained-list label="Documents">
  <ui-contained-list-item>Service agreement.pdf</ui-contained-list-item>
  <ui-contained-list-item>Power of attorney.pdf</ui-contained-list-item>
</ui-contained-list>
```

React:

```tsx
import { UiContainedList, UiContainedListItem } from '@purpurabog/ui/react';

<UiContainedList label="Documents">
  <UiContainedListItem>Service agreement.pdf</UiContainedListItem>
  <UiContainedListItem>Power of attorney.pdf</UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
import { ContainedList, ContainedListItem } from '@/components/ui/react-tw/contained-list';

<ContainedList label="Documents">
  <ContainedListItem>Service agreement.pdf</ContainedListItem>
  <ContainedListItem>Power of attorney.pdf</ContainedListItem>
</ContainedList>
```

## On the page or in a layer

`kind="on-page"` (the default) has a 48px header in the heading style, on the page background. `kind="disclosed"` has a small 32px label on the layer: use it inside a tile, a side panel or under a disclosure. On-page lists that follow each other sit 16px apart.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list label="Approvers">
    <ui-contained-list-item>Anan P., Managing director</ui-contained-list-item>
    <ui-contained-list-item>Kanya S., Legal counsel</ui-contained-list-item>
  </ui-contained-list>
  <ui-contained-list label="Watchers">
    <ui-contained-list-item>Finance department</ui-contained-list-item>
  </ui-contained-list>
</div>
<div style="max-width: 480px; padding: 16px; background: var(--ui-layer-1)">
  <ui-contained-list label="Recent contracts" kind="disclosed">
    <ui-contained-list-item>Lease renewal – Initech</ui-contained-list-item>
    <ui-contained-list-item>NDA – Globex</ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList label="Approvers">
  <UiContainedListItem>Anan P., Managing director</UiContainedListItem>
  <UiContainedListItem>Kanya S., Legal counsel</UiContainedListItem>
</UiContainedList>
<UiContainedList label="Watchers">
  <UiContainedListItem>Finance department</UiContainedListItem>
</UiContainedList>

<UiContainedList label="Recent contracts" kind="disclosed">
  <UiContainedListItem>Lease renewal – Initech</UiContainedListItem>
  <UiContainedListItem>NDA – Globex</UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList label="Approvers">
  <ContainedListItem>Anan P., Managing director</ContainedListItem>
  <ContainedListItem>Kanya S., Legal counsel</ContainedListItem>
</ContainedList>
<ContainedList label="Watchers">
  <ContainedListItem>Finance department</ContainedListItem>
</ContainedList>

<ContainedList label="Recent contracts" kind="disclosed">
  <ContainedListItem>Lease renewal – Initech</ContainedListItem>
  <ContainedListItem>NDA – Globex</ContainedListItem>
</ContainedList>
```

## Sizes

`size` sets the row height: `sm` 32px, `md` 40px, `lg` 48px (the default), `xl` 64px. An on-page header takes the same height.


HTML:

```html
<div style="display: grid; gap: 24px; max-width: 480px">
  <ui-contained-list label="Small" size="sm">
    <ui-contained-list-item>Service agreement.pdf</ui-contained-list-item>
    <ui-contained-list-item>Appendix A.pdf</ui-contained-list-item>
  </ui-contained-list>
  <ui-contained-list label="Extra large" size="xl">
    <ui-contained-list-item>Service agreement.pdf</ui-contained-list-item>
    <ui-contained-list-item>Appendix A.pdf</ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList label="Small" size="sm">…</UiContainedList>
<UiContainedList label="Extra large" size="xl">…</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList label="Small" size="sm">…</ContainedList>
<ContainedList label="Extra large" size="xl">…</ContainedList>
```

## Icons

Put a 16px icon in a row's `icon` slot (`icon` in React + Tailwind). It sits before the text and takes Carbon's icon colour.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list label="Contract folder">
    <ui-contained-list-item>
      <svg slot="icon" viewBox="0 0 16 16"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
      Service agreement.pdf
    </ui-contained-list-item>
    <ui-contained-list-item>
      <svg slot="icon" viewBox="0 0 16 16"><path d="M14 4H8.6L7.3 2.3A1 1 0 0 0 6.5 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM2 3h4.5l1.3 1.7A1 1 0 0 0 8.6 5H14v1H2Zm0 10V7h12v6Z" /></svg>
      Appendices
    </ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList label="Contract folder">
  <UiContainedListItem>
    <svg slot="icon" viewBox="0 0 16 16"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
    Service agreement.pdf
  </UiContainedListItem>
  <UiContainedListItem>
    <svg slot="icon" viewBox="0 0 16 16">{folderPath}</svg>
    Appendices
  </UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList label="Contract folder">
  <ContainedListItem icon={<svg viewBox="0 0 16 16"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>}>
    Service agreement.pdf
  </ContainedListItem>
  <ContainedListItem icon={<svg viewBox="0 0 16 16">{folderPath}</svg>}>Appendices</ContainedListItem>
</ContainedList>
```

## An action on each row

The `action` slot (`action` in React + Tailwind) holds a control at the row's end, such as a small icon button. It stays a control of its own: pressing it doesn't press the row. Here Remove takes the row out.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list id="contained-list-files" label="Attachments">
    <ui-contained-list-item>
      Service agreement.pdf
      <ui-icon-button slot="action" label="Remove Service agreement.pdf" size="sm">
        <svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9z" /><path d="M2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3Zm2 11V4h8v10ZM6 1h4v1H6z" /></svg>
      </ui-icon-button>
    </ui-contained-list-item>
    <ui-contained-list-item>
      Appendix A.pdf
      <ui-icon-button slot="action" label="Remove Appendix A.pdf" size="sm">
        <svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9z" /><path d="M2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3Zm2 11V4h8v10ZM6 1h4v1H6z" /></svg>
      </ui-icon-button>
    </ui-contained-list-item>
    <ui-contained-list-item>
      Appendix B.pdf
      <ui-icon-button slot="action" label="Remove Appendix B.pdf" size="sm">
        <svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9z" /><path d="M2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3Zm2 11V4h8v10ZM6 1h4v1H6z" /></svg>
      </ui-icon-button>
    </ui-contained-list-item>
  </ui-contained-list>
</div>

<script type="module">
  const list = document.getElementById('contained-list-files');
  list.addEventListener('click', (event) => {
    const button = event.target.closest('ui-icon-button');
    if (!button) return;
    const row = button.closest('ui-contained-list-item');
    // keep focus in the list: on the next row's button, else the previous one's
    const next = row.nextElementSibling ?? row.previousElementSibling;
    row.remove();
    next?.querySelector('ui-icon-button')?.focus();
  });
</script>
```

React:

```tsx
const [files, setFiles] = useState(['Service agreement.pdf', 'Appendix A.pdf', 'Appendix B.pdf']);

<UiContainedList label="Attachments">
  {files.map((name) => (
    <UiContainedListItem key={name}>
      {name}
      <UiIconButton slot="action" label={`Remove ${name}`} size="sm" onClick={() => setFiles(files.filter((f) => f !== name))}>
        <svg viewBox="0 0 16 16">{trashPaths}</svg>
      </UiIconButton>
    </UiContainedListItem>
  ))}
</UiContainedList>
```

React + Tailwind:

```tsx
const [files, setFiles] = useState(['Service agreement.pdf', 'Appendix A.pdf', 'Appendix B.pdf']);

<ContainedList label="Attachments">
  {files.map((name) => (
    <ContainedListItem
      key={name}
      action={
        <IconButton label={`Remove ${name}`} size="sm" onClick={() => setFiles(files.filter((f) => f !== name))}>
          <svg viewBox="0 0 16 16">{trashPaths}</svg>
        </IconButton>
      }
    >
      {name}
    </ContainedListItem>
  ))}
</ContainedList>
```

When a row goes away, move focus to a nearby row's control, as the demo does, so keyboard users don't land at the top of the page.

## Tags and other trailing content

The `action` slot also takes non-interactive content, such as a status tag. Give it a small margin so it lines up with the text.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list label="Signers">
    <ui-contained-list-item>Anan P.<ui-tag slot="action" type="green" size="sm" style="margin: 8px 16px 0 0">Signed</ui-tag></ui-contained-list-item>
    <ui-contained-list-item>Kanya S.<ui-tag slot="action" type="gray" size="sm" style="margin: 8px 16px 0 0">Pending</ui-tag></ui-contained-list-item>
    <ui-contained-list-item>Somchai D.<ui-tag slot="action" type="red" size="sm" style="margin: 8px 16px 0 0">Declined</ui-tag></ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList label="Signers">
  <UiContainedListItem>Anan P.<UiTag slot="action" type="green" size="sm" style={{ margin: '8px 16px 0 0' }}>Signed</UiTag></UiContainedListItem>
  <UiContainedListItem>Kanya S.<UiTag slot="action" type="gray" size="sm" style={{ margin: '8px 16px 0 0' }}>Pending</UiTag></UiContainedListItem>
  <UiContainedListItem>Somchai D.<UiTag slot="action" type="red" size="sm" style={{ margin: '8px 16px 0 0' }}>Declined</UiTag></UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList label="Signers">
  <ContainedListItem action={<Tag type="green" size="sm" className="me-4">Signed</Tag>}>Anan P.</ContainedListItem>
  <ContainedListItem action={<Tag type="gray" size="sm" className="me-4">Pending</Tag>}>Kanya S.</ContainedListItem>
  <ContainedListItem action={<Tag type="red" size="sm" className="me-4">Declined</Tag>}>Somchai D.</ContainedListItem>
</ContainedList>
```

React + Tailwind centres the action in the row by itself, so the tag only needs the end margin.

## Clickable rows

`clickable` makes the whole row a button: it fires `ui-click` when pressed (`onClick` in React + Tailwind makes the row a button). `disabled` greys a clickable row out.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list id="contained-list-open" label="Open a document">
    <ui-contained-list-item clickable>Service agreement.pdf</ui-contained-list-item>
    <ui-contained-list-item clickable>Appendix A.pdf</ui-contained-list-item>
    <ui-contained-list-item clickable disabled>Draft – being edited by Kanya S.</ui-contained-list-item>
  </ui-contained-list>
</div>
<p>Opened: <output id="contained-list-open-out"></output></p>

<script type="module">
  const list = document.getElementById('contained-list-open');
  const out = document.getElementById('contained-list-open-out');
  list.addEventListener('ui-click', (event) => (out.value = event.target.textContent.trim()));
</script>
```

React:

```tsx
const [opened, setOpened] = useState('');

<UiContainedList label="Open a document">
  <UiContainedListItem clickable onUiClick={() => setOpened('Service agreement.pdf')}>Service agreement.pdf</UiContainedListItem>
  <UiContainedListItem clickable onUiClick={() => setOpened('Appendix A.pdf')}>Appendix A.pdf</UiContainedListItem>
  <UiContainedListItem clickable disabled>Draft – being edited by Kanya S.</UiContainedListItem>
</UiContainedList>
<p>Opened: <output>{opened}</output></p>
```

React + Tailwind:

```tsx
const [opened, setOpened] = useState('');

<ContainedList label="Open a document">
  <ContainedListItem onClick={() => setOpened('Service agreement.pdf')}>Service agreement.pdf</ContainedListItem>
  <ContainedListItem onClick={() => setOpened('Appendix A.pdf')}>Appendix A.pdf</ContainedListItem>
  <ContainedListItem onClick={() => setOpened('Draft')} disabled>Draft – being edited by Kanya S.</ContainedListItem>
</ContainedList>
<p>Opened: <output>{opened}</output></p>
```

A clickable row can still have an `action`: the action stays a separate button beside it.

## Search in the header

The header's `action` slot also takes a search. An expandable search stays a magnifier until it is pressed. Filter the rows yourself as the user types.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list id="contained-list-search" label="Departments">
    <ui-search slot="action" size="lg" expandable label="Filter departments" placeholder="Filter departments"></ui-search>
    <ui-contained-list-item>Sales</ui-contained-list-item>
    <ui-contained-list-item>Legal</ui-contained-list-item>
    <ui-contained-list-item>Finance</ui-contained-list-item>
    <ui-contained-list-item>Human resources</ui-contained-list-item>
    <ui-contained-list-item>Procurement</ui-contained-list-item>
  </ui-contained-list>
</div>

<script type="module">
  const list = document.getElementById('contained-list-search');
  const search = list.querySelector('ui-search');
  const filter = () => {
    const text = search.value.trim().toLowerCase();
    for (const row of list.querySelectorAll('ui-contained-list-item')) row.style.display = row.textContent.toLowerCase().includes(text) ? '' : 'none';
  };
  search.addEventListener('input', filter);
  search.addEventListener('ui-clear', filter);
</script>
```

React:

```tsx
import type { UiSearch as SearchElement } from '@purpurabog/ui';

const departments = ['Sales', 'Legal', 'Finance', 'Human resources', 'Procurement'];
const [text, setText] = useState('');

<UiContainedList label="Departments">
  <UiSearch slot="action" size="lg" expandable label="Filter departments" placeholder="Filter departments" value={text} onInput={(e) => setText((e.target as SearchElement).value)} onUiClear={() => setText('')} />
  {departments.filter((d) => d.toLowerCase().includes(text.trim().toLowerCase())).map((d) => (
    <UiContainedListItem key={d}>{d}</UiContainedListItem>
  ))}
</UiContainedList>
```

React + Tailwind:

```tsx
const departments = ['Sales', 'Legal', 'Finance', 'Human resources', 'Procurement'];
const [text, setText] = useState('');

<ContainedList
  label="Departments"
  action={<Search size="lg" expandable label="Filter departments" placeholder="Filter departments" value={text} onChange={(e) => setText(e.target.value)} onClear={() => setText('')} />}
>
  {departments.filter((d) => d.toLowerCase().includes(text.trim().toLowerCase())).map((d) => (
    <ContainedListItem key={d}>{d}</ContainedListItem>
  ))}
</ContainedList>
```

## Inset rules

`inset` stops the rules between rows at the row padding instead of running edge to edge (Carbon `isInset`). It reads lighter in a tile.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list label="Contract terms" inset>
    <ui-contained-list-item>Duration: 12 months</ui-contained-list-item>
    <ui-contained-list-item>Notice period: 60 days</ui-contained-list-item>
    <ui-contained-list-item>Payment: within 30 days</ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList label="Contract terms" inset>
  <UiContainedListItem>Duration: 12 months</UiContainedListItem>
  <UiContainedListItem>Notice period: 60 days</UiContainedListItem>
  <UiContainedListItem>Payment: within 30 days</UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList label="Contract terms" inset>
  <ContainedListItem>Duration: 12 months</ContainedListItem>
  <ContainedListItem>Notice period: 60 days</ContainedListItem>
  <ContainedListItem>Payment: within 30 days</ContainedListItem>
</ContainedList>
```

## A rich label

For markup in the header, such as a count, put it in the `label` slot instead of the `label` attribute. React + Tailwind takes markup in `label`.


HTML:

```html
<div style="max-width: 480px">
  <ui-contained-list>
    <span slot="label">Waiting for approval <span style="color: var(--ui-ink-muted); font-weight: 400">(2)</span></span>
    <ui-contained-list-item>Lease renewal – Initech</ui-contained-list-item>
    <ui-contained-list-item>Software licence – Hooli</ui-contained-list-item>
  </ui-contained-list>
</div>
```

React:

```tsx
<UiContainedList>
  <span slot="label">Waiting for approval <span className="count">(2)</span></span>
  <UiContainedListItem>Lease renewal – Initech</UiContainedListItem>
  <UiContainedListItem>Software licence – Hooli</UiContainedListItem>
</UiContainedList>
```

React + Tailwind:

```tsx
<ContainedList label={<>Waiting for approval <span className="font-normal text-ink-muted">(2)</span></>}>
  <ContainedListItem>Lease renewal – Initech</ContainedListItem>
  <ContainedListItem>Software licence – Hooli</ContainedListItem>
</ContainedList>
```

## Accessibility

- The rows are a `role="list"` of `listitem`s, named by the header label (`aria-labelledby`). React + Tailwind renders a real `<ul>` and `<li>`s.
- A clickable row is a native `<button>`: Tab reaches it, Enter and Space press it. A disabled row is skipped.
- Name every icon-only action with its row, for example "Remove Appendix A.pdf", so the buttons differ for screen reader users.
- The header stays at the top while the list scrolls in a box (`position: sticky`).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-contained-list>` · React `UiContainedList`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `kind` | `kind` | `ContainedListKind` | `'on-page'` |  |
| `size` | `size` | `ContainedListSize` | `'lg'` |  |
| `inset` | `inset` | `boolean` | `false` | Rules stop at the row padding instead of running edge to edge (Carbon `isInset`). |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-contained-list-item>` elements |
| `label` | Rich label |
| `action` | Header action (search, icon button) |

#### CSS parts

| Part | Description |
|---|---|
| `header` | The sticky header row |
| `label` | The label |
| `action` | The header action wrapper |
| `list` | The `role=list` container |

### `<ui-contained-list-item>` · React `UiContainedListItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `clickable` | `clickable` | `boolean` | `false` | Render the row as a button. |
| `disabled` | `disabled` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-click` | `onUiClick` | Clickable rows, when activated |

#### Slots

| Slot | Description |
|---|---|
| (default) | Row content |
| `icon` | 16px icon |
| `action` | Trailing action |

#### CSS parts

| Part | Description |
|---|---|
| `content` | The row body (a button when `clickable`) |
| `action` | The action wrapper |


