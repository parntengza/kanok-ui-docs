import{$ as e,B as t,Ct as n,D as r,Et as i,I as a,J as o,L as s,Mt as c,N as l,O as u,Q as d,St as f,T as p,Tt as m,U as h,W as g,Y as _,_ as v,at as y,ct as b,et as x,j as S,kt as C,lt as w,nt as T,rt as E,tt as D,ut as O,v as k,wt as A,xt as j,z as M}from"./theme-switcher-BZXGbHfR.js";import{a as N,c as P,i as F,l as I,o as L,s as R,t as z}from"./listbox-CFmtgLSJ.js";import{t as B}from"./typeahead-CDCzrGcR.js";import{o as V}from"./listbox-gjElSjvA.js";import{n as H,t as U}from"./dropdown-CQ1UJRpG.js";var W=c`
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

    .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .placeholder .text {
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

    /* Carbon inline dropdown (measured on react.carbondesignsystem.com): label, field and message in one row */
    :host([inline]) {
        display: inline-grid;
        grid-template-columns: auto auto auto;
        justify-content: start;
        align-items: center;
        column-gap: var(--ui-space-xs);
    }

    :host([inline]) .label {
        margin-bottom: 0;
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
    }

    :host([inline]) .trigger {
        width: auto;
        min-width: 0;
        background-color: transparent;
        border-color: var(--ui-field-inline-border-color, currentColor currentColor transparent);
    }

    :host([inline]) .trigger:hover {
        background-color: var(--ui-ghost-hover);
    }

    :host([inline]) .has-status .trigger {
        padding-inline-end: 64px;
    }

    :host([inline]) .icons {
        inset-inline-end: var(--ui-space-md);
    }

    /* the error / warning sits after the field; Carbon's inline dropdown has no helper line */
    :host([inline]) .warn,
    :host([inline]) .error {
        margin: 0;
    }

    :host([inline]) .helper {
        display: none;
    }

    @media (forced-colors: active) {
        .trigger {
            border: 1px solid FieldText;
        }
        .trigger:focus {
            outline-color: Highlight;
        }
        .chevron {
            fill: FieldText;
        }
    }
`,G=c`
    /* the 64px box is the field's; the open list keeps its rows (--_h), not Carbon's 64px fluid rows (user's choice) */
    :host([data-fluid]) .trigger,
    :host([data-fluid]) .has-status .trigger {
        height: 64px;
        padding: 33px 48px 13px var(--ui-space-md);
    }

    /* Carbon fluid dropdown: the chevron 34px down, 16px from the end */
    :host([data-fluid]) .icons {
        align-items: flex-start;
        padding-block-start: 34px;
        inset-inline-end: var(--ui-space-md);
    }
`,K=class extends u{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.direction=`bottom`,this.disabled=!1,this.required=!1,this.readonly=!1,this.loading=!1,this.fluid=!1,this.inline=!1,this.groups=[],this.options=[],this.open=!1,this.activeIndex=-1,this.touched=!1,this.formControl=new O(this,{reveal:()=>this.touched=!0}),this.customValidityMessage=``,this.localize=new p(this),this.fieldId=w(`ui-dropdown`),this.defaultValue=``,this.typed=new B,this.reposition=()=>this.position(),this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this.menu)&&!t.includes(this.trigger)&&this.close()},this.slots=new k(this)}static{this.hostStates=[`open`,`show-error`,`show-warn`,`placeholder`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,y,N,F,W,g,G]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}connectedCallback(){super.connectedCallback(),b(this,this.fluid),this.formControl.captureDefaults(()=>{!this.value&&!this.hasAttribute(`value`)&&(this.value=E(this)??``),this.defaultValue=this.value}),this.readOptions(),this.observer??=new MutationObserver(e=>{e.some(e=>e.type!==`attributes`||e.target!==this)&&this.readOptions()}),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeMenuListeners()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get selectedIndex(){return this.options.findIndex(e=>e.value===this.value)}willUpdate(e){if(b(this,this.fluid),this.syncValidity(),this.open&&(e.has(`options`)||e.has(`loading`))){let t=e.has(`loading`)?e.get(`loading`)===!0:this.loading,n=t?[]:e.get(`options`)??this.options;this.activeIndex=V(this.listed,n,this.activeIndex,{open:!0,loading:this.loading,arrived:t&&!this.loading,same:I,opening:e=>H(e,this.selectedIndex)})}}updated(e){e.has(`open`)?(this.open&&v(this),this.onOpenChanged(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))):this.open&&e.has(`activeIndex`)&&this.scrollActiveIntoView(),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`),this.toggleAttribute(`data-placeholder`,!this.options[this.selectedIndex])}get listed(){return this.loading?[]:this.options}get unmatched(){return!!this.value&&this.options.length>0&&!this.loading&&this.selectedIndex<0}syncValidity(){if(M(this.internals,this.isDisabled))return;let e=this.unmatched;this.internals.setFormValue(e?``:this.value);let n=this.trigger??void 0,r=t(this.invalid,this.invalidText,this.customValidityMessage);r?this.internals.setValidity({customError:!0},r,n):this.required&&(!this.value||e)?this.internals.setValidity({valueMissing:!0},this.localize.t.list.required,n):this.internals.setValidity({})}readOptions(){this.groups=L(this),this.options=z(this.groups)}openMenu(e){if(!this.interactive||this.open)return;let t=this.loading?-1:e??H(this.options,this.selectedIndex);this.activeIndex=t,this.open=!0}close(){this.open=!1,this.activeIndex=-1}toggle(){this.open?this.close():this.openMenu(this.selectedIndex)}onOpenChanged(){this.open?(this.menu.showPopover(),this.position(),this.scrollActiveIntoView(),this.stopTracking=s(this.trigger,this.menu,this.reposition),this.stopOutside=l(document,this.onDocumentPointerDown)):(this.menu.matches(`:popover-open`)&&this.menu.hidePopover(),this.removeMenuListeners())}removeMenuListeners(){this.stopTracking?.(),this.stopOutside?.(),this.stopTracking=this.stopOutside=void 0}position(){this.menu.style.width=`${this.trigger.getBoundingClientRect().width}px`,S(this.trigger,this.menu,`${this.direction}-start`,0,{size:!0})}scrollActiveIntoView(){let e=this.menu.querySelector(`.option.active`);e&&a(e,this.menu)}onTriggerFocusOut(){this.open&&this.close()}selectIndex(e){let t=this.options[e];t&&!t.disabled&&(this.touched=!0,t.value!==this.value&&(this.value=t.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))))}onTriggerKeydown(e){if(!this.interactive)return;let t=U({open:this.open,active:this.activeIndex,selected:this.selectedIndex},this.listed,e,this.typed);t&&(t.handled&&e.preventDefault(),this.apply(t))}apply(e){e.pick!==void 0&&this.selectIndex(e.pick),e.open?this.open?this.activeIndex=e.active:this.openMenu(e.active):this.close()}get busy(){return this.loading?`true`:i}get statusText(){return this.open&&this.loading?this.localize.t.list.loadingOptions:``}renderRows(){return this.loading?C`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${this.localize.t.list.loadingOptions}</li>`:R(this.groups,this.fieldId,(e,t)=>this.renderOption(e,t))}renderOption(e,t){let n=e.value===this.value,r=[`option`,t===this.activeIndex?`active`:``].join(` `);return C`<li
            id="${this.fieldId}-opt-${t}"
            class=${r}
            part="option"
            role="option"
            aria-selected=${n?`true`:`false`}
            aria-disabled=${e.disabled?`true`:i}
            @click=${()=>this.onOptionClick(t)}
        >
            ${P(e)}
            ${n?this.renderCheck():i}
        </li>`}renderCheck(){return C`<svg class="check" viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6.5 12.5-4-4 .7-.7 3.3 3.3 7.3-7.3.7.7z" />
        </svg>`}onOptionClick(e){this.selectIndex(e),this.close()}renderLabel(){let e=!this.label&&!this.slots.has(`label`),t=e?this.formControl.fallbackName(this.label,this.internals):``;return e&&!t?i:C`<span class=${this.hideLabel||e?`sr-only`:`label`} part="label" id="${this.fieldId}-label">${x(this.label,t)}</span>`}get showError(){return this.interactive&&(this.invalid||this.touched&&!this.internals.validity.valid)}get fieldMessage(){return e({showError:this.showError,errorText:d(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots})}render(){let e=this.showError,t=this.fieldMessage;o(this,t);let n=this.options[this.selectedIndex],r=[e?`invalid`:``,t&&t.kind!==`helper`?`has-status`:``,n?``:`placeholder`,this.open?`open`:``].filter(Boolean).join(` `),a=this.open&&this.activeIndex>=0?`${this.fieldId}-opt-${this.activeIndex}`:i;return C`
            ${this.renderLabel()}
            <div class="field ${r}" part="base">
                <button
                    class="trigger"
                    part="input"
                    type="button"
                    tabindex="0"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls="${this.fieldId}-list"
                    aria-activedescendant=${a}
                    aria-labelledby="${this.fieldId}-label ${this.fieldId}-value"
                    aria-readonly=${this.readonly?`true`:i}
                    aria-required=${this.required?`true`:i}
                    aria-invalid=${e?`true`:`false`}
                    aria-describedby=${_(this.fieldId,t)??i}
                    ?disabled=${this.isDisabled}
                    @click=${this.toggle}
                    @keydown=${this.onTriggerKeydown}
                    @focusout=${this.onTriggerFocusOut}
                    @blur=${()=>this.touched=!0}
                >
                    <span class="text" id="${this.fieldId}-value">${n?.label??this.placeholder}</span>
                </button>
                <span class="icons" aria-hidden="true">
                    ${T(t)}
                    <svg class="chevron" part="chevron" viewBox="0 0 16 16"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                </span>
            </div>
            ${D(this.fieldId,t)}
            <ul
                class="menu"
                part="menu"
                id="${this.fieldId}-list"
                popover="manual"
                role="listbox"
                tabindex="-1"
                aria-labelledby="${this.fieldId}-label"
                aria-busy=${this.busy}
                @mousedown=${e=>e.preventDefault()}
            >
                ${this.open?this.renderRows():i}
            </ul>
            <span class="sr-only" role="status">${this.statusText}</span>
        `}};r([n()],K.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],K.prototype,`hideLabel`,void 0),r([n({attribute:`helper-text`})],K.prototype,`helperText`,void 0),r([n({attribute:`invalid-text`})],K.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`invalid`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],K.prototype,`warnText`,void 0),r([n()],K.prototype,`placeholder`,void 0),r([n()],K.prototype,`value`,void 0),r([n({reflect:!0})],K.prototype,`name`,void 0),r([n({reflect:!0})],K.prototype,`size`,void 0),r([n()],K.prototype,`direction`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`required`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`readonly`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`fluid`,void 0),r([n({type:Boolean,reflect:!0})],K.prototype,`inline`,void 0),r([f()],K.prototype,`groups`,void 0),r([f()],K.prototype,`options`,void 0),r([f()],K.prototype,`open`,void 0),r([f()],K.prototype,`activeIndex`,void 0),r([f()],K.prototype,`touched`,void 0),r([j(`.trigger`)],K.prototype,`trigger`,void 0),r([j(`.menu`)],K.prototype,`menu`,void 0),K=r([A(`ui-dropdown`)],K);