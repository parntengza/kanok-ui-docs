# Date picker

A date picker takes a date that users type or pick from a calendar. On a Thai page it shows the Buddhist era (พ.ศ.); your code always gets an ISO date in the Gregorian year.


HTML:

```html
<ui-date-picker label="Contract start" name="start" clearable></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Contract start" name="start" clearable />
```

React + Tailwind:

```tsx
<DatePicker label="Contract start" name="start" clearable />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/date-picker @kanok-ui/calendar
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-date-picker
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/date-picker.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/calendar.json
#    to its target:
#    components/ui/primitives/date-picker/calendar.styles.ts
#    components/ui/primitives/date-picker/calendar.ts
#    components/ui/primitives/date-picker/date-field.styles.ts
#    components/ui/primitives/date-picker/date-field.ts
#    components/ui/primitives/date-picker/date-picker-skeleton.ts
#    components/ui/primitives/date-picker/date-picker.styles.ts
#    components/ui/primitives/date-picker/date-picker.ts
#    components/ui/primitives/calendar/calendar.styles.ts
#    components/ui/primitives/calendar/calendar.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-date, core-overlay, core-popup, core-sheet, shared-element, shared-field, shared-form-control, shared-localize, shared-position, shared-quiet-focus, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-date-picker.json
#    to its target:
#    components/ui/react-tw/date-picker.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-date, core-field, core-i18n, tw-calendar, tw-field, tw-i18n, tw-skeleton, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/date-picker';</script>

<ui-date-picker label="Contract start" name="start"></ui-date-picker>
```

React:

```tsx
import { UiDatePicker } from '@purpurabog/ui/react';
import type { UiDatePicker as DatePickerElement } from '@purpurabog/ui';

<UiDatePicker label="Contract start" name="start" value={start}
  onChange={(e) => setStart((e.target as DatePickerElement).value)} />
```

React + Tailwind:

```tsx
import { DatePicker } from '@/components/ui/react-tw/date-picker';

<DatePicker label="Contract start" name="start" value={start} onChange={setStart} />
```

`UiDatePicker` fires a native `change`, so its React prop is `onChange` (there is no `onUiChange`). The Tailwind `DatePicker` hands `onChange` the ISO string itself.

## What users see, what you get

Users see and type the date in the page's language and era. Your code reads the same ISO date in every language. The two pickers below share one value: change either one.


HTML:

```html
<ui-date-picker id="date-picker-seen-en" label="Signed on" value="2026-10-10"></ui-date-picker>
<ui-date-picker id="date-picker-seen-th" lang="th" label="วันที่ลงนาม" value="2026-10-10"></ui-date-picker>
<p>value: <output id="date-picker-seen-out">2026-10-10</output></p>

<script type="module">
  const en = document.getElementById('date-picker-seen-en');
  const th = document.getElementById('date-picker-seen-th');
  for (const [from, to] of [[en, th], [th, en]]) {
    from.addEventListener('change', () => {
      to.value = from.value;
      document.getElementById('date-picker-seen-out').textContent = from.value || '(empty)';
    });
  }
</script>
```

React:

```tsx
const [signed, setSigned] = useState('2026-10-10');
const onChange = (e: Event) => setSigned((e.target as DatePickerElement).value);

<UiDatePicker label="Signed on" value={signed} onChange={onChange} />
<UiDatePicker lang="th" label="วันที่ลงนาม" value={signed} onChange={onChange} />
<p>value: <output>{signed || '(empty)'}</output></p>
```

React + Tailwind:

```tsx
const [signed, setSigned] = useState('2026-10-10');

<DatePicker label="Signed on" value={signed} onChange={setSigned} />
<DatePicker locale="th" label="วันที่ลงนาม" value={signed} onChange={setSigned} />
<p>value: <output>{signed || '(empty)'}</output></p>
```


| | Page in Thai | Page in English |
|---|---|---|
| The user sees and types | 10/10/2569 | 10/10/2026 |
| `value`, `change`, the submitted form | `2026-10-10` | `2026-10-10` |

