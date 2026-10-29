# Product card

`ui-productive-card` and `ui-expressive-card` are Carbon for IBM Products' `ProductiveCard` and `ExpressiveCard`: cards you configure with attributes, not with parts. They are IBM Products' legacy cards, kept for screens that must match IBM product UIs. **For new work, use [Card](https://parntengza.github.io/kanok-ui-docs/en/card/)**: Carbon's parts-based card, where both Carbon and IBM Products are heading.


HTML:

```html
<ui-productive-card label="Department" heading="Legal" description="6 people" primary-button-text="View team" style="max-width: 360px">
  <ui-icon-button slot="actions" label="Edit"><svg viewBox="0 0 16 16"><path d="M1 13h14v1H1zM12.7 4.5 10.5 2.3a1 1 0 0 0-1.4 0L3 8.4V11h2.6l6.1-6.1a1 1 0 0 0 0-1.4zM5.2 10H4V8.8l4-4 1.2 1.2zm4.7-4.7L8.7 4.1l1.1-1.1L11 4.2z" /></svg></ui-icon-button>
  14 contracts in review, 2 overdue.
</ui-productive-card>
```

React:

```tsx
<UiProductiveCard label="Department" heading="Legal" description="6 people" primaryButtonText="View team" style={{ maxWidth: 360 }}>
  <UiIconButton slot="actions" label="Edit">{editIcon}</UiIconButton>
  14 contracts in review, 2 overdue.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard
  label="Department"
  title="Legal"
  description="6 people"
  primaryButtonText="View team"
  actionIcons={[{ id: 'edit', icon: editIcon, iconDescription: 'Edit' }]}
  className="max-w-[360px]"
>
  14 contracts in review, 2 overdue.
</ProductiveCard>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/product-card
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-product-card
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/product-card.json
#    to its target:
#    components/ui/primitives/product-card/expressive-card.ts
#    components/ui/primitives/product-card/product-card-shared.ts
#    components/ui/primitives/product-card/product-card.ts
#    components/ui/primitives/product-card/productive-card.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    button, core-product-card, icon-button, layer, menu, overflow-menu, shared-element, shared-localize, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-product-card.json
#    to its target:
#    components/ui/react-tw/product-card.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-product-card, tw-button, tw-i18n, tw-icon-button, tw-layer, tw-menu, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Both cards load from one module.


HTML:

```html
<script type="module">import '@purpurabog/ui/product-card';</script>

<ui-productive-card heading="Legal" description="6 people">14 contracts in review.</ui-productive-card>
```

React:

```tsx
import { UiProductiveCard, UiExpressiveCard } from '@purpurabog/ui/react';

<UiProductiveCard heading="Legal" description="6 people">14 contracts in review.</UiProductiveCard>
```

React + Tailwind:

```tsx
import { ProductiveCard, ExpressiveCard } from '@/components/ui/react-tw/product-card';

<ProductiveCard title="Legal" description="6 people">14 contracts in review.</ProductiveCard>
```

The title is `heading` on the element (`title` is every element's native tooltip) and `title` in React + Tailwind, as in Carbon.

## Productive, expressive or Card?

| Component | Use it when |
|---|---|
| `ui-productive-card` | Dense product screens that copy IBM Products: a compact title, small icon actions or an overflow menu, ghost buttons. |
| `ui-expressive-card` | Content cards that copy IBM Products: media, a pictogram, a larger title, primary and secondary buttons. |
| [Card](https://parntengza.github.io/kanok-ui-docs/en/card/) | Anything new. You build it from parts, and it is where Carbon is going. |

## Action icons

Icon buttons go in the `actions` slot (`actionIcons` in React + Tailwind); give each a `label`. The card makes them ghost buttons and sets their size: small at the top, medium at the bottom. They are separate tab stops.


HTML:

```html
<ui-productive-card id="product-card-icons" heading="Branch renovation" description="Due in 3 days" style="max-width: 360px">
  <ui-icon-button slot="actions" label="Edit"><svg viewBox="0 0 16 16"><path d="M1 13h14v1H1zM12.7 4.5 10.5 2.3a1 1 0 0 0-1.4 0L3 8.4V11h2.6l6.1-6.1a1 1 0 0 0 0-1.4zM5.2 10H4V8.8l4-4 1.2 1.2zm4.7-4.7L8.7 4.1l1.1-1.1L11 4.2z" /></svg></ui-icon-button>
  <ui-icon-button slot="actions" label="Delete"><svg viewBox="0 0 16 16"><path d="M6 6h1v6H6zm3 0h1v6H9zM2 3v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4h1V3zm2 11V4h8v10zM6 1h4v1H6z" /></svg></ui-icon-button>
  Silom branch, second floor. The contractor starts on 1 November.
</ui-productive-card>
<p>Pressed: <output id="product-card-icons-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('product-card-icons-out');
  for (const button of document.querySelectorAll('#product-card-icons ui-icon-button')) {
    button.addEventListener('click', () => (out.value = button.label));
  }
</script>
```

React:

```tsx
<UiProductiveCard heading="Branch renovation" description="Due in 3 days">
  <UiIconButton slot="actions" label="Edit" onClick={edit}>{editIcon}</UiIconButton>
  <UiIconButton slot="actions" label="Delete" onClick={remove}>{trashIcon}</UiIconButton>
  Silom branch, second floor. The contractor starts on 1 November.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard
  title="Branch renovation"
  description="Due in 3 days"
  actionIcons={[
    { id: 'edit', icon: editIcon, iconDescription: 'Edit', onClick: edit },
    { id: 'delete', icon: trashIcon, iconDescription: 'Delete', onClick: remove },
  ]}
>
  Silom branch, second floor. The contractor starts on 1 November.
</ProductiveCard>
```

## Overflow menu

A productive card can show its actions in an overflow menu instead: put `ui-menu-item`s in the `overflow` slot (`overflowActions` in React + Tailwind). When there are menu items, they replace the icons. The menu button is named "Options" (translated); `overflow-aria-label` changes it. Choosing an item fires `ui-select`, which bubbles up to the card.


HTML:

```html
<ui-productive-card id="product-card-menu" heading="Supply agreement C-2026-014" description="Chiang Mai plant" overflow-aria-label="Contract actions" style="max-width: 360px">
  <ui-menu-item slot="overflow" label="Duplicate"></ui-menu-item>
  <ui-menu-item slot="overflow" label="Send for signature"></ui-menu-item>
  <ui-menu-item slot="overflow" label="Delete" kind="danger"></ui-menu-item>
  Packaging materials, monthly, until December 2027.
</ui-productive-card>
<p>Chosen: <output id="product-card-menu-out">nothing yet</output></p>

<script type="module">
  const card = document.getElementById('product-card-menu');
  const out = document.getElementById('product-card-menu-out');
  card.addEventListener('ui-select', (event) => (out.value = event.detail.label));
</script>
```

React:

```tsx
<UiProductiveCard heading="Supply agreement C-2026-014" description="Chiang Mai plant" overflowAriaLabel="Contract actions">
  <UiMenuItem slot="overflow" label="Duplicate" onUiSelect={duplicate} />
  <UiMenuItem slot="overflow" label="Send for signature" onUiSelect={send} />
  <UiMenuItem slot="overflow" label="Delete" kind="danger" onUiSelect={remove} />
  Packaging materials, monthly, until December 2027.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard
  title="Supply agreement C-2026-014"
  description="Chiang Mai plant"
  overflowAriaLabel="Contract actions"
  overflowActions={[
    { id: 'duplicate', itemText: 'Duplicate', onClick: duplicate },
    { id: 'send', itemText: 'Send for signature', onClick: send },
    { id: 'delete', itemText: 'Delete', kind: 'danger', onClick: remove },
  ]}
>
  Packaging materials, monthly, until December 2027.
</ProductiveCard>
```

## Actions at the bottom

`actions-placement="bottom"` moves the icons (or the menu) into the footer, at medium size. With a primary button there too, the button goes at the start and the icons at the end.


HTML:

```html
<ui-productive-card heading="Monthly contract summary" description="September 2026" actions-placement="bottom" primary-button-text="View report" style="max-width: 360px">
  <ui-icon-button slot="actions" label="Download"><svg viewBox="0 0 16 16"><path d="M13 12v2H3v-2H2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2zM13 7l-.7-.7-3.8 3.8V1h-1v9.1L3.7 6.3 3 7l5 5z" /></svg></ui-icon-button>
  48 contracts signed, 5 expiring in the next 30 days.
</ui-productive-card>
```

React:

```tsx
<UiProductiveCard heading="Monthly contract summary" description="September 2026" actionsPlacement="bottom" primaryButtonText="View report">
  <UiIconButton slot="actions" label="Download">{downloadIcon}</UiIconButton>
  48 contracts signed, 5 expiring in the next 30 days.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard
  title="Monthly contract summary"
  description="September 2026"
  actionsPlacement="bottom"
  primaryButtonText="View report"
  actionIcons={[{ id: 'download', icon: downloadIcon, iconDescription: 'Download' }]}
>
  48 contracts signed, 5 expiring in the next 30 days.
</ProductiveCard>
```

## Buttons

`primary-button-text` and `secondary-button-text` add buttons; on a productive card both are ghost buttons. They sit in the footer by default. `primary-button-placement="top"` moves the primary one next to the top actions as a small ghost button; `secondary-button-placement="top"` does the same for the secondary one, but only when there are other top actions, as in Carbon. A press fires `ui-primary-button-click` or `ui-secondary-button-click`.


HTML:

```html
<ui-productive-card id="product-card-buttons" heading="Approval request" description="From Malee S." primary-button-text="Approve" secondary-button-text="Reject" style="max-width: 360px">
  Purchase of 20 laptops for the Finance department, 640,000 baht.
</ui-productive-card>
<ui-productive-card id="product-card-top" heading="Approval request" description="From Somchai K." primary-button-text="Approve" primary-button-placement="top" style="max-width: 360px">
  Renewal of the cleaning contract, 12 months.
</ui-productive-card>
<p>Pressed: <output id="product-card-buttons-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('product-card-buttons-out');
  for (const id of ['product-card-buttons', 'product-card-top']) {
    const card = document.getElementById(id);
    card.addEventListener('ui-primary-button-click', () => (out.value = `${card.description}: approve`));
    card.addEventListener('ui-secondary-button-click', () => (out.value = `${card.description}: reject`));
  }
</script>
```

React:

```tsx
<UiProductiveCard heading="Approval request" description="From Malee S." primaryButtonText="Approve" secondaryButtonText="Reject" onUiPrimaryButtonClick={approve} onUiSecondaryButtonClick={reject}>
  Purchase of 20 laptops for the Finance department, 640,000 baht.
</UiProductiveCard>
<UiProductiveCard heading="Approval request" description="From Somchai K." primaryButtonText="Approve" primaryButtonPlacement="top" onUiPrimaryButtonClick={approve}>
  Renewal of the cleaning contract, 12 months.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard title="Approval request" description="From Malee S." primaryButtonText="Approve" secondaryButtonText="Reject" onPrimaryButtonClick={approve} onSecondaryButtonClick={reject}>
  Purchase of 20 laptops for the Finance department, 640,000 baht.
</ProductiveCard>
<ProductiveCard title="Approval request" description="From Somchai K." primaryButtonText="Approve" primaryButtonPlacement="top" onPrimaryButtonClick={approve}>
  Renewal of the cleaning contract, 12 months.
</ProductiveCard>
```

`primary-button-disabled` and `secondary-button-disabled` disable a button.

## Button links and icons

`primary-button-href` and `secondary-button-href` make a footer button a link (a primary button at the top takes no `href`, as in Carbon). A 16px icon after the text goes in the `primary-button-icon` or `secondary-button-icon` slot (`primaryButtonIcon`, `secondaryButtonIcon` in React + Tailwind).


HTML:

```html
<ui-productive-card heading="Procurement policy" description="Version 4, 2026" primary-button-text="Read the policy" primary-button-href="#accessibility" style="max-width: 360px">
  <svg slot="primary-button-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg>
  Who can approve purchases, and up to what amount.
</ui-productive-card>
```

React:

```tsx
<UiProductiveCard heading="Procurement policy" description="Version 4, 2026" primaryButtonText="Read the policy" primaryButtonHref="/policies/procurement">
  <svg slot="primary-button-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg>
  Who can approve purchases, and up to what amount.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard
  title="Procurement policy"
  description="Version 4, 2026"
  primaryButtonText="Read the policy"
  primaryButtonHref="/policies/procurement"
  primaryButtonIcon={<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg>}
>
  Who can approve purchases, and up to what amount.
</ProductiveCard>
```

## Title size and heading level

`title-size="large"` sets a productive card's title in heading-03 instead of heading-compact-02. The title is an `<h2>`; set the level that fits your page with `heading-level` (`h1` … `h6`; `headingAs` in React + Tailwind). For markup in the label, title or description, use the `label`, `title` and `description` slots.


HTML:

```html
<ui-productive-card heading="Signed this month" heading-level="h3" title-size="large" style="max-width: 360px">
  <span slot="description">48 contracts, <b>12 more</b> than August</span>
  Sales 21 · Legal 15 · Procurement 12
</ui-productive-card>
```

React:

```tsx
<UiProductiveCard heading="Signed this month" headingLevel="h3" titleSize="large">
  <span slot="description">48 contracts, <b>12 more</b> than August</span>
  Sales 21 · Legal 15 · Procurement 12
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard title="Signed this month" headingAs="h3" titleSize="large" description={<>48 contracts, <b>12 more</b> than August</>}>
  Sales 21 · Legal 15 · Procurement 12
</ProductiveCard>
```

## Clickable

`clickable` turns one zone of the card into a button that fires `ui-click` on a click, Enter or Space (in React + Tailwind, passing `onClick` does it). `click-zone` picks the zone: `one` the whole card (default), `two` the header with the body, `three` the body. The zone's button lies under the card's own buttons, which stay separate tab stops and never fire `ui-click`. The title names the button and the description describes it.


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px">
  <ui-productive-card id="product-card-zone-one" clickable heading="Zone one" description="The whole card">
    <ui-icon-button slot="actions" label="Edit"><svg viewBox="0 0 16 16"><path d="M1 13h14v1H1zM12.7 4.5 10.5 2.3a1 1 0 0 0-1.4 0L3 8.4V11h2.6l6.1-6.1a1 1 0 0 0 0-1.4zM5.2 10H4V8.8l4-4 1.2 1.2zm4.7-4.7L8.7 4.1l1.1-1.1L11 4.2z" /></svg></ui-icon-button>
    Click anywhere but the edit button.
  </ui-productive-card>
  <ui-productive-card id="product-card-zone-three" clickable click-zone="three" heading="Zone three" description="The body only" primary-button-text="Details">
    Only this text is the button.
  </ui-productive-card>
</div>
<p>Last click: <output id="product-card-zone-out">nothing yet</output></p>

<script type="module">
  const out = document.getElementById('product-card-zone-out');
  for (const id of ['product-card-zone-one', 'product-card-zone-three']) {
    const card = document.getElementById(id);
    card.addEventListener('ui-click', () => (out.value = `${card.heading}: ui-click`));
    card.addEventListener('ui-primary-button-click', () => (out.value = `${card.heading}: primary button`));
  }
  document.querySelector('#product-card-zone-one ui-icon-button').addEventListener('click', () => (out.value = 'Zone one: edit button'));
</script>
```

React:

```tsx
<UiProductiveCard clickable heading="Zone one" description="The whole card" onUiClick={open}>
  <UiIconButton slot="actions" label="Edit" onClick={edit}>{editIcon}</UiIconButton>
  Click anywhere but the edit button.
</UiProductiveCard>
<UiProductiveCard clickable clickZone="three" heading="Zone three" description="The body only" primaryButtonText="Details" onUiClick={open} onUiPrimaryButtonClick={details}>
  Only this text is the button.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard title="Zone one" description="The whole card" onClick={open} actionIcons={[{ id: 'edit', icon: editIcon, iconDescription: 'Edit', onClick: edit }]}>
  Click anywhere but the edit button.
</ProductiveCard>
<ProductiveCard clickZone="three" title="Zone three" description="The body only" primaryButtonText="Details" onClick={open} onPrimaryButtonClick={details}>
  Only this text is the button.
</ProductiveCard>
```

## Disabled

`disabled` only announces the card as disabled (`aria-disabled`) and stops `ui-click`; it doesn't grey anything out, as in Carbon. Disable the buttons with `primary-button-disabled` and `secondary-button-disabled`, and say in the card why it can't be used.


HTML:

```html
<ui-productive-card clickable disabled heading="Loan contract template" description="Being revised until 15 October" primary-button-text="Use template" primary-button-disabled style="max-width: 360px">
  The legal department is updating the interest clauses.
</ui-productive-card>
```

React:

```tsx
<UiProductiveCard clickable disabled heading="Loan contract template" description="Being revised until 15 October" primaryButtonText="Use template" primaryButtonDisabled>
  The legal department is updating the interest clauses.
</UiProductiveCard>
```

React + Tailwind:

```tsx
<ProductiveCard disabled onClick={open} title="Loan contract template" description="Being revised until 15 October" primaryButtonText="Use template" primaryButtonDisabled>
  The legal department is updating the interest clauses.
</ProductiveCard>
```

## Expressive card

`ui-expressive-card` is for content. Media goes across the top (`slot="media"`, at its own size up to the card's width), a pictogram above the title (`slot="pictogram"`), and the buttons in the footer: a primary and a secondary button by default. Action icons (`slot="actions"`) are small and sit at the end of the footer.


HTML:

```html
<ui-expressive-card id="product-card-expressive" label="Guide" heading="Signing a contract online" primary-button-text="Start" secondary-button-text="Later" style="max-width: 360px">
  <img slot="media" alt="" width="360" height="203" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'%3E%3Crect width='160' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M66 20h22l10 10v40H66z' fill='%23ffffff'/%3E%3Cpath d='M72 42h20M72 50h20M72 58h12' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
  <ui-icon-button slot="actions" label="Save for later"><svg viewBox="0 0 16 16"><path d="M12 2v12.2l-3.5-2.6-.5-.4-.5.4L4 14.2V2h8m0-1H4a1 1 0 0 0-1 1v14l5-3.7 5 3.7V2a1 1 0 0 0-1-1Z" /></svg></ui-icon-button>
  Check the parties, sign with your one-time code, and download the signed copy.
</ui-expressive-card>
<p>Pressed: <output id="product-card-expressive-out">nothing yet</output></p>

<script type="module">
  const card = document.getElementById('product-card-expressive');
  const out = document.getElementById('product-card-expressive-out');
  card.addEventListener('ui-primary-button-click', () => (out.value = 'Start'));
  card.addEventListener('ui-secondary-button-click', () => (out.value = 'Later'));
</script>
```

React:

```tsx
<UiExpressiveCard label="Guide" heading="Signing a contract online" primaryButtonText="Start" secondaryButtonText="Later" onUiPrimaryButtonClick={start} onUiSecondaryButtonClick={later}>
  <img slot="media" alt="" width={360} height={203} src={guideImage} />
  <UiIconButton slot="actions" label="Save for later">{bookmarkIcon}</UiIconButton>
  Check the parties, sign with your one-time code, and download the signed copy.
</UiExpressiveCard>
```

React + Tailwind:

```tsx
<ExpressiveCard
  label="Guide"
  title="Signing a contract online"
  primaryButtonText="Start"
  secondaryButtonText="Later"
  onPrimaryButtonClick={start}
  onSecondaryButtonClick={later}
  media={<img alt="" width={360} height={203} src={guideImage} />}
  actionIcons={[{ id: 'save', icon: bookmarkIcon, iconDescription: 'Save for later' }]}
>
  Check the parties, sign with your one-time code, and download the signed copy.
</ExpressiveCard>
```

`primary-button-kind` takes `primary` (default) or `ghost`, `secondary-button-kind` `secondary` (default) or `ghost`.

## Pictogram and media at the start

A pictogram goes above the title, 16px in. `media-position="left"` puts the media at the start, with the content beside it.


HTML:

```html
<ui-expressive-card heading="Non-disclosure agreement" primary-button-text="Use template" primary-button-kind="ghost" style="max-width: 360px">
  <svg slot="pictogram" width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden="true"><path d="M8 3h11l5 5v21H8zM19 3v5h5M12 14h8M12 18h8M12 22h5" /></svg>
  Two-way NDA in Thai and English, approved by the legal department.
</ui-expressive-card>
<ui-expressive-card heading="Asking for an approval" media-position="left" primary-button-text="Read" primary-button-kind="ghost" style="max-width: 560px">
  <img slot="media" alt="" width="180" height="180" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 90'%3E%3Crect width='90' height='90' fill='%23d0e2ff'/%3E%3Cpath d='M34 20h18l8 8v42H34z' fill='%23ffffff'/%3E%3Cpath d='M40 42h14M40 50h14M40 58h8' stroke='%230f62fe' stroke-width='2'/%3E%3C/svg%3E" />
  Pick the approvers, add a note, and follow the request from your inbox.
</ui-expressive-card>
```

React:

```tsx
<UiExpressiveCard heading="Non-disclosure agreement" primaryButtonText="Use template" primaryButtonKind="ghost">
  <svg slot="pictogram" width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden="true">…</svg>
  Two-way NDA in Thai and English, approved by the legal department.
</UiExpressiveCard>
<UiExpressiveCard heading="Asking for an approval" mediaPosition="left" primaryButtonText="Read" primaryButtonKind="ghost">
  <img slot="media" alt="" width={180} height={180} src={approvalImage} />
  Pick the approvers, add a note, and follow the request from your inbox.
</UiExpressiveCard>
```

React + Tailwind:

```tsx
<ExpressiveCard title="Non-disclosure agreement" primaryButtonText="Use template" primaryButtonKind="ghost" pictogram={documentPictogram}>
  Two-way NDA in Thai and English, approved by the legal department.
</ExpressiveCard>
<ExpressiveCard title="Asking for an approval" mediaPosition="left" primaryButtonText="Read" primaryButtonKind="ghost" media={<img alt="" width={180} height={180} src={approvalImage} />}>
  Pick the approvers, add a note, and follow the request from your inbox.
</ExpressiveCard>
```

## Clickable expressive card

On an expressive card `clickable` always makes the whole card the button. Its own buttons stay separate.


HTML:

```html
<ui-expressive-card id="product-card-pick" clickable heading="Lease contract" description="Property, rent and term" primary-button-text="Preview" primary-button-kind="ghost" style="max-width: 360px">
  Start a new lease from the approved template.
</ui-expressive-card>
<p>Last press: <output id="product-card-pick-out">nothing yet</output></p>

<script type="module">
  const card = document.getElementById('product-card-pick');
  const out = document.getElementById('product-card-pick-out');
  card.addEventListener('ui-click', () => (out.value = 'card: start a lease'));
  card.addEventListener('ui-primary-button-click', () => (out.value = 'Preview button'));
</script>
```

React:

```tsx
<UiExpressiveCard clickable heading="Lease contract" description="Property, rent and term" primaryButtonText="Preview" primaryButtonKind="ghost" onUiClick={start} onUiPrimaryButtonClick={preview}>
  Start a new lease from the approved template.
</UiExpressiveCard>
```

React + Tailwind:

```tsx
<ExpressiveCard title="Lease contract" description="Property, rent and term" primaryButtonText="Preview" primaryButtonKind="ghost" onClick={start} onPrimaryButtonClick={preview}>
  Start a new lease from the approved template.
</ExpressiveCard>
```

## Decorator and layers

The `decorator` slot puts a small element 16px from the top-end corner, for example an AI label or a tag. Both cards draw themselves in the layer colour they sit on, so inside a `ui-layer` they take the next one.


HTML:

```html
<ui-layer level="1" with-background style="padding: 16px">
  <ui-productive-card heading="Contract summary" description="Generated from 14 pages" style="max-width: 360px">
    <ui-tag slot="decorator" type="purple" size="sm">AI</ui-tag>
    The lease runs for three years with a 5% yearly increase.
  </ui-productive-card>
</ui-layer>
```

React:

```tsx
<UiLayer level={1} withBackground style={{ padding: 16 }}>
  <UiProductiveCard heading="Contract summary" description="Generated from 14 pages">
    <UiTag slot="decorator" type="purple" size="sm">AI</UiTag>
    The lease runs for three years with a 5% yearly increase.
  </UiProductiveCard>
</UiLayer>
```

React + Tailwind:

```tsx
<Layer level={1} withBackground className="p-4">
  <ProductiveCard title="Contract summary" description="Generated from 14 pages" decorator={<Tag type="purple" size="sm">AI</Tag>}>
    The lease runs for three years with a 5% yearly increase.
  </ProductiveCard>
</Layer>
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves through the click zone and the card's own buttons and links, in page order |
| Enter, Space | Presses the click zone or the focused button |

## Accessibility

- The title is a real heading (`<h2>` by default). Set `heading-level` so the page outline stays right.
- The click zone is a `<button>` named by the title (else the label, else the body) and described by the description.
- `disabled` only sets `aria-disabled`: the card looks the same, so say why it can't be used.
- Each action icon needs a `label`; it is the button's name and tooltip.
- The media and pictogram are decorative unless you give them a real `alt` or name.

Unstyled React parts with the same behaviour: [Headless Product card](https://parntengza.github.io/kanok-ui-docs/en/headless-product-card/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-productive-card>` · React `UiProductiveCard`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `click-zone` | `clickZone` | `ProductCardClickZone` | `'one'` | Which zone `clickable` makes one button: one = the card, two = the header with the body, three = the body. |
| `actions-placement` | `actionsPlacement` | `ProductCardPlacement` | `'top'` | Where the action icons (or the overflow menu) go. |
| `title-size` | `titleSize` | `ProductCardTitleSize` | `'default'` | default: heading-compact-02; large: heading-03. |
| `overflow-aria-label` | `overflowAriaLabel` | `string` | `''` | The overflow menu's name and tooltip (default: the translation's "Options", as Carbon's `iconDescription`). |
| `primary-button-placement` | `primaryButtonPlacement` | `ProductCardPlacement` | `'bottom'` | At the top the primary button joins the top actions (a ghost sm button, without `href`). |
| `secondary-button-placement` | `secondaryButtonPlacement` | `ProductCardPlacement` | `'bottom'` | At the top the secondary button joins the top actions, only when there are other top actions (as Carbon). |
| `heading` | `heading` | `string` | `''` | The title (Carbon `title`; named `heading` because `title` is every element's native tooltip). |
| `heading-level` | `headingLevel` | `string` | `'h2'` | The title's element (h1 … h6; Carbon `Heading` in its `Section`, an `<h2>` at the top of a page). |
| `label` | `label` | `string` | `''` | Text above the title (label-01). |
| `description` | `description` | `string` | `''` | Text below the title (label-01). |
| `clickable` | `clickable` | `boolean` | `false` | Makes the card's click zone one button (Carbon: an `onClick`); listen for `ui-click`. |
| `disabled` | `disabled` | `boolean` | `false` | Announced as disabled (`aria-disabled`, as Carbon); a clickable zone then fires no `ui-click`. No other change, as Carbon. |
| `primary-button-text` | `primaryButtonText` | `string` | `''` |  |
| `primary-button-href` | `primaryButtonHref` | `string` | `''` | Makes the primary button a link (in the footer; Carbon's button at the top takes no `href`). |
| `primary-button-disabled` | `primaryButtonDisabled` | `boolean` | `false` |  |
| `secondary-button-text` | `secondaryButtonText` | `string` | `''` |  |
| `secondary-button-href` | `secondaryButtonHref` | `string` | `''` | Makes the secondary button a link. |
| `secondary-button-disabled` | `secondaryButtonDisabled` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-click` | none (use a ref) | The click zone was activated (a click, Enter or Space); not while `disabled` |
| `ui-primary-button-click` | none (use a ref) | The primary button was activated |
| `ui-secondary-button-click` | none (use a ref) | The secondary button was activated |

#### Slots

| Slot | Description |
|---|---|
| (default) | The body (body-compact-01) |
| `label` | Replaces `label` |
| `title` | Replaces `heading` |
| `description` | Replaces `description` |
| `actions` | Icon buttons (`<ui-icon-button label="…">`); the card sets their `size` |
| `overflow` | `<ui-menu-item>`s of the overflow menu, shown instead of the action icons |
| `primary-button-icon` | A 16px icon after the primary button's text (Carbon `primaryButtonIcon`) |
| `secondary-button-icon` | A 16px icon after the secondary button's text |
| `decorator` | E.g. an AI label, 16px from the top-end corner |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The card |
| `click-zone` | The clickable zone's button (`clickable` only), covering the zone |
| `content` | The header, body and footer |
| `header` | The header |
| `label` | The label |
| `title` | The title (`<h2>` by default) |
| `description` | The description |
| `actions` | The action icons' (or overflow menu's) box, with the top buttons |
| `overflow` | The `<ui-overflow-menu>` |
| `body` | The body |
| `footer` | The footer |
| `primary-button` | The primary `<ui-button>` |
| `secondary-button` | The secondary `<ui-button>` |
| `decorator` | The decorator's box |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tile-border-color` |  | Its 1px border, as the selectable tiles (default transparent; Kanok: a hairline) |
| `--ui-card-background` |  | Its fill (default `--ui-surface-1`; Kanok paper: a cool grey that sets it apart from the page, no border) |
| `--ui-card-radius` |  | / --ui-card-overflow - Corners and clipping, as `<ui-card>` (default square, visible; Kanok: 12px, clipped) |

### `<ui-expressive-card>` · React `UiExpressiveCard`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `media-position` | `mediaPosition` | `ProductCardMediaPosition` | `'top'` | Where the media goes: across the top, or at the start with the content beside it. |
| `primary-button-kind` | `primaryButtonKind` | `ProductCardPrimaryKind` | `'primary'` |  |
| `secondary-button-kind` | `secondaryButtonKind` | `ProductCardSecondaryKind` | `'secondary'` |  |
| `heading` | `heading` | `string` | `''` | The title (Carbon `title`; named `heading` because `title` is every element's native tooltip). |
| `heading-level` | `headingLevel` | `string` | `'h2'` | The title's element (h1 … h6; Carbon `Heading` in its `Section`, an `<h2>` at the top of a page). |
| `label` | `label` | `string` | `''` | Text above the title (label-01). |
| `description` | `description` | `string` | `''` | Text below the title (label-01). |
| `clickable` | `clickable` | `boolean` | `false` | Makes the card's click zone one button (Carbon: an `onClick`); listen for `ui-click`. |
| `disabled` | `disabled` | `boolean` | `false` | Announced as disabled (`aria-disabled`, as Carbon); a clickable zone then fires no `ui-click`. No other change, as Carbon. |
| `primary-button-text` | `primaryButtonText` | `string` | `''` |  |
| `primary-button-href` | `primaryButtonHref` | `string` | `''` | Makes the primary button a link (in the footer; Carbon's button at the top takes no `href`). |
| `primary-button-disabled` | `primaryButtonDisabled` | `boolean` | `false` |  |
| `secondary-button-text` | `secondaryButtonText` | `string` | `''` |  |
| `secondary-button-href` | `secondaryButtonHref` | `string` | `''` | Makes the secondary button a link. |
| `secondary-button-disabled` | `secondaryButtonDisabled` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-click` | none (use a ref) | The card was activated (a click, Enter or Space); not while `disabled` |
| `ui-primary-button-click` | none (use a ref) | The primary button was activated |
| `ui-secondary-button-click` | none (use a ref) | The secondary button was activated |

#### Slots

| Slot | Description |
|---|---|
| (default) | The body (body-compact-01) |
| `label` | Replaces `label` |
| `title` | Replaces `heading` |
| `description` | Replaces `description` |
| `media` | An image or video across the top (or at the start), shown at its own size up to the card's width |
| `pictogram` | A pictogram above the title, 16px in |
| `actions` | Icon buttons (`<ui-icon-button label="…">`, ghost); the card makes them sm |
| `primary-button-icon` | A 16px icon after the primary button's text (Carbon `primaryButtonIcon`) |
| `secondary-button-icon` | A 16px icon after the secondary button's text |
| `decorator` | E.g. an AI label, 16px from the top-end corner |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The card |
| `click-zone` | The card's button (`clickable` only), covering the card |
| `media` | The media's box |
| `pictogram` | The pictogram's box |
| `content` | The header, body and footer |
| `header` | The header |
| `label` | The label |
| `title` | The title (`<h2>` by default) |
| `description` | The description |
| `actions` | The action icons' box |
| `body` | The body |
| `footer` | The footer |
| `primary-button` | The primary `<ui-button>` |
| `secondary-button` | The secondary `<ui-button>` |
| `decorator` | The decorator's box |


