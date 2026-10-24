# Structured list

A structured list shows a few rows of text in columns, for example to compare plans or to show the terms of a contract. It is lighter than a [data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/): no sorting, no toolbar. With `selection`, the user picks one row.


HTML:

```html
<ui-structured-list label="Plans">
  <ui-structured-list-row head>
    <ui-structured-list-cell>Plan</ui-structured-list-cell>
    <ui-structured-list-cell>Users</ui-structured-list-cell>
    <ui-structured-list-cell>Price</ui-structured-list-cell>
    <ui-structured-list-cell>Includes</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>Basic</ui-structured-list-cell>
    <ui-structured-list-cell>Up to 5</ui-structured-list-cell>
    <ui-structured-list-cell>Free</ui-structured-list-cell>
    <ui-structured-list-cell>Shared templates, 30-day audit log.</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>Team</ui-structured-list-cell>
    <ui-structured-list-cell>Up to 50</ui-structured-list-cell>
    <ui-structured-list-cell>฿390 / user</ui-structured-list-cell>
    <ui-structured-list-cell>Approval workflows, SSO, 1-year audit log.</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>Enterprise</ui-structured-list-cell>
    <ui-structured-list-cell>Unlimited</ui-structured-list-cell>
    <ui-structured-list-cell>Contact us</ui-structured-list-cell>
    <ui-structured-list-cell>Dedicated region, custom retention, SLA.</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
<UiStructuredList label="Plans">
  <UiStructuredListRow head>
    <UiStructuredListCell>Plan</UiStructuredListCell>
    <UiStructuredListCell>Users</UiStructuredListCell>
    <UiStructuredListCell>Price</UiStructuredListCell>
    <UiStructuredListCell>Includes</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>Basic</UiStructuredListCell>
    <UiStructuredListCell>Up to 5</UiStructuredListCell>
    <UiStructuredListCell>Free</UiStructuredListCell>
    <UiStructuredListCell>Shared templates, 30-day audit log.</UiStructuredListCell>
  </UiStructuredListRow>
  {/* … Team, Enterprise */}
</UiStructuredList>
```

React + Tailwind:

```tsx
<StructuredList label="Plans">
  <StructuredListRow head>
    <StructuredListCell>Plan</StructuredListCell>
    <StructuredListCell>Users</StructuredListCell>
    <StructuredListCell>Price</StructuredListCell>
    <StructuredListCell>Includes</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>Basic</StructuredListCell>
    <StructuredListCell>Up to 5</StructuredListCell>
    <StructuredListCell>Free</StructuredListCell>
    <StructuredListCell>Shared templates, 30-day audit log.</StructuredListCell>
  </StructuredListRow>
  {/* … Team, Enterprise */}
</StructuredList>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/structured-list
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-structured-list
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/structured-list.json
#    to its target:
#    components/ui/primitives/structured-list/structured-list-cell.ts
#    components/ui/primitives/structured-list/structured-list-row.ts
#    components/ui/primitives/structured-list/structured-list-skeleton.ts
#    components/ui/primitives/structured-list/structured-list.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-roving, shared-element, shared-field, shared-localize, shared-skeleton, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-structured-list.json
#    to its target:
#    components/ui/react-tw/structured-list.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-i18n, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/structured-list';</script>

<ui-structured-list label="Contract terms">
  <ui-structured-list-row head>
    <ui-structured-list-cell>Term</ui-structured-list-cell>
    <ui-structured-list-cell>Value</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell>Duration</ui-structured-list-cell>
    <ui-structured-list-cell>12 months</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
import { UiStructuredList, UiStructuredListRow, UiStructuredListCell } from '@purpurabog/ui/react';

<UiStructuredList label="Contract terms">
  <UiStructuredListRow head>
    <UiStructuredListCell>Term</UiStructuredListCell>
    <UiStructuredListCell>Value</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell>Duration</UiStructuredListCell>
    <UiStructuredListCell>12 months</UiStructuredListCell>
  </UiStructuredListRow>
</UiStructuredList>
```

React + Tailwind:

```tsx
import { StructuredList, StructuredListRow, StructuredListCell } from '@/components/ui/react-tw/structured-list';

<StructuredList label="Contract terms">
  <StructuredListRow head>
    <StructuredListCell>Term</StructuredListCell>
    <StructuredListCell>Value</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell>Duration</StructuredListCell>
    <StructuredListCell>12 months</StructuredListCell>
  </StructuredListRow>
</StructuredList>
```

## Structured list or data table?

| Component | Use it when |
|---|---|
| Structured list | A handful of rows to read or compare, or to pick one from. The cells wrap and hold any text. |
| [Data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/) | Many rows: the user sorts, searches, selects several rows or pages through them. |
| [Contained list](https://parntengza.github.io/kanok-ui-docs/en/contained-list/) | One column of items with an action each, in a panel or a tile. |

## A header row

`head` on the first row makes its cells column headers (bold, `columnheader`). Leave it out for a list of label–value pairs where the first column already says what each row is.


HTML:

```html
<ui-structured-list label="Contract summary">
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>Counterparty</ui-structured-list-cell>
    <ui-structured-list-cell>Acme Co., Ltd.</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>Signed on</ui-structured-list-cell>
    <ui-structured-list-cell>30 September 2026</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>Owner</ui-structured-list-cell>
    <ui-structured-list-cell>Legal department, Somchai K.</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
<UiStructuredList label="Contract summary">
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>Counterparty</UiStructuredListCell>
    <UiStructuredListCell>Acme Co., Ltd.</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>Signed on</UiStructuredListCell>
    <UiStructuredListCell>30 September 2026</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>Owner</UiStructuredListCell>
    <UiStructuredListCell>Legal department, Somchai K.</UiStructuredListCell>
  </UiStructuredListRow>
</UiStructuredList>
```

React + Tailwind:

```tsx
<StructuredList label="Contract summary">
  <StructuredListRow>
    <StructuredListCell nowrap>Counterparty</StructuredListCell>
    <StructuredListCell>Acme Co., Ltd.</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>Signed on</StructuredListCell>
    <StructuredListCell>30 September 2026</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>Owner</StructuredListCell>
    <StructuredListCell>Legal department, Somchai K.</StructuredListCell>
  </StructuredListRow>
</StructuredList>
```

## Long text and nowrap

Cells wrap their text, up to 576px wide each. `nowrap` keeps a cell on one line: use it on short cells such as names and amounts, so a long cell beside them wraps instead.


HTML:

```html
<ui-structured-list label="Clauses">
  <ui-structured-list-row head>
    <ui-structured-list-cell>Clause</ui-structured-list-cell>
    <ui-structured-list-cell>Summary</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>5.1 Payment</ui-structured-list-cell>
    <ui-structured-list-cell>The client pays each invoice within 30 days of receipt. Late payments carry interest of 1.25% a month on the unpaid amount.</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell nowrap>9.2 Termination</ui-structured-list-cell>
    <ui-structured-list-cell>Either party may end the agreement with 60 days' written notice. Work done until then is paid at the agreed rates.</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
<UiStructuredList label="Clauses">
  <UiStructuredListRow head>
    <UiStructuredListCell>Clause</UiStructuredListCell>
    <UiStructuredListCell>Summary</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>5.1 Payment</UiStructuredListCell>
    <UiStructuredListCell>The client pays each invoice within 30 days of receipt. …</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>9.2 Termination</UiStructuredListCell>
    <UiStructuredListCell>Either party may end the agreement with 60 days' written notice. …</UiStructuredListCell>
  </UiStructuredListRow>
</UiStructuredList>
```

React + Tailwind:

```tsx
<StructuredList label="Clauses">
  <StructuredListRow head>
    <StructuredListCell>Clause</StructuredListCell>
    <StructuredListCell>Summary</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>5.1 Payment</StructuredListCell>
    <StructuredListCell>The client pays each invoice within 30 days of receipt. …</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>9.2 Termination</StructuredListCell>
    <StructuredListCell>Either party may end the agreement with 60 days' written notice. …</StructuredListCell>
  </StructuredListRow>
</StructuredList>
```

## Condensed

`condensed` halves the cell padding (Carbon's condensed list). Use it for many short rows, for example in a side panel.


HTML:

```html
<ui-structured-list label="Signers" condensed>
  <ui-structured-list-row head>
    <ui-structured-list-cell>Name</ui-structured-list-cell>
    <ui-structured-list-cell>Role</ui-structured-list-cell>
    <ui-structured-list-cell>Signed</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell>Anan P.</ui-structured-list-cell>
    <ui-structured-list-cell>Managing director</ui-structured-list-cell>
    <ui-structured-list-cell>1 Oct 2026</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell>Kanya S.</ui-structured-list-cell>
    <ui-structured-list-cell>Legal counsel</ui-structured-list-cell>
    <ui-structured-list-cell>2 Oct 2026</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row>
    <ui-structured-list-cell>Somchai D.</ui-structured-list-cell>
    <ui-structured-list-cell>Witness</ui-structured-list-cell>
    <ui-structured-list-cell>—</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
<UiStructuredList label="Signers" condensed>
  <UiStructuredListRow head>
    <UiStructuredListCell>Name</UiStructuredListCell>
    <UiStructuredListCell>Role</UiStructuredListCell>
    <UiStructuredListCell>Signed</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell>Anan P.</UiStructuredListCell>
    <UiStructuredListCell>Managing director</UiStructuredListCell>
    <UiStructuredListCell>1 Oct 2026</UiStructuredListCell>
  </UiStructuredListRow>
  {/* … */}
</UiStructuredList>
```

React + Tailwind:

```tsx
<StructuredList label="Signers" condensed>
  <StructuredListRow head>
    <StructuredListCell>Name</StructuredListCell>
    <StructuredListCell>Role</StructuredListCell>
    <StructuredListCell>Signed</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell>Anan P.</StructuredListCell>
    <StructuredListCell>Managing director</StructuredListCell>
    <StructuredListCell>1 Oct 2026</StructuredListCell>
  </StructuredListRow>
  {/* … */}
</StructuredList>
```

## Flush

`flush` removes the padding before the first column, so the text lines up with the heading or the text above the list. It has no effect with `selection`, whose radio column needs the padding.


HTML:

```html
<div>
  <p style="margin: 0 0 8px; font: var(--ui-font-body-emphasis)">Billing</p>
  <ui-structured-list label="Billing" flush>
    <ui-structured-list-row>
      <ui-structured-list-cell nowrap>Invoice to</ui-structured-list-cell>
      <ui-structured-list-cell>Accounts payable, Acme Co., Ltd.</ui-structured-list-cell>
    </ui-structured-list-row>
    <ui-structured-list-row>
      <ui-structured-list-cell nowrap>Tax ID</ui-structured-list-cell>
      <ui-structured-list-cell>0105556012345</ui-structured-list-cell>
    </ui-structured-list-row>
  </ui-structured-list>
</div>
```

React:

```tsx
<h3>Billing</h3>
<UiStructuredList label="Billing" flush>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>Invoice to</UiStructuredListCell>
    <UiStructuredListCell>Accounts payable, Acme Co., Ltd.</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow>
    <UiStructuredListCell nowrap>Tax ID</UiStructuredListCell>
    <UiStructuredListCell>0105556012345</UiStructuredListCell>
  </UiStructuredListRow>
</UiStructuredList>
```

React + Tailwind:

```tsx
<h3>Billing</h3>
<StructuredList label="Billing" flush>
  <StructuredListRow>
    <StructuredListCell nowrap>Invoice to</StructuredListCell>
    <StructuredListCell>Accounts payable, Acme Co., Ltd.</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow>
    <StructuredListCell nowrap>Tax ID</StructuredListCell>
    <StructuredListCell>0105556012345</StructuredListCell>
  </StructuredListRow>
</StructuredList>
```

## Pick one row

`selection` turns the body rows into a single choice: each row gets a radio in a leading cell. A click anywhere on the row, Space or the arrow keys select it. Give each row a `value`; the list's `value` holds the chosen one, and `ui-change` (`onChange` in React + Tailwind) fires when the user picks another row.


HTML:

```html
<ui-structured-list id="structured-list-plan" label="Choose a plan" selection value="team">
  <ui-structured-list-row head>
    <ui-structured-list-cell>Plan</ui-structured-list-cell>
    <ui-structured-list-cell>Users</ui-structured-list-cell>
    <ui-structured-list-cell>Price</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="basic">
    <ui-structured-list-cell>Basic</ui-structured-list-cell>
    <ui-structured-list-cell>Up to 5</ui-structured-list-cell>
    <ui-structured-list-cell>Free</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="team">
    <ui-structured-list-cell>Team</ui-structured-list-cell>
    <ui-structured-list-cell>Up to 50</ui-structured-list-cell>
    <ui-structured-list-cell>฿390 / user</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="enterprise">
    <ui-structured-list-cell>Enterprise</ui-structured-list-cell>
    <ui-structured-list-cell>Unlimited</ui-structured-list-cell>
    <ui-structured-list-cell>Contact us</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
<p>Value: <output id="structured-list-plan-out">team</output></p>

<script type="module">
  const list = document.getElementById('structured-list-plan');
  const out = document.getElementById('structured-list-plan-out');
  list.addEventListener('ui-change', (event) => (out.value = event.detail.value));
</script>
```

React:

```tsx
const [plan, setPlan] = useState('team');

<UiStructuredList label="Choose a plan" selection value={plan} onUiChange={(e) => setPlan(e.detail.value)}>
  <UiStructuredListRow head>
    <UiStructuredListCell>Plan</UiStructuredListCell>
    <UiStructuredListCell>Users</UiStructuredListCell>
    <UiStructuredListCell>Price</UiStructuredListCell>
  </UiStructuredListRow>
  <UiStructuredListRow value="basic">
    <UiStructuredListCell>Basic</UiStructuredListCell>
    <UiStructuredListCell>Up to 5</UiStructuredListCell>
    <UiStructuredListCell>Free</UiStructuredListCell>
  </UiStructuredListRow>
  {/* … team, enterprise */}
</UiStructuredList>
<p>Value: <output>{plan}</output></p>
```

React + Tailwind:

```tsx
const [plan, setPlan] = useState('team');

<StructuredList label="Choose a plan" selection value={plan} onChange={setPlan}>
  <StructuredListRow head>
    <StructuredListCell>Plan</StructuredListCell>
    <StructuredListCell>Users</StructuredListCell>
    <StructuredListCell>Price</StructuredListCell>
  </StructuredListRow>
  <StructuredListRow value="basic">
    <StructuredListCell>Basic</StructuredListCell>
    <StructuredListCell>Up to 5</StructuredListCell>
    <StructuredListCell>Free</StructuredListCell>
  </StructuredListRow>
  {/* … team, enterprise */}
</StructuredList>
<p>Value: <output>{plan}</output></p>
```

React + Tailwind also takes `defaultValue` for an uncontrolled list. Without a `value` (or with one no row has), no row is selected and Tab stops on the first row.

## Change the choice from your code

Set `value` to select a row from your own code, for example from a "Use the recommended plan" button. Setting it doesn't fire `ui-change`: that event is for the user's own picks.


HTML:

```html
<ui-structured-list id="structured-list-method" label="Delivery method" selection condensed>
  <ui-structured-list-row head>
    <ui-structured-list-cell>Method</ui-structured-list-cell>
    <ui-structured-list-cell>Arrives</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="email">
    <ui-structured-list-cell>Signed PDF by email</ui-structured-list-cell>
    <ui-structured-list-cell>Today</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="post">
    <ui-structured-list-cell>Registered post</ui-structured-list-cell>
    <ui-structured-list-cell>3–5 days</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="courier">
    <ui-structured-list-cell>Courier</ui-structured-list-cell>
    <ui-structured-list-cell>Next day</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="structured-list-method-recommend" kind="tertiary" size="sm">Use the recommended method</ui-button>
  <ui-button id="structured-list-method-clear" kind="ghost" size="sm">Clear</ui-button>
</div>

<script type="module">
  const list = document.getElementById('structured-list-method');
  document.getElementById('structured-list-method-recommend').addEventListener('click', () => (list.value = 'email'));
  document.getElementById('structured-list-method-clear').addEventListener('click', () => (list.value = ''));
</script>
```

React:

```tsx
const [method, setMethod] = useState('');

<UiStructuredList label="Delivery method" selection condensed value={method} onUiChange={(e) => setMethod(e.detail.value)}>
  {/* head row, then rows with value="email", "post", "courier" */}
</UiStructuredList>
<UiButton kind="tertiary" size="sm" onClick={() => setMethod('email')}>Use the recommended method</UiButton>
<UiButton kind="ghost" size="sm" onClick={() => setMethod('')}>Clear</UiButton>
```

React + Tailwind:

```tsx
const [method, setMethod] = useState('');

<StructuredList label="Delivery method" selection condensed value={method} onChange={setMethod}>
  {/* head row, then rows with value="email", "post", "courier" */}
</StructuredList>
<Button kind="tertiary" size="sm" onClick={() => setMethod('email')}>Use the recommended method</Button>
<Button kind="ghost" size="sm" onClick={() => setMethod('')}>Clear</Button>
```

## Names for screen readers

`label` names the table (default: "Structured list section"). In a selection list, each row's radio is named by the row's text; when that text is long, give the row a short `aria-label`. `selection-label` (`selectionLabel` in React + Tailwind) names the radio column (default: "Select").


HTML:

```html
<ui-structured-list label="Signing order" selection selection-label="Sign first" value="md">
  <ui-structured-list-row head>
    <ui-structured-list-cell>Signer</ui-structured-list-cell>
    <ui-structured-list-cell>Why</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="md" aria-label="Managing director">
    <ui-structured-list-cell nowrap>Managing director</ui-structured-list-cell>
    <ui-structured-list-cell>Signs for the company; the other signers follow the director's copy.</ui-structured-list-cell>
  </ui-structured-list-row>
  <ui-structured-list-row value="counsel" aria-label="Legal counsel">
    <ui-structured-list-cell nowrap>Legal counsel</ui-structured-list-cell>
    <ui-structured-list-cell>Checks the final wording before anyone signs, then initials every page.</ui-structured-list-cell>
  </ui-structured-list-row>
</ui-structured-list>
```

React:

```tsx
<UiStructuredList label="Signing order" selection selectionLabel="Sign first" value="md">
  {/* head row */}
  <UiStructuredListRow value="md" aria-label="Managing director">…</UiStructuredListRow>
  <UiStructuredListRow value="counsel" aria-label="Legal counsel">…</UiStructuredListRow>
</UiStructuredList>
```

React + Tailwind:

```tsx
<StructuredList label="Signing order" selection selectionLabel="Sign first" defaultValue="md">
  {/* head row */}
  <StructuredListRow value="md" aria-label="Managing director">…</StructuredListRow>
  <StructuredListRow value="counsel" aria-label="Legal counsel">…</StructuredListRow>
</StructuredList>
```

## Skeleton

While the rows load, show `ui-structured-list-skeleton`: a header of three bars and `rows` empty rows (default 5). It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<ui-structured-list-skeleton rows="3"></ui-structured-list-skeleton>
```

React:

```tsx
import { UiStructuredListSkeleton } from '@purpurabog/ui/react';

<UiStructuredListSkeleton rows={3} />
```

React + Tailwind:

```tsx
import { StructuredListSkeleton } from '@/components/ui/react-tw/structured-list';

<StructuredListSkeleton rows={3} />
```

On the web component, import it from `@purpurabog/ui/structured-list-skeleton`.

## Accessibility

- The list is a `role="table"` with `row`, `cell` and `columnheader` roles; React + Tailwind renders a real `<table>`.
- In a selection list, the rows' radios form one group: Tab reaches the selected row (else the first), and the arrow keys move and select, wrapping at the ends. Each radio says "1 of 3".
- The selected row is `aria-selected`. Focus draws a 2px outline around the whole row.
- A selection list isn't a form field: read `value` and send it yourself.

Unstyled React parts with the same behaviour: [Headless Structured list](https://parntengza.github.io/kanok-ui-docs/en/headless-structured-list/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-structured-list>` · React `UiStructuredList`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `selection` | `selection` | `boolean` | `false` |  |
| `condensed` | `condensed` | `boolean` | `false` |  |
| `flush` | `flush` | `boolean` | `false` |  |
| `value` | `value` | `string` | `''` | Selected row's `value` (selection lists). |
| `label` | `label` | `string` | `''` |  |
| `selection-label` | `selectionLabel` | `string` | `''` | Screen-reader name of the radio column (selection lists). |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Selection lists: focus the selected (or first) row's radio. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-change` | `onUiChange` | detail: { value } when the user selects another row |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-structured-list-row>` elements (first one usually `head`) |

### `<ui-structured-list-row>` · React `UiStructuredListRow`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `head` | `head` | `boolean` | `false` |  |
| `value` | `value` | `string` | `''` | Identifies the row in the list's `value` / `ui-change`. |
| `selected` | `selected` | `boolean` | `false` | Set by the list. |
| `data-selection` | `selection` | `boolean` | `false` | Set by the list: `selection` mode renders the radio cell. |
| `data-condensed` | `condensed` | `boolean` | `false` | Set by the list. |
| `data-flush` | `flush` | `boolean` | `false` | Set by the list. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `focusable` | `boolean` | Set by the list: the hidden radio is the row's tab stop. |
| `selectionLabel` | `string` | Set by the list: screen-reader name of the radio column header. |
| `position` | `number` | Set by the list: position among the selectable rows and their count. Each radio sits in its own shadow root, so the browser would count "1 of 1". |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the row's radio (selection lists). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-row-select` | none (use a ref) |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-structured-list-cell>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `radio-cell` | The leading cell with the radio icon (selection lists) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-structured-list-selected` |  | Fill of the chosen row of a selection list (default `--ui-surface-2`; Kanok: `--ui-highlight`) |

### `<ui-structured-list-cell>` · React `UiStructuredListCell`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `head` | `head` | `boolean` | `false` | Set by the row: this cell is a column header. |
| `nowrap` | `nowrap` | `boolean` | `false` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | Cell content |

### `<ui-structured-list-skeleton>` · React `UiStructuredListSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `rows` | `rows` | `number` | `5` |  |

#### CSS parts

| Part | Description |
|---|---|
| `header` | The header bars |
| `row` | Each empty row |


