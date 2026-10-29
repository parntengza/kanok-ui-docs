# Number input

A number input takes a number: a quantity, an amount, a percentage. Carbon's − and + buttons sit at the end of the field, and ↑ / ↓ step from the keyboard.


HTML:

```html
<ui-number-input label="Number of units" name="units" value="1" min="1" max="20"></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Number of units" name="units" value="1" min={1} max={20} />
```

React + Tailwind:

```tsx
<NumberInput label="Number of units" name="units" defaultValue={1} min={1} max={20} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/number-input
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-number-input
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/number-input.json
#    to its target:
#    components/ui/primitives/number-input/number-input-skeleton.ts
#    components/ui/primitives/number-input/number-input.styles.ts
#    components/ui/primitives/number-input/number-input.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-number-format, shared-affixes, shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-number-input.json
#    to its target:
#    components/ui/react-tw/number-input.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, tw-affix, tw-field, tw-i18n, tw-refs, tw-skeleton, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/number-input';</script>

<ui-number-input label="Number of units" name="units" min="1" max="20"></ui-number-input>
```

React:

```tsx
import { UiNumberInput } from '@purpurabog/ui/react';

<UiNumberInput label="Number of units" name="units" min={1} max={20} onChange={(e) => setUnits((e.target as HTMLInputElement).value)} />
```

React + Tailwind:

```tsx
import { NumberInput } from '@/components/ui/react-tw/number-input';

<NumberInput label="Number of units" name="units" min={1} max={20} value={units} onChange={setUnits} />
```

- The value is text, so the field can be empty: `"12"`, `"0.5"`, or `""`. The element's `valueAsNumber` gives the number (`NaN` while empty).
- The element fires `input` on every keystroke or step, and `change` when the value is committed (leaving the field, Enter, a step). The React wrapper has `onInput` and `onChange`.
- The React + Tailwind `onChange` gets the new value as text, not an event.

## Step, minimum and maximum

`step` (1 by default) is how far − / + and ↑ / ↓ move. A step stays within `min` and `max`, and the button at the end of the range turns off. A value typed outside the range is an error.

From an empty field, the first step goes to `step-start-value` if you set one; otherwise to `min` when only a minimum is set, else to 1 or −1, as in Carbon.


HTML:

```html
<ui-number-input label="Rent increase" name="increase" value="3" min="0" max="10" step="0.5" suffix-text="%"></ui-number-input>
<ui-number-input label="Floor" name="floor" min="1" step-start-value="10"></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Rent increase" name="increase" value="3" min={0} max={10} step={0.5} suffixText="%" />
<UiNumberInput label="Floor" name="floor" min={1} stepStartValue={10} />
```

React + Tailwind:

```tsx
<NumberInput label="Rent increase" name="increase" defaultValue={3} min={0} max={10} step={0.5} suffixText="%" />
<NumberInput label="Floor" name="floor" min={1} stepStartValue={10} />
```

## Decimals

A step rounds to the decimals of the value or of `step`, whichever has more, so 0.1 + 0.2 shows `0.3`, not `0.30000000000000004`. With the default `type="number"`, `step` is also the precision the browser accepts: with `step="0.01"`, `12.345` is an error.


HTML:

```html
<ui-number-input label="Interest rate" name="rate" value="2.75" step="0.01" min="0" suffix-text="% a year"></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Interest rate" name="rate" value="2.75" step={0.01} min={0} suffixText="% a year" />
```

React + Tailwind:

```tsx
<NumberInput label="Interest rate" name="rate" defaultValue="2.75" step={0.01} min={0} suffixText="% a year" />
```

## Currency, units and number formats

`prefix-text` and `suffix-text` put text inside the field, before or after the number: `฿`, `kg`, `baht a month`. They stay in view while the user types and aren't part of the value. They have no Carbon counterpart.

For Carbon's formatted field, set `type="text"` with `format-options`, which takes any `Intl.NumberFormat` options: thousands separators, currency, percent, units. The text is free while the user types and is formatted when they leave. The value stays a plain number: `฿1,234.50` submits `1234.5`, and a percent style gives the fraction (`0.5` for 50%). The locale is the page language, or `locale`.


HTML:

```html
<ui-number-input label="Deposit" name="deposit" value="45000" min="0" prefix-text="฿"></ui-number-input>
<ui-number-input label="Monthly rent" name="rent" type="text" value="18500" format-options='{"style":"currency","currency":"THB"}'></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Deposit" name="deposit" value="45000" min={0} prefixText="฿" />
<UiNumberInput label="Monthly rent" name="rent" type="text" value="18500" formatOptions={{ style: 'currency', currency: 'THB' }} />
```

React + Tailwind:

```tsx
<NumberInput label="Deposit" name="deposit" defaultValue={45000} min={0} prefixText="฿" />
<NumberInput label="Monthly rent" name="rent" type="text" defaultValue={18500} formatOptions={{ style: 'currency', currency: 'THB' }} />
```

## Percent and units

With `format-options`, the percent sign or the unit is part of the formatted text, which is Carbon's way. A percent style stores the fraction: 7.5% is `0.075`, so give `step`, `min` and `max` as fractions too. `locale` picks the number format when it must not follow the page.


HTML:

```html
<ui-number-input label="Discount" name="discount" type="text" value="0.075" step="0.005" min="0" max="1" format-options='{"style":"percent","maximumFractionDigits":1}' helper-text="7.5% submits 0.075"></ui-number-input>
<ui-number-input label="Cargo weight" name="weight" type="text" value="1250.5" step="0.5" min="0" format-options='{"style":"unit","unit":"kilogram"}'></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Discount" name="discount" type="text" value="0.075" step={0.005} min={0} max={1} formatOptions={{ style: 'percent', maximumFractionDigits: 1 }} helperText="7.5% submits 0.075" />
<UiNumberInput label="Cargo weight" name="weight" type="text" value="1250.5" step={0.5} min={0} formatOptions={{ style: 'unit', unit: 'kilogram' }} />
```

React + Tailwind:

```tsx
<NumberInput label="Discount" name="discount" type="text" defaultValue={0.075} step={0.005} min={0} max={1} formatOptions={{ style: 'percent', maximumFractionDigits: 1 }} helperText="7.5% submits 0.075" />
<NumberInput label="Cargo weight" name="weight" type="text" defaultValue={1250.5} step={0.5} min={0} formatOptions={{ style: 'unit', unit: 'kilogram' }} />
```

## Empty fields

As in Carbon, an empty number input counts as missing, even without `required`: the form won't submit until there is a number. Set `allow-empty` on a field that may stay empty.


HTML:

```html
<ui-number-input label="Parking spaces (optional)" name="parking" min="0" allow-empty></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Parking spaces (optional)" name="parking" min={0} allowEmpty />
```

React + Tailwind:

```tsx
<NumberInput label="Parking spaces (optional)" name="parking" min={0} allowEmpty />
```

## Steppers and the mouse wheel

- `hide-steppers` removes the − / + buttons; ↑ / ↓ still step.
- `disable-wheel` stops the mouse wheel from changing a focused field, which is easy to do by accident while scrolling a long form.
- `decrement-label` and `increment-label` rename the buttons for screen readers ("Decrement number" and "Increment number" by default, translated).


HTML:

```html
<ui-number-input label="Year built" name="year" value="2019" min="1900" max="2026" hide-steppers disable-wheel></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Year built" name="year" value="2019" min={1900} max={2026} hideSteppers disableWheel />
```

React + Tailwind:

```tsx
<NumberInput label="Year built" name="year" defaultValue={2019} min={1900} max={2026} hideSteppers disableWheel />
```

## Sizes, messages, read-only and disabled

- `size`: `sm` 32px, `md` 40px (the default), `lg` 48px.
- `helper-text`, `warn` + `warn-text` and `invalid` + `invalid-text` work as on the [text input](https://parntengza.github.io/kanok-ui-docs/en/text-input/#helper-text-warnings-and-errors). A value outside `min` / `max` gets the browser's or the built-in message unless you set `invalid-text`. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).
- `readonly` shows and submits the number, and the steppers turn off. `disabled` greys it out; it isn't submitted.


HTML:

```html
<ui-number-input label="Guests" name="guests" value="12" warn warn-text="The room seats 10"></ui-number-input>
<ui-number-input label="Team size" name="team" value="42" min="1" max="30" invalid invalid-text="At most 30 people"></ui-number-input>
<ui-number-input label="Contract length" name="months" value="24" suffix-text="months" readonly></ui-number-input>
<ui-number-input label="Floors" name="floors" value="3" size="sm" disabled></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Guests" name="guests" value="12" warn warnText="The room seats 10" />
<UiNumberInput label="Team size" name="team" value="42" min={1} max={30} invalid invalidText="At most 30 people" />
<UiNumberInput label="Contract length" name="months" value="24" suffixText="months" readonly />
<UiNumberInput label="Floors" name="floors" value="3" size="sm" disabled />
```

React + Tailwind:

```tsx
<NumberInput label="Guests" name="guests" defaultValue={12} warn warnText="The room seats 10" />
<NumberInput label="Team size" name="team" defaultValue={42} min={1} max={30} invalid invalidText="At most 30 people" />
<NumberInput label="Contract length" name="months" defaultValue={24} suffixText="months" readOnly />
<NumberInput label="Floors" name="floors" defaultValue={3} size="sm" disabled />
```

## Fluid

`fluid` (Carbon's `FluidNumberInput`), or a `<ui-fluid-form>` around the field, puts the label inside a 64px box; an error or a warning shows inside the box, and there is no helper text. See [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form).


HTML:

```html
<ui-number-input label="Monthly rent" name="rent" value="18500" min="0" step="500" prefix-text="฿" fluid></ui-number-input>
```

React:

```tsx
<UiNumberInput label="Monthly rent" name="rent" value="18500" min={0} step={500} prefixText="฿" fluid />
```

React + Tailwind:

```tsx
<NumberInput label="Monthly rent" name="rent" defaultValue={18500} min={0} step={500} prefixText="฿" fluid />
```

## Outlined (Kanok design)

In the Kanok design, fields are filled by default: a soft grey fill, no edge. Put `data-field-variant="outlined"` on an element around the field (a `<form>`, or `<html>` for the whole app) for a 1px edge on no fill; focus is still the soft blue halo. The attribute does nothing in the Carbon design, so the example below sits inside `data-design="kanok"`. See [Kanok design](https://parntengza.github.io/kanok-ui-docs/en/kanok/#outlined-fields) for the details.


HTML:

```html
<div data-design="kanok" data-theme="paper" data-field-variant="outlined">
  <ui-number-input label="Number of units" name="units" value="1" min="1" max="20"></ui-number-input>
</div>
```

React:

```tsx
<div data-field-variant="outlined">
  <UiNumberInput label="Number of units" name="units" value="1" min={1} max={20} />
</div>
```

React + Tailwind:

```tsx
<div data-field-variant="outlined">
  <NumberInput label="Number of units" name="units" defaultValue={1} min={1} max={20} />
</div>
```

## Work out a total

Listen to `input` to update a total on every keystroke and every step. `valueAsNumber` gives the number, or `NaN` while the field is empty.


HTML:

```html
<ui-number-input id="number-input-qty" label="Units" name="qty" value="2" min="1" max="50"></ui-number-input>
<ui-number-input id="number-input-price" label="Price per unit" name="price" value="1500" min="0" step="100" prefix-text="฿"></ui-number-input>
<p>Total: <output id="number-input-total"></output></p>
<script type="module">
  const qty = document.getElementById('number-input-qty');
  const price = document.getElementById('number-input-price');
  const baht = new Intl.NumberFormat('en', { style: 'currency', currency: 'THB' });
  const update = () => {
    const total = qty.valueAsNumber * price.valueAsNumber;
    document.getElementById('number-input-total').textContent = Number.isNaN(total) ? '–' : baht.format(total);
  };
  qty.addEventListener('input', update);
  price.addEventListener('input', update);
  update();
</script>
```

React:

```tsx
<UiNumberInput label="Units" name="qty" value={qty} min={1} max={50} onInput={(e) => setQty((e.target as HTMLInputElement).value)} />
<UiNumberInput label="Price per unit" name="price" value={price} min={0} step={100} prefixText="฿" onInput={(e) => setPrice((e.target as HTMLInputElement).value)} />
<p>Total: {baht.format(Number(qty) * Number(price))}</p>
```

React + Tailwind:

```tsx
<NumberInput label="Units" name="qty" value={qty} min={1} max={50} onChange={setQty} />
<NumberInput label="Price per unit" name="price" value={price} min={0} step={100} prefixText="฿" onChange={setPrice} />
<p>Total: {baht.format(Number(qty) * Number(price))}</p>
```

## In a form

With a `name`, the field submits a plain number: the formatted rent `฿18,500.00` below submits `18500`. A value outside `min` / `max`, or an empty field without `allow-empty`, blocks the submit and shows its error. Try 72 months.


HTML:

```html
<form id="number-input-form" method="dialog" style="display: grid; gap: 16px">
  <ui-number-input label="Monthly rent" name="rent" type="text" value="18500" min="0" format-options='{"style":"currency","currency":"THB"}'></ui-number-input>
  <ui-number-input label="Contract length" name="months" value="12" min="1" max="60" suffix-text="months"></ui-number-input>
  <div><ui-button type="submit" size="md">Save terms</ui-button></div>
</form>
<p>Sent: <output id="number-input-form-out"></output></p>
<script type="module">
  const form = document.getElementById('number-input-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('number-input-form-out').textContent = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); saveTerms(new FormData(e.currentTarget)); }}>
  <UiNumberInput label="Monthly rent" name="rent" type="text" value="18500" min={0} formatOptions={{ style: 'currency', currency: 'THB' }} />
  <UiNumberInput label="Contract length" name="months" value="12" min={1} max={60} suffixText="months" />
  <UiButton type="submit" size="md">Save terms</UiButton>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); saveTerms(new FormData(e.currentTarget)); }}>
  <NumberInput label="Monthly rent" name="rent" type="text" defaultValue={18500} min={0} formatOptions={{ style: 'currency', currency: 'THB' }} />
  <NumberInput label="Contract length" name="months" defaultValue={12} min={1} max={60} suffixText="months" />
  <Button type="submit" size="md">Save terms</Button>
</form>
```

## Skeleton

While the data of a form loads, `<ui-number-input-skeleton>` keeps the field's place: a label bar and a field bar at its `size`, or a fluid box with `fluid`. Screen readers skip it, so say "loading" on the form (for example `aria-busy="true"`).


HTML:

```html
<ui-number-input-skeleton></ui-number-input-skeleton>
<ui-number-input-skeleton fluid></ui-number-input-skeleton>
```

React:

```tsx
import { UiNumberInputSkeleton } from '@purpurabog/ui/react';

<UiNumberInputSkeleton />
<UiNumberInputSkeleton fluid />
```

React + Tailwind:

```tsx
import { NumberInputSkeleton } from '@/components/ui/react-tw/number-input';

<NumberInputSkeleton />
<NumberInputSkeleton fluid />
```

## Keyboard

| Key | What it does |
|---|---|
| ↑ / ↓ | One step up or down, within `min` / `max` |
| Enter | Commits the value and submits the form the field sits in |

The − / + buttons are out of the Tab order, as in Carbon: the arrow keys do the same from the field.

## Accessibility

- The label is a real `<label>` for the inner `<input>`; the prefix, the suffix and the message line are its description.
- The − / + buttons have names ("Decrement number", "Increment number") and turn off at the end of the range.
- `inputmode="decimal"` brings up a keyboard with a decimal point on phones.

Unstyled React parts with the same behaviour: [Headless Number input](https://parntengza.github.io/kanok-ui-docs/en/headless-number-input/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-number-input>` · React `UiNumberInput`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Visible label text; the `label` slot replaces it when markup is needed. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the label for screen readers but don't show it. |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |
| `value` | `value` | `string` | `''` | The field text; `valueAsNumber` gives the parsed number (NaN while empty or invalid). |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `placeholder` | `placeholder` | `string` | `''` |  |
| `prefix-text` | `prefixText` | `string` | `''` | Text inside the field before the value, e.g. a currency (`฿`); not part of `value`. Part of the field's description for screen readers. |
| `suffix-text` | `suffixText` | `string` | `''` | Text inside the field after the value, e.g. a unit (`kg`); not part of `value`. Part of the field's description for screen readers. |
| `min` | `min` | `number \| undefined` |  |  |
| `max` | `max` | `number \| undefined` |  |  |
| `step` | `step` | `number` | `1` | Step of the ± buttons and ↑ / ↓; with `type="number"` also the allowed precision. |
| `step-start-value` | `stepStartValue` | `number` | `0` | Where the steppers start from an empty field (Carbon `stepStartValue`); 0 = Carbon's rule: ±1, or `min` when only a minimum is set. |
| `type` | `type` | `NumberInputType` | `'number'` | `number`: a native number field. `text`: a text field formatted for `locale` with `format-options` (Carbon `type="text"`). |
| `locale` | `locale` | `string` | `''` | BCP 47 locale of the formatting with `type="text"`; empty = the page language (`lang` on the element, an ancestor or `<html>`), as `ui-date-picker`. |
| `format-options` | `formatOptions` | `Intl.NumberFormatOptions` | `{}` | `Intl.NumberFormat` options with `type="text"`, e.g. `{"style":"currency","currency":"THB"}` or `{"maximumFractionDigits":2}`. |
| `allow-empty` | `allowEmpty` | `boolean` | `false` | An empty field is valid (Carbon `allowEmpty`); otherwise empty counts as missing. |
| `hide-steppers` | `hideSteppers` | `boolean` | `false` | Remove the − / + buttons (keyboard stepping still works). |
| `disable-wheel` | `disableWheel` | `boolean` | `false` | Ignore mouse-wheel changes while focused (Carbon `disableWheel`). |
| `size` | `size` | `NumberInputSize` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidNumberInput`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `decrement-label` | `decrementLabel` | `string` | `''` | Accessible name of the − button. |
| `increment-label` | `incrementLabel` | `string` | `''` | Accessible name of the + button. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `valueAsNumber` |  | (read-only) The parsed value, NaN while empty or not a number. |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | `onChange` | After a committed change (blur / Enter / stepper; with `type="text"`, on blur when the number changed) |
| `input` | `onInput` | On every keystroke or stepper click |

#### Slots

| Slot | Description |
|---|---|
| `label` | Label content with markup; the `label` attribute is the plain-text fallback |
| `helper-text` | Helper text with markup (links, bold); overrides `helper-text` |
| `warn-text` | Warning text shown while `warn`; overrides `warn-text` |
| `invalid-text` | Error text shown while invalid; overrides `invalid-text` |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The field box |
| `label` | The label |
| `input` | The native input |
| `prefix` | The text before the value |
| `suffix` | The text after the value |
| `controls` | The stepper group |
| `decrement-button` | The − button |
| `increment-button` | The + button |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-border` |  | Border on every side of the box (default none: Carbon's underline only; Kanok: a 1px outline) |
| `--ui-field-disabled-border-color` |  | Border colour when disabled (default: the underline transparent) |
| `--ui-field-readonly-border-color` |  | Border colour when read-only (default: a hairline underline) |
| `--ui-field-radius` |  | Corner radius of the box (default 0; Kanok: 6px) |
| `--ui-field-background` |  | Fill of the box (default `--ui-surface-1`; Kanok: transparent) |
| `--ui-label-font` |  | Font of the label (default `--ui-font-caption`; Kanok: 14px semibold) |
| `--ui-label-color` |  | Colour of the label (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-field-readonly-background` |  | The box's fill when read-only (default transparent; Kanok: a faint ink tint, so read-only reads as set and never weaker than disabled) |
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |


