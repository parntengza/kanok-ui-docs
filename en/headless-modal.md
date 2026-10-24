# Headless Modal

The `Modal` parts give you the behaviour of the styled [Modal](https://parntengza.github.io/kanok-ui-docs/en/modal/) with no styles: a native `<dialog>` opened with `showModal()` (the top layer, an inert page behind, Tab kept inside, focus back to the opener on close), Esc and a click outside that ask to close, Carbon's first focus, a body that becomes a focusable region when it overflows, and a page that doesn't scroll while it is open.

You own the markup, the heading text, the buttons and every style. `Root` is controlled: it reports why it wants to close, and closes only when you set `open` to false.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Modal } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { Modal } from '@purpurabog/ui/headless';

const button = 'h-10 px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${button} bg-interactive text-on-primary hover:bg-blue-hover`}>
        Open contract
      </button>
      <Modal.Root open={open} onClose={() => setOpen(false)} className="m-auto w-[min(100%-2rem,42rem)] bg-layer-1 text-ink backdrop:bg-overlay open:flex open:flex-col">
        <header className="relative px-4 pt-4 pb-2 pe-12">
          <p className="text-xs text-ink-muted">CT-2026-0142</p>
          <Modal.Title className="text-xl">Contract details</Modal.Title>
          <Modal.Close aria-label="Close" className="absolute end-0 top-0 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
              <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
            </svg>
          </Modal.Close>
        </header>
        <Modal.Body className="px-4 pt-2 pb-12 text-sm">
          Master services agreement with Siam Logistics Co., Ltd., effective 2 October 2026.
        </Modal.Body>
        <Modal.Footer className="flex">
          <button type="button" data-kind="secondary" onClick={() => setOpen(false)} className={`${button} h-16 flex-1 bg-secondary text-start text-on-primary hover:bg-secondary-hover`}>
            Cancel
          </button>
          <button type="button" data-kind="primary" onClick={() => setOpen(false)} className={`${button} h-16 flex-1 bg-interactive text-start text-on-primary hover:bg-blue-hover`}>
            Save
          </button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
}
```

`onClose(reason)` gets `'close-button'`, `'escape'`, `'backdrop'` or `'api'` (a `<form method="dialog">` inside closed the dialog). The preflight of most CSS resets removes the dialog's `margin: auto`, so put it back (`m-auto`) to centre it.

## Anatomy

```tsx
<Modal.Root open={open} onClose={onClose}>
  <Modal.Title />
  <Modal.Close />
  <Modal.Body />
  <Modal.Footer />
</Modal.Root>
```

## Confirm before you delete

`alert` gives the dialog `role="alertdialog"` and makes `Body` its description. Focus then starts on the least destructive action in `Footer`: the first one whose `data-kind` is neither primary nor a danger kind. Put `data-kind` on every footer button.


React (live React example):

```tsx
import { useState } from 'react';
import { Modal } from '@purpurabog/ui/headless';

const button = 'h-10 px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState('');
  const answer = (value: string) => {
    setResult(value);
    setOpen(false);
  };
  return (
    <div className="grid justify-items-start gap-2">
      <button type="button" onClick={() => setOpen(true)} className={`${button} bg-button-danger text-on-primary hover:bg-error-hover`}>
        Delete contract
      </button>
      <p className="text-xs text-ink-muted">Result: {result || '(none)'}</p>
      <Modal.Root open={open} alert closeOnOutsideClick={false} onClose={() => setOpen(false)} className="m-auto w-[min(100%-2rem,30rem)] bg-layer-1 text-ink backdrop:bg-overlay open:flex open:flex-col">
        <Modal.Title className="px-4 pt-4 pb-2 text-xl">Delete this contract?</Modal.Title>
        <Modal.Body className="px-4 pt-2 pb-12 text-sm">This removes CT-2026-0142 and its signatures for good.</Modal.Body>
        <Modal.Footer className="flex">
          <button type="button" data-kind="secondary" onClick={() => answer('kept')} className={`${button} h-16 flex-1 bg-secondary text-start text-on-primary hover:bg-secondary-hover`}>
            Cancel
          </button>
          <button type="button" data-kind="danger" onClick={() => answer('deleted')} className={`${button} h-16 flex-1 bg-button-danger text-start text-on-primary hover:bg-error-hover`}>
            Delete
          </button>
        </Modal.Footer>
      </Modal.Root>
    </div>
  );
}
```

There is no `Close` here, so Esc is the keyboard's way out.

## A form, and a click outside

On open, focus goes to an `autoFocus` control, else the first control in `Body`, else the first in `Footer`, else `Close`. A click on the backdrop asks to close (`'backdrop'`) by default; Carbon allows that only for a passive modal, so pass `closeOnOutsideClick={false}` when there are footer actions. A `<form method="dialog">` closes the dialog when it is submitted, after the browser has checked the required fields; `onClose` then gets `'api'`.


React (live React example):

```tsx
import { useState } from 'react';
import { Modal } from '@purpurabog/ui/headless';

const button = 'h-16 flex-1 px-4 text-start text-sm text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';
const field = 'h-10 w-full border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <div className="grid justify-items-start gap-2">
      <button type="button" onClick={() => setOpen(true)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Add a signer
      </button>
      {sent ? <p className="text-xs text-ink-muted">Added: {JSON.stringify(sent)}</p> : null}
      <Modal.Root open={open} closeOnOutsideClick={false} onClose={() => setOpen(false)} className="m-auto w-[min(100%-2rem,42rem)] bg-layer-1 text-ink backdrop:bg-overlay">
        <form method="dialog" onSubmit={(e) => setSent(Object.fromEntries(new FormData(e.currentTarget)))} className="flex flex-col">
          <Modal.Title className="px-4 pt-4 pb-2 text-xl">Add a signer</Modal.Title>
          <Modal.Body className="grid gap-4 px-4 pt-2 pb-12">
            <label className="grid gap-2 text-xs text-ink-muted">
              Full name
              <input name="name" required className={field} />
            </label>
            <label className="grid gap-2 text-xs text-ink-muted">
              Email
              <input name="email" type="email" required className={field} />
            </label>
          </Modal.Body>
          <Modal.Footer className="flex">
            <button type="button" data-kind="secondary" onClick={() => setOpen(false)} className={`${button} bg-secondary hover:bg-secondary-hover`}>
              Cancel
            </button>
            <button type="submit" data-kind="primary" className={`${button} bg-interactive hover:bg-blue-hover`}>
              Add signer
            </button>
          </Modal.Footer>
        </form>
      </Modal.Root>
    </div>
  );
}
```

## Long content

When `Body` is taller than the room it has, it gets `tabIndex={0}` and `data-scrollable`, and the `Title` names it, so keyboard users can scroll it. Give the dialog a maximum height and let `Body` scroll.


React (live React example):

```tsx
import { useState } from 'react';
import { Modal } from '@purpurabog/ui/headless';

