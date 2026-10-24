# Headless Accordion

The `Accordion` parts give you the behaviour of the styled [Accordion](https://parntengza.github.io/kanok-ui-docs/en/accordion/) with no styles: a list of items, each a button that shows or hides its content, with `aria-expanded`, `aria-controls` and a content region named by its button. Several items can be open at once, as in Carbon.

You own the markup inside the parts (the chevron, a heading level around the button), the text and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Accordion } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Accordion } from '@purpurabog/ui/headless';

const clauses = [
  { title: 'Parties', body: 'Metro Property Co., Ltd. (the lessor) and Siam Retail Co., Ltd. (the lessee).' },
  { title: 'Payment terms', body: 'Rent is due on the 5th of each month. Late payments accrue 1.5% per month.' },
  { title: 'Confidentiality', body: 'Both parties keep the terms confidential for five years after the lease ends.' },
];

export default function Example() {
  return (
    <Accordion.Root className="max-w-xl">
      {clauses.map((c, i) => (
        <Accordion.Item key={c.title} defaultOpen={i === 0} className="border-t border-hairline last:border-b">
          <Accordion.Trigger className="group flex min-h-10 w-full cursor-pointer items-center justify-between gap-4 px-4 text-start text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            {c.title}
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Accordion.Trigger>
          <Accordion.Panel className="px-4 pt-2 pb-6 text-sm text-ink">{c.body}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
```

## Anatomy

```tsx
<Accordion.Root>
  <Accordion.Item>
    <Accordion.Trigger />
    <Accordion.Panel />
  </Accordion.Item>
</Accordion.Root>
```

## Open from your code

Each `Item` is on its own: `defaultOpen` opens it on the first render, or hold it yourself with `open` and `onOpenChange`. Controlled items let a pair of buttons open and close them all at once. `onOpenChange` fires only for the user's own clicks.


React (live React example):

```tsx
import { useState } from 'react';
import { Accordion } from '@purpurabog/ui/headless';

const sections = [
  { title: '1. Definitions', body: 'The words in bold have the meaning given in this section.' },
  { title: '2. Term', body: 'Three years from 1 January 2027.' },
  { title: '3. Rent', body: '120,000 baht a month, raised 3% each year.' },
];

const button = 'h-8 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState(sections.map(() => false));
  const setOne = (index: number, next: boolean) => setOpen((all) => all.map((v, j) => (j === index ? next : v)));
  return (
    <div className="grid max-w-xl gap-4">
      <div className="flex flex-wrap gap-4">
        <button type="button" className={button} onClick={() => setOpen(sections.map(() => true))}>Expand all</button>
        <button type="button" className={button} onClick={() => setOpen(sections.map(() => false))}>Collapse all</button>
      </div>
      <Accordion.Root>
        {sections.map((s, i) => (
          <Accordion.Item key={s.title} open={open[i]} onOpenChange={(next) => setOne(i, next)} className="border-t border-hairline last:border-b">
            <Accordion.Trigger className="group flex min-h-10 w-full cursor-pointer items-center justify-between gap-4 px-4 text-start text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              {s.title}
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
                <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
              </svg>
            </Accordion.Trigger>
            <Accordion.Panel className="px-4 pt-2 pb-6 text-sm text-ink">{s.body}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <p className="text-xs text-ink-muted">Open: {open.map((v, i) => (v ? sections[i].title : null)).filter(Boolean).join(', ') || 'none'}</p>
    </div>
  );
}
```

## A heading around each button

The styled accordion's heading is a plain button. With the parts you choose the markup: put each `Trigger` inside an `<h3>` (or the level that fits your page) and screen reader users can jump between the items by heading, as the WAI-ARIA accordion pattern suggests.


React (live React example):

```tsx
import { Accordion } from '@purpurabog/ui/headless';

const offices = [
  { name: 'Head office', address: '88 Sukhumvit Road, Khlong Toei, Bangkok 10110' },
  { name: 'Chiang Mai branch', address: '25 Nimmanhaemin Road, Suthep, Chiang Mai 50200' },
];

export default function Example() {
  return (
    <Accordion.Root className="max-w-xl">
      {offices.map((o) => (
        <Accordion.Item key={o.name} className="border-t border-hairline last:border-b">
          <h3 className="m-0 text-sm font-normal">
            <Accordion.Trigger className="group flex min-h-10 w-full cursor-pointer items-center gap-4 px-4 text-start text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-90">
                <path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" />
              </svg>
              {o.name}
            </Accordion.Trigger>
          </h3>
          <Accordion.Panel className="ps-12 pe-4 pt-2 pb-6 text-sm text-ink">{o.address}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
```

The chevron sits before the text here (the styled `align="start"`): the order is your markup.

## Disabled

`disabled` on an `Item` disables its trigger button: it can't be clicked and Tab skips it. `disabled` on `Root` disables every item. Both set `data-disabled` on the item and its trigger.


React (live React example):

```tsx
import { Accordion } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Accordion.Root className="max-w-xl">
      <Accordion.Item defaultOpen className="border-t border-hairline last:border-b">
        <Accordion.Trigger className="flex min-h-10 w-full cursor-pointer items-center px-4 text-start text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">Draft</Accordion.Trigger>
        <Accordion.Panel className="px-4 pt-2 pb-6 text-sm text-ink">Version 3, edited today.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item disabled className="border-t border-hairline last:border-b">
        <Accordion.Trigger className="flex min-h-10 w-full cursor-pointer items-center px-4 text-start text-sm text-ink hover:bg-ghost-hover data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:hover:bg-transparent">
          Archive (after signing)
        </Accordion.Trigger>
        <Accordion.Panel className="px-4 pt-2 pb-6 text-sm text-ink">Signed copies appear here.</Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

## Style it


React (live React example):

```tsx
import { Accordion } from '@purpurabog/ui/headless';

const faqs = [
  { q: 'Who can sign?', a: 'A director listed on the company certificate, or a person with a power of attorney.' },
  { q: 'Can I sign on paper?', a: 'Yes. Print the contract, sign every page and upload the scan.' },
  { q: 'How long does approval take?', a: 'Two working days for standard contracts.' },
];

export default function Example() {
  return (
    <Accordion.Root className="max-w-xl">
      {faqs.map((f) => (
        <Accordion.Item key={f.q} className="group/item border-t border-hairline last:border-b data-open:bg-layer-1">
          <Accordion.Trigger className="group flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 px-4 text-start text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-open:font-semibold">
            {f.q}
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-current transition-transform group-data-open:rotate-180">
              <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
            </svg>
          </Accordion.Trigger>
          <Accordion.Panel className="px-4 pb-6 text-sm text-ink-muted">{f.a}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
```
```css
/* className="item" on Item, "trigger" on Trigger, "chevron" on the svg */
.item[data-open] { background: #f4f4f4; }
.trigger[data-open] { font-weight: 600; }
.trigger[data-open] .chevron { transform: rotate(180deg); }
.trigger[data-disabled] { color: #c6c6c6; cursor: not-allowed; }
```

A closed `Panel` has the `hidden` attribute, so it needs no style to hide.

## Parts

### Accordion.Root

A `<ul>`. Put it in a list reset of your own (`list-style: none`, no padding).

| Prop | Type | Default | |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables every item |

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` is set |

`Accordion.useAccordionContext()` returns `{ disabled }` to a component inside `Root`.

### Accordion.Item

An `<li>`: one item, holding its `Trigger` and `Panel`.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Open (controlled) |
| `defaultOpen` | `boolean` | `false` | Open on the first render (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | | After the user opened or closed it |
| `disabled` | `boolean` | `false` | Disables its trigger |

| Attribute | When |
|---|---|
| `data-open` | It is open |
| `data-disabled` | It, or the whole `Root`, is disabled |

`Accordion.useItemContext()` returns `{ open, disabled, toggle, triggerId, panelId }` to a component inside the item, for example to turn a chevron that sits outside the trigger.

### Accordion.Trigger

A `<button type="button">` with `aria-expanded` and `aria-controls` (its panel's id). A click (and Enter or Space, the button's own) opens or closes the item. It takes every button prop except `type` and `disabled`; its `id` is set by the item.

| Attribute | When |
|---|---|
| `data-open` | The item is open |
| `data-disabled` | The item is disabled |

### Accordion.Panel

A `<section>` named by its trigger (`aria-labelledby`), so a region landmark. It has the `hidden` attribute while the item is closed. It takes every section prop except `hidden`.

| Attribute | When |
|---|---|
| `data-open` | The item is open |

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves between the triggers (and into an open panel); disabled triggers are skipped |
| Enter, Space | Opens or closes the focused item |

There are no arrow keys between the triggers, as in Carbon.

The parts set `aria-expanded` and `aria-controls` on each trigger, and `aria-labelledby` and `hidden` on each panel. The list is a `<ul>` of `<li>` items.

You add:

- The trigger's text.
- A heading element around the trigger when the items are sections of your page outline.
- Nothing else: the chevron is decoration, so give it `aria-hidden="true"`.
