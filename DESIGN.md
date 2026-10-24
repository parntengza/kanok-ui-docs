---
version: alpha
name: kanok-ui
description: "Carbon Design System (IBM's product design language) as components: square corners, IBM Plex Sans, layers of grey surfaces instead of shadows, one blue accent, four themes (white, g10, g90, g100) and productive motion. Package @purpurabog/ui 1.4.1; every value below is a --ui-* CSS custom property in tokens.css."
colors:
  primary: "#0f62fe"
  on-primary: "#ffffff"
  canvas: "#ffffff"
  ink: "#161616"
  ink-muted: "#525252"
  ink-helper: "#6f6f6f"
  ink-placeholder: "#6f6f6f"
  layer-1: "#f4f4f4"
  layer-2: "#ffffff"
  layer-3: "#f4f4f4"
  field-1: "#f4f4f4"
  field-2: "#ffffff"
  border-subtle-1: "#e0e0e0"
  border-strong-1: "#8d8d8d"
  interactive: "#0f62fe"
  focus: "#0f62fe"
  link: "#0f62fe"
  link-hover: "#0043ce"
  secondary: "#393939"
  button-danger: "#da1e28"
  success: "#24a148"
  warning: "#f1c21b"
  error: "#da1e28"
  info: "#0043ce"
  highlight: "#d0e2ff"
  overlay: "rgba(0, 0, 0, 0.6)"
  skeleton-background: "#e8e8e8"
  layer-accent-1: "#e0e0e0"
  layer-selected-1: "#e0e0e0"
  field-hover-1: "#e8e8e8"
  border-interactive: "#0f62fe"
  icon-primary: "#161616"
  icon-secondary: "#525252"
  toggle-off: "#8d8d8d"
  button-disabled: "#c6c6c6"
  border-disabled: "#c6c6c6"
  inverse-canvas: "#393939"
  inverse-ink: "#ffffff"
typography:
  heading-07:
    fontFamily: "IBM Plex Sans"
    fontSize: "54px"
    fontWeight: 300
    lineHeight: "1.19"
  heading-06:
    fontFamily: "IBM Plex Sans"
    fontSize: "42px"
    fontWeight: 300
    lineHeight: "1.199"
  heading-05:
    fontFamily: "IBM Plex Sans"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "1.25"
  heading-04:
    fontFamily: "IBM Plex Sans"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "1.28572"
  heading-03:
    fontFamily: "IBM Plex Sans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.4"
  heading-02:
    fontFamily: "IBM Plex Sans"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  heading-01:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.42857"
  body-lg:
    fontFamily: "IBM Plex Sans"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0.16px"
  body:
    fontFamily: "IBM Plex Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0.16px"
  body-01:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.42857"
    letterSpacing: "0.16px"
  body-sm:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.29"
    letterSpacing: "0.16px"
  body-emphasis:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.29"
    letterSpacing: "0.16px"
  caption:
    fontFamily: "IBM Plex Sans"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.33"
    letterSpacing: "0.32px"
  button:
    fontFamily: "IBM Plex Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.29"
  code:
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0.32px"
  code-lg:
    fontFamily: "IBM Plex Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  pill: "9999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 63px 0 15px"
    typography: "{typography.button}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: "48px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    rounded: "{rounded.none}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    rounded: "{rounded.none}"
  button-danger:
    backgroundColor: "{colors.button-danger}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  text-input:
    backgroundColor: "{colors.field-1}"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.border-strong-1}"
    height: "40px"
    rounded: "{rounded.none}"
    focus: "2px solid {colors.focus} inset"
  text-input-hover:
    backgroundColor: "{colors.field-hover-1}"
  text-input-invalid:
    outline: "2px solid {colors.error} inset"
    helperColor: "{colors.error}"
  text-input-disabled:
    textColor: "{colors.button-disabled}"
    borderBottom: "1px solid transparent"
  dropdown:
    backgroundColor: "{colors.field-1}"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.border-strong-1}"
    height: "40px"
    listBackground: "{colors.layer-1}"
    rowHeight: "40px"
  checkbox:
    size: "16px"
    border: "1px solid {colors.ink}"
    checkedBackground: "{colors.ink}"
    rounded: "{rounded.xs}"
  toggle:
    width: "48px"
    height: "24px"
    offBackground: "{colors.toggle-off}"
    onBackground: "{colors.success}"
    rounded: "{rounded.pill}"
  tag:
    height: "24px"
    padding: "0 8px"
    rounded: "{rounded.pill}"
    typography: "{typography.caption}"
  tile:
    backgroundColor: "{colors.layer-1}"
    padding: "{spacing.md}"
    rounded: "{rounded.none}"
  table-header:
    backgroundColor: "{colors.layer-accent-1}"
    textColor: "{colors.ink}"
    height: "48px"
    typography: "{typography.heading-01}"
  table-row:
    backgroundColor: "{colors.layer-1}"
    textColor: "{colors.ink-muted}"
    height: "48px"
    padding: "0 {spacing.md}"
    borderBottom: "1px solid {colors.border-subtle-1}"
  modal:
    backgroundColor: "{colors.layer-1}"
    width: "672px"
    backdrop: "{colors.overlay}"
    rounded: "{rounded.none}"
  tooltip:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    padding: "{spacing.md}"
    typography: "{typography.body-01}"
    rounded: "{rounded.xs}"
---

# kanok-ui design

This file describes the design of the kanok-ui components (npm `@purpurabog/ui` 1.4.1) for people and AI tools building screens with them. It is generated from `tokens.css`, so the values match the package. The components already apply all of it: build screens from the components and the `--ui-*` tokens, and the result follows the system. Docs: https://parntengza.github.io/kanok-ui-docs/ (index for AI tools: https://parntengza.github.io/kanok-ui-docs/llms.txt).

## Overview

kanok-ui follows the Carbon Design System (IBM's open-source product design language) for product screens: forms, tables, overlays and the app shell, in Thai and English. Surfaces are flat and square. Depth comes from layers of grey, not shadows. One blue carries the primary action, links and focus. Type is IBM Plex Sans (with IBM Plex Sans Thai) in Carbon's productive scale. Motion is short and functional.

## Colors

Colors come from Carbon's four themes, set with `data-theme="white|g10|g90|g100|auto"` on `<html>` or on any element (a zone). Always use the token, never the hex value, so a zone or a dark theme keeps working.

| Token | white | g10 | g90 | g100 | Use |
|---|---|---|---|---|---|
| `--ui-primary` | `#0f62fe` | `#0f62fe` | `#0f62fe` | `#0f62fe` | primary button, the one accent |
| `--ui-on-primary` | `#ffffff` | `#ffffff` | `#ffffff` | `#ffffff` | text and icons on primary / coloured fills |
| `--ui-canvas` | `#ffffff` | `#f4f4f4` | `#262626` | `#161616` | page background |
| `--ui-ink` | `#161616` | `#161616` | `#f4f4f4` | `#f4f4f4` | primary text |
| `--ui-ink-muted` | `#525252` | `#525252` | `#c6c6c6` | `#c6c6c6` | secondary text, labels |
| `--ui-ink-helper` | `#6f6f6f` | `#6f6f6f` | `#c6c6c6` | `#a8a8a8` | helper text |
| `--ui-ink-placeholder` | `#6f6f6f` | `#6f6f6f` | `#c6c6c6` | `#a8a8a8` | placeholders |
| `--ui-layer-1` | `#f4f4f4` | `#ffffff` | `#393939` | `#262626` | surface on the canvas (tiles, menus); fields on it use field-2 |
| `--ui-layer-2` | `#ffffff` | `#f4f4f4` | `#525252` | `#393939` | surface on layer-1 |
| `--ui-layer-3` | `#f4f4f4` | `#ffffff` | `#6f6f6f` | `#525252` | surface on layer-2 |
| `--ui-field-1` | `#f4f4f4` | `#ffffff` | `#393939` | `#262626` | field background on the canvas |
| `--ui-field-2` | `#ffffff` | `#f4f4f4` | `#525252` | `#393939` | field background on layer-1 |
| `--ui-border-subtle-1` | `#e0e0e0` | `#c6c6c6` | `#525252` | `#393939` | dividers on layer-1 |
| `--ui-border-strong-1` | `#8d8d8d` | `#8d8d8d` | `#8d8d8d` | `#6f6f6f` | field bottom border |
| `--ui-interactive` | `#0f62fe` | `#0f62fe` | `#4589ff` | `#4589ff` | selected / active indicators |
| `--ui-focus` | `#0f62fe` | `#0f62fe` | `#ffffff` | `#ffffff` | 2px focus outline |
| `--ui-link` | `#0f62fe` | `#0f62fe` | `#78a9ff` | `#78a9ff` | links |
| `--ui-link-hover` | `#0043ce` | `#0043ce` | `#a6c8ff` | `#a6c8ff` | links on hover |
| `--ui-secondary` | `#393939` | `#393939` | `#6f6f6f` | `#6f6f6f` | secondary button |
| `--ui-button-danger` | `#da1e28` | `#da1e28` | `#da1e28` | `#da1e28` | danger button |
| `--ui-success` | `#24a148` | `#24a148` | `#42be65` | `#42be65` | success status |
| `--ui-warning` | `#f1c21b` | `#f1c21b` | `#f1c21b` | `#f1c21b` | warning status |
| `--ui-error` | `#da1e28` | `#da1e28` | `#ff8389` | `#fa4d56` | error status and invalid fields |
| `--ui-info` | `#0043ce` | `#0043ce` | `#4589ff` | `#4589ff` | informational status |
| `--ui-highlight` | `#d0e2ff` | `#d0e2ff` | `#002d9c` | `#001d6c` | selected text background |
| `--ui-overlay` | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.6)` | behind modals and side panels |
| `--ui-skeleton-background` | `#e8e8e8` | `#e8e8e8` | `#333333` | `#292929` | loading skeletons |
| `--ui-layer-accent-1` | `#e0e0e0` | `#e0e0e0` | `#525252` | `#393939` | table headers, contained tab strips, chosen rows |
| `--ui-layer-selected-1` | `#e0e0e0` | `#e0e0e0` | `#525252` | `#393939` | a selected item or row on layer-1 |
| `--ui-field-hover-1` | `#e8e8e8` | `#e8e8e8` | `#474747` | `#333333` | a field under the pointer |
| `--ui-border-interactive` | `#0f62fe` | `#0f62fe` | `#4589ff` | `#4589ff` | the selected tab underline, an active border |
| `--ui-icon-primary` | `#161616` | `#161616` | `#f4f4f4` | `#f4f4f4` | icons |
| `--ui-icon-secondary` | `#525252` | `#525252` | `#c6c6c6` | `#c6c6c6` | quieter icons (chevrons, helpers) |
| `--ui-toggle-off` | `#8d8d8d` | `#8d8d8d` | `#8d8d8d` | `#6f6f6f` | a toggle track when off |
| `--ui-button-disabled` | `#c6c6c6` | `#c6c6c6` | `rgba(141, 141, 141, 0.3)` | `rgba(141, 141, 141, 0.3)` | a disabled button |
| `--ui-border-disabled` | `#c6c6c6` | `#c6c6c6` | `rgba(141, 141, 141, 0.5)` | `rgba(141, 141, 141, 0.5)` | a disabled field border |
| `--ui-inverse-canvas` | `#393939` | `#393939` | `#f4f4f4` | `#f4f4f4` | tooltips and high-contrast notifications |
| `--ui-inverse-ink` | `#ffffff` | `#ffffff` | `#161616` | `#161616` | text on inverse surfaces |

