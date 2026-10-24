import{Ct as e,E as t,Ot as n,jt as r}from"./theme-switcher-BGAHXRgF.js";import{a as i,n as a}from"./skeleton-BESm0w-6.js";var o=class extends a{static{this.styles=[i,r`
            :host {
                display: block;
            }

            .row {
                position: relative;
                block-size: 20px;
            }

            /* where <ui-checkbox> draws its box (Carbon: 3px in, 3px down) */
            .box {
                position: absolute;
                inset-block-start: 3px;
                inset-inline-start: 3px;
                box-sizing: border-box;
                inline-size: 16px;
                block-size: 16px;
                border: 1px solid var(--ui-icon-primary);
                border-radius: 2px;
            }

            .label {
                position: absolute;
                inset-block-start: 2px;
                inset-inline-start: 26px;
                inline-size: 100px;
                block-size: 16px;
            }
        `]}render(){return n`<div class="row"><span class="box" part="box"></span><span class="bone label" part="label"></span></div>`}};o=t([e(`ui-checkbox-skeleton`)],o);