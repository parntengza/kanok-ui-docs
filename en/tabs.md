# Tabs

Tabs split related content into views on one page. One tab is selected at a time, and only its panel shows. A `disabled` tab stays in the strip but can't be chosen.


HTML:

```html
<ui-tabs label="Contract details">
  <ui-tab panel="overview">Overview</ui-tab>
  <ui-tab panel="parties">Parties</ui-tab>
  <ui-tab panel="history">History</ui-tab>
  <ui-tab panel="archive" disabled>Archive</ui-tab>
  <ui-tab-panel name="overview">Summary of the contract terms.</ui-tab-panel>
  <ui-tab-panel name="parties">Signers and counterparties.</ui-tab-panel>
  <ui-tab-panel name="history">Every change, newest first.</ui-tab-panel>
  <ui-tab-panel name="archive">Archived copies.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Contract details">
  <UiTab panel="overview">Overview</UiTab>
  <UiTab panel="parties">Parties</UiTab>
  <UiTab panel="history">History</UiTab>
  <UiTab panel="archive" disabled>Archive</UiTab>
  <UiTabPanel name="overview">Summary of the contract terms.</UiTabPanel>
  <UiTabPanel name="parties">Signers and counterparties.</UiTabPanel>
  <UiTabPanel name="history">Every change, newest first.</UiTabPanel>
  <UiTabPanel name="archive">Archived copies.</UiTabPanel>
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs>
  <TabList label="Contract details">
    <Tab value="overview">Overview</Tab>
    <Tab value="parties">Parties</Tab>
    <Tab value="history">History</Tab>
    <Tab value="archive" disabled>Archive</Tab>
  </TabList>
  <TabPanel value="overview">Summary of the contract terms.</TabPanel>
  <TabPanel value="parties">Signers and counterparties.</TabPanel>
  <TabPanel value="history">Every change, newest first.</TabPanel>
  <TabPanel value="archive">Archived copies.</TabPanel>
</Tabs>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/tabs
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-tabs
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tabs.json
#    to its target:
#    components/ui/primitives/tabs/tab-panel.ts
#    components/ui/primitives/tabs/tab.ts
#    components/ui/primitives/tabs/tabs-skeleton.ts
#    components/ui/primitives/tabs/tabs.styles.ts
#    components/ui/primitives/tabs/tabs.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-roving, layer, shared-element, shared-field, shared-localize, shared-skeleton, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-tabs.json
#    to its target:
#    components/ui/react-tw/tabs.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-i18n, tw-layer, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

Each `<ui-tab panel>` matches the `name` of a `<ui-tab-panel>`. Tabs and panels may come in any order in the markup: the tabs go into the strip by themselves. `label` names the strip for screen readers.


HTML:

```html
<script type="module">import '@purpurabog/ui/tabs';</script>

<ui-tabs label="Contract details">
  <ui-tab panel="overview">Overview</ui-tab>
  <ui-tab panel="parties">Parties</ui-tab>
  <ui-tab-panel name="overview">Summary of the contract terms.</ui-tab-panel>
  <ui-tab-panel name="parties">Signers and counterparties.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
import { UiTabs, UiTab, UiTabPanel } from '@purpurabog/ui/react';

<UiTabs label="Contract details">
  <UiTab panel="overview">Overview</UiTab>
  <UiTab panel="parties">Parties</UiTab>
  <UiTabPanel name="overview">Summary of the contract terms.</UiTabPanel>
  <UiTabPanel name="parties">Signers and counterparties.</UiTabPanel>
</UiTabs>
```

React + Tailwind:

```tsx
import { Tabs, TabList, Tab, TabPanel } from '@/components/ui/react-tw/tabs';

<Tabs>
  <TabList label="Contract details">
    <Tab value="overview">Overview</Tab>
    <Tab value="parties">Parties</Tab>
  </TabList>
  <TabPanel value="overview">Summary of the contract terms.</TabPanel>
  <TabPanel value="parties">Signers and counterparties.</TabPanel>
</Tabs>
```

In React + Tailwind, the `Tab`s sit in a `TabList` (it takes `label`), and a `Tab` and its `TabPanel` share a `value`.

## Tabs, content switcher or accordion?

| Component | Use it when |
|---|---|
| Tabs | The views are sections of one item (a contract's terms, parties, history) and the reader looks at one at a time. |
| [Content switcher](https://parntengza.github.io/kanok-ui-docs/en/content-switcher/) | The same content in another form or filter: table or grid, all requests or mine. |
| [Accordion](https://parntengza.github.io/kanok-ui-docs/en/accordion/) | A long page of sections the reader may open several of, or read top to bottom. |

## Starting tab and changes

`value` is the `name` of the panel that shows; left out, the first enabled tab is selected. `ui-tab-change` fires after the user selects another tab, with the panel's name in `detail.name`.


HTML:

```html
<ui-tabs id="tabs-start" label="Approval steps" value="review">
  <ui-tab panel="draft">Draft</ui-tab>
  <ui-tab panel="review">Legal review</ui-tab>
  <ui-tab panel="sign">Signing</ui-tab>
  <ui-tab-panel name="draft">The requester fills in the contract form.</ui-tab-panel>
  <ui-tab-panel name="review">Legal checks the terms and the counterparty.</ui-tab-panel>
  <ui-tab-panel name="sign">Both parties sign, and the contract is filed.</ui-tab-panel>
</ui-tabs>
<p>Selected: <output id="tabs-start-out"></output></p>

<script type="module">
  const tabs = document.getElementById('tabs-start');
  const out = document.getElementById('tabs-start-out');
  out.value = tabs.value;
  tabs.addEventListener('ui-tab-change', (event) => (out.value = event.detail.name));
</script>
```

React:

```tsx
const [step, setStep] = useState('review');

<UiTabs label="Approval steps" value={step} onUiTabChange={(e) => setStep(e.detail.name)}>
  <UiTab panel="draft">Draft</UiTab>
  <UiTab panel="review">Legal review</UiTab>
  <UiTab panel="sign">Signing</UiTab>
  <UiTabPanel name="draft">The requester fills in the contract form.</UiTabPanel>
  <UiTabPanel name="review">Legal checks the terms and the counterparty.</UiTabPanel>
  <UiTabPanel name="sign">Both parties sign, and the contract is filed.</UiTabPanel>
</UiTabs>
<p>Selected: <output>{step}</output></p>
```

React + Tailwind:

```tsx
const [step, setStep] = useState('review');

<Tabs value={step} onValueChange={setStep}>
  <TabList label="Approval steps">
    <Tab value="draft">Draft</Tab>
    <Tab value="review">Legal review</Tab>
    <Tab value="sign">Signing</Tab>
  </TabList>
  <TabPanel value="draft">The requester fills in the contract form.</TabPanel>
  <TabPanel value="review">Legal checks the terms and the counterparty.</TabPanel>
  <TabPanel value="sign">Both parties sign, and the contract is filed.</TabPanel>
</Tabs>
<p>Selected: <output>{step}</output></p>
```

React + Tailwind also takes `defaultValue` for an uncontrolled start.

## Contained

`type="contained"` draws 48px tabs on a grey strip with dividers. The selected tab sits on the layer with a blue top edge, and the panels sit on the layer too. Use it where the tabs head a card or a section of their own.


HTML:

```html
<ui-tabs label="Contract details" type="contained">
  <ui-tab panel="overview">Overview</ui-tab>
  <ui-tab panel="parties">Parties</ui-tab>
  <ui-tab panel="history">History</ui-tab>
  <ui-tab panel="archive" disabled>Archive</ui-tab>
  <ui-tab-panel name="overview">Summary of the contract terms.</ui-tab-panel>
  <ui-tab-panel name="parties">Signers and counterparties.</ui-tab-panel>
  <ui-tab-panel name="history">Every change, newest first.</ui-tab-panel>
  <ui-tab-panel name="archive">Archived copies.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Contract details" type="contained">
  <UiTab panel="overview">Overview</UiTab>
  <UiTab panel="parties">Parties</UiTab>
  <UiTab panel="history">History</UiTab>
  <UiTab panel="archive" disabled>Archive</UiTab>
  <UiTabPanel name="overview">Summary of the contract terms.</UiTabPanel>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs type="contained">
  <TabList label="Contract details">
    <Tab value="overview">Overview</Tab>
    <Tab value="parties">Parties</Tab>
    <Tab value="history">History</Tab>
    <Tab value="archive" disabled>Archive</Tab>
  </TabList>
  <TabPanel value="overview">Summary of the contract terms.</TabPanel>
  …
</Tabs>
```

## Full width

With `type="contained"`, `full-width` (`fullWidth`) shares the strip in equal columns. A label that doesn't fit ends in an ellipsis.


HTML:

```html
<ui-tabs label="Case sections" type="contained" full-width>
  <ui-tab panel="case">Case details</ui-tab>
  <ui-tab panel="parties">Parties</ui-tab>
  <ui-tab panel="evidence">Attachments and supporting evidence for the hearing</ui-tab>
  <ui-tab panel="history">History</ui-tab>
  <ui-tab-panel name="case">Case number, court and filing date.</ui-tab-panel>
  <ui-tab-panel name="parties">Plaintiffs, defendants and their lawyers.</ui-tab-panel>
  <ui-tab-panel name="evidence">Documents filed with the case.</ui-tab-panel>
  <ui-tab-panel name="history">Every hearing, newest first.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Case sections" type="contained" fullWidth>
  <UiTab panel="case">Case details</UiTab>
  <UiTab panel="parties">Parties</UiTab>
  <UiTab panel="evidence">Attachments and supporting evidence for the hearing</UiTab>
  <UiTab panel="history">History</UiTab>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs type="contained" fullWidth>
  <TabList label="Case sections">
    <Tab value="case">Case details</Tab>
    <Tab value="parties">Parties</Tab>
    <Tab value="evidence">Attachments and supporting evidence for the hearing</Tab>
    <Tab value="history">History</Tab>
  </TabList>
  …
</Tabs>
```

## Sizes

`size`: `sm` 32px, `md` 40px (the line default), `lg` 48px (the contained default), `xl` 64px (contained only; line tabs stop at 48px).


HTML:

```html
<ui-tabs label="Small" size="sm">
  <ui-tab panel="a">Overview</ui-tab>
  <ui-tab panel="b">Parties</ui-tab>
</ui-tabs>
<ui-tabs label="Large" size="lg">
  <ui-tab panel="a">Overview</ui-tab>
  <ui-tab panel="b">Parties</ui-tab>
</ui-tabs>
<ui-tabs label="Contained, extra large" type="contained" size="xl">
  <ui-tab panel="a">Overview</ui-tab>
  <ui-tab panel="b">Parties</ui-tab>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Small" size="sm">…</UiTabs>
<UiTabs label="Large" size="lg">…</UiTabs>
<UiTabs label="Contained, extra large" type="contained" size="xl">…</UiTabs>
```

React + Tailwind:

```tsx
<Tabs size="sm">…</Tabs>
<Tabs size="lg">…</Tabs>
<Tabs type="contained" size="xl">…</Tabs>
```

The three strips above have no panels: tabs without a matching panel still select, they just show nothing.

## Icons

Put a 16px icon in a tab's `icon` slot (the `icon` prop in React + Tailwind). It follows the label and takes its colour. The label still names the tab.


HTML:

```html
<ui-tabs label="Contract">
  <ui-tab panel="document">Document <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M12.85 4.65l-3.5-3.5A.5.5 0 0 0 9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a.5.5 0 0 0-.15-.35ZM9 2.2 11.8 5H9ZM12 14H4V2h4v3a1 1 0 0 0 1 1h3Z" /></svg></ui-tab>
  <ui-tab panel="signers">Signers <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5 14h-1v-2.5A2.5 2.5 0 0 0 9.5 10h-3A2.5 2.5 0 0 0 4 12.5V15H3v-2.5A3.5 3.5 0 0 1 6.5 9h3a3.5 3.5 0 0 1 3.5 3.5Z" /></svg></ui-tab>
  <ui-tab panel="history" disabled>History <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.3 9L7.5 8.2V4h1v3.8l2.5 2.5Z" /></svg></ui-tab>
  <ui-tab-panel name="document">The signed PDF and its pages.</ui-tab-panel>
  <ui-tab-panel name="signers">Who signed, and when.</ui-tab-panel>
  <ui-tab-panel name="history">Every change, newest first.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
// documentIcon = <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="…" /></svg>, the same for the others
<UiTabs label="Contract">
  <UiTab panel="document">Document {documentIcon}</UiTab>
  <UiTab panel="signers">Signers {userIcon}</UiTab>
  <UiTab panel="history" disabled>History {timeIcon}</UiTab>
  …
</UiTabs>
```

React + Tailwind:

```tsx
// documentIcon = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="…" /></svg>, the same for the others
<Tabs>
  <TabList label="Contract">
    <Tab value="document" icon={documentIcon}>Document</Tab>
    <Tab value="signers" icon={userIcon}>Signers</Tab>
    <Tab value="history" icon={timeIcon} disabled>History</Tab>
  </TabList>
  …
</Tabs>
```

## Secondary labels

On contained tabs, `secondary-label` (`secondaryLabel`) adds a second, smaller line, such as a count. One secondary label makes every tab in the strip 64px tall.


HTML:

```html
<ui-tabs label="Contract review" type="contained">
  <ui-tab panel="new" secondary-label="(12)">New</ui-tab>
  <ui-tab panel="review" secondary-label="(4)">In review</ui-tab>
  <ui-tab panel="signed" secondary-label="(0)" disabled>Signed</ui-tab>
  <ui-tab panel="all">All</ui-tab>
  <ui-tab-panel name="new">Contracts waiting for a reviewer.</ui-tab-panel>
  <ui-tab-panel name="review">Contracts a reviewer has opened.</ui-tab-panel>
  <ui-tab-panel name="signed">Contracts both parties signed.</ui-tab-panel>
  <ui-tab-panel name="all">Every contract.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Contract review" type="contained">
  <UiTab panel="new" secondaryLabel="(12)">New</UiTab>
  <UiTab panel="review" secondaryLabel="(4)">In review</UiTab>
  <UiTab panel="signed" secondaryLabel="(0)" disabled>Signed</UiTab>
  <UiTab panel="all">All</UiTab>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs type="contained">
  <TabList label="Contract review">
    <Tab value="new" secondaryLabel="(12)">New</Tab>
    <Tab value="review" secondaryLabel="(4)">In review</Tab>
    <Tab value="signed" secondaryLabel="(0)" disabled>Signed</Tab>
    <Tab value="all">All</Tab>
  </TabList>
  …
</Tabs>
```

## Icon only

`icon-only` (`iconOnly`) shows just the icon in a square tab. `label` is then required: it names the tab and shows as its tooltip on hover and on keyboard focus. With `size="lg"` the icons grow to 20px.


HTML:

```html
<ui-tabs label="Contract views">
  <ui-tab panel="document" icon-only label="Document"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M12.85 4.65l-3.5-3.5A.5.5 0 0 0 9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a.5.5 0 0 0-.15-.35ZM9 2.2 11.8 5H9ZM12 14H4V2h4v3a1 1 0 0 0 1 1h3Z" /></svg></ui-tab>
  <ui-tab panel="signers" icon-only label="Signers"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5 14h-1v-2.5A2.5 2.5 0 0 0 9.5 10h-3A2.5 2.5 0 0 0 4 12.5V15H3v-2.5A3.5 3.5 0 0 1 6.5 9h3a3.5 3.5 0 0 1 3.5 3.5Z" /></svg></ui-tab>
  <ui-tab panel="history" icon-only label="History"><svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.3 9L7.5 8.2V4h1v3.8l2.5 2.5Z" /></svg></ui-tab>
  <ui-tab-panel name="document">The signed PDF and its pages.</ui-tab-panel>
  <ui-tab-panel name="signers">Who signed, and when.</ui-tab-panel>
  <ui-tab-panel name="history">Every change, newest first.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Contract views">
  <UiTab panel="document" iconOnly label="Document">{documentIcon}</UiTab>
  <UiTab panel="signers" iconOnly label="Signers">{userIcon}</UiTab>
  <UiTab panel="history" iconOnly label="History">{timeIcon}</UiTab>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs>
  <TabList label="Contract views">
    <Tab value="document" iconOnly label="Document" icon={documentIcon} />
    <Tab value="signers" iconOnly label="Signers" icon={userIcon} />
    <Tab value="history" iconOnly label="History" icon={timeIcon} />
  </TabList>
  …
</Tabs>
```

## Manual activation

By default the arrow keys select as they move (`activation="automatic"`). With `activation="manual"`, the arrows only move focus, and Enter or Space selects. Use it when a panel is slow to render or loads data.


HTML:

```html
<ui-tabs label="Reports" activation="manual">
  <ui-tab panel="month">This month</ui-tab>
  <ui-tab panel="quarter">This quarter</ui-tab>
  <ui-tab panel="year">This year</ui-tab>
  <ui-tab-panel name="month">Focus a tab, move with the arrow keys, then press Enter or Space.</ui-tab-panel>
  <ui-tab-panel name="quarter">The quarter's report loads only when you choose it.</ui-tab-panel>
  <ui-tab-panel name="year">The year's report loads only when you choose it.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Reports" activation="manual">
  <UiTab panel="month">This month</UiTab>
  <UiTab panel="quarter">This quarter</UiTab>
  <UiTab panel="year">This year</UiTab>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs activation="manual">
  <TabList label="Reports">
    <Tab value="month">This month</Tab>
    <Tab value="quarter">This quarter</Tab>
    <Tab value="year">This year</Tab>
  </TabList>
  …
</Tabs>
```

## An action at the end of the strip

The `end` slot (the `end` prop of `TabList` in React + Tailwind) puts content after the tabs, on the strip's line, for example a ghost button that adds a section.


HTML:

```html
<ui-tabs label="Contract sections">
  <ui-tab panel="terms">Terms</ui-tab>
  <ui-tab panel="payment">Payment</ui-tab>
  <ui-tab panel="annex">Annex</ui-tab>
  <ui-button slot="end" kind="ghost" size="md">Add section</ui-button>
  <ui-tab-panel name="terms">The terms both parties agreed to.</ui-tab-panel>
  <ui-tab-panel name="payment">Instalments and due dates.</ui-tab-panel>
  <ui-tab-panel name="annex">Extra documents.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Contract sections">
  <UiTab panel="terms">Terms</UiTab>
  <UiTab panel="payment">Payment</UiTab>
  <UiTab panel="annex">Annex</UiTab>
  <UiButton slot="end" kind="ghost" size="md">Add section</UiButton>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs>
  <TabList label="Contract sections" end={<Button kind="ghost" size="md">Add section</Button>}>
    <Tab value="terms">Terms</Tab>
    <Tab value="payment">Payment</Tab>
    <Tab value="annex">Annex</Tab>
  </TabList>
  …
</Tabs>
```

## Keep the current tab

`ui-tab-before-change` fires before the selection moves, with `detail.name` (the new tab) and `detail.previous`. Call `preventDefault()` to keep the current tab, for example while a form in it has unsaved changes. In React + Tailwind, keep `value` as it is in `onValueChange`.


HTML:

```html
<ui-checkbox id="tabs-dirty" label="The contract form has unsaved changes" checked></ui-checkbox>
<ui-tabs id="tabs-guard" label="Contract">
  <ui-tab panel="form">Form</ui-tab>
  <ui-tab panel="preview">Preview</ui-tab>
  <ui-tab-panel name="form">Edit the contract here.</ui-tab-panel>
  <ui-tab-panel name="preview">The contract as the counterparty will see it.</ui-tab-panel>
</ui-tabs>
<p><output id="tabs-guard-out"></output></p>

<script type="module">
  const dirty = document.getElementById('tabs-dirty');
  const tabs = document.getElementById('tabs-guard');
  const out = document.getElementById('tabs-guard-out');
  tabs.addEventListener('ui-tab-before-change', (event) => {
    out.value = '';
    if (!dirty.checked) return;
    event.preventDefault();
    out.value = `Save the form before you open "${event.detail.name}".`;
  });
</script>
```

React:

```tsx
import type { UiCheckbox as CheckboxElement } from '@purpurabog/ui';

const [dirty, setDirty] = useState(true);
const [message, setMessage] = useState('');

<UiCheckbox label="The contract form has unsaved changes" checked={dirty} onChange={(e) => setDirty((e.target as CheckboxElement).checked)} />
<UiTabs
  label="Contract"
  onUiTabBeforeChange={(e) => {
    setMessage(dirty ? `Save the form before you open "${e.detail.name}".` : '');
    if (dirty) e.preventDefault();
  }}
>
  <UiTab panel="form">Form</UiTab>
  <UiTab panel="preview">Preview</UiTab>
  …
</UiTabs>
<p><output>{message}</output></p>
```

React + Tailwind:

```tsx
// dirty and message as in React
const [tab, setTab] = useState('form');

<Checkbox label="The contract form has unsaved changes" checked={dirty} onChange={(e) => setDirty(e.target.checked)} />
<Tabs
  value={tab}
  onValueChange={(next) => {
    setMessage(dirty ? `Save the form before you open "${next}".` : '');
    if (!dirty) setTab(next);
  }}
>
  <TabList label="Contract">
    <Tab value="form">Form</Tab>
    <Tab value="preview">Preview</Tab>
  </TabList>
  …
</Tabs>
<p><output>{message}</output></p>
```

## Dismissable tabs

`dismissable` gives every tab a close button, and Delete closes the focused tab. The tab first fires a cancelable `ui-request-close` (`detail.name`); unless you prevent it, the tab is hidden and fires `ui-close`. A closed selected tab passes the selection to the first enabled tab, and focus moves to the tab now in its place. Not with `vertical`.

In React + Tailwind, `onTabCloseRequest` gets the tab's `value`: remove that tab from your list to close it.


HTML:

```html
<ui-tabs id="tabs-docs" label="Open documents" dismissable>
  <ui-tab panel="contract">Contract.pdf</ui-tab>
  <ui-tab panel="memo">Memo.docx</ui-tab>
  <ui-tab panel="notes">Notes</ui-tab>
  <ui-tab panel="archive" disabled>Archive</ui-tab>
  <ui-tab-panel name="contract">The × or Delete on the focused tab closes it.</ui-tab-panel>
  <ui-tab-panel name="memo">The legal team's memo.</ui-tab-panel>
  <ui-tab-panel name="notes">Your own notes.</ui-tab-panel>
  <ui-tab-panel name="archive">Archived copies.</ui-tab-panel>
</ui-tabs>
<p>Closed: <output id="tabs-docs-out"></output></p>

<script type="module">
  const tabs = document.getElementById('tabs-docs');
  const out = document.getElementById('tabs-docs-out');
  const closed = [];
  tabs.addEventListener('ui-close', (event) => {
    closed.push(event.detail.name);
    out.value = closed.join(', ');
  });
</script>
```

React:

```tsx
const [closed, setClosed] = useState<string[]>([]);

<UiTabs label="Open documents" dismissable onUiClose={(e) => setClosed((list) => [...list, e.detail.name])}>
  <UiTab panel="contract">Contract.pdf</UiTab>
  <UiTab panel="memo">Memo.docx</UiTab>
  <UiTab panel="notes">Notes</UiTab>
  <UiTab panel="archive" disabled>Archive</UiTab>
  …
</UiTabs>
<p>Closed: <output>{closed.join(', ')}</output></p>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState(['contract', 'memo', 'notes']);
const names: Record<string, string> = { contract: 'Contract.pdf', memo: 'Memo.docx', notes: 'Notes' };

<Tabs dismissable onTabCloseRequest={(value) => setOpen((list) => list.filter((v) => v !== value))}>
  <TabList label="Open documents">
    {open.map((value) => <Tab key={value} value={value}>{names[value]}</Tab>)}
  </TabList>
  {open.map((value) => <TabPanel key={value} value={value}>…</TabPanel>)}
</Tabs>
```

## Vertical tabs

`vertical` puts the tabs in a column beside the panels once the window is wider than 672px (42rem); on a narrower window they become contained tabs in a row. Labels wrap to two lines, then end in an ellipsis. `height` fixes the height: the tab list and the panels then scroll inside it.


HTML:

```html
<ui-tabs label="Settings" vertical height="320px">
  <ui-tab panel="profile">Profile</ui-tab>
  <ui-tab panel="approvals">Approval rules for contracts above the department's limit</ui-tab>
  <ui-tab panel="notifications">Notifications</ui-tab>
  <ui-tab panel="signatures">Signatures</ui-tab>
  <ui-tab panel="retention">Retention</ui-tab>
  <ui-tab panel="audit" disabled>Audit log</ui-tab>
  <ui-tab-panel name="profile"><ui-text-input label="Display name" value="Somchai K."></ui-text-input></ui-tab-panel>
  <ui-tab-panel name="approvals">Who approves a contract, by amount.</ui-tab-panel>
  <ui-tab-panel name="notifications">Email and in-app alerts.</ui-tab-panel>
  <ui-tab-panel name="signatures">Your saved signature.</ui-tab-panel>
  <ui-tab-panel name="retention">How long signed copies are kept.</ui-tab-panel>
  <ui-tab-panel name="audit">Who changed what.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
<UiTabs label="Settings" vertical height="320px">
  <UiTab panel="profile">Profile</UiTab>
  <UiTab panel="approvals">Approval rules for contracts above the department's limit</UiTab>
  <UiTab panel="notifications">Notifications</UiTab>
  …
  <UiTabPanel name="profile"><UiTextInput label="Display name" value="Somchai K." /></UiTabPanel>
  …
</UiTabs>
```

React + Tailwind:

```tsx
<Tabs vertical height="320px">
  <TabList label="Settings">
    <Tab value="profile">Profile</Tab>
    <Tab value="approvals">Approval rules for contracts above the department's limit</Tab>
    <Tab value="notifications">Notifications</Tab>
    …
  </TabList>
  <TabPanel value="profile"><TextInput label="Display name" defaultValue="Somchai K." /></TabPanel>
  …
</Tabs>
```

In the column, ↑ and ↓ move between the tabs, and the panels sit one layer up, so their fields keep their contrast.

## Many tabs

When the tabs don't fit, the strip scrolls. Previous and next buttons appear at its ends for the mouse; keyboard users have the arrow keys, so the buttons are no Tab stops and are hidden from screen readers.


HTML:

```html
<ui-tabs label="Months" style="max-width: 480px">
  <ui-tab panel="jan">January</ui-tab>
  <ui-tab panel="feb">February</ui-tab>
  <ui-tab panel="mar">March</ui-tab>
  <ui-tab panel="apr">April</ui-tab>
  <ui-tab panel="may">May</ui-tab>
  <ui-tab panel="jun">June</ui-tab>
  <ui-tab panel="jul">July</ui-tab>
  <ui-tab panel="aug">August</ui-tab>
  <ui-tab-panel name="jan">Contracts signed in January.</ui-tab-panel>
  <ui-tab-panel name="feb">Contracts signed in February.</ui-tab-panel>
  <ui-tab-panel name="mar">Contracts signed in March.</ui-tab-panel>
  <ui-tab-panel name="apr">Contracts signed in April.</ui-tab-panel>
  <ui-tab-panel name="may">Contracts signed in May.</ui-tab-panel>
  <ui-tab-panel name="jun">Contracts signed in June.</ui-tab-panel>
  <ui-tab-panel name="jul">Contracts signed in July.</ui-tab-panel>
  <ui-tab-panel name="aug">Contracts signed in August.</ui-tab-panel>
</ui-tabs>
```

React:

```tsx
// months = [{ value: 'jan', label: 'January' }, …]
<UiTabs label="Months" style={{ maxWidth: 480 }}>
  {months.map((m) => <UiTab key={m.value} panel={m.value}>{m.label}</UiTab>)}
  {months.map((m) => <UiTabPanel key={m.value} name={m.value}>Contracts signed in {m.label}.</UiTabPanel>)}
</UiTabs>
```

React + Tailwind:

```tsx
// months = [{ value: 'jan', label: 'January' }, …]
<Tabs className="max-w-[480px]">
  <TabList label="Months">
    {months.map((m) => <Tab key={m.value} value={m.value}>{m.label}</Tab>)}
  </TabList>
  {months.map((m) => <TabPanel key={m.value} value={m.value}>Contracts signed in {m.label}.</TabPanel>)}
</Tabs>
```

## Skeleton

While the page loads, `ui-tabs-skeleton` stands in for the strip: `tabs` bars of 160 × 40px (5 by default). It is hidden from screen readers.


HTML:

```html
<ui-tabs-skeleton tabs="4"></ui-tabs-skeleton>
```

React:

```tsx
import { UiTabsSkeleton } from '@purpurabog/ui/react';

<UiTabsSkeleton tabs={4} />
```

React + Tailwind:

```tsx
import { TabsSkeleton } from '@/components/ui/react-tw/tabs';

