import{Ct as e,D as t,Mt as n,kt as r,wt as i}from"./theme-switcher-BZXGbHfR.js";import{a,n as o}from"./skeleton-Bt17J2no.js";var s=class extends o{constructor(...e){super(...e),this.size=`md`}static{this.styles=[a,n`
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
        `]}render(){return r`<div class="bone" part="bone"></div>`}};t([e({reflect:!0})],s.prototype,`size`,void 0),s=t([i(`ui-tag-skeleton`)],s);