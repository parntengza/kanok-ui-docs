# Headless Tooltip

The `Tooltip` parts give you the behaviour of the styled [Tooltip](https://parntengza.github.io/kanok-ui-docs/en/tooltip/) with no styles: a popup in the top layer beside the element it explains, opened on hover after a short delay and on keyboard focus, closed on blur, on activation and on Esc. The pointer can move onto the popup (WCAG 1.4.13). The text describes the element, or names it with `label`.

You own the trigger element, the text, the caret and every style. The parts show their state as `data-*` attributes for you to style on.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { Tooltip } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { Tooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Tooltip.Root label="Edit contract">
      <Tooltip.Trigger className="inline-block">
        <button type="button" className="grid size-10 place-items-center text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
            <path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z" />
          </svg>
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="w-max max-w-72 rounded-xs bg-inverse-surface-1 px-4 py-0.5 text-sm text-inverse-ink">Edit contract</Tooltip.Popup>
    </Tooltip.Root>
  );
}
```

`Trigger` is a `<span>` around exactly one focusable element: it watches hover, focus and activation inside it, and gives that element its name or description. The popup sits beside the element, not beside the span.

## Anatomy

```tsx
<Tooltip.Root>
  <Tooltip.Trigger>
    <button type="button" />
  </Tooltip.Trigger>
  <Tooltip.Popup />
</Tooltip.Root>
```

## Describe or name

Without `label`, the popup's text is the element's accessible description (`aria-describedby`), added to any description it already has. Use it for a hint on a control that has a visible name. With `label`, the text becomes the element's `aria-label` and the popup is `aria-hidden`: use it for icon-only buttons, as in "Use it".


React (live React example):

```tsx
import { Tooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Tooltip.Root placement="bottom">
      <Tooltip.Trigger className="inline-block">
        <button type="button" className="h-10 border border-interactive px-4 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Retention policy
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="w-max max-w-72 rounded-xs bg-inverse-surface-1 p-4 text-sm text-inverse-ink">Signed copies are kept for 10 years</Tooltip.Popup>
    </Tooltip.Root>
  );
}
```

## Placement and caret

`placement` takes `top` (the default), `bottom`, `left`, `right`, each with `-start` / `-end`. The popup flips when there is no room, and `data-side` says where it went. `gap` is the space to the element (8px by default).

With `caret`, the popup gets `--_caret-start`: where a caret `--_caret-w` wide (12px if unset) must start along the edge to point at the element's centre. Draw the caret yourself, as below.


React (live React example):

```tsx
import { Tooltip } from '@purpurabog/ui/headless';

const caret = [
  'pointer-events-none absolute h-1.5 w-3 bg-inherit',
  'group-data-[side=top]:top-full group-data-[side=top]:left-(--_caret-start) group-data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)]',
  'group-data-[side=bottom]:bottom-full group-data-[side=bottom]:left-(--_caret-start) group-data-[side=bottom]:[clip-path:polygon(50%_0,100%_100%,0_100%)]',
  'group-data-[side=left]:top-(--_caret-start) group-data-[side=left]:left-full group-data-[side=left]:h-3 group-data-[side=left]:w-1.5 group-data-[side=left]:[clip-path:polygon(0_0,100%_50%,0_100%)]',
  'group-data-[side=right]:top-(--_caret-start) group-data-[side=right]:right-full group-data-[side=right]:h-3 group-data-[side=right]:w-1.5 group-data-[side=right]:[clip-path:polygon(100%_0,0_50%,100%_100%)]',
].join(' ');

const sides = [
  { side: 'top', text: 'Opens above' },
  { side: 'bottom', text: 'Opens below' },
  { side: 'left', text: 'Opens on the left' },
  { side: 'right', text: 'Opens on the right' },
] as const;

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {sides.map(({ side, text }) => (
        <Tooltip.Root key={side} placement={side} gap={12} caret>
          <Tooltip.Trigger className="inline-block">
            <button type="button" className="h-8 border border-interactive px-3 text-sm text-interactive hover:bg-interactive hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
              {side}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Popup className="group w-max max-w-72 overflow-visible rounded-xs bg-inverse-surface-1 p-4 text-sm text-inverse-ink">
            {text}
            <span aria-hidden="true" className={caret} />
          </Tooltip.Popup>
        </Tooltip.Root>
      ))}
    </div>
  );
}
```

## Delays

The popup opens 100ms after the pointer arrives (`delay`) and closes 300ms after it leaves both the element and the popup (`closeDelay`, Carbon's `leaveDelayMs`). Keyboard focus opens it at once. Raise `delay` in a dense toolbar, so tooltips don't flash while the pointer crosses it.


React (live React example):

```tsx
import { Tooltip } from '@purpurabog/ui/headless';

function Tip({ text, delay }: { text: string; delay?: number }) {
  return (
    <Tooltip.Root delay={delay} placement="bottom">
      <Tooltip.Trigger className="inline-block">
        <button type="button" className="h-8 px-3 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          {text}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="w-max rounded-xs bg-inverse-surface-1 px-4 py-0.5 text-sm text-inverse-ink">
        Opened after {delay ?? 100}ms
      </Tooltip.Popup>
    </Tooltip.Root>
  );
}

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Tip text="Default delay" />
      <Tip text="Slow (600ms)" delay={600} />
    </div>
  );
}
```

## Keep it open: "Copied"

Hold the state with `open` and `onOpenChange`. While your own flag is set the popup stays, whatever hover, focus, clicks and Esc report. Use it for a short confirmation. Click the number below.


React (live React example):

```tsx
import { useEffect, useState } from 'react';
import { Tooltip } from '@purpurabog/ui/headless';

export default function Example() {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  const copy = async () => {
    await navigator.clipboard?.writeText('CN-2026-0142').catch(() => undefined);
    setCopied(true);
  };
  return (
    <Tooltip.Root open={hover || copied} onOpenChange={setHover}>
      <Tooltip.Trigger className="inline-block">
        <button type="button" onClick={copy} className="h-10 px-4 font-mono text-sm text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          CN-2026-0142
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="w-max rounded-xs bg-inverse-surface-1 px-4 py-0.5 text-sm text-inverse-ink">
        {copied ? 'Copied' : 'Copy contract number'}
      </Tooltip.Popup>
    </Tooltip.Root>
  );
}
```

`onOpenChange` reports changes only, so a click on a closed tooltip reports nothing. `disabled` on `Root` is the opposite case: the popup never shows (for example while the text is still loading), and hover and focus still report.

## Explain an unavailable action

A `disabled` button takes no focus, so keyboard users would never see its tooltip. Use `aria-disabled="true"` instead, ignore its clicks, and say why in the tooltip.


React (live React example):

```tsx
import { Tooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Tooltip.Root placement="right">
      <Tooltip.Trigger className="inline-block">
        <button
          type="button"
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
          className="h-10 cursor-not-allowed bg-button-disabled px-4 text-sm text-on-color-disabled focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus"
        >
          Sign contract
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="w-max max-w-72 rounded-xs bg-inverse-surface-1 p-4 text-sm text-inverse-ink">
        Only approvers can sign. Ask Ananya in Legal.
      </Tooltip.Popup>
    </Tooltip.Root>
  );
}
```

## Style it


React (live React example):

```tsx
import { Tooltip } from '@purpurabog/ui/headless';

export default function Example() {
  return (
    <Tooltip.Root placement="bottom" gap={12} caret>
      <Tooltip.Trigger className="group/trigger inline-block">
        <button type="button" className="h-10 border-b-2 border-transparent px-4 text-sm text-ink group-data-open/trigger:border-interactive focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
          Version 3
        </button>
      </Tooltip.Trigger>
      <Tooltip.Popup className="group w-max max-w-72 overflow-visible rounded-xs bg-inverse-surface-1 p-4 text-sm text-inverse-ink">
        Last changed 12 March 2026 by Somchai
        <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-(--_caret-start) h-1.5 w-3 bg-inherit [clip-path:polygon(50%_0,100%_100%,0_100%)] group-data-[side=top]:top-full group-data-[side=top]:bottom-auto group-data-[side=top]:[clip-path:polygon(0_0,100%_0,50%_100%)]" />
      </Tooltip.Popup>
    </Tooltip.Root>
  );
}
```
```css
/* className="tip" on Trigger, "bubble" on Popup, "caret" on a span inside it */
.tip[data-open] button { border-bottom-color: #0f62fe; }
.bubble { width: max-content; max-width: 288px; padding: 16px; background: #393939; color: #f4f4f4; }
.caret { position: absolute; left: var(--_caret-start); width: 12px; height: 6px; background: inherit; }
.bubble[data-side='bottom'] .caret { bottom: 100%; clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.bubble[data-side='top'] .caret { top: 100%; clip-path: polygon(0 0, 100% 0, 50% 100%); }
```

## Parts

### Tooltip.Root

Renders no element of its own: it holds the open state and the hover timer, places the popup and closes it on Esc.

| Prop | Type | Default | |
|---|---|---|---|
| `open` | `boolean` | | Shown (controlled); hover and focus then only report through `onOpenChange` |
| `defaultOpen` | `boolean` | `false` | Shown at first (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | | After hover, focus, activation or Esc would change it (changes only) |
| `label` | `string` | | The text as the element's accessible name instead of its description; the popup is then `aria-hidden` |
| `disabled` | `boolean` | `false` | Never shows; hover and focus still report |
| `placement` | `Placement` | `'top'` | `top`, `bottom`, `left`, `right`, each with `-start` / `-end` |
| `gap` | `number` | `8` | Space between the element and the popup, in px |
| `caret` | `boolean` | `false` | Writes `--_caret-start` on the popup |
| `delay` | `number` | `100` | Hover time before it opens, in ms |
| `closeDelay` | `number` | `300` | Time after the pointer leaves before it closes, in ms |

`Tooltip.useTooltipContext()` returns the `Root`'s state (`open`, `popupId`, `label` …) to any component inside it.

### Tooltip.Trigger

A `<span>` around the one element the tooltip explains (its first child). It watches hover, keyboard focus (`:focus-visible` only: a mouse click already had its hover), clicks and Enter / Space inside it. It adds `aria-describedby` (or with `label`, `aria-label`) to that element, and the popup is placed beside it. It takes every span prop.

| Attribute | When |
|---|---|
| `data-open` | The popup is showing |

### Tooltip.Popup

A `<span role="tooltip" popover="manual">` in the top layer, with the id the element's `aria-describedby` points to. Its content stays rendered while closed. The pointer can rest on it. It takes every span prop except `popover`, `id` and `role`.

| Attribute | When |
|---|---|
| `data-open` | Showing |
| `data-side` | `top`, `bottom`, `left` or `right`: where it went |

With `caret` on `Root`, it also gets the CSS variable `--_caret-start`.

## Keyboard and accessibility

| Key | What it does |
|---|---|
| Tab | Focus reaching the element opens the popup at once; focus leaving closes it |
| Esc | Closes the tooltip only (a surrounding dialog stays open); focus stays |
| Enter, Space | Activate the element and close the popup |

The parts set `role="tooltip"` on the popup and `aria-describedby` or `aria-label` on the element. A click closes the popup too, so it doesn't cover the result.

You add:

- A focusable element inside `Trigger`. A `<span>` or an icon on its own never gets keyboard focus.
- Nothing to click inside the popup: use [Headless Popover](https://parntengza.github.io/kanok-ui-docs/en/headless-popover/) for that.
