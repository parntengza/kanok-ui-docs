# Radio button

Radio buttons pick exactly one option from a small set, with every option in view. Once one is picked, the user can change it but not clear it.


HTML:

```html
<ui-radio-group label="Payment" name="payment" value="transfer">
  <ui-radio value="transfer">Bank transfer</ui-radio>
  <ui-radio value="card">Credit card</ui-radio>
  <ui-radio value="cash">Cash at the branch</ui-radio>
</ui-radio-group>
```

React:

```tsx
<UiRadioGroup label="Payment" name="payment" value="transfer">
  <UiRadio value="transfer">Bank transfer</UiRadio>
  <UiRadio value="card">Credit card</UiRadio>
  <UiRadio value="cash">Cash at the branch</UiRadio>
</UiRadioGroup>
```

React + Tailwind:

```tsx
<RadioGroup label="Payment" name="payment" defaultValue="transfer">
  <Radio value="transfer">Bank transfer</Radio>
  <Radio value="card">Credit card</Radio>
  <Radio value="cash">Cash at the branch</Radio>
</RadioGroup>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/radio @kanok-ui/tile
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-radio-group
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/radio.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tile.json
#    to its target:
#    components/ui/primitives/radio/radio-group.ts
#    components/ui/primitives/radio/radio-shared.ts
#    components/ui/primitives/radio/radio-skeleton.ts
#    components/ui/primitives/radio/radio.ts
#    components/ui/primitives/tile/expandable-tile.ts
#    components/ui/primitives/tile/radio-tile.ts
#    components/ui/primitives/tile/selectable-tile.ts
#    components/ui/primitives/tile/selection-tiles-shared.ts
#    components/ui/primitives/tile/selection-tiles.ts
#    components/ui/primitives/tile/tile.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-roving, shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens, checkbox, shared-events, shared-navigate

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-radio-group.json
#    to its target:
#    components/ui/react-tw/radio-group.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-field, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/radio';</script>

<ui-radio-group label="Payment" name="payment">
  <ui-radio value="transfer">Bank transfer</ui-radio>
  <ui-radio value="card">Credit card</ui-radio>
</ui-radio-group>
```

React:

```tsx
import { UiRadio, UiRadioGroup } from '@purpurabog/ui/react';

<UiRadioGroup label="Payment" name="payment">
  <UiRadio value="transfer">Bank transfer</UiRadio>
  <UiRadio value="card">Credit card</UiRadio>
</UiRadioGroup>
```

React + Tailwind:

```tsx
import { Radio, RadioGroup } from '@/components/ui/react-tw/radio-group';

<RadioGroup label="Payment" name="payment">
  <Radio value="transfer">Bank transfer</Radio>
  <Radio value="card">Credit card</Radio>
</RadioGroup>
```

Radios always go in a group: the group holds the label, the `name` and the value, and submits the checked option's `value`. More than about five options, or not enough room? Use a [Select or Dropdown](https://parntengza.github.io/kanok-ui-docs/en/select/#select-dropdown-combobox-or-multiselect).

## Starting value and changes

The group's `value` is the checked option. Without it, a `<ui-radio checked>` is the starting choice; with neither, nothing is checked. Reset goes back to the starting choice. `change` fires on the group when the user picks another option.


HTML:

```html
<ui-radio-group id="radio-payment" label="Payment" name="payment" value="card">
  <ui-radio value="transfer">Bank transfer</ui-radio>
  <ui-radio value="card">Credit card</ui-radio>
  <ui-radio value="cash">Cash at the branch</ui-radio>
</ui-radio-group>
<p>Value: <output id="radio-payment-out"></output></p>

<script type="module">
  const payment = document.getElementById('radio-payment');
  const out = document.getElementById('radio-payment-out');
  out.value = payment.value;
  payment.addEventListener('change', () => (out.value = payment.value));
</script>
```

React:

```tsx
import type { UiRadioGroup as RadioGroupElement } from '@purpurabog/ui';

const [payment, setPayment] = useState('card');

<UiRadioGroup label="Payment" name="payment" value={payment} onChange={(e) => setPayment((e.target as RadioGroupElement).value)}>…</UiRadioGroup>
<p>Value: <output>{payment}</output></p>
```

React + Tailwind:

```tsx
const [payment, setPayment] = useState('card');

<RadioGroup label="Payment" name="payment" value={payment} onValueChange={setPayment}>…</RadioGroup>
<p>Value: <output>{payment}</output></p>
```

## Orientation

Groups are vertical by default. `orientation="horizontal"` puts the options in a row; keep it for two or three short options.


HTML:

```html
<ui-radio-group label="Contract length" name="length" orientation="horizontal" value="12">
  <ui-radio value="6">6 months</ui-radio>
  <ui-radio value="12">1 year</ui-radio>
  <ui-radio value="36">3 years</ui-radio>
</ui-radio-group>
```

React:

```tsx
<UiRadioGroup label="Contract length" name="length" orientation="horizontal" value="12">
  <UiRadio value="6">6 months</UiRadio>
  <UiRadio value="12">1 year</UiRadio>
  <UiRadio value="36">3 years</UiRadio>
</UiRadioGroup>
```

React + Tailwind:

```tsx
<RadioGroup label="Contract length" name="length" orientation="horizontal" defaultValue="12">
  <Radio value="6">6 months</Radio>
  <Radio value="12">1 year</Radio>
  <Radio value="36">3 years</Radio>
</RadioGroup>
```

## Label position

`label-position="left"` puts each option's text before its circle (Carbon `labelPosition`). A vertical group then lines the circles up at its end. Set it on one radio to move only that one.


HTML:

```html
<ui-radio-group label="Signing order" name="order" label-position="left" value="internal">
  <ui-radio value="internal">Internal first</ui-radio>
  <ui-radio value="parallel">Parallel</ui-radio>
  <ui-radio value="external">External first</ui-radio>
</ui-radio-group>
```

React:

```tsx
<UiRadioGroup label="Signing order" name="order" labelPosition="left" value="internal">
  <UiRadio value="internal">Internal first</UiRadio>
  <UiRadio value="parallel">Parallel</UiRadio>
  <UiRadio value="external">External first</UiRadio>
</UiRadioGroup>
```

React + Tailwind:

```tsx
<RadioGroup label="Signing order" name="order" labelPosition="left" defaultValue="internal">
  <Radio value="internal">Internal first</Radio>
  <Radio value="parallel">Parallel</Radio>
  <Radio value="external">External first</Radio>
</RadioGroup>
```

## Helper text, warnings and errors

The group has one message line under its options: `helper-text`, a non-blocking `warn` with `warn-text`, and `invalid` with `invalid-text`. An error beats a warning, and a warning beats the helper text.


HTML:

```html
<ui-radio-group label="Signing order" name="order1" value="internal" helper-text="Who signs first">
  <ui-radio value="internal">Internal first</ui-radio>
  <ui-radio value="external">External first</ui-radio>
</ui-radio-group>
<ui-radio-group label="Delivery of the signed copy" name="delivery" value="post" warn warn-text="Registered post takes 3 to 5 working days">
  <ui-radio value="email">Email</ui-radio>
  <ui-radio value="post">Registered post</ui-radio>
</ui-radio-group>
<ui-radio-group label="Governing law" name="law" invalid invalid-text="Choose the law that governs the contract">
  <ui-radio value="th">Thai law</ui-radio>
  <ui-radio value="sg">Singapore law</ui-radio>
</ui-radio-group>
```

React:

```tsx
<UiRadioGroup label="Signing order" name="order1" value="internal" helperText="Who signs first">…</UiRadioGroup>
<UiRadioGroup label="Delivery of the signed copy" name="delivery" value="post" warn warnText="Registered post takes 3 to 5 working days">…</UiRadioGroup>
<UiRadioGroup label="Governing law" name="law" invalid invalidText="Choose the law that governs the contract">…</UiRadioGroup>
```

