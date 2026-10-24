import{Ct as e,E as t,Ot as n,jt as r}from"./theme-switcher-BGAHXRgF.js";import{n as i,t as a}from"./selection-tiles-shared-BOwcfB8K.js";import{t as o}from"./radio-D-E0kAAL.js";var s=class extends o{static{this.styles=r`
            ${a}

            :host {
                display: block;
                outline: none;
            }

            /* the tile is drawn by this part, not :host, so a page-wide CSS reset can't remove its padding and border */
            .base {
                ${i}
            }

            :host(:not([disabled], [data-group-disabled]):hover) .base {
                background-color: var(--ui-ghost-hover);
            }

            :host([checked]) .base {
                border-color: var(--ui-tile-selected-border, var(--ui-layer-selected-inverse));
                background-color: var(--ui-tile-selected-background, var(--ui-highlight, var(--ui-card-background)));
            }

            :host([checked]:not([disabled], [data-group-disabled]):hover) .base {
                background-color: var(--ui-tile-selected-hover, var(--ui-tile-selected-background, var(--ui-highlight, var(--ui-card-background))));
            }

            /* Carbon: .cds--tile-input:focus + .cds--tile (a click too) */
            :host(:focus) .base {
                outline-color: var(--ui-focus);
            }

            /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
            :host(:focus:not(:focus-visible)) .base {
                outline-color: var(--ui-pointer-focus, var(--ui-focus));
            }

            :host([data-invalid]) .base {
                border: 2px solid var(--ui-error);
            }

            .mark {
                opacity: 0;
                fill: var(--ui-tile-selected-mark, var(--ui-icon-primary));
            }

            :host([checked]) .mark {
                opacity: 1;
            }

            :host([disabled]) .base,
            :host([data-group-disabled]) .base {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                background-color: var(--ui-card-background, var(--ui-surface-1));
            }

            :host([checked][disabled]) .base,
            :host([checked][data-group-disabled]) .base {
                border-color: var(--ui-border-disabled);
                background-color: var(--ui-card-background, var(--ui-surface-1));
            }

            :host([disabled]) .mark,
            :host([data-group-disabled]) .mark {
                fill: var(--ui-icon-disabled);
            }

            :host([data-group-readonly]) .base {
                cursor: default;
                background-color: var(--ui-card-background, var(--ui-surface-1));
            }

            @media (forced-colors: active) {
                :host([checked]) .base {
                    border: 2px solid Highlight;
                }

                .mark {
                    fill: CanvasText;
                }
            }
        `}render(){return n`<div class="base">
            <svg class="mark" part="mark" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM7 11 4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11z" />
            </svg>
            <slot></slot>
        </div>`}};s=t([e(`ui-radio-tile`)],s);