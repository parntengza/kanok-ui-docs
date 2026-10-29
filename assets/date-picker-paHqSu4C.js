import{$ as e,B as t,Ct as n,D as r,E as i,Et as a,G as o,J as s,L as c,Mt as l,N as u,O as d,Q as ee,St as f,T as p,Tt as m,U as te,W as ne,Y as re,_ as ie,at as h,ct as g,et as ae,f as _,h as oe,j as se,kt as v,lt as y,m as ce,nt as b,st as le,tt as ue,u as x,ut as S,v as C,wt as w,xt as T,z as de}from"./theme-switcher-BZXGbHfR.js";import{C as E,D as fe,S as pe,T as me,_ as he,a as ge,b as _e,c as D,d as O,f as k,h as A,i as j,k as M,l as N,m as P,n as F,p as I,r as ve,s as L,t as R,u as ye,v as be,w as z,x as B,y as V}from"./date-_JG37lMZ.js";import{n as xe,t as H}from"./sheet-DbjrsMqL.js";var Se=l`
    :host {
        --_toggle: var(--ui-field-height-lg, 48px);

        display: block;
        font-family: var(--ui-font-family);
    }

    :host([size='sm']) {
        --_toggle: var(--ui-field-height-sm, 32px);
    }

    :host([size='md']) {
        --_toggle: var(--ui-field-height-md, 40px);
    }

    .range-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1px; /* Carbon: the two range inputs sit 1px apart */
        align-items: start;
    }

    /* Carbon fluid range: the two boxes touch */
    :host([data-fluid]) .range-fields {
        column-gap: 0;
    }

    /* ---- calendar popover (the grid itself is <ui-calendar>) ---- */

    .calendar {
        position: absolute; /* document coordinates in the top layer: scrolls with the page, see position.ts */
        inset: auto;
        margin: 0;
        box-sizing: border-box;
        width: var(--ui-calendar-width, auto);
        max-width: calc(100vw - 32px);
        padding: var(--ui-calendar-padding, var(--ui-space-sm, 12px));
        /* modern rounded card (Cally style) */
        border: var(--ui-calendar-border, var(--ui-menu-border, 1px solid var(--ui-hairline)));
        border-radius: var(--ui-calendar-radius, var(--ui-menu-radius, 16px));
        background-color: var(--ui-overlay-background, var(--ui-surface-1)); /* a design can raise floating surfaces (--ui-overlay-background) */
        --_ui-calendar-surface: var(--ui-overlay-background, var(--ui-surface-1)); /* the end-of-range day covers the range tint */
        color: var(--ui-ink);
        box-shadow: var(--ui-calendar-shadow, var(--ui-menu-shadow, 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.08)));
    }

    /* two months: as wide as both grids side by side; a viewport narrower than that wraps them, one under the other */
    .calendar.multi-month {
        width: max-content;
    }

    /* Carbon flatpickr-calendar.animate.open (fp-fade-in-down): fades in from 20px above, fast-02 with the entrance easing; it closes at once */
    .calendar:popover-open {
        animation: calendar-open var(--ui-duration-moderate) var(--ui-easing-entrance);
    }

    @keyframes calendar-open {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }

    /*
     * ---- the bottom sheet on a phone (picker="auto" / "sheet"): a modal <dialog> holding the calendar ----
     * Pinned to the bottom edge over a scrim, the calendar centred in a full-width panel with rounded top corners, its
     * padding clear of the safe-area insets (a home indicator, a notch in landscape). A swipe on the grip moves it
     * (core/sheet swipeToClose writes translate); let go short of closing, it springs back.
     */
    .sheet {
        position: fixed;
        inset: auto 0 0;
        box-sizing: border-box;
        width: 100%;
        max-width: none;
        max-height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        color: var(--ui-ink);
        overflow: visible;
        transition: translate var(--ui-duration-moderate) var(--ui-easing);
    }

    .sheet[data-dragging] {
        transition: none;
    }

    .sheet::backdrop {
        background-color: var(--ui-modal-scrim, rgb(22 22 22 / 0.5)); /* the modal's scrim */
    }

    /* Carbon's entrance: it rises from the bottom edge (moderate-02, entrance easing); it closes at once */
    .sheet[open] {
        animation: sheet-open var(--ui-duration-moderate-02) var(--ui-easing-entrance);
    }

    @keyframes sheet-open {
        from {
            transform: translateY(100%);
        }
    }

    .sheet .calendar {
        position: static;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: none; /* the popover's viewport margin would leave the sheet short of the right edge */
        max-height: calc(100dvh - var(--ui-space-xl));
        overflow-y: auto;
        overscroll-behavior: contain;
        padding: 0 max(var(--ui-space-xs), env(safe-area-inset-right)) calc(var(--ui-space-md) + env(safe-area-inset-bottom)) max(var(--ui-space-xs), env(safe-area-inset-left));
        border-radius: var(--ui-sheet-radius, var(--ui-menu-radius, var(--ui-radius-none))) var(--ui-sheet-radius, var(--ui-menu-radius, var(--ui-radius-none))) 0 0;
    }

    /* the top bar: a grip (swiped down, the sheet follows the finger) and the × button, as the modal's */
    .sheet-grip {
        position: relative;
        align-self: stretch;
        display: flex;
        justify-content: center;
        flex: none;
        height: 48px;
        touch-action: none;
        cursor: grab;
    }

    .sheet-handle {
        width: 32px;
        height: 4px;
        margin-top: var(--ui-space-xs);
        border-radius: 2px;
        background-color: var(--ui-icon-secondary);
    }

    .sheet-close {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        padding: 0;
        border: none;
        background: transparent;
        color: var(--ui-ink);
        cursor: pointer;
        transition: background-color var(--ui-duration-moderate) var(--ui-easing);
    }

    .sheet-close:hover {
        background-color: var(--ui-ghost-hover);
    }

    .sheet-close:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
    }

    .sheet-close svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
    }

    @media (forced-colors: active) {
        input {
            border: 1px solid FieldText;
        }
        .calendar {
            border: 1px solid CanvasText;
        }
        .sheet-handle {
            background-color: CanvasText;
        }
    }
`,Ce=l`
    :host {
        display: block;
        font-family: var(--ui-font-family);
        color: var(--ui-ink);
        user-select: none;
    }

    /* Multi-month layout container */
    .months-container {
        display: flex;
        gap: var(--ui-space-lg, 24px);
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
    }

    .month-view {
        width: 100%;
        max-width: 280px;
        flex: 0 0 280px;
    }

    /* --- Header: Clean, balanced, modern (Cally style) --- */
    .cal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin-bottom: var(--ui-space-xs, 8px);
    }

    .month-year {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--ui-space-xxs, 4px);
        height: 28px;
        font: var(--ui-font-body-emphasis);
        font-weight: 600;
        letter-spacing: var(--ui-tracking-body);
        color: var(--ui-ink);
    }

    /* several months: each grid's name over it, set like the header's selects (which show the first month) */
    .month-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        margin-bottom: var(--ui-space-xs, 8px);
        font: var(--ui-font-body-emphasis);
        font-size: 0.9375rem;
        font-weight: 600;
        letter-spacing: var(--ui-tracking-body);
        color: var(--ui-ink);
    }

    /* a tap is a click at once: no double-tap zoom to wait for between quick taps (Cally: touch-action on every button) */
    .nav,
    .day,
    .today-button {
        touch-action: manipulation;
    }

    /* Navigation buttons: circular, clean, soft hover (Cally style) */
    .nav {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        padding: 0;
        border: none;
        border-radius: var(--ui-icon-control-radius, 9999px);
        background: transparent;
        color: var(--ui-ink);
        cursor: pointer;
        transition: background-color var(--ui-duration-fast, 150ms) var(--ui-easing),
                    color var(--ui-duration-fast, 150ms) var(--ui-easing);
    }

    .nav:hover {
        background-color: var(--ui-ghost-hover);
    }

    .nav:active {
        background-color: var(--ui-ghost-active);
    }

    .nav:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: var(--ui-focus-offset, -2px);
    }

    .nav:disabled {
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
        background: transparent;
        opacity: 0.3;
    }

    .nav svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    /* --- Table & Grid: 7 equal 40px columns (280px total) --- */
    table {
        width: 100%;
        max-width: 280px;
        margin-inline: auto;
        border-collapse: collapse;
        table-layout: fixed;
    }

    th {
        height: 40px;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        color: var(--ui-ink-muted, var(--ui-ink));
        font-weight: 500;
    }

    /* show-week-numbers: an eighth 40px column of ISO week numbers, quieter than the days */
    :host([show-week-numbers]) .month-view,
    :host([show-week-numbers]) table {
        max-width: 320px;
        flex-basis: 320px;
    }

    .week-number {
        color: var(--ui-ink-helper);
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
    }

    /* td is 40px wide, 41px row pitch (40px + 1px bottom padding) */
    td {
        padding: 0 0 1px;
        margin: 0;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        position: relative;
        box-sizing: border-box;
    }

    /* --- Day Button (Cally / Airbnb / Apple Calendar Style) --- */
    .day {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        margin: 0;
        padding: 0;
        border: none;
        border-radius: var(--ui-calendar-day-radius, 9999px);
        background: transparent;
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        cursor: pointer;
        /* --ui-calendar-day-duration: a design can make the keys' moves instant (Kanok: 0s, as Cally) */
        transition: background-color var(--ui-calendar-day-duration, var(--ui-duration-fast, 150ms)) var(--ui-easing),
                    color var(--ui-calendar-day-duration, var(--ui-duration-fast, 150ms)) var(--ui-easing);
    }

    .day:hover:not([aria-pressed='true']):not(.in-range) {
        background-color: var(--ui-ghost-hover);
        border-radius: var(--ui-calendar-day-radius, 9999px);
    }

    .day.outside {
        color: var(--ui-ink-helper);
        opacity: 0.55;
    }

    /* Today indicator */
    .day.today {
        color: var(--ui-link);
        font-weight: 600;
    }

    .day.today::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: var(--ui-calendar-today-dot-radius, 50%);
        background-color: var(--ui-link);
    }

    .day.today[aria-pressed='true']::after {
        background-color: var(--ui-on-primary, #ffffff);
    }

    /* Selected single day / multi-selected days / range endpoints */
    .day[aria-pressed='true'] {
        background-color: var(--ui-primary);
        color: var(--ui-on-primary, #ffffff);
        font-weight: 600;
        border-radius: var(--ui-calendar-day-radius, 9999px);
    }

    .day[aria-pressed='true']:hover {
        background-color: var(--ui-primary);
    }

    /* --- Continuous Range Ribbon (Cally / Airbnb Style) --- */
    /* Range start day: round left cap, flat right edge connecting to next day */
    .day.range-start:not(.range-end) {
        background-color: var(--ui-primary) !important;
        color: var(--ui-on-primary, #ffffff) !important;
        border-radius: var(--ui-calendar-day-radius, 9999px) 0 0 var(--ui-calendar-day-radius, 9999px) !important;
    }

    /* Range end day: flat left edge, round right cap */
    .day.range-end:not(.range-start) {
        background-color: var(--ui-primary) !important;
        color: var(--ui-on-primary, #ffffff) !important;
        border-radius: 0 var(--ui-calendar-day-radius, 9999px) var(--ui-calendar-day-radius, 9999px) 0 !important;
    }

    /* Range start and end on the SAME day: fully round circle */
    .day.range-start.range-end {
        border-radius: var(--ui-calendar-day-radius, 9999px) !important;
    }

    /* In-between days: continuous ribbon with 0 radius */
    .day.in-range {
        background-color: var(--ui-highlight, #edf5fd) !important;
        color: var(--ui-ink) !important;
        border-radius: 0 !important;
    }

    .day.in-range:hover {
        background-color: var(--ui-ghost-hover) !important;
    }

    /* Row wrap caps for week boundaries */
    tr td:first-child .day.in-range,
    tr td:first-child .day.range-end {
        border-top-left-radius: var(--ui-calendar-day-radius, 9999px) !important;
        border-bottom-left-radius: var(--ui-calendar-day-radius, 9999px) !important;
    }

    tr td:last-child .day.in-range,
    tr td:last-child .day.range-start {
        border-top-right-radius: var(--ui-calendar-day-radius, 9999px) !important;
        border-bottom-right-radius: var(--ui-calendar-day-radius, 9999px) !important;
    }

    /* Range preview end before picked */
    .day.range-end:not([aria-pressed='true']) {
        z-index: 1;
        background-color: var(--_ui-calendar-surface, var(--ui-surface-1));
        color: var(--ui-ink);
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
    }

    /* Focus visible */
    .day:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-calendar-day-focus, var(--ui-primary));
        outline-offset: -2px;
        z-index: 2;
    }

    /* --ui-calendar-day-focus-background: the keyboard's day filled as under the pointer (Cally fills it; Carbon: none) */
    .day:focus-visible:not([aria-pressed='true'], .in-range) {
        background-color: var(--ui-calendar-day-focus-background, transparent);
    }

    .day[aria-pressed='true']:focus {
        outline: var(--ui-calendar-selected-focus-width, 1px) solid var(--ui-calendar-selected-focus, var(--ui-layer-2));
        outline-offset: var(--ui-calendar-selected-focus-offset, -3px);
        z-index: var(--ui-calendar-selected-focus-layer, auto);
    }

    /* the chosen day after a click: a design that rings the keyboard only shows none (--ui-pointer-focus; Carbon: the ring stays) */
    .day[aria-pressed='true']:focus:not(:focus-visible) {
        outline-color: var(--ui-pointer-focus, var(--ui-calendar-selected-focus, var(--ui-layer-2)));
    }

    /* Quiet focus */
    :host([data-quiet-focus]) .day:focus-visible {
        outline-color: var(--ui-pointer-focus, var(--ui-calendar-day-focus, var(--ui-primary)));
    }

    :host([data-quiet-focus]) .day[aria-pressed='true']:focus {
        outline-color: var(--ui-pointer-focus, var(--ui-calendar-selected-focus, var(--ui-layer-2)));
    }

    /* Disabled */
    .day[aria-disabled='true'] {
        color: var(--ui-ink-disabled);
        text-decoration: line-through;
        cursor: not-allowed;
        background: transparent !important;
        opacity: 0.4;
    }

    /* Footer / Today button */
    .cal-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: var(--ui-space-xxs, 4px);
        border-top: 1px solid var(--ui-hairline);
    }

    .today-button {
        height: 32px;
        padding: 0 var(--ui-space-md);
        border: none;
        border-radius: var(--ui-focus-radius, 6px);
        background: transparent;
        color: var(--ui-link);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        cursor: pointer;
        transition: background-color var(--ui-duration-fast, 150ms) var(--ui-easing);
    }

    .today-button:hover {
        background-color: var(--ui-ghost-hover);
    }

    .today-button:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: var(--ui-focus-offset, -2px);
    }

    .today-button:disabled {
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
        background: transparent;
    }

    @media (forced-colors: active) {
        .day[aria-pressed='true'] {
            forced-color-adjust: none;
            background-color: Highlight;
            color: HighlightText;
        }
        .day.in-range {
            forced-color-adjust: none;
            outline: 1px solid Highlight;
            background-color: Canvas;
            color: CanvasText;
        }
    }
`,we=l`
    :host {
        display: inline-flex;
        position: relative;
        align-items: center;
    }

    select {
        box-sizing: border-box;
        height: 28px;
        margin: 0;
        padding-block: 0;
        padding-inline: 6px 20px;
        border: none;
        border-radius: var(--ui-radius-sm, 6px);
        appearance: none;
        background: transparent;
        color: var(--ui-ink);
        font: var(--ui-font-body-emphasis);
        font-size: var(--ui-field-font-size, 0.9375rem);
        font-weight: 600;
        letter-spacing: var(--ui-tracking-body);
        cursor: pointer;
        touch-action: manipulation; /* a tap opens it at once, as the calendar's buttons (Cally) */
        transition: background-color var(--ui-duration-fast, 150ms) var(--ui-easing);
        field-sizing: content; /* as wide as the chosen option, not the longest (where supported) */
    }

    select:hover {
        background-color: var(--ui-canvas-hover, rgba(0, 0, 0, 0.05));
    }

    select:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -1px;
    }

    option {
        color: var(--ui-ink);
        background-color: var(--ui-overlay-background, var(--ui-surface-1));
    }

    .chevron {
        position: absolute;
        inset-inline-end: 4px;
        width: 12px;
        height: 12px;
        fill: var(--ui-ink-muted, currentColor);
        pointer-events: none;
    }

    @media (forced-colors: active) {
        select {
            border: 1px solid ButtonText;
        }

        .chevron {
            fill: ButtonText;
        }
    }
`,U=class extends d{static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[h,we]}updated(e){super.updated(e),this.view&&this.select&&(this.select.value=String(this.choices(this.view).selected))}onChange(e){if(!this.view)return;let t=this.dayFor(this.view,Number(e.target.value));this.dispatchEvent(new CustomEvent(`ui-focus-day`,{detail:{date:t},bubbles:!0}))}render(){let e=this.view,{options:t,selected:n}=e?this.choices(e):{options:[],selected:-1};return v`
            <label class="sr-only" part="label" for="select"><slot name="label">${e?.label??``}</slot></label>
            <select id="select" part="select" @change=${this.onChange}>
                ${t.map(e=>v`<option value=${e.value} ?disabled=${e.disabled} ?selected=${e.value===n}>${e.label}</option>`)}
            </select>
            <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
        `}};r([n({attribute:!1})],U.prototype,`view`,void 0),r([T(`select`)],U.prototype,`select`,void 0);var W=class extends U{constructor(...e){super(...e),this.formatMonth=`long`}choices(e){let t=new Intl.DateTimeFormat(e.locale,{month:this.formatMonth}),n=e.focus.getFullYear();return{options:O(e.focus,e).map(e=>({value:e.month,label:t.format(new Date(n,e.month,1)),disabled:e.disabled})),selected:e.focus.getMonth()}}dayFor(e,t){return R(e.focus,t-e.focus.getMonth())}};r([n({attribute:`format-month`})],W.prototype,`formatMonth`,void 0),W=r([w(`ui-calendar-select-month`)],W);var G=class extends U{constructor(...e){super(...e),this.maxYears=20}choices(e){return{options:M(e.focus,this.maxYears,e).map(t=>({value:t,label:String(E(t,e.era)),disabled:!1})),selected:e.focus.getFullYear()}}dayFor(e,t){return fe(e.focus,t)}};r([n({type:Number,attribute:`max-years`})],G.prototype,`maxYears`,void 0),G=r([w(`ui-calendar-select-year`)],G);var K=`ui-calendar-select-month, ui-calendar-select-year`,q=class extends d{constructor(...e){super(...e),this.value=``,this.endValue=``,this.range=!1,this.multi=!1,this.values=[],this.months=1,this.pageBy=`months`,this.showOutsideDays=!1,this.showWeekNumbers=!1,this.weekdayFormat=``,this.today=``,this.activeField=`start`,this.focusDate=new Date,this.min=``,this.max=``,this.locale=``,this.era=``,this.firstDay=0,this.showToday=!1,this.hoverDate=null,this.liveId=y(`ui-calendar`),this.localize=new p(this),this.focusFromGrid=!1,this.syncHeading=()=>{let e=(this.renderRoot.querySelector(`slot[name="heading"]`)?.assignedElements({flatten:!0})??[]).flatMap(e=>e.matches(K)?[e]:[...e.querySelectorAll(K)]);for(let t of e)t.view=this.headingView(t instanceof G?`year`:`month`)}}static{this.styles=[h,Ce]}get resolvedLocale(){return this.locale||this.localize.lang()}get resolvedEra(){return this.era?this.era:D(this.resolvedLocale)?`be`:`ce`}get multiValues(){return Array.isArray(this.values)?this.values:typeof this.values==`string`&&this.values.trim()?this.values.trim().split(/[\s,]+/):[]}focusDay(){this.focusedDay?.focus()}tabStops(){let e=!this.renderRoot.querySelector(`slot[name="heading"]`)?.assignedElements().length;return[...this.renderRoot.querySelectorAll(`button, ${K}`)].filter(t=>t instanceof HTMLButtonElement?!t.disabled&&t.tabIndex>=0:e)}get monthCount(){return F(this.months)}get pageStep(){return this.pageBy===`single`?1:this.monthCount}get todayDate(){return L(this.today)??new Date}willUpdate(e){(e.has(`focusDate`)||e.has(`months`)||e.has(`pageBy`))&&(this.pageStart=he(this.focusDate,this.pageStart,this.monthCount,this.pageStep))}updated(e){this.syncHeading(),e.has(`focusDate`)&&this.focusFromGrid&&(this.focusFromGrid=!1,this.focusDay());let t=e.get(`pageStart`);if(t&&this.pageStart&&z(t)!==z(this.pageStart)){let e=this.pageStart,t=new Date(e.getFullYear(),e.getMonth()+this.monthCount,0);this.dispatchEvent(new CustomEvent(`ui-page-change`,{detail:{start:e,end:t},bubbles:!0}))}}weekdayNames(){let e=this.dtf({weekday:this.weekdayFormat||(D(this.resolvedLocale)?`narrow`:`short`)}),t=this.weekdayFormat?void 0:this.ownWeekdays();return n=>t?.[n.getDay()]??e.format(n)}ownWeekdays(){let e=i(this.resolvedLocale),t=e=>e.toLowerCase().split(`-`)[0];return t(e.$code)===t(this.resolvedLocale)?e.datePicker.weekdays:void 0}get messages(){return i(this.resolvedLocale).datePicker}get limits(){return{min:this.min,max:this.max,isDateDisabled:this.isDateDisabled}}unavailable(e){return N(e,this.limits)}dtf(e){let t=this.resolvedEra===`be`?`buddhist`:`gregory`;return new Intl.DateTimeFormat(this.resolvedLocale,{calendar:t,...e})}pick(e){if(this.unavailable(e))return;let t=z(e);if(this.multi){let n=[...this.multiValues],r=n.indexOf(t);r>=0?n.splice(r,1):n.push(t),n.sort(),this.values=n,this.dispatchEvent(new CustomEvent(`ui-multi-pick`,{detail:{date:e,values:n},bubbles:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{values:n},bubbles:!0,composed:!0}));return}let n=!0;if(this.range){let e=V({start:this.value,end:this.endValue,active:this.activeField},t);this.value=e.start,this.endValue=e.end,this.activeField=e.active,n=e.done}else this.value=t;this.range&&this.dispatchEvent(new CustomEvent(n?`ui-range-end`:`ui-range-start`,{detail:{date:e},bubbles:!0})),this.dispatchEvent(new CustomEvent(`ui-pick`,{detail:{date:e},bubbles:!0})),n&&this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value,endValue:this.endValue},bubbles:!0,composed:!0}))}onDayHover(e){this.unavailable(e)||(this.hoverDate=e)}onDayClick(e){z(j(e,this.limits))===z(e)&&(this.moveFocus(e),this.pick(e))}moveFocus(e,t=!0){this.focusFromGrid=t,t&&(this.hoverDate=null),this.focusDate=j(e,this.limits),this.dispatchEvent(new CustomEvent(`ui-focus-change`,{detail:{date:this.focusDate},bubbles:!0}))}turnPage(e){let t=this.pageStart??new Date(this.focusDate.getFullYear(),this.focusDate.getMonth(),1),n=me(this.focusDate,t,this.monthCount,e);this.pageStart=n.start,n.focus!==this.focusDate&&this.moveFocus(n.focus,!1)}onGridKeydown(e){let t=P(this.focusDate,e.key,e.shiftKey,this.firstDay,this.matches(`:dir(rtl)`));t?(e.preventDefault(),this.moveFocus(t)):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.pick(this.focusDate))}rangeInfo(e){if(!this.range||!this.value)return{start:!1,end:!1,inside:!1};let t=pe(this.value,this.endValue,this.activeField,z(this.hoverDate??this.focusDate));return _e(z(e),t.start,t.end)}get yearBase(){if(this.monthCount===1||!this.pageStart)return this.focusDate;let{pageStart:e}=this,t=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();return new Date(e.getFullYear(),e.getMonth(),Math.min(this.focusDate.getDate(),t))}headingView(e=`month`){let t=this.messages;return{focus:this.yearBase,min:this.min,max:this.max,locale:this.resolvedLocale,era:this.resolvedEra,label:e===`month`?t.month??`Month`:t.year}}onHeadingFocusDay(e){e.stopPropagation(),this.moveFocus(e.detail.date,!1)}dayLook(e,t,n){let r=this.rangeInfo(e),i=[B(e,this.todayDate)&&`today`,e.getMonth()!==t&&`outside`,r.start&&`range-start`,r.end&&`range-end`,r.inside&&`in-range`].filter(e=>!!e),a=z(j(e,this.limits))!==z(e),o=!a&&this.unavailable(e),s=[`day`,`day-${e.getDay()}`,n&&`selected`,...i,a&&`disabled`,o&&`disallowed`,this.getDayParts?.(e)];return{classes:[`day`,...i].join(` `),parts:s.filter(Boolean).join(` `)}}renderDay(e,t,n,r){let i=z(e),o=this.multi&&this.multiValues.includes(i)||B(e,n)||this.range&&B(e,L(this.endValue)),s=B(e,this.todayDate),c=this.dayLook(e,t,o);return v`<td role="gridcell" part="cell" aria-selected=${o?`true`:`false`}>
            <button
                class=${c.classes}
                part=${c.parts}
                type="button"
                tabindex=${B(e,this.focusDate)?0:-1}
                aria-label=${r.format(e)}
                aria-pressed=${o?`true`:`false`}
                aria-current=${s?`date`:a}
                aria-disabled=${this.unavailable(e)?`true`:`false`}
                @pointerenter=${()=>this.onDayHover(e)}
                @click=${()=>this.onDayClick(e)}
            >
                ${e.getDate()}
            </button>
        </td>`}renderMonthHeader(e,t=e){let n=this.messages,r=I(e,this.limits).previous,i=I(t,this.limits).next;return v`
            <div class="cal-header" part="header">
                <button
                    class="nav"
                    part="nav prev-button"
                    type="button"
                    aria-label=${n.previousMonth}
                    ?disabled=${r}
                    @pointerdown=${e=>e.preventDefault()}
                    @mousedown=${e=>e.preventDefault()}
                    @click=${()=>this.turnPage(-this.pageStep)}
                >
                    <slot name="previous"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m5 8 5-5 .7.7L6.4 8l4.3 4.3-.7.7z" /></svg></slot>
                </button>
                <div class="month-year" part="heading">
                    <slot name="heading" @ui-focus-day=${this.onHeadingFocusDay} @slotchange=${this.syncHeading}>
                        ${t===e?v`<ui-calendar-select-month exportparts="select: month-select" .view=${this.headingView(`month`)}></ui-calendar-select-month>`:a}
                        <ui-calendar-select-year exportparts="select: year-select" .view=${this.headingView(`year`)}></ui-calendar-select-year>
                    </slot>
                </div>
                <button
                    class="nav"
                    part="nav next-button"
                    type="button"
                    aria-label=${n.nextMonth}
                    ?disabled=${i}
                    @pointerdown=${e=>e.preventDefault()}
                    @mousedown=${e=>e.preventDefault()}
                    @click=${()=>this.turnPage(this.pageStep)}
                >
                    <slot name="next"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3z" /></svg></slot>
                </button>
            </div>
        `}renderMonthGrid(e,t){let n=e.getMonth(),r=k(e,this.firstDay),i=!!t||!this.showOutsideDays,o=i?r.filter(e=>e.some(e=>e.getMonth()===n)):r,s=L(this.value),c=r[0],l=this.weekdayNames(),u=this.dtf({weekday:`long`}),d=this.dtf({dateStyle:`full`});return v`
            <div class="month-view" part="month-view">
                ${t?v`<div class="month-title" part="month-title">${t}</div>`:this.renderMonthHeader(e)}
                <table
                    part="grid table"
                    role="grid"
                    aria-labelledby=${t?a:`${this.liveId}-month`}
                    aria-label=${t?this.dtf({month:`long`,year:`numeric`}).format(e):a}
                    @keydown=${this.onGridKeydown}
                >
                    <thead part="thead">
                        <tr part="row">
                            ${this.showWeekNumbers?v`<th class="week-number" part="th weeknumber" scope="col" abbr=${this.messages.week??`Week`}>#</th>`:a}
                            ${c.map(e=>v`<th part="th day-${e.getDay()}" scope="col" abbr=${u.format(e)}>${l(e)}</th>`)}
                        </tr>
                    </thead>
                    <tbody part="tbody">
                        ${o.map(e=>v`<tr part="row">
                                ${this.showWeekNumbers?v`<th class="week-number" part="th weeknumber" scope="row">${ye(e[0])}</th>`:a}
                                ${e.map(e=>i&&e.getMonth()!==n?v`<td role="gridcell" part="cell"></td>`:this.renderDay(e,n,s,d))}
                            </tr>`)}
                    </tbody>
                </table>
            </div>
        `}renderFooter(){if(!this.showToday)return a;let e=this.todayDate;return v`<div class="cal-footer" part="footer">
            <button class="today-button" part="today-button" type="button" ?disabled=${this.unavailable(e)} @click=${()=>this.pick(e)}>
                ${this.messages.today}
            </button>
        </div>`}focus(e){let t=e?.target??`day`;t===`day`?this.focusedDay?.focus(e):this.renderRoot.querySelector(`[part~='${t===`next`?`next-button`:`prev-button`}']`)?.focus(e)}render(){let e=this.monthCount,t=this.pageStart??new Date(this.focusDate.getFullYear(),this.focusDate.getMonth(),1);if(e===1)return v`
                <div class="months-container" part="months">${this.renderMonthGrid(t)}</div>
                ${this.renderLiveRegion(t)} ${this.renderFooter()}
            `;let n=Array.from({length:e},(e,n)=>R(t,n)),r=e=>this.dtf(e.getFullYear()===t.getFullYear()?{month:`long`}:{month:`long`,year:`numeric`}).format(e);return v`
            ${this.renderMonthHeader(t,n[e-1])}
            <div class="months-container" part="months">${n.map(e=>this.renderMonthGrid(e,r(e)))}</div>
            ${this.renderLiveRegion(t)} ${this.renderFooter()}
        `}renderLiveRegion(e){return v`
            <div class="sr-only" id="${this.liveId}-month" aria-live="polite">
                ${this.dtf({month:`long`,year:`numeric`}).format(e)}
            </div>
        `}};r([n()],q.prototype,`value`,void 0),r([n({attribute:`end-value`})],q.prototype,`endValue`,void 0),r([n({type:Boolean})],q.prototype,`range`,void 0),r([n({type:Boolean})],q.prototype,`multi`,void 0),r([n({attribute:`values`})],q.prototype,`values`,void 0),r([n({type:Number})],q.prototype,`months`,void 0),r([n({attribute:`page-by`})],q.prototype,`pageBy`,void 0),r([n({type:Boolean,attribute:`show-outside-days`})],q.prototype,`showOutsideDays`,void 0),r([n({type:Boolean,attribute:`show-week-numbers`})],q.prototype,`showWeekNumbers`,void 0),r([n({attribute:`weekday-format`})],q.prototype,`weekdayFormat`,void 0),r([n()],q.prototype,`today`,void 0),r([n({attribute:!1})],q.prototype,`getDayParts`,void 0),r([n({attribute:`active-field`})],q.prototype,`activeField`,void 0),r([n({attribute:!1})],q.prototype,`focusDate`,void 0),r([n()],q.prototype,`min`,void 0),r([n()],q.prototype,`max`,void 0),r([n({attribute:!1})],q.prototype,`isDateDisabled`,void 0),r([n()],q.prototype,`locale`,void 0),r([n()],q.prototype,`era`,void 0),r([n({type:Number,attribute:`first-day`})],q.prototype,`firstDay`,void 0),r([n({type:Boolean,attribute:`show-today`})],q.prototype,`showToday`,void 0),r([f()],q.prototype,`hoverDate`,void 0),r([f()],q.prototype,`pageStart`,void 0),r([T(`.day[tabindex="0"]`)],q.prototype,`focusedDay`,void 0),q=r([w(`ui-calendar`)],q);var Te=l`
    :host {
        display: block;
    }

    .field {
        position: relative;
    }

    /* Carbon: a disabled date picker greys its label and helper (fieldTextStyles' :host(:disabled) needs a form-associated host) */
    :host([disabled]) .label,
    :host([disabled]) .helper {
        color: var(--ui-ink-disabled);
    }

    input {
        box-sizing: border-box;
        width: 100%;
        min-height: var(--_toggle);
        margin: 0;
        padding: 0 48px 0 var(--ui-space-md); /* Carbon: icon at 1rem from the end + spacing-09 inset, same on every size */
        /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
        border: var(--ui-field-border, none);
        border-bottom: 1px solid var(--ui-field-underline-color, var(--ui-ink-subtle));
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        font-size: var(--ui-field-font-size, 14px);
        letter-spacing: var(--ui-tracking-body);
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
        /* Carbon date-picker__input: all at fast-01 — its colours and outline (not the padding the × adds; Carbon has no ×) */
        transition:
            background-color var(--ui-duration-fast) var(--ui-easing),
            border-color var(--ui-duration-fast) var(--ui-easing),
            border-bottom-color var(--ui-duration-fast) var(--ui-easing),
            color var(--ui-duration-fast) var(--ui-easing),
            outline-color var(--ui-duration-fast) var(--ui-easing),
            box-shadow var(--ui-duration-fast) var(--ui-easing);
    }

    input:hover:not(:disabled):not(:focus) {
        border-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
        border-bottom-color: var(--ui-field-hover-border-color, var(--ui-border-strong-1));
    }

    input::placeholder {
        color: var(--ui-ink-placeholder);
        opacity: 1;
    }

    input:focus {
        border-color: var(--ui-field-focus-border-color, inherit);
        border-bottom-color: var(--ui-field-focus-border-color, var(--ui-ink-subtle));
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    .invalid input {
        outline-color: var(--ui-error);
        box-shadow: var(--ui-field-invalid-halo, none); /* a design's error halo (Kanok: Pixiv's red ring) */
    }

    .invalid input:focus {
        border-color: var(--ui-field-focus-border-color, inherit);
        border-bottom-color: var(--ui-field-focus-border-color, var(--ui-ink-subtle));
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-invalid-halo, var(--ui-field-focus-halo, none)); /* an error keeps its halo while focused (Kanok: Pixiv's red) */
    }

    input:disabled {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
    }

    input:read-only:not(:disabled) {
        background-color: var(--ui-field-readonly-background, transparent);
        border-color: var(--ui-field-readonly-border-color, currentColor currentColor var(--ui-hairline));
    }

    .has-status input {
        padding-inline-end: 72px;
    }

    /* × as in Carbon ComboBox (Carbon's DatePicker has none): end padding 70, 105 with a status icon */
    .has-clear input {
        padding-inline-end: 70px;
    }

    .has-status.has-clear input {
        padding-inline-end: 105px;
    }

    .status {
        position: absolute;
        inset-block: 0;
        inset-inline-end: 48px;
        display: flex;
        align-items: center;
        pointer-events: none;
    }

    .has-clear .status {
        inset-inline-end: 82px;
    }

    /* Carbon ComboBox geometry: a 24px × 45–69px from the end, a 1px border-subtle divider 41px from the end before the
       calendar icon (16–32px), and one 74px from the end after a status icon */
    .clear {
        position: absolute;
        inset-block: 0;
        inset-inline-end: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-block: auto;
        padding: 0;
        border: none;
        background: transparent;
        color: var(--ui-ink);
        cursor: pointer;
        border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
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

    .clear:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
    }

    .clear svg {
        display: block;
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    /* Anchor for the OS picker: covers the field, invisible and inert */
    .native {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        opacity: 0;
        pointer-events: none;
    }

    /*
     * Carbon cds--date-picker__icon: a decorative 16px icon 16px from the end (48px box on every size), not a
     * button — pointer-events none, so a click on it lands on the text box and opens the calendar.
     */
    .toggle {
        position: absolute;
        top: 0;
        bottom: 0;
        inset-inline-end: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        color: var(--ui-icon-primary, var(--ui-ink));
        pointer-events: none;
    }

    input:disabled ~ .toggle {
        color: var(--ui-icon-disabled, var(--ui-ink-disabled));
    }

    .toggle svg {
        display: block;
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    @media (forced-colors: active) {
        input {
            border: 1px solid FieldText;
        }
    }
`,Ee=l`
    :host([data-fluid]) input {
        block-size: 64px;
        min-height: 64px;
        padding-block: 32px 13px;
    }

    :host([data-fluid]) .toggle {
        inset-block: 23px auto;
        block-size: 40px;
    }

    :host([data-fluid]) .clear {
        inset-block: 31px auto;
    }

    :host([data-fluid]) .status {
        --ui-fluid-icon-end: var(--ui-space-md);
        inset-inline-end: 0;
    }
`,J=class extends d{constructor(...e){super(...e),this.inputId=``,this.label=``,this.outsideName=``,this.hideLabel=!1,this.labelSlotted=!1,this.text=``,this.value=``,this.pattern=``,this.hint=``,this.message=null,this.showError=!1,this.showClear=!1,this.expanded=!1,this.controls=null,this.disabled=!1,this.readonly=!1,this.required=!1,this.min=``,this.max=``,this.clearLabel=``}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[te,h,Te,ne,Ee]}showNativePicker(){try{return this.native.showPicker(),!0}catch{return!1}}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0}))}onNativeChange(){this.native.value&&this.emit(`ui-native-change`,{iso:this.native.value})}onTextFocusOut(e){this.emit(`ui-blur`,{next:e.relatedTarget})}renderClear(){return this.showClear?v`<button class="clear" part="clear-button" type="button" tabindex="-1" aria-label=${this.clearLabel} @click=${()=>this.emit(`ui-clear`)}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
        </button>`:a}renderLabel(){let e=!this.label&&!this.labelSlotted;return e&&!this.outsideName?a:v`<label class=${this.hideLabel||e?`sr-only`:`label`} part="label" for=${this.inputId}>${ae(this.label,this.outsideName)}</label>`}updated(){this.input&&`ariaControlsElements`in this.input&&(this.input.ariaControlsElements=this.controls?[this.controls]:null)}render(){let e=this.message;s(this,e);let t=[this.showError?`invalid`:``,e&&e.kind!==`helper`?`has-status`:``,this.showClear?`has-clear`:``].filter(Boolean).join(` `);return v`
            ${this.renderLabel()}
            <div class="field ${t}" part="base">
                <input
                    part="input"
                    id=${this.inputId}
                    type="text"
                    inputmode="numeric"
                    autocomplete="off"
                    placeholder=${this.pattern}
                    .value=${this.text}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    role="combobox"
                    aria-haspopup="dialog"
                    aria-expanded=${this.expanded?`true`:`false`}
                    aria-invalid=${this.showError?`true`:`false`}
                    aria-describedby=${[re(this.inputId,e),this.hint?`${this.inputId}-hint`:void 0].filter(Boolean).join(` `)||a}
                    @focusin=${e=>this.emit(`ui-focus`,{from:e.relatedTarget})}
                    @focusout=${this.onTextFocusOut}
                />
                <input
                    class="native"
                    type="date"
                    tabindex="-1"
                    aria-hidden="true"
                    .value=${this.value}
                    min=${this.min||a}
                    max=${this.max||a}
                    @change=${this.onNativeChange}
                />
                ${this.hint?v`<span class="sr-only" id="${this.inputId}-hint">${this.hint}</span>`:a}
                <span class="status">${b(e)}</span>
                ${this.renderClear()}
                <span class="toggle" part="toggle" aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                        <path
                            d="M13 2h-2V1h-1v1H6V1H5v1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 11H3V6h10v7Zm0-8H3V3h2v1h1V3h4v1h1V3h2v2Z"
                        />
                    </svg>
                </span>
            </div>
            ${ue(this.inputId,e)}
        `}};r([n({attribute:`input-id`})],J.prototype,`inputId`,void 0),r([n()],J.prototype,`label`,void 0),r([n({attribute:!1})],J.prototype,`outsideName`,void 0),r([n({type:Boolean,attribute:`hide-label`})],J.prototype,`hideLabel`,void 0),r([n({type:Boolean,attribute:`label-slotted`})],J.prototype,`labelSlotted`,void 0),r([n()],J.prototype,`text`,void 0),r([n()],J.prototype,`value`,void 0),r([n()],J.prototype,`pattern`,void 0),r([n()],J.prototype,`hint`,void 0),r([n({attribute:!1})],J.prototype,`message`,void 0),r([n({type:Boolean,attribute:`show-error`})],J.prototype,`showError`,void 0),r([n({type:Boolean,attribute:`show-clear`})],J.prototype,`showClear`,void 0),r([n({type:Boolean})],J.prototype,`expanded`,void 0),r([n({attribute:!1})],J.prototype,`controls`,void 0),r([n({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),r([n({type:Boolean})],J.prototype,`required`,void 0),r([n()],J.prototype,`min`,void 0),r([n()],J.prototype,`max`,void 0),r([n({attribute:`clear-label`})],J.prototype,`clearLabel`,void 0),r([T(`input[type="text"]`)],J.prototype,`input`,void 0),r([T(`.native`)],J.prototype,`native`,void 0),J=r([w(`ui-date-field`)],J);function Y(e,t){if(!t)return!1;for(let n=e;n;n=n.parentNode??n.host??null)if(n===t)return!0;return!1}var X=e=>typeof e==`string`?e:``,Z=class extends d{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.value=``,this.name=``,this.range=!1,this.endValue=``,this.endName=``,this.endLabel=``,this.min=``,this.max=``,this.format=`dd/mm/yyyy`,this.locale=``,this.era=``,this.firstDay=0,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.picker=`auto`,this.clearable=!1,this.showToday=!1,this.months=1,this.pageBy=`months`,this.showOutsideDays=!1,this.showWeekNumbers=!1,this.weekdayFormat=``,this.today=``,this.size=`md`,this.text=``,this.endText=``,this.formControl=new S(this,{reveal:()=>this.touched=!0,focus:()=>this.focusInput(this.lastField),implicitSubmission:!0}),this.open=!1,this.focusDate=new Date,this.touched=!1,this.activeField=`start`,this.lastField=`start`,this.returningFocus=!1,this.customValidityMessage=``,this.localize=new p(this),this.fieldId=y(`ui-date-picker`),this.defaultValue=``,this.defaultEnd=``,this.lastSyncedValue=null,this.lastSyncedEnd=null,this.uncommitted={},this.focusInGrid=!1,this.onEnterKey=e=>le(this,e)}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.endValue=this.defaultEnd,this.lastSyncedValue=null,this.lastSyncedEnd=null,this.uncommitted={},this.requestUpdate(`value`),this.touched=!1}formStateRestoreCallback(e){if(typeof e==`string`&&(this.value=e),e instanceof FormData&&this.endName)this.value=X(e.get(this.name)),this.endValue=X(e.get(this.endName));else if(e instanceof FormData){let[t=``,n=``]=X(e.get(this.name)).split(`/`);this.value=t,this.endValue=n}}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get resolvedLocale(){return this.locale||this.localize.lang()}get resolvedEra(){return this.era?this.era:D(this.resolvedLocale)?`be`:`ce`}get messages(){return i(this.resolvedLocale).datePicker}get pattern(){return this.messages.pattern(this.format)}fmt(e){return ge(e,this.format,this.resolvedEra)}parse(e){return be(e,this.format,this.resolvedEra)}get minDate(){return L(this.min)}get maxDate(){return L(this.max)}get limits(){return{min:this.min,max:this.max,isDateDisabled:this.isDateDisabled}}unavailable(e){return N(e,this.limits)}get fields(){return this.range?[`start`,`end`]:[`start`]}fieldText(e){return e===`start`?this.text:this.endText}setFieldText(e,t){e===`start`?this.text=t:this.endText=t}fieldValue(e){return e===`start`?this.value:this.endValue}fieldEl(e){return e===`end`?this.endField:this.startField}get input(){return this.startField?.input}inputFor(e){return(this.fieldEl(e)??this.startField)?.input}fieldOf(e){return e.currentTarget.dataset.field===`end`?`end`:`start`}fromTextBox(e,t){return e.composedPath()[0]===this.inputFor(t)}fieldIdFor(e){return e===`start`?this.fieldId:`${this.fieldId}-end`}willUpdate(e){g(this,this.fluid),e.has(`value`)&&this.value&&!L(this.value)&&(this.value=``),e.has(`endValue`)&&this.endValue&&!L(this.endValue)&&(this.endValue=``),e.has(`value`)&&this.value!==this.lastSyncedValue&&(this.lastSyncedValue=this.value,delete this.uncommitted.start,this.syncText(`start`)),e.has(`endValue`)&&this.endValue!==this.lastSyncedEnd&&(this.lastSyncedEnd=this.endValue,delete this.uncommitted.end,this.syncText(`end`)),this.syncValidity()}syncText(e){let t=L(this.fieldValue(e));this.setFieldText(e,t?this.fmt(t):``),t&&this.open&&this.activeField===e&&(this.focusInGrid=!1,this.focusDate=this.clampToRange(t))}describe(e){let t=this.messages;switch(e.kind){case`parse`:return{flags:{badInput:!0},message:{era:()=>t.badEra(String(E(new Date().getFullYear(),this.resolvedEra))),incomplete:()=>t.incomplete,impossible:()=>t.impossible,unparseable:()=>t.badFormat(this.pattern)}[e.error]()};case`required`:return{flags:{valueMissing:!0},message:t.required};case`min`:return{flags:{rangeUnderflow:!0},message:t.beforeMin(this.fmt(this.minDate))};case`max`:return{flags:{rangeOverflow:!0},message:t.afterMax(this.fmt(this.maxDate))};case`disabled`:return{flags:{customError:!0},message:e.reason??t.dateDisabled};default:return{flags:{customError:!0},message:t.endBeforeStart}}}fieldError(e){let t={text:this.fieldText(e),value:this.fieldValue(e),required:this.required,start:e===`end`?this.value:``,format:this.format,era:this.resolvedEra},n=ve(t,this.limits);return n?this.describe(n):null}formValue(){if(this.isDisabled)return null;if(!this.range)return this.value;let e=new FormData;return this.endName?(this.name&&e.append(this.name,this.value),e.append(this.endName,this.endValue),e):(this.name&&e.append(this.name,this.endValue?`${this.value}/${this.endValue}`:this.value),e)}syncValidity(){if(de(this.internals,this.isDisabled))return;this.internals.setFormValue(this.formValue());let e=t(this.invalid,this.invalidText,this.customValidityMessage);if(e)this.internals.setValidity({customError:!0},e,this.input??void 0);else{for(let e of this.fields){let t=this.fieldError(e);if(t){this.internals.setValidity(t.flags,t.message,this.inputFor(e)??void 0);return}}this.internals.setValidity({})}}focusInput(e){this.returningFocus=!0;try{this.inputFor(e)?.focus()}finally{this.returningFocus=!1}}typedFullDate(e){let t=this.fieldText(e),n=this.parse(t);return`date`in n&&this.fmt(n.date)===t?n.date:null}commitIfEdited(e){let t=L(this.fieldValue(e)),n=t?this.fmt(t):``;(this.fieldText(e)!==n||e in this.uncommitted)&&this.commitText(e)}commitText(e){this.touched=!0;let t=this.parse(this.fieldText(e));`date`in t?(this.setFieldText(e,this.fmt(t.date)),this.setValue(e,z(t.date))):this.setValue(e,``),this.syncValidity()}setValue(e,t,n=!1){let r=this.uncommitted[e]??this.fieldValue(e);t!==this.fieldValue(e)&&(e===`start`?(this.value=t,this.lastSyncedValue=t):(this.endValue=t,this.lastSyncedEnd=t)),n?this.uncommitted[e]=r:(delete this.uncommitted[e],t!==r&&this.dispatchEvent(new Event(`change`,{bubbles:!0})))}clampToRange(e){return j(e,this.limits)}};r([n()],Z.prototype,`label`,void 0),r([n({type:Boolean,attribute:`hide-label`})],Z.prototype,`hideLabel`,void 0),r([n({attribute:`helper-text`})],Z.prototype,`helperText`,void 0),r([n({attribute:`invalid-text`})],Z.prototype,`invalidText`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`warn`,void 0),r([n({attribute:`warn-text`})],Z.prototype,`warnText`,void 0),r([n()],Z.prototype,`value`,void 0),r([n({reflect:!0})],Z.prototype,`name`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`range`,void 0),r([n({attribute:`end-value`})],Z.prototype,`endValue`,void 0),r([n({attribute:`end-name`})],Z.prototype,`endName`,void 0),r([n({attribute:`end-label`})],Z.prototype,`endLabel`,void 0),r([n()],Z.prototype,`min`,void 0),r([n()],Z.prototype,`max`,void 0),r([n()],Z.prototype,`format`,void 0),r([n()],Z.prototype,`locale`,void 0),r([n()],Z.prototype,`era`,void 0),r([n({type:Number,attribute:`first-day`})],Z.prototype,`firstDay`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`disabled`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`required`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`readonly`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`fluid`,void 0),r([n()],Z.prototype,`picker`,void 0),r([n({type:Boolean,reflect:!0})],Z.prototype,`clearable`,void 0),r([n({type:Boolean,attribute:`show-today`})],Z.prototype,`showToday`,void 0),r([n({type:Number})],Z.prototype,`months`,void 0),r([n({attribute:`page-by`})],Z.prototype,`pageBy`,void 0),r([n({type:Boolean,attribute:`show-outside-days`})],Z.prototype,`showOutsideDays`,void 0),r([n({attribute:!1})],Z.prototype,`getDayParts`,void 0),r([n({type:Boolean,attribute:`show-week-numbers`})],Z.prototype,`showWeekNumbers`,void 0),r([n({attribute:`weekday-format`})],Z.prototype,`weekdayFormat`,void 0),r([n()],Z.prototype,`today`,void 0),r([n({reflect:!0})],Z.prototype,`size`,void 0),r([n({attribute:!1})],Z.prototype,`isDateDisabled`,void 0),r([f()],Z.prototype,`text`,void 0),r([f()],Z.prototype,`endText`,void 0),r([f()],Z.prototype,`open`,void 0),r([f()],Z.prototype,`focusDate`,void 0),r([f()],Z.prototype,`touched`,void 0),r([f()],Z.prototype,`activeField`,void 0),r([T(`ui-date-field[data-field="start"]`)],Z.prototype,`startField`,void 0),r([T(`ui-date-field[data-field="end"]`)],Z.prototype,`endField`,void 0),r([T(`.fields`)],Z.prototype,`fieldsEl`,void 0);var Q=class extends Z{constructor(...e){super(...e),this.sheet=!1,this.tapOpened=!1,this.reposition=()=>this.position(),this.sheetLayer={escape:()=>this.close(),modal:!0},this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this.calendar)&&!t.includes(this.fieldsEl)&&this.close()},this.pressInCalendar=!1,this.onCalendarPress=()=>{this.pressInCalendar=!0,clearTimeout(this.pressTimer),this.pressTimer=setTimeout(()=>this.pressInCalendar=!1,700)}}connectedCallback(){super.connectedCallback(),g(this,this.fluid),this.requestUpdate(),this.addEventListener(`keydown`,this.onEnterKey),this.formControl.captureDefaults(()=>{this.defaultValue=this.value,this.defaultEnd=this.endValue})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey),this.stopTracking(),this.stopSheet()}get useNativePicker(){return this.picker===`native`&&`showPicker`in HTMLInputElement.prototype}openCalendar(e,t=`start`){this.activeField=t,this.sheet=H(this.picker),this.focusInGrid=e||this.sheet;let n=this.typedFullDate(t)??L(this.fieldValue(t))??L(this.value)??new Date;this.focusDate=this.clampToRange(n),this.open=!0}onOpenChanged(){this.open&&this.sheet?(this.openSheet(),this.focusInGrid&&this.grid?.updateComplete.then(()=>this.open&&this.focusGridDay()),this.stopTracking(),this.stopOutside=u(document,this.onDocumentPointerDown)):this.open?(this.calendar.showPopover(),this.position(),this.focusInGrid&&this.grid?.updateComplete.then(()=>this.open&&this.focusGridDay()),this.stopTracking(),this.untrack=c(this.startField.input,this.calendar,this.reposition),this.stopOutside=u(document,this.onDocumentPointerDown)):(this.calendar.matches(`:popover-open`)&&this.calendar.hidePopover(),this.stopTracking(),this.stopSheet(),this.tapOpened=!1)}openSheet(){let e=this.sheetDialog;e&&(e.open||e.showModal(),ce(this.sheetLayer,globalThis),_(this,document.documentElement),this.stopSwipe?.(),this.stopSwipe=this.sheetGrip?xe(this.sheetGrip,e,()=>this.close()):void 0)}stopSheet(){this.sheetDialog?.open&&this.sheetDialog.close(),this.stopSwipe?.(),this.stopSwipe=void 0,x(this.sheetLayer),oe(this,document.documentElement)}onSheetCancel(e){e.preventDefault(),this.close()}stopTracking(){this.untrack?.(),this.stopOutside?.(),this.untrack=this.stopOutside=void 0}close(){let e=this.shadowRoot?.activeElement,t=!!e&&Y(e,this.calendar);this.sheet&&this.stopSheet(),t&&this.focusInput(this.lastField),this.open=!1;for(let e of this.fields)this.commitIfEdited(e)}focusGridDay(){ie(this.grid),this.grid?.focusDay()}onCalendarFocusOut(e){if(!this.open||this.sheet&&!this.sheetDialog?.open)return;let t=e.relatedTarget;t?Y(t,this.calendar)||Y(t,this.fieldsEl)||this.close():this.pressInCalendar&&requestAnimationFrame(()=>{let e=this.shadowRoot?.activeElement;this.open&&!(e&&Y(e,this.calendar))&&this.focusGridDay()})}position(){se(this.startField.input,this.calendar,`bottom-start`,0)}onCalendarKeydown(e){this.open&&(e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),this.close()):e.key!==`Tab`||this.sheet||(e.preventDefault(),this.cycleCalendarFocus(e.shiftKey)))}cycleCalendarFocus(e){let t=this.grid?.tabStops()??[];if(!t.length)return;let n=t.indexOf(this.grid?.shadowRoot?.activeElement);n<0&&(n=e?0:-1),t[(n+(e?-1:1)+t.length)%t.length].focus()}};r([T(`.calendar`)],Q.prototype,`calendar`,void 0),r([T(`.sheet`)],Q.prototype,`sheetDialog`,void 0),r([T(`.sheet-grip`)],Q.prototype,`sheetGrip`,void 0),r([f()],Q.prototype,`sheet`,void 0),r([T(`ui-calendar`)],Q.prototype,`grid`,void 0);var De=[`base`,`label`,`input`,`clear-button`,`toggle`,`status-icon`,`helper-text`,`warning-text`,`warn-text`,`error-text`,`invalid-text`],Oe=`header, nav, heading, month-select, year-select, month-title, grid, day, selected, today, outside, disabled, disallowed, range-start, range-end, in-range, weeknumber, today-button`,$=class extends Q{constructor(...e){super(...e),this.dayPartNames=[],this.tap=null,this.slots=new C(this),this.forwardRangeEvent=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(e.type,{detail:{date:e.detail.date},bubbles:!0,composed:!0}))},this.dayParts=e=>{let t=this.getDayParts?.(e)??``,n=t.split(/\s+/).filter((e,t,n)=>e&&!this.dayPartNames.includes(e)&&n.indexOf(e)===t);return n.length&&(this.dayPartNames=[...this.dayPartNames,...n]),t}}static{this.hostStates=[`open`,`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Se]}updated(e){e.has(`open`)&&this.onOpenChanged(),this.syncHostState()}syncHostState(){let e=new Set(this.fields.map(e=>this.fieldStatus(e).message?.kind));this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e.has(`error`)),this.toggleAttribute(`data-show-warn`,e.has(`warn`))}onInput(e){let t=this.fieldOf(e),n=this.inputFor(t);if(!n||!this.fromTextBox(e,t))return;let{value:r,selectionStart:i}=n,a=A(r);a!==r&&(n.value=a,i!==null&&n.setSelectionRange(i,i)),this.setFieldText(t,a);let o=this.typedFullDate(t);o&&!this.unavailable(o)&&(this.setValue(t,z(o),!0),this.open&&(this.focusDate=this.clampToRange(o)))}onFieldKeydown(e){if(e.key===`Escape`&&this.open){e.preventDefault(),e.stopPropagation(),this.close();return}let t=this.fieldOf(e);if(this.fromTextBox(e,t)){if(e.key===`ArrowDown`){if(e.preventDefault(),!this.interactive)return;this.open?(this.activeField=t,this.focusGridDay()):this.openCalendar(!0,t)}else e.key===`Tab`&&!e.shiftKey&&this.open&&t===this.fields.at(-1)&&this.calendar.matches(`:popover-open`)?this.calendar.hidePopover():e.key===`Tab`&&e.shiftKey&&this.open&&t===`start`?this.close():e.key===`Enter`&&(this.commitText(t),this.close())}}onInputPointerDown(e){if(this.tapOpened=!1,!this.interactive||this.useNativePicker)return;let t=this.fieldOf(e);if(!this.fromTextBox(e,t))return;if(e.pointerType===`mouse`){this.open?this.activeField=t:this.openCalendar(!1,t),this.open&&this.sheet&&e.preventDefault();return}let n=H(this.picker)&&!!this.fieldEl(t)?.matches(`:focus-within`);this.tap=this.open||n?null:{id:e.pointerId,field:t}}onInputPointerUp(e){let t=this.tap;this.tap=null,t&&t.id===e.pointerId&&!this.open&&this.interactive&&(this.tapOpened=!0,this.openCalendar(!0,t.field))}onInputPointerCancel(){this.tap=null}onInputTouchEnd(e){this.tapOpened&&(this.tapOpened=!1,e.preventDefault())}onInputClick(e){let t=this.fieldOf(e);this.interactive&&this.useNativePicker&&this.fromTextBox(e,t)&&!this.openNativePicker(t)&&!this.open&&this.openCalendar(!1,t)}onInputFocusIn(e){let t=this.fieldOf(e);this.activeField=t,this.lastField=t,this.tapOpened?(this.tapOpened=!1,this.grid?.updateComplete.then(()=>this.open&&this.focusGridDay())):this.open||this.returningFocus||!this.interactive||this.useNativePicker||Y(e.detail?.from??null,this.calendar)||H(this.picker)||this.openCalendar(!1,t)}onInputFocusOut(e){let t=this.fieldOf(e),n=e.detail.next;Y(n,this.calendar)||(this.commitIfEdited(t),Y(n,this.fieldsEl)||(this.open=!1))}openNativePicker(e){return this.fieldEl(e)?.showNativePicker()??!1}onNativeChange(e){let t=L(e.detail.iso);if(!t)return;let n=this.fieldOf(e);this.touched=!0,this.setFieldText(n,this.fmt(t)),this.setValue(n,z(t))}clear(e){let t=this.fieldOf(e);this.setFieldText(t,``),this.setValue(t,``),this.focusInput(t)}select(e){this.unavailable(e)||(this.touched=!0,this.range?this.selectInRange(e):(this.text=this.fmt(e),this.setValue(`start`,z(e)),this.close()))}selectInRange(e){let t=z(e),n=V({start:this.value,end:this.endValue,active:this.activeField},t);for(let e of this.fields){let r=e===`start`?n.start:n.end;if(r===this.fieldValue(e)&&r!==t&&!(e in this.uncommitted))continue;let i=L(r);this.setFieldText(e,i?this.fmt(i):``),this.setValue(e,r,!n.done)}n.done?this.close():this.activeField=n.active}fieldStatus(t){let n=this.fieldError(t),r=this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||n!==null));return{showError:r,message:e({showError:r,errorText:ee(this.invalid,this.customValidityMessage,this.invalidText||n?.message||``),showWarn:this.warn&&this.interactive&&t===`start`,warnText:this.warnText,helperText:(t===`start`?this.helperText:``)||this.messages.hint(this.pattern),slots:t===`start`?this.slots:void 0})}}renderField(e){let t=this.messages,n=this.fieldIdFor(e),{showError:r,message:i}=this.fieldStatus(e),a=this.fieldText(e),s=e===`start`&&(this.helperText!==``||this.slots.has(`helper-text`));return v`<ui-date-field
            class=${e}
            data-field=${e}
            ?data-fluid=${o(this,`fluid`)}
            exportparts=${De.map(t=>`${t}, ${t}:${e}-${t}`).join(`, `)}
            input-id=${n}
            .label=${e===`start`?this.label:this.endLabel}
            .outsideName=${e===`start`?this.formControl.fallbackName(this.label,this.internals):``}
            ?label-slotted=${this.slots.has(e===`start`?`label`:`end-label`)}
            ?hide-label=${this.hideLabel}
            .text=${a}
            .value=${this.fieldValue(e)}
            .pattern=${this.pattern}
            .hint=${s?t.hint(this.pattern):``}
            .message=${i}
            ?show-error=${r}
            ?show-clear=${this.clearable&&this.interactive&&a!==``}
            ?expanded=${this.open&&this.activeField===e}
            .controls=${this.calendar??null}
            ?disabled=${this.isDisabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            .min=${this.min}
            .max=${this.max}
            clear-label=${t.clear}
            @input=${this.onInput}
            @keydown=${this.onFieldKeydown}
            @pointerdown=${this.onInputPointerDown}
            @pointerup=${this.onInputPointerUp}
            @pointercancel=${this.onInputPointerCancel}
            @touchend=${this.onInputTouchEnd}
            @click=${this.onInputClick}
            @ui-focus=${this.onInputFocusIn}
            @ui-blur=${this.onInputFocusOut}
            @ui-clear=${this.clear}
            @ui-native-change=${this.onNativeChange}
        >${this.renderForwardedSlots(e)}</ui-date-field>`}renderForwardedSlots(e){let t=(e,t)=>this.slots.has(e)?v`<slot name=${e} slot=${t}></slot>`:a;return e===`end`?t(`end-label`,`label`):v`${t(`label`,`label`)}${t(`helper-text`,`helper-text`)}${t(`warn-text`,`warn-text`)}${t(`invalid-text`,`invalid-text`)}`}renderGrid(){return v`<ui-calendar
            exportparts=${[Oe,...this.dayPartNames].join(`, `)}
            .value=${this.value}
            .endValue=${this.range?this.endValue:``}
            ?range=${this.range}
            .activeField=${this.activeField}
            .focusDate=${this.focusDate}
            .min=${this.min}
            .max=${this.max}
            .isDateDisabled=${this.isDateDisabled}
            .locale=${this.resolvedLocale}
            .era=${this.resolvedEra}
            .firstDay=${this.firstDay}
            .months=${this.months}
            .pageBy=${this.pageBy}
            ?show-outside-days=${this.showOutsideDays}
            .getDayParts=${this.getDayParts?this.dayParts:void 0}
            ?show-week-numbers=${this.showWeekNumbers}
            .weekdayFormat=${this.weekdayFormat}
            .today=${this.today}
            ?show-today=${this.showToday}
            @ui-pick=${e=>this.select(e.detail.date)}
            @change=${e=>e.stopPropagation()}
            @ui-range-start=${this.forwardRangeEvent}
            @ui-range-end=${this.forwardRangeEvent}
            @ui-focus-change=${e=>this.focusDate=e.detail.date}
        ></ui-calendar>`}renderSheetGrip(){return v`<div class="sheet-grip" part="sheet-grip">
            <span class="sheet-handle" aria-hidden="true"></span>
            <button class="sheet-close" part="sheet-close" type="button" aria-label=${i(this.resolvedLocale).common.close} @click=${()=>this.close()}>
                <svg viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                </svg>
            </button>
        </div>`}render(){let e=this.messages,t=this.months>1||this.showWeekNumbers?`calendar multi-month`:`calendar`,n=this.sheet?v`<dialog class="sheet" part="sheet" aria-label=${e.chooseDate} @cancel=${this.onSheetCancel}>
                  <div
                      class="calendar"
                      part="calendar"
                      @keydown=${this.onCalendarKeydown}
                      @focusout=${this.onCalendarFocusOut}
                      @touchstart=${this.onCalendarPress}
                      @pointerdown=${this.onCalendarPress}
                      @mousedown=${this.onCalendarPress}
                  >
                      ${this.renderSheetGrip()} ${this.open?this.renderGrid():a}
                  </div>
              </dialog>`:v`<div
                  class=${t}
                  part="calendar"
                  popover="manual"
                  role="dialog"
                  aria-label=${e.chooseDate}
                  @keydown=${this.onCalendarKeydown}
                  @focusout=${this.onCalendarFocusOut}
                  @touchstart=${this.onCalendarPress}
                  @pointerdown=${this.onCalendarPress}
                  @mousedown=${this.onCalendarPress}
              >
                  ${this.open?this.renderGrid():a}
              </div>`;return v`
            <div class="fields ${this.range?`range-fields`:``}">${this.fields.map(e=>this.renderField(e))}</div>
            ${n}
        `}};r([f()],$.prototype,`dayPartNames`,void 0),$=r([w(`ui-date-picker`)],$);