- `value`, `min` and `max` are always `yyyy-mm-dd` in the Gregorian year. A `value` that isn't a real date of that form becomes `''`, as with `<input type="date">`.
- The element fires `change` when a value is committed: on leaving the field, on Enter, on a pick from the calendar and on clear. Read `event.target.value` (and `endValue` in a range).
- An empty field still submits `name=`, as a native date input does. A disabled picker submits nothing.

## Type it or pick it

The calendar opens when the text box gets focus, by a click or by Tab, and focus stays in the box so users can keep typing. The calendar follows what they type.

- Text that already reads as a full date in the field's format, such as `10/10/2026`, becomes the value at once; `change` fires when it is committed (blur, Enter), not while typing.
- Anything else is read on blur or Enter. The numbers are pulled out of what was typed, so `s10/12/2026x` becomes 10/12/2026.
- Nothing is guessed. An incomplete date (`10/12`), an impossible one (`31/04/2026`) or text with no date in it stays in the field with a message saying what's wrong, and `value` becomes `''`.
- A full date outside `min` / `max`, or one `isDateDisabled` refuses, is kept and committed with its own message. The form won't submit until it's fixed.

Try it: type a date that doesn't exist, or one outside the year, then leave the field.


HTML:

```html
<ui-date-picker label="Contract end" helper-text="Type 31/04/2026, then leave the field"></ui-date-picker>
<ui-date-picker label="Invoice date" min="2026-01-01" max="2026-12-31" helper-text="Only dates in 2026. Type one in 2025, then leave the field"></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Contract end" helperText="Type 31/04/2026, then leave the field" />
<UiDatePicker label="Invoice date" min="2026-01-01" max="2026-12-31" helperText="Only dates in 2026. Type one in 2025, then leave the field" />
```

React + Tailwind:

```tsx
<DatePicker label="Contract end" helperText="Type 31/04/2026, then leave the field" />
<DatePicker label="Invoice date" min="2026-01-01" max="2026-12-31" helperText="Only dates in 2026. Type one in 2025, then leave the field" />
```

The messages come built in, in Thai and English. How and when errors show, and how to add your own, is in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).

## Buddhist era and Thai

The language comes from `lang` on the element or the closest ancestor, else `<html lang>`. A Thai language gives Thai labels and messages, Thai month names, and years in พ.ศ. (ค.ศ. + 543). `locale` overrides the language for this picker alone.


HTML:

```html
<ui-date-picker lang="th" label="วันที่เริ่มสัญญา" value="2026-10-10"></ui-date-picker>
<ui-date-picker lang="th" era="ce" label="วันที่เริ่มสัญญา (ค.ศ.)" value="2026-10-10"></ui-date-picker>
```

React:

```tsx
<UiDatePicker lang="th" label="วันที่เริ่มสัญญา" value="2026-10-10" />
<UiDatePicker lang="th" era="ce" label="วันที่เริ่มสัญญา (ค.ศ.)" value="2026-10-10" />
```

React + Tailwind:

```tsx
<DatePicker locale="th" label="วันที่เริ่มสัญญา" defaultValue="2026-10-10" />
<DatePicker locale="th" era="ce" label="วันที่เริ่มสัญญา (ค.ศ.)" defaultValue="2026-10-10" />
```

- `era` sets the year users see and type: `be` (พ.ศ., the default for Thai) or `ce` (ค.ศ., the default otherwise). Any language can use either.
- Typed years follow the same era. In พ.ศ., a year before 2400 (say 2026) gets a message asking for the พ.ศ. year; nothing is converted behind the user's back.
- Users may type Thai digits (๐–๙). They become 0–9 as they type.
- The placeholder and the default helper line show the format in the page's language: `วว/ดด/ปปปป` in Thai.
- React + Tailwind reads `<html lang>`, or its `locale` prop.

## Formats

`format` sets the order of day, month and year: `dd/mm/yyyy` (the default), `mm/dd/yyyy` or `yyyy-mm-dd`. Only what users see changes; `value` stays ISO.


HTML:

```html
<ui-date-picker label="Due date" format="yyyy-mm-dd" value="2026-10-10"></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Due date" format="yyyy-mm-dd" value="2026-10-10" />
```

React + Tailwind:

```tsx
<DatePicker label="Due date" format="yyyy-mm-dd" defaultValue="2026-10-10" />
```

The format shows as helper text until you set `helper-text` (`helperText` in React + Tailwind). Screen readers still hear it after that.

## Pick a range

`range` gives two fields sharing one calendar: `value` / `name` / `label` for the start, `end-value` / `end-name` / `end-label` for the end. With both names the form gets two entries. Without `end-name`, `ui-date-picker` submits one `name` entry, `start/end` (`2026-10-01/2026-10-05`), as Carbon's `cds-date-picker` does; the React + Tailwind `DatePicker` submits the end only under `endName`.


HTML:

```html
<ui-date-picker range label="Check-in" end-label="Check-out" name="from" end-name="to"
  value="2026-10-10" end-value="2026-10-14"></ui-date-picker>
```

React:

```tsx
<UiDatePicker range label="Check-in" endLabel="Check-out" name="from" endName="to"
  value="2026-10-10" endValue="2026-10-14" />
```

React + Tailwind:

```tsx
<DatePicker range label="Check-in" endLabel="Check-out" name="from" endName="to"
  value={from} onChange={setFrom} endValue={to} onEndChange={setTo} />
```

- A pick from the start field keeps the calendar open for the end. The days in between are highlighted with a continuous ribbon, with a preview while the end is chosen.
- Picking an end before the start swaps the two.
- A typed end before the start is kept and reported, not swapped.

### Two-month range view

Set `months="2"` to display two side-by-side months in the calendar, ideal for flight/hotel booking and long booking ranges:


HTML:

```html
<ui-date-picker range months="2" label="Depart" end-label="Return" name="depart" end-name="return"
  value="2026-10-15" end-value="2026-11-05"></ui-date-picker>
```

React:

```tsx
<UiDatePicker range months={2} label="Depart" endLabel="Return" name="depart" endName="return"
  value="2026-10-15" endValue="2026-11-05" />
```

React + Tailwind:

```tsx
<DatePicker range months={2} label="Depart" endLabel="Return" name="depart" endName="return"
  value={depart} onChange={setDepart} endValue={ret} onEndChange={setRet} />
```

## Limit the dates

`min` and `max` take ISO dates. Days outside them are greyed out, and the month buttons stop at them.

To refuse single days (weekends, holidays), set `isDateDisabled`: a function that returns `true`, or a string to show as the message. On the web component it's a property, so set it in JavaScript:


HTML:

```html
<ui-date-picker id="date-picker-delivery" label="Delivery date" min="2026-01-01" max="2026-12-31"></ui-date-picker>

<script type="module">
  document.getElementById('date-picker-delivery').isDateDisabled = (date) =>
    date.getDay() === 0 || date.getDay() === 6 ? 'We don’t deliver at the weekend.' : false;
</script>
```

React:

```tsx
const weekend = (date: Date) =>
  date.getDay() === 0 || date.getDay() === 6 ? 'We don’t deliver at the weekend.' : false;

<UiDatePicker label="Delivery date" min="2026-01-01" max="2026-12-31" isDateDisabled={weekend} />
```

React + Tailwind:

```tsx
const weekend = (date: Date) =>
  date.getDay() === 0 || date.getDay() === 6 ? 'We don’t deliver at the weekend.' : false;

<DatePicker label="Delivery date" min="2026-01-01" max="2026-12-31" isDateDisabled={weekend} />
```

## Clear button and Today

`clearable` adds a × inside the field while it has text. `show-today` adds a Today button under the calendar (Carbon has none; this one is opt-in). `first-day` sets the first day of the week, from `0` (Sunday, the default) to `6`.


HTML:

```html
<ui-date-picker label="Meeting date" clearable show-today first-day="1"></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Meeting date" clearable showToday firstDay={1} />
```

