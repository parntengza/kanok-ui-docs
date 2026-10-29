import{Ct as e,D as t,Mt as n,O as r,kt as i,wt as a}from"./theme-switcher-BZXGbHfR.js";var o=class extends r{constructor(...e){super(...e),this.stacked=!1}static{this.styles=n`
        :host {
            display: flex;
            gap: var(--ui-button-set-gap, normal); /* Carbon: the buttons touch; a design can space them */
        }

        :host([stacked]) {
            flex-direction: column;
        }

        /* Carbon .btn-set .btn: full width up to 196px (design kit) */
        ::slotted(*) {
            inline-size: var(--ui-button-set-item-size, 100%);
            max-inline-size: 196px;
        }

        ::slotted(:not(:first-child):not(:focus-within)) {
            box-shadow: -1px 0 0 0 var(--ui-button-set-separator, var(--ui-button-separator));
        }

        :host([stacked]) ::slotted(:not(:first-child):not(:focus-within)) {
            box-shadow: 0 -1px 0 0 var(--ui-button-set-separator, var(--ui-button-separator));
        }
    `}render(){return i`<slot part="button-set"></slot>`}};t([e({type:Boolean,reflect:!0})],o.prototype,`stacked`,void 0),o=t([a(`ui-button-set`)],o);