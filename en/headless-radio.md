# Headless Radio button

`RadioGroup.Root` is a `role="radiogroup"` around native `<input type="radio">` items that share one `name`, so the browser gives the single Tab stop, the arrow keys and form submission. The parts add the group's value, a read-only state, `onValueChange`, and `data-*` attributes for you to style on.

You own each item's `<label>`, the circle you draw, the group's label, any helper or error message, the layout and every style. For the styled version, see [Radio button](https://parntengza.github.io/kanok-ui-docs/en/radio/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { RadioGroup } from '@purpurabog/ui/headless';
```

## Use it

Hide each input over a circle you draw beside it, and wrap both in a `<label>`:


React (live React example):

```tsx
import { RadioGroup } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <RadioGroup.Root aria-label="Payment" name="payment" className="grid gap-2">
      <label className="relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink">
        <RadioGroup.Item value="transfer" className="peer sr-only" />
        <span aria-hidden="true" className="grid size-[18px] shrink-0 place-items-center rounded-full border border-ink after:size-2 after:rounded-full after:bg-ink after:opacity-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:after:opacity-100" />
        Bank transfer
      </label>
      <label className="relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink">
        <RadioGroup.Item value="card" className="peer sr-only" />
        <span aria-hidden="true" className="grid size-[18px] shrink-0 place-items-center rounded-full border border-ink after:size-2 after:rounded-full after:bg-ink after:opacity-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:after:opacity-100" />
        Credit card
      </label>
    </RadioGroup.Root>
  );
}
```

Give the group a `name` when it is in a form: without one, `Root` makes up a name so the items still form one group.

## Anatomy

```tsx
<RadioGroup.Root>
  <label>
    <RadioGroup.Item value="…" />
    {/* your circle and text */}
  </label>
</RadioGroup.Root>
```

## Value

Hold the value yourself with `value` and `onValueChange`, or give a starting `defaultValue`. With neither, nothing is checked; `''` also checks none. The form submits the checked item's `value` under `name`.


React (live React example):

```tsx
import { useState } from 'react';
import { RadioGroup } from '@purpurabog/ui/headless';

const methods = [
  { value: 'transfer', label: 'Bank transfer' },
  { value: 'card', label: 'Credit card' },
  { value: 'cash', label: 'Cash at the branch' },
];

// the circle drawn after the hidden input (a peer of it), with a dot while checked
function Circle() {
  return <span aria-hidden="true" className="grid size-[18px] shrink-0 place-items-center rounded-full border border-ink after:size-2 after:rounded-full after:bg-ink after:opacity-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:after:opacity-100" />;
}

export default function Example() {
  const [payment, setPayment] = useState('card');
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid justify-items-start gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <span id="payment-value-label" className="text-xs text-ink-muted">Payment</span>
      <RadioGroup.Root aria-labelledby="payment-value-label" name="payment" value={payment} onValueChange={setPayment} className="grid gap-2">
        {methods.map((m) => (
          <label key={m.value} className="relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink">
            <RadioGroup.Item value={m.value} className="peer sr-only" />
            <Circle />
            {m.label}
          </label>
        ))}
      </RadioGroup.Root>
      <p className="text-xs text-ink-muted">Value: {payment || '(none)'}</p>
      <div className="flex gap-px">
        <button type="submit" className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Submit</button>
        <button type="button" onClick={() => setPayment('')} className="h-10 px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Clear</button>
      </div>
      {sent ? <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p> : null}
    </form>
  );
}
```

## Orientation and label position

`orientation` only sets `data-orientation`: the browser's arrow keys go both ways, and the layout is your CSS. For the text before the circle, put it before the `Item` in its `<label>`.


React (live React example):

```tsx
import { RadioGroup } from '@purpurabog/ui/headless';

const lengths = [
  { value: '6', label: '6 months' },
  { value: '12', label: '1 year' },
  { value: '36', label: '3 years' },
];

function Circle() {
  return <span aria-hidden="true" className="grid size-[18px] shrink-0 place-items-center rounded-full border border-ink after:size-2 after:rounded-full after:bg-ink after:opacity-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:after:opacity-100" />;
}

export default function Example() {
  return (
    <div className="grid gap-6">
      <RadioGroup.Root aria-label="Contract length" name="length" orientation="horizontal" defaultValue="12" className="flex flex-wrap gap-6">
        {lengths.map((l) => (
          <label key={l.value} className="relative flex cursor-pointer items-center gap-2 text-sm text-ink">
            <RadioGroup.Item value={l.value} className="peer sr-only" />
            <Circle />
            {l.label}
          </label>
        ))}
      </RadioGroup.Root>
      {/* the text before the circle: put it before the Item */}
      <RadioGroup.Root aria-label="Contract length, text first" name="length-text-first" orientation="horizontal" defaultValue="12" className="flex flex-wrap gap-6">
        {lengths.map((l) => (
          <label key={l.value} className="relative flex cursor-pointer items-center gap-2 text-sm text-ink">
            {l.label}
            <RadioGroup.Item value={l.value} className="peer sr-only" />
            <Circle />
          </label>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
```

## Read-only and disabled

- `disabled` on an `Item` disables that one; on `Root`, it disables every item, so none is submitted.
- `readOnly` keeps the value and still submits it. Clicks and arrow keys change nothing, but the arrows still move focus so people can read the options (as Carbon React). The group gets `aria-readonly`.


React (live React example):

```tsx
import { RadioGroup } from '@purpurabog/ui/headless';

// read-only: a grey ring; disabled: everything greyed
function Circle() {
  return <span aria-hidden="true" className="grid size-[18px] shrink-0 place-items-center rounded-full border border-ink after:size-2 after:rounded-full after:bg-ink after:opacity-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:after:opacity-100 peer-data-readonly:border-ink-subtle peer-data-disabled:border-ink-disabled peer-data-disabled:after:bg-ink-disabled" />;
}

const row = 'relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink has-data-readonly:cursor-default has-data-disabled:cursor-not-allowed has-data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <RadioGroup.Root aria-label="Payment" defaultValue="transfer" readOnly className="grid gap-2">
      <label className={row}>
        <RadioGroup.Item value="transfer" className="peer sr-only" />
        <Circle />
        Bank transfer
      </label>
      <label className={row}>
        <RadioGroup.Item value="cash" disabled className="peer sr-only" />
        <Circle />
        Cash at the branch
      </label>
    </RadioGroup.Root>
  );
}
```

`required` only sets `aria-required` on the group, and `invalid` sets `aria-invalid` on it and `data-invalid` on it and its items. Check the value and show the error yourself ([Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/)). Give the message an id and put it in the group's `aria-describedby`: every item gets the same `aria-describedby`, so a screen reader hears it on the item it lands on.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { RadioGroup } from '@purpurabog/ui/headless';

const methods = [
  { value: 'transfer', label: 'Bank transfer' },
  { value: 'card', label: 'Credit card' },
  { value: 'cash', label: 'Cash (closed today)', disabled: true },
];

export default function Example() {
  const [payment, setPayment] = useState('');
  const invalid = payment === '';
  return (
    <div className="grid gap-2">
      <span id="payment-style-label" className="text-xs text-ink-muted">Payment</span>
      <RadioGroup.Root
        aria-labelledby="payment-style-label"
        aria-describedby={invalid ? 'payment-style-error' : undefined}
        value={payment}
        onValueChange={setPayment}
        invalid={invalid}
        required
        orientation="horizontal"
        className="flex flex-col gap-2 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:gap-6"
      >
        {methods.map((m) => (
          <label key={m.value} className="relative flex cursor-pointer items-center gap-2 text-sm text-ink has-data-disabled:cursor-not-allowed has-data-disabled:text-ink-disabled">
            <RadioGroup.Item value={m.value} disabled={m.disabled} className="peer sr-only" />
            <span
              aria-hidden="true"
              className="grid size-[18px] shrink-0 place-items-center rounded-full border border-ink after:size-2 after:rounded-full after:bg-ink after:opacity-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:after:opacity-100 peer-data-invalid:border-error peer-data-disabled:border-ink-disabled"
            />
            {m.label}
          </label>
        ))}
      </RadioGroup.Root>
      {invalid ? <p id="payment-style-error" className="text-xs text-error-text">Choose how to pay</p> : null}
    </div>
  );
}
```
```css
/* className="circle" on the span you draw after each input */
[role="radiogroup"][data-orientation="horizontal"] { display: flex; gap: 24px; }
input[data-checked] + .circle { border-width: 4px; }
input[data-invalid] + .circle { border-color: #da1e28; }
input[data-readonly] + .circle { border-color: #c6c6c6; }
input:focus-visible + .circle { outline: 2px solid #0f62fe; }
```

## Parts

### RadioGroup.Root

A `<div role="radiogroup">`. It takes every div prop except `defaultValue` and `role`.

| Prop | Type | Default | |
|---|---|---|---|
| `name` | `string` | generated | The submitted name, shared by every item |
| `value` | `string` | | The checked item's value (controlled); `''` checks none |
| `defaultValue` | `string` | `''` | The starting value (uncontrolled) |
| `onValueChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | | After the user checks another item |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Only sets `data-orientation` |
| `disabled` | `boolean` | `false` | Disables every item (`aria-disabled` on the group) |
| `readOnly` | `boolean` | `false` | Keeps the value: clicks and arrow keys change nothing (`aria-readonly`) |
| `required` | `boolean` | | `aria-required` on the group |
| `invalid` | `boolean` | | `aria-invalid` on the group; `data-invalid` on it and its items |

| Attribute | When |
|---|---|
| `data-orientation` | Always: `vertical` or `horizontal` |
| `data-disabled` | Disabled |
| `data-readonly` | Read-only |
| `data-invalid` | `invalid` is set |

`RadioGroup.useRadioGroupContext()` returns the group's state (`name`, `value`, `disabled`, `readOnly`, `invalid`, `select` …), for building other kinds of item.

### RadioGroup.Item

An `<input type="radio">`, checked when its `value` is the group's. It takes every input prop except `type`, `name`, `checked` and `defaultChecked`. Its `aria-describedby` is the group's unless you pass your own.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | This item's value (required) |
| `disabled` | `boolean` | | This item alone; a disabled group disables every item |

| Attribute | When |
|---|---|
| `data-checked` | Checked |
| `data-disabled` | This item or the group is disabled |
| `data-readonly` | The group is read-only |
| `data-invalid` | The group is invalid |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | Enters the group on the checked item (else the first), and leaves it on the next Tab |
| ↓ / → | Moves to the next item and checks it; wraps from the last to the first |
| ↑ / ← | Moves to the previous item and checks it; wraps from the first to the last |
| Space | Checks the focused item |

The browser gives the radio role, the checked state, the single Tab stop and the arrow keys; disabled items are skipped. The parts add `role="radiogroup"`, `aria-required`, `aria-readonly`, `aria-disabled` and `aria-invalid` on the group.

You add:

- A name for the group: `aria-label`, or `aria-labelledby` pointing at your visible label.
- A `<label>` for each item.
- Helper and error text, linked with `aria-describedby` on `Root`.
- A visible focus style on the circle you draw (the input itself is hidden).
