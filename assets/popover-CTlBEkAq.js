import{A as e,Ct as t,D as n,Et as r,H as i,L as a,M as o,Mt as s,N as c,O as l,V as u,bt as d,j as f,k as p,kt as m,lt as h,wt as g,xt as _}from"./theme-switcher-BZXGbHfR.js";var v=e=>e===`mouse`,y=e=>e===`touch`||e===`pen`;function b(e,t){for(let n=t;n;n=n.parentNode??n.host??null)if(n===e)return!0;return!1}var x=class extends p(l){constructor(...e){super(...e),this.open=!1,this.placement=`bottom`,this.caret=!0,this.dropShadow=!0,this.highContrast=!1,this.tabTip=!1,this.autoClose=!1,this.label=``,this.openOnHover=!1,this.contentId=h(`ui-popover`),this.reposition=()=>{let e=this.anchor;e&&(this.caret&&!this.tabTip?o(e,this.content,this.placement,10):f(e,this.content,this.placement,0))},this.onKeydown=e=>{if(e.key!==`Escape`||e.defaultPrevented||!this.open||!(this.autoClose||this.openOnHover))return;e.preventDefault();let t=u(),n=!1;for(let e=t;e&&!n;e=e.parentNode??e.host??null)n=e===this;this.dismiss(`escape`),!this.open&&n&&this.updateComplete.then(()=>this.refocusTrigger())},this.onPointerDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.content)||(this.autoClose||this.openOnHover)&&this.dismiss(`outside`)},this.hovered=!1,this.pressType=``,this.refocusing=!1,this.pageEscape=!1,this.onTriggerSlotChange=()=>{this.syncTrigger(),this.syncHoverMode()},this.onTriggerEnter=e=>{v(e.pointerType)&&(this.hovered=!0,this.hoverLater(!0,100))},this.onContentEnter=e=>{this.openOnHover&&v(e.pointerType)&&(this.hovered=!0,clearTimeout(this.hoverTimer))},this.onHoverLeave=e=>{this.openOnHover&&v(e.pointerType)&&(this.hovered=!1,this.hoverLater(!1,300))},this.onTriggerFocus=e=>{!this.refocusing&&e.composedPath()[0].matches(`:focus-visible`)&&(clearTimeout(this.hoverTimer),this.open=!0)},this.onHoverBlur=()=>{this.openOnHover&&(clearTimeout(this.blurTimer),this.blurTimer=setTimeout(()=>this.closeUnlessHeld(),0))},this.onTriggerPress=e=>{this.pressType=e.pointerType},this.onTriggerClick=()=>{let e=y(this.pressType);this.pressType=``,e&&(this.open=!this.open)},this.onPageEscape=e=>{e.key===`Escape`&&this.open&&!e.composedPath().includes(this)&&(e.preventDefault(),e.stopPropagation(),this.dismiss(`escape`))}}static{this.styles=[e,s`
        :host {
            display: inline-block;
        }

        .bubble {
            --_caret-w: 12px;
            --_caret-h: 6px;

            position: absolute; /* document coordinates in the top layer, see position.ts */
            inset: auto;
            box-sizing: border-box;
            inline-size: max-content;
            max-inline-size: 368px;
            margin: 0;
            padding: 0;
            /* the menu settings (shared/listbox.ts): a design rounds and outlines every floating surface alike */
            border: var(--ui-menu-border, none);
            border-radius: var(--ui-menu-radius, var(--ui-radius-xs));
            background-color: var(--ui-overlay-background, var(--ui-surface-1)); /* a design can raise floating surfaces (--ui-overlay-background) */
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            overflow: visible;
        }

        :host([drop-shadow]:not([drop-shadow='false'])) .bubble {
            filter: drop-shadow(0 2px 2px rgb(0 0 0 / 0.2));
        }

        :host([high-contrast]) .bubble {
            background-color: var(--ui-inverse-surface-1);
            color: var(--ui-inverse-ink);
        }

        :host(:not([caret])) .caret,
        :host([caret='false']) .caret,
        :host([tab-tip]) .caret {
            display: none;
        }

        :host([tab-tip]) .bubble {
            border-radius: 0;
        }

        /* no fade: Carbon's popover shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.syncHoverMode()}disconnectedCallback(){super.disconnectedCallback(),this.stopTracking(),this.syncHoverMode()}show(){this.open=!0}hide(){this.open=!1}get anchor(){return this.triggers[0]??this}updated(e){if(e.has(`open`)){let t=this.content.matches(`:popover-open`);this.open&&!t?(this.content.showPopover(),this.reposition(),this.untrack=a(this.anchor??this,this.content,this.reposition),this.addEventListener(`keydown`,this.onKeydown),this.stopOutside=c(document,this.onPointerDown)):!this.open&&t&&(this.content.hidePopover(),this.stopTracking()),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}else this.open&&(e.has(`placement`)||e.has(`caret`)||e.has(`tabTip`))&&this.reposition();this.syncTrigger(),(e.has(`open`)||e.has(`openOnHover`))&&this.syncHoverMode()}syncTrigger(){let e=this.triggers[0];e&&(`expanded`in e?e.expanded=this.open:e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}stopTracking(){this.untrack?.(),this.stopOutside?.(),this.untrack=this.stopOutside=void 0,this.removeEventListener(`keydown`,this.onKeydown)}dismiss(e){this.autoClose?this.requestClose(e):this.open=!1}requestClose(e){this.autoClose&&this.dispatchEvent(new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0}))&&(this.open=!1)}refocusTrigger(){this.refocusing=!0,this.triggers[0]?.focus(),this.refocusing=!1}syncHoverMode(){let e=this.openOnHover&&this.isConnected,t=e?this.triggers[0]:void 0;t!==this.hoverTrigger&&(this.hoverTrigger?.removeEventListener(`pointerenter`,this.onTriggerEnter),this.hoverTrigger?.removeEventListener(`pointerleave`,this.onHoverLeave),this.hoverTrigger?.removeEventListener(`focusin`,this.onTriggerFocus),this.hoverTrigger?.removeEventListener(`focusout`,this.onHoverBlur),this.hoverTrigger?.removeEventListener(`pointerdown`,this.onTriggerPress),this.hoverTrigger?.removeEventListener(`click`,this.onTriggerClick),t?.addEventListener(`pointerenter`,this.onTriggerEnter),t?.addEventListener(`pointerleave`,this.onHoverLeave),t?.addEventListener(`focusin`,this.onTriggerFocus),t?.addEventListener(`focusout`,this.onHoverBlur),t?.addEventListener(`pointerdown`,this.onTriggerPress),t?.addEventListener(`click`,this.onTriggerClick),this.hoverTrigger=t),e||(clearTimeout(this.hoverTimer),clearTimeout(this.blurTimer),this.hovered=!1);let n=e&&this.open;n!==this.pageEscape&&(n?document.addEventListener(`keydown`,this.onPageEscape,!0):document.removeEventListener(`keydown`,this.onPageEscape,!0),this.pageEscape=n)}hoverLater(e,t){clearTimeout(this.hoverTimer),this.hoverTimer=setTimeout(()=>{e?this.open=!0:this.closeUnlessHeld()},t)}closeUnlessHeld(){!this.hovered&&!this.focusHolds()&&(this.open=!1)}focusHolds(){let e=u();if(!e||!b(this,e))return!1;let t=this.triggers[0];return!(t&&b(t,e))||e.matches(`:focus-visible`)}render(){return m`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <div
                class="bubble"
                part="content"
                id=${this.contentId}
                popover="manual"
                role="group"
                aria-label=${this.label||r}
                @pointerenter=${this.onContentEnter}
                @pointerleave=${this.onHoverLeave}
                @focusout=${this.onHoverBlur}
            >
                <slot></slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};n([t({type:Boolean,reflect:!0})],x.prototype,`open`,void 0),n([t({reflect:!0})],x.prototype,`placement`,void 0),n([t({reflect:!0,converter:i})],x.prototype,`caret`,void 0),n([t({reflect:!0,attribute:`drop-shadow`,converter:i})],x.prototype,`dropShadow`,void 0),n([t({type:Boolean,reflect:!0,attribute:`high-contrast`})],x.prototype,`highContrast`,void 0),n([t({type:Boolean,reflect:!0,attribute:`tab-tip`})],x.prototype,`tabTip`,void 0),n([t({type:Boolean,attribute:`auto-close`})],x.prototype,`autoClose`,void 0),n([t()],x.prototype,`label`,void 0),n([t({type:Boolean,attribute:`open-on-hover`})],x.prototype,`openOnHover`,void 0),n([_(`.bubble`)],x.prototype,`content`,void 0),n([d({slot:`trigger`})],x.prototype,`triggers`,void 0),x=n([g(`ui-popover`)],x);