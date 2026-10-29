# Headless Tearsheet

The `Tearsheet` parts give you the behaviour of the styled [Tearsheet](https://parntengza.github.io/kanok-ui-docs/en/tearsheet/) with no styles: a native `<dialog>` opened with `showModal()` (the top layer, an inert page behind) whose sheet rises from below on open and sinks back before it unmounts, Tab kept inside the sheet, Esc, the close button and a click outside the sheet that ask to close, first focus and focus back, a page that doesn't scroll, and Carbon's stacking of tearsheets opened over each other.

You own the markup, the header, the action buttons and every style. `Root` is controlled: it reports why it wants to close, and closes only when you set `open` to false.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Tearsheet } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { Tearsheet } from '@purpurabog/ui/headless';

const field = 'h-10 w-full border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
const action = 'h-20 flex-1 px-4 pt-4 text-start align-top text-sm text-on-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        New contract
      </button>
      <Tearsheet.Root open={open} onRequestClose={() => setOpen(false)} selectorInitialFocus="#tearsheet-use-name">
        <Tearsheet.Dialog className="m-0 size-full max-h-none max-w-none bg-transparent backdrop:bg-overlay open:flex open:flex-col open:items-center open:justify-end">
          <Tearsheet.Sheet className="flex h-[calc(100%-5.5rem)] w-[calc(100%-2rem)] max-w-5xl flex-col border border-border-subtle-2 bg-layer-1 text-ink">
            <header className="relative border-b border-border-subtle-2 px-8 py-6 pe-20">
              <p className="text-xs text-ink-muted">Legal</p>
              <Tearsheet.Title className="text-2xl">New contract</Tearsheet.Title>
              <p className="pt-4 text-sm">Fill in the parties and the term.</p>
              <Tearsheet.Close aria-label="Close" className="absolute end-4 top-2 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
                  <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                </svg>
              </Tearsheet.Close>
            </header>
            <div className="grid flex-1 content-start gap-4 overflow-y-auto bg-canvas px-8 py-4">
              <label className="grid gap-2 text-xs text-ink-muted">
                Contract name
                <input id="tearsheet-use-name" className={field} />
              </label>
              <label className="grid gap-2 text-xs text-ink-muted">
                Counterparty
                <input className={field} />
              </label>
            </div>
            <div className="flex border-t border-border-subtle-2">
              <button type="button" onClick={() => setOpen(false)} className={`${action} bg-secondary hover:bg-secondary-hover`}>
                Cancel
              </button>
              <button type="button" onClick={() => setOpen(false)} className={`${action} bg-interactive hover:bg-blue-hover`}>
                Create
              </button>
            </div>
          </Tearsheet.Sheet>
        </Tearsheet.Dialog>
      </Tearsheet.Root>
    </>
  );
}
```

`onRequestClose(reason)` gets `'close-button'`, `'escape'` or `'outside'`. First focus goes to `selectorInitialFocus`, else `Close`, else the sheet's first control; on close it goes back to what had it. `Dialog` fills the screen and `Sheet` is the visible part: what rises, where Tab stays, and what a click counts as outside of.

## Anatomy

```tsx
<Tearsheet.Root open={open} onRequestClose={onRequestClose}>
  <Tearsheet.Dialog>
    <Tearsheet.Sheet>
      <Tearsheet.Title />
      <Tearsheet.Close />
    </Tearsheet.Sheet>
  </Tearsheet.Dialog>
</Tearsheet.Root>
```

## Stacked tearsheets

A tearsheet opened over another one stacks on it. While more than one is open, `data-stack` on `Dialog` and `Sheet` says where each sits: `1-of-2`, `2-of-2`, `1-of-3` … up to three deep. Scale the ones underneath back and dim the page less, as Carbon does.


React (live React example):

```tsx
import { useState, type ReactNode } from 'react';
import { Tearsheet } from '@purpurabog/ui/headless';

