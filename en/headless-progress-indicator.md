# Headless Progress indicator

The `ProgressIndicator` parts give you the behaviour of the styled [Progress indicator](https://parntengza.github.io/kanok-ui-docs/en/progress-indicator/) with no styles: an ordered list of steps whose state (complete, current, incomplete) follows the current index, `aria-current="step"` on the current one, and, when it is interactive, buttons that jump to a step.

You own the markup inside each step (the icon, the label, a second line), the words a screen reader hears for each state, and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { ProgressIndicator } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { ProgressIndicator } from '@purpurabog/ui/headless';

const steps = ['Contract details', 'Signers', 'Review', 'Send'];

function StepIcon() {
  const { state } = ProgressIndicator.useStepContext();
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0 fill-interactive group-data-incomplete:fill-ink">
      {state === 'complete' ? <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-1-2.6-2.7-2.7.7-.7L7 10l4-4 .7.7z" /> : null}
      {state === 'current' ? <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13a6 6 0 0 1 0-12z" /> : null}
      {state === 'incomplete' ? <path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0-1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Z" /> : null}
    </svg>
  );
}

const words = { complete: 'Complete', current: 'Current', incomplete: 'Incomplete' };

function StateWords() {
  const { state } = ProgressIndicator.useStepContext();
  return <span className="sr-only">{words[state]}</span>;
}

export default function Example() {
  return (
    <ProgressIndicator.Root currentIndex={1} className="flex">
      {steps.map((label) => (
        <ProgressIndicator.Step key={label} className="w-32 border-t-2 border-interactive data-incomplete:border-hairline">
          <ProgressIndicator.StepButton className="group flex w-full gap-2 pt-2 pe-4 text-start text-sm text-ink">
            <StepIcon />
            {label}
            <StateWords />
          </ProgressIndicator.StepButton>
        </ProgressIndicator.Step>
      ))}
    </ProgressIndicator.Root>
  );
}
```

Each direct child of `Root` is one step, by its position: the first is index 0. `useStepContext()` gives a component inside a step its `state`, so the icon and the screen-reader words can follow it.

## Anatomy

```tsx
<ProgressIndicator.Root currentIndex={0}>
  <ProgressIndicator.Step>
    <ProgressIndicator.StepButton />
  </ProgressIndicator.Step>
</ProgressIndicator.Root>
```

## Invalid, disabled and complete steps

Three flags on a `Step` add to the state from the index:

- `complete` marks the step done whatever the current index says (`data-complete`).
- `invalid` sets `data-invalid`: show a warning in your style.
- `disabled` disables the step's button (`data-disabled`); it can't be clicked or focused.


React (live React example):

```tsx
import { ProgressIndicator } from '@purpurabog/ui/headless';

const steps = [
  { label: 'Contract details' },
  { label: 'Signers' },
  { label: 'Attachments', complete: true },
  { label: 'Review', invalid: true },
  { label: 'Send', disabled: true },
];

const words = { complete: 'Complete', current: 'Current', incomplete: 'Incomplete' };

function StepWords() {
  const { state, invalid } = ProgressIndicator.useStepContext();
  return <span className="sr-only">{invalid ? 'Invalid' : words[state]}</span>;
}

export default function Example() {
  return (
    <ProgressIndicator.Root currentIndex={1} className="flex flex-wrap">
      {steps.map(({ label, ...flags }) => (
        <ProgressIndicator.Step key={label} {...flags} className="w-32 border-t-2 border-interactive data-incomplete:border-hairline">
          <ProgressIndicator.StepButton className="flex w-full items-center gap-2 pt-2 pe-4 text-start text-sm text-ink data-current:font-semibold data-invalid:text-error-text data-disabled:text-ink-disabled">
            <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
              {flags.complete ? '✓' : null}
            </span>
            {label}
            <StepWords />
          </ProgressIndicator.StepButton>
        </ProgressIndicator.Step>
      ))}
    </ProgressIndicator.Root>
  );
}
```

## Let the user jump between steps

`interactive` puts the buttons in the Tab order. A click on a step that is not current and not disabled makes it current and calls `onChange` with its index (`data-clickable` marks those steps). Hold the index with `currentIndex`, or give `defaultCurrentIndex` and let `Root` keep it.


React (live React example):

```tsx
import { useState } from 'react';
import { ProgressIndicator } from '@purpurabog/ui/headless';

const steps = ['Contract details', 'Signers', 'Review', 'Send'];

export default function Example() {
  const [step, setStep] = useState(2);
  return (
    <div className="grid gap-4">
      <ProgressIndicator.Root interactive currentIndex={step} onChange={setStep} className="flex">
        {steps.map((label) => (
          <ProgressIndicator.Step key={label} className="w-32 border-t-2 border-interactive data-incomplete:border-hairline">
            <ProgressIndicator.StepButton className="flex w-full pt-2 pe-4 text-start text-sm text-ink focus-visible:outline-2 focus-visible:outline-focus data-clickable:cursor-pointer data-clickable:text-link data-clickable:hover:underline data-current:font-semibold">
              {label}
            </ProgressIndicator.StepButton>
          </ProgressIndicator.Step>
        ))}
      </ProgressIndicator.Root>
      <p className="text-xs text-ink-muted">Current step: {step}</p>
    </div>
  );
}
```

## Back and Next buttons

Without `interactive` the steps don't react to clicks and stay out of the Tab order: your own buttons move through the task by changing `currentIndex`.


React (live React example):

```tsx
import { useState } from 'react';
import { ProgressIndicator } from '@purpurabog/ui/headless';

const steps = ['Contract details', 'Signers', 'Review', 'Send'];

export default function Example() {
  const [step, setStep] = useState(0);
  return (
    <div className="grid gap-4">
      <ProgressIndicator.Root currentIndex={step} className="flex">
        {steps.map((label) => (
          <ProgressIndicator.Step key={label} className="w-32 border-t-2 border-interactive data-incomplete:border-hairline">
            <ProgressIndicator.StepButton className="flex w-full pt-2 pe-4 text-start text-sm text-ink-muted data-complete:text-ink data-current:font-semibold data-current:text-ink">
              {label}
            </ProgressIndicator.StepButton>
          </ProgressIndicator.Step>
        ))}
      </ProgressIndicator.Root>
      <p className="text-sm text-ink">Step {step + 1} of {steps.length}: {steps[step]}</p>
      <div className="flex gap-px">
        <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="h-10 bg-secondary px-4 text-sm text-on-primary hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:bg-button-disabled disabled:text-on-color-disabled">Back</button>
        <button type="button" disabled={step === steps.length - 1} onClick={() => setStep(step + 1)} className="h-10 bg-interactive px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:bg-button-disabled disabled:text-on-color-disabled">Next</button>
      </div>
    </div>
  );
}
```

## Vertical

`vertical` sets `data-orientation="vertical"` on the root, every step and every button (`horizontal` otherwise). The layout is yours: here the line runs down the start edge.


React (live React example):

```tsx
import { ProgressIndicator } from '@purpurabog/ui/headless';

const steps = [
  { label: 'Request submitted', note: '1 Oct, 09:12' },
  { label: 'Legal review', note: 'In progress' },
  { label: 'Approval by the managing director' },
  { label: 'Signing' },
];

export default function Example() {
  return (
    <ProgressIndicator.Root vertical currentIndex={1} className="flex data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col">
      {steps.map((s) => (
        <ProgressIndicator.Step key={s.label} className="min-h-14 border-s-2 border-interactive data-incomplete:border-hairline">
          <ProgressIndicator.StepButton className="flex w-full flex-col ps-4 pt-1 text-start text-sm text-ink data-current:font-semibold">
            {s.label}
            {s.note ? <span className="text-xs font-normal text-ink-muted">{s.note}</span> : null}
          </ProgressIndicator.StepButton>
        </ProgressIndicator.Step>
      ))}
    </ProgressIndicator.Root>
  );
}
```

## Style it


React (live React example):

```tsx
import { ProgressIndicator } from '@purpurabog/ui/headless';

const steps = ['Details', 'Signers', 'Review', 'Send'];

export default function Example() {
  return (
    <ProgressIndicator.Root interactive defaultCurrentIndex={1} className="flex">
      {steps.map((label, i) => (
        <ProgressIndicator.Step key={label} invalid={i === 2} className="flex-1 border-t-4 border-interactive data-incomplete:border-hairline data-invalid:border-error">
          <ProgressIndicator.StepButton className="w-full pt-2 pe-4 text-start text-sm text-ink-muted focus-visible:outline-2 focus-visible:outline-focus data-complete:text-ink data-current:font-semibold data-current:text-ink data-invalid:text-error-text data-clickable:cursor-pointer data-clickable:hover:text-link-hover">
            {i + 1}. {label}
          </ProgressIndicator.StepButton>
        </ProgressIndicator.Step>
      ))}
    </ProgressIndicator.Root>
  );
}
```
```css
/* className="step" on Step, "step-button" on StepButton */
.step { border-top: 4px solid #0f62fe; }
.step[data-incomplete] { border-top-color: #e0e0e0; }
.step[data-invalid] { border-top-color: #da1e28; }
.step-button[data-current] { font-weight: 600; }
.step-button[data-clickable] { cursor: pointer; }
.step-button[data-disabled] { color: #c6c6c6; }
```

## Parts

### ProgressIndicator.Root

An `<ol>`. Each direct child is one step, by position, so a component of your own that renders a `Step` works as a child.

| Prop | Type | Default | |
|---|---|---|---|
| `currentIndex` | `number` | | The current step's index, 0-based (controlled) |
| `defaultCurrentIndex` | `number` | `0` | The starting index (uncontrolled) |
| `onChange` | `(index: number) => void` | | After the user jumped to another step |
| `interactive` | `boolean` | `false` | The steps' buttons take Tab and jump on a click |
| `vertical` | `boolean` | `false` | Sets `data-orientation="vertical"` |

| Attribute | When |
|---|---|
| `data-orientation` | `horizontal` or `vertical` |

`ProgressIndicator.useProgressIndicatorContext()` returns `{ currentIndex, vertical, interactive, pick }`. `ProgressIndicator.stepState(index, currentIndex, complete?)` returns the state a step at `index` would have.

### ProgressIndicator.Step

An `<li>`: one step.

| Prop | Type | Default | |
|---|---|---|---|
| `complete` | `boolean` | `false` | Complete whatever the current index says |
| `invalid` | `boolean` | `false` | Sets `data-invalid` |
| `disabled` | `boolean` | `false` | Its button is disabled |

| Attribute | When |
|---|---|
| `data-complete` / `data-current` / `data-incomplete` | One of them: the step's state |
| `data-invalid` | `invalid` is set |
| `data-disabled` | `disabled` is set |
| `data-clickable` | A click on its button jumps here: interactive, not disabled, not current |
| `data-orientation` | `horizontal` or `vertical` |

`ProgressIndicator.useStepContext()` returns `{ index, state, invalid, disabled, vertical, interactive, clickable, pick }` to a component inside the step.

### ProgressIndicator.StepButton

A `<button type="button">`. The current step's has `aria-current="step"`. It is out of the Tab order (`tabindex="-1"`) unless the root is `interactive`, and disabled (with `aria-disabled`) when the step is. It takes every button prop except `type`, and has the same data attributes as its `Step`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Tab / Shift+Tab | With `interactive`: moves between the step buttons (disabled ones are skipped). Without it the buttons aren't Tab stops. |
| Enter, Space | With `interactive`: jumps to the focused step (nothing on the current one) |

The parts set `aria-current="step"`, `disabled` and `aria-disabled`, and the Tab order. The list is an `<ol>` of `<li>` steps.

You add:

- The label text inside each `StepButton`.
- The state in words for screen readers ("Complete", "Invalid" …), as the `sr-only` text in the first example: an icon alone says nothing.
- A heading that names the task, and the current step in text if the steps are small.
