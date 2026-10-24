import{Ct as e,D as t,E as n,I as r,O as i,Ot as a,St as o,bt as s,ct as c,j as l,jt as u,k as d,wt as f}from"./theme-switcher-BGAHXRgF.js";var p=class extends i(t){constructor(...e){super(...e),this.definition=``,this.placement=`bottom`,this.open=!1,this.openOnHover=!1,this.bubbleId=c(`ui-definition-tooltip`),this.scheduleHide=()=>{clearTimeout(this.hideTimer),this.hideTimer=setTimeout(()=>this.open=!1,100)},this.cancelHide=()=>clearTimeout(this.hideTimer),this.reposition=()=>l(this.term,this.bubble,this.placement,6),this.onDocumentKeydown=e=>{e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.open=!1)}}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[d,u`
        :host {
            display: inline;
        }

        .term {
            display: inline;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: 0;
            border-block-end: 1px dotted var(--ui-hairline-strong);
            background: transparent;
            color: var(--ui-ink);
            font: inherit;
            letter-spacing: inherit;
            cursor: pointer;
            outline: none;
        }

        .term:hover,
        .term:focus-visible {
            border-block-end-color: var(--ui-primary); /* border-interactive */
        }

        .term:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: 1px;
            border-radius: var(--ui-link-focus-radius, 0); /* as a link's ring (Kanok: 4px) */
        }

        /* Carbon popover high-contrast without drop shadow: 8/16px padding, body-01, 176px max */
        .bubble {
            --_caret-w: 12px;
            --_caret-h: 6px;

            position: absolute; /* document coordinates in the top layer, see position.ts */
            inset: auto;
            box-sizing: border-box;
            margin: 0;
            max-width: 176px;
            padding: var(--ui-space-xs) var(--ui-space-md);
            border: none;
            border-radius: var(--ui-tooltip-radius, var(--ui-radius-xs)); /* the tooltip setting */
            background-color: var(--ui-inverse-surface-1);
            color: var(--ui-inverse-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            overflow-wrap: break-word;
            overflow: visible;
        }

        /* no fade: Carbon's definition tooltip shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.hideTimer),this.stopTracking()}updated(e){if(!e.has(`open`))return;let t=this.bubble.matches(`:popover-open`);this.open&&!t?(this.bubble.showPopover(),this.reposition(),this.untrack??=r(this.term,this.bubble,this.reposition),document.addEventListener(`keydown`,this.onDocumentKeydown,!0)):!this.open&&t&&(this.bubble.hidePopover(),this.stopTracking()),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}stopTracking(){this.untrack?.(),this.untrack=void 0,document.removeEventListener(`keydown`,this.onDocumentKeydown,!0)}onKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open=!this.open)}onMousedown(e){e.button===0&&(this.open=!this.open)}render(){return a`
            <button
                class="term"
                part="trigger"
                type="button"
                tabindex="0"
                aria-controls=${this.bubbleId}
                aria-describedby=${this.bubbleId}
                aria-expanded=${this.open?`true`:`false`}
                @mousedown=${this.onMousedown}
                @keydown=${this.onKeydown}
                @focus=${()=>this.open=!0}
                @blur=${()=>this.open=!1}
                @pointerenter=${()=>{this.cancelHide(),this.openOnHover&&(this.open=!0)}}
                @pointerleave=${this.scheduleHide}
            >
                <slot></slot>
            </button>
            <div class="bubble" part="bubble" id=${this.bubbleId} popover="manual" role="tooltip" @pointerenter=${this.cancelHide} @pointerleave=${this.scheduleHide}>
                <slot name="definition">${this.definition}</slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};n([o()],p.prototype,`definition`,void 0),n([o({reflect:!0})],p.prototype,`placement`,void 0),n([o({type:Boolean,reflect:!0})],p.prototype,`open`,void 0),n([o({type:Boolean,attribute:`open-on-hover`})],p.prototype,`openOnHover`,void 0),n([s(`.term`)],p.prototype,`term`,void 0),n([s(`.bubble`)],p.prototype,`bubble`,void 0),p=n([e(`ui-definition-tooltip`)],p);