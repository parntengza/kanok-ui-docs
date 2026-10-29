# Layer

`<ui-layer>` is Carbon's Layer: everything inside it uses the theme's next layer set, so a field on a gray tile isn't the same gray as the tile. Fields, menus, borders, dividers and hover fills all follow it. The [Themes and layers](https://parntengza.github.io/kanok-ui-docs/en/themes/#put-fields-on-a-tile-ui-layer) guide explains the layering model; this page shows the element.


HTML:

```html
<ui-text-input label="On the page (field-01)"></ui-text-input>
<ui-layer level="1" with-background style="padding: 16px">
  <ui-text-input label="Inside a layer (field-02)"></ui-text-input>
  <ui-layer with-background style="padding: 16px; margin-top: 16px">
    <ui-dropdown label="One level deeper (field-03)" placeholder="Choose a department">
      <option value="sales">Sales</option>
      <option value="legal">Legal</option>
    </ui-dropdown>
  </ui-layer>
</ui-layer>
```

React:

```tsx
<UiTextInput label="On the page (field-01)" />
<UiLayer level={1} withBackground style={{ padding: 16 }}>
  <UiTextInput label="Inside a layer (field-02)" />
  <UiLayer withBackground style={{ padding: 16, marginTop: 16 }}>
    <UiDropdown label="One level deeper (field-03)" placeholder="Choose a department">
      <option value="sales">Sales</option>
      <option value="legal">Legal</option>
    </UiDropdown>
  </UiLayer>
</UiLayer>
```

React + Tailwind:

```tsx
<TextInput label="On the page (field-01)" />
<Layer withBackground className="p-4">
  <TextInput label="Inside a layer (field-02)" />
  <Layer withBackground className="mt-4 p-4">
    <Dropdown label="One level deeper (field-03)" placeholder="Choose a department" items={[{ value: 'sales', label: 'Sales' }, { value: 'legal', label: 'Legal' }]} />
  </Layer>
</Layer>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/layer
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-layer
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/layer.json
#    to its target:
#    components/ui/primitives/layer/layer-shift.styles.ts
#    components/ui/primitives/layer/layer.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-layer.json
#    to its target:
#    components/ui/react-tw/layer.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/layer';</script>

<ui-layer level="1" with-background>
  <ui-text-input label="Field on a tile"></ui-text-input>
</ui-layer>
```

React:

```tsx
import { UiLayer, UiTextInput } from '@purpurabog/ui/react';

<UiLayer level={1} withBackground>
  <UiTextInput label="Field on a tile" />
</UiLayer>
```

React + Tailwind:

```tsx
import { Layer } from '@/components/ui/react-tw/layer';

<Layer withBackground>
  <TextInput label="Field on a tile" />
</Layer>
```

## Levels

`level` is `0`, `1` or `2`. Level `0` is the page's own set, the same as outside any layer; `1` and `2` go deeper. Without `level`, the web component and the React wrapper start at `0` and a nested layer goes one deeper, as Carbon's `cds-layer`. The React + Tailwind `Layer` follows Carbon React instead: it starts at `1`.


HTML:

```html
<ui-layer level="0" with-background style="padding: 16px">
  <ui-text-input label="level 0"></ui-text-input>
</ui-layer>
<ui-layer level="1" with-background style="padding: 16px">
  <ui-text-input label="level 1"></ui-text-input>
</ui-layer>
<ui-layer level="2" with-background style="padding: 16px">
  <ui-text-input label="level 2"></ui-text-input>
</ui-layer>
```

React:

```tsx
<UiLayer level={0} withBackground style={{ padding: 16 }}><UiTextInput label="level 0" /></UiLayer>
<UiLayer level={1} withBackground style={{ padding: 16 }}><UiTextInput label="level 1" /></UiLayer>
<UiLayer level={2} withBackground style={{ padding: 16 }}><UiTextInput label="level 2" /></UiLayer>
```

React + Tailwind:

```tsx
<Layer level={0} withBackground className="p-4"><TextInput label="level 0" /></Layer>
<Layer level={1} withBackground className="p-4"><TextInput label="level 1" /></Layer>
<Layer level={2} withBackground className="p-4"><TextInput label="level 2" /></Layer>
```

Nesting deeper than level 2 stays at 2.

## Fields on a tile

A [tile](https://parntengza.github.io/kanok-ui-docs/en/tile/) paints the current layer's color, but it doesn't change the layer of what is inside it. Put the fields in a layer one level up, so they stand out from the tile.


HTML:

```html
<ui-tile>
  <p style="margin: 0 0 16px">Delivery address</p>
  <ui-layer level="1">
    <ui-text-input label="Province" value="Chiang Mai"></ui-text-input>
  </ui-layer>
</ui-tile>
```

React:

```tsx
<UiTile>
  <p>Delivery address</p>
  <UiLayer level={1}>
    <UiTextInput label="Province" value="Chiang Mai" />
  </UiLayer>
</UiTile>
```

React + Tailwind:

```tsx
<Tile>
  <p className="mb-4">Delivery address</p>
  <Layer>
    <TextInput label="Province" defaultValue="Chiang Mai" />
  </Layer>
</Tile>
```

## With or without a background

A layer on its own only changes the tokens for what is inside it; it paints nothing. `with-background` (`withBackground`) paints it with Carbon's layer background, the surface its content sits on. Leave it off when your own box (a tile, a panel) already paints the surface.


HTML:

```html
<ui-layer level="1" style="padding: 16px; border: 1px dashed var(--ui-hairline-strong)">
  <ui-text-input label="No background: the layer paints nothing"></ui-text-input>
</ui-layer>
<ui-layer level="1" with-background style="padding: 16px">
  <ui-text-input label="with-background"></ui-text-input>
</ui-layer>
```

React:

```tsx
<UiLayer level={1} style={{ padding: 16, border: '1px dashed var(--ui-hairline-strong)' }}>
  <UiTextInput label="No background: the layer paints nothing" />
</UiLayer>
<UiLayer level={1} withBackground style={{ padding: 16 }}>
  <UiTextInput label="withBackground" />
</UiLayer>
```

React + Tailwind:

```tsx
<Layer className="border border-dashed border-hairline-strong p-4">
  <TextInput label="No background: the layer paints nothing" />
</Layer>
<Layer withBackground className="p-4">
  <TextInput label="withBackground" />
</Layer>
```

## Menus, tables and other components

Everything that reads the layer tokens follows the layer: the list of a dropdown, the rows of a table, the dividers of a structured list, the hover fill of a ghost button.


HTML:

```html
<ui-layer level="1" with-background style="padding: 16px">
  <ui-dropdown label="Approver" placeholder="Choose an approver">
    <option value="somchai">Somchai K.</option>
    <option value="malee">Malee S.</option>
  </ui-dropdown>
  <div style="margin-top: 16px"><ui-button kind="ghost">Add another approver</ui-button></div>
</ui-layer>
```

React:

```tsx
<UiLayer level={1} withBackground style={{ padding: 16 }}>
  <UiDropdown label="Approver" placeholder="Choose an approver">
    <option value="somchai">Somchai K.</option>
    <option value="malee">Malee S.</option>
  </UiDropdown>
  <UiButton kind="ghost">Add another approver</UiButton>
</UiLayer>
```

React + Tailwind:

```tsx
<Layer withBackground className="p-4">
  <Dropdown label="Approver" placeholder="Choose an approver" items={[{ value: 'somchai', label: 'Somchai K.' }, { value: 'malee', label: 'Malee S.' }]} />
  <Button kind="ghost" className="mt-4">Add another approver</Button>
</Layer>
```

## In a dark zone

A layer works inside any theme zone: it moves along that theme's layer sets. See [Make a zone dark](https://parntengza.github.io/kanok-ui-docs/en/themes/#make-a-zone-dark) for the zone itself.


HTML:

```html
<div data-theme="g90" style="padding: 16px; background: var(--ui-canvas); color: var(--ui-ink)">
  <ui-text-input label="On g90"></ui-text-input>
  <ui-layer level="1" with-background style="padding: 16px; margin-top: 16px">
    <ui-text-input label="On g90, one layer up"></ui-text-input>
  </ui-layer>
</div>
```

React:

```tsx
<div data-theme="g90" style={{ padding: 16, background: 'var(--ui-canvas)', color: 'var(--ui-ink)' }}>
  <UiTextInput label="On g90" />
  <UiLayer level={1} withBackground style={{ padding: 16, marginTop: 16 }}>
    <UiTextInput label="On g90, one layer up" />
  </UiLayer>
</div>
```

React + Tailwind:

```tsx
<div data-theme="g90" className="bg-canvas p-4 text-ink">
  <TextInput label="On g90" />
  <Layer withBackground className="mt-4 p-4">
    <TextInput label="On g90, one layer up" />
  </Layer>
</div>
```

## Read the level

The element's `level` property holds its level, worked out or set. In React + Tailwind, `useLayerLevel()` returns the level of the closest `Layer` (`-1` outside any), for your own components that paint by layer.


HTML:

```html
<ui-layer id="layer-outer" with-background style="padding: 16px">
  <ui-layer id="layer-inner" with-background style="padding: 16px">Nested layer</ui-layer>
</ui-layer>
<p>Levels: <output id="layer-out"></output></p>

<script type="module">
  const outer = document.getElementById('layer-outer');
  const inner = document.getElementById('layer-inner');
  document.getElementById('layer-out').value = `outer ${outer.level}, inner ${inner.level}`;
</script>
```

React:

```tsx
import type { UiLayer as LayerElement } from '@purpurabog/ui';

const inner = useRef<LayerElement>(null);
const [level, setLevel] = useState<number>();
useEffect(() => setLevel(inner.current?.level), []);

<UiLayer withBackground style={{ padding: 16 }}>
  <UiLayer ref={inner} withBackground style={{ padding: 16 }}>Nested layer</UiLayer>
</UiLayer>
<p>Inner level: <output>{level}</output></p>
```

React + Tailwind:

```tsx
import { Layer, useLayerLevel } from '@/components/ui/react-tw/layer';

function LevelBadge() {
  const level = useLayerLevel();
  return <span className="type-caption text-ink-muted">level {level}</span>;
}

<Layer withBackground className="p-4">
  <LevelBadge />
  <Layer withBackground className="mt-4 p-4"><LevelBadge /></Layer>
</Layer>
```

The web component works its level out when it is added to the page, through shadow roots too. Set `level` yourself if you move a layer somewhere else later.

## Accessibility

- A layer is only color. It has no role and adds nothing for screen readers.
- Layers keep fields visible against the surface under them, which helps everyone see where to type. Don't rely on the layer color alone to tell areas apart; use headings and labels too.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-layer>` · React `UiLayer`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `level` | `level` |  |  | 0, 1 or 2. Computed from the nearest ancestor layer when not set. |
| `with-background` | `withBackground` | `boolean` | `false` | Paint the layer with Carbon's `layer-background` (`withBackground`): the colour its content sits on (white theme, level 1: #f4f4f4 under #ffffff fields). |

#### Methods

| Method | Description |
|---|---|
| `syncLevel()` | An automatic level follows the layer around it (also called by a layer whose level changed); a set one stays. |

#### Slots

| Slot | Description |
|---|---|
| (default) | Content |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The wrapper |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-layer-border` |  | / --ui-layer-radius - With `with-background`: its border and corner radius (default none, 0: Carbon's square, unbordered zone, Kanok too) |


