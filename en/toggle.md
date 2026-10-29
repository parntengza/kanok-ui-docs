# Toggle

A toggle switches a setting on or off, and the change takes effect right away. The label sits above the switch and the state text beside it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <ui-toggle label="Email alerts" checked></ui-toggle>
  <ui-toggle label="Auto-renew"></ui-toggle>
  <ui-toggle label="Locked" checked disabled></ui-toggle>
</div>
```

React:

```tsx
<UiToggle label="Email alerts" checked />
<UiToggle label="Auto-renew" />
<UiToggle label="Locked" checked disabled />
```

React + Tailwind:

```tsx
<Toggle label="Email alerts" defaultChecked />
<Toggle label="Auto-renew" />
<Toggle label="Locked" defaultChecked disabled />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/toggle
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-toggle
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/toggle.json
#    to its target:
#    components/ui/primitives/toggle/toggle-skeleton.ts
#    components/ui/primitives/toggle/toggle.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-toggle.json
#    to its target:
#    components/ui/react-tw/toggle.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-field, tw-i18n, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/toggle';</script>

<ui-toggle label="Email alerts"></ui-toggle>
```

React:

```tsx
import { UiToggle } from '@purpurabog/ui/react';

<UiToggle label="Email alerts" />
```

React + Tailwind:

```tsx
import { Toggle } from '@/components/ui/react-tw/toggle';

<Toggle label="Email alerts" />
```

## Toggle or checkbox?

Use a toggle when the change applies at once, such as a setting. In a form that the user submits later, or for agreeing to terms, use a [Checkbox](https://parntengza.github.io/kanok-ui-docs/en/checkbox/).

## On and off

`checked` is the state. `change` fires after the user flips it, with `checked` already updated.


HTML:

```html
<ui-toggle id="toggle-alerts" label="Email alerts"></ui-toggle>
<p>Email alerts: <output id="toggle-alerts-out">off</output></p>

<script type="module">
  const alerts = document.getElementById('toggle-alerts');
  alerts.addEventListener('change', () => {
    document.getElementById('toggle-alerts-out').textContent = alerts.checked ? 'on' : 'off';
    // saveSetting('alerts', alerts.checked);
  });
</script>
```

React:

```tsx
import type { UiToggle as ToggleElement } from '@purpurabog/ui';

<UiToggle label="Email alerts" checked={on} onChange={(e) => setOn((e.target as ToggleElement).checked)} />
<p>Email alerts: <output>{on ? 'on' : 'off'}</output></p>
```

React + Tailwind:

```tsx
<Toggle label="Email alerts" checked={on} onCheckedChange={setOn} />
<p>Email alerts: <output>{on ? 'on' : 'off'}</output></p>
```

`saveSetting` stands for your own code.

## Labels

- `label` is the text above the switch (the `label` slot takes markup).
- `label-a` and `label-b` are the state text beside it, for off and on. By default it reads "Off" / "On", translated to the page language.
- `hide-label` drops the label above; the label then replaces the state text beside the switch, as in Carbon.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <ui-toggle label="Visibility" label-a="Private" label-b="Public"></ui-toggle>
  <ui-toggle label="Dark mode" hide-label></ui-toggle>
</div>
```

React:

```tsx
<UiToggle label="Visibility" labelA="Private" labelB="Public" />
<UiToggle label="Dark mode" hideLabel />
```

React + Tailwind:

```tsx
<Toggle label="Visibility" labelA="Private" labelB="Public" />
<Toggle label="Dark mode" hideLabel />
```

## Markup in the label

When part of the label needs weight, put it in the `label` slot; it replaces the `label` attribute. In React + Tailwind, `label` takes the markup itself.


HTML:

```html
<ui-toggle>
  <span slot="label">Copy <strong>Procurement</strong> on new purchase requests</span>
</ui-toggle>
```

React:

```tsx
<UiToggle>
  <span slot="label">Copy <strong>Procurement</strong> on new purchase requests</span>
</UiToggle>
```

React + Tailwind:

```tsx
<Toggle label={<>Copy <strong>Procurement</strong> on new purchase requests</>} />
```

