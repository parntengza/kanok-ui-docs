# Tooltip

A tooltip is a short line of plain text about the control it wraps. It opens when the pointer rests on the control or keyboard focus reaches it, and closes when they leave. Use it to name an icon or add a hint, never for content people must read or act on.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tooltip text="Signed copies are kept for 10 years">
    <ui-button kind="tertiary">Retention policy</ui-button>
  </ui-tooltip>
  <ui-tooltip text="Copy link" as-label>
    <ui-button kind="ghost" icon-only>
      <svg viewBox="0 0 16 16"><path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"/><path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z"/></svg>
    </ui-button>
  </ui-tooltip>
</div>
```

React:

```tsx
import { Copy as CopyIcon } from '@carbon/icons-react';

<UiTooltip text="Signed copies are kept for 10 years">
  <UiButton kind="tertiary">Retention policy</UiButton>
</UiTooltip>
<UiTooltip text="Copy link" asLabel>
  <UiButton kind="ghost" iconOnly><CopyIcon /></UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
import { Copy as CopyIcon } from '@carbon/icons-react';

<Tooltip text="Signed copies are kept for 10 years">
  <Button kind="tertiary">Retention policy</Button>
</Tooltip>
<Tooltip text="Copy link" asLabel>
  <Button kind="ghost" iconOnly><CopyIcon /></Button>
</Tooltip>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/tooltip
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-tooltip
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tooltip.json
#    to its target:
#    components/ui/primitives/tooltip/tooltip.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-popup, shared-align, shared-element, shared-field, shared-position, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-tooltip.json
#    to its target:
#    components/ui/react-tw/tooltip.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-floating, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Wrap one focusable element, such as a button or a link, and put the text in `text`.


HTML:

```html
<script type="module">import '@purpurabog/ui/tooltip';</script>

<ui-tooltip text="Signed copies are kept for 10 years">
  <ui-button kind="tertiary">Retention policy</ui-button>
</ui-tooltip>
```

React:

```tsx
import { UiTooltip, UiButton } from '@purpurabog/ui/react';

<UiTooltip text="Signed copies are kept for 10 years">
  <UiButton kind="tertiary">Retention policy</UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
import { Tooltip } from '@/components/ui/react-tw/tooltip';
import { Button } from '@/components/ui/react-tw/button';

<Tooltip text="Signed copies are kept for 10 years">
  <Button kind="tertiary">Retention policy</Button>
</Tooltip>
```

## Tooltip, toggletip, definition tooltip or popover?

| Component | Use it when |
|---|---|
| [Tooltip](https://parntengza.github.io/kanok-ui-docs/en/tooltip/) | A short plain-text hint or the name of an icon. It opens on hover and focus and holds nothing to click. |
| [Toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) | The explanation has a link or a button, or should stay open until the user closes it. It opens on a click. |
| [Definition tooltip](https://parntengza.github.io/kanok-ui-docs/en/definition-tooltip/) | A word in running text needs a definition. The word gets a dotted underline. |
| [Popover](https://parntengza.github.io/kanok-ui-docs/en/popover/) | Your own content (filters, a small form) beside a trigger. |

## Placement

The bubble opens above the trigger (`placement="top"`). `bottom`, `left` and `right` move it. When there is no room, it flips to the other side. `align` is Carbon's name for the same attribute.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tooltip text="Opens above" placement="top"><ui-button kind="tertiary" size="sm">Top</ui-button></ui-tooltip>
  <ui-tooltip text="Opens below" placement="bottom"><ui-button kind="tertiary" size="sm">Bottom</ui-button></ui-tooltip>
  <ui-tooltip text="Opens on the left" placement="left"><ui-button kind="tertiary" size="sm">Left</ui-button></ui-tooltip>
  <ui-tooltip text="Opens on the right" placement="right"><ui-button kind="tertiary" size="sm">Right</ui-button></ui-tooltip>
</div>
```

React:

```tsx
<UiTooltip text="Opens above" placement="top"><UiButton kind="tertiary" size="sm">Top</UiButton></UiTooltip>
<UiTooltip text="Opens below" placement="bottom"><UiButton kind="tertiary" size="sm">Bottom</UiButton></UiTooltip>
<UiTooltip text="Opens on the left" placement="left"><UiButton kind="tertiary" size="sm">Left</UiButton></UiTooltip>
<UiTooltip text="Opens on the right" placement="right"><UiButton kind="tertiary" size="sm">Right</UiButton></UiTooltip>
```

React + Tailwind:

```tsx
<Tooltip text="Opens above" placement="top"><Button kind="tertiary" size="sm">Top</Button></Tooltip>
<Tooltip text="Opens below" placement="bottom"><Button kind="tertiary" size="sm">Bottom</Button></Tooltip>
<Tooltip text="Opens on the left" placement="left"><Button kind="tertiary" size="sm">Left</Button></Tooltip>
<Tooltip text="Opens on the right" placement="right"><Button kind="tertiary" size="sm">Right</Button></Tooltip>
```

## Start and end

Add `-start` or `-end` to line the bubble up with one edge of the trigger instead of its centre, for a trigger near the edge of the screen or a table. The caret still points at the trigger. In right-to-left pages, start and end swap sides.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tooltip text="Lined up with the start edge of the button" placement="bottom-start"><ui-button kind="tertiary" size="sm">Bottom start</ui-button></ui-tooltip>
  <ui-tooltip text="Lined up with the end edge of the button" placement="bottom-end"><ui-button kind="tertiary" size="sm">Bottom end</ui-button></ui-tooltip>
  <ui-tooltip text="Lined up with the start edge, above" placement="top-start"><ui-button kind="tertiary" size="sm">Top start</ui-button></ui-tooltip>
</div>
```

React:

```tsx
<UiTooltip text="Lined up with the start edge of the button" placement="bottom-start">…</UiTooltip>
<UiTooltip text="Lined up with the end edge of the button" placement="bottom-end">…</UiTooltip>
<UiTooltip text="Lined up with the start edge, above" placement="top-start">…</UiTooltip>
```

React + Tailwind:

```tsx
<Tooltip text="Lined up with the start edge of the button" placement="bottom-start">…</Tooltip>
<Tooltip text="Lined up with the end edge of the button" placement="bottom-end">…</Tooltip>
<Tooltip text="Lined up with the start edge, above" placement="top-start">…</Tooltip>
```

## Name an icon-only button

A button with only an icon has no visible name. `as-label` (`asLabel` in React) makes the text the button's accessible name, and gives the bubble Carbon's icon-tooltip look: smaller padding and caret, 8px from the button. [`<ui-icon-button>`](https://parntengza.github.io/kanok-ui-docs/en/button/#icon-only-buttons) does this for you with its `label`.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <ui-tooltip text="Edit contract" as-label>
    <ui-button kind="ghost" icon-only>
      <svg viewBox="0 0 16 16"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z"/></svg>
    </ui-button>
  </ui-tooltip>
  <ui-tooltip text="Duplicate contract" as-label>
    <ui-button kind="ghost" icon-only>
      <svg viewBox="0 0 16 16"><path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"/><path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z"/></svg>
    </ui-button>
  </ui-tooltip>
  <ui-tooltip text="Delete contract" as-label>
    <ui-button kind="ghost" icon-only>
      <svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9z"/><path d="M2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3Zm2 11V4h8v10ZM6 1h4v1H6z"/></svg>
    </ui-button>
  </ui-tooltip>
</div>
```

React:

```tsx
import { Copy as CopyIcon, Edit as EditIcon, TrashCan as TrashCanIcon } from '@carbon/icons-react';

<UiTooltip text="Edit contract" asLabel>
  <UiButton kind="ghost" iconOnly><EditIcon /></UiButton>
</UiTooltip>
<UiTooltip text="Duplicate contract" asLabel>
  <UiButton kind="ghost" iconOnly><CopyIcon /></UiButton>
</UiTooltip>
<UiTooltip text="Delete contract" asLabel>
  <UiButton kind="ghost" iconOnly><TrashCanIcon /></UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
import { Copy as CopyIcon, Edit as EditIcon, TrashCan as TrashCanIcon } from '@carbon/icons-react';

<Tooltip text="Edit contract" asLabel>
  <Button kind="ghost" iconOnly><EditIcon /></Button>
</Tooltip>
<Tooltip text="Duplicate contract" asLabel>
  <Button kind="ghost" iconOnly><CopyIcon /></Button>
</Tooltip>
<Tooltip text="Delete contract" asLabel>
  <Button kind="ghost" iconOnly><TrashCanIcon /></Button>
</Tooltip>
```

## Small

`small` gives the same compact look as `as-label`, but the text stays a description. Use it for a short hint on a control that already has a visible name.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tooltip text="Ctrl+S" small>
    <ui-button kind="secondary" size="sm">Save draft</ui-button>
  </ui-tooltip>
  <ui-tooltip text="Jumps to the table below" small placement="bottom">
    <a href="#keyboard">Keyboard</a>
  </ui-tooltip>
</div>
```

React:

```tsx
<UiTooltip text="Ctrl+S" small>
  <UiButton kind="secondary" size="sm">Save draft</UiButton>
</UiTooltip>
<UiTooltip text="Jumps to the table below" small placement="bottom">
  <a href="#keyboard">Keyboard</a>
</UiTooltip>
```

React + Tailwind:

```tsx
<Tooltip text="Ctrl+S" small>
  <Button kind="secondary" size="sm">Save draft</Button>
</Tooltip>
<Tooltip text="Jumps to the table below" small placement="bottom">
  <a href="#keyboard">Keyboard</a>
</Tooltip>
```

## Any focusable trigger

The trigger can be any element that takes focus: our buttons, a native `<button>`, a link. Wrap exactly one. The text joins the trigger's own descriptions (`aria-describedby`) and replaces none. A plain `<span>` or icon never gets keyboard focus, so keyboard users would never see its tooltip: wrap a button instead.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tooltip text="Last changed 12 March 2026 by Somchai">
    <button type="button">Version 3</button>
  </ui-tooltip>
  <ui-tooltip text="Contract CN-2026-0142, lease of the Silom office" placement="bottom">
    <a href="#any-focusable-trigger">CN-2026-0142</a>
  </ui-tooltip>
</div>
```

React:

```tsx
<UiTooltip text="Last changed 12 March 2026 by Somchai">
  <button type="button">Version 3</button>
</UiTooltip>
<UiTooltip text="Contract CN-2026-0142, lease of the Silom office" placement="bottom">
  <a href="/contracts/0142">CN-2026-0142</a>
</UiTooltip>
```

React + Tailwind:

```tsx
<Tooltip text="Last changed 12 March 2026 by Somchai">
  <button type="button">Version 3</button>
</Tooltip>
<Tooltip text="Contract CN-2026-0142, lease of the Silom office" placement="bottom">
  <a href="/contracts/0142">CN-2026-0142</a>
</Tooltip>
```

## Explain a disabled action

A `disabled` button can't take focus, so its tooltip never shows to keyboard users. Use `disabled-focusable` on the button instead: it looks and acts disabled but stays in the Tab order, and the tooltip says why.


HTML:

```html
<ui-tooltip text="Only approvers can sign. Ask Ananya in Legal." placement="right">
  <ui-button disabled-focusable>Sign contract</ui-button>
</ui-tooltip>
```

React:

```tsx
<UiTooltip text="Only approvers can sign. Ask Ananya in Legal." placement="right">
  <UiButton disabledFocusable>Sign contract</UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
<Tooltip text="Only approvers can sign. Ask Ananya in Legal." placement="right">
  <Button disabledFocusable>Sign contract</Button>
</Tooltip>
```

## Longer text

The bubble grows to fit its text up to 288px wide, then wraps. Keep it to a sentence or two: nobody can scroll a tooltip, and it disappears when the pointer moves away. Longer help belongs in a [toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) or on the page.


HTML:

```html
<ui-tooltip text="The retention period starts on the day the last party signs. After 10 years the signed copy moves to the archive, where only Legal can open it." placement="bottom">
  <ui-button kind="tertiary">How retention works</ui-button>
</ui-tooltip>
```

React:

```tsx
<UiTooltip text="The retention period starts on the day the last party signs. After 10 years the signed copy moves to the archive, where only Legal can open it." placement="bottom">
  <UiButton kind="tertiary">How retention works</UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
<Tooltip text="The retention period starts on the day the last party signs. After 10 years the signed copy moves to the archive, where only Legal can open it." placement="bottom">
  <Button kind="tertiary">How retention works</Button>
</Tooltip>
```

## Inside a box that clips

The bubble opens in the browser's top layer, so a parent with `overflow: hidden` or a small height can't cut it off. Hover the button in the short box below.


HTML:

```html
<div style="overflow: hidden; height: 56px; padding: 8px; border: 1px solid var(--ui-hairline)">
  <ui-tooltip text="This box hides its overflow, and the tooltip still shows in full" placement="bottom">
    <ui-button kind="tertiary" size="sm">Contract status</ui-button>
  </ui-tooltip>
</div>
```

React:

```tsx
<div style={{ overflow: 'hidden', height: 56 }}>
  <UiTooltip text="This box hides its overflow, and the tooltip still shows in full" placement="bottom">
    <UiButton kind="tertiary" size="sm">Contract status</UiButton>
  </UiTooltip>
</div>
```

React + Tailwind:

```tsx
<div className="h-14 overflow-hidden">
  <Tooltip text="This box hides its overflow, and the tooltip still shows in full" placement="bottom">
    <Button kind="tertiary" size="sm">Contract status</Button>
  </Tooltip>
</div>
```

## Keep it open: "Copied"

`open` shows the bubble. Together with `pinned`, it stays open whatever the pointer, focus, clicks and Esc do, until you clear `open`. Use it for a short confirmation, as Carbon's copy button does. Click the contract number below.


HTML:

```html
<ui-tooltip id="tooltip-copy" text="Copy contract number" small>
  <ui-button id="tooltip-copy-button" kind="ghost">CN-2026-0142</ui-button>
</ui-tooltip>

<script type="module">
  const tip = document.getElementById('tooltip-copy');
  const button = document.getElementById('tooltip-copy-button');
  let timer;
  button.addEventListener('click', async () => {
    await navigator.clipboard?.writeText('CN-2026-0142').catch(() => {});
    tip.text = 'Copied';
    tip.pinned = true;
    tip.open = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      tip.pinned = false;
      tip.open = false;
      tip.text = 'Copy contract number';
    }, 2000);
  });
</script>
```

React:

```tsx
const [copied, setCopied] = useState(false);
const copy = async () => {
  await navigator.clipboard.writeText('CN-2026-0142');
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

<UiTooltip text={copied ? 'Copied' : 'Copy contract number'} small open={copied} pinned={copied}>
  <UiButton kind="ghost" onClick={copy}>CN-2026-0142</UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
// open only while copied: left undefined, hover and focus decide
<Tooltip text={copied ? 'Copied' : 'Copy contract number'} small open={copied ? true : undefined}>
  <Button kind="ghost" onClick={copy}>CN-2026-0142</Button>
</Tooltip>
```

`copy` and `copied` are the same in both React versions. React + Tailwind has no `pinned`: while `open` is set, hover and focus only report through `onOpenChange`.

## Keyboard

| Key | What it does |
|---|---|
| Tab | Focus reaching the trigger opens the tooltip; focus leaving closes it |
| Esc | Closes the tooltip only. Focus stays on the trigger, and a surrounding modal stays open |
| Enter, Space | Activate the trigger and close the tooltip, so it doesn't cover the result |

A mouse click focuses the trigger without opening the tooltip a second time: the hover already showed it.

## Accessibility

- The bubble has `role="tooltip"`. Its text is the trigger's accessible description, or with `as-label` its accessible name. Screen readers read it without the bubble showing.
- It follows WCAG 1.4.13: the pointer can move onto the bubble without closing it, and Esc dismisses it.
- Never put links, buttons or anything else to click in a tooltip. Nobody can reach them. Use a [toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) or a [popover](https://parntengza.github.io/kanok-ui-docs/en/popover/).
- The text must not be the only place for information a user needs to finish a task. Touch screens have no hover.

Unstyled React parts with the same behaviour: [Headless Tooltip](https://parntengza.github.io/kanok-ui-docs/en/headless-tooltip/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-tooltip>` · React `UiTooltip`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `text` | `text` | `string` | `''` |  |
| `placement` | `placement` | `TooltipPlacement` | `'top'` |  |
| `as-label` | `asLabel` | `boolean` | `false` | Use the text as the trigger's accessible name instead of its description. |
| `small` | `small` | `boolean` | `false` | The icon tooltip's look (as `as-label`: 8px off, 2px / 16px padding, 8×4 caret) without naming the trigger. |
| `open` | `open` | `boolean` | `false` | Whether the bubble is showing. Hover / focus manage it; set it yourself together with `pinned`. |
| `pinned` | `pinned` | `boolean` | `false` | Keep the bubble open regardless of hover, focus, clicks and Escape — for a confirmation such as "Copied!" (Carbon copy button). While pinned, only `open` closes it. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `anchor` | `HTMLElement \| null` | The element the bubble points at, listens to and names / describes, instead of the slotted trigger — for a focusable host that renders its tooltip in its own shadow root (an icon-only content switcher item). |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the slotted trigger (delegatesFocus does not reach slotted light DOM). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The trigger (one focusable element, e.g. `<ui-button>`) |

#### CSS parts

| Part | Description |
|---|---|
| `bubble` | The tooltip bubble |
| `caret` | The arrow pointing at the trigger |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tooltip-radius` |  | Corner radius of the bubble (default `--ui-radius-xs`) |


