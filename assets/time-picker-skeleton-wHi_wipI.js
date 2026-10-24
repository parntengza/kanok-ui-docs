import{Ct as e,E as t,Ot as n,St as r,Tt as i,jt as a}from"./theme-switcher-BGAHXRgF.js";import{a as o,i as s,n as c,r as l}from"./skeleton-BESm0w-6.js";var u=class extends c{constructor(...e){super(...e),this.isOnlyTwo=!1}static{this.styles=[o,l,a`
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
        `]}render(){return n`<div class="row">${s}${s}${this.isOnlyTwo?i:s}</div>`}};t([r({type:Boolean,reflect:!0,attribute:`is-only-two`})],u.prototype,`isOnlyTwo`,void 0),u=t([e(`ui-time-picker-skeleton`)],u);