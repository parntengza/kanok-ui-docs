# Headless UI shell

Three namespaces give you the behaviour of the styled [UI shell](https://parntengza.github.io/kanok-ui-docs/en/ui-shell/) with no styles:

- `Shell`: `Shell.Root` holds whether the side nav is open, so the hamburger and the side nav wire themselves to each other; `Shell.Content` is the `<main>` that tells how the side nav beside it lays out.
- `Header`: the `<header>`, the skip link, the hamburger, menus of links that open and close, icon buttons and the panel under the header, with Esc, clicks outside and focus return.
- `SideNav`: the `<nav>` with its modes (default, rail, fixed, collapsible), the overlay, links and menus, with Esc and focus leaving.

You own every element's look and position: the 48px bar, the 256px nav, the offsets of the content, the icons and the words. The parts show their state as `data-*` attributes for you to style on.

The examples sit in a box whose `transform` keeps their `position: fixed` parts inside it, and their links only change the example's state, so a click doesn't leave this page. In your app the header and the nav are fixed to the window.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Header, Shell, SideNav } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState, type MouseEvent } from 'react';
import { Header, Shell, SideNav } from '@purpurabog/ui/headless';

const link = 'flex h-8 items-center px-4 text-sm whitespace-nowrap text-ink-muted hover:bg-canvas-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:border-s-4 data-current:border-interactive data-current:bg-canvas-selected data-current:ps-3 data-current:font-semibold data-current:text-ink';

export default function Example() {
  const [page, setPage] = useState('Dashboard');
  // a router stand-in: the links change the example's page instead of loading one
  const go = (name: string, path: string) => ({
    href: `#${path}`,
    current: page === name,
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      setPage(name);
    },
  });
  return (
    <div className="relative h-80 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
      <Shell.Root>
        <Header.Root aria-label="Metro Contracts" className="fixed inset-x-0 top-0 z-20 flex h-12 items-center border-b border-border-subtle-1 bg-canvas">
          <Header.SkipToContent href="#headless-shell-main" className="absolute -translate-y-full bg-canvas px-4 py-3 text-sm focus:translate-y-0 focus:outline-2 focus:outline-focus">
            Skip to main content
          </Header.SkipToContent>
          <Header.MenuButton aria-label="Menu" className="group flex size-12 items-center justify-center text-icon-primary hover:bg-canvas-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-active:bg-surface-1 min-[1056px]:hidden">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current group-data-active:hidden">
              <path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" />
            </svg>
            <svg viewBox="0 0 20 20" aria-hidden="true" className="hidden size-5 fill-current group-data-active:block">
              <path d="M15 5.8 14.2 5 10 9.2 5.8 5 5 5.8 9.2 10 5 14.2l.8.8 4.2-4.2 4.2 4.2.8-.8L10.8 10z" />
            </svg>
          </Header.MenuButton>
          <a {...go('Dashboard', 'dashboard')} className="px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-focus">
            <span className="font-normal">Metro</span> Contracts
          </a>
        </Header.Root>
        <SideNav.Root>
          <SideNav.Overlay className="fixed inset-x-0 top-12 bottom-0 z-10 hidden bg-overlay data-open:block min-[1056px]:data-open:hidden" />
          <SideNav.Nav aria-label="Sections" className="fixed start-0 top-12 bottom-0 z-20 w-0 overflow-hidden bg-canvas transition-[width] data-open:w-64">
            <ul className="pt-4">
              <li><SideNav.Link {...go('Dashboard', 'dashboard')} className={link}>Dashboard</SideNav.Link></li>
              <SideNav.Menu defaultExpanded>
                <SideNav.MenuTrigger className="group flex h-8 w-full items-center justify-between px-4 text-start text-sm font-semibold whitespace-nowrap text-ink-muted hover:bg-canvas-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
                  Requests
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
                    <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
                  </svg>
                </SideNav.MenuTrigger>
                <SideNav.MenuPopup className="hidden data-open:block">
                  <li><SideNav.MenuItem {...go('Open', 'open')} className={`${link} ps-8 data-current:ps-7`}>Open</SideNav.MenuItem></li>
                  <li><SideNav.MenuItem {...go('Awaiting signature', 'signing')} className={`${link} ps-8 data-current:ps-7`}>Awaiting signature</SideNav.MenuItem></li>
                </SideNav.MenuPopup>
              </SideNav.Menu>
              <li><SideNav.Link {...go('Settings', 'settings')} className={link}>Settings</SideNav.Link></li>
            </ul>
          </SideNav.Nav>
        </SideNav.Root>
        <Shell.Content id="headless-shell-main" className="mt-12 p-8 transition-[margin] min-[1056px]:data-[side-nav=default]:ms-64">
          <p className="text-2xl">{page}</p>
        </Shell.Content>
      </Shell.Root>
    </div>
  );
}
```

Inside `Shell.Root` the `MenuButton` opens and closes the side nav with no props, and gets `aria-expanded` and `aria-controls`. The nav is open beside the content from Carbon's `lg` breakpoint, 1056px (`data-open`); below it, the hamburger opens it over the page with the overlay.

## Anatomy

```tsx
<Shell.Root>
  <Header.Root>
    <Header.SkipToContent />
    <Header.MenuButton />
    <nav>
      <ul>
        <li><Header.MenuItem /></li>
        <Header.Menu>
          <Header.MenuTrigger />
          <Header.MenuPopup>
            <li><Header.MenuItem /></li>
          </Header.MenuPopup>
        </Header.Menu>
      </ul>
    </nav>
    <Header.GlobalAction />
    <Header.Panel>
      <Header.PanelContent />
    </Header.Panel>
  </Header.Root>
  <SideNav.Root>
    <SideNav.Overlay />
    <SideNav.Nav>
      <ul>
        <li><SideNav.Link /></li>
        <SideNav.Menu>
          <SideNav.MenuTrigger />
          <SideNav.MenuPopup>
            <li><SideNav.MenuItem /></li>
          </SideNav.MenuPopup>
        </SideNav.Menu>
      </ul>
    </SideNav.Nav>
  </SideNav.Root>
  <Shell.Content />
