import{At as e,Ct as t,D as n,E as r,Ot as i,St as a,Tt as o,bt as s,ct as c,jt as l,w as u,xt as d}from"./theme-switcher-BGAHXRgF.js";import"./icon-button-CfOs3op2.js";import"./popover-Ec_aH7MB.js";import{t as f}from"./events-IQD1_DyD.js";import{n as p,r as m,t as h}from"./edit-in-place-D7FTGOxx.js";var g=e`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 26H30V28H2z" /><path d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4L25.4 9zM20.4 4 24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10 3.6 3.6-10 10H6z" /></svg>`,_=e`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M30 28.6 3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30l1.4-1.4zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26z" /><path d="M29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l-8 8 1.4 1.4L20 8.4l3.6 3.6-3.6 3.6 1.4 1.4 8-8c.8-.8.8-2 0-2.8zM25 10.6 21.4 7l3-3L28 7.6l-3 3z" /></svg>`,v=e`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M17.414 16 24 9.414 22.586 8 16 14.586 9.414 8 8 9.414 14.586 16 8 22.586 9.414 24 16 17.414 22.586 24 24 22.586 17.414 16z" /></svg>`,y=e`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M13 24 4 15l1.414-1.414L13 21.171 26.586 7.586 28 9 13 24z" /></svg>`,b=e`<svg class="warning" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1C4.2 1 1 4.2 1 8s3.2 7 7 7 7-3.1 7-7-3.1-7-7-7zm-.5 3h1v5h-1V4zm.5 8.2c-.4 0-.8-.4-.8-.8s.3-.8.8-.8c.4 0 .8.4.8.8s-.4.8-.8.8z" /></svg>`,x=class extends n{constructor(...e){super(...e),this.value=``,this.label=``,this.placeholder=``,this.size=`sm`,this.invalid=!1,this.invalidText=``,this.readonly=!1,this.editAlwaysVisible=!1,this.inheritTypography=!1,this.tooltipPlacement=`top`,this.notePlacement=`bottom`,this.editLabel=``,this.saveLabel=``,this.cancelLabel=``,this.readonlyLabel=``,this.readonlyText=``,this.editing=!1,this.noteOpen=!1,this.initial=``,this.localize=new u(this),this.ids=c(`ui-edit-in-place`),this.onFocusIn=()=>{this.readonly||(this.editing=!0)},this.onFocusOut=e=>{let t=e.relatedTarget;t&&(this.shadowRoot.contains(t)||this.contains(t))||this.editing&&(this.editing=!1,m(this.state.canSave)===`save`?this.save():this.cancel())},this.onInput=()=>{this.value=this.input.value,this.editing=!this.readonly},this.onKeydown=e=>{let t=h(e.key,this.state.canSave);t&&!this.readonly&&(e.preventDefault(),t===`save`?this.save():t===`cancel`?(this.cancel(),this.updateComplete.then(()=>this.refocus())):this.editing=!1)},this.onFieldClick=()=>{this.readonly?this.noteOpen=!0:this.editing=!0},this.keepFocus=e=>{this.readonly||e.preventDefault()},this.onCancelClick=()=>{this.cancel(),this.updateComplete.then(()=>this.refocus())},this.onSaveClick=()=>{this.state.canSave&&(this.save(),this.refocus())}}static{this.hostStates=[`editing`]}static{this.styles=l`
        :host {
            display: block;
        }

        :host([hidden]) {
            display: none;
        }

        .container {
            --_size: 40px;

            display: flex;
            align-items: center;
            box-sizing: border-box;
            min-block-size: var(--_size);
            background: transparent;
            cursor: pointer;
        }

        :host([size='md']) .container {
            --_size: 48px;
        }

        :host([size='lg']) .container {
            --_size: 64px;
        }

        /* Carbon: field-01 under the pointer and while editing; the focus line around it while the field has focus */
        .container:hover,
        .container.editing {
            background: var(--ui-field-1);
        }

        .container.editing:has(input:focus) {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: 0;
            border-radius: var(--ui-field-radius, 0); /* a field's corners while it is one (Kanok: 6px) */
        }

        .container.invalid {
            border: 2px solid var(--ui-error);
        }

        input {
            flex: 1;
            min-inline-size: 0;
            box-sizing: border-box;
            block-size: 40px;
            margin: 0;
            padding: 0 var(--ui-space-md);
            border: 0;
            background: transparent;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            cursor: pointer;
            outline: none;
        }

        input::placeholder {
            color: var(--ui-ink-placeholder);
            opacity: 1;
        }

        :host([inherit-typography]) input {
            font-size: inherit;
            font-weight: inherit;
            line-height: inherit;
            letter-spacing: inherit;
        }

        /* the buttons: squares of the height; the box opens to two of them while editing (Carbon slide-in, 150ms) */
        .actions {
            --ui-field-height-lg: var(--_size);
            --_width: var(--_size);
            --_editing-width: calc(var(--_size) * 2);

            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            align-self: stretch;
            justify-content: flex-end;
            inline-size: var(--_width);
        }

        .invalid .actions,
        .editing.has-error .actions {
            --_width: calc(var(--_size) + 32px);
            --_editing-width: calc(var(--_size) * 2 + 32px);
        }

        .editing:not(.readonly) .actions {
            inline-size: var(--_editing-width);
            animation: open var(--ui-duration-moderate-01) var(--ui-easing-entrance);
        }

        @keyframes open {
            0% {
                overflow: hidden;
                inline-size: var(--_width);
            }

            99% {
                overflow: hidden;
                inline-size: var(--_editing-width);
            }

            100% {
                overflow: visible;
                inline-size: var(--_editing-width);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .editing:not(.readonly) .actions {
                animation: none;
            }
        }

        .edit {
            visibility: hidden;
        }

        .container:hover .edit,
        :host([edit-always-visible]) .edit {
            visibility: visible;
        }

        .warning {
            flex-shrink: 0;
            inline-size: 16px;
            block-size: 16px;
            margin: auto var(--ui-space-xs);
            fill: var(--ui-error);
        }

        /* text-error, as every field's error line (Carbon's EditInPlace paints it support-error, short of 4.5:1 on dark layers) */
        .invalid-text {
            margin: var(--ui-space-xs) 0 0;
            color: var(--ui-error-text, var(--ui-error));
            font: var(--ui-font-caption);
            line-height: 16px; /* label-01: 12 × 1.33333 */
            letter-spacing: var(--ui-tracking-caption);
        }

        .note {
            margin: 0;
        }

        ui-icon-button svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        @media (forced-colors: active) {
            .container.editing:has(input:focus) {
                outline-color: Highlight;
            }

            .warning {
                fill: CanvasText;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.initial=this.value}willUpdate(e){e.has(`value`)&&!this.editing&&(this.initial=this.value)}updated(){this.toggleAttribute(`data-editing`,this.editing)}focus(e){this.input?.focus(e)}get state(){return p(this.value,this.initial,this.invalid)}emit(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}save(){this.initial=this.value,this.emit(`ui-save`)}cancel(){this.value=this.initial,this.emit(`ui-cancel`)}refocus(){let e=this.input;e.focus(),e.setSelectionRange(e.value.length,e.value.length)}renderActions(){let e=this.localize.t.common;if(this.readonly)return i`<ui-popover high-contrast auto-close placement=${this.notePlacement} ?open=${this.noteOpen} @ui-toggle=${e=>{f(e)&&(this.noteOpen=e.detail.open)}}>
                <ui-icon-button slot="trigger" kind="ghost" size="lg" label=${this.readonlyLabel||e.editOff} tooltip-placement=${this.tooltipPlacement} haspopup="dialog" .expanded=${this.noteOpen} @click=${()=>this.noteOpen=!this.noteOpen}>${_}</ui-icon-button>
                <p class="note" id="${this.ids}-note">${this.readonlyText||e.readOnlyField}</p>
            </ui-popover>`;if(this.editing){let{canSave:t,canCancel:n}=this.state;return i`<ui-icon-button class="cancel" kind="ghost" size="lg" label=${this.cancelLabel||e.cancel} tooltip-placement=${this.tooltipPlacement} ?disabled=${!n} @mousedown=${this.keepFocus} @click=${this.onCancelClick}>${v}</ui-icon-button>
                <ui-icon-button class="save" kind="ghost" size="lg" label=${this.saveLabel||e.save} tooltip-placement=${this.tooltipPlacement} ?disabled=${!t} @mousedown=${this.keepFocus} @click=${this.onSaveClick}>${y}</ui-icon-button>`}return i`<ui-icon-button class="edit" kind="ghost" size="lg" label=${this.editLabel||e.edit} tooltip-placement=${this.tooltipPlacement} @mousedown=${this.keepFocus} @click=${()=>this.refocus()}>${g}</ui-icon-button>`}render(){let e=this.invalid&&!!this.invalidText,t=`${this.ids}-error`,n=e?i`<p class="invalid-text" part="invalid-text" id=${t}>${this.invalidText}</p>`:o,r=[`container`,this.editing?`editing`:``,this.invalid&&!this.editing?`invalid`:``,this.invalid?`has-error`:``,this.readonly?`readonly`:``].filter(Boolean).join(` `);return i`<div class=${r} part="base" @focusin=${this.onFocusIn} @focusout=${this.onFocusOut}>
                <input
                    part="input"
                    type="text"
                    id="${this.ids}-input"
                    .value=${this.value}
                    placeholder=${this.placeholder||o}
                    aria-label=${this.label||o}
                    aria-invalid=${this.invalid?`true`:`false`}
                    aria-describedby=${e?t:o}
                    ?readonly=${this.readonly}
                    @input=${this.onInput}
                    @keydown=${this.onKeydown}
                    @click=${this.onFieldClick}
                />
                <div class="actions" part="actions">${this.invalid?b:o}${this.renderActions()}</div>
            </div>
            ${n}`}};r([a()],x.prototype,`value`,void 0),r([a()],x.prototype,`label`,void 0),r([a()],x.prototype,`placeholder`,void 0),r([a({reflect:!0})],x.prototype,`size`,void 0),r([a({type:Boolean,reflect:!0})],x.prototype,`invalid`,void 0),r([a({attribute:`invalid-text`})],x.prototype,`invalidText`,void 0),r([a({type:Boolean,reflect:!0})],x.prototype,`readonly`,void 0),r([a({type:Boolean,reflect:!0,attribute:`edit-always-visible`})],x.prototype,`editAlwaysVisible`,void 0),r([a({type:Boolean,reflect:!0,attribute:`inherit-typography`})],x.prototype,`inheritTypography`,void 0),r([a({attribute:`tooltip-placement`})],x.prototype,`tooltipPlacement`,void 0),r([a({attribute:`note-placement`})],x.prototype,`notePlacement`,void 0),r([a({attribute:`edit-label`})],x.prototype,`editLabel`,void 0),r([a({attribute:`save-label`})],x.prototype,`saveLabel`,void 0),r([a({attribute:`cancel-label`})],x.prototype,`cancelLabel`,void 0),r([a({attribute:`readonly-label`})],x.prototype,`readonlyLabel`,void 0),r([a({attribute:`readonly-text`})],x.prototype,`readonlyText`,void 0),r([d()],x.prototype,`editing`,void 0),r([d()],x.prototype,`noteOpen`,void 0),r([d()],x.prototype,`initial`,void 0),r([s(`input`)],x.prototype,`input`,void 0),x=r([t(`ui-edit-in-place`)],x);