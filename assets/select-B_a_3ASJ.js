import{$ as e,Ct as t,D as n,E as r,H as i,J as a,Ot as o,Q as s,R as c,St as l,Tt as u,U as d,X as f,Z as p,bt as m,ct as h,et as g,h as _,jt as v,lt as y,nt as b,q as x,st as S,tt as C,w,wt as T,xt as E,z as D}from"./theme-switcher-BGAHXRgF.js";var O=v`
    :host {
        display: block;
        font-family: var(--ui-font-family);
    }

    .field {
        position: relative;
    }

    select {
        /* Carbon: the native list; a design can open the list in its own menu look (customizable select, below) */
        appearance: var(--ui-select-appearance, none);
        box-sizing: border-box;
        width: 100%;
        min-height: var(--ui-field-height-lg, 48px);
        margin: 0;
        padding: 0 calc(var(--ui-space-md) * 2 + 16px) 0 var(--ui-space-md);
        /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
        border: var(--ui-field-border, none);
        border-bottom: 1px solid var(--ui-ink-subtle);
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        cursor: pointer;
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
        transition: outline-color var(--ui-duration-fast) var(--ui-easing); /* Carbon select-input: the outline only, not the background */
    }

    :host([size='sm']) select {
        min-height: var(--ui-field-height-sm, 32px);
    }

    :host([size='md']) select {
        min-height: var(--ui-field-height-md, 40px);
    }

    select:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    .placeholder select {
        color: var(--ui-ink-muted);
    }

    option {
        color: var(--ui-ink);
    }

    /*
     * Customizable select (Chrome 135+), when a design sets --ui-select-appearance: base-select (Kanok): the list
     * opens in the menu look of the dropdowns (--ui-menu-*), the chosen row tinted with a check mark at its end.
     * Other browsers keep the native list. Each rule stands alone, so a browser that doesn't know a selector
     * drops only that rule; the rows' rules ask the setting (a style query), so the native list is untouched.
     */
    select::picker-icon {
        display: none; /* the chevron is ours */
    }

    select::picker(select) {
        appearance: base-select;
        box-sizing: border-box;
        margin-block: 2px;
        padding: var(--ui-menu-padding, 0);
        border: var(--ui-menu-border, none);
        border-radius: var(--ui-menu-radius, 0);
        background-color: var(--ui-overlay-background, var(--ui-surface-1)); /* a design can raise floating surfaces (--ui-overlay-background) */
        color: var(--ui-ink);
        box-shadow: var(--ui-menu-shadow, 0 2px 6px rgb(0 0 0 / 0.3));
        max-block-size: calc(var(--ui-field-height-md, 40px) * var(--ui-menu-max-rows, 5.5));
    }

    @container style(--ui-select-appearance: base-select) {
        /* the chosen option's text, centred in the box as the native select's */
        select {
            display: flex;
            align-items: center;
        }

        select:open ~ .icons .chevron {
            transform: rotate(180deg);
        }

        option {
            display: flex;
            align-items: center;
            gap: var(--ui-space-xs);
            box-sizing: border-box;
            min-block-size: var(--ui-field-height-md, 40px);
            padding: 0 var(--ui-space-md);
            border-radius: var(--ui-menu-item-radius, 0);
            color: var(--ui-menu-item-ink, var(--ui-ink-muted));
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            cursor: pointer;
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: -2px;
            transition: background-color var(--ui-duration-fast) var(--ui-easing);
        }

        option:hover,
        option:focus-visible {
            background-color: var(--ui-ghost-hover);
            color: var(--ui-ink);
        }

        option:focus-visible {
            outline-color: var(--ui-menu-item-active-outline, var(--ui-focus));
        }

        option:checked {
            background-color: var(--ui-menu-item-selected, var(--ui-surface-2));
            color: var(--ui-ink);
        }

        option:disabled {
            background-color: transparent;
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        /* the placeholder is what the box shows before a choice, not a choice in the list */
        option[data-placeholder] {
            display: none;
        }

        /* the check mark at the end of the chosen row, as the dropdowns */
        option::checkmark {
            order: 1;
            margin-inline-start: auto;
            color: var(--ui-icon-primary);
        }

        optgroup {
            color: var(--ui-ink-helper);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        optgroup + optgroup {
            margin-block-start: var(--ui-space-xs);
        }
    }

    .invalid select {
        outline-color: var(--ui-error);
    }

    .invalid select:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    select:disabled {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
    }

    :host([readonly]) select {
        background-color: var(--ui-field-readonly-background, transparent);
        border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
        cursor: default;
    }

    :host([inline]) {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: start;
        align-items: center;
        column-gap: var(--ui-space-xs);
    }

    :host([inline]) .label {
        margin-bottom: 0;
    }

    :host([inline]) select {
        width: auto;
        background-color: transparent;
        border-color: var(--ui-field-inline-border-color, currentColor currentColor transparent);
    }

    :host([inline]) select:hover {
        background-color: var(--ui-ghost-hover);
    }

    :host([inline]) .helper,
    :host([inline]) .warn,
    :host([inline]) .error {
        grid-column: 1 / -1;
    }

    :host([readonly]) .chevron {
        fill: var(--ui-ink-subtle);
    }

    .icons {
        position: absolute;
        inset-block: 0;
        inset-inline-end: var(--ui-space-md);
        display: flex;
        align-items: center;
        gap: var(--ui-space-xs);
        pointer-events: none;
    }

    .chevron {
        width: 16px;
        height: 16px;
        fill: var(--ui-ink);
    }

    select:disabled ~ .icons .chevron {
        fill: var(--ui-ink-disabled);
    }

    .has-status select {
        padding-inline-end: calc(var(--ui-space-md) * 2 + 40px);
    }

    @media (forced-colors: active) {
        select {
            border: 1px solid FieldText;
        }
        select:focus {
            outline-color: Highlight;
        }
        .chevron {
            fill: FieldText;
        }
    }
`,k=v`
    :host([data-fluid]) select,
    :host([data-fluid]) .has-status select {
        block-size: 64px;
        min-height: 64px;
        padding-block: 32px 13px;
        padding-inline-end: 32px;
    }

    /* Carbon fluid select: the arrow 34px down, 12px from the end */
    :host([data-fluid]) .icons {
        --ui-fluid-icon-end: 4px;
        align-items: flex-start;
        padding-block-start: 34px;
        inset-inline-end: 12px;
    }
`,A=e=>`options`in e,j=e=>({value:e.value,label:e.label||e.textContent?.trim()||``,disabled:e.disabled}),M=class extends n{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.inline=!1,this.entries=[],this.touched=!1,this.formControl=new y(this,{reveal:()=>this.touched=!0}),this.localize=new w(this),this.customValidityMessage=``,this.selectId=h(`ui-select`),this.defaultValue=``,this.slots=new _(this)}static{this.hostStates=[`show-error`,`show-warn`,`placeholder`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,O,d,k]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}willUpdate(){S(this,this.fluid)}connectedCallback(){super.connectedCallback(),S(this,this.fluid),this.formControl.captureDefaults(()=>{!this.value&&!this.hasAttribute(`value`)&&(this.value=b(this)??``),this.defaultValue=this.value}),this.readOptions(),this.observer??=new MutationObserver(e=>{e.some(e=>e.type!==`attributes`||e.target!==this)&&this.readOptions()}),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}updated(){this.entries.length>0&&this.select.value!==this.value?this.value=this.select.value:(this.syncValidity(),this.syncHostState())}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownMessageKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownMessageKind===`warn`),this.toggleAttribute(`data-placeholder`,!!this.placeholder&&!this.value)}syncValidity(){if(c(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=D(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.select):this.select.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.select.validity,f(this.select,this.localize.t.field.requiredOne),this.select)}readOptions(){this.entries=[...this.children].flatMap(e=>e instanceof HTMLOptionElement?[j(e)]:e instanceof HTMLOptGroupElement?[{label:e.label,disabled:e.disabled,options:[...e.querySelectorAll(`option`)].map(j)}]:[])}onMouseDown(e){this.readonly&&e.preventDefault()}onKeyDown(e){this.readonly&&e.key!==`Tab`&&e.preventDefault()}onInput(){this.value=this.select.value}onChange(){this.value=this.select.value,this.touched=!0,this.dispatchEvent(new Event(`change`,{bubbles:!0}))}renderOption(e){return o`<option value=${e.value} ?disabled=${e.disabled} ?selected=${e.value===this.value}>
            ${e.label}
        </option>`}renderLabel(){let t=!this.label&&!this.slots.has(`label`),n=t?this.formControl.fallbackName(this.label,this.internals):``;return t&&!n?u:o`<label class=${this.hideLabel||t?`sr-only`:`label`} part="label" for=${this.selectId}>${e(this.label,n)}</label>`}render(){let e=this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||!!this.select&&!this.select.validity.valid)),t=s({showError:e,errorText:p(this.invalid,this.customValidityMessage,this.invalidText||(this.select?f(this.select,this.localize.t.field.requiredOne):``)),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});x(this,t),this.shownMessageKind=t?.kind;let n=a(this.selectId,t),r=[e?`invalid`:``,t&&t.kind!==`helper`?`has-status`:``,this.placeholder&&!this.value?`placeholder`:``].filter(Boolean).join(` `);return o`
            ${this.renderLabel()}
            <div class="field ${r}" part="base">
                <select
                    part="input"
                    id=${this.selectId}
                    ?disabled=${this.isDisabled}
                    ?required=${this.required}
                    aria-readonly=${this.readonly?`true`:u}
                    aria-invalid=${e?`true`:`false`}
                    aria-describedby=${n??u}
                    @mousedown=${this.onMouseDown}
                    @keydown=${this.onKeyDown}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @blur=${()=>this.touched=!0}
                >
                    ${this.placeholder?o`<option value="" data-placeholder ?selected=${!this.value}>${this.placeholder}</option>`:u}
                    ${this.entries.map(e=>A(e)?o`<optgroup label=${e.label} ?disabled=${e.disabled}>
                                  ${e.options.map(e=>this.renderOption(e))}
                              </optgroup>`:this.renderOption(e))}
                </select>
                <span class="icons" aria-hidden="true">
                    ${C(t)}
                    <svg class="chevron" part="chevron" viewBox="0 0 16 16"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                </span>
            </div>
            ${g(this.selectId,t)}
        `}};r([l()],M.prototype,`label`,void 0),r([l({type:Boolean,attribute:`hide-label`})],M.prototype,`hideLabel`,void 0),r([l({attribute:`helper-text`})],M.prototype,`helperText`,void 0),r([l({attribute:`invalid-text`})],M.prototype,`invalidText`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`invalid`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`warn`,void 0),r([l({attribute:`warn-text`})],M.prototype,`warnText`,void 0),r([l()],M.prototype,`placeholder`,void 0),r([l()],M.prototype,`value`,void 0),r([l({reflect:!0})],M.prototype,`name`,void 0),r([l({type:String,reflect:!0})],M.prototype,`size`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`disabled`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`required`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`readonly`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`fluid`,void 0),r([l({type:Boolean,reflect:!0})],M.prototype,`inline`,void 0),r([E()],M.prototype,`entries`,void 0),r([E()],M.prototype,`touched`,void 0),r([m(`select`)],M.prototype,`select`,void 0),M=r([t(`ui-select`)],M);