React + Tailwind:

```tsx
<DatePicker label="Meeting date" clearable showToday firstDay={1} />
```

## Sizes and fluid

`size`: `sm` 32px, `md` 40px (the default, as in Carbon), `lg` 48px, the same scale as the text input. `fluid`, or a fluid form around it (`<ui-fluid-form>`, `FluidForm` in React + Tailwind), gives Carbon's fluid field: a 64px box with the label inside. Both props have the same names in React and React + Tailwind.


HTML:

```html
<ui-date-picker size="sm" label="Posted on (sm)" value="2026-10-10"></ui-date-picker>
<ui-date-picker size="lg" label="Posted on (lg)" value="2026-10-10"></ui-date-picker>
<ui-date-picker fluid range label="Lease start" end-label="Lease end" value="2026-11-01" end-value="2027-10-31"></ui-date-picker>
```

React:

```tsx
<UiDatePicker size="sm" label="Posted on (sm)" value="2026-10-10" />
<UiDatePicker size="lg" label="Posted on (lg)" value="2026-10-10" />
<UiDatePicker fluid range label="Lease start" endLabel="Lease end" value="2026-11-01" endValue="2027-10-31" />
```

React + Tailwind:

```tsx
<DatePicker size="sm" label="Posted on (sm)" defaultValue="2026-10-10" />
<DatePicker size="lg" label="Posted on (lg)" defaultValue="2026-10-10" />
<DatePicker fluid range label="Lease start" endLabel="Lease end" defaultValue="2026-11-01" defaultEndValue="2027-10-31" />
```

## Helper text, errors and warnings

`helper-text` says what the date is for (the `helper-text` slot takes markup). `warn` with `warn-text` flags a date that is allowed but unusual; it doesn't block submit. `invalid` with `invalid-text` shows an error from your own check, such as one made on the server. In a range, the warning shows under the start field.


HTML:

```html
<ui-date-picker label="Effective date" helper-text="The day the new rate starts"></ui-date-picker>
<ui-date-picker label="Payment due" value="2026-10-03" warn warn-text="This is a Saturday. The bank pays on Monday."></ui-date-picker>
<ui-date-picker label="Contract end" value="2026-09-30" invalid invalid-text="The end must be after the start, 01/10/2026."></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Effective date" helperText="The day the new rate starts" />
<UiDatePicker label="Payment due" value="2026-10-03" warn warnText="This is a Saturday. The bank pays on Monday." />
<UiDatePicker label="Contract end" value="2026-09-30" invalid invalidText="The end must be after the start, 01/10/2026." />
```

React + Tailwind:

```tsx
<DatePicker label="Effective date" helperText="The day the new rate starts" />
<DatePicker label="Payment due" defaultValue="2026-10-03" warn warnText="This is a Saturday. The bank pays on Monday." />
<DatePicker label="Contract end" defaultValue="2026-09-30" invalid invalidText="The end must be after the start, 01/10/2026." />
```

## Read-only and disabled

`readonly` shows and submits the value but blocks typing and the calendar. `disabled` greys the field out; it isn't submitted or validated. A disabled `<fieldset>` around it does the same.


HTML:

```html
<ui-date-picker label="Signed on" value="2026-10-10" readonly></ui-date-picker>
<ui-date-picker label="Signed on" value="2026-10-10" disabled></ui-date-picker>
```

React:

```tsx
<UiDatePicker label="Signed on" value="2026-10-10" readonly />
<UiDatePicker label="Signed on" value="2026-10-10" disabled />
```

React + Tailwind:

```tsx
<DatePicker label="Signed on" defaultValue="2026-10-10" readOnly />
<DatePicker label="Signed on" defaultValue="2026-10-10" disabled />
```

The web component and its React wrapper spell it `readonly`; React + Tailwind uses `readOnly`.

## In a form

With `required`, the form won't submit until the date is filled in; in a range, both dates are required. The form gets ISO dates under `name` (and `end-name`). Submit the empty form below to see the messages.


