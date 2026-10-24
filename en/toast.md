# Toast

A toast is a short message that appears in the corner of the screen after something happened elsewhere on the page: a contract saved, an upload that failed in the background. Toasts stack, the newest nearest the corner, and the quiet ones go away by themselves. Carbon has no toast manager; `ui-toaster` and `toast()` are this library's. For a message that belongs in the page, use an inline [Notification](https://parntengza.github.io/kanok-ui-docs/en/notification/).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-save">Save contract</ui-button>
  <ui-toaster></ui-toaster>
</div>

<script type="module">
  // what toast({ kind: 'success', title: 'Contract saved', subtitle: 'CT-2026-0142' }) does
  const toaster = document.querySelector('ui-toaster');
  document.getElementById('toast-save').addEventListener('click', () => {
    const toast = document.createElement('ui-notification');
    Object.assign(toast, { variant: 'toast', role: 'none', kind: 'success', heading: 'Contract saved', subtitle: 'CT-2026-0142', timeout: 5000 });
    toaster.add(toast);
  });
</script>
```

React:

```tsx
import { toast } from '@purpurabog/ui/toaster';

<UiButton onClick={() => toast({ kind: 'success', title: 'Contract saved', subtitle: 'CT-2026-0142' })}>Save contract</UiButton>
```

React + Tailwind:

```tsx
import { toast } from '@/components/ui/react-tw/toaster';

<Button onClick={() => toast({ kind: 'success', title: 'Contract saved', subtitle: 'CT-2026-0142' })}>Save contract</Button>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/toaster
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-toaster
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/toaster.json
#    to its target:
#    components/ui/primitives/toaster/toaster.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-toaster, notification, shared-element, shared-localize, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-toaster.json
#    to its target:
#    components/ui/react-tw/toaster.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-notification, core-toaster, tw-i18n, tw-notification, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">
  import { toast } from '@purpurabog/ui/toaster';

  document.getElementById('save').addEventListener('click', () => {
    toast({ kind: 'success', title: 'Contract saved', subtitle: 'CT-2026-0142' });
  });
</script>

<ui-button id="save">Save contract</ui-button>
```

React:

```tsx
import { toast } from '@purpurabog/ui/toaster';

<UiButton onClick={() => toast({ kind: 'success', title: 'Contract saved', subtitle: 'CT-2026-0142' })}>Save contract</UiButton>
```

React + Tailwind:

```tsx
import { Toaster, toast } from '@/components/ui/react-tw/toaster';

// once, near the root of the app
<Toaster />

<Button onClick={() => toast({ kind: 'success', title: 'Contract saved', subtitle: 'CT-2026-0142' })}>Save contract</Button>
```

`toast(options)` creates a `<ui-notification variant="toast">` and adds it to the page's `<ui-toaster>`, which it creates at the end of `<body>` the first time. It returns `{ element, close }`. The options are `kind`, `title`, `subtitle`, `caption`, `timeout`, `actionLabel`, `onAction`, `lowContrast` and `id`.

The live examples on this page can't import a module, so they do what `toast()` does by hand: create the element and pass it to the toaster's `add()`. In your app, call `toast()`. React + Tailwind has its own `toast()` and a `<Toaster>` you mount once; it returns `{ close }`, and `toast.clear()` removes every toast.

The toaster is one polite live region named "Notifications", in the page before any toast, so screen readers announce each one. It sits in the top layer, 16px from the top end corner, or 16px under a `ui-header`.

## Kinds and how long they stay

`kind` is `info` by default. Info and success toasts close after 5 seconds; error and warning toasts stay until they are closed, because they need reading. `timeout` sets another time in milliseconds, or 0 to stay. The countdown pauses while the pointer is over the toast or focus is inside it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button kind="tertiary" data-toast-kind="success">Success</ui-button>
  <ui-button kind="tertiary" data-toast-kind="info">Info</ui-button>
  <ui-button kind="tertiary" data-toast-kind="warning">Warning</ui-button>
  <ui-button kind="danger" data-toast-kind="error">Error</ui-button>
  <ui-toaster></ui-toaster>
</div>

<script type="module">
  const toaster = document.querySelector('ui-toaster');
  const texts = {
    success: ['Approval sent', 'Chaiya R. will get an email.'],
    info: ['New template', 'Lease 2026 is ready to use.'],
    warning: ['Stamp duty unpaid', 'Pay it before the contract is filed.'],
    error: ['Could not save', 'The server did not answer.'],
  };
  for (const button of document.querySelectorAll('[data-toast-kind]')) {
    button.addEventListener('click', () => {
      const kind = button.dataset.toastKind;
      const toast = document.createElement('ui-notification');
      // toast() picks the time: 5 s for success and info, 0 (stays) for warning and error
      Object.assign(toast, { variant: 'toast', role: 'none', kind, heading: texts[kind][0], subtitle: texts[kind][1], timeout: kind === 'success' || kind === 'info' ? 5000 : 0 });
      toaster.add(toast);
    });
  }
</script>
```

