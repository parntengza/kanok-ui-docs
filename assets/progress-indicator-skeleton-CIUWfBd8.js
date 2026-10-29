import{Ct as e,D as t,Mt as n,kt as r,wt as i}from"./theme-switcher-BZXGbHfR.js";import{a,n as o}from"./skeleton-Bt17J2no.js";var s=class extends o{constructor(...e){super(...e),this.steps=4,this.vertical=!1}static{this.styles=[a,n`
            :host {
                display: block;
            }

            .steps {
                display: flex;
                flex-wrap: wrap; /* as ui-progress-indicator: a second row instead of a wider page */
            }

            :host([vertical]) .steps {
                flex-direction: column;
            }

            .step {
                position: relative;
                display: flex;
                flex-shrink: 0;
                inline-size: 128px;
                min-inline-size: 112px;
            }

            :host([vertical]) .step {
                inline-size: auto;
                min-block-size: 58px;
                padding-inline-start: var(--ui-space-md);
            }

            .line {
                position: absolute;
                inset-block-start: 0;
                inset-inline-start: 0;
                inline-size: 100%;
                block-size: 2px;
                background-color: var(--ui-hairline);
            }

            :host([vertical]) .line {
                inline-size: 2px;
                block-size: 100%;
            }

            .icon {
                flex-shrink: 0;
                inline-size: 16px;
                block-size: 16px;
                margin: 10px var(--ui-space-xs) 0 0;
                fill: var(--ui-ink);
            }

            .label {
                inline-size: 40px;
                block-size: 14px;
                margin-block-start: 10px;
            }

            :host([vertical]) .label {
                margin-block-start: 11px;
            }
        `]}render(){let e=r`<div class="step" part="step">
            <span class="line"></span>
            <svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0-1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Z" /></svg>
            <span class="bone label" part="label"></span>
        </div>`;return r`<div class="steps">${Array.from({length:Math.max(1,this.steps)},()=>e)}</div>`}};t([e({type:Number})],s.prototype,`steps`,void 0),t([e({type:Boolean,reflect:!0})],s.prototype,`vertical`,void 0),s=t([i(`ui-progress-indicator-skeleton`)],s);