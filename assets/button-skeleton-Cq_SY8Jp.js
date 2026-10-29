import{Ct as e,D as t,Mt as n,kt as r,wt as i}from"./theme-switcher-BZXGbHfR.js";import{a,n as o}from"./skeleton-Bt17J2no.js";var s=class extends o{constructor(...e){super(...e),this.size=`lg`}static{this.styles=[a,n`
            :host {
                display: inline-block;
                vertical-align: middle;
            }

            .bone {
                inline-size: 150px;
                block-size: var(--ui-button-height-lg, var(--ui-field-height-lg, 48px));
                border-radius: var(--ui-button-radius, var(--ui-skeleton-radius)); /* the button's corners */
            }

            :host([size='sm']) .bone {
                block-size: var(--ui-field-height-sm, 32px);
            }

            :host([size='md']) .bone {
                block-size: var(--ui-field-height-md, 40px);
            }

            :host([size='xl']) .bone {
                block-size: var(--ui-button-height-xl, 64px);
            }

            :host([size='2xl']) .bone {
                block-size: var(--ui-button-height-2xl, 80px);
            }
        `]}render(){return r`<div class="bone" part="bone"></div>`}};t([e({reflect:!0})],s.prototype,`size`,void 0),s=t([i(`ui-button-skeleton`)],s);