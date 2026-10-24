import{Ct as e,D as t,E as n,Ot as r,St as i,Tt as a,at as o,ct as s,jt as c,w as l}from"./theme-switcher-BGAHXRgF.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./pagination-BgZ55sJe.js";var g=r`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 11.8 6.2 8 10 4.2 10.7 5 7.7 8l3 3z" /></svg>`,_=r`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 11.8 3.8-3.8L6 4.2 5.3 5l3 3-3 3z" /></svg>`,v=class extends t{constructor(...e){super(...e),this.page=1,this.localize=new l(this),this.pageSize=10,this.pageSizes=`10,25,50`,this.totalItems=0,this.pagesUnknown=!1,this.isLastPage=!1,this.size=`md`,this.disabled=!1,this.ids=s(`ui-pagination`)}static{this.styles=c`
        :host {
            --_h: var(--ui-field-height-md, 40px);

            display: block;
            font-family: var(--ui-font-family);
        }

        :host([size='sm']) {
            --_h: var(--ui-field-height-sm, 32px);
        }

        :host([size='lg']) {
            --_h: var(--ui-field-height-lg, 48px);
        }

        .bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            width: 100%;
            min-height: var(--_h);
            /* --ui-pagination-*: Carbon's divided slab on the layer; a design can lay out open, rounded controls instead */
            border-block-start: var(--ui-pagination-border, 1px solid var(--ui-hairline));
            background-color: var(--ui-pagination-background, var(--ui-surface-1));
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        .left,
        .right {
            display: flex;
            align-items: center;
            gap: var(--ui-pagination-gap, normal);
            height: var(--_h);
        }

        .text {
            padding: 0 var(--ui-space-md);
            color: var(--ui-ink-muted);
            white-space: nowrap;
        }

        .text.range {
            color: var(--ui-pagination-range-ink, var(--ui-ink));
        }

        label {
            padding-inline-start: var(--ui-space-md);
            color: var(--ui-ink-muted);
            white-space: nowrap;
        }

        /* borderless inline select (Carbon select--inline inside pagination) */
        .select {
            position: relative;
            height: 100%;
        }

        select {
            box-sizing: border-box;
            height: 100%;
            margin: 0;
            padding: 0 36px 0 var(--ui-space-md);
            border: var(--ui-pagination-select-border, none);
            border-inline-end: var(--ui-pagination-select-border, var(--ui-pagination-divider, 1px solid var(--ui-hairline)));
            border-radius: var(--ui-pagination-select-radius, 0);
            background: transparent;
            color: var(--ui-ink);
            font: inherit;
            letter-spacing: inherit;
            appearance: none;
            cursor: pointer;
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: -2px;
        }

        .right select {
            border-inline-end: var(--ui-pagination-select-border, none);
            border-inline-start: var(--ui-pagination-select-border, var(--ui-pagination-divider, 1px solid var(--ui-hairline)));
        }

        select:hover {
            background-color: var(--ui-ghost-hover);
        }

        select:focus {
            outline-color: var(--ui-focus);
        }

        select:disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
            background: transparent;
        }

        .chevron {
            position: absolute;
            top: 50%;
            inset-inline-end: var(--ui-space-md);
            width: 16px;
            height: 16px;
            translate: 0 -50%;
            fill: var(--ui-ink);
            pointer-events: none;
        }

        select:disabled ~ .chevron {
            fill: var(--ui-ink-disabled);
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: var(--_h);
            height: var(--_h);
            margin: 0;
            padding: 0;
            border: none;
            border-inline-start: var(--ui-pagination-divider, 1px solid var(--ui-hairline));
            border-radius: var(--ui-pagination-button-radius, 0);
            background: transparent;
            color: var(--ui-ink);
            cursor: pointer;
            transition:
                outline var(--ui-duration-moderate) var(--ui-easing),
                background-color var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--pagination__button, fast-02 */
        }

        .control svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .control:hover {
            background-color: var(--ui-ghost-hover);
        }

        .control:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        .control:disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
            background: transparent;
        }

        /*
         * Narrower than 672px (Carbon's md breakpoint, measured on the bar, so a pagination in a narrow panel reflows too):
         * only the item range and the arrows stay, as Carbon's pagination does (WCAG 1.4.10 reflow, phones, 200% zoom)
         */
        .bar {
            container-type: inline-size;
        }

        @container (max-width: 41.98rem) {
            label,
            .select,
            .right .text {
                display: none;
            }

            .left {
                min-width: 0;
            }

            .text.range {
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        @media (forced-colors: active) {
            .bar {
                border: 1px solid CanvasText;
            }
        }
    `}get state(){return{page:this.page,pageSize:this.pageSize,totalItems:this.totalItems,pagesUnknown:this.pagesUnknown,isLastPage:this.isLastPage}}get totalPages(){return u({...this.state,pagesUnknown:!1})}get sizes(){return p(this.pageSizes)}fill(e,t){return m(e,t)}emit(){this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{page:this.page,pageSize:this.pageSize},bubbles:!0,composed:!0}))}onPageSize(e){let t=Number(e.target.value);t!==this.pageSize&&(this.pageSize=t,this.page=1,this.emit())}onPageSelect(e){this.goTo(Number(e.target.value))}goTo(e){let t=f(e,this.state);t!==this.page&&(this.page=t,this.emit())}step(e){this.goTo(this.page+e),this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelectorAll(`.control`),[n,r]=t?[...t]:[],i=e===1?r:n,a=e===1?n:r;i?.disabled&&!a?.disabled&&a?.focus()})}renderPageSizeSelect(){let e=this.sizes;return e.length===0?a:r`<label for="${this.ids}-size">${this.itemsPerPageText??this.localize.t.pagination.itemsPerPage}</label>
            <span class="select">
                <select id="${this.ids}-size" part="page-size-select" .value=${String(this.pageSize)} ?disabled=${this.disabled} @input=${o} @change=${this.onPageSize}>
                    ${e.map(e=>r`<option value=${e} ?selected=${e===this.pageSize}>${e}</option>`)}
                </select>
                <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </span>`}renderPageSelect(){if(this.pagesUnknown)return r`<span class="text" part="pages">${this.fill(this.pageText??this.localize.t.pagination.page,{page:this.page})}</span>`;let e=Array.from({length:this.totalPages},(e,t)=>t+1);return r`<span class="select">
                <select part="page-select" aria-label=${this.pageSelectLabel??this.localize.t.pagination.pageNumber} .value=${String(this.page)} ?disabled=${this.disabled} @input=${o} @change=${this.onPageSelect}>
                    ${e.map(e=>r`<option value=${e} ?selected=${e===this.page}>${this.fill(this.pageText??this.localize.t.pagination.page,{page:e})}</option>`)}
                </select>
                <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </span>
            <span class="text" part="pages">${this.fill(this.pageRangeText??this.localize.t.pagination.pageRange,{total:this.totalPages,page:this.page})}</span>`}focus(e){[...this.shadowRoot?.querySelectorAll(`select:not([disabled]), button:not([disabled])`)??[]].find(e=>e.checkVisibility?.()??!0)?.focus(e)}render(){let{min:e,max:t}=d(this.state),n=this.pagesUnknown?this.fill(this.itemText??this.localize.t.pagination.items,{min:e,max:t}):this.fill(this.itemRangeText??this.localize.t.pagination.itemRange,{min:e,max:t,total:this.totalItems}),i=h(this.state);return r`
            <div class="bar" part="base">
                <div class="left">
                    ${this.renderPageSizeSelect()}
                    <span class="text range" part="range">${n}</span>
                </div>
                <div class="right">
                    ${this.renderPageSelect()}
                    <button class="control" part="previous-button" type="button" tabindex="0" aria-label=${this.previousLabel??this.localize.t.pagination.previousPage} ?disabled=${this.disabled||this.page<=1} @click=${()=>this.step(-1)}>
                        ${g}
                    </button>
                    <button class="control" part="next-button" type="button" tabindex="0" aria-label=${this.nextLabel??this.localize.t.pagination.nextPage} ?disabled=${this.disabled||i} @click=${()=>this.step(1)}>
                        ${_}
                    </button>
                </div>
            </div>
        `}};n([i({type:Number})],v.prototype,`page`,void 0),n([i({type:Number,attribute:`page-size`})],v.prototype,`pageSize`,void 0),n([i({attribute:`page-sizes`})],v.prototype,`pageSizes`,void 0),n([i({type:Number,attribute:`total-items`})],v.prototype,`totalItems`,void 0),n([i({type:Boolean,attribute:`pages-unknown`})],v.prototype,`pagesUnknown`,void 0),n([i({type:Boolean,attribute:`is-last-page`})],v.prototype,`isLastPage`,void 0),n([i({reflect:!0})],v.prototype,`size`,void 0),n([i({type:Boolean,reflect:!0})],v.prototype,`disabled`,void 0),n([i({attribute:`items-per-page-text`})],v.prototype,`itemsPerPageText`,void 0),n([i({attribute:`item-range-text`})],v.prototype,`itemRangeText`,void 0),n([i({attribute:`item-text`})],v.prototype,`itemText`,void 0),n([i({attribute:`page-range-text`})],v.prototype,`pageRangeText`,void 0),n([i({attribute:`page-text`})],v.prototype,`pageText`,void 0),n([i({attribute:`page-select-label`})],v.prototype,`pageSelectLabel`,void 0),n([i({attribute:`previous-label`})],v.prototype,`previousLabel`,void 0),n([i({attribute:`next-label`})],v.prototype,`nextLabel`,void 0),v=n([e(`ui-pagination`)],v);