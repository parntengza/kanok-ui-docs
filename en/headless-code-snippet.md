# Headless Code snippet

`CodeSnippet` is the behaviour of the styled [Code snippet](https://parntengza.github.io/kanok-ui-docs/en/code-snippet/) as unstyled React parts. `Code` is the `<code>` whose text, read back after each render, is what gets copied (unless you give `text`). For a multi-line snippet, `Content` holds the code between Carbon's row limits (16px rows, 15 shown while collapsed) and measures it as it resizes, and `Toggle` ("Show more / Show less") is there only while the code is taller than the collapsed limit.

The copy itself is the headless [Copy button](https://parntengza.github.io/kanok-ui-docs/en/headless-copy-button/): pass the context's `copyText` to a `Copy.Root`. You own the box, the copy icon, the tooltip, the button words and every style.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { CodeSnippet, Copy } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { CodeSnippet, Copy } from '@purpurabog/ui/headless';

function CopyCode() {
  const { copyText } = CodeSnippet.useCodeSnippetContext();
  return (
    <Copy.Root text={copyText}>
      <Copy.Trigger aria-label="Copy to clipboard" className="grid size-10 shrink-0 cursor-pointer place-items-center bg-surface-1 text-icon-primary hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-copied:text-success">
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
          <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
          <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
        </svg>
      </Copy.Trigger>
      <Copy.Status className="sr-only">Copied!</Copy.Status>
    </Copy.Root>
  );
}

export default function Example() {
  return (
    <CodeSnippet.Root>
      <div className="flex h-10 max-w-3xl items-center bg-surface-1">
        <div role="textbox" aria-readonly="true" aria-label="Install command" tabIndex={0} className="flex h-full grow items-center overflow-x-auto ps-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          <pre className="m-0 type-code whitespace-pre text-ink">
            <CodeSnippet.Code>npm install @purpurabog/ui</CodeSnippet.Code>
          </pre>
        </div>
        <CopyCode />
      </div>
    </CodeSnippet.Root>
  );
}
```

`Root` renders only its children. The read-only textbox around the code (`role="textbox"`, `aria-readonly`, `tabIndex={0}`) is yours, as in Carbon: it lets keyboard users reach and scroll the code.

## Anatomy

```tsx
<CodeSnippet.Root>
  <CodeSnippet.Content>
    <pre>
      <CodeSnippet.Code />
    </pre>
  </CodeSnippet.Content>
  <CodeSnippet.Toggle />
</CodeSnippet.Root>
```

A single-line or inline snippet needs only `Root` and `Code`.

## Multi-line with Show more

Wrap the code in `Content`: it sets its own `max-height` and `min-height` from the row limits, so give it `overflow-y-auto`. `Toggle` appears once the code is taller than 15 rows; give the code a 16px line height (`type-code`) so the rows line up.


React (live React example):

```tsx
import { CodeSnippet } from '@purpurabog/ui/headless';

const contract = `{
  "contract": "CT-2026-0142",
  "title": "Office supplies, FY2026",
  "department": "Procurement",
  "vendor": {
    "name": "Siam Office Co., Ltd.",
    "taxId": "0105556012345"
  },
  "amount": 120000,
  "currency": "THB",
  "startDate": "2026-01-01",
  "endDate": "2026-12-31",
  "approvers": [
    { "step": 1, "role": "Department head" },
    { "step": 2, "role": "Finance" },
    { "step": 3, "role": "Legal" }
  ],
  "status": "awaiting-signature",
  "attachments": ["quotation.pdf", "terms.pdf"]
}`;

function ToggleText() {
  const { expanded } = CodeSnippet.useCodeSnippetContext();
  return <>{expanded ? 'Show less' : 'Show more'}</>;
}

export default function Example() {
  return (
    <CodeSnippet.Root>
      <div className="relative max-w-3xl bg-surface-1 p-4">
        <CodeSnippet.Content className="overflow-y-auto transition-[max-height] duration-150 data-expanded:pb-4">
          <pre tabIndex={0} role="textbox" aria-readonly="true" aria-multiline="true" aria-label="Contract JSON" className="m-0 type-code whitespace-pre text-ink focus-visible:outline-2 focus-visible:outline-focus">
            <CodeSnippet.Code>{contract}</CodeSnippet.Code>
          </pre>
        </CodeSnippet.Content>
        <CodeSnippet.Toggle className="group absolute end-0 bottom-0 inline-flex h-8 cursor-pointer items-center gap-2 bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          <ToggleText />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-icon-primary transition-transform group-data-expanded:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </CodeSnippet.Toggle>
      </div>
    </CodeSnippet.Root>
  );
}
```

## Hold the open state

`expanded` with `onExpandedChange` holds the state yourself; `defaultExpanded` only sets the start. `onExpandedChange` fires on each press of `Toggle`, and when an open snippet folds back by itself (its code got no taller than `minExpandedRows`).


React (live React example):

```tsx
import { useState } from 'react';
import { CodeSnippet } from '@purpurabog/ui/headless';

const env = Array.from({ length: 24 }, (_, i) => `SETTING_${String(i + 1).padStart(2, '0')}=value-${i + 1}`).join('\n');

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid max-w-3xl gap-3">
      <CodeSnippet.Root expanded={open} onExpandedChange={setOpen}>
        <div className="relative bg-surface-1 p-4">
          <CodeSnippet.Content className="overflow-y-auto data-expanded:pb-4">
            <pre className="m-0 type-code whitespace-pre text-ink">
              <CodeSnippet.Code>{env}</CodeSnippet.Code>
            </pre>
          </CodeSnippet.Content>
          <CodeSnippet.Toggle className="absolute end-0 bottom-0 h-8 cursor-pointer bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            {open ? 'Show the start only' : 'Show the whole file'}
          </CodeSnippet.Toggle>
        </div>
      </CodeSnippet.Root>
      <p className="text-xs text-ink-muted">Expanded: {String(open)}</p>
    </div>
  );
}
```

## Row limits

`maxCollapsedRows` (15) and `maxExpandedRows` (0, no limit) cap the height in 16px rows; `minCollapsedRows` (3) and `minExpandedRows` (16) set a minimum. `Toggle` shows only when the code is taller than the collapsed limit and expanding would show more. Lower `minExpandedRows` with the collapsed limit, or an open snippet of short code folds back when it is measured again.


React (live React example):

```tsx
import { CodeSnippet } from '@purpurabog/ui/headless';

