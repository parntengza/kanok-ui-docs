# Button

A button starts an action: save, submit, open a dialog. For going to another page, give it an `href` and it becomes a real link.

Every example below comes in three versions: the web component (HTML, any framework), the React wrapper (`@purpurabog/ui/react`) and the React + Tailwind copy (shadcn). Pick a tab once and the whole site follows.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/button
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-button
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/button.json
#    to its target:
#    components/ui/primitives/button/button-skeleton.ts
#    components/ui/primitives/button/button.styles.ts
#    components/ui/primitives/button/button.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-button, shared-element, shared-field, shared-form-control, shared-localize, shared-navigate, shared-skeleton, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install class-variance-authority@0.7.1
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-button.json
#    to its target:
#    components/ui/react-tw/button.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-button, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/button';</script>

<ui-button kind="primary" type="submit">Save</ui-button>
```

React:

```tsx
// npm i @purpurabog/ui lit @lit/react
import { UiButton } from '@purpurabog/ui/react';

<UiButton kind="primary" type="submit">Save</UiButton>
```

React + Tailwind:

```tsx
import { Button } from '@/components/ui/react-tw/button';

<Button kind="primary" type="submit">Save</Button>
```

## Pick a kind


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button>Save</ui-button>
  <ui-button kind="secondary">Cancel</ui-button>
  <ui-button kind="tertiary">Export</ui-button>
  <ui-button kind="ghost">Learn more</ui-button>
  <ui-button kind="danger">Delete</ui-button>
</div>
```

React:

```tsx
<UiButton>Save</UiButton>
<UiButton kind="secondary">Cancel</UiButton>
<UiButton kind="tertiary">Export</UiButton>
<UiButton kind="ghost">Learn more</UiButton>
<UiButton kind="danger">Delete</UiButton>
```

React + Tailwind:

```tsx
<Button>Save</Button>
<Button kind="secondary">Cancel</Button>
<Button kind="tertiary">Export</Button>
<Button kind="ghost">Learn more</Button>
<Button kind="danger">Delete</Button>
```

| Kind | Use it for |
|---|---|
| `primary` | The one main action of a page or dialog |
| `secondary` | The action next to the primary one (Cancel, Back) |
| `tertiary` | A less important action that still needs a visible border |
| `ghost` | Quiet actions in toolbars, tables and next to other content |
| `danger`, `danger-tertiary`, `danger-ghost` | Actions that delete or can't be undone |

Use one primary button per area. `kind` is Carbon's name; `variant` works as an alias on the web component.

## Danger buttons

Use a danger kind for an action that deletes something or can't be undone: `danger` for the main action of a confirm dialog, `danger-tertiary` and `danger-ghost` next to other content. Add a danger description: screen readers hear it after the name, so the warning isn't carried by the red colour alone.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button kind="danger" danger-description="Deletes the contract for good">Delete contract</ui-button>
  <ui-button kind="danger-tertiary" danger-description="This can't be undone">End the lease</ui-button>
  <ui-button kind="danger-ghost" danger-description="This can't be undone">Remove signer</ui-button>
</div>
```

React:

```tsx
<UiButton kind="danger" dangerDescription="Deletes the contract for good">Delete contract</UiButton>
<UiButton kind="danger-tertiary" dangerDescription="This can't be undone">End the lease</UiButton>
<UiButton kind="danger-ghost" dangerDescription="This can't be undone">Remove signer</UiButton>
```

React + Tailwind:

```tsx
<Button kind="danger" dangerDescription="Deletes the contract for good">Delete contract</Button>
<Button kind="danger-tertiary" dangerDescription="This can't be undone">End the lease</Button>
<Button kind="danger-ghost" dangerDescription="This can't be undone">Remove signer</Button>
```

## Sizes

`size`: `sm` 32px, `md` 40px, `lg` 48px (the default), `xl` 64px, `2xl` 80px. In forms, match the field height (`md` for 40px fields). On `xl` and `2xl` the label stays at the top, as in Carbon.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button size="sm">Small</ui-button>
  <ui-button size="md">Medium</ui-button>
  <ui-button>Large</ui-button>
  <ui-button size="xl">Extra large</ui-button>
  <ui-button size="2xl">2X large</ui-button>
</div>
```

