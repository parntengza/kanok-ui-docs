import{Ct as e,D as t,Et as n,K as r,Mt as i,O as a,U as o,kt as s,lt as c,v as l,wt as u}from"./theme-switcher-BZXGbHfR.js";var d=class extends a{constructor(...e){super(...e),this.legend=``,this.disabled=!1,this.invalid=!1,this.message=``,this.ids=c(`ui-form-group`),this.slots=new l(this)}static{this.styles=[o,i`
        :host {
            display: block;
            font-family: var(--ui-font-family);
        }

        fieldset {
            margin: 0;
            padding: 0;
            border: none;
            min-inline-size: 0;
        }

        legend {
            padding: 0;
        }

        .message {
            margin: var(--ui-space-xs) 0 0;
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
            color: var(--ui-ink-muted);
        }

        :host([invalid]) .message {
            color: var(--ui-error-text, var(--ui-error));
        }

        :host([disabled]) .label,
        :host([disabled]) .message {
            color: var(--ui-ink-disabled);
        }
    `]}updated(e){e.has(`disabled`)&&this.relayDisabled()}relayDisabled(){let e=this.querySelectorAll(`*`);for(let t of e)typeof t.formDisabledCallback==`function`&&t.matches(`:defined`)?(t.toggleAttribute(`data-group-disabled`,r(t)),t.requestUpdate?.(`fieldsetDisabled`,!r(t))):(t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLButtonElement)&&(this.disabled&&!t.disabled?(t.disabled=!0,t.dataset.uiFieldsetDisabled=``):!this.disabled&&`uiFieldsetDisabled`in t.dataset&&(t.disabled=!1,delete t.dataset.uiFieldsetDisabled))}render(){let e=this.message||this.slots.has(`message`),t=`${this.ids}-message`;return s`<fieldset part="base" ?disabled=${this.disabled} aria-invalid=${this.invalid?`true`:n} aria-describedby=${e?t:n}>
            <legend class="label" part="legend" id=${`${this.ids}-legend`}><slot name="legend">${this.legend}</slot></legend>
            <slot @slotchange=${()=>this.relayDisabled()}></slot>
            ${e?s`<div class="message" part="message" id=${t}><slot name="message">${this.message}</slot></div>`:n}
        </fieldset>`}};t([e()],d.prototype,`legend`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),t([e({type:Boolean,reflect:!0})],d.prototype,`invalid`,void 0),t([e()],d.prototype,`message`,void 0),d=t([u(`ui-form-group`)],d);