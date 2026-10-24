import{Ct as e,E as t,Ot as n,St as r,jt as i}from"./theme-switcher-BGAHXRgF.js";import{a,n as o}from"./skeleton-BESm0w-6.js";var s=class extends o{constructor(...e){super(...e),this.rows=5}static{this.styles=[a,i`
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
        `]}render(){let e=n`<div class="th"><span class="bone" part="header"></span></div>`,t=n`<div class="body" part="row"></div>`;return n`<div class="row">${e}${e}${e}</div>${Array.from({length:Math.max(0,this.rows)},()=>t)}`}};t([r({type:Number})],s.prototype,`rows`,void 0),s=t([e(`ui-structured-list-skeleton`)],s);