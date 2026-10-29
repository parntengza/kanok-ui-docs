import{Ct as e,D as t,Mt as n,O as r,St as i,wt as a}from"./theme-switcher-BZXGbHfR.js";import{n as o,t as s}from"./static-html-D4l71AdL.js";var c=e=>Math.min(Math.max(Math.round(e),1),6),l=class extends r{constructor(...e){super(...e),this.currentLevel=2}static{this.styles=n`
        :host {
            display: block;
        }
    `}getCurrentLevel(){return this.currentLevel}syncLevel(){let e=this.parentElement?.closest(`ui-section`);this.currentLevel=c(this.level??(e?e.getCurrentLevel():1)+1)}connectedCallback(){super.connectedCallback(),this.syncLevel()}updated(e){if(super.updated(e),e.has(`level`)){this.syncLevel();for(let e of this.querySelectorAll(`ui-section, ui-heading`))e.syncLevel()}}render(){return o`<slot></slot>`}};t([e({type:Number})],l.prototype,`level`,void 0),l=t([a(`ui-section`)],l);var u=class extends r{constructor(...e){super(...e),this.level=1}static{this.styles=n`
        :host {
            display: block;
        }

        .heading {
            margin: 0;
            color: var(--ui-ink);
            unicode-bidi: isolate;
        }

        h1 {
            font: var(--ui-font-heading-06);
        }

        h2 {
            font: var(--ui-font-heading-05);
        }

        h3 {
            font: var(--ui-font-heading-04);
        }

        h4 {
            font: var(--ui-font-heading-03);
        }

        h5 {
            font: var(--ui-font-heading-02);
        }

        h6 {
            font: var(--ui-font-heading-01);
            letter-spacing: var(--ui-tracking-body);
        }
    `}syncLevel(){this.level=this.closest(`ui-section`)?.getCurrentLevel()??1}connectedCallback(){super.connectedCallback(),this.syncLevel()}render(){let e=s(`h${this.level}`);return o`<${e} class="heading" part="heading"><slot></slot></${e}>`}};t([i()],u.prototype,`level`,void 0),u=t([a(`ui-heading`)],u);