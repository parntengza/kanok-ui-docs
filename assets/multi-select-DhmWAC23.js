import{$ as e,B as t,Ct as n,D as r,Et as i,I as a,J as o,L as s,Mt as c,N as l,O as u,Q as d,St as f,T as p,Tt as m,U as h,W as g,Y as _,_ as v,at as y,ct as b,et as x,j as S,kt as C,lt as w,nt as T,tt as E,ut as D,v as O,wt as k,xt as A,z as j}from"./theme-switcher-BZXGbHfR.js";import{a as M,c as N,i as P,l as ee,n as F,o as I,r as L,s as R,t as z}from"./listbox-CFmtgLSJ.js";import{t as B}from"./typeahead-CDCzrGcR.js";import{a as V,o as H,t as U}from"./listbox-gjElSjvA.js";import{a as W,i as G,n as K,o as q,r as J,s as Y,t as X}from"./multi-select-BIi7R0qk.js";var Z=c`
    :host {
        --_h: var(--ui-field-height-lg, 48px);

        display: block;
        font-family: var(--ui-font-family);
    }

    :host([size='sm']) {
        --_h: var(--ui-field-height-sm, 32px);
    }

    :host([size='md']) {
        --_h: var(--ui-field-height-md, 40px);
    }

    .field {
        position: relative;
    }

    .trigger {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: var(--ui-space-xs);
        width: 100%;
        height: var(--_h);
        margin: 0;
        padding: 0 calc(var(--ui-space-md) * 2 + 16px) 0 var(--ui-space-md);
        /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
        border: var(--ui-field-border, none);
        border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        text-align: start;
        cursor: pointer;
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
        transition:
            background-color var(--ui-duration-fast) var(--ui-easing),
            border-color var(--ui-duration-fast) var(--ui-easing),
            border-bottom-color var(--ui-duration-fast) var(--ui-easing),
            outline-color var(--ui-duration-fast) var(--ui-easing),
            box-shadow var(--ui-duration-fast) var(--ui-easing);
    }

    .trigger:hover {
        background-color: var(--ui-ghost-hover);
        border-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
        border-bottom-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
    }

    /* open, the field keeps its fill under the pointer (--ui-field-open-background; Carbon: the hover fill) */
    .trigger[aria-expanded='true']:hover {
        background-color: var(--ui-field-open-background, var(--ui-ghost-hover));
    }

    .trigger:focus,
    .trigger[aria-expanded='true'] {
        border-color: var(--ui-field-focus-border-color, inherit);
        border-bottom-color: var(--ui-field-focus-border-color, var(--ui-ink-subtle));
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    .trigger .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--ui-ink-muted);
    }

    .invalid .trigger {
        outline-color: var(--ui-error);
        box-shadow: var(--ui-field-invalid-halo, none); /* a design's error halo (Kanok: Pixiv's red ring) */
    }

    .invalid .trigger:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-invalid-halo, var(--ui-field-focus-halo, none)); /* an error keeps its halo while focused (Kanok: Pixiv's red) */
    }

    .trigger:disabled {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
        background-color: var(--ui-field-background, var(--ui-surface-1));
    }

    :host([readonly]) .trigger {
        background-color: var(--ui-field-readonly-background, transparent);
        border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
        cursor: default;
    }

    /* Count tag (Carbon list-box__selection--multi): number + clear-all button */
    .tag {
        position: absolute;
        inset-block: 0;
        inset-inline-start: var(--ui-space-md);
        display: flex;
        align-items: center;
        height: 24px;
        margin-block: auto;
        padding-inline-start: var(--ui-space-xs);
        border-radius: var(--ui-radius-pill);
        /* Carbon: an inverse (ink) pill; a design can soften it (--ui-count-tag-*, Kanok: link-coloured text on the highlight) */
        background-color: var(--ui-count-tag-background, var(--ui-ink));
        color: var(--ui-count-tag-ink, var(--ui-inverse-ink));
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
    }

    .tag button {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        padding: 0;
        border: none;
        border-radius: var(--ui-radius-pill);
        background: transparent;
        color: inherit;
        cursor: pointer;
        transition: background-color var(--ui-duration-fast) var(--ui-easing); /* Carbon tag__close-icon */
    }

    .tag button:hover {
        background-color: var(--ui-count-tag-hover, var(--ui-secondary-hover));
    }

    .tag button:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: var(--ui-focus-offset, -2px);
    }

    .tag svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    .has-tag .trigger {
        padding-inline-start: calc(var(--ui-space-md) + 48px + var(--ui-space-xs));
    }

    :host([readonly]) .tag button,
    .trigger:disabled ~ .tag button,
    .filterable.disabled .tag button {
        display: none;
    }

    :host([readonly]) .tag,
    .trigger:disabled ~ .tag,
    .filterable.disabled .tag {
        padding-inline-end: var(--ui-space-xs);
    }

    .icons {
        position: absolute;
        inset-block: 0;
        inset-inline-end: var(--ui-space-md); /* Carbon list-box menu icon: 24px box 12px from the end, so the 16px glyph is 16px from it */
        display: flex;
        align-items: center;
        gap: var(--ui-space-xs);
        pointer-events: none;
    }

    .chevron {
        width: 16px;
        height: 16px;
        fill: var(--ui-ink);
        transition: transform var(--ui-duration-fast) var(--ui-easing);
    }

    .open .chevron {
        transform: rotate(180deg);
    }

    :host([readonly]) .chevron {
        fill: var(--ui-ink-subtle);
    }

    .trigger:disabled ~ .icons .chevron {
        fill: var(--ui-ink-disabled);
    }

    .has-status .trigger {
        padding-inline-end: 64px; /* Carbon list-box field with a status icon */
    }

    /* checkbox inside a row */
    .box {
        position: relative;
        display: block;
        flex: none;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        margin-inline-end: 22px; /* Carbon multiselect row: 28px label inset + 10px text inset − 16px box */
        /* the checkbox settings (--ui-checkbox-*), as <ui-checkbox> */
        border: 1px solid var(--ui-checkbox-border, var(--ui-ink));
        border-radius: var(--ui-radius-xs);
        background-color: transparent;
    }

    /* a two-line row: Carbon centres the box on both lines; a design can pin it to the label (--ui-option-box-*) */
    .option:has(.two-line) .box {
        align-self: var(--ui-option-box-align, auto);
        margin-block-start: var(--ui-option-box-offset, 0px);
    }

    /* Carbon's check mark: a 9×5 L of 1.5px borders rotated −45° about its bottom-right corner (checkbox.scss ::after) */
    .box::after {
        content: '';
        position: absolute;
        /* Carbon frame: box at 3px from the label, mark at 7px → 4px / 0.5px from the box edge; our frame is the 1px-bordered box, hence 3 / -0.5 */
        top: -0.5px;
        inset-inline-start: 3px;
        box-sizing: border-box;
        width: 9px;
        height: 5px;
        border-bottom: 1.5px solid var(--ui-checkbox-mark, var(--ui-icon-inverse));
        border-left: 1.5px solid var(--ui-checkbox-mark, var(--ui-icon-inverse));
        transform: scale(0) rotate(-45deg);
        transform-origin: bottom right;
    }

    .option[aria-selected='true'] .box,
    .option.mixed .box {
        background-color: var(--ui-checkbox-checked, var(--ui-ink));
        border-color: var(--ui-checkbox-checked, var(--ui-ink));
    }

    .option[aria-selected='true'] .box::after {
        transform: scale(1) rotate(-45deg);
    }

    .option.mixed .box::after {
        top: 4px; /* Carbon indeterminate: 8px bar, 2px thick, 11px − 3px margin from the label */
        inset-inline-start: 3px;
        width: 8px;
        border-left-width: 0;
        border-bottom-width: 2px;
        transform: scale(1) rotate(0deg);
    }

    .option[aria-disabled='true'] .box {
        border-color: var(--ui-ink-disabled);
    }

    .select-all {
        border-bottom: 1px solid var(--ui-hairline);
    }

    /*
     * filterable (Carbon cds--multi-select--filterable, measured on web-components.carbondesignsystem.com):
     * the count tag 16px from the start, the text 8px after it; × and chevron as ComboBox.
     */
    .filterable {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: var(--_h);
        border: var(--ui-field-border, none); /* the field settings, as the other boxes */
        border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
        border-radius: var(--ui-field-radius, 0);
        background-color: var(--ui-field-background, var(--ui-surface-1));
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
        transition:
            border-color var(--ui-duration-fast) var(--ui-easing),
            border-bottom-color var(--ui-duration-fast) var(--ui-easing),
            outline-color var(--ui-duration-fast) var(--ui-easing),
            box-shadow var(--ui-duration-fast) var(--ui-easing);
    }

    .filterable:hover {
        background-color: var(--ui-ghost-hover);
        border-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
        border-bottom-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
    }

    .filterable.open:hover {
        background-color: var(--ui-field-open-background, var(--ui-ghost-hover));
    }

    .filterable:focus-within,
    .filterable.open {
        border-color: var(--ui-field-focus-border-color, inherit);
        border-bottom-color: var(--ui-field-focus-border-color, var(--ui-ink-subtle));
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    .filterable.invalid {
        outline-color: var(--ui-error);
        box-shadow: var(--ui-field-invalid-halo, none); /* a design's error halo (Kanok: Pixiv's red ring) */
    }

    .filterable.invalid:focus-within {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-invalid-halo, var(--ui-field-focus-halo, none)); /* an error keeps its halo while focused (Kanok: Pixiv's red) */
    }

    .filterable .tag {
        position: static;
        flex: none;
        margin-inline: var(--ui-space-md) var(--ui-space-xs);
    }

    .filterable input {
        box-sizing: border-box;
        flex: 1;
        min-width: 0;
        height: 100%;
        margin: 0;
        padding: 0 48px 0 var(--ui-space-md);
        border: none;
        background: transparent;
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        font-size: var(--ui-field-font-size, 14px);
        letter-spacing: var(--ui-tracking-body);
        outline: none;
    }

    .filterable.has-tag input {
        padding-inline-start: 0;
    }

    /* room for × and the status icon as ui-combobox (the rule above would keep 48px and let text run under them) */
    .filterable.has-clear input {
        padding-inline-end: 70px;
    }

    .filterable.has-status input {
        padding-inline-end: 64px;
    }

    .filterable.has-status.has-clear input {
        padding-inline-end: 105px;
    }

    .filterable input::placeholder {
        color: var(--ui-ink-placeholder);
        opacity: 1;
    }

    .filterable.disabled {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        background-color: var(--ui-field-background, var(--ui-surface-1));
    }

    .filterable input:disabled {
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
    }

    :host([readonly]) .filterable {
        background-color: var(--ui-field-readonly-background, transparent);
        border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
    }

    @media (forced-colors: active) {
        .trigger,
        .filterable {
            border: 1px solid FieldText;
        }
        .trigger:focus,
        .filterable:focus-within {
            outline-color: Highlight;
        }
        .chevron,
        .tag svg {
            fill: FieldText;
        }
        .box {
            border-color: FieldText;
        }
        .option[aria-selected='true'] .box,
        .option.mixed .box {
            forced-color-adjust: none;
            background-color: Highlight;
            border-color: Highlight;
        }
    }
`,Q=c`
    /* the 64px box is the field's; the open list keeps its rows (--_h), not Carbon's 64px fluid rows (user's choice) */
    :host([data-fluid]) .trigger,
    :host([data-fluid]) .has-status .trigger,
    :host([data-fluid]) .filterable {
        height: 64px;
    }

    :host([data-fluid]) .trigger,
    :host([data-fluid]) .has-status .trigger {
        padding: 33px 48px 13px var(--ui-space-md);
    }

    :host([data-fluid]) .has-tag .trigger {
        padding-inline-start: calc(var(--ui-space-md) + 48px + var(--ui-space-xs));
    }

    /* the count tag on the value's line */
    :host([data-fluid]) .tag {
        inset-block: 30px auto;
        margin-block: 0;
    }

    :host([data-fluid]) .filterable {
        align-items: flex-start;
    }

    :host([data-fluid]) .filterable input {
        padding-block: 33px 13px;
        padding-inline-end: 64px;
    }

    :host([data-fluid]) .filterable.has-clear input {
        padding-inline-end: 96px;
    }

    :host([data-fluid]) .filterable .tag {
        margin-block-start: 30px;
    }

    /* Carbon fluid multi-select: the chevron 34px down, 12px from the end */
    :host([data-fluid]) .icons {
        inset-inline-end: var(--ui-space-sm);
        --ui-fluid-icon-end: 4px;
        align-items: flex-start;
        padding-block-start: 34px;
    }
`,$=class extends u{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=[],this.name=``,this.size=`md`,this.direction=`bottom`,this.selectionFeedback=`top-after-reopen`,this.selectAll=!1,this.filterable=!1,this.filter=`contains`,this.loading=!1,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.groups=[],this.options=[],this.open=!1,this.activeIndex=-1,this.touched=!1,this.formControl=new D(this,{reveal:()=>this.touched=!0}),this.pinned=[],this.text=``,this.customValidityMessage=``,this.localize=new p(this),this.fieldId=w(`ui-multi-select`),this.defaultValue=[],this.typed=new B,this.reposition=()=>this.position(),this.onDocumentPointerDown=e=>{let t=e.composedPath();t.includes(this.menu)||t.includes(this.field)||(this.filterable?this.closeAndClearText():this.close())},this.onTagButtonMousedown=e=>{this.filterable&&e.preventDefault()},this.slots=new O(this)}static{this.hostStates=[`open`,`show-error`,`show-warn`,`has-value`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,y,M,L,P,Z,g,Q]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}get inputValue(){return this.text}set inputValue(e){this.text=e}connectedCallback(){super.connectedCallback(),b(this,this.fluid),this.readOptions(),this.formControl.captureDefaults(()=>{this.value.length===0&&(this.value=[...this.querySelectorAll(`option`)].filter(e=>e.hasAttribute(`selected`)).map(e=>e.value)),this.defaultValue=[...this.value]}),this.observer??=new MutationObserver(e=>{e.some(e=>e.type!==`attributes`||e.target!==this)&&this.readOptions()}),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeMenuListeners()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=[...this.defaultValue],this.text=``,this.touched=!1}formStateRestoreCallback(e){e instanceof FormData&&(this.value=e.getAll(this.name).map(String))}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get messages(){return this.localize.t.list}isChosen(e){return this.value.includes(e.value)}get filtering(){return this.filterable&&this.filter!==`none`&&this.text.trim()!==``}isShown(e){return!this.filtering||V(e.label,this.text,this.filter)}get shownGroups(){return this.filtering?U(this.groups,e=>this.isShown(e)):this.groups}get rows(){if(this.loading)return[];let e=F(this.groups),t=e?z(this.shownGroups):this.options.filter(e=>this.isShown(e));return G(t,this.value,this.pinned,this.selectionFeedback,e)}get enabledOptions(){return this.options.filter(e=>!e.disabled&&this.isShown(e))}get showSelectAll(){return this.selectAll&&!this.loading&&this.enabledOptions.length>0}get selectAllState(){return W(this.enabledOptions,this.value)}willUpdate(e){b(this,this.fluid),this.syncValidity(),this.open&&e.has(`loading`)&&e.get(`loading`)!==void 0&&(this.activeIndex=this.reconciled([]))}updated(e){e.has(`open`)?(this.open&&v(this),this.onOpenChanged(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))):this.open&&(e.has(`activeIndex`)||e.has(`text`)||e.has(`options`))&&(this.position(),this.scrollActiveIntoView()),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`),this.toggleAttribute(`data-has-value`,this.value.length>0)}syncValidity(){if(j(this.internals,this.isDisabled))return;let e=new FormData;for(let t of this.value)e.append(this.name,t);this.internals.setFormValue(this.isDisabled||!this.name?null:e);let n=this.input??this.trigger??void 0,r=t(this.invalid,this.invalidText,this.customValidityMessage);r?this.internals.setValidity({customError:!0},r,n):this.required&&this.value.length===0?this.internals.setValidity({valueMissing:!0},this.messages.required,n):this.internals.setValidity({})}readOptions(){let e=this.rows;this.groups=I(this),this.options=z(this.groups),this.open&&(this.activeIndex=this.reconciled(e))}reconciled(e){return this.activeIndex===-2&&this.showSelectAll&&!this.loading?-2:H(this.rows,e,this.activeIndex===-2?-1:this.activeIndex,{open:!0,loading:this.loading,same:ee,opening:()=>this.firstEnabled()})}renderRows(){let e=this.messages;return this.loading?C`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${this.filterable?e.searching:e.loadingOptions}</li>`:this.filterable&&this.rows.length===0?C`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${e.noResults}</li>`:F(this.groups)?R(this.shownGroups,this.fieldId,(e,t)=>this.renderRow(e,t)):this.rows.map((e,t)=>this.renderRow(e,t))}get statusText(){return this.open?this.loading?this.filterable?this.messages.searching:this.messages.loadingOptions:this.filterable&&this.rows.length===0?this.messages.noResults:``:``}openMenu(e){this.interactive&&!this.open&&(this.pinned=[...this.value],this.activeIndex=e??this.firstEnabled(),this.open=!0)}close(){this.open=!1,this.activeIndex=-1}closeAndClearText(){this.close(),this.resetText()}resetText(){this.text!==``&&(this.text=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.emitTyping())}emitTyping(){this.dispatchEvent(new CustomEvent(`ui-input`,{detail:{value:this.text},bubbles:!0,composed:!0}))}toggle(){this.open?this.close():this.openMenu(this.value.length>0?void 0:-1)}onOpenChanged(){this.open?(this.menu.showPopover(),this.position(),this.scrollActiveIntoView(),this.stopTracking=s(this.field,this.menu,this.reposition),this.stopOutside=l(document,this.onDocumentPointerDown)):(this.menu.matches(`:popover-open`)&&this.menu.hidePopover(),this.removeMenuListeners())}removeMenuListeners(){this.stopTracking?.(),this.stopOutside?.(),this.stopTracking=this.stopOutside=void 0}position(){this.menu.matches(`:popover-open`)&&(this.menu.style.width=`${this.field.getBoundingClientRect().width}px`,S(this.field,this.menu,`${this.direction}-start`,0,{size:!0}))}scrollActiveIntoView(){let e=this.menu.querySelector(`.option.active`);e&&a(e,this.menu)}onTriggerFocusOut(){this.open&&this.close(),this.touched=!0}setValue(e){this.touched=!0,this.value=e,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}toggleOption(e){e&&!e.disabled&&this.setValue(Y(this.value,e))}toggleSelectAll(){this.setValue(q(this.value,this.enabledOptions))}toggleActive(){this.activeIndex===-2?this.toggleSelectAll():this.toggleOption(this.rows[this.activeIndex])}clearAll(){this.value.length>0&&this.setValue([]),(this.input??this.trigger)?.focus()}firstEnabled(){return K(this.rows,this.showSelectAll)}onTriggerKeydown(e){if(!this.interactive)return;let t=J({open:this.open,active:this.activeIndex,hasValue:this.value.length>0},this.rows,this.showSelectAll,e,this.typed);t&&(t.handled&&e.preventDefault(),this.apply(t))}apply(e){e.clearAll&&this.setValue([]),e.clearText&&this.resetText(),e.toggle!==void 0&&(this.activeIndex=e.toggle,this.toggleActive()),e.close?this.close():e.open&&!this.open?this.openMenu(e.active):e.active!==void 0&&(this.activeIndex=e.active)}onFilterKeydown(e){if(!this.interactive)return;let t=X({open:this.open,active:this.activeIndex,hasValue:this.value.length>0},this.rows,this.showSelectAll,e);t&&(t.handled&&e.preventDefault(),this.apply(t))}onFilterInput(){this.text=this.input?.value??``,this.emitTyping(),this.interactive&&(this.open?this.activeIndex=this.firstEnabled():this.openMenu())}onFilterClick(){this.open||this.openMenu(this.value.length>0?void 0:-1)}onToggleClick(){this.open?this.closeAndClearText():this.openMenu(this.value.length>0?void 0:-1),this.input?.focus()}clearText(){this.resetText(),this.input?.focus(),this.open&&(this.activeIndex=this.firstEnabled())}onFilterFocusOut(e){e.relatedTarget instanceof Node&&this.shadowRoot.contains(e.relatedTarget)||(this.closeAndClearText(),this.touched=!0)}renderBox(){return C`<span class="box" part="checkbox" aria-hidden="true">
        </span>`}renderSelectAllRow(){if(!this.showSelectAll)return i;let e=this.selectAllState;return C`<li
            id="${this.fieldId}-opt-all"
            class="option select-all ${this.activeIndex===-2?`active`:``} ${e===`some`?`mixed`:``}"
            part="option select-all"
            role="option"
            aria-selected=${e===`all`?`true`:`false`}
            aria-checked=${e===`some`?`mixed`:i}
            @click=${()=>{this.activeIndex=-2,this.toggleSelectAll()}}
        >
            ${this.renderBox()}
            <span class="text">${this.messages.selectAll}</span>
        </li>`}renderRow(e,t){return C`<li
            id="${this.fieldId}-opt-${t}"
            class="option ${t===this.activeIndex?`active`:``}"
            part="option"
            role="option"
            aria-selected=${this.isChosen(e)?`true`:`false`}
            aria-disabled=${e.disabled?`true`:i}
            @click=${()=>{e.disabled||(this.activeIndex=t),this.toggleOption(e)}}
        >
            ${this.renderBox()}
            ${N(e)}
        </li>`}renderTag(){let e=this.value.length;if(e===0)return i;let t=this.messages;return C`<span class="tag" part="tag">
            <span aria-hidden="true">${e}</span>
            <span class="sr-only" id="${this.fieldId}-count">${t.selectedCount(e)}</span>
            <button
                type="button"
                part="clear-button"
                tabindex="-1"
                aria-label=${t.clearAll}
                ?disabled=${!this.interactive}
                @mousedown=${this.onTagButtonMousedown}
                @click=${this.clearAll}
            >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
                </svg>
            </button>
        </span>`}renderLabel(){let e=!this.label&&!this.slots.has(`label`),t=e?this.formControl.fallbackName(this.label,this.internals):``;return e&&!t?i:C`<span class=${this.hideLabel||e?`sr-only`:`label`} part="label" id="${this.fieldId}-label">${x(this.label,t)}</span>`}activeId(){return!this.open||this.activeIndex===-1?i:this.activeIndex===-2?`${this.fieldId}-opt-all`:`${this.fieldId}-opt-${this.activeIndex}`}describedBy(e){let t=[this.value.length>0?`${this.fieldId}-count`:``,_(this.fieldId,e)??``].filter(Boolean);return t.length?t.join(` `):i}renderTrigger(e,t){return C`<button
                class="trigger"
                part="input"
                type="button"
                tabindex="0"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls="${this.fieldId}-list"
                aria-activedescendant=${this.activeId()}
                aria-labelledby="${this.fieldId}-label ${this.fieldId}-value"
                aria-readonly=${this.readonly?`true`:i}
                aria-required=${this.required?`true`:i}
                aria-invalid=${e?`true`:`false`}
                aria-describedby=${this.describedBy(t)}
                ?disabled=${this.isDisabled}
                @click=${this.toggle}
                @keydown=${this.onTriggerKeydown}
                @focusout=${this.onTriggerFocusOut}
            >
                <span class="text" id="${this.fieldId}-value">${this.placeholder}</span>
            </button>
            ${this.renderTag()}
            <span class="icons" aria-hidden="true">
                ${T(t)}
                <svg class="chevron" part="chevron" viewBox="0 0 16 16"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </span>`}renderFilterField(e,t){let n=this.messages;return C`${this.renderTag()}
            <input
                part="input"
                type="text"
                role="combobox"
                autocomplete="off"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls="${this.fieldId}-list"
                aria-activedescendant=${this.activeId()}
                aria-labelledby="${this.fieldId}-label"
                aria-required=${this.required?`true`:i}
                aria-invalid=${e?`true`:`false`}
                aria-describedby=${this.describedBy(t)}
                placeholder=${this.placeholder||i}
                .value=${this.text}
                ?disabled=${this.isDisabled}
                ?readonly=${this.readonly}
                @input=${this.onFilterInput}
                @keydown=${this.onFilterKeydown}
                @click=${this.onFilterClick}
            />
            <span class="controls" @mousedown=${e=>e.preventDefault()}>
                <span class="status">${T(t)}</span>
                ${this.renderClearText()}
                <button
                    class="toggle"
                    part="toggle"
                    type="button"
                    tabindex="-1"
                    aria-label=${this.open?n.closeList:n.openList}
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls="${this.fieldId}-list"
                    ?disabled=${!this.interactive}
                    @click=${this.onToggleClick}
                >
                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                </button>
            </span>`}renderClearText(){return this.showClearText?C`<button class="clear" part="clear-filter-button" type="button" tabindex="-1" aria-label=${this.messages.clear} @click=${this.clearText}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
        </button>`:i}get showClearText(){return this.filterable&&this.interactive&&this.text!==``}fieldClasses(e,t){return[e?`invalid`:``,t&&t.kind!==`helper`?`has-status`:``,this.value.length>0?`has-tag`:``,this.open?`open`:``,this.filterable?`filterable`:``,this.showClearText?`has-clear`:``,this.filterable&&this.isDisabled?`disabled`:``].filter(Boolean).join(` `)}get showError(){return this.interactive&&(this.invalid||this.touched&&!this.internals.validity.valid)}get fieldMessage(){return e({showError:this.showError,errorText:d(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots})}render(){let e=this.showError,t=this.fieldMessage;o(this,t);let n=this.fieldClasses(e,t);return C`
            ${this.renderLabel()}
            <div class="field ${n}" part="base" @focusout=${this.filterable?this.onFilterFocusOut:i}>
                ${this.filterable?this.renderFilterField(e,t):this.renderTrigger(e,t)}
            </div>
            ${E(this.fieldId,t)}
            <ul
                class="menu"
                part="menu"
                id="${this.fieldId}-list"
                popover="manual"
                role="listbox"
                tabindex="-1"
                aria-multiselectable="true"
                aria-labelledby="${this.fieldId}-label"
                aria-busy=${this.loading?`true`:i}
                @mousedown=${e=>e.preventDefault()}
            >
                ${this.open?C`${this.renderSelectAllRow()}${this.renderRows()}`:i}
            </ul>
            <span class="sr-only" role="status">${this.statusText}</span>
        `}};r([n()],$.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],$.prototype,`hideLabel`,void 0),r([n({attribute:`helper-text`})],$.prototype,`helperText`,void 0),r([n({attribute:`invalid-text`})],$.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`invalid`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],$.prototype,`warnText`,void 0),r([n()],$.prototype,`placeholder`,void 0),r([n({attribute:!1})],$.prototype,`value`,void 0),r([n({reflect:!0})],$.prototype,`name`,void 0),r([n({reflect:!0})],$.prototype,`size`,void 0),r([n()],$.prototype,`direction`,void 0),r([n({attribute:`selection-feedback`})],$.prototype,`selectionFeedback`,void 0),r([n({type:Boolean,attribute:`select-all`})],$.prototype,`selectAll`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`filterable`,void 0),r([n()],$.prototype,`filter`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`loading`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`required`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`readonly`,void 0),r([n({type:Boolean,reflect:!0})],$.prototype,`fluid`,void 0),r([f()],$.prototype,`groups`,void 0),r([f()],$.prototype,`options`,void 0),r([f()],$.prototype,`open`,void 0),r([f()],$.prototype,`activeIndex`,void 0),r([f()],$.prototype,`touched`,void 0),r([f()],$.prototype,`pinned`,void 0),r([f()],$.prototype,`text`,void 0),r([A(`.trigger`)],$.prototype,`trigger`,void 0),r([A(`input`)],$.prototype,`input`,void 0),r([A(`.field`)],$.prototype,`field`,void 0),r([A(`.menu`)],$.prototype,`menu`,void 0),$=r([k(`ui-multi-select`)],$);