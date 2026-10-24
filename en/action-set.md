# Action set

An action set is the row of large buttons at the foot of a side panel or a tearsheet (Carbon for IBM Products `ActionSet`). The buttons are 64px tall with their text at the top, split by thin lines, and they share the width by rules that depend on how many there are and how wide the set is. In a narrow set they stack, the primary on top.


HTML:

```html
<ui-action-set size="lg">
  <ui-button kind="ghost">Cancel</ui-button>
  <ui-button kind="secondary">Return to sender</ui-button>
  <ui-button>Approve</ui-button>
</ui-action-set>
```

React:

```tsx
<UiActionSet size="lg">
  <UiButton kind="ghost">Cancel</UiButton>
  <UiButton kind="secondary">Return to sender</UiButton>
  <UiButton>Approve</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
<ActionSet
  size="lg"
  actions={[
    { label: 'Cancel', kind: 'ghost' },
    { label: 'Return to sender', kind: 'secondary' },
    { label: 'Approve', kind: 'primary' },
  ]}
/>
```

[Side panels](https://parntengza.github.io/kanok-ui-docs/en/side-panel/#action-buttons) and [tearsheets](https://parntengza.github.io/kanok-ui-docs/en/tearsheet/#actions-and-the-close-button) lay out their own `slot="actions"` buttons by these rules, so you don't need `<ui-action-set>` there. Use it for a panel or a page foot you build yourself.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/action-set
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-action-set
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/action-set.json
#    to its target:
#    components/ui/primitives/action-set/action-set.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-action-set, shared-action-set, shared-element, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-action-set.json
#    to its target:
#    components/ui/react-tw/action-set.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-action-set, tw-button, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/action-set';</script>

<ui-action-set>
  <ui-button kind="secondary">Cancel</ui-button>
  <ui-button>Save</ui-button>
</ui-action-set>
```

React:

```tsx
import { UiActionSet, UiButton } from '@purpurabog/ui/react';

<UiActionSet>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton>Save</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
import { ActionSet } from '@/components/ui/react-tw/action-set';

<ActionSet
  actions={[
    { label: 'Cancel', kind: 'secondary' },
    { label: 'Save', kind: 'primary' },
  ]}
/>
```

The web component takes `<ui-button>`s as children. React + Tailwind takes the buttons as data in `actions`: each one is a [Button](https://parntengza.github.io/kanok-ui-docs/en/button/)'s props plus a `label`.

## Action set or button set?

| Component | Use it for |
|---|---|
| Action set | The foot of a side panel, a tearsheet or a full-width panel: 64px buttons that fill the width by Carbon's rules and stack when the panel is narrow. |
| [Button set](https://parntengza.github.io/kanok-ui-docs/en/button/#button-set) | Buttons at the end of a form: normal-height buttons side by side, each up to 196px wide. |

## Size and stacking

`size` is the size of the panel the set sits in: `sm`, `md` (the default), `lg`, `xl` or `2xl` (a side panel's `xs` counts as `sm`). A small set always stacks; a medium set stacks from three buttons. In a row, two buttons take half each, three or four take a quarter each (232px at most) in a large set, and in `xl` and `2xl` sets every button takes a quarter.


HTML:

```html
<div style="display: grid; gap: 32px">
  <ui-action-set size="sm" style="max-width: 320px">
    <ui-button kind="secondary">Cancel</ui-button>
    <ui-button>Save</ui-button>
  </ui-action-set>
  <ui-action-set size="md" style="max-width: 480px">
    <ui-button kind="secondary">Cancel</ui-button>
    <ui-button>Save</ui-button>
  </ui-action-set>
  <ui-action-set size="lg">
    <ui-button kind="secondary">Cancel</ui-button>
    <ui-button>Save</ui-button>
  </ui-action-set>
  <ui-action-set size="xl">
    <ui-button kind="secondary">Cancel</ui-button>
    <ui-button>Save</ui-button>
  </ui-action-set>
</div>
```

React:

```tsx
const two = (
  <>
    <UiButton kind="secondary">Cancel</UiButton>
    <UiButton>Save</UiButton>
  </>
);

<UiActionSet size="sm" style={{ maxWidth: 320 }}>{two}</UiActionSet>
<UiActionSet size="md" style={{ maxWidth: 480 }}>{two}</UiActionSet>
<UiActionSet size="lg">{two}</UiActionSet>
<UiActionSet size="xl">{two}</UiActionSet>
```

React + Tailwind:

```tsx
const two = [
  { label: 'Cancel', kind: 'secondary' },
  { label: 'Save', kind: 'primary' },
] as const;

<ActionSet size="sm" className="max-w-80" actions={two} />
<ActionSet size="md" className="max-w-120" actions={two} />
<ActionSet size="lg" actions={two} />
<ActionSet size="xl" actions={two} />
```

The `max-width`s only stand in for the panel widths in this preview.

## One, three or four buttons

A lone button fills a medium set and takes half of a large one. Three buttons stack in a medium set and sit in quarters in a large one. Four is the most a set takes.


HTML:

```html
<div style="display: grid; gap: 32px">
  <ui-action-set size="md">
    <ui-button>Close</ui-button>
  </ui-action-set>
  <ui-action-set size="lg">
    <ui-button>Close</ui-button>
  </ui-action-set>
  <ui-action-set size="md" style="max-width: 480px">
    <ui-button kind="tertiary">Save draft</ui-button>
    <ui-button kind="secondary">Cancel</ui-button>
    <ui-button>Submit</ui-button>
  </ui-action-set>
  <ui-action-set size="lg">
    <ui-button kind="tertiary">Save draft</ui-button>
    <ui-button kind="secondary">Cancel</ui-button>
    <ui-button kind="danger">Withdraw</ui-button>
    <ui-button>Submit</ui-button>
  </ui-action-set>
</div>
```

React:

```tsx
<UiActionSet size="md"><UiButton>Close</UiButton></UiActionSet>
<UiActionSet size="lg"><UiButton>Close</UiButton></UiActionSet>
<UiActionSet size="md" style={{ maxWidth: 480 }}>
  <UiButton kind="tertiary">Save draft</UiButton>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton>Submit</UiButton>
</UiActionSet>
<UiActionSet size="lg">
  <UiButton kind="tertiary">Save draft</UiButton>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton kind="danger">Withdraw</UiButton>
  <UiButton>Submit</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
<ActionSet size="md" actions={[{ label: 'Close' }]} />
<ActionSet size="lg" actions={[{ label: 'Close' }]} />
<ActionSet size="md" className="max-w-120" actions={[{ label: 'Save draft', kind: 'tertiary' }, { label: 'Cancel', kind: 'secondary' }, { label: 'Submit' }]} />
<ActionSet size="lg" actions={[{ label: 'Save draft', kind: 'tertiary' }, { label: 'Cancel', kind: 'secondary' }, { label: 'Withdraw', kind: 'danger' }, { label: 'Submit' }]} />
```

## Order of the buttons

Carbon's order in a row is ghost, tertiary, secondary, danger, primary, so the primary action ends the row. A stack shows them the other way round, the primary on top.

- Web component and React wrapper: write the buttons in that order. The element keeps your order; a stack only reverses it on screen.
- React + Tailwind: `ActionSet` sorts `actions` into that order itself.


HTML:

```html
<ui-action-set size="sm" style="max-width: 320px">
  <ui-button kind="secondary">Cancel</ui-button>
  <ui-button>Send for signature</ui-button>
</ui-action-set>
```

React:

```tsx
<UiActionSet size="sm" style={{ maxWidth: 320 }}>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton>Send for signature</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
// any order: ActionSet puts the primary on top of the stack
<ActionSet size="sm" className="max-w-80" actions={[{ label: 'Send for signature' }, { label: 'Cancel', kind: 'secondary' }]} />
```

Carbon allows one primary and one ghost per set. In a stacked set, Carbon also advises against a ghost next to other buttons. A set that breaks these rules, or has more buttons than its size takes, warns on the browser console as Carbon's `ActionSet` does, once until the buttons change; side panels and tearsheets check their actions too.

## A ghost takes what is left

A ghost button in a row takes the width the others leave: 75% next to one button, 50% next to two, 25% next to three. Its text starts 16px in. Use it for Cancel in a wide panel.


HTML:

```html
<ui-action-set size="lg">
  <ui-button kind="ghost">Cancel</ui-button>
  <ui-button>Create contract</ui-button>
</ui-action-set>
```

React:

```tsx
<UiActionSet size="lg">
  <UiButton kind="ghost">Cancel</UiButton>
  <UiButton>Create contract</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
<ActionSet size="lg" actions={[{ label: 'Cancel', kind: 'ghost' }, { label: 'Create contract' }]} />
```

## Condensed

`condensed` makes the buttons 48px tall, as Carbon's `condensedActions` on a side panel.


HTML:

```html
<ui-action-set size="lg" condensed>
  <ui-button kind="secondary">Cancel</ui-button>
  <ui-button>Save</ui-button>
</ui-action-set>
```

React:

```tsx
<UiActionSet size="lg" condensed>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton>Save</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
<ActionSet size="lg" condensed actions={[{ label: 'Cancel', kind: 'secondary' }, { label: 'Save' }]} />
```

## Keep the buttons in a row

`disable-stacking` (`disableStacking`) keeps the buttons side by side even where Carbon would stack them. Use it only when the labels are short enough to fit.


HTML:

```html
<ui-action-set size="md" disable-stacking style="max-width: 480px">
  <ui-button kind="tertiary">Draft</ui-button>
  <ui-button kind="secondary">Cancel</ui-button>
  <ui-button>Send</ui-button>
</ui-action-set>
```

React:

```tsx
<UiActionSet size="md" disableStacking style={{ maxWidth: 480 }}>
  <UiButton kind="tertiary">Draft</UiButton>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton>Send</UiButton>
</UiActionSet>
```

React + Tailwind:

```tsx
<ActionSet size="md" disableStacking className="max-w-120" actions={[{ label: 'Draft', kind: 'tertiary' }, { label: 'Cancel', kind: 'secondary' }, { label: 'Send' }]} />
```

## Handle the clicks

The buttons are ordinary buttons: listen to each one's `click`. In React + Tailwind, give each action an `onClick`; `disabled` and `loading` work too, as on a [Button](https://parntengza.github.io/kanok-ui-docs/en/button/).


HTML:

```html
<ui-action-set size="lg">
  <ui-button id="action-set-reject" kind="secondary">Reject</ui-button>
  <ui-button id="action-set-approve">Approve</ui-button>
</ui-action-set>
<p>Last action: <output id="action-set-out"></output></p>

<script type="module">
  const out = document.getElementById('action-set-out');
  document.getElementById('action-set-reject').addEventListener('click', () => (out.value = 'Rejected'));
  document.getElementById('action-set-approve').addEventListener('click', () => (out.value = 'Approved'));
</script>
```

React:

```tsx
const [last, setLast] = useState('');

<UiActionSet size="lg">
  <UiButton kind="secondary" onClick={() => setLast('Rejected')}>Reject</UiButton>
  <UiButton onClick={() => setLast('Approved')}>Approve</UiButton>
</UiActionSet>
<p>Last action: <output>{last}</output></p>
```

React + Tailwind:

```tsx
const [last, setLast] = useState('');

<ActionSet
  size="lg"
  actions={[
    { label: 'Reject', kind: 'secondary', onClick: () => setLast('Rejected') },
    { label: 'Approve', onClick: () => setLast('Approved') },
  ]}
/>
<p>Last action: <output>{last}</output></p>
```

## Accessibility

- The buttons are real buttons in the order you write them: Tab follows the markup, the same in a row and in a stack. In a stack, the web component shows them reversed, so the primary on top is the last one Tab reaches, as in Carbon.
- Give each button a label that says what happens ("Approve", not "OK").
- The thin line between two buttons is left out next to the focused one, so the focus ring stays clear.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-action-set>` · React `UiActionSet`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `ActionSetSize` | `'md'` | The set's size (a side panel's size; xs counts as sm): how the buttons share the row, or stack. |
| `condensed` | `condensed` | `boolean` | `false` | 48px buttons instead of 64px (Carbon `condensedActions` of a side panel). |
| `disable-stacking` | `disableStacking` | `boolean` | `false` | Keep the buttons in a row even where Carbon would stack them. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `stacked` |  | (read-only) Whether the buttons stack, one per row. |

#### Slots

| Slot | Description |
|---|---|
| (default) | The buttons |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The row of buttons |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-actions-gap` |  | / --ui-actions-padding - Gap between the action buttons and padding round them (default none: full-bleed buttons that touch; Kanok: 8px / 16px 20px) |
| `--ui-actions-button-flex` |  | `flex` of each action button (default: Carbon's widths by count; Kanok: their own width) |
| `--ui-actions-button-align` |  | / --ui-actions-button-padding-top - Where a button's label sits (default: at the top, 16px in) |
| `--ui-actions-stacked-direction` |  | / --ui-actions-stacked-wrap / --ui-actions-stacked-width - Where Carbon stacks the actions (narrow): `flex-direction`, `flex-wrap` and each button's width (default column-reverse, nowrap, 100%; Kanok: one row that wraps) |