</Shell.Root>
```

The product name link, the menu bar's `<nav>` and the group around the global actions have no behaviour: they are your own elements.

## Header menus

`Header.Menu` is an `<li>` holding a `MenuTrigger` button and a `MenuPopup` list of `MenuItem` links: a disclosure, not an ARIA menu. Click, Enter or Space toggle it; Esc closes it and focuses the trigger; a press outside or focus leaving closes it; following one of its links closes it and focuses the trigger. A closed menu has `data-current` when one of its items is `current`.


React (live React example):

```tsx
import { useState, type MouseEvent } from 'react';
import { Header } from '@purpurabog/ui/headless';

const bar = 'relative flex h-12 items-center px-4 text-sm whitespace-nowrap text-ink-muted hover:bg-canvas-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:border-b-[3px] data-current:border-interactive data-current:text-ink';
const row = 'flex h-12 items-center px-4 text-sm text-ink-muted hover:bg-layer-hover-1 hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:bg-layer-selected-1 data-current:text-ink';

export default function Example() {
  const [page, setPage] = useState('Monthly');
  const go = (name: string, path: string) => ({
    href: `#${path}`,
    current: page === name,
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      setPage(name);
    },
  });
  return (
    <div className="relative h-60 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
      <Header.Root aria-label="Metro Contracts" className="fixed inset-x-0 top-0 flex h-12 items-center border-b border-border-subtle-1 bg-canvas">
        <span className="px-4 text-sm font-semibold"><span className="font-normal">Metro</span> Contracts</span>
        <nav aria-label="Metro Contracts">
          <ul className="flex">
            <li><Header.MenuItem {...go('Requests', 'requests')} className={bar}>Requests</Header.MenuItem></li>
            <Header.Menu className="relative">
              <Header.MenuTrigger className={`${bar} group gap-2`}>
                Reports
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current transition-transform group-data-open:rotate-180">
                  <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
                </svg>
              </Header.MenuTrigger>
              <Header.MenuPopup aria-label="Reports" className="absolute start-0 top-12 hidden w-50 bg-surface-1 shadow-lg data-open:block">
                <li><Header.MenuItem {...go('Monthly', 'monthly')} className={row}>Monthly</Header.MenuItem></li>
                <li><Header.MenuItem {...go('Yearly', 'yearly')} className={row}>Yearly</Header.MenuItem></li>
                <li><Header.MenuItem {...go('Audit log', 'audit')} className={row}>Audit log</Header.MenuItem></li>
              </Header.MenuPopup>
            </Header.Menu>
          </ul>
        </nav>
      </Header.Root>
      <p className="mt-12 p-8 text-sm text-ink-muted">Page: {page}</p>
    </div>
  );
}
```

`current` on a `Menu` shows the mark even while it is open (Carbon's `isActive`). The menu finds a `current` item by reading the props of the elements written inside it, so set `current` on the `MenuItem` itself, not on a wrapper component under another name.

## Global actions and a panel

`Header.GlobalAction` is an icon button of two kinds: with `active` it is a toggle (`aria-pressed`); with `expanded` it is a disclosure (`aria-expanded`) for a panel. `Header.Panel` is controlled: it asks to close with `onClose(reason)` on Esc (focus goes back to what opened it), when focus leaves it, or on a press outside, but not on the action whose `aria-controls` is the panel's `id`, which toggles it.


React (live React example):

```tsx
import { useState } from 'react';
import { Header } from '@purpurabog/ui/headless';

