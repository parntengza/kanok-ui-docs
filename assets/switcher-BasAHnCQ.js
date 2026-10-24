import{Ct as e,D as t,E as n,M as r,Ot as i,St as a,Tt as o,W as s,bt as c,c as l,ct as u,h as d,jt as f,mt as p,n as m,t as h,w as g,wt as _,yt as v}from"./theme-switcher-BGAHXRgF.js";var y=class extends t{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=f`
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
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&(this.parentElement?.closest(`ui-header-menu`))?.requestUpdate()}render(){return i`<a part="base" href=${this.href} target=${this.target||o} rel=${this.rel||o} aria-current=${p(this.current?`page`:void 0)} @click=${l}><span class="text"><slot></slot></span></a>`}};n([a()],y.prototype,`href`,void 0),n([a({type:Boolean,reflect:!0})],y.prototype,`current`,void 0),n([a()],y.prototype,`target`,void 0),n([a()],y.prototype,`rel`,void 0),y=n([e(`ui-header-menu-item`)],y);var b=class extends t{constructor(...e){super(...e),this.label=``,this.open=!1,this.current=!1,this.menuId=u(`ui-header-menu`),this.onDocumentPointerDown=e=>{e.composedPath().includes(this)||(this.open=!1)},this.onKeydown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.open=!1,this.trigger.focus())}}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=f`
        :host {
            position: relative;
            display: block;
            block-size: 100%;
        }

        .trigger {
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
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            user-select: none;
        }

        .trigger:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-ink);
        }

        .trigger:focus-visible {
            border-color: var(--ui-focus);
        }

        .trigger[aria-expanded='true'] {
            z-index: 8002;
            background-color: var(--ui-surface-1);
        }

        /* Carbon header__menu-item--current on the title: the 3px border-interactive bar (the text stays secondary, as Carbon's a.header__menu-item colour wins) */
        .trigger.current::after {
            content: '';
            position: absolute;
            inset-block-end: -2px;
            inset-inline-start: -2px;
            inline-size: calc(100% + 4px);
            block-size: 3px;
            background-color: var(--ui-nav-current-mark, var(--ui-primary)); /* border-interactive; the side nav's setting */
        }

        /* side nav copy (Carbon side-nav__header-navigation): the bar on the start edge */
        :host([data-in-side-nav]) .trigger.current::after {
            inline-size: 3px;
            block-size: calc(100% + 4px);
        }

        @media (forced-colors: active) {
            .trigger.current::after {
                background-color: Highlight;
            }
        }

        .chevron {
            width: 16px;
            height: 16px;
            margin-inline-start: 8px;
            fill: var(--ui-icon-secondary);
            transition:
                transform var(--ui-duration-moderate),
                fill var(--ui-duration-moderate);
        }

        .trigger[aria-expanded='true'] .chevron {
            transform: rotate(180deg);
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
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}disconnectedCallback(){super.disconnectedCallback(),this.stopListening()}updated(e){for(let e of this.items)e.toggleAttribute(`data-in-menu`,!0);e.has(`open`)&&(this.open?(this.stopOutside??=r(document,this.onDocumentPointerDown),document.addEventListener(`keydown`,this.onKeydown,!0)):this.stopListening(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0})))}stopListening(){this.stopOutside?.(),this.stopOutside=void 0,document.removeEventListener(`keydown`,this.onKeydown,!0)}onFocusOut(e){let t=e.relatedTarget;t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&(this.open=!1)}onItemClick(e){this.open&&e.target.closest(`ui-header-menu-item`)&&(this.open=!1,this.trigger.focus())}render(){let e=this.current||!this.open&&this.items.some(e=>e.current);return i`
            <button class="trigger ${e?`current`:``}" part="trigger" type="button" tabindex="0" aria-expanded=${this.open?`true`:`false`} aria-controls=${this.menuId} @click=${()=>this.open=!this.open} @focusout=${this.onFocusOut}>
                ${this.label}${h}
            </button>
            <div class="menu" part="menu" id=${this.menuId} role="list" aria-label=${this.label} @focusout=${this.onFocusOut} @click=${this.onItemClick}><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
        `}};n([a()],b.prototype,`label`,void 0),n([a({type:Boolean,reflect:!0})],b.prototype,`open`,void 0),n([a({type:Boolean,reflect:!0})],b.prototype,`current`,void 0),n([c(`.trigger`)],b.prototype,`trigger`,void 0),n([v({selector:`ui-header-menu-item`})],b.prototype,`items`,void 0),b=n([e(`ui-header-menu`)],b);var x=class extends t{constructor(...e){super(...e),this.label=``,this.localize=new g(this)}static{this.styles=f`
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

        :host([data-in-side-nav]) {
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

        :host([data-in-side-nav])::before {
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

        :host([data-in-side-nav]) [part='base'] {
            padding-inline-start: 0;
        }

        .bar {
            display: flex;
            block-size: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        :host([data-in-side-nav]) .bar {
            flex-direction: column;
        }
    `}render(){let e=i`<div class="bar" part="list" role="list"><slot></slot></div>`;return s(this,`inSideNav`)?i`<div part="base">${e}</div>`:i`<nav part="base" aria-label=${this.label||this.localize.t.common.mainNavigation}>${e}</nav>`}};n([a()],x.prototype,`label`,void 0),x=n([e(`ui-header-nav`)],x);var S=class extends t{static{this.styles=f`
        :host {
            display: block;
        }

        hr {
            block-size: 1px;
            margin: 8px 16px;
            border: none;
            background-color: var(--ui-border-subtle-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return i`<hr />`}};S=n([e(`ui-side-nav-divider`)],S);var C=class extends t{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``,this.large=!1,this.slots=new d(this)}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=m}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(){this.toggleAttribute(`data-icon`,this.slots.has(`icon`))}render(){let e=s(this,`collapsed`)&&!this.closest(`ui-side-nav`)?.hasAttribute(`rail`);return i`<a part="base" href=${this.href} target=${this.target||o} rel=${this.rel||o} aria-current=${p(this.current?`page`:void 0)} tabindex=${e?-1:0} @click=${l}>
            <span class="icon"><slot name="icon"></slot></span><span class="text"><slot></slot></span>
        </a>`}};n([a()],C.prototype,`href`,void 0),n([a({type:Boolean,reflect:!0})],C.prototype,`current`,void 0),n([a()],C.prototype,`target`,void 0),n([a()],C.prototype,`rel`,void 0),n([a({type:Boolean,reflect:!0})],C.prototype,`large`,void 0),C=n([e(`ui-side-nav-link`)],C);var w=class extends t{constructor(...e){super(...e),this.href=`#`,this.selected=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=f`
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
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return i`<a href=${this.href} target=${this.target||o} rel=${this.rel||o} aria-current=${p(this.selected?`page`:void 0)} @click=${l}><slot></slot></a>`}};n([a()],w.prototype,`href`,void 0),n([a({type:Boolean,reflect:!0})],w.prototype,`selected`,void 0),n([a()],w.prototype,`target`,void 0),n([a()],w.prototype,`rel`,void 0),w=n([e(`ui-switcher-item`)],w);var T=class extends t{constructor(...e){super(...e),this.label=``}static{this.styles=f`
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
    `}render(){return i`<div role="list" aria-label=${p(this.label||void 0)}><slot></slot></div>`}};n([a()],T.prototype,`label`,void 0),T=n([e(`ui-switcher`)],T);