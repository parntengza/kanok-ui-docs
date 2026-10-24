import{At as e,Ct as t,D as n,E as r,Ot as i,St as a,Tt as o,at as s,bt as c,ct as l,it as u,jt as d,rt as f,v as p,w as m,yt as h}from"./theme-switcher-BGAHXRgF.js";var g=class extends n{constructor(...e){super(...e),this.head=!1,this.nowrap=!1}static{this.styles=d`
        :host {
            position: relative;
            display: table-cell;
            box-sizing: border-box;
            max-inline-size: 576px;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            text-align: start;
            transition: color var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([head]) {
            block-size: 40px;
            color: var(--ui-ink);
            font-weight: 600;
            line-height: 18px; /* heading-compact-01 */
            vertical-align: top;
        }

        /*
         * The cell's padding is this part's, not :host's (cell or row), so a page-wide CSS reset can't remove it;
         * its transparent borders keep the room for the row's rules. The rules themselves are painted at the
         * cell's own edges, which are the row's: a cell shorter than its row (one line beside a wrapped one, a
         * status indicator) would otherwise draw them out of line. The row hands down their widths and colour (--_rule-*).
         */
        .base {
            box-sizing: border-box;
            padding: var(--ui-space-md) var(--ui-space-xs) var(--ui-space-lg);
            border-block: var(--_rule-top, 0px) solid transparent;
            border-block-end-width: var(--_rule-bottom, 0px);
        }

        :host::before,
        :host::after {
            position: absolute;
            inset-inline: 0;
            background-color: var(--_rule, transparent); /* recoloured at once: Carbon moves only the row's fill */
            content: '';
            pointer-events: none;
        }

        :host::before {
            inset-block-start: 0;
            block-size: var(--_rule-top, 0px);
        }

        :host::after {
            inset-block-end: 0;
            block-size: var(--_rule-bottom, 0px);
        }

        :host([head]) .base {
            padding: var(--ui-space-md) var(--ui-space-xs) var(--ui-space-xs);
        }

        :host([data-condensed]) .base {
            padding: var(--ui-space-xs);
        }

        /* after head / condensed: the first cell always starts at 16px (Carbon specificity order) */
        :host(:first-of-type) .base {
            padding-inline-start: var(--ui-space-md);
        }

        :host([data-selection]) .base,
        :host([data-selection]:first-of-type) .base {
            padding-inline: var(--ui-space-md);
        }

        :host([data-flush]) .base,
        :host([data-flush]:first-of-type) .base {
            padding-inline: 0 var(--ui-space-md);
        }

        :host([nowrap]) {
            white-space: nowrap;
        }
    `}updated(){f(this,`role`,this.head?`columnheader`:`cell`)}render(){return i`<div class="base"><slot></slot></div>`}};r([a({type:Boolean,reflect:!0})],g.prototype,`head`,void 0),r([a({type:Boolean,reflect:!0})],g.prototype,`nowrap`,void 0),g=r([t(`ui-structured-list-cell`)],g);var _=t=>i`<svg class="icon" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1" />
        ${t?e`<circle cx="8" cy="8" r="3" />`:o}
    </svg>`,v=class extends n{constructor(...e){super(...e),this.head=!1,this.localize=new m(this),this.value=``,this.selected=!1,this.selection=!1,this.condensed=!1,this.flush=!1,this.focusable=!1,this.selectionLabel=``,this.position=0,this.setSize=0,this.radioId=l(`ui-structured-list-radio`),this.onClick=()=>{!this.head&&this.selection&&this.select()}}static{this.styles=[u,d`
        /* the rules (Carbon row borders) are drawn by the cells' parts from these, see ui-structured-list-cell */
        :host {
            --_rule: var(--ui-hairline);
            --_rule-top: 1px;
            --_rule-bottom: 0px;

            display: table-row;
            transition: background-color var(--ui-duration-moderate) var(--ui-easing);
        }

        :host(:last-of-type:not([head])) {
            --_rule-bottom: 1px;
        }

        :host([head]) {
            --_rule-top: 0px;
        }

        :host([data-selection]:not([head]):hover:not([selected])) {
            --_rule: var(--ui-ghost-hover);

            background-color: var(--ui-ghost-hover);
            cursor: pointer;
        }

        /* --ui-structured-list-selected: a design can tint the selected row like its other selections (Carbon: surface 2) */
        :host([data-selection][selected]) {
            --_rule: var(--ui-structured-list-selected, var(--ui-surface-2));

            background-color: var(--ui-structured-list-selected, var(--ui-surface-2));
        }

        :host([data-selection]:not([head]):hover) ::slotted(ui-structured-list-cell),
        :host([data-selection][selected]) ::slotted(ui-structured-list-cell) {
            color: var(--ui-ink);
        }

        :host(:focus-within) {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* the rules at the cell's edges, as in ui-structured-list-cell (the radio cell can be shorter than its row) */
        .radio-cell {
            position: relative;
            display: table-cell;
            box-sizing: border-box;
            inline-size: 32px;
            vertical-align: top;
        }

        .radio-cell::before,
        .radio-cell::after {
            position: absolute;
            inset-inline: 0;
            background-color: var(--_rule);
            content: '';
            pointer-events: none;
        }

        .radio-cell::before {
            inset-block-start: 0;
            block-size: var(--_rule-top);
        }

        .radio-cell::after {
            inset-block-end: 0;
            block-size: var(--_rule-bottom);
        }

        .radio-base {
            box-sizing: border-box;
            padding: var(--ui-space-md) 0 var(--ui-space-lg) var(--ui-space-md);
            border-block: var(--_rule-top) solid transparent;
            border-block-end-width: var(--_rule-bottom);
        }

        :host([head]) .radio-base {
            padding-block: var(--ui-space-md) var(--ui-space-xs);
        }

        :host([data-condensed]) .radio-base {
            padding: var(--ui-space-xs) 0 var(--ui-space-xs) var(--ui-space-xs);
        }

        .icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-block-start: 2px;
            vertical-align: top;
            fill: var(--ui-icon-primary);
            color: var(--ui-icon-primary);
        }

        @media (forced-colors: active) {
            :host([selected]) {
                outline: 1px solid Highlight;
            }
        }
    `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`row`),this.addEventListener(`click`,this.onClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onClick)}updated(){this.syncCells(),this.selected?this.setAttribute(`aria-selected`,`true`):this.selection&&!this.head?this.setAttribute(`aria-selected`,`false`):this.removeAttribute(`aria-selected`)}syncCells(){for(let e of this.cells)e.head=this.head,e.toggleAttribute(`data-selection`,this.selection),e.toggleAttribute(`data-condensed`,this.condensed),e.toggleAttribute(`data-flush`,this.flush)}focus(e){this.input?this.input.focus(e):super.focus(e)}select(){this.selected||this.dispatchEvent(new CustomEvent(`ui-row-select`,{detail:{value:this.value},bubbles:!0}))}get rowLabel(){return this.getAttribute(`aria-label`)??this.textContent?.replaceAll(/\s+/g,` `).trim()??``}renderRadioCell(){return this.selection?this.head?i`<div class="radio-cell" part="radio-cell" role="columnheader"><div class="radio-base"><span class="sr-only">${this.selectionLabel||this.localize.t.common.select}</span></div></div>`:i`<div class="radio-cell" part="radio-cell" role="cell"><div class="radio-base">
            <input
                id=${this.radioId}
                class="sr-only"
                type="radio"
                .checked=${this.selected}
                tabindex=${this.focusable?0:-1}
                aria-label=${this.rowLabel}
                aria-posinset=${this.position||o}
                aria-setsize=${this.setSize||o}
                @input=${s}
                @change=${()=>this.select()}
            />
            ${_(this.selected)}
        </div></div>`:o}render(){return i`${this.renderRadioCell()}<slot @slotchange=${()=>this.syncCells()}></slot>`}};r([a({type:Boolean,reflect:!0})],v.prototype,`head`,void 0),r([a()],v.prototype,`value`,void 0),r([a({type:Boolean,reflect:!0})],v.prototype,`selected`,void 0),r([a({type:Boolean,attribute:`data-selection`,reflect:!0})],v.prototype,`selection`,void 0),r([a({type:Boolean,attribute:`data-condensed`,reflect:!0})],v.prototype,`condensed`,void 0),r([a({type:Boolean,attribute:`data-flush`,reflect:!0})],v.prototype,`flush`,void 0),r([a({type:Boolean,attribute:!1})],v.prototype,`focusable`,void 0),r([a({attribute:!1})],v.prototype,`selectionLabel`,void 0),r([a({attribute:!1})],v.prototype,`position`,void 0),r([a({attribute:!1})],v.prototype,`setSize`,void 0),r([c(`input`)],v.prototype,`input`,void 0),r([h({selector:`ui-structured-list-cell`})],v.prototype,`cells`,void 0),v=r([t(`ui-structured-list-row`)],v);var y=class extends n{constructor(...e){super(...e),this.selection=!1,this.localize=new m(this),this.condensed=!1,this.flush=!1,this.value=``,this.label=``,this.selectionLabel=``,this.onRowSelect=e=>{e.stopPropagation(),e.target instanceof v&&this.select(e.target)},this.onKeydown=e=>{if(!this.selection)return;let t=this.bodyRows(),n=t.findIndex(t=>t===e.target||t.contains(e.target)),r=n<0?void 0:p(t.length,n,e.key,{orientation:`both`,homeEnd:!1,rtl:getComputedStyle(this).direction===`rtl`});if(r===void 0)return;e.preventDefault();let i=t[r];this.select(i),i.focus()}}static{this.styles=d`
        :host {
            display: table;
            inline-size: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            font-family: var(--ui-font-family);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`table`),this.addEventListener(`ui-row-select`,this.onRowSelect),this.addEventListener(`keydown`,this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`ui-row-select`,this.onRowSelect),this.removeEventListener(`keydown`,this.onKeydown)}updated(){f(this,`aria-label`,this.label||this.localize.t.common.structuredList),this.sync()}bodyRows(){return this.rows.filter(e=>!e.head)}sync(){let e=this.bodyRows(),t=e.find(e=>e.value===this.value&&this.value!==``),n=t??e[0];for(let r of this.rows)r.selection=this.selection,r.selectionLabel=this.selectionLabel||this.localize.t.common.select,r.condensed=this.condensed,r.flush=this.flush&&!this.selection,r.selected=this.selection&&r===t,r.focusable=r===n,r.position=e.indexOf(r)+1,r.setSize=e.length}select(e){e.value!==this.value&&(this.value=e.value,this.sync(),this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{value:this.value},bubbles:!0,composed:!0})))}focus(e){(this.rows.find(e=>e.focusable)??this.bodyRows()[0])?.focus(e)}render(){return i`<slot @slotchange=${()=>this.sync()}></slot>`}};r([a({type:Boolean,reflect:!0})],y.prototype,`selection`,void 0),r([a({type:Boolean,reflect:!0})],y.prototype,`condensed`,void 0),r([a({type:Boolean,reflect:!0})],y.prototype,`flush`,void 0),r([a({reflect:!0})],y.prototype,`value`,void 0),r([a()],y.prototype,`label`,void 0),r([a({attribute:`selection-label`})],y.prototype,`selectionLabel`,void 0),r([h({selector:`ui-structured-list-row`})],y.prototype,`rows`,void 0),y=r([t(`ui-structured-list`)],y);