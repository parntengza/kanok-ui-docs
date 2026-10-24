import{Ct as e,D as t,E as n,Ot as r,St as i,Tt as a,bt as o,ct as s,jt as c,pt as l,rt as u,v as d,w as f,xt as p,yt as m}from"./theme-switcher-BGAHXRgF.js";var h=`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,g=class extends t{constructor(...e){super(...e),this.name=``}static{this.styles=c`
        :host {
            display: block;
            outline: none;
        }

        /* Carbon tab-content: 16px all round — on a part, not :host, so a page-wide CSS reset can't remove it */
        .base {
            padding: var(--ui-space-md);
        }

        :host([hidden]) {
            display: none;
        }

        /* vertical tabs stack every panel in one cell, so the tallest sets the height (Carbon measures it); the others stay out of sight, focus and the accessibility tree */
        :host([data-vertical]) {
            grid-area: 1 / 1;
        }

        :host([data-vertical][hidden]) {
            display: block;
            visibility: hidden;
        }

        /* Carbon: contained tabs' content sits on the layer */
        :host([data-contained]) {
            background-color: var(--ui-surface-1);
        }

        :host(:focus-visible) {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
            border-radius: var(--ui-tab-focus-radius, 0); /* the tabs' ring corners (Kanok: 6px) */
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`tabpanel`),this.id||=s(`ui-tab-panel`)}updated(e){e.has(`name`)&&e.get(`name`)!==void 0&&this.parentElement?.localName===`ui-tabs`&&this.parentElement.requestUpdate()}syncTabStop(){this.querySelector(h)?this.removeAttribute(`tabindex`):this.tabIndex=0}render(){return r`<div class="base"><slot @slotchange=${this.syncTabStop}></slot></div>`}};n([i({reflect:!0})],g.prototype,`name`,void 0),g=n([e(`ui-tab-panel`)],g);var _=c`
    :host([level='0']) {
        --ui-surface-1: var(--ui-layer-1);
        --ui-surface-2: var(--ui-layer-selected-1);
        --ui-hairline: var(--ui-border-subtle-1);
        --ui-hairline-strong: var(--ui-border-strong-1);
        --ui-ink-subtle: var(--ui-border-strong-1);
        --ui-ghost-hover: var(--ui-layer-hover-1);
        --ui-ghost-active: var(--ui-layer-active-1);
        --ui-layer-background: var(--ui-layer-background-1);
        --ui-layer-selected-hover: var(--ui-layer-selected-hover-1);
        --ui-layer-accent: var(--ui-layer-accent-1);
        --ui-layer-accent-hover: var(--ui-layer-accent-hover-1);
        --ui-layer-accent-active: var(--ui-layer-accent-active-1);
        --ui-border-subtle-selected: var(--ui-border-subtle-selected-1);
        --ui-border-tile: var(--ui-border-tile-1);
        --ui-row-divider: var(--ui-row-divider-1);
        --ui-card-background: var(--ui-card-background-1);
    }

    :host([level='1']) {
        --ui-surface-1: var(--ui-layer-2);
        --ui-surface-2: var(--ui-layer-selected-2);
        --ui-hairline: var(--ui-border-subtle-2);
        --ui-hairline-strong: var(--ui-border-strong-2);
        --ui-ink-subtle: var(--ui-border-strong-2);
        --ui-ghost-hover: var(--ui-layer-hover-2);
        --ui-ghost-active: var(--ui-layer-active-2);
        --ui-layer-background: var(--ui-layer-background-2);
        --ui-layer-selected-hover: var(--ui-layer-selected-hover-2);
        --ui-layer-accent: var(--ui-layer-accent-2);
        --ui-layer-accent-hover: var(--ui-layer-accent-hover-2);
        --ui-layer-accent-active: var(--ui-layer-accent-active-2);
        --ui-border-subtle-selected: var(--ui-border-subtle-selected-2);
        --ui-border-tile: var(--ui-border-tile-2);
        --ui-row-divider: var(--ui-row-divider-2);
        --ui-card-background: var(--ui-card-background-2);
    }

    :host([level='2']) {
        --ui-surface-1: var(--ui-layer-3);
        --ui-surface-2: var(--ui-layer-selected-3);
        --ui-hairline: var(--ui-border-subtle-3);
        --ui-hairline-strong: var(--ui-border-strong-3);
        --ui-ink-subtle: var(--ui-border-strong-3);
        --ui-ghost-hover: var(--ui-layer-hover-3);
        --ui-ghost-active: var(--ui-layer-active-3);
        --ui-layer-background: var(--ui-layer-background-3);
        --ui-layer-selected-hover: var(--ui-layer-selected-hover-3);
        --ui-layer-accent: var(--ui-layer-accent-3);
        --ui-layer-accent-hover: var(--ui-layer-accent-hover-3);
        --ui-layer-accent-active: var(--ui-layer-accent-active-3);
        --ui-border-subtle-selected: var(--ui-border-subtle-selected-3);
        --ui-border-tile: var(--ui-border-tile-3);
        --ui-row-divider: var(--ui-row-divider-3);
        --ui-card-background: var(--ui-card-background-3);
    }
`,v=2,y=class extends t{constructor(...e){super(...e),this.ownLevel=0,this.levelSet=!1,this.withBackground=!1}static{this.styles=[_,c`
            :host {
                display: block;
            }

            /* Carbon layer-background: the level below's colour, so the fields and tiles inside (this level's set) stand out from it */
            :host([with-background]) {
                background-color: var(--ui-layer-background);
                /* Carbon: a square, unbordered zone; a design can frame it as a card (--ui-layer-border, --ui-layer-radius) */
                border: var(--ui-layer-border, none);
                border-radius: var(--ui-layer-radius, 0);
            }
        `]}get level(){return this.ownLevel}set level(e){let t=this.ownLevel;this.ownLevel=e,this.levelSet=!0,this.requestUpdate(`level`,t)}syncLevel(){if(this.levelSet)return;let e=this.ownLevel;this.ownLevel=Math.min(b(this)+1,v),this.requestUpdate(`level`,e)}connectedCallback(){super.connectedCallback(),this.syncLevel()}updated(e){if(super.updated(e),e.has(`level`))for(let e of this.querySelectorAll(`ui-layer`))e.syncLevel()}render(){return r`<slot part="base"></slot>`}};n([i({type:Number,reflect:!0})],y.prototype,`level`,null),n([i({type:Boolean,reflect:!0,attribute:`with-background`})],y.prototype,`withBackground`,void 0),y=n([e(`ui-layer`)],y);function b(e){let t=e.parentNode;for(;t;){if(t instanceof y)return t.level;t=t instanceof ShadowRoot?t.host:t.parentNode}return-1}var x=c`
    /* tab height, inherited by the light-DOM ui-tab children */
    :host {
        --_tab-h: 40px;

        display: block;
        font-family: var(--ui-font-family);
    }

    :host([type='contained']) {
        --_tab-h: var(--ui-tabs-contained-height, 48px);
    }

    :host([size='sm']) {
        --_tab-h: 32px;
    }

    :host([size='md']) {
        --_tab-h: 40px;
    }

    :host([size='lg']),
    :host([size='xl']) {
        --_tab-h: 48px; /* Carbon line tabs stop at lg */
    }

    /* Carbon iconSize="lg": 20px icons in 48px icon-only tabs */
    :host([size='lg']) {
        --_tab-icon: 20px;
    }

    :host([type='contained'][size='xl']) {
        --_tab-h: 64px;
    }

    .strip {
        display: flex;
        box-shadow: var(--ui-tabs-track, none);
    }

    /* Carbon line tabs: 1px apart */
    .tablist {
        flex: 1;
        display: flex;
        column-gap: var(--ui-tabs-gap, 1px);
        min-width: 0;
        overflow-x: auto;
        scrollbar-width: none;
    }

    .tablist::-webkit-scrollbar {
        display: none;
    }

    .scroll {
        flex-shrink: 0;
        display: grid;
        place-items: center;
        width: 40px;
        min-height: var(--_tab-h);
        padding: 0;
        border: none;
        border-bottom: var(--ui-tab-line, 2px solid var(--ui-hairline));
        background-color: var(--ui-canvas);
        color: var(--ui-ink);
        cursor: pointer;
    }

    .scroll[hidden] {
        display: none;
    }

    /* Carbon overflow nav buttons: background-hover / background-active */
    .scroll:hover {
        background-color: var(--ui-canvas-hover);
    }

    .scroll:active {
        background-color: var(--ui-canvas-active);
    }

    .scroll svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    :host(:dir(rtl)) .scroll svg {
        transform: scaleX(-1);
    }

    .end {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        border-bottom: var(--ui-tab-line, 2px solid var(--ui-hairline));
    }

    /* Carbon contained: 48px scroll buttons on layer-accent, no underline */
    :host([type='contained']) .scroll {
        width: 48px;
        border-bottom: none;
        background-color: var(--ui-layer-accent);
    }

    :host([type='contained']) .scroll:hover {
        background-color: var(--ui-layer-accent-hover);
    }

    :host([type='contained']) .scroll:active {
        background-color: var(--ui-layer-accent-active);
    }

    :host([type='contained']) .end {
        border-bottom: none;
    }

    /* --ui-tabs-contained-*: Carbon's strip runs full width; a design can draw a track that hugs the tabs */
    :host([type='contained']) .tablist {
        flex: var(--ui-tabs-contained-flex, 1);
        column-gap: var(--ui-tabs-contained-gap, 0);
        padding: var(--ui-tabs-contained-padding, 0);
        border-radius: var(--ui-tabs-contained-radius, 0);
        background-color: var(--ui-tabs-contained-track, transparent);
    }

    :host([type='contained']) .strip {
        box-shadow: none; /* no line under contained tabs */
    }

    /* Carbon dismissable: the close button's box after each tab leaves 1px between contained tabs too */
    :host([type='contained'][dismissable]:not([vertical])) .tablist {
        column-gap: 1px;
    }

    :host([type='contained'][full-width]) .tablist {
        display: grid;
        grid-auto-columns: minmax(0, 1fr);
        grid-auto-flow: column;
    }

    /* vertical below md: contained tabs in a row (Carbon), 48px unless sized */
    :host([vertical]) {
        --_tab-h: 48px;
    }

    :host([vertical]) .tablist {
        column-gap: 0;
    }

    :host([vertical][size='sm']) {
        --_tab-h: 32px;
    }

    :host([vertical][size='md']) {
        --_tab-h: 40px;
    }

    /*
     * Vertical (Carbon TabsVertical: a CSS grid): the tab list over 2 of 8 columns (4 of 16 from lg) on the layer
     * with a border-subtle edge, the panels over the rest on the layer, 64px tabs (xl) unless sized.
     */
    :host([data-wide]) {
        --_tab-h: 64px;
    }

    :host([data-wide][size='sm']) {
        --_tab-h: 32px;
        --_tab-lines: 1;
    }

    :host([data-wide][size='md']) {
        --_tab-h: 40px;
    }

    :host([data-wide][size='lg']) {
        --_tab-h: 48px;
    }

    .vgrid {
        --_cols: 8;
        --_margin: 16px;

        display: grid;
        grid-template-columns: repeat(var(--_cols), minmax(0, 1fr));
        grid-template-rows: minmax(0, 1fr); /* fills a set height, so the tab list and the panels scroll in it */
        box-sizing: border-box;
        inline-size: 100%;
        max-inline-size: 1584px;
        margin-inline: auto;
        padding-inline: var(--_margin);
    }

    .vlist {
        position: relative;
        display: flex;
        grid-column: span 2;
        min-block-size: 0;
        background-color: var(--ui-tab-vertical-background, var(--ui-surface-1)); /* the tabs' own setting (tab.ts) */
        box-shadow: inset -1px 0 var(--ui-hairline);
    }

    .vlist .tablist {
        flex-direction: column;
        column-gap: 0;
        overflow: hidden auto;
    }

    .gradient {
        position: absolute;
        inset-inline: 0;
        block-size: var(--ui-space-xxl);
        pointer-events: none;
    }

    .gradient.top {
        inset-block-start: 0;
        background: linear-gradient(to top, transparent, var(--ui-tab-vertical-background, var(--ui-surface-1)));
    }

    .gradient.bottom {
        inset-block-end: 0;
        background: linear-gradient(to bottom, transparent, var(--ui-tab-vertical-background, var(--ui-surface-1)));
    }

    .vpanels {
        display: grid;
        grid-column: 3 / -1;
        min-block-size: 0;
        overflow-y: auto;
        background-color: var(--ui-surface-1);
    }

    .vpanels ui-layer {
        display: grid;
    }

    @media (min-width: 66rem) {
        .vgrid {
            --_cols: 16;
        }

        .vlist {
            grid-column: span 4;
        }

        .vpanels {
            grid-column: 5 / -1;
        }
    }

    @media (min-width: 99rem) {
        .vgrid {
            --_margin: 24px;
        }
    }
`,S=r`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,C=class extends t{constructor(...e){super(...e),this.panel=``,this.selected=!1,this.disabled=!1,this.secondaryLabel=``,this.iconOnly=!1,this.label=``,this.text=``,this.localize=new f(this)}static{this.styles=c`
        :host {
            flex-shrink: 0;
            display: inline-flex;
            min-height: var(--_tab-h, 40px);
            background-color: var(--ui-tab-background, var(--ui-canvas));
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            /* Carbon .cds--tabs__nav-item (fill) and __nav-link (text, ring): fast-01 */
            transition:
                color var(--ui-duration-fast) var(--ui-easing),
                background-color var(--ui-duration-fast) var(--ui-easing),
                outline var(--ui-duration-fast) var(--ui-easing);
        }

        /*
         * The padding and the underline are drawn by this part filling the tab, not by :host, so a
         * page-wide CSS reset can't remove them (the 1px between tabs is the tab list's gap).
         */
        .base {
            display: flex;
            flex: 1;
            align-items: center;
            box-sizing: border-box;
            padding: 0 var(--ui-space-md);
            /* Carbon: a 2px track under every tab; --ui-tab-line / --ui-tabs-track let a design draw one line under the strip */
            border-bottom: var(--ui-tab-line, 2px solid var(--ui-hairline));
            transition: border-color var(--ui-duration-fast) var(--ui-easing);
        }

        /* closed (dismissable) */
        :host([hidden]) {
            display: none;
        }

        /*
         * hovering the close button is no hover on the tab (Carbon: the button is the tab's sibling); the selected tab
         * keeps its mark under the pointer (and on a touch screen, which leaves :hover on the tab just tapped)
         */
        :host(:hover:not([data-close-hover], [selected])) {
            color: var(--ui-ink);
        }

        :host(:hover:not([data-close-hover], [selected])) .base {
            border-bottom-color: var(--ui-tab-hover-line, var(--ui-ink-subtle));
        }

        :host([selected]) {
            color: var(--ui-ink);
            font: var(--ui-font-body-emphasis);
        }

        /* --ui-tab-selected-line: the selected tab's mark (Carbon and Kanok: border-interactive) */
        :host([selected]) .base {
            border-bottom-color: var(--ui-tab-selected-line, var(--ui-border-interactive));
        }

        /*
         * --ui-tab-focus-radius: a design can round the focus ring as its other controls' (Carbon: square);
         * --ui-tab-focus-offset: and draw it clear of the selected underline (Carbon: over it, -2px). Inward, not outward:
         * the tab list scrolls, so a ring outside the tab would be cut off.
         */
        :host(:focus-visible) {
            border-radius: var(--ui-tab-focus-radius, 0);
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-tab-focus-offset, -2px);
        }

        /* a contained chip: the ring around it, in the track's padding (--ui-tab-contained-focus-offset) */
        :host([data-contained]:focus-visible) {
            outline-offset: var(--ui-tab-contained-focus-offset, var(--ui-tab-focus-offset, -2px));
        }

        :host([disabled]) {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        :host([disabled]) .base {
            border-bottom-color: var(--ui-tab-disabled-line, var(--ui-hairline));
        }

        /*
         * Contained (Carbon tabs--contained, measured on web-components.carbondesignsystem.com): 48px on layer-accent,
         * text-secondary, a 1px border-strong divider before each tab except the first and the one after the
         * selected tab; hover layer-accent-hover; selected on the layer with a 2px border-interactive top edge;
         * disabled button-disabled with text-on-color-disabled. The data attributes are set by ui-tabs.
         */
        /* --ui-tab-contained-*: Carbon's boxes on layer-accent; a design can make them a segmented control */
        :host([data-contained]) {
            position: relative;
            min-height: var(--_tab-h, 48px);
            border-radius: var(--ui-tab-contained-radius, 0);
            background-color: var(--ui-tab-contained-background, var(--ui-layer-accent));
        }

        :host([data-contained]) .base {
            border-bottom: none;
        }

        :host([data-contained])::before {
            position: absolute;
            inset-block: 0;
            inset-inline-start: -1px;
            inline-size: 1px;
            background-color: var(--ui-tab-contained-divider, var(--ui-hairline-strong));
            content: '';
        }

        :host([data-contained][data-first])::before,
        :host([data-contained][data-after-selected])::before,
        :host([data-contained][selected])::before {
            content: none;
        }

        :host([data-contained]:hover:not([selected], [disabled], [data-close-hover])) {
            background-color: var(--ui-tab-contained-hover, var(--ui-layer-accent-hover));
            color: var(--ui-ink);
        }

        :host([data-contained][selected]) {
            background-color: var(--ui-tab-contained-selected, var(--ui-surface-1));
            box-shadow: var(--ui-tab-contained-selected-shadow, inset 0 2px 0 0 var(--ui-tab-selected-line, var(--ui-border-interactive)));
        }

        :host([data-contained][disabled]) {
            background-color: var(--ui-tab-contained-disabled, var(--ui-button-disabled));
            color: var(--ui-tab-contained-disabled-ink, var(--ui-on-color-disabled));
        }

        /* full-width: equal columns, long labels end in an ellipsis */
        :host([data-full-width]) {
            display: block;
            min-width: 0;
            overflow: hidden;
            line-height: var(--_tab-h, 48px);
        }

        :host([data-full-width]) .base {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Carbon: the label (and the secondary label) end in an ellipsis */
        :host([data-full-width]) .label {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /*
         * Vertical (Carbon tabs--vertical, measured on the React story): full width, layer-01 with a 1px border-subtle
         * below and at the end and a 3px border-subtle bar at the start; hover layer-hover with a border-strong bar;
         * selected on the layer with a border-interactive bar and no end border; labels up to two lines (sm one).
         */
        /* --ui-tab-vertical-*: a design can make the rows inset, rounded, undivided ones as the side nav's */
        :host([data-vertical]) {
            flex: none;
            box-sizing: border-box;
            inline-size: calc(100% - 2 * var(--ui-tab-vertical-inset, 0px));
            min-height: 0;
            block-size: var(--_tab-h, 64px);
            margin-inline: var(--ui-tab-vertical-inset, 0px);
            border-block-end: var(--ui-tab-vertical-divider, 1px solid var(--ui-hairline));
            border-inline-end: var(--ui-tab-vertical-divider, 1px solid var(--ui-hairline));
            border-radius: var(--ui-tab-vertical-radius, 0);
            background-color: var(--ui-tab-vertical-background, var(--ui-surface-1));
            box-shadow: inset 3px 0 0 0 var(--ui-tab-vertical-bar, var(--ui-hairline));
            white-space: normal;
        }

        :host(:dir(rtl)[data-vertical]) {
            box-shadow: inset -3px 0 0 0 var(--ui-tab-vertical-bar, var(--ui-hairline));
        }

        :host([data-vertical]) .base {
            border-bottom: none;
        }

        :host([data-vertical]) .label {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: var(--_tab-lines, 2);
            line-height: 18px; /* body-compact-01 */
            text-overflow: ellipsis;
        }

        :host([data-vertical]:hover:not([selected], [disabled])) {
            background-color: var(--ui-ghost-hover);
            box-shadow: inset 3px 0 0 0 var(--ui-tab-vertical-hover-bar, var(--ui-hairline-strong));
        }

        :host(:dir(rtl)[data-vertical]:hover:not([selected], [disabled])) {
            box-shadow: inset -3px 0 0 0 var(--ui-tab-vertical-hover-bar, var(--ui-hairline-strong));
        }

        :host([data-vertical][selected]) {
            border-inline-end: none;
            background-color: var(--ui-tab-vertical-selected, var(--ui-tab-vertical-background, var(--ui-surface-1)));
            box-shadow: inset 3px 0 0 0 var(--ui-tab-vertical-mark, var(--ui-tab-selected-line, var(--ui-border-interactive)));
        }

        :host(:dir(rtl)[data-vertical][selected]) {
            box-shadow: inset -3px 0 0 0 var(--ui-tab-vertical-mark, var(--ui-tab-selected-line, var(--ui-border-interactive)));
        }

        :host([data-vertical][disabled]) {
            background-color: var(--ui-tab-vertical-background, var(--ui-surface-1));
        }

        /* the label and its icon (Carbon tabs__nav-item-label-wrapper) */
        .row {
            display: flex;
            align-items: center;
            min-inline-size: 0;
        }

        /*
         * Carbon renderIcon (tabs__nav-item--icon): a 16px icon in the text colour after the label, 8px
         * from it (contained and vertical: 16px); in dismissable tabs before the label, 8px from it and
         * 1px higher (tabs__nav-item--icon-left).
         */
        ::slotted([slot='icon']) {
            flex-shrink: 0;
            inline-size: 16px;
            block-size: 16px;
            margin-inline-start: var(--ui-space-xs);
            fill: currentColor;
        }

        :host([data-contained]) ::slotted([slot='icon']),
        :host([data-vertical]) ::slotted([slot='icon']) {
            margin-inline-start: var(--ui-space-md);
        }

        /* full width: pushed to the end */
        :host([data-full-width]) ::slotted([slot='icon']) {
            margin-inline-start: auto;
        }

        :host([data-dismissable]) ::slotted([slot='icon']) {
            order: -1;
            align-self: flex-start;
            margin-inline: 0 var(--ui-space-xs);
        }

        /*
         * Carbon IconTab: a square tab (its height both ways), the icon centred; icon-only contained tabs
         * keep 1px apart. 20px icons go with size lg (Carbon iconSize="lg"), set by ui-tabs.
         */
        :host([icon-only]) {
            position: relative;
            inline-size: var(--_tab-h, 40px);
        }

        :host([icon-only]) .base {
            justify-content: center;
            padding: 0;
        }

        :host([icon-only]) .label {
            display: none;
        }

        :host([icon-only]) ::slotted([slot='icon']) {
            inline-size: var(--_tab-icon, 16px);
            block-size: var(--_tab-icon, 16px);
            margin: 0;
        }

        :host([icon-only][data-contained]) {
            margin-inline-end: 1px;
        }

        /* the tooltip anchors to the host and shows its bubble in the top layer; it takes no room here */
        ui-tooltip {
            position: absolute;
            cursor: auto;
            white-space: normal;
            user-select: auto;
        }

        /*
         * Carbon secondaryLabel (contained only, tabs--tall): every tab 64px whatever the size, the label
         * (body-compact-01) over the secondary label (label-01, at least 16px tall, regular weight),
         * both at the start, centred together.
         */
        .secondary {
            display: none;
        }

        :host([data-tall]) {
            min-height: 64px;
        }

        :host([data-tall]) .base {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }

        :host([data-tall]) .row {
            max-inline-size: 100%;
        }

        :host([data-tall]) .secondary {
            display: block;
            max-inline-size: 100%;
            min-block-size: 16px;
            overflow: hidden;
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
            text-overflow: ellipsis;
        }

        :host([data-full-width][data-tall]) {
            display: flex;
            line-height: 1.29;
        }

        :host([data-full-width][data-tall]) .base {
            display: flex;
        }

        /*
         * Carbon dismissable tabs: the end padding grows to 40px (spacing-08; contained 47px) and a 24px
         * close button sits 12px from the end, centred: a 16px text-secondary × (icon-primary on a
         * hovered or selected tab), layer-hover under the pointer, the focus outline while pressed.
         * Icon-only tabs get none (they have no room for it).
         */
        .close {
            position: absolute;
            inset-block: 0;
            inset-inline-end: var(--ui-space-sm);
            display: none;
            place-items: center;
            box-sizing: border-box;
            inline-size: 24px;
            block-size: 24px;
            margin: auto 0;
            padding: var(--ui-space-xxs);
            border: none;
            background: none;
            color: var(--ui-ink-muted);
            cursor: pointer;
            outline: none;
            border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
        }

        :host([data-dismissable]) {
            position: relative;
        }

        :host([data-dismissable]:not([icon-only])) .base {
            padding-inline-end: 40px;
        }

        :host([data-dismissable][data-contained]:not([icon-only])) .base {
            padding-inline-end: 47px;
        }

        :host([data-dismissable]:not([icon-only])) .close {
            display: grid;
        }

        .close svg {
            inline-size: 16px;
            block-size: 16px;
            fill: currentColor;
        }

        :host(:hover) .close,
        :host([selected]) .close {
            color: var(--ui-icon-primary);
        }

        .close:hover {
            background-color: var(--ui-ghost-hover);
        }

        .close:focus,
        .close:active {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
        .close:focus:not(:focus-visible),
        .close:active {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        :host([disabled]) .close {
            background: none;
            color: var(--ui-icon-disabled);
            cursor: not-allowed;
            outline: none;
        }

        @media (forced-colors: active) {
            :host([selected]) .base {
                border-bottom-color: Highlight;
            }
            :host([data-contained][selected]) {
                background-color: SelectedItem;
            }
        }
    `}static get observedAttributes(){return[...super.observedAttributes,`hidden`]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`hidden`&&t!==n&&this.notifyTabs()}notifyTabs(){this.parentElement instanceof E&&this.parentElement.requestUpdate()}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`slot`)||(this.slot=`nav`),this.id||=s(`ui-tab`)}updated(e){this.setAttribute(`aria-selected`,String(this.selected)),this.setAttribute(`aria-disabled`,String(this.disabled)),u(this,`aria-label`,this.iconOnly&&this.label?this.label:null),(e.has(`secondaryLabel`)||[`disabled`,`panel`].some(t=>e.has(t)&&e.get(t)!==void 0))&&this.notifyTabs()}onLabelChange(e){let t=e.target.assignedNodes({flatten:!0});this.text=t.map(e=>e.textContent??``).join(``).trim()}closeHover(e){this.toggleAttribute(`data-close-hover`,e)}render(){let e=this.localize.t.common.removeTab.replace(`{text}`,this.label||this.text).replaceAll(/\s+/g,` `).trim(),t=this.secondaryLabel?r`<span class="secondary" part="secondary-label" title=${this.secondaryLabel}>${this.secondaryLabel}</span>`:a,n=this.iconOnly&&this.label?r`<ui-tooltip as-label part="tooltip" text=${this.label} placement="bottom" .anchor=${this} @click=${e=>e.stopPropagation()}></ui-tooltip>`:a;return r`<span class="base"><span class="row"><span class="label"><slot @slotchange=${this.onLabelChange}></slot></span><slot name="icon"></slot></span>${t}</span><button
                class="close"
                part="close-button"
                type="button"
                tabindex="-1"
                aria-hidden="true"
                title=${e}
                ?disabled=${this.disabled}
                @pointerenter=${()=>this.closeHover(!0)}
                @pointerleave=${()=>this.closeHover(!1)}
            >
                ${S}
            </button>${n}`}};n([i({reflect:!0})],C.prototype,`panel`,void 0),n([i({type:Boolean,reflect:!0})],C.prototype,`selected`,void 0),n([i({type:Boolean,reflect:!0})],C.prototype,`disabled`,void 0),n([i({attribute:`secondary-label`})],C.prototype,`secondaryLabel`,void 0),n([i({type:Boolean,reflect:!0,attribute:`icon-only`})],C.prototype,`iconOnly`,void 0),n([i()],C.prototype,`label`,void 0),n([p()],C.prototype,`text`,void 0),C=n([e(`ui-tab`)],C);var w=`(min-width: 42.01rem)`,T=e=>r`<svg viewBox="0 0 16 16" aria-hidden="true"><path d=${e} /></svg>`,E=class extends t{constructor(...e){super(...e),this.value=``,this.label=``,this.activation=`automatic`,this.type=`line`,this.fullWidth=!1,this.vertical=!1,this.height=``,this.dismissable=!1,this.wide=!1,this.canScrollUp=!1,this.canScrollDown=!1,this.onMedia=()=>{this.wide=!!this.media?.matches},this.canScrollStart=!1,this.canScrollEnd=!1}static{this.styles=x}observeSize(){this.resizeObserver??=new ResizeObserver(()=>this.updateOverflow()),this.resizeObserver.observe(this.tablist)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.observeSize(),this.media=globalThis.matchMedia?.(w),this.media?.addEventListener(`change`,this.onMedia),this.onMedia()}firstUpdated(){this.observeSize()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.media?.removeEventListener(`change`,this.onMedia)}get columnLayout(){return this.vertical&&this.wide}updated(e){this.toggleAttribute(`data-wide`,this.columnLayout),(e.has(`wide`)||e.has(`vertical`))&&this.observeSize(),this.sync()}shownTabs(){return this.tabs.filter(e=>!e.hidden)}enabledTabs(){return this.shownTabs().filter(e=>!e.disabled)}get closable(){return this.dismissable&&!this.vertical}sync(){if(!this.tabs.length)return;let e=this.shownTabs(),t=e.find(e=>e.panel===this.value&&!e.disabled)??this.enabledTabs()[0];if(t&&t.panel!==this.value){this.value=t.panel;return}let n=this.columnLayout,r=!n&&(this.type===`contained`||this.vertical),i=r&&e.some(e=>e.secondaryLabel),a=this.closable,o=e.find(e=>!e.disabled&&e.matches(`:focus`))??t;for(let e of this.tabs)e.tabIndex=e===o?0:-1,e.hidden&&(e.selected=!1);e.forEach((o,s)=>{let c=this.panels.find(e=>e.name===o.panel);o.selected=o===t,o.toggleAttribute(`data-contained`,r),o.toggleAttribute(`data-vertical`,n),o.toggleAttribute(`data-full-width`,r&&this.fullWidth),o.toggleAttribute(`data-tall`,i),o.toggleAttribute(`data-dismissable`,a),o.toggleAttribute(`data-first`,s===0),o.toggleAttribute(`data-after-selected`,s>0&&e[s-1]===t),u(o,`aria-keyshortcuts`,a&&!o.disabled?`Delete`:null),c&&(o.setAttribute(`aria-controls`,c.id),c.setAttribute(`aria-labelledby`,o.id))});let s=e.length?this.value:null;for(let e of this.panels)e.hidden=e.name!==s,e.toggleAttribute(`data-contained`,r),e.toggleAttribute(`data-vertical`,n)}async closeTab(e){if(e.disabled)return;let t={name:e.panel},n=new CustomEvent(`ui-request-close`,{detail:t,bubbles:!0,composed:!0,cancelable:!0});if(!e.dispatchEvent(n)){this.focusTab(e);return}let r=this.shownTabs(),i=r.indexOf(e);e.hidden=!0,delete e.dataset.closeHover,e.dispatchEvent(new CustomEvent(`ui-close`,{detail:t,bubbles:!0,composed:!0}));let a=this.value===t.name?this.enabledTabs()[0]:void 0;a&&(this.value=a.panel),this.requestUpdate(),await this.updateComplete,a&&this.dispatchEvent(new CustomEvent(`ui-tab-change`,{detail:{name:a.panel},bubbles:!0,composed:!0}));let o=r.filter(t=>t!==e&&!t.disabled),s=o.find(e=>r.indexOf(e)>i)??o.findLast(e=>r.indexOf(e)<i);s&&this.focusTab(s)}focusTab(e){for(let t of this.tabs)t.tabIndex=t===e?0:-1;e.focus(),e.scrollIntoView({block:`nearest`,inline:`nearest`}),this.updateOverflow()}select(e){if(e.disabled||e.panel===this.value)return;let t=new CustomEvent(`ui-tab-before-change`,{detail:{name:e.panel,previous:this.value},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.value=e.panel,this.dispatchEvent(new CustomEvent(`ui-tab-change`,{detail:{name:e.panel},bubbles:!0,composed:!0})))}onClick(e){let t=e.target.closest(`ui-tab`);t&&!t.disabled&&(e.composedPath().some(e=>e instanceof Element&&e.classList.contains(`close`)&&t.shadowRoot?.contains(e))?this.closable&&this.closeTab(t):(this.focusTab(t),this.select(t)))}nextTab(e,t){let n=this.enabledTabs(),r=n.indexOf(e),i=d(n.length,r,t,{rtl:getComputedStyle(this).direction===`rtl`,orientation:this.columnLayout?`vertical`:`horizontal`});return i===void 0?void 0:n[i]}onKeydown(e){let t=e.target.closest(`ui-tab`);if(!t||!this.enabledTabs().length)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),this.select(t);return}if(e.key===`Delete`&&this.closable){e.preventDefault(),this.closeTab(t);return}let n=this.nextTab(t,e.key);n&&(e.preventDefault(),this.focusTab(n),this.activation!==`manual`&&this.select(n))}updateOverflow(){let e=this.tablist;if(!e)return;if(this.columnLayout){this.canScrollUp=e.scrollTop>32,this.canScrollDown=e.scrollTop+e.clientHeight+32<=e.scrollHeight;return}let t=Math.abs(e.scrollLeft);this.canScrollStart=t>1,this.canScrollEnd=t+e.clientWidth<e.scrollWidth-1}scrollStrip(e){let t=this.tablist,n=getComputedStyle(this).direction===`rtl`?-1:1,r=matchMedia(`(prefers-reduced-motion: no-preference)`).matches;t.scrollBy({left:e*n*t.clientWidth*.8,behavior:r?`smooth`:`auto`})}focus(e){let t=this.shownTabs();(t.find(e=>e.tabIndex===0)??t[0])?.focus(e)}renderTablist(){return r`<div
            class="tablist"
            part="tablist"
            role="tablist"
            aria-label=${this.label||a}
            aria-orientation=${this.columnLayout?`vertical`:a}
            @click=${this.onClick}
            @keydown=${this.onKeydown}
            @scroll=${this.updateOverflow}
        >
            <slot name="nav" @slotchange=${()=>this.sync()}></slot>
        </div>`}renderColumns(){let e=Math.min(Math.max(b(this),0)+1,2);return r`<div class="vgrid" part="base" style=${l({height:this.height||void 0})}>
            <div class="vlist">
                ${this.renderTablist()}
                ${this.canScrollUp?r`<div class="gradient top" aria-hidden="true"></div>`:a}
                ${this.canScrollDown?r`<div class="gradient bottom" aria-hidden="true"></div>`:a}
            </div>
            <div class="vpanels" part="panels">
                <ui-layer .level=${e}><slot @slotchange=${()=>this.sync()}></slot></ui-layer>
            </div>
        </div>`}render(){return this.columnLayout?this.renderColumns():r`
            <div class="strip" part="base">
                <button
                    class="scroll"
                    part="scroll-button"
                    type="button"
                    tabindex="-1"
                    aria-hidden="true"
                    ?hidden=${!this.canScrollStart}
                    @click=${()=>this.scrollStrip(-1)}
                >
                    ${T(`m5 8 5-5 .7.7L6.4 8l4.3 4.3-.7.7z`)}
                </button>
                ${this.renderTablist()}
                <button
                    class="scroll"
                    part="scroll-button"
                    type="button"
                    tabindex="-1"
                    aria-hidden="true"
                    ?hidden=${!this.canScrollEnd}
                    @click=${()=>this.scrollStrip(1)}
                >
                    ${T(`m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3z`)}
                </button>
                <div class="end" part="end"><slot name="end"></slot></div>
            </div>
            <slot @slotchange=${()=>this.sync()}></slot>
        `}};n([i({reflect:!0})],E.prototype,`value`,void 0),n([i()],E.prototype,`label`,void 0),n([i({reflect:!0})],E.prototype,`activation`,void 0),n([i({reflect:!0})],E.prototype,`type`,void 0),n([i({reflect:!0})],E.prototype,`size`,void 0),n([i({type:Boolean,reflect:!0,attribute:`full-width`})],E.prototype,`fullWidth`,void 0),n([i({type:Boolean,reflect:!0})],E.prototype,`vertical`,void 0),n([i()],E.prototype,`height`,void 0),n([i({type:Boolean,reflect:!0})],E.prototype,`dismissable`,void 0),n([p()],E.prototype,`wide`,void 0),n([p()],E.prototype,`canScrollUp`,void 0),n([p()],E.prototype,`canScrollDown`,void 0),n([p()],E.prototype,`canScrollStart`,void 0),n([p()],E.prototype,`canScrollEnd`,void 0),n([o(`.tablist`)],E.prototype,`tablist`,void 0),n([m({slot:`nav`,selector:`ui-tab`})],E.prototype,`tabs`,void 0),n([m({selector:`ui-tab-panel`})],E.prototype,`panels`,void 0),E=n([e(`ui-tabs`)],E);