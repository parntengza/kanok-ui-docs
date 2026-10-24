import{Ct as e,D as t,E as n,H as r,J as i,K as a,Ot as o,Q as s,R as c,St as l,Tt as u,Z as d,bt as f,ct as p,et as m,jt as h,lt as g,wt as _,xt as v,z as y}from"./theme-switcher-BGAHXRgF.js";var b=class extends t{static{this.hostStates=[`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[r,h`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            label {
                position: relative;
                display: inline-flex;
                align-items: flex-start;
                gap: 14px; /* Carbon: 20px label inset + 10px text inset − 16px box */
                min-height: 24px;
                padding-block: 4px;
                box-sizing: border-box;
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                color: var(--ui-ink);
                cursor: pointer;
            }

            /* Native input sits exactly on top of the box: invisible, but focusable and clickable */
            input {
                position: absolute;
                top: 4px;
                inset-inline-start: 0;
                z-index: 1; /* above the now-positioned .box so clicks still land on the input */
                width: 16px;
                height: 16px;
                margin: 0;
                opacity: 0;
                cursor: inherit;
            }

            .box {
                position: relative;
                display: block;
                flex-shrink: 0;
                width: 16px;
                height: 16px;
                margin-top: 1px;
                box-sizing: border-box;
                /* --ui-checkbox-border / -checked / -mark: Carbon draws in primary ink; a design can use its brand colour */
                border: 1px solid var(--ui-checkbox-border, var(--ui-ink));
                border-radius: var(--ui-radius-xs);
                background-color: transparent; /* Carbon: a filled box looks off on tinted layers */
                color: var(--ui-checkbox-mark, var(--ui-icon-inverse)); /* Carbon: the check mark is icon-inverse on the icon-primary box */
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
                border-bottom: 1.5px solid currentColor;
                border-left: 1.5px solid currentColor;
                transform: scale(0) rotate(-45deg);
                transform-origin: bottom right;
            }

            input:checked + .box,
            input:indeterminate + .box {
                border-color: var(--ui-checkbox-checked, var(--ui-ink));
                background-color: var(--ui-checkbox-checked, var(--ui-ink));
            }

            input:checked + .box::after {
                transform: scale(1) rotate(-45deg);
            }

            input:indeterminate + .box::after {
                top: 4px; /* Carbon indeterminate: 8px bar, 2px thick, 11px − 3px margin from the label → rows 8–10 of the 16px box, 1px below centre as on Carbon (kept on purpose, user's choice 2026-10-05) */
                inset-inline-start: 3px;
                width: 8px;
                border-left-width: 0;
                border-bottom-width: 2px;
                transform: scale(1) rotate(0deg);
            }

            /* Carbon checkbox:focus (not :focus-visible), so a click shows the ring too */
            input:focus + .box {
                outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
                outline-offset: 1px;
            }

            /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
            input:focus:not(:focus-visible) + .box {
                outline-color: var(--ui-pointer-focus, var(--ui-focus));
            }

            .invalid .box,
            :host([data-group-invalid]) .box {
                border: 2px solid var(--ui-error);
            }

            :host([data-disabled]) label {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
            }

            :host([data-disabled]) .box {
                border-color: var(--ui-ink-disabled);
            }

            :host([data-disabled]) input:checked + .box,
            :host([data-disabled]) input:indeterminate + .box {
                background-color: var(--ui-ink-disabled);
            }

            :host([data-readonly]) label {
                cursor: default;
            }

            :host([data-readonly]) .box {
                border-color: var(--ui-ink-subtle);
            }

            :host([data-readonly]) input:checked + .box,
            :host([data-readonly]) input:indeterminate + .box {
                background-color: var(--ui-ink-muted);
            }

            .error,
            .warn,
            .helper {
                padding-inline-start: calc(16px + var(--ui-space-xs));
            }

            @media (forced-colors: active) {
                .box {
                    border-color: CanvasText;
                    forced-color-adjust: none;
                }
                input:checked + .box,
                input:indeterminate + .box {
                    background-color: Highlight;
                    color: HighlightText;
                }
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.readonly=!1,this.groupDisabled=!1,this.groupReadonly=!1,this.groupMessage=``,this.hideLabel=!1,this.name=``,this.value=`on`,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.touched=!1,this.formControl=new g(this,{reveal:()=>this.touched=!0}),this.customValidityMessage=``,this.inputId=p(`ui-checkbox`),this.controlTabIndex=void 0,this.defaultChecked=!1,this.onLabelClick=e=>{a(this,e)&&!this.isDisabled&&!this.isReadonly&&this.input.click()},this.addEventListener(`click`,this.onLabelClick)}connectedCallback(){super.connectedCallback(),this.formControl.captureDefaults(()=>{this.defaultChecked=this.checked})}disconnectedCallback(){super.disconnectedCallback()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.checked=this.defaultChecked,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.checked=e===`true`)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled||this.groupDisabled}get interactive(){return!this.isDisabled&&!this.isReadonly}get isReadonly(){return this.readonly||this.groupReadonly}updated(e){e.has(`checked`)&&this.closest(`ui-checkbox-group`)?.requestUpdate(),this.toggleAttribute(`data-disabled`,this.isDisabled),this.toggleAttribute(`data-readonly`,this.isReadonly),this.input.indeterminate=this.indeterminate,this.syncValidity(),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`||this.groupMessage!==``&&this.interactive),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}syncValidity(){if(c(this.internals,this.isDisabled))return;this.internals.setFormValue(this.checked?this.value:null,String(this.checked));let e=y(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.input):this.required&&!this.checked?this.internals.setValidity({valueMissing:!0},this.input.validationMessage||` `,this.input):this.internals.setValidity({})}onClick(e){this.isReadonly&&e.preventDefault()}onInput(){this.checked=this.input.checked,this.indeterminate=!1}onChange(){this.checked=this.input.checked,this.indeterminate=!1,this.touched=!0,this.dispatchEvent(new Event(`change`,{bubbles:!0}))}renderBox(){return o`<span class="box" part="box" aria-hidden="true"></span>`}render(){let e=this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||this.required&&!this.checked)),t=s({showError:e,errorText:d(this.invalid,this.customValidityMessage,this.invalidText||this.input?.validationMessage||``),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText});this.shownKind=t?.kind;let n=this.groupMessage?`${this.inputId}-group-message`:void 0,r=[i(this.inputId,t),n].filter(Boolean).join(` `)||u;return o`
            <label class=${e?`invalid`:``} part="base">
                <input
                    part="control"
                    id=${this.inputId}
                    type="checkbox"
                    tabindex=${this.controlTabIndex??u}
                    .checked=${this.checked}
                    ?disabled=${this.isDisabled}
                    ?required=${this.required}
                    aria-readonly=${this.isReadonly?`true`:u}
                    aria-invalid=${e||n?`true`:`false`}
                    aria-describedby=${r}
                    @click=${this.onClick}
                    @input=${this.onInput}
                    @change=${this.onChange}
                />
                ${this.renderBox()}
                <span class=${this.hideLabel?`sr-only`:``} part="label"><slot></slot></span>
            </label>
            ${m(this.inputId,t,!0)}
            ${n?o`<span class="sr-only" id=${n}>${this.groupMessage}</span>`:u}
        `}};n([l({type:Boolean,reflect:!0})],b.prototype,`checked`,void 0),n([l({type:Boolean,reflect:!0})],b.prototype,`indeterminate`,void 0),n([l({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),n([l({type:Boolean,reflect:!0})],b.prototype,`required`,void 0),n([l({type:Boolean,reflect:!0})],b.prototype,`readonly`,void 0),n([l({attribute:!1})],b.prototype,`groupDisabled`,void 0),n([l({attribute:!1})],b.prototype,`groupReadonly`,void 0),n([l({attribute:!1})],b.prototype,`groupMessage`,void 0),n([l({type:Boolean,attribute:`hide-label`})],b.prototype,`hideLabel`,void 0),n([l({reflect:!0})],b.prototype,`name`,void 0),n([l()],b.prototype,`value`,void 0),n([l({attribute:`helper-text`})],b.prototype,`helperText`,void 0),n([l({attribute:`invalid-text`})],b.prototype,`invalidText`,void 0),n([l({type:Boolean,reflect:!0})],b.prototype,`invalid`,void 0),n([l({type:Boolean,reflect:!0})],b.prototype,`warn`,void 0),n([l({attribute:`warn-text`})],b.prototype,`warnText`,void 0),n([v()],b.prototype,`touched`,void 0),n([f(`input`)],b.prototype,`input`,void 0),b=n([e(`ui-checkbox`)],b);export{b as t};