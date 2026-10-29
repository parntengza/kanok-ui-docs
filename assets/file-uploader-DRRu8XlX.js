import{Ct as e,D as t,Et as n,Mt as r,O as i,St as a,T as o,Tt as s,V as c,at as l,gt as u,ht as d,jt as f,kt as p,lt as m,ut as h,wt as g,xt as _,z as v}from"./theme-switcher-BZXGbHfR.js";import"./button-DGUm7Yxm.js";import{a as y,n as b}from"./skeleton-Bt17J2no.js";import{a as x,c as S,i as C,n as w,o as T,r as E,s as D,t as O}from"./file-uploader-Dfyz1981.js";import"./progress-bar-wnl7jl3M.js";var k=p`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,A=p`<svg class="complete" viewBox="0 0 16 16"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-1 10.2L4 8.2l.8-.8L7 9.6l4.2-4.2.8.8z" /></svg>`,j=p`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8Z" /><path d="M20 22h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8Z" /></svg>`,M=p`<svg class="invalid-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.5 3h1v5h-1zM8 12.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" /></svg>`;function N(e){e&&(e.tabIndex=-1,e.addEventListener(`blur`,()=>e.removeAttribute(`tabindex`),{once:!0}),e.focus())}var P=class extends i{constructor(...e){super(...e),this.name=``,this.uuid=``,this.status=`edit`,this.invalid=!1,this.errorSubject=``,this.errorBody=``,this.size=`md`,this.disabled=!1,this.iconLabel=``,this.retryable=!1,this.ids=m(`ui-file-uploader-item`),this.localize=new o(this),this.announcement=``,this.retryFocused=!1}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[l,r`
        :host {
            display: block;
            max-inline-size: var(--ui-file-uploader-max-width, 320px); /* the uploader's width (Carbon 320px; Kanok: none) */
            font-family: var(--ui-font-family);
        }

        /* 8px under each file but the last — on the row, collapsing through the host: a page-wide CSS reset would remove a :host margin */
        .row {
            margin-block-end: var(--ui-space-xs);
        }

        /* holds focus while a restarted upload shows only its spinner (see focusRow) */
        .row:focus {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
        .row:focus:not(:focus-visible) {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        :host(:last-of-type) .row {
            margin-block-end: 0;
        }

        /* a progress bar sits right under the row: the 8px goes under the bar */
        .row.progressing {
            margin-block-end: 0;
        }

        .progress {
            margin-block-end: var(--ui-space-xs);
        }

        :host(:last-of-type) .progress {
            margin-block-end: 0;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr auto auto; /* name | size, percentage | state */
            grid-auto-rows: auto;
            align-items: center;
            gap: 12px 0;
            min-block-size: 48px;
            /* Carbon: a square layer-coloured row; a design can round and outline it (Kanok: its layer is the page's white) */
            border-radius: var(--ui-file-item-radius, 0);
            box-shadow: var(--ui-file-item-edge, none);
            background-color: var(--ui-surface-1);
            overflow-wrap: break-word;
        }

        :host([size='md']) .row {
            gap: var(--ui-space-xs) 0;
            min-block-size: 40px;
        }

        :host([size='sm']) .row {
            gap: var(--ui-space-xxs) 0;
            min-block-size: 32px;
        }

        .row.invalid {
            padding: 12px 0;
            outline: 2px solid var(--ui-error);
            outline-offset: -2px;
        }

        :host([size='md']) .row.invalid {
            padding: var(--ui-space-xs) 0;
        }

        :host([size='sm']) .row.invalid {
            padding: var(--ui-space-xxs) 0;
        }

        .name {
            margin: 0 0 0 var(--ui-space-md);
            overflow: hidden;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        :host([disabled]) .name {
            color: var(--ui-ink-disabled);
        }

        .meta {
            display: flex;
            gap: var(--ui-space-xs);
            padding-inline: var(--ui-space-xs);
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            font-variant-numeric: tabular-nums;
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
            white-space: nowrap;
        }

        :host([disabled]) .meta {
            color: var(--ui-ink-disabled);
        }

        .state {
            display: flex;
            align-items: center;
            justify-content: center;
            min-inline-size: 24px;
            padding-inline-end: 12px;
        }

        .invalid-icon {
            width: 16px;
            height: 16px;
            margin-inline-end: var(--ui-space-xs);
            fill: var(--ui-error);
        }

        .close,
        .retry {
            display: flex;
            align-items: center;
            justify-content: center;
            inline-size: 24px;
            block-size: 24px;
            padding: 0;
            border: none;
            background: transparent;
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
        }

        .close svg,
        .retry svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .close:focus-visible,
        .retry:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        .close:disabled,
        .retry:disabled {
            color: var(--ui-icon-disabled);
            cursor: not-allowed;
        }

        .complete {
            inline-size: 24px;
            block-size: 16px;
            fill: var(--ui-interactive, var(--ui-primary));
        }

        .spinner {
            box-sizing: border-box;
            inline-size: 16px;
            block-size: 16px;
            margin: var(--ui-space-xxs);
            border: 2px solid var(--ui-layer-accent);
            border-top-color: var(--ui-interactive, var(--ui-primary));
            border-radius: 50%;
            animation: spin 690ms linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 2s;
            }
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .error {
            grid-column: 1 / -1;
            margin: 0;
            padding: var(--ui-space-md) 0 0;
            border-block-start: 1px solid var(--ui-hairline);
        }

        :host([size='md']) .error {
            padding-block-start: 11px;
        }

        :host([size='sm']) .error {
            padding-block-start: 7px;
        }

        .error-title,
        .error-body {
            margin: 0;
            padding: 0 var(--ui-space-md);
            font: var(--ui-font-caption);
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
        }

        .error-title {
            color: var(--ui-error-text, var(--ui-error));
        }

        .error-body {
            color: var(--ui-ink);
        }

        @media (forced-colors: active) {
            .row {
                outline: 1px solid CanvasText;
            }
        }
    `]}willUpdate(e){e.get(`status`)===`uploading`&&this.status===`complete`?this.announcement=`${this.localize.t.fileUploader.uploaded}: ${this.name}`:e.has(`status`)&&(this.announcement=``),this.retryFocused=!!this.shadowRoot?.activeElement?.matches(`.retry`)}updated(){if(!this.retryFocused||this.renderRoot.querySelector(`.retry`))return;let e=this.renderRoot.querySelector(`.close`);e?e.focus():N(this.renderRoot.querySelector(`.row`))}get percent(){return this.status===`uploading`?S(this.progress):void 0}get removable(){return!this.disabled&&(this.status===`edit`||this.percent!==void 0)}get errorText(){return x(this,this.localize.t.fileUploader)}get defaultIconLabel(){let e=this.localize.t.fileUploader;return this.status===`uploading`?e.uploading:this.status===`complete`?e.uploaded:e.removeFile}requestDelete(){this.disabled||this.dispatchEvent(new CustomEvent(`ui-delete`,{detail:{uuid:this.uuid||this.name,name:this.name},bubbles:!0,composed:!0}))}requestRetry(){this.disabled||this.dispatchEvent(new CustomEvent(`ui-retry`,{detail:{uuid:this.uuid||this.name,name:this.name},bubbles:!0,composed:!0}))}renderState(){let e=this.localize.t.fileUploader,t=this.iconLabel||this.defaultIconLabel,r=this.percent;if(this.status===`uploading`&&r===void 0)return p`<span class="spinner" data-file-state aria-hidden="true"></span><span class="sr-only">${t}</span>`;if(this.status===`complete`)return p`<span data-file-state aria-hidden="true">${A}</span><span class="sr-only">${t}</span>`;let i=this.errorText?`${this.ids}-error`:void 0,a=this.invalid&&this.retryable;return p`${this.invalid?M:n}${a?p`<button
                      class="retry"
                      part="retry-button"
                      type="button"
                      aria-label=${`${e.retry} - ${this.name}`}
                      aria-describedby=${d(i)}
                      ?disabled=${this.disabled}
                      @click=${this.requestRetry}
                  >
                      ${j}
                  </button>`:n}<button
                class="close"
                part="delete-button"
                type="button"
                aria-label=${`${r===void 0?t:e.cancelUpload} - ${this.name}`}
                aria-describedby=${d(i)}
                ?disabled=${this.disabled}
                @click=${this.requestDelete}
            >
                ${k}
            </button>`}renderMeta(e){let t=this.localize.lang(),r=typeof this.fileSize==`number`&&Number.isFinite(this.fileSize)?E(this.fileSize,t):``;if(!r&&e===void 0)return n;let i=r?p`<span part="size">${r}</span>`:n,a=e===void 0?n:p`<span part="percent" aria-hidden="true">${C(e,t)}</span>`;return p`<span class="meta">${i}${a}</span>`}renderError(){let e=this.errorText;return e?p`<div class="error" part="error" role="alert" id="${this.ids}-error">
            <div class="error-title">${e}</div>
            ${this.errorBody?p`<p class="error-body">${this.errorBody}</p>`:n}
        </div>`:n}renderProgress(e){if(e===void 0)return n;let t=`${this.iconLabel||this.localize.t.fileUploader.uploading} - ${this.name}`;return p`<ui-progress-bar class="progress" part="progress" size="sm" hide-label label=${t} .value=${e}></ui-progress-bar>`}render(){let e=this.percent;return p`<div class="row ${u({invalid:this.invalid,progressing:e!==void 0})}" part="base" aria-disabled=${d(this.disabled?`true`:void 0)}>
                <p class="name" part="name">${this.name}</p>
                ${this.renderMeta(e)}
                <span class="state">${this.renderState()}</span>
                ${this.renderError()}
                <span class="sr-only" role="status">${this.announcement}</span>
            </div>
            ${this.renderProgress(e)}`}};t([e()],P.prototype,`name`,void 0),t([e()],P.prototype,`uuid`,void 0),t([e({reflect:!0})],P.prototype,`status`,void 0),t([e({type:Boolean,reflect:!0})],P.prototype,`invalid`,void 0),t([e({attribute:`error-subject`})],P.prototype,`errorSubject`,void 0),t([e({attribute:`error-body`})],P.prototype,`errorBody`,void 0),t([e({reflect:!0})],P.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),t([e({attribute:`icon-label`})],P.prototype,`iconLabel`,void 0),t([e({type:Number})],P.prototype,`progress`,void 0),t([e({type:Boolean,reflect:!0})],P.prototype,`retryable`,void 0),t([e({type:Number,attribute:`file-size`})],P.prototype,`fileSize`,void 0),t([a()],P.prototype,`announcement`,void 0),P=t([g(`ui-file-uploader-item`)],P);var F=class extends b{static{this.styles=[y,r`
            :host {
                display: block;
            }

            .stack {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: var(--ui-space-xs);
            }

            .title {
                inline-size: 100px;
                block-size: 24px;
            }

            .description {
                inline-size: 225px;
                block-size: 16px;
            }

            .button {
                inline-size: 150px;
                block-size: var(--ui-field-height-lg, 48px);
            }
        `]}render(){return p`<div class="stack">
            <span class="bone title" part="title"></span><span class="bone description" part="description"></span><span class="bone button" part="button"></span>
        </div>`}};F=t([g(`ui-file-uploader-skeleton`)],F);var I=f`<svg viewBox="0 0 32 32"><path d="M6 18 7.41 19.41 15 11.83 15 30 17 30 17 11.83 24.59 19.41 26 18 16 8 6 18z" /><path d="M6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4z" /></svg>`,L=0,R=class extends i{constructor(...e){super(...e),this.labelTitle=``,this.localize=new o(this),this.labelDescription=``,this.buttonLabel=``,this.buttonKind=`primary`,this.size=`md`,this.drop=!1,this.dropLabel=``,this.accept=``,this.multiple=!1,this.maxFileSize=0,this.maxFiles=0,this.maxTotalSize=0,this.showSize=!1,this.name=``,this.disabled=!1,this.status=`edit`,this.iconLabel=``,this.keepLabel=!1,this.required=!1,this.requiredText=``,this.invalidTypeText=``,this.tooLargeText=``,this.tooManyText=``,this.totalTooLargeText=``,this.invalidBodyText=``,this.files=[],this.dragOver=!1,this.pickedLabel=``,this.formControl=new h(this),this.customValidityMessage=``,this.ids=m(`ui-file-uploader`)}static{this.hostStates=[`drag-over`]}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.formAssociated=!0}static{this.styles=[l,r`
        :host {
            display: block;
            inline-size: 100%;
            font-family: var(--ui-font-family);
        }

        .title {
            margin: 0 0 var(--ui-space-xs);
            color: var(--ui-ink);
            font: var(--ui-font-body-emphasis);
            line-height: 18px; /* heading-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        .description {
            margin: 0 0 var(--ui-space-md);
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        :host([disabled]) .title,
        :host([disabled]) .description {
            color: var(--ui-ink-disabled);
        }

        /* Carbon's drop container; a design lays it out with --ui-file-drop-* (Kanok: a filled, centred tile with an icon) */
        .drop {
            display: flex;
            flex-direction: var(--ui-file-drop-direction, row);
            align-items: var(--ui-file-drop-align, flex-start);
            justify-content: var(--ui-file-drop-justify, space-between);
            gap: var(--ui-file-drop-gap, 0);
            box-sizing: border-box;
            inline-size: 100%;
            max-inline-size: var(--ui-file-uploader-max-width, 320px);
            block-size: var(--ui-file-drop-height, 96px);
            min-block-size: var(--ui-file-drop-min-height, auto);
            padding: var(--ui-file-drop-padding, var(--ui-space-md));
            border: 1px dashed var(--ui-hairline-strong);
            border-radius: var(--ui-file-drop-radius, var(--ui-field-radius, 0)); /* the field setting: a drop zone is an input */
            background: var(--ui-file-drop-background, transparent);
            color: var(--ui-link);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            text-align: var(--ui-file-drop-text-align, start);
            overflow: hidden;
            cursor: pointer;
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: -2px;
            /* Carbon file-browse-btn: everything at fast-02 (the outline, and the text colour while pressed) */
            transition:
                outline-color var(--ui-duration-moderate) var(--ui-easing),
                color var(--ui-duration-moderate) var(--ui-easing);
        }

        .drop-icon {
            display: var(--ui-file-drop-icon-display, none);
            flex: none;
            place-items: center;
            inline-size: 40px;
            block-size: 40px;
            border-radius: 50%;
            background: var(--ui-file-drop-icon-background, transparent);
            fill: var(--ui-file-drop-icon-color, currentColor);
        }

        .drop:disabled .drop-icon {
            fill: var(--ui-ink-disabled);
        }

        .drop-icon svg {
            inline-size: 20px;
            block-size: 20px;
        }

        .drop:hover,
        .drop.drag-over {
            border-color: var(--ui-file-drop-hover-border-color, var(--ui-hairline-strong));
            background: var(--ui-file-drop-hover-background, var(--ui-file-drop-background, transparent));
            outline-color: var(--ui-file-drop-hover-outline, var(--ui-focus));
        }

        .drop:focus-visible {
            outline-color: var(--ui-focus);
            text-decoration: underline;
        }

        .drop:hover {
            text-decoration: var(--ui-file-drop-hover-decoration, underline);
        }

        .drop:active {
            color: var(--ui-ink);
        }

        .drop:disabled {
            border-color: var(--ui-button-disabled);
            background: var(--ui-file-drop-background, transparent); /* no hover fill */
            color: var(--ui-ink-disabled);
            cursor: no-drop;
            text-decoration: none;
            outline: none;
        }

        .items {
            margin-block-start: var(--ui-space-md);
        }

        :host([drop]) .items {
            margin-block-start: var(--ui-space-xs);
        }

        .items:empty {
            display: none;
        }
    `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&this.syncFormValue()}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.formControl.reportValidity(this.internals)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}formResetCallback(){this.clearFiles()}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}updated(e){[`files`,`disabled`,`fieldsetDisabled`,`name`,`required`,`requiredText`].some(t=>e.has(t))&&this.syncFormValue(),this.toggleAttribute(`data-drag-over`,this.dragOver)}syncFormValue(){if(v(this.internals,this.isDisabled))return;let e=this.files.filter(e=>!e.invalid);if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n.file,n.name);this.internals.setFormValue(t)}else this.internals.setFormValue(null);let t=this.shadowRoot?.querySelector(`.drop, ui-button`)??void 0;this.customValidityMessage?this.internals.setValidity({customError:!0},this.customValidityMessage,t):this.required&&!e.length?this.internals.setValidity({valueMissing:!0},this.requiredText||this.localize.t.fileUploader.required,t):this.internals.setValidity({})}browse(){this.isDisabled||(this.input.value=``,this.input.click())}toItem(e,t){let n={uuid:`${this.ids}-${++L}`,name:e.name,file:e,status:this.status};if(!t)return n;let r=D(t,this.localize.t.fileUploader,this,{maxFiles:this.maxFiles,maxTotalSize:this.maxTotalSize,locale:this.localize.lang()});return{...n,invalid:!0,...r}}addFiles(e){if(this.isDisabled||!e.length)return;let t=this.multiple?e:[e[0]],n=this.multiple?this.files.filter(e=>!e.invalid).map(e=>e.file):[],r={accept:this.accept,maxFileSize:this.maxFileSize,maxFiles:this.maxFiles,maxTotalSize:this.maxTotalSize},i=O(t,r,n),a=t.map((e,t)=>this.toItem(e,i[t]));this.dispatchEvent(new CustomEvent(`ui-add`,{detail:{addedFiles:a},bubbles:!0,composed:!0})),this.files=this.multiple?[...this.files,...a]:a,this.keepLabel||(this.pickedLabel=T(t.map(e=>e.name),this.localize.t.fileUploader.filesChosen)),this.emitChange({addedFiles:a,removedFiles:[],currentFiles:this.files,action:`add`})}removeFile(e){let t=this.files.find(t=>t.uuid===e);t&&(this.files=this.files.filter(e=>e!==t),this.dispatchEvent(new CustomEvent(`ui-delete`,{detail:{deletedFile:t,remainingFiles:this.files},bubbles:!0,composed:!0})),this.emitChange({addedFiles:[],removedFiles:[t],currentFiles:this.files,action:`remove`}))}clearFiles(){let e=this.files;this.files=[],this.pickedLabel=``,this.input&&(this.input.value=``),e.length&&this.emitChange({addedFiles:[],removedFiles:e,currentFiles:[],action:`clear`})}emitChange(e){this.dispatchEvent(new CustomEvent(`ui-change`,{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onInputChange(e){this.addFiles([...e.target.files??[]])}onDragOver(e){e.preventDefault(),e.stopPropagation(),!this.isDisabled&&(this.dragOver=!0,e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`))}onDragLeave(e){e.preventDefault(),e.stopPropagation(),this.dragOver=!1}onDrop(e){if(e.preventDefault(),e.stopPropagation(),this.dragOver=!1,this.isDisabled||!e.dataTransfer)return;let t=[...e.dataTransfer.items],n=t.length?t.filter(e=>e.kind===`file`&&!e.webkitGetAsEntry?.()?.isDirectory).flatMap(e=>e.getAsFile()??[]):[...e.dataTransfer.files];this.addFiles(n)}onTriggerKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.browse())}onItemDelete(e){let t=e.target;if(!t.closest(`.items`))return;e.stopPropagation();let n=this.renderedItems().indexOf(t),r=c(),i=!!r&&!!t.shadowRoot?.contains(r);this.removeFile(e.detail.uuid),i&&this.updateComplete.then(()=>this.focusAfterRemoval(n))}focusAfterRemoval(e){let t=this.renderedItems(),n=t[w(t.map(e=>e.removable),e)];n?n.focus():this.renderRoot.querySelector(`[part="trigger"]`)?.focus()}onItemRetry(e){if(!e.target.closest(`.items`))return;e.stopPropagation();let t=this.files.find(t=>t.uuid===e.detail.uuid);t&&this.dispatchEvent(new CustomEvent(`ui-retry`,{detail:{retriedFile:t},bubbles:!0,composed:!0}))}renderedItems(){return[...this.renderRoot.querySelectorAll(`.items > ui-file-uploader-item`)]}renderTrigger(){return this.drop?p`<button
                class="drop ${u({"drag-over":this.dragOver})}"
                part="trigger"
                type="button"
                ?disabled=${this.isDisabled}
                @click=${this.browse}
                @keydown=${this.onTriggerKeydown}
            >
                <span class="drop-icon" part="drop-icon" aria-hidden="true">${I}</span>
                <span>${this.dropLabel||this.localize.t.fileUploader.dropHint}</span>
            </button>`:p`<ui-button part="trigger" kind=${this.buttonKind} size=${this.size} ?disabled=${this.isDisabled} @click=${this.browse}>
            ${this.pickedLabel||this.buttonLabel||this.localize.t.fileUploader.addFile}
        </ui-button>`}render(){return p`
            <div class="base" role="group" aria-labelledby=${d(this.labelTitle?`${this.ids}-title`:void 0)} aria-disabled=${d(this.isDisabled?`true`:void 0)}>
            ${this.labelTitle?p`<p class="title" part="title" id="${this.ids}-title">${this.labelTitle}</p>`:n}
            ${this.labelDescription?p`<p class="description" part="description" id="${this.ids}-description">${this.labelDescription}</p>`:n}
            <div class="zone" @dragover=${this.onDragOver} @dragleave=${this.onDragLeave} @drop=${this.onDrop}>
                ${this.renderTrigger()}
                <label class="sr-only" for=${`${this.ids}-input`}>${this.labelTitle||this.buttonLabel||this.localize.t.fileUploader.addFile}</label>
                <input
                    class="sr-only"
                    id=${`${this.ids}-input`}
                    type="file"
                    tabindex="-1"
                    ?multiple=${this.multiple}
                    accept=${this.accept||n}
                    ?disabled=${this.isDisabled}
                    @change=${this.onInputChange}
                />
            </div>
            </div>
            <div class="items" part="items" @ui-delete=${this.onItemDelete} @ui-retry=${this.onItemRetry}>
                ${this.files.map(e=>p`<ui-file-uploader-item
                        uuid=${e.uuid}
                        name=${e.name}
                        status=${e.status??this.status}
                        size=${this.size}
                        ?invalid=${!!e.invalid}
                        error-subject=${e.errorSubject??``}
                        error-body=${e.errorBody??``}
                        icon-label=${this.iconLabel}
                        ?disabled=${this.isDisabled}
                        .progress=${e.progress}
                        ?retryable=${!!e.retryable}
                        .fileSize=${this.showSize?e.file.size:void 0}
                    ></ui-file-uploader-item>`)}
                <slot></slot>
            </div>
        `}};t([e({attribute:`label-title`})],R.prototype,`labelTitle`,void 0),t([e({attribute:`label-description`})],R.prototype,`labelDescription`,void 0),t([e({attribute:`button-label`})],R.prototype,`buttonLabel`,void 0),t([e({attribute:`button-kind`})],R.prototype,`buttonKind`,void 0),t([e({reflect:!0})],R.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],R.prototype,`drop`,void 0),t([e({attribute:`drop-label`})],R.prototype,`dropLabel`,void 0),t([e()],R.prototype,`accept`,void 0),t([e({type:Boolean,reflect:!0})],R.prototype,`multiple`,void 0),t([e({type:Number,attribute:`max-file-size`})],R.prototype,`maxFileSize`,void 0),t([e({type:Number,attribute:`max-files`})],R.prototype,`maxFiles`,void 0),t([e({type:Number,attribute:`max-total-size`})],R.prototype,`maxTotalSize`,void 0),t([e({type:Boolean,attribute:`show-size`})],R.prototype,`showSize`,void 0),t([e({reflect:!0})],R.prototype,`name`,void 0),t([e({type:Boolean,reflect:!0})],R.prototype,`disabled`,void 0),t([e()],R.prototype,`status`,void 0),t([e({attribute:`icon-label`})],R.prototype,`iconLabel`,void 0),t([e({type:Boolean,attribute:`keep-label`})],R.prototype,`keepLabel`,void 0),t([e({type:Boolean,reflect:!0})],R.prototype,`required`,void 0),t([e({attribute:`required-text`})],R.prototype,`requiredText`,void 0),t([e({attribute:`invalid-type-text`})],R.prototype,`invalidTypeText`,void 0),t([e({attribute:`too-large-text`})],R.prototype,`tooLargeText`,void 0),t([e({attribute:`too-many-text`})],R.prototype,`tooManyText`,void 0),t([e({attribute:`total-too-large-text`})],R.prototype,`totalTooLargeText`,void 0),t([e({attribute:`invalid-body-text`})],R.prototype,`invalidBodyText`,void 0),t([e({attribute:!1})],R.prototype,`files`,void 0),t([a()],R.prototype,`dragOver`,void 0),t([a()],R.prototype,`pickedLabel`,void 0),t([_(`input[type="file"]`)],R.prototype,`input`,void 0),R=t([g(`ui-file-uploader`)],R);