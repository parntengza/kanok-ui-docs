# Headless Checkbox

`Checkbox.Root` is the native `<input type="checkbox">` with no styles, so form submission, `required`, Space, labels and screen readers come from the browser. On top of that it adds `indeterminate` as a prop, a read-only state, `onCheckedChange`, and `data-*` attributes for you to style on.

You own the `<label>`, the box you draw, any group around the boxes, any helper or error message, and every style. For the styled version, see [Checkbox](https://parntengza.github.io/kanok-ui-docs/en/checkbox/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Checkbox } from '@purpurabog/ui/headless';
```

## Use it

Hide the input over a box you draw beside it, and wrap both in a `<label>` so the whole row is clickable:


React (live React example):

```tsx
import { Checkbox } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <label className="relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink">
      <Checkbox.Root name="terms" required className="peer sr-only" />
      <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse">
        <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
      </span>
      I accept the terms
    </label>
  );
}
```

## Anatomy

```tsx
<label>
  <Checkbox.Root />
  {/* your box and text */}
</label>
```

## Checked state

Hold the state yourself with `checked` and `onCheckedChange` (or `onChange`), or give a starting `defaultChecked`. A checked box submits `value` (`on` by default) under `name`; an unchecked box submits nothing. A form reset puts an uncontrolled box back to `defaultChecked`, and `data-checked` follows.


React (live React example):

```tsx
import { useState } from 'react';
import { Checkbox } from '@purpurabog/ui/headless';

// the box drawn after the hidden input (a peer of it)
function Box() {
  return (
    <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse">
      <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
    </span>
  );
}

export default function Example() {
  const [on, setOn] = useState(false);
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid justify-items-start gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <label className="relative flex cursor-pointer items-center gap-2 text-sm text-ink">
        <Checkbox.Root name="newsletter" value="yes" checked={on} onCheckedChange={setOn} className="peer sr-only" />
        <Box />
        Send me the newsletter
      </label>
      <p className="text-xs text-ink-muted">Checked: {String(on)}</p>
      <button type="submit" className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Submit</button>
      {sent ? <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p> : null}
    </form>
  );
}
```

## A group of checkboxes

There is no group part. Use a `<fieldset>` and `<legend>`, lay the boxes out yourself, and check "at least one" in your own validation. Each box submits its own `name` and `value`, so read them with `FormData.getAll()`.


React (live React example):

```tsx
import { useState } from 'react';
import { Checkbox } from '@purpurabog/ui/headless';

const docs = [
  { value: 'id', label: 'ID card' },
  { value: 'house', label: 'House registration' },
  { value: 'bank', label: 'Bank book' },
];

function Box() {
  return (
    <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse">
      <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
    </span>
  );
}

