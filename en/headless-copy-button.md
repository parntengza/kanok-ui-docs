# Headless Copy button

`Copy` is the behaviour of the styled [Copy button](https://parntengza.github.io/kanok-ui-docs/en/copy-button/) as unstyled React parts. `Root` holds the text and the feedback timer, `Trigger` puts the text on the clipboard and then reports `copied` for two seconds, and `Status` is a polite live region that announces your feedback during that moment. A copy that failed shows no feedback. `Copy.useCopy` gives you the same behaviour as a hook, for a control of your own.

You own the icon, the tooltip, the feedback words and every style. The styled [Code snippet](https://parntengza.github.io/kanok-ui-docs/en/code-snippet/) uses the same parts for its inline chip.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Copy } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Copy } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="flex items-center gap-2 text-sm text-ink">
      <span>RQ-2026-00123</span>
      <Copy.Root text="RQ-2026-00123">
        <Copy.Trigger aria-label="Copy request number" className="grid size-10 cursor-pointer place-items-center bg-surface-1 text-icon-primary hover:bg-ghost-hover active:bg-ghost-active focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
            <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
            <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
          </svg>
        </Copy.Trigger>
        <Copy.Status className="sr-only">Copied!</Copy.Status>
      </Copy.Root>
    </div>
  );
}
```

`Trigger` is a `<button type="button">` with no name of its own: an icon-only trigger needs `aria-label` (or a tooltip that names it, below).

## Anatomy

```tsx
<Copy.Root text="…">
  <Copy.Trigger />
  <Copy.Status />
</Copy.Root>
```

## Show the feedback

For the feedback moment, `Trigger` has `data-copied`. Swap the icon for a check mark with `group-data-copied:`, or read `copied` from `Copy.useCopyContext()` in a component inside `Root`.


React (live React example):

```tsx
import { Copy } from '@purpurabog/ui/headless';

function Label() {
  const { copied } = Copy.useCopyContext();
  return <span className="text-sm">{copied ? 'Copied!' : 'Copy link'}</span>;
}

export default function Example() {
  return (
    <Copy.Root text="https://contracts.example.com/CT-2026-0142">
      <Copy.Trigger className="group inline-flex h-10 cursor-pointer items-center gap-2 bg-surface-1 px-4 text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-copied:text-success">
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current group-data-copied:hidden">
          <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
          <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
        </svg>
        <svg viewBox="0 0 16 16" aria-hidden="true" className="hidden size-4 fill-current group-data-copied:block">
          <path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" />
        </svg>
        <Label />
      </Copy.Trigger>
      <Copy.Status className="sr-only">Link copied</Copy.Status>
    </Copy.Root>
  );
}
```

## Feedback in a tooltip

Carbon shows the label and the feedback in the button's tooltip. Combine `Copy` with the headless [Tooltip](https://parntengza.github.io/kanok-ui-docs/en/headless-tooltip/): the tooltip's `label` names the icon button, and `open` keeps it up while `copied` is true.


React (live React example):

```tsx
import { Copy, Tooltip } from '@purpurabog/ui/headless';

function CopyWithTooltip({ label, feedback }: { label: string; feedback: string }) {
  const { copied } = Copy.useCopyContext();
  const text = copied ? feedback : label;
  return (
    <>
      <Tooltip.Root label={text} placement="bottom" open={copied || undefined}>
        <Tooltip.Trigger className="inline-block">
          <Copy.Trigger className="grid size-10 cursor-pointer place-items-center bg-surface-1 text-icon-primary hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
              <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
              <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
            </svg>
          </Copy.Trigger>
        </Tooltip.Trigger>
        <Tooltip.Popup className="w-max rounded-xs bg-inverse-surface-1 px-4 py-0.5 text-sm text-inverse-ink">{text}</Tooltip.Popup>
      </Tooltip.Root>
      <Copy.Status className="sr-only">{feedback}</Copy.Status>
    </>
  );
}

export default function Example() {
  return (
    <div className="flex items-center gap-2 text-sm text-ink">
      <span>0105556012345</span>
      <Copy.Root text="0105556012345">
        <CopyWithTooltip label="Copy tax ID" feedback="Tax ID copied" />
      </Copy.Root>
    </div>
  );
}
```

## Feedback time

`feedbackTimeout` on `Root` is how long `copied` stays true, in ms (2000). A second press starts the time over.


React (live React example):

```tsx
import { Copy } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Copy.Root text="CT-2026-0142" feedbackTimeout={5000}>
      <Copy.Trigger className="h-10 cursor-pointer bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-copied:bg-layer-selected-1">
        Copy CT-2026-0142
      </Copy.Trigger>
      <Copy.Status className="ms-3 text-sm text-ink-muted">Copied, for 5 seconds</Copy.Status>
    </Copy.Root>
  );
}
```

The `Status` here is visible: its text is there only during the moment, so it doubles as the visible feedback.

## Copy it yourself

`onCopy` on `Root` runs before the copy with the text. Return `false` to copy something else yourself; the feedback still shows. Return nothing to let the part copy as usual (use it to record the copy).


React (live React example):

```tsx
import { useState } from 'react';
import { Copy } from '@purpurabog/ui/headless';

export default function Example() {
  const [copiedText, setCopiedText] = useState('');
  return (
    <div className="grid justify-items-start gap-3">
      <Copy.Root
        text="CT-2026-0142"
        onCopy={(text) => {
          const summary = `${text}: Office supplies, 120,000 THB, Procurement`;
          navigator.clipboard?.writeText(summary).catch(() => {});
          setCopiedText(summary);
          return false;
        }}
      >
        <Copy.Trigger className="h-10 cursor-pointer bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          Copy contract summary
        </Copy.Trigger>
        <Copy.Status className="sr-only">Summary copied</Copy.Status>
      </Copy.Root>
      <p className="text-xs text-ink-muted">Copied: {copiedText}</p>
    </div>
  );
}
```

## Disabled

`disabled` on `Trigger` disables the button: no focus, no copy. With `focusableWhenDisabled` it stays a Tab stop with `aria-disabled` and copies nothing, as Carbon's inline code snippet does, so people can still reach it and read why. Both set `data-disabled`.


React (live React example):

```tsx
import { Copy } from '@purpurabog/ui/headless';

const button = 'h-10 cursor-pointer bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:bg-surface-1 data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <Copy.Root text="">
        <Copy.Trigger disabled className={button}>Copy (disabled)</Copy.Trigger>
      </Copy.Root>
      <Copy.Root text="ak_live_7f3c9a1e">
        <Copy.Trigger disabled focusableWhenDisabled className={button}>Copy API key (focusable)</Copy.Trigger>
      </Copy.Root>
    </div>
  );
}
```

## Just the hook

`Copy.useCopy(text, { onCopy, feedbackTimeout })` returns `{ copied, copy }` without any part. Use it when the copy control is something else: a menu item, a link-styled button, a keyboard shortcut. Add your own live region.


React (live React example):

```tsx
import { Copy } from '@purpurabog/ui/headless';

export default function Example() {
  const { copied, copy } = Copy.useCopy('finance@example.com', { feedbackTimeout: 3000 });
  return (
    <p className="text-sm text-ink">
      Questions? Write to finance@example.com{' '}
      <button type="button" onClick={() => void copy()} className="cursor-pointer border-0 bg-transparent p-0 text-link underline hover:text-link-hover focus-visible:outline-2 focus-visible:outline-focus">
        {copied ? 'copied' : 'copy address'}
      </button>
      <span role="status" className="sr-only">{copied ? 'Email address copied' : ''}</span>
    </p>
  );
}
```

## Style it


React (live React example):

```tsx
import { Copy } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {['md', 'sm'].map((size) => (
        <Copy.Root key={size} text="RQ-2026-00123">
          <Copy.Trigger
            aria-label="Copy request number"
            className={`group grid cursor-pointer place-items-center bg-surface-1 text-icon-primary hover:bg-ghost-hover active:bg-ghost-active focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-copied:text-success data-disabled:cursor-not-allowed data-disabled:text-icon-disabled ${size === 'sm' ? 'size-8' : 'size-10'}`}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current group-data-copied:hidden">
              <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
              <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
            </svg>
            <svg viewBox="0 0 16 16" aria-hidden="true" className="hidden size-4 fill-current group-data-copied:block">
              <path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" />
            </svg>
          </Copy.Trigger>
          <Copy.Status className="sr-only">Copied!</Copy.Status>
        </Copy.Root>
      ))}
    </div>
  );
}
```
```css
/* className="copy" on Trigger */
.copy { display: grid; place-items: center; width: 40px; height: 40px; border: 0; background: #f4f4f4; cursor: pointer; }
.copy:hover { background: #e8e8e8; }
.copy:focus-visible { outline: 2px solid #0f62fe; outline-offset: -2px; }
.copy[data-copied] { color: #24a148; }
.copy[data-disabled] { color: #c6c6c6; cursor: not-allowed; }
```

## Parts

### Copy.Root

Renders only its children: it holds the text and the feedback timer, which stops with the component.

| Prop | Type | Default | |
|---|---|---|---|
| `text` | `string` | | What gets copied (required) |
| `onCopy` | `(text: string) => boolean \| void` | | Before copying; return `false` to copy it yourself (the feedback still shows) |
| `feedbackTimeout` | `number` | `2000` | How long `copied` stays true, in ms |

`Copy.useCopyContext()` returns `text`, `copied` and `copy()` to any component inside `Root`.

### Copy.Trigger

A `<button type="button">`; a press copies unless it is disabled. It takes every button prop except `type`.

| Prop | Type | Default | |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Copies nothing; the native `disabled` unless `focusableWhenDisabled` |
| `focusableWhenDisabled` | `boolean` | `false` | Disabled but still a Tab stop, with `aria-disabled` |

| Attribute | When |
|---|---|
| `data-copied` | In the feedback moment after a copy |
| `data-disabled` | Disabled |

### Copy.Status

A `<span role="status">`, a polite live region. Its children (your feedback) render only during the moment after a copy, so screen readers announce them once. Hide it with `sr-only`, or let it be the visible feedback.

### Copy.useCopy

`useCopy(text, { onCopy?, feedbackTimeout? })` returns `{ copied, copy }`: `copy()` copies (unless `onCopy` returns `false`) and sets `copied` for `feedbackTimeout` ms. `Root` uses it.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Enter, Space | On `Trigger`: copies |
| Tab | Moves to the next control (a `focusableWhenDisabled` trigger stays in the order) |

The parts give you a real button and a polite live region that speaks only after a successful copy. The copy falls back to `document.execCommand('copy')` where the Clipboard API isn't available (a plain-http intranet page).

You add:

- A name for an icon-only `Trigger`: `aria-label`, or the headless Tooltip's `label`.
- The feedback words inside `Status` ("Copied!", "Link copied").
- A visible feedback for sighted users: the `data-copied` style, a tooltip, or a visible `Status`.
- A visible focus style.
