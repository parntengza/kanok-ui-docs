import{At as e,Ct as t,D as n,E as r,Ot as i,St as a,jt as o,pt as s}from"./theme-switcher-BGAHXRgF.js";var c=[`order-1-cyan`,`order-2-gray`,`order-3-green`,`order-4-magenta`,`order-5-purple`,`order-6-teal`,`order-7-cyan`,`order-8-gray`,`order-9-green`,`order-10-magenta`,`order-11-purple`,`order-12-teal`];function l(e){let t=c.indexOf(e);return`--ui-avatar-${Math.max(t,0)+1}`}var u={sm:24,md:32,lg:48,xl:64},d={sm:16,md:20,lg:24,xl:32},f=/[\u0E2F-\u0E4F]/gu;function p(e){let t=(e??``).trim().split(/\s+/).map(e=>e.replaceAll(f,``)),n=t[0]??``;return t.length===1?n.slice(0,2).toUpperCase():(n.charAt(0)+(t.at(-1)??``).charAt(0)).toUpperCase()}var m=e`<path d="M8,2c1.4,0,2.5,1.1,2.5,2.5S9.4,7,8,7S5.5,5.9,5.5,4.5S6.6,2,8,2 M8,1C6.1,1,4.5,2.6,4.5,4.5S6.1,8,8,8s3.5-1.6,3.5-3.5S9.9,1,8,1z" /><path d="M13,15h-1v-2.5c0-1.4-1.1-2.5-2.5-2.5h-3C5.1,10,4,11.1,4,12.5V15H3v-2.5C3,10.6,4.6,9,6.5,9h3c1.9,0,3.5,1.6,3.5,3.5V15z" />`,h=e`<path d="M16,4a5,5,0,1,1-5,5,5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,16,2Z" /><path d="M26,30H24V25a5,5,0,0,0-5-5H13a5,5,0,0,0-5,5v5H6V25a7,7,0,0,1,7-7h6a7,7,0,0,1,7,7Z" />`,g=class extends n{constructor(...e){super(...e),this.name=``,this.image=``,this.imageDescription=``,this.size=`md`,this.backgroundColor=`order-1-cyan`,this.tooltipText=``,this.tooltipAlignment=`bottom`}static{this.styles=o`
        :host {
            display: inline-block;
            vertical-align: middle;
        }

        .avatar {
            position: relative;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            inline-size: var(--_size);
            block-size: var(--_size);
            border: 0.5px solid transparent;
            border-radius: 100%;
            background-color: var(--_bg);
            color: var(--ui-inverse-ink);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            outline-offset: 3px;
        }

        :host([size='sm']) .avatar {
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        :host([size='lg']) .avatar {
            font: var(--ui-font-heading-03);
            letter-spacing: normal;
        }

        :host([size='xl']) .avatar {
            font: var(--ui-font-heading-04);
            letter-spacing: normal;
        }

        svg,
        ::slotted([slot='icon']) {
            flex: none;
            inline-size: var(--_icon);
            block-size: var(--_icon);
            color: var(--ui-icon-inverse);
            fill: currentColor;
        }

        img {
            flex: none;
            inline-size: var(--_size);
            block-size: var(--_size);
            border-radius: 100%;
            object-fit: fill;
        }

        .trigger {
            display: flex;
            padding: 0;
            border: 0;
            background: none;
            color: inherit;
            cursor: default;
            font: inherit;
            letter-spacing: inherit;
            outline: none;
        }

        .trigger:focus-visible .avatar {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: 1px;
        }

        @media (forced-colors: active) {
            .avatar {
                border-color: CanvasText;
            }
        }
    `}renderContent(){if(this.image)return i`<img part="image" src=${this.image} alt=${this.imageDescription} />`;let e=(d[this.size]??20)===16?i`<svg viewBox="0 0 16 16" aria-hidden="true">${m}</svg>`:i`<svg viewBox="0 0 32 32" aria-hidden="true">${h}</svg>`;return i`<slot name="icon">${this.name?p(this.name):e}</slot>`}render(){let e=d[this.size]??20,t={"--_size":`${u[this.size]??32}px`,"--_icon":`${e}px`,"--_bg":`var(${l(this.backgroundColor)})`},n=i`<div class="avatar" part="avatar" style=${s(t)}>${this.renderContent()}</div>`;return this.tooltipText?i`<ui-tooltip text=${this.tooltipText} as-label placement=${this.tooltipAlignment}><button type="button" class="trigger" part="trigger">${n}</button></ui-tooltip>`:n}};r([a()],g.prototype,`name`,void 0),r([a()],g.prototype,`image`,void 0),r([a({attribute:`image-description`})],g.prototype,`imageDescription`,void 0),r([a({reflect:!0})],g.prototype,`size`,void 0),r([a({attribute:`background-color`})],g.prototype,`backgroundColor`,void 0),r([a({attribute:`tooltip-text`})],g.prototype,`tooltipText`,void 0),r([a({attribute:`tooltip-alignment`})],g.prototype,`tooltipAlignment`,void 0),g=r([t(`ui-user-avatar`)],g);