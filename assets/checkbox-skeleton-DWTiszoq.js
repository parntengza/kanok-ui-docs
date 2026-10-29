import{D as e,Mt as t,kt as n,wt as r}from"./theme-switcher-BZXGbHfR.js";import{a as i,n as a}from"./skeleton-Bt17J2no.js";var o=class extends a{static{this.styles=[i,t`
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
        `]}render(){return n`<div class="row"><span class="box" part="box"></span><span class="bone label" part="label"></span></div>`}};o=e([r(`ui-checkbox-skeleton`)],o);