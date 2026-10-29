# Headless Tabs

`Tabs` is the behaviour of the styled [Tabs](https://parntengza.github.io/kanok-ui-docs/en/tabs/) as unstyled React parts: one Tab stop on the strip (a roving tabindex), the arrow keys, Home and End, automatic or manual activation, Delete and close buttons for dismissable tabs, and the `tablist` / `tab` / `tabpanel` roles with their ids wired together. State shows as `data-*` attributes to style on.

You own the markup and every style: the underline or the contained look, the sizes, the icons, the scroll buttons of a long strip, and the layout of a vertical column.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Tabs } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Tabs } from '@purpurabog/ui/headless';

const tab =
  'h-10 cursor-pointer border-0 border-b-2 border-solid border-hairline bg-transparent px-4 text-sm text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:border-border-interactive data-selected:font-semibold data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const panel = 'p-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  return (
    <Tabs.Root>
      <Tabs.List aria-label="Contract details" className="flex gap-px">
        <Tabs.Tab value="overview" className={tab}>Overview</Tabs.Tab>
        <Tabs.Tab value="parties" className={tab}>Parties</Tabs.Tab>
        <Tabs.Tab value="history" className={tab}>History</Tabs.Tab>
        <Tabs.Tab value="archive" disabled className={tab}>Archive</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview" className={panel}>Summary of the contract terms.</Tabs.Panel>
      <Tabs.Panel value="parties" className={panel}>Signers and counterparties.</Tabs.Panel>
      <Tabs.Panel value="history" className={panel}>Every change, newest first.</Tabs.Panel>
      <Tabs.Panel value="archive" className={panel}>Archived copies.</Tabs.Panel>
    </Tabs.Root>
  );
}
```

## Anatomy

```tsx
<Tabs.Root>
  <Tabs.List>
    <Tabs.Tab value="a" />
    <Tabs.Close value="a" />
  </Tabs.List>
  <Tabs.Panel value="a" />
</Tabs.Root>
```

A `Tab` and its `Panel` share a `value`. `Close` is only for dismissable tabs; put it beside its `Tab`, never inside it (a button can't hold a button).

## Starting tab and changes

Without `value` or `defaultValue`, the first enabled `Tab` is selected. `Root` finds it among its children, inside `List` and fragments; when your tabs sit in other wrappers, set `defaultValue`. Use `value` with `onValueChange` for a controlled strip.


React (live React example):

```tsx
import { useState } from 'react';
import { Tabs } from '@purpurabog/ui/headless';

const tab =
  'h-10 cursor-pointer border-0 border-b-2 border-solid border-hairline bg-transparent px-4 text-sm text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:border-border-interactive data-selected:font-semibold data-selected:text-ink';
const panel = 'p-4 text-sm text-ink';

export default function Example() {
  const [step, setStep] = useState('review');
  return (
    <div className="grid gap-2">
      <Tabs.Root value={step} onValueChange={setStep}>
        <Tabs.List aria-label="Approval steps" className="flex gap-px">
          <Tabs.Tab value="draft" className={tab}>Draft</Tabs.Tab>
          <Tabs.Tab value="review" className={tab}>Legal review</Tabs.Tab>
          <Tabs.Tab value="sign" className={tab}>Signing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="draft" className={panel}>The requester fills in the contract form.</Tabs.Panel>
        <Tabs.Panel value="review" className={panel}>Legal checks the terms and the counterparty.</Tabs.Panel>
        <Tabs.Panel value="sign" className={panel}>Both parties sign, and the contract is filed.</Tabs.Panel>
      </Tabs.Root>
      <p className="text-xs text-ink-muted">Selected: {step}</p>
    </div>
  );
}
```

## Manual activation

`activation="manual"`: the arrow keys only move focus, and Enter or Space selects. Use it when a panel is slow to render or loads data.


React (live React example):

```tsx
import { useState } from 'react';
import { Tabs } from '@purpurabog/ui/headless';

const tab =
  'h-10 cursor-pointer border-0 border-b-2 border-solid border-hairline bg-transparent px-4 text-sm text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:border-border-interactive data-selected:font-semibold data-selected:text-ink';

export default function Example() {
  const [report, setReport] = useState('month');
  return (
    <div className="grid gap-2">
      <Tabs.Root activation="manual" value={report} onValueChange={setReport}>
        <Tabs.List aria-label="Reports" className="flex gap-px">
          <Tabs.Tab value="month" className={tab}>This month</Tabs.Tab>
          <Tabs.Tab value="quarter" className={tab}>This quarter</Tabs.Tab>
          <Tabs.Tab value="year" className={tab}>This year</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="month" className="p-4 text-sm text-ink">Focus a tab, move with the arrow keys, then press Enter or Space.</Tabs.Panel>
        <Tabs.Panel value="quarter" className="p-4 text-sm text-ink">The quarter's report.</Tabs.Panel>
        <Tabs.Panel value="year" className="p-4 text-sm text-ink">The year's report.</Tabs.Panel>
      </Tabs.Root>
      <p className="text-xs text-ink-muted">Loaded: {report}</p>
    </div>
  );
}
```

## Keep the current tab

`onValueChange` reports the tab the user chose. In a controlled strip, keep `value` as it is to stay on the current tab, for example while a form in it has unsaved changes.


React (live React example):

```tsx
import { useState } from 'react';
import { Tabs } from '@purpurabog/ui/headless';

const tab =
  'h-10 cursor-pointer border-0 border-b-2 border-solid border-hairline bg-transparent px-4 text-sm text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:border-border-interactive data-selected:font-semibold data-selected:text-ink';

export default function Example() {
  const [tabValue, setTabValue] = useState('form');
  const [dirty, setDirty] = useState(true);
  const [message, setMessage] = useState('');
  return (
    <div className="grid gap-2">
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={dirty} onChange={(e) => setDirty(e.target.checked)} />
        The contract form has unsaved changes
      </label>
      <Tabs.Root
        value={tabValue}
        onValueChange={(next) => {
          setMessage(dirty ? `Save the form before you open "${next}".` : '');
          if (!dirty) setTabValue(next);
        }}
      >
        <Tabs.List aria-label="Contract" className="flex gap-px">
          <Tabs.Tab value="form" className={tab}>Form</Tabs.Tab>
          <Tabs.Tab value="preview" className={tab}>Preview</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="form" className="p-4 text-sm text-ink">Edit the contract here.</Tabs.Panel>
        <Tabs.Panel value="preview" className="p-4 text-sm text-ink">The contract as the counterparty will see it.</Tabs.Panel>
      </Tabs.Root>
      <p role="status" className="text-xs text-error-text">{message}</p>
    </div>
  );
}
```

## Vertical tabs

`orientation="vertical"` makes ↑ and ↓ the keys that move, sets `aria-orientation="vertical"` on the list, and `data-orientation="vertical"` on `Root` and `List`. The column layout is yours.


React (live React example):

```tsx
import { Tabs } from '@purpurabog/ui/headless';

const tab =
  'box-border h-12 w-full cursor-pointer border-0 border-b border-s-[3px] border-solid border-b-hairline border-s-hairline bg-transparent px-4 text-start text-sm text-ink-muted hover:bg-layer-hover-1 hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:border-s-border-interactive data-selected:bg-layer-1 data-selected:font-semibold data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const panel = 'p-4 text-sm text-ink';

export default function Example() {
  return (
    <Tabs.Root orientation="vertical" className="flex min-h-48 max-w-xl border border-solid border-hairline">
      <Tabs.List aria-label="Settings" className="flex w-44 shrink-0 flex-col">
        <Tabs.Tab value="profile" className={tab}>Profile</Tabs.Tab>
        <Tabs.Tab value="notifications" className={tab}>Notifications</Tabs.Tab>
        <Tabs.Tab value="signatures" className={tab}>Signatures</Tabs.Tab>
        <Tabs.Tab value="audit" disabled className={tab}>Audit log</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="profile" className={panel}>Your name and department.</Tabs.Panel>
      <Tabs.Panel value="notifications" className={panel}>Email and in-app alerts.</Tabs.Panel>
      <Tabs.Panel value="signatures" className={panel}>Your saved signature.</Tabs.Panel>
      <Tabs.Panel value="audit" className={panel}>Who changed what.</Tabs.Panel>
    </Tabs.Root>
  );
}
```

## Dismissable tabs

With `dismissable`, Delete on a focused tab and a click on its `Close` call `onTabCloseRequest` with the tab's value. Remove the tab from your list to close it. A closed selected tab passes the selection to the first enabled tab (`onValueChange`), and focus moves to the tab now in its place, else the one before.

These tabs sit in a wrapper with their `Close`, so `Root` gets a `defaultValue`.


React (live React example):

```tsx
import { useState } from 'react';
import { Tabs } from '@purpurabog/ui/headless';

const files = [
  { value: 'contract', label: 'Contract.pdf' },
  { value: 'memo', label: 'Memo.docx' },
  { value: 'notes', label: 'Notes' },
];
const tab =
  'h-10 cursor-pointer border-0 border-b-2 border-solid border-hairline bg-transparent ps-4 pe-10 text-sm text-ink-muted hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:border-border-interactive data-selected:font-semibold data-selected:text-ink';

export default function Example() {
  const [open, setOpen] = useState(files);
  return (
    <Tabs.Root dismissable defaultValue="contract" onTabCloseRequest={(value) => setOpen((list) => list.filter((file) => file.value !== value))}>
      <Tabs.List aria-label="Open documents" className="flex gap-px">
        {open.map((file) => (
          <span key={file.value} className="relative flex">
            <Tabs.Tab value={file.value} className={tab}>{file.label}</Tabs.Tab>
            <Tabs.Close
              value={file.value}
              title={`Close ${file.label}`}
              className="absolute inset-y-0 end-2 my-auto grid size-6 cursor-pointer place-items-center border-0 bg-transparent p-1 text-ink-muted hover:bg-ghost-hover hover:text-ink"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
              </svg>
            </Tabs.Close>
          </span>
        ))}
      </Tabs.List>
      {open.map((file) => (
        <Tabs.Panel key={file.value} value={file.value} className="p-4 text-sm text-ink">
          {file.label}: the × or Delete on the focused tab closes it.
        </Tabs.Panel>
      ))}
      {open.length === 0 ? (
        <button type="button" onClick={() => setOpen(files)} className="mt-4 h-8 cursor-pointer border-0 bg-interactive px-4 text-sm text-on-primary">
          Open them again
        </button>
      ) : null}
    </Tabs.Root>
  );
}
```

## Style it

The contained look: tabs on the accent layer, the selected one on the layer with a blue top edge, and dividers that come from your CSS.


React (live React example):

```tsx
import { Tabs } from '@purpurabog/ui/headless';

const tab =
  'h-12 cursor-pointer border-0 bg-layer-accent-1 px-4 text-sm text-ink-muted hover:bg-layer-accent-hover-1 hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-selected:bg-layer-1 data-selected:font-semibold data-selected:text-ink data-selected:shadow-[inset_0_2px_0_0_var(--ui-border-interactive)] data-disabled:cursor-not-allowed data-disabled:bg-button-disabled data-disabled:text-on-color-disabled';

export default function Example() {
  return (
    <Tabs.Root>
      <Tabs.List aria-label="Contract details" className="flex">
        <Tabs.Tab value="overview" className={tab}>Overview</Tabs.Tab>
        <Tabs.Tab value="parties" className={tab}>Parties</Tabs.Tab>
        <Tabs.Tab value="history" className={tab}>History</Tabs.Tab>
        <Tabs.Tab value="archive" disabled className={tab}>Archive</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview" className="bg-layer-1 p-4 text-sm text-ink">Summary of the contract terms.</Tabs.Panel>
      <Tabs.Panel value="parties" className="bg-layer-1 p-4 text-sm text-ink">Signers and counterparties.</Tabs.Panel>
      <Tabs.Panel value="history" className="bg-layer-1 p-4 text-sm text-ink">Every change, newest first.</Tabs.Panel>
      <Tabs.Panel value="archive" className="bg-layer-1 p-4 text-sm text-ink">Archived copies.</Tabs.Panel>
    </Tabs.Root>
  );
}
```
```css
[role='tab'] { border-bottom: 2px solid #e0e0e0; color: #525252; }
[role='tab'][data-selected] { border-bottom-color: #0f62fe; color: #161616; font-weight: 600; }
[role='tab'][data-disabled] { color: #a8a8a8; cursor: not-allowed; }
[role='tablist'][data-orientation='vertical'] { flex-direction: column; }
[role='tabpanel']:focus-visible { outline: 2px solid #0f62fe; outline-offset: -2px; }
```

## Parts

### Tabs.Root

Renders a `<div>` that holds the state. It takes every `<div>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | — | The selected tab's value (controlled) |
| `defaultValue` | `string` | the first enabled `Tab` | The starting tab (uncontrolled). Found inside `List` and fragments only |
| `onValueChange` | `(value: string) => void` | — | After the user selects another tab, or a closed selected tab passed the selection on |
| `activation` | `'automatic' \| 'manual'` | `'automatic'` | `automatic` selects as focus moves; `manual` selects on Enter or Space |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | ← / → or ↑ / ↓ move |
| `dismissable` | `boolean` | `false` | Delete and `Close` ask to close a tab |
| `onTabCloseRequest` | `(value: string) => void` | — | A tab asked to close: drop it from your children to close it |

| Attribute | When |
|---|---|
| `data-orientation` | Always: `horizontal` or `vertical` |

### Tabs.List

Renders a `<div role="tablist">` (with `aria-orientation="vertical"` in a vertical strip). It handles the keys and the clicks of its tabs, and takes every `<div>` prop; name it with `aria-label` or `aria-labelledby`.

| Attribute | When |
|---|---|
| `data-orientation` | Always: `horizontal` or `vertical` |

### Tabs.Tab

Renders a `<button type="button" role="tab">` with `aria-selected`, `aria-controls` (its panel) and an id from `Root`. Only the tab stop has `tabIndex={0}`.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | — | Matches the `value` of its `Panel` (required) |
| `disabled` | `boolean` | `false` | `aria-disabled`: stays visible and announced, but can't be selected or reached with the arrows |

| Attribute | When |
|---|---|
| `data-selected` | It is the selected tab |
| `data-disabled` | `disabled` is set |
| `data-value` | Always: its `value` |

In dismissable tabs each enabled tab gets `aria-keyshortcuts="Delete"`, unless you pass your own.

### Tabs.Close

Renders a `<button type="button">` with `tabIndex={-1}` and `aria-hidden="true"`: Delete on the tab does the same for keyboard and screen reader users. Name it with `title` for the mouse.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | — | The tab it closes (required) |

### Tabs.Panel

Renders a `<div role="tabpanel">`, labelled by its tab and `hidden` unless its tab is selected. It is a Tab stop (`tabIndex={0}`) only when nothing inside it can take focus.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | — | Matches the `value` of its `Tab` (required) |

| Attribute | When |
|---|---|
| `data-selected` | Its tab is selected |

`Tabs.useTabsContext()` gives the enclosing `Root`'s state (`value`, `orientation`, `activation`, `dismissable` …) to your own parts, and `Tabs.tabIds(id, value)` the ids of a tab and its panel.

## Keyboard and accessibility

| Key | Does |
|---|---|
| ← / → | Previous / next enabled tab, wrapping (mirrored right-to-left); with `automatic` it also selects |
| ↑ / ↓ | The same with `orientation="vertical"` |
| Home / End | First / last enabled tab |
| Enter, Space | Select the focused tab |
| Delete | Asks to close the focused tab (`dismissable`) |
| Tab | Leaves the strip; the next stop is the panel, or the first thing inside it |

The parts set the roles, `aria-selected`, `aria-controls`, `aria-labelledby`, `aria-disabled`, `aria-orientation` and the roving `tabIndex`.

You add:

- A name for the strip: `aria-label` or `aria-labelledby` on `List`.
- `aria-label` on a tab that shows only an icon, and a tooltip for sighted users.
- Scroll buttons when the tabs overflow; keep them out of the Tab order, as the styled Tabs do.
