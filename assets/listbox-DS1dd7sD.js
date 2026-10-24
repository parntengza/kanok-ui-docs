import{Ot as e,jt as t}from"./theme-switcher-BGAHXRgF.js";var n=e=>({value:e.value,label:e.label||e.textContent?.trim()||``,disabled:e.disabled,description:e.dataset.description??``});function r(t){return t.description?e`<span class="text two-line">
        <span class="line">${t.label}</span>
        <span class="line description" part="option-description">${t.description}</span>
    </span>`:e`<span class="text">${t.label}</span>`}function i(e){let t=[],r=null;for(let i of e.children)if(i instanceof HTMLOptGroupElement){let e=[...i.querySelectorAll(`option`)].map(e=>({...n(e),disabled:e.disabled||i.disabled}));t.push({label:i.label,options:e}),r=null}else i instanceof HTMLOptionElement&&(r??={label:null,options:[]},t.includes(r)||t.push(r),r.options.push(n(i)));return t}var a=e=>e.flatMap(e=>e.options),o=(e,t)=>e.value===t.value,s=e=>e.some(e=>e.label!==null);function c(t,n,r){let i=0;return t.map((t,a)=>{let o=t.options.map(e=>r(e,i++));if(t.label===null)return e`${o}`;let s=`${n}-group-${a}`;return e`<li role="presentation">
            <div role="group" aria-labelledby=${s}>
                <div class="group-label" part="group-label" id=${s}>${t.label}</div>
                <ul role="presentation">
                    ${o}
                </ul>
            </div>
        </li>`})}var l=t`
    .menu {
        position: absolute; /* document coordinates in the top layer: scrolls with the page, see position.ts */
        inset: auto;
        box-sizing: border-box;
        margin: 0;
        padding: var(--ui-menu-padding, 0); /* Carbon: rows edge to edge; a design can inset them */
        /* Carbon: square, shadow only; --ui-menu-* let a design round and outline it */
        border: var(--ui-menu-border, none);
        border-radius: var(--ui-menu-radius, 0);
        list-style: none;
        background-color: var(--ui-overlay-background, var(--ui-surface-1)); /* a design can raise floating surfaces (--ui-overlay-background) */
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        box-shadow: var(--ui-menu-shadow, 0 2px 6px rgb(0 0 0 / 0.3));
        /* no taller than the room left beside its field (core/popup placePopup writes it while open): the list scrolls instead */
        max-height: min(calc(var(--_h) * var(--ui-menu-max-rows, 5.5)), var(--ui-available-height, 100vh));
        overflow-y: auto;
        overscroll-behavior: contain; /* scrolling past the end doesn't scroll the page (which would move the list off its field) */
    }

    .menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .group-label {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: var(--_h);
        padding: 0 var(--ui-space-md);
        border-top: 1px solid var(--ui-hairline);
        color: var(--ui-ink-helper);
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
        text-transform: none;
    }

    /*
     * Carbon list-box rows (measured on react.carbondesignsystem.com): text-secondary, a 1px border-subtle-01 divider
     * inset 16px each side; hover = layer-hover with text-primary; selected = layer-selected (hover: layer-selected-hover);
     * keyboard highlight = 2px focus outline — the mouse never moves it (Carbon web components: hover only tints the row;
 * the outline stays on the highlighted row). Dividers next to a hovered, highlighted or selected row are hidden.
     */
    .option {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        min-height: var(--_h);
        padding: 0 calc(var(--ui-space-md) * 2 + 16px) 0 var(--ui-space-md);
        /* --ui-menu-item-*: Carbon rows are square, secondary text, divided; a design can round them and drop the rules */
        border-radius: var(--ui-menu-item-radius, 0);
        color: var(--ui-menu-item-ink, var(--ui-ink-muted));
        cursor: pointer;
        outline: var(--ui-focus-width, 2px) solid transparent;
        outline-offset: -2px;
        /* Carbon list-box__menu-item: background; its __option: text colour and divider, all at fast-01 */
        transition:
            background-color var(--ui-duration-fast) var(--ui-easing),
            color var(--ui-duration-fast) var(--ui-easing);
    }

    .option + .option::before {
        position: absolute;
        inset-block-start: 0;
        inset-inline: var(--ui-space-md);
        block-size: 1px;
        background-color: var(--ui-menu-divider, var(--ui-row-divider)); /* border-subtle-01, -02, -03 by layer */
        content: '';
        transition: background-color var(--ui-duration-fast) var(--ui-easing);
    }

    .option:hover:not([aria-disabled='true']) {
        background-color: var(--ui-ghost-hover); /* layer-hover */
        color: var(--ui-ink);
    }

    .option:active:not([aria-disabled='true']) {
        background-color: var(--ui-menu-item-pressed, var(--ui-surface-2)); /* layer-selected; a design can make it a tint */
    }

    /* the keyboard highlight: Carbon's 2px focus outline; a design can show it as a fill instead (--ui-menu-item-active-*) */
    .option.active {
        outline-color: var(--ui-menu-item-active-outline, var(--ui-focus));
        color: var(--ui-ink);
    }

    .option.active:not(:hover, [aria-selected='true']) {
        background-color: var(--ui-menu-item-active-background, transparent);
    }

    .option[aria-selected='true'] {
        background-color: var(--ui-menu-item-selected, var(--ui-surface-2)); /* layer-selected */
        color: var(--ui-ink);
    }

    /* --ui-menu-item-selected-hover: a design's selected row a shade deeper under the pointer (Carbon: layer-selected-hover) */
    .option[aria-selected='true']:hover {
        background-color: var(--ui-menu-item-selected-hover, var(--ui-layer-selected-hover));
    }

    .option:hover:not([aria-disabled='true'])::before,
    .option.active::before,
    .option:hover:not([aria-disabled='true']) + .option::before,
    .option.active + .option::before,
    .option[aria-selected='true'] + .option::before {
        background-color: transparent;
    }

    .option[aria-disabled='true'] {
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
        background-color: transparent;
    }

    .option .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .option .two-line {
        display: flex;
        flex-direction: column;
        padding: var(--ui-space-xs) 0;
    }

    .option .line {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .option .description {
        color: var(--ui-ink-helper);
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
    }

    .option[aria-disabled='true'] .description {
        color: inherit;
    }

    .check {
        position: absolute;
        inset-inline-end: var(--ui-space-md);
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    @media (forced-colors: active) {
        .menu {
            border: 1px solid CanvasText;
        }
        .option.active {
            outline-color: Highlight;
        }
        .option[aria-selected='true'] {
            forced-color-adjust: none;
            background-color: Highlight;
            color: HighlightText;
        }
        .check {
            fill: FieldText;
        }
    }
`,u=t`
    .empty {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: var(--_h);
        padding: 0 var(--ui-space-md);
        color: var(--ui-ink-helper);
    }
`,d=t`
    /* Carbon ComboBox end padding: 48, 70 with ×, 64 with a status icon, 105 with both */
    .has-clear input {
        padding-inline-end: 70px;
    }

    .has-status input {
        padding-inline-end: 64px;
    }

    .has-status.has-clear input {
        padding-inline-end: 105px;
    }

    .controls {
        position: absolute;
        inset-block: 0;
        inset-inline-end: 0;
        display: flex;
        align-items: center;
    }

    /*
     * Carbon geometry from the end (measured on react.carbondesignsystem.com): chevron icon 16–32px,
     * × a 24px box at 45–69px with a 1px border-subtle divider 41px from the end (and one 74px from the end
     * after a status icon), status icon 40–56px, or 82–98px beside the ×.
     */
    .status {
        display: flex;
        align-items: center;
        margin-inline-end: -8px;
        pointer-events: none;
    }

    .has-clear .status {
        margin-inline-end: 0;
        padding-inline-end: 13px;
    }

    .clear,
    .toggle {
        display: grid;
        place-items: center;
        height: 100%;
        padding: 0;
        border: none;
        border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
        background: transparent;
        color: var(--ui-ink);
        cursor: pointer;
    }

    .clear {
        position: relative;
        z-index: 1;
        width: 24px;
        height: 24px;
        margin-inline-end: -3px;
    }

    .clear::after,
    .has-status .clear::before {
        position: absolute;
        inset-block-start: 4px;
        inline-size: 1px;
        block-size: 16px;
        background-color: var(--ui-border-subtle-2); /* border-subtle-01 */
        content: '';
    }

    .clear::after {
        inset-inline-start: 28px;
    }

    .has-status .clear::before {
        inset-inline-start: -5px;
    }

    .toggle {
        width: 48px;
    }

    /* Carbon FluidComboBox: chevron 12px from the end */
    :host([data-fluid]) .toggle {
        width: 40px;
    }

    .clear:focus-visible,
    .toggle:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
    }

    .clear svg,
    .toggle svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    .toggle svg {
        transition: transform var(--ui-duration-fast) var(--ui-easing);
    }

    .open .toggle svg {
        transform: rotate(180deg);
    }

    :host([readonly]) .toggle {
        color: var(--ui-ink-subtle);
    }

    .toggle:disabled {
        color: var(--ui-ink-disabled);
        cursor: default;
    }

    @media (forced-colors: active) {
        .clear svg,
        .toggle svg {
            fill: FieldText;
        }
    }

    /* Carbon fluid combo box: the 40px toggle 22px down, its chevron 34px down and 12px from the end */
    :host([data-fluid]) .controls {
        --ui-fluid-icon-top: 50px;
        --ui-fluid-icon-end: var(--ui-space-md);
        inset-block: 22px auto;
        block-size: 40px;
    }
`;export{l as a,r as c,u as i,o as l,s as n,i as o,d as r,c as s,a as t};