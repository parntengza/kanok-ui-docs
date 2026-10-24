# Time picker

A time picker takes a time as short `hh:mm` text, with optional selects beside it for AM / PM and the time zone.


HTML:

```html
<ui-time-picker label="Start time" name="time">
  <ui-time-picker-select label="AM or PM" name="period">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
  <ui-time-picker-select label="Time zone" name="zone">
    <option value="ict">Bangkok (ICT)</option>
    <option value="utc">UTC</option>
  </ui-time-picker-select>
</ui-time-picker>
```

React:

```tsx
<UiTimePicker label="Start time" name="time">
  <UiTimePickerSelect label="AM or PM" name="period">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
  <UiTimePickerSelect label="Time zone" name="zone">
    <option value="ict">Bangkok (ICT)</option>
    <option value="utc">UTC</option>
  </UiTimePickerSelect>
</UiTimePicker>
```

React + Tailwind:

```tsx
<TimePicker label="Start time" name="time">
  <TimePickerSelect label="AM or PM" name="period">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
  <TimePickerSelect label="Time zone" name="zone">
    <option value="ict">Bangkok (ICT)</option>
    <option value="utc">UTC</option>
  </TimePickerSelect>
</TimePicker>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/time-picker
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-time-picker
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/time-picker.json
#    to its target:
#    components/ui/primitives/time-picker/time-picker-select.ts
#    components/ui/primitives/time-picker/time-picker-shared.ts
#    components/ui/primitives/time-picker/time-picker-skeleton.ts
#    components/ui/primitives/time-picker/time-picker.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-date, shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-time-picker.json
#    to its target:
#    components/ui/react-tw/time-picker.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-field, tw-i18n, tw-skeleton, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/time-picker';</script>

<ui-time-picker label="Start time" name="time"></ui-time-picker>
```

React:

```tsx
import { UiTimePicker, UiTimePickerSelect } from '@purpurabog/ui/react';

<UiTimePicker label="Start time" name="time" />
```

React + Tailwind:

```tsx
import { TimePicker, TimePickerSelect } from '@/components/ui/react-tw/time-picker';

<TimePicker label="Start time" name="time" />
```

## 12-hour or 24-hour

By default the box takes 12-hour time, `h:mm` or `hh:mm` (`9:30`, `09:30`, `12:45`), and at most 5 characters. Carbon's own pattern rejects a leading zero; this one accepts it, so typing what the `hh:mm` placeholder shows works.

For 24-hour time, set your own `pattern` and leave out the AM / PM select:


HTML:

```html
<ui-time-picker label="Departure" name="departure" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"></ui-time-picker>
```

React:

```tsx
<UiTimePicker label="Departure" name="departure" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" />
```

React + Tailwind:

```tsx
<TimePicker label="Departure" name="departure" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" />
```

`maxlength` (`maxLength` in React) changes the length limit; `placeholder` the hint.

## Start with a value

To edit a time that is already saved, set `value` on the picker and on each select. A select without `value` starts on its `<option selected>`, else its first option, as a native select does.


HTML:

```html
<ui-time-picker label="Board meeting" value="2:30">
  <ui-time-picker-select label="AM or PM" value="PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
  <ui-time-picker-select label="Time zone">
    <option value="ict" selected>Bangkok (ICT)</option>
    <option value="sgt">Singapore (SGT)</option>
    <option value="utc">UTC</option>
  </ui-time-picker-select>
</ui-time-picker>
```

React:

```tsx
<UiTimePicker label="Board meeting" value="2:30">
  <UiTimePickerSelect label="AM or PM" value="PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
  <UiTimePickerSelect label="Time zone" value="ict">
    <option value="ict">Bangkok (ICT)</option>
    <option value="sgt">Singapore (SGT)</option>
    <option value="utc">UTC</option>
  </UiTimePickerSelect>
</UiTimePicker>
```

React + Tailwind:

```tsx
<TimePicker label="Board meeting" defaultValue="2:30">
  <TimePickerSelect label="AM or PM" defaultValue="PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
  <TimePickerSelect label="Time zone" defaultValue="ict">
    <option value="ict">Bangkok (ICT)</option>
    <option value="sgt">Singapore (SGT)</option>
    <option value="utc">UTC</option>
  </TimePickerSelect>
</TimePicker>
```

## Sizes

`size`: `sm` 32px, `md` 40px (the default, as in Carbon), `lg` 48px. The selects take the picker's size. The prop has the same name in React and React + Tailwind.


HTML:

```html
<ui-time-picker size="sm" label="Small (sm)" value="9:30">
  <ui-time-picker-select label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
</ui-time-picker>
<ui-time-picker size="lg" label="Large (lg)" value="9:30">
  <ui-time-picker-select label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
</ui-time-picker>
```

React:

```tsx
<UiTimePicker size="sm" label="Small (sm)" value="9:30">
  <UiTimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
</UiTimePicker>
<UiTimePicker size="lg" label="Large (lg)" value="9:30">
  <UiTimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
</UiTimePicker>
```

React + Tailwind:

```tsx
<TimePicker size="sm" label="Small (sm)" defaultValue="9:30">
  <TimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
</TimePicker>
<TimePicker size="lg" label="Large (lg)" defaultValue="9:30">
  <TimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
</TimePicker>
```

## Fluid

`fluid`, or a fluid form around it (`<ui-fluid-form>`, `FluidForm` in React + Tailwind), gives Carbon's fluid time picker: the box and each select as equal 64px columns with their labels inside. The prop has the same name in React and React + Tailwind.


HTML:

```html
<ui-time-picker fluid label="Delivery window starts" value="10:00">
  <ui-time-picker-select label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
  <ui-time-picker-select label="Time zone">
    <option value="ict">Bangkok (ICT)</option>
    <option value="utc">UTC</option>
  </ui-time-picker-select>
</ui-time-picker>
```

React:

```tsx
<UiTimePicker fluid label="Delivery window starts" value="10:00">
  <UiTimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
  <UiTimePickerSelect label="Time zone">
    <option value="ict">Bangkok (ICT)</option>
    <option value="utc">UTC</option>
  </UiTimePickerSelect>
</UiTimePicker>
```

React + Tailwind:

```tsx
<TimePicker fluid label="Delivery window starts" defaultValue="10:00">
  <TimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
  <TimePickerSelect label="Time zone">
    <option value="ict">Bangkok (ICT)</option>
    <option value="utc">UTC</option>
  </TimePickerSelect>
</TimePicker>
```

## Errors and warnings

The web component checks the text against `pattern` after the user leaves the box or tries to submit, and shows the error under it. `invalid-text` replaces the browser's own message ("Please match the requested format"). Set `invalid` for an error from your own validation, or `warn` with `warn-text` for a warning that doesn't block submit:


HTML:

```html
<ui-time-picker label="Pick-up" value="13:30" invalid invalid-text="The shop closes at 12:00."></ui-time-picker>
<ui-time-picker label="Site visit" value="7:00" warn warn-text="Before office hours. Someone must open the gate.">
  <ui-time-picker-select label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
</ui-time-picker>
```

React:

```tsx
<UiTimePicker label="Pick-up" value="13:30" invalid invalidText="The shop closes at 12:00." />
<UiTimePicker label="Site visit" value="7:00" warn warnText="Before office hours. Someone must open the gate.">
  <UiTimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
</UiTimePicker>
```

React + Tailwind:

```tsx
<TimePicker label="Pick-up" defaultValue="13:30" invalid invalidText="The shop closes at 12:00." />
<TimePicker label="Site visit" defaultValue="7:00" warn warnText="Before office hours. Someone must open the gate.">
  <TimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
</TimePicker>
```

React + Tailwind follows Carbon React: `pattern` still takes part in the form's validation, but no message shows by itself. Set `invalid` and `invalidText` when your check fails. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Read-only and disabled

`readonly` keeps every value and submits it: the box can't be edited, and a select still takes focus but doesn't open or change. `disabled` disables the box and every select inside.


HTML:

```html
<ui-time-picker label="Start time" value="9:30" readonly>
  <ui-time-picker-select label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
</ui-time-picker>
<ui-time-picker label="Start time" value="9:30" disabled>
  <ui-time-picker-select label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </ui-time-picker-select>
</ui-time-picker>
```

React:

```tsx
<UiTimePicker label="Start time" value="9:30" readonly>
  <UiTimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
</UiTimePicker>
<UiTimePicker label="Start time" value="9:30" disabled>
  <UiTimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </UiTimePickerSelect>
</UiTimePicker>
```

React + Tailwind:

```tsx
<TimePicker label="Start time" defaultValue="9:30" readOnly>
  <TimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
</TimePicker>
<TimePicker label="Start time" defaultValue="9:30" disabled>
  <TimePickerSelect label="AM or PM">
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </TimePickerSelect>
</TimePicker>
```

The web component and its React wrapper spell it `readonly`; React + Tailwind uses `readOnly`.

## What the form gets

Each part submits on its own: the time box under its `name` and each select under its own `name`. The time is the text as typed (`9:30` or `09:30`), and the select values are your `<option>` values. Nothing is converted: the time zone select is a plain choice, with no time zone arithmetic behind it. `required` blocks the submit while the box is empty.


