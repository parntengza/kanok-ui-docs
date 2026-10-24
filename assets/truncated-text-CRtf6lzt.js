import{Ct as e,D as t,E as n,O as r,Ot as i,St as a,bt as o,ct as s,jt as c,pt as l,w as u,xt as d}from"./theme-switcher-BGAHXRgF.js";import{t as f}from"./motion-C95bcdt7.js";var p=class extends r(t){constructor(...e){super(...e),this.value=``,this.lines=2,this.type=`tooltip`,this.placement=`top`,this.expandLabel=``,this.collapseLabel=``,this.expanded=!1,this.overflowing=!1,this.closing=!1,this.localize=new u(this),this.contentId=s(`ui-truncated-text`),this.clampedHeight=0}static{this.hostStates=[`overflowing`]}static{this.styles=c`
        :host {
            display: block;
            inline-size: 100%;
        }

        .content {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: var(--_lines);
            text-overflow: clip;
            white-space: normal;
        }

        ui-tooltip {
            display: block;
        }

        .trigger {
            display: block;
            inline-size: 100%;
            padding: 0;
            border: 0;
            background: none;
            color: inherit;
            cursor: default;
            font: inherit;
            letter-spacing: inherit;
            text-align: inherit;
        }

        .toggle {
            padding: 0 2px;
            border: none;
            background-color: transparent;
            color: var(--ui-link);
            cursor: pointer;
            font: inherit;
            letter-spacing: inherit;
            line-height: inherit;
        }

        .trigger:focus-visible,
        .toggle:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
            border-radius: var(--ui-link-focus-radius, 0); /* as a link's ring (Kanok: 4px) */
        }
    `}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>this.measure()),this.resizeObserver.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.animation?.cancel(),this.closing=!1}updated(e){super.updated(e),(e.has(`value`)||e.has(`lines`)||e.has(`type`))&&this.measure(),this.toggleAttribute(`data-overflowing`,this.overflowing)}measure(){let e=this.content;!e||this.expanded||this.closing||this.read(e)}read(e){this.clampedHeight=e.clientHeight,this.overflowing=this.lines>0&&e.scrollHeight-e.clientHeight>1}measureOpen(e){let t=e.style.getPropertyValue(`--_lines`);e.style.setProperty(`--_lines`,String(this.lines)),this.read(e),e.style.setProperty(`--_lines`,t)}duration(){return f(getComputedStyle(this).getPropertyValue(`--ui-duration-moderate`))}async toggle(){let e=this.content;if(!e)return;let t=e.clientHeight,n=!this.expanded;n?this.clampedHeight=t:this.measureOpen(e),this.closing=!n,this.expanded=n,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:n},bubbles:!0,composed:!0})),await this.updateComplete;let r=n?e.scrollHeight:this.clampedHeight,i=this.duration();i>0&&typeof e.animate==`function`&&(this.animation?.cancel(),this.animation=e.animate([{maxBlockSize:`${t}px`},{maxBlockSize:`${r}px`}],{duration:i,easing:`cubic-bezier(0.2, 0, 0.38, 0.9)`}),await new Promise(e=>setTimeout(e,i))),this.closing=!1}renderContent(){let e=this.lines>0&&!this.expanded&&!this.closing?String(this.lines):`none`;return i`<div id=${this.contentId} class="content" part="content" style=${l({"--_lines":e})}>${this.value}</div>`}render(){if(this.type===`tooltip`)return this.overflowing?i`<ui-tooltip text=${this.value} as-label placement=${this.placement}><button type="button" class="trigger" part="trigger">${this.renderContent()}</button></ui-tooltip>`:this.renderContent();let{viewMore:e,viewLess:t}=this.localize.t.common,n=this.expanded?this.collapseLabel||t:this.expandLabel||e,r=i`<button type="button" class="toggle" part="toggle" aria-expanded=${this.expanded?`true`:`false`} aria-controls=${this.contentId} @click=${this.toggle}>${n}</button>`;return i`${this.renderContent()}${this.overflowing||this.expanded?r:``}`}};n([a()],p.prototype,`value`,void 0),n([a({type:Number})],p.prototype,`lines`,void 0),n([a({reflect:!0})],p.prototype,`type`,void 0),n([a({reflect:!0})],p.prototype,`placement`,void 0),n([a({attribute:`expand-label`})],p.prototype,`expandLabel`,void 0),n([a({attribute:`collapse-label`})],p.prototype,`collapseLabel`,void 0),n([a({type:Boolean,reflect:!0})],p.prototype,`expanded`,void 0),n([d()],p.prototype,`overflowing`,void 0),n([d()],p.prototype,`closing`,void 0),n([o(`.content`)],p.prototype,`content`,void 0),p=n([e(`ui-truncated-text`)],p);