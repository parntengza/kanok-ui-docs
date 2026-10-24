import{Ct as e,E as t,Ot as n,St as r,jt as i}from"./theme-switcher-BGAHXRgF.js";import{a,n as o}from"./skeleton-BESm0w-6.js";var s=class extends o{constructor(...e){super(...e),this.tabs=5}static{this.styles=[a,i`
            :host {
                display: block;
            }

            .list {
                display: flex;
                gap: 1px;
            }

            .tab {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                inline-size: 160px;
                block-size: 40px;
                padding: 0 var(--ui-space-md);
                border-block-end: 2px solid var(--ui-skeleton-element);
            }

            .bone {
                inline-size: 100%;
                block-size: 14px;
            }
        `]}render(){let e=n`<div class="tab" part="tab"><span class="bone"></span></div>`;return n`<div class="list">${Array.from({length:Math.max(1,this.tabs)},()=>e)}</div>`}};t([r({type:Number})],s.prototype,`tabs`,void 0),s=t([e(`ui-tabs-skeleton`)],s);