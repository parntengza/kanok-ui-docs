# Multi-select

A multi-select picks several options from a list of checkbox rows. The list stays open while people choose, and a tag in the field shows how many are chosen.


HTML:

```html
<ui-multi-select label="Notify" name="notify" placeholder="Choose people" select-all>
  <option value="owner" selected>Contract owner</option>
  <option value="legal">Legal team</option>
  <option value="finance">Finance team</option>
  <option value="signer" data-description="Only after both parties sign">Signers</option>
</ui-multi-select>
```

React:

```tsx
import type { UiMultiSelect as MultiSelectElement } from '@purpurabog/ui';

const [notify, setNotify] = useState(['owner']);

<UiMultiSelect label="Notify" name="notify" placeholder="Choose people" selectAll value={notify} onChange={(e) => setNotify((e.target as MultiSelectElement).value)}>
  <option value="owner">Contract owner</option>
  <option value="legal">Legal team</option>
  <option value="finance">Finance team</option>
  <option value="signer" data-description="Only after both parties sign">Signers</option>
</UiMultiSelect>
```

React + Tailwind:

```tsx
const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
  { value: 'signer', label: 'Signers', description: 'Only after both parties sign' },
];

<MultiSelect label="Notify" name="notify" placeholder="Choose people" items={people} defaultValue={['owner']} selectAll />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/multi-select
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-multi-select
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/multi-select.json
#    to its target:
#    components/ui/primitives/multi-select/multi-select.styles.ts
#    components/ui/primitives/multi-select/multi-select.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, core-listbox, core-multi-select, core-popup, core-typeahead, shared-element, shared-events, shared-field, shared-form-control, shared-listbox, shared-localize, shared-position, shared-quiet-focus, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-multi-select.json
#    to its target:
#    components/ui/react-tw/multi-select.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, core-listbox, core-multi-select, tw-field, tw-i18n, tw-list, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/multi-select';</script>

<ui-multi-select label="Notify" name="notify" placeholder="Choose people">
  <option value="owner">Contract owner</option>
  <option value="legal">Legal team</option>
</ui-multi-select>
```

React:

```tsx
import { UiMultiSelect } from '@purpurabog/ui/react';

<UiMultiSelect label="Notify" name="notify" placeholder="Choose people">
  <option value="owner">Contract owner</option>
  <option value="legal">Legal team</option>
</UiMultiSelect>
```

React + Tailwind:

```tsx
import { MultiSelect } from '@/components/ui/react-tw/multi-select';

const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
];

<MultiSelect label="Notify" name="notify" placeholder="Choose people" items={people} />
```

Choosing one value from many? See [Select, Dropdown, Combobox or MultiSelect?](https://parntengza.github.io/kanok-ui-docs/en/select/#select-dropdown-combobox-or-multiselect)

## Read and submit the value

`value` is the array of chosen values. Mark the starting choices with `<option selected>` (or `defaultValue` in React + Tailwind). The form gets one entry per chosen value under `name`, so read it with `FormData.getAll()`. `change` fires whenever the set of chosen values changes. With `required`, the form won't submit until at least one option is chosen.


HTML:

```html
<form id="multi-select-form" style="display: grid; gap: 16px">
  <ui-multi-select id="multi-select-docs" label="Attached documents" name="docs" placeholder="Choose documents" required invalid-text="Choose at least one document">
    <option value="id" selected>Copy of ID card</option>
    <option value="poa">Power of attorney</option>
    <option value="cert">Company certificate</option>
    <option value="map">Map</option>
  </ui-multi-select>
  <div><ui-button type="submit">Submit</ui-button></div>
</form>
<p>value: <output id="multi-select-docs-out"></output></p>
<p>Submitted: <output id="multi-select-form-out"></output></p>

<script type="module">
  const form = document.getElementById('multi-select-form');
  const docs = document.getElementById('multi-select-docs');
  const valueOut = document.getElementById('multi-select-docs-out');
  const show = () => (valueOut.value = JSON.stringify(docs.value));
  show();
  docs.addEventListener('change', show);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('multi-select-form-out').value = JSON.stringify(new FormData(form).getAll('docs'));
  });
</script>
```

React:

```tsx
import type { UiMultiSelect as MultiSelectElement } from '@purpurabog/ui';

const [docs, setDocs] = useState(['id']);
const [sent, setSent] = useState<string[]>([]);
const submit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setSent(new FormData(event.currentTarget).getAll('docs') as string[]);
};

<form onSubmit={submit}>
  <UiMultiSelect label="Attached documents" name="docs" placeholder="Choose documents" required invalidText="Choose at least one document" value={docs} onChange={(e) => setDocs((e.target as MultiSelectElement).value)}>
    <option value="id">Copy of ID card</option>
    <option value="poa">Power of attorney</option>
    <option value="cert">Company certificate</option>
    <option value="map">Map</option>
  </UiMultiSelect>
  <UiButton type="submit">Submit</UiButton>
</form>
<p>value: <output>{JSON.stringify(docs)}</output></p>
<p>Submitted: <output>{JSON.stringify(sent)}</output></p>
```

React + Tailwind:

```tsx
// validation is your app's: `tried` is set on the first submit
<form onSubmit={submit}>
  <MultiSelect label="Attached documents" name="docs" placeholder="Choose documents" items={documents} value={docs} onChange={setDocs} required invalid={tried && docs.length === 0} invalidText="Choose at least one document" />
  <Button type="submit">Submit</Button>
</form>
<p>value: <output>{JSON.stringify(docs)}</output></p>
<p>Submitted: <output>{JSON.stringify(sent)}</output></p>
```

`value` is a property, not an attribute: in HTML, set it from JavaScript or use `<option selected>`. The placeholder stays in the field even after a choice (Carbon's `label`), next to the count tag.

## Select all

`select-all` adds a first row that checks or unchecks every enabled option. It shows a mixed state while only some are chosen.


HTML:

```html
<ui-multi-select label="Departments to review" name="review" placeholder="Choose departments" select-all>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
  <option value="procurement">Procurement</option>
  <option value="hr" disabled>Human resources (not involved)</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Departments to review" name="review" placeholder="Choose departments" selectAll>
  <option value="legal">Legal</option>
  <option value="finance">Finance</option>
  <option value="procurement">Procurement</option>
  <option value="hr" disabled>Human resources (not involved)</option>
</UiMultiSelect>
```

React + Tailwind:

```tsx
const departments = [
  { value: 'legal', label: 'Legal' },
  { value: 'finance', label: 'Finance' },
  { value: 'procurement', label: 'Procurement' },
  { value: 'hr', label: 'Human resources (not involved)', disabled: true },
];

<MultiSelect label="Departments to review" name="review" placeholder="Choose departments" items={departments} selectAll />
```

## Where chosen options go

`selection-feedback` decides when chosen rows move to the top of the list:

| `selection-feedback` | Chosen rows |
|---|---|
| `top-after-reopen` (default) | Move to the top the next time the list opens, so nothing jumps while choosing |
| `top` | Move to the top at once |
| `fixed` | Stay where they are |

Otherwise the order is yours (Carbon also sorts alphabetically; this library keeps your `<option>` order). With `<optgroup>`s, the groups stay as written and nothing moves. Choose the last rows in each field below, then close and reopen the lists.


HTML:

```html
<ui-multi-select label="Approval steps (default)" placeholder="Choose steps">
  <option value="draft">Draft check</option>
  <option value="legal">Legal review</option>
  <option value="finance">Finance review</option>
  <option value="sign">Signature</option>
</ui-multi-select>
<ui-multi-select label="Approval steps (fixed)" placeholder="Choose steps" selection-feedback="fixed">
  <option value="draft">Draft check</option>
  <option value="legal">Legal review</option>
  <option value="finance">Finance review</option>
  <option value="sign">Signature</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Approval steps (default)" placeholder="Choose steps">…</UiMultiSelect>
<UiMultiSelect label="Approval steps (fixed)" placeholder="Choose steps" selectionFeedback="fixed">…</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Approval steps (default)" placeholder="Choose steps" items={steps} />
<MultiSelect label="Approval steps (fixed)" placeholder="Choose steps" items={steps} selectionFeedback="fixed" />
```

## Filterable

`filterable` turns the field into a text box that narrows the list as people type (Carbon's `FilterableMultiSelect`). `filter` is `contains` (the default, as Carbon) or `starts-with`. Choosing keeps the text and the list open; leaving the field clears the text. "Select all" then acts on the rows shown.


HTML:

```html
<ui-multi-select label="Provinces" name="provinces" placeholder="Type to filter" filterable>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
  <option value="kkn">Khon Kaen</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Provinces" name="provinces" placeholder="Type to filter" filterable>
  <option value="bkk">Bangkok</option>
  <option value="cnx">Chiang Mai</option>
  <option value="cri">Chiang Rai</option>
  <option value="hkt">Phuket</option>
  <option value="kkn">Khon Kaen</option>
</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Provinces" name="provinces" placeholder="Type to filter" items={provinces} filterable />
```

## Search on a server

For a server search, set `filter="none"`, listen to the typed text, replace the options and set `loading` (the list shows "Searching…"). Keep the chosen options in the list so their rows stay. In the demo, a short timer stands in for the server.


HTML:

```html
<ui-multi-select id="multi-select-branches" label="Branches" name="branches" placeholder="Search branches" helper-text="Searches as you type" filterable filter="none"></ui-multi-select>

<script type="module">
  // stands in for fetch(`/api/branches?q=${encodeURIComponent(text)}`).then((response) => response.json())
  const all = ['Silom', 'Siam', 'Sathorn', 'Bang Na', 'Bang Rak', 'Lat Phrao', 'Chiang Mai', 'Khon Kaen', 'Phuket', 'Hat Yai'];
  const search = (text) =>
    new Promise((resolve) => setTimeout(() => resolve(all.filter((b) => b.toLowerCase().includes(text.toLowerCase()))), 600));

  const branches = document.getElementById('multi-select-branches');
  const show = (found) => {
    const chosen = [...branches.querySelectorAll('option')].filter((o) => branches.value.includes(o.value));
    const rest = found.filter((b) => !branches.value.includes(b)).map((b) => new Option(b, b));
    branches.replaceChildren(...chosen, ...rest);
  };
  show(all);

  branches.addEventListener('input', async () => {
    const text = branches.inputValue;
    branches.loading = true;
    const found = await search(text);
    if (branches.inputValue !== text) return; // a newer search is running
    show(found);
    branches.loading = false;
  });
</script>
```

React:

```tsx
<UiMultiSelect label="Branches" name="branches" placeholder="Search branches" filterable filter="none" loading={loading} onInput={(e) => onText((e.target as MultiSelectElement).inputValue)}>
  {rows.map((b) => <option key={b} value={b}>{b}</option>)}
</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Branches" name="branches" placeholder="Search branches" items={rows.map((b) => ({ value: b, label: b }))} filterable filter="none" loading={loading} onInputChange={onText} />
```

In the React versions, `onText` sets `loading`, calls `search()`, and puts the result in `rows` together with the chosen options. `search()` fetches the matches, as on [Combobox](https://parntengza.github.io/kanok-ui-docs/en/combobox/#search-on-a-server).

## Load the options when the list opens

Without `filterable`, `loading` shows one "Loading…" row and the keys pick nothing. Use it with the open event to fetch the options on first open, exactly as on [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/#load-the-options-when-the-list-opens): `ui-toggle` on the web component, `onUiToggle` in React, `onMenuChange` in React + Tailwind.


HTML:

```html
<ui-multi-select id="multi-select-witnesses" label="Witnesses" name="witnesses" placeholder="Choose witnesses" helper-text="The names load the first time the list opens" loading></ui-multi-select>

<script type="module">
  // stands in for fetch('/api/staff').then((response) => response.json())
  const loadStaff = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve([
        { value: 'anong', label: 'Anong P.' },
        { value: 'boonmee', label: 'Boonmee S.' },
        { value: 'chaiya', label: 'Chaiya R.' },
      ]), 1000),
    );

  const witnesses = document.getElementById('multi-select-witnesses');
  witnesses.addEventListener('ui-toggle', async (event) => {
    if (!event.detail.open || !witnesses.loading) return;
    const staff = await loadStaff();
    witnesses.replaceChildren(...staff.map((s) => new Option(s.label, s.value)));
    witnesses.loading = false;
  });
</script>
```

React:

```tsx
const [staff, setStaff] = useState<{ value: string; label: string }[]>();
const load = async (open: boolean) => {
  if (open && !staff) setStaff(await loadStaff());
};

<UiMultiSelect label="Witnesses" name="witnesses" placeholder="Choose witnesses" loading={!staff} onUiToggle={(e) => load(e.detail.open)}>
  {staff?.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Witnesses" name="witnesses" placeholder="Choose witnesses" items={staff ?? []} loading={!staff} onMenuChange={load} />
```

## Groups and descriptions

As in [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/): `<optgroup label>` groups options, `data-description` adds a second line (typing and filtering only search the labels), and `disabled` options can't be chosen. React + Tailwind takes groups `{ label, options }` and `description` in `items`.


HTML:

```html
<ui-multi-select label="Send copies to" name="cc" placeholder="Choose recipients">
  <optgroup label="Inside the company">
    <option value="legal" data-description="legal@example.co.th">Legal team</option>
    <option value="finance" data-description="finance@example.co.th">Finance team</option>
  </optgroup>
  <optgroup label="Outside">
    <option value="party" data-description="The other party's contact">Counterparty</option>
    <option value="notary" disabled>Notary (not needed for this contract)</option>
  </optgroup>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Send copies to" name="cc" placeholder="Choose recipients">
  <optgroup label="Inside the company">
    <option value="legal" data-description="legal@example.co.th">Legal team</option>
    <option value="finance" data-description="finance@example.co.th">Finance team</option>
  </optgroup>
  <optgroup label="Outside">
    <option value="party" data-description="The other party's contact">Counterparty</option>
    <option value="notary" disabled>Notary (not needed for this contract)</option>
  </optgroup>
</UiMultiSelect>
```

React + Tailwind:

```tsx
const recipients = [
  { label: 'Inside the company', options: [
    { value: 'legal', label: 'Legal team', description: 'legal@example.co.th' },
    { value: 'finance', label: 'Finance team', description: 'finance@example.co.th' },
  ] },
  { label: 'Outside', options: [
    { value: 'party', label: 'Counterparty', description: "The other party's contact" },
    { value: 'notary', label: 'Notary (not needed for this contract)', disabled: true },
  ] },
];

<MultiSelect label="Send copies to" name="cc" placeholder="Choose recipients" items={recipients} />
```

## Sizes and direction

`size`: `sm` 32px, `md` 40px (the default), `lg` 48px; `direction="top"` opens the list above.


HTML:

```html
<ui-multi-select label="Small" size="sm" placeholder="Choose people">
  <option value="legal" selected>Legal team</option>
  <option value="finance">Finance team</option>
</ui-multi-select>
<ui-multi-select label="Medium" placeholder="Choose people">
  <option value="legal" selected>Legal team</option>
  <option value="finance">Finance team</option>
</ui-multi-select>
<ui-multi-select label="Large, opens above" size="lg" direction="top" placeholder="Choose people">
  <option value="legal" selected>Legal team</option>
  <option value="finance">Finance team</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Small" size="sm" placeholder="Choose people">…</UiMultiSelect>
<UiMultiSelect label="Medium" placeholder="Choose people">…</UiMultiSelect>
<UiMultiSelect label="Large, opens above" size="lg" direction="top" placeholder="Choose people">…</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Small" items={people} size="sm" placeholder="Choose people" defaultValue={['legal']} />
<MultiSelect label="Medium" items={people} placeholder="Choose people" defaultValue={['legal']} />
<MultiSelect label="Large, opens above" items={people} size="lg" direction="top" placeholder="Choose people" defaultValue={['legal']} />
```

## Fluid

`fluid` puts the label inside a 64px box (Carbon's `FluidMultiSelect`); the open list keeps the usual row height. A fluid form around the field does the same; see [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form).


HTML:

```html
<ui-multi-select fluid label="Notify" name="notify" placeholder="Choose people">
  <option value="owner" selected>Contract owner</option>
  <option value="legal">Legal team</option>
  <option value="finance">Finance team</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect fluid label="Notify" name="notify" placeholder="Choose people">…</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect fluid label="Notify" name="notify" placeholder="Choose people" items={people} defaultValue={['owner']} />
```

## Outlined (Kanok design)

In the Kanok design, fields are filled by default: a soft grey fill, no edge. Put `data-field-variant="outlined"` on an element around the field (a `<form>`, or `<html>` for the whole app) for a 1px edge on no fill; focus is still the soft blue halo. The attribute does nothing in the Carbon design, so the example below sits inside `data-design="kanok"`. See [Kanok design](https://parntengza.github.io/kanok-ui-docs/en/kanok/#outlined-fields) for the details.


HTML:

```html
<div data-design="kanok" data-theme="paper" data-field-variant="outlined">
  <ui-multi-select label="Notify" name="notify" placeholder="Choose people" select-all>
    <option value="owner" selected>Contract owner</option>
    <option value="legal">Legal team</option>
    <option value="finance">Finance team</option>
    <option value="signer" data-description="Only after both parties sign">Signers</option>
  </ui-multi-select>
</div>
```

React:

```tsx
import type { UiMultiSelect as MultiSelectElement } from '@purpurabog/ui';

const [notify, setNotify] = useState(['owner']);

<div data-field-variant="outlined">
  <UiMultiSelect label="Notify" name="notify" placeholder="Choose people" selectAll value={notify} onChange={(e) => setNotify((e.target as MultiSelectElement).value)}>
    <option value="owner">Contract owner</option>
    <option value="legal">Legal team</option>
    <option value="finance">Finance team</option>
    <option value="signer" data-description="Only after both parties sign">Signers</option>
  </UiMultiSelect>
</div>
```

React + Tailwind:

```tsx
const people = [
  { value: 'owner', label: 'Contract owner' },
  { value: 'legal', label: 'Legal team' },
  { value: 'finance', label: 'Finance team' },
  { value: 'signer', label: 'Signers', description: 'Only after both parties sign' },
];

<div data-field-variant="outlined">
  <MultiSelect label="Notify" name="notify" placeholder="Choose people" items={people} defaultValue={['owner']} selectAll />
</div>
```

## Helper text, warnings and errors

One line shows under the field at a time: an error beats a warning, and a warning beats the helper text. `warn` doesn't block the form; `invalid` forces the error.


HTML:

```html
<ui-multi-select label="Approvers" name="approvers" placeholder="Choose approvers" helper-text="Each approver signs in turn">
  <option value="somchai">Somchai K.</option>
  <option value="malee">Malee S.</option>
</ui-multi-select>
<ui-multi-select label="Approvers" name="approvers2" placeholder="Choose approvers" warn warn-text="Malee is on leave until 20 October">
  <option value="somchai">Somchai K.</option>
  <option value="malee" selected>Malee S.</option>
</ui-multi-select>
<ui-multi-select label="Approvers" name="approvers3" placeholder="Choose approvers" invalid invalid-text="A contract over 1 million baht needs two approvers">
  <option value="somchai" selected>Somchai K.</option>
  <option value="malee">Malee S.</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Approvers" name="approvers" placeholder="Choose approvers" helperText="Each approver signs in turn">…</UiMultiSelect>
<UiMultiSelect label="Approvers" name="approvers2" placeholder="Choose approvers" value={['malee']} warn warnText="Malee is on leave until 20 October">…</UiMultiSelect>
<UiMultiSelect label="Approvers" name="approvers3" placeholder="Choose approvers" value={['somchai']} invalid invalidText="A contract over 1 million baht needs two approvers">…</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Approvers" name="approvers" placeholder="Choose approvers" items={approvers} helperText="Each approver signs in turn" />
<MultiSelect label="Approvers" name="approvers2" placeholder="Choose approvers" items={approvers} defaultValue={['malee']} warn warnText="Malee is on leave until 20 October" />
<MultiSelect label="Approvers" name="approvers3" placeholder="Choose approvers" items={approvers} defaultValue={['somchai']} invalid invalidText="A contract over 1 million baht needs two approvers" />
```

## Read-only and disabled

`readonly` (`readOnly` in React + Tailwind) shows and submits the choice but blocks changes. `disabled` greys the field out, and it isn't submitted.


HTML:

```html
<ui-multi-select label="Notify" placeholder="Choose people" readonly>
  <option value="owner" selected>Contract owner</option>
  <option value="legal" selected>Legal team</option>
  <option value="finance">Finance team</option>
</ui-multi-select>
<ui-multi-select label="Notify" placeholder="Choose people" disabled>
  <option value="owner">Contract owner</option>
  <option value="legal">Legal team</option>
</ui-multi-select>
```

React:

```tsx
<UiMultiSelect label="Notify" placeholder="Choose people" value={['owner', 'legal']} readonly>…</UiMultiSelect>
<UiMultiSelect label="Notify" placeholder="Choose people" disabled>…</UiMultiSelect>
```

React + Tailwind:

```tsx
<MultiSelect label="Notify" placeholder="Choose people" items={people} defaultValue={['owner', 'legal']} readOnly />
<MultiSelect label="Notify" placeholder="Choose people" items={people} disabled />
```

Required fields, errors and warnings: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Keyboard

| Key | List closed | List open |
|---|---|---|
| ↓, Enter, Space | Open the list | Enter and Space check or uncheck the highlighted row; the list stays open |
| ↓ / ↑, Page Down / Page Up, Home / End | ↑ does nothing; Home / End open on the first / last row | Move the highlight |
| Letters | Open on the next option that starts with them | Jump to the next option that starts with them |
| Delete, Backspace, Esc | Clear every choice | Esc closes |
| Tab | Moves on | Closes and moves on |

With `filterable`, the field is a text box: letters, Space, Home, End, Delete and Backspace edit the text, ↓ or Enter open the list, Enter checks the highlighted row, and Esc on a closed list clears the choices and the text.

## Accessibility

- The list is a `listbox` with `aria-multiselectable`; the highlight is announced through `aria-activedescendant`, so focus stays on the field.
- The × buttons are not Tab stops (as in Carbon). Delete, Backspace or Esc clear the choices from the keyboard.
- "Loading…", "Searching…" and "No matching items" are announced.

Unstyled React parts with the same behaviour: [Headless Multi-select](https://parntengza.github.io/kanok-ui-docs/en/headless-multi-select/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-multi-select>` · React `UiMultiSelect`

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
| `placeholder` | `placeholder` | `string` | `''` | Text always shown in the field (Carbon's `label`), e.g. "Choose options". |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `direction` | `direction` | `'bottom' \| 'top'` | `'bottom'` | Preferred side for the list; it flips when there is no room. |
| `selection-feedback` | `selectionFeedback` | `SelectionFeedback` | `'top-after-reopen'` |  |
| `select-all` | `selectAll` | `boolean` | `false` | Adds a "Select all" row. |
| `filterable` | `filterable` | `boolean` | `false` | The field is a text box that narrows the list (Carbon `FilterableMultiSelect` / `filterable`). |
| `filter` | `filter` | `MultiSelectFilter` | `'contains'` | With `filterable`: `contains` (Carbon), `starts-with`, or `none` to leave the list to a server search. |
| `loading` | `loading` | `boolean` | `false` | The options are on their way: "Searching…" with `filterable` (a server search), else "Loading…"; the keys pick nothing. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidMultiSelect`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `value` | `string[]` | Chosen option values. Initial choices can also come from `<option selected>`. |
| `inputValue` |  | With `filterable`, what the user typed; set it to search for something. |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } after the list opens or closes (Carbon React `onMenuChange`) |
| `input` | `onInput` | Whenever the set of chosen values changes, as ui-dropdown and ui-combobox; with `filterable`, also native and composed as the user types, where `value` is unchanged (kept for compatibility: listen to `ui-input` for the typing) |
| `ui-input` | `onUiInput` | detail: { value } the typed text (`inputValue`) with `filterable`, as the user types or when the text is emptied |
| `change` | `onChange` | Whenever the set of chosen values changes |

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
| `input` | The field button, or the text box with `filterable` (role=combobox) |
| `toggle` | The chevron button (`filterable`) |
| `clear-filter-button` | The × that clears the text (`filterable`) |
| `empty` | The "searching" / "no results" row (`filterable`) |
| `tag` | The selected-count pill |
| `clear-button` | The × inside the pill |
| `chevron` | The arrow icon |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |
| `menu` | The floating list |
| `option` | Each row |
| `select-all` | The "Select all" row |
| `checkbox` | The box drawn in each row |
| `group-label` | An `<optgroup>` heading |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-count-tag-background` |  | The count pill's fill (default `--ui-ink`); also `--ui-count-tag-ink` (`--ui-inverse-ink`) and `--ui-count-tag-hover` (its ×, `--ui-secondary-hover`) |
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
| `--ui-field-open-background` |  | The box's fill while its list is open (default the field's hover fill; Kanok: transparent) |
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |
| `--ui-menu-item-active-outline` |  | / --ui-menu-item-active-background - The keyboard-highlighted row: its ring and its fill (default focus, transparent) |
| `--ui-option-box-align` |  | / --ui-option-box-offset - A two-line row's checkbox: `align-self` and top margin (default auto, 0: centred; Kanok: beside the label line) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |
| `--ui-menu-item-pressed` |  | Fill of a pressed option (default `--ui-surface-2`; Kanok: the 20% pressed tint) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |


