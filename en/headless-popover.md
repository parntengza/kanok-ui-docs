# Headless Popover

The `Popover` parts give you the behaviour of the styled [Popover](https://parntengza.github.io/kanok-ui-docs/en/popover/) and [Toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) with no styles: your own content in a popup in the top layer beside a trigger, flipped when it doesn't fit and placed again on scroll. The trigger gets `aria-expanded` and `aria-controls`. Esc on the trigger or in the popup and a press outside close it, and after Esc focus goes back to the trigger.

You own the trigger's look, the content, the caret and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Popover } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Popover } from '@purpurabog/ui/headless';

const filters = ['Mine', 'Awaiting signature', 'Archived'];

export default function Example() {
  return (
    <Popover.Root>
      <Popover.Trigger className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-open:bg-interactive data-open:text-on-primary">
        Filters
      </Popover.Trigger>
      <Popover.Popup aria-label="Filter requests" className="w-60 bg-layer-1 p-4 text-sm text-ink shadow-lg">
        <p className="mb-2 font-semibold">Filter requests</p>
        {filters.map((filter) => (
          <label key={filter} className="flex items-center gap-2 py-1">
            <input type="checkbox" name="filter" value={filter} defaultChecked={filter === 'Mine'} className="size-4 accent-interactive" />
            {filter}
          </label>
        ))}
      </Popover.Popup>
    </Popover.Root>
  );
}
```

The popup's content stays rendered while it is closed, so the checkboxes keep their state. Name the popup with `aria-label`: it is a `role="group"`.

## Anatomy

```tsx
<Popover.Root>
  <Popover.Trigger />
  <Popover.Popup>
    <Popover.Close />
  </Popover.Popup>
</Popover.Root>

// or with a trigger of your own
<Popover.Root>
  <Popover.Anchor>
    <YourTrigger />
    <Popover.Popup />
  </Popover.Anchor>
</Popover.Root>
```

## A form inside

`Close` is a button that closes the popup and gives focus back to the trigger. From your own code inside the popup, `dismiss('close')` from `Popover.usePopoverContext()` does the same: use it after a submit.


React (live React example):

```tsx
import { useState, type FormEvent } from 'react';
import { Popover } from '@purpurabog/ui/headless';

function RenameForm({ name, onSave }: { name: string; onSave: (name: string) => void }) {
  const { dismiss } = Popover.usePopoverContext();
  const save = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(String(new FormData(e.currentTarget).get('name')));
    dismiss('close');
  };
  return (
    <form onSubmit={save} className="grid gap-4">
      <label className="grid gap-2 text-xs text-ink-muted">
        Contract name
        <input name="name" defaultValue={name} required className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus" />
      </label>
      <div className="flex gap-2">
        <button type="submit" className="h-8 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Save</button>
        <Popover.Close className="h-8 bg-secondary px-4 text-sm text-on-primary hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Cancel</Popover.Close>
      </div>
    </form>
  );
}

export default function Example() {
  const [name, setName] = useState('Lease, Silom office');
  return (
    <div className="grid justify-items-start gap-2">
      <Popover.Root placement="bottom-start">
        <Popover.Trigger className="h-8 px-3 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Rename</Popover.Trigger>
        <Popover.Popup aria-label="Rename contract" className="w-72 bg-layer-1 p-4 shadow-lg">
          <RenameForm name={name} onSave={setName} />
        </Popover.Popup>
      </Popover.Root>
      <p className="text-xs text-ink-muted">Name: {name}</p>
    </div>
  );
}
```

## Placement and caret

`placement` takes `bottom` (the default), `top`, `left`, `right`, each with `-start` / `-end`. The popup flips when there is no room, and `data-side` says where it went. `gap` is the space to the trigger (8px by default; the styled one uses 10 with a caret, 0 without). With `caret`, the popup gets `--_caret-start`, where a caret `--_caret-w` wide (12px if unset) starts so it points at the trigger's centre.


React (live React example):

```tsx
import { Popover } from '@purpurabog/ui/headless';

const caret = [
  'pointer-events-none absolute h-1.5 w-3 bg-inherit',
  'group-data-[side=top]:top-full group-data-[side=top]:left-(--_caret-start) group-data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)]',
  'group-data-[side=bottom]:bottom-full group-data-[side=bottom]:left-(--_caret-start) group-data-[side=bottom]:[clip-path:polygon(50%_0,100%_100%,0_100%)]',
  'group-data-[side=left]:top-(--_caret-start) group-data-[side=left]:left-full group-data-[side=left]:h-3 group-data-[side=left]:w-1.5 group-data-[side=left]:[clip-path:polygon(0_0,100%_50%,0_100%)]',
  'group-data-[side=right]:top-(--_caret-start) group-data-[side=right]:right-full group-data-[side=right]:h-3 group-data-[side=right]:w-1.5 group-data-[side=right]:[clip-path:polygon(100%_0,0_50%,100%_100%)]',
].join(' ');

const placements = [
  { placement: 'top', text: 'Opens above' },
  { placement: 'bottom-start', text: 'Lined up with the start edge' },
  { placement: 'right', text: 'Opens on the right' },
] as const;

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {placements.map(({ placement, text }) => (
        <Popover.Root key={placement} placement={placement} gap={10} caret>
          <Popover.Trigger className="h-8 border border-interactive px-3 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
            {placement}
          </Popover.Trigger>
          <Popover.Popup aria-label={text} className="group w-max overflow-visible bg-layer-1 p-4 text-sm text-ink drop-shadow-md">
            {text}
            <span aria-hidden="true" className={caret} />
          </Popover.Popup>
        </Popover.Root>
      ))}
    </div>
  );
}
```

## A trigger of your own

When the trigger is your own component, wrap it in `Anchor` instead of using `Trigger`. The popup sits beside the anchor's first element, and a press anywhere inside the anchor doesn't count as outside. Give your trigger `triggerProps` (`aria-expanded`, `aria-controls`) and toggle with `setOpen` from `Popover.usePopoverContext()`. `onOpenChange` tells you why it changed.


React (live React example):

```tsx
import { useState } from 'react';
import { Popover } from '@purpurabog/ui/headless';

function AssigneeChip() {
  const { open, setOpen, triggerProps } = Popover.usePopoverContext();
  return (
    <button type="button" {...triggerProps} onClick={() => setOpen(!open, 'trigger')} className="flex h-8 items-center gap-2 rounded-full bg-layer-2 pe-3 ps-1 text-sm text-ink hover:bg-layer-hover-2 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
      <span aria-hidden="true" className="grid size-6 place-items-center rounded-full bg-interactive text-xs text-on-primary">AP</span>
      Ananya P.
    </button>
  );
}

export default function Example() {
  const [last, setLast] = useState('none');
  const log = (open: boolean, reason: Popover.PopoverChangeReason) => setLast(`${open ? 'opened' : 'closed'} by ${reason}`);
  return (
    <div className="grid justify-items-start gap-2">
      <Popover.Root onOpenChange={log}>
        <Popover.Anchor className="inline-block">
          <AssigneeChip />
          <Popover.Popup aria-label="Ananya P." className="w-64 bg-layer-1 p-4 text-sm text-ink shadow-lg">
            <p className="font-semibold">Ananya P.</p>
            <p className="text-ink-muted">Legal, Bangkok office</p>
            <p className="mt-2 text-ink-muted">3 contracts waiting for her signature</p>
          </Popover.Popup>
        </Popover.Anchor>
      </Popover.Root>
      <p className="text-xs text-ink-muted">Last change: {last}</p>
    </div>
  );
}
```

`Popover.PopoverChangeReason` is `'trigger'`, `'escape'`, `'outside'`, `'focus-out'` or `'close'`.

## Close it yourself

`dismissible={false}` turns off Esc and the press outside: only the trigger, `Close` or your own `open` close the popup. Use it when the user must answer, such as a "what's new" hint.


React (live React example):

```tsx
import { Popover } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Popover.Root dismissible={false} placement="right">
      <Popover.Trigger className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Bulk signing
      </Popover.Trigger>
      <Popover.Popup aria-label="New feature" className="grid w-60 gap-2 bg-layer-1 p-4 text-sm text-ink shadow-lg">
        <p className="font-semibold">New: sign up to 50 contracts at once</p>
        <p className="text-ink-muted">Select the contracts in the list, then choose Sign.</p>
        <Popover.Close className="h-8 justify-self-start bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Got it</Popover.Close>
      </Popover.Popup>
    </Popover.Root>
  );
}
```

## Toggletip

A toggletip is a popover behind an "i" button, closed as soon as focus moves away. `closeOnFocusOut` adds that rule: focus leaving both the trigger and the popup closes it (`focus-out`). Put the popup right after the trigger so the next Tab reaches its links. Name both the trigger and the popup.


React (live React example):

```tsx
import { Popover } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="flex items-center gap-1 text-sm text-ink">
      Retention period
      <Popover.Root closeOnFocusOut gap={10} caret>
        <Popover.Trigger aria-label="About the retention period" className="grid size-6 place-items-center text-ink-muted hover:text-ink aria-expanded:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
            <path d="M8.5 11V6.5h-2v1h1V11H6v1h4v-1h-1.5ZM8 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
          </svg>
        </Popover.Trigger>
        <Popover.Popup aria-label="About the retention period" className="group w-max max-w-72 overflow-visible bg-layer-1 p-4 text-sm text-ink drop-shadow-md">
          Signed copies are kept for 10 years.{' '}
          <a href="#toggletip" className="text-link underline focus-visible:outline-2 focus-visible:outline-focus">Read the policy</a>
          <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-(--_caret-start) h-1.5 w-3 bg-inherit [clip-path:polygon(50%_0,100%_100%,0_100%)] group-data-[side=top]:top-full group-data-[side=top]:bottom-auto group-data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)]" />
        </Popover.Popup>
      </Popover.Root>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { Popover } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Popover.Root placement="bottom-end">
      <Popover.Trigger aria-label="Table settings" className="grid size-12 place-items-center text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:bg-layer-1 data-open:shadow-md">
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
          <path d="M13.5 8.4a5.4 5.4 0 0 0 0-.8l1.4-1.1-1.3-2.3-1.7.6a5 5 0 0 0-.7-.4L10.9 2.6H8.3L8 4.4l-.7.4-1.7-.6-1.3 2.3 1.4 1.1a5.4 5.4 0 0 0 0 .8L4.3 9.5l1.3 2.3 1.7-.6.7.4.3 1.8h2.6l.3-1.8.7-.4 1.7.6 1.3-2.3zM9.6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
        </svg>
      </Popover.Trigger>
      <Popover.Popup aria-label="Table settings" className="w-52 bg-layer-1 p-4 text-sm text-ink shadow-md data-[side=top]:shadow-[0_-2px_6px_rgb(0_0_0/0.3)]">
        <p className="mb-2 font-semibold">Columns</p>
        <label className="flex items-center gap-2 py-1"><input type="checkbox" defaultChecked className="size-4 accent-interactive" />Owner</label>
        <label className="flex items-center gap-2 py-1"><input type="checkbox" defaultChecked className="size-4 accent-interactive" />Expiry date</label>
        <label className="flex items-center gap-2 py-1"><input type="checkbox" className="size-4 accent-interactive" />Department</label>
      </Popover.Popup>
    </Popover.Root>
  );
}
```
```css
/* className="trigger" on Trigger, "box" on Popup */
.trigger[data-open] { background: #f4f4f4; box-shadow: 0 2px 6px rgb(0 0 0 / 0.3); }
.box { width: 208px; padding: 16px; background: #f4f4f4; box-shadow: 0 2px 6px rgb(0 0 0 / 0.3); }
.box[data-side='top'] { box-shadow: 0 -2px 6px rgb(0 0 0 / 0.3); }
```

## Parts

### Popover.Root

Renders no element of its own: it holds the open state, places the popup and closes it on Esc and on a press outside.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Shown (controlled) |
| `defaultOpen` | `boolean` | `false` | Shown at first (uncontrolled) |
| `onOpenChange` | `(open: boolean, reason: PopoverChangeReason) => void` | | After it opens or closes (changes only), with why |
| `dismissible` | `boolean` | `true` | Esc on the trigger or in the popup, and a press outside both, close it |
| `closeOnFocusOut` | `boolean` | `false` | Focus moving out of the trigger and the popup closes it (toggletip) |
| `placement` | `Placement` | `'bottom'` | `top`, `bottom`, `left`, `right`, each with `-start` / `-end` |
| `gap` | `number` | `8` | Space between the trigger and the popup, in px |
| `caret` | `boolean` | `false` | Writes `--_caret-start` on the popup |

`Popover.usePopoverContext()` returns the `Root`'s state to any component inside it: `open`, `popupId`, `triggerProps`, `setOpen(open, reason)` and `dismiss(reason)` (closes, and gives focus back to the trigger when it was inside, except after a press outside).

### Popover.Trigger

A `<button type="button">` that toggles the popup (reason `trigger`), with `aria-expanded` and `aria-controls`. The popup sits beside it. It takes every button prop except `type`.

| Attribute | When |
|---|---|
| `data-open` | The popup is open |

### Popover.Anchor

A `<span>` around a trigger of your own, used in place of `Trigger`. The popup sits beside its first element child; a press anywhere inside it is not outside; after Esc focus goes back to that child (or the first focusable element in it).

| Attribute | When |
|---|---|
| `data-open` | The popup is open |

### Popover.Popup

A `<div role="group" popover="manual">` in the top layer, with the id the trigger's `aria-controls` points to. Your `role` wins. Its content stays rendered while closed. It takes every div prop except `popover` and `id`.

| Attribute | When |
|---|---|
| `data-open` | Open |
| `data-side` | `top`, `bottom`, `left` or `right`: where it went |

With `caret` on `Root`, it also gets the CSS variable `--_caret-start`.

### Popover.Close

A `<button type="button">` that closes the popup (reason `close`) and gives focus back to the trigger. It takes every button prop except `type`, and has no data attributes.

## Keyboard and accessibility

| Key | What it does |
|---|---|
| Enter, Space | On the trigger: open or close |
| Tab | Moves through the trigger and the content in page order; with `closeOnFocusOut`, leaving both closes it |
| Esc | With `dismissible`, from the trigger or the popup: closes the popup, unless something else handled the key first (it checks `defaultPrevented`), and gives focus back to the trigger |

The parts set `aria-expanded` and `aria-controls` on the trigger and `role="group"` on the popup. Focus doesn't move into the popup when it opens.

You add:

- A name for the popup (`aria-label` or `aria-labelledby`), and for an icon-only trigger.
- The popup right after the trigger in the DOM, so the next Tab reaches its content.
- For a task the user must finish before going on, a modal instead.
