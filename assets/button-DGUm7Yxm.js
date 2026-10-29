import{Ct as e,D as t,Et as n,Mt as r,O as i,T as a,Tt as o,at as s,jt as c,kt as l,l as u,lt as d,ut as f,v as p,wt as m}from"./theme-switcher-BZXGbHfR.js";function h(e,t,n){return n||e===`end`&&(t===`ghost`||t===`danger-ghost`)?`center`:e}var g=r`
    :host {
        display: inline-block;
        vertical-align: middle;
    }

    :host([full-width]) {
        display: block;
    }

    .button {
        position: relative; /* for a badge indicator in its corner */
        box-sizing: border-box;
        display: inline-flex;
        align-items: var(--ui-button-align, var(--_ui-button-align, center));
        /* Carbon: label at the start, icon at the end; a design can centre it (--ui-button-justify, --ui-button-gap) */
        justify-content: var(--ui-button-justify, space-between);
        /* Carbon: text 15px from the start (+1px border), 63px of room at the end: 16px icon at 16px, text at least 31px before it */
        gap: var(--ui-button-gap, 32px);
        width: 100%;
        /* lg, the default size (always reflected): 48px in Carbon; --ui-button-height-lg lets a design change it */
        min-height: var(--ui-button-height-lg, var(--ui-field-height-lg, 48px));
        margin: 0;
        padding-block: var(--ui-button-padding-top, var(--_ui-button-padding-top, 0)) 0;
        /* --_ui-button-pad: the padding of a size that has its own (xl / 2xl, when a design sets one) */
        padding-inline: var(--_ui-button-pad, var(--ui-button-padding-start, 15px)) var(--_ui-button-pad, var(--ui-button-padding-end, 63px));
        border: 1px solid transparent;
        /* the button setting; a joined control (the combo button) squares the side that joins, with --_ui-button-radius-start / -end */
        border-start-start-radius: var(--_ui-button-radius-start, var(--ui-button-radius, var(--ui-radius-none)));
        border-end-start-radius: var(--_ui-button-radius-start, var(--ui-button-radius, var(--ui-radius-none)));
        border-start-end-radius: var(--_ui-button-radius-end, var(--ui-button-radius, var(--ui-radius-none)));
        border-end-end-radius: var(--_ui-button-radius-end, var(--ui-button-radius, var(--ui-radius-none)));
        font: var(--ui-font-button);
        letter-spacing: var(--ui-tracking-body);
        text-align: start;
        cursor: pointer;
        /* Carbon button-base: background, box-shadow, border-color, outline at fast-01 with the entrance easing (the text colour switches at once) */
        transition:
            background-color var(--ui-duration-fast) var(--ui-easing-entrance),
            box-shadow var(--ui-duration-fast) var(--ui-easing-entrance),
            border-color var(--ui-duration-fast) var(--ui-easing-entrance),
            outline var(--ui-duration-fast) var(--ui-easing-entrance);
    }

    .button.has-suffix {
        padding-inline-end: 16px; /* icon edge 16px inside the padding box, as Carbon's absolute icon (17px from the outer edge) */
    }

    :host([size='sm']) .button {
        min-height: var(--ui-field-height-sm, 32px);
    }


    :host([size='md']) .button {
        min-height: var(--ui-field-height-md, 40px);
    }

    :host([size='lg']) .button {
        min-height: var(--ui-button-height-lg, var(--ui-field-height-lg, 48px));
    }

    :host([size='xl']) .button {
        min-height: var(--ui-button-height-xl, 64px);
    }

    :host([size='2xl']) .button {
        min-height: var(--ui-button-height-2xl, 80px);
    }

    :host([size='xl']) {
        --_ui-button-pad: var(--ui-button-padding-xl);
    }

    :host([size='2xl']) {
        --_ui-button-pad: var(--ui-button-padding-2xl);
    }

    /*
     * Carbon xl / 2xl: padding-block is min((height - 18px) / 2 - 1px, lg's 14px), so the content stays at the
     * top, 14px inside the border; the icon (Carbon btn__icon: the same 14px + 1px margin) sits 1px lower.
     * --ui-button-tall-align / -padding-top / -icon-offset let a design centre it (Kanok: 40 / 48px pills).
     */
    :host([size='xl']:not([icon-only])),
    :host([size='2xl']:not([icon-only])) {
        --_ui-button-align: var(--ui-button-tall-align, flex-start);
        --_ui-button-padding-top: var(--ui-button-tall-padding-top, 14px);
    }

    /* !important on the slotted icon: a page-level reset (Tailwind preflight's * { margin: 0 }) beats ::slotted rules */
    :host([size='xl']:not([icon-only])) ::slotted(svg),
    :host([size='2xl']:not([icon-only])) ::slotted(svg) {
        margin-block-start: var(--ui-button-tall-icon-offset, 1px) !important;
    }

    :host([size='xl']:not([icon-only])) .spinner,
    :host([size='2xl']:not([icon-only])) .spinner {
        margin-block-start: var(--ui-button-tall-icon-offset, 1px);
    }

    /*
     * Carbon focus (:focus, so a mouse click shows it too): 2px focus ring + 1px focus-inset line inside it.
     * Carbon: 1px focus border + inset 1px focus + inset 2px background. The inset starts inside the 1px
     * border, so 2px reaches 3px from the edge and the 2px outline leaves 1px of it showing.
     */
    .button:focus {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        /* --ui-focus-offset / --ui-focus-inset-width: a design can move the ring outside and drop the inner line */
        outline-offset: var(--ui-focus-offset, -2px);
        box-shadow: inset 0 0 0 var(--ui-focus-inset-width, 2px) var(--ui-focus-inset);
    }

    /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
    .button:focus:not(:focus-visible) {
        outline-color: var(--ui-pointer-focus, var(--ui-focus));
        transition-property: background-color, box-shadow, border-color;
    }

    ::slotted(svg) {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        fill: currentColor; /* an icon takes the text colour of the kind (Carbon btn__icon) */
    }

    /* primary */
    .button {
        background-color: var(--ui-primary);
        color: var(--ui-on-primary);
    }
    .button:hover {
        background-color: var(--ui-blue-hover);
    }
    .button:active {
        background-color: var(--ui-blue-80);
    }

    /* secondary — charcoal (Carbon); --ui-button-secondary-* let a design restyle the button alone (other parts use --ui-secondary) */
    :host([kind='secondary']) .button {
        border-color: var(--ui-button-secondary-border, transparent);
        background-color: var(--ui-button-secondary, var(--ui-secondary)); /* Carbon button-secondary */
        color: var(--ui-on-button-secondary, var(--ui-on-primary)); /* text-on-color */
    }
    :host([kind='secondary']) .button:hover {
        background-color: var(--ui-button-secondary-hover, var(--ui-secondary-hover));
    }
    :host([kind='secondary']) .button:active {
        background-color: var(--ui-button-secondary-active, var(--ui-secondary-active));
    }

    /* tertiary — blue outline, fills on hover (a design can lighten the outline and text on a dark theme) */
    :host([kind='tertiary']) .button {
        background-color: transparent;
        border-width: var(--ui-button-tertiary-border-width, 1px);
        border-color: var(--ui-button-tertiary-border, var(--ui-primary));
        color: var(--ui-button-tertiary-ink, var(--ui-primary));
    }
    /* --ui-button-tertiary-hover / -active / -focus (and -state-ink): Carbon fills it as a primary; a design can tint it,
       keeping its outline and text, so it never turns into a second primary */
    :host([kind='tertiary']) .button:hover {
        background-color: var(--ui-button-tertiary-hover, var(--ui-blue-hover));
        color: var(--ui-button-tertiary-state-ink, var(--ui-on-primary));
    }
    :host([kind='tertiary']) .button:focus {
        background-color: var(--ui-button-tertiary-focus, var(--ui-primary));
        color: var(--ui-button-tertiary-state-ink, var(--ui-on-primary));
    }
    :host([kind='tertiary']) .button:active {
        background-color: var(--ui-button-tertiary-active, var(--ui-blue-80));
        border-color: var(--ui-button-tertiary-active-border, var(--ui-blue-80));
        color: var(--ui-button-tertiary-state-ink, var(--ui-on-primary));
    }

    /* ghost — text only until hover */
    :host([kind='ghost']) .button {
        background-color: transparent;
        color: var(--ui-link); /* Carbon link-primary */
        justify-content: var(--ui-button-ghost-justify, flex-start);
        gap: var(--ui-space-xs);
        padding-inline-end: var(--_ui-button-pad, var(--ui-button-ghost-padding-end, 15px));
    }
    /* Carbon: background-hover / background-active (theme level, not the layer set) */
    :host([kind='ghost']) .button:hover {
        background-color: var(--ui-canvas-hover);
        color: var(--ui-blue-60);
    }
    :host([kind='ghost']) .button:active {
        background-color: var(--ui-canvas-active);
    }

    /* danger */
    :host([kind='danger']) .button {
        background-color: var(--ui-button-danger);
        color: var(--ui-on-primary);
    }
    :host([kind='danger']) .button:hover {
        background-color: var(--ui-error-hover);
    }
    :host([kind='danger']) .button:active {
        background-color: var(--ui-error-active);
    }

    /* danger-tertiary — red outline, fills on hover */
    :host([kind='danger-tertiary']) .button {
        background-color: transparent;
        border-width: var(--ui-button-tertiary-border-width, 1px);
        border-color: var(--ui-error);
        color: var(--ui-error);
    }
    :host([kind='danger-tertiary']) .button:hover,
    :host([kind='danger-tertiary']) .button:focus {
        background-color: var(--ui-error-hover);
        border-color: var(--ui-error-hover);
        color: var(--ui-on-primary);
    }
    :host([kind='danger-tertiary']) .button:active {
        background-color: var(--ui-error-active);
        border-color: var(--ui-error-active);
        color: var(--ui-on-primary);
    }

    /* danger-ghost — red text, fills on hover */
    :host([kind='danger-ghost']) .button {
        background-color: transparent;
        color: var(--ui-error);
        justify-content: var(--ui-button-ghost-justify, flex-start);
        gap: var(--ui-space-xs);
        padding-inline-end: var(--_ui-button-pad, var(--ui-button-ghost-padding-end, 15px));
    }
    :host([kind='danger-ghost']) .button:hover {
        background-color: var(--ui-error-hover);
        color: var(--ui-on-primary);
    }
    :host([kind='danger-ghost']) .button:active {
        background-color: var(--ui-error-active);
        color: var(--ui-on-primary);
    }

    /* toggle buttons (ghost icon buttons in toolbars): Carbon btn--selected, background-selected */
    :host([pressed]) .button[aria-pressed='true'] {
        background-color: var(--ui-canvas-selected);
        color: var(--ui-ink);
    }

    a.button {
        text-decoration: none;
    }

    /*
     * loading: the small Loading spinner of Carbon's InlineLoading (a layer-accent track, an interactive arc, 690ms
     * a turn), on the label's line. The label and the loading text share one grid cell, so the button keeps the
     * wider of the two; what is hidden is see-through (the label stays the button's name).
     */
    .label {
        display: inline-grid;
        align-items: var(--ui-button-align, var(--_ui-button-align, center));
    }

    .label > * {
        grid-area: 1 / 1;
    }

    .label.replaced .label-text,
    .label .busy.reserve {
        opacity: 0;
    }

    /* Carbon InlineLoading: 8px between the spinner and its text */
    .busy {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .busy-mark {
        position: absolute;
        inset-block: 0;
        box-sizing: border-box;
        display: flex;
        align-items: var(--ui-button-align, var(--_ui-button-align, center));
        padding-block-start: var(--ui-button-padding-top, var(--_ui-button-padding-top, 0));
        pointer-events: none;
    }

    /* where Carbon's trailing icon goes (16px inside the padding box), the place of the ActionSet's spinner */
    .busy-mark.end {
        inset-inline-end: 16px;
    }

    .busy-mark.start {
        inset-inline-start: var(--ui-button-padding-start, 15px);
    }

    .busy-mark.center {
        inset-inline: 0;
        justify-content: center;
    }

    /* on the slot, not ::slotted: what it holds inherits it, a slot passed through (ui-icon-button's) too */
    /* the spinner at the end of a button with no trailing icon: room for it after the label (Carbon's 63px has it) */
    .button.busy-end {
        padding-inline-end: max(var(--_ui-button-pad, var(--ui-button-padding-end, 63px)), 40px);
    }

    .button.hide-prefix slot[name='prefix'],
    .button.hide-suffix slot[name='suffix'] {
        visibility: hidden;
    }

    .spinner {
        inline-size: 16px;
        block-size: 16px;
        fill: transparent;
        animation: spin 690ms linear infinite;
    }

    .spinner circle {
        stroke-dasharray: 276.46 276.46;
        stroke-linecap: butt;
        stroke-width: 16;
    }

    .spinner .track {
        stroke: var(--ui-layer-accent);
        stroke-dashoffset: -22;
    }

    .spinner .arc {
        stroke: var(--ui-interactive);
        stroke-dashoffset: 143.76; /* 48 % */
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .spinner {
            animation-duration: 2s;
        }
    }

    /*
     * disabled (Carbon button mixin): button-disabled fill and border, text-on-color-disabled; tertiary kinds keep
     * the border on a clear fill, ghost kinds are clear. :host([…]) selectors so no kind's hover / active wins.
     */
    :host([disabled]) .button,
    :host([disabled]) .button:hover,
    :host([disabled]) .button:active,
    :host([disabled]) .button:focus,
    :host([disabled-focusable]) .button,
    :host([disabled-focusable]) .button:hover,
    :host([disabled-focusable]) .button:active,
    :host([disabled-focusable]) .button:focus,
    :host([loading]) .button,
    :host([loading]) .button:hover,
    :host([loading]) .button:active,
    :host([loading]) .button:focus {
        border-color: var(--ui-button-disabled);
        background-color: var(--ui-button-disabled);
        box-shadow: none;
        color: var(--ui-on-color-disabled);
        cursor: not-allowed;
    }
    :host([kind='tertiary'][disabled]) .button,
    :host([kind='tertiary'][disabled]) .button:hover,
    :host([kind='tertiary'][disabled]) .button:active,
    :host([kind='tertiary'][disabled]) .button:focus,
    :host([kind='tertiary'][disabled-focusable]) .button,
    :host([kind='tertiary'][disabled-focusable]) .button:hover,
    :host([kind='tertiary'][disabled-focusable]) .button:active,
    :host([kind='tertiary'][disabled-focusable]) .button:focus,
    :host([kind='tertiary'][loading]) .button,
    :host([kind='tertiary'][loading]) .button:hover,
    :host([kind='tertiary'][loading]) .button:active,
    :host([kind='tertiary'][loading]) .button:focus,
    :host([kind='danger-tertiary'][disabled]) .button,
    :host([kind='danger-tertiary'][disabled]) .button:hover,
    :host([kind='danger-tertiary'][disabled]) .button:active,
    :host([kind='danger-tertiary'][disabled]) .button:focus,
    :host([kind='danger-tertiary'][disabled-focusable]) .button,
    :host([kind='danger-tertiary'][disabled-focusable]) .button:hover,
    :host([kind='danger-tertiary'][disabled-focusable]) .button:active,
    :host([kind='danger-tertiary'][disabled-focusable]) .button:focus,
    :host([kind='danger-tertiary'][loading]) .button,
    :host([kind='danger-tertiary'][loading]) .button:hover,
    :host([kind='danger-tertiary'][loading]) .button:active,
    :host([kind='danger-tertiary'][loading]) .button:focus {
        background-color: transparent;
        color: var(--ui-ink-disabled);
    }
    :host([kind='ghost'][disabled]) .button,
    :host([kind='ghost'][disabled]) .button:hover,
    :host([kind='ghost'][disabled]) .button:active,
    :host([kind='ghost'][disabled]) .button:focus,
    :host([kind='ghost'][disabled-focusable]) .button,
    :host([kind='ghost'][disabled-focusable]) .button:hover,
    :host([kind='ghost'][disabled-focusable]) .button:active,
    :host([kind='ghost'][disabled-focusable]) .button:focus,
    :host([kind='ghost'][loading]) .button,
    :host([kind='ghost'][loading]) .button:hover,
    :host([kind='ghost'][loading]) .button:active,
    :host([kind='ghost'][loading]) .button:focus,
    :host([kind='danger-ghost'][disabled]) .button,
    :host([kind='danger-ghost'][disabled]) .button:hover,
    :host([kind='danger-ghost'][disabled]) .button:active,
    :host([kind='danger-ghost'][disabled]) .button:focus,
    :host([kind='danger-ghost'][disabled-focusable]) .button,
    :host([kind='danger-ghost'][disabled-focusable]) .button:hover,
    :host([kind='danger-ghost'][disabled-focusable]) .button:active,
    :host([kind='danger-ghost'][disabled-focusable]) .button:focus,
    :host([kind='danger-ghost'][loading]) .button,
    :host([kind='danger-ghost'][loading]) .button:hover,
    :host([kind='danger-ghost'][loading]) .button:active,
    :host([kind='danger-ghost'][loading]) .button:focus {
        border-color: transparent;
        background-color: transparent;
        color: var(--ui-ink-disabled);
    }
    /* a focusable disabled (or loading) button still shows where focus is */
    :host([disabled-focusable]) .button:focus,
    :host([loading]) .button:focus {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: var(--ui-focus-offset, -2px);
    }
    :host([disabled-focusable]) .button:focus:not(:focus-visible),
    :host([loading]) .button:focus:not(:focus-visible) {
        outline-color: var(--ui-pointer-focus, var(--ui-focus)); /* keyboard only in Kanok, as an enabled button */
        transition-property: background-color, box-shadow, border-color;
    }

    /* Carbon icon-only: a square the height of the button, icon centred (ui-icon-button) */
    :host([icon-only]) .button,
    :host([icon-only][kind='ghost']) .button,
    :host([icon-only][kind='danger-ghost']) .button {
        inline-size: var(--ui-button-height-lg, var(--ui-field-height-lg, 48px));
        min-inline-size: 0;
        padding-block: 0;
        padding-inline: 0;
        justify-content: center;
        gap: 0;
    }

    :host([icon-only][size='md']) .button {
        inline-size: var(--ui-field-height-md, 40px);
    }

    :host([icon-only][size='lg']) .button {
        inline-size: var(--ui-button-height-lg, var(--ui-field-height-lg, 48px));
    }

    :host([icon-only][size='sm']) .button {
        inline-size: var(--ui-field-height-sm, 32px);
    }

    /* Carbon btn--icon-only: a square of the layout height (layout.size('height')), xl and 2xl too */
    :host([icon-only][size='xl']) .button {
        inline-size: var(--ui-button-height-xl, 64px);
    }

    :host([icon-only][size='2xl']) .button {
        inline-size: var(--ui-button-height-2xl, 80px);
    }

    /* Carbon btn--icon-only.btn--ghost:focus: the 2px ring only, no focus-inset line */
    :host([icon-only][kind='ghost']) .button:focus {
        box-shadow: none;
    }

    /* not while disabled: the ghost's disabled grey (above) must win, as Carbon's btn--ghost:disabled */
    :host([icon-only][kind='ghost']:not([disabled], [disabled-focusable], [loading])) .button {
        color: var(--ui-icon-primary);
    }

    @media (forced-colors: active) {
        .button {
            border-color: ButtonText;
        }
        .spinner .track {
            stroke: GrayText;
        }
        .spinner .arc {
            stroke: CanvasText;
        }
        .button:focus {
            outline-color: Highlight;
        }
    }

    /* focused by its dialog right after a click (shared/quiet-focus): no keyboard ring in a design that sets --ui-pointer-focus */
    :host([data-quiet-focus]) .button:focus {
        outline-color: var(--ui-pointer-focus, var(--ui-focus));
    }
`,_=c`<svg class="spinner" viewBox="0 0 100 100"><circle class="track" cx="50%" cy="50%" r="42"></circle><circle class="arc" cx="50%" cy="50%" r="42"></circle></svg>`,v=class extends i{constructor(...e){super(...e),this.localize=new a(this),this.kind=`primary`,this.size=`lg`,this.disabled=!1,this.disabledFocusable=!1,this.type=`button`,this.fullWidth=!1,this.iconOnly=!1,this.label=``,this.description=``,this.dangerDescription=``,this.href=``,this.target=`_self`,this.loading=!1,this.loadingLabel=``,this.loadingPosition=`end`,this.loadingText=``,this.haspopup=``,this.descriptionId=d(`ui-button-desc`),this.dangerId=d(`ui-button-danger`),this.formControl=new f(this),this.slots=new p(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[s,g]}get variant(){return this.kind}set variant(e){this.kind=e,this.hasAttribute(`variant`)&&this.setAttribute(`variant`,e)}static get observedAttributes(){return[...super.observedAttributes,`variant`]}attributeChangedCallback(e,t,n){e===`variant`?n!==null&&(this.kind=n):super.attributeChangedCallback(e,t,n)}get form(){return this.internals.form}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}handleClick(e){if(this.isDisabled||this.disabledFocusable||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals.form;t&&(this.type===`submit`&&t.requestSubmit(),this.type===`reset`&&t.reset())}get busyPlace(){return h(this.loadingPosition,this.kind,this.iconOnly)}get busyInline(){return this.busyPlace===`start`&&!this.slots.has(`prefix`)}get busyClass(){if(!this.loading)return``;let e=this.busyPlace;return e===`center`?`hide-prefix hide-suffix`:e===`end`?this.slots.has(`suffix`)?`hide-suffix`:`busy-end`:this.busyInline?``:`hide-prefix`}renderLabel(){if(!this.loading||this.href||this.iconOnly)return l`<slot></slot>`;let e=this.busyPlace===`center`,t=this.busyInline||e;if(!t&&!this.loadingText)return l`<span class="label"><span class="label-text"><slot></slot></span></span>`;let n=this.renderBusy(t,e?`reserve`:``);return l`<span class="label replaced"><span class="label-text"><slot></slot></span>${n}</span>`}renderBusy(e,t=``){let r=this.loadingText?l`<span>${this.loadingText}</span>`:n;return l`<span class="busy ${t}" aria-hidden="true">${e?_:n}${r}</span>`}renderBusyMark(){let e=this.busyPlace;if(!this.loading||this.busyInline)return n;let t=e===`center`?this.renderBusy(!0):l`<span class="busy">${_}</span>`;return l`<span class="busy-mark ${e}" part="loading" aria-hidden="true">${t}</span>`}renderContent(){return l`
            <slot name="prefix" part="prefix"></slot>
            ${this.renderLabel()}
            <slot name="suffix" part="suffix"></slot>
            <slot name="badge-indicator"></slot>
        `}get hasDangerDescription(){return this.kind.startsWith(`danger`)&&!!this.dangerDescription}get describedBy(){let e=[this.hasDangerDescription?this.dangerId:``,this.description?this.descriptionId:``].filter(Boolean);return e.length?e.join(` `):n}renderHidden(e,t){return t?l`<span class="sr-only" id=${e}>${t}</span>`:n}renderDescription(){return[this.renderHidden(this.dangerId,this.hasDangerDescription?this.dangerDescription:``),this.renderHidden(this.descriptionId,this.description)]}get suffixClass(){return this.slots.has(`suffix`)?`has-suffix`:``}renderLink(){let e=this.target===`_blank`;return l`<a
            part="base"
            class="button ${this.isDisabled||this.disabledFocusable?`is-disabled`:``} ${this.suffixClass}"
            href=${this.isDisabled||this.disabledFocusable?n:this.href}
            target=${this.isDisabled||this.disabledFocusable?n:this.target}
            rel=${e?`noopener noreferrer`:n}
            role=${this.disabledFocusable?`link`:n}
            tabindex=${this.isDisabled&&!this.disabledFocusable?n:`0`}
            aria-disabled=${this.isDisabled||this.disabledFocusable?`true`:n}
            aria-label=${this.label||n}
            aria-describedby=${this.describedBy}
            @click=${u}
        >
            ${this.renderContent()}
        </a>`}renderButton(){return l`<button
            part="base"
            class="button ${this.suffixClass} ${this.busyClass}"
            type="button"
            tabindex="0"
            ?disabled=${this.isDisabled}
            aria-disabled=${this.loading||this.disabledFocusable?`true`:n}
            aria-pressed=${this.pressed===void 0?n:String(this.pressed)}
            aria-haspopup=${this.haspopup||n}
            aria-expanded=${this.haspopup||this.expanded!==void 0?String(!!this.expanded):n}
            aria-label=${this.label||n}
            aria-describedby=${this.describedBy}
            @click=${this.handleClick}
        >
            ${this.renderContent()}
            ${this.renderBusyMark()}
        </button>`}render(){return l`
            ${this.href?this.renderLink():this.renderButton()}
            ${this.renderDescription()}
            <span class="sr-only" role="status">${this.loading?this.loadingLabel||this.loadingText||this.localize.t.common.loading:``}</span>
        `}};t([e({type:String,reflect:!0})],v.prototype,`kind`,void 0),t([e({type:String,reflect:!0})],v.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],v.prototype,`disabled`,void 0),t([e({type:Boolean,reflect:!0,attribute:`disabled-focusable`})],v.prototype,`disabledFocusable`,void 0),t([e({type:String})],v.prototype,`type`,void 0),t([e({type:Boolean,reflect:!0,attribute:`full-width`})],v.prototype,`fullWidth`,void 0),t([e({type:Boolean,reflect:!0,attribute:`icon-only`})],v.prototype,`iconOnly`,void 0),t([e()],v.prototype,`label`,void 0),t([e()],v.prototype,`description`,void 0),t([e({attribute:`danger-description`})],v.prototype,`dangerDescription`,void 0),t([e()],v.prototype,`href`,void 0),t([e()],v.prototype,`target`,void 0),t([e({type:Boolean,reflect:!0})],v.prototype,`loading`,void 0),t([e({attribute:`loading-label`})],v.prototype,`loadingLabel`,void 0),t([e({attribute:`loading-position`,reflect:!0})],v.prototype,`loadingPosition`,void 0),t([e({attribute:`loading-text`})],v.prototype,`loadingText`,void 0),t([e({type:Boolean,reflect:!0})],v.prototype,`pressed`,void 0),t([e()],v.prototype,`haspopup`,void 0),t([e({type:Boolean,reflect:!0})],v.prototype,`expanded`,void 0),v=t([m(`ui-button`)],v);