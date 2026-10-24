# Popover

A popover is a floating box with your own content beside a trigger: a few filters, a short form, settings for a table. It is Carbon's `Popover`, the box behind tooltips, toggletips and menus. You decide when it opens; `auto-close` lets Esc and a click outside close it.


HTML:

```html
<ui-popover id="popover-filters" label="Filter requests" auto-close>
  <ui-button slot="trigger" kind="tertiary">Filters</ui-button>
  <div style="display: grid; gap: 8px; padding: 16px; width: 240px">
    <strong>Filter requests</strong>
    <ui-checkbox checked>Mine</ui-checkbox>
    <ui-checkbox>Awaiting signature</ui-checkbox>
    <ui-checkbox>Archived</ui-checkbox>
  </div>
</ui-popover>

<script type="module">
  const popover = document.getElementById('popover-filters');
  popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
</script>
```

React:

```tsx
const [open, setOpen] = useState(false);

<UiPopover label="Filter requests" autoClose open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  <UiButton slot="trigger" kind="tertiary" onClick={() => setOpen(!open)}>Filters</UiButton>
  <div style={{ display: 'grid', gap: 8, padding: 16, width: 240 }}>
    <strong>Filter requests</strong>
    <UiCheckbox checked>Mine</UiCheckbox>
    <UiCheckbox>Awaiting signature</UiCheckbox>
    <UiCheckbox>Archived</UiCheckbox>
  </div>
</UiPopover>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(false);

<Popover label="Filter requests" autoClose open={open} onOpenChange={setOpen} trigger={<Button kind="tertiary" onClick={() => setOpen(!open)}>Filters</Button>}>
  <div className="grid w-60 gap-2 p-4">
    <strong>Filter requests</strong>
    <Checkbox label="Mine" defaultChecked />
    <Checkbox label="Awaiting signature" />
    <Checkbox label="Archived" />
  </div>
</Popover>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/popover
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-popover
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/popover.json
#    to its target:
#    components/ui/primitives/popover/popover.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-popup, shared-align, shared-element, shared-events, shared-field, shared-position, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-popover.json
#    to its target:
#    components/ui/react-tw/popover.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-floating, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Put the trigger in the `trigger` slot and the content inside. The popover doesn't open by itself: toggle `open` when the trigger is clicked.


HTML:

```html
<script type="module">import '@purpurabog/ui/popover';</script>

<ui-popover id="filters" label="Filter requests" auto-close>
  <ui-button slot="trigger" kind="tertiary">Filters</ui-button>
  <div style="padding: 16px">…</div>
</ui-popover>

<script type="module">
  const popover = document.getElementById('filters');
  popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
</script>
```

React:

```tsx
import { UiPopover, UiButton } from '@purpurabog/ui/react';

const [open, setOpen] = useState(false);

<UiPopover label="Filter requests" autoClose open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  <UiButton slot="trigger" kind="tertiary" onClick={() => setOpen(!open)}>Filters</UiButton>
  <div style={{ padding: 16 }}>…</div>
</UiPopover>
```

React + Tailwind:

```tsx
import { Popover } from '@/components/ui/react-tw/popover';
import { Button } from '@/components/ui/react-tw/button';

const [open, setOpen] = useState(false);

<Popover label="Filter requests" autoClose open={open} onOpenChange={setOpen} trigger={<Button kind="tertiary" onClick={() => setOpen(!open)}>Filters</Button>}>
  <div className="p-4">…</div>
</Popover>
```

`show()` and `hide()` on the element do the same as setting `open`. In React + Tailwind the trigger is the `trigger` prop: it gets `aria-expanded` and `aria-controls`.

## Popover, toggletip or modal?

| Component | Use it when |
|---|---|
| [Popover](https://parntengza.github.io/kanok-ui-docs/en/popover/) | Your own content beside the trigger, and the page around it stays usable. |
| [Toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) | An explanation with a link or a button, behind an info icon. It is a popover with the trigger and closing rules built in. |
| [Menu](https://parntengza.github.io/kanok-ui-docs/en/menu/) | A list of actions to pick from. |
| Modal | The user must finish or cancel a task before going back to the page. |

## Close it yourself

Without `auto-close`, only your code closes the popover: Esc and clicks outside do nothing. Use it when the user must answer, for example a "what's new" hint with its own button.


HTML:

```html
<ui-popover id="popover-hint" label="New feature" placement="right">
  <ui-button slot="trigger" kind="tertiary">Bulk signing</ui-button>
  <div style="display: grid; gap: 8px; padding: 16px; width: 240px">
    <strong>New: sign up to 50 contracts at once</strong>
    <span>Select the contracts in the list, then choose Sign.</span>
    <div><ui-button id="popover-hint-done" size="sm">Got it</ui-button></div>
  </div>
</ui-popover>

<script type="module">
  const popover = document.getElementById('popover-hint');
  const trigger = popover.querySelector('[slot="trigger"]');
  trigger.addEventListener('click', () => (popover.open = !popover.open));
  document.getElementById('popover-hint-done').addEventListener('click', () => {
    popover.open = false;
    trigger.focus();
  });
</script>
```

React:

```tsx
<UiPopover label="New feature" placement="right" open={open}>
  <UiButton slot="trigger" kind="tertiary" onClick={() => setOpen(!open)}>Bulk signing</UiButton>
  <div style={{ display: 'grid', gap: 8, padding: 16, width: 240 }}>
    <strong>New: sign up to 50 contracts at once</strong>
    <span>Select the contracts in the list, then choose Sign.</span>
    <div><UiButton size="sm" onClick={() => setOpen(false)}>Got it</UiButton></div>
  </div>
</UiPopover>
```

React + Tailwind:

```tsx
<Popover label="New feature" placement="right" open={open} trigger={<Button kind="tertiary" onClick={() => setOpen(!open)}>Bulk signing</Button>}>
  <div className="grid w-60 gap-2 p-4">
    <strong>New: sign up to 50 contracts at once</strong>
    <span>Select the contracts in the list, then choose Sign.</span>
    <div><Button size="sm" onClick={() => setOpen(false)}>Got it</Button></div>
  </div>
</Popover>
```

When your code closes the popover while focus is inside it, give focus back to the trigger yourself, as the demo does. With `auto-close`, Esc does that for you.

## Placement

The box opens below the trigger (`placement="bottom"`). `top`, `left`, `right` and the `-start` / `-end` forms move it; it flips when there is no room. `align` is Carbon's name for the same attribute.


HTML:

```html
<div id="popover-placement" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-popover placement="top" auto-close label="Above">
    <ui-button slot="trigger" kind="tertiary" size="sm">Top</ui-button>
    <div style="padding: 16px">Opens above</div>
  </ui-popover>
  <ui-popover placement="bottom-start" auto-close label="Below, start">
    <ui-button slot="trigger" kind="tertiary" size="sm">Bottom start</ui-button>
    <div style="padding: 16px">Lined up with the start edge</div>
  </ui-popover>
  <ui-popover placement="right" auto-close label="Right">
    <ui-button slot="trigger" kind="tertiary" size="sm">Right</ui-button>
    <div style="padding: 16px">Opens on the right</div>
  </ui-popover>
</div>

<script type="module">
  for (const popover of document.querySelectorAll('#popover-placement ui-popover')) {
    popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
  }
</script>
```

React:

```tsx
<UiPopover placement="top" autoClose label="Above" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>…</UiPopover>
<UiPopover placement="bottom-start" autoClose label="Below, start" …>…</UiPopover>
<UiPopover placement="right" autoClose label="Right" …>…</UiPopover>
```

React + Tailwind:

```tsx
<Popover placement="top" autoClose label="Above" open={open} onOpenChange={setOpen} trigger={…}>…</Popover>
<Popover placement="bottom-start" autoClose label="Below, start" …>…</Popover>
<Popover placement="right" autoClose label="Right" …>…</Popover>
```

## Caret and shadow

The caret (12×6px, 10px from the trigger) and the drop shadow are on by default. `caret="false"` puts the box flush against the trigger with no arrow; `drop-shadow="false"` removes the shadow, for a box on a layer that already stands out.


HTML:

```html
<div id="popover-look" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-popover caret="false" auto-close label="No caret">
    <ui-button slot="trigger" kind="tertiary" size="sm">No caret</ui-button>
    <div style="padding: 16px">Flush against the trigger</div>
  </ui-popover>
  <ui-popover drop-shadow="false" auto-close label="No shadow">
    <ui-button slot="trigger" kind="tertiary" size="sm">No shadow</ui-button>
    <div style="padding: 16px">No drop shadow</div>
  </ui-popover>
