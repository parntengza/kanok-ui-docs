# Combobox

A combobox is a text box with a list: people type to find an option instead of scrolling. Use it for long lists, server lookups, and fields that also take free text.


HTML:

```html
<ui-combobox label="Province" name="province" placeholder="Type a province" filter="contains">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
  <option value="kkn">Khon Kaen</option>
  <option value="skh">Songkhla</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Province" name="province" placeholder="Type a province" filter="contains">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
  <option value="kkn">Khon Kaen</option>
  <option value="skh">Songkhla</option>
</UiCombobox>
```

React + Tailwind:

```tsx
const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
  { value: 'cri', label: 'Chiang Rai' },
  { value: 'hkt', label: 'Phuket' },
  { value: 'kkn', label: 'Khon Kaen' },
  { value: 'skh', label: 'Songkhla' },
];

<Combobox label="Province" name="province" placeholder="Type a province" filter="contains" items={provinces} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/combobox
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-combobox
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/combobox.json
#    to its target:
#    components/ui/primitives/combobox/combobox.styles.ts
#    components/ui/primitives/combobox/combobox.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-combobox, core-listbox, core-popup, shared-element, shared-events, shared-field, shared-form-control, shared-listbox, shared-localize, shared-position, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-combobox.json
#    to its target:
#    components/ui/react-tw/combobox.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, core-listbox, tw-field, tw-i18n, tw-list, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/combobox';</script>

<ui-combobox label="Province" name="province" placeholder="Type a province" filter="contains">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
```

React:

```tsx
import { UiCombobox } from '@purpurabog/ui/react';

<UiCombobox label="Province" name="province" placeholder="Type a province" filter="contains">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</UiCombobox>
```

React + Tailwind:

```tsx
import { Combobox } from '@/components/ui/react-tw/combobox';

const provinces = [
  { value: 'bkk', label: 'Bangkok' },
  { value: 'cnx', label: 'Chiang Mai' },
];

<Combobox label="Province" name="province" placeholder="Type a province" filter="contains" items={provinces} />
```

Not sure a combobox is the right field? See [Select, Dropdown, Combobox or MultiSelect?](https://parntengza.github.io/kanok-ui-docs/en/select/#select-dropdown-combobox-or-multiselect)

## How typing narrows the list

Typing opens the list and highlights the first option whose label contains the text. `filter` decides whether the other options stay:

| `filter` | The list while typing |
|---|---|
| `none` (default, as Carbon) | Every option stays; only the highlight moves |
| `contains` | Only options whose label contains the text, anywhere |
| `starts-with` | Only options whose label starts with the text |

Matching ignores case. When the filter leaves no option, the list shows "No matching items". Type "chiang" in both fields below to compare.


HTML:

```html
<ui-combobox label="Province (filter none)" placeholder="Type a province">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
</ui-combobox>
<ui-combobox label="Province (filter starts-with)" placeholder="Type a province" filter="starts-with">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Province (filter none)" placeholder="Type a province">…</UiCombobox>
<UiCombobox label="Province (filter starts-with)" placeholder="Type a province" filter="starts-with">…</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox label="Province (filter none)" placeholder="Type a province" items={provinces} />
<Combobox label="Province (filter starts-with)" placeholder="Type a province" items={provinces} filter="starts-with" />
```

## Free text or a listed option

When the user leaves the field, text that exactly matches an option's label picks that option. Other text snaps back to the option chosen before, so the value is always one of the options.

`allow-custom-value` keeps the typed text instead: it becomes the value and is submitted with the form. Use it when the list is only a suggestion, such as job titles.


HTML:

```html
<ui-combobox label="Job title" name="title" allow-custom-value helper-text="Pick a title or type a new one">
  <option value="Lawyer">Lawyer</option>
  <option value="Paralegal">Paralegal</option>
  <option value="Legal secretary">Legal secretary</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Job title" name="title" allowCustomValue helperText="Pick a title or type a new one">
  <option value="Lawyer">Lawyer</option>
  <option value="Paralegal">Paralegal</option>
  <option value="Legal secretary">Legal secretary</option>
</UiCombobox>
```

React + Tailwind:

```tsx
const titles = [
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Paralegal', label: 'Paralegal' },
  { value: 'Legal secretary', label: 'Legal secretary' },
];

<Combobox label="Job title" name="title" items={titles} allowCustomValue helperText="Pick a title or type a new one" />
```

## Read the value

The committed choice is `value`, and `change` fires when it changes. The text the user currently sees is `inputValue` on the web component. Type, pick, then leave the field to watch both.


HTML:

```html
<ui-combobox id="combobox-province" label="Province" name="province" value="cnx" filter="contains">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
</ui-combobox>
<p>value: <output id="combobox-province-value"></output>, inputValue: <output id="combobox-province-text"></output></p>

<script type="module">
  const province = document.getElementById('combobox-province');
  const show = () => {
    document.getElementById('combobox-province-value').value = province.value;
    document.getElementById('combobox-province-text').value = province.inputValue;
  };
  province.updateComplete.then(show);
  province.addEventListener('input', show);
  province.addEventListener('change', show);
</script>
```

React:

```tsx
import type { UiCombobox as ComboboxElement } from '@purpurabog/ui';

const [province, setProvince] = useState('cnx');

<UiCombobox label="Province" name="province" filter="contains" value={province} onChange={(e) => setProvince((e.target as ComboboxElement).value)}>…</UiCombobox>
<p>value: <output>{province}</output></p>
```

React + Tailwind:

```tsx
const [province, setProvince] = useState('cnx');
const [text, setText] = useState('');

<Combobox label="Province" name="province" filter="contains" items={provinces} value={province} onChange={setProvince} onInputChange={setText} />
<p>value: <output>{province}</output>, text: <output>{text}</output></p>
```

In React + Tailwind, `onInputChange` gets the text on every keystroke.

## Search on a server

Listen to the text as the user types, fetch the matches, replace the options, and set `loading` while the request runs. The list shows "Searching…" meanwhile. Keep `filter="none"` (the default), as the server has already filtered. In the demo, a short timer stands in for the server.


HTML:

```html
<ui-combobox id="combobox-company" label="Counterparty" name="company" placeholder="Type a company name" helper-text="Searches the company register as you type"></ui-combobox>

<script type="module">
  // stands in for fetch(`/api/companies?q=${encodeURIComponent(text)}`).then((response) => response.json())
  const register = ['Siam Trading Co., Ltd.', 'Siam Logistics PCL', 'Chao Phraya Holdings Co., Ltd.', 'Lanna Foods Co., Ltd.', 'Andaman Resorts Co., Ltd.'];
  const search = (text) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(register.filter((name) => name.toLowerCase().includes(text.toLowerCase()))), 600),
    );

  const company = document.getElementById('combobox-company');
  company.addEventListener('input', async () => {
    const text = company.inputValue;
    company.loading = true;
    const found = await search(text);
    if (company.inputValue !== text) return; // a newer search is running
    company.replaceChildren(...found.map((name) => new Option(name, name)));
    company.loading = false;
  });
</script>
```

React:

```tsx
const [companies, setCompanies] = useState<string[]>([]);
const [loading, setLoading] = useState(false);
const onText = async (text: string) => {
  setLoading(true);
  setCompanies(await search(text));
  setLoading(false);
};

<UiCombobox label="Counterparty" name="company" placeholder="Type a company name" loading={loading} onInput={(e) => onText((e.target as ComboboxElement).inputValue)}>
  {companies.map((name) => <option key={name} value={name}>{name}</option>)}
</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox label="Counterparty" name="company" placeholder="Type a company name" items={companies.map((name) => ({ value: name, label: name }))} loading={loading} onInputChange={onText} />
```

`companies`, `loading`, `onText` and `search` are the same in every React version.

## Groups and descriptions

As in [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/): `<optgroup label>` groups options, `data-description` adds a second line, and `disabled` options are shown but can't be picked. React + Tailwind takes groups `{ label, options }` and `description` in `items`. Typing only searches the labels, never the descriptions.


HTML:

```html
<ui-combobox label="Branch" name="branch" placeholder="Type a branch" filter="contains">
  <optgroup label="Bangkok">
    <option value="silom" data-description="Mon–Fri, 9:00–17:00">Silom</option>
    <option value="asok" data-description="Every day, 10:00–20:00">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Branch" name="branch" placeholder="Type a branch" filter="contains">
  <optgroup label="Bangkok">
    <option value="silom" data-description="Mon–Fri, 9:00–17:00">Silom</option>
    <option value="asok" data-description="Every day, 10:00–20:00">Asok</option>
  </optgroup>
  <optgroup label="North">
    <option value="chiangmai">Chiang Mai</option>
    <option value="lampang" disabled>Lampang (closed)</option>
  </optgroup>
</UiCombobox>
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

<Combobox label="Branch" name="branch" placeholder="Type a branch" filter="contains" items={branches} />
```

## Clear

While the box holds text, × clears it along with the value. `hide-clear` removes the × (Carbon always shows it). Esc on a closed list still clears.


HTML:

```html
<ui-combobox label="Province" value="bkk" hide-clear>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Province" value="bkk" hideClear>…</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox label="Province" items={provinces} defaultValue="bkk" hideClear />
```

## Sizes and direction

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px. `direction="top"` opens the list above when there is room.


HTML:

```html
<ui-combobox label="Small" size="sm" placeholder="Type a province">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
<ui-combobox label="Medium" placeholder="Type a province">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
<ui-combobox label="Large, opens above" size="lg" direction="top" placeholder="Type a province">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Small" size="sm" placeholder="Type a province">…</UiCombobox>
<UiCombobox label="Medium" placeholder="Type a province">…</UiCombobox>
<UiCombobox label="Large, opens above" size="lg" direction="top" placeholder="Type a province">…</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox label="Small" items={provinces} size="sm" placeholder="Type a province" />
<Combobox label="Medium" items={provinces} placeholder="Type a province" />
<Combobox label="Large, opens above" items={provinces} size="lg" direction="top" placeholder="Type a province" />
```

## Fluid

`fluid` puts the label inside a 64px box (Carbon's `FluidComboBox`); the open list keeps the usual row height. A fluid form around the field does the same; see [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form).


HTML:

```html
<ui-combobox fluid label="Province" name="province" placeholder="Type a province" filter="contains">
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="hkt">Phuket</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox fluid label="Province" name="province" placeholder="Type a province" filter="contains">…</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox fluid label="Province" name="province" placeholder="Type a province" filter="contains" items={provinces} />
```

## Helper text, warnings and errors

One line shows under the field at a time: an error beats a warning, and a warning beats the helper text. `warn` doesn't block the form; `invalid` forces the error.


HTML:

```html
<ui-combobox label="Counterparty" name="party" placeholder="Type to search" helper-text="Type part of the name, then pick with ↑ ↓">
  <option value="1">A Company Limited</option>
  <option value="2">B Holdings PCL</option>
</ui-combobox>
<ui-combobox label="Counterparty" name="party2" value="2" warn warn-text="This company's certificate expires this month">
  <option value="1">A Company Limited</option>
  <option value="2">B Holdings PCL</option>
</ui-combobox>
<ui-combobox label="Counterparty" name="party3" value="1" invalid invalid-text="This company is already a party to the contract">
  <option value="1">A Company Limited</option>
  <option value="2">B Holdings PCL</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Counterparty" name="party" placeholder="Type to search" helperText="Type part of the name, then pick with ↑ ↓">…</UiCombobox>
<UiCombobox label="Counterparty" name="party2" value="2" warn warnText="This company's certificate expires this month">…</UiCombobox>
<UiCombobox label="Counterparty" name="party3" value="1" invalid invalidText="This company is already a party to the contract">…</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox label="Counterparty" name="party" items={parties} placeholder="Type to search" helperText="Type part of the name, then pick with ↑ ↓" />
<Combobox label="Counterparty" name="party2" items={parties} defaultValue="2" warn warnText="This company's certificate expires this month" />
<Combobox label="Counterparty" name="party3" items={parties} defaultValue="1" invalid invalidText="This company is already a party to the contract" />
```

## Read-only and disabled

`readonly` (`readOnly` in React + Tailwind) shows and submits the value but blocks changes. `disabled` greys the field out, and it isn't submitted.


HTML:

```html
<ui-combobox label="Province" value="bkk" readonly>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
<ui-combobox label="Province" placeholder="Type a province" disabled>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
</ui-combobox>
```

React:

```tsx
<UiCombobox label="Province" value="bkk" readonly>…</UiCombobox>
<UiCombobox label="Province" placeholder="Type a province" disabled>…</UiCombobox>
```

React + Tailwind:

```tsx
<Combobox label="Province" items={provinces} defaultValue="bkk" readOnly />
<Combobox label="Province" items={provinces} placeholder="Type a province" disabled />
```

## Required in a form

`required` blocks the form until a value is committed. The error waits until the user leaves the field or submits. Press Submit with the field empty to see it.


HTML:

```html
<form id="combobox-form" style="display: grid; gap: 16px">
  <ui-combobox label="Province of the property" name="province" placeholder="Type a province" filter="contains" required invalid-text="Choose a province from the list">
    <option value="bkk">Bangkok</option>
    <option value="cnx">Chiang Mai</option>
    <option value="hkt">Phuket</option>
  </ui-combobox>
  <div><ui-button type="submit">Submit</ui-button></div>
</form>
<p>Submitted: <output id="combobox-form-out"></output></p>

<script type="module">
  const form = document.getElementById('combobox-form');
  const out = document.getElementById('combobox-form-out');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    out.value = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={submit}>
  <UiCombobox label="Province of the property" name="province" placeholder="Type a province" filter="contains" required invalidText="Choose a province from the list">…</UiCombobox>
  <UiButton type="submit">Submit</UiButton>
</form>
<p>Submitted: <output>{sent}</output></p>
```

React + Tailwind:

```tsx
// validation is your app's: `tried` is set on the first submit
<form onSubmit={submit}>
  <Combobox label="Province of the property" name="province" placeholder="Type a province" filter="contains" items={provinces} value={province} onChange={setProvince} required invalid={tried && !province} invalidText="Choose a province from the list" />
  <Button type="submit">Submit</Button>
</form>
<p>Submitted: <output>{sent}</output></p>
```

`submit` prevents the navigation and puts `new FormData(form)` into `sent`, as in the HTML. More: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Keyboard

| Key | Does |
|---|---|
| Typing | Opens the list and highlights the first option containing the text |
| ↓ / ↑ | Opens the list on the chosen option (else the first / last); then moves the highlight (no wrap) |
| Alt+↓ | Opens the list without a highlight |
| Alt+↑ | Picks the highlighted option and closes |
| Enter | Picks the highlighted option. With no highlight, picks the first option containing the text (or keeps the text with `allow-custom-value`) |
| Esc | Closes the list; on a closed list, clears the field |
| Tab | Moves on without picking the highlight. The text is committed or snaps back, as described above |

## Accessibility

- It follows the WAI-ARIA combobox pattern with list autocomplete: the text box has `role="combobox"`, the list is a `listbox`, and the highlight is announced through `aria-activedescendant`.
- The × and the chevron are not Tab stops (as in Carbon), so Tab goes straight to the next field. Esc clears from the keyboard.
- "Searching…" and "No matching items" are announced to screen readers.

Unstyled React parts with the same behaviour: [Headless Combobox](https://parntengza.github.io/kanok-ui-docs/en/headless-combobox/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-combobox>` · React `UiCombobox`

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
| `placeholder` | `placeholder` | `string` | `''` |  |
| `value` | `value` | `string` | `''` | Committed value: the chosen option's value, or free text with `allow-custom-value`. |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `direction` | `direction` | `'bottom' \| 'top'` | `'bottom'` | Preferred side for the list; it flips when there is no room. |
| `filter` | `filter` | `ComboboxFilter` | `'none'` |  |
| `allow-custom-value` | `allowCustomValue` | `boolean` | `false` | Keep text that matches no option as the value instead of snapping back. |
| `hide-clear` | `hideClear` | `boolean` | `false` | No × button (Carbon always shows one while there is text); Escape on a closed list still clears. |
| `loading` | `loading` | `boolean` | `false` | Shows a "Searching…" row while a server lookup is running. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidComboBox`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `inputValue` |  | What the user currently sees in the text box. |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } after the list opens or closes |
| `input` | `onInput` | Whenever `value` changes, as ui-dropdown and ui-multi-select; also native and composed as the user types, where `value` is unchanged (kept for compatibility: listen to `ui-input` for the typing) |
| `change` | `onChange` | When the committed value changes |
| `ui-input` | `onUiInput` | detail: { value } the typed text (`inputValue`), as the user types |

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
| `input` | The text box (role=combobox) |
| `clear-button` | The × button |
| `toggle` | The chevron button |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |
| `menu` | The floating list |
| `option` | Each row |
| `group-label` | An `<optgroup>` heading |
| `empty` | The "searching" / "no results" row |

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
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |
| `--ui-menu-item-active-outline` |  | / --ui-menu-item-active-background - The keyboard-highlighted row: its ring and its fill (default focus, transparent) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |
| `--ui-menu-item-pressed` |  | Fill of a pressed option (default `--ui-surface-2`; Kanok: the 20% pressed tint) |


