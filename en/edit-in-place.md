# Edit in place

Edit in place shows a value as plain text that people can edit right where it is, without opening a form (Carbon for IBM Products `EditInPlace`). Hovered, it gets the field fill and an "Edit" button. Clicked or tabbed into, it becomes a field with "Cancel" and "Save" buttons. Use it for one value on a page that is mostly read, such as a contract's title or a reference number.


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place label="Contract title" value="Warehouse lease, Bang Na"></ui-edit-in-place>
</div>
```

React:

```tsx
<UiEditInPlace label="Contract title" value="Warehouse lease, Bang Na" />
```

React + Tailwind:

```tsx
<EditInPlace label="Contract title" defaultValue="Warehouse lease, Bang Na" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/edit-in-place
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-edit-in-place
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/edit-in-place.json
#    to its target:
#    components/ui/primitives/edit-in-place/edit-in-place.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-edit-in-place, icon-button, popover, shared-element, shared-events, shared-field, shared-localize, shared-position, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-edit-in-place.json
#    to its target:
#    components/ui/react-tw/edit-in-place.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-edit-in-place, core-position, tw-i18n, tw-icon-button, tw-popover, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

`label` is the field's accessible name; there is no visible label, so the text around the value has to say what it is.


HTML:

```html
<script type="module">import '@purpurabog/ui/edit-in-place';</script>

<ui-edit-in-place label="Contract title" value="Warehouse lease"></ui-edit-in-place>
```

React:

```tsx
import { UiEditInPlace } from '@purpurabog/ui/react';

<UiEditInPlace label="Contract title" value="Warehouse lease" />
```

React + Tailwind:

```tsx
import { EditInPlace } from '@/components/ui/react-tw/edit-in-place';

<EditInPlace label="Contract title" defaultValue="Warehouse lease" />
```

## Save and cancel

