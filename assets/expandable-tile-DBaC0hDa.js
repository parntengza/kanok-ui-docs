import{Ct as e,D as t,Mt as n,O as r,Tt as i,kt as a,lt as o,wt as s}from"./theme-switcher-BZXGbHfR.js";var c=class extends r{constructor(...e){super(...e),this.expanded=!1,this.contentId=o(`ui-expandable-tile`)}static{this.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0}}static{this.styles=n`
        :host {
            display: block;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
        }

        /* Carbon .cds--tile--expandable: a layer tile, 16px padding, no border, layer-hover on hover (at once: Carbon
           moves only its height); on a part rather than :host so a page-wide CSS reset can't remove it */
        .base {
            position: relative;
            box-sizing: border-box;
            min-height: 64px;
            padding: var(--ui-space-md);
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: var(--ui-focus-offset, -2px);
            border: var(--ui-card-border, none); /* the card settings: Carbon none and square, Kanok a hairline and 12px */
            border-radius: var(--ui-card-radius, 0);
            background-color: var(--ui-card-background, var(--ui-surface-1));
        }

        .base:hover {
            background-color: var(--ui-ghost-hover);
        }

        /* the ring goes round the whole tile, on :focus (a click too) as Carbon */
        .base:has(.summary:focus) {
            outline-color: var(--ui-focus);
        }

        /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
        .base:has(.summary:focus:not(:focus-visible)) {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        /* at least 32px, so with the padding the tile is Carbon's 64px and the button is never empty */
        .summary {
            display: block;
            width: 100%;
            min-height: 32px;
            margin: 0;
            padding: 0;
            border: none;
            outline: none;
            background: transparent;
            color: inherit;
            font: inherit;
            letter-spacing: inherit;
            text-align: start;
            cursor: pointer;
        }

        /* Carbon .cds--tile__chevron: a 48px square in the tile's bottom-end corner, the 16px icon centred */
        .chevron {
            position: absolute;
            inset-block-end: 0;
            inset-inline-end: 0;
            box-sizing: border-box;
            width: 48px;
            height: 48px;
            padding: var(--ui-space-md);
            fill: var(--ui-icon-primary);
        }

        @media (prefers-reduced-motion: no-preference) {
            .chevron {
                transition: transform var(--ui-duration-moderate) var(--ui-easing); /* Carbon fast-02, 110ms */
            }
        }

        :host([expanded]) .chevron {
            transform: rotate(180deg);
        }

        /* Carbon .cds--tile-content__below-the-fold: fades in for 110ms as it opens (closing, the tile shuts at once) */
        .content {
            transition:
                opacity var(--ui-duration-moderate) var(--ui-easing),
                visibility var(--ui-duration-moderate) var(--ui-easing);
        }

        @starting-style {
            .content {
                opacity: 0;
                visibility: hidden;
            }
        }

        .content[hidden] {
            display: none;
        }

        @media (forced-colors: active) {
            .base {
                border: 1px solid CanvasText;
            }

            .chevron {
                fill: CanvasText;
            }
        }
    `}toggle(e=!this.expanded){if(e===this.expanded)return;let t=new CustomEvent(`ui-before-toggle`,{detail:{expanded:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:e},bubbles:!0,composed:!0})))}render(){return a`<div class="base">
            <button
                class="summary"
                part="summary"
                type="button"
                aria-expanded=${this.expanded?`true`:`false`}
                aria-controls=${this.contentId}
                @click=${()=>this.toggle()}
            >
                <slot name="summary"></slot>
                <svg class="chevron" part="chevron" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
                </svg>
            </button>
            <div class="content" part="content" id=${this.contentId} ?hidden=${!this.expanded}>
                <slot></slot>
            </div>
        </div>`}};t([e({type:Boolean,reflect:!0})],c.prototype,`expanded`,void 0),c=t([s(`ui-expandable-tile`)],c);