# Headless Dropdown

The `Dropdown` parts give you the behaviour of the styled [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/) with no styles: a button with `role="combobox"` that opens a listbox in the top layer, the keyboard (arrows, Home / End, Page Up / Page Down, typing to jump), the highlight through `aria-activedescendant`, closing on a click outside, and a hidden input that submits the value.

You own the markup, the label text, any helper or error message, the "Loading…" row and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Dropdown } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
];

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={types} name="type">
        <Dropdown.Label className="text-xs text-ink-muted">Contract type</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {types.map((t) => (
            <Dropdown.Option key={t.value} value={t.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {t.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
    </div>
  );
}
```

`items` on `Root` is the data: the keys move through it and typing searches its labels. The `Option`s inside `Popup` are what people see and click. Render one `Option` for each option in `items`, with the same `value`.

## Anatomy

```tsx
<Dropdown.Root items={items}>
  <Dropdown.Label />
  <Dropdown.Trigger>
    <Dropdown.Value />
  </Dropdown.Trigger>
  <Dropdown.Popup>
    <Dropdown.Option value="…" />
    <Dropdown.Group>
      <Dropdown.GroupLabel />
      <Dropdown.GroupOptions>
        <Dropdown.Option value="…" />
      </Dropdown.GroupOptions>
    </Dropdown.Group>
  </Dropdown.Popup>
</Dropdown.Root>
```

## A second line

Put the second line inside the `Option`. Typing to jump only searches `label`, never `description`.


React (live React example):

```tsx
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale', description: 'The buyer owns the property' },
  { value: 'lease', label: 'Lease', description: 'Monthly rent, fixed term' },
  { value: 'mortgage', label: 'Mortgage', description: 'Property as security for a loan' },
];

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={types} name="type">
        <Dropdown.Label className="text-xs text-ink-muted">Contract type</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {types.map((t) => (
            <Dropdown.Option key={t.value} value={t.value} className="flex cursor-pointer flex-col px-4 py-2 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {t.label}
              <small className="text-xs text-ink-helper">{t.description}</small>
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
    </div>
  );
}
```

## Groups and disabled options

`items` takes options `{ value, label, description?, disabled? }` and groups `{ label, options, disabled? }`. A disabled option is shown but skipped by the keys and can't be picked; a disabled group disables its options. `isGroup` tells a group from an option, and `flattenOptions` returns every option in order.


React (live React example):

```tsx
import { Dropdown, isGroup, type ListItem } from '@purpurabog/ui/headless';

const branches: ListItem[] = [
  { label: 'Bangkok', options: [
    { value: 'silom', label: 'Silom', description: 'Mon–Fri, 9:00–17:00' },
    { value: 'asok', label: 'Asok', description: 'Every day, 10:00–20:00' },
  ] },
  { label: 'North', options: [
    { value: 'chiangmai', label: 'Chiang Mai' },
    { value: 'lampang', label: 'Lampang (closed)', disabled: true },
  ] },
];

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={branches} name="branch">
        <Dropdown.Label className="text-xs text-ink-muted">Branch</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a branch" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
          {branches.filter(isGroup).map((group) => (
            <Dropdown.Group key={group.label}>
              <Dropdown.GroupLabel className="px-4 pt-3 pb-1 text-xs font-semibold text-ink-muted">{group.label}</Dropdown.GroupLabel>
              <Dropdown.GroupOptions>
                {group.options.map((o) => (
                  <Dropdown.Option key={o.value} value={o.value} className="flex cursor-pointer flex-col px-4 py-2 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled">
                    {o.label}
                    <small className="text-xs text-ink-helper">{o.description}</small>
                  </Dropdown.Option>
                ))}
              </Dropdown.GroupOptions>
            </Dropdown.Group>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
    </div>
  );
}
```

## Value

Hold the value yourself with `value` and `onValueChange`, or give a starting `defaultValue` and let `Root` keep it. `onValueChange` fires only when the user picks a different option.


React (live React example):

```tsx
import { useState } from 'react';
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
  { value: 'mortgage', label: 'Mortgage' },
];

export default function Example() {
  const [type, setType] = useState('lease');
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid max-w-xs gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <Dropdown.Root items={types} name="type" value={type} onValueChange={setType}>
        <Dropdown.Label className="text-xs text-ink-muted">Contract type</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {types.map((t) => (
            <Dropdown.Option key={t.value} value={t.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {t.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
      <p className="text-xs text-ink-muted">Value: {type || '(none)'}</p>
      <div className="flex gap-px">
        <button type="submit" className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Submit</button>
        <button type="button" onClick={() => setType('')} className="h-10 px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Clear</button>
      </div>
      {sent ? <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p> : null}
    </form>
  );
}
```

With `name`, a hidden input submits the value with the form. A form reset puts an uncontrolled value back to `defaultValue`; a controlled `value` is yours to set back.

## Open above

The list opens below the trigger and is as wide as it. `side="top"` on `Popup` prefers above. Either way it flips when there is no room, and `data-side` on the popup says where it went. There are no sizes: the height of the trigger and the rows is your CSS.


React (live React example):

```tsx
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
  { value: 'mortgage', label: 'Mortgage' },
];

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={types} name="type">
        <Dropdown.Label className="text-xs text-ink-muted">Contract type</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        {/* data-side says where the list went: the shadow falls away from the field */}
        <Dropdown.Popup side="top" className="bg-layer-1 text-sm text-ink shadow-lg data-[side=top]:shadow-[0_-2px_6px_rgb(0_0_0/0.3)]">
          {types.map((t) => (
            <Dropdown.Option key={t.value} value={t.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {t.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
    </div>
  );
}
```

## Load the options when the list opens

`onOpenChange` fires after the list opens or closes. While `loading` is true, the keys pick nothing and the popup has `aria-busy`. When `loading` ends with the list open, the highlight goes to the chosen option, else the first.

`Root` draws no "Loading…" row and announces nothing: render the row and a status text yourself.


React (live React example):

```tsx
import { useState } from 'react';
import { Dropdown, type ListOption } from '@purpurabog/ui/headless';

// stands in for fetch('/api/branches'): answers after a second
const fetchBranches = () =>
  new Promise<ListOption[]>((resolve) => {
    setTimeout(() => resolve([
      { value: 'silom', label: 'Silom' },
      { value: 'asok', label: 'Asok' },
      { value: 'chiangmai', label: 'Chiang Mai' },
    ]), 1000);
  });

export default function Example() {
  const [branches, setBranches] = useState<ListOption[]>();
  const load = async (open: boolean) => {
    if (open && !branches) setBranches(await fetchBranches());
  };
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={branches ?? []} name="branch" loading={!branches} onOpenChange={load}>
        <Dropdown.Label className="text-xs text-ink-muted">Branch</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a branch" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {branches?.map((b) => (
            <Dropdown.Option key={b.value} value={b.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {b.label}
            </Dropdown.Option>
          ))}
          {branches ? null : <li role="option" aria-disabled="true" aria-selected="false" className="px-4 py-3 text-ink-placeholder">Loading…</li>}
        </Dropdown.Popup>
        <span role="status" className="sr-only">{branches ? '' : 'Loading…'}</span>
      </Dropdown.Root>
    </div>
  );
}
```

## Read-only and disabled

- `readOnly` shows the value, but the list doesn't open and the keys do nothing. The trigger gets `aria-readonly`.
- `disabled` disables the trigger.
- A disabled field renders no hidden input, so it isn't submitted (as a disabled native control).


React (live React example):

```tsx
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
];

function TypeField({ label, ...props }: { label: string; defaultValue?: string; readOnly?: boolean; disabled?: boolean }) {
  return (
    <Dropdown.Root items={types} {...props}>
      <Dropdown.Label className="text-xs text-ink-muted data-disabled:text-ink-disabled">{label}</Dropdown.Label>
      <Dropdown.Trigger className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-readonly:cursor-default data-readonly:border-hairline data-readonly:bg-transparent data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-disabled:hover:bg-field-1">
        <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current group-data-readonly:opacity-25">
          <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
        </svg>
      </Dropdown.Trigger>
      <Dropdown.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
        {types.map((t) => (
          <Dropdown.Option key={t.value} value={t.value} className="px-4 py-3">{t.label}</Dropdown.Option>
        ))}
      </Dropdown.Popup>
    </Dropdown.Root>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <TypeField label="Contract type (read-only)" defaultValue="lease" readOnly />
      <TypeField label="Contract type (disabled)" disabled />
    </div>
  );
}
```

`required` and `invalid` only set `aria-required` and `aria-invalid` (and `data-invalid`). There is no built-in message: check the value and show the error yourself ([Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/)).

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
  { value: 'mortgage', label: 'Mortgage (paused)', disabled: true },
];

export default function Example() {
  const [type, setType] = useState('');
  const invalid = type === '';
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={types} name="type" value={type} onValueChange={setType} invalid={invalid} required>
        <Dropdown.Label className="text-xs text-ink-muted">Contract type</Dropdown.Label>
        <Dropdown.Trigger
          aria-describedby={invalid ? 'dropdown-style-error' : undefined}
          className="group flex h-10 w-full items-center justify-between gap-2 border-b border-border-strong-1 bg-field-1 px-4 text-start text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:text-ink-disabled"
        >
          <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {types.map((t) => (
            <Dropdown.Option key={t.value} value={t.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:font-semibold data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled">
              {t.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
      {invalid ? <p id="dropdown-style-error" className="text-xs text-error-text">Choose a contract type</p> : null}
    </div>
  );
}
```
```css
/* className="trigger" on Trigger, "value" on Value, "option" on each Option */
.trigger[data-open] { outline: 2px solid; }
.trigger[data-invalid] { outline: 2px solid #da1e28; }
.value[data-placeholder] { color: #6f6f6f; }
.option[data-highlighted] { background: #e8e8e8; }
.option[data-selected] { font-weight: 600; }
.option[data-disabled] { color: #a8a8a8; }
```

## Parts

### Dropdown.Root

Renders no element of its own: its children, then the hidden input when `name` is set and `disabled` isn't.

| Prop | Type | Default | |
|---|---|---|---|
| `items` | `ListItem[]` | | Options and groups `{ label, options }`: what the keys move through and typing searches |
| `value` | `string` | | The chosen value (controlled) |
| `defaultValue` | `string` | `''` | The starting value (uncontrolled) |
| `onValueChange` | `(value: string) => void` | | After the user picks another option |
| `onOpenChange` | `(open: boolean) => void` | | After the list opens or closes |
| `disabled` | `boolean` | `false` | Disables the trigger |
| `readOnly` | `boolean` | `false` | The list doesn't open |
| `required` | `boolean` | `false` | `aria-required` on the trigger |
| `invalid` | `boolean` | `false` | `aria-invalid` and `data-invalid` on the trigger |
| `loading` | `boolean` | `false` | The keys pick nothing; the popup is `aria-busy` |
| `name` | `string` | | Submits the value with the form (a hidden input), unless disabled |
| `id` | `string` | generated | Base of the ids: `<id>-label`, `<id>-value`, `<id>-list`, `<id>-opt-<n>` |

`Dropdown.useDropdownContext()` returns the `Root`'s state (`open`, `value`, `selected`, `active`, `loading` …) to any component inside it, for example to turn a chevron.

### Dropdown.Label

A `<span>` with the id `<id>-label`. It names the trigger (with `Value`) and the popup.

| Attribute | When |
|---|---|
| `data-disabled` | `Root` is disabled |

### Dropdown.Trigger

A `<button type="button" role="combobox">`. Its `aria-labelledby` is `<id>-label <id>-value` unless you pass your own. It takes every button prop except `type`, `role` and `disabled`.

| Attribute | When |
|---|---|
| `data-open` | The list is open |
| `data-disabled` | Disabled |
| `data-readonly` | Read-only |
| `data-invalid` | `invalid` is set |
| `data-placeholder` | Nothing is chosen |

### Dropdown.Value

A `<span>` with the id `<id>-value`: the chosen option's label, else `placeholder`. `children` replaces both.

| Prop | Type | Default | |
|---|---|---|---|
| `placeholder` | `ReactNode` | | Shown while nothing is chosen |

| Attribute | When |
|---|---|
| `data-placeholder` | Nothing is chosen |

### Dropdown.Popup

A `<ul role="listbox" popover="manual">` in the top layer, as wide as the trigger. Its children render only while the list is open. A press inside it keeps focus on the trigger; a press outside closes it. Its `aria-labelledby` is `<id>-label` unless you pass your own.

| Prop | Type | Default | |
|---|---|---|---|
| `side` | `'bottom' \| 'top'` | `'bottom'` | Where the list opens; it flips when there is no room |

| Attribute | When |
|---|---|
| `data-open` | The list is open |
| `data-side` | `bottom` or `top`: where the list went |

### Dropdown.Option

An `<li role="option">` with the id `<id>-opt-<n>`. A click on an enabled option picks it and closes the list.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | The value of an option in `items` (required) |

| Attribute | When |
|---|---|
| `data-highlighted` | The keyboard highlight is on it |
| `data-selected` | It is the chosen option |
| `data-disabled` | The option (or its group) is disabled |

### Dropdown.Group, GroupLabel, GroupOptions

`Group` is a `<div role="group">` inside a presentational `<li>`, named by its `GroupLabel` (a `<div>`). `GroupOptions` is a presentational `<ul>` that holds the group's `Option`s. They add no props and no data attributes.

## Keyboard and accessibility

| Key | List closed | List open |
|---|---|---|
| ↓, Enter, Space | Open on the chosen option (else the first) | ↓ moves down; Enter and Space pick the highlighted option and close |
| ↑ | Does nothing | Moves up (no wrap) |
| Home / End | Open on the first / last option | First / last option |
| Page Up / Page Down | | Move by 10 |
| Letters | Open on the next option that starts with them | Jump to the next option that starts with them |
| Alt+↑ | | Picks the highlighted option and closes |
| Esc | | Closes without a change |
| Tab | Moves on | Closes without a change and moves on |

The parts set `role="combobox"`, `aria-haspopup`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `aria-readonly`, `aria-required` and `aria-invalid` on the trigger, and `role="listbox"`, `role="option"`, `aria-selected` and `aria-disabled` on the list. Focus stays on the trigger the whole time.

You add:

- The label text in `Label`, or your own `aria-labelledby` on the trigger and the popup.
- Helper and error text, linked with `aria-describedby` on the trigger.
- A `role="status"` text for "Loading…", as in the example above.
