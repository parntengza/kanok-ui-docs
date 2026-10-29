# Tag

A tag labels and sorts things: a contract's status, the departments it belongs to, the filters on a list. It is read-only by default. It can also close (dismissible), turn on and off (selectable) or open something (operational).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag type="green">Signed</ui-tag>
  <ui-tag type="blue">Sales</ui-tag>
  <ui-tag type="purple">Lease</ui-tag>
  <ui-tag type="warm-gray">2026</ui-tag>
</div>
```

React:

```tsx
<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
  <UiTag type="green">Signed</UiTag>
  <UiTag type="blue">Sales</UiTag>
  <UiTag type="purple">Lease</UiTag>
  <UiTag type="warm-gray">2026</UiTag>
</div>
```

React + Tailwind:

```tsx
<div className="flex flex-wrap items-center gap-4">
  <Tag type="green">Signed</Tag>
  <Tag type="blue">Sales</Tag>
  <Tag type="purple">Lease</Tag>
  <Tag type="warm-gray">2026</Tag>
</div>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/tag
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-tag
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tag.json
#    to its target:
#    components/ui/primitives/tag/tag-skeleton.ts
#    components/ui/primitives/tag/tag.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-localize, shared-skeleton, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-tag.json
#    to its target:
#    components/ui/react-tw/tag.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/tag';</script>

<ui-tag type="green">Signed</ui-tag>
```

React:

```tsx
import { UiTag } from '@purpurabog/ui/react';

<UiTag type="green">Signed</UiTag>
```

React + Tailwind:

```tsx
import { Tag } from '@/components/ui/react-tw/tag';

<Tag type="green">Signed</Tag>
```

## Which tag?

Carbon has four tags. Here they are one element with an attribute each.

| Tag | Attribute | Use it for |
|---|---|---|
| Read-only | none | A status or a category to read. It isn't focusable. |
| Dismissible | `dismissible` | A value the user can remove: a chosen filter, a recipient. |
| Selectable | `selectable` | A filter the user turns on and off. `selected` holds the state. |
| Operational | `operational` | A tag that opens something: the rest of a long list, the details of a category. |

For a status with an icon and a word (for example "Overdue" in a table), see [Status indicator](https://parntengza.github.io/kanok-ui-docs/en/status-indicator/). For a count on an icon, see [Badge indicator](https://parntengza.github.io/kanok-ui-docs/en/badge-indicator/).

## Colours

`type` picks one of 12 colours; `gray` is the default. The colours mean nothing by themselves: give each category one colour and keep it everywhere in the product. `high-contrast` and `outline` stand out on any background.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag type="red">red</ui-tag>
  <ui-tag type="magenta">magenta</ui-tag>
  <ui-tag type="purple">purple</ui-tag>
  <ui-tag type="blue">blue</ui-tag>
  <ui-tag type="cyan">cyan</ui-tag>
  <ui-tag type="teal">teal</ui-tag>
  <ui-tag type="green">green</ui-tag>
  <ui-tag type="gray">gray</ui-tag>
  <ui-tag type="cool-gray">cool-gray</ui-tag>
  <ui-tag type="warm-gray">warm-gray</ui-tag>
  <ui-tag type="high-contrast">high-contrast</ui-tag>
  <ui-tag type="outline">outline</ui-tag>
</div>
```

React:

```tsx
const types = ['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green', 'gray', 'cool-gray', 'warm-gray', 'high-contrast', 'outline'] as const;

{types.map((type) => <UiTag key={type} type={type}>{type}</UiTag>)}
```

React + Tailwind:

```tsx
import type { TagType } from '@/components/ui/react-tw/tag';

const types: TagType[] = ['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green', 'gray', 'cool-gray', 'warm-gray', 'high-contrast', 'outline'];

{types.map((type) => <Tag key={type} type={type}>{type}</Tag>)}
```

## Sizes

`size`: `sm` 18px, `md` 24px (the default), `lg` 32px. Use `sm` in dense tables, `lg` next to 32px buttons or fields.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag size="sm" type="blue">Small</ui-tag>
  <ui-tag type="blue">Medium</ui-tag>
  <ui-tag size="lg" type="blue">Large</ui-tag>
</div>
```

React:

```tsx
<UiTag size="sm" type="blue">Small</UiTag>
<UiTag type="blue">Medium</UiTag>
<UiTag size="lg" type="blue">Large</UiTag>
```

React + Tailwind:

```tsx
<Tag size="sm" type="blue">Small</Tag>
<Tag type="blue">Medium</Tag>
<Tag size="lg" type="blue">Large</Tag>
```

## With an icon

A 16px icon goes before the text, in the `icon` slot (the `icon` prop in React + Tailwind). It takes the tag's text colour. The icon is decoration: the text still has to say everything.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag type="cyan">
    <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.55 3h1.1v5h-1.1V4ZM8 12.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" /></svg>
    Needs review
  </ui-tag>
  <ui-tag type="green">
    <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7 11 4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11Z" /></svg>
    Approved
  </ui-tag>
</div>
```

React:

```tsx
<UiTag type="cyan">
  <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.55 3h1.1v5h-1.1V4ZM8 12.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" /></svg>
  Needs review
</UiTag>
<UiTag type="green">
  <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7 11 4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11Z" /></svg>
  Approved
</UiTag>
```

React + Tailwind:

```tsx
<Tag type="cyan" icon={<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.55 3h1.1v5h-1.1V4ZM8 12.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" /></svg>}>
  Needs review
</Tag>
<Tag type="green" icon={<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM7 11 4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11Z" /></svg>}>
  Approved
</Tag>
```

## Beside a title

A tag sits on the middle of the text line, so it can follow a heading or a name without extra layout. Use `sm` next to small text.


HTML:

```html
<h3 style="margin: 0; font: var(--ui-font-heading-02)">Office lease, Silom branch <ui-tag type="green" size="sm">Signed</ui-tag></h3>
<p style="margin: 0">Somchai K. <ui-tag type="cool-gray" size="sm">Approver</ui-tag></p>
```

React:

```tsx
<h3>Office lease, Silom branch <UiTag type="green" size="sm">Signed</UiTag></h3>
<p>Somchai K. <UiTag type="cool-gray" size="sm">Approver</UiTag></p>
```

React + Tailwind:

```tsx
<h3 className="type-heading-02">Office lease, Silom branch <Tag type="green" size="sm">Signed</Tag></h3>
<p>Somchai K. <Tag type="cool-gray" size="sm">Approver</Tag></p>
```

## Long text

A tag is 208px wide at most. Longer text is cut with an ellipsis. As in Carbon web components, only a dismissible tag shows the full text as the browser's tooltip; when its text isn't the full name, give the full name in `tag-title` (`tagTitle` in React). React + Tailwind follows Carbon React: every tag shows it, and `title` sets it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag type="purple" dismissible>Procurement and supplier management department</ui-tag>
  <ui-tag type="purple" dismissible tag-title="Procurement and supplier management department">Procurement</ui-tag>
</div>
```

React:

```tsx
<UiTag type="purple" dismissible>Procurement and supplier management department</UiTag>
<UiTag type="purple" dismissible tagTitle="Procurement and supplier management department">Procurement</UiTag>
```

React + Tailwind:

```tsx
<Tag type="purple">Procurement and supplier management department</Tag>
<Tag type="purple" title="Procurement and supplier management department">Procurement</Tag>
```

## Dismissible

`dismissible` adds a close button. A press fires `ui-dismiss` (`onDismiss` in React + Tailwind); the tag stays until you remove it, so you can update your filters first. Removing a focused tag drops the focus: move it to the next tag, as the demo does.

The close button is named "Dismiss {text}" in the page's language. Set your own with `dismiss-label`; `{text}` becomes the tag's text.


HTML:

```html
<div id="tag-filters" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag dismissible type="blue" dismiss-label="Remove filter {text}">Sales</ui-tag>
  <ui-tag dismissible type="blue" dismiss-label="Remove filter {text}">Legal</ui-tag>
  <ui-tag dismissible type="blue" dismiss-label="Remove filter {text}">Signed in 2026</ui-tag>
</div>
<p>Removed: <output id="tag-filters-out">none</output></p>

<script type="module">
  const row = document.getElementById('tag-filters');
  const out = document.getElementById('tag-filters-out');
  row.addEventListener('ui-dismiss', (event) => {
    const tag = event.target;
    const next = tag.nextElementSibling ?? tag.previousElementSibling;
    out.value = tag.textContent.trim();
    tag.remove();
    next?.focus();
  });
</script>
```

React:

```tsx
const [filters, setFilters] = useState(['Sales', 'Legal', 'Signed in 2026']);

{filters.map((filter) => (
  <UiTag key={filter} dismissible type="blue" dismissLabel="Remove filter {text}" onUiDismiss={() => setFilters(filters.filter((f) => f !== filter))}>
    {filter}
  </UiTag>
))}
```

React + Tailwind:

```tsx
const [filters, setFilters] = useState(['Sales', 'Legal', 'Signed in 2026']);

{filters.map((filter) => (
  <Tag key={filter} dismissible type="blue" dismissLabel="Remove filter {text}" onDismiss={() => setFilters(filters.filter((f) => f !== filter))}>
    {filter}
  </Tag>
))}
```

## Selectable

`selectable` makes the tag a toggle button. A press flips `selected` and fires `change`. Selectable tags have one look of their own: `type` doesn't change them. Use them as quick filters above a list.


HTML:

```html
<div id="tag-depts" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag selectable selected>Sales</ui-tag>
  <ui-tag selectable>Legal</ui-tag>
  <ui-tag selectable>Finance</ui-tag>
  <ui-tag selectable>Human resources</ui-tag>
</div>
<p>Showing: <output id="tag-depts-out"></output></p>

<script type="module">
  const row = document.getElementById('tag-depts');
  const out = document.getElementById('tag-depts-out');
  const show = () => {
    const on = [...row.querySelectorAll('ui-tag')].filter((tag) => tag.selected).map((tag) => tag.textContent.trim());
    out.value = on.join(', ') || 'every department';
  };
  show();
  row.addEventListener('change', show);
</script>
```

React:

```tsx
import type { UiTag as TagElement } from '@purpurabog/ui';

const departments = ['Sales', 'Legal', 'Finance', 'Human resources'];
const [shown, setShown] = useState<string[]>(['Sales']);

{departments.map((dept) => (
  <UiTag
    key={dept}
    selectable
    selected={shown.includes(dept)}
    onChange={(e) => setShown((e.target as TagElement).selected ? [...shown, dept] : shown.filter((d) => d !== dept))}
  >
    {dept}
  </UiTag>
))}
<p>Showing: <output>{shown.join(', ') || 'every department'}</output></p>
```

React + Tailwind:

```tsx
{departments.map((dept) => (
  <Tag
    key={dept}
    selectable
    selected={shown.includes(dept)}
    onSelectedChange={(on) => setShown(on ? [...shown, dept] : shown.filter((d) => d !== dept))}
  >
    {dept}
  </Tag>
))}
<p>Showing: <output>{shown.join(', ') || 'every department'}</output></p>
```

React + Tailwind also takes `defaultSelected` for a tag you don't control.

## Operational

`operational` makes the tag a bordered button in its colour, for a tag that opens something. Here "+3" opens the rest of a long list in a [popover](https://parntengza.github.io/kanok-ui-docs/en/popover/). When the text alone doesn't say what the button does, name it with `label`. Inside a `ui-popover` the tag gets `aria-haspopup` and `aria-expanded` by itself (through its `expanded` property).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag type="blue">Sales</ui-tag>
  <ui-tag type="blue">Legal</ui-tag>
  <ui-popover id="tag-more" label="More departments" auto-close placement="bottom-start">
    <ui-tag slot="trigger" operational type="blue" label="3 more departments">+3</ui-tag>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; width: 220px">
      <ui-tag type="blue">Finance</ui-tag>
      <ui-tag type="blue">Procurement</ui-tag>
      <ui-tag type="blue">Human resources</ui-tag>
    </div>
  </ui-popover>
</div>

<script type="module">
  const popover = document.getElementById('tag-more');
  popover.querySelector('[slot="trigger"]').addEventListener('click', () => (popover.open = !popover.open));
</script>
```

React:

```tsx
const [open, setOpen] = useState(false);

<UiTag type="blue">Sales</UiTag>
<UiTag type="blue">Legal</UiTag>
<UiPopover label="More departments" autoClose placement="bottom-start" open={open} onUiToggle={(e) => setOpen(e.detail.open)}>
  <UiTag slot="trigger" operational type="blue" label="3 more departments" onClick={() => setOpen(!open)}>+3</UiTag>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 16, width: 220 }}>
    <UiTag type="blue">Finance</UiTag>
    <UiTag type="blue">Procurement</UiTag>
    <UiTag type="blue">Human resources</UiTag>
  </div>
</UiPopover>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(false);

<Tag type="blue">Sales</Tag>
<Tag type="blue">Legal</Tag>
<Popover
  label="More departments"
  autoClose
  placement="bottom-start"
  open={open}
  onOpenChange={setOpen}
  trigger={<Tag operational type="blue" aria-label="3 more departments" onClick={() => setOpen(!open)}>+3</Tag>}
>
  <div className="flex w-[220px] flex-wrap gap-2 p-4">
    <Tag type="blue">Finance</Tag>
    <Tag type="blue">Procurement</Tag>
    <Tag type="blue">Human resources</Tag>
  </div>
</Popover>
```

In React + Tailwind the operational tag is a plain `<button>`: name it with `aria-label`, and the popover's `trigger` prop adds `aria-expanded`.

## Disabled

`disabled` greys out every kind. A dismissible tag's close button, a selectable tag and an operational tag stop responding.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag type="blue" disabled>Read-only</ui-tag>
  <ui-tag type="blue" dismissible disabled>Dismissible</ui-tag>
  <ui-tag selectable selected disabled>Selectable</ui-tag>
  <ui-tag operational type="blue" disabled>Operational</ui-tag>
</div>
```

React:

```tsx
<UiTag type="blue" disabled>Read-only</UiTag>
<UiTag type="blue" dismissible disabled>Dismissible</UiTag>
<UiTag selectable selected disabled>Selectable</UiTag>
<UiTag operational type="blue" disabled>Operational</UiTag>
```

React + Tailwind:

```tsx
<Tag type="blue" disabled>Read-only</Tag>
<Tag type="blue" dismissible disabled>Dismissible</Tag>
<Tag selectable defaultSelected disabled>Selectable</Tag>
<Tag operational type="blue" disabled>Operational</Tag>
```

## Skeleton

While the tags load, show `ui-tag-skeleton`: a 60px pill at the tag's `size`. It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-tag-skeleton size="sm"></ui-tag-skeleton>
  <ui-tag-skeleton></ui-tag-skeleton>
  <ui-tag-skeleton size="lg"></ui-tag-skeleton>
</div>
```

React:

```tsx
import { UiTagSkeleton } from '@purpurabog/ui/react';

<UiTagSkeleton size="sm" />
<UiTagSkeleton />
<UiTagSkeleton size="lg" />
```

React + Tailwind:

```tsx
import { TagSkeleton } from '@/components/ui/react-tw/tag';

<TagSkeleton size="sm" />
<TagSkeleton />
<TagSkeleton size="lg" />
```

On the web component, import it from `@purpurabog/ui/tag-skeleton`. More skeletons: [Skeleton](https://parntengza.github.io/kanok-ui-docs/en/skeleton/).

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves to a dismissible tag's close button, a selectable tag or an operational tag. A read-only tag isn't a tab stop. |
| Enter, Space | Presses the close button, flips a selectable tag, or presses an operational tag |

## Accessibility

- A read-only tag is text. Screen readers read it with the content around it, so the text must make sense there; the colour alone says nothing.
- The close button is named "Dismiss {text}" (translated), so each one is different. `dismiss-label` changes the words.
- A selectable tag is a button with `aria-pressed`.
- An operational tag is a button. Give it `label` when its text is only a number, such as "+3".
- `el.focus()` moves focus to the tag's own control: the close button, or the button of a selectable or operational tag.

Unstyled React parts with the same behaviour: [Headless Tag](https://parntengza.github.io/kanok-ui-docs/en/headless-tag/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-tag>` · React `UiTag`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `type` | `type` | `TagType` | `'gray'` | Colour (Carbon `type`). |
| `size` | `size` | `TagSize` | `'md'` | sm 18px · md 24px (default) · lg 32px |
| `dismissible` | `dismissible` | `boolean` | `false` | Shows a close button that fires `ui-dismiss`. |
| `selectable` | `selectable` | `boolean` | `false` | A toggle button (`aria-pressed`); use `selected` for its state. |
| `selected` | `selected` | `boolean` | `false` |  |
| `operational` | `operational` | `boolean` | `false` | A bordered button for tags that open or trigger something. |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `tag-title` | `tagTitle` | `string` | `''` | A dismissible tag's full text for the browser tooltip (defaults to the text); other tags have none (Carbon WC). |
| `dismiss-label` | `dismissLabel` | `string` | `''` | Accessible name of the close button; `{text}` is replaced with the tag text. |
| `label` | `label` | `string` | `''` | An operational tag's accessible name, when its text alone doesn't say it (e.g. "+3": "3 more tags"). |
| `expanded` | `expanded` | `boolean \| undefined` |  | An operational tag that opens a popup: whether it is open (`aria-expanded`, with `aria-haspopup`). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-dismiss` | `onUiDismiss` | The dismiss button was pressed (the tag stays until you remove it) |
| `change` | `onChange` | A selectable tag was toggled (`selected` already updated) |

#### Slots

| Slot | Description |
|---|---|
| (default) | The tag text |
| `icon` | A 16px icon before the text (Carbon `renderIcon`) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The tag box |
| `label` | The text |
| `dismiss-button` | The close button of a dismissible tag |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tag-radius` |  | Corner radius (default 16px: a pill) |
| `--ui-tag-selectable-border` |  | Outline of a selectable tag (default `--ui-border-inverse`; Kanok: `--ui-hairline-strong`) |
| `--ui-tag-selected` |  | Fill and outline of a chosen selectable tag (default `--ui-layer-selected-inverse`; Kanok: `--ui-primary`); its text `--ui-tag-selected-ink` (`--ui-inverse-ink`) |
| `--ui-tag-font` |  | Font of the label (default `--ui-font-caption`; Kanok: medium weight) |
| `--ui-tag-high-contrast` |  | / --ui-tag-high-contrast-ink / --ui-tag-high-contrast-hover / --ui-tag-high-contrast-border / --ui-tag-high-contrast-edge / --ui-tag-high-contrast-focus - The high-contrast type (default Carbon's inverse block; Kanok: an outlined ink tag) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |

### `<ui-tag-skeleton>` · React `UiTagSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `bone` | The pill |


