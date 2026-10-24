import{Ct as e,E as t,Ot as n,St as r,jt as i}from"./theme-switcher-BGAHXRgF.js";import{a,n as o}from"./skeleton-BESm0w-6.js";var s=class extends o{constructor(...e){super(...e),this.type=`single`}static{this.styles=[a,i`
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
        `]}render(){let e=this.type===`multi`?3:1,t=n`<span class="bone" part="line"></span>`;return n`<div class="box" part="base">${Array.from({length:e},()=>t)}</div>`}};t([r({reflect:!0})],s.prototype,`type`,void 0),s=t([e(`ui-code-snippet-skeleton`)],s);