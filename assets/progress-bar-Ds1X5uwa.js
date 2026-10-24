import{At as e,Ct as t,D as n,E as r,Ot as i,St as a,Tt as o,ct as s,ht as c,it as l,jt as u,mt as d,w as f}from"./theme-switcher-BGAHXRgF.js";function p(e,t,n){if(n===`error`)return 0;if(n===`finished`)return t;if(!(e===void 0||Number.isNaN(e)))return Math.min(Math.max(e,0),t)}function m(e,t){return e===void 0||t<=0?0:e/t}var h={finished:e`<path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8.5 14 4.4 9.9l1.4-1.4 2.7 2.7 5.7-5.7 1.4 1.4z" />`,error:e`<path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 13.5L10 11l-3.5 3.5L5 13l3.5-3.5L5 6l1.5-1.5L10 8l3.5-3.5L15 6l-3.5 3.5L15 13z" />`},g=class extends n{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.max=100,this.size=`md`,this.status=`active`,this.type=`default`,this.ids=s(`ui-progress-bar`),this.localize=new f(this)}static{this.styles=[l,u`
        :host {
            display: block;
            font-family: var(--ui-font-family);
            color: var(--ui-ink);
        }

        .label {
            display: flex;
            justify-content: space-between;
            min-inline-size: 48px;
            margin-block-end: var(--ui-space-xs);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        .label-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .status-icon {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            margin-inline-start: var(--ui-space-md);
            fill: currentColor;
        }

        .track {
            position: relative;
            inline-size: 100%;
            min-inline-size: 48px;
            block-size: 8px;
            /* Carbon: a square track in the layer colour; a design can tint and round it (the bar is clipped to it) */
            border-radius: var(--ui-progress-radius);
            background-color: var(--ui-progress-track, var(--ui-surface-1));
            clip-path: inset(0 round var(--ui-progress-radius));
        }

        :host([size='sm']) .track {
            block-size: 4px;
        }

        .bar {
            display: block;
            inline-size: 100%;
            block-size: 100%;
            background-color: currentColor;
            color: var(--ui-interactive, var(--ui-primary));
            transform: scaleX(0);
            transform-origin: 0 center;
            transition: transform var(--ui-duration-moderate) var(--ui-easing);
        }

        :host(:dir(rtl)) .bar {
            transform-origin: 100% center;
        }

        .indeterminate .track::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient(90deg, var(--ui-interactive, var(--ui-primary)) 12.5%, transparent 12.5%);
            background-position-x: 0%;
            background-size: 200% 100%;
            animation: indeterminate 1400ms linear infinite;
        }

        :host(:dir(rtl)) .indeterminate .track::after {
            animation-name: indeterminate-rtl;
        }

        @media (prefers-reduced-motion: reduce) {
            .indeterminate .track::after {
                animation-duration: 4s; /* keep the busy cue, drop the speed */
            }
        }

        @keyframes indeterminate {
            0% {
                background-position-x: 25%;
            }

            80%,
            100% {
                background-position-x: -105%;
            }
        }

        @keyframes indeterminate-rtl {
            0% {
                background-position-x: -105%;
            }

            80%,
            100% {
                background-position-x: 25%;
            }
        }

        .helper {
            margin-block-start: var(--ui-space-xs);
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            line-height: 16px; /* helper-text-01 */
            letter-spacing: var(--ui-tracking-caption);
        }

        .finished .bar,
        .finished .status-icon {
            color: var(--ui-success);
        }

        .error .bar,
        .error .status-icon,
        .error .helper {
            color: var(--ui-error-text, var(--ui-error));
        }

        .finished .bar,
        .error .bar {
            transform: scaleX(1);
        }

        /* inline: label | track on one row; helper text for screen readers only */
        :host([type='inline']) .base {
            display: flex;
            align-items: center;
        }

        :host([type='inline']) .label {
            flex-shrink: 0;
            margin-block-end: 0;
            margin-inline-end: var(--ui-space-md);
        }

        :host([type='inline']) .track {
            flex: 1 1 0;
        }

        :host([type='inline']) .finished .track,
        :host([type='inline']) .error .track {
            position: absolute;
            min-inline-size: 0;
            width: 1px;
            height: 1px;
            margin: -1px;
            overflow: hidden;
            clip-path: inset(50%);
        }

        :host([type='inline']) .finished .label,
        :host([type='inline']) .error .label {
            flex-shrink: 1;
            justify-content: flex-start;
            margin-inline-end: 0;
        }

        :host([type='indented']) .label,
        :host([type='indented']) .helper {
            padding-inline: var(--ui-space-md);
        }

        @media (forced-colors: active) {
            .track {
                border: 1px solid CanvasText;
            }

            .bar {
                background-color: Highlight;
            }
        }
    `]}render(){let e=this.status===`finished`,t=this.status===`error`,n=p(this.value,this.max,this.status),r=n===void 0,a=e||t?h[this.status]:null,s=`${this.ids}-helper`,l=m(n,this.max),u=r||e||t?``:`transform: scaleX(${l})`;return i`
            <div class="base ${c({indeterminate:r,finished:e,error:t})}" part="base">
                <div class="label ${c({"sr-only":this.hideLabel})}" id=${`${this.ids}-label`} part="label">
                    <span class="label-text">${this.label}</span>
                    ${t?i`<span class="sr-only">, ${this.localize.t.common.loadingError}</span>`:o}
                    ${a?i`<svg class="status-icon" viewBox="0 0 20 20" aria-hidden="true">${a}</svg>`:o}
                </div>
                <div
                    class="track"
                    part="track"
                    role="progressbar"
                    aria-busy=${e?`false`:`true`}
                    aria-labelledby=${`${this.ids}-label`}
                    aria-describedby=${d(this.helperText?s:void 0)}
                    aria-valuemin=${d(r?void 0:0)}
                    aria-valuemax=${d(r?void 0:this.max)}
                    aria-valuenow=${d(r?void 0:n)}
                >
                    <div class="bar" part="bar" style=${u}></div>
                </div>
                ${this.helperText?i`<div class="helper" id=${s} part="helper-text">${this.helperText}</div>`:o}
            </div>
        `}};r([a()],g.prototype,`label`,void 0),r([a({type:Boolean,attribute:`hide-label`})],g.prototype,`hideLabel`,void 0),r([a({attribute:`helper-text`})],g.prototype,`helperText`,void 0),r([a({type:Number})],g.prototype,`value`,void 0),r([a({type:Number})],g.prototype,`max`,void 0),r([a({reflect:!0})],g.prototype,`size`,void 0),r([a({reflect:!0})],g.prototype,`status`,void 0),r([a({reflect:!0})],g.prototype,`type`,void 0),g=r([t(`ui-progress-bar`)],g);