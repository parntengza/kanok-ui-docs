# Kanok design

Kanok (กนก, after the flame-like Thai motif *lai kanok*) is the library's own style, next to Carbon. It is meant for internal business tools: clean and calm, surfaces set apart by their fill rather than lines, with a Thai-craft identity in its colours and one recurring detail. Every component keeps the same HTML, JavaScript and accessibility; only the stylesheet changes.

## What it looks like

- **Colour.** Khram indigo for actions (`#3341a8`, dark: `#5563db`), chad vermilion for danger, cool near-neutral greys on white (theme `paper`) and a violet-warm black (theme `lacquer`). Every colour is generated and checked against WCAG 2.2 contrast when the package is built.
- **You are here.** An indigo line marks the selected tab, the current page in the header and a chosen table row (`--ui-border-interactive`: the primary on paper, a lighter indigo on lacquer so it stays visible); in the side nav, a tree and vertical tabs the chosen row is tinted, with no bar.
- **No lines where a fill will do.** Cards and tiles have no border: a soft grey sets them apart from the page, one step off whatever they sit on, in a layer too. Notifications and toasts have no coloured bar; the icon tells the kind.
- **Focus.** One light ring everywhere: solid indigo, 1.5px, with rounded corners, shown for the keyboard only. A click on a button, a checkbox or a toggle shows none; Tab does, 2px outside a control and inside a highlighted row. An input box (a text field, a dropdown, a select) shows its focus either way, on its own border (Carbon: 2px, square, a click too).
- **Shape.** Pill-shaped buttons; 6px corners on fields, outlined on every side; 12px on cards, tiles and dialogs (a card's footer buttons sit 8px in) (a card clips its image to them); 8px on menus, notifications and code snippets. Tags have small 4px corners, so a status never reads as a button.
- **No ink blocks.** Secondary buttons are a soft grey fill with no border. Chosen things are indigo, never black: a selected tag, a chosen tile, the slider, the multi-select count.
- **Density.** Buttons and fields 40px tall by default (`sm` 32px, `lg` 48px, as Carbon's fields), so a button lines up with the field beside it; menu rows 32px, table rows 40px. The large button sizes stay pills: `xl` is 48px and `2xl` 56px, label centred (Carbon's 64 / 80px with the label at the top).
- **Select.** A native select, as in Carbon: it opens the browser's own list, and a phone's own picker. For a list in the menu look, use a dropdown (or set `--ui-select-appearance: base-select` for Chrome 135+'s customizable select).
- **Type.** Bai Jamjuree for Thai and Latin, semibold labels and headings, and taller lines so stacked Thai vowels and tone marks never collide.

## Use it

Load `kanok.css` after `tokens.css` (see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/)), then mark where Kanok applies:

```html
<html data-design="kanok" data-theme="paper">
```

`data-design` works on any element, not only `<html>`. An app that runs inside another product's frame (a portal with its own header and side bar) puts it on its own root element, so the host page is left alone:

```html
<div id="contracts-app" data-design="kanok" data-theme="paper">…</div>
```

### React + Tailwind

The React + Tailwind components read the same settings, so they follow Kanok too. Copy `kanok.css` next to the tokens (`npx shadcn@4 add @kanok-ui/kanok`) and import it after them:

```css
@import 'tailwindcss';
@import './components/ui/primitives/tokens.css';
@import './components/ui/primitives/kanok.css';
@import './components/ui/react-tw/theme.css';
```

Then set `data-design` as above. In a micro app (React in a shadow root) put `data-design` and `data-theme` on the host element.

## Light and dark

Kanok has two themes: `paper` (light) and `lacquer` (dark). `data-theme="auto"` follows the system setting. You don't need to change anything for `<ui-theme-switcher>` or `useThemeMode`: on a Kanok page their light / dark choice becomes paper / lacquer. The core functions are in `@purpurabog/ui/core`:

| Function | Does |
| --- | --- |
| `applyDesign('kanok')` | sets `data-design` on `<html>` and moves the theme to the same mode in Kanok |
| `designScript()` | a `<head>` script that paints the remembered style (or `?design=` from the URL) on the first frame; put it before `themeScript()` |
| `themeIn('kanok', 'g100')` | the theme a design shows for a mode: `lacquer` |

## Adjust it

Kanok is a set of values for public CSS custom properties: colours (`--ui-primary`, `--ui-border-interactive`, …) and shape settings (`--ui-button-radius`, `--ui-field-border`, `--ui-card-radius`, `--ui-menu-item-radius`, …). Override any of them on a zone, as in [Customizing](https://parntengza.github.io/kanok-ui-docs/en/customizing/). Each element's settings are listed in its API reference.

## Status

Kanok is new. These components have their Kanok shape: button, the form fields (text input, text area, number, select, search, dropdown, combobox, multi-select, date and time pickers), checkbox, radio, toggle, tags, tabs, tiles, cards, tables (with a mark on a chosen row), menus, notifications, modals, button sets, code snippets, contained tabs (as a segmented control), the calendar, the header, the side nav, the content switcher, pagination, the slider, the file uploader, tooltips, popovers, toggletips, overflow menus, side panels and tearsheets. Every other component already takes Kanok's colours, font and sizes, and gets its shape in the next releases. The React + Tailwind components follow Kanok as well.
