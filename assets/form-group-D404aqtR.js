import{Ct as e,D as t,E as n,G as r,H as i,Ot as a,St as o,Tt as s,ct as c,h as l,jt as u}from"./theme-switcher-BGAHXRgF.js";var d=class extends t{constructor(...e){super(...e),this.legend=``,this.disabled=!1,this.invalid=!1,this.message=``,this.ids=c(`ui-form-group`),this.slots=new l(this)}static{this.styles=[i,u`
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
    `]}updated(e){e.has(`disabled`)&&this.relayDisabled()}relayDisabled(){let e=this.querySelectorAll(`*`);for(let t of e)typeof t.formDisabledCallback==`function`&&t.matches(`:defined`)?(t.toggleAttribute(`data-group-disabled`,r(t)),t.requestUpdate?.(`fieldsetDisabled`,!r(t))):(t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLButtonElement)&&(this.disabled&&!t.disabled?(t.disabled=!0,t.dataset.uiFieldsetDisabled=``):!this.disabled&&`uiFieldsetDisabled`in t.dataset&&(t.disabled=!1,delete t.dataset.uiFieldsetDisabled))}render(){let e=this.message||this.slots.has(`message`),t=`${this.ids}-message`;return a`<fieldset part="base" ?disabled=${this.disabled} aria-invalid=${this.invalid?`true`:s} aria-describedby=${e?t:s}>
            <legend class="label" part="legend" id=${`${this.ids}-legend`}><slot name="legend">${this.legend}</slot></legend>
            <slot @slotchange=${()=>this.relayDisabled()}></slot>
            ${e?a`<div class="message" part="message" id=${t}><slot name="message">${this.message}</slot></div>`:s}
        </fieldset>`}};n([o()],d.prototype,`legend`,void 0),n([o({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),n([o({type:Boolean,reflect:!0})],d.prototype,`invalid`,void 0),n([o()],d.prototype,`message`,void 0),d=n([e(`ui-form-group`)],d);