import{$ as e,B as t,Ct as n,D as r,Et as i,Mt as a,O as o,Q as s,St as c,T as l,U as u,Y as d,et as f,gt as p,ht as m,jt as h,kt as g,lt as _,mt as v,nt as y,q as b,tt as x,ut as S,v as C,wt as w,xt as T,z as E}from"./theme-switcher-BZXGbHfR.js";import{t as D}from"./live-DHRqgQLr.js";import{a as O,c as k,i as A,l as j,n as M,o as N,r as P,s as F,t as I,u as L}from"./slider-TV7Zlxmg.js";var R=class{constructor(e,t,n){this.wraps=!1,this.frame=0,this.observed=[],this.host=e,this.rowSelector=t,this.flexibleSelector=n,e.addController(this)}hostConnected(){typeof ResizeObserver<`u`&&(this.observer=new ResizeObserver(()=>{this.frame||=requestAnimationFrame(()=>this.measure())}))}hostDisconnected(){cancelAnimationFrame(this.frame),this.frame=0,this.observer?.disconnect(),this.observer=void 0,this.observed=[]}hostUpdated(){let e=this.row();if(!e||!this.observer)return;let t=[this.host,...e.children];if(!(t.length===this.observed.length&&t.every((e,t)=>e===this.observed[t]))){this.observer.disconnect();for(let e of t)this.observer.observe(e);this.observed=t}}row(){return this.host.shadowRoot?.querySelector(this.rowSelector)??null}measure(){this.frame=0;let e=this.row();if(!e)return;let t=[...e.children].flatMap(e=>{let t=getComputedStyle(e);if(t.display===`none`)return[];let n=Number.parseFloat(t.marginInlineStart)+Number.parseFloat(t.marginInlineEnd);return[(e.matches(this.flexibleSelector)?Number.parseFloat(t.minInlineSize)||0:e.getBoundingClientRect().width)+n]}),n=k(t,Number.parseFloat(getComputedStyle(e).columnGap)||0,e.clientWidth);n!==this.wraps&&(this.wraps=n,this.host.requestUpdate())}},z=a`
    :host {
        display: block;
        font-family: var(--ui-font-family);
    }

    .label {
        display: block;
    }

    .container {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--ui-space-md);
        user-select: none;
    }

    /* too narrow for the track's 200px and the boxes (a phone; set by the slider): the row wraps instead of widening the page */
    .container.wrap {
        flex-wrap: wrap;
    }

    .container.wrap .slider {
        flex: 1 1 200px;
    }

    .range-label {
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        line-height: 18px; /* body-compact-01 */
        letter-spacing: var(--ui-tracking-body);
        white-space: nowrap;
    }

    .slider {
        position: relative;
        box-sizing: border-box;
        inline-size: 100%;
        min-inline-size: 200px;
        max-inline-size: 640px;
        padding: var(--ui-space-md) 0;
        cursor: pointer;
        touch-action: none;
    }

    .track {
        position: absolute;
        inline-size: 100%;
        block-size: 2px;
        background: var(--ui-hairline);
        transform: translate(0, -50%);
    }

    .track::before {
        content: '';
        position: absolute;
        inset-block-start: -5px;
        inset-inline-start: 50%;
        display: var(--ui-slider-tick, inline-block); /* Carbon's mark at the middle; a design can drop it (none) */
        inline-size: 2px;
        block-size: 4px;
        background: var(--ui-hairline);
        transform: translate(-50%, 0);
    }

    .filled-track {
        position: absolute;
        inline-size: 100%;
        block-size: 2px;
        background: var(--ui-slider-fill, var(--ui-layer-selected-inverse));
        pointer-events: none;
        transform-origin: left;
        /* from the lower thumb (a range) or the start, to the (upper) thumb */
        transform: translate(calc(var(--_p0, 0) * 100%), -50%) scaleX(calc(var(--_p, 0) - var(--_p0, 0)));
        transition: background var(--ui-duration-moderate) var(--ui-easing);
    }

    .thumb-wrapper {
        position: absolute;
        z-index: 3;
        inline-size: 14px;
        block-size: 14px;
        inset-inline-start: calc(var(--_p, 0) * 100%);
        transform: translate(-50%, -50%);
    }

    :host(:dir(rtl)) .thumb-wrapper {
        transform: translate(50%, -50%);
    }

    :host(:dir(rtl)) .filled-track {
        transform-origin: right;
        transform: translate(calc(var(--_p0, 0) * -100%), -50%) scaleX(calc(var(--_p, 0) - var(--_p0, 0)));
    }

    /* ---- two thumbs (Carbon cds--slider-container--two-handles) ---- */
    .range .slider {
        margin-inline: var(--ui-space-xxs);
    }

    /*
     * --ui-slider-range-*: Carbon's two flag icons, before and after their values; a design can centre round thumbs on
     * their values instead (a 24px hit area round a smaller dot: the -inset), as the single slider's
     */
    .range .thumb-wrapper {
        inline-size: var(--ui-slider-range-handle-width, 16px);
        block-size: var(--ui-slider-range-handle-height, 24px);
    }

    /* the lower thumb sits before its value, the upper one after */
    .range .thumb-wrapper.lower {
        inset-inline-start: calc(var(--_p0, 0) * 100%);
        transform: translate(var(--ui-slider-range-lower-offset, -100%), -50%);
    }

    .range .thumb-wrapper.upper {
        transform: translate(var(--ui-slider-range-upper-offset, 0%), -50%);
    }

    :host(:dir(rtl)) .range .thumb-wrapper.lower {
        transform: translate(calc(-1 * var(--ui-slider-range-lower-offset, -100%)), -50%);
    }

    :host(:dir(rtl)) .range .thumb-wrapper.upper {
        transform: translate(calc(-1 * var(--ui-slider-range-upper-offset, 0%)), -50%);
    }

    .range .thumb,
    .range .thumb:hover,
    .range .thumb:focus,
    .range .thumb:active {
        inset: var(--ui-slider-range-thumb-inset, 0px);
        border-radius: var(--ui-slider-range-thumb-radius, 0);
        background: var(--ui-slider-range-thumb, transparent);
        box-shadow: none;
        transform: none;
    }

    .range .thumb:hover {
        background: var(--ui-slider-range-thumb-hover, var(--ui-slider-range-thumb, transparent));
    }

    .range .thumb:focus {
        box-shadow: var(--ui-slider-range-focus-ring, none);
    }

    /* Carbon: a 6×2 page-coloured gap where the thumb's flat side meets the track (the whole width while focused) */
    .range .thumb::before {
        content: '';
        position: absolute;
        z-index: -1;
        inset-block-start: calc(50% - 1px);
        inline-size: 6px;
        block-size: 2px;
        background: var(--ui-slider-range-gap, var(--ui-canvas));
    }

    .range .thumb[data-handle='lower']::before {
        inset-inline-end: 0;
    }

    .range .thumb[data-handle='upper']::before {
        inset-inline-start: 0;
    }

    .range .thumb:focus::before {
        inline-size: 100%;
    }

    .handle-icon {
        position: absolute;
        inset: 0;
        display: block;
        inline-size: 16px;
        block-size: 24px;
        fill: var(--ui-slider-fill, var(--ui-layer-selected-inverse));
        opacity: var(--ui-slider-range-icon-opacity, 1);
    }

    /* Carbon swaps the lower / upper icons in RTL so the flat side still meets the track: the same as a mirror */
    :host(:dir(rtl)) .handle-icon {
        transform: scaleX(-1);
    }

    .handle-icon.focus,
    .thumb:focus .handle-icon:not(.focus) {
        display: none;
    }

    .thumb:focus .handle-icon.focus {
        display: block;
        fill: var(--ui-interactive, var(--ui-primary));
    }

    .thumb:hover .handle-icon:not(.focus) {
        fill: var(--ui-slider-handle-hover, var(--ui-ink-muted));
    }

    .disabled .handle-icon,
    .disabled .thumb:hover .handle-icon:not(.focus) {
        fill: var(--ui-border-disabled);
    }

    .readonly.range .thumb {
        inline-size: 0;
        block-size: 0;
    }

    .readonly.range .handle-icon {
        display: none;
    }

    ui-tooltip {
        display: block;
        inline-size: 100%;
        block-size: 100%;
    }

    .thumb {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: var(--ui-slider-fill, var(--ui-layer-selected-inverse));
        box-shadow:
            inset 0 0 0 1px transparent,
            inset 0 0 0 2px transparent;
        outline: none;
        transition:
            transform var(--ui-duration-moderate) var(--ui-easing),
            background var(--ui-duration-moderate) var(--ui-easing),
            box-shadow var(--ui-duration-moderate) var(--ui-easing);
    }

    .thumb:hover {
        transform: scale(1.4286);
    }

    /* Carbon cds--slider__thumb:focus (a click or drag too, not only the keyboard): blue fill, 2px blue + layer ring, scaled */
    .thumb:focus {
        background-color: var(--ui-interactive, var(--ui-primary));
        box-shadow:
            inset 0 0 0 2px var(--ui-interactive, var(--ui-primary)),
            inset 0 0 0 3px var(--ui-surface-1);
        transform: scale(1.4286);
    }

    .thumb:active {
        box-shadow: inset 0 0 0 2px var(--ui-interactive, var(--ui-primary));
        transform: scale(1.4286);
    }

    .thumb-wrapper:focus-within ~ .filled-track {
        background-color: var(--ui-border-interactive);
    }

    .input-wrapper {
        position: relative;
    }

    /* Carbon's 64px, wider for numbers that wouldn't fit in its own font and size (--_chars: the longest value's characters, set by the slider) */
    input {
        box-sizing: border-box;
        inline-size: max(64px, calc(var(--_chars, 0) * 1ch + 2 * var(--ui-space-md)));
        block-size: 40px;
        margin: 0;
        padding: 0 var(--ui-space-md);
        /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
        border: var(--ui-field-border, none);
        border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        font-size: var(--ui-field-font-size, 14px);
        letter-spacing: var(--ui-tracking-body);
        appearance: textfield;
        outline: var(--ui-focus-width, 2px) solid transparent;
        outline-offset: -2px;
        /* Carbon slider-text-input is a text-input: background-color and outline at fast-01 */
        transition:
            background-color var(--ui-duration-fast) var(--ui-easing),
            outline-color var(--ui-duration-fast) var(--ui-easing);
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }

    input:focus {
        outline-color: var(--ui-focus);
    }

    .has-status input {
        inline-size: max(96px, calc(var(--_chars, 0) * 1ch + var(--ui-space-md) + var(--ui-space-xxl)));
        padding-inline-end: var(--ui-space-xxl);
    }

    .invalid input {
        outline-color: var(--ui-error);
        box-shadow: var(--ui-field-invalid-halo, none); /* a design's error halo (Kanok: Pixiv's red ring) */
    }

    .invalid input:focus {
        outline-color: var(--ui-focus);
    }

    .status {
        position: absolute;
        inset-block-start: 50%;
        inset-inline-end: var(--ui-space-md);
        display: flex;
        transform: translateY(-50%);
        pointer-events: none;
    }

    /* disabled */
    .disabled .slider {
        cursor: not-allowed;
    }

    .disabled .range-label,
    :host([data-disabled]) .label {
        color: var(--ui-ink-disabled);
    }

    .disabled .thumb,
    .disabled .thumb:hover,
    .disabled .thumb:focus,
    .disabled .filled-track,
    .disabled .thumb-wrapper:focus-within ~ .filled-track {
        background: var(--ui-border-disabled);
        box-shadow: none;
        transform: translate(calc(var(--_p0, 0) * 100%), -50%) scaleX(calc(var(--_p, 0) - var(--_p0, 0)));
    }

    /* the whole track greys, at its full width (Carbon cds--slider--disabled .cds--slider__track) */
    .disabled .track {
        background: var(--ui-border-disabled);
    }

    .disabled .thumb,
    .disabled .thumb:hover {
        transform: none;
        cursor: not-allowed;
    }

    .disabled input,
    .disabled input:focus {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
        outline: none;
    }

    /* read-only */
    .readonly .slider {
        cursor: default;
    }

    .readonly .thumb {
        inline-size: 0;
        block-size: 0;
        inset: auto;
    }

    /* read-only without the number box: the hidden thumb still takes focus (like a read-only input), so ring the track */
    .readonly .slider:has(.thumb:focus) {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: 2px;
    }

    .readonly input {
        background-color: transparent;
    }

    .sr-live {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
    }

    @media (forced-colors: active) {
        .track,
        .filled-track {
            background: CanvasText;
        }

        .thumb {
            border: 1px solid CanvasText;
        }

        .thumb:focus {
            outline: 2px solid Highlight;
        }
    }
`,B=class extends o{static{this.hostStates=[`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.styles=[u,z]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.formControl.reportValidity(this.internals)}formResetCallback(){this.value=this.defaultValue,this.valueUpper=this.defaultValueUpper,this.notANumber=!1}formStateRestoreCallback(e){if(typeof e==`string`&&(this.value=Number(e)),e instanceof FormData){let[t,n]=[...e.values()].map(Number);this.value=t,this.valueUpper=n??this.valueUpper}}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}constructor(){super(),this.label=``,this.localize=new l(this),this.hideLabel=!1,this.value=0,this.valueUpper=null,this.nameUpper=``,this.upperInputLabel=``,this.min=0,this.max=100,this.step=1,this.stepMultiplier=4,this.minLabel=``,this.maxLabel=``,this.formatLabel=(e,t)=>`${e}${t??``}`,this.inputLabel=``,this.hideTextInput=!1,this.name=``,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.invalidText=``,this.warn=!1,this.warnText=``,this.correctedText=``,this.text=``,this.textUpper=``,this.notANumber=!1,this.corrected=``,this.formControl=new S(this),this.customValidityMessage=``,this.slots=new C(this),this.rowWrap=new R(this,`.container`,`.slider`),this.ids=_(`ui-slider`),this.defaultValue=0,this.defaultValueUpper=null,this.dragging=!1,this.dragHandle=`lower`,this.onLabelClick=e=>{b(this,e)&&this.interactive&&this.thumb.focus()},this.onPointerMove=e=>{this.dragging&&this.commit(this.valueAt(e.clientX),!1,this.dragHandle)},this.onPointerUp=e=>{this.dragging&&(this.commit(this.valueAt(e.clientX),!1,this.dragHandle),this.stopDrag(),this.handleValue(this.dragHandle)!==this.valueBeforeDrag&&this.dispatchEvent(new Event(`change`,{bubbles:!0})))},this.valueBeforeDrag=0,this.textChangePending=!1,this.addEventListener(`click`,this.onLabelClick)}connectedCallback(){super.connectedCallback(),this.formControl.captureDefaults(()=>{this.defaultValue=this.value,this.defaultValueUpper=this.valueUpper}),this.text=String(this.value),this.textUpper=String(this.upper)}disconnectedCallback(){super.disconnectedCallback(),this.stopDrag()}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get isRange(){return this.valueUpper!==null&&this.valueUpper!==void 0}get upper(){return this.valueUpper??this.max}get fraction(){return O(this.isRange?this.upper:this.value,this)}get fractionStart(){return this.isRange?O(this.value,this):0}boundsOf(e){return this.isRange?e===`upper`?{min:this.value,max:this.max,step:this.step}:{min:this.min,max:this.upper,step:this.step}:{min:this.min,max:this.max,step:this.step}}handleValue(e){return e===`upper`?this.upper:this.value}willUpdate(e){e.has(`value`)&&!this.notANumber&&(this.text=String(this.value)),e.has(`valueUpper`)&&!this.notANumber&&(this.textUpper=String(this.upper)),(e.has(`min`)||e.has(`max`)||e.has(`value`)||e.has(`valueUpper`))&&(this.isRange?(this.valueUpper=M(this.upper,this.min,this.max),this.value=M(this.value,this.min,this.upper)):(e.has(`min`)||e.has(`max`))&&(this.value=M(this.value,this.min,this.max)))}updated(){this.toggleAttribute(`data-disabled`,this.isDisabled),this.syncFormState(),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}syncFormState(){if(E(this.internals,this.isDisabled))return;if(this.isRange&&this.name){let e=new FormData;e.append(this.name,String(this.value)),e.append(this.nameUpper||this.name,String(this.upper)),this.internals.setFormValue(e)}else this.internals.setFormValue(String(this.value));let e=t(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.thumb):this.notANumber?this.internals.setValidity({badInput:!0},this.invalidText||this.localize.t.field.enterNumber,this.thumb):this.internals.setValidity({})}get thumbFocusable(){return this.interactive||this.readonly&&this.hideTextInput&&!this.isDisabled}get showError(){return this.interactive&&(this.invalid||this.notANumber||!!this.customValidityMessage)}commit(e,t,n=`lower`){let r=this.isRange?I(n,e,this.value,this.upper,this):M(e,this.min,this.max),i=r!==this.handleValue(n);return n===`upper`?this.valueUpper=r:this.value=r,this.notANumber=!1,i&&this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),t&&i&&this.dispatchEvent(new Event(`change`,{bubbles:!0})),i}valueAt(e){let t=this.sliderEl.getBoundingClientRect(),n=t.width===0?0:M((e-t.left)/t.width,0,1);return getComputedStyle(this).direction===`rtl`&&(n=1-n),L(n,this)}onPointerDown(e){if(!this.interactive||e.button!==0)return;e.preventDefault();let t=this.valueAt(e.clientX),n=e.composedPath()[0]?.closest?.(`[data-handle]`)?.dataset.handle;this.dragHandle=this.isRange?n??A(t,this.value,this.upper):`lower`,this.dragging=!0,this.valueBeforeDrag=this.handleValue(this.dragHandle),this.corrected=``;try{this.sliderEl.setPointerCapture(e.pointerId)}catch{}globalThis.addEventListener(`pointermove`,this.onPointerMove),globalThis.addEventListener(`pointerup`,this.onPointerUp),globalThis.addEventListener(`pointercancel`,this.onPointerUp),this.commit(t,!1,this.dragHandle),this.thumbOf(this.dragHandle)?.focus({preventScroll:!0})}thumbOf(e){return this.renderRoot.querySelector(`.thumb[data-handle="${e}"]`)??this.thumb}stopDrag(){this.dragging=!1,globalThis.removeEventListener(`pointermove`,this.onPointerMove),globalThis.removeEventListener(`pointerup`,this.onPointerUp),globalThis.removeEventListener(`pointercancel`,this.onPointerUp)}onThumbKeydown(e,t=`lower`){if(!this.interactive)return;let n=getComputedStyle(this).direction===`rtl`,r=F(e.key,e.shiftKey,this.handleValue(t),{min:this.min,max:this.max,step:this.step,multiplier:this.stepMultiplier,rtl:n});r!==void 0&&(e.preventDefault(),this.corrected=``,this.commit(r,!0,t))}onInput(e,t=`lower`){if(e.stopPropagation(),!this.interactive)return;let n=e.target;t===`upper`?this.textUpper=n.value:this.text=n.value;let r=j(n.value,this.boundsOf(t));r!==void 0&&this.commit(r,!1,t)&&(this.textChangePending=!0)}processText(e=`lower`){let t=P(e===`upper`?this.textUpper:this.text,this.boundsOf(e));t.notANumber?(this.notANumber=!0,this.corrected=``):(this.corrected=t.corrected===void 0?``:(this.correctedText||this.localize.t.field.sliderCorrected).replace(`{value}`,String(t.corrected)),this.notANumber=!1,!this.commit(t.value,!0,e)&&this.textChangePending&&this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.textChangePending=!1,this.text=String(this.value),this.textUpper=String(this.upper))}onInputKeydown(e,t=`lower`){e.key===`Enter`&&this.processText(t)}handleIcons(e){let t=e===`lower`?h`<path d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z" />`:h`<path d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z" />`,n=e===`lower`?h`<path d="M15.08 0H16v6.46h-.92zM0 0h.92v24H0zM15.08 0H16v24h-.92zM0 .92V0h16v.92zM0 24v-.92h16V24z" />`:h`<path d="M.92 24H0v-6.46h.92zM16 24h-.92V0H16zM.92 24H0V0h.92zM16 23.08V24H0v-.92zM16 0v.92H0V0z" />`;return g`<svg class="handle-icon" viewBox="0 0 16 24" aria-hidden="true">${t}</svg><svg class="handle-icon focus" viewBox="0 0 16 24" aria-hidden="true">${t}${n}</svg>`}renderThumb(e,t,n=`lower`){let r=this.isRange,a=this.handleValue(n),o=r?`${this.ids}-label ${this.ids}-${n}-name`:`${this.ids}-label`,s=g`<div
            class="thumb"
            part=${r?`thumb thumb-${n}`:`thumb`}
            role="slider"
            data-handle=${n}
            id=${`${this.ids}-${r?n:`thumb`}`}
            tabindex=${m(this.thumbFocusable?0:void 0)}
            aria-valuemin=${r&&n===`upper`?this.value:this.min}
            aria-valuemax=${r&&n===`lower`?this.upper:this.max}
            aria-valuenow=${a}
            aria-valuetext=${this.formatLabel(a)}
            aria-labelledby=${o}
            aria-disabled=${m(this.isDisabled?`true`:void 0)}
            aria-readonly=${m(this.readonly?`true`:void 0)}
            aria-invalid=${m(e?`true`:void 0)}
            aria-describedby=${m(t)}
            @keydown=${e=>this.onThumbKeydown(e,n)}
        >${r?this.handleIcons(n):i}</div>`;return this.hideTextInput?g`<ui-tooltip text=${this.formatLabel(a)} placement="top">${s}</ui-tooltip>`:s}renderInput(e,t,n,r,a=`lower`){if(this.hideTextInput)return i;let o=this.isRange,s=this.inputLabel||this.localize.t.field.sliderInput;o&&(s=a===`upper`?this.upperInputLabel||this.localize.t.field.sliderUpper:this.inputLabel||this.localize.t.field.sliderLower);let c=!o||a===`upper`,l=o?`${this.ids}-${a}-input`:`${this.ids}-input`;return g`<div class="input-wrapper ${p({"has-status":n&&c})}">
            <input
                part=${o?`input input-${a}`:`input`}
                id=${l}
                type="number"
                inputmode="decimal"
                style=${v({"--_chars":String(N(this.min,this.max,this.step))})}
                .value=${D(a===`upper`?this.textUpper:this.text)}
                aria-label=${s}
                min=${o&&a===`upper`?this.value:this.min}
                max=${o&&a===`lower`?this.upper:this.max}
                step=${this.step}
                ?disabled=${this.isDisabled}
                ?readonly=${this.readonly}
                ?required=${this.required}
                aria-invalid=${e?`true`:`false`}
                aria-describedby=${m(t)}
                @input=${e=>this.onInput(e,a)}
                @blur=${()=>this.processText(a)}
                @keydown=${e=>this.onInputKeydown(e,a)}
            />
            ${c?g`<span class="status">${r}</span>`:i}
        </div>`}focus(e){this.thumb?.focus(e)}renderThumbs(e,t){if(!this.isRange)return g`<div class="thumb-wrapper">${this.renderThumb(e,t)}</div>`;let[n,r]=[`${this.ids}-lower-name`,`${this.ids}-upper-name`];return g`<div class="thumb-wrapper lower">${this.renderThumb(e,t,`lower`)}</div>
            <div class="thumb-wrapper upper">${this.renderThumb(e,t,`upper`)}</div>
            <span class="sr-only" id=${n}>${this.localize.t.field.sliderLower}</span>
            <span class="sr-only" id=${r}>${this.localize.t.field.sliderUpper}</span>`}render(){let t=this.showError,n=e({showError:t,errorText:s(this.invalid,this.customValidityMessage,this.invalidText||(this.notANumber?this.localize.t.field.enterNumber:``)),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:``,slots:this.slots});this.shownKind=n?.kind;let r=!!n&&n.kind!==`helper`,a={container:!0,wrap:this.rowWrap.wraps,range:this.isRange,invalid:t,disabled:this.isDisabled,readonly:this.readonly},o=d(this.ids,n),c=y(n);return g`
            <label class=${this.hideLabel?`sr-only`:`label`} part="label" id=${`${this.ids}-label`} for=${`${this.ids}-${this.isRange?`lower`:`thumb`}`}>${f(this.label,this.formControl.fallbackName(this.label,this.internals))}</label>
            <div
                class=${p(a)}
                part="base"
                role="group"
                aria-labelledby=${`${this.ids}-label`}
                aria-disabled=${m(this.isDisabled?`true`:void 0)}
                style=${`--_p: ${this.fraction}; --_p0: ${this.fractionStart}`}
            >
                ${this.isRange?this.renderInput(t,o,r,c,`lower`):i}
                <span class="range-label" part="min-label">${this.formatLabel(this.min,this.minLabel)}</span>
                <div class="slider" part="track-wrapper" @pointerdown=${this.onPointerDown}>
                    ${this.renderThumbs(t,o)}
                    <div class="track" part="track"></div>
                    <div class="filled-track" part="filled-track"></div>
                </div>
                <span class="range-label" part="max-label">${this.formatLabel(this.max,this.maxLabel)}</span>
                ${this.renderInput(t,o,r,c,this.isRange?`upper`:`lower`)}
            </div>
            ${x(this.ids,n)}
            <div class="sr-live" aria-live="polite">${this.corrected}</div>
        `}};r([n()],B.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],B.prototype,`hideLabel`,void 0),r([n({type:Number})],B.prototype,`value`,void 0),r([n({type:Number,attribute:`value-upper`})],B.prototype,`valueUpper`,void 0),r([n({attribute:`name-upper`})],B.prototype,`nameUpper`,void 0),r([n({attribute:`upper-input-label`})],B.prototype,`upperInputLabel`,void 0),r([n({type:Number})],B.prototype,`min`,void 0),r([n({type:Number})],B.prototype,`max`,void 0),r([n({type:Number})],B.prototype,`step`,void 0),r([n({type:Number,attribute:`step-multiplier`})],B.prototype,`stepMultiplier`,void 0),r([n({attribute:`min-label`})],B.prototype,`minLabel`,void 0),r([n({attribute:`max-label`})],B.prototype,`maxLabel`,void 0),r([n({attribute:!1})],B.prototype,`formatLabel`,void 0),r([n({attribute:`input-label`})],B.prototype,`inputLabel`,void 0),r([n({type:Boolean,reflect:!0,attribute:`hide-text-input`})],B.prototype,`hideTextInput`,void 0),r([n({reflect:!0})],B.prototype,`name`,void 0),r([n({type:Boolean,reflect:!0})],B.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],B.prototype,`readonly`,void 0),r([n({type:Boolean,reflect:!0})],B.prototype,`required`,void 0),r([n({type:Boolean,reflect:!0})],B.prototype,`invalid`,void 0),r([n({attribute:`invalid-text`})],B.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],B.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],B.prototype,`warnText`,void 0),r([n({attribute:`corrected-text`})],B.prototype,`correctedText`,void 0),r([c()],B.prototype,`text`,void 0),r([c()],B.prototype,`textUpper`,void 0),r([c()],B.prototype,`notANumber`,void 0),r([c()],B.prototype,`corrected`,void 0),r([T(`.thumb`)],B.prototype,`thumb`,void 0),r([T(`.slider`)],B.prototype,`sliderEl`,void 0),B=r([w(`ui-slider`)],B);