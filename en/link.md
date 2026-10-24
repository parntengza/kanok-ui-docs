# Link

A link takes the user to another page, another place on this page, or a file. It is blue, underlines on hover and focus, and has Carbon's focus ring.


HTML:

```html
<ui-link href="#link-policy">Signing policy</ui-link>
```

React:

```tsx
<UiLink href="/policies/signing">Signing policy</UiLink>
```

React + Tailwind:

```tsx
<Link href="/policies/signing">Signing policy</Link>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/link
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-link
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/link.json
#    to its target:
#    components/ui/primitives/link/link.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    shared-element, shared-navigate, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install class-variance-authority@0.7.1
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-link.json
#    to its target:
#    components/ui/react-tw/link.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/link';</script>

<ui-link href="/policies/signing">Signing policy</ui-link>
```

React:

```tsx
import { UiLink } from '@purpurabog/ui/react';

<UiLink href="/policies/signing">Signing policy</UiLink>
```

React + Tailwind:

```tsx
import { Link } from '@/components/ui/react-tw/link';

<Link href="/policies/signing">Signing policy</Link>
```

## Link or button?

| Component | Use it when |
|---|---|
| Link | It goes somewhere: a page, a section of this page, a file. The browser's own link features work (open in a new tab, copy the address). |
| [Button](https://parntengza.github.io/kanok-ui-docs/en/button/) | It does something here: submits a form, opens a modal, starts an export. |

When an action must look like a button but go to a page, use a button with `href`; see [Button](https://parntengza.github.io/kanok-ui-docs/en/button/).

## Sizes

`size`: `sm` 12px (helper text), `md` 14px (the default), `lg` 16px. Match the text around the link.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-link href="#link-policy" size="sm">Small link</ui-link>
  <ui-link href="#link-policy">Medium link</ui-link>
  <ui-link href="#link-policy" size="lg">Large link</ui-link>
</div>
```

React:

```tsx
<UiLink href="/policies/signing" size="sm">Small link</UiLink>
<UiLink href="/policies/signing">Medium link</UiLink>
<UiLink href="/policies/signing" size="lg">Large link</UiLink>
```

React + Tailwind:

```tsx
<Link href="/policies/signing" size="sm">Small link</Link>
<Link href="/policies/signing">Medium link</Link>
<Link href="/policies/signing" size="lg">Large link</Link>
```

## Inside a sentence

`inline` underlines the link at rest, so it stands out in running text where colour alone isn't enough. An inline link shows no icon.


HTML:

```html
<p>Signed copies are kept for 10 years under the <ui-link href="#link-retention" inline>retention policy</ui-link>. Ask the legal team before you destroy one.</p>
```

React:

```tsx
<p>Signed copies are kept for 10 years under the <UiLink href="/policies/retention" inline>retention policy</UiLink>. Ask the legal team before you destroy one.</p>
```

React + Tailwind:

```tsx
<p>Signed copies are kept for 10 years under the <Link href="/policies/retention" inline>retention policy</Link>. Ask the legal team before you destroy one.</p>
```

## With an icon

Put a 16px icon in the `icon` slot (the `icon` prop in React + Tailwind): it sits 8px after the text, in the link's colour, and grows to 20px with `size="lg"`. Use it for standalone links, such as "View all" at the end of a list.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-link href="#link-contracts">View all contracts <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg></ui-link>
  <ui-link href="#link-contracts" size="lg">View all contracts <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg></ui-link>
</div>
```

React:

```tsx
<UiLink href="/contracts">
  View all contracts
  <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg>
</UiLink>
<UiLink href="/contracts" size="lg">View all contracts {arrowIcon}</UiLink>
```

React + Tailwind:

```tsx
const arrowIcon = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg>;

<Link href="/contracts" icon={arrowIcon}>View all contracts</Link>
<Link href="/contracts" size="lg" icon={arrowIcon}>View all contracts</Link>
```

## Open in a new tab

`target="_blank"` opens the page in a new tab, and the link adds `rel="noopener noreferrer"` unless you set `rel`. Say so in the text or with Carbon's Launch icon, so the new tab doesn't surprise anyone.


HTML:

```html
<ui-link href="https://carbondesignsystem.com/components/link/usage/" target="_blank">Carbon's link guidelines <svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 14H3V4h5V3H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8h-1z" /><path d="M10 1v1h3.3L7 8.3l.7.7L14 2.7V6h1V1z" /></svg></ui-link>
```

React:

```tsx
<UiLink href="https://carbondesignsystem.com/components/link/usage/" target="_blank">
  Carbon's link guidelines {launchIcon}
</UiLink>
```

React + Tailwind:

```tsx
<Link href="https://carbondesignsystem.com/components/link/usage/" target="_blank" icon={launchIcon}>
  Carbon's link guidelines
</Link>
```

## Download a file

`download` makes the link save its target instead of opening it; its value is the file name. Name the type and size in the text. (The docs site has no such file, so this demo builds one in the browser.)


HTML:

```html
<ui-link id="link-download" href="/files/contract-checklist.txt" download="contract-checklist.txt">Download the contract checklist (TXT, 1 KB)</ui-link>

<script type="module">
  const link = document.getElementById('link-download');
  const text = 'Contract checklist\n- Both parties named\n- Amount and due dates\n- Signatures and witnesses\n';
  link.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
</script>
```

React:

```tsx
<UiLink href="/files/contract-checklist.txt" download="contract-checklist.txt">
  Download the contract checklist (TXT, 1 KB)
</UiLink>
```

React + Tailwind:

```tsx
<Link href="/files/contract-checklist.txt" download="contract-checklist.txt">
  Download the contract checklist (TXT, 1 KB)
</Link>
```

## Visited links

`visited` turns on Carbon's visited colour (purple) for links the browser has visited. Use it in lists the user works through, such as search results. Click the link, then look at it again.


HTML:

```html
<ui-link href="#link-visited" visited>CT-2026-0142: office supplies</ui-link>
```

React:

```tsx
<UiLink href="/contracts/ct-2026-0142" visited>CT-2026-0142: office supplies</UiLink>
```

React + Tailwind:

```tsx
<Link href="/contracts/ct-2026-0142" visited>CT-2026-0142: office supplies</Link>
```

## Disabled

`disabled` renders grey text with `role="link"` and `aria-disabled="true"`: it isn't a link any more and takes no focus. Prefer leaving the link out, or explain next to it why it is unavailable.


HTML:

```html
<ui-link href="#link-signed" disabled>Download the signed copy</ui-link>
```

React:

```tsx
<UiLink href="/contracts/ct-2026-0142/signed.pdf" disabled>Download the signed copy</UiLink>
```

React + Tailwind:

```tsx
<Link href="/contracts/ct-2026-0142/signed.pdf" disabled>Download the signed copy</Link>
```

## Route in a single-page app

A plain click (main button, no modifier key, same tab, same site, not a download) first fires a cancelable `ui-navigate` with `detail.href`. Call `preventDefault()` and hand the path to your router; the browser then doesn't load the page. Ctrl-, ⌘- and middle-clicks stay normal links. The React + Tailwind `Link` is a plain `<a>`: route in its `onClick`, or wrap your router's link.


HTML:

```html
<ui-link id="link-route" href="/contracts/ct-2026-0142">Open CT-2026-0142</ui-link>
<p>Router got: <output id="link-route-out"></output></p>

<script type="module">
  const link = document.getElementById('link-route');
  const out = document.getElementById('link-route-out');
  link.addEventListener('ui-navigate', (event) => {
    event.preventDefault();
    out.value = event.detail.href;
  });
</script>
```

React:

```tsx
const navigate = useNavigate(); // your router

<UiLink href="/contracts/ct-2026-0142" onUiNavigate={(e) => { e.preventDefault(); navigate(e.detail.href); }}>
  Open CT-2026-0142
</UiLink>
```

React + Tailwind:

```tsx
const navigate = useNavigate(); // your router

<Link
  href="/contracts/ct-2026-0142"
  onClick={(e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    navigate('/contracts/ct-2026-0142');
  }}
>
  Open CT-2026-0142
</Link>
```

## Accessibility

- The link is a real `<a href>`: Enter follows it, and the browser's menu (open in a new tab, copy the address) works.
- Write text that makes sense on its own ("Download the contract checklist", not "Click here"): screen reader users often move from link to link.
- Icons in the `icon` slot are decoration; give them `aria-hidden="true"` and keep the meaning in the text.
- A disabled link is announced as a dimmed link but takes no focus, so keyboard users never reach it. Say why it is unavailable in nearby text.
- `inline` underlines links inside sentences, so they don't rely on colour alone.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-link>` · React `UiLink`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `href` | `href` | `string` | `''` |  |
| `target` | `target` | `string` | `''` |  |
| `rel` | `rel` | `string` | `''` |  |
| `download` | `download` | `string` | `''` |  |
| `size` | `size` | `LinkSize` | `'md'` |  |
| `inline` | `inline` | `boolean` | `false` | Underlined at rest, for links inside a sentence. |
| `visited` | `visited` | `boolean` | `false` | Opt into Carbon's visited colour (browser `:visited`). |
| `disabled` | `disabled` | `boolean` | `false` | Renders as inert text with `aria-disabled`. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-navigate` | none (use a ref) | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Link text |
| `icon` | A 16px (lg: 20px) icon after the text (Carbon `renderIcon`; not shown when `inline`) |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The anchor |
| `icon` | The icon wrapper |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-link-focus-radius` |  | Corners of the focus ring (default 0; Kanok: 4px) |


