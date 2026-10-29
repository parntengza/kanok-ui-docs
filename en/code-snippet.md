# Code snippet

A code snippet shows code or a command that people copy: an install line, a config file, an ID inside a sentence. It has three types: `single` (one line), `multi` (a block that folds after 15 rows) and `inline` (a chip in running text). Every code sample on this site is a `ui-code-snippet`.


HTML:

```html
<ui-code-snippet>npm install @purpurabog/ui</ui-code-snippet>
```

React:

```tsx
<UiCodeSnippet>npm install @purpurabog/ui</UiCodeSnippet>
```

React + Tailwind:

```tsx
<CodeSnippet>npm install @purpurabog/ui</CodeSnippet>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/code-snippet
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-code-snippet
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/code-snippet.json
#    to its target:
#    components/ui/primitives/code-snippet/code-snippet-skeleton.ts
#    components/ui/primitives/code-snippet/code-snippet.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    copy-button, core-code-snippet, shared-align, shared-element, shared-events, shared-field, shared-localize, shared-skeleton, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-code-snippet.json
#    to its target:
#    components/ui/react-tw/code-snippet.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-copy-button, tw-i18n, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/code-snippet';</script>

<ui-code-snippet>npm install @purpurabog/ui</ui-code-snippet>
```

React:

```tsx
import { UiCodeSnippet } from '@purpurabog/ui/react';

<UiCodeSnippet>npm install @purpurabog/ui</UiCodeSnippet>
```

React + Tailwind:

```tsx
import { CodeSnippet } from '@/components/ui/react-tw/code-snippet';

<CodeSnippet>npm install @purpurabog/ui</CodeSnippet>
```

## Single line

`type="single"` (the default) is one 40px line with the copy button at the end. A line longer than the box scrolls sideways; it never wraps. Use it for commands and one-line values.


HTML:

```html
<ui-code-snippet>npx shadcn@4 add @kanok-ui/tw-date-picker @kanok-ui/tw-select @kanok-ui/tw-text-input</ui-code-snippet>
```

React:

```tsx
<UiCodeSnippet>npx shadcn@4 add @kanok-ui/tw-date-picker @kanok-ui/tw-select @kanok-ui/tw-text-input</UiCodeSnippet>
```

React + Tailwind:

```tsx
<CodeSnippet>npx shadcn@4 add @kanok-ui/tw-date-picker @kanok-ui/tw-select @kanok-ui/tw-text-input</CodeSnippet>
```

## Multi-line

`type="multi"` shows a block with the copy button top-right. Up to 15 rows show at first; longer code gets a "Show more" button that opens the rest. As in `<pre>`, one line break right after the opening tag is dropped, so you can start the code on its own line.


HTML:

```html
<ui-code-snippet type="multi">
{
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
}</ui-code-snippet>
```

React:

```tsx
const contractJson = `{
  "contract": "CT-2026-0142",
  "title": "Office supplies, FY2026",
  …
}`;

<UiCodeSnippet type="multi">{contractJson}</UiCodeSnippet>
```

React + Tailwind:

```tsx
const contractJson = `{
  "contract": "CT-2026-0142",
  "title": "Office supplies, FY2026",
  …
}`;

<CodeSnippet type="multi">{contractJson}</CodeSnippet>
```

Write `<` as `&lt;` and `&` as `&amp;` when the code goes straight into HTML. In React, pass a string: JSX escapes it for you.

## Wrap long lines

A multi-line snippet scrolls sideways by default, which keeps code aligned. `wrap-text` (`wrapText` in React) wraps long lines instead: use it for prose-like content such as log messages or SQL.


HTML:

```html
<ui-code-snippet type="multi" wrap-text>
2026-03-14 09:12:05 INFO  approval.service  Contract CT-2026-0142 moved from "awaiting-finance" to "awaiting-legal" by somchai.j@example.com after the finance review found no issues with the quotation or the payment terms.
2026-03-14 09:12:06 INFO  notify.service    Sent an email to the legal team (legal@example.com) asking for a review of CT-2026-0142 within 3 working days.</ui-code-snippet>
```

React:

```tsx
<UiCodeSnippet type="multi" wrapText>{approvalLog}</UiCodeSnippet>
```

React + Tailwind:

```tsx
<CodeSnippet type="multi" wrapText>{approvalLog}</CodeSnippet>
```

## Inline

`type="inline"` is a chip inside a sentence. The chip itself is the copy button: a click copies the code and its tooltip says "Copied!". Its name is the code, so screen readers read what they would copy.


HTML:

```html
<p>Install the package with <ui-code-snippet type="inline">npm install @purpurabog/ui</ui-code-snippet>, then load <ui-code-snippet type="inline">@purpurabog/ui/tokens.css</ui-code-snippet> once per app.</p>
```

React:

