import{Ct as e,D as t,H as n,Mt as r,O as i,T as a,jt as o,kt as s,wt as c}from"./theme-switcher-BZXGbHfR.js";import{a as l,n as u}from"./skeleton-Bt17J2no.js";import{t as d}from"./big-number-ee0FU7nS.js";var f=class extends u{constructor(...e){super(...e),this.size=`default`}static{this.styles=[l,r`
            :host {
                display: block;
                inline-size: 64px;
            }

            :host([size='lg']) {
                inline-size: 80px;
            }

            :host([size='xl']) {
                inline-size: 96px;
            }

            .bone {
                display: block;
            }

            .label {
                inline-size: 70%;
                block-size: 16px;
                margin-block-end: var(--ui-space-xxs);
            }

            .value {
                block-size: 40px;
            }

            :host([size='lg']) .label {
                margin-block-end: var(--ui-space-xs);
            }

            :host([size='lg']) .value {
                block-size: 48px;
            }

            :host([size='xl']) .label {
                margin-block-end: var(--ui-space-sm);
            }

            :host([size='xl']) .value {
                block-size: 64px;
            }
        `]}render(){return s`<span class="bone label" part="label"></span><span class="bone value" part="value"></span>`}};t([e({reflect:!0})],f.prototype,`size`,void 0),f=t([c(`ui-big-number-skeleton`)],f);var p=o`<path d="M3.7 6.7 7.5 2.9 7.5 15 8.5 15 8.5 2.9 12.3 6.7 13 6 8 1 3 6z" />`,m=o`<path d="M16 4 6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z" />`,h=s`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8.5 11 8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11z" /><path d="M8,3.5c-0.4,0-0.8,0.3-0.8,0.8S7.6,5,8,5c0.4,0,0.8-0.3,0.8-0.8S8.4,3.5,8,3.5z" /><path d="M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z" /></svg>`,g={default:16,lg:20,xl:24},_=class extends i{constructor(...e){super(...e),this.label=``,this.locale=``,this.fractionDigits=1,this.truncate=!0,this.percentage=!1,this.trending=!1,this.forceShowTotal=!1,this.tooltipDescription=``,this.size=`default`,this.loading=!1,this.localize=new a(this)}static{this.styles=r`
        :host {
            display: block;
        }

        figure {
            margin: 0;
            color: var(--ui-ink);
        }

        .row {
            display: flex;
        }

        .label {
            display: block;
            margin: 0;
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        .value {
            margin-block-end: 0;
            font: var(--ui-font-heading-04);
        }

        .total,
        .mark {
            margin-block: auto var(--ui-space-xxs);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        .trend {
            flex: none;
            margin-block-start: var(--ui-space-xs);
            fill: currentColor;
        }

        .icon-button {
            margin-inline-start: var(--ui-space-xxs);
        }

        .info {
            display: flex;
            padding-inline-start: var(--ui-space-xs);
        }

        .info-button {
            display: flex;
            align-self: flex-start;
            padding: 0;
            border: 0;
            background: none;
            color: var(--ui-ink);
            cursor: pointer;
        }

        .info-button svg {
            inline-size: 16px;
            block-size: 16px;
            fill: currentColor;
        }

        .info-button:focus-visible {
            outline: 1px solid var(--ui-focus);
            border-radius: var(--ui-icon-control-radius, 0); /* an icon control's corners (Kanok: round) */
        }

        :host([size='lg']) .value {
            font: var(--ui-font-heading-06);
        }

        :host([size='lg']) .total,
        :host([size='lg']) .mark {
            font: var(--ui-font-heading-03);
            letter-spacing: normal;
        }

        :host([size='xl']) .label {
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        :host([size='xl']) .value {
            font: var(--ui-font-heading-07);
        }

        :host([size='xl']) .total,
        :host([size='xl']) .mark {
            font: var(--ui-font-heading-04);
            letter-spacing: normal;
        }

        :host([size='xl']) .trend {
            margin-block-start: var(--ui-space-sm);
        }
    `}renderTrend(){let e=g[this.size]??16;return s`<slot name="trending-icon"><svg class="trend" width=${e} height=${e} viewBox=${e===16?`0 0 16 16`:`0 0 32 32`} aria-hidden="true">${e===16?p:m}</svg></slot>`}renderInfo(){return s`<ui-tooltip class="info" text=${this.tooltipDescription} placement="right"><button type="button" class="info-button" part="info" aria-label=${this.localize.t.common.moreInfo}>${h}</button></ui-tooltip>`}render(){if(this.loading)return s`<ui-big-number-skeleton size=${this.size}></ui-big-number-skeleton>`;let{value:e,total:t}=d({value:this.value,total:this.total,percentage:this.percentage,forceShowTotal:this.forceShowTotal,locale:this.locale,fractionDigits:this.fractionDigits,truncate:this.truncate,unknown:this.localize.t.common.unknown}),n=this.percentage?s`${e}<span class="mark">%</span>`:e;return s`<figure part="figure">
            <figcaption class="row"><slot name="label"><span class="label" part="label">${this.label}</span></slot>${this.tooltipDescription?this.renderInfo():``}</figcaption>
            <span class="row">${this.trending?this.renderTrend():``}<span class="value" part="value">${n}</span>${t?s`<span class="total" part="total">${t}</span>`:``}<span class="icon-button"><slot name="icon-button"></slot></span></span>
        </figure>`}};t([e({type:Number})],_.prototype,`value`,void 0),t([e({type:Number})],_.prototype,`total`,void 0),t([e()],_.prototype,`label`,void 0),t([e()],_.prototype,`locale`,void 0),t([e({type:Number,attribute:`fraction-digits`})],_.prototype,`fractionDigits`,void 0),t([e({converter:n})],_.prototype,`truncate`,void 0),t([e({type:Boolean})],_.prototype,`percentage`,void 0),t([e({type:Boolean})],_.prototype,`trending`,void 0),t([e({type:Boolean,attribute:`force-show-total`})],_.prototype,`forceShowTotal`,void 0),t([e({attribute:`tooltip-description`})],_.prototype,`tooltipDescription`,void 0),t([e({reflect:!0})],_.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],_.prototype,`loading`,void 0),_=t([c(`ui-big-number`)],_);