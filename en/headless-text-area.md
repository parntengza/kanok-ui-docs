# Headless Text area

`TextArea` is the behaviour of the styled [Text area](https://parntengza.github.io/kanok-ui-docs/en/text-area/) as unstyled React parts: a `<textarea>` that can grow with its text, and a soft character or word counter. An uncontrolled area, and its counter, go back to `defaultValue` when its form resets.

You own the markup: the label, the helper and error text, the messages for a count that is near or over the limit, and every style. The parts set `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { TextArea } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { TextArea } from '@purpurabog/ui/headless';

export default function Example() {
  const [notes, setNotes] = useState('');
  return (
    <div className="grid max-w-sm gap-2">
      <TextArea.Root value={notes}>
        <label htmlFor="notes" className="text-xs text-ink-muted">Notes</label>
        <TextArea.Input
          id="notes"
          name="notes"
          onChange={(e) => setNotes(e.target.value)}
          className="border-b border-border-strong-1 bg-field-1 px-4 py-3 text-sm leading-5 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
      </TextArea.Root>
      <p className="whitespace-pre-wrap text-xs text-ink-muted">Value: {notes}</p>
    </div>
  );
}
```

`value` and `defaultValue` go on `Root`, not on `Input`.

## Anatomy

```tsx
<TextArea.Root>
  <TextArea.Counter />
  <TextArea.Input />
</TextArea.Root>
```

## Label and helper text

The label and the message line are your own elements. Tie them to the text area with `htmlFor` and `aria-describedby`.


React (live React example):

```tsx
import { TextArea } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-sm gap-2">
      <TextArea.Root>
        <label htmlFor="legal-notes" className="text-xs text-ink-muted">Notes</label>
        <TextArea.Input
          id="legal-notes"
          name="notes"
          rows={4}
          aria-describedby="legal-notes-help"
          className="border-b border-border-strong-1 bg-field-1 px-4 py-3 text-sm leading-5 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
        <p id="legal-notes-help" className="text-xs text-ink-helper">Anything the legal team should know</p>
      </TextArea.Root>
    </div>
  );
}
```

## Height and auto-grow

`rows` is the native attribute: the starting height in lines. `autoGrow` on `Input` starts at `rows` and grows a line at a time with the text. `maxRows` caps it; past that, the text area scrolls. It is fitted again after each render and when its width changes.


React (live React example):

```tsx
import { TextArea } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-sm gap-2">
      <TextArea.Root>
        <label htmlFor="description" className="text-xs text-ink-muted">Description</label>
        <TextArea.Input
          id="description"
          name="description"
          rows={2}
          autoGrow
          maxRows={6}
          className="resize-none border-b border-border-strong-1 bg-field-1 px-4 py-3 text-sm leading-5 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
      </TextArea.Root>
    </div>
  );
}
```

- `autoGrow` sets the `height` and `overflow-y` inline styles. The resize handle is yours: set `resize: none` if you don't want it.
- `maxRows` is measured from the computed `line-height`, so give the text area a line-height other than `normal`.

## Count characters or words

`maxCount` on `Root` turns the counter on. It's a soft limit: typing past it isn't blocked. Past the limit, `Input` and `Counter` get `data-over`; in the last 10% before it, `Counter` gets `data-near`.

`counterMode="word"` counts words instead. Words are counted by the browser's word segmenter for `lang` (`en` by default), so Thai words count whole. Numbers don't count as words.


React (live React example):

```tsx
import { TextArea } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-sm gap-2">
      {/* Counter shows "12/50"; data-near and data-over to style on */}
      <TextArea.Root maxCount={50} counterMode="word" lang="th">
        <div className="flex justify-between text-xs text-ink-muted">
          <label htmlFor="summary">Summary</label>
          <TextArea.Counter aria-hidden="true" className="data-near:font-semibold data-near:text-ink data-over:text-error-text" />
        </div>
        <TextArea.Input
          id="summary"
          name="summary"
          className="border-b border-border-strong-1 bg-field-1 px-4 py-3 text-sm leading-5 text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-over:outline-2 data-over:-outline-offset-2 data-over:outline-error"
        />
      </TextArea.Root>
    </div>
  );
}
```

The counter only counts: the near and over messages, and what screen readers hear, are yours. For a hard limit that stops typing, use the native `maxLength`.

## Style it


React (live React example):

```tsx
import { TextArea } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-sm gap-2">
      <TextArea.Root maxCount={40}>
        <div className="flex justify-between text-xs text-ink-muted">
          <label htmlFor="style-notes">Notes</label>
          <TextArea.Counter aria-hidden="true" className="data-near:font-semibold data-near:text-ink data-over:text-error-text" />
        </div>
        <TextArea.Input
          id="style-notes"
          autoGrow
          maxRows={8}
          className="w-full resize-none border-b border-border-strong-1 bg-field-1 px-4 py-3 text-sm leading-5 text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-over:outline-2 data-over:-outline-offset-2 data-over:outline-error"
        />
      </TextArea.Root>
    </div>
  );
}
```
```css
textarea { line-height: 1.25rem; resize: none; }
textarea[data-over] { outline: 2px solid #da1e28; }
.counter[data-near] { color: #8e6a00; }
.counter[data-over] { color: #da1e28; }
```

## Parts

### TextArea.Root

Renders no element; it holds the text for the counter.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string \| number \| readonly string[]` | — | The text (controlled). |
| `defaultValue` | `string \| number \| readonly string[]` | — | The starting text (uncontrolled). |
| `maxCount` | `number` | — | Soft limit of the counter. Without it, there is no counter. |
| `counterMode` | `'character' \| 'word'` | `'character'` | What `maxCount` counts. |
| `lang` | `string` | `'en'` | BCP 47 language the words are counted in. |

### TextArea.Input

Renders a `<textarea>`. It takes every `<textarea>` prop except `value` and `defaultValue`, which come from `Root`.

| Prop | Type | Default | |
|---|---|---|---|
| `autoGrow` | `boolean` | `false` | Grows with the text from `rows`. |
| `maxRows` | `number` | — (no cap) | The most lines `autoGrow` shows before it scrolls. |

| Attribute | When |
|---|---|
| `data-over` | The count is past `maxCount` |

### TextArea.Counter

Renders a `<span>` with `length/maxCount` (`12/100`), or your children instead. It renders nothing without `maxCount`. It adds no props.

| Attribute | When |
|---|---|
| `data-over` | The count is past `maxCount` |
| `data-near` | The count is in the last 10% before `maxCount`, and not past it |

### TextArea.useTextAreaContext()

Returns the state of the enclosing `Root`: `length`, `maxCount`, `over` and `near`. Use it to write your own counter text or message.

## Keyboard and accessibility

- `Input` is a native `<textarea>`: Enter types a new line and never submits the form.
- You add the `<label>`, the `aria-describedby` to the helper or error text, and `aria-invalid` when the text is too long.
- Hide the counter from screen readers (`aria-hidden="true"`) and announce the limit yourself, for example once in a live region when `near` or `over` turns on, not on every keystroke.
