# Truncated text

Truncated text cuts a long text to a few lines with an ellipsis, and only when it doesn't fit, lets the user read the rest: in a tooltip, or with a "View more" toggle. It comes from Carbon for IBM Products. Use it for descriptions and notes in cards, tables and lists, where a long text would push everything else down.


HTML:

```html
<div style="inline-size: 320px; max-inline-size: 100%">
  <ui-truncated-text value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, delivered monthly from January to December 2026, with a price review after six months."></ui-truncated-text>
</div>
```

React:

```tsx
<UiTruncatedText value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, …" />
```

React + Tailwind:

```tsx
<TruncatedText value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, …" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/truncated-text
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-truncated-text
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/truncated-text.json
#    to its target:
#    components/ui/primitives/truncated-text/truncated-text.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-motion, core-position, shared-align, shared-element, shared-events, shared-field, shared-localize, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-truncated-text.json
#    to its target:
#    components/ui/react-tw/truncated-text.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, tw-i18n, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/truncated-text';</script>

<ui-truncated-text value="Supply of A4 paper, toner and stationery for the head office …"></ui-truncated-text>
```

React:

```tsx
import { UiTruncatedText } from '@purpurabog/ui/react';

<UiTruncatedText value="Supply of A4 paper, toner and stationery for the head office …" />
```

React + Tailwind:

```tsx
import { TruncatedText } from '@/components/ui/react-tw/truncated-text';

<TruncatedText value="Supply of A4 paper, toner and stationery for the head office …" />
```

The text goes in `value`, not in the element's content. The element fills its container's width, so the container decides where the lines break.

## Full text in a tooltip

`type="tooltip"` is the default. When the text is cut, it becomes a button that shows the whole text in a tooltip on hover and keyboard focus. Use it where there is no room for a toggle, such as table cells.


HTML:

```html
<div style="inline-size: 240px; max-inline-size: 100%">
  <ui-truncated-text lines="1" value="CT-2026-0142: Office supplies for the head office and three regional branches"></ui-truncated-text>
</div>
```

React:

```tsx
<div style={{ inlineSize: 240 }}>
  <UiTruncatedText lines={1} value="CT-2026-0142: Office supplies for the head office and three regional branches" />
</div>
```

React + Tailwind:

```tsx
<div className="w-60">
  <TruncatedText lines={1} value="CT-2026-0142: Office supplies for the head office and three regional branches" />
</div>
```

## View more

`type="expand"` adds a "View more" toggle under a cut text. It opens the rest with a short height animation (none with reduced motion), and becomes "View less". Use it for longer notes that people read in full.


HTML:

```html
<div style="inline-size: 360px; max-inline-size: 100%">
  <ui-truncated-text type="expand" lines="3" value="Finance asks for two changes before signing: the payment term should be 30 days after delivery instead of 15, and the price review after six months needs a cap of 5%. Legal has no further comments. Once the vendor accepts both changes, send the contract to the department head for the final approval, then to the vendor for signature."></ui-truncated-text>
</div>
```

React:

```tsx
<UiTruncatedText type="expand" lines={3} value={reviewNote} />
```

React + Tailwind:

```tsx
<TruncatedText type="expand" lines={3} value={reviewNote} />
```

## Only when it doesn't fit

The element measures the text. A text that fits shows as it is, with no ellipsis, no tooltip button and no toggle; it measures again when the box resizes or `value` changes.


HTML:

```html
<div style="inline-size: 320px; max-inline-size: 100%; display: grid; gap: 16px">
  <ui-truncated-text type="expand" value="Reviewed by finance. No changes."></ui-truncated-text>
  <ui-truncated-text type="expand" value="Reviewed by finance. The payment term should be 30 days after delivery instead of 15, and the price review after six months needs a cap of 5%."></ui-truncated-text>
</div>
```

React:

```tsx
<UiTruncatedText type="expand" value="Reviewed by finance. No changes." />
<UiTruncatedText type="expand" value="Reviewed by finance. The payment term should be 30 days after delivery instead of 15, …" />
```

React + Tailwind:

```tsx
<TruncatedText type="expand" value="Reviewed by finance. No changes." />
<TruncatedText type="expand" value="Reviewed by finance. The payment term should be 30 days after delivery instead of 15, …" />
```

## Lines

`lines` is how many lines show before the ellipsis: 2 by default. `0` shows the whole text.


HTML:

```html
<div style="inline-size: 320px; max-inline-size: 100%; display: grid; gap: 16px">
  <ui-truncated-text lines="1" value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, delivered monthly from January to December 2026."></ui-truncated-text>
  <ui-truncated-text lines="3" value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, delivered monthly from January to December 2026, with a price review after six months and a cap of 5% on any increase."></ui-truncated-text>
  <ui-truncated-text lines="0" value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, delivered monthly from January to December 2026."></ui-truncated-text>
</div>
```

React:

```tsx
<UiTruncatedText lines={1} value={scope} />
<UiTruncatedText lines={3} value={scope} />
<UiTruncatedText lines={0} value={scope} />
```

React + Tailwind:

```tsx
<TruncatedText lines={1} value={scope} />
<TruncatedText lines={3} value={scope} />
<TruncatedText lines={0} value={scope} />
```

## Toggle words

`expand-label` and `collapse-label` (`expandLabel`, `collapseLabel`) replace "View more" and "View less" (which follow the page's language). Keep them short and say what opens.


HTML:

```html
<div style="inline-size: 320px; max-inline-size: 100%">
  <ui-truncated-text type="expand" expand-label="Read the full note" collapse-label="Hide the note" value="Legal: clause 7.2 (late delivery penalty) should refer to working days, not calendar days. Clause 9 (termination) is fine as written. Please send the revised draft by Friday."></ui-truncated-text>
</div>
```

React:

```tsx
<UiTruncatedText type="expand" expandLabel="Read the full note" collapseLabel="Hide the note" value={legalNote} />
```

React + Tailwind:

```tsx
<TruncatedText type="expand" expandLabel="Read the full note" collapseLabel="Hide the note" value={legalNote} />
```

## Tooltip side

`placement` sets the tooltip's side: `top` (the default), `bottom`, `left`, `right`, each with `-start` or `-end`. `align` is Carbon's name for it.


HTML:

```html
<div style="inline-size: 240px; max-inline-size: 100%">
  <ui-truncated-text lines="1" placement="bottom-start" value="Vendor: Siam Office Supplies and Printing Co., Ltd. (head office)"></ui-truncated-text>
</div>
```

React:

```tsx
<UiTruncatedText lines={1} placement="bottom-start" value="Vendor: Siam Office Supplies and Printing Co., Ltd. (head office)" />
```

React + Tailwind:

```tsx
<TruncatedText lines={1} placement="bottom-start" value="Vendor: Siam Office Supplies and Printing Co., Ltd. (head office)" />
```

## Open from code

`expanded` shows an expandable text in full; set it to open or close several texts at once. Set from code, it changes without the animation. `ui-toggle` fires with `detail.expanded` when the user presses the toggle. In React + Tailwind, hold it with `expanded` and `onExpandedChange`, or start with `defaultExpanded`.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="truncated-text-open-all" kind="tertiary" size="sm">Open all notes</ui-button>
  <ui-button id="truncated-text-close-all" kind="ghost" size="sm">Close all notes</ui-button>
</div>
<div id="truncated-text-notes" style="inline-size: 360px; max-inline-size: 100%; display: grid; gap: 16px">
  <ui-truncated-text type="expand" value="Finance: the payment term should be 30 days after delivery instead of 15, and the price review after six months needs a cap of 5%. Everything else is fine."></ui-truncated-text>
  <ui-truncated-text type="expand" value="Legal: clause 7.2 (late delivery penalty) should refer to working days, not calendar days. Clause 9 (termination) is fine as written."></ui-truncated-text>
</div>
<p>Last toggle: <output id="truncated-text-open-out">none yet</output></p>

<script type="module">
  const notes = document.getElementById('truncated-text-notes').querySelectorAll('ui-truncated-text');
  const out = document.getElementById('truncated-text-open-out');
  const setAll = (open) => notes.forEach((note) => { note.expanded = open; });
  document.getElementById('truncated-text-open-all').addEventListener('click', () => setAll(true));
  document.getElementById('truncated-text-close-all').addEventListener('click', () => setAll(false));
  notes.forEach((note) => note.addEventListener('ui-toggle', (event) => {
    out.value = `expanded: ${event.detail.expanded}`;
  }));
</script>
```

React:

```tsx
const [open, setOpen] = useState<Record<string, boolean>>({});
const setAll = (value: boolean) => setOpen(Object.fromEntries(notes.map((n) => [n.id, value])));

<UiButton kind="tertiary" size="sm" onClick={() => setAll(true)}>Open all notes</UiButton>
<UiButton kind="ghost" size="sm" onClick={() => setAll(false)}>Close all notes</UiButton>
{notes.map((note) => (
  <UiTruncatedText
    key={note.id}
    type="expand"
    value={note.text}
    expanded={!!open[note.id]}
    onUiToggle={(e) => setOpen((o) => ({ ...o, [note.id]: e.detail.expanded }))}
  />
))}
```

React + Tailwind:

```tsx
const [open, setOpen] = useState<Record<string, boolean>>({});
const setAll = (value: boolean) => setOpen(Object.fromEntries(notes.map((n) => [n.id, value])));

<Button kind="tertiary" size="sm" onClick={() => setAll(true)}>Open all notes</Button>
<Button kind="ghost" size="sm" onClick={() => setAll(false)}>Close all notes</Button>
{notes.map((note) => (
  <TruncatedText
    key={note.id}
    type="expand"
    value={note.text}
    expanded={!!open[note.id]}
    onExpandedChange={(value) => setOpen((o) => ({ ...o, [note.id]: value }))}
  />
))}
```

## It follows its box

The text is measured again whenever its box resizes, so the ellipsis, the tooltip button and the toggle come and go with the layout. Drag the corner of the box below to see it.


HTML:

```html
<div style="inline-size: 280px; max-inline-size: 100%; resize: horizontal; overflow: auto; padding: 8px; border: 1px dashed var(--ui-hairline)">
  <ui-truncated-text type="expand" value="Supply of A4 paper, toner and stationery for the head office and the three regional branches, delivered monthly from January to December 2026."></ui-truncated-text>
</div>
```

React:

```tsx
<div style={{ inlineSize: 280, resize: 'horizontal', overflow: 'auto' }}>
  <UiTruncatedText type="expand" value={scope} />
</div>
```

React + Tailwind:

```tsx
<div className="w-70 resize-x overflow-auto">
  <TruncatedText type="expand" value={scope} />
</div>
```

## Style a cut text

While the text doesn't fit its lines, the element has `data-overflowing` (kept while it is open). Style on it, for example to mark notes that have more to read. The text itself is the `content` part. In React + Tailwind the attribute is on the outer `<div>`, so use `data-overflowing:` classes.


HTML:

```html
<style>
  #truncated-text-marked ui-truncated-text[data-overflowing] {
    border-inline-start: 2px solid var(--ui-border-interactive);
    padding-inline-start: 8px;
  }
</style>
<div id="truncated-text-marked" style="inline-size: 320px; max-inline-size: 100%; display: grid; gap: 16px">
  <ui-truncated-text lines="1" value="Approved by the department head."></ui-truncated-text>
  <ui-truncated-text lines="1" value="Approved with a condition: the vendor must send the delivery schedule before the first order."></ui-truncated-text>
</div>
```

React:

```tsx
/* CSS: ui-truncated-text[data-overflowing] { border-inline-start: 2px solid var(--ui-border-interactive); padding-inline-start: 8px; } */
<UiTruncatedText lines={1} value="Approved by the department head." />
<UiTruncatedText lines={1} value="Approved with a condition: the vendor must send the delivery schedule before the first order." />
```

React + Tailwind:

```tsx
const marked = 'data-overflowing:border-s-2 data-overflowing:border-border-interactive data-overflowing:ps-2';

<TruncatedText lines={1} className={marked} value="Approved by the department head." />
<TruncatedText lines={1} className={marked} value="Approved with a condition: the vendor must send the delivery schedule before the first order." />
```

## It takes the font around it

The text has no font of its own: it uses the font, size and colour of where it sits. Put it inside a heading, a caption or a table cell, and it looks like them.


HTML:

```html
<div style="inline-size: 320px; max-inline-size: 100%; padding: 16px; background: var(--ui-layer-1)">
  <div style="font: var(--ui-font-heading-03)">
    <ui-truncated-text lines="1" value="Office supplies for the head office and regional branches"></ui-truncated-text>
  </div>
  <div style="font: var(--ui-font-caption); color: var(--ui-ink-muted); margin-block-start: 8px">
    <ui-truncated-text lines="2" value="Procurement · 120,000 THB · 1 Jan to 31 Dec 2026 · Siam Office Supplies and Printing Co., Ltd. · awaiting signature"></ui-truncated-text>
  </div>
</div>
```

React:

```tsx
<div style={{ font: 'var(--ui-font-heading-03)' }}>
  <UiTruncatedText lines={1} value={contract.title} />
</div>
<div style={{ font: 'var(--ui-font-caption)', color: 'var(--ui-ink-muted)' }}>
  <UiTruncatedText value={contract.summary} />
</div>
```

React + Tailwind:

```tsx
<div className="type-heading-03">
  <TruncatedText lines={1} value={contract.title} />
</div>
<div className="type-caption text-ink-muted">
  <TruncatedText value={contract.summary} />
</div>
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves to a cut tooltip text (its tooltip shows) or to the toggle |
| Enter, Space | On the toggle: opens or closes the text |
| Esc | Hides the tooltip |

## Accessibility

- A cut tooltip text is a button named by the whole text, so screen readers read all of it, not the cut part.
- The toggle has `aria-expanded` and `aria-controls` pointing at the text.
- A text that fits is plain text: no button, nothing extra to tab through.
- Don't cut text people must read to finish a task (an error, a legal condition they accept). Show it in full.

Unstyled React parts with the same behaviour: [Headless Truncated text](https://parntengza.github.io/kanok-ui-docs/en/headless-truncated-text/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-truncated-text>` · React `UiTruncatedText`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (the tooltip's side) |
| `value` | `value` | `string` | `''` | The text. |
| `lines` | `lines` | `number` | `2` | Lines shown before the ellipsis; 0 = all. |
| `type` | `type` | `TruncatedTextType` | `'tooltip'` | What a truncated text offers: the whole text in a tooltip, or a toggle that expands it. |
| `placement` | `placement` | `Placement` | `'top'` | The tooltip's side. |
| `expand-label` | `expandLabel` | `string` | `''` | The expand toggle's text (default "View more", translated). |
| `collapse-label` | `collapseLabel` | `string` | `''` | The collapse toggle's text (default "View less", translated). |
| `expanded` | `expanded` | `boolean` | `false` | Whether an expandable text shows in full. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded } when the toggle opens or closes the text |

#### CSS parts

| Part | Description |
|---|---|
| `content` | The text |
| `trigger` | The button around the text of a truncated `type="tooltip"` |
| `toggle` | The expand / collapse button |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |


