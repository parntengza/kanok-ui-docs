# Accordion

An accordion is a vertical list of headings. Each heading shows or hides the content under it, so a long page shows only the parts the reader asks for. Several items can be open at once.


HTML:

```html
<ui-accordion>
  <ui-accordion-item heading="Parties" open>Metro Property Co., Ltd. (the lessor) and Siam Retail Co., Ltd. (the lessee).</ui-accordion-item>
  <ui-accordion-item heading="Payment terms">Rent is due on the 5th of each month. Late payments accrue 1.5% per month.</ui-accordion-item>
  <ui-accordion-item heading="Confidentiality">Both parties keep the terms confidential for five years after the lease ends.</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion>
  <UiAccordionItem heading="Parties" open>Metro Property Co., Ltd. (the lessor) and Siam Retail Co., Ltd. (the lessee).</UiAccordionItem>
  <UiAccordionItem heading="Payment terms">Rent is due on the 5th of each month. Late payments accrue 1.5% per month.</UiAccordionItem>
  <UiAccordionItem heading="Confidentiality">Both parties keep the terms confidential for five years after the lease ends.</UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion>
  <AccordionItem title="Parties" defaultOpen>Metro Property Co., Ltd. (the lessor) and Siam Retail Co., Ltd. (the lessee).</AccordionItem>
  <AccordionItem title="Payment terms">Rent is due on the 5th of each month. Late payments accrue 1.5% per month.</AccordionItem>
  <AccordionItem title="Confidentiality">Both parties keep the terms confidential for five years after the lease ends.</AccordionItem>
</Accordion>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/accordion
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-accordion
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/accordion.json
#    to its target:
#    components/ui/primitives/accordion/accordion-item.ts
#    components/ui/primitives/accordion/accordion-skeleton.ts
#    components/ui/primitives/accordion/accordion.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-events, shared-field, shared-skeleton, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-accordion.json
#    to its target:
#    components/ui/react-tw/accordion.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/accordion';</script>

<ui-accordion>
  <ui-accordion-item heading="Payment terms">Rent is due on the 5th of each month.</ui-accordion-item>
  <ui-accordion-item heading="Confidentiality">Both parties keep the terms confidential.</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
import { UiAccordion, UiAccordionItem } from '@purpurabog/ui/react';

<UiAccordion>
  <UiAccordionItem heading="Payment terms">Rent is due on the 5th of each month.</UiAccordionItem>
  <UiAccordionItem heading="Confidentiality">Both parties keep the terms confidential.</UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
import { Accordion, AccordionItem } from '@/components/ui/react-tw/accordion';

<Accordion>
  <AccordionItem title="Payment terms">Rent is due on the 5th of each month.</AccordionItem>
  <AccordionItem title="Confidentiality">Both parties keep the terms confidential.</AccordionItem>
</Accordion>
```

## Open items

`open` shows an item's content when the page loads (`defaultOpen` in React + Tailwind). Opening one item doesn't close the others: each item is on its own, as in Carbon.


HTML:

```html
<ui-accordion>
  <ui-accordion-item heading="Scope of work" open>Monthly cleaning of the lobby, the car park and the shared toilets.</ui-accordion-item>
  <ui-accordion-item heading="Service hours" open>Monday to Saturday, 6:00 to 9:00, before the building opens.</ui-accordion-item>
  <ui-accordion-item heading="Termination">Either party may end the contract with 30 days' written notice.</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion>
  <UiAccordionItem heading="Scope of work" open>Monthly cleaning of the lobby, the car park and the shared toilets.</UiAccordionItem>
  <UiAccordionItem heading="Service hours" open>Monday to Saturday, 6:00 to 9:00, before the building opens.</UiAccordionItem>
  <UiAccordionItem heading="Termination">Either party may end the contract with 30 days' written notice.</UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion>
  <AccordionItem title="Scope of work" defaultOpen>Monthly cleaning of the lobby, the car park and the shared toilets.</AccordionItem>
  <AccordionItem title="Service hours" defaultOpen>Monday to Saturday, 6:00 to 9:00, before the building opens.</AccordionItem>
  <AccordionItem title="Termination">Either party may end the contract with 30 days' written notice.</AccordionItem>
</Accordion>
```

## Headings with markup

`heading` is plain text. When the heading needs markup (a count, a status, bold text), put it in the `title` slot instead. In React + Tailwind, `title` takes any React node.


HTML:

```html
<ui-accordion>
  <ui-accordion-item>
    <span slot="title">Attachments <strong>(3)</strong></span>
    Lease agreement.pdf, Floor plan.pdf, Company certificate.pdf
  </ui-accordion-item>
  <ui-accordion-item>
    <span slot="title">Approvals <em>waiting for the finance team</em></span>
    The legal team approved on 2 October. Finance has not answered yet.
  </ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion>
  <UiAccordionItem>
    <span slot="title">Attachments <strong>(3)</strong></span>
    Lease agreement.pdf, Floor plan.pdf, Company certificate.pdf
  </UiAccordionItem>
  <UiAccordionItem>
    <span slot="title">Approvals <em>waiting for the finance team</em></span>
    The legal team approved on 2 October. Finance has not answered yet.
  </UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion>
  <AccordionItem title={<>Attachments <strong>(3)</strong></>}>
    Lease agreement.pdf, Floor plan.pdf, Company certificate.pdf
  </AccordionItem>
  <AccordionItem title={<>Approvals <em>waiting for the finance team</em></>}>
    The legal team approved on 2 October. Finance has not answered yet.
  </AccordionItem>
</Accordion>
```

## Sizes

`size` sets the height of each heading: `sm` 32px, `md` 40px (the default), `lg` 48px. Set it on the accordion; every item follows.


HTML:

```html
<ui-accordion size="sm">
  <ui-accordion-item heading="Small, 32px">Content</ui-accordion-item>
  <ui-accordion-item heading="Second item">Content</ui-accordion-item>
</ui-accordion>
<ui-accordion>
  <ui-accordion-item heading="Medium, 40px">Content</ui-accordion-item>
  <ui-accordion-item heading="Second item">Content</ui-accordion-item>
</ui-accordion>
<ui-accordion size="lg">
  <ui-accordion-item heading="Large, 48px">Content</ui-accordion-item>
  <ui-accordion-item heading="Second item">Content</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion size="sm">…</UiAccordion>
<UiAccordion>…</UiAccordion>
<UiAccordion size="lg">…</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion size="sm">…</Accordion>
<Accordion>…</Accordion>
<Accordion size="lg">…</Accordion>
```

## Chevron at the start

`align="start"` puts the chevron before the heading text. The content then lines up with the text, not with the chevron.


HTML:

```html
<ui-accordion align="start">
  <ui-accordion-item heading="Head office" open>88 Sukhumvit Road, Khlong Toei, Bangkok 10110</ui-accordion-item>
  <ui-accordion-item heading="Chiang Mai branch">25 Nimmanhaemin Road, Suthep, Chiang Mai 50200</ui-accordion-item>
  <ui-accordion-item heading="Phuket branch">12 Thepkrasattri Road, Ratsada, Phuket 83000</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion align="start">
  <UiAccordionItem heading="Head office" open>88 Sukhumvit Road, Khlong Toei, Bangkok 10110</UiAccordionItem>
  <UiAccordionItem heading="Chiang Mai branch">25 Nimmanhaemin Road, Suthep, Chiang Mai 50200</UiAccordionItem>
  <UiAccordionItem heading="Phuket branch">12 Thepkrasattri Road, Ratsada, Phuket 83000</UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion align="start">
  <AccordionItem title="Head office" defaultOpen>88 Sukhumvit Road, Khlong Toei, Bangkok 10110</AccordionItem>
  <AccordionItem title="Chiang Mai branch">25 Nimmanhaemin Road, Suthep, Chiang Mai 50200</AccordionItem>
  <AccordionItem title="Phuket branch">12 Thepkrasattri Road, Ratsada, Phuket 83000</AccordionItem>
</Accordion>
```

## Flush

`flush` removes the dividers at the outer edges and draws the lines between items 16px in from each side (Carbon's `isFlush`). Use it where the accordion sits inside a tile or a panel that already has an edge. It has no effect with `align="start"`.


HTML:

```html
<ui-accordion flush>
  <ui-accordion-item heading="Who can sign?">A director listed on the company certificate, or a person with a power of attorney.</ui-accordion-item>
  <ui-accordion-item heading="Can I sign on paper?">Yes. Print the contract, sign every page and upload the scan.</ui-accordion-item>
  <ui-accordion-item heading="How long does approval take?">Two working days for standard contracts.</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion flush>
  <UiAccordionItem heading="Who can sign?">A director listed on the company certificate, or a person with a power of attorney.</UiAccordionItem>
  <UiAccordionItem heading="Can I sign on paper?">Yes. Print the contract, sign every page and upload the scan.</UiAccordionItem>
  <UiAccordionItem heading="How long does approval take?">Two working days for standard contracts.</UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion flush>
  <AccordionItem title="Who can sign?">A director listed on the company certificate, or a person with a power of attorney.</AccordionItem>
  <AccordionItem title="Can I sign on paper?">Yes. Print the contract, sign every page and upload the scan.</AccordionItem>
  <AccordionItem title="How long does approval take?">Two working days for standard contracts.</AccordionItem>
</Accordion>
```

## Disabled

`disabled` on an item greys out its heading; it can't be opened or closed and Tab skips it. `disabled` on the accordion disables every item; removing it enables them again, except items that have their own `disabled`.


HTML:

```html
<ui-accordion>
  <ui-accordion-item heading="Draft" open>Version 3, edited today.</ui-accordion-item>
  <ui-accordion-item heading="Archive (after signing)" disabled>Signed copies appear here.</ui-accordion-item>
</ui-accordion>
<ui-accordion disabled>
  <ui-accordion-item heading="Audit log">Locked while the audit runs.</ui-accordion-item>
  <ui-accordion-item heading="Change history">Locked while the audit runs.</ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion>
  <UiAccordionItem heading="Draft" open>Version 3, edited today.</UiAccordionItem>
  <UiAccordionItem heading="Archive (after signing)" disabled>Signed copies appear here.</UiAccordionItem>
</UiAccordion>
<UiAccordion disabled>
  <UiAccordionItem heading="Audit log">Locked while the audit runs.</UiAccordionItem>
  <UiAccordionItem heading="Change history">Locked while the audit runs.</UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion>
  <AccordionItem title="Draft" defaultOpen>Version 3, edited today.</AccordionItem>
  <AccordionItem title="Archive (after signing)" disabled>Signed copies appear here.</AccordionItem>
</Accordion>
<Accordion disabled>
  <AccordionItem title="Audit log">Locked while the audit runs.</AccordionItem>
  <AccordionItem title="Change history">Locked while the audit runs.</AccordionItem>
</Accordion>
```

## Know when an item opens

`ui-toggle` fires on the item after the user opens or closes it, with `detail.open`. It bubbles, so one listener on the accordion hears every item. Use it to load an item's content the first time it opens, or to remember which items were open. In React + Tailwind, `onOpenChange` on the item gets the new state.


HTML:

```html
<ui-accordion id="accordion-events">
  <ui-accordion-item heading="Payment terms">Rent is due on the 5th of each month.</ui-accordion-item>
  <ui-accordion-item heading="Deposit">Three months' rent, returned within 30 days after the lease ends.</ui-accordion-item>
</ui-accordion>
<p>Last change: <output id="accordion-events-out">none</output></p>

<script type="module">
  const accordion = document.getElementById('accordion-events');
  const out = document.getElementById('accordion-events-out');
  accordion.addEventListener('ui-toggle', (event) => {
    out.value = `${event.target.heading} ${event.detail.open ? 'opened' : 'closed'}`;
  });
</script>
```

React:

```tsx
const [last, setLast] = useState('none');

<UiAccordion>
  <UiAccordionItem heading="Payment terms" onUiToggle={(e) => setLast(`Payment terms ${e.detail.open ? 'opened' : 'closed'}`)}>
    Rent is due on the 5th of each month.
  </UiAccordionItem>
  <UiAccordionItem heading="Deposit" onUiToggle={(e) => setLast(`Deposit ${e.detail.open ? 'opened' : 'closed'}`)}>
    Three months' rent, returned within 30 days after the lease ends.
  </UiAccordionItem>
</UiAccordion>
<p>Last change: <output>{last}</output></p>
```

React + Tailwind:

```tsx
const [last, setLast] = useState('none');

<Accordion>
  <AccordionItem title="Payment terms" onOpenChange={(open) => setLast(`Payment terms ${open ? 'opened' : 'closed'}`)}>
    Rent is due on the 5th of each month.
  </AccordionItem>
  <AccordionItem title="Deposit" onOpenChange={(open) => setLast(`Deposit ${open ? 'opened' : 'closed'}`)}>
    Three months' rent, returned within 30 days after the lease ends.
  </AccordionItem>
</Accordion>
<p>Last change: <output>{last}</output></p>
```

## Expand all, collapse all

Set `open` on the items from your code to open or close them together (Carbon's "controlled" accordion). Setting `open` doesn't fire `ui-toggle`: the event is only for the user's own clicks. In React + Tailwind, hold each item's `open` in state.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="accordion-all-open" kind="tertiary" size="sm">Expand all</ui-button>
  <ui-button id="accordion-all-close" kind="tertiary" size="sm">Collapse all</ui-button>
</div>
<ui-accordion id="accordion-all">
  <ui-accordion-item heading="1. Definitions">The words in bold have the meaning given in this section.</ui-accordion-item>
  <ui-accordion-item heading="2. Term">Three years from 1 January 2027.</ui-accordion-item>
  <ui-accordion-item heading="3. Rent">120,000 baht a month, raised 3% each year.</ui-accordion-item>
</ui-accordion>

<script type="module">
  const items = document.querySelectorAll('#accordion-all ui-accordion-item');
  const setAll = (open) => items.forEach((item) => (item.open = open));
  document.getElementById('accordion-all-open').addEventListener('click', () => setAll(true));
  document.getElementById('accordion-all-close').addEventListener('click', () => setAll(false));
</script>
```

React:

```tsx
const sections = [
  { heading: '1. Definitions', body: 'The words in bold have the meaning given in this section.' },
  { heading: '2. Term', body: 'Three years from 1 January 2027.' },
  { heading: '3. Rent', body: '120,000 baht a month, raised 3% each year.' },
];
const [open, setOpen] = useState(sections.map(() => false));

<UiButton kind="tertiary" size="sm" onClick={() => setOpen(sections.map(() => true))}>Expand all</UiButton>
<UiButton kind="tertiary" size="sm" onClick={() => setOpen(sections.map(() => false))}>Collapse all</UiButton>
<UiAccordion>
  {sections.map((s, i) => (
    <UiAccordionItem key={s.heading} heading={s.heading} open={open[i]} onUiToggle={(e) => setOpen((o) => o.map((v, j) => (j === i ? e.detail.open : v)))}>
      {s.body}
    </UiAccordionItem>
  ))}
</UiAccordion>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(sections.map(() => false));

<Button kind="tertiary" size="sm" onClick={() => setOpen(sections.map(() => true))}>Expand all</Button>
<Button kind="tertiary" size="sm" onClick={() => setOpen(sections.map(() => false))}>Collapse all</Button>
<Accordion>
  {sections.map((s, i) => (
    <AccordionItem key={s.heading} title={s.heading} open={open[i]} onOpenChange={(next) => setOpen((o) => o.map((v, j) => (j === i ? next : v)))}>
      {s.body}
    </AccordionItem>
  ))}
</Accordion>
```

`sections` is the same in both React versions.

## Fields inside an item

An item's content can hold anything, fields included. A filter panel is a common case: each group of filters in its own item, so the list stays short.


HTML:

```html
<ui-accordion>
  <ui-accordion-item heading="Contract type" open>
    <ui-checkbox-group label="Show these types">
      <ui-checkbox name="type" value="lease" checked>Lease</ui-checkbox>
      <ui-checkbox name="type" value="sale">Sale</ui-checkbox>
      <ui-checkbox name="type" value="service">Service</ui-checkbox>
    </ui-checkbox-group>
  </ui-accordion-item>
  <ui-accordion-item heading="Status">
    <ui-radio-group label="Show this status" name="status" value="any">
      <ui-radio value="any">Any</ui-radio>
      <ui-radio value="draft">Draft</ui-radio>
      <ui-radio value="signed">Signed</ui-radio>
    </ui-radio-group>
  </ui-accordion-item>
</ui-accordion>
```

React:

```tsx
<UiAccordion>
  <UiAccordionItem heading="Contract type" open>
    <UiCheckboxGroup label="Show these types">
      <UiCheckbox name="type" value="lease" checked>Lease</UiCheckbox>
      <UiCheckbox name="type" value="sale">Sale</UiCheckbox>
      <UiCheckbox name="type" value="service">Service</UiCheckbox>
    </UiCheckboxGroup>
  </UiAccordionItem>
  <UiAccordionItem heading="Status">
    <UiRadioGroup label="Show this status" name="status" value="any">
      <UiRadio value="any">Any</UiRadio>
      <UiRadio value="draft">Draft</UiRadio>
      <UiRadio value="signed">Signed</UiRadio>
    </UiRadioGroup>
  </UiAccordionItem>
</UiAccordion>
```

React + Tailwind:

```tsx
<Accordion>
  <AccordionItem title="Contract type" defaultOpen>
    <FormGroup legend="Show these types">
      <Checkbox label="Lease" name="type" value="lease" defaultChecked />
      <Checkbox label="Sale" name="type" value="sale" />
      <Checkbox label="Service" name="type" value="service" />
    </FormGroup>
  </AccordionItem>
  <AccordionItem title="Status">
    <RadioGroup label="Show this status" name="status" defaultValue="any">
      <Radio value="any">Any</Radio>
      <Radio value="draft">Draft</Radio>
      <Radio value="signed">Signed</Radio>
    </RadioGroup>
  </AccordionItem>
</Accordion>
```

## Skeleton

While the items load, show `ui-accordion-skeleton`: `count` headings (4 by default), the first one open with three lines. `open` set to false (in HTML, set the property) shows them all closed, and `alignment="start"` puts the chevron first. It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<ui-accordion-skeleton count="3"></ui-accordion-skeleton>
<ui-accordion-skeleton id="accordion-skeleton-closed" count="2" alignment="start"></ui-accordion-skeleton>

<script type="module">
  document.getElementById('accordion-skeleton-closed').open = false;
</script>
```

React:

```tsx
import { UiAccordionSkeleton } from '@purpurabog/ui/react';

<UiAccordionSkeleton count={3} />
<UiAccordionSkeleton count={2} open={false} alignment="start" />
```

React + Tailwind:

```tsx
import { AccordionSkeleton } from '@/components/ui/react-tw/accordion';

<AccordionSkeleton count={3} />
<AccordionSkeleton count={2} open={false} align="start" />
```

On the web component, import it from `@purpurabog/ui/accordion-skeleton`.

## Keyboard

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves between the headings (and into an open item's content); disabled headings are skipped |
| Enter, Space | Opens or closes the focused item |

There are no arrow keys between headings, as in Carbon.

## Accessibility

- Each heading is a `<button>` with `aria-expanded` and `aria-controls` pointing at its content. The content is a `region` named by its heading.
- The accordion is a list (`role="list"`) and each item a list item, as Carbon's `<ul>` / `<li>`.
- The heading button isn't inside an `<h2>`–`<h6>`. If the items are sections of the page outline, say so in the text around the accordion.
- Don't hide the only copy of something the user must read (an error, a required step) in a closed item.

Unstyled React parts with the same behaviour: [Headless Accordion](https://parntengza.github.io/kanok-ui-docs/en/headless-accordion/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-accordion>` · React `UiAccordion`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `AccordionSize` | `'md'` | Heading height: sm 32px, md 40px (default), lg 48px. |
| `align` | `align` | `'start' \| 'end'` | `'end'` | Chevron before the title instead of after it. |
| `flush` | `flush` | `boolean` | `false` | No outer dividers; an inset line between items (Carbon `isFlush`, ignored with `align="start"`). |
| `disabled` | `disabled` | `boolean` | `false` | Disables every item; removing it again leaves disabled only the items that have their own `disabled`. |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the first enabled item's heading. |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-accordion-item>` elements |

### `<ui-accordion-item>` · React `UiAccordionItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `title` |  |  |  |  |
| `heading` | `heading` | `string` | `''` | Heading text; the `title` slot replaces it when markup is needed. (Before 0.5: the `title` attribute, still accepted.) |
| `open` | `open` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { open } after the user opened or closed it |

#### Slots

| Slot | Description |
|---|---|
| (default) | Content |
| `title` | Heading text with markup; the `heading` attribute is the plain-text fallback |

#### CSS parts

| Part | Description |
|---|---|
| `heading` | The heading button |
| `arrow` | The chevron |
| `title` | The heading text |
| `content` | The content wrapper |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-accordion-focus-radius` |  | Corners of the heading's focus ring (default 0; Kanok: 6px) |

### `<ui-accordion-skeleton>` · React `UiAccordionSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `count` | `count` | `number` | `4` |  |
| `open` | `open` | `boolean` | `true` | The first item shows its content. |
| `alignment` | `alignment` | `'start' \| 'end'` | `'end'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `title` | Each title bar |
| `line` | Each line of the open item |


