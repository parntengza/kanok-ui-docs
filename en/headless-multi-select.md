# Headless Multi-select

The `MultiSelect` parts give you the behaviour of the styled [Multi-select](https://parntengza.github.io/kanok-ui-docs/en/multi-select/) with no styles: a field that opens a listbox in the top layer and stays open while people toggle options, chosen options moving to the top, an optional "Select all" row, a filterable text box, the keyboard, and one hidden input per chosen value.

You own the markup, the label text, the count, the check boxes in the rows, any helper or error message, the "Loading…" text and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
];

// a row with a check box drawn from its data-selected
function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <MultiSelect.Root items={people} name="notify">
        <MultiSelect.Label className="text-xs text-ink-muted">Notify</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-open:outline-2 has-data-open:-outline-offset-2 has-data-open:outline-focus">
          <MultiSelect.Trigger className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none">
            <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder" />
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Trigger>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
        </MultiSelect.Popup>
      </MultiSelect.Root>
    </div>
  );
}
```

`items` on `Root` is every option. `Popup` calls its children function with the rows to show, in order: filtered by the typed text, chosen ones first, groups kept.

## Anatomy

```tsx
<MultiSelect.Root items={items}>
  <MultiSelect.Label />
  <MultiSelect.Anchor>
    <MultiSelect.Trigger>
      <MultiSelect.Value />
    </MultiSelect.Trigger>
    {/* or, with filterable: */}
    <MultiSelect.Input />
    <MultiSelect.ClearText />
    <MultiSelect.Toggle />
    <MultiSelect.Clear />
  </MultiSelect.Anchor>
  <MultiSelect.Popup>
    {(items) => (
      <>
        <MultiSelect.SelectAll />
        <MultiSelect.Option value="…" />
        <MultiSelect.Group>
          <MultiSelect.GroupLabel />
          <MultiSelect.GroupOptions>
            <MultiSelect.Option value="…" />
          </MultiSelect.GroupOptions>
        </MultiSelect.Group>
      </>
    )}
  </MultiSelect.Popup>
</MultiSelect.Root>
```

## The count, clear and descriptions

`Value` shows its `children`, else the placeholder: it doesn't count. Read `count` from `MultiSelect.useMultiSelectContext()` to show how many are chosen. `Clear` empties the choice and keeps focus in the field; it is disabled while `Root` is disabled or read-only. The example below also leaves it out then, as the styled MultiSelect does.


React (live React example):

```tsx
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
  { value: 'signer', label: 'Signers', description: 'Only after both parties sign' },
];

function CountAndClear() {
  const { count, interactive } = MultiSelect.useMultiSelectContext();
  if (count === 0) return null;
  return (
    <span className="ms-2 inline-flex h-6 shrink-0 items-center gap-1 rounded-full bg-inverse-canvas ps-2 text-xs text-inverse-ink">
      {count}
      {interactive ? (
        <MultiSelect.Clear aria-label="Clear all" className="grid size-6 place-items-center rounded-full hover:bg-inverse-hover">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 fill-current">
            <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
          </svg>
        </MultiSelect.Clear>
      ) : null}
    </span>
  );
}

function Row({ value, label, description }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-start gap-2 px-4 py-2 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      <span className="flex flex-col">
        {label}
        <small className="text-xs text-ink-helper">{description}</small>
      </span>
    </MultiSelect.Option>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <MultiSelect.Root items={people} name="notify" defaultValue={['owner']}>
        <MultiSelect.Label className="text-xs text-ink-muted">Notify</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-open:outline-2 has-data-open:-outline-offset-2 has-data-open:outline-focus">
          <CountAndClear />
          <MultiSelect.Trigger className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none">
            <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder" />
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Trigger>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
        </MultiSelect.Popup>
      </MultiSelect.Root>
    </div>
  );
}
```

## Value

`value` is an array. Hold it yourself with `value` and `onValueChange`, or give a starting `defaultValue`. With `name`, `Root` renders one hidden input per chosen value, so read them with `FormData.getAll()`.


React (live React example):

```tsx
import { useState } from 'react';
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
];

