# Using it with frameworks

The components are standard custom elements (`<ui-date-picker>`, `<ui-table>` …), so any framework that renders HTML can use them. React gets typed wrappers on top. This page covers what changes from one framework to the next: passing data, listening to events, routing, server rendering and language.

## Set up


HTML:

```html
<link rel="stylesheet" href="node_modules/@purpurabog/ui/dist/tokens.css" />
<script type="module">
  import '@purpurabog/ui/date-picker';
  import '@purpurabog/ui/table';
</script>
```

React:

```tsx
// npm i @purpurabog/ui lit @lit/react
import '@purpurabog/ui/tokens.css';
import { UiDatePicker, UiTable, UiTableBody, UiTableCell, UiTableHead, UiTableHeaderCell, UiTableHeaderRow, UiTableRow } from '@purpurabog/ui/react';
```

Vue:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('ui-') } } })],
});
```

Angular:

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@purpurabog/ui/date-picker';
import '@purpurabog/ui/table';

@Component({
  selector: 'app-contracts',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `…`,
})
export class ContractsComponent {}
```

- **HTML**: load the tokens once per page and import the elements you use ([Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/)).
- **React**: install the package with Lit and `@lit/react`, which the wrappers are built on (React 19 or later). Load the tokens once, then import the wrappers you use.
- **Vue**: tell Vue's compiler that `ui-*` tags are custom elements.
- **Angular**: add `CUSTOM_ELEMENTS_SCHEMA` to the component that uses the elements.

## Pass data and listen to events


HTML:

```html
<ui-date-picker id="start" label="Contract start" name="start"></ui-date-picker>
<ui-table id="contracts" is-sortable>
  <ui-table-head>
    <ui-table-header-row><ui-table-header-cell column="name">Name</ui-table-header-cell></ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Somchai</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>

<script type="module">
  import '@purpurabog/ui/date-picker';
  import '@purpurabog/ui/table';

  const picker = document.querySelector('#start');
  picker.isDateDisabled = (date) => date.getDay() === 0;
  picker.addEventListener('change', () => console.log(picker.value));

  const table = document.querySelector('#contracts');
  table.addEventListener('ui-table-sorted', (e) => console.log(e.detail.sortedHeader.column, e.detail.sortedHeader.sortDirection));
</script>
```

React:

```tsx
import type { UiDatePicker as DatePickerElement } from '@purpurabog/ui';

<UiDatePicker label="Contract start" name="start" isDateDisabled={(date) => date.getDay() === 0}
  onChange={(e) => setStart((e.target as DatePickerElement).value)} />
<UiTable>
  <UiTableHead>
    <UiTableHeaderRow>
      <UiTableHeaderCell column="name" sortDirection={direction}
        onUiTableHeaderCellSort={(e) => { e.preventDefault(); fetchPage('name', e.detail.sortDirection); }}>Name</UiTableHeaderCell>
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}><UiTableCell>{row.name}</UiTableCell></UiTableRow>)}
  </UiTableBody>
</UiTable>
```

Vue:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import '@purpurabog/ui/date-picker';
import '@purpurabog/ui/table';
import type { TableHeaderCellSortDetail, TableSortDirection, UiDatePicker } from '@purpurabog/ui';

const start = ref('');
const direction = ref<TableSortDirection>('none');
const rows = ref([{ id: '1', name: 'Somchai' }]);

function onStart(event: Event) {
  start.value = (event.target as UiDatePicker).value;
}

function onSort(event: CustomEvent<TableHeaderCellSortDetail>) {
  event.preventDefault(); // Vue renders the rows: sort them yourself
  direction.value = event.detail.sortDirection;
  rows.value = sortRows(rows.value, direction.value);
}
</script>

<template>
  <ui-date-picker label="Contract start" name="start" :value="start" @change="onStart" />
  <ui-table>
    <ui-table-head>
      <ui-table-header-row>
        <ui-table-header-cell column="name" :sort-direction="direction" @ui-table-header-cell-sort="onSort">Name</ui-table-header-cell>
      </ui-table-header-row>
    </ui-table-head>
    <ui-table-body>
      <ui-table-row v-for="row in rows" :key="row.id"><ui-table-cell>{{ row.name }}</ui-table-cell></ui-table-row>
    </ui-table-body>
  </ui-table>
</template>
```

Angular:

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@purpurabog/ui/date-picker';
import '@purpurabog/ui/table';
import type { TableHeaderCellSortDetail, TableSortDirection, UiDatePicker } from '@purpurabog/ui';

@Component({
  selector: 'app-contracts',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ui-date-picker label="Contract start" name="start" [value]="start" (change)="onStart($event)"></ui-date-picker>
    <ui-table>
      <ui-table-head>
        <ui-table-header-row>
          <ui-table-header-cell column="name" [sortDirection]="direction" (ui-table-header-cell-sort)="onSort($event)">Name</ui-table-header-cell>
        </ui-table-header-row>
      </ui-table-head>
      <ui-table-body>
        @for (row of rows; track row.id) {
          <ui-table-row><ui-table-cell>{{ row.name }}</ui-table-cell></ui-table-row>
        }
      </ui-table-body>
    </ui-table>
  `,
})
export class ContractsComponent {
  start = '';
  direction: TableSortDirection = 'none';
  rows = [{ id: '1', name: 'Somchai' }];

