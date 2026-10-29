# Headless

`@purpurabog/ui/headless` is the behaviour of the components without their look: React parts that bring Carbon's keyboard, focus, ARIA, popup placement and form submit, and render no class at all. The markup, the labels, the messages and every style are yours.

The React + Tailwind components are built on these parts, so both behave the same.

## Headless or React + Tailwind?

| Use | When |
|---|---|
| [React + Tailwind](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn) | You want Carbon's look and to change it line by line. You start from a finished field: label, helper text, errors and sizes included. |
| Headless | You have your own design system, or a layout Carbon's components don't fit. You build the field around the parts. |

## Install

```bash
npm i @purpurabog/ui react react-dom
```

Import the parts from `@purpurabog/ui/headless`. Each component is a namespace of parts (`Dropdown.Root`, `Dropdown.Trigger`, …). There are no tokens to load: the parts have no colours of their own.

## Your first component


React (live React example):

```tsx
import { useState } from 'react';
import { Dropdown } from '@purpurabog/ui/headless';

const types = [
  { value: 'sale', label: 'Sale' },
  { value: 'lease', label: 'Lease' },
];

export default function Example() {
  const [type, setType] = useState('');
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={types} name="type" onValueChange={setType}>
        <Dropdown.Label className="text-xs text-ink-muted">Contract type</Dropdown.Label>
        <Dropdown.Trigger className="group flex h-10 items-center justify-between border-b border-border-strong-1 bg-field-1 px-4 text-left text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus">
          <Dropdown.Value placeholder="Choose a type" className="data-placeholder:text-ink-placeholder" />
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current group-data-open:rotate-180">
            <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
          </svg>
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm shadow-lg">
          {types.map((t) => (
            <Dropdown.Option
              key={t.value}
              value={t.value}
              className="flex h-10 cursor-pointer items-center px-4 text-ink-muted hover:bg-layer-hover-1 data-highlighted:bg-layer-hover-1 data-selected:bg-layer-selected-1 data-selected:text-ink"
            >
              {t.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
      <p className="text-xs text-ink-muted">Value: {type}</p>
    </div>
  );
}
```

`Root` holds the state and submits `name` with the form. `Trigger` gets the keys, roles and `aria-*`. `Popup` opens in the top layer and flips when there is no room.

Every popup, headless or not, is placed by one engine (`@purpurabog/ui/core`): it flips to the other side when there is no room and keeps that side while open (no jump back mid-scroll), shifts along its trigger to stay on screen but never leaves it, hides while its trigger is scrolled out of view, measures against the visible part of the screen (an on-screen keyboard, a zoom) and lands on whole pixels. A list or menu also gets `--ui-available-height`, the room left on its side. `setAnchorPositioning(true)` from `@purpurabog/ui/core` opts in to CSS anchor positioning where the browser has it: the popup's place is then written as `anchor()` offsets, so the browser itself keeps it on its trigger while a box around it scrolls. It is off by default, because inside a modal's scrolling body or a submenu Chromium still puts it a few pixels from the engine's place.

## Style on `data-*` attributes

Each part shows its state as a `data-*` attribute: present when true, absent when not. Style it with Tailwind's `data-*:` variants or with `[data-open]` in CSS:


React (live React example):

```tsx
import { Dropdown } from '@purpurabog/ui/headless';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'mango', label: 'Mango' },
  { value: 'durian', label: 'Durian' },
];

export default function Example() {
  return (
    <div className="grid max-w-xs gap-2">
      <Dropdown.Root items={fruits} name="fruit">
        <Dropdown.Label className="text-xs text-ink-muted">Fruit</Dropdown.Label>
        <Dropdown.Trigger className="flex h-10 items-center border-b border-border-strong-1 bg-field-1 px-4 text-left text-sm text-ink hover:bg-field-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:outline-2 data-open:-outline-offset-2 data-open:outline-focus data-placeholder:text-ink-placeholder">
          <Dropdown.Value placeholder="Choose" />
        </Dropdown.Trigger>
        <Dropdown.Popup className="bg-layer-1 text-sm shadow-lg">
          {fruits.map((f) => (
            <Dropdown.Option
              key={f.value}
              value={f.value}
              className="flex h-10 cursor-pointer items-center px-4 text-ink-muted data-highlighted:bg-layer-hover-1 data-selected:font-semibold data-selected:text-ink"
            >
              {f.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Popup>
      </Dropdown.Root>
    </div>
  );
}
```

