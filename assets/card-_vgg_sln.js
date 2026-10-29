import{Ct as e,D as t,Et as n,Mt as r,O as i,St as a,T as o,Tt as s,at as c,gt as l,kt as u,l as d,mt as f,wt as p}from"./theme-switcher-BZXGbHfR.js";import"./overflow-menu-CG3cmyeS.js";import{t as m}from"./overflow-Ctnez5Id.js";var h=class extends i{constructor(...e){super(...e),this.label=``,this.onSlotChange=()=>{this.toggleAttribute(`data-icon-only`,!!this.querySelector(`:scope > ui-icon-button`))}}static{this.styles=r`
        :host {
            display: inline-flex;
            flex: 1 0 0;
            min-inline-size: 0;
        }

        :host([data-icon-only]),
        :host([data-in-header]) {
            flex: 0 0 auto;
        }

        :host([data-hidden]) {
            display: none;
        }

        .action {
            display: inline-flex;
            flex: 1;
            min-inline-size: 0;
        }

        :host(:not([data-icon-only], [data-in-header])) ::slotted(ui-button) {
            display: block;
            flex: 1;
            width: 100%;
        }
    `}connectedCallback(){super.connectedCallback(),this.toggleAttribute(`data-in-header`,this.parentElement?.localName===`ui-card-actions`)}render(){return u`<div class="action" part="base"><slot @slotchange=${this.onSlotChange}></slot></div>`}};t([e()],h.prototype,`label`,void 0),h=t([p(`ui-card-action`)],h);function g(e,t){let n=e.querySelector(`ui-button, ui-icon-button, button`);return e.getAttribute(`label`)||n?.getAttribute(`label`)||n?.textContent?.trim()||`Action ${t+1}`}var _=class extends i{constructor(...e){super(...e),this.overflowMenuLabel=``,this.overflowed=[],this.localize=new o(this),this.frame=0,this.stop=e=>e.stopPropagation(),this.schedule=()=>{cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(this.measure)},this.measure=()=>{let e=this.actions,t=e.map(e=>{let t=`hidden`in e.dataset;delete e.dataset.hidden;let n=e.getBoundingClientRect().width+4;return t&&(e.dataset.hidden=``),n}),n=m({container:this.clientWidth,sizes:t,offset:36,gap:4});e.forEach((e,t)=>{e.toggleAttribute(`data-hidden`,t>=n)});let r=e.slice(n).map((e,t)=>({action:e,label:g(e,n+t)}));(r.length!==this.overflowed.length||r.some((e,t)=>e.action!==this.overflowed[t]?.action))&&(this.overflowed=r)},this.onPick=e=>{this.overflowed[Number(e.detail.value)]?.action.querySelector(`ui-button, ui-icon-button, button`)?.click()}}static{this.styles=r`
        :host {
            position: absolute;
            inset-block-start: var(--ui-space-xs);
            inset-inline-end: var(--ui-space-xs);
            inline-size: calc(50% - var(--ui-space-xs));
            max-inline-size: calc(50% - var(--ui-space-xs));
        }

        .actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: var(--ui-space-xxs);
            block-size: 32px;
        }
    `}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(this.schedule),this.observer.observe(this),this.addEventListener(`click`,this.stop)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),cancelAnimationFrame(this.frame),this.removeEventListener(`click`,this.stop)}get actions(){return[...this.children].filter(e=>e.localName===`ui-card-action`)}render(){return u`<div class="actions" part="base">
            <slot @slotchange=${this.schedule}></slot>
            ${this.overflowed.length?u`<ui-overflow-menu size="sm" placement="bottom-end" label=${this.overflowMenuLabel||this.localize.t.common.moreActions} @ui-select=${this.onPick}>
                      ${this.overflowed.map((e,t)=>u`<ui-menu-item label=${e.label} value=${String(t)}></ui-menu-item>`)}
                  </ui-overflow-menu>`:n}
        </div>`}};t([e({attribute:`overflow-menu-label`})],_.prototype,`overflowMenuLabel`,void 0),t([a()],_.prototype,`overflowed`,void 0),_=t([p(`ui-card-actions`)],_);var v=class extends i{constructor(...e){super(...e),this.isFlush=!1}static{this.styles=r`
        :host {
            display: block;
        }

        .body {
            padding: var(--ui-space-md);
            color: var(--_card-ink, var(--ui-ink));
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
        }

        :host([is-flush]) .body {
            padding: 0;
        }

        /* a horizontal card's body takes the room above the footer */
        :host([data-horizontal]) {
            flex: 1 0 auto;
        }
    `}render(){return u`<div class="body" part="base"><slot></slot></div>`}};t([e({type:Boolean,reflect:!0,attribute:`is-flush`})],v.prototype,`isFlush`,void 0),v=t([p(`ui-card-body`)],v);var y=class extends i{constructor(...e){super(...e),this.onSlotChange=()=>{this.toggleAttribute(`data-actions`,[...this.children].some(e=>e.localName===`ui-card-action`))}}static{this.styles=r`
        :host {
            display: block;
        }

        :host([data-in-linked-card]) {
            display: none;
        }

        .footer {
            display: flex;
            align-items: center;
            padding: var(--ui-space-md);
        }

        /* --ui-card-actions-padding / -gap: a design can inset the buttons, so a round button's fill and outside ring stay
           clear of the card's corners (Carbon: full-bleed buttons 1px apart) */
        :host([data-actions]) .footer {
            overflow: hidden;
            justify-content: flex-end;
            gap: var(--ui-card-actions-gap, 1px);
            padding: var(--ui-card-actions-padding, 0);
            border-block-start: 1px solid var(--ui-hairline);
        }
    `}render(){return u`<div class="footer" part="base"><slot @slotchange=${this.onSlotChange}></slot></div>`}};y=t([p(`ui-card-footer`)],y);var b=class extends i{static{this.styles=r`
        :host {
            display: block;
        }

        .media {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            max-block-size: 64px;
            margin-block: var(--ui-space-md);
            margin-inline-start: var(--ui-space-md);
        }
    `}render(){return u`<div class="media" part="base"><slot></slot></div>`}};b=t([p(`ui-card-header-media`)],b);var x=class extends i{constructor(...e){super(...e),this.onSlotChange=()=>{let e=[...this.children],t=e.some(e=>e.localName===`ui-card-title-media`),n=e.some(e=>e.localName===`ui-card-actions`);for(let r of e.filter(e=>e.localName===`ui-card-title`))r.toggleAttribute(`data-after-media`,t),r.toggleAttribute(`data-beside-actions`,n)}}static{this.styles=r`
        :host {
            display: block;
        }

        .header {
            position: relative;
            display: grid;
            container-type: inline-size;
            grid-template-columns: auto minmax(0, 1fr);
            row-gap: 0;
        }

        ::slotted(ui-card-header-media) {
            grid-column: 1 / -1;
        }

        ::slotted(ui-card-title-media) {
            grid-column: 1;
        }

        ::slotted(ui-card-title) {
            grid-column: 2;
        }
    `}render(){return u`<div class="header" part="base"><slot @slotchange=${this.onSlotChange}></slot></div>`}};x=t([p(`ui-card-header`)],x);var S=class extends i{constructor(...e){super(...e),this.ratio=``,this.mediaWidth=`33.33%`}static{this.styles=r`
        :host {
            display: block;
        }

        :host([data-horizontal]) {
            overflow: hidden;
            flex-basis: var(--_media-width, 33.33%);
            flex-shrink: 0;
            align-self: stretch;
        }

        .media {
            width: 100%;
            height: 100%;
            aspect-ratio: var(--_ratio, auto);
        }

        /* beside the content it takes the card's height instead */
        :host([data-horizontal]) .media {
            aspect-ratio: auto;
        }

        .media ::slotted(*) {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `}updated(){this.style.setProperty(`--_media-width`,this.mediaWidth)}render(){return u`<div class="media" part="base" style=${f({"--_ratio":this.ratio?this.ratio.replace(`x`,` / `):null})}><slot></slot></div>`}};t([e({reflect:!0})],S.prototype,`ratio`,void 0),t([e({attribute:`media-width`})],S.prototype,`mediaWidth`,void 0),S=t([p(`ui-card-media`)],S);var C=class extends i{static{this.styles=r`
        :host {
            display: block;
        }

        .media {
            display: flex;
            flex-shrink: 0;
            align-items: flex-start;
            justify-content: center;
            max-block-size: 64px;
            margin-block-start: var(--ui-space-md);
            padding-inline: var(--ui-space-md);
        }
    `}render(){return u`<div class="media" part="base"><slot></slot></div>`}};C=t([p(`ui-card-title-media`)],C);function w(e){if(e===null)return!1;let t=Number(e);return Number.isInteger(t)&&t>0?t:!0}var T=class extends i{constructor(...e){super(...e),this.label=``,this.description=``,this.titleTruncate=null,this.labelTruncate=null,this.descriptionTruncate=null,this.maxWidth=`100%`,this.hasStart=!1,this.hasEnd=!1}static{this.styles=r`
        :host {
            display: block;
            min-inline-size: 0;
        }

        .title {
            display: flex;
            flex-direction: column;
            gap: 2px; /* Carbon spacing-01 */
            min-inline-size: 0;
            margin: var(--ui-space-md);
        }

        :host([data-after-media]) .title {
            margin-inline-start: 0;
        }

        :host([data-beside-actions]) .title {
            max-inline-size: calc(50cqw - var(--ui-space-xs));
        }

        .label,
        .description,
        ::slotted([slot='label']),
        ::slotted([slot='description']) {
            color: var(--_card-ink-muted, var(--ui-ink-muted));
            font: var(--ui-font-caption);
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
        }

        .row {
            display: block;
            color: var(--_card-ink, var(--ui-ink));
            font: var(--_card-title-font, 600 16px/22px var(--ui-font-family));
        }

        .with-start {
            display: flex;
            align-items: flex-start;
            gap: var(--ui-space-xs);
        }

        /* Carbon keeps the (empty) start-icon box with its 2px top margin, so the row is 2px taller than its line */
        .start {
            display: flex;
            flex-shrink: 0;
            margin-block-start: 2px;
        }

        .end {
            display: inline-flex;
            align-items: center;
            margin-inline-start: var(--ui-space-xs);
            vertical-align: middle;
        }

        .end:not(.filled) {
            display: none;
        }

        .one-line {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: var(--_lines);
            text-overflow: ellipsis;
        }
    `}textClasses(e,t){let n=w(t);return{classes:l({[e]:!0,"one-line":n===!0,lines:typeof n==`number`}),style:f(typeof n==`number`?{"--_lines":String(n)}:{})}}render(){let e=this.textClasses(`label`,this.labelTruncate),t=this.textClasses(`description`,this.descriptionTruncate),r=w(this.titleTruncate),i=l({row:!0,"one-line":r===!0,lines:typeof r==`number`,"with-start":this.hasStart}),a=f(r===!1?{}:{maxInlineSize:this.maxWidth,"--_lines":typeof r==`number`?String(r):null});return u`<div class="title" part="base">
            <slot name="label">${this.label?u`<div class=${e.classes} style=${e.style}>${this.label}</div>`:n}</slot>
            <span class=${i} style=${a} part="title"
                ><span class="start"><slot name="title-start" @slotchange=${e=>this.hasStart=e.target.assignedElements().length>0}></slot></span
                ><slot></slot
                ><span class=${l({end:!0,filled:this.hasEnd})}><slot name="title-end" @slotchange=${e=>this.hasEnd=e.target.assignedElements().length>0}></slot></span
            ></span>
            <slot name="description">${this.description?u`<div class=${t.classes} style=${t.style}>${this.description}</div>`:n}</slot>
        </div>`}};t([e()],T.prototype,`label`,void 0),t([e()],T.prototype,`description`,void 0),t([e({attribute:`title-truncate`})],T.prototype,`titleTruncate`,void 0),t([e({attribute:`label-truncate`})],T.prototype,`labelTruncate`,void 0),t([e({attribute:`description-truncate`})],T.prototype,`descriptionTruncate`,void 0),t([e({attribute:`max-width`})],T.prototype,`maxWidth`,void 0),t([a()],T.prototype,`hasStart`,void 0),t([a()],T.prototype,`hasEnd`,void 0),T=t([p(`ui-card-title`)],T);var E=`ui-card-media, ui-card-header, ui-card-body, ui-card-footer`,D=class extends i{constructor(...e){super(...e),this.href=``,this.target=`_self`,this.clickable=!1,this.hideFooterIcon=!1,this.disabled=!1,this.label=``,this.density=`productive`,this.horizontal=!1,this.mediaPosition=`start`,this.localize=new o(this),this.syncParts=()=>{let e=this.clickable||!!this.href;for(let t of this.querySelectorAll(E))t.closest(`ui-card`)===this&&(t.localName===`ui-card-media`&&(this.horizontal?t.setAttribute(`slot`,`media`):t.removeAttribute(`slot`)),t.toggleAttribute(`data-horizontal`,this.horizontal),t.toggleAttribute(`data-in-linked-card`,e))},this.onKeydown=e=>{this.disabled||e.composedPath()[0]!==e.currentTarget||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),e.currentTarget.click())},this.onDisabledClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[c,r`
        /* what the parts read: the title's type by density, greyed text when disabled */
        :host {
            display: block;
            --_card-title-font: 600 16px/22px var(--ui-font-family);
            --_card-ink: var(--ui-ink);
            --_card-ink-muted: var(--ui-ink-muted);
        }

        :host([density='expressive']) {
            --_card-title-font: var(--ui-font-subhead);
        }

        :host([disabled]) {
            --_card-ink: var(--ui-ink-disabled);
            --_card-ink-muted: var(--ui-ink-disabled);
        }

        /* Carbon .cds--card */
        .card {
            position: relative;
            display: block;
            box-sizing: border-box;
            height: 100%;
            /* Carbon: square, a border only when clickable (below); --ui-card-* let a design round and outline every card */
            border: var(--ui-card-border, none);
            border-radius: var(--ui-card-radius, 0);
            overflow: var(--ui-card-overflow, visible); /* Kanok clips: the media follows the rounded corners */
            outline: var(--ui-focus-width, 2px) solid transparent;
            background-color: var(--ui-card-background, var(--ui-surface-1));
            color: var(--_card-ink);
            font: var(--ui-font-body);
            text-decoration: none;
        }

        .clickable {
            border: var(--ui-card-clickable-border, 1px solid var(--ui-border-tile-1)); /* Kanok: none, the fill sets it apart */
            cursor: pointer;
            transition: background-color var(--ui-duration-moderate) var(--ui-easing);
        }

        .clickable:hover {
            background-color: var(--ui-ghost-hover);
        }

        .clickable:active {
            background-color: var(--ui-ghost-active);
        }

        /* selected (beyond Carbon): the chosen look of <ui-selectable-tile checked>, its tokens and values */
        .clickable.selected {
            border: 1px solid var(--ui-tile-selected-border, var(--ui-layer-selected-inverse));
            background-color: var(--ui-tile-selected-background, var(--ui-highlight, var(--ui-card-background)));
        }

        .clickable.selected:hover {
            background-color: var(--ui-tile-selected-hover, var(--ui-tile-selected-background, var(--ui-highlight, var(--ui-card-background))));
        }

        /* the ring on :focus (a click too), as Carbon React's clickable card */
        .clickable:focus {
            outline-color: var(--ui-focus);
            outline-offset: 0;
        }

        /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
        .clickable:focus:not(:focus-visible) {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        .disabled {
            border-color: var(--ui-border-disabled);
            cursor: not-allowed;
        }

        .horizontal {
            display: flex;
            flex-direction: row;
            align-items: stretch;
        }

        .content {
            display: flex;
            flex: 1 1 0;
            flex-direction: column;
            min-inline-size: 0;
        }

        .footer-icon {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: var(--ui-space-md);
            color: var(--ui-icon-interactive);
            fill: currentColor;
        }

        .disabled .footer-icon {
            color: var(--ui-icon-disabled);
        }

        .footer-icon svg,
        .footer-icon ::slotted(svg) {
            display: block;
            width: 16px;
            height: 16px;
        }

        @media (forced-colors: active) {
            .card {
                border: 1px solid CanvasText;
            }
        }
    `]}updated(e){(e.has(`horizontal`)||e.has(`clickable`)||e.has(`href`)||e.has(`disabled`))&&this.syncParts()}pressed(){return this.selected===void 0?n:this.selected?`true`:`false`}renderContent(){if(!this.horizontal)return u`<slot @slotchange=${this.syncParts}></slot>`;let e=u`<slot name="media"></slot>`,t=u`<div class="content"><slot @slotchange=${this.syncParts}></slot></div>`;return this.mediaPosition===`end`?u`${t}${e}`:u`${e}${t}`}renderInner(){let e=this.clickable&&!this.hideFooterIcon?u`<div class="footer-icon" aria-hidden="true">
                  <slot name="footer-icon"><svg viewBox="0 0 16 16"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg></slot>
              </div>`:n;return u`${this.renderContent()}${e}`}render(){let e=l({card:!0,clickable:this.clickable&&!this.disabled,selected:!!this.selected,disabled:this.disabled,horizontal:this.horizontal});if(this.href&&!this.disabled){let t=this.target===`_blank`;return u`<a
                class=${e}
                part="base"
                href=${this.href}
                target=${this.target}
                rel=${t?`noopener noreferrer`:n}
                aria-label=${this.label||n}
                tabindex="0"
                @click=${d}
                >${this.renderInner()}${t?u`<span class="sr-only">${this.localize.t.common.opensInNewTab}</span>`:n}</a
            >`}return this.clickable?u`<div
                class=${e}
                part="base"
                role="button"
                tabindex=${this.disabled?`-1`:`0`}
                aria-disabled=${this.disabled?`true`:`false`}
                aria-pressed=${this.pressed()}
                aria-label=${this.label||n}
                @click=${this.onDisabledClick}
                @keydown=${this.onKeydown}
            >
                ${this.renderInner()}
            </div>`:u`<div class=${e} part="base" aria-disabled=${this.disabled?`true`:n}>${this.renderInner()}</div>`}};t([e()],D.prototype,`href`,void 0),t([e()],D.prototype,`target`,void 0),t([e({type:Boolean,reflect:!0})],D.prototype,`clickable`,void 0),t([e({type:Boolean,reflect:!0})],D.prototype,`selected`,void 0),t([e({type:Boolean,attribute:`hide-footer-icon`})],D.prototype,`hideFooterIcon`,void 0),t([e({type:Boolean,reflect:!0})],D.prototype,`disabled`,void 0),t([e()],D.prototype,`label`,void 0),t([e({reflect:!0})],D.prototype,`density`,void 0),t([e({type:Boolean,reflect:!0})],D.prototype,`horizontal`,void 0),t([e({reflect:!0,attribute:`media-position`})],D.prototype,`mediaPosition`,void 0),D=t([p(`ui-card`)],D);