```tsx
<p>
  Install the package with <UiCodeSnippet type="inline">npm install @purpurabog/ui</UiCodeSnippet>, then load{' '}
  <UiCodeSnippet type="inline">@purpurabog/ui/tokens.css</UiCodeSnippet> once per app.
</p>
```

React + Tailwind:

```tsx
<p>
  Install the package with <CodeSnippet type="inline">npm install @purpurabog/ui</CodeSnippet>, then load{' '}
  <CodeSnippet type="inline">@purpurabog/ui/tokens.css</CodeSnippet> once per app.
</p>
```

## Without a copy button

`hide-copy-button` (`hideCopyButton` in React) shows the code only. An inline snippet then becomes a plain code chip that isn't a button. Use it for code people read but shouldn't paste, such as an example of output.


HTML:

```html
<ui-code-snippet hide-copy-button>Status: awaiting-signature (3 of 4 approvals)</ui-code-snippet>
<p>A contract in the <ui-code-snippet type="inline" hide-copy-button>awaiting-signature</ui-code-snippet> state can't be edited.</p>
```

React:

```tsx
<UiCodeSnippet hideCopyButton>Status: awaiting-signature (3 of 4 approvals)</UiCodeSnippet>
<p>A contract in the <UiCodeSnippet type="inline" hideCopyButton>awaiting-signature</UiCodeSnippet> state can't be edited.</p>
```

React + Tailwind:

```tsx
<CodeSnippet hideCopyButton>Status: awaiting-signature (3 of 4 approvals)</CodeSnippet>
<p>A contract in the <CodeSnippet type="inline" hideCopyButton>awaiting-signature</CodeSnippet> state can't be edited.</p>
```

## Copy something else

`text` is what gets copied instead of the code shown. Show a short or readable form, and copy the full one: here the snippet shows the request command with the token hidden, and copies it with the token.


HTML:

```html
<ui-code-snippet text="curl -H 'Authorization: Bearer 7f3c9a1e5b2d' https://api.example.com/contracts/CT-2026-0142">curl -H 'Authorization: Bearer ••••••' https://api.example.com/contracts/CT-2026-0142</ui-code-snippet>
```

React:

```tsx
<UiCodeSnippet text={`curl -H 'Authorization: Bearer ${token}' https://api.example.com/contracts/CT-2026-0142`}>
  curl -H 'Authorization: Bearer ••••••' https://api.example.com/contracts/CT-2026-0142
</UiCodeSnippet>
```

React + Tailwind:

```tsx
<CodeSnippet text={`curl -H 'Authorization: Bearer ${token}' https://api.example.com/contracts/CT-2026-0142`}>
  curl -H 'Authorization: Bearer ••••••' https://api.example.com/contracts/CT-2026-0142
</CodeSnippet>
```

## Copy labels and feedback

- `copy-label` (`copyLabel`): the copy button's tooltip on a single or multi-line snippet (default "Copy to clipboard").
- `label`: the accessible name of the code box (single and multi), or, on an inline chip, its tooltip and description.
- `feedback`: the tooltip after a copy (default "Copied!"), shown for `feedback-timeout` ms (2000).
- `placement` (or Carbon's `align`): the side of the tooltip, `bottom` by default.


HTML:

```html
<ui-code-snippet label="Webhook URL" copy-label="Copy webhook URL" feedback="URL copied" feedback-timeout="3000" placement="top">https://hooks.example.com/approvals/7f3c9a1e</ui-code-snippet>
<p>Ask finance for the code <ui-code-snippet type="inline" label="Copy cost centre" feedback="Cost centre copied" placement="top">CC-4410-PROC</ui-code-snippet> before you submit.</p>
```

React:

```tsx
<UiCodeSnippet label="Webhook URL" copyLabel="Copy webhook URL" feedback="URL copied" feedbackTimeout={3000} placement="top">
  https://hooks.example.com/approvals/7f3c9a1e
</UiCodeSnippet>
<p>Ask finance for the code <UiCodeSnippet type="inline" label="Copy cost centre" feedback="Cost centre copied" placement="top">CC-4410-PROC</UiCodeSnippet> before you submit.</p>
```

React + Tailwind:

```tsx
<CodeSnippet label="Webhook URL" copyLabel="Copy webhook URL" feedback="URL copied" feedbackTimeout={3000} placement="top">
  https://hooks.example.com/approvals/7f3c9a1e
