# Headless Data table

`DataTable` is the behaviour of the styled [Data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/) without a single class, in the style of TanStack Table: the `useDataTable(options)` hook holds the state — sort, search, pages, selection, open rows, hidden columns, column widths and the editable grid — and hands back the rows to show, actions and prop getters. You write the `<table>`; the parts add the keyboard, focus and ARIA rules where they are needed.

You own the markup: every cell, the header, the toolbar, the icons, the empty state and every style. State shows as `data-*` attributes on the parts.

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { DataTable } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { DataTable } from '@purpurabog/ui/headless';

interface Contract {
  id: string;
  name: string;
  party: string;
  status: string;
  [key: string]: unknown;
}

const headers = [
  { key: 'name', header: 'Contract' },
  { key: 'party', header: 'Counterparty' },
  { key: 'status', header: 'Status' },
];
const rows: Contract[] = [
  { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed' },
  { id: '2', name: 'NDA', party: 'Globex', status: 'Draft' },
  { id: '3', name: 'Lease renewal', party: 'Initech', status: 'In review' },
];
const arrows = { ascending: '↑', descending: '↓', none: '↕' } as const;
const head = 'h-12 bg-layer-accent text-start text-sm font-semibold text-ink';
const cell = 'h-12 border-b border-hairline px-4 text-sm text-ink-muted';

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows, sortable: true, selectable: true });
  return (
    <DataTable.Root table={table}>
      <DataTable.Table aria-label="Contracts" className="w-full border-collapse">
        <thead>
          <tr>
            <td className={`${head} w-12 ps-4`}>
              <DataTable.SelectAll aria-label="Select all rows" />
            </td>
            {table.columns.map((column) => (
              <DataTable.ColumnHeader key={column.key} column={column.key} className={head}>
                <DataTable.SortButton className="flex h-12 w-full items-center justify-between px-4 font-semibold hover:bg-layer-selected-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
                  {column.header}
                  <span aria-hidden="true">{arrows[table.sortDirectionOf(column.key)]}</span>
                </DataTable.SortButton>
              </DataTable.ColumnHeader>
            ))}
          </tr>
        </thead>
        <DataTable.Body>
          {table.pageRows.map((row) => (
            <DataTable.Row key={row.id} rowId={row.id} className="hover:bg-ghost-hover data-selected:bg-layer-selected-1 data-selected:text-ink">
              <DataTable.Cell index={0} className={cell}>
                <DataTable.SelectRow aria-label={`Select row, ${row.name}`} />
              </DataTable.Cell>
              {table.columns.map((column, i) => (
                <DataTable.Cell key={column.key} index={i + 1} column={column.key} className={cell}>
                  {String(row[column.key])}
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable.Table>
      <p className="mt-2 text-xs text-ink-muted">Selected: {table.selectedIds.join(', ') || '(none)'}</p>
    </DataTable.Root>
  );
}
```

## Anatomy

```tsx
const table = DataTable.useDataTable({ headers, rows });

<DataTable.Root table={table}>
  <DataTable.EditHint />
  <DataTable.Table>
    <thead>
      <tr>
        <td><DataTable.ExpandAll /></td>
        <td><DataTable.SelectAll /></td>
        <DataTable.ColumnHeader column="…">
          <DataTable.SortButton />
          <DataTable.ResizeHandle />
        </DataTable.ColumnHeader>
        <DataTable.Filler />
      </tr>
    </thead>
    <DataTable.Body>
      <DataTable.Row rowId="…">
        <DataTable.Cell index={0}><DataTable.ExpandToggle /></DataTable.Cell>
        <DataTable.Cell index={1}><DataTable.SelectRow /></DataTable.Cell>
        <DataTable.Cell index={2} column="…">
          <DataTable.CellValue />
          <DataTable.CellInput /> or <DataTable.CellSelect />
          <DataTable.CellError />
        </DataTable.Cell>
        <DataTable.Filler />
      </DataTable.Row>
      <DataTable.ExpandedRow rowId="…" />
    </DataTable.Body>
  </DataTable.Table>
</DataTable.Root>
```

Use only the parts you need: a read-only table is `Root`, `Table`, `Body`, `Row` and `Cell`, or even plain `<tr>` and `<td>` around `table.pageRows`.

## Search and pages

`table.setFilterText(text)` filters the rows (any cell shown contains the text, case-insensitive) and goes back to page 1. With `pageSize` (or `defaultPageSize`), `table.pageRows` is one page; drive it with the headless [Pagination](https://parntengza.github.io/kanok-ui-docs/en/headless-pagination/) or your own buttons through `table.setPagination`.


React (live React example):

```tsx
import { DataTable, Pagination } from '@purpurabog/ui/headless';

interface Contract {
  id: string;
  name: string;
  party: string;
  [key: string]: unknown;
}

const parties = ['Acme', 'Globex', 'Initech', 'Umbrella'];
const headers = [
  { key: 'name', header: 'Contract' },
  { key: 'party', header: 'Counterparty' },
];
const rows: Contract[] = Array.from({ length: 23 }, (_, i) => ({ id: `c${i + 1}`, name: `Contract ${String(i + 1).padStart(3, '0')}`, party: parties[i % 4] }));
const cell = 'h-10 border-b border-hairline px-4 text-sm text-ink-muted';
const arrow = 'size-8 text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-disabled:text-ink-disabled data-disabled:hover:bg-transparent';

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows, defaultPageSize: 5 });
  return (
    <DataTable.Root table={table}>
      <div className="grid max-w-md gap-2">
        <input
          type="search"
          aria-label="Filter contracts"
          placeholder="Filter contracts"
          value={table.filterText}
          onChange={(e) => table.setFilterText(e.target.value)}
          className="h-10 border-b border-border-strong-1 bg-field-1 px-4 text-sm text-ink placeholder:text-ink-placeholder focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
        />
        <DataTable.Table aria-label="Contracts" className="w-full border-collapse">
          <thead>
            <tr>
              {table.columns.map((column) => (
                <DataTable.ColumnHeader key={column.key} column={column.key} className="h-10 bg-layer-accent px-4 text-start text-sm font-semibold text-ink">
                  {column.header}
                </DataTable.ColumnHeader>
              ))}
            </tr>
          </thead>
          <DataTable.Body>
            {table.pageRows.map((row) => (
              <DataTable.Row key={row.id} rowId={row.id}>
                <DataTable.Cell index={0} className={cell}>{row.name}</DataTable.Cell>
                <DataTable.Cell index={1} className={cell}>{row.party}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable.Table>
        {table.filteredRows.length === 0 ? <p className="text-sm text-ink-muted">No results found.</p> : null}
        <Pagination.Root page={table.page} pageSize={table.pageSize} totalItems={table.filteredRows.length} onChange={table.setPagination} className="flex items-center gap-2 text-sm text-ink">
          <span className="me-auto" role="status">
            {table.filteredRows.length} of {table.rows.length} rows · page {table.page} of {table.pageCount}
          </span>
          <Pagination.Prev aria-label="Previous page" className={arrow}>‹</Pagination.Prev>
          <Pagination.Next aria-label="Next page" className={arrow}>›</Pagination.Next>
        </Pagination.Root>
      </div>
    </DataTable.Root>
  );
}
```

`filterRows(row, text, headers)` replaces the test, and `manualFiltering` keeps every row while you filter on the server. `filterText` / `onFilterChange` and `page` / `onPageChange` make both controlled.

## Expandable rows

With `expandable`, each row's `ExpandToggle` opens it; render an `ExpandedRow` under every open row (`table.isExpanded(id)`). `ExpandAll` opens every row shown, or closes them all once all are open. The toggles get `aria-expanded` and `aria-controls` pointing at the open row.


React (live React example):

```tsx
import { DataTable } from '@purpurabog/ui/headless';

interface Contract {
  id: string;
  name: string;
  party: string;
  owner: string;
  [key: string]: unknown;
}

const headers = [
  { key: 'name', header: 'Contract' },
  { key: 'party', header: 'Counterparty' },
];
const rows: Contract[] = [
  { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', owner: 'Kanya S.' },
  { id: '2', name: 'NDA', party: 'Globex', owner: 'Anan P.' },
  { id: '3', name: 'Lease renewal', party: 'Initech', owner: 'Malee K.' },
];
const toggle = 'flex size-8 items-center justify-center text-ink hover:bg-ghost-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus [&>svg]:transition-transform data-expanded:[&>svg]:rotate-90';
const chevron = (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
    <path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" />
  </svg>
);
const cell = 'h-12 border-b border-hairline px-4 text-sm text-ink-muted';

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows, expandable: true, defaultExpandedIds: ['2'] });
  return (
    <DataTable.Root table={table}>
      <DataTable.Table aria-label="Contracts" className="w-full border-collapse">
        <thead>
          <tr className="bg-layer-accent text-start text-sm font-semibold text-ink">
            <td className="w-12 ps-2">
              <DataTable.ExpandAll aria-label={table.allExpanded ? 'Collapse all rows' : 'Expand all rows'} className={toggle}>{chevron}</DataTable.ExpandAll>
            </td>
            {table.columns.map((column) => (
              <DataTable.ColumnHeader key={column.key} column={column.key} className="h-12 px-4 text-start">
                {column.header}
              </DataTable.ColumnHeader>
            ))}
          </tr>
        </thead>
        <DataTable.Body>
          {table.pageRows.flatMap((row) => {
            const parent = (
              <DataTable.Row key={row.id} rowId={row.id} className="data-expanded:[&>td]:border-transparent">
                <DataTable.Cell index={0} className={`${cell} ps-2`}>
                  <DataTable.ExpandToggle aria-label={`Expand row, ${row.name}`} className={toggle}>{chevron}</DataTable.ExpandToggle>
                </DataTable.Cell>
                <DataTable.Cell index={1} className={cell}>{row.name}</DataTable.Cell>
                <DataTable.Cell index={2} className={cell}>{row.party}</DataTable.Cell>
              </DataTable.Row>
            );
            if (!table.isExpanded(row.id)) return [parent];
            return [
              parent,
              <DataTable.ExpandedRow key={`${row.id}-detail`} rowId={row.id}>
                <td colSpan={3} className="border-b border-hairline px-14 pb-6 pt-2 text-sm text-ink-muted">
                  Owner: {row.owner}
                </td>
              </DataTable.ExpandedRow>,
            ];
          })}
        </DataTable.Body>
      </DataTable.Table>
    </DataTable.Root>
  );
}
```

Return the rows as one flat list (as here with `flatMap`), so opening a row doesn't remount it.

## Pick one row

With `radio`, `SelectRow` is a radio: the radios are one Tab stop (the chosen row, else the first enabled one), and the arrow keys move to the next enabled row and select it, wrapping. `SelectAll` renders nothing. A row with `disabled: true` can't be chosen.


React (live React example):

```tsx
import { DataTable } from '@purpurabog/ui/headless';

interface Template {
  id: string;
  name: string;
  type: string;
  disabled?: boolean;
  [key: string]: unknown;
}

const headers = [
  { key: 'name', header: 'Template' },
  { key: 'type', header: 'Type' },
];
const rows: Template[] = [
  { id: 'nda', name: 'Standard NDA', type: 'Confidentiality' },
  { id: 'lease', name: 'Office lease', type: 'Property' },
  { id: 'msa', name: 'Master services (being revised)', type: 'Services', disabled: true },
];
const cell = 'h-12 border-b border-hairline px-4 text-sm text-ink-muted';

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows, radio: true });
  return (
    <DataTable.Root table={table}>
      <DataTable.Table aria-label="Pick a template" className="w-full border-collapse">
        <thead>
          <tr className="h-12 bg-layer-accent text-sm font-semibold text-ink">
            <th className="w-12">
              <span className="sr-only">Select</span>
            </th>
            {table.columns.map((column) => (
              <DataTable.ColumnHeader key={column.key} column={column.key} className="px-4 text-start">
                {column.header}
              </DataTable.ColumnHeader>
            ))}
          </tr>
        </thead>
        <DataTable.Body>
          {table.pageRows.map((row) => (
            <DataTable.Row key={row.id} rowId={row.id} className="data-selected:bg-layer-selected-1 data-selected:[&>td]:text-ink">
              <DataTable.Cell index={0} className={`${cell} ps-4`}>
                <DataTable.SelectRow aria-label={`Select row, ${row.name}`} className="accent-ink" />
              </DataTable.Cell>
              <DataTable.Cell index={1} className={cell}>{row.name}</DataTable.Cell>
              <DataTable.Cell index={2} className={cell}>{row.type}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable.Table>
      <p className="mt-2 text-xs text-ink-muted">Template: {table.selectedIds[0] ?? '(none)'}</p>
    </DataTable.Root>
  );
}
```

## Show and hide columns

`table.columns` is the columns shown; `table.headers` is all of them. `toggleColumn(key, show)` shows or hides one, `isColumnLocked(key)` says it can't be hidden (`hideable: false`, or the last one shown), and `resetColumns()` goes back to the headers' `hidden`. `columnsChanged` says the choice differs from that.


React (live React example):

```tsx
import { DataTable } from '@purpurabog/ui/headless';

interface Contract {
  id: string;
  name: string;
  party: string;
  status: string;
  updated: string;
  [key: string]: unknown;
}

const headers = [
  { key: 'name', header: 'Contract', hideable: false },
  { key: 'party', header: 'Counterparty' },
  { key: 'status', header: 'Status' },
  { key: 'updated', header: 'Updated', hidden: true },
];
const rows: Contract[] = [
  { id: '1', name: 'Service agreement', party: 'Acme Co., Ltd.', status: 'Signed', updated: '2026-09-30' },
  { id: '2', name: 'NDA', party: 'Globex', status: 'Draft', updated: '2026-10-01' },
];
const cell = 'h-10 border-b border-hairline px-4 text-sm text-ink-muted';

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows });
  return (
    <DataTable.Root table={table}>
      <fieldset className="mb-3 flex flex-wrap items-center gap-4 text-sm text-ink">
        <legend className="mb-1 text-xs text-ink-muted">Columns</legend>
        {table.headers.map((column) => (
          <label key={column.key} className="flex items-center gap-2 has-disabled:text-ink-disabled">
            <input
              type="checkbox"
              checked={!table.hiddenColumns.includes(column.key)}
              disabled={table.isColumnLocked(column.key)}
              onChange={(e) => table.toggleColumn(column.key, e.target.checked)}
            />
            {column.header}
          </label>
        ))}
        <button type="button" disabled={!table.columnsChanged} onClick={table.resetColumns} className="h-8 px-3 text-link hover:bg-ghost-hover disabled:text-ink-disabled focus-visible:outline-2 focus-visible:outline-focus">
          Reset
        </button>
      </fieldset>
      <DataTable.Table aria-label="Contracts" className="w-full border-collapse">
        <thead>
          <tr className="h-10 bg-layer-accent text-sm font-semibold text-ink">
            {table.columns.map((column) => (
              <DataTable.ColumnHeader key={column.key} column={column.key} className="px-4 text-start">
                {column.header}
              </DataTable.ColumnHeader>
            ))}
          </tr>
        </thead>
        <DataTable.Body>
          {table.pageRows.map((row) => (
            <DataTable.Row key={row.id} rowId={row.id}>
              {table.columns.map((column, i) => (
                <DataTable.Cell key={column.key} index={i} column={column.key} className={cell}>
                  {String(row[column.key])}
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable.Table>
    </DataTable.Root>
  );
}
```

Hidden columns leave the search too. `hiddenColumns` / `onColumnsChange` make the choice controlled, so you can save it.

## Edit cells in place

A column with `editable: 'text' | 'number' | 'select'` makes the table an APG grid: `Table` gets `role="grid"`, one body cell is the Tab stop, and the arrow keys, Home / End and Ctrl + Home / End move it. Enter, F2, a double click, a click on a `data-edit-icon` element or typing opens the editor. Render `CellInput` or `CellSelect` while the cell is edited (`useCellContext().editing`), and `CellError` for `validate`'s message. `onCellEdit` hands you the new `rows`.


React (live React example):

```tsx
import { useState } from 'react';
import { DataTable } from '@purpurabog/ui/headless';

interface Contract {
  id: string;
  name: string;
  amount: number;
  status: string;
  [key: string]: unknown;
}

const headers: DataTable.DataTableColumn[] = [
  { key: 'name', header: 'Name', editable: 'text', validate: (value) => (String(value).trim() ? '' : 'Name is required') },
  { key: 'amount', header: 'Amount (THB)', editable: 'number' },
  { key: 'status', header: 'Status', editable: 'select', options: [
    { value: 'draft', label: 'Draft' },
    { value: 'signed', label: 'Signed' },
  ] },
];
const initialRows: Contract[] = [
  { id: '1', name: 'Office lease 2026', amount: 250000, status: 'draft' },
  { id: '2', name: 'NDA – Acme', amount: 0, status: 'signed' },
];
const editor = 'h-full w-full bg-surface-1 px-4 text-sm text-ink outline-2 -outline-offset-2 outline-focus aria-invalid:outline-error';

function CellContent({ column, value }: { column: DataTable.DataTableColumn; value: unknown }) {
  const { editing } = DataTable.useCellContext();
  if (editing) {
    return (
      <>
        {column.editable === 'select' ? <DataTable.CellSelect aria-label={column.header} className={editor} /> : <DataTable.CellInput aria-label={column.header} className={editor} />}
        <DataTable.CellError className="absolute start-0 top-full z-10 whitespace-nowrap bg-surface-1 px-2 py-1 text-xs text-error-text shadow" />
      </>
    );
  }
  const shown = column.options?.find((option) => option.value === value)?.label ?? String(value);
  return (
    <>
      <DataTable.CellValue>{shown}</DataTable.CellValue>
      {column.editable ? <span data-edit-icon="" aria-hidden="true" className="ms-2 cursor-pointer opacity-0 group-hover:opacity-100 group-focus:opacity-100">✎</span> : null}
    </>
  );
}

export default function Example() {
  const [rows, setRows] = useState(initialRows);
  const [last, setLast] = useState('');
  const table = DataTable.useDataTable({
    headers,
    rows,
    onCellEdit: (edit) => {
      setRows(edit.rows);
      setLast(`${edit.key}: ${String(edit.previous)} → ${edit.value}`);
    },
  });
  return (
    <DataTable.Root table={table}>
      <DataTable.EditHint className="sr-only">Press Enter to edit</DataTable.EditHint>
      <DataTable.Table aria-label="Contracts" className="w-full border-collapse">
        <thead>
          <tr className="h-12 bg-layer-accent text-sm font-semibold text-ink">
            {table.columns.map((column) => (
              <DataTable.ColumnHeader key={column.key} column={column.key} className="px-4 text-start">
                {column.header}
              </DataTable.ColumnHeader>
            ))}
          </tr>
        </thead>
        <DataTable.Body>
          {table.pageRows.map((row) => (
            <DataTable.Row key={row.id} rowId={row.id}>
              {table.columns.map((column, i) => (
                <DataTable.Cell
                  key={column.key}
                  index={i}
                  column={column.key}
                  className="group relative h-12 border-b border-hairline px-4 text-sm text-ink-muted data-editing:p-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
                >
                  <CellContent column={column} value={row[column.key]} />
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable.Table>
      <p className="mt-2 text-xs text-ink-muted">Last edit: {last}</p>
    </DataTable.Root>
  );
}
```

In the editor, Enter saves, Escape cancels, Tab / Shift + Tab save and edit the next / previous editable cell, and leaving the cell saves. Controls inside cells (links, buttons) leave the Tab order in a grid; Enter or Space on their cell presses them.

## Resize columns

`resizable` (or a column's `resizable`) gives `ResizeHandle` something to do: a native range input on the header's edge — drag it, or arrows 2px, Shift / Page Up / Down 16px, Home / End narrowest / widest. The first resize freezes the automatic layout into fixed widths (`table.resize.fixed`); `Filler` then takes the rest of the row. Attach `table.boxRef` to the scroll box, so the widest a column gets is the box's width.


React (live React example):

```tsx
import { DataTable } from '@purpurabog/ui/headless';

interface Contract {
  id: string;
  name: string;
  owner: string;
  amount: string;
  [key: string]: unknown;
}

const headers = [
  { key: 'name', header: 'Name', minWidth: 120 },
  { key: 'owner', header: 'Owner' },
  { key: 'amount', header: 'Amount (THB)', resizable: false },
];
const rows: Contract[] = [
  { id: '1', name: 'Office lease 2026', owner: 'Ananya', amount: '250,000' },
  { id: '2', name: 'Software licence', owner: 'Chai', amount: '48,000' },
];
const cell = 'h-10 border-b border-hairline px-4 text-sm text-ink-muted';

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows, resizable: true });
  const { boxRef } = table;
  return (
    <DataTable.Root table={table}>
      <div ref={boxRef} className="overflow-x-auto">
        <DataTable.Table aria-label="Contracts" style={table.resize.tableStyle} className={`w-full border-collapse ${table.resize.fixed ? 'table-fixed' : ''}`}>
          <thead>
            <tr className="h-10 bg-layer-accent text-sm font-semibold text-ink">
              {table.columns.map((column) => (
                <DataTable.ColumnHeader key={column.key} column={column.key} className="group relative px-4 text-start">
                  {column.header}
                  <DataTable.ResizeHandle aria-label={`Resize ${column.header} column`} valueText={(px) => `${px} pixels`} className="peer absolute -end-3 top-0 z-10 m-0 h-full w-6 cursor-col-resize appearance-none bg-transparent opacity-0" />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 w-0.5 group-hover:bg-border-strong-1 group-data-resizing:bg-interactive peer-focus-visible:bg-focus" />
                </DataTable.ColumnHeader>
              ))}
              <DataTable.Filler />
            </tr>
          </thead>
          <DataTable.Body>
            {table.pageRows.map((row) => (
              <DataTable.Row key={row.id} rowId={row.id}>
                {table.columns.map((column, i) => (
                  <DataTable.Cell key={column.key} index={i} column={column.key} className={cell}>
                    {String(row[column.key])}
                  </DataTable.Cell>
                ))}
                <DataTable.Filler className={cell} />
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable.Table>
      </div>
      <p className="mt-2 text-xs text-ink-muted">Widths: {JSON.stringify(table.columnWidths)}</p>
    </DataTable.Root>
  );
}
```

`columnWidths` / `onColumnResize` make the widths controlled, so you can save and restore them. Columns take `width`, `minWidth` (default 50) and `maxWidth`.

## Style it

Draw the checkboxes yourself from `data-checked` and `data-indeterminate`, turn the sort arrow from `data-direction`, and shade selected and striped rows.


React (live React example):

```tsx
import { DataTable } from '@purpurabog/ui/headless';

interface Signer {
  id: string;
  name: string;
  role: string;
  [key: string]: unknown;
}

const headers = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
];
const rows: Signer[] = [
  { id: '1', name: 'Anan P.', role: 'Managing director' },
  { id: '2', name: 'Kanya S.', role: 'Legal counsel' },
  { id: '3', name: 'Somchai D.', role: 'Witness' },
];
const cell = 'h-12 border-b border-hairline px-4 text-sm text-ink-muted';

function Box({ label, all = false }: { label: string; all?: boolean }) {
  const input = 'peer absolute inset-0 m-0 cursor-pointer opacity-0';
  return (
    <span className="relative inline-flex size-4">
      {all ? <DataTable.SelectAll aria-label={label} className={input} /> : <DataTable.SelectRow aria-label={label} className={input} />}
      <span aria-hidden="true" className="pointer-events-none flex size-4 items-center justify-center border border-icon-primary text-[11px] leading-none text-on-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-focus peer-data-checked:bg-icon-primary peer-data-checked:after:content-['✓'] peer-data-indeterminate:bg-icon-primary peer-data-indeterminate:after:content-['–']" />
    </span>
  );
}

export default function Example() {
  const table = DataTable.useDataTable({ headers, rows, sortable: true, selectable: true });
  return (
    <DataTable.Root table={table}>
      <DataTable.Table aria-label="Signers" className="w-full border-collapse">
        <thead>
          <tr className="bg-layer-accent text-sm text-ink">
            <td className="w-12 ps-4">
              <Box label="Select all rows" all />
            </td>
            {table.columns.map((column) => (
              <DataTable.ColumnHeader key={column.key} column={column.key} className="p-0 text-start font-semibold">
                <DataTable.SortButton className="group flex h-12 w-full items-center justify-between px-4 hover:bg-layer-selected-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus data-[direction=ascending]:bg-layer-selected-hover data-[direction=descending]:bg-layer-selected-hover">
                  {column.header}
                  <svg viewBox="0 0 32 32" aria-hidden="true" className="size-4 fill-icon-primary opacity-0 transition-transform group-hover:opacity-100 group-data-[direction=ascending]:opacity-100 group-data-[direction=descending]:rotate-180 group-data-[direction=descending]:opacity-100">
                    <path d="M16 4 6 14l1.41 1.41L15 7.83V28h2V7.83l7.59 7.58L26 14 16 4z" />
                  </svg>
                </DataTable.SortButton>
              </DataTable.ColumnHeader>
            ))}
          </tr>
        </thead>
        <DataTable.Body>
          {table.pageRows.map((row) => (
            <DataTable.Row key={row.id} rowId={row.id} className="even:bg-layer-accent hover:bg-ghost-hover data-selected:bg-layer-selected-1 data-selected:[&>td]:text-ink">
              <DataTable.Cell index={0} className={`${cell} ps-4`}>
                <Box label={`Select row, ${row.name}`} />
              </DataTable.Cell>
              {table.columns.map((column, i) => (
                <DataTable.Cell key={column.key} index={i + 1} column={column.key} className={cell}>
                  {String(row[column.key])}
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable.Table>
    </DataTable.Root>
  );
}
```
```css
th[data-sortable] button:hover { background: #d1d1d1; }
button[data-direction='ascending'] .arrow,
button[data-direction='descending'] .arrow { opacity: 1; }
button[data-direction='descending'] .arrow { transform: rotate(180deg); }
tr[data-row-id]:nth-child(even) { background: #e0e0e0; }
tr[data-selected] { background: #e0e0e0; color: #161616; }
input[data-checked] + .box,
input[data-indeterminate] + .box { background: #161616; }
td[data-editable]:focus-visible { outline: 2px solid #0f62fe; outline-offset: -2px; }
td[data-editing] { padding: 0; }
th[data-resizing] { background: #c6c6c6; }
```

## The hook

### DataTable.useDataTable(options)

Holds the state. Every piece of state can be controlled (`sortKey`, `selectedIds` …) or left to the hook (`default…`).

| Option | Type | Default | |
|---|---|---|---|
| `headers` | `DataTableColumn[]` | | The columns: `{ key, header }` plus the column options below (required) |
| `rows` | `R[]` | | The rows: `{ id, …cells }`, `disabled` to block selection (required) |
| `id` | `string` | generated | Base of the ids the parts give their elements |
| `sortable` | `boolean` | `false` | Every column sorts unless its header sets `sortable: false` |
| `sortKey`, `sortDirection` | `string`, `SortDirection` | | The sort (controlled) |
| `defaultSortKey`, `defaultSortDirection` | `string`, `SortDirection` | `''`, `'none'` | The starting sort |
| `onSortChange` | `(sort: { key, direction }) => void` | | After a sort button was pressed |
| `manualSorting` | `boolean` | `false` | Keep `rows` in your order (sort on the server); the headers still show the sort |
| `sortRow` | `(a, b, context) => number` | | Replaces the comparison |
| `locale` | `string` | `'en'` | Orders the sort |
| `selectable` | `boolean` | `false` | Checkboxes with select-all |
| `radio` | `boolean` | `false` | One choice with a radio per row |
| `selectedIds`, `defaultSelectedIds` | `string[]` | `[]` | The selected rows |
| `onSelectionChange` | `(ids: string[], rows: R[]) => void` | | After the selection changed |
| `filterText`, `defaultFilterText` | `string` | `''` | The search text |
| `onFilterChange` | `(value: string) => void` | | After `setFilterText` |
| `filterRows` | `(row, text, headers) => boolean` | | Replaces the search's row test |
| `manualFiltering` | `boolean` | `false` | Keep every row (filter on the server) |
| `expandable` | `boolean` | `false` | Rows open and close |
| `expandedIds`, `defaultExpandedIds` | `string[]` | `[]` | The open rows |
| `onExpandChange` | `(change: { expandedIds, expanded, id? }) => void` | | After a row (or, without `id`, every row) opened or closed |
| `pageSize`, `defaultPageSize` | `number` | `0` | Rows per page (0: one page of every row) |
| `page`, `defaultPage` | `number` | `1` | The page, from 1 |
| `onPageChange` | `(change: { page, pageSize }) => void` | | After `setPagination`, or a new search on a later page |
| `hiddenColumns`, `defaultHiddenColumns` | `string[]` | headers marked `hidden` | Keys of the columns not shown |
| `onColumnsChange` | `(change: { hiddenColumns, key, hidden }) => void` | | After a column was shown or hidden (`key` `''` after a reset) |
| `resizable` | `boolean` | `false` | Every column gets a resize handle |
| `columnWidths`, `defaultColumnWidths` | `Record<string, number>` | `{}` | Column widths in px by key |
| `onColumnResize` | `(change: { key, width, widths }) => void` | | After a resize (once per drag or key press) |
| `staticWidth` | `boolean` | `false` | A resized table is as wide as its columns, not its box |
| `onCellEdit` | `(edit: { rowId, key, value, previous, row, rows }) => void` | | An edited cell was saved: set `rows` to `edit.rows` |

Column options on each header: `sortable`, `editable` (`'text' \| 'number' \| 'select'`), `options` (`{ value, label }[]` for a select), `validate(value, row)`, `resizable`, `width`, `minWidth`, `maxWidth`, `hideable`, `hidden`, `pinned` (`'start' \| 'end'`).

What it returns, by topic:

| | |
|---|---|
| Rows | `rows`, `filteredRows` (search kept), `sortedRows`, `pageRows` (the rows to render), `rowById` |
| Columns | `headers` (all), `columns` (shown), `hiddenColumns`, `toggleColumn(key, show)`, `resetColumns()`, `isColumnLocked(key)`, `columnsChanged`, `pins` |
| Sort | `sortKey`, `sortDirection`, `sortDirectionOf(key)`, `isSortable(column)`, `sortBy(key)` |
| Search | `filterText`, `setFilterText(text)` |
| Pages | `paged`, `page`, `pageSize`, `pageCount`, `setPagination({ page, pageSize })` |
| Selection | `selectable`, `radio`, `selectedIds`, `isSelected(id)`, `setSelectedIds(ids)`, `toggleRow(row, checked)`, `toggleAll()`, `selectAll()`, `allSelected`, `someSelected`, `radioStop`, `getSelectAllProps()`, `getSelectRowProps(row)` |
| Open rows | `expandable`, `expandedIds`, `isExpanded(id)`, `allExpanded`, `toggleExpanded(id)`, `toggleAllExpanded()`, `expandedRowId(id)` |
| Widths and grid | `columnWidths`, `resize` (`fixed`, `hasFiller`, `tableStyle`, `widthOf(column)` …), `grid` (`enabled` …), `tableRef`, `boxRef`, `id` |

`DataTable.useDataTableContext()` returns the same object to any component inside `Root`.

## Parts

### DataTable.Root

Renders nothing of its own: it gives its children the hook's table.

| Prop | Type | Default | |
|---|---|---|---|
| `table` | what `useDataTable` returned | | Required |

### DataTable.Table

Renders a `<table>` with the hook's `tableRef`; `role="grid"` once a column is `editable`. It takes every `<table>` prop.

### DataTable.Body

Renders a `<tbody>`. In a grid it handles the cells' keys, clicks, double clicks and focus.

### DataTable.ColumnHeader

Renders a `<th scope="col">` with `aria-sort` on a sortable column, `data-key`, and its resized width. It takes every `<th>` prop.

| Prop | Type | Default | |
|---|---|---|---|
| `column` | `string` | | The column's key (required) |

| Attribute | When |
|---|---|
| `data-sortable` | The column sorts |
| `data-resizing` | Its handle is being dragged |

### DataTable.SortButton

Renders a `<button type="button">` that steps its column's sort: none → ascending → descending → none; a new column starts ascending. Describe the next step with `aria-describedby` if you like.

| Attribute | When |
|---|---|
| `data-direction` | Always: `none`, `ascending` or `descending` |

### DataTable.ResizeHandle

Renders an `<input type="range">` (nothing for a column that doesn't resize). Name it ("Resize Name column"). It takes every input prop except `type`, `value`, `min`, `max` and `step`.

| Prop | Type | Default | |
|---|---|---|---|
| `valueText` | `(width: number) => string` | | The width as words for assistive tech ("120 pixels") |

### DataTable.Row

Renders a `<tr>` with `data-row-id`, which the grid and the radios find it by.

| Prop | Type | Default | |
|---|---|---|---|
| `rowId` | `string` | | The row's `id` (required) |

| Attribute | When |
|---|---|
| `data-selected` | The row is selected |
| `data-expanded` | The row is open |

### DataTable.Cell

Renders a `<td>`. In a grid one body cell is the Tab stop and the others are `tabIndex={-1}`; cells that can't be edited are `aria-readonly`.

| Prop | Type | Default | |
|---|---|---|---|
| `index` | `number` | | The cell's place in its row, from 0, counting every cell (expand, select, data) (required) |
| `column` | `string` | | The column's key, for a data cell; an `editable` column makes the cell editable |

| Attribute | When |
|---|---|
| `data-editable` | The cell can be edited |
| `data-editing` | The cell is being edited |
| `data-key` | The column's key, on an editable cell |

`DataTable.useCellContext()` returns the cell's `rowId`, `column` and `editing` (`{ draft, error }` while edited, else `null`).

### DataTable.CellValue, DataTable.EditHint

`CellValue` renders a `<span>` around an editable cell's value: a click on it focuses the cell. `EditHint` renders a `<span>` with the text that describes every editable cell ("Press Enter to edit"); only in a grid. Hide it visually.

### DataTable.CellInput, DataTable.CellSelect, DataTable.CellError

The editor while a cell is edited: `CellInput` an `<input>` (text, or number with `inputMode="decimal"`), `CellSelect` a `<select>` of the column's `options` (or your own `<option>` children). Both are `aria-invalid` and described by the error while `validate` refuses the value. `CellError` renders a `<span role="alert">` with the message, and nothing while the value is valid.

### DataTable.SelectAll

Renders a native checkbox (the headless [Checkbox](https://parntengza.github.io/kanok-ui-docs/en/headless-checkbox/)): checked when every row in scope is selected, mixed when some are. A press clears the selection when any row is selected, else selects every enabled row shown (Carbon). Nothing in a `radio` table.

| Attribute | When |
|---|---|
| `data-checked` | Every row in scope is selected |
| `data-indeterminate` | Some are |

### DataTable.SelectRow

Renders a native checkbox for its row, or a radio in a `radio` table. A disabled row's box is disabled.

| Attribute | When |
|---|---|
| `data-checked` | The row is selected |

### DataTable.ExpandToggle, DataTable.ExpandAll

Each renders a `<button type="button">` with `aria-expanded`; `aria-controls` points at the open row(s). `ExpandToggle` opens or closes its row; `ExpandAll` opens every row shown, or closes them all once all are open. Name them with `aria-label`.

| Attribute | When |
|---|---|
| `data-expanded` | Its row is open (every row, for `ExpandAll`) |

### DataTable.ExpandedRow

Renders the `<tr>` under an open row, with the id its toggle controls.

| Prop | Type | Default | |
|---|---|---|---|
| `rowId` | `string` | | The open row's `id` (required) |

### DataTable.Filler

Renders an empty `<td aria-hidden="true">` that takes the rest of a row of resized columns — only then.

## Keyboard and accessibility

- Without editable columns, the parts are native: sort buttons, checkboxes and expand buttons are each in the Tab order. A `radio` table's radios are one Tab stop, and the arrow keys move and select, wrapping.
- With an editable column, the table is a WAI-ARIA grid: one Tab stop among the body cells, the arrow keys, Home / End and Ctrl + Home / End move it, and Enter or Space press a control in a cell.
- You add the table's name (`aria-label`, or `aria-labelledby` to your heading), names for the select and expand controls (say the row: "Select row, NDA"), a screen-reader name for the radio column, and the "Press Enter to edit" text.
- Announce what changed yourself: after a sort ("Sorted by Contract, ascending") and once typing in a search pauses ("3 of 12 rows"), with a polite status. Set `aria-busy` on the table while it reloads.