React:

```tsx
toast({ kind: 'success', title: 'Approval sent', subtitle: 'Chaiya R. will get an email.' });
toast({ title: 'New template', subtitle: 'Lease 2026 is ready to use.' });
toast({ kind: 'warning', title: 'Stamp duty unpaid', subtitle: 'Pay it before the contract is filed.' });
toast({ kind: 'error', title: 'Could not save', subtitle: 'The server did not answer.' });
```

React + Tailwind:

```tsx
toast({ kind: 'success', title: 'Approval sent', subtitle: 'Chaiya R. will get an email.' });
toast({ title: 'New template', subtitle: 'Lease 2026 is ready to use.' });
toast({ kind: 'warning', title: 'Stamp duty unpaid', subtitle: 'Pay it before the contract is filed.' });
toast({ kind: 'error', title: 'Could not save', subtitle: 'The server did not answer.' });
```

## Caption and low contrast

`caption` adds a small line under the subtitle, usually the time. `lowContrast` gives the toast a light tint instead of the dark surface.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-caption" kind="tertiary">Export finished</ui-button>
  <ui-toaster></ui-toaster>
</div>

<script type="module">
  const toaster = document.querySelector('ui-toaster');
  document.getElementById('toast-caption').addEventListener('click', () => {
    const toast = document.createElement('ui-notification');
    const caption = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    Object.assign(toast, { variant: 'toast', role: 'none', kind: 'success', lowContrast: true, heading: 'Export finished', subtitle: 'contracts-2026.csv', caption, timeout: 5000 });
    toaster.add(toast);
  });
</script>
```

React:

```tsx
toast({ kind: 'success', lowContrast: true, title: 'Export finished', subtitle: 'contracts-2026.csv', caption: new Date().toLocaleTimeString() });
```

React + Tailwind:

```tsx
toast({ kind: 'success', lowContrast: true, title: 'Export finished', subtitle: 'contracts-2026.csv', caption: new Date().toLocaleTimeString() });
```

## With an action

`actionLabel` adds a button for one quick action, and `onAction` runs when it is pressed. An actionable toast never closes by itself, takes focus when it appears and keeps Tab inside it until it is closed (Carbon's actionable notification). Use it only when the action is worth that interruption.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-action" kind="tertiary">Upload contract.pdf</ui-button>
  <ui-toaster></ui-toaster>
</div>

<script type="module">
  const toaster = document.querySelector('ui-toaster');
  const show = (options) => {
    const toast = document.createElement('ui-notification');
    Object.assign(toast, { variant: 'toast', ...options });
    toaster.add(toast);
    return toast;
  };
  document.getElementById('toast-action').addEventListener('click', () => {
    // an actionable toast keeps its own role (alertdialog)
    const failed = show({ kind: 'warning', heading: 'Upload failed', subtitle: 'contract.pdf', actionLabel: 'Retry' });
    failed.addEventListener('ui-action', () => {
      failed.close();
      show({ role: 'none', kind: 'info', heading: 'Retrying…', subtitle: 'contract.pdf', timeout: 5000 });
    });
  });
</script>
```

React:

```tsx
toast({
  kind: 'warning',
  title: 'Upload failed',
  subtitle: 'contract.pdf',
  actionLabel: 'Retry',
  onAction: () => upload(file),
});
```

React + Tailwind:

```tsx
toast({
  kind: 'warning',
  title: 'Upload failed',
  subtitle: 'contract.pdf',
  actionLabel: 'Retry',
  onAction: () => upload(file),
});
```

## Replace a toast

A toast with the same `id` as one that is still open replaces it instead of stacking a second one. Use it for a status that changes: "Syncing…", then "Synced".


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-sync" kind="tertiary">Sync contracts</ui-button>
  <ui-toaster></ui-toaster>
</div>

<script type="module">
  const toaster = document.querySelector('ui-toaster');
  // toast({ id: 'sync', … }) removes the open toast with that id first
  const show = (options) => {
    toaster.querySelector('[data-toast-id="sync"]')?.remove();
    const toast = document.createElement('ui-notification');
    Object.assign(toast, { variant: 'toast', role: 'none', ...options });
    toast.dataset.toastId = 'sync';
    toaster.add(toast);
  };
  document.getElementById('toast-sync').addEventListener('click', () => {
    show({ kind: 'info', heading: 'Syncing…', subtitle: '24 contracts' });
    setTimeout(() => show({ kind: 'success', heading: 'Synced', subtitle: '24 contracts are up to date.', timeout: 5000 }), 2000);
  });
</script>
```

React:

```tsx
toast({ id: 'sync', title: 'Syncing…', subtitle: '24 contracts', timeout: 0 });
await sync();
toast({ id: 'sync', kind: 'success', title: 'Synced', subtitle: '24 contracts are up to date.' });
```

React + Tailwind:

```tsx
toast({ id: 'sync', title: 'Syncing…', subtitle: '24 contracts', timeout: 0 });
await sync();
toast({ id: 'sync', kind: 'success', title: 'Synced', subtitle: '24 contracts are up to date.' });
```

## Close from code

`toast()` returns a handle: `close()` closes that toast, for example when the work it talks about is done. On the element, `close()` does the same.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-handle" kind="tertiary">Generate report</ui-button>
  <ui-toaster></ui-toaster>
</div>

<script type="module">
  const toaster = document.querySelector('ui-toaster');
  document.getElementById('toast-handle').addEventListener('click', () => {
    const toast = document.createElement('ui-notification');
    Object.assign(toast, { variant: 'toast', role: 'none', kind: 'info', heading: 'Generating the report…', subtitle: 'This takes a few seconds.' });
    toaster.add(toast);
    setTimeout(() => toast.close(), 3000);
  });
</script>
```

React:

```tsx
const working = toast({ title: 'Generating the report…', subtitle: 'This takes a few seconds.', timeout: 0 });
await generateReport();
working.close();
```

React + Tailwind:

```tsx
const working = toast({ title: 'Generating the report…', subtitle: 'This takes a few seconds.', timeout: 0 });
await generateReport();
working.close();
```

## How many at once

The toaster shows at most `max` toasts (3 by default); a new one closes the oldest. Place a `<ui-toaster>` yourself to change it; `toast()` uses the first one in the page. Press the button a few times.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-max" kind="tertiary">Add a signer</ui-button>
  <ui-toaster id="toast-max-toaster" max="2"></ui-toaster>
</div>

<script type="module">
  const toaster = document.getElementById('toast-max-toaster');
  let count = 0;
  document.getElementById('toast-max').addEventListener('click', () => {
    count += 1;
    const toast = document.createElement('ui-notification');
    Object.assign(toast, { variant: 'toast', role: 'none', kind: 'success', heading: `Signer ${count} added`, timeout: 5000 });
    toaster.add(toast);
  });
