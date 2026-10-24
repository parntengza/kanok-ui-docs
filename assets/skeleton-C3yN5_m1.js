import{Ct as e,D as t,E as n,Ot as r,St as i,jt as a}from"./theme-switcher-BGAHXRgF.js";import{a as o}from"./skeleton-BESm0w-6.js";var s=class extends t{constructor(...e){super(...e),this.shape=`text`,this.lines=3}static{this.styles=[o,a`
            :host {
                display: block;
            }

            .bone {
                height: 14px;
                width: var(--ui-skeleton-width, 100%);
            }

            .bone + .bone {
                margin-top: var(--ui-space-xs);
            }

            /* Last text line is shorter so it reads as a paragraph */
            :host([shape='text']) .bone:last-child:not(:first-child) {
                width: 60%;
            }

            :host([shape='heading']) .bone {
                height: 24px;
                width: var(--ui-skeleton-width, 50%);
            }

            :host([shape='field']) .label {
                height: 12px;
                width: 30%;
                margin-bottom: var(--ui-space-xs);
            }

            :host([shape='field']) .bone:not(.label) {
                height: 48px;
            }

            :host([shape='button']) {
                display: inline-block;
            }

            :host([shape='button']) .bone {
                height: 48px;
                width: var(--ui-skeleton-width, 120px);
            }

            :host([shape='block']) .bone {
                height: var(--ui-skeleton-height, 160px);
            }
        `]}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}render(){return this.shape===`text`?Array.from({length:Math.max(1,this.lines)},()=>r`<div class="bone" part="bone"></div>`):this.shape===`field`?r`<div class="bone label" part="bone label"></div><div class="bone" part="bone"></div>`:r`<div class="bone" part="bone"></div>`}};n([i({reflect:!0})],s.prototype,`shape`,void 0),n([i({type:Number})],s.prototype,`lines`,void 0),s=n([e(`ui-skeleton`)],s);