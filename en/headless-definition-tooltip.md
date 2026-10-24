# Headless Definition tooltip

The `DefinitionTooltip` parts give you the behaviour of the styled [Definition tooltip](https://parntengza.github.io/kanok-ui-docs/en/definition-tooltip/) with no styles: a term that is a real button, and a popup in the top layer beside it. A click, Enter or Space toggle it; focus opens it; blur, the pointer leaving and Esc close it. The definition is also the term's description, so screen readers get it without opening.

You own the underline, the popup's look, the caret and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { DefinitionTooltip } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { DefinitionTooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="max-w-xl text-sm text-ink">
      Choose{' '}
      <DefinitionTooltip.Root>
        <DefinitionTooltip.Trigger className="cursor-pointer border-b border-dotted border-hairline-strong hover:border-interactive focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          parallel signing
        </DefinitionTooltip.Trigger>
        <DefinitionTooltip.Popup className="max-w-44 rounded-xs bg-inverse-surface-1 px-4 py-2 text-sm text-inverse-ink">
          A signing round in which every signer receives the document at the same time.
        </DefinitionTooltip.Popup>
      </DefinitionTooltip.Root>{' '}
      when the order of signers does not matter.
    </div>
  );
}
```

## Anatomy

```tsx
<DefinitionTooltip.Root>
  <DefinitionTooltip.Trigger />
  <DefinitionTooltip.Popup />
</DefinitionTooltip.Root>
```

## Open on hover

By default the pointer only opens the definition with a press. `openOnHover` opens it when the pointer rests on the term too. However it opened, it closes `closeDelay` (100ms) after the pointer leaves the term and the popup, so the pointer can move onto the popup.


React (live React example):

```tsx
import { DefinitionTooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="max-w-xl text-sm text-ink">
      Every contract above 5 million baht needs a{' '}
      <DefinitionTooltip.Root openOnHover>
        <DefinitionTooltip.Trigger className="cursor-pointer border-b border-dotted border-hairline-strong hover:border-interactive focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          dual approval
        </DefinitionTooltip.Trigger>
        <DefinitionTooltip.Popup className="max-w-44 rounded-xs bg-inverse-surface-1 px-4 py-2 text-sm text-inverse-ink">
          A second approver from Finance, on top of the department head.
        </DefinitionTooltip.Popup>
      </DefinitionTooltip.Root>{' '}
      before it is sent.
    </div>
  );
}
```

## Placement and caret

`placement` takes `bottom` (the default), `top`, `left`, `right`, each with `-start` / `-end`. The popup flips when there is no room; `data-side` says where it went. `gap` is the space to the term (8px by default). With `caret`, the popup gets `--_caret-start`, where a caret `--_caret-w` wide (12px if unset) starts so it points at the term's centre. The styled one uses `gap={6}`, the caret's height.


React (live React example):

```tsx
import { DefinitionTooltip } from '@purpurabog/ui/headless';

const caret = [
  'pointer-events-none absolute left-(--_caret-start) h-1.5 w-3 bg-inherit',
  'group-data-[side=bottom]:bottom-full group-data-[side=bottom]:[clip-path:polygon(50%_0,100%_100%,0_100%)]',
  'group-data-[side=top]:top-full group-data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)]',
].join(' ');

const terms = [
  { term: 'custodian', definition: 'The person who keeps the signed copy.', placement: 'top' },
  { term: 'reviewer', definition: 'The person who checks the terms before signing.', placement: 'bottom-start' },
] as const;

export default function Example() {
  return (
    <div className="max-w-xl text-sm text-ink">
      {terms.map(({ term, definition, placement }) => (
        <span key={term}>
          A{' '}
          <DefinitionTooltip.Root placement={placement} gap={6} caret>
            <DefinitionTooltip.Trigger className="cursor-pointer border-b border-dotted border-hairline-strong hover:border-interactive focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
              {term}
            </DefinitionTooltip.Trigger>
            <DefinitionTooltip.Popup className="group max-w-44 overflow-visible rounded-xs bg-inverse-surface-1 px-4 py-2 text-sm text-inverse-ink">
              {definition}
              <span aria-hidden="true" className={caret} />
            </DefinitionTooltip.Popup>
          </DefinitionTooltip.Root>{' '}
          is named on every contract.{' '}
        </span>
      ))}
    </div>
  );
}
```

## Open state

Hold the state with `open` and `onOpenChange`, or give `defaultOpen`. `onOpenChange` reports changes only. Use it, for example, to count which terms people look up.


React (live React example):

```tsx
import { useState } from 'react';
import { DefinitionTooltip } from '@purpurabog/ui/headless';

export default function Example() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="grid gap-2 text-sm text-ink">
      <div className="max-w-xl">
        An{' '}
        <DefinitionTooltip.Root
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (next) setCount((n) => n + 1);
          }}
        >
          <DefinitionTooltip.Trigger className="cursor-pointer border-b border-dotted border-hairline-strong hover:border-interactive focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
            escrow account
          </DefinitionTooltip.Trigger>
          <DefinitionTooltip.Popup className="max-w-44 rounded-xs bg-inverse-surface-1 px-4 py-2 text-sm text-inverse-ink">
            Money held by a third party until both sides meet the terms.
          </DefinitionTooltip.Popup>
        </DefinitionTooltip.Root>{' '}
        protects the deposit.
      </div>
      <p className="text-xs text-ink-muted">Open: {String(open)}. Opened {count} times.</p>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import { DefinitionTooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <div className="max-w-xl text-sm text-ink">
      The{' '}
      <DefinitionTooltip.Root gap={6} caret>
        <DefinitionTooltip.Trigger className="cursor-pointer border-b border-dotted border-hairline-strong text-ink hover:border-interactive focus-visible:border-interactive focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus data-open:border-solid data-open:border-interactive">
          POA
        </DefinitionTooltip.Trigger>
        <DefinitionTooltip.Popup className="group max-w-44 overflow-visible rounded-xs bg-inverse-surface-1 px-4 py-2 text-sm text-inverse-ink">
          <strong>Power of attorney</strong>: who may sign on behalf of the company.
          <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-(--_caret-start) h-1.5 w-3 bg-inherit [clip-path:polygon(50%_0,100%_100%,0_100%)] group-data-[side=top]:top-full group-data-[side=top]:bottom-auto group-data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)]" />
        </DefinitionTooltip.Popup>
      </DefinitionTooltip.Root>{' '}
      list comes from HR.
    </div>
  );
}
```
```css
/* className="term" on Trigger, "definition" on Popup */
.term { border-bottom: 1px dotted #8d8d8d; cursor: pointer; }
.term:hover, .term[data-open] { border-bottom-color: #0f62fe; }
.definition { max-width: 176px; padding: 8px 16px; background: #393939; color: #f4f4f4; }
```

## Parts

### DefinitionTooltip.Root

Renders no element of its own: it holds the open state, places the popup and closes it on Esc.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Shown (controlled) |
| `defaultOpen` | `boolean` | `false` | Shown at first (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | | After it opens or closes (changes only) |
| `openOnHover` | `boolean` | `false` | The pointer resting on the term opens it too |
| `placement` | `Placement` | `'bottom'` | `top`, `bottom`, `left`, `right`, each with `-start` / `-end` |
| `gap` | `number` | `8` | Space between the term and the popup, in px |
| `caret` | `boolean` | `false` | Writes `--_caret-start` on the popup |
| `closeDelay` | `number` | `100` | Time after the pointer leaves before it closes, in ms |

`DefinitionTooltip.useDefinitionTooltipContext()` returns the `Root`'s state (`open`, `popupId` …) to any component inside it.

### DefinitionTooltip.Trigger

A `<button type="button">` with `tabIndex={0}` (yours wins), `aria-controls`, `aria-expanded`, and `aria-describedby` pointing at the popup next to any you pass. A press with the main button, Enter or Space toggle the popup; focus opens it, blur closes it. It takes every button prop except `type`.

| Attribute | When |
|---|---|
| `data-open` | The popup is showing |

### DefinitionTooltip.Popup

A `<span role="tooltip" popover="manual">` in the top layer (a `<span>`, as Carbon's, so the term can sit in a `<p>`). Its content stays rendered while closed, so the term's description is always there. It takes every span prop except `popover`, `id` and `role`.

| Attribute | When |
|---|---|
| `data-open` | Showing |
| `data-side` | `top`, `bottom`, `left` or `right`: where it went |

With `caret` on `Root`, it also gets the CSS variable `--_caret-start`.

## Keyboard and accessibility

| Key | What it does |
|---|---|
| Tab | Focus reaching the term opens the definition; focus leaving closes it |
| Enter, Space | Open or close the definition |
| Esc | Closes the definition only (a surrounding dialog stays open) |

The parts set `aria-expanded`, `aria-controls` and `aria-describedby` on the term and `role="tooltip"` on the popup.

You add:

- A look that tells the term apart from a link, such as a dotted underline.
- Nothing to click inside the popup: focus leaving the term closes it. Use [Headless Popover](https://parntengza.github.io/kanok-ui-docs/en/headless-popover/) for that.
