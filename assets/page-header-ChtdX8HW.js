import{Ct as e,D as t,Dt as n,Et as r,H as i,Mt as a,O as o,St as s,T as c,_t as l,at as u,gt as d,kt as f,vt as p,wt as m,xt as h,yt as g}from"./theme-switcher-BZXGbHfR.js";import"./button-DGUm7Yxm.js";import"./icon-button-D4pzZab2.js";import{a as _,i as v,n as y,o as b,r as x}from"./live-DHRqgQLr.js";import"./tag-CInHDJH1.js";import"./popover-CTlBEkAq.js";import{t as S}from"./events-IQD1_DyD.js";import"./overflow-menu-CG3cmyeS.js";import{t as C}from"./breadcrumb-DPKzPU-9.js";import{t as w}from"./overflow-Ctnez5Id.js";import{n as T,t as E}from"./static-html-D4l71AdL.js";import"./truncated-text-QqwoBJFN.js";function D(e){let t=e.style.flexShrink;e.style.flexShrink=`0`;let n=e.getBoundingClientRect().width;return e.style.flexShrink=t,n}var O=class extends o{constructor(...e){super(...e),this.frame=0,this.schedule=()=>{cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(()=>this.measure())}}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(this.schedule),this.observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),cancelAnimationFrame(this.frame)}};function k(e,t){return e.getAttribute(`label`)||e.textContent?.trim()||`Action ${t+1}`}var A=class extends O{constructor(...e){super(...e),this.overflowLabel=``,this.collapsed=[],this.localize=new c(this),this.onPick=e=>{this.collapsed[Number(e.detail.value)]?.click()}}static{this.styles=a`
        :host {
            display: flex;
            flex: 1 1 auto;
            align-items: center;
            min-inline-size: 0;
            max-inline-size: 100%;
        }

        ::slotted(*) {
            flex-shrink: 0;
        }

        ::slotted([data-hidden]) {
            display: none !important;
        }

        /* Carbon: the buttons from the start, the menu at the end */
        ui-overflow-menu {
            flex-shrink: 0;
            margin-inline-start: auto;
        }

        ui-overflow-menu[hidden] {
            display: none;
        }
    `}measure(){let e=[...this.children].filter(e=>e instanceof HTMLElement);for(let t of e)delete t.dataset.hidden;let t=e.map(D),n=w({container:this.clientWidth,sizes:t,offset:48,keepFirst:!1}),r=e.filter((e,t)=>(e.toggleAttribute(`data-hidden`,t>=n),t>=n));(r.length!==this.collapsed.length||r.some((e,t)=>e!==this.collapsed[t]))&&(this.collapsed=r)}render(){return f`<slot @slotchange=${this.schedule}></slot>
            <ui-overflow-menu part="overflow" size="md" placement="bottom-end" label=${this.overflowLabel||this.localize.t.common.moreActions} ?hidden=${this.collapsed.length===0} @ui-select=${this.onPick}>
                ${this.collapsed.map((e,t)=>f`<ui-menu-item label=${k(e,t)} value=${String(t)}></ui-menu-item>`)}
            </ui-overflow-menu>`}};t([e({attribute:`overflow-label`})],A.prototype,`overflowLabel`,void 0),t([s()],A.prototype,`collapsed`,void 0),A=t([m(`ui-page-header-actions`)],A);var j=new Set([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]),M=(e,t)=>E(j.has(e)?e:t);function N(e){for(let t=e.parentElement;t&&t!==document.body&&t!==document.documentElement;t=t.parentElement)if(/(auto|scroll)/.test(getComputedStyle(t).overflowY))return t;return document.scrollingElement??document.documentElement}var P=a`
    .row {
        --_m: 0px;

        box-sizing: border-box;
        inline-size: 100%;
        max-inline-size: 1584px;
        margin-inline: auto;
        padding-inline: calc(var(--_m) + 16px);
    }

    @media (min-width: 42rem) {
        .row {
            --_m: 16px;
        }
    }

    @media (min-width: 99rem) {
        .row {
            --_m: 24px;
        }
    }

    .row.narrow {
        padding-inline-start: var(--_m);
    }

    .row.full-width {
        max-inline-size: none;
    }
`,F=class extends o{constructor(...e){super(...e),this.header=null,this.onState=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.header=this.closest(`ui-page-header`),this.header?.addEventListener(`ui-page-header-state`,this.onState)}disconnectedCallback(){super.disconnectedCallback(),this.header?.removeEventListener(`ui-page-header-state`,this.onState),this.header=null}get state(){return this.header?.state??{fullyCollapsed:!1,titleClipped:!1,contentActionsClipped:!1,withContent:!1,fullWidthGrid:!1,narrowGrid:!1}}get rowClasses(){return{row:!0,narrow:this.state.narrowGrid,"full-width":this.state.fullWidthGrid}}},I=class extends F{constructor(...e){super(...e),this.border=!0,this.pageActionsFlush=!1,this.contentActionsFlush=!1,this.actionsAriaLabel=``,this.localize=new c(this)}static{this.styles=[P,a`
            :host {
                position: sticky;
                z-index: 2;
                inset-block-start: var(--ui-page-header-bar-top, 0px);
                display: block;
                box-sizing: border-box;
                block-size: 40px;
                background-color: var(--ui-layer-1);
            }

            :host([border]) {
                border-block-end: 1px solid var(--ui-border-subtle-2);
            }

            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                block-size: 100%;
                gap: var(--ui-space-xs);
                min-inline-size: 0;
            }

            .trail {
                display: flex;
                flex: 1 1 75%;
                align-items: center;
                min-inline-size: 0;
            }

            ::slotted([slot='icon']) {
                flex: none;
                margin-inline-end: var(--ui-space-xs);
            }

            /* one line: the title crumb shrinks with an ellipsis instead of wrapping */
            ::slotted(ui-breadcrumb) {
                --ui-breadcrumb-wrap: nowrap;

                flex: 1 1 0%;
                min-inline-size: 0;
            }

            .actions {
                display: flex;
                flex: 0 1 25%;
                align-items: center;
                justify-content: flex-end;
                gap: var(--ui-space-xs);
                max-inline-size: 25%;
                min-inline-size: 0;
            }

            @media (min-width: 42rem) {
                .trail {
                    flex: 1 1 auto;
                    max-inline-size: 60%;
                }

                .actions {
                    flex: 0 0 auto;
                    max-inline-size: none;
                }

                :host(:not([content-actions-flush])) ::slotted([slot='content-actions']) {
                    margin-inline-end: var(--ui-space-sm);
                }
            }

            /* side by side, as Carbon's actions set; a <ui-page-header-actions> in it shrinks into its overflow menu */
            .page-actions {
                display: flex;
                flex: 1 1 auto;
                align-items: center;
                justify-content: flex-end;
                min-inline-size: 0;
            }

            .content-actions {
                display: none;
                min-inline-size: 0;
                overflow: hidden;
            }

            @media (min-width: 42rem) {
                .content-actions {
                    display: flex;
                    visibility: hidden;
                    opacity: 0;
                }

                .content-actions.show {
                    visibility: visible;
                    opacity: 1;
                    transition: opacity var(--ui-duration-moderate-01) var(--ui-easing);
                }
            }

            :host([page-actions-flush]) .row {
                padding-inline-end: 0;
            }
        `]}render(){return f`<div class=${d(this.rowClasses)}>
            <div class="container">
                <div class="trail"><slot name="icon"></slot><slot></slot></div>
                <div class="actions" role="toolbar" aria-label=${this.actionsAriaLabel||this.localize.t.common.pageHeaderActions}>
                    <div class=${d({"content-actions":!0,show:this.state.contentActionsClipped})}><slot name="content-actions"></slot></div>
                    <div class="page-actions"><slot name="page-actions"></slot></div>
                </div>
            </div>
        </div>`}};t([e({reflect:!0,converter:i})],I.prototype,`border`,void 0),t([e({type:Boolean,reflect:!0,attribute:`page-actions-flush`})],I.prototype,`pageActionsFlush`,void 0),t([e({type:Boolean,reflect:!0,attribute:`content-actions-flush`})],I.prototype,`contentActionsFlush`,void 0),t([e({attribute:`actions-aria-label`})],I.prototype,`actionsAriaLabel`,void 0),I=t([m(`ui-page-header-breadcrumb`)],I);var L=class extends o{constructor(...e){super(...e),this.subtitle=``,this.subtitleLevel=`h2`}static{this.styles=a`
        :host {
            display: block;
            max-inline-size: 640px;
            padding-block-end: var(--ui-space-lg);
            font: var(--ui-font-body-01);
            letter-spacing: var(--ui-tracking-body);
        }

        .subtitle {
            margin: 0 0 var(--ui-space-xs);
            font: var(--ui-font-heading-03);
            letter-spacing: normal;
        }
    `}render(){let e=M(this.subtitleLevel,`h2`),t=this.subtitle?T`<${e} class="subtitle" part="subtitle">${this.subtitle}</${e}>`:r;return f`${t}<slot></slot>`}};t([e()],L.prototype,`subtitle`,void 0),t([e({attribute:`subtitle-level`})],L.prototype,`subtitleLevel`,void 0),L=t([m(`ui-page-header-content-text`)],L);var R=class extends F{constructor(...e){super(...e),this.heading=``,this.headingLevel=`h1`,this.hasContextualActions=!1,this.hasTitleSlot=!1,this.onTitleSlotChange=e=>{this.hasTitleSlot=e.target.assignedNodes().length>0}}static{this.styles=[P,a`
            :host {
                display: block;
                padding-block-start: var(--ui-space-xxl);
            }

            .title-wrapper {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-md);
                min-block-size: 40px;
                margin-block-end: var(--ui-space-md);
            }

            @media (min-width: 42rem) {
                .title-wrapper {
                    display: grid;
                    grid-template-columns: auto minmax(auto, auto);
                }
            }

            .start {
                display: flex;
                flex-wrap: wrap;
                gap: var(--ui-space-md);
            }

            .title-container {
                display: flex;
            }

            ::slotted([slot='icon']) {
                flex: none;
                margin-inline-end: var(--ui-space-md);
            }

            .title {
                max-inline-size: 640px;
                margin: 0;
                font: var(--ui-font-heading-04);
            }

            ::slotted([slot='contextual-actions']) {
                display: flex;
                align-items: center;
            }

            .page-actions {
                display: flex;
                justify-self: end;
                transition: opacity var(--ui-duration-moderate-02) var(--ui-easing);
            }

            .page-actions.clipped {
                visibility: hidden;
                opacity: 0;
            }

            @media (max-width: 41.98rem) {
                .page-actions {
                    justify-content: start;
                }
            }
        `]}renderTitle(){let e=M(this.headingLevel,`h1`),t=this.hasContextualActions?1:2,n=this.hasTitleSlot?r:f`<ui-truncated-text value=${this.heading} lines=${t} placement="bottom"></ui-truncated-text>`;return T`<${e} class="title" part="title">${n}<slot name="title" @slotchange=${this.onTitleSlotChange}></slot></${e}>`}render(){return f`<div class=${d(this.rowClasses)}>
            <div class="title-wrapper">
                <div class="start">
                    <div class="title-container"><slot name="icon"></slot>${this.renderTitle()}</div>
                    <slot name="contextual-actions" @slotchange=${e=>this.hasContextualActions=e.target.assignedNodes().length>0}></slot>
                </div>
                <div class=${d({"page-actions":!0,clipped:this.state.contentActionsClipped})}><slot name="page-actions"></slot></div>
            </div>
            <slot></slot>
        </div>`}};t([e()],R.prototype,`heading`,void 0),t([e({attribute:`heading-level`})],R.prototype,`headingLevel`,void 0),t([s()],R.prototype,`hasContextualActions`,void 0),t([s()],R.prototype,`hasTitleSlot`,void 0),t([h(`.title`)],R.prototype,`titleElement`,void 0),R=t([m(`ui-page-header-content`)],R);var z=class extends o{constructor(...e){super(...e),this.objectFit=`cover`}static{this.styles=a`
        :host {
            display: block;
            overflow: hidden;
            aspect-ratio: 3 / 2;
        }

        @media (min-width: 66rem) {
            :host {
                aspect-ratio: 2 / 1;
            }
        }

        ::slotted(img),
        ::slotted(picture) {
            display: block;
            inline-size: 100%;
            block-size: 100%;
            object-fit: var(--_fit, cover);
            object-position: center;
        }
    `}render(){return f`<slot style="--_fit: ${this.objectFit===`contain`?`contain`:`cover`}"></slot>`}};t([e({reflect:!0,attribute:`object-fit`})],z.prototype,`objectFit`,void 0),z=t([m(`ui-page-header-hero-image`)],z);var B=f`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 5 13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z" /></svg>`,V=class extends F{constructor(...e){super(...e),this.collapseText=``,this.expandText=``,this.localize=new c(this)}static{this.styles=a`
        :host {
            display: inline-flex;
        }

        /* Carbon .cds--page-header--scroller-button-icon: $transition-base (250ms, no token) with the browser's ease */
        svg {
            transition: transform 250ms;
        }

        .collapsed svg {
            transform: rotate(180deg);
        }

        @media (prefers-reduced-motion: reduce) {
            svg {
                transition: none;
            }
        }
    `}onClick(){let e=this.header?.querySelector(`ui-page-header-content`);e&&N(e).scrollTo({top:this.state.fullyCollapsed?0:e.offsetHeight,behavior:`smooth`})}render(){let e=this.state.fullyCollapsed,{collapse:t,expand:n}=this.localize.t.common,r=e?this.expandText||n:this.collapseText||t;return f`<ui-icon-button class=${d({collapsed:e})} kind="ghost" size="md" label=${r} tooltip-placement="top" @click=${this.onClick}>${B}</ui-icon-button>`}};t([e({attribute:`collapse-text`})],V.prototype,`collapseText`,void 0),t([e({attribute:`expand-text`})],V.prototype,`expandText`,void 0),V=t([m(`ui-page-header-scroller`)],V);var H=class extends F{constructor(...e){super(...e),this.disableStickyTabBar=!1}static{this.styles=[P,a`
            :host {
                position: sticky;
                z-index: 1;
                inset-block-start: var(--ui-page-header-bar-top, 0px);
                display: block;
                background-color: var(--ui-layer-1);
            }

            :host([disable-sticky-tab-bar]) {
                position: static;
            }

            .bar {
                display: flex;
                align-items: center;
            }

            .row {
                padding-inline: var(--_m);
            }

            .tablist {
                display: flex;
                flex: 1;
                align-items: center;
                min-inline-size: 0;
            }

            ::slotted(:not([slot])) {
                flex: 1 1 auto;
                min-inline-size: 0;
            }

            ::slotted([slot='tags']) {
                display: inline-flex;
                align-items: center;
                justify-content: flex-end;
                inline-size: 40%;
                min-inline-size: 0;
                margin-inline-start: auto;
            }
        `]}updated(e){super.updated(e),e.has(`disableStickyTabBar`)&&this.header?.setStatic(this.disableStickyTabBar)}render(){return f`<div class="bar">
            <div class=${d(this.rowClasses)}><div class="tablist"><slot></slot><slot name="tags"></slot></div></div>
            <slot name="scroller"></slot>
        </div>`}};t([e({type:Boolean,reflect:!0,attribute:`disable-sticky-tab-bar`})],H.prototype,`disableStickyTabBar`,void 0),H=t([m(`ui-page-header-tabs`)],H);var U=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},W=l(class extends p{constructor(e){if(super(e),e.type!==g.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,r,i]){let a=y(e),{values:o,keys:s}=this.dt(t,r,i);if(!Array.isArray(a))return this.ut=s,o;let c=this.ut??=[],l=[],u,d,f=0,p=a.length-1,m=0,h=o.length-1;for(;f<=p&&m<=h;)if(a[f]===null)f++;else if(a[p]===null)p--;else if(c[f]===s[m])l[m]=_(a[f],o[m]),f++,m++;else if(c[p]===s[h])l[h]=_(a[p],o[h]),p--,h--;else if(c[f]===s[h])l[h]=_(a[f],o[h]),b(e,l[h+1],a[f]),f++,h--;else if(c[p]===s[m])l[m]=_(a[p],o[m]),b(e,a[f],a[p]),p--,m++;else if(u===void 0&&(u=U(s,m,h),d=U(c,f,p)),u.has(c[f])){if(u.has(c[p])){let t=d.get(s[m]),n=t===void 0?null:a[t];if(n===null){let t=b(e,a[f]);_(t,o[m]),l[m]=t}else l[m]=_(n,o[m]),b(e,a[f],n),a[t]=null;m++}else x(a[p]),p--}else x(a[f]),f++;for(;m<=h;){let t=b(e,l[h+1]);_(t,o[m]),l[m++]=t}for(;f<=p;){let e=a[f++];e!==null&&x(e)}return this.ut=s,v(e,l),n}}),G=10,K=class extends O{constructor(...e){super(...e),this.tags=[],this.shown=1/0,this.popoverOpen=!1,this.modalOpen=!1,this.search=``,this.localize=new c(this),this.openModal=()=>{this.popoverOpen=!1,this.search=``,this.modalOpen=!0}}static{this.styles=[u,a`
            :host {
                display: flex;
                justify-content: flex-end;
                min-inline-size: 0;
                inline-size: 100%;
            }

            .tags {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: var(--ui-space-xs);
                inline-size: 100%;
                min-inline-size: 0;
                white-space: nowrap;
            }

            .tags > ui-tag {
                flex-shrink: 0;
            }

            [data-hidden],
            .more[hidden] {
                display: none;
            }

            .more {
                flex-shrink: 0;
            }

            /* Carbon: the hidden tags one under the other, 4px apart, 16px in */
            .list {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-xxs);
                padding: var(--ui-space-md);
            }

            /* Carbon: each hidden tag as wide as the popover, its text centred in label-02 (14px) */
            .list > ui-tag {
                display: flex;
                margin: 0;
            }

            .list > ui-tag::part(base) {
                justify-content: center;
                inline-size: 100%;
                max-inline-size: none;
                font: var(--ui-font-body-sm);
                line-height: 18px; /* label-02: 14 × 1.28572 */
                letter-spacing: var(--ui-tracking-body);
            }

            /* on the high-contrast box: the inverse link colour */
            .view-all {
                --ui-link: var(--ui-link-inverse);
                --ui-blue-60: var(--ui-link-inverse); /* the ghost button's hover text */

                display: block;
                margin-block-start: var(--ui-space-xs);
            }

            .search {
                display: block;
                margin-block-end: var(--ui-space-md);
            }

            .all {
                display: flex;
                flex-wrap: wrap;
                gap: var(--ui-space-xxs) var(--ui-space-xs);
            }
        `]}updated(e){e.has(`tags`)&&this.schedule()}get hiddenTags(){return this.tags.slice(this.shown)}measure(){let e=this.renderRoot.querySelector(`.tags`),t=this.renderRoot.querySelector(`.more`);if(!e||!t)return;let n=[...e.querySelectorAll(`:scope > ui-tag`)];for(let e of n)delete e.dataset.hidden;let r=t.hidden;t.hidden=!1;let i=n.map(e=>D(e)+8),a=D(t)+8;t.hidden=r;let o=w({container:e.clientWidth,sizes:i,offset:a,gap:8,keepFirst:!1});n.forEach((e,t)=>{e.toggleAttribute(`data-hidden`,t>=o)}),this.shown=o}dismiss(e){let t=this.tags.indexOf(e);t<0||(this.tags=this.tags.filter(t=>t!==e),this.hiddenTags.length===0&&(this.popoverOpen=!1),this.dispatchEvent(new CustomEvent(`ui-tag-dismiss`,{detail:{tag:e,index:t},bubbles:!0,composed:!0})))}renderTag(e){return f`<ui-tag type=${e.type??`gray`} size=${e.size??`md`} ?dismissible=${!!e.dismissible} @ui-dismiss=${()=>this.dismiss(e)}>${e.text}</ui-tag>`}renderPopover(e,t){return f`<ui-popover
            class="more"
            part="popover"
            high-contrast
            auto-close
            placement="bottom-end"
            ?hidden=${e.length===0}
            ?open=${this.popoverOpen}
            @ui-toggle=${e=>{S(e)&&(this.popoverOpen=e.detail.open)}}
        >
            <ui-tag slot="trigger" part="more" operational size=${this.tags[0]?.size??`md`} label=${t} .expanded=${this.popoverOpen} @click=${()=>this.popoverOpen=!this.popoverOpen}>+${e.length}</ui-tag>
            <div class="list">
                ${e.slice(0,G).map(e=>this.renderTag(e))}
                ${e.length>G?f`<ui-button class="view-all" kind="ghost" size="sm" @click=${this.openModal}>${this.localize.t.common.viewAllTags}</ui-button>`:r}
            </div>
        </ui-popover>`}renderModal(){let e=this.localize.t.common,t=this.search.trim().toLowerCase(),n=this.tags.filter(e=>e.text.toLowerCase().includes(t));return f`<ui-modal part="modal" size="sm" heading=${e.allTags} ?open=${this.modalOpen} @ui-close=${e=>{S(e)&&(this.modalOpen=!1)}}>
            <ui-search class="search" size="lg" label=${e.searchAllTags} placeholder=${e.searchAllTags} .value=${this.search} @input=${e=>this.search=e.target.value}></ui-search>
            <div class="all">${W(n,e=>e,e=>this.renderTag(e))}</div>
        </ui-modal>`}render(){let e=this.hiddenTags,t=this.localize.t.common.moreTags.replace(`{count}`,String(e.length));return f`<div class="tags">
                ${W(this.tags,e=>e,e=>this.renderTag(e))} ${this.renderPopover(e,t)}
                <span class="sr-only" role="status">${e.length?t:``}</span>
            </div>
            ${this.tags.length>G?this.renderModal():r}`}};t([e({type:Array})],K.prototype,`tags`,void 0),t([s()],K.prototype,`shown`,void 0),t([s()],K.prototype,`popoverOpen`,void 0),t([s()],K.prototype,`modalOpen`,void 0),t([s()],K.prototype,`search`,void 0),K=t([m(`ui-page-header-tags`)],K);var q=class extends C{constructor(...e){super(...e),this.header=null,this.sync=()=>{let e=this.header?.state,t=!e?.withContent||e.titleClipped;this.toggleAttribute(`data-show`,t),this.inert=!t,t?this.removeAttribute(`aria-hidden`):this.setAttribute(`aria-hidden`,`true`)}}static{this.styles=[C.styles,a`
            :host {
                opacity: 0;
                transform: translateY(16px);
                transition:
                    transform var(--ui-duration-moderate-01) var(--ui-easing),
                    opacity var(--ui-duration-moderate-01) var(--ui-easing);
            }

            :host([data-show]) {
                opacity: 1;
                transform: translateY(0);
            }

            @media (prefers-reduced-motion: reduce) {
                :host {
                    transform: none;
                }
            }

            .slash {
                display: none;
            }

            :host {
                flex: 0 1 auto;
                min-inline-size: 0;
            }

            .current {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        `]}connectedCallback(){this.current=!0,super.connectedCallback(),this.header=this.closest(`ui-page-header`),this.header?.addEventListener(`ui-page-header-state`,this.sync),this.sync()}disconnectedCallback(){super.disconnectedCallback(),this.header?.removeEventListener(`ui-page-header-state`,this.sync),this.header=null}};q=t([m(`ui-page-header-title-breadcrumb`)],q);function J(e){let t=N(e),n=e.getBoundingClientRect().top,r=t===document.scrollingElement?0:t.getBoundingClientRect().top;return Math.max(n-r,0)}var Y=class extends o{constructor(...e){super(...e),this.fullWidthGrid=!1,this.narrowGrid=!1,this.state={fullyCollapsed:!1,titleClipped:!1,contentActionsClipped:!1,withContent:!1,fullWidthGrid:!1,narrowGrid:!1},this.observers=[]}static{this.styles=a`
        :host {
            position: sticky;
            z-index: 1;
            inset-block-start: var(--ui-page-header-top, 0px);
            display: block;
            background-color: var(--ui-layer-1);
            border-block-end: 1px solid var(--ui-border-subtle-2);
        }

        /* Carbon --disable-sticky-tab-bar: the header scrolls away; the bar is fixed at the top, the padding keeping its room */
        :host([data-static]) {
            position: static;
            padding-block-start: 40px;
        }

        :host([data-static]) ::slotted(ui-page-header-breadcrumb) {
            position: fixed;
            inset-block-start: 0;
            inset-inline: 0;
        }
    `}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>this.measure()),this.resizeObserver.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.disconnectObservers()}updated(e){super.updated(e),(e.has(`fullWidthGrid`)||e.has(`narrowGrid`))&&this.setState({fullWidthGrid:this.fullWidthGrid,narrowGrid:this.narrowGrid})}setState(e){Object.entries(e).some(([e,t])=>this.state[e]!==t)&&(this.state={...this.state,...e},this.dispatchEvent(new Event(`ui-page-header-state`)))}setStatic(e){this.toggleAttribute(`data-static`,e)}disconnectObservers(){for(let e of this.observers)e.disconnect();this.observers=[]}measure(){let e=this.querySelector(`ui-page-header-content`),t=J(this),n=e?.offsetHeight??0;if(this.style.setProperty(`--ui-page-header-top`,`${(Math.round(n)-t)*-1}px`),this.style.setProperty(`--ui-page-header-bar-top`,`${t}px`),this.setState({withContent:!!e}),this.disconnectObservers(),!e||typeof IntersectionObserver>`u`)return;let r=N(this),i=r===document.scrollingElement?null:r,a=(e,n)=>{if(!e)return;let r=new IntersectionObserver(e=>e.forEach(e=>{this.setState({[n]:!e.isIntersecting})}),{root:i,rootMargin:`${(t+40+1)*-1}px 0px 0px 0px`});r.observe(e),this.observers.push(r)};a(e,`fullyCollapsed`),a(e.shadowRoot?.querySelector(`.title`),`titleClipped`),a(e.shadowRoot?.querySelector(`.page-actions`),`contentActionsClipped`)}render(){return f`<slot></slot>`}};t([e({type:Boolean,reflect:!0,attribute:`full-width-grid`})],Y.prototype,`fullWidthGrid`,void 0),t([e({type:Boolean,reflect:!0,attribute:`narrow-grid`})],Y.prototype,`narrowGrid`,void 0),Y=t([m(`ui-page-header`)],Y);