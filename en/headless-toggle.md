# Headless Toggle

The headless part is named `Switch`, as in Base UI, where "Toggle" means a pressed button. `Switch.Root` is a `<button role="switch">` with `aria-checked`, so Space and Enter flip it. A click focuses it in every browser, Safari included. It adds a read-only state, `onCheckedChange`, form submission through a hidden input, and `data-*` attributes for you to style on.

You own the track and knob styles, the label, the "On" / "Off" text and every style. For the styled version, see [Toggle](https://parntengza.github.io/kanok-ui-docs/en/toggle/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Switch } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Switch } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Switch.Root aria-label="Email alerts" className="relative h-6 w-12 shrink-0 rounded-full bg-toggle-off transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-checked:bg-success">
      <Switch.Thumb className="absolute start-[3px] top-[3px] size-[18px] rounded-full bg-on-primary transition-transform data-checked:translate-x-6 rtl:data-checked:-translate-x-6" />
    </Switch.Root>
  );
}
```

## Anatomy

```tsx
<Switch.Root>
  <Switch.Thumb />
</Switch.Root>
```

## On and off

Hold the state yourself with `checked` and `onCheckedChange`, or give a starting `defaultChecked`. `onCheckedChange` fires after the user flips it.


React (live React example):

```tsx
import { useState } from 'react';
import { Switch } from '@purpurabog/ui/headless';

export default function Example() {
  const [on, setOn] = useState(false);
  return (
    <div className="grid justify-items-start gap-3">
      <Switch.Root aria-label="Email alerts" checked={on} onCheckedChange={setOn} className="relative h-6 w-12 shrink-0 rounded-full bg-toggle-off transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-checked:bg-success">
        <Switch.Thumb className="absolute start-[3px] top-[3px] size-[18px] rounded-full bg-on-primary transition-transform data-checked:translate-x-6 rtl:data-checked:-translate-x-6" />
      </Switch.Root>
      <p className="text-xs text-ink-muted">Checked: {String(on)}</p>
    </div>
  );
}
```

## Label and state text

`Switch` draws no text. Name it with `aria-label` or `aria-labelledby`, and render the state text yourself. Screen readers hear "on" or "off" from the role, so hide the state text from them.


React (live React example):

```tsx
import { useState } from 'react';
import { Switch } from '@purpurabog/ui/headless';

export default function Example() {
  const [on, setOn] = useState(true);
  return (
    <div className="grid justify-items-start gap-3">
      <span id="toggle-visibility" className="text-xs text-ink-muted">Visibility</span>
      <div className="flex items-center gap-2">
        <Switch.Root aria-labelledby="toggle-visibility" checked={on} onCheckedChange={setOn} className="relative h-6 w-12 shrink-0 rounded-full bg-toggle-off transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-checked:bg-success">
          <Switch.Thumb className="absolute start-[3px] top-[3px] size-[18px] rounded-full bg-on-primary transition-transform data-checked:translate-x-6 rtl:data-checked:-translate-x-6" />
        </Switch.Root>
        <span aria-hidden="true" className="text-sm text-ink">{on ? 'Public' : 'Private'}</span>
      </div>
    </div>
  );
}
```

A `<label htmlFor>` pointing at the switch's `id` also works: a click on the label clicks the switch.

## In a form

With a `name`, a checked switch submits `value` (`on` by default) through a hidden input after the button. Off or disabled, it submits nothing. A form reset puts an uncontrolled switch back to `defaultChecked`.


React (live React example):

```tsx
import { useState } from 'react';
import { Switch } from '@purpurabog/ui/headless';

export default function Example() {
  const [sent, setSent] = useState<Record<string, FormDataEntryValue>>();
  return (
    <form
      className="grid justify-items-start gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(Object.fromEntries(new FormData(e.currentTarget)));
      }}
    >
      <Switch.Root aria-label="Auto-renew" name="autoRenew" value="yes" className="relative h-6 w-12 shrink-0 rounded-full bg-toggle-off transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-checked:bg-success">
        <Switch.Thumb className="absolute start-[3px] top-[3px] size-[18px] rounded-full bg-on-primary transition-transform data-checked:translate-x-6 rtl:data-checked:-translate-x-6" />
      </Switch.Root>
      <button type="submit" className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">Submit</button>
      {sent ? <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p> : null}
    </form>
  );
}
```

## Read-only and disabled

- `readOnly` keeps the state and still submits it, but clicks, Space and Enter don't flip it. The switch gets `aria-readonly`.
- `disabled` is the button's own attribute: the switch can't be used and isn't submitted.


React (live React example):

```tsx
import { Switch } from '@purpurabog/ui/headless';

