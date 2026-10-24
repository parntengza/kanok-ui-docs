# Side panel

A side panel slides in from the edge of the screen, under the 48px UI shell header, to show details or a short form while the page stays in view. It is Carbon for IBM Products' `SidePanel`. For a task that needs the whole screen, use a [Tearsheet](https://parntengza.github.io/kanok-ui-docs/en/tearsheet/); for a short decision, a [Modal](https://parntengza.github.io/kanok-ui-docs/en/modal/).

The panel is `position: fixed`. The live examples below sit in a box that holds it, with `--ui-side-panel-top: 0px` because the box has no header above it.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 420px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px"><ui-button id="side-panel-open">Edit incident</ui-button></div>
  <ui-side-panel id="side-panel-edit" heading="Incident INC-2041" size="sm" selector-initial-focus="#side-panel-edit-title">
    <span slot="subtitle">Reported by the finance team on 8 October 2026.</span>
    <div style="display: grid; gap: 16px; padding-block: 16px">
      <ui-text-input id="side-panel-edit-title" label="Title" value="Invoice export fails"></ui-text-input>
      <ui-select label="Priority" value="high">
        <option value="low">Low</option>
        <option value="high">High</option>
      </ui-select>
      <ui-text-area label="Notes"></ui-text-area>
    </div>
    <ui-button slot="actions" kind="secondary">Cancel</ui-button>
    <ui-button slot="actions">Save</ui-button>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-edit');
  document.getElementById('side-panel-open').addEventListener('click', () => (panel.open = true));
  for (const button of panel.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (panel.open = false));
</script>
```

React:

```tsx
const [open, setOpen] = useState(false);

<UiButton onClick={() => setOpen(true)}>Edit incident</UiButton>
<UiSidePanel open={open} heading="Incident INC-2041" size="sm" selectorInitialFocus="#incident-title" onUiClose={() => setOpen(false)}>
  <span slot="subtitle">Reported by the finance team on 8 October 2026.</span>
  <UiTextInput id="incident-title" label="Title" value="Invoice export fails" />
  <UiSelect label="Priority" value="high">…</UiSelect>
  <UiTextArea label="Notes" />
  <UiButton slot="actions" kind="secondary" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="actions" onClick={() => setOpen(false)}>Save</UiButton>
</UiSidePanel>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Edit incident</Button>
<SidePanel
  open={open}
  onRequestClose={() => setOpen(false)}
  heading="Incident INC-2041"
  subtitle="Reported by the finance team on 8 October 2026."
  size="sm"
  selectorInitialFocus="#incident-title"
  actions={[
    { label: 'Cancel', kind: 'secondary', onClick: () => setOpen(false) },
    { label: 'Save', onClick: () => setOpen(false) },
  ]}
>
  <TextInput id="incident-title" label="Title" defaultValue="Invoice export fails" />
  <Select label="Priority" defaultValue="high">…</Select>
  <TextArea label="Notes" />
</SidePanel>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/side-panel
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-side-panel
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/side-panel.json
#    to its target:
#    components/ui/primitives/side-panel/side-panel.styles.ts
#    components/ui/primitives/side-panel/side-panel.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-action-set, core-modal, core-motion, core-overlay, core-position, icon-button, layer, shared-action-set, shared-element, shared-events, shared-field, shared-localize, shared-quiet-focus, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-side-panel.json
#    to its target:
#    components/ui/react-tw/side-panel.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-action-set, core-motion, core-position, tw-action-set, tw-i18n, tw-icon-button, tw-layer, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/side-panel';</script>

<ui-button onclick="document.getElementById('incident').open = true">Edit incident</ui-button>
<ui-side-panel id="incident" heading="Incident INC-2041">
  <p>Invoice export fails.</p>
</ui-side-panel>
```

React:

```tsx
import { UiSidePanel } from '@purpurabog/ui/react';

<UiSidePanel open={open} heading="Incident INC-2041" onUiClose={() => setOpen(false)}>
  <p>Invoice export fails.</p>
</UiSidePanel>
```

React + Tailwind:

```tsx
import { SidePanel } from '@/components/ui/react-tw/side-panel';

