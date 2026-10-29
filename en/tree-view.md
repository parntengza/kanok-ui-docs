# Tree view

A tree view shows nested items, such as folders, a chart of accounts or an organisation's departments (Carbon `TreeView`). Branches open and close; the user selects a node with a click or the keyboard.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view label="Folders">
    <ui-tree-node label="Contracts" value="contracts" expanded>
      <ui-tree-node label="2026" value="2026" expanded>
        <ui-tree-node label="Service agreement – Acme" value="c1"></ui-tree-node>
        <ui-tree-node label="NDA – Globex" value="c2"></ui-tree-node>
      </ui-tree-node>
      <ui-tree-node label="2025" value="2025">
        <ui-tree-node label="Lease renewal" value="c3"></ui-tree-node>
      </ui-tree-node>
    </ui-tree-node>
    <ui-tree-node label="Templates" value="templates">
      <ui-tree-node label="Standard NDA" value="t1"></ui-tree-node>
    </ui-tree-node>
  </ui-tree-view>
</div>
```

React:

```tsx
<UiTreeView label="Folders">
  <UiTreeNode label="Contracts" value="contracts" expanded>
    <UiTreeNode label="2026" value="2026" expanded>
      <UiTreeNode label="Service agreement – Acme" value="c1" />
      <UiTreeNode label="NDA – Globex" value="c2" />
    </UiTreeNode>
    <UiTreeNode label="2025" value="2025">
      <UiTreeNode label="Lease renewal" value="c3" />
    </UiTreeNode>
  </UiTreeNode>
  <UiTreeNode label="Templates" value="templates">
    <UiTreeNode label="Standard NDA" value="t1" />
  </UiTreeNode>
</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Folders">
  <TreeNode label="Contracts" value="contracts" defaultExpanded>
    <TreeNode label="2026" value="2026" defaultExpanded>
      <TreeNode label="Service agreement – Acme" value="c1" />
      <TreeNode label="NDA – Globex" value="c2" />
    </TreeNode>
    <TreeNode label="2025" value="2025">
      <TreeNode label="Lease renewal" value="c3" />
    </TreeNode>
  </TreeNode>
  <TreeNode label="Templates" value="templates">
    <TreeNode label="Standard NDA" value="t1" />
  </TreeNode>
</TreeView>
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/tree-view
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-tree-view
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tree-view.json
#    to its target:
#    components/ui/primitives/tree-view/tree-node.ts
#    components/ui/primitives/tree-view/tree-view-shared.ts
#    components/ui/primitives/tree-view/tree-view.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-tree, core-typeahead, shared-element, shared-field, shared-localize, shared-navigate, shared-slots, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-tree-view.json
#    to its target:
#    components/ui/react-tw/tree-view.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-tree, tw-field, tw-i18n, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/tree-view';</script>

<ui-tree-view label="Folders">
  <ui-tree-node label="Contracts" value="contracts">
    <ui-tree-node label="Service agreement" value="c1"></ui-tree-node>
  </ui-tree-node>
</ui-tree-view>
```

React:

```tsx
import { UiTreeView, UiTreeNode } from '@purpurabog/ui/react';

<UiTreeView label="Folders">
  <UiTreeNode label="Contracts" value="contracts">
    <UiTreeNode label="Service agreement" value="c1" />
  </UiTreeNode>
</UiTreeView>
```

React + Tailwind:

```tsx
import { TreeView, TreeNode } from '@/components/ui/react-tw/tree-view';

<TreeView label="Folders">
  <TreeNode label="Contracts" value="contracts">
    <TreeNode label="Service agreement" value="c1" />
  </TreeNode>
</TreeView>
```

A node with child nodes is a branch. `value` identifies a node in the selection; without it the `label` does.

## Icons

Put a 16px icon in a node's `icon` slot (`icon` in React + Tailwind). Carbon uses a folder for branches and a document for leaves.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view label="Contract folder">
    <ui-tree-node label="Acme Co., Ltd." value="acme" expanded>
      <svg slot="icon" viewBox="0 0 16 16"><path d="M14 4H8.6L7.3 2.3A1 1 0 0 0 6.5 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM2 3h4.5l1.3 1.7A1 1 0 0 0 8.6 5H14v1H2Zm0 10V7h12v6Z" /></svg>
      <ui-tree-node label="Service agreement.pdf" value="acme-sa">
        <svg slot="icon" viewBox="0 0 16 16"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
      </ui-tree-node>
      <ui-tree-node label="Price list.pdf" value="acme-pl">
        <svg slot="icon" viewBox="0 0 16 16"><path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" /></svg>
      </ui-tree-node>
    </ui-tree-node>
  </ui-tree-view>
</div>
```

React:

```tsx
<UiTreeView label="Contract folder">
  <UiTreeNode label="Acme Co., Ltd." value="acme" expanded>
    <svg slot="icon" viewBox="0 0 16 16">{folderPath}</svg>
    <UiTreeNode label="Service agreement.pdf" value="acme-sa">
      <svg slot="icon" viewBox="0 0 16 16">{documentPath}</svg>
    </UiTreeNode>
    <UiTreeNode label="Price list.pdf" value="acme-pl">
      <svg slot="icon" viewBox="0 0 16 16">{documentPath}</svg>
    </UiTreeNode>
  </UiTreeNode>
</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Contract folder">
  <TreeNode label="Acme Co., Ltd." value="acme" defaultExpanded icon={<svg viewBox="0 0 16 16">{folderPath}</svg>}>
    <TreeNode label="Service agreement.pdf" value="acme-sa" icon={<svg viewBox="0 0 16 16">{documentPath}</svg>} />
    <TreeNode label="Price list.pdf" value="acme-pl" icon={<svg viewBox="0 0 16 16">{documentPath}</svg>} />
  </TreeNode>
</TreeView>
```

## Rich labels and content at the end of the row

Put markup in the `label` slot when the label needs more than text (React + Tailwind: `label` takes a node, as Carbon React's `TreeNode`); the `label` attribute stays the plain-text fallback. Beyond Carbon, the `end` slot (`end` prop) holds what belongs at the end of the row, such as an amount: it stays whole and lines up at the end while a long label is cut with an ellipsis. Screen readers read the label as the node's name and the end content as its description, and typing a letter still finds nodes by their label.


HTML:

```html
<ui-tree-view label="Budget" style="max-width: 360px">
  <ui-tree-node expanded>
    <span slot="label"><b>Operating expenses</b></span>
    <span slot="end">฿124,500</span>
    <ui-tree-node label="Rent"><span slot="end">฿80,000</span></ui-tree-node>
    <ui-tree-node label="Office supplies and printing for every branch"><span slot="end">฿12,300</span></ui-tree-node>
  </ui-tree-node>
</ui-tree-view>
```

React:

```tsx
<UiTreeView label="Budget">
  <UiTreeNode expanded>
    <span slot="label"><b>Operating expenses</b></span>
    <span slot="end">฿124,500</span>
    <UiTreeNode label="Rent"><span slot="end">฿80,000</span></UiTreeNode>
    <UiTreeNode label="Office supplies and printing for every branch"><span slot="end">฿12,300</span></UiTreeNode>
  </UiTreeNode>
</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Budget">
  <TreeNode label={<b>Operating expenses</b>} end="฿124,500" defaultExpanded>
    <TreeNode label="Rent" end="฿80,000" />
    <TreeNode label="Office supplies and printing for every branch" end="฿12,300" />
  </TreeNode>
</TreeView>
```

## Selection and the active node

A click, Space or Enter selects a node and makes it the active one (a 4px bar at its start). `ui-select` fires with `{ selected, value }` after the selection changes, `ui-activate` with `{ active }`. Set `selected` (a property: an array of values) and `active` to start with a node chosen; open its branches so it shows.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view id="tree-view-select" label="Departments" active="legal">
    <ui-tree-node label="Head office" value="hq" expanded>
      <ui-tree-node label="Legal" value="legal"></ui-tree-node>
      <ui-tree-node label="Finance" value="finance"></ui-tree-node>
    </ui-tree-node>
    <ui-tree-node label="Branches" value="branches">
      <ui-tree-node label="Chiang Mai" value="cnx"></ui-tree-node>
      <ui-tree-node label="Phuket" value="hkt"></ui-tree-node>
    </ui-tree-node>
  </ui-tree-view>
</div>
<p>Selected: <output id="tree-view-select-out">legal</output></p>

<script type="module">
  const tree = document.getElementById('tree-view-select');
  tree.selected = ['legal'];
  tree.addEventListener('ui-select', (event) => {
    document.getElementById('tree-view-select-out').value = event.detail.selected.join(', ');
  });
</script>
```

React:

```tsx
const [selected, setSelected] = useState(['legal']);

<UiTreeView label="Departments" selected={selected} active="legal" onUiSelect={(e) => setSelected(e.detail.selected)}>
  <UiTreeNode label="Head office" value="hq" expanded>
    <UiTreeNode label="Legal" value="legal" />
    <UiTreeNode label="Finance" value="finance" />
  </UiTreeNode>
  {/* … */}
</UiTreeView>
<p>Selected: <output>{selected.join(', ')}</output></p>
```

React + Tailwind:

```tsx
const [selected, setSelected] = useState<string[]>(['legal']);

<TreeView label="Departments" selected={selected} defaultActive="legal" onSelect={(next) => setSelected(next)}>
  <TreeNode label="Head office" value="hq" defaultExpanded>
    <TreeNode label="Legal" value="legal" />
    <TreeNode label="Finance" value="finance" />
  </TreeNode>
  {/* … */}
</TreeView>
<p>Selected: <output>{selected.join(', ')}</output></p>
```

## Select several nodes

With `multiselect`, Ctrl / ⌘ + click and Space add a node to the selection or take it out, and Ctrl + A selects every node. A plain click still selects only that node.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view id="tree-view-multi" label="Share with" multiselect>
    <ui-tree-node label="Legal" value="legal" expanded>
      <ui-tree-node label="Contracts team" value="contracts"></ui-tree-node>
      <ui-tree-node label="Litigation team" value="litigation"></ui-tree-node>
    </ui-tree-node>
    <ui-tree-node label="Finance" value="finance" expanded>
      <ui-tree-node label="Accounts payable" value="ap"></ui-tree-node>
      <ui-tree-node label="Tax" value="tax"></ui-tree-node>
    </ui-tree-node>
  </ui-tree-view>
</div>
<p>Selected: <output id="tree-view-multi-out"></output></p>

<script type="module">
  const tree = document.getElementById('tree-view-multi');
  tree.addEventListener('ui-select', (event) => {
    document.getElementById('tree-view-multi-out').value = event.detail.selected.join(', ');
  });
</script>
```

React:

```tsx
const [selected, setSelected] = useState<string[]>([]);

<UiTreeView label="Share with" multiselect selected={selected} onUiSelect={(e) => setSelected(e.detail.selected)}>
  <UiTreeNode label="Legal" value="legal" expanded>
    <UiTreeNode label="Contracts team" value="contracts" />
    <UiTreeNode label="Litigation team" value="litigation" />
  </UiTreeNode>
  {/* … */}
</UiTreeView>
```

React + Tailwind:

```tsx
const [selected, setSelected] = useState<string[]>([]);

<TreeView label="Share with" multiselect selected={selected} onSelect={(next) => setSelected(next)}>
  <TreeNode label="Legal" value="legal" defaultExpanded>
    <TreeNode label="Contracts team" value="contracts" />
    <TreeNode label="Litigation team" value="litigation" />
  </TreeNode>
  {/* … */}
</TreeView>
```

## Sizes

`size`: `sm` 32px rows (the default) or `xs` 24px for dense trees.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view label="Chart of accounts" size="xs">
    <ui-tree-node label="1000 Assets" value="1000" expanded>
      <ui-tree-node label="1100 Cash" value="1100"></ui-tree-node>
      <ui-tree-node label="1200 Receivables" value="1200"></ui-tree-node>
    </ui-tree-node>
    <ui-tree-node label="2000 Liabilities" value="2000">
      <ui-tree-node label="2100 Payables" value="2100"></ui-tree-node>
    </ui-tree-node>
  </ui-tree-view>
</div>
```

React:

```tsx
<UiTreeView label="Chart of accounts" size="xs">…</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Chart of accounts" size="xs">…</TreeView>
```

## Disabled nodes

`disabled` shows a node but blocks it: it can't be selected or opened, and the arrow keys skip it.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view label="Templates">
    <ui-tree-node label="Standard NDA" value="nda"></ui-tree-node>
    <ui-tree-node label="Master services (being revised)" value="msa" disabled></ui-tree-node>
    <ui-tree-node label="Lease" value="lease"></ui-tree-node>
  </ui-tree-view>
</div>
```

React:

```tsx
<UiTreeView label="Templates">
  <UiTreeNode label="Standard NDA" value="nda" />
  <UiTreeNode label="Master services (being revised)" value="msa" disabled />
  <UiTreeNode label="Lease" value="lease" />
</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Templates">
  <TreeNode label="Standard NDA" value="nda" />
  <TreeNode label="Master services (being revised)" value="msa" disabled />
  <TreeNode label="Lease" value="lease" />
</TreeView>
```

## Open and close branches from code

`expanded` opens a branch. Set it from your code, for example for an "Expand all" button; `ui-toggle` fires with `{ expanded, value }` each time a branch opens or closes (`onToggle` on a React + Tailwind `TreeNode`).


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-button id="tree-view-expand-all" kind="ghost" size="sm">Expand all</ui-button>
  <ui-button id="tree-view-collapse-all" kind="ghost" size="sm">Collapse all</ui-button>
</div>
<div style="max-width: 360px">
  <ui-tree-view id="tree-view-toggle" label="Organisation">
    <ui-tree-node label="Head office" value="hq">
      <ui-tree-node label="Legal" value="legal">
        <ui-tree-node label="Contracts team" value="contracts"></ui-tree-node>
      </ui-tree-node>
      <ui-tree-node label="Finance" value="finance"></ui-tree-node>
    </ui-tree-node>
    <ui-tree-node label="Branches" value="branches">
      <ui-tree-node label="Chiang Mai" value="cnx"></ui-tree-node>
    </ui-tree-node>
  </ui-tree-view>
</div>
<p>Last change: <output id="tree-view-toggle-out"></output></p>

<script type="module">
  const tree = document.getElementById('tree-view-toggle');
  const branches = () => [...tree.querySelectorAll('ui-tree-node')].filter((node) => node.querySelector('ui-tree-node'));
  document.getElementById('tree-view-expand-all').addEventListener('click', () => branches().forEach((node) => (node.expanded = true)));
  document.getElementById('tree-view-collapse-all').addEventListener('click', () => branches().forEach((node) => (node.expanded = false)));
  tree.addEventListener('ui-toggle', (event) => {
    document.getElementById('tree-view-toggle-out').value = `${event.detail.value} ${event.detail.expanded ? 'opened' : 'closed'}`;
  });
</script>
```

React:

```tsx
const [open, setOpen] = useState<string[]>([]);
const isOpen = (value: string) => open.includes(value);
const onToggle = (e: CustomEvent<{ expanded: boolean; value: string }>) =>
  setOpen((now) => (e.detail.expanded ? [...new Set([...now, e.detail.value])] : now.filter((v) => v !== e.detail.value)));

<UiButton kind="ghost" size="sm" onClick={() => setOpen(['hq', 'legal', 'branches'])}>Expand all</UiButton>
<UiButton kind="ghost" size="sm" onClick={() => setOpen([])}>Collapse all</UiButton>
<UiTreeView label="Organisation">
  <UiTreeNode label="Head office" value="hq" expanded={isOpen('hq')} onUiToggle={onToggle}>
    <UiTreeNode label="Legal" value="legal" expanded={isOpen('legal')} onUiToggle={onToggle}>…</UiTreeNode>
    <UiTreeNode label="Finance" value="finance" />
  </UiTreeNode>
  {/* … */}
</UiTreeView>
```

React + Tailwind:

```tsx
const [open, setOpen] = useState<string[]>([]);
const toggle = (value: string) => (expanded: boolean) => setOpen((now) => (expanded ? [...now, value] : now.filter((v) => v !== value)));

<Button kind="ghost" size="sm" onClick={() => setOpen(['hq', 'legal', 'branches'])}>Expand all</Button>
<Button kind="ghost" size="sm" onClick={() => setOpen([])}>Collapse all</Button>
<TreeView label="Organisation">
  <TreeNode label="Head office" value="hq" expanded={open.includes('hq')} onToggle={toggle('hq')}>
    <TreeNode label="Legal" value="legal" expanded={open.includes('legal')} onToggle={toggle('legal')}>…</TreeNode>
    <TreeNode label="Finance" value="finance" />
  </TreeNode>
  {/* … */}
</TreeView>
```

`ui-toggle` bubbles, so one listener on the tree hears every node.

## Links

`href` turns a node's label into a link. Enter or a click follows it. In a single-page app, listen for `ui-navigate` (cancelable, `{ href }`) and route yourself.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view id="tree-view-links" label="Policies">
    <ui-tree-node label="Retention policy" value="retention" href="#links"></ui-tree-node>
    <ui-tree-node label="Signing authority" value="signing" href="#links"></ui-tree-node>
  </ui-tree-view>
</div>
<p>Would open: <output id="tree-view-links-out"></output></p>

<script type="module">
  document.getElementById('tree-view-links').addEventListener('ui-navigate', (event) => {
    event.preventDefault(); // route in the app instead of loading the page
    document.getElementById('tree-view-links-out').value = event.detail.href;
  });
</script>
```

React:

```tsx
<UiTreeView label="Policies">
  <UiTreeNode label="Retention policy" value="retention" href="/policies/retention" onUiNavigate={(e) => { e.preventDefault(); navigate(e.detail.href); }} />
  <UiTreeNode label="Signing authority" value="signing" href="/policies/signing" onUiNavigate={(e) => { e.preventDefault(); navigate(e.detail.href); }} />
</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Policies">
  <TreeNode label="Retention policy" value="retention" href="/policies/retention" />
  <TreeNode label="Signing authority" value="signing" href="/policies/signing" />
</TreeView>
```

React + Tailwind renders a plain `<a>`; route clicks with your router's own link handling.

## Load children on demand

`lazy` makes a node a branch before it has children. The first time it opens, a spinner replaces the caret and `ui-lazy-load` fires with its `value`: fetch the children and append them as `<ui-tree-node>`s. With nothing to add, set `lazy = false` and it becomes a leaf; after a failed load, set `loading = false` and it closes so the user can try again.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view id="tree-view-lazy" label="Case files on the server">
    <ui-tree-node label="Civil cases" value="civil" lazy></ui-tree-node>
    <ui-tree-node label="Criminal cases" value="criminal" lazy></ui-tree-node>
    <ui-tree-node label="Empty folder" value="empty" lazy></ui-tree-node>
  </ui-tree-view>
</div>

<script type="module">
  document.getElementById('tree-view-lazy').addEventListener('ui-lazy-load', (event) => {
    const node = event.target;
    setTimeout(() => {
      // a pretend server that answers after 800ms
      if (event.detail.value === 'empty') {
        node.lazy = false;
        return;
      }
      for (const n of [1, 2, 3]) {
        const child = document.createElement('ui-tree-node');
        child.label = `${node.label} ${n}`;
        child.value = `${event.detail.value}-${n}`;
        node.append(child);
      }
    }, 800);
  });
</script>
```

React:

```tsx
const [children, setChildren] = useState<Record<string, string[]>>({});
const load = async (e: CustomEvent<{ value: string }>) => {
  const node = e.target as TreeNodeElement;
  const names = await fetchFolder(e.detail.value);
  if (names.length === 0) node.lazy = false;
  else setChildren((now) => ({ ...now, [e.detail.value]: names }));
};

<UiTreeView label="Case files on the server" onUiLazyLoad={load}>
  {['civil', 'criminal', 'empty'].map((folder) => (
    <UiTreeNode key={folder} label={folder} value={folder} lazy>
      {children[folder]?.map((name) => <UiTreeNode key={name} label={name} value={`${folder}/${name}`} />)}
    </UiTreeNode>
  ))}
</UiTreeView>
```

React + Tailwind:

```tsx
const [children, setChildren] = useState<Record<string, string[]>>({});
// a resolved promise with no children makes the node a leaf; a rejected one closes it to retry
const load = async (folder: string) => {
  const names = await fetchFolder(folder);
  setChildren((now) => ({ ...now, [folder]: names }));
};

<TreeView label="Case files on the server">
  {['civil', 'criminal', 'empty'].map((folder) => (
    <TreeNode key={folder} label={folder} value={folder} lazy onLazyLoad={load}>
      {children[folder]?.map((name) => <TreeNode key={name} label={name} value={`${folder}/${name}`} />)}
    </TreeNode>
  ))}
</TreeView>
```

`TreeNodeElement` is `import type { UiTreeNode as TreeNodeElement } from '@purpurabog/ui'`.

## A hidden label

`hide-label` (`hideLabel` in React + Tailwind) keeps the label for screen readers only, when a heading above the tree already names it.


HTML:

```html
<div style="max-width: 360px">
  <ui-tree-view label="Folders" hide-label>
    <ui-tree-node label="Contracts" value="contracts"></ui-tree-node>
    <ui-tree-node label="Templates" value="templates"></ui-tree-node>
  </ui-tree-view>
</div>
```

React:

```tsx
<UiTreeView label="Folders" hideLabel>…</UiTreeView>
```

React + Tailwind:

```tsx
<TreeView label="Folders" hideLabel>…</TreeView>
```

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves into the tree and out of it: the tree is one Tab stop (the node focused last, else the selected one, else the first) |
| Up / Down | Previous / next visible node |
| Home / End | First / last visible node |
| Right | Opens a closed branch; on an open one, moves to its first child |
| Left | Closes an open branch; on a closed one or a leaf, moves to its parent |
| Enter | Opens or closes a branch, selects the node and follows its link |
| Space | Selects the node; in a `multiselect` tree, adds or removes it |
| Ctrl / ⌘ + A | Selects every node (`multiselect`) |
| A letter | Moves to the next visible node whose label starts with it |

## Accessibility

- The tree is a `role="tree"` of `treeitem`s, with `aria-expanded` on branches and `aria-selected` on every node. Each branch's children are a `group` named by its row.
- `label` names the tree. The caret is hidden from screen readers: the keys above do its job.
- A loading node is `aria-busy` and says "Loading".

Unstyled React parts with the same behaviour: [Headless Tree view](https://parntengza.github.io/kanok-ui-docs/en/headless-tree-view/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-tree-view>` · React `UiTreeView`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `hide-label` | `hideLabel` | `boolean` | `false` |  |
| `size` | `size` | `TreeViewSize` | `'sm'` |  |
| `multiselect` | `multiselect` | `boolean` | `false` |  |
| `active` | `active` | `string` | `''` | The node that was last activated (4px marker). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `selected` | `string[]` | Selected node values. |
| `nodes` | `UiTreeNode[]` | (read-only) Every node, document order. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-select` | `onUiSelect` | detail: { selected: string[], value } after a selection change |
| `ui-activate` | `onUiActivate` | detail: { active } when a node becomes the active one |

#### Slots

| Slot | Description |
|---|---|
| (default) | Top-level `<ui-tree-node>`s |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The tree label |
| `tree` | The `role=tree` container |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tree-selected` |  | / --ui-tree-mark - The selected row's fill and mark (on `<ui-tree-node>`, with the other --ui-tree-* settings) |

### `<ui-tree-node>` · React `UiTreeNode`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `''` |  |
| `value` | `value` | `string` | `''` | Identifies the node in `selected` / `active`; defaults to `label`. |
| `expanded` | `expanded` | `boolean` | `false` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `href` | `href` | `string` | `''` |  |
| `lazy` | `lazy` | `boolean` | `false` | A branch whose children aren't loaded yet: it shows a caret and fires `ui-lazy-load` when first expanded. |
| `loading` | `loading` | `boolean` | `false` | The children are being fetched; set by the node when a `lazy` branch opens, cleared when children arrive. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `depth` | `number` | Set by the tree. |
| `isBranch` |  | (read-only) Has child nodes, or is `lazy` and will have them. |
| `treeValue` |  | (read-only) What identifies the node in the tree's `selected` / `active`: `value`, else `label`, else the label slot's text. (Was `nodeValue`, which shadowed DOM `Node.nodeValue`.) |
| `labelText` |  | (read-only) The label as text, which type-ahead matches: the `label` slot's text when it is used, else `label`. |
| `childTreeNodes` | `UiTreeNode[]` | (read-only) Direct child nodes. |
| `parentTreeNode` | `UiTreeNode \| null` | (read-only) The enclosing node, or null at the top level. |

#### Methods

| Method | Description |
|---|---|
| `toggle(expanded)` | Expand / collapse (branches only, including `lazy` ones). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-toggle` | `onUiToggle` | detail: { expanded, value } when the branch opens / closes |
| `ui-lazy-load` | `onUiLazyLoad` | detail: { value } when a `lazy` node is expanded and its children should be fetched |
| `ui-navigate` | `onUiNavigate` | detail: { href } (cancelable) on a plain click of the link; cancel it to route client-side (README: SPA router) |

#### Slots

| Slot | Description |
|---|---|
| (default) | Child nodes |
| `icon` | 16px icon before the label |
| `label` | Rich label (Carbon React's `label` node): replaces the `label` text, which stays the plain-text fallback |
| `end` | Beyond Carbon: content at the end of the row (an amount, a count, a badge), kept whole while the label truncates; it then describes the node, which the label alone names |

#### CSS parts

| Part | Description |
|---|---|
| `label` | The row |
| `toggle` | The caret button (branches) |
| `children` | The `role=group` container |
| `end` | The end content's wrapper (beyond Carbon) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-tree-background` |  | / --ui-tree-row-radius - Row fill and corners (default the layer, 0; Kanok: transparent, 6px) |
| `--ui-tree-selected` |  | / --ui-tree-selected-hover - The selected row's fill and its hover (default layer-selected, layer-selected-hover; Kanok: the highlight tint) |
| `--ui-tree-mark` |  | / --ui-tree-mark-width / --ui-tree-mark-inset / --ui-tree-mark-radius - The selected row's start mark (default interactive, 4px, full height, square; Kanok: none, the tint alone — forced colours still show it) |
| `--ui-tree-pointer-outline` |  | The ring of a node focused by a click, not the keyboard (default the focus ring, as Carbon; Kanok: none) |


