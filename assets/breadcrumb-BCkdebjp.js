import{At as e,Ct as t,D as n,E as r,Ot as i,St as a,Tt as o,c as s,jt as c,w as l,wt as u,xt as d}from"./theme-switcher-BGAHXRgF.js";import"./overflow-menu-BerTRcGD.js";import{t as f}from"./overflow-Ctnez5Id.js";var p=class extends n{constructor(...e){super(...e),this.href=``,this.current=!1}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}static{this.styles=c`
        :host {
            display: inline-flex;
            align-items: center;
            font-family: var(--ui-font-family);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        :host([data-size='sm']) {
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        /* gone into the trail's overflow menu */
        :host([data-hidden]) {
            display: none;
        }

        /*
         * Carbon: a "/" after every item (the last one too, unless the trail has no-trailing-slash). Drawn
         * by a part, not :host::after, so a page-wide CSS reset can't take its spacing; the 8px after
         * the item is the trail's gap.
         */
        .slash::after {
            content: '/';
            margin-inline-start: var(--ui-space-xs);
            color: var(--ui-ink);
        }

        :host([data-size='sm']) .slash::after {
            margin-inline-start: var(--ui-space-xxs);
        }

        /* Carbon keeps the last item's slash; a design can drop it (--ui-breadcrumb-trailing-slash: none) */
        :host([data-last]) .slash {
            display: var(--ui-breadcrumb-trailing-slash, inline);
        }

        :host([data-last][data-no-trailing-slash]) .slash {
            display: none;
        }

        a {
            color: var(--ui-link);
            text-decoration: none;
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: 1px;
            border-radius: var(--ui-link-focus-radius, 0); /* the ring's corners, as a link's (Kanok: 4px) */
            transition: color var(--ui-duration-fast) var(--ui-easing);
        }

        /* Carbon .breadcrumb .link: one line */
        a,
        .current {
            white-space: nowrap;
        }

        a:visited {
            color: var(--ui-link);
        }

        a:hover,
        a:visited:hover {
            color: var(--ui-link-hover);
            text-decoration: underline;
        }

        a:active {
            color: var(--ui-ink);
        }

        a:focus-visible {
            outline-color: var(--ui-focus);
        }

        .current {
            color: var(--ui-ink);
        }

        @media (forced-colors: active) {
            a:focus-visible {
                outline: 2px solid Highlight;
            }

            :host([current]) a,
            .slash::after {
                color: CanvasText;
            }
        }

    `}render(){return this.current||!this.href?i`<span class="current" part="base" aria-current=${this.current?`page`:o}><slot></slot></span><span class="slash"></span>`:i`<a part="base" href=${this.href} tabindex="0" @click=${s}><slot></slot></a><span class="slash"></span>`}};r([a()],p.prototype,`href`,void 0),r([a({type:Boolean,reflect:!0})],p.prototype,`current`,void 0),p=r([t(`ui-breadcrumb-item`)],p);var m=e`<svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="24" cy="16" r="2"></circle></svg>`,h=class extends n{constructor(...e){super(...e),this.label=``,this.localize=new l(this),this.noTrailingSlash=!1,this.size=`md`,this.overflow=!1,this.overflowLabel=``,this.collapsed=[],this.frame=0,this.schedule=()=>{cancelAnimationFrame(this.frame),this.overflow&&(this.frame=requestAnimationFrame(this.measure))},this.measure=()=>{let e=this.items,t=this.renderRoot.querySelector(`.more`);if(e.length<2||!t)return;let n=this.size===`sm`?4:8,r=t.hidden;t.hidden=!1;let i=e=>{let t=e.style.flexShrink;e.style.flexShrink=`0`;let n=e.getBoundingClientRect().width;return e.style.flexShrink=t,n},a=e.slice(0,-1).map(e=>(delete e.dataset.hidden,i(e)+n)),o=this.clientWidth,s=Math.min(i(e.at(-1)),o/2),c=i(t)+n;t.hidden=r;let l=f({container:o,sizes:a,fixedSizes:[s],offset:c,gap:n,keepFirst:!1}),u=e.slice(0,-1).filter((e,t)=>(e.toggleAttribute(`data-hidden`,t>=l),t>=l));(u.length!==this.collapsed.length||u.some((e,t)=>e!==this.collapsed[t]))&&(this.collapsed=u)},this.onPick=e=>{this.collapsed[Number(e.detail.value)]?.shadowRoot?.querySelector(`a`)?.click()}}static{this.styles=c`
        :host {
            display: block;
            font-family: var(--ui-font-family);
        }

        /* the space after each item (Carbon margin-inline-end), as a gap: a page-wide CSS reset would remove a margin on the items */
        ol {
            display: inline-flex;
            flex-wrap: var(--ui-breadcrumb-wrap, wrap);
            max-inline-size: 100%;
            align-items: center;
            column-gap: var(--ui-space-xs);
            margin: 0;
            padding: 0;
            list-style: none;
        }

        :host([size='sm']) ol {
            column-gap: var(--ui-space-xxs);
        }

        :host([overflow]) ol {
            flex-wrap: nowrap;
        }

        .more {
            display: inline-flex;
            flex: none;
            align-items: center;
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        :host([size='sm']) .more {
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        .more[hidden] {
            display: none;
        }

        .more::after {
            content: '/';
            margin-inline-start: var(--ui-space-xs);
            color: var(--ui-ink);
        }

        :host([size='sm']) .more::after {
            margin-inline-start: var(--ui-space-xxs);
        }

        /* Carbon breadcrumb-item overflow menu: a 16 × 18 link-coloured "…", a 12px line under it on hover / focus */
        ui-overflow-menu::part(trigger) {
            position: relative;
            inline-size: 16px;
            block-size: 18px;
            background-color: transparent;
            box-shadow: none;
            color: var(--ui-link);
        }

        :host([size='sm']) ui-overflow-menu::part(trigger) {
            block-size: 16px;
        }

        ui-overflow-menu::part(trigger):hover {
            color: var(--ui-link-hover);
        }

        ui-overflow-menu::part(trigger):active {
            color: var(--ui-icon-primary);
        }

        ui-overflow-menu::part(trigger):focus-visible {
            outline: 1px solid var(--ui-focus);
            outline-offset: 0;
        }

        ui-overflow-menu::part(trigger)::after {
            content: '';
            position: absolute;
            inset-block-end: 2px;
            inset-inline-start: 0;
            inline-size: 12px;
            block-size: 1px;
            background: var(--ui-focus);
            opacity: 0;
            transition: opacity var(--ui-duration-fast) var(--ui-easing);
        }

        ui-overflow-menu::part(trigger):hover::after {
            background: var(--ui-link-hover);
            opacity: 1;
        }

        ui-overflow-menu::part(trigger):focus-visible::after {
            opacity: 1;
        }

        ui-overflow-menu::part(trigger):active::after {
            background: var(--ui-ink);
        }

        @media (prefers-reduced-motion: reduce) {
            ui-overflow-menu::part(trigger)::after {
                transition: none;
            }
        }

        @media (forced-colors: active) {
            .more::after {
                color: CanvasText;
            }
        }
    `}disconnectedCallback(){super.disconnectedCallback(),this.stopWatching()}updated(e){this.sync(),e.has(`overflow`)&&(this.stopWatching(),this.overflow&&(this.observer=new ResizeObserver(this.schedule),this.observer.observe(this)),this.schedule())}stopWatching(){this.observer?.disconnect(),this.observer=void 0,cancelAnimationFrame(this.frame)}get items(){return[...this.children].filter(e=>e instanceof p)}sync(){let e=this.items;e.forEach((t,n)=>{t.dataset.size=this.size,t.toggleAttribute(`data-last`,n===e.length-1),t.toggleAttribute(`data-no-trailing-slash`,this.noTrailingSlash),t.setAttribute(`role`,`listitem`),this.overflow&&e.length>1&&n===e.length-1?t.slot=`end`:t.slot===`end`&&t.removeAttribute(`slot`),this.overflow||delete t.dataset.hidden}),!this.overflow&&this.collapsed.length&&(this.collapsed=[])}focus(e){this.querySelector(`ui-breadcrumb-item`)?.focus(e)}render(){let e=this.overflow?i`<li class="more" part="overflow" ?hidden=${this.collapsed.length===0}>
                  <ui-overflow-menu size="sm" placement="bottom-start" label=${this.overflowLabel||this.localize.t.common.moreBreadcrumbs} @ui-select=${this.onPick}>
                      ${m}${this.collapsed.map((e,t)=>i`<ui-menu-item label=${e.textContent?.trim()??``} value=${String(t)}></ui-menu-item>`)}
                  </ui-overflow-menu>
              </li>`:o,t=()=>{this.sync(),this.schedule()};return i`<nav part="base" aria-label=${this.label||this.localize.t.common.breadcrumb}>
            <ol part="list" role="list"><slot @slotchange=${t}></slot>${e}<slot name="end" @slotchange=${t}></slot></ol>
        </nav>`}};r([a()],h.prototype,`label`,void 0),r([a({type:Boolean,reflect:!0,attribute:`no-trailing-slash`})],h.prototype,`noTrailingSlash`,void 0),r([a({reflect:!0})],h.prototype,`size`,void 0),r([a({type:Boolean,reflect:!0})],h.prototype,`overflow`,void 0),r([a({attribute:`overflow-label`})],h.prototype,`overflowLabel`,void 0),r([d()],h.prototype,`collapsed`,void 0),h=r([t(`ui-breadcrumb`)],h);export{p as t};