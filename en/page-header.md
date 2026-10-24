# Page header

The page header is the top of a page in a product (Carbon `PageHeader`, from Carbon for IBM Products): a breadcrumb bar, the page title with its actions and a short text, and a tab bar. It sticks as the page scrolls: the title and text slide under the breadcrumb bar, which stays, the title appears as the last crumb, and the page's main action moves into the bar. Scroll the box below to see it.


HTML:

```html
<div style="height: 420px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-breadcrumb>
      <ui-breadcrumb>
        <ui-breadcrumb-item href="#page-header-contracts">Contracts</ui-breadcrumb-item>
        <ui-breadcrumb-item href="#page-header-leases">Leases</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>Warehouse lease, Bang Na</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
      <ui-button slot="content-actions" size="md">Send for signature</ui-button>
    </ui-page-header-breadcrumb>
    <ui-page-header-content heading="Warehouse lease, Bang Na">
      <ui-tag slot="contextual-actions" type="blue" size="lg">Draft</ui-tag>
      <ui-button slot="page-actions" size="md">Send for signature</ui-button>
      <ui-page-header-content-text subtitle="CT-2026-0142">A three-year lease of warehouse 4 with Siam Logistics Co., Ltd., starting 1 January 2027.</ui-page-header-content-text>
    </ui-page-header-content>
    <ui-page-header-tabs>
      <ui-tabs label="Contract sections">
        <ui-tab panel="page-header-terms">Terms</ui-tab>
        <ui-tab panel="page-header-parties">Parties</ui-tab>
        <ui-tab panel="page-header-history">History</ui-tab>
      </ui-tabs>
      <ui-page-header-scroller slot="scroller"></ui-page-header-scroller>
    </ui-page-header-tabs>
  </ui-page-header>
  <div style="padding: 16px">
    <p>Rent is due on the first working day of each month.</p>
    <p>The tenant insures the goods stored in the warehouse.</p>
    <p>Either party may end the lease with six months' notice.</p>
    <p>The deposit is three months' rent, returned within 30 days of the end.</p>
    <p>Repairs above 50,000 baht need the landlord's written approval.</p>
    <p>Disputes go to the courts of Bangkok.</p>
    <p>This contract is written in Thai and English; the Thai text prevails.</p>
  </div>
</div>
```

React:

```tsx
<UiPageHeader>
  <UiPageHeaderBreadcrumb>
    <UiBreadcrumb>
      <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
      <UiBreadcrumbItem href="/contracts/leases">Leases</UiBreadcrumbItem>
      <UiPageHeaderTitleBreadcrumb>Warehouse lease, Bang Na</UiPageHeaderTitleBreadcrumb>
    </UiBreadcrumb>
    <UiButton slot="content-actions" size="md">Send for signature</UiButton>
  </UiPageHeaderBreadcrumb>
  <UiPageHeaderContent heading="Warehouse lease, Bang Na">
    <UiTag slot="contextual-actions" type="blue" size="lg">Draft</UiTag>
    <UiButton slot="page-actions" size="md">Send for signature</UiButton>
    <UiPageHeaderContentText subtitle="CT-2026-0142">A three-year lease of warehouse 4 …</UiPageHeaderContentText>
  </UiPageHeaderContent>
  <UiPageHeaderTabs>
    <UiTabs label="Contract sections">
      <UiTab panel="terms">Terms</UiTab>
      <UiTab panel="parties">Parties</UiTab>
      <UiTab panel="history">History</UiTab>
    </UiTabs>
    <UiPageHeaderScroller slot="scroller" />
  </UiPageHeaderTabs>
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader>
  <PageHeaderBreadcrumbBar contentActions={<Button size="md">Send for signature</Button>}>
    <Breadcrumb>
      <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
      <BreadcrumbItem href="/contracts/leases">Leases</BreadcrumbItem>
      <PageHeaderTitleBreadcrumb>Warehouse lease, Bang Na</PageHeaderTitleBreadcrumb>
    </Breadcrumb>
  </PageHeaderBreadcrumbBar>
  <PageHeaderContent
    heading="Warehouse lease, Bang Na"
    contextualActions={<Tag type="blue" size="lg">Draft</Tag>}
    pageActions={<Button size="md">Send for signature</Button>}
  >
    <PageHeaderContentText subtitle="CT-2026-0142">A three-year lease of warehouse 4 …</PageHeaderContentText>
  </PageHeaderContent>
  <PageHeaderTabBar scroller={<PageHeaderScrollButton />}>
    <Tabs defaultValue="terms">
      <TabList label="Contract sections">
        <Tab value="terms">Terms</Tab>
        <Tab value="parties">Parties</Tab>
        <Tab value="history">History</Tab>
      </TabList>
    </Tabs>
  </PageHeaderTabBar>
</PageHeader>
```