  onStart(event: Event) {
    this.start = (event.target as UiDatePicker).value;
  }

  onSort(event: Event) {
    event.preventDefault(); // Angular renders the rows: sort them yourself
    this.direction = (event as CustomEvent<TableHeaderCellSortDetail>).detail.sortDirection;
    this.rows = sortRows(this.rows, this.direction);
  }
}
```

- **HTML**: write attributes in the markup. Set arrays, objects and functions as properties from JavaScript, and listen with `addEventListener`.
- **React**: each wrapper renders the element with typed props. Props set the element's properties, so arrays, objects and functions pass straight through. Custom events become `onUi…` props with a typed `detail`.
- **Vue**: bind arrays and objects as properties with `.prop`; listen to custom events by their name.
- **Angular**: `[name]` binds a property, `[attr.name]` an attribute, and `(event-name)` listens to any event.
- **Rows a framework renders**: the table sorts by moving its rows, which the framework owns. Call `preventDefault()` on `ui-table-header-cell-sort`, sort the data and set the header's `sort-direction`, as above ([Data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/#sorting)).

### `input` and `change` in React

Fields fire native `input` and `change` events, with DOM meaning: `onInput` on every keystroke, `onChange` when the user commits the value (leaves the field, presses Enter, picks a date). This differs from React's own `<input onChange>`, which fires on every keystroke.

The prop follows the event the element really fires. The date picker fires `change`, so its prop is `onChange`; `UiDatePicker` has no `onUiChange`. Your editor's autocomplete lists the event props of each wrapper.

### Attribute or property?

| Value | How to pass it |
|---|---|
| Text, numbers (`label`, `max-count`) | Attribute or property |
| On / off (`required`, `disabled`) | Attribute present or absent, or a boolean property |
| Arrays, objects, functions (`rows`, `headers`, `isDateDisabled`) | Property only |

Attributes use dashes (`invalid-text`), properties camelCase (`invalidText`). The [API reference](https://cdn.jsdelivr.net/npm/@purpurabog/ui@latest/docs/api.md) lists both for every element.

## Route links with your SPA router

Links that a component draws itself sit in its shadow DOM, where client-side routers can't see them. So a plain click on one first fires a cancelable `ui-navigate` event with `{ href }`. Cancel it and let your router change the page. One listener on `document` covers the whole app.

These elements fire it: `ui-header-name`, `ui-header-menu-item`, `ui-side-nav-link`, `ui-side-nav-menu-item`, `ui-switcher-item`, `ui-link`, `ui-breadcrumb-item`, and `ui-button`, `ui-icon-button`, `ui-tile`, `ui-card` and `ui-tree-node` when they have an `href`.


React:

```tsx
// React Router
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import type { NavigateDetail } from '@purpurabog/ui/react';

export function useUiNavigate() {
  const navigate = useNavigate();
  useEffect(() => {
    const onNavigate = (event: CustomEvent<NavigateDetail>) => {
      event.preventDefault();
      navigate(event.detail.href);
    };
    document.addEventListener('ui-navigate', onNavigate);
    return () => document.removeEventListener('ui-navigate', onNavigate);
  }, [navigate]);
}
```

Vue:

```ts
// Vue Router
import { router } from './router';

document.addEventListener('ui-navigate', (event) => {
  event.preventDefault();
  router.push(event.detail.href);
});
```

Angular:

```ts
// Angular Router
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import type { NavigateDetail } from '@purpurabog/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  private readonly router = inject(Router);

  @HostListener('document:ui-navigate', ['$event'])
  onNavigate(event: CustomEvent<NavigateDetail>) {
    event.preventDefault();
    this.router.navigateByUrl(event.detail.href);
  }
}
```

In React, call `useUiNavigate()` once in your root layout. To handle one link or one menu instead, the wrappers also have an `onUiNavigate` prop: on each link wrapper, and on `UiHeader`, `UiSideNav`, `UiHeaderMenu` and `UiSideNavMenu`, which the event bubbles through.

### What the router doesn't get

- Ctrl, ⌘, Shift or Alt clicks, middle clicks, `target="_blank"`, `download` and links to other sites don't fire `ui-navigate`. They act as normal links, so opening in a new tab still works.
- If nobody cancels the event, the link loads the page as usual. Adding the listener later breaks nothing.
- Mark the current page yourself, for example `current` on `ui-side-nav-link`. A `ui-header-menu` highlights itself when a link inside it is `current`.

## Render on the server

Every element renders on the server with [Lit SSR](https://lit.dev/docs/ssr/overview/) (`@lit-labs/ssr`, or through `@lit-labs/nextjs`, `@lit-labs/eleventy-plugin-lit` or Astro's `@astrojs/lit`). The server HTML is the first paint. When the JavaScript loads, each element renders its shadow root again instead of hydrating, so there are no hydration mismatches.

```ts
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import { html } from 'lit';
import '@purpurabog/ui/date-picker';

