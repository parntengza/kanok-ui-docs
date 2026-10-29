# Loading

A loading spinner says that a view or an area is waiting for data. Carbon's spinner is 88px; `small` is 16px with a grey track. It can cover the whole page (`overlay`) or one area (`contained`), and it can wait before it shows, so quick work never flashes a spinner.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <ui-loading></ui-loading>
  <ui-loading small></ui-loading>
</div>
```

React:

```tsx
<UiLoading />
<UiLoading small />
```

React + Tailwind:

```tsx
<Loading />
<Loading small />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/loading
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-loading
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/loading.json
#    to its target:
#    components/ui/primitives/loading/loading.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-spin-delay, shared-element, shared-field, shared-localize, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-loading.json
#    to its target:
#    components/ui/react-tw/loading.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-status-indicator, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/loading';</script>

<ui-loading></ui-loading>
```

React:

```tsx
import { UiLoading } from '@purpurabog/ui/react';

<UiLoading />
```

React + Tailwind:

```tsx
import { Loading } from '@/components/ui/react-tw/loading';

<Loading />
```

## Loading, inline loading, progress bar or skeleton?

- Loading: a whole view or one area can't be used until the data arrives.
- [Inline loading](https://parntengza.github.io/kanok-ui-docs/en/inline-loading/): a small status next to the thing that is saving or sending, which ends as "done" or "failed".
- [Progress bar](https://parntengza.github.io/kanok-ui-docs/en/progress-bar/): the work has a known size, such as files uploaded out of five.
- [Skeleton](https://parntengza.github.io/kanok-ui-docs/en/skeleton/): the first load of a page, when you know the shape of the content to come.
- Inside a button, use the button's own `loading`; see [Button](https://parntengza.github.io/kanok-ui-docs/en/button/#loading).

## Small

`small` is the 16px spinner with a grey track, for tight places such as a card header or a table toolbar.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <ui-loading small description="Loading approvals"></ui-loading>
  <span>Loading approvals…</span>
</div>
```

React:

```tsx
<UiLoading small description="Loading approvals" />
<span>Loading approvals…</span>
```

React + Tailwind:

```tsx
<Loading small description="Loading approvals" />
<span>Loading approvals…</span>
```

## Description

`description` names the spinner for screen readers and is announced when it shows. It defaults to "Loading", translated to the page language. Say what is loading.


HTML:

```html
<ui-loading description="Loading the contract list"></ui-loading>
```

React:

```tsx
<UiLoading description="Loading the contract list" />
```

React + Tailwind:

```tsx
<Loading description="Loading the contract list" />
```

## Start and stop

The spinner is on by default. Set `active` to false to stop and hide it; the element stays in the page, ready for the next time. In HTML, write `active="false"` to start it stopped. While it really shows, the element has a `data-shown` attribute.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="loading-toggle" kind="secondary">Stop</ui-button>
  <ui-loading id="loading-toggle-spinner" small description="Loading contracts"></ui-loading>
</div>
<p>Active: <output id="loading-toggle-out">true</output></p>

<script type="module">
  const spinner = document.getElementById('loading-toggle-spinner');
  const button = document.getElementById('loading-toggle');
  button.addEventListener('click', () => {
    spinner.active = !spinner.active;
    button.textContent = spinner.active ? 'Stop' : 'Start';
    document.getElementById('loading-toggle-out').textContent = String(spinner.active);
  });
</script>
```

React:

```tsx
const [busy, setBusy] = useState(true);

<UiButton kind="secondary" onClick={() => setBusy(!busy)}>{busy ? 'Stop' : 'Start'}</UiButton>
<UiLoading small active={busy} description="Loading contracts" />
<p>Active: <output>{String(busy)}</output></p>
```

React + Tailwind:

```tsx
const [busy, setBusy] = useState(true);

