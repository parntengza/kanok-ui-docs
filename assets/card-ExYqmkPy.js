import{Ct as e,D as t,E as n,Ot as r,St as i,Tt as a,c as o,ht as s,it as c,jt as l,pt as u,w as d,wt as f,xt as p}from"./theme-switcher-BGAHXRgF.js";import"./overflow-menu-BerTRcGD.js";import{t as m}from"./overflow-Ctnez5Id.js";function h(e,t){let n=e.querySelector(`ui-button, ui-icon-button, button`);return e.getAttribute(`label`)||n?.getAttribute(`label`)||n?.textContent?.trim()||`Action ${t+1}`}var g=class extends t{constructor(...e){super(...e),this.overflowMenuLabel=``,this.overflowed=[],this.localize=new d(this),this.frame=0,this.stop=e=>e.stopPropagation(),this.schedule=()=>{cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(this.measure)},this.measure=()=>{let e=this.actions,t=e.map(e=>{let t=`hidden`in e.dataset;delete e.dataset.hidden;let n=e.getBoundingClientRect().width+4;return t&&(e.dataset.hidden=``),n}),n=m({container:this.clientWidth,sizes:t,offset:36,gap:4});e.forEach((e,t)=>{e.toggleAttribute(`data-hidden`,t>=n)});let r=e.slice(n).map((e,t)=>({action:e,label:h(e,n+t)}));(r.length!==this.overflowed.length||r.some((e,t)=>e.action!==this.overflowed[t]?.action))&&(this.overflowed=r)},this.onPick=e=>{this.overflowed[Number(e.detail.value)]?.action.querySelector(`ui-button, ui-icon-button, button`)?.click()}}static{this.styles=l`
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
    `}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(this.schedule),this.observer.observe(this),this.addEventListener(`click`,this.stop)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),cancelAnimationFrame(this.frame),this.removeEventListener(`click`,this.stop)}get actions(){return[...this.children].filter(e=>e.localName===`ui-card-action`)}render(){return r`<div class="actions" part="base">
            <slot @slotchange=${this.schedule}></slot>
            ${this.overflowed.length?r`<ui-overflow-menu size="sm" placement="bottom-end" label=${this.overflowMenuLabel||this.localize.t.common.moreActions} @ui-select=${this.onPick}>
                      ${this.overflowed.map((e,t)=>r`<ui-menu-item label=${e.label} value=${String(t)}></ui-menu-item>`)}
                  </ui-overflow-menu>`:a}
        </div>`}};n([i({attribute:`overflow-menu-label`})],g.prototype,`overflowMenuLabel`,void 0),n([p()],g.prototype,`overflowed`,void 0),g=n([e(`ui-card-actions`)],g);var _=class extends t{constructor(...e){super(...e),this.label=``,this.onSlotChange=()=>{this.toggleAttribute(`data-icon-only`,!!this.querySelector(`:scope > ui-icon-button`))}}static{this.styles=l`
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
    `}connectedCallback(){super.connectedCallback(),this.toggleAttribute(`data-in-header`,this.parentElement?.localName===`ui-card-actions`)}render(){return r`<div class="action" part="base"><slot @slotchange=${this.onSlotChange}></slot></div>`}};n([i()],_.prototype,`label`,void 0),_=n([e(`ui-card-action`)],_);var v=class extends t{constructor(...e){super(...e),this.isFlush=!1}static{this.styles=l`
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
    `}render(){return r`<div class="body" part="base"><slot></slot></div>`}};n([i({type:Boolean,reflect:!0,attribute:`is-flush`})],v.prototype,`isFlush`,void 0),v=n([e(`ui-card-body`)],v);var y=class extends t{constructor(...e){super(...e),this.onSlotChange=()=>{this.toggleAttribute(`data-actions`,[...this.children].some(e=>e.localName===`ui-card-action`))}}static{this.styles=l`
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
    `}render(){return r`<div class="footer" part="base"><slot @slotchange=${this.onSlotChange}></slot></div>`}};y=n([e(`ui-card-footer`)],y);var b=class extends t{static{this.styles=l`
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
    `}render(){return r`<div class="media" part="base"><slot></slot></div>`}};b=n([e(`ui-card-header-media`)],b);var x=class extends t{constructor(...e){super(...e),this.onSlotChange=()=>{let e=[...this.children],t=e.some(e=>e.localName===`ui-card-title-media`),n=e.some(e=>e.localName===`ui-card-actions`);for(let r of e.filter(e=>e.localName===`ui-card-title`))r.toggleAttribute(`data-after-media`,t),r.toggleAttribute(`data-beside-actions`,n)}}static{this.styles=l`
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
    `}render(){return r`<div class="header" part="base"><slot @slotchange=${this.onSlotChange}></slot></div>`}};x=n([e(`ui-card-header`)],x);var S=class extends t{constructor(...e){super(...e),this.ratio=``,this.mediaWidth=`33.33%`}static{this.styles=l`
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
    `}updated(){this.style.setProperty(`--_media-width`,this.mediaWidth)}render(){return r`<div class="media" part="base" style=${u({"--_ratio":this.ratio?this.ratio.replace(`x`,` / `):null})}><slot></slot></div>`}};n([i({reflect:!0})],S.prototype,`ratio`,void 0),n([i({attribute:`media-width`})],S.prototype,`mediaWidth`,void 0),S=n([e(`ui-card-media`)],S);var C=class extends t{static{this.styles=l`
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
    `}render(){return r`<div class="media" part="base"><slot></slot></div>`}};C=n([e(`ui-card-title-media`)],C);function w(e){if(e===null)return!1;let t=Number(e);return Number.isInteger(t)&&t>0?t:!0}var T=class extends t{constructor(...e){super(...e),this.label=``,this.description=``,this.titleTruncate=null,this.labelTruncate=null,this.descriptionTruncate=null,this.maxWidth=`100%`,this.hasStart=!1,this.hasEnd=!1}static{this.styles=l`
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
    `}textClasses(e,t){let n=w(t);return{classes:s({[e]:!0,"one-line":n===!0,lines:typeof n==`number`}),style:u(typeof n==`number`?{"--_lines":String(n)}:{})}}render(){let e=this.textClasses(`label`,this.labelTruncate),t=this.textClasses(`description`,this.descriptionTruncate),n=w(this.titleTruncate),i=s({row:!0,"one-line":n===!0,lines:typeof n==`number`,"with-start":this.hasStart}),o=u(n===!1?{}:{maxInlineSize:this.maxWidth,"--_lines":typeof n==`number`?String(n):null});return r`<div class="title" part="base">
            <slot name="label">${this.label?r`<div class=${e.classes} style=${e.style}>${this.label}</div>`:a}</slot>
            <span class=${i} style=${o} part="title"
                ><span class="start"><slot name="title-start" @slotchange=${e=>this.hasStart=e.target.assignedElements().length>0}></slot></span
                ><slot></slot
                ><span class=${s({end:!0,filled:this.hasEnd})}><slot name="title-end" @slotchange=${e=>this.hasEnd=e.target.assignedElements().length>0}></slot></span
            ></span>
            <slot name="description">${this.description?r`<div class=${t.classes} style=${t.style}>${this.description}</div>`:a}</slot>
        </div>`}};n([i()],T.prototype,`label`,void 0),n([i()],T.prototype,`description`,void 0),n([i({attribute:`title-truncate`})],T.prototype,`titleTruncate`,void 0),n([i({attribute:`label-truncate`})],T.prototype,`labelTruncate`,void 0),n([i({attribute:`description-truncate`})],T.prototype,`descriptionTruncate`,void 0),n([i({attribute:`max-width`})],T.prototype,`maxWidth`,void 0),n([p()],T.prototype,`hasStart`,void 0),n([p()],T.prototype,`hasEnd`,void 0),T=n([e(`ui-card-title`)],T);var E=`ui-card-media, ui-card-header, ui-card-body, ui-card-footer`,D=class extends t{constructor(...e){super(...e),this.href=``,this.target=`_self`,this.clickable=!1,this.disabled=!1,this.label=``,this.density=`productive`,this.horizontal=!1,this.mediaPosition=`start`,this.localize=new d(this),this.syncParts=()=>{let e=this.clickable||!!this.href;for(let t of this.querySelectorAll(E))t.closest(`ui-card`)===this&&(t.localName===`ui-card-media`&&(this.horizontal?t.setAttribute(`slot`,`media`):t.removeAttribute(`slot`)),t.toggleAttribute(`data-horizontal`,this.horizontal),t.toggleAttribute(`data-in-linked-card`,e))},this.onKeydown=e=>{this.disabled||e.composedPath()[0]!==e.currentTarget||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),e.currentTarget.click())},this.onDisabledClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[c,l`
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
    `]}updated(e){(e.has(`horizontal`)||e.has(`clickable`)||e.has(`href`)||e.has(`disabled`))&&this.syncParts()}renderContent(){if(!this.horizontal)return r`<slot @slotchange=${this.syncParts}></slot>`;let e=r`<slot name="media"></slot>`,t=r`<div class="content"><slot @slotchange=${this.syncParts}></slot></div>`;return this.mediaPosition===`end`?r`${t}${e}`:r`${e}${t}`}renderInner(){let e=this.clickable?r`<div class="footer-icon" aria-hidden="true">
                  <slot name="footer-icon"><svg viewBox="0 0 16 16"><path d="M9.3 3.7 13.1 7.5H1v1h12.1l-3.8 3.8.7.7 5-5-5-5z" /></svg></slot>
              </div>`:a;return r`${this.renderContent()}${e}`}render(){let e=s({card:!0,clickable:this.clickable&&!this.disabled,disabled:this.disabled,horizontal:this.horizontal});if(this.href&&!this.disabled){let t=this.target===`_blank`;return r`<a
                class=${e}
                part="base"
                href=${this.href}
                target=${this.target}
                rel=${t?`noopener noreferrer`:a}
                aria-label=${this.label||a}
                tabindex="0"
                @click=${o}
                >${this.renderInner()}${t?r`<span class="sr-only">${this.localize.t.common.opensInNewTab}</span>`:a}</a
            >`}return this.clickable?r`<div
                class=${e}
                part="base"
                role="button"
                tabindex=${this.disabled?`-1`:`0`}
                aria-disabled=${this.disabled?`true`:`false`}
                aria-label=${this.label||a}
                @click=${this.onDisabledClick}
                @keydown=${this.onKeydown}
            >
                ${this.renderInner()}
            </div>`:r`<div class=${e} part="base" aria-disabled=${this.disabled?`true`:a}>${this.renderInner()}</div>`}};n([i()],D.prototype,`href`,void 0),n([i()],D.prototype,`target`,void 0),n([i({type:Boolean,reflect:!0})],D.prototype,`clickable`,void 0),n([i({type:Boolean,reflect:!0})],D.prototype,`disabled`,void 0),n([i()],D.prototype,`label`,void 0),n([i({reflect:!0})],D.prototype,`density`,void 0),n([i({type:Boolean,reflect:!0})],D.prototype,`horizontal`,void 0),n([i({reflect:!0,attribute:`media-position`})],D.prototype,`mediaPosition`,void 0),D=n([e(`ui-card`)],D);