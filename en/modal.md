# Modal

A modal asks for the user's full attention: it opens over the page, the page behind it can't be used, and focus stays inside until it closes. Use it for a short task or a decision. For a long form or a flow with steps, use a [Tearsheet](https://parntengza.github.io/kanok-ui-docs/en/tearsheet/); for details beside the page, a [Side panel](https://parntengza.github.io/kanok-ui-docs/en/side-panel/).


HTML:

```html
<ui-button id="modal-open">Open contract</ui-button>
<ui-modal id="modal-contract" heading="Contract details">
  <span slot="label">CT-2026-0142</span>
  <p style="margin: 0">Master services agreement with Siam Logistics Co., Ltd., effective 2 October 2026.</p>
  <ui-button slot="footer" kind="secondary">Cancel</ui-button>
  <ui-button slot="footer">Save</ui-button>
</ui-modal>

<script type="module">
  const modal = document.getElementById('modal-contract');
  document.getElementById('modal-open').addEventListener('click', () => modal.show());
  for (const button of modal.querySelectorAll('[slot="footer"]')) button.addEventListener('click', () => modal.close());
</script>
```

React:

```tsx
const [open, setOpen] = useState(false);

<UiButton onClick={() => setOpen(true)}>Open contract</UiButton>
<UiModal open={open} heading="Contract details" onUiClose={() => setOpen(false)}>
  <span slot="label">CT-2026-0142</span>
  <p>Master services agreement with Siam Logistics Co., Ltd., effective 2 October 2026.</p>
  <UiButton slot="footer" kind="secondary" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="footer" onClick={() => setOpen(false)}>Save</UiButton>
</UiModal>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open contract</Button>
<Modal
  open={open}
  onClose={() => setOpen(false)}
  label="CT-2026-0142"
  heading="Contract details"
  footer={<>
    <Button kind="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button onClick={() => setOpen(false)}>Save</Button>
  </>}
>
  <p>Master services agreement with Siam Logistics Co., Ltd., effective 2 October 2026.</p>
</Modal>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/modal
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-modal
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/modal.json
#    to its target:
#    components/ui/primitives/modal/modal.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-modal, core-overlay, shared-element, shared-events, shared-field, shared-focus-ring, shared-localize, shared-quiet-focus, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-modal.json
#    to its target:
#    components/ui/react-tw/modal.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-modal, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/modal';</script>

<ui-button onclick="document.getElementById('contract').show()">Open contract</ui-button>
<ui-modal id="contract" heading="Contract details">
  <p>Master services agreement with Siam Logistics Co., Ltd.</p>
</ui-modal>
```

React:

```tsx
import { UiModal } from '@purpurabog/ui/react';

<UiModal open={open} heading="Contract details" onUiClose={() => setOpen(false)}>
  <p>Master services agreement with Siam Logistics Co., Ltd.</p>
</UiModal>
```

React + Tailwind:

```tsx
import { Modal } from '@/components/ui/react-tw/modal';

<Modal open={open} onClose={() => setOpen(false)} heading="Contract details">
  <p>Master services agreement with Siam Logistics Co., Ltd.</p>
</Modal>
```

It is built on the native `<dialog>`: the browser puts it in the top layer, makes the page behind it inert and keeps Tab inside. Open it with the `open` attribute, `show()` or `open = true`; close it with `close()` or `open = false`. `ui-close` fires after it has closed, however that happened. The page doesn't scroll while it is open.

React + Tailwind is controlled: `onClose(reason)` reports ×, Esc, an outside click or a `<form method="dialog">` inside; set `open` to false to close it, or leave it to keep it open.

## Passive modal

A modal with no footer buttons only shows information. It closes with ×, Esc or a click outside it.


HTML:

```html
<ui-button id="modal-passive-open" kind="tertiary">Stamp duty rates</ui-button>
<ui-modal id="modal-passive" heading="Stamp duty rates" size="sm">
  <span slot="label">Revenue Department</span>
  <p style="margin: 0">Lease contracts: 1 baht for every 1,000 baht of rent, or part of it, for the whole term.</p>
</ui-modal>

<script type="module">
  const modal = document.getElementById('modal-passive');
  document.getElementById('modal-passive-open').addEventListener('click', () => modal.show());
</script>
```

React:

```tsx
<UiButton kind="tertiary" onClick={() => setOpen(true)}>Stamp duty rates</UiButton>
<UiModal open={open} heading="Stamp duty rates" size="sm" onUiClose={() => setOpen(false)}>
  <span slot="label">Revenue Department</span>
  <p>Lease contracts: 1 baht for every 1,000 baht of rent, or part of it, for the whole term.</p>
</UiModal>
```

React + Tailwind:

```tsx
<Button kind="tertiary" onClick={() => setOpen(true)}>Stamp duty rates</Button>
<Modal open={open} onClose={() => setOpen(false)} label="Revenue Department" heading="Stamp duty rates" size="sm">
  <p>Lease contracts: 1 baht for every 1,000 baht of rent, or part of it, for the whole term.</p>
</Modal>
```

## Sizes

`size`: `sm` 480px, `md` 672px (the default), `lg` 1056px. It is never wider than the screen minus 16px a side, and never taller than 768px.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button kind="tertiary" data-size="sm">Small</ui-button>
  <ui-button kind="tertiary" data-size="md">Medium</ui-button>
  <ui-button kind="tertiary" data-size="lg">Large</ui-button>
</div>
<ui-modal id="modal-size" heading="Approval history">
  <p style="margin: 0">Requested by Ananya P. on 2 October 2026, approved by the legal team on 3 October 2026.</p>
</ui-modal>

<script type="module">
  const modal = document.getElementById('modal-size');
  for (const button of document.querySelectorAll('[data-size]')) {
    button.addEventListener('click', () => {
      modal.size = button.dataset.size;
      modal.show();
    });
  }
</script>
```

React:

```tsx
<UiModal open={open} size="sm" heading="Approval history" onUiClose={() => setOpen(false)}>…</UiModal>
<UiModal open={open} heading="Approval history" onUiClose={() => setOpen(false)}>…</UiModal>
<UiModal open={open} size="lg" heading="Approval history" onUiClose={() => setOpen(false)}>…</UiModal>
```

React + Tailwind:

```tsx
<Modal open={open} onClose={() => setOpen(false)} size="sm" heading="Approval history">…</Modal>
<Modal open={open} onClose={() => setOpen(false)} heading="Approval history">…</Modal>
<Modal open={open} onClose={() => setOpen(false)} size="lg" heading="Approval history">…</Modal>
```

## Danger: confirm before you delete

`alert` is for a confirmation that interrupts, such as deleting something. The dialog gets `role="alertdialog"`, the body becomes its description, and focus starts on the safest footer button (the first one whose `kind` is neither primary nor a danger kind), so Enter doesn't delete by accident.


HTML:

```html
<ui-button id="modal-alert-open" kind="danger">Delete contract</ui-button>
<ui-modal id="modal-alert" alert heading="Delete this contract?" size="sm">
  This removes CT-2026-0142 and its signatures for good.
  <ui-button slot="footer" kind="secondary" data-answer="kept">Cancel</ui-button>
  <ui-button slot="footer" kind="danger" data-answer="deleted">Delete</ui-button>
</ui-modal>
<p>Result: <output id="modal-alert-out"></output></p>

<script type="module">
  const modal = document.getElementById('modal-alert');
  const out = document.getElementById('modal-alert-out');
  document.getElementById('modal-alert-open').addEventListener('click', () => modal.show());
  for (const button of modal.querySelectorAll('[data-answer]')) {
    button.addEventListener('click', () => {
      out.value = button.dataset.answer;
      modal.close();
    });
  }
</script>
```

React:

```tsx
<UiButton kind="danger" onClick={() => setOpen(true)}>Delete contract</UiButton>
<UiModal open={open} alert heading="Delete this contract?" size="sm" onUiClose={() => setOpen(false)}>
  This removes CT-2026-0142 and its signatures for good.
  <UiButton slot="footer" kind="secondary" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="footer" kind="danger" onClick={remove}>Delete</UiButton>
</UiModal>
```

React + Tailwind:

```tsx
<Button kind="danger" onClick={() => setOpen(true)}>Delete contract</Button>
<Modal
  open={open}
  onClose={() => setOpen(false)}
  alert
  heading="Delete this contract?"
  size="sm"
  footer={<>
    <Button kind="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button kind="danger" onClick={remove}>Delete</Button>
  </>}
>
  This removes CT-2026-0142 and its signatures for good.
</Modal>
```

## A click outside

As in Carbon, a modal with footer buttons never closes on a click outside it, so nothing typed is lost. A passive modal does, unless it is `persistent`: then only ×, Esc or your own button close it.


HTML:

```html
<ui-button id="modal-persistent-open" kind="tertiary">Read the terms</ui-button>
<ui-modal id="modal-persistent" heading="Terms of use" persistent>
  <p style="margin: 0">A click outside doesn't close this modal. Use × or Esc.</p>
</ui-modal>

<script type="module">
  const modal = document.getElementById('modal-persistent');
  document.getElementById('modal-persistent-open').addEventListener('click', () => modal.show());
</script>
```

React:

```tsx
<UiModal open={open} heading="Terms of use" persistent onUiClose={() => setOpen(false)}>
  <p>A click outside doesn't close this modal. Use × or Esc.</p>
</UiModal>
```

React + Tailwind:

```tsx
<Modal open={open} onClose={() => setOpen(false)} heading="Terms of use" persistent>
  <p>A click outside doesn't close this modal. Use × or Esc.</p>
</Modal>
```

## A form in a modal

On open, focus goes to the first control in the body; with none, to the first footer button; else to ×. Put `autofocus` on another control to start there. The footer buttons sit outside your `<form>`, so the primary one calls `requestSubmit()`: the browser then checks the required fields first. Enter in a field submits too.


HTML:

```html
<ui-button id="modal-form-open">Add a signer</ui-button>
<ui-modal id="modal-form" heading="Add a signer">
  <span slot="label">CT-2026-0142</span>
  <form id="modal-form-fields" style="display: grid; gap: 16px">
    <ui-text-input label="Full name" name="name" required></ui-text-input>
    <ui-text-input label="Email" name="email" type="email" required></ui-text-input>
    <ui-select label="Role" name="role">
      <option value="signer">Signer</option>
      <option value="witness">Witness</option>
    </ui-select>
  </form>
  <ui-button slot="footer" kind="secondary" id="modal-form-cancel">Cancel</ui-button>
  <ui-button slot="footer" id="modal-form-add">Add signer</ui-button>
</ui-modal>
<p>Added: <output id="modal-form-out"></output></p>

<script type="module">
  const modal = document.getElementById('modal-form');
  const form = document.getElementById('modal-form-fields');
  document.getElementById('modal-form-open').addEventListener('click', () => {
    form.reset();
    modal.show();
  });
  document.getElementById('modal-form-cancel').addEventListener('click', () => modal.close());
  document.getElementById('modal-form-add').addEventListener('click', () => form.requestSubmit());
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('modal-form-out').value = [...new FormData(form)].map(([key, value]) => `${key}=${value}`).join(', ');
    modal.close();
  });
