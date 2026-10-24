# Notification

A notification tells the user about a change or a problem: a file that failed to upload, a draft that was restored, a policy that applies to the page. One element covers Carbon's inline, actionable, toast and callout notifications. For toasts that stack in the corner of the screen, see [Toast](https://parntengza.github.io/kanok-ui-docs/en/toast/).


HTML:

```html
<ui-notification kind="error" heading="Upload failed" subtitle="contract.pdf is larger than 25 MB."></ui-notification>
```

React:

```tsx
<UiNotification kind="error" heading="Upload failed" subtitle="contract.pdf is larger than 25 MB." />
```

React + Tailwind:

```tsx
<Notification kind="error" title="Upload failed" subtitle="contract.pdf is larger than 25 MB." />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/notification
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-notification
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/notification.json
#    to its target:
#    components/ui/primitives/notification/notification.styles.ts
#    components/ui/primitives/notification/notification.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-notification, shared-element, shared-events, shared-field, shared-localize, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-notification.json
#    to its target:
#    components/ui/react-tw/notification.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-notification, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/notification';</script>

<ui-notification kind="success" heading="Contract sent" subtitle="3 signers were notified."></ui-notification>
```

React:

```tsx
import { UiNotification } from '@purpurabog/ui/react';

<UiNotification kind="success" heading="Contract sent" subtitle="3 signers were notified." />
```

React + Tailwind:

```tsx
import { Notification } from '@/components/ui/react-tw/notification';

<Notification kind="success" title="Contract sent" subtitle="3 signers were notified." />
```

`heading` is the bold title (`title` in React + Tailwind) and `subtitle` the text after it. The default `kind` is `error`, so always set it. An inline notification is 288px to 832px wide, depending on the screen.

## Kinds

`kind` sets the colour and the icon: `error`, `success`, `info`, `info-square`, `warning` and `warning-alt`.


HTML:

```html
<ui-notification kind="error" heading="Payment failed" subtitle="The bank declined the transfer."></ui-notification>
<ui-notification kind="success" heading="Contract signed" subtitle="All parties have signed."></ui-notification>
<ui-notification kind="info" heading="New template" subtitle="Lease 2026 is ready to use."></ui-notification>
<ui-notification kind="info-square" heading="Read only" subtitle="This contract is archived."></ui-notification>
<ui-notification kind="warning" heading="Stamp duty unpaid" subtitle="Pay it before the contract is filed."></ui-notification>
<ui-notification kind="warning-alt" heading="Expires soon" subtitle="The lease ends on 31 October 2026."></ui-notification>
```

React:

```tsx
<UiNotification kind="error" heading="Payment failed" subtitle="The bank declined the transfer." />
<UiNotification kind="success" heading="Contract signed" subtitle="All parties have signed." />
<UiNotification kind="info" heading="New template" subtitle="Lease 2026 is ready to use." />
<UiNotification kind="info-square" heading="Read only" subtitle="This contract is archived." />
<UiNotification kind="warning" heading="Stamp duty unpaid" subtitle="Pay it before the contract is filed." />
<UiNotification kind="warning-alt" heading="Expires soon" subtitle="The lease ends on 31 October 2026." />
```

React + Tailwind:

```tsx
<Notification kind="error" title="Payment failed" subtitle="The bank declined the transfer." />
<Notification kind="success" title="Contract signed" subtitle="All parties have signed." />
<Notification kind="info" title="New template" subtitle="Lease 2026 is ready to use." />
<Notification kind="info-square" title="Read only" subtitle="This contract is archived." />
<Notification kind="warning" title="Stamp duty unpaid" subtitle="Pay it before the contract is filed." />
<Notification kind="warning-alt" title="Expires soon" subtitle="The lease ends on 31 October 2026." />
```

## Low contrast

A notification is dark (the inverse surface) by default. `low-contrast` gives it a light tint of its kind with a thin border instead, which sits more quietly in a form.


HTML:

```html
<ui-notification kind="info" low-contrast heading="Auto-save is on" subtitle="Changes are saved every minute."></ui-notification>
<ui-notification kind="warning" low-contrast heading="Owner on leave" subtitle="Ananya P. is away until 20 October."></ui-notification>
```

React:

```tsx
<UiNotification kind="info" lowContrast heading="Auto-save is on" subtitle="Changes are saved every minute." />
<UiNotification kind="warning" lowContrast heading="Owner on leave" subtitle="Ananya P. is away until 20 October." />
```

React + Tailwind:

```tsx
<Notification kind="info" lowContrast title="Auto-save is on" subtitle="Changes are saved every minute." />
<Notification kind="warning" lowContrast title="Owner on leave" subtitle="Ananya P. is away until 20 October." />
```

## Links and other content

When the title or subtitle needs markup, put it in `slot="title"` or `slot="subtitle"`. Anything without a slot goes after the subtitle: a link, a short list. React + Tailwind takes markup in `title` and `subtitle`, and extra content as children.


HTML:

```html
<ui-notification kind="warning" low-contrast heading="Stamp duty">
  <span slot="subtitle">Not paid yet for <strong>CT-2026-0142</strong>.</span>
  <a href="#notification-pay">Pay now</a>
</ui-notification>
```

React:

```tsx
<UiNotification kind="warning" lowContrast heading="Stamp duty">
  <span slot="subtitle">Not paid yet for <strong>CT-2026-0142</strong>.</span>
  <a href="/stamp-duty">Pay now</a>
</UiNotification>
```

React + Tailwind:

```tsx
<Notification kind="warning" lowContrast title="Stamp duty" subtitle={<>Not paid yet for <strong>CT-2026-0142</strong>.</>}>
  <a href="/stamp-duty">Pay now</a>
</Notification>
```

## With an action