const track = 'relative h-6 w-12 shrink-0 rounded-full bg-toggle-off transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-checked:bg-success data-readonly:cursor-default data-readonly:border data-readonly:border-ink-disabled data-readonly:bg-transparent data-disabled:cursor-not-allowed data-disabled:bg-button-disabled';
const knob = 'absolute start-[3px] top-[3px] size-[18px] rounded-full bg-on-primary transition-transform data-checked:translate-x-6 rtl:data-checked:-translate-x-6 data-readonly:start-[2px] data-readonly:top-[2px] data-readonly:bg-ink data-disabled:bg-on-color-disabled';

export default function Example() {
  return (
    <div className="flex gap-6">
      <Switch.Root aria-label="Auto-renew" defaultChecked readOnly className={track}><Switch.Thumb className={knob} /></Switch.Root>
      <Switch.Root aria-label="Auto-renew" disabled className={track}><Switch.Thumb className={knob} /></Switch.Root>
    </div>
  );
}
```

There are no sizes: the track and the knob are your CSS.

## Style it


React (live React example):

```tsx
import { useId, useState } from 'react';
import { Switch } from '@purpurabog/ui/headless';

function EmailAlerts({ label, ...props }: { label: string; readOnly?: boolean; disabled?: boolean; defaultChecked?: boolean }) {
  const [on, setOn] = useState(!!props.defaultChecked);
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Switch.Root
        {...props}
        aria-labelledby={id}
        onCheckedChange={setOn}
        className="relative h-6 w-12 shrink-0 rounded-full bg-toggle-off transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-checked:bg-success data-readonly:cursor-default data-readonly:border data-readonly:border-ink-disabled data-readonly:bg-transparent data-disabled:cursor-not-allowed data-disabled:bg-button-disabled"
      >
        <Switch.Thumb className="absolute start-[3px] top-[3px] size-[18px] rounded-full bg-on-primary transition-transform data-checked:translate-x-6 rtl:data-checked:-translate-x-6 data-readonly:start-[2px] data-readonly:top-[2px] data-readonly:bg-ink data-disabled:bg-on-color-disabled" />
      </Switch.Root>
      <span id={id} className="text-sm text-ink">{label}</span>
      <span aria-hidden="true" className="text-sm text-ink-muted">{on ? 'On' : 'Off'}</span>
    </div>
  );
}

export default function Example() {
  return (
    <div className="grid gap-3">
      <EmailAlerts label="Email alerts" />
      <EmailAlerts label="Email alerts (read-only)" defaultChecked readOnly />
      <EmailAlerts label="Email alerts (disabled)" disabled />
    </div>
  );
}
```
```css
/* className="track" on Root, "knob" on Thumb */
.track { width: 48px; height: 24px; border-radius: 12px; background: #8d8d8d; }
.track[data-checked] { background: #24a148; }
.track[data-readonly] { background: #e0e0e0; }
.knob { display: block; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: translate 70ms; }
.knob[data-checked] { translate: 24px; }
```

## Parts

### Switch.Root

A `<button type="button" role="switch">`, then a hidden input when `name` is set and the switch is checked and enabled. It takes every button prop except `type`, `role`, `value` and `defaultChecked`.

| Prop | Type | Default | |
|---|---|---|---|
| `checked` | `boolean` | | The state (controlled) |
| `defaultChecked` | `boolean` | `false` | The starting state (uncontrolled) |
| `onCheckedChange` | `(checked: boolean, event: MouseEvent<HTMLButtonElement>) => void` | | After the user flips it |
| `readOnly` | `boolean` | `false` | Keeps the state: a click, Space or Enter changes nothing (`aria-readonly`) |
| `name` | `string` | | A checked switch submits `value` with its form |
| `value` | `string` | `'on'` | Submitted while checked |

| Attribute | When |
|---|---|
| `data-checked` | On |
| `data-disabled` | Disabled |
| `data-readonly` | Read-only |

`Switch.useSwitchContext()` returns `checked`, `disabled` and `readOnly` to any component inside `Root`.

### Switch.Thumb

A `<span aria-hidden="true">` inside `Root`, for the knob. It has the same `data-checked`, `data-disabled` and `data-readonly` as `Root`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Space, Enter | Flips the switch |
| Tab | Moves to the next control |

The part sets `role="switch"`, `aria-checked` and `aria-readonly`, and focuses the switch on a click.

You add:

- A name: `aria-label`, `aria-labelledby`, or a `<label htmlFor>`.
- The state text, hidden from screen readers.
- A visible focus style.
- Write the label as the setting ("Email alerts"), not as an action ("Turn on email alerts").