const query = `SELECT c.id, c.title, c.amount, d.name AS department
FROM contracts c
JOIN departments d ON d.id = c.department_id
JOIN vendors v ON v.id = c.vendor_id
WHERE c.status = 'awaiting-signature'
  AND c.amount >= 100000
  AND c.start_date >= DATE '2026-01-01'
  AND d.code IN ('PROC', 'LEGAL', 'FIN')
  AND v.blacklisted = false
GROUP BY c.id, d.name
HAVING count(*) > 0
ORDER BY c.amount DESC
LIMIT 50;`;

export default function Example() {
  return (
    <CodeSnippet.Root maxCollapsedRows={4} maxExpandedRows={8} minExpandedRows={0}>
      <div className="relative max-w-3xl bg-surface-1 p-4">
        <CodeSnippet.Content className="overflow-y-auto data-expanded:pb-4">
          <pre className="m-0 type-code whitespace-pre text-ink">
            <CodeSnippet.Code>{query}</CodeSnippet.Code>
          </pre>
        </CodeSnippet.Content>
        <CodeSnippet.Toggle className="absolute end-0 bottom-0 h-8 cursor-pointer bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-expanded:hidden">
          Show more
        </CodeSnippet.Toggle>
      </div>
    </CodeSnippet.Root>
  );
}
```

Here `Toggle` hides itself once open (`data-expanded:hidden`): the open block scrolls after 8 rows.

## Copy something else

`text` on `Root` replaces the code as `copyText`: show a short or safe form, copy the full one.


React (live React example):

```tsx
import { CodeSnippet, Copy } from '@purpurabog/ui/headless';

function CopyCode() {
  const { copyText } = CodeSnippet.useCodeSnippetContext();
  return (
    <Copy.Root text={copyText}>
      <Copy.Trigger aria-label="Copy request with token" className="grid size-10 shrink-0 cursor-pointer place-items-center bg-surface-1 text-icon-primary hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-copied:text-success">
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
          <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
          <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
        </svg>
      </Copy.Trigger>
      <Copy.Status className="sr-only">Copied with the token</Copy.Status>
    </Copy.Root>
  );
}

export default function Example() {
  const token = '7f3c9a1e5b2d';
  return (
    <CodeSnippet.Root text={`curl -H 'Authorization: Bearer ${token}' https://api.example.com/contracts/CT-2026-0142`}>
      <div className="flex h-10 max-w-3xl items-center bg-surface-1">
        <div className="flex h-full grow items-center overflow-x-auto ps-4">
          <pre className="m-0 type-code whitespace-pre text-ink">
            <CodeSnippet.Code>curl -H 'Authorization: Bearer ••••••' https://api.example.com/contracts/CT-2026-0142</CodeSnippet.Code>
          </pre>
        </div>
        <CopyCode />
      </div>
    </CodeSnippet.Root>
  );
}
```

## Inline chip

For an inline snippet, the code is the copy button: put `Code` inside `Copy.Trigger`. The button is then named by its code, so people hear what they would copy.


React (live React example):

```tsx
import { CodeSnippet, Copy } from '@purpurabog/ui/headless';

function Chip() {
  const { copyText } = CodeSnippet.useCodeSnippetContext();
  return (
    <Copy.Root text={copyText}>
      <Copy.Trigger className="inline cursor-pointer rounded-sm border border-transparent bg-surface-1 px-0 text-ink hover:bg-ghost-hover focus-visible:border-focus focus-visible:outline-none data-copied:bg-layer-selected-1">
        <CodeSnippet.Code className="px-2 type-code whitespace-pre">CC-4410-PROC</CodeSnippet.Code>
      </Copy.Trigger>
      <Copy.Status className="sr-only">Copied!</Copy.Status>
    </Copy.Root>
  );
}

export default function Example() {
  return (
    <p className="text-sm text-ink">
      Use the cost centre{' '}
      <CodeSnippet.Root>
        <Chip />
      </CodeSnippet.Root>{' '}
      for office supplies.
    </p>
  );
}
```

## Style it


React (live React example):

```tsx
import { CodeSnippet, Copy } from '@purpurabog/ui/headless';

const log = Array.from({ length: 20 }, (_, i) => `2026-03-14 09:${String(10 + i).padStart(2, '0')}:00 INFO approval.service step ${i + 1} done for CT-2026-0142`).join('\n');

function Parts() {
  const { copyText, expanded } = CodeSnippet.useCodeSnippetContext();
  return (
    <div className="relative max-w-3xl bg-surface-1 p-4">
      <CodeSnippet.Content className="overflow-y-auto transition-[max-height] duration-150 data-expanded:pb-4">
        <pre tabIndex={0} role="textbox" aria-readonly="true" aria-multiline="true" aria-label="Approval log" className="m-0 pe-10 type-code whitespace-pre text-ink focus-visible:outline-2 focus-visible:outline-focus">
          <CodeSnippet.Code>{log}</CodeSnippet.Code>
        </pre>
      </CodeSnippet.Content>
      <Copy.Root text={copyText}>
        <Copy.Trigger aria-label="Copy log" className="group absolute end-2 top-2 grid size-8 cursor-pointer place-items-center bg-surface-1 text-icon-primary hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current group-data-copied:hidden">
            <path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
            <path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" />
          </svg>
          <svg viewBox="0 0 16 16" aria-hidden="true" className="hidden size-4 fill-success group-data-copied:block">
            <path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" />
          </svg>
        </Copy.Trigger>
        <Copy.Status className="sr-only">Copied!</Copy.Status>
      </Copy.Root>
      <CodeSnippet.Toggle className="group absolute end-0 bottom-0 inline-flex h-8 cursor-pointer items-center gap-2 bg-surface-1 px-4 text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
        {expanded ? 'Show less' : 'Show more'}
        <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-icon-primary transition-transform group-data-expanded:rotate-180">
          <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
        </svg>
      </CodeSnippet.Toggle>
    </div>
  );
}

export default function Example() {
  return (
    <CodeSnippet.Root>
      <Parts />
    </CodeSnippet.Root>
  );
}
```
```css
/* className="content" on Content, "toggle" on Toggle */
.content { overflow-y: auto; transition: max-height 150ms; }
.content[data-expanded] { padding-bottom: 16px; }
.toggle { position: absolute; inset-inline-end: 0; inset-block-end: 0; height: 32px; padding: 0 16px; border: 0; background: #f4f4f4; }
.toggle[data-expanded] svg { rotate: 180deg; }
```

## Parts

### CodeSnippet.Root

Renders only its children: it holds the expanded state, the row limits and the code's text.

| Prop | Type | Default | |
|---|---|---|---|
| `text` | `string` | `''` | What gets copied instead of the code shown |
| `expanded` | `boolean` | | Showing every row (controlled) |
| `defaultExpanded` | `boolean` | `false` | The start state (uncontrolled) |
| `onExpandedChange` | `(expanded: boolean) => void` | | Each press of `Toggle`, and the fold back |
| `maxCollapsedRows` | `number` | `15` | 16px rows shown while collapsed; 0 = no limit |
| `maxExpandedRows` | `number` | `0` | Rows shown while expanded; 0 = no limit |
| `minCollapsedRows` | `number` | `3` | Minimum rows while collapsed |
| `minExpandedRows` | `number` | `16` | Minimum rows while expanded; an open snippet whose code is no taller folds back |

`CodeSnippet.useCodeSnippetContext()` returns, among others, `copyText` (`text`, else the code's text with one leading line break dropped, as `<pre>` does), `expanded`, `canExpand` (the `Toggle` shows) and `setExpanded()`.

### CodeSnippet.Code

A `<code>`. Its text is read back after every render, so its children can be any elements (for example syntax colours); that text is the `copyText`. It takes every `<code>` prop.

### CodeSnippet.Content

A `<div>` around the code of a multi-line snippet. It sets `max-height` / `min-height` from the row limits (your `style` is merged after them), measures the code as it resizes, and folds an open snippet back when the code fits.

| Attribute | When |
|---|---|
| `data-expanded` | Expanded |

### CodeSnippet.Toggle

A `<button type="button">` with `aria-expanded`, rendered only while the code is taller than the collapsed limit (`canExpand`). A press expands or collapses. It takes every button prop except `type`; give it the words.

| Attribute | When |
|---|---|
| `data-expanded` | Expanded |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab | Moves to your code box (with `tabIndex={0}`), the copy button, then `Toggle` |
| Enter, Space | On `Toggle`: opens or closes; on the copy trigger: copies |
| Arrow keys | Scroll the focused code box |

The parts set `aria-expanded` on `Toggle`. The copy parts give a button and a polite live region.

You add:

- The read-only textbox around the code: `role="textbox"`, `aria-readonly="true"` (and `aria-multiline` for a block), `tabIndex={0}` and a name (`aria-label`).
- A name for an icon-only copy button, and the feedback words in `Copy.Status`.
- The "Show more" / "Show less" words, and a visible focus style everywhere.
