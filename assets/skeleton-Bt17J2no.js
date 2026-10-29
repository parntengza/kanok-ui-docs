import{Ct as e,D as t,G as n,Mt as r,O as i,ct as a,kt as o}from"./theme-switcher-BZXGbHfR.js";var s=r`
    .bone {
        position: relative;
        overflow: hidden;
        /* square in Carbon; a design rounds the bars (--ui-skeleton-radius, Kanok: 4px) */
        border-radius: var(--ui-skeleton-radius);
        background-color: var(--ui-skeleton-background);
        pointer-events: none;
    }

    .bone::before {
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        inline-size: 100%;
        block-size: 100%;
        background-color: var(--ui-skeleton-element);
        animation: 3000ms ease-in-out ui-skeleton infinite;
        content: '';
        will-change: transform-origin, transform, opacity;
    }

    @media (prefers-reduced-motion: reduce) {
        .bone::before {
            animation: none;
        }
    }

    @keyframes ui-skeleton {
        0% {
            opacity: 0.3;
            transform: scaleX(0);
            transform-origin: left;
        }

        20% {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
        }

        28% {
            transform: scaleX(1);
            transform-origin: right;
        }

        51% {
            transform: scaleX(0);
            transform-origin: right;
        }

        58% {
            transform: scaleX(0);
            transform-origin: right;
        }

        82% {
            transform: scaleX(1);
            transform-origin: right;
        }

        83% {
            transform: scaleX(1);
            transform-origin: left;
        }

        96% {
            transform: scaleX(0);
            transform-origin: left;
        }

        100% {
            opacity: 0.3;
            transform: scaleX(0);
            transform-origin: left;
        }
    }

    @media (forced-colors: active) {
        .bone {
            background-color: CanvasText;
        }

        .bone::before {
            background-color: Canvas;
            forced-color-adjust: none;
        }
    }
`,c=r`
    :host {
        display: block;
        --_field-h: var(--ui-field-height-md, 40px);
    }

    :host([size='sm']) {
        --_field-h: var(--ui-field-height-sm, 32px);
    }

    :host([size='lg']) {
        --_field-h: var(--ui-field-height-lg, 48px);
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

    .field {
        inline-size: 100%;
        block-size: var(--_field-h);
        border-radius: var(--ui-field-radius, var(--ui-skeleton-radius)); /* the field's corners */
    }

    /*
     * Carbon's fluid field skeletons (FluidTextInput / FluidDropdown / FluidSelect … Skeleton): a 64px box in
     * skeleton-background with a 1px skeleton-element line below, a 25% bar 16px in and a 50% bar at 36px.
     */
    .fluid-box {
        position: relative;
        box-sizing: border-box;
        block-size: 64px;
        border-block-end: 1px solid var(--ui-skeleton-element);
        background-color: var(--ui-skeleton-background);
    }

    .fluid-box .bone {
        position: absolute;
        inset-inline-start: var(--ui-space-md);
        block-size: 8px;
    }

    .fluid-box .top {
        inset-block-start: var(--ui-space-md);
        inline-size: 25%;
    }

    .fluid-box .bottom {
        inset-block-start: 36px;
        inline-size: 50%;
    }
`,l=o`<div class="fluid-box" part="field"><span class="bone top" part="label"></span><span class="bone bottom" part="value"></span></div>`,u=class extends i{connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}},d=class extends u{constructor(...e){super(...e),this.size=`md`,this.hideLabel=!1,this.fluid=!1}static{this.styles=[s,c]}get isFluid(){return n(this,`fluid`)}connectedCallback(){super.connectedCallback(),a(this,this.fluid)}willUpdate(){a(this,this.fluid)}render(){return this.isFluid?l:o`<span class="bone label" part="label"></span><div class="bone field" part="field"></div>`}};t([e({reflect:!0})],d.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0,attribute:`hide-label`})],d.prototype,`hideLabel`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`fluid`,void 0);export{s as a,l as i,u as n,c as r,d as t};