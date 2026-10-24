import{Ct as e,D as t,E as n,O as r,Ot as i,St as a,bt as o,jt as s,w as c,wt as l}from"./theme-switcher-BGAHXRgF.js";import"./button-CTeCEJcq.js";import"./icon-button-CfOs3op2.js";import{t as u}from"./events-IQD1_DyD.js";import{t as d}from"./overflow-menu-BerTRcGD.js";var f=class extends r(t){constructor(...e){super(...e),this.label=``,this.size=`lg`,this.placement=`bottom`,this.tooltipPlacement=`bottom`,this.triggerLabel=``,this.disabled=!1,this.open=!1,this.localize=new c(this),this.onPrimaryClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent(`ui-click`,{bubbles:!0,composed:!0}))}}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=s`
        :host {
            display: inline-flex;
            column-gap: 1px;
            font-family: var(--ui-font-family);
        }

        .primary {
            --_ui-button-radius-end: 0px; /* one control: the primary button and the chevron join square (a rounded design rounds only the outer ends) */

            min-inline-size: calc(160px - 1px - var(--_t, 48px));
        }

        ui-icon-button {
            --_ui-button-radius-start: 0px;
        }

        :host([size='md']) .primary {
            --_t: 40px;
        }

        :host([size='sm']) .primary {
            --_t: 32px;
        }

        .primary ui-button {
            inline-size: 100%;
            min-inline-size: 111px;
            max-inline-size: 239px;
        }

        .primary ui-button::part(base) {
            inline-size: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .chevron {
            transition: transform var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([open]) .chevron {
            transform: rotate(180deg);
        }
    `}updated(e){e.has(`open`)&&this.menu.open!==this.open&&(this.menu.anchor=this,this.menu.open=this.open)}onTriggerKeydown(e){d(e,this.menu,this)}toggle(){this.open?this.menu.hide():this.menu.show(this)}render(){let e=this.triggerLabel||this.localize.t.common.additionalActions,t=this.placement===`bottom`||this.placement===`top`;return i`
            <div class="primary"><ui-button part="primary" kind="primary" size=${this.size} ?disabled=${this.disabled} @click=${this.onPrimaryClick}>${this.label}</ui-button></div>
            <ui-icon-button
                part="trigger"
                kind="primary"
                size=${this.size}
                label=${e}
                tooltip-placement=${this.tooltipPlacement}
                haspopup="menu"
                ?expanded=${this.open}
                ?disabled=${this.disabled}
                @click=${this.toggle}
                @keydown=${this.onTriggerKeydown}
            >
                <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </ui-icon-button>
            <ui-menu part="menu" label=${e} size=${this.size} placement=${this.placement} ?match-width=${t} @ui-toggle=${e=>{u(e)&&(this.open=e.detail.open)}}>
                <slot></slot>
            </ui-menu>
        `}};n([a()],f.prototype,`label`,void 0),n([a({reflect:!0})],f.prototype,`size`,void 0),n([a()],f.prototype,`placement`,void 0),n([a({attribute:`tooltip-placement`})],f.prototype,`tooltipPlacement`,void 0),n([a({attribute:`trigger-label`})],f.prototype,`triggerLabel`,void 0),n([a({type:Boolean,reflect:!0})],f.prototype,`disabled`,void 0),n([a({type:Boolean,reflect:!0})],f.prototype,`open`,void 0),n([o(`ui-menu`)],f.prototype,`menu`,void 0),f=n([e(`ui-combo-button`)],f);var p=class extends r(t){constructor(...e){super(...e),this.label=``,this.kind=`primary`,this.size=`lg`,this.placement=`bottom`,this.disabled=!1,this.open=!1}static{this.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0}}static{this.styles=s`
        :host {
            display: inline-block;
        }

        ui-button:not([kind='ghost']) {
            min-width: 192px;
        }

        /* Carbon: the chevron takes the button's text colour (white on primary) */
        .chevron {
            fill: currentColor;
            transition: transform var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([open]) .chevron {
            transform: rotate(180deg);
        }

        @media (forced-colors: active) {
            .chevron {
                fill: CanvasText;
            }
        }

    `}get variant(){return this.kind}set variant(e){this.kind=e,this.hasAttribute(`variant`)&&this.setAttribute(`variant`,e)}static get observedAttributes(){return[...super.observedAttributes,`variant`]}attributeChangedCallback(e,t,n){e===`variant`?n!==null&&(this.kind=n):super.attributeChangedCallback(e,t,n)}updated(e){e.has(`open`)&&this.menu.open!==this.open&&(this.menu.anchor=this.button,this.menu.open=this.open)}onTriggerKeydown(e){d(e,this.menu,this.button)}toggle(){this.open?this.menu.hide():this.menu.show(this.button)}render(){let e=this.placement===`bottom`||this.placement===`top`;return i`
            <ui-button
                part="trigger"
                kind=${this.kind}
                size=${this.size}
                haspopup="menu"
                ?expanded=${this.open}
                ?disabled=${this.disabled}
                @click=${this.toggle}
                @keydown=${this.onTriggerKeydown}
            >
                ${this.label}
                <svg slot="suffix" class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </ui-button>
            <ui-menu
                part="menu"
                label=${this.label}
                size=${this.size}
                placement=${this.placement}
                ?match-width=${e}
                @ui-toggle=${e=>{u(e)&&(this.open=e.detail.open)}}
            >
                <slot></slot>
            </ui-menu>
        `}};n([a()],p.prototype,`label`,void 0),n([a({reflect:!0})],p.prototype,`kind`,void 0),n([a({reflect:!0})],p.prototype,`size`,void 0),n([a()],p.prototype,`placement`,void 0),n([a({type:Boolean,reflect:!0})],p.prototype,`disabled`,void 0),n([a({type:Boolean,reflect:!0})],p.prototype,`open`,void 0),n([o(`ui-button`)],p.prototype,`button`,void 0),n([o(`ui-menu`)],p.prototype,`menu`,void 0),p=n([e(`ui-menu-button`)],p);