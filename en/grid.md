# Grid

The grid is Carbon's 2x Grid: 4 columns on small screens, 8 from 672px (`md`) and 16 from 1056px (`lg`), with 32px gutters. `<ui-grid>` holds `<ui-column>`s, and each column says how many columns it spans at each size. The tinted boxes on this page only show where the columns are.


HTML:

```html
<style>
  .grid-demo ui-column > p { margin: 0; padding: 8px 0; background: var(--ui-layer-accent-1); font: var(--ui-font-body-sm); }
  .grid-demo ui-column { outline: 1px dashed var(--ui-hairline-strong); }
</style>
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="4" md="4" lg="8"><p>Contract details</p></ui-column>
    <ui-column sm="2" md="2" lg="4"><p>Status</p></ui-column>
    <ui-column sm="2" md="2" lg="4"><p>Owner</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="4" md="4" lg="8"><p>Contract details</p></UiColumn>
  <UiColumn sm="2" md="2" lg="4"><p>Status</p></UiColumn>
  <UiColumn sm="2" md="2" lg="4"><p>Owner</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column sm={4} md={4} lg={8}><p className="bg-layer-accent-1 py-2 type-body-sm">Contract details</p></Column>
  <Column sm={2} md={2} lg={4}><p className="bg-layer-accent-1 py-2 type-body-sm">Status</p></Column>
  <Column sm={2} md={2} lg={4}><p className="bg-layer-accent-1 py-2 type-body-sm">Owner</p></Column>
</Grid>
```

The sizes follow the width of the window, not of the box the grid sits in, as Carbon's media queries do. On this page the grid sits in a narrow column, so widen or narrow the window to see the columns move.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/grid
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-css-grid
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/grid.json
#    to its target:
#    components/ui/primitives/grid/column-hang.ts
#    components/ui/primitives/grid/column.ts
#    components/ui/primitives/grid/grid.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-css-grid, shared-element, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-css-grid.json
#    to its target:
#    components/ui/react-tw/css-grid.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-css-grid, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/grid';</script>

<ui-grid>
  <ui-column sm="4" md="4" lg="8">Main</ui-column>
  <ui-column sm="4" md="4" lg="8">Side</ui-column>
</ui-grid>
```

React:

```tsx
import { UiGrid, UiColumn } from '@purpurabog/ui/react';

<UiGrid>
  <UiColumn sm="4" md="4" lg="8">Main</UiColumn>
  <UiColumn sm="4" md="4" lg="8">Side</UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
import { Grid, Column } from '@/components/ui/react-tw/css-grid';

<Grid>
  <Column sm={4} md={4} lg={8}>Main</Column>
  <Column sm={4} md={4} lg={8}>Side</Column>
</Grid>
```

| Size | From | Columns | Grid margin |
|---|---|---|---|
| `sm` | 0 | 4 | 0 |
| `md` | 672px | 8 | 16px |
| `lg` | 1056px | 16 | 16px |
| `xlg` | 1312px | 16 | 16px |
| `max` | 1584px | 16 | 24px |

The grid is at most 1584px wide and centred. Each column is 16px in from the gutter on both sides, so text in neighbouring columns is 32px apart.

## Spans per size

`sm`, `md`, `lg`, `xlg` and `max` set the span from that size up: `lg="4"` holds at `lg`, `xlg` and `max` until a larger size says otherwise. A column with no span takes one column.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="4" md="2" lg="4"><p>sm 4 · md 2 · lg 4</p></ui-column>
    <ui-column sm="4" md="2" lg="4"><p>sm 4 · md 2 · lg 4</p></ui-column>
    <ui-column sm="4" md="2" lg="4"><p>sm 4 · md 2 · lg 4</p></ui-column>
    <ui-column sm="4" md="2" lg="4"><p>sm 4 · md 2 · lg 4</p></ui-column>
    <ui-column sm="2" md="4" lg="8" xlg="4"><p>sm 2 · md 4 · lg 8 · xlg 4</p></ui-column>
    <ui-column sm="2" md="4" lg="8" xlg="12"><p>sm 2 · md 4 · lg 8 · xlg 12</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  {[1, 2, 3, 4].map((n) => <UiColumn key={n} sm="4" md="2" lg="4"><p>sm 4 · md 2 · lg 4</p></UiColumn>)}
  <UiColumn sm="2" md="4" lg="8" xlg="4"><p>sm 2 · md 4 · lg 8 · xlg 4</p></UiColumn>
  <UiColumn sm="2" md="4" lg="8" xlg="12"><p>sm 2 · md 4 · lg 8 · xlg 12</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  {[1, 2, 3, 4].map((n) => <Column key={n} sm={4} md={2} lg={4}><p>sm 4 · md 2 · lg 4</p></Column>)}
  <Column sm={2} md={4} lg={8} xlg={4}><p>sm 2 · md 4 · lg 8 · xlg 4</p></Column>
  <Column sm={2} md={4} lg={8} xlg={12}><p>sm 2 · md 4 · lg 8 · xlg 12</p></Column>
</Grid>
```

The web component and the React wrapper take the span as text (`"4"`); React + Tailwind takes a number.

## One span for every size

`span` sets the same span at every size. Use it inside a [subgrid](#subgrids), where the parent column already decides the width.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column span="2"><p>span 2</p></ui-column>
    <ui-column span="2"><p>span 2</p></ui-column>
    <ui-column><p>no span: 1</p></ui-column>
    <ui-column><p>no span: 1</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn span="2"><p>span 2</p></UiColumn>
  <UiColumn span="2"><p>span 2</p></UiColumn>
  <UiColumn><p>no span: 1</p></UiColumn>
  <UiColumn><p>no span: 1</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column span={2}><p>span 2</p></Column>
  <Column span={2}><p>span 2</p></Column>
  <Column><p>no span: 1</p></Column>
  <Column><p>no span: 1</p></Column>
</Grid>
```

## Hide a column at a size

A span of `0` hides the column from that size up. Here the help panel shows only from `lg`.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="4" md="8" lg="12"><p>Approval form</p></ui-column>
    <ui-column sm="0" lg="4"><p>Help (lg and up)</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="4" md="8" lg="12"><p>Approval form</p></UiColumn>
  <UiColumn sm="0" lg="4"><p>Help (lg and up)</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column sm={4} md={8} lg={12}><p>Approval form</p></Column>
  <Column sm={0} lg={4}><p>Help (lg and up)</p></Column>
</Grid>
```

## Percent spans

`25%`, `50%`, `75%` and `100%` take that share of the grid's columns at each size: `50%` is 2 of 4, 4 of 8 and 8 of 16.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column span="25%"><p>25%</p></ui-column>
    <ui-column span="75%"><p>75%</p></ui-column>
    <ui-column span="50%"><p>50%</p></ui-column>
    <ui-column span="50%"><p>50%</p></ui-column>
    <ui-column span="100%"><p>100%</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn span="25%"><p>25%</p></UiColumn>
  <UiColumn span="75%"><p>75%</p></UiColumn>
  <UiColumn span="50%"><p>50%</p></UiColumn>
  <UiColumn span="50%"><p>50%</p></UiColumn>
  <UiColumn span="100%"><p>100%</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column span="25%"><p>25%</p></Column>
  <Column span="75%"><p>75%</p></Column>
  <Column span="50%"><p>50%</p></Column>
  <Column span="50%"><p>50%</p></Column>
  <Column span="100%"><p>100%</p></Column>
</Grid>
```

## Offset, start and end

Write tokens to place a column: `offset:N` skips N columns, `start:N` and `end:N` are the grid lines it starts and ends at. In React + Tailwind, pass an object.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="span:1 offset:3" md="span:2 offset:6" lg="span:4 offset:12"><p>offset 3 / 6 / 12</p></ui-column>
    <ui-column sm="span:2 offset:2" md="span:4 offset:4" lg="span:8 offset:8"><p>offset 2 / 4 / 8</p></ui-column>
    <ui-column sm="span:3 offset:1" md="span:6 offset:2" lg="span:12 offset:4"><p>offset 1 / 2 / 4</p></ui-column>
    <ui-column sm="span:2 start:2" md="span:4 start:3" lg="span:6 end:17"><p>start 2 / 3, end 17</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="span:1 offset:3" md="span:2 offset:6" lg="span:4 offset:12"><p>offset 3 / 6 / 12</p></UiColumn>
  <UiColumn sm="span:2 offset:2" md="span:4 offset:4" lg="span:8 offset:8"><p>offset 2 / 4 / 8</p></UiColumn>
  <UiColumn sm="span:3 offset:1" md="span:6 offset:2" lg="span:12 offset:4"><p>offset 1 / 2 / 4</p></UiColumn>
  <UiColumn sm="span:2 start:2" md="span:4 start:3" lg="span:6 end:17"><p>start 2 / 3, end 17</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column sm={{ span: 1, offset: 3 }} md={{ span: 2, offset: 6 }} lg={{ span: 4, offset: 12 }}><p>offset 3 / 6 / 12</p></Column>
  <Column sm={{ span: 2, offset: 2 }} md={{ span: 4, offset: 4 }} lg={{ span: 8, offset: 8 }}><p>offset 2 / 4 / 8</p></Column>
  <Column sm={{ span: 3, offset: 1 }} md={{ span: 6, offset: 2 }} lg={{ span: 12, offset: 4 }}><p>offset 1 / 2 / 4</p></Column>
  <Column sm={{ span: 2, start: 2 }} md={{ span: 4, start: 3 }} lg={{ span: 6, end: 17 }}><p>start 2 / 3, end 17</p></Column>
</Grid>
```

## Narrow and column hang

`narrow` drops the gutter at the start of each column, so the text hangs on the gutter: Carbon uses it for type-heavy pages. Inside a narrow column, `<ui-column-hang>` pushes content in by 16px, so it lines up with the text of a wide grid above or below.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="2" md="4" lg="8"><p>wide</p></ui-column>
    <ui-column sm="2" md="4" lg="8"><p>wide</p></ui-column>
  </ui-grid>
  <ui-grid narrow>
    <ui-column sm="2" md="4" lg="8"><p>narrow</p></ui-column>
    <ui-column sm="2" md="4" lg="8"><ui-column-hang>narrow, hang</ui-column-hang></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="2" md="4" lg="8"><p>wide</p></UiColumn>
  <UiColumn sm="2" md="4" lg="8"><p>wide</p></UiColumn>
</UiGrid>
<UiGrid narrow>
  <UiColumn sm="2" md="4" lg="8"><p>narrow</p></UiColumn>
  <UiColumn sm="2" md="4" lg="8"><UiColumnHang>narrow, hang</UiColumnHang></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column sm={2} md={4} lg={8}><p>wide</p></Column>
  <Column sm={2} md={4} lg={8}><p>wide</p></Column>
</Grid>
<Grid narrow>
  <Column sm={2} md={4} lg={8}><p>narrow</p></Column>
  <Column sm={2} md={4} lg={8}><ColumnHang>narrow, hang</ColumnHang></Column>
</Grid>
```

## Condensed

`condensed` makes the gutters 1px, for tiles or images that sit edge to edge, such as a dashboard of cards. `<ui-column-hang>` pushes text in by 15.5px here.


HTML:

```html
<div class="grid-demo">
  <ui-grid condensed>
    <ui-column sm="1" md="2" lg="4"><p>Signed</p></ui-column>
    <ui-column sm="1" md="2" lg="4"><p>Pending</p></ui-column>
    <ui-column sm="1" md="2" lg="4"><p>Expired</p></ui-column>
    <ui-column sm="1" md="2" lg="4"><ui-column-hang>Draft</ui-column-hang></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid condensed>
  <UiColumn sm="1" md="2" lg="4"><p>Signed</p></UiColumn>
  <UiColumn sm="1" md="2" lg="4"><p>Pending</p></UiColumn>
  <UiColumn sm="1" md="2" lg="4"><p>Expired</p></UiColumn>
  <UiColumn sm="1" md="2" lg="4"><UiColumnHang>Draft</UiColumnHang></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid condensed>
  <Column sm={1} md={2} lg={4}><p>Signed</p></Column>
  <Column sm={1} md={2} lg={4}><p>Pending</p></Column>
  <Column sm={1} md={2} lg={4}><p>Expired</p></Column>
  <Column sm={1} md={2} lg={4}><ColumnHang>Draft</ColumnHang></Column>
</Grid>
```

## Space between rows

Columns that wrap to a new row touch by default. `with-row-gap` (`withRowGap`) spaces the rows like the columns: 32px, 16px in a narrow grid, 1px in a condensed one.


HTML:

```html
<div class="grid-demo">
  <ui-grid with-row-gap>
    <ui-column sm="2" md="4" lg="8"><p>Sales</p></ui-column>
    <ui-column sm="2" md="4" lg="8"><p>Legal</p></ui-column>
    <ui-column sm="2" md="4" lg="8"><p>Finance</p></ui-column>
    <ui-column sm="2" md="4" lg="8"><p>Purchasing</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid withRowGap>
  <UiColumn sm="2" md="4" lg="8"><p>Sales</p></UiColumn>
  <UiColumn sm="2" md="4" lg="8"><p>Legal</p></UiColumn>
  <UiColumn sm="2" md="4" lg="8"><p>Finance</p></UiColumn>
  <UiColumn sm="2" md="4" lg="8"><p>Purchasing</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid withRowGap>
  <Column sm={2} md={4} lg={8}><p>Sales</p></Column>
  <Column sm={2} md={4} lg={8}><p>Legal</p></Column>
  <Column sm={2} md={4} lg={8}><p>Finance</p></Column>
  <Column sm={2} md={4} lg={8}><p>Purchasing</p></Column>
</Grid>
```

## Full width and alignment

The grid stops at 1584px and centres itself. `full-width` (`fullWidth`) lets it fill any screen; `align="start"` or `align="end"` pins the 1584px grid to one side. On this page the grid is narrower than 1584px, so the preview looks the same; the difference shows on a wide screen.


HTML:

```html
<div class="grid-demo">
  <ui-grid full-width>
    <ui-column sm="4" md="8" lg="16"><p>full-width: no 1584px cap</p></ui-column>
  </ui-grid>
  <ui-grid align="start">
    <ui-column sm="4" md="8" lg="16"><p>align="start": pinned to the start on wide screens</p></ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid fullWidth>
  <UiColumn sm="4" md="8" lg="16"><p>full-width: no 1584px cap</p></UiColumn>
</UiGrid>
<UiGrid align="start">
  <UiColumn sm="4" md="8" lg="16"><p>align="start": pinned to the start on wide screens</p></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid fullWidth>
  <Column sm={4} md={8} lg={16}><p>fullWidth: no 1584px cap</p></Column>
</Grid>
<Grid align="start">
  <Column sm={4} md={8} lg={16}><p>align="start": pinned to the start on wide screens</p></Column>
</Grid>
```

## Subgrids

A `<ui-grid>` inside a `<ui-column>` becomes a subgrid: it has as many columns as its column spans, and its own columns line up with the outer grid. You don't mark it; nesting is enough.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="4" md="2" lg="4"><p>Filters</p></ui-column>
    <ui-column sm="4" md="6" lg="12">
      <p>Results: md 6 · lg 12, with a subgrid</p>
      <ui-grid>
        <ui-column sm="2" md="3" lg="4"><p>Contract A</p></ui-column>
        <ui-column sm="2" md="3" lg="4"><p>Contract B</p></ui-column>
        <ui-column sm="0" md="0" lg="4"><p>Contract C (lg)</p></ui-column>
      </ui-grid>
    </ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="4" md="2" lg="4"><p>Filters</p></UiColumn>
  <UiColumn sm="4" md="6" lg="12">
    <p>Results: md 6 · lg 12, with a subgrid</p>
    <UiGrid>
      <UiColumn sm="2" md="3" lg="4"><p>Contract A</p></UiColumn>
      <UiColumn sm="2" md="3" lg="4"><p>Contract B</p></UiColumn>
      <UiColumn sm="0" md="0" lg="4"><p>Contract C (lg)</p></UiColumn>
    </UiGrid>
  </UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column sm={4} md={2} lg={4}><p>Filters</p></Column>
  <Column sm={4} md={6} lg={12}>
    <p>Results: md 6 · lg 12, with a subgrid</p>
    <Grid>
      <Column sm={2} md={3} lg={4}><p>Contract A</p></Column>
      <Column sm={2} md={3} lg={4}><p>Contract B</p></Column>
      <Column sm={0} md={0} lg={4}><p>Contract C (lg)</p></Column>
    </Grid>
  </Column>
</Grid>
```

A subgrid decides once, when it is added to the page, whether it sits in a column. Moving a `<ui-grid>` in or out of a column later doesn't switch it.

## Mix gutter modes

A subgrid can be `narrow` or `condensed` while the outer grid stays wide. Its `<ui-column-hang>`s still line up with the wide text around them.

A percent span counts the columns of the size (4, 8 or 16), not the subgrid's. In a subgrid narrower than the grid, give numbers, as the condensed columns below do.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column span="100%">
      <p>wide</p>
      <ui-grid narrow>
        <ui-column span="25%"><ui-column-hang>narrow</ui-column-hang></ui-column>
        <ui-column span="25%"><ui-column-hang>narrow</ui-column-hang></ui-column>
        <ui-column span="50%">
          <p>wide</p>
          <ui-grid condensed>
            <ui-column sm="1" md="2" lg="4"><ui-column-hang>condensed</ui-column-hang></ui-column>
            <ui-column sm="1" md="2" lg="4"><ui-column-hang>condensed</ui-column-hang></ui-column>
          </ui-grid>
        </ui-column>
      </ui-grid>
    </ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn span="100%">
    <p>wide</p>
    <UiGrid narrow>
      <UiColumn span="25%"><UiColumnHang>narrow</UiColumnHang></UiColumn>
      <UiColumn span="25%"><UiColumnHang>narrow</UiColumnHang></UiColumn>
      <UiColumn span="50%">
        <p>wide</p>
        <UiGrid condensed>
          <UiColumn sm="1" md="2" lg="4"><UiColumnHang>condensed</UiColumnHang></UiColumn>
          <UiColumn sm="1" md="2" lg="4"><UiColumnHang>condensed</UiColumnHang></UiColumn>
        </UiGrid>
      </UiColumn>
    </UiGrid>
  </UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column span="100%">
    <p>wide</p>
    <Grid narrow>
      <Column span="25%"><ColumnHang>narrow</ColumnHang></Column>
      <Column span="25%"><ColumnHang>narrow</ColumnHang></Column>
      <Column span="50%">
        <p>wide</p>
        <Grid condensed>
          <Column sm={1} md={2} lg={4}><ColumnHang>condensed</ColumnHang></Column>
          <Column sm={1} md={2} lg={4}><ColumnHang>condensed</ColumnHang></Column>
        </Grid>
      </Column>
    </Grid>
  </Column>
</Grid>
```

## Lay out a form

Fields in columns: two side by side from `md`, one per row on a phone. The grid's 32px gutter separates them, so the fields need no margins of their own.


HTML:

```html
<ui-grid with-row-gap>
  <ui-column sm="4" md="4" lg="8"><ui-text-input label="Contract number" value="CT-2026-0142"></ui-text-input></ui-column>
  <ui-column sm="4" md="4" lg="8"><ui-text-input label="Counterparty" value="Siam Logistics Co., Ltd."></ui-text-input></ui-column>
  <ui-column sm="4" md="8" lg="16"><ui-text-area label="Notes"></ui-text-area></ui-column>
</ui-grid>
```

React:

```tsx
<UiGrid withRowGap>
  <UiColumn sm="4" md="4" lg="8"><UiTextInput label="Contract number" value="CT-2026-0142" /></UiColumn>
  <UiColumn sm="4" md="4" lg="8"><UiTextInput label="Counterparty" value="Siam Logistics Co., Ltd." /></UiColumn>
  <UiColumn sm="4" md="8" lg="16"><UiTextArea label="Notes" /></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid withRowGap>
  <Column sm={4} md={4} lg={8}><TextInput label="Contract number" defaultValue="CT-2026-0142" /></Column>
  <Column sm={4} md={4} lg={8}><TextInput label="Counterparty" defaultValue="Siam Logistics Co., Ltd." /></Column>
  <Column sm={4} md={8} lg={16}><TextArea label="Notes" /></Column>
</Grid>
```

## Other elements as the grid or a column

In React + Tailwind, `as` renders the grid or a column as another element, for example a `<main>` grid with `<section>` columns. The web component is always `<ui-grid>`; put your landmark around it or inside a column.


HTML:

```html
<div class="grid-demo">
  <ui-grid>
    <ui-column sm="4" md="8" lg="16">
      <section aria-label="Summary"><p>A section inside the column</p></section>
    </ui-column>
  </ui-grid>
</div>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="4" md="8" lg="16">
    <section aria-label="Summary"><p>A section inside the column</p></section>
  </UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid as="main">
  <Column as="section" aria-label="Summary" sm={4} md={8} lg={16}>
    <p>The column is the section</p>
  </Column>
</Grid>
```

## Accessibility

- The grid only places things. It has no role, and screen readers read the columns in the order they appear in the markup. Keep that order meaningful; don't use offsets to move content before something that comes earlier in the markup.
- A column hidden with a span of `0` is `display: none` at that size, so it is hidden from screen readers too.
- Use [headings](https://parntengza.github.io/kanok-ui-docs/en/heading/) and landmarks for structure; the grid adds none.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-grid>` · React `UiGrid`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `narrow` | `narrow` | `boolean` | `false` | No start gutter: text hangs on the gutter (Carbon narrow). |
| `condensed` | `condensed` | `boolean` | `false` | 1px gutters (Carbon condensed). |
| `full-width` | `fullWidth` | `boolean` | `false` | No max width. |
| `align` | `align` | `'start' \| 'center' \| 'end' \| undefined` |  | Pin a max-width grid to a side (centred by default). |
| `with-row-gap` | `withRowGap` | `boolean` | `false` | Rows spaced like columns. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-column>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `grid` | The grid |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-grid-gutter` |  | The gutter (32px; 1px condensed) |

### `<ui-column>` · React `UiColumn`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `sm` | `sm` | `string \| undefined` |  |  |
| `md` | `md` | `string \| undefined` |  |  |
| `lg` | `lg` | `string \| undefined` |  |  |
| `xlg` | `xlg` | `string \| undefined` |  |  |
| `max` | `max` | `string \| undefined` |  |  |
| `span` | `span` | `string \| undefined` |  | The span at every breakpoint (Carbon `span`). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The column's content |

### `<ui-column-hang>` · React `UiColumnHang`

#### Slots

| Slot | Description |
|---|---|
| (default) | The content |


