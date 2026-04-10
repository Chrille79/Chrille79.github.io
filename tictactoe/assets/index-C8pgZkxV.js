var G0=Object.defineProperty;var T0=(d,t,e)=>t in d?G0(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var G=(d,t,e)=>T0(d,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i0=globalThis,g0=i0.ShadowRoot&&(i0.ShadyCSS===void 0||i0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,m0=Symbol(),y0=new WeakMap;let z0=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==m0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(g0&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=y0.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&y0.set(e,t))}return t}toString(){return this.cssText}};const U0=d=>new z0(typeof d=="string"?d:d+"",void 0,m0),f0=(d,...t)=>{const e=d.length===1?d[0]:t.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+d[a+1],d[0]);return new z0(e,d,m0)},I0=(d,t)=>{if(g0)d.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=i0.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,d.appendChild(s)}},b0=g0?d=>d:d=>d instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return U0(e)})(d):d;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:j0,defineProperty:V0,getOwnPropertyDescriptor:B0,getOwnPropertyNames:W0,getOwnPropertySymbols:q0,getPrototypeOf:K0}=Object,F=globalThis,w0=F.trustedTypes,X0=w0?w0.emptyScript:"",o0=F.reactiveElementPolyfillSupport,J=(d,t)=>d,d0={toAttribute(d,t){switch(t){case Boolean:d=d?X0:null;break;case Object:case Array:d=d==null?d:JSON.stringify(d)}return d},fromAttribute(d,t){let e=d;switch(t){case Boolean:e=d!==null;break;case Number:e=d===null?null:Number(d);break;case Object:case Array:try{e=JSON.parse(d)}catch{e=null}}return e}},P0=(d,t)=>!j0(d,t),x0={attribute:!0,type:String,converter:d0,reflect:!1,useDefault:!1,hasChanged:P0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x0){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&V0(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=B0(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const r=i==null?void 0:i.call(this);a==null||a.call(this,n),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x0}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const t=K0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const e=this.properties,s=[...W0(e),...q0(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(b0(i))}else t!==void 0&&e.push(b0(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return I0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var a;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:d0).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var a,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((a=r.converter)==null?void 0:a.fromAttribute)!==void 0?r.converter:d0;this._$Em=i;const u=h.fromAttribute(e,r.type);this[i]=u??((n=this._$Ej)==null?void 0:n.get(i))??u,this._$Em=null}}requestUpdate(t,e,s,i=!1,a){var n;if(t!==void 0){const r=this.constructor;if(i===!1&&(a=this[t]),s??(s=r.getPropertyOptions(t)),!((s.hasChanged??P0)(a,e)||s.useDefault&&s.reflect&&a===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,n]of i){const{wrapped:r}=n,h=this[a];r!==!0||this._$AL.has(a)||h===void 0||this.C(a,void 0,n,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[J("elementProperties")]=new Map,W[J("finalized")]=new Map,o0==null||o0({ReactiveElement:W}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,_0=d=>d,n0=Z.trustedTypes,A0=n0?n0.createPolicy("lit-html",{createHTML:d=>d}):void 0,D0="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,R0="?"+H,J0=`<${R0}>`,V=document,Y=()=>V.createComment(""),Q=d=>d===null||typeof d!="object"&&typeof d!="function",v0=Array.isArray,Z0=d=>v0(d)||typeof(d==null?void 0:d[Symbol.iterator])=="function",r0=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k0=/-->/g,M0=/>/g,T=RegExp(`>|${r0}(?:([^\\s"'>=/]+)(${r0}*=${r0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),S0=/'/g,N0=/"/g,H0=/^(?:script|style|textarea|title)$/i,F0=d=>(t,...e)=>({_$litType$:d,strings:t,values:e}),k=F0(1),D=F0(2),q=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),C0=new WeakMap,U=V.createTreeWalker(V,129);function L0(d,t){if(!v0(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return A0!==void 0?A0.createHTML(t):t}const Y0=(d,t)=>{const e=d.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",n=X;for(let r=0;r<e;r++){const h=d[r];let u,c,o=-1,l=0;for(;l<h.length&&(n.lastIndex=l,c=n.exec(h),c!==null);)l=n.lastIndex,n===X?c[1]==="!--"?n=k0:c[1]!==void 0?n=M0:c[2]!==void 0?(H0.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=T):c[3]!==void 0&&(n=T):n===T?c[0]===">"?(n=i??X,o=-1):c[1]===void 0?o=-2:(o=n.lastIndex-c[2].length,u=c[1],n=c[3]===void 0?T:c[3]==='"'?N0:S0):n===N0||n===S0?n=T:n===k0||n===M0?n=X:(n=T,i=void 0);const p=n===T&&d[r+1].startsWith("/>")?" ":"";a+=n===X?h+J0:o>=0?(s.push(u),h.slice(0,o)+D0+h.slice(o)+H+p):h+H+(o===-2?r:p)}return[L0(d,a+(d[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class t0{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,n=0;const r=t.length-1,h=this.parts,[u,c]=Y0(t,e);if(this.el=t0.createElement(u,s),U.currentNode=this.el.content,e===2||e===3){const o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}for(;(i=U.nextNode())!==null&&h.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(const o of i.getAttributeNames())if(o.endsWith(D0)){const l=c[n++],p=i.getAttribute(o).split(H),$=/([.?@])?(.*)/.exec(l);h.push({type:1,index:a,name:$[2],strings:p,ctor:$[1]==="."?t1:$[1]==="?"?e1:$[1]==="@"?s1:a0}),i.removeAttribute(o)}else o.startsWith(H)&&(h.push({type:6,index:a}),i.removeAttribute(o));if(H0.test(i.tagName)){const o=i.textContent.split(H),l=o.length-1;if(l>0){i.textContent=n0?n0.emptyScript:"";for(let p=0;p<l;p++)i.append(o[p],Y()),U.nextNode(),h.push({type:2,index:++a});i.append(o[l],Y())}}}else if(i.nodeType===8)if(i.data===R0)h.push({type:2,index:a});else{let o=-1;for(;(o=i.data.indexOf(H,o+1))!==-1;)h.push({type:7,index:a}),o+=H.length-1}a++}}static createElement(t,e){const s=V.createElement("template");return s.innerHTML=t,s}}function K(d,t,e=d,s){var n,r;if(t===q)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const a=Q(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((r=i==null?void 0:i._$AO)==null||r.call(i,!1),a===void 0?i=void 0:(i=new a(d),i._$AT(d,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=K(d,i._$AS(d,t.values),i,s)),t}class Q0{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??V).importNode(e,!0);U.currentNode=i;let a=U.nextNode(),n=0,r=0,h=s[0];for(;h!==void 0;){if(n===h.index){let u;h.type===2?u=new e0(a,a.nextSibling,this,t):h.type===1?u=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(u=new i1(a,this,t)),this._$AV.push(u),h=s[++r]}n!==(h==null?void 0:h.index)&&(a=U.nextNode(),n++)}return U.currentNode=V,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class e0{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),Q(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Z0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=t0.createElement(L0(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(e);else{const n=new Q0(i,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=C0.get(t.strings);return e===void 0&&C0.set(t.strings,e=new t0(t)),e}k(t){v0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new e0(this.O(Y()),this.O(Y()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=_0(t).nextSibling;_0(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class a0{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}_$AI(t,e=this,s,i){const a=this.strings;let n=!1;if(a===void 0)t=K(this,t,e,0),n=!Q(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const r=t;let h,u;for(t=a[0],h=0;h<a.length-1;h++)u=K(this,r[s+h],e,h),u===q&&(u=this._$AH[h]),n||(n=!Q(u)||u!==this._$AH[h]),u===N?t=N:t!==N&&(t+=(u??"")+a[h+1]),this._$AH[h]=u}n&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class t1 extends a0{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class e1 extends a0{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class s1 extends a0{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??N)===q)return;const s=this._$AH,i=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==N&&(s===N||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class i1{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const l0=Z.litHtmlPolyfillSupport;l0==null||l0(t0,e0),(Z.litHtmlVersions??(Z.litHtmlVersions=[])).push("3.3.2");const n1=(d,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const a=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new e0(t.insertBefore(Y(),a),a,void 0,e??{})}return i._$AI(d),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis;class j extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=n1(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return q}}var E0;j._$litElement$=!0,j.finalized=!0,(E0=I.litElementHydrateSupport)==null||E0.call(I,{LitElement:j});const h0=I.litElementPolyfillSupport;h0==null||h0({LitElement:j});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");const R={relu:{name:"ReLU",formula:"max(0, x)",fn:d=>Math.max(0,d),derivative:d=>d>0?1:0},sigmoid:{name:"Sigmoid",formula:"1 / (1 + e⁻ˣ)",fn:d=>1/(1+Math.exp(-d)),derivative:d=>{const t=1/(1+Math.exp(-d));return t*(1-t)}},tanh:{name:"Tanh",formula:"tanh(x)",fn:d=>Math.tanh(d),derivative:d=>1-Math.tanh(d)**2},leaky_relu:{name:"Leaky ReLU",formula:"x > 0 ? x : 0.01x",fn:d=>d>0?d:.01*d,derivative:d=>d>0?1:.01}};class O0{constructor(t=[12],e=null,s="softmax"){this.hiddenSizes=t,this.hiddenActivations=e||t.map(()=>"relu"),this.outputActivation=s,this.layerSizes=[9,...t,9],this.weights=[],this.biases=[];for(let i=0;i<this.layerSizes.length-1;i++)this.weights.push(this.randomMatrix(this.layerSizes[i+1],this.layerSizes[i])),this.biases.push(new Array(this.layerSizes[i+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastInput=new Array(9).fill(0),this.lastHiddenRaw=t.map(i=>new Array(i).fill(0)),this.lastHidden=t.map(i=>new Array(i).fill(0)),this.lastOutputRaw=new Array(9).fill(0),this.lastOutput=new Array(9).fill(0),this.lastMasked=new Array(9).fill(0),this.lastMask=new Array(9).fill(1),this.lastGradients=null,this.learningRate=.05,this.trainingGames=0}randomMatrix(t,e){const s=[];for(let i=0;i<t;i++){s[i]=[];for(let a=0;a<e;a++)s[i][a]=(Math.random()-.5)*.5}return s}softmax(t){const e=Math.max(...t),s=t.map(a=>Math.exp(a-e)),i=s.reduce((a,n)=>a+n,0);return s.map(a=>a/i)}_getActivation(t){return R[t]||R.relu}forward(t){this.lastInput=[...t];let e=t;for(let n=0;n<this.hiddenSizes.length;n++){const r=this.hiddenSizes[n],h=this._getActivation(this.hiddenActivations[n]).fn,u=new Array(r).fill(0),c=new Array(r).fill(0);for(let o=0;o<r;o++){let l=this.biases[n][o];for(let p=0;p<e.length;p++)l+=this.weights[n][o][p]*e[p];u[o]=l,c[o]=h(l)}this.lastHiddenRaw[n]=u,this.lastHidden[n]=c,e=c}const s=this.weights.length-1;this.lastOutputRaw=new Array(9).fill(0);for(let n=0;n<9;n++){let r=this.biases[s][n];for(let h=0;h<e.length;h++)r+=this.weights[s][n][h]*e[h];this.lastOutputRaw[n]=r}if(this.outputActivation==="softmax")this.lastOutput=this.softmax(this.lastOutputRaw);else{const n=this._getActivation(this.outputActivation).fn;this.lastOutput=this.lastOutputRaw.map(r=>n(r))}this.lastMask=t.map(n=>n===0?1:0);const i=this.lastOutput.map((n,r)=>n*this.lastMask[r]),a=i.reduce((n,r)=>n+r,0);return this.lastMasked=a>0?i.map(n=>n/a):this.lastMask.map(n=>n/this.lastMask.reduce((r,h)=>r+h,0)),this.lastMasked}pickMove(t="greedy",e={}){const s=this.lastMasked;if(!s)return-1;switch(t){case"greedy":{let i=-1,a=-1;for(let n=0;n<9;n++)s[n]>a&&(a=s[n],i=n);return i}case"roulette":{const i=Math.random();let a=0;for(let n=0;n<9;n++)if(a+=s[n],i<a)return n;return 8}case"softmax":{const i=e.temperature||.5,a=this.lastOutputRaw.map((l,p)=>this.lastMask[p]?l/i:-1e9),n=Math.max(...a),r=a.map(l=>Math.exp(l-n)),h=r.reduce((l,p)=>l+p,0),u=r.map(l=>l/h),c=Math.random();let o=0;for(let l=0;l<9;l++)if(o+=u[l],c<o)return l;return 8}case"top-k":{const i=e.k||3,n=s.map((c,o)=>({p:c,i:o})).sort((c,o)=>o.p-c.p).slice(0,i).filter(c=>c.p>0),r=n.reduce((c,o)=>c+o.p,0),h=Math.random()*r;let u=0;for(const c of n)if(u+=c.p,h<u)return c.i;return n[n.length-1].i}case"epsilon-greedy":{const i=e.epsilon||.1;if(Math.random()<i){const r=[];for(let h=0;h<9;h++)s[h]>0&&r.push(h);return r[Math.floor(Math.random()*r.length)]}let a=-1,n=-1;for(let r=0;r<9;r++)s[r]>n&&(n=s[r],a=r);return a}default:return this.pickMove("greedy")}}chooseMove(t,e="roulette",s={}){return e===!0&&(e="greedy"),e===!1&&(e="roulette"),this.forward(t),this.pickMove(e,s)}_backpropAndUpdate(t,e=null){const s=[],i=[];for(let l=0;l<this.weights.length;l++)s.push(this.weights[l].map(p=>p.map(()=>0))),i.push(new Array(this.biases[l].length).fill(0));const a=this.hiddenSizes.map(l=>new Array(l).fill(0)),n=this.weights.length-1,r=this.hiddenSizes.length-1,h=this.lastHidden[r];for(let l=0;l<9;l++){i[n][l]=t[l];for(let p=0;p<h.length;p++)s[n][l][p]=t[l]*h[p]}const u=this._getActivation(this.hiddenActivations[r]).derivative;for(let l=0;l<this.hiddenSizes[r];l++){let p=0;for(let $=0;$<9;$++)p+=this.weights[n][$][l]*t[$];a[r][l]=p*u(this.lastHiddenRaw[r][l])}for(let l=r-1;l>=0;l--){const p=a[l+1],$=l+1;for(let v=0;v<this.hiddenSizes[l+1];v++){i[$][v]=p[v];for(let _=0;_<this.hiddenSizes[l];_++)s[$][v][_]=p[v]*this.lastHidden[l][_]}const m=this._getActivation(this.hiddenActivations[l]).derivative;for(let v=0;v<this.hiddenSizes[l];v++){let _=0;for(let y=0;y<this.hiddenSizes[l+1];y++)_+=this.weights[$][y][v]*p[y];a[l][v]=_*m(this.lastHiddenRaw[l][v])}}const c=a[0];for(let l=0;l<this.hiddenSizes[0];l++){i[0][l]=c[l];for(let p=0;p<9;p++)s[0][l][p]=c[l]*this.lastInput[p]}const o=e!=null?l=>Math.max(-e,Math.min(e,l)):l=>l;for(let l=0;l<this.weights.length;l++)for(let p=0;p<this.weights[l].length;p++){this.biases[l][p]+=this.learningRate*o(i[l][p]);for(let $=0;$<this.weights[l][p].length;$++)this.weights[l][p][$]+=this.learningRate*o(s[l][p][$])}return{outputGrad:t,hiddenGrad:a,weightsGrad:s,biasesGrad:i}}backpropagate(t,e,s){this.forward(t);const i=new Array(9).fill(0);for(let a=0;a<9;a++)i[a]=a===e?s*(1-this.lastOutput[a]):s*-this.lastOutput[a];return this.lastGradients=this._backpropAndUpdate(i,1),this.lastGradients}minimax(t,e,s=-1/0,i=1/0){const a=this.checkWinner(t);if(a===1)return{score:1,move:-1};if(a===-1)return{score:-1,move:-1};const n=[];for(let h=0;h<9;h++)t[h]===0&&n.push(h);if(n.length===0)return{score:0,move:-1};let r=n[0];if(e===1){let h=-1/0;for(const u of n){t[u]=e;const{score:c}=this.minimax(t,-1,s,i);if(t[u]=0,c>h&&(h=c,r=u),s=Math.max(s,c),i<=s)break}return{score:h,move:r}}else{let h=1/0;for(const u of n){t[u]=e;const{score:c}=this.minimax(t,1,s,i);if(t[u]=0,c<h&&(h=c,r=u),i=Math.min(i,c),i<=s)break}return{score:h,move:r}}}supervisedStep(t,e,s=!1){this.forward(t);const i=Array.isArray(e)?e:[e],a=new Array(9).fill(0);if(s&&i.length>1){const r=[3,1,3,1,5,1,3,1,3];let h=0;for(const u of i)h+=r[u];for(const u of i)a[u]=r[u]/h}else{const r=1/i.length;for(const h of i)a[h]=r}const n=new Array(9).fill(0);for(let r=0;r<9;r++)n[r]=-(this.lastOutput[r]-a[r]);this.lastGradients=this._backpropAndUpdate(n,null)}_collectAllPositions(){const t=new Map,e=(s,i)=>{if(this.checkWinner(s)!==0)return;const a=[];for(let o=0;o<9;o++)s[o]===0&&a.push(o);if(a.length===0)return;const n=s.join(",")+"|"+i;if(t.has(n))return;const r=this.minimax([...s],i),h=r.score,u=[];for(const o of a){s[o]=i;const{score:l}=this.minimax(s,-i);s[o]=0,l===h&&u.push(o)}const c=s.map(o=>o*i);t.set(n,{perspective:c,bestMoves:u,bestMove:r.move});for(const o of a)s[o]=i,e(s,-i),s[o]=0};return e(new Array(9).fill(0),1),[...t.values()]}train(t,e={}){const{opponent:s="minimax",discountFactor:i=.9,epsilon:a=.3,epsilonDecay:n=.999,lrDecay:r=.9999,onProgress:h=null}=e;let u=a;if(s==="minimax"||s==="minimax_rules"){const c=this._cachedPositions||this._collectAllPositions();this._cachedPositions=c;let o;if(s==="minimax_rules"){const $=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];o=[];for(const m of c){const v=m.perspective;let _=1;m.bestMoves.length===1&&(_=3);for(const[y,A,S]of $){const w=[v[y],v[A],v[S]],M=w.filter(b=>b===1).length,L=w.filter(b=>b===-1).length;if(w.filter(b=>b===0).length===1&&(M===2||L===2)){_=15;break}}_<10&&m.bestMoves.length===1&&m.bestMoves[0]===4&&(_=10),_<5&&v.filter(A=>A!==0).length<=2&&(_=5);for(let y=0;y<_;y++)o.push(m)}}else o=c;const l=Math.max(1,Math.ceil(t/o.length));let p=0;for(let $=0;$<l;$++){for(let m=o.length-1;m>0;m--){const v=Math.floor(Math.random()*(m+1));[o[m],o[v]]=[o[v],o[m]]}for(const m of o){if(p>=t)break;this.supervisedStep(m.perspective,m.bestMoves||m.bestMove,s==="minimax_rules"),this.trainingGames++,p++,h&&p%10===0&&h(p,t)}this.learningRate*=r}return}for(let c=0;c<t;c++){const o=[],l=[],p=new Array(9).fill(0);let $=1,m=0;const v=Math.random()<.5?1:-1;for(;;){const y=p.map(w=>w*$);let A;if($===v||s==="self"){if(Math.random()<u){const w=[];for(let M=0;M<9;M++)p[M]===0&&w.push(M);A=w[Math.floor(Math.random()*w.length)]}else A=this.chooseMove(y,!1);$===v?o.push({board:[...y],action:A}):l.push({board:[...y],action:A})}else{const w=[];for(let M=0;M<9;M++)p[M]===0&&w.push(M);A=w[Math.floor(Math.random()*w.length)]}if(p[A]=$,m=this.checkWinner(p),m!==0||p.every(w=>w!==0))break;$*=-1}const _=m===v?1:m===-v?-1:.2;for(let y=o.length-1;y>=0;y--){const A=Math.pow(i,o.length-1-y);this.backpropagate(o[y].board,o[y].action,_*A)}if(s==="self"&&l.length>0){const y=m===-v?1:m===v?-1:.2;for(let A=l.length-1;A>=0;A--){const S=Math.pow(i,l.length-1-A);this.backpropagate(l[A].board,l[A].action,y*S)}}u*=n,this.trainingGames++,(c+1)%500===0&&(this.learningRate*=r),h&&c%10===0&&h(c,t)}}checkWinner(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[s,i,a]of e)if(t[s]!==0&&t[s]===t[i]&&t[i]===t[a])return t[s];return 0}exportModel(){return JSON.stringify({hiddenSizes:this.hiddenSizes,hiddenActivations:this.hiddenActivations,outputActivation:this.outputActivation,weights:this.weights,biases:this.biases,learningRate:this.learningRate,trainingGames:this.trainingGames})}importModel(t){const e=typeof t=="string"?JSON.parse(t):t;this.hiddenSizes=e.hiddenSizes,this.hiddenActivations=e.hiddenActivations,this.outputActivation=e.outputActivation,this.layerSizes=[9,...e.hiddenSizes,9],this.weights=e.weights,this.biases=e.biases,this.learningRate=e.learningRate,this.trainingGames=e.trainingGames,this.lastHiddenRaw=e.hiddenSizes.map(s=>new Array(s).fill(0)),this.lastHidden=e.hiddenSizes.map(s=>new Array(s).fill(0)),this.lastGradients=null,this._cachedPositions=null}getVisualizationData(){return{hiddenSizes:this.hiddenSizes,hiddenActivations:this.hiddenActivations,outputActivation:this.outputActivation,weights:this.weights,biases:this.biases,activations:{input:this.lastInput,hiddenRaw:this.lastHiddenRaw,hidden:this.lastHidden,outputRaw:this.lastOutputRaw,output:this.lastOutput,mask:this.lastMask,masked:this.lastMasked},gradients:this.lastGradients,trainingGames:this.trainingGames}}reset(){this.weights=[],this.biases=[];for(let t=0;t<this.layerSizes.length-1;t++)this.weights.push(this.randomMatrix(this.layerSizes[t+1],this.layerSizes[t])),this.biases.push(new Array(this.layerSizes[t+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastHiddenRaw=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.lastHidden=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.learningRate=.05,this.trainingGames=0,this.lastGradients=null,this._cachedPositions=null}}class c0 extends j{constructor(){super(),this.board=[0,0,0,0,0,0,0,0,0],this.disabled=!1,this.winLine=[]}render(){return k`
      <div class="grid">
        ${this.board.map((t,e)=>k`
          <div
            class="cell ${t===1?"x":t===-1?"o":""} ${t!==0?"occupied":""} ${this.disabled?"disabled":""} ${this.winLine.includes(e)?"win":""}"
            @click=${()=>this._onCellClick(e)}
          >
            <span class="node-label">${e+1}</span>
            ${t===1?"X":t===-1?"O":""}
          </div>
        `)}
      </div>
    `}_onCellClick(t){this.disabled||this.board[t]!==0||this.dispatchEvent(new CustomEvent("cell-click",{detail:{index:t},bubbles:!0,composed:!0}))}}G(c0,"properties",{board:{type:Array},disabled:{type:Boolean},winLine:{type:Array}}),G(c0,"styles",f0`
    :host {
      display: block;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 4px;
      width: 240px;
      height: 240px;
      margin: 0 auto;
    }

    .cell {
      background: #1e293b;
      border: 2px solid #334155;
      border-radius: 8px;
      font-size: 2.5rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      color: #e2e8f0;
      position: relative;
    }

    .node-label {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: 500;
      color: #334155;
      pointer-events: none;
    }

    .cell.occupied .node-label,
    .cell.x .node-label,
    .cell.o .node-label {
      top: 3px;
      left: 5px;
      inset: auto;
      display: block;
      font-size: 0.6rem;
      color: #475569;
    }

    .cell:hover:not(.occupied):not(.disabled) {
      background: #334155;
      border-color: #60a5fa;
    }

    .cell.occupied, .cell.disabled {
      cursor: default;
    }

    .cell.x { color: #60a5fa; }
    .cell.o { color: #f472b6; }
    .cell.win { background: #1e3a5f; border-color: #60a5fa; box-shadow: 0 0 12px rgba(96, 165, 250, 0.4); }
  `);customElements.define("ttt-board",c0);class p0 extends j{constructor(){super(),this.data=null,this.showGradients=!1,this._hoveredNode=null,this._selectedNode=null}_onNodeEnter(t,e){this._hoveredNode={layer:t,index:e}}_onNodeLeave(){this._hoveredNode=null}_onNodeClick(t,e){this._selectedNode&&this._selectedNode.layer===t&&this._selectedNode.index===e?this._selectedNode=null:this._selectedNode={layer:t,index:e},this.dispatchEvent(new CustomEvent("node-select",{detail:{node:this._selectedNode},bubbles:!0,composed:!0}))}render(){var B,x;if(!this.data)return k`<p style="text-align:center;color:#64748b;">Laddar nätverk...</p>`;const{hiddenSizes:t,hiddenActivations:e,outputActivation:s,weights:i,activations:a,gradients:n}=this.data,r=t.length,h=2+r+1,u=r>=3?1100:900,c=35,o=55,l=9*o,p=c+l,$=50,m=[];for(let g=0;g<h;g++)m.push($+g*((u-2*$)/(h-1)));const v=["Input (9)"],_=["Brädets tillstånd"];for(let g=0;g<r;g++){const f=r===1?`Dolt lager (${t[g]})`:`Dolt ${g+1} (${t[g]})`;v.push(f);const C=(e==null?void 0:e[g])||"relu",O=((B=R[C])==null?void 0:B.name)||"ReLU";_.push(`${O}-aktivering`)}v.push("Output (9)");const y=s==="softmax"?"Softmax":((x=R[s])==null?void 0:x.name)||s;_.push(y),v.push("Filtrerat (9)");const A={greedy:"Greedy",roulette:"Roulette wheel",softmax:"Softmax","top-k":"Top-k","epsilon-greedy":"Epsilon-greedy"};_.push(A[this.moveStrategy]||"Ogiltiga drag = 0");const S=this._nodePositions(9,m[0],l,o,c),w=t.map((g,f)=>{const C=Math.min(o,l/g);return this._nodePositions(g,m[1+f],l,C,c)}),M=1+r,L=M+1,P=this._nodePositions(9,m[M],l,o,c),b=this._nodePositions(9,m[L],l,o,c),E=g=>g===1?"X":g===-1?"O":"·",z=this._hoveredNode;return k`
      <svg viewBox="0 0 ${u} ${p}" preserveAspectRatio="xMidYMin meet">
        <!-- Layer labels -->
        ${m.map((g,f)=>D`
          <text x="${g}" y="14" class="layer-label">${v[f]}</text>
          <text x="${g}" y="28" class="label">${_[f]}</text>
        `)}

        <!-- Connections: Input → Hidden[0] -->
        ${this._renderConnections(S,w[0],i[0],this.showGradients&&n?n.weightsGrad[0]:null,0,1)}

        <!-- Connections between hidden layers -->
        ${w.slice(0,-1).map((g,f)=>this._renderConnections(g,w[f+1],i[f+1],this.showGradients&&n?n.weightsGrad[f+1]:null,f+1,f+2))}

        <!-- Connections: Last hidden → Output -->
        ${this._renderConnections(w[r-1],P,i[i.length-1],this.showGradients&&n?n.weightsGrad[i.length-1]:null,r,r+1)}

        <!-- Connections: Output → Masked (simple 1:1) -->
        ${P.map((g,f)=>{const C=b[f],O=a.mask[f]===0,s0=z&&!(z.layer===r+1&&z.index===f||z.layer===r+2&&z.index===f);return D`<line
            x1="${g.x}" y1="${g.y}"
            x2="${C.x}" y2="${C.y}"
            stroke="${O?"#ef4444":this.chosenMove===f?"#22c55e":"#eab308"}"
            stroke-width="1.5"
            stroke-opacity="${s0?.05:.6}"
            ${O?D`stroke-dasharray="4,3"`:""}
          />`})}

        <!-- Input nodes -->
        ${S.map((g,f)=>{const C=a.input[f],O=C===1?"#60a5fa":C===-1?"#f472b6":"#64748b";return D`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(0,f)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(0,f)}>
              <rect x="${g.x-24}" y="${g.y-14}" width="48" height="28" rx="6"
                fill="${O}" fill-opacity="0.15" stroke="${O}" stroke-width="1.5" />
              <text x="${g.x-12}" y="${g.y+1}" class="value-label" text-anchor="middle"
                fill="#94a3b8" font-size="10" font-weight="600">${f+1}</text>
              <text x="${g.x+12}" y="${g.y+1}" class="value-label" text-anchor="middle"
                fill="${O}" font-size="12" font-weight="700">${E(C)}</text>
            </g>
          `})}

        <!-- Hidden layer nodes -->
        ${w.map((g,f)=>g.map((C,O)=>this._renderInteractiveNode(C,a.hidden[f][O],a.hidden[f][O].toFixed(2),"#a78bfa",10,this.showGradients&&n?n.hiddenGrad[f][O]:0,f+1,O)))}

        <!-- Output nodes -->
        ${P.map((g,f)=>D`
          <g class="node-interactive"
            @mouseenter=${()=>this._onNodeEnter(r+1,f)}
            @mouseleave=${()=>this._onNodeLeave()}
            @click=${()=>this._onNodeClick(r+1,f)}>
            ${this.showGradients&&n&&Math.abs(n.outputGrad[f])>.01?D`
              <circle cx="${g.x}" cy="${g.y}" r="18"
                fill="${n.outputGrad[f]>0?"rgba(34,197,94,"+Math.min(Math.abs(n.outputGrad[f])*10,.8)+")":"rgba(239,68,68,"+Math.min(Math.abs(n.outputGrad[f])*10,.8)+")"}" />
            `:""}
            <circle cx="${g.x}" cy="${g.y}" r="14"
              fill="#f59e0b" fill-opacity="${.3+Math.min(a.output[f],1)*.7}"
              stroke="#f59e0b" stroke-width="1.5" />
            <text x="${g.x}" y="${g.y-3}" class="value-label" font-size="7" fill="#94a3b8">${f+1}</text>
            <text x="${g.x}" y="${g.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${(a.output[f]*100).toFixed(0)}%</text>
          </g>
        `)}

        <!-- Masked output nodes -->
        ${b.map((g,f)=>{const C=a.mask[f]===0,O=this.chosenMove===f,s0=C?"#ef4444":O?"#22c55e":"#eab308",$0=C?0:a.masked[f];return D`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(r+2,f)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(r+2,f)}>
              <circle cx="${g.x}" cy="${g.y}" r="14"
                fill="${s0}" fill-opacity="${C?.3:.3+Math.min($0,1)*.7}"
                stroke="${s0}" stroke-width="1.5" />
              <text x="${g.x}" y="${g.y-3}" class="value-label" font-size="7" fill="#94a3b8">${f+1}</text>
              <text x="${g.x}" y="${g.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${C?"✕":($0*100).toFixed(0)+"%"}</text>
            </g>
          `})}

      </svg>
      <div class="legend">
        Linjetjocklek = viktstyrka | Färg: blå=positiv, röd=negativ${this.showGradients?" | Nodglöd = gradientstyrka":""}
      </div>
    `}_nodePositions(t,e,s,i,a=0){const n=a+(s-(t-1)*i)/2,r=[];for(let h=0;h<t;h++)r.push({x:e,y:n+h*i});return r}_renderConnections(t,e,s,i,a,n){const r=[];let h=0;for(let c=0;c<e.length;c++)for(let o=0;o<t.length;o++)h=Math.max(h,Math.abs(s[c][o]));h===0&&(h=1);const u=this._hoveredNode;for(let c=0;c<e.length;c++)for(let o=0;o<t.length;o++){const l=s[c][o],p=Math.abs(l)/h;if(p<.15)continue;const $=t[o],m=e[c],v=!u||u.layer===a&&u.index===o||u.layer===n&&u.index===c;let _;if(this.showGradients&&i){const S=i[c][o],w=Math.min(Math.abs(S)*20,1);_=S>0?`rgba(34, 197, 94, ${.15+w*.7})`:`rgba(239, 68, 68, ${.15+w*.7})`}else _=l>0?`rgba(96, 165, 250, ${.1+p*.5})`:`rgba(244, 114, 182, ${.1+p*.5})`;const y=this.showGradients&&i?i[c][o]:null,A=y!==null?`Vikt: ${l.toFixed(4)} | Gradient: ${y.toFixed(4)}`:`Vikt: ${l.toFixed(4)}`;r.push(D`<line
          x1="${$.x}" y1="${$.y}"
          x2="${m.x}" y2="${m.y}"
          stroke="${_}"
          stroke-width="${.5+p*2.5}"
          opacity="${v?1:.05}"
        ><title>${A}</title></line>`)}return r}_renderInteractiveNode(t,e,s,i,a,n,r,h){const c=.3+Math.min(Math.abs(e),1)*.7;let o="none";if(n&&Math.abs(n)>.01){const l=Math.min(Math.abs(n)*10,1);o=n>0?`rgba(34, 197, 94, ${l*.8})`:`rgba(239, 68, 68, ${l*.8})`}return D`
      <g class="node-interactive"
        @mouseenter=${()=>this._onNodeEnter(r,h)}
        @mouseleave=${()=>this._onNodeLeave()}
        @click=${()=>this._onNodeClick(r,h)}>
        ${o!=="none"?D`<circle cx="${t.x}" cy="${t.y}" r="${a+4}" fill="${o}" />`:""}
        <circle
          cx="${t.x}" cy="${t.y}" r="${a}"
          fill="${i}"
          fill-opacity="${c}"
          stroke="${i}"
          stroke-width="1.5"
        />
        <text x="${t.x}" y="${t.y}" class="value-label">${s}</text>
      </g>
    `}}G(p0,"properties",{data:{type:Object},showGradients:{type:Boolean},moveStrategy:{type:String},chosenMove:{type:Number},_hoveredNode:{state:!0},_selectedNode:{state:!0}}),G(p0,"styles",f0`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }
    svg {
      display: block;
      width: 100%;
      flex: 1;
      min-height: 0;
    }
    .label {
      font-size: 11px;
      fill: #94a3b8;
      text-anchor: middle;
    }
    .layer-label {
      font-size: 13px;
      fill: #cbd5e1;
      text-anchor: middle;
      font-weight: 600;
    }
    .value-label {
      font-size: 9px;
      fill: #e2e8f0;
      text-anchor: middle;
      dominant-baseline: central;
    }
    .legend {
      font-size: 10px;
      color: #64748b;
      margin-top: auto;
      padding-top: 4px;
      flex-shrink: 0;
    }
    .node-interactive {
      cursor: pointer;
    }
  `);customElements.define("nn-visualizer",p0);const a1=[32,32,32],o1=["tanh","tanh","tanh"],r1="softmax",l1=[[[.021167395794410158,-1.396406976265907,.596520771132463,-.6368989700544845,.2262165977407499,-.6092975359220321,.779225278467852,.5461870744680686,-.5050919480698197],[-.3369619119125214,-.9816077622970749,.5224836673117487,-.3266481259278514,-1.1094479191791138,-.7800423336848886,2.326147809482472,-.5390281341272513,.011389987349924923],[-.13130971577255454,-.7960338528304124,-.9834716145099971,1.0045396054921034,.7147067312391182,.19928804466290465,1.1653981237871758,-.44640298472638906,.3989523611857264],[-.8201386808986637,-.6108675545382939,-.6569343959750609,-.5349930660003369,1.2922316393479185,-.46264204641158085,-.7090594274197479,.6701386633336142,.7308816569513206],[.20988941825884241,.6696467595464332,.22930664760747332,.21923258686165964,-.46313512550775415,.5152433934653817,-1.3101549418819325,1.1162700249748767,-.09184885297817372],[1.6714995486182538,-.14221303882511285,.37228719282657874,-1.2040196982591178,.34544740868235035,-.09930623464958843,-1.119731948151691,-.3504045168396926,-.22736219604952515],[-1.0185630029948696,-.05992263771224906,-.06989764420162668,-1.2619441408381338,-1.2494752737357937,.4517173284071994,.7910415265775138,.2588583956470996,.13722695396281587],[-1.5779614662859243,-1.0825098080338047,-.9034535191860736,-.1234199808333415,.16595360862355538,-.13864079436829846,.9617397701155113,.09062149917663369,-.10398462191633905],[-.5182698304142551,-.7259811136564239,.5212124070507476,.008280214983547777,-.9230119604213465,.4640171104239801,-1.218743224914794,-.8863962692353311,-.19818857226800168],[-.21256411838401293,.8089482195039477,-.005917634242974056,-.585055825299169,-1.5124525778580362,-.6560786185373588,2.0985978286943174,.8855116752884672,-.5793421718647687],[.2734239877998838,-.04038117589919022,.2283462723060583,-1.7469927049022713,1.184672065267063,-.00536699900644759,-.12007111373008036,-.14351822130032021,.4794134836559013],[-.5579557208386795,-.3647881106991359,.2059491568465261,.9068240377725921,.2550057119822398,-.5696820452010041,-.6372941054325492,-.026784190478403868,-.2118193226420877],[1.2935987984244277,.1640388270609338,.27957164674867147,.3903174016802785,-.37450490763139205,-.8622425042258144,.8870616380558692,-.9135724983749859,.06285912693800529],[.4001054377856034,-.4910534075165595,-2.140628754001736,.1841474819613528,-1.7964281114463323,.13829879388835767,.409251805811679,.010291339631188317,-.22779447338548892],[-.9862094244907742,-1.0065473850737878,-.7462930656066031,-.1639254867226907,-.03264394926587725,-.11592180730334799,-.2522441964558061,-.34728437896010406,3.2502656543558146],[-.22837730880181956,-.21314804802193466,1.394776945722872,-.5652899422436798,.5307934888609579,1.3181324033673416,.5443167159913144,-.4194224916878384,-.33350271608946386],[-.7419278580091282,-.6718316647966227,.34603998473463565,.1571457885049776,-1.5014290689859053,.7099944050494478,1.0242511568163655,-.42799862550619405,.01772054641647449],[.08877598935721347,-.7856721575907516,-.14437589560049216,-.19678177812082645,2.7035809755974762,-.19393502626167278,.31976728117845793,-.24030229718947732,.4549830644904875],[2.8768663237989847,-.24911607717780548,.3148513408911501,-.37408097415492797,-.3492282062778519,.03387413073602312,-.054191447784582215,-.41734046863135343,1.209186101171551],[-1.0365747828301373,.24826169931048256,.507624009087407,.25213728047194167,.8567832985938838,.9858864789054556,-.8284855433693273,-1.0381906140180666,-.18457435271450975],[.39866983162651565,-.4605398459726398,.8052209959691253,.9419428550144924,1.2482597905057506,.6986582285259036,1.724384472546619,-.023815590402829608,.11849820744325502],[.10270733269164635,-1.121494241839653,.016148984815404322,-.7824058164791549,.3599571264963631,.6235661510410897,1.011140805324969,-.514994730111509,.9637323994134744],[-.10065022632950583,.09160630367569234,.9856931288757822,-.9662111950860053,.13965229409400504,.01868909429509788,-.7727742981900857,.6564049791082889,.7870192346781343],[-.5101471961762613,-.514247939024608,-1.2695650667177039,.2955971776000372,-.08793582402099534,-.06549090967769845,-.399589635169788,-.10178152397262452,3.3674017650804693],[-.05458787793240639,-.08398419940934654,1.5418659134927188,1.0088245762574448,-.321791966994046,.7088958870625065,-.38084569605831753,-.3375196728371682,-.27664469723793894],[.09585957959399843,.0012122484199581483,-2.6806946258127917,1.1210284219146067,.9737030706364399,.9245117079131838,.00023440068811853232,-.4298189081321339,.1413898371516066],[.8551434048362698,-.422836973612847,.14638189313333907,1.354251389641293,-.28700677324577195,1.247571410096779,-.6385919110822132,-.7786705621079676,.08089725502929185],[.20866558604568852,.19451166403879697,-.888243695249954,.19531018699441888,.26159331229430915,-.15757774779836461,2.048417597861013,-.37875459693908015,-.3111706412925899],[-.2888656935158504,-.11978931861315513,-1.8483705947420055,.6204158072632232,1.5761695738736088,-.1734292460255103,2.037747360780523,.706020420846094,-.16646973436534643],[1.6150166039398413,1.0833191677612513,.2598845246714709,-.8795709337117924,.69232682493681,-1.6151058431534242,-.03893244228937847,-.8130153716246065,-.3370054587514583],[.15766904620750322,.23264610999851765,-.20704303101027366,-.3337057419675156,-.2962591055952867,.08417855326409221,1.7526878667195094,-.5155095356413235,-.08673017993724694],[.18090044670799407,-.9395507297703941,-.32054932407855957,-.1498239087599741,-1.7978173302024014,-.16779083779627865,-.7943241215498054,.3659008105048538,.2036887819884305]],[[.18605140808279244,-.7273341576335273,.04773842981424347,1.6844724315453856,.17239407714519442,-.8312079625947791,-1.0272561489165006,-.28186363832210604,.4129979797314237,.5158167417361638,.9329113079123093,.27607233234385326,.02211190758663804,.7969187301545448,.8393361043543514,.27266634943865076,.4983965737489204,-.31365105353803824,.08727955008057212,.8168437979803259,-.513834846902799,-.5215545459321415,-1.4860029701932826,.19641416936003847,-.9840497932699037,.2168621710071207,.3102023418303408,1.4540404771489515,1.1155612743744068,-.37079888063448646,-.2427619742069667,-.03775587059034474],[-.16389148229352146,.5717825281492042,.046344869522592355,-.5512130184995347,.5774971609926015,.5764427674401885,.8282851193397974,-.32849253523272187,.8269383167116244,.333470290509159,.264303122320732,-.568019000244682,-.11055173372472062,-.05895823688623888,-.8884301502304583,.010911152096707823,-.4460830433607557,-.3982118860175793,.019459040942904873,-.019567880389336365,-.47887793274536106,.15502756495995226,.21512969452638245,-.49269728332243706,.1161270635507282,-1.0345961892772348,.35543917190201885,-.2004486755042598,-.280466208538287,.3872381000436282,.5383654127662433,.1844405515136049],[-.17454662266599752,-.4236177893649919,.02948233121045373,-.20025861936121656,.6208903961355278,1.2488369861466782,-.3627599624457782,.3173391572859775,-.8851757299949186,-.8677800679310488,.23718842611655647,-.686256377728522,.7209108692251959,.1392992990530611,1.1332671382279207,-.03983048096663261,-.7798302356467541,1.1567190163098453,1.1723602369219899,-.16548555929256795,.6309257157577426,.5705679330512196,.5495709439894247,.3407110468161657,-.2106819684313627,.10006712626440854,-.1896250026955631,-.08987260226968757,.15475545876991997,.3322991971795911,-.46661957201448984,.05809960874356009],[-.016867233115868525,.026881236542948467,-.22904990444561918,.25979031689632626,.2202990389309736,.48395174437759647,-.04716171328961936,-1.2565978489201444,-.33297362431086946,-.8581893316502771,.593975052871274,-.20137559423433798,.02028323781166396,-1.2402730729771922,-.2623963741373439,.7478523612238339,.1644063445897,.055124762121198045,.31774965768638946,.31299166672184475,.39360512528707675,-.10842274364585933,.8787837239972769,.3353396853022437,-.10270398639900467,-.2943850158212264,-.03323391774286009,.039439321838150375,.46406006192985993,-.305654996448602,-.1697640162489503,-.18738875816094702],[-1.2133964448068553,.005106317653484392,-.7335268419473,-.20028559269369672,-1.640434795468803,-.9105999808667044,-.23412590461179503,-.7659438458662969,1.0167279814219037,.3070891682972088,-.11484502786591515,.11614342892181091,.3965364290790487,-.5032885611096586,.5221639751794297,.14582933323435923,.8021873252495634,-.3191139158875249,.5882656485213952,.17808931027189226,-.46251171565051047,.2561584930639859,-.5898446812785887,.8115297686572603,.6164619665319018,-.44820771941883786,.6067552488515372,1.038160298558373,.7546602483083834,.03337431678133222,.11853877089264432,-.53053284468172],[-2.1051052727957,.2916855611417231,-.5357198374230301,-.34464231085051356,-.14573115206277754,-.16405307677742997,.17183420279022368,.10269168517062978,-.8403461405842418,.08093733474497126,-.1430146180798495,-.22799838155366883,.4792745454090746,.42532244097405114,-.8670097144289111,-.8287582200978738,-.170989854563732,.15524283143416373,-.043147754244812056,.5707450091629082,-.3514111797308452,-.679336646984482,.7457100812700221,-.013593148731174776,-.7895990574346735,.34604994214051826,-.6751621620339625,.17820039495997195,-.6821187852482091,.9352074516244862,.7715883180566333,-.5806150528311753],[.43959332963175574,1.5354580913156237,1.2182836815588634,-1.0828985654668546,-.8184518072757755,-.5144725111100725,.8718816788940603,1.2896335757004338,-.8933780922018107,1.470081167559397,-.08679415392241115,-.4535410415296108,.31943797776475125,.3275125873670985,-.47795365759397046,.47546039371812604,.263717902932939,-.41224320414660254,-.8375174134664227,-1.3350217825072046,1.3425128282109333,.7280664049896807,-.3060229470299336,-.5885596193303915,-.05307282250955366,.13044130225561373,-.8858124915282451,1.0731200852538059,.7885979841510025,.5096906368772763,1.5187826125546648,-.3877009098305413],[.13713736411691185,.5151919953105334,-.19763589008612603,.2260973620100503,-.18716561627091838,.2742441491746271,.6162161789807793,-.025515037766557263,-.5188201038826015,.3762959613381389,.4329497804244507,.06760997435140813,.23864042122672346,-.5024154989871399,1.9524226413321786,.6088467323516392,-1.2958831645031752,-.3423342470603785,-.07721744360959767,.42872318335877435,-.2258315650037812,-.5350405600357724,.11369493238309233,-.7088662263906401,-.09588604255825585,-.37032488381590933,-.6729415534178209,.06549334050138075,-1.4169643058961494,.3971247638933654,-.2225511278500682,-.0069150430203471685],[-.46964360475393824,-.3677162574586539,.2232238166446528,.48627702698351954,.5415899214892025,1.053025869201178,-.01686271387866051,.09484584296782016,-.05695398436132273,-1.1442662793294662,-.10836820309973098,.4659332956582049,-.4976473755467812,.3611575346336696,.7240378317738176,.1839138237740276,-.9128634117455512,-.2349933588981027,-.11101129292071758,.7420191417676818,-.7041304717173575,.11396801244505862,.06652949292924766,.23188270267945832,.4044305312383155,.5139362286234436,1.364258859470655,-1.4700288891930877,-1.3289495480764462,-.3244612211466262,-.6498808193948422,-.01895413810866997],[-.0801310661135539,1.3619255068928469,-.15575300024662292,-.5952827004014734,-.28028369744741954,.058394547348678855,.42707229724163237,-.4240677018408643,.7238444762589538,.7996788355826493,-.8600469417895142,-.11039437007393631,.5895945526578806,.627611706292018,.23449666912416378,-.455821590408796,.5766706137888475,-2.060186539485734,.3972147856857826,-.6331841367224129,-.7907861305367826,-.20665627431688893,.06524247098508343,.327611855147342,-.010203979599676538,-.9165429325161253,.3259462866046848,.5150893588406685,-.41263350943919924,-.6655560404022246,.308401103135997,1.2792971891106948],[-.6905537892941778,.5605126799919309,.6678327117083784,-.8685827879032622,-.11732786540829837,-.45726130002891663,1.1464211975663423,1.1832905180363993,-1.2552965622418126,-.7001142849165924,-.013386364954900844,-.639019235082743,-.02346154598936757,-.907069921068289,-.22265338681682015,.04947350386355164,-.925557733161368,.783962551046889,-.38319045653725053,-.48497342219857614,1.10304820064144,.5297302545056065,1.437927788075317,.131547173361343,.6063833496603891,-.39285098188970824,-.7053989989829241,-.4065740746324746,.6414674007279801,.01358734526681309,.5017035340498402,.06963706115969902],[.5620572753303056,-.0661498512355707,1.1775586006400038,-.688343699415389,.13111296937586928,.873985295390059,.8565325380470714,.10632873680365819,-.36987089445312243,.38628011963531855,-.37234827053667796,-.1873484084413741,.3922369216984355,-.6674928009005954,-.6634593036490889,-.27396337758588113,-.8800667216110737,-.3621415618450478,.3515354216391445,-.3721350981040082,-.2697563028217988,.034664552533279776,-.2835106251825798,.060816229651597796,.4583666656758082,-.2799671799200677,.5628290475407204,-.7557794260548548,-.7987598014904437,.04302026876136982,.541884559642479,.46874674320571874],[-.39275893891359315,.18322283659716743,.13620313271792944,-.35004989916485457,-.01408593727506822,-.029274888650887097,.2658225463534996,-1.4402304771327021,.1580168245183374,-.17241361766733282,-.001232625058032324,-.19749859125848315,-.42359232545905307,.4194017141773964,-.19046494291591587,-.16389036496103954,.7569130943184039,-.9668231767657489,-.14676056901411755,-1.130518099959016,-.06987461598160892,-.7379299278920194,.6013629951302504,-.6467623269344382,.7462986396660896,-.07195542619076381,.43216435156982774,-.2631499720691258,-.9090320968426844,-.5384693077050672,.002891183998911027,.7786855446001804],[.035928899776016716,.2550822832600751,.6147435037920624,-.41329402585255814,.2767995748372809,-.5858161595571814,-.005312787380439891,.04681052359695076,-.003979235979480773,.5490888756974612,-.7384693265173772,.13989240947861642,.31036547213115573,.2986145258882841,-.2739844934314492,-.9328183501403874,-.22817833253733458,-.7924955549801092,.6350076619950573,-.21168573282065167,.24382056201690777,.14790758266202875,1.1956907925696936,1.7848070327241263,-.19831980641029887,.5053467585653626,.1751834138915037,.07053570030552643,.7107065531513249,-.0491693393107348,.19416659343064602,.40756393386153206],[-.4491787776604715,-.1268692417960113,-1.4073937308492876,-.47335254602507953,-.4972458054273619,-.3750903057966226,-.9909345160689974,-1.2040071815375983,-.5382867021983584,1.2312576650162654,-.7326664166273194,.09101314423474889,.985450835257609,-.3733119021120417,.3995104741353032,-.5350473680590243,.5013383157816306,.11886869392075021,1.4531270462028607,-.516932406617877,-.3283024815341856,.10967626147356702,-.8557834987159796,-.7000569212126385,.7120127945291543,-.1234696769065383,-.16016956960821063,.8920000342017076,-.226446195841385,.24893178554311407,.07651250548484576,-.3617768057722769],[.5326058846071959,.04026160803981723,-.02127421882417317,.29827916958701606,-.022570224495098306,-.4649908157524818,-.2034368142137983,-1.3210535451724132,1.0962432101418589,-.05578350236980087,.021885845304100527,.057588654782298444,.10521281694301077,.381481178459175,1.8033290674778946,-.2991168742655993,.4609716306333567,-.6792493988105377,.04491190929308059,-.41542990375131644,-.6937476822687387,-.6335853756334673,-.8132092226026273,-.5666098442749021,-.9296813667417514,.1886968595810121,.21082886577965776,.9819533128226126,-.36407683123713214,-1.0642384169045664,-.3970278487306943,.3552791025837896],[.025531495928456816,-.05590267716121848,.055627628705339764,-.4456089440568636,-.37203072252268254,.2690774556879097,-.844783899578166,.20511990105758035,.8059739396399652,.4104797913506184,.04240160175071724,-.14416926491081364,.39127848150599387,.41019818182441925,-2.2025438046652477,.20545969788371765,.4060061693629048,-.1896710069328367,.33616446115521853,-.23720657151012095,-.6489774424634812,-.4320489831138488,-.45467032748593117,2.335521159094515,-.2706121723337446,-.31063335694443983,.5600541008892757,-.3039620529054315,-.20317169852645686,.4368430345373825,.4767278342785522,.19237337734883447],[-.08644103827587098,.6035467395584965,-.5345139975459265,.1192349692788434,-.030464958649044235,.6777429405895761,.1976725686854741,-.07452060688169743,-.7258233048658592,-.9056266983381561,-.40084564657470195,-.13719765707117934,.8584713503749615,.6765884968506622,-.08806607480246476,-.3616361884995771,-.14250147966100973,-.9421049163434996,-.17751351485941708,.027208928780101373,.0968619315737468,.36411708430701467,.16022414648197675,1.796326270630802,.08200412559141862,-.8766007348363556,-.2504858507418111,.04987175900251979,-.9575296511061652,-.36184873637346326,.14708705303984762,.28222807755346524],[.17734050557554004,-.7896419662715942,-1.0297060703602992,.15524093334175737,.17331203567340114,.4288308142745719,.11809026457260209,-.6508207976780884,.017601920410188602,.3668864350024594,-.35424864678822765,.5372716341311335,-.3228494798268454,-.26882004417218,1.13380651093126,-.05154810849915454,-.49101843211777463,-.09927690743969778,-.4703809472111965,.8148138565724419,-.8932155294208077,-.2197311368934247,-.18880881054615892,-.2234491471756752,.4810680722993343,-.17417981203161537,-.3748478572658873,-1.0022271153786086,-.45433175159321265,-.5357275669985434,-1.1791097133032769,.35699174760809105],[-.5304339952772497,.5427577327651779,.07770559454957172,.372652828586799,.2492952252706106,-.5800052556348587,1.460102081335477,.9750490949221176,.027292273322325353,-.7331136885443377,-.15511082691332595,1.2453148120379052,-.2504514997205719,-.2577738135066015,.20187705628416405,.27780384331059516,.25995260411269383,-.18502572161565284,-1.8155001753205244,.6231320298378624,.42004043715258726,-.27140604460636414,.39075176827319746,1.2177421060510432,.049467127127065275,-.3087785628731904,-1.0889132151002145,-.7490121715829494,.4585038324836064,.13521714935317908,.2384864388194707,-.290416912353676],[-.5244338917535075,-.06953533140012418,.9722536184694254,.15322851350352176,.6508009572059534,-.25053428062012434,.15277398299325515,-.46459035954738664,-.42794734838787984,-.12843367351268392,-.06999191267736557,-.20435291862851207,-.2254543081005796,-.5336033062428774,-.5421052696252048,.40564324117984957,-.1710296252983527,.7975400850734408,-.1285332356689469,-.27592702284099496,.9558489486936957,-.17172762934627,2.1744972505681956,-.2398203096761391,.5658750690780495,1.1005426269697247,.5857470096449542,-.37459639589142124,-.6702351684824673,-1.0864606384087787,.19438420678694723,-.09019432957880634],[-.30534293033530757,.4068229110146909,-.5219463705979019,-.33409788345028946,.7219815004987866,.14028068563534699,.5400898971923797,.20084133301786833,-.9818087159057319,-.16342625185023868,.08672063042933373,-1.1137947495065577,-.3786727924191584,.17206843681799647,.8558537906455279,-.013333153999366765,.6517491604985093,-.4220454061285161,.5771223860326293,-.24579905220232776,.4403233575319888,.29981062900674305,-.1211361334810041,.8678553202386933,-.1242333775266516,-.5453824162523874,-.22158052730133848,-.9405732627376002,-.6719196572694409,-.9586089711267942,.6331535083740636,.08115536668403944],[.1382828039169286,-.9091632076999239,.19723635306196433,-.6163724622006576,.16865153801370122,1.1169510543716668,-.5885153025754467,-.26702079678858,-.5806278607870257,-.07021184837225683,-.12161188091662321,-.982723400554562,1.069373729690108,.3640490899019801,-1.155183797180718,-.31541622589241614,-.46684065251280665,.221965402816427,2.25349392048782,-.882171305124326,.17305533839276505,.40901448954597663,-.2750724065688477,-.7404447829843699,-.22897429108079093,.37789434880512174,1.0625222106984695,-.13185363008854273,-.2963001426191747,.6084721016167336,.010586056977107074,.7575747265705608],[-.297813759524297,.9822466165709677,-.05781410191657597,-1.0216530170505542,.1985027581421328,-.29803404775086284,.7267040048095506,.26150830013069193,-.008497633893592222,1.5569693732873096,-.886717364795384,-.31537198916688725,.22703051819219686,1.118404489269971,.44693070366981974,-.36824632624693665,1.1548970274545567,-.16533325020172285,.24041764445810537,-.7067732651963449,.1416959129550323,.23714434702801054,-.17954876679369142,.28454436805919553,.023325706806393648,-.428074701175262,.08809122312314092,-.4860952283450071,-1.393403712074702,-.23869726994330323,.11782600468792674,1.1779919584636094],[-.08879315107882402,-.3753072895486514,-.18973052128601253,.4394365475528348,-.06543681730097341,-.6368764541880348,-.5031461798943563,.1439779776213487,.4967546465472114,-.34651378757210954,-.1961297939356941,.9332355556035808,.47769702587773905,-.18627925365702708,.7317665168461668,-.5309907417200946,-.2646329374326434,.4436500051872197,-.5703776100838115,.03613332323856927,.05693136355782153,.2790470217453693,-1.313278985461697,.12207831913536825,-.33286452092638547,-.7233291857844254,-.03329397805869993,.35218281980526356,.12911213776509006,-.27590993371947614,-.6589900945330921,.02202216600022955],[-1.094435112756651,-.4223617283000584,.5055449896531664,-1.0603748042201258,-.8982900393982953,.15063870141070024,-.32328598808632986,.00012107786740082926,.19618791134675742,.02489431664917928,-.1281143838227127,.47825184310835905,.3423699714690273,-.583935583892481,.6593886339759832,-.3733805852003555,.0692337444564379,.6395644519829337,.6266537375044755,.07375011093352575,-.3648266600476689,-.017189346061809094,.3306323369965203,.08257554739660229,.8838856353837364,.3251708467800844,.8347933262842255,-.20956462842707443,-.34442995738087845,.3503197311391012,1.370507692481202,-.5218127065177975],[.6113410158786118,.02287889280519782,-.030629359783009413,-.2788343545755311,-.2934987320942629,.3756355073855818,-.4145531016746752,.6273666978491634,.21112430292418008,.7089353858497008,-.9661773781744164,.7318147870531632,.7453544591020073,-1.0340092196972472,-1.0325365995615334,-.9052464708945361,-.6593159591949329,-.05262537902513595,.4468262281437826,-.21494009061995686,.10988107389399113,-.23498195296197447,.6512139960167944,.3666328069660967,.38111282408739217,-1.0247294586671103,-.5798951361765221,-.3896690063250403,-1.28372461407474,.765811304970054,.06077183520126895,-.29113618907350136],[-.5798373264145551,.06477620406888752,.10524982733316764,.5341958641595864,.5377457983574557,.0831748385806824,.36363410325380713,.6506947435618277,-.24846678247062537,.2715922058157108,.05349770782768231,-.9083360708299179,.40949642223120125,.6588644417422655,-.2230199543151822,-.5543678071859892,.4580624631351059,-.29777153856143146,.2627108189604285,-.09813855071217961,-.3417198860802654,-.42472898275384763,.6788976597273525,.03133246299732235,-.2703862290056558,2.499571944514555,.1828773421511322,.5791155423014248,1.109051840587332,-.4105748687821,.573699771496603,.35976930369663296],[-.02377663726742803,-.24144945806733875,.7488886024172637,.5346078777814716,.012207613430316944,-.23288352480917004,-.32990800302632994,.9142948107436287,-.078293153192633,-.15792626433144266,-1.6450610650242588,1.205403821951344,-.16038112355498044,1.397733281090205,-.02176282290596383,-1.261292277698159,-.09710366935711362,.4581583909735792,.20710862413300737,.02563575001431031,.33372872757840766,-.7381724185747999,-.4253921123900666,.402358980930446,.8236146543951834,.44566402180387316,.4882892191945187,-.07720491333876131,-.292449200150528,-.5497189501156505,.1122345280116954,.14578549908662103],[-.388688561460269,-1.4648782718041076,.44538841093079706,.9079963444983037,.8775357969687426,.14213953415450184,.135960165363123,.24710648439135185,-1.7812755816070385,-.5685372782424238,.07961060425041884,-.34287832241682037,-.9012534683663979,-.013917111731388996,-.23154429783929203,.08318131647686582,-1.0309954148152594,-.07367927908517738,-.8736631997280012,.6889284329604812,.5075574304170521,-.7071680208384887,.35014974809672395,-.6209613795022172,.37027708659496233,.30938410187890725,.0303188691946599,-.009368570734139159,.38150280091348443,-.2847557606806039,.4512392129143974,-.575852277918825],[.2990084865973609,.17294730308323283,.5387232708769177,-.2173330647866692,-.052617519629165874,.5730309898214029,-.3243299408126504,.25026689434170163,.342603157969705,-.4831011051134757,.01355459194425876,-.17649021055319258,.07379088970254291,-.197990122544482,.268393958771902,-.3276192809628597,-1.133418293247193,.20449678647855518,.4348673894493482,-.32881949814055356,.11366278446137448,.5318321913748673,.6814058976298853,1.60336939240126,.6736684117457408,.3121751604093263,.628790969796919,.26386723832627323,-.9082525370355005,.1831837266660417,1.2757083479596663,.9061692757845463],[.8830738681536773,.78857513622105,-.3188201198057865,.07116437790142374,-.6246635834052675,-.12133877597523246,-.9422954394051362,-.23551336772830905,.004507354875018142,.33264560985205543,-.7666018078834117,1.3778111203676784,.9000612480639515,-.03895420015609003,.8355651892478309,-.49573416265210635,-.7136864911379133,.9688515590885035,.18104043078828325,-.3281863840805201,-.4119549973432111,-.39940983386306755,1.2021631417882708,.3305250359144767,.12479325882566945,-.825302700179028,-1.4602559497066467,.04258878688860631,.6066354214368048,.7608749238745064,-.763436036254981,-.09317149051889377]],[[.33892788491156356,-.23425544782215274,-.469263835292598,.2724187630689141,.37001576933319846,-.0912854231730356,.047971993577602845,.1347980423205267,.1544200686779749,.19836905534959415,-.5425012498770045,-.88990268085355,-.09013422492774288,-.22388730875239019,1.299334727837631,.2659083064301229,.10692902093637063,.21722819520273515,.16523296267526622,2.1964067175538546,-.3949115580458452,.4780869820119894,2.4034598867276187,-.0744876284880418,.6175125715615744,-.0027513400912532304,-.09292293098314842,.06959923673266638,-.06847995972642314,.6101043044883379,-.8948719854305229,.08627375045077913],[-1.6642653949091413,1.0815961245539223,.04568037323404544,-.1378304540054308,-.07544733145720726,-.3853997972373864,-.7629172833497534,.6496914272184351,-.7004691673404958,-1.120678563372509,-.025277838176985618,.4719792718624957,-.23722184490866563,.09130216967823848,.07394582404986053,-.424324396241758,.06587550615001773,-.122277766301077,.26939825103367177,.0953410140876082,-.46962532039495447,1.663990019545144,-.6125448488631227,1.2849241401510065,-.44334254787837346,.26485819572996805,-.5752014558226951,.7835276355231828,.024571284237825106,-.52450378854553,-.11334783010792904,.0662819088362901],[-.45759736132912493,-.5298209943692618,1.8126421094164995,-.2964524846209515,-.27551942360350234,-.08559221205537354,.09171224236776551,.4850443544392688,-.8363511662837038,1.5480620237038343,-.17097344254345476,-.8635122829079528,-.1289663945831521,.20313209113235878,-.5157210308091944,.7421351423354755,-.6359163181358782,-1.0709680404214983,.2974985015467345,-.9734150958321367,-.24603171642471666,-.1950815996011908,-1.100553464493221,-.5049998411308516,.005816091558498292,.05709602517099095,-.24248579512374466,.049615093305628785,.298044722300839,-.8777191782305103,-.2580616128013698,.21913080171961322],[-.4745842136898777,.382337236238706,.6571149082679234,.7231537627517468,-.8428966122717673,-.5896101157448287,-.18989409439006052,.36996864922968037,.3973044546591024,.7014259324386376,.11724139022486312,.6198476179370905,-.0414761658262186,.30037377791882547,.07415214752661971,.32595432795687274,.26218620563076617,.20130184926222286,-.2666997217700325,.17985924155960775,1.2157490314507389,-.2759101172825395,.7385044289615043,-.5119898082876654,-.6266276133463433,.06875056836945219,-.6549141369771786,1.6002690150672203,.3786426867961731,1.2873605222074094,.12700928958691185,.2758574922878974],[-.26842177085177327,.015750110142760516,-.10866317102742998,-.31143908024874134,-.43767944595782965,-.30094823421031675,.10897243577615873,.7313842267232903,-.12454602696153284,-.5145494937204182,2.1591891156580663,-.28769546402131657,-.5734196656069622,-.3001992010276959,-.03428404619778182,.2359554739654048,-1.153639429352578,.05440430562577528,.08852012374305063,.6582369843680267,-.41989310568286137,.5870527557946525,.7252893555090406,-.03753426472475927,.2297305777775703,.5075971794017693,.014364867559375064,.31819055739283036,.1912760892012494,-.6783386624697619,-.799895409702593,-.7082488106438423],[2.1847902232901957,.013438864928918508,-.6090895638209267,.259371073328267,.28497423577656716,.2098625663832411,.5621132392534044,-.4434143137915538,-.30820373830972886,.4794694549557865,-.5342938435969189,-.40922734137196237,.6457154426413709,-.7949001871504586,.13591849437807357,.8110239227786485,.19769753331151255,.42844478916007245,-.40119745906401216,-.24567751688549758,.5034428171482479,-.1453405399916245,.3968372260796171,.12020543914011847,.33145778155148353,.19487833458367823,.39507829890796703,-1.3901300863600479,.3866802762223617,-.7037884685419921,.060566547687538407,-.02659485975702956],[-.5092258187534437,.23018583329264033,-.7279230763792492,.21799861593253336,-.46157635087006865,.16091931886968117,-.7688579506725316,-.031846569681312234,-.6652136321817116,.3904995279172084,1.4342095775250077,.5104554588023864,-.21189440078744654,-.3666537768428959,-.0938813422295545,-.5918253815955945,.3814397753358927,.45783416532002164,-.3228222470403065,.4288009585790954,.0931677542478343,.9556046577627398,.61292601905761,.3707800160297006,-.924085287676891,-.0933143040188551,-.4151511362443171,1.1190367227747338,1.813958510250336,.6755568746109761,-.19784372937839387,.11859764193125424],[-.016309279352309382,.21149573498738797,1.5353869784554657,.2135521581307425,-.5167748686715113,.49855263250567045,-.5622581876560695,.08787370343885322,-.13870014396359606,.9814003018319474,1.1612991626039006,-1.3878927465208364,.16018738405443717,-.5638206403260162,-.2698674702246065,.6264698889660223,-.4303262468351631,-.617924533111983,.22086638322954127,-1.0737822274680728,-.5294459388973686,-.09458207293825252,-.7920433912754026,-.2525036984245702,.5457280179952306,.1022918309615633,-.29774332287816657,-1.1646172421266705,.3423246161029966,-1.489158563712732,-.24749227187724004,-.8871910053744659],[1.2085898719807937,-.07259211098844068,.5570445936466749,.2579313897488586,.37264731021870573,-.5392646057917141,-1.7816557992210247,-.7113533839849799,-1.7746600966485133,.4067561145703372,1.1872824893836524,.07781198136669941,-.13216353961107447,-.0754311101783027,.18873331751626393,.8883840462862581,.2180405630229174,.05106968956401357,-.9317631633369363,.40327788560735034,.45025632254165254,-.3543647647632183,.06644840442864779,-.4314567626219065,-.3807588099820204,.15431790340560056,-.4277184304053419,.6828461566659487,.5394134899459487,-.34549870574328234,.21817965380679694,.4438915856325742],[1.2846028359300716,.27905068085199697,-.17721892542870524,-.19644974026047002,.22865649108427927,.013962901184672426,-1.9574278836569199,-.007462443469008711,-1.1022724393417491,-.5179889320427683,1.117757653706192,-.898954705484135,-.4375620200746614,-.4684541680767337,-.8574930839480878,-.8421893539661712,-.15255179245131537,-.18189264222877255,-.20205949699132877,-.19881442464599589,-1.1615194934070057,-.016204210058015842,-.6561382900028334,.0995892856114586,-.15620471722210774,.10530250520039432,.31730509615774677,-.44005247090302635,.3213174622334112,-1.6509843064791612,-.2762538002858607,-.4562416807834773],[.6158843228723284,.33234045081770786,.5621754789126924,.4546099709732608,-.831210546934059,.160871568946358,1.3050662016089927,-.05050703409480427,.7147201432536453,.8422115272896921,-.3466357105078962,.4548696012875852,-.19820555408038895,-.18507594941369604,.4767014043125718,.2389127180723268,.25649768293811226,-.1216669834347822,.06061523082324031,-.5714731505111261,.3443939446711133,-.4835861555050012,-1.1161688630114068,-.3363834382682843,-1.2249846509234201,-.35013117624346146,-.09482096212439464,-.3089673845116212,.44270860902246273,.6576459339316694,1.1486261443446508,.591405192791429],[-.6938144319235005,-.2549331504230265,1.7523760509590685,.5841559827546401,-.6811503458277053,.4870153801927984,-.6977038864655195,-.49395414480062827,.145125402560261,.3611739454752845,1.8820269799226854,-.28228454979386636,.4052039473033655,.11700995791311672,-.46324572098157085,-.472642866466746,-.11701804511581822,-.24095098121772052,-.43728968436920385,-.058216431197658125,.037708135097233385,.3933408845990706,-.10854206009928855,-.29161731728177454,-1.2710729067630546,.7380051249335465,-.3013871024723918,-.033207475828241725,.6050835952749776,-.18727646627488523,.06549691155991827,-.009679240592156782],[1.9959164162433591,.07517680011509686,-.587143663095577,.5800480484960614,-.9579050045170058,-.030751781159642853,.04963163438076575,.34736330949024985,-.027717297555921092,-.3356133474075737,-1.4421083732858957,.06598804745471189,-.7876182835380677,-.29923930104314633,-.4032155037367753,.5582453918378258,-.1658712894061141,.13144434113238387,-.3587002254479888,-.010123008265186697,.13332153433913865,.9222796104249991,-.2450425718662662,-1.9590508433672307,-.39658389403667593,-.0681312061895561,-.568686197548346,.1102534947339981,-.3607549518090711,.025980715730841607,-.15174529848662158,.2903100592795955],[-.5907005102112646,.06407441534176153,-1.1427772380814503,.30264212170213206,.0934126987911514,-.8093237314958798,-.46650505979319823,-.004936454530897699,-.6157770488986458,-.5329784406435172,1.0337058427439736,.623751206619035,.1001771886850549,.027561475135308076,.32035967041171903,-.36040528824655677,.5414925927001236,.776378579856972,-.4512691895222319,1.35302320438271,.7420245247846395,.06032070092939012,.8479121189042726,.31402991207896225,.06906530362928193,.24206216687617163,.5425012006941233,.7055609090633624,-.9212045980922332,1.3563893487905543,-.28985614929967235,.6898594903737001],[.5005526311942463,-.6621843911379326,.6247297223964875,-.10280753266792364,-.9366547544727769,-.4793260375698312,-.5708177808546642,.19319014430381745,-.21158325160630392,-2.8487130562518863,.8276215549874036,-.6309707291266313,-.5325402161409387,-.01984163493182869,-.29985743961333466,.5777341105634556,-.21446963992050377,-.1189904493706965,.361415736867355,-.23973245948523625,.6163663538573385,.048473683750511455,.2456328081456,-.11092957493926536,-.035088872552277606,.6522377601975553,-.34788622487890086,.40536837307790985,.36110292079006445,-.1354911089243034,.14254476010739867,.4175603029576609],[-1.2124594913839377,.5166578518929071,-.10781248096097931,-.4820123253698315,-.23077092468986457,-1.2485714027500183,.4685114634985701,.2819758445683648,.519837605742593,-.0036056330326513964,-1.301479273295002,.7485413510483101,-.33626983610611977,.13201129345522228,-.5748419737693159,-.5054983926879476,.4714847900604628,-.04945174888281574,-.3035431057513371,-.33069130993949425,.014357049614498364,-.9295595125115835,-.4027257402811253,.17227391733896175,.06255756804976452,.157414235750875,.7563201477787754,.6314552961601562,-.3917525977407,1.0256544068792675,.33632253612310886,-.2915864838288654],[-1.224255683510535,-.7650544676655869,.43620638285434465,.9033792292421583,.263152341471597,1.1726852940733103,-.105803792048182,-.28784634687886895,.03785565546355933,-1.234339601400718,1.288697780958862,-.10991730352575128,.8960401994125746,.4167786196050339,.9290093968993149,-.0672964124994118,-.012380591560886804,1.1330964151634297,.13912993852493377,1.0068250024256489,.9213908590243954,.9624894874327063,1.5872260943465784,-.032268327013327054,-.7283882622361465,-.09338312840951969,-.41715621481223475,.4419423998748274,-.25966710182396535,.6835114596173845,-.8623457902603344,-.21848203342613068],[.09454181476463502,-.6789863973437907,.8346618363912229,.9795712818109954,.42490026914882567,-.06424286265067232,-.2195129452073144,-.3922587258027239,-.0372159472794939,.8384629405069465,.5806854941202947,-.6589517930119085,-.8397354905829179,-.14514358646603434,-.059634391747332906,-.5723644429097523,-.21863662430170486,-.45969324824879254,-.46649109243622056,-.058080243408000144,.34682598406952936,-.921474554340426,-.31049118385880387,-2.3082768371526057,.02919924799747307,.10055204108901723,-.5771990135494888,-.009562836149686038,-.7342127104809627,.8881983836561973,.44466579344464313,.3085955862354409],[-.5502570575575576,.11463098057350828,-.1553864613464123,-.09912209368519358,-.13717130139032163,.3681548300877517,-.25213021818341885,-.19425635742043237,.48559156556682903,.02549326585982339,1.471585494609538,.4274826945056809,-.6163302865718276,.01250467813086524,-.5162633740434682,-1.297459747238625,1.6278780417381509,.387562739213292,-.16588237673844686,-.0752783504803481,-1.3674012808132139,.3631517166516699,.12373151348995233,-.07301230294543139,-.20158636583684247,-.11980884527936334,.3446860349771951,-.5839676531471175,-.015797184087709262,.1936106068052742,-.4061196098478412,-.4407626517641955],[.36039489729242474,-.1317358733570693,-.09195442319067151,-.2504918290534436,2.0054438417649565,.8419018700273373,-.36848486478086856,-.5868217721385023,-.416736132319989,-.36314590293849397,.4718492372234129,-.24940949758460076,-.2284475246613266,-.145014200619888,-.01857702933314783,.11533641636642306,-.306543327132907,-.030194509960253586,1.0839301607120186,-.010684814921400528,-.5763782466952507,.4424265723743825,-.09677123918025358,-.6644031088430624,.5093295702246462,-1.769919619153146,-.08714663284200909,.3497217184233131,-.22674318271879362,-.5712508123765192,-.9154183026037807,-.28074941648895485],[-2.1101027876733336,.32364481401630985,1.1780972003845478,-.14356685046177883,.2133179532885041,-.7630588482503823,-.31150785721524926,.8944841931730375,.0323461079348094,-.4219663194325745,1.1049737973666862,.7673028912051465,-.6351805595126955,.3089149867376616,.08572479021258993,-1.275104461268579,-.47653825008315975,-.6186886753248192,.6256776562175942,.18386385611601794,-.21810030146075135,.08943786223493544,-.5352133521742954,-.1879922063081523,-.3798898843542654,-.030902374614899746,-.18322406810203898,.2383329626883821,.09133909257566519,.5546785680506141,.22386663732341808,-.8602993033432947],[1.2570606085173481,-.27976157456893447,.2714755062173254,-.01804624687126855,1.040194800910944,.7429760699558561,1.3623195778076689,.10242844323950714,.6844616126087938,.038087430666335624,-.9234647759304095,-.4876824765307236,-.8600341358867003,-.7980906469570892,1.5905307358304548,.17511574602981517,-.09712772105535206,.18743393803506883,1.3581086763961192,-1.0523786756709563,-1.094476814059431,.07672018836164142,.30135962625208274,-.6891180710358622,-.028239616123263072,-.43580742661945177,-.034608135703411626,-.7073635160808764,.6568993693683108,-.9825756539089503,-.18463133644828722,.46428929303732],[1.3636010079880578,-.14061151736256147,-.6032404641880961,-.18849661372759358,.719189461911253,-.28239468674262574,-.12193114913287197,-.21115301266063943,-.33867489396142275,1.0249120595056298,1.4129486067157442,-.09411134956022124,-.8035740068474277,-.2811980538095228,.6962350122329323,-.6855294553081376,.41277507810155173,.6126965818054091,.5090858367518736,.34509115990235356,-1.2648149372679136,-.29271234060644746,.1610635921614906,-.9790644958108852,.5816782693081299,-.6711593698709685,-.1974882274091835,-.009728718461884547,.20355862036454198,.22302329885895233,.24542320979243545,-.7601742289855525],[-.7569907980055117,-.18540065748952167,.744831691151085,-.17433982797855377,.07752702564054052,.14724363581925037,-.6226565324676233,-.418565554311357,.36207188572093124,.5516814273857715,1.2869348802787817,.7051020937254742,.3914661695666201,.21661105521309815,-.8357930925963754,-1.1296381758649878,.3610245383180257,-.21829600472546523,-.5949179563957931,-.757659034178318,.5047541508832878,-.45602817869655926,-1.8721720105616872,-.09164023268453707,-.43576462549544764,-.3452141342279637,.1828902790205476,.13064577950796774,-.32419794932554985,.9172782463577064,.24965996104098212,.16655235981762065],[-1.4137348054602974,-.008946299781509005,.19789044241939674,.08918614908687818,.6678460465586179,-.5161867857205195,-1.064817693525234,.12732296900016307,-.5551273632185755,-.26404024732683273,-.013557727504677722,-.013939170721493007,.4123605123584635,-.2507542149296719,.4649845804840505,-.16925374348005717,-.24574355560615113,-.5391526959575221,.14705999755183483,-.2764656472563987,.10026671724277095,.5576599111713487,-.34504236932601623,.3436990887081316,.10910443635809043,.4617574818817053,-.27751376682933915,.5150849521377028,.16910608692778853,-.5250009987054908,-.3340780387208171,.1909467367619013],[-.12970783317197623,-.1764397810414188,.2585103287943158,-.22817457084419945,.023361086296545937,.2073339652018722,.09794064069681208,1.0121190340856088,.08679631154042683,.5425867582234032,-1.2671274526190468,-.8384120665345319,-.3918424316624919,1.1904493734171662,-.008272847933855488,.684866336270278,-.1572764533188727,-.26596372762703924,.3248297448475326,.0005638863499519417,-.4969394844106214,-.8339671522562665,.10991924288452964,-.0806816101097088,1.054677129358151,-.5466879277925467,.7400888401945274,-.2684488487356817,-.5058808002530052,-.5974601666575319,-.827800938574537,-2.3599177864118053],[-.9797073065164819,-.1552494263508564,-.12409835438694752,.5682538031341634,-.3307638453088793,1.082704187566697,-.7563519266551216,-.3590731842134086,.15441606529155538,.1542132630412167,1.4219213393844685,-.561331112947311,.6900931079031577,.4792559540770452,-.36778125577423776,.11496630600516551,-.2312476784114964,-.44955528219594054,-1.1881525297073363,1.126827746222085,.4419865071815128,-.3833529268880662,.5442778003832166,.13397500620089764,.44162978030049393,.04602966298197165,.1686525842298137,.3901278843801498,-1.469921539859951,.3678043962450938,.15727753132742778,-.46167675421609133],[-.33474148031852463,.13831825449693136,.07934472447432049,.30322445074071236,.04009898154405092,.36926790356476574,.23244156803711885,-.12082346329213108,-.08912698427711047,-1.5875203427709736,1.1213340259075961,-1.1264274271674992,-.28441352418993976,.28302436389691843,-.5069370327577042,-1.1770436880962933,.3266173219057737,-.02240726775136078,-.4318573249480822,-.14433747708009526,-.8040189036915589,-.3281703072918528,-.7020927181599189,.18249502521504152,-.5940755163629832,-.2609039239229105,.20673426376970838,-.11243551392266238,-.151225356218982,-.3043281580312834,-.5929114725377644,-.02014987941082131],[2.093252738123847,.5471892984883294,-.32364130394536994,.03413502841772154,.24146070783781828,-.36987327168614764,-1.3892385185553262,-.36224894411609243,-.636350804194721,.967564449773944,1.306301031270515,.06739737124115248,-.4673475189921702,.0781438191173493,.003064296642886211,-.578254214317734,.07197158543062322,.4252011533426728,-.246060051033866,.6041507983410084,-.8597070484070785,-.41155967275970073,-.29456183745754,-.2414313010944438,.5225980190981113,.4272320988238366,.3286611791276425,-1.8743042357355617,-.18482549946628057,-.41302718535839383,-.21046335129596402,-.11731699453530349],[.48899857034219,.12300946703040552,.4181568328925391,.08226371049497973,.5578617002416539,-.5951169029643143,2.4752208965824334,-.12165752520871952,-.17620390977173278,.17122552257957208,.6230645880027137,.9600101136041451,-.15478710287147204,.16481684519394812,-.13205868347972113,-.5856236553918741,.10376370088048378,.6569952804623981,.001423380619699503,.3354223557478434,-.8306272434366865,.9337147281760335,-.3881324304341367,.027737071936709486,-.22574391003374306,.42230722238349144,.27857478301699623,-.31441915646319774,.3733406192894784,-.3326318166899458,.9749785449880534,-.6339304437333421],[-.9150041714084085,.24005606250909328,.8372865134122106,.21182648927087544,-.42337976442198866,1.093582124629328,-.16735957297149479,-.30322780994077725,.7329922879340508,.32963223309937634,-.645012233723868,.2041388892093131,-.304441368777987,.11168422363562623,-.44729763847915427,-.24317194389125427,1.0818777840231706,.03138007089811401,.09784112360867105,-.3208206266488723,.3877243778497572,-.4242098165564724,-.40513966445767285,-.24309003091612735,-.6037346947547251,-.11791449963063463,-.3202594506228326,.6471651823480684,-.27861385625690266,.5778655243837375,1.2483030173703766,.4197764795248508],[1.626073063949071,-.3953355775657065,-.08701036387756966,.1683002267420382,.11521979604581395,-1.1725577018463318,-.884985779324615,.5013867158968526,.13414768025252405,.9784848949064564,-.8790427013299441,-.3094781489836508,-.7085848832705387,.22886978853561923,-.9186527329392277,.17093276735438284,-.043801489949434606,.0020791144088997057,.02216898917615932,-.3003204531491145,-1.1976018260996135,-1.003777065933938,-.6209590576498086,.2385040645669384,.6580175482554057,.5129551863501449,1.2759053323715936,-.18282215240791005,.18014971922769282,.1325680172358497,.7562065329061073,-1.0206720591066896]],[[7.00585350808563,-3.5284761556161075,-5.08810301856357,2.8879216081276975,4.2683208258805045,4.055903146444446,4.911459907350705,-4.415243745704273,2.6425683715814388,-2.876681367178963,-3.819750157125429,-3.5302778471819707,3.1314331802802964,5.3978205755319575,1.9036959723408873,-3.4887015139951973,5.673257330803568,-2.7654733353543577,-2.815214621681142,3.8179011395891687,-4.241552161919909,-4.142634231018951,4.117386085254684,-4.586820252357077,-3.666859383898514,2.866773053641026,4.239024974925244,-3.0941492421736334,3.7729842780133827,3.339211102195679,-4.254138770935002,-4.608907200014126],[.29544018946763684,1.7634766994361326,2.860449792169725,-4.603485697588649,.36646490395417186,-1.587914713189501,.48791308910629977,4.643809151976584,1.3804859359105632,2.259085194287354,-1.5303555629285368,4.743930935464099,-2.2814722314729607,-.11632414171979828,-3.1729871275180557,-3.5739169607163905,4.358483093604182,2.9325967387929825,1.8927504104737527,3.0658013656469096,.9735352229734204,-.7698564154637809,-.25233136345149487,2.4541859307954805,2.4776834064334743,-3.9617319621076046,2.8319311590475533,2.533074134281223,.3604247026319818,-3.488210864725713,-.2689379305444243,-4.21519502990212],[-.02895527668753591,.30918393510853037,.9930879611488934,1.1187840794458643,-1.091058386125681,-1.3112323306809457,-.6256579119732273,-1.4690720664553851,1.6247418968973177,-2.1461064416095375,-.5178671001808959,-.5703459787549772,-.7849506956270341,.9221349208480911,-.5824223825926349,1.776501047530575,.4077130886998621,1.3443478170947507,-2.0763661236913995,-.640648642195555,.8027375461311078,-.8828286400728329,-.8840719857329911,.3580967470435471,2.986047862593692,.9055251577170972,-.16799269746303322,.2179589706365813,-2.824766284206216,-2.258831678917267,-.7230577487616031,-.22814180955722208],[.8041075578312333,3.4770749822434697,3.3076443962712276,-1.9219708677149854,2.8624319281125192,-3.4453958856183124,3.7688995159148897,3.2976136388152555,2.496275688155442,3.40291113348893,.24527492718177038,2.8144295511612047,-1.9359173469769944,.40136708397523774,-2.3516983954542034,-2.6140592413214665,1.2411314574707122,2.4948466662572364,3.5840617798232097,1.8133743852278998,3.4733153818227085,.10168667981994003,2.7635880417616523,2.451202695686045,2.8563576205362966,-3.4896182728790954,-.7547356951517035,1.7020405735244197,1.4801777319824287,-1.3957643220204266,-1.5654674644050248,-1.5626835604817901],[.7458681091698708,4.461285714875748,1.9439313460282504,-3.1492753023302287,1.7196991451502497,-3.299649653907008,1.382032842658522,2.2555715722331438,.8364263892038284,3.731318829202257,-2.580472691020869,1.616173140428968,-2.4087011112700814,1.9259947062890692,1.097248025495379,-1.750310059317698,.6203138115319787,-.05433348460165252,2.5929350071359254,2.1299056564822965,3.361625054504089,-1.922169586688391,1.1356276619634709,1.9855610621908217,2.444239981169765,-3.444154798721546,1.0336670716023872,2.8958088768265906,1.6990023293863938,-3.5538059954984242,-2.372562783591594,-1.852828925709889],[.4780542363111767,2.375660654953714,3.305877972016929,-2.5222205907112785,3.9787185770114277,-3.942083747100711,.864709758475703,3.9292024921877995,1.469329496142789,3.255310686244769,-2.7705098714231418,2.7577170813425362,-4.425322756655497,.7673300795298605,-3.0824569446013026,.03617467242690304,.6774962210325916,3.94744383516372,4.540637653868669,1.6384573829644045,5.320521761224786,-.9271190604349615,2.7505512267885814,2.2034089505148566,1.2979639156923306,1.4748985087527138,2.828022202279228,2.9342280311575095,2.6835004258449295,-.6195899776494784,-1.6409864613756748,.48722314023175334],[-12.141461284747859,-13.703681886968992,-11.783636111628825,11.996628226115146,-13.194324503453736,14.168862370459712,-13.605732262176337,-12.893525960829013,-14.958605792957632,-13.735745420056015,13.605947435816745,-13.70124721845841,13.290349796593008,-13.782673670144455,11.788355164570442,12.195822739608642,-14.51764095230714,-12.441933864410778,-13.639042818624647,-12.01768531942477,-13.571552555017004,14.099297288915645,-13.105729233640616,-11.543181285732782,-12.833656548659263,12.244407295028802,-13.564125290942673,-12.710848445142226,-12.894334532186077,14.415051522469716,12.586172052036003,13.415100284198795],[1.3747054461532238,2.3282563987371594,3.8925261713585533,-1.9388478315323034,2.423106126078135,-1.9330441232630065,1.4561983198097055,3.778834619342852,2.280660747965619,3.0108620181879395,-1.0306921532240132,4.1203390558339645,-2.0256039849342606,1.2945030105434783,-1.8793581513953692,-1.7602192245835895,1.0877188744833175,2.3854925021857025,1.5530048663973608,-1.831650406234348,2.0871807946587326,-3.11318618484962,.5766252062790558,2.6307913065257744,2.6230153038216435,-3.7849092927811534,1.7087104173164944,1.5863569835656546,1.8679526084231597,-3.9673948202267715,-1.9211677204952353,-1.1947759999495324],[1.3971102457771538,2.057304736432859,1.0956897114584894,-2.025444243657278,-.976685404437826,-2.7795244898808655,1.8234780237498518,1.1315823862590804,2.724998356639974,2.710494456145571,-1.4928002493424306,1.5487430529005337,-2.5776542171082535,3.0854511331033785,-3.408129022393009,-.5952598917189462,.8387484530942008,2.734230927279236,4.375790671492372,1.7689700699562545,2.5466667143364172,-2.246769165172546,2.936047449960752,3.8450348032555155,1.417271291690457,-2.7085280917399457,1.8819796157184396,3.5402774426671204,3.2602763736822946,-2.477757646068433,-.5805044702165904,-.8236214822745588]]],h1=[[-.5635895342471985,.32182175509694233,1.4805429012878097,-1.1991103787665853,1.1317136566637784,1.5626989294623435,1.5509828110599428,2.59033547128113,-1.9362974992943311,-.45923055860149775,-.0726713556961358,-1.5163527851571625,-.13287911815978123,-.36851245205891914,-1.9232073731914452,-.2660392818752373,-1.732981425330714,1.2238760629027203,.09332787808205842,.0010186003286316609,1.4523800254568924,.7507241526082106,2.627036026502269,2.3748223413676817,1.2814389663912935,.6188420411169401,-.19948263253766194,-1.3224279289456087,-1.889058658955558,.1940333478531191,1.8941092356451719,-.057399387303903725],[-1.893552248058479,.441718556752318,1.5226971909001628,-.7951636508213292,-.80685545035285,.3686458317352576,1.3968336144239855,.1766110739030084,1.3431274537017575,-1.2119826142085115,1.8088520303659472,1.3469411272509457,-.45569089054849354,.4791954664475033,-1.2622660108763937,-.39754606856221275,-.7515773487605979,1.43676124372749,-.8863630986042812,1.5855460815623295,.7426388013084345,1.885243457655874,1.8283142371413614,1.0500325778973427,.06235051101826887,.9888977442801394,1.3842311526999005,1.5454903842350918,1.2250570628449111,1.407708820014391,1.330585146227201,-1.353602951389266],[-1.071421745247871,-.1032602474099469,-.5807726952650248,.32763981587341046,1.0161607308588034,.3415204030201401,.2677188595117802,-.91422149804222,.04924447585468926,-.21849020601061778,.19899710173309226,.1734899665857679,-.19727627110467788,-.04656047709305823,1.409845050633497,-.4291391016533669,.6201644731930809,-1.0933664835920656,-.4971721581909215,.6290400503786523,.24522350404218088,.3485902951472057,-.313787967123504,.28390763779507505,-.11790947843946067,-.43515002226285154,.49601208305278843,-.663743196095306,-.22385541486384228,.9844726188766623,.17897225371529132,-.7959225680828365],[3.447731157113681,.2514148855646346,-.3491930618910109,-2.24132393649449,-4.9278929157144535,-1.5634681732888884,11.459519267570698,-2.6797337148476386,-3.4720456945117246]],d1=.0017696374930471907,c1=3e5,p1={hiddenSizes:a1,hiddenActivations:o1,outputActivation:r1,weights:l1,biases:h1,learningRate:d1,trainingGames:c1};class u0 extends j{constructor(){super(),this.hiddenLayerCount=2,this.hiddenNodeCounts=[16,16],this.hiddenActivations=["tanh","tanh"],this.outputActivation="softmax",this.trainingOpponent="minimax_rules",this.discountFactor=.9,this.epsilon=.3,this.epsilonDecay=.999,this.lrDecay=.99,this.moveStrategy="greedy",this.lastChosenMove=-1,this.nn=new O0(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this.waitingForNn=!1,this._lastNnMove=null,this._pendingNnMove=-1,this._selectedNode=null,this.showGradients=!1,this.trainingCount=100,this.isTraining=!1,this.trainingProgress=0,this.trainingPhase="",this.gameMode="human-vs-nn",this.stats={wins:0,losses:0,draws:0}}render(){return k`
      <header>
        <h1>Neuralt Nätverk spelar TicTacToe</h1>
        <p>Se hur ett neuralt nätverk lär sig spela genom träning med backpropagation</p>
      </header>

      <main>
        <aside>
          <nav>
            <button @click=${this._newGame}>Nytt spel</button>
            <ttt-board
              .board=${this.board}
              .winLine=${this.winLine}
              ?disabled=${this.gameOver||this.currentPlayer===-1||this.isTraining}
              @cell-click=${this._onCellClick}
            ></ttt-board>
            ${this.gameOver?k`
              <output class="status ${this.winner===1?"win":this.winner===-1?"lose":"draw"}">
                ${this.status}
              </output>
            `:""}
            ${!this.gameOver&&this.currentPlayer===1?k`
              <button class="ai-suggest" @click=${this._playAiSuggestion}>Spela AI:s förslag</button>
            `:""}
            ${this.waitingForNn?k`
              <button class="primary ai-suggest" @click=${this._playNnMove}>Spela AI:s drag</button>
            `:""}
          </nav>

          <div class="controls">
          <details open>
            <summary>Nätverk</summary>
            <button class="danger" @click=${this._resetNN}>Nollställ nätverk</button>
            <button @click=${this._loadPretrained}>Förtränat</button>
            <div class="stat-row">
              <span title="Hur AI:n väljer sitt drag baserat på nätverkets beräknade sannolikheter. Greedy = alltid bästa draget. Övriga strategier ger mer variation.">Dragstrategi:</span>
              <select @change=${t=>this.moveStrategy=t.target.value}>
                <option value="greedy" ?selected=${this.moveStrategy==="greedy"}>Greedy</option>
                <option value="roulette" ?selected=${this.moveStrategy==="roulette"}>Roulette wheel</option>
                <option value="softmax" ?selected=${this.moveStrategy==="softmax"}>Softmax (temp)</option>
                <option value="top-k" ?selected=${this.moveStrategy==="top-k"}>Top-k</option>
                <option value="epsilon-greedy" ?selected=${this.moveStrategy==="epsilon-greedy"}>Epsilon-greedy</option>
              </select>
            </div>
            <div class="stat-row">
              <span>Dolda lager:</span>
              <select @change=${this._onLayerCountChange}>
                <option value="1" ?selected=${this.hiddenLayerCount===1}>1</option>
                <option value="2" ?selected=${this.hiddenLayerCount===2}>2</option>
                <option value="3" ?selected=${this.hiddenLayerCount===3}>3</option>
              </select>
            </div>
            ${this.hiddenNodeCounts.map((t,e)=>k`
              <div class="stat-row">
                <span>${this.hiddenLayerCount===1?"Noder:":`Lager ${e+1}:`}</span>
                <select @change=${s=>this._onNodeCountChange(e,parseInt(s.target.value))}>
                  ${[4,8,12,16,24,32,36,48,64].map(s=>k`
                    <option value="${s}" ?selected=${t===s}>${s}</option>
                  `)}
                </select>
              </div>
              <div class="stat-row">
                <span>${this.hiddenLayerCount===1?"Aktivering:":`Akt. ${e+1}:`}</span>
                <select @change=${s=>this._onHiddenActivationChange(e,s.target.value)}>
                  ${Object.entries(R).map(([s,i])=>k`
                    <option value="${s}" ?selected=${this.hiddenActivations[e]===s}>${i.name}</option>
                  `)}
                </select>
              </div>
            `)}
            <div class="stat-row">
              <span>Output akt.:</span>
              <select @change=${t=>this._onOutputActivationChange(t.target.value)}>
                <option value="softmax" ?selected=${this.outputActivation==="softmax"}>Softmax</option>
                ${Object.entries(R).map(([t,e])=>k`
                  <option value="${t}" ?selected=${this.outputActivation===t}>${e.name}</option>
                `)}
              </select>
            </div>
            <select @change=${t=>this.trainingCount=parseInt(t.target.value)}>
              <option value="10">10 spel</option>
              <option value="100" selected>100 spel</option>
              <option value="500">500 spel</option>
              <option value="1000">1 000 spel</option>
              <option value="5000">5 000 spel</option>
              <option value="10000">10 000 spel</option>
              <option value="50000">50 000 spel</option>
              <option value="100000">100 000 spel</option>
              <option value="500000">500 000 spel</option>
              <option value="1000000">1 000 000 spel</option>
            </select>
            <button class="primary" @click=${this._train} ?disabled=${this.isTraining}>
              ${this.isTraining?"Tränar...":"Träna nätverket"}
            </button>
            <button class="primary" @click=${this._trainMultiPhase} ?disabled=${this.isTraining}>
              ${this.isTraining?k`Fas ${this.trainingPhase}...`:"4-fas träning (500k)"}
            </button>
            ${this.isTraining?k`
              <progress max="100" value=${this.trainingProgress}></progress>
            `:""}
            <div class="stat-row">
              <span>Tränade spel:</span>
              <span class="stat-val">${this.nn.trainingGames}</span>
            </div>
            <label class="toggle-row">
              <input type="checkbox"
                .checked=${this.showGradients}
                @change=${t=>this.showGradients=t.target.checked}
              />
              Visa gradienter (backpropagation)
            </label>
          </details>

          <details open>
            <summary>Träningsinställningar</summary>
            <div class="stat-row">
              <span title="Vilken typ av motståndare nätverket tränar mot. Starkare motståndare ger bättre träning men tar längre tid.">Motståndare:</span>
              <select @change=${t=>this.trainingOpponent=t.target.value}>
                <option value="minimax_rules" ?selected=${this.trainingOpponent==="minimax_rules"}>Minimax + regler</option>
                <option value="minimax" ?selected=${this.trainingOpponent==="minimax"}>Minimax</option>
                <option value="self" ?selected=${this.trainingOpponent==="self"}>Self-play</option>
                <option value="random" ?selected=${this.trainingOpponent==="random"}>Slumpmässig</option>
              </select>
            </div>
            <div class="stat-row">
              <span title="Hur mycket framtida belöningar värderas jämfört med omedelbara. Högt värde (nära 1) = nätverket tänker långsiktigt. Lågt värde = fokuserar på nästa drag.">Discount (γ):</span>
              <input type="number" min="0" max="1" step="0.05"
                .value=${this.discountFactor.toString()}
                @change=${t=>this.discountFactor=parseFloat(t.target.value)} />
            </div>
            <div class="stat-row">
              <span title="Sannolikheten att nätverket gör ett slumpmässigt drag istället för sitt bästa. Högt värde = mer utforskning av nya strategier. Lågt värde = utnyttjar det den redan lärt sig.">Epsilon (ε):</span>
              <input type="number" min="0" max="1" step="0.05"
                .value=${this.epsilon.toString()}
                @change=${t=>this.epsilon=parseFloat(t.target.value)} />
            </div>
            <div class="stat-row">
              <span title="Hur snabbt epsilon minskar efter varje spel. Nära 1 = långsam minskning (utforskar länge). Lägre = snabb minskning (slutar utforska tidigt).">ε-decay:</span>
              <input type="number" min="0.9" max="1" step="0.001"
                .value=${this.epsilonDecay.toString()}
                @change=${t=>this.epsilonDecay=parseFloat(t.target.value)} />
            </div>
            <div class="stat-row">
              <span title="Hur snabbt learning rate minskar efter varje epok. Nära 1 = långsam minskning (fortsätter lära snabbt). Lägre = snabb minskning (finjusterar mer försiktigt).">LR-decay:</span>
              <input type="number" min="0.5" max="1" step="0.01"
                .value=${this.lrDecay.toString()}
                @change=${t=>this.lrDecay=parseFloat(t.target.value)} />
            </div>
            <div class="stat-row">
              <span title="Aktuell learning rate — styr hur stora justeringar nätverket gör vid varje viktuppdatering. Börjar på 0.05 och minskar gradvis via LR-decay. Kan ändras manuellt om den blivit för låg.">Nuvarande LR:</span>
              <input type="number" min="0" max="1" step="0.001"
                .value=${this.nn.learningRate.toFixed(6)}
                @change=${t=>this.nn.learningRate=parseFloat(t.target.value)} />
            </div>
          </details>

          ${this._renderNodeDetail()}
          </div>
        </aside>

        <section>
          <nn-visualizer
            .data=${this.nnData}
            .showGradients=${this.showGradients}
            .moveStrategy=${this.moveStrategy}
            .chosenMove=${this.lastChosenMove}
            @node-select=${t=>this._selectedNode=t.detail.node}
          ></nn-visualizer>
        </section>
      </main>
    `}_onCellClick(t){const{index:e}=t.detail;if(this.gameOver||this.board[e]!==0||this.currentPlayer!==1||(this._makeMove(e,1),this.gameOver))return;this.currentPlayer=-1;const s=this.board.map(i=>i*-1);this.nn.forward(s),this._pendingNnMove=this.nn.pickMove(this.moveStrategy,{epsilon:this.epsilon}),this._updateViz(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_playNnMove(){if(!this.waitingForNn||this.gameOver)return;this.waitingForNn=!1;const t=this.board.map(s=>s*-1),e=this._pendingNnMove;this._lastNnMove={index:e,board:t},this._makeMove(e,-1),this.gameOver||(this.currentPlayer=1,this.nn.forward([...this.board]),this._updateViz(),this.status="Ditt drag (X)")}_playAiSuggestion(){if(this.gameOver||this.currentPlayer!==1)return;const t=this.nn.chooseMove([...this.board],this.moveStrategy,{epsilon:this.epsilon});if(this._makeMove(t,1),this.gameOver)return;this.currentPlayer=-1;const e=this.board.map(s=>s*-1);this.nn.forward(e),this._pendingNnMove=this.nn.pickMove(this.moveStrategy,{epsilon:this.epsilon}),this._updateViz(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_makeMove(t,e){const s=[...this.board];s[t]=e,this.board=s;const i=this._checkGameOver(this.board);i&&(this.gameOver=!0,this.winner=i.winner,this.winLine=i.line||[],i.winner===1?(this.status="Du vann!",this.stats={...this.stats,wins:this.stats.wins+1},this._trainOnGame(-1)):i.winner===-1?(this.status="Nätverket vann!",this.stats={...this.stats,losses:this.stats.losses+1},this._trainOnGame(1)):(this.status="Oavgjort!",this.stats={...this.stats,draws:this.stats.draws+1},this._trainOnGame(.1)))}_trainOnGame(t){this._lastNnMove&&(this.nn.backpropagate(this._lastNnMove.board,this._lastNnMove.index,t),this._updateViz())}_checkGameOver(t){const e=this.nn.checkWinner(t);if(e!==0){const i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].find(([a,n,r])=>t[a]===e&&t[n]===e&&t[r]===e);return{winner:e,line:i}}return t.every(s=>s!==0)?{winner:0}:null}_updateViz(){this.nnData=this.nn.getVisualizationData(),this.lastChosenMove=this.nn.pickMove(this.moveStrategy,{epsilon:this.epsilon})}_newGame(){this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.waitingForNn=!1,this._lastNnMove=null,this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz()}_resetNN(){this.nn.reset(),this.stats={wins:0,losses:0,draws:0},this._newGame()}_loadPretrained(){this.nn.importModel(p1),this.hiddenLayerCount=this.nn.hiddenSizes.length,this.hiddenNodeCounts=[...this.nn.hiddenSizes],this.hiddenActivations=[...this.nn.hiddenActivations],this.outputActivation=this.nn.outputActivation,this.stats={wins:0,losses:0,draws:0},this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this._newGame()}_onLayerCountChange(t){const e=parseInt(t.target.value);if(e>this.hiddenLayerCount)for(;this.hiddenNodeCounts.length<e;)this.hiddenNodeCounts=[...this.hiddenNodeCounts,36],this.hiddenActivations=[...this.hiddenActivations,"tanh"];else this.hiddenNodeCounts=this.hiddenNodeCounts.slice(0,e),this.hiddenActivations=this.hiddenActivations.slice(0,e);this.hiddenLayerCount=e,this._recreateNN()}_onNodeCountChange(t,e){this.hiddenNodeCounts=this.hiddenNodeCounts.map((s,i)=>i===t?e:s),this._recreateNN()}_renderNodeDetail(){var u,c;const t=this._selectedNode;if(!t||!this.nnData)return"";const e=o=>k`<details open class="node-detail"><summary>Nodinformation</summary>${o}</details>`,{hiddenSizes:s,weights:i,biases:a,activations:n,gradients:r}=this.nnData,h=s.length;if(t.layer===0){const o=n.input[t.index],l=o===1?"X (egen)":o===-1?"O (motståndare)":"Tom",p=[],$=i[0];for(let m=0;m<s[0];m++)p.push({to:m,w:$[m][t.index]});return p.sort((m,v)=>Math.abs(v.w)-Math.abs(m.w)),e(k`
        <h4>Input ${t.index+1}</h4>
        <div class="detail-row"><span>Värde:</span><span class="val">${l} (${o})</span></div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${p.map(({to:m,w:v})=>k`
            <span class="detail-weight">H${h>1?"1·":""}${m+1}: <span class="wval ${v>=0?"pos":"neg"}">${v.toFixed(3)}</span></span>
          `)}
        </div>
      `)}if(t.layer>=1&&t.layer<=h){const o=t.layer-1,l=t.index,p=n.hiddenRaw[o][l],$=n.hidden[o][l],m=a[o][l],v=this.showGradients&&r?r.hiddenGrad[o][l]:null,_=this.nnData.hiddenActivations[o],y=R[_]||R.relu,A=i[o],S=o===0?9:s[o-1],w=[];for(let x=0;x<S;x++)w.push({from:x,w:A[l][x]});w.sort((x,g)=>Math.abs(g.w)-Math.abs(x.w));const M=o===0?"In":`H${o}`,L=i[o+1],P=o<h-1?s[o+1]:9,b=[];for(let x=0;x<P;x++)b.push({to:x,w:L[x][l]});b.sort((x,g)=>Math.abs(g.w)-Math.abs(x.w));const E=o<h-1?`H${o+2}`:"Out",z=o===0?n.input:n.hidden[o-1],B=[];for(let x=0;x<S;x++){const g=A[l][x],f=z[x];f!==0&&B.push({label:`${M}${x+1}`,w:g,a:f,product:g*f})}return B.sort((x,g)=>Math.abs(g.product)-Math.abs(x.product)),e(k`
        <h4>${h===1?`Dolt lager, nod ${l+1}`:`Dolt ${o+1}, nod ${l+1}`}</h4>
        <div style="color:#64748b;font-size:0.6rem;margin-bottom:4px;">${y.name}: f(x) = ${y.formula}</div>
        <div class="formula">
          <span style="color:#94a3b8;">${y.name}(</span>${m.toFixed(3)}${B.map(x=>k`<span> ${x.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(x.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${x.a.toFixed(1)}</span></span>`)})<br>
          <span style="color:#94a3b8;">= ${y.name}(${p.toFixed(4)}) = <span style="color:#e2e8f0;font-weight:600;">${$.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${m.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${p.toFixed(4)}</span></div>
        <div class="detail-row"><span>Efter ${y.name}:</span><span class="val">${$.toFixed(4)}</span></div>
        ${v!==null?k`<div class="detail-row"><span>Gradient:</span><span class="val">${v.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${w.map(({from:x,w:g})=>k`<span class="detail-weight">${M}${x+1}: <span class="wval ${g>=0?"pos":"neg"}">${g.toFixed(3)}</span></span>`)}
        </div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${b.map(({to:x,w:g})=>k`<span class="detail-weight">${E}${x+1}: <span class="wval ${g>=0?"pos":"neg"}">${g.toFixed(3)}</span></span>`)}
        </div>
      `)}if(t.layer===h+1){const o=t.index,l=n.outputRaw[o],p=n.output[o],$=a[a.length-1][o],m=this.showGradients&&r?r.outputGrad[o]:null,v=i[i.length-1],_=s[h-1],y=[];for(let b=0;b<_;b++)y.push({from:b,w:v[o][b]});y.sort((b,E)=>Math.abs(E.w)-Math.abs(b.w));const A=this.nnData.outputActivation,S=A==="softmax",w=S?"Softmax":((u=R[A])==null?void 0:u.name)||A,M=S?"eˣⁱ / Σeˣʲ":((c=R[A])==null?void 0:c.formula)||"",L=n.hidden[h-1],P=[];for(let b=0;b<_;b++){const E=v[o][b],z=L[b];z!==0&&P.push({label:`H${h>1?h:""}${b+1}`,w:E,a:z,product:E*z})}return P.sort((b,E)=>Math.abs(E.product)-Math.abs(b.product)),e(k`
        <h4>Output ${o+1} (ruta ${o+1})</h4>
        <div style="color:#64748b;font-size:0.6rem;margin-bottom:4px;">${w}: f(x) = ${M}</div>
        <div class="formula">
          ${$.toFixed(3)}${P.map(b=>k`<span> ${b.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(b.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${b.a.toFixed(2)}</span></span>`)}<br>
          <span style="color:#94a3b8;">= ${l.toFixed(4)} → ${w} → <span style="color:#e2e8f0;font-weight:600;">${S?(p*100).toFixed(1)+"%":p.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${$.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${l.toFixed(4)}</span></div>
        <div class="detail-row"><span>${w}:</span><span class="val">${S?(p*100).toFixed(1)+"%":p.toFixed(4)}</span></div>
        ${m!==null?k`<div class="detail-row"><span>Gradient:</span><span class="val">${m.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${y.map(({from:b,w:E})=>k`<span class="detail-weight">H${h>1?h:""}${b+1}: <span class="wval ${E>=0?"pos":"neg"}">${E.toFixed(3)}</span></span>`)}
        </div>
      `)}if(t.layer===h+2){const o=t.index,l=n.mask[o]===0,p=l?0:n.masked[o];return e(k`
        <h4>Filtrerat ${o+1} (ruta ${o+1})</h4>
        <div class="detail-row"><span>Status:</span><span class="val">${l?"Maskerad (upptagen)":"Tillgänglig"}</span></div>
        <div class="detail-row"><span>Sannolikhet:</span><span class="val">${(p*100).toFixed(1)}%</span></div>
      `)}return""}_onHiddenActivationChange(t,e){this.hiddenActivations=this.hiddenActivations.map((s,i)=>i===t?e:s),this._recreateNN()}_onOutputActivationChange(t){this.outputActivation=t,this._recreateNN()}_recreateNN(){this.nn=new O0(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this.stats={wins:0,losses:0,draws:0},this._newGame()}async _trainMultiPhase(){const t=[{name:"1/4",games:1e5,opponent:"minimax_rules",lr:.05,lrDecay:.99,epsilon:.3,epsilonDecay:.999},{name:"2/4",games:2e5,opponent:"minimax_rules",lr:.01,lrDecay:.99,epsilon:.3,epsilonDecay:.999},{name:"3/4",games:1e5,opponent:"self",lr:.005,lrDecay:.99,epsilon:.1,epsilonDecay:.999},{name:"4/4",games:1e5,opponent:"minimax_rules",lr:.002,lrDecay:.99,epsilon:.3,epsilonDecay:.999}],e={trainingOpponent:this.trainingOpponent,epsilon:this.epsilon,epsilonDecay:this.epsilonDecay,lrDecay:this.lrDecay,trainingCount:this.trainingCount},s=t.reduce((a,n)=>a+n.games,0);let i=0;this.isTraining=!0,this.trainingProgress=0;for(const a of t){this.trainingPhase=a.name,this.nn.learningRate=a.lr,this.trainingOpponent=a.opponent,this.epsilon=a.epsilon,this.epsilonDecay=a.epsilonDecay,this.lrDecay=a.lrDecay,this.trainingCount=a.games,this.requestUpdate();const n=Math.max(1,Math.floor(a.games/20));let r=0;for(;r<a.games;)await new Promise(h=>{setTimeout(()=>{const u=Math.min(n,a.games-r);this.nn.train(u,{opponent:a.opponent,discountFactor:this.discountFactor,epsilon:a.epsilon,epsilonDecay:a.epsilonDecay,lrDecay:a.lrDecay}),r+=u,i+=u,this.trainingProgress=i/s*100,this.requestUpdate(),h()},0)})}this.isTraining=!1,this.trainingPhase="",this.trainingProgress=0,this.trainingOpponent=e.trainingOpponent,this.epsilon=e.epsilon,this.epsilonDecay=e.epsilonDecay,this.lrDecay=e.lrDecay,this.trainingCount=e.trainingCount,this.nn.forward(this.board),this._updateViz(),this.requestUpdate()}async _train(){this.isTraining=!0,this.trainingProgress=0;const t=Math.max(1,Math.floor(this.trainingCount/20));let e=0;const s={opponent:this.trainingOpponent,discountFactor:this.discountFactor,epsilon:this.epsilon,epsilonDecay:this.epsilonDecay,lrDecay:this.lrDecay},i=()=>new Promise(a=>{setTimeout(()=>{const n=Math.min(t,this.trainingCount-e);this.nn.train(n,s),e+=n,this.trainingProgress=e/this.trainingCount*100,this.requestUpdate(),a()},0)});for(;e<this.trainingCount;)await i();this.isTraining=!1,this.trainingProgress=0,this.nn.forward(this.board),this._updateViz(),this.requestUpdate()}}G(u0,"properties",{board:{type:Array},currentPlayer:{type:Number},gameOver:{type:Boolean},winner:{type:Number},winLine:{type:Array},status:{type:String},nnData:{type:Object},showGradients:{type:Boolean},trainingCount:{type:Number},isTraining:{type:Boolean},gameMode:{type:String},stats:{type:Object},hiddenLayerCount:{type:Number},hiddenNodeCounts:{type:Array},hiddenActivations:{type:Array},outputActivation:{type:String},trainingOpponent:{type:String},discountFactor:{type:Number},epsilon:{type:Number},epsilonDecay:{type:Number},lrDecay:{type:Number},moveStrategy:{type:String},lastChosenMove:{type:Number},waitingForNn:{type:Boolean},_selectedNode:{state:!0},trainingPhase:{type:String}}),G(u0,"styles",f0`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      padding: 8px 16px;
      overflow: hidden;
      box-sizing: border-box;
    }

    header {
      text-align: center;
      flex-shrink: 0;
    }

    h1 {
      font-size: 1.2rem;
      color: #f1f5f9;
      margin: 0 0 1px;
    }

    header p {
      color: #64748b;
      font-size: 0.75rem;
      margin: 0 0 8px;
    }

    main {
      display: flex;
      gap: 16px;
      flex: 1;
      min-height: 0;
    }

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      min-height: 0;
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .controls {
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow-y: auto;
      min-height: 0;
      flex: 1;
    }

    .ai-suggest {
      width: 240px;
      margin-top: 4px;
    }

    .status {
      text-align: center;
      font-size: 1rem;
      color: #94a3b8;
      min-height: 24px;
    }

    .status.win { color: #22c55e; font-weight: 600; }
    .status.lose { color: #ef4444; font-weight: 600; }
    .status.draw { color: #f59e0b; font-weight: 600; }

    details {
      background: #1e293b;
      border-radius: 8px;
      padding: 4px 12px;
      border: 1px solid #334155;
      width: 240px;
      box-sizing: border-box;
    }

    details[open] {
      padding: 4px 12px 10px;
    }

    summary {
      font-size: 0.75rem;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      padding: 6px 0;
      list-style: none;
    }

    summary::before {
      content: '▸ ';
    }

    details[open] > summary::before {
      content: '▾ ';
    }

    summary::-webkit-details-marker { display: none; }

    button {
      display: block;
      width: 100%;
      padding: 6px 10px;
      border: 1px solid #475569;
      border-radius: 6px;
      background: #334155;
      color: #e2e8f0;
      font-size: 0.78rem;
      cursor: pointer;
      transition: all 0.15s;
      margin-bottom: 6px;
    }

    button:last-child { margin-bottom: 0; }
    button:hover { background: #475569; border-color: #60a5fa; }
    button:active { background: #1e293b; }
    button.primary { background: #2563eb; border-color: #3b82f6; }
    button.primary:hover { background: #1d4ed8; }
    button.danger { background: #7f1d1d; border-color: #dc2626; }
    button.danger:hover { background: #991b1b; }
    button:disabled { opacity: 0.5; cursor: default; }

    .stat-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #94a3b8;
      padding: 2px 0;
    }

    .stat-val { color: #e2e8f0; font-weight: 600; }

    .toggle-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      color: #94a3b8;
      margin-top: 4px;
    }

    input[type="checkbox"] {
      accent-color: #60a5fa;
    }

    section {
      background: #1e293b;
      border-radius: 8px;
      padding: 8px 12px;
      border: 1px solid #334155;
      flex: 1;
      min-height: 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    progress {
      display: block;
      width: 100%;
      height: 4px;
      margin: 8px 0;
      border: none;
      border-radius: 2px;
      background: #334155;
      appearance: none;
    }
    progress::-webkit-progress-bar { background: #334155; border-radius: 2px; }
    progress::-webkit-progress-value { background: #60a5fa; border-radius: 2px; }
    progress::-moz-progress-bar { background: #60a5fa; border-radius: 2px; }

    .node-detail {
      font-size: 0.7rem;
      color: #cbd5e1;
    }
    .formula {
      font-family: monospace;
      font-size: 0.6rem;
      color: #cbd5e1;
      background: #0f172a;
      padding: 4px 6px;
      border-radius: 4px;
      margin-bottom: 6px;
      line-height: 1.5;
      word-break: break-all;
    }
    .node-detail h4 {
      margin: 0 0 6px 0;
      font-size: 0.75rem;
      color: #f1f5f9;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 1px 0;
      color: #94a3b8;
    }
    .detail-row .val {
      color: #e2e8f0;
      font-weight: 600;
      font-family: monospace;
    }
    .detail-weights {
      margin-top: 2px;
      display: flex;
      flex-wrap: wrap;
      gap: 2px 8px;
    }
    .detail-weight {
      font-size: 0.65rem;
      color: #94a3b8;
    }
    .detail-weight .wval { font-family: monospace; font-weight: 600; }
    .detail-weight .wval.pos { color: #60a5fa; }
    .detail-weight .wval.neg { color: #f472b6; }

    select {
      width: 100%;
      padding: 4px 6px;
      border: 1px solid #475569;
      border-radius: 6px;
      background: #0f172a;
      color: #e2e8f0;
      font-size: 0.75rem;
      margin-bottom: 4px;
    }

    input[type="number"] {
      width: 80px;
      padding: 3px 6px;
      border: 1px solid #475569;
      border-radius: 6px;
      background: #0f172a;
      color: #e2e8f0;
      font-size: 0.75rem;
      text-align: right;
    }
  `);customElements.define("nn-demo-app",u0);window.exportNetwork=()=>{const t=document.querySelector("nn-demo-app").nn.exportModel();return console.log(t),t};
