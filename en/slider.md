# Slider

A slider picks a number, or a range between two numbers, from a scale. A number box beside the track lets users type the exact value.


HTML:

```html
<ui-slider label="Volume" name="volume" value="40"></ui-slider>
```

React:

```tsx
<UiSlider label="Volume" name="volume" value={40} />
```

React + Tailwind:

```tsx
<Slider label="Volume" name="volume" defaultValue={40} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/slider
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-slider
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/slider.json
#    to its target:
#    components/ui/primitives/slider/slider-skeleton.ts
#    components/ui/primitives/slider/slider.styles.ts
#    components/ui/primitives/slider/slider.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-slider, shared-element, shared-field, shared-form-control, shared-localize, shared-row-wrap, shared-skeleton, shared-slots, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-slider.json
#    to its target:
#    components/ui/react-tw/slider.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, core-slider, tw-field, tw-i18n, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/slider';</script>

<ui-slider label="Volume" name="volume" value="40"></ui-slider>
```

React:

```tsx
import { UiSlider } from '@purpurabog/ui/react';
import type { UiSlider as SliderElement } from '@purpurabog/ui';

<UiSlider label="Volume" name="volume" value={volume}
  onChange={(e) => setVolume((e.target as SliderElement).value)} />
```

React + Tailwind:

```tsx
import { Slider } from '@/components/ui/react-tw/slider';

<Slider label="Volume" name="volume" value={volume} onChange={setVolume} />
```

The web component fires `input` while the value moves (dragging, keys, typing) and `change` when it is committed: the pointer released, a key handled, the number box left. In React those are `onInput` / `onChange` on `UiSlider`. The Tailwind `Slider` calls `onChange(value)` on every change and `onRelease(value)` on commits.

## Scale and step

`min` and `max` set the ends (0 and 100 by default) and `step` the increment (1). Arrow keys move one step; with Shift they move `step-multiplier` steps (4 by default). `min-label` and `max-label` add a unit after the end numbers.


HTML:

```html
<ui-slider label="Discount" min="0" max="50" step="5" value="10" min-label="%" max-label="%"></ui-slider>
```

React:

```tsx
<UiSlider label="Discount" min={0} max={50} step={5} value={10} minLabel="%" maxLabel="%" />
```

React + Tailwind:

```tsx
<Slider label="Discount" min={0} max={50} step={5} defaultValue={10} minLabel="%" maxLabel="%" />
```

## Format the labels

For more control, the `formatLabel` property (a function `(value, label) => string`) formats the end labels and the value screen readers hear. It is a property on the web component and a prop in both React versions. With `hide-text-input`, the tooltip on the thumb uses it too, so money reads as money.


HTML:

```html
<ui-slider id="slider-budget" label="Training budget" min="0" max="10000" step="100" value="2500" hide-text-input></ui-slider>
<ui-slider id="slider-rent" label="Rent per month" min="0" max="50000" step="500" value="8000" value-upper="20000" hide-text-input></ui-slider>

<script type="module">
  const baht = (value) => `฿${value.toLocaleString('th-TH')}`;
  document.getElementById('slider-budget').formatLabel = baht;
  document.getElementById('slider-rent').formatLabel = baht;
</script>
```

React:

```tsx
const baht = (value: number) => `฿${value.toLocaleString('th-TH')}`;

<UiSlider label="Training budget" min={0} max={10000} step={100} value={2500} hideTextInput formatLabel={baht} />
<UiSlider label="Rent per month" min={0} max={50000} step={500} value={8000} valueUpper={20000} hideTextInput formatLabel={baht} />
```

React + Tailwind:

```tsx
const baht = (value: number) => `฿${value.toLocaleString('th-TH')}`;

<Slider label="Training budget" min={0} max={10000} step={100} defaultValue={2500} hideTextInput formatLabel={baht} />
<Slider label="Rent per month" min={0} max={50000} step={500} defaultValue={8000} defaultValueUpper={20000} hideTextInput formatLabel={baht} />
```

## Two handles: a range

Set `value-upper` and the slider picks a range from `value` to `value-upper`. The two thumbs never pass each other, a press on the track moves the nearer one, and each has its own number box: the lower one before the track, the upper one after.


HTML:

```html
<ui-slider id="slider-price" label="Price" min="0" max="1000" step="10" value="200" value-upper="600"
  name="min-price" name-upper="max-price"></ui-slider>
<p>Search from <output id="slider-price-out">200 to 600</output></p>

<script type="module">
  const price = document.getElementById('slider-price');
  price.addEventListener('change', () => {
    document.getElementById('slider-price-out').textContent = `${price.value} to ${price.valueUpper}`;
  });
</script>
```

React:

```tsx
<UiSlider label="Price" min={0} max={1000} step={10} value={200} valueUpper={600}
  name="min-price" nameUpper="max-price"
  onChange={(e) => {
    const slider = e.target as SliderElement;
    search(slider.value, slider.valueUpper);
  }} />
```

React + Tailwind:

```tsx
<Slider label="Price" min={0} max={1000} step={10} defaultValue={200} defaultValueUpper={600}
  name="min-price" nameUpper="max-price" onRelease={(low, high) => search(low, high)} />
```

The form gets both values: under `name-upper` for the upper one, or both under `name` when you leave `name-upper` out. The thumbs are named "Lower bound" and "Upper bound" after the slider's label; `input-label` and `upper-input-label` rename the number boxes.

## The number box

The box mirrors the value, and typing changes it:

- A number in range applies at once, snapped to the nearest step.
- On blur or Enter, a number outside `min` / `max` is clamped to the nearest end. Screen readers hear that it was corrected (`corrected-text` changes the words; `{value}` is the typed number).
- A box that holds no number (cleared, say) shows the error "Enter a number" and blocks submit until it is fixed.

`hide-text-input` removes the box and shows the value in a tooltip on the thumb instead:


HTML:

```html
<ui-slider label="Brightness" value="70" hide-text-input></ui-slider>
```

React:

```tsx
<UiSlider label="Brightness" value={70} hideTextInput />
```

React + Tailwind:

```tsx
<Slider label="Brightness" defaultValue={70} hideTextInput />
```

## Errors and warnings

`invalid` with `invalid-text` shows an error from your own validation and blocks submit; `warn` with `warn-text` shows a warning that doesn't. The slider has no helper line.


HTML:

```html
<ui-slider label="Team size" min="1" max="20" value="18" warn warn-text="Rooms hold 15 people."></ui-slider>
<ui-slider label="Retention period" min="0" max="120" value="6" max-label=" months" invalid invalid-text="Keep records for at least 12 months."></ui-slider>
```

React:

```tsx
<UiSlider label="Team size" min={1} max={20} value={18} warn warnText="Rooms hold 15 people." />
<UiSlider label="Retention period" min={0} max={120} value={6} maxLabel=" months" invalid invalidText="Keep records for at least 12 months." />
```

React + Tailwind:

```tsx
<Slider label="Team size" min={1} max={20} defaultValue={18} warn warnText="Rooms hold 15 people." />
<Slider label="Retention period" min={0} max={120} defaultValue={6} maxLabel=" months" invalid invalidText="Keep records for at least 12 months." />
```

How errors show across fields: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Read-only and disabled

`readonly` keeps the value and submits it; the thumb can't be moved and the number box can't be edited. A read-only thumb leaves the Tab order unless the box is hidden, so users still reach the value. `disabled` greys everything out and nothing is submitted.


HTML:

```html
<ui-slider label="Limit" value="30" readonly></ui-slider>
<ui-slider label="Limit" value="30" disabled></ui-slider>
```

React:

```tsx
<UiSlider label="Limit" value={30} readonly />
<UiSlider label="Limit" value={30} disabled />
```

React + Tailwind:

```tsx
<Slider label="Limit" defaultValue={30} readOnly />
<Slider label="Limit" defaultValue={30} disabled />
```

The web component and its React wrapper spell it `readonly`; React + Tailwind uses `readOnly`.

## Show the value as it moves

Use `input` to update what depends on the value while the thumb moves, and `change` to save once it settles. In React + Tailwind those are `onChange` and `onRelease`.


HTML:

```html
<ui-slider id="slider-down" label="Down payment" min="0" max="50" step="5" value="20" min-label="%" max-label="%"></ui-slider>
<p>On a ฿1,200,000 vehicle: <output id="slider-down-out">฿240,000</output>. Saved: <output id="slider-down-saved">20%</output></p>

<script type="module">
  const down = document.getElementById('slider-down');
  down.addEventListener('input', () => {
    document.getElementById('slider-down-out').textContent = `฿${(12000 * down.value).toLocaleString('th-TH')}`;
  });
  down.addEventListener('change', () => {
    document.getElementById('slider-down-saved').textContent = `${down.value}%`;
  });
</script>
```

