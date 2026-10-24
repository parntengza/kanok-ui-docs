# Copy button

A copy button puts a value on the clipboard: a request number, a link, an API key. It is Carbon's 40px icon button: its tooltip names it ("Copy to clipboard"), and after a copy the tooltip says "Copied!" for two seconds.


HTML:

```html
<div style="display: flex; align-items: center; gap: 8px">
  <span>Request RQ-2026-00123</span>
  <ui-copy-button text="RQ-2026-00123" label="Copy request number"></ui-copy-button>
</div>
```

React:

```tsx
<span>Request RQ-2026-00123</span>
<UiCopyButton text="RQ-2026-00123" label="Copy request number" />
```

React + Tailwind:

```tsx
<span>Request RQ-2026-00123</span>
<CopyButton text="RQ-2026-00123" label="Copy request number" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/copy-button
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-copy-button
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/copy-button.json
#    to its target:
#    components/ui/primitives/copy-button/copy-button.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-align, shared-element, shared-events, shared-field, shared-localize, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-copy-button.json
#    to its target:
#    components/ui/react-tw/copy-button.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-i18n, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/copy-button';</script>

<ui-copy-button text="RQ-2026-00123"></ui-copy-button>
```

React:

```tsx
import { UiCopyButton } from '@purpurabog/ui/react';

<UiCopyButton text="RQ-2026-00123" />
```

React + Tailwind:

```tsx
import { CopyButton } from '@/components/ui/react-tw/copy-button';

<CopyButton text="RQ-2026-00123" />
```

## Copy button or code snippet?

| Component | Use it when |
|---|---|
| Copy button | The value is shown somewhere else, in your own layout: a field, a table cell, a heading. |
| [Code snippet](https://parntengza.github.io/kanok-ui-docs/en/code-snippet/) | You show code or a command, and the copy button belongs to it. The snippet uses this button inside. |

## Next to the value

Put the button right after the value it copies, so it is clear what it copies. `text` is exactly what goes on the clipboard.


HTML:

```html
<dl style="display: grid; grid-template-columns: max-content auto; gap: 8px 16px; align-items: center; margin: 0">
  <dt>Contract number</dt>
  <dd style="display: flex; align-items: center; gap: 8px; margin: 0">CT-2026-0142 <ui-copy-button text="CT-2026-0142" label="Copy contract number" size="sm"></ui-copy-button></dd>
  <dt>Vendor tax ID</dt>
  <dd style="display: flex; align-items: center; gap: 8px; margin: 0">0105556012345 <ui-copy-button text="0105556012345" label="Copy tax ID" size="sm"></ui-copy-button></dd>
</dl>
```

React:

```tsx
<dl>
  <dt>Contract number</dt>
  <dd>CT-2026-0142 <UiCopyButton text="CT-2026-0142" label="Copy contract number" size="sm" /></dd>
  <dt>Vendor tax ID</dt>
  <dd>0105556012345 <UiCopyButton text="0105556012345" label="Copy tax ID" size="sm" /></dd>
</dl>
```

React + Tailwind:

```tsx
<dl className="grid grid-cols-[max-content_auto] items-center gap-x-4 gap-y-2">
  <dt>Contract number</dt>
  <dd className="flex items-center gap-2">CT-2026-0142 <CopyButton text="CT-2026-0142" label="Copy contract number" size="sm" /></dd>
  <dt>Vendor tax ID</dt>
  <dd className="flex items-center gap-2">0105556012345 <CopyButton text="0105556012345" label="Copy tax ID" size="sm" /></dd>
</dl>
```

## Sizes

`size`: `md` 40px (the default, next to 40px fields) or `sm` 32px (in table rows and dense lists). The icon stays 16px.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-copy-button text="RQ-2026-00123"></ui-copy-button>
  <ui-copy-button text="RQ-2026-00123" size="sm"></ui-copy-button>
</div>
```

React:

```tsx
<UiCopyButton text="RQ-2026-00123" />
<UiCopyButton text="RQ-2026-00123" size="sm" />
```

React + Tailwind:

```tsx
<CopyButton text="RQ-2026-00123" />
<CopyButton text="RQ-2026-00123" size="sm" />
```

## Label and feedback

`label` is the tooltip at rest and the button's accessible name (default "Copy to clipboard", in the page's language). `feedback` is the tooltip after a copy (default "Copied!"). Say what gets copied when there are several buttons on the screen.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-copy-button text="https://contracts.example.com/CT-2026-0142" label="Copy contract link" feedback="Link copied"></ui-copy-button>
  <ui-copy-button text="finance@example.com" label="Copy finance email" feedback="Email copied"></ui-copy-button>
</div>
```

React:

```tsx
<UiCopyButton text="https://contracts.example.com/CT-2026-0142" label="Copy contract link" feedback="Link copied" />
<UiCopyButton text="finance@example.com" label="Copy finance email" feedback="Email copied" />
```

React + Tailwind:

```tsx
<CopyButton text="https://contracts.example.com/CT-2026-0142" label="Copy contract link" feedback="Link copied" />
<CopyButton text="finance@example.com" label="Copy finance email" feedback="Email copied" />
```

## Feedback time

`feedback-timeout` (`feedbackTimeout` in React) is how long the feedback shows, in ms (2000 by default). Pressing again starts the time over.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-copy-button text="RQ-2026-00123" feedback-timeout="1000" label="Copy (1 second feedback)"></ui-copy-button>
  <ui-copy-button text="RQ-2026-00123" feedback-timeout="5000" label="Copy (5 second feedback)"></ui-copy-button>
</div>
```

React:

```tsx
<UiCopyButton text="RQ-2026-00123" feedbackTimeout={1000} label="Copy (1 second feedback)" />
<UiCopyButton text="RQ-2026-00123" feedbackTimeout={5000} label="Copy (5 second feedback)" />
```

React + Tailwind:

```tsx
<CopyButton text="RQ-2026-00123" feedbackTimeout={1000} label="Copy (1 second feedback)" />
<CopyButton text="RQ-2026-00123" feedbackTimeout={5000} label="Copy (5 second feedback)" />
```

## Tooltip side

`placement` puts the tooltip on a side: `top`, `bottom` (the default), `left`, `right`, each with `-start` or `-end`. `align` is Carbon's name for the same attribute. Near the edge of the screen, the tooltip flips to the side with room.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-copy-button text="RQ-2026-00123" placement="top"></ui-copy-button>
  <ui-copy-button text="RQ-2026-00123" placement="right"></ui-copy-button>
  <ui-copy-button text="RQ-2026-00123" placement="bottom-start"></ui-copy-button>
</div>
```

React:

```tsx
<UiCopyButton text="RQ-2026-00123" placement="top" />
<UiCopyButton text="RQ-2026-00123" placement="right" />
<UiCopyButton text="RQ-2026-00123" placement="bottom-start" />
```

React + Tailwind:

```tsx
<CopyButton text="RQ-2026-00123" placement="top" />
<CopyButton text="RQ-2026-00123" placement="right" />
<CopyButton text="RQ-2026-00123" placement="bottom-start" />
```

## Copy a value that changes

`text` is read at the moment of the press, so set it whenever the value changes. Here the share link follows the expiry the user picks.


HTML:

```html
<ui-select id="copy-button-expiry" label="Link expires in" value="7">
  <option value="1">1 day</option>
  <option value="7">7 days</option>
  <option value="30">30 days</option>
</ui-select>
<div style="display: flex; align-items: center; gap: 8px">
  <code id="copy-button-link">https://contracts.example.com/s/CT-2026-0142?days=7</code>
  <ui-copy-button id="copy-button-share" text="https://contracts.example.com/s/CT-2026-0142?days=7" label="Copy share link" size="sm"></ui-copy-button>
</div>

<script type="module">
  const expiry = document.getElementById('copy-button-expiry');
  const shown = document.getElementById('copy-button-link');
  const button = document.getElementById('copy-button-share');
  expiry.addEventListener('change', () => {
    const link = `https://contracts.example.com/s/CT-2026-0142?days=${expiry.value}`;
    shown.textContent = link;
    button.text = link;
  });
</script>
```

React:

```tsx
import type { UiSelect as SelectElement } from '@purpurabog/ui';

const [days, setDays] = useState('7');
const link = `https://contracts.example.com/s/CT-2026-0142?days=${days}`;

<UiSelect label="Link expires in" value={days} onChange={(e) => setDays((e.target as SelectElement).value)}>
  <option value="1">1 day</option>
  <option value="7">7 days</option>
  <option value="30">30 days</option>
</UiSelect>
<code>{link}</code>
<UiCopyButton text={link} label="Copy share link" size="sm" />
```

React + Tailwind:

```tsx
const [days, setDays] = useState('7');
const link = `https://contracts.example.com/s/CT-2026-0142?days=${days}`;

<Select label="Link expires in" value={days} onChange={(e) => setDays(e.target.value)}>
  <option value="1">1 day</option>
  <option value="7">7 days</option>
  <option value="30">30 days</option>
</Select>
<code>{link}</code>
<CopyButton text={link} label="Copy share link" size="sm" />
```

## Copy it yourself

Before it copies, the button fires `ui-copy` with `detail.text`. Call `preventDefault()` to put something else on the clipboard yourself; the feedback still shows. In React + Tailwind, `onCopy` gets the text; return `false` to copy it yourself. `showFeedback()` on the element shows the feedback at any time, for example after another control copied the value.


HTML:

```html
<div style="display: flex; align-items: center; gap: 8px">
  <span>CT-2026-0142</span>
  <ui-copy-button id="copy-button-own" text="CT-2026-0142" label="Copy contract summary" size="sm"></ui-copy-button>
</div>
<p>Copied: <output id="copy-button-own-out"></output></p>

<script type="module">
  const button = document.getElementById('copy-button-own');
  const out = document.getElementById('copy-button-own-out');
  button.addEventListener('ui-copy', (event) => {
    event.preventDefault();
    const summary = `${event.detail.text}: Office supplies, 120,000 THB, Procurement`;
    navigator.clipboard?.writeText(summary).catch(() => {});
    out.value = summary;
  });
</script>
```

React:

```tsx
<UiCopyButton
  text="CT-2026-0142"
  label="Copy contract summary"
  size="sm"
  onUiCopy={(e) => {
    e.preventDefault();
    void navigator.clipboard.writeText(`${e.detail.text}: Office supplies, 120,000 THB, Procurement`);
  }}
/>
```

React + Tailwind:

```tsx
<CopyButton
  text="CT-2026-0142"
  label="Copy contract summary"
  size="sm"
  onCopy={(text) => {
    void navigator.clipboard.writeText(`${text}: Office supplies, 120,000 THB, Procurement`);
    return false; // we copied it; the feedback still shows
  }}
/>
```

If the browser refuses the copy (no permission, no secure page and no fallback), the button shows no feedback, so it never says "Copied!" for nothing.

## Disabled

`disabled` greys the icon and takes the button out of the Tab order. Use it while there is nothing to copy yet, for example before a number is issued.


HTML:

```html
<div style="display: flex; align-items: center; gap: 8px">
  <span>Request number: pending</span>
  <ui-copy-button text="" label="Copy request number" disabled></ui-copy-button>
</div>
```

React:

```tsx
<span>Request number: pending</span>
<UiCopyButton text="" label="Copy request number" disabled />
```

React + Tailwind:

```tsx
<span>Request number: pending</span>
<CopyButton text="" label="Copy request number" disabled />
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves to the button; the tooltip shows its label |
| Enter, Space | Copies, and the tooltip shows the feedback |
| Esc | Hides the label tooltip (the feedback stays for its time) |

## Accessibility

- The tooltip text is the button's accessible name, so the icon needs no other label. Give each button its own `label` when there are several ("Copy contract number", "Copy tax ID").
- After a copy, a polite live region (`role="status"`) says the feedback once, so screen reader users hear "Copied!" too.
- Keep the copied value visible next to the button. The clipboard can't be seen, and users want to check what they took.

Unstyled React parts with the same behaviour: [Headless Copy button](https://parntengza.github.io/kanok-ui-docs/en/headless-copy-button/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-copy-button>` · React `UiCopyButton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `text` | `text` | `string` | `''` | What gets copied. |
| `label` | `label` | `string` | `''` | Accessible name / tooltip at rest. |
| `feedback` | `feedback` | `string` | `''` | Tooltip text after copying. |
| `feedback-timeout` | `feedbackTimeout` | `number` | `2000` |  |
| `placement` | `placement` | `TooltipPlacement` | `'bottom'` |  |
| `size` | `size` | `'sm' \| 'md'` | `'md'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `data-copied` | `copied` | `boolean` | `false` | True while the feedback is showing. |

#### Methods

| Method | Description |
|---|---|
| `showFeedback()` | Show the "Copied!" tooltip for `feedback-timeout` ms (Carbon `Copy` fade-in → fade-out). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-copy` | `onUiCopy` | detail: { text }; cancelable |

#### CSS parts

| Part | Description |
|---|---|
| `button` | The native button |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-copy-button-background` |  | Its fill at rest (default `--ui-surface-1`; Kanok: transparent); `--ui-copy-button-radius` its corners (default 0; Kanok: 6px) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |


