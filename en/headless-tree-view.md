# Headless Tree view

`TreeView` is the behaviour of the styled [Tree view](https://parntengza.github.io/kanok-ui-docs/en/tree-view/) as unstyled React parts, following the WAI-ARIA tree pattern: a `role="tree"` of nested `Node`s, one Tab stop, the arrow keys, Home / End, typing to jump, single or multiple selection, an active node, and children loaded on demand.

You own the markup: each node's `Row` (caret, icon, label), the indent, and every style. State shows as `data-*` attributes on the node and its row; `useNodeContext()` gives a node's depth for the indent.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { TreeView } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import type { ReactNode } from 'react';
import { TreeView } from '@purpurabog/ui/headless';

interface Item {
  value: string;
  label: string;
  children?: Item[];
}

const folders: Item[] = [
  { value: 'contracts', label: 'Contracts', children: [
    { value: 'c1', label: 'Service agreement – Acme' },
    { value: 'c2', label: 'NDA – Globex' },
  ] },
  { value: 'templates', label: 'Templates', children: [{ value: 't1', label: 'Standard NDA' }] },
];

function Row({ children }: { children: ReactNode }) {
  const node = TreeView.useNodeContext();
  return (
    <TreeView.Row style={{ paddingInlineStart: 8 + node.depth * 24 }} className="flex h-8 cursor-pointer items-center gap-2 pe-4 text-sm text-ink-muted hover:bg-ghost-hover hover:text-ink data-selected:bg-layer-selected-1 data-selected:text-ink">
      {node.branch ? (
        <TreeView.Toggle className="flex size-4 items-center justify-center">
          <svg viewBox="0 0 16 16" className={`size-4 fill-current transition-transform ${node.expanded ? '' : '-rotate-90'}`}><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
        </TreeView.Toggle>
      ) : (
        <span className="size-4" />
      )}
      {children}
    </TreeView.Row>
  );
}

function Branch({ item }: { item: Item }) {
  return (
    <TreeView.Node value={item.value} label={item.label} hasChildren={!!item.children} defaultExpanded className="outline-none [&:focus-visible>:first-child]:outline-2 [&:focus-visible>:first-child]:-outline-offset-2 [&:focus-visible>:first-child]:outline-focus">
      <Row>{item.label}</Row>
      {item.children ? (
        <TreeView.Group>
          {item.children.map((child) => <Branch key={child.value} item={child} />)}
        </TreeView.Group>
      ) : null}
    </TreeView.Node>
  );
}

export default function Example() {
  return (
    <TreeView.Root aria-label="Folders" className="max-w-xs bg-layer-1">
      {folders.map((item) => <Branch key={item.value} item={item} />)}
    </TreeView.Root>
  );
}
```

## Anatomy

```tsx
<TreeView.Root>
  <TreeView.Node value="…" hasChildren>
    <TreeView.Row>
      <TreeView.Toggle />
      label
    </TreeView.Row>
    <TreeView.Group>
      <TreeView.Node value="…">
        <TreeView.Row>label</TreeView.Row>
      </TreeView.Node>
    </TreeView.Group>
  </TreeView.Node>
</TreeView.Root>
```

`hasChildren` tells a `Node` it is a branch. The tree finds the nodes in the DOM, so they can come from any component, at any depth.

## Selection and the active node

A click, Space or Enter selects a node and makes it the active one. Hold both with `selected` / `onSelect` and `active` / `onActivate`, or start them with `defaultSelected` / `defaultActive`. With `multiselect`, Ctrl / ⌘ + click and Space toggle a node, and Ctrl / ⌘ + A selects every enabled node.


React (live React example):

```tsx
import { useState, type ReactNode } from 'react';
import { TreeView } from '@purpurabog/ui/headless';

function Row({ children }: { children: ReactNode }) {
  const node = TreeView.useNodeContext();
  return (
    <TreeView.Row style={{ paddingInlineStart: 8 + node.depth * 24 }} className="flex h-8 cursor-pointer items-center gap-2 border-s-4 border-transparent pe-4 text-sm text-ink-muted hover:bg-ghost-hover data-active:border-interactive data-selected:bg-layer-selected-1 data-selected:text-ink data-disabled:cursor-not-allowed data-disabled:text-ink-disabled data-disabled:hover:bg-transparent">
      {node.branch ? <TreeView.Toggle className="w-4 text-center">{node.expanded ? '▾' : '▸'}</TreeView.Toggle> : <span className="w-4" />}
      {children}
    </TreeView.Row>
  );
}

const nodeClass = 'outline-none [&:focus-visible>:first-child]:outline-2 [&:focus-visible>:first-child]:-outline-offset-2 [&:focus-visible>:first-child]:outline-focus';

export default function Example() {
  const [multiselect, setMultiselect] = useState(true);
  const [selected, setSelected] = useState<string[]>(['contracts-team']);
  const [active, setActive] = useState('contracts-team');
  return (
    <div className="grid max-w-xs gap-3">
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={multiselect} onChange={(e) => setMultiselect(e.target.checked)} />
        multiselect
      </label>
      <TreeView.Root aria-label="Share with" multiselect={multiselect} selected={selected} onSelect={(next) => setSelected(next)} active={active} onActivate={setActive} className="bg-layer-1">
        <TreeView.Node value="legal" label="Legal" hasChildren defaultExpanded className={nodeClass}>
          <Row>Legal</Row>
          <TreeView.Group>
            <TreeView.Node value="contracts-team" label="Contracts team" className={nodeClass}><Row>Contracts team</Row></TreeView.Node>
            <TreeView.Node value="litigation" label="Litigation team" className={nodeClass}><Row>Litigation team</Row></TreeView.Node>
          </TreeView.Group>
        </TreeView.Node>
        <TreeView.Node value="finance" label="Finance" className={nodeClass}><Row>Finance</Row></TreeView.Node>
        <TreeView.Node value="archive" label="Archive (read only)" disabled className={nodeClass}><Row>Archive (read only)</Row></TreeView.Node>
      </TreeView.Root>
      <p className="text-xs text-ink-muted">Selected: {selected.join(', ') || '(none)'} · active: {active || '(none)'}</p>
    </div>
  );
}
```

A `disabled` node can't be selected or opened, and the arrow keys skip it.

## Open and close branches

Each `Node` keeps its own open state (`defaultExpanded`), or takes `expanded` with `onToggle` when you hold it, for example for an "Expand all" button. Right opens a branch and Left closes it; the `Toggle` caret does the same with the mouse.


React (live React example):

```tsx
import { useState, type ReactNode } from 'react';
import { TreeView } from '@purpurabog/ui/headless';

const branches = ['hq', 'legal', 'branches'];

function Row({ children }: { children: ReactNode }) {
  const node = TreeView.useNodeContext();
  return (
    <TreeView.Row style={{ paddingInlineStart: 8 + node.depth * 24 }} className="flex h-8 cursor-pointer items-center gap-2 pe-4 text-sm text-ink-muted hover:bg-ghost-hover data-selected:bg-layer-selected-1 data-selected:text-ink">
      {node.branch ? <TreeView.Toggle className="w-4 text-center">{node.expanded ? '▾' : '▸'}</TreeView.Toggle> : <span className="w-4" />}
      {children}
    </TreeView.Row>
  );
}

const nodeClass = 'outline-none [&:focus-visible>:first-child]:outline-2 [&:focus-visible>:first-child]:-outline-offset-2 [&:focus-visible>:first-child]:outline-focus';
const button = 'h-8 px-3 text-sm text-link hover:bg-ghost-hover focus-visible:outline-2 focus-visible:outline-focus';

export default function Example() {
  const [open, setOpen] = useState<string[]>(['hq']);
  const props = (value: string) => ({
    expanded: open.includes(value),
    onToggle: (expanded: boolean) => setOpen((now) => (expanded ? [...now, value] : now.filter((v) => v !== value))),
  });
  return (
    <div className="grid max-w-xs gap-2">
      <div className="flex gap-2">
        <button type="button" className={button} onClick={() => setOpen(branches)}>Expand all</button>
        <button type="button" className={button} onClick={() => setOpen([])}>Collapse all</button>
      </div>
      <TreeView.Root aria-label="Organisation" className="bg-layer-1">
        <TreeView.Node value="hq" label="Head office" hasChildren {...props('hq')} className={nodeClass}>
          <Row>Head office</Row>
          <TreeView.Group>
            <TreeView.Node value="legal" label="Legal" hasChildren {...props('legal')} className={nodeClass}>
              <Row>Legal</Row>
              <TreeView.Group>
                <TreeView.Node value="contracts" label="Contracts team" className={nodeClass}><Row>Contracts team</Row></TreeView.Node>
              </TreeView.Group>
            </TreeView.Node>
            <TreeView.Node value="finance" label="Finance" className={nodeClass}><Row>Finance</Row></TreeView.Node>
          </TreeView.Group>
        </TreeView.Node>
        <TreeView.Node value="branches" label="Branches" hasChildren {...props('branches')} className={nodeClass}>
          <Row>Branches</Row>
          <TreeView.Group>
            <TreeView.Node value="cnx" label="Chiang Mai" className={nodeClass}><Row>Chiang Mai</Row></TreeView.Node>
          </TreeView.Group>
        </TreeView.Node>
      </TreeView.Root>
      <p className="text-xs text-ink-muted">Open: {open.join(', ') || '(none)'}</p>
    </div>
  );
}
```

## Load children on demand

`lazy` makes a node a branch before it has children. The first time it opens, it gets `data-loading` and `aria-busy` and calls `onLazyLoad(value)`: render the children when they arrive. A returned promise that resolves while there are still no children makes the node a leaf; one that rejects closes it, so opening it again retries.


React (live React example):

```tsx
import { useState, type ReactNode } from 'react';
import { TreeView } from '@purpurabog/ui/headless';

function Row({ children }: { children: ReactNode }) {
  const node = TreeView.useNodeContext();
  let caret: ReactNode = <span className="w-4" />;
  if (node.loading) caret = <span className="size-3 animate-spin rounded-full border-2 border-border-subtle-1 border-t-interactive" aria-hidden="true" />;
  else if (node.branch) caret = <TreeView.Toggle className="w-4 text-center">{node.expanded ? '▾' : '▸'}</TreeView.Toggle>;
  return (
    <TreeView.Row style={{ paddingInlineStart: 8 + node.depth * 24 }} className="flex h-8 cursor-pointer items-center gap-2 pe-4 text-sm text-ink-muted hover:bg-ghost-hover data-selected:bg-layer-selected-1 data-selected:text-ink">
      {caret}
      {children}
      {node.loading ? <span className="sr-only">, loading</span> : null}
    </TreeView.Row>
  );
}

const nodeClass = 'outline-none [&:focus-visible>:first-child]:outline-2 [&:focus-visible>:first-child]:-outline-offset-2 [&:focus-visible>:first-child]:outline-focus';
const folders = [
  { value: 'civil', label: 'Civil cases' },
  { value: 'criminal', label: 'Criminal cases' },
  { value: 'empty', label: 'Empty folder' },
];

/** A pretend server: three files after 800ms, none for the empty folder. */
const fetchFolder = (value: string) =>
  new Promise<string[]>((resolve) => setTimeout(() => resolve(value === 'empty' ? [] : [1, 2, 3].map((n) => `${value}-${n}`)), 800));

export default function Example() {
  const [children, setChildren] = useState<Record<string, string[]>>({});
  const load = async (value: string) => {
    const files = await fetchFolder(value);
    setChildren((now) => ({ ...now, [value]: files }));
  };
  return (
    <TreeView.Root aria-label="Case files on the server" className="max-w-xs bg-layer-1">
      {folders.map((folder) => {
        const files = children[folder.value] ?? [];
        return (
          <TreeView.Node key={folder.value} value={folder.value} label={folder.label} lazy hasChildren={files.length > 0} onLazyLoad={load} className={nodeClass}>
            <Row>{folder.label}</Row>
            <TreeView.Group>
              {files.map((file) => (
                <TreeView.Node key={file} value={file} label={file} className={nodeClass}>
                  <Row>File {file}</Row>
                </TreeView.Node>
              ))}
            </TreeView.Group>
          </TreeView.Node>
        );
      })}
    </TreeView.Root>
  );
}
```

## Links

Put an `<a>` in a node's `Row`. Enter follows the node's own link (after selecting it); keep the link out of the Tab order with `tabIndex={-1}`, since the node takes the keyboard.


React (live React example):

```tsx
import { useState } from 'react';
import { TreeView } from '@purpurabog/ui/headless';

const policies = [
  { value: 'retention', label: 'Retention policy', href: '#retention' },
  { value: 'signing', label: 'Signing authority', href: '#signing' },
];

export default function Example() {
  const [opened, setOpened] = useState('');
  return (
    <div className="grid max-w-xs gap-2">
      <TreeView.Root aria-label="Policies" className="bg-layer-1">
        {policies.map((p) => (
          <TreeView.Node key={p.value} value={p.value} label={p.label} className="outline-none [&:focus-visible>:first-child]:outline-2 [&:focus-visible>:first-child]:-outline-offset-2 [&:focus-visible>:first-child]:outline-focus">
            <TreeView.Row className="flex h-8 items-center px-4 text-sm hover:bg-ghost-hover data-selected:bg-layer-selected-1">
              <a
                href={p.href}
                tabIndex={-1}
                className="text-link no-underline"
                onClick={(e) => {
                  e.preventDefault(); // route in the app instead
                  setOpened(p.href);
                }}
              >
                {p.label}
              </a>
            </TreeView.Row>
          </TreeView.Node>
        ))}
      </TreeView.Root>
      <p className="text-xs text-ink-muted">Would open: {opened}</p>
    </div>
  );
}
```

## Style it


React (live React example):

```tsx
import type { ReactNode } from 'react';
import { TreeView } from '@purpurabog/ui/headless';

const folderIcon = <path d="M14 4H8.6L7.3 2.3A1 1 0 0 0 6.5 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM2 3h4.5l1.3 1.7A1 1 0 0 0 8.6 5H14v1H2Zm0 10V7h12v6Z" />;
const docIcon = <path d="M13 3.6 10.4 1H3v14h10zM10 2.4 11.6 4H10zM4 14V2h5v3h3v9z" />;

function Row({ children }: { children: ReactNode }) {
  const node = TreeView.useNodeContext();
  return (
    <TreeView.Row
      style={{ paddingInlineStart: 8 + node.depth * 24 }}
      className="group/row relative flex h-8 cursor-pointer items-center gap-2 pe-4 text-sm text-ink-muted hover:bg-ghost-hover hover:text-ink data-selected:bg-layer-selected-1 data-selected:text-ink data-active:before:absolute data-active:before:inset-y-0 data-active:before:start-0 data-active:before:w-1 data-active:before:bg-interactive data-disabled:cursor-not-allowed data-disabled:text-ink-disabled"
    >
      {node.branch ? (
        <TreeView.Toggle className="flex size-4 items-center justify-center">
          <svg viewBox="0 0 16 16" className="size-4 -rotate-90 fill-icon-secondary transition-transform group-data-expanded/row:rotate-0"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
        </TreeView.Toggle>
      ) : (
        <span className="size-4" />
      )}
      <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-icon-secondary group-data-selected/row:fill-icon-primary">{node.branch ? folderIcon : docIcon}</svg>
      {children}
    </TreeView.Row>
  );
}

const nodeClass = 'outline-none [&:focus-visible>:first-child]:outline-2 [&:focus-visible>:first-child]:-outline-offset-2 [&:focus-visible>:first-child]:outline-focus';

export default function Example() {
  return (
    <TreeView.Root aria-label="Contract folder" defaultSelected={['sa']} defaultActive="sa" className="max-w-xs bg-layer-1">
      <TreeView.Node value="acme" label="Acme Co., Ltd." hasChildren defaultExpanded className={nodeClass}>
        <Row>Acme Co., Ltd.</Row>
        <TreeView.Group>
          <TreeView.Node value="sa" label="Service agreement.pdf" className={nodeClass}><Row>Service agreement.pdf</Row></TreeView.Node>
          <TreeView.Node value="pl" label="Price list.pdf" className={nodeClass}><Row>Price list.pdf</Row></TreeView.Node>
          <TreeView.Node value="draft" label="Draft.pdf" disabled className={nodeClass}><Row>Draft.pdf</Row></TreeView.Node>
        </TreeView.Group>
      </TreeView.Node>
    </TreeView.Root>
  );
}
```
```css
[role='treeitem'] { outline: none; }
[role='treeitem']:focus-visible > .tree-row { outline: 2px solid #0f62fe; outline-offset: -2px; }
.tree-row:hover { background: #e8e8e8; }
.tree-row[data-selected] { background: #e0e0e0; color: #161616; }
.tree-row[data-active] { box-shadow: inset 4px 0 0 #0f62fe; }
.tree-row[data-disabled] { color: #c6c6c6; cursor: not-allowed; }
.tree-caret { transform: rotate(-90deg); }
.tree-caret[data-expanded] { transform: none; }
```

## Parts

### TreeView.Root

Renders a `<div role="tree">` and handles the keys, clicks and the one Tab stop for every node inside. It takes every `<div>` prop except `role`.

| Prop | Type | Default | |
|---|---|---|---|
| `multiselect` | `boolean` | `false` | Ctrl / ⌘ + click and Space toggle nodes; Ctrl / ⌘ + A selects all (`aria-multiselectable`) |
| `selected` | `readonly string[]` | | Selected node values (controlled) |
| `defaultSelected` | `readonly string[]` | `[]` | The starting selection (uncontrolled) |
| `onSelect` | `(selected: string[], value: string) => void` | | After the user changed the selection; `value` is the node that did it |
| `active` | `string` | | The node last activated (controlled) |
| `defaultActive` | `string` | `''` | The starting active node (uncontrolled) |
| `onActivate` | `(value: string) => void` | | After a node became the active one |

| Attribute | When |
|---|---|
| `data-multiselect` | `multiselect` is set |

`TreeView.useTreeViewContext()` returns `multiselect`, `selected`, `active` and `tabStop` to any component inside `Root`.

### TreeView.Node

Renders a `<div role="treeitem">` with `aria-expanded` (branches), `aria-selected`, `aria-disabled` and `aria-busy`. Put its `Row` and, for a branch, its `Group` inside. It takes every `<div>` prop except `role`.

| Prop | Type | Default | |
|---|---|---|---|
| `value` | `string` | | Identifies the node in `selected` and `active` (required) |
| `label` | `string` | `value` | The text typing matches |
| `hasChildren` | `boolean` | `false` | The node has child nodes in its `Group`: a branch |
| `disabled` | `boolean` | `false` | Can't be selected or opened; the keys skip it |
| `expanded` | `boolean` | | Open (controlled) |
| `defaultExpanded` | `boolean` | `false` | Open at first (uncontrolled) |
| `onToggle` | `(expanded: boolean) => void` | | After the branch opened or closed |
| `lazy` | `boolean` | `false` | A branch whose children aren't loaded yet |
| `onLazyLoad` | `(value: string) => void \| Promise<void>` | | Called the first time a `lazy` node opens |

| Attribute | When |
|---|---|
| `data-selected` | The node is selected |
| `data-active` | The node is the active one |
| `data-disabled` | `disabled` is set |
| `data-branch` | It has children, or is `lazy` and may get some |
| `data-expanded` | A branch that is open |
| `data-loading` | A `lazy` node waiting for its children |

`TreeView.useNodeContext()` returns the node's `value`, `branch`, `expanded`, `loading`, `selected`, `active`, `disabled`, `depth` (0 at the top level), `rowId` and `toggle(expanded)`.

### TreeView.Row

Renders a `<div>`: what the user sees and clicks. Its id names the node's `Group`. It has the same `data-*` attributes as its `Node`.

### TreeView.Toggle

Renders a `<button type="button">` that opens and closes the branch; a click on the rest of the row selects instead. It is out of the Tab order and hidden from assistive tech (`aria-hidden`), since the node takes the keyboard.

| Attribute | When |
|---|---|
| `data-expanded` | The branch is open |

### TreeView.Group

Renders a `<div role="group">` holding the child nodes, named by the row (`aria-labelledby`) and `hidden` while the branch is closed. Each `Group` adds one to the depth of the nodes inside.

| Attribute | When |
|---|---|
| `data-expanded` | The branch is open |

## Keyboard and accessibility

- One Tab stop for the whole tree: the node focused last, else the selected one, else the first visible one.
- Up / Down move through the visible nodes, Home / End jump to the first / last. Right opens a branch or moves to its first child; Left closes it or moves to the parent.
- Enter opens or closes a branch, selects the node and follows the node's own link. Space selects (toggles in a `multiselect` tree). Typing a letter moves to the next node whose `label` starts with it.
- You add the tree's name (`aria-label` or `aria-labelledby` on `Root`), the indent, the caret and a visible focus style on the row.
- Say "loading" for a loading node in its row (for example a visually hidden text), as the styled tree does.
