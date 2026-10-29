import{Ct as e,D as t,Et as n,Mt as r,O as i,at as a,jt as o,k as s,kt as c,mt as l,wt as u}from"./theme-switcher-BZXGbHfR.js";import"./definition-tooltip-ndfKGe35.js";import{a as d,i as f,o as p,r as m,s as h}from"./status-indicator-DhbzV_N0.js";var g=[a,r`
        :host {
            display: flex;
            align-items: center;
            gap: var(--ui-space-xs);
            color: var(--ui-ink-muted);
            line-height: 1;
        }

        .icon {
            display: block;
            flex: none;
            align-self: center;
        }

        ui-definition-tooltip {
            display: flex;
        }

        ui-definition-tooltip::part(trigger) {
            display: flex;
            border: none;
            outline: none;
        }

        ui-definition-tooltip::part(trigger):focus-visible {
            outline: 1px solid var(--ui-focus);
            outline-offset: 0;
            border-radius: var(--ui-link-focus-radius, 0); /* Kanok: 4px */
        }

        ui-definition-tooltip::part(bubble) {
            padding-block: 2px;
        }
    `];function _(e,t){let n=e.icon.paths.map(t=>o`<path d=${t.d} style=${l({fill:h(e,t.tone)})} />`);return c`<svg class="icon" part="icon" width=${t} height=${t} viewBox=${e.icon.viewBox} aria-hidden="true">${n}</svg>`}function v(e,t,n,r,i){return n?c`<ui-definition-tooltip placement=${i} open-on-hover definition=${t}>
        ${e}<span class="sr-only">${r??t}</span>
    </ui-definition-tooltip>`:c`${e}<span part="label">${t}</span>`}var y=class extends s(i){constructor(...e){super(...e),this.label=``,this.size=16,this.compact=!1,this.placement=`right`}static{this.styles=[g,r`
            :host {
                font: var(--ui-font-body-sm);
                line-height: 1;
                letter-spacing: var(--ui-tracking-body);
            }

            :host([size='20']) {
                font: var(--ui-font-body);
                line-height: 1;
                letter-spacing: 0;
            }
        `]}render(){if(!this.kind||!m.includes(this.kind))return n;let e=this.size===20?20:16;return v(_(d(this.kind,e),e),this.label,this.compact,this.iconDescription,this.placement)}};t([e({reflect:!0})],y.prototype,`kind`,void 0),t([e()],y.prototype,`label`,void 0),t([e({type:Number,reflect:!0})],y.prototype,`size`,void 0),t([e({type:Boolean,reflect:!0})],y.prototype,`compact`,void 0),t([e({attribute:`icon-description`})],y.prototype,`iconDescription`,void 0),t([e({reflect:!0})],y.prototype,`placement`,void 0),y=t([u(`ui-icon-indicator`)],y);var b=class extends s(i){constructor(...e){super(...e),this.label=``,this.textSize=12,this.compact=!1,this.placement=`right`}static{this.styles=[g,r`
            :host {
                font: var(--ui-font-caption);
                line-height: 1;
                letter-spacing: var(--ui-tracking-caption);
            }

            :host([text-size='14']) {
                font: var(--ui-font-body-sm);
                line-height: 1;
                letter-spacing: var(--ui-tracking-body);
            }
        `]}render(){return!this.kind||!f.includes(this.kind)?n:v(_(p(this.kind),16),this.label,this.compact,this.shapeDescription,this.placement)}};t([e({reflect:!0})],b.prototype,`kind`,void 0),t([e()],b.prototype,`label`,void 0),t([e({type:Number,reflect:!0,attribute:`text-size`})],b.prototype,`textSize`,void 0),t([e({type:Boolean,reflect:!0})],b.prototype,`compact`,void 0),t([e({attribute:`shape-description`})],b.prototype,`shapeDescription`,void 0),t([e({reflect:!0})],b.prototype,`placement`,void 0),b=t([u(`ui-shape-indicator`)],b);