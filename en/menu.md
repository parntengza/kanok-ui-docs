# Menu

A menu is a short list of actions that opens from a button. This page covers the three triggers Carbon ships (the menu button, the overflow menu "⋮" and the combo button), the items that go inside them, and the menu on its own.


HTML:

```html
<ui-menu-button label="Actions">
  <ui-menu-item label="Send for signature" shortcut="⌘↵"></ui-menu-item>
  <ui-menu-item label="Save as draft"></ui-menu-item>
  <ui-menu-item label="Export PDF" disabled></ui-menu-item>
  <ui-menu-divider></ui-menu-divider>
  <ui-menu-item label="Discard" kind="danger" danger-description="Deletes this request"></ui-menu-item>
</ui-menu-button>
```

React:

```tsx
<UiMenuButton label="Actions">
  <UiMenuItem label="Send for signature" shortcut="⌘↵" />
  <UiMenuItem label="Save as draft" />
  <UiMenuItem label="Export PDF" disabled />
  <UiMenuDivider />
  <UiMenuItem label="Discard" kind="danger" dangerDescription="Deletes this request" />
</UiMenuButton>
```

React + Tailwind:

```tsx
<MenuButton label="Actions">
  <MenuItem label="Send for signature" shortcut="⌘↵" />
  <MenuItem label="Save as draft" />
  <MenuItem label="Export PDF" disabled />
  <MenuItemDivider />
  <MenuItem label="Discard" kind="danger" dangerDescription="Deletes this request" />
</MenuButton>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/menu-button @kanok-ui/overflow-menu @kanok-ui/combo-button @kanok-ui/menu
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-menu
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/menu-button.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/overflow-menu.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/combo-button.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/menu.json
#    to its target:
#    components/ui/primitives/menu-button/menu-button.ts
#    components/ui/primitives/overflow-menu/overflow-menu.ts
#    components/ui/primitives/combo-button/combo-button.ts
#    components/ui/primitives/menu/menu-divider.ts
#    components/ui/primitives/menu/menu-group.ts
#    components/ui/primitives/menu/menu-item.ts
#    components/ui/primitives/menu/menu-shared.ts
#    components/ui/primitives/menu/menu.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    button, shared-align, shared-element, shared-events, tokens, shared-field, shared-localize, tooltip, icon-button, core-popup, core-roving, core-typeahead, shared-position

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-menu.json
#    to its target:
#    components/ui/react-tw/menu.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-button, tw-i18n, tw-refs, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Import the trigger you use; each brings the menu and its items with it.


HTML:

```html
<script type="module">
  import '@purpurabog/ui/menu-button';
  import '@purpurabog/ui/overflow-menu';
  import '@purpurabog/ui/combo-button';
</script>

<ui-menu-button label="Actions">
  <ui-menu-item label="Send for signature"></ui-menu-item>
  <ui-menu-item label="Save as draft"></ui-menu-item>
</ui-menu-button>
<ui-overflow-menu label="Contract options">
  <ui-menu-item label="Edit"></ui-menu-item>
  <ui-menu-item label="Delete" kind="danger"></ui-menu-item>
</ui-overflow-menu>
```

React:

```tsx
import { UiMenuButton, UiOverflowMenu, UiMenuItem } from '@purpurabog/ui/react';

<UiMenuButton label="Actions">
  <UiMenuItem label="Send for signature" />
  <UiMenuItem label="Save as draft" />
</UiMenuButton>
<UiOverflowMenu label="Contract options">
  <UiMenuItem label="Edit" />
  <UiMenuItem label="Delete" kind="danger" />
</UiOverflowMenu>
```

React + Tailwind:

```tsx
import { MenuButton, OverflowMenu, MenuItem } from '@/components/ui/react-tw/menu';

<MenuButton label="Actions">
  <MenuItem label="Send for signature" />
  <MenuItem label="Save as draft" />
</MenuButton>
<OverflowMenu label="Contract options">
  <MenuItem label="Edit" />
  <MenuItem label="Delete" kind="danger" />
</OverflowMenu>
```

The combo button is its own file: `@purpurabog/ui/combo-button`, and `@kanok-ui/tw-combo-button` for React + Tailwind.

## Which trigger?

| Trigger | Use it when |
|---|---|
| Menu button (`ui-menu-button`) | A labelled button groups several actions of the same kind ("Actions", "Export"). |
| Overflow menu (`ui-overflow-menu`) | Space is tight: secondary actions of a table row, a card or a toolbar, behind "⋮". |
| Combo button (`ui-combo-button`) | One action is the usual one and others are close variants ("Save", then "Save as draft"). |
| Menu (`ui-menu`) | None of these fit and you bring your own trigger. |

## Menu button kinds

`kind` is `primary` (the default), `tertiary` or `ghost`, as Carbon's `MenuButton`. Primary and tertiary buttons are at least 192px wide; ghost fits its label.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-menu-button label="Primary">
    <ui-menu-item label="Send for signature"></ui-menu-item>
    <ui-menu-item label="Save as draft"></ui-menu-item>
  </ui-menu-button>
  <ui-menu-button label="Tertiary" kind="tertiary">
    <ui-menu-item label="Send for signature"></ui-menu-item>
    <ui-menu-item label="Save as draft"></ui-menu-item>
  </ui-menu-button>
  <ui-menu-button label="Ghost" kind="ghost">
    <ui-menu-item label="Send for signature"></ui-menu-item>
    <ui-menu-item label="Save as draft"></ui-menu-item>
  </ui-menu-button>
</div>
```