React:

```tsx
<UiButton size="sm">Small</UiButton>
<UiButton size="md">Medium</UiButton>
<UiButton>Large</UiButton>
<UiButton size="xl">Extra large</UiButton>
<UiButton size="2xl">2X large</UiButton>
```

React + Tailwind:

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button>Large</Button>
<Button size="xl">Extra large</Button>
<Button size="2xl">2X large</Button>
```

## Full width

`full-width` stretches the button to the width of its container. Use it for the only action at the foot of a narrow form or a phone screen.


HTML:

```html
<ui-button full-width>Send for approval</ui-button>
```

React:

```tsx
<UiButton fullWidth>Send for approval</UiButton>
```

React + Tailwind:

```tsx
<Button fullWidth>Send for approval</Button>
```

## Button set

`<ui-button-set>` puts buttons side by side, each up to 196px wide, with a thin line between them: Carbon's footer of a form or side panel. Put the secondary button first. `stacked` gives each button its own row, for a narrow panel.


HTML:

```html
<ui-button-set>
  <ui-button kind="secondary">Cancel</ui-button>
  <ui-button>Save</ui-button>
</ui-button-set>
<div style="max-width: 196px">
  <ui-button-set stacked>
    <ui-button>Approve</ui-button>
    <ui-button kind="secondary">Request changes</ui-button>
  </ui-button-set>
</div>
```

React:

```tsx
import { UiButton, UiButtonSet } from '@purpurabog/ui/react';

<UiButtonSet>
  <UiButton kind="secondary">Cancel</UiButton>
  <UiButton>Save</UiButton>
</UiButtonSet>
<UiButtonSet stacked>
  <UiButton>Approve</UiButton>
  <UiButton kind="secondary">Request changes</UiButton>
</UiButtonSet>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-button-set
import { ButtonSet } from '@/components/ui/react-tw/button-set';

<ButtonSet>
  <Button kind="secondary">Cancel</Button>
  <Button>Save</Button>
</ButtonSet>
<ButtonSet stacked>
  <Button>Approve</Button>
  <Button kind="secondary">Request changes</Button>
</ButtonSet>
```

## Icons

The web component takes an icon in its `prefix` or `suffix` slot; the React + Tailwind button takes a trailing `icon` only. Carbon puts the icon at the end, and a ghost button that moves on to more detail often ends in a chevron. For a button with only an icon, see [icon-only buttons](#icon-only-buttons).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button kind="primary">Add
    <svg slot="suffix" viewBox="0 0 16 16"><path d="M8.5 7.5V3h-1v4.5H3v1h4.5V13h1V8.5H13v-1z"/></svg>
  </ui-button>
  <ui-button kind="ghost">Details
    <svg slot="suffix" viewBox="0 0 16 16"><path d="m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"/></svg>
  </ui-button>
  <ui-button kind="tertiary">
    <svg slot="prefix" viewBox="0 0 16 16"><path d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zm-7 1h4v2H6zm7 10H3V3h2v3h6V3.4l2 2z"/></svg>
    Save draft
  </ui-button>
</div>
```

React:

```tsx
import { Add as AddIcon, ChevronRight as ChevronRightIcon, Save as SaveIcon } from '@carbon/icons-react';

<UiButton kind="primary">
  Add
  <AddIcon slot="suffix" />
</UiButton>
<UiButton kind="ghost">
  Details
  <ChevronRightIcon slot="suffix" />
</UiButton>
<UiButton kind="tertiary">
  <SaveIcon slot="prefix" />
  Save draft
</UiButton>
```

React + Tailwind:

```tsx
import { Add as AddIcon, ChevronRight as ChevronRightIcon, Save as SaveIcon } from '@carbon/icons-react';

<Button kind="primary" icon={<AddIcon />}>Add</Button>
<Button kind="ghost" icon={<ChevronRightIcon />}>Details</Button>
{/* no leading icon here: it goes at the end */}
<Button kind="tertiary" icon={<SaveIcon />}>Save draft</Button>
```

## Icon-only buttons

