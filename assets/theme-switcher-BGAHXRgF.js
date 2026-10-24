(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`docs-page-show`,t=`docs-page-hide`;function n(t){document.addEventListener(e,t)}var r=`ui-docs-code-tab`,i=()=>[...document.querySelectorAll(`ui-tabs.doc-code-tabs`)],a=e=>[...e.querySelectorAll(`:scope > ui-tab`)],o=e=>e.textContent?.trim()??``;function s(){try{return localStorage.getItem(r)}catch{return null}}function c(e){try{localStorage.setItem(r,e)}catch{}}function l(e,t){for(let n of i()){if(n===t)continue;let r=a(n).find(t=>o(t)===e)?.getAttribute(`panel`);r&&n.value!==r&&(n.value=r)}}n(()=>{let e=s();e&&l(e)}),document.addEventListener(`ui-tab-change`,e=>{let t=e.target;if(!t.matches?.(`ui-tabs.doc-code-tabs`))return;let n=a(t).find(t=>t.getAttribute(`panel`)===e.detail.name);if(!n)return;let r=o(n);c(r);let i=t.getBoundingClientRect().top;l(r,t),requestAnimationFrame(()=>window.scrollBy(0,t.getBoundingClientRect().top-i))});var u=[],d=[],ee=73,f;function p(){let e=0;d.forEach((t,n)=>{t&&t.getBoundingClientRect().top<=ee&&(e=n)});let t=u[e];t!==f&&(f?.removeAttribute(`aria-current`),t?.setAttribute(`aria-current`,`location`),f=t)}function te(){u=[...document.querySelectorAll(`.doc-toc a[href^="#"]`)],d=u.map(e=>document.getElementById(decodeURIComponent(e.hash.slice(1)))),f=void 0,p()}n(te),document.addEventListener(`scroll`,p,{passive:!0}),globalThis.addEventListener(`load`,p);var ne=`modulepreload`,m=function(e){return`/kanok-ui-docs/`+e},h={},g=function(e){return e.pathname.endsWith(`.css`)},re=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=m(t,n);let r=s(t),i=g(r);return re(h,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:ne,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ie=20,ae=40,oe=140,v=document.querySelector(`#doc-search`),se=document.querySelector(`#doc-search-open`),y=v?.querySelector(`ui-search`),ce=v?.querySelector(`.doc-search-status`),b=v?.querySelector(`.doc-search-results`),le;async function ue(){let e=document.documentElement.lang===`th`?`th`:`en`;le??=(e===`th`?await _(()=>import(`./th-CQ_7AwI5.js`),[]):await _(()=>import(`./en-BojwW2IY.js`),[])).default}function de([e,t,,n],r){let i=0;for(let a of r)if(!t&&e.toLowerCase().includes(a))i+=4;else if(t.toLowerCase().includes(a))i+=3;else if(e.toLowerCase().includes(a))i+=2;else if(n.toLowerCase().includes(a))i+=1;else return 0;return i}function fe(e,t){let n=document.createElement(`span`);n.className=`doc-search-text`;let r=e.toLowerCase().indexOf(t);if(r<0)return n.textContent=e.slice(0,oe),n;let i=Math.max(0,r-ae),a=document.createElement(`mark`);return a.textContent=e.slice(r,r+t.length),n.append(`${i>0?`…`:``}${e.slice(i,r)}`,a,e.slice(r+t.length,i+oe)),n}function pe([e,t,n,r],i){let a=document.createElement(`a`);a.href=n;let o=document.createElement(`span`);o.className=`doc-search-title`,o.textContent=t?`${e} › ${t}`:e,a.append(o,fe(r,i));let s=document.createElement(`li`);return s.append(a),s}function me(){if(!y||!ce||!b||!v)return;let e=y.value.trim().toLowerCase().split(/\s+/).filter(Boolean);if(e.length===0||!le){b.replaceChildren(),ce.textContent=``;return}let t=le.map(t=>({row:t,score:de(t,e)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,ie);b.replaceChildren(...t.map(t=>pe(t.row,e[0]))),ce.textContent=((t.length>0?v.dataset.count:v.dataset.empty)??``).replace(`{n}`,String(t.length)).replace(`{q}`,y.value.trim())}function he(){v&&(v.open=!0,ue().then(me))}function ge(e){let t=e.composedPath()[0];return t instanceof HTMLElement&&(t.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(t.tagName))}function _e(e){if(!b||e.key!==`ArrowDown`&&e.key!==`ArrowUp`)return;let t=[...b.querySelectorAll(`a`)];if(t.length===0)return;let n=t.indexOf(document.activeElement)+(e.key===`ArrowDown`?1:-1);e.preventDefault(),n<0?y?.focus():t[Math.min(n,t.length-1)].focus()}v&&y&&b&&(se?.addEventListener(`click`,he),document.addEventListener(`keydown`,e=>{(e.key===`k`&&(e.metaKey||e.ctrlKey)||e.key===`/`&&!ge(e))&&!v.open&&(e.preventDefault(),he())}),y.addEventListener(`input`,me),v.addEventListener(`keydown`,_e),b.addEventListener(`click`,e=>{e.target.closest(`a`)&&(v.open=!1)})),n(()=>{for(let e of document.querySelectorAll(`.doc script[type="text/x-demo"]`)){let t=document.createElement(`script`);t.type=`module`,t.textContent=e.textContent,e.replaceWith(t)}});var ve=new URL(document.querySelector(`ui-header-name`)?.getAttribute(`href`)??`/`,location.href).pathname,ye=new Map,be=location.pathname,xe=0,Se;history.scrollRestoration=`manual`;var Ce=e=>e.origin===location.origin&&e.pathname.startsWith(ve);function we(e){let t=ye.get(e.pathname);return t||(t=fetch(e.pathname,{headers:{Accept:`text/html`}}).then(e=>e.ok?e.text():Promise.reject(Error(String(e.status)))).then(e=>new DOMParser().parseFromString(e,`text/html`)),t.catch(()=>ye.delete(e.pathname)),ye.set(e.pathname,t)),t}var Te=(e,t)=>[...e.querySelectorAll(`script[type="module"][src]`)].map(e=>new URL(e.getAttribute(`src`)??``,t).href),Ee=new Set;function De(e,t){for(let n of Te(e,t))Ee.has(n)||(Ee.add(n),document.head.append(Object.assign(document.createElement(`link`),{rel:`modulepreload`,href:n})))}async function Oe(e,t){for(let n of e.head.querySelectorAll(`link[rel="stylesheet"]`)){let e=new URL(n.getAttribute(`href`)??``,t).href;[...document.styleSheets].some(t=>t.href===e)||document.head.append(Object.assign(n.cloneNode(),{href:e}))}await Promise.all(Te(e,t).map(e=>_(()=>import(e),[])))}function ke(e){for(let t of document.querySelectorAll(`ui-side-nav-menu-item`))t.current=new URL(t.getAttribute(`href`)??``,location.href).pathname===e,t.current&&t.closest(`ui-side-nav-menu`)?.setAttribute(`expanded`,``);let t=document.querySelector(`ui-side-nav`);t&&!matchMedia(`(min-width: 66rem)`).matches&&(t.expanded=!1)}function Ae(e,t){document.title=e.title;let n=document.querySelector(`ui-content`),r=e.querySelector(`ui-content`);n&&r&&n.replaceChildren(...[...r.childNodes].map(e=>document.importNode(e,!0)));let i=e.querySelector(`ui-header-panel ui-link[hreflang]`)?.getAttribute(`href`);i&&document.querySelector(`ui-header-panel ui-link[hreflang]`)?.setAttribute(`href`,i);for(let t of document.head.querySelectorAll(`link[rel="alternate"]`)){let n=e.head.querySelector(`link[rel="alternate"][hreflang="${t.getAttribute(`hreflang`)}"]`);n&&t.setAttribute(`href`,n.getAttribute(`href`)??``)}be=t}async function je(){let e=[...document.querySelectorAll(`ui-content *`)].map(e=>e.updateComplete).filter(e=>e!==void 0);await Promise.all(e)}function Me(e,t,n){let r=e.hash?document.getElementById(decodeURIComponent(e.hash.slice(1))):null;if(r?r.scrollIntoView():scrollTo(0,t??0),!n)return;let i=document.querySelector(`.doc > h1`);i&&(i.tabIndex=-1,i.focus({preventScroll:!0}))}async function Ne(n,r,i){let a=++xe;ke(n.pathname);try{let o=await we(n);if(a!==xe)return;let s=Oe(o,n);if(r&&(clearTimeout(Se),history.replaceState({...history.state,scrollY:window.scrollY},``),history.pushState({},``,n.href)),document.dispatchEvent(new Event(t)),Ae(o,n.pathname),Me(n,i,r),await s,a!==xe)return;document.dispatchEvent(new Event(e)),await je(),Me(n,i,!1)}catch{location.assign(n.href)}}function Pe(e){let t=new URL(e,location.href);if(!(!Ce(t)||t.pathname===be&&t.hash))return t}var Fe=e=>e.button===0&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey;document.addEventListener(`ui-navigate`,e=>{if(e.defaultPrevented)return;let t=Pe(e.detail.href);t&&(e.preventDefault(),Ne(t,!0))}),document.addEventListener(`click`,e=>{if(e.defaultPrevented||!Fe(e))return;let t=e.composedPath().find(e=>e instanceof HTMLAnchorElement);if(!t||t.target&&t.target!==`_self`||t.hasAttribute(`download`))return;let n=Pe(t.href);n&&(e.preventDefault(),Ne(n,!0))});var Ie=e=>{let t=e.composedPath().find(e=>e instanceof HTMLAnchorElement),n=t&&Pe(t.href);n&&n.pathname!==be&&we(n).then(e=>De(e,n),()=>void 0)};document.addEventListener(`pointerover`,Ie,{passive:!0}),document.addEventListener(`focusin`,Ie),document.addEventListener(`scroll`,()=>{clearTimeout(Se),Se=setTimeout(()=>history.replaceState({...history.state,scrollY:window.scrollY},``),150)},{passive:!0}),globalThis.addEventListener(`popstate`,e=>{let t=new URL(location.href),n=e.state?.scrollY;t.pathname===be?Me(t,n,!1):Ne(t,!1,n)});function Le(){document.dispatchEvent(new Event(e))}document.readyState===`complete`?Le():document.addEventListener(`DOMContentLoaded`,Le,{once:!0});var Re=[`light`,`dark`,`system`],ze=[`white`,`g10`,`g90`,`g100`],Be=`ui-theme`,Ve={light:`white`,dark:`g100`},He=`(prefers-color-scheme: dark)`,Ue=`ui-theme-change`,x=globalThis,We=e=>Re.includes(e),Ge=e=>ze.includes(e);function Ke(e,t){return{light:Ge(e)?e:Ve.light,dark:Ge(t)?t:Ve.dark}}function qe(e,t,n=Ve){return e===`dark`||e===`system`&&t?n.dark:n.light}function Je(e){if(e===`auto`)return`system`;if(e===`white`||e===`g10`||e===`paper`)return`light`;if(e===`g90`||e===`g100`||e===`lacquer`)return`dark`}function Ye(){return!!x.matchMedia?.(He).matches}function Xe(e){if(e)try{let t=x.localStorage?.getItem(e);return We(t)?t:void 0}catch{return}}function Ze(e,t){if(e)try{x.localStorage?.setItem(e,t)}catch{}}function Qe(e,t){return Xe(e)??(We(t)?t:void 0)??Je(x.document?.documentElement.dataset.theme)??`light`}function $e(e,t=Ve){let n=st(ot(),qe(e,Ye(),t)),r=x.document?.documentElement;return r&&r.dataset.theme!==n&&(r.dataset.theme=n),n}function et(e){let t=x.matchMedia?.(He);return t?(t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)):()=>{}}var tt=[`carbon`,`kanok`],nt=`ui-design`,rt=`ui-design-change`,it=e=>tt.includes(e),at=globalThis;function ot(){let e=at.document?.documentElement.dataset.design;return it(e)?e:`carbon`}function st(e,t){if(e===`kanok`){if(t===`white`||t===`g10`)return`paper`;if(t===`g90`||t===`g100`)return`lacquer`}else{if(t===`paper`)return`white`;if(t===`lacquer`)return`g100`}return t}function ct(e,t=nt){if(t)try{x.localStorage?.setItem(t,e)}catch{}}function lt(e){let t=at.document;if(!t)return;let n=t.documentElement;e===`kanok`?n.dataset.design=`kanok`:n.removeAttribute(`data-design`),n.dataset.theme&&(n.dataset.theme=st(e,n.dataset.theme)),at.CustomEvent&&t.dispatchEvent(new at.CustomEvent(rt,{detail:{design:e}}))}var ut=`ui-docs-design`,dt=()=>{for(let e of document.querySelectorAll(`#doc-design`))e.setAttribute(`selected-index`,ot()===`kanok`?`1`:`0`)};document.addEventListener(`ui-change`,e=>{if(e.target.id!==`doc-design`)return;let{name:t}=e.detail;it(t)&&(lt(t),ct(t,ut))}),globalThis.addEventListener(`storage`,e=>{e.key===ut&&it(e.newValue)&&(lt(e.newValue),dt())}),dt();var ft=globalThis,pt=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,mt=Symbol(),ht=new WeakMap,gt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ht.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ht.set(t,e))}return e}toString(){return this.cssText}},_t=e=>new gt(typeof e==`string`?e:e+``,void 0,mt),S=(e,...t)=>new gt(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,mt),vt=(e,t)=>{if(pt)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=ft.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},yt=pt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _t(t)})(e):e,{is:bt,defineProperty:xt,getOwnPropertyDescriptor:St,getOwnPropertyNames:Ct,getOwnPropertySymbols:wt,getPrototypeOf:Tt}=Object,Et=globalThis,Dt=Et.trustedTypes,Ot=Dt?Dt.emptyScript:``,kt=Et.reactiveElementPolyfillSupport,At=(e,t)=>e,jt={toAttribute(e,t){switch(t){case Boolean:e=e?Ot:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Mt=(e,t)=>!bt(e,t),Nt={attribute:!0,type:String,converter:jt,reflect:!1,useDefault:!1,hasChanged:Mt};Symbol.metadata??=Symbol(`metadata`),Et.litPropertyMetadata??=new WeakMap;var Pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&xt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=St(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Nt}static _$Ei(){if(this.hasOwnProperty(At(`elementProperties`)))return;let e=Tt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(At(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At(`properties`))){let e=this.properties,t=[...Ct(e),...wt(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(yt(e))}else e!==void 0&&t.push(yt(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?jt:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?jt:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Mt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Pt.elementStyles=[],Pt.shadowRootOptions={mode:`open`},Pt[At(`elementProperties`)]=new Map,Pt[At(`finalized`)]=new Map,kt?.({ReactiveElement:Pt}),(Et.reactiveElementVersions??=[]).push(`2.1.2`);var Ft=globalThis,It=e=>e,Lt=Ft.trustedTypes,Rt=Lt?Lt.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,zt=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt=`?`+C,Vt=`<${Bt}>`,w=document,Ht=()=>w.createComment(``),Ut=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Wt=Array.isArray,Gt=e=>Wt(e)||typeof e?.[Symbol.iterator]==`function`,Kt=`[ 	
\f\r]`,qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jt=/-->/g,Yt=/>/g,T=RegExp(`>|${Kt}(?:([^\\s"'>=/]+)(${Kt}*=${Kt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Xt=/'/g,Zt=/"/g,Qt=/^(?:script|style|textarea|title)$/i,$t=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),E=$t(1),en=$t(2),tn=$t(3),D=Symbol.for(`lit-noChange`),O=Symbol.for(`lit-nothing`),nn=new WeakMap,k=w.createTreeWalker(w,129);function rn(e,t){if(!Wt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Rt===void 0?t:Rt.createHTML(t)}var an=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=qt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===qt?c[1]===`!--`?o=Jt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=T):(Qt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=T):o=Yt:o===T?c[0]===`>`?(o=i??qt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?T:c[3]===`"`?Zt:Xt):o===Zt||o===Xt?o=T:o===Jt||o===Yt?o=qt:(o=T,i=void 0);let d=o===T&&e[t+1].startsWith(`/>`)?` `:``;a+=o===qt?n+Vt:l>=0?(r.push(s),n.slice(0,l)+zt+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[rn(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},on=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=an(t,n);if(this.el=e.createElement(l,r),k.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=k.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(zt)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?un:r[1]===`?`?dn:r[1]===`@`?fn:ln}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Qt.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=Lt?Lt.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ht()),k.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ht())}}}else if(i.nodeType===8){if(i.data===Bt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}}a++}}static createElement(e,t){let n=w.createElement(`template`);return n.innerHTML=e,n}};function A(e,t,n=e,r){if(t===D)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ut(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=A(e,i._$AS(e,t.values),i,r)),t}var sn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);k.currentNode=r;let i=k.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new cn(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new pn(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=k.nextNode(),a++)}return k.currentNode=w,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},cn=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),Ut(e)?e===O||e==null||e===``?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==D&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Gt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&Ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=on.createElement(rn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new sn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=nn.get(e.strings);return t===void 0&&nn.set(e.strings,t=new on(e)),t}k(t){Wt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ht()),this.O(Ht()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=It(e).nextSibling;It(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ln=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=A(this,e,t,0),a=!Ut(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=A(this,r[n+o],t,o),s===D&&(s=this._$AH[o]),a||=!Ut(s)||s!==this._$AH[o],s===O?e=O:e!==O&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},un=class extends ln{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}},dn=class extends ln{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}},fn=class extends ln{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??O)===D)return;let n=this._$AH,r=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==O&&(n===O||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}},mn={M:zt,P:C,A:Bt,C:1,L:an,R:sn,D:Gt,V:A,I:cn,H:ln,N:dn,U:fn,B:un,F:pn},hn=Ft.litHtmlPolyfillSupport;hn?.(on,cn),(Ft.litHtmlVersions??=[]).push(`3.3.3`);var gn=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new cn(t.insertBefore(Ht(),e),e,void 0,n??{})}return i._$AI(e),i},_n=globalThis,j=class extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};j._$litElement$=!0,j.finalized=!0,_n.litElementHydrateSupport?.({LitElement:j});var vn=_n.litElementPolyfillSupport;vn?.({LitElement:j}),(_n.litElementVersions??=[]).push(`4.2.2`);var M=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},yn={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:Mt},bn=(e=yn,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function N(e){return(t,n)=>typeof n==`object`?bn(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function xn(e){return N({...e,state:!0,attribute:!1})}var Sn=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function P(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Sn(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Sn(n,r,{get(){return a(this)}})}}function Cn(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return Sn(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter(e=>e.matches(i))}})}}var wn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tn=e=>(...t)=>({_$litDirective$:e,values:t}),En=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Dn=Tn(class extends En{constructor(e){if(super(e),e.type!==wn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return D}}),F=e=>e??O,On=`important`,kn=` !`+On,An=Tn(class extends En{constructor(e){if(super(e),e.type!==wn.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(kn);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?On:``):n[e]=r}}return D}});function jn(e){return e.showError?{kind:`error`,text:e.errorText}:e.showWarn&&(e.warnText||e.hasWarn)?{kind:`warn`,text:e.warnText}:e.helperText||e.hasHelper?{kind:`helper`,text:e.helperText}:null}function Mn(e,t){if(t===void 0)return{over:!1,near:!1};let n=e>t;return{over:n,near:!n&&t-e<=Math.ceil(t*.1)}}var Nn=new Map;function Pn(e,t=`en`){if(typeof Intl>`u`||!(`Segmenter`in Intl))return e.match(/\p{L}+/gu)?.length??0;let n=Nn.get(t);n||(n=new Intl.Segmenter(t,{granularity:`word`}),Nn.set(t,n));let r=0;for(let{segment:t}of n.segment(e))/\p{L}/u.test(t)&&r++;return r}function Fn(e,t=`character`,n=`en`){return t===`word`?Pn(e,n):e.length}function In(e){switch(typeof e){case`undefined`:return``;case`string`:return e;case`object`:return e===null?``:Array.isArray(e)?e.map(In).join(`,`):e instanceof Date?e.toString():JSON.stringify(e);case`number`:case`boolean`:case`bigint`:case`symbol`:case`function`:return e.toString()}}var Ln=Symbol.for(`@purpurabog/ui:form-validation`);function Rn(){let e=globalThis;return e[Ln]??={validating:new Set,wrapped:new WeakSet,listening:!1},e[Ln]}function zn(e){let{validating:t}=Rn();t.size===0&&setTimeout(()=>t.clear()),t.add(e)}function Bn(e){let t=new Set;for(let n of e.composedPath())n instanceof HTMLFormElement?t.add(n):n instanceof HTMLElement&&`form`in n&&n.form instanceof HTMLFormElement&&t.add(n.form);return t}function Vn(){let e=Rn();if(e.listening)return;e.listening=!0;let t=e=>{for(let t of Bn(e))zn(t)};document.addEventListener(`click`,t,!0),document.addEventListener(`keydown`,e=>{e.key===`Enter`&&t(e)},!0)}function Hn(e){let{wrapped:t}=Rn();t.has(e)||(t.add(e),e.requestSubmit=t=>{zn(e),HTMLFormElement.prototype.requestSubmit.call(e,t)},e.reportValidity=()=>(zn(e),HTMLFormElement.prototype.reportValidity.call(e)))}var Un=new WeakSet,Wn=e=>[...e.elements].find(e=>e.matches(`:invalid`)),Gn=class{constructor(e,t={}){this.fieldsetDisabled=!1,this.captured=!1,this.onInvalid=e=>{e.preventDefault();let t=this.host.form,{validating:n}=Rn();(n.has(this.host)||t&&n.has(t))&&(this.options.reveal?.(),t&&Wn(t)===this.host&&(this.options.focus??(()=>this.host.focus()))())},this.host=e,this.options=t,e.addController(this)}get disabled(){return this.host.disabled||this.fieldsetDisabled||Qn(this.host)}setFieldsetDisabled(e){this.fieldsetDisabled!==e&&(this.fieldsetDisabled=e,this.host.requestUpdate(`fieldsetDisabled`,!e))}captureDefaults(e){this.captured||(this.captured=!0,e())}reportValidity(e){return zn(this.host),e.reportValidity()}hostConnected(){Vn(),this.options.implicitSubmission&&Un.add(this.host),this.host.addEventListener(`invalid`,this.onInvalid);let e=this.host.form;e&&Hn(e),this.names??=new MutationObserver(()=>this.host.requestUpdate()),this.names.observe(this.host,{attributes:!0,attributeFilter:[`aria-label`,`aria-labelledby`]})}hostDisconnected(){this.host.removeEventListener(`invalid`,this.onInvalid),this.names?.disconnect()}fallbackName(e,t){return e?``:this.outsideName(t)}outsideName(e){let t=this.host.getAttribute(`aria-label`)?.trim();if(t)return t;let n=this.host.getRootNode(),r=(this.host.getAttribute(`aria-labelledby`)?.trim().split(/\s+/)??[]).map(e=>Kn(n.getElementById?.(e)??null,this.host)).filter(Boolean);return r.length?r.join(` `):[...e.labels??[]].map(e=>Kn(e,this.host)).filter(Boolean).join(` `)}};function Kn(e,t){if(!e)return``;if(!e.contains(t))return e.textContent?.replaceAll(/\s+/g,` `).trim()??``;let n=``;for(let r of e.childNodes)r!==t&&(n+=` ${Kn(r,t)}`);return n.replaceAll(/\s+/g,` `).trim()}var qn=new Set([`text`,`search`,`url`,`tel`,`email`,`password`,`date`,`month`,`week`,`time`,`datetime-local`,`number`]);function Jn(e){return e instanceof HTMLButtonElement?e.type===`submit`:e instanceof HTMLInputElement?e.type===`submit`||e.type===`image`:e.localName===`ui-button`&&e.type===`submit`}var Yn=e=>e instanceof HTMLInputElement&&qn.has(e.type)||Un.has(e);function Xn(e){let t=[...e.elements],n=t.find(Jn);if(n){if(n.matches(`:disabled`)||Qn(n))return;(n.localName===`ui-button`?n.shadowRoot?.querySelector(`button`)??n:n).click()}else t.filter(Yn).length>1||(zn(e),e.requestSubmit())}var Zn=0,I=e=>`${e}-${Zn++}`,Qn=e=>typeof e.closest==`function`&&e.closest(`ui-form-group[disabled]`)!==null;function $n(e,t,n){return e?t||n||` `:n}var er=(e,t)=>e.validity.valueMissing?t:e.validationMessage,tr=(e,t,n)=>t&&!e?t:n;function nr(e,t){return t?(e.setFormValue(null),e.setValidity({}),!0):!1}var rr=e=>e.querySelector(`option[selected]`)?.value;function ir(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e instanceof HTMLElement?e:null}var ar={fromAttribute:e=>e!==`false`,toAttribute:e=>e?``:`false`},or=e=>e.stopPropagation(),sr=new WeakMap;function cr(e,t,n){let r=sr.get(e)??new Map;sr.set(e,r);let i=e.getAttribute(t);(i===null||i===r.get(t))&&(n===null?(e.removeAttribute(t),r.delete(t)):(e.setAttribute(t,n),r.set(t,n)))}var lr=(e,t)=>t.composedPath()[0]===e,ur=new Set([`checkbox`,`radio`,`range`,`button`,`submit`,`reset`,`file`,`color`,`image`]);function dr(e,t){if(t.key!==`Enter`||t.isComposing||t.keyCode===229||t.shiftKey||t.ctrlKey||t.metaKey||t.altKey)return;let n=t.composedPath()[0];n instanceof HTMLInputElement&&!ur.has(n.type)&&setTimeout(()=>{let n=e.form;!t.defaultPrevented&&n&&Xn(n)})}var fr=new Set;function pr(e,t,n){return t===`title`&&(n===null||(e.heading=n,e.removeAttribute(`title`),fr.has(e.localName)||(fr.add(e.localName),console.warn(`<${e.localName}>: the "title" attribute is deprecated (browsers show it as a tooltip); use "heading".`))),!0)}var mr=S`
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
        border: 0;
    }
`,hr=S`
    ${mr}

    /* Carbon label-01: 12px, secondary text; --ui-label-font / --ui-label-color let a design make it bolder */
    .label {
        display: inline-block;
        margin-bottom: var(--ui-space-xs);
        font: var(--ui-label-font, var(--ui-font-caption));
        letter-spacing: var(--ui-tracking-caption);
        color: var(--ui-label-color, var(--ui-ink-muted));
    }

    .helper,
    .warn,
    .error {
        margin: var(--ui-space-xxs) 0 0;
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
    }

    .helper {
        /* ink-muted, not ink-subtle: helper text must meet 4.5:1 */
        color: var(--ui-ink-muted);
    }

    /* Yellow text fails contrast — warning text stays ink, the icon carries the colour */
    .warn {
        color: var(--ui-ink);
    }

    .error {
        /* Carbon text-error: same as support-error in light themes, lighter in g90/g100 for contrast */
        color: var(--ui-error-text, var(--ui-error));
    }

    /* a disabled <fieldset>, or a disabled <ui-form-group> (its fieldset is in its shadow root: the group marks the fields) — Carbon fieldset[disabled] .cds--label */
    :host(:disabled) .label,
    :host(:disabled) .helper,
    :host([data-group-disabled]) .label,
    :host([data-group-disabled]) .helper {
        color: var(--ui-ink-disabled);
    }

    .with-icon {
        display: flex;
        align-items: flex-start;
        gap: var(--ui-space-xxs);
    }

    .status-icon {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .status-icon.status-error {
        fill: var(--ui-error);
    }

    .status-icon .warn-fill {
        fill: var(--ui-warning);
    }

    .status-icon .warn-mark {
        fill: var(--ui-ink);
    }

    @media (forced-colors: active) {
        .status-icon.status-error,
        .status-icon .warn-fill {
            fill: CanvasText;
        }
        .status-icon .warn-mark {
            fill: Canvas;
        }
    }
`,gr={error:`invalid-text`,warn:`warn-text`,helper:`helper-text`};function _r(e){let{slots:t}=e;return jn({...e,hasWarn:t?.has(gr.warn),hasHelper:t?.has(gr.helper)})}var vr=(e,t)=>t?`${e}-message`:void 0,yr={error:`error-text invalid-text`,warn:`warning-text warn-text`,helper:`helper-text`};function br(e,t,n=!1){if(!t)return O;let r=n?wr(t):O;return E`<p class="${t.kind} ${n?`with-icon`:``}" part=${yr[t.kind]} id="${e}-message">
        ${r}<span><slot name=${gr[t.kind]}>${t.text}</slot></span>
    </p>`}var xr=(e,t=``)=>E`<slot name="label">${e||(t?E`<span class="sr-only">${t}</span>`:O)}</slot>`,Sr=E`<svg class="status-icon status-error" part="status-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.55 3h1.1v5h-1.1V4ZM8 12.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>`,Cr=E`<svg class="status-icon status-warn" part="status-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path class="warn-fill" d="M8 1.5 15.2 14.5H.8Z" />
    <path class="warn-mark" d="M7.45 6h1.1v4.5h-1.1zM8 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>`;function wr(e){return e?.kind===`error`?Sr:e?.kind===`warn`?Cr:O}function Tr(e,t){let n=typeof e.closest==`function`&&e.closest(`ui-fluid-form`)!==null;return e.toggleAttribute(`data-fluid`,t||n),t||n}function Er(e,t){let n=t&&t.kind!==`helper`?t.kind:null;(e.dataset.status??null)!==n&&(n?e.dataset.status=n:delete e.dataset.status)}var Dr=(e,t)=>e.dataset[t]!==void 0,Or=S`
    /* --ui-fluid-background / -gap: a design can keep its fields' own fill and space stacked boxes apart (Carbon: they touch) */
    :host([data-fluid]) {
        display: flow-root; /* the box holds its children's margins (the text area's 32px) */
        position: relative;
        margin-block-end: var(--ui-fluid-gap, 0px);
        background-color: var(--ui-fluid-background, var(--ui-surface-1));
        border-radius: var(--ui-field-radius, 0); /* the box's ring follows the field's corners (Kanok: 6px) */
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
    }

    :host([data-fluid]) .top {
        display: contents;
    }

    :host([data-fluid]) .label {
        position: absolute;
        z-index: 1;
        inset-block-start: 13px;
        inset-inline-start: var(--ui-space-md);
        max-inline-size: calc(100% - 2 * var(--ui-space-md));
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none;
    }

    :host([data-fluid]) .counter {
        position: absolute;
        z-index: 1;
        inset-block-start: 13px;
        inset-inline-end: var(--ui-space-md);
    }

    /* Carbon's fluid fields have no helper line */
    :host([data-fluid]) .helper {
        display: none;
    }

    :host([data-fluid]) :is(.error, .warn) {
        position: relative;
        margin: 1px 0 0; /* the divider's row (Carbon <hr>) */
        padding: var(--ui-space-xs) 40px var(--ui-space-xs) var(--ui-space-md);
    }

    :host([data-fluid]) :is(.error, .warn)::before {
        content: '';
        position: absolute;
        inset-block-start: -1px;
        inset-inline: var(--ui-space-md);
        border-block-start: 1px solid var(--ui-hairline);
    }

    :host([data-fluid]) .status-icon {
        position: absolute;
        inset-block-start: var(--ui-fluid-icon-top, calc(100% + var(--ui-space-xs)));
        inset-inline-end: var(--ui-fluid-icon-end, 0);
    }

    :host([data-fluid][data-status='error']) {
        outline-color: var(--ui-error);
    }

    /* the warning's underline closes the box; drawn by the message (the box's last row), not :host, which a page-wide CSS reset would strip */
    :host([data-fluid][data-status='warn']) .warn {
        border-block-end: 1px solid var(--ui-ink-subtle);
    }

    /* the box carries focus (and status), so the control inside draws no outline or underline of its own */
    :host([data-fluid]:focus-within) {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    :host([data-fluid]) :is(input, textarea, select, .trigger) {
        outline: none;
        box-shadow: none; /* the box draws the halo */
        background-color: transparent;
    }

    /* a design whose control draws the box's visible edge (Kanok's outlined fields) colours it while the box has focus:
       the box's own ring lies under it (Carbon: the underline stays) */
    :host([data-fluid]:focus-within:not([readonly], [data-status])) :is(input, textarea, select, .trigger) {
        border-color: var(--ui-fluid-focus-border-color, var(--ui-ink-subtle)); /* read-only and a status keep their own edge */
    }

    :host([data-fluid][data-status]) :is(input, textarea, select, .trigger) {
        border-block-end-color: transparent;
    }

    :host([data-fluid][readonly]) {
        background-color: var(--ui-field-readonly-background, transparent);
    }

    @media (forced-colors: active) {
        :host([data-fluid]:focus-within) {
            outline-color: Highlight;
        }
    }
`,kr={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function Ar(e){let[t,n]=e.split(`-`);return[t,n??`center`]}function jr(e,t,n,r){return r===`start`?e:r===`end`?e+t-n:e+t/2-n/2}function Mr(e,t,n,r,i={}){let a=i.gap??8,o={top:e.top,left:e.left,width:e.width,height:e.height},s={width:t.width,height:t.height},c=n.top??0,l=n.left??0,u=c+n.height,d=l+n.width,ee=e=>{switch(e){case`top`:return o.top-a-(c+8);case`bottom`:return u-8-(o.top+o.height+a);case`left`:return o.left-a-(l+8);default:return d-8-(o.left+o.width+a)}},f=e=>e===`top`||e===`bottom`?s.height:s.width,[p,te]=Ar(r),ne=i.current&&(i.current===p||i.current===kr[p])?i.current:p,m=ne;if(ee(ne)<f(ne)){let e=kr[ne];(ee(e)>=f(e)||ee(e)>ee(ne))&&(m=e)}let h=m===`top`||m===`bottom`,g=te;h&&g!==`center`&&i.rtl&&(g=g===`start`?`end`:`start`);let re,_;h?(re=m===`top`?o.top-s.height-a:o.top+o.height+a,_=Nr(jr(o.left,o.width,s.width,g),s.width,l,d,o.left,o.width)):(re=Nr(jr(o.top,o.height,s.height,g),s.height,c,u,o.top,o.height),_=m===`left`?o.left-s.width-a:o.left+o.width+a);let ie=h?n.width:n.height,ae=Math.max(0,ee(m)),oe=Math.max(0,ie-16),v=Fr({top:c,left:l,width:n.width,height:n.height},i.clip),se=!v||o.top+o.height<=v.top||o.top>=v.top+v.height||o.left+o.width<=v.left||o.left>=v.left+v.width;return se&&(re=Pr(re,s.height,c,u),_=Pr(_,s.width,l,d)),{top:re,left:_,side:m,availableHeight:h?ae:oe,availableWidth:h?oe:ae,anchorHidden:se}}function Nr(e,t,n,r,i,a){return Math.min(Math.max(Pr(e,t,n,r),i-t),i+a)}function Pr(e,t,n,r){return Math.min(Math.max(e,n+8),Math.max(n+8,r-t-8))}function Fr(e,t){if(!t)return e;let n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.top+e.height,t.top+t.height),a=Math.min(e.left+e.width,t.left+t.width);return i>n&&a>r?{top:n,left:r,width:a-r,height:i-n}:null}function Ir(e,t,n){let r=n===`top`||n===`bottom`,i=r?e.left+e.width/2-t.left:e.top+e.height/2-t.top,a=r?t.width:t.height;return Math.min(Math.max(i,8),a-8)}var Lr=1,Rr=11;function zr(e,t){let n=[],r=e=>e.assignedSlot??e.parentNode??null,i=r(e);for(;i;)if(i.nodeType===Rr)i=i.host??null;else{if(i.nodeType===Lr){let{overflowX:e,overflowY:r}=t.getComputedStyle(i);/auto|scroll|overlay|hidden/.test(e+r)&&n.push(i)}i=r(i)}return n}function Br(e,t,n,r=globalThis){let i={passive:!0},a=zr(e,r);Jr(t).scrollers=a;for(let e of a)e.addEventListener(`scroll`,n,i);r.addEventListener(`scroll`,n,i),r.addEventListener(`resize`,n),r.visualViewport?.addEventListener(`resize`,n),r.visualViewport?.addEventListener(`scroll`,n);let o=r.ResizeObserver?new r.ResizeObserver(n):null;o?.observe(e),o?.observe(t);let s=e.getBoundingClientRect?.(),c,l=()=>{let t=e.getBoundingClientRect?.();t&&s&&(t.top!==s.top||t.left!==s.left||t.width!==s.width||t.height!==s.height)&&n(),s=t,c=r.requestAnimationFrame?.(l)};return c=r.requestAnimationFrame?.(l),()=>{for(let e of a)e.removeEventListener(`scroll`,n);r.removeEventListener(`scroll`,n),r.removeEventListener(`resize`,n),r.visualViewport?.removeEventListener(`resize`,n),r.visualViewport?.removeEventListener(`scroll`,n),o?.disconnect(),c!==void 0&&r.cancelAnimationFrame?.(c),$r(t)}}var Vr=10;function Hr(e,t){let n=null,r=e=>{e.pointerType===`touch`?n={id:e.pointerId,x:e.clientX,y:e.clientY}:t(e)},i=e=>{let r=n;r&&e.pointerId===r.id&&(n=null,Math.hypot(e.clientX-r.x,e.clientY-r.y)<=Vr&&t(e))},a=()=>{n=null},o=r,s=i;return e.addEventListener(`pointerdown`,o,!0),e.addEventListener(`pointerup`,s,!0),e.addEventListener(`pointercancel`,a,!0),()=>{e.removeEventListener(`pointerdown`,o,!0),e.removeEventListener(`pointerup`,s,!0),e.removeEventListener(`pointercancel`,a,!0)}}function Ur(e,t){let n=e.parentElement;for(;n&&n!==t&&n.scrollHeight<=n.clientHeight;)n=n.parentElement;let r=n??t,i=r.getBoundingClientRect().top+r.clientTop,a=i+r.clientHeight,o=e.getBoundingClientRect();o.top<i?r.scrollTop-=i-o.top:o.bottom>a&&(r.scrollTop+=o.bottom-a)}function Wr(e){try{return!!e.matches?.(`:popover-open, :modal`)}catch{return!1}}var Gr=0;function Kr(e,t,n){return!1}var qr=new WeakMap;function Jr(e){let t=qr.get(e);return t||(t={},qr.set(e,t)),t}function Yr(e){let t=e.document.documentElement,n=e.visualViewport;if(!n)return{top:0,left:0,width:t.clientWidth,height:t.clientHeight};let r=Math.max(0,n.offsetTop),i=Math.max(0,n.offsetLeft);return{top:r,left:i,width:Math.min(n.width,t.clientWidth-i),height:Math.min(n.height,t.clientHeight-r)}}function Xr(e){let t;for(let n of e){if(n.nodeName===`HTML`||n.nodeName===`BODY`||!n.getBoundingClientRect)continue;let e=n.getBoundingClientRect(),r={top:e.top+(n.clientTop??0),left:e.left+(n.clientLeft??0),width:n.clientWidth??e.width,height:n.clientHeight??e.height};if(!t){if(t=r,Wr(n))break;continue}let i=Math.max(t.top,r.top),a=Math.max(t.left,r.left),o=Math.min(t.top+t.height,r.top+r.height),s=Math.min(t.left+t.width,r.left+r.width);if(t={top:i,left:a,width:Math.max(0,s-a),height:Math.max(0,o-i)},Wr(n))break}return t}var Zr=(e,t)=>Math.round(e*t)/t;function Qr(e,t,n,r={},i=globalThis){let a=Jr(t);a.rtl??=i.getComputedStyle(e).direction===`rtl`,a.scrollers??=zr(e,i),r.size&&t.style.removeProperty(`--ui-available-height`);let o=e.getBoundingClientRect(),s=Mr(o,t.getBoundingClientRect(),Yr(i),n,{gap:r.gap,rtl:a.rtl,current:a.side,clip:Xr(a.scrollers)});a.side=s.side;let c=i.devicePixelRatio||1,l=Zr(s.top+i.scrollY+(r.nudgeY??0),c),u=Zr(s.left+i.scrollX,c),d=e;if(a.anchored&&a.anchored!==d&&(a.anchored.style?.removeProperty(`anchor-name`),a.anchored=void 0),a.anchored||Kr(d,t,i)){if(!a.anchored){a.anchored=d;let e=`--ui-popup-anchor-${++Gr}`;d.style.setProperty(`anchor-name`,e),t.style.setProperty(`position-anchor`,e)}let e=o.top+i.scrollY,n=o.left+i.scrollX;t.style.setProperty(`top`,`calc(anchor(top, ${e}px) + ${l-e}px)`),t.style.setProperty(`left`,`calc(anchor(left, ${n}px) + ${u-n}px)`)}else t.style.setProperty(`top`,`${l}px`),t.style.setProperty(`left`,`${u}px`);return r.size&&(t.style.setProperty(`--ui-available-height`,`${Math.floor(s.availableHeight)}px`),t.style.setProperty(`--ui-available-width`,`${Math.floor(s.availableWidth)}px`)),s.anchorHidden!==!!a.hidden&&(a.hidden=s.anchorHidden,s.anchorHidden?t.style.setProperty(`visibility`,`hidden`):t.style.removeProperty(`visibility`)),s}function $r(e){let t=qr.get(e);t?.hidden&&e.style.removeProperty(`visibility`),t?.anchored&&(t.anchored.style?.removeProperty(`anchor-name`),e.style.removeProperty(`position-anchor`)),qr.delete(e)}function ei(e,t,n,r=8,i={}){return Qr(e,t,n,{...i,gap:r}).side}function ti(e,t,n,r){let i=ei(e,t,n,r);return t.dataset.side=i,t.style.setProperty(`--_caret-pos`,`${Ir(e.getBoundingClientRect(),t.getBoundingClientRect(),i)}px`),i}var ni=S`
    .caret {
        position: absolute;
        width: var(--_caret-w, 12px);
        height: var(--_caret-h, 6px);
        background: inherit;
        pointer-events: none;
    }

    .bubble[data-side='top'] .caret {
        top: 100%;
        left: calc(var(--_caret-pos) - var(--_caret-w, 12px) / 2);
        clip-path: polygon(0 0, 100% 0, 50% 100%);
    }

    .bubble[data-side='bottom'] .caret {
        bottom: 100%;
        left: calc(var(--_caret-pos) - var(--_caret-w, 12px) / 2);
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }

    .bubble[data-side='left'] .caret,
    .bubble[data-side='right'] .caret {
        top: calc(var(--_caret-pos) - var(--_caret-w, 12px) / 2);
        width: var(--_caret-h, 6px);
        height: var(--_caret-w, 12px);
    }

    .bubble[data-side='left'] .caret {
        left: 100%;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
    }

    .bubble[data-side='right'] .caret {
        right: 100%;
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
    }
`,ri=e=>{class t extends e{get align(){return this.placement}set align(e){this.placement=e}static get observedAttributes(){return[...Reflect.get(e,`observedAttributes`,this),`align`]}attributeChangedCallback(e,t,n){e===`align`?n!==null&&(this.align=n):super.attributeChangedCallback(e,t,n)}}return t},ii=`hydrate-internals-`,ai=new WeakMap,oi=new WeakMap,si=()=>`${innerWidth}x${innerHeight}`,ci=new WeakMap,li=new Set,ui=S`
    :host([hidden]) {
        display: none;
    }
`,di=`input, textarea, select`;function fi(e){let t=[];return e.querySelectorAll(di).forEach((n,r)=>{let i={index:r,tag:n.localName,type:n.type,focused:e.activeElement===n};if(n instanceof HTMLSelectElement){let e=[...n.options].map(e=>e.selected);[...n.options].some(e=>e.selected!==e.defaultSelected)&&(i.selected=e)}else n instanceof HTMLInputElement&&(n.type===`checkbox`||n.type===`radio`)?n.checked!==n.defaultChecked&&(i.checked=n.checked):!(n instanceof HTMLInputElement&&n.type===`file`)&&n.value!==n.defaultValue&&(i.value=n.value,n.selectionStart!==null&&n.selectionEnd!==null&&(i.selection=[n.selectionStart,n.selectionEnd]));(i.focused||i.value!==void 0||i.checked!==void 0||i.selected)&&t.push(i)}),t}function pi(e,t){let n=[...e.querySelectorAll(di)];for(let e of t){let t=n[e.index];if(t&&t.localName===e.tag&&t.type===e.type&&(e.selected&&t instanceof HTMLSelectElement?(e.selected.forEach((e,n)=>{t.options[n]&&(t.options[n].selected=e)}),t.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0}))):e.checked!==void 0&&t instanceof HTMLInputElement?(t.checked=e.checked,t.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),t.dispatchEvent(new Event(`change`,{bubbles:!0}))):e.value!==void 0&&!(t instanceof HTMLSelectElement)&&(t.value=e.value,t.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,inputType:`insertText`}))),e.focused&&(t.focus(),e.selection&&!(t instanceof HTMLSelectElement))))try{t.setSelectionRange(...e.selection)}catch{}}}function mi(e){let t=ci.get(e);return t===void 0&&(t=e.elementStyles.some(e=>{let t=e instanceof CSSStyleSheet?e:e.styleSheet;return!!t&&[...t.cssRules].some(e=>e instanceof CSSMediaRule)}),ci.set(e,t)),t}var L=class extends j{static finalizeStyles(e){return[...super.finalizeStyles(e),ui]}static{this.hostStates=[]}get internals(){return this.attachedInternals??=this.attachInternals(),this.attachedInternals}setAttribute(e,t){super.setAttribute(e,t),this.syncState(e)}removeAttribute(e){super.removeAttribute(e),this.syncState(e)}toggleAttribute(e,t){let n=super.toggleAttribute(e,t);return this.syncState(e),n}syncState(e){if(!e.startsWith(`data-`))return;let t=e.slice(5);if(!this.constructor.hostStates.includes(t))return;let n=this.internals.states;if(!n)return;let r=this.hasAttribute(e);try{r?n.add(t):n.delete(t)}catch{r?n.add(`--${t}`):n.delete(`--${t}`)}}connectedCallback(){super.connectedCallback();let e=this.constructor;for(let t of e.hostStates)this.syncState(`data-${t}`);let t=ai.get(e)??0;ai.set(e,t+1);let n=oi.get(e);t===0&&n!==void 0&&n!==si()&&mi(e)&&(li.add(e),setTimeout(()=>li.delete(e))),li.has(e)&&this.updateComplete.then(()=>this.restyle())}restyle(){let e=this.renderRoot,t=e.firstElementChild;this.isConnected&&e.adoptedStyleSheets?.length&&t&&(getComputedStyle(t).display,e.adoptedStyleSheets=[...e.adoptedStyleSheets])}disconnectedCallback(){super.disconnectedCallback();let e=this.constructor,t=Math.max(0,(ai.get(e)??1)-1);ai.set(e,t),t===0&&oi.set(e,si())}createRenderRoot(){let e=this.shadowRoot;return e?this.reuseServerRoot(e):super.createRenderRoot()}reuseServerRoot(e){let t=fi(e);e.replaceChildren(),t.length&&this.updateComplete.then(()=>pi(this.renderRoot,t)),vt(e,this.constructor.elementStyles);for(let e of this.getAttributeNames())e.startsWith(ii)&&(this.removeAttribute(e.slice(18)),this.removeAttribute(e));return this.renderOptions.renderBefore??=e.firstChild,e}};function R(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var hi=100,gi=300;async function _i(e,t){let n=e;for(;!(t in n)&&n.shadowRoot;){await n.updateComplete;let e=vi(n.shadowRoot);if(!e)break;n=e}return n}function vi(e){for(let t of e.querySelectorAll(`*`))if(t.matches(`button, a[href], input, select, textarea, [tabindex]`)||t.shadowRoot?.delegatesFocus)return t;return null}var z=class extends ri(L){constructor(...e){super(...e),this.text=``,this.placement=`top`,this.asLabel=!1,this.small=!1,this.open=!1,this.pinned=!1,this.anchor=null,this.bubbleId=I(`ui-tooltip`),this.onPointerEnter=()=>{clearTimeout(this.timer),this.timer=globalThis.setTimeout(()=>this.open=!0,hi)},this.scheduleHide=()=>{this.pinned||(clearTimeout(this.timer),this.timer=globalThis.setTimeout(()=>this.open=!1,gi))},this.onFocusIn=e=>{e.composedPath()[0].matches(`:focus-visible`)&&(clearTimeout(this.timer),this.open=!0)},this.hide=()=>{this.pinned||(clearTimeout(this.timer),this.open=!1)},this.onActivate=e=>{(e.key===`Enter`||e.key===` `)&&this.hide()},this.onKeydown=e=>{e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.reposition=()=>this.position()}static{this.styles=[ni,S`
        :host {
            display: inline-block;
        }

        /* Carbon tooltip: high-contrast popover, 16px padding, body-01, 12×6 caret, 288px max */
        .bubble {
            --_caret-w: 12px;
            --_caret-h: 6px;

            position: absolute; /* document coordinates in the top layer: scrolls with the page, see position.ts */
            inset: auto;
            box-sizing: border-box;
            margin: 0;
            /* its natural width up to 288px wherever it sits: an absolute box near the viewport edge would shrink to the room left */
            width: max-content;
            max-width: 288px;
            padding: var(--ui-space-md);
            border: none;
            border-radius: var(--ui-tooltip-radius, var(--ui-radius-xs));
            background-color: var(--ui-inverse-surface-1);
            color: var(--ui-inverse-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            overflow-wrap: break-word;
            overflow: visible;
        }

        /* Carbon icon tooltip (the label of an icon-only button): 2px block padding, body-compact-01, 8×4 caret */
        :host([as-label]) .bubble,
        :host([small]) .bubble {
            --_caret-w: 8px;
            --_caret-h: 4px;

            padding: 2px var(--ui-space-md);
            line-height: 18px;
        }

        /* no fade: Carbon's tooltip shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}connectedCallback(){super.connectedCallback(),this.listen(this.anchor??this)}disconnectedCallback(){super.disconnectedCallback(),this.listen(void 0),clearTimeout(this.timer),document.removeEventListener(`keydown`,this.onKeydown,!0),this.untrack?.(),this.untrack=void 0,this.open=!1}listen(e){let t=this.listening;t!==e&&(t?.removeEventListener(`pointerenter`,this.onPointerEnter),t?.removeEventListener(`pointerleave`,this.scheduleHide),t?.removeEventListener(`focusin`,this.onFocusIn),t?.removeEventListener(`focusout`,this.hide),t?.removeEventListener(`click`,this.hide),t?.removeEventListener(`keydown`,this.onActivate),e?.addEventListener(`pointerenter`,this.onPointerEnter),e?.addEventListener(`pointerleave`,this.scheduleHide),e?.addEventListener(`focusin`,this.onFocusIn),e?.addEventListener(`focusout`,this.hide),e?.addEventListener(`click`,this.hide),e?.addEventListener(`keydown`,this.onActivate),this.listening=e)}get trigger(){return this.anchor??this.assigned[0]}updated(e){e.has(`anchor`)&&this.isConnected&&this.listen(this.anchor??this),(e.has(`text`)||e.has(`asLabel`)||e.has(`anchor`))&&this.wireAccessibility(),e.has(`open`)&&this.toggleBubble()}async wireAccessibility(){let e=this.trigger;if(!e)return;let t=this.asLabel?`label`:`description`,n=await _i(e,t);if(t in n){n[t]=this.text;return}if(this.asLabel){n.setAttribute(`aria-label`,this.text);return}if(this.anchor){n.setAttribute(`aria-description`,this.text);return}if(this.srText??=Object.assign(document.createElement(`span`),{id:this.bubbleId,hidden:!0}),this.srText.textContent=this.text,this.srText.isConnected||this.append(this.srText),n!==e){if(`ariaDescribedByElements`in Element.prototype){let e=n.ariaDescribedByElements??[];e.includes(this.srText)||(n.ariaDescribedByElements=[...e,this.srText])}else n.setAttribute(`aria-description`,this.text);return}let r=new Set((e.getAttribute(`aria-describedby`)??``).split(/\s+/).filter(Boolean));r.add(this.bubbleId),e.setAttribute(`aria-describedby`,[...r].join(` `))}toggleBubble(){let e=this.bubble;if(this.open&&this.text){e.matches(`:popover-open`)||e.showPopover(),this.position(),document.addEventListener(`keydown`,this.onKeydown,!0);let t=this.trigger;t&&(this.untrack??=Br(t,e,this.reposition))}else e.matches(`:popover-open`)&&e.hidePopover(),document.removeEventListener(`keydown`,this.onKeydown,!0),this.untrack?.(),this.untrack=void 0}position(){let e=this.trigger;e&&ti(e,this.bubble,this.placement,this.asLabel||this.small?8:12)}focus(e){this.trigger?.focus(e)}render(){return E`
            <slot @slotchange=${()=>this.wireAccessibility()}></slot>
            <div
                class="bubble"
                part="bubble"
                role="tooltip"
                popover="manual"
                aria-hidden="true"
                @pointerenter=${()=>clearTimeout(this.timer)}
                @pointerleave=${this.scheduleHide}
            >
                ${this.text}
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};R([N()],z.prototype,`text`,void 0),R([N({reflect:!0})],z.prototype,`placement`,void 0),R([N({type:Boolean,attribute:`as-label`})],z.prototype,`asLabel`,void 0),R([N({type:Boolean,reflect:!0})],z.prototype,`small`,void 0),R([N({type:Boolean,reflect:!0})],z.prototype,`open`,void 0),R([N({type:Boolean})],z.prototype,`pinned`,void 0),R([N({attribute:!1})],z.prototype,`anchor`,void 0),R([P(`.bubble`)],z.prototype,`bubble`,void 0),R([Cn()],z.prototype,`assigned`,void 0),z=R([M(`ui-tooltip`)],z);var yi={$code:`en`,$name:`English`,$dir:`ltr`,common:{notifications:`Notifications`,close:`Close`,closeNotification:`Close notification`,loading:`Loading`,moreInfo:`More information`,options:`Options`,breadcrumb:`Breadcrumb`,structuredList:`Structured list section`,select:`Select`,dismiss:`Dismiss {text}`,removeTab:`Remove {text} tab`,additionalActions:`Additional actions`,moreActions:`More actions`,skipToContent:`Skip to main content`,openMenu:`Open menu`,closeMenu:`Close menu`,mainNavigation:`Main navigation`,sideNavigation:`Side navigation`,globalActions:`Global actions`,opensInNewTab:`(opens in a new tab)`,stepComplete:`Complete`,stepCurrent:`Current`,stepIncomplete:`Incomplete`,stepInvalid:`Invalid`,loadingFinished:`Finished`,loadingError:`Error`,viewMore:`View more`,viewLess:`View less`,unknown:`Unknown`,back:`Back`,collapse:`Collapse`,expand:`Expand`,pageHeaderActions:`Page header actions`,moreBreadcrumbs:`More breadcrumbs`,moreTags:`{count} more tags`,viewAllTags:`View all tags`,allTags:`All tags`,searchAllTags:`Search all tags`,edit:`Edit`,save:`Save`,cancel:`Cancel`,editOff:`Edit off`,readOnlyField:`This field is read-only and cannot be edited`,theme:`Theme`,themeLight:`Light`,themeDark:`Dark`,themeSystem:`System`},field:{tooLong:`Use {max} characters or fewer.`,nearLimit:`Approaching the character limit`,tooManyWords:`Use {max} words or fewer.`,nearWordLimit:`Approaching the word limit`,showPassword:`Show password`,hidePassword:`Hide password`,decrement:`Decrement number`,increment:`Increment number`,requiredOne:`Please select an option.`,requiredAtLeastOne:`Select at least one option.`,required:`Fill out this field.`,search:`Search`,clearSearch:`Clear search input`,on:`On`,off:`Off`,sliderInput:`Slider number input`,sliderLower:`Lower bound`,sliderUpper:`Upper bound`,sliderCorrected:`The inputted value "{value}" was corrected to the nearest allowed digit.`,timeSelect:`Open list of options`,enterNumber:`Enter a number`,enterTime:`Enter a valid time`,rangeUnderflow:`Enter {min} or more.`,rangeOverflow:`Enter {max} or less.`},copy:{copy:`Copy to clipboard`,copied:`Copied!`,showMore:`Show more`,showLess:`Show less`},fileUploader:{addFile:`Add file`,dropHint:`Drag and drop files here or click to upload`,invalidType:`File type not supported`,tooLarge:`File is too large`,invalidBody:`Remove the file and choose another.`,removeFile:`Remove file`,uploading:`Uploading`,uploaded:`Uploaded`,required:`Add at least one file.`,filesChosen:e=>`${e} files`,tooMany:`Too many files`,tooManyBody:e=>`You can add up to ${e} files.`,totalTooLarge:`Total file size is too large`,totalTooLargeBody:e=>`All files together can be up to ${e}.`,uploadFailed:`Upload failed`,retry:`Retry upload`,cancelUpload:`Cancel upload`},pagination:{itemsPerPage:`Items per page:`,itemRange:`{min}–{max} of {total} items`,items:`{min}–{max} items`,pageRange:`of {total} pages`,page:`page {page}`,pageNumber:`Page number`,previousPage:`Previous page`,nextPage:`Next page`,navLabel:`Pagination`,navPrevious:`Previous`,navNext:`Next`,navPage:`Page`,navActivePage:`Active, Page`,navSelect:`Select page number`,navStatus:`Page {page} of {total}`},dataTable:{sortAscending:`Click to sort rows by {header} header in ascending order`,sortDescending:`Click to sort rows by {header} header in descending order`,unsort:`Click to unsort rows by {header} header`,selectAll:`Select all rows`,unselectAll:`Unselect all rows`,selectRow:`Select row`,unselectRow:`Unselect row`,selectedCount:e=>`${e} ${e===1?`item`:`items`} selected`,cancel:`Cancel`,toolbar:`Data table toolbar`,searchLabel:`Filter table`,searchPlaceholder:`Filter table`,expandRow:`Expand current row`,collapseRow:`Collapse current row`,expandAll:`Expand all rows`,collapseAll:`Collapse all rows`,sorted:(e,t)=>`Sorted by ${e}, ${t}`,unsorted:`Sorting removed`,rowsShown:(e,t)=>`${e} of ${t} rows`,editHint:`Press Enter to edit`,resizeColumn:e=>`Resize ${e} column`,columnWidth:e=>`${e} pixels`,loading:`Loading data`,noRows:`No data`,noResults:`No results found. Try a different search.`,selectAllCount:e=>`Select all (${e})`,columns:`Columns`,resetColumns:`Reset`,exportCsv:`Export CSV`},list:{required:`Please select an option.`,clear:`Clear`,openList:`Open list`,closeList:`Close list`,noResults:`No matching items`,searching:`Searching…`,loadingOptions:`Loading…`,selectAll:`Select all`,clearAll:`Clear all selected items`,selectedCount:e=>`Total items selected: ${e}`},datePicker:{weekdays:[`S`,`M`,`T`,`W`,`Th`,`F`,`S`],chooseDate:`Choose date`,previousMonth:`Previous month`,nextMonth:`Next month`,year:`Year`,increaseYear:`Next year`,decreaseYear:`Previous year`,pattern:e=>e,hint:e=>`Format: ${e}`,badFormat:e=>`Enter a valid date as ${e}.`,incomplete:`Enter a day, month and year.`,impossible:`Enter a real date; check the day and month.`,badEra:e=>`Enter the year in Buddhist Era, e.g. ${e}.`,required:`Please enter a date.`,dateDisabled:`This date is not available.`,clear:`Clear date`,today:`Today`,endBeforeStart:`End date must be on or after the start date.`,beforeMin:e=>`Date must be on or after ${e}.`,afterMax:e=>`Date must be on or before ${e}.`}},bi={$code:`th`,$name:`ไทย`,$dir:`ltr`,common:{notifications:`การแจ้งเตือน`,close:`ปิด`,closeNotification:`ปิดการแจ้งเตือน`,loading:`กำลังโหลด`,moreInfo:`ข้อมูลเพิ่มเติม`,options:`ตัวเลือก`,breadcrumb:`เส้นทางหน้า`,structuredList:`รายการแบบตาราง`,select:`เลือก`,dismiss:`ลบ {text}`,removeTab:`ปิดแท็บ {text}`,additionalActions:`การกระทำเพิ่มเติม`,moreActions:`การกระทำอื่น`,skipToContent:`ข้ามไปยังเนื้อหาหลัก`,openMenu:`เปิดเมนู`,closeMenu:`ปิดเมนู`,mainNavigation:`เมนูหลัก`,sideNavigation:`เมนูด้านข้าง`,globalActions:`การกระทำส่วนกลาง`,opensInNewTab:`(เปิดในแท็บใหม่)`,stepComplete:`เสร็จแล้ว`,stepCurrent:`ขั้นปัจจุบัน`,stepIncomplete:`ยังไม่ถึง`,stepInvalid:`ไม่ถูกต้อง`,loadingFinished:`เสร็จแล้ว`,loadingError:`เกิดข้อผิดพลาด`,viewMore:`ดูเพิ่มเติม`,viewLess:`ดูน้อยลง`,unknown:`ไม่ทราบ`,back:`ย้อนกลับ`,collapse:`ย่อ`,expand:`ขยาย`,pageHeaderActions:`การดำเนินการของหน้า`,moreBreadcrumbs:`เส้นทางเพิ่มเติม`,moreTags:`แท็กอื่นอีก {count} รายการ`,viewAllTags:`ดูแท็กทั้งหมด`,allTags:`แท็กทั้งหมด`,searchAllTags:`ค้นหาแท็กทั้งหมด`,edit:`แก้ไข`,save:`บันทึก`,cancel:`ยกเลิก`,editOff:`แก้ไขไม่ได้`,readOnlyField:`ช่องนี้อ่านได้อย่างเดียว แก้ไขไม่ได้`,theme:`ธีม`,themeLight:`สว่าง`,themeDark:`มืด`,themeSystem:`ตามระบบ`},field:{tooLong:`กรอกได้ไม่เกิน {max} ตัวอักษร`,nearLimit:`ใกล้ครบจำนวนตัวอักษรที่กำหนด`,tooManyWords:`กรอกได้ไม่เกิน {max} คำ`,nearWordLimit:`ใกล้ครบจำนวนคำที่กำหนด`,showPassword:`แสดงรหัสผ่าน`,hidePassword:`ซ่อนรหัสผ่าน`,decrement:`ลดค่า`,increment:`เพิ่มค่า`,requiredOne:`กรุณาเลือกรายการ`,requiredAtLeastOne:`กรุณาเลือกอย่างน้อยหนึ่งรายการ`,required:`กรุณากรอกข้อมูล`,search:`ค้นหา`,clearSearch:`ล้างคำค้นหา`,on:`เปิด`,off:`ปิด`,sliderInput:`ช่องกรอกค่าของแถบเลื่อน`,sliderLower:`ขอบล่าง`,sliderUpper:`ขอบบน`,sliderCorrected:`ค่า "{value}" ที่กรอกถูกปรับเป็นค่าที่ใกล้ที่สุดที่อนุญาต`,timeSelect:`เปิดรายการตัวเลือก`,enterNumber:`กรุณากรอกตัวเลข`,enterTime:`กรุณากรอกเวลาให้ถูกต้อง`,rangeUnderflow:`กรุณากรอกค่าตั้งแต่ {min} ขึ้นไป`,rangeOverflow:`กรุณากรอกค่าไม่เกิน {max}`},copy:{copy:`คัดลอก`,copied:`คัดลอกแล้ว`,showMore:`แสดงเพิ่มเติม`,showLess:`แสดงน้อยลง`},fileUploader:{addFile:`เพิ่มไฟล์`,dropHint:`ลากไฟล์มาวางที่นี่ หรือคลิกเพื่ออัปโหลด`,invalidType:`ไม่รองรับไฟล์ประเภทนี้`,tooLarge:`ไฟล์มีขนาดใหญ่เกินไป`,invalidBody:`ลบไฟล์นี้ออกแล้วเลือกไฟล์อื่น`,removeFile:`ลบไฟล์`,uploading:`กำลังอัปโหลด`,uploaded:`อัปโหลดแล้ว`,required:`กรุณาเพิ่มไฟล์อย่างน้อยหนึ่งไฟล์`,filesChosen:e=>`${e} ไฟล์`,tooMany:`จำนวนไฟล์เกินกำหนด`,tooManyBody:e=>`เพิ่มไฟล์ได้สูงสุด ${e} ไฟล์`,totalTooLarge:`ขนาดไฟล์รวมใหญ่เกินไป`,totalTooLargeBody:e=>`ขนาดรวมของทุกไฟล์ต้องไม่เกิน ${e}`,uploadFailed:`อัปโหลดไม่สำเร็จ`,retry:`ลองอัปโหลดอีกครั้ง`,cancelUpload:`ยกเลิกการอัปโหลด`},pagination:{itemsPerPage:`รายการต่อหน้า:`,itemRange:`{min}–{max} จาก {total} รายการ`,items:`{min}–{max} รายการ`,pageRange:`จาก {total} หน้า`,page:`หน้า {page}`,pageNumber:`หมายเลขหน้า`,previousPage:`หน้าก่อนหน้า`,nextPage:`หน้าถัดไป`,navLabel:`การแบ่งหน้า`,navPrevious:`ก่อนหน้า`,navNext:`ถัดไป`,navPage:`หน้า`,navActivePage:`หน้าปัจจุบัน, หน้า`,navSelect:`เลือกหมายเลขหน้า`,navStatus:`หน้า {page} จาก {total}`},dataTable:{sortAscending:`คลิกเพื่อเรียงแถวตามคอลัมน์ {header} จากน้อยไปมาก`,sortDescending:`คลิกเพื่อเรียงแถวตามคอลัมน์ {header} จากมากไปน้อย`,unsort:`คลิกเพื่อยกเลิกการเรียงตามคอลัมน์ {header}`,selectAll:`เลือกทุกแถว`,unselectAll:`ยกเลิกการเลือกทุกแถว`,selectRow:`เลือกแถว`,unselectRow:`ยกเลิกการเลือกแถว`,selectedCount:e=>`เลือกแล้ว ${e} รายการ`,cancel:`ยกเลิก`,toolbar:`แถบเครื่องมือตาราง`,searchLabel:`กรองตาราง`,searchPlaceholder:`กรองตาราง`,expandRow:`ขยายแถวนี้`,collapseRow:`ยุบแถวนี้`,expandAll:`ขยายทุกแถว`,collapseAll:`ยุบทุกแถว`,sorted:(e,t)=>`เรียงตามคอลัมน์ ${e} ${t===`ascending`?`จากน้อยไปมาก`:`จากมากไปน้อย`}`,unsorted:`ยกเลิกการเรียงแล้ว`,rowsShown:(e,t)=>`แสดง ${e} จาก ${t} แถว`,editHint:`กด Enter เพื่อแก้ไข`,resizeColumn:e=>`ปรับความกว้างคอลัมน์ ${e}`,columnWidth:e=>`${e} พิกเซล`,loading:`กำลังโหลดข้อมูล`,noRows:`ไม่มีข้อมูล`,noResults:`ไม่พบข้อมูลที่ค้นหา ลองใช้คำค้นอื่น`,selectAllCount:e=>`เลือกทั้งหมด (${e})`,columns:`คอลัมน์`,resetColumns:`คืนค่าเริ่มต้น`,exportCsv:`ส่งออก CSV`},list:{required:`กรุณาเลือกรายการ`,clear:`ล้างค่า`,openList:`เปิดรายการ`,closeList:`ปิดรายการ`,noResults:`ไม่พบรายการที่ตรงกัน`,searching:`กำลังค้นหา…`,loadingOptions:`กำลังโหลด…`,selectAll:`เลือกทั้งหมด`,clearAll:`ล้างรายการที่เลือกทั้งหมด`,selectedCount:e=>`เลือกแล้ว ${e} รายการ`},datePicker:{chooseDate:`เลือกวันที่`,previousMonth:`เดือนก่อนหน้า`,nextMonth:`เดือนถัดไป`,year:`ปี`,increaseYear:`ปีถัดไป`,decreaseYear:`ปีก่อนหน้า`,pattern:e=>e.replace(`dd`,`วว`).replace(`mm`,`ดด`).replace(`yyyy`,`ปปปป`),hint:e=>`รูปแบบ: ${e}`,badFormat:e=>`กรุณากรอกวันที่ให้ถูกต้องตามรูปแบบ ${e}`,incomplete:`กรุณากรอกวันที่ให้ครบ วัน เดือน และปี`,impossible:`วันที่นี้ไม่มีอยู่จริง กรุณาตรวจสอบวันและเดือน`,badEra:e=>`กรุณากรอกปีเป็น พ.ศ. เช่น ${e}`,required:`กรุณากรอกวันที่`,dateDisabled:`วันที่นี้ไม่สามารถเลือกได้`,clear:`ล้างวันที่`,today:`วันนี้`,endBeforeStart:`วันสิ้นสุดต้องไม่ก่อนวันเริ่มต้น`,beforeMin:e=>`วันที่ต้องไม่ก่อน ${e}`,afterMax:e=>`วันที่ต้องไม่หลัง ${e}`}},xi=new Map,Si=new Set;function Ci(...e){for(let t of e)xi.set(t.$code.toLowerCase(),t);for(let e of Si)e()}function wi(e){return Si.add(e),()=>Si.delete(e)}function Ti(e){let t=e.toLowerCase();return xi.get(t)??xi.get(t.split(`-`)[0])??xi.get(`en`)}Ci(yi,bi);var Ei=new Set;wi(()=>{for(let e of Ei)e.requestUpdate()});var Di=new Map;function Oi(e){if(typeof MutationObserver>`u`)return;let t=Di.get(e);if(t){t.users++;return}let n=new MutationObserver(()=>{for(let e of Ei)e.requestUpdate()});n.observe(e,{attributes:!0,attributeFilter:[`lang`,`dir`],subtree:!0}),Di.set(e,{observer:n,users:1})}function ki(e){let t=Di.get(e);!t||--t.users>0||(t.observer.disconnect(),Di.delete(e))}var B=class{constructor(e){this.trees=[],this.host=e,e.addController(this)}hostConnected(){Ei.add(this.host);let e=typeof this.host.getRootNode==`function`?this.host.getRootNode():null;this.trees=[globalThis.document,e].filter((e,t,n)=>!!e&&n.indexOf(e)===t);for(let e of this.trees)Oi(e)}hostDisconnected(){Ei.delete(this.host);for(let e of this.trees)ki(e);this.trees=[]}inherited(e){return typeof this.host.closest==`function`?this.host.closest(`[${e}]`)?.getAttribute(e)||globalThis.document?.documentElement.getAttribute(e)||``:this.host.getAttribute(e)??``}lang(){return this.inherited(`lang`)||globalThis.navigator?.language||`en`}dir(){let e=this.inherited(`dir`);return e===`rtl`||e===`ltr`?e:this.t.$dir}get t(){return Ti(this.lang())}},Ai=E`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" /><path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" /></svg>`;async function ji(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{n=!1}return t.remove(),n}}var V=class extends ri(L){constructor(...e){super(...e),this.text=``,this.localize=new B(this),this.label=``,this.feedback=``,this.feedbackTimeout=2e3,this.placement=`bottom`,this.size=`md`,this.disabled=!1,this.copied=!1}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[mr,S`
        :host {
            display: inline-block;
        }

        .copy {
            display: flex;
            align-items: center;
            justify-content: center;
            inline-size: var(--_s, 40px);
            block-size: var(--_s, 40px);
            padding: 0;
            border: none;
            /* Carbon: a layer-coloured square; a design can round it and leave it clear until hovered */
            border-radius: var(--ui-copy-button-radius, 0);
            background-color: var(--ui-copy-button-background, var(--ui-surface-1));
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            /* Carbon .cds--btn: the fill and the ring change in fast-01 with the entrance easing */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                outline var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        :host([size='sm']) .copy {
            --_s: 32px;
        }

        .copy:hover {
            background-color: var(--ui-ghost-hover);
        }

        .copy:active {
            background-color: var(--ui-ghost-active);
        }

        .copy:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        .copy:disabled {
            background-color: var(--ui-copy-button-background, var(--ui-surface-1));
            color: var(--ui-icon-disabled);
            cursor: not-allowed;
        }

        svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
            transition: fill var(--ui-duration-fast) var(--ui-easing);
        }

        @media (forced-colors: active) {
            .copy {
                border: 1px solid CanvasText;
                color: CanvasText;
            }

            .copy:disabled {
                color: GrayText;
            }
        }

    `]}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer)}async onClick(){let e=new CustomEvent(`ui-copy`,{detail:{text:this.text},bubbles:!0,composed:!0,cancelable:!0});(!this.dispatchEvent(e)||await ji(this.text))&&this.showFeedback()}showFeedback(){clearTimeout(this.timer),this.copied=!0,this.tooltip.pinned=!0,this.tooltip.open=!0,this.timer=globalThis.setTimeout(()=>{this.copied=!1,this.tooltip.pinned=!1,this.tooltip.open=!1},this.feedbackTimeout)}render(){return E`
            <ui-tooltip as-label text=${this.copied?this.feedback||this.localize.t.copy.copied:this.label||this.localize.t.copy.copy} placement=${this.placement}>
                <button class="copy" part="button" type="button" tabindex="0" ?disabled=${this.disabled} @click=${this.onClick}>${Ai}</button>
            </ui-tooltip>
            <span class="sr-only" role="status">${this.copied?this.feedback||this.localize.t.copy.copied:``}</span>
        `}};R([N()],V.prototype,`text`,void 0),R([N()],V.prototype,`label`,void 0),R([N()],V.prototype,`feedback`,void 0),R([N({type:Number,attribute:`feedback-timeout`})],V.prototype,`feedbackTimeout`,void 0),R([N()],V.prototype,`placement`,void 0),R([N({reflect:!0})],V.prototype,`size`,void 0),R([N({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),R([N({type:Boolean,reflect:!0,attribute:`data-copied`})],V.prototype,`copied`,void 0),R([P(`ui-tooltip`)],V.prototype,`tooltip`,void 0),V=R([M(`ui-copy-button`)],V);var Mi={maxCollapsedRows:15,maxExpandedRows:0,minCollapsedRows:3,minExpandedRows:16};function Ni(e,t){return t.maxCollapsedRows>0&&(t.maxExpandedRows<=0||t.maxExpandedRows>t.maxCollapsedRows)&&e>t.maxCollapsedRows*16}function Pi(e,t){return t.minExpandedRows>0&&e<=t.minExpandedRows*16}function Fi(e,t){let n=e?t.maxExpandedRows:t.maxCollapsedRows,r=e?t.minExpandedRows:t.minCollapsedRows;return{max:n>0?n*16:void 0,min:r>0?r*16:void 0}}function Ii(e,t){return e||t.replace(/^\n/,``)}var Li=E`<svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>`,H=class extends ri(L){constructor(...e){super(...e),this.type=`single`,this.localize=new B(this),this.text=``,this.label=``,this.copyLabel=``,this.feedback=``,this.feedbackTimeout=2e3,this.placement=`bottom`,this.hideCopyButton=!1,this.wrapText=!1,this.disabled=!1,this.expanded=!1,this.showMoreText=``,this.showLessText=``,this.maxCollapsedRows=15,this.maxExpandedRows=0,this.minCollapsedRows=3,this.minExpandedRows=16,this.canExpand=!1,this.copied=!1}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[mr,S`
        :host {
            display: block;
            position: relative;
            inline-size: 100%;
            max-inline-size: 768px;
            font-family: var(--ui-font-family);
        }

        :host([type='inline']) {
            display: inline;
            inline-size: auto;
            max-inline-size: none;
        }

        code,
        pre {
            margin: 0;
            font: var(--ui-font-code);
            letter-spacing: var(--ui-tracking-code);
            color: var(--ui-ink);
        }

        pre {
            white-space: pre;
        }

        /* ---- single ---- */
        .single {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 40px;
            padding-inline-end: 40px;
            border-radius: var(--ui-code-radius, 0); /* square in Carbon; Kanok 8px */
            background-color: var(--ui-code-background, var(--ui-surface-1));
        }

        .single.no-copy {
            padding: 0;
        }

        .single .container {
            position: relative;
            display: flex;
            align-items: center;
            block-size: 100%;
            inline-size: 100%;
            overflow-x: auto;
            padding-inline-start: var(--ui-space-md);
            outline: none;
        }

        .single .container:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
            border-radius: var(--ui-code-radius, 0); /* the snippet's own corners (Kanok: 8px) */
        }

        .single pre {
            padding-inline-end: var(--ui-space-xs);
        }

        /* ---- multi ---- */
        .multi {
            position: relative;
            display: flex;
            box-sizing: border-box;
            padding: var(--ui-space-md);
            border-radius: var(--ui-code-radius, 0);
            background-color: var(--ui-code-background, var(--ui-surface-1));
        }

        .multi .container {
            position: relative;
            order: 1;
            inline-size: 100%;
            overflow-y: auto;
            transition: max-height var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon moderate-01 */
        }

        .multi pre {
            padding-inline-end: 40px;
            outline: none;
        }

        .multi pre:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: 0;
            border-radius: var(--ui-link-focus-radius, 0); /* inside the snippet's padding (Kanok: 4px) */
        }

        .multi.no-copy pre {
            padding-inline-end: 0;
        }

        .multi.expanded .container {
            padding-block-end: var(--ui-space-md);
        }

        .multi.wrap pre {
            white-space: pre-wrap;
            overflow-wrap: break-word;
        }

        .multi code {
            display: block;
            overflow: hidden;
        }

        .copy-button {
            position: absolute;
            inset-block-start: 0;
            inset-inline-end: 0;
            z-index: 10;
        }

        .multi .copy-button {
            inset-block-start: var(--ui-space-xs);
            inset-inline-end: var(--ui-space-xs);
        }

        .expand {
            position: absolute;
            z-index: 10;
            inset-block-end: 0;
            inset-inline-end: 0;
            display: inline-flex;
            align-items: center;
            block-size: 32px;
            padding: var(--ui-space-xs) var(--ui-space-md);
            border: 0;
            border-end-end-radius: var(--ui-code-radius, 0); /* it sits in the snippet's corner */
            background-color: var(--ui-code-background, var(--ui-surface-1));
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            cursor: pointer;
            outline: none;
            /* Carbon .cds--btn: the fill and the ring change in fast-01 with the entrance easing */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                outline var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        .expand:hover {
            background-color: var(--ui-ghost-hover);
        }

        .expand:active {
            background-color: var(--ui-ghost-active);
        }

        .expand:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: var(--ui-focus-offset, -2px);
        }

        .expand .text {
            position: relative;
            inset-block-start: -1px;
        }

        .chevron {
            width: 16px;
            height: 16px;
            margin-inline-start: var(--ui-space-xs);
            fill: var(--ui-icon-primary);
            transition: all var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon moderate-01; collapsing */
        }

        /* opening, Carbon turns it with $transition-expansion (300ms, no token) and the browser's ease */
        .expanded .chevron {
            transform: rotate(180deg);
            transition: transform 300ms;
        }

        @media (prefers-reduced-motion: reduce) {
            .expanded .chevron {
                transition: none;
            }
        }

        /* ---- inline ---- */
        .inline {
            position: relative;
            display: inline;
            box-sizing: border-box;
            block-size: 20px;
            min-block-size: 20px;
            padding: 0;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: var(--ui-code-background, var(--ui-surface-1));
            color: var(--ui-ink);
            font: var(--ui-font-code);
            letter-spacing: var(--ui-tracking-code);
            cursor: pointer;
            outline: none;
        }

        .inline code {
            padding: 0 var(--ui-space-xs);
            white-space: pre;
        }

        .inline:hover {
            background-color: var(--ui-ghost-hover);
        }

        .inline:active {
            background-color: var(--ui-ghost-active);
        }

        .inline:focus-visible {
            border-color: var(--ui-focus);
        }

        .inline.no-copy {
            display: inline-block;
            cursor: auto;
        }

        .inline.no-copy:hover {
            background-color: var(--ui-code-background, var(--ui-surface-1));
        }

        /* ---- disabled ---- */
        .disabled,
        .disabled .expand,
        .disabled .inline {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        .disabled code,
        .disabled pre {
            color: var(--ui-ink-disabled);
        }

        .disabled .expand:hover,
        .disabled .inline:hover {
            background-color: var(--ui-code-background, var(--ui-surface-1));
        }

        .disabled .chevron {
            fill: var(--ui-icon-disabled);
        }

        @media (forced-colors: active) {
            .single,
            .multi,
            .inline {
                outline: 1px solid CanvasText;
            }
        }
    `]}connectedCallback(){super.connectedCallback(),this.observer??=new ResizeObserver(()=>this.measure()),this.hasUpdated&&this.codeEl&&this.observer.observe(this.codeEl)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),clearTimeout(this.timer)}firstUpdated(){this.codeEl&&this.observer?.observe(this.codeEl)}updated(e){e.has(`type`)&&this.codeEl&&(this.observer?.disconnect(),this.observer?.observe(this.codeEl)),e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}get copyText(){return Ii(this.text,this.textContent??``)}measure(){if(this.type!==`multi`||!this.codeEl){this.canExpand=!1;return}let e=this.codeEl.getBoundingClientRect().height;this.canExpand=Ni(e,this.rows),this.expanded&&Pi(e,this.rows)&&(this.expanded=!1)}get rows(){return{maxCollapsedRows:this.maxCollapsedRows,maxExpandedRows:this.maxExpandedRows,minCollapsedRows:this.minCollapsedRows,minExpandedRows:this.minExpandedRows}}onSlotChange(){let e=this.firstChild;e?.nodeType===Node.TEXT_NODE&&e.textContent?.startsWith(`
`)&&(e.textContent=e.textContent.slice(1)),this.measure(),this.requestUpdate()}containerStyle(){if(this.type!==`multi`)return{};let{max:e,min:t}=Fi(this.expanded,this.rows);return{maxHeight:e===void 0?null:`${e}px`,minHeight:t===void 0?null:`${t}px`}}async copyInline(){if(this.disabled)return;let e=new CustomEvent(`ui-copy`,{detail:{text:this.copyText},bubbles:!0,composed:!0,cancelable:!0});if(this.dispatchEvent(e)&&!await ji(this.copyText))return;let t=this.inlineTooltip;t&&(clearTimeout(this.timer),this.copied=!0,t.pinned=!0,t.open=!0,this.timer=globalThis.setTimeout(()=>{this.copied=!1,t.pinned=!1,t.open=!1},this.feedbackTimeout))}renderInline(){let e=E`<code part="code"><slot @slotchange=${this.onSlotChange}></slot></code>`;return this.hideCopyButton?E`<span class="inline no-copy ${Dn({disabled:this.disabled})}">${e}</span>`:E`<ui-tooltip small text=${this.copied?this.feedback||this.localize.t.copy.copied:this.label||this.localize.t.copy.copy} placement=${this.placement}>
            <button class="inline ${Dn({disabled:this.disabled})}" type="button" aria-disabled=${F(this.disabled?`true`:void 0)} @click=${this.copyInline}>${e}</button>
        </ui-tooltip><span class="sr-only" role="status">${this.copied?this.feedback||this.localize.t.copy.copied:``}</span>`}renderCopyButton(e){return this.hideCopyButton?O:E`<ui-copy-button
            class="copy-button"
            part="copy-button"
            size=${e}
            .text=${this.copyText}
            label=${this.copyLabel||this.localize.t.copy.copy}
            feedback=${this.feedback||this.localize.t.copy.copied}
            feedback-timeout=${this.feedbackTimeout}
            placement=${this.placement}
            ?disabled=${this.disabled}
        ></ui-copy-button>`}renderSingle(){let e=!this.disabled;return E`<div class="single ${Dn({"no-copy":this.hideCopyButton,disabled:this.disabled})}">
            <div class="container" part="container" role="textbox" tabindex=${F(e?0:void 0)} aria-label=${this.label||this.localize.t.copy.copy} aria-readonly="true">
                <pre><code part="code"><slot @slotchange=${this.onSlotChange}></slot></code></pre>
            </div>
            ${this.renderCopyButton(`md`)}
        </div>`}renderExpandButton(){if(!this.canExpand)return O;let e=this.expanded?this.showLessText||this.localize.t.copy.showLess:this.showMoreText||this.localize.t.copy.showMore;return E`<button class="expand" part="expand-button" type="button" aria-expanded=${this.expanded?`true`:`false`} ?disabled=${this.disabled} @click=${()=>this.expanded=!this.expanded}>
            <span class="text">${e}</span>${Li}
        </button>`}renderMulti(){let e=!this.disabled;return E`<div class="multi ${Dn({"no-copy":this.hideCopyButton,expanded:this.expanded,wrap:this.wrapText,disabled:this.disabled})}">
            <div class="container" part="container" style=${An(this.containerStyle())}>
                <pre role="textbox" tabindex=${F(e?0:void 0)} aria-label=${this.label||this.localize.t.copy.copy} aria-readonly="true" aria-multiline="true"><code part="code"><slot @slotchange=${this.onSlotChange}></slot></code></pre>
            </div>
            ${this.renderCopyButton(`sm`)}
            ${this.renderExpandButton()}
        </div>`}render(){return this.type===`inline`?this.renderInline():this.type===`multi`?this.renderMulti():this.renderSingle()}};R([N({reflect:!0})],H.prototype,`type`,void 0),R([N()],H.prototype,`text`,void 0),R([N()],H.prototype,`label`,void 0),R([N({attribute:`copy-label`})],H.prototype,`copyLabel`,void 0),R([N()],H.prototype,`feedback`,void 0),R([N({type:Number,attribute:`feedback-timeout`})],H.prototype,`feedbackTimeout`,void 0),R([N()],H.prototype,`placement`,void 0),R([N({type:Boolean,attribute:`hide-copy-button`})],H.prototype,`hideCopyButton`,void 0),R([N({type:Boolean,attribute:`wrap-text`})],H.prototype,`wrapText`,void 0),R([N({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),R([N({type:Boolean,reflect:!0})],H.prototype,`expanded`,void 0),R([N({attribute:`show-more-text`})],H.prototype,`showMoreText`,void 0),R([N({attribute:`show-less-text`})],H.prototype,`showLessText`,void 0),R([N({type:Number,attribute:`max-collapsed-rows`})],H.prototype,`maxCollapsedRows`,void 0),R([N({type:Number,attribute:`max-expanded-rows`})],H.prototype,`maxExpandedRows`,void 0),R([N({type:Number,attribute:`min-collapsed-rows`})],H.prototype,`minCollapsedRows`,void 0),R([N({type:Number,attribute:`min-expanded-rows`})],H.prototype,`minExpandedRows`,void 0),R([xn()],H.prototype,`canExpand`,void 0),R([xn()],H.prototype,`copied`,void 0),R([P(`code`)],H.prototype,`codeEl`,void 0),R([P(`ui-tooltip`)],H.prototype,`inlineTooltip`,void 0),H=R([M(`ui-code-snippet`)],H);var U=class extends L{constructor(...e){super(...e),this.name=``,this.label=``,this.selected=!1,this.disabled=!1,this.iconOnly=!1,this.tooltipPlacement=`top`,this.focusable=!1}static{this.styles=S`
        :host {
            position: relative;
            display: inline-flex;
            box-sizing: border-box;
            flex-grow: var(--ui-content-switcher-item-grow, 0);
            inline-size: var(--ui-content-switcher-item-size, 100%); /* a design can size items to their labels (auto) and let them grow */
            overflow: hidden;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            white-space: nowrap;
            text-align: start;
            cursor: pointer;
            outline: none;
            user-select: none;
        }

        /* the colours (low contrast sets its own below): --ui-content-switcher-* let a design restyle the default kind */
        :host {
            --_border: var(--ui-content-switcher-border, var(--ui-border-inverse));
            --_selected: var(--ui-content-switcher-selected-fill, var(--ui-layer-selected-inverse));
            --_selected-ink: var(--ui-content-switcher-selected-ink, var(--ui-inverse-ink));
            --_divider: var(--ui-content-switcher-divider, var(--ui-hairline));
            --_radius: var(--ui-content-switcher-item-radius, 4px);
        }

        /*
         * The item's box — padding, borders, the divider (::before) and the selection fill (::after) — is
         * drawn by this part filling the host, not by :host, so a page-wide CSS reset can't remove it.
         */
        .base {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            box-sizing: border-box;
            min-inline-size: 0;
            padding: var(--ui-space-xs) var(--ui-space-md);
            border-block: 1px solid var(--_border, var(--ui-border-inverse));
            border-radius: inherit;
            background-color: transparent;
        }

        :host([data-size='lg']) .base {
            padding-inline: 14px;
        }

        :host(:first-of-type) {
            border-start-start-radius: var(--_radius);
            border-end-start-radius: var(--_radius);
        }

        :host(:first-of-type) .base {
            box-shadow: inset 1px 0 0 0 var(--_border, var(--ui-border-inverse));
        }

        :host(:last-of-type) {
            border-start-end-radius: var(--_radius);
            border-end-end-radius: var(--_radius);
        }

        :host(:last-of-type) .base {
            box-shadow: inset -1px 0 0 0 var(--_border, var(--ui-border-inverse));
        }

        /* selection fill (Carbon ::after) */
        .base::after {
            content: '';
            position: absolute;
            inset-block-start: 0;
            inset-inline-start: 0;
            display: block;
            inline-size: 100%;
            block-size: 100%;
            border-radius: var(--_radius);
            background-color: var(--_selected, var(--ui-layer-selected-inverse));
            transform: scaleY(0);
            transform-origin: bottom;
        }

        /* divider between items (Carbon ::before): hidden on the first item, on hovered/focused/selected items and on the item after them */
        .base::before {
            content: '';
            position: absolute;
            z-index: 2;
            inset-inline-start: 0;
            display: block;
            inline-size: 1px;
            block-size: 16px;
            background-color: var(--_divider, var(--ui-hairline));
        }

        :host(:first-of-type) .base::before,
        :host(:hover) .base::before,
        :host(:focus-visible) .base::before,
        :host([selected]) .base::before,
        :host([data-no-divider]) .base::before {
            background-color: transparent;
        }

        :host(:hover),
        :host(:active) {
            z-index: 3;
            color: var(--ui-ink);
        }

        :host(:hover) .base,
        :host(:active) .base {
            background-color: var(--_hover, var(--ui-ghost-hover));
        }

        :host([selected]) {
            z-index: 3;
            color: var(--_selected-ink, var(--ui-inverse-ink));
        }

        :host([selected]) .base {
            border: 0;
        }

        :host([selected]:hover) .base {
            background-color: transparent;
        }

        :host([selected]) .base::after {
            box-shadow: var(--ui-content-switcher-selected-shadow, none); /* a design can raise the chosen item as a chip */
            transform: scaleY(1);
        }

        /* the ring and Carbon's 1px inner line (--ui-focus-inset-width: a design can drop the line, Kanok does) */
        :host(:focus-visible) .base::after {
            box-shadow:
                inset 0 0 0 var(--ui-focus-width, 2px) var(--ui-focus),
                inset 0 0 0 calc(var(--ui-focus-width, 2px) + var(--ui-focus-inset-width, 1px)) var(--ui-focus-inset);
        }

        :host(:focus-visible:not([selected])) .base::before {
            inline-size: 100%;
            block-size: 100%;
            border-radius: var(--_radius);
            box-shadow: inset 0 0 0 var(--ui-focus-width, 2px) var(--ui-focus);
        }

        :host(:focus-visible:not([selected])) .base::after {
            background-color: var(--ui-focus-inset);
            transform: scaleY(1);
        }

        :host(:focus-visible:not([selected]):hover) .base::after {
            border-radius: 0;
            background-color: var(--_hover, var(--ui-ghost-hover));
            box-shadow: none;
        }

        :host([disabled]) {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        :host([disabled]) .base {
            border-color: var(--ui-border-disabled);
            background-color: transparent;
        }

        :host([disabled]) .base::after {
            display: none;
        }

        :host([disabled]) .base::before {
            background-color: var(--ui-border-disabled);
        }

        :host(:first-of-type[disabled]) .base,
        :host(:last-of-type[disabled]) .base {
            box-shadow: none;
        }

        :host([selected][disabled]) .base {
            background-color: var(--ui-button-disabled);
        }

        /* low contrast (Carbon --low-contrast): grey track, white selected pill with a hairline, bold selected text */
        :host([data-low-contrast]) {
            --_border: var(--ui-hairline-strong);
            --_divider: var(--ui-hairline-strong);
            --_hover: var(--ui-content-switcher-background-hover);
            --_selected: var(--ui-content-switcher-selected);
            --_selected-ink: var(--ui-ink);
        }

        :host([data-low-contrast][selected]) {
            font-weight: 600; /* heading-compact-01 */
        }

        :host([data-low-contrast][selected]) .base::after {
            box-shadow: inset 0 0 0 1px var(--ui-border-inverse);
        }

        :host([data-low-contrast][selected]:focus-visible) .base::after {
            box-shadow: inset 0 0 0 var(--ui-focus-width, 2px) var(--ui-focus);
        }

        :host([data-low-contrast]:focus-visible:not([selected])) .base::after {
            background-color: var(--ui-content-switcher-background);
        }

        :host([data-low-contrast][selected][disabled]) {
            border-radius: 4px;
        }

        :host([data-low-contrast][selected][disabled]) .base {
            border: 1px solid var(--ui-border-disabled);
            background-color: var(--ui-content-switcher-selected);
        }

        /* icon only: a square button */
        :host([icon-only]) {
            inline-size: var(--_size, var(--ui-field-height-md));
        }

        :host([icon-only]) .base {
            padding: 0;
            justify-content: center;
        }

        :host([icon-only][data-size='sm']) {
            --_size: var(--ui-field-height-sm);
        }

        :host([icon-only][data-size='lg']) {
            --_size: var(--ui-field-height-lg);
        }

        .label {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: var(--ui-space-xs);
            max-inline-size: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        ::slotted([slot='icon']) {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
        }

        :host([icon-only]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        :host([data-size='lg']) ::slotted([slot='icon']) {
            width: 20px;
            height: 20px;
        }

        :host(:hover) ::slotted([slot='icon']),
        :host(:focus-visible) ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        :host([selected]) ::slotted([slot='icon']) {
            fill: var(--_selected-icon, var(--ui-icon-inverse));
        }

        :host([data-low-contrast]) {
            --_selected-icon: var(--ui-icon-primary);
        }

        :host([disabled]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-disabled);
        }

        /* the tooltip anchors to the host and shows its bubble in the top layer; it takes no room here */
        ui-tooltip {
            position: absolute;
            cursor: auto;
            white-space: normal;
            user-select: auto;
        }

        @media (forced-colors: active) {
            :host([selected]) .base::after {
                background-color: Highlight;
            }

            :host(:focus-visible) {
                outline: 2px solid CanvasText;
                outline-offset: -2px;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`)}updated(){this.tabIndex=this.focusable&&!this.disabled?0:-1,this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`),cr(this,`aria-label`,this.iconOnly&&this.label?this.label:null)}render(){let e=E`<span class="base"><span class="label" part="label"><slot name="icon"></slot><slot></slot></span></span>`;return!this.iconOnly||!this.label?e:E`${e}<ui-tooltip
                as-label
                part="tooltip"
                text=${this.label}
                placement=${this.tooltipPlacement}
                .anchor=${this}
                @click=${e=>e.stopPropagation()}
            ></ui-tooltip>`}};R([N()],U.prototype,`name`,void 0),R([N()],U.prototype,`label`,void 0),R([N({type:Boolean,reflect:!0})],U.prototype,`selected`,void 0),R([N({type:Boolean,reflect:!0})],U.prototype,`disabled`,void 0),R([N({type:Boolean,reflect:!0,attribute:`icon-only`})],U.prototype,`iconOnly`,void 0),R([N({attribute:`tooltip-placement`})],U.prototype,`tooltipPlacement`,void 0),R([N({type:Boolean,attribute:!1})],U.prototype,`focusable`,void 0),U=R([M(`ui-content-switcher-item`)],U);function Ri(e,{orientation:t=`horizontal`,rtl:n=!1}){return t===`vertical`?{ArrowDown:1,ArrowUp:-1}[e]:t===`both`?{ArrowDown:1,ArrowRight:n?-1:1,ArrowUp:-1,ArrowLeft:n?1:-1}[e]:{ArrowRight:n?-1:1,ArrowLeft:n?1:-1}[e]}function zi(e,t,n,r={}){if(e===0)return;if(r.homeEnd??!0){if(n===`Home`)return 0;if(n===`End`)return e-1}let i=Ri(n,r);if(i!==void 0)return t<0?i>0?0:e-1:(t+i+e)%e}var W=class extends L{constructor(...e){super(...e),this.selectedIndex=0,this.size=`md`,this.selectionMode=`automatic`,this.lowContrast=!1,this.iconOnly=!1,this.hovered=null,this.focused=null}static{this.styles=S`
        :host {
            display: flex;
            justify-content: space-evenly;
            box-sizing: border-box;
            inline-size: 100%;
            block-size: var(--ui-field-height-md);
            /* --ui-content-switcher-track / -radius / -padding / -outline: Carbon's outlined strip; a design can make it the
               contained tabs' segmented track (a fill, inset items, no outline) */
            padding: var(--ui-content-switcher-padding, 0px);
            border-radius: var(--ui-content-switcher-radius, 4px);
            background-color: var(--ui-content-switcher-track, transparent);
            outline: 1px solid var(--ui-content-switcher-outline, var(--ui-border-inverse));
            outline-offset: -1px;
            font-family: var(--ui-font-family);
        }

        :host([size='sm']) {
            block-size: var(--ui-field-height-sm);
        }

        :host([size='lg']) {
            block-size: var(--ui-field-height-lg);
        }

        /* Carbon .cds--content-switcher:has(.cds--content-switcher-btn:disabled); an attribute, as Chromium matches no :has() inside :host() */
        :host([data-has-disabled]) {
            outline-color: var(--ui-border-disabled);
        }

        :host([icon-only]) {
            inline-size: fit-content;
            justify-content: flex-start;
        }

        :host([low-contrast]) {
            background-color: var(--ui-content-switcher-background);
            outline-color: var(--ui-hairline-strong);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`tablist`)}updated(){this.sync()}enabledItems(){return this.items.filter(e=>!e.disabled)}sync(){let e=this.items,t=e[this.selectedIndex],n=t&&!t.disabled?t:this.enabledItems()[0];e.forEach((t,r)=>{t.selected=r===this.selectedIndex,t.focusable=t===n,t.dataset.size=this.size,t.toggleAttribute(`data-low-contrast`,this.lowContrast);let i=e[r-1];t.toggleAttribute(`data-no-divider`,!!i&&(i.selected||i===this.hovered||i===this.focused))}),this.iconOnly=e.length>0&&e.every(e=>e.iconOnly),this.toggleAttribute(`data-has-disabled`,e.some(e=>e.disabled))}itemOf(e){return e?.closest?.(`ui-content-switcher-item`)??null}select(e){let t=this.items.indexOf(e);t<0||e.disabled||t===this.selectedIndex||(this.selectedIndex=t,this.sync(),this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{index:t,name:e.name},bubbles:!0,composed:!0})))}onClick(e){let t=this.itemOf(e.target);t&&!t.disabled&&(t.focus(),this.select(t))}nextItem(e,t){let n=this.enabledItems(),r=n.indexOf(e),i=zi(n.length,r,t,{rtl:getComputedStyle(this).direction===`rtl`});return i===void 0?void 0:n[i]}onKeydown(e){let t=this.itemOf(e.target);if(!t||t.disabled)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),this.select(t);return}let n=this.nextItem(t,e.key);n&&(e.preventDefault(),n.focus(),this.selectionMode===`automatic`&&this.select(n))}onPointer(e){this.hovered=e.type===`pointerover`?this.itemOf(e.target):null,this.sync()}onFocus(e){this.focused=e.type===`focusin`?this.itemOf(e.target):null,this.sync()}focus(e){(this.items.find(e=>e.focusable)??this.enabledItems()[0])?.focus(e)}render(){return E`<slot
            @slotchange=${()=>this.sync()}
            @click=${this.onClick}
            @keydown=${this.onKeydown}
            @pointerover=${this.onPointer}
            @pointerout=${this.onPointer}
            @focusin=${this.onFocus}
            @focusout=${this.onFocus}
        ></slot>`}};R([N({type:Number,reflect:!0,attribute:`selected-index`})],W.prototype,`selectedIndex`,void 0),R([N({reflect:!0})],W.prototype,`size`,void 0),R([N({attribute:`selection-mode`})],W.prototype,`selectionMode`,void 0),R([N({type:Boolean,reflect:!0,attribute:`low-contrast`})],W.prototype,`lowContrast`,void 0),R([N({type:Boolean,reflect:!0,attribute:`icon-only`})],W.prototype,`iconOnly`,void 0),R([Cn({selector:`ui-content-switcher-item`})],W.prototype,`items`,void 0),W=R([M(`ui-content-switcher`)],W);var Bi=`key`,Vi=new Set;function Hi(e){e.removeAttribute(`data-quiet-focus`),Vi.delete(e)}typeof document<`u`&&(document.addEventListener(`pointerdown`,()=>Bi=`pointer`,!0),document.addEventListener(`keydown`,()=>{Bi=`key`;for(let e of[...Vi])Hi(e)},!0));function Ui(e){if(!e||Bi!==`pointer`||Vi.has(e))return;e.setAttribute(`data-quiet-focus`,``),Vi.add(e);let t=n=>{e.contains(n.relatedTarget)||(Hi(e),e.removeEventListener(`focusout`,t))};e.addEventListener(`focusout`,t)}function Wi(e,t){e&&(Ui(e),e.focus(t))}var Gi=class{constructor(e){this.host=e,e.addController(this)}hostConnected(){this.observer??=new MutationObserver(()=>this.host.requestUpdate()),this.observer.observe(this.host,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}hostDisconnected(){this.observer?.disconnect()}has(e){return typeof this.host.querySelector==`function`&&this.host.querySelector(`:scope > [slot="${e}"]`)!==null}},G=[],Ki=e=>G.at(-1)===e,qi=()=>G.some(e=>e.modal),Ji=null;function Yi(e){if(e.key!==`Escape`||e.defaultPrevented||e.isComposing)return;let t=G.at(-1);t&&(e.preventDefault(),t.escape())}function Xi(e,t){let n=G.indexOf(e);n>=0&&G.splice(n,1),G.push(e),Ji||(Ji=t,Ji.addEventListener(`keydown`,Yi))}function Zi(e){let t=G.indexOf(e);t>=0&&G.splice(t,1),G.length===0&&Ji&&(Ji.removeEventListener(`keydown`,Yi),Ji=null)}var Qi=new Set,$i=``;function ea(e,t){Qi.has(e)||(Qi.size===0&&($i=t.style.overflow,t.style.overflow=`hidden`),Qi.add(e))}function ta(e,t){!Qi.delete(e)||Qi.size>0||(t.style.overflow=$i,$i=``)}function na(e){return e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey}function ra(e){let t=e.currentTarget,n=t.getAttribute(`href`);if(e.defaultPrevented||na(e)||n===null||t.hasAttribute(`download`)||t.target&&t.target!==`_self`||t.origin!==location.origin)return;let r=new CustomEvent(`ui-navigate`,{detail:{href:n},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r)||e.preventDefault()}function ia(e,t){if(!t.startsWith(`#`)||t.length<2)return!1;let n=decodeURIComponent(t.slice(1));if(document.getElementById(n))return!1;for(let t=e.getRootNode();t instanceof ShadowRoot;t=t.host.getRootNode()){let e=t.getElementById(n);if(e instanceof HTMLElement)return e.hasAttribute(`tabindex`)||(e.tabIndex=-1),e.focus(),!0}return!1}var K=class extends L{constructor(...e){super(...e),this.href=``,this.target=``,this.rel=``,this.download=``,this.size=`md`,this.inline=!1,this.visited=!1,this.disabled=!1,this.slots=new Gi(this)}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=S`
        :host {
            display: inline;
            font-family: var(--ui-font-family);
        }

        a,
        .disabled {
            display: inline-flex;
            align-items: center;
            color: var(--ui-link);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            text-decoration: none;
            outline: var(--ui-focus-width, 2px) solid transparent;
            outline-offset: 1px;
            border-radius: var(--ui-link-focus-radius, 0); /* the ring's corners (Carbon: square; Kanok rounds them) */
            transition: color var(--ui-duration-fast) var(--ui-easing);
        }

        :host([size='sm']) a,
        :host([size='sm']) .disabled {
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        :host([size='lg']) a,
        :host([size='lg']) .disabled {
            font: var(--ui-font-body);
            line-height: 22px; /* body-compact-02 */
        }

        a:hover {
            color: var(--ui-link-hover);
            text-decoration: underline;
        }

        a:focus-visible {
            outline-color: var(--ui-focus);
            text-decoration: underline;
        }

        a:active,
        a:active:visited {
            color: var(--ui-link);
            text-decoration: underline;
        }

        :host([visited]) a:visited {
            color: var(--ui-link-visited);
        }

        :host([visited]) a:visited:hover {
            color: var(--ui-link-hover);
        }

        :host([inline]) a,
        :host([inline]) .disabled {
            display: inline;
            text-decoration: underline;
        }

        .disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            margin-inline-start: var(--ui-space-xs);
        }

        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        :host([size='lg']) ::slotted([slot='icon']) {
            width: 20px;
            height: 20px;
        }

        :host([inline]) .icon {
            display: none;
        }

        @media (forced-colors: active) {
            a {
                color: LinkText;
            }

            a:focus-visible {
                outline: 2px solid Highlight;
            }

            .disabled {
                color: GrayText;
            }
        }

    `}render(){let e=this.slots.has(`icon`)?E`<span class="icon" part="icon"><slot name="icon"></slot></span>`:O;if(this.disabled)return E`<span class="disabled" part="base" role="link" aria-disabled="true"><slot></slot>${e}</span>`;let t=this.target===`_blank`;return E`<a
            part="base"
            href=${this.href||O}
            target=${this.target||O}
            rel=${this.rel||(t?`noopener noreferrer`:O)}
            download=${this.download||O}
            tabindex=${this.href?`0`:O}
            @click=${ra}
        >
            <slot></slot>${e}
        </a>`}};R([N()],K.prototype,`href`,void 0),R([N()],K.prototype,`target`,void 0),R([N()],K.prototype,`rel`,void 0),R([N()],K.prototype,`download`,void 0),R([N({reflect:!0})],K.prototype,`size`,void 0),R([N({type:Boolean,reflect:!0})],K.prototype,`inline`,void 0),R([N({type:Boolean,reflect:!0})],K.prototype,`visited`,void 0),R([N({type:Boolean,reflect:!0})],K.prototype,`disabled`,void 0),K=R([M(`ui-link`)],K);var aa=S`
    outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
    outline-offset: var(--ui-focus-offset, -2px);
`,oa=S`
    outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
    outline-offset: -2px;
`,sa=`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,ca=(e,t)=>!e&&!t;function la(e,t,n){return t<e.left||t>e.left+e.width||n<e.top||n>e.top+e.height}var ua=e=>e.findIndex(e=>!/^(primary|danger)/.test(e??`primary`)),da=e=>e.getAttribute(`kind`)??e.getAttribute(`variant`),q=class extends L{constructor(...e){super(...e),this.open=!1,this.localize=new B(this),this.heading=``,this.label=``,this.size=`md`,this.persistent=!1,this.closeLabel=``,this.alert=!1,this.bodyScrollable=!1,this.headingId=I(`ui-modal-heading`),this.labelId=I(`ui-modal-label`),this.bodyId=I(`ui-modal-body`),this.hasFooter=!1,this.pointerDownOnBackdrop=!1,this.active=!1,this.formClosing=!1,this.layer={escape:()=>this.requestClose(`escape`),modal:!0},this.hasHeaderActions=!1,this.slots=new Gi(this),this.onHeaderActionsSlotChange=e=>{this.hasHeaderActions=e.target.assignedElements().length>0}}static{this.styles=S`
        dialog {
            box-sizing: border-box;
            width: min(100% - 2 * var(--ui-space-md), 672px);
            max-height: min(100% - 2 * var(--ui-space-xxl), 768px);
            padding: 0;
            /* --ui-overlay-border / -background: a design can outline and raise every floating surface alike (Carbon: none, layer 1) */
            border: var(--ui-overlay-border, none);
            border-radius: var(--ui-modal-radius, var(--ui-radius-none));
            background-color: var(--ui-overlay-background, var(--ui-surface-1));
            box-shadow: var(--ui-modal-shadow, none);
            color: var(--ui-ink);
            font-family: var(--ui-font-family);
            /* on the dialog, not only while [open]: a closing one stays on screen while it fades out */
            flex-direction: column;
        }

        dialog[open] {
            display: flex;
        }

        :host([size='sm']) dialog {
            width: min(100% - 2 * var(--ui-space-md), 480px);
        }

        :host([size='lg']) dialog {
            width: min(100% - 2 * var(--ui-space-md), 1056px);
        }

        dialog::backdrop {
            background-color: var(--ui-modal-scrim, rgb(22 22 22 / 0.5)); /* Carbon's modal overlay; a design can tint it */
        }

        /*
         * Carbon modal: 240ms, the box drops 24px into place while it and the overlay fade in (entrance expressive),
         * and goes back out after closing (exit expressive) where the browser can keep a closing dialog in the top
         * layer (overlay). Reduced motion: none.
         */
        @media (prefers-reduced-motion: no-preference) {
            dialog {
                opacity: 0;
                transform: translateY(-24px);
                transition:
                    opacity var(--ui-duration-moderate-02) cubic-bezier(0.4, 0.14, 1, 1),
                    transform var(--ui-duration-moderate-02) cubic-bezier(0.4, 0.14, 1, 1);
            }

            dialog::backdrop {
                opacity: 0;
                transition: opacity var(--ui-duration-moderate-02) cubic-bezier(0.4, 0.14, 1, 1);
            }

            dialog[open],
            dialog[open]::backdrop {
                opacity: 1;
                transition-timing-function: cubic-bezier(0, 0, 0.3, 1);
            }

            dialog[open] {
                transform: none;
            }

            @starting-style {
                dialog[open],
                dialog[open]::backdrop {
                    opacity: 0;
                }

                dialog[open] {
                    transform: translateY(-24px);
                }
            }

            @supports (overlay: auto) {
                /* where a modal one sits, also while it closes (no longer :modal) */
                dialog {
                    position: fixed;
                    inset: 0;
                    transition-property: opacity, transform, overlay, display;
                    transition-behavior: allow-discrete;
                }

                dialog::backdrop {
                    transition-property: opacity, overlay, display;
                    transition-behavior: allow-discrete;
                }
            }
        }

        header {
            position: relative;
            padding: var(--ui-space-md) 48px var(--ui-space-xs) var(--ui-space-md); /* Carbon: 16px 48px 0 16px + 8px margin */
        }

        .eyebrow {
            margin: 0 0 var(--ui-space-xxs);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
            color: var(--ui-ink-muted);
        }

        h2 {
            margin: 0;
            padding-inline-end: calc(20% - 48px); /* Carbon modal-header__heading */
            font: var(--ui-font-subhead);
        }

        header.has-actions {
            padding-inline-end: 96px;
        }

        .header-actions {
            position: absolute;
            top: 0;
            inset-inline-end: 48px;
            display: flex;
            align-items: center;
            height: 48px;
        }

        /* --ui-close-size / --ui-close-inset / --ui-icon-control-radius: a design can make it a smaller round button set in from the corner (Carbon: a 48px square in the corner) */
        .close {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            display: grid;
            place-items: center;
            width: var(--ui-close-size, 48px);
            height: var(--ui-close-size, 48px);
            margin: var(--ui-close-inset, 0);
            padding: 0;
            border: none;
            border-radius: var(--ui-icon-control-radius, 0);
            background: transparent;
            color: var(--ui-ink);
            cursor: pointer;
            transition: background-color var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--modal-close */
        }

        .close:hover {
            background-color: var(--ui-ghost-hover);
        }

        .close:focus-visible {
            ${aa}
        }

        /* focused on opening right after a click (shared/quiet-focus): no keyboard ring in Kanok */
        .close[data-quiet-focus]:focus-visible {
            outline-color: var(--ui-pointer-focus, var(--ui-focus));
        }

        .close svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        .body {
            flex: 1;
            overflow-y: auto;
            padding: var(--ui-space-xs) var(--ui-space-md) var(--ui-space-xxl);
            font: var(--ui-font-body);
            letter-spacing: var(--ui-tracking-body);
            outline: none;
        }

        /* the scrolling region: the ring inside, in the box's corners (--ui-modal-body-focus-radius; Carbon: square) */
        .body:focus-visible {
            ${oa}
            border-radius: var(--ui-modal-body-focus-radius, 0);
        }

        /*
         * Carbon modal footer: 64px tall, buttons take half each (one button = right half), text at the top.
         * --ui-modal-footer-* / --ui-modal-button-* let a design use ordinary buttons at the end, under a rule.
         */
        footer {
            display: flex;
            justify-content: flex-end;
            gap: var(--ui-modal-footer-gap, normal);
            min-height: var(--ui-modal-footer-height, 64px);
            padding: var(--ui-modal-footer-padding, 0px);
            border-block-start: var(--ui-modal-footer-border, none);
        }

        footer[hidden] {
            display: none;
        }

        ::slotted([slot='footer']) {
            flex: var(--ui-modal-button-flex, 0 1 50%);
            --ui-field-height-lg: var(--ui-modal-button-height, 64px); /* the modal makes its footer buttons lg */
            --ui-button-align: var(--ui-modal-button-align, flex-start);
            --ui-button-padding-top: var(--ui-modal-button-padding-top, 14px);
        }

        @media (forced-colors: active) {
            dialog {
                border: 1px solid CanvasText;
            }
        }
    `}observeSize(){this.resizeObserver??=new ResizeObserver(()=>{this.bodyScrollable=this.body.scrollHeight>this.body.clientHeight+1}),this.resizeObserver.observe(this.body),this.resizeObserver.observe(this.content)}show(){this.open=!0}close(){this.open=!1}requestClose(e){let t=new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.open=!1)}updated(e){e.has(`open`)&&(this.open&&!this.dialog.open?(this.dialog.showModal(),this.focusWhenReady(),this.active=!0,Xi(this.layer,globalThis),ea(this,document.documentElement)):!this.open&&this.dialog.open&&(this.dialog.close(),this.finishClose()))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.observeSize()}firstUpdated(){this.observeSize()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.finishClose()}async focusWhenReady(){let e=[...this.querySelectorAll(`*`)].map(e=>e.updateComplete).filter(e=>e!==void 0);e.length&&await Promise.all(e),this.open&&this.focusInitial()}focusInitial(){let e=this.querySelector(`[autofocus]`);if(e){Wi(e);return}if(this.alert){this.focusLeastDestructive();return}let t=e=>{for(let t=e;t&&t!==this;t=t.parentElement)if(t.hasAttribute(`slot`))return!1;return!0},n=e=>e.matches(`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`)||!!e.shadowRoot?.delegatesFocus&&!e.hasAttribute(`disabled`),r=e=>(Wi(e),e.matches(`:focus-within`));if([...this.querySelectorAll(`*`)].find(e=>t(e)&&n(e)&&r(e)))return;let i=this.querySelector(`[slot="footer"]`);i&&r(i)||Wi(this.shadowRoot?.querySelector(`.close`))}focusLeastDestructive(){if(this.querySelector(`[autofocus]`))return;let e=[...this.querySelectorAll(`[slot="footer"]`)];Wi(e[ua(e.map(da))])}finishClose(){this.active&&(this.active=!1,Zi(this.layer),ta(this,document.documentElement),this.dispatchEvent(new Event(`ui-close`,{bubbles:!0,composed:!0})))}onCancel(e){e.preventDefault(),Ki(this.layer)&&this.requestClose(`escape`)}onSubmit(e){let t=e.target;this.formClosing=(e.submitter?.getAttribute(`formmethod`)??t.getAttribute(`method`))?.toLowerCase()===`dialog`}onClose(){if(this.open&&!this.formClosing){let e=new CustomEvent(`ui-request-close`,{detail:{reason:`escape`},bubbles:!0,composed:!0,cancelable:!0});if(!this.dispatchEvent(e)){this.dialog.showModal(),this.focusInitial();return}}this.formClosing=!1,this.open=!1,this.finishClose()}onPointerDown(e){this.pointerDownOnBackdrop=e.target===this.dialog&&this.isOutside(e)}get closesOnOutsideClick(){return ca(this.persistent,!!this.querySelector(`:scope > [slot="footer"]`))}onClick(e){this.closesOnOutsideClick&&this.pointerDownOnBackdrop&&e.target===this.dialog&&this.isOutside(e)&&this.requestClose(`backdrop`)}isOutside(e){return la(this.dialog.getBoundingClientRect(),e.clientX,e.clientY)}onFooterSlotChange(e){this.hasFooter=e.target.assignedElements().length>0,this.requestUpdate()}focus(e){if(!this.open){super.focus(e);return}let t=[...this.querySelectorAll(`[slot="footer"]`)];(t[ua(t.map(da))]??t[0]??this.shadowRoot?.querySelector(`.close`)??this.dialog).focus(e)}get nameId(){return this.heading?this.headingId:this.slots.has(`label`)?this.labelId:void 0}render(){return E`
            <dialog
                part="dialog"
                role=${this.alert?`alertdialog`:O}
                aria-labelledby=${this.nameId??O}
                aria-label=${!this.nameId&&this.label?this.label:O}
                aria-describedby=${this.alert?this.bodyId:O}
                @cancel=${this.onCancel}
                @close=${this.onClose}
                @submit=${this.onSubmit}
                @pointerdown=${this.onPointerDown}
                @click=${this.onClick}
            >
                <header part="header" class=${this.hasHeaderActions?`has-actions`:``}>
                    <div class="header-actions" part="header-actions">
                        <slot name="header-actions" @slotchange=${this.onHeaderActionsSlotChange}></slot>
                    </div>
                    ${this.slots.has(`label`)?E`<p class="eyebrow" part="label" id=${this.labelId}><slot name="label"></slot></p>`:O}
                    ${this.heading?E`<h2 id=${this.headingId} part="heading">${this.heading}</h2>`:O}
                    <button class="close" part="close-button" type="button" tabindex="0" aria-label=${this.closeLabel||this.localize.t.common.close} @click=${()=>this.requestClose(`close-button`)}>
                        <svg viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                        </svg>
                    </button>
                </header>
                <div
                    class="body"
                    part="body"
                    id=${this.bodyId}
                    tabindex=${this.bodyScrollable?0:O}
                    role=${this.bodyScrollable?`region`:O}
                    aria-labelledby=${this.bodyScrollable&&this.heading?this.headingId:O}
                >
                    <div class="content"><slot></slot></div>
                </div>
                <footer part="footer" ?hidden=${!this.hasFooter}>
                    <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
                </footer>
            </dialog>
        `}};R([N({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),R([N()],q.prototype,`heading`,void 0),R([N()],q.prototype,`label`,void 0),R([N({reflect:!0})],q.prototype,`size`,void 0),R([N({type:Boolean})],q.prototype,`persistent`,void 0),R([N({attribute:`close-label`})],q.prototype,`closeLabel`,void 0),R([N({type:Boolean,reflect:!0})],q.prototype,`alert`,void 0),R([xn()],q.prototype,`bodyScrollable`,void 0),R([P(`dialog`)],q.prototype,`dialog`,void 0),R([P(`.body`)],q.prototype,`body`,void 0),R([P(`.content`)],q.prototype,`content`,void 0),R([xn()],q.prototype,`hasHeaderActions`,void 0),q=R([M(`ui-modal`)],q);var fa=S`
    :host {
        --_h: var(--ui-field-height-lg, 48px);

        display: block;
        font-family: var(--ui-font-family);
    }

    :host([size='sm']) {
        --_h: var(--ui-field-height-sm, 32px);
    }

    :host([size='md']) {
        --_h: var(--ui-field-height-md, 40px);
    }

    .search {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        height: var(--_h);
        margin: 0;
        padding: 0 var(--_h);
        /* Carbon: an underline only; --ui-field-border (all sides), --ui-field-radius and --ui-field-background let a design outline the box */
        border: var(--ui-field-border, none);
        border-bottom: 1px solid var(--ui-ink-subtle);
        border-radius: var(--ui-field-radius, var(--ui-radius-none));
        background-color: var(--ui-field-background, var(--ui-surface-1));
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        text-overflow: ellipsis;
        appearance: none;
        outline: var(--ui-field-focus-width, 2px) solid transparent; /* the ring's width (Kanok: 1.5px, on the field's own border) */
        outline-offset: calc(-1 * var(--ui-field-focus-width, 2px));
        /* Carbon search-input: fast-02 (110ms), not the text input's fast-01 */
        transition:
            background-color var(--ui-duration-moderate) var(--ui-easing),
            outline-color var(--ui-duration-moderate) var(--ui-easing);
    }

    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
        display: none;
        appearance: none;
    }

    input::placeholder {
        color: var(--ui-ink-placeholder);
        opacity: 1;
    }

    input:focus {
        outline-color: var(--ui-focus);
        box-shadow: var(--ui-field-focus-halo, none); /* a design's halo outside the ring (Kanok: none) */
    }

    input:disabled {
        border-color: var(--ui-field-disabled-border-color, currentColor currentColor transparent);
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
    }

    input:disabled::placeholder {
        color: var(--ui-ink-disabled);
    }

    .magnifier {
        position: absolute;
        z-index: 1;
        inset-inline-start: calc((var(--_h) - 16px) / 2);
        width: 16px;
        height: 16px;
        fill: var(--ui-ink-muted);
        pointer-events: none;
    }

    input:disabled ~ .magnifier {
        fill: var(--ui-ink-disabled);
    }

    .clear {
        position: absolute;
        inset-block: 0;
        inset-inline-end: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--_h);
        padding: 0;
        border: 1px solid transparent;
        background: transparent;
        color: var(--ui-ink);
        cursor: pointer; /* no transition: Carbon's search-close appears and tints at once */
        border-radius: var(--ui-icon-control-radius, 0); /* round in a design that rounds icon controls (Kanok) */
    }

    .clear svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
    }

    .clear:hover {
        background-color: var(--ui-ghost-hover);
    }

    .clear:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
    }

    .clear:active {
        background-color: var(--ui-ghost-active);
    }

    /*
     * Carbon: the field focused (it keeps focus while × is pressed), a hovered or pressed × keeps the field's 2px
     * focus line — its fill is drawn inside it, 2px in from the top, bottom and end, under the icon
     */
    .clear svg {
        position: relative;
        z-index: 1;
    }

    input:focus ~ .clear:hover,
    input:focus ~ .clear:active {
        background-color: transparent;
    }

    input:focus ~ .clear:hover::after,
    input:focus ~ .clear:active::after {
        content: '';
        position: absolute;
        inset-block: 2px;
        inset-inline: 0 2px;
        background-color: var(--ui-ghost-hover);
        pointer-events: none;
    }

    input:focus ~ .clear:active::after {
        background-color: var(--ui-ghost-active);
    }

    /* Carbon search-close--hidden: present for layout, invisible and unreachable while empty */
    .clear.hidden {
        opacity: 0;
        visibility: hidden;
    }

    input:disabled ~ .clear {
        color: var(--ui-ink-disabled);
        cursor: not-allowed;
        background: transparent;
    }

    /* ---- expandable (Carbon cds--search--expandable) ---- */
    :host([expandable]) {
        transition: inline-size var(--ui-duration-fast) var(--ui-easing);
    }

    :host([expandable]:not([expanded])) {
        inline-size: var(--_h);
    }

    :host([expandable]:not([expanded])) input {
        padding: 0;
        border: 0;
        background: none;
        transition: none; /* Carbon: transform (fast-01), which this input never changes */
    }

    /* Carbon search--expandable.search--expanded: only the padding moves in, at fast-01 */
    :host([expandable][expanded]) input {
        transition: padding var(--ui-duration-fast) var(--ui-easing);
    }

    :host([expandable]) input::placeholder {
        opacity: 0;
        transition: opacity var(--ui-duration-fast) var(--ui-easing);
    }

    :host([expandable][expanded]) input::placeholder {
        opacity: 1;
    }

    .magnifier-tip {
        position: absolute;
        z-index: 1;
        inset-block-start: 0;
        inset-inline-start: 0;
    }

    :host([expanded]) .magnifier-tip,
    :host([disabled]) .magnifier-tip {
        pointer-events: none;
    }

    .magnifier-button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        inline-size: var(--_h);
        block-size: var(--_h);
        margin: 0;
        padding: 0;
        border: none;
        border-radius: var(--ui-icon-control-radius, 0);
        background: transparent;
        color: inherit;
        cursor: pointer;
        outline: var(--ui-focus-width, 2px) solid transparent;
        outline-offset: -2px;
    }

    .magnifier-button:hover {
        background-color: var(--ui-canvas-hover);
    }

    .magnifier-button:focus {
        outline-color: var(--ui-focus);
    }

    /* a mouse or touch focus shows no ring in a design that sets --ui-pointer-focus (Kanok: keyboard only) */
    .magnifier-button:focus:not(:focus-visible) {
        outline-color: var(--ui-pointer-focus, var(--ui-focus));
    }

    .magnifier-button .magnifier {
        position: static;
        fill: var(--ui-icon-primary);
    }

    :host([expanded]) .magnifier-button .magnifier {
        fill: var(--ui-icon-secondary);
    }

    :host([disabled]) .magnifier-button {
        cursor: not-allowed;
    }

    :host([disabled]) .magnifier-button:hover {
        background-color: transparent;
    }

    :host([disabled]) .magnifier-button .magnifier {
        fill: var(--ui-icon-disabled);
    }

    @media (prefers-reduced-motion: reduce) {
        :host([expandable]),
        :host([expandable]) input::placeholder {
            transition: none;
        }
    }

    @media (forced-colors: active) {
        input {
            border: 1px solid FieldText;
        }
        input:focus {
            outline-color: Highlight;
        }
    }
`,pa=S`
    :host([data-fluid]) {
        --_h: 64px;
    }

    :host([data-fluid]) .label {
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
        color: var(--ui-ink-muted);
    }

    /* Carbon fluid search: visible label, magnifier at the end, clear button before it */
    :host([data-fluid]) input {
        padding: 32px 88px 13px var(--ui-space-md);
    }

    :host([data-fluid]) .magnifier {
        inset-block-start: 35px;
        inset-inline: auto var(--ui-space-md);
    }

    :host([data-fluid]) .clear {
        inset-block: 24px auto;
        block-size: 40px;
        inline-size: 40px;
        inset-inline-end: 48px;
    }
`,ma=E`<svg class="magnifier" part="magnifier" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M15 14.3 10.7 10a5.5 5.5 0 1 0-.7.7l4.3 4.3.7-.7ZM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
</svg>`,ha=E`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,J=class extends L{constructor(...e){super(...e),this.label=``,this.localize=new B(this),this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.disabled=!1,this.autocomplete=`off`,this.inputmode=``,this.enterkeyhint=``,this.clearLabel=``,this.required=!1,this.pattern=``,this.readonly=!1,this.fluid=!1,this.expandable=!1,this.expanded=!1,this.formControl=new Gn(this,{implicitSubmission:!0}),this.customValidityMessage=``,this.ids=I(`ui-search`),this.defaultValue=``,this.onEnterKey=e=>dr(this,e),this.onFocusOut=()=>{this.expandable&&this.expanded&&setTimeout(()=>{this.expanded&&this.value===``&&!this.matches(`:focus-within`)&&this.setExpanded(!1)})}}static{this.hostStates=[`has-value`]}static{this.formAssociated=!0}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[mr,fa,Or,pa]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&this.syncFormState()}willUpdate(){Tr(this,this.fluid)}connectedCallback(){super.connectedCallback(),Tr(this,this.fluid),this.addEventListener(`keydown`,this.onEnterKey),this.addEventListener(`focusout`,this.onFocusOut),this.formControl.captureDefaults(()=>{this.defaultValue=this.value})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey),this.removeEventListener(`focusout`,this.onFocusOut)}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.formControl.reportValidity(this.internals)}updated(){this.syncFormState(),this.toggleAttribute(`data-has-value`,this.value!==``)}syncFormState(){nr(this.internals,this.isDisabled)||(this.internals.setFormValue(this.value),this.customValidityMessage?this.internals.setValidity({customError:!0},this.customValidityMessage,this.input):this.input.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.input.validity,this.input.validationMessage,this.input))}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.formControl.setFieldsetDisabled(e)}get isDisabled(){return this.formControl.disabled}onInput(e){this.value=e.target.value}onChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onKeydown(e){e.key===`Escape`&&(this.value!==``&&!this.readonly?(e.stopPropagation(),this.clear()):this.expandable&&this.expanded&&(e.stopPropagation(),this.setExpanded(!1),this.updateComplete.then(()=>this.magnifierButton?.focus())))}setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:e},bubbles:!0,composed:!0})))}expand(){!this.expandable||this.expanded||this.isDisabled||(this.setExpanded(!0),this.updateComplete.then(()=>this.input.focus()))}onMagnifierKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),this.expand())}renderMagnifier(){return this.expandable?E`<ui-tooltip class="magnifier-tip" as-label text=${this.label||this.localize.t.field.search} placement="top">
            <button
                class="magnifier-button"
                part="magnifier-button"
                type="button"
                tabindex=${this.expanded?`-1`:`0`}
                aria-expanded=${this.expanded?`true`:`false`}
                aria-controls=${this.ids}
                ?disabled=${this.isDisabled}
                @click=${this.expand}
                @keydown=${this.onMagnifierKeydown}
            >
                ${ma}
            </button>
        </ui-tooltip>`:ma}clear(){this.isDisabled||this.readonly||this.value===``||(this.value=``,this.input.focus(),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new CustomEvent(`ui-clear`,{bubbles:!0,composed:!0})))}get empty(){return this.value===``||this.readonly}render(){let e=this.empty;return E`
            <div class="search" part="base" role="search" aria-labelledby="${this.ids}-label">
                <label class=${Dr(this,`fluid`)?`label`:`sr-only`} part="label" id="${this.ids}-label" for=${this.ids}>${this.label||this.formControl.fallbackName(this.label,this.internals)||this.localize.t.field.search}</label>
                <input
                    part="input"
                    id=${this.ids}
                    type="search"
                    .value=${this.value}
                    name=${this.name||O}
                    placeholder=${this.placeholder||this.localize.t.field.search||O}
                    autocomplete=${this.autocomplete}
                    inputmode=${this.inputmode||O}
                    enterkeyhint=${this.enterkeyhint||O}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    tabindex=${this.expandable&&!this.expanded?`-1`:O}
                    pattern=${this.pattern||O}
                    minlength=${this.minlength??O}
                    maxlength=${this.maxlength??O}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @keydown=${this.onKeydown}
                />
                ${this.renderMagnifier()}
                <!-- mousedown is cancelled so the input keeps focus: no stray native change before the clear -->
                <button
                    class="clear ${e?`hidden`:``}"
                    part="clear-button"
                    type="button"
                    aria-label=${this.clearLabel||this.localize.t.field.clearSearch}
                    ?disabled=${this.isDisabled}
                    tabindex=${e?-1:O}
                    @mousedown=${e=>e.preventDefault()}
                    @click=${this.clear}
                >
                    ${ha}
                </button>
            </div>
        `}};R([N()],J.prototype,`label`,void 0),R([N()],J.prototype,`placeholder`,void 0),R([N()],J.prototype,`value`,void 0),R([N({reflect:!0})],J.prototype,`name`,void 0),R([N({reflect:!0})],J.prototype,`size`,void 0),R([N({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),R([N()],J.prototype,`autocomplete`,void 0),R([N()],J.prototype,`inputmode`,void 0),R([N()],J.prototype,`enterkeyhint`,void 0),R([N({attribute:`clear-label`})],J.prototype,`clearLabel`,void 0),R([N({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),R([N()],J.prototype,`pattern`,void 0),R([N({type:Number})],J.prototype,`minlength`,void 0),R([N({type:Number})],J.prototype,`maxlength`,void 0),R([N({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),R([N({type:Boolean,reflect:!0})],J.prototype,`fluid`,void 0),R([N({type:Boolean,reflect:!0})],J.prototype,`expandable`,void 0),R([N({type:Boolean,reflect:!0})],J.prototype,`expanded`,void 0),R([P(`input`)],J.prototype,`input`,void 0),R([P(`.magnifier-button`)],J.prototype,`magnifierButton`,void 0),J=R([M(`ui-search`)],J);var ga=class extends L{static{this.styles=S`
        /*
         * No margin or padding on :host — a page-wide CSS reset would remove them. Beside the side nav the host
         * is shifted and narrowed instead (--_nav); the 48px under the header is the part's top margin, which
         * collapses through the host, and the 32px padding is the part's.
         */
        :host {
            --_nav: 0px;

            position: relative;
            display: block;
            inset-inline-start: var(--_nav);
            inline-size: calc(100% - var(--_nav));
            background-color: var(--ui-canvas);
            color: var(--ui-ink);
            font-family: var(--ui-font-family);
        }

        .base {
            margin-block-start: 48px;
            padding: 32px;
        }

        :host([data-side-nav='fixed']) {
            --_nav: 256px;
        }

        :host([data-side-nav='rail']) {
            --_nav: 48px;
        }

        @media (min-width: 1056px) {
            :host([data-side-nav='default']) {
                --_nav: 256px;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.id||=`main-content`,this.hasAttribute(`role`)||this.setAttribute(`role`,`main`),this.syncSideNav()}disconnectedCallback(){super.disconnectedCallback(),this.navObserver?.disconnect(),this.navObserver=void 0}syncSideNav(){let e=this.getRootNode().querySelector?.(`ui-side-nav`)??this.ownerDocument.querySelector(`ui-side-nav`);e&&(this.navObserver||(this.navObserver=new MutationObserver(()=>this.syncSideNav()),this.navObserver.observe(e,{attributes:!0,attributeFilter:[`rail`,`fixed`,`collapsible`]})),this.dataset.sideNav=_a(e))}render(){return E`<div class="base"><slot @slotchange=${()=>this.syncSideNav()}></slot></div>`}};ga=R([M(`ui-content`)],ga);function _a(e){return e.fixed?`fixed`:e.rail?`rail`:e.collapsible?`collapsible`:`default`}var Y=class extends L{constructor(...e){super(...e),this.label=``,this.active=!1,this.tooltipPlacement=`bottom`,this.panel=``,this.onClick=()=>{let e=this.panelElement;e&&(e.expanded=!e.expanded)},this.onPanelToggle=e=>{this.panel&&e.target?.id===this.panel&&(this.active=e.detail.expanded)}}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=S`
        :host {
            display: block;
            block-size: 100%;
        }

        ui-tooltip {
            display: block;
            block-size: 100%;
        }

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            inline-size: 48px;
            block-size: 48px;
            padding: 0;
            border: 1px solid transparent;
            border-radius: var(--ui-header-action-radius, 0); /* a design can round the hover and focus box (Carbon: square) */
            background: transparent;
            color: var(--ui-icon-secondary);
            cursor: pointer;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate);
        }

        button:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-icon-primary);
        }

        button:active {
            background-color: var(--ui-canvas-active);
            color: var(--ui-icon-primary);
        }

        button:focus-visible {
            border-color: var(--ui-focus);
        }

        :host([active]) button {
            background-color: var(--ui-surface-1);
            border-block-end-color: transparent;
            border-inline-color: var(--ui-border-subtle-1);
            color: var(--ui-icon-primary);
        }

        ::slotted(svg) {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.onClick),this.root=this.getRootNode(),this.root.addEventListener(`ui-toggle`,this.onPanelToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onClick),this.root?.removeEventListener(`ui-toggle`,this.onPanelToggle),this.root=void 0}get panelElement(){return this.panel?this.getRootNode().getElementById(this.panel):null}render(){let e=this.panel!==``;return E`<ui-tooltip as-label text=${this.label} placement=${this.tooltipPlacement}>
            <button
                part="base"
                type="button"
                tabindex="0"
                aria-expanded=${F(e?String(this.active):void 0)}
                aria-pressed=${F(!e&&this.active?`true`:void 0)}
            ><slot></slot></button>
        </ui-tooltip>`}};R([N()],Y.prototype,`label`,void 0),R([N({type:Boolean,reflect:!0})],Y.prototype,`active`,void 0),R([N({attribute:`tooltip-placement`})],Y.prototype,`tooltipPlacement`,void 0),R([N()],Y.prototype,`panel`,void 0),Y=R([M(`ui-header-global-action`)],Y);var va=class extends L{constructor(...e){super(...e),this.label=``,this.localize=new B(this)}static{this.styles=S`
        :host {
            display: flex;
            flex: 1 1 0%;
            justify-content: flex-end;
            block-size: 100%;
        }
    `}render(){return E`<div role="group" aria-label=${this.label||this.localize.t.common.globalActions} style="display: flex; height: 100%"><slot></slot></div>`}};R([N()],va.prototype,`label`,void 0),va=R([M(`ui-header-global-bar`)],va);var ya=E`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" /></svg>`,ba=E`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15 5.8 14.2 5 10 9.2 5.8 5 5 5.8 9.2 10 5 14.2l.8.8 4.2-4.2 4.2 4.2.8-.8L10.8 10z" /></svg>`,X=class extends L{constructor(...e){super(...e),this.active=!1,this.collapsible=!1,this.openLabel=``,this.closeLabel=``,this.localize=new B(this)}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=S`
        :host {
            display: flex;
            block-size: 100%;
        }

        @media (min-width: 1056px) {
            :host(:not([collapsible])) {
                display: none;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            inline-size: 48px;
            block-size: 48px;
            padding: 0;
            border: 1px solid transparent;
            background: transparent;
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate);
        }

        button:hover {
            background-color: var(--ui-canvas-hover);
        }

        button:active {
            background-color: var(--ui-canvas-active);
        }

        button:focus-visible {
            border-color: var(--ui-focus);
        }

        :host([active]) button {
            background-color: var(--ui-surface-1);
            border-block-end-color: transparent;
            border-inline-color: var(--ui-border-subtle-1);
        }

        svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }
    `}toggle(){this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{active:!this.active},bubbles:!0,composed:!0,cancelable:!0}))}render(){return E`<button part="base" type="button" aria-label=${this.active?this.closeLabel||this.localize.t.common.closeMenu:this.openLabel||this.localize.t.common.openMenu} aria-expanded=${this.active?`true`:`false`} @click=${this.toggle}>${this.active?ba:ya}</button>`}};R([N({type:Boolean,reflect:!0})],X.prototype,`active`,void 0),R([N({type:Boolean,reflect:!0})],X.prototype,`collapsible`,void 0),R([N({attribute:`open-label`})],X.prototype,`openLabel`,void 0),R([N({attribute:`close-label`})],X.prototype,`closeLabel`,void 0),X=R([M(`ui-header-menu-button`)],X);var Z=class extends L{constructor(...e){super(...e),this.href=`/`,this.prefix=``,this.target=``,this.rel=``}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=S`
        :host {
            display: block;
            block-size: 100%;
        }

        a {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 100%;
            padding: 0 32px 0 16px;
            border: 2px solid transparent;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0.1px;
            text-decoration: none;
            outline: none;
            user-select: none;
            transition: border-color var(--ui-duration-moderate);
        }

        a:focus-visible {
            border-color: var(--ui-focus);
        }

        .prefix {
            font-weight: 400;
        }

        :host(:dir(ltr)) ::slotted(*),
        ::slotted(*) {
            display: contents;
        }
    `}render(){let e=this.prefix?E`<span class="prefix">${this.prefix}</span>&nbsp;`:O;return E`<a part="base" href=${this.href} target=${this.target||O} rel=${this.rel||O} @click=${ra}>${e}<span><slot></slot></span></a>`}};R([N()],Z.prototype,`href`,void 0),R([N()],Z.prototype,`prefix`,void 0),R([N()],Z.prototype,`target`,void 0),R([N()],Z.prototype,`rel`,void 0),Z=R([M(`ui-header-name`)],Z);var xa=class extends L{constructor(...e){super(...e),this.expanded=!1,this.label=``,this.onDocumentPointerDown=e=>{if(!this.expanded)return;let t=e.composedPath();t.includes(this)||t.some(e=>e instanceof Y&&e.panel!==``&&e.panel===this.id)||(this.expanded=!1)},this.returnFocus=null,this.onKeydown=e=>{e.key===`Escape`&&this.expanded&&(this.expanded=!1,this.returnFocus?.focus(),this.returnFocus=null)},this.onFocusOut=e=>{let t=e.relatedTarget;t&&!this.contains(t)&&(this.expanded=!1)}}static{this.styles=S`
        :host {
            position: fixed;
            inset-block: 48px 0;
            inset-inline-end: 0;
            z-index: 8000;
            box-sizing: border-box;
            inline-size: 0;
            overflow: hidden;
            background-color: var(--ui-surface-1);
            color: var(--ui-ink-muted);
            font-family: var(--ui-font-family);
            transition: inline-size var(--ui-duration-moderate) cubic-bezier(0.2, 0, 1, 0.9);
        }

        :host([expanded]) {
            inline-size: 256px;
            overflow-y: auto;
            overscroll-behavior: contain;
        }

        /* the side borders, on the content part rather than :host so a page-wide CSS reset can't remove them */
        [part='base'] {
            box-sizing: border-box;
            min-block-size: 100%;
            border-inline: 1px solid var(--ui-border-subtle-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.onKeydown),this.addEventListener(`focusout`,this.onFocusOut),this.stopOutside=Hr(document,this.onDocumentPointerDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onKeydown),this.removeEventListener(`focusout`,this.onFocusOut),this.stopOutside?.(),this.stopOutside=void 0}willUpdate(e){e.has(`expanded`)&&this.expanded&&(this.returnFocus=ir())}updated(e){e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return E`<div part="base" role=${F(this.label?`region`:void 0)} aria-label=${F(this.label||void 0)} ?hidden=${!this.expanded}><slot></slot></div>`}};R([N({type:Boolean,reflect:!0})],xa.prototype,`expanded`,void 0),R([N()],xa.prototype,`label`,void 0),xa=R([M(`ui-header-panel`)],xa);var Sa=class extends L{constructor(...e){super(...e),this.label=``}static{this.styles=S`
        :host {
            display: block;
            font-family: var(--ui-font-family);
        }

        header {
            position: fixed;
            inset-block-start: 0;
            inset-inline: 0;
            z-index: 8000;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 48px;
            border-block-end: 1px solid var(--ui-border-subtle-1);
            background-color: var(--ui-canvas);
        }

        @media (forced-colors: active) {
            header {
                border-block-end-color: CanvasText;
            }
        }
    `}render(){return E`<header part="base" aria-label=${F(this.label||void 0)}><slot></slot></header>`}};R([N()],Sa.prototype,`label`,void 0),Sa=R([M(`ui-header`)],Sa);var Ca=class extends L{static{this.styles=S`
        :host {
            display: block;
            flex: 1 1 0%;
            overflow: hidden auto;
        }

        /* 16px above the first item, on the list rather than :host so a page-wide CSS reset can't remove it */
        .list {
            margin: 0;
            padding: 16px 0 0;
            list-style: none;
        }
    `}render(){return E`<div class="list" role="list"><slot></slot></div>`}};Ca=R([M(`ui-side-nav-items`)],Ca);var wa=E`<svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>`,Ta=S`
    :host {
        display: block;
        inline-size: 100%;
        overflow: hidden;
    }

    /* --ui-nav-item-*: Carbon rows run edge to edge, square; a design can inset and round them */
    a {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        min-block-size: 32px;
        margin-inline: var(--ui-nav-item-inset, 0);
        padding: 0 16px;
        border-radius: var(--ui-nav-item-radius, 0);
        color: var(--ui-ink-muted);
        text-decoration: none;
        outline: none;
        transition:
            color var(--ui-duration-moderate),
            background-color var(--ui-duration-moderate),
            outline var(--ui-duration-moderate);
    }

    :host([large]) a {
        block-size: 48px;
    }

    a:hover {
        background-color: var(--ui-canvas-hover);
    }

    a:hover .text {
        color: var(--ui-ink);
    }

    a:focus-visible {
        outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
        outline-offset: -2px;
    }

    /* the current page: a fill and a bar on the start edge (--ui-nav-current-*; Kanok: an indigo mark) */
    :host([current]) a {
        background-color: var(--ui-nav-current-background, var(--ui-canvas-selected));
    }

    :host([current]) a::before {
        content: '';
        position: absolute;
        inset-block: var(--ui-nav-current-mark-inset, 0);
        inset-inline-start: 0;
        inline-size: var(--ui-nav-current-mark-width, 3px);
        border-radius: var(--ui-nav-current-mark-radius, 0);
        background-color: var(--ui-nav-current-mark, var(--ui-primary)); /* border-interactive */
    }

    :host([current]) .text {
        color: var(--ui-ink);
        font-weight: 600;
    }

    .icon {
        display: none;
        flex: 0 0 16px;
        align-items: center;
        justify-content: center;
        margin-inline-end: 24px;
    }

    :host([data-icon]) .icon {
        display: flex;
    }

    ::slotted([slot='icon']) {
        width: 16px;
        height: 16px;
        fill: var(--ui-icon-secondary);
    }

    :host([current]) ::slotted([slot='icon']) {
        fill: var(--ui-icon-primary);
    }

    .text {
        overflow: hidden;
        color: var(--ui-ink-muted);
        font: var(--ui-font-body-sm);
        line-height: 20px;
        letter-spacing: 0.1px;
        text-overflow: ellipsis;
        white-space: nowrap;
        user-select: none;
    }

    @media (forced-colors: active) {
        :host([current]) a::before {
            inline-size: 3px; /* shown here even where a design hides it: the tint is gone in forced colours */
            background-color: Highlight;
        }
    }
`,Ea=class extends L{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Ta,S`
        a {
            block-size: 32px;
            padding-inline-start: 32px;
        }

        :host([data-parent-icon]) a {
            padding-inline-start: 72px;
        }

        .text {
            font-weight: 400;
        }
    `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&(this.parentElement?.closest(`ui-side-nav-menu`))?.requestUpdate()}render(){return E`<a part="base" href=${this.href} target=${this.target||O} rel=${this.rel||O} aria-current=${F(this.current?`page`:void 0)} @click=${ra}><span class="text"><slot></slot></span></a>`}};R([N()],Ea.prototype,`href`,void 0),R([N({type:Boolean,reflect:!0})],Ea.prototype,`current`,void 0),R([N()],Ea.prototype,`target`,void 0),R([N()],Ea.prototype,`rel`,void 0),Ea=R([M(`ui-side-nav-menu-item`)],Ea);var Da=class extends L{constructor(...e){super(...e),this.label=``,this.expanded=!1,this.large=!1,this.slots=new Gi(this),this.menuId=I(`ui-side-nav-menu`)}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=S`
        :host {
            display: block;
            inline-size: 100%;
            overflow: hidden;
        }

        .trigger {
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            inline-size: calc(100% - 2 * var(--ui-nav-item-inset, 0px));
            block-size: 32px;
            margin-inline: var(--ui-nav-item-inset, 0);
            padding: 0 16px;
            border: none;
            border-radius: var(--ui-nav-item-radius, 0);
            background: transparent;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-emphasis);
            line-height: 18px; /* heading-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            text-align: start;
            cursor: pointer;
            outline: none;
            user-select: none;
            transition:
                color var(--ui-duration-moderate),
                background-color var(--ui-duration-moderate);
        }

        :host([large]) .trigger {
            block-size: 48px;
        }

        .trigger:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-ink);
        }

        .trigger:focus-visible {
            outline: var(--ui-focus-width, 2px) solid var(--ui-focus);
            outline-offset: -2px;
        }

        :host([data-active]) .trigger[aria-expanded='false'] {
            background-color: var(--ui-nav-current-background, var(--ui-canvas-selected));
            color: var(--ui-ink);
        }

        :host([data-active]) .trigger[aria-expanded='false']::before {
            content: '';
            position: absolute;
            inset-block: var(--ui-nav-current-mark-inset, 0);
            inset-inline-start: 0;
            inline-size: var(--ui-nav-current-mark-width, 3px);
            border-radius: var(--ui-nav-current-mark-radius, 0);
            background-color: var(--ui-nav-current-mark, var(--ui-primary));
        }

        :host([data-active]) .title {
            color: var(--ui-ink);
            font-weight: 600;
        }

        .icon {
            display: none;
            flex: 0 0 16px;
            align-items: center;
            justify-content: center;
            margin-inline-end: 24px;
        }

        :host([data-icon]) .icon {
            display: flex;
        }

        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
        }

        :host([data-active]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        .title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .chevron-box {
            display: flex;
            flex: 1;
            justify-content: flex-end;
        }

        .chevron {
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
            transition: transform var(--ui-duration-moderate);
        }

        .trigger[aria-expanded='true'] .chevron {
            transform: rotate(180deg);
        }

        .menu {
            display: block;
            max-block-size: 0;
            margin: 0;
            padding: 0;
            list-style: none;
            visibility: hidden;
        }

        .trigger[aria-expanded='true'] + .menu {
            max-block-size: 1500px;
            visibility: inherit;
        }

        @media (forced-colors: active) {
            :host([data-active]) .trigger[aria-expanded='false']::before {
                inline-size: 3px; /* shown here even where a design hides it: the tint is gone in forced colours */
                background-color: Highlight;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){this.toggleAttribute(`data-icon`,this.slots.has(`icon`));let t=[...this.querySelectorAll(`:scope > ui-side-nav-menu-item`)];for(let e of t)e.toggleAttribute(`data-parent-icon`,this.slots.has(`icon`));this.toggleAttribute(`data-active`,t.some(e=>e.current)),e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return E`
            <button class="trigger" part="trigger" type="button" aria-expanded=${this.expanded?`true`:`false`} aria-controls=${this.menuId} @click=${()=>this.expanded=!this.expanded}>
                <span class="icon"><slot name="icon"></slot></span>
                <span class="title">${this.label}</span>
                <span class="chevron-box">${wa}</span>
            </button>
            <div class="menu" part="menu" id=${this.menuId} role="list"><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
        `}};R([N()],Da.prototype,`label`,void 0),R([N({type:Boolean,reflect:!0})],Da.prototype,`expanded`,void 0),R([N({type:Boolean,reflect:!0})],Da.prototype,`large`,void 0),Da=R([M(`ui-side-nav-menu`)],Da);var Oa=`(min-width: 1056px)`,Q=class extends L{constructor(...e){super(...e),this.expanded=!1,this.rail=!1,this.fixed=!1,this.collapsible=!1,this.label=``,this.localize=new B(this),this.returnFocus=null,this.onMenuButtonToggle=e=>{!e.defaultPrevented&&e.target instanceof X&&this.setExpanded(e.detail.active)},this.onMediaChange=()=>this.requestUpdate(),this.onKeydown=e=>{e.key===`Escape`&&this.expanded&&(this.setExpanded(!1),this.returnFocus?.focus(),this.returnFocus=null)}}static{this.styles=S`
        :host {
            display: contents;
            font-family: var(--ui-font-family);
        }

        nav {
            position: fixed;
            inset-block: 48px 0;
            inset-inline-start: 0;
            z-index: 8000;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            inline-size: 0;
            max-inline-size: 256px;
            overflow: hidden;
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            outline: none;
            /* Carbon .cds--side-nav: 110ms with the exit easing */
            transition:
                inline-size var(--ui-duration-moderate) var(--ui-easing-exit),
                transform var(--ui-duration-moderate) var(--ui-easing-exit);
            will-change: inline-size;
        }

        @media (min-width: 1056px) {
            nav {
                inline-size: 256px;
            }
        }

        :host([rail]) nav {
            inline-size: 48px;
        }

        :host([expanded]) nav,
        :host([data-hover-expanded]) nav {
            inline-size: 256px;
        }

        :host([fixed]) nav {
            inline-size: 256px;
        }

        /* Carbon side-nav--hidden (isPersistent={false}): closed on large screens too until expanded */
        @media (min-width: 1056px) {
            :host([collapsible]:not([expanded], [fixed], [rail])) nav {
                inline-size: 0;
            }
        }

        :host([fixed]:not([expanded])) nav {
            transform: translateX(-256px);
        }

        :host(:dir(rtl)[fixed]:not([expanded])) nav {
            transform: translateX(256px);
        }

        .overlay {
            position: fixed;
            inset-block-start: 48px;
            inset-inline-start: 0;
            inline-size: 0;
            block-size: 0;
            background-color: transparent;
            opacity: 0;
            /* Carbon .cds--side-nav__overlay: $transition-expansion (300ms) with $standard-easing (no tokens for either) */
            transition:
                opacity 300ms cubic-bezier(0.5, 0, 0.1, 1),
                background-color 300ms cubic-bezier(0.5, 0, 0.1, 1);
        }

        @media (prefers-reduced-motion: reduce) {
            .overlay {
                transition: none;
            }
        }

        @media (max-width: 1055.98px) {
            :host([expanded]:not([fixed])) .overlay {
                z-index: 6000;
                inline-size: 100vw;
                block-size: 100vh;
                background-color: var(--ui-overlay);
                opacity: 1;
            }
        }

        @media (forced-colors: active) {
            nav {
                border-inline-end: 1px solid CanvasText;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.onKeydown),this.mediaQuery??=matchMedia(Oa),this.mediaQuery.addEventListener(`change`,this.onMediaChange),this.root=this.getRootNode(),this.root.addEventListener(`ui-toggle`,this.onMenuButtonToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onKeydown),this.mediaQuery?.removeEventListener(`change`,this.onMediaChange),this.root?.removeEventListener(`ui-toggle`,this.onMenuButtonToggle),this.root=void 0}syncMenuButtons(){for(let e of this.root?.querySelectorAll?.(`ui-header-menu-button`)??[])e.active=this.expanded,this.collapsible&&(e.collapsible=!0)}get open(){return this.expanded||Dr(this,`hoverExpanded`)||this.fixed||!this.rail&&!this.collapsible&&!!this.mediaQuery?.matches}willUpdate(e){e.has(`expanded`)&&this.expanded&&(this.returnFocus=ir())}updated(e){(e.has(`expanded`)||e.has(`collapsible`))&&this.syncMenuButtons();let t=this.open;for(let e of this.querySelectorAll(`ui-side-nav-link, ui-side-nav-menu, ui-side-nav-menu-item, ui-header-nav, ui-header-menu, ui-header-menu-item`))e.dataset.inSideNav===void 0&&(e.toggleAttribute(`data-in-side-nav`,!0),e.requestUpdate?.()),e.dataset.collapsed!==void 0===t&&(e.toggleAttribute(`data-collapsed`,!t),e.requestUpdate?.())}setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:e},bubbles:!0,composed:!0})))}hoverExpand(e){this.rail&&(this.toggleAttribute(`data-hover-expanded`,e),this.requestUpdate())}onFocusOut(e){let t=e.relatedTarget;t&&(this.contains(t)||this.shadowRoot?.contains(t))||(this.hoverExpand(!1),!this.fixed&&this.expanded&&(this.collapsible||!this.mediaQuery?.matches)&&this.setExpanded(!1))}render(){return E`
            <div class="overlay" part="overlay" @click=${()=>this.setExpanded(!1)}></div>
            <nav
                part="base"
                aria-label=${this.label||this.localize.t.common.sideNavigation}
                tabindex="-1"
                ?inert=${!this.open&&!this.rail}
                @pointerenter=${()=>this.hoverExpand(!0)}
                @pointerleave=${()=>this.hoverExpand(!1)}
                @focusin=${()=>this.hoverExpand(!0)}
                @focusout=${this.onFocusOut}
            >
                <slot @slotchange=${()=>this.requestUpdate()}></slot>
            </nav>
        `}};R([N({type:Boolean,reflect:!0})],Q.prototype,`expanded`,void 0),R([N({type:Boolean,reflect:!0})],Q.prototype,`rail`,void 0),R([N({type:Boolean,reflect:!0})],Q.prototype,`fixed`,void 0),R([N({type:Boolean,reflect:!0})],Q.prototype,`collapsible`,void 0),R([N()],Q.prototype,`label`,void 0),Q=R([M(`ui-side-nav`)],Q);var ka=class extends L{constructor(...e){super(...e),this.href=`#main-content`,this.localize=new B(this)}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=S`
        a {
            position: absolute;
            inset-block-start: 0;
            inset-inline-start: 0;
            overflow: hidden;
            margin: -1px;
            padding: 0;
            border: 0;
            inline-size: 1px;
            block-size: 1px;
            clip-path: inset(50%);
            white-space: nowrap;
            font: var(--ui-font-body-sm);
            text-decoration: none;
        }

        a:focus {
            z-index: 9999;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            padding: 0 1rem;
            margin: 0;
            border: 4px solid var(--ui-focus);
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            inline-size: auto;
            block-size: 48px;
            clip-path: none;
            outline: none;
        }
    `}onClick(e){ia(e.currentTarget,this.href)&&e.preventDefault()}render(){return E`<a href=${this.href} @click=${this.onClick}><slot>${this.localize.t.common.skipToContent}</slot></a>`}};R([N()],ka.prototype,`href`,void 0),ka=R([M(`ui-skip-to-content`)],ka);var Aa={light:en`<svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.5 1h1v2.5h-1z"/><path d="M10.8 3.4h2.5v1h-2.5z" transform="rotate(-45 12.041 3.923)"/><path d="M12.5 7.5H15v1h-2.5z"/><path d="M11.6 10.8h1v2.5h-1z" transform="rotate(-45 12.075 12.04)"/><path d="M7.5 12.5h1V15h-1z"/><path d="M2.7 11.6h2.5v1H2.7z" transform="rotate(-45 3.96 12.078)"/><path d="M1 7.5h2.5v1H1z"/><path d="M3.4 2.7h1v2.5h-1z" transform="rotate(-45 3.925 3.961)"/><path d="M8 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-1C6.3 5 5 6.3 5 8s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/></svg>`,dark:en`<svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.2 2.3c-1 4.4 1.7 8.7 6.1 9.8h.2c-1.1 1.2-2.7 1.8-4.3 1.8h-.2C5.6 13.8 3 11 3.2 7.7c0-2.4 1.6-4.6 4-5.4M8 1C4.1 1.6 1.5 5.3 2.1 9.1c.6 3.3 3.4 5.8 6.8 5.9h.3c2.3 0 4.4-1.1 5.8-3 .2-.2.1-.6-.1-.7-.1-.1-.2-.1-.3-.1-3.9-.3-6.7-3.8-6.4-7.6.1-.6.2-1.2.4-1.8.1-.3 0-.6-.3-.7C8.1 1 8.1 1 8 1z"/></svg>`,system:en`<svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM18 28h-4v-4h4Zm10-6H4V6h24Z"/></svg>`},$=class extends L{constructor(...e){super(...e),this.lightTheme=`white`,this.darkTheme=`g100`,this.storageKey=Be,this.size=`md`,this.lowContrast=!1,this.tooltipPlacement=`top`,this.label=``,this.localize=new B(this),this.quiet=!0,this.onPageChange=e=>{let t=e.detail?.mode;e.target!==this&&We(t)&&t!==this.value&&(this.quiet=!0,this.value=t)},this.onStorage=e=>{if(!this.storageKey||e.key!==this.storageKey)return;let t=Xe(this.storageKey);t&&t!==this.value&&(this.quiet=!0,this.value=t)}}static{this.styles=S`
        :host {
            display: inline-block;
            vertical-align: top;
        }
    `}connectedCallback(){super.connectedCallback();let e=Qe(this.storageKey,this.value);e!==this.value&&(this.quiet=!0,this.value=e),this.stopWatching=et(()=>{this.value===`system`&&this.apply()}),document.addEventListener(Ue,this.onPageChange),globalThis.addEventListener(`storage`,this.onStorage)}disconnectedCallback(){super.disconnectedCallback(),this.stopWatching?.(),document.removeEventListener(Ue,this.onPageChange),globalThis.removeEventListener(`storage`,this.onStorage)}updated(e){super.updated(e),(e.has(`value`)||e.has(`lightTheme`)||e.has(`darkTheme`))&&(this.apply(),!this.quiet&&e.has(`value`)&&this.value&&Ze(this.storageKey,this.value),this.quiet=!1)}apply(){return this.value?$e(this.value,Ke(this.lightTheme,this.darkTheme)):void 0}onChange(e){e.stopPropagation();let t=e.detail.name;if(!We(t))return;this.quiet=!0,this.value=t,Ze(this.storageKey,t);let n=$e(t,Ke(this.lightTheme,this.darkTheme));this.dispatchEvent(new CustomEvent(Ue,{detail:{mode:t,theme:n},bubbles:!0,composed:!0}))}render(){let e=this.localize.t.common,t={light:e.themeLight,dark:e.themeDark,system:e.themeSystem};return E`<ui-content-switcher
            part="switcher"
            aria-label=${this.label||e.theme}
            size=${this.size}
            ?low-contrast=${this.lowContrast}
            selected-index=${Math.max(0,Re.indexOf(this.value??`light`))}
            @ui-change=${this.onChange}
        >
            ${Re.map(e=>E`<ui-content-switcher-item part="item" icon-only name=${e} label=${t[e]} tooltip-placement=${this.tooltipPlacement}>${Aa[e]}</ui-content-switcher-item>`)}
        </ui-content-switcher>`}};R([N({reflect:!0})],$.prototype,`value`,void 0),R([N({attribute:`light-theme`})],$.prototype,`lightTheme`,void 0),R([N({attribute:`dark-theme`})],$.prototype,`darkTheme`,void 0),R([N({attribute:`storage-key`})],$.prototype,`storageKey`,void 0),R([N({reflect:!0})],$.prototype,`size`,void 0),R([N({type:Boolean,attribute:`low-contrast`})],$.prototype,`lowContrast`,void 0),R([N({attribute:`tooltip-placement`})],$.prototype,`tooltipPlacement`,void 0),R([N()],$.prototype,`label`,void 0),$=R([M(`ui-theme-switcher`)],$);export{xr as $,ei as A,en as At,ir as B,Ke as Bt,Pi as C,M as Ct,L as D,tn as Dt,R as E,D as Et,Ur as F,$e as Ft,Qn as G,hr as H,t as Ht,Br as I,Qe as It,vr as J,lr as K,Ir as L,We as Lt,Hr as M,_t as Mt,Qr as N,Ue as Nt,ri as O,E as Ot,$r as P,Be as Pt,_r as Q,nr as R,Xe as Rt,Fi as S,N as St,Ti as T,O as Tt,Or as U,e as Ut,ar as V,et as Vt,Dr as W,er as X,pr as Y,tr as Z,Ui as _,En as _t,la as a,or as at,Ni as b,P as bt,ra as c,I as ct,ea as d,Fn as dt,br as et,qi as f,In as ft,Wi as g,Tn as gt,Gi as h,Dn as ht,sa as i,mr as it,ti as j,S as jt,ni as k,mn as kt,Zi as l,Gn as lt,ta as m,F as mt,Ta as n,rr as nt,ua as o,dr as ot,Xi as p,An as pt,Er as q,J as r,cr as rt,aa as s,Tr as st,wa as t,wr as tt,Ki as u,Mn as ut,zi as v,wn as vt,B as w,j as wt,Ii as x,xn as xt,Mi as y,Cn as yt,$n as z,Ze as zt};