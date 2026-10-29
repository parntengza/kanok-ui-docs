# Heading

`<ui-heading>` renders a heading at the right level without you counting: each `<ui-section>` around it goes one level deeper, so the same markup gives an `<h2>` on one page and an `<h4>` inside a nested panel. The type follows Carbon's productive scale for that level.


HTML:

```html
<ui-section level="3">
  <ui-heading>Contract CT-2026-0142</ui-heading>
  <ui-section>
    <ui-heading>Parties</ui-heading>
    <ui-section>
      <ui-heading>Signer</ui-heading>
      <ui-section>
        <ui-heading>Contact details</ui-heading>
      </ui-section>
    </ui-section>
  </ui-section>
</ui-section>
```

React:

```tsx
<UiSection level={3}>
  <UiHeading>Contract CT-2026-0142</UiHeading>
  <UiSection>
    <UiHeading>Parties</UiHeading>
    <UiSection>
      <UiHeading>Signer</UiHeading>
      <UiSection>
        <UiHeading>Contact details</UiHeading>
      </UiSection>
    </UiSection>
  </UiSection>
</UiSection>
```

React + Tailwind:

```tsx
<Section level={3}>
  <Heading>Contract CT-2026-0142</Heading>
  <Section>
    <Heading>Parties</Heading>
    <Section>
      <Heading>Signer</Heading>
      <Section>
        <Heading>Contact details</Heading>
      </Section>
    </Section>
  </Section>
</Section>
```

The previews on this page start at level 3, because the page already has its own `<h1>` and `<h2>`s. The result above is `<h3>`, `<h4>`, `<h5>`, `<h6>`.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/heading
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-heading
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/heading.json
#    to its target:
#    components/ui/primitives/heading/heading-shared.ts
#    components/ui/primitives/heading/heading.ts
#    components/ui/primitives/heading/section.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-heading.json
#    to its target:
#    components/ui/react-tw/heading.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

A `<ui-heading>` outside any section is an `<h1>`. The first section makes its headings `<h2>`, a section inside it `<h3>`, and so on down to `<h6>`.


HTML:

```html
<script type="module">import '@purpurabog/ui/heading';</script>

<ui-heading>Contracts</ui-heading>
<ui-section>
  <ui-heading>Waiting for approval</ui-heading>
</ui-section>
```

React:

```tsx
import { UiHeading, UiSection } from '@purpurabog/ui/react';

<UiHeading>Contracts</UiHeading>
<UiSection>
  <UiHeading>Waiting for approval</UiHeading>
</UiSection>
```

React + Tailwind:

```tsx
import { Heading, Section } from '@/components/ui/react-tw/heading';

<Heading>Contracts</Heading>
<Section>
  <Heading>Waiting for approval</Heading>
</Section>
```

`<ui-section>` is a plain block with no role. The React + Tailwind `Section` renders a `<section>` element; change it with `as` (for example `as="div"`).

## Set the level

`level` on a section sets the level of its headings, instead of one more than the section around it. Use it where a block starts below a heading that isn't a `<ui-heading>`, such as a page title from your layout. Sections inside it count on from there. Levels stop at 6.


HTML:

```html
<ui-section level="4">
  <ui-heading>Approval history</ui-heading>
  <ui-section>
    <ui-heading>Legal review, 3 October</ui-heading>
  </ui-section>
</ui-section>
```

React:

```tsx
<UiSection level={4}>
  <UiHeading>Approval history</UiHeading>
  <UiSection>
    <UiHeading>Legal review, 3 October</UiHeading>
  </UiSection>
</UiSection>
```

React + Tailwind:

```tsx
<Section level={4}>
  <Heading>Approval history</Heading>
  <Section>
    <Heading>Legal review, 3 October</Heading>
  </Section>
</Section>
```

## Type for each level

| Level | Carbon type | Size |
|---|---|---|
| `<h1>` | heading-06 | 42px, light |
| `<h2>` | heading-05 | 32px |
| `<h3>` | heading-04 | 28px |
| `<h4>` | heading-03 | 20px |
| `<h5>` | heading-02 | 16px, semibold |
| `<h6>` | heading-01 | 14px, semibold |

Headings have no margins: space them with the layout around them, for example the gap of a flex box or a [grid](https://parntengza.github.io/kanok-ui-docs/en/grid/).

## The same block at any depth

A block you reuse, such as a summary card, can hold a `<ui-heading>` and still be right wherever it goes: inside one section it is an `<h4>`, inside two it is an `<h5>`.


HTML:

```html
<ui-section level="3">
  <ui-heading>Department budget</ui-heading>
  <ui-section>
    <ui-heading>Legal</ui-heading>
    <p>Spent 1.2M of 2.0M baht.</p>
    <ui-section>
      <ui-heading>Outside counsel</ui-heading>
      <p>Spent 400K of 600K baht.</p>
    </ui-section>
  </ui-section>
</ui-section>
```

React:

```tsx
function BudgetCard({ name, spent, children }: { name: string; spent: string; children?: React.ReactNode }) {
  return (
    <UiSection>
      <UiHeading>{name}</UiHeading>
      <p>{spent}</p>
      {children}
    </UiSection>
  );
}

<UiSection level={3}>
  <UiHeading>Department budget</UiHeading>
  <BudgetCard name="Legal" spent="Spent 1.2M of 2.0M baht.">
    <BudgetCard name="Outside counsel" spent="Spent 400K of 600K baht." />
  </BudgetCard>
</UiSection>
```

React + Tailwind:

```tsx
function BudgetCard({ name, spent, children }: { name: string; spent: string; children?: React.ReactNode }) {
  return (
    <Section>
      <Heading>{name}</Heading>
      <p>{spent}</p>
      {children}
    </Section>
  );
}

<Section level={3}>
  <Heading>Department budget</Heading>
  <BudgetCard name="Legal" spent="Spent 1.2M of 2.0M baht.">
    <BudgetCard name="Outside counsel" spent="Spent 400K of 600K baht." />
  </BudgetCard>
</Section>
```

The web component works out its level when it is added to the page. If you move a `<ui-heading>` to another section, it takes the new level then; changing a section's `level` later doesn't renumber the headings already inside.

## Style a heading

The web component shows its `<h1>`…`<h6>` as the `heading` part. In React + Tailwind, pass a `className`.


HTML:

```html
<style>
  .heading-accent::part(heading) { color: var(--ui-link); }
</style>
<ui-section level="4">
  <ui-heading class="heading-accent">Due this week</ui-heading>
</ui-section>
```

React:

```tsx
// .heading-accent::part(heading) { color: var(--ui-link); }
<UiSection level={4}>
  <UiHeading className="heading-accent">Due this week</UiHeading>
</UiSection>
```

React + Tailwind:

```tsx
<Section level={4}>
  <Heading className="text-link">Due this week</Heading>
</Section>
```

## Accessibility

- Screen reader users jump between headings and list them to find their way. Levels that follow the nesting make that list match the page.
- Keep one `<h1>` per page. Start a block at a deeper `level` when the page title comes from somewhere else.
- `<ui-section>` adds no landmark. If a part of the page needs one, wrap it in your own `<section aria-labelledby>` or `<nav>`.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-heading>` · React `UiHeading`

#### Properties

| Property | Type | Description |
|---|---|---|
| `level` | `HeadingLevel` | The level from the `<ui-section>` around it (1 outside any). |

#### Methods

| Method | Description |
|---|---|
| `syncLevel()` | Takes the level of the section around it (also called by a section whose level changed). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The heading text |

#### CSS parts

| Part | Description |
|---|---|
| `heading` | The `<h1>`…`<h6>` |

### `<ui-section>` · React `UiSection`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `level` | `level` | `number \| undefined` |  | The heading level inside, instead of one more than the section around it. |

#### Methods

| Method | Description |
|---|---|
| `getCurrentLevel()` | The level its headings use (Carbon `getCurrentLevel`). |
| `syncLevel()` | Takes its level from `level`, else from the section around it (also called by an ancestor whose level changed). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The section's content |


