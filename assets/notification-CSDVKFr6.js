import{Ct as e,D as t,Et as n,H as r,Mt as i,O as a,T as o,V as s,X as c,ht as l,jt as u,kt as d,lt as f,v as p,wt as m,xt as h}from"./theme-switcher-BZXGbHfR.js";import{n as g,r as _,t as v}from"./notification-BnkpnhKh.js";var y=i`
    :host {
        display: block;
        font-family: var(--ui-font-family);
    }

    :host(:not([open])),
    :host([open='false']) {
        display: none;
    }

    /* Carbon inline notification: 288px min, responsive max, 48px min height, 3px status bar */
    .box {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        min-width: 288px;
        max-width: 288px;
        min-height: 48px;
        border-inline-start: var(--ui-notification-bar-width, 3px) solid var(--_kind); /* the status bar (Kanok: none, the icon tells) */
        border-radius: var(--ui-notification-radius, 0); /* Carbon: square */
        /* the high-contrast surface: Carbon's inverse; a design can make it an elevated light / raised one (--ui-notification-*) */
        background-color: var(--ui-notification-background, var(--ui-inverse-canvas));
        color: var(--ui-notification-ink, var(--ui-inverse-ink));
    }

    :host(:not([low-contrast])) .box {
        box-shadow: var(--ui-notification-edge, none);
    }

    @media (min-width: 672px) {
        .box {
            flex-wrap: nowrap;
            max-width: 608px;
        }
    }

    @media (min-width: 1056px) {
        .box {
            max-width: 736px;
        }
    }

    @media (min-width: 1584px) {
        .box {
            max-width: 832px;
        }
    }

    /* a banner across its container (no Carbon counterpart), however narrow; a toast keeps its 288px */
    :host([full-width]:not([variant='toast'])) .box {
        min-width: 0;
        max-width: none;
    }

    /* small screens: the text takes its own line so the action wraps under it, clear of the close button (as in 288px) */
    @media (max-width: 671.98px) {
        :host([full-width]:not([variant='toast'])) .details {
            flex-basis: calc(100% - 61px);
        }
    }

    :host([kind='error']) .box {
        --_kind: var(--ui-error);
        --_bg: var(--ui-notification-background-error);
    }
    :host([kind='success']) .box {
        --_kind: var(--ui-success);
        --_bg: var(--ui-notification-background-success);
    }
    :host([kind='info']) .box,
    :host([kind='info-square']) .box {
        --_kind: var(--ui-info);
        --_bg: var(--ui-notification-background-info);
    }
    :host([kind='warning']) .box,
    :host([kind='warning-alt']) .box {
        --_kind: var(--ui-warning);
        --_bg: var(--ui-notification-background-warning);
    }

    /* low contrast: tinted surface, primary text, 1px status border on the other three sides */
    :host([low-contrast]) .box {
        background-color: var(--_bg);
        color: var(--ui-ink);
    }

    :host([low-contrast]) .box::before {
        content: '';
        position: absolute;
        inset: 0;
        box-sizing: border-box;
        border: 1px solid var(--_kind);
        border-inline-start-width: var(--ui-notification-frame-start, 0); /* the frame's fourth side, where there is no bar */
        border-radius: inherit;
        filter: opacity(0.4); /* Carbon: the frame at 40% (the status bar stays full) */
        pointer-events: none;
    }

    .details {
        display: flex;
        flex-grow: 1;
        margin-inline: 13px 48px;
    }

    @media (min-width: 672px) {
        .details {
            margin: 0 13px;
        }
    }

    .icon {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        margin-block-start: 14px;
        margin-inline-end: var(--ui-space-md);
        fill: var(--_kind);
    }

    :host([kind='warning']) .icon .mark,
    :host([kind='warning-alt']) .icon .mark {
        fill: #161616; /* Carbon $black-100: the mark stays black on the yellow */
    }

    .text {
        display: flex;
        flex-wrap: wrap;
        padding: 15px 0;
    }

    .title {
        margin-inline-end: var(--ui-space-xxs);
        font: var(--ui-font-body-emphasis); /* heading-compact-01 */
        line-height: 18px; /* exact, so 15 + 18 + 15 = Carbon's 48px */
        letter-spacing: var(--ui-tracking-body);
    }

    .subtitle,
    .caption,
    ::slotted(*) {
        font: var(--ui-font-body-sm);
        line-height: 18px;
        letter-spacing: var(--ui-tracking-body);
        overflow-wrap: anywhere;
    }

    .caption {
        width: 100%;
        padding-block-start: var(--ui-space-xs);
    }

    ::slotted(a) {
        color: var(--ui-notification-link, var(--ui-link-inverse));
        text-decoration: none;
    }

    :host([low-contrast]) ::slotted(a) {
        color: var(--ui-primary);
    }

    ::slotted(a:hover) {
        text-decoration: underline;
    }

    /* --ui-close-size / --ui-close-inset / --ui-icon-control-radius: a design can make it a smaller round button set in from the corner (Carbon: a 48px square in the corner) */
    .close {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--ui-close-size, 48px);
        height: var(--ui-close-size, 48px);
        min-width: var(--ui-close-size, 48px);
        min-height: var(--ui-close-size, 48px);
        margin: var(--ui-close-inset, 0);
        padding: 0;
        border: none;
        border-radius: var(--ui-icon-control-radius, 0);
        background: transparent;
        color: inherit;
        cursor: pointer;
        /* Carbon inline / actionable close button: 110ms, standard productive */
        transition:
            outline var(--ui-duration-moderate) var(--ui-easing),
            background-color var(--ui-duration-moderate) var(--ui-easing);
    }

    /* Carbon toast close button: 250ms (no token) with the default easing; reduced motion: none, as the tokens */
    @media (prefers-reduced-motion: no-preference) {
        :host([variant='toast']) .close:not(.action + .close) {
            transition:
                outline 250ms,
                background-color 250ms;
        }
    }

    /* Carbon: in the row from md up (after the action), absolute only on small screens and in toasts */
    @media (min-width: 672px) {
        :host(:not([variant='toast'])) .close {
            position: static;
        }
    }

    .close-icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
    }

    /* Carbon: the close button has no hover fill (only the action button does), so it never covers the low-contrast frame */

    .close:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-notification-focus, var(--ui-inverse-ink));
        outline-offset: var(--ui-focus-offset, -2px);
    }

    :host([low-contrast]) .close:focus-visible {
        outline-color: var(--ui-focus);
    }

    /* inline action: Carbon ghost button, 32px, 32px before it */
    .action {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        height: 32px;
        margin-block-end: var(--ui-space-xs);
        margin-inline-start: var(--ui-space-xl);
        padding: 0 var(--ui-space-md);
        border: 1px solid transparent;
        border-radius: var(--ui-button-radius, 0); /* a button: the button setting (Kanok: a pill) */
        background: transparent;
        color: var(--ui-notification-link, var(--ui-link-inverse));
        font: var(--ui-font-button);
        letter-spacing: var(--ui-tracking-body);
        cursor: pointer;
        /* Carbon .cds--btn: 70ms, entrance productive */
        transition:
            background var(--ui-duration-fast) var(--ui-easing-entrance),
            box-shadow var(--ui-duration-fast) var(--ui-easing-entrance),
            border-color var(--ui-duration-fast) var(--ui-easing-entrance),
            outline var(--ui-duration-fast) var(--ui-easing-entrance);
    }

    @media (min-width: 672px) {
        .action {
            margin: var(--ui-space-xs) 0;
        }
    }

    .action:hover {
        background-color: var(--ui-notification-hover, var(--ui-inverse-hover));
    }

    .action:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-notification-focus, var(--ui-inverse-ink));
        outline-offset: var(--ui-focus-offset, -2px);
    }

    :host([low-contrast]) .action {
        color: var(--ui-button-tertiary-ink, var(--ui-primary));
    }

    :host([low-contrast]) .action:hover {
        background-color: var(--ui-notification-action-hover, var(--ui-ghost-hover));
    }

    :host([low-contrast]) .action:focus-visible {
        outline-color: var(--ui-focus);
    }

    /* ---- toast: 288px, shadow, text stacked, action as a tertiary button below ---- */
    :host([variant='toast']) .box {
        flex-wrap: wrap;
        width: 288px;
        min-width: 288px;
        max-width: 288px;
        min-height: 0;
        padding-inline-start: 13px;
        box-shadow: var(--ui-toast-shadow, 0 2px 6px 0 rgb(0 0 0 / 0.2));
    }

    :host([variant='toast']) .details {
        display: flex;
        flex-grow: 1;
        margin: 0;
        margin-block-end: var(--ui-space-md);
        margin-inline-end: 48px; /* Carbon spacing-09: clear of the close button, so an action wraps below */
    }

    :host([variant='toast']) .icon {
        margin-block-start: var(--ui-space-md);
    }

    :host([variant='toast']) .text {
        display: block;
        padding: 0;
    }

    :host([variant='toast']) .title {
        display: block;
        margin: var(--ui-space-md) 0 0;
        overflow-wrap: anywhere;
    }

    :host([variant='toast']) .subtitle {
        display: block;
        margin: 0 0 var(--ui-space-md);
    }

    :host([variant='toast']) .action {
        margin: 0 0 var(--ui-space-md) 49px;
        border-color: var(--ui-notification-action-tertiary-inverse);
        color: var(--ui-notification-action-tertiary-inverse);
    }

    :host([variant='toast']) .action:hover {
        background-color: var(--ui-notification-action-tertiary-inverse-hover);
        color: var(--ui-notification-action-tertiary-inverse-text);
    }

    :host([variant='toast']) .action:active {
        background-color: var(--ui-notification-action-tertiary-inverse-active);
    }

    :host([variant='toast'][low-contrast]) .action {
        border-color: var(--ui-button-tertiary-border, var(--ui-primary));
        color: var(--ui-button-tertiary-ink, var(--ui-primary));
    }

    :host([variant='toast'][low-contrast]) .action:hover {
        background-color: var(--ui-primary);
        color: var(--ui-on-primary);
    }

    @media (forced-colors: active) {
        .box {
            border: 1px solid CanvasText;
            border-inline-start-width: 3px;
        }
        .close,
        .action {
            border: 1px solid ButtonText;
        }
    }
`,b={error:u`<path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 13.5L10 11l-3.5 3.5L5 13l3.5-3.5L5 6l1.5-1.5L10 8l3.5-3.5L15 6l-3.5 3.5L15 13z" />`,success:u`<path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8.5 14 4.4 9.9l1.4-1.4 2.7 2.7 5.7-5.7 1.4 1.4z" />`,info:u`<path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12.5 15h-5v-1.5H9V10H7.5V8.5H11v5h1.5z" />`,"info-square":u`<path d="M17 1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-7 3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12.5 15h-5v-1.5H9V10H7.5V8.5H11v5h1.5z" />`,warning:u`<path class="mark-bg" d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" /><path class="mark" fill="#161616" d="M9.25 5h1.5v6.5h-1.5zM10 15.3a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />`,"warning-alt":u`<path class="mark-bg" d="M10.9 1.6a1 1 0 0 0-1.8 0L1.2 17a1 1 0 0 0 .9 1.5h15.8a1 1 0 0 0 .9-1.5z" /><path class="mark" fill="#161616" d="M9.25 7h1.5v5.5h-1.5zM10 16.3a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />`},x=`a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"]), ui-link, ui-button, ui-icon-button`,S=d`<svg class="close-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6z" /></svg>`,C=class extends a{constructor(...e){super(...e),this.variant=`inline`,this.localize=new o(this),this.kind=`error`,this.lowContrast=!1,this.heading=``,this.subtitle=``,this.caption=``,this.actionLabel=``,this.role=null,this.timeout=0,this.hideCloseButton=!1,this.closeOnEscape=!0,this.noAutofocus=!1,this.fullWidth=!1,this.closeLabel=``,this.iconLabel=``,this.open=!0,this.ids=f(`ui-notification`),this.slots=new p(this),this.countdown=new v(0),this.hovered=!1,this.focusWithin=!1,this.onPointerEnter=()=>{this.hovered=!0,this.pauseTimer()},this.onPointerLeave=()=>{this.hovered=!1,this.resumeTimer()},this.returnFocus=null,this.onFocusIn=e=>{let t=e.relatedTarget;!this.focusWithin&&t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&(this.returnFocus=t),this.focusWithin=!0,this.pauseTimer()},this.onFocusOut=e=>{this.contains(e.relatedTarget)||this.shadowRoot?.contains(e.relatedTarget)||(this.focusWithin=!1,this.resumeTimer())},this.onKeydown=e=>{e.key===`Escape`&&!e.defaultPrevented&&this.holdsFocus()&&(e.preventDefault(),this.close(`escape`))},this.onTabKey=e=>{if(e.key!==`Tab`||!this.open||this.effectiveRole!==`alertdialog`)return;let t=this.tabStops,n=e.composedPath(),r=_(t,t.find(e=>n.includes(e)),e.shiftKey);r&&(e.preventDefault(),r.focus())}}static{this.styles=y}get titleText(){return this.heading}set titleText(e){this.heading=e}static get observedAttributes(){return[...super.observedAttributes,`title`,`role`]}attributeChangedCallback(e,t,n){c(this,e,n)||(e===`role`?n!==null&&(this.role=n,this.removeAttribute(`role`)):super.attributeChangedCallback(e,t,n))}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerenter`,this.onPointerEnter),this.addEventListener(`pointerleave`,this.onPointerLeave),this.addEventListener(`focusin`,this.onFocusIn),this.addEventListener(`focusout`,this.onFocusOut),this.addEventListener(`keydown`,this.onTabKey),this.startTimer()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer),this.removeEventListener(`pointerenter`,this.onPointerEnter),this.removeEventListener(`pointerleave`,this.onPointerLeave),this.removeEventListener(`focusin`,this.onFocusIn),this.removeEventListener(`focusout`,this.onFocusOut),this.removeEventListener(`keydown`,this.onTabKey),document.removeEventListener(`keydown`,this.onKeydown,!0)}firstUpdated(){this.effectiveRole===`alertdialog`&&!this.noAutofocus&&(this.returnFocus=s(),this.actionButton?.focus())}updated(e){this.effectiveRole===`alertdialog`&&this.open&&this.closeOnEscape?document.addEventListener(`keydown`,this.onKeydown,!0):document.removeEventListener(`keydown`,this.onKeydown,!0),e.has(`open`)&&this.open&&e.get(`open`)===!1&&this.startTimer()}get effectiveRole(){return g(this.role,this.variant,!!this.actionLabel)}startTimer(){clearTimeout(this.timer),this.countdown=new v(this.timeout),this.resumeTimer()}resumeTimer(){clearTimeout(this.timer);let e=this.countdown.resume(Date.now(),!this.open||!!this.actionLabel||this.hovered||this.focusWithin);e!==void 0&&(this.timer=setTimeout(()=>this.close(`timeout`),e))}pauseTimer(){this.timer!==void 0&&(clearTimeout(this.timer),this.timer=void 0,this.countdown.pause(Date.now()))}holdsFocus(){let e=s();return!!e&&(this.contains(e)||!!this.shadowRoot?.contains(e))}get tabStops(){let e=[...this.querySelectorAll(x)].filter(e=>!e.disabled&&e.getClientRects().length>0),t=[...this.shadowRoot?.querySelectorAll(`.action, .close`)??[]];return[...e,...t]}close(e=`close-button`){if(!this.open)return;let t=new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0});if(!this.dispatchEvent(t))return;clearTimeout(this.timer);let n=this.holdsFocus();this.open=!1,n&&this.returnFocus?.isConnected&&this.returnFocus.focus(),this.returnFocus=null,this.dispatchEvent(new CustomEvent(`ui-close`,{detail:{reason:e},bubbles:!0,composed:!0}))}onAction(){this.dispatchEvent(new CustomEvent(`ui-action`,{bubbles:!0,composed:!0}))}renderAction(){if(!this.actionLabel)return n;let e=this.variant===`callout`&&(this.heading||this.slots.has(`title`))?`${this.ids}-title`:void 0;return d`<button class="action" part="action-button" type="button" tabindex="0" aria-describedby=${l(e)} @click=${this.onAction}>${this.actionLabel}</button>`}renderClose(){return this.hideCloseButton||this.variant===`callout`?n:d`<button class="close" part="close-button" type="button" aria-label=${this.closeLabel||this.localize.t.common.closeNotification} title=${this.closeLabel||this.localize.t.common.closeNotification} @click=${()=>this.close(`close-button`)}>
            ${S}
        </button>`}focus(e){(this.actionButton??this.shadowRoot?.querySelector(`.close`))?.focus(e)}render(){let e=this.effectiveRole,t=this.heading||this.slots.has(`title`),r=this.subtitle||this.slots.has(`subtitle`);return d`
            <div
                class="box"
                part="base"
                role=${l(e)}
                aria-labelledby=${e===`alertdialog`&&t?`${this.ids}-title`:n}
                aria-describedby=${e===`alertdialog`&&r?`${this.ids}-subtitle`:n}
            >
                <div class="details">
                    <svg class="icon" part="icon" viewBox="0 0 20 20" role="img" aria-label=${this.iconLabel||`${this.kind} icon`}>
                        ${b[this.kind]}
                    </svg>
                    <div class="text">
                        ${t?d`<span class="title" part="title" id="${this.ids}-title"><slot name="title">${this.heading}</slot></span>`:n}
                        ${r?d`<span class="subtitle" part="subtitle" id="${this.ids}-subtitle"><slot name="subtitle">${this.subtitle}</slot></span>`:n}
                        <slot></slot>
                        ${this.caption?d`<span class="caption" part="caption">${this.caption}</span>`:n}
                    </div>
                </div>
                ${this.renderAction()}
                ${this.renderClose()}
            </div>
        `}};t([e({reflect:!0})],C.prototype,`variant`,void 0),t([e({reflect:!0})],C.prototype,`kind`,void 0),t([e({type:Boolean,reflect:!0,attribute:`low-contrast`})],C.prototype,`lowContrast`,void 0),t([e()],C.prototype,`heading`,void 0),t([e()],C.prototype,`subtitle`,void 0),t([e()],C.prototype,`caption`,void 0),t([e({attribute:`action-label`})],C.prototype,`actionLabel`,void 0),t([e({attribute:!1})],C.prototype,`role`,void 0),t([e({type:Number})],C.prototype,`timeout`,void 0),t([e({type:Boolean,attribute:`hide-close-button`})],C.prototype,`hideCloseButton`,void 0),t([e({attribute:`close-on-escape`,converter:r})],C.prototype,`closeOnEscape`,void 0),t([e({type:Boolean,attribute:`no-autofocus`})],C.prototype,`noAutofocus`,void 0),t([e({type:Boolean,reflect:!0,attribute:`full-width`})],C.prototype,`fullWidth`,void 0),t([e({attribute:`close-label`})],C.prototype,`closeLabel`,void 0),t([e({attribute:`icon-label`})],C.prototype,`iconLabel`,void 0),t([e({reflect:!0,converter:r})],C.prototype,`open`,void 0),t([h(`.action`)],C.prototype,`actionButton`,void 0),C=t([m(`ui-notification`)],C);