</div>

<script type="module">
  for (const popover of document.querySelectorAll('#popover-look ui-popover')) {
    popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
  }
</script>
```

React:

```tsx
<UiPopover caret={false} autoClose label="No caret" …>…</UiPopover>
<UiPopover dropShadow={false} autoClose label="No shadow" …>…</UiPopover>
```

React + Tailwind:

```tsx
<Popover caret={false} autoClose label="No caret" …>…</Popover>
<Popover dropShadow={false} autoClose label="No shadow" …>…</Popover>
```

## High contrast

`high-contrast` (`highContrast` in React) gives the box the inverse colours of a tooltip: dark in the light theme, light in the dark one.


HTML:

```html
<ui-popover id="popover-contrast" high-contrast auto-close label="Signing order">
  <ui-button slot="trigger" kind="tertiary">Signing order</ui-button>
  <div style="padding: 16px; width: 220px">Ananya signs first, then Somchai, then the customer.</div>
</ui-popover>

<script type="module">
  const popover = document.getElementById('popover-contrast');
  popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
</script>
```

React:

```tsx
<UiPopover highContrast autoClose label="Signing order" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  <UiButton slot="trigger" kind="tertiary" onClick={() => setOpen(!open)}>Signing order</UiButton>
  <div style={{ padding: 16, width: 220 }}>Ananya signs first, then Somchai, then the customer.</div>
</UiPopover>
```

React + Tailwind:

```tsx
<Popover highContrast autoClose label="Signing order" open={open} onOpenChange={setOpen} trigger={<Button kind="tertiary" onClick={() => setOpen(!open)}>Signing order</Button>}>
  <div className="w-56 p-4">Ananya signs first, then Somchai, then the customer.</div>
</Popover>
```

## Tab tip

`tab-tip` (Carbon's `isTabTip`) makes a square box with no caret, flush under the trigger, as if the two were one piece. Use it for settings behind an icon button in a toolbar, usually with `placement="bottom-end"`.


HTML:

```html
<div style="display: flex; justify-content: flex-end; background: var(--ui-layer-1)">
  <ui-popover id="popover-settings" tab-tip placement="bottom-end" auto-close label="Table settings">
    <ui-icon-button slot="trigger" label="Table settings">
      <svg viewBox="0 0 16 16"><path d="M13.5 8.4a5.4 5.4 0 0 0 0-.8l1.4-1.1-1.3-2.3-1.7.6a5 5 0 0 0-.7-.4L10.9 2.6H8.3L8 4.4l-.7.4-1.7-.6-1.3 2.3 1.4 1.1a5.4 5.4 0 0 0 0 .8L4.3 9.5l1.3 2.3 1.7-.6.7.4.3 1.8h2.6l.3-1.8.7-.4 1.7.6 1.3-2.3zM9.6 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>
    </ui-icon-button>
    <div style="display: grid; gap: 8px; padding: 16px; width: 200px">
      <strong>Columns</strong>
      <ui-checkbox checked>Owner</ui-checkbox>
      <ui-checkbox checked>Expiry date</ui-checkbox>
      <ui-checkbox>Department</ui-checkbox>
    </div>
  </ui-popover>
</div>

<script type="module">
  const popover = document.getElementById('popover-settings');
  popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
</script>
```

React:

```tsx
import { Settings as SettingsIcon } from '@carbon/icons-react';

<UiPopover tabTip placement="bottom-end" autoClose label="Table settings" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  <UiIconButton slot="trigger" label="Table settings" onClick={() => setOpen(!open)}><SettingsIcon /></UiIconButton>
  <div style={{ display: 'grid', gap: 8, padding: 16, width: 200 }}>…</div>
