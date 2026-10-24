# Headless Combobox

The `Combobox` parts give you the behaviour of the styled [Combobox](https://parntengza.github.io/kanok-ui-docs/en/combobox/) with no styles: a text box with `role="combobox"`, a listbox in the top layer that typing narrows or only highlights, the keyboard, the rule for what leaving the field keeps, a clear button and a chevron that are not Tab stops, and a hidden input that submits the value.

You own the markup, the `<label>`, any helper or error message, the "Searching…" and "No matching items" text, and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Combobox } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Combobox } from '@purpurabog/ui/headless';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'cei', label: 'Chiang Rai' },
  { value: 'kkc', label: 'Khon Kaen' },
  { value: 'hkt', label: 'Phuket' },
];

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Combobox.Root items={provinces} name="province" filter="contains">
        <label htmlFor="province" className="text-xs text-ink-muted">Province</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <Combobox.Input id="province" placeholder="Type a province" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Combobox.Toggle>
        </Combobox.Anchor>
        <Combobox.Popup aria-label="Province" className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : (
            <Combobox.Option key={p.value} value={p.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {p.label}
            </Combobox.Option>
          )))}
        </Combobox.Popup>
      </Combobox.Root>
    </div>
  );
}
```

`items` on `Root` is every option. `Popup` calls its children function with the items the typed text keeps (groups kept), so you render only those.

## Anatomy

```tsx
<Combobox.Root items={items}>
  <label />
  <Combobox.Anchor>
    <Combobox.Input />
    <Combobox.Clear />
    <Combobox.Toggle />
  </Combobox.Anchor>
  <Combobox.Popup>
    {(items) => (
      <>
        <Combobox.Option value="…" />
        <Combobox.Group>
          <Combobox.GroupLabel />
          <Combobox.GroupOptions>
            <Combobox.Option value="…" />
          </Combobox.GroupOptions>
        </Combobox.Group>
      </>
    )}
  </Combobox.Popup>
</Combobox.Root>
```

## How typing narrows the list

Typing opens the list and highlights the first enabled option whose label contains the text. `filter` decides whether the other options stay:

| `filter` | The list while typing |
|---|---|
| `none` (default) | Every option stays; only the highlight moves |
| `contains` | Only options whose label contains the text |
| `starts-with` | Only options whose label starts with the text |

While the text still equals the chosen option's label, the list shows every option.


React (live React example):

```tsx
import { useState } from 'react';
import { Combobox } from '@purpurabog/ui/headless';

type Filter = 'none' | 'contains' | 'starts-with';

const provinces = [
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'cei', label: 'Chiang Rai' },
  { value: 'msn', label: 'Mae Hong Son' },
  { value: 'lpn', label: 'Lamphun' },
  { value: 'nan', label: 'Nan' },
];

