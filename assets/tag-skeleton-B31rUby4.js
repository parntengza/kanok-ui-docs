import{Ct as e,E as t,Ot as n,St as r,jt as i}from"./theme-switcher-BGAHXRgF.js";import{a,n as o}from"./skeleton-BESm0w-6.js";var s=class extends o{constructor(...e){super(...e),this.size=`md`}static{this.styles=[a,i`
            :host {
                display: inline-block;
                vertical-align: middle;
            }

            .bone {
                inline-size: 60px;
                block-size: 24px;
                border-radius: var(--ui-tag-radius, 16px); /* the tag's corners */
            }

            :host([size='sm']) .bone {
                block-size: 18px;
            }

            :host([size='lg']) .bone {
                block-size: 32px;
            }
        `]}render(){return n`<div class="bone" part="bone"></div>`}};t([r({reflect:!0})],s.prototype,`size`,void 0),s=t([e(`ui-tag-skeleton`)],s);