import{$ as e,B as t,Ct as n,D as r,Et as i,J as a,Mt as o,O as s,St as c,T as l,Tt as u,U as d,W as f,Y as p,Z as m,ct as h,dt as g,et as _,ft as v,kt as y,lt as b,nt as x,tt as S,ut as C,v as w,wt as T,xt as E,z as D}from"./theme-switcher-BZXGbHfR.js";import{n as O,t as k}from"./auto-grow-B4XS1-9c.js";var A=class extends s{constructor(...e){super(...e),this.label=``,this.localize=new l(this),this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.value=``,this.name=``,this.placeholder=``,this.rows=4,this.autocomplete=``,this.inputmode=``,this.enterkeyhint=``,this.counterMode=`character`,this.autoGrow=!1,this.tooLongText=``,this.nearLimitText=``,this.disabled=!1,this.readonly=!1,this.fluid=!1,this.required=!1,this.touched=!1,this.formControl=new C(this,{reveal:()=>this.touched=!0}),this.customValidityMessage=``,this.inputId=b(`ui-text-area`),this.slots=new w(this),this.defaultValue=``,this.lastWidth=0}static{this.hostStates=[`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[d,o`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .field {
                position: relative;
            }

            .top {
                display: flex;
                justify-content: space-between;
                gap: var(--ui-space-xs);
            }

            .counter {
                margin-inline-start: auto;
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
                color: var(--ui-ink-muted);
            }

            .counter.over {
                color: var(--ui-error);
            }

            /* Carbon text-area: 11px/16px padding, 40px min, body-01, vertical resize */
            textarea {
                box-sizing: border-box;
                display: block;
                width: 100%;
                min-width: 10rem;
                min-height: 40px;
                margin: 0;
                padding: 11px var(--ui-space-md);
                /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
                border: var(--ui-field-border, none);
                border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
                border-radius: var(--ui-field-radius, var(--ui-radius-none));
                background-color: var(--ui-field-background, var(--ui-surface-1));
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                font-size: var(--ui-field-font-size, 14px);
                line-height: 20px; /* body-01 */
                letter-spacing: var(--ui-tracking-body);
                resize: vertical;
                outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
                outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
                /* Carbon text-area: background-color and outline at fast-01 */
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing),
                    outline-color var(--ui-duration-fast) var(--ui-easing);
            }

            textarea:hover:not(:disabled):not(:focus) {
                border-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
                border-bottom-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
            }

            /* room for the status icon so text doesn't run under it */
            .has-status textarea {
                padding-inline-end: calc(var(--ui-space-md) * 2 + 16px);
            }

            textarea::placeholder {
                color: var(--ui-ink-placeholder);
                opacity: 1;
            }

            textarea:focus {
                border-color: var(--ui-field-focus-border-color, inherit);
                border-bottom-color: var(--ui-field-focus-border-color, var(--ui-ink-subtle));
                outline-color: var(--ui-focus);
                box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
            }

            .invalid textarea {
                outline-color: var(--ui-error);
                box-shadow: var(--ui-field-invalid-halo, none); /* a design's error halo (Kanok: Pixiv's red ring) */
            }

            .invalid textarea:focus {
                border-color: var(--ui-field-focus-border-color, inherit);
                border-bottom-color: var(--ui-field-focus-border-color, var(--ui-ink-subtle));
                outline-color: var(--ui-focus);
                box-shadow: var(--ui-field-invalid-halo, var(--ui-field-focus-halo, none)); /* an error keeps its halo while focused (Kanok: Pixiv's red) */
            }

            textarea:disabled {
                border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                resize: none;
            }

            textarea:disabled::placeholder {
                color: var(--ui-ink-disabled);
            }

            /* sized by its text, not by hand */
            :host([auto-grow]) textarea {
                resize: none;
            }

            textarea:read-only:not(:disabled) {
                background-color: var(--ui-field-readonly-background, transparent);
                border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
            }

            /* Carbon: the icon sits in the top-right corner, not vertically centred */
            .status {
                position: absolute;
                top: var(--ui-space-xs);
                inset-inline-end: var(--ui-space-md);
                display: flex;
                pointer-events: none;
            }

            @media (forced-colors: active) {
                textarea {
                    border: 1px solid FieldText;
                }
                textarea:focus {
                    outline-color: Highlight;
                }
            }
        `,f,o`
            /* Carbon fluid text area: the text starts 32px down, under the label */
            :host([data-fluid]) textarea {
                margin-block-start: 32px;
                padding-block: 0 13px;
            }

            :host([data-fluid]) .has-status textarea {
                padding-inline-end: var(--ui-space-md);
            }

            :host([data-fluid]) .status {
                --ui-fluid-icon-end: var(--ui-space-md);
                inset-block: 0;
                inset-inline-end: 0;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}willUpdate(){h(this,this.fluid)}connectedCallback(){super.connectedCallback(),h(this,this.fluid),this.formControl.captureDefaults(()=>{this.defaultValue=this.value})}disconnectedCallback(){super.disconnectedCallback(),this.widthObserver?.disconnect(),this.widthObserver=void 0}fit(){this.autoGrow&&(k(this.textarea,this.maxRows),this.widthObserver??=new ResizeObserver(([e])=>{let t=e.contentRect.width;t!==this.lastWidth&&(this.lastWidth=t,k(this.textarea,this.maxRows))}),this.widthObserver.observe(this.textarea))}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.touched=!0,this.formControl.reportValidity(this.internals)}updated(e){this.syncFormState(),this.autoGrow?this.fit():e.get(`autoGrow`)&&(this.widthObserver?.disconnect(),O(this.textarea)),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get counted(){return v(this.value,this.counterMode,this.localize.lang())}get count(){return g(this.counted,this.maxCount)}get overLimit(){return this.count.over}get tooLongMessage(){let e=this.localize.t.field;return(this.tooLongText||(this.counterMode===`word`?e.tooManyWords:e.tooLong)).replace(`{max}`,String(this.maxCount))}syncFormState(){if(D(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=t(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.textarea):this.overLimit?this.internals.setValidity({tooLong:!0},this.tooLongMessage,this.textarea):this.textarea.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.textarea.validity,m(this.textarea,this.localize.t.field.required),this.textarea)}onInput(e){this.value=e.target.value}onChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0}))}get showError(){return this.interactive?this.invalid||this.overLimit?!0:this.touched&&(!!this.customValidityMessage||!!this.textarea&&!this.textarea.validity.valid):!1}get counterAnnouncement(){if(this.count.over)return this.tooLongMessage;if(!this.count.near)return``;let e=this.localize.t.field;return this.nearLimitText||(this.counterMode===`word`?e.nearWordLimit:e.nearLimit)}get errorText(){return this.customValidityMessage&&!this.invalid?this.customValidityMessage:this.invalidText?this.invalidText:this.overLimit?this.tooLongMessage:this.textarea?m(this.textarea,this.localize.t.field.required):``}renderLabel(){let e=!this.label&&!this.slots.has(`label`),t=e?this.formControl.fallbackName(this.label,this.internals):``;return e&&!t?i:y`<label class=${this.hideLabel||e?`sr-only`:`label`} part="label" for=${this.inputId}>${_(this.label,t)}</label>`}renderCounter(){return this.maxCount===void 0?i:y`<span class="counter ${this.overLimit?`over`:``}" part="counter" aria-hidden="true">
                ${this.counted}/${this.maxCount}
            </span>
            <span class="sr-only" aria-live="polite">${this.counterAnnouncement}</span>`}render(){let t=this.showError,n=e({showError:t,errorText:this.errorText,showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});a(this,n),this.shownKind=n?.kind;let r=[t?`invalid`:``,n&&n.kind!==`helper`?`has-status`:``].filter(Boolean).join(` `);return y`
            <div class="top">${this.renderLabel()}${this.renderCounter()}</div>
            <div class="field ${r}" part="base">
                <textarea
                    part="input"
                    id=${this.inputId}
                    autocomplete=${this.autocomplete||i}
                    inputmode=${this.inputmode||i}
                    enterkeyhint=${this.enterkeyhint||i}
                    .value=${this.value}
                    name=${this.name||i}
                    placeholder=${this.placeholder||i}
                    rows=${this.rows}
                    minlength=${this.minlength??i}
                    maxlength=${this.maxlength??i}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-invalid=${t?`true`:`false`}
                    aria-describedby=${p(this.inputId,n)??i}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @blur=${()=>this.touched=!0}
                ></textarea>
                <span class="status">${x(n)}</span>
            </div>
            ${S(this.inputId,n)}
        `}};r([n()],A.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],A.prototype,`hideLabel`,void 0),r([n({attribute:`helper-text`})],A.prototype,`helperText`,void 0),r([n({attribute:`invalid-text`})],A.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],A.prototype,`invalid`,void 0),r([n({type:Boolean,reflect:!0})],A.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],A.prototype,`warnText`,void 0),r([n()],A.prototype,`value`,void 0),r([n({reflect:!0})],A.prototype,`name`,void 0),r([n()],A.prototype,`placeholder`,void 0),r([n({type:Number})],A.prototype,`rows`,void 0),r([n({type:Number})],A.prototype,`minlength`,void 0),r([n({type:Number})],A.prototype,`maxlength`,void 0),r([n()],A.prototype,`autocomplete`,void 0),r([n()],A.prototype,`inputmode`,void 0),r([n()],A.prototype,`enterkeyhint`,void 0),r([n({type:Number,attribute:`max-count`})],A.prototype,`maxCount`,void 0),r([n({attribute:`counter-mode`})],A.prototype,`counterMode`,void 0),r([n({type:Boolean,reflect:!0,attribute:`auto-grow`})],A.prototype,`autoGrow`,void 0),r([n({type:Number,attribute:`max-rows`})],A.prototype,`maxRows`,void 0),r([n({attribute:`too-long-text`})],A.prototype,`tooLongText`,void 0),r([n({attribute:`near-limit-text`})],A.prototype,`nearLimitText`,void 0),r([n({type:Boolean,reflect:!0})],A.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],A.prototype,`readonly`,void 0),r([n({type:Boolean,reflect:!0})],A.prototype,`fluid`,void 0),r([n({type:Boolean,reflect:!0})],A.prototype,`required`,void 0),r([c()],A.prototype,`touched`,void 0),r([E(`textarea`)],A.prototype,`textarea`,void 0),A=r([T(`ui-text-area`)],A);