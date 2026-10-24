# Dropdown

A dropdown picks one option from a list that looks the same in every browser. Options can have a second line and sit in labelled groups.


HTML:

```html
<ui-dropdown label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale" data-description="The buyer owns the property">Sale</option>
  <option value="lease" data-description="Monthly rent, fixed term">Lease</option>
  <option value="mortgage" data-description="Property as security for a loan">Mortgage</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale" data-description="The buyer owns the property">Sale</option>
  <option value="lease" data-description="Monthly rent, fixed term">Lease</option>
  <option value="mortgage" data-description="Property as security for a loan">Mortgage</option>
</UiDropdown>
```

React + Tailwind:

```tsx
const types = [
  { value: 'sale', label: 'Sale', description: 'The buyer owns the property' },
  { value: 'lease', label: 'Lease', description: 'Monthly rent, fixed term' },
  { value: 'mortgage', label: 'Mortgage', description: 'Property as security for a loan' },
];

<Dropdown label="Contract type" name="type" placeholder="Choose a type" items={types} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/dropdown
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-dropdown
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/dropdown.json
#    to its target:
#    components/ui/primitives/dropdown/dropdown-skeleton.ts
#    components/ui/primitives/dropdown/dropdown.styles.ts
#    components/ui/primitives/dropdown/dropdown.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-dropdown, core-listbox, core-popup, core-typeahead, shared-element, shared-events, shared-field, shared-form-control, shared-listbox, shared-localize, shared-position, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-dropdown.json
#    to its target:
#    components/ui/react-tw/dropdown.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, tw-field, tw-i18n, tw-list, tw-skeleton, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/dropdown';</script>

<ui-dropdown label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
```

React:

```tsx
import { UiDropdown } from '@purpurabog/ui/react';

<UiDropdown label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</UiDropdown>
```

React + Tailwind:

```tsx
import { Dropdown } from '@/components/ui/react-tw/dropdown';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
];

<Dropdown label="Contract type" name="type" placeholder="Choose a type" items={types} />
```

## Select, Dropdown, Combobox or MultiSelect?

