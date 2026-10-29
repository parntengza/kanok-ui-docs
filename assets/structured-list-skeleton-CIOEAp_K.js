import{Ct as e,D as t,Mt as n,kt as r,wt as i}from"./theme-switcher-BZXGbHfR.js";import{a,n as o}from"./skeleton-Bt17J2no.js";var s=class extends o{constructor(...e){super(...e),this.rows=5}static{this.styles=[a,n`
            :host {
                display: block;
            }

            .row {
                display: grid;
                grid-template-columns: 8fr 30fr 15fr;
            }

            .th {
                padding: var(--ui-space-md) var(--ui-space-xs) var(--ui-space-xs);
            }

            .th:first-child {
                padding-inline-start: var(--ui-space-md);
            }

            .bone {
                display: block;
                inline-size: 75%;
                block-size: 16px;
            }

            .body {
                block-size: 40px;
                border-block-start: 1px solid var(--ui-hairline);
            }

            .body:last-child {
                border-block-end: 1px solid var(--ui-hairline);
            }
        `]}render(){let e=r`<div class="th"><span class="bone" part="header"></span></div>`,t=r`<div class="body" part="row"></div>`;return r`<div class="row">${e}${e}${e}</div>${Array.from({length:Math.max(0,this.rows)},()=>t)}`}};t([e({type:Number})],s.prototype,`rows`,void 0),s=t([i(`ui-structured-list-skeleton`)],s);