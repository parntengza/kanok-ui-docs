# Headless Edit in place

`EditInPlace` is the behaviour of the styled [Edit in place](https://parntengza.github.io/kanok-ui-docs/en/edit-in-place/) as unstyled React parts: a value shown in a text field that is edited where it is, with Edit, Cancel and Save buttons. The parts hold the value and the value editing started from, start editing on focus or typing, save on Enter, put the value back on Escape, and save or put back when the focus leaves. Each button shows only when it applies, and a press on one keeps the focus in the field.

You own the markup and every style: the icons, the hover fill, the focus line, the error text and the read-only note. State shows as `data-*` attributes to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { EditInPlace } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { EditInPlace } from '@purpurabog/ui/headless';

const button = 'inline-flex size-10 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:text-ink-disabled disabled:hover:bg-transparent';

export default function Example() {
  return (
    <div className="max-w-sm">
      <EditInPlace.Root defaultValue="Warehouse lease, Bang Na">
        <EditInPlace.Group className="group flex items-center hover:bg-field-1 data-editing:bg-field-1 has-[input:focus]:outline-2 has-[input:focus]:outline-focus">
          <EditInPlace.Input aria-label="Contract title" className="h-10 min-w-0 flex-1 cursor-pointer bg-transparent px-4 text-sm text-ink outline-none" />
          <EditInPlace.Action action="edit" aria-label="Edit" className={`${button} invisible group-hover:visible`}>✎</EditInPlace.Action>
          <EditInPlace.Action action="cancel" aria-label="Cancel" className={button}>✕</EditInPlace.Action>
          <EditInPlace.Action action="save" aria-label="Save" className={button}>✓</EditInPlace.Action>
        </EditInPlace.Group>
      </EditInPlace.Root>
    </div>
  );
}
```

## Anatomy

```tsx
<EditInPlace.Root>
  <EditInPlace.Group>
    <EditInPlace.Input />
    <EditInPlace.Action action="edit" />
    <EditInPlace.Action action="cancel" />
    <EditInPlace.Action action="save" />
  </EditInPlace.Group>
  <EditInPlace.InvalidText />
</EditInPlace.Root>
```

`Root` renders nothing of its own. `Group` is the box that hears the focus move between the field and its buttons; put every part that takes focus inside it.

## Save and cancel

`onSave` gets the value when a change is saved: with Save, with Enter, or when the focus leaves the group with a valid change. `onCancel` gets the value put back: with Cancel, with Escape, or when the focus leaves without a valid change. Save and Cancel are enabled only once the value has changed (spaces at the ends don't count).


React (live React example):

```tsx
import { useState } from 'react';
import { EditInPlace } from '@purpurabog/ui/headless';

const button = 'inline-flex size-10 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:text-ink-disabled disabled:hover:bg-transparent';

export default function Example() {
  const [last, setLast] = useState('');
  return (
    <div className="grid max-w-sm gap-2">
      <EditInPlace.Root
        defaultValue="PO-2026-0815"
        onSave={(value) => setLast(`saved "${value}"`)}
        onCancel={(value) => setLast(`put back "${value}"`)}
      >
        <EditInPlace.Group className="group flex items-center hover:bg-field-1 data-editing:bg-field-1 has-[input:focus]:outline-2 has-[input:focus]:outline-focus">
          <EditInPlace.Input aria-label="Purchase order number" className="h-10 min-w-0 flex-1 cursor-pointer bg-transparent px-4 text-sm text-ink outline-none" />
          <EditInPlace.Action action="edit" aria-label="Edit" className={`${button} invisible group-hover:visible`}>✎</EditInPlace.Action>
          <EditInPlace.Action action="cancel" aria-label="Cancel" className={button}>✕</EditInPlace.Action>
          <EditInPlace.Action action="save" aria-label="Save" className={button}>✓</EditInPlace.Action>
        </EditInPlace.Group>
      </EditInPlace.Root>
      <p className="text-xs text-ink-muted">Last event: {last}</p>
    </div>
  );
}
```

## Controlled value

Hold the value with `value` and `onValueChange`. `onValueChange` gets every keystroke, and the value put back on cancel. Send the value to your server in `onSave`.


React (live React example):

```tsx
import { useState } from 'react';
import { EditInPlace } from '@purpurabog/ui/headless';

const button = 'inline-flex size-10 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:text-ink-disabled disabled:hover:bg-transparent';

export default function Example() {
  const [reference, setReference] = useState('REF-104');
  const [saved, setSaved] = useState('REF-104');
  return (
    <div className="grid max-w-sm gap-2">
      <EditInPlace.Root value={reference} onValueChange={setReference} onSave={(value) => setTimeout(() => setSaved(value.trim()), 400)}>
        <EditInPlace.Group className="group flex items-center hover:bg-field-1 data-editing:bg-field-1 has-[input:focus]:outline-2 has-[input:focus]:outline-focus">
          <EditInPlace.Input aria-label="Reference" className="h-10 min-w-0 flex-1 cursor-pointer bg-transparent px-4 text-sm text-ink outline-none" />
          <EditInPlace.Action action="edit" aria-label="Edit" className={`${button} invisible group-hover:visible`}>✎</EditInPlace.Action>
          <EditInPlace.Action action="cancel" aria-label="Cancel" className={button}>✕</EditInPlace.Action>
          <EditInPlace.Action action="save" aria-label="Save" className={button}>✓</EditInPlace.Action>
        </EditInPlace.Group>
      </EditInPlace.Root>
      <p className="text-xs text-ink-muted">Value: {reference} · Saved on the server: {saved}</p>
    </div>
  );
}
```

## Invalid, with an error text

`invalid` blocks saving: Save is disabled, Enter doesn't save, and leaving puts the value back. It sets `aria-invalid` on the field and `data-invalid` on the group and the field. Put the error text in `InvalidText`: it shows only while `invalid` and describes the field (`aria-describedby`).


React (live React example):

```tsx
import { useState } from 'react';
import { EditInPlace } from '@purpurabog/ui/headless';

const button = 'inline-flex size-10 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:text-ink-disabled disabled:hover:bg-transparent';

export default function Example() {
  const [taxId, setTaxId] = useState('0105556012345');
  return (
    <div className="max-w-sm">
      <EditInPlace.Root value={taxId} onValueChange={setTaxId} invalid={!/^\d{13}$/.test(taxId)}>
        <EditInPlace.Group className="group flex items-center hover:bg-field-1 data-editing:bg-field-1 has-[input:focus]:outline-2 has-[input:focus]:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error">
          <EditInPlace.Input aria-label="Tax ID" className="h-10 min-w-0 flex-1 cursor-pointer bg-transparent px-4 text-sm text-ink outline-none" />
          <EditInPlace.Action action="edit" aria-label="Edit" className={`${button} invisible group-hover:visible`}>✎</EditInPlace.Action>
          <EditInPlace.Action action="cancel" aria-label="Cancel" className={button}>✕</EditInPlace.Action>
          <EditInPlace.Action action="save" aria-label="Save" className={button}>✓</EditInPlace.Action>
        </EditInPlace.Group>
        <EditInPlace.InvalidText className="mt-2 text-xs text-error-text">A tax ID has 13 digits</EditInPlace.InvalidText>
      </EditInPlace.Root>
    </div>
  );
}
```

## Read-only

`readOnly` keeps the value: the field is `readonly`, no button shows, and a click on the field sets `noteOpen` in the context. Show your note with it, for example in a [Headless Popover](https://parntengza.github.io/kanok-ui-docs/en/headless-popover/), and close it with `setNoteOpen(false)`.


React (live React example):

```tsx
import { EditInPlace } from '@purpurabog/ui/headless';

function ReadOnlyNote() {
  const { noteOpen, setNoteOpen } = EditInPlace.useEditInPlaceContext();
  if (!noteOpen) return null;
  return (
    <div role="status" className="mt-2 flex items-start justify-between gap-4 bg-inverse-surface-1 p-4 text-sm text-inverse-ink">
      Contract numbers are set when the contract is signed.
      <button type="button" onClick={() => setNoteOpen(false)} className="underline focus-visible:outline-2 focus-visible:outline-focus-inverse">Close</button>
    </div>
  );
}

export default function Example() {
  return (
    <div className="max-w-sm">
      <EditInPlace.Root defaultValue="CT-2026-0142" readOnly>
        <EditInPlace.Group className="flex items-center data-readonly:cursor-not-allowed">
          <EditInPlace.Input aria-label="Contract number" className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus" />
        </EditInPlace.Group>
        <ReadOnlyNote />
      </EditInPlace.Root>
    </div>
  );
}
```

The `Action`s show in their own mode only: `edit` at rest, `cancel` and `save` while editing, none when read-only. For an "Edit off" button beside a read-only field, render your own button that calls `setNoteOpen`.

## Your own buttons

`render` on an `Action` renders your component with the action's props (`type`, `disabled`, `data-disabled`, `onMouseDown`, `onClick` and your own), for example a styled icon button with a tooltip. Spread them all onto your button, so the press keeps the focus in the field.


React (live React example):

```tsx
import type { ComponentProps } from 'react';
import { EditInPlace } from '@purpurabog/ui/headless';

function IconButton({ label, children, className, ...props }: ComponentProps<'button'> & { label: string }) {
  return (
    <button {...props} aria-label={label} title={label} className={`inline-flex size-12 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled ${className ?? ''}`}>
      {children}
    </button>
  );
}

export default function Example() {
  return (
    <div className="max-w-sm">
      <EditInPlace.Root defaultValue="Siam Logistics">
        <EditInPlace.Group className="group flex items-center hover:bg-field-1 data-editing:bg-field-1 has-[input:focus]:outline-2 has-[input:focus]:outline-focus">
          <EditInPlace.Input aria-label="Supplier name" className="h-12 min-w-0 flex-1 cursor-pointer bg-transparent px-4 text-sm text-ink outline-none" />
          <EditInPlace.Action action="edit" render={(props) => <IconButton {...props} label="Edit supplier name">✎</IconButton>} />
          <EditInPlace.Action action="cancel" render={(props) => <IconButton {...props} label="Undo changes">✕</IconButton>} />
          <EditInPlace.Action action="save" render={(props) => <IconButton {...props} label="Save supplier name">✓</IconButton>} />
        </EditInPlace.Group>
      </EditInPlace.Root>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { EditInPlace } from '@purpurabog/ui/headless';

const button = 'inline-flex size-10 items-center justify-center text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';

export default function Example() {
  const [invalid, setInvalid] = useState(false);
  return (
    <div className="grid max-w-sm gap-4">
      <EditInPlace.Root defaultValue="Malee S." invalid={invalid}>
        <EditInPlace.Group className="group flex items-center border-b border-transparent hover:bg-field-1 data-editing:border-border-strong-1 data-editing:bg-field-1 has-[input:focus]:outline-2 has-[input:focus]:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error">
          <EditInPlace.Input aria-label="Owner" className="h-10 min-w-0 flex-1 cursor-pointer bg-transparent px-4 text-sm font-semibold text-ink outline-none data-editing:cursor-text data-editing:font-normal" />
          <EditInPlace.Action action="edit" aria-label="Edit" className={`${button} invisible group-hover:visible`}>✎</EditInPlace.Action>
          <EditInPlace.Action action="cancel" aria-label="Cancel" className={button}>✕</EditInPlace.Action>
          <EditInPlace.Action action="save" aria-label="Save" className={button}>✓</EditInPlace.Action>
        </EditInPlace.Group>
      </EditInPlace.Root>
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={invalid} onChange={(e) => setInvalid(e.target.checked)} />
        invalid
      </label>
    </div>
  );
}
```
The same in plain CSS, with your own class names on the parts:

```css
.eip-group:hover,
.eip-group[data-editing] { background: #f4f4f4; }
.eip-group:has(input:focus) { outline: 2px solid #0f62fe; }
.eip-group[data-invalid] { outline: 2px solid #da1e28; outline-offset: -2px; }
.eip-input[data-editing] { cursor: text; }
.eip-action[data-disabled] { color: #c6c6c6; cursor: not-allowed; }
```

## Parts

### EditInPlace.Root

Holds the value, the editing state and the value editing started from. Renders only its children.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | — | The value, controlled (pair with `onValueChange`) |
| `defaultValue` | `string` | `''` | The first value, uncontrolled |
| `onValueChange` | `(value: string) => void` | — | Every keystroke, and the value put back on cancel |
| `onSave` | `(value: string) => void` | — | A change was saved (Save, Enter, leaving the group) |
| `onCancel` | `(value: string) => void` | — | The value was put back (Cancel, Escape, leaving without a valid change) |
| `invalid` | `boolean` | `false` | Blocks saving; `aria-invalid` on the field |
| `readOnly` | `boolean` | `false` | Shown, not edited |

### EditInPlace.Group

Renders a `<div>`. A focus coming in starts editing; a focus leaving all of it saves a valid change or puts the value back. It takes every `<div>` prop.

| Attribute | When |
|---|---|
| `data-editing` | While editing |
| `data-invalid` | `invalid` is set |
| `data-readonly` | `readOnly` is set |

### EditInPlace.Input

Renders an `<input type="text">` with the value. Enter saves, or stops editing when there is nothing to save (the focus stays); Escape puts the value back. A click starts editing, or opens the note when read-only. It takes every `<input>` prop except `value`, `defaultValue`, `type` and `readOnly`, which come from `Root`. Its id is yours when you give one, else `${id}input`; its `aria-describedby` is yours when you give one, else the `InvalidText` shown.

| Attribute | When |
|---|---|
| `data-editing` | While editing |
| `data-invalid` | `invalid` is set |
| `data-readonly` | `readOnly` is set |

### EditInPlace.InvalidText

Renders a `<p>` with your error text while `Root` is `invalid`, and nothing otherwise; while it shows, it describes the field. Its id is yours when you give one, else `${id}error`. It takes every `<p>` prop.

### EditInPlace.Action

Renders a `<button type="button">`, only in its mode. Its mousedown is cancelled, so a press keeps the focus in the field. It takes every `<button>` prop except `type`.

| Prop | Type | Default | |
|---|---|---|---|
| `action` | `'edit' \| 'cancel' \| 'save'` | — | `edit` at rest: focuses the field. `cancel` while editing, once the value changed: puts it back. `save` while editing, once it changed and is valid: saves |
| `render` | `(props) => ReactElement` | — | Renders your own button with these props |

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` is set, or the action can't run yet (`cancel` without a change, `save` without a valid change) |

### EditInPlace.useEditInPlaceContext()

Reads the state of the enclosing `Root` from any component inside it: `id` (the field is `${id}input` and the error text `${id}error` unless you give them ids), `value`, `editing`, `mode` (`'rest'`, `'editing'` or `'readonly'`), `canSave`, `canCancel`, `invalid`, `readOnly`, `noteOpen` and `setNoteOpen`, and the actions `begin`, `save`, `cancel` and `refocus`. Outside a `Root` it throws.

## Keyboard and accessibility

- Tab into the field starts editing. Tab then reaches Cancel and Save once they are enabled; leaving the group saves a valid change or puts the value back.
- Enter saves a valid change and keeps editing; with nothing to save it stops editing, the focus staying in the field. Escape puts the value back and keeps editing.
- After Save, Cancel or Escape, the focus goes back to the field with the caret at the end.
- The field sets `aria-invalid` when `invalid`. `InvalidText` describes it while it shows. You add its name (`aria-label`, or a `<label>` for its id) and names for the buttons, whose content is often only an icon.
- A read-only field is `readonly`: it still takes focus and is read. Your note should say why it can't be edited.

The styled [Edit in place](https://parntengza.github.io/kanok-ui-docs/en/edit-in-place/) is built on these parts.
