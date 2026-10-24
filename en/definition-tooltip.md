# Definition tooltip

A definition tooltip explains a word in running text. The word gets a dotted underline; a click, Enter or Space shows its definition in a dark bubble below it. Use it for terms readers may not know, such as legal or internal words.


HTML:

```html
<p style="margin: 0; max-width: 560px">
  Choose <ui-definition-tooltip definition="A signing round in which every signer receives the document at the same time.">parallel signing</ui-definition-tooltip> when the order of signers does not matter.
</p>
```

React:

```tsx
<p>
  Choose <UiDefinitionTooltip definition="A signing round in which every signer receives the document at the same time.">parallel signing</UiDefinitionTooltip> when the order of signers does not matter.
</p>
```

React + Tailwind:

```tsx
<p>
  Choose <DefinitionTooltip definition="A signing round in which every signer receives the document at the same time.">parallel signing</DefinitionTooltip> when the order of signers does not matter.
</p>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/definition-tooltip
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-definition-tooltip
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/definition-tooltip.json
#    to its target:
#    components/ui/primitives/definition-tooltip/definition-tooltip.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-popup, shared-align, shared-element, shared-events, shared-field, shared-position, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-definition-tooltip.json
#    to its target:
#    components/ui/react-tw/definition-tooltip.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-floating, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Put the term inside the element and the explanation in `definition`.


HTML:

```html
<script type="module">import '@purpurabog/ui/definition-tooltip';</script>

<p>
  The <ui-definition-tooltip definition="The last day the contract is valid.">expiry date</ui-definition-tooltip> is set by the owner.
</p>
```

React:

```tsx
import { UiDefinitionTooltip } from '@purpurabog/ui/react';

<p>
  The <UiDefinitionTooltip definition="The last day the contract is valid.">expiry date</UiDefinitionTooltip> is set by the owner.
</p>
```

React + Tailwind:

```tsx
import { DefinitionTooltip } from '@/components/ui/react-tw/definition-tooltip';

<p>
  The <DefinitionTooltip definition="The last day the contract is valid.">expiry date</DefinitionTooltip> is set by the owner.
</p>
```

A [tooltip](https://parntengza.github.io/kanok-ui-docs/en/tooltip/) explains a control; a definition tooltip explains a word. When the explanation needs a link, use a [toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/).

## Open on hover

By default only a click, Enter, Space or keyboard focus opens the definition. `open-on-hover` (`openOnHover` in React) opens it when the pointer rests on the word too, as Carbon's `openOnHover`. However it opened, it closes 100ms after the pointer leaves the word and the bubble, so the pointer can move onto the bubble.


HTML:

```html
<p style="margin: 0; max-width: 560px">
  Every contract above 5 million baht needs a <ui-definition-tooltip open-on-hover definition="A second approver from Finance, on top of the department head.">dual approval</ui-definition-tooltip> before it is sent.
</p>
```

React:

```tsx
<p>
  Every contract above 5 million baht needs a <UiDefinitionTooltip openOnHover definition="A second approver from Finance, on top of the department head.">dual approval</UiDefinitionTooltip> before it is sent.
</p>
```

React + Tailwind:

```tsx
<p>
  Every contract above 5 million baht needs a <DefinitionTooltip openOnHover definition="A second approver from Finance, on top of the department head.">dual approval</DefinitionTooltip> before it is sent.
</p>
```

## Placement

The definition opens below the word (`placement="bottom"`). `top`, `left` and `right` move it, and `-start` / `-end` line it up with one edge of the word. It flips when there is no room. `align` is Carbon's name for the same attribute.


HTML:

```html
<p style="margin: 0; max-width: 560px">
  A <ui-definition-tooltip placement="top" definition="The person who keeps the signed copy.">custodian</ui-definition-tooltip> and a
  <ui-definition-tooltip placement="bottom-start" definition="The person who checks the terms before signing.">reviewer</ui-definition-tooltip> are named on every
  <ui-definition-tooltip placement="right" definition="A contract with more than two parties.">multi-party contract</ui-definition-tooltip>.
</p>
```

React:

```tsx
<UiDefinitionTooltip placement="top" definition="The person who keeps the signed copy.">custodian</UiDefinitionTooltip>
<UiDefinitionTooltip placement="bottom-start" definition="The person who checks the terms before signing.">reviewer</UiDefinitionTooltip>
<UiDefinitionTooltip placement="right" definition="A contract with more than two parties.">multi-party contract</UiDefinitionTooltip>
```

React + Tailwind:

```tsx
<DefinitionTooltip placement="top" definition="The person who keeps the signed copy.">custodian</DefinitionTooltip>
<DefinitionTooltip placement="bottom-start" definition="The person who checks the terms before signing.">reviewer</DefinitionTooltip>
<DefinitionTooltip placement="right" definition="A contract with more than two parties.">multi-party contract</DefinitionTooltip>
```

## Rich definition

For bold text or a line break, put the definition in the `definition` slot instead of the attribute. In React + Tailwind, `definition` takes any React node. Keep it short and with nothing to click: the bubble closes when focus leaves the word.


HTML:

```html
<p style="margin: 0; max-width: 560px">
  The <ui-definition-tooltip>POA<span slot="definition"><strong>Power of attorney</strong>: who may sign on behalf of the company.</span></ui-definition-tooltip> list comes from HR.
</p>
```

React:

```tsx
<p>
  The <UiDefinitionTooltip>POA<span slot="definition"><strong>Power of attorney</strong>: who may sign on behalf of the company.</span></UiDefinitionTooltip> list comes from HR.
</p>
```

React + Tailwind:

```tsx
<p>
  The <DefinitionTooltip definition={<><strong>Power of attorney</strong>: who may sign on behalf of the company.</>}>POA</DefinitionTooltip> list comes from HR.
</p>
```

## In a table header

A column header with an abbreviation is a common place for a definition. The bubble opens in the top layer, so the table's own overflow can't clip it.


HTML:

```html
<table style="border-collapse: collapse; font: var(--ui-font-body-sm)">
  <thead>
    <tr>
      <th style="padding: 8px 16px; text-align: start">Contract</th>
      <th style="padding: 8px 16px; text-align: start"><ui-definition-tooltip definition="Service level agreement: the response time promised to the customer.">SLA</ui-definition-tooltip></th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding: 8px 16px">Maintenance, Silom office</td><td style="padding: 8px 16px">4 hours</td></tr>
    <tr><td style="padding: 8px 16px">Cleaning, Asok branch</td><td style="padding: 8px 16px">1 day</td></tr>
  </tbody>
</table>
```

React:

```tsx
<th>
  <UiDefinitionTooltip definition="Service level agreement: the response time promised to the customer.">SLA</UiDefinitionTooltip>
</th>
```

React + Tailwind:

```tsx
<th>
  <DefinitionTooltip definition="Service level agreement: the response time promised to the customer.">SLA</DefinitionTooltip>
</th>
```

## Longer definitions

The bubble is at most 176px wide, so a longer definition wraps over several lines. Two short sentences is about the limit; beyond that, link to a glossary instead.


HTML:

```html
<p style="margin: 0; max-width: 560px">
  Send the draft to the <ui-definition-tooltip definition="The team that checks every clause against company policy and current Thai law before a contract goes out. They reply within two working days.">legal review queue</ui-definition-tooltip> before Friday.
</p>
```

React:

```tsx
<UiDefinitionTooltip definition="The team that checks every clause against company policy and current Thai law before a contract goes out. They reply within two working days.">legal review queue</UiDefinitionTooltip>
```

React + Tailwind:

```tsx
<DefinitionTooltip definition="The team that checks every clause against company policy and current Thai law before a contract goes out. They reply within two working days.">legal review queue</DefinitionTooltip>
```

## Open state and events

`open` is the state, and you can set it yourself. `ui-toggle` fires after the definition opens or closes, with `detail.open`. Use it, for example, to count which terms people look up. Open the term below a few times.


HTML:

```html
<p style="margin: 0; max-width: 560px">
  A <ui-definition-tooltip id="definition-tooltip-escrow" definition="Money held by a third party until both sides meet the terms.">escrow account</ui-definition-tooltip> protects the deposit.
</p>
<p style="margin: 0">Opened <output id="definition-tooltip-escrow-out">0</output> times</p>

<script type="module">
  const term = document.getElementById('definition-tooltip-escrow');
  const out = document.getElementById('definition-tooltip-escrow-out');
  let count = 0;
  term.addEventListener('ui-toggle', (event) => {
    if (event.detail.open) out.value = String(++count);
  });
</script>
```

React:

```tsx
const [count, setCount] = useState(0);

<UiDefinitionTooltip definition="Money held by a third party until both sides meet the terms." onUiToggle={(e) => e.detail.open && setCount((n) => n + 1)}>
  escrow account
</UiDefinitionTooltip>
<p>Opened <output>{count}</output> times</p>
```

React + Tailwind:

```tsx
const [count, setCount] = useState(0);

<DefinitionTooltip definition="Money held by a third party until both sides meet the terms." onOpenChange={(open) => open && setCount((n) => n + 1)}>
  escrow account
</DefinitionTooltip>
<p>Opened <output>{count}</output> times</p>
```

React + Tailwind also takes `open` (controlled) and `defaultOpen`.

## Keyboard

| Key | What it does |
|---|---|
| Tab | Focus reaching the word opens the definition; focus leaving closes it |
| Enter, Space | Open or close the definition |
| Esc | Closes the definition only; a surrounding modal stays open |

The word is a real `<button>` with `tabindex="0"`, so Tab reaches it in every browser, Safari included.

## Accessibility

- The word is a button with `aria-expanded` and `aria-controls`. The bubble has `role="tooltip"`.
- The definition is also the word's accessible description, so screen readers read it on focus without opening the bubble.
- The underline is dotted and turns blue on hover and focus, so it doesn't look like a link. Don't use it on words that go somewhere: use a link.

Unstyled React parts with the same behaviour: [Headless Definition tooltip](https://parntengza.github.io/kanok-ui-docs/en/headless-definition-tooltip/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-definition-tooltip>` · React `UiDefinitionTooltip`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `definition` | `definition` | `string` | `''` | The explanation (plain text); use the `definition` slot for markup. |
| `placement` | `placement` | `Placement` | `'bottom'` |  |
| `open` | `open` | `boolean` | `false` |  |
| `open-on-hover` | `openOnHover` | `boolean` | `false` | Also open on pointer hover (Carbon `openOnHover`). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } |

#### Slots

| Slot | Description |
|---|---|
| (default) | The term (inline text) |
| `definition` | Rich definition (overrides the `definition` attribute) |

#### CSS parts

| Part | Description |
|---|---|
| `trigger` | The term button |
| `bubble` | The popover |
| `caret` | The arrow |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tooltip-radius` |  | Corner radius of the bubble (default `--ui-radius-xs`; the tooltip setting) |


