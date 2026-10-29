# Tearsheet

A tearsheet is a large modal that rises from the bottom of the screen over the dimmed page. Use it for a task that needs room but keeps the user in the same place: creating a record, a form in several sections, a review with a side pane. It is Carbon for IBM Products' `Tearsheet`. For a short decision, use a [Modal](https://parntengza.github.io/kanok-ui-docs/en/modal/); to keep the page in view, a [Side panel](https://parntengza.github.io/kanok-ui-docs/en/side-panel/).


HTML:

```html
<ui-button id="tearsheet-open">New contract</ui-button>
<ui-tearsheet id="tearsheet-create" width="wide" heading="New contract" label="Legal" description="Fill in the parties and the term. You can add clauses after the contract is created." selector-initial-focus="#tearsheet-create-name">
  <div style="display: grid; gap: 16px; padding: 16px 32px">
    <ui-text-input id="tearsheet-create-name" label="Contract name"></ui-text-input>
    <ui-text-input label="Counterparty"></ui-text-input>
    <ui-date-picker label="Start date"></ui-date-picker>
  </div>
  <ui-button slot="actions" kind="ghost">Cancel</ui-button>
  <ui-button slot="actions" kind="secondary">Save draft</ui-button>
  <ui-button slot="actions">Create</ui-button>
</ui-tearsheet>

<script type="module">
  const sheet = document.getElementById('tearsheet-create');
  document.getElementById('tearsheet-open').addEventListener('click', () => (sheet.open = true));
  for (const button of sheet.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (sheet.open = false));
</script>
```

React:

```tsx
const [open, setOpen] = useState(false);

<UiButton onClick={() => setOpen(true)}>New contract</UiButton>
<UiTearsheet open={open} width="wide" heading="New contract" label="Legal" description="Fill in the parties and the term. You can add clauses after the contract is created." selectorInitialFocus="#contract-name" onUiClose={() => setOpen(false)}>
  <UiTextInput id="contract-name" label="Contract name" />
  <UiTextInput label="Counterparty" />
  <UiDatePicker label="Start date" />
  <UiButton slot="actions" kind="ghost" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="actions" kind="secondary" onClick={saveDraft}>Save draft</UiButton>
  <UiButton slot="actions" onClick={create}>Create</UiButton>
</UiTearsheet>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>New contract</Button>
<Tearsheet
  open={open}
  onRequestClose={() => setOpen(false)}
  width="wide"
  heading="New contract"
  label="Legal"
  description="Fill in the parties and the term. You can add clauses after the contract is created."
  selectorInitialFocus="#contract-name"
  actions={[
    { label: 'Cancel', kind: 'ghost', onClick: () => setOpen(false) },
    { label: 'Save draft', kind: 'secondary', onClick: saveDraft },
    { label: 'Create', onClick: create },
  ]}
>
  <TextInput id="contract-name" label="Contract name" />
  <TextInput label="Counterparty" />
  <DatePicker label="Start date" />
</Tearsheet>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/tearsheet
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-tearsheet
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tearsheet.json
#    to its target:
#    components/ui/primitives/tearsheet/tearsheet.styles.ts
#    components/ui/primitives/tearsheet/tearsheet.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-modal, core-motion, core-overlay, layer, shared-action-set, shared-element, shared-events, shared-focus-ring, shared-localize, shared-quiet-focus, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-tearsheet.json
#    to its target:
#    components/ui/react-tw/tearsheet.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-action-set, tw-action-set, tw-i18n, tw-layer, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/tearsheet';</script>

<ui-button onclick="document.getElementById('new-contract').open = true">New contract</ui-button>
<ui-tearsheet id="new-contract" width="wide" heading="New contract">
  …
  <ui-button slot="actions">Create</ui-button>
</ui-tearsheet>
```

React:

```tsx
import { UiTearsheet } from '@purpurabog/ui/react';

<UiTearsheet open={open} width="wide" heading="New contract" onUiClose={() => setOpen(false)}>
  …
  <UiButton slot="actions" onClick={create}>Create</UiButton>
</UiTearsheet>
```

React + Tailwind:

```tsx
import { Tearsheet } from '@/components/ui/react-tw/tearsheet';

<Tearsheet open={open} onRequestClose={() => setOpen(false)} width="wide" heading="New contract" actions={[{ label: 'Create', onClick: create }]}>
  …
</Tearsheet>
```

Set `open` to show it and back to false to hide it. It is a native modal `<dialog>`: the page behind is inert and doesn't scroll, and Tab stays inside the sheet. On open, focus goes to `selector-initial-focus` (a selector inside the sheet), else to ×, else to the first control; on close it goes back to what had it. `ui-close` fires after the sheet has sunk back.

The content has no padding of its own: put your own around it, as in these examples. React + Tailwind is controlled: `onRequestClose(reason)` reports ×, Esc and a click outside, and you set `open` to false.

## Narrow

`width="narrow"` (the default) is Carbon's small modal width: 60%, 42% or 36% of the screen from medium, large and extra-large screens up. It starts 130px from the top; `vertical-position="normal"` moves it up to 90px, as a wide one. The heading is a size smaller, and the content sits on the layer instead of the background. React + Tailwind also has `TearsheetNarrow`.


HTML:

```html
<ui-button id="tearsheet-narrow-open" kind="tertiary">Rename department</ui-button>
<ui-tearsheet id="tearsheet-narrow" heading="Rename department" description="The new name shows on every contract the department owns.">
  <div style="padding: 16px">
    <ui-text-input label="Department name" value="Legal"></ui-text-input>
  </div>
  <ui-button slot="actions" kind="secondary">Cancel</ui-button>
  <ui-button slot="actions">Rename</ui-button>
</ui-tearsheet>

<script type="module">
  const sheet = document.getElementById('tearsheet-narrow');
  document.getElementById('tearsheet-narrow-open').addEventListener('click', () => (sheet.open = true));
  for (const button of sheet.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (sheet.open = false));
</script>
```

React:

```tsx
<UiTearsheet open={open} heading="Rename department" description="The new name shows on every contract the department owns." onUiClose={() => setOpen(false)}>
  <UiTextInput label="Department name" value="Legal" />
  <UiButton slot="actions" kind="secondary" onClick={() => setOpen(false)}>Cancel</UiButton>
  <UiButton slot="actions" onClick={rename}>Rename</UiButton>
</UiTearsheet>
```

React + Tailwind:

```tsx
import { TearsheetNarrow } from '@/components/ui/react-tw/tearsheet';

<TearsheetNarrow
  open={open}
  onRequestClose={() => setOpen(false)}
  heading="Rename department"
  description="The new name shows on every contract the department owns."
  actions={[
    { label: 'Cancel', kind: 'secondary', onClick: () => setOpen(false) },
    { label: 'Rename', onClick: rename },
  ]}
>
  <TextInput label="Department name" defaultValue="Legal" />
</TearsheetNarrow>
```

## Header actions and tabs

A wide tearsheet can carry small buttons in the header (`slot="header-actions"`) and tabs under the header text (`slot="header-navigation"`). Switch the content yourself on the tabs' `ui-tab-change`. React + Tailwind takes them in `headerActions` and `navigation`.


HTML:

```html
<ui-button id="tearsheet-tabs-open" kind="tertiary">Open contract</ui-button>
<ui-tearsheet id="tearsheet-tabs" width="wide" heading="CT-2026-0142" description="Office lease, 3rd floor." has-close-icon>
  <ui-button slot="header-actions" kind="secondary" size="sm">Export PDF</ui-button>
  <ui-tabs slot="header-navigation" id="tearsheet-tabs-nav" label="Contract sections">
    <ui-tab panel="parties">Parties</ui-tab>
    <ui-tab panel="terms">Terms</ui-tab>
    <ui-tab panel="history">History</ui-tab>
  </ui-tabs>
  <div style="padding: 16px 32px">
    <p data-section="parties">Siam Logistics Co., Ltd. and the company.</p>
    <p data-section="terms" hidden>24 months from 1 November 2026, 45,000 baht a month.</p>
    <p data-section="history" hidden>Signed by both parties on 9 October 2026.</p>
  </div>
  <ui-button slot="actions">Done</ui-button>
</ui-tearsheet>

<script type="module">
  const sheet = document.getElementById('tearsheet-tabs');
  document.getElementById('tearsheet-tabs-open').addEventListener('click', () => (sheet.open = true));
  sheet.querySelector('[slot="actions"]').addEventListener('click', () => (sheet.open = false));
  document.getElementById('tearsheet-tabs-nav').addEventListener('ui-tab-change', (event) => {
    for (const section of sheet.querySelectorAll('[data-section]')) section.hidden = section.dataset.section !== event.detail.name;
  });
</script>
```

