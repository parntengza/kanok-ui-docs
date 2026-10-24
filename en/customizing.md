# Customize the look

Start from the shallowest layer and go deeper only when it isn't enough:

1. **Design tokens** (`--ui-*`) for sizes and colors
2. **Theme zones** (`data-theme`, see [Themes and layers](https://parntengza.github.io/kanok-ui-docs/en/themes/))
3. **`::part()`** for one piece of an element
4. **Slots** for markup in labels and help text
5. **A derived class** as the last resort

The shallower layers survive upgrades better, because they don't depend on how an element is built inside. Attributes, properties, events, slots, parts and `--ui-*` tokens listed in [api.md](https://cdn.jsdelivr.net/npm/@purpurabog/ui@latest/docs/api.md) are not removed or renamed before the next major version. Selectors inside the shadow DOM are not part of that promise.

## Change sizes and colors with tokens

Every component reads CSS custom properties named `--ui-*` from `tokens.css` (loaded once per page). Set them on `:root` to change the whole app, or on any element to change only what's inside it. You don't touch the shadow DOM:


HTML:

```html
<style>
  .compact {
    --ui-field-height-md: 32px;
    --ui-menu-max-rows: 3;
  }
</style>
<div class="compact">
  <ui-text-input label="32px field"></ui-text-input>
  <ui-dropdown label="Menu shows 3 rows" placeholder="Choose">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </ui-dropdown>
</div>
```

React:

```tsx
// .compact is the same CSS rule as in the HTML tab
<div className="compact">
  <UiTextInput label="32px field" />
  <UiDropdown label="Menu shows 3 rows" placeholder="Choose">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </UiDropdown>
</div>
```

React + Tailwind:

```tsx
const numbers = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
];

<div className="[--ui-field-height-md:32px] [--ui-menu-max-rows:3]">
  <TextInput label="32px field" />
  <Dropdown label="Menu shows 3 rows" placeholder="Choose" items={numbers} />
</div>
```

The React + Tailwind classes read the same tokens (see below), so a token set on a wrapper changes them too. Headless parts have no look, so tokens don't apply to them.

The public tokens that components read:

| Token | Changes |
|---|---|
| `--ui-field-height-sm`, `-md`, `-lg` | Field height per `size` (32 / 40 / 48px): text input, select, dropdown, combobox, multi-select, date picker, button |
| `--ui-menu-max-rows` | Rows a dropdown, combobox or multi-select menu shows before it scrolls (5.5) |
| `--ui-calendar-width` | Width of the date picker's calendar (288px) |
| `--ui-sheet-radius` | Top corners of the date picker's bottom sheet on phones (the menu radius) |
| `--ui-available-height`, `--ui-available-width` | Written on an open list or menu while it is open: the room left beside its field. Its max-height takes it, so a long list scrolls inside the screen. Read it in your own popup's CSS; don't set it |
| `--ui-highlight` | Color of the selected days in a range picker |
| `--ui-surface-1`, `--ui-surface-2`, `--ui-hairline`, `--ui-ink-subtle`, `--ui-ghost-hover`, `--ui-ghost-active` | Layer tokens: they point at the current layer's set, and `<ui-layer>` moves them |
| `--ui-primary`, `--ui-ink`, `--ui-canvas`, `--ui-focus`, … | Theme colors, each made from the Carbon token named at the end of its line in `tokens.css` |

Each element's own list is under "Design tokens" in [api.md](https://cdn.jsdelivr.net/npm/@purpurabog/ui@latest/docs/api.md) and in the CSS custom properties table of its Storybook page.

## Change one piece of an element with `::part()`

`::part(name)` styles a piece an element exposes. Part names are the same words across components: `base`, `label`, `input`, `menu`, `option`, `helper-text`, `error-text`, … The date picker passes on the parts of the fields inside it; in range mode they get `start-` and `end-` in front:


HTML:

```html
<style>
  ui-dropdown.bold::part(input) {
    font-weight: 600;
  }
  ui-date-picker.split::part(end-input) {
    text-align: end;
  }
</style>
<ui-dropdown class="bold" label="Bold" placeholder="Choose">
  <option value="1">One</option>
</ui-dropdown>
<ui-date-picker class="split" range label="Start" end-label="End"></ui-date-picker>
```

React:

```tsx
// the same CSS as in the HTML tab: the wrappers render <ui-dropdown> and <ui-date-picker>
<UiDropdown className="bold" label="Bold" placeholder="Choose">
  <option value="1">One</option>
</UiDropdown>
<UiDatePicker className="split" range label="Start" endLabel="End" />
```

Every element's parts are listed in [api.md](https://cdn.jsdelivr.net/npm/@purpurabog/ui@latest/docs/api.md). `::part()` is for the web components and the React wrappers, which render them. React + Tailwind and headless have no shadow DOM: give the pieces classes instead (the last two sections).

A few elements have no pieces inside: `ui-toaster`, `ui-fluid-form`, `ui-button-set`, `ui-badge-indicator` and `ui-stack` are the box you see. Style them with plain CSS on the element, e.g. `ui-stack { row-gap: 24px; }` or `ui-badge-indicator { background: var(--ui-info); }`: page CSS wins over their own. `ui-button-set` also has the part `button-set` (as in Carbon), but its layout is on the element.

## Style by state

You can read every state that changes the look from the element itself, and combine it with `::part()`:

- **Properties you or the user change** are reflected as attributes: `open`, `checked`, `selected`, `expanded`, `invalid`, `warn`, `size`, `kind`, …
- **States the element works out itself** are set as `data-*` attributes on the element:

| Attribute | Means | On |
|---|---|---|
| `data-open` | The list or calendar is open | `ui-dropdown`, `ui-combobox`, `ui-multi-select`, `ui-date-picker` |
| `data-show-error`, `data-show-warn` | The error or warning is actually showing (an error replaces a warning) | every form field |
| `data-has-value` | There is text or a selection | `ui-combobox`, `ui-multi-select`, `ui-search` |
| `data-placeholder` | The placeholder is showing | `ui-dropdown`, `ui-select` |
| `data-password-visible` | The password is shown | `ui-text-input type="password"` |
| `data-editing` | In edit mode | `ui-edit-in-place` |
| `data-drag-over` | A file is dragged over the drop zone | `ui-file-uploader` |
| `data-shown` | The spinner or overlay really shows (after `delay`) | `ui-loading` |
| `data-overflowing` | The text is cut off | `ui-truncated-text` |

Each of these is also a custom state, as on native and Web Awesome elements: `ui-dropdown:state(open)` matches exactly when `ui-dropdown[data-open]` does (`:state(show-error)`, `:state(has-value)`, …). Use whichever you prefer; the attribute works in older browsers too. Each element's states are listed in its API reference.

Click into the email field and leave it empty, then open the dropdown:


HTML:

```html
<style>
  ui-text-input[data-show-error]::part(label) {
    color: var(--ui-error-text);
  }
  ui-dropdown[data-open]::part(label) {
    font-weight: 600;
  }
</style>
<ui-text-input label="Email" required></ui-text-input>
<ui-dropdown label="Fruit" placeholder="Choose">
  <option value="1">Apple</option>
</ui-dropdown>
```

React:

```tsx
// the same CSS as in the HTML tab: the states are set on the elements the wrappers render
<UiTextInput label="Email" required />
<UiDropdown label="Fruit" placeholder="Choose">
  <option value="1">Apple</option>
</UiDropdown>
```

Use `[data-show-error]` rather than `[invalid]` to style the error the user actually sees. `invalid` is the value you set: it stays on a disabled field, which shows no error, and it doesn't include errors from the user's own input.

The `data-*` states are set after the first render in the browser, so HTML rendered on a server doesn't have them yet. The headless parts show their state with `data-*` attributes of their own: see [Headless](https://parntengza.github.io/kanok-ui-docs/en/headless/#style-on-data-attributes).

## Put markup in labels and help text with slots

When text needs a link, bold text or an icon, use a slot instead of the attribute of the same name. The attribute still works as plain-text fallback.


HTML:

```html
<ui-text-input>
  <span slot="label">Email <em>(required)</em></span>
  <span slot="helper-text">Use your work email. See the <a href="#policy">policy</a>.</span>
</ui-text-input>
<ui-dropdown label="Country" placeholder="Choose">
  <option value="th" data-description="UTC+7">Thailand</option>
  <option value="jp" data-description="UTC+9">Japan</option>
</ui-dropdown>
```

React:

```tsx
<UiTextInput>
  <span slot="label">Email <em>(required)</em></span>
  <span slot="helper-text">Use your work email. See the <a href="#policy">policy</a>.</span>
</UiTextInput>
<UiDropdown label="Country" placeholder="Choose">
  <option value="th" data-description="UTC+7">Thailand</option>
  <option value="jp" data-description="UTC+9">Japan</option>
</UiDropdown>
```

React + Tailwind:

```tsx
const countries = [
  { value: 'th', label: 'Thailand', description: 'UTC+7' },
  { value: 'jp', label: 'Japan', description: 'UTC+9' },
];

<TextInput
  label={<>Email <em>(required)</em></>}
  helperText={<>Use your work email. See the <a href="#policy">policy</a>.</>}
/>
<Dropdown label="Country" placeholder="Choose" items={countries} />
```

Every field takes the `label`, `helper-text`, `warn-text` and `invalid-text` slots. `data-description` on an `<option>` adds a second line in a dropdown, combobox or multi-select. Other elements have their own, such as `header-actions` on `ui-modal` and `end` on `ui-tabs`; [api.md](https://cdn.jsdelivr.net/npm/@purpurabog/ui@latest/docs/api.md) lists them all. React + Tailwind has no slots: `label`, `helperText`, `warnText` and `invalidText` take markup, and an item's `description` is its second line.

## Change the shape with a derived class

The last resort, for what tokens, parts and slots can't do, and only for the web components. Extend the element's class and add your styles after its own. You keep all its behavior (forms, keyboard, accessibility):

```ts
import { css } from 'lit';
import { UiButton } from '@purpurabog/ui/button';

export class BrandButton extends UiButton {
    static override readonly styles = [
        ...UiButton.styles,
        css`
            [part='base'] {
                border-radius: var(--ui-radius-pill);
            }
        `,
    ];
}

customElements.define('brand-button', BrandButton);

declare global {
    interface HTMLElementTagNameMap {
        'brand-button': BrandButton;
    }
}
```

Internal selectors are not public API. Select by `[part=…]`, as above: it survives upgrades better than internal class names.

## React + Tailwind: edit the copied classes

With shadcn the component's source is copied into your app, so you change its look where it is written. Each file keeps its classes in plain Tailwind (`cva` variants for kinds and sizes). For example, in `components/ui/react-tw/button.tsx`:

```tsx
// before
'rounded-none border border-solid border-transparent',
// after: pill-shaped buttons everywhere
'rounded-pill border border-solid border-transparent',
```

For one place only, pass `className`. Classes are merged with `tailwind-merge`, so the ones you pass win:

```tsx
import { Button } from '@/components/ui/react-tw/button';

<Button className="w-full">Save</Button>
```

The classes (`bg-primary`, `text-ink`, `h-field-md`, `rounded-pill`, …) come from `theme.css`, which maps the `--ui-*` tokens into Tailwind's theme. Tokens and `data-theme` zones therefore work here exactly as for the web components. The behavior (keyboard, focus, ARIA) comes from `@purpurabog/ui/headless` and keeps updating with the package.

## Headless

The headless parts render no classes and read no tokens: you style them on their `data-*` state attributes. See [Headless](https://parntengza.github.io/kanok-ui-docs/en/headless/#style-on-data-attributes).
