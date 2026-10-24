# Headless File uploader

`FileUploader` gives you the file uploader's behaviour with no classes: a `Trigger` that opens the file dialog, a `DropZone` that takes dropped files (not folders), the limits on type, size and count, the list of chosen files, focus that moves on as rows go, and the valid files submitted with the form.

You own the rows, the icons, the messages, the progress bar and every style. Nothing uploads by itself: you send the files and update their status. The styled version is [File uploader](https://parntengza.github.io/kanok-ui-docs/en/file-uploader/).

## Installation

The headless parts come with the package (there is no shadcn item; the React + Tailwind items are built on them):

```bash
npm install @purpurabog/ui
```
```tsx
import { FileUploader } from '@purpurabog/ui/headless';
```

## Use it


React (live React example):

```tsx
import { useState } from 'react';
import { FileUploader } from '@purpurabog/ui/headless';

const button = 'h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-on-color-disabled';

export default function Example() {
  const [change, setChange] = useState<FileUploader.FileChange>();
  return (
    <FileUploader.Root name="attachments" multiple onChange={setChange}>
      <div className="grid gap-4">
        <FileUploader.Group aria-label="Attachments">
          <FileUploader.DropZone>
            <FileUploader.Trigger className={button}>Add file</FileUploader.Trigger>
            <FileUploader.Label hidden>Attachments</FileUploader.Label>
            <FileUploader.Input hidden />
            <FileUploader.FormValue />
          </FileUploader.DropZone>
        </FileUploader.Group>
        <Files />
        {change && (
          <p className="text-xs text-ink-muted">
            onChange: {change.action}, currentFiles: {change.currentFiles.length}
          </p>
        )}
      </div>
    </FileUploader.Root>
  );
}

// The rows. Each example on this page is a whole module, so the ones with a list repeat this <Files />.
function Files() {
  const { files, remove } = FileUploader.useFileUploaderContext();
  return (
    <FileUploader.List className="grid w-80 gap-2">
      {files.map((f) => (
        <FileUploader.Item
          key={f.uuid}
          uuid={f.uuid}
          name={f.name}
          status={f.status}
          invalid={f.invalid}
          onDelete={remove}
          className="group bg-layer-1 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error"
        >
          <FileUploader.ItemRow className="flex min-h-12 items-center ps-4">
            <span className="flex-1 truncate">{f.name}</span>
            <FileUploader.Remove
              aria-label={`Remove file - ${f.name}`}
              className="hidden size-12 shrink-0 place-items-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus group-data-removable:grid"
            >
              ×
            </FileUploader.Remove>
          </FileUploader.ItemRow>
          {f.errorSubject && <p role="alert" className="border-t border-hairline px-4 py-2 text-xs text-error-text">{f.errorSubject}</p>}
        </FileUploader.Item>
      ))}
    </FileUploader.List>
  );
}
```

- Each file is a `FileItem`: `uuid`, `name`, the `File` itself, and its `status`, `invalid`, `errorSubject`, `errorBody`, `progress` and `retryable`.
- `Root` calls `onAdd` right after a pick (refused files included), before the list updates (as Carbon's `onAddFiles`), `onChange` with `addedFiles`, `removedFiles`, `currentFiles` and `action` (`add`, `remove` or `clear`), and `onDelete` when a file is removed.
- Without `multiple`, a new pick replaces the list.

## Anatomy

```tsx
<FileUploader.Root>
  <FileUploader.Group>
    <FileUploader.Title />
    <FileUploader.DropZone>
      <FileUploader.Trigger />
      <FileUploader.Label />
      <FileUploader.Input />
    </FileUploader.DropZone>
    <FileUploader.FormValue />
  </FileUploader.Group>
  <FileUploader.List>
    <FileUploader.Item>
      <FileUploader.ItemRow>
        <FileUploader.Retry />
        <FileUploader.Remove />
        <FileUploader.ItemStatus />
      </FileUploader.ItemRow>
    </FileUploader.Item>
  </FileUploader.List>
</FileUploader.Root>
```

## Button or drop zone

`DropZone` takes files dropped on it; `Trigger` is your button, or the whole zone. `openOnKeyDown` opens the dialog on the Enter / Space key press itself, as Carbon's drop container does.


React (live React example):

```tsx
import { FileUploader } from '@purpurabog/ui/headless';

// The names of the last pick or drop, from the context.
function Picked() {
  const { picked } = FileUploader.useFileUploaderContext();
  return <p className="text-xs text-ink-muted">picked: {picked.join(', ')}</p>;
}

export default function Example() {
  return (
    <FileUploader.Root multiple>
      <div className="grid gap-4">
        <FileUploader.DropZone className="w-80 border border-dashed border-border-strong-1 data-drag-over:border-interactive data-drag-over:bg-layer-selected-1">
          <FileUploader.Trigger openOnKeyDown className="w-full p-4 text-start text-sm text-link focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus">
            Drop the files or click to choose them
          </FileUploader.Trigger>
          <FileUploader.Label hidden>Floor plans</FileUploader.Label>
          <FileUploader.Input hidden />
        </FileUploader.DropZone>
        <Picked />
        <Files />
      </div>
    </FileUploader.Root>
  );
}

// Files: the rows from "Use it".
function Files() {
  const { files, remove } = FileUploader.useFileUploaderContext();
  return (
    <FileUploader.List className="grid w-80 gap-2">
      {files.map((f) => (
        <FileUploader.Item
          key={f.uuid}
          uuid={f.uuid}
          name={f.name}
          status={f.status}
          invalid={f.invalid}
          onDelete={remove}
          className="group bg-layer-1 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error"
        >
          <FileUploader.ItemRow className="flex min-h-12 items-center ps-4">
            <span className="flex-1 truncate">{f.name}</span>
            <FileUploader.Remove
              aria-label={`Remove file - ${f.name}`}
              className="hidden size-12 shrink-0 place-items-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus group-data-removable:grid"
            >
              ×
            </FileUploader.Remove>
          </FileUploader.ItemRow>
          {f.errorSubject && <p role="alert" className="border-t border-hairline px-4 py-2 text-xs text-error-text">{f.errorSubject}</p>}
        </FileUploader.Item>
      ))}
    </FileUploader.List>
  );
}
```

`Trigger`'s `render` prop renders your own button (a styled one, say) with the props it would put on its `<button>`. The context's `picked` holds the names of the last pick, if your button should show the file name or "3 files".

## Limit the files

`accept`, `maxFileSize`, `maxFiles` and `maxTotalSize` mark refused files invalid. A refused file stays in the list but isn't submitted. `describeRejection` gives its error text from the reason: `'invalid-type'`, `'too-large'`, `'too-many'` or `'total-too-large'`. Without it, a refused file has no error text.


React (live React example):

```tsx
import { FileUploader } from '@purpurabog/ui/headless';

const button = 'h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-on-color-disabled';

const describeRejection = (rejection: FileUploader.Rejection) => ({
  errorSubject: rejection === 'invalid-type' ? 'Only JPG or PNG photos' : `File refused (${rejection})`,
});

export default function Example() {
  return (
    <FileUploader.Root accept=".jpg,.png" maxFileSize={2_000_000} maxFiles={2} multiple describeRejection={describeRejection}>
      <div className="grid gap-4">
        <FileUploader.Group aria-label="Photos">
          <FileUploader.DropZone>
            <FileUploader.Trigger className={button}>Add photos</FileUploader.Trigger>
            <FileUploader.Label hidden>Photos</FileUploader.Label>
            <FileUploader.Input hidden />
          </FileUploader.DropZone>
        </FileUploader.Group>
        <p className="text-xs text-ink-muted">JPG or PNG, up to 2 MB each, at most 2 photos.</p>
        <Files />
      </div>
    </FileUploader.Root>
  );
}

// Files: the rows from "Use it".
function Files() {
  const { files, remove } = FileUploader.useFileUploaderContext();
  return (
    <FileUploader.List className="grid w-80 gap-2">
      {files.map((f) => (
        <FileUploader.Item
          key={f.uuid}
          uuid={f.uuid}
          name={f.name}
          status={f.status}
          invalid={f.invalid}
          onDelete={remove}
          className="group bg-layer-1 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error"
        >
          <FileUploader.ItemRow className="flex min-h-12 items-center ps-4">
            <span className="flex-1 truncate">{f.name}</span>
            <FileUploader.Remove
              aria-label={`Remove file - ${f.name}`}
              className="hidden size-12 shrink-0 place-items-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus group-data-removable:grid"
            >
              ×
            </FileUploader.Remove>
          </FileUploader.ItemRow>
          {f.errorSubject && <p role="alert" className="border-t border-hairline px-4 py-2 text-xs text-error-text">{f.errorSubject}</p>}
        </FileUploader.Item>
      ))}
    </FileUploader.List>
  );
}
```

`accept` also filters the file dialog, and a dropped file is checked against it too.

## Upload the files

Hold the list yourself with `files` and replace it as each upload moves on. Pass `progress` and `retryable` on to each `Item`. The example sends nothing: a timer stands in for the uploads, and a file over 1 MB fails once so you can retry it.


React (live React example):

```tsx
import { useEffect, useRef, useState } from 'react';
import { FileUploader } from '@purpurabog/ui/headless';

type FileItem = FileUploader.FileItem;

const button = 'h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-on-color-disabled';
const icon = 'size-12 shrink-0 place-items-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

// No server here: a pretend upload moves 10% a tick, and a file over 1 MB fails at 60% the first time.
function tick(f: FileItem, retried: ReadonlySet<string>): FileItem {
  if (f.status !== 'uploading') return f;
  const progress = Math.min(100, (f.progress ?? 0) + 10);
  if (progress === 60 && f.file.size > 1_000_000 && !retried.has(f.uuid)) {
    return { ...f, status: 'edit', invalid: true, retryable: true, errorSubject: 'Upload failed', errorBody: 'Check your connection and try again.' };
  }
  return progress === 100 ? { ...f, status: 'complete', progress } : { ...f, progress };
}

function UploadList() {
  const { files, remove, retry } = FileUploader.useFileUploaderContext();
  return (
    <FileUploader.List className="grid w-80 gap-2">
      {files.map((f) => (
        <FileUploader.Item
          key={f.uuid}
          uuid={f.uuid}
          name={f.name}
          status={f.status}
          invalid={f.invalid}
          retryable={f.retryable}
          progress={f.progress}
          onDelete={remove}
          onRetry={retry}
          className="group bg-layer-1 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error"
        >
          <FileUploader.ItemRow className="flex min-h-12 items-center ps-4">
            <span className="flex-1 truncate">{f.name}</span>
            {f.status === 'complete' && <span aria-hidden="true" className="grid size-12 place-items-center text-success">✓</span>}
            <FileUploader.Retry aria-label={`Retry upload - ${f.name}`} className={`grid ${icon}`}>↻</FileUploader.Retry>
            <FileUploader.Remove aria-label={`Remove file - ${f.name}`} className={`hidden group-data-removable:grid ${icon}`}>×</FileUploader.Remove>
            <FileUploader.ItemStatus className="sr-only">Uploaded: {f.name}</FileUploader.ItemStatus>
          </FileUploader.ItemRow>
          {f.status === 'uploading' && (
            <div role="progressbar" aria-label={`Uploading ${f.name}`} aria-valuenow={f.progress} className="h-0.5 bg-border-subtle-1">
              <div className="h-full bg-interactive" style={{ width: `${f.progress ?? 0}%` }} />
            </div>
          )}
          {f.invalid && (
            <div role="alert" className="border-t border-hairline px-4 py-2 text-xs">
              <p className="text-error-text">{f.errorSubject}</p>
              <p className="text-ink-muted">{f.errorBody}</p>
            </div>
          )}
        </FileUploader.Item>
      ))}
    </FileUploader.List>
  );
}

export default function Example() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [deleted, setDeleted] = useState('');
  const retried = useRef(new Set<string>());
  const update = (uuid: string, changes: Partial<FileItem>) =>
    setFiles((list) => list.map((f) => (f.uuid === uuid ? { ...f, ...changes } : f)));
  const upload = (item: FileItem) =>
    update(item.uuid, { status: 'uploading', progress: 0, invalid: false, retryable: false, errorSubject: undefined, errorBody: undefined });

  // The pretend uploads move on while any file is uploading; a removed file simply leaves the list.
  const uploading = files.some((f) => f.status === 'uploading');
  useEffect(() => {
    if (!uploading) return;
    const timer = setInterval(() => setFiles((list) => list.map((f) => tick(f, retried.current))), 300);
    return () => clearInterval(timer);
  }, [uploading]);

  return (
    <FileUploader.Root
      multiple
      files={files}
      onChange={(change) => {
        setFiles(change.currentFiles);
        if (change.action === 'add') change.addedFiles.filter((f) => !f.invalid).forEach(upload);
      }}
      onRetry={(item) => {
        retried.current.add(item.uuid);
        upload(item);
      }}
      onDelete={({ deletedFile }) => setDeleted(`${deletedFile.name} (${deletedFile.status})`)}
    >
      <div className="grid gap-4">
        <FileUploader.Group aria-label="Attachments">
          <FileUploader.DropZone>
            <FileUploader.Trigger className={button}>Add file</FileUploader.Trigger>
            <FileUploader.Label hidden>Attachments</FileUploader.Label>
            <FileUploader.Input hidden />
          </FileUploader.DropZone>
        </FileUploader.Group>
        <UploadList />
        {deleted && <p className="text-xs text-ink-muted">onDelete: {deleted}</p>}
      </div>
    </FileUploader.Root>
  );
}
```

- `status` on `Root` sets the state new files start in (`edit` by default).
- An `uploading` item with a `progress` can be removed: that cancels the upload, and `onDelete` tells you to stop sending it.
- `onRetry` hears the retry of a failed upload (an `invalid`, `retryable` file). Refused files aren't retryable.

## File states

The state shows as `data-status`, `data-invalid` and `data-removable` on the `Item`. An `Item` also works on its own, for files already on the server: it calls `onDelete` and `onRetry` with its `uuid` (its `name` when you leave `uuid` out), and removing it is up to you.


React (live React example):

```tsx
import { useEffect, useState } from 'react';
import { FileUploader } from '@purpurabog/ui/headless';

const icon = 'size-12 shrink-0 place-items-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';
const name = 'inspection-report.pdf';

export default function Example() {
  // A file already on the server: failed → uploading (no progress, so no ×) → complete.
  const [stage, setStage] = useState<'failed' | 'uploading' | 'complete' | 'removed'>('failed');
  useEffect(() => {
    if (stage !== 'uploading') return;
    const timer = setTimeout(() => setStage('complete'), 1500);
    return () => clearTimeout(timer);
  }, [stage]);

  if (stage === 'removed') {
    return (
      <button type="button" onClick={() => setStage('failed')} className="text-sm text-link hover:underline focus-visible:outline-2 focus-visible:outline-focus">
        Removed. Put it back
      </button>
    );
  }
  const failed = stage === 'failed';
  return (
    <div className="grid w-80 gap-2">
      <FileUploader.Item
        name={name}
        status={failed ? 'edit' : stage}
        invalid={failed}
        retryable
        onDelete={() => setStage('removed')}
        onRetry={() => setStage('uploading')}
        className="group bg-layer-1 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error"
      >
        <FileUploader.ItemRow className="flex min-h-12 items-center ps-4">
          <span className="flex-1 truncate">{name}</span>
          {failed && <span role="alert" className="pe-2 text-xs text-error-text">Upload failed</span>}
          {stage === 'complete' && <span aria-hidden="true" className="grid size-12 place-items-center text-success">✓</span>}
          <FileUploader.Retry aria-label={`Retry upload - ${name}`} className={`grid ${icon}`}>↻</FileUploader.Retry>
          <FileUploader.Remove aria-label={`Remove file - ${name}`} className={`hidden group-data-removable:grid ${icon}`}>×</FileUploader.Remove>
          <FileUploader.ItemStatus className="sr-only">Uploaded: {name}</FileUploader.ItemStatus>
        </FileUploader.ItemRow>
      </FileUploader.Item>
      <p className="text-xs text-ink-muted">stage: {stage}</p>
      {stage === 'complete' && (
        <button type="button" onClick={() => setStage('failed')} className="w-fit text-sm text-link hover:underline focus-visible:outline-2 focus-visible:outline-focus">
          Start again
        </button>
      )}
    </div>
  );
}
```

- `edit` can be removed; `uploading` can be removed only with a `progress`; `complete` can't. `Remove` renders nothing on a row that can't be removed, and is disabled with the item.
- `Retry` renders only on an `invalid`, `retryable` row.
- `ItemStatus` shows its children once an upload goes from `uploading` to `complete`.

## In a form


React (live React example):

```tsx
import { useState } from 'react';
import { FileUploader } from '@purpurabog/ui/headless';

const button = 'h-10 w-fit bg-primary px-4 text-sm text-on-primary hover:bg-blue-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-on-color-disabled';

const onlyPdf = () => ({ errorSubject: 'Only PDF files' });

export default function Example() {
  const [missing, setMissing] = useState(false);
  const [sent, setSent] = useState<string[]>();
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(new FormData(e.currentTarget).getAll('contract').map((v) => (typeof v === 'string' ? v : v.name)));
      }}
      onReset={() => {
        setSent(undefined);
        setMissing(false);
      }}
    >
      <FileUploader.Root name="contract" accept=".pdf" required requiredText="Attach the signed contract" describeRejection={onlyPdf} onChange={() => setMissing(false)}>
        <FileUploader.Group aria-label="Signed contract" className="grid gap-2">
          <FileUploader.DropZone>
            <FileUploader.Trigger className={button}>Add file</FileUploader.Trigger>
            <FileUploader.Label hidden>Signed contract</FileUploader.Label>
            {/* The browser shows no bubble: show your own message when the form is blocked. */}
            <FileUploader.Input hidden onInvalid={() => setMissing(true)} />
          </FileUploader.DropZone>
          {missing && <p className="text-xs text-error-text">Attach the signed contract</p>}
          <FileUploader.FormValue />
        </FileUploader.Group>
        <Files />
      </FileUploader.Root>
      <div className="flex gap-px">
        <button type="submit" className={button}>Send</button>
        <button type="reset" className="h-10 bg-secondary px-4 text-sm text-on-primary hover:bg-secondary-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus">
          Reset
        </button>
      </div>
      {sent && <p className="text-xs text-ink-muted">Sent: {JSON.stringify(sent)}</p>}
    </form>
  );
}

// Files: the rows from "Use it".
function Files() {
  const { files, remove } = FileUploader.useFileUploaderContext();
  return (
    <FileUploader.List className="grid w-80 gap-2">
      {files.map((f) => (
        <FileUploader.Item
          key={f.uuid}
          uuid={f.uuid}
          name={f.name}
          status={f.status}
          invalid={f.invalid}
          onDelete={remove}
          className="group bg-layer-1 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error"
        >
          <FileUploader.ItemRow className="flex min-h-12 items-center ps-4">
            <span className="flex-1 truncate">{f.name}</span>
            <FileUploader.Remove
              aria-label={`Remove file - ${f.name}`}
              className="hidden size-12 shrink-0 place-items-center hover:bg-layer-hover-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus group-data-removable:grid"
            >
              ×
            </FileUploader.Remove>
          </FileUploader.ItemRow>
          {f.errorSubject && <p role="alert" className="border-t border-hairline px-4 py-2 text-xs text-error-text">{f.errorSubject}</p>}
        </FileUploader.Item>
      ))}
    </FileUploader.List>
  );
}
```

- With a `name`, `FormValue` submits every valid file under it, like `<input type="file" multiple>`. Refused files are left out.
- `required` blocks the submit until there is a valid file, with `requiredText` as the message (without one, the English translation's: "Add at least one file."). The browser's bubble doesn't show; focus goes to `Trigger`. The example shows its own message from `Input`'s `onInvalid`.
- A form reset empties an uncontrolled list. `disabled` turns off `Trigger`, `DropZone`, `Input`, `FormValue` and every `Item` inside the `Root`.

## Style it


React (live React example):

```tsx
import { useState } from 'react';
import { FileUploader } from '@purpurabog/ui/headless';

function StyledFiles() {
  const { files, remove } = FileUploader.useFileUploaderContext();
  return (
    <FileUploader.List className="grid w-80 gap-2">
      {files.map(({ uuid, name, status, invalid }) => (
        <FileUploader.Item key={uuid} uuid={uuid} name={name} status={status} invalid={invalid} onDelete={remove}
          className="group flex min-h-12 items-center bg-layer-1 ps-4 text-sm text-ink data-invalid:outline-2 data-invalid:-outline-offset-2 data-invalid:outline-error">
          <FileUploader.ItemRow className="flex flex-1 items-center">
            <span className="flex-1 truncate">{name}</span>
            <FileUploader.Remove className="hidden size-12 place-items-center hover:bg-layer-hover-1 group-data-removable:grid" aria-label={`Remove file - ${name}`}>×</FileUploader.Remove>
          </FileUploader.ItemRow>
        </FileUploader.Item>
      ))}
    </FileUploader.List>
  );
}

export default function Example() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="grid gap-4">
      <FileUploader.Root multiple accept=".pdf" disabled={disabled}>
        <FileUploader.DropZone className="w-80 border border-dashed border-border-strong-1 p-4 data-drag-over:border-interactive data-disabled:opacity-50">
          <FileUploader.Trigger className="text-sm text-link focus-visible:outline-2 focus-visible:outline-focus disabled:cursor-not-allowed">
            Drop PDF files here or click
          </FileUploader.Trigger>
          <FileUploader.Label hidden>Documents</FileUploader.Label>
          <FileUploader.Input hidden />
        </FileUploader.DropZone>
        <StyledFiles />
      </FileUploader.Root>
      <label className="flex items-center gap-2 text-sm text-ink">
        <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} /> disabled
      </label>
    </div>
  );
}
```
```css
.drop-zone { border: 1px dashed #8d8d8d; }
.drop-zone[data-drag-over] { border-color: #0f62fe; }
.drop-zone[data-disabled] { opacity: 0.5; }
[data-file-item][data-invalid] { outline: 2px solid #da1e28; }
[data-file-item]:not([data-removable]) [data-file-remove] { display: none; }
```

## Parts

### FileUploader.Root

Renders no element: it holds the list, the limits and the focus rules.

| Prop | Type | Default | |
|---|---|---|---|
| `accept` | `string` | `''` | Extensions and MIME types, comma-separated |
| `multiple` | `boolean` | `false` | Without it, a pick replaces the list |
| `maxFileSize` | `number` | `0` | Bytes; larger files are added as invalid (0 = no limit) |
| `maxFiles` | `number` | `0` | Most valid files; the ones past it are invalid (0 = no limit) |
| `maxTotalSize` | `number` | `0` | Bytes the valid files may add up to (0 = no limit) |
| `describeRejection` | `(rejection: Rejection) => { errorSubject?: string; errorBody?: string }` | | The error text of a refused file |
| `name` | `string` | | Submitted name of `FormValue` |
| `disabled` | `boolean` | `false` | |
| `status` | `'edit' \| 'uploading' \| 'complete'` | `'edit'` | The state new files start in |
| `required` | `boolean` | `false` | At least one valid file before the form submits |
| `requiredText` | `string` | `''` | The validity message while `required` and no valid file; empty: the English translation's |
| `files` | `FileItem[]` | | The list, controlled |
| `defaultFiles` | `FileItem[]` | `[]` | |
| `onAdd` | `(addedFiles: FileItem[]) => void` | | Right after a pick or drop |
| `onChange` | `(change: FileChange) => void` | | Every change of the list |
| `onDelete` | `({ deletedFile, remainingFiles }) => void` | | A file was removed |
| `onRetry` | `(retriedFile: FileItem) => void` | | A failed upload was retried |

### FileUploader.Group

Renders a `<div role="group">`; name it with `aria-label`, or `aria-labelledby` with the context's `titleId`.

| Attribute | When |
|---|---|
| `data-disabled` | `disabled` |

### FileUploader.Title

Renders a `<p>` whose id is the context's `titleId`.

### FileUploader.DropZone

Renders a `<div>` that takes dropped files. Folders are skipped.

| Attribute | When |
|---|---|
| `data-drag-over` | Files are dragged over it |
| `data-disabled` | `disabled` |

### FileUploader.Trigger

Renders a `<button type="button">` that opens the file dialog; disabled while `disabled`. Focus comes back to it when the list empties under it.

| Prop | Type | Default | |
|---|---|---|---|
| `openOnKeyDown` | `boolean` | `false` | Enter / Space open the dialog on key down |
| `render` | `(props) => ReactElement` | | Renders your own button with these props |

| Attribute | When |
|---|---|
| `data-drag-over` | Files are dragged over the drop zone |
| `data-disabled` | `disabled` |

### FileUploader.Label, FileUploader.Input

`Label` renders a `<label>` for `Input`; hide it visually. `Input` renders the `<input type="file">` that `Trigger` clicks, with `tabIndex={-1}`; its `multiple`, `accept` and `disabled` come from `Root`. Hide it.

### FileUploader.FormValue

With `Root`'s `name`, renders a hidden `<input type="file" multiple>` that holds every valid file. Renders nothing without a `name`.

### FileUploader.List

Renders a `<div>` around the items; focus moves within it as rows go.

### FileUploader.Item

Renders a `<div>` for one file.

| Prop | Type | Default | |
|---|---|---|---|
| `name` | `string` | | The file's name (required) |
| `uuid` | `string` | `name` | Identifies it in `onDelete` / `onRetry` |
| `status` | `'edit' \| 'uploading' \| 'complete'` | `'edit'` | |
| `invalid` | `boolean` | `false` | |
| `retryable` | `boolean` | `false` | On an invalid row: `Retry` shows |
| `disabled` | `boolean` | `false` | Also on while its `Root` is disabled |
| `progress` | `number` | | 0–100 while uploading; `Remove` then cancels |
| `onDelete` | `(uuid: string) => void` | | |
| `onRetry` | `(uuid: string) => void` | | |

| Attribute | When |
|---|---|
| `data-file-item` | Always |
| `data-status` | Always: `edit`, `uploading` or `complete` |
| `data-invalid` | `invalid` |
| `data-removable` | The file can be removed: `edit`, or `uploading` with a `progress`, and not disabled |

### FileUploader.ItemRow

Renders a `<div>` with `aria-disabled` while the item is disabled. Focus lands on it when its last button goes with focus.

### FileUploader.Remove

Renders a `<button type="button">` that removes the file (`onDelete`), or cancels its upload; disabled with the item. Renders nothing on a `complete` row or one `uploading` without a `progress`.

| Attribute | When |
|---|---|
| `data-file-remove` | Always |

### FileUploader.Retry

Renders a `<button type="button">` that retries a failed upload (`onRetry`), only on an `invalid`, `retryable` row; disabled with the item.

| Attribute | When |
|---|---|
| `data-file-retry` | Always |

### FileUploader.ItemStatus

Renders a `<span role="status">`: its children show once the upload finished.

`FileUploader.useFileUploaderContext()` inside `Root` gives `files`, `picked`, `dragOver`, `titleId`, `remove`, `retry`, `browse` and more. `FileUploader.useItemContext()` inside an `Item` gives its `status`, `percent` (the progress while uploading) and `finished`.

## Keyboard and accessibility

| Key | Does |
|---|---|
| Enter or Space on `Trigger` | Opens the file dialog |
| Enter or Space on `Remove` | Removes the file, or cancels its upload; focus moves to the next row's `Remove`, else the previous one's, else `Trigger` |
| Enter or Space on `Retry` | Calls `onRetry`; when the button goes away, focus stays on the row's `Remove`, else the row |

The parts handle:

- `role="group"` and `aria-disabled` on `Group`; the file input labelled by `Label` and out of the Tab order.
- Focus after a row or a retry button goes, so it never falls to the page.
- `required`: the form's validity, with no browser bubble, and focus on `Trigger` when the submit is blocked.
- A polite live region in `ItemStatus`.

You add:

- A name for `Group` and the text of `Label`.
- An `aria-label` on each `Remove` and `Retry` with the file's name: "Remove file - contract.pdf", "Retry upload - contract.pdf".
- The error text (an alert, as `role="alert"`), the `ItemStatus` text, and a progress bar if you show one.
