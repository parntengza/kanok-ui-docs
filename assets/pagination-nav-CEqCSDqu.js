import{Ct as e,D as t,Et as n,Mt as r,O as i,St as a,T as o,at as s,gt as c,jt as l,kt as u,wt as d}from"./theme-switcher-BZXGbHfR.js";import"./icon-button-D4pzZab2.js";import{a as f,i as p,n as m,r as h,t as g}from"./pagination-nav-BwBRkwFR.js";var _=l`<path d="M20 24 10 16 20 8z" />`,v=l`<path d="M12 8 22 16 12 24z" />`,y=l`<circle cx="8" cy="16" r="2" /><circle cx="16" cy="16" r="2" /><circle cx="24" cy="16" r="2" />`,b=`(max-width: 20rem)`,x=class extends i{constructor(...e){super(...e),this.page=0,this.totalItems=1,this.itemsShown=10,this.loop=!1,this.disableOverflow=!1,this.size=`lg`,this.tooltipPlacement=`bottom`,this.cuts={front:0,back:0},this.narrow=!1,this.localize=new o(this),this.previous=0,this.onMedia=e=>{this.narrow=e.matches}}static{this.styles=[s,r`
            :host {
                display: block;
                --_h: var(--ui-field-height-lg, 48px);
            }

            :host([size='md']) {
                --_h: var(--ui-field-height-md, 40px);
            }

            :host([size='sm']) {
                --_h: var(--ui-field-height-sm, 32px);
            }

            .list {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            /* Carbon .cds--pagination-nav__page: body-compact-01 at line-height 1, the field's height square at least */
            .page {
                position: relative;
                display: block;
                box-sizing: border-box;
                min-inline-size: var(--_h);
                margin: 0;
                padding: calc((var(--_h) - 14px) / 2) var(--ui-space-xxs);
                border: none;
                border-radius: var(--ui-button-radius, 0); /* page buttons: the button setting */
                outline: var(--ui-focus-width, 2px) solid transparent;
                outline-offset: var(--ui-focus-offset, -2px); /* the page buttons are discrete controls: a design can ring them outside */
                background: none;
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                line-height: 1;
                letter-spacing: var(--ui-tracking-body);
                text-align: center;
                cursor: pointer;
                user-select: none;
                transition:
                    background-color var(--ui-duration-moderate) var(--ui-easing),
                    color var(--ui-duration-moderate) var(--ui-easing);
            }

            @media (any-hover: hover) {
                .page:hover {
                    background-color: var(--ui-canvas-hover);
                }
            }

            .page:focus {
                outline-color: var(--ui-focus);
            }

            /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
            .page:focus:not(:focus-visible) {
                outline-color: var(--ui-pointer-focus, var(--ui-focus));
            }

            .page:disabled {
                background: none;
                color: color-mix(in srgb, var(--ui-ink-muted) 50%, transparent);
                outline: none;
                pointer-events: none;
            }

            .active {
                font-weight: 600;
            }

            /* the current page's 16 × 4 underline (Carbon pseudo-underline); --ui-pagination-nav-mark-height: a design can
               draw it as thin as its other "you are here" marks (Kanok: 2px, as the selected tab) */
            .page::after,
            .icon-wrapper::after {
                content: '';
                position: absolute;
                inset-block-end: 0;
                inset-inline-start: 50%;
                display: block;
                inline-size: 0;
                block-size: var(--ui-pagination-nav-mark-height, var(--ui-space-xxs));
                background-color: var(--ui-border-interactive);
                opacity: 0;
                transition: width var(--ui-duration-moderate) var(--ui-easing);
            }

            .active::after {
                inline-size: var(--ui-space-md);
                inset-inline-start: calc(50% - 8px);
                opacity: 1;
            }

            .select-item {
                position: relative;
            }

            /* the "…" select: its text hidden behind the dots icon */
            select.page {
                appearance: none;
                max-block-size: var(--_h);
                color: transparent;
                text-indent: calc(50% - 4.5px);
                font-size: var(--ui-field-font-size, 14px);
            }

            select.page option {
                color: var(--ui-ink);
                background: var(--ui-surface-1);
            }

            .icon-wrapper {
                position: absolute;
                inset-block-start: 0;
                inline-size: 100%;
                block-size: 100%;
                pointer-events: none;
            }

            .dots {
                position: absolute;
                inset-block-start: calc(50% - 4px);
                inset-inline-start: calc(50% - 8px);
                inline-size: 16px;
                block-size: 16px;
                fill: var(--ui-ink);
            }

            select:disabled + .icon-wrapper .dots {
                fill: color-mix(in srgb, var(--ui-ink-muted) 50%, transparent);
            }

            .caret {
                inline-size: 16px;
                block-size: 16px;
                fill: currentColor;
            }

            :host(:dir(rtl)) .caret {
                transform: rotate(0.5turn);
            }

            @media (prefers-reduced-motion: reduce) {
                .page::after,
                .icon-wrapper::after {
                    transition: none;
                }
            }

            @media (forced-colors: active) {
                .active::after {
                    background-color: Highlight;
                }
            }
        `]}connectedCallback(){super.connectedCallback(),this.media=globalThis.matchMedia?.(b),this.narrow=!!this.media?.matches,this.media?.addEventListener(`change`,this.onMedia)}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onMedia)}get shown(){return h(this.itemsShown,this.size,this.narrow)}willUpdate(e){this.page=Math.min(Math.max(this.page,0),Math.max(this.totalItems-1,0)),e.has(`totalItems`)||e.has(`itemsShown`)||e.has(`size`)||e.has(`narrow`)?this.cuts=g(this.page,this.totalItems,this.shown):e.has(`page`)&&(this.cuts=f(this.cuts,this.page,this.previous,this.totalItems,this.shown)),this.previous=this.page}go(e){e===this.page||e<0||e>=this.totalItems||(this.page=e,this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{page:e},bubbles:!0,composed:!0})))}renderItem(e){let t=this.localize.t.pagination;if(e.kind===`page`)return u`<li>
                <button class=${c({page:!0,active:e.active})} part="page" type="button" tabindex="0" data-page=${e.page+1} aria-current=${e.active?`page`:n} @click=${()=>this.go(e.page)}>
                    <span class="sr-only">${e.active?t.navActivePage:t.navPage}</span>
                    ${e.page+1}
                </button>
            </li>`;let r=Array.from({length:e.count},(t,n)=>u`<option value=${e.from+n}>${e.from+n+1}</option>`);return u`<li class="select-item">
            <select
                class="page"
                part="overflow"
                tabindex="0"
                aria-label=${t.navSelect}
                ?disabled=${this.disableOverflow}
                @change=${e=>{let t=e.target;this.go(Number(t.value)),t.value=``}}
            >
                <option value="" hidden></option>
                ${r}
            </select>
            <div class="icon-wrapper"><svg class="dots" viewBox="0 0 32 32" aria-hidden="true">${y}</svg></div>
        </li>`}render(){let e=this.localize.t.pagination,t=Math.max(this.totalItems,0),n=m(this.page,t,this.shown,this.cuts),r=e=>()=>this.go(p(this.page,t,e,this.loop));return u`<nav part="base" aria-label=${e.navLabel}>
            <ul class="list">
                <li>
                    <ui-icon-button kind="ghost" size=${this.size} label=${e.navPrevious} tooltip-placement=${this.tooltipPlacement} ?disabled=${!this.loop&&this.page<=0} @click=${r(-1)}>
                        <svg class="caret" viewBox="0 0 32 32" aria-hidden="true">${_}</svg>
                    </ui-icon-button>
                </li>
                ${n.map(e=>this.renderItem(e))}
                <li>
                    <ui-icon-button kind="ghost" size=${this.size} label=${e.navNext} tooltip-placement=${this.tooltipPlacement} ?disabled=${!this.loop&&this.page>=t-1} @click=${r(1)}>
                        <svg class="caret" viewBox="0 0 32 32" aria-hidden="true">${v}</svg>
                    </ui-icon-button>
                </li>
            </ul>
            <div class="sr-only" aria-live="polite" aria-atomic="true">${e.navStatus.replace(`{page}`,String(this.page+1)).replace(`{total}`,String(t))}</div>
        </nav>`}};t([e({type:Number})],x.prototype,`page`,void 0),t([e({type:Number,attribute:`total-items`})],x.prototype,`totalItems`,void 0),t([e({type:Number,attribute:`items-shown`})],x.prototype,`itemsShown`,void 0),t([e({type:Boolean})],x.prototype,`loop`,void 0),t([e({type:Boolean,attribute:`disable-overflow`})],x.prototype,`disableOverflow`,void 0),t([e({reflect:!0})],x.prototype,`size`,void 0),t([e({attribute:`tooltip-placement`})],x.prototype,`tooltipPlacement`,void 0),t([a()],x.prototype,`cuts`,void 0),t([a()],x.prototype,`narrow`,void 0),x=t([d(`ui-pagination-nav`)],x);