## Sizes

`size`: `md` is a 48×24 track (the default); `sm` is 32×16, with a check mark in the knob when on.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <ui-toggle label="Medium" checked></ui-toggle>
  <ui-toggle label="Small" size="sm" checked></ui-toggle>
</div>
```

React:

```tsx
<UiToggle label="Medium" checked />
<UiToggle label="Small" size="sm" checked />
```

React + Tailwind:

```tsx
<Toggle label="Medium" defaultChecked />
<Toggle label="Small" size="sm" defaultChecked />
```

## A list of settings

For a list of related settings, put small toggles with `hide-label` in a form group, so each label sits beside its switch. When one setting turns the others off, disable the group: `disabled` on `ui-form-group` (`FormGroup` in React + Tailwind) disables every toggle inside.


HTML:

```html
<ui-toggle id="toggle-notify" label="Email notifications" checked></ui-toggle>
<ui-form-group id="toggle-notify-group" legend="Send me an email when">
  <div style="display: grid; gap: 16px">
    <ui-toggle size="sm" hide-label label="A purchase request needs my approval" checked></ui-toggle>
    <ui-toggle size="sm" hide-label label="A contract is about to expire" checked></ui-toggle>
    <ui-toggle size="sm" hide-label label="Someone comments on my request"></ui-toggle>
  </div>
</ui-form-group>

<script type="module">
  const notify = document.getElementById('toggle-notify');
  const group = document.getElementById('toggle-notify-group');
  notify.addEventListener('change', () => { group.disabled = !notify.checked; });
</script>
```

React:

```tsx
import { UiFormGroup, UiToggle } from '@purpurabog/ui/react';

<UiToggle label="Email notifications" checked={notify} onChange={(e) => setNotify((e.target as ToggleElement).checked)} />
<UiFormGroup legend="Send me an email when" disabled={!notify}>
  <div style={{ display: 'grid', gap: 16 }}>
    <UiToggle size="sm" hideLabel label="A purchase request needs my approval" checked />
    <UiToggle size="sm" hideLabel label="A contract is about to expire" checked />
    <UiToggle size="sm" hideLabel label="Someone comments on my request" />
  </div>
</UiFormGroup>
```

React + Tailwind:

```tsx
import { FormGroup } from '@/components/ui/react-tw/form-group';

<Toggle label="Email notifications" checked={notify} onCheckedChange={setNotify} />
<FormGroup legend="Send me an email when" disabled={!notify}>
  <div className="grid gap-4">
    <Toggle size="sm" hideLabel label="A purchase request needs my approval" defaultChecked />
    <Toggle size="sm" hideLabel label="A contract is about to expire" defaultChecked />
    <Toggle size="sm" hideLabel label="Someone comments on my request" />
  </div>
</FormGroup>
```

## State text in the page language

The default state text comes from the language of the page, or of the closest `lang` around the toggle. Set `lang` on the toggle, or on a part of the page, to change it there.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <ui-toggle label="Email alerts" checked></ui-toggle>
  <ui-toggle lang="th" label="แจ้งเตือนทางอีเมล" checked></ui-toggle>
</div>
```

React:

```tsx
<UiToggle label="Email alerts" checked />
<UiToggle lang="th" label="แจ้งเตือนทางอีเมล" checked />
```

React + Tailwind:

```tsx
<Toggle label="Email alerts" defaultChecked />
<Toggle lang="th" label="แจ้งเตือนทางอีเมล" defaultChecked />
```

## In a form

With a `name`, a toggle that is on submits `value` (`on` by default) with its form; off, it submits nothing. Form reset puts it back to its starting state.


HTML:

```html
<form id="toggle-form" method="dialog" style="display: grid; gap: 16px; justify-items: start">
  <ui-toggle label="Auto-renew" name="autoRenew" value="yes" checked></ui-toggle>
  <ui-toggle label="Paper invoice" name="paperInvoice" value="yes"></ui-toggle>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <ui-button type="submit">Save</ui-button>
    <ui-button type="reset" kind="secondary">Reset</ui-button>
  </div>
</form>
<p>Submitted: <output id="toggle-form-out">nothing yet</output></p>

<script type="module">
  const form = document.getElementById('toggle-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(([key, value]) => `${key}=${value}`);
    document.getElementById('toggle-form-out').textContent = entries.join(', ') || '(nothing)';
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
  <UiToggle label="Auto-renew" name="autoRenew" value="yes" checked />
  <UiToggle label="Paper invoice" name="paperInvoice" value="yes" />
  <UiButton type="submit">Save</UiButton>
  <UiButton type="reset" kind="secondary">Reset</UiButton>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
  <Toggle label="Auto-renew" name="autoRenew" value="yes" defaultChecked />
  <Toggle label="Paper invoice" name="paperInvoice" value="yes" />
  <Button type="submit">Save</Button>
  <Button type="reset" kind="secondary">Reset</Button>
</form>
```

`save` stands for your own code.

## Read-only and disabled

`readonly` (`readOnly` in React + Tailwind) shows the state and submits it, but clicks and keys don't flip it. `disabled` greys it out, and it isn't submitted.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <ui-toggle label="Auto-renew" checked readonly></ui-toggle>
  <ui-toggle label="Auto-renew" disabled></ui-toggle>
</div>
```

React:

```tsx
<UiToggle label="Auto-renew" checked readonly />
<UiToggle label="Auto-renew" disabled />
```

React + Tailwind:

```tsx
<Toggle label="Auto-renew" defaultChecked readOnly />
<Toggle label="Auto-renew" disabled />
```

## Skeleton

While the settings load, show `<ui-toggle-skeleton>` in the toggle's place, as Carbon's `ToggleSkeleton`. It has its own import, `@purpurabog/ui/toggle-skeleton`, and is hidden from screen readers.


HTML:

```html
<ui-toggle-skeleton></ui-toggle-skeleton>
```

React:

```tsx
import { UiToggleSkeleton } from '@purpurabog/ui/react';

<UiToggleSkeleton />
```

React + Tailwind:

```tsx
import { ToggleSkeleton } from '@/components/ui/react-tw/toggle';

<ToggleSkeleton />
```

## Keyboard

| Key | Does |
|---|---|
| Space, Enter | Flips the toggle |
| Tab | Moves to the next control |

## Accessibility

- The switch is a `<button role="switch">` with `aria-checked`, named by the label above (or, with `hide-label`, by the label beside it). Screen readers hear "on" or "off" from the role, so the state text beside it is hidden from them.
- Clicking the track or the state text flips the switch, as in Carbon, and focus stays on it.
- Write the label as the setting ("Email alerts"), not as an action ("Turn on email alerts").

Unstyled React parts with the same behaviour: [Headless Toggle](https://parntengza.github.io/kanok-ui-docs/en/headless-toggle/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-toggle>` · React `UiToggle`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Label above the switch; the `label` slot replaces it when markup is needed. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Hide the label above; it then replaces the On / Off text beside the switch (Carbon `hideLabel`). |
| `label-a` | `labelA` | `string` | `''` | Side text while off (Carbon `labelA`). |
| `label-b` | `labelB` | `string` | `''` | Side text while on (Carbon `labelB`). |
| `checked` | `checked` | `boolean` | `false` |  |
| `value` | `value` | `string` | `'on'` | Submitted under `name` while checked. |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `ToggleSize` | `'md'` | md: 48×24 track (default) · sm: 32×16 with a check mark in the knob. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the state but blocks toggling. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Events

| Event | React | Description |
|---|---|---|
| `input` | none (use a ref) |  |
| `change` | none (use a ref) | After the user toggles it (`checked` already updated) |

#### Slots

| Slot | Description |
|---|---|
| `label` | Label content with markup; the `label` attribute is the plain-text fallback |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The row holding the switch and the side text |
| `label` | The label above the switch |
| `switch` | The track |
| `handle` | The knob |
| `text` | The On / Off text beside the switch |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-toggle-on` |  | Track colour when on (default `--ui-success`; Kanok: `--ui-primary`) |


