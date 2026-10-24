# Headless Toast

The `Toaster` parts give you the behaviour of the styled [Toast](https://parntengza.github.io/kanok-ui-docs/en/toast/) region with no styles: a queue of toasts (at most `max`, a new one closes the oldest, the same `id` replaces an open one), one polite live region that is in the page before any toast so each one is announced, placed in the top layer from the start and lifted above a modal dialog when a toast arrives while one is open.

You own the markup of each toast (usually the [Notification](https://parntengza.github.io/kanok-ui-docs/en/headless-notification/) parts), where the region sits and every style.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Notification, Toaster } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Notification, Toaster } from '@purpurabog/ui/headless';

type Toast = { title: string; subtitle?: string };

// once per app: any code can add to it
const queue = new Toaster.ToastQueue<Toast>();

export default function Example() {
  const toasts = Toaster.useToasts(queue);
  return (
    <>
      <button type="button" onClick={() => queue.add({ title: 'Contract saved', subtitle: 'CT-2026-0142' })} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Save contract
      </button>
      <Toaster.Root queue={queue} aria-label="Notifications" className="pointer-events-none fixed inset-auto end-4 top-16 m-0 flex flex-col-reverse gap-2 overflow-visible bg-transparent p-0">
        {toasts.map(({ key, data }) => (
          <Notification.Root key={key} variant="toast" role="none" timeout={Toaster.toastTimeout('success')} onClose={() => queue.remove(key)}>
            <Notification.Box className="pointer-events-auto relative w-72 border-s-[3px] border-success bg-inverse-canvas py-4 ps-3 pe-12 text-sm text-inverse-ink shadow-lg">
              <Notification.Title className="block font-semibold">{data.title}</Notification.Title>
              <Notification.Subtitle className="block">{data.subtitle}</Notification.Subtitle>
              <Notification.Close aria-label="Close notification" className="absolute end-0 top-0 grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                  <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
                </svg>
              </Notification.Close>
            </Notification.Box>
          </Notification.Root>
        ))}
      </Toaster.Root>
    </>
  );
}
```

Each toast is a `Notification` with `role="none"`, because the region announces it; remove it from the queue in its `onClose`. `Root` is a `popover`, so it sits in the top layer: place it with `fixed` and reset the popover's `inset`, `margin` and background, as here.

## Anatomy

```tsx
<Toaster.Root queue={queue} aria-label="Notifications">
  <Notification.Root>
    <Notification.Box>
      <Notification.Title />
      <Notification.Subtitle />
      <Notification.Close />
    </Notification.Box>
  </Notification.Root>
</Toaster.Root>
```

## Kinds and how long they stay

`Toaster.toastTimeout(kind, timeout?)` is the rule the styled toaster uses: the `timeout` you give, else 5 seconds for info and success and 0 (stays until closed) for error and warning.


React (live React example):

```tsx
import { Notification, Toaster } from '@purpurabog/ui/headless';

type Kind = 'success' | 'info' | 'warning' | 'error';
type Toast = { kind: Kind; title: string };

const queue = new Toaster.ToastQueue<Toast>();
const border: Record<Kind, string> = { success: 'border-success', info: 'border-info', warning: 'border-warning', error: 'border-error' };
const samples: Toast[] = [
  { kind: 'success', title: 'Approval sent' },
  { kind: 'info', title: 'New template ready' },
  { kind: 'warning', title: 'Stamp duty unpaid' },
  { kind: 'error', title: 'Could not save' },
];

export default function Example() {
  const toasts = Toaster.useToasts(queue);
  return (
    <div className="flex flex-wrap gap-4">
      {samples.map((toast) => (
        <button key={toast.kind} type="button" onClick={() => queue.add(toast)} className="h-10 border border-interactive px-4 text-sm text-interactive capitalize hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          {toast.kind}
        </button>
      ))}
      <Toaster.Root queue={queue} aria-label="Notifications" className="pointer-events-none fixed inset-auto end-4 top-16 m-0 flex flex-col-reverse gap-2 overflow-visible bg-transparent p-0">
        {toasts.map(({ key, data }) => (
          <Notification.Root key={key} variant="toast" role="none" timeout={Toaster.toastTimeout(data.kind)} onClose={() => queue.remove(key)}>
            <Notification.Box className={`pointer-events-auto relative w-72 border-s-[3px] ${border[data.kind]} bg-inverse-canvas py-4 ps-3 pe-12 text-sm text-inverse-ink shadow-lg`}>
              <Notification.Title className="block font-semibold">{data.title}</Notification.Title>
              <Notification.Subtitle className="block text-inverse-ink-muted">{Toaster.toastTimeout(data.kind) ? 'Closes after 5 seconds.' : 'Stays until you close it.'}</Notification.Subtitle>
              <Notification.Close aria-label="Close notification" className="absolute end-0 top-0 grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                  <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
                </svg>
              </Notification.Close>
            </Notification.Box>
          </Notification.Root>
        ))}
      </Toaster.Root>
    </div>
  );
}
```

## Replace, and how many at once

`queue.add(data, id)` replaces an open toast with the same `id` instead of stacking another: "Syncing…", then "Synced". `queue.max` (3 by default) is how many show at once; a new toast drops the oldest. `queue.remove(key)` and `queue.clear()` take toasts away.


React (live React example):

```tsx
import { Notification, Toaster } from '@purpurabog/ui/headless';

type Toast = { title: string; done?: boolean };

const queue = new Toaster.ToastQueue<Toast>();
queue.max = 2;
let signers = 0;

export default function Example() {
  const toasts = Toaster.useToasts(queue);
  const sync = () => {
    queue.add({ title: 'Syncing…' }, 'sync');
    setTimeout(() => queue.add({ title: 'Synced', done: true }, 'sync'), 2000);
  };
  const addSigner = () => {
    signers += 1;
    queue.add({ title: `Signer ${signers} added`, done: true });
  };
  return (
    <div className="flex flex-wrap gap-4">
      <button type="button" onClick={sync} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Sync contracts
      </button>
      <button type="button" onClick={addSigner} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Add a signer
      </button>
      <button type="button" onClick={() => queue.clear()} className="h-10 px-4 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
        Clear all
      </button>
      <Toaster.Root queue={queue} aria-label="Notifications" className="pointer-events-none fixed inset-auto end-4 top-16 m-0 flex flex-col-reverse gap-2 overflow-visible bg-transparent p-0">
        {toasts.map(({ key, data }) => (
          <Notification.Root key={key} variant="toast" role="none" timeout={data.done ? 5000 : 0} onClose={() => queue.remove(key)}>
            <Notification.Box className="pointer-events-auto relative w-72 border-s-[3px] border-info bg-inverse-canvas py-4 ps-3 pe-12 text-sm text-inverse-ink shadow-lg">
              <Notification.Title className="block font-semibold">{data.title}</Notification.Title>
              <Notification.Close aria-label="Close notification" className="absolute end-0 top-0 grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                  <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
                </svg>
              </Notification.Close>
            </Notification.Box>
          </Notification.Root>
        ))}
      </Toaster.Root>
    </div>
  );
}
```

`queue.add` returns the toast's `key`. A new key each time also gives the `Notification` a fresh start, so a replaced toast's timeout starts again.

## With an action

Leave out `role="none"` and pass `actionable` for a toast with an action: it keeps its `alertdialog` role, takes focus, keeps Tab inside and never closes by itself. Use it only when the action is worth that interruption.


React (live React example):

```tsx
import { Notification, Toaster } from '@purpurabog/ui/headless';

type Toast = { title: string; retry?: boolean };

const queue = new Toaster.ToastQueue<Toast>();

function RetryAction() {
  const { requestClose } = Notification.useNotificationContext();
  return (
    <Notification.Action
      onClick={() => {
        requestClose('close-button');
        queue.add({ title: 'Retrying…' });
      }}
      className="ms-0 mt-4 h-8 border border-notification-action-tertiary-inverse px-4 text-notification-action-tertiary-inverse hover:bg-notification-action-tertiary-inverse-hover hover:text-notification-action-tertiary-inverse-text focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink"
    >
      Retry
    </Notification.Action>
  );
}

export default function Example() {
  const toasts = Toaster.useToasts(queue);
  return (
    <>
      <button type="button" onClick={() => queue.add({ title: 'Upload failed', retry: true })} className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
        Upload contract.pdf
      </button>
      <Toaster.Root queue={queue} aria-label="Notifications" className="pointer-events-none fixed inset-auto end-4 top-16 m-0 flex flex-col-reverse gap-2 overflow-visible bg-transparent p-0">
        {toasts.map(({ key, data }) => (
          <Notification.Root key={key} variant="toast" role={data.retry ? undefined : 'none'} actionable={data.retry} timeout={data.retry ? 0 : 5000} onClose={() => queue.remove(key)}>
            <Notification.Box className={`pointer-events-auto relative w-72 border-s-[3px] ${data.retry ? 'border-warning' : 'border-info'} bg-inverse-canvas py-4 ps-3 pe-12 text-sm text-inverse-ink shadow-lg`}>
              <Notification.Title className="block font-semibold">{data.title}</Notification.Title>
              <Notification.Subtitle className="block">contract.pdf</Notification.Subtitle>
              {data.retry ? <RetryAction /> : null}
              <Notification.Close aria-label="Close notification" className="absolute end-0 top-0 grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                  <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
                </svg>
              </Notification.Close>
            </Notification.Box>
          </Notification.Root>
        ))}
      </Toaster.Root>
    </>
  );
}
```

## Style it

Where the region sits is your CSS: the top end corner under the header (newest at the top, `flex-col-reverse`), or the bottom end corner (newest at the bottom). `Toaster.ToasterPlacement` (`'top-end' | 'bottom-end'`) is the type the styled toaster uses for it.


React (live React example):

```tsx
import { useState } from 'react';
import { Notification, Toaster } from '@purpurabog/ui/headless';

const queue = new Toaster.ToastQueue<{ title: string }>();
const corner: Record<Toaster.ToasterPlacement, string> = {
  'top-end': 'top-16 flex-col-reverse',
  'bottom-end': 'bottom-8 flex-col',
};

export default function Example() {
  const toasts = Toaster.useToasts(queue);
  const [placement, setPlacement] = useState<Toaster.ToasterPlacement>('bottom-end');
  return (
    <div className="flex flex-wrap gap-4">
      {(['top-end', 'bottom-end'] as const).map((side) => (
        <button
          key={side}
          type="button"
          onClick={() => {
            setPlacement(side);
            queue.add({ title: `Link copied (${side})` });
          }}
          className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus"
        >
          {side}
        </button>
      ))}
      <Toaster.Root queue={queue} aria-label="Notifications" className={`pointer-events-none fixed inset-auto end-4 m-0 flex gap-2 overflow-visible bg-transparent p-0 ${corner[placement]}`}>
        {toasts.map(({ key, data }) => (
          <Notification.Root key={key} variant="toast" role="none" timeout={5000} onClose={() => queue.remove(key)}>
            <Notification.Box className="pointer-events-auto relative w-72 border-s-[3px] border-info bg-inverse-canvas py-4 ps-3 pe-12 text-sm text-inverse-ink shadow-lg">
              <Notification.Title className="block font-semibold">{data.title}</Notification.Title>
              <Notification.Close aria-label="Close notification" className="absolute end-0 top-0 grid size-12 place-items-center focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-inverse-ink">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                  <path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" />
                </svg>
              </Notification.Close>
            </Notification.Box>
          </Notification.Root>
        ))}
      </Toaster.Root>
    </div>
  );
}
```
```css
/* className="toaster" on Root */
.toaster { position: fixed; inset: auto; inset-block-start: 64px; inset-inline-end: 16px; margin: 0; padding: 0; border: 0; background: transparent; overflow: visible; display: flex; flex-direction: column-reverse; gap: 8px; pointer-events: none; }
.toaster > * { pointer-events: auto; }
```

## Parts

### Toaster.Root

A `<section popover="manual" aria-live="polite" aria-relevant="additions">`, shown in the top layer as soon as it mounts. It takes every section prop except `popover`. When a toast is added while a modal dialog is open, it shows itself again so it is drawn above the modal.

| Prop | Type | Default | |
|---|---|---|---|
| `queue` | `Toaster.ToastQueue<T>` | | The toasts this region shows (required); render them as its children |

Give it an `aria-label`, such as "Notifications".

### Toaster.ToastQueue

A class: `new Toaster.ToastQueue<T>()` holds the open toasts, oldest first.

| Member | |
|---|---|
| `add(data, id?)` | Adds a toast and returns its `key`; replaces an open one with the same `id`; drops the oldest beyond `max` |
| `remove(key)` | Removes one toast |
| `clear()` | Removes every toast |
| `max` | How many toasts at once (default 3) |
| `toasts` | The open toasts: `{ key, id?, data }[]` |
| `subscribe(listener)` | Calls `listener` on every change; returns the unsubscribe function |

### Toaster.useToasts

`Toaster.useToasts(queue)` returns the queue's toasts and re-renders when they change.

### Toaster.toastTimeout

`Toaster.toastTimeout(kind, timeout?)` returns `timeout` when given, else 5000 for `info` and `success`, 0 for `error`, `warning` and `warning-alt`.

## Keyboard and accessibility

The region announces each toast politely. The toasts have no role of their own (`role="none"`), except an actionable one, which is an `alertdialog` that takes focus and keeps Tab inside until it closes. The keys inside a toast are the [Notification](https://parntengza.github.io/kanok-ui-docs/en/headless-notification/)'s.

You add:

- An `aria-label` on `Root`.
- `role="none"` on toasts without an action.
- Feedback inside a modal as an inline notification: the page outside a modal dialog is inert, so a toast drawn above it can't be clicked or read by screen readers.
