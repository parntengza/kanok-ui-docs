import{Ct as e,D as t,Et as n,Mt as r,O as i,T as a,Tt as o,kt as s,wt as c}from"./theme-switcher-BZXGbHfR.js";var l=s`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,u=class extends i{constructor(...e){super(...e),this.type=`gray`,this.localize=new a(this),this.size=`md`,this.dismissible=!1,this.selectable=!1,this.selected=!1,this.operational=!1,this.disabled=!1,this.tagTitle=``,this.dismissLabel=``,this.label=``}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=r`
        :host {
            --_h: 24px;
            --_bg: var(--ui-tag-background-gray);
            --_fg: var(--ui-tag-color-gray);
            --_hover: var(--ui-tag-hover-gray);
            --_border: var(--ui-tag-border-gray);

            display: inline-flex;
            vertical-align: middle;
            font-family: var(--ui-font-family);
        }

        :host([size='sm']) {
            --_h: 18px;
        }

        :host([size='lg']) {
            --_h: 32px;
        }

        :host([type='red']) { --_bg: var(--ui-tag-background-red); --_fg: var(--ui-tag-color-red); --_hover: var(--ui-tag-hover-red); --_border: var(--ui-tag-border-red); }
        :host([type='magenta']) { --_bg: var(--ui-tag-background-magenta); --_fg: var(--ui-tag-color-magenta); --_hover: var(--ui-tag-hover-magenta); --_border: var(--ui-tag-border-magenta); }
        :host([type='purple']) { --_bg: var(--ui-tag-background-purple); --_fg: var(--ui-tag-color-purple); --_hover: var(--ui-tag-hover-purple); --_border: var(--ui-tag-border-purple); }
        :host([type='blue']) { --_bg: var(--ui-tag-background-blue); --_fg: var(--ui-tag-color-blue); --_hover: var(--ui-tag-hover-blue); --_border: var(--ui-tag-border-blue); }
        :host([type='cyan']) { --_bg: var(--ui-tag-background-cyan); --_fg: var(--ui-tag-color-cyan); --_hover: var(--ui-tag-hover-cyan); --_border: var(--ui-tag-border-cyan); }
        :host([type='teal']) { --_bg: var(--ui-tag-background-teal); --_fg: var(--ui-tag-color-teal); --_hover: var(--ui-tag-hover-teal); --_border: var(--ui-tag-border-teal); }
        :host([type='green']) { --_bg: var(--ui-tag-background-green); --_fg: var(--ui-tag-color-green); --_hover: var(--ui-tag-hover-green); --_border: var(--ui-tag-border-green); }
        :host([type='cool-gray']) { --_bg: var(--ui-tag-background-cool-gray); --_fg: var(--ui-tag-color-cool-gray); --_hover: var(--ui-tag-hover-cool-gray); --_border: var(--ui-tag-border-cool-gray); }
        :host([type='warm-gray']) { --_bg: var(--ui-tag-background-warm-gray); --_fg: var(--ui-tag-color-warm-gray); --_hover: var(--ui-tag-hover-warm-gray); --_border: var(--ui-tag-border-warm-gray); }
        /* --ui-tag-high-contrast-*: Carbon's inverse block; a design can make it an outlined ink tag */
        :host([type='high-contrast']) { --_bg: var(--ui-tag-high-contrast, var(--ui-inverse-canvas)); --_fg: var(--ui-tag-high-contrast-ink, var(--ui-inverse-ink)); --_hover: var(--ui-tag-high-contrast-hover, var(--ui-inverse-hover)); --_border: var(--ui-tag-high-contrast-border, var(--ui-inverse-canvas)); }
        :host([type='outline']) { --_bg: var(--ui-canvas); --_fg: var(--ui-ink); --_hover: var(--ui-ghost-hover); --_border: var(--ui-inverse-canvas); }

        .tag {
            box-sizing: border-box;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 32px;
            max-width: 208px;
            min-height: var(--_h);
            margin: 0;
            padding: 0 var(--ui-space-xs);
            border: 0;
            border-radius: var(--ui-tag-radius, 16px); /* a pill at every size */
            background-color: var(--_bg);
            color: var(--_fg);
            font: var(--ui-tag-font, var(--ui-font-caption));
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
            cursor: default;
            overflow-wrap: anywhere;
        }

        :host([size='lg']) .tag {
            padding: 0 var(--ui-space-sm);
        }

        :host([type='outline']) .tag {
            box-shadow: inset 0 0 0 1px var(--_border);
        }

        :host([type='high-contrast']) .tag {
            box-shadow: var(--ui-tag-high-contrast-edge, none);
        }

        .label {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        ::slotted([slot='icon']) {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            margin-inline-end: var(--ui-space-xxs);
            fill: currentColor;
        }

        :host(.has-icon) .tag {
            padding-inline-start: var(--ui-space-xxs);
        }

        /* dismissible: the round close button is as tall as the tag and replaces the end padding */
        :host([dismissible]) .tag {
            padding-inline-end: 0;
        }

        .close {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            width: var(--_h);
            height: var(--_h);
            margin: 0 0 0 2px;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background-color: transparent;
            color: currentColor;
            cursor: pointer;
            transition: background-color var(--ui-duration-fast) var(--ui-easing);
        }

        .close svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .close:hover {
            background-color: var(--_hover);
        }

        .close:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        :host([type='high-contrast']) .close:focus-visible {
            outline-color: var(--ui-tag-high-contrast-focus, var(--ui-focus-inverse));
        }

        /* interactive forms: buttons with Carbon's focus ring */
        /* no transition: Carbon's selectable and operational tags change colour at once */
        button.tag {
            cursor: pointer;
            font-family: inherit;
        }

        button.tag:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: 1px;
        }

        /* --ui-tag-selectable-border / --ui-tag-selected / -ink: Carbon's inverse outline and fill; a design can use its brand */
        .selectable {
            border: 1px solid var(--ui-tag-selectable-border, var(--ui-border-inverse));
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
        }

        .selectable:hover {
            background-color: var(--ui-ghost-hover);
        }

        .selectable[aria-pressed='true'],
        .selectable[aria-pressed='true']:hover {
            border-color: var(--ui-tag-selected, var(--ui-border-inverse));
            background-color: var(--ui-tag-selected, var(--ui-layer-selected-inverse));
            color: var(--ui-tag-selected-ink, var(--ui-inverse-ink));
        }

        .operational {
            border: 1px solid var(--_border);
        }

        .operational:hover {
            background-color: var(--_hover);
        }

        /* disabled */
        :host([disabled]) .tag,
        :host([disabled]) .tag:hover {
            background-color: var(--ui-surface-1);
            color: var(--ui-ink-disabled);
            box-shadow: none;
            cursor: not-allowed;
        }

        :host([disabled]) .selectable,
        :host([disabled]) .operational {
            border-color: var(--ui-ink-disabled);
        }

        :host([disabled]) .close {
            cursor: not-allowed;
        }

        :host([disabled]) .close:hover {
            background-color: transparent;
        }

        @media (forced-colors: active) {
            .tag {
                border: 1px solid CanvasText;
            }

            /* the chosen tag is a fill, which forced colours drop: the system highlight shows it instead */
            .selectable[aria-pressed='true'] {
                forced-color-adjust: none;
                border-color: Highlight;
                background-color: Highlight;
                color: HighlightText;
            }
        }
    `}get text(){return this.textContent?.trim()??``}onIconSlot(e){let t=e.target.assignedElements().length>0;this.classList.toggle(`has-icon`,t)}dismiss(e){e.stopPropagation(),!this.disabled&&this.dispatchEvent(new CustomEvent(`ui-dismiss`,{bubbles:!0,composed:!0}))}toggleSelected(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new Event(`change`,{bubbles:!0})))}renderContent(){return s`<slot name="icon" @slotchange=${this.onIconSlot}></slot><span class="label" part="label" title=${this.dismissible&&(this.tagTitle||this.text)||n}><slot></slot></span>`}render(){if(this.selectable)return s`<button class="tag selectable" part="base" type="button" aria-pressed=${this.selected?`true`:`false`} ?disabled=${this.disabled} @click=${this.toggleSelected}>
                ${this.renderContent()}
            </button>`;if(this.operational){let e=this.expanded!==void 0;return s`<button
                class="tag operational"
                part="base"
                type="button"
                aria-label=${this.label||n}
                aria-haspopup=${e?`true`:n}
                aria-expanded=${e?String(this.expanded):n}
                ?disabled=${this.disabled}
            >
                ${this.renderContent()}
            </button>`}return s`<span class="tag" part="base">
            ${this.renderContent()}
            ${this.dismissible?s`<button class="close" part="dismiss-button" type="button" aria-label=${(this.dismissLabel||this.localize.t.common.dismiss).replace(`{text}`,this.text)} ?disabled=${this.disabled} @click=${this.dismiss}>
                      ${l}
                  </button>`:n}
        </span>`}};t([e({reflect:!0})],u.prototype,`type`,void 0),t([e({reflect:!0})],u.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],u.prototype,`dismissible`,void 0),t([e({type:Boolean,reflect:!0})],u.prototype,`selectable`,void 0),t([e({type:Boolean,reflect:!0})],u.prototype,`selected`,void 0),t([e({type:Boolean,reflect:!0})],u.prototype,`operational`,void 0),t([e({type:Boolean,reflect:!0})],u.prototype,`disabled`,void 0),t([e({attribute:`tag-title`})],u.prototype,`tagTitle`,void 0),t([e({attribute:`dismiss-label`})],u.prototype,`dismissLabel`,void 0),t([e()],u.prototype,`label`,void 0),t([e({type:Boolean})],u.prototype,`expanded`,void 0),u=t([c(`ui-tag`)],u);