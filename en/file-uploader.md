# File uploader

A file uploader lets people pick files from their device, with a button or by dropping them on a drop zone. The chosen files are listed under it, each with its state: ready, uploading, uploaded, or an error.


HTML:

```html
<ui-file-uploader label-title="Attachments" label-description="PDF or JPG, up to 5 MB each" accept=".pdf,.jpg" max-file-size="5000000" multiple></ui-file-uploader>
```

React:

```tsx
<UiFileUploader labelTitle="Attachments" labelDescription="PDF or JPG, up to 5 MB each" accept=".pdf,.jpg" maxFileSize={5_000_000} multiple />
```

React + Tailwind:

```tsx
<FileUploader labelTitle="Attachments" labelDescription="PDF or JPG, up to 5 MB each" accept=".pdf,.jpg" maxFileSize={5_000_000} multiple />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/file-uploader
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-file-uploader
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/file-uploader.json
#    to its target:
#    components/ui/primitives/file-uploader/file-uploader-item.ts
#    components/ui/primitives/file-uploader/file-uploader-shared.ts
#    components/ui/primitives/file-uploader/file-uploader-skeleton.ts
#    components/ui/primitives/file-uploader/file-uploader.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    button, core-file-uploader, progress-bar, shared-element, shared-field, shared-form-control, shared-localize, shared-skeleton, tokens

# React + Tailwind
# 1. Install the dependencies
npm install @purpurabog/ui@^2.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@2.3.0/registry/tw-file-uploader.json
#    to its target:
#    components/ui/react-tw/file-uploader.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-file-uploader, core-i18n, tw-button, tw-field, tw-i18n, tw-progress-bar, tw-theme, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/file-uploader';</script>

<ui-file-uploader label-title="Attachments" name="attachments" multiple></ui-file-uploader>
```

React:

```tsx
import { UiFileUploader } from '@purpurabog/ui/react';

<UiFileUploader labelTitle="Attachments" name="attachments" multiple onUiChange={(e) => setFiles(e.detail.currentFiles)} />
```

React + Tailwind:

```tsx
import { FileUploader } from '@/components/ui/react-tw/file-uploader';

<FileUploader labelTitle="Attachments" name="attachments" multiple onChange={(change) => setFiles(change.currentFiles)} />
```

- Each file in the list is a `FileItem`: `uuid`, `name`, the `File` itself, and its `status`, `invalid`, `errorSubject`, `errorBody`, `progress` and `retryable`.
- The element fires `ui-add` right after a pick (refused files included), before `files` updates (as Carbon's `onAddFiles`), `ui-change` with `addedFiles`, `removedFiles`, `currentFiles` and `action` (`add`, `remove` or `clear`), and `ui-delete` when the user removes a file. In React these are `onUiAdd`, `onUiChange` and `onUiDelete`; in React + Tailwind, `onAdd`, `onChange` and `onDelete`.
- Without `multiple`, a new pick replaces the list.

## Button or drop zone

The default is Carbon's "Add file" button. `drop` shows the dashed drop zone instead (Carbon's `FileUploaderDropContainer`): people can drop files on it, or click it to open the file dialog. Folders dropped on it are skipped.

- `button-label` changes the button text, and `button-kind` its kind (`primary` by default). After a pick the button shows the file name, or "3 files"; `keep-label` keeps your text.
- `drop-label` changes the drop zone text.
- `size` (`sm`, `md`, `lg`) sizes the button and the rows.


HTML:

```html
<ui-file-uploader label-title="Floor plans" label-description="Drop the files or click to choose them" drop multiple></ui-file-uploader>
<ui-file-uploader label-title="Signed contract" button-label="Choose PDF" button-kind="tertiary" keep-label size="sm"></ui-file-uploader>
```

React:

```tsx
<UiFileUploader labelTitle="Floor plans" labelDescription="Drop the files or click to choose them" drop multiple />
<UiFileUploader labelTitle="Signed contract" buttonLabel="Choose PDF" buttonKind="tertiary" keepLabel size="sm" />
```

React + Tailwind:

```tsx
<FileUploader labelTitle="Floor plans" labelDescription="Drop the files or click to choose them" drop multiple />
<FileUploader labelTitle="Signed contract" buttonLabel="Choose PDF" buttonKind="tertiary" keepLabel size="sm" />
```

## Sizes

`size` sets the height of the button and of every row: `sm`, `md` (the default) or `lg`. A row on its own takes `size` too.


HTML:

```html
<div style="display: grid; gap: 8px; max-width: 320px">
  <ui-file-uploader-item size="sm" name="invoice-0142-sm.pdf"></ui-file-uploader-item>
  <ui-file-uploader-item size="md" name="invoice-0142-md.pdf"></ui-file-uploader-item>
  <ui-file-uploader-item size="lg" name="invoice-0142-lg.pdf"></ui-file-uploader-item>
</div>
```

React:

```tsx
<UiFileUploaderItem size="sm" name="invoice-0142-sm.pdf" />
<UiFileUploaderItem size="md" name="invoice-0142-md.pdf" />
<UiFileUploaderItem size="lg" name="invoice-0142-lg.pdf" />
```

React + Tailwind:

```tsx
<FileUploaderItem size="sm" name="invoice-0142-sm.pdf" />
<FileUploaderItem size="md" name="invoice-0142-md.pdf" />
<FileUploaderItem size="lg" name="invoice-0142-lg.pdf" />
```

## Limit the files

- `accept` lists the file types: extensions and MIME types, comma-separated (`.pdf,.jpg,image/png`).
- `max-file-size` is the largest size of one file, in bytes (5 MB = `5000000`).
- `max-files` is the most files in the list, and `max-total-size` the most bytes they may add up to. These two go beyond Carbon.

A refused file still shows in the list, marked as an error with the reason, so people see what went wrong. It isn't submitted with the form, and the user removes it with ×. Set the error titles with `invalid-type-text`, `too-large-text`, `too-many-text` and `total-too-large-text`, and the line under them with `invalid-body-text`. The built-in texts are translated ("File type not supported", "File is too large", "Too many files"…).


HTML:

```html
<ui-file-uploader label-title="ID documents" label-description="JPG or PNG, 2 MB each, 2 files at most" accept=".jpg,.png" max-file-size="2000000" max-files="2" multiple drop show-size invalid-type-text="Only JPG or PNG photos"></ui-file-uploader>
<ui-file-uploader label-title="Site photos" label-description="Up to 1 MB in all" max-total-size="1000000" multiple show-size></ui-file-uploader>
```

React:

```tsx
<UiFileUploader labelTitle="ID documents" labelDescription="JPG or PNG, 2 MB each, 2 files at most" accept=".jpg,.png" maxFileSize={2_000_000} maxFiles={2} multiple drop showSize invalidTypeText="Only JPG or PNG photos" />
<UiFileUploader labelTitle="Site photos" labelDescription="Up to 1 MB in all" maxTotalSize={1_000_000} multiple showSize />
```

React + Tailwind:

```tsx
<FileUploader labelTitle="ID documents" labelDescription="JPG or PNG, 2 MB each, 2 files at most" accept=".jpg,.png" maxFileSize={2_000_000} maxFiles={2} multiple drop showSize invalidTypeText="Only JPG or PNG photos" />
<FileUploader labelTitle="Site photos" labelDescription="Up to 1 MB in all" maxTotalSize={1_000_000} multiple showSize />
```

`show-size` shows each file's size in its row ("1.2 MB", in the page language). `accept` also filters the file dialog, but a dropped file is checked too.

## File states

Each row shows one of these. A row also works on its own, for files that are already on the server; it fires `ui-delete` and `ui-retry`, and removing it from the page is up to you.


HTML:

```html
<div style="max-width: 320px">
  <ui-file-uploader-item name="lease-agreement.pdf" file-size="482000"></ui-file-uploader-item>
  <ui-file-uploader-item name="floor-plan.jpg" status="uploading"></ui-file-uploader-item>
  <ui-file-uploader-item name="site-photos.zip" status="uploading" progress="45"></ui-file-uploader-item>
  <ui-file-uploader-item name="tenant-id.jpg" status="complete"></ui-file-uploader-item>
  <ui-file-uploader-item name="setup.exe" invalid error-subject="File type not supported" error-body="Remove the file and choose another."></ui-file-uploader-item>
  <ui-file-uploader-item name="inspection-report.pdf" invalid retryable></ui-file-uploader-item>
</div>
```

React:

```tsx
<UiFileUploaderItem name="lease-agreement.pdf" fileSize={482000} />
<UiFileUploaderItem name="floor-plan.jpg" status="uploading" />
<UiFileUploaderItem name="site-photos.zip" status="uploading" progress={45} />
<UiFileUploaderItem name="tenant-id.jpg" status="complete" />
<UiFileUploaderItem name="setup.exe" invalid errorSubject="File type not supported" errorBody="Remove the file and choose another." />
<UiFileUploaderItem name="inspection-report.pdf" invalid retryable onUiRetry={() => uploadAgain()} />
```

React + Tailwind:

```tsx
import { FileUploaderItem } from '@/components/ui/react-tw/file-uploader';

<FileUploaderItem name="lease-agreement.pdf" fileSize={482000} />
<FileUploaderItem name="floor-plan.jpg" status="uploading" />
<FileUploaderItem name="site-photos.zip" status="uploading" progress={45} />
<FileUploaderItem name="tenant-id.jpg" status="complete" />
<FileUploaderItem name="setup.exe" invalid errorSubject="File type not supported" errorBody="Remove the file and choose another." />
<FileUploaderItem name="inspection-report.pdf" invalid retryable onRetry={() => uploadAgain()} />
```

- `edit`: ready, with × to remove it.
- `uploading`: a spinner, or with `progress` the percentage, a bar and × to cancel.
- `complete`: a check mark; it can't be removed.
- `invalid`: a red outline with `error-subject` and `error-body`. Add `retryable` for an upload that failed: a retry button appears, and the title is "Upload failed" unless you set one. Refused files aren't retryable.

## Files already on the server

When a record already has files, put them in the uploader as `<ui-file-uploader-item>` children (`FileUploaderItem` in React + Tailwind). They show after the picked files. Their × fires `ui-delete` on the row itself: remove the row and the file on the server. The event passes through the uploader as it is, so listen on the row, not for the uploader's own `ui-delete`.


HTML:

```html
<ui-file-uploader id="file-uploader-saved" label-title="Contract attachments" label-description="Two files are on record. Add more, or remove one." multiple>
  <ui-file-uploader-item name="contract-2026-014.pdf" file-size="482000"></ui-file-uploader-item>
  <ui-file-uploader-item name="company-certificate.pdf" file-size="1250000"></ui-file-uploader-item>
</ui-file-uploader>

<script type="module">
  for (const row of document.querySelectorAll('#file-uploader-saved > ui-file-uploader-item')) {
    row.addEventListener('ui-delete', () => row.remove()); // and delete the file on the server
  }
</script>
```

React:

```tsx
<UiFileUploader labelTitle="Contract attachments" multiple>
  {saved.map((file) => (
    <UiFileUploaderItem key={file.id} uuid={file.id} name={file.name} fileSize={file.size}
      onUiDelete={() => removeSaved(file.id)} />
  ))}
</UiFileUploader>
```

React + Tailwind:

```tsx
<FileUploader labelTitle="Contract attachments" multiple>
  {saved.map((file) => (
    <FileUploaderItem key={file.id} uuid={file.id} name={file.name} fileSize={file.size}
      onDelete={() => removeSaved(file.id)} />
  ))}
</FileUploader>
```

`saved` and `removeSaved` stand for your own data and code.

## Disabled

`disabled` turns off the button or drop zone and every listed row, for example when a request is closed. A row on its own takes `disabled` too.


HTML:

```html
<ui-file-uploader label-title="Supporting documents" label-description="This request is closed." disabled></ui-file-uploader>
<div style="max-width: 320px">
  <ui-file-uploader-item name="quotation.pdf" disabled></ui-file-uploader-item>
</div>
```

React:

```tsx
<UiFileUploader labelTitle="Supporting documents" labelDescription="This request is closed." disabled />
<UiFileUploaderItem name="quotation.pdf" disabled />
```

React + Tailwind:

```tsx
<FileUploader labelTitle="Supporting documents" labelDescription="This request is closed." disabled />
<FileUploaderItem name="quotation.pdf" disabled />
```

## In a form

- With a `name`, every valid file is submitted under that name, like `<input type="file" multiple>`. Refused files are left out.
- `required` blocks the submit until there is at least one valid file; change the message with `required-text`. More in [Forms and validation](https://parntengza.github.io/kanok-ui-docs/en/forms/).
- A form reset empties the list. `disabled`, or a disabled fieldset, turns everything off.


HTML:

```html
<form id="file-uploader-form" method="dialog" style="display: grid; gap: 16px">
  <ui-file-uploader label-title="Signed contract" name="contract" accept=".pdf" required required-text="Attach the signed contract"></ui-file-uploader>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <ui-button type="submit">Send for approval</ui-button>
    <ui-button type="reset" kind="secondary">Reset</ui-button>
  </div>
</form>
<p>Submitted: <output id="file-uploader-form-out">nothing yet</output></p>

<script type="module">
  const form = document.getElementById('file-uploader-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(([key, value]) => `${key}=${value instanceof File ? value.name : value}`);
    document.getElementById('file-uploader-form-out').textContent = entries.join(', ');
  });
</script>
```

React:

```tsx
<form onSubmit={(e) => { e.preventDefault(); send(new FormData(e.currentTarget)); }}>
  <UiFileUploader labelTitle="Signed contract" name="contract" accept=".pdf" required requiredText="Attach the signed contract" />
  <UiButton type="submit">Send for approval</UiButton>
  <UiButton type="reset" kind="secondary">Reset</UiButton>
</form>
```

React + Tailwind:

```tsx
<form onSubmit={(e) => { e.preventDefault(); send(new FormData(e.currentTarget)); }}>
  <FileUploader labelTitle="Signed contract" name="contract" accept=".pdf" required requiredText="Attach the signed contract" />
  <Button type="submit">Send for approval</Button>
  <Button type="reset" kind="secondary">Reset</Button>
</form>
```

`send` stands for your own code.


## Read the chosen files

`ui-change` tells you what changed (`action`) and gives the whole list (`currentFiles`), so it is the one event to keep your state in step with. Pick a few files below, then remove one.


HTML:

```html
<ui-file-uploader id="file-uploader-events" label-title="Quotations" label-description="Attach every quotation you received" multiple></ui-file-uploader>
<p>Last change: <output id="file-uploader-events-out">none yet</output></p>

<script type="module">
  const quotes = document.getElementById('file-uploader-events');
  quotes.addEventListener('ui-change', (event) => {
    const { action, currentFiles } = event.detail;
    const names = currentFiles.map((f) => f.name).join(', ') || 'no files';
    document.getElementById('file-uploader-events-out').textContent = `${action}: ${names}`;
  });
</script>
```

React:

```tsx
<UiFileUploader labelTitle="Quotations" multiple
  onUiChange={(e) => setQuotes(e.detail.currentFiles)} />
<p>{quotes.map((f) => f.name).join(', ') || 'no files'}</p>
```

React + Tailwind:

```tsx
<FileUploader labelTitle="Quotations" multiple
  onChange={(change) => setQuotes(change.currentFiles)} />
<p>{quotes.map((f) => f.name).join(', ') || 'no files'}</p>
```

## Upload the files

The uploader doesn't upload by itself: it lists the files and you send them. Update the list as each upload moves on: replace `files` with a new array, and each row follows its item's `status`.

- `uploading` shows a spinner. With a `progress` (0–100) it shows the percentage and a small bar instead, and × cancels the upload: the file is removed and `ui-delete` tells you to stop sending it.
- `complete` shows a check mark, and screen readers hear "Uploaded: contract.pdf".
- `status` on the uploader sets the state new files start in (`edit` by default, with ×).

Pick some files below: each one uploads at once. The upload here is a stand-in that moves on a timer, and a file with "fail" in its name fails halfway, so you can retry it.


HTML:

```html
<ui-file-uploader id="file-uploader-upload" label-title="Supporting documents" label-description="Uploads start as soon as you pick" multiple show-size></ui-file-uploader>

<script type="module">
  const uploader = document.getElementById('file-uploader-upload');

  // stand-in for your upload: 10% every 300 ms; a file named "…fail…" fails at 50%
  const timers = new Map();
  const sendFile = (file, onProgress) => new Promise((resolve, reject) => {
    let percent = 0;
    const timer = setInterval(() => {
      percent += 10;
      if (percent < 100 && !(file.name.includes('fail') && percent >= 50)) return onProgress(percent);
      clearInterval(timer);
      if (percent < 100) reject(new Error('Connection dropped'));
      else resolve();
    }, 300);
    timers.set(file, timer);
  });
  const cancelUpload = (item) => clearInterval(timers.get(item.file));

  const update = (uuid, changes) => {
    uploader.files = uploader.files.map((f) => (f.uuid === uuid ? { ...f, ...changes } : f));
  };

  async function upload(item) {
    update(item.uuid, { status: 'uploading', progress: 0, invalid: false });
    try {
      await sendFile(item.file, (percent) => update(item.uuid, { progress: percent }));
      update(item.uuid, { status: 'complete' });
    } catch {
      update(item.uuid, { status: 'edit', invalid: true, retryable: true, errorBody: 'Check your connection and try again.' });
    }
  }

  uploader.addEventListener('ui-change', (e) => {
    if (e.detail.action === 'add') e.detail.addedFiles.filter((f) => !f.invalid).forEach(upload);
  });
  uploader.addEventListener('ui-retry', (e) => upload(e.detail.retriedFile));
  uploader.addEventListener('ui-delete', (e) => cancelUpload(e.detail.deletedFile));
</script>
```

React:

```tsx
import type { FileItem } from '@purpurabog/ui/file-uploader';

const [files, setFiles] = useState<FileItem[]>([]);
const update = (uuid: string, changes: Partial<FileItem>) =>
  setFiles((list) => list.map((f) => (f.uuid === uuid ? { ...f, ...changes } : f)));
// upload(item) as in the HTML tab, with this update

<UiFileUploader
  labelTitle="Attachments"
  multiple
  files={files}
  onUiChange={(e) => {
    setFiles(e.detail.currentFiles);
    if (e.detail.action === 'add') e.detail.addedFiles.filter((f) => !f.invalid).forEach(upload);
  }}
  onUiRetry={(e) => upload(e.detail.retriedFile)}
  onUiDelete={(e) => cancelUpload(e.detail.deletedFile)}
/>
```

React + Tailwind:

```tsx
import { FileUploader, type FileItem } from '@/components/ui/react-tw/file-uploader';

const [files, setFiles] = useState<FileItem[]>([]);
const update = (uuid: string, changes: Partial<FileItem>) =>
  setFiles((list) => list.map((f) => (f.uuid === uuid ? { ...f, ...changes } : f)));
// upload(item) as in the HTML tab, with this update

<FileUploader
  labelTitle="Attachments"
  multiple
  files={files}
  onChange={(change) => {
    setFiles(change.currentFiles);
    if (change.action === 'add') change.addedFiles.filter((f) => !f.invalid).forEach(upload);
  }}
  onRetry={upload}
  onDelete={({ deletedFile }) => cancelUpload(deletedFile)}
/>
```

## Skeleton

While the page loads its data, show `<ui-file-uploader-skeleton>` in the uploader's place, as Carbon's `FileUploaderSkeleton`: bars for the title, the description and the button. It has its own import, `@purpurabog/ui/file-uploader-skeleton`, and is hidden from screen readers.


HTML:

```html
<ui-file-uploader-skeleton></ui-file-uploader-skeleton>
```

React:

```tsx
import { UiFileUploaderSkeleton } from '@purpurabog/ui/react';

<UiFileUploaderSkeleton />
```

React + Tailwind:

```tsx
import { FileUploaderSkeleton } from '@/components/ui/react-tw/file-uploader';

<FileUploaderSkeleton />
```

## Keyboard

| Key | What it does |
|---|---|
| Enter or Space on the button or the drop zone | Opens the file dialog |
| Enter or Space on × | Removes the file, or cancels its upload; focus moves to the next file's ×, else the previous one's, else the button |
| Enter or Space on the retry button | Fires `ui-retry` |

## Accessibility

- The uploader is a group named by `label-title`, and the hidden file input is labelled by it too.
- The × and retry buttons are named with the file: "Remove file - contract.pdf", "Retry upload - contract.pdf".
- An error is an alert, read as soon as it appears. A finished upload is announced, since a spinner turning into a check mark is silent.
- The progress bar is a `progressbar` screen readers can query; the percentage isn't read on every change.

Unstyled React parts with the same behaviour: [Headless File uploader](https://parntengza.github.io/kanok-ui-docs/en/headless-file-uploader/).

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-file-uploader>` · React `UiFileUploader`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `label-title` | `labelTitle` | `string` | `''` |  |
| `label-description` | `labelDescription` | `string` | `''` |  |
| `button-label` | `buttonLabel` | `string` | `''` | Button text; replaced by the file name / "N files" after a pick unless `keep-label`. |
| `button-kind` | `buttonKind` | `ButtonKind` | `'primary'` |  |
| `size` | `size` | `FileUploaderSize` | `'md'` | Button and item sizes. |
| `drop` | `drop` | `boolean` | `false` | Render the dashed drop zone instead of the button (Carbon `FileUploaderDropContainer`). |
| `drop-label` | `dropLabel` | `string` | `''` |  |
| `accept` | `accept` | `string` | `''` | Comma-separated extensions / MIME types, e.g. ".pdf,.jpg,image/png". |
| `multiple` | `multiple` | `boolean` | `false` |  |
| `max-file-size` | `maxFileSize` | `number` | `0` | Bytes; larger files are added as invalid. |
| `max-files` | `maxFiles` | `number` | `0` | Most valid files in the list; the ones past it are added as invalid (0 = no limit). |
| `max-total-size` | `maxTotalSize` | `number` | `0` | Bytes the valid files may add up to; a file that would go over is added as invalid (0 = no limit). |
| `show-size` | `showSize` | `boolean` | `false` | Show each file's size in its row ("1.2 MB", in the page language). |
| `name` | `name` | `string` | `''` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `status` | `status` | `FileStatus` | `'edit'` | Status new items start in (Carbon `filenameStatus`). |
| `icon-label` | `iconLabel` | `string` | `''` |  |
| `keep-label` | `keepLabel` | `boolean` | `false` |  |
| `required` | `required` | `boolean` | `false` | At least one valid file must be chosen before the form submits. |
| `required-text` | `requiredText` | `string` | `''` | Validation message for `required`; defaults to the translation. |
| `invalid-type-text` | `invalidTypeText` | `string` | `''` |  |
| `too-large-text` | `tooLargeText` | `string` | `''` |  |
| `too-many-text` | `tooManyText` | `string` | `''` |  |
| `total-too-large-text` | `totalTooLargeText` | `string` | `''` |  |
| `invalid-body-text` | `invalidBodyText` | `string` | `''` |  |

#### Properties

| Property | Type | Description |
|---|---|---|
| `files` | `FileItem[]` | The current list; replace it (new array) to update statuses or errors. |

#### Methods

| Method | Description |
|---|---|
| `setCustomValidity(message)` | Like `<input>.setCustomValidity()`: a non-empty message makes the field invalid until cleared with ''. |
| `browse()` | Open the file dialog. |
| `addFiles(files)` | Add files as if the user picked them. |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-add` | `onUiAdd` | detail: { addedFiles } right after the user picks files (invalid ones included) |
| `ui-delete` | `onUiDelete` | detail: { deletedFile, remainingFiles } |
| `ui-change` | `onUiChange` | detail: { addedFiles, removedFiles, currentFiles, action } |
| `change` | none (use a ref) | Native-style, alongside `ui-change` |
| `ui-retry` | `onUiRetry` | detail: { retriedFile } when the user retries a failed upload |

#### Slots

| Slot | Description |
|---|---|
| (default) | Extra `<ui-file-uploader-item>`s (e.g. files already on the server) |

#### CSS parts

| Part | Description |
|---|---|
| `title` | Label title |
| `description` | Label description |
| `trigger` | The button or drop zone |
| `drop-icon` | The drop zone's upload icon (hidden unless a design shows it) |
| `items` | The file list |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-field-radius` |  | Corner radius of the drop zone (the field setting); `--ui-file-drop-radius` overrides it (Kanok: 12px) |
| `--ui-file-uploader-max-width` |  | Widest the drop zone and the file rows get (default Carbon's 320px; Kanok: none) |
| `--ui-file-drop-direction` |  | The drop zone's layout: `flex-direction` (default row), `--ui-file-drop-align` / `-justify` / `-text-align` / `-gap` (default flex-start, space-between, start, 0; Kanok: a centred column, 12px apart) |
| `--ui-file-drop-height` |  | `block-size` of the drop zone (default Carbon's 96px; Kanok: auto), `--ui-file-drop-min-height` (Kanok: 136px), `--ui-file-drop-padding` (default 16px; Kanok: 24px) |
| `--ui-file-drop-background` |  | Fill of the drop zone (default transparent; Kanok: the fields' fill); `--ui-file-drop-hover-background` while hovered or dragged over (Kanok: `--ui-highlight`) |
| `--ui-file-drop-hover-border-color` |  | Its dashed line while hovered or dragged over (default unchanged; Kanok: `--ui-primary`); `--ui-file-drop-hover-outline` the outline then (default `--ui-focus`; Kanok: transparent), `--ui-file-drop-hover-decoration` the text (default underline; Kanok: none) |
| `--ui-file-drop-icon-display` |  | The upload icon (default none; Kanok: grid, a 40px circle: `--ui-file-drop-icon-background` its fill, `--ui-file-drop-icon-color` the icon) |

### `<ui-file-uploader-item>` · React `UiFileUploaderItem`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `name` | `name` | `string` | `''` |  |
| `uuid` | `uuid` | `string` | `''` | Identifies the file in `ui-delete`; defaults to `name`. |
| `status` | `status` | `FileStatus` | `'edit'` |  |
| `invalid` | `invalid` | `boolean` | `false` |  |
| `error-subject` | `errorSubject` | `string` | `''` |  |
| `error-body` | `errorBody` | `string` | `''` |  |
| `size` | `size` | `FileUploaderSize` | `'md'` |  |
| `disabled` | `disabled` | `boolean` | `false` |  |
| `icon-label` | `iconLabel` | `string` | `''` | Describes the state icon / remove button: "Remove file", "Uploading", "Uploaded" (Carbon `iconDescription`); with `progress`, the bar. |
| `progress` | `progress` | `number \| undefined` |  | Upload progress 0–100, shown while `status` is uploading (percentage, bar, cancel button) instead of the spinner. |
| `retryable` | `retryable` | `boolean` | `false` | On an invalid row: a retry button (`ui-retry`) for a failed upload. |
| `file-size` | `fileSize` | `number \| undefined` |  | Bytes; shows the size in the row ("1.2 MB"). |

#### Properties

| Property | Type | Description |
|---|---|---|
| `removable` |  | (read-only) The row has a remove button (edit, or uploading with `progress`) and isn't disabled. |

#### Methods

| Method | Description |
|---|---|
| `requestDelete()` | Ask the owner to remove this file (fires `ui-delete`). |
| `requestRetry()` | Ask the owner to upload this file again (fires `ui-retry`). |

#### Events

| Event | React | Description |
|---|---|---|
| `ui-delete` | `onUiDelete` | detail: { uuid, name } when the user removes the file |
| `ui-retry` | `onUiRetry` | detail: { uuid, name } when the user retries a failed upload |

#### CSS parts

| Part | Description |
|---|---|
| `base` | The row |
| `name` | File name |
| `size` | The file size (`file-size`) |
| `percent` | The upload percentage (`progress`) |
| `progress` | The `<ui-progress-bar>` under the row (`progress`) |
| `retry-button` | The retry button (`retryable` invalid row) |
| `delete-button` | The × button (edit status, or uploading with `progress`) |
| `error` | The error block (invalid) |

#### CSS custom properties

| Custom property | Default | Description |
|---|---|---|
| `--ui-file-item-radius` |  | Corners of the row (default 0; Kanok: 6px); `--ui-file-item-edge` its box-shadow edge (default none; Kanok: a hairline) |
| `--ui-icon-control-radius` |  | Corners of its small icon buttons, their hover fill and ring (default 0; Kanok: round) |
| `--ui-focus-offset` |  | `outline-offset` of its focus ring (default -2px: inside; Kanok: 2px outside) |


