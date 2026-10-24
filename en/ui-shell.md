# UI shell

The UI shell is the frame of an application: a 48px header fixed at the top, a side navigation on the left and the content area beside them. The header holds the product name, the main menu bar and icon buttons for global actions; the side nav holds the sections of the product.

This site is built with these elements: the header above this page and the side nav on its left are the live example. The examples below run in framed boxes of their own; [Examples on this page](#examples-on-this-page) says why.


HTML:

```html
<div id="ui-shell-intro" style="transform: translateZ(0); position: relative; height: 400px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-skip-to-content href="#ui-shell-intro-main"></ui-skip-to-content>
      <ui-header-menu-button></ui-header-menu-button>
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-nav label="Metro Contracts">
        <ui-header-menu-item href="#requests" current>Requests</ui-header-menu-item>
        <ui-header-menu-item href="#templates">Templates</ui-header-menu-item>
      </ui-header-nav>
      <ui-header-global-bar>
        <ui-header-global-action label="Notifications">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M17 14.3V13l-1.5-1.5V8a5.5 5.5 0 0 0-4.6-5.4V1.4H9.1v1.2A5.5 5.5 0 0 0 4.5 8v3.5L3 13v1.3h4.4a2.6 2.6 0 0 0 5.2 0ZM10 15.9a1.3 1.3 0 0 1-1.3-1.3h2.6a1.3 1.3 0 0 1-1.3 1.3Z" /></svg>
        </ui-header-global-action>
      </ui-header-global-bar>
    </ui-header>
    <ui-side-nav label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-link href="#dashboard" current>Dashboard</ui-side-nav-link>
        <ui-side-nav-menu label="Requests">
          <ui-side-nav-menu-item href="#open">Open</ui-side-nav-menu-item>
          <ui-side-nav-menu-item href="#signing">Awaiting signature</ui-side-nav-menu-item>
        </ui-side-nav-menu>
        <ui-side-nav-link href="#settings">Settings</ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-intro-main">
      <p style="margin: 0; font: var(--ui-font-headline)">Dashboard</p>
      <p style="font: var(--ui-font-body); color: var(--ui-ink-muted)">12 contracts wait for your signature.</p>
    </ui-content>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-intro');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<UiHeader label="Metro Contracts">
  <UiSkipToContent />
  <UiHeaderMenuButton />
  <UiHeaderName href="/" prefix="Metro">Contracts</UiHeaderName>
  <UiHeaderNav label="Metro Contracts">
    <UiHeaderMenuItem href="/requests" current>Requests</UiHeaderMenuItem>
    <UiHeaderMenuItem href="/templates">Templates</UiHeaderMenuItem>
  </UiHeaderNav>
  <UiHeaderGlobalBar>
    <UiHeaderGlobalAction label="Notifications"><NotificationIcon /></UiHeaderGlobalAction>
  </UiHeaderGlobalBar>
</UiHeader>
<UiSideNav label="Sections">
  <UiSideNavItems>
    <UiSideNavLink href="/" current>Dashboard</UiSideNavLink>
    <UiSideNavMenu label="Requests">
      <UiSideNavMenuItem href="/requests/open">Open</UiSideNavMenuItem>
      <UiSideNavMenuItem href="/requests/signing">Awaiting signature</UiSideNavMenuItem>
    </UiSideNavMenu>
    <UiSideNavLink href="/settings">Settings</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
<UiContent>
  <h1>Dashboard</h1>
  <p>12 contracts wait for your signature.</p>
</UiContent>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

const [navOpen, setNavOpen] = useState(false);

<Header aria-label="Metro Contracts">
  <SkipToContent />
  <HeaderMenuButton active={navOpen} onToggle={setNavOpen} />
  <HeaderName href="/" prefix="Metro">Contracts</HeaderName>
  <HeaderNavigation aria-label="Metro Contracts">
    <HeaderMenuItem href="/requests" current>Requests</HeaderMenuItem>
    <HeaderMenuItem href="/templates">Templates</HeaderMenuItem>
  </HeaderNavigation>
  <HeaderGlobalBar>
    <HeaderGlobalAction label="Notifications"><NotificationIcon /></HeaderGlobalAction>
  </HeaderGlobalBar>
</Header>
<SideNav aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>
  <SideNavItems>
    <SideNavLink href="/" current>Dashboard</SideNavLink>
    <SideNavMenu label="Requests">
      <SideNavMenuItem href="/requests/open">Open</SideNavMenuItem>
      <SideNavMenuItem href="/requests/signing">Awaiting signature</SideNavMenuItem>
    </SideNavMenu>
    <SideNavLink href="/settings">Settings</SideNavLink>
  </SideNavItems>
</SideNav>
<Content>
  <h1>Dashboard</h1>
  <p>12 contracts wait for your signature.</p>
</Content>
```

The `…Icon` components on this page are Carbon's icons from `@carbon/icons-react`, imported with an `Icon` suffix (see [Icons](https://parntengza.github.io/kanok-ui-docs/en/icons/)). The header shows them at 20px and the side nav at 16px; in the React tabs they pass `slot` on to their `<svg>`.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/shell
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-header @kanok-ui/tw-side-nav
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/shell.json
#    to its target:
#    components/ui/primitives/shell/content.ts
#    components/ui/primitives/shell/header-global-action.ts
#    components/ui/primitives/shell/header-global-bar.ts
#    components/ui/primitives/shell/header-menu-button.ts
#    components/ui/primitives/shell/header-menu-item.ts
#    components/ui/primitives/shell/header-menu.ts
#    components/ui/primitives/shell/header-name.ts
#    components/ui/primitives/shell/header-nav.ts
#    components/ui/primitives/shell/header-panel.ts
#    components/ui/primitives/shell/header.ts
#    components/ui/primitives/shell/shell-shared.ts
#    components/ui/primitives/shell/shell.ts
#    components/ui/primitives/shell/side-nav-divider.ts
#    components/ui/primitives/shell/side-nav-items.ts
#    components/ui/primitives/shell/side-nav-link.ts
#    components/ui/primitives/shell/side-nav-menu-item.ts
#    components/ui/primitives/shell/side-nav-menu.ts
#    components/ui/primitives/shell/side-nav.ts
#    components/ui/primitives/shell/skip-to-content.ts
#    components/ui/primitives/shell/switcher-item.ts
#    components/ui/primitives/shell/switcher.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-popup, shared-element, shared-events, shared-field, shared-localize, shared-navigate, shared-slots, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-header.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-side-nav.json
#    to its target:
#    components/ui/react-tw/header.tsx
#    components/ui/react-tw/side-nav.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-i18n, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Put the header, the side nav and the content straight into `<body>`, in this order. A page has one shell.


HTML:

```html
<script type="module">import '@purpurabog/ui/shell';</script>

<body>
  <ui-header label="Metro Contracts">
    <ui-skip-to-content></ui-skip-to-content>
    <ui-header-menu-button></ui-header-menu-button>
    <ui-header-name href="/" prefix="Metro">Contracts</ui-header-name>
  </ui-header>
  <ui-side-nav label="Sections">
    <ui-side-nav-items>
      <ui-side-nav-link href="/" current>Dashboard</ui-side-nav-link>
      <ui-side-nav-link href="/settings">Settings</ui-side-nav-link>
    </ui-side-nav-items>
  </ui-side-nav>
  <ui-content>…</ui-content>
</body>
```

React:

```tsx
import { UiHeader, UiSkipToContent, UiHeaderMenuButton, UiHeaderName, UiSideNav, UiSideNavItems, UiSideNavLink, UiContent } from '@purpurabog/ui/react';

<UiHeader label="Metro Contracts">
  <UiSkipToContent />
  <UiHeaderMenuButton />
  <UiHeaderName href="/" prefix="Metro">Contracts</UiHeaderName>
</UiHeader>
<UiSideNav label="Sections">
  <UiSideNavItems>
    <UiSideNavLink href="/" current>Dashboard</UiSideNavLink>
    <UiSideNavLink href="/settings">Settings</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
<UiContent>…</UiContent>
```

React + Tailwind:

```tsx
import { Header, SkipToContent, HeaderMenuButton, HeaderName } from '@/components/ui/react-tw/header';
import { SideNav, SideNavItems, SideNavLink, Content } from '@/components/ui/react-tw/side-nav';

const [navOpen, setNavOpen] = useState(false);

<Header aria-label="Metro Contracts">
  <SkipToContent />
  <HeaderMenuButton active={navOpen} onToggle={setNavOpen} />
  <HeaderName href="/" prefix="Metro">Contracts</HeaderName>
</Header>
<SideNav aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>
  <SideNavItems>
    <SideNavLink href="/" current>Dashboard</SideNavLink>
    <SideNavLink href="/settings">Settings</SideNavLink>
  </SideNavItems>
</SideNav>
<Content>…</Content>
```

The web components wire themselves: the hamburger opens and closes the side nav in the same document with no code, and `<ui-content>` moves aside for the side nav. In React + Tailwind, hold the side nav's state yourself, as above.

## Examples on this page

The header and the side nav are `position: fixed`: they stick to the window, and the hamburger and the content area look for the side nav in their document. This page already has a shell, so each live example below sits in a box whose `transform` keeps the fixed parts inside it, and runs in the box's own shadow root (a "micro app"), so the page's hamburger and the example's side nav don't drive each other. The demo script also cancels the links' `ui-navigate`, so a click in an example doesn't leave this page.

None of that is needed in your app. The React tabs show the code as you would write it.

The header's menu bar shows from Carbon's `lg` breakpoint, 1056px wide; below it the hamburger appears and the side nav slides over the page. The breakpoint is the window's width, not the box's: make the window narrower to see the small-screen layout.

## Menu bar

`<ui-header-nav>` is the main menu bar after the product name. It holds `<ui-header-menu-item>` links and `<ui-header-menu>` dropdowns of more links. `current` marks the page with a 3px bar. A closed menu shows the bar when one of its items is current; `current` on the menu shows it always.

`prefix` on `<ui-header-name>` is the part of the name in regular weight (Carbon's "IBM"); the rest is semibold.


HTML:

```html
<div id="ui-shell-menus" style="transform: translateZ(0); position: relative; height: 240px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-nav label="Metro Contracts">
        <ui-header-menu-item href="#requests">Requests</ui-header-menu-item>
        <ui-header-menu-item href="#templates">Templates</ui-header-menu-item>
        <ui-header-menu label="Reports">
          <ui-header-menu-item href="#monthly" current>Monthly</ui-header-menu-item>
          <ui-header-menu-item href="#yearly">Yearly</ui-header-menu-item>
          <ui-header-menu-item href="#audit">Audit log</ui-header-menu-item>
        </ui-header-menu>
      </ui-header-nav>
    </ui-header>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-menus');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
<UiHeader label="Metro Contracts">
  <UiHeaderName href="/" prefix="Metro">Contracts</UiHeaderName>
  <UiHeaderNav label="Metro Contracts">
    <UiHeaderMenuItem href="/requests">Requests</UiHeaderMenuItem>
    <UiHeaderMenuItem href="/templates">Templates</UiHeaderMenuItem>
    <UiHeaderMenu label="Reports">
      <UiHeaderMenuItem href="/reports/monthly" current>Monthly</UiHeaderMenuItem>
      <UiHeaderMenuItem href="/reports/yearly">Yearly</UiHeaderMenuItem>
      <UiHeaderMenuItem href="/reports/audit">Audit log</UiHeaderMenuItem>
    </UiHeaderMenu>
  </UiHeaderNav>
</UiHeader>
```

React + Tailwind:

```tsx
<Header aria-label="Metro Contracts">
  <HeaderName href="/" prefix="Metro">Contracts</HeaderName>
  <HeaderNavigation aria-label="Metro Contracts">
    <HeaderMenuItem href="/requests">Requests</HeaderMenuItem>
    <HeaderMenuItem href="/templates">Templates</HeaderMenuItem>
    <HeaderMenu label="Reports">
      <HeaderMenuItem href="/reports/monthly" current>Monthly</HeaderMenuItem>
      <HeaderMenuItem href="/reports/yearly">Yearly</HeaderMenuItem>
      <HeaderMenuItem href="/reports/audit">Audit log</HeaderMenuItem>
    </HeaderMenu>
  </HeaderNavigation>
</Header>
```

A header menu is a disclosure, not an ARIA menu: its links stay links. Click, Enter or Space opens it; Esc or a click outside closes it and focus goes back to its title. Following one of its links closes it too.

## Global actions

`<ui-header-global-bar>` holds the icon buttons at the end of the header. Each `<ui-header-global-action>` is named by `label`, which also shows as its tooltip; `tooltip-placement="bottom-end"` keeps the tooltip of the last button inside the window. `active` gives a button the pressed look (`aria-pressed`), for an action that turns something on or off.


HTML:

```html
<div id="ui-shell-actions" style="transform: translateZ(0); position: relative; height: 120px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-global-bar>
        <ui-header-global-action id="ui-shell-actions-search" label="Search">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m18.5 17.8-4.9-4.9a7 7 0 1 0-.7.7l4.9 4.9zM3 8.5a5.5 5.5 0 1 1 5.5 5.5A5.5 5.5 0 0 1 3 8.5Z" /></svg>
        </ui-header-global-action>
        <ui-header-global-action id="ui-shell-actions-mute" label="Mute notifications" tooltip-placement="bottom-end">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M17 14.3V13l-1.5-1.5V8a5.5 5.5 0 0 0-4.6-5.4V1.4H9.1v1.2A5.5 5.5 0 0 0 4.5 8v3.5L3 13v1.3h4.4a2.6 2.6 0 0 0 5.2 0ZM10 15.9a1.3 1.3 0 0 1-1.3-1.3h2.6a1.3 1.3 0 0 1-1.3 1.3Z" /></svg>
        </ui-header-global-action>
      </ui-header-global-bar>
    </ui-header>
  </template>
</div>
<p>Last action: <output id="ui-shell-actions-out">none</output></p>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-actions');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });

  const out = document.getElementById('ui-shell-actions-out');
  const mute = shell.getElementById('ui-shell-actions-mute');
  shell.getElementById('ui-shell-actions-search').addEventListener('click', () => (out.value = 'Search'));
  mute.addEventListener('click', () => {
    mute.active = !mute.active;
    out.value = mute.active ? 'Notifications muted' : 'Notifications on';
  });
</script>
```

React:

```tsx
import { Notification as NotificationIcon, Search as SearchIcon } from '@carbon/icons-react';

const [muted, setMuted] = useState(false);

<UiHeaderGlobalBar>
  <UiHeaderGlobalAction label="Search" onClick={openSearch}><SearchIcon /></UiHeaderGlobalAction>
  <UiHeaderGlobalAction label="Mute notifications" tooltipPlacement="bottom-end" active={muted} onClick={() => setMuted(!muted)}>
    <NotificationIcon />
  </UiHeaderGlobalAction>
</UiHeaderGlobalBar>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon, Search as SearchIcon } from '@carbon/icons-react';

const [muted, setMuted] = useState(false);

<HeaderGlobalBar>
  <HeaderGlobalAction label="Search" onClick={openSearch}><SearchIcon /></HeaderGlobalAction>
  <HeaderGlobalAction label="Mute notifications" tooltipPlacement="bottom-end" active={muted} onClick={() => setMuted(!muted)}>
    <NotificationIcon />
  </HeaderGlobalAction>
</HeaderGlobalBar>
```

## Panels under the header

`<ui-header-panel>` is a 256px panel that slides in under the header at the end side, for notifications, a profile or settings. Give it an `id` and put that id in the `panel` attribute of a global action: a click on the action opens and closes the panel, and the action shows as pressed while it is open (`aria-expanded`). Esc, a click outside or focus leaving the panel closes it. `label` names the panel as a region.


HTML:

```html
<div id="ui-shell-panel" style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-global-bar>
        <ui-header-global-action label="Notifications" panel="ui-shell-panel-notes" tooltip-placement="bottom-end">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M17 14.3V13l-1.5-1.5V8a5.5 5.5 0 0 0-4.6-5.4V1.4H9.1v1.2A5.5 5.5 0 0 0 4.5 8v3.5L3 13v1.3h4.4a2.6 2.6 0 0 0 5.2 0ZM10 15.9a1.3 1.3 0 0 1-1.3-1.3h2.6a1.3 1.3 0 0 1-1.3 1.3Z" /></svg>
        </ui-header-global-action>
      </ui-header-global-bar>
      <ui-header-panel id="ui-shell-panel-notes" label="Notifications">
        <div style="display: grid; gap: 16px; padding: 16px; font: var(--ui-font-body-sm)">
          <p style="margin: 0">Somchai signed the lease for unit 4B.</p>
          <p style="margin: 0">The cleaning contract ends in 30 days.</p>
          <ui-link href="#notifications">All notifications</ui-link>
        </div>
      </ui-header-panel>
    </ui-header>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-panel');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

<UiHeaderGlobalBar>
  <UiHeaderGlobalAction label="Notifications" panel="notifications" tooltipPlacement="bottom-end"><NotificationIcon /></UiHeaderGlobalAction>
</UiHeaderGlobalBar>
<UiHeaderPanel id="notifications" label="Notifications">
  <p>Somchai signed the lease for unit 4B.</p>
  <p>The cleaning contract ends in 30 days.</p>
  <UiLink href="/notifications">All notifications</UiLink>
</UiHeaderPanel>
```

React + Tailwind:

```tsx
import { Notification as NotificationIcon } from '@carbon/icons-react';

const [open, setOpen] = useState(false);

<HeaderGlobalBar>
  <HeaderGlobalAction label="Notifications" tooltipPlacement="bottom-end" expanded={open} aria-controls="notifications" onClick={() => setOpen(!open)}>
    <NotificationIcon />
  </HeaderGlobalAction>
</HeaderGlobalBar>
<HeaderPanel id="notifications" aria-label="Notifications" expanded={open} onClose={() => setOpen(false)}>
  <p>Somchai signed the lease for unit 4B.</p>
  <p>The cleaning contract ends in 30 days.</p>
  <Link href="/notifications">All notifications</Link>
</HeaderPanel>
```

In React + Tailwind the panel is controlled: `expanded` on the action makes it a disclosure, and `onClose` tells you why the panel asks to close (`'escape'`, `'blur'` or `'outside'`). A click on the action whose `aria-controls` is the panel's `id` doesn't count as outside.

## App switcher

`<ui-switcher>` in a header panel lists the other applications. `<ui-switcher-item>` is a link; `selected` marks the application you are in (`aria-current="page"`). An `<hr>` between items draws a divider. Links to other sites take `target` and `rel` as on `<a>`.


HTML:

```html
<div id="ui-shell-switcher" style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-global-bar>
        <ui-header-global-action label="Switch application" panel="ui-shell-switcher-apps" tooltip-placement="bottom-end">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4h3v3H4zm4.5 0h3v3h-3zM13 4h3v3h-3zM4 8.5h3v3H4zm4.5 0h3v3h-3zm4.5 0h3v3h-3zM4 13h3v3H4zm4.5 0h3v3h-3zm4.5 0h3v3h-3z" /></svg>
        </ui-header-global-action>
      </ui-header-global-bar>
      <ui-header-panel id="ui-shell-switcher-apps" label="Applications">
        <ui-switcher label="Applications">
          <ui-switcher-item href="#contracts" selected>Contracts</ui-switcher-item>
          <ui-switcher-item href="#audit">Audit management</ui-switcher-item>
          <ui-switcher-item href="#hr">Leave requests</ui-switcher-item>
          <hr />
          <ui-switcher-item href="#admin">Administration</ui-switcher-item>
        </ui-switcher>
      </ui-header-panel>
    </ui-header>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-switcher');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
import { Switcher as SwitcherIcon } from '@carbon/icons-react';

<UiHeaderGlobalAction label="Switch application" panel="apps" tooltipPlacement="bottom-end"><SwitcherIcon /></UiHeaderGlobalAction>
<UiHeaderPanel id="apps" label="Applications">
  <UiSwitcher label="Applications">
    <UiSwitcherItem href="/contracts" selected>Contracts</UiSwitcherItem>
    <UiSwitcherItem href="/audit">Audit management</UiSwitcherItem>
    <UiSwitcherItem href="/leave">Leave requests</UiSwitcherItem>
    <hr />
    <UiSwitcherItem href="/admin">Administration</UiSwitcherItem>
  </UiSwitcher>
</UiHeaderPanel>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-switcher
import { Switcher, SwitcherItem, SwitcherDivider } from '@/components/ui/react-tw/switcher';

<HeaderPanel id="apps" aria-label="Applications" expanded={open} onClose={() => setOpen(false)}>
  <Switcher aria-label="Applications">
    <SwitcherItem href="/contracts" selected>Contracts</SwitcherItem>
    <SwitcherItem href="/audit">Audit management</SwitcherItem>
    <SwitcherItem href="/leave">Leave requests</SwitcherItem>
    <SwitcherDivider />
    <SwitcherItem href="/admin">Administration</SwitcherItem>
  </Switcher>
</HeaderPanel>
```

## Side nav: links, menus and icons

`<ui-side-nav>` holds one `<ui-side-nav-items>` list of:

- `<ui-side-nav-link>`: a link; `current` marks the page with a 3px bar.
- `<ui-side-nav-menu label>`: a group that opens and closes, holding `<ui-side-nav-menu-item>` links. `expanded` opens it on load. Closed, it shows the bar when one of its items is current.
- `<ui-side-nav-divider>`: a line between groups.

A 16px icon in the `icon` slot of a link or menu goes before the text; the menu's items then indent past it. `large` makes a row 48px tall.


HTML:

```html
<div id="ui-shell-sidenav" style="transform: translateZ(0); position: relative; height: 400px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-menu-button></ui-header-menu-button>
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
    </ui-header>
    <ui-side-nav label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-link href="#dashboard">
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2h5v5H2zm7 0h5v5H9zM2 9h5v5H2zm7 0h5v5H9z" /></svg>
          Dashboard
        </ui-side-nav-link>
        <ui-side-nav-menu label="Requests" expanded>
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
          <ui-side-nav-menu-item href="#open">Open</ui-side-nav-menu-item>
          <ui-side-nav-menu-item href="#signing" current>Awaiting signature</ui-side-nav-menu-item>
          <ui-side-nav-menu-item href="#closed">Closed</ui-side-nav-menu-item>
        </ui-side-nav-menu>
        <ui-side-nav-link href="#templates">
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
          Templates
        </ui-side-nav-link>
        <ui-side-nav-divider></ui-side-nav-divider>
        <ui-side-nav-link href="#settings" large>
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 8.4a5.4 5.4 0 0 0 0-.8l1.4-1.1-1.3-2.3-1.7.6a5 5 0 0 0-.7-.4L10.9 2.6H8.3L8 4.4l-.7.4-1.7-.6-1.3 2.3 1.4 1.1a5.4 5.4 0 0 0 0 .8L4.3 9.5l1.3 2.3 1.7-.6.7.4.3 1.8h2.6l.3-1.8.7-.4 1.7.6 1.3-2.3zM9.6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg>
          Settings (large)
        </ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-sidenav-main">
      <p style="margin: 0; font: var(--ui-font-headline)">Awaiting signature</p>
    </ui-content>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-sidenav');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
import { Dashboard as DashboardIcon, Document as DocumentIcon, Settings as SettingsIcon } from '@carbon/icons-react';

<UiSideNav label="Sections">
  <UiSideNavItems>
    <UiSideNavLink href="/"><DashboardIcon slot="icon" />Dashboard</UiSideNavLink>
    <UiSideNavMenu label="Requests" expanded>
      <DocumentIcon slot="icon" />
      <UiSideNavMenuItem href="/requests/open">Open</UiSideNavMenuItem>
      <UiSideNavMenuItem href="/requests/signing" current>Awaiting signature</UiSideNavMenuItem>
      <UiSideNavMenuItem href="/requests/closed">Closed</UiSideNavMenuItem>
    </UiSideNavMenu>
    <UiSideNavLink href="/templates"><DocumentIcon slot="icon" />Templates</UiSideNavLink>
    <UiSideNavDivider />
    <UiSideNavLink href="/settings" large><SettingsIcon slot="icon" />Settings (large)</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
```

React + Tailwind:

```tsx
import { Dashboard as DashboardIcon, Document as DocumentIcon, Settings as SettingsIcon } from '@carbon/icons-react';

<SideNav aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>
  <SideNavItems>
    <SideNavLink href="/" icon={<DashboardIcon />}>Dashboard</SideNavLink>
    <SideNavMenu label="Requests" icon={<DocumentIcon />} defaultExpanded>
      <SideNavMenuItem href="/requests/open">Open</SideNavMenuItem>
      <SideNavMenuItem href="/requests/signing" current>Awaiting signature</SideNavMenuItem>
      <SideNavMenuItem href="/requests/closed">Closed</SideNavMenuItem>
    </SideNavMenu>
    <SideNavLink href="/templates" icon={<DocumentIcon />}>Templates</SideNavLink>
    <SideNavDivider />
    <SideNavLink href="/settings" icon={<SettingsIcon />} large>Settings (large)</SideNavLink>
  </SideNavItems>
</SideNav>
```

By default (no mode attribute) the side nav is open beside the content from 1056px. Below that it is closed: the hamburger opens it over the page with a dark overlay, and a click on the overlay, Esc or focus leaving it closes it again.

## Rail

`rail` makes the side nav a 48px strip of icons. It opens to 256px over the content while the pointer is on it or focus is inside, and the content keeps its 48px offset. Give every link and menu an icon.


HTML:

```html
<div id="ui-shell-rail" style="transform: translateZ(0); position: relative; height: 360px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-menu-button></ui-header-menu-button>
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
    </ui-header>
    <ui-side-nav rail label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-link href="#dashboard" current>
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2h5v5H2zm7 0h5v5H9zM2 9h5v5H2zm7 0h5v5H9z" /></svg>
          Dashboard
        </ui-side-nav-link>
        <ui-side-nav-menu label="Requests">
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
          <ui-side-nav-menu-item href="#open">Open</ui-side-nav-menu-item>
          <ui-side-nav-menu-item href="#signing">Awaiting signature</ui-side-nav-menu-item>
        </ui-side-nav-menu>
        <ui-side-nav-link href="#settings">
          <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 8.4a5.4 5.4 0 0 0 0-.8l1.4-1.1-1.3-2.3-1.7.6a5 5 0 0 0-.7-.4L10.9 2.6H8.3L8 4.4l-.7.4-1.7-.6-1.3 2.3 1.4 1.1a5.4 5.4 0 0 0 0 .8L4.3 9.5l1.3 2.3 1.7-.6.7.4.3 1.8h2.6l.3-1.8.7-.4 1.7.6 1.3-2.3zM9.6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg>
          Settings
        </ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-rail-main">
      <p style="margin: 0; font: var(--ui-font-body)">Point at the strip on the left, or Tab into it.</p>
    </ui-content>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-rail');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
import { Dashboard as DashboardIcon, Document as DocumentIcon, Settings as SettingsIcon } from '@carbon/icons-react';

<UiSideNav rail label="Sections">
  <UiSideNavItems>
    <UiSideNavLink href="/" current><DashboardIcon slot="icon" />Dashboard</UiSideNavLink>
    <UiSideNavMenu label="Requests">
      <DocumentIcon slot="icon" />
      <UiSideNavMenuItem href="/requests/open">Open</UiSideNavMenuItem>
      <UiSideNavMenuItem href="/requests/signing">Awaiting signature</UiSideNavMenuItem>
    </UiSideNavMenu>
    <UiSideNavLink href="/settings"><SettingsIcon slot="icon" />Settings</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
```

React + Tailwind:

```tsx
import { Dashboard as DashboardIcon, Document as DocumentIcon, Settings as SettingsIcon } from '@carbon/icons-react';

<SideNav rail aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>
  <SideNavItems>
    <SideNavLink href="/" icon={<DashboardIcon />} current>Dashboard</SideNavLink>
    <SideNavMenu label="Requests" icon={<DocumentIcon />}>
      <SideNavMenuItem href="/requests/open">Open</SideNavMenuItem>
      <SideNavMenuItem href="/requests/signing">Awaiting signature</SideNavMenuItem>
    </SideNavMenu>
    <SideNavLink href="/settings" icon={<SettingsIcon />}>Settings</SideNavLink>
  </SideNavItems>
</SideNav>
```

## Fixed

`fixed` together with `expanded` keeps the side nav open at 256px at every width, and the content moves aside for it. There is no overlay. Use it for tools people work in all day, where the sections must always be in view.


HTML:

```html
<div id="ui-shell-fixed" style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
    </ui-header>
    <ui-side-nav fixed expanded label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-link href="#dashboard" current>Dashboard</ui-side-nav-link>
        <ui-side-nav-link href="#requests">Requests</ui-side-nav-link>
        <ui-side-nav-link href="#templates">Templates</ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-fixed-main">
      <p style="margin: 0; font: var(--ui-font-body)">The content starts 256px in, at every width.</p>
    </ui-content>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-fixed');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
<UiSideNav fixed expanded label="Sections">
  <UiSideNavItems>
    <UiSideNavLink href="/" current>Dashboard</UiSideNavLink>
    <UiSideNavLink href="/requests">Requests</UiSideNavLink>
    <UiSideNavLink href="/templates">Templates</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
<UiContent>…</UiContent>
```

React + Tailwind:

```tsx
<SideNav fixed expanded aria-label="Sections">
  <SideNavItems>
    <SideNavLink href="/" current>Dashboard</SideNavLink>
    <SideNavLink href="/requests">Requests</SideNavLink>
    <SideNavLink href="/templates">Templates</SideNavLink>
  </SideNavItems>
</SideNav>
<Content>…</Content>
```

`fixed` without `expanded` slides the nav out of view while the content keeps its 256px offset, so set both.

## Collapsible

`collapsible` (Carbon's `isPersistent={false}`) keeps the side nav closed at every width, and the hamburger shows on large screens too. The nav opens over the content, which doesn't move; Esc or focus leaving the nav closes it. Use it when the content needs the whole width.


HTML:

```html
<div id="ui-shell-collapsible" style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-menu-button></ui-header-menu-button>
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
    </ui-header>
    <ui-side-nav collapsible label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-link href="#dashboard" current>Dashboard</ui-side-nav-link>
        <ui-side-nav-link href="#requests">Requests</ui-side-nav-link>
        <ui-side-nav-link href="#templates">Templates</ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-collapsible-main">
      <p style="margin: 0; font: var(--ui-font-body)">Open the menu with the hamburger at the top left.</p>
    </ui-content>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-collapsible');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
<UiHeader label="Metro Contracts">
  <UiHeaderMenuButton />
  <UiHeaderName href="/" prefix="Metro">Contracts</UiHeaderName>
</UiHeader>
<UiSideNav collapsible label="Sections">…</UiSideNav>
<UiContent>…</UiContent>
```

React + Tailwind:

```tsx
const [navOpen, setNavOpen] = useState(false);

<Header aria-label="Metro Contracts">
  <HeaderMenuButton collapsible active={navOpen} onToggle={setNavOpen} />
  <HeaderName href="/" prefix="Metro">Contracts</HeaderName>
</Header>
<SideNav collapsible aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>…</SideNav>
<Content>…</Content>
```

The web component's hamburger finds the collapsible side nav and stays visible by itself. In React + Tailwind, set `collapsible` on `HeaderMenuButton` too.

## Header links on small screens

Below 1056px the header's menu bar is hidden. Put a second `<ui-header-nav>` with the same links first inside `<ui-side-nav>`: it shows there as a column on small screens only (Carbon's `HeaderSideNavItems`), and it doesn't make a second navigation landmark. Make the window narrower than 1056px and open the hamburger to see it.


HTML:

```html
<div id="ui-shell-small" style="transform: translateZ(0); position: relative; height: 400px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-menu-button></ui-header-menu-button>
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-nav label="Metro Contracts">
        <ui-header-menu-item href="#requests" current>Requests</ui-header-menu-item>
        <ui-header-menu label="Reports">
          <ui-header-menu-item href="#monthly">Monthly</ui-header-menu-item>
          <ui-header-menu-item href="#yearly">Yearly</ui-header-menu-item>
        </ui-header-menu>
      </ui-header-nav>
    </ui-header>
    <ui-side-nav label="Sections">
      <ui-header-nav>
        <ui-header-menu-item href="#requests" current>Requests</ui-header-menu-item>
        <ui-header-menu label="Reports">
          <ui-header-menu-item href="#monthly">Monthly</ui-header-menu-item>
          <ui-header-menu-item href="#yearly">Yearly</ui-header-menu-item>
        </ui-header-menu>
      </ui-header-nav>
      <ui-side-nav-items>
        <ui-side-nav-divider></ui-side-nav-divider>
        <ui-side-nav-link href="#settings">Settings</ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-small-main">
      <p style="margin: 0; font: var(--ui-font-body)">Requests</p>
    </ui-content>
  </template>
</div>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-small');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });
</script>
```

React:

```tsx
const mainLinks = (
  <>
    <UiHeaderMenuItem href="/requests" current>Requests</UiHeaderMenuItem>
    <UiHeaderMenu label="Reports">
      <UiHeaderMenuItem href="/reports/monthly">Monthly</UiHeaderMenuItem>
      <UiHeaderMenuItem href="/reports/yearly">Yearly</UiHeaderMenuItem>
    </UiHeaderMenu>
  </>
);

<UiHeader label="Metro Contracts">
  <UiHeaderMenuButton />
  <UiHeaderName href="/" prefix="Metro">Contracts</UiHeaderName>
  <UiHeaderNav label="Metro Contracts">{mainLinks}</UiHeaderNav>
</UiHeader>
<UiSideNav label="Sections">
  <UiHeaderNav>{mainLinks}</UiHeaderNav>
  <UiSideNavItems>
    <UiSideNavDivider />
    <UiSideNavLink href="/settings">Settings</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
```

React + Tailwind:

```tsx
const mainLinks = (
  <>
    <HeaderMenuItem href="/requests" current>Requests</HeaderMenuItem>
    <HeaderMenu label="Reports">
      <HeaderMenuItem href="/reports/monthly">Monthly</HeaderMenuItem>
      <HeaderMenuItem href="/reports/yearly">Yearly</HeaderMenuItem>
    </HeaderMenu>
  </>
);

<Header aria-label="Metro Contracts">
  <HeaderMenuButton active={navOpen} onToggle={setNavOpen} />
  <HeaderName href="/" prefix="Metro">Contracts</HeaderName>
  <HeaderNavigation aria-label="Metro Contracts">{mainLinks}</HeaderNavigation>
</Header>
<SideNav aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>
  <HeaderNavigation>{mainLinks}</HeaderNavigation>
  <SideNavItems>
    <SideNavDivider />
    <SideNavLink href="/settings">Settings</SideNavLink>
  </SideNavItems>
</SideNav>
```

## Route the links yourself

Every link of the shell (the name, menu items, side nav links, switcher items) is an `<a>` inside the element. On a plain click it first fires `ui-navigate` with `detail.href`; it bubbles and is cancelable. Cancel it and give the path to your router: the page doesn't reload. Ctrl / ⌘-click, middle click and `target="_blank"` stay plain links. This docs site routes its own side nav this way.


HTML:

```html
<div id="ui-shell-routing" style="transform: translateZ(0); position: relative; height: 360px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-menu-button></ui-header-menu-button>
      <ui-header-name href="#dashboard" prefix="Metro">Contracts</ui-header-name>
    </ui-header>
    <ui-side-nav fixed expanded label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-link href="#dashboard" current>Dashboard</ui-side-nav-link>
        <ui-side-nav-menu label="Requests" expanded>
          <ui-side-nav-menu-item href="#open">Open</ui-side-nav-menu-item>
          <ui-side-nav-menu-item href="#signing">Awaiting signature</ui-side-nav-menu-item>
        </ui-side-nav-menu>
        <ui-side-nav-link href="#settings">Settings</ui-side-nav-link>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-routing-main">
      <p id="ui-shell-routing-title" style="margin: 0; font: var(--ui-font-headline)">Dashboard</p>
    </ui-content>
  </template>
</div>
<p>Last ui-navigate: <output id="ui-shell-routing-out">none</output></p>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-routing');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));

  // a router stand-in: cancel the navigation, mark the link, swap the heading
  const out = document.getElementById('ui-shell-routing-out');
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault();
    event.stopPropagation(); // docs only: this page's own router listens on the document
    const { href } = event.detail;
    for (const link of shell.querySelectorAll('ui-side-nav-link, ui-side-nav-menu-item')) {
      link.current = link.getAttribute('href') === href;
    }
    const link = shell.querySelector(`ui-side-nav [href="${href}"]`);
    shell.getElementById('ui-shell-routing-title').textContent = link?.textContent.trim() ?? href;
    out.value = href;
  });
</script>
```

React:

```tsx
const navigate = useNavigate(); // your router's
const { pathname } = useLocation();

const route = (event: CustomEvent<{ href: string }>) => {
  event.preventDefault();
  navigate(event.detail.href);
};

<UiSideNav fixed expanded label="Sections" onUiNavigate={route}>
  <UiSideNavItems>
    <UiSideNavLink href="/" current={pathname === '/'}>Dashboard</UiSideNavLink>
    <UiSideNavMenu label="Requests" expanded>
      <UiSideNavMenuItem href="/requests/open" current={pathname === '/requests/open'}>Open</UiSideNavMenuItem>
      <UiSideNavMenuItem href="/requests/signing" current={pathname === '/requests/signing'}>Awaiting signature</UiSideNavMenuItem>
    </UiSideNavMenu>
    <UiSideNavLink href="/settings" current={pathname === '/settings'}>Settings</UiSideNavLink>
  </UiSideNavItems>
</UiSideNav>
```

React + Tailwind:

```tsx
const navigate = useNavigate(); // your router's
const { pathname } = useLocation();

// plain <a> elements: route their clicks (keep Ctrl / ⌘-click for a new tab)
const route = (event: React.MouseEvent<HTMLAnchorElement>) => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  navigate(event.currentTarget.getAttribute('href') ?? '/');
};

<SideNav fixed expanded aria-label="Sections">
  <SideNavItems>
    <SideNavLink href="/" current={pathname === '/'} onClick={route}>Dashboard</SideNavLink>
    <SideNavMenu label="Requests" defaultExpanded>
      <SideNavMenuItem href="/requests/open" current={pathname === '/requests/open'} onClick={route}>Open</SideNavMenuItem>
      <SideNavMenuItem href="/requests/signing" current={pathname === '/requests/signing'} onClick={route}>Awaiting signature</SideNavMenuItem>
    </SideNavMenu>
    <SideNavLink href="/settings" current={pathname === '/settings'} onClick={route}>Settings</SideNavLink>
  </SideNavItems>
</SideNav>
```

`ui-navigate` also bubbles up through `<ui-header>`, so one listener on a wrapper, or on the document, routes every link of the shell.

## Events

The shell reports what the user opens and closes with `ui-toggle`:

| Element | `detail` | When |
|---|---|---|
| `ui-header-menu-button` | `{ active }` | The user pressed the hamburger: the state asked for. Cancelable: `preventDefault()` stops the side nav following it, so you can open your own. |
| `ui-side-nav` | `{ expanded }` | The user opened or closed the side nav (the hamburger, Esc, the overlay, focus leaving) |
| `ui-side-nav-menu` | `{ expanded }` | A side nav menu opened or closed |
| `ui-header-menu` | `{ open }` | A header menu opened or closed |
| `ui-header-panel` | `{ expanded }` | A panel opened or closed |

Open and close things below; each event is listed.


HTML:

```html
<div id="ui-shell-events" style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <template>
    <ui-header label="Metro Contracts">
      <ui-header-menu-button collapsible></ui-header-menu-button>
      <ui-header-name href="#home" prefix="Metro">Contracts</ui-header-name>
      <ui-header-nav label="Metro Contracts">
        <ui-header-menu label="Reports">
          <ui-header-menu-item href="#monthly">Monthly</ui-header-menu-item>
          <ui-header-menu-item href="#yearly">Yearly</ui-header-menu-item>
        </ui-header-menu>
      </ui-header-nav>
    </ui-header>
    <ui-side-nav collapsible label="Sections">
      <ui-side-nav-items>
        <ui-side-nav-menu label="Requests">
          <ui-side-nav-menu-item href="#open">Open</ui-side-nav-menu-item>
          <ui-side-nav-menu-item href="#closed">Closed</ui-side-nav-menu-item>
        </ui-side-nav-menu>
      </ui-side-nav-items>
    </ui-side-nav>
    <ui-content id="ui-shell-events-main">
      <p style="margin: 0; font: var(--ui-font-body)">Use the hamburger, the Reports menu and the Requests menu.</p>
    </ui-content>
  </template>
</div>
<p>Events: <output id="ui-shell-events-out">none yet</output></p>

<script type="module">
  // docs only: the example gets a shadow root of its own (this page has its own shell)
  const box = document.getElementById('ui-shell-events');
  const shell = box.attachShadow({ mode: 'open' });
  shell.append(document.importNode(box.querySelector('template').content, true));
  shell.addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // stay on this page
    event.stopPropagation();
  });

  const out = document.getElementById('ui-shell-events-out');
  const seen = [];
  shell.addEventListener('ui-toggle', (event) => {
    seen.unshift(`${event.target.localName} ${JSON.stringify(event.detail)}`);
    out.value = seen.slice(0, 3).join(' · ');
  });
</script>
```

React:

```tsx
<UiHeaderMenuButton collapsible onUiToggle={(e) => console.log('hamburger', e.detail.active)} />
<UiHeaderMenu label="Reports" onUiToggle={(e) => console.log('Reports', e.detail.open)}>…</UiHeaderMenu>
<UiSideNav collapsible label="Sections" onUiToggle={(e) => console.log('side nav', e.detail.expanded)}>
  <UiSideNavItems>
    <UiSideNavMenu label="Requests" onUiToggle={(e) => console.log('Requests', e.detail.expanded)}>…</UiSideNavMenu>
  </UiSideNavItems>
</UiSideNav>
```

React + Tailwind:

```tsx
<HeaderMenuButton collapsible active={navOpen} onToggle={setNavOpen} />
<HeaderMenu label="Reports" onToggle={(open) => console.log('Reports', open)}>…</HeaderMenu>
<SideNav collapsible aria-label="Sections" expanded={navOpen} onToggle={setNavOpen}>
  <SideNavItems>
    <SideNavMenu label="Requests" onToggle={(expanded) => console.log('Requests', expanded)}>…</SideNavMenu>
  </SideNavItems>
</SideNav>
```

In React + Tailwind the state is yours: `onToggle` on `HeaderMenuButton` and `SideNav` asks for the new state, and nothing changes until you pass it back.

## Skip to content

`<ui-skip-to-content>` goes first in the header. It is hidden until the first Tab on the page, then shows "Skip to main content" (in Thai with `lang="th"`) and jumps to `href`, `#main-content` by default: the id `<ui-content>` gives itself. Press Tab right after this page loads to see the site's own. Inside a shadow root (a micro app), the link finds its target there.

## Keyboard

| Key | Where | Does |
|---|---|---|
| Tab | First stop on the page | Shows the skip link |
| Enter, Space | Hamburger | Opens or closes the side nav |
| Enter, Space | Header menu title | Opens or closes the menu |
| Esc | Header menu | Closes it, focus back on its title |
| Esc | Header panel | Closes it, focus back on its global action |
| Esc | Side nav (opened by the hamburger) | Closes it, focus back on the hamburger |
| Tab | Out of an open panel, header menu, or a side nav over the page | Closes it |
| Enter | Side nav menu title (a button) | Opens or closes the menu |

## Accessibility

- `<ui-header>` is the `banner` landmark, named by `label`. `<ui-header-nav>` is a `navigation` landmark ("Main navigation" unless `label` says otherwise), `<ui-side-nav>` another ("Side navigation"), and `<ui-content>` is `main`.
- `current` sets `aria-current="page"` on the link; `selected` does the same on a switcher item.
- The hamburger is named "Open menu" / "Close menu" by its state (`open-label` / `close-label` change the words) and reports `aria-expanded`.
- A global action is named by `label`, through its tooltip. With `panel` it reports `aria-expanded`, else `aria-pressed` while `active`.
- A closed side nav (not a rail) is `inert`: its links leave the Tab order.
- Header menus and side nav menus are disclosures (`aria-expanded`, `aria-controls`), not ARIA menus: the links stay links, and Tab moves through them.

Unstyled React parts with the same behaviour: [Headless UI shell](https://parntengza.github.io/kanok-ui-docs/en/headless-ui-shell/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-header>` · React `UiHeader`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Accessible name of the banner, e.g. the product name. |

#### Slots

| Slot | Description |
|---|---|
| (default) | Header content |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The `<header>` |

### `<ui-skip-to-content>` · React `UiSkipToContent`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `'#main-content'` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | Link text (defaults to the translation) |

### `<ui-header-name>` · React `UiHeaderName`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `'/'` |  |
| `prefix` | `prefix` | `string` | `''` |  |
| `target` | `target` | `string` | `''` | Where the link opens (`_blank` for a new tab), as on `<a>`. |
| `rel` | `rel` | `string` | `''` | The link's relation (`noopener`, `external` …), as on `<a>`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Product name |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The link |

### `<ui-header-menu-button>` · React `UiHeaderMenuButton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `active` | `active` | `boolean` | `false` |  |
| `collapsible` | `collapsible` | `boolean` | `false` | Keep the button at every width (a collapsible, non-fixed side nav). |
| `open-label` | `openLabel` | `string` | `''` |  |
| `close-label` | `closeLabel` | `string` | `''` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | cancelable; detail: { active } the state the user asked for |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The button |

### `<ui-header-nav>` · React `UiHeaderNav`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | Menu items |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The `<nav>` |
| `list` | The menu bar list |

### `<ui-header-menu-item>` · React `UiHeaderMenuItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `'#'` |  |
| `current` | `current` | `boolean` | `false` |  |
| `target` | `target` | `string` | `''` | Where the link opens (`_blank` for a new tab), as on `<a>`. |
| `rel` | `rel` | `string` | `''` | The link's relation (`noopener`, `external` …), as on `<a>`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Link text |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The link |

### `<ui-header-menu>` · React `UiHeaderMenu`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `open` | `open` | `boolean` | `false` |  |
| `current` | `current` | `boolean` | `false` | Mark the menu as the current section even while open (Carbon `isActive`). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-header-menu-item>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `trigger` | The title button |
| `menu` | The dropdown list |

### `<ui-header-global-bar>` · React `UiHeaderGlobalBar`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | Global actions |

### `<ui-header-global-action>` · React `UiHeaderGlobalAction`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `active` | `active` | `boolean` | `false` |  |
| `tooltip-placement` | `tooltipPlacement` | `'bottom' \| 'bottom-start' \| 'bottom-end'` | `'bottom'` |  |
| `panel` | `panel` | `string` | `''` | Id of the `<ui-header-panel>` this action opens. Clicking toggles the panel, `active` follows it, and the button reports `aria-expanded` (a disclosure) instead of `aria-pressed` (a toggle). The button has an explicit tabindex, as Carbon's (cds-button): Safari then focuses it on click and Tab reaches it. |

#### Slots

| Slot | Description |
|---|---|
| (default) | 20px icon |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The button |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-header-action-radius` |  | Corners of the button's hover fill and focus box (default 0; Kanok: 6px) |

### `<ui-header-panel>` · React `UiHeaderPanel`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `expanded` | `expanded` | `boolean` | `false` |  |
| `label` | `label` | `string` | `''` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded } |

#### Slots

| Slot | Description |
|---|---|
| (default) | Panel content (e.g. `<ui-switcher>`) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The panel |

### `<ui-switcher>` · React `UiSwitcher`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-switcher-item>` and `<hr>` elements |

### `<ui-switcher-item>` · React `UiSwitcherItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `'#'` |  |
| `selected` | `selected` | `boolean` | `false` |  |
| `target` | `target` | `string` | `''` | Where the link opens (`_blank` for a new tab), as on `<a>`. |
| `rel` | `rel` | `string` | `''` | The link's relation (`noopener`, `external` …), as on `<a>`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Link text |

### `<ui-side-nav>` · React `UiSideNav`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `expanded` | `expanded` | `boolean` | `false` |  |
| `rail` | `rail` | `boolean` | `false` | 48px icon rail that expands on hover / focus. |
| `fixed` | `fixed` | `boolean` | `false` | With `expanded`: always 256px wide, pushing `<ui-content>` aside (no overlay). Set both — without `expanded` the nav slides out of view while `<ui-content>` keeps its 256px offset. |
| `collapsible` | `collapsible` | `boolean` | `false` | Closed on large screens too until the hamburger opens it over the page (Carbon `isPersistent={false}`); `<ui-content>` isn't pushed aside. |
| `label` | `label` | `string` | `''` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded } after a user action changed the state |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-side-nav-items>` |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The `<nav>` |
| `overlay` | The page overlay (below `lg`) |

### `<ui-side-nav-items>` · React `UiSideNavItems`

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-side-nav-link>`, `<ui-side-nav-menu>`, `<ui-side-nav-divider>` |

### `<ui-side-nav-link>` · React `UiSideNavLink`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `'#'` |  |
| `current` | `current` | `boolean` | `false` |  |
| `target` | `target` | `string` | `''` | Where the link opens (`_blank` for a new tab), as on `<a>`. |
| `rel` | `rel` | `string` | `''` | The link's relation (`noopener`, `external` …), as on `<a>`. |
| `large` | `large` | `boolean` | `false` | 48px row. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Link text |
| `icon` | 16px icon |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The link |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-nav-item-inset` |  | Space each side of a row (default 0; Kanok: 8px) |
| `--ui-nav-item-radius` |  | Corner radius of a row (default 0; Kanok: 6px) |
| `--ui-nav-current-background` |  | Fill of the current page's row (default `--ui-canvas-selected`) |
| `--ui-nav-current-mark` |  | Colour of its start-edge bar (default `--ui-primary`; Kanok: `--ui-border-interactive`) |
| `--ui-nav-current-mark-width` |  | / --ui-nav-current-mark-inset / --ui-nav-current-mark-radius - The bar's width (3px; Kanok: 0, the tinted row alone — forced colours still show it), top and bottom inset (0) and corners (0) |

### `<ui-side-nav-menu>` · React `UiSideNavMenu`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `expanded` | `expanded` | `boolean` | `false` |  |
| `large` | `large` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded } |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-side-nav-menu-item>` elements |
| `icon` | 16px icon |

#### CSS parts

| Part | Description |
|---|---|
| `trigger` | The title button |
| `menu` | The list of items |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-nav-item-inset` |  | / --ui-nav-item-radius / --ui-nav-current-* - As on `<ui-side-nav-link>` |

### `<ui-side-nav-menu-item>` · React `UiSideNavMenuItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `'#'` |  |
| `current` | `current` | `boolean` | `false` |  |
| `target` | `target` | `string` | `''` | Where the link opens (`_blank` for a new tab), as on `<a>`. |
| `rel` | `rel` | `string` | `''` | The link's relation (`noopener`, `external` …), as on `<a>`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Link text |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The link |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-nav-item-inset` |  | / --ui-nav-item-radius / --ui-nav-current-* - As on `<ui-side-nav-link>` |

### `<ui-side-nav-divider>` · React `UiSideNavDivider`

### `<ui-content>` · React `UiContent`

#### Slots

| Slot | Description |
|---|---|
| (default) | Page content |