`action-label` adds a button for one quick action, such as Undo or Retry (Carbon's actionable notification). Pressing it fires `ui-action`; it doesn't close the notification. An actionable notification becomes an `alertdialog`: when it appears, focus moves to the action button, Tab goes round its own controls, and Esc closes it while focus is inside it (as Carbon: an Esc meant for something else, such as a modal, leaves it open). Add `no-autofocus` when it is on the page from the start, as here, so it doesn't take focus from the page.


HTML:

```html
<ui-notification id="notification-undo" kind="info" heading="Draft deleted" subtitle="Lease draft for the 3rd floor." action-label="Undo" no-autofocus></ui-notification>
<p>Action: <output id="notification-undo-out"></output></p>

<script type="module">
  const note = document.getElementById('notification-undo');
  note.addEventListener('ui-action', () => {
    document.getElementById('notification-undo-out').value = 'restored';
    note.close();
  });
</script>
```

React:

```tsx
<UiNotification kind="info" heading="Draft deleted" subtitle="Lease draft for the 3rd floor." actionLabel="Undo" noAutofocus onUiAction={restore} />
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(true);

<Notification kind="info" title="Draft deleted" subtitle="Lease draft for the 3rd floor." actionLabel="Undo" noAutofocus onAction={() => { restore(); setOpen(false); }} open={open} onClose={() => setOpen(false)} />
```

`close()` closes it the way × does; it is described under [Closing](#closing).

## Callout

`variant="callout"` is a static box of guidance that belongs to the page, not a message about something that just happened. It has no role, no close button and never takes focus. Its action button is described by the title.


HTML:

```html
<ui-notification variant="callout" kind="info" heading="Signing closes on Friday" subtitle="Two signers have not opened the document yet." action-label="Send reminder"></ui-notification>
<ui-notification variant="callout" kind="warning" low-contrast heading="Retention policy" subtitle="Archived requests are deleted after 10 years."></ui-notification>
```

React:

```tsx
<UiNotification variant="callout" kind="info" heading="Signing closes on Friday" subtitle="Two signers have not opened the document yet." actionLabel="Send reminder" onUiAction={remind} />
<UiNotification variant="callout" kind="warning" lowContrast heading="Retention policy" subtitle="Archived requests are deleted after 10 years." />
```

React + Tailwind:

```tsx
<Notification variant="callout" kind="info" title="Signing closes on Friday" subtitle="Two signers have not opened the document yet." actionLabel="Send reminder" onAction={remind} />
<Notification variant="callout" kind="warning" lowContrast title="Retention policy" subtitle="Archived requests are deleted after 10 years." />
```

## Toast look

`variant="toast"` is the 288px card with a shadow that Carbon uses for toasts: the text stacks, `caption` adds a small line (often the time), and the action becomes a tertiary button under the text. To show toasts in the corner of the screen and stack them, use the toaster: [Toast](https://parntengza.github.io/kanok-ui-docs/en/toast/).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start">
  <ui-notification variant="toast" kind="success" heading="Contract sent" subtitle="3 signers were notified." caption="10:42"></ui-notification>
  <ui-notification variant="toast" kind="error" low-contrast heading="Upload failed" subtitle="Try a smaller file." action-label="Retry" no-autofocus></ui-notification>
</div>
```

React:

```tsx
<UiNotification variant="toast" kind="success" heading="Contract sent" subtitle="3 signers were notified." caption="10:42" />
<UiNotification variant="toast" kind="error" lowContrast heading="Upload failed" subtitle="Try a smaller file." actionLabel="Retry" noAutofocus />
```

React + Tailwind:

```tsx
<Notification variant="toast" kind="success" title="Contract sent" subtitle="3 signers were notified." caption="10:42" />
<Notification variant="toast" kind="error" lowContrast title="Upload failed" subtitle="Try a smaller file." actionLabel="Retry" noAutofocus />
```

## Close after a time

`timeout` closes the notification by itself after that many milliseconds (reason `timeout`). The countdown pauses while the pointer is over it or focus is inside it, and a notification with an action never closes by itself, so nobody loses a message they are reading. Hover the toast below to hold it.


HTML:

```html
<ui-notification id="notification-timeout" variant="toast" kind="info" heading="Saved" subtitle="This closes after 5 seconds." timeout="5000"></ui-notification>
<ui-button id="notification-timeout-again" kind="tertiary" size="sm">Show again</ui-button>

<script type="module">
  const note = document.getElementById('notification-timeout');
  document.getElementById('notification-timeout-again').addEventListener('click', () => (note.open = true));
</script>
```

React:

```tsx
<UiNotification variant="toast" kind="info" heading="Saved" subtitle="This closes after 5 seconds." timeout={5000} />
```

React + Tailwind:

```tsx
<Notification variant="toast" kind="info" title="Saved" subtitle="This closes after 5 seconds." timeout={5000} />
```

Setting `open` back to true shows it again and starts the countdown afresh.

## Full width

`full-width` lets an inline notification or a callout fill its container instead of stopping at Carbon's widths: a banner across the top of a page or a card. A toast stays 288px.


HTML:

```html
<ui-notification kind="info" low-contrast full-width heading="Scheduled maintenance" subtitle="The contract system is read-only tonight from 22:00 to 23:00."></ui-notification>
```

React:

```tsx
<UiNotification kind="info" lowContrast fullWidth heading="Scheduled maintenance" subtitle="The contract system is read-only tonight from 22:00 to 23:00." />
```

React + Tailwind:

```tsx
<Notification kind="info" lowContrast fullWidth title="Scheduled maintenance" subtitle="The contract system is read-only tonight from 22:00 to 23:00." />
```

## Closing

×, Esc (on an actionable one) and the timeout fire `ui-request-close`, cancelable, with the `reason`: `close-button`, `escape` or `timeout`. Unless you call `preventDefault()`, the notification sets `open` to false (it stays in the page, hidden) and fires `ui-close`. If focus was inside it, focus goes back to where it was before. `hide-close-button` removes × when the message must stay until the problem is fixed.


HTML:

```html
<ui-notification id="notification-close" kind="success" heading="Approval sent" subtitle="Chaiya R. will get an email."></ui-notification>
<ui-notification kind="error" hide-close-button heading="Bank account missing" subtitle="Add the vendor's account before you pay."></ui-notification>
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="notification-close-again" kind="tertiary" size="sm">Show again</ui-button>
  <span>Closed by: <output id="notification-close-out"></output></span>
</div>

<script type="module">
  const note = document.getElementById('notification-close');
  note.addEventListener('ui-close', (event) => (document.getElementById('notification-close-out').value = event.detail.reason));
  document.getElementById('notification-close-again').addEventListener('click', () => (note.open = true));
</script>
```

React:

```tsx
<UiNotification kind="success" heading="Approval sent" subtitle="Chaiya R. will get an email." open={open} onUiClose={(e) => { setOpen(false); setReason(e.detail.reason); }} />
<UiNotification kind="error" hideCloseButton heading="Bank account missing" subtitle="Add the vendor's account before you pay." />
```

React + Tailwind:

```tsx
// return false from onClose to keep it open
<Notification kind="success" title="Approval sent" subtitle="Chaiya R. will get an email." open={open} onClose={(reason) => { setOpen(false); setReason(reason); }} />
<Notification kind="error" hideCloseButton title="Bank account missing" subtitle="Add the vendor's account before you pay." />
```

Without `open`, the React + Tailwind notification hides itself when it closes.

## Errors after a submit

A notification can sum up what blocks a form. It is a polite `status` by default; `role="alert"` makes screen readers announce it at once, for an error the user must deal with now. Press Check below.


HTML:

```html
<ui-notification id="notification-check" kind="error" role="alert" open="false" heading="2 problems" subtitle="Add the counterparty's tax ID and the start date."></ui-notification>
<ui-button id="notification-check-run">Check contract</ui-button>

<script type="module">
  const note = document.getElementById('notification-check');
  document.getElementById('notification-check-run').addEventListener('click', () => (note.open = true));
</script>
```

React:

```tsx
<UiNotification kind="error" role="alert" open={errors.length > 0} heading={`${errors.length} problems`} subtitle={errors.join(' ')} />
<UiButton onClick={check}>Check contract</UiButton>
```

React + Tailwind:

```tsx
<Notification kind="error" role="alert" open={errors.length > 0} title={`${errors.length} problems`} subtitle={errors.join(' ')} />
<Button onClick={check}>Check contract</Button>
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Reaches the content's links, the action button and × in order; in an actionable notification it goes round them |
| Enter, Space | Press the focused button |
| Esc | Closes an actionable notification while focus is inside it (`close-on-escape="false"` turns it off) |

## Accessibility

- The role is `status` by default (announced politely), none for a callout, and `alertdialog` with an action, named by the title and described by the subtitle. `role` sets another, such as `alert`.
- Screen readers announce changes inside a live region; a notification added to the page together with its text may not be read. The [toaster](https://parntengza.github.io/kanok-ui-docs/en/toast/) keeps one region in the page for its toasts, so every toast is announced.
- The icon is named after the kind ("error icon"); `icon-label` changes it. × is named "Close notification" in the page language; `close-label` changes it.
- Don't put a `timeout` on a message people need to act on.

Unstyled React parts with the same behaviour: [Headless Notification](https://parntengza.github.io/kanok-ui-docs/en/headless-notification/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-notification>` · React `UiNotification`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `title` |  |  |  |  |
| `role` |  |  |  |  |
| `variant` | `variant` | `NotificationVariant` | `'inline'` | Inline (default) or toast. |
| `kind` | `kind` | `NotificationKind` | `'error'` | Status kind; sets the colour and the icon. |
| `low-contrast` | `lowContrast` | `boolean` | `false` | Tinted surface with primary text instead of the inverse surface. |
| `heading` | `heading` | `string` | `''` | Bold title; the `title` slot replaces it when markup is needed. (Before 0.5: the `title` attribute, still accepted.) |
| `subtitle` | `subtitle` | `string` | `''` | Body text; the `subtitle` slot replaces it when markup is needed. |
| `caption` | `caption` | `string` | `''` | Toast only: small text under the subtitle, e.g. the time. |
| `action-label` | `actionLabel` | `string` | `''` | Label of the action button; set it to get Carbon's actionable notification. |
| `timeout` | `timeout` | `number` | `0` | Milliseconds after which the notification closes itself (toast); 0 = never. Paused on hover / focus; ignored with `action-label`. |
| `hide-close-button` | `hideCloseButton` | `boolean` | `false` |  |
| `close-on-escape` | `closeOnEscape` | `boolean` | `true` | Esc closes an actionable notification while focus is inside it (Carbon `closeOnEscape`). |
| `no-autofocus` | `noAutofocus` | `boolean` | `false` | Keep focus where it is instead of moving it to the action button (Carbon `hasFocus={false}`). |
| `full-width` | `fullWidth` | `boolean` | `false` | Fills its container instead of Carbon's 288–832px cap (inline / callout; a toast stays 288px). |
| `close-label` | `closeLabel` | `string` | `''` | Accessible name of the close button. |
| `icon-label` | `iconLabel` | `string` | `''` | Accessible description of the status icon; defaults to "`kind` icon" (e.g. "error icon") like Carbon. |
| `open` | `open` | `boolean` | `true` | False once closed (reflects `open="false"`); set back to true to show it again. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `role` | `NotificationRole \| null` | ARIA role of the notification box; defaults to `status`, or `alertdialog` when there is an action button. A `role` attribute is read and moved inside. |

#### Methods

| Method | Description |
|---|---|
| `close(reason)` | Asks to close (`ui-request-close`, cancelable); hides and fires `ui-close` unless prevented. |
| `focus(options)` | Focus the action button, else the close button. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-close` | `onUiClose` | After it closed |
| `ui-action` | `onUiAction` | The action button was pressed |
| `ui-request-close` | `onUiRequestClose` | Cancelable; detail: { reason: 'close-button' \| 'escape' \| 'timeout' } |

#### Slots

| Slot | Description |
|---|---|
| (default) | Extra content after the subtitle (links, details) |
| `title` | Title with markup; the `heading` attribute is the plain-text fallback |
| `subtitle` | Subtitle with markup; the `subtitle` attribute is the plain-text fallback |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The notification box |
| `icon` | The status icon |
| `title` | The title |
| `subtitle` | The subtitle |
| `caption` | The toast caption |
| `action-button` | The action button |
| `close-button` | The close button |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-notification-radius` |  | Corner radius (default 0; Kanok: 8px) |
| `--ui-notification-bar-width` |  | Width of the status bar at the start (default 3px; Kanok: 0, the icon tells the kind) |
| `--ui-notification-frame-start` |  | Low contrast: the frame's start side (default 0, the bar is there; Kanok: 1px) |
| `--ui-notification-background` |  | / --ui-notification-ink / --ui-notification-edge - The high-contrast box: fill, text and an extra `box-shadow` (default Carbon's inverse block, none; Kanok: the raised floating surface) |
| `--ui-notification-link` |  | / --ui-notification-hover / --ui-notification-focus - On that box: links and the action, the action's hover and the focus ring (default link-inverse, inverse hover, inverse ink) |
| `--ui-toast-shadow` |  | A toast's shadow (default `0 2px 6px 0 rgb(0 0 0 / 0.2)`) |
| `--ui-close-size` |  | Size of the × button (default 48px; Kanok: 32px) |
| `--ui-close-inset` |  | Margin that sets the × in from the corner (default 0; Kanok: 8px) |
| `--ui-icon-control-radius` |  | Corners of the ×, its hover fill and its ring (default 0; Kanok: round) |
| `--ui-focus-offset` |  | `outline-offset` of the ×'s focus ring (default -2px: inside; Kanok: 2px outside) |


