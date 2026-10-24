# List

Carbon's lists show related items in running content: steps to follow, conditions, documents to attach. `ui-unordered-list` marks each item with an en dash, `ui-ordered-list` numbers them, and `ui-list-item` is one item. A list inside an item is nested, and the elements notice that for you.


HTML:

```html
<ui-unordered-list>
  <ui-list-item>A copy of the company registration</ui-list-item>
  <ui-list-item>The vendor's quotation</ui-list-item>
  <ui-list-item>Bank account details for payment</ui-list-item>
</ui-unordered-list>
```

React:

```tsx
<UiUnorderedList>
  <UiListItem>A copy of the company registration</UiListItem>
  <UiListItem>The vendor's quotation</UiListItem>
  <UiListItem>Bank account details for payment</UiListItem>
</UiUnorderedList>
```

React + Tailwind:

```tsx
<UnorderedList>
  <ListItem>A copy of the company registration</ListItem>
  <ListItem>The vendor's quotation</ListItem>
  <ListItem>Bank account details for payment</ListItem>
</UnorderedList>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/list
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-lists
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/list.json
#    to its target:
#    components/ui/primitives/list/list-item.ts
#    components/ui/primitives/list/list-shared.ts
#    components/ui/primitives/list/list.ts
#    components/ui/primitives/list/ordered-list.ts
#    components/ui/primitives/list/unordered-list.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-lists.json
#    to its target:
#    components/ui/react-tw/lists.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/list';</script>

<ui-unordered-list>
  <ui-list-item>The vendor's quotation</ui-list-item>
</ui-unordered-list>
```

React:

```tsx
import { UiUnorderedList, UiOrderedList, UiListItem } from '@purpurabog/ui/react';

<UiUnorderedList>
  <UiListItem>The vendor's quotation</UiListItem>
</UiUnorderedList>
```

React + Tailwind:

```tsx
import { UnorderedList, OrderedList, ListItem } from '@/components/ui/react-tw/lists';

<UnorderedList>
  <ListItem>The vendor's quotation</ListItem>
</UnorderedList>
```

The React + Tailwind components render real `<ul>`, `<ol>` and `<li>` elements. This list is for content; for a list people pick from or act on, see [Contained list](https://parntengza.github.io/kanok-ui-docs/en/contained-list/) and [Structured list](https://parntengza.github.io/kanok-ui-docs/en/structured-list/).

## Unordered

Use an unordered list when the order doesn't matter. Each item gets an en dash 16px before the text, and the list is indented 16px.


HTML:

```html
<p>Before you submit the purchase request, attach:</p>
<ui-unordered-list>
  <ui-list-item>The vendor's quotation, signed and dated</ui-list-item>
  <ui-list-item>A comparison of at least three quotations for amounts over 100,000 THB</ui-list-item>
  <ui-list-item>The budget code from your department head</ui-list-item>
</ui-unordered-list>
```

React:

```tsx
<p>Before you submit the purchase request, attach:</p>
<UiUnorderedList>
  <UiListItem>The vendor's quotation, signed and dated</UiListItem>
  <UiListItem>A comparison of at least three quotations for amounts over 100,000 THB</UiListItem>
  <UiListItem>The budget code from your department head</UiListItem>
</UiUnorderedList>
```

React + Tailwind:

```tsx
<p>Before you submit the purchase request, attach:</p>
<UnorderedList>
  <ListItem>The vendor's quotation, signed and dated</ListItem>
  <ListItem>A comparison of at least three quotations for amounts over 100,000 THB</ListItem>
  <ListItem>The budget code from your department head</ListItem>
</UnorderedList>
```

## Ordered

Use an ordered list for steps that happen in order. The numbers ("1.") sit 24px before the text, outside the list's own box, as in Carbon: leave at least 24px of room on the start side (the demo box has it).


HTML:

```html
<ui-ordered-list>
  <ui-list-item>Fill in the request and attach the quotation.</ui-list-item>
  <ui-list-item>Your department head approves it.</ui-list-item>
  <ui-list-item>Finance checks the budget code.</ui-list-item>
  <ui-list-item>Procurement issues the purchase order.</ui-list-item>
</ui-ordered-list>
```

React:

```tsx
<UiOrderedList>
  <UiListItem>Fill in the request and attach the quotation.</UiListItem>
  <UiListItem>Your department head approves it.</UiListItem>
  <UiListItem>Finance checks the budget code.</UiListItem>
  <UiListItem>Procurement issues the purchase order.</UiListItem>
</UiOrderedList>
```

React + Tailwind:

```tsx
<OrderedList>
  <ListItem>Fill in the request and attach the quotation.</ListItem>
  <ListItem>Your department head approves it.</ListItem>
  <ListItem>Finance checks the budget code.</ListItem>
  <ListItem>Procurement issues the purchase order.</ListItem>
</OrderedList>
```

## Nested unordered

Put a list inside an item to nest it. The inner list is 32px in, and its items get a small square (▪) 12px before the text. You don't set `nested`: a list inside a `ui-list-item` (a `ListItem` in React + Tailwind) sets it itself.


HTML:

```html
<ui-unordered-list>
  <ui-list-item>Company documents
    <ui-unordered-list>
      <ui-list-item>Company registration, issued in the last 6 months</ui-list-item>
      <ui-list-item>VAT registration (ภ.พ.20)</ui-list-item>
    </ui-unordered-list>
  </ui-list-item>
  <ui-list-item>Bank details
    <ui-unordered-list>
      <ui-list-item>A copy of the account book's first page</ui-list-item>
    </ui-unordered-list>
  </ui-list-item>
</ui-unordered-list>
```

React:

```tsx
<UiUnorderedList>
  <UiListItem>
    Company documents
    <UiUnorderedList>
      <UiListItem>Company registration, issued in the last 6 months</UiListItem>
      <UiListItem>VAT registration (ภ.พ.20)</UiListItem>
    </UiUnorderedList>
  </UiListItem>
  <UiListItem>
    Bank details
    <UiUnorderedList>
      <UiListItem>A copy of the account book's first page</UiListItem>
    </UiUnorderedList>
  </UiListItem>
</UiUnorderedList>
```

React + Tailwind:

```tsx
<UnorderedList>
  <ListItem>
    Company documents
    <UnorderedList>
      <ListItem>Company registration, issued in the last 6 months</ListItem>
      <ListItem>VAT registration (ภ.พ.20)</ListItem>
    </UnorderedList>
  </ListItem>
  <ListItem>
    Bank details
    <UnorderedList>
      <ListItem>A copy of the account book's first page</ListItem>
    </UnorderedList>
  </ListItem>
</UnorderedList>
```

## Nested ordered

A nested ordered list counts with letters (a. b. c.), 32px in. Use it for sub-steps.


HTML:

```html
<ui-ordered-list>
  <ui-list-item>Prepare the contract
    <ui-ordered-list>
      <ui-list-item>Copy the latest template from the legal site.</ui-list-item>
      <ui-list-item>Fill in the parties, the amount and the dates.</ui-list-item>
    </ui-ordered-list>
  </ui-list-item>
  <ui-list-item>Send it for review
    <ui-ordered-list>
      <ui-list-item>Finance checks the amount and payment terms.</ui-list-item>
      <ui-list-item>Legal checks the clauses.</ui-list-item>
    </ui-ordered-list>
  </ui-list-item>
  <ui-list-item>Sign and file it.</ui-list-item>
</ui-ordered-list>
```

React:

```tsx
<UiOrderedList>
  <UiListItem>
    Prepare the contract
    <UiOrderedList>
      <UiListItem>Copy the latest template from the legal site.</UiListItem>
      <UiListItem>Fill in the parties, the amount and the dates.</UiListItem>
    </UiOrderedList>
  </UiListItem>
  <UiListItem>
    Send it for review
    <UiOrderedList>
      <UiListItem>Finance checks the amount and payment terms.</UiListItem>
      <UiListItem>Legal checks the clauses.</UiListItem>
    </UiOrderedList>
  </UiListItem>
  <UiListItem>Sign and file it.</UiListItem>
</UiOrderedList>
```

React + Tailwind:

```tsx
<OrderedList>
  <ListItem>
    Prepare the contract
    <OrderedList>
      <ListItem>Copy the latest template from the legal site.</ListItem>
      <ListItem>Fill in the parties, the amount and the dates.</ListItem>
    </OrderedList>
  </ListItem>
  <ListItem>
    Send it for review
    <OrderedList>
      <ListItem>Finance checks the amount and payment terms.</ListItem>
      <ListItem>Legal checks the clauses.</ListItem>
    </OrderedList>
  </ListItem>
  <ListItem>Sign and file it.</ListItem>
</OrderedList>
```

## Mixed

The two kinds nest inside each other: steps with a list of things to bring, for example. Three levels is the most people can follow.


HTML:

```html
<ui-ordered-list>
  <ui-list-item>Book a room for the signing.</ui-list-item>
  <ui-list-item>Bring to the meeting:
    <ui-unordered-list>
      <ui-list-item>Two printed copies of the contract</ui-list-item>
      <ui-list-item>The company seal</ui-list-item>
      <ui-list-item>ID cards of both signers</ui-list-item>
    </ui-unordered-list>
  </ui-list-item>
  <ui-list-item>Scan the signed copy and upload it.</ui-list-item>
</ui-ordered-list>
```

React:

```tsx
<UiOrderedList>
  <UiListItem>Book a room for the signing.</UiListItem>
  <UiListItem>
    Bring to the meeting:
    <UiUnorderedList>
      <UiListItem>Two printed copies of the contract</UiListItem>
      <UiListItem>The company seal</UiListItem>
      <UiListItem>ID cards of both signers</UiListItem>
    </UiUnorderedList>
  </UiListItem>
  <UiListItem>Scan the signed copy and upload it.</UiListItem>
</UiOrderedList>
```

React + Tailwind:

```tsx
<OrderedList>
  <ListItem>Book a room for the signing.</ListItem>
  <ListItem>
    Bring to the meeting:
    <UnorderedList>
      <ListItem>Two printed copies of the contract</ListItem>
      <ListItem>The company seal</ListItem>
      <ListItem>ID cards of both signers</ListItem>
    </UnorderedList>
  </ListItem>
  <ListItem>Scan the signed copy and upload it.</ListItem>
</OrderedList>
```

## Browser numbers

`native` uses the browser's own decimal numbers instead of Carbon's counter. The browser lines them up on the dot once the list passes 9 items. In React + Tailwind, it also lets the `<ol>` attributes `start` and `reversed` work, which Carbon's counter ignores. Leave room on the start side here too.


HTML:

```html
<ui-ordered-list native>
  <ui-list-item>Request</ui-list-item>
  <ui-list-item>Department head</ui-list-item>
  <ui-list-item>Finance</ui-list-item>
  <ui-list-item>Legal</ui-list-item>
  <ui-list-item>Procurement</ui-list-item>
  <ui-list-item>Vendor signs</ui-list-item>
  <ui-list-item>Company signs</ui-list-item>
  <ui-list-item>Filing</ui-list-item>
  <ui-list-item>Payment set-up</ui-list-item>
  <ui-list-item>First delivery</ui-list-item>
</ui-ordered-list>
```

React:

```tsx
<UiOrderedList native>
  {steps.map((step) => <UiListItem key={step}>{step}</UiListItem>)}
</UiOrderedList>
```

React + Tailwind:

```tsx
<OrderedList native>
  {steps.map((step) => <ListItem key={step}>{step}</ListItem>)}
</OrderedList>
```

## Expressive

`is-expressive` (`isExpressive`) sets the text in body-02 (16px / 24px) instead of body-01 (14px / 20px). Use it on reading pages, such as a policy or a help article. Nested lists take the size of their parent.


HTML:

```html
<ui-unordered-list is-expressive>
  <ui-list-item>Contracts over 1,000,000 THB need two signers.</ui-list-item>
  <ui-list-item>Keep signed copies for 10 years.
    <ui-unordered-list>
      <ui-list-item>Paper copies go to the archive room.</ui-list-item>
      <ui-list-item>Scans go to the contract system.</ui-list-item>
    </ui-unordered-list>
  </ui-list-item>
</ui-unordered-list>
```

React:

```tsx
<UiUnorderedList isExpressive>
  <UiListItem>Contracts over 1,000,000 THB need two signers.</UiListItem>
  <UiListItem>
    Keep signed copies for 10 years.
    <UiUnorderedList>
      <UiListItem>Paper copies go to the archive room.</UiListItem>
      <UiListItem>Scans go to the contract system.</UiListItem>
    </UiUnorderedList>
  </UiListItem>
</UiUnorderedList>
```

React + Tailwind:

```tsx
<UnorderedList isExpressive>
  <ListItem>Contracts over 1,000,000 THB need two signers.</ListItem>
  <ListItem>
    Keep signed copies for 10 years.
    <UnorderedList>
      <ListItem>Paper copies go to the archive room.</ListItem>
      <ListItem>Scans go to the contract system.</ListItem>
    </UnorderedList>
  </ListItem>
</UnorderedList>
```

## Links and code in items

Items take any inline content: [links](https://parntengza.github.io/kanok-ui-docs/en/link/), [inline code](https://parntengza.github.io/kanok-ui-docs/en/code-snippet/#inline), emphasis. Long items wrap under their own text, not under the marker.


HTML:

```html
<ui-unordered-list>
  <ui-list-item>Read the <ui-link href="#list-policy" inline>signing policy</ui-link> before your first contract.</ui-list-item>
  <ui-list-item>Use the cost centre <ui-code-snippet type="inline">CC-4410-PROC</ui-code-snippet> for office supplies.</ui-list-item>
  <ui-list-item><strong>Don't</strong> sign a contract that legal hasn't reviewed, even when the vendor asks you to hurry because the price is only valid until the end of the week.</ui-list-item>
</ui-unordered-list>
```

React:

```tsx
<UiUnorderedList>
  <UiListItem>Read the <UiLink href="/policies/signing" inline>signing policy</UiLink> before your first contract.</UiListItem>
  <UiListItem>Use the cost centre <UiCodeSnippet type="inline">CC-4410-PROC</UiCodeSnippet> for office supplies.</UiListItem>
  <UiListItem><strong>Don't</strong> sign a contract that legal hasn't reviewed, even when the vendor asks you to hurry …</UiListItem>
</UiUnorderedList>
```

React + Tailwind:

```tsx
<UnorderedList>
  <ListItem>Read the <Link href="/policies/signing" inline>signing policy</Link> before your first contract.</ListItem>
  <ListItem>Use the cost centre <CodeSnippet type="inline">CC-4410-PROC</CodeSnippet> for office supplies.</ListItem>
  <ListItem><strong>Don't</strong> sign a contract that legal hasn't reviewed, even when the vendor asks you to hurry …</ListItem>
</UnorderedList>
```

## Accessibility

- Screen readers announce a list and its item count. `ui-list-item` gets `role="listitem"` (unless you set a role), and the list's `<ul>` / `<ol>` sits in the element's shadow root around the items.
- Use an ordered list only when the order matters; the numbers are read out.
- The markers are drawn with CSS, so they aren't read; don't put meaning in them.
- Keep items short and parallel: start each one the same way (all nouns, or all verbs).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-unordered-list>` · React `UiUnorderedList`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `nested` | `nested` | `boolean` | `false` | Nested in another list's item (set for you when it sits in a `<ui-list-item>`). |
| `is-expressive` | `isExpressive` | `boolean` | `false` | Body-02 type (16px) for expressive pages. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-list-item>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `list` | The `<ul>` |

### `<ui-ordered-list>` · React `UiOrderedList`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `nested` | `nested` | `boolean` | `false` | Nested in another list's item (set for you when it sits in a `<ui-list-item>`). |
| `native` | `native` | `boolean` | `false` | The browser's own markers (`decimal`) instead of Carbon's counter. |
| `is-expressive` | `isExpressive` | `boolean` | `false` | Body-02 type (16px) for expressive pages. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-list-item>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `list` | The `<ol>` |

### `<ui-list-item>` · React `UiListItem`

#### Slots

| Slot | Description |
|---|---|
| (default) | The item's content, and a nested list |