React:

```tsx
const [percent, setPercent] = useState(20);

<UiSlider label="Down payment" min={0} max={50} step={5} value={percent} minLabel="%" maxLabel="%"
  onInput={(e) => setPercent((e.target as SliderElement).value)}
  onChange={(e) => save((e.target as SliderElement).value)} />
<p>On a ฿1,200,000 vehicle: <output>฿{(12000 * percent).toLocaleString('th-TH')}</output></p>
```

React + Tailwind:

```tsx
const [percent, setPercent] = useState(20);

<Slider label="Down payment" min={0} max={50} step={5} value={percent} minLabel="%" maxLabel="%"
  onChange={setPercent} onRelease={save} />
<p>On a ฿1,200,000 vehicle: <output>฿{(12000 * percent).toLocaleString('th-TH')}</output></p>
```

`save` stands for your own code.

## In a form

With a `name`, the slider submits its value with the form; a range also submits `name-upper`. Form reset puts the thumbs back where they started.


HTML:

```html
<form id="slider-form" method="dialog" style="display: grid; gap: 16px">
  <ui-slider label="Retention period" name="retention" min="0" max="120" value="36" max-label=" months"></ui-slider>
  <ui-slider label="Approval limit (฿)" name="limitFrom" name-upper="limitTo" min="0" max="500000" step="10000" value="50000" value-upper="200000"></ui-slider>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <ui-button type="submit">Save policy</ui-button>
    <ui-button type="reset" kind="secondary">Reset</ui-button>
  </div>
</form>
<p>Submitted: <output id="slider-form-out">nothing yet</output></p>

<script type="module">
  const form = document.getElementById('slider-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(([key, value]) => `${key}=${value}`);
    document.getElementById('slider-form-out').textContent = entries.join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
  <UiSlider label="Retention period" name="retention" min={0} max={120} value={36} maxLabel=" months" />
  <UiSlider label="Approval limit (฿)" name="limitFrom" nameUpper="limitTo" min={0} max={500000} step={10000} value={50000} valueUpper={200000} />
  <UiButton type="submit">Save policy</UiButton>
  <UiButton type="reset" kind="secondary">Reset</UiButton>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
  <Slider label="Retention period" name="retention" min={0} max={120} defaultValue={36} maxLabel=" months" />
  <Slider label="Approval limit (฿)" name="limitFrom" nameUpper="limitTo" min={0} max={500000} step={10000} defaultValue={50000} defaultValueUpper={200000} />
  <Button type="submit">Save policy</Button>
  <Button type="reset" kind="secondary">Reset</Button>
</form>
```

## Skeleton

While the page loads its data, show `<ui-slider-skeleton>` in the slider's place, as Carbon's `SliderSkeleton`. `two-handles` (`twoHandles` in React + Tailwind) draws a range and `hide-label` leaves out the label bar. It has its own import, `@purpurabog/ui/slider-skeleton`, and is hidden from screen readers.


HTML:

```html
<ui-slider-skeleton></ui-slider-skeleton>
<ui-slider-skeleton two-handles></ui-slider-skeleton>
```

React:

```tsx
import { UiSliderSkeleton } from '@purpurabog/ui/react';

<UiSliderSkeleton />
<UiSliderSkeleton twoHandles />
```

React + Tailwind:

```tsx
import { SliderSkeleton } from '@/components/ui/react-tw/slider';

<SliderSkeleton />
<SliderSkeleton twoHandles />
```

## Keyboard

On a thumb:

| Key | Does |
|---|---|
| ← / ↓ | One step down |
| → / ↑ | One step up |
| Shift + arrow | `step-multiplier` steps (4 by default) |
| Home / End | To `min` / `max` (in a range, as far as the other thumb allows) |

In the number box, Enter commits the typed number.

## Accessibility

- Each thumb is a `role="slider"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and `aria-valuetext`, named by the label. In a range each thumb's bounds stop at the other thumb.
- A click on the label focuses the thumb, as a label focuses a native range input.
- The number box is a native number input with its own name ("Slider number input", or "Lower bound" / "Upper bound"; `input-label` and `upper-input-label` change them).
- An error sets `aria-invalid` and is linked with `aria-describedby`. A clamped number is announced in a polite live region.

Unstyled React parts with the same behaviour: [Headless Slider](https://parntengza.github.io/kanok-ui-docs/en/headless-slider/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-slider>` · React `UiSlider`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `hide-label` | `hideLabel` | `boolean` | `false` |  |
| `value` | `value` | `number` | `0` |  |
| `value-upper` | `valueUpper` | `number \| null` | `null` | A second thumb: the slider picks the range `value`…`value-upper` (Carbon `unstable_valueUpper`). |
| `name-upper` | `nameUpper` | `string` | `''` | The name the upper value is submitted under (default: `name`, so the form gets both under one name). |
| `upper-input-label` | `upperInputLabel` | `string` | `''` | Accessible name of the upper number box (Carbon `unstable_ariaLabelInputUpper`; default "Upper bound"). |
| `min` | `min` | `number` | `0` |  |
| `max` | `max` | `number` | `100` |  |
| `step` | `step` | `number` | `1` |  |
| `step-multiplier` | `stepMultiplier` | `number` | `4` | Shift + arrow moves by `step × step-multiplier`. |
| `min-label` | `minLabel` | `string` | `''` | Appended to the min / max numbers, e.g. "%" (Carbon `minLabel` / `maxLabel`). |
| `max-label` | `maxLabel` | `string` | `''` |  |
| `input-label` | `inputLabel` | `string` | `''` | Accessible name of the number input (Carbon `ariaLabelInput`). |
| `hide-text-input` | `hideTextInput` | `boolean` | `false` |  |
| `name` | `name` | `string` | `''` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `readonly` | `readonly` | `boolean` | `false` |  |
| `required` | `required` | `boolean` | `false` |  |
| `invalid` | `invalid` | `boolean` | `false` |  |
| `invalid-text` | `invalidText` | `string` | `''` |  |
| `warn` | `warn` | `boolean` | `false` |  |
| `warn-text` | `warnText` | `string` | `''` |  |
| `corrected-text` | `correctedText` | `string` | `''` | Announcement after an out-of-range number is clamped; `{value}` is the typed number (Carbon auto-correct message). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `formatLabel` | `SliderFormatLabel` | Formats min / max labels and the value tooltip (Carbon `formatLabel`). |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |
| `isRange` |  | (read-only) Two thumbs (`value-upper` set). |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |
| `focus(options)` | Focus the handle. |

#### Events

| Event | React | Description |
|---|---|---|
| `input` | `onInput` |  |
| `change` | `onChange` |  |

#### Slots

| Slot | Description |
|---|---|
| `label` | Rich label (overrides `label`) |
| `invalid-text` | Rich error text |
| `warn-text` | Rich warning text |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label |
| `base` | Row with labels, track and input |
| `min-label` | Minimum label |
| `max-label` | Maximum label |
| `track` | The 2px track |
| `filled-track` | The filled part |
| `thumb` | The handle (`role=slider`) |
| `thumb-lower` | With `value-upper`: the lower handle (also `thumb`) |
| `thumb-upper` | With `value-upper`: the upper handle (also `thumb`) |
| `input` | The number input |
| `input-lower` | With `value-upper`: the lower bound's input (also `input`) |
| `input-upper` | With `value-upper`: the upper bound's input (also `input`) |
| `error-text` | Error text below |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |
| `warning-text` | Warning text below |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-border` |  | / --ui-field-radius / --ui-field-background - The number box, as the other fields |
| `--ui-slider-fill` |  | The thumb, the filled track and the range handles (default `--ui-layer-selected-inverse`; Kanok: `--ui-interactive`) |
| `--ui-slider-handle-hover` |  | A range handle under the pointer (default `--ui-ink-muted`) |
| `--ui-slider-tick` |  | `display` of the mark at the middle of the track (default inline-block; Kanok: none) |
| `--ui-slider-range-handle-width` |  | / --ui-slider-range-handle-height / --ui-slider-range-lower-offset / --ui-slider-range-upper-offset - A range's handle box and where it sits on its value (default 16 × 24px, beside the value: Carbon's flags) |
| `--ui-slider-range-thumb` |  | / --ui-slider-range-thumb-hover / --ui-slider-range-thumb-inset / --ui-slider-range-thumb-radius / --ui-slider-range-focus-ring - A range thumb drawn in the handle (default none: the flag icons only; Kanok: a round dot) |
| `--ui-slider-range-gap` |  | / --ui-slider-range-icon-opacity - The gap where a flag meets the track and the flags' opacity (default the page colour, 1) |