</script>
```

React:

```tsx
const form = useRef<HTMLFormElement>(null);

<UiModal open={open} heading="Add a signer" onUiClose={() => setOpen(false)}>
  <span slot="label">CT-2026-0142</span>
  <form ref={form} onSubmit={(e) => { e.preventDefault(); add(new FormData(e.currentTarget)); setOpen(false); }}>
    <UiTextInput label="Full name" name="name" required />
    <UiTextInput label="Email" name="email" type="email" required />
    <UiSelect label="Role" name="role">
      <option value="signer">Signer</option>
      <option value="witness">Witness</option>
    </UiSelect>
  </form>
  <UiButton slot="footer" kind="secondary" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="footer" onClick={() => form.current?.requestSubmit()}>Add signer</UiButton>
</UiModal>
```

React + Tailwind:

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  label="CT-2026-0142"
  heading="Add a signer"
  footer={<>
    <Button kind="secondary" onClick={() => setOpen(false)}>Cancel</Button>
    <Button type="submit" form="signer-form">Add signer</Button>
  </>}
>
  <form id="signer-form" onSubmit={(e) => { e.preventDefault(); add(new FormData(e.currentTarget)); setOpen(false); }}>
    <TextInput label="Full name" name="name" required />
    <TextInput label="Email" name="email" type="email" required />
    <Select label="Role" name="role">
      <option value="signer">Signer</option>
      <option value="witness">Witness</option>
    </Select>
  </form>
</Modal>
```

In React + Tailwind the footer buttons are native `<button>`s, so `form="signer-form"` connects the submit button to the form.

## Ask before closing

×, Esc and a click outside first fire `ui-request-close`, cancelable, with the `reason`: `close-button`, `escape` or `backdrop`. Call `preventDefault()` to keep the modal open, for example while there are unsaved changes. Type a note below, then try to close the modal.


HTML:

```html
<ui-button id="modal-guard-open" kind="tertiary">Edit note</ui-button>
<ui-modal id="modal-guard" heading="Edit note">
  <ui-notification id="modal-guard-warning" kind="warning" low-contrast open="false" heading="Unsaved changes" subtitle="Close again to discard them."></ui-notification>
  <ui-text-area id="modal-guard-note" label="Note to the approver"></ui-text-area>
  <ui-button slot="footer" kind="secondary" id="modal-guard-cancel">Cancel</ui-button>
  <ui-button slot="footer" id="modal-guard-save">Save</ui-button>
</ui-modal>
<p>Closed by: <output id="modal-guard-out"></output></p>

<script type="module">
  const modal = document.getElementById('modal-guard');
  const note = document.getElementById('modal-guard-note');
  const warning = document.getElementById('modal-guard-warning');
  let warned = false;
  document.getElementById('modal-guard-open').addEventListener('click', () => {
    note.value = '';
    warned = false;
    warning.open = false;
    modal.show();
  });
  modal.addEventListener('ui-request-close', (event) => {
    if (event.target !== modal) return; // the notification inside asks too
    document.getElementById('modal-guard-out').value = event.detail.reason;
    if (note.value && !warned) {
      event.preventDefault();
      warned = true;
      warning.open = true;
    }
  });
  document.getElementById('modal-guard-cancel').addEventListener('click', () => modal.requestClose('close-button'));
  document.getElementById('modal-guard-save').addEventListener('click', () => modal.close());
</script>
```

React:

```tsx
<UiModal
  open={open}
  heading="Edit note"
  onUiRequestClose={(e) => { if (dirty && !warned) { e.preventDefault(); setWarned(true); } }}
  onUiClose={() => setOpen(false)}
>
  <UiNotification kind="warning" lowContrast open={warned} heading="Unsaved changes" subtitle="Close again to discard them." />
  <UiTextArea label="Note to the approver" />
  …
</UiModal>
```

React + Tailwind:

```tsx
// onClose only reports: the modal stays open until you set open to false
<Modal
  open={open}
  onClose={() => { if (dirty && !warned) setWarned(true); else setOpen(false); }}
  heading="Edit note"
  footer={…}
>
  <Notification kind="warning" lowContrast open={warned} title="Unsaved changes" subtitle="Close again to discard them." />
  <TextArea label="Note to the approver" />
</Modal>
```

`ui-request-close` and `ui-close` bubble, and a notification inside the modal fires them too: check that `event.target` is the modal. React's `UiModal` does that for you: `onUiRequestClose` and `onUiClose` get only the modal's own events. `close()` and `open = false` close without asking; `requestClose(reason)` asks first, as × does. Give feedback inside a modal with an inline [Notification](https://parntengza.github.io/kanok-ui-docs/en/notification/), as here: a [toast](https://parntengza.github.io/kanok-ui-docs/en/toast/) would sit behind the inert page.

## Scrolling content

When the body is taller than the modal, only the body scrolls; the heading and the footer stay. The body then becomes a focusable region named by the heading, so keyboard users can scroll it.


HTML:

```html
<ui-button id="modal-scroll-open" kind="tertiary">Read the agreement</ui-button>
<ui-modal id="modal-scroll" heading="Data processing agreement">
  <span slot="label">Version 3, October 2026</span>
  <div id="modal-scroll-terms"></div>
  <ui-button slot="footer" kind="secondary">Decline</ui-button>
  <ui-button slot="footer">Accept</ui-button>
</ui-modal>

<script type="module">
  const modal = document.getElementById('modal-scroll');
  const terms = document.getElementById('modal-scroll-terms');
  for (let n = 1; n <= 12; n++) {
    const clause = document.createElement('p');
    clause.textContent = `Clause ${n}. The processor handles personal data only on the controller's written instructions and keeps it confidential.`;
    terms.append(clause);
  }
  document.getElementById('modal-scroll-open').addEventListener('click', () => modal.show());
  for (const button of modal.querySelectorAll('[slot="footer"]')) button.addEventListener('click', () => modal.close());
</script>
```

React:

```tsx
<UiModal open={open} heading="Data processing agreement" onUiClose={() => setOpen(false)}>
  <span slot="label">Version 3, October 2026</span>
  {clauses.map((text, n) => <p key={n}>{text}</p>)}
  <UiButton slot="footer" kind="secondary" onClick={() => setOpen(false)}>Decline</UiButton>
  <UiButton slot="footer" onClick={() => setOpen(false)}>Accept</UiButton>
</UiModal>
```

React + Tailwind:

```tsx
<Modal open={open} onClose={() => setOpen(false)} label="Version 3, October 2026" heading="Data processing agreement" footer={…}>
  {clauses.map((text, n) => <p key={n}>{text}</p>)}
</Modal>
```

## Header actions

The `header-actions` slot puts controls at the top end of the header, beside ×. One 48px button fits. React + Tailwind takes them in `headerActions`.


HTML:

```html
<ui-button id="modal-actions-open" kind="tertiary">Open with an action</ui-button>
<ui-modal id="modal-actions" heading="Lease summary">
  <ui-icon-button slot="header-actions" label="Edit contract">
    <svg viewBox="0 0 16 16"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z"/></svg>
  </ui-icon-button>
  <p style="margin: 0">Office lease, 3rd floor, 24 months from 1 November 2026, 45,000 baht a month.</p>
</ui-modal>

<script type="module">
  const modal = document.getElementById('modal-actions');
  document.getElementById('modal-actions-open').addEventListener('click', () => modal.show());
</script>
```

React:

```tsx
import { Edit as EditIcon } from '@carbon/icons-react';

<UiModal open={open} heading="Lease summary" onUiClose={() => setOpen(false)}>
  <UiIconButton slot="header-actions" label="Edit contract"><EditIcon /></UiIconButton>
  <p>Office lease, 3rd floor, 24 months from 1 November 2026, 45,000 baht a month.</p>
</UiModal>
```

React + Tailwind:

```tsx
import { Edit as EditIcon } from '@carbon/icons-react';

<Modal
  open={open}
  onClose={() => setOpen(false)}
  heading="Lease summary"
  headerActions={<IconButton label="Edit contract"><EditIcon /></IconButton>}
>
  <p>Office lease, 3rd floor, 24 months from 1 November 2026, 45,000 baht a month.</p>
