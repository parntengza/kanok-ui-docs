# Headless Truncated text

`TruncatedText` is the behaviour of the styled [Truncated text](https://parntengza.github.io/kanok-ui-docs/en/truncated-text/) as unstyled React parts. `Root` measures whether the text in `Content` is cut at `lines` lines (again whenever the box resizes or the text changes), and `Toggle` ("View more / View less") opens the rest with a short height animation. `Content` gets a CSS variable for your line clamp, and the state shows as `data-*` attributes.

You own the clamp itself (one class), the ellipsis, the tooltip for cut text, the toggle's words and every style.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { TruncatedText } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { TruncatedText } from '@purpurabog/ui/headless';

const note = 'Finance asks for two changes before signing: the payment term should be 30 days after delivery instead of 15, and the price review after six months needs a cap of 5%. Legal has no further comments.';

function ToggleText() {
  const { expanded } = TruncatedText.useTruncatedTextContext();
  return <>{expanded ? 'View less' : 'View more'}</>;
}

export default function Example() {
  return (
    <TruncatedText.Root value={note} lines={2} className="w-80 max-w-full text-sm text-ink">
      <TruncatedText.Content className="overflow-hidden line-clamp-(--truncated-text-lines)" />
      <TruncatedText.Toggle className="cursor-pointer border-0 bg-transparent px-0.5 text-link hover:text-link-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
        <ToggleText />
      </TruncatedText.Toggle>
    </TruncatedText.Root>
  );
}
```

`Content` sets `--truncated-text-lines` to the lines to show, or `none` while open. Tailwind's `line-clamp-(--truncated-text-lines)` turns it into the clamp and the ellipsis.

## Anatomy

```tsx
<TruncatedText.Root value="…">
  <TruncatedText.Content />
  <TruncatedText.Toggle />
</TruncatedText.Root>
```

## Full text in a tooltip

Carbon's other choice: no toggle, and the whole text in a tooltip when it is cut. Read `overflowing` from the context and wrap the text in a button with the headless [Tooltip](https://parntengza.github.io/kanok-ui-docs/en/headless-tooltip/) only then; the tooltip's `label` names the button with the whole text.


React (live React example):

```tsx
import { TruncatedText, Tooltip } from '@purpurabog/ui/headless';

function Text() {
  const { value, overflowing } = TruncatedText.useTruncatedTextContext();
  const content = <TruncatedText.Content className="overflow-hidden line-clamp-(--truncated-text-lines)" />;
  if (!overflowing) return content;
  return (
    <Tooltip.Root label={value}>
      <Tooltip.Trigger className="block">
        <button type="button" className="block w-full cursor-default border-0 bg-transparent p-0 text-start [font:inherit] text-inherit focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          {content}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="w-max max-w-72 rounded-xs bg-inverse-surface-1 px-4 py-0.5 text-sm text-inverse-ink">{value}</Tooltip.Popup>
    </Tooltip.Root>
  );
}

export default function Example() {
  return (
    <div className="grid w-60 max-w-full gap-3 text-sm text-ink">
      <TruncatedText.Root value="CT-2026-0141: Cleaning" lines={1}>
        <Text />
      </TruncatedText.Root>
      <TruncatedText.Root value="CT-2026-0142: Office supplies for the head office and three regional branches" lines={1}>
        <Text />
      </TruncatedText.Root>
    </div>
  );
}
```

## Lines

`lines` (2) is how many lines show before the cut; `0` shows everything and never counts as cut. A text that fits isn't `overflowing`, and `Toggle` renders nothing.


React (live React example):

```tsx
import { TruncatedText } from '@purpurabog/ui/headless';

const scope = 'Supply of A4 paper, toner and stationery for the head office and the three regional branches, delivered monthly from January to December 2026, with a price review after six months.';

function Status() {
  const { overflowing } = TruncatedText.useTruncatedTextContext();
  return <p className="text-xs text-ink-muted">{overflowing ? 'cut' : 'fits'}</p>;
}

export default function Example() {
  return (
    <div className="grid w-80 max-w-full gap-4 text-sm text-ink">
      {[1, 3, 0].map((lines) => (
        <TruncatedText.Root key={lines} value={scope} lines={lines}>
          <TruncatedText.Content className="overflow-hidden line-clamp-(--truncated-text-lines)" />
          <Status />
        </TruncatedText.Root>
      ))}
    </div>
  );
}
```

## Hold the open state

`expanded` with `onExpandedChange` holds the state yourself; `defaultExpanded` only sets the start. `onExpandedChange` fires on a press of `Toggle`. Changing `expanded` yourself opens or closes without the animation, which plays only on a press.


React (live React example):

```tsx
import { useState } from 'react';
import { TruncatedText } from '@purpurabog/ui/headless';

const notes = [
  { id: 'finance', text: 'Finance: the payment term should be 30 days after delivery instead of 15, and the price review after six months needs a cap of 5%. Everything else is fine.' },
  { id: 'legal', text: 'Legal: clause 7.2 (late delivery penalty) should refer to working days, not calendar days. Clause 9 (termination) is fine as written.' },
];

const toggle = 'cursor-pointer border-0 bg-transparent px-0.5 text-link hover:text-link-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
const button = 'h-8 cursor-pointer bg-transparent px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const setAll = (value: boolean) => setOpen(Object.fromEntries(notes.map((n) => [n.id, value])));
  return (
    <div className="grid w-96 max-w-full gap-4 text-sm text-ink">
      <div className="flex gap-2">
        <button type="button" className={button} onClick={() => setAll(true)}>Open all notes</button>
        <button type="button" className={button} onClick={() => setAll(false)}>Close all notes</button>
      </div>
      {notes.map((note) => (
        <TruncatedText.Root key={note.id} value={note.text} expanded={!!open[note.id]} onExpandedChange={(value) => setOpen((o) => ({ ...o, [note.id]: value }))}>
          <TruncatedText.Content className="overflow-hidden line-clamp-(--truncated-text-lines)" />
          <TruncatedText.Toggle className={toggle}>{open[note.id] ? 'View less' : 'View more'}</TruncatedText.Toggle>
        </TruncatedText.Root>
      ))}
      <p className="text-xs text-ink-muted">Open: {JSON.stringify(open)}</p>
    </div>
  );
}
```

## Your own content

`Content` shows `value` unless you give it children. Give children to add markup (a bold label, a link) while `value` stays the plain text, for the tooltip and for measuring again when it changes.


React (live React example):

```tsx
import { TruncatedText } from '@purpurabog/ui/headless';

const text = 'Legal: clause 7.2 (late delivery penalty) should refer to working days, not calendar days. Clause 9 (termination) is fine as written. Please send the revised draft by Friday.';

export default function Example() {
  return (
    <TruncatedText.Root value={text} lines={2} className="w-80 max-w-full text-sm text-ink">
      <TruncatedText.Content className="overflow-hidden line-clamp-(--truncated-text-lines)">
        <strong>Legal:</strong> clause 7.2 (late delivery penalty) should refer to working days, not calendar days. Clause 9 (termination) is fine as written. Please send the revised draft by Friday.
      </TruncatedText.Content>
      <TruncatedText.Toggle className="cursor-pointer border-0 bg-transparent px-0.5 text-link focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
        Read the full note
      </TruncatedText.Toggle>
    </TruncatedText.Root>
  );
}
```

## Style it


React (live React example):

```tsx
import { TruncatedText } from '@purpurabog/ui/headless';

const notes = [
  'Approved by the department head.',
  'Approved with a condition: the vendor must send the delivery schedule before the first order, and finance must see it too.',
];

export default function Example() {
  return (
    <div className="grid w-80 max-w-full gap-4 text-sm text-ink">
      {notes.map((note) => (
        <TruncatedText.Root key={note} value={note} lines={1} className="group data-overflowing:border-s-2 data-overflowing:border-border-interactive data-overflowing:ps-2">
          <TruncatedText.Content className="overflow-hidden line-clamp-(--truncated-text-lines)" />
          <TruncatedText.Toggle className="cursor-pointer border-0 bg-transparent px-0.5 text-link focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <span className="group-data-expanded:hidden">View more</span>
            <span className="hidden group-data-expanded:inline">View less</span>
          </TruncatedText.Toggle>
        </TruncatedText.Root>
      ))}
    </div>
  );
}
```
```css
/* className="note" on Root, "text" on Content */
.text { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: var(--truncated-text-lines); overflow: hidden; }
.note[data-overflowing] { border-inline-start: 2px solid #0f62fe; padding-inline-start: 8px; }
```

## Parts

### TruncatedText.Root

A `<div>`: it holds the state and measures whether the text is cut as the box resizes. It takes every `<div>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | The text (required; measured again when it changes) |
| `lines` | `number` | `2` | Lines shown before the cut; 0 = all |
| `expanded` | `boolean` | | Whether the text shows in full (controlled) |
| `defaultExpanded` | `boolean` | `false` | The start state (uncontrolled) |
| `onExpandedChange` | `(expanded: boolean) => void` | | On a press of `Toggle` |

| Attribute | When |
|---|---|
| `data-overflowing` | The text is cut (kept while open) |
| `data-expanded` | Open |

`TruncatedText.useTruncatedTextContext()` returns `value`, `overflowing`, `expanded`, `closing` (a collapse is animating), `clamp` and `toggle()` to any component inside `Root`.

### TruncatedText.Content

A `<div>` with the text: `value`, or your children. It gets the `id` that `Toggle` points at, and the style `--truncated-text-lines`: the lines, or `none` while open, while a collapse animates, or with `lines` 0. The height animation runs on it (`--ui-duration-moderate`, 110ms; none when that is 0, as with reduced motion).

### TruncatedText.Toggle

A `<button type="button">` with `aria-expanded` and `aria-controls` (the `Content`), rendered only while the text is cut or open. A press opens or closes. It takes every button prop except `type`; give it the words.

| Attribute | When |
|---|---|
| `data-expanded` | Open |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | Moves to `Toggle` (or to your tooltip button) |
| Enter, Space | On `Toggle`: opens or closes the text |

The parts set `aria-expanded` and `aria-controls` on `Toggle`, and keep the toggle out of the page while the text fits.

You add:

- The clamp on `Content` (`line-clamp-(--truncated-text-lines)` with `overflow-hidden`).
- The toggle's words ("View more" / "View less").
- For the tooltip pattern: a button named by the whole text, only while it is cut, so screen readers read all of it.
- A visible focus style.
