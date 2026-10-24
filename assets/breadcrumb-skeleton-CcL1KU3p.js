import{Ct as e,E as t,Ot as n,St as r,jt as i}from"./theme-switcher-BGAHXRgF.js";import{a,n as o}from"./skeleton-BESm0w-6.js";var s=class extends o{constructor(...e){super(...e),this.items=3,this.noTrailingSlash=!1,this.size=`md`}static{this.styles=[a,i`
            :host {
                display: block;
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
            }

            :host([size='sm']) {
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
            }

            .trail {
                display: flex;
                flex-wrap: wrap;
                column-gap: var(--ui-space-xs);
            }

            :host([size='sm']) .trail {
                column-gap: var(--ui-space-xxs);
            }

            .item {
                display: inline-flex;
                align-items: center;
                line-height: 18px;
            }

            .bone {
                inline-size: 100px;
                block-size: 16px;
            }

            .item::after {
                content: '/';
                margin-inline-start: var(--ui-space-xs);
                color: var(--ui-ink);
            }

            :host([size='sm']) .item::after {
                margin-inline-start: var(--ui-space-xxs);
            }

            :host([no-trailing-slash]) .item:last-child::after {
                content: none;
            }
        `]}render(){let e=n`<span class="item"><span class="bone" part="item"></span></span>`;return n`<div class="trail">${Array.from({length:Math.max(1,this.items)},()=>e)}</div>`}};t([r({type:Number})],s.prototype,`items`,void 0),t([r({type:Boolean,reflect:!0,attribute:`no-trailing-slash`})],s.prototype,`noTrailingSlash`,void 0),t([r({reflect:!0})],s.prototype,`size`,void 0),s=t([e(`ui-breadcrumb-skeleton`)],s);