const action = 'flex size-12 items-center justify-center text-icon-secondary hover:bg-canvas-hover hover:text-icon-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-active:bg-surface-1 data-active:text-icon-primary';

export default function Example() {
  const [muted, setMuted] = useState(false);
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  return (
    <div className="grid gap-4">
      <div className="relative h-72 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
        <Header.Root aria-label="Metro Contracts" className="fixed inset-x-0 top-0 flex h-12 items-center border-b border-border-subtle-1 bg-canvas">
          <span className="px-4 text-sm font-semibold"><span className="font-normal">Metro</span> Contracts</span>
          <div role="group" aria-label="Global actions" className="ms-auto flex">
            <Header.GlobalAction aria-label="Mute notifications" active={muted} onClick={() => setMuted(!muted)} className={action}>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                <path d="M17 14.3V13l-1.5-1.5V8a5.5 5.5 0 0 0-4.6-5.4V1.4H9.1v1.2A5.5 5.5 0 0 0 4.5 8v3.5L3 13v1.3h4.4a2.6 2.6 0 0 0 5.2 0ZM10 15.9a1.3 1.3 0 0 1-1.3-1.3h2.6a1.3 1.3 0 0 1-1.3 1.3Z" />
              </svg>
            </Header.GlobalAction>
            <Header.GlobalAction aria-label="Applications" expanded={open} aria-controls="headless-shell-apps" onClick={() => setOpen(!open)} className={action}>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                <path d="M4 4h3v3H4zm4.5 0h3v3h-3zM13 4h3v3h-3zM4 8.5h3v3H4zm4.5 0h3v3h-3zm4.5 0h3v3h-3zM4 13h3v3H4zm4.5 0h3v3h-3zm4.5 0h3v3h-3z" />
              </svg>
            </Header.GlobalAction>
          </div>
          <Header.Panel
            id="headless-shell-apps"
            expanded={open}
            onClose={(why) => {
              setOpen(false);
              setReason(why);
            }}
            className="fixed end-0 top-12 bottom-0 w-0 overflow-hidden border-hairline bg-surface-1 transition-[width] data-open:w-64 data-open:border-s"
          >
            <Header.PanelContent aria-label="Applications">
              <ul className="py-2">
                <li><a href="#contracts" onClick={(e) => e.preventDefault()} aria-current="page" className="block px-4 py-2 text-sm font-semibold text-ink hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Contracts</a></li>
                <li><a href="#audit" onClick={(e) => e.preventDefault()} className="block px-4 py-2 text-sm text-ink-muted hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Audit management</a></li>
              </ul>
            </Header.PanelContent>
          </Header.Panel>
        </Header.Root>
      </div>
      <p className="text-xs text-ink-muted">Muted: {muted ? 'yes' : 'no'} · Panel: {open ? 'open' : 'closed'}{reason ? ` · last close: ${reason}` : ''}</p>
    </div>
  );
}
```

`PanelContent` is a `<section>`: named with `aria-label`, it is a region landmark. It has `hidden` while the panel is closed.

## Side nav modes

`SideNav.Root` takes the mode; `Nav` writes it in `data-ui-side-nav`, and `Shell.Content` copies it to its `data-side-nav` so you can offset the page:

- default: over the page below `lg`, beside it from `lg` (`data-open` from 1056px).
- `rail`: a strip of icons that is `data-open` while the pointer is on it or focus is inside (`data-expanded` too).
- `fixed`: always `data-open`, never an overlay.
- `collapsible`: closed at every width until the hamburger opens it over the page.

Pick a mode, then point at the nav, use the hamburger and press Esc.


React (live React example):

```tsx
import { useState, type MouseEvent } from 'react';
import { Header, Shell, SideNav } from '@purpurabog/ui/headless';

