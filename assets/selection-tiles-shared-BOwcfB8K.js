import{jt as e}from"./theme-switcher-BGAHXRgF.js";var t=e`
    position: relative;
    display: block;
    box-sizing: border-box;
    min-height: 64px;
    padding: var(--ui-space-md) calc(var(--ui-space-md) * 2 + 16px) var(--ui-space-md) var(--ui-space-md);
    /* Carbon: no visible border until chosen, square; a design can outline and round the tile (--ui-tile-border-color, --ui-card-radius) */
    border: 1px solid var(--ui-tile-border-color, transparent);
    border-radius: var(--ui-card-radius, 0);
    outline: var(--ui-focus-width, 2px) solid transparent;
    outline-offset: var(--ui-focus-offset, -2px);
    background-color: var(--ui-card-background, var(--ui-surface-1));
    color: var(--ui-ink);
    font: var(--ui-font-body-sm);
    line-height: 18px;
    letter-spacing: var(--ui-tracking-body);
    cursor: pointer;
    transition: all var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon .cds--tile--selectable: every property, moderate-01 */
`,n=e`
    .mark {
        position: absolute;
        top: var(--ui-space-md);
        inset-inline-end: var(--ui-space-md);
        width: 16px;
        height: 16px;
        fill: var(--ui-icon-secondary);
        transition: all var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--tile__checkmark: every property, fast-02 */
    }
`;export{t as n,n as t};