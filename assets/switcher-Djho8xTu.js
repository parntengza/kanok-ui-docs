import{Ct as e,D as t,Et as n,G as r,Mt as i,N as a,O as o,St as s,T as c,Tt as l,bt as u,f as d,h as f,ht as p,kt as m,l as h,lt as g,mt as _,n as v,r as y,t as b,v as x,wt as S,xt as C}from"./theme-switcher-BZXGbHfR.js";var w=class extends o{constructor(...e){super(...e),this.heading=``,this.headingId=g(`ui-header-mega-group`)}static{this.styles=i`
        :host {
            display: block;
            min-inline-size: 0;
        }

        .heading {
            margin: 0 0 8px;
            color: var(--ui-ink-muted);
            font: var(--ui-mega-heading-font, var(--ui-font-caption));
            letter-spacing: var(--ui-tracking-caption, 0.32px);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 2px;
            margin: 0;
            padding: 0;
        }
    `}render(){return m`
            ${this.heading?m`<p class="heading" part="heading" id=${this.headingId}>${this.heading}</p>`:n}
            <div class="list" part="list" role="list" aria-labelledby=${p(this.heading?this.headingId:void 0)}><slot></slot></div>
        `}};t([e()],w.prototype,`heading`,void 0),w=t([S(`ui-header-mega-group`)],w);var T=class extends o{constructor(...e){super(...e),this.href=`#`,this.description=``,this.current=!1,this.target=``,this.rel=``,this.hasIcon=!1}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=i`
        :host {
            display: block;
        }

        a {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            box-sizing: border-box;
            margin-inline: -8px;
            padding: 8px;
            border-radius: var(--ui-mega-item-radius, 0);
            color: var(--ui-mega-item-ink, var(--ui-ink-muted));
            text-decoration: none;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                color var(--ui-duration-moderate);
        }

        a:hover {
            background-color: var(--ui-mega-item-hover-background, var(--ui-layer-hover-1));
            color: var(--ui-ink);
        }

        a:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        :host([current]) a {
            color: var(--ui-ink);
        }

        .icon {
            display: none;
            flex: none;
            place-items: center;
            inline-size: 20px;
            block-size: 20px;
            margin-block-start: 2px;
            fill: currentColor;
        }

        .icon.filled {
            display: grid;
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-inline-size: 0;
        }

        .title {
            font: var(--ui-mega-item-font, var(--ui-font-body-sm));
            letter-spacing: var(--ui-tracking-body);
        }

        :host([current]) .title {
            font-weight: 600;
        }

        .description {
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        @media (forced-colors: active) {
            :host([current]) a {
                outline: 1px solid Highlight;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&this.closest(`ui-header-mega-menu`)?.requestUpdate()}onIconSlotChange(e){this.hasIcon=e.target.assignedNodes().length>0,this.requestUpdate()}render(){return m`<a part="base" href=${this.href} target=${this.target||n} rel=${this.rel||n} aria-current=${p(this.current?`page`:void 0)} @click=${h}>
            <span class="icon ${this.hasIcon?`filled`:``}" aria-hidden="true"><slot name="icon" @slotchange=${this.onIconSlotChange}></slot></span>
            <span class="text"><span class="title"><slot></slot></span>${this.description?m`<span class="description" part="description">${this.description}</span>`:n}</span>
        </a>`}};t([e()],T.prototype,`href`,void 0),t([e()],T.prototype,`description`,void 0),t([e({type:Boolean,reflect:!0})],T.prototype,`current`,void 0),t([e()],T.prototype,`target`,void 0),t([e()],T.prototype,`rel`,void 0),T=t([S(`ui-header-mega-item`)],T);var E={open:!1,openedBy:null},D=e=>e?0:150;function O(e,t){return e.open&&e.openedBy===`hover`?{open:!0,openedBy:t}:e.open?E:{open:!0,openedBy:t}}var k=e=>e.open&&e.openedBy===`hover`,A=e=>e===`mouse`,j=class extends o{constructor(...e){super(...e),this.label=``,this.open=!1,this.current=!1,this.box=null,this.panelId=g(`ui-header-mega-menu`),this.openedBy=null,this.onPointerEnter=e=>{if(this.collapsed||!A(e.pointerType)||(this.clearTimers(),this.open))return;let t=D(this.others().some(e=>e.open));t===0?this.apply({open:!0,openedBy:`hover`}):this.openTimer=setTimeout(()=>this.apply({open:!0,openedBy:`hover`}),t)},this.onPointerLeave=e=>{!this.collapsed&&A(e.pointerType)&&(clearTimeout(this.openTimer),k(this.megaState)&&(this.closeTimer=setTimeout(()=>{k(this.megaState)&&this.apply(E)},300)))},this.place=()=>{let e=this.closest(`ui-header`)?.shadowRoot?.querySelector(`header`)??null,t=(e??this).getBoundingClientRect();this.box=e?{top:t.bottom,left:t.left,width:t.width}:{top:t.bottom,left:0,width:document.documentElement.clientWidth}},this.onDocumentPointerDown=e=>{e.composedPath().includes(this)||this.apply(E)},this.onKeydown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.apply(E),this.trigger.focus())}}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,i`
            :host {
                position: relative;
                display: block;
                block-size: 100%;
            }

            /* a manual popover: the top layer, above a host app's own fixed bars whatever their z-index */
            .panel {
                position: fixed;
                inset: auto;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                border: 0;
                color: var(--ui-ink);
                max-block-size: calc(100vh - var(--_top, 48px));
                overflow-y: auto;
                border-block-end: var(--ui-mega-panel-border, none);
                background-color: var(--ui-mega-panel-background, var(--ui-overlay-background, var(--ui-surface-1)));
                box-shadow: var(--ui-mega-panel-shadow, 0 4px 8px 0 rgb(0 0 0 / 0.5));
                animation: ui-mega-in var(--ui-duration-fast, 110ms) var(--ui-easing);
            }

            .panel[hidden] {
                display: none;
            }

            @keyframes ui-mega-in {
                from {
                    opacity: 0;
                    transform: translateY(-4px);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .panel {
                    animation: none;
                }
            }

            .content {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(var(--ui-mega-column-width, 240px), 1fr));
                gap: var(--ui-mega-gap, 32px);
                box-sizing: border-box;
                padding: var(--ui-mega-padding, 24px 32px 32px);
            }

            /* a narrow collapsed bar (and the side nav's copy): an accordion row, its groups stacked under it */
            :host([data-in-side-nav]) {
                block-size: auto;
            }

            :host([data-in-side-nav]) .trigger {
                inline-size: 100%;
                block-size: 48px;
                justify-content: space-between;
            }

            :host([data-in-side-nav]) .panel {
                position: static;
                inline-size: auto;
                max-block-size: none;
                overflow: visible;
                border: none;
                background-color: transparent;
                box-shadow: none;
                animation: none;
            }

            :host([data-in-side-nav]) .content {
                grid-template-columns: minmax(0, 1fr);
                gap: 24px;
                padding: 8px 16px 24px;
            }

            @media (forced-colors: active) {
                .panel {
                    border-block-end: 1px solid CanvasText;
                }
            }
        `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`),this.addEventListener(`pointerenter`,this.onPointerEnter),this.addEventListener(`pointerleave`,this.onPointerLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`pointerenter`,this.onPointerEnter),this.removeEventListener(`pointerleave`,this.onPointerLeave),this.clearTimers(),this.stopListening()}get collapsed(){return r(this,`inSideNav`)}get megaState(){return{open:this.open,openedBy:this.openedBy}}apply(e){this.openedBy=e.openedBy,e.open&&!this.collapsed&&this.closeOthers(),this.open=e.open}others(){let e=this.parentElement;return e?[...e.children].filter(e=>e!==this&&(e.localName===`ui-header-mega-menu`||e.localName===`ui-header-menu`)):[]}closeOthers(){for(let e of this.others())e.open=!1}clearTimers(){clearTimeout(this.openTimer),clearTimeout(this.closeTimer)}onTriggerClick(e){this.clearTimers(),this.apply(O(this.megaState,e.detail===0?`keyboard`:`click`))}async onTriggerKeydown(e){e.key===`ArrowDown`&&(e.preventDefault(),this.open||this.apply({open:!0,openedBy:`keyboard`}),await this.updateComplete,this.querySelector(`ui-header-mega-item`)?.focus())}willUpdate(e){e.has(`open`)&&this.open&&!this.collapsed&&this.place()}updated(e){e.has(`open`)&&(this.syncPopover(),this.open?this.startListening():(this.openedBy=null,this.clearTimers(),this.stopListening()),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0})))}syncPopover(){let e=this.shadowRoot?.querySelector(`.panel`);if(!e?.hasAttribute(`popover`))return;let t=e.matches(`:popover-open`);this.open&&!t?e.showPopover():!this.open&&t&&e.hidePopover()}startListening(){this.collapsed||(this.stopOutside??=a(document,this.onDocumentPointerDown),document.addEventListener(`keydown`,this.onKeydown,!0),window.addEventListener(`resize`,this.place),window.addEventListener(`scroll`,this.place,{capture:!0,passive:!0}))}stopListening(){this.stopOutside?.(),this.stopOutside=void 0,document.removeEventListener(`keydown`,this.onKeydown,!0),window.removeEventListener(`resize`,this.place),window.removeEventListener(`scroll`,this.place,{capture:!0})}onFocusOut(e){if(this.collapsed)return;let t=e.relatedTarget;t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&this.apply(E)}onPanelClick(e){!this.collapsed&&e.target.closest(`ui-header-mega-item`)&&(this.apply(E),this.trigger.focus())}render(){let e=this.current||!this.open&&[...this.querySelectorAll(`ui-header-mega-item`)].some(e=>e.current),t=this.box&&!this.collapsed?{top:`${this.box.top}px`,left:`${this.box.left}px`,width:`${this.box.width}px`,"--_top":`${this.box.top}px`}:{};return m`
            <button class="trigger ${e?`current`:``}" part="trigger" type="button" tabindex="0" aria-expanded=${this.open?`true`:`false`} aria-controls=${this.panelId} @click=${this.onTriggerClick} @keydown=${this.onTriggerKeydown} @focusout=${this.onFocusOut}>
                ${this.label}${b}
            </button>
            <div class="panel" part="panel" id=${this.panelId} popover=${this.collapsed?n:`manual`} ?hidden=${this.collapsed&&!this.open} style=${_(t)} @focusout=${this.onFocusOut} @click=${this.onPanelClick}>
                <div class="content" part="content"><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
            </div>
        `}};t([e()],j.prototype,`label`,void 0),t([e({type:Boolean,reflect:!0})],j.prototype,`open`,void 0),t([e({type:Boolean,reflect:!0})],j.prototype,`current`,void 0),t([s()],j.prototype,`box`,void 0),t([C(`.trigger`)],j.prototype,`trigger`,void 0),j=t([S(`ui-header-mega-menu`)],j);var M=class extends o{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=i`
        :host {
            display: block;
            block-size: 100%;
        }

        a {
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 100%;
            padding: 0 16px;
            border: 2px solid transparent;
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: 0;
            text-decoration: none;
            white-space: nowrap;
            user-select: none;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate),
                color var(--ui-duration-moderate);
        }

        a:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-ink);
        }

        a:active {
            background-color: var(--ui-canvas-active);
            color: var(--ui-ink);
        }

        a:focus-visible {
            border-color: var(--ui-focus);
        }

        :host([current]) a {
            color: var(--ui-ink);
        }

        :host([current]) a::after {
            content: '';
            position: absolute;
            inset-block-end: -2px;
            inset-inline-start: -2px;
            inline-size: calc(100% + 4px);
            block-size: 3px;
            background-color: var(--ui-nav-current-mark, var(--ui-primary)); /* border-interactive; the side nav's setting */
        }

        /* inside a dropdown / the side nav: 48px rows on the layer, bar on the start edge */
        :host([data-in-menu]) {
            block-size: 48px;
        }

        :host([data-in-menu]) a {
            background-color: var(--ui-surface-1);
        }

        :host([data-in-menu]) a:hover {
            background-color: var(--ui-layer-hover-1);
        }

        :host([data-in-menu][current]) a {
            background-color: var(--ui-layer-selected-1);
        }

        :host([data-in-menu][current]) a::after,
        :host([data-in-side-nav][current]) a::after {
            inset-block-start: -2px;
            inset-inline-start: -2px;
            inline-size: 3px;
            block-size: calc(100% + 4px);
        }

        .text {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        @media (forced-colors: active) {
            :host([current]) a::after {
                background-color: Highlight;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&(this.parentElement?.closest(`ui-header-menu`))?.requestUpdate()}render(){return m`<a part="base" href=${this.href} target=${this.target||n} rel=${this.rel||n} aria-current=${p(this.current?`page`:void 0)} @click=${h}><span class="text"><slot></slot></span></a>`}};t([e()],M.prototype,`href`,void 0),t([e({type:Boolean,reflect:!0})],M.prototype,`current`,void 0),t([e()],M.prototype,`target`,void 0),t([e()],M.prototype,`rel`,void 0),M=t([S(`ui-header-menu-item`)],M);var N=class extends o{constructor(...e){super(...e),this.label=``,this.open=!1,this.current=!1,this.menuId=g(`ui-header-menu`),this.onDocumentPointerDown=e=>{e.composedPath().includes(this)||(this.open=!1)},this.onKeydown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.open=!1,this.trigger.focus())}}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[v,i`
        :host {
            position: relative;
            display: block;
            block-size: 100%;
        }

        .menu {
            display: none;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .trigger[aria-expanded='true'] + .menu {
            position: absolute;
            z-index: 8001;
            inset-block-end: 0;
            inset-inline-start: 0;
            display: flex;
            flex-direction: column;
            inline-size: 200px;
            background-color: var(--ui-overlay-background, var(--ui-surface-1));
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 0.5);
            transform: translateY(100%);
        }

        :host([data-in-side-nav]) .trigger[aria-expanded='true'] + .menu {
            position: static;
            inline-size: 100%;
            box-shadow: none;
            transform: none;
        }
    `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}disconnectedCallback(){super.disconnectedCallback(),this.stopListening()}updated(e){for(let e of this.items)e.toggleAttribute(`data-in-menu`,!0);e.has(`open`)&&(this.open?(this.stopOutside??=a(document,this.onDocumentPointerDown),document.addEventListener(`keydown`,this.onKeydown,!0)):this.stopListening(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0})))}stopListening(){this.stopOutside?.(),this.stopOutside=void 0,document.removeEventListener(`keydown`,this.onKeydown,!0)}onFocusOut(e){let t=e.relatedTarget;t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&(this.open=!1)}onItemClick(e){this.open&&e.target.closest(`ui-header-menu-item`)&&(this.open=!1,this.trigger.focus())}render(){let e=this.current||!this.open&&this.items.some(e=>e.current);return m`
            <button class="trigger ${e?`current`:``}" part="trigger" type="button" tabindex="0" aria-expanded=${this.open?`true`:`false`} aria-controls=${this.menuId} @click=${()=>this.open=!this.open} @focusout=${this.onFocusOut}>
                ${this.label}${b}
            </button>
            <div class="menu" part="menu" id=${this.menuId} role="list" aria-label=${this.label} @focusout=${this.onFocusOut} @click=${this.onItemClick}><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
        `}};t([e()],N.prototype,`label`,void 0),t([e({type:Boolean,reflect:!0})],N.prototype,`open`,void 0),t([e({type:Boolean,reflect:!0})],N.prototype,`current`,void 0),t([C(`.trigger`)],N.prototype,`trigger`,void 0),t([u({selector:`ui-header-menu-item`})],N.prototype,`items`,void 0),N=t([S(`ui-header-menu`)],N);var P=m`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" /></svg>`,F=m`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15 5.8 14.2 5 10 9.2 5.8 5 5 5.8 9.2 10 5 14.2l.8.8 4.2-4.2 4.2 4.2.8-.8L10.8 10z" /></svg>`,I=`(max-width: 1055.98px)`,L=`ui-header-menu-item, ui-header-menu, ui-header-mega-menu`,R=class extends o{constructor(...e){super(...e),this.label=``,this.collapse=!1,this.narrow=!1,this.sheetOpen=!1,this.sheetBox=null,this.localize=new c(this),this.inerted=[],this.onMediaChange=e=>{this.narrow=e.matches},this.placeSheet=()=>{let e=this.closest(`ui-header`)?.shadowRoot?.querySelector(`header`)??null,t=(e??this).getBoundingClientRect();this.sheetBox={top:t.bottom,left:e?t.left:0,width:e?t.width:document.documentElement.clientWidth}},this.onKeydown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.closeSheet(!0))}}static{this.styles=i`
        :host {
            display: none;
            position: relative;
            block-size: 100%;
        }

        @media (min-width: 1056px) {
            :host {
                display: block;
            }
        }

        :host([data-in-side-nav]),
        :host([data-collapsed]) {
            display: block;
        }

        /* Carbon side-nav__header-navigation: the copy in the side nav is for small screens only; at lg the header shows the original */
        @media (min-width: 1056px) {
            :host([data-in-side-nav]) {
                display: none;
            }
        }

        :host::before {
            content: '';
            position: absolute;
            inset-block-start: 50%;
            inset-inline-start: 0;
            display: block;
            inline-size: 1px;
            block-size: 24px;
            background-color: var(--ui-border-subtle-1);
            transform: translateY(-50%);
        }

        :host([data-in-side-nav])::before,
        :host([data-collapsed])::before {
            display: none;
        }

        /*
         * Carbon header__nav and header__menu-bar: full height, so the items and their current-page bar reach the
         * header's bottom edge; 16px after the divider — on this part, not :host, so a page-wide CSS reset can't remove it.
         */
        [part='base'] {
            block-size: 100%;
            padding-inline-start: 16px;
        }

        :host([data-in-side-nav]) [part='base'],
        :host([data-collapsed]) [part='base'] {
            padding-inline-start: 0;
        }

        .bar {
            display: flex;
            block-size: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        :host([data-in-side-nav]) .bar,
        :host([data-collapsed]) .bar {
            flex-direction: column;
        }

        /* in the sheet (as tall as the window) the rows keep their own height */
        :host([data-collapsed]) .bar {
            block-size: auto;
        }

        /* the menu button: as <ui-header-menu-button> */
        .menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            inline-size: 48px;
            block-size: 48px;
            padding: 0;
            border: 1px solid transparent;
            background: transparent;
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate);
        }

        .menu-button:hover {
            background-color: var(--ui-canvas-hover);
        }

        .menu-button:active {
            background-color: var(--ui-canvas-active);
        }

        .menu-button:focus-visible {
            border-color: var(--ui-focus);
        }

        .menu-button[aria-expanded='true'] {
            background-color: var(--ui-surface-1);
            border-block-end-color: transparent;
            border-inline-color: var(--ui-border-subtle-1);
        }

        .menu-button svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        /* a manual popover: the top layer, above a host app's own fixed bars whatever their z-index */
        .sheet {
            position: fixed;
            inset: auto;
            inset-block-end: 0;
            box-sizing: border-box;
            block-size: auto; /* not the popover's fit-content: from under the header to the bottom */
            margin: 0;
            padding: 8px 0;
            border: 0;
            color: var(--ui-ink);
            overflow-y: auto;
            overscroll-behavior: contain;
            border-block-start: 1px solid var(--ui-border-subtle-1);
            background-color: var(--ui-mega-panel-background, var(--ui-overlay-background, var(--ui-surface-1)));
        }

    `}connectedCallback(){super.connectedCallback(),this.media=globalThis.matchMedia?.(I),this.narrow=this.media?.matches??!1,this.media?.addEventListener(`change`,this.onMediaChange)}disconnectedCallback(){super.disconnectedCallback(),this.media?.removeEventListener(`change`,this.onMediaChange),this.closeSheet(!1)}get collapsed(){return this.collapse&&this.narrow&&!r(this,`inSideNav`)}willUpdate(e){(e.has(`narrow`)||e.has(`collapse`))&&!this.collapsed&&this.sheetOpen&&this.closeSheet(!1)}updated(e){(e.has(`narrow`)||e.has(`collapse`))&&this.markItems(),e.has(`sheetOpen`)&&this.syncSheet()}markItems(){let e=this.collapsed,t=e!==r(this,`collapsed`);this.toggleAttribute(`data-collapsed`,e);for(let n of this.querySelectorAll(`:scope > :is(${L})`))t&&n.open&&(n.open=!1),t&&n.requestUpdate?.(),e?(n.toggleAttribute(`data-in-side-nav`,!0),n.toggleAttribute(`data-in-collapsed-nav`,!0)):r(n,`inCollapsedNav`)&&(delete n.dataset.inSideNav,delete n.dataset.inCollapsedNav)}syncSheet(){let e=document.documentElement,t=this.shadowRoot?.querySelector(`.sheet`);t?.matches(`:popover-open`)!==this.sheetOpen&&t?.togglePopover(this.sheetOpen),this.sheetOpen?(d(this,e),this.setPageInert(!0),document.addEventListener(`keydown`,this.onKeydown,!0),window.addEventListener(`resize`,this.placeSheet)):(f(this,e),this.setPageInert(!1),document.removeEventListener(`keydown`,this.onKeydown,!0),window.removeEventListener(`resize`,this.placeSheet))}setPageInert(e){for(let e of this.inerted)e.inert=!1;if(this.inerted=[],!e)return;let t=this.closest(`ui-header`)??this;for(;t.parentElement&&t!==document.body;){for(let e of t.parentElement.children)e!==t&&e instanceof HTMLElement&&!e.inert&&(e.inert=!0,this.inerted.push(e));t=t.parentElement}}openSheet(){this.placeSheet(),this.sheetOpen=!0}closeSheet(e){this.sheetOpen&&(this.sheetOpen=!1,e&&this.menuButton?.focus())}onSheetClick(e){e.target.closest(`ui-header-menu-item, ui-header-mega-item`)&&this.closeSheet(!0)}renderCollapsed(e){let t=this.sheetOpen?this.localize.t.common.closeMenu:this.localize.t.common.openMenu,n=this.sheetBox?{top:`${this.sheetBox.top}px`,left:`${this.sheetBox.left}px`,width:`${this.sheetBox.width}px`}:{};return m`<nav part="base" aria-label=${this.label||this.localize.t.common.mainNavigation}>
            <button class="menu-button" part="menu-button" type="button" aria-label=${t} aria-expanded=${this.sheetOpen?`true`:`false`} aria-controls="sheet" @click=${()=>this.sheetOpen?this.closeSheet(!1):this.openSheet()}>
                ${this.sheetOpen?F:P}
            </button>
            <div class="sheet" part="sheet" id="sheet" popover="manual" style=${_(n)} @click=${this.onSheetClick}>${e}</div>
        </nav>`}render(){let e=m`<div class="bar" part="list" role="list"><slot @slotchange=${()=>this.markItems()}></slot></div>`;return this.collapsed?this.renderCollapsed(e):r(this,`inSideNav`)?m`<div part="base">${e}</div>`:m`<nav part="base" aria-label=${this.label||this.localize.t.common.mainNavigation}>${e}</nav>`}};t([e()],R.prototype,`label`,void 0),t([e({type:Boolean,reflect:!0})],R.prototype,`collapse`,void 0),t([s()],R.prototype,`narrow`,void 0),t([s()],R.prototype,`sheetOpen`,void 0),t([s()],R.prototype,`sheetBox`,void 0),t([C(`.menu-button`)],R.prototype,`menuButton`,void 0),R=t([S(`ui-header-nav`)],R);var z=class extends o{static{this.styles=i`
        :host {
            display: block;
        }

        hr {
            block-size: 1px;
            margin: 8px 16px;
            border: none;
            background-color: var(--ui-border-subtle-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return m`<hr />`}};z=t([S(`ui-side-nav-divider`)],z);var B=class extends o{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``,this.large=!1,this.slots=new x(this)}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=y}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(){this.toggleAttribute(`data-icon`,this.slots.has(`icon`))}render(){let e=r(this,`collapsed`)&&!this.closest(`ui-side-nav`)?.hasAttribute(`rail`);return m`<a part="base" href=${this.href} target=${this.target||n} rel=${this.rel||n} aria-current=${p(this.current?`page`:void 0)} tabindex=${e?-1:0} @click=${h}>
            <span class="icon"><slot name="icon"></slot></span><span class="text"><slot></slot></span>
        </a>`}};t([e()],B.prototype,`href`,void 0),t([e({type:Boolean,reflect:!0})],B.prototype,`current`,void 0),t([e()],B.prototype,`target`,void 0),t([e()],B.prototype,`rel`,void 0),t([e({type:Boolean,reflect:!0})],B.prototype,`large`,void 0),B=t([S(`ui-side-nav-link`)],B);var V=class extends o{constructor(...e){super(...e),this.href=`#`,this.selected=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=i`
        :host {
            display: block;
            inline-size: 100%;
            block-size: 32px;
        }

        a {
            display: block;
            box-sizing: border-box;
            block-size: 32px;
            padding: 6px 16px;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-emphasis);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            text-decoration: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        a:hover {
            background: var(--ui-layer-hover-1);
            color: var(--ui-ink);
        }

        a:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        a:active {
            background: var(--ui-layer-active-1);
            color: var(--ui-ink);
        }

        :host([selected]) a,
        :host([selected]) a:hover {
            background: var(--ui-layer-selected-1);
            color: var(--ui-ink);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return m`<a href=${this.href} target=${this.target||n} rel=${this.rel||n} aria-current=${p(this.selected?`page`:void 0)} @click=${h}><slot></slot></a>`}};t([e()],V.prototype,`href`,void 0),t([e({type:Boolean,reflect:!0})],V.prototype,`selected`,void 0),t([e()],V.prototype,`target`,void 0),t([e()],V.prototype,`rel`,void 0),V=t([S(`ui-switcher-item`)],V);var H=class extends o{constructor(...e){super(...e),this.label=``}static{this.styles=i`
        :host {
            display: flex;
            flex-direction: column;
            color: var(--ui-ink-muted);
        }

        /* 16px above the first item, on the list rather than :host so a page-wide CSS reset can't remove it */
        [role='list'] {
            padding-block-start: 16px;
        }

        ::slotted(hr) {
            display: block;
            inline-size: 224px;
            block-size: 1px;
            margin: 8px 16px;
            border: none;
            background: var(--ui-border-subtle-1);
        }
    `}render(){return m`<div role="list" aria-label=${p(this.label||void 0)}><slot></slot></div>`}};t([e()],H.prototype,`label`,void 0),H=t([S(`ui-switcher`)],H);