<SidePanel open={open} onRequestClose={() => setOpen(false)} heading="Incident INC-2041">
  <p>Invoice export fails.</p>
</SidePanel>
```

Set `open` to show it and back to false to hide it; it slides 320px in from its edge while fading in, and out the same way (150ms each, as Carbon), with no movement when the reader asks for reduced motion. `heading` is also the panel's accessible name. On open, focus goes to `selector-initial-focus` (a selector inside the panel), else to the first control. On close it goes back to what had it.

×, Esc and a click on the overlay ask to close first (see [Ask before closing](#ask-before-closing)); `ui-close` fires after the panel has slid out. React + Tailwind is controlled: `onRequestClose(reason)` reports them, and you set `open` to false.

## Sizes

`size`: `xs` 16rem, `sm` 20rem, `md` 30rem (the default), `lg` 40rem, `xl` 65rem, `2xl` 80rem. From medium screens up a panel is never wider than 75% of the screen, and never wider than its container.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 360px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 16px">
    <ui-button kind="tertiary" data-side-panel-size="xs">xs</ui-button>
    <ui-button kind="tertiary" data-side-panel-size="sm">sm</ui-button>
    <ui-button kind="tertiary" data-side-panel-size="md">md</ui-button>
    <ui-button kind="tertiary" data-side-panel-size="lg">lg</ui-button>
  </div>
  <ui-side-panel id="side-panel-size" heading="Vendor details">
    <p>Siam Logistics Co., Ltd. Tax ID 0105556000000.</p>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-size');
  for (const button of document.querySelectorAll('[data-side-panel-size]')) {
    button.addEventListener('click', () => {
      panel.size = button.dataset.sidePanelSize;
      panel.heading = `Vendor details (${panel.size})`;
      panel.open = true;
    });
  }
</script>
```

React:

```tsx
<UiSidePanel open={open} size="xs" heading="Vendor details" onUiClose={() => setOpen(false)}>…</UiSidePanel>
<UiSidePanel open={open} size="lg" heading="Vendor details" onUiClose={() => setOpen(false)}>…</UiSidePanel>
```

React + Tailwind:

```tsx
<SidePanel open={open} onRequestClose={() => setOpen(false)} size="xs" heading="Vendor details">…</SidePanel>
<SidePanel open={open} onRequestClose={() => setOpen(false)} size="lg" heading="Vendor details">…</SidePanel>
```

## From the left

`placement="left"` slides the panel in from the start edge instead of the end.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="display: flex; justify-content: flex-end; padding: 16px"><ui-button id="side-panel-left-open" kind="tertiary">Filters</ui-button></div>
  <ui-side-panel id="side-panel-left" heading="Filters" placement="left" size="sm">
    <div style="display: grid; gap: 16px; padding-block: 16px">
      <ui-checkbox>Open</ui-checkbox>
      <ui-checkbox>Waiting for approval</ui-checkbox>
      <ui-checkbox>Closed</ui-checkbox>
    </div>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-left');
  document.getElementById('side-panel-left-open').addEventListener('click', () => (panel.open = true));
</script>
```

React:

```tsx
<UiSidePanel open={open} heading="Filters" placement="left" size="sm" onUiClose={() => setOpen(false)}>
  <UiCheckbox>Open</UiCheckbox>
  <UiCheckbox>Waiting for approval</UiCheckbox>
  <UiCheckbox>Closed</UiCheckbox>
</UiSidePanel>
```

React + Tailwind:

```tsx
<SidePanel open={open} onRequestClose={() => setOpen(false)} heading="Filters" placement="left" size="sm">
  <Checkbox label="Open" />
  <Checkbox label="Waiting for approval" />
  <Checkbox label="Closed" />
