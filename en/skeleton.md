# Skeleton

A skeleton is a grey placeholder in the shape of the content to come, shown while a page loads its data for the first time. `<ui-skeleton>` draws text lines, a heading, a field, a button or a block. Most components also have their own skeleton element; see the [index](#every-component-skeleton) at the end.


HTML:

```html
<div aria-busy="true" style="display: grid; gap: 16px; max-width: 480px">
  <ui-skeleton shape="heading"></ui-skeleton>
  <ui-skeleton lines="3"></ui-skeleton>
  <ui-skeleton shape="field"></ui-skeleton>
  <ui-skeleton shape="button"></ui-skeleton>
</div>
```

React:

```tsx
<div aria-busy="true">
  <UiSkeleton shape="heading" />
  <UiSkeleton lines={3} />
  <UiSkeleton shape="field" />
  <UiSkeleton shape="button" />
</div>
```

React + Tailwind:

```tsx
<div aria-busy="true">
  <Skeleton shape="heading" />
  <Skeleton lines={3} />
  <Skeleton shape="field" />
  <Skeleton shape="button" />
</div>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/skeleton @kanok-ui/accordion @kanok-ui/big-number @kanok-ui/breadcrumb @kanok-ui/button @kanok-ui/checkbox @kanok-ui/code-snippet @kanok-ui/date-picker @kanok-ui/dropdown @kanok-ui/file-uploader @kanok-ui/number-input @kanok-ui/progress-indicator @kanok-ui/radio @kanok-ui/search @kanok-ui/select @kanok-ui/slider @kanok-ui/structured-list @kanok-ui/table @kanok-ui/tabs @kanok-ui/tag @kanok-ui/text-area @kanok-ui/text-input @kanok-ui/time-picker @kanok-ui/toggle
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-skeleton
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/skeleton.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/accordion.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/big-number.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/breadcrumb.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/button.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/checkbox.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/code-snippet.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/date-picker.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/dropdown.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/file-uploader.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/number-input.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/progress-indicator.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/radio.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/search.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/select.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/slider.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/structured-list.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/table.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tabs.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tag.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/text-area.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/text-input.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/time-picker.json
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/toggle.json
#    to its target:
#    components/ui/primitives/skeleton/skeleton.ts
#    components/ui/primitives/accordion/accordion-item.ts
#    components/ui/primitives/accordion/accordion-skeleton.ts
#    components/ui/primitives/accordion/accordion.ts
#    components/ui/primitives/big-number/big-number-skeleton.ts
#    components/ui/primitives/big-number/big-number.ts
#    components/ui/primitives/breadcrumb/breadcrumb-item.ts
#    components/ui/primitives/breadcrumb/breadcrumb-skeleton.ts
#    components/ui/primitives/breadcrumb/breadcrumb.ts
#    components/ui/primitives/button/button-skeleton.ts
#    components/ui/primitives/button/button.styles.ts
#    components/ui/primitives/button/button.ts
#    components/ui/primitives/checkbox/checkbox-group.ts
#    components/ui/primitives/checkbox/checkbox-skeleton.ts
#    components/ui/primitives/checkbox/checkbox.ts
#    components/ui/primitives/code-snippet/code-snippet-skeleton.ts
#    components/ui/primitives/code-snippet/code-snippet.ts
#    components/ui/primitives/date-picker/calendar.styles.ts
#    components/ui/primitives/date-picker/calendar.ts
#    components/ui/primitives/date-picker/date-field.styles.ts
#    components/ui/primitives/date-picker/date-field.ts
#    components/ui/primitives/date-picker/date-picker-fields.ts
#    components/ui/primitives/date-picker/date-picker-popup.ts
#    components/ui/primitives/date-picker/date-picker-skeleton.ts
#    components/ui/primitives/date-picker/date-picker.styles.ts
#    components/ui/primitives/date-picker/date-picker.ts
#    components/ui/primitives/dropdown/dropdown-skeleton.ts
#    components/ui/primitives/dropdown/dropdown.styles.ts
#    components/ui/primitives/dropdown/dropdown.ts
#    components/ui/primitives/file-uploader/file-uploader-item.ts
#    components/ui/primitives/file-uploader/file-uploader-shared.ts
#    components/ui/primitives/file-uploader/file-uploader-skeleton.ts
#    components/ui/primitives/file-uploader/file-uploader.ts
#    components/ui/primitives/number-input/number-input-skeleton.ts
#    components/ui/primitives/number-input/number-input.styles.ts
#    components/ui/primitives/number-input/number-input.ts
#    components/ui/primitives/progress-indicator/progress-indicator-skeleton.ts
#    components/ui/primitives/progress-indicator/progress-indicator.ts
#    components/ui/primitives/progress-indicator/progress-step.ts
#    components/ui/primitives/radio/radio-group.ts
#    components/ui/primitives/radio/radio-shared.ts
#    components/ui/primitives/radio/radio-skeleton.ts
#    components/ui/primitives/radio/radio.ts
#    components/ui/primitives/search/search-skeleton.ts
#    components/ui/primitives/search/search.styles.ts
#    components/ui/primitives/search/search.ts
#    components/ui/primitives/select/select-skeleton.ts
#    components/ui/primitives/select/select.styles.ts
#    components/ui/primitives/select/select.ts
#    components/ui/primitives/slider/slider-skeleton.ts
#    components/ui/primitives/slider/slider.styles.ts
#    components/ui/primitives/slider/slider.ts
#    components/ui/primitives/structured-list/structured-list-cell.ts
#    components/ui/primitives/structured-list/structured-list-row.ts
#    components/ui/primitives/structured-list/structured-list-skeleton.ts
#    components/ui/primitives/structured-list/structured-list.ts
#    components/ui/primitives/table/defs.ts
#    components/ui/primitives/table/table-batch-actions.ts
#    components/ui/primitives/table/table-body.ts
#    components/ui/primitives/table/table-cell.ts
#    components/ui/primitives/table/table-column-resize.ts
#    components/ui/primitives/table/table-column-settings.ts
#    components/ui/primitives/table/table-column.styles.ts
#    components/ui/primitives/table/table-csv-export.ts
#    components/ui/primitives/table/table-expanded-row.ts
#    components/ui/primitives/table/table-grid.ts
#    components/ui/primitives/table/table-head.ts
#    components/ui/primitives/table/table-header-cell.ts
#    components/ui/primitives/table/table-header-description.ts
#    components/ui/primitives/table/table-header-row.ts
#    components/ui/primitives/table/table-header-title.ts
#    components/ui/primitives/table/table-row.ts
#    components/ui/primitives/table/table-skeleton.ts
#    components/ui/primitives/table/table-toolbar-action.styles.ts
#    components/ui/primitives/table/table-toolbar-content.ts
#    components/ui/primitives/table/table-toolbar-search.ts
#    components/ui/primitives/table/table-toolbar.ts
#    components/ui/primitives/table/table.styles.ts
#    components/ui/primitives/table/table.ts
#    components/ui/primitives/tabs/tab-panel.ts
#    components/ui/primitives/tabs/tab.ts
#    components/ui/primitives/tabs/tabs-skeleton.ts
#    components/ui/primitives/tabs/tabs.styles.ts
#    components/ui/primitives/tabs/tabs.ts
#    components/ui/primitives/tag/tag-skeleton.ts
#    components/ui/primitives/tag/tag.ts
#    components/ui/primitives/text-area/text-area-skeleton.ts
#    components/ui/primitives/text-area/text-area.ts
#    components/ui/primitives/text-input/text-input-skeleton.ts
#    components/ui/primitives/text-input/text-input.styles.ts
#    components/ui/primitives/text-input/text-input.ts
#    components/ui/primitives/time-picker/time-picker-select.ts
#    components/ui/primitives/time-picker/time-picker-shared.ts
#    components/ui/primitives/time-picker/time-picker-skeleton.ts
#    components/ui/primitives/time-picker/time-picker.ts
#    components/ui/primitives/toggle/toggle-skeleton.ts
#    components/ui/primitives/toggle/toggle.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-skeleton, tokens, shared-events, shared-field, core-big-number, shared-localize, tooltip, core-overflow, menu, overflow-menu, shared-navigate, core-button, shared-form-control, shared-slots, copy-button, core-code-snippet, shared-align, calendar, core-date, core-overlay, core-popup, core-sheet, shared-position, shared-quiet-focus, core-dropdown, core-listbox, core-typeahead, shared-listbox, core-file-uploader, progress-bar, core-number-format, shared-affixes, core-roving, core-slider, shared-row-wrap, core-column-resize, core-csv, core-grid, core-table, pagination, popover, layer, core-auto-grow, core-field, core-mask

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-skeleton.json
#    to its target:
#    components/ui/react-tw/skeleton.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-field, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/skeleton';</script>

<ui-skeleton lines="2"></ui-skeleton>
```

React:

```tsx
import { UiSkeleton } from '@purpurabog/ui/react';

<UiSkeleton lines={2} />
```

React + Tailwind:

```tsx
import { Skeleton } from '@/components/ui/react-tw/skeleton';

<Skeleton lines={2} />
```

## Skeleton or loading?

Use a skeleton for the first load of a page, when you know the layout of what is coming: the page appears at once and the content fills in. Use [Loading](https://parntengza.github.io/kanok-ui-docs/en/loading/) or [Inline loading](https://parntengza.github.io/kanok-ui-docs/en/inline-loading/) when the user waits for an action, such as saving, and a skeleton would hide what they were working on.

## Text lines

`shape="text"` (the default) draws `lines` bars, 3 by default. The last of several lines is shorter, so it reads as a paragraph.


HTML:

```html
<div style="display: grid; gap: 24px; max-width: 480px">
  <ui-skeleton lines="1"></ui-skeleton>
  <ui-skeleton lines="4"></ui-skeleton>
</div>
```

React:

```tsx
<UiSkeleton lines={1} />
<UiSkeleton lines={4} />
```

React + Tailwind:

```tsx
<Skeleton lines={1} />
<Skeleton lines={4} />
```

## Heading

`shape="heading"` is one 24px bar, half the width by default.


HTML:

```html
<div style="display: grid; gap: 16px; max-width: 480px">
  <ui-skeleton shape="heading"></ui-skeleton>
  <ui-skeleton lines="2"></ui-skeleton>
</div>
```

React:

```tsx
<UiSkeleton shape="heading" />
<UiSkeleton lines={2} />
```

React + Tailwind:

```tsx
<Skeleton shape="heading" />
<Skeleton lines={2} />
```

## Field and button

`shape="field"` is a short label bar above a 48px field bar. `shape="button"` is a 48px bar, 120px wide, that sits inline. For a real field or button, prefer its own skeleton element (see the index below), which matches its size.


HTML:

```html
<div style="display: grid; gap: 16px; max-width: 480px">
  <ui-skeleton shape="field"></ui-skeleton>
  <ui-skeleton shape="field"></ui-skeleton>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <ui-skeleton shape="button"></ui-skeleton>
    <ui-skeleton shape="button"></ui-skeleton>
  </div>
</div>
```

React:

```tsx
<UiSkeleton shape="field" />
<UiSkeleton shape="field" />
<UiSkeleton shape="button" />
<UiSkeleton shape="button" />
```

React + Tailwind:

```tsx
<Skeleton shape="field" />
<Skeleton shape="field" />
<Skeleton shape="button" />
<Skeleton shape="button" />
```

## Placeholder block

`shape="block"` is one bar, 160px high by default, for an image, a chart or a whole card (Carbon's `SkeletonPlaceholder`). Set the height with the `--ui-skeleton-height` CSS property (`height` in React + Tailwind).


HTML:

```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; max-width: 520px">
  <ui-skeleton shape="block"></ui-skeleton>
  <ui-skeleton shape="block" style="--ui-skeleton-height: 96px"></ui-skeleton>
</div>
```

React:

```tsx
<UiSkeleton shape="block" />
<UiSkeleton shape="block" style={{ '--ui-skeleton-height': '96px' } as CSSProperties} />
```

React + Tailwind:

```tsx
<Skeleton shape="block" />
<Skeleton shape="block" height="96px" />
```

## Width

Every shape is full width by default (a heading half, a button 120px). Set the width with the `--ui-skeleton-width` CSS property (`width` in React + Tailwind), so the placeholder looks like the content to come. Give it with its unit (`"200px"`, `"70%"`); `width` and `height` take strings, as Carbon's `SkeletonText` `width`.


HTML:

```html
<div style="display: grid; gap: 16px; max-width: 480px">
  <ui-skeleton shape="heading" style="--ui-skeleton-width: 200px"></ui-skeleton>
  <ui-skeleton lines="1" style="--ui-skeleton-width: 70%"></ui-skeleton>
  <ui-skeleton shape="button" style="--ui-skeleton-width: 160px"></ui-skeleton>
</div>
```

React:

```tsx
<UiSkeleton shape="heading" style={{ '--ui-skeleton-width': '200px' } as CSSProperties} />
<UiSkeleton lines={1} style={{ '--ui-skeleton-width': '70%' } as CSSProperties} />
<UiSkeleton shape="button" style={{ '--ui-skeleton-width': '160px' } as CSSProperties} />
```

React + Tailwind:

```tsx
<Skeleton shape="heading" width="200px" />
<Skeleton lines={1} width="70%" />
<Skeleton shape="button" width="160px" />
```

In React + Tailwind, give `width` and `height` with their unit, as strings: they set CSS properties, and a bare number has no unit there.

## Swap it for the content

Skeletons are hidden from screen readers. Tell them about the load on the container instead: `aria-busy="true"` while it loads, and a short status message. When the data arrives, put the content in place and drop both.


HTML:

```html
<div id="skeleton-card" aria-busy="true" style="display: grid; gap: 16px; max-width: 480px; padding: 16px; border: 1px solid var(--ui-hairline)">
  <ui-skeleton shape="heading"></ui-skeleton>
  <ui-skeleton lines="2"></ui-skeleton>
  <ui-skeleton shape="button"></ui-skeleton>
</div>
<p id="skeleton-card-status" role="status">Loading the vendor…</p>
<ui-button id="skeleton-card-reload" kind="tertiary">Load again</ui-button>

<script type="module">
  const card = document.getElementById('skeleton-card');
  const status = document.getElementById('skeleton-card-status');
  const skeleton = card.innerHTML;
  const content = `
    <h4 style="margin: 0">Siam Logistics Co., Ltd.</h4>
    <p style="margin: 0">Tax ID 0105556000000 · 3 active contracts · Paid on time for 24 months.</p>
    <div><ui-button kind="secondary">View contracts</ui-button></div>`;
  let timer;
  const load = () => {
    clearTimeout(timer);
    card.innerHTML = skeleton;
    card.setAttribute('aria-busy', 'true');
    status.textContent = 'Loading the vendor…';
    timer = setTimeout(() => {
      card.innerHTML = content;
      card.removeAttribute('aria-busy');
      status.textContent = 'Vendor loaded';
    }, 2000);
  };
  document.getElementById('skeleton-card-reload').addEventListener('click', load);
  load();
</script>
```

React:

```tsx
<div aria-busy={loading || undefined}>
  {loading ? (
    <>
      <UiSkeleton shape="heading" />
      <UiSkeleton lines={2} />
      <UiSkeleton shape="button" />
    </>
  ) : (
    <VendorCard vendor={vendor} />
  )}
</div>
<p role="status">{loading ? 'Loading the vendor…' : 'Vendor loaded'}</p>
```

React + Tailwind:

```tsx
<div aria-busy={loading || undefined}>
  {loading ? (
    <>
      <Skeleton shape="heading" />
      <Skeleton lines={2} />
      <Skeleton shape="button" />
    </>
  ) : (
    <VendorCard vendor={vendor} />
  )}
</div>
<p role="status">{loading ? 'Loading the vendor…' : 'Vendor loaded'}</p>
```

`VendorCard` stands for your own component.

## Component skeletons

Most components have a skeleton element in their own shape and size, as Carbon's `TextInputSkeleton`, `DropdownSkeleton` and so on. Each has its own import, `@purpurabog/ui/<component>-skeleton`. Each has a React wrapper named after it in `@purpurabog/ui/react` (`UiTextInputSkeleton`, `UiDropdownSkeleton` …). React + Tailwind has a `…Skeleton` component next to each component.


HTML:

```html
<div aria-busy="true" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 32px 24px">
  <ui-text-input-skeleton></ui-text-input-skeleton>
  <ui-dropdown-skeleton></ui-dropdown-skeleton>
  <ui-date-picker-skeleton range></ui-date-picker-skeleton>
  <ui-search-skeleton></ui-search-skeleton>
  <ui-slider-skeleton></ui-slider-skeleton>
  <div style="display: flex; gap: 16px; align-items: center"><ui-button-skeleton></ui-button-skeleton><ui-tag-skeleton></ui-tag-skeleton></div>
  <div style="display: grid; gap: 12px"><ui-checkbox-skeleton></ui-checkbox-skeleton><ui-radio-skeleton></ui-radio-skeleton><ui-toggle-skeleton></ui-toggle-skeleton></div>
  <ui-breadcrumb-skeleton></ui-breadcrumb-skeleton>
  <ui-tabs-skeleton tabs="3"></ui-tabs-skeleton>
  <ui-progress-indicator-skeleton steps="3"></ui-progress-indicator-skeleton>
</div>
```

React:

```tsx
import { UiTextInputSkeleton, UiDropdownSkeleton, UiButtonSkeleton, UiTagSkeleton } from '@purpurabog/ui/react';

<div aria-busy="true">
  <UiTextInputSkeleton />
  <UiDropdownSkeleton />
  <UiButtonSkeleton />
  <UiTagSkeleton />
</div>
```

React + Tailwind:

```tsx
import { TextInputSkeleton } from '@/components/ui/react-tw/text-input';
import { DropdownSkeleton } from '@/components/ui/react-tw/dropdown';
import { ButtonSkeleton } from '@/components/ui/react-tw/button';
import { TagSkeleton } from '@/components/ui/react-tw/tag';

<div aria-busy="true">
  <TextInputSkeleton />
  <DropdownSkeleton />
  <ButtonSkeleton />
  <TagSkeleton />
</div>
```

## Fluid field skeletons

The field skeletons take `fluid` for the skeleton of a fluid field: a 64px box with two bars. Inside `<ui-fluid-form>` (`FluidForm` in React + Tailwind) they are fluid without the attribute. The time picker skeleton is always fluid, as Carbon has only that one.


HTML:

```html
<div aria-busy="true" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 32px 24px">
  <ui-text-input-skeleton fluid></ui-text-input-skeleton>
  <ui-select-skeleton fluid></ui-select-skeleton>
  <ui-date-picker-skeleton fluid></ui-date-picker-skeleton>
  <ui-time-picker-skeleton></ui-time-picker-skeleton>
</div>
```

React:

```tsx
import { UiTextInputSkeleton, UiSelectSkeleton, UiDatePickerSkeleton, UiTimePickerSkeleton } from '@purpurabog/ui/react';

<UiTextInputSkeleton fluid />
<UiSelectSkeleton fluid />
<UiDatePickerSkeleton fluid />
<UiTimePickerSkeleton />
```

React + Tailwind:

```tsx
<TextInputSkeleton fluid />
<SelectSkeleton fluid />
<DatePickerSkeleton fluid />
<TimePickerSkeleton />
```

## Every component skeleton

Each component page shows its skeleton with its options. The field skeletons (text input, number input, dropdown, select, date picker) also take `size` (`sm`, `md`, `lg`), `hide-label` and `fluid`.

| Element | React + Tailwind | Attributes | Page |
|---|---|---|---|
| `ui-accordion-skeleton` | `AccordionSkeleton` | `count`, `open`, `alignment` | [Accordion](https://parntengza.github.io/kanok-ui-docs/en/accordion/#skeleton) |
| `ui-big-number-skeleton` | `BigNumberSkeleton` | `size` | [Big number](https://parntengza.github.io/kanok-ui-docs/en/big-number/) |
| `ui-breadcrumb-skeleton` | `BreadcrumbSkeleton` | `items`, `no-trailing-slash`, `size` | [Breadcrumb](https://parntengza.github.io/kanok-ui-docs/en/breadcrumb/#skeleton) |
| `ui-button-skeleton` | `ButtonSkeleton` | `size` | [Button](https://parntengza.github.io/kanok-ui-docs/en/button/#skeleton) |
| `ui-checkbox-skeleton` | `CheckboxSkeleton` | | [Checkbox](https://parntengza.github.io/kanok-ui-docs/en/checkbox/#skeleton) |
| `ui-code-snippet-skeleton` | `CodeSnippetSkeleton` | `type` | [Code snippet](https://parntengza.github.io/kanok-ui-docs/en/code-snippet/) |
| `ui-date-picker-skeleton` | `DatePickerSkeleton` | `range` | [Date picker](https://parntengza.github.io/kanok-ui-docs/en/date-picker/#skeleton) |
| `ui-dropdown-skeleton` | `DropdownSkeleton` | | [Dropdown](https://parntengza.github.io/kanok-ui-docs/en/dropdown/#skeleton), also for combobox and multi-select |
| `ui-file-uploader-skeleton` | `FileUploaderSkeleton` | | [File uploader](https://parntengza.github.io/kanok-ui-docs/en/file-uploader/#skeleton) |
| `ui-number-input-skeleton` | `NumberInputSkeleton` | | [Number input](https://parntengza.github.io/kanok-ui-docs/en/number-input/#skeleton) |
| `ui-progress-indicator-skeleton` | `ProgressIndicatorSkeleton` | `steps`, `vertical` | [Progress indicator](https://parntengza.github.io/kanok-ui-docs/en/progress-indicator/#skeleton) |
| `ui-radio-skeleton` | `RadioSkeleton` | | [Radio](https://parntengza.github.io/kanok-ui-docs/en/radio/#skeleton) |
| `ui-search-skeleton` | `SearchSkeleton` | `size`, `fluid` | [Search](https://parntengza.github.io/kanok-ui-docs/en/search/#skeleton) |
| `ui-select-skeleton` | `SelectSkeleton` | | [Select](https://parntengza.github.io/kanok-ui-docs/en/select/#skeleton) |
| `ui-slider-skeleton` | `SliderSkeleton` | `hide-label`, `two-handles` | [Slider](https://parntengza.github.io/kanok-ui-docs/en/slider/#skeleton) |
| `ui-structured-list-skeleton` | `StructuredListSkeleton` | `rows` | [Structured list](https://parntengza.github.io/kanok-ui-docs/en/structured-list/#skeleton) |
| `ui-table-skeleton` | `DataTableSkeleton` | `row-count`, `column-count`, `zebra`, `show-header`, `show-toolbar` | [Data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/#empty-loading-and-skeleton) |
| `ui-tabs-skeleton` | `TabsSkeleton` | `tabs` | [Tabs](https://parntengza.github.io/kanok-ui-docs/en/tabs/#skeleton) |
| `ui-tag-skeleton` | `TagSkeleton` | `size` | [Tag](https://parntengza.github.io/kanok-ui-docs/en/tag/) |
| `ui-text-area-skeleton` | `TextAreaSkeleton` | `hide-label`, `fluid` | [Text area](https://parntengza.github.io/kanok-ui-docs/en/text-area/#skeleton) |
| `ui-text-input-skeleton` | `TextInputSkeleton` | | [Text input](https://parntengza.github.io/kanok-ui-docs/en/text-input/#skeleton) |
| `ui-time-picker-skeleton` | `TimePickerSkeleton` | `is-only-two` | [Time picker](https://parntengza.github.io/kanok-ui-docs/en/time-picker/#skeleton) |
| `ui-toggle-skeleton` | `ToggleSkeleton` | | [Toggle](https://parntengza.github.io/kanok-ui-docs/en/toggle/#skeleton) |

`ui-table-skeleton` comes with `@purpurabog/ui/table`. Every element here has a React wrapper named after it: `ui-accordion-skeleton` is `UiAccordionSkeleton`, `ui-table-skeleton` is `UiTableSkeleton`, and so on; its props are the attributes in camelCase (`hideLabel`, `noTrailingSlash`). In React + Tailwind, import each `…Skeleton` from its component's file, for example `TextInputSkeleton` from `@/components/ui/react-tw/text-input`; `RadioSkeleton` comes from `radio-group`.

## Accessibility

- Every skeleton is hidden from screen readers (`aria-hidden`) and never takes focus.
- Say "loading" on the container: `aria-busy="true"` and a short status message, such as a `role="status"` "Loading contracts…". Drop both when the content arrives.
- The bars have Carbon's 3-second shimmer; under `prefers-reduced-motion` it stops.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-skeleton>` · React `UiSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `shape` | `shape` | `SkeletonShape` | `'text'` |  |
| `lines` | `lines` | `number` | `3` | Number of lines for `shape="text"`. |

#### CSS parts

| Part | Description |
|---|---|
| `bone` | Each grey placeholder bar |
| `label` | The short label bar of `shape="field"` |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-skeleton-width` |  | Width (default: full width; buttons 120px) |
| `--ui-skeleton-height` |  | Height of `shape="block"` (default 160px) |

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

### `<ui-breadcrumb-skeleton>` · React `UiBreadcrumbSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `items` | `items` | `number` | `3` |  |
| `no-trailing-slash` | `noTrailingSlash` | `boolean` | `false` |  |
| `size` | `size` | `'sm' \| 'md'` | `'md'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `item` | Each bar |

### `<ui-button-skeleton>` · React `UiButtonSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `ButtonSize` | `'lg'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `bone` | The bar |

### `<ui-checkbox-skeleton>` · React `UiCheckboxSkeleton`

#### CSS parts

| Part | Description |
|---|---|
| `box` | The empty box |
| `label` | The label bar |

### `<ui-code-snippet-skeleton>` · React `UiCodeSnippetSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `type` | `type` | `'single' \| 'multi'` | `'single'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The box |
| `line` | Each bar |

### `<ui-date-picker-skeleton>` · React `UiDatePickerSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `range` | `range` | `boolean` | `false` | Start and end inputs. |
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The field's height: sm 32px, md 40px, lg 48px. |
| `hide-label` | `hideLabel` | `boolean` | `false` | No label bar (the field had `hide-label`). |
| `fluid` | `fluid` | `boolean` | `false` | The fluid field's skeleton (Carbon `Fluid*Skeleton`): a 64px box with two bars; `<ui-fluid-form>` sets it. |

#### CSS parts

| Part | Description |
|---|---|
| `label` | Each label bar |
| `field` | Each field bar (fluid: the box) |

### `<ui-dropdown-skeleton>` · React `UiDropdownSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The field's height: sm 32px, md 40px, lg 48px. |
| `hide-label` | `hideLabel` | `boolean` | `false` | No label bar (the field had `hide-label`). |
| `fluid` | `fluid` | `boolean` | `false` | The fluid field's skeleton (Carbon `Fluid*Skeleton`): a 64px box with two bars; `<ui-fluid-form>` sets it. |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `field` | The field bar |

### `<ui-file-uploader-skeleton>` · React `UiFileUploaderSkeleton`

#### CSS parts

| Part | Description |
|---|---|
| `title` | The title bar |
| `description` | The description bar |
| `button` | The button bar |

### `<ui-number-input-skeleton>` · React `UiNumberInputSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The field's height: sm 32px, md 40px, lg 48px. |
| `hide-label` | `hideLabel` | `boolean` | `false` | No label bar (the field had `hide-label`). |
| `fluid` | `fluid` | `boolean` | `false` | The fluid field's skeleton (Carbon `Fluid*Skeleton`): a 64px box with two bars; `<ui-fluid-form>` sets it. |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `field` | The field bar |

### `<ui-progress-indicator-skeleton>` · React `UiProgressIndicatorSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `steps` | `steps` | `number` | `4` |  |
| `vertical` | `vertical` | `boolean` | `false` |  |

#### CSS parts

| Part | Description |
|---|---|
| `step` | Each step |
| `label` | Each label bar |

### `<ui-radio-skeleton>` · React `UiRadioSkeleton`

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |

### `<ui-search-skeleton>` · React `UiSearchSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |  |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidSearchSkeleton`. |

#### CSS parts

| Part | Description |
|---|---|
| `field` | The bar (fluid: the box) |
| `label` | Fluid: the 25% bar |
| `value` | Fluid: the 50% bar |

### `<ui-select-skeleton>` · React `UiSelectSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The field's height: sm 32px, md 40px, lg 48px. |
| `hide-label` | `hideLabel` | `boolean` | `false` | No label bar (the field had `hide-label`). |
| `fluid` | `fluid` | `boolean` | `false` | The fluid field's skeleton (Carbon `Fluid*Skeleton`): a 64px box with two bars; `<ui-fluid-form>` sets it. |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `field` | The field bar |

### `<ui-slider-skeleton>` · React `UiSliderSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `hide-label` | `hideLabel` | `boolean` | `false` |  |
| `two-handles` | `twoHandles` | `boolean` | `false` | The skeleton of a two-thumb slider (`<ui-slider value-upper>`). |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `range-label` | The min / max bars |

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

### `<ui-table-skeleton>` · React `UiTableSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `column-count` | `columnCount` | `number` | `5` |  |
| `row-count` | `rowCount` | `number` | `5` |  |
| `show-header` | `showHeader` | `boolean` | `true` | The title / description bars (Carbon `show-header`; `show-header="false"` hides them). |
| `show-toolbar` | `showToolbar` | `boolean` | `true` | The toolbar bar (Carbon `show-toolbar`; `show-toolbar="false"` hides it). |
| `zebra` | `zebra` | `boolean` | `false` | Stripe every second row. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `headers` | `string[]` | Header texts to show instead of bars (Carbon `headers`); their number sets the columns. |

#### CSS parts

| Part | Description |
|---|---|
| `table` | The `<table>` |

### `<ui-tabs-skeleton>` · React `UiTabsSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `tabs` | `tabs` | `number` | `5` |  |

#### CSS parts

| Part | Description |
|---|---|
| `tab` | Each tab |

### `<ui-tag-skeleton>` · React `UiTagSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `bone` | The pill |

### `<ui-text-area-skeleton>` · React `UiTextAreaSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The field's height: sm 32px, md 40px, lg 48px. |
| `hide-label` | `hideLabel` | `boolean` | `false` | No label bar (the field had `hide-label`). |
| `fluid` | `fluid` | `boolean` | `false` | The fluid field's skeleton (Carbon `Fluid*Skeleton`): a 64px box with two bars; `<ui-fluid-form>` sets it. |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `field` | The field bar |

### `<ui-text-input-skeleton>` · React `UiTextInputSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The field's height: sm 32px, md 40px, lg 48px. |
| `hide-label` | `hideLabel` | `boolean` | `false` | No label bar (the field had `hide-label`). |
| `fluid` | `fluid` | `boolean` | `false` | The fluid field's skeleton (Carbon `Fluid*Skeleton`): a 64px box with two bars; `<ui-fluid-form>` sets it. |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The label bar |
| `field` | The field bar |

### `<ui-time-picker-skeleton>` · React `UiTimePickerSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `is-only-two` | `isOnlyTwo` | `boolean` | `false` | Two boxes (time and AM / PM), half each. |

#### CSS parts

| Part | Description |
|---|---|
| `field` | Each box |

### `<ui-toggle-skeleton>` · React `UiToggleSkeleton`

#### CSS parts

| Part | Description |
|---|---|
| `circle` | The circle |
| `bar` | The bar |


