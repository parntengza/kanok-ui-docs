import{At as e,B as t,Ct as n,D as r,E as i,Ot as a,St as o,Tt as s,V as c,W as ee,bt as l,it as u,jt as d,r as f,rt as p,w as m,xt as h}from"./theme-switcher-BGAHXRgF.js";import"./button-CTeCEJcq.js";import{a as g}from"./skeleton-BESm0w-6.js";import{t as te}from"./live-in-s5S9C.js";import"./checkbox-group-B9JpfOEi.js";import"./checkbox-D7iKtRMD.js";import"./radio-D-E0kAAL.js";import"./popover-Ec_aH7MB.js";import{t as ne}from"./events-IQD1_DyD.js";import{c as re,l as ie,m as _,s as v}from"./pagination-BgZ55sJe.js";import{n as ae}from"./timers-B8uB_VHg.js";import{a as y,c as b,i as x,l as S,o as oe,r as se,s as ce}from"./grid-BrZ5xmQT.js";import"./pagination-B7Y-VC-z.js";var C=class extends r{constructor(...e){super(...e),this.active=!1,this.selectedRowsCount=0,this.totalRowsCount=0,this.size=`lg`,this.localize=new m(this),this.sizeButtons=()=>{let e=this.size===`lg`?`lg`:`sm`;for(let t of this.querySelectorAll(`:scope > ui-button`))t.setAttribute(`size`,e)},this.onSlotPointer=e=>{let t=[...this.children];e.target===t.at(-1)&&this.style.setProperty(`--_divider-opacity`,e.type===`mouseover`?`0`:`1`)},this.onCancel=()=>{this.dispatchEvent(new CustomEvent(`ui-table-batch-actions-cancel-clicked`,{bubbles:!0,composed:!0}))},this.onSelectAll=()=>{this.dispatchEvent(new CustomEvent(`ui-table-batch-actions-select-all-clicked`,{bubbles:!0,composed:!0}))}}static{this.styles=d`
        :host {
            position: absolute;
            inset-block-end: 0;
            inset-inline: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            block-size: var(--_toolbar, 48px);
            /* --ui-batch-*: Carbon's brand bar; a design can make it a tinted row with ink text and text buttons */
            background-color: var(--ui-batch-background, var(--ui-background-brand));
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            opacity: 0;
            pointer-events: none;
            transform: translate3d(0, var(--_toolbar, 48px), 0);
            transition:
                transform var(--ui-duration-moderate) var(--ui-easing),
                clip-path var(--ui-duration-moderate) var(--ui-easing),
                opacity var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([active]) {
            z-index: 1;
            clip-path: polygon(0 0, 300% 0, 300% 300%, 0 300%);
            opacity: 1;
            pointer-events: all;
            transform: translate3d(0, 0, 0);
        }

        .summary {
            display: flex;
            align-items: center;
            min-inline-size: 0;
        }

        .batch-summary {
            display: flex;
            align-items: center;
            min-block-size: var(--_toolbar, 48px);
            margin: 0;
            padding: 0 var(--ui-space-md);
            color: var(--ui-batch-ink, var(--ui-on-primary));
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            white-space: nowrap;
        }

        /* Carbon .batch-summary__divider */
        .divider {
            color: var(--ui-batch-ink, var(--ui-on-primary));
            font: var(--ui-font-body-sm);
        }

        .action-list {
            display: flex;
            align-items: center;
            block-size: 100%;
        }

        ::slotted(*) {
            flex-shrink: 0;
            --ui-button-padding-start: 16px; /* Carbon .action-list .btn */
            --ui-button-padding-end: 16px;
        }

        .select-all,
        .cancel {
            position: relative;
            block-size: var(--_toolbar, 48px);
            margin: 0;
            padding: 0 var(--ui-space-md);
            border: 0;
            background-color: var(--ui-batch-button, var(--ui-primary));
            color: var(--ui-batch-button-ink, var(--ui-on-primary));
            font: var(--ui-font-button);
            letter-spacing: var(--ui-tracking-body);
            white-space: nowrap;
            cursor: pointer;
            /* Carbon .cds--btn: the fill and the ring change in fast-01 with the entrance easing */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                outline var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        .select-all:hover,
        .cancel:hover {
            background-color: var(--ui-batch-button-hover, var(--ui-blue-hover));
        }

        .select-all:active,
        .cancel:active {
            background-color: var(--ui-batch-button-active, var(--ui-blue-80));
        }

        .select-all:focus-visible,
        .cancel:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-batch-focus, var(--ui-surface-1));
            outline-offset: -2px; /* inside the bar: its light ring is drawn on the bar's own colour */
            border-radius: var(--ui-focus-radius, 0); /* a ring with corners (Kanok: 6px) */
        }

        /* 1px divider before Cancel, hidden while it (or the last action) is hovered */
        .cancel::before {
            content: '';
            position: absolute;
            inset-block-start: calc((var(--_toolbar, 48px) - 16px) / 2);
            inset-inline-start: 0;
            inline-size: 1px;
            block-size: 16px;
            background-color: var(--ui-batch-divider, var(--ui-on-primary));
            opacity: var(--_divider-opacity, 1);
            transition: opacity var(--ui-duration-moderate) var(--ui-easing);
        }

        .cancel:hover::before {
            opacity: 0;
            transition: opacity 250ms cubic-bezier(0.5, 0, 0.1, 1); /* Carbon $transition-base, $standard-easing */
        }

        @media (prefers-reduced-motion: reduce) {
            :host,
            .cancel::before,
            .cancel:hover::before {
                transition: none;
            }
        }

        @media (forced-colors: active) {
            :host {
                outline: 1px solid CanvasText;
                outline-offset: -1px;
            }
        }
    `}updated(e){e.has(`active`)&&(this.inert=!this.active),e.has(`size`)&&this.sizeButtons()}render(){let e=this.localize.t.dataTable,t=this.selectedRowsCount,n=this.formatSelectedItemsCount?.({count:t})??e.selectedCount(t),r=this.totalRowsCount>t;return a`<div class="summary">
                <p class="batch-summary" part="batch-summary" role="status">${n}</p>
                ${r?a`<span class="divider" aria-hidden="true">|</span>
                          <button class="select-all" part="select-all-button" type="button" @click=${this.onSelectAll}><slot name="select-all-button-content">${e.selectAllCount(this.totalRowsCount)}</slot></button>`:s}
            </div>
            <div class="action-list" @mouseover=${this.onSlotPointer} @mouseout=${this.onSlotPointer}>
                <slot @slotchange=${this.sizeButtons}></slot>
                <button class="cancel" part="cancel-button" type="button" @click=${this.onCancel}><slot name="cancel-button-content">${e.cancel}</slot></button>
            </div>`}};i([o({type:Boolean,reflect:!0})],C.prototype,`active`,void 0),i([o({type:Number,attribute:`selected-rows-count`})],C.prototype,`selectedRowsCount`,void 0),i([o({type:Number,attribute:`total-rows-count`})],C.prototype,`totalRowsCount`,void 0),i([o({reflect:!0})],C.prototype,`size`,void 0),i([o({attribute:!1})],C.prototype,`formatSelectedItemsCount`,void 0),C=i([n(`ui-table-batch-actions`)],C);var w=class extends r{constructor(...e){super(...e),this.useZebraStyles=!1,this.onSlotChange=()=>{this.updateZebra(),this.dispatchEvent(new Event(`ui-table-body-content-change`,{bubbles:!0}))}}static{this.styles=d`
        :host {
            display: table-row-group;
            background-color: var(--ui-surface-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`rowgroup`)}updated(e){e.has(`useZebraStyles`)&&this.updateZebra()}updateZebra(){let e=0;for(let t of this.children){if(t.localName!==`ui-table-row`||t.filtered||t.pagedOut)continue;e++;let n=e%2==0;t.even=this.useZebraStyles&&n,t.odd=this.useZebraStyles&&!n}}render(){return a`<slot @slotchange=${this.onSlotChange}></slot>`}};i([o({type:Boolean,reflect:!0,attribute:`use-zebra-styles`})],w.prototype,`useZebraStyles`,void 0),w=i([n(`ui-table-body`)],w);var T=d`
    :host([column-hidden]) {
        display: none;
    }

    :host([pinned='end']) {
        position: sticky;
        inset-inline-end: 0;
        z-index: 1;
        --_pin-edge: inset calc(1px * var(--_dir, 1)) 0 0 var(--ui-hairline);
    }

    @media (min-width: 672px) {
        :host([pinned='start']) {
            position: sticky;
            inset-inline-start: var(--_pin-first-at, 0px);
            z-index: 1;
            --_pin-edge: inset calc(-1px * var(--_dir, 1)) 0 0 var(--ui-hairline);
        }
    }
`,le=d`
    :host([pinned]) {
        background: linear-gradient(var(--_row-tint, transparent), var(--_row-tint, transparent)), var(--_row-base, var(--ui-surface-1));
    }
`,ue=e`<path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />`,de=e`<path d="M2 13h12v1H2zm10.7-8.3L11.3 3.3a1 1 0 0 0-1.4 0L4 9.2V12h2.8l5.9-5.9a1 1 0 0 0 0-1.4ZM6.4 11H5V9.6l4-4L10.4 7Zm4.7-4.7L9.7 4.9l1-1 1.4 1.4Z" />`,fe=(e,t)=>a`<option value=${e.value} ?selected=${t}>${e.label}</option>`,E=class extends r{constructor(...e){super(...e),this.columnHidden=!1,this.editing=!1,this.draft=``,this.editorLabel=``,this.editorOptions=[],this.editorError=``,this.onDraft=e=>{this.draft=e.target.value}}static{this.styles=[T,le,d`
            /*
             * The padding and the rule are drawn in the shadow root, not on :host: a page-level reset
             * (Tailwind preflight's * { padding: 0; border: 0 }) beats :host rules.
             */
            :host {
                display: table-cell;
                /* only a rule below (Carbon web components): border-subtle (00 on the page, 01 / 02 in layers) */
                box-shadow:
                    var(--_pin-edge, 0 0 #0000),
                    inset 0 -1px 0 var(--_row-rule-end, var(--ui-hairline));
                /* Carbon: secondary text until hovered or chosen; --ui-table-cell-ink lets a design use primary text */
                color: var(--_row-ink, var(--ui-table-cell-ink, var(--ui-ink-muted)));
                font: var(--ui-font-body-sm);
                line-height: 18px; /* body-compact-01 */
                letter-spacing: var(--ui-tracking-body);
                text-align: start;
                vertical-align: var(--_align, middle);
            }

            /* the rule takes the cell's last pixel, as a collapsed 1px border did */
            .content {
                padding-block: var(--_cell-pad-start, 0px) calc(var(--_cell-pad-end, 0px) + 1px);
                padding-inline: var(--ui-space-md);
            }

            /* a grid cell (an editable table): Carbon's focus ring inside the cell */
            :host(:focus-visible) {
                outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
                outline-offset: -2px;
            }

            :host([editable]) {
                position: relative;
                cursor: text;
            }

            /* right after the value, so it reads as that value's control (hidden but in place: nothing shifts on hover) */
            .edit-icon {
                inline-size: 16px;
                block-size: 16px;
                margin-inline-start: var(--ui-space-xs);
                vertical-align: text-bottom;
                fill: var(--ui-ink-muted);
                opacity: 0;
                cursor: pointer;
            }

            :host([editable]:hover) .edit-icon,
            :host([editable]:focus) .edit-icon {
                opacity: 1;
            }

            :host([editing]) .content {
                padding: 0 0 1px;
            }

            .editor {
                box-sizing: border-box;
                display: block;
                inline-size: 100%;
                min-block-size: calc(var(--_row, 48px) - 1px); /* the cell keeps its rule below */
                margin: 0;
                padding-inline: var(--ui-space-md);
                border: none;
                border-radius: 0;
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                text-align: inherit;
                outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
                outline-offset: -2px;
            }

            /* Carbon select: own chevron 16px from the end, room for it in the padding, the same in every browser */
            select.editor {
                appearance: none;
                padding-inline-end: calc(var(--ui-space-md) * 2 + 16px);
                cursor: pointer;
            }

            .chevron {
                position: absolute;
                inset-block-start: calc(50% - 8px);
                inset-inline-end: var(--ui-space-md);
                inline-size: 16px;
                block-size: 16px;
                fill: var(--ui-ink);
                pointer-events: none;
            }

            .editor[aria-invalid='true'] {
                outline-color: var(--ui-error);
            }

            .error {
                position: absolute;
                z-index: 1;
                inset-block-start: 100%;
                inset-inline-start: 0;
                padding: var(--ui-space-xxs) var(--ui-space-xs);
                background-color: var(--ui-surface-1);
                box-shadow: 0 2px 6px rgb(0 0 0 / 0.3);
                color: var(--ui-error-text, var(--ui-error));
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
                white-space: nowrap;
            }

            @media (forced-colors: active) {
                :host {
                    border-block-end: 1px solid; /* shadows are dropped */
                }

                .edit-icon,
                .chevron {
                    fill: CanvasText;
                }
            }
        `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`cell`)}get editorValue(){return this.renderRoot.querySelector(`.editor`)?.value??this.draft}focusEditor(e){let t=this.renderRoot.querySelector(`.editor`);t?.focus(),t instanceof HTMLInputElement&&(e?t.select():t.type===`text`&&t.setSelectionRange(t.value.length,t.value.length))}renderError(){return this.editorError?a`<span class="error" id="error" part="error" role="alert">${this.editorError}</span>`:s}renderEditor(){let e=this.editorError?`true`:`false`,t=this.editorError?`error`:s;if(this.editable===`select`)return a`<select class="editor" part="editor" aria-label=${this.editorLabel} aria-invalid=${e} aria-describedby=${t} @input=${this.onDraft} @change=${this.onDraft}>
                    ${this.editorOptions.map(e=>fe(e,e.value===this.draft))}
                </select><svg class="chevron" viewBox="0 0 16 16" aria-hidden="true">${ue}</svg>${this.renderError()}`;let n=this.editable===`number`;return a`<input
                class="editor"
                part="editor"
                type=${n?`number`:`text`}
                inputmode=${n?`decimal`:s}
                .value=${te(this.draft)}
                aria-label=${this.editorLabel}
                aria-invalid=${e}
                aria-describedby=${t}
                @input=${this.onDraft}
            />${this.renderError()}`}renderContent(){return this.editing?this.renderEditor():this.editable?a`<slot></slot><svg class="edit-icon" part="edit-icon" viewBox="0 0 16 16" aria-hidden="true">${de}</svg>`:a`<slot></slot>`}render(){return a`<div class="content" part="content">${this.renderContent()}</div>`}};i([o({type:Boolean,reflect:!0,attribute:`column-hidden`})],E.prototype,`columnHidden`,void 0),i([o({reflect:!0})],E.prototype,`pinned`,void 0),i([o({reflect:!0})],E.prototype,`editable`,void 0),i([o({type:Boolean,reflect:!0})],E.prototype,`editing`,void 0),i([o({attribute:!1})],E.prototype,`draft`,void 0),i([o({attribute:!1})],E.prototype,`editorLabel`,void 0),i([o({attribute:!1})],E.prototype,`editorOptions`,void 0),i([o({attribute:!1})],E.prototype,`editorError`,void 0),E=i([n(`ui-table-cell`)],E);var D=d`
    .button {
        display: grid;
        place-items: center;
        inline-size: var(--_toolbar, 48px);
        block-size: var(--_toolbar, 48px);
        padding: 0;
        border: none;
        background-color: transparent;
        color: var(--ui-icon-primary);
        cursor: pointer;
        transition: background-color var(--ui-duration-moderate) var(--ui-easing-entrance); /* Carbon .cds--toolbar-action, fast-02 */
        border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
    }

    .button svg {
        inline-size: 16px;
        block-size: 16px;
        fill: currentColor;
    }

    @media (any-hover: hover) {
        .button:hover {
            background-color: var(--ui-ghost-hover); /* field-hover */
        }
    }

    .button:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: var(--ui-focus-offset, -2px);
    }

    @media (prefers-reduced-motion: reduce) {
        .button {
            transition: none;
        }
    }
`,pe=a`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M24 4h2v24h-2zM18 6v20h-4V6h4m0-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 4h2v24H6z" /></svg>`,O=class extends r{constructor(...e){super(...e),this.open=!1,this.localize=new m(this),this.refresh=()=>this.requestUpdate(),this.onCheck=e=>{e.stopPropagation();let t=e.target;this.table?.setColumnHidden(t.dataset.column??``,!t.checked)||(t.checked=!t.checked),this.requestUpdate()},this.onReset=()=>{this.table?.resetColumns()}}static{this.styles=[D,d`
        :host {
            display: block;
            flex-shrink: 0;
        }

        /* Carbon toolbar menu: layer-02 while open */
        .button[aria-expanded='true'] {
            background-color: var(--ui-layer-2);
        }

        /* as Carbon's toolbar menu: flush under the button, layer-02, the menu shadow */
        ui-popover::part(content) {
            background-color: var(--ui-layer-2);
            box-shadow: var(--ui-menu-shadow, 0 2px 6px rgb(0 0 0 / 0.3));
        }

        .panel {
            box-sizing: border-box;
            min-inline-size: 160px;
            max-block-size: 320px;
            padding: var(--ui-space-md) var(--ui-space-md) var(--ui-space-xs);
            overflow-y: auto;
            overscroll-behavior: contain;
        }

        /* the label lines up with the boxes above */
        .reset {
            margin-block-start: var(--ui-space-xs);
            margin-inline-start: calc(-1 * var(--ui-space-md));
        }
    `]}get table(){return this.closest(`ui-table`)}connectedCallback(){super.connectedCallback(),this.table?.addEventListener(`ui-table-columns-change`,this.refresh)}disconnectedCallback(){super.disconnectedCallback(),this.table?.removeEventListener(`ui-table-columns-change`,this.refresh)}updated(){let e=this.tip,t=this.button??null;e&&e.anchor!==t&&(e.anchor=t)}renderPanel(e){let t=this.localize.t.dataTable,n=e.columns;return a`<div class="panel" part="panel">
            <ui-checkbox-group label=${t.columns}>
                ${n.map(t=>a`<ui-checkbox data-column=${t.columnKey} .checked=${!t.columnHidden||!t.hideable} ?disabled=${e.isColumnLocked(t.columnKey)} @change=${this.onCheck}>${t.labelText}</ui-checkbox>`)}
            </ui-checkbox-group>
            <ui-button class="reset" kind="ghost" size="sm" ?disabled=${!e.columnsChanged} @click=${this.onReset}>${t.resetColumns}</ui-button>
        </div>`}render(){let e=this.localize.t.dataTable,t=this.table;return a`<ui-popover placement="bottom-end" caret="false" drop-shadow="false" auto-close .open=${this.open} @ui-toggle=${e=>{ne(e)&&(this.open=e.detail.open)}}>
                <button slot="trigger" class="button" part="button" type="button" aria-label=${e.columns} aria-expanded=${this.open?`true`:`false`} @click=${()=>this.open=!this.open}>${pe}</button>
                ${this.open&&t?this.renderPanel(t):a``}
            </ui-popover>
            <ui-tooltip as-label text=${e.columns} placement="top"></ui-tooltip>`}};i([h()],O.prototype,`open`,void 0),i([l(`.button`)],O.prototype,`button`,void 0),i([l(`ui-tooltip`)],O.prototype,`tip`,void 0),O=i([n(`ui-table-column-settings`)],O);var me=/^[=+\-@\t\r]/;function he(e){let t=v(e);return typeof e!=`number`&&me.test(t)&&(t=`'${t}`),`"${t.replaceAll(`"`,`""`)}"`}function ge(e,t){let n=e[t.key];return t.options?t.options.find(e=>e.value===v(n))?.label??n:n}function _e(e,t,n){let r=e=>e.map(he).join(`,`);return[r(e.map(e=>e.header)),...t.map(t=>r(e.map(e=>n?n(t,e):ge(t,e))))].join(`\r
`)}function k(e){return`${(e??``).replace(/\.csv$/i,``).replaceAll(/[\\/:*?"<>|]/g,` `).replaceAll(/\s+/g,` `).trim()||`table`}.csv`}function A(e,t){let{URL:n,Blob:r,document:i}=globalThis,a=n.createObjectURL(new r([`﻿`,e],{type:`text/csv;charset=utf-8`})),o=Object.assign(i.createElement(`a`),{href:a,download:k(t)});o.hidden=!0,i.body.append(o),o.click(),o.remove(),ae(()=>n.revokeObjectURL(a),1e3)}var j=a`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4ZM26 14l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10 10-10z" /></svg>`,M=class extends r{constructor(...e){super(...e),this.fileName=``,this.localize=new m(this),this.onClick=()=>{let e=this.table;if(!e)return;let t={csv:e.toCsv(),rows:e.csvRows(`shown`),fileName:this.fileName||e.csvFileName};this.dispatchEvent(new CustomEvent(`ui-table-csv-export`,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))&&A(t.csv,t.fileName)}}static{this.styles=[D,d`
            :host {
                display: block;
                flex-shrink: 0;
            }
        `]}get table(){return this.closest(`ui-table`)}updated(){let e=this.tip,t=this.button??null;e&&e.anchor!==t&&(e.anchor=t)}render(){let e=this.localize.t.dataTable.exportCsv;return a`<button class="button" part="button" type="button" aria-label=${e} @click=${this.onClick}>${j}</button>
            <ui-tooltip as-label text=${e} placement="top"></ui-tooltip>`}};i([o({attribute:`file-name`})],M.prototype,`fileName`,void 0),i([l(`.button`)],M.prototype,`button`,void 0),i([l(`ui-tooltip`)],M.prototype,`tip`,void 0),M=i([n(`ui-table-csv-export`)],M);var N=class extends r{constructor(...e){super(...e),this.colSpan=1,this.expanded=!1,this.filtered=!1,this.pagedOut=!1,this.highlighted=!1,this.selected=!1,this.grid=!1,this.onPointer=e=>{let t=this.previousElementSibling;t?.localName===`ui-table-row`&&(t.highlighted=e.type===`mouseover`)}}static{this.styles=d`
        :host {
            display: table-row;
            transition: background-color var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        :host(:not([expanded])),
        :host([filtered]),
        :host([paged-out]) {
            display: none;
        }

        /* Carbon web components: background-hover while its row is chosen or hovered, the text then primary */
        :host([selected]) {
            --_expanded-ink: var(--ui-ink);

            background-color: var(--ui-canvas-hover);
        }

        @media (any-hover: hover) {
            :host(:hover),
            :host([highlighted]) {
                --_expanded-ink: var(--ui-ink);

                background-color: var(--ui-canvas-hover);
            }

            :host([selected][highlighted]) {
                background-color: var(--ui-layer-accent);
            }
        }

        /* Carbon web components: 64px in, no padding above or below (xl: 16 / 16 / 8) */
        td {
            box-sizing: border-box;
            padding: var(--_expanded-pad, 0 0 0 64px);
            border-block-end: 1px solid var(--ui-hairline);
            color: var(--_expanded-ink, var(--ui-ink-muted));
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            vertical-align: middle;
        }

        @media (prefers-reduced-motion: reduce) {
            :host {
                transition: none;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`row`),this.addEventListener(`mouseover`,this.onPointer),this.addEventListener(`mouseout`,this.onPointer)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseover`,this.onPointer),this.removeEventListener(`mouseout`,this.onPointer)}render(){return a`<td role=${this.grid?`gridcell`:`cell`} part="cell" colspan=${this.colSpan}><slot></slot></td>`}};i([o({type:Number,attribute:`colspan`})],N.prototype,`colSpan`,void 0),i([o({type:Boolean,reflect:!0})],N.prototype,`expanded`,void 0),i([o({type:Boolean,reflect:!0})],N.prototype,`filtered`,void 0),i([o({type:Boolean,reflect:!0,attribute:`paged-out`})],N.prototype,`pagedOut`,void 0),i([o({type:Boolean,reflect:!0})],N.prototype,`highlighted`,void 0),i([o({type:Boolean,reflect:!0})],N.prototype,`selected`,void 0),i([o({type:Boolean,attribute:!1})],N.prototype,`grid`,void 0),N=i([n(`ui-table-expanded-row`)],N);var P={"bi-states-from-ascending":[`ascending`,`descending`],"bi-states-from-descending":[`descending`,`ascending`],"tri-states-from-ascending":[`none`,`ascending`,`descending`],"tri-states-from-descending":[`none`,`descending`,`ascending`]};function F(e,t=`tri-states-from-ascending`){let n=P[t],r=n.indexOf(e);return r<0?n[0]:n[(r+1)%n.length]}var I=class{constructor(e){this.drag=null,this.pending=!1,this.onPointerDown=e=>{if(e.button!==0)return;e.preventDefault(),this.freeze();let t=e.currentTarget;t.focus({preventScroll:!0}),t.setPointerCapture?.(e.pointerId),this.drag={startX:e.clientX,startWidth:this.current},this.host.dataset.resizing=``},this.onPointerMove=e=>{this.drag&&this.apply(this.drag.startWidth+(e.clientX-this.drag.startX)*(this.rtl?-1:1))},this.onPointerEnd=()=>{this.drag&&(this.drag=null,delete this.host.dataset.resizing,this.commit())},this.onKeyDown=e=>{let t=S(e.key,{shift:e.shiftKey,rtl:this.rtl,current:this.current,column:this.host,viewWidth:this.viewWidth});t!==void 0&&(e.preventDefault(),e.stopPropagation(),this.freeze(),this.apply(t))},this.onKeyUp=()=>{this.drag||this.commit()},this.onInput=e=>{this.drag||(this.freeze(),this.apply(Number(e.currentTarget.value)),this.commit())},this.onFocus=()=>this.freeze(),this.onBlur=()=>{this.drag||this.commit()},this.host=e}get table(){return this.host.closest(`ui-table`)}get rtl(){return this.host.matches(`:dir(rtl)`)}get viewWidth(){return this.table?.contentWidth??0}get current(){return this.host.width??Math.floor(this.host.getBoundingClientRect().width)}freeze(){this.table?.freezeColumns()}apply(e){this.host.width=oe(this.host,e,this.viewWidth),this.pending=!0}commit(){if(!this.pending)return;this.pending=!1;let e={column:this.host.columnKey,width:this.host.width??this.current};this.host.dispatchEvent(new CustomEvent(`ui-table-column-resize`,{detail:e,bubbles:!0,composed:!0}))}render(e){let t=this.host.width,n=b(this.host);return a`<input
                class="resizer"
                part="resizer"
                type="range"
                min=${n}
                max=${ce(this.host,t??0,this.viewWidth)}
                step="1"
                .value=${String(t??n)}
                aria-label=${e.resizeColumn(this.host.labelText)}
                aria-valuetext=${t===void 0?s:e.columnWidth(t)}
                @pointerdown=${this.onPointerDown}
                @pointermove=${this.onPointerMove}
                @pointerup=${this.onPointerEnd}
                @pointercancel=${this.onPointerEnd}
                @keydown=${this.onKeyDown}
                @keyup=${this.onKeyUp}
                @input=${this.onInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                @click=${e=>e.stopPropagation()}
            /><span class="resize-bar" aria-hidden="true"></span><span class="guide" aria-hidden="true"></span>`}},ve=d`
    :host([resizable]:not([pinned])) {
        position: relative;
    }

    @media (any-hover: hover) {
        :host([resizable]:hover) {
            background-color: var(--ui-table-sort-hover, var(--ui-layer-selected-hover)); /* the header's hover (table-header-cell.ts) */
        }
    }

    /* grab area centred on the edge (IBM: 16px; 24px for WCAG 2.2 target size); the native slider is invisible */
    .resizer {
        position: absolute;
        z-index: 2;
        inset-block-start: 0;
        inset-inline-end: -12px;
        box-sizing: border-box;
        inline-size: 24px;
        block-size: 100%;
        margin: 0;
        padding: 0;
        appearance: none;
        background: transparent;
        cursor: col-resize;
        touch-action: none;
    }

    .resizer::-webkit-slider-thumb {
        inline-size: 16px;
        block-size: 16px;
        border: 0;
        appearance: none;
        background: transparent;
    }

    .resizer::-moz-range-thumb {
        visibility: hidden;
    }

    .resizer:focus {
        outline: none;
    }

    /* the 4px strip and its 2px line, 3px either side of the edge (IBM .datagrid__resizer) */
    .resize-bar {
        position: absolute;
        z-index: 1;
        inset-block: 0;
        inset-inline-end: -3px;
        inline-size: 4px;
        border-inline-end: 2px solid transparent;
        pointer-events: none;
    }

    @media (any-hover: hover) {
        :host([resizable]:hover) .resize-bar {
            border-inline-end-color: var(--ui-hairline-strong);
            background-color: var(--ui-canvas-selected-hover);
        }
    }

    :host([data-resizing]) .resize-bar {
        border-inline-end-color: var(--ui-secondary-hover);
    }

    /* keyboard: a 2px focus line the height of the header with an 8px dot, and a 1px guide down the body */
    .resizer:focus-visible + .resize-bar {
        border-inline-end-color: transparent;
        background: none;
    }

    .resizer:focus-visible + .resize-bar::before {
        position: absolute;
        inset-block: 0;
        inset-inline-end: -1px;
        inline-size: 2px;
        background-color: var(--ui-focus);
        content: '';
    }

    .resizer:focus-visible + .resize-bar::after {
        position: absolute;
        inset-block-start: calc(50% - 4px);
        inset-inline-end: -4px;
        inline-size: 8px;
        block-size: 8px;
        border-radius: 50%;
        background-color: var(--ui-focus);
        content: '';
    }

    .guide {
        position: absolute;
        z-index: 1;
        inset-block-start: 100%;
        inset-inline-end: -0.5px;
        display: none;
        inline-size: 1px;
        block-size: var(--_resize-guide, 0);
        background-color: var(--ui-ghost-active);
        pointer-events: none;
    }

    :host([data-resizing]) .guide,
    .resizer:focus-visible ~ .guide {
        display: block;
    }

    @media (forced-colors: active) {
        .resizer:focus-visible + .resize-bar::before,
        .resizer:focus-visible + .resize-bar::after,
        .guide {
            background-color: Highlight;
        }

        :host([data-resizing]) .resize-bar,
        :host([resizable]:hover) .resize-bar {
            border-inline-end-color: Highlight;
        }
    }
`,ye=e`<path d="M16 4 6 14l1.41 1.41L15 7.83V28h2V7.83l7.59 7.58L26 14 16 4z" />`,be=e`<path d="M27.6 20.6 24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6 6-6-1.4-1.4zM9 4l-6 6 1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10 9 4z" />`,L=class extends r{constructor(...e){super(...e),this.isSortable=!1,this.sortActive=!1,this.column=``,this.columnHidden=!1,this.hideable=!0,this.resizable=!1,this.options=[],this.resize=new I(this),this.localize=new m(this),this.onSortClick=()=>{let e=this.sortDirection??`none`,t=F(e,this.sortCycle),n=new CustomEvent(`ui-table-header-cell-sort`,{detail:{oldSortDirection:e,sortDirection:t},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(n)&&(this.sortDirection=t)}}static{this.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[u,T,ve,d`
            /* the padding is the shadow root's .content, not :host's: a page-level reset (Tailwind preflight) beats :host rules */
            :host {
                display: table-cell;
                background-color: var(--ui-table-header-background, var(--ui-layer-accent));
                color: var(--ui-ink);
                font: var(--ui-font-body-emphasis);
                font-weight: 600;
                line-height: 1.42857; /* heading-01, unitless as Carbon's token: 20px would put the label 1px lower */
                letter-spacing: var(--ui-tracking-body);
                text-align: start;
                vertical-align: var(--_align, middle);
            }

            .content {
                padding-block-start: var(--_head-pad, 0px);
                padding-inline: var(--ui-space-md);
            }

            :host([sort-direction]) .content {
                padding-inline: 0;
            }

            /* pinned headers stay over the header cells scrolling under them */
            :host([pinned]) {
                z-index: 3;
            }

            /* the table's sticky-header: the header stays at the top of the scroll box, a rule under it */
            :host {
                position: var(--_head-position, static);
                inset-block-start: 0;
                z-index: var(--_head-z, auto);
                box-shadow:
                    var(--_pin-edge, 0 0 #0000),
                    var(--_head-edge, 0 0 #0000);
            }

            :host([resizable]:not([pinned])) {
                position: var(--_head-anchor, relative);
            }

            .sort {
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                inline-size: 100%;
                min-block-size: var(--_sort-row, 48px);
                margin: 0;
                padding: 0;
                padding-inline-start: var(--ui-space-md);
                border: 0;
                background-color: var(--ui-table-header-background, var(--ui-layer-accent));
                color: var(--ui-ink);
                font: inherit;
                letter-spacing: inherit;
                text-align: start;
                cursor: pointer;
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                    outline var(--ui-duration-fast) var(--ui-easing-entrance); /* Carbon .cds--table-sort, fast-01 entrance */
            }

            /* in the button the label is 18px tall (Carbon .cds--table-sort); a plain header keeps heading-01's 20px */
            .sort .label {
                line-height: 18px;
            }

            /* data-table-column-hover, under the pointer and on the sorted column; --ui-table-sort-hover / --ui-table-sorted-background:
               a design can keep the sorted header on the header fill (its arrow shows the sort) */
            .sort:hover,
            :host([sort-active]) .sort:hover {
                background-color: var(--ui-table-sort-hover, var(--ui-layer-selected-hover));
            }

            :host([sort-active]) .sort:not(:hover) {
                background-color: var(--ui-table-sorted-background, var(--ui-layer-selected-hover));
            }

            :host([sort-active]) .icon-sorted {
                fill: var(--ui-table-sorted-icon, var(--ui-icon-primary));
            }

            .sort:focus-visible {
                outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
                outline-offset: -2px;
            }

            svg {
                flex-shrink: 0;
                inline-size: 20px;
                min-inline-size: 16px;
                block-size: 20px;
                margin-inline: var(--ui-space-xs);
                fill: var(--ui-icon-primary);
            }

            .icon-unsorted {
                opacity: 0;
            }

            .sort:hover .icon-unsorted,
            .sort:focus-visible .icon-unsorted {
                opacity: 1;
            }

            .icon-sorted {
                transition: transform 250ms cubic-bezier(0.5, 0, 0.1, 1); /* Carbon $transition-base, $standard-easing */
            }

            :host([sort-direction='descending']) .icon-sorted {
                transform: rotate(180deg);
            }

            @media (prefers-reduced-motion: reduce) {
                .icon-sorted {
                    transition: none;
                }
            }

            @media (forced-colors: active) {
                svg {
                    fill: ButtonText;
                }

                :host([sort-active]) .sort {
                    outline: 1px solid Highlight;
                    outline-offset: -1px;
                }
            }
        `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`columnheader`)}willUpdate(e){this.isSortable&&!this.sortDirection&&(this.sortDirection=`none`),e.has(`sortDirection`)&&(this.sortActive=!!this.sortDirection&&this.sortDirection!==`none`)}updated(e){e.has(`sortDirection`)&&p(this,`aria-sort`,this.sortDirection??null),e.has(`width`)&&(this.style.inlineSize=this.width===void 0?``:`${this.width}px`)}get labelText(){return(this.textContent??``).trim()}get columnKey(){return this.column?this.column:String(this.parentElement?[...this.parentElement.children].filter(e=>e.localName===this.localName).indexOf(this):0)}renderResize(){return this.resizable?this.resize.render(this.localize.t.dataTable):s}sortHint(e){let t=this.localize.t.dataTable,n=F(this.sortDirection??`none`,this.sortCycle),r=t.unsort;return n===`ascending`?r=t.sortAscending:n===`descending`&&(r=t.sortDescending),r.replaceAll(`{header}`,e)}render(){let e=a`<span class="label" part="label-text"><slot @slotchange=${()=>this.requestUpdate()}></slot></span>`;if(!this.sortDirection)return a`<div class="content" part="content">${e}</div>${this.renderResize()}`;let t=this.labelText,n=this.sortDirection!==`none`;return a`<div class="content" part="content"><button class="sort" part="sort-button" type="button" title=${t} aria-describedby="hint" @click=${this.onSortClick}>
                ${e}
                ${n?a`<svg class="icon-sorted" part="sort-icon" viewBox="0 0 32 32" aria-hidden="true">${ye}</svg>`:a`<svg class="icon-unsorted" part="sort-icon" viewBox="0 0 32 32" aria-hidden="true">${be}</svg>`}
            </button></div>
            <span class="sr-only" id="hint">${this.sortHint(t)}</span>${this.renderResize()}`}};i([o({type:Boolean,reflect:!0,attribute:`is-sortable`})],L.prototype,`isSortable`,void 0),i([o({type:Boolean,reflect:!0,attribute:`sort-active`})],L.prototype,`sortActive`,void 0),i([o({reflect:!0,attribute:`sort-cycle`})],L.prototype,`sortCycle`,void 0),i([o({reflect:!0,attribute:`sort-direction`})],L.prototype,`sortDirection`,void 0),i([o({reflect:!0})],L.prototype,`column`,void 0),i([o({type:Boolean,reflect:!0,attribute:`column-hidden`})],L.prototype,`columnHidden`,void 0),i([o({reflect:!0,converter:c})],L.prototype,`hideable`,void 0),i([o({reflect:!0})],L.prototype,`pinned`,void 0),i([o({type:Boolean,reflect:!0})],L.prototype,`resizable`,void 0),i([o({type:Number,reflect:!0})],L.prototype,`width`,void 0),i([o({type:Number,attribute:`min-width`})],L.prototype,`minWidth`,void 0),i([o({type:Number,attribute:`max-width`})],L.prototype,`maxWidth`,void 0),i([o({reflect:!0})],L.prototype,`editable`,void 0),i([o({type:Array})],L.prototype,`options`,void 0),i([o({attribute:!1})],L.prototype,`validate`,void 0),L=i([n(`ui-table-header-cell`)],L);var R=class extends r{static{this.styles=d`
        :host {
            display: block;
            margin: 0;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }
    `}render(){return a`<slot></slot>`}};R=i([n(`ui-table-header-description`)],R);var z=`button, a[href], input, select, textarea, [tabindex], ui-checkbox, ui-radio, ui-button, ui-link`;function B(e){e.tabIndex=-1;let t=()=>{for(let t of e.shadowRoot?.querySelectorAll(`button, a[href], input, select, textarea, [tabindex]`)??[])t.tabIndex=-1};t(),e.updateComplete?.then(t)}var xe=class{constructor(e,t){this.active=null,this.stop=null,this.editing=null,this.touched=new Set,this.outOfTabOrder=new WeakSet,this.enabled=!1,this.onKeydown=e=>{let t=e;if(!this.enabled)return;if(this.editing){t.composedPath()[0]===this.editorOf(this.editing.cell)&&this.onEditorKeydown(t,this.editing.cell);return}let n=this.cellOf(t);if(t.composedPath()[0]!==n?.cell)return;let r=this.source.shownRows(),i=x(t.key,t.ctrlKey||t.metaKey,{row:r.indexOf(n.row),cell:n.index},r.length,n.row.gridCells().length);if(i){t.preventDefault(),this.moveTo(r[i.row],i.cell);return}let a=n.cell;if(a.editable){let e=se(t,a.editable);if(!e)return;t.preventDefault(),this.start(a,e===`type`?t.key:void 0)}else if(t.key===`Enter`||t.key===` `){let e=a.querySelector(z);if(!e)return;t.preventDefault(),e.click()}},this.onFocusIn=e=>{if(!this.enabled)return;let t=this.cellOf(e);!t||this.active?.row===t.row&&this.active.index===t.index||(this.active={row:t.row,index:t.index},this.setStop(t.cell))},this.onClick=e=>{if(!this.enabled)return;let t=this.cellOf(e);t&&!t.cell.editing&&(e.composedPath()[0].closest?.(`.edit-icon`)?this.start(t.cell):t.cell.matches(`:focus-within`)||t.cell.focus())},this.onDoubleClick=e=>{if(!this.enabled)return;let t=this.cellOf(e)?.cell;t?.editable&&!t.editing&&this.start(t)},this.onFocusOut=e=>{let t=this.editing;t&&e.composedPath()[0]===this.editorOf(t.cell)&&e.relatedTarget!==t.cell&&(this.commit()||t.cell.updateComplete.then(()=>t.cell.focusEditor(!1)))},this.table=e,this.source=t}get on(){return this.enabled}get stopCell(){return this.enabled?this.stop:null}sync(){let e=this.source.columns().some(e=>!!e.editable);if(!e&&!this.enabled)return;this.enabled=e;let t=this.table.getAttribute(`role`);(t===`table`||t===`grid`)&&this.table.setAttribute(`role`,e?`grid`:`table`);for(let t of this.table.querySelectorAll(`:scope > ui-table-head > ui-table-header-row, :scope > ui-table-body > ui-table-row, :scope > ui-table-body > ui-table-expanded-row`))t.grid=e;if(!e){this.release();return}for(let e of this.table.querySelectorAll(`:scope > ui-table-body > ui-table-row`))this.syncCells(e);let n=this.source.shownRows();(!this.active||!n.includes(this.active.row))&&(this.active=n[0]?{row:n[0],index:0}:null),Promise.all(n.map(e=>e.updateComplete)).then(()=>this.settle())}syncCells(e){for(let t of e.querySelectorAll(`:scope > ui-table-cell`)){this.touched.add(t),t.getAttribute(`role`)===`cell`&&t.setAttribute(`role`,`gridcell`),t!==this.stop&&(t.tabIndex=-1),t.editable?(t.removeAttribute(`aria-readonly`),t.setAttribute(`aria-description`,this.source.editHint())):(t.setAttribute(`aria-readonly`,`true`),t.removeAttribute(`aria-description`));for(let e of t.querySelectorAll(z))this.outOfTabOrder.has(e)||(this.outOfTabOrder.add(e),B(e))}}settle(){if(!this.enabled)return;let e=this.active?.row.gridCells()??[];this.active&&this.active.index>=e.length&&(this.active.index=0);let t=e[this.active?.index??0];t&&this.setStop(t)}release(){for(let e of this.touched)e.getAttribute(`role`)===`gridcell`&&e.setAttribute(`role`,`cell`),e.removeAttribute(`tabindex`),e.removeAttribute(`aria-readonly`),e.removeAttribute(`aria-description`);this.touched.clear(),this.active=null,this.stop=null}setStop(e){this.stop&&this.stop!==e&&(this.stop.tabIndex=-1),e.tabIndex=0,this.stop=e}cellOf(e){let t=e.composedPath(),n=this.source.shownRows(),r=t.findIndex(e=>n.includes(e));if(r<0)return null;let i=t[r],a=i.gridCells();for(let e=r-1;e>=0;e--){let n=a.indexOf(t[e]);if(n>=0)return{row:i,index:n,cell:a[n]}}return null}moveTo(e,t){let n=e?.gridCells()[t];e&&n&&(this.active={row:e,index:t},this.setStop(n),n.focus())}headerOf(e){let t=[...e.parentElement?.children??[]].filter(e=>e.localName===`ui-table-cell`).indexOf(e);return this.source.columns()[t]}editorOf(e){return e.shadowRoot?.querySelector(`.editor`)??null}valueOf(e,t){let n=e.getAttribute(`sort-value`);if(n!==null)return n;let r=e.textContent?.trim()??``;return e.editable===`select`?t?.options.find(e=>e.label===r)?.value??r:r}start(e,t){let n=this.headerOf(e),r=e.parentElement,i=this.valueOf(e,n);this.editing={cell:e,previous:i};let a=r.querySelector(`:scope > ui-table-cell`)?.textContent?.trim();e.editorLabel=(n?.labelText??``)+(a?`, ${a}`:``),e.editorOptions=n?.options??[],e.editorError=``,e.draft=t??i,e.editing=!0,e.updateComplete.then(()=>e.focusEditor(t===void 0))}stopEditing(e,t){this.editing=null,e.editing=!1,e.editorError=``,t&&e.updateComplete.then(()=>e.focus())}commit(e=!1){let t=this.editing;if(!t)return!0;let{cell:n,previous:r}=t,i=this.headerOf(n),a=y(n.editable??`text`,n.editorValue),o=i?.validate?.(a,n)??``;if(o)return n.editorError=o,!1;if(this.stopEditing(n,e),String(a)===r)return!0;let s={row:n.parentElement,cell:n,column:i?.columnKey??``,value:a,previous:r};return n.dispatchEvent(new CustomEvent(`ui-table-cell-edit`,{detail:s,bubbles:!0,composed:!0,cancelable:!0}))&&this.write(n,a,i),!0}write(e,t,n){let r=String(t),i=e.editable===`select`;e.textContent=i?n?.options.find(e=>e.value===r)?.label??r:r,(i||e.hasAttribute(`sort-value`))&&e.setAttribute(`sort-value`,r),e.removeAttribute(`csv-value`)}onEditorKeydown(e,t){if(e.stopPropagation(),e.key===`Escape`)e.preventDefault(),this.stopEditing(t,!0);else if(e.key===`Enter`)e.preventDefault(),this.commit(!0);else if(e.key===`Tab`){e.preventDefault();let n=this.nextEditable(t,e.shiftKey?-1:1);if(!this.commit(!n))return;n&&this.start(n)}}nextEditable(e,t){let n=this.source.shownRows().flatMap(e=>[...e.querySelectorAll(`:scope > ui-table-cell`)].filter(e=>e.editable&&!e.columnHidden));return n[n.indexOf(e)+t]??null}},Se=e`<path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" />`,V=class extends r{constructor(...e){super(...e),this.selected=!1,this.disabled=!1,this.radio=!1,this.hideCheckbox=!1,this.selectionName=``,this.selectionValue=``,this.selectionLabel=``,this.expandable=!1,this.expanded=!1,this.batchExpansion=!1,this.filtered=!1,this.highlighted=!1,this.expandColumn=!1,this.indeterminate=!1,this.tabStop=!1,this.pagedOut=!1,this.pinStart=!1,this.filler=!1,this.grid=!1,this.localize=new m(this),this.header=!1,this.onPointer=e=>{if(this.header)return;let t=this.expandedRow;t&&(t.highlighted=e.type===`mouseover`)},this.onSelectionChange=e=>{e.stopPropagation();let t=e.target,n=this.radio||t.checked,r={selected:n},i=this.header?`ui-table-change-selection-all`:`ui-table-row-change-selection`;this.dispatchEvent(new CustomEvent(i,{detail:r,bubbles:!0,composed:!0,cancelable:!0}))&&!this.header?this.selected=n:t.checked=this.selected},this.onRadioKeydown=e=>{let t=getComputedStyle(this).direction===`rtl`,n={ArrowDown:1,ArrowRight:t?-1:1,ArrowUp:-1,ArrowLeft:t?1:-1}[e.key];n!==void 0&&(e.preventDefault(),this.dispatchEvent(new CustomEvent(`ui-table-radio-move`,{detail:{delta:n},bubbles:!0})))}}static{this.styles=d`
        :host {
            display: table-row;
            block-size: var(--_row, 48px);
        }

        /* left out by the table's search, or on another page */
        :host([filtered]),
        :host([paged-out]) {
            display: none;
        }

        /* pinned first column: the chevron and checkbox cells before it stay in view too (from 672px, as IBM Products) */
        @media (min-width: 672px) {
            .pin {
                position: sticky;
                z-index: 1;
                background: linear-gradient(var(--_row-tint, transparent), var(--_row-tint, transparent)), var(--_row-base, var(--ui-surface-1));
            }

            .expand.pin {
                inset-inline-start: 0;
            }

            .select.pin {
                inset-inline-start: var(--_pin-select-at, 0px);
            }
        }

        /* after a resize the columns keep their widths; this cell takes the rest of the row */
        .filler {
            display: table-cell;
            padding: 0;
            box-shadow: inset 0 -1px 0 var(--_row-rule-end, var(--ui-hairline));
        }

        /* the cells the row adds before its own: a rule below like the author's cells (a shadow, as theirs) */
        .select,
        .expand {
            display: table-cell;
            box-sizing: border-box;
            box-shadow: inset 0 -1px 0 var(--_row-rule-end, var(--ui-hairline));
            vertical-align: var(--_align, middle);
        }

        @media (forced-colors: active) {
            .filler,
            .select,
            .expand {
                border-block-end: 1px solid; /* shadows are dropped */
            }
        }

        /* grid cells (an editable table) */
        .select:focus-visible,
        .expand:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* selection column (Carbon web components .cds--table-column-checkbox): a 32px checkbox + 16 / 4 padding */
        .select {
            box-sizing: content-box;
            inline-size: 32px;
            padding-block: var(--_select-pad, 0);
            padding-inline: var(--ui-space-md) var(--ui-space-xxs);
        }

        /* beside the chevron column it tightens to 6 / 6 (Carbon web components: xs, sm, md and xl; lg keeps 16 / 4) */
        .select.after-expand {
            padding-inline: var(--_select-inline-after-expand, var(--ui-space-md) var(--ui-space-xxs));
        }

        /* radio column: as wide as Carbon web components' (its header keeps a hidden 42px checkbox), the circle at the start */
        .select.radio {
            inline-size: 42px;
            padding-block-start: var(--_radio-pad, var(--_select-pad, 0));
        }

        /* the square 3px in and 1px down a 21px checkbox (Carbon .cds--checkbox-label::before) */
        .select ui-checkbox {
            display: block;
            block-size: 21px;
            margin-inline-start: 3px;
        }

        .select ui-checkbox::part(base) {
            padding-block: 0;
        }

        /* Carbon radio cell: the 18px circle 2px in, margins 1 / -2 / 2 / 2, in a 21px row */
        .select ui-radio {
            justify-content: flex-start;
            gap: 0;
            block-size: 21px;
            min-height: 0;
            padding-block: 0;
        }

        .select ui-radio::part(circle) {
            margin: 1px -2px 2px 2px;
        }

        /* expand column (Carbon .table-expand): 40px, padding 8 / 0 / 8 / 8, a 32px chevron button */
        .expand {
            inline-size: 40px;
            padding: var(--_expand-pad, 8px 0 8px 8px);
        }

        .expand-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            inline-size: 32px;
            block-size: var(--_expand-button, 32px);
            margin: 0;
            padding: 0 var(--ui-space-xs);
            border: 0;
            border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok); the ring follows */
            background: transparent;
            cursor: pointer;
            vertical-align: middle;
        }

        .expand-button:focus-visible {
            outline: none;
            box-shadow: inset 0 0 0 var(--ui-focus-width, 2px) var(--ui-focus);
        }

        .expand-button svg {
            inline-size: 16px;
            block-size: 16px;
            fill: var(--ui-icon-primary);
            transform: rotate(90deg);
            transition: transform 150ms var(--ui-easing); /* Carbon $duration-moderate-01 */
        }

        .expand-button[aria-expanded='true'] svg {
            transform: rotate(270deg);
        }

        @media (prefers-reduced-motion: reduce) {
            .expand-button svg {
                transition: none;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`row`),this.addEventListener(`mouseover`,this.onPointer),this.addEventListener(`mouseout`,this.onPointer)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseover`,this.onPointer),this.removeEventListener(`mouseout`,this.onPointer)}get expandedRow(){let e=this.nextElementSibling;return e?.localName===`ui-table-expanded-row`?e:null}updated(e){if(this.grid&&!this.header)for(let e of this.renderRoot.querySelectorAll(`.select ui-checkbox, .select ui-radio`))B(e);let t=this.expandedRow;t&&(e.has(`expanded`)&&(t.expanded=this.expanded),e.has(`selected`)&&(t.selected=this.selected),e.has(`highlighted`)&&(t.highlighted=this.highlighted))}toggleExpanded(e=!this.expanded){let t={detail:{expanded:e},bubbles:!0,composed:!0,cancelable:!0};this.dispatchEvent(new CustomEvent(`ui-table-row-expando-beingtoggled`,t))&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`ui-table-row-expando-toggled`,{...t,cancelable:!1})))}get rowName(){let e=this.querySelector(`:scope > ui-table-cell`)?.textContent?.trim();return e?`, ${e}`:``}renderExpandCell(){let e=this.localize.t.dataTable,t=this.header?this.batchExpansion:this.expandable,n=this.expanded?e.collapseRow:e.expandRow;this.header?n=this.expanded?e.collapseAll:e.expandAll:n+=this.rowName;let r=this.expanded?`true`:`false`,i=a`<button class="expand-button" part="expand-button" type="button" tabindex=${this.bodyGridIndex} aria-label=${n} aria-expanded=${r} @click=${()=>this.toggleExpanded()}>
            <svg viewBox="0 0 16 16" aria-hidden="true">${Se}</svg>
        </button>`;return a`<div class="expand ${this.pinStart?`pin`:``}" part="expand-cell" role=${this.cellRole} tabindex=${this.bodyGridIndex} aria-readonly=${this.grid?`true`:s}>${t?i:s}</div>`}get cellRole(){return this.grid?`gridcell`:`cell`}get bodyGridIndex(){return this.grid&&!this.header?`-1`:s}gridCells(){let e=[...this.renderRoot.querySelectorAll(`.expand, .select`)],t=[...this.querySelectorAll(`:scope > ui-table-cell`)].filter(e=>!e.columnHidden);return[...e,...t]}focusSelection(){this.renderRoot.querySelector(`.select ui-radio, .select ui-checkbox`)?.focus()}renderSelectAll(){if(this.radio||this.hideCheckbox)return s;let e=this.localize.t.dataTable,t=this.selected||this.indeterminate?e.unselectAll:e.selectAll;return a`<ui-checkbox hide-label .checked=${this.selected} .indeterminate=${this.indeterminate} ?disabled=${this.disabled} @change=${this.onSelectionChange}>${this.selectionLabel||t}</ui-checkbox>`}renderRowSelection(){let e=this.localize.t.dataTable,t=this.selectionLabel||(this.selected?e.unselectRow:e.selectRow)+this.rowName;return this.radio?a`<ui-radio aria-label=${t} value=${this.selectionValue} .checked=${this.selected} ?disabled=${this.disabled} tabindex=${this.tabStop?0:-1} @click=${this.onSelectionChange} @keydown=${this.onRadioKeydown}></ui-radio>`:this.hideCheckbox?s:a`<ui-checkbox hide-label name=${this.selectionName} value=${this.selectionValue||`on`} .checked=${this.selected} ?disabled=${this.disabled} @change=${this.onSelectionChange}>${t}</ui-checkbox>`}renderSelectCell(){let e=this.header?this.renderSelectAll():this.renderRowSelection(),t=[`select`,this.radio?`radio`:``,this.expandColumn?`after-expand`:``,this.pinStart?`pin`:``].join(` `);return a`<div class=${t} part="selection-cell" role=${this.cellRole} tabindex=${this.bodyGridIndex} aria-readonly=${this.grid?`true`:s}>${e}</div>`}render(){let e=this.filler?a`<div class="filler" aria-hidden="true"></div>`:s;return a`${this.expandColumn?this.renderExpandCell():s}${this.selectionName?this.renderSelectCell():s}<slot></slot>${e}`}};i([o({type:Boolean,reflect:!0})],V.prototype,`selected`,void 0),i([o({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),i([o({type:Boolean,reflect:!0})],V.prototype,`radio`,void 0),i([o({type:Boolean,reflect:!0,attribute:`hide-checkbox`})],V.prototype,`hideCheckbox`,void 0),i([o({attribute:`selection-name`})],V.prototype,`selectionName`,void 0),i([o({attribute:`selection-value`})],V.prototype,`selectionValue`,void 0),i([o({attribute:`selection-label`})],V.prototype,`selectionLabel`,void 0),i([o({type:Boolean,reflect:!0})],V.prototype,`expandable`,void 0),i([o({type:Boolean,reflect:!0})],V.prototype,`expanded`,void 0),i([o({type:Boolean,reflect:!0,attribute:`batch-expansion`})],V.prototype,`batchExpansion`,void 0),i([o({type:Boolean,reflect:!0})],V.prototype,`filtered`,void 0),i([o({type:Boolean,reflect:!0})],V.prototype,`highlighted`,void 0),i([o({type:Boolean,attribute:!1})],V.prototype,`expandColumn`,void 0),i([o({type:Boolean,attribute:!1})],V.prototype,`indeterminate`,void 0),i([o({type:Boolean,attribute:!1})],V.prototype,`tabStop`,void 0),i([o({type:Boolean,reflect:!0,attribute:`paged-out`})],V.prototype,`pagedOut`,void 0),i([o({type:Boolean,attribute:!1})],V.prototype,`pinStart`,void 0),i([o({type:Boolean,attribute:!1})],V.prototype,`filler`,void 0),i([o({type:Boolean,attribute:!1})],V.prototype,`grid`,void 0);var H=class extends V{constructor(...e){super(...e),this.even=!1,this.odd=!1}static{this.styles=[V.styles,d`
            :host {
                transition: background-color var(--ui-duration-fast) var(--ui-easing-entrance); /* Carbon fast-01, entrance */
            }

            /*
             * zebra: the body marks the rows; the cells read the rules from these properties (and pinned cells the row's
             * colour: --_row-base under --_row-tint)
             */
            :host([odd]) {
                --_row-rule-end: var(--ui-surface-1);
            }

            :host([even]) {
                --_row-rule-end: var(--ui-layer-background);
                --_row-base: var(--ui-layer-background);

                background-color: var(--ui-layer-background);
            }

            /* the chosen row's mark on its start edge, in its first cell: none in Carbon (Kanok: an indigo mark) */
            :host([selected]) :is(.expand, .select):first-child,
            :host([selected]) slot:first-child::slotted(:first-child) {
                background-image: var(--ui-table-row-thread, none);
            }

            /* chosen (Carbon web components: layer-accent; the rule below stays border-subtle) */
            :host([selected]) {
                --_row-ink: var(--ui-ink);
                --_row-base: var(--ui-table-row-selected, var(--ui-layer-accent));

                background-color: var(--ui-table-row-selected, var(--ui-layer-accent));
            }

            /* open: a subtle rule joins it to its expanded row, none under the chevron */
            :host([expanded]) {
                --_row-rule-end: var(--ui-hairline);
            }

            :host([expanded]) .expand {
                box-shadow: none;
            }

            @media (any-hover: hover) {
                /* Carbon web components: background-hover (translucent) under the cells, layer-hover rules, primary text */
                :host(:hover),
                :host([highlighted]) {
                    --_row-rule-end: var(--ui-ghost-hover);
                    --_row-ink: var(--ui-ink);
                    --_row-tint: var(--ui-canvas-hover);

                    background-color: var(--ui-canvas-hover);
                }

                :host([selected]:hover),
                :host([selected][highlighted]) {
                    --_row-rule-end: var(--ui-layer-selected-hover);
                    --_row-base: var(--ui-layer-selected-hover);
                    --_row-tint: transparent;

                    background-color: var(--ui-layer-selected-hover); /* data-table-column-hover */
                }

                :host([expanded]:hover),
                :host([expanded][highlighted]) {
                    --_row-rule-end: var(--ui-hairline);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                :host {
                    transition: none;
                }
            }

            @media (forced-colors: active) {
                :host([selected]) {
                    --_row-rule-end: Highlight;
                }
            }
        `]}};i([o({type:Boolean,reflect:!0})],H.prototype,`even`,void 0),i([o({type:Boolean,reflect:!0})],H.prototype,`odd`,void 0),H=i([n(`ui-table-row`)],H);var U=class extends V{constructor(...e){super(...e),this.header=!0}static{this.styles=[V.styles,d`
            .select,
            .expand,
            .filler {
                position: var(--_head-position, static);
                inset-block-start: 0;
                z-index: var(--_head-z, auto);
                border: 0;
                box-shadow: var(--_head-edge, none);
                background: var(--ui-table-header-background, var(--ui-layer-accent)); /* as the header cells */
            }

            .pin {
                z-index: 3;
            }

            /* a pinned first column's chevron / checkbox header cells stick sideways too (the rule above set position) */
            @media (min-width: 672px) {
                .pin {
                    position: sticky;
                }
            }
        `]}};U=i([n(`ui-table-header-row`)],U);var W=class extends r{static{this.styles=d`
        :host {
            display: block;
            margin: 0;
            color: var(--ui-ink);
            font: var(--ui-font-subhead); /* heading-03 */
        }
    `}render(){return a`<slot></slot>`}};W=i([n(`ui-table-header-title`)],W);var G=class extends r{static{this.styles=d`
        :host {
            display: table-header-group;
            background-color: var(--ui-table-header-background, var(--ui-layer-accent));
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`rowgroup`)}render(){return a`<slot></slot>`}};G=i([n(`ui-table-head`)],G);var K=a`<span class="bone bar"></span>`,q=class extends r{constructor(...e){super(...e),this.headers=[],this.columnCount=5,this.rowCount=5,this.showHeader=!0,this.showToolbar=!0,this.zebra=!1}static{this.styles=[g,d`
            :host {
                display: block;
            }

            .container {
                padding-block-start: 2px; /* spacing-01 */
            }

            .header {
                padding-block: var(--ui-space-md) var(--ui-space-lg);
                padding-inline: var(--ui-space-md);
                background-color: var(--ui-surface-1);
            }

            .bar {
                display: block;
                inline-size: 64px;
                block-size: 16px;
            }

            .title-bar {
                inline-size: 120px;
                block-size: 24px;
            }

            .description-bar {
                inline-size: 160px;
                margin-block-start: var(--ui-space-xs);
            }

            .toolbar {
                display: flex;
                justify-content: flex-end;
                block-size: 48px;
                background-color: var(--ui-surface-1);
            }

            .toolbar .bar {
                inline-size: 150px;
                block-size: 100%;
            }

            table {
                inline-size: 100%;
                border-collapse: collapse;
                border-spacing: 0;
            }

            tr {
                block-size: 48px;
            }

            th,
            td {
                box-sizing: border-box;
                padding-inline: var(--ui-space-md);
                text-align: start;
                vertical-align: middle;
            }

            th {
                background-color: var(--ui-table-header-background, var(--ui-layer-accent));
                color: var(--ui-ink);
                font: var(--ui-font-body-emphasis);
                font-weight: 600;
                line-height: 1.42857; /* heading-01 */
                letter-spacing: var(--ui-tracking-body);
            }

            th .bar {
                background-color: var(--ui-skeleton-element);
            }

            /* narrower than its columns (a phone), the bars shrink with their cells instead of widening the page */
            table .bar {
                inline-size: min(64px, 100%);
            }

            tbody {
                background-color: var(--ui-surface-1);
            }

            td {
                border-block-end: 1px solid var(--ui-hairline);
            }

            :host([zebra]) tbody tr:nth-child(odd) td {
                border-block-end-color: var(--ui-surface-1);
            }

            :host([zebra]) tbody tr:nth-child(even) {
                background-color: var(--ui-layer-background);
            }

            :host([zebra]) tbody tr:nth-child(even) td {
                border-block-end-color: var(--ui-layer-background);
            }
        `]}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}renderHeaderCell(e){return a`<th>${this.headers[e]??K}</th>`}renderRow(e){let t=a`<td>${K}</td>`;return a`<tr>${e.map(()=>t)}</tr>`}render(){let e=this.headers.length||Math.max(1,this.columnCount),t=Array.from({length:e},(e,t)=>t),n=Array.from({length:Math.max(0,this.rowCount)},(e,t)=>t),r=this.showHeader?a`<div class="header"><span class="bone bar title-bar"></span><span class="bone bar description-bar"></span></div>`:s,i=this.showToolbar?a`<div class="toolbar"><span class="bone bar"></span></div>`:s;return a`<div class="container">
            ${r}${i}
            <table part="table">
                <thead>
                    <tr>
                        ${t.map(e=>this.renderHeaderCell(e))}
                    </tr>
                </thead>
                <tbody>
                    ${n.map(()=>this.renderRow(t))}
                </tbody>
            </table>
        </div>`}};i([o({attribute:!1})],q.prototype,`headers`,void 0),i([o({type:Number,reflect:!0,attribute:`column-count`})],q.prototype,`columnCount`,void 0),i([o({type:Number,reflect:!0,attribute:`row-count`})],q.prototype,`rowCount`,void 0),i([o({reflect:!0,attribute:`show-header`,converter:c})],q.prototype,`showHeader`,void 0),i([o({reflect:!0,attribute:`show-toolbar`,converter:c})],q.prototype,`showToolbar`,void 0),i([o({type:Boolean,reflect:!0})],q.prototype,`zebra`,void 0),q=i([n(`ui-table-skeleton`)],q);var J=class extends r{constructor(...e){super(...e),this.hasBatchActions=!1}static{this.styles=d`
        :host {
            display: flex;
            justify-content: flex-end;
            inline-size: 100%;
            block-size: var(--_toolbar, 48px);
            transform: translate3d(0, 0, 0);
            transition:
                transform var(--ui-duration-moderate) var(--ui-easing),
                clip-path var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([has-batch-actions]) {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transform: translate3d(0, var(--_toolbar, 48px), 0);
        }

        /* the controls keep their size; the search shrinks to what is left (it is 100% wide when open), so it stays in the toolbar */
        ::slotted(:not(ui-table-toolbar-search)) {
            flex-shrink: 0;
        }

        @media (prefers-reduced-motion: reduce) {
            :host {
                transition: none;
            }
        }
    `}updated(e){e.has(`hasBatchActions`)&&(this.inert=this.hasBatchActions)}render(){return a`<slot></slot>`}};i([o({type:Boolean,reflect:!0,attribute:`has-batch-actions`})],J.prototype,`hasBatchActions`,void 0),J=i([n(`ui-table-toolbar-content`)],J);var Y=class extends f{constructor(...e){super(...e),this.persistent=!1,this.tableLocalize=new m(this),this.caretAfter=null,this.onBeforeInput=e=>{let{inputType:t,data:n,target:r}=e,i=r;this.caretAfter=t===`insertText`&&n&&i.selectionStart!==null?i.selectionStart+n.length:null},this.keepCaret=e=>{let t=e.target,n=this.caretAfter;this.caretAfter=null,n!==null&&t.selectionStart!==n&&n<=t.value.length&&t.setSelectionRange(n,n)},this.onToolbarFocusIn=()=>{this.expanded=!0},this.onToolbarFocusOut=()=>{setTimeout(()=>{!this.persistent&&this.value===``&&!this.matches(`:focus-within`)&&(this.expanded=!1)})}}static{this.styles=[...f.styles,d`
            :host {
                flex: 0 1 auto;
                min-inline-size: 0;
            }

            input {
                background-color: var(--ui-surface-1);
                transition:
                    outline-color var(--ui-duration-moderate) var(--ui-easing),
                    background-color var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--search-input, fast-02 */
            }

            :host([persistent]),
            :host([expanded]) {
                inline-size: 100%;
            }

            :host([persistent]) input {
                border-block-end: none;
            }

            /* collapsed: a magnifier square; the text box is there but unseen (Carbon .cds--toolbar-search-container-expandable) */
            :host(:not([persistent])) {
                inline-size: var(--_toolbar, 48px);
                transition:
                    inline-size 300ms cubic-bezier(0.5, 0, 0.1, 1),
                    background-color var(--ui-duration-moderate) var(--ui-easing-entrance);
            }

            :host(:not([persistent])[expanded]) {
                inline-size: 100%;
            }

            :host(:not([persistent]):not([expanded])) input {
                padding: 0;
                opacity: 0;
                cursor: pointer;
            }

            @media (any-hover: hover) {
                :host(:not([persistent]):not([expanded]):hover) {
                    background-color: var(--ui-ghost-hover); /* field-hover */
                }

                :host([persistent]) input:hover {
                    background-color: var(--ui-ghost-hover);
                }
            }

            /* a search under way keeps a fill (--ui-field-open-background: a design can keep the field's own) */
            :host([data-has-value]) input {
                background-color: var(--ui-field-open-background, var(--ui-ghost-hover));
            }

            @media (prefers-reduced-motion: reduce) {
                :host,
                input {
                    transition: none;
                }
            }
        `]}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,this.onToolbarFocusIn),this.addEventListener(`focusout`,this.onToolbarFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`focusin`,this.onToolbarFocusIn),this.removeEventListener(`focusout`,this.onToolbarFocusOut)}firstUpdated(e){super.firstUpdated(e),this.renderRoot.addEventListener(`beforeinput`,this.onBeforeInput),this.renderRoot.addEventListener(`input`,this.keepCaret)}willUpdate(){let e=this.tableLocalize.t.dataTable;this.label||=e.searchLabel,this.placeholder||=e.searchPlaceholder,super.willUpdate()}};i([o({type:Boolean,reflect:!0})],Y.prototype,`persistent`,void 0),Y=i([n(`ui-table-toolbar-search`)],Y);var X=class extends r{constructor(...e){super(...e),this.localize=new m(this)}static{this.styles=d`
        :host {
            position: relative;
            z-index: 1;
            display: flex;
            inline-size: 100%;
            block-size: var(--_toolbar, 48px);
            min-block-size: var(--_toolbar, 48px);
            background-color: var(--ui-surface-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`toolbar`)}updated(){p(this,`aria-label`,this.localize.t.dataTable.toolbar)}render(){return a`<slot></slot>`}};X=i([n(`ui-table-toolbar`)],X);var Ce=d`
    /*
     * per size (Carbon web components data-table.scss, measured on its storybook): row height, cell padding, the
     * header's top padding and the sort button's height (32px from sm down, 48px in xl, under a 16px top)
     */
    :host {
        /* a table inside another's expanded row doesn't take the outer one's sticky header */
        --_head-position: static;
        --_head-anchor: relative; /* a resizable header holds its handle */
        --_head-z: auto;
        --_head-edge: 0 0 #0000;
        /* lg, the default size (always reflected): 48px rows in Carbon; --ui-table-row-height lets a design change it */
        --_row: var(--ui-table-row-height, 48px);
        --_cell-pad-start: 0px;
        --_cell-pad-end: 0px;
        --_head-pad: 0px;
        --_sort-row: var(--ui-table-row-height, 48px);
        --_align: middle;

        display: block;
    }

    :host([size='xs']) {
        --_row: 24px;
        --_cell-pad-start: 2px;
        --_cell-pad-end: 2px;
        --_sort-row: 32px;
    }

    :host([size='sm']) {
        --_row: 32px;
        --_cell-pad-start: 7px;
        --_cell-pad-end: 6px;
        --_sort-row: 32px;
    }

    :host([size='md']) {
        --_row: 40px;
        --_cell-pad-start: 7px;
        --_cell-pad-end: 6px;
        --_sort-row: 40px;
    }

    :host([size='xl']) {
        --_row: 64px;
        --_cell-pad-start: 16px;
        --_head-pad: 16px;
        --_align: top;
    }

    /* toolbar, selection and expand columns per size (Carbon --data-table--{size} toolbar, .table-column-checkbox, .table-expand) */
    :host {
        --_toolbar: 48px;
    }

    :host([size='xs']) {
        --_toolbar: 24px;
        --_expand-pad: 0 0 0 8px;
        --_expand-button: 24px;
        --_select-inline-after-expand: 6px;
    }

    :host([size='sm']) {
        --_toolbar: 32px;
        --_select-pad: 3px;
        --_expand-pad: 0 0 0 8px;
        --_select-inline-after-expand: 6px;
    }

    :host([size='md']) {
        --_select-pad: 3px;
        --_expand-pad: 4px 0 4px 8px;
        --_select-inline-after-expand: 6px;
    }

    :host([size='xl']) {
        --_select-pad: 10px 0 0;
        --_radio-pad: 16px;
        --_expand-pad: 10px 0 22px 8px;
        --_select-inline-after-expand: 6px;
        --_expanded-pad: 16px 16px 8px 64px;
    }

    /* --ui-table-border / -radius / -overflow: Carbon's table is an open block; a design can frame it as its cards */
    .container {
        position: relative;
        padding-block-start: 2px; /* spacing-01 */
        border: var(--ui-table-border, none);
        border-radius: var(--ui-table-radius, 0);
        overflow: var(--ui-table-overflow, visible);
    }

    :host([use-static-width]) .container {
        inline-size: fit-content;
    }

    .header {
        padding-block: var(--ui-space-md) var(--ui-space-lg);
        padding-inline: var(--ui-space-md);
        background-color: var(--ui-surface-1);
    }

    .header[hidden] {
        display: none;
    }

    :host(:dir(rtl)) {
        --_dir: -1;
    }

    .content {
        display: block;
        overflow-x: auto;
        isolation: isolate; /* the pinned cells' layers stay inside the table */
    }

    /* the box takes focus when it scrolls, so keyboard users can scroll it (Carbon .data-table-content:focus) */
    .content:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
        border-radius: var(--ui-table-radius, 0); /* inside the table's frame, its corners (Kanok: 12px) */
    }

    /* sticky header (Carbon React stickyHeader): the body scrolls under the header inside a box (Carbon 300px) */
    :host([sticky-header]) {
        --_head-position: sticky;
        --_head-anchor: sticky;
        --_head-z: 2; /* over pinned body cells scrolling under it */
        --_head-edge: inset 0 -1px 0 var(--ui-ghost-active); /* collapsed borders don't travel with sticky cells */
    }

    :host([sticky-header]) .content {
        max-block-size: var(--ui-table-max-height, 300px);
        overflow-y: auto;
        scroll-padding-block-start: var(--_row); /* focused rows don't hide under the sticky header (WCAG 2.4.11) */
    }

    .table {
        display: table;
        inline-size: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* resized: the columns keep their widths (long words wrap inside), the filler cells take the rest */
    :host([data-fixed]:not([use-static-width])) .table {
        table-layout: fixed;
    }

    :host([data-fixed]) {
        overflow-wrap: anywhere;
    }

    ui-pagination {
        display: block;
    }

    :host([use-static-width]) .table {
        inline-size: auto;
    }

    /* loading: skeleton rows in the columns instead of the body (Carbon DataTableSkeleton bars, 4rem × 1rem) */
    :host([loading]) ::slotted(ui-table-body) {
        display: none;
    }

    .loading {
        display: table-row-group;
    }

    .loading-row {
        display: table-row;
        block-size: var(--_row);
    }

    .loading-cell {
        display: table-cell;
        box-sizing: border-box;
        padding-inline: var(--ui-space-md);
        border-block-end: 1px solid var(--ui-hairline);
        background-color: var(--ui-surface-1);
        vertical-align: middle;
    }

    :host([use-zebra-styles]) .loading-row:nth-child(odd) .loading-cell {
        border-block-end-color: var(--ui-surface-1);
    }

    :host([use-zebra-styles]) .loading-row:nth-child(even) .loading-cell {
        border-block-end-color: var(--ui-layer-background);
        background-color: var(--ui-layer-background);
    }

    .loading-bar {
        display: block;
        inline-size: 64px;
        max-inline-size: 100%;
        block-size: 16px;
    }

    /* no rows: a message as wide as the table under its headers */
    .empty {
        display: table-caption;
        caption-side: bottom;
    }

    .empty-cell {
        display: block;
        padding: var(--ui-space-md);
        border-block-end: 1px solid var(--ui-hairline);
        background-color: var(--ui-surface-1);
        color: var(--ui-ink-muted);
        font: var(--ui-font-body-sm);
        line-height: 18px; /* body-compact-01 */
        letter-spacing: var(--ui-tracking-body);
        text-align: start;
    }
`,we=(e,t)=>!e.toLowerCase().includes(t.toLowerCase());function Te(e){let t=e?.getAttribute(`csv-value`)??e?.textContent?.trim()??``,n=Number(t);return t!==``&&String(n)===t?n:t}var Z=a`<div class="loading-cell"><span class="bone loading-bar"></span></div>`,Q=a`<div class="loading-cell"></div>`;function Ee(e,t){let n=t;for(;n;){if(e.contains(n))return!0;let t=n.getRootNode();n=t instanceof ShadowRoot?t.host:null}return!1}var $=class extends r{constructor(...e){super(...e),this.size=`lg`,this.isSortable=!1,this.useZebraStyles=!1,this.useStaticWidth=!1,this.locale=``,this.isSelectable=!1,this.radio=!1,this.expandable=!1,this.batchExpansion=!1,this.withHeader=!1,this.filterRows=we,this.resizable=!1,this.pageSize=0,this.page=1,this.pageSizes=`10,25,50`,this.loading=!1,this.loadingRows=0,this.stickyHeader=!1,this.announcement=``,this.scrollable=!1,this.initialHidden=null,this.ownsTotal=!1,this.localize=new m(this),this.grid=new xe(this,{shownRows:()=>this.rows.filter(e=>!e.filtered&&!e.pagedOut),columns:()=>this.headerCells,editHint:()=>this.localize.t.dataTable.editHint}),this.order=new WeakMap,this.nextIndex=0,this.initiallySorted=!1,this.onSlotChange=()=>{this.syncBody(),(this.isSortable||this.resizable)&&this.syncHeaders(),this.syncRows()},this.onHeaderSlotChange=()=>{this.withHeader=!!this.querySelector(`:scope > [slot="title"], :scope > [slot="description"]`)},this.onPageChange=e=>{e.stopPropagation(),this.page=e.detail.page,this.pageSize=e.detail.pageSize;let t={page:this.page,pageSize:this.pageSize};this.dispatchEvent(new CustomEvent(`ui-table-page-change`,{detail:t,bubbles:!0,composed:!0}))},this.onSelectAllPages=e=>{if(!this.ownsTotal||e.target.closest(`ui-table`)!==this)return;for(let e of this.rows)!e.filtered&&!e.disabled&&(e.selected=!0);this.syncSelection();let t={selectedRows:this.selectedRows};this.dispatchEvent(new CustomEvent(`ui-table-row-all-selected`,{detail:t,bubbles:!0,composed:!0}))},this.onRowSelection=e=>{let t=e.target;t.closest(`ui-table`)===this&&this.afterListeners(e,()=>{if(this.radio)for(let e of this.rows)e!==t&&(e.selected=!1);this.syncSelection();let e={selectedRow:t,selectedRows:this.selectedRows};this.dispatchEvent(new CustomEvent(`ui-table-row-selected`,{detail:e,bubbles:!0,composed:!0}))})},this.onSelectAll=e=>{if(e.target.closest(`ui-table`)!==this)return;let{selected:t}=e.detail;this.afterListeners(e,()=>this.selectAll(t))},this.onCancel=e=>{if(e.target.closest(`ui-table`)===this){for(let e of this.rows)e.selected=!1;this.selectAll(!1),this.headerRow?.focusSelection()}},this.onRadioMove=e=>{let t=e.target,n=this.selectableRows;if(!n.length)return;let{delta:r}=e.detail,i=n[(n.indexOf(t)+r+n.length)%n.length];i.dispatchEvent(new CustomEvent(`ui-table-row-change-selection`,{detail:{selected:!0},bubbles:!0,composed:!0,cancelable:!0}))&&(i.selected=!0),i.updateComplete.then(()=>i.focusSelection())},this.onExpando=e=>{let t=e.target;if(t.closest(`ui-table`)!==this)return;let{expanded:n}=e.detail,r=this.headerRow,i=this.rows.filter(e=>e.expandable);if(t===r)for(let e of i)e.expanded=n;else r&&(r.expanded=i.length>0&&i.every(e=>e.expanded))},this.searchValue=``,this.onSearch=e=>{let t=e.target;if(t.localName!==`ui-table-toolbar-search`||t.closest(`ui-table`)!==this||(e.type===`input`&&e.stopPropagation(),t.value===this.searchValue))return;this.searchValue=t.value,this.page=1;let n={unfilteredRows:this.applySearch()};this.dispatchEvent(new CustomEvent(`ui-table-filtered`,{detail:n,bubbles:!0,composed:!0}))},this.onContentChange=e=>{if(e.target!==this.body)return;if(this.syncRows(),this.searchValue!==``&&this.applySearch(),this.sortedHeader)this.indexNewRows();else{this.nextIndex=0;for(let e of this.rows)this.order.set(e,this.nextIndex++)}let t=this.sortedHeader;t&&!this.initiallySorted&&(this.initiallySorted=!0,this.sortRows(t,t.sortDirection))},this.onSort=e=>{let t=e.target;if(!(t instanceof L)||t.closest(`ui-table`)!==this)return;let{sortDirection:n}=e.detail;queueMicrotask(()=>{if(this.initiallySorted=!0,e.defaultPrevented)return;for(let e of this.headerCells)e!==t&&e.sortDirection&&e.sortDirection!==`none`&&(e.sortDirection=`none`);this.sortRows(t,n);let r={sortedHeader:t};this.dispatchEvent(new CustomEvent(`ui-table-sorted`,{detail:r,bubbles:!0,composed:!0}))})}}static{this.styles=[g,u,Ce]}customSortRow(e,t,n){return ie(e,t,n.resolvedOptions().locale)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`table`);for(let[e,t]of this.listeners)this.addEventListener(e,t);this.hasUpdated&&this.observeSize()}firstUpdated(){this.observeSize()}observeSize(){let e=this.renderRoot.querySelector(`.content`),t=e?.querySelector(`.table`);e&&t&&typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>{this.scrollable=e.scrollWidth>e.clientWidth+1}),this.resizeObserver.observe(e),this.resizeObserver.observe(t))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.resizeObserver=void 0;for(let[e,t]of this.listeners)this.removeEventListener(e,t)}get listeners(){return[[`ui-table-header-cell-sort`,this.onSort],[`ui-table-body-content-change`,this.onContentChange],[`ui-table-row-change-selection`,this.onRowSelection],[`ui-table-change-selection-all`,this.onSelectAll],[`ui-table-batch-actions-cancel-clicked`,this.onCancel],[`ui-table-radio-move`,this.onRadioMove],[`ui-table-row-expando-toggled`,this.onExpando],[`input`,this.onSearch],[`ui-clear`,this.onSearch],[`ui-table-batch-actions-select-all-clicked`,this.onSelectAllPages],[`keydown`,this.grid.onKeydown],[`focusin`,this.grid.onFocusIn],[`focusout`,this.grid.onFocusOut],[`click`,this.grid.onClick],[`dblclick`,this.grid.onDoubleClick]]}get body(){return this.querySelector(`:scope > ui-table-body`)}get headerCells(){return[...this.querySelectorAll(`:scope > ui-table-head > ui-table-header-row > ui-table-header-cell`)]}get rows(){return[...this.body?.children??[]].filter(e=>e.localName===`ui-table-row`)}get headerRow(){return this.querySelector(`:scope > ui-table-head > ui-table-header-row`)}get batchActions(){return this.querySelector(`:scope > ui-table-toolbar > ui-table-batch-actions`)}get toolbarContent(){return this.querySelector(`:scope > ui-table-toolbar > ui-table-toolbar-content`)}get selectableRows(){return this.rows.filter(e=>!e.filtered&&!e.pagedOut&&!e.disabled)}get columns(){return this.headerCells}get hiddenColumns(){return this.headerCells.filter(e=>e.columnHidden).map(e=>e.columnKey)}isColumnLocked(e){return re(this.columnModel,this.hiddenColumns,e)}get columnModel(){return this.headerCells.map(e=>({key:e.columnKey,hideable:e.hideable}))}get contentWidth(){return this.renderRoot.querySelector(`.content`)?.clientWidth??0}get selectedRows(){return this.rows.filter(e=>e.selected)}get sortedHeader(){return this.headerCells.find(e=>e.sortDirection===`ascending`||e.sortDirection===`descending`)}willUpdate(e){e.has(`loading`)&&e.get(`loading`)!==void 0&&(this.announcement=this.loading?this.localize.t.dataTable.loading:``)}updated(e){e.has(`loading`)&&p(this,`aria-busy`,this.loading?`true`:null),e.has(`useZebraStyles`)&&this.syncBody();let t=e.has(`isSortable`)&&(this.isSortable||e.get(`isSortable`)===!0),n=e.has(`resizable`)&&(this.resizable||e.get(`resizable`)===!0);(t||n)&&this.syncHeaders(),[`isSelectable`,`radio`,`expandable`,`batchExpansion`,`size`,`useStaticWidth`].some(t=>e.has(t))&&this.syncRows(),(e.has(`pageSize`)||e.has(`page`))&&this.syncPaging()}syncRows(){let e=this.isSelectable||this.radio,t=this.headerRow,n=this.rows;t&&(e&&!t.selectionName&&(t.selectionName=`header`),t.radio=this.radio,t.expandColumn=this.expandable,t.batchExpansion=this.expandable&&this.batchExpansion),n.forEach((t,n)=>{e&&!t.selectionName&&(t.selectionName=String(n)),t.radio=this.radio,t.expandColumn=this.expandable,t.expandable=this.expandable&&t.nextElementSibling?.localName===`ui-table-expanded-row`}),this.syncColumns();let r=this.size===`xs`||this.size===`sm`?this.size:`lg`,i=this.batchActions;i&&(i.size=r);for(let e of this.querySelectorAll(`:scope > ui-table-toolbar > ui-table-toolbar-content > ui-table-toolbar-search`))e.size=r===`lg`?`lg`:`sm`;this.syncPaging()}syncColumns(){let e=this.headerCells;this.initialHidden??=e.length?e.filter(e=>e.columnHidden).map(e=>e.columnKey):null;let t=e.length-1,n=e[0]?.pinned===`start`,r=t>0&&e[t].pinned===`end`,i=e=>{if(e===0&&n)return`start`;if(e===t&&r)return`end`},a=this.dataset.fixed!==void 0&&!this.useStaticWidth,o=this.headerRow;for(let e of[...o?[o]:[],...this.rows])e.pinStart=n,e.filler=a;for(let t of this.rows)t.querySelectorAll(`:scope > ui-table-cell`).forEach((t,n)=>{t.columnHidden=!!e[n]?.columnHidden,t.pinned=i(n),t.editable=e[n]?.editable});let s=this.isSelectable||this.radio,c=e.filter(e=>!e.columnHidden).length+ +!!s+ +!!this.expandable+ +!!a;for(let e of this.querySelectorAll(`:scope > ui-table-body > ui-table-expanded-row`))e.colSpan=c;n&&o?.updateComplete.then(()=>this.measurePins())}measurePins(){let e=this.headerRow,t=t=>e?.renderRoot.querySelector(t)?.getBoundingClientRect().width??0,n=t(`.expand`);this.style.setProperty(`--_pin-select-at`,`${n}px`),this.style.setProperty(`--_pin-first-at`,`${n+t(`.select`)}px`)}setColumnHidden(e,t){let n=this.headerCells.find(t=>t.columnKey===e);return!n||n.columnHidden===t||this.isColumnLocked(e)?!1:(n.columnHidden=t,this.afterColumnsChange(e,t),!0)}get columnsChanged(){let e=this.initialHidden??[],t=this.hiddenColumns;return t.length!==e.length||t.some(t=>!e.includes(t))}resetColumns(){let e=new Set(this.initialHidden??[]);for(let t of this.headerCells)t.columnHidden=e.has(t.columnKey);this.afterColumnsChange(``,!1)}afterColumnsChange(e,t){this.syncColumns(),this.applySearch();let n={hiddenColumns:this.hiddenColumns,column:e,hidden:t};this.dispatchEvent(new CustomEvent(`ui-table-columns-change`,{detail:n,bubbles:!0,composed:!0}))}freezeColumns(){let e=this.body;if(this.style.setProperty(`--_resize-guide`,`${e?.getBoundingClientRect().height??0}px`),this.dataset.fixed===void 0){for(let e of this.headerCells)e.width??=e.columnHidden?void 0:Math.floor(e.getBoundingClientRect().width);this.dataset.fixed=``,this.syncColumns()}}get columnWidths(){let e={};for(let t of this.headerCells)t.width!==void 0&&(e[t.columnKey]=t.width);return e}syncPaging(){let e=this.rows.filter(e=>!e.filtered),t=this.pageSize,n=_(e.length,t),r=(Math.min(Math.max(1,this.page),n)-1)*t;e.forEach((e,n)=>{e.pagedOut=t>0&&(n<r||n>=r+t)});for(let e of this.rows){e.filtered&&(e.pagedOut=!1);let t=e.nextElementSibling;t?.localName===`ui-table-expanded-row`&&(t.pagedOut=e.pagedOut)}this.body?.updateZebra(),this.grid.sync(),this.syncTotal(e),this.syncSelection(),this.requestUpdate()}syncTotal(e){let t=this.batchActions;if(!t)return;let n=this.pageSize>0&&(this.ownsTotal||!t.hasAttribute(`total-rows-count`));n?t.totalRowsCount=e.filter(e=>!e.disabled).length:this.ownsTotal&&(t.totalRowsCount=0),this.ownsTotal=n}renderPagination(){if(this.pageSize<=0)return s;let e={xs:`sm`,sm:`sm`,md:`md`,lg:`lg`,xl:`lg`},t=this.rows.filter(e=>!e.filtered).length;return a`<ui-pagination
            part="pagination"
            size=${e[this.size]}
            .page=${Math.min(Math.max(1,this.page),_(t,this.pageSize))}
            .pageSize=${this.pageSize}
            .pageSizes=${this.pageSizes}
            .totalItems=${t}
            @ui-change=${this.onPageChange}
        ></ui-pagination>`}syncSelection(){let e=this.rows,t=e.filter(e=>e.selected),n=this.selectableRows,r=this.headerRow;if(r){let e=n.filter(e=>e.selected).length;r.selected=t.length>0,r.indeterminate=e>0&&e<n.length,r.disabled=n.length===0}if(this.radio){let t=n.find(e=>e.selected)??n[0];for(let n of e)n.tabStop=!this.grid.on&&n===t}let i=!this.radio&&t.length>0,a=this.batchActions;a&&(a.active=i,a.selectedRowsCount=t.length);let o=this.toolbarContent;o&&(o.hasBatchActions=i&&!!a)}afterListeners(e,t){queueMicrotask(()=>{e.defaultPrevented||t()})}selectAll(e){for(let t of this.selectableRows)t.selected=e;if(!e)for(let e of this.rows)e.disabled||(e.selected=!1);this.syncSelection();let t={selectedRows:this.selectedRows};this.dispatchEvent(new CustomEvent(`ui-table-row-all-selected`,{detail:t,bubbles:!0,composed:!0}))}rowText(e){return[...e.querySelectorAll(`:scope > ui-table-cell`)].filter(e=>!e.columnHidden).map(e=>e.textContent?.trim()??``).join(` `)}applySearch(){let e=this.searchValue,t=[];for(let n of this.rows){let r=n.nextElementSibling?.localName===`ui-table-expanded-row`?n.nextElementSibling:null,i=e!==``&&this.filterRows(this.rowText(n),e);i&&r&&(i=this.filterRows(r.textContent?.trim()??``,e)),n.filtered=i,r&&(r.filtered=i),i||t.push(n)}return this.syncPaging(),t}syncBody(){let e=this.body;e&&(e.useZebraStyles=this.useZebraStyles)}syncHeaders(){for(let e of this.headerCells)(this.isSortable||e.isSortable)&&(e.isSortable=this.isSortable),(this.resizable||e.resizable)&&(e.resizable=this.resizable)}indexNewRows(){for(let e of this.rows)this.order.has(e)||this.order.set(e,this.nextIndex++)}rowGroups(e){let t=[],n=[],r=[];for(let i of e.childNodes)i instanceof Element?i.localName===`ui-table-row`?n.push([...r,i]):n.length?n.at(-1).push(...r,i):t.push(...r,i):r.push(i),i instanceof Element&&(r=[]);return{lead:t,groups:n,tail:r}}rowOf(e){return e.find(e=>e instanceof Element&&e.localName===`ui-table-row`)}sortRows(e,t){let n=this.body,r=this.headerCells.indexOf(e);if(!n||r<0)return;this.indexNewRows();let{lead:i,groups:a,tail:o}=this.rowGroups(n),s;if(t===`none`)s=a.toSorted((e,t)=>(this.order.get(this.rowOf(e))??0)-(this.order.get(this.rowOf(t))??0));else{let e=new Intl.Collator(this.locale||this.localize.lang()),n=t===`ascending`?1:-1;s=a.map(e=>{let t=this.rowOf(e).querySelectorAll(`:scope > ui-table-cell`)[r];return{group:e,key:t?.getAttribute(`sort-value`)??t?.textContent?.trim()??``}}).toSorted((t,r)=>n*this.customSortRow(t.key,r.key,e)).map(e=>e.group)}this.reorder(n,[...i,...s.flat(),...o])}reorder(e,n){let r=t(),i=r!==null&&Ee(e,r),a=this.renderRoot.querySelector(`.content`),o={top:a?.scrollTop??0,left:a?.scrollLeft??0,x:scrollX,y:scrollY},s=e.parentNode,c=e.nextSibling;e.remove(),e.append(...n),c?c.before(e):s.appendChild(e),a&&(a.scrollTop=o.top,a.scrollLeft=o.left),i&&r.focus({preventScroll:!0}),(scrollX!==o.x||scrollY!==o.y)&&scrollTo(o.x,o.y),this.syncPaging()}csvRows(e=`shown`){return e===`selected`?this.selectedRows:e===`all`?this.rows:this.rows.filter(e=>!e.filtered)}toCsv({scope:e=`shown`}={}){return _e(this.headerCells.flatMap((e,t)=>e.columnHidden?[]:[{key:String(t),header:e.labelText}]),this.csvRows(e).map((e,t)=>({id:String(t),cells:[...e.querySelectorAll(`:scope > ui-table-cell`)]})),(e,t)=>Te(e.cells[Number(t.key)]))}downloadCsv({scope:e=`shown`,fileName:t}={}){A(this.toCsv({scope:e}),t??this.csvFileName)}get csvFileName(){return this.querySelector(`:scope > [slot="title"]`)?.textContent?.trim()??``}renderLoading(){if(!this.loading)return s;let e=this.headerCells.filter(e=>!e.columnHidden),t=this.rows.filter(e=>!e.filtered&&!e.pagedOut).length,n=this.loadingRows||t||this.pageSize||5,r=+!!this.expandable+(this.isSelectable||this.radio?1:0),i=[...Array.from({length:r},()=>Q),...e.map(()=>Z)];ee(this,`fixed`)&&!this.useStaticWidth&&i.push(Q);let o=Array.from({length:n},()=>i);return a`<div class="loading" aria-hidden="true">${o.map(e=>this.renderLoadingRow(e))}</div>`}renderLoadingRow(e){return a`<div class="loading-row">${e}</div>`}renderEmpty(){if(this.loading||this.rows.some(e=>!e.filtered))return s;let e=this.localize.t.dataTable,t=this.searchValue===``?this.renderSlot(`empty`,e.noRows):this.renderSlot(`no-results`,e.noResults);return a`<div class="empty" role="row"><div class="empty-cell" part="empty" role=${this.grid.on?`gridcell`:`cell`}>${t}</div></div>`}renderSlot(e,t){return a`<slot name=${e}>${t}</slot>`}focus(e){let t=this.renderRoot.querySelector(`.content[tabindex]`),n=this.headerRow?.renderRoot.querySelector(`.select ui-checkbox`),r=this.headerCells.find(e=>!e.columnHidden&&e.sortDirection),i=this.rows.find(e=>!e.filtered&&!e.pagedOut)?.renderRoot.querySelector(`.select ui-checkbox, .select ui-radio[tabindex="0"], .expand-button`),a=t??n??r??this.grid.stopCell??i;a?a.focus(e):super.focus(e)}get regionLabel(){return this.getAttribute(`aria-label`)||this.csvFileName||s}render(){let e=this.stickyHeader||this.scrollable;return a`<div class="container">
            <div class="header" part="header" ?hidden=${!this.withHeader}>
                <slot name="title" @slotchange=${this.onHeaderSlotChange}></slot>
                <slot name="description" @slotchange=${this.onHeaderSlotChange}></slot>
            </div>
            <slot name="toolbar" @slotchange=${this.onSlotChange}></slot>
            <div class="content" part="content" tabindex=${e?`0`:s} role=${e?`region`:s} aria-label=${e?this.regionLabel:s}><div class="table" part="table"><slot @slotchange=${this.onSlotChange}></slot>${this.renderLoading()}${this.renderEmpty()}</div></div>
            ${this.renderPagination()}
            <span class="sr-only" role="status">${this.announcement}</span>
        </div>`}};i([o({reflect:!0})],$.prototype,`size`,void 0),i([o({type:Boolean,reflect:!0,attribute:`is-sortable`})],$.prototype,`isSortable`,void 0),i([o({type:Boolean,reflect:!0,attribute:`use-zebra-styles`})],$.prototype,`useZebraStyles`,void 0),i([o({type:Boolean,reflect:!0,attribute:`use-static-width`})],$.prototype,`useStaticWidth`,void 0),i([o({reflect:!0})],$.prototype,`locale`,void 0),i([o({type:Boolean,reflect:!0,attribute:`is-selectable`})],$.prototype,`isSelectable`,void 0),i([o({type:Boolean,reflect:!0})],$.prototype,`radio`,void 0),i([o({type:Boolean,reflect:!0})],$.prototype,`expandable`,void 0),i([o({type:Boolean,reflect:!0,attribute:`batch-expansion`})],$.prototype,`batchExpansion`,void 0),i([o({type:Boolean,reflect:!0,attribute:`with-header`})],$.prototype,`withHeader`,void 0),i([o({attribute:!1})],$.prototype,`filterRows`,void 0),i([o({type:Boolean,reflect:!0})],$.prototype,`resizable`,void 0),i([o({type:Number,attribute:`page-size`})],$.prototype,`pageSize`,void 0),i([o({type:Number})],$.prototype,`page`,void 0),i([o({attribute:`page-sizes`})],$.prototype,`pageSizes`,void 0),i([o({type:Boolean,reflect:!0})],$.prototype,`loading`,void 0),i([o({type:Number,attribute:`loading-rows`})],$.prototype,`loadingRows`,void 0),i([o({type:Boolean,reflect:!0,attribute:`sticky-header`})],$.prototype,`stickyHeader`,void 0),i([h()],$.prototype,`announcement`,void 0),i([h()],$.prototype,`scrollable`,void 0),$=i([n(`ui-table`)],$);