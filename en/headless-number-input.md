# Headless Number input

`NumberInput` is the behaviour of the styled [Number input](https://parntengza.github.io/kanok-ui-docs/en/number-input/) as unstyled React parts: an `<input>` with − and + buttons. ↑ / ↓ step from the field. A step stays within `min` and `max` and is rounded, and each button turns off at its end of the range. With `type="text"`, the field shows the number in a locale's format while the value stays a plain number. An uncontrolled field goes back to `defaultValue` when its form resets.

You own the markup: the label, the button content and names, the helper and error text, a prefix or suffix, and every style. The parts set `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { NumberInput } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { NumberInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [units, setUnits] = useState('1');
  return (
    <div className="grid max-w-xs gap-2">
      <NumberInput.Root name="units" min={1} max={20} value={units} onValueChange={setUnits}>
        <label htmlFor="units" className="text-xs text-ink-muted">Number of units</label>
        <div className="flex border-b border-border-strong-1 bg-field-1">
          <NumberInput.Input
            id="units"
            className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus [&::-webkit-inner-spin-button]:appearance-none"
          />
          <NumberInput.Decrement aria-label="Decrease" className="size-10 text-ink hover:bg-field-hover-1 data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">−</NumberInput.Decrement>
          <NumberInput.Increment aria-label="Increase" className="size-10 text-ink hover:bg-field-hover-1 data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">+</NumberInput.Increment>
        </div>
      </NumberInput.Root>
      <p className="text-xs text-ink-muted">Value: {JSON.stringify(units)}</p>
    </div>
  );
}
```

- The value is text, so the field can be empty: `"12"`, `"0.5"`, or `""`.
- `onValueChange` gets the new value as text, not an event. It runs after typing, a step, or a blur that rounded the value.
- `name`, `min`, `max`, `step`, `disabled` and `readOnly` go on `Root`, not on `Input`.

## Anatomy

```tsx
<NumberInput.Root>
  <NumberInput.Input />
  <NumberInput.Decrement />
  <NumberInput.Increment />
  <NumberInput.HiddenInput />
</NumberInput.Root>
```

## Step, minimum and maximum

`step` (1 by default) is how far − / + and ↑ / ↓ move. A step stays within `min` and `max`, and the button at that end of the range turns off.

From an empty field, the first step goes to `stepStartValue` if you set one; otherwise to `min` when only a minimum is set, else to 1 or −1, as in Carbon.


React (live React example):

```tsx
import { useState } from 'react';
import { NumberInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [floor, setFloor] = useState('');
  return (
    <div className="grid max-w-xs gap-2">
      <NumberInput.Root name="floor" min={1} stepStartValue={10} onValueChange={setFloor}>
        <label htmlFor="floor" className="text-xs text-ink-muted">Floor</label>
        <div className="flex border-b border-border-strong-1 bg-field-1">
          <NumberInput.Input
            id="floor"
            className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus [&::-webkit-inner-spin-button]:appearance-none"
          />
          <NumberInput.Decrement aria-label="Decrease" className="size-10 text-ink hover:bg-field-hover-1 data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">−</NumberInput.Decrement>
          <NumberInput.Increment aria-label="Increase" className="size-10 text-ink hover:bg-field-hover-1 data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">+</NumberInput.Increment>
        </div>
      </NumberInput.Root>
      <p className="text-xs text-ink-muted">Value: {JSON.stringify(floor)}</p>
    </div>
  );
}
```

## Decimals

A step rounds to the decimals of the value or of `step`, whichever has more, so 0.1 + 0.2 gives `0.3`. With the default `type="number"`, `step` is also the precision the browser accepts.


React (live React example):

```tsx
import { useState } from 'react';
import { NumberInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [rate, setRate] = useState('2.75');
  return (
    <div className="grid max-w-xs gap-2">
      <NumberInput.Root name="rate" defaultValue="2.75" step={0.01} min={0} onValueChange={setRate}>
        <label htmlFor="rate" className="text-xs text-ink-muted">Interest rate (% a year)</label>
        <NumberInput.Input
          id="rate"
          aria-describedby="rate-help"
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
        <p id="rate-help" className="text-xs text-ink-helper">↑ / ↓ step by 0.01</p>
      </NumberInput.Root>
      <p className="text-xs text-ink-muted">Value: {JSON.stringify(rate)}</p>
    </div>
  );
}
```

## Currency, units and number formats

`type="text"` with `formatOptions` formats the number with `Intl.NumberFormat`: thousands separators, currency, percent, units. The text is free while the user types and is formatted on blur; text that isn't a number stays, marked invalid, for the user to correct. The value stays a plain number: `฿1,234.50` is `1234.5`, and a percent style gives the fraction (`0.5` for 50%).


React (live React example):

```tsx
import { useState } from 'react';
import { NumberInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid max-w-xs gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      {/* type="text": HiddenInput submits the plain number; without locale it follows <html lang> */}
      <NumberInput.Root name="rent" type="text" locale="th-TH" defaultValue={18500} formatOptions={{ style: 'currency', currency: 'THB' }}>
        <label htmlFor="rent" className="text-xs text-ink-muted">Monthly rent</label>
        <NumberInput.Input
          id="rent"
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
        <NumberInput.HiddenInput />
      </NumberInput.Root>
      <button
        type="submit"
        className="h-10 justify-self-start bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        Submit
      </button>
      <p className="text-xs text-ink-muted">Sent: {sent ? JSON.stringify(sent) : 'nothing yet'}</p>
    </form>
  );
}
```

- Without `locale`, `type="text"` follows the page language (`<html lang>`, else the browser's).
- An invalid `locale` or `formatOptions` falls back to plain English and logs a console warning.
- A prefix or suffix (`฿`, `kg`) is your own markup next to the input.

## Empty fields and errors

There are no rules of their own for an empty field: check the value yourself. The browser's checks on the input (`required`, and `min`, `max` and `step` with `type="number"`) still run on submit, but its error bubble never shows. Instead the field gets `data-touched`, and the first invalid field of the form gets focus, so you can show your own message.

## Steppers and the mouse wheel

Leave out `Decrement` and `Increment` for a field without buttons; ↑ / ↓ still step. `disableWheel` on `Input` stops the mouse wheel from changing a focused field.


React (live React example):

```tsx
import { useState } from 'react';
import { NumberInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [year, setYear] = useState('2019');
  return (
    <div className="grid max-w-xs gap-2">
      {/* leave out Decrement / Increment; disableWheel goes on the Input */}
      <NumberInput.Root name="year" defaultValue={2019} min={1900} max={2026} onValueChange={setYear}>
        <label htmlFor="year" className="text-xs text-ink-muted">Year built</label>
        <NumberInput.Input
          id="year"
          disableWheel
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
      </NumberInput.Root>
      <p className="text-xs text-ink-muted">Value: {JSON.stringify(year)}</p>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { NumberInput } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <form className="grid max-w-xs gap-2" onSubmit={(e) => e.preventDefault()}>
      <NumberInput.Root min={0} max={10}>
        <label htmlFor="qty" className="text-xs text-ink-muted">Quantity</label>
        <div className="flex border-b border-border-strong-1 bg-field-1">
          <NumberInput.Input
            id="qty"
            required
            className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink [appearance:textfield] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-touched:invalid:outline-2 data-touched:invalid:-outline-offset-2 data-touched:invalid:outline-error [&::-webkit-inner-spin-button]:appearance-none"
          />
          <NumberInput.Decrement aria-label="Decrease" className="w-10 text-ink hover:bg-field-hover-1 data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">−</NumberInput.Decrement>
          <NumberInput.Increment aria-label="Increase" className="w-10 text-ink hover:bg-field-hover-1 data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">+</NumberInput.Increment>
        </div>
      </NumberInput.Root>
      <button
        type="submit"
        className="h-10 justify-self-start bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        Submit
      </button>
    </form>
  );
}
```
```css
input[data-touched]:invalid { outline: 2px solid #da1e28; }
button[data-disabled] { color: #a8a8a8; cursor: not-allowed; }
```

## Parts

### NumberInput.Root

Renders no element; it holds the value and the limits.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string \| number` | — | The value as plain number text (`''` is empty). Controlled. |
| `defaultValue` | `string \| number` | — | The starting value (uncontrolled). |
| `onValueChange` | `(value: string) => void` | — | The new value after typing, a step, or a blur that rounded it. |
| `min` | `number` | — | Lowest value a step reaches. |
| `max` | `number` | — | Highest value a step reaches. |
| `step` | `number` | `1` | Step of the buttons and ↑ / ↓; with `type="number"` also the precision. |
| `stepStartValue` | `number` | `0` | Where a step from an empty field starts. `0` means ±1, or `min` when only a minimum is set. |
| `type` | `'number' \| 'text'` | `'number'` | `text` formats the number for `locale`. |
| `locale` | `string` | `<html lang>`, else the browser's | BCP 47 locale of `type="text"`. |
| `formatOptions` | `Intl.NumberFormatOptions` | — | Format of `type="text"`. |
| `disabled` | `boolean` | `false` | Turns off the field and the buttons. |
| `readOnly` | `boolean` | `false` | Keeps the value; the buttons and ↑ / ↓ do nothing. |
| `name` | `string` | — | Submitted name: on `Input` with `type="number"`, on `HiddenInput` with `type="text"`. |

### NumberInput.Input

Renders an `<input>` with `inputMode="decimal"`: a native number box with `type="number"`, a text box with `type="text"`. It takes every `<input>` prop except `type`, `value`, `defaultValue`, `min`, `max`, `step` and `name`, which come from `Root`. Your `onBlur` runs after the value settles. ↑ / ↓ don't step when your `onKeyDown` calls `preventDefault()`.

| Prop | Type | Default | |
|---|---|---|---|
| `disableWheel` | `boolean` | `false` | Ignore the mouse wheel while focused. |

| Attribute | When |
|---|---|
| `data-disabled` | `Root` is disabled |
| `data-readonly` | `Root` is read-only |
| `data-touched` | The field was left or stepped, or a submit found it invalid |

### NumberInput.Decrement and NumberInput.Increment

Each renders a `<button type="button">` that steps once down or up. They add no props. A button is off at its end of the range, while the field is disabled or read-only, and when you pass `disabled`. They are out of the Tab order unless you pass `tabIndex`.

| Attribute | When |
|---|---|
| `data-disabled` | The button is off |

### NumberInput.HiddenInput

Renders an `<input type="hidden">` with `Root`'s `name` and the plain value, only with `type="text"` and a `name`; otherwise nothing. It is disabled (not submitted) while `Root` is disabled.

### NumberInput.useNumberInputContext()

Returns the state of the enclosing `Root`, such as `value`, `number` (`NaN` while empty), `isEmpty`, `badText` (`type="text"` text that isn't a number), `touched`, `atMin`, `atMax` and `stepBy(1 | -1)`.

## Keyboard and accessibility

| Key | What it does |
|---|---|
| ↑ / ↓ | One step up or down, within `min` / `max` |
| Enter | Submits the form the field sits in, as a native input does |

- The − / + buttons are out of the Tab order, as in Carbon: the arrow keys do the same from the field. They are real buttons with `disabled` at the end of the range.
- You add the `<label>`, names for the buttons (`aria-label`), the `aria-describedby` to the helper or error text, and `aria-invalid` with your own error message.