The header sticks inside the box that scrolls it: the page, or the nearest element with `overflow: auto` or `scroll`. Each preview on this page sits in its own scrolling box.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/page-header
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-page-header
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/page-header.json
#    to its target:
#    components/ui/primitives/page-header/page-header-actions.ts
#    components/ui/primitives/page-header/page-header-breadcrumb.ts
#    components/ui/primitives/page-header/page-header-content-text.ts
#    components/ui/primitives/page-header/page-header-content.ts
#    components/ui/primitives/page-header/page-header-hero-image.ts
#    components/ui/primitives/page-header/page-header-overflow-shared.ts
#    components/ui/primitives/page-header/page-header-overflow.ts
#    components/ui/primitives/page-header/page-header-scroller.ts
#    components/ui/primitives/page-header/page-header-shared.ts
#    components/ui/primitives/page-header/page-header-tabs.ts
#    components/ui/primitives/page-header/page-header-tags.ts
#    components/ui/primitives/page-header/page-header-title-breadcrumb.ts
#    components/ui/primitives/page-header/page-header.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    breadcrumb, button, core-overflow, icon-button, menu, modal, overflow-menu, popover, search, shared-element, shared-events, shared-field, shared-localize, tag, truncated-text, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-page-header.json
#    to its target:
#    components/ui/react-tw/page-header.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-overflow, tw-button, tw-dom, tw-i18n, tw-icon-button, tw-menu, tw-modal, tw-popover, tw-refs, tw-search, tw-tag, tw-theme, tw-truncated-text, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it

In React, import a wrapper for each element (`UiPageHeader`, `UiPageHeaderBreadcrumb`, `UiPageHeaderContent` …) from `@purpurabog/ui/react`, as in the React tabs here.


HTML:

```html
<script type="module">import '@purpurabog/ui/page-header';</script>

<ui-page-header>
  <ui-page-header-breadcrumb>
    <ui-breadcrumb>
      <ui-breadcrumb-item href="/contracts">Contracts</ui-breadcrumb-item>
      <ui-page-header-title-breadcrumb>Warehouse lease</ui-page-header-title-breadcrumb>
    </ui-breadcrumb>
  </ui-page-header-breadcrumb>
  <ui-page-header-content heading="Warehouse lease"></ui-page-header-content>
</ui-page-header>
```

React:

```tsx
import { UiBreadcrumb, UiBreadcrumbItem, UiPageHeader, UiPageHeaderBreadcrumb, UiPageHeaderTitleBreadcrumb, UiPageHeaderContent } from '@purpurabog/ui/react';

<UiPageHeader>
  <UiPageHeaderBreadcrumb>
    <UiBreadcrumb>
      <UiBreadcrumbItem href="/contracts">Contracts</UiBreadcrumbItem>
      <UiPageHeaderTitleBreadcrumb>Warehouse lease</UiPageHeaderTitleBreadcrumb>
    </UiBreadcrumb>
  </UiPageHeaderBreadcrumb>
  <UiPageHeaderContent heading="Warehouse lease" />
</UiPageHeader>
```

React + Tailwind:

```tsx
import { PageHeader, PageHeaderBreadcrumbBar, PageHeaderContent, PageHeaderTitleBreadcrumb } from '@/components/ui/react-tw/page-header';
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/react-tw/breadcrumb';

<PageHeader>
  <PageHeaderBreadcrumbBar>
    <Breadcrumb>
      <BreadcrumbItem href="/contracts">Contracts</BreadcrumbItem>
      <PageHeaderTitleBreadcrumb>Warehouse lease</PageHeaderTitleBreadcrumb>
    </Breadcrumb>
  </PageHeaderBreadcrumbBar>
  <PageHeaderContent heading="Warehouse lease" />
</PageHeader>
```

## The parts