function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  const [notify, setNotify] = useState(['legal']);
  const [sent, setSent] = useState<FormDataEntryValue[]>();
  return (
    <form
      className="grid max-w-xs gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(new FormData(e.currentTarget).getAll('notify'));
      }}
    >
      <MultiSelect.Root items={people} name="notify" value={notify} onValueChange={setNotify}>
        <MultiSelect.Label className="text-xs text-ink-muted">Notify</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-open:outline-2 has-data-open:-outline-offset-2 has-data-open:outline-focus">
          <MultiSelect.Trigger className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none">
            <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder" />
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Trigger>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
        </MultiSelect.Popup>
      </MultiSelect.Root>
      <p className="text-xs text-ink-muted">Value: {JSON.stringify(notify)}</p>
      <button type="submit" className="h-10 justify-self-start bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Submit</button>
      {sent ? <p className="text-xs text-ink-muted">Sent: notify = {JSON.stringify(sent)}</p> : null}
    </form>
  );
}
```

## Select all

`selectAll` offers a "Select all" row. Put `SelectAll` first in the popup: it renders only while offered and something can be chosen. It chooses every enabled option shown, or none when all are chosen. While only some are, it has `data-mixed` and `aria-checked="mixed"`.


React (live React example):

```tsx
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
];

const box = 'grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse';
const check = <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>;

function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className={box}>{check}</span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <MultiSelect.Root items={people} name="notify" selectAll>
        <MultiSelect.Label className="text-xs text-ink-muted">Notify</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-open:outline-2 has-data-open:-outline-offset-2 has-data-open:outline-focus">
          <MultiSelect.Trigger className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none">
            <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder" />
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Trigger>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => (
            <>
              <MultiSelect.SelectAll className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
                {/* mixed: a filled box with a dash instead of the check */}
                <span aria-hidden="true" className={`${box} relative after:absolute after:top-[6px] after:left-[3px] after:hidden after:h-0.5 after:w-2 after:bg-icon-inverse group-data-mixed:bg-ink group-data-mixed:after:block`}>{check}</span>
                Select all
              </MultiSelect.SelectAll>
              {items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
            </>
          )}
        </MultiSelect.Popup>
      </MultiSelect.Root>
    </div>
  );
}
```

## Where chosen options go

`selectionFeedback` decides when chosen rows move to the top of the rows `Popup` hands you:

| `selectionFeedback` | Chosen rows |
|---|---|
| `top-after-reopen` (default) | Move to the top the next time the list opens |
| `top` | Move to the top at once |
| `fixed` | Stay where they are |

With groups in `items`, nothing moves.


React (live React example):

```tsx
import { useState } from 'react';
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

type Feedback = 'top-after-reopen' | 'top' | 'fixed';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
  { value: 'signer', label: 'Signers' },
];

function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  const [feedback, setFeedback] = useState<Feedback>('top-after-reopen');
  return (
    <div className="grid max-w-xs gap-4">
      <label className="grid gap-2 text-xs text-ink-muted">
        selectionFeedback
        <select
          value={feedback}
          onChange={(e) => setFeedback(e.target.value as Feedback)}
          className="h-8 border-b border-border-strong-1 bg-field-1 px-2 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        >
          <option value="top-after-reopen">top-after-reopen</option>
          <option value="top">top</option>
          <option value="fixed">fixed</option>
        </select>
      </label>
      <div className="grid gap-2">
        <MultiSelect.Root items={people} selectionFeedback={feedback}>
          <MultiSelect.Label className="text-xs text-ink-muted">Notify</MultiSelect.Label>
          <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-open:outline-2 has-data-open:-outline-offset-2 has-data-open:outline-focus">
            <MultiSelect.Trigger className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none">
              <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder" />
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
                <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
              </svg>
            </MultiSelect.Trigger>
          </MultiSelect.Anchor>
          <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
            {(items) => items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
          </MultiSelect.Popup>
        </MultiSelect.Root>
      </div>
    </div>
  );
}
```

## Filterable

`filterable` makes the field a text box: use `Input` instead of `Trigger` and `Value`, and add `ClearText` and `Toggle` if you want them. `filter` is `contains` (the default) or `starts-with`. Choosing keeps the text and the list open; focus leaving `Anchor` or a press outside closes the list and empties the text. "Select all" then acts on the rows shown.


React (live React example):

```tsx
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'cei', label: 'Chiang Rai' },
  { value: 'kkc', label: 'Khon Kaen' },
  { value: 'hkt', label: 'Phuket' },
  { value: 'skh', label: 'Songkhla' },
];

