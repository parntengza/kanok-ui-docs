# Select

A select picks one option from a list. It wraps the browser's own `<select>`, so phones open their native picker and screen readers know it well.


HTML:

```html
<ui-select label="Department" name="department" placeholder="Choose a department" helper-text="Where the contract is filed">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
</ui-select>
```

React:

```tsx
<UiSelect label="Department" name="department" placeholder="Choose a department" helperText="Where the contract is filed">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
</UiSelect>
```

React + Tailwind:

```tsx
<Select label="Department" name="department" placeholder="Choose a department" helperText="Where the contract is filed">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
</Select>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/select
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-select
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/select.json
#    to its target:
#    components/ui/primitives/select/select-skeleton.ts
#    components/ui/primitives/select/select.styles.ts
#    components/ui/primitives/select/select.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-select.json
#    to its target:
#    components/ui/react-tw/select.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, tw-field, tw-skeleton, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/select';</script>

<ui-select label="Department" name="department" placeholder="Choose a department">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
</ui-select>
```

React:

```tsx
import { UiSelect } from '@purpurabog/ui/react';

<UiSelect label="Department" name="department" placeholder="Choose a department">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
</UiSelect>
```

React + Tailwind:

```tsx
import { Select } from '@/components/ui/react-tw/select';

<Select label="Department" name="department" placeholder="Choose a department">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
</Select>
```

## Select, Dropdown, Combobox or MultiSelect?

| Component | Use it when |
|---|---|
| [Select](https://parntengza.github.io/kanok-ui-docs/en/select/) | A plain form field. The browser draws the list: the native picker on phones, the most familiar control for screen readers. Options are one line of text. |
| [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/) | The list must look the same in every browser, or options need a second line (`data-description`). |
| [Combobox](https://parntengza.github.io/kanok-ui-docs/en/combobox/) | The list is long and typing is faster than scrolling, the options come from a server search, or free text is allowed. |
| [Multi-select](https://parntengza.github.io/kanok-ui-docs/en/multi-select/) | The user picks several values. |

For two to five options that should all stay visible, use a [radio group](https://parntengza.github.io/kanok-ui-docs/en/radio/) (one choice) or [checkboxes](https://parntengza.github.io/kanok-ui-docs/en/checkbox/) (several).

## Placeholder and starting value

`placeholder` adds an empty first choice in a muted colour. With `required`, the user has to pick something else before the form submits.

Without a placeholder, the select starts on `value`, else on the `<option selected>`, else on the first option, as a native select does. Reset goes back to that starting value. `change` fires when the user picks an option.


HTML:

```html
<ui-select id="select-currency" label="Currency" name="currency" value="thb">
  <option value="usd">US dollar</option>
  <option value="thb">Thai baht</option>
  <option value="eur">Euro</option>
</ui-select>
<p>Value: <output id="select-currency-out"></output></p>

<script type="module">
  const currency = document.getElementById('select-currency');
  const out = document.getElementById('select-currency-out');
  out.value = currency.value;
  currency.addEventListener('change', () => (out.value = currency.value));
</script>
```

React:

```tsx
import type { UiSelect as SelectElement } from '@purpurabog/ui';

const [currency, setCurrency] = useState('thb');

<UiSelect label="Currency" name="currency" value={currency} onChange={(e) => setCurrency((e.target as SelectElement).value)}>
  <option value="usd">US dollar</option>
  <option value="thb">Thai baht</option>
  <option value="eur">Euro</option>
</UiSelect>
<p>Value: <output>{currency}</output></p>
```

React + Tailwind:

```tsx
const [currency, setCurrency] = useState('thb');

<Select label="Currency" name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
  <option value="usd">US dollar</option>
  <option value="thb">Thai baht</option>
  <option value="eur">Euro</option>
</Select>
<p>Value: <output>{currency}</output></p>
```

React + Tailwind renders a native `<select>`, so its `onChange` is React's own and it also takes `defaultValue`.

## Groups and disabled options

Put options in `<optgroup label>` to group them. `disabled` on an option or an `<optgroup>` shows it but blocks it. The web component watches its children, so you can add or remove `<option>`s at any time.


HTML:

```html
<ui-select label="Office" name="office" placeholder="Choose an office">
  <optgroup label="Bangkok">
    <option value="silom">Silom</option>
    <option value="asok">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</ui-select>
```

React:

```tsx
<UiSelect label="Office" name="office" placeholder="Choose an office">
  <optgroup label="Bangkok">
    <option value="silom">Silom</option>
    <option value="asok">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</UiSelect>
```

React + Tailwind:

```tsx
<Select label="Office" name="office" placeholder="Choose an office">
  <optgroup label="Bangkok">
    <option value="silom">Silom</option>
    <option value="asok">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</Select>
```

## Options that depend on another field

An address form fills the district list from the chosen province. Replace the options when the first select changes: the web component picks up the new children by itself. Keep the second select disabled until there is something to choose.


HTML:

```html
<ui-select id="select-province" label="Province" name="province" placeholder="Choose a province">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-select>
<ui-select id="select-district" label="District" name="district" placeholder="Choose a district" disabled></ui-select>

<script type="module">
  const districts = {
    bkk: [['bangrak', 'Bang Rak'], ['pathumwan', 'Pathum Wan'], ['chatuchak', 'Chatuchak']],
    cnx: [['mueang', 'Mueang Chiang Mai'], ['hangdong', 'Hang Dong'], ['sansai', 'San Sai']],
  };
  const province = document.getElementById('select-province');
  const district = document.getElementById('select-district');
  province.addEventListener('change', () => {
    district.replaceChildren(...districts[province.value].map(([value, label]) => new Option(label, value)));
    district.value = '';
    district.disabled = false;
  });
</script>
```

React:

```tsx
const districts: Record<string, [string, string][]> = {
  bkk: [['bangrak', 'Bang Rak'], ['pathumwan', 'Pathum Wan'], ['chatuchak', 'Chatuchak']],
  cnx: [['mueang', 'Mueang Chiang Mai'], ['hangdong', 'Hang Dong'], ['sansai', 'San Sai']],
};
const [province, setProvince] = useState('');
const [district, setDistrict] = useState('');

<UiSelect label="Province" name="province" placeholder="Choose a province" value={province} onChange={(e) => { setProvince((e.target as SelectElement).value); setDistrict(''); }}>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</UiSelect>
<UiSelect label="District" name="district" placeholder="Choose a district" disabled={!province} value={district} onChange={(e) => setDistrict((e.target as SelectElement).value)}>
  {districts[province]?.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
</UiSelect>
```

React + Tailwind:

```tsx
<Select label="Province" name="province" placeholder="Choose a province" value={province} onChange={(e) => { setProvince(e.target.value); setDistrict(''); }}>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</Select>
<Select label="District" name="district" placeholder="Choose a district" disabled={!province} value={district} onChange={(e) => setDistrict(e.target.value)}>
  {districts[province]?.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
</Select>
```

`districts`, `province` and `district` are the same in every React version.

## Sizes

`size`: `sm` 32px, `md` 40px (the default, as in Carbon), `lg` 48px.


HTML:

```html
<ui-select label="Small" size="sm">
  <option>Legal</option>
</ui-select>
<ui-select label="Medium">
  <option>Legal</option>
</ui-select>
<ui-select label="Large" size="lg">
  <option>Legal</option>
</ui-select>
```

React:

```tsx
<UiSelect label="Small" size="sm"><option>Legal</option></UiSelect>
<UiSelect label="Medium"><option>Legal</option></UiSelect>
<UiSelect label="Large" size="lg"><option>Legal</option></UiSelect>
```

React + Tailwind:

```tsx
<Select label="Small" size="sm"><option>Legal</option></Select>
<Select label="Medium"><option>Legal</option></Select>
<Select label="Large" size="lg"><option>Legal</option></Select>
```

## Inline

`inline` puts the label beside a compact, borderless select. Use it in toolbars and above tables, not in forms.


HTML:

```html
<ui-select inline label="Items per page" value="25">
  <option value="10">10</option>
  <option value="25">25</option>
  <option value="50">50</option>
</ui-select>
```

React:

```tsx
<UiSelect inline label="Items per page" value="25">
  <option value="10">10</option>
  <option value="25">25</option>
  <option value="50">50</option>
</UiSelect>
```

React + Tailwind:

```tsx
<Select inline label="Items per page" defaultValue="25">
  <option value="10">10</option>
  <option value="25">25</option>
  <option value="50">50</option>
</Select>
```

## Fluid

`fluid` puts the label inside a 64px box (Carbon's `FluidSelect`). A fluid form around the field does the same for every field in it; see [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form). Fluid fields have no helper line.


HTML:

```html
<ui-select fluid label="Department" name="department" placeholder="Choose a department">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
</ui-select>
```

React:

```tsx
<UiSelect fluid label="Department" name="department" placeholder="Choose a department">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
</UiSelect>
```

React + Tailwind:

```tsx
<Select fluid label="Department" name="department" placeholder="Choose a department">
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
</Select>
```

## Helper text, warnings and errors

One line shows under the field at a time: an error beats a warning, and a warning beats the helper text. `warn` is a non-blocking warning; `invalid` forces the error, for example after the server rejected the value.


HTML:

```html
<ui-select label="Approver" name="approver" helper-text="The approver gets the contract next">
  <option value="somchai">Somchai K.</option>
  <option value="malee">Malee S.</option>
</ui-select>
<ui-select label="Approver" name="approver2" value="malee" warn warn-text="Malee is on leave until 20 October">
  <option value="somchai">Somchai K.</option>
  <option value="malee">Malee S.</option>
</ui-select>
<ui-select label="Approver" name="approver3" value="somchai" invalid invalid-text="Somchai drafted this contract and can't approve it">
  <option value="somchai">Somchai K.</option>
  <option value="malee">Malee S.</option>
</ui-select>
```

React:

```tsx
<UiSelect label="Approver" name="approver" helperText="The approver gets the contract next">…</UiSelect>
<UiSelect label="Approver" name="approver2" value="malee" warn warnText="Malee is on leave until 20 October">…</UiSelect>
<UiSelect label="Approver" name="approver3" value="somchai" invalid invalidText="Somchai drafted this contract and can't approve it">…</UiSelect>
```

React + Tailwind:

```tsx
<Select label="Approver" name="approver" helperText="The approver gets the contract next">…</Select>
<Select label="Approver" name="approver2" defaultValue="malee" warn warnText="Malee is on leave until 20 October">…</Select>
<Select label="Approver" name="approver3" defaultValue="somchai" invalid invalidText="Somchai drafted this contract and can't approve it">…</Select>
```

## A link in the helper text

The `helper-text`, `warn-text` and `invalid-text` attributes are plain text. For a link or bold text, put the markup in the slot of the same name. In React + Tailwind, pass the markup to `helperText`, `warnText` or `invalidText`.


HTML:

```html
<ui-select label="Retention period" name="retention" value="10">
  <option value="5">5 years</option>
  <option value="10">10 years</option>
  <option value="forever">Keep forever</option>
  <span slot="helper-text">Follow the <a href="#accessibility">document retention policy</a>.</span>
</ui-select>
```

React:

```tsx
<UiSelect label="Retention period" name="retention" value="10">
  <option value="5">5 years</option>
  <option value="10">10 years</option>
  <option value="forever">Keep forever</option>
  <span slot="helper-text">Follow the <a href="/policies/retention">document retention policy</a>.</span>
</UiSelect>
```

React + Tailwind:

```tsx
<Select label="Retention period" name="retention" defaultValue="10" helperText={<>Follow the <a href="/policies/retention">document retention policy</a>.</>}>
  <option value="5">5 years</option>
  <option value="10">10 years</option>
  <option value="forever">Keep forever</option>
</Select>
```

## Read-only and disabled

- `readonly` (`readOnly` in React + Tailwind) shows the value and submits it, but neither the mouse nor the keyboard can change it. Tab still moves through.
- `disabled` greys the select out. It isn't submitted.


HTML:

```html
<ui-select label="Department" value="legal" readonly>
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
</ui-select>
<ui-select label="Department" disabled>
  <option value="sales">Sales</option>
  <option value="legal">Legal</option>
</ui-select>
```

React:

```tsx
<UiSelect label="Department" value="legal" readonly>…</UiSelect>
<UiSelect label="Department" disabled>…</UiSelect>
```

React + Tailwind:

```tsx
<Select label="Department" defaultValue="legal" readOnly>…</Select>
<Select label="Department" disabled>…</Select>
```

## Required in a form

With `required` and a `placeholder`, the form won't submit until the user picks an option. Press Submit without a choice to see the error. Without `invalid-text`, the built-in "Please select an option." shows, in the page's language.


HTML:

```html
<form id="select-form" style="display: grid; gap: 16px">
  <ui-select label="Contract type" name="type" placeholder="Choose a type" required invalid-text="Choose the contract type">
    <option value="sale">Sale</option>
    <option value="lease">Lease</option>
    <option value="service">Service</option>
  </ui-select>
  <div><ui-button type="submit">Submit</ui-button></div>
</form>
<p>Submitted: <output id="select-form-out"></output></p>

<script type="module">
  const form = document.getElementById('select-form');
  const out = document.getElementById('select-form-out');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    out.value = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
const [sent, setSent] = useState('');
const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setSent([...new FormData(event.currentTarget)].map(([key, value]) => `${key}=${value}`).join(', '));
};

<form onSubmit={submit}>
  <UiSelect label="Contract type" name="type" placeholder="Choose a type" required invalidText="Choose the contract type">
    <option value="sale">Sale</option>
    <option value="lease">Lease</option>
    <option value="service">Service</option>
  </UiSelect>
  <UiButton type="submit">Submit</UiButton>
</form>
<p>Submitted: <output>{sent}</output></p>
```

React + Tailwind:

```tsx
// validation is your app's: `type` is the field's value, `tried` is set on the first submit
<form onSubmit={submit}>
  <Select label="Contract type" name="type" placeholder="Choose a type" value={type} onChange={(e) => setType(e.target.value)} invalid={tried && !type} invalidText="Choose the contract type">
    <option value="sale">Sale</option>
    <option value="lease">Lease</option>
    <option value="service">Service</option>
  </Select>
  <Button type="submit">Submit</Button>
</form>
<p>Submitted: <output>{sent}</output></p>
```

The React + Tailwind select shows what you pass in `invalid` and `invalidText`; checking the value is your app's, as in Carbon React. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Skeleton

While the options load, show `ui-select-skeleton` in the field's place: a label bar and a field bar at the same `size`. It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<ui-select-skeleton></ui-select-skeleton>
<ui-select-skeleton size="sm" hide-label></ui-select-skeleton>
```

React:

```tsx
import { UiSelectSkeleton } from '@purpurabog/ui/react';

<UiSelectSkeleton />
<UiSelectSkeleton size="sm" hideLabel />
```

React + Tailwind:

```tsx
import { SelectSkeleton } from '@/components/ui/react-tw/select';

<SelectSkeleton />
<SelectSkeleton size="sm" hideLabel />
```

On the web component, import it from `@purpurabog/ui/select-skeleton`.

## Accessibility

- The control is a native `<select>`: the browser's own keys open and change it, and phones show the system picker.
- `label` is tied to the select. Use `hide-label` to keep it for screen readers only when the context already names the field.
- Helper, warning and error text are the select's description, so they are read when it gets focus.
- Options can't hold markup or a second line. If you need that, use a [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/).

Unstyled React parts with the same behaviour: [Headless Select](https://parntengza.github.io/kanok-ui-docs/en/headless-select/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-select>` · React `UiSelect`

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
| `placeholder` | `placeholder` | `string` | `''` | Shown as an empty first choice; with `required` the user must pick something else. |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidSelect`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |
| `inline` | `inline` | `boolean` | `false` | Label beside a compact, borderless select. |

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
| `change` | none (use a ref) | When the user picks an option |

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
| `base` | The field box |
| `label` | The label |
| `input` | The native select |
| `chevron` | The arrow icon |
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
| `--ui-field-inline-border-color` |  | Border colour of the `inline` variant (default: no underline) |
| `--ui-field-radius` |  | Corner radius of the box (default 0; Kanok: 6px) |
| `--ui-select-appearance` |  | `base-select` opens the list in the menu look of the dropdowns (`--ui-menu-*`) where the browser supports a customizable select (Chrome 135+); default `none`, the native list (Kanok: base-select) |
| `--ui-field-background` |  | Fill of the box (default `--ui-surface-1`; Kanok: transparent) |
| `--ui-label-font` |  | Font of the label (default `--ui-font-caption`; Kanok: 14px semibold) |
| `--ui-label-color` |  | Colour of the label (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-field-readonly-background` |  | The box's fill when read-only (default transparent; Kanok: a faint ink tint, so read-only reads as set and never weaker than disabled) |
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |


