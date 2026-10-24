import{Ct as e,D as t,E as n,Ot as r,St as i,jt as a,w as o}from"./theme-switcher-BGAHXRgF.js";import"./notification-KWrCMVMD.js";import{r as s}from"./toaster-CEyFJ2l2.js";var c=class extends t{static{this.styles=a`
        :host {
            position: fixed;
            inset: auto;
            inset-block-start: var(--ui-toaster-offset, 16px);
            inset-inline-end: 16px;
            z-index: 9000;
            display: flex;
            flex-direction: column-reverse;
            gap: var(--ui-space-xs);
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            overflow: visible;
            pointer-events: none;
        }

        :host([data-below-header]) {
            inset-block-start: var(--ui-toaster-offset, 64px);
        }

        :host([placement='bottom-end']) {
            inset-block-start: auto;
            inset-block-end: var(--ui-toaster-offset, 16px);
            flex-direction: column;
        }

        :host(:not(:popover-open)) {
            display: none;
        }

        ::slotted(*) {
            pointer-events: auto;
        }
    `}constructor(){super(),this.placement=`top-end`,this.max=3,this.localize=new o(this),this.onClose=e=>{e.target!==this&&e.target.remove()},this.addEventListener(`ui-close`,this.onClose)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`region`),this.setAttribute(`aria-live`,`polite`),this.setAttribute(`aria-relevant`,`additions`),this.hasAttribute(`popover`)||this.setAttribute(`popover`,`manual`),this.toggleAttribute(`data-below-header`,!!document.querySelector(`ui-header, [data-ui-header]`)),this.lift(!1)}lift(e){if(typeof this.showPopover!=`function`)return;let t=this.matches(`:popover-open`);(!t||e)&&(t&&this.hidePopover(),this.showPopover())}updated(){this.setAttribute(`aria-label`,this.localize.t.common.notifications)}add(e){this.append(e);let t=[...this.children].filter(e=>e.open!==!1);for(let e of t.slice(0,s(t.length,this.max)))e.close(`timeout`);this.lift(l(this))}render(){return r`<slot></slot>`}};n([i({reflect:!0})],c.prototype,`placement`,void 0),n([i({type:Number})],c.prototype,`max`,void 0),c=n([e(`ui-toaster`)],c);function l(e){return[...new Set([document,e.getRootNode()])].some(e=>!!e.querySelector?.(`ui-modal[open], dialog:modal`))}