React + Tailwind:

```tsx
<RadioGroup label="Signing order" name="order1" defaultValue="internal" helperText="Who signs first">…</RadioGroup>
<RadioGroup label="Delivery of the signed copy" name="delivery" defaultValue="post" warn warnText="Registered post takes 3 to 5 working days">…</RadioGroup>
<RadioGroup label="Governing law" name="law" invalid invalidText="Choose the law that governs the contract">…</RadioGroup>
```

## Disabled options, read-only and disabled

- `disabled` on one radio skips it; on the group, it disables every option and the group isn't submitted.
- `readonly` (`readOnly` in React + Tailwind) keeps the value and submits it. The arrow keys still move focus so people can read the options, but nothing changes.


HTML:

```html
<ui-radio-group label="Payment" value="transfer" readonly>
  <ui-radio value="transfer">Bank transfer</ui-radio>
  <ui-radio value="cash" disabled>Cash at the branch</ui-radio>
</ui-radio-group>
<ui-radio-group label="Payment" value="transfer" disabled>
  <ui-radio value="transfer">Bank transfer</ui-radio>
  <ui-radio value="cash">Cash at the branch</ui-radio>
</ui-radio-group>
```

React:

```tsx
<UiRadioGroup label="Payment" value="transfer" readonly>
  <UiRadio value="transfer">Bank transfer</UiRadio>
  <UiRadio value="cash" disabled>Cash at the branch</UiRadio>
</UiRadioGroup>
<UiRadioGroup label="Payment" value="transfer" disabled>…</UiRadioGroup>
```

React + Tailwind:

```tsx
<RadioGroup label="Payment" defaultValue="transfer" readOnly>
  <Radio value="transfer">Bank transfer</Radio>
  <Radio value="cash" disabled>Cash at the branch</Radio>
</RadioGroup>
<RadioGroup label="Payment" defaultValue="transfer" disabled>…</RadioGroup>
```

## Show more fields for one choice

A choice often needs details that only apply to it, such as a bank account for a transfer. Listen to `change` and show the extra field only for that option.


HTML:

```html
<ui-radio-group id="radio-refund" label="Refund the deposit by" name="refund" value="cash">
  <ui-radio value="cash">Cash at the branch</ui-radio>
  <ui-radio value="transfer">Bank transfer</ui-radio>
</ui-radio-group>
<div id="radio-refund-account" hidden>
  <ui-text-input label="Account number" name="account" helper-text="The tenant's own account"></ui-text-input>
</div>

<script type="module">
  const refund = document.getElementById('radio-refund');
  const account = document.getElementById('radio-refund-account');
  refund.addEventListener('change', () => (account.hidden = refund.value !== 'transfer'));
</script>
```

React:

```tsx
const [refund, setRefund] = useState('cash');

<UiRadioGroup label="Refund the deposit by" name="refund" value={refund} onChange={(e) => setRefund((e.target as RadioGroupElement).value)}>
  <UiRadio value="cash">Cash at the branch</UiRadio>
  <UiRadio value="transfer">Bank transfer</UiRadio>
</UiRadioGroup>
{refund === 'transfer' && <UiTextInput label="Account number" name="account" helperText="The tenant's own account" />}
```

React + Tailwind:

```tsx
const [refund, setRefund] = useState('cash');

<RadioGroup label="Refund the deposit by" name="refund" value={refund} onValueChange={setRefund}>
  <Radio value="cash">Cash at the branch</Radio>
  <Radio value="transfer">Bank transfer</Radio>
</RadioGroup>
{refund === 'transfer' && <TextInput label="Account number" name="account" helperText="The tenant's own account" />}
```

## Required in a form

`required` on the group blocks submit until an option is picked, with a built-in message (`required-text` changes it). The rest: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/). Press Submit without a choice to see the message.


HTML:

```html
<form id="radio-form" style="display: grid; gap: 16px">
  <ui-radio-group label="Contract type" name="type" required required-text="Choose the contract type">
    <ui-radio value="sale">Sale</ui-radio>
    <ui-radio value="lease">Lease</ui-radio>
  </ui-radio-group>
  <div><ui-button type="submit">Submit</ui-button></div>
</form>
<p>Submitted: <output id="radio-form-out"></output></p>

<script type="module">
  const form = document.getElementById('radio-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('radio-form-out').value = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={submit}>
  <UiRadioGroup label="Contract type" name="type" required requiredText="Choose the contract type">
    <UiRadio value="sale">Sale</UiRadio>
    <UiRadio value="lease">Lease</UiRadio>
  </UiRadioGroup>
  <UiButton type="submit">Submit</UiButton>
</form>
<p>Submitted: <output>{sent}</output></p>
```

React + Tailwind:

```tsx
// validation is your app's: `tried` is set on the first submit
<form onSubmit={submit}>
  <RadioGroup label="Contract type" name="type" value={type} onValueChange={setType} required invalid={tried && !type} invalidText="Choose the contract type">
    <Radio value="sale">Sale</Radio>
    <Radio value="lease">Lease</Radio>
  </RadioGroup>
  <Button type="submit">Submit</Button>
</form>
<p>Submitted: <output>{sent}</output></p>
```

`submit` prevents the navigation and puts `new FormData(form)` into `sent`, as in the HTML.

## Radio tiles

The same group also holds radio tiles (`<ui-radio-tile>`, from `@purpurabog/ui/selection-tiles`) when each option needs more room: a title and a line of description. The check mark shows only on the chosen tile.


HTML:

```html
<ui-radio-group label="Signing method" name="method" orientation="horizontal" value="esign">
  <ui-radio-tile value="esign"><b>E-signature</b><br />Sign online in minutes</ui-radio-tile>
  <ui-radio-tile value="paper"><b>Paper</b><br />Print, sign, scan</ui-radio-tile>
  <ui-radio-tile value="hybrid" disabled><b>Hybrid</b><br />Coming soon</ui-radio-tile>
</ui-radio-group>
```

React:

```tsx
import { UiRadioTile } from '@purpurabog/ui/react';

<UiRadioGroup label="Signing method" name="method" orientation="horizontal" value="esign">
  <UiRadioTile value="esign"><b>E-signature</b><br />Sign online in minutes</UiRadioTile>
  <UiRadioTile value="paper"><b>Paper</b><br />Print, sign, scan</UiRadioTile>
  <UiRadioTile value="hybrid" disabled><b>Hybrid</b><br />Coming soon</UiRadioTile>
</UiRadioGroup>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-tile
import { RadioTile } from '@/components/ui/react-tw/tile';

<RadioGroup label="Signing method" name="method" orientation="horizontal" defaultValue="esign">
  <RadioTile value="esign"><b>E-signature</b><br />Sign online in minutes</RadioTile>
  <RadioTile value="paper"><b>Paper</b><br />Print, sign, scan</RadioTile>
  <RadioTile value="hybrid" disabled><b>Hybrid</b><br />Coming soon</RadioTile>
</RadioGroup>
```

## Skeleton

While the options load, show one `ui-radio-skeleton` per option: a label bar (Carbon draws no circle). It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<div aria-busy="true">
  <ui-radio-skeleton></ui-radio-skeleton>
  <ui-radio-skeleton></ui-radio-skeleton>
  <ui-radio-skeleton></ui-radio-skeleton>
</div>
```

React:

```tsx
import { UiRadioSkeleton } from '@purpurabog/ui/react';

<div aria-busy="true">
  <UiRadioSkeleton />
  <UiRadioSkeleton />
  <UiRadioSkeleton />
</div>
```

React + Tailwind:

```tsx
import { RadioSkeleton } from '@/components/ui/react-tw/radio-group';

<div aria-busy="true">
  <RadioSkeleton />
  <RadioSkeleton />
  <RadioSkeleton />
</div>
```

On the web component, import it from `@purpurabog/ui/radio-skeleton`.

## Keyboard

| Key | Does |
|---|---|
| Tab | Enters the group on the checked option (else the first), and leaves it on the next Tab |
| ↓ / → | Moves to the next option and checks it; wraps from the last to the first |
| ↑ / ← | Moves to the previous option and checks it; wraps from the first to the last |
| Space | Checks the focused option |

## Accessibility

- The group is a `role="radiogroup"` named by its label, with one Tab stop, as the WAI-ARIA radio group pattern describes. Disabled options are skipped.
- The group's helper, warning or error text describes it, and each radio repeats the error so a screen reader hears it on the option it lands on.
- Use `hide-label` only when the context already names the group; the label then stays for screen readers.

Unstyled React parts with the same behaviour: [Headless Radio button](https://parntengza.github.io/kanok-ui-docs/en/headless-radio/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-radio-group>` · React `UiRadioGroup`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Group label (rendered like a fieldset legend). |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the group label for screen readers but don't show it. |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `value` | `value` | `string` | `''` |  |
| `orientation` | `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` |  |
| `label-position` | `labelPosition` | `RadioLabelPosition` | `'right'` | Carbon `labelPosition`: `left` puts each radio's text before its circle (default `right`, after it). |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |
| `required-text` | `requiredText` | `string` | `''` | Error text for an empty required group. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `input` | none (use a ref) |  |
| `change` | none (use a ref) | When the user picks an option |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-radio>` options |
| `label` | Label content with markup; the `label` attribute is the plain-text fallback |
| `helper-text` | Helper text with markup (links, bold); overrides `helper-text` |
| `warn-text` | Warning text shown while `warn`; overrides `warn-text` |
| `invalid-text` | Error text shown while invalid; overrides `invalid-text` |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The group box holding the radios |
| `label` | The group label |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

### `<ui-radio>` · React `UiRadio`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `string` | `''` |  |
| `checked` | `checked` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `label-position` | `labelPosition` | `RadioLabelPosition \| undefined` |  | Carbon `labelPosition`: `left` puts the text before the circle; unset, the group's `label-position` applies. |

#### Slots

| Slot | Description |
|---|---|
| (default) | Label text |

#### CSS parts

| Part | Description |
|---|---|
| `circle` | The drawn radio circle |
| `label` | The text beside it |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-radio-border` |  | Ring colour (default `--ui-ink`; Kanok: `--ui-ink-subtle`) |
| `--ui-radio-checked` |  | Ring and dot when chosen (default `--ui-ink`; Kanok: `--ui-primary`) |

### `<ui-radio-tile>` · React `UiRadioTile`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `string` | `''` |  |
| `checked` | `checked` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `label-position` | `labelPosition` | `RadioLabelPosition \| undefined` |  | Carbon `labelPosition`: `left` puts the text before the circle; unset, the group's `label-position` applies. |

#### Slots

| Slot | Description |
|---|---|
| (default) | Tile content (title, description…) |

#### CSS parts

| Part | Description |
|---|---|
| `circle` | The drawn radio circle |
| `label` | The text beside it |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tile-border-color` |  | Border of an unchosen tile (default transparent; Kanok: a hairline); `--ui-card-radius` its corners |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-tile-selected-border` |  | Border of the chosen tile (default `--ui-layer-selected-inverse`; Kanok: primary blue); `--ui-tile-selected-mark` its check mark (default `--ui-icon-primary`) |
| `--ui-tile-selected-background` |  | Fill of the chosen tile (default `--ui-card-background`; Kanok: soft highlight wash) |
| `--ui-tile-mark-space` |  | End padding kept clear for the mark (default 48px, Carbon's); e.g. 16px lets the content run under the mark in the top-end corner (beyond Carbon) |
| `--ui-radio-border` |  | Ring colour (default `--ui-ink`; Kanok: `--ui-ink-subtle`) |
| `--ui-radio-checked` |  | Ring and dot when chosen (default `--ui-ink`; Kanok: `--ui-primary`) |