function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <MultiSelect.Root items={provinces} name="provinces" filterable>
        <MultiSelect.Label className="text-xs text-ink-muted">Provinces</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <MultiSelect.Input placeholder="Type to filter" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <MultiSelect.ClearText aria-label="Clear text" className="grid h-full w-8 shrink-0 place-items-center text-ink hover:bg-field-hover-1">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
              <path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
          </MultiSelect.ClearText>
          <MultiSelect.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Toggle>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
        </MultiSelect.Popup>
      </MultiSelect.Root>
    </div>
  );
}
```

For a server search, set `filter="none"`, get the typed text from `onInputValueChange`, replace `items` and set `loading`. Keep the chosen options in `items` so their rows stay.


React (live React example):

```tsx
import { useRef, useState } from 'react';
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const everyone: ListOption[] = [
  { value: 'somchai', label: 'Somchai Jaidee' },
  { value: 'suda', label: 'Suda Rakthai' },
  { value: 'anan', label: 'Anan Srisuk' },
  { value: 'malee', label: 'Malee Wongsa' },
  { value: 'prasert', label: 'Prasert Chaiyo' },
  { value: 'ratana', label: 'Ratana Boonmee' },
];

// stands in for the server: the people whose name contains the text, after 500 ms
const search = (text: string) =>
  new Promise<ListOption[]>((resolve) => {
    const found = everyone.filter((p) => p.label.toLowerCase().includes(text.trim().toLowerCase()));
    setTimeout(() => resolve(found), 500);
  });

function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink">
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  const [value, setValue] = useState<string[]>([]);
  const [found, setFound] = useState(everyone);
  const [loading, setLoading] = useState(false);
  const latest = useRef('');
  const onText = async (text: string) => {
    latest.current = text;
    setLoading(true);
    const result = await search(text);
    if (latest.current !== text) return; // a newer search is on its way
    setFound(result);
    setLoading(false);
  };
  // the chosen options stay in items, so their rows stay
  const rows = [...everyone.filter((p) => value.includes(p.value) && !found.includes(p)), ...found];
  return (
    <div className="grid max-w-xs gap-2">
      <MultiSelect.Root items={rows} name="people" value={value} onValueChange={setValue} filterable filter="none" loading={loading} onInputValueChange={onText}>
        <MultiSelect.Label className="text-xs text-ink-muted">People</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus">
          <MultiSelect.Input placeholder="Type a name" className="h-full min-w-0 flex-1 bg-transparent ps-4 text-sm text-ink outline-none placeholder:text-ink-placeholder" />
          <MultiSelect.Toggle aria-label="Open" className="group grid h-full w-10 shrink-0 place-items-center text-ink">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Toggle>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="max-h-72 overflow-y-auto bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => (
            <>
              {/* while loading, items is empty */}
              {loading ? <li role="option" aria-disabled="true" aria-selected="false" className="px-4 py-3 text-ink-placeholder">Searching…</li> : null}
              {items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
            </>
          )}
        </MultiSelect.Popup>
        <span role="status" className="sr-only">{loading ? 'Searching…' : ''}</span>
      </MultiSelect.Root>
      <p className="text-xs text-ink-muted">Value: {JSON.stringify(value)}</p>
    </div>
  );
}
```

`onText` sets `loading`, searches (here a stand-in that answers after a short wait), and puts the result in `rows` together with the chosen options, as on [Multi-select](https://parntengza.github.io/kanok-ui-docs/en/multi-select/#search-on-a-server).

## Load the options when the list opens

`onOpenChange` fires after the list opens or closes. While `loading` is true, `Popup` hands you no rows, "Select all" is hidden, the keys pick nothing and the popup has `aria-busy`. Render a "Loading…" row and a `role="status"` text yourself, as on [Headless Dropdown](https://parntengza.github.io/kanok-ui-docs/en/headless-dropdown/#load-the-options-when-the-list-opens).

## Read-only and disabled

- `readOnly` shows the choice, but the list doesn't open and the keys do nothing. The field gets `aria-readonly` (or the input `readOnly`, filterable), and `Toggle` and `Clear` are disabled.
- `disabled` disables the field, `Toggle` and `Clear`.
- A disabled field renders no hidden inputs, so it isn't submitted (as a disabled native control). A form reset puts an uncontrolled choice back.


React (live React example):

```tsx
import { MultiSelect } from '@purpurabog/ui/headless';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
];

// the chosen labels, read from the Root's state
function ChosenValue() {
  const { value } = MultiSelect.useMultiSelectContext();
  const labels = people.filter((p) => value.includes(p.value)).map((p) => p.label).join(', ');
  return <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder">{labels || undefined}</MultiSelect.Value>;
}

function NotifyField({ label, ...props }: { label: string; defaultValue?: string[]; readOnly?: boolean; disabled?: boolean }) {
  return (
    <MultiSelect.Root items={people} {...props}>
      <MultiSelect.Label className="text-xs text-ink-muted data-disabled:text-ink-disabled">{label}</MultiSelect.Label>
      <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-readonly:border-hairline has-data-readonly:bg-transparent has-data-disabled:border-transparent">
        <MultiSelect.Trigger className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none data-readonly:cursor-default data-disabled:cursor-not-allowed data-disabled:text-ink-disabled">
          <ChosenValue />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current group-data-readonly:opacity-25">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </MultiSelect.Trigger>
      </MultiSelect.Anchor>
      <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
        {(items) => items.map((p) => ('options' in p ? null : <MultiSelect.Option key={p.value} value={p.value} className="px-4 py-3">{p.label}</MultiSelect.Option>))}
      </MultiSelect.Popup>
    </MultiSelect.Root>
  );
}

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <NotifyField label="Notify (read-only)" defaultValue={['owner', 'legal']} readOnly />
      <NotifyField label="Notify (disabled)" disabled />
    </div>
  );
}
```

`required` and `invalid` only set `aria-required` and `aria-invalid` (and `data-invalid`): check the value and show the error yourself ([Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/)). There are no sizes; the height is your CSS.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { MultiSelect, type ListOption } from '@purpurabog/ui/headless';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'board', label: 'Board (on leave)', disabled: true },
];

function Row({ value, label }: ListOption) {
  return (
    <MultiSelect.Option value={value} className="group flex cursor-pointer items-center gap-2 px-4 py-3 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:text-ink-disabled">
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent group-data-selected:bg-ink group-data-selected:text-icon-inverse group-data-disabled:border-ink-disabled">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      {label}
    </MultiSelect.Option>
  );
}

export default function Example() {
  const [notify, setNotify] = useState<string[]>([]);
  const invalid = notify.length === 0;
  return (
    <div className="grid max-w-xs gap-2">
      <MultiSelect.Root items={people} name="notify" value={notify} onValueChange={setNotify} invalid={invalid} required>
        <MultiSelect.Label className="text-xs text-ink-muted">Notify</MultiSelect.Label>
        <MultiSelect.Anchor className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 hover:bg-field-hover-1 has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-focus has-data-open:outline-2 has-data-open:-outline-offset-2 has-data-open:outline-focus has-data-invalid:outline-2 has-data-invalid:-outline-offset-2 has-data-invalid:outline-error">
          <MultiSelect.Trigger
            aria-describedby={invalid ? 'notify-style-error' : undefined}
            className="group flex h-full min-w-0 flex-1 items-center justify-between gap-2 px-4 text-start text-sm text-ink outline-none"
          >
            <MultiSelect.Value placeholder="Choose people" className="truncate data-placeholder:text-ink-placeholder" />
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </MultiSelect.Trigger>
        </MultiSelect.Anchor>
        <MultiSelect.Popup className="bg-layer-1 text-sm text-ink shadow-lg">
          {(items) => items.map((p) => ('options' in p ? null : <Row key={p.value} {...p} />))}
        </MultiSelect.Popup>
      </MultiSelect.Root>
      {invalid ? <p id="notify-style-error" className="text-xs text-error-text">Choose at least one person</p> : null}
    </div>
  );
}
```
```css
/* className="trigger" on Trigger, "option" on each Option, "select-all" on SelectAll, "box" on the drawn check boxes */
.trigger[data-open] { outline: 2px solid; }
.trigger[data-invalid] { outline: 2px solid #da1e28; }
.option[data-highlighted] { background: #e8e8e8; }
.option[data-selected] .box { background: #161616; }
.select-all[data-mixed] .box { background: linear-gradient(#161616, #161616) center / 8px 2px no-repeat; }
```

## Parts

### MultiSelect.Root

Renders no element of its own: its children, then one hidden input per chosen value when `name` is set and `disabled` isn't.

| Prop | Type | Default | |
|---|---|---|---|
| `items` | `ListItem[]` | | Options and groups `{ label, options }` |
| `value` | `string[]` | | The chosen values (controlled) |
| `defaultValue` | `string[]` | `[]` | The starting values (uncontrolled) |
| `onValueChange` | `(value: string[]) => void` | | After the choice changes |
| `onInputValueChange` | `(text: string) => void` | | Filterable: each change of the typed text |
| `selectionFeedback` | `'top-after-reopen' \| 'top' \| 'fixed'` | `'top-after-reopen'` | When chosen options move to the top |
| `selectAll` | `boolean` | `false` | Offer the `SelectAll` row |
| `filterable` | `boolean` | `false` | The field is a text box (`Input`) that narrows the list |
| `filter` | `'contains' \| 'starts-with' \| 'none'` | `'contains'` | How typed text narrows the list (filterable) |
| `loading` | `boolean` | `false` | No rows, the keys pick nothing, the popup is `aria-busy` |
| `onOpenChange` | `(open: boolean) => void` | | After the list opens or closes |
| `disabled` | `boolean` | `false` | Disables the field, `Toggle` and `Clear` |
| `readOnly` | `boolean` | `false` | The choice can't change |
| `required` | `boolean` | `false` | `aria-required` on the field |
| `invalid` | `boolean` | `false` | `aria-invalid` and `data-invalid` on the field |
| `name` | `string` | | Submits each chosen value with the form (hidden inputs), unless disabled |
| `id` | `string` | generated | The input's id (filterable), and the base of the ids: `<id>-label`, `<id>-value`, `<id>-list`, `<id>-opt-<n>`, `<id>-opt-all` |

`MultiSelect.useMultiSelectContext()` returns the `Root`'s state (`value`, `count`, `open`, `text`, `rows`, `allState`, `interactive` …) to any component inside it.

### MultiSelect.Label

A `<span>` with the id `<id>-label`. It names the field and the popup.

| Attribute | When |
|---|---|
| `data-disabled` | `Root` is disabled |

### MultiSelect.Anchor

A `<div>` around the field, the count and the buttons. The popup lines up with it and matches its width. With `filterable`, focus leaving it closes the list and empties the text. No props, no data attributes.

### MultiSelect.Trigger

A `<button type="button" role="combobox">`, for a field that isn't filterable. Its `aria-labelledby` is `<id>-label <id>-value` unless you pass your own. It takes every button prop except `type`, `role` and `disabled`.

| Attribute | When |
|---|---|
| `data-open` | The list is open |
| `data-disabled` | Disabled |
| `data-readonly` | Read-only |
| `data-invalid` | `invalid` is set |
| `data-placeholder` | Nothing is chosen |

### MultiSelect.Value

A `<span>` with the id `<id>-value`: its `children`, else `placeholder`.

