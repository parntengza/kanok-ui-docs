# Forms and validation

Every field is a form-associated custom element: it takes part in a plain `<form>` the way `<input>` does. You get submit, `FormData`, reset and the browser's constraint validation without any glue code.

The React wrappers from `@purpurabog/ui/react` render the same elements, so everything on this page applies to them too. The React + Tailwind components copied with shadcn work like Carbon React: validation is your app's, and they show what you pass in `invalid` and `invalidText` (going over `maxCount` is still an error by itself). For the wrappers, events and the rest of the setup, see [Using it with frameworks](https://parntengza.github.io/kanok-ui-docs/en/frameworks/).


HTML:

```html
<form method="dialog">
  <ui-stack gap="6">
    <ui-text-input label="Full name" name="name" required invalid-text="Enter your full name"></ui-text-input>
    <ui-date-picker label="Contract start" name="start" required></ui-date-picker>
    <ui-dropdown label="Contract type" name="type" placeholder="Choose a type" required>
      <option value="sale">Sale</option>
      <option value="lease">Lease</option>
    </ui-dropdown>
    <ui-button-set>
      <ui-button kind="secondary" type="reset">Reset</ui-button>
      <ui-button type="submit">Submit</ui-button>
    </ui-button-set>
  </ui-stack>
</form>
```

React:

```tsx
<form method="dialog">
  <UiStack gap="6">
    <UiTextInput label="Full name" name="name" required invalidText="Enter your full name" />
    <UiDatePicker label="Contract start" name="start" required />
    <UiDropdown label="Contract type" name="type" placeholder="Choose a type" required>
      <option value="sale">Sale</option>
      <option value="lease">Lease</option>
    </UiDropdown>
    <UiButtonSet>
      <UiButton kind="secondary" type="reset">Reset</UiButton>
      <UiButton type="submit">Submit</UiButton>
    </UiButtonSet>
  </UiStack>
</form>
```

Press Submit with the fields empty: each one shows its error and the first gets focus. (`method="dialog"` only keeps this demo on the page; your form posts as usual.)

## Submit with a form

Give each field a `name`. Fields submit under that name, so `FormData` reads them like native inputs:


HTML:

```html
<form id="contract">
  <ui-text-input label="Full name" name="name" required></ui-text-input>
  <ui-date-picker label="Contract start" name="start" required></ui-date-picker>
  <ui-button type="submit">Save</ui-button>
</form>

<script type="module">
  const form = document.querySelector('#contract');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    // { name: 'Somchai', start: '2026-10-10' }
  });
</script>
```

React:

```tsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    // { name: 'Somchai', start: '2026-10-10' }
  }}
>
  <UiTextInput label="Full name" name="name" required />
  <UiDatePicker label="Contract start" name="start" required />
  <UiButton type="submit">Save</UiButton>
</form>
```

React + Tailwind:

```tsx
// checking the values is your app's: see "Show an error from your validator"
<form
  onSubmit={(event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    // { name: 'Somchai', start: '2026-10-10' }
  }}
>
  <TextInput label="Full name" name="name" />
  <DatePicker label="Contract start" name="start" />
  <Button type="submit">Save</Button>
</form>
```

- `<ui-button type="submit">` submits the form it sits in, and `type="reset"` resets it. The default `type` is `button`, which does neither.
- Enter in a text box submits the form as a native text input does: through the form's first submit button, and not at all while that button is disabled. A form without a submit button submits on Enter only when it has a single text field.
- A `<fieldset disabled>` or `<ui-form-group disabled>` disables every field and `<ui-button>` inside it: they are not submitted, don't block the form and can't submit it.
- A field without a `label` of its own is named by an `aria-label` or `aria-labelledby` on it, or by a `<label for>` that points at it, as a native control is.
- `submit` only fires when every field is valid.
- Reset puts each field back to the value it started with and hides its error again.

## Mark a field as required

Add `required`. The form won't submit while the field is empty.

Every field brings its own message, translated to the page language (Thai and English are built in):

| Field | Message when empty |
|---|---|
| `ui-dropdown`, `ui-combobox`, `ui-multi-select` | Built in: "Please select an option." |
| `ui-radio-group` | Built in: "Please select an option." (`required-text` to change it) |
| `ui-checkbox-group` | Built in: "Select at least one option." (`required-text` to change it) |
| `ui-date-picker` | Built in: "Please enter a date.", plus messages for a wrong format, an impossible date and dates outside `min` / `max` |
| `ui-file-uploader` | Built in: "Add at least one file." (`required-text` to change it) |
| `ui-text-input`, `ui-text-area`, `ui-number-input` | Built in: "Fill out this field." |
| `ui-select` | Built in: "Please select an option." |

Other browser checks, such as a wrong email address or a `pattern`, still use the browser's message, in the browser's language. On every field in this table except the file uploader, `invalid-text` replaces the built-in or browser message, whatever made the field invalid. Set it when you want your own words, or one language everywhere:


HTML:

```html
<ui-text-input label="Full name" name="name" required invalid-text="Enter your full name"></ui-text-input>
```

React:

```tsx
<UiTextInput label="Full name" name="name" required invalidText="Enter your full name" />
```

## When errors show

Errors wait until the user is done with the field. Nobody sees "required" while they're still typing.

- A field shows its error after the user leaves it.
- Trying to submit shows the error on every invalid field at once and moves focus to the first one. The browser's own bubble doesn't appear. `reportValidity()` (the form's or a field's) does the same.
- `checkValidity()` stays silent, as on native controls: an app that checks the form on every keystroke (to enable its Save button, say) shows no errors and doesn't move the focus.
- Going over a `max-count` limit, and `invalid` set by your code, show right away.
- A disabled or read-only field shows no error.

## Show an error from your validator

Set `invalid` and `invalid-text` for errors only your app or server knows about. The error shows right away. When your form library owns validation, pass its result to `invalid` and `invalidText`:


HTML:

```js
const email = document.querySelector('ui-text-input[name="email"]');

const response = await fetch('/api/contracts', { method: 'POST', body: new FormData(form) });
if (response.status === 409) {
  email.invalidText = 'This email is already registered';
  email.invalid = true;
}

// clear it once the user changes the value
email.addEventListener('input', () => {
  email.invalid = false;
});
```

React:

```tsx
import { useState } from 'react';
import { UiButton, UiTextInput } from '@purpurabog/ui/react';

export function NameForm() {
  const [error, setError] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const name = String(new FormData(event.currentTarget).get('name') ?? '');
        setError(name.trim().length < 2 ? 'Enter at least 2 characters' : '');
      }}
    >
      <UiTextInput label="Full name" name="name" invalid={error !== ''} invalidText={error} onInput={() => setError('')} />
      <UiButton type="submit">Save</UiButton>
    </form>
  );
}
```

React + Tailwind:

```tsx
import { useForm } from 'react-hook-form';
import { TextInput } from '@/components/ui/react-tw/text-input';

type Values = { name: string };

export function NameForm({ onSave }: { onSave: (values: Values) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Values>();
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <TextInput label="Full name" {...register('name', { required: 'Enter your full name' })} invalid={!!errors.name} invalidText={errors.name?.message} />
    </form>
  );
}
```

On the web component and its React wrapper, `invalid` also makes the field invalid for the form, so the form won't submit again until you clear it. The React + Tailwind example uses React Hook Form; add `zodResolver` from `@hookform/resolvers` for a Zod schema.

## Check a rule with custom validity

`setCustomValidity()` works like on `<input>`: a message makes the field invalid, and `''` clears it. Unlike `invalid`, the message waits for the user to leave the field, like the built-in checks:

```js
const password = document.querySelector('ui-text-input[name="password"]');
const confirm = document.querySelector('ui-text-input[name="confirm"]');

confirm.addEventListener('input', () => {
  confirm.setCustomValidity(confirm.value === password.value ? '' : 'The passwords don’t match');
});
```

