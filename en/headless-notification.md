# Headless Notification

The `Notification` parts give you the behaviour of the styled [Notification](https://parntengza.github.io/kanok-ui-docs/en/notification/) with no styles: the right role (`status`, none for a callout, `alertdialog` with an action), focus moved to the action of an actionable one and Tab kept going round it, Esc that closes it while focus is inside, a `timeout` that pauses while it is hovered or holds focus, and focus sent back when it closes itself.

You own the markup, the icon, the text and every style. `Root` renders nothing while the notification is closed.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Notification } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Notification } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Notification.Root>
      <Notification.Box className="flex max-w-xl items-start gap-4 border-s-[3px] border-error bg-inverse-canvas ps-3 text-sm text-inverse-ink">
        <svg viewBox="0 0 20 20" role="img" aria-label="error icon" className="mt-3.5 size-5 shrink-0 fill-error">
          <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 13.5L10 11l-3.5 3.5L5 13l3.5-3.5L5 6l1.5-1.5L10 8l3.5-3.5L15 6l-3.5 3.5L15 13z" />
        </svg>
        <p className="flex-1 py-[15px]">
          <Notification.Title className="me-1 font-semibold">Upload failed</Notification.Title>
          <Notification.Subtitle>contract.pdf is larger than 25 MB.</Notification.Subtitle>
        </p>
        <Notification.Close aria-label="Close notification" className="grid size-12 shrink-0 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
            <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
          </svg>
        </Notification.Close>
      </Notification.Box>
    </Notification.Root>
  );
}
```

Without `open`, `Root` hides the notification itself when it closes. `Box` carries the role: `status` here, so screen readers read changes politely.

## Anatomy

```tsx
<Notification.Root>
  <Notification.Box>
    <Notification.Title />
    <Notification.Subtitle />
    <Notification.Action />
    <Notification.Close />
  </Notification.Box>
</Notification.Root>
```

## With an action

`actionable` (with an `Action` inside) makes the `Box` an `alertdialog`, named by `Title` and described by `Subtitle`. When it appears, focus moves to `Action` (`autoFocus={false}` keeps it where it is); Tab and Shift+Tab go round its controls; Esc closes it while focus is inside it (`closeOnEscape={false}` turns that off). When it closes through `Close`, Esc, the timeout or `requestClose` with focus inside, focus goes back to where it was; setting `open` to false yourself doesn't move focus (nor does Carbon). `Action` doesn't close the notification: in its `onClick`, call `requestClose` from `Notification.useNotificationContext()`, which closes it the way `Close` does and sends focus back.


React (live React example):

```tsx
import { useState } from 'react';
import { Notification } from '@purpurabog/ui/headless';

function UndoAction({ onUndo }: { onUndo: () => void }) {
  const { requestClose } = Notification.useNotificationContext();
  return (
    <Notification.Action
      onClick={() => {
        onUndo();
        requestClose('close-button');
      }}
      className="h-8 px-4 text-link-inverse hover:bg-inverse-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink"
    >
      Undo
    </Notification.Action>
  );
}

export default function Example() {
  const [shown, setShown] = useState(false);
  const [result, setResult] = useState('');
  return (
    <div className="grid justify-items-start gap-2">
      <button type="button" onClick={() => { setShown(true); setResult(''); }} className="h-10 bg-button-danger px-4 text-sm text-on-primary hover:bg-error-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Delete draft
      </button>
      <p className="text-xs text-ink-muted">Result: {result || '(none)'}</p>
      <Notification.Root actionable open={shown} onClose={() => setShown(false)}>
        <Notification.Box className="flex max-w-xl flex-wrap items-center gap-x-4 border-s-[3px] border-info bg-inverse-canvas ps-3 text-sm text-inverse-ink">
          <p className="flex-1 py-[15px]">
            <Notification.Title className="me-1 font-semibold">Draft deleted</Notification.Title>
            <Notification.Subtitle>Lease draft for the 3rd floor.</Notification.Subtitle>
          </p>
          <UndoAction onUndo={() => setResult('restored')} />
          <Notification.Close aria-label="Close notification" className="grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
              <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
            </svg>
          </Notification.Close>
        </Notification.Box>
      </Notification.Root>
    </div>
  );
}
```

## Callout

`variant="callout"` gives the `Box` no role: it is guidance that belongs to the page. Its `Action` is described by the `Title`. Leave out `Close` and `actionable`: a callout stays.


React (live React example):

```tsx
import { Notification } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Notification.Root variant="callout">
      <Notification.Box className="flex max-w-xl flex-wrap items-center gap-x-4 border border-s-[3px] border-info bg-notification-background-info ps-3 text-sm text-ink">
        <p className="flex-1 py-[15px]">
          <Notification.Title className="me-1 font-semibold">Signing closes on Friday</Notification.Title>
          <Notification.Subtitle>Two signers have not opened the document yet.</Notification.Subtitle>
        </p>
        <Notification.Action className="me-4 h-8 px-4 text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          Send reminder
        </Notification.Action>
      </Notification.Box>
    </Notification.Root>
  );
}
```

## Close after a time

`timeout` closes it after that many milliseconds (`'timeout'`). The countdown pauses while the pointer is over the `Box` or focus is inside it, and an `actionable` one never closes by itself. Hover the card to hold it.


React (live React example):

```tsx
import { useState } from 'react';
import { Notification } from '@purpurabog/ui/headless';

export default function Example() {
  const [shown, setShown] = useState(true);
  return (
    <div className="grid justify-items-start gap-4">
      <Notification.Root variant="toast" timeout={5000} open={shown} onClose={() => setShown(false)}>
        <Notification.Box className="relative w-72 border-s-[3px] border-success bg-inverse-canvas py-4 ps-3 pe-12 text-sm text-inverse-ink shadow-lg">
          <Notification.Title className="block font-semibold">Saved</Notification.Title>
          <Notification.Subtitle className="block">This closes after 5 seconds.</Notification.Subtitle>
          <Notification.Close aria-label="Close notification" className="absolute end-0 top-0 grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
              <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
            </svg>
          </Notification.Close>
        </Notification.Box>
      </Notification.Root>
      <button type="button" onClick={() => setShown(true)} className="h-8 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Show again
      </button>
    </div>
  );
}
```

Each time it shows again, the countdown starts afresh.

## Keep it open

`onClose(reason)` runs for `Close`, Esc and the timeout (`'close-button'`, `'escape'`, `'timeout'`). Return `false` to keep the notification open; with `open`, it closes only when you set `open` to false.


React (live React example):

```tsx
import { useState } from 'react';
import { Notification } from '@purpurabog/ui/headless';

export default function Example() {
  const [pinned, setPinned] = useState(true);
  const [reason, setReason] = useState<Notification.NotificationCloseReason>();
  return (
    <div className="grid justify-items-start gap-2">
      <Notification.Root
        onClose={(why) => {
          setReason(why);
          return !pinned;
        }}
      >
        <Notification.Box className="flex max-w-xl items-start gap-4 border border-s-[3px] border-warning bg-notification-background-warning ps-3 text-sm text-ink">
          <p className="flex-1 py-[15px]">
            <Notification.Title className="me-1 font-semibold">Stamp duty unpaid</Notification.Title>
            <Notification.Subtitle>Pay it before the contract is filed.</Notification.Subtitle>
          </p>
          <Notification.Close aria-label="Close notification" className="grid size-12 shrink-0 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
              <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
            </svg>
          </Notification.Close>
        </Notification.Box>
      </Notification.Root>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} className="size-4 accent-interactive" />
        Keep it until the duty is paid
      </label>
      <p className="text-xs text-ink-muted">Asked to close by: {reason ?? '(nothing yet)'}</p>
    </div>
  );
}
```

## Style it

The parts set no `data-*` attributes: the kind and the look are yours. Put the kind on the `Box` yourself, as `data-kind` here, and style on it.


React (live React example):

```tsx
import { Notification } from '@purpurabog/ui/headless';

const kinds = [
  { kind: 'success', title: 'Contract signed', text: 'All parties have signed.' },
  { kind: 'info', title: 'New template', text: 'Lease 2026 is ready to use.' },
  { kind: 'warning', title: 'Expires soon', text: 'The lease ends on 31 October 2026.' },
  { kind: 'error', title: 'Payment failed', text: 'The bank declined the transfer.' },
];

