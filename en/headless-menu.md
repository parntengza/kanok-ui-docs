# Headless Menu

The `Menu` parts give you the behaviour of the styled [Menu](https://parntengza.github.io/kanok-ui-docs/en/menu/) with no styles, in the WAI-ARIA menu button pattern: a trigger that opens a `role="menu"` popup in the top layer, focus moved to the first item (or the last), ↑ / ↓ that wrap past disabled items, Home / End, typing to jump, and Esc, Tab, a press outside or a picked item closing it with focus given back. Items can be actions, check boxes or radios, and open submenus.

You own the trigger's look, every row, the check marks and chevrons, and every style. The parts show their state as `data-*` attributes; the highlighted item is the focused one, so style it with `focus:`.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Menu } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { Menu } from '@purpurabog/ui/headless';

const item = 'flex h-8 cursor-pointer items-center px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';

export default function Example() {
  const [picked, setPicked] = useState('nothing yet');
  return (
    <div className="grid justify-items-start gap-2">
      <Menu.Root>
        <Menu.Trigger className="group flex h-10 min-w-48 items-center justify-between gap-2 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Actions
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-popup-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Menu.Trigger>
        <Menu.Popup className="min-w-48 bg-layer-1 py-1 shadow-lg">
          <Menu.Item className={item} onClick={() => setPicked('Send for signature')}>Send for signature</Menu.Item>
          <Menu.Item className={item} onClick={() => setPicked('Save as draft')}>Save as draft</Menu.Item>
          <Menu.Item className={item} disabled>Export PDF</Menu.Item>
          <Menu.Separator className="my-1 h-px border-0 bg-hairline" />
          <Menu.Item className={`${item} hover:bg-button-danger hover:text-on-primary focus:bg-button-danger focus:text-on-primary`} onClick={() => setPicked('Discard')}>
            Discard
          </Menu.Item>
        </Menu.Popup>
      </Menu.Root>
      <p className="text-xs text-ink-muted">Picked: {picked}</p>
    </div>
  );
}
```

The popup is named by the trigger (`aria-labelledby`) unless you give it an `aria-label`. `onClick` on an item runs on a click and on Enter or Space, then every level of the menu closes.

## Anatomy

```tsx
<Menu.Root>
  <Menu.Trigger />
  <Menu.Popup>
    <Menu.Item />
    <Menu.CheckboxItem />
    <Menu.Separator />
    <Menu.Group>
      <Menu.GroupLabel />
      <Menu.Item />
    </Menu.Group>
    <Menu.RadioGroup>
      <Menu.RadioItem value="…" />
    </Menu.RadioGroup>
    <Menu.SubmenuRoot>
      <Menu.SubmenuTrigger>
        <Menu.Popup>
          <Menu.Item />
        </Menu.Popup>
      </Menu.SubmenuTrigger>
    </Menu.SubmenuRoot>
  </Menu.Popup>
</Menu.Root>
```

## Placement and width

The popup opens below the trigger, lined up with its start edge (`placement="bottom-start"` on `Popup`). Any placement works, and it flips when there is no room; `data-side` says where it went. `matchWidth` makes it as wide as the trigger, as Carbon's menu button with `bottom`.


React (live React example):

```tsx
import { Menu } from '@purpurabog/ui/headless';

const item = 'flex h-10 cursor-pointer items-center px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
const trigger = 'h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-popup-open:bg-interactive data-popup-open:text-on-primary';

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Menu.Root>
        <Menu.Trigger className={`${trigger} min-w-48 text-start`}>As wide as the button</Menu.Trigger>
        <Menu.Popup matchWidth className="bg-layer-1 py-1 shadow-lg">
          <Menu.Item className={item}>Export PDF</Menu.Item>
          <Menu.Item className={item}>Export Word (.docx)</Menu.Item>
        </Menu.Popup>
      </Menu.Root>
      <Menu.Root>
        <Menu.Trigger className={trigger}>End edge, above</Menu.Trigger>
        <Menu.Popup placement="top-end" className="bg-layer-1 py-1 shadow-lg data-[side=top]:shadow-[0_-2px_6px_rgb(0_0_0/0.3)]">
          <Menu.Item className={item}>Export PDF</Menu.Item>
          <Menu.Item className={item}>Export Word (.docx) with comments</Menu.Item>
        </Menu.Popup>
      </Menu.Root>
    </div>
  );
}
```

## Check boxes and radio groups

- `CheckboxItem` is an on / off item (`menuitemcheckbox`): `checked` and `onCheckedChange`, or `defaultChecked`.
- `RadioGroup` holds `RadioItem`s (`menuitemradio`), exactly one checked: `value` and `onValueChange`, or `defaultValue`.
- Both get `aria-checked` and `data-checked` to draw a check mark on. `Menu.useMenuItemContext()` gives `checked` to a component inside the item.
- `Group` with a `GroupLabel` names a set of items. `RadioGroup` is a `Group` too.
- Every item closes the menu when picked; `closeOnClick={false}` keeps it open, handy for check boxes.


React (live React example):

```tsx
import { useState } from 'react';
import { Menu } from '@purpurabog/ui/headless';

