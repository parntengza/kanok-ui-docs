# Progress bar

A progress bar shows how far a task has come, such as an upload or an import. The track fills to `value / max`; with no `value` a stripe sweeps across it while the length is unknown. A label names it, and helper text below says the details.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar label="Uploading signed copies" helper-text="3 of 5 files" value="60"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Uploading signed copies" helperText="3 of 5 files" value={60} />
```

React + Tailwind:

```tsx
<ProgressBar label="Uploading signed copies" helperText="3 of 5 files" value={60} />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/progress-bar
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-progress-bar
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/progress-bar.json
#    to its target:
#    components/ui/primitives/progress-bar/progress-bar.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-progress-bar, shared-element, shared-field, shared-localize, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-progress-bar.json
#    to its target:
#    components/ui/react-tw/progress-bar.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-progress-bar, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/progress-bar';</script>

<ui-progress-bar label="Importing vendors" value="40"></ui-progress-bar>
```

React:

```tsx
import { UiProgressBar } from '@purpurabog/ui/react';

<UiProgressBar label="Importing vendors" value={40} />
```

React + Tailwind:

```tsx
import { ProgressBar } from '@/components/ui/react-tw/progress-bar';

<ProgressBar label="Importing vendors" value={40} />
```

## Progress bar, progress indicator or loading?

- Progress bar: the system is doing one task and you can say how far it is.
- [Progress indicator](https://parntengza.github.io/kanok-ui-docs/en/progress-indicator/): the user goes through the steps of a form.
- [Loading](https://parntengza.github.io/kanok-ui-docs/en/loading/) or [Inline loading](https://parntengza.github.io/kanok-ui-docs/en/inline-loading/): something is busy and you can't say how far.

## Value and max

`value` is the progress and `max` the whole (100 by default). Use the units of the task when they mean something, such as files. A value below 0 or above `max` is held at the end.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar label="Uploading signed copies" helper-text="3 of 5 files" value="3" max="5"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Uploading signed copies" helperText="3 of 5 files" value={3} max={5} />
```

React + Tailwind:

```tsx
<ProgressBar label="Uploading signed copies" helperText="3 of 5 files" value={3} max={5} />
```

## Indeterminate

Leave out `value` while you don't know the length yet. A stripe sweeps across the track until you set a value or a status.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar label="Preparing the export" helper-text="Collecting contracts…"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Preparing the export" helperText="Collecting contracts…" />
```

React + Tailwind:

```tsx
<ProgressBar label="Preparing the export" helperText="Collecting contracts…" />
```

## Live progress

Set `value` as the work goes, and `status="finished"` at the end. The track moves smoothly between values.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar id="progress-bar-live" label="Uploading signed copies" helper-text="Not started" value="0" max="5"></ui-progress-bar>
</div>
<ui-button id="progress-bar-live-start" kind="tertiary">Upload 5 files</ui-button>

<script type="module">
  const bar = document.getElementById('progress-bar-live');
  let timer;
  document.getElementById('progress-bar-live-start').addEventListener('click', () => {
    clearInterval(timer);
    let files = 0;
    bar.status = 'active';
    bar.value = files;
    bar.helperText = '0 of 5 files';
    timer = setInterval(() => {
      files += 1;
      bar.value = files;
      bar.helperText = `${files} of 5 files`;
      if (files === 5) {
        clearInterval(timer);
        bar.status = 'finished';
        bar.helperText = 'All 5 files uploaded';
      }
    }, 700);
  });
</script>
```

React:

```tsx
<UiProgressBar
  label="Uploading signed copies"
  value={files}
  max={5}
  status={files === 5 ? 'finished' : 'active'}
  helperText={files === 5 ? 'All 5 files uploaded' : `${files} of 5 files`}
/>
```

React + Tailwind:

```tsx
<ProgressBar
  label="Uploading signed copies"
  value={files}
  max={5}
  status={files === 5 ? 'finished' : 'active'}
  helperText={files === 5 ? 'All 5 files uploaded' : `${files} of 5 files`}
/>
```

## Finished

`status="finished"` fills the track in green and puts a check mark beside the label, whatever the `value`.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar label="Uploading signed copies" helper-text="All files uploaded" status="finished"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Uploading signed copies" helperText="All files uploaded" status="finished" />
```

React + Tailwind:

```tsx
<ProgressBar label="Uploading signed copies" helperText="All files uploaded" status="finished" />
```

## Error

`status="error"` turns the track, the icon beside the label and the helper text red. Screen readers hear "Error" after the label. Say in the helper text what went wrong and what to do.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar label="Uploading signed copies" helper-text="Upload failed. Check your connection and try again." status="error"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Uploading signed copies" helperText="Upload failed. Check your connection and try again." status="error" />
```

React + Tailwind:

```tsx
<ProgressBar label="Uploading signed copies" helperText="Upload failed. Check your connection and try again." status="error" />
```

## Sizes

`size`: `md` is an 8px track (Carbon's `big`, the default); `sm` is 4px (Carbon's `small`).


HTML:

```html
<div style="display: grid; gap: 24px; max-width: 480px">
  <ui-progress-bar label="Medium (8px)" value="40"></ui-progress-bar>
  <ui-progress-bar label="Small (4px)" value="40" size="sm"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Medium (8px)" value={40} />
<UiProgressBar label="Small (4px)" value={40} size="sm" />
```

React + Tailwind:

```tsx
<ProgressBar label="Medium (8px)" value={40} />
<ProgressBar label="Small (4px)" value={40} size="sm" />
```

## Inline

`type="inline"` puts the label and the track on one row, for tight places such as a table cell. The helper text is then read by screen readers only. When it is finished or fails, only the label and the icon show.


HTML:

```html
<div style="display: grid; gap: 24px; max-width: 480px">
  <ui-progress-bar label="Vendors" helper-text="120 of 300 rows" value="40" type="inline"></ui-progress-bar>
  <ui-progress-bar label="Contracts" helper-text="All rows imported" status="finished" type="inline"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Vendors" helperText="120 of 300 rows" value={40} type="inline" />
<UiProgressBar label="Contracts" helperText="All rows imported" status="finished" type="inline" />
```

React + Tailwind:

```tsx
<ProgressBar label="Vendors" helperText="120 of 300 rows" value={40} type="inline" />
<ProgressBar label="Contracts" helperText="All rows imported" status="finished" type="inline" />
```

## Indented

`type="indented"` moves the label and the helper text 16px in, to line up with indented content such as the text of a tile or a list row. The track stays full width.


HTML:

```html
<div style="max-width: 480px">
  <ui-progress-bar label="Importing vendors" helper-text="120 of 300 rows" value="120" max="300" type="indented"></ui-progress-bar>
</div>
```

React:

```tsx
<UiProgressBar label="Importing vendors" helperText="120 of 300 rows" value={120} max={300} type="indented" />
```

React + Tailwind:

```tsx
<ProgressBar label="Importing vendors" helperText="120 of 300 rows" value={120} max={300} type="indented" />
```

## Hidden label

`hide-label` (`hideLabel` in React) hides the label from view when the text around already says what is progressing. It still names the bar for screen readers, so always write it.


HTML:

```html
<div style="display: grid; gap: 8px; max-width: 480px">
  <strong>Backup of the finance database</strong>
  <ui-progress-bar label="Backup of the finance database" hide-label value="70"></ui-progress-bar>
</div>
```

React:

```tsx
<strong>Backup of the finance database</strong>
<UiProgressBar label="Backup of the finance database" hideLabel value={70} />
```

React + Tailwind:

```tsx
<strong>Backup of the finance database</strong>
<ProgressBar label="Backup of the finance database" hideLabel value={70} />
```

## Accessibility

- The track is a `progressbar` named by the label and described by the helper text. It has `aria-valuemin`, `aria-valuemax` and `aria-valuenow` when it has a value, and none while indeterminate.
- It is `aria-busy` until it is finished.
- On error, screen readers hear "Error" after the label, translated to the page language.
- Always write a `label`, even with `hide-label`.
- Under `prefers-reduced-motion`, the indeterminate stripe moves more slowly.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-progress-bar>` · React `UiProgressBar`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` | Required. What is progressing; shown above (or beside) the track and read as the bar's name. |
| `hide-label` | `hideLabel` | `boolean` | `false` | Visually hides the label (it still names the bar). |
| `helper-text` | `helperText` | `string` | `''` |  |
| `value` | `value` | `number \| undefined` |  | Current progress; leave unset for an indeterminate bar. |
| `max` | `max` | `number` | `100` |  |
| `size` | `size` | `ProgressBarSize` | `'md'` |  |
| `status` | `status` | `ProgressBarStatus` | `'active'` |  |
| `type` | `type` | `ProgressBarType` | `'default'` |  |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The wrapper |
| `label` | Label row (text + status icon) |
| `track` | The `progressbar` element |
| `bar` | The filled portion |
| `helper-text` | Helper text below the track |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-progress-track` |  | The track's fill (default `--ui-surface-1`; Kanok: a hairline grey); `--ui-progress-radius` its corners (default square; Kanok: round) |