| Attribute | Means |
|---|---|
| `data-open` | The popup, menu or panel is open (on the trigger and the popup) |
| `data-highlighted` | The row the keyboard points at in a list |
| `data-selected`, `data-checked`, `data-mixed` | Selected, checked, partly selected (Select all) |
| `data-disabled`, `data-readonly`, `data-invalid` | Field states |
| `data-placeholder` | No value chosen yet |
| `data-expanded`, `data-closing` | Expanded; sliding out (for a closing animation) |
| `data-side` | The side a popup ended up on after flipping: `top`, `bottom`, `left`, `right` |

Each component's page lists the attributes of every part.

## Build your own theme switcher

There is no headless switcher. `useThemeMode` gives you what `<ui-theme-switcher>` keeps, so you can draw any control: it returns the mode (`light`, `dark` or `system`) and a function that shows, remembers and announces a new one. Every other switcher on the page, and in other tabs, follows. What it does is described in [Themes](https://parntengza.github.io/kanok-ui-docs/en/themes/#let-people-pick-light-dark-or-system).


React (live React example):

```tsx
import { useThemeMode } from '@purpurabog/ui/headless';

export default function ThemeToggle() {
  const [mode, setMode] = useThemeMode();
  return (
    <button
      type="button"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      Theme: {mode}
    </button>
  );
}
```

| Option | Values | Default |
|---|---|---|
| `value` | `light`, `dark`, `system`: the mode your app owns (e.g. from a profile) | none |
| `defaultValue` | the mode to start on when nothing is remembered | what `<html data-theme>` shows, else `light` |
| `lightTheme` | `white`, `g10` | `white` |
| `darkTheme` | `g90`, `g100` | `g100` |
| `storageKey` | any key; `''` = don't remember | `ui-theme` |

To save the choice to a user's profile, pass the profile's mode as `value`: the hook shows it and remembers it.


React (live React example):

```tsx
import { useState } from 'react';
import { useThemeMode, type ThemeMode } from '@purpurabog/ui/headless';

interface Profile {
  theme: ThemeMode;
}

function ThemeToggle({ profile, saveProfile }: { profile: Profile | null; saveProfile: (profile: Profile) => void }) {
  // with value, the hook shows and remembers the profile's mode
  const [mode] = useThemeMode({ value: profile?.theme });
  return (
    <button
      type="button"
      onClick={() => saveProfile({ theme: mode === 'dark' ? 'light' : 'dark' })}
      className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      Theme: {mode}
    </button>
  );
}

export default function Example() {
  // stands in for the profile on your server: nothing saved yet
  const [profile, setProfile] = useState<Profile | null>(null);
  return (
    <div className="grid justify-items-start gap-2">
      <ThemeToggle profile={profile} saveProfile={setProfile} />
      <p className="text-xs text-ink-muted">Saved in the profile: {profile?.theme ?? 'nothing yet'}</p>
    </div>
  );
}
```

On a server the hook returns `defaultValue` (or light). Put `themeScript()` in `<head>` so the first paint already has the remembered theme ([Themes](https://parntengza.github.io/kanok-ui-docs/en/themes/#paint-the-remembered-theme-on-the-first-frame)).

## Components

The pages in this section cover the form fields. The package has more parts than these pages yet: `Modal`, `Tabs`, `Accordion`, `ContentSwitcher`, `Menu`, `Popover`, `Tooltip`, `DefinitionTooltip`, `TreeView`, `StructuredList`, `SidePanel`, `Tearsheet`, `Notification`, `Toaster`, `Loading`, `Shell`, `Header`, `SideNav`, `DataTable`, `Pagination`, `PaginationNav`, `EditInPlace`, `Copy`, `CodeSnippet`, `TruncatedText`, `Tag`, `Card`, `ProductCard` and `ProgressIndicator`. Until they have a page, each part's props and `data-*` attributes are described in its types (your editor shows them on hover).