| Web component | React + Tailwind | What it is |
|---|---|---|
| `<ui-page-header>` | `PageHeader` | The header: a layer-01 surface with a line below. Holds the parts and makes them stick. |
| `<ui-page-header-breadcrumb>` | `PageHeaderBreadcrumbBar` | The 40px bar on top: an icon, the [breadcrumb](https://parntengza.github.io/kanok-ui-docs/en/breadcrumb/) trail, and actions at the end. It stays when the rest scrolls. |
| `<ui-page-header-title-breadcrumb>` | `PageHeaderTitleBreadcrumb` | The page title as the last crumb. It shows once the title has scrolled away. |
| `<ui-page-header-content>` | `PageHeaderContent` | The title row: an icon, the title, contextual actions next to it and page actions at the end. |
| `<ui-page-header-content-text>` | `PageHeaderContentText` | A subtitle and a short text under the title, at most 640px wide. |
| `<ui-page-header-hero-image>` | `PageHeaderHeroImage` | An image beside the content. |
| `<ui-page-header-tabs>` | `PageHeaderTabBar` | The bar of [tabs](https://parntengza.github.io/kanok-ui-docs/en/tabs/), with tags and the collapse button at the end. |
| `<ui-page-header-scroller>` | `PageHeaderScrollButton` | The button that collapses or expands the header. |
| `<ui-page-header-actions>` | `PageHeaderActions` | Page actions in a row; those that don't fit go into a "⋮" menu. |
| `<ui-page-header-tags>` | `PageHeaderTags` | Tags in one line; those that don't fit go behind a "+N" tag. |

Use only the parts you need, in this order: breadcrumb bar, content, tab bar.

## Breadcrumb bar only

A page without a title area, such as a list page, can have just the bar. Without a `<ui-page-header-content>`, the title crumb always shows.


HTML:

```html
<div style="height: 120px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-breadcrumb>
      <ui-breadcrumb>
        <ui-breadcrumb-item href="#page-header-home">Home</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>All contracts</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
    </ui-page-header-breadcrumb>
  </ui-page-header>
</div>
```

React:

```tsx
<UiPageHeader>
  <UiPageHeaderBreadcrumb>
    <UiBreadcrumb>
      <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
      <UiPageHeaderTitleBreadcrumb>All contracts</UiPageHeaderTitleBreadcrumb>
    </UiBreadcrumb>
  </UiPageHeaderBreadcrumb>
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader>
  <PageHeaderBreadcrumbBar>
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <PageHeaderTitleBreadcrumb>All contracts</PageHeaderTitleBreadcrumb>
    </Breadcrumb>
  </PageHeaderBreadcrumbBar>
</PageHeader>
```

## Title, subtitle and text

`heading` is the page title, in Carbon's heading-04 (28px), at most 640px wide and two lines; a longer title ends in "…" and shows whole in a tooltip. `<ui-page-header-content-text>` adds a `subtitle` and a short text under it. An icon goes in the content's `icon` slot.


HTML:

```html
<div style="height: 260px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-content heading="Procurement approvals for the northern region offices, fiscal year 2027">
      <svg slot="icon" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" style="fill: currentColor"><path d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM12 4h8v4h-8zm13 24H7V7h3v3h12V7h3z" /></svg>
      <ui-page-header-content-text subtitle="42 requests waiting">Requests above 200,000 baht need a second approver from Finance.</ui-page-header-content-text>
    </ui-page-header-content>
  </ui-page-header>
</div>
```

React:

```tsx
import { Report as ReportIcon } from '@carbon/icons-react';

<UiPageHeader>
  <UiPageHeaderContent heading="Procurement approvals for the northern region offices, fiscal year 2027">
    <ReportIcon slot="icon" />
    <UiPageHeaderContentText subtitle="42 requests waiting">Requests above 200,000 baht need a second approver from Finance.</UiPageHeaderContentText>
  </UiPageHeaderContent>
</UiPageHeader>
```

React + Tailwind:

```tsx
import { Report as ReportIcon } from '@carbon/icons-react';

<PageHeader>
  <PageHeaderContent heading="Procurement approvals for the northern region offices, fiscal year 2027" icon={<ReportIcon />}>
    <PageHeaderContentText subtitle="42 requests waiting">Requests above 200,000 baht need a second approver from Finance.</PageHeaderContentText>
  </PageHeaderContent>
</PageHeader>
```

`ReportIcon` is Carbon's `Report` icon from `@carbon/icons-react` (see [Icons](https://parntengza.github.io/kanok-ui-docs/en/icons/)); the content shows it at 32px.

## Contextual and page actions

`slot="contextual-actions"` sits right after the title: a status [tag](https://parntengza.github.io/kanok-ui-docs/en/tag/), for example. With it, the title keeps to one line. `slot="page-actions"` sits at the end of the title row: the page's main buttons. When the page actions scroll under the bar, they fade out and the bar's `slot="content-actions"` fades in, so put the same main action there too.


HTML:

```html
<div style="height: 300px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-breadcrumb>
      <ui-breadcrumb>
        <ui-breadcrumb-item href="#page-header-requests">Purchase requests</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>PR-2026-0815</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
      <ui-button slot="content-actions" size="md">Approve</ui-button>
    </ui-page-header-breadcrumb>
    <ui-page-header-content heading="PR-2026-0815">
      <ui-tag slot="contextual-actions" type="purple" size="lg">Waiting for you</ui-tag>
      <div slot="page-actions" style="display: flex">
        <ui-button kind="secondary" size="md">Return</ui-button>
        <ui-button size="md">Approve</ui-button>
      </div>
      <ui-page-header-content-text>Office chairs for the Chiang Mai branch, 48,500 baht.</ui-page-header-content-text>
    </ui-page-header-content>
  </ui-page-header>
  <div style="padding: 16px">
    <p>Requested by Somchai K. on 2 October.</p>
    <p>Budget line: 4410 Office equipment.</p>
    <p>Supplier: Northern Furniture Co., Ltd.</p>
    <p>Delivery within 14 days of the order.</p>
    <p>Scroll on: the Approve button moves into the bar.</p>
  </div>
</div>
```

React:

```tsx
<UiPageHeader>
  <UiPageHeaderBreadcrumb>
    <UiBreadcrumb>
      <UiBreadcrumbItem href="/requests">Purchase requests</UiBreadcrumbItem>
      <UiPageHeaderTitleBreadcrumb>PR-2026-0815</UiPageHeaderTitleBreadcrumb>
    </UiBreadcrumb>
    <UiButton slot="content-actions" size="md" onClick={approve}>Approve</UiButton>
  </UiPageHeaderBreadcrumb>
  <UiPageHeaderContent heading="PR-2026-0815">
    <UiTag slot="contextual-actions" type="purple" size="lg">Waiting for you</UiTag>
    <div slot="page-actions" style={{ display: 'flex' }}>
      <UiButton kind="secondary" size="md">Return</UiButton>
      <UiButton size="md" onClick={approve}>Approve</UiButton>
    </div>
    <UiPageHeaderContentText>Office chairs for the Chiang Mai branch, 48,500 baht.</UiPageHeaderContentText>
  </UiPageHeaderContent>
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader>
  <PageHeaderBreadcrumbBar contentActions={<Button size="md" onClick={approve}>Approve</Button>}>
    <Breadcrumb>
      <BreadcrumbItem href="/requests">Purchase requests</BreadcrumbItem>
      <PageHeaderTitleBreadcrumb>PR-2026-0815</PageHeaderTitleBreadcrumb>
    </Breadcrumb>
  </PageHeaderBreadcrumbBar>
  <PageHeaderContent
    heading="PR-2026-0815"
    contextualActions={<Tag type="purple" size="lg">Waiting for you</Tag>}
    pageActions={
      <div className="flex">
        <Button kind="secondary" size="md">Return</Button>
        <Button size="md" onClick={approve}>Approve</Button>
      </div>
    }
  >
    <PageHeaderContentText>Office chairs for the Chiang Mai branch, 48,500 baht.</PageHeaderContentText>
  </PageHeaderContent>
</PageHeader>
```

The bar's content actions show only from 672px wide (`md`); on a phone, the bar keeps just the trail and its page actions.

## Actions that overflow

Put a page's icon buttons in `<ui-page-header-actions>`, in the bar's or the content's `slot="page-actions"`. The buttons that don't fit go, from the end, into a "⋮" menu; choosing one there clicks its button. Each button's `label` (else its text) names it in the menu. Narrow the box with the slider to see it.


HTML:

```html
<div id="page-header-actions-box" style="max-width: 100%; height: 120px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-breadcrumb>
      <ui-breadcrumb>
        <ui-breadcrumb-item href="#page-header-reports">Reports</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>Spending by department</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
      <ui-page-header-actions slot="page-actions">
        <ui-icon-button id="page-header-download" kind="ghost" size="md" label="Download"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 7 12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12 13 7zM13 12v2H3v-2H2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2z" /></svg></ui-icon-button>
        <ui-icon-button id="page-header-share" kind="ghost" size="md" label="Share"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M11 10a2 2 0 0 0-1.6.8L6 8.9a2.1 2.1 0 0 0 0-1.8l3.4-1.9A2 2 0 1 0 9 4a2.1 2.1 0 0 0 0 .5L5.5 6.4a2 2 0 1 0 0 3.2L9 11.5a2.1 2.1 0 0 0 0 .5 2 2 0 1 0 2-2z" /></svg></ui-icon-button>
        <ui-icon-button id="page-header-print" kind="ghost" size="md" label="Print"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 5h-1V2H4v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v2h8v-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM5 3h6v2H5zm6 10H5V9h6zm2-2h-1V8H4v3H3V6h10z" /></svg></ui-icon-button>
      </ui-page-header-actions>
    </ui-page-header-breadcrumb>
  </ui-page-header>
</div>
<ui-slider id="page-header-actions-width" label="Box width (%)" min="30" max="100" value="100"></ui-slider>
<p>Clicked: <output id="page-header-actions-out"></output></p>

<script type="module">
  const box = document.getElementById('page-header-actions-box');
  const out = document.getElementById('page-header-actions-out');
  document.getElementById('page-header-actions-width').addEventListener('input', (event) => (box.style.maxWidth = `${event.target.value}%`));
  for (const id of ['page-header-download', 'page-header-share', 'page-header-print']) {
    const button = document.getElementById(id);
    button.addEventListener('click', () => (out.value = button.label));
  }
</script>
```

React:

```tsx
import { Download as DownloadIcon, Printer as PrinterIcon, Share as ShareIcon } from '@carbon/icons-react';

<UiPageHeader>
  <UiPageHeaderBreadcrumb>
    <UiBreadcrumb>
      <UiBreadcrumbItem href="/reports">Reports</UiBreadcrumbItem>
      <UiPageHeaderTitleBreadcrumb>Spending by department</UiPageHeaderTitleBreadcrumb>
    </UiBreadcrumb>
    <UiPageHeaderActions slot="page-actions">
      <UiIconButton kind="ghost" size="md" label="Download" onClick={download}><DownloadIcon /></UiIconButton>
      <UiIconButton kind="ghost" size="md" label="Share" onClick={share}><ShareIcon /></UiIconButton>
      <UiIconButton kind="ghost" size="md" label="Print" onClick={print}><PrinterIcon /></UiIconButton>
    </UiPageHeaderActions>
  </UiPageHeaderBreadcrumb>
</UiPageHeader>
```

React + Tailwind:

```tsx
import { Download as DownloadIcon, Printer as PrinterIcon, Share as ShareIcon } from '@carbon/icons-react';

<PageHeader>
  <PageHeaderBreadcrumbBar
    pageActions={
      <PageHeaderActions>
        <IconButton kind="ghost" size="md" label="Download" onClick={download}><DownloadIcon /></IconButton>
        <IconButton kind="ghost" size="md" label="Share" onClick={share}><ShareIcon /></IconButton>
        <IconButton kind="ghost" size="md" label="Print" onClick={print}><PrinterIcon /></IconButton>
      </PageHeaderActions>
    }
  >
    <Breadcrumb>
      <BreadcrumbItem href="/reports">Reports</BreadcrumbItem>
      <PageHeaderTitleBreadcrumb>Spending by department</PageHeaderTitleBreadcrumb>
    </Breadcrumb>
  </PageHeaderBreadcrumbBar>
</PageHeader>
```

`overflow-label` (`overflowLabel`) names the "⋮" menu; it is "More actions" in the page language by default.

## Tabs and tags

The tab bar holds a [tabs](https://parntengza.github.io/kanok-ui-docs/en/tabs/) strip, then `slot="tags"` at its end, 40% wide. `<ui-page-header-tags>` takes its `tags` as data (a JSON attribute, or the property) and shows them on one line; the ones that don't fit go behind a "+N" tag that opens them in a popover. Past ten hidden tags, the popover offers "View all tags", a dialog with a search. A dismissible tag removes itself and fires `ui-tag-dismiss` with `{ tag, index }`.


HTML:

```html
<div style="height: 160px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-content heading="Supplier: Siam Logistics"></ui-page-header-content>
    <ui-page-header-tabs>
      <ui-tabs label="Supplier sections">
        <ui-tab panel="page-header-overview">Overview</ui-tab>
        <ui-tab panel="page-header-contracts">Contracts</ui-tab>
        <ui-tab panel="page-header-invoices">Invoices</ui-tab>
      </ui-tabs>
      <ui-page-header-tags id="page-header-tags" slot="tags" tags='[
        {"text": "Preferred", "type": "green"},
        {"text": "Bangkok", "type": "blue"},
        {"text": "Transport", "type": "cyan"},
        {"text": "Warehousing", "type": "teal"},
        {"text": "ISO 9001", "type": "purple", "dismissible": true},
        {"text": "Net 30", "type": "gray", "dismissible": true}
      ]'></ui-page-header-tags>
    </ui-page-header-tabs>
  </ui-page-header>
</div>
<p>Dismissed: <output id="page-header-tags-out"></output></p>

<script type="module">
  const tags = document.getElementById('page-header-tags');
  const out = document.getElementById('page-header-tags-out');
  tags.addEventListener('ui-tag-dismiss', (event) => (out.value = event.detail.tag.text));
</script>
```

React:

```tsx
const tags = [
  { text: 'Preferred', type: 'green' },
  { text: 'Bangkok', type: 'blue' },
  { text: 'Transport', type: 'cyan' },
  { text: 'Warehousing', type: 'teal' },
  { text: 'ISO 9001', type: 'purple', dismissible: true },
  { text: 'Net 30', type: 'gray', dismissible: true },
];

<UiPageHeader>
  <UiPageHeaderContent heading="Supplier: Siam Logistics" />
  <UiPageHeaderTabs>
    <UiTabs label="Supplier sections">
      <UiTab panel="overview">Overview</UiTab>
      <UiTab panel="contracts">Contracts</UiTab>
      <UiTab panel="invoices">Invoices</UiTab>
    </UiTabs>
    <UiPageHeaderTags slot="tags" tags={tags} onUiTagDismiss={(e) => console.log(e.detail.tag.text)} />
  </UiPageHeaderTabs>
</UiPageHeader>
```

React + Tailwind:

```tsx
const [tags, setTags] = useState<PageHeaderTagItem[]>([
  { text: 'Preferred', type: 'green' },
  { text: 'Bangkok', type: 'blue' },
  { text: 'Transport', type: 'cyan' },
  { text: 'Warehousing', type: 'teal' },
  { text: 'ISO 9001', type: 'purple', dismissible: true },
  { text: 'Net 30', type: 'gray', dismissible: true },
]);

<PageHeader>
  <PageHeaderContent heading="Supplier: Siam Logistics" />
  <PageHeaderTabBar tags={<PageHeaderTags tags={tags} onDismiss={(tag) => setTags((all) => all.filter((t) => t !== tag))} />}>
    <Tabs defaultValue="overview">
      <TabList label="Supplier sections">
        <Tab value="overview">Overview</Tab>
        <Tab value="contracts">Contracts</Tab>
        <Tab value="invoices">Invoices</Tab>
      </TabList>
    </Tabs>
  </PageHeaderTabBar>
</PageHeader>
```

React + Tailwind's `PageHeaderTags` doesn't remove a dismissed tag itself: `onDismiss` tells you, and you take it out of `tags`. The tab panels go below the header, in the page.

## Collapse and expand

`<ui-page-header-scroller>` in the tab bar's `slot="scroller"` is a ghost button with a chevron. It scrolls the page until the content sits just under the breadcrumb bar, or back to the top once it has. Its name and tooltip say "Collapse" or "Expand", in the page language; `collapse-text` and `expand-text` change them.


HTML:

```html
<div style="height: 320px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-breadcrumb>
      <ui-breadcrumb>
        <ui-breadcrumb-item href="#page-header-departments">Departments</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>Legal</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
    </ui-page-header-breadcrumb>
    <ui-page-header-content heading="Legal">
      <ui-page-header-content-text subtitle="12 people">Contracts, disputes and company registration.</ui-page-header-content-text>
    </ui-page-header-content>
    <ui-page-header-tabs>
      <ui-tabs label="Department sections">
        <ui-tab panel="page-header-people">People</ui-tab>
        <ui-tab panel="page-header-budget">Budget</ui-tab>
      </ui-tabs>
      <ui-page-header-scroller slot="scroller" collapse-text="Hide the department summary" expand-text="Show the department summary"></ui-page-header-scroller>
    </ui-page-header-tabs>
  </ui-page-header>
  <div style="padding: 16px">
    <p>Malee S., head of department</p>
    <p>Somchai K., contracts</p>
    <p>Nida P., contracts</p>
    <p>Anan W., disputes</p>
    <p>Pim R., company registration</p>
    <p>Kittipong T., compliance</p>
    <p>Suda C., paralegal</p>
    <p>Wichai B., paralegal</p>
  </div>
</div>
```

React:

```tsx
<UiPageHeader>
  …
  <UiPageHeaderTabs>
    <UiTabs label="Department sections">…</UiTabs>
    <UiPageHeaderScroller slot="scroller" collapseText="Hide the department summary" expandText="Show the department summary" />
  </UiPageHeaderTabs>
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader>
  …
  <PageHeaderTabBar scroller={<PageHeaderScrollButton collapseText="Hide the department summary" expandText="Show the department summary" />}>
    <Tabs defaultValue="people">…</Tabs>
  </PageHeaderTabBar>
</PageHeader>
```

`ui-page-header-state` fires on `<ui-page-header>` (it doesn't bubble) each time the header's `state` changes: `fullyCollapsed`, `titleClipped`, `contentActionsClipped`. React + Tailwind's `PageHeader` has `onContentFullyCollapsed`, `onTitleClipped` and `onContentActionsClipped` instead. `disable-sticky-tab-bar` (`disableStickyTabBar`) on the tab bar lets the whole header scroll away with the page, as Carbon's `disableStickyTabBar`: the breadcrumb bar is then fixed at the top of the window, full width, so use it for a header at the top of the page.

## Hero image

`<ui-page-header-hero-image>` holds an `<img>` (or `<picture>`) beside the content, cropped to 3:2, or 2:1 from 1056px (`lg`). Carbon lays it out with a [grid](https://parntengza.github.io/kanok-ui-docs/en/grid/): the bar and the content in one half, the image in the other, which hides on a phone. `object-fit="contain"` shows the whole image instead of cropping it.


HTML:

```html
<div style="height: 360px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-grid>
      <ui-column sm="4" md="4" lg="8">
        <ui-page-header-breadcrumb border="false">
          <ui-breadcrumb>
            <ui-breadcrumb-item href="#page-header-sites">Sites</ui-breadcrumb-item>
            <ui-page-header-title-breadcrumb>Bang Na warehouse</ui-page-header-title-breadcrumb>
          </ui-breadcrumb>
        </ui-page-header-breadcrumb>
        <ui-page-header-content heading="Bang Na warehouse">
          <ui-page-header-content-text subtitle="12,000 m²">Our main storage site for the eastern region.</ui-page-header-content-text>
        </ui-page-header-content>
      </ui-column>
      <ui-column sm="0" md="4" lg="8">
        <ui-page-header-hero-image>
          <img alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%230f62fe'/%3E%3Crect y='120' width='400' height='80' fill='%23002d9c'/%3E%3Crect x='60' y='70' width='160' height='70' fill='%23a6c8ff'/%3E%3C/svg%3E" />
        </ui-page-header-hero-image>
      </ui-column>
    </ui-grid>
  </ui-page-header>
  <div style="padding: 16px">
    <p>Opened in 2019.</p>
    <p>Open 24 hours, seven days a week.</p>
  </div>
</div>
```

React:

```tsx
<UiPageHeader>
  <UiGrid>
    <UiColumn sm="4" md="4" lg="8">
      <UiPageHeaderBreadcrumb border={false}>…</UiPageHeaderBreadcrumb>
      <UiPageHeaderContent heading="Bang Na warehouse">
        <UiPageHeaderContentText subtitle="12,000 m²">Our main storage site for the eastern region.</UiPageHeaderContentText>
      </UiPageHeaderContent>
    </UiColumn>
    <UiColumn sm="0" md="4" lg="8">
      <UiPageHeaderHeroImage>
        <img alt="" src={warehousePhoto} />
      </UiPageHeaderHeroImage>
    </UiColumn>
  </UiGrid>
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader>
  <Grid>
    <Column sm={4} md={4} lg={8}>
      <PageHeaderBreadcrumbBar border={false}>…</PageHeaderBreadcrumbBar>
      <PageHeaderContent heading="Bang Na warehouse">
        <PageHeaderContentText subtitle="12,000 m²">Our main storage site for the eastern region.</PageHeaderContentText>
      </PageHeaderContent>
    </Column>
    <Column sm={0} md={4} lg={8}>
      <PageHeaderHeroImage>
        <img alt="" src={warehousePhoto} />
      </PageHeaderHeroImage>
    </Column>
  </Grid>
</PageHeader>
```

A decorative image takes `alt=""`. If the image says something the text doesn't, describe it in `alt`.

## Grid options

The parts line up on Carbon's grid: at most 1584px wide and centred, with the grid's margin. `narrow-grid` (`narrowGrid`) hangs the text on the margin, without the half gutter; `full-width-grid` (`fullWidthGrid`) drops the 1584px cap. Match them to the [grid](https://parntengza.github.io/kanok-ui-docs/en/grid/) of the page below.


HTML:

```html
<div style="height: 200px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header narrow-grid full-width-grid>
    <ui-page-header-breadcrumb>
      <ui-breadcrumb>
        <ui-breadcrumb-item href="#page-header-dashboards">Dashboards</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>Contract volume</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
    </ui-page-header-breadcrumb>
    <ui-page-header-content heading="Contract volume"></ui-page-header-content>
  </ui-page-header>
</div>
```

React:

```tsx
<UiPageHeader narrowGrid fullWidthGrid>
  <UiPageHeaderBreadcrumb>…</UiPageHeaderBreadcrumb>
  <UiPageHeaderContent heading="Contract volume" />
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader narrowGrid fullWidthGrid>
  <PageHeaderBreadcrumbBar>…</PageHeaderBreadcrumbBar>
  <PageHeaderContent heading="Contract volume" />
</PageHeader>
```

## Rich title and heading levels

The title is an `<h1>`. `heading-level` (`headingAs` in React + Tailwind) makes it another level, for a header inside a page that already has its `<h1>`; the subtitle is an `<h2>` and `subtitle-level` (`subtitleAs`) changes it. For a title with markup, put it in the content's `slot="title"` instead of `heading`; in React + Tailwind, `heading` takes markup.


HTML:

```html
<div style="height: 220px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-content heading-level="h3">
      <span slot="title">Invoice <span style="color: var(--ui-ink-muted)">INV-7781</span></span>
      <ui-page-header-content-text subtitle="Due 31 October" subtitle-level="h4">36,000 baht to Siam Logistics.</ui-page-header-content-text>
    </ui-page-header-content>
  </ui-page-header>
</div>
```

React:

```tsx
<UiPageHeader>
  <UiPageHeaderContent headingLevel="h3">
    <span slot="title">Invoice <span style={{ color: 'var(--ui-ink-muted)' }}>INV-7781</span></span>
    <UiPageHeaderContentText subtitle="Due 31 October" subtitleLevel="h4">36,000 baht to Siam Logistics.</UiPageHeaderContentText>
  </UiPageHeaderContent>
</UiPageHeader>
```

React + Tailwind:

```tsx
<PageHeader>
  <PageHeaderContent headingAs="h3" heading={<>Invoice <span className="text-ink-muted">INV-7781</span></>}>
    <PageHeaderContentText subtitle="Due 31 October" subtitleAs="h4">36,000 baht to Siam Logistics.</PageHeaderContentText>
  </PageHeaderContent>
</PageHeader>
```

A title in the slot isn't cut to two lines and gets no tooltip.

## Bar options

On the breadcrumb bar: `slot="icon"` (`icon`) puts a 16px icon before the trail; `border="false"` (`border={false}`) drops the line under the bar; `page-actions-flush` (`pageActionsFlush`) lets the page actions reach the edge; `content-actions-flush` (`contentActionsFlush`) drops the 12px gap after the content actions. `actions-aria-label` (`actionsAriaLabel`) names the bar's toolbar ("Page header actions" by default, in the page language). A long trail can fold its middle crumbs into a menu with the breadcrumb's `overflow`.


HTML:

```html
<div style="height: 120px; overflow: auto; transform: translateZ(0); border: 1px solid var(--ui-hairline)">
  <ui-page-header>
    <ui-page-header-breadcrumb border="false" page-actions-flush actions-aria-label="Report actions">
      <svg slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style="fill: currentColor"><path d="M14 13V4h-3v9H9V7H6v6H4V9H1v5h14v-1z" /></svg>
      <ui-breadcrumb overflow>
        <ui-breadcrumb-item href="#page-header-home2">Home</ui-breadcrumb-item>
        <ui-breadcrumb-item href="#page-header-finance">Finance</ui-breadcrumb-item>
        <ui-breadcrumb-item href="#page-header-reports2">Reports</ui-breadcrumb-item>
        <ui-breadcrumb-item href="#page-header-quarterly">Quarterly</ui-breadcrumb-item>
        <ui-page-header-title-breadcrumb>Q3 2026 spending by department</ui-page-header-title-breadcrumb>
      </ui-breadcrumb>
      <ui-icon-button slot="page-actions" kind="ghost" size="md" label="Download"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 7 12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12 13 7zM13 12v2H3v-2H2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2z" /></svg></ui-icon-button>
    </ui-page-header-breadcrumb>
  </ui-page-header>
</div>
```

React:

```tsx
import { ChartLine as ChartLineIcon, Download as DownloadIcon } from '@carbon/icons-react';

<UiPageHeader>
  <UiPageHeaderBreadcrumb border={false} pageActionsFlush actionsAriaLabel="Report actions">
    <ChartLineIcon slot="icon" />
    <UiBreadcrumb overflow>
      <UiBreadcrumbItem href="/">Home</UiBreadcrumbItem>
      <UiBreadcrumbItem href="/finance">Finance</UiBreadcrumbItem>
      <UiBreadcrumbItem href="/finance/reports">Reports</UiBreadcrumbItem>
      <UiBreadcrumbItem href="/finance/reports/quarterly">Quarterly</UiBreadcrumbItem>
      <UiPageHeaderTitleBreadcrumb>Q3 2026 spending by department</UiPageHeaderTitleBreadcrumb>
    </UiBreadcrumb>
    <UiIconButton slot="page-actions" kind="ghost" size="md" label="Download"><DownloadIcon /></UiIconButton>
  </UiPageHeaderBreadcrumb>
</UiPageHeader>
```

React + Tailwind:

```tsx
import { ChartLine as ChartLineIcon, Download as DownloadIcon } from '@carbon/icons-react';

<PageHeader>
  <PageHeaderBreadcrumbBar
    border={false}
    pageActionsFlush
    actionsAriaLabel="Report actions"
    icon={<ChartLineIcon />}
    pageActions={<IconButton kind="ghost" size="md" label="Download"><DownloadIcon /></IconButton>}
  >
    <Breadcrumb overflow>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/finance">Finance</BreadcrumbItem>
      <BreadcrumbItem href="/finance/reports">Reports</BreadcrumbItem>
      <BreadcrumbItem href="/finance/reports/quarterly">Quarterly</BreadcrumbItem>
      <PageHeaderTitleBreadcrumb>Q3 2026 spending by department</PageHeaderTitleBreadcrumb>
    </Breadcrumb>
  </PageHeaderBreadcrumbBar>
</PageHeader>
```

## Under a fixed header

When the page has a fixed [UI shell](https://parntengza.github.io/kanok-ui-docs/en/ui-shell/) header above it, the page header measures how far it sits below the top of its scrolling box and sticks under the shell, not behind it. You set nothing. It measures again whenever its size changes.

## Accessibility

- The title is a real heading (`<h1>` by default); keep one `<h1>` per page.
- The title crumb is hidden from screen readers and out of the Tab order until it shows, so the trail isn't read twice.
- The page actions that fade out while scrolled away are hidden from everyone, and the bar's content actions show instead. Put the same actions in both places.
- The bar's actions are a toolbar with a name. The "+N" tag announces how many tags are hidden ("4 more tags").
- With reduced motion, the title crumb fades in without moving.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-page-header>` · React `UiPageHeader`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `full-width-grid` | `fullWidthGrid` | `boolean` | `false` | No 1584px cap on the grid. |
| `narrow-grid` | `narrowGrid` | `boolean` | `false` | Hang the text on the grid margin. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `state` | `PageHeaderState` | The shared state; its parts read it. |

#### Methods

| Method | Description |
|---|---|
| `setState(next)` | Merge into the state and tell the parts. |
| `setStatic(on)` | A tab bar asks the header not to stick (Carbon `disableStickyTabBar`): the bar is fixed instead. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-page-header-state` | `onUiPageHeaderState` | The state changed (`state`: fullyCollapsed, titleClipped, contentActionsClipped …); not bubbling |

#### Slots

| Slot | Description |
|---|---|
| (default) | The parts |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-page-header-top` |  | Set by the header: how far up it sticks (minus the content's height) |
| `--ui-page-header-bar-top` |  | Set by the header: where the bar sticks (under a fixed UI shell) |

### `<ui-page-header-breadcrumb>` · React `UiPageHeaderBreadcrumb`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `border` | `border` | `boolean` | `true` | The line under the bar. |
| `page-actions-flush` | `pageActionsFlush` | `boolean` | `false` | The page actions reach the screen's edge. |
| `content-actions-flush` | `contentActionsFlush` | `boolean` | `false` | No 12px gap after the content actions. |
| `actions-aria-label` | `actionsAriaLabel` | `string` | `''` | The toolbar's name (default "Page header actions", translated). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The breadcrumb trail |
| `icon` | A 16px icon before the trail |
| `content-actions` | The content's page actions again, for when they have scrolled away |
| `page-actions` | Actions for the whole page (e.g. ghost icon buttons) |

### `<ui-page-header-title-breadcrumb>` · React `UiPageHeaderTitleBreadcrumb`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `''` |  |
| `current` | `current` | `boolean` | `false` | The page the user is on: plain text with `aria-current="page"`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | The item text |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The link or the current-page text |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-breadcrumb-trailing-slash` |  | `display` of the slash after the last item (default inline; Kanok: none) |

### `<ui-page-header-content>` · React `UiPageHeaderContent`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `heading` | `heading` | `string` | `''` | The page's title (Carbon `title`, which would also be the element's native tooltip). |
| `heading-level` | `headingLevel` | `string` | `'h1'` | The title's element (h1 … h6). |

#### Slots

| Slot | Description |
|---|---|
| (default) | What follows the title (a `<ui-page-header-content-text>`) |
| `icon` | An icon before the title |
| `title` | Rich title instead of `heading` |
| `contextual-actions` | Next to the title |
| `page-actions` | At the end of the title row |

#### CSS parts

| Part | Description |
|---|---|
| `title` | The title heading |

### `<ui-page-header-content-text>` · React `UiPageHeaderContentText`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `subtitle` | `subtitle` | `string` | `''` |  |
| `subtitle-level` | `subtitleLevel` | `string` | `'h2'` | The subtitle's element (h1 … h6). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The text |

#### CSS parts

| Part | Description |
|---|---|
| `subtitle` | The subtitle heading |

### `<ui-page-header-hero-image>` · React `UiPageHeaderHeroImage`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `object-fit` | `objectFit` | `'cover' \| 'contain'` | `'cover'` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | The `<img>` (or `<picture>`) |

### `<ui-page-header-tabs>` · React `UiPageHeaderTabs`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `disable-sticky-tab-bar` | `disableStickyTabBar` | `boolean` | `false` |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | The tabs |
| `tags` | Tags at the end |
| `scroller` | The collapse / expand button |

### `<ui-page-header-scroller>` · React `UiPageHeaderScroller`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `collapse-text` | `collapseText` | `string` | `''` |  |
| `expand-text` | `expandText` | `string` | `''` |  |

### `<ui-page-header-actions>` · React `UiPageHeaderActions`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `overflow-label` | `overflowLabel` | `string` | `''` | The overflow menu's name (default: the translation's "More actions"). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The buttons (`<ui-icon-button>`s, `<ui-button>`s), in order; each one's `label` (else its text) names it in the menu |

#### CSS parts

| Part | Description |
|---|---|
| `overflow` | The overflow menu |

### `<ui-page-header-tags>` · React `UiPageHeaderTags`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `tags` | `tags` | `PageHeaderTag[]` | `[]` | The tags, in order (Carbon `tags-data`; JSON as an attribute). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-tag-dismiss` | `onUiTagDismiss` | detail: { tag, index } after a dismissible tag was dismissed (it is already gone from `tags`) |

#### CSS parts

| Part | Description |
|---|---|
| `more` | The "+N" tag |
| `popover` | The popover of hidden tags |
| `modal` | The "All tags" modal |