Fields also have `checkValidity()`, `reportValidity()`, `validity`, `validationMessage`, `willValidate` and `form`, as native controls do. These are methods of the elements: in React, call them on the wrapper's `ref`. In React + Tailwind, such a rule is part of your own validation.

## Add helper text and warnings

- `helper-text` is a hint under the field.
- `warn` with `warn-text` is a warning that doesn't block submit.
- One line shows at a time: an error beats a warning, and a warning beats helper text.


HTML:

```html
<ui-text-input label="Phone" name="phone" helper-text="We only call about this contract"></ui-text-input>
<ui-number-input label="Deposit" name="deposit" warn warn-text="Higher than usual for this contract type"></ui-number-input>
```

React:

```tsx
<UiTextInput label="Phone" name="phone" helperText="We only call about this contract" />
<UiNumberInput label="Deposit" name="deposit" warn warnText="Higher than usual for this contract type" />
```

React + Tailwind:

```tsx
<TextInput label="Phone" name="phone" helperText="We only call about this contract" />
<NumberInput label="Deposit" name="deposit" warn warnText="Higher than usual for this contract type" />
```

To put a link or bold text in a message, use the slot of the same name (`helper-text`, `warn-text`, `invalid-text`). In React + Tailwind, pass the markup to `helperText`, `warnText` or `invalidText`:


HTML:

```html
<ui-text-input label="Tax ID" name="taxId">
  <span slot="helper-text">Where to find it: <a href="/help/tax-id">help</a></span>
</ui-text-input>
```

React:

```tsx
<UiTextInput label="Tax ID" name="taxId">
  <span slot="helper-text">Where to find it: <a href="/help/tax-id">help</a></span>
</UiTextInput>
```

React + Tailwind:

```tsx
<TextInput label="Tax ID" name="taxId" helperText={<>Where to find it: <a href="/help/tax-id">help</a></>} />
```

## Style a field that shows an error

While the error line is showing, the field has `data-show-error` on itself (`data-show-warn` for a warning). Unlike `invalid`, which you set, this attribute follows what the user actually sees. It is on the web components, so it works with the React wrappers too:

```css
ui-text-input[data-show-error]::part(label) {
  color: var(--ui-error);
}

form:has([data-show-error]) .error-summary {
  display: block;
}
```

## Disable a field or a group

- `disabled` greys the field out. A disabled field isn't submitted and isn't validated, as natively.
- `readonly` shows the value and submits it, but the user can't change it.
- A disabled `<fieldset>` disables every field inside. So does `<ui-form-group disabled>`, Carbon's fieldset with a label as its legend:


HTML:

```html
<ui-form-group legend="Billing address" disabled>
  <ui-text-input label="Street" name="street"></ui-text-input>
  <ui-text-input label="Postcode" name="postcode"></ui-text-input>
</ui-form-group>
```

React:

```tsx
<UiFormGroup legend="Billing address" disabled>
  <UiTextInput label="Street" name="street" />
  <UiTextInput label="Postcode" name="postcode" />
</UiFormGroup>
```

React + Tailwind:

```tsx
<FormGroup legend="Billing address" disabled>
  <TextInput label="Street" name="street" />
  <TextInput label="Postcode" name="postcode" />
</FormGroup>
```

## Dates: what users see and what you get

The date picker shows dates the way the reader expects. Your code always gets the same ISO date:

| | Page in Thai (`lang="th"`) | Page in English |
|---|---|---|
| The user sees and types | 10/10/2569 (พ.ศ.) | 10/10/2026 |
| `value` and the submitted form | `2026-10-10` | `2026-10-10` |

- `value`, `min` and `max` are always `yyyy-mm-dd` in the Gregorian year (ค.ศ.).
- Thai pages show and take years in พ.ศ. Set `era="ce"` to use ค.ศ. instead.
- Users may type Thai digits (๐–๙). They become 0–9.
- In พ.ศ., a year typed before 2400 (say 2026) gets a message asking for the พ.ศ. year. Nothing is converted behind the user's back.
- `format` sets the order: `dd/mm/yyyy` (default), `mm/dd/yyyy` or `yyyy-mm-dd`. The format shows as helper text until you set your own.
- The language comes from `lang` on the element or the closest ancestor. Set `locale` to override it for the date picker alone.


HTML:

```html
<ui-date-picker label="Contract start" name="start" value="2026-10-10" min="2026-01-01" required></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Contract start" name="start" value="2026-10-10" min="2026-01-01" required />
```

React + Tailwind:

```tsx
<DatePicker label="Contract start" name="start" defaultValue="2026-10-10" min="2026-01-01" required />
```

A range picker submits two entries, `name` and `end-name`:


HTML:

```html
<ui-date-picker range label="Start" end-label="End" name="from" end-name="to"></ui-date-picker>
```

React:

```tsx
<UiDatePicker range label="Start" endLabel="End" name="from" endName="to" />
```

React + Tailwind:

```tsx
<DatePicker range label="Start" endLabel="End" name="from" endName="to" />
```

To refuse single days (weekends, holidays), set `isDateDisabled`: a function that returns `true`, or a string to use as the message. On the web component it's a property, so set it in JavaScript; in React and React + Tailwind it's a prop:


HTML:

```js
const picker = document.querySelector('ui-date-picker[name="start"]');
picker.isDateDisabled = (date) => (date.getDay() === 0 ? 'No deliveries on Sundays' : false);
```

React:

```tsx
<UiDatePicker label="Contract start" name="start" isDateDisabled={(date) => (date.getDay() === 0 ? 'No deliveries on Sundays' : false)} />
```

React + Tailwind:

```tsx
<DatePicker label="Contract start" name="start" isDateDisabled={(date) => (date.getDay() === 0 ? 'No deliveries on Sundays' : false)} />
```

## Count characters and words

`max-count` adds a counter to `ui-text-input` and `ui-text-area`. It's a soft limit: users can paste and then trim. Going over turns the counter red, shows an error and blocks submit. Screen readers hear when the limit is near.


HTML:

```html
<ui-text-area label="Notes" name="notes" max-count="200"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Notes" name="notes" maxCount={200} />
```

React + Tailwind:

```tsx
<TextArea label="Notes" name="notes" maxCount={200} />
```

On `ui-text-area`, `counter-mode="word"` counts words instead. Thai has no spaces between words, so the count uses the browser's word segmenter for the field's language. "สวัสดีครับ ผมชื่อสมชาย" counts as 5 words.


HTML:

```html
<ui-text-area label="Summary" name="summary" max-count="50" counter-mode="word"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Summary" name="summary" maxCount={50} counterMode="word" />
```

React + Tailwind:

```tsx
<TextArea label="Summary" name="summary" maxCount={50} counterMode="word" />
```

Change the messages with `too-long-text` (`{max}` becomes the limit) and `near-limit-text`. For a hard limit that stops typing, use `maxlength` instead.

## Use a fluid form

Inside `<ui-fluid-form>`, fields render as Carbon fluid fields: the label sits inside a 64px box and errors show inside the box. Fluid fields have no helper line. `ui-fluid-form` is not a form, so wrap it in your own `<form>`:


HTML:

```html
<form method="dialog">
  <ui-fluid-form>
    <ui-text-input label="First name" name="first" required></ui-text-input>
    <ui-text-input label="Last name" name="last" required></ui-text-input>
    <ui-date-picker label="Date of birth" name="birth"></ui-date-picker>
  </ui-fluid-form>
</form>
```

React:

```tsx
<form method="dialog">
  <UiFluidForm>
    <UiTextInput label="First name" name="first" required />
    <UiTextInput label="Last name" name="last" required />
    <UiDatePicker label="Date of birth" name="birth" />
  </UiFluidForm>
</form>
```

React + Tailwind:

```tsx
import { FluidForm } from '@/components/ui/react-tw/field';

<form>
  <FluidForm>
    <TextInput label="First name" name="first" />
    <TextInput label="Last name" name="last" />
    <DatePicker label="Date of birth" name="birth" />
  </FluidForm>
</form>
```

To make one field fluid on its own, give it the `fluid` attribute (the `fluid` prop in React and React + Tailwind).
