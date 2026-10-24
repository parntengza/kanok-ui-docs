import{Ct as e,D as t,E as n,Ot as r,St as i,jt as a,w as o}from"./theme-switcher-BGAHXRgF.js";import{n as s,t as c}from"./status-indicator-DhbzV_N0.js";var l=class extends t{constructor(...e){super(...e),this.status=`active`,this.successDelay=1500,this.iconLabel=``,this.localize=new o(this)}static{this.styles=a`
        :host {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 32px;
            font-family: var(--ui-font-family);
            color: var(--ui-ink-muted);
        }

        .animation {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
            margin-inline-end: var(--ui-space-xs);
        }

        svg {
            width: 16px;
            height: 16px;
        }

        .spinner {
            animation: rotate 690ms linear infinite;
        }

        /* Carbon's small Loading (as <ui-loading small>): r 42 in a 100 box, a 276.46 dash (the r 44 circumference) */
        .spinner circle {
            fill: none;
            stroke-dasharray: 276.46 276.46;
            stroke-linecap: butt;
            stroke-width: 16;
        }

        .track {
            stroke: var(--ui-layer-accent);
            stroke-dashoffset: -22;
        }

        .stroke {
            stroke: var(--ui-interactive);
            stroke-dashoffset: 143.76; /* 48 % */
        }

        /* inactive: Carbon WC .cds--loading--stop — one more turn, two turns back, then both rings run out (1.4s) */
        .spinner.stop {
            animation:
                rotate-end-p1 700ms cubic-bezier(0, 0, 0.25, 1) forwards,
                rotate-end-p2 700ms cubic-bezier(0, 0, 0.25, 1) 700ms forwards;
        }

        .spinner.stop circle {
            animation: stroke-end 700ms cubic-bezier(0, 0, 0.25, 1) 700ms forwards;
        }

        /* Carbon CheckmarkFilled16 / ErrorFilled16: the mark is a hole in the circle, drawn at once */
        .check {
            fill: var(--ui-success);
        }

        .error {
            fill: var(--ui-error);
        }

        .text {
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes rotate-end-p1 {
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes rotate-end-p2 {
            to {
                transform: rotate(-360deg);
            }
        }

        @keyframes stroke-end {
            from {
                stroke-dashoffset: 52.53;
            }

            to {
                stroke-dashoffset: 276.46;
            }
        }

        /* reduced motion: a stopped spinner is gone at once (Carbon would leave both rings standing) */
        @media (prefers-reduced-motion: reduce) {
            .spinner,
            .spinner.stop,
            .spinner.stop circle {
                animation-duration: 0s;
                animation-delay: 0s;
            }
        }

        @media (forced-colors: active) {
            .track {
                stroke: GrayText;
            }

            .stroke {
                stroke: CanvasText;
            }

            .check {
                fill: CanvasText;
            }
        }

    `}connectedCallback(){super.connectedCallback(),this.internals.ariaLive=`polite`}updated(e){e.has(`status`)&&(clearTimeout(this.timer),this.status===`finished`&&(this.timer=setTimeout(()=>this.dispatchEvent(new CustomEvent(`ui-success`,{bubbles:!0,composed:!0})),this.successDelay)))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer)}renderIcon(){let e=this.localize.t.common,t={active:e.loading,finished:e.loadingFinished,error:e.loadingError,inactive:``},n=this.iconLabel||t[this.status];switch(this.status){case`active`:return r`<svg class="spinner" viewBox="0 0 100 100" role="img" aria-label=${n}>
                    <circle class="track" cx="50%" cy="50%" r="42" /><circle class="stroke" cx="50%" cy="50%" r="42" />
                </svg>`;case`finished`:return r`<svg class="check" viewBox="0 0 16 16" role="img" aria-label=${n}>
                    <path d=${c[16].paths[0].d} />
                </svg>`;case`error`:return r`<svg class="error" viewBox="0 0 16 16" role="img" aria-label=${n}>
                    <path d=${s[16].paths[0].d} />
                </svg>`;case`inactive`:return r`<svg class="spinner stop" viewBox="0 0 100 100" aria-hidden="true">
                    <circle class="track" cx="50%" cy="50%" r="42" /><circle class="stroke" cx="50%" cy="50%" r="42" />
                </svg>`}}render(){return r`
            <span class="animation" part="icon">${this.renderIcon()}</span>
            <span class="text" part="text"><slot></slot></span>
        `}};n([i({reflect:!0})],l.prototype,`status`,void 0),n([i({type:Number,attribute:`success-delay`})],l.prototype,`successDelay`,void 0),n([i({attribute:`icon-label`})],l.prototype,`iconLabel`,void 0),l=n([e(`ui-inline-loading`)],l);