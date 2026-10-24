# Headless Date picker

`DatePicker` and `Calendar` give you the date picker's behaviour with no classes. The parts read what users type (Thai digits too), open the calendar when the box gets focus, move focus between the box and the calendar, check the date against `min`, `max` and `isDateDisabled`, block the form while the date is wrong, and submit an ISO date.

You own the markup, the label, the placeholder, the error text, the icons and every style. The parts render no text of their own apart from month and day names. The styled version is [Date picker](https://parntengza.github.io/kanok-ui-docs/en/date-picker/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Calendar, DatePicker } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';
const note = 'text-xs text-ink-muted';

export default function Example() {
  const [start, setStart] = useState('');
  return (
    <DatePicker.Root id="start" name="start" value={start} onValueChange={setStart}>
      <div className="grid gap-2">
        <label htmlFor="start" className={label}>Contract start</label>
        <DatePicker.Group className={group}>
          <DatePicker.Input placeholder="dd/mm/yyyy" className={input} />
        </DatePicker.Group>
        <p className={note}>Value: "{start}"</p>
      </div>
      <DatePicker.Popup aria-label="Choose date" className={popup}>
        <MonthGrid />
      </DatePicker.Popup>
    </DatePicker.Root>
  );
}

// The calendar parts. Each example on this page is a whole module, so each repeats this <MonthGrid />.
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

`Root` calls `onValueChange` with the ISO string (`yyyy-mm-dd`, Gregorian year) whenever a committed date changes: a commit on blur or Enter (a full date typed is the value at once and is reported then), a pick, a clear. With `name`, a hidden input submits the same string. A `Calendar.Root` inside `Popup` takes the picker's state by itself.

## Anatomy

```tsx
<DatePicker.Root>
  <label />
  <DatePicker.Group>
    <DatePicker.Input />
    <DatePicker.NativeInput />
    <DatePicker.Clear />
    <DatePicker.Trigger />
  </DatePicker.Group>
  <DatePicker.Popup>
    <Calendar.Root>
      <Calendar.PrevButton />
      <Calendar.MonthName />
      <Calendar.YearInput />
      <Calendar.YearStep delta={1} />
      <Calendar.NextButton />
      <Calendar.Heading />
      <Calendar.Grid>
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => <Calendar.Cell date={d}><Calendar.Day /></Calendar.Cell>}
        </Calendar.GridBody>
      </Calendar.Grid>
      <Calendar.TodayButton />
    </Calendar.Root>
  </DatePicker.Popup>
</DatePicker.Root>
```

Keep the boxes, `Clear` and `Trigger` inside `Group`: focus and presses there don't count as leaving the picker. A range adds a second `<DatePicker.Input field="end" />`.

## Language, era and format

`Root` follows the page's language: without `locale` it uses `<html lang>`, else the browser's, so a Thai page gets Thai messages and month names. `locale` overrides it. For Thai, `era` defaults to `be` (พ.ศ.); set `era="ce"` for ค.ศ. `format` sets the order users see and type; `value` stays ISO.


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';
const note = 'text-xs text-ink-muted';

export default function Example() {
  const [start, setStart] = useState('2026-10-10');
  const [due, setDue] = useState('2026-10-10');
  return (
    <div className="grid gap-6">
      <DatePicker.Root id="th-start" locale="th" value={start} onValueChange={setStart}>
        <div className="grid gap-2">
          <label htmlFor="th-start" className={label}>วันที่เริ่มสัญญา</label>
          <DatePicker.Group className={group}>
            <DatePicker.Input placeholder="วว/ดด/ปปปป" className={input} />
          </DatePicker.Group>
          <p className={note}>Value: "{start}"</p>
        </div>
        <DatePicker.Popup aria-label="เลือกวันที่" className={popup}>
          <MonthGrid />
        </DatePicker.Popup>
      </DatePicker.Root>

      <DatePicker.Root id="due" format="yyyy-mm-dd" value={due} onValueChange={setDue}>
        <div className="grid gap-2">
          <label htmlFor="due" className={label}>Due date</label>
          <DatePicker.Group className={group}>
            <DatePicker.Input placeholder="yyyy-mm-dd" className={input} />
          </DatePicker.Group>
          <p className={note}>Value: "{due}"</p>
        </div>
        <DatePicker.Popup aria-label="Choose date" className={popup}>
          <MonthGrid />
        </DatePicker.Popup>
      </DatePicker.Root>
    </div>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

The placeholder is yours: write the format in the page's language.

## Pick a range

`range` gives two boxes sharing one calendar. The start box's id is `Root`'s `id`, the end box's `<id>-end`; point each `<label>` at them.


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const note = 'text-xs text-ink-muted';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';
const box = 'h-10 w-36 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:border-interactive data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error';

export default function Example() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  return (
    <DatePicker.Root range id="stay" name="from" endName="to"
      value={from} onValueChange={setFrom} endValue={to} onEndValueChange={setTo}>
      <DatePicker.Group className="flex w-fit gap-px">
        <div className="grid gap-2">
          <label htmlFor="stay" className={label}>Check-in</label>
          <DatePicker.Input field="start" placeholder="dd/mm/yyyy" className={box} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="stay-end" className={label}>Check-out</label>
          <DatePicker.Input field="end" placeholder="dd/mm/yyyy" className={box} />
        </div>
      </DatePicker.Group>
      <p className={`mt-2 ${note}`}>from: "{from}", to: "{to}"</p>
      <DatePicker.Popup aria-label="Choose date" className={popup}>
        <MonthGrid />
      </DatePicker.Popup>
    </DatePicker.Root>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

A pick for the start keeps the calendar open for the end, and the days in between get `data-in-range`. Picking an end before the start swaps the two.

## Limit the dates


React (live React example):

```tsx
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';

const weekend = (date: Date) =>
  date.getDay() === 0 || date.getDay() === 6 ? 'We don’t deliver at the weekend.' : false;

// The box's problem, once it shows (try a Saturday or a date in 2027).
function Problem({ id }: Readonly<{ id: string }>) {
  const { errors, showsError } = DatePicker.useDatePickerContext();
  return <p id={id} className="text-xs text-error-text">{showsError('start') ? errors.start : null}</p>;
}

export default function Example() {
  return (
    <DatePicker.Root id="delivery" min="2026-01-01" max="2026-12-31" isDateDisabled={weekend}>
      <div className="grid gap-2">
        <label htmlFor="delivery" className={label}>Delivery date</label>
        <DatePicker.Group className={group}>
          <DatePicker.Input placeholder="dd/mm/yyyy" aria-describedby="delivery-problem" className={input} />
        </DatePicker.Group>
        <Problem id="delivery-problem" />
      </div>
      <DatePicker.Popup aria-label="Choose date" className={popup}>
        <MonthGrid />
      </DatePicker.Popup>
    </DatePicker.Root>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

Refused days get `data-disabled` and `aria-disabled`, and `PrevButton` / `NextButton` turn off at `min` / `max`. A refused date that is typed stays in the box with its problem, and the form won't submit.

## Clear button and Today

`Clear` empties its box and keeps focus there without opening the calendar. `Calendar.TodayButton` picks today. `firstDay` on the calendar sets the first day of the week (`0` Sunday … `6` Saturday).


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';
const note = 'text-xs text-ink-muted';

// × only while the box has text.
function ClearDate() {
  const { state } = DatePicker.useDatePickerContext();
  const look = 'grid size-10 shrink-0 place-items-center text-ink hover:bg-field-hover-1';
  return (
    <DatePicker.Clear aria-label="Clear date" className={state.text.start ? look : 'hidden'}>×</DatePicker.Clear>
  );
}

export default function Example() {
  const [meeting, setMeeting] = useState('');
  return (
    <DatePicker.Root id="meeting" value={meeting} onValueChange={setMeeting}>
      <div className="grid gap-2">
        <label htmlFor="meeting" className={label}>Meeting date</label>
        <DatePicker.Group className={group}>
          <DatePicker.Input placeholder="dd/mm/yyyy" className={input} />
          <ClearDate />
        </DatePicker.Group>
        <p className={note}>Value: "{meeting}"</p>
      </div>
      <DatePicker.Popup aria-label="Choose date" className={popup}>
        <MonthGrid firstDay={1}>
          <Calendar.TodayButton className="mt-1 h-10 w-full border-t border-hairline text-sm text-link hover:bg-layer-hover-1 disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            Today
          </Calendar.TodayButton>
        </MonthGrid>
      </DatePicker.Popup>
    </DatePicker.Root>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

`Clear` is always rendered; hide it yourself while the box is empty if you want, as the example does with the context's `state.text`.

## Read-only and disabled


React (live React example):

```tsx
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';

export default function Example() {
  return (
    <div className="grid gap-6">
      <DatePicker.Root id="signed" defaultValue="2026-10-10" readOnly>
        <div className="grid gap-2">
          <label htmlFor="signed" className={label}>Signed on</label>
          <DatePicker.Group className={group}>
            <DatePicker.Input className={input} />
          </DatePicker.Group>
        </div>
        <DatePicker.Popup aria-label="Choose date" className={popup}>
          <MonthGrid />
        </DatePicker.Popup>
      </DatePicker.Root>

      <DatePicker.Root id="voided" defaultValue="2026-10-10" disabled>
        <div className="grid gap-2">
          <label htmlFor="voided" className="text-xs text-ink-disabled">Voided on</label>
          <DatePicker.Group className={group}>
            <DatePicker.Input className={input} />
          </DatePicker.Group>
        </div>
        <DatePicker.Popup aria-label="Choose date" className={popup}>
          <MonthGrid />
        </DatePicker.Popup>
      </DatePicker.Root>
    </div>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

`readOnly` keeps and submits the value but blocks typing and the calendar. `disabled` disables the boxes and `Trigger`; nothing is submitted or validated. `Clear` and `Trigger` are disabled in both.

## Phones and tablets

On a phone (a touch screen narrower than 42rem), `picker="auto"` (the default) opens the calendar in a bottom sheet: `Popup` renders inside a modal `<dialog data-sheet>` (the page behind inert and held still, focus kept inside). Esc, a `DatePicker.SheetClose`, a swipe down on a `DatePicker.SheetGrip` or a tap on the scrim closes it, and focus alone doesn't open it, so the box can still be typed in. Style the dialog with `sheetClassName` (its scrim with `backdrop:`) and the box on `data-sheet`; keep its padding clear of `env(safe-area-inset-*)`. `SheetGrip` and `SheetClose` render only in the sheet.

`picker="custom"` keeps the calendar under the box on phones, `picker="sheet"` uses the sheet everywhere, and `picker="native"` opens the OS date picker from a `DatePicker.NativeInput`: put one over each box, invisible and without pointer events.


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';
const note = 'text-xs text-ink-muted';

export default function Example() {
  const [visit, setVisit] = useState('');
  return (
    <DatePicker.Root id="visit" value={visit} onValueChange={setVisit}>
      <div className="grid gap-2">
        <label htmlFor="visit" className={label}>Visit date</label>
        <DatePicker.Group className={`relative ${group}`}>
          <DatePicker.Input placeholder="dd/mm/yyyy" className={input} />
          <DatePicker.NativeInput className="pointer-events-none absolute inset-0 opacity-0" />
        </DatePicker.Group>
        <p className={note}>Value: "{visit}"</p>
      </div>
      <DatePicker.Popup
        aria-label="Choose date"
        className={`${popup} data-sheet:w-full data-sheet:pb-[env(safe-area-inset-bottom)]`}
        sheetClassName="fixed inset-x-0 top-auto bottom-0 m-0 w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-black/50"
      >
        <DatePicker.SheetGrip className="relative flex h-12 justify-center">
          <span aria-hidden="true" className="mt-2 h-1 w-8 rounded-full bg-icon-secondary" />
          <DatePicker.SheetClose aria-label="Close" className="absolute end-0 top-0 size-12 text-ink hover:bg-layer-hover-1">×</DatePicker.SheetClose>
        </DatePicker.SheetGrip>
        <MonthGrid />
      </DatePicker.Popup>
    </DatePicker.Root>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

On a phone the example above opens the bottom sheet; elsewhere, the calendar under the box. The OS picker (`picker="native"`) can't grey out `isDateDisabled` days, so its pick is checked like typed text.

## The calendar on its own

`Calendar.Root` works outside a picker too. On its own it holds the month shown and the chosen day; pass `value` or `focusDate` (with `onFocusDateChange`) to control them. `onPick` hears every pick.


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar } from '@purpurabog/ui/headless';

export default function Example() {
  const [picked, setPicked] = useState<Date | null>(null);
  return (
    <div className="grid gap-2">
      <MonthGrid onPick={setPicked} className="w-72 border border-border-subtle-1 bg-layer-1 p-2">
        <Calendar.TodayButton className="mt-1 h-10 w-full border-t border-hairline text-sm text-link hover:bg-layer-hover-1 disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          Today
        </Calendar.TodayButton>
      </MonthGrid>
      <p className="text-xs text-ink-muted">Picked: {picked?.toLocaleDateString('en-GB', { dateStyle: 'long' })}</p>
    </div>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```

A range (`range`, `value`, `endValue`, `activeField`) is yours to hold on a calendar on its own. Its `era` defaults to `ce` whatever the `locale`: set `locale="th"` and `era="be"` for Thai.

## Style it


React (live React example):

```tsx
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const isSunday = (date: Date) => date.getDay() === 0;

export default function Example() {
  return (
    <DatePicker.Root id="styled-date" range isDateDisabled={isSunday}>
      <DatePicker.Group className="flex w-fit gap-px border-b-2 border-transparent data-open:border-interactive">
        <DatePicker.Input field="start" aria-label="Start" placeholder="dd/mm/yyyy" className="h-10 w-36 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:text-ink-disabled" />
        <DatePicker.Input field="end" aria-label="End" placeholder="dd/mm/yyyy" className="h-10 w-36 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:text-ink-disabled" />
      </DatePicker.Group>
      <DatePicker.Popup aria-label="Choose date" className="w-72 border border-border-subtle-1 bg-layer-1 p-2 shadow-lg">
        <Calendar.Root>
          <div className="flex items-center justify-between">
            <Calendar.PrevButton aria-label="Previous month" className="size-10 text-ink hover:bg-layer-hover-1 disabled:text-ink-disabled">‹</Calendar.PrevButton>
            <Calendar.Heading className="text-sm font-semibold text-ink" />
            <Calendar.NextButton aria-label="Next month" className="size-10 text-ink hover:bg-layer-hover-1 disabled:text-ink-disabled">›</Calendar.NextButton>
          </div>
          <Calendar.Grid className="w-full border-collapse text-sm">
            <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
            <Calendar.GridBody>
              {(d) => (
                <Calendar.Cell date={d} className="p-0">
                  <Calendar.Day className="size-10 text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:text-ink-disabled data-disabled:line-through" />
                </Calendar.Cell>
              )}
            </Calendar.GridBody>
          </Calendar.Grid>
        </Calendar.Root>
      </DatePicker.Popup>
    </DatePicker.Root>
  );
}
```
```css
.date-group[data-open] { border-bottom-color: #0f62fe; }
.date-input[data-invalid] { outline: 2px solid #da1e28; }
.day[data-outside-month] { color: #6f6f6f; }
.day[data-today] { font-weight: 600; }
.day[data-in-range] { background: #d0e2ff; }
.day[data-selected] { background: #0f62fe; color: #fff; }
.day[data-disabled] { color: #c6c6c6; text-decoration: line-through; }
```

## Parts

### DatePicker.Root

Renders no element of its own: its children, plus an `<input type="hidden">` for `name` and one for `endName` (none while disabled).

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | The ISO date, controlled (the start in a range) |
| `defaultValue` | `string` | `''` | |
| `onValueChange` | `(value: string) => void` | | After the date changes |
| `range` | `boolean` | `false` | Two boxes, one calendar |
| `endValue` | `string` | | The end, controlled |
| `defaultEndValue` | `string` | `''` | |
| `onEndValueChange` | `(value: string) => void` | | |
| `name` | `string` | | Submits the (start) date |
| `endName` | `string` | | Submits the end date |
| `min`, `max` | `string` | `''` | ISO dates |
| `isDateDisabled` | `(date: Date) => boolean \| string` | | Refuses a day; a string is its message |
| `format` | `'dd/mm/yyyy' \| 'mm/dd/yyyy' \| 'yyyy-mm-dd'` | `'dd/mm/yyyy'` | |
| `era` | `'be' \| 'ce'` | `'be'` for a Thai `locale`, else `'ce'` | |
| `locale` | `string` | `<html lang>`, else the browser's | Language of the messages and the calendar's names |
| `disabled` | `boolean` | `false` | |
| `readOnly` | `boolean` | `false` | |
| `required` | `boolean` | `false` | |
| `invalid` | `boolean` | `false` | Forces the error state; the form won't submit |
| `invalidMessage` | `string` | `''` | With `invalid`: the form's validity message |
| `picker` | `'auto' \| 'custom' \| 'sheet' \| 'native'` | `'auto'` | `auto`: the calendar, in a bottom sheet on a phone; `custom`: under the box everywhere; `sheet`: the sheet everywhere; `native`: the OS picker |
| `id` | `string` | generated | The start box's id; the end box gets `<id>-end`, the popup `<id>-calendar` |

### DatePicker.Group

Renders a `<div>` around the boxes.

| Attribute | When |
|---|---|
| `data-open` | The calendar is open |
| `data-disabled` | `disabled` |

### DatePicker.Input

Renders an `<input type="text" role="combobox">`. Its value, `disabled`, `readOnly` and `required` come from `Root`; its id from `Root`'s `id`.

| Prop | Type | Default | |
|---|---|---|---|
| `field` | `'start' \| 'end'` | `'start'` | Which date the box holds |

| Attribute | When |
|---|---|
| `data-open` | The calendar is open and picks for this box |
| `data-invalid` | The box shows its error |
| `data-disabled` | `disabled` |
| `data-readonly` | `readOnly` |

### DatePicker.NativeInput

Renders an `<input type="date">` with `tabIndex={-1}` and `aria-hidden="true"`; its value, `min` and `max` come from `Root`.

| Prop | Type | Default | |
|---|---|---|---|
| `field` | `'start' \| 'end'` | `'start'` | Which date it picks |

### DatePicker.Clear

Renders a `<button type="button">` with `tabIndex={-1}`, disabled while `Root` is disabled or read-only.

| Prop | Type | Default | |
|---|---|---|---|
| `field` | `'start' \| 'end'` | `'start'` | Which box it empties |

### DatePicker.Trigger

Renders a `<button type="button">` with `tabIndex={-1}`, `aria-haspopup="dialog"` and `aria-expanded`. It opens the calendar with focus in the grid, or closes it, and is disabled while `Root` is disabled or read-only.

| Attribute | When |
|---|---|
| `data-open` | The calendar is open |

### DatePicker.Popup

Renders a `<div role="dialog" popover="manual">` in the top layer, under the start box (above it when there's no room below). Its children render only while it is open. In the bottom sheet it renders the same `<div>`, without `popover` and `role`, inside a modal `<dialog data-sheet>` that takes `aria-label`.

| Prop | Type | |
|---|---|---|
| `sheetClassName`, `sheetStyle` | `string`, `CSSProperties` | The bottom sheet's `<dialog>` |

| Attribute | When |
|---|---|
| `data-open` | Open |
| `data-side` | Where it ended up: `bottom` or `top` |
| `data-sheet` | In the bottom sheet (on the `<dialog>` and the box) |

### DatePicker.SheetGrip

Renders a `<div>` with `touch-action: none` in the bottom sheet only: a swipe down on it closes the sheet (64px, or a flick), shorter it springs back. While a finger drags it, the dialog has `data-dragging` and a `translate`. Put a grip mark and a `SheetClose` in it.

### DatePicker.SheetClose

Renders a `<button type="button">` in the bottom sheet only; it closes the sheet like Esc. Give it an `aria-label`.

## Calendar parts

### Calendar.Root

Renders a `<div>`. Inside a `DatePicker.Popup` it takes the picker's value, range, focus, limits, `locale` and `era`; a prop you pass still wins.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | The chosen day, ISO, controlled (the start in a range) |
| `defaultValue` | `string` | `''` | The first chosen day (single date) |
| `endValue` | `string` | `''` | The range's end |
| `range` | `boolean` | `false` | |
| `activeField` | `'start' \| 'end'` | `'start'` | Which end a pick sets (drives the preview) |
| `focusDate` | `Date` | | The day with the tab stop, whose month shows (controlled) |
| `defaultFocusDate` | `Date` | the value, else today | |
| `onFocusDateChange` | `(date: Date) => void` | | |
| `onPick` | `(date: Date) => void` | | An available day was picked |
| `min`, `max` | `string` | `''` | |
| `isDateDisabled` | `(date: Date) => boolean \| string` | | |
| `locale` | `string` | `<html lang>`, else the browser's | BCP 47 locale for the names |
| `era` | `'be' \| 'ce'` | `'be'` for a Thai `locale`, else `'ce'` | |
| `firstDay` | `number` | `0` | `0` Sunday … `6` Saturday |
| `handle` | `Ref<CalendarHandle>` | | `focusDay()` moves focus to the tab-stop day |

| Attribute | When |
|---|---|
| `data-range` | `range` |

### Calendar.PrevButton, Calendar.NextButton

Each renders a `<button type="button">` that shows the month before or after. It is disabled when that whole month lies outside `min` / `max`.

### Calendar.MonthName

Renders a `<span aria-hidden="true">` with the month's name; children replace it.

### Calendar.Heading

Renders a `<div aria-live="polite">` with the month and year. It names the grid, so keep it (hide it visually if you like); children replace the text.

### Calendar.YearInput

Renders an `<input type="number">` with the year shown, in the calendar's era. A typed four-digit year shows that year; leaving the box puts the shown year back.

### Calendar.YearStep

Renders a `<button type="button">` with `tabIndex={-1}` that steps the shown year. It is disabled past the years `min` / `max` allow.

| Prop | Type | Default | |
|---|---|---|---|
| `delta` | `number` | | Years to step, e.g. `1` or `-1` (required) |

### Calendar.Grid

Renders a `<table role="grid">` named by `Heading`. It handles the keys.

### Calendar.GridHeader, Calendar.HeaderCell

`GridHeader` renders a `<thead>` with one row and calls its `children` function for each weekday. `HeaderCell` renders a `<th scope="col">` with the short weekday name and the full one as `abbr`.

| Prop | Type | Default | |
|---|---|---|---|
| `children` (GridHeader) | `(date: Date) => ReactNode` | | Renders one weekday (required) |
| `date` (HeaderCell) | `Date` | | The weekday (required) |

### Calendar.GridBody, Calendar.Cell

`GridBody` renders a `<tbody>` with six weeks and calls its `children` function for each day. `Cell` renders a `<td role="gridcell" aria-selected>`.

| Prop | Type | Default | |
|---|---|---|---|
| `children` (GridBody) | `(date: Date) => ReactNode` | | Renders one day (required) |
| `date` (Cell) | `Date` | | The day (required) |

### Calendar.Day

Renders a `<button type="button">` with the day's number (children replace it). It goes inside a `Cell`. Only the tab-stop day has `tabIndex={0}`.

| Attribute | When |
|---|---|
| `data-selected` | The chosen day (either end of a range) |
| `data-today` | Today |
| `data-outside-month` | A day of the month before or after |
| `data-disabled` | Refused: outside `min` / `max`, or by `isDateDisabled` |
| `data-in-range` | Between the range's start and its end (chosen or previewed) |
| `data-range-start` | The range's start |
| `data-range-end` | The range's end, chosen or previewed |

### Calendar.TodayButton

Renders a `<button type="button">` that picks today. It is disabled when today is refused.

### Hooks

`DatePicker.useDatePickerContext()` inside `Root` gives the picker's state: `state` (text, values, open), `problems`, `errors` (the messages in `locale`'s words) and `showsError(field)`. `Calendar.useCalendarContext()` gives the month shown and its names; `Calendar.useCellContext()` inside a `Cell` gives that day's state as values.

## Keyboard and accessibility

In the box:

| Key | Does |
|---|---|
| Typing | Enters the date; Thai digits become 0–9 |
| ↓ | Opens the calendar and moves focus into it |
| Tab | With the calendar open: moves into it |
| Shift + Tab | From the start box: closes the calendar |
| Enter | Commits the typed text, closes the calendar; the form's own Enter submit follows |
| Esc | Closes the calendar |

In the calendar grid:

| Key | Does |
|---|---|
| ← / → | Previous / next day |
| ↑ / ↓ | Same day of the previous / next week |
| Home / End | First / last day of the week |
| Page Up / Page Down | Previous / next month |
| Shift + Page Up / Page Down | Previous / next year |
| Enter, Space | Picks the day; in a picker the calendar closes (in a range, after the end) |
| Esc | Closes, focus back in the box |
| Tab | In a range, from the start: to the end box. Otherwise focus goes back to the box, the calendar closes and Tab carries on |
| Shift + Tab | Back to the box |

The parts handle:

- `role="combobox"`, `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls` and `aria-invalid` on each box; `role="dialog"` on `Popup`.
- A grid of day buttons with one roving tab stop. Each day is named by its full date, with `aria-current="date"` on today, `aria-pressed` on chosen days and `aria-disabled` on refused ones.
- The month change, announced by `Heading`.
- The form's validation: the first wrong box carries the message, the browser's bubble is suppressed, and a blocked submit moves focus to that box.

You add:

- A `<label htmlFor>` for each box, and an `aria-label` on `Popup` ("Choose date"), `PrevButton`, `NextButton`, `YearInput`, `YearStep`, `Clear` and `Trigger`.
- The error text and the format hint, linked to the box with `aria-describedby`:


React (live React example):

```tsx
import { useState } from 'react';
import { Calendar, DatePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const group = 'flex w-72 items-center border-b border-border-strong-1 bg-field-1 data-disabled:border-transparent has-data-readonly:border-border-subtle-1 has-data-readonly:bg-transparent';
const input = 'h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:text-ink-disabled';
const popup = 'border border-border-subtle-1 bg-layer-1 shadow-lg';
const note = 'text-xs text-ink-muted';

function DateError({ id }: Readonly<{ id: string }>) {
  const { errors, showsError } = DatePicker.useDatePickerContext();
  return <p id={id} className="text-xs text-error-text">{showsError('start') ? errors.start : null}</p>;
}

export default function Example() {
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <DatePicker.Root id="contract-start" name="start" required>
        <div className="grid gap-2">
          <label htmlFor="contract-start" className={label}>Contract start</label>
          <DatePicker.Group className={group}>
            <DatePicker.Input aria-describedby="contract-start-error" placeholder="dd/mm/yyyy" className={input} />
          </DatePicker.Group>
          <DateError id="contract-start-error" />
        </div>
        <DatePicker.Popup aria-label="Choose date" className={popup}>
          <MonthGrid />
        </DatePicker.Popup>
      </DatePicker.Root>
      <button type="submit" className="h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Send
      </button>
      {sent && <p className={note}>Sent: {JSON.stringify(sent)}</p>}
    </form>
  );
}

// MonthGrid: the calendar parts from "Use it".
function MonthGrid({ children, ...props }: Readonly<Calendar.RootProps>) {
  const nav = 'grid size-10 place-items-center text-ink hover:bg-layer-hover-1 disabled:cursor-not-allowed disabled:text-ink-disabled focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
  return (
    <Calendar.Root className="w-72 p-2" {...props}>
      <div className="flex items-center justify-between">
        <Calendar.PrevButton aria-label="Previous month" className={nav}>‹</Calendar.PrevButton>
        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
          <Calendar.MonthName />
          <Calendar.YearInput aria-label="Year" className="h-7 w-16 bg-transparent px-1 hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus" />
        </div>
        <Calendar.NextButton aria-label="Next month" className={nav}>›</Calendar.NextButton>
      </div>
      <Calendar.Heading className="sr-only" />
      <Calendar.Grid className="w-full table-fixed border-collapse text-sm">
        <Calendar.GridHeader>{(d) => <Calendar.HeaderCell date={d} className="h-10 font-normal text-ink" />}</Calendar.GridHeader>
        <Calendar.GridBody>
          {(d) => (
            <Calendar.Cell date={d} className="p-0 text-center">
              <Calendar.Day className="h-10 w-full text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-outside-month:text-ink-muted data-today:font-semibold data-today:underline data-today:decoration-link data-today:underline-offset-4 data-in-range:bg-layer-selected-1 data-selected:bg-interactive data-selected:text-on-primary data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:line-through" />
            </Calendar.Cell>
          )}
        </Calendar.GridBody>
      </Calendar.Grid>
      {children}
    </Calendar.Root>
  );
}
```