const item = 'group flex h-8 cursor-pointer items-center gap-2 px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="invisible size-4 fill-current group-data-checked:visible">
      <path d="M6 12.4 2.3 8.7l.7-.7 3 3 6.3-6.3.7.7z" />
    </svg>
  );
}

export default function Example() {
  const [archived, setArchived] = useState(true);
  const [drafts, setDrafts] = useState(false);
  const [sort, setSort] = useState('date');
  return (
    <div className="grid justify-items-start gap-2">
      <Menu.Root>
        <Menu.Trigger className="h-10 px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">View options</Menu.Trigger>
        <Menu.Popup className="min-w-56 bg-layer-1 py-1 shadow-lg">
          <Menu.CheckboxItem className={item} checked={archived} onCheckedChange={setArchived} closeOnClick={false}>
            <Check />
            Show archived
          </Menu.CheckboxItem>
          <Menu.CheckboxItem className={item} checked={drafts} onCheckedChange={setDrafts} closeOnClick={false}>
            <Check />
            Show drafts
          </Menu.CheckboxItem>
          <Menu.Separator className="my-1 h-px border-0 bg-hairline" />
          <Menu.RadioGroup value={sort} onValueChange={setSort}>
            <Menu.GroupLabel className="px-4 pt-2 pb-1 text-xs font-semibold text-ink-muted">Sort by</Menu.GroupLabel>
            <Menu.RadioItem value="name" className={item}><Check />Name</Menu.RadioItem>
            <Menu.RadioItem value="date" className={item}><Check />Date modified</Menu.RadioItem>
            <Menu.RadioItem value="expiry" className={item}><Check />Expiry date</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Popup>
      </Menu.Root>
      <p className="text-xs text-ink-muted">
        Archived: {String(archived)}. Drafts: {String(drafts)}. Sort by: {sort}
      </p>
    </div>
  );
}
```

## Submenus

A `SubmenuRoot` inside the popup holds a `SubmenuTrigger`, an item that opens the submenu's own `Popup` (put inside it) beside it: on hover after `delay` (150ms, focus stays), a click, Enter, Space or → (← right-to-left). ← or Esc closes only that level. Picking an item in a submenu closes every level.


React (live React example):

```tsx
import { useState } from 'react';
import { Menu } from '@purpurabog/ui/headless';

const item = 'flex h-8 cursor-pointer items-center justify-between gap-4 px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-popup-open:bg-ghost-hover data-popup-open:text-ink';
const popup = 'min-w-40 bg-layer-1 py-1 shadow-lg';

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current rtl:-scale-x-100">
      <path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" />
    </svg>
  );
}

export default function Example() {
  const [picked, setPicked] = useState('nothing yet');
  const pick = (label: string) => () => setPicked(label);
  return (
    <div className="grid justify-items-start gap-2">
      <Menu.Root>
        <Menu.Trigger className="h-10 px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Document actions</Menu.Trigger>
        <Menu.Popup className={popup}>
          <Menu.Item className={item} onClick={pick('Open')}>Open</Menu.Item>
          <Menu.SubmenuRoot>
            <Menu.SubmenuTrigger className={item} label="Export as">
              Export as
              <Chevron />
              <Menu.Popup className={popup}>
                <Menu.Item className={item} onClick={pick('PDF')}>PDF</Menu.Item>
                <Menu.Item className={item} onClick={pick('Word (.docx)')}>Word (.docx)</Menu.Item>
                <Menu.SubmenuRoot>
                  <Menu.SubmenuTrigger className={item} label="Image">
                    Image
                    <Chevron />
                    <Menu.Popup className={popup}>
                      <Menu.Item className={item} onClick={pick('PNG')}>PNG</Menu.Item>
                      <Menu.Item className={item} onClick={pick('JPEG')}>JPEG</Menu.Item>
                    </Menu.Popup>
                  </Menu.SubmenuTrigger>
                </Menu.SubmenuRoot>
              </Menu.Popup>
            </Menu.SubmenuTrigger>
          </Menu.SubmenuRoot>
        </Menu.Popup>
      </Menu.Root>
      <p className="text-xs text-ink-muted">Picked: {picked}</p>
    </div>
  );
}
```

`label` on an item is the text typing matches (as `data-label`); give it when the item holds more than its name, such as a chevron or a shortcut.

## A combo button

A trigger can be any button: `render` hands you the trigger's props and the open state to put on your own element. `anchor` on `Popup` places the menu beside another element, here the whole pair of buttons, and `matchWidth` makes it as wide.


React (live React example):

```tsx
import { useRef, useState } from 'react';
import { Menu } from '@purpurabog/ui/headless';

const item = 'flex h-10 cursor-pointer items-center px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  const pair = useRef<HTMLDivElement>(null);
  const [last, setLast] = useState('none');
  return (
    <div className="grid justify-items-start gap-2">
      <div ref={pair} className="inline-flex gap-px">
        <button type="button" onClick={() => setLast('Save')} className="h-10 min-w-28 bg-interactive px-4 text-start text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Save
        </button>
        <Menu.Root>
          <Menu.Trigger
            aria-label="Additional actions"
            render={(props, { open }) => (
              <button {...props} className="grid size-10 place-items-center bg-interactive text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
                <svg viewBox="0 0 16 16" aria-hidden="true" className={`size-4 fill-current transition-transform ${open ? 'rotate-180' : ''}`}>
                  <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
                </svg>
              </button>
            )}
          />
          <Menu.Popup anchor={pair} matchWidth className="bg-layer-1 py-1 shadow-lg">
            <Menu.Item className={item} onClick={() => setLast('Save as draft')}>Save as draft</Menu.Item>
            <Menu.Item className={item} onClick={() => setLast('Save and send')}>Save and send</Menu.Item>
          </Menu.Popup>
        </Menu.Root>
      </div>
      <p className="text-xs text-ink-muted">Last action: {last}</p>
    </div>
  );
}
```

## Open state

Hold the state with `open` and `onOpenChange`, or give `defaultOpen`. `onOpenChange` reports changes only, with why: `trigger-press`, `trigger-hover` (a submenu), `item-press`, `escape-key`, `list-navigation` (← out of a submenu), `focus-out` or `outside-press`. `initialFocus` on `Root` forces which item takes focus on open (`first`, `last` or `none`); left out, ↑ on the trigger starts on the last item and everything else on the first.


React (live React example):

```tsx
import { useState } from 'react';
import { Menu } from '@purpurabog/ui/headless';

const item = 'flex h-10 cursor-pointer items-center px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [why, setWhy] = useState('none');
  return (
    <div className="grid justify-items-start gap-2">
      <Menu.Root
        open={open}
        onOpenChange={(next, reason) => {
          setOpen(next);
          setWhy(reason);
        }}
      >
        <Menu.Trigger aria-label="Options for Lease, Silom office" className="grid size-10 place-items-center text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-popup-open:bg-layer-1 data-popup-open:shadow-lg">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
            <circle cx="8" cy="4" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="8" cy="12" r="1.5" />
          </svg>
        </Menu.Trigger>
        <Menu.Popup className="min-w-40 bg-layer-1 py-1 shadow-lg">
          <Menu.Item className={item}>Edit</Menu.Item>
          <Menu.Item className={item}>Duplicate</Menu.Item>
          <Menu.Item className={item}>Delete</Menu.Item>
        </Menu.Popup>
      </Menu.Root>
      <p className="text-xs text-ink-muted">Open: {String(open)}. Last reason: {why}</p>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { Menu } from '@purpurabog/ui/headless';

const item = 'grid h-8 cursor-pointer grid-cols-[1rem_1fr_max-content] items-center gap-x-2 px-4 text-sm text-ink-muted outline-none hover:bg-ghost-hover hover:text-ink focus:bg-ghost-hover focus:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <Menu.Root>
      <Menu.Trigger className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-popup-open:bg-interactive data-popup-open:text-on-primary">
        Document options
      </Menu.Trigger>
      <Menu.Popup className="min-w-52 bg-layer-1 py-1 shadow-lg outline-none data-[side=top]:shadow-[0_-2px_6px_rgb(0_0_0/0.3)]">
        <Menu.Item className={item} label="Edit">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z" /></svg>
          Edit
          <kbd className="font-sans text-xs">⌘E</kbd>
        </Menu.Item>
        <Menu.Item className={item} label="Archive" disabled>
          <span />
          Archive (signed only)
          <span />
        </Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  );
}
```
```css
/* className="trigger" on Trigger, "menu" on Popup, "item" on each item */
.trigger[data-popup-open] { background: #0f62fe; color: #fff; }
.menu { min-width: 208px; padding-block: 4px; background: #f4f4f4; box-shadow: 0 2px 6px rgb(0 0 0 / 0.3); }
.menu[data-side='top'] { box-shadow: 0 -2px 6px rgb(0 0 0 / 0.3); }
.item:focus { background: #e8e8e8; outline: none; }
.item:focus-visible { outline: 2px solid #0f62fe; outline-offset: -2px; }
.item[data-disabled] { color: #a8a8a8; cursor: not-allowed; }
.item[data-checked] .check { visibility: visible; }
```

## Parts

### Menu.Root

Renders no element of its own: it holds the open state.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Open (controlled) |
| `defaultOpen` | `boolean` | `false` | Open at first (uncontrolled) |
| `onOpenChange` | `(open: boolean, reason: OpenChangeReason) => void` | | After it opens or closes (changes only), with why |
| `initialFocus` | `'first' \| 'last' \| 'none'` | | Which item takes focus on open; left out, the trigger decides (↑ the last, else the first) |
| `id` | `string` | generated | Base of the ids: `<id>-trigger`, `<id>-menu` |

`Menu.useMenuContext()` returns the nearest `Root`'s or `SubmenuRoot`'s state (`open`, `popupId`, `setOpen` …), for example to turn a chevron. `Menu.ownItems(popup)` lists a popup's own items (not those of its submenus).

### Menu.Trigger

A `<button type="button">` with `aria-haspopup="menu"` (yours wins), `aria-expanded` and `aria-controls`, and the id `<id>-trigger`, which names the popup. A click toggles the menu; ↓ opens it on the first item, ↑ on the last.

| Prop | Type | Default | |
|---|---|---|---|
| `render` | `(props, { open }) => ReactElement` | | Render your own element with the trigger's props instead of a `<button>` |

| Attribute | When |
|---|---|
| `data-popup-open` | The menu is open |

### Menu.Popup

A `<div role="menu" tabindex="-1" popover="manual">` in the top layer, with the id `<id>-menu`, named by the trigger unless you give `aria-label` or `aria-labelledby`. Its items are always rendered (hidden while closed). Inside a `SubmenuTrigger` it is that item's submenu, placed beside it at the inline end.

| Prop | Type | Default | |
|---|---|---|---|
| `anchor` | `RefObject<Element \| null>` | the trigger | What the menu sits beside |
| `placement` | `Placement` | `'bottom-start'` | Where it opens beside the anchor (not for a submenu) |
| `matchWidth` | `boolean` | `false` | As wide as the anchor (not for a submenu) |

| Attribute | When |
|---|---|
| `data-open` | Open |
| `data-side` | `top`, `bottom`, `left` or `right`: where it went |

### Menu.Item, CheckboxItem, RadioItem

A `<div tabindex="-1">` with `role="menuitem"`, `"menuitemcheckbox"` or `"menuitemradio"`. A click, Enter or Space activates it: a `CheckboxItem` flips, a `RadioItem` becomes its group's value, then `onClick` runs and the menu closes. A disabled item stays visible and announced (`aria-disabled`) but the keys skip it and activating it does nothing.

| Prop | Type | Default | |
|---|---|---|---|
| `onClick` | `(event) => void` | | On a click and on Enter / Space, before the menu closes (not when disabled) |
| `label` | `string` | the item's text | What typing matches, as `data-label` |
| `disabled` | `boolean` | `false` | Skipped by the keys; does nothing |
| `closeOnClick` | `boolean` | `true` | Activating it closes every level |
| `checked` | `boolean` | | `CheckboxItem`: on (controlled) |
| `defaultChecked` | `boolean` | `false` | `CheckboxItem`: on at first |
| `onCheckedChange` | `(checked: boolean) => void` | | `CheckboxItem`: after it flips |
| `value` | `string` | | `RadioItem`: what it stands for in its group (required) |

| Attribute | When |
|---|---|
| `data-disabled` | Disabled |
| `data-checked` | A checked `CheckboxItem` or `RadioItem` |

`Menu.useMenuItemContext()` returns `{ checked }` of the enclosing item.

### Menu.RadioGroup

A `Group` of `RadioItem`s, exactly one checked.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | The checked item's value (controlled) |
| `defaultValue` | `string` | `''` | The starting value (uncontrolled) |
| `onValueChange` | `(value: string) => void` | | After another item was picked |

### Menu.Group, GroupLabel

`Group` is a `<div role="group">` named by its `GroupLabel` (a `<div>`) unless you give it `aria-labelledby`. They add no props and no data attributes.

### Menu.Separator

An `<hr>` between items.

### Menu.SubmenuRoot, SubmenuTrigger

`SubmenuRoot` holds a submenu's state and takes the same props as `Root`. `SubmenuTrigger` is a `<div role="menuitem" aria-haspopup="menu">` with `aria-expanded`; the submenu's `Popup` goes inside it.

| Prop | Type | Default | |
|---|---|---|---|
| `label` | `string` | the item's text | What typing matches, as `data-label` |
| `disabled` | `boolean` | `false` | The submenu doesn't open |
| `delay` | `number` | `150` | Hover time in ms before the submenu opens or closes |

| Attribute | When |
|---|---|
| `data-popup-open` | Its submenu is open |
| `data-disabled` | Disabled |

## Keyboard and accessibility

| Key | On the trigger | In the menu |
|---|---|---|
| Enter, Space | Open on the first item | Activate the focused item (or open its submenu) |
| ↓ | Open on the first item | Next item, wrapping; disabled items are skipped |
| ↑ | Open on the last item | Previous item, wrapping |
| Home / End | | First / last item |
| Letters | | Next item whose `label` (or text) starts with them |
| → (← right-to-left) | | Open the focused item's submenu |
| ← (→ right-to-left) | | In a submenu: close it, focus back on its item |
| Esc | | Close this level and give focus back |
| Tab | | Close the menu and give focus back to the trigger |

The parts set `role="menu"`, the item roles, `aria-haspopup`, `aria-expanded`, `aria-controls`, `aria-checked` and `aria-disabled`, and move focus in and out.

You add:

- A name for an icon-only trigger (`aria-label`).
- A visible highlight on the focused item (`focus:`), and a check mark for `data-checked`.
- For a danger item, the consequence in words (for example a visually hidden "This cannot be undone").
