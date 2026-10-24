import{A as e,B as t,Ct as n,D as r,E as i,I as a,M as o,O as s,Ot as c,St as l,Tt as u,V as d,bt as f,ct as p,j as m,jt as h,k as g,yt as _}from"./theme-switcher-BGAHXRgF.js";var v=class extends s(r){constructor(...n){super(...n),this.open=!1,this.placement=`bottom`,this.caret=!0,this.dropShadow=!0,this.highContrast=!1,this.tabTip=!1,this.autoClose=!1,this.label=``,this.contentId=p(`ui-popover`),this.reposition=()=>{let t=this.anchor;t&&(this.caret&&!this.tabTip?m(t,this.content,this.placement,10):e(t,this.content,this.placement,0))},this.onKeydown=e=>{if(e.key!==`Escape`||e.defaultPrevented||!this.open||!this.autoClose)return;e.preventDefault();let n=t(),r=!1;for(let e=n;e&&!r;e=e.parentNode??e.host??null)r=e===this;this.requestClose(`escape`),!this.open&&r&&this.updateComplete.then(()=>this.triggers[0]?.focus())},this.onPointerDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.content)||this.requestClose(`outside`)}}static{this.styles=[g,h`
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
    `]}disconnectedCallback(){super.disconnectedCallback(),this.stopTracking()}show(){this.open=!0}hide(){this.open=!1}get anchor(){return this.triggers[0]??this}updated(e){if(e.has(`open`)){let t=this.content.matches(`:popover-open`);this.open&&!t?(this.content.showPopover(),this.reposition(),this.untrack=a(this.anchor??this,this.content,this.reposition),this.addEventListener(`keydown`,this.onKeydown),this.stopOutside=o(document,this.onPointerDown)):!this.open&&t&&(this.content.hidePopover(),this.stopTracking()),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}else this.open&&(e.has(`placement`)||e.has(`caret`)||e.has(`tabTip`))&&this.reposition();this.syncTrigger()}syncTrigger(){let e=this.triggers[0];e&&(`expanded`in e?e.expanded=this.open:e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}stopTracking(){this.untrack?.(),this.stopOutside?.(),this.untrack=this.stopOutside=void 0,this.removeEventListener(`keydown`,this.onKeydown)}requestClose(e){this.autoClose&&this.dispatchEvent(new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0}))&&(this.open=!1)}render(){return c`
            <slot name="trigger" @slotchange=${this.syncTrigger}></slot>
            <div class="bubble" part="content" id=${this.contentId} popover="manual" role="group" aria-label=${this.label||u}>
                <slot></slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};i([l({type:Boolean,reflect:!0})],v.prototype,`open`,void 0),i([l({reflect:!0})],v.prototype,`placement`,void 0),i([l({reflect:!0,converter:d})],v.prototype,`caret`,void 0),i([l({reflect:!0,attribute:`drop-shadow`,converter:d})],v.prototype,`dropShadow`,void 0),i([l({type:Boolean,reflect:!0,attribute:`high-contrast`})],v.prototype,`highContrast`,void 0),i([l({type:Boolean,reflect:!0,attribute:`tab-tip`})],v.prototype,`tabTip`,void 0),i([l({type:Boolean,attribute:`auto-close`})],v.prototype,`autoClose`,void 0),i([l()],v.prototype,`label`,void 0),i([f(`.bubble`)],v.prototype,`content`,void 0),i([_({slot:`trigger`})],v.prototype,`triggers`,void 0),v=i([n(`ui-popover`)],v);