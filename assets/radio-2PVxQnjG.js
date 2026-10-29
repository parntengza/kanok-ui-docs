import{$ as e,B as t,Ct as n,D as r,Et as i,Mt as a,O as o,Q as s,St as c,T as l,U as u,Y as d,bt as f,et as p,kt as m,lt as h,tt as g,ut as _,v,wt as y,y as b,z as x}from"./theme-switcher-BZXGbHfR.js";var S=`ui-radio, ui-radio-tile`,C=class extends o{constructor(...e){super(...e),this.label=``,this.localize=new l(this),this.hideLabel=!1,this.name=``,this.value=``,this.orientation=`vertical`,this.labelPosition=`right`,this.disabled=!1,this.required=!1,this.readonly=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.requiredText=``,this.touched=!1,this.formControl=new _(this,{reveal:()=>this.touched=!0}),this.customValidityMessage=``,this.groupId=h(`ui-radio-group`),this.defaultValue=``,this.onClick=e=>{let t=e.target.closest(S);t&&this.select(t)},this.onKeydown=e=>{let t=this.enabledRadios(),n=e.target.closest(S);if(!n||t.length===0)return;let r=b(t.length,t.indexOf(n),e.key,{orientation:`both`,homeEnd:!1,rtl:getComputedStyle(this).direction===`rtl`});(r!==void 0||e.key===` `)&&(e.preventDefault(),this.select(r===void 0?n:t[r]))},this.onFocusout=e=>{this.contains(e.relatedTarget)||(this.touched=!0)},this.slots=new v(this)}static{this.hostStates=[`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.styles=[u,a`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .options {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-xxs);
            }

            :host([orientation='horizontal']) .options {
                flex-direction: row;
                flex-wrap: wrap;
                gap: var(--ui-space-md);
            }

            /* inherited by the radios (see ui-radio); their own label-position wins */
            :host([label-position='left']) {
                --_ui-radio-direction: row-reverse;
                --_ui-radio-gap: 8px;
                --_ui-radio-width: fit-content;
            }

            /* Carbon radio-button-group--vertical.--label-left: align-items flex-end, the group as wide as its content */
            :host([label-position='left']:not([orientation='horizontal'])) .options {
                inline-size: fit-content;
                align-items: flex-end;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.formControl.captureDefaults(()=>{!this.value&&!this.hasAttribute(`value`)&&(this.value=this.querySelector(`:is(${S})[checked]`)?.getAttribute(`value`)??``),this.defaultValue=this.value}),this.addEventListener(`click`,this.onClick),this.addEventListener(`keydown`,this.onKeydown),this.addEventListener(`focusout`,this.onFocusout)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onClick),this.removeEventListener(`keydown`,this.onKeydown),this.removeEventListener(`focusout`,this.onFocusout)}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}focus(e){this.tabStop()?.focus(e)}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}updated(){this.syncRadios(),this.syncValidity(),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}syncValidity(){if(x(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value||null);let e=this.tabStop(),n=t(this.invalid,this.invalidText,this.customValidityMessage);n?this.internals.setValidity({customError:!0},n,e):this.required&&!this.value?this.internals.setValidity({valueMissing:!0},this.invalidText||this.requiredText||this.localize.t.field.requiredOne,e):this.internals.setValidity({})}get showError(){return this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||this.required&&!this.value))}enabledRadios(){return this.radios.filter(e=>!e.disabled&&!this.isDisabled)}tabStop(){let e=this.enabledRadios();return e.find(e=>e.value===this.value)??e[0]}get errorText(){return this.invalidText||this.querySelector(`[slot="invalid-text"]`)?.textContent?.trim()||this.requiredText||this.localize.t.field.requiredOne}syncRadios(){let e=this.tabStop(),t=this.showError;for(let n of this.radios)n.checked=n.value===this.value&&this.value!==``,n.tabIndex=n===e?0:-1,n.toggleAttribute(`data-invalid`,t),t?(n.setAttribute(`aria-description`,this.errorText),n.setAttribute(`aria-invalid`,`true`)):(n.removeAttribute(`aria-description`),n.removeAttribute(`aria-invalid`)),n.toggleAttribute(`data-group-disabled`,this.isDisabled),n.toggleAttribute(`data-group-readonly`,this.readonly)}select(e){e.disabled||this.isDisabled||(e.focus(),!(this.readonly||e.value===this.value)&&(this.value=e.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))))}renderLabel(){return!this.label&&!this.slots.has(`label`)?i:m`<div class=${this.hideLabel?`sr-only`:`label`} part="label" id="${this.groupId}-label">${p(this.label,this.formControl.fallbackName(this.label,this.internals))}</div>`}render(){let t=this.showError,n=e({showError:t,errorText:s(this.invalid,this.customValidityMessage,this.invalidText||this.requiredText||this.localize.t.field.requiredOne),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});return this.shownKind=n?.kind,m`
            ${this.renderLabel()}
            <div
                class="options"
                part="base"
                role="radiogroup"
                aria-labelledby=${this.label||this.slots.has(`label`)||this.formControl.fallbackName(this.label,this.internals)?`${this.groupId}-label`:i}
                aria-describedby=${d(this.groupId,n)??i}
                aria-required=${this.required?`true`:`false`}
                aria-readonly=${this.readonly?`true`:i}
                aria-disabled=${this.isDisabled?`true`:i}
                aria-invalid=${t?`true`:`false`}
            >
                <slot @slotchange=${()=>this.syncRadios()}></slot>
            </div>
            ${g(this.groupId,n,!0)}
        `}};r([n()],C.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],C.prototype,`hideLabel`,void 0),r([n({reflect:!0})],C.prototype,`name`,void 0),r([n()],C.prototype,`value`,void 0),r([n({reflect:!0})],C.prototype,`orientation`,void 0),r([n({attribute:`label-position`,reflect:!0})],C.prototype,`labelPosition`,void 0),r([n({type:Boolean,reflect:!0})],C.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],C.prototype,`required`,void 0),r([n({type:Boolean,reflect:!0})],C.prototype,`readonly`,void 0),r([n({attribute:`helper-text`})],C.prototype,`helperText`,void 0),r([n({attribute:`invalid-text`})],C.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],C.prototype,`invalid`,void 0),r([n({type:Boolean,reflect:!0})],C.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],C.prototype,`warnText`,void 0),r([n({attribute:`required-text`})],C.prototype,`requiredText`,void 0),r([c()],C.prototype,`touched`,void 0),r([f({selector:S})],C.prototype,`radios`,void 0),C=r([y(`ui-radio-group`)],C);var w=class extends o{constructor(...e){super(...e),this.value=``,this.checked=!1,this.disabled=!1}static{this.styles=a`
        /*
         * Carbon radio-button__label--left: row-reverse, the circle's inline margins 8px 0 (8px after the text, none at
         * the end), and the label only as wide as its content. A group's label-position arrives through these.
         */
        :host([label-position='left']) {
            --_ui-radio-direction: row-reverse;
            --_ui-radio-gap: 8px;
            --_ui-radio-width: fit-content;
        }

        :host([label-position='right']) {
            --_ui-radio-direction: row;
            --_ui-radio-gap: 10px;
            --_ui-radio-width: auto;
        }

        :host {
            display: flex;
            flex-direction: var(--_ui-radio-direction, row);
            align-items: flex-start;
            gap: var(--_ui-radio-gap, 10px); /* Carbon radio: 10px between the circle and the text */
            inline-size: var(--_ui-radio-width, auto);
            min-height: 24px;
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            color: var(--ui-ink);
            cursor: pointer;
            outline: none;
        }

        /* 3px above and below (Carbon 24px row) — on the parts, not :host, so a page-wide CSS reset can't remove it */
        .circle,
        .text {
            margin-block: 3px;
        }

        .circle {
            flex-shrink: 0;
            display: grid;
            place-items: center;
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            /* --ui-radio-border / -checked: Carbon draws in primary ink; a design can use its brand colour */
            border: 1px solid var(--ui-radio-border, var(--ui-ink));
            border-radius: 50%;
            background-color: transparent; /* Carbon radio-button__appearance: the row or layer shows through */
        }

        :host([checked]) .circle {
            border-color: var(--ui-radio-checked, var(--ui-ink));
        }

        :host([checked]) .circle::after {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--ui-radio-checked, var(--ui-ink));
        }

        /* Carbon radio-button:focus (not :focus-visible), so a click shows the ring too; Carbon's 1.5px offset computes to 1px */
        :host(:focus) .circle {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: 1px;
        }

        /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
        :host(:focus:not(:focus-visible)) .circle {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        :host([data-invalid]) .circle {
            border: 2px solid var(--ui-error);
        }

        :host([disabled]),
        :host([data-group-disabled]) {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        :host([disabled]) .circle,
        :host([data-group-disabled]) .circle {
            border-color: var(--ui-ink-disabled);
        }

        :host([data-group-readonly]) {
            cursor: default;
        }

        :host([data-group-readonly]) .circle {
            border-color: var(--ui-ink-subtle);
        }

        :host([data-group-readonly][checked]) .circle::after {
            background-color: var(--ui-ink-muted);
        }

        /* Carbon radio-button:disabled:checked: the dot greys too, whether the radio or its whole group is disabled */
        :host([disabled][checked]) .circle::after,
        :host([data-group-disabled][checked]) .circle::after {
            background-color: var(--ui-ink-disabled);
        }

        @media (forced-colors: active) {
            .circle {
                border-color: CanvasText;
                forced-color-adjust: none;
            }
            :host([checked]) .circle::after {
                background-color: Highlight;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`radio`)}updated(){this.setAttribute(`aria-checked`,String(this.checked)),this.setAttribute(`aria-disabled`,String(this.disabled))}render(){return m`<span class="circle" part="circle" aria-hidden="true"></span><span class="text" part="label"><slot></slot></span>`}};r([n()],w.prototype,`value`,void 0),r([n({type:Boolean,reflect:!0})],w.prototype,`checked`,void 0),r([n({type:Boolean,reflect:!0})],w.prototype,`disabled`,void 0),r([n({attribute:`label-position`,reflect:!0})],w.prototype,`labelPosition`,void 0),w=r([y(`ui-radio`)],w);export{w as t};