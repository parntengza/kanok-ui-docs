import{Mt as e,jt as t}from"./theme-switcher-BGAHXRgF.js";var n=e=>e===`ghost`||e===`danger--ghost`||e===`danger-ghost`,r={ghost:1,"danger--ghost":2,"danger-ghost":2,tertiary:3,danger:5,primary:6},i=(e,t)=>e===`sm`||e===`md`&&t>2;function a(e,t){let a=t=>e.filter(e=>t(e??`primary`)).length,o=i(t,e.length),s=a(n),c=[];return o&&e.length>3&&c.push(`no more than three actions in this size of ActionSet`),e.length>4&&c.push(`no more than four actions in an ActionSet`),a(e=>e===`primary`)>1&&c.push(`no more than one 'primary' action`),s>1&&c.push(`no more than one 'ghost' action`),o&&e.length>1&&s>0&&c.push(`no 'ghost' action next to others in this size of ActionSet`),a(e=>!(e in r)&&e!==`secondary`)>0&&c.push(`only 'primary', 'secondary', 'tertiary', 'danger', 'ghost' and 'danger--ghost' actions`),c}var o={flex:`0 0 100%`,maxWidth:`none`},s={flex:`0 1 50%`,maxWidth:`none`},c={flex:`0 1 25%`,maxWidth:`232px`};function l(e,t,r,i){if(i)return o;let a=r===`xl`||r===`2xl`;return n(e)?t<=1?o:{flex:`1 1 ${{2:`75%`,3:`50%`}[t]??`25%`}`,maxWidth:`none`}:a||t>=4||t===3&&r===`lg`?c:t===1&&r===`md`?o:s}var u={"0 0 100%":`full`,"0 1 50%":`half`,"0 1 25%":`quarter`,"1 1 75%":`rest-75`,"1 1 50%":`rest-50`,"1 1 25%":`rest-25`},d=n=>{let r=e(n);return t`
        /* Carbon: full-bleed buttons that touch; --ui-actions-* let a design use ordinary buttons, spaced, at the end */
        ${r} {
            display: flex;
            justify-content: flex-end;
            gap: var(--ui-actions-gap, normal);
            padding: var(--ui-actions-padding, 0px);
            background-color: var(--ui-surface-1);
        }

        /* a column, primary on top (--ui-actions-stacked-*: a design can keep a wrapping row of ordinary buttons) */
        ${r}[data-stacked] {
            flex-direction: var(--ui-actions-stacked-direction, column-reverse);
            flex-wrap: var(--ui-actions-stacked-wrap, nowrap);
        }

        ${r} ::slotted(*) {
            margin: 0;
            --ui-field-height-lg: 64px;
            --ui-button-align: var(--ui-actions-button-align, flex-start);
            --ui-button-padding-top: var(--ui-actions-button-padding-top, var(--ui-space-md));
        }

        ${r}[data-condensed] ::slotted(*) {
            --ui-field-height-lg: 48px;
        }

        /* a column: full width, as tall as a button */
        ${r} ::slotted([data-action-width='stacked']) {
            flex: none;
            inline-size: var(--ui-actions-stacked-width, 100%);
        }

        ${r} ::slotted([data-action-width='full']) {
            flex: var(--ui-actions-button-flex, 0 0 100%);
        }

        ${r} ::slotted([data-action-width='half']) {
            flex: var(--ui-actions-button-flex, 0 1 50%);
        }

        ${r} ::slotted([data-action-width='quarter']) {
            flex: var(--ui-actions-button-flex, 0 1 25%);
            max-inline-size: 232px;
        }

        ${r} ::slotted([data-action-width='rest-75']) {
            flex: var(--ui-actions-button-flex, 1 1 75%);
        }

        ${r} ::slotted([data-action-width='rest-50']) {
            flex: var(--ui-actions-button-flex, 1 1 50%);
        }

        ${r} ::slotted([data-action-width='rest-25']) {
            flex: var(--ui-actions-button-flex, 1 1 25%);
        }

        /* a ghost in a row starts 16px in (Carbon) */
        ${r}:not([data-stacked]) ::slotted([kind='ghost']),
        ${r}:not([data-stacked]) ::slotted([kind='danger-ghost']) {
            --ui-button-padding-start: var(--ui-space-md);
        }

        /* 1px button-separator between neighbours (in a stack, above each lower one), not next to the focused one; the
           button set's setting (Kanok: none) */
        ${r}:not([data-stacked]) ::slotted(:not(:first-child):not(:focus-within)) {
            box-shadow: -1px 0 0 0 var(--ui-button-set-separator, var(--ui-button-separator));
        }

        ${r}[data-stacked] ::slotted(:not(:last-child):not(:focus-within)) {
            box-shadow: 0 -1px 0 0 var(--ui-button-set-separator, var(--ui-button-separator));
        }
    `},f=e=>e.assignedElements().filter(e=>e instanceof HTMLElement&&!e.hidden),p=e=>e.getAttribute(`kind`)??e.getAttribute(`variant`)??`primary`,m=new WeakMap;function h(e,t,n){let r=a(t.map(p),n),i=r.length>0?`<${e.localName}>: Carbon's ActionSet rules: ${r.join(`, and `)}.`:``;i!==(m.get(e)??``)&&(m.set(e,i),i&&console.warn(i))}function g(e,t,n,r=!1){let a=!r&&i(n,t.length);e.toggleAttribute(`data-stacked`,a);for(let e of t){let r=p(e);e.dataset.actionWidth=a?`stacked`:u[l(r,t.length,n,!1).flex]??`half`}return a}export{h as i,g as n,f as r,d as t};