Every other color (tags, status, notifications, icons, hover and active states) is in `tokens.css` with its Carbon name.

## Typography

`--ui-font-family` is IBM Plex Sans, then IBM Plex Sans Thai, Helvetica Neue and Arial; code uses IBM Plex Mono. Load the fonts yourself (the package doesn't ship font files). Each style is a `font` shorthand token; pair it with its tracking token.

| Token | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| `--ui-font-heading-07` | 54px | 300 | 1.19 | 0 |
| `--ui-font-heading-06` | 42px | 300 | 1.199 | 0 |
| `--ui-font-heading-05` | 32px | 400 | 1.25 | 0 |
| `--ui-font-heading-04` | 28px | 400 | 1.28572 | 0 |
| `--ui-font-heading-03` | 20px | 400 | 1.4 | 0 |
| `--ui-font-heading-02` | 16px | 600 | 1.5 | 0 |
| `--ui-font-heading-01` | 14px | 600 | 1.42857 | 0 |
| `--ui-font-body-lg` | 18px | 400 | 1.5 | 0.16px |
| `--ui-font-body` | 16px | 400 | 1.5 | 0.16px |
| `--ui-font-body-01` | 14px | 400 | 1.42857 | 0.16px |
| `--ui-font-body-sm` | 14px | 400 | 1.29 | 0.16px |
| `--ui-font-body-emphasis` | 14px | 600 | 1.29 | 0.16px |
| `--ui-font-caption` | 12px | 400 | 1.33 | 0.32px |
| `--ui-font-button` | 14px | 400 | 1.29 | 0 |
| `--ui-font-code` | 12px | 400 | 16px | 0.32px |
| `--ui-font-code-lg` | 14px | 400 | 20px | 0 |

Headings in pages: use `<ui-heading>` inside `<ui-section>`; nesting picks the level, h1 (heading-06, 42px light) down to h6 (heading-01, 14px).

## Layout

- **Spacing** is a 4px grid: `--ui-space-xxs` 4px, `--ui-space-xs` 8px, `--ui-space-sm` 12px, `--ui-space-md` 16px, `--ui-space-lg` 24px, `--ui-space-xl` 32px, `--ui-space-xxl` 48px, `--ui-space-section` 96px.
- **Grid**: Carbon's 2x grid, `<ui-grid>` / `<ui-column>` (React + Tailwind `Grid` / `Column`): 4 columns from 0, 8 from 672px (md), 16 from 1056px (lg), 1312px (xlg) and 1584px (max), 32px gutters.
- **Sizes**: fields are 40px (md) by default, 32px (sm) or 48px (lg); buttons are 48px (lg) by default. `--ui-field-height-sm|md|lg` resizes every field in a zone.

## Elevation & Depth

No drop shadows on surfaces. Put a surface on a surface with `<ui-layer>` (React + Tailwind `Layer`): each level moves backgrounds, fields and borders one step (`layer-1` → `layer-2` → `layer-3`), so a field on a tile is always visible. Only floating things (menus, popovers, tooltips) cast a small shadow; modals, tearsheets and side panels dim the page behind them.

## Shapes

Corners are square: `--ui-radius-none` 0px, `--ui-radius-xs` 2px, `--ui-radius-sm` 4px, `--ui-radius-pill` 9999px. Only tags (16px), radio buttons, avatars and toggles are round. Don't round buttons, fields, tiles or modals.

## Motion

Carbon productive motion: `--ui-duration-fast` 70ms, `--ui-duration-moderate` 110ms, `--ui-duration-moderate-01` 150ms, `--ui-duration-moderate-02` 240ms; `--ui-easing` `cubic-bezier(0.2, 0, 0.38, 0.9)`, `--ui-easing-entrance` `cubic-bezier(0, 0, 0.38, 0.9)`, `--ui-easing-exit` `cubic-bezier(0.2, 0, 1, 0.9)`. Each component's animation copies its own Carbon CSS. Under `prefers-reduced-motion` every duration is 0ms, so nothing moves.

## Components

Use a component instead of building the control: every one already follows the rules below in all four themes and on every layer. Lit elements are `<ui-…>`; React wrappers are `UiButton` … from `@purpurabog/ui/react`; React + Tailwind copies are `Button` … from `npx shadcn@4 add @kanok-ui/tw-button`. Each component's page in the docs lists its attributes, events, slots and parts.

### Buttons

`<ui-button kind="primary|secondary|tertiary|ghost|danger|danger-tertiary|danger-ghost">`, sizes sm 32px, md 40px, lg 48px (default), xl 64px, 2xl 80px.

- One primary action per area. Secondary sits beside it; tertiary and ghost carry the rest. Danger only for destructive actions, and confirm them.
- The label sits at the start, an icon at the end. Icon-only buttons (`<ui-icon-button>`) need a `label`: it becomes the accessible name and the tooltip.
- In a footer or a form end, group buttons with `<ui-button-set>`, the secondary first and the primary last (Carbon order); `stacked` puts them in a column.
- A disabled button that should still explain itself uses `disabled-focusable`: it keeps its tooltip reachable by keyboard.

### Fields

Text input, text area, number input, select, dropdown, combobox, multi-select, date picker, time picker, search, file uploader.

- The label is above (`hide-label` keeps it for screen readers), helper text below. Sizes sm 32px, md 40px (default), lg 48px; `fluid` puts the label inside a 64px box for dense forms (`<ui-fluid-form>`).
- States: hover tints the field (`field-hover`); focus draws a 2px `--ui-focus` outline inside it; `invalid` + `invalid-text` draw a 2px error outline, an error icon and the message (it replaces the helper text); `warn` + `warn-text` show a warning icon and message without blocking; `disabled` greys it out; `readonly` keeps the value focusable and submitted but not editable.
- Show errors after the user leaves the field or submits, not on the first keystroke. Required fields say so in the label or helper text.
- `<ui-select>` is the native `<select>` (best for plain forms and touch screens); `<ui-dropdown>` is a styled list box with the same keys as Carbon; `<ui-combobox>` filters as you type; `<ui-multi-select>` picks several (with `filterable` to search).
- Thai: set `lang="th"` on the page or the field; dates then use the Buddhist era and the counters count Thai words whole.

### Selection controls

Checkbox (16px box), radio, toggle (48 × 24px, `size="sm"` 32 × 16px), selectable and radio tiles, content switcher. Group checkboxes and radios with `<ui-checkbox-group>` / `<ui-radio-group>` (a legend and one message for the group). A toggle changes a setting at once; a checkbox is part of a form that is submitted.

### Lists, menus and tags

- `<ui-menu>` / `<ui-menu-button>` / `<ui-overflow-menu>` for actions; `<ui-contained-list>` and `<ui-structured-list>` for content; `<ui-tree-view>` for hierarchies.
- Tags are 24px (sm 18px, lg 32px) pills in twelve colour types; `dismissible`, `selectable` and `operational` tags are interactive. Use colour for category, not for status alone.

### Tables

`<ui-table>` with `<ui-table-head>`, `<ui-table-header-row>`, `<ui-table-header-cell>`, `<ui-table-body>`, `<ui-table-row>`, `<ui-table-cell>` (Carbon web components' `cds-table`). Rows are 48px (`size` xs 24, sm 32, md 40, lg 48, xl 64px); headers sit on `layer-accent`; rows are divided by a 1px `border-subtle` rule; `use-zebra-styles` stripes them.

- Put the title and description in `<ui-table-header-title>` / `<ui-table-header-description>`, the search and actions in `<ui-table-toolbar>`, and a `<ui-table-batch-actions>` bar that replaces the toolbar while rows are chosen.
- Sort with `is-sortable` (numbers sort as numbers; `sort-value` on a cell gives a date or an amount its plain value); choose rows with `is-selectable` or `radio`; open details with `expandable` and `<ui-table-expanded-row>`.
- Beyond Carbon: `page-size` pages the rows, `<ui-table-column-settings>` hides columns, `pinned` keeps the first or last column in view, `resizable` resizes columns, `editable` on a header makes a grid of editable cells, `<ui-table-csv-export>` downloads CSV, `loading` shows skeleton rows, the `empty` / `no-results` slots say why nothing shows, `sticky-header` keeps the header in view.
- Every row and cell is in the page; past about 2,000 rows, page the data (`page-size` or your own `<ui-pagination>`) or let the server sort and search.

### Overlays

- **Modal** (`<ui-modal>`): a short decision or a small form. Widths sm 480px, md 672px (default), lg 1056px. A modal with action buttons doesn't close on an outside click (Carbon); Esc closes it and focus returns to what opened it. `alert` for a destructive confirmation.
- **Side panel** (`<ui-side-panel>`): keeps the page visible (filters, details). Widths xs 16rem, sm 20rem, md 30rem (default), lg 40rem, xl 65rem, 2xl 80rem.
- **Tearsheet** (`<ui-tearsheet>`, `width="narrow|wide"`): a large task in its own surface.
- **Popover, toggletip, tooltip**: a tooltip names or explains a control on hover and keyboard focus (it shows after 100ms and hides 300ms after the pointer leaves); a toggletip opens on click and can hold a link; neither holds a form.

### Feedback

- **Notifications** (`<ui-notification kind="error|warning|success|info…">`): inline in the page, `variant="toast"` at the corner, `action-label` for an actionable one, `variant="callout"` for static guidance. High-contrast by default, `low-contrast` tinted.
- **Toasts** through `<ui-toaster>` / `toast()`: at most 3 at once; info and success close after 5 seconds, errors and warnings stay until closed.
- **Loading**: `<ui-inline-loading>` beside the thing being saved; `<ui-loading>` (with `delay`, so quick work never flashes it) for a whole area; `<ui-…-skeleton>` elements hold the shape of a component while its data loads; `<ui-progress-bar>` when the progress is known.

### Navigation

- **UI shell**: `<ui-header>` (48px, the product name, header navigation, global actions and panels) with `<ui-side-nav>`; `<ui-content>` holds the page.
- **Tabs** (`<ui-tabs>`, line or `type="contained"`), `<ui-breadcrumb>`, `<ui-pagination>` / `<ui-pagination-nav>`, `<ui-progress-indicator>` for steps.
- Links are `<ui-link>`; the shadow-DOM links fire `ui-navigate` so a single-page router can take over.

## Patterns

- **Form page**: a `<ui-heading>`, then fields in one column (or a `<ui-grid>` for short related ones) 24–32px apart, grouped with `<ui-form-group>`, and a `<ui-button-set>` at the end: primary "Save", secondary "Cancel". Validate on blur and on submit; on a failed submit move focus to the first invalid field.
- **Data page**: title and description, a toolbar with the search and one primary action, the table, pagination under it. Filters in a side panel; row details in an expanded row or a side panel; bulk actions in the batch bar.
- **Empty, loading and error states**: say what is missing and what to do next ("No contracts yet — Create a contract"); show skeletons in the shape of the content while loading; put errors in an inline notification near what failed, with a way to retry.
- **Settings**: toggles for instant settings, a form with a Save button for settings that are applied together.
- **Thai and English**: set `lang` once; the components translate their own words (`th` and `en` built in), dates use the Buddhist era in Thai, and Thai text keeps IBM Plex Sans Thai beside Plex Sans.

## Responsive Behavior

### Breakpoints

| Name | From | Columns | Use |
|---|---|---|---|
| sm | 0 | 4 | phones |
| md | 672px | 8 | small tablets; pinned table columns start sticking here |
| lg | 1056px | 16 | the header navigation and the fixed side nav appear |
| xlg | 1312px | 16 | wide screens |
| max | 1584px | 16 | the grid stops growing |

### Touch targets

- Every control is at least 24 × 24px (WCAG 2.2 target size). Small visuals that are controls, such as a 16px close icon or a column's resize edge, get an invisible hit area around them, so what you see keeps its real size.
- On touch screens prefer `size="lg"` (48px) for buttons and fields; it is Carbon's touch size.

### Collapsing

- Below 1056px the header navigation folds into the side nav, opened by the header's menu button over the page.
- Grids stack: give columns `sm`, `md` and `lg` spans; a 16-column layout becomes 8 and then 4 columns.
- Wide tables scroll sideways inside their own box (it takes keyboard focus); pin the first or last column to keep it in view.
- The toolbar search of a table collapses to its magnifier until it's used; on narrow screens give a button set `stacked`.

## Accessibility

- Every component is keyboard-complete and follows the WAI-ARIA Authoring Practices (APG) where Carbon is silent; focus is always visible (2px `--ui-focus`).
- Text and controls keep WCAG AA contrast in all four themes and on every layer.
- Give every field a label, every icon-only button a `label`, every table a title or an `aria-label`; say what changed with the built-in live regions (toasts, inline loading, counters) rather than your own.
- Respect `prefers-reduced-motion` (the tokens drop to 0ms) and `prefers-contrast` (menus draw dotted focus outlines).

## Do's and Don'ts

Do:
- Use the components and the `--ui-*` tokens; restyle with tokens and `::part()`.
- Nest `<ui-layer>` for surfaces on surfaces, so fields and borders stay visible.
- Give icon-only buttons a `label`; set `lang` (Thai uses the Buddhist era in dates).
- Keep one primary button per area, and one accent color on the page.
- Use the productive type scale for product screens; save heading-06 / heading-07 for page titles.
- Load IBM Plex Sans (and Plex Sans Thai) yourself: the package doesn't ship font files.

Don't:
- Hard-code colors, fonts or spacing, or style inside the shadow DOM.
- Round corners or add shadows to surfaces.
- Add a second accent color, or use color alone to say something (pair it with an icon or text).
- Put controls inside a clickable or linked card.
- Open a modal from a modal; use a tearsheet or a side panel for longer flows.
- Build your own dropdown, date picker or table when the component exists.

## Iteration Guide

After building a screen, check:

1. Is every color, size and space a `--ui-*` token or a component's own? No hex values, no px outside the 4px grid.
2. Is there one primary button per area, with the label on the start side?
3. Does it work in `data-theme="g100"` (dark) and inside a `<ui-layer>`? Fields and borders must still show.
4. Can you do everything with the keyboard, with focus always visible, and does a screen reader hear a name for every control?
5. Does it hold at 320px, 672px and 1056px wide?
6. Are the loading, empty and error states there, in Thai and English?

## Known Gaps

- No charts or data visualization: use a charting library and the `--ui-*` colors.
- Carbon's AI components (AI label, AI skeleton, chat button) and the IBM Products extras beyond those listed are not included.
- Fonts are not bundled; icons are the Carbon ones the components need, not the whole icon set.
- Tables render every row (no virtualization); page large data.
- Tested in Chrome and WebKit (Safari) on every change; Firefox is checked by hand.
