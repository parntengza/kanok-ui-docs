# Progress indicator

A progress indicator shows where the user is in a task of several steps: which steps are done, which one is current and what comes next. Use it above a multi-step form or a wizard.


HTML:

```html
<ui-progress-indicator current-index="1">
  <ui-progress-step label="Contract details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
  <ui-progress-step label="Review"></ui-progress-step>
  <ui-progress-step label="Send"></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
<UiProgressIndicator currentIndex={1}>
  <UiProgressStep label="Contract details" />
  <UiProgressStep label="Signers" />
  <UiProgressStep label="Review" />
  <UiProgressStep label="Send" />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
<ProgressIndicator currentIndex={1}>
  <ProgressStep label="Contract details" />
  <ProgressStep label="Signers" />
  <ProgressStep label="Review" />
  <ProgressStep label="Send" />
</ProgressIndicator>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/progress-indicator
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-progress-indicator
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/progress-indicator.json
#    to its target:
#    components/ui/primitives/progress-indicator/progress-indicator-skeleton.ts
#    components/ui/primitives/progress-indicator/progress-indicator.ts
#    components/ui/primitives/progress-indicator/progress-step.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-localize, shared-skeleton, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-progress-indicator.json
#    to its target:
#    components/ui/react-tw/progress-indicator.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/progress-indicator';</script>

<ui-progress-indicator current-index="0">
  <ui-progress-step label="Contract details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
import { UiProgressIndicator, UiProgressStep } from '@purpurabog/ui/react';

<UiProgressIndicator currentIndex={0}>
  <UiProgressStep label="Contract details" />
  <UiProgressStep label="Signers" />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
import { ProgressIndicator, ProgressStep } from '@/components/ui/react-tw/progress-indicator';

<ProgressIndicator currentIndex={0}>
  <ProgressStep label="Contract details" />
  <ProgressStep label="Signers" />
</ProgressIndicator>
```

## Step states

`current-index` (0-based) decides each step's state: the steps before it are complete (a check mark), the step at it is current (a half-filled circle), the steps after it are incomplete (an empty circle). Two flags on a step add to that:

- `invalid` shows a warning icon in red: the step has an error to fix.
- `disabled` greys the step out. It can't be clicked, even in an interactive indicator.


HTML:

```html
<ui-progress-indicator current-index="1">
  <ui-progress-step label="Contract details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
  <ui-progress-step label="Review" invalid></ui-progress-step>
  <ui-progress-step label="Send" disabled></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
<UiProgressIndicator currentIndex={1}>
  <UiProgressStep label="Contract details" />
  <UiProgressStep label="Signers" />
  <UiProgressStep label="Review" invalid />
  <UiProgressStep label="Send" disabled />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
<ProgressIndicator currentIndex={1}>
  <ProgressStep label="Contract details" />
  <ProgressStep label="Signers" />
  <ProgressStep label="Review" invalid />
  <ProgressStep label="Send" disabled />
</ProgressIndicator>
```

## Secondary label

`secondary-label` adds a smaller line under the label: "Optional", a date, a count.


HTML:

```html
<ui-progress-indicator current-index="2">
  <ui-progress-step label="Request" secondary-label="1 Oct"></ui-progress-step>
  <ui-progress-step label="Legal review" secondary-label="3 Oct"></ui-progress-step>
  <ui-progress-step label="Attachments" secondary-label="Optional"></ui-progress-step>
  <ui-progress-step label="Approval"></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
<UiProgressIndicator currentIndex={2}>
  <UiProgressStep label="Request" secondaryLabel="1 Oct" />
  <UiProgressStep label="Legal review" secondaryLabel="3 Oct" />
  <UiProgressStep label="Attachments" secondaryLabel="Optional" />
  <UiProgressStep label="Approval" />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
<ProgressIndicator currentIndex={2}>
  <ProgressStep label="Request" secondaryLabel="1 Oct" />
  <ProgressStep label="Legal review" secondaryLabel="3 Oct" />
  <ProgressStep label="Attachments" secondaryLabel="Optional" />
  <ProgressStep label="Approval" />
</ProgressIndicator>
```

## Complete out of order

`complete` on a step marks it done whatever `current-index` says. Use it when the user may fill the steps in any order: here the attachments are already in, while the user is still on the signers.


HTML:

```html
<ui-progress-indicator current-index="1">
  <ui-progress-step label="Contract details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
  <ui-progress-step label="Attachments" complete></ui-progress-step>
  <ui-progress-step label="Send"></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
<UiProgressIndicator currentIndex={1}>
  <UiProgressStep label="Contract details" />
  <UiProgressStep label="Signers" />
  <UiProgressStep label="Attachments" complete />
  <UiProgressStep label="Send" />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
<ProgressIndicator currentIndex={1}>
  <ProgressStep label="Contract details" />
  <ProgressStep label="Signers" />
  <ProgressStep label="Attachments" complete />
  <ProgressStep label="Send" />
</ProgressIndicator>
```

## Let the user jump between steps

`interactive` makes the steps buttons: a click on a step (not the current one, not a disabled one) makes it current and fires `ui-change` with `detail.index`. In React + Tailwind, `onChange` gets the index. Use it when going back to an earlier step is safe, for example to correct the details before sending.


HTML:

```html
<ui-progress-indicator id="progress-jump" current-index="2" interactive>
  <ui-progress-step label="Contract details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
  <ui-progress-step label="Review"></ui-progress-step>
  <ui-progress-step label="Send" disabled></ui-progress-step>
</ui-progress-indicator>
<p>Current step: <output id="progress-jump-out">2</output></p>

<script type="module">
  const steps = document.getElementById('progress-jump');
  const out = document.getElementById('progress-jump-out');
  steps.addEventListener('ui-change', (event) => (out.value = event.detail.index));
</script>
```

React:

```tsx
const [step, setStep] = useState(2);

<UiProgressIndicator currentIndex={step} interactive onUiChange={(e) => setStep(e.detail.index)}>
  <UiProgressStep label="Contract details" />
  <UiProgressStep label="Signers" />
  <UiProgressStep label="Review" />
  <UiProgressStep label="Send" disabled />
</UiProgressIndicator>
<p>Current step: <output>{step}</output></p>
```

React + Tailwind:

```tsx
const [step, setStep] = useState(2);

<ProgressIndicator currentIndex={step} interactive onChange={setStep}>
  <ProgressStep label="Contract details" />
  <ProgressStep label="Signers" />
  <ProgressStep label="Review" />
  <ProgressStep label="Send" disabled />
</ProgressIndicator>
<p>Current step: <output>{step}</output></p>
```

React + Tailwind also takes `defaultCurrentIndex` when you don't need to hold the step yourself.

## Back and Next buttons

Most often the page moves through the steps itself: set `current-index` from your Back and Next buttons. The indicator only shows the position; it doesn't change it on its own unless it is `interactive`.


HTML:

```html
<ui-progress-indicator id="progress-wizard" current-index="0">
  <ui-progress-step label="Contract details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
  <ui-progress-step label="Review"></ui-progress-step>
  <ui-progress-step label="Send"></ui-progress-step>
</ui-progress-indicator>
<p id="progress-wizard-text">Step 1 of 4: Contract details</p>
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="progress-wizard-back" kind="secondary" disabled>Back</ui-button>
  <ui-button id="progress-wizard-next">Next</ui-button>
</div>

<script type="module">
  const indicator = document.getElementById('progress-wizard');
  const text = document.getElementById('progress-wizard-text');
  const back = document.getElementById('progress-wizard-back');
  const next = document.getElementById('progress-wizard-next');
  const labels = [...indicator.querySelectorAll('ui-progress-step')].map((step) => step.label);
  const go = (index) => {
    indicator.currentIndex = index;
    text.textContent = `Step ${index + 1} of ${labels.length}: ${labels[index]}`;
    back.disabled = index === 0;
    next.disabled = index === labels.length - 1;
  };
  back.addEventListener('click', () => go(indicator.currentIndex - 1));
  next.addEventListener('click', () => go(indicator.currentIndex + 1));
</script>
```

React:

```tsx
const labels = ['Contract details', 'Signers', 'Review', 'Send'];
const [step, setStep] = useState(0);

<UiProgressIndicator currentIndex={step}>
  {labels.map((label) => <UiProgressStep key={label} label={label} />)}
</UiProgressIndicator>
<p>Step {step + 1} of {labels.length}: {labels[step]}</p>
<UiButton kind="secondary" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</UiButton>
<UiButton disabled={step === labels.length - 1} onClick={() => setStep(step + 1)}>Next</UiButton>
```

React + Tailwind:

```tsx
const labels = ['Contract details', 'Signers', 'Review', 'Send'];
const [step, setStep] = useState(0);

<ProgressIndicator currentIndex={step}>
  {labels.map((label) => <ProgressStep key={label} label={label} />)}
</ProgressIndicator>
<p>Step {step + 1} of {labels.length}: {labels[step]}</p>
<Button kind="secondary" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
<Button disabled={step === labels.length - 1} onClick={() => setStep(step + 1)}>Next</Button>
```

## Vertical

`vertical` stacks the steps. Use it in a narrow column beside the form, or when the labels are long.


HTML:

```html
<ui-progress-indicator current-index="1" vertical>
  <ui-progress-step label="Request submitted" secondary-label="1 Oct, 09:12"></ui-progress-step>
  <ui-progress-step label="Legal review" secondary-label="In progress"></ui-progress-step>
  <ui-progress-step label="Approval by the managing director"></ui-progress-step>
  <ui-progress-step label="Signing"></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
<UiProgressIndicator currentIndex={1} vertical>
  <UiProgressStep label="Request submitted" secondaryLabel="1 Oct, 09:12" />
  <UiProgressStep label="Legal review" secondaryLabel="In progress" />
  <UiProgressStep label="Approval by the managing director" />
  <UiProgressStep label="Signing" />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
<ProgressIndicator currentIndex={1} vertical>
  <ProgressStep label="Request submitted" secondaryLabel="1 Oct, 09:12" />
  <ProgressStep label="Legal review" secondaryLabel="In progress" />
  <ProgressStep label="Approval by the managing director" />
  <ProgressStep label="Signing" />
</ProgressIndicator>
```

## Space equally

By default each step is 128px wide, and a longer label wraps at 88px (Carbon cuts it with an ellipsis; here no step name is hidden). `space-equally` stretches the steps to share the full width instead. It has no effect with `vertical`.


HTML:

```html
<ui-progress-indicator current-index="2" space-equally>
  <ui-progress-step label="Details"></ui-progress-step>
  <ui-progress-step label="Signers"></ui-progress-step>
  <ui-progress-step label="Review"></ui-progress-step>
  <ui-progress-step label="Send"></ui-progress-step>
</ui-progress-indicator>
```

React:

```tsx
<UiProgressIndicator currentIndex={2} spaceEqually>
  <UiProgressStep label="Details" />
  <UiProgressStep label="Signers" />
  <UiProgressStep label="Review" />
  <UiProgressStep label="Send" />
</UiProgressIndicator>
```

React + Tailwind:

```tsx
<ProgressIndicator currentIndex={2} spaceEqually>
  <ProgressStep label="Details" />
  <ProgressStep label="Signers" />
  <ProgressStep label="Review" />
  <ProgressStep label="Send" />
</ProgressIndicator>
```

## Skeleton

While the steps load, show `ui-progress-indicator-skeleton`: `steps` empty steps (4 by default), in a row or stacked with `vertical`. It is hidden from screen readers, so say "loading" on the container (for example `aria-busy`).


HTML:

```html
<ui-progress-indicator-skeleton></ui-progress-indicator-skeleton>
<ui-progress-indicator-skeleton steps="3" vertical></ui-progress-indicator-skeleton>
```

React:

```tsx
import { UiProgressIndicatorSkeleton } from '@purpurabog/ui/react';

<UiProgressIndicatorSkeleton />
<UiProgressIndicatorSkeleton steps={3} vertical />
```

React + Tailwind:

```tsx
import { ProgressIndicatorSkeleton } from '@/components/ui/react-tw/progress-indicator';

<ProgressIndicatorSkeleton />
<ProgressIndicatorSkeleton steps={3} vertical />
```

On the web component, import it from `@purpurabog/ui/progress-indicator-skeleton`.

## Keyboard

| Key | Does |
|---|---|
| Tab / Shift+Tab | With `interactive`: moves between the steps (disabled steps are skipped). Without it the steps aren't Tab stops. |
| Enter, Space | With `interactive`: makes the focused step current (nothing on the current step) |

## Accessibility

- The indicator is a list and each step a list item, as Carbon's `<ul>` / `<li>`.
- The current step has `aria-current="step"`. After each label, screen readers hear the step's state: "Complete", "Current", "Incomplete" or "Invalid" (in Thai with `lang="th"`).
- A disabled step's button is disabled and `aria-disabled`.
- The indicator shows progress; it doesn't name the task. Put a heading above it, and repeat the current step in text (as "Step 2 of 4" above) for people who don't see the icons.

Unstyled React parts with the same behaviour: [Headless Progress indicator](https://parntengza.github.io/kanok-ui-docs/en/headless-progress-indicator/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-progress-indicator>` · React `UiProgressIndicator`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `current-index` | `currentIndex` | `number` | `0` | Index of the current step (0-based). |
| `vertical` | `vertical` | `boolean` | `false` |  |
| `space-equally` | `spaceEqually` | `boolean` | `false` | Stretch the steps to share the width (horizontal only). |
| `interactive` | `interactive` | `boolean` | `false` | Let the user jump between steps (fires `ui-change`). |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Interactive indicators: focus the current step. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-change` | `onUiChange` | detail: { index } when the user picks another step |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-progress-step>` elements |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The list |

### `<ui-progress-step>` · React `UiProgressStep`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `secondary-label` | `secondaryLabel` | `string` | `''` | Smaller text under the label (Carbon `secondaryLabel`). |
| `complete` | `complete` | `boolean` | `false` | Marks the step done regardless of `current-index`. |
| `invalid` | `invalid` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `data-state` | `state` | `ProgressStepState` | `'incomplete'` | Set by the indicator: the resolved state. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `clickable` | `boolean` | Set by the indicator: whether steps are clickable. |
| `index` | `number` | Set by the indicator: this step's position. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-step-click` | none (use a ref) |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | Nothing; use `label` and `secondary-label` |

#### CSS parts

| Part | Description |
|---|---|
| `button` | The clickable step |
| `icon` | The state icon |
| `label` | The label |
| `secondary-label` | The secondary label |
| `line` | The progress line |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-progress-step-flex` |  | / --ui-progress-step-min-width - A horizontal step's `flex` and least width (default `0 1 auto`, 112px: Carbon's 128px steps; Kanok: `1 1 0`, 120px) |
| `--ui-progress-label-max-width` |  | / --ui-progress-label-gap - Its label's `max-width` and end margin (default 88px, 0) |
| `--ui-progress-label-white-space` |  | / --ui-progress-label-overflow / --ui-progress-label-text-overflow - Its label on one line (default normal, visible, clip: it wraps; Kanok: one line, an ellipsis) |

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