| Component | Use it when |
|---|---|
| [Select](https://parntengza.github.io/kanok-ui-docs/en/select/) | A plain form field. The browser draws the list: the native picker on phones, the most familiar control for screen readers. |
| [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/) | The list must look the same in every browser, or options need a second line. |
| [Combobox](https://parntengza.github.io/kanok-ui-docs/en/combobox/) | The list is long and typing is faster than scrolling, the options come from a server search, or free text is allowed. |
| [Multi-select](https://parntengza.github.io/kanok-ui-docs/en/multi-select/) | The user picks several values. |

## Options, groups and descriptions

The web component takes `<option value>` children, the same markup as [Select](https://parntengza.github.io/kanok-ui-docs/en/select/):

- `<optgroup label>` makes a labelled group in the list.
- `data-description` on an option adds a second line under its label. Typing to jump to an option only searches the label.
- `disabled` shows an option but skips it.

React + Tailwind takes the same as data in `items`: options `{ value, label, description?, disabled? }` and groups `{ label, options }`.


HTML:

```html
<ui-dropdown label="Branch" name="branch" placeholder="Choose a branch">
  <optgroup label="Bangkok">
    <option value="silom" data-description="Mon–Fri, 9:00–17:00">Silom</option>
    <option value="asok" data-description="Every day, 10:00–20:00">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</ui-dropdown>
```

React:

```tsx
<UiDropdown label="Branch" name="branch" placeholder="Choose a branch">
  <optgroup label="Bangkok">
    <option value="silom" data-description="Mon–Fri, 9:00–17:00">Silom</option>
    <option value="asok" data-description="Every day, 10:00–20:00">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</UiDropdown>
```

React + Tailwind:

```tsx
const branches = [
  { label: 'Bangkok', options: [
    { value: 'silom', label: 'Silom', description: 'Mon–Fri, 9:00–17:00' },
    { value: 'asok', label: 'Asok', description: 'Every day, 10:00–20:00' },
  ] },
  { label: 'North', options: [
    { value: 'chiangmai', label: 'Chiang Mai' },
    { value: 'lampang', label: 'Lampang (closed)', disabled: true },
  ] },
];

<Dropdown label="Branch" name="branch" placeholder="Choose a branch" items={branches} />
```

## Placeholder and value

`placeholder` is the text in the field while nothing is chosen (Carbon calls it `label`). The starting choice is `value`, else the `<option selected>`. Reset goes back to it. `change` fires when the user picks a different option.


HTML:

```html
<ui-dropdown id="dropdown-type" label="Contract type" name="type" value="lease">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
  <option value="service">Service</option>
</ui-dropdown>
<p>Value: <output id="dropdown-type-out"></output></p>

<script type="module">
  const type = document.getElementById('dropdown-type');
  const out = document.getElementById('dropdown-type-out');
  out.value = type.value;
  type.addEventListener('change', () => (out.value = type.value));
</script>
```

React:

```tsx
import type { UiDropdown as DropdownElement } from '@purpurabog/ui';

const [type, setType] = useState('lease');

<UiDropdown label="Contract type" name="type" value={type} onChange={(e) => setType((e.target as DropdownElement).value)}>
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
  <option value="service">Service</option>
</UiDropdown>
<p>Value: <output>{type}</output></p>
```

React + Tailwind:

```tsx
const [type, setType] = useState('lease');

<Dropdown label="Contract type" name="type" items={types} value={type} onChange={setType} />
<p>Value: <output>{type}</output></p>
```

React + Tailwind also takes `defaultValue` when you don't need to hold the value yourself.

## Sizes and direction

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px. The list opens below the field. `direction="top"` prefers above; either way it flips when there is no room.


HTML:

```html
<ui-dropdown label="Small" size="sm" value="lease">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
<ui-dropdown label="Medium" value="lease">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
<ui-dropdown label="Large, opens above" size="lg" direction="top" value="lease">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown label="Small" size="sm" value="lease">…</UiDropdown>
<UiDropdown label="Medium" value="lease">…</UiDropdown>
<UiDropdown label="Large, opens above" size="lg" direction="top" value="lease">…</UiDropdown>
```

React + Tailwind:

```tsx
<Dropdown label="Small" items={types} size="sm" defaultValue="lease" />
<Dropdown label="Medium" items={types} defaultValue="lease" />
<Dropdown label="Large, opens above" items={types} size="lg" direction="top" defaultValue="lease" />
```

## Inline

`inline` puts the label, a borderless field and any error or warning in one row, with no helper line. Use it in toolbars and above tables.


HTML:

```html
<ui-dropdown inline label="Status" value="all">
  <option value="all">All</option>
  <option value="draft">Draft</option>
  <option value="signed">Signed</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown inline label="Status" value="all">
  <option value="all">All</option>
  <option value="draft">Draft</option>
  <option value="signed">Signed</option>
</UiDropdown>
```

React + Tailwind:

```tsx
const statuses = [
  { value: 'all', label: 'All' },
  { value: 'draft', label: 'Draft' },
  { value: 'signed', label: 'Signed' },
];

<Dropdown inline label="Status" items={statuses} defaultValue="all" />
```

## Inline with an error or a warning

An inline dropdown shows its error or warning beside the field, in the same row, so a toolbar keeps its height.


HTML:

```html
<ui-dropdown inline label="Status" placeholder="Choose" invalid invalid-text="Choose a status">
  <option value="draft">Draft</option>
  <option value="signed">Signed</option>
</ui-dropdown>
<ui-dropdown inline label="Owner" value="ananya" warn warn-text="Owner is on leave">
  <option value="ananya">Ananya</option>
  <option value="boonsri">Boonsri</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown inline label="Status" placeholder="Choose" invalid invalidText="Choose a status">…</UiDropdown>
<UiDropdown inline label="Owner" value="ananya" warn warnText="Owner is on leave">…</UiDropdown>
```

React + Tailwind:

```tsx
<Dropdown inline label="Status" items={statuses} placeholder="Choose" invalid invalidText="Choose a status" />
<Dropdown inline label="Owner" items={owners} defaultValue="ananya" warn warnText="Owner is on leave" />
```

## Fluid

`fluid` puts the label inside a 64px box (Carbon's `FluidDropdown`); the open list keeps the usual row height. A fluid form around the field does the same for every field in it; see [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form).


HTML:

```html
<ui-dropdown fluid label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
  <option value="mortgage">Mortgage</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown fluid label="Contract type" name="type" placeholder="Choose a type">
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
  <option value="mortgage">Mortgage</option>
</UiDropdown>
```

React + Tailwind:

```tsx
<Dropdown fluid label="Contract type" name="type" placeholder="Choose a type" items={types} />
```

## Helper text, warnings and errors

One line shows under the field at a time: an error beats a warning, and a warning beats the helper text. `warn` doesn't block the form; `invalid` forces the error.


HTML:

```html
<ui-dropdown label="Template" name="template" placeholder="Choose a template" helper-text="Templates approved by the legal team">
  <option value="lease-2026">Lease 2026</option>
  <option value="lease-2019">Lease 2019</option>
</ui-dropdown>
<ui-dropdown label="Template" name="template2" value="lease-2019" warn warn-text="This template is from 2019. Check the clauses before you send it.">
  <option value="lease-2026">Lease 2026</option>
  <option value="lease-2019">Lease 2019</option>
</ui-dropdown>
<ui-dropdown label="Template" name="template3" value="lease-2026" invalid invalid-text="This template doesn't fit a sale">
  <option value="lease-2026">Lease 2026</option>
  <option value="lease-2019">Lease 2019</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown label="Template" name="template" placeholder="Choose a template" helperText="Templates approved by the legal team">…</UiDropdown>
<UiDropdown label="Template" name="template2" value="lease-2019" warn warnText="This template is from 2019. Check the clauses before you send it.">…</UiDropdown>
<UiDropdown label="Template" name="template3" value="lease-2026" invalid invalidText="This template doesn't fit a sale">…</UiDropdown>
```

React + Tailwind:

```tsx
<Dropdown label="Template" name="template" items={templates} placeholder="Choose a template" helperText="Templates approved by the legal team" />
<Dropdown label="Template" name="template2" items={templates} defaultValue="lease-2019" warn warnText="This template is from 2019. Check the clauses before you send it." />
<Dropdown label="Template" name="template3" items={templates} defaultValue="lease-2026" invalid invalidText="This template doesn't fit a sale" />
```

## Load the options when the list opens

`loading` shows one "Loading…" row instead of the options, and the keys pick nothing. Together with the event that fires after the list opens or closes, you can fetch the options the first time someone opens the list. Open the list below: the names arrive after a second.


HTML:

```html
<ui-dropdown id="dropdown-owner" label="Contract owner" name="owner" placeholder="Choose an owner" helper-text="The names load the first time the list opens" loading></ui-dropdown>

<script type="module">
  // stands in for fetch('/api/owners').then((response) => response.json())
  const loadOwners = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve([
        { value: 'anong', label: 'Anong P.' },
        { value: 'boonmee', label: 'Boonmee S.' },
        { value: 'chaiya', label: 'Chaiya R.' },
      ]), 1000),
    );

  const owner = document.getElementById('dropdown-owner');
  owner.addEventListener('ui-toggle', async (event) => {
    if (!event.detail.open || !owner.loading) return;
    const owners = await loadOwners();
    owner.replaceChildren(...owners.map((o) => new Option(o.label, o.value)));
    owner.loading = false;
  });
</script>
```

React:

```tsx
const [owners, setOwners] = useState<{ value: string; label: string }[]>();
const load = async (open: boolean) => {
  if (open && !owners) setOwners(await loadOwners());
};

<UiDropdown label="Contract owner" name="owner" placeholder="Choose an owner" helperText="The names load the first time the list opens" loading={!owners} onUiToggle={(e) => load(e.detail.open)}>
  {owners?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
</UiDropdown>
```

React + Tailwind:

```tsx
<Dropdown label="Contract owner" name="owner" placeholder="Choose an owner" helperText="The names load the first time the list opens" items={owners ?? []} loading={!owners} onMenuChange={load} />
```

`loadOwners`, `load` and `owners` are the same in every React version.

## Read-only and disabled

- `readonly` (`readOnly` in React + Tailwind) shows the value and submits it, but the list doesn't open.
- `disabled` greys the field out. It isn't submitted.


HTML:

```html
<ui-dropdown label="Contract type" value="lease" readonly>
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
<ui-dropdown label="Contract type" placeholder="Choose a type" disabled>
  <option value="sale">Sale</option>
  <option value="lease">Lease</option>
</ui-dropdown>
```

React:

```tsx
<UiDropdown label="Contract type" value="lease" readonly>…</UiDropdown>
<UiDropdown label="Contract type" placeholder="Choose a type" disabled>…</UiDropdown>
```

React + Tailwind:

```tsx
<Dropdown label="Contract type" items={types} defaultValue="lease" readOnly />
<Dropdown label="Contract type" items={types} placeholder="Choose a type" disabled />
```

## Required in a form

An empty `required` dropdown blocks the form and has a built-in message in Thai and English; `invalid-text` replaces it. The error waits until the user leaves the field or submits. Press Submit without a choice to see it.


HTML:

```html
<form id="dropdown-form" style="display: grid; gap: 16px">
  <ui-dropdown label="Signing method" name="method" placeholder="Choose a method" required>
    <option value="esign" data-description="Sign online in minutes">E-signature</option>
    <option value="paper" data-description="Print, sign and scan">Paper</option>
  </ui-dropdown>
  <div><ui-button type="submit">Submit</ui-button></div>
</form>
<p>Submitted: <output id="dropdown-form-out"></output></p>

<script type="module">
  const form = document.getElementById('dropdown-form');
  const out = document.getElementById('dropdown-form-out');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    out.value = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={submit}>
  <UiDropdown label="Signing method" name="method" placeholder="Choose a method" required>
    <option value="esign" data-description="Sign online in minutes">E-signature</option>
    <option value="paper" data-description="Print, sign and scan">Paper</option>
  </UiDropdown>
  <UiButton type="submit">Submit</UiButton>
</form>
<p>Submitted: <output>{sent}</output></p>
```

React + Tailwind:

```tsx
// validation is your app's: `tried` is set on the first submit
<form onSubmit={submit}>
  <Dropdown label="Signing method" name="method" placeholder="Choose a method" items={methods} value={method} onChange={setMethod} required invalid={tried && !method} invalidText="Choose a signing method" />
  <Button type="submit">Submit</Button>
</form>
<p>Submitted: <output>{sent}</output></p>
```

`submit` prevents the navigation and puts `new FormData(form)` into `sent`, as in the HTML. More on errors and when they show: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Skeleton

While the options load, show `ui-dropdown-skeleton` in the field's place: a label bar and a field bar at the same `size`. It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<ui-dropdown-skeleton></ui-dropdown-skeleton>
<ui-dropdown-skeleton size="lg"></ui-dropdown-skeleton>
```

React:

```tsx
import { UiDropdownSkeleton } from '@purpurabog/ui/react';

<UiDropdownSkeleton />
<UiDropdownSkeleton size="lg" />
```

React + Tailwind:

```tsx
import { DropdownSkeleton } from '@/components/ui/react-tw/dropdown';

<DropdownSkeleton />
<DropdownSkeleton size="lg" />
```

On the web component, import it from `@purpurabog/ui/dropdown-skeleton`.

## Keyboard

| Key | List closed | List open |
|---|---|---|
| ↓, Enter, Space | ↓ / Enter / Space open the list on the chosen option (else the first) | ↓ moves down; Enter and Space pick the highlighted option and close |
| ↑ | Does nothing | Moves up (no wrap) |
| Home / End | Opens on the first / last option | First / last option |
| Page Up / Page Down | | Moves by 10 |
| Letters | Opens on the next option that starts with them | Jumps to the next option that starts with them |
| Alt+↑ | | Picks the highlighted option and closes |
| Esc | | Closes without a change |
| Tab | Moves on | Closes without a change and moves on |

## Accessibility

- It follows the WAI-ARIA select-only combobox pattern: the field is a button with `role="combobox"`, the list a `listbox`. Focus stays on the field and the highlighted option is announced through `aria-activedescendant`.
- The field is a Tab stop in every browser, Safari included.
- `loading` marks the list busy and announces "Loading…".
- Use `hide-label` only when the context already names the field. The label then stays for screen readers.

Unstyled React parts with the same behaviour: [Headless Dropdown](https://parntengza.github.io/kanok-ui-docs/en/headless-dropdown/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-dropdown>` · React `UiDropdown`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Visible label text; the `label` slot replaces it when markup is needed. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the label for screen readers but don't show it. |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |
| `placeholder` | `placeholder` | `string` | `''` | Text shown in the field while nothing is selected (Carbon's `label`). |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `direction` | `direction` | `'bottom' \| 'top'` | `'bottom'` | Preferred side for the list; it flips when there is no room. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `loading` | `loading` | `boolean` | `false` | The options are on their way: the list shows "Loading…" and the keys pick nothing (no Carbon counterpart). |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidDropdown`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |
| `inline` | `inline` | `boolean` | `false` | Label beside a compact, borderless field. |

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
| `ui-toggle` | `onUiToggle` | detail: { open } after the list opens or closes (Carbon `cds-dropdown-toggled`) |
| `input` | `onInput` | Whenever `value` changes, just before `change` (as ui-combobox and ui-multi-select) |
| `change` | `onChange` | When the user picks a different option |

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
| `option-description` | Second line of an option (`<option data-description>`) |
| `base` | The field box |
| `label` | The label |
| `input` | The field button (role=combobox) |
| `chevron` | The arrow icon |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |
| `menu` | The floating list |
| `option` | Each row |
| `group-label` | An `<optgroup>` heading |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-border` |  | Border on every side of the box (default none: Carbon's underline only; Kanok: a 1px outline) |
| `--ui-field-disabled-border-color` |  | Border colour when disabled (default: the underline transparent) |
| `--ui-field-readonly-border-color` |  | Border colour when read-only (default: a hairline underline) |
| `--ui-field-inline-border-color` |  | Border colour of the `inline` variant (default: no underline) |
| `--ui-field-radius` |  | Corner radius of the box (default 0; Kanok: 6px) |
| `--ui-field-background` |  | Fill of the box (default `--ui-surface-1`; Kanok: transparent) |
| `--ui-label-font` |  | Font of the label (default `--ui-font-caption`; Kanok: 14px semibold) |
| `--ui-label-color` |  | Colour of the label (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-menu-radius` |  | Corner radius of the open list (default 0; Kanok: 8px) |
| `--ui-menu-border` |  | Border around the list (default none; Kanok: a hairline) |
| `--ui-menu-shadow` |  | `box-shadow` of the list (default Carbon's 0 2px 6px) |
| `--ui-menu-padding` |  | Padding of the open list (default 0; Kanok: 4px, rows inset) |
| `--ui-menu-item-radius` |  | Corner radius of a row (default 0; Kanok: 6px) |
| `--ui-menu-item-ink` |  | Text of a row at rest (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-menu-divider` |  | Rule between rows (default `--ui-row-divider`; Kanok: none) |
| `--ui-menu-item-selected` |  | Fill of the chosen row (default `--ui-surface-2`; Kanok: `--ui-highlight`) |
| `--ui-menu-item-selected-hover` |  | The chosen row under the pointer (default `--ui-layer-selected-hover`; Kanok: the highlight a shade deeper) |
| `--ui-field-readonly-background` |  | The box's fill when read-only (default transparent; Kanok: a faint ink tint, so read-only reads as set and never weaker than disabled) |
| `--ui-field-open-background` |  | The box's fill while its list is open (default the field's hover fill; Kanok: transparent) |
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |
| `--ui-menu-item-active-outline` |  | / --ui-menu-item-active-background - The keyboard-highlighted row: its ring and its fill (default focus, transparent) |
| `--ui-menu-item-pressed` |  | Fill of a pressed option (default `--ui-surface-2`; Kanok: the 20% pressed tint) |


