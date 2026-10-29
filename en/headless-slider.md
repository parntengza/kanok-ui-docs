# Headless Slider

`Slider` gives you the slider's behaviour with no classes: one thumb, or two for a range. Each thumb is a `role="slider"` Tab stop that moves with the arrow keys; a press on the track moves the nearer thumb and starts a drag that follows the pointer anywhere on the page. A number box beside the track applies typed numbers, and a hidden input submits each value.

You own the markup, the end labels, the messages and every style, including where the thumbs sit: `Control` gives you the positions as CSS variables. The styled version is [Slider](https://parntengza.github.io/kanok-ui-docs/en/slider/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Slider } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { Slider } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted data-disabled:text-ink-disabled';
const box = 'h-10 w-16 border-b border-border-strong-1 bg-field-1 px-2 text-center text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

export default function Example() {
  const [volume, setVolume] = useState(50);
  const [committed, setCommitted] = useState(50);
  return (
    <Slider.Root value={[volume]} onValueChange={([v]) => setVolume(v)} onValueCommit={([v]) => setCommitted(v)}>
      <div className="grid gap-2">
        <Slider.Label className={label}>Volume</Slider.Label>
        <Slider.Group className="flex items-center gap-4">
          <Rails />
          <Slider.Input aria-label="Volume" className={box} />
        </Slider.Group>
        <p className="text-xs text-ink-muted">onValueChange: {volume} · onValueCommit: {committed}</p>
      </div>
      <Slider.HiddenInput name="volume" />
    </Slider.Root>
  );
}

// The track and thumbs. Each example on this page is a whole module, so each repeats this <Rails />.
function Rails({ range = false }: Readonly<{ range?: boolean }>) {
  const thumb = 'absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse hover:scale-125 focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled data-disabled:hover:scale-100';
  return (
    <Slider.Control className="relative h-8 w-64 cursor-pointer touch-none data-disabled:cursor-not-allowed data-readonly:cursor-default">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline data-disabled:bg-border-disabled" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
      {range && <Slider.Thumb index={0} aria-label="Lower bound" className={`${thumb} start-[calc(var(--slider-range-start)*100%)]`} />}
      <Slider.Thumb index={range ? 1 : 0} aria-label={range ? 'Upper bound' : undefined} className={`${thumb} start-[calc(var(--slider-range-end)*100%)]`} />
    </Slider.Control>
  );
}
```

Values are arrays, one entry per thumb: `[value]`, or `[lower, upper]`. `onValueChange` follows every change (dragging, keys, typing); `onValueCommit` hears the committed ones: the pointer released, a key handled, a number box committed. An entry of `value` left `undefined` keeps that thumb uncontrolled.

## Anatomy

```tsx
<Slider.Root>
  <Slider.Label />
  <Slider.Group>
    <Slider.Input index={0} />
    <Slider.Control>
      <Slider.Track />
      <Slider.Indicator />
      <Slider.Thumb index={0} />
      <Slider.Thumb index={1} />
    </Slider.Control>
    <Slider.Input index={1} />
  </Slider.Group>
  <Slider.HiddenInput index={0} />
  <Slider.HiddenInput index={1} />
</Slider.Root>
```

With one thumb, leave out the parts with `index={1}`.

## Scale and step

`min` and `max` set the ends (0 and 100) and `step` the increment (1). Arrow keys move one step; with Shift they move `stepMultiplier` steps (4). The end labels are your markup.


React (live React example):

```tsx
import { Slider } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted data-disabled:text-ink-disabled';
const box = 'h-10 w-16 border-b border-border-strong-1 bg-field-1 px-2 text-center text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

export default function Example() {
  return (
    <Slider.Root min={0} max={50} step={5} defaultValue={[10]}>
      <div className="grid gap-2">
        <Slider.Label className={label}>Discount</Slider.Label>
        <Slider.Group className="flex items-center gap-4 text-sm text-ink">
          <span>0%</span>
          <Rails />
          <span>50%</span>
          <Slider.Input aria-label="Discount" className={box} />
        </Slider.Group>
      </div>
    </Slider.Root>
  );
}

// Rails: the track and thumbs from "Use it".
function Rails({ range = false }: Readonly<{ range?: boolean }>) {
  const thumb = 'absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse hover:scale-125 focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled data-disabled:hover:scale-100';
  return (
    <Slider.Control className="relative h-8 w-64 cursor-pointer touch-none data-disabled:cursor-not-allowed data-readonly:cursor-default">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline data-disabled:bg-border-disabled" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
      {range && <Slider.Thumb index={0} aria-label="Lower bound" className={`${thumb} start-[calc(var(--slider-range-start)*100%)]`} />}
      <Slider.Thumb index={range ? 1 : 0} aria-label={range ? 'Upper bound' : undefined} className={`${thumb} start-[calc(var(--slider-range-end)*100%)]`} />
    </Slider.Control>
  );
}
```

For a formatted value, give the thumb `aria-valuetext` (say, `"10%"`); screen readers read it instead of the number.

## Two thumbs: a range

Give two values and two thumbs. The thumbs never pass each other: each one's bounds stop at the other, and a press on the track moves the nearer one.


React (live React example):

```tsx
import { useState } from 'react';
import { Slider } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted data-disabled:text-ink-disabled';
const box = 'h-10 w-16 border-b border-border-strong-1 bg-field-1 px-2 text-center text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

export default function Example() {
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <Slider.Root min={0} max={1000} step={10} defaultValue={[200, 600]}>
        <div className="grid gap-2">
          <Slider.Label className={label}>Price</Slider.Label>
          <Slider.Group className="flex items-center gap-4">
            <Slider.Input index={0} aria-label="Lower bound" className={box} />
            <Rails range />
            <Slider.Input index={1} aria-label="Upper bound" className={box} />
          </Slider.Group>
        </div>
        <Slider.HiddenInput index={0} name="min-price" />
        <Slider.HiddenInput index={1} name="max-price" />
      </Slider.Root>
      <button type="submit" className="h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Send
      </button>
      {sent && <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p>}
    </form>
  );
}

// Rails: the track and thumbs from "Use it".
function Rails({ range = false }: Readonly<{ range?: boolean }>) {
  const thumb = 'absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse hover:scale-125 focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled data-disabled:hover:scale-100';
  return (
    <Slider.Control className="relative h-8 w-64 cursor-pointer touch-none data-disabled:cursor-not-allowed data-readonly:cursor-default">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline data-disabled:bg-border-disabled" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
      {range && <Slider.Thumb index={0} aria-label="Lower bound" className={`${thumb} start-[calc(var(--slider-range-start)*100%)]`} />}
      <Slider.Thumb index={range ? 1 : 0} aria-label={range ? 'Upper bound' : undefined} className={`${thumb} start-[calc(var(--slider-range-end)*100%)]`} />
    </Slider.Control>
  );
}
```

## The number box

`Input` mirrors its thumb's value. A number within its bounds applies while typing, snapped to the nearest step. On blur or Enter, a number outside the bounds is clamped, and text that isn't a number makes the slider invalid. The context's `corrected` holds the typed number after a clamp, for you to announce:


React (live React example):

```tsx
import { Slider } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted data-disabled:text-ink-disabled';
const box = 'h-10 w-16 border-b border-border-strong-1 bg-field-1 px-2 text-center text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

function Corrected() {
  const { corrected } = Slider.useSliderContext();
  return (
    <span role="status" className="text-xs text-ink-muted">
      {corrected === undefined ? '' : `${corrected} was corrected.`}
    </span>
  );
}

// Type 250 or "abc" in the box, then press Enter.
export default function Example() {
  return (
    <Slider.Root min={0} max={200} defaultValue={[120]}>
      <div className="grid gap-2">
        <Slider.Label className={label}>Width (px)</Slider.Label>
        <Slider.Group className="flex items-center gap-4">
          <Rails />
          <Slider.Input aria-label="Width" className={box} />
        </Slider.Group>
        <Corrected />
      </div>
    </Slider.Root>
  );
}

// Rails: the track and thumbs from "Use it".
function Rails({ range = false }: Readonly<{ range?: boolean }>) {
  const thumb = 'absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse hover:scale-125 focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled data-disabled:hover:scale-100';
  return (
    <Slider.Control className="relative h-8 w-64 cursor-pointer touch-none data-disabled:cursor-not-allowed data-readonly:cursor-default">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline data-disabled:bg-border-disabled" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
      {range && <Slider.Thumb index={0} aria-label="Lower bound" className={`${thumb} start-[calc(var(--slider-range-start)*100%)]`} />}
      <Slider.Thumb index={range ? 1 : 0} aria-label={range ? 'Upper bound' : undefined} className={`${thumb} start-[calc(var(--slider-range-end)*100%)]`} />
    </Slider.Control>
  );
}
```

Without a number box, leave out `Slider.Input`. A value tooltip on the thumb, if you want one, is your markup:


React (live React example):

```tsx
import { Slider } from '@purpurabog/ui/headless';

// Rails with a tooltip: the thumb shows its value from the context.
function TooltipRails() {
  const { values } = Slider.useSliderContext();
  return (
    <Slider.Control className="relative mt-8 h-8 w-64 cursor-pointer touch-none">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-0 end-[calc((1-var(--slider-range-end))*100%)]" />
      <Slider.Thumb aria-valuetext={`${values[0]}%`} className="group absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse start-[calc(var(--slider-range-end)*100%)] focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
        <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 bg-inverse-canvas px-2 py-1 text-xs whitespace-nowrap text-inverse-ink group-hover:block group-focus-visible:block group-data-dragging:block">
          {values[0]}%
        </span>
      </Slider.Thumb>
    </Slider.Control>
  );
}

export default function Example() {
  return (
    <Slider.Root defaultValue={[70]}>
      <div className="grid gap-2">
        <Slider.Label className="text-xs text-ink-muted">Brightness</Slider.Label>
        <Slider.Group>
          <TooltipRails />
        </Slider.Group>
      </div>
    </Slider.Root>
  );
}
```

## Errors and warnings

`invalid` on `Root` shows the error: `aria-invalid` and `data-invalid` on the thumbs and the boxes, and `data-invalid` on `Group`, `Control`, `Track` and `Indicator`. A disabled or read-only slider shows no error. There is no warning state: a warning is your markup.


React (live React example):

```tsx
import { useState } from 'react';
import { Slider } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted data-disabled:text-ink-disabled';
const box = 'h-10 w-16 border-b border-border-strong-1 bg-field-1 px-2 text-center text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

export default function Example() {
  const [size, setSize] = useState(18);
  const tooMany = size > 15;
  return (
    <Slider.Root min={1} max={20} value={[size]} onValueChange={([v]) => setSize(v)} invalid={tooMany}>
      <div className="grid gap-2">
        <Slider.Label className={label}>Team size</Slider.Label>
        <Slider.Group className="flex items-center gap-4">
          <Rails />
          <Slider.Input aria-label="Team size" aria-describedby="team-size-error" className={box} />
        </Slider.Group>
        <p id="team-size-error" className="text-xs text-error-text">{tooMany ? 'Rooms hold 15 people.' : ''}</p>
      </div>
    </Slider.Root>
  );
}

// Rails: the track and thumbs from "Use it".
function Rails({ range = false }: Readonly<{ range?: boolean }>) {
  const thumb = 'absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse hover:scale-125 focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled data-disabled:hover:scale-100';
  return (
    <Slider.Control className="relative h-8 w-64 cursor-pointer touch-none data-disabled:cursor-not-allowed data-readonly:cursor-default">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline data-disabled:bg-border-disabled" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
      {range && <Slider.Thumb index={0} aria-label="Lower bound" className={`${thumb} start-[calc(var(--slider-range-start)*100%)]`} />}
      <Slider.Thumb index={range ? 1 : 0} aria-label={range ? 'Upper bound' : undefined} className={`${thumb} start-[calc(var(--slider-range-end)*100%)]`} />
    </Slider.Control>
  );
}
```

## Read-only and disabled


React (live React example):

```tsx
import { Slider } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted data-disabled:text-ink-disabled';
const box = 'h-10 w-16 border-b border-border-strong-1 bg-field-1 px-2 text-center text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

export default function Example() {
  return (
    <div className="grid gap-6">
      <Slider.Root defaultValue={[30]} readOnly>
        <div className="grid gap-2">
          <Slider.Label className={label}>Limit</Slider.Label>
          <Slider.Group className="flex items-center gap-4">
            <Rails />
            <Slider.Input aria-label="Limit" className={box} />
          </Slider.Group>
        </div>
      </Slider.Root>

      <Slider.Root defaultValue={[60]} disabled>
        <div className="grid gap-2">
          <Slider.Label className={label}>Overdraft</Slider.Label>
          <Slider.Group className="flex items-center gap-4">
            <Rails />
            <Slider.Input aria-label="Overdraft" className={box} />
          </Slider.Group>
        </div>
      </Slider.Root>
    </div>
  );
}

// Rails: the track and thumbs from "Use it".
function Rails({ range = false }: Readonly<{ range?: boolean }>) {
  const thumb = 'absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse hover:scale-125 focus-visible:bg-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled data-disabled:hover:scale-100';
  return (
    <Slider.Control className="relative h-8 w-64 cursor-pointer touch-none data-disabled:cursor-not-allowed data-readonly:cursor-default">
      <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline data-disabled:bg-border-disabled" />
      <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
      {range && <Slider.Thumb index={0} aria-label="Lower bound" className={`${thumb} start-[calc(var(--slider-range-start)*100%)]`} />}
      <Slider.Thumb index={range ? 1 : 0} aria-label={range ? 'Upper bound' : undefined} className={`${thumb} start-[calc(var(--slider-range-end)*100%)]`} />
    </Slider.Control>
  );
}
```

`readOnly` keeps the values and submits them; nothing moves and the boxes can't be edited. A read-only thumb leaves the Tab order unless you give it `tabIndex={0}`. `disabled` changes nothing either, and `HiddenInput` submits nothing.

An uncontrolled slider goes back to `defaultValue` when its form is reset.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Slider } from '@purpurabog/ui/headless';

export default function Example() {
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="grid gap-4">
      <Slider.Root defaultValue={[40]} invalid={invalid} disabled={disabled}>
        <Slider.Label className="sr-only">Opacity</Slider.Label>
        <Slider.Group>
          <Slider.Control className="relative h-8 w-64">
            <Slider.Track className="absolute inset-x-0 top-4 h-0.5 bg-hairline" />
            <Slider.Indicator className="absolute top-4 h-0.5 bg-layer-selected-inverse start-[calc(var(--slider-range-start)*100%)] end-[calc((1-var(--slider-range-end))*100%)] data-invalid:bg-error data-disabled:bg-border-disabled" />
            <Slider.Thumb className="absolute top-2.5 size-3.5 -translate-x-1/2 rounded-full bg-layer-selected-inverse start-[calc(var(--slider-range-end)*100%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus data-dragging:scale-125 data-disabled:bg-border-disabled" />
          </Slider.Control>
        </Slider.Group>
      </Slider.Root>
      <div className="flex gap-4 text-sm text-ink">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={invalid} onChange={(e) => setInvalid(e.target.checked)} /> invalid
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} /> disabled
        </label>
      </div>
    </div>
  );
}
```
```css
.slider-control { position: relative; height: 2rem; }
.slider-indicator {
  position: absolute;
  inset-inline-start: calc(var(--slider-range-start) * 100%);
  inset-inline-end: calc((1 - var(--slider-range-end)) * 100%);
}
.slider-indicator[data-invalid] { background: #da1e28; }
.slider-thumb {
  position: absolute;
  inset-inline-start: calc(var(--slider-range-end) * 100%);
  translate: -50% 0;
}
.slider-thumb[data-dragging] { scale: 1.25; }
.slider-thumb[data-disabled] { background: #c6c6c6; }
```

`--slider-range-start` is where the filled part starts (0 with one thumb) and `--slider-range-end` where it ends, as 0…1 of the track. Place the lower thumb at the start and the upper (or only) thumb at the end.

## Parts

### Slider.Root

Renders no element: it holds the values for its parts.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `readonly (number \| undefined)[]` | | One entry per thumb, controlled; an `undefined` entry keeps that thumb uncontrolled |
| `defaultValue` | `readonly number[]` | `[min]` | |
| `onValueChange` | `(values: number[]) => void` | | Every change |
| `onValueCommit` | `(values: number[]) => void` | | Committed changes: pointer released, a key, a box committed |
| `min` | `number` | `0` | |
| `max` | `number` | `100` | |
| `step` | `number` | `1` | |
| `stepMultiplier` | `number` | `4` | Shift + arrow moves `step × stepMultiplier` |
| `disabled` | `boolean` | `false` | |
| `readOnly` | `boolean` | `false` | Keeps the values; thumbs leave the Tab order |
| `invalid` | `boolean` | `false` | Shows the error |

### Slider.Label

Renders a `<label>` that names the group and the thumbs. A click on it focuses the first thumb. Its `htmlFor` defaults to the first thumb's id.

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` |

### Slider.Group, Slider.Control, Slider.Track, Slider.Indicator

Each renders a `<div>`. `Group` is a `role="group"` named by `Label`, around the track, your end labels and the boxes. `Control` is the pointer area: a press there moves the nearer thumb (or the one pressed) and starts a drag. It sets `--slider-range-start` and `--slider-range-end`. `Track` is the rail and `Indicator` the filled part.

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` |
| `data-readonly` | `readOnly` |
| `data-invalid` | The error shows |
| `data-dragging` | A thumb is being dragged |
| `data-orientation` | Always `horizontal` (`Group` and `Control` only) |

### Slider.Thumb

Renders a `<div role="slider">` with `aria-valuemin`, `aria-valuemax` and `aria-valuenow`, named by `Label` unless you give it `aria-label` or `aria-labelledby`.

| Prop | Type | Default | |
|---|---|---|---|
| `index` | `number` | `0` | Which value it moves |

| Attribute | When |
|---|---|
| `data-index` | Always: its `index` |
| `data-disabled` | `disabled` |
| `data-readonly` | `readOnly` |
| `data-invalid` | The error shows |
| `data-dragging` | This thumb is being dragged |

### Slider.Input

Renders an `<input type="number">` whose `min` / `max` are the thumb's bounds and whose `step` is `Root`'s.

| Prop | Type | Default | |
|---|---|---|---|
| `index` | `number` | `0` | Which value it edits |

| Attribute | When |
|---|---|
| `data-index` | Always: its `index` |
| `data-disabled` | `disabled` |
| `data-readonly` | `readOnly` |
| `data-invalid` | The error shows |

### Slider.HiddenInput

Renders an `<input type="hidden">` with the value; give it a `name`. It is disabled (submits nothing) while `Root` is disabled.

| Prop | Type | Default | |
|---|---|---|---|
| `index` | `number` | `0` | Which value it submits |

`Slider.useSliderContext()` inside `Root` gives `values`, `dragging`, `invalid`, `notANumber`, `corrected` and the rest of the state.

## Keyboard and accessibility

On a thumb:

| Key | Does |
|---|---|
| ← / ↓ | One step down |
| → / ↑ | One step up |
| Shift + arrow | `stepMultiplier` steps |
| Home / End | To `min` / `max` (in a range, as far as the other thumb allows) |

In a number box, Enter commits the typed number.

The parts handle:

- `role="slider"` with `aria-valuemin`, `aria-valuemax` and `aria-valuenow` on each thumb; in a range each thumb's bounds stop at the other.
- `aria-disabled`, `aria-readonly` and `aria-invalid` on the thumbs; `aria-invalid` on the boxes.
- A `role="group"` named by `Label`; a click on the label focuses the first thumb.
- Focus moves to the thumb a press on the track moved.

You add:

- An `aria-label` for each thumb in a range ("Lower bound", "Upper bound") and for each number box.
- `aria-valuetext` for a formatted value.
- The error message (link it with `aria-describedby`) and the announcement of a clamped number.
