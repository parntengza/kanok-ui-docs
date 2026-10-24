# Use it with AI coding tools

Claude, Cursor, Copilot and other AI tools write better code with these components when they can read the docs and the design rules. Give them three things: the docs index, the design file, and a short set of rules in your project.

## Give it the docs

The site publishes its pages in the [llms.txt](https://llmstxt.org) format, built from the same source as these pages (Installation and API sections included):

| File | What's in it |
|---|---|
| [llms.txt](https://parntengza.github.io/kanok-ui-docs/llms.txt) | Every page, one line each, with a link to its Markdown |
| [llms-full.txt](https://parntengza.github.io/kanok-ui-docs/llms-full.txt) | All the pages in one file (large: give it to tools that index docs) |
| `en/<page>.md`, e.g. [en/select.md](https://parntengza.github.io/kanok-ui-docs/en/select.md) | One page as Markdown, for a single component |

Add `llms.txt` (or `llms-full.txt`) as documentation in your tool, or paste the link of the page you're working on into the chat.

## Give it the design

[DESIGN.md](https://parntengza.github.io/kanok-ui-docs/DESIGN.md) holds the design in the [DESIGN.md format](https://github.com/google-labs-code/design.md): the colors of all four themes, type, spacing, corners, motion, the main button, field and tile values, and the do's and don'ts. It is generated from `tokens.css`, so the values are the package's.

The package ships it too, so your tool can read the copy that matches your installed version:

```bash
node_modules/@purpurabog/ui/DESIGN.md
```

## Add the rules to your project

Put a few lines in the file your tool reads for project instructions (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/`, `.github/copilot-instructions.md` …):

```md
## UI: kanok-ui (@purpurabog/ui, Carbon Design System)

- Build UI from kanok-ui components, never raw HTML controls or another UI kit:
  web components `<ui-button>`, `<ui-text-input>` … (import '@purpurabog/ui/<name>'),
  React `UiButton` … from '@purpurabog/ui/react', or React + Tailwind components
  added with `npx shadcn@4 add @kanok-ui/tw-<name>`.
- Docs: https://parntengza.github.io/kanok-ui-docs/llms.txt (each page has
  Installation and API sections). Design: node_modules/@purpurabog/ui/DESIGN.md.
- Colors, type and spacing only through the --ui-* tokens; no hard-coded values.
- Restyle with tokens and ::part(), never by reaching into the shadow DOM.
- Surfaces on surfaces: wrap them in <ui-layer> (React + Tailwind: Layer).
- Square corners, no shadows on surfaces, one primary button per area.
- Icon-only buttons need a label; set lang="th" for Thai (dates use the Buddhist era).
```

Keep it short: the tool reads the details from the docs and DESIGN.md when it needs them.

## Autocomplete in the editor

`custom-elements.json` in the package lists every element with its attributes, events, slots and parts. Editors that read the [Custom Elements Manifest](https://custom-elements-manifest.open-wc.org/) give autocomplete and hover docs in HTML and templates. React gets the same from the wrappers' TypeScript types.

## Check what it wrote

AI tools still guess. Before you keep the code, check the usual slips:

- A plain `<button>`, `<input>` or `<select>` where a component exists.
- A hex color or a pixel value where a token exists.
- A field on a tile without a layer around the tile.
- Rounded corners or a box shadow on a surface.
- A React prop spelled like the HTML attribute (`helper-text` instead of `helperText`).