</Modal>
```

## Keyboard

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves through the controls inside the modal only |
| Esc | Asks to close (`escape`); focus goes back to what opened it |
| Enter, Space | Press the focused button |

## Accessibility

- The native modal `<dialog>` makes the rest of the page inert for the mouse, the keyboard and screen readers, and gives focus back to the control that opened it.
- The heading names the dialog. With no heading, the `label` slot names it; with neither, set `label` (React + Tailwind: `aria-label`).
- `alert` makes it an `alertdialog` described by its body; use it for confirmations only.
- The × button is named "Close" in the page language; `close-label` (`closeLabel`) changes it.

Unstyled React parts with the same behaviour: [Headless Modal](https://parntengza.github.io/kanok-ui-docs/en/headless-modal/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-modal>` · React `UiModal`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `open` | `open` | `boolean` | `false` |  |
| `heading` | `heading` | `string` | `''` |  |
| `label` | `label` | `string` | `''` | Accessible name when there is no heading (Carbon `aria-label`); the `label` slot is used before it. |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dialog width (Carbon modal sizes): sm 480px, md 672px, lg 1056px — never wider than the viewport minus 16px a side. |
| `persistent` | `persistent` | `boolean` | `false` | A passive modal (no footer) ignores outside clicks too; one with footer buttons always does (Carbon). |
| `close-label` | `closeLabel` | `string` | `''` | Accessible name for the close button. |
| `alert` | `alert` | `boolean` | `false` | Interrupting confirmation: role="alertdialog", focus starts on the safest action. |

#### Methods

| Method | Description |
|---|---|
| `requestClose(reason)` | Ask to close — fires cancelable `ui-request-close` first. |
| `focus(options)` | Focus inside the open dialog (the least destructive control, as on open). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-close` | `onUiClose` | After the modal has closed |
| `ui-request-close` | `onUiRequestClose` | Cancelable; detail: { reason }. preventDefault() keeps it open. |

#### Slots

| Slot | Description |
|---|---|
| (default) | Body content |
| `label` | Small label above the heading (the row renders only when slotted) |
| `footer` | Action buttons (laid out full-bleed, Carbon style) |
| `header-actions` | Controls at the top end of the header, beside the close button (one 48px button fits) |

#### CSS parts

| Part | Description |
|---|---|
| `dialog` | The native `<dialog>` panel |
| `header` | Header row |
| `header-actions` | Wrapper of the `header-actions` slot |
| `label` | The small label above the heading |
| `heading` | The heading |
| `close-button` | The × button |
| `body` | Scrollable body |
| `footer` | Footer holding the action buttons |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-modal-radius` |  | Corner radius (default 0; Kanok: 12px) |
| `--ui-modal-shadow` |  | `box-shadow` of the box (default none) |
| `--ui-modal-scrim` |  | The overlay behind the box (default `rgb(22 22 22 / 0.5)`) |
| `--ui-overlay-background` |  | The box's surface, shared by every floating surface (default layer 1) |
| `--ui-overlay-border` |  | The box's border, shared by modal, side panel and tearsheet (default none) |
| `--ui-modal-footer-gap` |  | Gap between footer buttons (default none: they touch) |
| `--ui-modal-footer-height` |  | Footer `min-height` (default 64px) |
| `--ui-modal-footer-padding` |  | Footer padding (default 0: full-bleed buttons) |
| `--ui-modal-footer-border` |  | Border above the footer (default none) |
| `--ui-modal-button-flex` |  | `flex` of each footer button (default `0 1 50%`: halves) |
| `--ui-modal-button-height` |  | Height of the footer buttons (default 64px) |
| `--ui-modal-button-align` |  | `align-items` of their content (default `flex-start`: text at the top) |
| `--ui-modal-button-padding-top` |  | Their top padding (default 14px) |
| `--ui-close-size` |  | Size of the × button (default 48px; Kanok: 32px) |
| `--ui-close-inset` |  | Margin that sets the × in from the corner (default 0; Kanok: 8px) |
| `--ui-icon-control-radius` |  | Corners of the ×, its hover fill and its ring (default 0; Kanok: round) |
| `--ui-focus-offset` |  | `outline-offset` of the ×'s focus ring (default -2px: inside; Kanok: 2px outside) |
| `--ui-modal-body-focus-radius` |  | Corners of the scrolling body's focus ring (default 0; Kanok: 6px) |


