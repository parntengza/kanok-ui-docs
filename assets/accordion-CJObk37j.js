import{Ct as e,D as t,Mt as n,O as r,Tt as i,X as a,bt as o,kt as s,lt as c,wt as l}from"./theme-switcher-BZXGbHfR.js";import{a as u,n as d}from"./skeleton-Bt17J2no.js";var f=class extends r{constructor(...e){super(...e),this.heading=``,this.open=!1,this.disabled=!1,this.ids=c(`ui-accordion`)}static{this.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0}}static{this.styles=n`
        :host {
            --_h: var(--ui-field-height-md, 40px);

            display: block;
            font-family: var(--ui-font-family);
        }

        /* the dividers are drawn by the item's part, not :host, so a page-wide CSS reset can't remove them */
        .item {
            border-block-start: 1px solid var(--ui-hairline);
            transition: border-color var(--ui-duration-moderate) var(--ui-easing);
        }

        :host(:last-of-type) .item {
            border-block-end: 1px solid var(--ui-hairline);
        }

        :host([data-size='sm']) {
            --_h: var(--ui-field-height-sm, 32px);
        }

        :host([data-size='lg']) {
            --_h: var(--ui-field-height-lg, 48px);
        }

        .heading {
            position: relative;
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-start;
            justify-content: flex-start;
            box-sizing: border-box;
            width: 100%;
            min-height: var(--_h);
            margin: 0;
            padding: 0 var(--ui-space-md) 0 0;
            border: 0;
            background: none;
            color: var(--ui-ink);
            font: inherit;
            text-align: start;
            cursor: pointer;
            transition: background-color var(--ui-duration-moderate) var(--ui-easing);
        }

        .heading:hover {
            background-color: var(--ui-ghost-hover);
        }

        /* a row: the ring inside, in rounded corners (--ui-accordion-focus-radius; Carbon: square) */
        .heading:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
            border-radius: var(--ui-accordion-focus-radius, 0);
        }

        .heading:disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        .heading:disabled:hover {
            background: none;
        }

        .arrow {
            flex: 0 0 16px;
            width: 16px;
            height: 16px;
            margin: calc((var(--_h) - 16px) / 2) 0 0;
            fill: currentColor;
            transform: rotate(-270deg);
            transition: transform var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([open]) .arrow {
            transform: rotate(-90deg);
        }

        .title {
            flex: 1;
            margin: 0 0 0 var(--ui-space-md);
            padding: calc((var(--_h) - 20px) / 2) 0;
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            word-break: break-word;
        }

        /* chevron on the start side (Carbon align="start") */
        :host([data-align='start']) .heading {
            flex-direction: row;
        }

        :host([data-align='start']) .arrow {
            margin: calc((var(--_h) - 16px) / 2 + 2px) 0 0 var(--ui-space-md);
        }

        :host([data-align='start']) .title {
            margin-inline-end: var(--ui-space-md);
        }

        /*
         * Carbon .cds--accordion__wrapper: every property moves (display too, allow-discrete) for 110ms with the
         * entrance easing; it opens from @starting-style (no padding, height or opacity) and fades out as it closes.
         */
        .wrapper {
            display: none;
            overflow: hidden;
            padding: 0;
            max-height: 0;
            opacity: 0;
            transition: all var(--ui-duration-moderate) var(--ui-easing-entrance) allow-discrete;
        }

        :host([open]) .wrapper {
            display: block;
            overflow: visible;
            max-height: none;
            opacity: 1;
            padding-block: var(--ui-space-xs) var(--ui-space-lg);
        }

        @starting-style {
            :host([open]) .wrapper {
                padding: 0;
                max-height: 0;
                opacity: 0;
            }
        }

        .content {
            padding-inline: var(--ui-space-md);
            font: var(--ui-font-body-sm);
            line-height: 20px;
            letter-spacing: var(--ui-tracking-body);
        }

        @media (min-width: 672px) {
            .content {
                padding-inline-end: var(--ui-space-xxl); /* Carbon spacing-09 */
            }
        }

        @media (min-width: 1056px) {
            .content {
                padding-inline-end: 25%;
            }
        }

        :host([data-align='start']) .content {
            margin-inline-start: calc(var(--ui-space-md) + var(--ui-space-md));
        }

        /* flush: no outer dividers, a 16px-inset line instead (Carbon isFlush) */
        :host([data-flush]) .item {
            border-color: transparent;
        }

        :host([data-flush]) .item::before {
            content: '';
            display: block;
            height: 1px;
            margin-inline: var(--ui-space-md);
            background-color: var(--ui-hairline);
        }

        @media (forced-colors: active) {
            .heading:focus-visible {
                outline-color: Highlight;
            }
        }
    `}get titleText(){return this.heading}set titleText(e){this.heading=e}static get observedAttributes(){return[...super.observedAttributes,`title`]}attributeChangedCallback(e,t,n){a(this,e,n)||super.attributeChangedCallback(e,t,n)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0})))}render(){return s`<div class="item">
            <button class="heading" part="heading" id="${this.ids}-heading" type="button" aria-expanded=${this.open?`true`:`false`} aria-controls="${this.ids}-content" ?disabled=${this.disabled} @click=${this.toggle}>
                <svg class="arrow" part="arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" /></svg>
                <span class="title" part="title"><slot name="title">${this.heading}</slot></span>
            </button>
            <div class="wrapper" id="${this.ids}-content" role="region" aria-labelledby="${this.ids}-heading" ?hidden=${!this.open}>
                <div class="content" part="content"><slot></slot></div>
            </div>
        </div>`}};t([e()],f.prototype,`heading`,void 0),t([e({type:Boolean,reflect:!0})],f.prototype,`open`,void 0),t([e({type:Boolean,reflect:!0})],f.prototype,`disabled`,void 0),f=t([l(`ui-accordion-item`)],f);var p=class extends d{constructor(...e){super(...e),this.count=4,this.open=!0,this.alignment=`end`}static{this.styles=[u,n`
            :host {
                display: block;
            }

            .item {
                border-block-start: 1px solid var(--ui-hairline);
            }

            .item:last-child {
                border-block-end: 1px solid var(--ui-hairline);
            }

            .heading {
                display: flex;
                align-items: center;
                gap: var(--ui-space-md);
                block-size: 40px;
                padding: 0 var(--ui-space-md);
            }

            :host([alignment='start']) .heading {
                flex-direction: row-reverse;
            }

            .title {
                flex: 1;
                block-size: 16px;
            }

            .chevron {
                flex-shrink: 0;
                inline-size: 16px;
                block-size: 16px;
                fill: var(--ui-icon-primary);
                transform: rotate(90deg); /* as <ui-accordion-item>: pointing down, up when open */
            }

            .open {
                transform: rotate(-90deg);
            }

            /* Carbon's content: 16px in, a quarter of the width free at the end */
            .content {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-xs);
                padding: 0 25% var(--ui-space-xs) var(--ui-space-md);
            }

            .line {
                block-size: 16px;
            }

            .line:nth-child(1) {
                inline-size: 90%;
            }

            .line:nth-child(2) {
                inline-size: 80%;
            }

            .line:nth-child(3) {
                inline-size: 95%;
            }
        `]}render(){let e=e=>s`<div class="heading">
            <span class="bone title" part="title"></span>
            <svg class=${e?`chevron open`:`chevron`} viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" /></svg>
        </div>`;return Array.from({length:Math.max(1,this.count)},(t,n)=>{let r=this.open&&n===0;return s`<div class="item">
                ${e(r)}
                ${r?s`<div class="content"><span class="bone line" part="line"></span><span class="bone line" part="line"></span><span class="bone line" part="line"></span></div>`:``}
            </div>`})}};t([e({type:Number})],p.prototype,`count`,void 0),t([e({type:Boolean})],p.prototype,`open`,void 0),t([e({reflect:!0})],p.prototype,`alignment`,void 0),p=t([l(`ui-accordion-skeleton`)],p);var m=class extends r{constructor(...e){super(...e),this.size=`md`,this.align=`end`,this.flush=!1,this.disabled=!1}static{this.styles=n`
        :host {
            display: block;
            width: 100%;
            list-style: none;
            font-family: var(--ui-font-family);
            /* the reflected \`align\` attribute is an HTML presentational hint for text-align: undo it */
            text-align: start;
        }
    `}updated(){this.sync()}sync(){for(let e of this.items)e.dataset.size=this.size,e.dataset.align=this.align,e.toggleAttribute(`data-flush`,this.flush&&this.align!==`start`),this.disabled&&!e.disabled?(e.disabled=!0,e.dataset.uiAccordionDisabled=``):!this.disabled&&`uiAccordionDisabled`in e.dataset&&(e.disabled=!1,delete e.dataset.uiAccordionDisabled)}focus(e){this.items.find(e=>!e.disabled)?.focus(e)}render(){return s`<div role="list"><slot @slotchange=${()=>this.sync()}></slot></div>`}};t([e({reflect:!0})],m.prototype,`size`,void 0),t([e({reflect:!0})],m.prototype,`align`,void 0),t([e({type:Boolean,reflect:!0})],m.prototype,`flush`,void 0),t([e({type:Boolean,reflect:!0})],m.prototype,`disabled`,void 0),t([o({selector:`ui-accordion-item`})],m.prototype,`items`,void 0),m=t([l(`ui-accordion`)],m);