</UiPopover>
```

React + Tailwind:

```tsx
import { Settings as SettingsIcon } from '@carbon/icons-react';

<Popover tabTip placement="bottom-end" autoClose label="Table settings" open={open} onOpenChange={setOpen} trigger={<IconButton label="Table settings" onClick={() => setOpen(!open)}><SettingsIcon /></IconButton>}>
  <div className="grid w-50 gap-2 p-4">…</div>
</Popover>
```

## A small form

A popover can hold a short form, such as renaming a record in place. Prevent the submit, use the values, close the popover and give focus back to the trigger.


HTML:

```html
<ui-popover id="popover-rename" label="Rename contract" auto-close placement="bottom-start">
  <ui-button slot="trigger" kind="ghost" size="sm">Rename</ui-button>
  <form id="popover-rename-form" style="display: grid; gap: 16px; padding: 16px; width: 280px">
    <ui-text-input label="Contract name" name="name" value="Lease, Silom office" required></ui-text-input>
    <div style="display: flex; gap: 8px">
      <ui-button type="submit" size="sm">Save</ui-button>
      <ui-button id="popover-rename-cancel" kind="secondary" size="sm">Cancel</ui-button>
    </div>
  </form>
</ui-popover>
<p style="margin: 0">Name: <output id="popover-rename-out">Lease, Silom office</output></p>

<script type="module">
  const popover = document.getElementById('popover-rename');
  const trigger = popover.querySelector('[slot="trigger"]');
  const form = document.getElementById('popover-rename-form');
  const close = () => {
    popover.open = false;
    trigger.focus();
  };
  trigger.addEventListener('click', () => (popover.open = !popover.open));
  document.getElementById('popover-rename-cancel').addEventListener('click', close);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('popover-rename-out').value = new FormData(form).get('name');
    close();
  });
</script>
```

React:

```tsx
const [name, setName] = useState('Lease, Silom office');
const save = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setName(String(new FormData(e.currentTarget).get('name')));
  setOpen(false);
};

<UiPopover label="Rename contract" autoClose placement="bottom-start" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  <UiButton slot="trigger" kind="ghost" size="sm" onClick={() => setOpen(!open)}>Rename</UiButton>
  <form onSubmit={save} style={{ display: 'grid', gap: 16, padding: 16, width: 280 }}>
    <UiTextInput label="Contract name" name="name" value={name} required />
    <div style={{ display: 'flex', gap: 8 }}>
      <UiButton type="submit" size="sm">Save</UiButton>
      <UiButton kind="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</UiButton>
    </div>
  </form>
</UiPopover>
<p>Name: <output>{name}</output></p>
```

React + Tailwind:

```tsx
<Popover label="Rename contract" autoClose placement="bottom-start" open={open} onOpenChange={setOpen} trigger={<Button kind="ghost" size="sm" onClick={() => setOpen(!open)}>Rename</Button>}>
  <form onSubmit={save} className="grid w-70 gap-4 p-4">
    <TextInput label="Contract name" name="name" defaultValue={name} required />
    <div className="flex gap-2">
      <Button type="submit" size="sm">Save</Button>
      <Button kind="secondary" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
    </div>
  </form>
</Popover>
<p>Name: <output>{name}</output></p>
```

`save` and `name` are the same in both React versions. In React, give focus back to the trigger after `setOpen(false)` (a ref on it) when focus was inside.

## Keep it open

With `auto-close`, Esc and a click outside first fire `ui-request-close` with `detail.reason` (`escape` or `outside`). It is cancelable: `preventDefault()` keeps the box open, for example while a note isn't saved. `ui-toggle` fires after it opens or closes. Type a note below, then press Esc or click outside.


HTML:

```html
<ui-popover id="popover-note" label="Note for the signer" auto-close placement="bottom-start">
  <ui-button slot="trigger" kind="tertiary">Add a note</ui-button>
  <div style="display: grid; gap: 16px; padding: 16px; width: 280px">
    <ui-text-area id="popover-note-text" label="Note for the signer" rows="3"></ui-text-area>
    <div><ui-button id="popover-note-save" size="sm">Save note</ui-button></div>
  </div>
</ui-popover>
<p style="margin: 0">Last request: <output id="popover-note-out">none</output></p>

