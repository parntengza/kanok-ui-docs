# Headless Time picker

`TimePicker` gives you the time picker's behaviour with no classes: a short text box for `hh:mm` that takes part in the form's own validation through `pattern`, and native selects beside it for AM / PM or the time zone. `Root` passes `disabled`, `readOnly` and `invalid` to every part; a read-only select still takes focus but doesn't open or change.

You own the label, the error text, the layout and every style. Validation is yours too, as in Carbon React: set `invalid` when your check fails. The styled version is [Time picker](https://parntengza.github.io/kanok-ui-docs/en/time-picker/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { TimePicker } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { TimePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const input = 'h-10 w-24 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';
const select = 'h-10 border-b border-border-strong-1 bg-field-1 px-2 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';
const button = 'h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

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
      <TimePicker.Root>
        <div className="grid gap-2">
          <label htmlFor="time" className={label}>Start time</label>
          <div className="flex gap-0.5">
            <TimePicker.Input id="time" name="time" placeholder="hh:mm" className={input} />
            <TimePicker.Select aria-label="AM or PM" name="period" className={select}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </TimePicker.Select>
            <TimePicker.Select aria-label="Time zone" name="zone" className={select}>
              <option value="ict">Bangkok (ICT)</option>
              <option value="utc">UTC</option>
            </TimePicker.Select>
          </div>
        </div>
      </TimePicker.Root>
      <button type="submit" className={button}>Send</button>
      {sent && <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p>}
    </form>
  );
}
```

Each part submits on its own under its `name`: the time as typed, and each select's `<option>` value. Nothing is converted.

## Anatomy

```tsx
<TimePicker.Root>
  <label />
  <TimePicker.Input />
  <TimePicker.Select />
</TimePicker.Root>
```

A `Select` also works on its own, outside a `Root`.

## 12-hour or 24-hour

`Input` takes 12-hour time by default: `h:mm` or `hh:mm`, at most 5 characters (`TimePicker.TWELVE_HOUR_PATTERN`). For 24-hour time, set your own `pattern` and leave out the AM / PM select:


React (live React example):

```tsx
import { useState } from 'react';
import { TimePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const input = 'h-10 w-24 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';
const button = 'h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

export default function Example() {
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  // Send 7:5 or 25:00: the browser stops the form at the pattern.
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <TimePicker.Root>
        <div className="grid gap-2">
          <label htmlFor="departure" className={label}>Departure</label>
          <TimePicker.Input id="departure" name="departure" placeholder="hh:mm" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" className={input} />
        </div>
      </TimePicker.Root>
      <button type="submit" className={button}>Send</button>
      {sent && <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p>}
    </form>
  );
}
```

`maxLength` changes the length limit.

## Errors

`pattern` takes part in the form's validation, but no message shows by itself. Set `invalid` on `Root` when your check fails: the box gets `aria-invalid` and `data-invalid`. The message is your markup; link it with `aria-describedby`.


React (live React example):

```tsx
import { useState } from 'react';
import { TimePicker } from '@purpurabog/ui/headless';

const label = 'text-xs text-ink-muted';
const input = 'h-10 w-24 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

// Your own check: the shop closes at 12:00.
function afterClosing(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes > 12 * 60;
}

export default function Example() {
  const [pickup, setPickup] = useState('13:30');
  const late = afterClosing(pickup);
  return (
    <TimePicker.Root invalid={late}>
      <div className="grid gap-2">
        <label htmlFor="pickup" className={label}>Pick-up</label>
        <TimePicker.Input
          id="pickup"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
          aria-describedby="pickup-error"
          className={input}
        />
        <p id="pickup-error" className="text-xs text-error-text">{late ? 'The shop closes at 12:00.' : ''}</p>
      </div>
    </TimePicker.Root>
  );
}
```

There is no warning state; a warning is your markup too.

## Read-only and disabled


React (live React example):

```tsx
import { TimePicker } from '@purpurabog/ui/headless';

const input = 'h-10 w-24 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';
const select = 'h-10 border-b border-border-strong-1 bg-field-1 px-2 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:border-transparent data-disabled:text-ink-disabled data-readonly:border-border-subtle-1 data-readonly:bg-transparent';