const clauses = Array.from({ length: 12 }, (_, n) => `Clause ${n + 1}. The processor handles personal data only on the controller's written instructions and keeps it confidential.`);

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Read the agreement
      </button>
      <Modal.Root open={open} onClose={() => setOpen(false)} className="m-auto max-h-[min(100%-6rem,30rem)] w-[min(100%-2rem,42rem)] bg-layer-1 text-ink backdrop:bg-overlay open:flex open:flex-col">
        <header className="relative px-4 pt-4 pb-2 pe-12">
          <Modal.Title className="text-xl">Data processing agreement</Modal.Title>
          <Modal.Close aria-label="Close" className="absolute end-0 top-0 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
              <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
            </svg>
          </Modal.Close>
        </header>
        <Modal.Body className="min-h-0 flex-1 overflow-y-auto px-4 pb-8 text-sm data-scrollable:focus-visible:outline-2 data-scrollable:focus-visible:-outline-offset-2 data-scrollable:focus-visible:outline-focus">
          <div className="grid gap-4">
            {clauses.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Modal.Body>
      </Modal.Root>
    </>
  );
}
```

`Body` watches its first child for size changes, so wrap the content in one element, as here.

## Ask before closing

`onClose` only reports. To keep the modal open, don't set `open` to false: here a first attempt with unsaved text shows a warning, and a second one closes.


React (live React example):

```tsx
import { useState } from 'react';
import { Modal } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState('');
  const [warned, setWarned] = useState(false);
  const [reason, setReason] = useState<Modal.ModalCloseReason>();
  const show = () => {
    setNote('');
    setWarned(false);
    setOpen(true);
  };
  const close = (why: Modal.ModalCloseReason) => {
    setReason(why);
    if (note && !warned) setWarned(true);
    else setOpen(false);
  };
  return (
    <div className="grid justify-items-start gap-2">
      <button type="button" onClick={show} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Edit note
      </button>
      <p className="text-xs text-ink-muted">Asked to close by: {reason ?? '(nothing yet)'}</p>
      <Modal.Root open={open} onClose={close} className="m-auto w-[min(100%-2rem,42rem)] bg-layer-1 text-ink backdrop:bg-overlay open:flex open:flex-col">
        <header className="relative px-4 pt-4 pb-2 pe-12">
          <Modal.Title className="text-xl">Edit note</Modal.Title>
          <Modal.Close aria-label="Close" className="absolute end-0 top-0 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
              <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
            </svg>
          </Modal.Close>
        </header>
        <Modal.Body className="grid gap-4 px-4 pt-2 pb-12">
          {warned ? (
            <p role="status" className="border-s-4 border-warning bg-notification-background-warning px-4 py-3 text-sm text-ink">
              Unsaved changes. Close again to discard them.
            </p>
          ) : null}
          <label className="grid gap-2 text-xs text-ink-muted">
            Note to the approver
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4} className="w-full border-b border-border-strong-1 bg-field-1 p-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus" />
          </label>
        </Modal.Body>
      </Modal.Root>
    </div>
  );
}
```

## Style it

`ui-modal-motion` (React + Tailwind theme) gives it Carbon's motion: the box drops 24px in while it and the overlay fade, and fades back out after closing. A closing dialog stays on screen while it fades, so put the layout (`flex-col`) on the dialog itself and only `display` under `data-open`.


React (live React example):

```tsx
import { useState } from 'react';
import { Modal } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Open
      </button>
      <Modal.Root
        open={open}
        onClose={() => setOpen(false)}
        className="m-auto w-[min(100%-2rem,30rem)] bg-layer-1 text-ink backdrop:bg-overlay flex-col data-open:flex ui-modal-motion"
      >
        <header className="relative px-4 pt-4 pb-2 pe-12">
          <Modal.Title className="text-xl">Stamp duty rates</Modal.Title>
          <Modal.Close aria-label="Close" className="absolute end-0 top-0 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
              <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
            </svg>
          </Modal.Close>
        </header>
        <Modal.Body className="px-4 pt-2 pb-12 text-sm">Lease contracts: 1 baht for every 1,000 baht of rent, or part of it, for the whole term.</Modal.Body>
      </Modal.Root>
    </>
  );
}
```
```css
/* className="modal" on Root, "body" on Body */
.modal[data-open] { display: flex; flex-direction: column; margin: auto; }
.modal::backdrop { background: rgb(22 22 22 / 0.5); }
.body[data-scrollable] { overflow-y: auto; }
.body[data-scrollable]:focus-visible { outline: 2px solid #0f62fe; outline-offset: -2px; }
```

## Parts

### Modal.Root

A `<dialog>`, opened with `showModal()` while `open` is true. It takes every dialog prop except `open`, `onClose` and `role`. While open, the page (`<html>`) doesn't scroll.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Shows the modal (required) |
| `onClose` | `(reason: Modal.ModalCloseReason) => void` | | Esc, `Close`, a click outside or a `<form method="dialog">` asked to close: `'escape'`, `'close-button'`, `'backdrop'`, `'api'` |
| `alert` | `boolean` | `false` | `role="alertdialog"`; `Body` describes it; focus starts on the least destructive footer action |
| `closeOnOutsideClick` | `boolean` | `true` | A press and release on the backdrop asks to close (`'backdrop'`) |

Its `aria-labelledby` is the `Title`'s id, and with `alert` its `aria-describedby` is the `Body`'s, unless you pass your own.

| Attribute | When |
|---|---|
| `data-open` | `open` is true |

### Modal.Title

An `<h2>` with an id (yours or `<id>-title`) that names the dialog.

### Modal.Body

A `<section>` for the content. While it overflows, it gets `tabIndex={0}` and an `aria-labelledby` pointing at the `Title`, so it is a named region the keyboard can scroll. First focus looks for a control in it first.

| Attribute | When |
|---|---|
| `data-scrollable` | The content is taller than the body |

### Modal.Footer

A `<footer>` for the action buttons. First focus looks here after `Body`; with `alert`, it reads the `data-kind` of its buttons (`primary`, `secondary`, `danger`, …) to start on the least destructive one.

### Modal.Close

A `<button type="button">` that asks to close (`'close-button'`). It is a Tab stop even in Safari (`tabIndex={0}`). Give it an `aria-label`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves through the controls inside the dialog only (the native modal dialog) |
| Esc | Calls `onClose('escape')`; the dialog stays open until you set `open` to false |

The native modal dialog makes the rest of the page inert and gives focus back to the element that had it when the dialog closes. The parts add the name from `Title`, `alertdialog` and its description, and the focusable scrolling `Body`.

You add:

- A `Title`, or an `aria-label` on `Root` when there is no visible heading.
- An `aria-label` on `Close`.
- `data-kind` on the footer buttons of an `alert` modal.