HTML:

```html
<form id="time-picker-form" method="dialog" style="display: grid; gap: 16px">
  <ui-time-picker label="Signing deadline" name="time" required>
    <ui-time-picker-select label="AM or PM" name="period">
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </ui-time-picker-select>
    <ui-time-picker-select label="Time zone" name="zone">
      <option value="ict">Bangkok (ICT)</option>
      <option value="utc">UTC</option>
    </ui-time-picker-select>
  </ui-time-picker>
  <div><ui-button type="submit">Save</ui-button></div>
</form>
<p>Submitted: <output id="time-picker-form-out">nothing yet</output></p>

<script type="module">
  const form = document.getElementById('time-picker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(([key, value]) => `${key}=${value}`);
    document.getElementById('time-picker-form-out').textContent = entries.join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
  <UiTimePicker label="Signing deadline" name="time" required>
    <UiTimePickerSelect label="AM or PM" name="period">
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </UiTimePickerSelect>
    <UiTimePickerSelect label="Time zone" name="zone">
      <option value="ict">Bangkok (ICT)</option>
      <option value="utc">UTC</option>
    </UiTimePickerSelect>
  </UiTimePicker>
  <UiButton type="submit">Save</UiButton>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
  <TimePicker label="Signing deadline" name="time" required>
    <TimePickerSelect label="AM or PM" name="period">
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </TimePickerSelect>
    <TimePickerSelect label="Time zone" name="zone">
      <option value="ict">Bangkok (ICT)</option>
      <option value="utc">UTC</option>
    </TimePickerSelect>
  </TimePicker>
  <Button type="submit">Save</Button>
</form>
```

`save` stands for your own code.

## Events

The web component fires `input` while typing and `change` on commit; each select fires `change`. In React the wrapper props are `onInput` / `onChange`; the Tailwind `TimePicker` passes `onChange` to its `<input>`, as React does.


HTML:

```html
<ui-time-picker id="time-picker-events" label="Reminder at"></ui-time-picker>
<p>input: <output id="time-picker-events-input">–</output>, change: <output id="time-picker-events-change">–</output></p>

<script type="module">
  const reminder = document.getElementById('time-picker-events');
  reminder.addEventListener('input', () => {
    document.getElementById('time-picker-events-input').textContent = reminder.value;
  });
  reminder.addEventListener('change', () => {
    document.getElementById('time-picker-events-change').textContent = reminder.value;
  });
</script>
```

React:

```tsx
import type { UiTimePicker as TimePickerElement } from '@purpurabog/ui';

<UiTimePicker label="Reminder at"
  onInput={(e) => setTyped((e.target as TimePickerElement).value)}
  onChange={(e) => setCommitted((e.target as TimePickerElement).value)} />
```

React + Tailwind:

```tsx
// React's onChange runs on every keystroke; onBlur is the commit
<TimePicker label="Reminder at"
  onChange={(e) => setTyped(e.target.value)}
  onBlur={(e) => setCommitted(e.target.value)} />
```

## Check a time against another

Your own rules, such as a closing time after the opening time, go through `invalid` and `invalid-text`: check on `change` and set them. Here both boxes take 24-hour time.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start">
  <ui-time-picker id="time-picker-opens" label="Branch opens" value="08:30" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"></ui-time-picker>
  <ui-time-picker id="time-picker-closes" label="Branch closes" value="17:30" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"></ui-time-picker>
</div>

<script type="module">
  const opens = document.getElementById('time-picker-opens');
  const closes = document.getElementById('time-picker-closes');
  const minutes = (text) => {
    const [h, m] = text.split(':').map(Number);
    return h * 60 + m;
  };
  const check = () => {
    const wrong = minutes(closes.value) <= minutes(opens.value);
    closes.invalid = wrong;
    closes.invalidText = wrong ? 'Must be after the opening time.' : '';
  };
  opens.addEventListener('change', check);
  closes.addEventListener('change', check);
</script>
```

React:

```tsx
const H24 = '([01]?[0-9]|2[0-3]):[0-5][0-9]';
const minutes = (text: string) => {
  const [h, m] = text.split(':').map(Number);
  return h * 60 + m;
};
const wrong = minutes(closes) <= minutes(opens);

<UiTimePicker label="Branch opens" value={opens} pattern={H24}
  onChange={(e) => setOpens((e.target as TimePickerElement).value)} />
<UiTimePicker label="Branch closes" value={closes} pattern={H24}
  onChange={(e) => setCloses((e.target as TimePickerElement).value)}
  invalid={wrong} invalidText={wrong ? 'Must be after the opening time.' : ''} />
```

React + Tailwind:

```tsx
// H24 and minutes as in the React tab
const wrong = minutes(closes) <= minutes(opens);

<TimePicker label="Branch opens" value={opens} pattern={H24} onChange={(e) => setOpens(e.target.value)} />
<TimePicker label="Branch closes" value={closes} pattern={H24} onChange={(e) => setCloses(e.target.value)}
  invalid={wrong} invalidText={wrong ? 'Must be after the opening time.' : ''} />
```

## Skeleton

While the page loads its data, show `<ui-time-picker-skeleton>` in the picker's place. Carbon has only the fluid time picker skeleton, so this is that one: the box, the AM / PM select and the time zone select. `is-only-two` (`isOnlyTwo` in React + Tailwind) draws two equal parts instead. It has its own import, `@purpurabog/ui/time-picker-skeleton`, and is hidden from screen readers.


HTML:

```html
<ui-time-picker-skeleton></ui-time-picker-skeleton>
<ui-time-picker-skeleton is-only-two></ui-time-picker-skeleton>
```

React:

```tsx
import { UiTimePickerSkeleton } from '@purpurabog/ui/react';

<UiTimePickerSkeleton />
<UiTimePickerSkeleton isOnlyTwo />
```

React + Tailwind:

```tsx
import { TimePickerSkeleton } from '@/components/ui/react-tw/time-picker';

<TimePickerSkeleton />
<TimePickerSkeleton isOnlyTwo />
```

## Keyboard

| Key | Does |
|---|---|
| Enter (in the time box) | Submits the form it's in, as a native input does |
| ↑ / ↓, Space (on a select) | The browser's own select keys; ignored while read-only |

## Accessibility

- The box is a native text input with a `<label>`; the selects are native `<select>` elements.
- Name each select with `label`. Without one, the web component and React + Tailwind fall back to "Open list of options", as Carbon does.
- An error sets `aria-invalid` on the box and is linked to it with `aria-describedby`.
- A read-only select has `aria-readonly`.

Unstyled React parts with the same behaviour: [Headless Time picker](https://parntengza.github.io/kanok-ui-docs/en/headless-time-picker/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-time-picker>` · React `UiTimePicker`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `max-length` |  |  |  | Deprecated: use `maxlength` |
| `label` | `label` | `string` | `''` |  |
| `hide-label` | `hideLabel` | `boolean` | `false` |  |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` |  |
| `placeholder` | `placeholder` | `string` | `'hh:mm'` |  |
| `pattern` | `pattern` |  | `` String.raw`(1[012]\|0?[1-9]):[0-5][0-9](\s)?` `` | 12-hour time with an optional trailing space. Carbon's default rejects a leading zero, so "09:30" typed as the `hh:mm` placeholder shows would fail; this one accepts "9:30" and "09:30". |
| `maxlength` | `maxLength` | `number` | `5` | Like `<input maxlength>` (Carbon `maxLength`); the `max-length` attribute of 0.8 and earlier is still read. |
| `size` | `size` | `TimePickerSize` | `'md'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `readonly` | `readonly` | `boolean` | `false` |  |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidTimePicker`: equal 64px columns with labels inside, an error / warning inside the box. `<ui-fluid-form>` sets it for every field inside. |
| `required` | `required` | `boolean` | `false` |  |
| `invalid` | `invalid` | `boolean` | `false` |  |
| `invalid-text` | `invalidText` | `string` | `''` |  |
| `warn` | `warn` | `boolean` | `false` |  |
| `warn-text` | `warnText` | `string` | `''` |  |

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
| `change` | `onChange` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-time-picker-select>` elements |
| `label` | Rich label |
| `invalid-text` | Rich error text |
| `warn-text` | Rich warning text |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label |
| `base` | Row with the input and the selects |
| `input` | The text input |
| `error-text` | Error text |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |
| `warning-text` | Warning text |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |

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

### `<ui-time-picker-select>` · React `UiTimePickerSelect`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Accessible name of the select (Carbon default "open list of options"). |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` |  |
| `size` | `size` | `TimePickerSize` | `'md'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `readonly` | `readonly` | `boolean` | `false` |  |

#### Properties

| Property | Type | Description |
|---|---|---|
| `pickerDisabled` | `boolean` | Set by the surrounding `<ui-time-picker>` when it is disabled. |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | `onChange` | When the user picks an option |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<option>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `input` | The native select |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-readonly-background` |  | The box's fill when read-only (default transparent; Kanok: a faint ink tint, so read-only reads as set and never weaker than disabled) |


