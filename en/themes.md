# Themes and layers

Every color comes from Carbon's four themes, generated from `@carbon/themes` into `tokens.css`. You pick a theme with one attribute, `data-theme`, on the whole page or on any part of it. Inside a theme, `<ui-layer>` moves fields and menus one step along Carbon's layering model so they stay visible on the surface below them.

| Theme | Look |
|---|---|
| `white` | Light, white background (the default) |
| `g10` | Light, gray 10 background |
| `g90` | Dark, gray 90 background |
| `g100` | Dark, gray 100 background |

`data-theme` and the tokens work the same for the web components, the React wrappers and React + Tailwind, whose classes read the same tokens. Headless parts have no colors of their own.

## Switch the theme of the page

Put `data-theme` on `<html>`. Without it the page is `white`.

```html
<html data-theme="g100">
```

The dark themes (`g90`, `g100`) also set `color-scheme: dark`, so scrollbars and the browser's own controls turn dark too.

## Make a zone dark

`data-theme` works on any element: everything inside it uses that theme, the rest of the page doesn't. Zones can nest.

A zone only changes the tokens. To paint the zone itself, give it the theme's background and text color:


HTML:

```html
<div data-theme="g100" style="padding: 16px; background: var(--ui-canvas); color: var(--ui-ink)">
  <ui-text-input label="Name (field-01 of g100)"></ui-text-input>
  <ui-layer level="1" with-background style="padding: 16px; margin-top: 16px">
    <ui-text-input label="On the next layer (field-02)"></ui-text-input>
  </ui-layer>
</div>
```

React:

```tsx
<div data-theme="g100" style={{ padding: 16, background: 'var(--ui-canvas)', color: 'var(--ui-ink)' }}>
  <UiTextInput label="Name (field-01 of g100)" />
  <UiLayer level={1} withBackground style={{ padding: 16, marginTop: 16 }}>
    <UiTextInput label="On the next layer (field-02)" />
  </UiLayer>
</div>
```

React + Tailwind:

```tsx
<div data-theme="g100" className="bg-canvas p-4 text-ink">
  <TextInput label="Name (field-01 of g100)" />
  <Layer withBackground className="mt-4 p-4">
    <TextInput label="On the next layer (field-02)" />
  </Layer>
</div>
```

The field inside the layer uses the next layer's color, so it still stands out from the surface it sits on.

## Follow the system setting

`data-theme="auto"` shows `white`, or `g100` when the system asks for dark (`prefers-color-scheme: dark`). It's opt-in: Carbon itself never switches on its own.

```html
<html data-theme="auto">
```

`auto` works on `<html>` or on a zone: an `auto` zone inside another theme still shows `white` or `g100` by the system setting.

## Let people pick light, dark or system

`<ui-theme-switcher>` is an icon content switcher with three choices: light, dark and system. It has no Carbon counterpart. The one under Settings at the top right of this site is this element.


HTML:

```html
<script type="module">import '@purpurabog/ui/theme-switcher';</script>

<ui-theme-switcher></ui-theme-switcher>
```

React:

```tsx
import { UiThemeSwitcher } from '@purpurabog/ui/react';

<UiThemeSwitcher />
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-theme-switcher
import { ThemeSwitcher } from '@/components/ui/react-tw/theme-switcher';

<ThemeSwitcher />
```

To draw your own control in React with no styles, use the `useThemeMode` hook: see [Headless](https://parntengza.github.io/kanok-ui-docs/en/headless/#build-your-own-theme-switcher).

What it does:

- **Shows the choice on `<html data-theme>`.** Light becomes `light-theme` (`white` by default), dark becomes `dark-theme` (`g100` by default), and system follows the OS, also while it changes.
- **Remembers it** in `localStorage` under `storage-key` (`ui-theme` by default; `storage-key=""` doesn't remember).
- **Starts on** the remembered choice, else `value`, else what `<html data-theme>` already shows, else light.
- **Keeps every switcher in step**: all switchers on the page (Lit and React) and in other tabs follow each other.

| Attribute | Values | Default |
|---|---|---|
| `value` | `light`, `dark`, `system` | the remembered choice |
| `light-theme` | `white`, `g10` | `white` |
| `dark-theme` | `g90`, `g100` | `g100` |
| `storage-key` | any key; `""` = don't remember | `ui-theme` |
| `size` | `sm`, `md`, `lg` | `md` |
| `low-contrast` | boolean | off |
| `tooltip-placement` | where the icon tooltips show | `top` |
| `label` | names the group | "Theme", translated |

In React and React + Tailwind the props are camelCase (`lightTheme`, `darkTheme`, `storageKey`, `lowContrast`, `tooltipPlacement`), and the Tailwind switcher takes `aria-label` instead of `label`.

On the web component, its parts are `switcher` (the content switcher) and `item` (each choice).

### Save the choice to a user's profile

Picking a choice fires `ui-theme-change` with `{ mode, theme }` (`onUiThemeChange` on the React wrapper, `onChange` on the React + Tailwind switcher). Store the mode on your server, and set `value` when the profile loads: the switcher shows it and remembers it.


HTML:

```js
const switcher = document.querySelector('ui-theme-switcher');

switcher.addEventListener('ui-theme-change', (event) => {
  const { mode, theme } = event.detail; // e.g. 'dark', 'g100'
  saveProfile({ theme: mode }); // your own function
});

// when the profile arrives
switcher.value = profile.theme;
```

React:

```tsx
// profile comes from your server; saveProfile is your own function
<UiThemeSwitcher value={profile.theme} onUiThemeChange={(e) => saveProfile({ theme: e.detail.mode })} />
```

React + Tailwind:

```tsx
// with value, the switcher shows what you pass: saveProfile also updates profile.theme
<ThemeSwitcher value={profile.theme} onChange={({ mode }) => saveProfile({ theme: mode })} />
```

### Paint the remembered theme on the first frame

The switcher only runs once its script has loaded, so on a reload the page would first paint the default theme and then switch. `themeScript()` returns a small script for `<head>` that sets the remembered theme before anything is painted. Render it on the server, or write it into `index.html` in a build step:

```js
import { themeScript } from '@purpurabog/ui/core';

const head = `<script>${themeScript({ storageKey: 'ui-theme', lightTheme: 'white', darkTheme: 'g100' })}</script>`;
```

Give it the same `storageKey`, `lightTheme` and `darkTheme` as your switcher, whichever of the four it is. When nothing is remembered it does nothing, so your own `<html data-theme>` stays the default. On the server `useThemeMode`, and so the React + Tailwind switcher, returns `defaultValue` (or `light`), so add `themeScript()` to `<head>` there too.

## Put fields on a tile: `<ui-layer>`

Carbon colors surfaces in layers: a field on a gray tile must not be the same gray as the tile. `<ui-layer>` is Carbon's Layer. Inside it, components use the theme's next layer set:

- field, tile and menu backgrounds, and selected rows
- borders and dividers
- hover and active fills

| `level` | Uses |
|---|---|
| `0` | The page's own set, as outside any layer |
| `1` | The second set |
| `2` | The third set (the deepest) |

Without `level`, a layer works it out like Carbon's `cds-layer`: a layer outside any other is level `0`, and a nested one is its parent's level + 1, up to `2`. Set `level` to choose one yourself. `with-background` paints the layer with Carbon's layer background, the color its content sits on.


HTML:

```html
<ui-layer level="1" with-background>
  <ui-text-input label="Field on a tile"></ui-text-input>
  <ui-layer with-background>
    <ui-text-input label="One level deeper"></ui-text-input>
  </ui-layer>
</ui-layer>
```

React:

```tsx
import { UiLayer, UiTextInput } from '@purpurabog/ui/react';

<UiLayer level={1} withBackground>
  <UiTextInput label="Field on a tile" />
  <UiLayer withBackground>
    <UiTextInput label="One level deeper" />
  </UiLayer>
</UiLayer>
```

React + Tailwind:

```tsx
import { Layer } from '@/components/ui/react-tw/layer';
import { TextInput } from '@/components/ui/react-tw/text-input';

<Layer withBackground className="p-4">
  <TextInput label="Field on a tile" />
  <Layer withBackground className="p-4">
    <TextInput label="One level deeper" />
  </Layer>
</Layer>
```

Carbon React's `<Layer>` starts at level 1, not 0. The React + Tailwind `Layer` follows Carbon React, so it needs no `level` here. The React wrapper renders `<ui-layer>` and starts at 0 like the element: write `level="1"` (`level={1}`) for the same result.

## Use themes inside a shadow root (micro apps)

This section is for the web components in a Lit app; for a React + Tailwind app in a shadow root, see [Frameworks](https://parntengza.github.io/kanok-ui-docs/en/frameworks/#run-inside-a-shadow-root-micro-app).

Tokens are CSS custom properties, which inherit through shadow roots: a theme on `<html>` reaches every component, wherever it is.

The `[data-theme]` rules, though, live in `tokens.css` at document level. If your app renders inside a shadow root of its own and puts `data-theme` on an element in there, load `tokens.css` into that shadow root too. The file also names `:host`, so `data-theme` on your app's host element works like it does on `<html>`:

```ts
import { LitElement, html, unsafeCSS } from 'lit';
import tokens from '@purpurabog/ui/tokens.css?inline'; // Vite: the CSS as text
import '@purpurabog/ui/text-input';

class ContractsApp extends LitElement {
  static styles = unsafeCSS(tokens);

  render() {
    return html`<ui-text-input label="Contract name"></ui-text-input>`;
  }
}
customElements.define('contracts-app', ContractsApp);
```

```html
<contracts-app data-theme="g90"></contracts-app>
```

The theme switcher only changes `<html>`. In a micro app, set `data-theme` on your own host instead. `<ui-layer>` needs nothing extra: its rules are part of the element, so it works in any shadow root.

## What next

- [Customize the look](https://parntengza.github.io/kanok-ui-docs/en/customizing/): tokens, `::part()`, states and slots.
