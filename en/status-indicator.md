# Status indicator

A status indicator shows the state of something with a small coloured icon and a label, such as a job that succeeded or an incident's severity. `<ui-icon-indicator>` uses Carbon's status icons; `<ui-shape-indicator>` uses simple shapes for severity and state. Both follow Carbon's status indicators, which Carbon still marks as preview.


HTML:

```html
<div style="display: grid; gap: 8px; justify-items: start">
  <ui-icon-indicator kind="succeeded" label="Payment received"></ui-icon-indicator>
  <ui-icon-indicator kind="in-progress" label="Waiting for the second approver"></ui-icon-indicator>
  <ui-icon-indicator kind="failed" label="Bank transfer rejected"></ui-icon-indicator>
</div>
```

React:

```tsx
<UiIconIndicator kind="succeeded" label="Payment received" />
<UiIconIndicator kind="in-progress" label="Waiting for the second approver" />
<UiIconIndicator kind="failed" label="Bank transfer rejected" />
```

React + Tailwind:

```tsx
<IconIndicator kind="succeeded" label="Payment received" />
<IconIndicator kind="in-progress" label="Waiting for the second approver" />
<IconIndicator kind="failed" label="Bank transfer rejected" />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/status-indicator
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-status-indicator
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/status-indicator.json
#    to its target:
#    components/ui/primitives/status-indicator/icon-indicator.ts
#    components/ui/primitives/status-indicator/shape-indicator.ts
#    components/ui/primitives/status-indicator/status-indicator-shared.ts
#    components/ui/primitives/status-indicator/status-indicator.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, core-status-indicator, definition-tooltip, shared-align, shared-element, shared-field, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-status-indicator.json
#    to its target:
#    components/ui/react-tw/status-indicator.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, core-status-indicator, tw-definition-tooltip, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/status-indicator';</script>

<ui-icon-indicator kind="succeeded" label="Approved"></ui-icon-indicator>
<ui-shape-indicator kind="high" label="High"></ui-shape-indicator>
```

React:

```tsx
import { UiIconIndicator, UiShapeIndicator } from '@purpurabog/ui/react';

<UiIconIndicator kind="succeeded" label="Approved" />
<UiShapeIndicator kind="high" label="High" />
```

React + Tailwind:

```tsx
import { IconIndicator, ShapeIndicator } from '@/components/ui/react-tw/status-indicator';

<IconIndicator kind="succeeded" label="Approved" />
<ShapeIndicator kind="high" label="High" />
```

## Icon or shape?

- Icon indicator: the state of a process or an item, such as a payment, an import or a server.
- Shape indicator: a level, such as the severity of an incident or a risk, and a few states (stable, draft, incomplete).
- For a label the user can click or remove, use a [Tag](https://parntengza.github.io/kanok-ui-docs/en/tag/) instead.

Each kind has its own icon and colour, so the state doesn't depend on colour alone. Always write a label.

## Icon indicator kinds

`kind` picks the icon and its colour. There are 12 kinds; a `kind` that isn't one of them renders nothing.


HTML:

```html
<div style="display: grid; gap: 8px; justify-items: start">
  <ui-icon-indicator kind="failed" label="Failed"></ui-icon-indicator>
  <ui-icon-indicator kind="caution-major" label="Caution major"></ui-icon-indicator>
  <ui-icon-indicator kind="caution-minor" label="Caution minor"></ui-icon-indicator>
  <ui-icon-indicator kind="undefined" label="Undefined"></ui-icon-indicator>
  <ui-icon-indicator kind="succeeded" label="Succeeded"></ui-icon-indicator>
  <ui-icon-indicator kind="normal" label="Normal"></ui-icon-indicator>
  <ui-icon-indicator kind="in-progress" label="In progress"></ui-icon-indicator>
  <ui-icon-indicator kind="incomplete" label="Incomplete"></ui-icon-indicator>
  <ui-icon-indicator kind="not-started" label="Not started"></ui-icon-indicator>
  <ui-icon-indicator kind="pending" label="Pending"></ui-icon-indicator>
  <ui-icon-indicator kind="unknown" label="Unknown"></ui-icon-indicator>
  <ui-icon-indicator kind="informative" label="Informative"></ui-icon-indicator>
</div>
```

React:

```tsx
<UiIconIndicator kind="failed" label="Failed" />
<UiIconIndicator kind="caution-major" label="Caution major" />
<UiIconIndicator kind="caution-minor" label="Caution minor" />
{/* … undefined, succeeded, normal, in-progress, incomplete, not-started, pending, unknown, informative */}
```

React + Tailwind:

```tsx
<IconIndicator kind="failed" label="Failed" />
<IconIndicator kind="caution-major" label="Caution major" />
<IconIndicator kind="caution-minor" label="Caution minor" />
{/* … undefined, succeeded, normal, in-progress, incomplete, not-started, pending, unknown, informative */}
```

## Icon size

`size` is 16 (the default, with 14px text) or 20 (with 16px text), for a bigger heading or a dashboard tile.


HTML:

```html
<div style="display: grid; gap: 12px; justify-items: start">
  <ui-icon-indicator kind="succeeded" label="Backup finished" size="16"></ui-icon-indicator>
  <ui-icon-indicator kind="succeeded" label="Backup finished" size="20"></ui-icon-indicator>
</div>
```

React:

```tsx
<UiIconIndicator kind="succeeded" label="Backup finished" size={16} />
<UiIconIndicator kind="succeeded" label="Backup finished" size={20} />
```

React + Tailwind:

```tsx
<IconIndicator kind="succeeded" label="Backup finished" size={16} />
<IconIndicator kind="succeeded" label="Backup finished" size={20} />
```

## Shape indicator kinds

`<ui-shape-indicator>` has 11 kinds: the severities (failed, critical, high, medium, low, cautious) and the states (undefined, stable, informative, incomplete, draft). The shape is always 16px.


HTML:

```html
<div style="display: grid; gap: 8px; justify-items: start">
  <ui-shape-indicator kind="failed" label="Failed"></ui-shape-indicator>
  <ui-shape-indicator kind="critical" label="Critical"></ui-shape-indicator>
  <ui-shape-indicator kind="high" label="High"></ui-shape-indicator>
  <ui-shape-indicator kind="medium" label="Medium"></ui-shape-indicator>
  <ui-shape-indicator kind="low" label="Low"></ui-shape-indicator>
  <ui-shape-indicator kind="cautious" label="Cautious"></ui-shape-indicator>
  <ui-shape-indicator kind="undefined" label="Undefined"></ui-shape-indicator>
  <ui-shape-indicator kind="stable" label="Stable"></ui-shape-indicator>
  <ui-shape-indicator kind="informative" label="Informative"></ui-shape-indicator>
  <ui-shape-indicator kind="incomplete" label="Incomplete"></ui-shape-indicator>
  <ui-shape-indicator kind="draft" label="Draft"></ui-shape-indicator>
</div>
```

React:

```tsx
<UiShapeIndicator kind="failed" label="Failed" />
<UiShapeIndicator kind="critical" label="Critical" />
<UiShapeIndicator kind="high" label="High" />
{/* … medium, low, cautious, undefined, stable, informative, incomplete, draft */}
```

React + Tailwind:

```tsx
<ShapeIndicator kind="failed" label="Failed" />
<ShapeIndicator kind="critical" label="Critical" />
<ShapeIndicator kind="high" label="High" />
{/* … medium, low, cautious, undefined, stable, informative, incomplete, draft */}
```

## Text size

The shape indicator's text is 12px by default. `text-size="14"` (`textSize={14}` in React) makes it 14px, to match body text around it.


HTML:

```html
<div style="display: grid; gap: 12px; justify-items: start">
  <ui-shape-indicator kind="medium" label="Medium risk"></ui-shape-indicator>
  <ui-shape-indicator kind="medium" label="Medium risk" text-size="14"></ui-shape-indicator>
</div>
```

React:

```tsx
<UiShapeIndicator kind="medium" label="Medium risk" />
<UiShapeIndicator kind="medium" label="Medium risk" textSize={14} />
```

React + Tailwind:

```tsx
<ShapeIndicator kind="medium" label="Medium risk" />
<ShapeIndicator kind="medium" label="Medium risk" textSize={14} />
```

## Compact

`compact` shows only the icon or shape. The label moves into a tooltip that opens on hover and on keyboard focus. Screen readers hear the label, or `icon-description` / `shape-description` (`iconDescription` / `shapeDescription` in React) when you set one, for a longer text than the tooltip.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
  <ui-icon-indicator kind="succeeded" label="Signed" compact></ui-icon-indicator>
  <ui-icon-indicator kind="pending" label="Pending" compact icon-description="Waiting for the vendor to sign"></ui-icon-indicator>
  <ui-shape-indicator kind="critical" label="Critical" compact shape-description="Critical severity"></ui-shape-indicator>
</div>
```

React:

```tsx
<UiIconIndicator kind="succeeded" label="Signed" compact />
<UiIconIndicator kind="pending" label="Pending" compact iconDescription="Waiting for the vendor to sign" />
<UiShapeIndicator kind="critical" label="Critical" compact shapeDescription="Critical severity" />
```

React + Tailwind:

```tsx
<IconIndicator kind="succeeded" label="Signed" compact />
<IconIndicator kind="pending" label="Pending" compact iconDescription="Waiting for the vendor to sign" />
<ShapeIndicator kind="critical" label="Critical" compact shapeDescription="Critical severity" />
```

## Tooltip placement

`placement` sets where the compact tooltip opens: `top`, `bottom`, `left` or `right` (the default), each also with `-start` or `-end`. `align` is Carbon's name for it and takes the same values.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: center; padding: 32px 64px">
  <ui-icon-indicator kind="caution-major" label="Over budget" compact placement="top"></ui-icon-indicator>
  <ui-icon-indicator kind="caution-minor" label="Close to budget" compact placement="bottom"></ui-icon-indicator>
  <ui-icon-indicator kind="normal" label="Within budget" compact placement="left"></ui-icon-indicator>
</div>
```

React:

```tsx
<UiIconIndicator kind="caution-major" label="Over budget" compact placement="top" />
<UiIconIndicator kind="caution-minor" label="Close to budget" compact placement="bottom" />
<UiIconIndicator kind="normal" label="Within budget" compact placement="left" />
```

React + Tailwind:

```tsx
<IconIndicator kind="caution-major" label="Over budget" compact placement="top" />
<IconIndicator kind="caution-minor" label="Close to budget" compact placement="bottom" />
<IconIndicator kind="normal" label="Within budget" compact placement="left" />
```

## In a list

Status indicators fit in a column of a list or a table, where each row has its own state.


HTML:

```html
<ui-structured-list label="Contracts">
  <ui-structured-list-row head>
    <ui-structured-list-cell>Contract</ui-structured-list-cell>
    <ui-structured-list-cell>Vendor</ui-structured-list-cell>
    <ui-structured-list-cell>Status</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>CT-2026-118</ui-structured-list-cell>
    <ui-structured-list-cell>Siam Logistics Co., Ltd.</ui-structured-list-cell>
    <ui-structured-list-cell><ui-icon-indicator kind="succeeded" label="Signed"></ui-icon-indicator></ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>CT-2026-121</ui-structured-list-cell>
    <ui-structured-list-cell>Chao Phraya Printing</ui-structured-list-cell>
    <ui-structured-list-cell><ui-icon-indicator kind="pending" label="Waiting for signature"></ui-icon-indicator></ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>CT-2026-097</ui-structured-list-cell>
    <ui-structured-list-cell>Northern Office Supply</ui-structured-list-cell>
    <ui-structured-list-cell><ui-icon-indicator kind="caution-major" label="Expires in 7 days"></ui-icon-indicator></ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
<UiStructuredList label="Contracts">
  <UiStructuredListRow head>
    <UiStructuredListCell>Contract</UiStructuredListCell>
    <UiStructuredListCell>Vendor</UiStructuredListCell>
    <UiStructuredListCell>Status</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>CT-2026-118</UiStructuredListCell>
    <UiStructuredListCell>Siam Logistics Co., Ltd.</UiStructuredListCell>
    <UiStructuredListCell><UiIconIndicator kind="succeeded" label="Signed" /></UiStructuredListCell>
  </UiStructuredListRow>
  {/* … */}
</UiStructuredList>
```

React + Tailwind:

```tsx
<StructuredList label="Contracts">
  <StructuredListRow head>
    <StructuredListCell>Contract</StructuredListCell>
    <StructuredListCell>Vendor</StructuredListCell>
    <StructuredListCell>Status</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>CT-2026-118</StructuredListCell>
    <StructuredListCell>Siam Logistics Co., Ltd.</StructuredListCell>
    <StructuredListCell><IconIndicator kind="succeeded" label="Signed" /></StructuredListCell>
  </StructuredListRow>
  {/* … */}
</StructuredList>
```

## Severity

Use the shape indicator for a level, such as the severity of incidents. Pair the shape with a word, so the order is clear without the colours.


HTML:

```html
<div style="display: grid; gap: 8px; justify-items: start">
  <ui-shape-indicator kind="critical" label="INC-2041 · Critical: invoice export fails for all users" text-size="14"></ui-shape-indicator>
  <ui-shape-indicator kind="high" label="INC-2038 · High: approval emails are late" text-size="14"></ui-shape-indicator>
  <ui-shape-indicator kind="medium" label="INC-2035 · Medium: wrong date format in the PDF" text-size="14"></ui-shape-indicator>
  <ui-shape-indicator kind="low" label="INC-2030 · Low: typo on the vendor form" text-size="14"></ui-shape-indicator>
</div>
```

React:

```tsx
<UiShapeIndicator kind="critical" label="INC-2041 · Critical: invoice export fails for all users" textSize={14} />
<UiShapeIndicator kind="high" label="INC-2038 · High: approval emails are late" textSize={14} />
{/* … */}
```

React + Tailwind:

```tsx
<ShapeIndicator kind="critical" label="INC-2041 · Critical: invoice export fails for all users" textSize={14} />
<ShapeIndicator kind="high" label="INC-2038 · High: approval emails are late" textSize={14} />
{/* … */}
```

## Change the status

Set `kind` and `label` as the state changes. The indicator is not a live region: when the change matters to the user, also announce it, for example in a `role="status"` line.


HTML:

```html
<ui-icon-indicator id="status-indicator-job" kind="not-started" label="Import not started"></ui-icon-indicator>
<ui-button id="status-indicator-run" kind="tertiary">Import vendors</ui-button>
<p id="status-indicator-msg" role="status" style="margin: 0"></p>

<script type="module">
  const job = document.getElementById('status-indicator-job');
  const msg = document.getElementById('status-indicator-msg');
  const set = (kind, label) => {
    job.kind = kind;
    job.label = label;
    msg.textContent = label;
  };
  document.getElementById('status-indicator-run').addEventListener('click', () => {
    set('in-progress', 'Importing vendors…');
    setTimeout(() => set('succeeded', 'Import finished: 120 vendors'), 2000);
  });
</script>
```

React:

```tsx
<UiIconIndicator kind={job.kind} label={job.label} />
<p role="status">{job.label}</p>
```

React + Tailwind:

```tsx
<IconIndicator kind={job.kind} label={job.label} />
<p role="status">{job.label}</p>
```

## Keyboard

Only the compact indicators take focus.

| Key | Does |
|---|---|
| Tab | Moves to a compact icon and opens its tooltip; leaving closes it |
| Enter, Space | Open or close the tooltip |
| Esc | Closes the tooltip |

## Accessibility

- The icon or shape is hidden from screen readers; the label says the state. Write it as the state ("Signed"), not the colour.
- Compact: the icon is a button that opens a definition tooltip with the label, and screen readers read the label or the description.
- Status changes are not announced by themselves; add a status message when they matter.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-icon-indicator>` · React `UiIconIndicator`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `kind` | `kind` | `IconIndicatorKind \| undefined` |  |  |
| `label` | `label` | `string` | `''` |  |
| `size` | `size` | `16 \| 20` | `16` | 16 (body-compact-01) or 20 (body-compact-02). |
| `compact` | `compact` | `boolean` | `false` | Only the icon; the label in a tooltip. |
| `icon-description` | `iconDescription` | `string \| undefined` |  | Read by screen readers in compact mode instead of the label. |
| `placement` | `placement` | `Placement` | `'right'` | Where the compact tooltip opens. |

#### CSS parts

| Part | Description |
|---|---|
| `icon` | The icon |
| `label` | The label (not compact) |

### `<ui-shape-indicator>` · React `UiShapeIndicator`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `align` |  |  |  | Carbon's name for `placement` (same values) |
| `kind` | `kind` | `ShapeIndicatorKind \| undefined` |  |  |
| `label` | `label` | `string` | `''` |  |
| `text-size` | `textSize` | `12 \| 14` | `12` | 12 (helper-text-01) or 14 (body-compact-01). |
| `compact` | `compact` | `boolean` | `false` | Only the shape; the label in a tooltip. |
| `shape-description` | `shapeDescription` | `string \| undefined` |  | Read by screen readers in compact mode instead of the label. |
| `placement` | `placement` | `Placement` | `'right'` | Where the compact tooltip opens. |

#### CSS parts

| Part | Description |
|---|---|
| `icon` | The shape |
| `label` | The label (not compact) |


