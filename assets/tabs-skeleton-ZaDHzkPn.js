import{Ct as e,D as t,Mt as n,kt as r,wt as i}from"./theme-switcher-BZXGbHfR.js";import{a,n as o}from"./skeleton-Bt17J2no.js";var s=class extends o{constructor(...e){super(...e),this.tabs=5}static{this.styles=[a,n`
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
        `]}render(){let e=r`<div class="tab" part="tab"><span class="bone"></span></div>`;return r`<div class="list">${Array.from({length:Math.max(1,this.tabs)},()=>e)}</div>`}};t([e({type:Number})],s.prototype,`tabs`,void 0),s=t([i(`ui-tabs-skeleton`)],s);