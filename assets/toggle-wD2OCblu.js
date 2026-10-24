import{$ as e,Ct as t,D as n,E as r,K as i,Ot as a,St as o,Tt as s,ct as c,h as l,it as u,jt as d,lt as f,w as p,wt as m}from"./theme-switcher-BGAHXRgF.js";var h=class extends n{static{this.formAssociated=!0}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[u,d`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .label {
                display: block;
                margin-bottom: var(--ui-space-md); /* Carbon: 16px (sm: 8px) between label and switch */
                font: var(--ui-label-font, var(--ui-font-caption)); /* the field label settings (shared/field.ts) */
                letter-spacing: var(--ui-tracking-caption);
                color: var(--ui-label-color, var(--ui-ink-muted));
            }

            :host([size='sm']) .label {
                margin-bottom: var(--ui-space-xs);
            }

            .row {
                display: flex;
                align-items: center;
                cursor: pointer;
            }

            /* the real control: keyboard-reachable, visually hidden (Carbon toggle__button) */
            .button {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                border: 0;
                overflow: hidden;
                clip-path: inset(50%);
                white-space: nowrap;
            }

            .switch {
                position: relative;
                box-sizing: border-box;
                width: 48px;
                height: 24px;
                border-radius: 12px;
                background-color: var(--ui-toggle-off);
                transition: background-color var(--ui-duration-fast) var(--ui-easing-exit); /* Carbon toggle__switch: fast-01, exit easing */
            }

            .handle {
                position: absolute;
                top: 3px;
                inset-inline-start: 3px;
                display: grid;
                place-items: center;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: var(--ui-on-primary);
                transition: translate var(--ui-duration-fast) var(--ui-easing-exit); /* Carbon toggle__switch::before: fast-01, exit easing */
            }

            /* on: Carbon support-success; --ui-toggle-on lets a design use its brand colour */
            .switch.checked {
                background-color: var(--ui-toggle-on, var(--ui-success));
            }

            .switch.checked .handle {
                translate: 24px 0;
            }

            :host(:dir(rtl)) .switch.checked .handle {
                translate: -24px 0;
            }

            :host([size='sm']) .switch {
                width: 32px;
                height: 16px;
            }

            :host([size='sm']) .handle {
                width: 10px;
                height: 10px;
            }

            :host([size='sm']) .switch.checked .handle {
                translate: 16px 0;
            }

            :host([size='sm']:dir(rtl)) .switch.checked .handle {
                translate: -16px 0;
            }

            /* sm shows a 6×5 check mark in the knob while on (Carbon toggle__check) */
            .check {
                display: none;
                width: 6px;
                height: 5px;
                fill: var(--ui-toggle-on, var(--ui-success));
            }

            :host([size='sm']) .switch.checked .check {
                display: block;
            }

            .text {
                margin-inline-start: var(--ui-space-xs);
                font: var(--ui-font-body-sm);
                line-height: 20px; /* body-01 */
                letter-spacing: var(--ui-tracking-body);
                color: var(--ui-ink);
            }

            /* Carbon toggle__button:focus (not :focus-visible), so a click keeps the ring after release */
            .button:focus ~ .row .switch,
            .row:active .switch {
                outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
                outline-offset: 1px;
            }

            /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
            .button:focus:not(:focus-visible) ~ .row .switch,
            .row:active .switch {
                outline-color: var(--ui-pointer-focus, var(--ui-focus));
            }

            /* disabled */
            :host([aria-disabled='true']) .row,
            :host([aria-disabled='true']) .label {
                cursor: not-allowed;
            }

            :host([aria-disabled='true']) .label,
            :host([aria-disabled='true']) .text {
                color: var(--ui-ink-disabled);
            }

            :host([aria-disabled='true']) .switch,
            :host([aria-disabled='true']) .switch.checked {
                background-color: var(--ui-button-disabled);
            }

            :host([aria-disabled='true']) .handle {
                background-color: var(--ui-on-color-disabled); /* icon-on-color-disabled, the same values */
            }

            :host([aria-disabled='true']) .check {
                fill: var(--ui-button-disabled);
            }

            /* read-only: hollow track, dark knob */
            :host([readonly]) .row {
                cursor: default;
            }

            :host([readonly]) .switch,
            :host([readonly]) .switch.checked {
                border: 1px solid var(--ui-ink-disabled);
                background-color: transparent;
            }

            :host([readonly]) .handle {
                top: 2px;
                inset-inline-start: 2px;
                background-color: var(--ui-ink);
            }

            :host([readonly]) .check {
                fill: var(--ui-canvas);
            }

            @media (forced-colors: active) {
                .switch {
                    border: 1px solid ButtonText;
                }
                .switch.checked {
                    background-color: Highlight;
                }
                .handle {
                    background-color: ButtonText;
                    forced-color-adjust: none;
                }
            }
        `]}constructor(){super(),this.label=``,this.localize=new p(this),this.hideLabel=!1,this.labelA=``,this.labelB=``,this.checked=!1,this.value=`on`,this.name=``,this.size=`md`,this.disabled=!1,this.readonly=!1,this.formControl=new f(this),this.ids=c(`ui-toggle`),this.slots=new l(this),this.defaultChecked=!1,this.onLabelClick=e=>{i(this,e)&&this.shadowRoot?.querySelector(`button[role="switch"]`)?.click()},this.addEventListener(`click`,this.onLabelClick)}connectedCallback(){super.connectedCallback(),this.formControl.captureDefaults(()=>{this.defaultChecked=this.checked})}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.formControl.reportValidity(this.internals)}updated(){this.internals.setFormValue(this.checked&&!this.isDisabled?this.value:null,String(this.checked)),this.isDisabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`)}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e){typeof e==`string`&&(this.checked=e===`true`)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}toggle(){this.isDisabled||this.readonly||(this.checked=!this.checked,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))}onClick(e){this.toggle(),e.currentTarget.focus()}renderLabel(){let t=!this.label&&!this.slots.has(`label`),n=t?this.formControl.fallbackName(this.label,this.internals):``;return this.hideLabel||t&&!n?s:a`<span class=${t?`sr-only`:`label`} part="label" id="${this.ids}-label">${e(this.label,n)}</span>`}get sideText(){return this.hideLabel?this.label:this.checked?this.labelB||this.localize.t.field.on:this.labelA||this.localize.t.field.off}render(){let e=this.label||this.slots.has(`label`)||this.formControl.fallbackName(this.label,this.internals),t=this.hideLabel?`text`:`label`,n=e?`${this.ids}-${t}`:s;return a`
            ${this.renderLabel()}
            <button
                class="button"
                type="button"
                role="switch"
                id=${this.ids}
                aria-checked=${this.checked?`true`:`false`}
                aria-labelledby=${n}
                aria-readonly=${this.readonly?`true`:s}
                ?disabled=${this.isDisabled}
                @click=${this.onClick}
            ></button>
            <label class="row" part="base" for=${this.ids}>
                <span class="switch ${this.checked?`checked`:``}" part="switch" aria-hidden="true">
                    <span class="handle" part="handle">
                        <svg class="check" viewBox="0 0 6 5" aria-hidden="true"><path d="M2.2 2.7 4.7 0l.9.9L2.2 4.6 0 2.4l.9-.9z" /></svg>
                    </span>
                </span>
                <span class="text" part="text" id="${this.ids}-text" aria-hidden=${this.hideLabel?s:`true`}>${this.sideText}</span>
            </label>
        `}};r([o()],h.prototype,`label`,void 0),r([o({type:Boolean,attribute:`hide-label`})],h.prototype,`hideLabel`,void 0),r([o({attribute:`label-a`})],h.prototype,`labelA`,void 0),r([o({attribute:`label-b`})],h.prototype,`labelB`,void 0),r([o({type:Boolean,reflect:!0})],h.prototype,`checked`,void 0),r([o()],h.prototype,`value`,void 0),r([o({reflect:!0})],h.prototype,`name`,void 0),r([o({reflect:!0})],h.prototype,`size`,void 0),r([o({type:Boolean,reflect:!0})],h.prototype,`disabled`,void 0),r([o({type:Boolean,reflect:!0})],h.prototype,`readonly`,void 0),h=r([t(`ui-toggle`)],h);