</CodeSnippet>
<p>Ask finance for the code <CodeSnippet type="inline" label="Copy cost centre" feedback="Cost centre copied" placement="top">CC-4410-PROC</CodeSnippet> before you submit.</p>
```

## Rows shown

On a multi-line snippet, `max-collapsed-rows` (15) is how many 16px rows show before "Show more", and `max-expanded-rows` (0, no limit) caps the open block, which then scrolls. `min-collapsed-rows` (3) and `min-expanded-rows` (16) keep a minimum height. An open snippet whose code is no taller than `min-expanded-rows` folds back when the code is measured again, so lower that too when you lower the collapsed limit.


HTML:

```html
<ui-code-snippet type="multi" max-collapsed-rows="4" max-expanded-rows="8" min-expanded-rows="0">
SELECT c.id, c.title, c.amount, d.name AS department
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
LIMIT 50;</ui-code-snippet>
```

React:

```tsx
<UiCodeSnippet type="multi" maxCollapsedRows={4} maxExpandedRows={8} minExpandedRows={0}>{contractQuery}</UiCodeSnippet>
```

React + Tailwind:

```tsx
<CodeSnippet type="multi" maxCollapsedRows={4} maxExpandedRows={8} minExpandedRows={0}>{contractQuery}</CodeSnippet>
```

## Open or closed

`expanded` opens a multi-line snippet from the start; the element sets it as the user presses "Show more" and fires `ui-toggle` with `detail.expanded`. `show-more-text` and `show-less-text` change the button's words. In React + Tailwind, use `defaultExpanded`, or `expanded` with `onToggle` to hold the state yourself.


HTML:

```html
<ui-code-snippet id="code-snippet-open" type="multi" expanded show-more-text="Show the whole file" show-less-text="Show the start only">
# .env for the approvals service
APP_NAME=approvals
APP_ENV=production
APP_URL=https://approvals.example.com
APP_TIMEZONE=Asia/Bangkok
APP_LOCALE=th
DB_HOST=db.internal
DB_PORT=5432
DB_NAME=approvals
DB_USER=approvals_app
MAIL_FROM=no-reply@example.com
MAIL_HOST=smtp.example.com
MAIL_PORT=587
NOTIFY_LEGAL=legal@example.com
NOTIFY_FINANCE=finance@example.com
REVIEW_DAYS_LEGAL=3
REVIEW_DAYS_FINANCE=2
MAX_UPLOAD_MB=25
SESSION_MINUTES=30
AUDIT_LOG=true</ui-code-snippet>
<p>Expanded: <output id="code-snippet-open-out">true</output></p>

<script type="module">
  const snippet = document.getElementById('code-snippet-open');
  const out = document.getElementById('code-snippet-open-out');
  snippet.addEventListener('ui-toggle', (event) => {
    out.value = String(event.detail.expanded);
  });
</script>
```

React:

```tsx
const [open, setOpen] = useState(true);

<UiCodeSnippet
  type="multi"
  expanded={open}
  showMoreText="Show the whole file"
  showLessText="Show the start only"
  onUiToggle={(e) => setOpen(e.detail.expanded)}
>
  {envFile}
</UiCodeSnippet>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(true);

<CodeSnippet type="multi" expanded={open} onToggle={setOpen} showMoreText="Show the whole file" showLessText="Show the start only">
  {envFile}
</CodeSnippet>
```

## Handle the copy

Before copying, the snippet fires `ui-copy` with `detail.text` (cancelable). Listen to it to record the copy; call `preventDefault()` to put something else on the clipboard yourself, and the feedback still shows. In React + Tailwind, `onCopy` gets the text; return `false` to copy it yourself.


HTML:

```html
<ui-code-snippet id="code-snippet-copy">docker pull registry.example.com/approvals:2026.3.1</ui-code-snippet>
<p>Last copy: <output id="code-snippet-copy-out">none yet</output></p>

<script type="module">
  const snippet = document.getElementById('code-snippet-copy');
  const out = document.getElementById('code-snippet-copy-out');
  snippet.addEventListener('ui-copy', (event) => {
    out.value = `${event.detail.text} (${new Date().toLocaleTimeString()})`;
  });
</script>
```

React:

```tsx
<UiCodeSnippet onUiCopy={(e) => audit('copied image tag', e.detail.text)}>
  docker pull registry.example.com/approvals:2026.3.1
</UiCodeSnippet>
```

React + Tailwind:

```tsx
<CodeSnippet onCopy={(text) => audit('copied image tag', text)}>
  docker pull registry.example.com/approvals:2026.3.1
</CodeSnippet>
```

## Disabled

`disabled` greys the code, disables the copy and "Show more" buttons, and takes the code box out of the Tab order. An inline chip stays focusable (`aria-disabled`) but copies nothing.


HTML:

```html
<ui-code-snippet disabled>npm install @purpurabog/ui</ui-code-snippet>
<p>Your plan doesn't include the API, so the key <ui-code-snippet type="inline" disabled>ak_live_••••</ui-code-snippet> can't be copied.</p>
```

React:

```tsx
<UiCodeSnippet disabled>npm install @purpurabog/ui</UiCodeSnippet>
<p>Your plan doesn't include the API, so the key <UiCodeSnippet type="inline" disabled>ak_live_••••</UiCodeSnippet> can't be copied.</p>
```

React + Tailwind:

```tsx
<CodeSnippet disabled>npm install @purpurabog/ui</CodeSnippet>
<p>Your plan doesn't include the API, so the key <CodeSnippet type="inline" disabled>ak_live_••••</CodeSnippet> can't be copied.</p>
```

## Skeleton

While the code loads, show `ui-code-snippet-skeleton`: a 56px box with one bar (`single`), or 98px with three lines (`type="multi"`). It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`). In React, use the `UiCodeSnippetSkeleton` wrapper. See [Skeleton](https://parntengza.github.io/kanok-ui-docs/en/skeleton/) for the other placeholders.


HTML:

```html
<ui-code-snippet-skeleton></ui-code-snippet-skeleton>
<ui-code-snippet-skeleton type="multi"></ui-code-snippet-skeleton>
```

React:

```tsx
import { UiCodeSnippetSkeleton } from '@purpurabog/ui/react';

<UiCodeSnippetSkeleton />
<UiCodeSnippetSkeleton type="multi" />
```

React + Tailwind:

```tsx
import { CodeSnippetSkeleton } from '@/components/ui/react-tw/code-snippet';

<CodeSnippetSkeleton />
<CodeSnippetSkeleton type="multi" />
```

On the web component, import it from `@purpurabog/ui/code-snippet-skeleton`.

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves to the code box, then the copy button, then "Show more"; on an inline snippet, to the chip |
| Arrow keys | Scroll the focused code box when the code is wider or taller than it |
| Enter, Space | On the copy button or inline chip: copies. On "Show more": opens or closes the block |

## Accessibility

- The single and multi-line code box is a read-only textbox (`role="textbox"`, `aria-readonly`) that takes focus, so keyboard users can scroll it. Name it with `label` (default "Copy to clipboard"; "Webhook URL" is better).
- The copy button is named by its tooltip (`copy-label`). An inline chip is named by its code, and `label` becomes its description.
- After a copy, a polite live region says the feedback once.
- "Show more" has `aria-expanded`.

Unstyled React parts with the same behaviour: [Headless Code snippet](https://parntengza.github.io/kanok-ui-docs/en/headless-code-snippet/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-code-snippet>` · React `UiCodeSnippet`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `type` | `type` | `CodeSnippetType` | `'single'` |  |
| `text` | `text` | `string` | `''` | Text to copy instead of the slotted content. |
| `label` | `label` | `string` | `''` | Accessible name of the read-only textbox (single / multi); inline: the copy button's tooltip and description (the button is named by its code, WCAG 2.5.3). |
| `copy-label` | `copyLabel` | `string` | `''` | Tooltip of the copy button (single / multi). |
| `feedback` | `feedback` | `string` | `''` |  |
| `feedback-timeout` | `feedbackTimeout` | `number` | `2000` |  |
| `placement` | `placement` | `TooltipPlacement` | `'bottom'` |  |
| `hide-copy-button` | `hideCopyButton` | `boolean` | `false` |  |
| `wrap-text` | `wrapText` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `expanded` | `expanded` | `boolean` | `false` |  |
| `show-more-text` | `showMoreText` | `string` | `''` |  |
| `show-less-text` | `showLessText` | `string` | `''` |  |
| `max-collapsed-rows` | `maxCollapsedRows` | `number` | `15` | Rows (16px) visible while collapsed; 0 = no limit. |
| `max-expanded-rows` | `maxExpandedRows` | `number` | `0` | Rows visible while expanded; 0 = no limit. |
| `min-collapsed-rows` | `minCollapsedRows` | `number` | `3` |  |
| `min-expanded-rows` | `minExpandedRows` | `number` | `16` |  |

#### Properties

| Property | Type | Description |
|---|---|---|
| `copyText` |  | (read-only) What gets copied: `text`, else the slotted code. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded } when "Show more / less" is used |
| `ui-copy` | `onUiCopy` | detail: { text }; cancelable |

#### Slots

| Slot | Description |
|---|---|
| (default) | The code |

#### CSS parts

| Part | Description |
|---|---|
| `container` | Scrolling container (single) / `<pre>` wrapper (multi) |
| `code` | The `<code>` element |
| `copy-button` | The `<ui-copy-button>` (single / multi) |
| `expand-button` | The "Show more / less" button (multi) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-code-background` |  | Fill of the snippet (default `--ui-surface-1`; Kanok: a light grey on its white surfaces) |
| `--ui-code-radius` |  | Corners of the single and multi-line snippets (default 0; Kanok: 8px; the inline chip keeps its 4px) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |

### `<ui-code-snippet-skeleton>` · React `UiCodeSnippetSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `type` | `type` | `'single' \| 'multi'` | `'single'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The box |
| `line` | Each bar |


