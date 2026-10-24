# Headless Loading

`Loading` is the behaviour of the styled [Loading](https://parntengza.github.io/kanok-ui-docs/en/loading/) without a single class. `Loading.Root` decides when the spinner shows: while `active`, after `delay` ms, and once shown for at least `minDuration` ms, so quick work never flashes a spinner. `Spinner` makes your graphic an assertive live region while it shows. `Indicator` holds focus: as a modal dialog over the page with `modal`, or as the waiting spot of a busy `Area`, and focus goes back where it was afterwards.

You own the spinner graphic, the overlay, hiding the parts while they don't show, and every style. Each part has `data-shown` while the spinner shows.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Loading } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Loading } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Loading.Root>
      <Loading.Spinner className="size-[88px] animate-spin [animation-duration:690ms] motion-reduce:[animation-duration:2s]">
        <svg viewBox="0 0 100 100" role="img" aria-label="Loading contracts" className="block size-full fill-transparent">
          <circle cx="50" cy="50" r="44" className="stroke-interactive [stroke-dasharray:276.46_276.46] [stroke-dashoffset:52.53] [stroke-width:10]" />
        </svg>
      </Loading.Spinner>
    </Loading.Root>
  );
}
```

## Anatomy

```tsx
<Loading.Root>
  <Loading.Area />
  <Loading.Indicator>
    <Loading.Spinner />
  </Loading.Indicator>
</Loading.Root>
```

`Area` and `Indicator` are optional: a plain spinner needs only `Root` and `Spinner`.

## Start, stop and wait

`active` starts and stops it (on by default). `delay` waits before showing, and `minDuration` keeps it up once shown. `useLoadingContext().shown` tells any component inside `Root` whether it shows now. The parts don't hide themselves: hide the spinner while it has no `data-shown`. Try the quick check: it ends before the 300 ms delay, so nothing shows.


React (live React example):

```tsx
import { useState } from 'react';
import { Loading } from '@purpurabog/ui/headless';

const button = 'h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

function Shown() {
  const { shown } = Loading.useLoadingContext();
  return <p className="text-xs text-ink-muted">Shown: {String(shown)}</p>;
}

export default function Example() {
  const [active, setActive] = useState(false);
  const run = (ms: number) => {
    setActive(true);
    setTimeout(() => setActive(false), ms);
  };
  return (
    <div className="grid justify-items-start gap-3">
      <div className="flex flex-wrap gap-4">
        <button type="button" className={button} onClick={() => run(200)}>Quick check (0.2 s)</button>
        <button type="button" className={button} onClick={() => run(2000)}>Full check (2 s)</button>
      </div>
      <Loading.Root active={active} delay={300} minDuration={500}>
        <div className="flex h-6 items-center gap-2">
          <Loading.Spinner className="hidden size-4 animate-spin [animation-duration:690ms] data-shown:block">
            <svg viewBox="0 0 100 100" role="img" aria-label="Checking vendor documents" className="block size-full fill-transparent">
              <circle cx="50" cy="50" r="42" className="stroke-layer-accent [stroke-width:16]" />
              <circle cx="50" cy="50" r="42" className="stroke-interactive [stroke-dasharray:276.46_276.46] [stroke-dashoffset:143.76] [stroke-width:16]" />
            </svg>
          </Loading.Spinner>
          <Shown />
        </div>
      </Loading.Root>
    </div>
  );
}
```

## Over one area

Wrap the content in `Area` and put the `Indicator` over it. While it shows, the area is inert and `aria-busy`, and the indicator is a group named by its `aria-label`. Focus that was inside the area waits on the indicator, then goes back: press Refresh with the keyboard and focus returns to it.


React (live React example):

```tsx
import { useState } from 'react';
import { Loading } from '@purpurabog/ui/headless';

export default function Example() {
  const [busy, setBusy] = useState(false);
  const refresh = () => {
    setBusy(true);
    setTimeout(() => setBusy(false), 2000);
  };
  return (
    <Loading.Root active={busy}>
      <div className="relative max-w-md">
        <Loading.Area className="grid justify-items-start gap-3 border border-hairline bg-layer-1 p-4 text-ink">
          <h4 className="text-sm font-semibold">Contract CT-2026-118</h4>
          <p className="text-sm">Siam Logistics Co., Ltd. · ฿1,250,000</p>
          <button type="button" onClick={refresh} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Refresh (2 s)</button>
        </Loading.Area>
        <Loading.Indicator aria-label="Refreshing the contract" className="absolute inset-0 z-1 hidden items-center justify-center bg-overlay outline-none data-shown:flex">
          <Loading.Spinner className="size-[88px] animate-spin [animation-duration:690ms]">
            <svg viewBox="0 0 100 100" role="img" aria-label="Refreshing the contract" className="block size-full fill-transparent">
              <circle cx="50" cy="50" r="44" className="stroke-interactive [stroke-dasharray:276.46_276.46] [stroke-dashoffset:52.53] [stroke-width:10]" />
            </svg>
          </Loading.Spinner>
        </Loading.Indicator>
      </div>
    </Loading.Root>
  );
}
```

## Over the whole page

With `modal`, the `Indicator` is a modal dialog while it shows. It takes focus, and Tab and focus moving elsewhere come back to it; a modal dialog opened above it is left alone. When it stops, focus goes back where it was. It is no `<dialog>`, so Esc can't close it.

The overlay is `position: fixed`. In this demo it sits in a box with a `transform`, so it covers only the box.


React (live React example):

```tsx
import { useState } from 'react';
import { Loading } from '@purpurabog/ui/headless';

export default function Example() {
  const [busy, setBusy] = useState(false);
  const generate = () => {
    setBusy(true);
    setTimeout(() => setBusy(false), 3000);
  };
  return (
    <div className="relative h-60 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
      <div className="grid justify-items-start gap-4 p-4">
        <p className="text-sm">Quarterly purchasing report, 42 pages</p>
        <button type="button" onClick={generate} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Generate PDF (3 s)</button>
      </div>
      <Loading.Root active={busy} modal>
        <Loading.Indicator aria-label="Generating the PDF" className="fixed inset-0 z-10 hidden items-center justify-center bg-overlay outline-none data-shown:flex">
          <Loading.Spinner className="size-[88px] animate-spin [animation-duration:690ms]">
            <svg viewBox="0 0 100 100" role="img" aria-label="Generating the PDF" className="block size-full fill-transparent">
              <circle cx="50" cy="50" r="44" className="stroke-interactive [stroke-dasharray:276.46_276.46] [stroke-dashoffset:52.53] [stroke-width:10]" />
            </svg>
          </Loading.Spinner>
        </Loading.Indicator>
      </Loading.Root>
    </div>
  );
}
```

## Style it

Every part has `data-shown` while the spinner shows. Hide the indicator and the spinner without it, and fade or blur the area with it.


React (live React example):

```tsx
import { useState } from 'react';
import { Loading } from '@purpurabog/ui/headless';

export default function Example() {
  const [busy, setBusy] = useState(false);
  return (
    <div className="grid justify-items-start gap-3">
      <button type="button" onClick={() => setBusy(!busy)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        {busy ? 'Stop' : 'Start'}
      </button>
      <Loading.Root active={busy} delay={200}>
        <div className="relative w-full max-w-md">
          <Loading.Area className="border border-hairline bg-layer-1 p-4 text-sm text-ink transition-opacity data-shown:opacity-40">
            Vendor documents: company certificate, VAT registration, bank book.
          </Loading.Area>
          <Loading.Indicator aria-label="Checking documents" className="absolute inset-0 hidden items-center justify-center outline-none data-shown:flex">
            <Loading.Spinner className="size-8 animate-spin [animation-duration:690ms] motion-reduce:[animation-duration:2s]">
              <svg viewBox="0 0 100 100" role="img" aria-label="Checking documents" className="block size-full fill-transparent">
                <circle cx="50" cy="50" r="42" className="stroke-layer-accent [stroke-width:12]" />
                <circle cx="50" cy="50" r="42" className="stroke-interactive [stroke-dasharray:276.46_276.46] [stroke-dashoffset:143.76] [stroke-width:12]" />
              </svg>
            </Loading.Spinner>
          </Loading.Indicator>
        </div>
      </Loading.Root>
    </div>
  );
}
```
```css
/* className="area" on Area, "indicator" on Indicator, "spinner" on Spinner */
.area[data-shown] { opacity: 0.4; }
.indicator { position: absolute; inset: 0; display: none; align-items: center; justify-content: center; }
.indicator[data-shown] { display: flex; }
.spinner { width: 32px; height: 32px; animation: spin 690ms linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
```

## Parts

### Loading.Root

Renders only its children. It holds whether the spinner shows and moves focus while it does.

| Prop | Type | Default | |
|---|---|---|---|
| `active` | `boolean` | `true` | Starts and stops it; false hides it |
| `delay` | `number` | `0` | Milliseconds `active` must last before it shows |
| `minDuration` | `number` | `0` | Once shown, the least milliseconds it stays |
| `modal` | `boolean` | `false` | A page overlay: the `Indicator` is a modal dialog that holds focus while shown |

`Loading.useLoadingContext()` returns `shown` and `modal` (plus the refs of the area and the indicator) to any component inside `Root`.

### Loading.Area

A `<div>` around the content that a contained loading covers. While shown it is `inert` and has `aria-busy="true"`.

| Attribute | When |
|---|---|
| `data-shown` | The spinner shows |

### Loading.Indicator

A `<div>` that holds focus while it shows. It takes every div prop except `role` and `tabIndex`; name it with `aria-label`. While shown it has `tabIndex={-1}`, `role="dialog"` with `aria-modal="true"` when `Root` is `modal`, or else `role="group"`, and its `aria-label`. While hidden it has no role and no name.

| Attribute | When |
|---|---|
| `data-shown` | The spinner shows |

### Loading.Spinner

A `<div>` around your spinner graphic, with `aria-atomic="true"`. While shown it is an assertive live region (`aria-live="assertive"`), so the graphic's name is announced; while hidden, `aria-live="off"`.

| Attribute | When |
|---|---|
| `data-shown` | The spinner shows |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | With `modal`: stays on the indicator while it shows |

The parts:

- move focus to the `Indicator` when a modal loading shows, or when focus was inside the `Area`, and give it back afterwards;
- set `role`, `aria-modal`, `aria-label` and `tabIndex` on the `Indicator` while it shows;
- make the `Area` inert and `aria-busy`;
- make the `Spinner` an assertive live region while it shows.

You add:

- The spinner graphic with an accessible name (`role="img"` and `aria-label` on the `<svg>`) and the `aria-label` of the `Indicator`. Say what is loading.
- Hiding the parts while they have no `data-shown`, and the overlay colour.
- A slower or still spinner under `prefers-reduced-motion`.