export default function Example() {
  const [sent, setSent] = useState<FormDataEntryValue[]>();
  return (
    <form
      className="grid justify-items-start gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(new FormData(e.currentTarget).getAll('docs'));
      }}
    >
      <fieldset className="flex flex-wrap gap-x-6 gap-y-2">
        <legend className="mb-2 text-xs text-ink-muted">Documents received</legend>
        {docs.map((d) => (
          <label key={d.value} className="relative flex cursor-pointer items-center gap-2 text-sm text-ink">
            <Checkbox.Root name="docs" value={d.value} className="peer sr-only" />
            <Box />
            {d.label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Submit</button>
      {sent ? <p className="text-xs text-ink-muted">Sent: docs = {JSON.stringify(sent)}</p> : null}
    </form>
  );
}
```

## Indeterminate

`indeterminate` shows the mixed state of a parent box whose children are partly checked. It is set as the DOM property, so screen readers hear "mixed". Keep the parent in step with its children in your code:


React (live React example):

```tsx
import { useState } from 'react';
import { Checkbox } from '@purpurabog/ui/headless';

// checked: a check; indeterminate: a dash (its ::after)
function Box() {
  return (
    <span aria-hidden="true" className="relative grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent after:absolute after:top-[6px] after:left-[3px] after:hidden after:h-0.5 after:w-2 after:bg-icon-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse peer-data-indeterminate:bg-ink peer-data-indeterminate:after:block">
      <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
    </span>
  );
}

const row = 'relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink';
const all = ['email', 'sms'];

export default function Example() {
  const [chosen, setChosen] = useState(['email']);
  const some = chosen.length > 0 && chosen.length < all.length;
  const pick = (value: string, on: boolean) => setChosen((c) => (on ? [...c, value] : c.filter((v) => v !== value)));
  return (
    <div className="grid gap-2">
      <label className={row}>
        <Checkbox.Root checked={chosen.length === all.length} indeterminate={some} onCheckedChange={(on) => setChosen(on ? all : [])} className="peer sr-only" />
        <Box />
        All channels
      </label>
      <div className="grid gap-2 ps-6">
        <label className={row}>
          <Checkbox.Root checked={chosen.includes('email')} onCheckedChange={(on) => pick('email', on)} className="peer sr-only" />
          <Box />
          Email
        </label>
        <label className={row}>
          <Checkbox.Root checked={chosen.includes('sms')} onCheckedChange={(on) => pick('sms', on)} className="peer sr-only" />
          <Box />
          SMS
        </label>
      </div>
    </div>
  );
}
```

## No visible label

When the context already names the box, such as a checkbox in a table row, give it an `aria-label` instead of label text:


React (live React example):

```tsx
import { Checkbox } from '@purpurabog/ui/headless';

const contracts = ['Lease, Silom', 'Sale, Asok', 'Mortgage, Chiang Mai'];

export default function Example() {
  return (
    <table className="w-full max-w-sm text-sm text-ink">
      <tbody>
        {contracts.map((contract, i) => (
          <tr key={contract} className="border-b border-border-subtle-1">
            <td className="w-10 p-3">
              <label className="relative flex w-fit cursor-pointer">
                <Checkbox.Root aria-label={`Select row ${i + 1}`} className="peer sr-only" />
                <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse">
                  <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
                </span>
              </label>
            </td>
            <td className="p-3">{contract}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## Read-only and disabled

- `readOnly` keeps the state and still submits it, but a click or Space changes nothing. The input gets `aria-readonly`. The click is blocked before your `onClick` runs, so your handler sees `event.defaultPrevented`.
- `disabled` is the native attribute: the box can't be used and isn't submitted.


React (live React example):

```tsx
import { Checkbox } from '@purpurabog/ui/headless';

// read-only: a grey frame and a dark check; disabled: everything greyed
function Box() {
  return (
    <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse peer-data-readonly:border-ink-subtle peer-data-readonly:peer-data-checked:bg-transparent peer-data-readonly:peer-data-checked:text-ink peer-data-disabled:border-ink-disabled peer-data-disabled:peer-data-checked:bg-ink-disabled">
      <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
    </span>
  );
}

const row = 'relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink has-data-readonly:cursor-default has-data-disabled:cursor-not-allowed has-data-disabled:text-ink-disabled';

export default function Example() {
  return (
    <div className="grid gap-2">
      <label className={row}>
        <Checkbox.Root defaultChecked readOnly className="peer sr-only" />
        <Box />
        Signed by both parties
      </label>
      <label className={row}>
        <Checkbox.Root disabled className="peer sr-only" />
        <Box />
        Archived
      </label>
    </div>
  );
}
```

`invalid` sets `aria-invalid` and `data-invalid`. The error text is yours ([Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/)).

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { Checkbox } from '@purpurabog/ui/headless';

function Box() {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-4 shrink-0 place-items-center rounded-xs border border-ink text-transparent after:absolute after:top-[6px] after:left-[3px] after:hidden after:h-0.5 after:w-2 after:bg-icon-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-ink peer-data-checked:text-icon-inverse peer-data-indeterminate:bg-ink peer-data-indeterminate:after:block peer-data-invalid:border-2 peer-data-invalid:border-error peer-data-readonly:border-ink-subtle peer-data-disabled:border-ink-disabled peer-data-disabled:peer-data-checked:bg-ink-disabled"
    >
      <svg viewBox="0 0 16 16" className="size-3.5 fill-current"><path d="M6 10.6 2.7 7.3 2 8l4 4 8-8-.7-.7z" /></svg>
    </span>
  );
}

const row = 'relative flex w-fit cursor-pointer items-center gap-2 text-sm text-ink has-data-disabled:cursor-not-allowed has-data-disabled:text-ink-disabled';

export default function Example() {
  const [accepted, setAccepted] = useState(false);
  return (
    <div className="grid gap-2">
      <label className={row}>
        <Checkbox.Root checked={accepted} onCheckedChange={setAccepted} invalid={!accepted} aria-describedby={accepted ? undefined : 'terms-style-error'} className="peer sr-only" />
        <Box />
        I accept the terms
      </label>
      {accepted ? null : <p id="terms-style-error" className="ps-6 text-xs text-error-text">Accept the terms to go on</p>}
      <label className={row}>
        <Checkbox.Root defaultChecked disabled className="peer sr-only" />
        <Box />
        Email me (disabled)
      </label>
    </div>
  );
}
```
```css
/* className="box" on the span you draw after the input */
input[data-checked] + .box { background: #161616; }
input[data-indeterminate] + .box { background: #6f6f6f; }
input[data-invalid] + .box { border-color: #da1e28; }
input[data-readonly] + .box { border-color: #c6c6c6; }
input:focus-visible + .box { outline: 2px solid #0f62fe; }
```

## Parts

### Checkbox.Root

An `<input type="checkbox">`. It takes every input prop except `type`.

| Prop | Type | Default | |
|---|---|---|---|
| `indeterminate` | `boolean` | `false` | The mixed state, set as the DOM property |
| `readOnly` | `boolean` | `false` | Keeps the state: a click or Space changes nothing (`aria-readonly`) |
| `invalid` | `boolean` | | `aria-invalid` and `data-invalid` |
| `onCheckedChange` | `(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void` | | After the user checks or unchecks it |

| Attribute | When |
|---|---|
| `data-checked` | Checked |
| `data-indeterminate` | `indeterminate` is set |
| `data-disabled` | Disabled |
| `data-readonly` | Read-only |
| `data-invalid` | `invalid` is set |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Space | Checks or unchecks the focused box |
| Tab | Moves to the next box: each checkbox is its own Tab stop |

The browser gives the role, the checked and mixed state, focus and Space. The part adds `aria-readonly` and `aria-invalid`.

You add:

- A label: wrap the input in a `<label>`, or give it `aria-label`.
- A `<fieldset>` and `<legend>` around a group.
- Helper and error text, linked with `aria-describedby`.
- A visible focus style on the box you draw (the input itself is hidden).
