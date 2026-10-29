import{Ct as e,D as t,Et as n,Mt as r,kt as i,wt as a}from"./theme-switcher-BZXGbHfR.js";import{a as o,i as s,n as c,r as l}from"./skeleton-Bt17J2no.js";var u=class extends c{constructor(...e){super(...e),this.isOnlyTwo=!1}static{this.styles=[o,l,r`
            .row {
                display: flex;
                block-size: 64px;
            }

            .row > * {
                inline-size: 25%;
            }

            .row > :last-child,
            :host([is-only-two]) .row > :first-child {
                inline-size: 50%;
            }
        `]}render(){return i`<div class="row">${s}${s}${this.isOnlyTwo?n:s}</div>`}};t([e({type:Boolean,reflect:!0,attribute:`is-only-two`})],u.prototype,`isOnlyTwo`,void 0),u=t([a(`ui-time-picker-skeleton`)],u);