<TabsSkeleton tabs={4} />
```

On the web component, import it from `@purpurabog/ui/tabs-skeleton`.

## Accessibility

- The strip is a `tablist` named by `label`; each tab is a `tab` with `aria-selected` and `aria-controls`, and each panel a `tabpanel` labelled by its tab.
- One Tab stop: Tab reaches the selected tab, then moves into the panel. ← and → move between tabs and wrap (↑ and ↓ in a vertical column); Home and End jump to the first and last. Disabled tabs are skipped.
- A panel with nothing focusable inside becomes a Tab stop itself, so keyboard users can reach and scroll its text.
- Icon-only tabs need `label`: it is the tab's name and its tooltip.
- In dismissable tabs the close button is hidden from screen readers; each tab announces Delete as its shortcut (`aria-keyshortcuts`).

Unstyled React parts with the same behaviour: [Headless Tabs](https://parntengza.github.io/kanok-ui-docs/en/headless-tabs/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-tabs>` · React `UiTabs`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `value` | `value` | `string` | `''` | Name of the active panel. Defaults to the first enabled tab. |
| `label` | `label` | `string` | `''` | Accessible name for the tab strip, e.g. "Product details". |
| `activation` | `activation` | `TabsActivation` | `'automatic'` | `automatic` (Carbon's name; `auto` is still accepted) or `manual`. |
| `type` | `type` | `TabsType` | `'line'` | `line` (default) or `contained` (Carbon cds-tabs `type="contained"`). |
| `size` | `size` | `TabsSize \| undefined` |  | Tab height (Carbon `size`): sm 32px, md 40px, lg 48px, xl 64px (contained only); unset = md for line, lg for contained. |
| `full-width` | `fullWidth` | `boolean` | `false` | With `type="contained"`: the tabs share the full width in equal columns (Carbon `full-width` / `fullWidth`). |
| `vertical` | `vertical` | `boolean` | `false` | Carbon `TabsVertical`: the tabs in a column beside the panels from md up (contained tabs in a row below). |
| `height` | `height` | `string` | `''` | A fixed height for vertical tabs (Carbon `height`), e.g. `"400px"`: the tab list and the panels then scroll. |
| `dismissable` | `dismissable` | `boolean` | `false` | A close button on every tab, and Delete closes the focused tab (Carbon `dismissable`); not with `vertical`. |

#### Methods

| Method | Description |
|---|---|
| `focus(options)` | Focus the active tab (the tablist's tab stop). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-tab-change` | `onUiTabChange` | detail: { name } after the user selects a tab |
| `ui-tab-before-change` | `onUiTabBeforeChange` | Cancelable; detail: { name, previous }. preventDefault() keeps the current tab (e.g. unsaved changes). |
| `ui-request-close` | `onUiRequestClose` | From a `<ui-tab>` of dismissable tabs (close button or Delete); cancelable; detail: { name }. preventDefault() keeps the tab. |
| `ui-close` | `onUiClose` | From a `<ui-tab>` after it closed (hidden); detail: { name } |

#### Slots

| Slot | Description |
|---|---|
| `nav` | `<ui-tab>` elements (assigned automatically) |
| (default) | `<ui-tab-panel>` elements |
| `end` | Content at the end of the strip, e.g. an action button |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The strip holding the tab list and scroll buttons |
| `tablist` | The role=tablist container (tabs themselves are light-DOM `<ui-tab>`s: style the element) |
| `scroll-button` | The overflow scroll buttons |
| `end` | Wrapper of the `end` slot |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tabs-track` |  | `box-shadow` of the tab strip, for one line under every tab (default none; Kanok: a 1px hairline) |
| `--ui-tabs-gap` |  | Gap between line tabs (default 1px; Kanok: 4px) |
| `--ui-tabs-contained-height` |  | Tab height of `type="contained"` (default 48px; Kanok: 32px) |
| `--ui-tabs-contained-track` |  | / --ui-tabs-contained-padding / --ui-tabs-contained-radius / --ui-tabs-contained-gap - The track behind contained tabs (default none: Carbon's full-width strip; Kanok: a grey rounded track) |
| `--ui-tabs-contained-flex` |  | `flex` of the contained strip (default 1, full width; Kanok: hugs the tabs) |
| `--ui-tab-vertical-background` |  | The vertical tab list's fill (default the layer; on `<ui-tab>` with the other --ui-tab-vertical-* settings) |

### `<ui-tab>` · React `UiTab`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `hidden` |  |  |  |  |
| `panel` | `panel` | `string` | `''` |  |
| `selected` | `selected` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `secondary-label` | `secondaryLabel` | `string` | `''` | A second line under the label (Carbon `secondaryLabel`); contained tabs only. |
| `icon-only` | `iconOnly` | `boolean` | `false` | Only the `icon` slot shows (Carbon `IconTab`); `label` names the tab and is its tooltip. |
| `label` | `label` | `string` | `''` | Accessible name and tooltip of an `icon-only` tab — required with it. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-request-close` | `onUiRequestClose` | Dismissable tabs: its close button or Delete; cancelable; detail: { name } (its `panel`) |
| `ui-close` | `onUiClose` | Dismissable tabs: after it closed (now `hidden`); detail: { name } |

#### Slots

| Slot | Description |
|---|---|
| (default) | Tab label |
| `icon` | A 16px icon (20px in icon-only tabs of `size="lg"`), coloured like the label |

#### CSS parts

| Part | Description |
|---|---|
| `secondary-label` | The second line of a contained tab |
| `close-button` | The close button of a dismissable tab (no tab stop: Delete closes the focused tab) |
| `tooltip` | The `<ui-tooltip>` of an `icon-only` tab |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tab-line` |  | The underline of every tab (default `2px solid --ui-hairline`; Kanok: transparent, the strip draws one line) |
| `--ui-tab-selected-line` |  | The selected tab's mark (default `--ui-border-interactive`, as in Kanok) |
| `--ui-tab-hover-line` |  | Underline colour on hover (default `--ui-ink-subtle`) |
| `--ui-tab-disabled-line` |  | Underline colour when disabled (default `--ui-hairline`) |
| `--ui-tab-background` |  | Fill of a line tab (default `--ui-canvas`; Kanok: transparent) |
| `--ui-tab-contained-background` |  | / --ui-tab-contained-hover / --ui-tab-contained-selected - Fills of a contained tab at rest, hovered and selected (Carbon: layer-accent, its hover, the layer) |
| `--ui-tab-contained-selected-shadow` |  | `box-shadow` of the selected contained tab (default: a 2px top bar in `--ui-tab-selected-line`) |
| `--ui-tab-contained-radius` |  | Corner radius of a contained tab (default 0; Kanok: 6px) |
| `--ui-tab-contained-divider` |  | The 1px line between contained tabs (default `--ui-hairline-strong`; Kanok: none) |
| `--ui-tab-focus-radius` |  | Corner radius of the focus ring (default 0; Kanok: 6px) |
| `--ui-tab-focus-offset` |  | / --ui-tab-contained-focus-offset - Where the focus ring sits, line and contained tabs (default -2px, over the selected underline; Kanok: -5px, clear of it, and 1px around the chip) |
| `--ui-tab-vertical-background` |  | / --ui-tab-vertical-selected / --ui-tab-vertical-bar / --ui-tab-vertical-hover-bar / --ui-tab-vertical-divider / --ui-tab-vertical-inset / --ui-tab-vertical-radius - Vertical tabs: fill, the chosen tab's fill, the side bars, the rule between tabs, inset and corners (default Carbon's layer fill with bars and rules; Kanok: inset rounded rows, the chosen one tinted) |
| `--ui-tab-vertical-mark` |  | The chosen vertical tab's 3px start bar (default `--ui-tab-selected-line`; Kanok: none, the tint alone) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |

### `<ui-tab-panel>` · React `UiTabPanel`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `name` | `name` | `string` | `''` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | Panel content |

### `<ui-tabs-skeleton>` · React `UiTabsSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `tabs` | `tabs` | `number` | `5` |  |

#### CSS parts

| Part | Description |
|---|---|
| `tab` | Each tab |


