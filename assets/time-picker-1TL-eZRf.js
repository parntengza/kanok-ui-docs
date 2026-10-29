import{$ as e,B as t,Ct as n,D as r,Et as i,G as a,J as o,Mt as s,O as c,Q as l,St as u,T as d,Tt as f,U as p,W as m,Y as h,bt as g,ct as _,et as v,ht as y,kt as b,lt as x,nt as S,rt as C,st as w,tt as T,ut as E,v as D,wt as O,xt as k,z as A}from"./theme-switcher-BZXGbHfR.js";import{g as j}from"./date-_JG37lMZ.js";var M=b`<svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>`,N=class extends c{constructor(...e){super(...e),this.label=``,this.localize=new d(this),this.value=``,this.name=``,this.size=`md`,this.disabled=!1,this.readonly=!1,this.pickerDisabled=!1,this.options=[],this.formControl=new E(this),this.defaultValue=``}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.formAssociated=!0}static{this.styles=s`
        :host {
            position: relative;
            display: inline-flex;
            justify-content: center;
            font-family: var(--ui-font-family);
        }

        select {
            appearance: none;
            box-sizing: border-box;
            inline-size: auto;
            min-inline-size: auto;
            block-size: var(--ui-field-height-lg, 48px);
            margin: 0;
            padding: 0 var(--ui-space-xxl) 0 var(--ui-space-md);
            /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
            border: var(--ui-field-border, none);
            border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
            border-radius: var(--ui-field-radius, var(--ui-radius-none));
            background-color: var(--ui-field-background, var(--ui-surface-1));
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            font-size: var(--ui-field-font-size, 14px);
            line-height: 1;
            letter-spacing: var(--ui-tracking-body);
            cursor: pointer;
            outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
            outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
            transition: outline-color var(--ui-duration-fast) var(--ui-easing); /* Carbon select-input: the outline only */
        }

        :host([size='sm']) select {
            block-size: var(--ui-field-height-sm, 32px);
        }

        :host([size='md']) select {
            block-size: var(--ui-field-height-md, 40px);
        }

        select:focus {
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

        .chevron {
            position: absolute;
            inset-block: 0;
            inset-inline-end: var(--ui-space-md);
            width: 16px;
            height: 100%;
            fill: var(--ui-ink);
            pointer-events: none;
        }

        select:disabled ~ .chevron,
        :host([readonly]) .chevron {
            fill: var(--ui-icon-disabled);
        }

        /* in a fluid time picker (set by the picker): a 64px column with its label inside, like Carbon FluidTimePickerSelect */
        :host([data-fluid]) {
            position: relative;
            display: block;
            background-color: var(--ui-surface-1);
        }

        :host([data-fluid]) select {
            inline-size: 100%;
            block-size: 64px;
            padding: 32px 32px 13px var(--ui-space-md);
            background-color: transparent;
        }

        :host([data-fluid]) .chevron {
            inset-block: 34px auto;
            height: 16px;
            inset-inline-end: var(--ui-space-sm);
        }

        .fluid-label {
            position: absolute;
            inset-block-start: 13px;
            inset-inline: var(--ui-space-md);
            overflow: hidden;
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
            text-overflow: ellipsis;
            white-space: nowrap;
            pointer-events: none;
        }

        @media (forced-colors: active) {
            select {
                border: 1px solid FieldText;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.formControl.captureDefaults(()=>{!this.value&&!this.hasAttribute(`value`)&&(this.value=C(this)??``),this.defaultValue=this.value}),this.readOptions(),this.observer??=new MutationObserver(()=>this.readOptions()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.formControl.reportValidity(this.internals)}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled||this.pickerDisabled}readOptions(){this.options=[...this.children].filter(e=>e instanceof HTMLOptionElement).map(e=>({value:e.value,label:e.label||e.text,disabled:e.disabled})),this.value||=[...this.children].find(e=>e instanceof HTMLOptionElement&&e.selected)?.value??``}updated(){this.select.value===this.value?this.internals.setFormValue(this.isDisabled?null:this.value):this.value=this.select.value}onMouseDown(e){this.readonly&&(e.preventDefault(),this.select.focus())}onKeyDown(e){this.readonly&&[`ArrowDown`,`ArrowUp`,` `,`Enter`].includes(e.key)&&e.preventDefault()}onInput(){this.value=this.select.value}onChange(){this.value=this.select.value,this.dispatchEvent(new Event(`change`,{bubbles:!0}))}render(){return b`
            <select
                part="input"
                aria-label=${this.label||this.localize.t.field.timeSelect}
                ?disabled=${this.isDisabled}
                aria-readonly=${y(this.readonly?`true`:void 0)}
                @mousedown=${this.onMouseDown}
                @keydown=${this.onKeyDown}
                @input=${this.onInput}
                @change=${this.onChange}
            >
                ${this.options.map(e=>b`<option value=${e.value} ?disabled=${e.disabled} ?selected=${e.value===this.value}>${e.label}</option>`)}
            </select>
            ${M}
            ${this.label&&a(this,`fluid`)?b`<span class="fluid-label" aria-hidden="true">${this.label}</span>`:i}
        `}};r([n()],N.prototype,`label`,void 0),r([n()],N.prototype,`value`,void 0),r([n({reflect:!0})],N.prototype,`name`,void 0),r([n({reflect:!0})],N.prototype,`size`,void 0),r([n({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],N.prototype,`readonly`,void 0),r([n({type:Boolean,attribute:!1})],N.prototype,`pickerDisabled`,void 0),r([u()],N.prototype,`options`,void 0),r([k(`select`)],N.prototype,`select`,void 0),N=r([O(`ui-time-picker-select`)],N);var P=class extends c{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.value=``,this.name=``,this.placeholder=`hh:mm`,this.pattern=String.raw`(1[012]|0?[1-9]):[0-5][0-9](\s)?`,this.maxLength=5,this.size=`md`,this.disabled=!1,this.readonly=!1,this.fluid=!1,this.required=!1,this.invalid=!1,this.invalidText=``,this.warn=!1,this.warnText=``,this.touched=!1,this.formControl=new E(this,{reveal:()=>this.touched=!0,implicitSubmission:!0}),this.localize=new d(this),this.customValidityMessage=``,this.slots=new D(this),this.inputId=x(`ui-time-picker`),this.defaultValue=``,this.onEnterKey=e=>w(this,e)}static{this.hostStates=[`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...f.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[p,m,s`
        :host {
            display: block;
            font-family: var(--ui-font-family);
        }

        .label {
            display: block;
        }

        /* 2px between the columns (Carbon spacing-01) — a gap here, not a margin on each select's :host, which a page-wide CSS reset would remove */
        .picker {
            display: flex;
            flex-wrap: wrap; /* the selects go below the box when there isn't room beside it */
            align-items: flex-end;
            gap: 2px;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
        }

        input {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            inline-size: max(78px, calc(78em / 14)); /* 4.875rem at Carbon's 14px; wider with a larger --ui-field-font-size, so "12:59" still fits */
            block-size: var(--ui-field-height-lg, 48px);
            margin: 0;
            padding: 0 var(--ui-space-md);
            /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
            border: var(--ui-field-border, none);
            border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
            border-radius: var(--ui-field-radius, var(--ui-radius-none));
            background-color: var(--ui-field-background, var(--ui-surface-1));
            color: var(--ui-ink);
            font: var(--ui-font-code-lg);
            font-size: var(--ui-field-font-size, 14px);
            letter-spacing: var(--ui-tracking-code);
            outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
            outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
            transition:
                outline-color var(--ui-duration-fast) var(--ui-easing),
                background-color var(--ui-duration-fast) var(--ui-easing);
        }

        :host([size='sm']) input {
            block-size: var(--ui-field-height-sm, 32px);
        }

        :host([size='md']) input {
            block-size: var(--ui-field-height-md, 40px);
        }

        /* Carbon fluid time picker: equal 64px columns (text box, then each select), the label inside the first */
        :host([data-fluid]) .picker {
            display: grid;
            gap: 0; /* Carbon fluid: the columns touch */
            grid-auto-columns: minmax(0, 1fr);
            grid-auto-flow: column;
        }

        :host([data-fluid]) .input-wrapper {
            position: static;
        }

        :host([data-fluid]) input {
            inline-size: 100%;
            block-size: 64px;
            padding: 32px var(--ui-space-md) 13px;
            font: var(--ui-font-body-sm);
            font-size: var(--ui-field-font-size, 14px);
            letter-spacing: var(--ui-tracking-body);
        }

        :host([data-fluid]) .status {
            --ui-fluid-icon-top: 72px;
            --ui-fluid-icon-end: var(--ui-space-md);
            position: static;
            transform: none;
        }

        input::placeholder {
            color: var(--ui-ink-placeholder);
            opacity: 1;
        }

        input:focus {
            outline-color: var(--ui-focus);
            box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
        }

        .has-status input {
            inline-size: max(98.8px, calc(98.8em / 14)); /* 6.175rem at 14px, as the box above */
        }

        .invalid input {
            outline-color: var(--ui-error);
            box-shadow: var(--ui-field-invalid-halo, none); /* a design's error halo (Kanok: Pixiv's red ring) */
        }

        .invalid input:focus {
            outline-color: var(--ui-focus);
            box-shadow: var(--ui-field-invalid-halo, var(--ui-field-focus-halo, none)); /* an error keeps its halo while focused (Kanok: Pixiv's red) */
        }

        input:disabled {
            border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        :host([readonly]) input {
            background-color: var(--ui-field-readonly-background, transparent);
            border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
        }

        .status {
            position: absolute;
            inset-block-start: 50%;
            inset-inline-end: var(--ui-space-md);
            display: flex;
            place-items: center;
            transform: translateY(-50%);
            pointer-events: none;
        }

        :host(:disabled) .label,
        :host([data-group-disabled]) .label,
        :host([data-disabled]) .label {
            color: var(--ui-ink-disabled);
        }
    `]}static get observedAttributes(){return[...super.observedAttributes,`max-length`]}attributeChangedCallback(e,t,n){e===`max-length`?n!==null&&(this.maxLength=Number(n)):super.attributeChangedCallback(e,t,n)}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}willUpdate(){_(this,this.fluid)}connectedCallback(){super.connectedCallback(),_(this,this.fluid),this.addEventListener(`keydown`,this.onEnterKey),this.formControl.captureDefaults(()=>{this.defaultValue=this.value})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey)}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.touched=!0,this.formControl.reportValidity(this.internals)}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}focus(e){this.input?.focus(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}updated(){this.toggleAttribute(`data-disabled`,this.isDisabled),this.syncSelects();let{valid:e}=this.internals.validity,t=this.internals.validationMessage;this.syncFormState(),(this.internals.validity.valid!==e||this.internals.validationMessage!==t)&&this.requestUpdate(),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`)}syncSelects(){for(let e of this.selects)e.size=this.size,e.readonly=this.readonly,e.pickerDisabled=this.isDisabled,e.toggleAttribute(`data-fluid`,this.dataset.fluid!==void 0),e.requestUpdate()}syncFormState(){if(A(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=t(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.input):!this.input.willValidate||this.input.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.input.validity,this.invalidText||this.input.validationMessage||this.localize.t.field.enterTime,this.input)}get showError(){return this.interactive?this.invalid?!0:this.touched&&!this.internals.validity.valid:!1}onInput(e){let t=e.target,n=j(t.value);if(n!==t.value){let e=Math.max(0,(t.selectionEnd??n.length)-(t.value.length-n.length));t.value=n,t.setSelectionRange(e,e)}this.value=n}onChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0}))}get fieldMessage(){return e({showError:this.showError,errorText:l(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage||``),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:``,slots:this.slots})}render(){let e=this.showError,t=this.fieldMessage;o(this,t);let n=!!t&&t.kind!==`helper`,r=[`input-wrapper`,e?`invalid`:``,n?`has-status`:``].filter(Boolean).join(` `);return b`
            <label class=${this.hideLabel?`sr-only`:`label`} part="label" for=${this.inputId}>${v(this.label,this.formControl.fallbackName(this.label,this.internals))}</label>
            <div class="picker" part="base">
                <div class=${r}>
                    <input
                        part="input"
                        id=${this.inputId}
                        type="text"
                        autocomplete="off"
                        .value=${this.value}
                        name=${this.name||i}
                        placeholder=${this.placeholder}
                        pattern=${this.pattern}
                        maxlength=${this.maxLength}
                        ?disabled=${this.isDisabled}
                        ?readonly=${this.readonly}
                        ?required=${this.required}
                        aria-invalid=${e?`true`:`false`}
                        aria-describedby=${y(h(this.inputId,t))}
                        @input=${this.onInput}
                        @change=${this.onChange}
                        @blur=${()=>this.touched=!0}
                    />
                    <span class="status">${S(t)}</span>
                </div>
                <slot @slotchange=${()=>this.syncSelects()}></slot>
            </div>
            ${T(this.inputId,t)}
        `}};r([n()],P.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],P.prototype,`hideLabel`,void 0),r([n()],P.prototype,`value`,void 0),r([n({reflect:!0})],P.prototype,`name`,void 0),r([n()],P.prototype,`placeholder`,void 0),r([n()],P.prototype,`pattern`,void 0),r([n({type:Number,attribute:`maxlength`})],P.prototype,`maxLength`,void 0),r([n({reflect:!0})],P.prototype,`size`,void 0),r([n({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],P.prototype,`readonly`,void 0),r([n({type:Boolean,reflect:!0})],P.prototype,`fluid`,void 0),r([n({type:Boolean,reflect:!0})],P.prototype,`required`,void 0),r([n({type:Boolean,reflect:!0})],P.prototype,`invalid`,void 0),r([n({attribute:`invalid-text`})],P.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],P.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],P.prototype,`warnText`,void 0),r([u()],P.prototype,`touched`,void 0),r([k(`input`)],P.prototype,`input`,void 0),r([g({selector:`ui-time-picker-select`})],P.prototype,`selects`,void 0),P=r([O(`ui-time-picker`)],P);