For a button that shows only an icon, use `<ui-icon-button>` (Carbon's `IconButton`). Its `label` is both its name and its tooltip, so the meaning shows on hover and on focus. It's `ghost` by default; `tooltip-placement` moves the tooltip (below by default). `<ui-button icon-only label="…">` also makes a square button, but without the tooltip.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button label="Edit contract">
    <svg viewBox="0 0 16 16"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Add signer" kind="primary">
    <svg viewBox="0 0 16 16"><path d="M8.5 7.5V3h-1v4.5H3v1h4.5V13h1V8.5H13v-1z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Edit terms" kind="tertiary" tooltip-placement="right">
    <svg viewBox="0 0 16 16"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z"/></svg>
  </ui-icon-button>
</div>
```

React:

```tsx
import { UiIconButton } from '@purpurabog/ui/react';
import { Add as AddIcon, Edit as EditIcon } from '@carbon/icons-react';

<UiIconButton label="Edit contract"><EditIcon /></UiIconButton>
<UiIconButton label="Add signer" kind="primary"><AddIcon /></UiIconButton>
<UiIconButton label="Edit terms" kind="tertiary" tooltipPlacement="right"><EditIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Add as AddIcon, Edit as EditIcon } from '@carbon/icons-react';

// npx shadcn@4 add @kanok-ui/tw-icon-button
import { IconButton } from '@/components/ui/react-tw/icon-button';

<IconButton label="Edit contract"><EditIcon /></IconButton>
<IconButton label="Add signer" kind="primary"><AddIcon /></IconButton>
<IconButton label="Edit terms" kind="tertiary" tooltipPlacement="right"><EditIcon /></IconButton>
```

## Notification badge

`badge-count` puts Carbon's badge indicator in the corner of a ghost icon button: a number shows a count, and 0 shows a dot. Screen readers hear the count as the button's description. Use it for things waiting for the user, such as approvals.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button label="Approvals" badge-count="4">
    <svg viewBox="0 0 32 32"><path d="M28.7 19.3 26 16.6V13a10 10 0 0 0-9-10v-2h-2v2a10 10 0 0 0-9 10v3.6l-2.7 2.7A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.8a5 5 0 0 0 10 0V24h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.3-.7ZM19 24.8a3 3 0 0 1-6 0V24h6ZM27 22H5v-1.6l2.7-2.7A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .3.7l2.7 2.7Z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Notifications, new" badge-count="0">
    <svg viewBox="0 0 32 32"><path d="M28.7 19.3 26 16.6V13a10 10 0 0 0-9-10v-2h-2v2a10 10 0 0 0-9 10v3.6l-2.7 2.7A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.8a5 5 0 0 0 10 0V24h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.3-.7ZM19 24.8a3 3 0 0 1-6 0V24h6ZM27 22H5v-1.6l2.7-2.7A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .3.7l2.7 2.7Z"/></svg>
  </ui-icon-button>
</div>
```

React:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<UiIconButton label="Approvals" badgeCount={4}><NotificationIcon /></UiIconButton>
<UiIconButton label="Notifications, new" badgeCount={0}><NotificationIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<IconButton label="Approvals" badgeCount={4}><NotificationIcon /></IconButton>
<IconButton label="Notifications, new" badgeCount={0}><NotificationIcon /></IconButton>
```

## Toggle buttons

`pressed` makes a button that stays on or off, such as pinning a contract to the dashboard. Screen readers hear "pressed" or "not pressed". Flip it in your click handler; leave it unset on an ordinary button. It works on `<ui-button>` and `<ui-icon-button>`.


HTML:

```html
<ui-icon-button id="button-pin" label="Pin to dashboard" pressed>
  <svg viewBox="0 0 16 16"><path d="M10 1 9 2l1 1-3 3-3-.5L3.5 6 6 8.5 2 12.5V14h1.5L7.5 10l2.5 2.5.5-.5-.5-3 3-3 1 1 1-1z"/></svg>
</ui-icon-button>
<p>Pinned: <output id="button-pin-out">yes</output></p>
<script type="module">
  const pin = document.getElementById('button-pin');
  pin.addEventListener('click', () => {
    pin.pressed = !pin.pressed;
    document.getElementById('button-pin-out').textContent = pin.pressed ? 'yes' : 'no';
  });
</script>
```

React:

```tsx
import { Pin as PinIcon } from '@carbon/icons-react';

