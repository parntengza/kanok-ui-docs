import{Ct as e,D as t,Et as n,H as r,Mt as i,O as a,St as o,T as s,V as c,ht as l,jt as u,kt as d,wt as f,xt as p}from"./theme-switcher-BZXGbHfR.js";import{t as m}from"./spin-delay-Ag8fesN_.js";var h=class extends a{constructor(...e){super(...e),this.active=!0,this.small=!1,this.overlay=!1,this.description=``,this.contained=!1,this.delay=0,this.minDuration=0,this.shown=!1,this.localize=new s(this),this.previouslyFocused=null,this.trapping=!1,this.scopes=[],this.areaFocus=null,this.onFocusIn=e=>{let t=e.composedPath();t.includes(this)||this.isLayeredOnTop(t[0]??null)||this.focusTarget?.focus()},this.onKeydown=e=>{e.key!==`Tab`||this.isLayeredOnTop(e.composedPath()[0]??null)||(e.preventDefault(),this.focusTarget?.focus())}}static{this.hostStates=[`shown`]}static{this.styles=i`
        :host {
            display: inline-block;
        }

        :host([overlay]) {
            display: contents;
        }

        :host([contained]) {
            position: relative;
            display: block;
        }

        /* the area's own overlay: over just this box, under anything floating above the page */
        .overlay.contained {
            position: absolute;
            z-index: 1;
        }

        :host([hidden]) {
            display: none;
        }

        .overlay {
            position: fixed;
            inset: 0;
            z-index: 6000; /* Carbon z('overlay') */
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--ui-overlay);
            /* Carbon .cds--loading-overlay: $duration-slow-02 with the expressive standard easing (no token for either) */
            transition: background-color 700ms cubic-bezier(0.4, 0.14, 0.3, 1);
        }

        .overlay.stop,
        :host(:not([overlay])) .base.stop {
            display: none;
        }

        .focus {
            outline: none;
        }

        .base {
            inline-size: 88px;
            block-size: 88px;
            animation: rotate 690ms linear infinite;
        }

        :host([small]) .base {
            inline-size: 16px;
            block-size: 16px;
            line-height: 1rem;
        }

        svg {
            fill: transparent;
            inline-size: 100%;
            block-size: 100%;
        }

        circle {
            stroke-dasharray: 276.46 276.46;
            stroke-linecap: butt;
            stroke-width: 10;
        }

        :host([small]) circle {
            stroke-width: 16;
        }

        .stroke {
            stroke: var(--ui-interactive, var(--ui-primary));
            stroke-dashoffset: 52.53; /* 81 % of the circle */
        }

        :host([small]) .stroke {
            stroke-dashoffset: 143.76; /* 48 % */
        }

        .background {
            stroke: var(--ui-layer-accent);
            stroke-dashoffset: -22;
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .base {
                animation-duration: 2s;
            }

            .overlay {
                transition: none;
            }
        }

        @media (forced-colors: active) {
            .stroke {
                stroke: CanvasText;
            }

            .background {
                stroke: GrayText;
            }

            .overlay {
                background-color: Canvas;
                opacity: 0.8;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.spin?.update(this.active,this.delay,this.minDuration)}disconnectedCallback(){super.disconnectedCallback(),this.spin?.dispose(),this.stopTrap(),this.releaseArea()}willUpdate(e){(e.has(`active`)||e.has(`delay`)||e.has(`minDuration`))&&(this.spin??=new m(e=>this.shown=e),this.spin.update(this.active,this.delay,this.minDuration))}updated(e){this.toggleAttribute(`data-shown`,this.shown),(e.has(`shown`)||e.has(`overlay`)||e.has(`contained`))&&(this.overlay&&!this.contained&&this.shown?this.startTrap():this.stopTrap(),this.contained&&this.shown?this.holdArea():this.releaseArea())}inArea(e){for(let t=e;t;t=t.parentNode??t.host??null){if(t===this.shadowRoot)return!1;if(t===this)return!0}return!1}holdArea(){let e=c();this.inArea(e)&&(this.areaFocus=e,this.focusTarget?.focus())}releaseArea(){let e=this.areaFocus;if(this.areaFocus=null,!e?.isConnected)return;let t=c();(!t||t===document.body||t===this.focusTarget)&&e.focus()}get text(){return this.description||this.localize.t.common.loading}startTrap(){if(this.trapping)return;this.trapping=!0,this.previouslyFocused=document.activeElement instanceof HTMLElement&&document.activeElement!==document.body?document.activeElement:null,this.focusTarget?.focus();let e=this.getRootNode();this.scopes=e instanceof ShadowRoot?[document,e]:[document];for(let e of this.scopes)e.addEventListener(`focusin`,this.onFocusIn,!0);document.addEventListener(`keydown`,this.onKeydown,!0)}stopTrap(){if(!this.trapping)return;this.trapping=!1;for(let e of this.scopes)e.removeEventListener(`focusin`,this.onFocusIn,!0);this.scopes=[],document.removeEventListener(`keydown`,this.onKeydown,!0);let e=document.activeElement;(!e||e===document.body||this.shadowRoot?.contains(e)||e===this)&&this.previouslyFocused?.isConnected&&this.previouslyFocused.focus(),this.previouslyFocused=null}isLayeredOnTop(e){if(!(e instanceof Element))return!1;let t=e.closest(`dialog[open], [aria-modal="true"]`);return!!t&&!t.contains(this)}renderSpinner(){return d`<div class="base ${this.shown?``:`stop`}" part="base" aria-atomic="true" aria-live=${this.shown?`assertive`:`off`}>
            <svg part="spinner" viewBox="0 0 100 100" role="img" aria-label=${this.text}>
                <title .textContent=${this.text}></title>
                ${this.small?u`<circle class="background" cx="50%" cy="50%" r="42" />`:n}
                <circle class="stroke" cx="50%" cy="50%" r=${this.small?42:44} />
            </svg>
        </div>`}render(){if(this.contained)return this.renderContained();if(!this.overlay)return this.renderSpinner();let e=this.shown;return d`<div class="overlay ${e?``:`stop`}" part="overlay" role="presentation">
            <div class="focus" role=${l(e?`dialog`:void 0)} aria-modal=${l(e?`true`:void 0)} aria-label=${l(e?this.text:void 0)} tabindex=${l(e?-1:void 0)}>${this.renderSpinner()}</div>
        </div>`}renderContained(){let e=this.shown;return d`<div class="area" part="area" aria-busy=${l(e?`true`:void 0)} ?inert=${e}><slot></slot></div>
            <div class="overlay contained ${e?``:`stop`}" part="overlay">
                <div class="focus" role=${l(e?`group`:void 0)} aria-label=${l(e?this.text:void 0)} tabindex=${l(e?-1:void 0)}>${this.renderSpinner()}</div>
            </div>`}};t([e({reflect:!0,converter:r})],h.prototype,`active`,void 0),t([e({type:Boolean,reflect:!0})],h.prototype,`small`,void 0),t([e({type:Boolean,reflect:!0})],h.prototype,`overlay`,void 0),t([e()],h.prototype,`description`,void 0),t([e({type:Boolean,reflect:!0})],h.prototype,`contained`,void 0),t([e({type:Number})],h.prototype,`delay`,void 0),t([e({type:Number,attribute:`min-duration`})],h.prototype,`minDuration`,void 0),t([o()],h.prototype,`shown`,void 0),t([p(`.focus`)],h.prototype,`focusTarget`,void 0),h=t([f(`ui-loading`)],h);