React:

```tsx
<UiTearsheet open={open} width="wide" heading="CT-2026-0142" description="Office lease, 3rd floor." hasCloseIcon onUiClose={() => setOpen(false)}>
  <UiButton slot="header-actions" kind="secondary" size="sm">Export PDF</UiButton>
  <UiTabs slot="header-navigation" label="Contract sections" onUiTabChange={(e) => setSection(e.detail.name)}>
    <UiTab panel="parties">Parties</UiTab>
    <UiTab panel="terms">Terms</UiTab>
    <UiTab panel="history">History</UiTab>
  </UiTabs>
  <Section name={section} />
  <UiButton slot="actions" onClick={() => setOpen(false)}>Done</UiButton>
</UiTearsheet>
```

React + Tailwind:

```tsx
<Tearsheet
  open={open}
  onRequestClose={() => setOpen(false)}
  width="wide"
  heading="CT-2026-0142"
  description="Office lease, 3rd floor."
  hasCloseIcon
  headerActions={<Button kind="secondary" size="sm">Export PDF</Button>}
  navigation={
    <Tabs value={section} onValueChange={setSection}>
      <TabList label="Contract sections">
        <Tab value="parties">Parties</Tab>
        <Tab value="terms">Terms</Tab>
        <Tab value="history">History</Tab>
      </TabList>
    </Tabs>
  }
  actions={[{ label: 'Done', onClick: () => setOpen(false) }]}
>
  <Section name={section} />
</Tearsheet>
```

Both slots show only in a wide tearsheet.

## A side pane

`slot="influencer"` adds a pane beside the content of a wide tearsheet: a summary, the steps of a flow, a preview. It sits on the right; `influencer-placement="left"` moves it. `influencer-width` is `narrow` (256px, the default) or `wide` (320px). It scrolls on its own.


HTML:

```html
<ui-button id="tearsheet-pane-open" kind="tertiary">Review request</ui-button>
<ui-tearsheet id="tearsheet-pane" width="wide" heading="Review purchase request" influencer-placement="left">
  <div slot="influencer" style="display: grid; gap: 8px; padding: 16px">
    <strong>PR-2026-0318</strong>
    <span>IT department</span>
    <span>128,500 baht</span>
  </div>
  <div style="display: grid; gap: 16px; padding: 16px 32px">
    <ui-text-area label="Comment for the requester"></ui-text-area>
  </div>
  <ui-button slot="actions" kind="secondary">Return</ui-button>
  <ui-button slot="actions">Approve</ui-button>
</ui-tearsheet>

<script type="module">
  const sheet = document.getElementById('tearsheet-pane');
  document.getElementById('tearsheet-pane-open').addEventListener('click', () => (sheet.open = true));
  for (const button of sheet.querySelectorAll('[slot="actions"]')) button.addEventListener('click', () => (sheet.open = false));
</script>
```

React:

```tsx
<UiTearsheet open={open} width="wide" heading="Review purchase request" influencerPlacement="left" onUiClose={() => setOpen(false)}>
  <div slot="influencer">
    <strong>PR-2026-0318</strong> …
  </div>
  <UiTextArea label="Comment for the requester" />
  <UiButton slot="actions" kind="secondary" onClick={sendBack}>Return</UiButton>
  <UiButton slot="actions" onClick={approve}>Approve</UiButton>
</UiTearsheet>
```

React + Tailwind:

```tsx
<Tearsheet
  open={open}
  onRequestClose={() => setOpen(false)}
  width="wide"
  heading="Review purchase request"
  influencer={<div><strong>PR-2026-0318</strong> …</div>}
  influencerPosition="left"
  actions={[
    { label: 'Return', kind: 'secondary', onClick: sendBack },
    { label: 'Approve', onClick: approve },
  ]}
>
  <TextArea label="Comment for the requester" />
</Tearsheet>
```

React + Tailwind calls the placement `influencerPosition`.

## Actions and the close button

Up to four `<ui-button slot="actions">` sit at the foot, laid out as Carbon's ActionSet (64px tall; 80px in a wide tearsheet); any more are hidden. With actions, there is no × unless you set `has-close-icon`. With no actions, × always shows, so a sheet that only shows information still closes.


HTML:

```html
<ui-button id="tearsheet-info-open" kind="tertiary">Signing log</ui-button>
<ui-tearsheet id="tearsheet-info" heading="Signing log" description="Who signed CT-2026-0142, and when.">
  <ul style="margin: 0; padding: 16px 32px">
    <li>Ananya P. signed on 8 October 2026, 10:42.</li>
    <li>Boonmee S. signed on 9 October 2026, 14:05.</li>
  </ul>
</ui-tearsheet>

<script type="module">
  const sheet = document.getElementById('tearsheet-info');
  document.getElementById('tearsheet-info-open').addEventListener('click', () => (sheet.open = true));
</script>
```

React:

```tsx
<UiTearsheet open={open} heading="Signing log" description="Who signed CT-2026-0142, and when." onUiClose={() => setOpen(false)}>
  <ul>…</ul>
</UiTearsheet>
```

React + Tailwind:

```tsx
<Tearsheet open={open} onRequestClose={() => setOpen(false)} heading="Signing log" description="Who signed CT-2026-0142, and when.">
  <ul>…</ul>
</Tearsheet>
```

× is named "Close" in the page language; `close-icon-description` changes it.

## Rich label and description

`label` and `description` take plain text. For markup, use `slot="label"` and `slot="description"` instead, for example a link in the description.


HTML:

```html
<ui-button id="tearsheet-rich-open" kind="tertiary">Data request</ui-button>
<ui-tearsheet id="tearsheet-rich" heading="Personal data request">
  <span slot="label">PDPA · <strong>Due in 3 days</strong></span>
  <span slot="description">Answer within 30 days of the request. <ui-link href="#tearsheet-rich-open">Read the policy</ui-link></span>
  <div style="padding: 16px">
    <ui-text-area label="Answer to the data subject"></ui-text-area>
  </div>
  <ui-button slot="actions">Send answer</ui-button>
</ui-tearsheet>

<script type="module">
  const sheet = document.getElementById('tearsheet-rich');
  document.getElementById('tearsheet-rich-open').addEventListener('click', () => (sheet.open = true));
  sheet.querySelector('[slot="actions"]').addEventListener('click', () => (sheet.open = false));
</script>
```

React:

```tsx
<UiTearsheet open={open} heading="Personal data request" onUiClose={() => setOpen(false)}>
  <span slot="label">PDPA · <strong>Due in 3 days</strong></span>
  <span slot="description">Answer within 30 days of the request. <UiLink href="/policy">Read the policy</UiLink></span>
  …
</UiTearsheet>
```

React + Tailwind:

```tsx
<Tearsheet
  open={open}
  onRequestClose={() => setOpen(false)}
  heading="Personal data request"
  label={<>PDPA · <strong>Due in 3 days</strong></>}
  description={<>Answer within 30 days of the request. <Link href="/policy">Read the policy</Link></>}
  actions={[{ label: 'Send answer', onClick: send }]}
>
  …
</Tearsheet>
```

## Stacked tearsheets

A tearsheet can open another one over it. The one underneath scales back (to 95%, then 90%) and the page dims less, up to three deep. Each closes on its own, newest first.


HTML:

```html
<ui-button id="tearsheet-stack-open" kind="tertiary">Open the contract</ui-button>
<ui-tearsheet id="tearsheet-stack-1" width="wide" heading="CT-2026-0142" description="Step 1 of a nested flow.">
  <div style="padding: 16px 32px"><ui-button data-next="tearsheet-stack-2" kind="tertiary">Add a party</ui-button></div>
  <ui-button slot="actions">Done</ui-button>
</ui-tearsheet>
<ui-tearsheet id="tearsheet-stack-2" width="wide" heading="Add a party" description="Step 2: over the contract.">
  <div style="padding: 16px 32px"><ui-button data-next="tearsheet-stack-3" kind="tertiary">Add a new company</ui-button></div>
  <ui-button slot="actions">Add</ui-button>
</ui-tearsheet>
<ui-tearsheet id="tearsheet-stack-3" width="wide" heading="New company" description="Step 3: the top one.">
  <div style="padding: 16px 32px"><ui-text-input label="Company name"></ui-text-input></div>
  <ui-button slot="actions">Save</ui-button>
</ui-tearsheet>

<script type="module">
  document.getElementById('tearsheet-stack-open').addEventListener('click', () => (document.getElementById('tearsheet-stack-1').open = true));
  for (const n of [1, 2, 3]) {
    const sheet = document.getElementById(`tearsheet-stack-${n}`);
    sheet.querySelector('[slot="actions"]').addEventListener('click', () => (sheet.open = false));
    sheet.querySelector('[data-next]')?.addEventListener('click', (event) => (document.getElementById(event.currentTarget.dataset.next).open = true));
  }
</script>
```

