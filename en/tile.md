# Tile

A tile is a plain box on the next layer colour: 16px padding, no border, no shadow. It groups content on a dashboard or a summary page. With `href` the whole tile becomes one link. Carbon has four more kinds; here they are `ui-expandable-tile`, `ui-selectable-tile` and `ui-radio-tile`.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px">
  <ui-tile>
    <p style="margin: 0 0 8px; font: var(--ui-font-caption); color: var(--ui-ink-muted)">Awaiting signature</p>
    <p style="margin: 0; font: var(--ui-font-heading-04)">12</p>
  </ui-tile>
  <ui-tile>
    <p style="margin: 0 0 8px; font: var(--ui-font-caption); color: var(--ui-ink-muted)">Signed this month</p>
    <p style="margin: 0; font: var(--ui-font-heading-04)">48</p>
  </ui-tile>
  <ui-tile>
    <p style="margin: 0 0 8px; font: var(--ui-font-caption); color: var(--ui-ink-muted)">Expiring in 30 days</p>
    <p style="margin: 0; font: var(--ui-font-heading-04)">5</p>
  </ui-tile>
</div>
```

React:

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
  <UiTile>
    <p className="caption">Awaiting signature</p>
    <p className="figure">12</p>
  </UiTile>
  <UiTile>
    <p className="caption">Signed this month</p>
    <p className="figure">48</p>
  </UiTile>
  <UiTile>
    <p className="caption">Expiring in 30 days</p>
    <p className="figure">5</p>
  </UiTile>
</div>
```

React + Tailwind:

```tsx
<div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
  <Tile>
    <p className="mb-2 type-caption text-ink-muted">Awaiting signature</p>
    <p className="type-heading-04">12</p>
  </Tile>
  <Tile>
    <p className="mb-2 type-caption text-ink-muted">Signed this month</p>
    <p className="type-heading-04">48</p>
  </Tile>
  <Tile>
    <p className="mb-2 type-caption text-ink-muted">Expiring in 30 days</p>
    <p className="type-heading-04">5</p>
  </Tile>
</div>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/tile
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-tile
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tile.json
#    to its target:
#    components/ui/primitives/tile/expandable-tile.ts
#    components/ui/primitives/tile/radio-tile.ts
#    components/ui/primitives/tile/selectable-tile.ts
#    components/ui/primitives/tile/selection-tiles-shared.ts
#    components/ui/primitives/tile/selection-tiles.ts
#    components/ui/primitives/tile/tile.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    checkbox, radio, shared-element, shared-events, shared-field, shared-localize, shared-navigate, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-tile.json
#    to its target:
#    components/ui/react-tw/tile.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-checkbox, tw-field, tw-i18n, tw-radio-group, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Each kind has its own module: `tile` for `ui-tile`, `expandable-tile`, and `selection-tiles` for the selectable and radio tiles.


HTML:

```html
<script type="module">
  import '@purpurabog/ui/tile';
  import '@purpurabog/ui/expandable-tile';
  import '@purpurabog/ui/selection-tiles';
</script>

<ui-tile>Contracts awaiting signature: 12</ui-tile>
```

React:

```tsx
import { UiTile, UiExpandableTile, UiSelectableTile, UiRadioTile } from '@purpurabog/ui/react';

<UiTile>Contracts awaiting signature: 12</UiTile>
```

React + Tailwind:

```tsx
import { Tile, ExpandableTile, SelectableTile, RadioTile } from '@/components/ui/react-tw/tile';

<Tile>Contracts awaiting signature: 12</Tile>
```

## Which tile?

| Tile | Element | Use it for |
|---|---|---|
| Tile | `ui-tile` | A box of content: a figure, a short summary. |
| Clickable tile | `ui-tile href` | The whole tile goes to one page. |
| Expandable tile | `ui-expandable-tile` | A summary that opens to show more. |
| Selectable tile | `ui-selectable-tile` | A checkbox with room for a title and a description. More on the [checkbox page](https://parntengza.github.io/kanok-ui-docs/en/checkbox/#selectable-tiles). |
| Radio tile | `ui-radio-tile` | A radio option with room for a title and a description. More on the [radio page](https://parntengza.github.io/kanok-ui-docs/en/radio/#radio-tiles). |

For a box with a header, media and actions, use a [Card](https://parntengza.github.io/kanok-ui-docs/en/card/).

## Content

Put any content in a tile: headings, text, a small table. A tile is at least 64px tall and 128px wide and fills its column, so lay several out with CSS grid. The text inside is body-compact-01 unless you set another font.


HTML:

```html
<ui-tile style="max-width: 420px">
  <h3 style="margin: 0 0 8px; font: var(--ui-font-heading-02)">Office lease, Silom branch</h3>
  <p style="margin: 0 0 16px">Three-year lease from 1 January 2027. Rent is paid on the 5th of each month.</p>
  <p style="margin: 0; color: var(--ui-ink-muted)">Owner: Legal department</p>
</ui-tile>
```

React:

```tsx
<UiTile style={{ maxWidth: 420 }}>
  <h3>Office lease, Silom branch</h3>
  <p>Three-year lease from 1 January 2027. Rent is paid on the 5th of each month.</p>
  <p>Owner: Legal department</p>
</UiTile>
```

React + Tailwind:

```tsx
<Tile className="max-w-[420px]">
  <h3 className="mb-2 type-heading-02">Office lease, Silom branch</h3>
  <p className="mb-4">Three-year lease from 1 January 2027. Rent is paid on the 5th of each month.</p>
  <p className="text-ink-muted">Owner: Legal department</p>
</Tile>
```

## Clickable tile

With `href` the whole tile is one link and a single tab stop; the pointer turns its fill to the hover colour. Its text is the link's name, so keep it short, and don't put other buttons or links inside. As in Carbon, a linked tile has no icon until you give it one in the `icon` slot (the `icon` prop in React + Tailwind): 20px, 12px from the bottom-end corner.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px">
  <ui-tile href="#accessibility">
    <h3 style="margin: 0 0 8px; font: var(--ui-font-heading-02)">Contracts awaiting signature</h3>
    <p style="margin: 0 0 24px">12 contracts, 3 overdue</p>
    <svg slot="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m11.8 2.8-.9.9 5.6 5.7H1.7v1.2h14.8l-5.6 5.7.9.9 7.2-7.2z" /></svg>
  </ui-tile>
  <ui-tile href="#accessibility">
    <h3 style="margin: 0 0 8px; font: var(--ui-font-heading-02)">Approval requests</h3>
    <p style="margin: 0 0 24px">4 waiting for you</p>
    <svg slot="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m11.8 2.8-.9.9 5.6 5.7H1.7v1.2h14.8l-5.6 5.7.9.9 7.2-7.2z" /></svg>
  </ui-tile>
</div>
```

React:

```tsx
const arrow = <svg slot="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m11.8 2.8-.9.9 5.6 5.7H1.7v1.2h14.8l-5.6 5.7.9.9 7.2-7.2z" /></svg>;

<UiTile href="/contracts?status=awaiting">
  <h3>Contracts awaiting signature</h3>
  <p>12 contracts, 3 overdue</p>
  {arrow}
</UiTile>
<UiTile href="/approvals">
  <h3>Approval requests</h3>
  <p>4 waiting for you</p>
  {arrow}
</UiTile>
```

React + Tailwind:

```tsx
const arrow = <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m11.8 2.8-.9.9 5.6 5.7H1.7v1.2h14.8l-5.6 5.7.9.9 7.2-7.2z" /></svg>;

<Tile href="/contracts?status=awaiting" icon={arrow}>
  <h3 className="mb-2 type-heading-02">Contracts awaiting signature</h3>
  <p className="mb-6">12 contracts, 3 overdue</p>
</Tile>
<Tile href="/approvals" icon={arrow}>
  <h3 className="mb-2 type-heading-02">Approval requests</h3>
  <p className="mb-6">4 waiting for you</p>
</Tile>
```

`target="_blank"` opens the link in a new tab; the tile then adds "(opens in a new tab)" for screen readers and `rel="noopener noreferrer"`.

## Disabled clickable tile

`disabled` on a linked tile turns it into plain greyed text with no link (Carbon's disabled `ClickableTile`), for a page the user can't open right now. Say why in the tile.


HTML:

```html
<ui-tile href="#accessibility" disabled style="max-width: 320px">
  <h3 style="margin: 0 0 8px; font: inherit; font-weight: 600">Annual report 2026</h3>
  <p style="margin: 0">Available after the books close on 31 January</p>
</ui-tile>
```

React:

```tsx
<UiTile href="/reports/2026" disabled style={{ maxWidth: 320 }}>
  <h3>Annual report 2026</h3>
  <p>Available after the books close on 31 January</p>
</UiTile>
```

React + Tailwind:

```tsx
<Tile href="/reports/2026" disabled className="max-w-[320px]">
  <h3 className="mb-2 font-semibold">Annual report 2026</h3>
  <p>Available after the books close on 31 January</p>
</Tile>
```

## Route with your SPA router

A plain click on a linked tile first fires a cancelable `ui-navigate` with `{ href }`. Cancel it and let your router change the page; one listener on `document` covers every element, see [Frameworks](https://parntengza.github.io/kanok-ui-docs/en/frameworks/#route-links-with-your-spa-router). The demo cancels it and shows the address instead.


HTML:

```html
<ui-tile id="tile-route" href="/contracts/C-2026-014" style="max-width: 320px">
  <h3 style="margin: 0 0 8px; font: var(--ui-font-heading-02)">C-2026-014</h3>
  <p style="margin: 0">Supply agreement, Chiang Mai plant</p>
</ui-tile>
<p>Router would open: <output id="tile-route-out">nothing yet</output></p>

<script type="module">
  const tile = document.getElementById('tile-route');
  const out = document.getElementById('tile-route-out');
  tile.addEventListener('ui-navigate', (event) => {
    event.preventDefault();
    out.value = event.detail.href;
  });
</script>
```

React:

```tsx
const navigate = useNavigate(); // your router

<UiTile
  href="/contracts/C-2026-014"
  onUiNavigate={(e) => {
    e.preventDefault();
    navigate(e.detail.href);
  }}
>
  <h3>C-2026-014</h3>
  <p>Supply agreement, Chiang Mai plant</p>
</UiTile>
```

React + Tailwind:

```tsx
// the tile is a real <a>: wrap it in your router's link, or handle the click
<Tile
  href="/contracts/C-2026-014"
  onClick={(e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate('/contracts/C-2026-014');
  }}
>
  <h3 className="mb-2 type-heading-02">C-2026-014</h3>
  <p>Supply agreement, Chiang Mai plant</p>
</Tile>
```

## On a layer

A tile draws itself in the layer colour it sits on. Inside a `ui-layer` it takes the next one, so it still stands out from a grey panel.


HTML:

```html
<ui-layer level="1" with-background style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; padding: 16px">
  <ui-tile><b>On layer 1</b><br />The tile takes layer 2.</ui-tile>
  <ui-tile href="#accessibility"><b>Clickable</b><br />Its hover follows the layer too.</ui-tile>
</ui-layer>
```

React:

```tsx
<UiLayer level={1} withBackground style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, padding: 16 }}>
  <UiTile><b>On layer 1</b><br />The tile takes layer 2.</UiTile>
  <UiTile href="/contracts"><b>Clickable</b><br />Its hover follows the layer too.</UiTile>
</UiLayer>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-layer
import { Layer } from '@/components/ui/react-tw/layer';

<Layer level={1} withBackground className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-4">
  <Tile><b>On layer 1</b><br />The tile takes layer 2.</Tile>
  <Tile href="/contracts"><b>Clickable</b><br />Its hover follows the layer too.</Tile>
</Layer>
```

More on layers: [Layer](https://parntengza.github.io/kanok-ui-docs/en/layer/).

## Expandable tile

`ui-expandable-tile` shows a summary and opens to show more. The summary (`slot="summary"`) sits inside the toggle button, so keep it to text; put links, fields and buttons in the revealed part. The chevron in the bottom-end corner turns when it opens.


HTML:

```html
<ui-expandable-tile style="max-width: 560px">
  <span slot="summary"><b>Signing options</b><br />Retention, watermark, signer records</span>
  <p style="margin: 16px 0 0">Signed copies are kept for 10 years. Every page carries a watermark with the contract number, and the signer's IP address is recorded.</p>
</ui-expandable-tile>
```

React:

```tsx
<UiExpandableTile style={{ maxWidth: 560 }}>
  <span slot="summary"><b>Signing options</b><br />Retention, watermark, signer records</span>
  <p>Signed copies are kept for 10 years. Every page carries a watermark with the contract number, and the signer's IP address is recorded.</p>
</UiExpandableTile>
```

React + Tailwind:

```tsx
<ExpandableTile className="max-w-[560px]" summary={<><b>Signing options</b><br />Retention, watermark, signer records</>}>
  <p className="mt-4">Signed copies are kept for 10 years. Every page carries a watermark with the contract number, and the signer's IP address is recorded.</p>
</ExpandableTile>
```

## Open state and events

`expanded` opens the tile (start it open by setting it). After each toggle `ui-toggle` fires with `detail.expanded`. `toggle()` on the element opens or closes it from your code; `toggle(true)` only opens.


HTML:

```html
<ui-expandable-tile id="tile-expand" expanded style="max-width: 560px">
  <span slot="summary"><b>Payment schedule</b><br />12 instalments</span>
  <p style="margin: 16px 0 0">5th of each month, 85,000 baht, by bank transfer.</p>
</ui-expandable-tile>
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="tile-expand-open" kind="tertiary" size="sm">Open</ui-button>
  <span>Expanded: <output id="tile-expand-out"></output></span>
</div>

<script type="module">
  const tile = document.getElementById('tile-expand');
  const out = document.getElementById('tile-expand-out');
  out.value = tile.expanded;
  tile.addEventListener('ui-toggle', (event) => (out.value = event.detail.expanded));
  document.getElementById('tile-expand-open').addEventListener('click', () => tile.toggle(true));
</script>
```

React:

```tsx
const [expanded, setExpanded] = useState(true);

<UiExpandableTile expanded={expanded} onUiToggle={(e) => setExpanded(e.detail.expanded)}>
  <span slot="summary"><b>Payment schedule</b><br />12 instalments</span>
  <p>5th of each month, 85,000 baht, by bank transfer.</p>
</UiExpandableTile>
<UiButton kind="tertiary" size="sm" onClick={() => setExpanded(true)}>Open</UiButton>
<p>Expanded: <output>{String(expanded)}</output></p>
```

React + Tailwind:

```tsx
const [expanded, setExpanded] = useState(true);

<ExpandableTile expanded={expanded} onToggle={setExpanded} summary={<><b>Payment schedule</b><br />12 instalments</>}>
  <p className="mt-4">5th of each month, 85,000 baht, by bank transfer.</p>
</ExpandableTile>
<Button kind="tertiary" size="sm" onClick={() => setExpanded(true)}>Open</Button>
<p>Expanded: <output>{String(expanded)}</output></p>
```

React + Tailwind also takes `defaultExpanded` for a tile you don't control.

## Keep it open

Before it changes, the tile fires a cancelable `ui-before-toggle` with the state it is about to take. Cancel it to keep the tile as it is, for example while a note inside isn't saved. In React + Tailwind, return `false` from `onBeforeToggle`. Type a note, then try to close the tile.


HTML:

```html
<ui-expandable-tile id="tile-note" expanded style="max-width: 560px">
  <span slot="summary"><b>Note for the approver</b></span>
  <div style="display: grid; gap: 16px; margin-top: 16px">
    <ui-text-area id="tile-note-text" label="Note" rows="2"></ui-text-area>
    <div><ui-button id="tile-note-save" size="sm">Save note</ui-button></div>
  </div>
</ui-expandable-tile>
<p>Last attempt: <output id="tile-note-out">none</output></p>

<script type="module">
  const tile = document.getElementById('tile-note');
  const text = document.getElementById('tile-note-text');
  const out = document.getElementById('tile-note-out');
  tile.addEventListener('ui-before-toggle', (event) => {
    if (!event.detail.expanded && text.value.trim() !== '') {
      event.preventDefault();
      out.value = 'kept open: the note isn\'t saved';
    } else {
      out.value = event.detail.expanded ? 'opened' : 'closed';
    }
  });
  document.getElementById('tile-note-save').addEventListener('click', () => {
    out.value = `saved "${text.value.trim()}"`;
    text.value = '';
  });
</script>
```

React:

```tsx
import type { UiTextArea as TextAreaElement } from '@purpurabog/ui';

const [note, setNote] = useState('');
const [expanded, setExpanded] = useState(true);

<UiExpandableTile
  expanded={expanded}
  onUiBeforeToggle={(e) => {
    if (!e.detail.expanded && note.trim() !== '') e.preventDefault();
  }}
  onUiToggle={(e) => setExpanded(e.detail.expanded)}
>
  <span slot="summary"><b>Note for the approver</b></span>
  <UiTextArea label="Note" rows={2} value={note} onInput={(e) => setNote((e.target as TextAreaElement).value)} />
  <UiButton size="sm" onClick={() => save(note)}>Save note</UiButton>
</UiExpandableTile>
```

React + Tailwind:

```tsx
const [note, setNote] = useState('');

<ExpandableTile defaultExpanded onBeforeToggle={(next) => next || note.trim() === ''} summary={<b>Note for the approver</b>}>
  <TextArea label="Note" rows={2} value={note} onChange={(e) => setNote(e.target.value)} />
  <Button size="sm" onClick={() => save(note)}>Save note</Button>
</ExpandableTile>
```

## Selectable tile

`ui-selectable-tile` is a checkbox drawn as a tile, with the same API as `ui-checkbox`: `checked`, `name`, `value`, `change`, and it submits with its form. Alone, each tile is one yes/no choice. Groups, `required`, read-only and errors are on the [checkbox page](https://parntengza.github.io/kanok-ui-docs/en/checkbox/#selectable-tiles).


HTML:

```html
<div id="tile-addons" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px">
  <ui-selectable-tile name="addons" value="stamp"><b>Stamp duty</b><br />Calculate and pay for me</ui-selectable-tile>
  <ui-selectable-tile name="addons" value="translate" checked><b>Translation</b><br />Thai and English copies</ui-selectable-tile>
  <ui-selectable-tile name="addons" value="courier" disabled><b>Courier</b><br />Not available in your area</ui-selectable-tile>
</div>
<p>Chosen: <output id="tile-addons-out"></output></p>

<script type="module">
  const row = document.getElementById('tile-addons');
  const out = document.getElementById('tile-addons-out');
  const show = () => (out.value = [...row.querySelectorAll('ui-selectable-tile')].filter((tile) => tile.checked).map((tile) => tile.value).join(', ') || 'none');
  show();
  row.addEventListener('change', show);
</script>
```

React:

```tsx
import type { UiSelectableTile as SelectableTileElement } from '@purpurabog/ui';

const [chosen, setChosen] = useState<string[]>(['translate']);
const toggle = (e: Event) => {
  const tile = e.target as SelectableTileElement;
  setChosen(tile.checked ? [...chosen, tile.value] : chosen.filter((v) => v !== tile.value));
};

<UiSelectableTile name="addons" value="stamp" checked={chosen.includes('stamp')} onChange={toggle}><b>Stamp duty</b><br />Calculate and pay for me</UiSelectableTile>
<UiSelectableTile name="addons" value="translate" checked={chosen.includes('translate')} onChange={toggle}><b>Translation</b><br />Thai and English copies</UiSelectableTile>
<UiSelectableTile name="addons" value="courier" disabled><b>Courier</b><br />Not available in your area</UiSelectableTile>
<p>Chosen: <output>{chosen.join(', ') || 'none'}</output></p>
```

React + Tailwind:

```tsx
const [chosen, setChosen] = useState<string[]>(['translate']);
const toggle = (e: ChangeEvent<HTMLInputElement>) =>
  setChosen(e.target.checked ? [...chosen, e.target.value] : chosen.filter((v) => v !== e.target.value));

<SelectableTile name="addons" value="stamp" checked={chosen.includes('stamp')} onChange={toggle}><b>Stamp duty</b><br />Calculate and pay for me</SelectableTile>
<SelectableTile name="addons" value="translate" checked={chosen.includes('translate')} onChange={toggle}><b>Translation</b><br />Thai and English copies</SelectableTile>
<SelectableTile name="addons" value="courier" disabled><b>Courier</b><br />Not available in your area</SelectableTile>
<p>Chosen: <output>{chosen.join(', ') || 'none'}</output></p>
```

## Radio tiles

`ui-radio-tile` is one option of a `ui-radio-group`, drawn as a tile. The group gives the arrow keys, the value, `change` and the form; the check mark shows only on the chosen tile. Orientation, `required`, read-only and errors are on the [radio page](https://parntengza.github.io/kanok-ui-docs/en/radio/#radio-tiles).


HTML:

```html
<ui-radio-group id="tile-method" label="Signing method" name="method" value="esign">
  <ui-radio-tile value="esign"><b>E-signature</b><br />Sign online in minutes</ui-radio-tile>
  <ui-radio-tile value="paper"><b>Paper</b><br />Print, sign and scan</ui-radio-tile>
  <ui-radio-tile value="branch"><b>At a branch</b><br />Sign with a witness from our staff</ui-radio-tile>
</ui-radio-group>
<p>Value: <output id="tile-method-out"></output></p>

<script type="module">
  const group = document.getElementById('tile-method');
  const out = document.getElementById('tile-method-out');
  out.value = group.value;
  group.addEventListener('change', () => (out.value = group.value));
</script>
```

React:

```tsx
import type { UiRadioGroup as RadioGroupElement } from '@purpurabog/ui';

const [method, setMethod] = useState('esign');

<UiRadioGroup label="Signing method" name="method" value={method} onChange={(e) => setMethod((e.target as RadioGroupElement).value)}>
  <UiRadioTile value="esign"><b>E-signature</b><br />Sign online in minutes</UiRadioTile>
  <UiRadioTile value="paper"><b>Paper</b><br />Print, sign and scan</UiRadioTile>
  <UiRadioTile value="branch"><b>At a branch</b><br />Sign with a witness from our staff</UiRadioTile>
</UiRadioGroup>
<p>Value: <output>{method}</output></p>
```

React + Tailwind:

```tsx
// npx shadcn@4 add @kanok-ui/tw-radio-group
import { RadioGroup } from '@/components/ui/react-tw/radio-group';

const [method, setMethod] = useState('esign');

<RadioGroup label="Signing method" name="method" value={method} onValueChange={setMethod}>
  <RadioTile value="esign"><b>E-signature</b><br />Sign online in minutes</RadioTile>
  <RadioTile value="paper"><b>Paper</b><br />Print, sign and scan</RadioTile>
  <RadioTile value="branch"><b>At a branch</b><br />Sign with a witness from our staff</RadioTile>
</RadioGroup>
<p>Value: <output>{method}</output></p>
```

## The mark over the corner

A selectable or radio tile keeps 48px free at its end for the mark, as Carbon does, so in narrow columns the text wraps early. Set `--ui-tile-mark-space` (beyond Carbon) to `16px` and the mark sits over the top-end corner instead, leaving the width to the content.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; max-width: 520px; --ui-tile-mark-space: 16px">
  <ui-selectable-tile name="spend" value="0" checked>Office supplies and stationery</ui-selectable-tile>
  <ui-selectable-tile name="spend" value="1">Travel and lodging</ui-selectable-tile>
  <ui-selectable-tile name="spend" value="2">Meals with clients</ui-selectable-tile>
</div>
```

React:

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8, '--ui-tile-mark-space': '16px' } as CSSProperties}>
  <UiSelectableTile name="spend" value="0">Office supplies and stationery</UiSelectableTile>
  <UiSelectableTile name="spend" value="1">Travel and lodging</UiSelectableTile>
  <UiSelectableTile name="spend" value="2">Meals with clients</UiSelectableTile>
</div>
```

React + Tailwind:

```tsx
<div className="grid grid-cols-3 gap-2 [--ui-tile-mark-space:16px]">
  <SelectableTile name="spend" value="0">Office supplies and stationery</SelectableTile>
  <SelectableTile name="spend" value="1">Travel and lodging</SelectableTile>
  <SelectableTile name="spend" value="2">Meals with clients</SelectableTile>
</div>
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves to a clickable tile, an expandable tile's toggle, a selectable tile, or the chosen radio tile. A plain tile isn't a tab stop. |
| Enter | Follows a clickable tile's link; opens or closes an expandable tile |
| Space | Opens or closes an expandable tile; checks or unchecks a selectable tile |
| Arrow keys | Move between radio tiles and choose |

## Accessibility

- A plain tile is a box with no role. Give its content real headings, so the page outline stays right.
- A clickable tile is one link, and its whole text is the link's name. Keep it short and put no other controls inside.
- An expandable tile's toggle is a button with `aria-expanded` and `aria-controls`. Its summary is part of the button's name, which is why it holds text only.
- A selectable tile is a real checkbox and a radio tile a real radio, so screen readers announce their state and the tile text is their name.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-tile>` · React `UiTile`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `''` | Makes the whole tile a link. |
| `target` | `target` | `'_self' \| '_blank'` | `'_self'` |  |
| `disabled` | `disabled` | `boolean` | `false` | A linked tile that can't be followed right now (Carbon `ClickableTile disabled`): plain text, no link. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Tile content |
| `icon` | A linked tile's icon (e.g. an arrow), 20px, 12px from the bottom-end corner |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The container (`<div>` or `<a>`) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-card-radius` |  | Corner radius (default 0; Kanok: 12px) |
| `--ui-card-border` |  | Border (default none; Kanok: a hairline) |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |

### `<ui-expandable-tile>` · React `UiExpandableTile`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `expanded` | `expanded` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded } |
| `ui-before-toggle` | `onUiBeforeToggle` | Cancelable; detail: { expanded } — the state about to be applied |

#### Slots

| Slot | Description |
|---|---|
| `summary` | Always visible (text only) |
| (default) | Revealed content |

#### CSS parts

| Part | Description |
|---|---|
| `summary` | The always-visible button row |
| `chevron` | The arrow icon |
| `content` | The expandable body |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-card-border` |  | / --ui-card-radius - Border and corners, as the cards (default none and square; Kanok: a hairline, 12px) |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |

### `<ui-selectable-tile>` · React `UiSelectableTile`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `checked` | `checked` | `boolean` | `false` |  |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Mixed state, e.g. a "select all" box with some children checked. Cleared on user toggle. |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `required` | `required` | `boolean` | `false` | Blocks form submission while the field is empty. |
| `readonly` | `readonly` | `boolean` | `false` | Shows and submits the value but blocks changes. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Keep the label text for screen readers but don't show it. |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `value` | `value` | `string` | `'on'` |  |
| `helper-text` | `helperText` | `string` | `''` | Helper text under the field, shown while there is no error or warning. |
| `invalid-text` | `invalidText` | `string` | `''` | Error text shown while `invalid` or while the field fails validation. |
| `invalid` | `invalid` | `boolean` | `false` | Forces the error state, e.g. after server-side validation. |
| `warn` | `warn` | `boolean` | `false` | Non-blocking warning; shown when there is no error. |
| `warn-text` | `warnText` | `string` | `''` | Text of the warning shown while `warn`. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `groupDisabled` | `boolean` | Set by ui-checkbox-group; kept apart from the author's own disabled / readonly. |
| `groupMessage` | `string` | Error text of the owning ui-checkbox-group while the group is invalid. The group shows it once below the boxes; each box repeats it as its own accessible description and reports aria-invalid, so a screen reader landing on the first box hears why (an IDREF cannot cross the group's shadow root). |
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid (and is shown as its error once touched) until cleared with ''. |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | none (use a ref) | When the user toggles the box |

#### Slots

| Slot | Description |
|---|---|
| (default) | Tile content (title, description…) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The clickable row (label element) |
| `control` | The native checkbox input |
| `box` | The drawn 16px box |
| `label` | The text beside the box |
| `status-icon` | The error / warning icon |
| `helper-text` | The helper line |
| `warning-text` | The warning line |
| `warn-text` | Same line as `warning-text` (named after the `warn-text` attribute / slot) |
| `error-text` | The error line |
| `invalid-text` | Same line as `error-text` (named after the `invalid-text` attribute / slot) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tile-border-color` |  | Border of an unchosen tile (default transparent; Kanok: a hairline); `--ui-card-radius` its corners |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-tile-selected-border` |  | Border of the chosen tile (default `--ui-layer-selected-inverse`; Kanok: primary blue); `--ui-tile-selected-mark` its check mark (default `--ui-icon-primary`) |
| `--ui-tile-selected-background` |  | Fill of the chosen tile (default `--ui-card-background`; Kanok: soft highlight wash) |
| `--ui-tile-mark-space` |  | End padding kept clear for the mark (default 48px, Carbon's); e.g. 16px lets the content run under the mark in the top-end corner (beyond Carbon) |
| `--ui-checkbox-border` |  | Border of the box (default `--ui-ink`; Kanok: `--ui-ink-subtle`) |
| `--ui-checkbox-checked` |  | Fill and border when checked or mixed (default `--ui-ink`; Kanok: `--ui-primary`) |
| `--ui-checkbox-mark` |  | Check mark colour (default `--ui-icon-inverse`; Kanok: `--ui-on-primary`) |

### `<ui-radio-tile>` · React `UiRadioTile`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `string` | `''` |  |
| `checked` | `checked` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `label-position` | `labelPosition` | `RadioLabelPosition \| undefined` |  | Carbon `labelPosition`: `left` puts the text before the circle; unset, the group's `label-position` applies. |

#### Slots

| Slot | Description |
|---|---|
| (default) | Tile content (title, description…) |

#### CSS parts

| Part | Description |
|---|---|
| `circle` | The drawn radio circle |
| `label` | The text beside it |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tile-border-color` |  | Border of an unchosen tile (default transparent; Kanok: a hairline); `--ui-card-radius` its corners |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-tile-selected-border` |  | Border of the chosen tile (default `--ui-layer-selected-inverse`; Kanok: primary blue); `--ui-tile-selected-mark` its check mark (default `--ui-icon-primary`) |
| `--ui-tile-selected-background` |  | Fill of the chosen tile (default `--ui-card-background`; Kanok: soft highlight wash) |
| `--ui-tile-mark-space` |  | End padding kept clear for the mark (default 48px, Carbon's); e.g. 16px lets the content run under the mark in the top-end corner (beyond Carbon) |
| `--ui-radio-border` |  | Ring colour (default `--ui-ink`; Kanok: `--ui-ink-subtle`) |
| `--ui-radio-checked` |  | Ring and dot when chosen (default `--ui-ink`; Kanok: `--ui-primary`) |