| Prop | Type | Default | |
|---|---|---|---|
| `placeholder` | `ReactNode` | | Shown when there are no children |

| Attribute | When |
|---|---|
| `data-placeholder` | Nothing is chosen |

### MultiSelect.Input

Filterable: an `<input type="text" role="combobox" autocomplete="off">` that narrows the list. Its id is `Root`'s `id` and its `aria-labelledby` is `<id>-label`, unless you pass your own. It takes every input prop except `type`, `role`, `value`, `defaultValue`, `disabled` and `readOnly`. It has the same data attributes as `Trigger`.

### MultiSelect.Clear

A `<button type="button">` with `tabIndex={-1}`. A click empties the choice and puts focus in the field. It is disabled while `Root` is disabled or read-only. Give it an `aria-label`.

### MultiSelect.ClearText

Filterable: a `<button type="button">` with `tabIndex={-1}`. A click empties the typed text and puts focus in the input. Give it an `aria-label`.

### MultiSelect.Toggle

Filterable: a `<button type="button">` with `tabIndex={-1}`, `aria-expanded` and `aria-controls`. A click opens or closes the list; focus stays in the input. It is disabled while `Root` is disabled or read-only. Give it an `aria-label`.

| Attribute | When |
|---|---|
| `data-open` | The list is open |

### MultiSelect.Popup

A `<ul role="listbox" aria-multiselectable="true" popover="manual">` in the top layer. Its rows render only while the list is open. A press outside closes it and empties the text.

| Prop | Type | Default | |
|---|---|---|---|
| `children` | `ReactNode \| ((items: ListItem[]) => ReactNode)` | | The rows, or a function of the rows to show |
| `side` | `'bottom' \| 'top'` | `'bottom'` | Where the list opens; it flips when there is no room |

| Attribute | When |
|---|---|
| `data-open` | The list is open |
| `data-side` | `bottom` or `top`: where the list went |

### MultiSelect.SelectAll

An `<li role="option">` with the id `<id>-opt-all`, rendered only while `selectAll` is set, nothing is loading and an enabled option is shown. A click chooses every enabled option shown, or none when all are chosen.

| Attribute | When |
|---|---|
| `data-highlighted` | The keyboard highlight is on it |
| `data-selected` | Every shown option is chosen |
| `data-mixed` | Some are chosen |

### MultiSelect.Option, Group, GroupLabel, GroupOptions

The same parts as in [Headless Dropdown](https://parntengza.github.io/kanok-ui-docs/en/headless-dropdown/#parts): `Option` is an `<li role="option">` with a required `value` and `data-highlighted`, `data-selected` and `data-disabled`. A click on an enabled option toggles it and keeps the list open.

## Keyboard and accessibility

| Key | List closed | List open |
|---|---|---|
| ↓, Enter, Space | Open the list | Enter and Space toggle the highlighted row; the list stays open |
| ↓ / ↑, Page Down / Page Up, Home / End | ↑ does nothing; Home / End open on the first / last row | Move the highlight |
| Letters | Open on the next option that starts with them | Jump to the next option that starts with them |
| Delete, Backspace, Esc | Clear every choice | Esc closes |
| Tab | Moves on | Closes and moves on |

With `filterable`, letters, Space, Home, End, Delete and Backspace edit the text. ↓ or Enter open the list, Enter toggles the highlighted row (or closes with nothing highlighted), and Esc on a closed list clears the choices and the text.

The parts set `role="combobox"`, `aria-haspopup`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `aria-readonly`, `aria-required` and `aria-invalid` on the field, and `aria-multiselectable`, `aria-selected` and `aria-checked="mixed"` on the list. Focus stays on the field.

You add:

- The label text in `Label`.
- `aria-label` on `Clear`, `ClearText` and `Toggle`.
- The count, if you show one, and a check box drawn in each row (hidden from screen readers; `aria-selected` already says it).
- Helper and error text, linked with `aria-describedby` on the field.
- A `role="status"` text for "Loading…", "Searching…" and "No matching items".