<Button kind="secondary" onClick={() => setBusy(!busy)}>{busy ? 'Stop' : 'Start'}</Button>
<Loading small active={busy} description="Loading contracts" />
<p>Active: <output>{String(busy)}</output></p>
```

## Over one area

`contained` wraps an area, such as a card or a table, instead of the page. While it is active, the overlay covers just that box, and the content under it is inert and `aria-busy`. The rest of the page stays usable. Carbon has no contained loading; this is our addition.


HTML:

```html
<ui-button id="loading-area-run" kind="tertiary">Refresh summary (2 s)</ui-button>
<ui-loading id="loading-area" contained active="false" description="Refreshing the summary">
  <ui-tile>
    <h4 style="margin: 0 0 8px">Contract CT-2026-118</h4>
    <p style="margin: 0">Siam Logistics Co., Ltd. · 1 Nov 2026 – 31 Oct 2027 · ฿1,250,000</p>
  </ui-tile>
</ui-loading>

<script type="module">
  const area = document.getElementById('loading-area');
  document.getElementById('loading-area-run').addEventListener('click', () => {
    area.active = true;
    setTimeout(() => { area.active = false; }, 2000);
  });
</script>
```

React:

```tsx
<UiButton kind="tertiary" onClick={refresh}>Refresh summary</UiButton>
<UiLoading contained active={refreshing} description="Refreshing the summary">
  <UiTile>
    <h4>Contract CT-2026-118</h4>
    <p>Siam Logistics Co., Ltd. · 1 Nov 2026 – 31 Oct 2027 · ฿1,250,000</p>
  </UiTile>
</UiLoading>
```

React + Tailwind:

```tsx
<Button kind="tertiary" onClick={refresh}>Refresh summary</Button>
<Loading contained active={refreshing} description="Refreshing the summary">
  <Tile>
    <h4>Contract CT-2026-118</h4>
    <p>Siam Logistics Co., Ltd. · 1 Nov 2026 – 31 Oct 2027 · ฿1,250,000</p>
  </Tile>
</Loading>
```

`refresh` stands for your own code that sets `refreshing` while it works.

## Saving a form in place

Put the form inside a contained loading while it saves. Focus that was inside the area waits on the spinner, then goes back where it was, so keyboard users keep their place.


HTML:

```html
<ui-loading id="loading-form" contained active="false" description="Saving the department">
  <form id="loading-form-form" method="dialog" style="display: grid; gap: 16px; justify-items: start; padding: 16px; border: 1px solid var(--ui-hairline)">
    <ui-text-input label="Department" name="department" value="Procurement"></ui-text-input>
    <ui-button type="submit">Save</ui-button>
  </form>
</ui-loading>
<p>Saved: <output id="loading-form-out">not yet</output></p>

<script type="module">
  const loading = document.getElementById('loading-form');
  const form = document.getElementById('loading-form-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    loading.active = true;
    setTimeout(() => {
      loading.active = false;
      document.getElementById('loading-form-out').textContent = `department=${data.get('department')}`;
    }, 1500);
  });
</script>
```

React:

```tsx
<UiLoading contained active={saving} description="Saving the department">
  <form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
    <UiTextInput label="Department" name="department" value="Procurement" />
    <UiButton type="submit">Save</UiButton>
  </form>
</UiLoading>
```

React + Tailwind:

```tsx
<Loading contained active={saving} description="Saving the department">
  <form onSubmit={(e) => { e.preventDefault(); save(new FormData(e.currentTarget)); }}>
    <TextInput label="Department" name="department" defaultValue="Procurement" />
    <Button type="submit">Save</Button>
  </form>
</Loading>
```

`save` stands for your own code that sets `saving` while it works.

## Wait before it shows

`delay` (ms) shows the spinner only if the work is still going after that long. `min-duration` (ms, `minDuration` in React) keeps it up at least that long once shown, so it doesn't blink on and off. Both default to 0, as in Carbon. Try the quick check: it ends before the delay, and no spinner shows.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="loading-delay-quick" kind="tertiary">Quick check (0.2 s)</ui-button>
  <ui-button id="loading-delay-slow" kind="tertiary">Full check (2 s)</ui-button>
</div>
<ui-loading id="loading-delay" contained active="false" delay="300" min-duration="500" description="Checking vendor documents">
  <ui-tile>
    <h4 style="margin: 0 0 8px">Vendor documents</h4>
    <p style="margin: 0">Company certificate, VAT registration, bank book.</p>
  </ui-tile>
</ui-loading>
<p>Spinner showing: <output id="loading-delay-out">no</output></p>

<script type="module">
  const loading = document.getElementById('loading-delay');
  const out = document.getElementById('loading-delay-out');
  new MutationObserver(() => {
    out.textContent = loading.hasAttribute('data-shown') ? 'yes' : 'no';
  }).observe(loading, { attributes: true, attributeFilter: ['data-shown'] });
  const run = (ms) => {
    loading.active = true;
    setTimeout(() => { loading.active = false; }, ms);
  };
  document.getElementById('loading-delay-quick').addEventListener('click', () => run(200));
  document.getElementById('loading-delay-slow').addEventListener('click', () => run(2000));
</script>
```