<UiIconButton label="Pin to dashboard" pressed={pinned} onClick={() => setPinned(!pinned)}>
  <PinIcon />
</UiIconButton>
```

React + Tailwind:

```tsx
import { Pin as PinIcon } from '@carbon/icons-react';

<IconButton label="Pin to dashboard" aria-pressed={pinned} onClick={() => setPinned(!pinned)}>
  <PinIcon />
</IconButton>
```

## Loading

`loading` shows Carbon's small spinner, ignores clicks and keeps focus on the button, so keyboard users don't lose their place. The loading text replaces the label while it loads; the loading label is what screen readers hear.

`loading-position` moves the spinner: `end` (the default) where a trailing icon goes, `start` in the label's place, `center` in the middle of the button.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button loading loading-text="Saving…">Save</ui-button>
  <ui-button kind="secondary" loading loading-position="start" loading-text="Sending…">Send</ui-button>
  <ui-button kind="tertiary" loading loading-position="center">Export</ui-button>
</div>
```

React:

```tsx
<UiButton loading={saving} loadingText="Saving…">Save</UiButton>
<UiButton kind="secondary" loading={sending} loadingPosition="start" loadingText="Sending…">Send</UiButton>
<UiButton kind="tertiary" loading={exporting} loadingPosition="center">Export</UiButton>
```

React + Tailwind:

```tsx
<Button loading={saving} loadingText="Saving…">Save</Button>
<Button kind="secondary" loading={sending} loadingPosition="start" loadingText="Sending…">Send</Button>
<Button kind="tertiary" loading={exporting} loadingPosition="center">Export</Button>
```

## Skeleton

While the data behind a page loads, `<ui-button-skeleton>` keeps the button's place: a 150px bar at the button's `size`. Screen readers skip it, so say "loading" on the area around it (for example `aria-busy="true"`).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button-skeleton></ui-button-skeleton>
  <ui-button-skeleton size="md"></ui-button-skeleton>
</div>
```

React:

```tsx
import { UiButtonSkeleton } from '@purpurabog/ui/react';

<UiButtonSkeleton />
<UiButtonSkeleton size="md" />
```

React + Tailwind:

```tsx
import { ButtonSkeleton } from '@/components/ui/react-tw/button';

<ButtonSkeleton />
<ButtonSkeleton size="md" />
```

## Disabled, or disabled with a reason

`disabled` removes the button from the Tab order, as Carbon does. If people need to learn why they can't use it, use disabled-focusable instead: it looks disabled and ignores clicks, but keyboard users can still reach it and read a tooltip.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button disabled>Approve</ui-button>
  <ui-tooltip text="Only approvers can approve contracts">
    <ui-button disabled-focusable>Approve</ui-button>
  </ui-tooltip>
</div>
```

React:

```tsx
<UiButton disabled>Approve</UiButton>
<UiTooltip text="Only approvers can approve contracts">
  <UiButton disabledFocusable>Approve</UiButton>
</UiTooltip>
```

React + Tailwind:

```tsx
<Button disabled>Approve</Button>
<Tooltip text="Only approvers can approve contracts">
  <Button disabledFocusable>Approve</Button>
</Tooltip>
```

## Links that look like buttons

With `href` the button renders an `<a>` and screen readers announce a link. On the web component a plain click fires a cancelable `ui-navigate` event, so a SPA router can take over (see [Frameworks](https://parntengza.github.io/kanok-ui-docs/en/frameworks/)). In this preview the event is cancelled and its `href` shown instead.


HTML:

```html
<ui-button id="button-new-contract" kind="tertiary" href="/contracts/new">New contract</ui-button>
<p>Router got: <output id="button-new-contract-out"></output></p>
<script type="module">
  document.getElementById('button-new-contract').addEventListener('ui-navigate', (event) => {
    event.preventDefault();
    document.getElementById('button-new-contract-out').textContent = event.detail.href;
  });
</script>
```

React:

```tsx
<UiButton kind="tertiary" href="/contracts/new" onUiNavigate={(e) => { e.preventDefault(); navigate(e.detail.href); }}>
  New contract
</UiButton>
```

React + Tailwind:

```tsx
<Button kind="tertiary" href="/contracts/new">New contract</Button>
```

## Submit a form

In a `<form>`, `type="submit"` submits it and `type="reset"` resets it, as a native button does. The default `type` is `button`, so other buttons never submit by accident. Set `loading` while the request runs, so nobody sends it twice.


HTML:

```html
<form id="button-form" method="dialog" style="display: grid; gap: 16px">
  <ui-text-input label="Department" name="department" value="Legal" required></ui-text-input>
  <ui-button-set>
    <ui-button kind="secondary" type="reset">Reset</ui-button>
    <ui-button id="button-form-submit" type="submit" loading-text="Saving…">Save</ui-button>
  </ui-button-set>
</form>
<p>Sent: <output id="button-form-out"></output></p>
<script type="module">
  const form = document.getElementById('button-form');
  const submit = document.getElementById('button-form-submit');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submit.loading = true;
    setTimeout(() => {
      submit.loading = false;
      document.getElementById('button-form-out').textContent = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
    }, 1500);
  });
</script>
```

React:

```tsx
<form onSubmit={async (e) => { e.preventDefault(); setSaving(true); await save(new FormData(e.currentTarget)); setSaving(false); }}>
  <UiTextInput label="Department" name="department" value="Legal" required />
  <UiButtonSet>
    <UiButton kind="secondary" type="reset">Reset</UiButton>
    <UiButton type="submit" loading={saving} loadingText="Saving…">Save</UiButton>
  </UiButtonSet>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={async (e) => { e.preventDefault(); setSaving(true); await save(new FormData(e.currentTarget)); setSaving(false); }}>
  <TextInput label="Department" name="department" defaultValue="Legal" required />
  <ButtonSet>
    <Button kind="secondary" type="reset">Reset</Button>
    <Button type="submit" loading={saving} loadingText="Saving…">Save</Button>
  </ButtonSet>
</form>
```

## Accessibility

- It renders a native `<button>`: Enter and Space press it, and `type="submit"` / `type="reset"` work in a `<form>`.
- Name icon-only buttons: `label` on the web component (an `aria-label` on the element does not reach the inner button), `aria-label` on the Tailwind button.
- `pressed` makes it a toggle button (`aria-pressed`); `haspopup` and `expanded` describe a button that opens a menu or dialog.
- Danger kinds can add a danger description, read after the name ("Deletes the contract for good").

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-button>` · React `UiButton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `variant` |  |  |  | Same as `kind`, kept for teams used to `variant` (shadcn, MUI); `kind` is Carbon's name and the one in the docs |
| `kind` | `kind` | `ButtonKind` | `'primary'` | Carbon `kind`: primary, secondary, tertiary, ghost, danger, danger-tertiary, danger-ghost. |
| `size` | `size` | `ButtonSize` | `'lg'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `disabled-focusable` | `disabledFocusable` | `boolean` | `false` | Disabled, but still focusable: aria-disabled, ignores clicks — so a tooltip can explain why. |
| `type` | `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |  |
| `full-width` | `fullWidth` | `boolean` | `false` | Stretch to the container width. |
| `icon-only` | `iconOnly` | `boolean` | `false` | Square button (as wide as it is tall, no padding) with its content centred: put the icon in the `prefix` slot and leave the label empty — nothing is hidden for you. Set `label` for its name; it shows no tooltip (use `<ui-icon-button>` for one). |
| `label` | `label` | `string` | `''` | Accessible name; required when the button shows only an icon. |
| `description` | `description` | `string` | `''` | Accessible description (set by ui-tooltip). |
| `danger-description` | `dangerDescription` | `string` | `''` | Carbon `dangerDescription`: read after the name of a danger kind (danger, danger-tertiary, danger-ghost), e.g. "Deletes the contract for good". Empty by default, as Carbon v11 (React `ButtonBase`, WC `cds-button`). |
| `href` | `href` | `string` | `''` | Render as a link. |
| `target` | `target` | `'_self' \| '_blank'` | `'_self'` |  |
| `loading` | `loading` | `boolean` | `false` | Busy: looks disabled with a spinner, ignores clicks, keeps focus, announces `loading-label`. |
| `loading-label` | `loadingLabel` | `string` | `''` | What `loading` announces (default: `loading-text`, else the translation's "Loading"). |
| `loading-position` | `loadingPosition` | `ButtonLoadingPosition` | `'end'` | Where the spinner goes (MUI `loadingPosition`): `end` (Carbon ActionSet), `start`, `center`. |
| `loading-text` | `loadingText` | `string` | `''` | Shown in the label's place while loading, e.g. "Saving…" (Carbon Modal `loadingDescription`). |
| `pressed` | `pressed` | `boolean \| undefined` |  | Toggle-button state; leave unset for a normal button. |
| `haspopup` | `haspopup` | `string` | `''` | The button opens a popup: rendered as `aria-haspopup` (e.g. `menu`, `listbox`, `dialog`). |
| `expanded` | `expanded` | `boolean \| undefined` |  | Whether the popup / disclosed content is open (`aria-expanded`); left unset, only a `haspopup` button reports it. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `variant` | `ButtonKind` | Same as `kind` (permanent alias for teams used to `variant`); a `variant` attribute works too. |
| `form` |  | (read-only) The `<form>` the button submits or resets, as a native button's `form`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Label |
| `prefix` | Leading icon |
| `suffix` | Trailing icon (e.g. the ghost-button chevron) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The native button or link |
| `prefix` | The leading icon slot |
| `suffix` | The trailing icon slot |
| `loading` | The spinner's place: at the end, the start or the centre (`loading` only; not when it takes the label's place) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-button-align` |  | `align-items` of the content (ui-modal sets `flex-start` for its 64px footer buttons) |
| `--ui-button-padding-top` |  | Top padding of the content (ui-modal footer: 14px) |
| `--ui-button-padding-start` |  | Start padding (default 15px; ui-table-batch-actions: 16px) |
| `--ui-button-padding-end` |  | End padding (default 63px, Carbon's room for an icon; ui-table-batch-actions: 16px) |
| `--ui-button-height-lg` |  | Height of `size="lg"`, the default (default: `--ui-field-height-lg`, 48px; Kanok: 32px) |
| `--ui-button-radius` |  | Corner radius (default 0; Kanok: 6px) |
| `--ui-button-justify` |  | `justify-content` of label and icon (default `space-between`, Carbon's label-start / icon-end; Kanok: `center`) |
| `--ui-button-gap` |  | Gap between label and icon (default 32px; Kanok: 8px) |
| `--ui-button-ghost-justify` |  | `justify-content` of the ghost kinds (default `flex-start`) |
| `--ui-button-ghost-padding-end` |  | End padding of the ghost kinds (default 15px) |
| `--ui-button-secondary` |  | Fill of `kind="secondary"` (default `--ui-secondary`); also `--ui-button-secondary-hover`, `--ui-button-secondary-active` |
| `--ui-on-button-secondary` |  | Text of `kind="secondary"` (default `--ui-on-primary`) |
| `--ui-button-secondary-border` |  | Border colour of `kind="secondary"` (default transparent) |
| `--ui-button-height-xl` |  | Height of `size="xl"` (default 64px; Kanok: 40px); also `--ui-button-height-2xl` (80px; Kanok: 48px) |
| `--ui-button-padding-xl` |  | Start and end padding of `size="xl"` (default: the button's own); also `--ui-button-padding-2xl` |
| `--ui-button-tall-align` |  | `align-items` of xl / 2xl content (default `flex-start`, Carbon's label at the top; Kanok: `center`) |
| `--ui-button-tall-padding-top` |  | Top padding of xl / 2xl content (default 14px; Kanok: 0px); also `--ui-button-tall-icon-offset` (1px) |
| `--ui-focus-offset` |  | `outline-offset` of the focus ring (default -2px, inside; Kanok: 2px, outside) |
| `--ui-focus-inset-width` |  | Width of the inner focus-inset line (default 2px; Kanok: 0) |
| `--ui-button-tertiary-hover` |  | / --ui-button-tertiary-active / --ui-button-tertiary-focus - Tertiary fills (default primary, its hover and active; Kanok: an indigo tint) |
| `--ui-button-tertiary-state-ink` |  | / --ui-button-tertiary-active-border - Tertiary text on those fills and the pressed border (default text-on-color, the button's border) |


