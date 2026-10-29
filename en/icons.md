# Icons

The components don't ship icons; they take yours in a slot or an `icon` prop and size and color them. Use Carbon's icons, the set this design system is drawn with: browse them in the [IBM UI icon library](https://www.ibm.com/design/language/iconography/ui-icons/library/) and install the package for your stack.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button kind="primary">Add
    <svg slot="suffix" viewBox="0 0 32 32"><path d="M17 15 17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"/></svg>
  </ui-button>
  <ui-icon-button label="Edit">
    <svg viewBox="0 0 32 32"><path d="M2 26H30V28H2z"/><path d="M25.4,9c0.8-0.8,0.8-2,0-2.8l-3.6-3.6c-0.8-0.8-2-0.8-2.8,0l-15,15V24h6.4L25.4,9z M20.4,4L24,7.6l-3,3L17.4,7L20.4,4z M6,22v-3.6l10-10l3.6,3.6l-10,10H6z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Delete">
    <svg viewBox="0 0 32 32"><path d="M12 12H14V24H12z"/><path d="M18 12H20V24H18z"/><path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"/><path d="M12 2H20V4H12z"/></svg>
  </ui-icon-button>
  <ui-icon-button label="Notifications" badge-count="3">
    <svg viewBox="0 0 16 16"><path d="M14.4,10.1L13,8.8V6.5c0-2.6-1.9-4.7-4.5-5v-1h-1v1C5,1.8,3,3.9,3,6.5v2.3l-1.4,1.3c-0.1,0.1-0.2,0.2-0.1,0.4V12c0,0.3,0.2,0.5,0.4,0.5h3.6C5.5,13.9,6.6,15,8,15s2.5-1.1,2.5-2.5H14c0.3,0,0.5-0.2,0.5-0.5v-1.5C14.5,10.4,14.4,10.2,14.4,10.1z M8,14c-0.8,0-1.5-0.7-1.5-1.5h3C9.5,13.3,8.8,14,8,14z M13.5,11.5h-11v-0.8l1.3-1.4C3.9,9.3,4,9.1,4,9V6.5c0-2.2,1.8-4,4-4s4,1.8,4,4V9c0,0.1,0.1,0.3,0.1,0.4l1.4,1.3V11.5z"/></svg>
  </ui-icon-button>
</div>
```

React:

```tsx
import { UiButton, UiIconButton } from '@purpurabog/ui/react';
import { Add, Edit, Notification, TrashCan } from '@carbon/icons-react';

<UiButton kind="primary">Add<Add slot="suffix" /></UiButton>
<UiIconButton label="Edit"><Edit /></UiIconButton>
<UiIconButton label="Delete"><TrashCan /></UiIconButton>
<UiIconButton label="Notifications" badgeCount={3}><Notification /></UiIconButton>
```

React + Tailwind:

```tsx
import { Button } from '@/components/ui/react-tw/button';
import { IconButton } from '@/components/ui/react-tw/icon-button';
import { Add, Edit, Notification, TrashCan } from '@carbon/icons-react';

<Button kind="primary" icon={<Add />}>Add</Button>
<IconButton label="Edit"><Edit /></IconButton>
<IconButton label="Delete"><TrashCan /></IconButton>
<IconButton label="Notifications" badgeCount={3}><Notification /></IconButton>
```

## Install

Carbon publishes the icons as two packages, both under the Apache-2.0 license. Install the one for your stack; `@purpurabog/ui` doesn't depend on either.


React:

```bash
npm install @carbon/icons-react
```

HTML, Lit and other frameworks:

```bash
npm install @carbon/icons @carbon/icon-helpers
```

## Find an icon's name

The library shows each icon's name in lowercase with hyphens, such as `trash-can`. Each package spells it its own way:

| In the library | React (`@carbon/icons-react`) | Others (`@carbon/icons`) |
|---|---|---|
| `add` | `Add` | `@carbon/icons/es/add/16.js` |
| `trash-can` | `TrashCan` | `@carbon/icons/es/trash-can/16.js` |
| `overflow-menu--horizontal` | `OverflowMenuHorizontal` | `@carbon/icons/es/overflow-menu--horizontal/16.js` |
| `chevron--right` | `ChevronRight` | `@carbon/icons/es/chevron--right/16.js` |

`@carbon/icons` has a file for each size: `16.js`, `20.js`, `24.js` and `32.js`. Some icons are drawn differently at 16px, so pick the size the component shows (see [Size and color](#size-and-color)).

## Put an icon in a component

In React, an icon is a component that renders an `<svg>` and passes other props, such as `slot`, to it. Without a bundler or in another framework, turn the icon's data into an `<svg>` with `toString` from `@carbon/icon-helpers`. For a static HTML page, use **Download SVG** in the library and paste the `<svg>`, as the HTML examples on this site do.


Lit:

```js
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { toString } from '@carbon/icon-helpers';
import Add16 from '@carbon/icons/es/add/16.js';
import TrashCan16 from '@carbon/icons/es/trash-can/16.js';

/** A Carbon icon as markup, with extra attributes such as `slot`. */
const icon = (descriptor, attrs = {}) => unsafeHTML(toString({ ...descriptor, attrs: { ...descriptor.attrs, ...attrs } }));

html`
  <ui-button kind="primary">Add ${icon(Add16, { slot: 'suffix' })}</ui-button>
  <ui-icon-button label="Delete">${icon(TrashCan16)}</ui-icon-button>
`;
```

JavaScript:

```js
import { toString } from '@carbon/icon-helpers';
import Add16 from '@carbon/icons/es/add/16.js';

const button = document.querySelector('ui-button');
button.insertAdjacentHTML('beforeend', toString({ ...Add16, attrs: { ...Add16.attrs, slot: 'suffix' } }));
```

React:

```tsx
import { UiMenuItem, UiOverflowMenu } from '@purpurabog/ui/react';
import { Copy, Edit } from '@carbon/icons-react';

<UiOverflowMenu label="Document options">
  <UiMenuItem label="Edit"><Edit slot="icon" /></UiMenuItem>
  <UiMenuItem label="Duplicate"><Copy slot="icon" /></UiMenuItem>
</UiOverflowMenu>
```

React + Tailwind:

```tsx
import { MenuItem, OverflowMenu } from '@/components/ui/react-tw/menu';
import { Copy, Edit } from '@carbon/icons-react';

<OverflowMenu label="Document options">
  <MenuItem label="Edit" icon={<Edit />} />
  <MenuItem label="Duplicate" icon={<Copy />} />
</OverflowMenu>
```

### Where the components take an icon

| Component | Web component / React wrapper | React + Tailwind |
|---|---|---|
| [Button](https://parntengza.github.io/kanok-ui-docs/en/button/) | `prefix` or `suffix` slot | `icon` (after the text) |
| [Icon button](https://parntengza.github.io/kanok-ui-docs/en/button/#icon-only-buttons) | the default slot | children |
| [Menu](https://parntengza.github.io/kanok-ui-docs/en/menu/) item | `icon` slot | `icon` |
| [Overflow menu](https://parntengza.github.io/kanok-ui-docs/en/menu/) trigger | `icon` slot (in place of ⋮) | `icon` |
| [Tabs](https://parntengza.github.io/kanok-ui-docs/en/tabs/) | `icon` slot of `ui-tab` | `icon` |
| [Content switcher](https://parntengza.github.io/kanok-ui-docs/en/content-switcher/) | `icon` slot | `icon` |
| [Tag](https://parntengza.github.io/kanok-ui-docs/en/tag/) | `icon` slot | `icon` |
| [Link](https://parntengza.github.io/kanok-ui-docs/en/link/) | `icon` slot | `icon` |
| [Tile](https://parntengza.github.io/kanok-ui-docs/en/tile/) | `icon` slot of a linked tile | `icon` |
| [Contained list](https://parntengza.github.io/kanok-ui-docs/en/contained-list/) item | `icon` slot | `icon` |
| [Tree view](https://parntengza.github.io/kanok-ui-docs/en/tree-view/) node | `icon` slot | `icon` |
| [User avatar](https://parntengza.github.io/kanok-ui-docs/en/user-avatar/) | `icon` slot | `icon` |
| [Toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) trigger | `trigger` slot (in place of ⓘ) | `icon` |
| [UI shell](https://parntengza.github.io/kanok-ui-docs/en/ui-shell/) | header global action: the default slot; side nav link and menu: `icon` slot | children / `icon` |
| [Page header](https://parntengza.github.io/kanok-ui-docs/en/page-header/) | `icon` slot of the breadcrumb bar and of the content | `icon` |

## Size and color

The component sets the icon's size: 16px in buttons, menus, tags and the side nav, 20px in the header and in large icon-only tabs, 32px before a page header's title. The `width` and `height` an icon comes with don't matter there. Use the icon's own size (`size={20}` in React, `20.js` in `@carbon/icons`) when the component shows it at 20px or more, so you get the drawing made for that size.

Carbon's icons fill with `currentColor`, so they take the component's text color, also on hover, when disabled and in every theme. Don't set a `fill` of your own.

## Accessibility

An icon inside a control is decoration: both packages add `aria-hidden="true"` to an icon without an `aria-label`. The control carries the name, such as the `label` of an icon button, which is also its tooltip. Don't give the icon a label as well, or screen readers read the name twice.

An icon that stands alone and means something (a status, for example) needs its own name: pass `aria-label` (React) or add it to `attrs`; the icon then gets `role="img"`. For status, the [status indicator](https://parntengza.github.io/kanok-ui-docs/en/status-indicator/) already has the right icons and names.

## Names that clash

Some icon names are also component names, such as `Search`, `Notification` or `Copy`. Rename the icon when you import it. The examples on this site use an `Icon` suffix:

```tsx
import { Search as SearchIcon, Notification as NotificationIcon } from '@carbon/icons-react';
```
