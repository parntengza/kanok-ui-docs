import{Ct as e,D as t,Mt as n,jt as r,kt as i,wt as a}from"./theme-switcher-BZXGbHfR.js";import{a as o,n as s}from"./skeleton-Bt17J2no.js";var c=r`<path d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z" />`,l=r`<path d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z" />`,u=i`<svg class="handle lower" viewBox="0 0 16 24">${c}</svg><svg class="handle upper" viewBox="0 0 16 24">${l}</svg>`,d=i`<span class="thumb"></span>`,f=class extends s{constructor(...e){super(...e),this.hideLabel=!1,this.twoHandles=!1}static{this.styles=[o,n`
            :host {
                display: block;
            }

            .label {
                display: block;
                inline-size: 75px;
                block-size: 14px;
                margin-block-end: var(--ui-space-xs);
            }

            :host([hide-label]) .label {
                display: none;
            }

            /* as <ui-slider>: 16px apart, the track 100% wide between 200 and 640px */
            .container {
                display: flex;
                align-items: center;
                gap: var(--ui-space-md);
            }

            .range {
                flex: 0 1 20px;
                block-size: 12px;
            }

            .slider {
                position: relative;
                box-sizing: border-box;
                inline-size: 100%;
                min-inline-size: 200px;
                max-inline-size: 640px;
                block-size: 32px;
            }

            .track,
            .filled {
                position: absolute;
                inset-block-start: 15px;
                inline-size: 100%;
                block-size: 2px;
            }

            .track {
                background: var(--ui-hairline);
            }

            .track::before {
                content: '';
                position: absolute;
                inset-block-start: -5px;
                inset-inline-start: 50%;
                inline-size: 2px;
                block-size: 4px;
                background: var(--ui-hairline);
                transform: translateX(-50%);
            }

            .filled {
                background: var(--ui-slider-fill, var(--ui-layer-selected-inverse));
            }

            :host([two-handles]) .slider {
                margin-inline: var(--ui-space-xxs);
            }

            /* the handles' flat sides meet the track's ends; in RTL Carbon swaps the icons, the same as a mirror */
            .handle {
                position: absolute;
                inset-block-start: 4px;
                display: block;
                inline-size: 16px;
                block-size: 24px;
                fill: var(--ui-slider-fill, var(--ui-layer-selected-inverse));
            }

            .handle.lower {
                inset-inline-end: 100%;
            }

            .handle.upper {
                inset-inline-start: 100%;
            }

            :host(:dir(rtl)) .handle {
                transform: scaleX(-1);
            }

            .thumb {
                position: absolute;
                inset-block-start: 9px;
                inset-inline-start: calc(50% - 7px);
                inline-size: 14px;
                block-size: 14px;
                border-radius: 50%;
                background: var(--ui-slider-fill, var(--ui-layer-selected-inverse));
            }
        `]}render(){return i`<span class="bone label" part="label"></span>
            <div class="container">
                <span class="bone range" part="range-label"></span>
                <div class="slider">
                    <span class="track"></span><span class="filled"></span>
                    ${this.twoHandles?u:d}
                </div>
                <span class="bone range" part="range-label"></span>
            </div>`}};t([e({type:Boolean,reflect:!0,attribute:`hide-label`})],f.prototype,`hideLabel`,void 0),t([e({type:Boolean,reflect:!0,attribute:`two-handles`})],f.prototype,`twoHandles`,void 0),f=t([a(`ui-slider-skeleton`)],f);