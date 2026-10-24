import{Ct as e,E as t,Ot as n,jt as r}from"./theme-switcher-BGAHXRgF.js";import{t as i}from"./checkbox-D7iKtRMD.js";import{n as a,t as o}from"./selection-tiles-shared-BOwcfB8K.js";var s=class extends i{constructor(...e){super(...e),this.controlTabIndex=`0`}static{this.styles=[...i.styles,o,r`
            label {
                ${a}
                width: 100%;
            }

            :host(:not([data-disabled], [data-readonly])) label:hover {
                background-color: var(--ui-ghost-hover);
            }

            :host([checked]) label {
                border-color: var(--ui-tile-selected-border, var(--ui-layer-selected-inverse));
                background-color: var(--ui-tile-selected-background, var(--ui-highlight, var(--ui-card-background)));
            }

            :host([checked]:not([data-disabled], [data-readonly])) label:hover {
                background-color: var(--ui-tile-selected-hover, var(--ui-tile-selected-background, var(--ui-highlight, var(--ui-card-background))));
            }

            :host([checked]) .mark {
                fill: var(--ui-tile-selected-mark, var(--ui-icon-primary));
            }

            /* Ring the whole tile on :focus (a click too, as Carbon), not the small mark */
            label:has(input:focus) {
                outline-color: var(--ui-focus);
            }

            /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
            label:has(input:focus:not(:focus-visible)) {
                outline-color: var(--ui-pointer-focus, var(--ui-focus));
            }

            input,
            .mark {
                position: absolute;
                top: var(--ui-space-md);
                inset-inline-start: auto;
                inset-inline-end: var(--ui-space-md);
                margin: 0;
            }

            /* the native box stays clickable under the mark but invisible */
            input {
                width: 16px;
                height: 16px;
                opacity: 0;
            }

            .invalid,
            :host([data-group-invalid]) label {
                border: 2px solid var(--ui-error);
            }

            :host([data-disabled]) label {
                background-color: var(--ui-card-background, var(--ui-surface-1));
            }

            :host([data-disabled][checked]) label {
                border-color: var(--ui-border-disabled);
                background-color: var(--ui-card-background, var(--ui-surface-1));
            }

            :host([data-disabled]) .mark {
                fill: var(--ui-icon-disabled);
            }

            :host([data-readonly]) label {
                cursor: default;
            }

            .error,
            .warn,
            .helper {
                padding-inline-start: 0;
            }

            @media (forced-colors: active) {
                .mark {
                    fill: CanvasText;
                }
            }
        `]}renderBox(){return this.checked?n`<svg class="mark" part="box" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM14 21.5l-5-4.957L10.59 15 14 18.346 21.409 11 23 12.577z" />
              </svg>`:n`<svg class="mark" part="box" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6 26V6h20v20z" />
              </svg>`}};s=t([e(`ui-selectable-tile`)],s);