React:

```tsx
<UiMenuButton label="Primary">…</UiMenuButton>
<UiMenuButton label="Tertiary" kind="tertiary">…</UiMenuButton>
<UiMenuButton label="Ghost" kind="ghost">…</UiMenuButton>
```

React + Tailwind:

```tsx
<MenuButton label="Primary">…</MenuButton>
<MenuButton label="Tertiary" kind="tertiary">…</MenuButton>
<MenuButton label="Ghost" kind="ghost">…</MenuButton>
```

## Sizes

`size` is `sm` 32px, `md` 40px or `lg` 48px (the default). The menu's rows take the same height as the button.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start">
  <ui-menu-button label="Small" size="sm" kind="tertiary">
    <ui-menu-item label="Approve"></ui-menu-item>
    <ui-menu-item label="Reject"></ui-menu-item>
  </ui-menu-button>
  <ui-menu-button label="Medium" size="md" kind="tertiary">
    <ui-menu-item label="Approve"></ui-menu-item>
    <ui-menu-item label="Reject"></ui-menu-item>
  </ui-menu-button>
  <ui-menu-button label="Large" kind="tertiary">
    <ui-menu-item label="Approve"></ui-menu-item>
    <ui-menu-item label="Reject"></ui-menu-item>
  </ui-menu-button>
</div>
```

React:

```tsx
<UiMenuButton label="Small" size="sm" kind="tertiary">…</UiMenuButton>
<UiMenuButton label="Medium" size="md" kind="tertiary">…</UiMenuButton>
<UiMenuButton label="Large" kind="tertiary">…</UiMenuButton>
```

React + Tailwind:

```tsx
<MenuButton label="Small" size="sm" kind="tertiary">…</MenuButton>
<MenuButton label="Medium" size="md" kind="tertiary">…</MenuButton>
<MenuButton label="Large" kind="tertiary">…</MenuButton>
```

## Placement and width

The menu opens below the button. With `placement="bottom"` (the default) or `top`, it is as wide as the button. `bottom-start`, `bottom-end`, `top-start` and `top-end` line it up with one edge and let it be as wide as its items. It flips when there is no room. `align` is Carbon's name for the same attribute.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-menu-button label="As wide as the button" kind="tertiary">
    <ui-menu-item label="Export PDF"></ui-menu-item>
    <ui-menu-item label="Export Word (.docx)"></ui-menu-item>
  </ui-menu-button>
  <ui-menu-button label="End edge" kind="ghost" placement="bottom-end">
    <ui-menu-item label="Export PDF"></ui-menu-item>
    <ui-menu-item label="Export Word (.docx) with comments"></ui-menu-item>
  </ui-menu-button>
  <ui-menu-button label="Opens above" kind="tertiary" placement="top">
    <ui-menu-item label="Export PDF"></ui-menu-item>
    <ui-menu-item label="Export Word (.docx)"></ui-menu-item>
  </ui-menu-button>
</div>
```

React:

```tsx
<UiMenuButton label="As wide as the button" kind="tertiary">…</UiMenuButton>
<UiMenuButton label="End edge" kind="ghost" placement="bottom-end">…</UiMenuButton>
<UiMenuButton label="Opens above" kind="tertiary" placement="top">…</UiMenuButton>
```

React + Tailwind:

```tsx
<MenuButton label="As wide as the button" kind="tertiary">…</MenuButton>
<MenuButton label="End edge" kind="ghost" placement="bottom-end">…</MenuButton>
<MenuButton label="Opens above" kind="tertiary" placement="top">…</MenuButton>
```

## Overflow menu