HTML:

```html
<form id="date-picker-form" method="dialog" style="display: grid; gap: 16px">
  <ui-date-picker label="Request date" name="requested" value="2026-10-10" required></ui-date-picker>
  <ui-date-picker range label="Leave from" end-label="Leave until" name="from" end-name="until" required></ui-date-picker>
  <div><ui-button type="submit">Send request</ui-button></div>
</form>
<p>Submitted: <output id="date-picker-form-out">nothing yet</output></p>

<script type="module">
  const form = document.getElementById('date-picker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(([key, value]) => `${key}=${value}`);
    document.getElementById('date-picker-form-out').textContent = entries.join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); send(new FormData(e.currentTarget)); }}>
  <UiDatePicker label="Request date" name="requested" value="2026-10-10" required />
  <UiDatePicker range label="Leave from" endLabel="Leave until" name="from" endName="until" required />
  <UiButton type="submit">Send request</UiButton>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); send(new FormData(e.currentTarget)); }}>
  <DatePicker label="Request date" name="requested" defaultValue="2026-10-10" required />
  <DatePicker range label="Leave from" endLabel="Leave until" name="from" endName="until" required />
  <Button type="submit">Send request</Button>
</form>
```

`send` stands for your own code.

## Phones and tablets

On a phone (a touch screen narrower than 42rem), `picker="auto"` (the default) opens the calendar in a bottom sheet: a dialog along the bottom edge of the screen, over a dimmed page.

- A tap on the box opens it with a day focused, so no on-screen keyboard comes up over it. Focus alone doesn't open it: after the sheet closes, a tap on the box types.
- Esc, the × button, a swipe down on its top bar or a tap on the dimmed page closes it. Typed text is committed and focus goes back to the box.
- While it is open the page behind can't be reached or scrolled, and the sheet's padding keeps clear of the phone's safe areas (the home indicator, a notch).

On tablets and larger screens the calendar opens under the box as before.

| `picker` | Opens |
|---|---|
| `auto` (default) | The bottom sheet on a phone, the calendar under the box everywhere else |
| `custom` | The calendar under the box on every device |
| `sheet` | The bottom sheet on every device |
| `native` | The OS date picker. It can't grey out `isDateDisabled` days, so its pick is checked like typed text |

```html
<ui-date-picker label="Visit date" picker="sheet"></ui-date-picker>
```

Style the sheet with `::part(sheet)` (its scrim with `::part(sheet)::backdrop`), `::part(sheet-grip)` and `::part(sheet-close)`; `--ui-sheet-radius` rounds its top corners (the menu radius by default). The prop has the same name in every variant.

## The calendar on its own

The calendar inside the picker is its own element, `ui-calendar`, and it comes with the same import. It is a controlled view: it moves its own focus, but you keep the chosen day. Listen to `ui-pick` (detail `{ date }`, a `Date`) and set `value`:


HTML:

```html
<ui-calendar id="date-picker-calendar" style="max-width: 288px" show-today></ui-calendar>

<script type="module">
  const calendarAlone = document.getElementById('date-picker-calendar');
  calendarAlone.addEventListener('ui-pick', (event) => {
    const d = event.detail.date;
    const pad = (n) => String(n).padStart(2, '0');
    calendarAlone.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  });
</script>
```

React:

```tsx
import { UiCalendar } from '@purpurabog/ui/react';
import { toIso } from '@purpurabog/ui/core';

<UiCalendar value={day} showToday onUiPick={(e) => setDay(toIso(e.detail.date))} />
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-calendar
import { Calendar } from '@/components/ui/react-tw/calendar';
import { toIso } from '@purpurabog/ui/core';

const [focus, setFocus] = useState(() => new Date());

<Calendar value={day} focusDate={focus} onFocusDateChange={setFocus}
  onPick={(date) => setDay(toIso(date))} showToday />
```

