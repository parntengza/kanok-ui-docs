# Headless Select

`Select` is the behaviour of the styled [Select](https://parntengza.github.io/kanok-ui-docs/en/select/) as one unstyled React part: a native `<select>` with your `<option>` and `<optgroup>` children, so the browser gives the list, the keyboard and the form. On top, it adds a placeholder option, a read-only mode, `aria-invalid`, and `data-*` attributes to style on.

You own the markup: the label, the helper and error text, the arrow icon and every style. There are no sizes and no inline look: the height and layout are your CSS.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Select } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Select } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <label htmlFor="department" className="text-xs text-ink-muted">Department</label>
      <Select.Root
        id="department"
        name="department"
        placeholder="Choose a department"
        className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-ink data-placeholder:text-ink-placeholder"
      >
        <option value="sales">Sales</option>
        <option value="legal">Legal</option>
      </Select.Root>
    </div>
  );
}
```

## Anatomy

```tsx
<Select.Root>
  <option />
  <optgroup>
    <option />
  </optgroup>
</Select.Root>
```

## Label and helper text

The label and the message line are your own elements. Tie them to the select with `htmlFor` and `aria-describedby`.


React (live React example):

```tsx
import { Select } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <label htmlFor="filed-department" className="text-xs text-ink-muted">Department</label>
      <Select.Root
        id="filed-department"
        name="department"
        placeholder="Choose a department"
        aria-describedby="filed-department-help"
        className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-placeholder:text-ink-placeholder"
      >
        <option value="sales">Sales</option>
        <option value="legal">Legal</option>
        <option value="finance">Finance</option>
      </Select.Root>
      <p id="filed-department-help" className="text-xs text-ink-helper">Where the contract is filed</p>
    </div>
  );
}
```

## Placeholder and starting value

`placeholder` adds a first, empty option (`value=""`). It is the uncontrolled choice until the user picks another, and `Root` has `data-placeholder` while it shows. With `required`, the user has to pick something else before the form submits.

Use `value` with `onChange` for a controlled select, or `defaultValue` for an uncontrolled one. `onChange` is React's own.


React (live React example):

```tsx
import { useState } from 'react';
import { Select } from '@purpurabog/ui/headless';

export default function Example() {
  const [currency, setCurrency] = useState('thb');
  return (
    <div className="grid max-w-xs gap-2">
      <label htmlFor="currency" className="text-xs text-ink-muted">Currency</label>
      <Select.Root
        id="currency"
        name="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
      >
        <option value="usd">US dollar</option>
        <option value="thb">Thai baht</option>
      </Select.Root>
      <p className="text-xs text-ink-muted">Value: {currency}</p>
    </div>
  );
}
```

## Groups and disabled options

The children are plain `<option>` and `<optgroup>` elements, so `disabled` on either works as in HTML.


React (live React example):

```tsx
import { Select } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <label htmlFor="office" className="text-xs text-ink-muted">Office</label>
      <Select.Root
        id="office"
        name="office"
        placeholder="Choose an office"
        className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-placeholder:text-ink-placeholder"
      >
        <optgroup label="Bangkok">
          <option value="silom">Silom</option>
          <option value="asok">Asok</option>
        </optgroup>
        <optgroup label="North">
          <option value="chiangmai">Chiang Mai</option>
          <option value="lampang" disabled>Lampang (closed)</option>
        </optgroup>
      </Select.Root>
    </div>
  );
}
```

## Read-only and disabled

`readOnly` keeps the value and sets `aria-readonly`: a press doesn't open the list, and no key changes or opens it, typed letters included. Tab and the ⌘ / Ctrl shortcuts still work. It still takes focus and submits. `disabled` is the native attribute: the select isn't submitted.


React (live React example):

```tsx
import { Select } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-xs gap-4">
      <Select.Root
        aria-label="Department"
        defaultValue="legal"
        readOnly
        className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-readonly:border-border-subtle-1 data-readonly:bg-transparent"
      >
        <option value="sales">Sales</option>
        <option value="legal">Legal</option>
      </Select.Root>
      <Select.Root
        aria-label="Department"
        disabled
        className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled"
      >
        <option value="sales">Sales</option>
        <option value="legal">Legal</option>
      </Select.Root>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Select } from '@purpurabog/ui/headless';

const states = ['invalid', 'readOnly', 'disabled'] as const;

export default function Example() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  return (
    <div className="grid max-w-xs gap-2">
      <label htmlFor="dept" className="text-xs text-ink-muted">Department</label>
      <div className="relative">
        <Select.Root
          id="dept"
          placeholder="Choose"
          invalid={on.invalid}
          readOnly={on.readOnly}
          disabled={on.disabled}
          className="h-10 w-full appearance-none border-b border-border-strong-1 bg-field-1 pl-4 pr-10 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-placeholder:text-ink-placeholder data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-readonly:bg-transparent data-disabled:cursor-not-allowed data-disabled:text-ink-disabled"
        >
          <option value="hr">HR</option>
          <option value="it">IT</option>
        </Select.Root>
        <svg className="pointer-events-none absolute right-4 top-3 size-4 fill-ink" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
        </svg>
      </div>
      <div className="flex gap-4 text-sm text-ink">
        {states.map((state) => (
          <label key={state} className="flex items-center gap-2">
            <input type="checkbox" checked={!!on[state]} onChange={(e) => setOn({ ...on, [state]: e.target.checked })} />
            {state}
          </label>
        ))}
      </div>
    </div>
  );
}
```
```css
select { appearance: none; }
select[data-placeholder] { color: #6f6f6f; }
select[data-invalid] { outline: 2px solid #da1e28; }
select[data-readonly] { background: transparent; }
select[data-disabled] { color: #a8a8a8; }
```

## Parts

### Select.Root

Renders a `<select>`, with a first empty `<option>` when you set `placeholder`, then your children. It takes every `<select>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `placeholder` | `string` | — | The text of a first, empty option (`value=""`), chosen until the user picks another. |
| `readOnly` | `boolean` | `false` | Keeps the value: a press and the changing keys do nothing (`aria-readonly`). |
| `invalid` | `boolean` | — | Sets `aria-invalid`. Left out, there's no `aria-invalid`. |

| Attribute | When |
|---|---|
| `data-placeholder` | The empty placeholder option is the choice |
| `data-readonly` | `readOnly` is set |
| `data-disabled` | `disabled` is set |
| `data-invalid` | `invalid` is set |

## Keyboard and accessibility

- The control is a native `<select>`: the browser's own keys open and change it, and phones show the system picker.
- You add the `<label>` (or `aria-label`), the `aria-describedby` to the helper or error text, and the error text itself.
- Give your arrow icon `aria-hidden="true"` and `pointer-events: none`, so a click on it still reaches the select.
- Options can't hold markup or a second line. If you need that, use a [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/).
