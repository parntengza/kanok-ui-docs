# Headless Structured list

`StructuredList` is the row selection of the styled [Structured list](https://parntengza.github.io/kanok-ui-docs/en/structured-list/) as unstyled React parts. The rest of a structured list is plain table markup (`thead`, `tbody`, `th`, `td`), so the parts are only what selection needs: the `<table>` (`Root`), a selectable row (`Row` with a `value`: a click anywhere on it selects it) and its `Radio` (the keyboard: one Tab stop, the arrow keys move and select).

You own the markup: the cells, the header row, the radio icon and every style. State shows as `data-*` attributes to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { StructuredList } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { StructuredList } from '@purpurabog/ui/headless';

const plans = [
  { value: 'basic', name: 'Basic', price: 'Free' },
  { value: 'team', name: 'Team', price: '฿390 / user' },
  { value: 'enterprise', name: 'Enterprise', price: 'Contact us' },
];

export default function Example() {
  return (
    <StructuredList.Root aria-label="Choose a plan" values={plans.map((p) => p.value)} defaultValue="team" className="w-full max-w-md border-collapse text-sm text-ink-muted">
      <thead>
        <tr className="text-start text-ink">
          <th className="w-10">
            <span className="sr-only">Select</span>
          </th>
          <th className="px-2 py-2 text-start font-semibold">Plan</th>
          <th className="px-2 py-2 text-start font-semibold">Price</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (
          <StructuredList.Row key={plan.value} value={plan.value} className="cursor-pointer border-t border-hairline hover:bg-ghost-hover data-selected:bg-surface-2 data-selected:text-ink focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
            <td className="py-3 ps-4">
              <StructuredList.Radio aria-label={plan.name} className="accent-ink" />
            </td>
            <td className="px-2 py-3">{plan.name}</td>
            <td className="px-2 py-3">{plan.price}</td>
          </StructuredList.Row>
        ))}
      </tbody>
    </StructuredList.Root>
  );
}
```

## Anatomy

```tsx
<StructuredList.Root>
  <thead>
    <tr><th /></tr>
  </thead>
  <tbody>
    <StructuredList.Row value="…">
      <td><StructuredList.Radio /></td>
      <td />
    </StructuredList.Row>
  </tbody>
</StructuredList.Root>
```

## A list without selection

Without selection you need no parts at all: write the table. `Root` and `Row` without a `value` render a plain `<table>` and `<tr>`, which helps when one list switches selection on and off.


React (live React example):

```tsx
import { StructuredList } from '@purpurabog/ui/headless';

const terms = [
  ['Counterparty', 'Acme Co., Ltd.'],
  ['Signed on', '30 September 2026'],
  ['Duration', '12 months'],
];

export default function Example() {
  return (
    <StructuredList.Root aria-label="Contract summary" className="w-full max-w-md border-collapse text-sm">
      <tbody>
        {terms.map(([term, value]) => (
          <StructuredList.Row key={term} className="border-t border-hairline last:border-b">
            <th scope="row" className="whitespace-nowrap px-4 py-3 text-start font-normal text-ink-muted">{term}</th>
            <td className="px-2 py-3 text-ink">{value}</td>
          </StructuredList.Row>
        ))}
      </tbody>
    </StructuredList.Root>
  );
}
```

## Controlled value

Pass `value` and `onValueChange` to hold the choice yourself, or `defaultValue` to let `Root` keep it. `values` lists the selectable rows in order: it sets the radios' "1 of 3" and which row takes Tab when none is selected. A `value` not in `values` selects nothing.


React (live React example):

```tsx
import { useState } from 'react';
import { StructuredList } from '@purpurabog/ui/headless';

const methods = [
  { value: 'email', name: 'Signed PDF by email', arrives: 'Today' },
  { value: 'post', name: 'Registered post', arrives: '3–5 days' },
  { value: 'courier', name: 'Courier', arrives: 'Next day' },
];

