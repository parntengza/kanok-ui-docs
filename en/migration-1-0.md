# Migrating to 1.0

1.0 replaces the data-driven web component `<ui-data-table>` with a family of elements that follow Carbon web components (`cds-table`): `<ui-table>`, `<ui-table-head>`, `<ui-table-header-row>`, `<ui-table-header-cell>`, `<ui-table-body>`, `<ui-table-row>`, `<ui-table-cell>` and the toolbar, batch-action and skeleton elements around them. This page lists what to change.

## What changed and why

- **Markup instead of data.** `<ui-data-table>` took `headers` and `rows` as properties and drew the table itself. `<ui-table>` is written as elements, as Carbon's `cds-table` is: each header, row and cell is an element you write or render. What a cell shows is whatever you put in it, so `renderCell` is gone.
- **Carbon web components names.** Attributes, events, slots and parts now follow `cds-table`: `is-sortable`, `is-selectable`, `use-zebra-styles`, `ui-table-header-cell-sort`, `ui-table-row-selected` and so on. Features Carbon doesn't have (paging, column settings, pinned and resized columns, CSV, inline editing, loading and empty states) keep working with the same behaviour and get names in the same style.
- **The toolbar is elements too.** The search, the batch actions, the Columns button and the Export CSV button are `<ui-table-toolbar-search>`, `<ui-table-batch-actions>`, `<ui-table-column-settings>` and `<ui-table-csv-export>` inside a `<ui-table-toolbar>`, instead of switches on the table.
- **New entry point.** Import `@purpurabog/ui/table` instead of `@purpurabog/ui/data-table`.

**Unchanged:** the React + Tailwind `DataTable` (`tw-data-table`, data-driven with `headers` and `rows`, including `DataTableSkeleton`) and the headless `useDataTable` hook and its parts. Code that uses them needs no change.

## Before and after


Before:

```html
<ui-data-table id="contracts" heading="Contracts" sortable selectable searchable csv-export>
  <ui-button slot="batch-actions">Archive</ui-button>
</ui-data-table>

<script type="module">
  import '@purpurabog/ui/data-table';

  const table = document.getElementById('contracts');
  table.headers = [
    { key: 'name', header: 'Contract' },
    { key: 'amount', header: 'Amount (THB)' },
  ];
  table.rows = [
    { id: '1', name: 'Service agreement', amount: 1250000 },
    { id: '2', name: 'NDA', amount: 0 },
  ];
  table.renderCell = (row, header) => (header.key === 'amount' ? row.amount.toLocaleString('th-TH') : row[header.key]);
  table.addEventListener('ui-select', (event) => console.log(event.detail.selected));
</script>
```

After:

```html
<ui-table id="contracts" aria-label="Contracts" is-sortable is-selectable>
  <ui-table-header-title slot="title">Contracts</ui-table-header-title>
  <ui-table-toolbar slot="toolbar">
    <ui-table-batch-actions>
      <ui-button>Archive</ui-button>
    </ui-table-batch-actions>
    <ui-table-toolbar-content>
      <ui-table-toolbar-search></ui-table-toolbar-search>
      <ui-table-csv-export></ui-table-csv-export>
    </ui-table-toolbar-content>
  </ui-table-toolbar>
  <ui-table-head>
    <ui-table-header-row>
      <ui-table-header-cell column="name">Contract</ui-table-header-cell>
      <ui-table-header-cell column="amount">Amount (THB)</ui-table-header-cell>
    </ui-table-header-row>
  </ui-table-head>
  <ui-table-body>
    <ui-table-row data-id="1">
      <ui-table-cell>Service agreement</ui-table-cell>
      <ui-table-cell sort-value="1250000" csv-value="1250000">1,250,000</ui-table-cell>
    </ui-table-row>
    <ui-table-row data-id="2">
      <ui-table-cell>NDA</ui-table-cell>
      <ui-table-cell sort-value="0" csv-value="0">0</ui-table-cell>
    </ui-table-row>
  </ui-table-body>
</ui-table>

<script type="module">
  import '@purpurabog/ui/table';

  const table = document.getElementById('contracts');
  table.addEventListener('ui-table-row-selected', (event) => console.log(event.detail.selectedRows.map((row) => row.dataset.id)));
</script>
```

## Attributes and properties

| `<ui-data-table>` | 1.0 |
|---|---|
| `headers` (`{ key, header }[]`) | `<ui-table-header-cell>`s in a `<ui-table-head>` › `<ui-table-header-row>`; `key` → `column`, `header` → the cell's content |
| `rows` (`{ id, … }[]`) | `<ui-table-row>`s of `<ui-table-cell>`s in a `<ui-table-body>`; keep the id yourself (`data-id`, a React `key`) |
| `renderCell(row, header)` | Write the content into the `<ui-table-cell>` |
| `size` | `size` (unchanged) |
| `zebra` | `use-zebra-styles` |
| `static-width` | `use-static-width` |
| `sortable` | `is-sortable` on the table (every header) or on single headers |
| `sort-key` + `sort-direction` | `sort-direction` on that `<ui-table-header-cell>` |
| `manual-sorting` | `preventDefault()` on `ui-table-header-cell-sort`, then sort the data and set `sort-direction` |
| `sortRow(a, b, context)` | `sort-value` on cells; `customSortRow(lhs, rhs, collator)` on the table compares two cells' values |
| `heading` | `<ui-table-header-title slot="title">` |
| `description` | `<ui-table-header-description slot="description">` |
| `label` | `aria-label` on `<ui-table>` |
| `selectable` | `is-selectable` |
| `radio` | `radio` (unchanged) |
| `selectedIds` | `selected` on `<ui-table-row>`; `selectedRows` (the row elements) on the table |
| `searchable` | `<ui-table-toolbar-search>` in `<ui-table-toolbar-content>` |
| `search-persistent` | `persistent` on `<ui-table-toolbar-search>` |
| `search-label`, `search-placeholder` | `label`, `placeholder` on `<ui-table-toolbar-search>` |
| `filter-text` | No attribute: set the search's `value` and dispatch an `input` event from it |
| `filterRows(row, text, headers)` (true keeps the row) | `filterRows(rowText, searchString)` on the table — **true now leaves the row out**, as in Carbon |
| `manual-filtering` | `filterRows = () => false`, and listen for `input` on the search |
| `renderExpandedRow(row)` | `expandable` on the table and a `<ui-table-expanded-row>` right after the row |
| `expandedIds` | `expanded` on `<ui-table-row>` |
| `expand-all` | `batch-expansion` (with `expandable`) |
| `sticky-header` | `sticky-header` (unchanged) |
| `resizable` | `resizable` on the table (every header) or on single headers |
| `columnWidths` | `width` on each header; `columnWidths` on the table is now read-only |
| `loading`, `loading-rows` | Unchanged |
| `page-size`, `page`, `page-sizes` | Unchanged |
| `total-selected` | `selected-rows-count` on `<ui-table-batch-actions>` (set it in your `ui-table-row-selected` listener) |
| `total-count` | `total-rows-count` on `<ui-table-batch-actions>` |
| `column-settings` | `<ui-table-column-settings>` in `<ui-table-toolbar-content>` |
| `hiddenColumns` | `column-hidden` on headers, `setColumnHidden(column, hidden)` and `resetColumns()`; `hiddenColumns` on the table is now read-only |
| `csv-export` | `<ui-table-csv-export>` in `<ui-table-toolbar-content>` |
| `csv-file-name` | `file-name` on `<ui-table-csv-export>` |
| Host `data-has-selection` | `selected` on `<ui-table-header-row>` while any row is chosen (`ui-table:has(ui-table-header-row[selected])`) |

Header fields:

| `DataTableHeader` | `<ui-table-header-cell>` |
|---|---|
| `key` | `column` |
| `header` | The cell's content |
| `sortable: false` | Leave `is-sortable` off the table and put it on the headers that sort |
| `align` | No attribute: style the cells, e.g. `style="text-align: end"` on `<ui-table-cell>` |
| `editable`, `options` | `editable`, `options` (a property, or JSON in the attribute) |
| `validate(value, row)` | `validate(value, cell)` (a property) |
| `resizable: false` | Leave `resizable` off the table and put it on the headers that resize |
| `width`, `minWidth`, `maxWidth` | `width`, `min-width`, `max-width` |
| `hideable: false` | `hideable="false"` |
| `hidden: true` | `column-hidden` |
| `pinned` | `pinned` |

Row fields: `id` is yours to keep (`data-id`); `disabled: true` → `disabled` on `<ui-table-row>`.

## Methods

| `<ui-data-table>` | 1.0 |
|---|---|
| `toCsv({ scope })`, `downloadCsv({ scope, fileName })` | Unchanged on `<ui-table>` |
| `focus()` | Unchanged |
| `selectedRows` | `selectedRows` returns the `<ui-table-row>` elements |
| `sortBy(key, direction)` | None: click the header, or sort the data yourself and set `sort-direction` |
| `filteredRows`, `visibleRows`, `shownRows` | None: `table.querySelectorAll('ui-table-row:not([filtered])')`; rows on other pages also have `paged-out` |
| `pageCount` | None: `Math.ceil(rows / pageSize)` |
| `visibleHeaders` | `table.columns.filter((header) => !header.columnHidden)` |

## Events

| `<ui-data-table>` | 1.0 |
|---|---|
| `ui-sort` `{ key, direction }` | `ui-table-header-cell-sort` `{ oldSortDirection, sortDirection }` from the header, cancelable, before the rows move; `ui-table-sorted` `{ sortedHeader }` after |
| `ui-select` `{ selected, rows }` | `ui-table-row-selected` `{ selectedRow, selectedRows }`; `ui-table-row-all-selected` `{ selectedRows }` after select-all or Cancel |
| `ui-filter` `{ value }` | `ui-table-filtered` `{ unfilteredRows }`; `input` on `<ui-table-toolbar-search>` for the text |
| `ui-cell-edit` `{ rowId, key, value, previous, row }`, after the save | `ui-table-cell-edit` `{ row, cell, column, value, previous }` from the cell, cancelable, before the value is written |
| `ui-page-change` | `ui-table-page-change` (same detail) |
| `ui-select-all` `{ totalCount }` | `ui-table-batch-actions-select-all-clicked` from `<ui-table-batch-actions>` |
| `ui-column-resize` `{ key, width, widths }` | `ui-table-column-resize` `{ column, width }` from the header; read `columnWidths` on the table for all |
| `ui-expand` `{ expandedIds, expanded, id }` | `ui-table-row-expando-toggled` `{ expanded }` from the row (cancelable `ui-table-row-expando-beingtoggled` before) |
| `ui-csv-export` `{ csv, rows, fileName }` | `ui-table-csv-export` `{ csv, rows, fileName }` from `<ui-table-csv-export>`, cancelable; `rows` are now the row elements |
| `ui-columns-change` `{ hiddenColumns, key, hidden }` | `ui-table-columns-change` `{ hiddenColumns, column, hidden }` |

## Slots

| `<ui-data-table>` | 1.0 |
|---|---|
| `toolbar` | Your controls go in `<ui-table-toolbar-content>`, inside `<ui-table-toolbar slot="toolbar">` |
| `batch-actions` | The children of `<ui-table-batch-actions>` |
| `empty`, `no-results` | Unchanged |
| — | New: `title`, `description` |

## CSS parts and custom property

| `<ui-data-table>` | 1.0 |
|---|---|
| `base` | None: style `ui-table` |
| `header`, `content`, `table`, `pagination`, `empty` | Unchanged on `ui-table` |
| `title`, `description` | Style `ui-table-header-title`, `ui-table-header-description` |
| `toolbar`, `toolbar-content`, `search` | Style `ui-table-toolbar`, `ui-table-toolbar-content`, `ui-table-toolbar-search` |
| `batch-actions` | Style `ui-table-batch-actions` |
| `batch-summary`, `cancel-button`, `select-all-button` | `ui-table-batch-actions::part(…)`, same names |
| `sort-button`, `resizer` | `ui-table-header-cell::part(sort-button)`, `::part(resizer)` |
| `columns-button`, `columns-panel` | `ui-table-column-settings::part(button)`, `::part(panel)` |
| `export-button` | `ui-table-csv-export::part(button)` |
| `expand-button` | `ui-table-row::part(expand-button)` (`ui-table-header-row` for expand-all) |
| `expanded-row` | `ui-table-expanded-row::part(cell)` |
| `--ui-data-table-max-height` | `--ui-table-max-height` |

React + Tailwind's `DataTable` still reads `--ui-data-table-max-height`.

## Skeleton

`<ui-data-table-skeleton>` (`UiDataTableSkeleton`) becomes `<ui-table-skeleton>` (`UiTableSkeleton`), as Carbon's `cds-table-skeleton`: `headers` is a list of strings instead of `{ header }` objects, `hide-header` becomes `show-header="false"` and `hide-toolbar` becomes `show-toolbar="false"`. `row-count`, `column-count` and `zebra` are unchanged; there is no `size`.

## Screen reader announcements

`<ui-data-table>` said "Sorted by Contract, ascending" after a sort and "3 of 12 rows" when typing paused. `<ui-table>` says only "Loading data" while `loading`, as Carbon's table says nothing; the batch bar's count is still a status. The React + Tailwind `DataTable` keeps both announcements.

## React

`UiDataTable` and `UiDataTableSkeleton` are gone from `@purpurabog/ui/react`. Pick one of:

- **The `UiTable*` wrappers** (`UiTable`, `UiTableHead`, `UiTableHeaderRow`, `UiTableHeaderCell`, `UiTableBody`, `UiTableRow`, `UiTableCell`, `UiTableExpandedRow`, `UiTableHeaderTitle`, `UiTableHeaderDescription`, `UiTableToolbar`, `UiTableToolbarContent`, `UiTableToolbarSearch`, `UiTableBatchActions`, `UiTableColumnSettings`, `UiTableCsvExport`, `UiTableSkeleton`): map your data into them. Events are `onUiTable…` props, such as `onUiTableRowSelected`.
- **The React + Tailwind `DataTable`**: still data-driven with `headers` and `rows`, closest to the old `UiDataTable` props.

The table sorts by moving its rows in the DOM, and saves an edit by writing into the cell. Rows React renders belong to React, so sort and save through your state:

```tsx
<UiTable
  onUiTableCellEdit={(e) => {
    e.preventDefault(); // React writes the value
    const { row, column, value } = e.detail;
    setRows((all) => all.map((r) => (r.id === row.dataset.id ? { ...r, [column]: value } : r)));
  }}
>
  <UiTableHead>
    <UiTableHeaderRow>
      {headers.map((h) => (
        <UiTableHeaderCell
          key={h.key}
          column={h.key}
          editable={h.editable}
          sortDirection={sort.column === h.key ? sort.direction : 'none'}
          onUiTableHeaderCellSort={(e) => {
            e.preventDefault(); // React orders the rows
            setSort({ column: h.key, direction: e.detail.sortDirection });
          }}
        >
          {h.header}
        </UiTableHeaderCell>
      ))}
    </UiTableHeaderRow>
  </UiTableHead>
  <UiTableBody>
    {sortRows(rows, sort).map((row) => (
      <UiTableRow key={row.id} data-id={row.id}>
        {headers.map((h) => <UiTableCell key={h.key}>{row[h.key]}</UiTableCell>)}
      </UiTableRow>
    ))}
  </UiTableBody>
</UiTable>
```

The same goes for Vue, Angular and any framework that renders the rows. See [Data table](https://parntengza.github.io/kanok-ui-docs/en/data-table/) for every feature in HTML and React.

## Types

The `DataTable…` types of the web component (`DataTableHeader`, `DataTableRow`, `DataTableSortDetail` …) are gone from `@purpurabog/ui`; the new ones are `UiTable`, `UiTableRow`, `UiTableHeaderCell` …, `TableSortDirection` and the event details (`TableSortedDetail`, `TableRowSelectedDetail`, `TableCellEditDetail` …). React + Tailwind's own types (`DataTableSort` …) are unchanged.
