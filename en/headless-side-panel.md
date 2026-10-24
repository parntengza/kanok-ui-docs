# Headless Side panel

The `SidePanel` parts give you the behaviour of the styled [Side panel](https://parntengza.github.io/kanok-ui-docs/en/side-panel/) with no styles: a panel that slides in from the right or the left and slides out again before it unmounts, Tab kept inside it, Esc and a click on the overlay that ask to close, first focus inside and focus back on close, and a "slide-in" mode that pushes the page aside instead of covering it.

You own the markup, the heading, the buttons, where the panel sits and every style. `Root` is controlled: it reports why it wants to close, and closes only when you set `open` to false. The panel is yours to position: `fixed` under your app's header, or `absolute` inside a box, as in these examples.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { SidePanel } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { SidePanel } from '@purpurabog/ui/headless';

const field = 'h-10 w-full border-b border-border-strong-1 bg-field-2 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-96 overflow-hidden border border-hairline">
      <div className="p-4">
        <button type="button" onClick={() => setOpen(true)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Edit incident
        </button>
      </div>
      <SidePanel.Root open={open} onRequestClose={() => setOpen(false)} selectorInitialFocus="#side-panel-use-title">
        <SidePanel.Overlay className="absolute inset-0 bg-overlay" />
        <SidePanel.Panel aria-labelledby="side-panel-use-heading" className="absolute inset-y-0 end-0 grid w-80 max-w-full grid-rows-[auto_1fr_auto] border-s border-border-subtle-2 bg-layer-1 text-ink shadow-lg">
          <header className="relative border-b border-border-subtle-2 p-4 pe-12">
            <h2 id="side-panel-use-heading" className="text-xl">Incident INC-2041</h2>
            <p className="text-sm text-ink-muted">Reported by the finance team.</p>
            <SidePanel.Close aria-label="Close" className="absolute end-0 top-0 grid size-10 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
                <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
              </svg>
            </SidePanel.Close>
          </header>
          <div className="grid content-start gap-4 overflow-y-auto p-4">
            <label className="grid gap-2 text-xs text-ink-muted">
              Title
              <input id="side-panel-use-title" defaultValue="Invoice export fails" className={field} />
            </label>
            <label className="grid gap-2 text-xs text-ink-muted">
              Owner
              <input defaultValue="Ananya P." className={field} />
            </label>
          </div>
          <div className="flex border-t border-border-subtle-2">
            <button type="button" onClick={() => setOpen(false)} className="h-16 flex-1 bg-secondary px-4 text-start text-sm text-on-primary hover:bg-secondary-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              Cancel
            </button>
            <button type="button" onClick={() => setOpen(false)} className="h-16 flex-1 bg-interactive px-4 text-start text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              Save
            </button>
          </div>
        </SidePanel.Panel>
      </SidePanel.Root>
    </div>
  );
}
```

`onRequestClose(reason)` gets `'close-button'`, `'escape'` or `'overlay'`. On open, focus goes to `selectorInitialFocus` (a selector inside the panel), else to the panel's first control; on close it goes back to what had it. Name the panel with `aria-label` or `aria-labelledby`.

## Anatomy

```tsx
<SidePanel.Root open={open} onRequestClose={onRequestClose}>
  <SidePanel.Overlay />
  <SidePanel.Panel>
    <SidePanel.Close />
  </SidePanel.Panel>
</SidePanel.Root>
```

## From the left

`placement="left"` makes the panel slide in from the left; `Panel` gets `data-placement="left"` for you to place it. Without an `Overlay` the page stays clickable beside the panel, but Tab still stays inside it.


React (live React example):

```tsx
import { useState } from 'react';
import { SidePanel } from '@purpurabog/ui/headless';

const filters = ['Open', 'Waiting for approval', 'Closed'];

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-80 overflow-hidden border border-hairline">
      <div className="flex justify-end p-4">
        <button type="button" onClick={() => setOpen(true)} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Filters
        </button>
      </div>
      <SidePanel.Root open={open} placement="left" onRequestClose={() => setOpen(false)}>
        <SidePanel.Panel aria-label="Filters" className="absolute inset-y-0 w-64 bg-layer-1 p-4 text-ink shadow-lg data-[placement=left]:start-0 data-[placement=left]:border-e data-[placement=left]:border-border-subtle-2">
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-lg">Filters</h2>
            <SidePanel.Close aria-label="Close" className="grid size-8 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
                <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
              </svg>
            </SidePanel.Close>
          </div>
          <div className="grid gap-3">
            {filters.map((name) => (
              <label key={name} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="size-4 accent-interactive" />
                {name}
              </label>
            ))}
          </div>
        </SidePanel.Panel>
      </SidePanel.Root>
    </div>
  );
}
```

## Push the page aside

`slideIn` gives the element that `selectorPageContent` points to a margin as wide as the panel, with a transition, instead of covering it. A slide-in panel takes no focus, doesn't keep Tab inside and ignores Esc, so the page stays usable beside it.


React (live React example):

```tsx
import { useState } from 'react';
import { SidePanel } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-72 overflow-hidden border border-hairline">
      <div id="side-panel-push-page" className="grid gap-4 p-4 text-sm">
        <p>Contract list: 24 contracts waiting for a signature.</p>
        <div>
          <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
            {open ? 'Hide summary' : 'Show summary'}
          </button>
        </div>
      </div>
      <SidePanel.Root open={open} slideIn selectorPageContent="#side-panel-push-page" onRequestClose={() => setOpen(false)}>
        <SidePanel.Panel aria-label="Summary" className="absolute inset-y-0 end-0 w-64 border-s border-border-subtle-2 bg-layer-1 p-4 text-sm text-ink">
          <h2 className="pb-2 text-lg">Summary</h2>
          <p>8 sale, 12 lease, 4 service contracts.</p>
        </SidePanel.Panel>
      </SidePanel.Root>
    </div>
  );
}
```

## Ask before closing

`onRequestClose` only reports: the panel closes when you set `open` to false. `closeOnOverlayClick={false}` stops a click on the overlay from asking at all. This panel only closes with its Done button and shows what asked.


React (live React example):

```tsx
import { useState } from 'react';
import { SidePanel } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<SidePanel.SidePanelCloseReason>();
  return (
    <div className="relative h-72 overflow-hidden border border-hairline">
      <div className="grid justify-items-start gap-2 p-4">
        <button type="button" onClick={() => setOpen(true)} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Open checklist
        </button>
        <p className="text-xs text-ink-muted">Asked to close by: {reason ?? '(nothing yet)'}</p>
      </div>
      <SidePanel.Root open={open} onRequestClose={setReason}>
        <SidePanel.Overlay className="absolute inset-0 bg-overlay" />
        <SidePanel.Panel aria-label="Signing checklist" className="absolute inset-y-0 end-0 grid w-72 grid-rows-[auto_1fr_auto] bg-layer-1 text-ink shadow-lg">
          <header className="relative p-4 pe-12">
            <h2 className="text-lg">Signing checklist</h2>
            <SidePanel.Close aria-label="Close" className="absolute end-0 top-0 grid size-10 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
                <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
              </svg>
            </SidePanel.Close>
          </header>
          <p className="px-4 text-sm">Tick every item, then press Done.</p>
          <button type="button" onClick={() => setOpen(false)} className="h-16 bg-interactive px-4 text-start text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            Done
          </button>
        </SidePanel.Panel>
      </SidePanel.Root>
    </div>
  );
}
```

## Style it

The panel slides 320px and fades with the Web Animations API (150ms in and out, as Carbon); there is nothing to animate in CSS. `data-closing` marks the panel and the overlay while they slide out, for example to stop clicks on them.


React (live React example):

```tsx
import { useState } from 'react';
import { SidePanel } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<SidePanel.SidePanelPlacement>('right');
  const show = (side: SidePanel.SidePanelPlacement) => {
    setPlacement(side);
    setOpen(true);
  };
  return (
    <div className="relative h-72 overflow-hidden border border-hairline">
      <div className="flex justify-center gap-4 p-4">
        <button type="button" onClick={() => show('left')} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          From the left
        </button>
        <button type="button" onClick={() => show('right')} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          From the right
        </button>
      </div>
      <SidePanel.Root open={open} placement={placement} onRequestClose={() => setOpen(false)}>
        <SidePanel.Overlay className="absolute inset-0 bg-overlay data-closing:pointer-events-none" />
        <SidePanel.Panel
          aria-label="Vendor details"
          className="absolute inset-y-0 w-72 bg-layer-1 p-4 text-sm text-ink shadow-lg data-closing:pointer-events-none data-[placement=left]:start-0 data-[placement=left]:border-e data-[placement=right]:end-0 data-[placement=right]:border-s data-[placement=left]:border-border-subtle-2 data-[placement=right]:border-border-subtle-2"
        >
          <div className="flex items-center justify-between pb-4">
            <h2 className="text-lg">Vendor details</h2>
            <SidePanel.Close aria-label="Close" className="grid size-8 place-items-center hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
                <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
              </svg>
            </SidePanel.Close>
          </div>
          <p>Siam Logistics Co., Ltd. Tax ID 0105556000000.</p>
        </SidePanel.Panel>
      </SidePanel.Root>
    </div>
  );
}
```
```css
/* className="panel" on Panel, "overlay" on Overlay */
.panel { position: fixed; inset-block: 3rem 0; inline-size: 30rem; }
.panel[data-placement='right'] { inset-inline-end: 0; }
.panel[data-placement='left'] { inset-inline-start: 0; }
.panel[data-closing],
.overlay[data-closing] { pointer-events: none; }
.overlay { position: fixed; inset: 0; background: rgb(0 0 0 / 0.6); }
```

## Parts

### SidePanel.Root

Renders no element of its own: its children, while the panel is open and while it slides out.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Shows the panel (required) |
| `onRequestClose` | `(reason: SidePanel.SidePanelCloseReason) => void` | | Esc, `Close` or a click on the `Overlay` asked to close: `'escape'`, `'close-button'`, `'overlay'` |
| `placement` | `'right' \| 'left'` | `'right'` | The side it slides in from |
| `slideIn` | `boolean` | `false` | Push the page aside instead of covering it: no focus trap, no Esc, no first focus |
| `closeOnOverlayClick` | `boolean` | `true` | A click on the `Overlay` asks to close |
| `selectorInitialFocus` | `string` | | What takes focus on open (a selector inside the panel), else the first control |
| `selectorPageContent` | `string` | | The page element a `slideIn` panel pushes aside |
| `layerClassName` | `string` | | Class of the `<dialog>` the panel goes into when it opens from a modal (over it, in the top layer); give its `::backdrop` no colour (`backdrop:bg-transparent`) |

A slide-over panel joins the page's overlay stack with the modals and tearsheets: one Esc closes only the topmost (a modal opened from the panel closes first, and focus goes back into the panel), and a panel opened from a modal goes over it so it can be used.

`SidePanel.useSidePanelContext()` returns the `Root`'s state (`open`, `closing`, `placement`, `slideIn`, `requestClose` …) to any component inside it.

### SidePanel.Panel

An `<aside>` (a `complementary` landmark): what slides, and where Tab stays unless `slideIn`. Name it with `aria-label` or `aria-labelledby`.

| Attribute | When |
|---|---|
| `data-open` | `open` is true |
| `data-closing` | It is sliding out |
| `data-placement` | `right` or `left` |

### SidePanel.Overlay

A `<div aria-hidden="true">` that dims the page: while it is open, the page doesn't scroll (the one scroll lock the overlays share, on `<html>`: it lets go when the last overlay closes), and a click on it asks to close (`'overlay'`, unless `closeOnOverlayClick` is false). Leave it out for a panel that doesn't dim the page.

| Attribute | When |
|---|---|
| `data-open` | `open` is true |
| `data-closing` | It is fading out |

### SidePanel.Close

A `<button type="button">` that asks to close (`'close-button'`). Give it an `aria-label`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves through the panel's controls and wraps around inside it (not with `slideIn`) |
| Esc | Calls `onRequestClose('escape')` (not with `slideIn`) |

The parts move focus into the panel on open and back on close, and keep Tab inside a slide-over panel. The page behind is not made inert: screen reader users can still reach it.

You add:

- The panel's name (`aria-label`, or `aria-labelledby` pointing at your heading).
- An `aria-label` on `Close`, and on any back button you add for steps.
- The panel's position and size, and a top offset under your header.
