# Text input

A text input takes one line of text: a name, an email, a password, an ID number. For several lines, use a [text area](https://parntengza.github.io/kanok-ui-docs/en/text-area/); for amounts, a [number input](https://parntengza.github.io/kanok-ui-docs/en/number-input/).


HTML:

```html
<ui-text-input label="Full name" name="name" helper-text="As it appears on your ID card"></ui-text-input>
<ui-text-input label="Password" name="password" type="password"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Full name" name="name" helperText="As it appears on your ID card" />
<UiTextInput label="Password" name="password" type="password" />
```

React + Tailwind:

```tsx
<TextInput label="Full name" name="name" helperText="As it appears on your ID card" />
<TextInput label="Password" name="password" type="password" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/text-input
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-text-input
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/text-input.json
#    to its target:
#    components/ui/primitives/text-input/text-input-skeleton.ts
#    components/ui/primitives/text-input/text-input.styles.ts
#    components/ui/primitives/text-input/text-input.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, core-mask, shared-affixes, shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install class-variance-authority@0.7.1 @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-text-input.json
#    to its target:
#    components/ui/react-tw/text-input.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-affix, tw-field, tw-skeleton, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/text-input';</script>

<ui-text-input label="Full name" name="name"></ui-text-input>
```

React:

```tsx
import { UiTextInput } from '@purpurabog/ui/react';

<UiTextInput label="Full name" name="name" onInput={(e) => setName((e.target as HTMLInputElement).value)} />
```

React + Tailwind:

```tsx
import { TextInput } from '@/components/ui/react-tw/text-input';

<TextInput label="Full name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
```

- The element fires native `input` on every keystroke and `change` when the user commits the value, so the React wrapper has `onInput` and `onChange`.
- The React + Tailwind `onChange` is React's own (every keystroke). Its second argument is the value without a mask's separators.

## Sizes

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px.


HTML:

```html
<ui-text-input label="Small" size="sm"></ui-text-input>
<ui-text-input label="Medium"></ui-text-input>
<ui-text-input label="Large" size="lg"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Small" size="sm" />
<UiTextInput label="Medium" />
<UiTextInput label="Large" size="lg" />
```

React + Tailwind:

```tsx
<TextInput label="Small" size="sm" />
<TextInput label="Medium" />
<TextInput label="Large" size="lg" />
```

## Passwords

`type="password"` adds Carbon's show / hide button at the end of the field. Its tooltip is also its name and says what a press does next: "Show password", then "Hide password". Change the words with `show-password-label` and `hide-password-label`. Each press fires `ui-toggle` with `detail.visible`.


HTML:

```html
<ui-text-input id="text-input-password" label="Password" name="password" type="password" autocomplete="current-password"></ui-text-input>
<ui-text-input label="PIN" name="pin" type="password" inputmode="numeric" show-password-label="Show PIN" hide-password-label="Hide PIN"></ui-text-input>
<p>Password shown: <output id="text-input-password-out">no</output></p>
<script type="module">
  document.getElementById('text-input-password').addEventListener('ui-toggle', (event) => {
    document.getElementById('text-input-password-out').textContent = event.detail.visible ? 'yes' : 'no';
  });
</script>
```

React:

```tsx
<UiTextInput label="Password" name="password" type="password" autocomplete="current-password" onUiToggle={(e) => track(e.detail.visible)} />
<UiTextInput label="PIN" name="pin" type="password" inputmode="numeric" showPasswordLabel="Show PIN" hidePasswordLabel="Hide PIN" />
```

React + Tailwind:

```tsx
<TextInput label="Password" name="password" type="password" autoComplete="current-password" onTogglePasswordVisibility={(e, visible) => track(visible)} />
<TextInput label="PIN" name="pin" type="password" inputMode="numeric" showPasswordLabel="Show PIN" hidePasswordLabel="Hide PIN" />
```

## Email, phone and web addresses

`type` also takes `email`, `tel`, `url`, `search` and `number`, as on `<input>`. For the virtual keyboard alone, set `inputmode` (and `enterkeyhint` for its Enter key).

Add `autocomplete` so the browser can fill the field in. The browser checks an email address; a mask keeps a phone number readable.


HTML:

```html
<ui-text-input label="Work email" name="email" type="email" autocomplete="email"></ui-text-input>
<ui-text-input label="Mobile" name="mobile" type="tel" autocomplete="tel" mask="000-000-0000" helper-text="Format: 000-000-0000"></ui-text-input>
<ui-text-input label="Company website" name="website" type="url" placeholder="https://"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Work email" name="email" type="email" autocomplete="email" />
<UiTextInput label="Mobile" name="mobile" type="tel" autocomplete="tel" mask="000-000-0000" helperText="Format: 000-000-0000" />
<UiTextInput label="Company website" name="website" type="url" placeholder="https://" />
```

React + Tailwind:

```tsx
<TextInput label="Work email" name="email" type="email" autoComplete="email" />
<TextInput label="Mobile" name="mobile" type="tel" autoComplete="tel" mask="000-000-0000" helperText="Format: 000-000-0000" />
<TextInput label="Company website" name="website" type="url" placeholder="https://" />
```

## Currency, units and masks

`prefix-text` and `suffix-text` put text inside the field, before or after the value: a currency, a unit. They aren't part of the value, and screen readers hear them as part of the field's description.

`mask` formats the value as the user types: `0` is a digit, `a` a letter, `*` either, and any other character is a separator the field adds by itself. A mask of digits only brings up the numeric keyboard. Put the format in the helper text too, so people know it before they type.


HTML:

```html
<ui-text-input label="Weight" name="weight" suffix-text="kg"></ui-text-input>
<ui-text-input label="Citizen ID" name="citizenId" mask="0-0000-00000-00-0" helper-text="13 digits: 0-0000-00000-00-0"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Weight" name="weight" suffixText="kg" />
<UiTextInput label="Citizen ID" name="citizenId" mask="0-0000-00000-00-0" helperText="13 digits: 0-0000-00000-00-0" />
```

React + Tailwind:

```tsx
<TextInput label="Weight" name="weight" suffixText="kg" />
<TextInput label="Citizen ID" name="citizenId" mask="0-0000-00000-00-0" helperText="13 digits: 0-0000-00000-00-0" onChange={(e, raw) => setCitizenId(raw)} />
```

- The element's `value` and the submitted form get the formatted text (`1-2345-67890-12-3`). Its `rawValue` property gives what was typed, without separators (`1234567890123`). In React + Tailwind, `onChange` gets that as its second argument.
- A value your code sets, raw or formatted, shows formatted.
- None of these has a Carbon counterpart (Carbon puts the unit or the format in the label or helper text); they follow USWDS.

## Read the value

Listen to `input` to react on every keystroke, or to `change` once the user is done. With a mask, `value` is what the field shows and `rawValue` is what was typed.


HTML:

```html
<ui-text-input id="text-input-tax" label="Tax ID" name="taxId" mask="0-0000-00000-00-0" helper-text="13 digits"></ui-text-input>
<p>value: <output id="text-input-tax-value"></output><br>rawValue: <output id="text-input-tax-raw"></output></p>
<script type="module">
  const tax = document.getElementById('text-input-tax');
  tax.addEventListener('input', () => {
    document.getElementById('text-input-tax-value').textContent = tax.value;
    document.getElementById('text-input-tax-raw').textContent = tax.rawValue;
  });
</script>
```

React:

```tsx
import type { UiTextInput as UiTextInputElement } from '@purpurabog/ui/text-input';

<UiTextInput label="Tax ID" name="taxId" mask="0-0000-00000-00-0" helperText="13 digits" onInput={(e) => setTaxId((e.target as UiTextInputElement).rawValue)} />
```

React + Tailwind:

```tsx
<TextInput label="Tax ID" name="taxId" mask="0-0000-00000-00-0" helperText="13 digits" onChange={(e, raw) => setTaxId(raw)} />
```

## Character counter

`max-count` shows a counter above the field. It's a soft limit: people can paste a long text and then trim it. Going over turns the counter red, shows an error at once and blocks the form. Screen readers hear when the limit is near, not on every keystroke.


HTML:

```html
<ui-text-input label="Contract title" name="title" max-count="40" value="Lease of the warehouse on Rama IV Road"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Contract title" name="title" maxCount={40} value="Lease of the warehouse on Rama IV Road" />
```

React + Tailwind:

```tsx
<TextInput label="Contract title" name="title" maxCount={40} defaultValue="Lease of the warehouse on Rama IV Road" />
```

Change the messages with `too-long-text` (`{max}` becomes the limit) and `near-limit-text`. For a hard limit that stops typing, use `maxlength`. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/#count-characters-and-words).

## Helper text, warnings and errors

One line shows under the field at a time: an error beats a warning, and a warning beats the helper text.


HTML:

```html
<ui-text-input label="Phone" name="phone" helper-text="We only call about this contract"></ui-text-input>
<ui-text-input label="Email" name="email" value="somchai@gmial.com" warn warn-text="Check the spelling of the domain"></ui-text-input>
<ui-text-input label="Tax ID" name="taxId" value="12345" invalid invalid-text="A tax ID has 13 digits"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Phone" name="phone" helperText="We only call about this contract" />
<UiTextInput label="Email" name="email" value="somchai@gmial.com" warn warnText="Check the spelling of the domain" />
<UiTextInput label="Tax ID" name="taxId" value="12345" invalid invalidText="A tax ID has 13 digits" />
```

React + Tailwind:

```tsx
<TextInput label="Phone" name="phone" helperText="We only call about this contract" />
<TextInput label="Email" name="email" defaultValue="somchai@gmial.com" warn warnText="Check the spelling of the domain" />
<TextInput label="Tax ID" name="taxId" defaultValue="12345" invalid invalidText="A tax ID has 13 digits" />
```

- On the element, `required`, `pattern`, `minlength` and the browser's checks work as on `<input>`, and their errors wait until the user leaves the field. The React + Tailwind field shows what you pass in `invalid` and `invalidText`; validation is your app's, as in Carbon React.
- To put a link in a message, use the slot of the same name (`helper-text`, `warn-text`, `invalid-text`). In React + Tailwind, pass the markup to `helperText`, `warnText` or `invalidText`.
- When errors show, custom validity and server errors: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Label and helper text with markup

For a label or a message with markup, such as a link or an emphasis, use the `label` and `helper-text` slots (`warn-text` and `invalid-text` work the same way). The React + Tailwind field takes the markup in `label` and `helperText`.


HTML:

```html
<ui-text-input name="signerEmail" type="email" required>
  <span slot="label">Signer's email <em>(required)</em></span>
  <span slot="helper-text">We send the contract here. <a href="/en/forms/">How fields are checked</a></span>
</ui-text-input>
```

React:

```tsx
<UiTextInput name="signerEmail" type="email" required>
  <span slot="label">Signer's email <em>(required)</em></span>
  <span slot="helper-text">We send the contract here. <a href="/forms">How fields are checked</a></span>
</UiTextInput>
```

React + Tailwind:

```tsx
<TextInput
  name="signerEmail"
  type="email"
  required
  label={<>Signer's email <em>(required)</em></>}
  helperText={<>We send the contract here. <a href="/forms">How fields are checked</a></>}
/>
```

## Label position, read-only and disabled

- `hide-label` keeps the label for screen readers but doesn't show it. Use it only where something else on screen names the field.
- `inline` puts the label before the field and the message after it, in one row (Carbon's inline text input).
- `fluid`, or a fluid form around the field, puts the label inside a 64px box ([fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form)).
- `readonly` shows and submits the value, but the user can't change it. `disabled` greys the field out; it isn't submitted.


HTML:

```html
<ui-text-input label="Contract no." value="C-2026-0142" inline></ui-text-input>
<ui-text-input label="Contract no." value="C-2026-0142" readonly></ui-text-input>
<ui-text-input label="Branch" value="Bangkok" disabled></ui-text-input>
```

React:

```tsx
<UiTextInput label="Contract no." value="C-2026-0142" inline />
<UiTextInput label="Contract no." value="C-2026-0142" readonly />
<UiTextInput label="Branch" value="Bangkok" disabled />
```

React + Tailwind:

```tsx
<TextInput label="Contract no." defaultValue="C-2026-0142" inline />
<TextInput label="Contract no." defaultValue="C-2026-0142" readOnly />
<TextInput label="Branch" defaultValue="Bangkok" disabled />
```

## Fluid fields

A fluid field puts its label inside a 64px box, and an error or a warning shows inside the box below a line; there is no helper text. Set `fluid` on a field, or put the fields in a `<ui-fluid-form>` (see [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form)).


HTML:

```html
<ui-text-input label="Contract value" name="amount" prefix-text="฿" suffix-text="THB" value="500,000" fluid></ui-text-input>
<ui-text-input label="Password" name="password" type="password" fluid></ui-text-input>
```

React:

```tsx
<UiTextInput label="Contract value" name="amount" prefixText="฿" suffixText="THB" value="500,000" fluid />
<UiTextInput label="Password" name="password" type="password" fluid />
```

React + Tailwind:

```tsx
<TextInput label="Contract value" name="amount" prefixText="฿" suffixText="THB" defaultValue="500,000" fluid />
<TextInput label="Password" name="password" type="password" fluid />
```

## Check it in a form

In a `<form>`, the element checks `required`, `type`, `pattern`, `minlength` and the counter, as a native input does. A submit with a problem is blocked, every field with a problem shows its error, and the first one gets focus. Try sending this form empty.


HTML:

```html
<form id="text-input-form" method="dialog" style="display: grid; gap: 16px">
  <ui-text-input label="Supplier name" name="supplier" required></ui-text-input>
  <ui-text-input label="Email" name="email" type="email" required></ui-text-input>
  <div><ui-button type="submit" size="md">Add supplier</ui-button></div>
</form>
<p>Sent: <output id="text-input-form-out"></output></p>
<script type="module">
  const form = document.getElementById('text-input-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('text-input-form-out').textContent = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); addSupplier(new FormData(e.currentTarget)); }}>
  <UiTextInput label="Supplier name" name="supplier" required />
  <UiTextInput label="Email" name="email" type="email" required />
  <UiButton type="submit" size="md">Add supplier</UiButton>
</form>
```

React + Tailwind:

```tsx
// your validation fills `errors`, as in Carbon React
<form onSubmit={(e) => { e.preventDefault(); addSupplier(new FormData(e.currentTarget)); }} noValidate>
  <TextInput label="Supplier name" name="supplier" invalid={!!errors.supplier} invalidText={errors.supplier} />
  <TextInput label="Email" name="email" type="email" invalid={!!errors.email} invalidText={errors.email} />
  <Button type="submit" size="md">Add supplier</Button>
</form>
```

## Errors from your own checks

`setCustomValidity(message)` makes the field invalid with your message, as on `<input>`. Use it for a check the browser can't do, such as a contract number that is already in use. The error shows once the user leaves the field; `setCustomValidity('')` clears it. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/#check-a-rule-with-custom-validity).


HTML:

```html
<ui-text-input id="text-input-contract" label="Contract no." name="contractNo" helper-text="C-2026-0142 is already in use: try it"></ui-text-input>
<script type="module">
  const contract = document.getElementById('text-input-contract');
  contract.addEventListener('change', () => {
    contract.setCustomValidity(contract.value.trim() === 'C-2026-0142' ? 'This contract number is already in use' : '');
  });
</script>
```

React:

```tsx
<UiTextInput
  label="Contract no."
  name="contractNo"
  onChange={(e) => {
    const field = e.target as UiTextInputElement;
    field.setCustomValidity(isTaken(field.value) ? 'This contract number is already in use' : '');
  }}
/>
```

React + Tailwind:

```tsx
<TextInput
  label="Contract no."
  name="contractNo"
  invalid={taken}
  invalidText="This contract number is already in use"
  onBlur={(e) => setTaken(isTaken(e.target.value))}
/>
```

## Skeleton

While the data of a form loads, `<ui-text-input-skeleton>` keeps the field's place: a label bar and a field bar at its `size`, or a fluid box with `fluid`. Screen readers skip it, so say "loading" on the form (for example `aria-busy="true"`).


HTML:

```html
<ui-text-input-skeleton></ui-text-input-skeleton>
<ui-text-input-skeleton fluid></ui-text-input-skeleton>
```

React:

```tsx
import { UiTextInputSkeleton } from '@purpurabog/ui/react';

<UiTextInputSkeleton />
<UiTextInputSkeleton fluid />
```

React + Tailwind:

```tsx
import { TextInputSkeleton } from '@/components/ui/react-tw/text-input';

<TextInputSkeleton />
<TextInputSkeleton fluid />
```

## Keyboard

| Key | What it does |
|---|---|
| Enter | Submits the form the field sits in, as a native text input does |
| Enter or Space on the password button | Shows or hides the password |

## Accessibility

- The label is a real `<label>` for the inner `<input>`, and the message line is its `aria-describedby`. `aria-label` on the element does not reach the input; use `label` (with `hide-label` if it must not show).
- An error sets `aria-invalid` on the input. On the element it waits until the user leaves the field, so nobody hears "required" while still typing.
- The password button has no `aria-pressed`: its name changes with what it does next, as in Carbon.
- The prefix and suffix are read as part of the field's description, so "฿" or "kg" isn't lost to screen reader users.

Unstyled React parts with the same behaviour: [Headless Text input](https://parntengza.github.io/kanok-ui-docs/en/headless-text-input/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-text-input>` · React `UiTextInput`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Visible label text; the `label` slot replaces it when markup is needed. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the label for screen readers but don't show it. |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Message shown when invalid. Falls back to the browser's validation message. |
| `invalid` | `invalid` | `boolean` | `false` | Force the error state (e.g. a server-side error). |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `type` | `type` | `TextInputType` | `'text'` |  |
| `size` | `size` | `TextInputSize` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `placeholder` | `placeholder` | `string` | `''` |  |
| `autocomplete` | `autocomplete` | `string` | `''` |  |
| `inputmode` | `inputmode` | `string` | `''` | Passed to the text box: the virtual keyboard to show (`numeric`, `decimal`, `email`, `tel`, `url`, `search`…). |
| `enterkeyhint` | `enterkeyhint` | `string` | `''` | Passed to the text box: the label of the virtual keyboard's Enter key (`search`, `send`, `next`, `done`…). |
| `pattern` | `pattern` | `string` | `''` |  |
| `prefix-text` | `prefixText` | `string` | `''` | Text inside the field before the value, e.g. a currency (`฿`). Part of the field's description for screen readers. |
| `suffix-text` | `suffixText` | `string` | `''` | Text inside the field after the value, e.g. a unit (`kg`). Part of the field's description for screen readers. |
| `mask` | `mask` | `string` | `''` | Formats the value as the user types: `0` a digit, `a` a letter, `*` either; any other character is a separator added for the user (`\` makes a pattern character one). E.g. `0-0000-00000-00-0` (Thai citizen ID), `000-000-0000`. `value` and the form get the formatted text, `rawValue` what was typed. Put the format in the helper text too (Carbon). |
| `minlength` | `minlength` | `number \| undefined` |  |  |
| `maxlength` | `maxlength` | `number \| undefined` |  |  |
| `max-count` | `maxCount` | `number \| undefined` |  | Soft limit with a visible counter (unlike maxlength, extra text isn't blocked). |
| `too-long-text` | `tooLongText` | `string` | `''` | Error when over `max-count`; `{max}` is replaced with the limit. |
| `near-limit-text` | `nearLimitText` | `string` | `''` | Announced once when the remaining characters drop to 10% or less. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidTextInput`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `show-password-label` | `showPasswordLabel` | `string` | `''` | The password toggle's name and tooltip while the password is hidden (Carbon `showPasswordLabel`; default: the translation's "Show password"). |
| `hide-password-label` | `hidePasswordLabel` | `string` | `''` | The password toggle's name and tooltip while the password shows (Carbon `hidePasswordLabel`; default: the translation's "Hide password"). |
| `inline` | `inline` | `boolean` | `false` | Carbon `inline`: the label before the field, the helper / error text after it (ignored while fluid). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `rawValue` |  | (read-only) The characters typed, without the mask's separators (`value` when there is no mask). |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | `onChange` | Re-dispatched from the native input (native change is not composed) |
| `ui-toggle` | `onUiToggle` | detail: { visible } when the password toggle shows or hides the password (Carbon `onTogglePasswordVisibility`) |
| `input` | `onInput` | Native input event (already composed, so it reaches the host) |

#### Slots

| Slot | Description |
|---|---|
| `label` | Label content with markup; the `label` attribute is the plain-text fallback |
| `helper-text` | Helper text with markup (links, bold); overrides `helper-text` |
| `warn-text` | Warning text shown while `warn`; overrides `warn-text` |
| `invalid-text` | Error text shown while invalid; overrides `invalid-text` |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The field box around the input |
| `label` | The label |
| `input` | The native input |
| `prefix` | The text before the value |
| `suffix` | The text after the value |
| `password-toggle` | The show / hide password button |
| `password-tooltip` | The `<ui-tooltip>` around it (its name) |
| `counter` | The character counter |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-border` |  | Border on every side of the box (default none: Carbon's underline only; Kanok: a 1px outline) |
| `--ui-field-disabled-border-color` |  | Border colour when disabled (default: the underline transparent) |
| `--ui-field-readonly-border-color` |  | Border colour when read-only (default: a hairline underline) |
| `--ui-field-radius` |  | Corner radius of the box (default 0; Kanok: 6px) |
| `--ui-field-background` |  | Fill of the box (default `--ui-surface-1`; Kanok: transparent) |
| `--ui-label-font` |  | Font of the label (default `--ui-font-caption`; Kanok: 14px semibold) |
| `--ui-label-color` |  | Colour of the label (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-field-readonly-background` |  | The box's fill when read-only (default transparent; Kanok: a faint ink tint, so read-only reads as set and never weaker than disabled) |
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |


