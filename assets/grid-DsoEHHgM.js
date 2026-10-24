import{Ct as e,D as t,E as n,Mt as r,Ot as i,St as a,ht as o,jt as s,xt as c}from"./theme-switcher-BGAHXRgF.js";var l=class extends t{static{this.styles=s`
        :host {
            display: block;
            margin-inline-start: var(--ui-grid-column-hang);
        }

        :host(:dir(rtl)) {
            margin-inline: initial var(--ui-grid-column-hang);
        }
    `}render(){return i`<slot></slot>`}};l=n([e(`ui-column-hang`)],l);var u=[{name:`sm`,minRem:0,columns:4,margin:0},{name:`md`,minRem:42,columns:8,margin:16},{name:`lg`,minRem:66,columns:16,margin:16},{name:`xlg`,minRem:82,columns:16,margin:16},{name:`max`,minRem:99,columns:16,margin:24}],d=1584,f=16,p={"25%":.25,"50%":.5,"75%":.75,"100%":1},m=e=>typeof e==`string`&&e in p;function h(e){return e===0?{display:`none`}:{display:`block`,columns:e,start:`span ${e}`,end:`span ${e}`}}function g(e,t){if(e===`100%`)return{start:`1`,end:`-1`};let n=t*p[e];return{columns:n,start:`span ${n}`,end:`span ${n}`}}function _(e,t){if(e===void 0||e===!1)return;if(e===!0)return{start:`auto`,end:`auto`};let n=typeof e==`object`?e.span:e;if(m(n))return g(n,u[t].columns);if(typeof n==`number`&&n>=0&&n<=u[t].columns)return h(n)}function v(e){if(typeof e!=`object`||!e)return;let t={};return typeof e.offset==`number`&&(t.start=e.offset>0?String(e.offset+1):`auto`),typeof e.start==`number`&&(t.start=e.start?String(e.start):`auto`),typeof e.end==`number`&&(t.end=String(e.end)),t.start===void 0&&t.end===void 0?void 0:t}function y(e){let t=[],n=(e,n)=>{n&&t.push({from:e,set:n})},r=e.span,i=typeof r==`object`?r.span:r;return typeof i==`number`&&i>=0&&i<=f&&n(0,h(i)),u.forEach((t,r)=>{n(r,_(e[t.name],r))}),i===!0&&n(0,{start:`auto`,end:`auto`}),m(i)&&u.forEach((e,t)=>{n(t,g(i,e.columns))}),n(0,v(r)),u.forEach((t,r)=>{n(r,v(e[t.name]))}),t}function b(e){let t=y(e),n={};return u.forEach((e,r)=>{let i={};for(let e of t)e.from<=r&&Object.assign(i,e.set);n[e.name]={start:i.start??`auto`,end:i.end??`auto`,hidden:i.display===`none`,columns:i.columns}}),n}function x(e){if(e==null)return;let t=e.trim();if(t===``||t===`auto`||t===`true`)return!0;if(/^\d+$/.test(t))return Number(t);if(m(t))return t;let n={};for(let e of t.split(/\s+/)){let[t,r]=e.split(`:`);t===`span`&&m(r)?n.span=r:(t===`span`||t===`offset`||t===`start`||t===`end`)&&/^\d+$/.test(r??``)&&(n[t]=Number(r))}return Object.keys(n).length?n:void 0}function S(e){return u.map(t=>t.minRem===0?e(t.name):`@media (min-width: ${t.minRem}rem) { ${e(t.name)} }`).join(`
`)}var C=r(S(e=>`:host {
            display: var(--_ui-col-display-${e}, block);
            grid-column-start: var(--_ui-col-start-${e}, auto);
            grid-column-end: var(--_ui-col-end-${e}, auto);
        }
        :host([data-columns-${e}]) {
            --ui-grid-columns: var(--_ui-col-columns-${e});
        }`)),w=class extends t{static{this.styles=[C,s`
            :host {
                --ui-grid-mode-start: var(--ui-grid-gutter-start);
                --ui-grid-mode-end: var(--ui-grid-gutter-end);
                margin-inline: var(--ui-grid-gutter-start) var(--ui-grid-gutter-end);
            }

            :host(:dir(rtl)) {
                margin-inline: var(--ui-grid-gutter-end) var(--ui-grid-gutter-start);
            }
        `]}updated(e){super.updated(e);let t={span:x(this.span)};for(let e of u)t[e.name]=x(this[e.name]);let n=b(t);for(let e of u){let t=n[e.name];this.style.setProperty(`--_ui-col-start-${e.name}`,t.start),this.style.setProperty(`--_ui-col-end-${e.name}`,t.end),this.style.setProperty(`--_ui-col-display-${e.name}`,t.hidden?`none`:`block`),t.columns===void 0?this.style.removeProperty(`--_ui-col-columns-${e.name}`):this.style.setProperty(`--_ui-col-columns-${e.name}`,String(t.columns)),this.toggleAttribute(`data-columns-${e.name}`,t.columns!==void 0)}}render(){return i`<slot></slot>`}};n([a({reflect:!0})],w.prototype,`sm`,void 0),n([a({reflect:!0})],w.prototype,`md`,void 0),n([a({reflect:!0})],w.prototype,`lg`,void 0),n([a({reflect:!0})],w.prototype,`xlg`,void 0),n([a({reflect:!0})],w.prototype,`max`,void 0),n([a({reflect:!0})],w.prototype,`span`,void 0),w=n([e(`ui-column`)],w);var T=r(u.map(e=>{let t=`.grid { --ui-grid-columns: ${e.columns}; --ui-grid-margin: ${e.margin}px; }`;return e.minRem===0?t:`@media (min-width: ${e.minRem}rem) { ${t} }`}).join(`
`)),E=class extends t{constructor(...e){super(...e),this.narrow=!1,this.condensed=!1,this.fullWidth=!1,this.withRowGap=!1,this.subgrid=!1}static{this.styles=[T,s`
            :host {
                display: block;
            }

            .grid {
                --ui-grid-gutter: ${32}px;
                --ui-grid-gutter-start: calc(var(--ui-grid-gutter) / 2);
                --ui-grid-gutter-end: calc(var(--ui-grid-gutter) / 2);
                --ui-grid-column-hang: calc(var(--ui-grid-gutter) / 2);
                display: grid;
                grid-template-columns: repeat(var(--ui-grid-columns), minmax(0, 1fr));
                box-sizing: border-box;
                inline-size: 100%;
                max-inline-size: ${d}px;
                margin-inline: auto;
                padding-inline: var(--ui-grid-margin);
            }

            .full-width {
                max-inline-size: 100%;
            }

            .grid.narrow {
                --ui-grid-gutter-start: 0px;
            }

            .grid.condensed {
                --ui-grid-gutter: ${1}px;
                --ui-grid-column-hang: ${31/2}px;
            }

            .grid.row-gap {
                row-gap: var(--ui-grid-gutter);
            }

            .grid.narrow.row-gap {
                row-gap: calc(var(--ui-grid-gutter) / 2);
            }

            .start {
                margin-inline-start: 0;
            }

            .end {
                margin-inline-end: 0;
            }

            /* a subgrid takes its column's span (--ui-grid-columns) and reaches over the column's gutters */
            .subgrid {
                display: grid;
                grid-template-columns: repeat(var(--ui-grid-columns), minmax(0, 1fr));
                margin-inline: calc(var(--ui-grid-mode-start) * -1) calc(var(--ui-grid-mode-end) * -1);
            }

            :host(:dir(rtl)) .subgrid {
                margin-inline: calc(var(--ui-grid-mode-end) * -1) calc(var(--ui-grid-mode-start) * -1);
            }

            .subgrid.wide {
                --ui-grid-gutter-start: ${16}px;
                --ui-grid-gutter-end: ${16}px;
                --ui-grid-column-hang: 0px;
            }

            .subgrid.narrow {
                --ui-grid-gutter-start: 0px;
                --ui-grid-gutter-end: ${16}px;
                --ui-grid-column-hang: ${16}px;
            }

            .subgrid.condensed {
                --ui-grid-gutter: ${1}px;
                --ui-grid-gutter-start: ${1/2}px;
                --ui-grid-gutter-end: ${1/2}px;
                --ui-grid-column-hang: ${31/2}px;
            }

            .subgrid.row-gap {
                row-gap: ${32}px;
            }

            .subgrid.narrow.row-gap {
                row-gap: ${16}px;
            }

            .subgrid.condensed.row-gap {
                row-gap: ${1}px;
            }
        `]}connectedCallback(){super.connectedCallback(),this.subgrid=!!this.parentElement?.closest(`ui-grid`)}render(){let e=`wide`;this.narrow?e=`narrow`:this.condensed&&(e=`condensed`);let t=this.subgrid?{subgrid:!0,[e]:!0,"row-gap":this.withRowGap}:{grid:!0,narrow:this.narrow,condensed:!this.narrow&&this.condensed,"full-width":this.fullWidth,start:this.align===`start`,end:this.align===`end`,"row-gap":this.withRowGap};return i`<div class=${o(t)} part="grid"><slot></slot></div>`}};n([a({type:Boolean,reflect:!0})],E.prototype,`narrow`,void 0),n([a({type:Boolean,reflect:!0})],E.prototype,`condensed`,void 0),n([a({type:Boolean,reflect:!0,attribute:`full-width`})],E.prototype,`fullWidth`,void 0),n([a({reflect:!0})],E.prototype,`align`,void 0),n([a({type:Boolean,reflect:!0,attribute:`with-row-gap`})],E.prototype,`withRowGap`,void 0),n([c()],E.prototype,`subgrid`,void 0),E=n([e(`ui-grid`)],E);