const field = await collectResult(render(html`<ui-date-picker lang="th" label="วันที่เริ่มสัญญา" name="start"></ui-date-picker>`));
```

Import `@lit-labs/ssr` before the elements; it installs the DOM shim they need.

The server can't see some things, so the first paint is incomplete until the JavaScript runs:

- Children in light DOM: a `<ui-select>` has no options yet, and `ui-tabs` shows every panel.
- Properties: `rows`, `headers`, `files`.
- Ancestors, including `<html lang>`: built-in text is English unless the element has its own `lang`. Put `lang="th"` on the element for a Thai first paint.
- State attributes such as `data-show-error` and `data-open`, which are set in the browser.

To paint the user's saved theme without a flash of the light theme, put the theme script in `<head>`, before your CSS:

```ts
import { themeScript } from '@purpurabog/ui/core';

const head = `<script>${themeScript({ storageKey: 'ui-theme' })}</script>`;
```

`storageKey` must match the `storage-key` of your `<ui-theme-switcher>` (default `ui-theme`). If the switcher sets `light-theme` or `dark-theme`, pass the same values as `lightTheme` and `darkTheme` (default `white` and `g100`).

## Run inside a shadow root (micro app)

When your app is embedded in someone else's page, mount it in the shadow root of one custom element and keep all its CSS inside. Styles then can't leak in or out. The React + Tailwind components support this:

```tsx
import css from './app.css?inline'; // Vite: the built CSS as text
import { createRoot } from 'react-dom/client';
import { App } from './App';

class ContractsApp extends HTMLElement {
  connectedCallback() {
    const shadow = this.shadowRoot ?? this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    shadow.adoptedStyleSheets = [sheet];
    const mount = document.createElement('div');
    shadow.append(mount);
    createRoot(mount).render(<App />);
  }
}
customElements.define('contracts-app', ContractsApp);
```

`app.css` holds Tailwind, the tokens and the theme:

```css
@import 'tailwindcss';
@import './components/ui/primitives/tokens.css';
@import './components/ui/react-tw/theme.css';
```

- `tokens.css` declares every token on both `:root` and `:host`, so it works inside a shadow root. The same file works for the web components.
- Switch the theme with `data-theme` on your host element (`<contracts-app data-theme="g100">`). The theme switcher only changes `<html>`.
- For the [Kanok design](https://parntengza.github.io/kanok-ui-docs/en/kanok/), import `./components/ui/primitives/kanok.css` after the tokens and put `data-design="kanok"` on the host element too.
- Declare fonts (`@font-face`) at document level: Chrome doesn't load `@font-face` inside a shadow root.

## Type your event listeners

Every element has a `Ui…EventMap`, and `addEventListener` knows the `detail` of each event by name. `document.querySelector('ui-table')` returns the element's own type:

```ts
const table = document.querySelector('ui-table')!;
table.addEventListener('ui-table-row-selected', (e) => console.log(e.detail.selectedRow, e.detail.selectedRows));
```

The detail types are exported when you want to name them:

```ts
import type { MenuSelectDetail, NavigateDetail, OpenDetail, TableSortedDetail } from '@purpurabog/ui';
```

`ui-navigate` is also declared on `document`, so the router listeners above are typed without casts.

Listen on the element itself rather than a container: `ui-*` events bubble and cross shadow roots, so a container hears `ui-toggle` from every component inside it.

## Thai and English text

Built-in text (button labels, required messages, counters, month names) follows the closest `lang`: the element's own, then the closest ancestor's, then `<html>`, then the browser's language. Thai and English are built in; any other language falls back to English.

```html
<html lang="th">
  …
  <section lang="en">
    <ui-date-picker label="Start date" name="start"></ui-date-picker>
  </section>
</html>
```

Changing `lang` on `<html>` or on the element itself re-renders it with the new language.

To change a few messages, register a copy of a built-in translation with your changes:

```ts
import { getTranslation, registerTranslation } from '@purpurabog/ui';

const th = getTranslation('th');
registerTranslation({ ...th, datePicker: { ...th.datePicker, required: 'กรุณาเลือกวันที่เริ่มสัญญา' } });
```

Add a language the same way, with a new `$code` (for example `$code: 'ja'`) and every message translated. The English messages in `src/core/translations/en.ts` show every key.

A text attribute on the element always wins over the translation, for example `required-text`, `too-long-text` or `close-label`. The React wrappers export `registerTranslation` and `getTranslation` too.

For forms, validation and the date picker's Buddhist-era display, see [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).