const modes: SideNav.SideNavMode[] = ['default', 'rail', 'fixed', 'collapsible'];

const link = 'flex h-8 items-center gap-6 px-4 text-sm whitespace-nowrap text-ink-muted hover:bg-canvas-hover hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-current:border-s-4 data-current:border-interactive data-current:bg-canvas-selected data-current:ps-3 data-current:font-semibold data-current:text-ink';

const icons = {
  Dashboard: 'M2 2h5v5H2zm7 0h5v5H9zM2 9h5v5H2zm7 0h5v5H9z',
  Requests: 'M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z',
  Settings: 'M13.5 8.4a5.4 5.4 0 0 0 0-.8l1.4-1.1-1.3-2.3-1.7.6a5 5 0 0 0-.7-.4L10.9 2.6H8.3L8 4.4l-.7.4-1.7-.6-1.3 2.3 1.4 1.1a5.4 5.4 0 0 0 0 .8L4.3 9.5l1.3 2.3 1.7-.6.7.4.3 1.8h2.6l.3-1.8.7-.4 1.7.6 1.3-2.3zM9.6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z',
};

export default function Example() {
  const [mode, setMode] = useState<SideNav.SideNavMode>('rail');
  const [page, setPage] = useState('Dashboard');
  const hamburger = mode === 'collapsible' ? '' : 'min-[1056px]:hidden';
  return (
    <div className="grid gap-4">
      <fieldset className="flex flex-wrap gap-4 text-sm text-ink">
        <legend className="mb-2 text-xs text-ink-muted">Mode</legend>
        {modes.map((m) => (
          <label key={m} className="flex items-center gap-2">
            <input type="radio" name="headless-shell-mode" checked={mode === m} onChange={() => setMode(m)} className="accent-interactive" />
            {m}
          </label>
        ))}
      </fieldset>
      <div className="relative h-80 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
        <Shell.Root key={mode}>
          <Header.Root aria-label="Metro Contracts" className="fixed inset-x-0 top-0 z-20 flex h-12 items-center border-b border-border-subtle-1 bg-canvas">
            <Header.MenuButton aria-label="Menu" className={`flex size-12 items-center justify-center text-icon-primary hover:bg-canvas-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-active:bg-surface-1 ${hamburger}`}>
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
                <path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" />
              </svg>
            </Header.MenuButton>
            <span className="px-4 text-sm font-semibold"><span className="font-normal">Metro</span> Contracts</span>
          </Header.Root>
          <SideNav.Root rail={mode === 'rail'} fixed={mode === 'fixed'} collapsible={mode === 'collapsible'}>
            <SideNav.Overlay className="fixed inset-x-0 top-12 bottom-0 z-10 hidden bg-overlay data-open:block min-[1056px]:data-open:hidden" />
            <SideNav.Nav aria-label="Sections" className="fixed start-0 top-12 bottom-0 z-20 w-0 overflow-hidden bg-canvas transition-[width] data-[ui-side-nav=rail]:w-12 data-open:w-64!">
              <ul className="pt-4">
                {Object.entries(icons).map(([name, d]) => (
                  <li key={name}>
                    <SideNav.Link
                      href={`#${name.toLowerCase()}`}
                      current={page === name}
                      onClick={(event: MouseEvent) => {
                        event.preventDefault();
                        setPage(name);
                      }}
                      className={link}
                    >
                      <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current"><path d={d} /></svg>
                      {name}
                    </SideNav.Link>
                  </li>
                ))}
              </ul>
            </SideNav.Nav>
          </SideNav.Root>
          {/* several shells share this page: say the mode instead of letting Content look for it */}
          <Shell.Content sideNav={mode} id="headless-shell-modes-main" className="mt-12 p-8 transition-[margin] data-[side-nav=fixed]:ms-64 data-[side-nav=rail]:ms-12 min-[1056px]:data-[side-nav=default]:ms-64">
            <p className="text-2xl">{page}</p>
            <p className="text-xs text-ink-muted">data-side-nav="{mode}"</p>
          </Shell.Content>
        </Shell.Root>
      </div>
    </div>
  );
}
```

Left without `sideNav`, `Content` looks for the first `[data-ui-side-nav]` in the document (and in its own shadow root) after each render. One shell per page, as in an app, needs no prop; this page holds several, so the examples after the first say it.

## Without Shell.Root

Leave out `Shell.Root` to hold the state yourself: `active` and `onToggle` on the `MenuButton`, `expanded` and `onToggle` on `SideNav.Root`. The side nav's `onToggle` asks to close on Esc, a click on the overlay, or focus leaving it while it is over the page; nothing changes until you pass the new state back.


React (live React example):

```tsx
import { useState } from 'react';
import { Header, SideNav } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [asked, setAsked] = useState('nothing yet');
  const toggle = (next: boolean) => {
    setOpen(next);
    setAsked(next ? 'open' : 'close');
  };
  return (
    <div className="grid gap-4">
      <div className="relative h-64 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
        <Header.Root aria-label="Metro Contracts" className="fixed inset-x-0 top-0 z-20 flex h-12 items-center border-b border-border-subtle-1 bg-canvas">
          <Header.MenuButton aria-label="Menu" aria-controls="headless-shell-own-nav" active={open} onToggle={toggle} className="flex size-12 items-center justify-center text-icon-primary hover:bg-canvas-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-active:bg-surface-1">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
              <path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" />
            </svg>
          </Header.MenuButton>
          <span className="px-4 text-sm font-semibold"><span className="font-normal">Metro</span> Contracts</span>
        </Header.Root>
        <SideNav.Root collapsible expanded={open} onToggle={toggle}>
          <SideNav.Overlay className="fixed inset-x-0 top-12 bottom-0 z-10 hidden bg-overlay data-open:block" />
          <SideNav.Nav id="headless-shell-own-nav" aria-label="Sections" className="fixed start-0 top-12 bottom-0 z-20 w-0 overflow-hidden bg-canvas transition-[width] data-open:w-64">
            <ul className="pt-4">
              <li><SideNav.Link href="#requests" onClick={(e) => e.preventDefault()} className="flex h-8 items-center px-4 text-sm whitespace-nowrap text-ink-muted hover:bg-canvas-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Requests</SideNav.Link></li>
              <li><SideNav.Link href="#templates" onClick={(e) => e.preventDefault()} className="flex h-8 items-center px-4 text-sm whitespace-nowrap text-ink-muted hover:bg-canvas-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Templates</SideNav.Link></li>
            </ul>
          </SideNav.Nav>
        </SideNav.Root>
        <p className="mt-12 p-8 text-sm text-ink-muted">The overlay covers this box while the nav is open.</p>
      </div>
      <p className="text-xs text-ink-muted">Last asked: {asked}</p>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { useState, type MouseEvent } from 'react';
import { Header, Shell, SideNav } from '@purpurabog/ui/headless';

export default function Example() {
  const [page, setPage] = useState('Requests');
  const go = (name: string, path: string) => ({
    href: `#${path}`,
    current: page === name,
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      setPage(name);
    },
  });
  return (
    <div className="relative h-72 overflow-hidden border border-hairline bg-canvas text-ink [transform:translateZ(0)]">
      <Shell.Root>
        <Header.Root aria-label="Metro Contracts" className="fixed inset-x-0 top-0 z-20 flex h-12 items-center bg-inverse-canvas text-inverse-ink">
          <Header.MenuButton aria-label="Menu" className="flex size-12 items-center justify-center hover:bg-inverse-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-inverse data-active:bg-interactive">
            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-current">
              <path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" />
            </svg>
          </Header.MenuButton>
          <span className="px-4 text-sm font-semibold">Contracts</span>
        </Header.Root>
        <SideNav.Root collapsible>
          <SideNav.Nav aria-label="Sections" className="fixed start-0 top-12 bottom-0 z-20 w-0 overflow-hidden bg-layer-1 shadow-lg transition-[width] data-open:w-56">
            <ul className="grid gap-1 p-2">
              {['Requests', 'Templates', 'Settings'].map((name) => (
                <li key={name}>
                  <SideNav.Link {...go(name, name.toLowerCase())} className="flex h-8 items-center rounded px-3 text-sm whitespace-nowrap text-ink-muted hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:outline-focus data-current:bg-interactive data-current:text-on-primary">
                    {name}
                  </SideNav.Link>
                </li>
              ))}
            </ul>
          </SideNav.Nav>
        </SideNav.Root>
        <Shell.Content sideNav="collapsible" id="headless-shell-style-main" className="mt-12 p-8">
          <p className="text-2xl">{page}</p>
        </Shell.Content>
      </Shell.Root>
    </div>
  );
}
```
```css
/* className="menu-button" on MenuButton, "nav" on Nav, "overlay" on Overlay, "link" on Link and MenuItem, "content" on Content */
.menu-button[data-active] { background: #0f62fe; }
.nav { inline-size: 0; overflow: hidden; }
.nav[data-open] { inline-size: 256px; }
.nav[data-ui-side-nav='rail']:not([data-open]) { inline-size: 48px; }
.overlay[data-open] { position: fixed; inset: 48px 0 0; background: rgb(22 22 22 / 0.5); }
.link[data-current] { font-weight: 600; box-shadow: inset 3px 0 #0f62fe; }
.content[data-side-nav='fixed'] { margin-inline-start: 256px; }
.content[data-side-nav='rail'] { margin-inline-start: 48px; }
@media (min-width: 1056px) {
  .content[data-side-nav='default'] { margin-inline-start: 256px; }
  .overlay[data-open] { display: none; }
}
```

## Parts

### Shell.Root

Renders no element: only its children. It holds the side nav's expanded state for a `Header.MenuButton` and a `SideNav.Root` inside it.

| Prop | Type | Default | |
|---|---|---|---|
| `sideNavExpanded` | `boolean` | | The side nav is open (controlled) |
| `defaultSideNavExpanded` | `boolean` | `false` | Open on the first render (uncontrolled) |
| `onSideNavExpandedChange` | `(expanded: boolean) => void` | | The hamburger, Esc, the overlay or focus leaving asked for this state |

`Shell.useShellContext()` returns `{ sideNavExpanded, setSideNavExpanded, sideNavId }`, or `null` outside a `Shell.Root`.

### Shell.Content

A `<main>` with the id `main-content` (the skip link's default target).

| Prop | Type | Default | |
|---|---|---|---|
| `sideNav` | `'default' \| 'rail' \| 'fixed' \| 'collapsible' \| 'none'` | found on the page | How the side nav beside it lays out |
| `id` | `string` | `'main-content'` | The skip link's target |

| Attribute | When |
|---|---|
| `data-side-nav` | The mode: `sideNav`, else the first `[data-ui-side-nav]` in the document (or its shadow root), else `none` |

### Header.Root

A `<header>`, the banner landmark: name it with `aria-label`. It sets `data-ui-header`, which a toaster uses to start below the header. No props of its own.

### Header.SkipToContent

An `<a>` to the content; hide it until it has focus. Inside a shadow root (a micro app) a click moves focus to the target itself, which the browser can't find there.

| Prop | Type | Default | |
|---|---|---|---|
| `href` | `string` | `'#main-content'` | The content's id as a fragment |

### Header.MenuButton

A `<button type="button">` with `aria-expanded` and `aria-controls` (the `Shell.Root`'s side nav id unless you pass your own). Name it with `aria-label`, by its state if you like ("Open menu" / "Close menu").

| Prop | Type | Default | |
|---|---|---|---|
| `active` | `boolean` | the shell's state, else `false` | The side nav it controls is open |
| `onToggle` | `(active: boolean) => void` | | The user asked for the other state |

| Attribute | When |
|---|---|
| `data-active` | The side nav is open |

### Header.Menu

An `<li>` holding a `MenuTrigger` and a `MenuPopup`.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Open (controlled) |
| `defaultOpen` | `boolean` | `false` | Open on the first render |
| `onOpenChange` | `(open: boolean) => void` | | The user opened or closed it |
| `current` | `boolean` | `false` | Show the current-section mark even while open (Carbon `isActive`) |

| Attribute | When |
|---|---|
| `data-open` | It is open |
| `data-current` | `current`, or closed with a `current` item inside |

`Header.useMenuContext()` returns the menu's state; `Header.useOptionalMenuContext()` returns it or `null` in the menu bar.

### Header.MenuTrigger

A `<button type="button">` with `aria-expanded`, `aria-controls` (its popup) and `tabindex="0"` (so Safari focuses it on click and Tab reaches it). It has the same `data-open` and `data-current` as its menu.

### Header.MenuPopup

A `<ul>` with the menu's id: name it with `aria-label` (the trigger's text) and hide it while `data-open` is absent.

| Attribute | When |
|---|---|
| `data-open` | The menu is open |

### Header.MenuItem

An `<a>` of the menu bar or of a menu. Following it inside a menu closes the menu and focuses its trigger. It keeps `target` and `rel`.

| Prop | Type | Default | |
|---|---|---|---|
| `current` | `boolean` | `false` | The current page (`aria-current="page"`) |

| Attribute | When |
|---|---|
| `data-current` | `current` is set |

### Header.GlobalAction

A `<button type="button">` with `tabindex="0"`. Name it with `aria-label` (or a tooltip that labels it).

| Prop | Type | Default | |
|---|---|---|---|
| `active` | `boolean` | `false` | Pressed: a toggle (`aria-pressed`) |
| `expanded` | `boolean` | | Its panel is open: a disclosure (`aria-expanded`); pair it with `aria-controls` = the panel's `id` |

| Attribute | When |
|---|---|
| `data-active` | Pressed, or its panel is open |

### Header.Panel

A `<div>`: the panel under the header. Give it the `id` its action's `aria-controls` names.

| Prop | Type | Default | |
|---|---|---|---|
| `expanded` | `boolean` | | Open (required, controlled) |
| `onClose` | `(reason: 'escape' \| 'blur' \| 'outside') => void` | | Asks to close: Esc (focus goes back to what opened it), focus leaving, a press outside (not on its action) |

| Attribute | When |
|---|---|
| `data-open` | It is open |

### Header.PanelContent

A `<section>` inside the panel, `hidden` while it is closed. Name it (`aria-label`) to make it a region landmark.

| Attribute | When |
|---|---|
| `data-open` | The panel is open |

### SideNav.Root

Renders no element: only its children. It holds the expanded, hover and breakpoint state.

| Prop | Type | Default | |
|---|---|---|---|
| `expanded` | `boolean` | the shell's state, else `false` | Open (controlled) |
| `onToggle` | `(expanded: boolean) => void` | | Esc, the overlay or focus leaving asked for this state |
| `rail` | `boolean` | `false` | A strip of icons that opens on hover / focus |
| `fixed` | `boolean` | `false` | Always open beside the page |
| `collapsible` | `boolean` | `false` | Closed at every width until opened over the page |

`SideNav.useSideNavContext()` returns `{ expanded, hoverOpen, open, hidden, mode, rail, fixed, collapsible, large, … }`.

### SideNav.Overlay

A `<div aria-hidden="true">` that covers the page while the nav is expanded; a click on it asks to close. Show it below `lg` only.

| Attribute | When |
|---|---|
| `data-open` | The nav is expanded and not `fixed` |

### SideNav.Nav

A `<nav tabindex="-1">`: name it with `aria-label`. Its id is the shell's side nav id unless you pass one. Hover and focus open a rail; Esc asks to close and gives focus back to what opened it; over the page (below `lg`, or `collapsible`), focus leaving it asks to close. While neither shown nor a rail it is `inert`.

| Attribute | When |
|---|---|
| `data-ui-side-nav` | The mode: `default`, `rail`, `fixed` or `collapsible` |
| `data-open` | Shown at full width: expanded, a hovered rail, `fixed`, or the default nav from `lg` |
| `data-expanded` | Asked open, or a rail under the pointer or holding focus |
| `data-collapsed` | Hidden and `inert` |

### SideNav.Link

An `<a>`, out of the Tab order while the nav is hidden. It keeps `target` and `rel`.

| Prop | Type | Default | |
|---|---|---|---|
| `current` | `boolean` | `false` | The current page (`aria-current="page"`) |

| Attribute | When |
|---|---|
| `data-current` | `current` is set |

### SideNav.Menu, MenuTrigger, MenuPopup, MenuItem

`Menu` is an `<li>`; `MenuTrigger` a `<button type="button">` with `aria-expanded` and `aria-controls`; `MenuPopup` a `<ul>` to hide while `data-open` is absent; `MenuItem` an `<a>` with `current` (`aria-current="page"`, `data-current`).

| Prop of `Menu` | Type | Default | |
|---|---|---|---|
| `expanded` | `boolean` | | Open (controlled) |
| `defaultExpanded` | `boolean` | `false` | Open on the first render |
| `onExpandedChange` | `(expanded: boolean) => void` | | The user opened or closed it |

| Attribute | On | When |
|---|---|---|
| `data-open` | `Menu`, `MenuTrigger`, `MenuPopup` | The menu is open |
| `data-current` | `Menu`, `MenuTrigger` | One of its items is `current` (open or closed) |

`SideNav.useMenuContext()` returns `{ expanded, current, menuId, toggle }`.

## Keyboard and accessibility

| Key | Where | Does |
|---|---|---|
| Enter, Space | `MenuButton` | Opens or closes the side nav |
| Enter, Space | `Header.MenuTrigger` | Opens or closes the menu |
| Esc | Open header menu | Closes it, focus back on its trigger |
| Esc | Open panel | Asks to close (`'escape'`), focus back on what opened it |
| Esc | Open side nav | Asks to close, focus back on what opened it |
| Tab | Out of a header menu, a panel, or a side nav over the page | Closes it (asks to) |
| Enter, Space | `SideNav.MenuTrigger` | Opens or closes the menu |

The parts set `aria-expanded`, `aria-controls`, `aria-pressed`, `aria-current="page"`, `inert` on a hidden nav and `tabindex="-1"` on its links, and `aria-hidden` on the overlay.

You add:

- The names: `aria-label` on `Header.Root`, the menu bar's `<nav>`, `SideNav.Nav`, `MenuButton`, each `GlobalAction` and `MenuPopup`.
- The skip link's text and a style that shows it on focus.
- The icons, with `aria-hidden="true"`.