export default function Example() {
  return (
    <div className="grid gap-4">
      {kinds.map(({ kind, title, text }) => (
        <Notification.Root key={kind}>
          <Notification.Box
            data-kind={kind}
            className="flex max-w-xl items-start gap-4 border border-s-[3px] ps-3 text-sm text-ink data-[kind=error]:border-error data-[kind=error]:bg-notification-background-error data-[kind=info]:border-info data-[kind=info]:bg-notification-background-info data-[kind=success]:border-success data-[kind=success]:bg-notification-background-success data-[kind=warning]:border-warning data-[kind=warning]:bg-notification-background-warning"
          >
            <p className="flex-1 py-[15px]">
              <Notification.Title className="me-1 font-semibold">{title}</Notification.Title>
              <Notification.Subtitle>{text}</Notification.Subtitle>
            </p>
            <Notification.Close aria-label="Close notification" className="grid size-12 shrink-0 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
              </svg>
            </Notification.Close>
          </Notification.Box>
        </Notification.Root>
      ))}
    </div>
  );
}
```
```css
/* className="notification" and data-kind on Box */
.notification { display: flex; border-inline-start: 3px solid; }
.notification[data-kind='error'] { border-color: #da1e28; background: #fff1f1; }
.notification[data-kind='success'] { border-color: #24a148; background: #defbe6; }
.notification[role='alertdialog']:focus-within { outline: 2px solid #0f62fe; }
```

## Parts

### Notification.Root

Renders no element of its own: its children, while the notification is open. It holds the open state, moves focus, listens for Esc and runs the timeout.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Controlled visibility; without it the notification hides itself when it closes |
| `onClose` | `(reason: Notification.NotificationCloseReason) => boolean \| void` | | `Close`, Esc or the timeout: `'close-button'`, `'escape'`, `'timeout'`. Return `false` to keep it open |
| `variant` | `'inline' \| 'toast' \| 'callout'` | `'inline'` | A callout has no role |
| `role` | `'status' \| 'alert' \| 'log' \| 'alertdialog' \| 'none'` | | The `Box`'s role, in place of the one picked for you |
| `actionable` | `boolean` | `false` | It has an `Action`: an `alertdialog` that never closes by itself |
| `timeout` | `number` | `0` | Milliseconds before it closes itself; 0 = never |
| `closeOnEscape` | `boolean` | `true` | Esc closes an `alertdialog` one while focus is inside it |
| `autoFocus` | `boolean` | `true` | An `alertdialog` one moves focus to its `Action` when it appears |

`Notification.useNotificationContext()` returns the `Root`'s state (`open`, `variant`, `role`, `requestClose` …) to any component inside it.

### Notification.Box

A `<div>` with the role: `status` by default, none for a callout, `alertdialog` when `actionable`, or the `role` you set (`none` gives no role). An `alertdialog` one is named by `Title`, described by `Subtitle`, and keeps Tab going round its links and buttons. The timeout pauses while it is hovered or holds focus.

### Notification.Title, Notification.Subtitle

`<span>`s with ids (yours or `<id>-title`, `<id>-subtitle`). `Title` names an `alertdialog` one and describes a callout's `Action`; `Subtitle` describes an `alertdialog` one.

### Notification.Action

A `<button type="button">`: the first focus of an `alertdialog` one, and a Tab stop even in Safari (`tabIndex={0}`). In a callout, the `Title` describes it. It doesn't close the notification.

### Notification.Close

A `<button type="button">` that asks to close (`'close-button'`). Give it an `aria-label`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab / Shift+Tab | In an `alertdialog` one, goes round its links and buttons; otherwise the page's normal order |
| Esc | Closes an `alertdialog` one while focus is inside it (`closeOnEscape`) |

The parts set the role and, for an `alertdialog`, `aria-labelledby` and `aria-describedby`.

You add:

- The status icon with a name (`role="img"` and `aria-label`, such as "error icon"), or text that says the kind.
- An `aria-label` on `Close`.
- A live region that exists before the message, for messages that must be announced: render the `Root` in the page and change its text, or use the [Toast](https://parntengza.github.io/kanok-ui-docs/en/headless-toast/) region.