The month shown follows the `focusDate` property (a `Date`, today by default). Like the picker, `ui-calendar` follows the page's language (the nearest `lang`) and shows พ.ศ. in Thai; `locale` and `era` override it. It takes `min`, `max`, `isDateDisabled`, `range` with `end-value`, `first-day` and `show-today` as the picker does. The React + Tailwind `Calendar` is controlled too: `focusDate`, `onFocusDateChange` and `onPick` are required.

### Multiple dates (`multi`)

`<ui-calendar multi>` allows selecting multiple arbitrary dates simultaneously (Cally style), toggled into `values`:


HTML:

```html
<ui-calendar multi values='["2026-10-05","2026-10-12","2026-10-19"]'></ui-calendar>
```

### Dual-month calendar (`months="2"`)

`<ui-calendar range months="2">` renders two months side-by-side with a continuous cross-month range ribbon:


HTML:

```html
<ui-calendar range months="2" value="2026-10-10" end-value="2026-11-04"></ui-calendar>
```

## Skeleton

While the page loads its data, show `<ui-date-picker-skeleton>` in the picker's place, as Carbon's `DatePickerSkeleton`; add `range` for two fields. It has its own import, `@purpurabog/ui/date-picker-skeleton`, and is hidden from screen readers.


HTML:

```html
<ui-date-picker-skeleton></ui-date-picker-skeleton>
<ui-date-picker-skeleton range></ui-date-picker-skeleton>
```

React:

```tsx
import { UiDatePickerSkeleton } from '@purpurabog/ui/react';

<UiDatePickerSkeleton />
<UiDatePickerSkeleton range />
```

React + Tailwind:

```tsx
import { DatePickerSkeleton } from '@/components/ui/react-tw/date-picker';

<DatePickerSkeleton />
<DatePickerSkeleton range />
```

## Keyboard

In the text box:

| Key | Does |
|---|---|
| Typing | Enters the date; the open calendar follows a full date |
| ↓ | Opens the calendar and moves focus into it |
| Tab | With the calendar open: moves into it (the field's date, else today) |
| Shift + Tab | From the start field: closes the calendar and moves back |
| Enter | Commits the typed text, closes the calendar and submits the form it's in |
| Esc | Closes the calendar |

In the calendar:

| Key | Does |
|---|---|
| ← / → | Previous / next day |
| ↑ / ↓ | Same day of the previous / next week |
| Home / End | First / last day of the week |
| Page Up / Page Down | Previous / next month |
| Shift + Page Up / Page Down | Previous / next year |
| Enter, Space | Picks the day; the calendar closes (in a range, after the end) |
| Esc | Closes, focus back in the text box |
| Tab | In a range, from the start: to the end field. Otherwise leaves the picker and closes the calendar. In the bottom sheet, Tab stays in the sheet |
| Shift + Tab | Back to the text box |

With a mouse, click the year in the calendar header to type one, or use its ▲▼ buttons.

## Accessibility

- The text box is a combobox that opens a dialog (`aria-haspopup="dialog"`, `aria-expanded`). The calendar is a dialog named "Choose date" with a grid of day buttons, following the WAI-ARIA date picker dialog pattern.
- Each day is read as a full date ("Saturday, October 10, 2026"). Today has `aria-current="date"`, chosen days `aria-pressed`, refused days `aria-disabled`.
- Month changes are announced through a polite live region.
- The bottom sheet is a modal dialog with the same name: the page behind it is inert until it closes.
- The calendar icon is decorative, as in Carbon: it is not a Tab stop, and a click on it is a click in the text box.
- An error sets `aria-invalid` and is linked to the box with `aria-describedby`, as is the format hint.

Unstyled React parts with the same behaviour: [Headless Date picker](https://parntengza.github.io/kanok-ui-docs/en/headless-date-picker/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-date-picker>` · React `UiDatePicker`

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
| `value` | `value` | `string` | `''` | ISO yyyy-mm-dd (the start date in `range` mode). |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `range` | `range` | `boolean` | `false` | Two fields sharing one calendar (Carbon `datePickerType="range"`). |
| `end-value` | `endValue` | `string` | `''` | Range mode: the end date, ISO yyyy-mm-dd. |
| `end-name` | `endName` | `string` | `''` | Range mode: form entry name of the end date. Without it the range submits as one `name` entry `start/end`. |
| `end-label` | `endLabel` | `string` | `''` | Range mode: label of the end field. |
| `min` | `min` | `string` | `''` | Earliest selectable date, ISO yyyy-mm-dd. |
| `max` | `max` | `string` | `''` | Latest selectable date, ISO yyyy-mm-dd. |
| `format` | `format` | `DateFormat` | `'dd/mm/yyyy'` |  |
| `locale` | `locale` | `string` | `''` | Locale for names, labels and messages. Defaults to the nearest `lang`: the element's own, an ancestor's, then `<html>`'s, else the browser language. |
| `era` | `era` | `Era \| ''` | `''` | Year era shown and typed: `be` (พ.ศ.) or `ce` (ค.ศ.). Defaults to `be` for Thai locales. |
| `first-day` | `firstDay` | `number` | `0` | 0 = Sunday … 6 = Saturday. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidDatePicker`: each date box is a 64px box with its label inside. `<ui-fluid-form>` sets it for every field inside. |
| `picker` | `picker` | `'auto' \| 'custom' \| 'sheet' \| 'native'` | `'auto'` | Which picker opens: `auto` (default) = our calendar, in a bottom sheet on a phone; `custom` = our calendar as a popover on every device; `sheet` = in a bottom sheet on every device; `native` = the OS date picker. |
| `clearable` | `clearable` | `boolean` | `false` | Shows a clear button inside the field while it has text. |
| `show-today` | `showToday` | `boolean` | `false` | Adds a "Today" button under the calendar. |
| `months` | `months` | `number` | `1` | Number of months to show side-by-side in the calendar (default 1, e.g. 2 for range picking). |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field height, same scale as ui-text-input. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `isDateDisabled` | `(date: Date) => boolean \| string \| undefined` | Property only. Return `true` for days that can't be chosen (weekends, holidays…), or a string to show that reason instead of the generic message. |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | none (use a ref) | When a committed value (start or end) changes: blur, Enter, a calendar pick or clear. A typed date outside min/max is still committed, with the field reporting the range error. |

#### Slots

| Slot | Description |
|---|---|
| `label` | Label content with markup; the `label` attribute is the plain-text fallback |
| `helper-text` | Helper text with markup (links, bold); overrides `helper-text` |
| `warn-text` | Warning text shown while `warn`; overrides `warn-text` |
| `invalid-text` | Error text shown while invalid; overrides `invalid-text` |
| `end-label` | Label of the end field in range mode; overrides `end-label` |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The field box (range: also `start-base` / `end-base`; same for every field part) |
| `label` | The label |
| `input` | The text box |
| `clear-button` | The × button |
| `toggle` | The calendar icon (decorative, as Carbon) |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |
| `calendar` | The popover shell (in the bottom sheet: the sheet's panel) |
| `sheet` | The bottom sheet `<dialog>` on a phone (`picker="auto"` / `sheet`; style its scrim with `::part(sheet)::backdrop`) |
| `sheet-grip` | The sheet's top bar, which a swipe down closes |
| `sheet-close` | The sheet's × button |
| `header` | Calendar month / year row |
| `nav` | Previous / next month buttons |
| `month` | Month name |
| `year` | Year number box |
| `grid` | The table of days |
| `day` | Each day button |
| `today-button` | The optional "Today" button |

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
| `--ui-menu-radius` |  | / --ui-menu-border / --ui-menu-shadow - Corners, border and shadow of the calendar (the menu settings) |
| `--ui-sheet-radius` |  | The bottom sheet's top corners (default: the menu radius) |
| `--ui-modal-scrim` |  | The bottom sheet's scrim, as the modal's (default Carbon's overlay) |
| `--ui-calendar-day-radius` |  | Corner radius of a day (default 0; Kanok: 6px) |
| `--ui-calendar-today-dot-radius` |  | Corner radius of today's dot (default 0, a square; Kanok: 50%, a dot) |
| `--ui-field-readonly-background` |  | The box's fill when read-only (default transparent; Kanok: a faint ink tint, so read-only reads as set and never weaker than disabled) |
| `--ui-fluid-background` |  | / --ui-fluid-gap - A fluid box's fill and the space under it (default the layer's fill, 0: boxes that touch; Kanok: transparent, 8px) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |
| `--ui-focus-offset` |  | `outline-offset` of the month arrows' and Today's focus ring (default -2px: inside; Kanok: 2px outside) |

### `<ui-calendar>` · React `UiCalendar`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `string` | `''` | Chosen day (start day in range mode), ISO yyyy-mm-dd. |
| `end-value` | `endValue` | `string` | `''` | Range mode: chosen end day, ISO yyyy-mm-dd. |
| `range` | `range` | `boolean` | `false` | Whether range selection is enabled. |
| `multi` | `multi` | `boolean` | `false` | Multi-date selection mode: select multiple individual dates (like Cally's calendar-multi). |
| `values` | `values` | `string[] \| string` | `[]` | Selected dates in multi mode (array or comma/space-separated ISO string). |
| `months` | `months` | `number` | `1` | Number of months to display side-by-side (1 or 2, default 1). |
| `active-field` | `activeField` | `'start' \| 'end'` | `'start'` | Range mode: which end a pick will set; drives the preview highlight. |
| `min` | `min` | `string` | `''` | Minimum selectable ISO date. |
| `max` | `max` | `string` | `''` | Maximum selectable ISO date. |
| `locale` | `locale` | `string` | `''` | BCP 47 locale for names and labels. Defaults to the nearest `lang`. |
| `era` | `era` | `Era \| ''` | `''` | Year era: `be` (พ.ศ.) or `ce` (ค.ศ.). Defaults to `be` for Thai locales. |
| `first-day` | `firstDay` | `number` | `0` | 0 = Sunday … 6 = Saturday. |
| `show-today` | `showToday` | `boolean` | `false` | Whether to display the "Today" footer shortcut button. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `focusDate` |  | Day that holds the roving tab stop; its month is shown. |
| `isDateDisabled` | `(date: Date) => boolean \| string \| undefined` | Callback to disable individual dates (e.g. weekends, holidays). |
| `multiValues` | `string[]` | (read-only) Selected dates as clean ISO array in multi mode. |

#### Methods

| Method | Description |
|---|---|
| `focusDay()` | Puts DOM focus on the day that holds the roving tab stop. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-multi-pick` | none (use a ref) | Detail `{ date, values }`, in multi mode when a day is toggled |
| `change` | none (use a ref) | Detail `{ value, endValue, values }`, native-like change event on pick |
| `ui-pick` | `onUiPick` | Detail `{ date }`, when a day is activated |
| `ui-focus-change` | `onUiFocusChange` | Detail `{ date }`, when keyboard or navigation moves the focused date |

#### CSS parts

| Part | Description |
|---|---|
| `months` | Multi-month layout container |
| `month-view` | Container of a single month |
| `header` | Month / year row container |
| `nav` | Previous / next navigation buttons |
| `prev-button` | The previous month button |
| `next-button` | The next month button |
| `heading` | Month & year label container |
| `month` | Month name |
| `year` | Year number box |
| `grid` | The table grid of days |
| `table` | The table grid of days |
| `thead` | The table header row with weekday labels |
| `th` | Individual weekday heading cell |
| `tbody` | The table body of weeks |
| `row` | Each week table row |
| `cell` | Each day table cell |
| `day` | Each day button |
| `today-button` | The optional "Today" footer button |
| `footer` | The footer container |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-calendar-day-radius` |  | Corner radius of a day button (default 9999px for circular days) |
| `--ui-calendar-today-dot-radius` |  | Corner radius of today's indicator dot (default 50%) |
| `--ui-calendar-day-focus` |  | The keyboard focus ring on a day |
| `--ui-calendar-selected-focus` |  | Focus ring on a selected day |


