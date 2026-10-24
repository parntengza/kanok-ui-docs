# Inline loading

Inline loading shows the progress of one action in place, such as saving or sending: a 16px spinner with a short text beside it. It moves from `active` to `finished` (a check mark) or `error`, and screen readers hear each change.


HTML:

```html
<ui-inline-loading>Saving the purchase request…</ui-inline-loading>
```

React:

```tsx
<UiInlineLoading>Saving the purchase request…</UiInlineLoading>
```

React + Tailwind:

```tsx
<InlineLoading>Saving the purchase request…</InlineLoading>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/inline-loading
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
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/inline-loading.json
#    to its target:
#    components/ui/primitives/inline-loading/inline-loading.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-status-indicator, shared-element, shared-localize, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-loading.json
#    to its target:
#    components/ui/react-tw/loading.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-status-indicator, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/inline-loading';</script>

<ui-inline-loading>Saving…</ui-inline-loading>
```

React:

```tsx
import { UiInlineLoading } from '@purpurabog/ui/react';

<UiInlineLoading>Saving…</UiInlineLoading>
```

React + Tailwind:

```tsx
import { InlineLoading } from '@/components/ui/react-tw/loading';

<InlineLoading>Saving…</InlineLoading>
```

## Inline loading or loading?

Use inline loading next to the control that started the work, when the result ends as done or failed. When a whole view or area can't be used until the data arrives, use [Loading](https://parntengza.github.io/kanok-ui-docs/en/loading/). When the work has a known size, use a [Progress bar](https://parntengza.github.io/kanok-ui-docs/en/progress-bar/). The headless [Loading](https://parntengza.github.io/kanok-ui-docs/en/headless-loading/) parts cover only a spinner with its timing, not these statuses.

## Statuses

`status` is one of:

- `active` (the default): the spinning icon.
- `finished`: a green check mark (it appears at once, as in Carbon).
- `error`: a red error icon.
- `inactive`: only the text. In HTML and React (`UiInlineLoading`) the spinner stops as in Carbon web components: it turns out and fades over 1.4s (at once with reduced motion). React + Tailwind follows Carbon React and shows no icon at once.

The text in the element is the status text (Carbon's `description`). Change it with the status.


HTML:

```html
<div style="display: grid; gap: 8px; max-width: 320px">
  <ui-inline-loading status="inactive">Not started</ui-inline-loading>
  <ui-inline-loading status="active">Submitting…</ui-inline-loading>
  <ui-inline-loading status="finished">Submitted</ui-inline-loading>
  <ui-inline-loading status="error">Could not submit</ui-inline-loading>
</div>
```

React:

```tsx
<UiInlineLoading status="inactive">Not started</UiInlineLoading>
<UiInlineLoading status="active">Submitting…</UiInlineLoading>
<UiInlineLoading status="finished">Submitted</UiInlineLoading>
<UiInlineLoading status="error">Could not submit</UiInlineLoading>
```

React + Tailwind:

```tsx
<InlineLoading status="inactive">Not started</InlineLoading>
<InlineLoading status="active">Submitting…</InlineLoading>
<InlineLoading status="finished">Submitted</InlineLoading>
<InlineLoading status="error">Could not submit</InlineLoading>
```

## In place of the submit button

Carbon's pattern: when the user submits, the submit button gives its place to an inline loading. When the work is done, the check mark shows, then `ui-success` puts the button back.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; min-height: 48px">
  <ui-button kind="secondary">Cancel</ui-button>
  <span id="inline-loading-submit-wrap"><ui-button id="inline-loading-submit">Submit</ui-button></span>
  <div id="inline-loading-flow-wrap" hidden style="width: 200px">
    <ui-inline-loading id="inline-loading-flow"></ui-inline-loading>
  </div>
</div>

<script type="module">
  const submitWrap = document.getElementById('inline-loading-submit-wrap');
  const flowWrap = document.getElementById('inline-loading-flow-wrap');
  const flow = document.getElementById('inline-loading-flow');
  document.getElementById('inline-loading-submit').addEventListener('click', () => {
    submitWrap.hidden = true;
    flowWrap.hidden = false;
    flow.status = 'active';
    flow.textContent = 'Submitting…';
    setTimeout(() => {
      flow.status = 'finished';
      flow.textContent = 'Submitted';
    }, 2000);
  });
  flow.addEventListener('ui-success', () => {
    flowWrap.hidden = true;
    submitWrap.hidden = false;
  });
</script>
```

React:

```tsx
const [status, setStatus] = useState<'inactive' | 'active' | 'finished'>('inactive');
const submit = async () => {
  setStatus('active');
  await send();
  setStatus('finished');
};

<UiButton kind="secondary">Cancel</UiButton>
{status === 'inactive' ? (
  <UiButton onClick={submit}>Submit</UiButton>
) : (
  <UiInlineLoading status={status} onUiSuccess={() => setStatus('inactive')}>
    {status === 'active' && 'Submitting…'}
    {status === 'finished' && 'Submitted'}
  </UiInlineLoading>
)}
```

React + Tailwind:

```tsx
const [status, setStatus] = useState<'inactive' | 'active' | 'finished'>('inactive');
const submit = async () => {
  setStatus('active');
  await send();
  setStatus('finished');
};

<Button kind="secondary">Cancel</Button>
{status === 'inactive' ? (
  <Button onClick={submit}>Submit</Button>
) : (
  <InlineLoading status={status} onSuccess={() => setStatus('inactive')}>
    {status === 'active' && 'Submitting…'}
    {status === 'finished' && 'Submitted'}
  </InlineLoading>
)}
```

`send` stands for your own code.

## After success

`ui-success` fires `success-delay` ms after `status` became `finished` (1500 by default, as Carbon's `successDelay`). Use it to close a dialog, clear the form or put a button back. In React the event prop is `onUiSuccess`; in React + Tailwind it is `onSuccess`.


HTML:

```html
<ui-button id="inline-loading-success-run" kind="tertiary">Send invoice INV-0412</ui-button>
<ui-inline-loading id="inline-loading-success" status="inactive" success-delay="1000">Not sent yet</ui-inline-loading>
<p>ui-success: <output id="inline-loading-success-out">not yet</output></p>

<script type="module">
  const status = document.getElementById('inline-loading-success');
  const out = document.getElementById('inline-loading-success-out');
  document.getElementById('inline-loading-success-run').addEventListener('click', () => {
    status.status = 'active';
    status.textContent = 'Sending…';
    out.textContent = 'waiting';
    setTimeout(() => {
      status.status = 'finished';
      status.textContent = 'Sent to the customer';
    }, 1500);
  });
  status.addEventListener('ui-success', () => {
    out.textContent = `fired at ${new Date().toLocaleTimeString()}`;
  });
</script>
```

React:

```tsx
<UiInlineLoading status={status} successDelay={1000} onUiSuccess={() => setLog(`fired at ${new Date().toLocaleTimeString()}`)}>
  {text}
</UiInlineLoading>
```

React + Tailwind:

```tsx
<InlineLoading status={status} successDelay={1000} onSuccess={() => setLog(`fired at ${new Date().toLocaleTimeString()}`)}>
  {text}
</InlineLoading>
```

## Error and try again

On failure, set `status="error"` and say what failed in the text. Put a way to try again right next to it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <div style="width: 280px">
    <ui-inline-loading id="inline-loading-retry-status" status="error">Could not send to the approver</ui-inline-loading>
  </div>
  <ui-button id="inline-loading-retry" kind="ghost" size="sm">Try again</ui-button>
</div>

<script type="module">
  const status = document.getElementById('inline-loading-retry-status');
  document.getElementById('inline-loading-retry').addEventListener('click', () => {
    status.status = 'active';
    status.textContent = 'Sending…';
    setTimeout(() => {
      status.status = 'finished';
      status.textContent = 'Sent to the approver';
    }, 1500);
  });
</script>
```

React:

```tsx
<UiInlineLoading status={status}>{text}</UiInlineLoading>
{status === 'error' && <UiButton kind="ghost" size="sm" onClick={retry}>Try again</UiButton>}
```

React + Tailwind:

```tsx
<InlineLoading status={status}>{text}</InlineLoading>
{status === 'error' && <Button kind="ghost" size="sm" onClick={retry}>Try again</Button>}
```

`retry` stands for your own code.

## Checking a field

Inline loading also fits under a field that the server checks, such as a tax ID. Show it when the check starts, and end with the result.


HTML:

```html
<ui-text-input id="inline-loading-tax" label="Tax ID" helper-text="13 digits" value="0105556000000"></ui-text-input>
<ui-button id="inline-loading-tax-check" kind="tertiary">Check</ui-button>
<div id="inline-loading-tax-wrap" hidden>
  <ui-inline-loading id="inline-loading-tax-status"></ui-inline-loading>
</div>

<script type="module">
  const input = document.getElementById('inline-loading-tax');
  const wrap = document.getElementById('inline-loading-tax-wrap');
  const status = document.getElementById('inline-loading-tax-status');
  document.getElementById('inline-loading-tax-check').addEventListener('click', () => {
    wrap.hidden = false;
    status.status = 'active';
    status.textContent = 'Checking the tax ID…';
    setTimeout(() => {
      const found = /^\d{13}$/.test(input.value);
      status.status = found ? 'finished' : 'error';
      status.textContent = found ? 'Found: Siam Logistics Co., Ltd.' : 'No company has this tax ID';
    }, 1500);
  });
</script>
```

React:

```tsx
<UiTextInput label="Tax ID" helperText="13 digits" value={taxId} onInput={(e) => setTaxId((e.target as HTMLInputElement).value)} />
<UiButton kind="tertiary" onClick={check}>Check</UiButton>
{result.status && <UiInlineLoading status={result.status}>{result.text}</UiInlineLoading>}
```

React + Tailwind:

```tsx
<TextInput label="Tax ID" helperText="13 digits" value={taxId} onChange={(e) => setTaxId(e.target.value)} />
<Button kind="tertiary" onClick={check}>Check</Button>
{result.status && <InlineLoading status={result.status}>{result.text}</InlineLoading>}
```

`check` stands for your own code that asks the server and sets `result` (the status and the text).

## Icon label

The icon is named by its status: "Loading", "Finished" or "Error", translated to the page language. `icon-label` (`iconLabel` in React) names it yourself when the status text needs a different word.


HTML:

```html
<ui-inline-loading status="finished" icon-label="Saved">Draft saved at 10:42</ui-inline-loading>
```

React:

```tsx
<UiInlineLoading status="finished" iconLabel="Saved">Draft saved at 10:42</UiInlineLoading>
```

React + Tailwind:

```tsx
<InlineLoading status="finished" iconLabel="Saved">Draft saved at 10:42</InlineLoading>
```

## Accessibility

- The whole element is a polite live region, so screen readers hear the icon's name and the text each time the status changes.
- Keep the text short and specific: "Submitting…", "Submitted", "Could not submit".
- Inline loading doesn't take focus. When it replaces the button that had focus, move focus somewhere useful afterwards, such as back to the button.
- Under `prefers-reduced-motion`, the spinner stops turning and the check mark shows at once.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-inline-loading>` · React `UiInlineLoading`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `status` | `status` | `InlineLoadingStatus` | `'active'` |  |
| `success-delay` | `successDelay` | `number` | `1500` | Milliseconds after `finished` before `ui-success` fires (Carbon `successDelay`). |
| `icon-label` | `iconLabel` | `string` | `''` | Accessible name of the icon; defaults to the status. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-success` | `onUiSuccess` | `success-delay` ms after `status` became `finished` |

#### Slots

| Slot | Description |
|---|---|
| (default) | The status text (Carbon `description`) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The row |
| `icon` | The spinner / check / error icon |
| `text` | The description |


