import{Ct as e,E as t,Ot as n,jt as r}from"./theme-switcher-BGAHXRgF.js";import{t as i}from"./skeleton-BESm0w-6.js";var a=class extends i{static{this.styles=[...i.styles,r`
            .field {
                block-size: 100px;
            }

            .fluid-area {
                box-sizing: border-box;
                padding: var(--ui-space-md);
                border-block-end: 1px solid var(--ui-skeleton-element);
                background-color: var(--ui-skeleton-background);
            }

            .fluid-area .label {
                block-size: 8px;
                margin-block-end: var(--ui-space-sm);
            }

            .fluid-area .field {
                inline-size: 80%;
                block-size: 64px;
                border-radius: var(--ui-skeleton-radius); /* a bar in the box, not the field's corners */
            }
        `]}render(){return this.isFluid?n`<div class="fluid-area" part="box"><span class="bone label" part="label"></span><div class="bone field" part="field"></div></div>`:super.render()}};a=t([e(`ui-text-area-skeleton`)],a);