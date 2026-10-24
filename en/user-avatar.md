# User avatar

A user avatar is a round picture of a person: their photo, their initials, or a user icon. It comes from Carbon for IBM Products. Use it next to a name in approval chains, comments, owners of a record, and the header's account button.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar name="Thomas J. Watson"></ui-user-avatar>
  <ui-user-avatar name="Ada Lovelace" background-color="order-3-green"></ui-user-avatar>
  <ui-user-avatar></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar name="Thomas J. Watson" />
<UiUserAvatar name="Ada Lovelace" backgroundColor="order-3-green" />
<UiUserAvatar />
```

React + Tailwind:

```tsx
<UserAvatar name="Thomas J. Watson" />
<UserAvatar name="Ada Lovelace" backgroundColor="order-3-green" />
<UserAvatar />
```

## Installation


npm:

```bash
npm install @purpurabog/ui
```

shadcn · Web component:

```bash
npx shadcn@4 add @kanok-ui/user-avatar
```

shadcn · React + Tailwind:

```bash
npx shadcn@4 add @kanok-ui/tw-user-avatar
```

Manual:

```bash
# Web component
# 1. Install the dependencies
npm install lit@^3.3.0
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/user-avatar.json
#    to its target:
#    components/ui/primitives/user-avatar/user-avatar.ts
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, core-user-avatar, shared-element, tooltip, tokens

# React + Tailwind
# 1. Install the dependencies
# (none)
# 2. Copy each file's "content" from
#    https://cdn.jsdelivr.net/npm/@purpurabog/ui@1.4.3/registry/tw-user-avatar.json
#    to its target:
#    components/ui/react-tw/user-avatar.tsx
# 3. Do the same for the items it needs (registry/<name>.json):
#    core-position, core-user-avatar, tw-theme, tw-tooltip, tw-utils
```

npm gives you every component from the package. shadcn copies the source into your app instead: a copy pinned to this version that you can change. The shadcn commands need the `@kanok-ui` registry in your `components.json` once, see [Installation](https://parntengza.github.io/kanok-ui-docs/en/installation/#react-tailwind-with-shadcn).

## Use it


HTML:

```html
<script type="module">import '@purpurabog/ui/user-avatar';</script>

<ui-user-avatar name="Thomas J. Watson"></ui-user-avatar>
```

React:

```tsx
import { UiUserAvatar } from '@purpurabog/ui/react';

<UiUserAvatar name="Thomas J. Watson" />
```

React + Tailwind:

```tsx
import { UserAvatar } from '@/components/ui/react-tw/user-avatar';

<UserAvatar name="Thomas J. Watson" />
```

## What it shows

The avatar shows the first of these it has: the photo (`image`), a custom icon (`slot="icon"`), the initials of `name`, or the user icon.

## Initials

`name` gives the initials, as Carbon counts them: one word gives its first two letters ("Somchai" → "SO"), more words give the first letter of the first and of the last word ("Thomas J. Watson" → "TW"). Letters are upper-cased.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar name="Thomas J. Watson"></ui-user-avatar>
  <ui-user-avatar name="somchai jaidee"></ui-user-avatar>
  <ui-user-avatar name="Somchai"></ui-user-avatar>
  <ui-user-avatar name="Mary Ann de la Cruz"></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar name="Thomas J. Watson" />
<UiUserAvatar name="somchai jaidee" />
<UiUserAvatar name="Somchai" />
<UiUserAvatar name="Mary Ann de la Cruz" />
```

React + Tailwind:

```tsx
<UserAvatar name="Thomas J. Watson" />
<UserAvatar name="somchai jaidee" />
<UserAvatar name="Somchai" />
<UserAvatar name="Mary Ann de la Cruz" />
```

## Thai names

Thai words count their consonants only: a leading vowel (เ แ โ ใ ไ), a vowel or tone mark above or below, and a following vowel are skipped. So two words give the first consonant of each ("สมศรี มั่นคง" → "สม", "เกษม ใจดี" → "กจ"), and one word gives its first two consonants ("สุดา" → "สด"). Pass the full name; you don't need to work out the initials yourself.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar name="สมศรี มั่นคง"></ui-user-avatar>
  <ui-user-avatar name="เกษม ใจดี" background-color="order-5-purple"></ui-user-avatar>
  <ui-user-avatar name="สุดา" background-color="order-3-green"></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar name="สมศรี มั่นคง" />
<UiUserAvatar name="เกษม ใจดี" backgroundColor="order-5-purple" />
<UiUserAvatar name="สุดา" backgroundColor="order-3-green" />
```

React + Tailwind:

```tsx
<UserAvatar name="สมศรี มั่นคง" />
<UserAvatar name="เกษม ใจดี" backgroundColor="order-5-purple" />
<UserAvatar name="สุดา" backgroundColor="order-3-green" />
```

## Sizes

`size`: `sm` 24px, `md` 32px (the default), `lg` 48px, `xl` 64px. The initials and the icon grow with it. Use `sm` in tables and lists, `md` next to body text, and `lg` or `xl` on a profile.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar name="Thomas Watson" size="sm"></ui-user-avatar>
  <ui-user-avatar name="Thomas Watson" size="md"></ui-user-avatar>
  <ui-user-avatar name="Thomas Watson" size="lg"></ui-user-avatar>
  <ui-user-avatar name="Thomas Watson" size="xl"></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar name="Thomas Watson" size="sm" />
<UiUserAvatar name="Thomas Watson" size="md" />
<UiUserAvatar name="Thomas Watson" size="lg" />
<UiUserAvatar name="Thomas Watson" size="xl" />
```

React + Tailwind:

```tsx
<UserAvatar name="Thomas Watson" size="sm" />
<UserAvatar name="Thomas Watson" size="md" />
<UserAvatar name="Thomas Watson" size="lg" />
<UserAvatar name="Thomas Watson" size="xl" />
```

## No name: the user icon

Without `name`, `image` or an icon, the avatar shows Carbon's user icon: 16px in `sm`, then 20, 24 and 32px. Use it for an account that hasn't set a name yet.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar size="sm"></ui-user-avatar>
  <ui-user-avatar></ui-user-avatar>
  <ui-user-avatar size="lg"></ui-user-avatar>
  <ui-user-avatar size="xl"></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar size="sm" />
<UiUserAvatar />
<UiUserAvatar size="lg" />
<UiUserAvatar size="xl" />
```

React + Tailwind:

```tsx
<UserAvatar size="sm" />
<UserAvatar />
<UserAvatar size="lg" />
<UserAvatar size="xl" />
```

## Photo

`image` is the photo's URL; it fills the circle instead of the initials. `image-description` (`imageDescription`) is its alt text: give the person's name, or leave it empty when the name is already written next to it.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar size="lg" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23a6c8ff'/%3E%3Ccircle cx='32' cy='24' r='12' fill='%230f62fe'/%3E%3Cpath d='M10 64c2-14 12-22 22-22s20 8 22 22z' fill='%230f62fe'/%3E%3C/svg%3E" image-description="Thomas J. Watson"></ui-user-avatar>
  <ui-user-avatar size="md" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23a6c8ff'/%3E%3Ccircle cx='32' cy='24' r='12' fill='%230f62fe'/%3E%3Cpath d='M10 64c2-14 12-22 22-22s20 8 22 22z' fill='%230f62fe'/%3E%3C/svg%3E" image-description="Thomas J. Watson"></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar size="lg" image="/photos/t-watson.jpg" imageDescription="Thomas J. Watson" />
<UiUserAvatar image="/photos/t-watson.jpg" imageDescription="Thomas J. Watson" />
```

React + Tailwind:

```tsx
<UserAvatar size="lg" image="/photos/t-watson.jpg" imageDescription="Thomas J. Watson" />
<UserAvatar image="/photos/t-watson.jpg" imageDescription="Thomas J. Watson" />
```

Keep `name` set too: if you remove `image` later (no photo, or it failed to load in your app), the initials come back.

## Custom icon

Put an icon in the `icon` slot (the `icon` prop in React + Tailwind) for something that isn't one person: a service account, a team, a bot. It is sized like the user icon (16 / 20 / 24 / 32px) and drawn in the inverse icon colour.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar size="lg" background-color="order-2-gray"><svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 22H6V6h20Z" /><path d="M10 10h12v2H10zm0 5h12v2H10zm0 5h7v2h-7z" /></svg></ui-user-avatar>
  <ui-user-avatar background-color="order-6-teal"><svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M12 16a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3ZM22 30h-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5H2v-5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5ZM22 4h2a5 5 0 0 1 0 10h-2v-2h2a3 3 0 0 0 0-6h-2ZM30 30h-2v-5a3 3 0 0 0-2.2-2.9l.6-1.9A5 5 0 0 1 30 25Z" /></svg></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar size="lg" backgroundColor="order-2-gray">
  <svg slot="icon" viewBox="0 0 32 32" aria-hidden="true">{/* document icon */}</svg>
</UiUserAvatar>
<UiUserAvatar backgroundColor="order-6-teal">
  <svg slot="icon" viewBox="0 0 32 32" aria-hidden="true">{/* group icon */}</svg>
</UiUserAvatar>
```

React + Tailwind:

```tsx
<UserAvatar size="lg" backgroundColor="order-2-gray" icon={<svg viewBox="0 0 32 32" aria-hidden="true">{/* document icon */}</svg>} />
<UserAvatar backgroundColor="order-6-teal" icon={<svg viewBox="0 0 32 32" aria-hidden="true">{/* group icon */}</svg>} />
```

## Colours

`background-color` (`backgroundColor`) picks one of Carbon's 12 avatar colours, `order-1-cyan` (the default) to `order-12-teal`: 1–6 are the strong grades, 7–12 the deep ones, and dark themes use lighter grades. Give each person a colour that stays the same, for example from their user id, so people learn to spot each other.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <ui-user-avatar name="Anan" background-color="order-1-cyan"></ui-user-avatar>
  <ui-user-avatar name="Boonmee" background-color="order-2-gray"></ui-user-avatar>
  <ui-user-avatar name="Chanida" background-color="order-3-green"></ui-user-avatar>
  <ui-user-avatar name="Darunee" background-color="order-4-magenta"></ui-user-avatar>
  <ui-user-avatar name="Ekachai" background-color="order-5-purple"></ui-user-avatar>
  <ui-user-avatar name="Fah" background-color="order-6-teal"></ui-user-avatar>
  <ui-user-avatar name="Kanya" background-color="order-7-cyan"></ui-user-avatar>
  <ui-user-avatar name="Lamai" background-color="order-8-gray"></ui-user-avatar>
  <ui-user-avatar name="Manee" background-color="order-9-green"></ui-user-avatar>
  <ui-user-avatar name="Nara" background-color="order-10-magenta"></ui-user-avatar>
  <ui-user-avatar name="Ornanong" background-color="order-11-purple"></ui-user-avatar>
  <ui-user-avatar name="Pim" background-color="order-12-teal"></ui-user-avatar>
</div>
```

React:

```tsx
const colours = ['order-1-cyan', 'order-2-gray', 'order-3-green', 'order-4-magenta', 'order-5-purple', 'order-6-teal',
  'order-7-cyan', 'order-8-gray', 'order-9-green', 'order-10-magenta', 'order-11-purple', 'order-12-teal'] as const;

{people.map((p) => <UiUserAvatar key={p.id} name={p.name} backgroundColor={colours[p.id % colours.length]} />)}
```

React + Tailwind:

```tsx
const colours = ['order-1-cyan', 'order-2-gray', 'order-3-green', 'order-4-magenta', 'order-5-purple', 'order-6-teal',
  'order-7-cyan', 'order-8-gray', 'order-9-green', 'order-10-magenta', 'order-11-purple', 'order-12-teal'] as const;

{people.map((p) => <UserAvatar key={p.id} name={p.name} backgroundColor={colours[p.id % colours.length]} />)}
```

## With a tooltip

`tooltip-text` (`tooltipText`) turns the avatar into a button named by that text, which shows it in a tooltip on hover and focus and takes a 2px focus ring. `tooltip-alignment` (`tooltipAlignment`) picks the side, `bottom` by default. Start the text with the initials, as Carbon does ("TW, Thomas J. Watson"), so the button's name includes what is seen.


HTML:

```html
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
  <ui-user-avatar name="Thomas J. Watson" tooltip-text="TW, Thomas J. Watson"></ui-user-avatar>
  <ui-user-avatar name="Somchai Jaidee" background-color="order-3-green" tooltip-text="SJ, Somchai Jaidee, Finance" tooltip-alignment="right"></ui-user-avatar>
</div>
```

React:

```tsx
<UiUserAvatar name="Thomas J. Watson" tooltipText="TW, Thomas J. Watson" />
<UiUserAvatar name="Somchai Jaidee" backgroundColor="order-3-green" tooltipText="SJ, Somchai Jaidee, Finance" tooltipAlignment="right" />
```

React + Tailwind:

```tsx
<UserAvatar name="Thomas J. Watson" tooltipText="TW, Thomas J. Watson" />
<UserAvatar name="Somchai Jaidee" backgroundColor="order-3-green" tooltipText="SJ, Somchai Jaidee, Finance" tooltipAlignment="right" />
```

The button does nothing on click by itself. Use the tooltip where only the avatar is shown (a row of reviewers); when the name is written next to it, leave the tooltip out.

## Next to a name

The common layout: the avatar, then the name and a second line. Here, the approvers of a contract. The written name says who it is, so the avatar needs no tooltip.


HTML:

```html
<div style="display: grid; gap: 12px">
  <div style="display: flex; align-items: center; gap: 8px">
    <ui-user-avatar name="Somchai Jaidee" background-color="order-3-green"></ui-user-avatar>
    <div><div>Somchai Jaidee</div><div style="color: var(--ui-ink-muted); font: var(--ui-font-caption)">Department head, approved 12 Mar</div></div>
  </div>
  <div style="display: flex; align-items: center; gap: 8px">
    <ui-user-avatar name="Darunee Srisuk" background-color="order-4-magenta"></ui-user-avatar>
    <div><div>Darunee Srisuk</div><div style="color: var(--ui-ink-muted); font: var(--ui-font-caption)">Finance, reviewing</div></div>
  </div>
</div>
```

React:

```tsx
{approvers.map((a) => (
  <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <UiUserAvatar name={a.name} backgroundColor={a.colour} />
    <div>
      <div>{a.name}</div>
      <div style={{ color: 'var(--ui-ink-muted)', font: 'var(--ui-font-caption)' }}>{a.role}, {a.status}</div>
    </div>
  </div>
))}
```

React + Tailwind:

```tsx
{approvers.map((a) => (
  <div key={a.id} className="flex items-center gap-2">
    <UserAvatar name={a.name} backgroundColor={a.colour} />
    <div>
      <div className="text-ink">{a.name}</div>
      <div className="type-caption text-ink-muted">{a.role}, {a.status}</div>
    </div>
  </div>
))}
```

## Accessibility

- Without a tooltip, the avatar is plain text (the initials) or an image with its `image-description`. Write the person's name next to it; initials alone don't say who it is.
- With `tooltip-text`, it is a button named by that text. Start the text with the initials so voice control users can say what they see.
- The colour carries no meaning, so it never needs a text equivalent.
- The icon slot is decoration: give the svg `aria-hidden="true"`.

## API

Generated from the package. In React, pass a property as a prop of the same name; events are props too (the React column).

### `<ui-user-avatar>` · React `UiUserAvatar`

#### Attributes

| Attribute | Property | Type | Default | Description |
|---|---|---|---|---|
| `name` | `name` | `string` | `''` | The person's name or initials; the avatar shows the initials. |
| `image` | `image` | `string` | `''` | A photo's URL, shown instead of the initials. |
| `image-description` | `imageDescription` | `string` | `''` | The photo's alt text. |
| `size` | `size` | `UserAvatarSize` | `'md'` |  |
| `background-color` | `backgroundColor` | `UserAvatarColor` | `'order-1-cyan'` | One of Carbon's 12 avatar colours, `order-1-cyan` … `order-12-teal`. |
| `tooltip-text` | `tooltipText` | `string` | `''` | Shown in a tooltip and names the avatar, which becomes a button (e.g. "Thomas J. Watson"). |
| `tooltip-alignment` | `tooltipAlignment` | `Placement` | `'bottom'` |  |

#### Slots

| Slot | Description |
|---|---|
| `icon` | A custom icon in place of the initials / user icon (sized 16 / 20 / 24 / 32px) |

#### CSS parts

| Part | Description |
|---|---|
| `avatar` | The circle |
| `image` | The photo |
| `trigger` | The button around the avatar when it has a tooltip |


