import{At as e,Ct as t,D as n,E as r,O as i,Ot as a,St as o,Tt as s,it as c,jt as l,pt as u}from"./theme-switcher-BGAHXRgF.js";import"./definition-tooltip-18dYgQUo.js";import{a as d,i as f,o as p,r as m,s as h}from"./status-indicator-DhbzV_N0.js";var g=[c,l`
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
    `];function _(t,n){let r=t.icon.paths.map(n=>e`<path d=${n.d} style=${u({fill:h(t,n.tone)})} />`);return a`<svg class="icon" part="icon" width=${n} height=${n} viewBox=${t.icon.viewBox} aria-hidden="true">${r}</svg>`}function v(e,t,n,r,i){return n?a`<ui-definition-tooltip placement=${i} open-on-hover definition=${t}>
        ${e}<span class="sr-only">${r??t}</span>
    </ui-definition-tooltip>`:a`${e}<span part="label">${t}</span>`}var y=class extends i(n){constructor(...e){super(...e),this.label=``,this.size=16,this.compact=!1,this.placement=`right`}static{this.styles=[g,l`
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
        `]}render(){if(!this.kind||!m.includes(this.kind))return s;let e=this.size===20?20:16;return v(_(d(this.kind,e),e),this.label,this.compact,this.iconDescription,this.placement)}};r([o({reflect:!0})],y.prototype,`kind`,void 0),r([o()],y.prototype,`label`,void 0),r([o({type:Number,reflect:!0})],y.prototype,`size`,void 0),r([o({type:Boolean,reflect:!0})],y.prototype,`compact`,void 0),r([o({attribute:`icon-description`})],y.prototype,`iconDescription`,void 0),r([o({reflect:!0})],y.prototype,`placement`,void 0),y=r([t(`ui-icon-indicator`)],y);var b=class extends i(n){constructor(...e){super(...e),this.label=``,this.textSize=12,this.compact=!1,this.placement=`right`}static{this.styles=[g,l`
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
        `]}render(){return!this.kind||!f.includes(this.kind)?s:v(_(p(this.kind),16),this.label,this.compact,this.shapeDescription,this.placement)}};r([o({reflect:!0})],b.prototype,`kind`,void 0),r([o()],b.prototype,`label`,void 0),r([o({type:Number,reflect:!0,attribute:`text-size`})],b.prototype,`textSize`,void 0),r([o({type:Boolean,reflect:!0})],b.prototype,`compact`,void 0),r([o({attribute:`shape-description`})],b.prototype,`shapeDescription`,void 0),r([o({reflect:!0})],b.prototype,`placement`,void 0),b=r([t(`ui-shape-indicator`)],b);