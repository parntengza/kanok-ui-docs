import{Ct as e,D as t,E as n,Ot as r,St as i,jt as a}from"./theme-switcher-BGAHXRgF.js";var o=class extends t{static{this.styles=a`
        :host {
            display: list-item;
            color: var(--ui-ink);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return r`<slot></slot>`}};o=n([e(`ui-list-item`)],o);var s=a`
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

    :host([nested]) ::slotted(*) {
        padding-inline-start: var(--ui-space-xxs);
    }
`;function c(e){return!!e.parentElement?.closest(`ui-list-item`)}var l=class extends t{constructor(...e){super(...e),this.nested=!1,this.native=!1,this.isExpressive=!1}static{this.styles=[s,a`
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
        `]}connectedCallback(){super.connectedCallback(),c(this)&&(this.nested=!0)}render(){return r`<ol class="list" part="list"><slot></slot></ol>`}};n([i({type:Boolean,reflect:!0})],l.prototype,`nested`,void 0),n([i({type:Boolean,reflect:!0})],l.prototype,`native`,void 0),n([i({type:Boolean,reflect:!0,attribute:`is-expressive`})],l.prototype,`isExpressive`,void 0),l=n([e(`ui-ordered-list`)],l);var u=class extends t{constructor(...e){super(...e),this.nested=!1,this.isExpressive=!1}static{this.styles=[s,a`
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
        `]}connectedCallback(){super.connectedCallback(),c(this)&&(this.nested=!0)}render(){return r`<ul class="list" part="list"><slot></slot></ul>`}};n([i({type:Boolean,reflect:!0})],u.prototype,`nested`,void 0),n([i({type:Boolean,reflect:!0,attribute:`is-expressive`})],u.prototype,`isExpressive`,void 0),u=n([e(`ui-unordered-list`)],u);