React:

```tsx
<UiTearsheet open={contractOpen} width="wide" heading="CT-2026-0142" onUiClose={() => setContractOpen(false)}>
  <UiButton kind="tertiary" onClick={() => setPartyOpen(true)}>Add a party</UiButton>
  …
</UiTearsheet>
<UiTearsheet open={partyOpen} width="wide" heading="Add a party" onUiClose={() => setPartyOpen(false)}>…</UiTearsheet>
```

React + Tailwind:

```tsx
<Tearsheet open={contractOpen} onRequestClose={() => setContractOpen(false)} width="wide" heading="CT-2026-0142">
  <Button kind="tertiary" onClick={() => setPartyOpen(true)}>Add a party</Button>
</Tearsheet>
<Tearsheet open={partyOpen} onRequestClose={() => setPartyOpen(false)} width="wide" heading="Add a party">…</Tearsheet>
```

## Ask before closing

×, Esc and a click outside the sheet fire `ui-request-close`, cancelable, with the `reason`: `close-button`, `escape` or `outside`. Call `preventDefault()` to keep it open. `prevent-close-on-click-outside` turns the outside click off altogether, which suits a form people type into. Type something below, then press Esc.


HTML:

```html
<ui-button id="tearsheet-guard-open" kind="tertiary">Write a memo</ui-button>
<ui-tearsheet id="tearsheet-guard" heading="New memo" has-close-icon prevent-close-on-click-outside>
  <div style="display: grid; gap: 16px; padding: 16px">
    <ui-notification id="tearsheet-guard-warning" kind="warning" low-contrast open="false" heading="The memo isn't saved" subtitle="Close again to discard it."></ui-notification>
    <ui-text-area id="tearsheet-guard-text" label="Memo"></ui-text-area>
  </div>
  <ui-button slot="actions" id="tearsheet-guard-save">Save</ui-button>
</ui-tearsheet>
<p>Asked to close by: <output id="tearsheet-guard-out"></output></p>

<script type="module">
  const sheet = document.getElementById('tearsheet-guard');
  const text = document.getElementById('tearsheet-guard-text');
  const warning = document.getElementById('tearsheet-guard-warning');
  document.getElementById('tearsheet-guard-open').addEventListener('click', () => {
    text.value = '';
    warning.open = false;
    sheet.open = true;
  });
  document.getElementById('tearsheet-guard-save').addEventListener('click', () => (sheet.open = false));
  sheet.addEventListener('ui-request-close', (event) => {
    if (event.target !== sheet) return; // the notification inside asks too
    document.getElementById('tearsheet-guard-out').value = event.detail.reason;
    if (text.value && !warning.open) {
      event.preventDefault();
      warning.open = true;
    }
  });
</script>
```

React:

```tsx
<UiTearsheet
  open={open}
  heading="New memo"
  hasCloseIcon
  preventCloseOnClickOutside
  onUiRequestClose={(e) => { if (dirty && !warned) { e.preventDefault(); setWarned(true); } }}
  onUiClose={() => setOpen(false)}
>
  <UiNotification kind="warning" lowContrast open={warned} heading="The memo isn't saved" subtitle="Close again to discard it." />
  <UiTextArea label="Memo" />
  <UiButton slot="actions" onClick={save}>Save</UiButton>
</UiTearsheet>
```

React + Tailwind:

```tsx
// onRequestClose only reports: the sheet stays open until you set open to false
<Tearsheet
  open={open}
  onRequestClose={() => { if (dirty && !warned) setWarned(true); else setOpen(false); }}
  heading="New memo"
  hasCloseIcon
  preventCloseOnClickOutside
  actions={[{ label: 'Save', onClick: save }]}
>
  <Notification kind="warning" lowContrast open={warned} title="The memo isn't saved" subtitle="Close again to discard it." />
  <TextArea label="Memo" />
</Tearsheet>
```

`ui-request-close` and `ui-close` bubble, so a notification inside fires them on the tearsheet too: check that `event.target` is the tearsheet. React's `UiTearsheet` does that for you: `onUiRequestClose` and `onUiClose` get only the tearsheet's own events. `requestClose(reason)` asks from your own button; setting `open` to false closes without asking.

## Keyboard

| Key | Does |
|---|---|
| Tab / Shift+Tab | Moves through the sheet's controls and wraps around inside it |
| Esc | Asks to close (`escape`); focus goes back to what opened it |

## Accessibility

- It is a native modal `<dialog>`, named by its `heading`: the page behind it is inert for the mouse, the keyboard and screen readers.
- Give every tearsheet a `heading`; without one the dialog has no name.
- × is named "Close" in the page language; `close-icon-description` changes it.

Unstyled React parts with the same behaviour: [Headless Tearsheet](https://parntengza.github.io/kanok-ui-docs/en/headless-tearsheet/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-tearsheet>` · React `UiTearsheet`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `open` | `open` | `boolean` | `false` |  |
| `width` | `width` | `'narrow' \| 'wide'` | `'narrow'` | narrow: Carbon's small modal; wide: the whole screen but 64px each side. |
| `vertical-position` | `verticalPosition` | `'normal' \| 'lower' \| undefined` |  | How far from the top the sheet starts: normal 90px, lower 130px (default lower for a narrow one). |
| `heading` | `heading` | `string` | `''` |  |
| `label` | `label` | `string` | `''` | A small label above the heading. |
| `description` | `description` | `string` | `''` |  |
| `influencer-placement` | `influencerPlacement` | `'left' \| 'right'` | `'right'` |  |
| `influencer-width` | `influencerWidth` | `'narrow' \| 'wide'` | `'narrow'` |  |
| `has-close-icon` | `hasCloseIcon` | `boolean` | `false` | Show the × even with actions (it always shows without them). |
| `close-icon-description` | `closeIconDescription` | `string` | `''` | The ×'s name (default "Close", translated). |
| `prevent-close-on-click-outside` | `preventCloseOnClickOutside` | `boolean` | `false` |  |
| `selector-initial-focus` | `selectorInitialFocus` | `string` | `''` | What takes focus on open (a selector in the content), else × or the first control. |

#### Methods

| Method | Description |
|---|---|
| `placeInStack(position, depth)` | Called by the stack: this sheet's place among the open ones (position 1 = oldest) and how many show. |
| `requestClose(reason)` | Asks to close (cancelable `ui-request-close`), then closes. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-close` | `onUiClose` | After it closed |
| `ui-request-close` | `onUiRequestClose` | Cancelable; detail: { reason: 'escape' \| 'close-button' \| 'outside' } |

#### Slots

| Slot | Description |
|---|---|
| (default) | The content |
| `label` | Rich label (instead of `label`) |
| `description` | Rich description (instead of `description`), e.g. a `<ui-truncated-text>` |
| `header-actions` | Small buttons in the header (wide) |
| `header-navigation` | Tabs under the header text (wide) |
| `influencer` | A side pane beside the content (wide) |
| `actions` | Up to four action buttons |

#### CSS parts

| Part | Description |
|---|---|
| `dialog` | The full-screen dialog |
| `container` | The sheet |
| `header` | The header |
| `heading` | The heading |
| `close-button` | The × |
| `influencer` | The side pane |
| `content` | The content's box |
| `actions` | The row of action buttons |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tearsheet-radius` |  | Corner radius of the top corners (default 0; Kanok: 12px) |
| `--ui-actions-gap` |  | / --ui-actions-padding - Gap between the action buttons and padding round them (default none: full-bleed buttons that touch; Kanok: 8px / 16px 20px) |
| `--ui-actions-button-flex` |  | `flex` of each action button (default: Carbon's widths by count; Kanok: their own width) |
| `--ui-actions-button-align` |  | / --ui-actions-button-padding-top - Where a button's label sits (default: at the top, 16px in) |
| `--ui-actions-stacked-direction` |  | / --ui-actions-stacked-wrap / --ui-actions-stacked-width - Where Carbon stacks the actions (narrow): `flex-direction`, `flex-wrap` and each button's width (default column-reverse, nowrap, 100%; Kanok: one row that wraps) |
| `--ui-close-size` |  | Size of the × button (default 48px; Kanok: 32px) |
| `--ui-close-inset` |  | Margin that sets the × in from the corner (default 0; Kanok: 8px) |
| `--ui-icon-control-radius` |  | Corners of the ×, its hover fill and its ring (default 0; Kanok: round) |
| `--ui-focus-offset` |  | `outline-offset` of the ×'s focus ring (default -2px: inside; Kanok: 2px outside) |