</script>
```

React:

```tsx
// once in the app; toast() then uses it
<UiToaster max={2} />
```

React + Tailwind:

```tsx
<Toaster max={2} />
```

## Bottom corner

`placement="bottom-end"` stacks the toasts in the bottom end corner, the newest at the bottom. `--ui-toaster-offset` sets the distance from the edge (React + Tailwind: `offset`).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="toast-bottom" kind="tertiary">Copy link</ui-button>
  <ui-toaster id="toast-bottom-toaster" placement="bottom-end" style="--ui-toaster-offset: 32px"></ui-toaster>
</div>

<script type="module">
  const toaster = document.getElementById('toast-bottom-toaster');
  document.getElementById('toast-bottom').addEventListener('click', () => {
    const toast = document.createElement('ui-notification');
    Object.assign(toast, { variant: 'toast', role: 'none', kind: 'info', heading: 'Link copied', timeout: 5000 });
    toaster.add(toast);
  });
</script>
```

React:

```tsx
<UiToaster placement="bottom-end" style={{ '--ui-toaster-offset': '32px' } as CSSProperties} />
```

React + Tailwind:

```tsx
<Toaster placement="bottom-end" offset="32px" />
```

## Toasts and modals

A toast added while a [Modal](https://parntengza.github.io/kanok-ui-docs/en/modal/) is open is drawn above it, but the page outside a modal is inert: nobody can click it and screen readers can't reach it. Give feedback inside a modal with an inline [Notification](https://parntengza.github.io/kanok-ui-docs/en/notification/) instead (Carbon's guidance).


HTML:

```html
<ui-button id="toast-modal-open" kind="tertiary">Edit department</ui-button>
<ui-modal id="toast-modal" heading="Edit department" size="sm">
  <ui-notification id="toast-modal-saved" kind="success" low-contrast open="false" heading="Saved" subtitle="The new name is in use."></ui-notification>
  <ui-text-input label="Department name" value="Legal"></ui-text-input>
  <ui-button slot="footer" kind="secondary" id="toast-modal-close">Close</ui-button>
  <ui-button slot="footer" id="toast-modal-save">Save</ui-button>
</ui-modal>

<script type="module">
  const modal = document.getElementById('toast-modal');
  document.getElementById('toast-modal-open').addEventListener('click', () => {
    document.getElementById('toast-modal-saved').open = false;
    modal.show();
  });
  document.getElementById('toast-modal-close').addEventListener('click', () => modal.close());
  document.getElementById('toast-modal-save').addEventListener('click', () => (document.getElementById('toast-modal-saved').open = true));
</script>
```

React:

```tsx
<UiModal open={open} heading="Edit department" size="sm" onUiClose={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
  <UiNotification kind="success" lowContrast open={saved} heading="Saved" subtitle="The new name is in use." />
  <UiTextInput label="Department name" value="Legal" />
  <UiButton slot="footer" kind="secondary" onClick={() => setOpen(false)}>Close</UiButton>
  <UiButton slot="footer" onClick={save}>Save</UiButton>
</UiModal>
```

React + Tailwind:

```tsx
<Modal open={open} onClose={() => setOpen(false)} heading="Edit department" size="sm" footer={…}>
  <Notification kind="success" lowContrast open={saved} title="Saved" subtitle="The new name is in use." />
  <TextInput label="Department name" defaultValue="Legal" />
</Modal>
```

## Accessibility

- Each toast is announced through the toaster's region; the toasts themselves have no live role. An actionable toast keeps the `alertdialog` role and takes focus.
- Closed toasts are removed from the page.
- Keep toasts short, and don't put anything in a toast that the user can only find there: once it is gone, it is gone.

Unstyled React parts with the same behaviour: [Headless Toast](https://parntengza.github.io/kanok-ui-docs/en/headless-toast/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-toaster>` · React `UiToaster`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `placement` | `placement` | `ToasterPlacement` | `'top-end'` | Corner: newest toast nearest the edge. |
| `max` | `max` | `number` | `3` | Most toasts shown at once; a new one closes the oldest. |

#### Methods

| Method | Description |
|---|---|
| `add(toast)` | Adds `toast`, closes the oldest beyond `max`, and lifts the region above anything opened since. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-notification variant="toast">` elements (added by `toast()`) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-toaster-offset` |  | Distance from the top (or bottom) edge (default 16px; 64px under a ui-header) |