export default function Example() {
  return (
    <div className="grid gap-6">
      <TimePicker.Root readOnly>
        <div className="grid gap-2">
          <label htmlFor="start" className="text-xs text-ink-muted">Start time</label>
          <div className="flex gap-0.5">
            <TimePicker.Input id="start" defaultValue="9:30" className={input} />
            <TimePicker.Select aria-label="AM or PM" className={select}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </TimePicker.Select>
          </div>
        </div>
      </TimePicker.Root>

      <TimePicker.Root disabled>
        <div className="grid gap-2">
          <label htmlFor="end" className="text-xs text-ink-disabled">End time</label>
          <div className="flex gap-0.5">
            <TimePicker.Input id="end" defaultValue="5:00" className={input} />
            <TimePicker.Select aria-label="AM or PM" defaultValue="PM" className={select}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </TimePicker.Select>
          </div>
        </div>
      </TimePicker.Root>
    </div>
  );
}
```

`readOnly` keeps every value and submits it: the box is read-only, and a select takes focus but doesn't open or change (`aria-readonly`). `disabled` disables the box and every select.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { TimePicker } from '@purpurabog/ui/headless';

export default function Example() {
  const [invalid, setInvalid] = useState(true);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="grid gap-4">
      <TimePicker.Root invalid={invalid} disabled={disabled}>
        <div className="flex gap-0.5">
          <TimePicker.Input aria-label="Time" defaultValue="13:30" className="h-10 w-24 bg-field-1 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error data-disabled:text-ink-disabled" />
          <TimePicker.Select aria-label="AM or PM" className="h-10 bg-field-1 px-2 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:text-ink-disabled data-readonly:bg-transparent">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </TimePicker.Select>
        </div>
      </TimePicker.Root>
      <div className="flex gap-4 text-sm text-ink">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={invalid} onChange={(e) => setInvalid(e.target.checked)} /> invalid
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} /> disabled
        </label>
      </div>
    </div>
  );
}
```
```css
.time-input[data-invalid] { outline: 2px solid #da1e28; }
.time-input[data-disabled],
.time-select[data-disabled] { color: #c6c6c6; }
.time-select[data-readonly] { background: transparent; }
```

## Parts

### TimePicker.Root

Renders no element: it holds `disabled`, `readOnly` and `invalid` for its parts.

| Prop | Type | Default | |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables the box and every select |
| `readOnly` | `boolean` | `false` | Keeps every value |
| `invalid` | `boolean` | `false` | Marks the box `aria-invalid` and `data-invalid` |

### TimePicker.Input

Renders an `<input type="text" autocomplete="off">`. Its `disabled` and `readOnly` come from `Root`.

| Prop | Type | Default | |
|---|---|---|---|
| `pattern` | `string` | `TWELVE_HOUR_PATTERN` | 12-hour `h:mm` / `hh:mm`, an optional space after |
| `maxLength` | `number` | `5` | |

| Attribute | When |
|---|---|
| `data-invalid` | `invalid` on `Root` |
| `data-disabled` | `disabled` on `Root` |
| `data-readonly` | `readOnly` on `Root` |

### TimePicker.Select

Renders a native `<select>`. It is disabled with `Root` or by its own `disabled`.

| Attribute | When |
|---|---|
| `data-disabled` | Disabled |
| `data-readonly` | `readOnly` on `Root` |

`TimePicker.useTimePickerContext()` inside `Root` gives `disabled`, `readOnly` and `invalid`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Enter (in the box) | Submits the form it's in, as a native input does |
| ↑ / ↓, Space, Enter (on a select) | The browser's own select keys; ignored while read-only |

The parts handle:

- Native elements throughout: a text input and `<select>`s.
- `aria-invalid` on the box while `invalid`, and `aria-readonly` on a read-only select.
- A read-only select keeps focus on a mouse press without opening its list.

You add:

- A `<label htmlFor>` for the box, and an `aria-label` for each select (nothing names them for you).
- The error text, linked to the box with `aria-describedby`.