React:

```tsx
<UiLoading contained active={checking} delay={300} minDuration={500} description="Checking vendor documents">
  <UiTile>…</UiTile>
</UiLoading>
```

React + Tailwind:

```tsx
<Loading contained active={checking} delay={300} minDuration={500} description="Checking vendor documents">
  <Tile>…</Tile>
</Loading>
```

`delay` and `min-duration` work with every kind of loading, not only `contained`.

## Over the whole page

`overlay` covers the page in the overlay colour while the spinner shows. It holds focus: Tab and clicks elsewhere come back to it. When it stops, focus goes back where it was. A modal dialog opened above it is left alone. Use it only while the whole view can't be used, and always set `active` from your own state.

The overlay is `position: fixed`. In this demo it sits in a box with a `transform`, so it covers only the box; in your app it covers the window.


HTML:

```html
<div style="transform: translateZ(0); position: relative; height: 240px; overflow: hidden; border: 1px solid var(--ui-hairline)">
  <div style="display: grid; gap: 16px; justify-items: start; padding: 16px">
    <p style="margin: 0">Quarterly purchasing report, 42 pages</p>
    <ui-button id="loading-overlay-open">Generate PDF (3 s)</ui-button>
  </div>
  <ui-loading id="loading-overlay" overlay active="false" description="Generating the PDF"></ui-loading>
</div>

<script type="module">
  const overlay = document.getElementById('loading-overlay');
  document.getElementById('loading-overlay-open').addEventListener('click', () => {
    overlay.active = true;
    setTimeout(() => { overlay.active = false; }, 3000);
  });
</script>
```

React:

```tsx
<UiButton onClick={generate}>Generate PDF</UiButton>
<UiLoading overlay active={generating} description="Generating the PDF" />
```

React + Tailwind:

```tsx
<Button onClick={generate}>Generate PDF</Button>
<Loading overlay active={generating} description="Generating the PDF" />
```

`generate` stands for your own code that sets `generating` while it works.

## Keyboard

| Key | Does |
|---|---|
| Tab | With `overlay`: stays on the spinner while it shows |

Esc doesn't close the overlay: it goes away when the work ends.

## Accessibility

- The spinner is an image named by `description`, inside an assertive live region while it shows, so screen readers announce it.
- With `overlay`, the spinner is a modal dialog named by `description` and takes focus. Focus goes back to where it was when it stops.
- With `contained`, the content is inert and `aria-busy` while it shows, and the spinner is a group named by `description`. Focus that was inside waits on the spinner, then goes back.
- Write the `description` as what is loading ("Loading the contract list"), not just "Loading".
- Under `prefers-reduced-motion`, the spinner turns more slowly.

Unstyled React parts with the same behaviour: [Headless Loading](https://parntengza.github.io/kanok-ui-docs/en/headless-loading/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-loading>` · React `UiLoading`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `active` | `active` | `boolean` | `true` | On by default; `active="false"` stops it. |
| `small` | `small` | `boolean` | `false` |  |
| `overlay` | `overlay` | `boolean` | `false` | Cover the page and trap focus while active. |
| `description` | `description` | `string` | `''` | Accessible description; defaults to the translation ("Loading"). |
| `contained` | `contained` | `boolean` | `false` | Cover just this element's content (the slot) instead of the page; the content is inert while active (no Carbon counterpart). |
| `delay` | `delay` | `number` | `0` | Milliseconds `active` must last before the spinner shows (default 0, as Carbon). |
| `min-duration` | `minDuration` | `number` | `0` | Once shown, the least milliseconds it stays (default 0). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The area `contained` covers |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The spinner wrapper (`aria-live`) |
| `overlay` | The page overlay (`overlay`), or the area's (`contained`) |
| `area` | The covered content (`contained`) |
| `spinner` | The `<svg>` |


