# Text area

A text area takes text that runs over several lines: notes, a description, a reason. It has the same label, helper text and error line as the [text input](https://parntengza.github.io/kanok-ui-docs/en/text-input/), plus a character or word counter and a field that can grow with its text.


HTML:

```html
<ui-text-area label="Notes" name="notes" helper-text="Anything the legal team should know"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Notes" name="notes" helperText="Anything the legal team should know" />
```

React + Tailwind:

```tsx
<TextArea label="Notes" name="notes" helperText="Anything the legal team should know" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/text-area
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-text-area
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/text-area.json
#    to its target:
#    components/ui/primitives/text-area/text-area-skeleton.ts
#    components/ui/primitives/text-area/text-area.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-auto-grow, core-field, shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install class-variance-authority@0.7.1 @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-text-area.json
#    to its target:
#    components/ui/react-tw/text-area.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-field, tw-field, tw-skeleton, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/text-area';</script>

<ui-text-area label="Notes" name="notes"></ui-text-area>
```

React:

```tsx
import { UiTextArea } from '@purpurabog/ui/react';

<UiTextArea label="Notes" name="notes" onInput={(e) => setNotes((e.target as HTMLTextAreaElement).value)} />
```

React + Tailwind:

```tsx
import { TextArea } from '@/components/ui/react-tw/text-area';

<TextArea label="Notes" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
```

- The element fires native `input` on every keystroke and `change` when the user leaves the field, so the React wrapper has `onInput` and `onChange`. The React + Tailwind `onChange` is React's own (every keystroke).

## Height

`rows` sets the starting height in lines, 4 by default as in Carbon. The user can drag the corner to make it taller (`resize: vertical`); a disabled field can't be resized.


HTML:

```html
<ui-text-area label="Reason for the change" name="reason" rows="2"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Reason for the change" name="reason" rows={2} />
```

React + Tailwind:

```tsx
<TextArea label="Reason for the change" name="reason" rows={2} />
```

## Grow with the text

`auto-grow` starts at `rows` and grows a line at a time as the user types, with no resize handle. `max-rows` caps it; past that, the field scrolls. Carbon has no auto-grow.


HTML:

```html
<ui-text-area label="Description" name="description" rows="2" auto-grow max-rows="6"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Description" name="description" rows={2} autoGrow maxRows={6} />
```

React + Tailwind:

```tsx
<TextArea label="Description" name="description" rows={2} autoGrow maxRows={6} />
```

## Count characters or words

`max-count` shows a counter above the field. As on the text input, it's a soft limit: going over turns the counter red, shows an error at once and blocks the form, but nothing is cut. Screen readers hear when the limit is near.

`counter-mode="word"` counts words instead (Carbon's `counterMode`). Thai has no spaces between words, so the field asks the browser's word segmenter for its language (`lang` on the field or the page): "สวัสดีครับ ผมชื่อสมชาย" is 5 words, where Carbon's count splits Thai at every vowel and tone mark. Numbers don't count as words.


HTML:

```html
<ui-text-area label="Notes" name="notes" max-count="200"></ui-text-area>
<ui-text-area label="Summary" name="summary" max-count="50" counter-mode="word"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Notes" name="notes" maxCount={200} />
<UiTextArea label="Summary" name="summary" maxCount={50} counterMode="word" />
```

React + Tailwind:

```tsx
<TextArea label="Notes" name="notes" maxCount={200} />
<TextArea label="Summary" name="summary" maxCount={50} counterMode="word" />
```

Change the messages with `too-long-text` (`{max}` becomes the limit) and `near-limit-text`. For a hard limit that stops typing, use `maxlength`. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/#count-characters-and-words).

## Your own counter messages

`too-long-text` is the error once the text is over the limit, and `near-limit-text` is what screen readers hear once when 10% or less is left. Write them for the field, so people know what to cut. This text is already too long, so the error shows at once.


HTML:

```html
<ui-text-area label="Reason for rejection" name="rejectReason" rows="2" max-count="60" too-long-text="Keep the reason under {max} characters for the approval email" near-limit-text="Almost at the length the approval email allows" value="The rent is higher than the budget that finance approved for this year."></ui-text-area>
```

React:

```tsx
<UiTextArea
  label="Reason for rejection"
  name="rejectReason"
  rows={2}
  maxCount={60}
  tooLongText="Keep the reason under {max} characters for the approval email"
  nearLimitText="Almost at the length the approval email allows"
/>
```

React + Tailwind:

```tsx
<TextArea
  label="Reason for rejection"
  name="rejectReason"
  rows={2}
  maxCount={60}
  tooLongText="Keep the reason under {max} characters for the approval email"
  nearLimitText="Almost at the length the approval email allows"
/>
```

## Helper text, warnings and errors

Same as the text input: one line under the field, an error beats a warning, and a warning beats the helper text. The error and warning icons sit in the top-right corner of the field.


HTML:

```html
<ui-text-area label="Delivery address" name="address" value="99/1 Rama IV Rd" warn warn-text="Add the district and postcode"></ui-text-area>
<ui-text-area label="Reason" name="reason" invalid invalid-text="Tell us why the contract ends early"></ui-text-area>
```

React:

```tsx
<UiTextArea label="Delivery address" name="address" value="99/1 Rama IV Rd" warn warnText="Add the district and postcode" />
<UiTextArea label="Reason" name="reason" invalid invalidText="Tell us why the contract ends early" />
```

React + Tailwind:

```tsx
<TextArea label="Delivery address" name="address" defaultValue="99/1 Rama IV Rd" warn warnText="Add the district and postcode" />
<TextArea label="Reason" name="reason" invalid invalidText="Tell us why the contract ends early" />
```

`required`, `minlength` and `maxlength` work on the element as on `<textarea>`. In React + Tailwind, validation is your app's: pass `invalid` and `invalidText`. Everything else about errors: [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Label and helper text with markup

For a label or a message with markup, use the `label` and `helper-text` slots (`warn-text` and `invalid-text` work the same way). The React + Tailwind field takes the markup in `label` and `helperText`.


HTML:

```html
<ui-text-area name="scope" rows="3">
  <span slot="label">Scope of work <em>(part of the contract)</em></span>
  <span slot="helper-text">Put each service on <strong>its own line</strong></span>
</ui-text-area>
```

React:

```tsx
<UiTextArea name="scope" rows={3}>
  <span slot="label">Scope of work <em>(part of the contract)</em></span>
  <span slot="helper-text">Put each service on <strong>its own line</strong></span>
</UiTextArea>
```

React + Tailwind:

```tsx
<TextArea
  name="scope"
  rows={3}
  label={<>Scope of work <em>(part of the contract)</em></>}
  helperText={<>Put each service on <strong>its own line</strong></>}
/>
```

## Read-only, disabled and fluid

- `readonly` shows and submits the text, but the user can't change it. `disabled` greys it out; it isn't submitted.
- `fluid`, or a fluid form around it, puts the label inside the box (Carbon's `FluidTextArea`, see [fluid forms](https://parntengza.github.io/kanok-ui-docs/en/forms/#use-a-fluid-form)).


HTML:

```html
<ui-text-area label="Terms" value="Rent is paid on the first working day of each month." readonly></ui-text-area>
<ui-text-area label="Notes from legal" value="Reviewed on 2 October." rows="2" disabled></ui-text-area>
<ui-text-area label="Notes" name="notes" fluid></ui-text-area>
```

React:

```tsx
<UiTextArea label="Terms" value="Rent is paid on the first working day of each month." readonly />
<UiTextArea label="Notes from legal" value="Reviewed on 2 October." rows={2} disabled />
<UiTextArea label="Notes" name="notes" fluid />
```

React + Tailwind:

```tsx
<TextArea label="Terms" defaultValue="Rent is paid on the first working day of each month." readOnly />
<TextArea label="Notes from legal" defaultValue="Reviewed on 2 October." rows={2} disabled />
<TextArea label="Notes" name="notes" fluid />
```

## Check it in a form

In a `<form>`, `required` and `minlength` block the submit until the text is long enough, and the field shows its error. Try sending this form with a short reason.


HTML:

```html
<form id="text-area-form" method="dialog" style="display: grid; gap: 16px">
  <ui-text-area label="Reason for the change" name="reason" rows="3" required minlength="20" helper-text="At least 20 characters"></ui-text-area>
  <div><ui-button type="submit" size="md">Send for approval</ui-button></div>
</form>
<p>Sent: <output id="text-area-form-out"></output></p>
<script type="module">
  const form = document.getElementById('text-area-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('text-area-form-out').textContent = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); sendForApproval(new FormData(e.currentTarget)); }}>
  <UiTextArea label="Reason for the change" name="reason" rows={3} required minlength={20} helperText="At least 20 characters" />
  <UiButton type="submit" size="md">Send for approval</UiButton>
</form>
```

React + Tailwind:

```tsx
// your validation sets `reasonError`, as in Carbon React
<form onSubmit={(e) => { e.preventDefault(); sendForApproval(new FormData(e.currentTarget)); }} noValidate>
  <TextArea label="Reason for the change" name="reason" rows={3} helperText="At least 20 characters" invalid={!!reasonError} invalidText={reasonError} />
  <Button type="submit" size="md">Send for approval</Button>
</form>
```

## Save a draft when the user leaves

`change` fires once the user leaves the field after changing it, so it is the moment to save a draft without a request on every keystroke.


HTML:

```html
<ui-text-area id="text-area-draft" label="Meeting notes" name="minutes" rows="3"></ui-text-area>
<p>Draft: <output id="text-area-draft-out">not saved yet</output></p>
<script type="module">
  const minutes = document.getElementById('text-area-draft');
  minutes.addEventListener('change', () => {
    const time = new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('text-area-draft-out').textContent = `saved at ${time}, ${minutes.value.length} characters`;
  });
</script>
```

React:

```tsx
<UiTextArea label="Meeting notes" name="minutes" rows={3} onChange={(e) => saveDraft((e.target as HTMLTextAreaElement).value)} />
```

React + Tailwind:

```tsx
// onChange runs on every keystroke here: save when the field loses focus
<TextArea label="Meeting notes" name="minutes" rows={3} onBlur={(e) => saveDraft(e.target.value)} />
```

## Skeleton

While the data of a form loads, `<ui-text-area-skeleton>` keeps the field's place: a label bar and a 100px field bar, or a fluid box with `fluid`. Screen readers skip it, so say "loading" on the form (for example `aria-busy="true"`).


HTML:

```html
<ui-text-area-skeleton></ui-text-area-skeleton>
<ui-text-area-skeleton fluid></ui-text-area-skeleton>
```

React:

```tsx
import { UiTextAreaSkeleton } from '@purpurabog/ui/react';

<UiTextAreaSkeleton />
<UiTextAreaSkeleton fluid />
```

React + Tailwind:

```tsx
import { TextAreaSkeleton } from '@/components/ui/react-tw/text-area';

<TextAreaSkeleton />
<TextAreaSkeleton fluid />
```

## Accessibility

- The label is a real `<label>` for the inner `<textarea>`, and the message line is its `aria-describedby`. `aria-label` on the element does not reach the textarea; use `label` (with `hide-label` if it must not show).
- Enter types a new line, as in any text area; it never submits the form.
- The counter is not read on every keystroke. Screen readers hear once when the limit is near and when it's passed.

Unstyled React parts with the same behaviour: [Headless Text area](https://parntengza.github.io/kanok-ui-docs/en/headless-text-area/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-text-area>` · React `UiTextArea`

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
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `placeholder` | `placeholder` | `string` | `''` |  |
| `rows` | `rows` | `number` | `4` | Initial number of text rows (Carbon default 4); the user can still resize. |
| `minlength` | `minlength` | `number \| undefined` |  |  |
| `maxlength` | `maxlength` | `number \| undefined` |  |  |
| `autocomplete` | `autocomplete` | `string` | `''` | Passed to the textarea (`off`, or an autofill token). |
| `inputmode` | `inputmode` | `string` | `''` | Passed to the text box: the virtual keyboard to show (`numeric`, `decimal`, `email`, `tel`, `url`, `search`…). |
| `enterkeyhint` | `enterkeyhint` | `string` | `''` | Passed to the text box: the label of the virtual keyboard's Enter key (`search`, `send`, `next`, `done`…). |
| `max-count` | `maxCount` | `number \| undefined` |  | Soft limit with a visible counter (unlike maxlength, extra text isn't blocked). |
| `counter-mode` | `counterMode` | `CounterMode` | `'character'` | What `max-count` counts: `character` (default) or `word` (Carbon `counterMode`). |
| `auto-grow` | `autoGrow` | `boolean` | `false` | Grows with the text from `rows` (no Carbon counterpart); `max-rows` caps it, then it scrolls. |
| `max-rows` | `maxRows` | `number \| undefined` |  | The most lines `auto-grow` shows before scrolling (default: no cap). |
| `too-long-text` | `tooLongText` | `string` | `''` | Error when over `max-count`; `{max}` is replaced with the limit (default: the translation's, for characters or words). |
| `near-limit-text` | `nearLimitText` | `string` | `''` | Announced once when what is left of the limit drops to 10% or less. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidTextArea`: the label inside a 64px box, an error / warning inside it. `<ui-fluid-form>` sets it for every field inside. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |

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
| `change` | `onChange` | Re-dispatched from the native textarea (native change is not composed) |
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
| `base` | The field box around the textarea |
| `label` | The label |
| `input` | The native textarea |
| `counter` | The character (or word) counter |
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


