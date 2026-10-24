import{Ct as e,D as t,E as n,I as r,O as i,Ot as a,St as o,bt as s,ct as c,j as l,jt as u,k as d,w as f,wt as p}from"./theme-switcher-BGAHXRgF.js";var m=class extends i(t){static{this.shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[d,u`
        :host {
            display: inline-block;
            vertical-align: middle;
        }

        .trigger {
            display: grid;
            place-items: center;
            width: 24px;
            height: 24px;
            padding: 0;
            border: none;
            background: transparent;
            color: var(--ui-ink-muted);
            cursor: pointer;
            border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
        }

        .trigger:hover,
        .trigger[aria-expanded='true'] {
            color: var(--ui-ink);
        }

        .trigger:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        .trigger svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        /* Carbon toggletip: the default (light) popover — layer surface, drop shadow, 12×6 caret, 16px padding */
        .bubble {
            position: absolute; /* document coordinates in the top layer: scrolls with the page, see position.ts */
            inset: auto;
            margin: 0;
            box-sizing: border-box;
            width: max-content; /* Carbon popover-content; a shrink-to-fit width would depend on where it lands */
            max-width: 288px;
            padding: var(--ui-space-md);
            /* the menu settings (shared/listbox.ts): a design rounds and outlines every floating surface alike */
            border: var(--ui-menu-border, none);
            border-radius: var(--ui-menu-radius, var(--ui-radius-xs));
            background-color: var(--ui-overlay-background, var(--ui-surface-1)); /* a design can raise floating surfaces (--ui-overlay-background) */
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            filter: drop-shadow(0 2px 2px rgb(0 0 0 / 0.2));
            overflow: visible;
        }

        /* Carbon link-primary: readable on the bubble in every theme (the button blue is too dark on g90 / g100) */
        ::slotted(a) {
            color: var(--ui-link);
        }

        /* no fade: Carbon's toggletip shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}constructor(){super(),this.label=``,this.localize=new f(this),this.placement=`bottom`,this.open=!1,this.bubbleId=c(`ui-toggletip`),this.returnFocus=!1,this.browserToggling=!1,this.onKeydown=e=>{e.key===`Escape`&&!e.defaultPrevented&&this.open&&(e.preventDefault(),this.returnFocus=this.hasFocus(),this.open=!1)},this.reposition=()=>l(this.trigger,this.bubble,this.placement,10),this.addEventListener(`keydown`,this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.stopTracking()}show(){this.open=!0}hide(){this.open=!1}updated(e){if(e.has(`open`)){if(this.browserToggling)this.browserToggling=!1;else{let e=this.bubble.matches(`:popover-open`);this.open&&!e&&this.bubble.showPopover(),!this.open&&e&&this.bubble.hidePopover()}this.open?(requestAnimationFrame(this.reposition),this.untrack??=r(this.trigger,this.bubble,this.reposition)):(this.stopTracking(),this.returnFocus&&this.trigger.focus(),this.returnFocus=!1),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}}stopTracking(){this.untrack?.(),this.untrack=void 0}hasFocus(){let e=this.getRootNode();return this.contains(e.activeElement)||!!this.shadowRoot?.activeElement}onBeforeToggle(e){let t=e.newState===`open`;t||(this.returnFocus=this.hasFocus()),t!==this.open&&(this.browserToggling=!0),this.open=t}onFocusOut(e){let t=e.relatedTarget;t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&(this.open=!1)}render(){return a`
            <button
                class="trigger"
                part="trigger"
                type="button"
                aria-label=${this.label||this.localize.t.common.moreInfo}
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.bubbleId}
                popovertarget=${this.bubbleId}
                @focusout=${this.onFocusOut}
            >
                <slot name="trigger">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path
                            d="M8.5 11V6.5h-2v1h1V11H6v1h4v-1h-1.5ZM8 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
                        />
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                    </svg>
                </slot>
            </button>
            <div
                class="bubble"
                part="bubble"
                id=${this.bubbleId}
                popover="auto"
                role="group"
                aria-label=${this.label||this.localize.t.common.moreInfo}
                @beforetoggle=${this.onBeforeToggle}
                @focusout=${this.onFocusOut}
            >
                <slot></slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};n([o()],m.prototype,`label`,void 0),n([o({reflect:!0})],m.prototype,`placement`,void 0),n([o({type:Boolean,reflect:!0})],m.prototype,`open`,void 0),n([s(`.trigger`)],m.prototype,`trigger`,void 0),n([s(`.bubble`)],m.prototype,`bubble`,void 0),m=n([e(`ui-toggletip`)],m);