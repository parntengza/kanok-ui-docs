import{$ as e,A as t,Ct as n,D as r,E as i,H as a,I as o,J as s,M as c,Ot as l,Q as u,R as d,St as f,T as p,Tt as m,U as ee,W as te,Z as ne,_ as h,bt as g,ct as _,d as re,et as ie,h as v,it as y,jt as b,l as ae,lt as oe,m as se,ot as x,p as S,q as C,st as w,tt as ce,w as T,wt as E,xt as D,z as le}from"./theme-switcher-BGAHXRgF.js";import{C as ue,S as de,_ as O,a as k,b as A,c as j,d as M,f as N,g as P,i as F,l as I,m as L,n as R,o as z,p as B,r as V,s as H,t as U,u as W,v as fe,w as pe,x as G,y as K}from"./date-BacUxW-t.js";import{n as me,t as q}from"./sheet-DbjrsMqL.js";var J=b`
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
`,he=b`
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

    .month {
        font-size: 0.9375rem;
        font-weight: 600;
    }

    .year-field {
        position: relative;
        display: inline-flex;
        align-items: center;
        width: 58px;
        height: 28px;
        border-radius: var(--ui-radius-sm, 6px);
        transition: background-color var(--ui-duration-fast, 150ms) var(--ui-easing);
    }

    .year-field:hover,
    .year-field:focus-within {
        background-color: var(--ui-canvas-hover, rgba(0, 0, 0, 0.05));
    }

    .year {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-height: 0;
        padding: 0 16px 0 6px;
        border: none;
        background: transparent;
        color: var(--ui-ink);
        font: inherit;
        font-size: 0.9375rem;
        font-weight: 600;
        letter-spacing: inherit;
        -moz-appearance: textfield;
        appearance: textfield;
        border-radius: var(--ui-radius-sm, 6px);
    }

    .year::-webkit-inner-spin-button,
    .year::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .year:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -1px;
    }

    .year-steps {
        position: absolute;
        inset-inline-end: 2px;
        display: flex;
        flex-direction: column;
        opacity: 0;
        transition: opacity var(--ui-duration-fast, 150ms) var(--ui-easing);
    }

    .year-field:hover .year-steps,
    .year-field:focus-within .year-steps {
        opacity: 1;
    }

    .year-steps button {
        display: grid;
        place-items: center;
        width: 12px;
        height: 12px;
        padding: 0;
        border: none;
        background: transparent;
        color: var(--ui-ink-muted, #525252);
        cursor: pointer;
        border-radius: 2px;
    }

    .year-steps button:hover {
        background-color: var(--ui-ghost-active);
        color: var(--ui-ink);
    }

    .year-steps button:disabled {
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
    }

    .year-steps svg {
        width: 8px;
        height: 8px;
        fill: currentColor;
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

    /* Nav placeholder to maintain alignment when an arrow is omitted */
    .nav-spacer {
        width: 36px;
        height: 36px;
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
        transition: background-color var(--ui-duration-fast, 150ms) var(--ui-easing),
                    color var(--ui-duration-fast, 150ms) var(--ui-easing);
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

    .day[aria-pressed='true']:focus {
        outline: var(--ui-calendar-selected-focus-width, 1px) solid var(--ui-calendar-selected-focus, var(--ui-layer-2));
        outline-offset: var(--ui-calendar-selected-focus-offset, -3px);
        z-index: var(--ui-calendar-selected-focus-layer, auto);
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
        .year-steps {
            opacity: 1;
        }
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
`,Y=class extends r{constructor(...e){super(...e),this.value=``,this.endValue=``,this.range=!1,this.multi=!1,this.values=[],this.months=1,this.activeField=`start`,this.focusDate=new Date,this.min=``,this.max=``,this.locale=``,this.era=``,this.firstDay=0,this.showToday=!1,this.hoverDate=null,this.liveId=_(`ui-calendar`),this.localize=new T(this),this.focusFromGrid=!1}static{this.styles=[y,he]}get resolvedLocale(){return this.locale||this.localize.lang()}get resolvedEra(){return this.era?this.era:I(this.resolvedLocale)?`be`:`ce`}get multiValues(){return Array.isArray(this.values)?this.values:typeof this.values==`string`&&this.values.trim()?this.values.trim().split(/[\s,]+/):[]}focusDay(){this.focusedDay?.focus()}updated(e){e.has(`focusDate`)&&this.focusFromGrid&&(this.focusFromGrid=!1,this.focusDay())}ownWeekdays(){let e=p(this.resolvedLocale),t=e=>e.toLowerCase().split(`-`)[0];return t(e.$code)===t(this.resolvedLocale)?e.datePicker.weekdays:void 0}get messages(){return p(this.resolvedLocale).datePicker}get limits(){return{min:this.min,max:this.max,isDateDisabled:this.isDateDisabled}}unavailable(e){return W(e,this.limits)}dtf(e){let t=this.resolvedEra===`be`?`buddhist`:`gregory`;return new Intl.DateTimeFormat(this.resolvedLocale,{calendar:t,...e})}pick(e){if(this.unavailable(e))return;let t=G(e);if(this.multi){let n=[...this.multiValues],r=n.indexOf(t);r>=0?n.splice(r,1):n.push(t),n.sort(),this.values=n,this.dispatchEvent(new CustomEvent(`ui-multi-pick`,{detail:{date:e,values:n},bubbles:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{values:n},bubbles:!0,composed:!0}))}else{if(this.range){if(this.value&&this.endValue)this.value=t,this.endValue=``,this.activeField=`end`;else{let e=O({start:this.value,end:this.endValue,active:this.activeField},t);this.value=e.start,this.endValue=e.end,this.activeField=e.active}}else this.value=t;this.dispatchEvent(new CustomEvent(`ui-pick`,{detail:{date:e},bubbles:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.value,endValue:this.endValue},bubbles:!0,composed:!0}))}}onDayClick(e){this.moveFocus(e),this.pick(e)}moveFocus(e,t=!0){this.focusFromGrid=t,t&&(this.hoverDate=null),this.focusDate=F(e,this.limits),this.dispatchEvent(new CustomEvent(`ui-focus-change`,{detail:{date:this.focusDate},bubbles:!0}))}onGridKeydown(e){let t=B(this.focusDate,e.key,e.shiftKey,this.firstDay);t?(e.preventDefault(),this.moveFocus(t)):(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.pick(this.focusDate))}rangeInfo(e){if(!this.range||!this.value)return{start:!1,end:!1,inside:!1};let t=k(this.value,this.endValue,this.activeField,G(this.hoverDate??this.focusDate));return fe(G(e),this.value,t)}goToYear(e){let t=H(e,this.resolvedEra);this.moveFocus(ue(this.focusDate,t),!1)}onYearInput(e){e.stopPropagation();let t=de(e.target.value,this.resolvedEra);t!==void 0&&this.goToYear(t)}onYearChange(e){e.target.value=String(A(this.focusDate.getFullYear(),this.resolvedEra))}stepYear(e){this.goToYear(A(this.focusDate.getFullYear(),this.resolvedEra)+e)}renderDay(e,t,n,r){let i=G(e),a=this.multi&&this.multiValues.includes(i)||K(e,n)||this.range&&K(e,j(this.endValue)),o=K(e,new Date),s=this.rangeInfo(e),c=[`day`,o?`today`:``,e.getMonth()===t?``:`outside`,s.start?`range-start`:``,s.end?`range-end`:``,s.inside?`in-range`:``].filter(Boolean).join(` `);return l`<td role="gridcell" part="cell" aria-selected=${a?`true`:`false`}>
            <button
                class=${c}
                part="day${a?` selected`:``}${s.inside?` in-range`:``}${s.start?` range-start`:``}${s.end?` range-end`:``}"
                type="button"
                tabindex=${K(e,this.focusDate)?0:-1}
                aria-label=${r.format(e)}
                aria-pressed=${a?`true`:`false`}
                aria-current=${o?`date`:m}
                aria-disabled=${this.unavailable(e)?`true`:`false`}
                @pointerenter=${()=>this.hoverDate=e}
                @click=${()=>this.onDayClick(e)}
            >
                ${e.getDate()}
            </button>
        </td>`}renderMonthHeader(e,t,n){let r=this.messages,i=A(e.getFullYear(),this.resolvedEra),a=pe(this.limits,this.resolvedEra),o=new Date(e.getFullYear(),e.getMonth(),1),{previous:s,next:c}=N(e,this.limits);return l`
            <div class="cal-header" part="header">
                ${t?l`<button
                          class="nav"
                          part="nav prev-button"
                          type="button"
                          aria-label=${r.previousMonth}
                          ?disabled=${s}
                          @pointerdown=${e=>e.preventDefault()}
                          @mousedown=${e=>e.preventDefault()}
                          @click=${()=>this.moveFocus(U(this.focusDate,-1),!1)}
                      >
                          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m5 8 5-5 .7.7L6.4 8l4.3 4.3-.7.7z" /></svg>
                      </button>`:l`<div class="nav-spacer" aria-hidden="true"></div>`}
                <div class="month-year" part="heading">
                    <span class="month" part="month" aria-hidden="true">${this.dtf({month:`long`}).format(o)}</span>
                    <span class="year-field" part="year">
                        <input
                            class="year"
                            type="number"
                            inputmode="numeric"
                            aria-label=${r.year}
                            .value=${String(i)}
                            min=${a.min??m}
                            max=${a.max??m}
                            @input=${this.onYearInput}
                            @change=${this.onYearChange}
                        />
                        <span class="year-steps">
                            <button
                                type="button"
                                tabindex="-1"
                                aria-label=${r.increaseYear}
                                ?disabled=${a.max!==void 0&&i>=a.max}
                                @pointerdown=${e=>e.preventDefault()}
                                @mousedown=${e=>e.preventDefault()}
                                @click=${()=>this.stepYear(1)}
                            >
                                <svg viewBox="0 0 8 8" aria-hidden="true"><path d="M4 2 8 6H0z" /></svg>
                            </button>
                            <button
                                type="button"
                                tabindex="-1"
                                aria-label=${r.decreaseYear}
                                ?disabled=${a.min!==void 0&&i<=a.min}
                                @pointerdown=${e=>e.preventDefault()}
                                @mousedown=${e=>e.preventDefault()}
                                @click=${()=>this.stepYear(-1)}
                            >
                                <svg viewBox="0 0 8 8" aria-hidden="true"><path d="M4 6 0 2h8z" /></svg>
                            </button>
                        </span>
                    </span>
                </div>
                ${n?l`<button
                          class="nav"
                          part="nav next-button"
                          type="button"
                          aria-label=${r.nextMonth}
                          ?disabled=${c}
                          @pointerdown=${e=>e.preventDefault()}
                          @mousedown=${e=>e.preventDefault()}
                          @click=${()=>this.moveFocus(U(this.focusDate,1),!1)}
                      >
                          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3z" /></svg>
                      </button>`:l`<div class="nav-spacer" aria-hidden="true"></div>`}
            </div>
        `}renderMonthGrid(e,t,n){let r=e.getMonth(),i=M(e,this.firstDay),a=j(this.value),o=i[0],s=this.dtf({weekday:I(this.resolvedLocale)?`narrow`:`short`}),c=this.ownWeekdays(),u={format:e=>c?.[e.getDay()]??s.format(e)},d=this.dtf({weekday:`long`}),f=this.dtf({dateStyle:`full`});return l`
            <div class="month-view" part="month-view">
                ${this.renderMonthHeader(e,t,n)}
                <table
                    part="grid table"
                    role="grid"
                    @keydown=${this.onGridKeydown}
                    @pointerleave=${()=>this.hoverDate=null}
                >
                    <thead part="thead">
                        <tr part="row">
                            ${o.map(e=>l`<th part="th" scope="col" abbr=${d.format(e)}>${u.format(e)}</th>`)}
                        </tr>
                    </thead>
                    <tbody part="tbody">
                        ${i.map(e=>l`<tr part="row">
                                ${e.map(e=>this.renderDay(e,r,a,f))}
                            </tr>`)}
                    </tbody>
                </table>
            </div>
        `}renderFooter(){if(!this.showToday)return m;let e=new Date;return l`<div class="cal-footer" part="footer">
            <button class="today-button" part="today-button" type="button" ?disabled=${this.unavailable(e)} @click=${()=>this.pick(e)}>
                ${this.messages.today}
            </button>
        </div>`}focus(){this.focusDay()}render(){let e=Math.max(1,Math.min(2,this.months||1)),t=new Date(this.focusDate.getFullYear(),this.focusDate.getMonth(),1);return l`
            <div class="months-container" part="months">
                ${Array.from({length:e},(n,r)=>{let i=U(t,r),a=r===0,o=r===e-1;return this.renderMonthGrid(i,a,o)})}
            </div>
            <div class="sr-only" id="${this.liveId}-month" aria-live="polite">
                ${this.dtf({month:`long`,year:`numeric`}).format(t)}
            </div>
            ${this.renderFooter()}
        `}};i([f()],Y.prototype,`value`,void 0),i([f({attribute:`end-value`})],Y.prototype,`endValue`,void 0),i([f({type:Boolean})],Y.prototype,`range`,void 0),i([f({type:Boolean})],Y.prototype,`multi`,void 0),i([f({attribute:`values`})],Y.prototype,`values`,void 0),i([f({type:Number})],Y.prototype,`months`,void 0),i([f({attribute:`active-field`})],Y.prototype,`activeField`,void 0),i([f({attribute:!1})],Y.prototype,`focusDate`,void 0),i([f()],Y.prototype,`min`,void 0),i([f()],Y.prototype,`max`,void 0),i([f({attribute:!1})],Y.prototype,`isDateDisabled`,void 0),i([f()],Y.prototype,`locale`,void 0),i([f()],Y.prototype,`era`,void 0),i([f({type:Number,attribute:`first-day`})],Y.prototype,`firstDay`,void 0),i([f({type:Boolean,attribute:`show-today`})],Y.prototype,`showToday`,void 0),i([D()],Y.prototype,`hoverDate`,void 0),i([g(`.day[tabindex="0"]`)],Y.prototype,`focusedDay`,void 0),Y=i([n(`ui-calendar`)],Y);var ge=b`
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
        border-bottom: 1px solid var(--ui-ink-subtle);
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
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
    }

    input::placeholder {
        color: var(--ui-ink-placeholder);
        opacity: 1;
    }

    input:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    .invalid input {
        outline-color: var(--ui-error);
    }

    .invalid input:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
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
`,_e=b`
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
`,X=class extends r{constructor(...e){super(...e),this.inputId=``,this.label=``,this.outsideName=``,this.hideLabel=!1,this.labelSlotted=!1,this.text=``,this.value=``,this.pattern=``,this.hint=``,this.message=null,this.showError=!1,this.showClear=!1,this.expanded=!1,this.controls=null,this.disabled=!1,this.readonly=!1,this.required=!1,this.min=``,this.max=``,this.clearLabel=``}static{this.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[a,y,ge,ee,_e]}showNativePicker(){try{return this.native.showPicker(),!0}catch{return!1}}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0}))}onNativeChange(){this.native.value&&this.emit(`ui-native-change`,{iso:this.native.value})}onTextFocusOut(e){this.emit(`ui-blur`,{next:e.relatedTarget})}renderClear(){return this.showClear?l`<button class="clear" part="clear-button" type="button" tabindex="-1" aria-label=${this.clearLabel} @click=${()=>this.emit(`ui-clear`)}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
        </button>`:m}renderLabel(){let t=!this.label&&!this.labelSlotted;return t&&!this.outsideName?m:l`<label class=${this.hideLabel||t?`sr-only`:`label`} part="label" for=${this.inputId}>${e(this.label,this.outsideName)}</label>`}updated(){this.input&&`ariaControlsElements`in this.input&&(this.input.ariaControlsElements=this.controls?[this.controls]:null)}render(){let e=this.message;C(this,e);let t=[this.showError?`invalid`:``,e&&e.kind!==`helper`?`has-status`:``,this.showClear?`has-clear`:``].filter(Boolean).join(` `);return l`
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
                    aria-describedby=${[s(this.inputId,e),this.hint?`${this.inputId}-hint`:void 0].filter(Boolean).join(` `)||m}
                    @focusin=${e=>this.emit(`ui-focus`,{from:e.relatedTarget})}
                    @focusout=${this.onTextFocusOut}
                />
                <input
                    class="native"
                    type="date"
                    tabindex="-1"
                    aria-hidden="true"
                    .value=${this.value}
                    min=${this.min||m}
                    max=${this.max||m}
                    @change=${this.onNativeChange}
                />
                ${this.hint?l`<span class="sr-only" id="${this.inputId}-hint">${this.hint}</span>`:m}
                <span class="status">${ce(e)}</span>
                ${this.renderClear()}
                <span class="toggle" part="toggle" aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                        <path
                            d="M13 2h-2V1h-1v1H6V1H5v1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm0 11H3V6h10v7Zm0-8H3V3h2v1h1V3h4v1h1V3h2v2Z"
                        />
                    </svg>
                </span>
            </div>
            ${ie(this.inputId,e)}
        `}};i([f({attribute:`input-id`})],X.prototype,`inputId`,void 0),i([f()],X.prototype,`label`,void 0),i([f({attribute:!1})],X.prototype,`outsideName`,void 0),i([f({type:Boolean,attribute:`hide-label`})],X.prototype,`hideLabel`,void 0),i([f({type:Boolean,attribute:`label-slotted`})],X.prototype,`labelSlotted`,void 0),i([f()],X.prototype,`text`,void 0),i([f()],X.prototype,`value`,void 0),i([f()],X.prototype,`pattern`,void 0),i([f()],X.prototype,`hint`,void 0),i([f({attribute:!1})],X.prototype,`message`,void 0),i([f({type:Boolean,attribute:`show-error`})],X.prototype,`showError`,void 0),i([f({type:Boolean,attribute:`show-clear`})],X.prototype,`showClear`,void 0),i([f({type:Boolean})],X.prototype,`expanded`,void 0),i([f({attribute:!1})],X.prototype,`controls`,void 0),i([f({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),i([f({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),i([f({type:Boolean})],X.prototype,`required`,void 0),i([f()],X.prototype,`min`,void 0),i([f()],X.prototype,`max`,void 0),i([f({attribute:`clear-label`})],X.prototype,`clearLabel`,void 0),i([g(`input[type="text"]`)],X.prototype,`input`,void 0),i([g(`.native`)],X.prototype,`native`,void 0),X=i([n(`ui-date-field`)],X);var ve=[`base`,`label`,`input`,`clear-button`,`toggle`,`status-icon`,`helper-text`,`warning-text`,`warn-text`,`error-text`,`invalid-text`];function Z(e,t){if(!t)return!1;for(let n=e;n;n=n.parentNode??n.host??null)if(n===t)return!0;return!1}var Q=e=>typeof e==`string`?e:``,$=class extends r{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.value=``,this.name=``,this.range=!1,this.endValue=``,this.endName=``,this.endLabel=``,this.min=``,this.max=``,this.format=`dd/mm/yyyy`,this.locale=``,this.era=``,this.firstDay=0,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.picker=`auto`,this.clearable=!1,this.showToday=!1,this.months=1,this.size=`md`,this.text=``,this.endText=``,this.formControl=new oe(this,{reveal:()=>this.touched=!0,focus:()=>this.focusInput(this.lastField),implicitSubmission:!0}),this.open=!1,this.focusDate=new Date,this.touched=!1,this.activeField=`start`,this.lastField=`start`,this.returningFocus=!1,this.sheet=!1,this.customValidityMessage=``,this.localize=new T(this),this.fieldId=_(`ui-date-picker`),this.defaultValue=``,this.defaultEnd=``,this.lastSyncedValue=null,this.lastSyncedEnd=null,this.uncommitted={},this.focusInGrid=!1,this.onEnterKey=e=>x(this,e),this.tap=null,this.tapOpened=!1,this.reposition=()=>this.position(),this.sheetLayer={escape:()=>this.close(),modal:!0},this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this.calendar)&&!t.includes(this.fieldsEl)&&this.close()},this.pressInCalendar=!1,this.onCalendarPress=()=>{this.pressInCalendar=!0,clearTimeout(this.pressTimer),this.pressTimer=setTimeout(()=>this.pressInCalendar=!1,700)},this.slots=new v(this)}static{this.hostStates=[`open`,`show-error`,`show-warn`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...E.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[J]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}connectedCallback(){super.connectedCallback(),w(this,this.fluid),this.requestUpdate(),this.addEventListener(`keydown`,this.onEnterKey),this.formControl.captureDefaults(()=>{this.defaultValue=this.value,this.defaultEnd=this.endValue})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey),this.stopTracking(),this.stopSheet()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.formControl.reportValidity(this.internals)}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.endValue=this.defaultEnd,this.lastSyncedValue=null,this.lastSyncedEnd=null,this.uncommitted={},this.requestUpdate(`value`),this.touched=!1}formStateRestoreCallback(e){if(typeof e==`string`&&(this.value=e),e instanceof FormData&&this.endName)this.value=Q(e.get(this.name)),this.endValue=Q(e.get(this.endName));else if(e instanceof FormData){let[t=``,n=``]=Q(e.get(this.name)).split(`/`);this.value=t,this.endValue=n}}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}get interactive(){return!this.isDisabled&&!this.readonly}get useNativePicker(){return this.picker===`native`&&`showPicker`in HTMLInputElement.prototype}get resolvedLocale(){return this.locale||this.localize.lang()}get resolvedEra(){return this.era?this.era:I(this.resolvedLocale)?`be`:`ce`}get messages(){return p(this.resolvedLocale).datePicker}get pattern(){return this.messages.pattern(this.format)}fmt(e){return z(e,this.format,this.resolvedEra)}parse(e){return P(e,this.format,this.resolvedEra)}get minDate(){return j(this.min)}get maxDate(){return j(this.max)}get limits(){return{min:this.min,max:this.max,isDateDisabled:this.isDateDisabled}}unavailable(e){return W(e,this.limits)}get fields(){return this.range?[`start`,`end`]:[`start`]}fieldText(e){return e===`start`?this.text:this.endText}setFieldText(e,t){e===`start`?this.text=t:this.endText=t}fieldValue(e){return e===`start`?this.value:this.endValue}fieldEl(e){return e===`end`?this.endField:this.startField}get input(){return this.startField?.input}inputFor(e){return(this.fieldEl(e)??this.startField)?.input}fieldOf(e){return e.currentTarget.dataset.field===`end`?`end`:`start`}fromTextBox(e,t){return e.composedPath()[0]===this.inputFor(t)}fieldIdFor(e){return e===`start`?this.fieldId:`${this.fieldId}-end`}willUpdate(e){w(this,this.fluid),e.has(`value`)&&this.value&&!j(this.value)&&(this.value=``),e.has(`endValue`)&&this.endValue&&!j(this.endValue)&&(this.endValue=``),e.has(`value`)&&this.value!==this.lastSyncedValue&&(this.lastSyncedValue=this.value,delete this.uncommitted.start,this.syncText(`start`)),e.has(`endValue`)&&this.endValue!==this.lastSyncedEnd&&(this.lastSyncedEnd=this.endValue,delete this.uncommitted.end,this.syncText(`end`)),this.syncValidity()}syncText(e){let t=j(this.fieldValue(e));this.setFieldText(e,t?this.fmt(t):``),t&&this.open&&this.activeField===e&&(this.focusInGrid=!1,this.focusDate=this.clampToRange(t))}updated(e){e.has(`open`)&&this.onOpenChanged(),this.syncHostState()}syncHostState(){let e=new Set(this.fields.map(e=>this.fieldStatus(e).message?.kind));this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e.has(`error`)),this.toggleAttribute(`data-show-warn`,e.has(`warn`))}describe(e){let t=this.messages;switch(e.kind){case`parse`:return{flags:{badInput:!0},message:{era:()=>t.badEra(String(A(new Date().getFullYear(),this.resolvedEra))),incomplete:()=>t.incomplete,impossible:()=>t.impossible,unparseable:()=>t.badFormat(this.pattern)}[e.error]()};case`required`:return{flags:{valueMissing:!0},message:t.required};case`min`:return{flags:{rangeUnderflow:!0},message:t.beforeMin(this.fmt(this.minDate))};case`max`:return{flags:{rangeOverflow:!0},message:t.afterMax(this.fmt(this.maxDate))};case`disabled`:return{flags:{customError:!0},message:e.reason??t.dateDisabled};default:return{flags:{customError:!0},message:t.endBeforeStart}}}fieldError(e){let t={text:this.fieldText(e),value:this.fieldValue(e),required:this.required,start:e===`end`?this.value:``,format:this.format,era:this.resolvedEra},n=V(t,this.limits);return n?this.describe(n):null}formValue(){if(this.isDisabled)return null;if(!this.range)return this.value;let e=new FormData;return this.endName?(this.name&&e.append(this.name,this.value),e.append(this.endName,this.endValue),e):(this.name&&e.append(this.name,this.endValue?`${this.value}/${this.endValue}`:this.value),e)}syncValidity(){if(d(this.internals,this.isDisabled))return;this.internals.setFormValue(this.formValue());let e=le(this.invalid,this.invalidText,this.customValidityMessage);if(e)this.internals.setValidity({customError:!0},e,this.input??void 0);else{for(let e of this.fields){let t=this.fieldError(e);if(t){this.internals.setValidity(t.flags,t.message,this.inputFor(e)??void 0);return}}this.internals.setValidity({})}}focusInput(e){this.returningFocus=!0;try{this.inputFor(e)?.focus()}finally{this.returningFocus=!1}}onInput(e){let t=this.fieldOf(e),n=this.inputFor(t);if(!n||!this.fromTextBox(e,t))return;let{value:r,selectionStart:i}=n,a=L(r);a!==r&&(n.value=a,i!==null&&n.setSelectionRange(i,i)),this.setFieldText(t,a);let o=this.typedFullDate(t);o&&!this.unavailable(o)&&(this.setValue(t,G(o),!0),this.open&&(this.focusDate=this.clampToRange(o)))}typedFullDate(e){let t=this.fieldText(e),n=this.parse(t);return`date`in n&&this.fmt(n.date)===t?n.date:null}onFieldKeydown(e){if(e.key===`Escape`&&this.open){e.preventDefault(),e.stopPropagation(),this.close();return}let t=this.fieldOf(e);if(this.fromTextBox(e,t)){if(e.key===`ArrowDown`||e.key===`Tab`&&!e.shiftKey&&this.open){if(e.preventDefault(),!this.interactive)return;this.open?(this.activeField=t,this.focusGridDay()):this.openCalendar(!0,t)}else e.key===`Tab`&&e.shiftKey&&this.open&&t===`start`?this.close():e.key===`Enter`&&(this.commitText(t),this.close())}}onInputPointerDown(e){if(this.tapOpened=!1,!this.interactive||this.useNativePicker)return;let t=this.fieldOf(e);if(!this.fromTextBox(e,t))return;if(e.pointerType===`mouse`){this.open?this.activeField=t:this.openCalendar(!1,t),this.open&&this.sheet&&e.preventDefault();return}let n=q(this.picker)&&!!this.fieldEl(t)?.matches(`:focus-within`);this.tap=this.open||n?null:{id:e.pointerId,field:t}}onInputPointerUp(e){let t=this.tap;this.tap=null,t&&t.id===e.pointerId&&!this.open&&this.interactive&&(this.tapOpened=!0,this.openCalendar(!0,t.field))}onInputPointerCancel(){this.tap=null}onInputTouchEnd(e){this.tapOpened&&(this.tapOpened=!1,e.preventDefault())}onInputClick(e){let t=this.fieldOf(e);this.interactive&&this.useNativePicker&&this.fromTextBox(e,t)&&!this.openNativePicker(t)&&!this.open&&this.openCalendar(!1,t)}onInputFocusIn(e){let t=this.fieldOf(e);this.activeField=t,this.lastField=t,this.tapOpened?(this.tapOpened=!1,this.grid?.updateComplete.then(()=>this.open&&this.focusGridDay())):this.open||this.returningFocus||!this.interactive||this.useNativePicker||Z(e.detail?.from??null,this.calendar)||q(this.picker)||this.openCalendar(!1,t)}onInputFocusOut(e){let t=this.fieldOf(e),n=e.detail.next;Z(n,this.calendar)||(this.commitIfEdited(t),Z(n,this.fieldsEl)||(this.open=!1))}commitIfEdited(e){let t=j(this.fieldValue(e)),n=t?this.fmt(t):``;(this.fieldText(e)!==n||e in this.uncommitted)&&this.commitText(e)}commitText(e){this.touched=!0;let t=this.parse(this.fieldText(e));`date`in t?(this.setFieldText(e,this.fmt(t.date)),this.setValue(e,G(t.date))):this.setValue(e,``),this.syncValidity()}setValue(e,t,n=!1){let r=this.uncommitted[e]??this.fieldValue(e);t!==this.fieldValue(e)&&(e===`start`?(this.value=t,this.lastSyncedValue=t):(this.endValue=t,this.lastSyncedEnd=t)),n?this.uncommitted[e]=r:(delete this.uncommitted[e],t!==r&&this.dispatchEvent(new Event(`change`,{bubbles:!0})))}openCalendar(e,t=`start`){this.activeField=t,this.sheet=q(this.picker),this.focusInGrid=e||this.sheet;let n=this.typedFullDate(t)??j(this.fieldValue(t))??j(this.value)??new Date;this.focusDate=this.clampToRange(n),this.open=!0}openNativePicker(e){return this.fieldEl(e)?.showNativePicker()??!1}onNativeChange(e){let t=j(e.detail.iso);if(!t)return;let n=this.fieldOf(e);this.touched=!0,this.setFieldText(n,this.fmt(t)),this.setValue(n,G(t))}clampToRange(e){return F(e,this.limits)}onOpenChanged(){this.open&&this.sheet?(this.openSheet(),this.focusInGrid&&this.grid?.updateComplete.then(()=>this.open&&this.focusGridDay()),this.stopTracking(),this.stopOutside=c(document,this.onDocumentPointerDown)):this.open?(this.calendar.showPopover(),this.position(),this.focusInGrid&&this.grid?.updateComplete.then(()=>this.open&&this.focusGridDay()),this.stopTracking(),this.untrack=o(this.startField.input,this.calendar,this.reposition),this.stopOutside=c(document,this.onDocumentPointerDown)):(this.calendar.matches(`:popover-open`)&&this.calendar.hidePopover(),this.stopTracking(),this.stopSheet(),this.tapOpened=!1)}openSheet(){let e=this.sheetDialog;e&&(e.open||e.showModal(),S(this.sheetLayer,globalThis),re(this,document.documentElement),this.stopSwipe?.(),this.stopSwipe=this.sheetGrip?me(this.sheetGrip,e,()=>this.close()):void 0)}stopSheet(){this.sheetDialog?.open&&this.sheetDialog.close(),this.stopSwipe?.(),this.stopSwipe=void 0,ae(this.sheetLayer),se(this,document.documentElement)}onSheetCancel(e){e.preventDefault(),this.close()}stopTracking(){this.untrack?.(),this.stopOutside?.(),this.untrack=this.stopOutside=void 0}close(){let e=this.shadowRoot?.activeElement,t=!!e&&Z(e,this.calendar);this.sheet&&this.stopSheet(),t&&this.focusInput(this.lastField),this.open=!1;for(let e of this.fields)this.commitIfEdited(e)}focusGridDay(){h(this.grid),this.grid?.focusDay()}onCalendarFocusOut(e){if(!this.open||this.sheet&&!this.sheetDialog?.open)return;let t=e.relatedTarget;t?Z(t,this.calendar)||Z(t,this.fieldsEl)||this.close():this.pressInCalendar&&requestAnimationFrame(()=>{let e=this.shadowRoot?.activeElement;this.open&&!(e&&Z(e,this.calendar))&&this.focusGridDay()})}position(){t(this.startField.input,this.calendar,`bottom-start`,0)}clear(e){let t=this.fieldOf(e);this.setFieldText(t,``),this.setValue(t,``),this.focusInput(t)}select(e){this.unavailable(e)||(this.touched=!0,this.range?this.selectInRange(e):(this.text=this.fmt(e),this.setValue(`start`,G(e)),this.close()))}selectInRange(e){let t=G(e),n=O({start:this.value,end:this.endValue,active:this.activeField},t);for(let e of this.fields){let r=e===`start`?n.start:n.end;if(r===this.fieldValue(e)&&r!==t)continue;let i=j(r);this.setFieldText(e,i?this.fmt(i):``),this.setValue(e,r)}n.done?this.close():this.activeField=n.active}onCalendarKeydown(e){if(!this.open)return;if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.key!==`Tab`||this.sheet)return;let t=R(e.shiftKey,this.range,this.lastField);if(t.leave){this.focusInput(t.focus),this.open=!1;for(let e of this.fields)this.commitIfEdited(e);return}e.preventDefault();let n=t.focus!==this.lastField;n&&(this.activeField=t.focus),this.focusInput(t.focus),n&&(this.lastField=t.focus)}fieldStatus(e){let t=this.fieldError(e),n=this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||t!==null));return{showError:n,message:u({showError:n,errorText:ne(this.invalid,this.customValidityMessage,this.invalidText||t?.message||``),showWarn:this.warn&&this.interactive&&e===`start`,warnText:this.warnText,helperText:(e===`start`?this.helperText:``)||this.messages.hint(this.pattern),slots:e===`start`?this.slots:void 0})}}renderField(e){let t=this.messages,n=this.fieldIdFor(e),{showError:r,message:i}=this.fieldStatus(e),a=this.fieldText(e),o=e===`start`&&(this.helperText!==``||this.slots.has(`helper-text`));return l`<ui-date-field
            class=${e}
            data-field=${e}
            ?data-fluid=${te(this,`fluid`)}
            exportparts=${ve.map(t=>`${t}, ${t}:${e}-${t}`).join(`, `)}
            input-id=${n}
            .label=${e===`start`?this.label:this.endLabel}
            .outsideName=${e===`start`?this.formControl.fallbackName(this.label,this.internals):``}
            ?label-slotted=${this.slots.has(e===`start`?`label`:`end-label`)}
            ?hide-label=${this.hideLabel}
            .text=${a}
            .value=${this.fieldValue(e)}
            .pattern=${this.pattern}
            .hint=${o?t.hint(this.pattern):``}
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
        >${this.renderForwardedSlots(e)}</ui-date-field>`}renderForwardedSlots(e){let t=(e,t)=>this.slots.has(e)?l`<slot name=${e} slot=${t}></slot>`:m;return e===`end`?t(`end-label`,`label`):l`${t(`label`,`label`)}${t(`helper-text`,`helper-text`)}${t(`warn-text`,`warn-text`)}${t(`invalid-text`,`invalid-text`)}`}renderGrid(){return l`<ui-calendar
            exportparts="header, nav, month, year, grid, day, today-button"
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
            ?show-today=${this.showToday}
            @ui-pick=${e=>this.select(e.detail.date)}
            @ui-focus-change=${e=>this.focusDate=e.detail.date}
        ></ui-calendar>`}renderSheetGrip(){return l`<div class="sheet-grip" part="sheet-grip">
            <span class="sheet-handle" aria-hidden="true"></span>
            <button class="sheet-close" part="sheet-close" type="button" aria-label=${p(this.resolvedLocale).common.close} @click=${()=>this.close()}>
                <svg viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                </svg>
            </button>
        </div>`}render(){let e=this.messages,t=this.sheet?l`<dialog class="sheet" part="sheet" aria-label=${e.chooseDate} @cancel=${this.onSheetCancel}>
                  <div
                      class="calendar"
                      part="calendar"
                      @keydown=${this.onCalendarKeydown}
                      @focusout=${this.onCalendarFocusOut}
                      @touchstart=${this.onCalendarPress}
                      @pointerdown=${this.onCalendarPress}
                      @mousedown=${this.onCalendarPress}
                  >
                      ${this.renderSheetGrip()} ${this.open?this.renderGrid():m}
                  </div>
              </dialog>`:l`<div
                  class="calendar"
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
                  ${this.open?this.renderGrid():m}
              </div>`;return l`
            <div class="fields ${this.range?`range-fields`:``}">${this.fields.map(e=>this.renderField(e))}</div>
            ${t}
        `}};i([f()],$.prototype,`label`,void 0),i([f({type:Boolean,attribute:`hide-label`})],$.prototype,`hideLabel`,void 0),i([f({attribute:`helper-text`})],$.prototype,`helperText`,void 0),i([f({attribute:`invalid-text`})],$.prototype,`invalidText`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`invalid`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`warn`,void 0),i([f({attribute:`warn-text`})],$.prototype,`warnText`,void 0),i([f()],$.prototype,`value`,void 0),i([f({reflect:!0})],$.prototype,`name`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`range`,void 0),i([f({attribute:`end-value`})],$.prototype,`endValue`,void 0),i([f({attribute:`end-name`})],$.prototype,`endName`,void 0),i([f({attribute:`end-label`})],$.prototype,`endLabel`,void 0),i([f()],$.prototype,`min`,void 0),i([f()],$.prototype,`max`,void 0),i([f()],$.prototype,`format`,void 0),i([f()],$.prototype,`locale`,void 0),i([f()],$.prototype,`era`,void 0),i([f({type:Number,attribute:`first-day`})],$.prototype,`firstDay`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`disabled`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`required`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`readonly`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`fluid`,void 0),i([f()],$.prototype,`picker`,void 0),i([f({type:Boolean,reflect:!0})],$.prototype,`clearable`,void 0),i([f({type:Boolean,attribute:`show-today`})],$.prototype,`showToday`,void 0),i([f({type:Number})],$.prototype,`months`,void 0),i([f({reflect:!0})],$.prototype,`size`,void 0),i([f({attribute:!1})],$.prototype,`isDateDisabled`,void 0),i([D()],$.prototype,`text`,void 0),i([D()],$.prototype,`endText`,void 0),i([D()],$.prototype,`open`,void 0),i([D()],$.prototype,`focusDate`,void 0),i([D()],$.prototype,`touched`,void 0),i([D()],$.prototype,`activeField`,void 0),i([g(`ui-date-field[data-field="start"]`)],$.prototype,`startField`,void 0),i([g(`ui-date-field[data-field="end"]`)],$.prototype,`endField`,void 0),i([g(`.fields`)],$.prototype,`fieldsEl`,void 0),i([g(`.calendar`)],$.prototype,`calendar`,void 0),i([g(`.sheet`)],$.prototype,`sheetDialog`,void 0),i([g(`.sheet-grip`)],$.prototype,`sheetGrip`,void 0),i([D()],$.prototype,`sheet`,void 0),i([g(`ui-calendar`)],$.prototype,`grid`,void 0),$=i([n(`ui-date-picker`)],$);