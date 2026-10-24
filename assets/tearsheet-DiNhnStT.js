import{Ct as e,D as t,E as n,Ot as r,St as i,Tt as a,a as o,bt as s,d as c,g as l,ht as u,jt as d,l as f,m as p,p as m,s as h,u as g,w as _,xt as v}from"./theme-switcher-BGAHXRgF.js";import"./tabs-CvVVO2Pb.js";import{t as y}from"./motion-C95bcdt7.js";import{i as b,n as x,r as S,t as C}from"./action-set-BrGCGIn9.js";var w=d`
    dialog {
        box-sizing: border-box;
        inline-size: 100%;
        block-size: 100%;
        max-inline-size: none;
        max-block-size: none;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        color: var(--ui-ink);
        font-family: var(--ui-font-family);
    }

    dialog[open] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    dialog::backdrop {
        background-color: var(--ui-overlay);
    }

    :host([data-stack='1-of-2']) dialog::backdrop {
        opacity: 0.67;
    }

    :host([data-stack='1-of-3']) dialog::backdrop {
        opacity: 0.22;
    }

    :host([data-stack='2-of-2']) dialog::backdrop,
    :host([data-stack='2-of-3']) dialog::backdrop,
    :host([data-stack='3-of-3']) dialog::backdrop {
        opacity: 0.5;
    }

    .container {
        --_top: 90px;
        --_actions-height: 64px;
        /* the sheet's surface; a design can raise it (--ui-overlay-background; Carbon: layer 1) */
        --_surface: var(--ui-overlay-background, var(--ui-layer-1));

        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        inline-size: 100%;
        block-size: 100%;
        max-block-size: calc(100% - var(--_top) + var(--_stack-room, 0px));
        border: var(--ui-overlay-border, 1px solid var(--ui-border-subtle-2));
        /* the top corners can round (--ui-tearsheet-radius; Carbon: square); the actions row follows */
        border-start-start-radius: var(--ui-tearsheet-radius, 0);
        border-start-end-radius: var(--ui-tearsheet-radius, 0);
        background-color: var(--_surface);
        outline: none;
    }

    :host([vertical-position='lower']) .container,
    :host([data-lower]:not([vertical-position])) .container {
        --_top: 130px;
    }

    :host([width='wide']) .container {
        --_actions-height: 80px;
    }

    @media (prefers-reduced-motion: no-preference) {
        .container {
            transition:
                transform var(--ui-duration-moderate-02) cubic-bezier(0, 0, 0.3, 1),
                max-height var(--ui-duration-moderate-02) cubic-bezier(0, 0, 0.3, 1);
        }
    }

    /* an older tearsheet under newer ones: scaled back, a little taller */
    :host([data-stack='1-of-2']) .container,
    :host([data-stack='2-of-3']) .container {
        --_stack-room: 16px;

        transform: scale(0.95);
    }

    :host([data-stack='1-of-3']) .container {
        --_stack-room: 32px;

        transform: scale(0.9);
    }

    /* Carbon's small modal widths */
    @media (min-width: 42rem) {
        :host([width='wide']) .container {
            inline-size: calc(100% - 128px);
        }

        :host(:not([width='wide'])) .container {
            inline-size: 60%;
        }
    }

    @media (min-width: 66rem) {
        :host(:not([width='wide'])) .container {
            inline-size: 42%;
        }
    }

    @media (min-width: 82rem) {
        :host(:not([width='wide'])) .container {
            inline-size: 36%;
        }
    }

    @media (max-width: 41.98rem) {
        .container {
            max-block-size: 100%;
        }
    }

    .header {
        position: relative;
        flex: none;
        padding: var(--ui-space-md);
        background-color: var(--_surface);
        border-block-end: 1px solid var(--ui-border-subtle-2);
    }

    :host([width='wide']) .header {
        padding: var(--ui-space-lg) var(--ui-space-xl);
    }

    :host([width='wide']) .header.has-close {
        padding-inline-end: 80px;
    }

    :host([width='wide']) .header.has-navigation {
        padding-block-end: 0;
    }

    .label {
        margin: 0 0 var(--ui-space-xxs);
        color: var(--ui-ink-muted);
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
    }

    h2 {
        margin: 0;
        padding-inline-end: calc(20% - 3rem);
        font: var(--ui-font-heading-03);
    }

    :host([width='wide']) h2 {
        font: var(--ui-font-heading-04);
    }

    .description {
        display: inline-flex;
        max-inline-size: 80%;
        margin-block-start: var(--ui-space-xs);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
    }

    :host([width='wide']) .description {
        max-inline-size: 100%;
        margin-block-start: var(--ui-space-md);
    }

    @media (min-width: 42rem) {
        :host([width='wide']) .description {
            max-inline-size: 60%;
        }
    }

    .header-actions {
        position: absolute;
        z-index: 1;
        inset-block-start: var(--ui-space-md);
        inset-inline-end: 160px;
        display: flex;
        gap: var(--ui-space-xs);
    }

    .navigation {
        margin-block-start: var(--ui-space-sm);
    }

    [hidden] {
        display: none !important;
    }

    /* --ui-close-size / --ui-close-inset / --ui-icon-control-radius: a design can make it a smaller round button set in from the corner (Carbon: a 48px square in the corner) */
    .close {
        position: absolute;
        z-index: 1;
        inset-block-start: var(--ui-space-xs);
        inset-inline-end: var(--ui-space-md);
        display: grid;
        place-items: center;
        inline-size: var(--ui-close-size, 48px);
        block-size: var(--ui-close-size, 48px);
        margin: var(--ui-close-inset, 0);
        padding: 0;
        border: none;
        border-radius: var(--ui-icon-control-radius, 0);
        background: transparent;
        color: var(--ui-ink);
        cursor: pointer;
    }

    .close:hover {
        background-color: var(--ui-ghost-hover);
    }

    .close:focus-visible {
        ${h}
    }

    /* focused on opening right after a click (shared/quiet-focus): no keyboard ring in Kanok */
    .close[data-quiet-focus]:focus-visible {
        outline-color: var(--ui-pointer-focus, var(--ui-focus));
    }

    .close svg {
        inline-size: 20px;
        block-size: 20px;
        fill: currentColor;
    }

    .body {
        display: flex;
        flex: 1;
        min-block-size: 0;
        overflow: hidden;
    }

    .influencer {
        flex: 0 0 257px;
        box-sizing: border-box;
        overflow-y: auto;
        border-inline-end: 1px solid var(--ui-border-subtle-2);
    }

    .influencer.wide {
        flex-basis: 321px;
    }

    .main .influencer {
        background-color: var(--_surface);
        border-inline-end: none;
        border-inline-start: 1px solid var(--ui-border-subtle-2);
    }

    @media (max-width: 41.98rem) {
        .influencer {
            flex-basis: auto;
        }
    }

    .right {
        display: grid;
        flex-grow: 1;
        grid-template-columns: 100%;
        grid-template-rows: 1fr auto;
        min-inline-size: 0;
    }

    .main {
        display: flex;
        min-block-size: 0;
        min-inline-size: 0;
        background-color: var(--_surface);
    }

    :host([width='wide']) .main {
        background-color: var(--ui-canvas);
    }

    .content {
        flex-grow: 1;
        min-inline-size: 0;
        overflow: auto;
    }

    .button-row {
        min-block-size: fit-content;
        overflow-x: auto;
    }

    .actions {
        box-sizing: border-box; /* the actions padding (--ui-actions-padding) stays inside the full width */
        min-inline-size: 100%;
        background-color: var(--_surface);
        border-block-start: 1px solid var(--ui-border-subtle-2);
    }

    :host([width='wide']) .actions {
        background-color: var(--ui-canvas);
    }

    .actions ::slotted(*) {
        --ui-field-height-lg: var(--_actions-height);
    }

    @media (forced-colors: active) {
        .container {
            border-color: CanvasText;
        }
    }
`,T=4,E=3,D=[];function O(){let e=Math.min(D.length,E);D.forEach((t,n)=>{t.placeInStack(n+1,e)})}function k(e,t=[]){let n=e instanceof HTMLSlotElement?e.assignedElements({flatten:!0}):[...e.children];for(let e of n)!(e instanceof HTMLElement)||e.hidden||e.inert||(e.matches(`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`)&&!e.matches(`[tabindex="-1"]`)||e.shadowRoot?.delegatesFocus&&!e.hasAttribute(`disabled`)?t.push(e):e.shadowRoot?k(e.shadowRoot,t):k(e,t));return t}var A=r`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" /></svg>`,j=class extends t{constructor(...e){super(...e),this.open=!1,this.width=`narrow`,this.heading=``,this.label=``,this.description=``,this.influencerPlacement=`right`,this.influencerWidth=`narrow`,this.hasCloseIcon=!1,this.closeIconDescription=``,this.preventCloseOnClickOutside=!1,this.selectorInitialFocus=``,this.slotted=new Set,this.actionCount=0,this.localize=new _(this),this.launcher=null,this.layer={escape:()=>this.requestClose(`escape`),modal:!0},this.pointerDownOutside=!1,this.animations=[]}static{this.styles=[C(`.actions`),w]}get wide(){return this.width===`wide`}get showsClose(){return this.hasCloseIcon||this.actionCount===0}placeInStack(e,t){t>1&&e<=t?this.dataset.stack=`${e}-of-${t}`:delete this.dataset.stack}disconnectedCallback(){super.disconnectedCallback(),this.leaveStack(),clearTimeout(this.closeTimer),this.stopAnimations(),this.release()}willUpdate(e){e.has(`width`)&&this.toggleAttribute(`data-lower`,!this.wide)}updated(e){super.updated(e),e.has(`width`)&&this.layout(),e.has(`open`)&&(e.get(`open`)!==void 0||this.open)&&(this.open?this.opened():this.closed())}duration(){return y(getComputedStyle(this).getPropertyValue(`--ui-duration-moderate-02`))}async opened(){let e=this.dialog;if(!e||e.open)return;clearTimeout(this.closeTimer),this.launcher=this.deepActive(),e.showModal(),D.push(this),O(),m(this.layer,globalThis),c(this,document.documentElement),this.rise(!0),this.layout();let t=[...this.querySelectorAll(`*`)].map(e=>e.updateComplete).filter(e=>e!==void 0);await Promise.all(t),this.open&&this.focusInitial()}closed(){this.leaveStack(),this.release();let e=this.launcher;this.launcher=null,e?.isConnected&&l(e),this.closeTimer=setTimeout(()=>{this.dialog?.close(),this.dispatchEvent(new Event(`ui-close`,{bubbles:!0,composed:!0}))},this.rise(!1))}leaveStack(){let e=D.indexOf(this);e<0||(D.splice(e,1),delete this.dataset.stack,O())}release(){f(this.layer),p(this,document.documentElement)}deepActive(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}rise(e){let t=this.container,n=this.dialog,r=this.duration();if(this.stopAnimations(),!t||!n||r<=0||typeof t.animate!=`function`||document.hidden)return 0;let i=`translateY(min(95vh, 500px))`,a=e?`cubic-bezier(0, 0, 0.3, 1)`:`cubic-bezier(0.4, 0.14, 1, 1)`,o=e?`none`:`forwards`;return this.animations=[t.animate(e?[{transform:i},{}]:[{},{transform:i}],{duration:r,easing:a,fill:o}),n.animate(e?[{opacity:0},{opacity:1}]:[{opacity:1},{opacity:0}],{duration:r,easing:a,fill:o,pseudoElement:`::backdrop`})],r}stopAnimations(){for(let e of[...this.animations,...this.shadowRoot?.getAnimations()??[]])e.cancel();this.animations=[]}layout(){let e=this.actionsEl?.querySelector(`slot`);if(!this.actionsEl||!e)return;let t=S(e);b(this,t,this.wide?`2xl`:`xl`),t.slice(T).forEach(e=>{e.hidden=!0}),x(this.actionsEl,t.slice(0,T),this.wide?`2xl`:`xl`)}focusInitial(){let e=this.selectorInitialFocus?this.querySelector(this.selectorInitialFocus):null;if(e){l(e);return}let t=this.shadowRoot?.querySelector(`.close`);l(t??(this.container?k(this.container)[0]:void 0))}requestClose(e){let t=new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.open=!1)}onCancel(e){e.preventDefault(),g(this.layer)&&this.requestClose(`escape`)}onClose(){if(!this.open||!this.isConnected)return;let e=new CustomEvent(`ui-request-close`,{detail:{reason:`escape`},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)?this.open=!1:this.dialog?.showModal()}onPointerDown(e){this.pointerDownOutside=e.target===this.dialog&&!!this.container&&o(this.container.getBoundingClientRect(),e.clientX,e.clientY)}onClick(e){!this.preventCloseOnClickOutside&&this.pointerDownOutside&&e.target===this.dialog&&this.container&&o(this.container.getBoundingClientRect(),e.clientX,e.clientY)&&this.requestClose(`outside`)}onKeydown(e){if(e.key!==`Tab`||!this.container)return;let t=k(this.container),n=t[0],r=t.at(-1);n&&r&&(e.shiftKey&&n.matches(`:focus-within`)?(e.preventDefault(),r.focus()):!e.shiftKey&&r.matches(`:focus-within`)&&(e.preventDefault(),n.focus()))}onSlotChange(e){let t=e.target,n=t.name||`default`,r=new Set(this.slotted);t.assignedNodes().length>0?r.add(n):r.delete(n),this.slotted=r}onActionsChange(e){this.actionCount=Math.min(S(e.target).length,T),this.layout()}renderInfluencer(e){if(this.influencerPlacement!==e)return a;let t=this.wide&&this.slotted.has(`influencer`);return r`<div class=${u({influencer:!0,wide:this.influencerWidth===`wide`})} part="influencer" ?hidden=${!t}><slot name="influencer" @slotchange=${this.onSlotChange}></slot></div>`}renderHeader(){let e=e=>this.slotted.has(e),t={header:!0,"has-close":this.showsClose,"has-navigation":this.wide&&e(`header-navigation`)},n=this.closeIconDescription||this.localize.t.common.close;return r`<div class=${u(t)} part="header">
            <p class="label" ?hidden=${!this.label&&!e(`label`)}><slot name="label" @slotchange=${this.onSlotChange}>${this.label}</slot></p>
            <h2 part="heading" id="heading" ?hidden=${!this.heading}>${this.heading}</h2>
            <div class="description" ?hidden=${!this.description&&!e(`description`)}><slot name="description" @slotchange=${this.onSlotChange}>${this.description}</slot></div>
            <div class="header-actions" ?hidden=${!this.wide||!e(`header-actions`)}><slot name="header-actions" @slotchange=${this.onSlotChange}></slot></div>
            <div class="navigation" ?hidden=${!this.wide||!e(`header-navigation`)}><slot name="header-navigation" @slotchange=${this.onSlotChange}></slot></div>
            ${this.showsClose?r`<button class="close" part="close-button" type="button" aria-label=${n} @click=${()=>this.requestClose(`close-button`)}>${A}</button>`:a}
        </div>`}render(){return r`<dialog
            part="dialog"
            aria-labelledby=${this.heading?`heading`:a}
            @cancel=${this.onCancel}
            @close=${this.onClose}
            @pointerdown=${this.onPointerDown}
            @click=${this.onClick}
            @keydown=${this.onKeydown}
        >
            <div class="container" part="container">
                ${this.renderHeader()}
                <div class="body">
                    ${this.renderInfluencer(`left`)}
                    <div class="right">
                        <div class="main">
                            <ui-layer class="content" part="content" .level=${+!this.wide}><slot></slot></ui-layer>
                            ${this.renderInfluencer(`right`)}
                        </div>
                        <div class="button-row" ?hidden=${this.actionCount===0}>
                            <div class="actions" part="actions"><slot name="actions" @slotchange=${this.onActionsChange}></slot></div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>`}};n([i({type:Boolean,reflect:!0})],j.prototype,`open`,void 0),n([i({reflect:!0})],j.prototype,`width`,void 0),n([i({reflect:!0,attribute:`vertical-position`})],j.prototype,`verticalPosition`,void 0),n([i()],j.prototype,`heading`,void 0),n([i()],j.prototype,`label`,void 0),n([i()],j.prototype,`description`,void 0),n([i({attribute:`influencer-placement`})],j.prototype,`influencerPlacement`,void 0),n([i({attribute:`influencer-width`})],j.prototype,`influencerWidth`,void 0),n([i({type:Boolean,attribute:`has-close-icon`})],j.prototype,`hasCloseIcon`,void 0),n([i({attribute:`close-icon-description`})],j.prototype,`closeIconDescription`,void 0),n([i({type:Boolean,attribute:`prevent-close-on-click-outside`})],j.prototype,`preventCloseOnClickOutside`,void 0),n([i({attribute:`selector-initial-focus`})],j.prototype,`selectorInitialFocus`,void 0),n([v()],j.prototype,`slotted`,void 0),n([v()],j.prototype,`actionCount`,void 0),n([s(`dialog`)],j.prototype,`dialog`,void 0),n([s(`.container`)],j.prototype,`container`,void 0),n([s(`.actions`)],j.prototype,`actionsEl`,void 0),j=n([e(`ui-tearsheet`)],j);