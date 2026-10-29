import{Ct as e,D as t,Et as n,Mt as r,O as i,St as a,T as o,U as s,at as c,ht as l,kt as u,l as d,lt as f,v as p,wt as m}from"./theme-switcher-BZXGbHfR.js";import{t as h}from"./typeahead-CDCzrGcR.js";import{a as g,c as _,i as v,l as y,n as b,o as x,r as S,s as C,t as w}from"./tree-h2xfYOIE.js";var T=[`aria-label`,`aria-labelledby`,`aria-describedby`],E=u`<svg class="caret" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>`,D=u`<svg class="spinner" viewBox="0 0 100 100" aria-hidden="true"><circle class="track" cx="50%" cy="50%" r="42" /><circle class="stroke" cx="50%" cy="50%" r="42" /></svg>`,O=class extends i{constructor(...e){super(...e),this.label=``,this.value=``,this.expanded=!1,this.disabled=!1,this.href=``,this.lazy=!1,this.loading=!1,this.depth=0,this.hasChildren=!1,this.ids=f(`ui-tree-node`),this.slots=new p(this),this.localize=new o(this),this.namedByParts=!1}static{this.styles=[c,r`
        /* --ui-tree-*: a design can drop the fill, round the rows and mark the active one as the side nav's current page */
        :host {
            display: block;
            background-color: var(--ui-tree-background, var(--ui-layer-1));
            color: var(--ui-ink-muted);
            outline: none;
            cursor: pointer;
        }

        /*
         * The node's indent (--_indent) is drawn by its parts, not :host padding, so a page-wide CSS reset
         * can't remove it. The row bleeds back to the tree's edge so hover / selection span the full width (Carbon offset).
         */
        .label {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            box-sizing: border-box;
            min-block-size: 32px;
            margin-inline-start: calc(var(--_indent, 16px) - var(--_offset, 16px));
            border-radius: var(--ui-tree-row-radius, 0);
            padding-inline-start: var(--_offset, 16px);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        :host([data-leaf]) .label {
            padding-block: 7px;
        }

        :host([data-size='xs']) .label {
            min-block-size: 24px;
        }

        :host([data-size='xs'][data-leaf]) .label {
            padding-block: 0;
        }

        .label:hover {
            background-color: var(--ui-layer-hover-1);
            color: var(--ui-ink);
        }

        :host(:focus) > .label {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* focus a click brought, not the keyboard: a design can drop the ring there (--ui-tree-pointer-outline) */
        :host(:focus:not(:focus-visible)) > .label {
            outline-color: var(--ui-tree-pointer-outline, var(--ui-focus));
        }

        :host([data-selected]) > .label {
            background-color: var(--ui-tree-selected, var(--ui-layer-selected-1));
            color: var(--ui-ink);
        }

        :host([data-selected]) > .label:hover {
            background-color: var(--ui-tree-selected-hover, var(--ui-layer-selected-hover-1, var(--ui-layer-active-1)));
        }

        :host([data-active]) > .label::before {
            content: '';
            position: absolute;
            inset-block-start: var(--ui-tree-mark-inset, 0px);
            inset-inline-start: 0;
            block-size: calc(100% - 2 * var(--ui-tree-mark-inset, 0px));
            inline-size: var(--ui-tree-mark-width, 4px);
            border-radius: var(--ui-tree-mark-radius, 0);
            background-color: var(--ui-tree-mark, var(--ui-interactive, var(--ui-primary)));
        }

        :host([disabled]),
        :host([disabled]) .label:hover {
            background-color: var(--ui-tree-background, var(--ui-field-1, var(--ui-layer-1)));
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        :host([disabled]:focus) > .label {
            outline: none;
        }

        .toggle {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            inline-size: 24px;
            block-size: 24px;
            margin-inline: -4px 4px;
            padding: 0 0 0 4px;
            border: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            outline: none;
        }

        .caret {
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
            transform: rotate(-90deg);
            transition: all var(--ui-duration-moderate) var(--ui-easing); /* Carbon toggle-icon: the turn and the hover fill, fast-02 */
        }

        :host([expanded]) .caret {
            transform: rotate(0);
        }

        .spinner {
            width: 16px;
            height: 16px;
            animation: rotate 690ms linear infinite;
        }

        /* Carbon's small Loading: r 42 in a 100 box, a 276.46 dash (the r 44 circumference), a 48 % arc */
        .spinner circle {
            fill: none;
            stroke-dasharray: 276.46 276.46;
            stroke-linecap: butt;
            stroke-width: 16;
        }

        .spinner .track {
            stroke: var(--ui-layer-active-1);
            stroke-dashoffset: -22;
        }

        .spinner .stroke {
            stroke: var(--ui-interactive);
            stroke-dashoffset: 143.76;
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 0s;
            }
        }

        .label:hover .caret,
        :host([data-selected]) > .label .caret,
        .label:hover ::slotted([slot='icon']),
        :host([data-selected]) > .label ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        :host([disabled]) .caret,
        :host([disabled]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-disabled);
        }

        .details {
            display: flex;
            align-items: center;
            min-inline-size: 0;
        }

        ::slotted([slot='icon']) {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            margin-inline: var(--ui-space-xs);
            fill: var(--ui-icon-secondary);
        }

        .toggle + .details ::slotted([slot='icon']) {
            margin-inline-start: var(--ui-space-xxs);
        }

        /* beyond Carbon: the end content (slot end) stays whole and end-aligned; the label takes the rest and truncates */
        .end {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            margin-inline-start: auto;
            padding-inline: var(--ui-space-xs) var(--ui-space-md);
        }

        .text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        a.text {
            color: inherit;
            text-decoration: none;
        }

        .children {
            margin: 0;
            margin-inline-start: var(--_indent, 16px);
            padding: 0;
            list-style: none;
        }

        .children[hidden] {
            display: none;
        }

        @media (forced-colors: active) {
            :host([data-selected]) > .label {
                outline: 1px solid Highlight;
            }

            :host([data-active]) > .label::before {
                inline-size: 4px; /* shown here even where a design hides it */
                background-color: Highlight;
            }
        }
    `]}get isBranch(){return this.lazy||this.childTreeNodes.length>0}get treeValue(){return this.value||this.label||this.labelText}get labelText(){let e=this.slotted(`label`);return e.length?e.map(e=>e.textContent??``).join(``).trim():this.label}slotted(e){return typeof this.querySelectorAll==`function`?[...this.querySelectorAll(`:scope > [slot="${e}"]`)]:[]}get childTreeNodes(){return typeof this.querySelectorAll==`function`?[...this.querySelectorAll(`:scope > ui-tree-node`)]:[]}get parentTreeNode(){return this.parentElement?.closest?.(`ui-tree-node`)??null}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`treeitem`),this.hasAttribute(`tabindex`)||(this.tabIndex=-1)}willUpdate(e){this.hasChildren=this.childTreeNodes.length>0,this.hasChildren&&(this.lazy||this.loading)?(this.lazy=!1,this.loading=!1):e.get(`loading`)===!0&&!this.loading&&this.lazy?this.expanded=!1:e.get(`lazy`)===!0&&!this.hasChildren&&(this.loading=!1,this.expanded=!1)}get branch(){return this.hasChildren||this.lazy}updated(e){let t=this.slots.has(`icon`),n=this.branch;this.toggleAttribute(`data-leaf`,!n),this.toggleAttribute(`data-icon`,t),this.style.setProperty(`--_indent`,`${g(n,t)}px`),this.style.setProperty(`--_offset`,`${x(this.depth,n,t)}px`),n?this.setAttribute(`aria-expanded`,this.expanded?`true`:`false`):this.removeAttribute(`aria-expanded`),this.loading?this.setAttribute(`aria-busy`,`true`):this.removeAttribute(`aria-busy`),this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`),this.syncName(),e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded,value:this.treeValue},bubbles:!0,composed:!0})),e.has(`expanded`)&&this.expanded&&this.lazy&&!this.hasChildren&&!this.loading&&(this.loading=!0,this.dispatchEvent(new CustomEvent(`ui-lazy-load`,{detail:{value:this.treeValue},bubbles:!0,composed:!0})))}syncName(){if(!this.namedByParts&&(this.hasAttribute(`aria-label`)||this.hasAttribute(`aria-labelledby`)))return;let e=this.slotted(`end`);if(!e.length){if(this.namedByParts)for(let e of T)this.removeAttribute(e);this.namedByParts=!1;return}let t=this.slotted(`label`);t.length?(this.setAttribute(`aria-labelledby`,this.idsOf(t,`label`)),this.removeAttribute(`aria-label`)):(this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-labelledby`)),this.setAttribute(`aria-describedby`,this.idsOf(e,`end`)),this.namedByParts=!0}idsOf(e,t){return e.map((e,n)=>(e.id||=`${this.ids}-${t}-${n}`,e.id)).join(` `)}toggle(e=!this.expanded){this.isBranch&&!this.disabled&&(this.expanded=e)}onChildrenChange(){this.requestUpdate(),this.closest(`ui-tree-view`)?.requestUpdate()}onToggleClick(e){e.stopPropagation(),this.toggle()}render(){let e=u`<slot name="label">${this.label}</slot>`,t=this.href&&!this.disabled?u`<a class="text" href=${this.href} tabindex="-1" @click=${d}>${e}</a>`:u`<span class="text">${e}</span>`,r=this.branch,i=this.loading?D:E;return u`
            <div class="label" part="label" id=${`${this.ids}-label`}>
                ${r?u`<button class="toggle" part="toggle" type="button" tabindex="-1" aria-hidden="true" ?disabled=${this.disabled} @click=${this.onToggleClick}>${i}</button>`:n}
                <span class="details"><slot name="icon"></slot>${t}</span>
                ${this.slots.has(`end`)?u`<span class="end" part="end"><slot name="end"></slot></span>`:n}
                ${this.loading?u`<span class="sr-only">, ${this.localize.t.common.loading}</span>`:n}
            </div>
            <div class="children" part="children" role=${l(r?`group`:void 0)} aria-labelledby=${l(r?`${this.ids}-label`:void 0)} ?hidden=${r&&!this.expanded}>
                <slot @slotchange=${this.onChildrenChange}></slot>
            </div>
        `}};t([e()],O.prototype,`label`,void 0),t([e()],O.prototype,`value`,void 0),t([e({type:Boolean,reflect:!0})],O.prototype,`expanded`,void 0),t([e({type:Boolean,reflect:!0})],O.prototype,`disabled`,void 0),t([e()],O.prototype,`href`,void 0),t([e({type:Boolean,reflect:!0})],O.prototype,`lazy`,void 0),t([e({type:Boolean,reflect:!0})],O.prototype,`loading`,void 0),t([e({type:Number,attribute:!1})],O.prototype,`depth`,void 0),t([a()],O.prototype,`hasChildren`,void 0),O=t([m(`ui-tree-node`)],O);var k=class extends i{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.size=`sm`,this.multiselect=!1,this.selected=[],this.active=``,this.ids=f(`ui-tree-view`),this.onFocusIn=e=>{let t=this.nodeOf(e.target);if(t)for(let e of this.nodes)e.tabIndex=e===t?0:-1},this.onClick=e=>{let t=this.nodeOf(e.target);t&&!t.disabled&&(this.focusNode(t),this.select(t,e))},this.onKeydown=e=>{let t=this.nodeOf(e.target);if(t)switch(e.key){case`ArrowDown`:case`ArrowUp`:case`Home`:case`End`:this.moveFocus(t,e);break;case`ArrowRight`:case`ArrowLeft`:this.sideStep(t,e);break;case`Enter`:this.enter(t,e);break;case` `:e.preventDefault(),this.select(t,e,this.multiselect);break;case`a`:case`A`:(e.ctrlKey||e.metaKey)&&this.multiselect?this.selectAll(t,e):this.typeaheadTo(t,e);break;default:this.typeaheadTo(t,e)}},this.typeahead=new h}static{this.styles=[s,r`
        :host {
            display: block;
            overflow: hidden;
            font-family: var(--ui-font-family);
        }

        .label {
            display: block;
        }

        .tree {
            margin: 0;
            padding: 0;
        }
    `]}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.onClick),this.addEventListener(`keydown`,this.onKeydown),this.addEventListener(`focusin`,this.onFocusIn)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onClick),this.removeEventListener(`keydown`,this.onKeydown),this.removeEventListener(`focusin`,this.onFocusIn)}get nodes(){return[...this.querySelectorAll(`ui-tree-node`)]}visibleNodes(){return y(this.nodes,e=>e.parentTreeNode,e=>e.expanded)}updated(){this.sync()}sync(){let e=this.nodes,t=this.visibleNodes().filter(e=>!e.disabled),n=_(t,e=>e.tabIndex===0,e=>this.selected.includes(e.treeValue));for(let t of e)t.depth=S(t,e=>e.parentTreeNode),t.dataset.size=this.size,t.toggleAttribute(`data-selected`,this.selected.includes(t.treeValue)),t.toggleAttribute(`data-active`,this.active!==``&&t.treeValue===this.active),t.setAttribute(`aria-selected`,this.selected.includes(t.treeValue)?`true`:`false`),t.tabIndex=t===n?0:-1}nodeOf(e){return e?.closest?.(`ui-tree-node`)}select(e,t,n=this.multiselect&&(t.metaKey||t.ctrlKey)){if(e.disabled)return;let r=e.treeValue,i=w(this.selected,r,n);n||this.activate(r),!b(i,this.selected)&&(this.selected=i,this.sync(),this.dispatchEvent(new CustomEvent(`ui-select`,{detail:{selected:i,value:r},bubbles:!0,composed:!0})))}activate(e){this.active!==e&&(this.active=e,this.sync(),this.dispatchEvent(new CustomEvent(`ui-activate`,{detail:{active:e},bubbles:!0,composed:!0})))}focusNode(e){for(let t of this.nodes)t.tabIndex=t===e?0:-1;e.focus()}typeaheadTo(e,t){let n=this.visibleNodes().filter(e=>!e.disabled),r=n[this.typeahead.match(t,n,n.indexOf(e),e=>e.labelText||e.textContent||``)??-1];r&&(t.preventDefault(),this.focusNode(r))}moveFocus(e,t){t.preventDefault();let n=v(t.key,e,this.visibleNodes());n&&this.focusNode(n)}sideStep(e,t){let n=getComputedStyle(this).direction===`rtl`,r=C(t.key,{branch:e.isBranch,expanded:e.expanded,disabled:e.disabled,firstChild:e.childTreeNodes[0],parent:e.parentTreeNode},n);r.handled&&(t.preventDefault(),r.expand===void 0?r.focus&&this.focusNode(r.focus):e.toggle(r.expand))}enter(e,t){t.preventDefault(),e.isBranch&&e.toggle(),this.select(e,t),e.href&&!e.disabled&&e.shadowRoot?.querySelector(`a`)?.click()}selectAll(e,t){t.preventDefault();let n=this.nodes.filter(e=>!e.disabled).map(e=>e.treeValue);this.selected=n,this.sync(),this.dispatchEvent(new CustomEvent(`ui-select`,{detail:{selected:n,value:e.treeValue},bubbles:!0,composed:!0}))}render(){return u`
            ${this.hideLabel||!this.label?n:u`<span class="label" part="label" id="${this.ids}-label">${this.label}</span>`}
            <div class="tree" part="tree" role="tree" aria-label=${l(this.hideLabel?this.label:void 0)} aria-labelledby=${l(this.hideLabel||!this.label?void 0:`${this.ids}-label`)} aria-multiselectable=${l(this.multiselect?`true`:void 0)}>
                <slot @slotchange=${()=>this.sync()}></slot>
            </div>
        `}};t([e()],k.prototype,`label`,void 0),t([e({type:Boolean,attribute:`hide-label`})],k.prototype,`hideLabel`,void 0),t([e({reflect:!0})],k.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],k.prototype,`multiselect`,void 0),t([e({attribute:!1})],k.prototype,`selected`,void 0),t([e()],k.prototype,`active`,void 0),k=t([m(`ui-tree-view`)],k);