import{Ct as e,D as t,Et as n,Mt as r,jt as i,kt as a,wt as o}from"./theme-switcher-BZXGbHfR.js";import{t as s}from"./skeleton-Bt17J2no.js";var c=i`<path d="M13 2h-2V1h-1v1H6V1H5v1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 11H3V6h10v7Zm0-8H3V3h2v1h1V3h4v1h1V3h2v2Z" />`,l=class extends s{constructor(...e){super(...e),this.range=!1}static{this.styles=[...s.styles,r`
            .inputs {
                display: flex;
                gap: 1px;
            }

            .input {
                inline-size: 143.5px;
            }

            .fluid-half {
                position: relative;
                box-sizing: border-box;
                block-size: 100%;
            }

            /* Carbon: each half 50% with the line inside the first */
            .fluid-box.range .fluid-half {
                flex: none;
                inline-size: 50%;
            }

            .fluid-box.range {
                display: flex;
            }

            .fluid-box.range .fluid-half:first-child {
                border-inline-end: 1px solid var(--ui-skeleton-element);
            }

            .calendar {
                position: absolute;
                inset-block-end: var(--ui-space-md);
                inset-inline-end: var(--ui-space-md);
                inline-size: 16px;
                block-size: 16px;
                fill: var(--ui-icon-primary);
            }
        `]}renderFluid(){let e=a`<div class="fluid-half"><span class="bone top" part="label"></span><span class="bone bottom" part="value"></span><svg class="calendar" viewBox="0 0 16 16">${c}</svg></div>`;return a`<div class="fluid-box ${this.range?`range`:``}" part="field">${e}${this.range?e:n}</div>`}render(){if(this.isFluid)return this.renderFluid();let e=a`<div class="input"><span class="bone label" part="label"></span><div class="bone field" part="field"></div></div>`;return a`<div class="inputs">${e}${this.range?e:n}</div>`}};t([e({type:Boolean,reflect:!0})],l.prototype,`range`,void 0),l=t([o(`ui-date-picker-skeleton`)],l);