`ui-save` fires when a change is saved: with Save, with Enter, or when the focus leaves with a valid change. `ui-cancel` fires when the value is put back: with Cancel, with Escape, or when the focus leaves without a valid change. Both carry the value in `detail.value`. Save and Cancel are enabled only once the value has changed (spaces at the ends don't count).


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place id="edit-in-place-po" label="Purchase order number" value="PO-2026-0815"></ui-edit-in-place>
</div>
<p>Last event: <output id="edit-in-place-po-out"></output></p>

<script type="module">
  const field = document.getElementById('edit-in-place-po');
  const out = document.getElementById('edit-in-place-po-out');
  field.addEventListener('ui-save', (event) => (out.value = `saved "${event.detail.value}"`));
  field.addEventListener('ui-cancel', (event) => (out.value = `put back "${event.detail.value}"`));
</script>
```

React:

```tsx
const [last, setLast] = useState('');

<UiEditInPlace
  label="Purchase order number"
  value="PO-2026-0815"
  onUiSave={(e) => setLast(`saved "${e.detail.value}"`)}
  onUiCancel={(e) => setLast(`put back "${e.detail.value}"`)}
/>
<p>Last event: <output>{last}</output></p>
```

React + Tailwind:

```tsx
const [last, setLast] = useState('');

<EditInPlace
  label="Purchase order number"
  defaultValue="PO-2026-0815"
  onSave={(value) => setLast(`saved "${value}"`)}
  onCancel={(value) => setLast(`put back "${value}"`)}
/>
<p>Last event: <output>{last}</output></p>
```

The `input` event fires on every keystroke, with `value` already updated. In React + Tailwind, `onChange` gets each new value, and the value put back on cancel.

## Save to your server

Saving is your app's: send the value to the server in `ui-save`. The element keeps the edited value meanwhile; Cancel and Escape go back to the value last saved. A `value` you set while it isn't being edited becomes the new starting point.


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place id="edit-in-place-ref" label="Reference" value="REF-104"></ui-edit-in-place>
</div>
<p>Saved on the server: <output id="edit-in-place-ref-out">REF-104</output></p>

<script type="module">
  const field = document.getElementById('edit-in-place-ref');
  const out = document.getElementById('edit-in-place-ref-out');
  field.addEventListener('ui-save', (event) => {
    const sent = event.detail.value.trim();
    setTimeout(() => (out.value = sent), 400); // the server's answer
  });
</script>
```

React:

```tsx
const [reference, setReference] = useState('REF-104');

<UiEditInPlace
  label="Reference"
  value={reference}
  onUiSave={async (e) => setReference(await saveReference(e.detail.value))}
/>
```

React + Tailwind:

```tsx
const [reference, setReference] = useState('REF-104');

<EditInPlace
  label="Reference"
  value={reference}
  onChange={setReference}
  onSave={async (value) => setReference(await saveReference(value))}
/>
```

`saveReference` stands for your own call to the server. React + Tailwind's `value` is controlled: pair it with `onChange`.

## Sizes

`size`: `sm` 40px (the default), `md` 48px, `lg` 64px. The buttons are squares of the same height.


HTML:

```html
<div style="max-width: 360px; display: grid; gap: 16px">
  <ui-edit-in-place label="Small" value="Small, 40px" edit-always-visible></ui-edit-in-place>
  <ui-edit-in-place label="Medium" value="Medium, 48px" size="md" edit-always-visible></ui-edit-in-place>
  <ui-edit-in-place label="Large" value="Large, 64px" size="lg" edit-always-visible></ui-edit-in-place>
</div>
```

React:

```tsx
<UiEditInPlace label="Small" value="Small, 40px" editAlwaysVisible />
<UiEditInPlace label="Medium" value="Medium, 48px" size="md" editAlwaysVisible />
<UiEditInPlace label="Large" value="Large, 64px" size="lg" editAlwaysVisible />
```

React + Tailwind:

```tsx
<EditInPlace label="Small" defaultValue="Small, 40px" editAlwaysVisible />
<EditInPlace label="Medium" defaultValue="Medium, 48px" size="md" editAlwaysVisible />
<EditInPlace label="Large" defaultValue="Large, 64px" size="lg" editAlwaysVisible />
```

## Show the Edit button all the time

By default the Edit button shows on hover only. `edit-always-visible` (`editAlwaysVisible`) keeps it visible, so people on touch screens, or who don't hover, can see the value is editable.


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place label="Cost center" value="CC-4410 Legal" edit-always-visible></ui-edit-in-place>
</div>
```

React:

```tsx
<UiEditInPlace label="Cost center" value="CC-4410 Legal" editAlwaysVisible />
```

React + Tailwind:

```tsx
<EditInPlace label="Cost center" defaultValue="CC-4410 Legal" editAlwaysVisible />
```

## Placeholder

`placeholder` shows in the empty field, for a value that hasn't been set yet.


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place label="Project code" placeholder="Add a project code" edit-always-visible></ui-edit-in-place>
</div>
```

React:

```tsx
<UiEditInPlace label="Project code" placeholder="Add a project code" editAlwaysVisible />
```

React + Tailwind:

```tsx
<EditInPlace label="Project code" placeholder="Add a project code" editAlwaysVisible />
```

## Invalid

`invalid` draws a red border and a warning icon, and blocks saving: Save stays disabled, Enter doesn't save, and leaving the field puts the value back. `invalid-text` (`invalidText`) shows under it and describes the field. Check the value on `input` and set `invalid` yourself.


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place id="edit-in-place-tax" label="Tax ID" value="0105556012345" invalid-text="A tax ID has 13 digits"></ui-edit-in-place>
</div>

<script type="module">
  const field = document.getElementById('edit-in-place-tax');
  const check = () => (field.invalid = !/^\d{13}$/.test(field.value));
  field.addEventListener('input', check);
  field.addEventListener('ui-cancel', check);
</script>
```

React:

```tsx
const [taxId, setTaxId] = useState('0105556012345');

<UiEditInPlace
  label="Tax ID"
  value={taxId}
  invalid={!/^\d{13}$/.test(taxId)}
  invalidText="A tax ID has 13 digits"
  onInput={(e) => setTaxId((e.target as HTMLInputElement).value)}
  onUiCancel={(e) => setTaxId(e.detail.value)}
/>
```

React + Tailwind:

```tsx
const [taxId, setTaxId] = useState('0105556012345');

<EditInPlace label="Tax ID" value={taxId} onChange={setTaxId} invalid={!/^\d{13}$/.test(taxId)} invalidText="A tax ID has 13 digits" />
```

Delete a digit to see the error. A cancel puts the value back without an `input` event, so check again on `ui-cancel`; React + Tailwind's `onChange` gets the value put back.

## Read-only

`readonly` (`readOnly`) shows the value with an "Edit off" button instead of "Edit". A click on the field or the button opens a short note that it can't be edited. `readonly-text` (`readOnlyText`) says why, in your words.


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place label="Contract number" value="CT-2026-0142" readonly readonly-text="Contract numbers are set when the contract is signed"></ui-edit-in-place>
</div>
```

React:

```tsx
<UiEditInPlace label="Contract number" value="CT-2026-0142" readonly readonlyText="Contract numbers are set when the contract is signed" />
```

React + Tailwind:

```tsx
<EditInPlace label="Contract number" defaultValue="CT-2026-0142" readOnly readOnlyText="Contract numbers are set when the contract is signed" />
```

## A heading you can edit

`inherit-typography` (`inheritTypography`) makes the field take the size and weight of the text around it, so a page title can be edited as it is.


HTML:

```html
<div style="max-width: 480px; font: var(--ui-font-heading-03)">
  <ui-edit-in-place label="Report name" value="Quarterly contract report" size="md" inherit-typography></ui-edit-in-place>
</div>
```

React:

```tsx
<div style={{ maxWidth: 480, font: 'var(--ui-font-heading-03)' }}>
  <UiEditInPlace label="Report name" value="Quarterly contract report" size="md" inheritTypography />
</div>
```

React + Tailwind:

```tsx
<div className="max-w-120 type-heading-03">
  <EditInPlace label="Report name" defaultValue="Quarterly contract report" size="md" inheritTypography />
</div>
```

In a real page, put it inside the heading element itself (`<h2>`), so the heading keeps its level.

## Button names and tooltip places

The buttons' names come from the page language ("Edit", "Save", "Cancel", "Edit off"). Change them with `edit-label`, `save-label`, `cancel-label` and `readonly-label` (`editLabel`, `saveLabel`, `cancelLabel`, `readOnlyLabel` in React + Tailwind). `tooltip-placement` moves the buttons' tooltips (top by default) and `note-placement` the read-only note (bottom by default).


HTML:

```html
<div style="max-width: 360px">
  <ui-edit-in-place label="Supplier name" value="Siam Logistics" save-label="Save supplier name" cancel-label="Undo changes" tooltip-placement="bottom" edit-always-visible></ui-edit-in-place>
</div>
```

React:

```tsx
<UiEditInPlace label="Supplier name" value="Siam Logistics" saveLabel="Save supplier name" cancelLabel="Undo changes" tooltipPlacement="bottom" editAlwaysVisible />
```

React + Tailwind:

```tsx
<EditInPlace label="Supplier name" defaultValue="Siam Logistics" saveLabel="Save supplier name" cancelLabel="Undo changes" tooltipPlacement="bottom" editAlwaysVisible />
```

## Style it

The parts are `base` (the field box), `input`, `actions` (the buttons' box) and `invalid-text`. The host has `data-editing` while it is a field.


HTML:

```html
<style>
  .edit-in-place-styled::part(input) { font-weight: 600; }
  .edit-in-place-styled[data-editing]::part(base) { background: var(--ui-field-2); }
</style>
<div style="max-width: 360px">
  <ui-edit-in-place class="edit-in-place-styled" label="Owner" value="Malee S."></ui-edit-in-place>
</div>
```

React:

```tsx
// .edit-in-place-styled::part(input) { font-weight: 600; }
// .edit-in-place-styled[data-editing]::part(base) { background: var(--ui-field-2); }
<UiEditInPlace className="edit-in-place-styled" label="Owner" value="Malee S." />
```

React + Tailwind:

```tsx
// the look is in components/ui/react-tw/edit-in-place.tsx: change its classes there,
// or build your own on the Headless parts
<EditInPlace className="max-w-90" label="Owner" defaultValue="Malee S." />
```

`className` in React + Tailwind goes on the outer box, around the field and its error.

## Keyboard

| Key | While editing |
|---|---|
| Tab | Moves into the field, which starts editing; then to Cancel and Save once they are enabled, then out (leaving saves a valid change, or puts the value back) |
| Enter | Saves a valid change and keeps editing. With nothing to save, stops editing; the focus stays in the field |
| Escape | Puts the value back and keeps editing |

## Accessibility

- The field is a text box named by `label`. Write a label that names the value ("Contract title"), since nothing visible does.
- `invalid` sets `aria-invalid`, and `invalid-text` is the field's description, so it is read with it.
- The buttons have names and tooltips. A press on Save or Cancel keeps the focus in the field.
- Leaving with a valid change saves it without a click. Tell people in your page's help if that could surprise them, or use a normal [text input](https://parntengza.github.io/kanok-ui-docs/en/text-input/) and a Save button for values with consequences.

Unstyled React parts with the same behaviour: [Headless Edit in place](https://parntengza.github.io/kanok-ui-docs/en/headless-edit-in-place/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-edit-in-place>` · React `UiEditInPlace`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `string` | `''` | The value (as `<input>.value`). |
| `label` | `label` | `string` | `''` | The field's accessible name (Carbon `labelText`; there is no visible label). |
| `placeholder` | `placeholder` | `string` | `''` |  |
| `size` | `size` | `EditInPlaceSize` | `'sm'` |  |
| `invalid` | `invalid` | `boolean` | `false` |  |
| `invalid-text` | `invalidText` | `string` | `''` |  |
| `readonly` | `readonly` | `boolean` | `false` |  |
| `edit-always-visible` | `editAlwaysVisible` | `boolean` | `false` | Show "Edit" without hovering. |
| `inherit-typography` | `inheritTypography` | `boolean` | `false` | The field takes the surrounding type (a heading made editable). |
| `tooltip-placement` | `tooltipPlacement` | `Placement` | `'top'` | Where the buttons' tooltips go (Carbon `tooltipAlignment`). |
| `note-placement` | `notePlacement` | `Placement` | `'bottom'` | Where the read-only note goes (Carbon `toggleTipAlignment`). |
| `edit-label` | `editLabel` | `string` | `''` | The buttons' names and the read-only note (defaults: the translation's "Edit", "Save", "Cancel", "Edit off", …). |
| `save-label` | `saveLabel` | `string` | `''` |  |
| `cancel-label` | `cancelLabel` | `string` | `''` |  |
| `readonly-label` | `readonlyLabel` | `string` | `''` |  |
| `readonly-text` | `readonlyText` | `string` | `''` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `type` | none (use a ref) |  |
| `input` | `onInput` | On every keystroke (`value` already updated) |
| `ui-save` | `onUiSave` | detail: { value } a change was saved (Save, Enter, leaving it) |
| `ui-cancel` | `onUiCancel` | detail: { value } the value was put back (Cancel, Escape, leaving it without a valid change) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The field box |
| `input` | The `<input>` |
| `actions` | The buttons' box |
| `invalid-text` | The error message |


