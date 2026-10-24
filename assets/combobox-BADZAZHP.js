import{$ as e,A as t,Ct as n,D as r,E as i,F as a,H as o,I as s,J as c,M as l,Ot as u,Q as d,R as f,St as p,Tt as m,U as h,Z as g,bt as _,ct as v,et as y,h as b,it as x,jt as S,lt as C,nt as w,q as T,st as E,tt as D,w as O,wt as k,xt as A,z as j}from"./theme-switcher-BGAHXRgF.js";import{a as M,c as N,i as P,l as F,o as I,r as L,s as R,t as z}from"./listbox-DS1dd7sD.js";import{o as B}from"./listbox-gjElSjvA.js";import{a as V,i as H,n as U,o as W,r as G,t as K}from"./combobox-BqEnXbKY.js";var q=S`
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

    input {
        box-sizing: border-box;
        width: 100%;
        height: var(--_h);
        margin: 0;
        padding: 0 48px 0 var(--ui-space-md);
        /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
        border: var(--ui-field-border, none);
        border-bottom: 1px solid var(--ui-ink-subtle);
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
        /* Carbon: the combo box's box is a text-input, background-color and outline at fast-01 */
        transition:
            background-color var(--ui-duration-fast) var(--ui-easing),
            outline-color var(--ui-duration-fast) var(--ui-easing);
    }

    input::placeholder {
        color: var(--ui-ink-placeholder);
        opacity: 1;
    }

    input:focus,
    .open input {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    .invalid input {
        outline-color: var(--ui-error);
    }

    .invalid input:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    input:disabled {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
    }

    input:read-only:not(:disabled) {
        background-color: var(--ui-field-readonly-background, transparent);
        border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
    }

    @media (forced-colors: active) {
        input {
            border: 1px solid FieldText;
        }
        input:focus {
            outline-color: Highlight;
        }
    }
`,J=S`
    /* the 64px box is the field's; the open list keeps its rows (--_h), not Carbon's 64px fluid rows (user's choice) */
    :host([data-fluid]) input,
    :host([data-fluid]) .has-status input {
        height: 64px;
        padding: 33px 64px 13px var(--ui-space-md);
    }

    :host([data-fluid]) .has-clear input,
    :host([data-fluid]) .has-status.has-clear input {
        padding-inline-end: 96px;
    }

`,Y=class extends r{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.direction=`bottom`,this.filter=`none`,this.allowCustomValue=!1,this.hideClear=!1,this.loading=!1,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.groups=[],this.options=[],this.text=``,this.open=!1,this.activeIndex=-1,this.touched=!1,this.formControl=new C(this,{reveal:()=>this.touched=!0}),this.customValidityMessage=``,this.localize=new O(this),this.fieldId=v(`ui-combobox`),this.defaultValue=``,this.lastSyncedValue=null,this.shownRows=[],this.reposition=()=>this.position(),this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this.menu)&&!t.includes(this.input)&&!t.includes(this.shadowRoot.querySelector(`.controls`))&&this.closeAndSettle()},this.slots=new b(this)}static{this.hostStates=[`open`,`show-error`,`show-warn`,`has-value`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...k.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[o,x,M,L,P,q,h,J]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}get inputValue(){return this.text}set inputValue(e){this.text=e}connectedCallback(){super.connectedCallback(),E(this,this.fluid),this.formControl.captureDefaults(()=>{!this.value&&!this.hasAttribute(`value`)&&(this.value=w(this)??``),this.defaultValue=this.value}),this.readOptions(),this.observer??=new MutationObserver(e=>{e.some(e=>e.type!==`attributes`||e.target!==this)&&this.readOptions()}),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeMenuListeners()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.lastSyncedValue=null,this.requestUpdate(`value`),this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get messages(){return this.localize.t.list}get committedText(){return H(this.options,this.value,this.allowCustomValue)}get filteredGroups(){return[...K(this.groups,this.text,this.committedText,this.filter)]}get filtered(){return z(this.filteredGroups)}willUpdate(e){if(E(this,this.fluid),e.has(`value`)||e.has(`options`)){let t=e.get(`options`)??this.options,n=W({text:this.text,value:this.value,syncedValue:this.lastSyncedValue,previousOptions:t},this.options,this.allowCustomValue);n!==void 0&&(this.text=n),this.lastSyncedValue=this.value}let t=this.loading?[]:this.filtered;if(this.open&&(e.has(`options`)||e.has(`loading`))){let n=e.has(`loading`)?e.get(`loading`)===!0:this.loading;this.activeIndex=B(t,n?[]:this.shownRows,this.activeIndex,{open:!0,loading:this.loading,arrived:n&&!this.loading,same:F,opening:e=>V(e,this.text)})}this.shownRows=t,this.syncValidity()}updated(e){e.has(`open`)?(this.onOpenChanged(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))):this.open&&(e.has(`activeIndex`)||e.has(`text`)||e.has(`options`))&&(this.position(),this.scrollActiveIntoView()),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`),this.toggleAttribute(`data-has-value`,this.text!==``)}syncValidity(){if(f(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=this.input??void 0,t=j(this.invalid,this.invalidText,this.customValidityMessage);t?this.internals.setValidity({customError:!0},t,e):this.required&&!this.value?this.internals.setValidity({valueMissing:!0},this.messages.required,e):this.internals.setValidity({})}readOptions(){this.groups=I(this),this.options=z(this.groups)}openMenu(e=-1){this.interactive&&(this.activeIndex=e,this.open=!0)}close(){this.open=!1,this.activeIndex=-1}closeAndSettle(){this.commitText(),this.close()}onOpenChanged(){this.open?(this.menu.showPopover(),this.position(),this.scrollActiveIntoView(),this.stopTracking=s(this.input,this.menu,this.reposition),this.stopOutside=l(document,this.onDocumentPointerDown)):(this.menu.matches(`:popover-open`)&&this.menu.hidePopover(),this.removeMenuListeners())}removeMenuListeners(){this.stopTracking?.(),this.stopOutside?.(),this.stopTracking=this.stopOutside=void 0}position(){this.menu.matches(`:popover-open`)&&(this.menu.style.width=`${this.input.getBoundingClientRect().width}px`,t(this.input,this.menu,`${this.direction}-start`,0,{size:!0}))}scrollActiveIntoView(){let e=this.menu.querySelector(`.option.active`);e&&a(e,this.menu)}setValue(e){this.lastSyncedValue=e,e!==this.value&&(this.value=e,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))}selectOption(e){return!e||e.disabled?!1:(this.touched=!0,this.text=e.label,this.setValue(e.value),!0)}commitText(){let e=G(this.text,this.options,this.value,this.allowCustomValue);(e.value!==this.value||e.text!==this.text)&&(this.touched=!0),this.text=e.text,this.setValue(e.value)}clear(){this.touched=!0,this.text=``,this.setValue(``),this.close(),this.input.focus()}selectedIndexIn(e){return e.findIndex(e=>e.value===this.value&&!e.disabled)}onKeydown(e){if(!this.interactive)return;let t=U({open:this.open,active:this.activeIndex,text:this.text,value:this.value,loading:this.loading},this.filtered,this.options,e,this.allowCustomValue);t&&(t.handled&&e.preventDefault(),this.apply(t))}apply(e){e.pick!==void 0&&this.selectOption(this.filtered[e.pick]),e.pickOption&&this.selectOption(e.pickOption),e.commit&&this.commitText(),e.clearText&&(this.text=``),e.clearValue&&this.setValue(``),e.close?this.close():e.open&&!this.open?this.openMenu(e.active??-1):e.active!==void 0&&(this.activeIndex=e.active)}onInput(){this.text=this.input.value,this.dispatchEvent(new CustomEvent(`ui-input`,{detail:{value:this.text},bubbles:!0,composed:!0}));let e=this.loading?-1:V(this.filtered,this.text);this.open?this.activeIndex=e:this.openMenu(e)}openFromPointer(){this.openMenu(this.selectedIndexIn(this.filtered))}onInputClick(){this.open||this.openFromPointer()}onToggleClick(){this.open?this.closeAndSettle():this.openFromPointer(),this.input.focus()}onFocusOut(){this.commitText(),this.touched=!0,this.close()}onOptionClick(e){this.selectOption(this.filtered[e])&&this.close()}renderOption(e,t){let n=e.value===this.value;return u`<li
            id="${this.fieldId}-opt-${t}"
            class="option ${t===this.activeIndex?`active`:``}"
            part="option"
            role="option"
            aria-selected=${n?`true`:`false`}
            aria-disabled=${e.disabled?`true`:m}
            @click=${()=>this.onOptionClick(t)}
        >
            ${N(e)}
            ${n?this.renderCheck():m}
        </li>`}renderCheck(){return u`<svg class="check" viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6.5 12.5-4-4 .7-.7 3.3 3.3 7.3-7.3.7.7z" />
        </svg>`}renderRows(){let e=this.messages;if(this.loading)return u`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${e.searching}</li>`;let t=this.filteredGroups;return t.length===0?u`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${e.noResults}</li>`:R(t,this.fieldId,(e,t)=>this.renderOption(e,t))}get statusText(){return this.open?this.loading?this.messages.searching:this.filteredGroups.length===0?this.messages.noResults:``:``}renderClear(e){return e?u`<button class="clear" part="clear-button" type="button" tabindex="-1" aria-label=${this.messages.clear} @click=${this.clear}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
        </button>`:m}renderLabel(){let t=!this.label&&!this.slots.has(`label`),n=t?this.formControl.fallbackName(this.label,this.internals):``;return t&&!n?m:u`<label class=${this.hideLabel||t?`sr-only`:`label`} part="label" id="${this.fieldId}-label" for=${this.fieldId}>${e(this.label,n)}</label>`}fieldClasses(e,t,n){return[e?`invalid`:``,t&&t.kind!==`helper`?`has-status`:``,n?`has-clear`:``,this.open?`open`:``].filter(Boolean).join(` `)}get showError(){return this.interactive&&(this.invalid||this.touched&&!this.internals.validity.valid)}get fieldMessage(){return d({showError:this.showError,errorText:g(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots})}get showClear(){return this.interactive&&this.text!==``&&!this.hideClear}render(){let e=this.messages,t=this.showError,n=this.fieldMessage;T(this,n);let r=this.showClear,i=this.fieldClasses(t,n,r),a=this.open&&!this.loading&&this.activeIndex>=0?`${this.fieldId}-opt-${this.activeIndex}`:m;return u`
            ${this.renderLabel()}
            <div class="field ${i}" part="base">
                <input
                    part="input"
                    id=${this.fieldId}
                    type="text"
                    role="combobox"
                    autocomplete="off"
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls="${this.fieldId}-list"
                    aria-activedescendant=${a}
                    aria-required=${this.required?`true`:m}
                    aria-invalid=${t?`true`:`false`}
                    aria-describedby=${c(this.fieldId,n)??m}
                    placeholder=${this.placeholder}
                    .value=${this.text}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    @input=${this.onInput}
                    @keydown=${this.onKeydown}
                    @click=${this.onInputClick}
                    @focusout=${this.onFocusOut}
                />
                <span class="controls" @mousedown=${e=>e.preventDefault()}>
                    <span class="status">${D(n)}</span>
                    ${this.renderClear(r)}
                    <button
                        class="toggle"
                        part="toggle"
                        type="button"
                        tabindex="-1"
                        aria-label=${this.open?e.closeList:e.openList}
                        aria-expanded=${this.open?`true`:`false`}
                        aria-controls="${this.fieldId}-list"
                        ?disabled=${!this.interactive}
                        @click=${this.onToggleClick}
                    >
                        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                    </button>
                </span>
            </div>
            ${y(this.fieldId,n)}
            <ul
                class="menu"
                part="menu"
                id="${this.fieldId}-list"
                popover="manual"
                role="listbox"
                tabindex="-1"
                aria-labelledby="${this.fieldId}-label"
                aria-busy=${this.loading?`true`:m}
                @mousedown=${e=>e.preventDefault()}
            >
                ${this.open?this.renderRows():m}
            </ul>
            <span class="sr-only" role="status">${this.statusText}</span>
        `}};i([p()],Y.prototype,`label`,void 0),i([p({type:Boolean,attribute:`hide-label`})],Y.prototype,`hideLabel`,void 0),i([p({attribute:`helper-text`})],Y.prototype,`helperText`,void 0),i([p({attribute:`invalid-text`})],Y.prototype,`invalidText`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`invalid`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`warn`,void 0),i([p({attribute:`warn-text`})],Y.prototype,`warnText`,void 0),i([p()],Y.prototype,`placeholder`,void 0),i([p()],Y.prototype,`value`,void 0),i([p({reflect:!0})],Y.prototype,`name`,void 0),i([p({reflect:!0})],Y.prototype,`size`,void 0),i([p()],Y.prototype,`direction`,void 0),i([p()],Y.prototype,`filter`,void 0),i([p({type:Boolean,attribute:`allow-custom-value`})],Y.prototype,`allowCustomValue`,void 0),i([p({type:Boolean,reflect:!0,attribute:`hide-clear`})],Y.prototype,`hideClear`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`loading`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`disabled`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`required`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`readonly`,void 0),i([p({type:Boolean,reflect:!0})],Y.prototype,`fluid`,void 0),i([A()],Y.prototype,`groups`,void 0),i([A()],Y.prototype,`options`,void 0),i([A()],Y.prototype,`text`,void 0),i([A()],Y.prototype,`open`,void 0),i([A()],Y.prototype,`activeIndex`,void 0),i([A()],Y.prototype,`touched`,void 0),i([_(`input`)],Y.prototype,`input`,void 0),i([_(`.menu`)],Y.prototype,`menu`,void 0),Y=i([n(`ui-combobox`)],Y);