import{Ct as e,D as t,Et as n,Mt as r,O as i,Tt as a,bt as o,kt as s,lt as c,v as l,wt as u}from"./theme-switcher-BZXGbHfR.js";var d=class extends i{constructor(...e){super(...e),this.clickable=!1,this.disabled=!1,this.current=!1,this.slots=new l(this),this.currentOnHost=!1}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=r`
        :host {
            position: relative;
            display: list-item;
            list-style: none;
            --_h: var(--ui-field-height-lg, 48px);
            --_pad: var(--ui-space-md);
        }

        /*
         * Carbon: rows after the first overlap the one above by 1px. The margin sits on the first part and
         * collapses through the host (a block box without padding or border) — on :host a page-wide
         * CSS reset would remove it.
         */
        :host(:not(:first-of-type)) .content {
            margin-block-start: -1px;
        }

        :host([data-size='sm']) {
            --_h: 32px;
        }

        :host([data-size='md']) {
            --_h: 40px;
        }

        :host([data-size='xl']) {
            --_h: 64px;
        }

        :host(:not(:last-of-type))::before {
            content: '';
            position: absolute;
            inset-block-end: 0;
            inset-inline: 0;
            block-size: 1px;
            background-color: var(--ui-hairline);
        }

        :host([data-inset]:not(:last-of-type))::before {
            inset-inline: var(--_pad);
        }

        .content {
            box-sizing: border-box;
            display: block;
            inline-size: 100%;
            min-block-size: var(--_h);
            margin: 0;
            padding: calc((var(--_h) - 20px) / 2) var(--_pad);
            border: none;
            background: transparent;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            text-align: start;
            transition: background-color var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon moderate-01 */
        }

        :host([data-with-action]) .content {
            padding-inline-end: var(--ui-space-xxl);
        }

        .inner {
            display: grid;
            grid-template-columns: 1fr;
            column-gap: var(--ui-space-sm);
        }

        :host([data-with-icon]) .inner {
            grid-template-columns: 1rem 1fr;
        }

        .icon {
            display: none;
            padding-block-start: 2px;
        }

        :host([data-with-icon]) .icon {
            display: inline-flex;
        }

        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-primary);
        }

        button.content {
            cursor: pointer;
            outline: none;
        }

        button.content:not(:disabled):hover {
            background-color: var(--ui-ghost-hover);
        }

        button.content:not(:disabled):active {
            background-color: var(--ui-ghost-active);
        }

        button.content:disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        button.content:focus-visible::after {
            content: '';
            position: absolute;
            inset: 0;
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
            border-radius: var(--ui-focus-radius, 0); /* Kanok: 6px */
        }

        /* beyond Carbon: the row the user is on, the side nav's current page (--ui-nav-current-*; Kanok: a tint) — it keeps the fill under the pointer, as there */
        :host([current]) .content,
        :host([current]) button.content:not(:disabled):is(:hover, :active) {
            background-color: var(--ui-nav-current-background, var(--ui-canvas-selected));
        }

        :host([current]) .content::before {
            content: '';
            position: absolute;
            inset-block: var(--ui-nav-current-mark-inset, 0);
            inset-inline-start: 0;
            inline-size: var(--ui-nav-current-mark-width, 3px);
            border-radius: var(--ui-nav-current-mark-radius, 0);
            background-color: var(--ui-nav-current-mark, var(--ui-primary)); /* border-interactive */
        }

        .action {
            position: absolute;
            inset-block-start: 0;
            inset-inline: 0;
            display: none;
            align-items: center; /* a smaller control still sits on the row's centre line */
            justify-content: flex-end;
            block-size: var(--_h);
            pointer-events: none;
        }

        :host([data-with-action]) .action {
            display: flex;
        }

        ::slotted([slot='action']) {
            pointer-events: all;
        }

        @media (forced-colors: active) {
            :host(:not(:last-of-type))::before {
                background-color: CanvasText;
            }

            :host([current]) .content::before {
                inline-size: 3px; /* shown here even where a design hides it */
                background-color: Highlight;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(){this.toggleAttribute(`data-with-icon`,this.slots.has(`icon`)),this.toggleAttribute(`data-with-action`,this.slots.has(`action`)),this.syncCurrent()}syncCurrent(){let e=this.current&&!this.clickable;e?this.setAttribute(`aria-current`,`true`):this.currentOnHost&&this.removeAttribute(`aria-current`),this.currentOnHost=e}onClick(){this.disabled||this.dispatchEvent(new CustomEvent(`ui-click`,{bubbles:!0,composed:!0}))}render(){let e=this.current?`true`:n,t=s`<span class="inner"><span class="icon"><slot name="icon"></slot></span><span><slot></slot></span></span>`;return s`
            ${this.clickable?s`<button class="content" part="content" type="button" ?disabled=${this.disabled} aria-current=${e} @click=${this.onClick}>${t}</button>`:s`<div class="content" part="content">${t}</div>`}
            <div class="action" part="action"><slot name="action"></slot></div>
        `}};t([e({type:Boolean,reflect:!0})],d.prototype,`clickable`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`current`,void 0),d=t([u(`ui-contained-list-item`)],d);var f,p=class extends i{static{f=this}constructor(...e){super(...e),this.label=``,this.kind=`on-page`,this.size=`lg`,this.inset=!1,this.current=!1,this.ids=c(`ui-contained-list`),this.slots=new l(this)}static{this.styles=r`
        :host {
            display: block;
            font-family: var(--ui-font-family);
            --_h: var(--ui-field-height-lg, 48px);
        }

        :host([size='sm']) {
            --_h: 32px;
        }

        :host([size='md']) {
            --_h: 40px;
        }

        :host([size='xl']) {
            --_h: 64px;
        }

        /*
         * Carbon: an on-page list right after another sits 16px below it (Carbon .--on-page + .--on-page). :host()
         * can't see siblings, so the list marks itself (data-after-list); the margin is on its first part
         * and collapses through the host — a page-wide CSS reset would remove a :host margin.
         */
        :host([data-after-list]) > :first-child {
            margin-block-start: var(--ui-space-md);
        }

        .header {
            position: sticky;
            inset-block-start: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: var(--_h);
            padding-inline: var(--ui-space-md);
            border-block-end: 1px solid var(--ui-hairline);
            background-color: var(--ui-layer-background);
            color: var(--ui-ink);
            font: var(--ui-font-body-emphasis);
            line-height: 18px; /* heading-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        :host([kind='disclosed']) .header {
            block-size: 32px;
            border-block-end: none;
            background-color: var(--ui-surface-1);
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
        }

        /* beyond Carbon: a current list, the side nav's current-page fill and bar on its header (--ui-nav-current-*; Kanok: the tint, no bar) */
        :host([current]) .header {
            background-color: var(--ui-nav-current-background, var(--ui-canvas-selected));
        }

        :host([current]) .header::before {
            content: '';
            position: absolute;
            inset-block: var(--ui-nav-current-mark-inset, 0);
            inset-inline-start: 0;
            inline-size: var(--ui-nav-current-mark-width, 3px);
            border-radius: var(--ui-nav-current-mark-radius, 0);
            background-color: var(--ui-nav-current-mark, var(--ui-primary)); /* border-interactive */
        }

        @media (forced-colors: active) {
            :host([current]) .header::before {
                inline-size: 3px; /* shown here even where a design hides it */
                background-color: Highlight;
            }
        }

        .label {
            inline-size: 100%;
        }

        .action {
            display: flex;
            align-items: center;
            margin-inline-end: calc(-1 * var(--ui-space-md));
        }

        .list {
            margin: 0;
            padding: 0;
        }
    `}connectedCallback(){super.connectedCallback(),this.syncSpacing()}syncSpacing(){let e=e=>e instanceof f&&e.kind===`on-page`&&e.previousElementSibling instanceof f&&e.previousElementSibling.kind===`on-page`;this.toggleAttribute(`data-after-list`,e(this));let t=this.nextElementSibling;t instanceof f&&t.toggleAttribute(`data-after-list`,e(t))}updated(e){e.has(`kind`)&&this.syncSpacing();for(let e of this.items)e.dataset.size=this.size,e.toggleAttribute(`data-inset`,this.inset)}render(){let e=this.label||this.slots.has(`label`),t=this.slots.has(`action`);return s`
            ${e||t?s`<div class="header" part="header">
                      <div class="label" part="label" id=${`${this.ids}-label`}><slot name="label">${this.label}</slot></div>
                      <div class="action" part="action"><slot name="action"></slot></div>
                  </div>`:n}
            <div class="list" part="list" role="list" aria-labelledby=${e?`${this.ids}-label`:n} aria-current=${this.current?`true`:n}><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
        `}};t([e()],p.prototype,`label`,void 0),t([e({reflect:!0})],p.prototype,`kind`,void 0),t([e({reflect:!0})],p.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],p.prototype,`inset`,void 0),t([e({type:Boolean,reflect:!0})],p.prototype,`current`,void 0),t([o({selector:`ui-contained-list-item`})],p.prototype,`items`,void 0),p=f=t([u(`ui-contained-list`)],p);