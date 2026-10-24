import{Ct as e,D as t,E as n,Ot as r,St as i,Tt as a,c as o,it as s,jt as c,w as l,wt as u}from"./theme-switcher-BGAHXRgF.js";var d=class extends t{constructor(...e){super(...e),this.href=``,this.target=`_self`,this.disabled=!1,this.localize=new l(this)}static{this.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[s,c`
        :host {
            display: block;
        }

        /* Carbon .cds--tile: body-compact-01, 16px padding, layer background, 64px tall and 128px wide at least */
        .tile {
            position: relative;
            display: block;
            box-sizing: border-box;
            height: 100%;
            min-height: 64px;
            min-width: 128px;
            padding: var(--ui-space-md);
            /* Carbon: square and borderless (the layer colour sets it apart); --ui-card-* let a design round and outline it */
            border: var(--ui-card-border, none);
            border-radius: var(--ui-card-radius, var(--ui-radius-none));
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: var(--ui-focus-offset, -2px);
            background-color: var(--ui-card-background, var(--ui-surface-1));
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            text-decoration: none;
        }

        a.tile {
            cursor: pointer;
            transition: all var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon .cds--tile--clickable: every property, moderate-01 */
        }

        a.tile:hover {
            background-color: var(--ui-ghost-hover);
        }

        /* Carbon: the focus ring follows :focus (a click too) */
        a.tile:focus {
            outline-color: var(--ui-focus);
        }

        /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
        a.tile:focus:not(:focus-visible) {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        .disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        ::slotted([slot='icon']) {
            position: absolute;
            inset-block-end: 12px;
            inset-inline-end: 12px;
            width: 20px;
            height: 20px;
            fill: var(--ui-icon-interactive);
        }

        .disabled ::slotted([slot='icon']) {
            display: none;
        }

        @media (forced-colors: active) {
            .tile {
                border: 1px solid CanvasText;
            }
        }
    `]}render(){if(!this.href)return r`<div class="tile" part="base"><slot></slot></div>`;if(this.disabled)return r`<div class="tile disabled" part="base" aria-disabled="true"><slot></slot><slot name="icon"></slot></div>`;let e=this.target===`_blank`;return r`
            <a
                class="tile"
                part="base"
                href=${this.href}
                target=${this.target}
                rel=${e?`noopener noreferrer`:a}
                tabindex="0"
                @click=${o}
            >
                <slot></slot>
                ${e?r`<span class="sr-only">${this.localize.t.common.opensInNewTab}</span>`:a}
                <slot name="icon"></slot>
            </a>
        `}};n([i()],d.prototype,`href`,void 0),n([i()],d.prototype,`target`,void 0),n([i({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),d=n([e(`ui-tile`)],d);