export default function Example() {
  const [method, setMethod] = useState('');
  return (
    <div className="grid max-w-md gap-4">
      <StructuredList.Root aria-label="Delivery method" values={methods.map((m) => m.value)} value={method} onValueChange={setMethod} className="w-full border-collapse text-sm text-ink-muted">
        <tbody>
          {methods.map((m) => (
            <StructuredList.Row key={m.value} value={m.value} className="cursor-pointer border-t border-hairline last:border-b hover:bg-ghost-hover data-selected:bg-surface-2 data-selected:text-ink focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
              <td className="py-2 ps-4">
                <StructuredList.Radio aria-label={m.name} className="accent-ink" />
              </td>
              <td className="px-2 py-2">{m.name}</td>
              <td className="px-2 py-2">{m.arrives}</td>
            </StructuredList.Row>
          ))}
        </tbody>
      </StructuredList.Root>
      <div className="flex gap-2">
        <button type="button" onClick={() => setMethod('email')} className="h-8 border border-interactive px-3 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-focus">
          Use the recommended method
        </button>
        <button type="button" onClick={() => setMethod('')} className="h-8 px-3 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:outline-focus">
          Clear
        </button>
      </div>
      <p className="text-xs text-ink-muted">Value: {method || '(none)'}</p>
    </div>
  );
}
```

`onValueChange` runs only when the user picks a row, not when you change `value`.

## Style it

Hide the native radio and draw Carbon's radio icon from the row's `data-selected`. A `group` class on the row lets the icon read it.


React (live React example):

```tsx
import { StructuredList } from '@purpurabog/ui/headless';

const plans = [
  { value: 'basic', name: 'Basic', users: 'Up to 5' },
  { value: 'team', name: 'Team', users: 'Up to 50' },
  { value: 'enterprise', name: 'Enterprise', users: 'Unlimited' },
];

export default function Example() {
  return (
    <StructuredList.Root aria-label="Plans" values={plans.map((p) => p.value)} defaultValue="basic" className="w-full max-w-md border-collapse text-sm text-ink-muted">
      <thead>
        <tr>
          <th className="w-8 py-2 ps-4">
            <span className="sr-only">Select</span>
          </th>
          <th className="px-4 py-2 text-start font-semibold text-ink">Plan</th>
          <th className="px-4 py-2 text-start font-semibold text-ink">Users</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (
          <StructuredList.Row key={plan.value} value={plan.value} className="group cursor-pointer border-t border-hairline last:border-b hover:bg-ghost-hover hover:text-ink data-selected:bg-surface-2 data-selected:text-ink focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
            <td className="py-3 ps-4 align-top">
              <StructuredList.Radio aria-label={plan.name} className="sr-only" />
              <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-0.5 size-4 fill-icon-primary">
                <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" />
                <circle cx="8" cy="8" r="3" className="radio-dot hidden group-data-selected:block" />
              </svg>
            </td>
            <td className="px-4 py-3">{plan.name}</td>
            <td className="px-4 py-3">{plan.users}</td>
          </StructuredList.Row>
        ))}
      </tbody>
    </StructuredList.Root>
  );
}
```
```css
tr[data-selectable] { cursor: pointer; }
tr[data-selectable]:hover { background: #e8e8e8; }
tr[data-selected] { background: #e0e0e0; color: #161616; }
tr[data-selectable]:focus-within { outline: 2px solid #0f62fe; outline-offset: -2px; }
tr .radio-dot { display: none; }
tr[data-selected] .radio-dot { display: block; }
```

## Parts

### StructuredList.Root

Renders a `<table>`. It takes every `<table>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `values` | `readonly string[]` | `[]` | The selectable rows' values, in order: the radio group's size and its first Tab stop |
| `value` | `string` | | The selected row's value (controlled); one not in `values` selects none |
| `defaultValue` | `string` | `''` | The starting value (uncontrolled) |
| `onValueChange` | `(value: string) => void` | | After the user selected another row |

`StructuredList.useStructuredListContext()` returns `value`, `focusValue` (the row whose radio takes Tab), `values` and `select(value)` to any component inside `Root`.

### StructuredList.Row

Renders a `<tr>`. With a `value` it is selectable: a click anywhere on it selects it, and it gets `aria-selected`. Without one it is a plain row (for the header or a read-only list).

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | Makes the row selectable and identifies it in `Root`'s `value` |

| Attribute | When |
|---|---|
| `data-selectable` | The row has a `value` |
| `data-selected` | The row is the selected one |

`StructuredList.useRowContext()` returns the row's `value` and `selected` to any component inside a selectable `Row`.

### StructuredList.Radio

Renders an `<input type="radio">` checked when its row is selected. It goes inside a selectable `Row`. It takes every input prop except `type`, `value`, `checked` and `defaultChecked`; name it with `aria-label`.

| Attribute | When |
|---|---|
| `data-selected` | Its row is selected |

## Keyboard and accessibility

- The radios form one Tab stop: the selected row's radio, else the first row's.
- Up, Down, Left and Right move focus and the selection to the previous or next row, wrapping at the ends. Space selects the focused row.
- Each radio has `aria-posinset` and `aria-setsize` from `values`, so screen readers say "2 of 3".
- You add the table's name (`aria-label` on `Root`), a name for each radio (the row's main text) and a screen-reader name for the radio column's header cell.
- Keep the radio in the accessibility tree when you hide it: use `sr-only`, not `display: none`.
