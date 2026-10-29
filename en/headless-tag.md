# Headless Tag

`Tag` is the behaviour of the styled [Tag](https://parntengza.github.io/kanok-ui-docs/en/tag/) as three unstyled React parts. `Tag.Root` is a read-only or dismissible tag (a `<span>`). `Tag.Dismiss` is its close button: a press calls `onDismiss` and doesn't reach a click handler around the tag. `Tag.Toggle` is a selectable tag: a `<button aria-pressed>` that flips on a press, Space or Enter. An operational tag is a plain `<button>`, so it needs no part.

You own the markup and every style: the colours, the size, the icon, the ellipsis. The tag stays until you remove it from your state.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Tag } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Tag } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Tag.Root className="inline-flex h-6 items-center rounded-full bg-tag-background-green px-2 text-xs text-tag-color-green">
      Signed
    </Tag.Root>
  );
}
```

## Anatomy

```tsx
<Tag.Root>
  <Tag.Dismiss />
</Tag.Root>

<Tag.Toggle />
```

## Dismissible

Put `Tag.Dismiss` inside `Tag.Root` and remove the tag in `onDismiss`. Name the button with `aria-label`, different for each tag. When the removed tag had focus, move focus to the next tag yourself.


React (live React example):

```tsx
import { useRef, useState } from 'react';
import { Tag } from '@purpurabog/ui/headless';

export default function Example() {
  const [filters, setFilters] = useState(['Sales', 'Legal', 'Signed in 2026']);
  const row = useRef<HTMLDivElement>(null);
  const remove = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
    // after React removes it, focus the close button now at the same place (or the last one)
    requestAnimationFrame(() => {
      const buttons = row.current?.querySelectorAll('button');
      buttons?.[Math.min(index, buttons.length - 1)]?.focus();
    });
  };
  return (
    <div className="grid gap-2">
      <div ref={row} className="flex flex-wrap items-center gap-2">
        {filters.map((filter, index) => (
          <Tag.Root key={filter} className="inline-flex h-6 items-center rounded-full bg-tag-background-blue ps-2 text-xs text-tag-color-blue">
            {filter}
            <Tag.Dismiss
              aria-label={`Remove filter ${filter}`}
              onDismiss={() => remove(index)}
              className="ms-0.5 flex size-6 items-center justify-center rounded-full hover:bg-tag-hover-blue focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
            >
              <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
              </svg>
            </Tag.Dismiss>
          </Tag.Root>
        ))}
      </div>
      <p className="text-xs text-ink-muted">Filters: {filters.join(', ') || 'none'}</p>
    </div>
  );
}
```

## Selectable

`Tag.Toggle` keeps its own state with `defaultSelected`, or follows `selected` when you control it. `onSelectedChange` gets the new state after each press.


React (live React example):

```tsx
import { useState } from 'react';
import { Tag } from '@purpurabog/ui/headless';

const departments = ['Sales', 'Legal', 'Finance', 'Human resources'];

export default function Example() {
  const [shown, setShown] = useState<string[]>(['Sales']);
  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap items-center gap-2">
        {departments.map((dept) => (
          <Tag.Toggle
            key={dept}
            selected={shown.includes(dept)}
            onSelectedChange={(on) => setShown(on ? [...shown, dept] : shown.filter((d) => d !== dept))}
            className="inline-flex h-6 items-center rounded-full border border-border-inverse bg-layer-1 px-2 text-xs text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink"
          >
            {dept}
          </Tag.Toggle>
        ))}
      </div>
      <p className="text-xs text-ink-muted">Showing: {shown.join(', ') || 'every department'}</p>
    </div>
  );
}
```

## Operational

An operational tag is your own `<button type="button">` drawn as a tag. When it shows or hides something, give it `aria-expanded` (and `aria-controls`); when its text is only a number, name it with `aria-label`.


React (live React example):

```tsx
import { useId, useState } from 'react';
import { Tag } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const listId = useId();
  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <Tag.Root className="inline-flex h-6 items-center rounded-full bg-tag-background-blue px-2 text-xs text-tag-color-blue">Sales</Tag.Root>
        <Tag.Root className="inline-flex h-6 items-center rounded-full bg-tag-background-blue px-2 text-xs text-tag-color-blue">Legal</Tag.Root>
        <button
          type="button"
          aria-label="3 more departments"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(!open)}
          className="inline-flex h-6 items-center rounded-full border border-tag-border-blue bg-tag-background-blue px-2 text-xs text-tag-color-blue hover:bg-tag-hover-blue focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus"
        >
          +3
        </button>
      </div>
      <p id={listId} hidden={!open} className="text-sm text-ink">
        Finance, Procurement, Human resources
      </p>
    </div>
  );
}
```

## Disabled

`disabled` on `Tag.Root` disables its `Tag.Dismiss` too (a `disabled` of its own on `Dismiss` wins). `Tag.Toggle` takes `disabled` like any button. Each part then has `data-disabled`.


React (live React example):

```tsx
import { Tag } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag.Root disabled className="inline-flex h-6 items-center rounded-full bg-tag-background-blue ps-2 text-xs text-tag-color-blue data-disabled:bg-layer-1 data-disabled:text-ink-disabled">
        Legal
        <Tag.Dismiss aria-label="Remove filter Legal" className="ms-0.5 flex size-6 items-center justify-center rounded-full data-disabled:cursor-not-allowed">
          <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
            <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
          </svg>
        </Tag.Dismiss>
      </Tag.Root>
      <Tag.Toggle disabled defaultSelected className="inline-flex h-6 items-center rounded-full border border-border-inverse px-2 text-xs data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink data-disabled:cursor-not-allowed data-disabled:border-ink-disabled data-disabled:bg-layer-1 data-disabled:text-ink-disabled">
        Finance
      </Tag.Toggle>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Tag } from '@purpurabog/ui/headless';

export default function Example() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Tag.Root disabled={disabled} className="inline-flex h-6 max-w-52 items-center rounded-full bg-tag-background-purple ps-2 text-xs text-tag-color-purple data-disabled:bg-layer-1 data-disabled:text-ink-disabled">
          <span className="truncate">Procurement and supplier management</span>
          <Tag.Dismiss aria-label="Remove Procurement" className="ms-0.5 flex size-6 shrink-0 items-center justify-center rounded-full hover:bg-tag-hover-purple focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:hover:bg-transparent">
            <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
              <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
          </Tag.Dismiss>
        </Tag.Root>
        <Tag.Toggle disabled={disabled} className="inline-flex h-6 items-center rounded-full border border-border-inverse bg-layer-1 px-2 text-xs text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-selected:bg-layer-selected-inverse data-selected:text-inverse-ink data-disabled:cursor-not-allowed data-disabled:border-ink-disabled data-disabled:text-ink-disabled">
          Selectable
        </Tag.Toggle>
      </div>
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
        disabled
      </label>
    </div>
  );
}
```
```css
.tag { display: inline-flex; align-items: center; height: 24px; border-radius: 16px; background: #d0e2ff; color: #0043ce; }
.tag[data-disabled] { background: #f4f4f4; color: #8d8d8d; }
.tag-toggle[data-selected] { background: #393939; color: #fff; }
.tag-toggle[data-disabled] { cursor: not-allowed; }
```

## Parts

### Tag.Root

A `<span>`, the tag itself. It takes every `<span>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables its `Tag.Dismiss` too |

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` is set |

### Tag.Dismiss

A `<button type="button">`, the close button. It takes every button prop except `type`. Its press stops there: a click handler around the tag doesn't see it.

| Prop | Type | Default | |
|---|---|---|---|
| `onDismiss` | `() => void` | — | After a press, not while disabled |
| `disabled` | `boolean` | the root's | Its own state; left out, it follows `Tag.Root` |

| Attribute | When |
|---|---|
| `data-disabled` | Disabled, by itself or through `Tag.Root` |

### Tag.Toggle

A `<button type="button">` with `aria-pressed`, the selectable tag. It takes every button prop except `type` and `aria-pressed`.

| Prop | Type | Default | |
|---|---|---|---|
| `selected` | `boolean` | — | The state (controlled) |
| `defaultSelected` | `boolean` | `false` | The starting state (uncontrolled) |
| `onSelectedChange` | `(selected: boolean, event: MouseEvent<HTMLButtonElement>) => void` | — | After the user flips it |

| Attribute | When |
|---|---|
| `data-selected` | On |
| `data-disabled` | `disabled` is set |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | Moves to a close button or a selectable tag. `Tag.Root` itself isn't a tab stop. |
| Enter, Space | Presses the close button, or flips a selectable tag |

The parts set `type="button"`, `aria-pressed` on `Tag.Toggle`, and the native `disabled`.

You add:

- A name on each `Tag.Dismiss`, for example `aria-label="Remove filter Legal"`.
- Focus after a removal: the removed button takes the focus with it.
- `aria-label` on an operational tag whose text is only a number, and `aria-expanded` when it shows or hides something.
- The full text in `title` when you cut a long tag with an ellipsis.
- A visible focus style.