<script type="module">
  const popover = document.getElementById('popover-note');
  const trigger = popover.querySelector('[slot="trigger"]');
  const text = document.getElementById('popover-note-text');
  const out = document.getElementById('popover-note-out');
  trigger.addEventListener('click', () => (popover.open = !popover.open));
  popover.addEventListener('ui-request-close', (event) => {
    const unsaved = text.value.trim() !== '';
    out.value = unsaved ? `${event.detail.reason}, kept open: the note isn't saved` : event.detail.reason;
    if (unsaved) event.preventDefault();
  });
  document.getElementById('popover-note-save').addEventListener('click', () => {
    out.value = `saved "${text.value.trim()}"`;
    text.value = '';
    popover.open = false;
    trigger.focus();
  });
</script>
```

React:

```tsx
const [note, setNote] = useState('');

<UiPopover
  label="Note for the signer"
  autoClose
  placement="bottom-start"
  open={open}
  onUiToggle={(e) => setOpen(e.detail.open)}
  onUiRequestClose={(e) => note.trim() && e.preventDefault()}
>
  <UiButton slot="trigger" kind="tertiary" onClick={() => setOpen(!open)}>Add a note</UiButton>
  <UiTextArea label="Note for the signer" rows={3} value={note} onInput={(e) => setNote((e.target as { value: string }).value)} />
  <UiButton size="sm" onClick={save}>Save note</UiButton>
</UiPopover>
```

React + Tailwind:

```tsx
// open stays true unless you set it: ignore the request while the note isn't saved
<Popover
  label="Note for the signer"
  autoClose
  placement="bottom-start"
  open={open}
  onOpenChange={(next) => !note.trim() && setOpen(next)}
  trigger={<Button kind="tertiary" onClick={() => setOpen(!open)}>Add a note</Button>}
>
  <TextArea label="Note for the signer" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
  <Button size="sm" onClick={save}>Save note</Button>
</Popover>
```

## Keyboard

| Key | What it does |
|---|---|
| Tab | Moves through the trigger and the content in page order |
| Esc | With `auto-close`, from the trigger or the content: asks to close and gives focus back to the trigger. A control inside that uses Esc itself (an open dropdown) handles it first |
| Enter, Space on the trigger | Whatever your click handler does, usually toggles `open` |

## Accessibility

- The box has `role="group"` named by `label`. Give it a `label` that says what the content is.
- The popover sets `aria-expanded` on the trigger (`expanded` on a `<ui-button>` or `<ui-icon-button>`).
- Focus doesn't move into the box when it opens. Keep the content short and right after the trigger, so a keyboard user reaches it with the next Tab.
- For a task the user must finish before going on, use a modal instead.

Unstyled React parts with the same behaviour: [Headless Popover](https://parntengza.github.io/kanok-ui-docs/en/headless-popover/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-popover>` · React `UiPopover`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `open` | `open` | `boolean` | `false` |  |
| `placement` | `placement` | `Placement` | `'bottom'` |  |
| `caret` | `caret` | `boolean` | `true` | On by default; `caret="false"` hides it. |
| `drop-shadow` | `dropShadow` | `boolean` | `true` | On by default; `drop-shadow="false"` removes it. |
| `high-contrast` | `highContrast` | `boolean` | `false` |  |
| `tab-tip` | `tabTip` | `boolean` | `false` | Carbon `isTabTip`: square box flush against the trigger (toolbar settings panels). |
| `auto-close` | `autoClose` | `boolean` | `false` | Close on Escape and on clicks outside the trigger and the box. |
| `label` | `label` | `string` | `''` | Accessible name of the box (`role=group`). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } after it opens or closes |
| `ui-request-close` | `onUiRequestClose` | cancelable; `auto-close` fires it before closing on Escape / outside click |

#### Slots

| Slot | Description |
|---|---|
| `trigger` | The element the box is positioned against |
| (default) | Box content |

#### CSS parts

| Part | Description |
|---|---|
| `content` | The floating box |
| `caret` | The arrow |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-menu-border` |  | / --ui-menu-radius - Border and corners of the bubble (the menu settings) |


