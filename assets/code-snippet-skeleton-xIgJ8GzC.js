import{Ct as e,D as t,Mt as n,kt as r,wt as i}from"./theme-switcher-BZXGbHfR.js";import{a,n as o}from"./skeleton-Bt17J2no.js";var s=class extends o{constructor(...e){super(...e),this.type=`single`}static{this.styles=[a,n`
            :host {
                display: block;
                max-inline-size: 768px;
            }

            .box {
                box-sizing: border-box;
                block-size: 56px;
                padding: 20px 40px 0 var(--ui-space-md);
                background-color: var(--ui-surface-1);
            }

            .bone {
                display: block;
                block-size: 16px;
            }

            :host([type='multi']) .box {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-xs);
                block-size: 98px;
                padding: var(--ui-space-md);
            }

            :host([type='multi']) .bone:nth-child(2) {
                inline-size: 85%;
            }

            :host([type='multi']) .bone:nth-child(3) {
                inline-size: 95%;
            }
        `]}render(){let e=this.type===`multi`?3:1,t=r`<span class="bone" part="line"></span>`;return r`<div class="box" part="base">${Array.from({length:e},()=>t)}</div>`}};t([e({reflect:!0})],s.prototype,`type`,void 0),s=t([i(`ui-code-snippet-skeleton`)],s);