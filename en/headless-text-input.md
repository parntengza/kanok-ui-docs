# Headless Text input

`TextInput` is the behaviour of the styled [Text input](https://parntengza.github.io/kanok-ui-docs/en/text-input/) as unstyled React parts: an `<input>`, a button that shows or hides a password, and a mask that formats the value as the user types.

You own the markup: the label, the helper and error text, a prefix or suffix, sizes and every style. The parts set `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { TextInput } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { TextInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [name, setName] = useState('');
  return (
    <div className="grid max-w-xs gap-2">
      <TextInput.Root value={name}>
        <label htmlFor="name" className="text-xs text-ink-muted">Full name</label>
        <TextInput.Input
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
      </TextInput.Root>
      <p className="text-xs text-ink-muted">Value: {name}</p>
    </div>
  );
}
```

`type`, `value`, `defaultValue` and `disabled` go on `Root`, not on `Input`.

## Anatomy

```tsx
<TextInput.Root>
  <TextInput.Input />
  <TextInput.PasswordToggle />
</TextInput.Root>
```

## Label and helper text

The label and the message line are your own elements. Tie them to the input with `htmlFor` and `aria-describedby`.


React (live React example):

```tsx
import { TextInput } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <TextInput.Root>
        <label htmlFor="full-name" className="text-xs text-ink-muted">Full name</label>
        <TextInput.Input
          id="full-name"
          name="name"
          aria-describedby="full-name-help"
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
        <p id="full-name-help" className="text-xs text-ink-helper">As it appears on your ID card</p>
      </TextInput.Root>
    </div>
  );
}
```

## Passwords

With `type="password"`, `PasswordToggle` shows or hides the text. Name the button with what a press does next ("Show password", then "Hide password"); it has no `aria-pressed`. Read `visible` from `useTextInputContext()`. `onVisibleChange` runs on each press with the new state.


React (live React example):

```tsx
import { useState } from 'react';
import { TextInput } from '@purpurabog/ui/headless';

function PasswordToggle() {
  // name it with what a press does next
  const { visible } = TextInput.useTextInputContext();
  return (
    <TextInput.PasswordToggle className="shrink-0 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
      {visible ? 'Hide password' : 'Show password'}
    </TextInput.PasswordToggle>
  );
}

export default function Example() {
  const [last, setLast] = useState('not pressed yet');
  return (
    <div className="grid max-w-sm gap-2">
      <TextInput.Root type="password" onVisibleChange={(visible) => setLast(visible ? 'shown' : 'hidden')}>
        <label htmlFor="password" className="text-xs text-ink-muted">Password</label>
        <div className="flex border-b border-border-strong-1 bg-field-1">
          <TextInput.Input
            id="password"
            name="password"
            autoComplete="current-password"
            className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
          />
          <PasswordToggle />
        </div>
      </TextInput.Root>
      <p className="text-xs text-ink-muted">onVisibleChange: {last}</p>
    </div>
  );
}
```

For a controlled toggle, pass `visible` and update it in `onVisibleChange`.

## Masks

`mask` on `Root` formats the value as the user types: `0` is a digit, `a` a letter, `*` either, and any other character is a separator added for the user. `\` makes a pattern character a separator.


React (live React example):

```tsx
import { useState } from 'react';
import { TextInput } from '@purpurabog/ui/headless';

export default function Example() {
  const [citizenId, setCitizenId] = useState('');
  return (
    <div className="grid max-w-xs gap-2">
      {/* a prefix or suffix is your own markup next to the input */}
      <TextInput.Root mask="0-0000-00000-00-0">
        <label htmlFor="citizen-id" className="text-xs text-ink-muted">Citizen ID</label>
        <TextInput.Input
          id="citizen-id"
          name="citizenId"
          aria-describedby="citizen-id-help"
          onChange={(_event, raw) => setCitizenId(raw)}
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
        <p id="citizen-id-help" className="text-xs text-ink-helper">13 digits: 0-0000-00000-00-0</p>
      </TextInput.Root>
      <p className="text-xs text-ink-muted">Raw value: {citizenId}</p>
    </div>
  );
}
```

- The input and the submitted form get the formatted text (`1-2345-67890-12-3`). `Input`'s `onChange` gets the value without separators (`1234567890123`) as its second argument, after the field has been reformatted.
- An edit is reformatted in place and the caret stays where it was. Nothing is reformatted while an input method is still composing.
- A `value` or `defaultValue` your code sets, raw or formatted, shows formatted.
- A mask of digits only sets `inputMode="numeric"`, unless you pass your own `inputMode`.

`TextInput` has no character counter. [Headless Text area](https://parntengza.github.io/kanok-ui-docs/en/headless-text-area/)'s `Counter` part is the one to borrow.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { TextInput } from '@purpurabog/ui/headless';

function PasswordToggle({ className }: { className?: string }) {
  const { visible } = TextInput.useTextInputContext();
  return <TextInput.PasswordToggle className={className}>{visible ? 'Hide password' : 'Show password'}</TextInput.PasswordToggle>;
}

export default function Example() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="grid max-w-sm gap-2">
      <TextInput.Root type="password" disabled={disabled}>
        <label htmlFor="style-password" className="text-xs text-ink-muted">Password</label>
        <div className="flex border-b border-border-strong-1 bg-field-1">
          <TextInput.Input
            id="style-password"
            className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled"
          />
          <PasswordToggle className="shrink-0 px-4 text-sm text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-visible:text-link" />
        </div>
      </TextInput.Root>
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
        Disabled
      </label>
    </div>
  );
}
```
```css
input[data-disabled] { color: #a8a8a8; cursor: not-allowed; }
button[data-visible] { color: #0f62fe; }
button[data-disabled] { cursor: not-allowed; }
```

## Parts

### TextInput.Root

Renders no element; it holds the state for the other parts.

| Prop | Type | Default | |
|---|---|---|---|
| `type` | `string` | `'text'` | The input's type. `password` hides the text until `PasswordToggle` shows it. |
| `value` | `string \| number \| readonly string[]` | — | The value (controlled). |
| `defaultValue` | `string \| number \| readonly string[]` | — | The starting value (uncontrolled). |
| `mask` | `string` | — | The format to type into. |
| `disabled` | `boolean` | `false` | Turns off the input and the toggle. |
| `visible` | `boolean` | — | Whether the password shows (controlled). |
| `defaultVisible` | `boolean` | `false` | Whether the password shows at first. |
| `onVisibleChange` | `(visible: boolean, event) => void` | — | Each press of `PasswordToggle`, with the new state. |

### TextInput.Input

Renders an `<input>`. It takes every `<input>` prop except `type`, `value`, `defaultValue` and `disabled`, which come from `Root`.

| Prop | Type | Default | |
|---|---|---|---|
| `onChange` | `(event, raw: string) => void` | — | The change, after the mask reformatted it. `raw` is the value without separators (the value itself without a mask). |

| Attribute | When |
|---|---|
| `data-visible` | The type is `password` and the password shows |
| `data-disabled` | `Root` is disabled |

### TextInput.PasswordToggle

Renders a `<button type="button">`. It adds no props. It is off while `Root` is disabled or you pass `disabled`.

| Attribute | When |
|---|---|
| `data-visible` | The password shows |
| `data-disabled` | The button is off |

### TextInput.useTextInputContext()

Returns the state of the enclosing `Root`: `visible`, `value` (as shown, formatted), `type`, `mask` and `disabled`. Call it in a component inside `Root`.

## Keyboard and accessibility

- `Input` is a native `<input>`: Enter submits its form.
- `PasswordToggle` is a native button, so Enter and Space press it. It has `type="button"`, so it never submits the form.
- You add the `<label>`, the `aria-describedby` to the helper or error text, and `aria-invalid` when the value is wrong.
- Give the toggle a name that says what the next press does, as text or `aria-label`.
- Write the mask's format in the helper text, so people know it before they type.
