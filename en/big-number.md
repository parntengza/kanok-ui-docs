# Big number

A big number shows one key figure large, under a small label: active contracts, money spent, uptime (Carbon for IBM Products `BigNumber`). It shortens long numbers ("12.3K"), can show the value against a total ("12.3K/50.0K"), a percentage, and an up arrow for a rising trend.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="Active contracts" value="12345" total="50000"></ui-big-number>
  <ui-big-number label="Signed this month" value="1280" trending></ui-big-number>
  <ui-big-number label="On-time payments" value="96.4" percentage></ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="Active contracts" value={12345} total={50000} />
<UiBigNumber label="Signed this month" value={1280} trending />
<UiBigNumber label="On-time payments" value={96.4} percentage />
```

React + Tailwind:

```tsx
<BigNumber label="Active contracts" value={12345} total={50000} />
<BigNumber label="Signed this month" value={1280} trending />
<BigNumber label="On-time payments" value={96.4} percentage />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/big-number
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-big-number
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/big-number.json
#    to its target:
#    components/ui/primitives/big-number/big-number-skeleton.ts
#    components/ui/primitives/big-number/big-number.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-big-number, shared-element, shared-field, shared-localize, shared-skeleton, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-big-number.json
#    to its target:
#    components/ui/react-tw/big-number.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-big-number, tw-i18n, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/big-number';</script>

<ui-big-number label="Active contracts" value="12345"></ui-big-number>
```

React:

```tsx
import { UiBigNumber } from '@purpurabog/ui/react';

<UiBigNumber label="Active contracts" value={12345} />
```

React + Tailwind:

```tsx
import { BigNumber } from '@/components/ui/react-tw/big-number';

<BigNumber label="Active contracts" value={12345} />
```

## Short or full numbers

By default the number is shortened with one decimal: 12,345 becomes "12.3K". `fraction-digits` (`fractionDigits`) sets the decimals. `truncate="false"` (`truncate={false}`) writes the whole number with its separators, for figures people copy or check. Without a `value`, it shows "–".


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="Default" value="4820000"></ui-big-number>
  <ui-big-number label="Two decimals" value="4820000" fraction-digits="2"></ui-big-number>
  <ui-big-number label="No decimals" value="4820000" fraction-digits="0"></ui-big-number>
  <ui-big-number label="Full number" value="4820000" truncate="false"></ui-big-number>
  <ui-big-number label="No value"></ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="Default" value={4820000} />
<UiBigNumber label="Two decimals" value={4820000} fractionDigits={2} />
<UiBigNumber label="No decimals" value={4820000} fractionDigits={0} />
<UiBigNumber label="Full number" value={4820000} truncate={false} />
<UiBigNumber label="No value" />
```

React + Tailwind:

```tsx
<BigNumber label="Default" value={4820000} />
<BigNumber label="Two decimals" value={4820000} fractionDigits={2} />
<BigNumber label="No decimals" value={4820000} fractionDigits={0} />
<BigNumber label="Full number" value={4820000} truncate={false} />
<BigNumber label="No value" />
```

## Against a total

`total` adds "/total" after the value, smaller. It shows only when it is larger than the value and reads differently once shortened: 49,990 of 50,000 would both read "50.0K", so the total is left out. `force-show-total` (`forceShowTotal`) shows it anyway, and "Unknown" when there is no total.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="Budget used (baht)" value="1250000" total="2000000"></ui-big-number>
  <ui-big-number label="Nearly full" value="49990" total="50000"></ui-big-number>
  <ui-big-number label="Forced" value="49990" total="50000" force-show-total></ui-big-number>
  <ui-big-number label="Total not known yet" value="320" force-show-total></ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="Budget used (baht)" value={1250000} total={2000000} />
<UiBigNumber label="Nearly full" value={49990} total={50000} />
<UiBigNumber label="Forced" value={49990} total={50000} forceShowTotal />
<UiBigNumber label="Total not known yet" value={320} forceShowTotal />
```

React + Tailwind:

```tsx
<BigNumber label="Budget used (baht)" value={1250000} total={2000000} />
<BigNumber label="Nearly full" value={49990} total={50000} />
<BigNumber label="Forced" value={49990} total={50000} forceShowTotal />
<BigNumber label="Total not known yet" value={320} forceShowTotal />
```

"Unknown" follows the page language.

## Percentage

`percentage` adds a small "%" after the value. A percentage never shows a total, unless forced.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="Uptime" value="99.95" percentage fraction-digits="2"></ui-big-number>
  <ui-big-number label="Contracts signed on time" value="87" percentage fraction-digits="0"></ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="Uptime" value={99.95} percentage fractionDigits={2} />
<UiBigNumber label="Contracts signed on time" value={87} percentage fractionDigits={0} />
```

React + Tailwind:

```tsx
<BigNumber label="Uptime" value={99.95} percentage fractionDigits={2} />
<BigNumber label="Contracts signed on time" value={87} percentage fractionDigits={0} />
```

## Trending

`trending` puts an up arrow before the value. To show a different icon, such as a down arrow, put it in the `trending-icon` slot; in React + Tailwind, pass the icon to `trending`.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="New suppliers" value="214" trending></ui-big-number>
  <ui-big-number label="Overdue invoices" value="38" trending>
    <svg slot="trending-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="flex: none; margin-top: 8px; fill: currentColor"><path d="M12.3 9.3 8.5 13.1 8.5 1 7.5 1 7.5 13.1 3.7 9.3 3 10 8 15 13 10z" /></svg>
  </ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="New suppliers" value={214} trending />
<UiBigNumber label="Overdue invoices" value={38} trending>
  <svg slot="trending-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flex: 'none', marginTop: 8, fill: 'currentColor' }}>
    <path d="M12.3 9.3 8.5 13.1 8.5 1 7.5 1 7.5 13.1 3.7 9.3 3 10 8 15 13 10z" />
  </svg>
</UiBigNumber>
```

React + Tailwind:

```tsx
<BigNumber label="New suppliers" value={214} trending />
<BigNumber
  label="Overdue invoices"
  value={38}
  trending={
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="mt-2 flex-none fill-current">
      <path d="M12.3 9.3 8.5 13.1 8.5 1 7.5 1 7.5 13.1 3.7 9.3 3 10 8 15 13 10z" />
    </svg>
  }
/>
```

The arrow is only a picture. Say what it means in the label or the text around it ("up 12% from last month"), so screen reader users get it too.

## Sizes

`size`: the default (label 12px, value 28px), `lg` (value 42px) and `xl` (label 14px, value 54px). The total, the "%" and the arrow grow with it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="Default" value="12345" total="50000" trending></ui-big-number>
  <ui-big-number label="Large" value="12345" total="50000" trending size="lg"></ui-big-number>
  <ui-big-number label="Extra large" value="12345" total="50000" trending size="xl"></ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="Default" value={12345} total={50000} trending />
<UiBigNumber label="Large" value={12345} total={50000} trending size="lg" />
<UiBigNumber label="Extra large" value={12345} total={50000} trending size="xl" />
```

React + Tailwind:

```tsx
<BigNumber label="Default" value={12345} total={50000} trending />
<BigNumber label="Large" value={12345} total={50000} trending size="lg" />
<BigNumber label="Extra large" value={12345} total={50000} trending size="xl" />
```

## Explain the number

`tooltip-description` (`tooltipDescription`) adds a small info button after the label; hovering or focusing it shows the text in a tooltip. Its name is "More information", in the page language.


HTML:

```html
<ui-big-number label="Active users" value="12345" tooltip-description="People who signed in at least once in the last 7 days"></ui-big-number>
```

React:

```tsx
<UiBigNumber label="Active users" value={12345} tooltipDescription="People who signed in at least once in the last 7 days" />
```

React + Tailwind:

```tsx
<BigNumber label="Active users" value={12345} tooltipDescription="People who signed in at least once in the last 7 days" />
```

## Your own label

When the label needs more than text, such as a [toggletip](https://parntengza.github.io/kanok-ui-docs/en/toggletip/) with a link, put your markup in the `label` slot. In React + Tailwind, pass it to `label`.


HTML:

```html
<ui-big-number value="38">
  <span slot="label" style="display: flex; align-items: center; gap: 4px; font: var(--ui-font-caption); color: var(--ui-ink-muted)">
    Overdue invoices
    <ui-toggletip label="About overdue invoices">Invoices unpaid 30 days after the due date. <a href="#accessibility">How we count them</a></ui-toggletip>
  </span>
</ui-big-number>
```

React:

```tsx
<UiBigNumber value={38}>
  <span slot="label" style={{ display: 'flex', alignItems: 'center', gap: 4, font: 'var(--ui-font-caption)', color: 'var(--ui-ink-muted)' }}>
    Overdue invoices
    <UiToggletip label="About overdue invoices">Invoices unpaid 30 days after the due date. <a href="/help/overdue">How we count them</a></UiToggletip>
  </span>
</UiBigNumber>
```

React + Tailwind:

```tsx
<BigNumber
  value={38}
  label={
    <span className="flex items-center gap-1">
      Overdue invoices
      <Toggletip label="About overdue invoices">Invoices unpaid 30 days after the due date. <a href="/help/overdue">How we count them</a></Toggletip>
    </span>
  }
/>
```

## An action after the value

The `icon-button` slot (`iconButton` in React + Tailwind) puts a small button after the value, for example to refresh it or open the report behind it.


HTML:

```html
<ui-big-number id="big-number-refresh" label="Open requests" value="1280">
  <ui-icon-button slot="icon-button" kind="ghost" size="sm" label="Refresh">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12 10H6.78A2.75 2.75 0 0 1 4 7.5 2.75 2.75 0 0 1 6.78 5h4.39l-1.58 1.59L10.29 7.3 13.08 4.5l-2.79-2.8-.7.71L11.17 4H6.78A3.75 3.75 0 0 0 3 7.5 3.75 3.75 0 0 0 6.78 11H12z" /></svg>
  </ui-icon-button>
</ui-big-number>

<script type="module">
  const figure = document.getElementById('big-number-refresh');
  figure.querySelector('ui-icon-button').addEventListener('click', () => {
    figure.value = 1200 + Math.round(Math.random() * 200);
  });
</script>
```

React:

```tsx
import { Renew as RenewIcon } from '@carbon/icons-react';

const [open, setOpen] = useState(1280);

<UiBigNumber label="Open requests" value={open}>
  <UiIconButton slot="icon-button" kind="ghost" size="sm" label="Refresh" onClick={() => setOpen(1200 + Math.round(Math.random() * 200))}>
    <RenewIcon />
  </UiIconButton>
</UiBigNumber>
```

React + Tailwind:

```tsx
import { Renew as RenewIcon } from '@carbon/icons-react';

const [open, setOpen] = useState(1280);

<BigNumber
  label="Open requests"
  value={open}
  iconButton={
    <IconButton kind="ghost" size="sm" label="Refresh" onClick={() => setOpen(1200 + Math.round(Math.random() * 200))}>
      <RenewIcon />
    </IconButton>
  }
/>
```

## Number format of a locale

`locale` writes the numbers the way a locale does, with Intl's short forms and separators. Without it, or with one the browser doesn't know, numbers are written as in `en-US`, as in Carbon. It doesn't follow the page language by itself.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number label="en-US" value="4820000"></ui-big-number>
  <ui-big-number label="de-DE" value="4820000" locale="de-DE"></ui-big-number>
  <ui-big-number label="de-DE, full" value="4820000" locale="de-DE" truncate="false"></ui-big-number>
</div>
```

React:

```tsx
<UiBigNumber label="en-US" value={4820000} />
<UiBigNumber label="de-DE" value={4820000} locale="de-DE" />
<UiBigNumber label="de-DE, full" value={4820000} locale="de-DE" truncate={false} />
```

React + Tailwind:

```tsx
<BigNumber label="en-US" value={4820000} />
<BigNumber label="de-DE" value={4820000} locale="de-DE" />
<BigNumber label="de-DE, full" value={4820000} locale="de-DE" truncate={false} />
```

## A row of key figures

Put several big numbers side by side at the top of a dashboard. A [grid](https://parntengza.github.io/kanok-ui-docs/en/grid/) or a flex row with a gap is enough; the element has no margins.


HTML:

```html
<ui-grid>
  <ui-column sm="2" md="2" lg="4"><ui-big-number label="Contracts" value="1462" total="2000"></ui-big-number></ui-column>
  <ui-column sm="2" md="2" lg="4"><ui-big-number label="Waiting for approval" value="38"></ui-big-number></ui-column>
  <ui-column sm="2" md="2" lg="4"><ui-big-number label="Signed on time" value="94.2" percentage></ui-big-number></ui-column>
  <ui-column sm="2" md="2" lg="4"><ui-big-number label="Value (baht)" value="86400000" trending></ui-big-number></ui-column>
</ui-grid>
```

React:

```tsx
<UiGrid>
  <UiColumn sm="2" md="2" lg="4"><UiBigNumber label="Contracts" value={1462} total={2000} /></UiColumn>
  <UiColumn sm="2" md="2" lg="4"><UiBigNumber label="Waiting for approval" value={38} /></UiColumn>
  <UiColumn sm="2" md="2" lg="4"><UiBigNumber label="Signed on time" value={94.2} percentage /></UiColumn>
  <UiColumn sm="2" md="2" lg="4"><UiBigNumber label="Value (baht)" value={86400000} trending /></UiColumn>
</UiGrid>
```

React + Tailwind:

```tsx
<Grid>
  <Column sm={2} md={2} lg={4}><BigNumber label="Contracts" value={1462} total={2000} /></Column>
  <Column sm={2} md={2} lg={4}><BigNumber label="Waiting for approval" value={38} /></Column>
  <Column sm={2} md={2} lg={4}><BigNumber label="Signed on time" value={94.2} percentage /></Column>
  <Column sm={2} md={2} lg={4}><BigNumber label="Value (baht)" value={86400000} trending /></Column>
</Grid>
```

## Loading and skeleton

While the number loads, set `loading`: the element shows its skeleton at the same `size`. `ui-big-number-skeleton` is the skeleton on its own, for a layout drawn before any data. Both are hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start">
  <ui-big-number id="big-number-loading" label="Active contracts" value="12345" loading></ui-big-number>
  <ui-big-number-skeleton size="lg"></ui-big-number-skeleton>
  <ui-big-number-skeleton size="xl"></ui-big-number-skeleton>
</div>
<ui-toggle id="big-number-loading-toggle" label="Loading" checked></ui-toggle>

<script type="module">
  const figure = document.getElementById('big-number-loading');
  document.getElementById('big-number-loading-toggle').addEventListener('change', (event) => {
    figure.loading = event.target.checked;
  });
</script>
```

React:

```tsx
const [loading, setLoading] = useState(true);

<UiBigNumber label="Active contracts" value={12345} loading={loading} />
<UiBigNumberSkeleton size="lg" />
<UiBigNumberSkeleton size="xl" />
```

React + Tailwind:

```tsx
import { BigNumber, BigNumberSkeleton } from '@/components/ui/react-tw/big-number';

const [loading, setLoading] = useState(true);

<BigNumber label="Active contracts" value={12345} loading={loading} />
<BigNumberSkeleton size="lg" />
<BigNumberSkeleton size="xl" />
```

On the web component, import the skeleton from `@purpurabog/ui/big-number-skeleton`; `<ui-big-number>` loads it itself.

## Accessibility

- The big number is a `<figure>` with its label as the `<figcaption>`, so the label names the figure.
- The shortened number is what screen readers read: "12.3K". When the exact figure matters, use `truncate="false"` or give it in the text nearby.
- The trend arrow is hidden from screen readers. Put what it means in words.
- The info button of `tooltip-description` is a real button, reached with Tab.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-big-number>` · React `UiBigNumber`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `number \| undefined` |  | The value (the numerator of a fraction). |
| `total` | `total` | `number \| undefined` |  | The total after the slash; shown only when larger than `value` and different once abbreviated. |
| `label` | `label` | `string` | `''` | The label above the value. |
| `locale` | `locale` | `string` | `''` | How the numbers are written (Intl locale); en-US when empty or invalid. |
| `fraction-digits` | `fractionDigits` | `number` | `1` | Fraction digits of an abbreviated number. |
| `truncate` | `truncate` | `boolean` | `true` | Abbreviate the numbers (12,345 → 12.3K); `truncate="false"` writes them in full. |
| `percentage` | `percentage` | `boolean` | `false` | Add "%" after the value; the total never shows. |
| `trending` | `trending` | `boolean` | `false` | An up arrow before the value. |
| `force-show-total` | `forceShowTotal` | `boolean` | `false` | Show the total even when it would be hidden ("Unknown" without one). |
| `tooltip-description` | `tooltipDescription` | `string` | `''` | Text of an info button after the label, shown in a tooltip. |
| `size` | `size` | `BigNumberSize` | `'default'` |  |
| `loading` | `loading` | `boolean` | `false` | Show the skeleton instead. |

#### Slots

| Slot | Description |
|---|---|
| `label` | Replaces the label text (e.g. with your own info toggletip) |
| `trending-icon` | Replaces the up arrow of `trending` |
| `icon-button` | An icon button after the value |

#### CSS parts

| Part | Description |
|---|---|
| `figure` | The figure |
| `label` | The label |
| `value` | The value |
| `total` | The "/total" |
| `info` | The info button of `tooltip-description` |

### `<ui-big-number-skeleton>` · React `UiBigNumberSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `BigNumberSize` | `'default'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `value` | The value bar |


