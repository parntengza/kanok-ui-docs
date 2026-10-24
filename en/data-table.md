# Data table

A data table shows rows of records in columns (Carbon `DataTable`). The web component follows Carbon web components (`cds-table`): you write the table as elements — `<ui-table-head>` with the header cells, `<ui-table-body>` with rows of cells — and it sorts, searches, selects, expands and pages the rows it holds. Beyond Carbon it can hide and pin columns, export CSV, edit cells in place and resize columns. The React + Tailwind `DataTable` is driven by data instead: you give it `headers` and `rows`.

Coming from `<ui-data-table>` (before 1.0)? See [Migrating to 1.0](https://parntengza.github.io/kanok-ui-docs/en/migration-1-0/).


HTML:

```html
<ui-table>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-header-description slot="description">Active contracts of the legal department</ui-table-header-description>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Counterparty</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
      <ui-table-header-cell>Updated</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row>
      <ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell>Signed</ui-table-cell><ui-table-cell>2026-09-30</ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell>Draft</ui-table-cell><ui-table-cell>2026-10-01</ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell>In review</ui-table-cell><ui-table-cell>2026-09-12</ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>Master services</ui-table-cell><ui-table-cell>Umbrella</ui-table-cell><ui-table-cell>Signed</ui-table-cell><ui-table-cell>2026-08-21</ui-table-cell>
    </ui-table-row>
  </ui-table-body>
</ui-table>
```

React:

```tsx
const headers = [
  { key: 'name', header: 'Contract' },
  { key: 'party', header: 'Counterparty' },
  { key: 'status', header: 'Status' },
  { key: 'updated', header: 'Updated' },
];
const rows = [
  { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed', updated: '2026-09-30' },
  { id: '2', name: 'NDA', party: 'Globex', status: 'Draft', updated: '2026-10-01' },
  { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review', updated: '2026-09-12' },
  { id: '4', name: 'Master services', party: 'Umbrella', status: 'Signed', updated: '2026-08-21' },
];

// the header cells and a row's cells, used again in the examples below
const headerCells = headers.map((h) => <UiTableHeaderCell key={h.key} column={h.key}>{h.header}</UiTableHeaderCell>);
const cells = (row: Record<string, string>) => headers.map((h) => <UiTableCell key={h.key}>{row[h.key]}</UiTableCell>);

<UiTable>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHeaderDescription slot="description">Active contracts of the legal department</UiTableHeaderDescription>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" description="Active contracts of the legal department" headers={headers} rows={rows} />
```

`headers` and `rows` are the same data in every version: the HTML writes them out as elements, the React examples below map them with `headerCells` and `cells(row)` from above, and React + Tailwind takes them as props.

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/table
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-data-table
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/table.json
#    to its target:
#    components/ui/primitives/table/defs.ts
#    components/ui/primitives/table/table-batch-actions.ts
#    components/ui/primitives/table/table-body.ts
#    components/ui/primitives/table/table-cell.ts
#    components/ui/primitives/table/table-column-resize.ts
#    components/ui/primitives/table/table-column-settings.ts
#    components/ui/primitives/table/table-column.styles.ts
#    components/ui/primitives/table/table-csv-export.ts
#    components/ui/primitives/table/table-expanded-row.ts
#    components/ui/primitives/table/table-grid.ts
#    components/ui/primitives/table/table-head.ts
#    components/ui/primitives/table/table-header-cell.ts
#    components/ui/primitives/table/table-header-description.ts
#    components/ui/primitives/table/table-header-row.ts
#    components/ui/primitives/table/table-header-title.ts
#    components/ui/primitives/table/table-row.ts
#    components/ui/primitives/table/table-skeleton.ts
#    components/ui/primitives/table/table-toolbar-action.styles.ts
#    components/ui/primitives/table/table-toolbar-content.ts
#    components/ui/primitives/table/table-toolbar-search.ts
#    components/ui/primitives/table/table-toolbar.ts
#    components/ui/primitives/table/table.styles.ts
#    components/ui/primitives/table/table.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    button, checkbox, core-column-resize, core-csv, core-grid, core-table, pagination, popover, radio, search, shared-element, shared-events, shared-field, shared-localize, shared-skeleton, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^1.4.3
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-data-table.json
#    to its target:
#    components/ui/react-tw/data-table.tsx
#    components/ui/react-tw/data-table-pins.ts
#    components/ui/react-tw/data-table.styles.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-grid, core-table, tw-checkbox, tw-data-table-columns, tw-data-table-csv, tw-data-table-grid, tw-data-table-parts, tw-data-table-resize, tw-data-table-skeleton, tw-dom, tw-i18n, tw-pagination, tw-refs, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">
  import '@purpurabog/ui/table';
</script>

<ui-table aria-label="Contracts">
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row>
      <ui-table-cell>Service agreement</ui-table-cell>
      <ui-table-cell>Signed</ui-table-cell>
    </ui-table-row>
  </ui-table-body>
</ui-table>
```

React:

```tsx
import { UiTable, UiTableHead, UiTableHeaderRow, UiTableHeaderCell, UiTableBody, UiTableRow, UiTableCell } from '@purpurabog/ui/react';

<UiTable aria-label="Contracts">
  <UiTableHead>
    <UiTableHeaderRow>
      <UiTableHeaderCell>Contract</UiTableHeaderCell>
      <UiTableHeaderCell>Status</UiTableHeaderCell>
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    <UiTableRow>
      <UiTableCell>Service agreement</UiTableCell>
      <UiTableCell>Signed</UiTableCell>
    </UiTableRow>
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
import { DataTable } from '@/components/ui/react-tw/data-table';

<DataTable
  heading="Contracts"
  headers={[{ key: 'name', header: 'Contract' }, { key: 'status', header: 'Status' }]}
  rows={[{ id: '1', name: 'Service agreement', status: 'Signed' }]}
/>
```

`@purpurabog/ui/table` defines every `ui-table*` element. `<ui-table>` holds a `<ui-table-head>` with one `<ui-table-header-row>` of `<ui-table-header-cell>`s and a `<ui-table-body>` with `<ui-table-row>`s of `<ui-table-cell>`s; a cell's column is its place in the row. The title, description and toolbar go in the table's `title`, `description` and `toolbar` slots. The table works on the rows it finds: add, remove or reorder rows and it follows. In React + Tailwind each header is `{ key, header }` and each row needs a stable `id`.

## Custom cells

A cell shows whatever you put in it: a formatted number, a link, a tag. Sorting reads a cell's `sort-value` when it has one (give an amount shown as "1,250,000" its plain number) and CSV export its `csv-value`; both fall back to the cell's text. The search reads the text.


HTML:

```html
<ui-table>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Amount (THB)</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row>
      <ui-table-cell>Service agreement</ui-table-cell>
      <ui-table-cell sort-value="1250000" csv-value="1250000">1,250,000</ui-table-cell>
      <ui-table-cell><ui-tag size="sm" type="green">Signed</ui-tag></ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>NDA</ui-table-cell>
      <ui-table-cell sort-value="0" csv-value="0">0</ui-table-cell>
      <ui-table-cell><ui-tag size="sm" type="gray">Draft</ui-tag></ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>Lease renewal</ui-table-cell>
      <ui-table-cell sort-value="480000" csv-value="480000">480,000</ui-table-cell>
      <ui-table-cell><ui-tag size="sm" type="blue">In review</ui-tag></ui-table-cell>
    </ui-table-row>
  </ui-table-body>
</ui-table>
```

React:

```tsx
const tagTypes = { Signed: 'green', Draft: 'gray', 'In review': 'blue' } as const;

<UiTable>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => (
      <UiTableRow key={row.id}>
        <UiTableCell>{row.name}</UiTableCell>
        <UiTableCell sort-value={String(row.amount)} csv-value={String(row.amount)}>{row.amount.toLocaleString('th-TH')}</UiTableCell>
        <UiTableCell><UiTag size="sm" type={tagTypes[row.status]}>{row.status}</UiTag></UiTableCell>
      </UiTableRow>
    ))}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
import { Tag } from '@/components/ui/react-tw/tag';

const tagTypes = { Signed: 'green', Draft: 'gray', 'In review': 'blue' } as const;

<DataTable
  heading="Contracts"
  headers={headers}
  rows={rows}
  renderCell={(row, header) => {
    if (header.key === 'amount') return Number(row.amount).toLocaleString('th-TH');
    if (header.key === 'status') return <Tag size="sm" type={tagTypes[row.status as keyof typeof tagTypes]}>{String(row.status)}</Tag>;
    return String(row[header.key]);
  }}
/>
```

React + Tailwind renders cells with `renderCell(row, header)`, which returns React nodes, and `align: 'end'` on a header puts that column's cells at the end; sorting and search use the raw values.

## Sorting

`is-sortable` on the table gives every header a sort button; `is-sortable` on single headers makes only those sortable (the table's attribute sets every header). A click steps the header's `sort-direction` through its `sort-cycle` (default none → ascending → descending → none); the other headers go back to none and the table moves its rows into that order. Numbers sort by value, text by `locale` (default: the page's `lang`), and none restores the order the rows came in. A header with `sort-direction` in the markup sorts the rows on load. The header fires a cancelable `ui-table-header-cell-sort` with `{ oldSortDirection, sortDirection }` before the rows move, and the table fires `ui-table-sorted` with `{ sortedHeader }` after.


HTML:

```html
<ui-table id="table-sort">
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell column="name" is-sortable>Contract</ui-table-header-cell>
      <ui-table-header-cell column="party">Counterparty</ui-table-header-cell>
      <ui-table-header-cell column="amount" is-sortable sort-direction="descending">Amount (THB)</ui-table-header-cell>
      <ui-table-header-cell column="updated" is-sortable>Updated</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row>
      <ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell sort-value="1250000">1,250,000</ui-table-cell><ui-table-cell>2026-09-30</ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell sort-value="0">0</ui-table-cell><ui-table-cell>2026-10-01</ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell sort-value="480000">480,000</ui-table-cell><ui-table-cell>2026-09-12</ui-table-cell>
    </ui-table-row>
    <ui-table-row>
      <ui-table-cell>Master services</ui-table-cell><ui-table-cell>Umbrella</ui-table-cell><ui-table-cell sort-value="9800000">9,800,000</ui-table-cell><ui-table-cell>2026-08-21</ui-table-cell>
    </ui-table-row>
  </ui-table-body>
</ui-table>
<p>Sort: <output id="table-sort-out">amount, descending</output></p>

<script type="module">
  const table = document.getElementById('table-sort');
  table.addEventListener('ui-table-sorted', (event) => {
    const { column, sortDirection } = event.detail.sortedHeader;
    document.getElementById('table-sort-out').value = `${column}, ${sortDirection}`;
  });
</script>
```

React:

```tsx
import type { TableSortDirection } from '@purpurabog/ui';

const [sort, setSort] = useState<{ column: string; direction: TableSortDirection }>({ column: '', direction: 'none' });
const sorted = sortRows(rows, sort); // your own sort, or the server's

<UiTable>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>
      {headers.map((h) => (
        <UiTableHeaderCell
          key={h.key}
          column={h.key}
          sortDirection={sort.column === h.key ? sort.direction : 'none'}
          onUiTableHeaderCellSort={(e) => {
            e.preventDefault(); // React renders the rows: the table must not move them
            setSort({ column: h.key, direction: e.detail.sortDirection });
          }}
        >
          {h.header}
        </UiTableHeaderCell>
      ))}
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {sorted.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
<p>Sort: <output>{sort.column}, {sort.direction}</output></p>
```

React + Tailwind:

```tsx
const [sort, setSort] = useState<DataTableSort>({ key: 'amount', direction: 'descending' });

<DataTable heading="Contracts" sortable sortKey={sort.key} sortDirection={sort.direction} onSortChange={setSort} headers={headers} rows={rows} />
<p>Sort: <output>{sort.key}, {sort.direction}</output></p>
```

The table sorts by moving its rows in the DOM. Rows a framework renders (React, Vue, Angular) belong to the framework, so there call `preventDefault()` on `ui-table-header-cell-sort`, sort the data yourself (or on the server), render the rows in that order and set the header's `sort-direction` (`sortDirection`), as the React tab does. Replace the comparison by assigning `customSortRow(lhs, rhs, collator)` on the table. React + Tailwind takes `defaultSortKey` / `defaultSortDirection` and `sortRow(a, b, context)`; with `manualSorting` it keeps `rows` in your order and only shows the sort.

## Sizes and zebra stripes

`size` sets the row height: `xs` 24px, `sm` 32px, `md` 40px, `lg` 48px (the default), `xl` 64px. `use-zebra-styles` shades every other row. `use-static-width` makes the table as wide as its content instead of its container.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-select id="table-size-pick" inline label="Row size" value="lg">
    <option value="xs">xs</option>
    <option value="sm">sm</option>
    <option value="md">md</option>
    <option value="lg">lg</option>
    <option value="xl">xl</option>
  </ui-select>
  <ui-checkbox id="table-zebra-pick">Zebra stripes</ui-checkbox>
</div>
<ui-table id="table-size">
  <ui-table-header-title slot="title">Signers</ui-table-header-title>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Name</ui-table-header-cell>
      <ui-table-header-cell>Role</ui-table-header-cell>
      <ui-table-header-cell>Signed</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Anan P.</ui-table-cell><ui-table-cell>Managing director</ui-table-cell><ui-table-cell>2026-10-01</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Kanya S.</ui-table-cell><ui-table-cell>Legal counsel</ui-table-cell><ui-table-cell>2026-10-02</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Somchai D.</ui-table-cell><ui-table-cell>Witness</ui-table-cell><ui-table-cell>—</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Malee K.</ui-table-cell><ui-table-cell>Witness</ui-table-cell><ui-table-cell>2026-10-03</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>

<script type="module">
  const table = document.getElementById('table-size');
  const size = document.getElementById('table-size-pick');
  const zebra = document.getElementById('table-zebra-pick');
  size.addEventListener('change', () => (table.size = size.value));
  zebra.addEventListener('change', () => (table.useZebraStyles = zebra.checked));
</script>
```

React:

```tsx
<UiTable size="sm" useZebraStyles>
  <UiTableHeaderTitle slot="title">Signers</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Signers" size="sm" zebra headers={headers} rows={rows} />
```

The toolbar follows the table's size (24px for `xs`, 32px for `sm`, 48px otherwise) and sizes the batch bar's buttons to it. In React + Tailwind, use `size="sm"` buttons in the toolbar and batch bar of `xs` and `sm` tables.

## Selection and batch actions

`is-selectable` adds a checkbox to every row and a select-all box to the header row. A row with `disabled` can't be chosen; `selected` on a row chooses it. A `<ui-table-batch-actions>` in the toolbar holds your buttons: while rows are chosen it covers the toolbar with the count and Cancel. The table fires `ui-table-row-selected` with `{ selectedRow, selectedRows }` and, after select-all or Cancel, `ui-table-row-all-selected` with `{ selectedRows }`; `selectedRows` on the table holds the chosen rows. React + Tailwind takes `batchActions`, `selectedIds` and `onSelectionChange`.


HTML:

```html
<ui-table id="table-select" is-selectable>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-header-description slot="description">Select rows to act on them</ui-table-header-description>
  <ui-table-toolbar slot="toolbar">
    <ui-table-batch-actions>
      <ui-button>Download</ui-button>
      <ui-button>Archive</ui-button>
    </ui-table-batch-actions>
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Counterparty</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row data-id="1"><ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell>Signed</ui-table-cell></ui-table-row>
    <ui-table-row data-id="2" selected><ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell>Draft</ui-table-cell></ui-table-row>
    <ui-table-row data-id="3"><ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell>In review</ui-table-cell></ui-table-row>
    <ui-table-row data-id="4" disabled><ui-table-cell>Board resolution</ui-table-cell><ui-table-cell>Vandelay</ui-table-cell><ui-table-cell>Archived</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<p>Selected: <output id="table-select-out">2</output></p>

<script type="module">
  const table = document.getElementById('table-select');
  const show = () => {
    document.getElementById('table-select-out').value = table.selectedRows.map((row) => row.dataset.id).join(', ');
  };
  table.addEventListener('ui-table-row-selected', show);
  table.addEventListener('ui-table-row-all-selected', show);
</script>
```

React:

```tsx
const [selected, setSelected] = useState(['2']);
const onSelect = (e: CustomEvent<{ selectedRows: HTMLElement[] }>) => setSelected(e.detail.selectedRows.map((row) => row.dataset.id!));

<UiTable isSelectable onUiTableRowSelected={onSelect} onUiTableRowAllSelected={onSelect}>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHeaderDescription slot="description">Select rows to act on them</UiTableHeaderDescription>
  <UiTableToolbar slot="toolbar">
    <UiTableBatchActions>
      <UiButton>Download</UiButton>
      <UiButton onClick={() => archive(selected)}>Archive</UiButton>
    </UiTableBatchActions>
    <UiTableToolbarContent>
      <UiTableToolbarSearch />
    </UiTableToolbarContent>
  </UiTableToolbar>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => (
      <UiTableRow key={row.id} data-id={row.id} selected={selected.includes(row.id)} disabled={row.disabled}>
        {cells(row)}
      </UiTableRow>
    ))}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
const [selected, setSelected] = useState(['2']);

<DataTable
  heading="Contracts"
  description="Select rows to act on them"
  selectable
  headers={headers}
  rows={rows}
  selectedIds={selected}
  onSelectionChange={(ids) => setSelected(ids)}
  batchActions={
    <>
      <Button>Download</Button>
      <Button onClick={() => archive(selected)}>Archive</Button>
    </>
  }
/>
```

Select-all follows Carbon: when any row is chosen, it releases them all; otherwise it chooses every enabled row the search shows. Before a row changes, the row fires a cancelable `ui-table-row-change-selection` (the header row `ui-table-change-selection-all`). For your own styles, chosen rows have `selected`, and so has the header row while any row is chosen.

## Pick one row

`radio` makes the selection a single choice with a radio on every row, for example to pick a template. Tab stops on the chosen row, and the arrow keys move and choose. There is no batch bar.


HTML:

```html
<ui-table id="table-radio" radio>
  <ui-table-header-title slot="title">Pick a template</ui-table-header-title>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Template</ui-table-header-cell>
      <ui-table-header-cell>Type</ui-table-header-cell>
      <ui-table-header-cell>Updated</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Standard NDA</ui-table-cell><ui-table-cell>Confidentiality</ui-table-cell><ui-table-cell>2026-06-01</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Office lease</ui-table-cell><ui-table-cell>Property</ui-table-cell><ui-table-cell>2026-03-15</ui-table-cell></ui-table-row>
    <ui-table-row disabled><ui-table-cell>Master services</ui-table-cell><ui-table-cell>Services</ui-table-cell><ui-table-cell>2025-11-20</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<p>Template: <output id="table-radio-out"></output></p>

<script type="module">
  const table = document.getElementById('table-radio');
  table.addEventListener('ui-table-row-selected', (event) => {
    document.getElementById('table-radio-out').value = event.detail.selectedRow.querySelector('ui-table-cell').textContent;
  });
</script>
```

React:

```tsx
<UiTable radio onUiTableRowSelected={(e) => setTemplate(e.detail.selectedRow.dataset.id)}>
  <UiTableHeaderTitle slot="title">Pick a template</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id} data-id={row.id} disabled={row.disabled}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Pick a template" radio headers={headers} rows={rows} onSelectionChange={(ids) => setTemplate(ids[0])} />
```

## Toolbar and search

Put a `<ui-table-toolbar slot="toolbar">` on the table with a `<ui-table-toolbar-content>` for the controls: a `<ui-table-toolbar-search>`, an overflow menu, a primary button. The search stays a magnifier until pressed (Carbon's expandable search); `persistent` keeps it open. Typing leaves out the rows whose shown cells (and expanded row) don't contain the text, and the table fires `ui-table-filtered` with `{ unfilteredRows }`. In React + Tailwind, `searchable` adds the search and the `toolbar` prop takes the other controls.


HTML:

```html
<ui-table id="table-toolbar" is-selectable>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-toolbar slot="toolbar">
    <ui-table-batch-actions>
      <ui-button>Archive</ui-button>
    </ui-table-batch-actions>
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
      <ui-overflow-menu size="lg" label="Settings" placement="bottom-end" tooltip-placement="top">
        <svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M27 16.76V15.24l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1 2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.52l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1 2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1 2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM16 22a6 6 0 1 1 6-6 5.94 5.94 0 0 1-6 6Z" /></svg>
        <ui-menu-item label="Compact rows"></ui-menu-item>
        <ui-menu-item label="Show archived"></ui-menu-item>
      </ui-overflow-menu>
      <ui-button>Add contract</ui-button>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Counterparty</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell>Signed</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell>Draft</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell>In review</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Master services</ui-table-cell><ui-table-cell>Umbrella</ui-table-cell><ui-table-cell>Signed</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<p>Rows shown: <output id="table-toolbar-out">4</output></p>

<script type="module">
  const table = document.getElementById('table-toolbar');
  table.addEventListener('ui-table-filtered', (event) => {
    document.getElementById('table-toolbar-out').value = event.detail.unfilteredRows.length;
  });
</script>
```

React:

```tsx
<UiTable isSelectable onUiTableFiltered={(e) => setShown(e.detail.unfilteredRows.length)}>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableToolbar slot="toolbar">
    <UiTableBatchActions>
      <UiButton>Archive</UiButton>
    </UiTableBatchActions>
    <UiTableToolbarContent>
      <UiTableToolbarSearch />
      <UiOverflowMenu size="lg" label="Settings" placement="bottom-end" tooltipPlacement="top">
        <svg slot="icon" viewBox="0 0 32 32" aria-hidden="true">{settingsPath}</svg>
        <UiMenuItem label="Compact rows" />
        <UiMenuItem label="Show archived" />
      </UiOverflowMenu>
      <UiButton>Add contract</UiButton>
    </UiTableToolbarContent>
  </UiTableToolbar>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable
  heading="Contracts"
  searchable
  selectable
  headers={headers}
  rows={rows}
  onFilterChange={setSearch}
  toolbar={
    <>
      <OverflowMenu size="lg" label="Settings" placement="bottom-end" tooltipPlacement="top" icon={<svg viewBox="0 0 32 32" aria-hidden="true">{settingsPath}</svg>}>
        <MenuItem label="Compact rows" />
        <MenuItem label="Show archived" />
      </OverflowMenu>
      <Button>Add contract</Button>
    </>
  }
  batchActions={<Button>Archive</Button>}
/>
```

`filterRows(rowText, searchString)` on the table replaces the test: return true to leave the row out (Carbon's way). To search on the server, set `filterRows` to `() => false` and listen for `input` on the search, whose `value` is the text. `label` and `placeholder` on the search replace its "Filter table". React + Tailwind has its own `filterRows(row, text, headers)` (true keeps the row), `filterText`, `manualFiltering`, and tells screen readers "3 of 12 rows" once typing pauses.

## Expandable rows

`expandable` on the table: a row followed by a `<ui-table-expanded-row>` gets a chevron that opens that full-width row of detail under it. `batch-expansion` adds a chevron to the header row that opens or closes every row, and `expanded` on a row opens it. The row fires a cancelable `ui-table-row-expando-beingtoggled`, then `ui-table-row-expando-toggled` with `{ expanded }`.


HTML:

```html
<ui-table expandable batch-expansion>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Counterparty</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell>Signed</ui-table-cell></ui-table-row>
    <ui-table-expanded-row>Owner: Kanya S. · Ends on 2027-09-30</ui-table-expanded-row>
    <ui-table-row expanded><ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell>Draft</ui-table-cell></ui-table-row>
    <ui-table-expanded-row>Owner: Anan P. · Ends on 2028-10-01</ui-table-expanded-row>
    <ui-table-row><ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell>In review</ui-table-cell></ui-table-row>
    <ui-table-expanded-row>Owner: Malee K. · Ends on 2029-01-31</ui-table-expanded-row>
  </ui-table-body>
</ui-table>
```

React:

```tsx
<UiTable expandable batchExpansion>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => (
      <Fragment key={row.id}>
        <UiTableRow expanded={row.id === '2'}>{cells(row)}</UiTableRow>
        <UiTableExpandedRow>Owner: {row.owner} · Ends on {row.ends}</UiTableExpandedRow>
      </Fragment>
    ))}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable
  heading="Contracts"
  expandAll
  headers={headers}
  rows={rows}
  defaultExpandedIds={['2']}
  renderExpandedRow={(row) => <p className="m-0">Owner: {String(row.owner)} · Ends on {String(row.ends)}</p>}
/>
```

## Pages

`page-size` adds a [pagination](https://parntengza.github.io/kanok-ui-docs/en/pagination/) bar under the table that shows that many of the rows the sort and search leave. `page` and `page-sizes` set the page and the choices, and `ui-table-page-change` fires with `{ page, pageSize }`. Select-all then takes the page, and the batch bar offers "Select all (N)" for every row the search shows. Carbon has no paging on the table itself; it puts a Pagination under it.


HTML:

```html
<ui-table id="table-pages" is-selectable page-size="5" page-sizes="5,10,20">
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-toolbar slot="toolbar">
    <ui-table-batch-actions>
      <ui-button>Delete</ui-button>
    </ui-table-batch-actions>
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Counterparty</ui-table-header-cell>
      <ui-table-header-cell>Status</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body></ui-table-body>
</ui-table>

<script type="module">
  const statuses = ['Draft', 'In review', 'Signed', 'Archived'];
  const parties = ['Acme', 'Globex', 'Initech', 'Umbrella'];
  const cell = (text) => `<ui-table-cell>${text}</ui-table-cell>`;
  const row = (i) => `<ui-table-row>${cell(`Contract ${String(i + 1).padStart(3, '0')}`)}${cell(parties[i % 4])}${cell(statuses[i % 4])}</ui-table-row>`;
  document.querySelector('#table-pages ui-table-body').innerHTML = Array.from({ length: 23 }, (_, i) => row(i)).join('');
</script>
```

React:

```tsx
<UiTable isSelectable pageSize={5} pageSizes="5,10,20" onUiTablePageChange={(e) => console.log(e.detail)}>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableToolbar slot="toolbar">
    <UiTableBatchActions>
      <UiButton>Delete</UiButton>
    </UiTableBatchActions>
    <UiTableToolbarContent>
      <UiTableToolbarSearch />
    </UiTableToolbarContent>
  </UiTableToolbar>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" sortable searchable selectable defaultPageSize={10} headers={headers} rows={rows} onPageChange={(change) => console.log(change)} batchActions={<Button>Delete</Button>} />
```

To page on the server, render one page of rows, put your own `<ui-pagination>` under the table, and sort and search on the server (cancel `ui-table-header-cell-sort`; `filterRows` that keeps every row, and the search's `input`). On `<ui-table-batch-actions>`, `total-rows-count` offers "Select all (N)" for rows the table doesn't hold (`ui-table-batch-actions-select-all-clicked` fires; choose them yourself), and setting `selected-rows-count` in your `ui-table-row-selected` listener counts a selection kept across pages. React + Tailwind does the same with `manualSorting`, `manualFiltering`, `totalSelected`, `totalCount` and `onSelectAll`.

## Show and hide columns

A `<ui-table-column-settings>` in the toolbar content adds a Columns button with a checkbox list of the columns. A header with `hideable="false"` always shows, and one with `column-hidden` starts hidden; Reset goes back to the columns hidden in the markup. `column` names a column (default: its place, "0", "1" …). The table fires `ui-table-columns-change` with `{ hiddenColumns, column, hidden }`; save `hiddenColumns` and restore it with `column-hidden` on the headers or `setColumnHidden(column, hidden)` on the table. Hidden columns leave the search and the CSV export too.


HTML:

```html
<ui-table id="table-columns">
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-toolbar slot="toolbar">
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
      <ui-table-column-settings></ui-table-column-settings>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell column="name" hideable="false">Contract</ui-table-header-cell>
      <ui-table-header-cell column="party">Counterparty</ui-table-header-cell>
      <ui-table-header-cell column="status">Status</ui-table-header-cell>
      <ui-table-header-cell column="updated" column-hidden>Updated</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell>Signed</ui-table-cell><ui-table-cell>2026-09-30</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell>Draft</ui-table-cell><ui-table-cell>2026-10-01</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell>In review</ui-table-cell><ui-table-cell>2026-09-12</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<p>Hidden: <output id="table-columns-out">updated</output></p>

<script type="module">
  const table = document.getElementById('table-columns');
  table.addEventListener('ui-table-columns-change', (event) => {
    document.getElementById('table-columns-out').value = event.detail.hiddenColumns.join(', ');
  });
</script>
```

React:

```tsx
const saved = loadHiddenColumns(); // e.g. ['updated'], from storage

<UiTable onUiTableColumnsChange={(e) => saveHiddenColumns(e.detail.hiddenColumns)}>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableToolbar slot="toolbar">
    <UiTableToolbarContent>
      <UiTableToolbarSearch />
      <UiTableColumnSettings />
    </UiTableToolbarContent>
  </UiTableToolbar>
  <UiTableHead>
    <UiTableHeaderRow>
      {headers.map((h) => (
        <UiTableHeaderCell key={h.key} column={h.key} hideable={h.key !== 'name'} columnHidden={saved.includes(h.key)}>
          {h.header}
        </UiTableHeaderCell>
      ))}
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" searchable columnSettings headers={headers} rows={rows} hiddenColumns={hidden} onColumnsChange={(change) => setHidden(change.hiddenColumns)} />
```

## Sticky header and pinned columns

`sticky-header` keeps the header row in view while the body scrolls in a box up to `--ui-table-max-height` tall (300px, as Carbon). For wide tables, `pinned="start"` on the first header keeps that column (and the chevron and checkbox columns before it) in view while the rest scrolls sideways, and `pinned="end"` on the last header keeps row actions at the end. Pinning starts at 672px of window width.


HTML:

```html
<div style="max-inline-size: 560px">
  <ui-table id="table-scroll" sticky-header is-selectable>
    <ui-table-header-title slot="title">Contracts</ui-table-header-title>
    <ui-table-header-description slot="description">20 rows: scroll down, then sideways</ui-table-header-description>
    <ui-table-head>
      <ui-table-header-row>
        <ui-table-header-cell pinned="start">Contract</ui-table-header-cell>
        <ui-table-header-cell>Counterparty</ui-table-header-cell>
        <ui-table-header-cell>Owner</ui-table-header-cell>
        <ui-table-header-cell>Department</ui-table-header-cell>
        <ui-table-header-cell>Updated</ui-table-header-cell>
        <ui-table-header-cell pinned="end">Action</ui-table-header-cell>
      </ui-table-header-row>
    </ui-table-head>
    <ui-table-body></ui-table-body>
  </ui-table>
</div>

<script type="module">
  const parties = ['Acme Co., Ltd.', 'Globex', 'Initech', 'Umbrella'];
  const cell = (text) => `<ui-table-cell>${text}</ui-table-cell>`;
  const updated = (i) => `2026-09-${String((i % 28) + 1).padStart(2, '0')}`;
  const row = (i) => `<ui-table-row>${[`Contract ${i + 1}`, parties[i % 4], 'Somchai Jaidee', 'Legal department', updated(i), 'Open'].map(cell).join('')}</ui-table-row>`;
  document.querySelector('#table-scroll ui-table-body').innerHTML = Array.from({ length: 20 }, (_, i) => row(i)).join('');
</script>
```

React:

```tsx
<UiTable stickyHeader isSelectable>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>
      <UiTableHeaderCell pinned="start">Contract</UiTableHeaderCell>
      …
      <UiTableHeaderCell pinned="end">Action</UiTableHeaderCell>
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" stickyHeader selectable headers={[{ key: 'name', header: 'Contract', pinned: 'start' }, …, { key: 'action', header: 'Action', pinned: 'end' }]} rows={rows} />
```

Change the box's height with CSS: `ui-table { --ui-table-max-height: 480px; }`. React + Tailwind's `DataTable` reads `--ui-data-table-max-height`.

## Export CSV

A `<ui-table-csv-export>` in the toolbar content adds an Export CSV button: it downloads the columns shown and the rows the search shows (sorted, every page) as a CSV file for Excel, named after its `file-name` or the table's title. It fires a cancelable `ui-table-csv-export` first with `{ csv, rows, fileName }`. A cell writes its `csv-value`, else its text. `toCsv({ scope })` and `downloadCsv({ scope, fileName })` on the table export `'shown'`, `'selected'` or `'all'` rows from your own buttons. This demo shows the CSV instead of downloading it.


HTML:

```html
<ui-table id="table-csv" is-selectable>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-toolbar slot="toolbar">
    <ui-table-batch-actions>
      <ui-button id="table-csv-selected">Export selected</ui-button>
    </ui-table-batch-actions>
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
      <ui-table-csv-export></ui-table-csv-export>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Contract</ui-table-header-cell>
      <ui-table-header-cell>Counterparty</ui-table-header-cell>
      <ui-table-header-cell>Amount (THB)</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Service agreement</ui-table-cell><ui-table-cell>Acme Co., Ltd.</ui-table-cell><ui-table-cell csv-value="1250000">1,250,000</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>NDA</ui-table-cell><ui-table-cell>Globex</ui-table-cell><ui-table-cell csv-value="0">0</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Lease renewal</ui-table-cell><ui-table-cell>Initech</ui-table-cell><ui-table-cell csv-value="480000">480,000</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<pre id="table-csv-out" style="margin: 0; white-space: pre-wrap; font: var(--ui-font-code)"></pre>

<script type="module">
  const table = document.getElementById('table-csv');
  const out = document.getElementById('table-csv-out');
  table.addEventListener('ui-table-csv-export', (event) => {
    event.preventDefault(); // the demo shows the file instead of downloading it
    out.textContent = event.detail.csv;
  });
  document.getElementById('table-csv-selected').addEventListener('click', () => {
    out.textContent = table.toCsv({ scope: 'selected' }); // or table.downloadCsv({ scope: 'selected' })
  });
</script>
```

React:

```tsx
import type { UiTable as TableElement } from '@purpurabog/ui';

const table = useRef<TableElement>(null);

<UiTable ref={table} isSelectable>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableToolbar slot="toolbar">
    <UiTableBatchActions>
      <UiButton onClick={() => table.current?.downloadCsv({ scope: 'selected', fileName: 'Selected contracts' })}>Export selected</UiButton>
    </UiTableBatchActions>
    <UiTableToolbarContent>
      <UiTableToolbarSearch />
      <UiTableCsvExport />
    </UiTableToolbarContent>
  </UiTableToolbar>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
import { dataTableToCsv, downloadCsv } from '@/components/ui/react-tw/data-table-csv';

const [selected, setSelected] = useState<string[]>([]);

<DataTable
  heading="Contracts"
  searchable
  selectable
  csvExport
  headers={headers}
  rows={rows}
  selectedIds={selected}
  onSelectionChange={setSelected}
  batchActions={
    <Button onClick={() => downloadCsv(dataTableToCsv(headers, rows.filter((r) => selected.includes(r.id))), 'Selected contracts')}>Export selected</Button>
  }
/>
```

The file is UTF-8 with a byte order mark so Excel reads Thai correctly; every cell is quoted, and cells that start like a formula are made safe.

## Edit cells in place

Give a header `editable="text"`, `"number"` or `"select"` (with `options`, a list of `{ value, label }` as a property or JSON in the attribute) and its cells can be edited: the table becomes a grid with one Tab stop, where the arrow keys move between cells. Enter, F2, a double click or typing opens the editor; Enter saves, Escape cancels, Tab saves and edits the next editable cell. A header's `validate(value, cell)` returns a message to keep the editor open. Saving fires a cancelable `ui-table-cell-edit` from the cell with `{ row, cell, column, value, previous }`, then writes the value into the cell.


HTML:

```html
<ui-table id="table-edit">
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-header-description slot="description">Focus a cell and press Enter, or double-click it</ui-table-header-description>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell column="name" editable="text">Name</ui-table-header-cell>
      <ui-table-header-cell column="amount" editable="number">Amount (THB)</ui-table-header-cell>
      <ui-table-header-cell column="status" editable="select" options='[{"value":"draft","label":"Draft"},{"value":"review","label":"In review"},{"value":"signed","label":"Signed"}]'>Status</ui-table-header-cell>
      <ui-table-header-cell column="owner">Owner</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Office lease 2026</ui-table-cell><ui-table-cell>250000</ui-table-cell><ui-table-cell>In review</ui-table-cell><ui-table-cell>Ananya</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>NDA – Acme</ui-table-cell><ui-table-cell>0</ui-table-cell><ui-table-cell>Signed</ui-table-cell><ui-table-cell>Boonsri</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Software licence</ui-table-cell><ui-table-cell>48000</ui-table-cell><ui-table-cell>Draft</ui-table-cell><ui-table-cell>Chai</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<p>Last edit: <output id="table-edit-out"></output></p>

<script type="module">
  const table = document.getElementById('table-edit');
  const [name, amount] = table.querySelectorAll('ui-table-header-cell');
  name.validate = (value) => (String(value).trim() ? '' : 'Name is required');
  amount.validate = (value) => (Number(value) >= 0 ? '' : 'Must be 0 or more');
  table.addEventListener('ui-table-cell-edit', (event) => {
    const { column, previous, value } = event.detail;
    document.getElementById('table-edit-out').value = `${column}: ${previous} → ${value}`;
  });
</script>
```

React:

```tsx
const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'review', label: 'In review' },
  { value: 'signed', label: 'Signed' },
];
const [rows, setRows] = useState(initialRows);

<UiTable
  onUiTableCellEdit={(e) => {
    e.preventDefault(); // React renders the cells: update the data instead
    const { row, column, value } = e.detail;
    setRows((all) => all.map((r) => (r.id === row.dataset.id ? { ...r, [column]: value } : r)));
  }}
>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>
      <UiTableHeaderCell column="name" editable="text" validate={(value) => (String(value).trim() ? '' : 'Name is required')}>Name</UiTableHeaderCell>
      <UiTableHeaderCell column="amount" editable="number">Amount (THB)</UiTableHeaderCell>
      <UiTableHeaderCell column="status" editable="select" options={statusOptions}>Status</UiTableHeaderCell>
      <UiTableHeaderCell column="owner">Owner</UiTableHeaderCell>
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => (
      <UiTableRow key={row.id} data-id={row.id}>
        <UiTableCell>{row.name}</UiTableCell>
        <UiTableCell>{row.amount}</UiTableCell>
        <UiTableCell>{statusOptions.find((o) => o.value === row.status)?.label}</UiTableCell>
        <UiTableCell>{row.owner}</UiTableCell>
      </UiTableRow>
    ))}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
const [rows, setRows] = useState(initialRows);

<DataTable heading="Contracts" headers={headers} rows={rows} onCellEdit={(edit) => setRows(edit.rows)} />
```

Left alone, the table writes the saved value into the cell (its text, a select column's label). Rows a framework renders belong to it, so there call `preventDefault()` on `ui-table-cell-edit` and update your data, as the React tab does; to refuse an edit, cancel it and keep the data. React + Tailwind hands you the new `rows` in `onCellEdit`: set them, or keep yours to refuse the edit.

## Resize columns

`resizable` on the table puts a handle on the end edge of every column header, and `resizable` on single headers only on those: drag it, or Tab to it and use the arrow keys (Shift for 16px steps). `width`, `min-width` (default 50) and `max-width` in px on a header bound it. Each finished resize fires `ui-table-column-resize` with `{ column, width }` from the header; `columnWidths` on the table holds every width. Save them and set `width` on the headers to restore them.


HTML:

```html
<ui-table id="table-resize">
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-header-description slot="description">Drag a header's end edge; Amount is fixed</ui-table-header-description>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell column="name" resizable min-width="120">Name</ui-table-header-cell>
      <ui-table-header-cell column="status" resizable>Status</ui-table-header-cell>
      <ui-table-header-cell column="owner" resizable>Owner</ui-table-header-cell>
      <ui-table-header-cell column="amount">Amount (THB)</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Office lease 2026</ui-table-cell><ui-table-cell>In review</ui-table-cell><ui-table-cell>Ananya</ui-table-cell><ui-table-cell>250,000</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>NDA – Acme</ui-table-cell><ui-table-cell>Signed</ui-table-cell><ui-table-cell>Boonsri</ui-table-cell><ui-table-cell>0</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Software licence</ui-table-cell><ui-table-cell>Draft</ui-table-cell><ui-table-cell>Chai</ui-table-cell><ui-table-cell>48,000</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<p>Widths: <output id="table-resize-out"></output></p>

<script type="module">
  const table = document.getElementById('table-resize');
  table.addEventListener('ui-table-column-resize', () => {
    document.getElementById('table-resize-out').value = JSON.stringify(table.columnWidths);
  });
</script>
```

React:

```tsx
const [widths, setWidths] = useState<Record<string, number>>({});

<UiTable onUiTableColumnResize={(e) => setWidths((all) => ({ ...all, [e.detail.column]: e.detail.width }))}>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>
      {headers.map((h) => (
        <UiTableHeaderCell key={h.key} column={h.key} resizable={h.key !== 'amount'} width={widths[h.key]}>
          {h.header}
        </UiTableHeaderCell>
      ))}
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {rows.map((row) => <UiTableRow key={row.id}>{cells(row)}</UiTableRow>)}
  </UiTableBody>
</UiTable>
```

React + Tailwind:

```tsx
<DataTable heading="Contracts" resizable sortable headers={headers} rows={rows} columnWidths={widths} onColumnResize={(change) => setWidths(change.widths)} />
```

## Empty, loading and skeleton

With no rows the table says "No data" under the headers; put your own message in the `empty` slot (`emptyText` in React + Tailwind). While a search finds nothing it says "No results found" (`no-results` slot, `noResultsText`). `loading` keeps the toolbar and headers and shows skeleton rows (`loading-rows`, default the rows shown) while the data reloads. Before the first data arrives, show `<ui-table-skeleton>` in the table's place.


HTML:

```html
<ui-table>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Name</ui-table-header-cell>
      <ui-table-header-cell>Role</ui-table-header-cell>
      <ui-table-header-cell>Signed</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body></ui-table-body>
  <div slot="empty"><strong>No contracts yet</strong><br />Create one to get started.</div>
</ui-table>
<div><ui-button id="table-reload" kind="tertiary" size="sm">Reload</ui-button></div>
<ui-table id="table-loading">
  <ui-table-header-title slot="title">Signers</ui-table-header-title>
  <ui-table-toolbar slot="toolbar">
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell>Name</ui-table-header-cell>
      <ui-table-header-cell>Role</ui-table-header-cell>
      <ui-table-header-cell>Signed</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row><ui-table-cell>Anan P.</ui-table-cell><ui-table-cell>Managing director</ui-table-cell><ui-table-cell>2026-10-01</ui-table-cell></ui-table-row>
    <ui-table-row><ui-table-cell>Kanya S.</ui-table-cell><ui-table-cell>Legal counsel</ui-table-cell><ui-table-cell>2026-10-02</ui-table-cell></ui-table-row>
  </ui-table-body>
</ui-table>
<ui-table-skeleton column-count="3" row-count="3"></ui-table-skeleton>

<script type="module">
  const loading = document.getElementById('table-loading');
  document.getElementById('table-reload').addEventListener('click', () => {
    loading.loading = true;
    setTimeout(() => (loading.loading = false), 1500);
  });
</script>
```

React:

```tsx
<UiTable>
  <UiTableHeaderTitle slot="title">Contracts</UiTableHeaderTitle>
  <UiTableHead>
    <UiTableHeaderRow>{headerCells}</UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody />
  <div slot="empty"><strong>No contracts yet</strong><br />Create one to get started.</div>
</UiTable>
<UiTable loading={reloading}>
  <UiTableHeaderTitle slot="title">Signers</UiTableHeaderTitle>
  …
</UiTable>
<UiTableSkeleton columnCount={3} rowCount={3} />
```

React + Tailwind:

```tsx
import { DataTable, DataTableSkeleton } from '@/components/ui/react-tw/data-table';

<DataTable heading="Contracts" headers={headers} rows={[]} emptyText={<><strong>No contracts yet</strong><br />Create one to get started.</>} />
<DataTable heading="Signers" searchable loading={reloading} headers={headers} rows={rows} />
<DataTableSkeleton columnCount={3} rowCount={3} />
```

The skeleton is hidden from screen readers: put `aria-busy` and a status message on the region around it. It takes `headers` (a property: the column names) to show real column names, `zebra`, `show-header="false"` and `show-toolbar="false"`. React + Tailwind's `DataTableSkeleton` takes `headers`, `size`, `zebra`, `hideHeader` and `hideToolbar`.

## Keyboard

| Key | Does |
|---|---|
| Tab | Moves through the toolbar, the sort buttons, the checkboxes and the controls in cells; a radio table and an editable grid are one Tab stop each |
| Space | Toggles a checkbox; picks the focused radio row |
| Up / Down | In a radio table, move to the previous / next row and choose it |
| Arrow keys, Home / End, Ctrl + Home / End | In an editable grid, move between cells |
| Enter, F2 | In an editable grid, edit the cell (or press the control in it) |
| Escape | Cancels an edit; clears the search |

## Accessibility

- The table has the roles of a table (`table`, `rowgroup`, `row`, `columnheader`, `cell`; `grid` once a column is editable), with `aria-sort` on sorted columns. Name it with `aria-label` on `<ui-table>`: as in Carbon, the title isn't tied to it. Each row's checkbox, radio and chevron is named with the row's first cell ("Select row, Service agreement").
- A table that scrolls (`sticky-header`, or wider than its box) takes focus so keyboard users can scroll it, named by its `aria-label` or title.
- While `loading`, the table is `aria-busy` and a status says "Loading data". The batch bar's count is a status, so the new count is read when rows are chosen. React + Tailwind's `DataTable` also says "Sorted by Contract, ascending" after a sort and "3 of 12 rows" when typing in the search pauses.
- An editable grid follows the WAI-ARIA grid pattern: cells that can't be edited are `aria-readonly`, and editable cells say "Press Enter to edit".

Unstyled React parts with the same behaviour: [Headless Data table](https://parntengza.github.io/kanok-ui-docs/en/headless-data-table/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-table>` · React `UiTable`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `TableSize` | `'lg'` |  |
| `is-sortable` | `isSortable` | `boolean` | `false` | Every header sorts the rows (Carbon `is-sortable`). |
| `use-zebra-styles` | `useZebraStyles` | `boolean` | `false` | Stripe every second body row (Carbon `use-zebra-styles`). |
| `use-static-width` | `useStaticWidth` | `boolean` | `false` | As wide as its content instead of its container (Carbon `use-static-width`). |
| `locale` | `locale` | `string` | `''` | The language text sorts in; empty: the page's `lang`. |
| `is-selectable` | `isSelectable` | `boolean` | `false` | A checkbox on every row and select-all in the header row (Carbon `is-selectable`). |
| `radio` | `radio` | `boolean` | `false` | One row at a time, with radios (Carbon `radio`). |
| `expandable` | `expandable` | `boolean` | `false` | Rows followed by a `<ui-table-expanded-row>` open it with a chevron (Carbon `expandable`). |
| `batch-expansion` | `batchExpansion` | `boolean` | `false` | An expand-all chevron in the header row (Carbon `batch-expansion`). |
| `with-header` | `withHeader` | `boolean` | `false` | The title / description block shows (set from the `title` / `description` slots, as Carbon). |
| `resizable` | `resizable` | `boolean` | `false` | A resize handle on every header (or `resizable` on single headers). |
| `page-size` | `pageSize` | `number` | `0` | Rows per page: above 0 a `<ui-pagination>` pages the rows the sort and search leave. |
| `page` | `page` | `number` | `1` | The page shown (from 1). |
| `page-sizes` | `pageSizes` | `string` | `'10,25,50'` | The page sizes the pagination offers (comma-separated). |
| `loading` | `loading` | `boolean` | `false` | Skeleton rows instead of the body while the data loads (the table is `aria-busy`). |
| `loading-rows` | `loadingRows` | `number` | `0` | How many skeleton rows `loading` shows (default: the rows shown now, else the page size, else 5). |
| `sticky-header` | `stickyHeader` | `boolean` | `false` | Keeps the header in view while the body scrolls inside a box (Carbon React `stickyHeader`; `--ui-table-max-height`, default 300px). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `filterRows` | `(rowText: string, searchString: string) => boolean` | Whether the search leaves a row out: true hides it (Carbon `filterRows`; default: its text doesn't contain the search). |
| `columns` | `UiTableHeaderCell[]` | (read-only) The column headers, in order (the column settings list them). |
| `hiddenColumns` | `string[]` | (read-only) The keys of the hidden columns. |
| `contentWidth` |  | (read-only) Width of the horizontal scroll box (a resize stops a column there). |
| `selectedRows` | `UiTableRow[]` | (read-only) The chosen rows. |
| `columnsChanged` |  | (read-only) Columns were shown or hidden since the markup (Reset has something to do). |
| `columnWidths` | `Record<string, number>` | (read-only) The widths given or resized, by column. |
| `csvFileName` |  | (read-only) The file name a CSV download takes by default: the title's text. |

#### Methods

| Method | Description |
|---|---|
| `customSortRow(lhs, rhs, collator)` | Compares two cells' sort values (Carbon `customSortRow`) for ascending order: numbers by value, text with `collator`. Replace it on the element to sort another way. |
| `isColumnLocked(column)` | Whether `column` can't be hidden or shown now: not hideable, or the last one shown. |
| `setColumnHidden(column, hidden)` | Shows or hides a column (and its cells); false when it can't change (not hideable, or the last one shown). |
| `resetColumns()` | Back to the columns hidden in the markup. |
| `freezeColumns()` | The first resize freezes the automatic layout: every shown column keeps its width, a filler cell takes the rest of the row (none in a static-width table, which ends at its columns). |
| `csvRows(scope)` | The rows CSV takes: those the search shows (every page, in their order), the chosen ones, or all. |
| `toCsv({ scope = 'shown' })` | The columns shown and the rows of `scope` as CSV (a cell writes its `csv-value`, else its text). |
| `downloadCsv({ scope = 'shown', fileName })` | Downloads `toCsv({ scope })` as `fileName` (default: the title, else "table"; `.csv` is added). |
| `focus(options)` | Focuses the table's first stop: the scroll box when it scrolls, else select-all, a sort button, the grid's Tab stop, or the first row's checkbox, radio or chevron. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-columns-change` | `onUiTableColumnsChange` | detail: { hiddenColumns, column, hidden } after a column was shown or hidden (`column` is '' after Reset) |
| `ui-table-row-all-selected` | `onUiTableRowAllSelected` | detail: { selectedRows } after select-all or Cancel |
| `ui-table-sorted` | `onUiTableSorted` | detail: { sortedHeader } after the rows were sorted by a header click |
| `ui-table-row-selected` | `onUiTableRowSelected` | detail: { selectedRow, selectedRows } after the user chose or released a row |
| `ui-table-filtered` | `onUiTableFiltered` | detail: { unfilteredRows } after the search changed which rows show |
| `ui-table-page-change` | `onUiTablePageChange` | detail: { page, pageSize } after the built-in pagination changed (`page-size`) |
| `ui-table-cell-edit` | `onUiTableCellEdit` | from the cell, cancelable; detail: { row, cell, column, value, previous } before an edited value is written into the cell (`preventDefault()` to write it yourself) |

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-table-head>` and `<ui-table-body>` |
| `title` | A `<ui-table-header-title>` |
| `description` | A `<ui-table-header-description>` |
| `toolbar` | A `<ui-table-toolbar>` |
| `empty` | Shown when there are no rows (default: "No data") |
| `no-results` | Shown when the search leaves no rows (default: "No results found. Try a different search.") |

#### CSS parts

| Part | Description |
|---|---|
| `header` | The title / description block |
| `content` | The horizontal scroll container |
| `table` | The box laid out as a table |
| `empty` | The message under the headers when there are no rows |
| `pagination` | The built-in `<ui-pagination>` (`page-size`) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-table-max-height` |  | Height of the scrolling box with `sticky-header` (default 300px) |
| `--ui-table-row-height` |  | Row height of the default size, lg (default 48px; Kanok: 40px) |
| `--ui-table-border` |  | / --ui-table-radius / --ui-table-overflow - A frame around the table (default none, 0, visible; Kanok: a hairline, 12px, clip) |

### `<ui-table-head>` · React `UiTableHead`

#### Slots

| Slot | Description |
|---|---|
| (default) | A `<ui-table-header-row>` |

### `<ui-table-header-row>` · React `UiTableHeaderRow`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `selected` | `selected` | `boolean` | `false` | Chosen (Carbon `selected`); the table keeps the header's select-all and the batch actions in step. |
| `disabled` | `disabled` | `boolean` | `false` | Can't be chosen. |
| `radio` | `radio` | `boolean` | `false` | A single-choice radio instead of a checkbox (the table's `radio` sets it). |
| `hide-checkbox` | `hideCheckbox` | `boolean` | `false` | No checkbox in the selection cell (the header row of a radio table). |
| `selection-name` | `selectionName` | `string` | `''` | Shows the selection cell: the checkbox's name (the table's `is-selectable` sets one). |
| `selection-value` | `selectionValue` | `string` | `''` | The checkbox's value. |
| `selection-label` | `selectionLabel` | `string` | `''` | The checkbox's accessible name; default "Select row" with the row's first cell. |
| `expandable` | `expandable` | `boolean` | `false` | Has a `<ui-table-expanded-row>` after it (the table's `expandable` sets it). |
| `expanded` | `expanded` | `boolean` | `false` | Its expanded row is open. |
| `batch-expansion` | `batchExpansion` | `boolean` | `false` | The header row's chevron opens and closes every row (the table's `batch-expansion` sets it). |
| `filtered` | `filtered` | `boolean` | `false` | Left out by the table's search. |
| `highlighted` | `highlighted` | `boolean` | `false` | Hovered with its expanded row (the two tint together). |
| `paged-out` | `pagedOut` | `boolean` | `false` | On another page of the table's pagination (the table sets it). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `expandColumn` | `boolean` | The table has an expand column: every row gets the cell, expandable ones the chevron. |
| `indeterminate` | `boolean` | The header's select-all is partly checked (some rows chosen); the table sets it. |
| `tabStop` | `boolean` | The radio of a radio table that takes Tab (the chosen row, else the first); the table sets it. |
| `pinStart` | `boolean` | The first column is pinned: the chevron and checkbox cells stick too (the table sets it). |
| `filler` | `boolean` | A filler cell after the cells takes the rest of the row once the columns are resized (the table sets it). |
| `grid` | `boolean` | The table is a grid (an editable column): grid cells, the body's cells and controls out of the Tab order (the table sets it). |

#### Methods

| Method | Description |
|---|---|
| `toggleExpanded(expanded)` | Opens or closes, unless the cancelable `ui-table-row-expando-beingtoggled` is canceled. |
| `gridCells()` | The cells the grid's arrow keys move through: the chevron and checkbox cells, then the shown author cells. |
| `focusSelection()` | Focuses this row's selection control (a radio the arrow keys moved to). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-change-selection-all` | `onUiTableChangeSelectionAll` | cancelable; detail: { selected } before every row is chosen or released |
| `ui-table-row-expando-beingtoggled` | none (use a ref) |  |
| `ui-table-row-expando-toggled` | none (use a ref) |  |

#### Slots

| Slot | Description |
|---|---|
| (default) | The `<ui-table-header-cell>`s |

#### CSS parts

| Part | Description |
|---|---|
| `expand-cell` | The cell of the expand chevron |
| `expand-button` | The chevron button |
| `selection-cell` | The cell of the checkbox or radio |

### `<ui-table-header-cell>` · React `UiTableHeaderCell`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `is-sortable` | `isSortable` | `boolean` | `false` | Sortable on its own (the table's `is-sortable` sets every header). |
| `sort-active` | `sortActive` | `boolean` | `false` | The column the rows are sorted by (set with the direction). |
| `sort-cycle` | `sortCycle` | `TableSortCycle \| undefined` |  | The states each click steps through. |
| `sort-direction` | `sortDirection` | `TableSortDirection \| undefined` |  | Sorted ascending, descending or not; a sortable header without one starts at none. |
| `column` | `column` | `string` | `''` | The column's name in events and the column settings (default: its place, "0", "1" …). |
| `column-hidden` | `columnHidden` | `boolean` | `false` | Hidden with its cells (the column settings set it; set it in the markup to start hidden). |
| `hideable` | `hideable` | `boolean` | `true` | Can be hidden from the column settings (`hideable="false"` keeps it shown). |
| `pinned` | `pinned` | `'start' \| 'end' \| undefined` |  | Stays in view while the table scrolls sideways: `start` on the first header, `end` on the last. |
| `resizable` | `resizable` | `boolean` | `false` | A resize handle on its end edge (the table's `resizable` sets every header). |
| `width` | `width` | `number \| undefined` |  | The column's width in px (a resize sets it). |
| `min-width` | `minWidth` | `number \| undefined` |  | The narrowest a resize makes it (default 50). |
| `max-width` | `maxWidth` | `number \| undefined` |  | The widest a resize makes it (default: the table's width). |
| `editable` | `editable` | `TableCellEditor \| undefined` |  | Its cells can be edited in place, with this editor (no Carbon counterpart; the table becomes a grid). |
| `options` | `options` | `TableEditOption[]` | `[]` | A `select` column's choices: the value saved and the label shown (JSON in the attribute). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `validate` | `(value: string \| number, cell: HTMLElement) => string \| undefined` | Checks an edited value before it's saved: a message keeps the editor open and shows it. |
| `labelText` |  | (read-only) The label as text (the button's title, the screen reader hint, the column settings). |
| `columnKey` |  | (read-only) The column's key: `column`, else its place among the headers. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-header-cell-sort` | `onUiTableHeaderCellSort` | cancelable; detail: { oldSortDirection, sortDirection } before the column sorts (`preventDefault()` keeps the rows and this header as they are: sort the data yourself and set `sort-direction`) |

#### Slots

| Slot | Description |
|---|---|
| (default) | The header's label |

#### CSS parts

| Part | Description |
|---|---|
| `content` | The box inside the header that holds its padding |
| `sort-button` | The button of a sortable header |
| `label-text` | The label |
| `sort-icon` | The sort arrow |
| `resizer` | The resize handle (an invisible range input over the end edge) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-table-header-background` |  | Fill of the header (default `--ui-layer-accent`) |
| `--ui-table-sort-hover` |  | / --ui-table-sorted-background / --ui-table-sorted-icon - A sortable header: hover fill, the sorted column's fill and arrow (default layer-selected-hover, icon-primary; Kanok: the header fill, an indigo arrow) |

### `<ui-table-body>` · React `UiTableBody`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `use-zebra-styles` | `useZebraStyles` | `boolean` | `false` | Stripe every second row (the table passes its `use-zebra-styles`). |

#### Methods

| Method | Description |
|---|---|
| `updateZebra()` | Marks the rows `even` / `odd` in document order (Carbon `_updateZebra`), counting only the rows shown (search, page). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-body-content-change` | `onUiTableBodyContentChange` | its rows were added, removed or reordered (the table listens) |

#### Slots

| Slot | Description |
|---|---|
| (default) | The `<ui-table-row>`s |

### `<ui-table-row>` · React `UiTableRow`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `even` | `even` | `boolean` | `false` | A striped row (set by the body with `use-zebra-styles`). |
| `odd` | `odd` | `boolean` | `false` | An unstriped row of a zebra table (set by the body). |
| `selected` | `selected` | `boolean` | `false` | Chosen (Carbon `selected`); the table keeps the header's select-all and the batch actions in step. |
| `disabled` | `disabled` | `boolean` | `false` | Can't be chosen. |
| `radio` | `radio` | `boolean` | `false` | A single-choice radio instead of a checkbox (the table's `radio` sets it). |
| `hide-checkbox` | `hideCheckbox` | `boolean` | `false` | No checkbox in the selection cell (the header row of a radio table). |
| `selection-name` | `selectionName` | `string` | `''` | Shows the selection cell: the checkbox's name (the table's `is-selectable` sets one). |
| `selection-value` | `selectionValue` | `string` | `''` | The checkbox's value. |
| `selection-label` | `selectionLabel` | `string` | `''` | The checkbox's accessible name; default "Select row" with the row's first cell. |
| `expandable` | `expandable` | `boolean` | `false` | Has a `<ui-table-expanded-row>` after it (the table's `expandable` sets it). |
| `expanded` | `expanded` | `boolean` | `false` | Its expanded row is open. |
| `batch-expansion` | `batchExpansion` | `boolean` | `false` | The header row's chevron opens and closes every row (the table's `batch-expansion` sets it). |
| `filtered` | `filtered` | `boolean` | `false` | Left out by the table's search. |
| `highlighted` | `highlighted` | `boolean` | `false` | Hovered with its expanded row (the two tint together). |
| `paged-out` | `pagedOut` | `boolean` | `false` | On another page of the table's pagination (the table sets it). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `expandColumn` | `boolean` | The table has an expand column: every row gets the cell, expandable ones the chevron. |
| `indeterminate` | `boolean` | The header's select-all is partly checked (some rows chosen); the table sets it. |
| `tabStop` | `boolean` | The radio of a radio table that takes Tab (the chosen row, else the first); the table sets it. |
| `pinStart` | `boolean` | The first column is pinned: the chevron and checkbox cells stick too (the table sets it). |
| `filler` | `boolean` | A filler cell after the cells takes the rest of the row once the columns are resized (the table sets it). |
| `grid` | `boolean` | The table is a grid (an editable column): grid cells, the body's cells and controls out of the Tab order (the table sets it). |

#### Methods

| Method | Description |
|---|---|
| `toggleExpanded(expanded)` | Opens or closes, unless the cancelable `ui-table-row-expando-beingtoggled` is canceled. |
| `gridCells()` | The cells the grid's arrow keys move through: the chevron and checkbox cells, then the shown author cells. |
| `focusSelection()` | Focuses this row's selection control (a radio the arrow keys moved to). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-row-change-selection` | `onUiTableRowChangeSelection` | cancelable; detail: { selected } before the row is chosen or released |
| `ui-table-row-expando-beingtoggled` | `onUiTableRowExpandoBeingtoggled` | cancelable; detail: { expanded } before the row opens or closes |
| `ui-table-row-expando-toggled` | `onUiTableRowExpandoToggled` | detail: { expanded } after the row opened or closed |

#### Slots

| Slot | Description |
|---|---|
| (default) | The row's `<ui-table-cell>`s |

#### CSS parts

| Part | Description |
|---|---|
| `expand-cell` | The cell of the expand chevron |
| `expand-button` | The chevron button |
| `selection-cell` | The cell of the checkbox or radio |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-table-row-selected` |  | Fill of a chosen row (default `--ui-layer-accent`; Kanok: `--ui-highlight`) |
| `--ui-table-row-thread` |  | `background-image` of a chosen row's first cell, for a mark on its start edge (default none; Kanok: a 3px indigo mark) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |

### `<ui-table-cell>` · React `UiTableCell`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `column-hidden` | `columnHidden` | `boolean` | `false` | Its column is hidden (the table follows the header's `column-hidden`). |
| `pinned` | `pinned` | `'start' \| 'end' \| undefined` |  | Its column is pinned (the table follows the header's `pinned`). |
| `editable` | `editable` | `TableCellEditor \| undefined` |  | Its column's editor (the table follows the header's `editable`). |
| `editing` | `editing` | `boolean` | `false` | The editor is open (the table sets it). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `draft` | `string` | The editor's text while editing (the table sets where it starts). |
| `editorLabel` | `string` | The editor's name for screen readers: the column and the row (the table sets it). |
| `editorOptions` | `TableEditOption[]` | A select editor's choices (the header's `options`). |
| `editorError` | `string` | The header's `validate` message for the value in the editor. |
| `editorValue` |  | (read-only) What the editor holds now. |

#### Methods

| Method | Description |
|---|---|
| `focusEditor(select)` | Focuses the open editor; `select` selects a text editor's text (else the caret goes to the end). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The cell's content |

#### CSS parts

| Part | Description |
|---|---|
| `content` | The box inside the cell that holds its padding |
| `edit-icon` | The pencil of an editable cell |
| `editor` | The input or select while editing |
| `error` | The `validate` message under the editor |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-table-cell-ink` |  | Text colour of a row at rest (default `--ui-ink-muted`; Kanok: `--ui-ink`) |

### `<ui-table-expanded-row>` · React `UiTableExpandedRow`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `colspan` | `colSpan` | `number` | `1` | How many columns it spans (the table sets it). |
| `expanded` | `expanded` | `boolean` | `false` | Shown (follows the row before it). |
| `filtered` | `filtered` | `boolean` | `false` | Left out by the table's search, with its row. |
| `paged-out` | `pagedOut` | `boolean` | `false` | On another page, with its row. |
| `highlighted` | `highlighted` | `boolean` | `false` | Hovered with its row. |
| `selected` | `selected` | `boolean` | `false` | Its row is chosen. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `grid` | `boolean` | The table is a grid (an editable column): a grid cell (the table sets it). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The content |

#### CSS parts

| Part | Description |
|---|---|
| `cell` | The full-width cell |

### `<ui-table-header-title>` · React `UiTableHeaderTitle`

#### Slots

| Slot | Description |
|---|---|
| (default) | The title |

### `<ui-table-header-description>` · React `UiTableHeaderDescription`

#### Slots

| Slot | Description |
|---|---|
| (default) | The description |

### `<ui-table-toolbar>` · React `UiTableToolbar`

#### Slots

| Slot | Description |
|---|---|
| (default) | `<ui-table-batch-actions>` and `<ui-table-toolbar-content>` |

### `<ui-table-toolbar-content>` · React `UiTableToolbarContent`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `has-batch-actions` | `hasBatchActions` | `boolean` | `false` | The batch actions are showing (rows are chosen). |

#### Slots

| Slot | Description |
|---|---|
| (default) | The controls |

### `<ui-table-toolbar-search>` · React `UiTableToolbarSearch`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `persistent` | `persistent` | `boolean` | `false` | Always open (Carbon `persistent`). |
| `label` | `label` | `string` | `''` | Accessible name of the field (visually hidden, as in Carbon). |
| `placeholder` | `placeholder` | `string` | `''` |  |
| `value` | `value` | `string` | `''` |  |
| `name` | `name` | `string` | `''` | Reflected: form-associated elements submit under the `name` attribute. |
| `size` | `size` | `SearchSize` | `'md'` | Field height: sm 32px, md 40px, lg 48px (tokens `--ui-field-height-*`). |
| `disabled` | `disabled` | `boolean` | `false` | Disables the control; a disabled `<fieldset>` ancestor does the same. |
| `autocomplete` | `autocomplete` | `string` | `'off'` |  |
| `inputmode` | `inputmode` | `string` | `''` | Passed to the text box: the virtual keyboard to show (`numeric`, `decimal`, `email`, `tel`, `url`, `search`…). |
| `enterkeyhint` | `enterkeyhint` | `string` | `''` | Passed to the text box: the label of the virtual keyboard's Enter key (`search`, `send`, `next`, `done`…). |
| `clear-label` | `clearLabel` | `string` | `''` | Accessible name of the clear button. |
| `required` | `required` | `boolean` | `false` | Constraint validation like `<input type="search">`: blocks submit and reports in the browser's bubble (Carbon Search has no error line). |
| `pattern` | `pattern` | `string` | `''` |  |
| `minlength` | `minlength` | `number \| undefined` |  |  |
| `maxlength` | `maxlength` | `number \| undefined` |  |  |
| `readonly` | `readonly` | `boolean` | `false` | Value can be selected and submitted but not changed; no clear button. |
| `fluid` | `fluid` | `boolean` | `false` | Carbon `FluidSearch`: the label inside a 64px box. `<ui-fluid-form>` sets it for every field inside. |
| `expandable` | `expandable` | `boolean` | `false` | Carbon `ExpandableSearch`: collapsed to its magnifier until opened. |
| `expanded` | `expanded` | `boolean` | `false` | Whether an expandable search is open. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `willValidate` |  | (read-only) Whether the field takes part in constraint validation (not while disabled), as natively. |
| `labels` |  | (read-only) The `<label>`s that point at this field. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid until cleared with ''. |
| `clear()` | Empties the field, keeps focus in it and announces the change (`input`, `change`, `ui-clear`). |

#### Events

| Event | React | Description |
|---|---|---|
| `change` | `onChange` | When the value is committed (blur / Enter) or cleared |
| `ui-toggle` | `onUiToggle` | detail: { expanded } when an expandable search opens or collapses |
| `input` | `onInput` | On every keystroke |
| `ui-clear` | `onUiClear` | After the clear button or Esc emptied the field |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The role=search wrapper |
| `input` | The native search input |
| `label` | The label (visually hidden, as in Carbon; shown inside the box when `fluid`) |
| `magnifier` | The search icon |
| `clear-button` | The clear button |
| `magnifier-button` | The magnifier of an expandable search |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-open-background` |  | The box's fill while a search is under way (default the layer's field fill) |
| `--ui-field-border` |  | Border on every side of the box (default none: Carbon's underline only; Kanok: a 1px outline) |
| `--ui-field-disabled-border-color` |  | Border colour when disabled (default: the underline transparent) |
| `--ui-field-readonly-border-color` |  | Border colour when read-only (default: a hairline underline) |
| `--ui-field-radius` |  | Corner radius of the box (default 0; Kanok: 6px) |
| `--ui-field-background` |  | Fill of the box (default `--ui-surface-1`; Kanok: transparent) |
| `--ui-label-font` |  | Font of the label (default `--ui-font-caption`; Kanok: 14px semibold) |
| `--ui-label-color` |  | Colour of the label (default `--ui-ink-muted`; Kanok: `--ui-ink`) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |

### `<ui-table-batch-actions>` · React `UiTableBatchActions`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `active` | `active` | `boolean` | `false` | Showing over the toolbar (rows are chosen). |
| `selected-rows-count` | `selectedRowsCount` | `number` | `0` | How many rows are chosen (the table sets it; set it yourself for a selection kept across pages). |
| `total-rows-count` | `totalRowsCount` | `number` | `0` | Every row there is (server paging): above the count, "Select all (N)" shows. |
| `size` | `size` | `'xs' \| 'sm' \| 'lg'` | `'lg'` | The table's size, normalized to xs / sm / lg (the table sets it): sizes the action buttons. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `formatSelectedItemsCount` | `(options: { count: number }) => string \| undefined` | The count text (Carbon `formatSelectedItemsCount`); default: the translation. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-batch-actions-cancel-clicked` | `onUiTableBatchActionsCancelClicked` | Cancel was clicked (the table releases every row) |
| `ui-table-batch-actions-select-all-clicked` | `onUiTableBatchActionsSelectAllClicked` | "Select all (N)" was clicked |

#### Slots

| Slot | Description |
|---|---|
| (default) | The actions (`<ui-button>`s; the bar sizes them to the toolbar) |
| `cancel-button-content` | Cancel's text (default: the translation) |
| `select-all-button-content` | "Select all (N)"'s text |

#### CSS parts

| Part | Description |
|---|---|
| `batch-summary` | The selected-count text |
| `select-all-button` | "Select all (N)" |
| `cancel-button` | Cancel |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-batch-background` |  | / --ui-batch-ink / --ui-batch-divider - The bar's fill, text and the rule before Cancel (default Carbon's brand bar: background-brand, text-on-color) |
| `--ui-batch-button` |  | / --ui-batch-button-ink / --ui-batch-button-hover / --ui-batch-button-active / --ui-batch-focus - Its buttons and their focus ring (default the primary button's colours, a layer-coloured ring) |

### `<ui-table-column-settings>` · React `UiTableColumnSettings`

#### CSS parts

| Part | Description |
|---|---|
| `button` | The toolbar action |
| `panel` | The "Columns" list |

### `<ui-table-csv-export>` · React `UiTableCsvExport`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `file-name` | `fileName` | `string` | `''` | The downloaded file's name (`.csv` is added); default: the table's title, else "table". |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-table-csv-export` | `onUiTableCsvExport` | cancelable; detail: { csv, rows, fileName } before the download |

#### CSS parts

| Part | Description |
|---|---|
| `button` | The toolbar action |

### `<ui-table-skeleton>` · React `UiTableSkeleton`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `column-count` | `columnCount` | `number` | `5` |  |
| `row-count` | `rowCount` | `number` | `5` |  |
| `show-header` | `showHeader` | `boolean` | `true` | The title / description bars (Carbon `show-header`; `show-header="false"` hides them). |
| `show-toolbar` | `showToolbar` | `boolean` | `true` | The toolbar bar (Carbon `show-toolbar`; `show-toolbar="false"` hides it). |
| `zebra` | `zebra` | `boolean` | `false` | Stripe every second row. |

#### Properties

| Property | Type | Description |
|---|---|---|
| `headers` | `string[]` | Header texts to show instead of bars (Carbon `headers`); their number sets the columns. |

#### CSS parts

| Part | Description |
|---|---|
| `table` | The `<table>` |


