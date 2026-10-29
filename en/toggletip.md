# Toggletip

A toggletip is a small "i" button that opens an explanation when clicked. Unlike a [tooltip](https://parntengza.github.io/kanok-ui-docs/en/tooltip/), it stays open until the user closes it, and it may hold links and buttons. Put it next to a label or a heading that needs more context.


HTML:

```html
<p style="display: flex; align-items: center; gap: 8px; margin: 0">
  Retention period
  <ui-toggletip label="About the retention period">
    Signed copies are kept for 10 years, then moved to the archive. <a href="#accessibility">Read the policy</a>
  </ui-toggletip>
</p>
```

React:

```tsx
<p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  Retention period
  <UiToggletip label="About the retention period">
    Signed copies are kept for 10 years, then moved to the archive. <a href="/policy">Read the policy</a>
  </UiToggletip>
</p>
```

React + Tailwind:

```tsx
<p className="flex items-center gap-2">
  Retention period
  <Toggletip label="About the retention period">
    Signed copies are kept for 10 years, then moved to the archive. <a href="/policy">Read the policy</a>
  </Toggletip>
</p>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/toggletip
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-popover
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/toggletip.json
#    to its target:
#    components/ui/primitives/toggletip/toggletip.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-popup, shared-align, shared-element, shared-events, shared-field, shared-localize, shared-position, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-popover.json
#    to its target:
#    components/ui/react-tw/popover.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-hover-open, core-position, tw-dom, tw-floating, tw-i18n, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Put the explanation inside the element and name the button with `label`.


HTML:

```html
<script type="module">import '@purpurabog/ui/toggletip';</script>

<ui-toggletip label="About the retention period">
  Signed copies are kept for 10 years.
</ui-toggletip>
```

React:

```tsx
import { UiToggletip } from '@purpurabog/ui/react';

<UiToggletip label="About the retention period">
  Signed copies are kept for 10 years.
</UiToggletip>
```

React + Tailwind:

```tsx
import { Toggletip } from '@/components/ui/react-tw/popover';

<Toggletip label="About the retention period">
  Signed copies are kept for 10 years.
</Toggletip>
```

React + Tailwind's `Toggletip` lives in the popover file, as both are built on the same parts.

## Toggletip or tooltip?

| | Tooltip | Toggletip |
|---|---|---|
| Opens on | Hover and keyboard focus | A click, Enter or Space on the "i" button |
| Closes on | The pointer or focus leaving, Esc | Another click, Esc, a click outside, focus leaving both the button and the bubble |
| Content | One line of plain text | Text, links and buttons |
| Trigger | The control it explains | Its own "i" button |

See the [tooltip page](https://parntengza.github.io/kanok-ui-docs/en/tooltip/#tooltip-toggletip-definition-tooltip-or-popover) for the definition tooltip and the popover too.

## Beside a heading

The toggletip is an inline element that sits on the text's middle line. Put it right after the words it explains, so it reads as part of the same line.


HTML:

```html
<div style="display: flex; align-items: center; gap: 4px">
  <h3 style="margin: 0; font: var(--ui-font-heading-02)">Approval route</h3>
  <ui-toggletip label="About the approval route">
    Contracts go to the department head first. Above 5 million baht, Finance approves as well.
  </ui-toggletip>
</div>
```

React:

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
  <h3>Approval route</h3>
  <UiToggletip label="About the approval route">
    Contracts go to the department head first. Above 5 million baht, Finance approves as well.
  </UiToggletip>
</div>
```

React + Tailwind:

```tsx
<div className="flex items-center gap-1">
  <h3 className="type-heading-02">Approval route</h3>
  <Toggletip label="About the approval route">
    Contracts go to the department head first. Above 5 million baht, Finance approves as well.
  </Toggletip>
</div>
```

## Links and buttons inside

The content follows the button in the Tab order, so a keyboard user reaches a link or a button inside with the next Tab. A link put directly inside takes the primary colour.


HTML:

```html
<p style="display: flex; align-items: center; gap: 8px; margin: 0">
  e-Signature
  <ui-toggletip id="toggletip-esign" label="About e-signatures">
    An e-signature is valid under the Electronic Transactions Act B.E. 2544.
    <a href="#links-and-buttons-inside" style="display: block; margin-block: 8px">Which documents can be signed online?</a>
    <ui-button id="toggletip-esign-done" size="sm" kind="tertiary">Got it</ui-button>
  </ui-toggletip>
</p>

<script type="module">
  const tip = document.getElementById('toggletip-esign');
  document.getElementById('toggletip-esign-done').addEventListener('click', () => tip.hide());
</script>
```

React:

```tsx
<UiToggletip label="About e-signatures" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  An e-signature is valid under the Electronic Transactions Act B.E. 2544.
  <a href="/help/e-signature" style={{ display: 'block', marginBlock: 8 }}>Which documents can be signed online?</a>
  <UiButton size="sm" kind="tertiary" onClick={() => setOpen(false)}>Got it</UiButton>
</UiToggletip>
```

React + Tailwind:

```tsx
<Toggletip label="About e-signatures" open={open} onOpenChange={setOpen}>
  <span className="grid gap-2">
    <span>An e-signature is valid under the Electronic Transactions Act B.E. 2544.</span>
    <a href="/help/e-signature">Which documents can be signed online?</a>
    <span><Button size="sm" kind="tertiary" onClick={() => setOpen(false)}>Got it</Button></span>
  </span>
</Toggletip>
```

When the bubble closes while focus is inside it (the "Got it" button, Esc), focus goes back to the "i" button.

## Placement

The bubble opens below the button (`placement="bottom"`). `top`, `left`, `right` and the `-start` / `-end` forms move it; it flips when there is no room. `align` is Carbon's name for the same attribute.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <span style="display: flex; align-items: center; gap: 4px">Top <ui-toggletip placement="top" label="Opens above">Opens above the button.</ui-toggletip></span>
  <span style="display: flex; align-items: center; gap: 4px">Right <ui-toggletip placement="right" label="Opens on the right">Opens on the right of the button.</ui-toggletip></span>
  <span style="display: flex; align-items: center; gap: 4px">Bottom start <ui-toggletip placement="bottom-start" label="Opens below, start">Lined up with the start edge of the button.</ui-toggletip></span>
</div>
```

React:

```tsx
<UiToggletip placement="top" label="Opens above">Opens above the button.</UiToggletip>
<UiToggletip placement="right" label="Opens on the right">Opens on the right of the button.</UiToggletip>
<UiToggletip placement="bottom-start" label="Opens below, start">Lined up with the start edge of the button.</UiToggletip>
```

React + Tailwind:

```tsx
<Toggletip placement="top" label="Opens above">Opens above the button.</Toggletip>
<Toggletip placement="right" label="Opens on the right">Opens on the right of the button.</Toggletip>
<Toggletip placement="bottom-start" label="Opens below, start">Lined up with the start edge of the button.</Toggletip>
```

## Another icon

The "i" is the default. Put another 16px icon in the `trigger` slot (`icon` in React + Tailwind), for example Carbon's `Help` (see [Icons](https://parntengza.github.io/kanok-ui-docs/en/icons/)). It takes the button's colour.


HTML:

```html
<p style="display: flex; align-items: center; gap: 8px; margin: 0">
  Stamp duty
  <ui-toggletip label="How stamp duty is worked out">
    <svg slot="trigger" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"/><circle cx="16" cy="23.5" r="1.5"/><path d="M17 8h-1.5a4.49 4.49 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 2.5-2.5H17a2.5 2.5 0 0 1 0 5h-2v4.5h2V17a4.5 4.5 0 0 0 0-9Z"/></svg>
    The duty is 0.1% of the rent for the whole term, paid within 15 days of signing.
  </ui-toggletip>
</p>
```

React:

```tsx
import { Help as HelpIcon } from '@carbon/icons-react';

<UiToggletip label="How stamp duty is worked out">
  <HelpIcon slot="trigger" aria-hidden="true" />
  The duty is 0.1% of the rent for the whole term, paid within 15 days of signing.
</UiToggletip>
```

React + Tailwind:

```tsx
import { Help as HelpIcon } from '@carbon/icons-react';

<Toggletip label="How stamp duty is worked out" icon={<HelpIcon aria-hidden="true" />}>
  The duty is 0.1% of the rent for the whole term, paid within 15 days of signing.
</Toggletip>
```

## Open state and events

`open` is the state; `show()` and `hide()` set it. `ui-toggle` fires after the bubble opens or closes, with `detail.open`.


HTML:

```html
<p style="display: flex; align-items: center; gap: 8px; margin: 0">
  Deposit
  <ui-toggletip id="toggletip-deposit" label="About the deposit">The deposit is two months' rent, returned within 30 days after the lease ends.</ui-toggletip>
</p>
<p style="margin: 0">Open: <output id="toggletip-deposit-out">false</output></p>

<script type="module">
  const tip = document.getElementById('toggletip-deposit');
  const out = document.getElementById('toggletip-deposit-out');
  tip.addEventListener('ui-toggle', (event) => (out.value = String(event.detail.open)));
</script>
```

React:

```tsx
const [open, setOpen] = useState(false);

<UiToggletip label="About the deposit" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  The deposit is two months' rent, returned within 30 days after the lease ends.
</UiToggletip>
<p>Open: <output>{String(open)}</output></p>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(false);

<Toggletip label="About the deposit" open={open} onOpenChange={setOpen}>
  The deposit is two months' rent, returned within 30 days after the lease ends.
</Toggletip>
<p>Open: <output>{String(open)}</output></p>
```

Leave `open` out in React + Tailwind and the toggletip keeps its own state.

## Keyboard

| Key | What it does |
|---|---|
| Enter, Space | On the button: open or close the bubble |
| Tab | From the button into the content; leaving both closes the bubble |
| Esc | Closes the bubble and gives focus back to the button when it was inside |

A click outside the button and the bubble closes it too.

## Accessibility

- The trigger is a real `<button>` with `aria-expanded` and `aria-controls`. Its name is `label`, else "More information" in the page language (Thai or English).
- The bubble has `role="group"` with the same name, so screen readers say what the content is about.
- Give `label` the topic ("About the deposit"), not "Info": a page with several toggletips needs a different name on each.

Unstyled React parts with the same behaviour: [Headless Popover](https://parntengza.github.io/kanok-ui-docs/en/headless-popover/#toggletip), with `closeOnFocusOut`.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-toggletip>` · React `UiToggletip`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `label` | `label` | `string` | `''` | Accessible name of the trigger, e.g. "More about retention". |
| `placement` | `placement` | `Placement` | `'bottom'` |  |
| `open` | `open` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open }, after it opens or closes |

#### Slots

| Slot | Description |
|---|---|
| (default) | Bubble content (text, links, buttons) |
| `trigger` | Custom trigger icon (default: an "i" information icon) |

#### CSS parts

| Part | Description |
|---|---|
| `trigger` | The info button |
| `bubble` | The popover content box |
| `caret` | The arrow pointing at the trigger |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-menu-border` |  | / --ui-menu-radius - Border and corners of the bubble (the menu settings) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |


