# Checkbox

A checkbox turns one option on or off. In a group, people can pick any number of options, including none.


HTML:

```html
<ui-checkbox-group label="Send updates by" helper-text="Pick as many as you like">
  <ui-checkbox name="channels" value="email" checked>Email</ui-checkbox>
  <ui-checkbox name="channels" value="sms">SMS</ui-checkbox>
  <ui-checkbox name="channels" value="post">Post</ui-checkbox>
</ui-checkbox-group>
```

React:

```tsx
<UiCheckboxGroup label="Send updates by" helperText="Pick as many as you like">
  <UiCheckbox name="channels" value="email" checked>Email</UiCheckbox>
  <UiCheckbox name="channels" value="sms">SMS</UiCheckbox>
  <UiCheckbox name="channels" value="post">Post</UiCheckbox>
</UiCheckboxGroup>
```

React + Tailwind:

```tsx
<FormGroup legend="Send updates by" message="Pick as many as you like">
  <Checkbox label="Email" name="channels" value="email" defaultChecked />
  <Checkbox label="SMS" name="channels" value="sms" />
  <Checkbox label="Post" name="channels" value="post" />
</FormGroup>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/checkbox @kanok-ui/tile
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-checkbox
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/checkbox.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tile.json
#    to its target:
#    components/ui/primitives/checkbox/checkbox-group.ts
#    components/ui/primitives/checkbox/checkbox-skeleton.ts
#    components/ui/primitives/checkbox/checkbox.ts
#    components/ui/primitives/tile/expandable-tile.ts
#    components/ui/primitives/tile/radio-tile.ts
#    components/ui/primitives/tile/selectable-tile.ts
#    components/ui/primitives/tile/selection-tiles-shared.ts
#    components/ui/primitives/tile/selection-tiles.ts
#    components/ui/primitives/tile/tile.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens, radio, shared-events, shared-navigate

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-checkbox.json
#    to its target:
#    components/ui/react-tw/checkbox.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-field, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">
  import '@purpurabog/ui/checkbox';
  import '@purpurabog/ui/checkbox-group';
</script>

<ui-checkbox name="terms" required>I accept the terms</ui-checkbox>
```

React:

```tsx
import { UiCheckbox, UiCheckboxGroup } from '@purpurabog/ui/react';

<UiCheckbox name="terms" required>I accept the terms</UiCheckbox>
```

React + Tailwind:

```tsx
import { Checkbox } from '@/components/ui/react-tw/checkbox';

<Checkbox label="I accept the terms" name="terms" required />
```

The label is the element's content on the web component and the `label` prop in React + Tailwind. Import `checkbox-group` only when you use the group.

## One checkbox

- `checked` sets the state. `change` fires when the user toggles it.
- A checked box submits `value` (`on` by default) under `name`; an unchecked box submits nothing.
- `required` blocks submit until the box is checked, as for accepting terms.


HTML:

```html
<ui-checkbox id="checkbox-newsletter" name="newsletter" value="yes">Send me the newsletter</ui-checkbox>
<p>checked: <output id="checkbox-newsletter-out">false</output></p>

<script type="module">
  const box = document.getElementById('checkbox-newsletter');
  box.addEventListener('change', () => (document.getElementById('checkbox-newsletter-out').value = box.checked));
</script>
```

React:

```tsx
import type { UiCheckbox as CheckboxElement } from '@purpurabog/ui';

const [on, setOn] = useState(false);

<UiCheckbox name="newsletter" value="yes" checked={on} onChange={(e) => setOn((e.target as CheckboxElement).checked)}>
  Send me the newsletter
</UiCheckbox>
<p>checked: <output>{String(on)}</output></p>
```

React + Tailwind:

```tsx
const [on, setOn] = useState(false);

<Checkbox label="Send me the newsletter" name="newsletter" value="yes" checked={on} onChange={(e) => setOn(e.target.checked)} />
<p>checked: <output>{String(on)}</output></p>
```

## A group of checkboxes

`ui-checkbox-group` labels a set of boxes and is announced as one group:

- `required` means "at least one": the form won't submit until a box is checked.
- `orientation="horizontal"` puts the boxes in a row.
- `disabled` and `readonly` apply to every box, without overwriting each box's own setting.
- Each checkbox still submits its own `name` and `value`, so read them with `FormData.getAll()`.


HTML:

```html
<ui-checkbox-group label="Documents received" orientation="horizontal" required>
  <ui-checkbox name="docs" value="id">ID card</ui-checkbox>
  <ui-checkbox name="docs" value="house">House registration</ui-checkbox>
  <ui-checkbox name="docs" value="bank">Bank book</ui-checkbox>
</ui-checkbox-group>
```

React:

```tsx
<UiCheckboxGroup label="Documents received" orientation="horizontal" required>
  <UiCheckbox name="docs" value="id">ID card</UiCheckbox>
  <UiCheckbox name="docs" value="house">House registration</UiCheckbox>
  <UiCheckbox name="docs" value="bank">Bank book</UiCheckbox>
</UiCheckboxGroup>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-form-group
import { FormGroup } from '@/components/ui/react-tw/form-group';

<FormGroup legend="Documents received" invalid={!!docsError} message={docsError}>
  <div className="flex gap-6">
    <Checkbox label="ID card" name="docs" value="id" />
    <Checkbox label="House registration" name="docs" value="house" />
    <Checkbox label="Bank book" name="docs" value="bank" />
  </div>
</FormGroup>
```

React + Tailwind has no checkbox group: use `FormGroup` (Carbon's fieldset), lay the boxes out yourself, and check "at least one" in your own validation. In the example, `docsError` comes from your own validation, such as "Select at least one option."

## Helper text, warnings and errors on one box

A single checkbox has its own message line under the label: `helper-text`, a non-blocking `warn` with `warn-text`, and `invalid` with `invalid-text`. An error beats a warning, and a warning beats the helper text.


HTML:

```html
<ui-checkbox name="stamp" helper-text="Tick when the receipt is attached">Stamp duty paid</ui-checkbox>
<ui-checkbox name="witness" checked warn warn-text="Only one witness has signed">Witnesses signed</ui-checkbox>
<ui-checkbox name="terms" invalid invalid-text="You must accept the terms to continue">I accept the terms</ui-checkbox>
```

React:

```tsx
<UiCheckbox name="stamp" helperText="Tick when the receipt is attached">Stamp duty paid</UiCheckbox>
<UiCheckbox name="witness" checked warn warnText="Only one witness has signed">Witnesses signed</UiCheckbox>
<UiCheckbox name="terms" invalid invalidText="You must accept the terms to continue">I accept the terms</UiCheckbox>
```

React + Tailwind:

```tsx
<Checkbox label="Stamp duty paid" name="stamp" helperText="Tick when the receipt is attached" />
<Checkbox label="Witnesses signed" name="witness" defaultChecked warn warnText="Only one witness has signed" />
<Checkbox label="I accept the terms" name="terms" invalid invalidText="You must accept the terms to continue" />
```

## Warnings and errors on a group

On `ui-checkbox-group`, the message belongs to the whole group and shows once under it. An error also turns every enabled box red, and each box repeats the error for screen readers.


HTML:

```html
<ui-checkbox-group label="Signing parties" warn warn-text="The guarantor usually signs too">
  <ui-checkbox name="parties" value="lessor" checked>Lessor</ui-checkbox>
  <ui-checkbox name="parties" value="lessee" checked>Lessee</ui-checkbox>
  <ui-checkbox name="parties" value="guarantor">Guarantor</ui-checkbox>
</ui-checkbox-group>
<ui-checkbox-group label="Copies to keep" invalid invalid-text="Keep at least one copy on paper or as a PDF">
  <ui-checkbox name="copies" value="paper">Paper</ui-checkbox>
  <ui-checkbox name="copies" value="pdf">PDF</ui-checkbox>
</ui-checkbox-group>
```

React:

```tsx
<UiCheckboxGroup label="Signing parties" warn warnText="The guarantor usually signs too">…</UiCheckboxGroup>
<UiCheckboxGroup label="Copies to keep" invalid invalidText="Keep at least one copy on paper or as a PDF">…</UiCheckboxGroup>
```

React + Tailwind:

```tsx
<FormGroup legend="Copies to keep" invalid message="Keep at least one copy on paper or as a PDF">
  <Checkbox label="Paper" name="copies" value="paper" />
  <Checkbox label="PDF" name="copies" value="pdf" />
</FormGroup>
```

React + Tailwind's `FormGroup` has `invalid` and `message` (the message turns red) but no warning state.

## Indeterminate

`indeterminate` shows a bar instead of a check: a parent box whose children are partly checked. The user's next click clears it. Keep the parent in step with its children in your code:


HTML:

```html
<ui-stack gap="3">
  <ui-checkbox id="checkbox-all" indeterminate>All channels</ui-checkbox>
  <div id="checkbox-channels" style="padding-inline-start: 24px">
    <ui-checkbox value="email" checked>Email</ui-checkbox>
    <ui-checkbox value="sms">SMS</ui-checkbox>
  </div>
</ui-stack>

<script type="module">
  const all = document.getElementById('checkbox-all');
  const channels = [...document.getElementById('checkbox-channels').children];
  const sync = () => {
    const on = channels.filter((box) => box.checked).length;
    all.checked = on === channels.length;
    all.indeterminate = on > 0 && on < channels.length;
  };
  all.addEventListener('change', () => {
    for (const box of channels) box.checked = all.checked;
    sync();
  });
  for (const box of channels) box.addEventListener('change', sync);
</script>
```

React:

```tsx
const all = ['email', 'sms'];
const [chosen, setChosen] = useState(['email']);
const some = chosen.length > 0 && chosen.length < all.length;
const pick = (value: string, on: boolean) => setChosen((c) => (on ? [...c, value] : c.filter((v) => v !== value)));

<UiCheckbox checked={chosen.length === all.length} indeterminate={some} onChange={(e) => setChosen((e.target as CheckboxElement).checked ? all : [])}>
  All channels
</UiCheckbox>
<UiCheckbox checked={chosen.includes('email')} onChange={(e) => pick('email', (e.target as CheckboxElement).checked)}>Email</UiCheckbox>
<UiCheckbox checked={chosen.includes('sms')} onChange={(e) => pick('sms', (e.target as CheckboxElement).checked)}>SMS</UiCheckbox>
```

React + Tailwind:

```tsx
<Checkbox label="All channels" checked={chosen.length === all.length} indeterminate={some} onChange={(e) => setChosen(e.target.checked ? all : [])} />
<Checkbox label="Email" checked={chosen.includes('email')} onChange={(e) => pick('email', e.target.checked)} />
<Checkbox label="SMS" checked={chosen.includes('sms')} onChange={(e) => pick('sms', e.target.checked)} />
```

`all`, `chosen`, `some` and `pick` are the same in every React version. On the web component, do the same in `change` listeners: set `checked` and `indeterminate` on the parent from its children.

## Hide the label

`hide-label` keeps the label for screen readers but doesn't show it, such as for a checkbox in a table row.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-checkbox hide-label>Select contract C-2026-0142</ui-checkbox>
  <span>C-2026-0142 · Lease of the warehouse on Rama IV Road</span>
</div>
```

React:

```tsx
<UiCheckbox hideLabel>Select contract C-2026-0142</UiCheckbox>
```

React + Tailwind:

```tsx
<Checkbox label="Select contract C-2026-0142" hideLabel />
```

## Read-only and disabled

`readonly` (`readOnly` in React + Tailwind) keeps the state and submits it, but clicks and Space change nothing. `disabled` greys the box out, and it isn't submitted.


HTML:

```html
<ui-checkbox checked readonly>Signed by both parties</ui-checkbox>
<ui-checkbox disabled>Archived</ui-checkbox>
```

React:

```tsx
<UiCheckbox checked readonly>Signed by both parties</UiCheckbox>
<UiCheckbox disabled>Archived</UiCheckbox>
```

React + Tailwind:

```tsx
<Checkbox label="Signed by both parties" defaultChecked readOnly />
<Checkbox label="Archived" disabled />
```

## Required in a form

A required group needs at least one box; a required single box must be checked. The errors wait until the user has used the field or pressed Submit. Press Submit with nothing checked to see both.


HTML:

```html
<form id="checkbox-form" style="display: grid; gap: 16px">
  <ui-checkbox-group label="Send copies to" required helper-text="Pick at least one">
    <ui-checkbox name="cc" value="legal">Legal</ui-checkbox>
    <ui-checkbox name="cc" value="finance">Finance</ui-checkbox>
    <ui-checkbox name="cc" value="procurement">Procurement</ui-checkbox>
  </ui-checkbox-group>
  <ui-checkbox name="terms" value="accepted" required invalid-text="Accept the terms to continue">I have read the contract terms</ui-checkbox>
  <div><ui-button type="submit">Submit</ui-button></div>
</form>
<p>Submitted: <output id="checkbox-form-out"></output></p>

<script type="module">
  const form = document.getElementById('checkbox-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('checkbox-form-out').value = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={submit}>
  <UiCheckboxGroup label="Send copies to" required helperText="Pick at least one">
    <UiCheckbox name="cc" value="legal">Legal</UiCheckbox>
    <UiCheckbox name="cc" value="finance">Finance</UiCheckbox>
    <UiCheckbox name="cc" value="procurement">Procurement</UiCheckbox>
  </UiCheckboxGroup>
  <UiCheckbox name="terms" value="accepted" required invalidText="Accept the terms to continue">I have read the contract terms</UiCheckbox>
  <UiButton type="submit">Submit</UiButton>
</form>
<p>Submitted: <output>{sent}</output></p>
```

React + Tailwind:

```tsx
// validation is your app's: `ccError` and `termsError` come from your checks on submit
<form onSubmit={submit}>
  <FormGroup legend="Send copies to" invalid={!!ccError} message={ccError ?? 'Pick at least one'}>
    <Checkbox label="Legal" name="cc" value="legal" />
    <Checkbox label="Finance" name="cc" value="finance" />
    <Checkbox label="Procurement" name="cc" value="procurement" />
  </FormGroup>
  <Checkbox label="I have read the contract terms" name="terms" value="accepted" invalid={!!termsError} invalidText={termsError} />
  <Button type="submit">Submit</Button>
</form>
<p>Submitted: <output>{sent}</output></p>
```

`submit` prevents the navigation and puts `new FormData(form)` into `sent`, as in the HTML. The group's message is built in, in Thai and English; `required-text` or `invalid-text` replaces it. More: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Selectable tiles

When each option needs a title and a description, use `ui-selectable-tile`: a checkbox drawn as a tile (Carbon's `SelectableTile`), from `@purpurabog/ui/selection-tiles`. It submits `name` and `value` like a checkbox, and Space toggles it. In a `ui-checkbox-group` the tiles are members like checkboxes: the group's `required`, `disabled`, `readonly` and error apply to them.


HTML:

```html
<ui-checkbox-group label="Add-on services" orientation="horizontal">
  <ui-selectable-tile name="addons" value="stamp"><b>Stamp duty</b><br />Calculate and pay</ui-selectable-tile>
  <ui-selectable-tile name="addons" value="translate" checked><b>Translation</b><br />Thai ⇄ English</ui-selectable-tile>
  <ui-selectable-tile name="addons" value="courier"><b>Courier</b><br />Signed copies by messenger</ui-selectable-tile>
</ui-checkbox-group>
```

React:

```tsx
import { UiSelectableTile } from '@purpurabog/ui/react';

<UiCheckboxGroup label="Add-on services" orientation="horizontal">
  <UiSelectableTile name="addons" value="stamp"><b>Stamp duty</b><br />Calculate and pay</UiSelectableTile>
  <UiSelectableTile name="addons" value="translate" checked><b>Translation</b><br />Thai ⇄ English</UiSelectableTile>
  <UiSelectableTile name="addons" value="courier"><b>Courier</b><br />Signed copies by messenger</UiSelectableTile>
</UiCheckboxGroup>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-tile
import { SelectableTile } from '@/components/ui/react-tw/tile';

<FormGroup legend="Add-on services">
  <div className="flex flex-wrap gap-4">
    <SelectableTile name="addons" value="stamp"><b>Stamp duty</b><br />Calculate and pay</SelectableTile>
    <SelectableTile name="addons" value="translate" defaultChecked><b>Translation</b><br />Thai ⇄ English</SelectableTile>
    <SelectableTile name="addons" value="courier"><b>Courier</b><br />Signed copies by messenger</SelectableTile>
  </div>
</FormGroup>
```

## Skeleton

While the options load, show one `ui-checkbox-skeleton` per row: an empty box and a label bar. It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<div aria-busy="true">
  <ui-checkbox-skeleton></ui-checkbox-skeleton>
  <ui-checkbox-skeleton></ui-checkbox-skeleton>
  <ui-checkbox-skeleton></ui-checkbox-skeleton>
</div>
```

React:

```tsx
import { UiCheckboxSkeleton } from '@purpurabog/ui/react';

<div aria-busy="true">
  <UiCheckboxSkeleton />
  <UiCheckboxSkeleton />
  <UiCheckboxSkeleton />
</div>
```

React + Tailwind:

```tsx
import { CheckboxSkeleton } from '@/components/ui/react-tw/checkbox';

<div aria-busy="true">
  <CheckboxSkeleton />
  <CheckboxSkeleton />
  <CheckboxSkeleton />
</div>
```

On the web component, import it from `@purpurabog/ui/checkbox-skeleton`.

## Keyboard

| Key | Does |
|---|---|
| Space | Checks or unchecks the focused box |
| Tab | Moves to the next box: each checkbox is its own Tab stop |

## Accessibility

- Each box is a native checkbox inside a `<label>`, so the whole row is clickable and screen readers hear its state, "mixed" included.
- `ui-checkbox-group` is a `role="group"` named by its label; its helper, warning or error text describes the group, and every box repeats the group's error so it is heard on the first box.
- Don't use a checkbox for a setting that applies at once; use a [Toggle](https://parntengza.github.io/kanok-ui-docs/en/toggle/).

Unstyled React parts with the same behaviour: [Headless Checkbox](https://parntengza.github.io/kanok-ui-docs/en/headless-checkbox/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-checkbox>` · React `UiCheckbox`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `checked` | `checked` | `boolean` | `false` |  |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Mixed state, e.g. a "select all" box with some children checked. Cleared on user toggle. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the label text for screen readers but don't show it. |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `value` | `value` | `string` | `'on'` |  |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `groupDisabled` | `boolean` | Set by ui-checkbox-group; kept apart from the author's own disabled / readonly. |
| `groupMessage` | `string` | Error text of the owning ui-checkbox-group while the group is invalid. The group shows it once below the boxes; each box repeats it as its own accessible description and reports aria-invalid, so a screen reader landing on the first box hears why (an IDREF cannot cross the group's shadow root). |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | none (use a ref) | When the user toggles the box |

#### Slots

| Slot | Description |
|---|---|
| (default) | Label text |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The clickable row (label element) |
| `control` | The native checkbox input |
| `box` | The drawn 16px box |
| `label` | The text beside the box |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-checkbox-border` |  | Border of the box (default `--ui-ink`; Kanok: `--ui-ink-subtle`) |
| `--ui-checkbox-checked` |  | Fill and border when checked or mixed (default `--ui-ink`; Kanok: `--ui-primary`) |
| `--ui-checkbox-mark` |  | Check mark colour (default `--ui-icon-inverse`; Kanok: `--ui-on-primary`) |

### `<ui-checkbox-group>` · React `UiCheckboxGroup`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Visible label text; the `label` slot replaces it when markup is needed. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the group label for screen readers but don't show it. |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `required-text` | `requiredText` | `string` | `''` | Error for an empty required group. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `orientation` | `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` |  |

#### Properties

| Property | Type | Description |
|---|---|---|
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-checkbox>` or `<ui-selectable-tile>` elements |
| `label` | Label content with markup; the `label` attribute is the plain-text fallback |
| `helper-text` | Helper text with markup (links, bold); overrides `helper-text` |
| `warn-text` | Warning text shown while `warn`; overrides `warn-text` |
| `invalid-text` | Error text shown while invalid; overrides `invalid-text` |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The group box holding the checkboxes |
| `label` | The group label |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

### `<ui-selectable-tile>` · React `UiSelectableTile`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `checked` | `checked` | `boolean` | `false` |  |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Mixed state, e.g. a "select all" box with some children checked. Cleared on user toggle. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the label text for screen readers but don't show it. |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `value` | `value` | `string` | `'on'` |  |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `groupDisabled` | `boolean` | Set by ui-checkbox-group; kept apart from the author's own disabled / readonly. |
| `groupMessage` | `string` | Error text of the owning ui-checkbox-group while the group is invalid. The group shows it once below the boxes; each box repeats it as its own accessible description and reports aria-invalid, so a screen reader landing on the first box hears why (an IDREF cannot cross the group's shadow root). |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | none (use a ref) | When the user toggles the box |

#### Slots

| Slot | Description |
|---|---|
| (default) | Tile content (title, description…) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The clickable row (label element) |
| `control` | The native checkbox input |
| `box` | The drawn 16px box |
| `label` | The text beside the box |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tile-border-color` |  | Border of an unchosen tile (default transparent; Kanok: a hairline); `--ui-card-radius` its corners |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-tile-selected-border` |  | Border of the chosen tile (default `--ui-layer-selected-inverse`; Kanok: primary blue); `--ui-tile-selected-mark` its check mark (default `--ui-icon-primary`) |
| `--ui-tile-selected-background` |  | Fill of the chosen tile (default `--ui-card-background`; Kanok: soft highlight wash) |
| `--ui-tile-mark-space` |  | End padding kept clear for the mark (default 48px, Carbon's); e.g. 16px lets the content run under the mark in the top-end corner (beyond Carbon) |
| `--ui-checkbox-border` |  | Border of the box (default `--ui-ink`; Kanok: `--ui-ink-subtle`) |
| `--ui-checkbox-checked` |  | Fill and border when checked or mixed (default `--ui-ink`; Kanok: `--ui-primary`) |
| `--ui-checkbox-mark` |  | Check mark colour (default `--ui-icon-inverse`; Kanok: `--ui-on-primary`) |


