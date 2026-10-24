import{Ct as e,E as t,Ot as n,St as r,jt as i}from"./theme-switcher-BGAHXRgF.js";import{a,n as o}from"./skeleton-BESm0w-6.js";var s=class extends o{constructor(...e){super(...e),this.size=`lg`}static{this.styles=[a,i`
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
        `]}render(){return n`<div class="bone" part="bone"></div>`}};t([r({reflect:!0})],s.prototype,`size`,void 0),s=t([e(`ui-button-skeleton`)],s);