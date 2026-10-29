# Badge indicator

A badge indicator is the small red mark in the corner of a ghost icon button, for things that wait for the user, such as approvals or new messages. With a count it shows the number; without one it is a dot. It belongs on an [icon button](https://parntengza.github.io/kanok-ui-docs/en/button/#notification-badge): `<ui-icon-button badge-count>` makes one for you.


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

The icons are Carbon's, from `@carbon/icons-react` (see [Icons](https://parntengza.github.io/kanok-ui-docs/en/icons/)).

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/badge-indicator
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-icon-button
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/badge-indicator.json
#    to its target:
#    components/ui/primitives/badge-indicator/badge-indicator.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-badge-indicator, shared-element, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-icon-button.json
#    to its target:
#    components/ui/react-tw/icon-button.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-badge-indicator, core-position, tw-badge-indicator, tw-button, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

`@purpurabog/ui/icon-button` brings the badge indicator with it. Import `@purpurabog/ui/badge-indicator` on its own only when you place `<ui-badge-indicator>` yourself.


HTML:

```html
<script type="module">import '@purpurabog/ui/icon-button';</script>

<ui-icon-button label="Approvals" badge-count="4">
  <svg viewBox="0 0 32 32"><!-- icon --></svg>
</ui-icon-button>
```

React:

```tsx
import { UiIconButton } from '@purpurabog/ui/react';
import { Notification as NotificationIcon } from '@carbon/icons-react';

<UiIconButton label="Approvals" badgeCount={4}><NotificationIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

import { IconButton } from '@/components/ui/react-tw/icon-button';

<IconButton label="Approvals" badgeCount={4}><NotificationIcon /></IconButton>
```

## Count or dot

`badge-count` (`badgeCount` in React) with a number above 0 shows the count in a 16px pill. 0 shows an 8px dot: something is new, but the number doesn't matter. Leave the attribute out for no badge.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button label="Purchase requests to approve" badge-count="12">
    <svg viewBox="0 0 32 32"><path d="M25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a.9.9 0 0 0-.3-.7ZM18 4.4 23.6 10H18ZM24 28H8V4h8v6a2 2 0 0 0 2 2h6Z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Comments, new" badge-count="0">
    <svg viewBox="0 0 32 32"><path d="M17.7 30 16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.8Z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Archive">
    <svg viewBox="0 0 32 32"><path d="M14 19h4a2 2 0 0 0 2-2v-1h-2v1h-4v-1h-2v1a2 2 0 0 0 2 2ZM28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM26 26H6V12h20Zm2-16H4V6h24Z"/></svg>
  </ui-icon-button>
</div>
```

React:

```tsx
import { Archive as ArchiveIcon, Chat as ChatIcon, Document as DocumentIcon } from '@carbon/icons-react';

<UiIconButton label="Purchase requests to approve" badgeCount={12}><DocumentIcon /></UiIconButton>
<UiIconButton label="Comments, new" badgeCount={0}><ChatIcon /></UiIconButton>
<UiIconButton label="Archive"><ArchiveIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Archive as ArchiveIcon, Chat as ChatIcon, Document as DocumentIcon } from '@carbon/icons-react';

<IconButton label="Purchase requests to approve" badgeCount={12}><DocumentIcon /></IconButton>
<IconButton label="Comments, new" badgeCount={0}><ChatIcon /></IconButton>
<IconButton label="Archive"><ArchiveIcon /></IconButton>
```

## Large counts

Past 999 the badge shows "999+", as in Carbon.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button label="Unread messages" badge-count="85">
    <svg viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.8 6.2 8ZM4 24V8.9l11.4 7.9a1 1 0 0 0 1.1 0L28 8.9V24Z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Unread messages" badge-count="1200">
    <svg viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.8 6.2 8ZM4 24V8.9l11.4 7.9a1 1 0 0 0 1.1 0L28 8.9V24Z"/></svg>
  </ui-icon-button>
</div>
```

React:

```tsx
import { Email as EmailIcon } from '@carbon/icons-react';

<UiIconButton label="Unread messages" badgeCount={85}><EmailIcon /></UiIconButton>
<UiIconButton label="Unread messages" badgeCount={1200}><EmailIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Email as EmailIcon } from '@carbon/icons-react';

<IconButton label="Unread messages" badgeCount={85}><EmailIcon /></IconButton>
<IconButton label="Unread messages" badgeCount={1200}><EmailIcon /></IconButton>
```

## Small buttons

Carbon designs the badge for the large (48px) ghost button. On a small button the dot sits 4px from the corner instead of 8px, so it stays on the button.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button label="Notifications, new" size="sm" badge-count="0">
    <svg viewBox="0 0 32 32"><path d="M28.7 19.3 26 16.6V13a10 10 0 0 0-9-10v-2h-2v2a10 10 0 0 0-9 10v3.6l-2.7 2.7A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.8a5 5 0 0 0 10 0V24h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.3-.7ZM19 24.8a3 3 0 0 1-6 0V24h6ZM27 22H5v-1.6l2.7-2.7A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .3.7l2.7 2.7Z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Notifications, new" size="md" badge-count="0">
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

<UiIconButton label="Notifications, new" size="sm" badgeCount={0}><NotificationIcon /></UiIconButton>
<UiIconButton label="Notifications, new" size="md" badgeCount={0}><NotificationIcon /></UiIconButton>
<UiIconButton label="Notifications, new" badgeCount={0}><NotificationIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<IconButton label="Notifications, new" size="sm" badgeCount={0}><NotificationIcon /></IconButton>
<IconButton label="Notifications, new" size="md" badgeCount={0}><NotificationIcon /></IconButton>
<IconButton label="Notifications, new" badgeCount={0}><NotificationIcon /></IconButton>
```

## Your own badge element

Instead of `badge-count`, put a `<ui-badge-indicator count="…">` inside the icon button. It takes the button's `badge-indicator` slot by itself, and the button still reads its count to screen readers. In React, `UiBadgeIndicator` works the same way. React + Tailwind has only `badgeCount` on `IconButton` for this; its `BadgeIndicator` is the part that `IconButton` draws.


HTML:

```html
<ui-icon-button label="Contracts to renew">
  <svg viewBox="0 0 32 32"><path d="M25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a.9.9 0 0 0-.3-.7ZM18 4.4 23.6 10H18ZM24 28H8V4h8v6a2 2 0 0 0 2 2h6Z"/></svg>
  <ui-badge-indicator count="7"></ui-badge-indicator>
</ui-icon-button>
```

React:

```tsx
import { UiBadgeIndicator, UiIconButton } from '@purpurabog/ui/react';
import { Document as DocumentIcon } from '@carbon/icons-react';

<UiIconButton label="Contracts to renew">
  <DocumentIcon />
  <UiBadgeIndicator count={7} />
</UiIconButton>
```

React + Tailwind:

```tsx
import { Document as DocumentIcon } from '@carbon/icons-react';

// no separate badge element in React + Tailwind: IconButton draws it from badgeCount
<IconButton label="Contracts to renew" badgeCount={7}><DocumentIcon /></IconButton>
```

## Update the count

Set `badgeCount` as the number changes. To take the badge away, set the property to `undefined` (`badgeCount={undefined}` in React). Approve the requests one by one below: the last one removes the badge.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button id="badge-indicator-approvals" label="Purchase requests to approve" badge-count="3">
    <svg viewBox="0 0 32 32"><path d="M25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10a.9.9 0 0 0-.3-.7ZM18 4.4 23.6 10H18ZM24 28H8V4h8v6a2 2 0 0 0 2 2h6Z"/></svg>
  </ui-icon-button>
  <ui-button id="badge-indicator-approve" kind="tertiary" size="md">Approve one</ui-button>
  <ui-button id="badge-indicator-reset" kind="ghost" size="md">Reset</ui-button>
</div>
<p>Waiting: <output id="badge-indicator-out">3</output></p>

<script type="module">
  const button = document.getElementById('badge-indicator-approvals');
  const out = document.getElementById('badge-indicator-out');
  let waiting = 3;
  const show = () => {
    button.badgeCount = waiting > 0 ? waiting : undefined;
    out.textContent = String(waiting);
  };
  document.getElementById('badge-indicator-approve').addEventListener('click', () => {
    waiting = Math.max(0, waiting - 1);
    show();
  });
  document.getElementById('badge-indicator-reset').addEventListener('click', () => {
    waiting = 3;
    show();
  });
</script>
```

React:

```tsx
import { Document as DocumentIcon } from '@carbon/icons-react';

<UiIconButton label="Purchase requests to approve" badgeCount={waiting > 0 ? waiting : undefined}>
  <DocumentIcon />
</UiIconButton>
<UiButton kind="tertiary" size="md" onClick={() => setWaiting(Math.max(0, waiting - 1))}>Approve one</UiButton>
```

React + Tailwind:

```tsx
import { Document as DocumentIcon } from '@carbon/icons-react';

<IconButton label="Purchase requests to approve" badgeCount={waiting > 0 ? waiting : undefined}>
  <DocumentIcon />
</IconButton>
<Button kind="tertiary" size="md" onClick={() => setWaiting(Math.max(0, waiting - 1))}>Approve one</Button>
```

## Disabled

A disabled icon button hides its badge, and screen readers no longer hear the count.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-icon-button label="Approvals" badge-count="4" disabled>
    <svg viewBox="0 0 32 32"><path d="M28.7 19.3 26 16.6V13a10 10 0 0 0-9-10v-2h-2v2a10 10 0 0 0-9 10v3.6l-2.7 2.7A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.8a5 5 0 0 0 10 0V24h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.3-.7ZM19 24.8a3 3 0 0 1-6 0V24h6ZM27 22H5v-1.6l2.7-2.7A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .3.7l2.7 2.7Z"/></svg>
  </ui-icon-button>
</div>
```

React:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<UiIconButton label="Approvals" badgeCount={4} disabled><NotificationIcon /></UiIconButton>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<IconButton label="Approvals" badgeCount={4} disabled><NotificationIcon /></IconButton>
```

## Accessibility

- The badge itself is hidden from screen readers. The icon button reads the count as its description (Carbon's `aria-describedby`), so screen readers hear the count after the button's name.
- A dot has no count to read. Say it in the label instead, such as "Notifications, new".
- The label stays the button's name: write what the button opens ("Approvals"), not the count.
- In forced-colors mode the badge gets a border, so it stays visible.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-badge-indicator>` · React `UiBadgeIndicator`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `count` | `count` | `number \| undefined` |  | The number shown; unset or 0 = a dot. |


