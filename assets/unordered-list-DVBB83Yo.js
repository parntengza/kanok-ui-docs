import{Ct as e,D as t,Mt as n,O as r,kt as i,wt as a}from"./theme-switcher-BZXGbHfR.js";var o=class extends r{static{this.styles=n`
        :host {
            display: list-item;
            color: var(--ui-ink);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return i`<slot></slot>`}};o=t([a(`ui-list-item`)],o);var s=n`
    :host {
        display: block;
    }

    .list {
        margin: 0;
        padding: 0;
        list-style: none;
        font: var(--ui-font-body-sm);
        line-height: 20px; /* body-01 */
        letter-spacing: var(--ui-tracking-body);
    }

    :host([nested]) .list {
        margin-inline-start: 32px;
        font: inherit;
        letter-spacing: inherit;
    }

    :host([is-expressive]) .list {
        font: var(--ui-font-body); /* body-02 */
        letter-spacing: 0;
    }

    ::slotted(*) {
        position: relative;
    }

    /* !important: a page-level reset (Tailwind preflight's * { padding: 0 }) beats ::slotted rules */
    :host([nested]) ::slotted(*) {
        padding-inline-start: var(--ui-space-xxs) !important;
    }
`;function c(e){return!!e.parentElement?.closest(`ui-list-item`)}var l=class extends r{constructor(...e){super(...e),this.nested=!1,this.native=!1,this.isExpressive=!1}static{this.styles=[s,n`
            :host(:not([nested])) {
                counter-reset: item;
            }

            :host(:not([nested]):not([native])) ::slotted(*)::before {
                content: counter(item) '.';
                counter-increment: item;
                position: absolute;
                inset-inline-start: -24px;
            }

            :host([native]) .list {
                list-style: decimal;
            }

            :host([nested]) .list {
                list-style: lower-latin;
            }
        `]}connectedCallback(){super.connectedCallback(),c(this)&&(this.nested=!0)}render(){return i`<ol class="list" part="list"><slot></slot></ol>`}};t([e({type:Boolean,reflect:!0})],l.prototype,`nested`,void 0),t([e({type:Boolean,reflect:!0})],l.prototype,`native`,void 0),t([e({type:Boolean,reflect:!0,attribute:`is-expressive`})],l.prototype,`isExpressive`,void 0),l=t([a(`ui-ordered-list`)],l);var u=class extends r{constructor(...e){super(...e),this.nested=!1,this.isExpressive=!1}static{this.styles=[s,n`
            :host(:not([nested])) .list {
                margin-inline-start: var(--ui-space-md);
            }

            ::slotted(*)::before {
                content: '\\2013';
                position: absolute;
                inset-inline-start: -16px;
            }

            :host([nested]) ::slotted(*)::before {
                content: '\\25AA\\FE0E';
                inset-inline-start: -12px;
            }
        `]}connectedCallback(){super.connectedCallback(),c(this)&&(this.nested=!0)}render(){return i`<ul class="list" part="list"><slot></slot></ul>`}};t([e({type:Boolean,reflect:!0})],u.prototype,`nested`,void 0),t([e({type:Boolean,reflect:!0,attribute:`is-expressive`})],u.prototype,`isExpressive`,void 0),u=t([a(`ui-unordered-list`)],u);