`<ui-overflow-menu>` is a ghost icon button with "⋮" that opens the menu (Carbon's `OverflowMenu`). `label` names the button and shows in its tooltip; it defaults to "Options". In a table row, use `placement="bottom-end"` so the menu stays inside the table. `ui-select` tells you which item was picked: `detail` has its `value` (else its label), `label` and `checked`.


HTML:

```html
<table id="menu-rows" style="border-collapse: collapse; font: var(--ui-font-body-sm)">
  <tbody>
    <tr style="border-bottom: 1px solid var(--ui-hairline)">
      <td style="padding: 0 16px">Lease, Silom office</td>
      <td style="width: 40px"><ui-overflow-menu label="Actions for Lease, Silom office" placement="bottom-end" data-row="Lease, Silom office">
        <ui-menu-item label="Edit" value="edit"></ui-menu-item>
        <ui-menu-item label="Duplicate" value="duplicate"></ui-menu-item>
        <ui-menu-divider></ui-menu-divider>
        <ui-menu-item label="Delete" value="delete" kind="danger" danger-description="This cannot be undone"></ui-menu-item>
      </ui-overflow-menu></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--ui-hairline)">
      <td style="padding: 0 16px">NDA, Siam Trading</td>
      <td style="width: 40px"><ui-overflow-menu label="Actions for NDA, Siam Trading" placement="bottom-end" data-row="NDA, Siam Trading">
        <ui-menu-item label="Edit" value="edit"></ui-menu-item>
        <ui-menu-item label="Duplicate" value="duplicate"></ui-menu-item>
        <ui-menu-divider></ui-menu-divider>
        <ui-menu-item label="Delete" value="delete" kind="danger" danger-description="This cannot be undone"></ui-menu-item>
      </ui-overflow-menu></td>
    </tr>
  </tbody>
</table>
<p style="margin: 0">Picked: <output id="menu-rows-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('menu-rows-out');
  document.getElementById('menu-rows').addEventListener('ui-select', (event) => {
    out.value = `${event.detail.value} on ${event.target.closest('ui-overflow-menu').dataset.row}`;
  });
</script>
```

React:

```tsx
<UiOverflowMenu label={`Actions for ${row.name}`} placement="bottom-end" onUiSelect={(e) => setPicked(`${e.detail.value} on ${row.name}`)}>
  <UiMenuItem label="Edit" value="edit" />
  <UiMenuItem label="Duplicate" value="duplicate" />
  <UiMenuDivider />
  <UiMenuItem label="Delete" value="delete" kind="danger" dangerDescription="This cannot be undone" />
</UiOverflowMenu>
```

React + Tailwind:

```tsx
// each item has its own onClick
<OverflowMenu label={`Actions for ${row.name}`} placement="bottom-end">
  <MenuItem label="Edit" onClick={() => setPicked(`edit on ${row.name}`)} />
  <MenuItem label="Duplicate" onClick={() => setPicked(`duplicate on ${row.name}`)} />
  <MenuItemDivider />
  <MenuItem label="Delete" kind="danger" dangerDescription="This cannot be undone" onClick={() => setPicked(`delete on ${row.name}`)} />
</OverflowMenu>
```

`ui-select` bubbles, so one listener on the table hears every row. Give each overflow menu a `label` that names its row: a screen reader hears "Actions for Lease, Silom office", not five times "Options".

## Overflow menu sizes and icon

`size` is `sm` 32px, `md` 40px (the default) or `lg` 48px, for the button and the rows. `tooltip-placement` moves the tooltip (below by default). Another icon goes in the `icon` slot (`icon` in React + Tailwind), such as "⋯" for a horizontal toolbar.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-overflow-menu size="sm" label="Options (small)">
    <ui-menu-item label="Rename"></ui-menu-item>
    <ui-menu-item label="Move"></ui-menu-item>
  </ui-overflow-menu>
  <ui-overflow-menu label="Options (medium)">
    <ui-menu-item label="Rename"></ui-menu-item>
    <ui-menu-item label="Move"></ui-menu-item>
  </ui-overflow-menu>
  <ui-overflow-menu size="lg" label="Options (large)" tooltip-placement="right">
    <ui-menu-item label="Rename"></ui-menu-item>
    <ui-menu-item label="Move"></ui-menu-item>
  </ui-overflow-menu>
  <ui-overflow-menu label="More tools">
    <svg slot="icon" viewBox="0 0 16 16"><circle cx="4" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="12" cy="8" r="1.5"/></svg>
    <ui-menu-item label="Rename"></ui-menu-item>
    <ui-menu-item label="Move"></ui-menu-item>
  </ui-overflow-menu>
</div>
```

React:

```tsx
import { OverflowMenuHorizontal as OverflowMenuHorizontalIcon } from '@carbon/icons-react';

<UiOverflowMenu size="sm" label="Options (small)">…</UiOverflowMenu>
<UiOverflowMenu label="Options (medium)">…</UiOverflowMenu>
<UiOverflowMenu size="lg" label="Options (large)" tooltipPlacement="right">…</UiOverflowMenu>
<UiOverflowMenu label="More tools">
  <OverflowMenuHorizontalIcon slot="icon" />
  …
</UiOverflowMenu>
```

React + Tailwind:

```tsx
import { OverflowMenuHorizontal as OverflowMenuHorizontalIcon } from '@carbon/icons-react';

<OverflowMenu size="sm" label="Options (small)">…</OverflowMenu>
<OverflowMenu label="Options (medium)">…</OverflowMenu>
<OverflowMenu size="lg" label="Options (large)" tooltipPlacement="right">…</OverflowMenu>
<OverflowMenu label="More tools" icon={<OverflowMenuHorizontalIcon />}>…</OverflowMenu>
```

## Combo button

`<ui-combo-button>` is a primary button for the usual action, joined to a chevron that opens the other actions (Carbon's `ComboButton`). The primary button fires `ui-click`; the items fire `ui-select`. The chevron is named "Additional actions" unless you set `trigger-label`. With `placement="bottom"` (the default) the menu is as wide as the whole control.


HTML:

```html
<ui-combo-button id="menu-combo" label="Save" size="md">
  <ui-menu-item label="Save as draft" value="draft"></ui-menu-item>
  <ui-menu-item label="Save and send for signature" value="send"></ui-menu-item>
  <ui-menu-divider></ui-menu-divider>
  <ui-menu-item label="Discard changes" value="discard" kind="danger"></ui-menu-item>
</ui-combo-button>
<p style="margin: 0">Last action: <output id="menu-combo-out">none</output></p>

<script type="module">
  const combo = document.getElementById('menu-combo');
  const out = document.getElementById('menu-combo-out');
  combo.addEventListener('ui-click', () => (out.value = 'Save'));
  combo.addEventListener('ui-select', (event) => (out.value = event.detail.label));
</script>
```

React:

```tsx
<UiComboButton label="Save" size="md" onUiClick={() => setLast('Save')} onUiSelect={(e) => setLast(e.detail.label)}>
  <UiMenuItem label="Save as draft" value="draft" />
  <UiMenuItem label="Save and send for signature" value="send" />
  <UiMenuDivider />
  <UiMenuItem label="Discard changes" value="discard" kind="danger" />
</UiComboButton>
<p>Last action: <output>{last}</output></p>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-combo-button
import { ComboButton } from '@/components/ui/react-tw/combo-button';

<ComboButton label="Save" size="md" onClick={() => setLast('Save')}>
  <MenuItem label="Save as draft" onClick={() => setLast('Save as draft')} />
  <MenuItem label="Save and send for signature" onClick={() => setLast('Save and send for signature')} />
  <MenuItemDivider />
  <MenuItem label="Discard changes" kind="danger" onClick={() => setLast('Discard changes')} />
</ComboButton>
<p>Last action: <output>{last}</output></p>
```

A plain `click` on the element also bubbles from the chevron and the items, so listen for `ui-click` to run the primary action only.

## Items: icons, shortcuts, disabled and danger

- An SVG in the item's `icon` slot (`icon` in React + Tailwind) shows a 16px icon. When one item has an icon, every row gets the icon column, so the labels line up.
- `shortcut` shows a key hint at the end of the row. It is only text: register the key yourself.
- `disabled` shows the item but skips it with the keys, and a click does nothing.
- `kind="danger"` turns the row red on hover and focus. `danger-description` is read after the label, so screen reader users hear what will happen.
- `<ui-menu-divider>` draws a line between groups of items.


HTML:

```html
<ui-overflow-menu label="Document options">
  <ui-menu-item label="Edit" shortcut="⌘E">
    <svg slot="icon" viewBox="0 0 16 16"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z"/></svg>
  </ui-menu-item>
  <ui-menu-item label="Duplicate" shortcut="⌘D">
    <svg slot="icon" viewBox="0 0 16 16"><path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"/><path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z"/></svg>
  </ui-menu-item>
  <ui-menu-item label="Archive (signed only)" disabled></ui-menu-item>
  <ui-menu-divider></ui-menu-divider>
  <ui-menu-item label="Delete" kind="danger" danger-description="This cannot be undone">
    <svg slot="icon" viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9z"/><path d="M2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3Zm2 11V4h8v10ZM6 1h4v1H6z"/></svg>
  </ui-menu-item>
</ui-overflow-menu>
```

React:

```tsx
import { Copy as CopyIcon, Edit as EditIcon, TrashCan as TrashCanIcon } from '@carbon/icons-react';

<UiOverflowMenu label="Document options">
  <UiMenuItem label="Edit" shortcut="⌘E"><EditIcon slot="icon" /></UiMenuItem>
  <UiMenuItem label="Duplicate" shortcut="⌘D"><CopyIcon slot="icon" /></UiMenuItem>
  <UiMenuItem label="Archive (signed only)" disabled />
  <UiMenuDivider />
  <UiMenuItem label="Delete" kind="danger" dangerDescription="This cannot be undone"><TrashCanIcon slot="icon" /></UiMenuItem>
</UiOverflowMenu>
```

React + Tailwind:

```tsx
import { Copy as CopyIcon, Edit as EditIcon, TrashCan as TrashCanIcon } from '@carbon/icons-react';

<OverflowMenu label="Document options">
  <MenuItem label="Edit" shortcut="⌘E" icon={<EditIcon />} />
  <MenuItem label="Duplicate" shortcut="⌘D" icon={<CopyIcon />} />
  <MenuItem label="Archive (signed only)" disabled />
  <MenuItemDivider />
  <MenuItem label="Delete" kind="danger" dangerDescription="This cannot be undone" icon={<TrashCanIcon />} />
</OverflowMenu>
```

## Check boxes and radio groups

- `selectable` makes an item an on / off choice (Carbon's `MenuItemSelectable`): a click flips `checked` and a check mark shows.
- `<ui-menu-group selection="single">` makes its items a radio group (Carbon's `MenuItemRadioGroup`): exactly one is `checked`, the one whose `value` is the group's `value`. It fires `ui-change` with `detail.value` when the choice changes.
- `label` on a group names it for screen readers. A group without `selection` only names its items.


HTML:

```html
<ui-overflow-menu id="menu-view" label="View options">
  <ui-menu-item label="Show archived" value="archived" selectable checked></ui-menu-item>
  <ui-menu-item label="Show drafts" value="drafts" selectable></ui-menu-item>
  <ui-menu-divider></ui-menu-divider>
  <ui-menu-group id="menu-view-sort" label="Sort by" selection="single" value="date">
    <ui-menu-item label="Name" value="name"></ui-menu-item>
    <ui-menu-item label="Date modified" value="date"></ui-menu-item>
    <ui-menu-item label="Expiry date" value="expiry"></ui-menu-item>
  </ui-menu-group>
</ui-overflow-menu>
<p style="margin: 0">Show: <output id="menu-view-out">archived</output>. Sort by: <output id="menu-view-sort-out">date</output></p>

<script type="module">
  const menu = document.getElementById('menu-view');
  const out = document.getElementById('menu-view-out');
  menu.addEventListener('ui-select', () => {
    const shown = [...menu.querySelectorAll('ui-menu-item[selectable]')].filter((item) => item.checked);
    out.value = shown.map((item) => item.value).join(', ') || 'active only';
  });
  document.getElementById('menu-view-sort').addEventListener('ui-change', (event) => {
    document.getElementById('menu-view-sort-out').value = event.detail.value;
  });
</script>
```

React:

```tsx
<UiOverflowMenu label="View options">
  <UiMenuItem label="Show archived" selectable checked={archived} onUiSelect={(e) => setArchived(e.detail.checked)} />
  <UiMenuItem label="Show drafts" selectable checked={drafts} onUiSelect={(e) => setDrafts(e.detail.checked)} />
  <UiMenuDivider />
  <UiMenuGroup label="Sort by" selection="single" value={sort} onUiChange={(e) => setSort(e.detail.value)}>
    <UiMenuItem label="Name" value="name" />
    <UiMenuItem label="Date modified" value="date" />
    <UiMenuItem label="Expiry date" value="expiry" />
  </UiMenuGroup>
</UiOverflowMenu>
```

React + Tailwind:

```tsx
<OverflowMenu label="View options">
  <MenuItem label="Show archived" selectable checked={archived} onCheckedChange={setArchived} />
  <MenuItem label="Show drafts" selectable checked={drafts} onCheckedChange={setDrafts} />
  <MenuItemDivider />
  <MenuItemGroup label="Sort by" selection="single" value={sort} onChange={setSort}>
    <MenuItem label="Name" value="name" />
    <MenuItem label="Date modified" value="date" />
    <MenuItem label="Expiry date" value="expiry" />
  </MenuItemGroup>
</OverflowMenu>
```

Picking an item closes the menu, check boxes and radios included.

## Submenus

Put `<ui-menu-item>`s inside an item to give it a submenu: the item shows a chevron and opens them beside it, on hover, a click, Enter, Space or → (← in right-to-left pages). ← or Esc closes only that level. Picking a leaf closes every level and its `ui-select` bubbles out of the whole menu. In React + Tailwind, `MenuItem` children make the submenu.


HTML:

```html
<ui-overflow-menu id="menu-nested" label="Document actions">
  <ui-menu-item label="Open"></ui-menu-item>
  <ui-menu-item label="Export as">
    <ui-menu-item label="PDF"></ui-menu-item>
    <ui-menu-item label="Word (.docx)"></ui-menu-item>
    <ui-menu-item label="Image">
      <ui-menu-item label="PNG"></ui-menu-item>
      <ui-menu-item label="JPEG"></ui-menu-item>
    </ui-menu-item>
  </ui-menu-item>
  <ui-menu-item label="Share with">
    <ui-menu-group label="Team" selection="single" value="legal">
      <ui-menu-item label="Legal" value="legal"></ui-menu-item>
      <ui-menu-item label="Finance" value="finance"></ui-menu-item>
    </ui-menu-group>
  </ui-menu-item>
  <ui-menu-divider></ui-menu-divider>
  <ui-menu-item label="Delete" kind="danger"></ui-menu-item>
</ui-overflow-menu>
<p style="margin: 0">Picked: <output id="menu-nested-out">nothing yet</output></p>

<script type="module">
  document.getElementById('menu-nested').addEventListener('ui-select', (event) => {
    document.getElementById('menu-nested-out').value = event.detail.label;
  });
</script>
```

React:

```tsx
<UiOverflowMenu label="Document actions" onUiSelect={(e) => setPicked(e.detail.label)}>
  <UiMenuItem label="Open" />
  <UiMenuItem label="Export as">
    <UiMenuItem label="PDF" />
    <UiMenuItem label="Word (.docx)" />
    <UiMenuItem label="Image">
      <UiMenuItem label="PNG" />
      <UiMenuItem label="JPEG" />
    </UiMenuItem>
  </UiMenuItem>
  …
</UiOverflowMenu>
```

React + Tailwind:

```tsx
<OverflowMenu label="Document actions">
  <MenuItem label="Open" onClick={() => setPicked('Open')} />
  <MenuItem label="Export as">
    <MenuItem label="PDF" onClick={() => setPicked('PDF')} />
    <MenuItem label="Word (.docx)" onClick={() => setPicked('Word (.docx)')} />
    <MenuItem label="Image">
      <MenuItem label="PNG" onClick={() => setPicked('PNG')} />
      <MenuItem label="JPEG" onClick={() => setPicked('JPEG')} />
    </MenuItem>
  </MenuItem>
  …
</OverflowMenu>
```

Keep submenus to one or two levels: each level is another hover target to hit.

## A menu with your own trigger

`<ui-menu>` is the list behind every trigger above. Use it on its own when you have a trigger of your own: `show(anchor)` opens it beside that element, `hide()` closes it. `size` sets the row height (`xs` 24, `sm` 32 by default, `md` 40, `lg` 48) and `placement` the side (`bottom-start` by default). You wire the trigger: `aria-haspopup`, `aria-expanded` from `ui-toggle`, and ↓ / ↑ if you want them.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="menu-own-trigger" kind="secondary" size="md" haspopup="menu">Sort contracts</ui-button>
  <span>Sorted by: <output id="menu-own-out">Expiry date</output></span>
  <ui-menu id="menu-own" label="Sort contracts" size="md">
    <ui-menu-item label="Contract name"></ui-menu-item>
    <ui-menu-item label="Expiry date"></ui-menu-item>
    <ui-menu-item label="Value, highest first"></ui-menu-item>
  </ui-menu>
</div>

<script type="module">
  const button = document.getElementById('menu-own-trigger');
  const menu = document.getElementById('menu-own');
  button.addEventListener('click', () => (menu.open ? menu.hide() : menu.show(button)));
  button.addEventListener('keydown', (event) => {
    if (menu.open || (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')) return;
    event.preventDefault();
    menu.show(button, event.key === 'ArrowUp' ? 'last' : 'first');
  });
  menu.addEventListener('ui-toggle', (event) => (button.expanded = event.detail.open));
  menu.addEventListener('ui-select', (event) => (document.getElementById('menu-own-out').value = event.detail.label));
</script>
```

React:

```tsx
import type { UiMenu as MenuElement } from '@purpurabog/ui';

const button = useRef<HTMLElement>(null);
const menu = useRef<MenuElement>(null);

<UiButton ref={button} kind="secondary" size="md" haspopup="menu" expanded={open} onClick={() => (open ? menu.current?.hide() : menu.current?.show(button.current!))}>
  Sort contracts
</UiButton>
<UiMenu ref={menu} label="Sort contracts" size="md" onUiToggle={(e) => setOpen(e.detail.open)} onUiSelect={(e) => setSort(e.detail.label)}>
  <UiMenuItem label="Contract name" />
  <UiMenuItem label="Expiry date" />
  <UiMenuItem label="Value, highest first" />
</UiMenu>
```

React + Tailwind:

```tsx
import { Menu, MenuItem, useMenuTrigger } from '@/components/ui/react-tw/menu';

const button = useRef<HTMLElement>(null);
// open state with the menu button keys: ↓ opens on the first item, ↑ on the last
const { open, setOpen, focus, onKeyDown, toggle } = useMenuTrigger();

<Button ref={button} kind="secondary" size="md" aria-haspopup="menu" aria-expanded={open} onClick={toggle} onKeyDown={onKeyDown}>
  Sort contracts
</Button>
<Menu open={open} onOpenChange={setOpen} anchor={button} initialFocus={focus} label="Sort contracts" size="md">
  <MenuItem label="Contract name" onClick={() => setSort('Contract name')} />
  <MenuItem label="Expiry date" onClick={() => setSort('Expiry date')} />
  <MenuItem label="Value, highest first" onClick={() => setSort('Value, highest first')} />
</Menu>
```

`match-width` (`matchWidth`) makes the menu as wide as the anchor.

## Disabled

`disabled` on a trigger greys it out and keeps the menu closed. Prefer hiding actions the user can never take, and disabling those that are only unavailable for now.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-menu-button label="Actions" kind="tertiary" disabled>
    <ui-menu-item label="Send for signature"></ui-menu-item>
  </ui-menu-button>
  <ui-overflow-menu label="Contract options" disabled>
    <ui-menu-item label="Edit"></ui-menu-item>
  </ui-overflow-menu>
  <ui-combo-button label="Save" size="md" disabled>
    <ui-menu-item label="Save as draft"></ui-menu-item>
  </ui-combo-button>
</div>
```

React:

```tsx
<UiMenuButton label="Actions" kind="tertiary" disabled>…</UiMenuButton>
<UiOverflowMenu label="Contract options" disabled>…</UiOverflowMenu>
<UiComboButton label="Save" size="md" disabled>…</UiComboButton>
```

React + Tailwind:

```tsx
<MenuButton label="Actions" kind="tertiary" disabled>…</MenuButton>
<OverflowMenu label="Contract options" disabled>…</OverflowMenu>
<ComboButton label="Save" size="md" disabled>…</ComboButton>
```

## Keyboard

| Key | On the trigger | In the menu |
|---|---|---|
| Enter, Space | Open the menu on the first item | Pick the focused item (or open its submenu) and close |
| ↓ | Open the menu on the first item | Next item, wrapping to the first; disabled items are skipped |
| ↑ | Open the menu on the last item | Previous item, wrapping to the last |
| Home / End | | First / last item |
| Letters | | Jump to the next item that starts with them |
| → (← right-to-left) | | Open the focused item's submenu |
| ← (→ right-to-left) | | In a submenu: close it and go back to its item |
| Esc | | Close this level and give focus back (in a submenu, only the submenu) |
| Tab | | Close the menu and give focus back to the trigger |

## Accessibility

- It follows the WAI-ARIA menu button pattern: the trigger has `aria-haspopup` and `aria-expanded`; the list has `role="menu"` named by the trigger's label; items are `menuitem`, `menuitemcheckbox` or `menuitemradio` with `aria-checked`.
- Focus moves into the menu when it opens. It goes back to the trigger when a key or a picked item closes the menu.
- The overflow menu's button is named by `label` and shows it in a tooltip. Make each label unique on the page.
- A menu is for actions. To pick a value for a form field, use a [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/) or a [Select](https://parntengza.github.io/kanok-ui-docs/en/select/).

Unstyled React parts with the same behaviour: [Headless Menu](https://parntengza.github.io/kanok-ui-docs/en/headless-menu/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-menu-button>` · React `UiMenuButton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `variant` |  |  |  | Same as `kind`, kept for teams used to `variant` (shadcn, MUI); `kind` is Carbon's name and the one in the docs |
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `label` | `label` | `string` | `''` |  |
| `kind` | `kind` | `MenuButtonKind` | `'primary'` | Carbon `kind`: primary, tertiary or ghost. |
| `size` | `size` | `Exclude<ButtonSize, 'xl' \| '2xl'>` | `'lg'` | sm 32 / md 40 / lg 48px (Carbon has no xl / 2xl here). |
| `placement` | `placement` | `MenuPlacement` | `'bottom'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `open` | `open` | `boolean` | `false` |  |

#### Properties

| Property | Type | Description |
|---|---|---|
| `variant` | `MenuButtonKind` | Same as `kind` (permanent alias for teams used to `variant`); a `variant` attribute works too. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-select` | `onUiSelect` | bubbles from the activated item: detail { value, label, checked } |
| `ui-toggle` | `onUiToggle` | detail: { open } |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-menu-item>`, `<ui-menu-divider>`, `<ui-menu-group>` |

#### CSS parts

| Part | Description |
|---|---|
| `trigger` | The `<ui-button>` |
| `menu` | The `<ui-menu>` |

### `<ui-overflow-menu>` · React `UiOverflowMenu`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `label` | `label` | `string` | `''` | Accessible name of the trigger and the menu. |
| `size` | `size` | `OverflowMenuSize` | `'md'` |  |
| `placement` | `placement` | `MenuPlacement` | `'bottom-start'` |  |
| `tooltip-placement` | `tooltipPlacement` | `TooltipPlacement` | `'bottom'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `open` | `open` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-select` | `onUiSelect` | bubbles from the activated item: detail { value, label, checked } |
| `ui-toggle` | `onUiToggle` | detail: { open } |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-menu-item>`, `<ui-menu-divider>`, `<ui-menu-group>` |
| `icon` | Replaces the "⋮" icon |

#### CSS parts

| Part | Description |
|---|---|
| `trigger` | The icon button |
| `menu` | The `<ui-menu>` |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-button-radius` |  | Corner radius of the trigger (the button setting) |
| `--ui-overflow-open-background` |  | / --ui-overflow-open-shadow - The trigger while open (default: it joins the menu, Carbon's look) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |

### `<ui-combo-button>` · React `UiComboButton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `label` | `label` | `string` | `''` | Primary action text. |
| `size` | `size` | `Exclude<ButtonSize, 'xl' \| '2xl'>` | `'lg'` | sm 32 / md 40 / lg 48px (Carbon has no xl / 2xl here). |
| `placement` | `placement` | `MenuPlacement` | `'bottom'` |  |
| `tooltip-placement` | `tooltipPlacement` | `TooltipPlacement` | `'bottom'` |  |
| `trigger-label` | `triggerLabel` | `string` | `''` | Name of the chevron button; defaults to the translation ("Additional actions"). |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `open` | `open` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-click` | `onUiClick` | the primary button was activated (not the chevron or a menu item) |
| `ui-select` | `onUiSelect` | bubbles from the activated item |
| `ui-toggle` | `onUiToggle` | detail: { open } |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-menu-item>` elements (secondary actions) |

#### CSS parts

| Part | Description |
|---|---|
| `primary` | The primary `<ui-button>` |
| `trigger` | The chevron `<ui-icon-button>` |
| `menu` | The `<ui-menu>` |

### `<ui-menu>` · React `UiMenu`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `open` | `open` | `boolean` | `false` |  |
| `label` | `label` | `string` | `''` | Accessible name of the menu (the trigger's label). |
| `size` | `size` | `MenuSize` | `'sm'` |  |
| `placement` | `placement` | `MenuPlacement` | `'bottom-start'` |  |
| `match-width` | `matchWidth` | `boolean` | `false` | Make the menu as wide as the anchor (Carbon menu button with `bottom` / `top`). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `anchor` | `Element \| null` | What the menu is positioned against; `show(anchor)` sets it. |

#### Methods

| Method | Description |
|---|---|
| `show(anchor, focus)` | Open next to `anchor`; `focus: 'last'` starts on the last item (Up Arrow on a menu button), `none` leaves focus where it is (a submenu opened by hover). |
| `focusItem(which)` | Focus the first or last enabled item. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } after it opens or closes |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-menu-item>`, `<ui-menu-divider>`, `<ui-menu-group>` |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-menu-padding` |  | / --ui-menu-border / --ui-menu-radius / --ui-menu-shadow - The menu box, as the dropdown lists |
| `--ui-menu-item-radius` |  | / --ui-menu-item-ink - Its rows (on `<ui-menu-item>`) |
| `--ui-menu-min-width` |  | / --ui-menu-max-width - Width range (default 160px to 288px; Kanok: 180px to 320px) |
| `--ui-menu-item-height` |  | / --ui-menu-item-active-outline / --ui-menu-item-active-background - Every row's height and the focused row's ring or fill (on `<ui-menu-item>`) |

### `<ui-menu-item>` · React `UiMenuItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `value` | `value` | `string` | `''` | Reported in `ui-select`; defaults to `label`. |
| `shortcut` | `shortcut` | `string` | `''` |  |
| `kind` | `kind` | `MenuItemKind` | `'default'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `selectable` | `selectable` | `boolean` | `false` | Carbon `MenuItemSelectable`: a `menuitemcheckbox` that toggles `checked`. |
| `checked` | `checked` | `boolean` | `false` |  |
| `danger-description` | `dangerDescription` | `string` | `''` |  |

#### Properties

| Property | Type | Description |
|---|---|---|
| `radio` | `boolean` | Set by `<ui-menu-group selection="single">`: this item is a `menuitemradio`. |

#### Methods

| Method | Description |
|---|---|
| `openSubmenu(focus)` | Open the submenu; `focus` picks the item that takes focus (`none` for hover). |
| `activate()` | What a click / Enter / Space does: opens the submenu, else toggles / selects and fires `ui-select`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-select` | `onUiSelect` | detail: { value, label, checked } when activated (not when disabled) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Extra label content after `label`; `<ui-menu-item>` children move to the submenu |
| `submenu` | The submenu's items (children that are menu items get this slot automatically) |
| `icon` | 16px icon (shown when any item in the menu has one — Carbon `renderIcon`) |

#### CSS parts

| Part | Description |
|---|---|
| `icon` | Icon cell |
| `label` | Label cell |
| `shortcut` | Shortcut hint |
| `submenu` | The nested `<ui-menu>` |
| `submenu-icon` | The chevron of an item with a submenu |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-menu-item-height` |  | Row height for every size (default 24 / 32 / 40 / 48px by size; Kanok: 32px) |
| `--ui-menu-item-active-outline` |  | / --ui-menu-item-active-background - The focused row: its ring and its fill (default focus, transparent) |
| `--ui-menu-item-pointer-outline` |  | The ring of a row focused by a mouse open or click, not the keyboard (default the focused row's ring, as Carbon; Kanok: none) |

### `<ui-menu-group>` · React `UiMenuGroup`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `selection` | `selection` | `'none' \| 'single'` | `'none'` |  |
| `value` | `value` | `string` | `''` | The checked item's value in `selection="single"`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-change` | `onUiChange` | detail: { value } when the checked radio item changes |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-menu-item>` elements |

### `<ui-menu-divider>` · React `UiMenuDivider`