function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  return (
    <Tearsheet.Root open={open} onRequestClose={onClose}>
      <Tearsheet.Dialog className="m-0 size-full max-h-none max-w-none bg-transparent backdrop:bg-overlay data-[stack=1-of-2]:backdrop:opacity-70 data-[stack=1-of-3]:backdrop:opacity-20 open:flex open:flex-col open:items-center open:justify-end">
        <Tearsheet.Sheet className="flex h-[calc(100%-5.5rem)] w-[calc(100%-2rem)] max-w-4xl flex-col border border-border-subtle-2 bg-layer-1 text-ink transition-transform data-[stack=1-of-2]:scale-95 data-[stack=1-of-3]:scale-90 data-[stack=2-of-3]:scale-95">
          <header className="relative border-b border-border-subtle-2 px-8 py-6 pe-20">
            <Tearsheet.Title className="text-2xl">{title}</Tearsheet.Title>
            <Tearsheet.Close aria-label="Close" className="absolute end-4 top-2 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
                <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
              </svg>
            </Tearsheet.Close>
          </header>
          <div className="flex-1 px-8 py-4 text-sm">{children}</div>
        </Tearsheet.Sheet>
      </Tearsheet.Dialog>
    </Tearsheet.Root>
  );
}

const next = 'h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

export default function Example() {
  const [depth, setDepth] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setDepth(1)} className={next}>
        Open the contract
      </button>
      <Sheet open={depth >= 1} onClose={() => setDepth(0)} title="CT-2026-0142">
        <button type="button" onClick={() => setDepth(2)} className={next}>Add a party</button>
      </Sheet>
      <Sheet open={depth >= 2} onClose={() => setDepth(1)} title="Add a party">
        <button type="button" onClick={() => setDepth(3)} className={next}>Add a new company</button>
      </Sheet>
      <Sheet open={depth >= 3} onClose={() => setDepth(2)} title="New company">
        The top one. Esc closes it and shows the one below.
      </Sheet>
    </>
  );
}
```

## Ask before closing

`onRequestClose` only reports: the tearsheet closes when you set `open` to false. `closeOnOutsideClick={false}` stops a click outside the sheet from asking at all, which suits a form people type into. Type a memo, then press Esc.


React (live React example):

```tsx
import { useState } from 'react';
import { Tearsheet } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [memo, setMemo] = useState('');
  const [warned, setWarned] = useState(false);
  const [reason, setReason] = useState<Tearsheet.TearsheetCloseReason>();
  const show = () => {
    setMemo('');
    setWarned(false);
    setOpen(true);
  };
  const close = (why: Tearsheet.TearsheetCloseReason) => {
    setReason(why);
    if (memo && !warned) setWarned(true);
    else setOpen(false);
  };
  return (
    <div className="grid justify-items-start gap-2">
      <button type="button" onClick={show} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Write a memo
      </button>
      <p className="text-xs text-ink-muted">Asked to close by: {reason ?? '(nothing yet)'}</p>
      <Tearsheet.Root open={open} onRequestClose={close} closeOnOutsideClick={false}>
        <Tearsheet.Dialog className="m-0 size-full max-h-none max-w-none bg-transparent backdrop:bg-overlay open:flex open:flex-col open:items-center open:justify-end">
          <Tearsheet.Sheet className="flex h-[calc(100%-8rem)] w-[min(100%-2rem,40rem)] flex-col border border-border-subtle-2 bg-layer-1 text-ink">
            <header className="relative border-b border-border-subtle-2 p-4 pe-16">
              <Tearsheet.Title className="text-xl">New memo</Tearsheet.Title>
              <Tearsheet.Close aria-label="Close" className="absolute end-2 top-2 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
                  <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                </svg>
              </Tearsheet.Close>
            </header>
            <div className="grid flex-1 content-start gap-4 p-4">
              {warned ? (
                <p role="status" className="border-s-4 border-warning bg-notification-background-warning px-4 py-3 text-sm text-ink">
                  The memo isn't saved. Close again to discard it.
                </p>
              ) : null}
              <label className="grid gap-2 text-xs text-ink-muted">
                Memo
                <textarea value={memo} onChange={(e) => setMemo(e.target.value)} rows={5} className="w-full border-b border-border-strong-1 bg-field-1 p-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus" />
              </label>
            </div>
          </Tearsheet.Sheet>
        </Tearsheet.Dialog>
      </Tearsheet.Root>
    </div>
  );
}
```

## Style it

The sheet rises with the Web Animations API (240ms) and sinks back on close; the backdrop fades with it. There is nothing to animate in CSS. Style the stack with `data-stack`.


React (live React example):

```tsx
import { useState } from 'react';
import { Tearsheet } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Signing log
      </button>
      <Tearsheet.Root open={open} onRequestClose={() => setOpen(false)}>
        <Tearsheet.Dialog className="m-0 size-full max-h-none max-w-none bg-transparent backdrop:bg-overlay data-open:flex data-open:flex-col data-open:items-center data-open:justify-end">
          <Tearsheet.Sheet className="h-[calc(100%-8rem)] w-[min(100%-2rem,36rem)] border border-border-subtle-2 bg-layer-1 text-ink data-closing:pointer-events-none">
            <header className="relative border-b border-border-subtle-2 p-4 pe-16">
              <Tearsheet.Title className="text-xl">Signing log</Tearsheet.Title>
              <Tearsheet.Close aria-label="Close" className="absolute end-2 top-2 grid size-12 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 fill-current">
                  <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                </svg>
              </Tearsheet.Close>
            </header>
            <ul className="grid gap-2 p-4 text-sm">
              <li>Ananya P. signed on 8 October 2026, 10:42.</li>
              <li>Boonmee S. signed on 9 October 2026, 14:05.</li>
            </ul>
          </Tearsheet.Sheet>
        </Tearsheet.Dialog>
      </Tearsheet.Root>
    </>
  );
}
```
```css
/* className="dialog" on Dialog, "sheet" on Sheet */
.dialog { inline-size: 100%; block-size: 100%; max-inline-size: none; max-block-size: none; margin: 0; background: transparent; }
.dialog[data-open] { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; }
.dialog::backdrop { background: rgb(0 0 0 / 0.6); }
.dialog[data-stack='1-of-2']::backdrop { opacity: 0.67; }
.sheet[data-stack='1-of-2'],
.sheet[data-stack='2-of-3'] { transform: scale(0.95); }
.sheet[data-stack='1-of-3'] { transform: scale(0.9); }
.sheet[data-closing] { pointer-events: none; }
```

## Parts

### Tearsheet.Root

Renders no element of its own: its children, while the tearsheet is open and while it sinks back.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Shows the tearsheet (required) |
| `onRequestClose` | `(reason: Tearsheet.TearsheetCloseReason) => void` | | Esc, `Close` or a click outside the sheet asked to close: `'escape'`, `'close-button'`, `'outside'` |
| `closeOnOutsideClick` | `boolean` | `true` | A press and release outside the `Sheet` asks to close |
| `selectorInitialFocus` | `string` | | What takes focus on open (a selector inside the dialog), else `Close`, else the sheet's first control |

`Tearsheet.useTearsheetContext()` returns the `Root`'s state (`open`, `closing`, `stackPlace`, `requestClose` …) to any component inside it.

### Tearsheet.Dialog

A `<dialog>`, opened with `showModal()`: style it to fill the screen, with the dim on its `::backdrop`. It takes every dialog prop except `open` and `onClose`. Its `aria-labelledby` is the `Title`'s id unless you pass your own. While a tearsheet is open, the page (`<html>`) doesn't scroll.

| Attribute | When |
|---|---|
| `data-open` | `open` is true |
| `data-closing` | It is sinking back |
| `data-stack` | `1-of-2`, `2-of-2`, `1-of-3`, `2-of-3` or `3-of-3` while more than one is open |

### Tearsheet.Sheet

A `<div>`: the visible sheet. It rises and sinks, Tab stays inside it, and a click outside it asks to close.

| Attribute | When |
|---|---|
| `data-open` | `open` is true |
| `data-closing` | It is sinking back |
| `data-stack` | As on `Dialog` |

### Tearsheet.Title

An `<h2>` with an id (yours or `<id>-title`) that names the dialog.

### Tearsheet.Close

A `<button type="button">` that asks to close (`'close-button'`). It takes first focus unless `selectorInitialFocus` says otherwise. Give it an `aria-label`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves through the sheet's controls and wraps around inside it |
| Esc | Calls `onRequestClose('escape')`; the tearsheet stays open until you set `open` to false |

The native modal dialog makes the rest of the page inert. The parts name it from `Title`, keep Tab inside the sheet, and move focus in on open and back on close.

You add:

- A `Title`, or an `aria-label` on `Dialog`.
- An `aria-label` on `Close`.
- The action buttons, header actions, tabs and any side pane: they are plain markup inside `Sheet`.