</SidePanel>
```

## Dim the page

`include-overlay` dims the page behind the panel and stops it scrolling. A click on the overlay asks to close (`overlay`), unless `prevent-close-on-click-outside` is set.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px"><ui-button id="side-panel-overlay-open">Assign reviewer</ui-button></div>
  <ui-side-panel id="side-panel-overlay" heading="Assign reviewer" include-overlay size="sm">
    <div style="padding-block: 16px">
      <ui-radio-group label="Reviewer" name="reviewer" value="ananya">
        <ui-radio value="ananya">Ananya P.</ui-radio>
        <ui-radio value="boonmee">Boonmee S.</ui-radio>
      </ui-radio-group>
    </div>
    <ui-button slot="actions" kind="secondary">Cancel</ui-button>
    <ui-button slot="actions">Assign</ui-button>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-overlay');
  document.getElementById('side-panel-overlay-open').addEventListener('click', () => (panel.open = true));
  for (const button of panel.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (panel.open = false));
</script>
```

React:

```tsx
<UiSidePanel open={open} heading="Assign reviewer" includeOverlay size="sm" onUiClose={() => setOpen(false)}>
  <UiRadioGroup label="Reviewer" name="reviewer" value="ananya">…</UiRadioGroup>
  <UiButton slot="actions" kind="secondary" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="actions" onClick={() => setOpen(false)}>Assign</UiButton>
</UiSidePanel>
```

React + Tailwind:

```tsx
<SidePanel
  open={open}
  onRequestClose={() => setOpen(false)}
  heading="Assign reviewer"
  includeOverlay
  size="sm"
  actions={[
    { label: 'Cancel', kind: 'secondary', onClick: () => setOpen(false) },
    { label: 'Assign', onClick: () => setOpen(false) },
  ]}
>
  <RadioGroup label="Reviewer" name="reviewer" defaultValue="ananya">…</RadioGroup>
</SidePanel>
```

## Push the page aside

`slide-in` makes room for the panel instead of covering the page: the element that `selector-page-content` points to gets a margin as wide as the panel. A slide-in panel doesn't take focus, keep Tab inside or close on Esc, so the page stays usable beside it.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 300px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div id="side-panel-page" style="display: grid; gap: 16px; padding: 16px">
    <p style="margin: 0">Contract list: 24 contracts waiting for a signature.</p>
    <div><ui-button id="side-panel-push-open" kind="tertiary">Show summary</ui-button></div>
  </div>
  <ui-side-panel id="side-panel-push" heading="Summary" slide-in selector-page-content="#side-panel-page" size="xs">
    <p>8 sale, 12 lease, 4 service contracts.</p>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-push');
  document.getElementById('side-panel-push-open').addEventListener('click', () => (panel.open = !panel.open));
</script>
```

React:

```tsx
<main id="contracts">…</main>
<UiSidePanel open={open} heading="Summary" slideIn selectorPageContent="#contracts" size="xs" onUiClose={() => setOpen(false)}>
  <p>8 sale, 12 lease, 4 service contracts.</p>
</UiSidePanel>
```

React + Tailwind:

```tsx
<main id="contracts">…</main>
<SidePanel open={open} onRequestClose={() => setOpen(false)} heading="Summary" slideIn selectorPageContent="#contracts" size="xs">
  <p>8 sale, 12 lease, 4 service contracts.</p>
</SidePanel>
```

## Action buttons

Up to four `<ui-button slot="actions">` sit at the foot of the panel, laid out as Carbon's ActionSet for the panel's size: side by side, or one per row in an `xs` or `sm` panel and in an `md` panel with more than two. They are 64px tall; `condensed-actions` makes them 48px. React + Tailwind takes them as data in `actions`.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 380px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 16px">
    <ui-button id="side-panel-actions-open" kind="tertiary">Three actions</ui-button>
    <ui-button id="side-panel-actions-condensed" kind="tertiary">Condensed</ui-button>
  </div>
  <ui-side-panel id="side-panel-actions" heading="Approve request" size="lg">
    <p>Purchase request PR-2026-0318, 128,500 baht, from the IT department.</p>
    <ui-button slot="actions" kind="ghost">Cancel</ui-button>
    <ui-button slot="actions" kind="secondary">Return</ui-button>
    <ui-button slot="actions">Approve</ui-button>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-actions');
  const show = (condensed) => {
    panel.condensedActions = condensed;
    panel.open = true;
  };
  document.getElementById('side-panel-actions-open').addEventListener('click', () => show(false));
  document.getElementById('side-panel-actions-condensed').addEventListener('click', () => show(true));
  for (const button of panel.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (panel.open = false));
</script>
```

React:

```tsx
<UiSidePanel open={open} heading="Approve request" size="lg" condensedActions onUiClose={() => setOpen(false)}>
  <p>Purchase request PR-2026-0318, 128,500 baht, from the IT department.</p>
  <UiButton slot="actions" kind="ghost" onClick={close}>Cancel</UiButton>
  <UiButton slot="actions" kind="secondary" onClick={sendBack}>Return</UiButton>
  <UiButton slot="actions" onClick={approve}>Approve</UiButton>
</UiSidePanel>
```

React + Tailwind:

```tsx
<SidePanel
  open={open}
  onRequestClose={() => setOpen(false)}
  heading="Approve request"
  size="lg"
  condensedActions
  actions={[
    { label: 'Cancel', kind: 'ghost', onClick: close },
    { label: 'Return', kind: 'secondary', onClick: sendBack },
    { label: 'Approve', onClick: approve },
  ]}
>
  <p>Purchase request PR-2026-0318, 128,500 baht, from the IT department.</p>
</SidePanel>
```

## Toolbar under the header

`slot="action-toolbar"` puts small buttons under the header: the first one with its label, the rest as icon buttons. React + Tailwind takes them in `actionToolbar`.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 340px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px"><ui-button id="side-panel-toolbar-open" kind="tertiary">Open contract</ui-button></div>
  <ui-side-panel id="side-panel-toolbar" heading="CT-2026-0142" size="md">
    <span slot="subtitle">Office lease, 3rd floor</span>
    <ui-button slot="action-toolbar" kind="ghost" size="sm">Copy link</ui-button>
    <ui-icon-button slot="action-toolbar" kind="ghost" size="sm" label="Edit contract">
      <svg viewBox="0 0 16 16"><path d="m13.7 4.3-2-2a1 1 0 0 0-1.4 0L2 10.6V14h3.4l8.3-8.3a1 1 0 0 0 0-1.4ZM5 13H3v-2l6-6 2 2Zm7-7-2-2 1-1 2 2Z"/></svg>
    </ui-icon-button>
    <p>24 months from 1 November 2026, 45,000 baht a month.</p>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-toolbar');
  document.getElementById('side-panel-toolbar-open').addEventListener('click', () => (panel.open = true));
</script>
```

React:

```tsx
import { Edit as EditIcon } from '@carbon/icons-react';

<UiSidePanel open={open} heading="CT-2026-0142" onUiClose={() => setOpen(false)}>
  <span slot="subtitle">Office lease, 3rd floor</span>
  <UiButton slot="action-toolbar" kind="ghost" size="sm">Copy link</UiButton>
  <UiIconButton slot="action-toolbar" kind="ghost" size="sm" label="Edit contract"><EditIcon /></UiIconButton>
  <p>24 months from 1 November 2026, 45,000 baht a month.</p>
</UiSidePanel>
```

React + Tailwind:

```tsx
import { Edit as EditIcon } from '@carbon/icons-react';

<SidePanel
  open={open}
  onRequestClose={() => setOpen(false)}
  heading="CT-2026-0142"
  subtitle="Office lease, 3rd floor"
  actionToolbar={<>
    <Button kind="ghost" size="sm">Copy link</Button>
    <IconButton kind="ghost" size="sm" label="Edit contract"><EditIcon /></IconButton>
  </>}
>
  <p>24 months from 1 November 2026, 45,000 baht a month.</p>
</SidePanel>
```

## Heading that shrinks on scroll

With a `label-text`, a subtitle or a toolbar, and enough content to scroll, the label and subtitle fade as the content scrolls and the heading shrinks into a compact bar (Carbon's default). `animate-title="false"` keeps the header still; reduced motion turns it off too. Scroll the panel below.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 420px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px"><ui-button id="side-panel-title-open" kind="tertiary">Open audit</ui-button></div>
  <ui-side-panel id="side-panel-title" heading="Annual audit 2026" label-text="Internal audit" size="md">
    <span slot="subtitle">Answer every question before you submit.</span>
    <div style="display: grid; gap: 16px; padding-block: 16px">
      <ui-text-input label="Auditor"></ui-text-input>
      <ui-text-input label="Department"></ui-text-input>
      <ui-text-area label="Findings"></ui-text-area>
      <ui-text-area label="Risks"></ui-text-area>
      <ui-text-area label="Recommendations"></ui-text-area>
    </div>
    <ui-button slot="actions" kind="secondary">Save draft</ui-button>
    <ui-button slot="actions">Submit</ui-button>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-title');
  document.getElementById('side-panel-title-open').addEventListener('click', () => (panel.open = true));
  for (const button of panel.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (panel.open = false));
</script>
```

React:

```tsx
<UiSidePanel open={open} heading="Annual audit 2026" labelText="Internal audit" onUiClose={() => setOpen(false)}>
  <span slot="subtitle">Answer every question before you submit.</span>
  …
</UiSidePanel>
```

React + Tailwind:

```tsx
<SidePanel open={open} onRequestClose={() => setOpen(false)} heading="Annual audit 2026" labelText="Internal audit" subtitle="Answer every question before you submit." actions={…}>
  …
</SidePanel>
```

## Steps

A panel can hold a short flow. `current-step` above 0 shows a back button at the top; pressing it fires `ui-navigate-back` (React + Tailwind: `onNavigationBack`), and you change the step and the content. The content scrolls back to the top when the step changes.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 360px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px"><ui-button id="side-panel-steps-open">New request</ui-button></div>
  <ui-side-panel id="side-panel-steps" heading="Choose a template" size="sm">
    <div id="side-panel-step-0" style="padding-block: 16px">
      <ui-radio-group label="Template" name="template" value="purchase">
        <ui-radio value="purchase">Purchase request</ui-radio>
        <ui-radio value="travel">Travel request</ui-radio>
      </ui-radio-group>
    </div>
    <div id="side-panel-step-1" hidden style="padding-block: 16px">
      <ui-text-input label="Amount" suffix-text="THB"></ui-text-input>
    </div>
    <ui-button slot="actions" id="side-panel-steps-next">Next</ui-button>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-steps');
  const next = document.getElementById('side-panel-steps-next');
  const step = (n) => {
    panel.currentStep = n;
    panel.heading = n ? 'Request details' : 'Choose a template';
    document.getElementById('side-panel-step-0').hidden = n !== 0;
    document.getElementById('side-panel-step-1').hidden = n !== 1;
    next.textContent = n ? 'Send' : 'Next';
  };
  document.getElementById('side-panel-steps-open').addEventListener('click', () => {
    step(0);
    panel.open = true;
  });
  next.addEventListener('click', () => {
    if (panel.currentStep === 0) step(1);
    else panel.open = false;
  });
  panel.addEventListener('ui-navigate-back', () => step(panel.currentStep - 1));
</script>
```

React:

```tsx
const [step, setStep] = useState(0);

<UiSidePanel open={open} heading={step ? 'Request details' : 'Choose a template'} currentStep={step} onUiNavigateBack={() => setStep(step - 1)} onUiClose={() => setOpen(false)}>
  {step === 0 ? <TemplateStep /> : <DetailsStep />}
  <UiButton slot="actions" onClick={() => (step === 0 ? setStep(1) : send())}>{step ? 'Send' : 'Next'}</UiButton>
</UiSidePanel>
```

React + Tailwind:

```tsx
const [step, setStep] = useState(0);

<SidePanel
  open={open}
  onRequestClose={() => setOpen(false)}
  heading={step ? 'Request details' : 'Choose a template'}
  currentStep={step}
  onNavigationBack={() => setStep(step - 1)}
  actions={[{ label: step ? 'Send' : 'Next', onClick: () => (step === 0 ? setStep(1) : send()) }]}
>
  {step === 0 ? <TemplateStep /> : <DetailsStep />}
</SidePanel>
```

The back button is named "Back" in the page language; `navigation-back-icon-description` changes it.

## Content above and below the title

`slot="above-title"` goes above the label and heading, `slot="below-title"` under the subtitle: a status tag, a search field. React + Tailwind has neither: put the content at the start of the panel's children.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 320px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px"><ui-button id="side-panel-slots-open" kind="tertiary">Open request</ui-button></div>
  <ui-side-panel id="side-panel-slots" heading="PR-2026-0318" size="sm">
    <span slot="subtitle">Laptops for the IT department</span>
    <div slot="below-title" style="padding-block-end: 16px"><ui-tag type="green">Approved</ui-tag></div>
    <p>128,500 baht, approved by Chaiya R. on 9 October 2026.</p>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-slots');
  document.getElementById('side-panel-slots-open').addEventListener('click', () => (panel.open = true));
</script>
```

React:

```tsx
<UiSidePanel open={open} heading="PR-2026-0318" size="sm" onUiClose={() => setOpen(false)}>
  <span slot="subtitle">Laptops for the IT department</span>
  <div slot="below-title"><UiTag type="green">Approved</UiTag></div>
  <p>128,500 baht, approved by Chaiya R. on 9 October 2026.</p>
</UiSidePanel>
```

React + Tailwind:

```tsx
<SidePanel open={open} onRequestClose={() => setOpen(false)} heading="PR-2026-0318" subtitle="Laptops for the IT department" size="sm">
  <Tag type="green">Approved</Tag>
  <p>128,500 baht, approved by Chaiya R. on 9 October 2026.</p>
</SidePanel>
```

## Ask before closing

×, Esc and a click on the overlay fire `ui-request-close`, cancelable, with the `reason`: `close-button`, `escape` or `overlay`. Call `preventDefault()` to keep the panel open. `requestClose(reason)` asks the same way from your own button; setting `open` to false closes without asking. The panel below only closes with its Done button.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 300px; overflow: hidden; border: 1px solid var(--ui-hairline); --ui-side-panel-top: 0px">
  <div style="padding: 16px">
    <ui-button id="side-panel-guard-open" kind="tertiary">Open checklist</ui-button>
    <p>Asked to close by: <output id="side-panel-guard-out"></output></p>
  </div>
  <ui-side-panel id="side-panel-guard" heading="Signing checklist" size="sm" include-overlay>
    <p>Tick every item, then press Done.</p>
    <ui-button slot="actions" id="side-panel-guard-done">Done</ui-button>
  </ui-side-panel>
</div>

<script type="module">
  const panel = document.getElementById('side-panel-guard');
  document.getElementById('side-panel-guard-open').addEventListener('click', () => (panel.open = true));
  document.getElementById('side-panel-guard-done').addEventListener('click', () => (panel.open = false));
  panel.addEventListener('ui-request-close', (event) => {
    event.preventDefault();
    document.getElementById('side-panel-guard-out').value = event.detail.reason;
  });
</script>
```

React:

```tsx
<UiSidePanel open={open} heading="Signing checklist" includeOverlay onUiRequestClose={(e) => { e.preventDefault(); setReason(e.detail.reason); }} onUiClose={() => setOpen(false)}>
  <p>Tick every item, then press Done.</p>
  <UiButton slot="actions" onClick={() => setOpen(false)}>Done</UiButton>
</UiSidePanel>
```

React + Tailwind:

```tsx
// onRequestClose only reports: the panel stays open until you set open to false
<SidePanel open={open} onRequestClose={setReason} heading="Signing checklist" includeOverlay actions={[{ label: 'Done', onClick: () => setOpen(false) }]}>
  <p>Tick every item, then press Done.</p>
