import{Ct as e,D as t,Et as n,H as r,Mt as i,O as a,St as o,T as s,d as c,f as l,g as u,gt as d,h as f,kt as p,m,p as h,u as g,wt as _,xt as v}from"./theme-switcher-BZXGbHfR.js";import"./tab-ChjAM0hz.js";import"./icon-button-D4pzZab2.js";import{t as y}from"./motion-C95bcdt7.js";import{i as b,n as x,r as S,t as C}from"./action-set-Dh8aCanf.js";var w=i`
    :host {
        display: contents;
    }

    .overlay {
        position: fixed;
        z-index: 6000;
        inset: 0;
        background-color: var(--ui-overlay);
    }

    .panel {
        --_progress: 0;
        --_title-pad-end: var(--ui-space-xl);
        --_title-pad-bottom: var(--ui-space-md);
        --_actions-height: 64px;
        /* every band of the panel takes this surface; a design can raise it (--ui-overlay-background; Carbon: layer 1) */
        --_surface: var(--ui-overlay-background, var(--ui-layer-1));

        position: fixed;
        z-index: 9000;
        inset-block-start: var(--ui-side-panel-top, 3rem);
        display: grid;
        box-sizing: border-box;
        block-size: calc(100% - var(--ui-side-panel-top, 3rem));
        inline-size: clamp(16rem, var(--_size), 100%);
        min-inline-size: 16rem;
        max-inline-size: 100%;
        grid-template-rows: auto 1fr auto;
        background-color: var(--_surface);
        color: var(--ui-ink);
        box-shadow: 0 2px 4px var(--ui-overlay);
        /* a containing block for the fixed back and close buttons */
        transform: translateX(0);
    }

    .panel *,
    .panel *::before {
        box-sizing: border-box;
    }

    @media (min-width: 42rem) {
        .panel {
            max-inline-size: 75vw;
        }
    }

    /* the edge that faces the page can round (--ui-side-panel-radius; Carbon: square) */
    .panel[data-placement='right'] {
        inset-inline-end: 0;
        border-inline-start: var(--ui-overlay-border, 1px solid var(--ui-border-subtle-2));
        border-start-start-radius: var(--ui-side-panel-radius, 0);
        border-end-start-radius: var(--ui-side-panel-radius, 0);
    }

    .panel[data-placement='left'] {
        inset-inline-start: 0;
        border-inline-end: var(--ui-overlay-border, 1px solid var(--ui-border-subtle-2));
        border-start-end-radius: var(--ui-side-panel-radius, 0);
        border-end-end-radius: var(--ui-side-panel-radius, 0);
    }

    .panel.slide-in {
        box-shadow: none;
    }

    .panel.animated {
        grid-template-rows: 1fr auto;
    }

    .panel.toolbar {
        --_title-pad-end: 64px;
    }

    .panel.condensed {
        --_actions-height: 48px;
    }

    /* animated title: header and content scroll together; static: the content scrolls under the header */
    .scroller {
        display: contents;
    }

    .animated .scroller,
    .body.scrolls {
        overflow: hidden auto;
    }

    .animated .scroller {
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .header {
        position: relative;
        z-index: 4;
        min-block-size: 40px;
        padding: var(--ui-space-md) var(--ui-space-md) 0;
        background-color: var(--_surface);
    }

    .header.has-heading {
        min-block-size: auto;
    }

    .header.has-subtitle {
        --_title-pad-bottom: var(--ui-space-xs);
    }

    .header.has-back {
        padding-block-start: var(--ui-space-xl);
    }

    .header.has-back.md-buttons {
        padding-block-start: 40px;
    }

    /* the line under the header: there from the start when static, faded in by the scroll when animated */
    .header::before {
        position: absolute;
        z-index: 9;
        inset-block-end: 0;
        inset-inline-start: 0;
        inline-size: 100%;
        block-size: 1px;
        background-color: var(--ui-border-subtle-2);
        content: '';
        opacity: 1;
    }

    .header:not(.has-heading)::before,
    .header.has-toolbar::before {
        content: none;
    }

    .animated .header {
        position: sticky;
        inset-block-start: calc(-1px * var(--_distance, 0));
    }

    .animated .header::before {
        opacity: var(--_progress);
    }

    .header.has-toolbar {
        margin-block-end: var(--ui-space-xs);
    }

    .label {
        margin: 0;
        padding-inline-end: var(--_title-pad-end);
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
        opacity: calc(1 - var(--_progress));
    }

    .title {
        position: relative;
        z-index: 4;
        background-color: var(--_surface);
        border-block-end: var(--_title-pad-bottom) solid transparent;
    }

    .animated .title {
        position: sticky;
        inset-block-start: var(--ui-space-md);
    }

    h2 {
        margin: 0;
        padding-inline-end: var(--_title-pad-end);
        font: var(--ui-font-heading-03);
    }

    .title-text {
        opacity: calc(1 - var(--_progress));
    }

    .collapsed {
        position: absolute;
        inset-block-start: 0;
        font: var(--ui-font-heading-compact-02);
        opacity: var(--_progress);
    }

    .no-label .title-text {
        transform: translateY(calc(-1 * var(--ui-space-md) * var(--_progress)));
    }

    .no-label .collapsed {
        transform: translateY(calc(var(--ui-space-md) * (1 - var(--_progress))));
    }

    .subtitle {
        margin: 0;
        padding-block-end: var(--ui-space-md);
        padding-inline-end: var(--_title-pad-end);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        opacity: calc(1 - var(--_progress));
    }

    .subtitle[hidden],
    .toolbar-row[hidden] {
        display: none;
    }

    .toolbar-row {
        position: sticky;
        z-index: 4;
        display: flex;
        align-items: center;
        background-color: var(--_surface);
    }

    .toolbar-row ::slotted(:first-child) {
        margin-inline-end: var(--ui-space-xs);
    }

    .close-area {
        position: fixed;
        z-index: 10;
        inset-block-start: 0;
        inset-inline-end: 0;
        display: flex;
    }

    .back {
        position: fixed;
        z-index: 5;
        inset-block-start: 0;
        inset-inline-start: 0;
    }

    .body {
        min-block-size: 0;
        padding: 0 var(--ui-space-md) var(--ui-space-md);
    }

    .header.has-toolbar + .body {
        padding-block-start: var(--ui-space-xs);
    }

    .actions {
        position: sticky;
        inset-block-end: 0;
        inline-size: 100%;
        background-color: var(--_surface);
        border-block-start: 1px solid var(--ui-border-subtle-2);
    }

    .actions ::slotted(*) {
        --ui-field-height-lg: var(--_actions-height);
    }

    .actions[hidden] {
        display: none;
    }

    /* opened over a modal: a modal dialog of its own (the top layer) that draws nothing itself; the panel keeps its place */
    dialog.layer {
        position: fixed;
        inset: 0;
        inline-size: 100%;
        block-size: 100%;
        max-inline-size: none;
        max-block-size: none;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        overflow: visible;
    }

    dialog.layer::backdrop {
        background: transparent;
    }

    @media (forced-colors: active) {
        .panel {
            border: 1px solid CanvasText;
        }
    }
`,T=p`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,E=p`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7 12.3 3.2 8.5H15v-1H3.2L7 3.7 6.3 3 1.3 8l5 5z" /></svg>`;function D(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function O(e,t=[]){let n=e instanceof HTMLSlotElement?e.assignedElements({flatten:!0}):[...e.shadowRoot?.children??e.children??[]];for(let e of n)!(e instanceof HTMLElement)||e.hidden||e.inert||(e.matches(`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`)&&!e.matches(`[tabindex="-1"]`)||e.shadowRoot?.delegatesFocus&&!e.hasAttribute(`disabled`)?t.push(e):O(e,t));return t}var k=class extends a{constructor(...e){super(...e),this.open=!1,this.placement=`right`,this.size=`md`,this.heading=``,this.labelText=``,this.slideIn=!1,this.includeOverlay=!1,this.preventCloseOnClickOutside=!1,this.selectorInitialFocus=``,this.selectorPageContent=``,this.hideCloseButton=!1,this.closeIconDescription=``,this.closeIconTooltipAlignment=`left`,this.navigationBackIconDescription=``,this.currentStep=0,this.condensedActions=!1,this.animateTitle=!0,this.shown=!1,this.animated=!1,this.hasSubtitle=!1,this.hasToolbar=!1,this.actionCount=0,this.overModal=!1,this.localize=new s(this),this.launcher=null,this.pushedPage=null,this.layer=null,this.animations=[],this.onScroll=e=>{if(!this.animated||!this.panel)return;let t=this.distance()||1,n=Math.min(e.target.scrollTop,t)/t;this.panel.style.setProperty(`--_progress`,String(n))},this.onKeydown=e=>{if(e.key!==`Tab`||this.slideIn||!this.panel)return;let t=O(this.panel);if(!t.length)return;let n=t[0],r=t.at(-1);e.shiftKey&&n.matches(`:focus-within`)?(e.preventDefault(),r.focus()):!e.shiftKey&&r.matches(`:focus-within`)&&(e.preventDefault(),n.focus())}}static{this.styles=[C(`.actions`),w]}disconnectedCallback(){super.disconnectedCallback(),this.release(),clearTimeout(this.closeTimer);for(let e of this.animations)e.cancel();this.animations=[],this.shown=!1}get actionSize(){return this.size===`xs`?`sm`:this.size}duration(e){return y(getComputedStyle(this).getPropertyValue(e))}willUpdate(e){e.has(`open`)&&this.open&&(clearTimeout(this.closeTimer),this.shown=!0,this.overModal=!this.slideIn&&h())}updated(e){super.updated(e),e.has(`currentStep`)&&(this.animated?this.scroller:this.body)?.scrollTo?.({top:0}),e.has(`size`)&&this.layout(),this.open&&!e.has(`open`)&&this.measureTitle(),e.has(`open`)&&(e.get(`open`)!==void 0||this.open)&&(this.open?this.opened():this.closed())}async opened(){this.launcher=D(),this.overModal&&this.layerDialog&&!this.layerDialog.open&&this.layerDialog.showModal(),this.includeOverlay&&l(this,document.documentElement),this.slideIn||(this.layer={escape:()=>this.requestClose(`escape`),modal:this.overModal},m(this.layer,globalThis)),this.resizeObserver=typeof ResizeObserver>`u`?void 0:new ResizeObserver(()=>this.measureTitle()),this.panel&&this.resizeObserver?.observe(this.panel);let e=this.slide(!0);this.pushPage(),this.layout();let t=[...this.querySelectorAll(`*`)].map(e=>e.updateComplete).filter(e=>e!==void 0);await Promise.all(t),this.measureTitle(),await e?.finished.catch(()=>void 0),this.open&&this.focusInitial()}closed(){this.release(),this.layerDialog?.open&&this.layerDialog.close(),this.pushPage(),this.slide(!1);let e=this.launcher;this.launcher=null,e?.isConnected&&u(e),this.closeTimer=setTimeout(()=>{this.shown=!1,this.dispatchEvent(new Event(`ui-close`,{bubbles:!0,composed:!0}))},this.duration(`--ui-duration-moderate-01`))}release(){this.layer&&g(this.layer),this.layer=null,this.resizeObserver?.disconnect(),f(this,document.documentElement)}slide(e){let t=this.panel;if(!t||typeof t.animate!=`function`||document.hidden)return;let n=this.duration(`--ui-duration-moderate-01`);if(n<=0)return;let r={opacity:0,transform:`translateX(${this.placement===`left`?`-320px`:`320px`})`},i={opacity:1,transform:`translateX(0)`},a=e?`cubic-bezier(0, 0, 0.38, 0.9)`:`cubic-bezier(0.2, 0, 1, 0.9)`,o=e?`none`:`forwards`,s=t.animate(e?[r,i]:[i,r],{duration:n,easing:a,fill:o}),c=this.overlay?.animate([{opacity:+!e},{opacity:+!!e}],{duration:n,easing:a,fill:o});return this.animations=c?[s,c]:[s],s}pageContent(){return this.getRootNode().querySelector(this.selectorPageContent)??document.querySelector(this.selectorPageContent)}pushPage(){if(!this.slideIn||!this.selectorPageContent)return;let e=this.open?this.pageContent():this.pushedPage;if(this.pushedPage=this.open?e:null,!e)return;let t=this.open?`${this.panel?.offsetWidth??0}px`:``;e.style.transition=`margin var(--ui-duration-moderate-02) var(--ui-easing)`,e.style.marginInlineStart=this.placement===`left`?t:``,e.style.marginInlineEnd=this.placement===`right`?t:``}layout(){let e=this.actionsEl?.querySelector(`slot`);if(!this.actionsEl||!e)return;let t=S(e);b(this,t,this.actionSize),x(this.actionsEl,t,this.actionSize)}distance(){let e=this.titleEl,t=this.hasToolbar&&e?e.offsetHeight-e.clientHeight:0;return(this.labelEl?.offsetHeight??0)+(this.hasSubtitle?this.subtitleEl?.offsetHeight??0:0)+t}measureTitle(){let e=this.panel;if(!e||!this.open)return;let t=this.distance();e.style.setProperty(`--_distance`,String(t));let n=this.duration(`--ui-duration-moderate-02`)>0,r=this.animated?this.scroller:this.body,i=r?r.scrollHeight-r.clientHeight:0;this.animated=this.animateTitle&&n&&!!this.heading&&t>0&&(!!this.labelText||this.hasToolbar||this.hasSubtitle)&&i>=t+16,this.animated||e.style.setProperty(`--_progress`,`0`)}onLayerCancel(e){e.preventDefault(),this.layer&&c(this.layer)&&this.requestClose(`escape`)}focusInitial(){let e=this.selectorInitialFocus?this.querySelector(this.selectorInitialFocus):null;e?u(e):!this.slideIn&&this.panel&&u(O(this.panel)[0])}requestClose(e){let t=new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.open=!1)}onOverlayClick(){this.preventCloseOnClickOutside||this.requestClose(`overlay`)}onBack(){this.dispatchEvent(new Event(`ui-navigate-back`,{bubbles:!0,composed:!0}))}onActionsChange(e){this.actionCount=S(e.target).length,this.layout()}renderTitle(){let e=this.animated?p`<h2 class="collapsed" aria-hidden="true">${this.heading}</h2>`:n;return p`<div class=${d({title:!0,"no-label":!this.labelText})}><h2 class="title-text" part="heading">${this.heading}</h2>${e}</div>`}renderHeader(){let e=this.localize.t.common,t=this.actionCount>0&&/l/.test(this.size)?`md`:`sm`,r={header:!0,"has-heading":!!this.heading,"has-subtitle":this.hasSubtitle,"has-back":this.currentStep>0,"has-toolbar":this.hasToolbar,"md-buttons":t===`md`};return p`<div class=${d(r)} part="header">
            ${this.currentStep>0?p`<ui-icon-button class="back" kind="ghost" size=${t} label=${this.navigationBackIconDescription||e.back} tooltip-placement="bottom-start" @click=${this.onBack}>${E}</ui-icon-button>`:n}
            <slot name="above-title"></slot>
            ${this.heading&&this.labelText?p`<p class="label">${this.labelText}</p>`:n}
            ${this.heading?this.renderTitle():n}
            <div class="close-area">
                ${this.hideCloseButton?n:p`<ui-icon-button class="close" kind="ghost" size=${t} label=${this.closeIconDescription||e.close} tooltip-placement=${this.closeIconTooltipAlignment} @click=${()=>this.requestClose(`close-button`)}>${T}</ui-icon-button>`}
            </div>
            <p class="subtitle" ?hidden=${!this.hasSubtitle}><slot name="subtitle" @slotchange=${e=>this.hasSubtitle=e.target.assignedNodes().length>0}></slot></p>
            <slot name="below-title"></slot>
            <div class="toolbar-row" ?hidden=${!this.hasToolbar}>
                <slot name="action-toolbar" @slotchange=${e=>this.hasToolbar=e.target.assignedElements().length>0}></slot>
            </div>
        </div>`}render(){if(!this.shown)return n;let e={panel:!0,animated:this.animated,"slide-in":this.slideIn,toolbar:this.hasToolbar,condensed:this.condensedActions},t={xs:`16rem`,sm:`20rem`,md:`30rem`,lg:`40rem`,xl:`65rem`,"2xl":`80rem`},r=this.includeOverlay?p`<div class="overlay" part="overlay" @click=${this.onOverlayClick}></div>`:n,i=p`${r}
            <ui-layer
                class=${d(e)}
                part="panel"
                level="1"
                role="complementary"
                aria-label=${this.heading||n}
                data-placement=${this.placement}
                style="--_size: ${t[this.size]??t.md}"
                @keydown=${this.onKeydown}
            >
                <div class="scroller" @scroll=${this.onScroll}>
                    ${this.renderHeader()}
                    <div class=${d({body:!0,scrolls:!this.animated})} part="body" @scroll=${this.onScroll}><slot @slotchange=${()=>this.measureTitle()}></slot></div>
                </div>
                <div class="actions" part="actions" ?hidden=${this.actionCount===0} ?data-condensed=${this.condensedActions}><slot name="actions" @slotchange=${this.onActionsChange}></slot></div>
            </ui-layer>`;return this.overModal?p`<dialog class="layer" @cancel=${this.onLayerCancel}>${i}</dialog>`:i}};t([e({type:Boolean,reflect:!0})],k.prototype,`open`,void 0),t([e({reflect:!0})],k.prototype,`placement`,void 0),t([e({reflect:!0})],k.prototype,`size`,void 0),t([e()],k.prototype,`heading`,void 0),t([e({attribute:`label-text`})],k.prototype,`labelText`,void 0),t([e({type:Boolean,reflect:!0,attribute:`slide-in`})],k.prototype,`slideIn`,void 0),t([e({type:Boolean,reflect:!0,attribute:`include-overlay`})],k.prototype,`includeOverlay`,void 0),t([e({type:Boolean,attribute:`prevent-close-on-click-outside`})],k.prototype,`preventCloseOnClickOutside`,void 0),t([e({attribute:`selector-initial-focus`})],k.prototype,`selectorInitialFocus`,void 0),t([e({attribute:`selector-page-content`})],k.prototype,`selectorPageContent`,void 0),t([e({type:Boolean,attribute:`hide-close-button`})],k.prototype,`hideCloseButton`,void 0),t([e({attribute:`close-icon-description`})],k.prototype,`closeIconDescription`,void 0),t([e({attribute:`close-icon-tooltip-alignment`})],k.prototype,`closeIconTooltipAlignment`,void 0),t([e({attribute:`navigation-back-icon-description`})],k.prototype,`navigationBackIconDescription`,void 0),t([e({type:Number,attribute:`current-step`})],k.prototype,`currentStep`,void 0),t([e({type:Boolean,reflect:!0,attribute:`condensed-actions`})],k.prototype,`condensedActions`,void 0),t([e({attribute:`animate-title`,converter:r})],k.prototype,`animateTitle`,void 0),t([o()],k.prototype,`shown`,void 0),t([o()],k.prototype,`animated`,void 0),t([o()],k.prototype,`hasSubtitle`,void 0),t([o()],k.prototype,`hasToolbar`,void 0),t([o()],k.prototype,`actionCount`,void 0),t([o()],k.prototype,`overModal`,void 0),t([v(`.panel`)],k.prototype,`panel`,void 0),t([v(`.overlay`)],k.prototype,`overlay`,void 0),t([v(`.scroller`)],k.prototype,`scroller`,void 0),t([v(`.body`)],k.prototype,`body`,void 0),t([v(`.label`)],k.prototype,`labelEl`,void 0),t([v(`.subtitle`)],k.prototype,`subtitleEl`,void 0),t([v(`.title`)],k.prototype,`titleEl`,void 0),t([v(`.actions`)],k.prototype,`actionsEl`,void 0),t([v(`dialog.layer`)],k.prototype,`layerDialog`,void 0),k=t([_(`ui-side-panel`)],k);