export default function Example() {
  const [filter, setFilter] = useState<Filter>('starts-with');
  return (
    <div className="grid max-w-xs gap-4">
      <label className="grid gap-2 text-xs text-ink-muted">
        filter
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
          className="h-8 border-b border-border-strong-1 bg-field-1 px-2 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        >
          <option value="none">none</option>
          <option value="contains">contains</option>
          <option value="starts-with">starts-with</option>
        </select>
      </label>
      <div className="grid gap-2">
        <Combobox.Root items={provinces} filter={filter}>
          <label htmlFor="province-filter" className="text-xs text-ink-muted">Province</label>
          <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
            <Combobox.Input id="province-filter" placeholder="Try “ma” or “n”" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
            <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
                <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
              </svg>
            </Combobox.Toggle>
          </Combobox.Anchor>
          <Combobox.Popup aria-label="Province" className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
            {(items) => items.map((p) => ('options' in p ? null : (
              <Combobox.Option key={p.value} value={p.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
                {p.label}
              </Combobox.Option>
            )))}
          </Combobox.Popup>
        </Combobox.Root>
      </div>
    </div>
  );
}
```

## Free text or a listed option

When the user leaves the field, text that exactly matches an enabled option's label picks that option. Other text snaps back to the option chosen before. With `allowCustomValue`, the typed text becomes the value instead.


React (live React example):

```tsx
import { useState } from 'react';
import { Combobox } from '@purpurabog/ui/headless';

const titles = [
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Paralegal', label: 'Paralegal' },
];

export default function Example() {
  const [title, setTitle] = useState('');
  return (
    <div className="grid max-w-xs gap-2">
      <Combobox.Root items={titles} name="title" allowCustomValue onValueChange={setTitle}>
        <label htmlFor="job-title" className="text-xs text-ink-muted">Job title</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <Combobox.Input id="job-title" placeholder="Pick one or type your own" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Combobox.Toggle>
        </Combobox.Anchor>
        <Combobox.Popup aria-label="Job title" className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((t) => ('options' in t ? null : (
            <Combobox.Option key={t.value} value={t.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {t.label}
            </Combobox.Option>
          )))}
        </Combobox.Popup>
      </Combobox.Root>
      <p className="text-xs text-ink-muted">Value: {title || '(none)'}</p>
    </div>
  );
}
```

## Value

Hold the value yourself with `value` and `onValueChange`, or give a starting `defaultValue`. `onValueChange` fires when the value changes: a pick, a committed text, a clear. When `value` changes from outside, the text box shows the new choice's label.


React (live React example):

```tsx
import { useState } from 'react';
import { Combobox } from '@purpurabog/ui/headless';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'hkt', label: 'Phuket' },
];

export default function Example() {
  const [province, setProvince] = useState('bkk');
  return (
    <div className="grid max-w-xs gap-2">
      <Combobox.Root items={provinces} name="province" value={province} onValueChange={setProvince}>
        <label htmlFor="province-value" className="text-xs text-ink-muted">Province</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <Combobox.Input id="province-value" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Combobox.Toggle>
        </Combobox.Anchor>
        <Combobox.Popup aria-label="Province" className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : (
            <Combobox.Option key={p.value} value={p.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {p.label}
            </Combobox.Option>
          )))}
        </Combobox.Popup>
      </Combobox.Root>
      <p className="text-xs text-ink-muted">Value: {province || '(none)'}</p>
      {/* a change from outside: the text box shows the new choice's label */}
      <button type="button" onClick={() => setProvince('hkt')} className="h-8 justify-self-start px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
        Set to Phuket
      </button>
    </div>
  );
}
```

## Search on a server

`onInputValueChange` gets the text each time the user types. Fetch the matches, replace `items`, and set `loading` while the request runs: the popup then has `aria-busy`. Keep `filter="none"` (the default), as the server has already filtered.

The parts draw no "Searching…" or "No matching items" text. `Combobox.useComboboxContext()` gives you `open`, `loading` and `listed` (the options the text keeps) to render them:


React (live React example):

```tsx
import { useRef, useState } from 'react';
import { Combobox, type ListOption } from '@purpurabog/ui/headless';

const all = ['Bangkok', 'Chiang Mai', 'Chiang Rai', 'Khon Kaen', 'Nakhon Ratchasima', 'Phuket', 'Songkhla', 'Udon Thani'];

// stands in for the server: the cities containing the text, after 600 ms
const search = (text: string) =>
  new Promise<ListOption[]>((resolve) => {
    const found = all.filter((city) => city.toLowerCase().includes(text.trim().toLowerCase()));
    setTimeout(() => resolve(found.map((city) => ({ value: city, label: city }))), 600);
  });

function statusText(loading: boolean, count: number) {
  if (loading) return 'Searching…';
  return count === 0 ? 'No matching items' : '';
}

function ListStatus() {
  const { open, loading, listed } = Combobox.useComboboxContext();
  return <p role="status" className="min-h-4 text-xs text-ink-muted">{open ? statusText(loading, listed.length) : ''}</p>;
}

export default function Example() {
  const [cities, setCities] = useState<ListOption[]>([]);
  const [loading, setLoading] = useState(false);
  const latest = useRef('');
  const onText = async (text: string) => {
    latest.current = text;
    setLoading(true);
    const found = await search(text);
    if (latest.current !== text) return; // a newer search is on its way
    setCities(found);
    setLoading(false);
  };
  return (
    <div className="grid max-w-xs gap-2">
      <Combobox.Root items={cities} name="city" loading={loading} onInputValueChange={onText}>
        <label htmlFor="city" className="text-xs text-ink-muted">City</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <Combobox.Input id="city" placeholder="Type to search" className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
        </Combobox.Anchor>
        <Combobox.Popup aria-label="City" className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((c) => ('options' in c ? null : (
            <Combobox.Option key={c.value} value={c.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {c.label}
            </Combobox.Option>
          )))}
        </Combobox.Popup>
        <ListStatus />
      </Combobox.Root>
    </div>
  );
}
```

Here `search()` stands in for the server and answers after a short wait; in your app it fetches the matches, as on [Combobox](https://parntengza.github.io/kanok-ui-docs/en/combobox/#search-on-a-server).

## Groups and descriptions

Groups are `{ label, options }` in `items`, and options take `description` and `disabled`. Typing only searches the labels. `isGroup` tells a group from an option in the `Popup` function:


React (live React example):

```tsx
import { Combobox, isGroup, type ListItem } from '@purpurabog/ui/headless';

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
      <Combobox.Root items={branches} name="branch" filter="contains">
        <label htmlFor="branch" className="text-xs text-ink-muted">Branch</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <Combobox.Input id="branch" placeholder="Type a branch" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Combobox.Toggle>
        </Combobox.Anchor>
        <Combobox.Popup aria-label="Branch" className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.filter(isGroup).map((group) => (
            <Combobox.Group key={group.label}>
              <Combobox.GroupLabel className="px-4 pt-3 pb-1 text-xs font-semibold text-ink-muted">{group.label}</Combobox.GroupLabel>
              <Combobox.GroupOptions>
                {group.options.map((o) => (
                  <Combobox.Option key={o.value} value={o.value} className="flex cursor-pointer flex-col px-4 py-2 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled">
                    {o.label}
                    <small className="text-xs text-ink-helper">{o.description}</small>
                  </Combobox.Option>
                ))}
              </Combobox.GroupOptions>
            </Combobox.Group>
          ))}
        </Combobox.Popup>
      </Combobox.Root>
    </div>
  );
}
```

## Clear

`Combobox.Clear` empties the text and the value and keeps focus in the input. Leave it out to have none. It is disabled while `Root` is disabled or read-only; the styled Combobox goes further and shows it only while the field can change and holds text:


React (live React example):

```tsx
import { Combobox } from '@purpurabog/ui/headless';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'hkt', label: 'Phuket' },
];

function ClearButton() {
  const { interactive, text } = Combobox.useComboboxContext();
  return interactive && text !== '' ? (
    <Combobox.Clear aria-label="Clear" className="grid h-full w-8 shrink-0 place-items-center text-ink hover:bg-field-hover-1">
      <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
        <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
      </svg>
    </Combobox.Clear>
  ) : null;
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Combobox.Root items={provinces} name="province" defaultValue="bkk">
        <label htmlFor="province-clear" className="text-xs text-ink-muted">Province</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <Combobox.Input id="province-clear" placeholder="Type a province" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <ClearButton />
          <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Combobox.Toggle>
        </Combobox.Anchor>
        <Combobox.Popup aria-label="Province" className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : (
            <Combobox.Option key={p.value} value={p.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
              {p.label}
            </Combobox.Option>
          )))}
        </Combobox.Popup>
      </Combobox.Root>
    </div>
  );
}
```

Esc on a closed list also clears.

## Open above, read-only and disabled

- `side="top"` on `Popup` prefers opening above; it flips when there is no room. The list lines up with `Anchor` and is as wide as it (the `Input` when there is no `Anchor`).
- `readOnly` makes the input read-only: the keys and clicks don't open the list, and `Toggle` and `Clear` are disabled.
- `disabled` disables the input, `Toggle` and `Clear`.
- A disabled field renders no hidden input, so it isn't submitted (as a disabled native control). A form reset puts an uncontrolled value and its text back.


React (live React example):

```tsx
import { Combobox } from '@purpurabog/ui/headless';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'hkt', label: 'Phuket' },
];

interface FieldProps {
  id: string;
  label: string;
  side?: 'bottom' | 'top';
  defaultValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

function ProvinceField({ id, label, side, ...props }: FieldProps) {
  return (
    <Combobox.Root items={provinces} {...props}>
      <label htmlFor={id} className="text-xs text-ink-muted">{label}</label>
      <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus has-data-readonly:border-hairline has-data-readonly:bg-transparent has-data-disabled:border-transparent has-data-disabled:hover:bg-field-1">
        <Combobox.Input id={id} placeholder="Type a province" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder data-disabled:cursor-not-allowed data-disabled:text-ink-disabled" />
        <Combobox.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink disabled:text-ink-disabled">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Combobox.Toggle>
      </Combobox.Anchor>
      <Combobox.Popup aria-label={label} side={side} className="bg-layer-1 text-sm text-ink shadow-lg">
        {(items) => items.map((p) => ('options' in p ? null : (
          <Combobox.Option key={p.value} value={p.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink">
            {p.label}
          </Combobox.Option>
        )))}
      </Combobox.Popup>
    </Combobox.Root>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <ProvinceField id="province-top" label="Province (opens above)" side="top" />
      <ProvinceField id="province-readonly" label="Province (read-only)" defaultValue="bkk" readOnly />
      <ProvinceField id="province-disabled" label="Province (disabled)" disabled />
    </div>
  );
}
```

`required` and `invalid` only set `aria-required` and `aria-invalid` (and `data-invalid`): check the value and show the error yourself ([Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/)). There are no sizes; the height is your CSS.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Combobox } from '@purpurabog/ui/headless';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'hkt', label: 'Phuket (no branch)', disabled: true },
];

export default function Example() {
  const [province, setProvince] = useState('');
  const invalid = province === '';
  return (
    <div className="grid max-w-xs gap-2">
      <Combobox.Root items={provinces} name="province" value={province} onValueChange={setProvince} invalid={invalid} required>
        <label htmlFor="province-style" className="text-xs text-ink-muted">Province</label>
        <Combobox.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus has-data-invalid:outline-2 has-data-invalid:-outline-offset-2 has-data-invalid:outline-error">
          <Combobox.Input
            id="province-style"
            placeholder="Type a province"
            aria-describedby={invalid ? 'province-style-error' : undefined}
            className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder"
          />
          <Combobox.Toggle aria-label="Open" className="grid h-full w-10 shrink-0 place-items-center text-ink data-open:rotate-180">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Combobox.Toggle>
        </Combobox.Anchor>
        <Combobox.Popup aria-label="Province" className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : (
            <Combobox.Option key={p.value} value={p.value} className="cursor-pointer px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:font-semibold data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled">
              {p.label}
            </Combobox.Option>
          )))}
        </Combobox.Popup>
      </Combobox.Root>
      {invalid ? <p id="province-style-error" className="text-xs text-error-text">Choose a province from the list</p> : null}
    </div>
  );
}
```
```css
/* className="input" on Input, "toggle" on Toggle, "option" on each Option */
.input[data-open] { outline: 2px solid; }
.input[data-invalid] { outline: 2px solid #da1e28; }
.toggle[data-open] { transform: rotate(180deg); }
.option[data-highlighted] { background: #e8e8e8; }
.option[data-selected] { font-weight: 600; }
```

## Parts

### Combobox.Root

Renders no element of its own: its children, then the hidden input when `name` is set and `disabled` isn't.

| Prop | Type | Default | |
|---|---|---|---|
| `items` | `ListItem[]` | | Options and groups `{ label, options }` |
| `value` | `string` | | The chosen value (controlled) |
| `defaultValue` | `string` | `''` | The starting value (uncontrolled) |
| `onValueChange` | `(value: string) => void` | | After the value changes: a pick, a committed text, a clear |
| `onInputValueChange` | `(text: string) => void` | | Each time the user types |
| `filter` | `'none' \| 'contains' \| 'starts-with'` | `'none'` | How typed text narrows the list |
| `allowCustomValue` | `boolean` | `false` | Keep text that matches no option as the value |
| `loading` | `boolean` | `false` | The popup is `aria-busy` |
| `onOpenChange` | `(open: boolean) => void` | | After the list opens or closes |
| `disabled` | `boolean` | `false` | Disables the input, `Toggle` and `Clear` |
| `readOnly` | `boolean` | `false` | The text and the value can't change |
| `required` | `boolean` | `false` | `aria-required` on the input |
| `invalid` | `boolean` | `false` | `aria-invalid` and `data-invalid` on the input |
| `name` | `string` | | Submits the value with the form (a hidden input), unless disabled |
| `id` | `string` | generated | The input's id, and the base of the other ids: `<id>-list`, `<id>-opt-<n>`. The popup's `aria-labelledby` points at `<id>-label`, an id only your own `<label>` can carry (see `Combobox.Popup`) |

`Combobox.useComboboxContext()` returns the `Root`'s state (`text`, `value`, `open`, `listed`, `loading`, `interactive` …) to any component inside it.

### Combobox.Input

An `<input type="text" role="combobox" autocomplete="off">`. Its id is `Root`'s `id` unless you pass one. It takes every input prop except `type`, `role`, `value`, `defaultValue`, `disabled` and `readOnly`, which come from `Root`.

| Attribute | When |
|---|---|
| `data-open` | The list is open |
| `data-disabled` | Disabled |
| `data-readonly` | Read-only |
| `data-invalid` | `invalid` is set |

### Combobox.Anchor

A `<div>` around the input and its buttons. The popup lines up with it and matches its width. No props, no data attributes.

### Combobox.Clear

A `<button type="button">` with `tabIndex={-1}` (pass your own to change it). A click empties the text and the value, closes the list and keeps focus in the input. It is disabled while `Root` is disabled or read-only. Give it an `aria-label`.

### Combobox.Toggle

A `<button type="button">` with `tabIndex={-1}`, `aria-expanded` and `aria-controls`. A click opens or closes the list; focus stays in the input. It is disabled while `Root` is disabled or read-only. Give it an `aria-label`.

| Attribute | When |
|---|---|
| `data-open` | The list is open |

### Combobox.Popup

A `<ul role="listbox" popover="manual">` in the top layer. Its rows render only while the list is open. Its `aria-labelledby` is `<id>-label` unless you pass your own; there is no label part, so give it an `aria-label` or give your `<label>` that id.

| Prop | Type | Default | |
|---|---|---|---|
| `children` | `ReactNode \| ((items: ListItem[]) => ReactNode)` | | The rows, or a function of the items the typed text keeps |
| `side` | `'bottom' \| 'top'` | `'bottom'` | Where the list opens; it flips when there is no room |

| Attribute | When |
|---|---|
| `data-open` | The list is open |
| `data-side` | `bottom` or `top`: where the list went |

### Combobox.Option, Group, GroupLabel, GroupOptions

The same parts as in [Headless Dropdown](https://parntengza.github.io/kanok-ui-docs/en/headless-dropdown/#parts): `Option` is an `<li role="option">` with a required `value` and `data-highlighted`, `data-selected` and `data-disabled`. A click on an enabled option picks it, puts its label in the text box and closes the list.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Typing | Opens the list and highlights the first option containing the text |
| ↓ / ↑ | Opens the list on the chosen option (else the first / last); then moves the highlight (no wrap) |
| Alt+↓ | Opens the list without a highlight |
| Alt+↑ | Picks the highlighted option and closes |
| Enter | Picks the highlighted option. With no highlight, picks the first option containing the text (or keeps the text with `allowCustomValue`) |
| Esc | Closes the list; on a closed list, clears the text and the value |
| Tab | Moves on without picking the highlight; the text is committed or snaps back |

The parts set `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `aria-required` and `aria-invalid` on the input, and the listbox and option roles on the list. Focus stays in the input.

You add:

- A `<label htmlFor>` for the input, and a name for the popup (`aria-label`, or a `<label>` with the id `<id>-label`).
- `aria-label` on `Clear` and `Toggle`.
- Helper and error text, linked with `aria-describedby` on the input.
- A `role="status"` text for "Searching…" and "No matching items", as in the example above.