</SidePanel>
```

`ui-request-close` and `ui-close` bubble, so a notification inside fires them on the panel too: check that `event.target` is the panel. React's `UiSidePanel` does that for you: `onUiRequestClose` and `onUiClose` get only the panel's own events.

`hide-close-button` removes ×; then give the panel another way to close.

## Keyboard

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves through the panel's controls and wraps around inside it (not with `slide-in`) |
| Esc | Asks to close (`escape`; not with `slide-in`); focus goes back to what opened it |

## Accessibility

- The panel is a `complementary` landmark named by its `heading`.
- × is named "Close" and the back button "Back", in the page language, with a tooltip; `close-icon-description` and `navigation-back-icon-description` change them.
- A slide-over panel keeps Tab inside, but the page behind it is not inert: screen reader users can still reach it with their reading keys. Use a [Modal](https://parntengza.github.io/kanok-ui-docs/en/modal/) when the page must be out of reach.

Unstyled React parts with the same behaviour: [Headless Side panel](https://parntengza.github.io/kanok-ui-docs/en/headless-side-panel/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-side-panel>` · React `UiSidePanel`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `open` | `open` | `boolean` | `false` |  |
| `placement` | `placement` | `'right' \| 'left'` | `'right'` |  |
| `size` | `size` | `SidePanelSize` | `'md'` | xs 16rem, sm 20rem, md 30rem, lg 40rem, xl 65rem, 2xl 80rem. |
| `heading` | `heading` | `string` | `''` | The heading (Carbon `title`); also the panel's accessible name. |
| `label-text` | `labelText` | `string` | `''` | A small label above the heading. |
| `slide-in` | `slideIn` | `boolean` | `false` | Push the page aside (`selector-page-content`) instead of covering it; no focus trap, no Esc. |
| `include-overlay` | `includeOverlay` | `boolean` | `false` | Dim the page; a click on it closes the panel (unless `prevent-close-on-click-outside`). |
| `prevent-close-on-click-outside` | `preventCloseOnClickOutside` | `boolean` | `false` |  |
| `selector-initial-focus` | `selectorInitialFocus` | `string` | `''` | What takes focus on open (a selector in the content), else the first control. |
| `selector-page-content` | `selectorPageContent` | `string` | `''` | The page element a slide-in panel pushes aside. |
| `hide-close-button` | `hideCloseButton` | `boolean` | `false` |  |
| `close-icon-description` | `closeIconDescription` | `string` | `''` | The × button's name and tooltip (default "Close", translated). |
| `close-icon-tooltip-alignment` | `closeIconTooltipAlignment` | `Placement` | `'left'` |  |
| `navigation-back-icon-description` | `navigationBackIconDescription` | `string` | `''` | The back button's name and tooltip (default "Back", translated). |
| `current-step` | `currentStep` | `number` | `0` | Above 0 shows the back button (a panel with steps). |
| `condensed-actions` | `condensedActions` | `boolean` | `false` | 48px action buttons instead of 64px. |
| `animate-title` | `animateTitle` | `boolean` | `true` | Shrink the heading as the content scrolls (Carbon's default). |

#### Methods

| Method | Description |
|---|---|
| `requestClose(reason)` | Asks to close (cancelable `ui-request-close`), then closes. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-close` | `onUiClose` | After it closed |
| `ui-navigate-back` | `onUiNavigateBack` | The back button (`current-step` > 0) was pressed |
| `ui-request-close` | `onUiRequestClose` | Cancelable; detail: { reason: 'escape' \| 'close-button' \| 'overlay' } |

#### Slots

| Slot | Description |
|---|---|
| (default) | The content |
| `subtitle` | Text under the heading |
| `above-title` | Content above the label and heading |
| `below-title` | Content under the subtitle |
| `action-toolbar` | Small buttons under the header (the first one with its label) |
| `actions` | The action buttons |

#### CSS parts

| Part | Description |
|---|---|
| `panel` | The panel |
| `overlay` | The overlay of `include-overlay` |
| `header` | The header |
| `heading` | The heading |
| `body` | The content's box |
| `actions` | The row of action buttons |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-side-panel-top` |  | Where the panel starts (default 3rem, under the UI shell header) |
| `--ui-side-panel-radius` |  | Corner radius of the edge facing the page (default 0; Kanok: 12px) |
| `--ui-actions-gap` |  | / --ui-actions-padding - Gap between the action buttons and padding round them (default none: full-bleed buttons that touch; Kanok: 8px / 16px 20px) |
| `--ui-actions-button-flex` |  | `flex` of each action button (default: Carbon's widths by count; Kanok: their own width) |
| `--ui-actions-button-align` |  | / --ui-actions-button-padding-top - Where a button's label sits (default: at the top, 16px in) |
| `--ui-actions-stacked-direction` |  | / --ui-actions-stacked-wrap / --ui-actions-stacked-width - Where Carbon stacks the actions (narrow): `flex-direction`, `flex-wrap` and each button's width (default column-reverse, nowrap, 100%; Kanok: one row that wraps) |


