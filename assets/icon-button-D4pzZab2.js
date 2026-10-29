import{Ct as e,D as t,Et as n,Mt as r,O as i,Tt as a,kt as o,wt as s,xt as c}from"./theme-switcher-BZXGbHfR.js";import"./button-DGUm7Yxm.js";function l(e){return!e||e<=0?``:e>999?`999+`:String(e)}var u=class extends i{static{this.styles=r`
        :host {
            position: absolute;
            inset-block-start: 0;
            inset-inline-end: 0;
            display: flex;
            box-sizing: border-box;
            min-inline-size: 8px;
            min-block-size: 8px;
            max-block-size: 16px;
            margin-block-start: var(--_ui-badge-dot-offset, 8px);
            margin-inline-end: var(--_ui-badge-dot-offset, 8px);
            padding: 0 var(--ui-space-xxs) 2px;
            border-radius: 100px;
            background: var(--ui-error);
            color: var(--ui-on-primary);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
            pointer-events: none;
        }

        :host([data-count]) {
            margin-block-start: var(--ui-space-xxs);
            margin-inline-end: var(--ui-space-xxs);
        }

        @media (forced-colors: active) {
            :host {
                border: 1px solid CanvasText;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.slot=`badge-indicator`,this.setAttribute(`aria-hidden`,`true`)}updated(e){super.updated(e),this.toggleAttribute(`data-count`,l(this.count)!==``),e.has(`count`)&&this.closest(`ui-icon-button`)?.requestUpdate()}render(){return o`${l(this.count)}`}};t([e({type:Number})],u.prototype,`count`,void 0),u=t([s(`ui-badge-indicator`)],u);var d=class extends i{constructor(...e){super(...e),this.label=``,this.kind=`ghost`,this.size=`lg`,this.tooltipPlacement=`bottom`,this.disabled=!1,this.disabledFocusable=!1,this.loading=!1,this.loadingLabel=``,this.href=``,this.haspopup=``,this.expanded=!1}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=r`
        :host {
            display: inline-block;
            vertical-align: middle;
        }

        :host([size='sm']) {
            --_ui-badge-dot-offset: 4px;
        }

        :host([disabled]) ::slotted(ui-badge-indicator) {
            display: none;
        }

        ::slotted(svg) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }
    `}get align(){return this.tooltipPlacement}set align(e){this.tooltipPlacement=e}static get observedAttributes(){return[...super.observedAttributes,`align`]}attributeChangedCallback(e,t,n){e===`align`?n!==null&&(this.align=n):super.attributeChangedCallback(e,t,n)}focus(e){this.button?.focus(e)}get badgeDescription(){return this.disabled?``:this.badgeCount===void 0?l(this.querySelector(`ui-badge-indicator`)?.count):l(this.badgeCount)}render(){return o`<ui-tooltip as-label part="tooltip" text=${this.label} placement=${this.tooltipPlacement}>
            <ui-button
                part="button"
                icon-only
                kind=${this.kind}
                size=${this.size}
                href=${this.href}
                ?disabled=${this.disabled}
                ?disabled-focusable=${this.disabledFocusable}
                ?loading=${this.loading}
                loading-label=${this.loadingLabel}
                .pressed=${this.pressed}
                haspopup=${this.haspopup}
                ?expanded=${this.expanded}
                description=${this.badgeDescription}
            >
                <slot slot="prefix"></slot>
                <slot name="badge-indicator" slot="badge-indicator" @slotchange=${()=>this.requestUpdate()}></slot>
                ${this.badgeCount===void 0||this.disabled?n:o`<ui-badge-indicator .count=${this.badgeCount}></ui-badge-indicator>`}
            </ui-button>
        </ui-tooltip>`}};t([e()],d.prototype,`label`,void 0),t([e({reflect:!0})],d.prototype,`kind`,void 0),t([e({reflect:!0})],d.prototype,`size`,void 0),t([e({attribute:`tooltip-placement`})],d.prototype,`tooltipPlacement`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),t([e({type:Boolean,reflect:!0,attribute:`disabled-focusable`})],d.prototype,`disabledFocusable`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`loading`,void 0),t([e({attribute:`loading-label`})],d.prototype,`loadingLabel`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`pressed`,void 0),t([e()],d.prototype,`href`,void 0),t([e()],d.prototype,`haspopup`,void 0),t([e({type:Boolean})],d.prototype,`expanded`,void 0),t([e({attribute:`badge-count`,converter:{fromAttribute:e=>e===null?void 0:Number(e)}})],d.prototype,`badgeCount`,void 0),t([c(`ui-button`)],d.prototype,`button`,void 0),d=t([s(`ui-icon-button`)],d);