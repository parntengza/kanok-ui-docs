import{Ct as e,D as t,Et as n,L as r,Mt as i,N as a,O as o,St as s,T as c,Tt as l,at as u,it as d,j as f,jt as p,k as m,kt as h,lt as g,wt as _,xt as v,y}from"./theme-switcher-BZXGbHfR.js";import{t as b}from"./typeahead-CDCzrGcR.js";import{t as x}from"./events-IQD1_DyD.js";function S(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function C(e,t,n){return e.key!==`ArrowDown`&&e.key!==`ArrowUp`||t.open?!1:(e.preventDefault(),t.show(n,e.key===`ArrowUp`?`last`:`first`),!0)}var w,T=p`<path d="M6 12.4 2.3 8.7l.7-.7 3 3 6.3-6.3.7.7z" />`,E=p`<path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" />`,D=150,O=`ui-menu-item, ui-menu-group, ui-menu-divider`,k=class extends o{static{w=this}static{this.styles=[u,i`
        /* a row: the menu settings of shared/listbox.ts (--ui-menu-item-radius / -ink) apply here too */
        :host {
            display: block;
            border-radius: var(--ui-menu-item-radius, 0);
            color: var(--ui-menu-item-ink, var(--ui-ink-muted));
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-short-01 */
            letter-spacing: var(--ui-tracking-body);
            cursor: pointer;
            outline: none;
            transition: background-color var(--ui-duration-fast) var(--ui-easing);
        }

        /* the row's grid and 16px padding, on a part rather than :host so a page-wide CSS reset can't remove the padding */
        .base {
            display: grid;
            grid-template-columns: 1fr max-content;
            align-items: center;
            column-gap: var(--ui-space-xs);
            box-sizing: border-box;
            block-size: var(--ui-menu-item-height, var(--_row, 32px)); /* a design can give every menu one row height */
            padding-inline: var(--ui-space-md);
        }

        :host([data-size='xs']) {
            --_row: 24px;
        }

        :host([data-size='md']) {
            --_row: 40px;
        }

        :host([data-size='lg']) {
            --_row: 48px;
        }

        :host([data-icons]) .base,
        :host([data-selectable]) .base {
            grid-template-columns: 1rem 1fr max-content;
        }

        :host([data-icons][data-selectable]) .base {
            grid-template-columns: 1rem 1rem 1fr max-content;
        }

        :host(:hover) {
            background-color: var(--ui-ghost-hover);
            color: var(--ui-ink);
        }

        /* :focus, not :focus-visible: opening by mouse moves focus to the first item and Carbon rings it too */
        :host(:focus) {
            outline: var(--ui-focus-width, 2px) solid var(--ui-menu-item-active-outline, var(--ui-focus));
            outline-offset: -2px;
        }

        /* focus that the keyboard didn't bring (a mouse open or click): a design can drop the ring there (the hover tint shows the row) */
        :host(:focus:not(:focus-visible)) {
            outline-color: var(--ui-menu-item-pointer-outline, var(--ui-menu-item-active-outline, var(--ui-focus)));
        }

        /* --ui-menu-item-active-*: a design can show the focused row as a fill instead of the ring, as the lists' highlight */
        :host(:focus:not(:hover, [kind='danger'], [aria-expanded='true'])) {
            background-color: var(--ui-menu-item-active-background, transparent);
        }

        @media screen and (prefers-contrast) {
            :host(:focus) {
                outline-style: dotted;
            }
        }

        @media (forced-colors: active) {
            :host(:focus) {
                outline-color: Highlight;
            }
        }

        :host([kind='danger']:hover),
        :host([kind='danger']:focus) {
            background-color: var(--ui-button-danger);
            color: var(--ui-on-primary);
        }

        :host([disabled]),
        :host([disabled]:hover) {
            background-color: transparent;
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        .selection,
        .icon {
            display: none;
            align-items: center;
        }

        :host([data-selectable]) .selection,
        :host([data-icons]) .icon {
            display: flex;
        }

        .selection svg,
        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .label {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .shortcut,
        .submenu-icon {
            display: flex;
        }

        .submenu-icon svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        :host(:dir(rtl)) .submenu-icon svg {
            transform: scaleX(-1);
        }

        /* Carbon keeps the parent highlighted while its submenu is open */
        :host([aria-expanded='true']) {
            background-color: var(--ui-ghost-hover);
            color: var(--ui-ink);
        }
    `]}get selectValue(){return this.value||this.label}constructor(){super(),this.label=``,this.value=``,this.shortcut=``,this.kind=`default`,this.disabled=!1,this.selectable=!1,this.checked=!1,this.dangerDescription=``,this.radio=!1,this.hasSubmenu=!1,this.submenuOpen=!1,this.onKeydown=e=>{if(e.target!==this)return;let t=e.key===(this.matches(`:dir(rtl)`)?`ArrowLeft`:`ArrowRight`);(e.key===`Enter`||e.key===` `||t&&this.hasSubmenu)&&(e.preventDefault(),e.stopPropagation(),t?this.openSubmenu(`first`):this.activate())},this.onPointerEnter=()=>{this.hasSubmenu&&!this.disabled&&(clearTimeout(this.hoverTimer),this.hoverTimer=setTimeout(()=>this.openSubmenu(`none`),D))},this.onPointerLeave=()=>{clearTimeout(this.hoverTimer),this.submenuOpen&&(this.hoverTimer=setTimeout(()=>{!this.submenu?.contains(S())&&!this.querySelector(`:scope > [slot="submenu"]:focus-within`)&&this.closeSubmenu()},D))},this.onFocusOut=e=>{let t=e.relatedTarget;t&&(this.contains(t)||this.shadowRoot?.contains(t))||this.closeSubmenu()},this.onDefaultSlotChange=e=>{for(let t of e.target.assignedElements())t.matches(O)&&t.setAttribute(`slot`,`submenu`);this.syncHasSubmenu()},this.syncHasSubmenu=()=>{this.hasSubmenu=this.querySelector(`:scope > [slot="submenu"]`)!==null},this.onSubmenuToggle=e=>{x(e)&&(this.submenuOpen=e.detail.open)},this.addEventListener(`click`,e=>{e.composedPath().find(e=>e instanceof w)===this&&this.activate()}),this.addEventListener(`keydown`,this.onKeydown),this.addEventListener(`pointerenter`,this.onPointerEnter),this.addEventListener(`pointerleave`,this.onPointerLeave),this.addEventListener(`focusout`,this.onFocusOut)}openSubmenu(e=`first`){this.hasSubmenu&&!this.disabled&&this.submenu&&(clearTimeout(this.hoverTimer),this.submenu.open?e!==`none`&&this.submenu.focusItem(e):this.submenu.show(this,e))}closeSubmenu(){clearTimeout(this.hoverTimer),this.submenu?.hide()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.hoverTimer)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`tabindex`)||(this.tabIndex=-1),this.syncHasSubmenu()}updated(){let e=`menuitem`;this.radio?e=`menuitemradio`:this.selectable&&(e=`menuitemcheckbox`),d(this,`role`,e),this.radio||this.selectable?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`),d(this,`aria-haspopup`,this.hasSubmenu?`menu`:null),d(this,`aria-expanded`,this.hasSubmenu?String(this.submenuOpen):null),this.submenu&&(this.submenu.size=this.dataset.size??`sm`)}activate(){this.disabled||(this.hasSubmenu?this.openSubmenu(`first`):(this.selectable&&(this.checked=!this.checked),this.radio&&(this.checked=!0),this.dispatchEvent(new CustomEvent(`ui-select`,{detail:{value:this.selectValue,label:this.label,checked:this.checked},bubbles:!0,composed:!0}))))}renderEnd(){return this.hasSubmenu?h`<span class="submenu-icon" part="submenu-icon" aria-hidden="true"><svg viewBox="0 0 16 16">${E}</svg></span>`:this.shortcut?h`<span class="shortcut" part="shortcut">${this.shortcut}</span>`:h``}render(){let e=this.kind===`danger`&&this.dangerDescription;return h`<span class="base">
            <span class="selection" aria-hidden="true"><svg viewBox="0 0 16 16">${this.checked?T:n}</svg></span>
            <span class="icon" part="icon"><slot name="icon"></slot></span>
            <span class="label" part="label">${this.label}<slot @slotchange=${this.onDefaultSlotChange}></slot>${e?h`<span class="sr-only">${this.dangerDescription}</span>`:n}</span>
            ${this.renderEnd()}</span>
            ${this.hasSubmenu?h`<ui-menu part="submenu" label=${this.label} @ui-toggle=${this.onSubmenuToggle}><slot name="submenu" @slotchange=${this.syncHasSubmenu}></slot></ui-menu>`:n}
        `}};t([e()],k.prototype,`label`,void 0),t([e()],k.prototype,`value`,void 0),t([e()],k.prototype,`shortcut`,void 0),t([e({reflect:!0})],k.prototype,`kind`,void 0),t([e({type:Boolean,reflect:!0})],k.prototype,`disabled`,void 0),t([e({type:Boolean,reflect:!0})],k.prototype,`selectable`,void 0),t([e({type:Boolean,reflect:!0})],k.prototype,`checked`,void 0),t([e({attribute:`danger-description`})],k.prototype,`dangerDescription`,void 0),t([e({type:Boolean,attribute:!1})],k.prototype,`radio`,void 0),t([s()],k.prototype,`hasSubmenu`,void 0),t([s()],k.prototype,`submenuOpen`,void 0),t([v(`ui-menu`)],k.prototype,`submenu`,void 0),k=w=t([_(`ui-menu-item`)],k);var A=class extends o{constructor(...e){super(...e),this.label=``,this.selection=`none`,this.value=``,this.onSelect=e=>{if(this.selection!==`single`||!(e.target instanceof k))return;let t=e.target.selectValue;t!==this.value&&(this.value=t,this.sync(),this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{value:t},bubbles:!0,composed:!0})))}}static{this.styles=i`
        :host {
            display: block;
        }
    `}get items(){return[...this.querySelectorAll(`:scope > ui-menu-item`)]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`group`),this.addEventListener(`ui-select`,this.onSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`ui-select`,this.onSelect)}updated(){d(this,`aria-label`,this.label||null),this.sync()}sync(){let e=this.selection===`single`;for(let t of this.items)t.radio=e,e&&(t.checked=t.selectValue===this.value)}render(){return h`<slot @slotchange=${()=>this.sync()}></slot>`}};t([e()],A.prototype,`label`,void 0),t([e()],A.prototype,`selection`,void 0),t([e()],A.prototype,`value`,void 0),A=t([_(`ui-menu-group`)],A);var j=class extends o{static{this.styles=i`
        :host {
            display: block;
        }

        /* the 4px above and below sit on the line and collapse through the host: a page-wide CSS reset would remove a :host margin */
        .line {
            block-size: 1px;
            margin-block: var(--ui-space-xxs);
            background-color: var(--ui-hairline);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`separator`)}render(){return h`<div class="line"></div>`}};j=t([_(`ui-menu-divider`)],j);var M=2;function N(e){let t=[],n=e=>{for(let r of e)r instanceof HTMLSlotElement?n(r.assignedElements({flatten:!0})):r instanceof k?t.push(r):r instanceof A&&n([...r.children])};return n([...e.children]),t}var P=class extends m(o){constructor(...e){super(...e),this.open=!1,this.label=``,this.size=`sm`,this.placement=`bottom-start`,this.matchWidth=!1,this.anchor=null,this.returnFocus=null,this.initialFocus=`first`,this.typeahead=new b,this.hide=()=>{this.open=!1},this.reposition=()=>this.position(),this.sync=()=>{let e=this.items,t=e.some(e=>e.querySelector(`:scope > [slot="icon"]`)),n=e.some(e=>e.selectable||e.radio);for(let r of e)r.dataset.size=this.size,r.toggleAttribute(`data-icons`,t),r.toggleAttribute(`data-selectable`,n);this.toggleAttribute(`data-icons`,t)},this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this)&&!(this.anchor&&t.includes(this.anchor))&&this.hide()},this.onFocusOut=e=>{this.isInside(e.relatedTarget)||this.hide()},this.onKeydown=e=>{let t=this.parentItem!==null,n=e.key===(this.matches(`:dir(rtl)`)?`ArrowRight`:`ArrowLeft`);if(t&&(e.key===`Escape`||n)){e.preventDefault(),e.stopPropagation(),this.hide();return}if(e.key===`Escape`||e.key===`Tab`){e.preventDefault(),this.hide();return}let r=this.enabledItems();if(!r.length)return;let i=r.findIndex(t=>t===e.target||t.contains(e.target)),a=y(r.length,i,e.key,{orientation:`vertical`})??this.typeahead.match(e,r,i,e=>e.label||e.textContent||``),o=a===void 0?void 0:r[a];o&&(e.preventDefault(),t&&e.stopPropagation(),o.focus())}}static{this.styles=i`
        :host {
            position: absolute; /* document coordinates in the top layer, see position.ts */
            inset: auto;
            display: none;
            box-sizing: border-box;
            /* --ui-menu-min-width / -max-width: a design can let a menu grow to its labels (Carbon: 160 to 288px) */
            min-inline-size: var(--ui-menu-min-width, 160px);
            max-inline-size: var(--ui-menu-max-width, 288px);
            margin: 0;
            /* the menu settings, as the dropdown lists (shared/listbox.ts) */
            padding: var(--ui-menu-padding, 0);
            border: var(--ui-menu-border, none);
            border-radius: var(--ui-menu-radius, 0);
            background-color: var(--ui-overlay-background, var(--ui-surface-1)); /* a design can raise floating surfaces (--ui-overlay-background) */
            color: var(--ui-ink);
            font-family: var(--ui-font-family);
            box-shadow: var(--ui-menu-shadow, 0 2px 6px rgb(0 0 0 / 0.3));
            /* the room left beside its anchor (core/popup placePopup): a long menu scrolls instead of running past the screen */
            max-block-size: var(--ui-available-height, none);
            overflow-y: auto;
            overscroll-behavior: contain; /* scrolling past the end doesn't scroll the page */
            outline: none;
        }

        :host(:popover-open) {
            display: block;
        }

        /* 4px above the first item and below the last, on a part: a page-wide CSS reset would remove :host padding */
        .base {
            padding-block: var(--ui-space-xxs);
        }

        :host([data-icons]) {
            min-inline-size: 192px;
        }

        :host([data-side='top']) {
            box-shadow: var(--ui-menu-shadow, 0 -2px 6px rgb(0 0 0 / 0.3));
        }

        /* Carbon .cds--menu--open:focus, focus-outline('border'): 1px, no offset (focused only when no item is enabled) */
        :host(:focus) {
            outline: 1px solid var(--ui-focus);
        }

        @media screen and (prefers-contrast) {
            :host(:focus) {
                outline-style: dotted;
            }
        }

        /* an outline, not a border: a page-wide CSS reset would remove a :host border */
        @media (forced-colors: active) {
            :host {
                outline: 1px solid CanvasText;
                outline-offset: -1px;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`menu`),this.hasAttribute(`tabindex`)||(this.tabIndex=-1),this.hasAttribute(`popover`)||this.setAttribute(`popover`,`manual`),this.addEventListener(`keydown`,this.onKeydown),this.addEventListener(`focusout`,this.onFocusOut),this.addEventListener(`ui-select`,this.hide),this.addEventListener(`slotchange`,this.sync)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onKeydown),this.removeEventListener(`focusout`,this.onFocusOut),this.removeEventListener(`ui-select`,this.hide),this.removeEventListener(`slotchange`,this.sync),this.stopTracking()}show(e,t=`first`){e&&(this.anchor=e),this.initialFocus=t,this.open=!0}focusItem(e){let t=this.enabledItems();(e===`last`?t.at(-1):t[0])?.focus()}get parentItem(){let e=this.getRootNode().host;return e instanceof k?e:null}get items(){return N(this)}enabledItems(){return this.items.filter(e=>!e.disabled)}updated(e){e.has(`size`)&&this.sync(),e.has(`label`)&&d(this,`aria-label`,this.label||null),e.has(`open`)&&(this.open?this.onOpen():this.onClose(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!this.parentItem})))}onOpen(){let e=S();if(this.returnFocus=e&&e!==document.body?e:this.anchor,this.parentItem&&(this.returnFocus=this.parentItem),this.matches(`:popover-open`)||this.showPopover(),this.sync(),this.position(),this.initialFocus!==`none`){let e=this.enabledItems();((this.initialFocus===`last`?e.at(-1):e[0])??this).focus()}this.initialFocus=`first`,this.stopTracking(),this.untrack=r(this.anchor??this,this,this.reposition),this.stopOutside=a(document,this.onDocumentPointerDown)}isInside(e){return e?e===this||this.contains(e)||!!this.shadowRoot?.contains(e)||this.items.some(t=>t.contains(e)):!1}onClose(){let e=this.isInside(S());for(let e of this.items)e.closeSubmenu();this.matches(`:popover-open`)&&this.hidePopover(),this.stopTracking(),e&&(this.returnFocus?.focus(),this.isInside(S())&&S()?.blur()),this.returnFocus=null}stopTracking(){this.untrack?.(),this.stopOutside?.(),this.untrack=this.stopOutside=void 0}position(){if(this.anchor){if(this.parentItem){let e=this.parentItem.matches(`:dir(rtl)`);this.dataset.side=f(this.anchor,this,e?`left-start`:`right-start`,M,{size:!0}),this.style.top=`${Number.parseFloat(this.style.top)+M}px`}else this.matchWidth&&(this.style.width=`${this.anchor.getBoundingClientRect().width}px`),this.dataset.side=f(this.anchor,this,this.placement,0,{size:!0})}}render(){return h`<div class="base"><slot @slotchange=${this.sync}></slot></div>`}};t([e({type:Boolean,reflect:!0})],P.prototype,`open`,void 0),t([e()],P.prototype,`label`,void 0),t([e({reflect:!0})],P.prototype,`size`,void 0),t([e()],P.prototype,`placement`,void 0),t([e({type:Boolean,attribute:`match-width`})],P.prototype,`matchWidth`,void 0),t([e({attribute:!1})],P.prototype,`anchor`,void 0),P=t([_(`ui-menu`)],P);var F=h`<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="4" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="12" r="1.5" /></svg>`,I=class extends m(o){constructor(...e){super(...e),this.label=``,this.localize=new c(this),this.size=`md`,this.placement=`bottom-start`,this.tooltipPlacement=`bottom`,this.disabled=!1,this.open=!1,this.menuId=g(`ui-overflow-menu`)}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=i`
        :host {
            display: inline-block;
        }

        .trigger {
            display: flex;
            align-items: center;
            justify-content: center;
            inline-size: var(--_s, 40px);
            block-size: var(--_s, 40px);
            padding: 0;
            border: none;
            border-radius: var(--ui-button-radius, 0); /* an icon button: the button setting */
            background-color: transparent;
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            /* Carbon .cds--overflow-menu: 110ms, entrance productive */
            transition:
                outline var(--ui-duration-moderate) var(--ui-easing-entrance),
                background-color var(--ui-duration-moderate) var(--ui-easing-entrance);
        }

        :host([size='sm']) .trigger {
            --_s: 32px;
        }

        :host([size='lg']) .trigger {
            --_s: 48px;
        }

        /* Carbon: background-hover */
        .trigger:hover {
            background-color: var(--ui-canvas-hover);
        }

        .trigger:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        /* Carbon: open, the trigger joins the menu (its fill and shadow); a design can leave it a pressed button */
        .trigger[aria-expanded='true'] {
            background-color: var(--ui-overflow-open-background, var(--ui-surface-1));
            box-shadow: var(--ui-overflow-open-shadow, 0 2px 6px rgb(0 0 0 / 0.3));
            transition: none;
        }

        .trigger:disabled {
            background-color: transparent;
            color: var(--ui-icon-disabled);
            cursor: not-allowed;
        }

        svg,
        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        @media (forced-colors: active) {
            .trigger {
                color: CanvasText;
            }

            .trigger[aria-expanded='true'] {
                outline: 1px solid CanvasText;
            }

            .trigger:disabled {
                color: GrayText;
            }
        }

    `}updated(e){e.has(`open`)&&this.menu.open!==this.open&&(this.menu.anchor=this.trigger,this.menu.open=this.open)}onTriggerKeydown(e){C(e,this.menu,this.trigger)}toggle(){this.open?this.menu.hide():this.menu.show(this.trigger)}render(){let e=this.size;return h`
            <ui-tooltip as-label text=${this.label||this.localize.t.common.options} placement=${this.tooltipPlacement}>
                <button
                    class="trigger"
                    part="trigger"
                    type="button"
                    tabindex="0"
                    aria-haspopup="true"
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls=${this.menuId}
                    ?disabled=${this.disabled}
                    @click=${this.toggle}
                    @keydown=${this.onTriggerKeydown}
                >
                    <slot name="icon">${F}</slot>
                </button>
            </ui-tooltip>
            <ui-menu
                id=${this.menuId}
                part="menu"
                label=${this.label||this.localize.t.common.options}
                size=${e}
                placement=${this.placement}
                @ui-toggle=${e=>{x(e)&&(this.open=e.detail.open)}}
            >
                <slot></slot>
            </ui-menu>
        `}};t([e()],I.prototype,`label`,void 0),t([e({reflect:!0})],I.prototype,`size`,void 0),t([e()],I.prototype,`placement`,void 0),t([e({attribute:`tooltip-placement`})],I.prototype,`tooltipPlacement`,void 0),t([e({type:Boolean,reflect:!0})],I.prototype,`disabled`,void 0),t([e({type:Boolean,reflect:!0})],I.prototype,`open`,void 0),t([v(`.trigger`)],I.prototype,`trigger`,void 0),t([v(`ui-menu`)],I.prototype,`menu`,void 0),I=t([_(`ui-overflow-menu`)],I);export{C as t};