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
 */const I=globalThis;class j extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=n1(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return q}}var E0;j._$litElement$=!0,j.finalized=!0,(E0=I.litElementHydrateSupport)==null||E0.call(I,{LitElement:j});const h0=I.litElementPolyfillSupport;h0==null||h0({LitElement:j});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");const R={relu:{name:"ReLU",formula:"max(0, x)",fn:d=>Math.max(0,d),derivative:d=>d>0?1:0},sigmoid:{name:"Sigmoid",formula:"1 / (1 + e⁻ˣ)",fn:d=>1/(1+Math.exp(-d)),derivative:d=>{const t=1/(1+Math.exp(-d));return t*(1-t)}},tanh:{name:"Tanh",formula:"tanh(x)",fn:d=>Math.tanh(d),derivative:d=>1-Math.tanh(d)**2},leaky_relu:{name:"Leaky ReLU",formula:"x > 0 ? x : 0.01x",fn:d=>d>0?d:.01*d,derivative:d=>d>0?1:.01}};class O0{constructor(t=[12],e=null,s="softmax"){this.hiddenSizes=t,this.hiddenActivations=e||t.map(()=>"relu"),this.outputActivation=s,this.layerSizes=[9,...t,9],this.weights=[],this.biases=[];for(let i=0;i<this.layerSizes.length-1;i++)this.weights.push(this.randomMatrix(this.layerSizes[i+1],this.layerSizes[i])),this.biases.push(new Array(this.layerSizes[i+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastInput=new Array(9).fill(0),this.lastHiddenRaw=t.map(i=>new Array(i).fill(0)),this.lastHidden=t.map(i=>new Array(i).fill(0)),this.lastOutputRaw=new Array(9).fill(0),this.lastOutput=new Array(9).fill(0),this.lastMasked=new Array(9).fill(0),this.lastMask=new Array(9).fill(1),this.lastGradients=null,this.learningRate=.05,this.trainingGames=0}randomMatrix(t,e){const s=[];for(let i=0;i<t;i++){s[i]=[];for(let a=0;a<e;a++)s[i][a]=(Math.random()-.5)*.5}return s}softmax(t){const e=Math.max(...t),s=t.map(a=>Math.exp(a-e)),i=s.reduce((a,n)=>a+n,0);return s.map(a=>a/i)}_getActivation(t){return R[t]||R.relu}forward(t){this.lastInput=[...t];let e=t;for(let n=0;n<this.hiddenSizes.length;n++){const r=this.hiddenSizes[n],h=this._getActivation(this.hiddenActivations[n]).fn,u=new Array(r).fill(0),c=new Array(r).fill(0);for(let o=0;o<r;o++){let l=this.biases[n][o];for(let p=0;p<e.length;p++)l+=this.weights[n][o][p]*e[p];u[o]=l,c[o]=h(l)}this.lastHiddenRaw[n]=u,this.lastHidden[n]=c,e=c}const s=this.weights.length-1;this.lastOutputRaw=new Array(9).fill(0);for(let n=0;n<9;n++){let r=this.biases[s][n];for(let h=0;h<e.length;h++)r+=this.weights[s][n][h]*e[h];this.lastOutputRaw[n]=r}if(this.outputActivation==="softmax")this.lastOutput=this.softmax(this.lastOutputRaw);else{const n=this._getActivation(this.outputActivation).fn;this.lastOutput=this.lastOutputRaw.map(r=>n(r))}this.lastMask=t.map(n=>n===0?1:0);const i=this.lastOutput.map((n,r)=>n*this.lastMask[r]),a=i.reduce((n,r)=>n+r,0);return this.lastMasked=a>0?i.map(n=>n/a):this.lastMask.map(n=>n/this.lastMask.reduce((r,h)=>r+h,0)),this.lastMasked}pickMove(t="greedy",e={}){const s=this.lastMasked;if(!s)return-1;switch(t){case"greedy":{let i=-1,a=-1;for(let n=0;n<9;n++)s[n]>a&&(a=s[n],i=n);return i}case"roulette":{const i=Math.random();let a=0;for(let n=0;n<9;n++)if(a+=s[n],i<a)return n;return 8}case"softmax":{const i=e.temperature||.5,a=this.lastOutputRaw.map((l,p)=>this.lastMask[p]?l/i:-1e9),n=Math.max(...a),r=a.map(l=>Math.exp(l-n)),h=r.reduce((l,p)=>l+p,0),u=r.map(l=>l/h),c=Math.random();let o=0;for(let l=0;l<9;l++)if(o+=u[l],c<o)return l;return 8}case"top-k":{const i=e.k||3,n=s.map((c,o)=>({p:c,i:o})).sort((c,o)=>o.p-c.p).slice(0,i).filter(c=>c.p>0),r=n.reduce((c,o)=>c+o.p,0),h=Math.random()*r;let u=0;for(const c of n)if(u+=c.p,h<u)return c.i;return n[n.length-1].i}case"epsilon-greedy":{const i=e.epsilon||.1;if(Math.random()<i){const r=[];for(let h=0;h<9;h++)s[h]>0&&r.push(h);return r[Math.floor(Math.random()*r.length)]}let a=-1,n=-1;for(let r=0;r<9;r++)s[r]>n&&(n=s[r],a=r);return a}default:return this.pickMove("greedy")}}chooseMove(t,e="roulette",s={}){return e===!0&&(e="greedy"),e===!1&&(e="roulette"),this.forward(t),this.pickMove(e,s)}_backpropAndUpdate(t,e=null){const s=[],i=[];for(let l=0;l<this.weights.length;l++)s.push(this.weights[l].map(p=>p.map(()=>0))),i.push(new Array(this.biases[l].length).fill(0));const a=this.hiddenSizes.map(l=>new Array(l).fill(0)),n=this.weights.length-1,r=this.hiddenSizes.length-1,h=this.lastHidden[r];for(let l=0;l<9;l++){i[n][l]=t[l];for(let p=0;p<h.length;p++)s[n][l][p]=t[l]*h[p]}const u=this._getActivation(this.hiddenActivations[r]).derivative;for(let l=0;l<this.hiddenSizes[r];l++){let p=0;for(let $=0;$<9;$++)p+=this.weights[n][$][l]*t[$];a[r][l]=p*u(this.lastHiddenRaw[r][l])}for(let l=r-1;l>=0;l--){const p=a[l+1],$=l+1;for(let v=0;v<this.hiddenSizes[l+1];v++){i[$][v]=p[v];for(let _=0;_<this.hiddenSizes[l];_++)s[$][v][_]=p[v]*this.lastHidden[l][_]}const m=this._getActivation(this.hiddenActivations[l]).derivative;for(let v=0;v<this.hiddenSizes[l];v++){let _=0;for(let y=0;y<this.hiddenSizes[l+1];y++)_+=this.weights[$][y][v]*p[y];a[l][v]=_*m(this.lastHiddenRaw[l][v])}}const c=a[0];for(let l=0;l<this.hiddenSizes[0];l++){i[0][l]=c[l];for(let p=0;p<9;p++)s[0][l][p]=c[l]*this.lastInput[p]}const o=e!=null?l=>Math.max(-e,Math.min(e,l)):l=>l;for(let l=0;l<this.weights.length;l++)for(let p=0;p<this.weights[l].length;p++){this.biases[l][p]+=this.learningRate*o(i[l][p]);for(let $=0;$<this.weights[l][p].length;$++)this.weights[l][p][$]+=this.learningRate*o(s[l][p][$])}return{outputGrad:t,hiddenGrad:a,weightsGrad:s,biasesGrad:i}}backpropagate(t,e,s){this.forward(t);const i=new Array(9).fill(0);for(let a=0;a<9;a++)i[a]=a===e?s*(1-this.lastOutput[a]):s*-this.lastOutput[a];return this.lastGradients=this._backpropAndUpdate(i,1),this.lastGradients}minimax(t,e,s=-1/0,i=1/0){const a=this.checkWinner(t);if(a===1)return{score:1,move:-1};if(a===-1)return{score:-1,move:-1};const n=[];for(let h=0;h<9;h++)t[h]===0&&n.push(h);if(n.length===0)return{score:0,move:-1};let r=n[0];if(e===1){let h=-1/0;for(const u of n){t[u]=e;const{score:c}=this.minimax(t,-1,s,i);if(t[u]=0,c>h&&(h=c,r=u),s=Math.max(s,c),i<=s)break}return{score:h,move:r}}else{let h=1/0;for(const u of n){t[u]=e;const{score:c}=this.minimax(t,1,s,i);if(t[u]=0,c<h&&(h=c,r=u),i=Math.min(i,c),i<=s)break}return{score:h,move:r}}}supervisedStep(t,e,s=!1){this.forward(t);const i=Array.isArray(e)?e:[e],a=new Array(9).fill(0);if(s&&i.length>1){const r=[3,1,3,1,10,1,3,1,3];let h=0;for(const u of i)h+=r[u];for(const u of i)a[u]=r[u]/h}else{const r=1/i.length;for(const h of i)a[h]=r}const n=new Array(9).fill(0);for(let r=0;r<9;r++)n[r]=-(this.lastOutput[r]-a[r]);this.lastGradients=this._backpropAndUpdate(n,null)}_collectAllPositions(){const t=new Map,e=(s,i)=>{if(this.checkWinner(s)!==0)return;const a=[];for(let o=0;o<9;o++)s[o]===0&&a.push(o);if(a.length===0)return;const n=s.join(",")+"|"+i;if(t.has(n))return;const r=this.minimax([...s],i),h=r.score,u=[];for(const o of a){s[o]=i;const{score:l}=this.minimax(s,-i);s[o]=0,l===h&&u.push(o)}const c=s.map(o=>o*i);t.set(n,{perspective:c,bestMoves:u,bestMove:r.move});for(const o of a)s[o]=i,e(s,-i),s[o]=0};return e(new Array(9).fill(0),1),[...t.values()]}train(t,e={}){const{opponent:s="minimax",discountFactor:i=.9,epsilon:a=.3,epsilonDecay:n=.999,lrDecay:r=.9999,onProgress:h=null}=e;let u=a;if(s==="minimax"||s==="minimax_rules"){const c=this._cachedPositions||this._collectAllPositions();this._cachedPositions=c;let o;if(s==="minimax_rules"){const $=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];o=[];for(const m of c){const v=m.perspective;let _=1;m.bestMoves.length===1&&(_=3);for(const[y,A,S]of $){const w=[v[y],v[A],v[S]],M=w.filter(b=>b===1).length,L=w.filter(b=>b===-1).length;if(w.filter(b=>b===0).length===1&&(M===2||L===2)){_=15;break}}_<10&&m.bestMoves.length===1&&m.bestMoves[0]===4&&(_=10),_<5&&v.filter(A=>A!==0).length<=2&&(_=5);for(let y=0;y<_;y++)o.push(m)}}else o=c;const l=Math.max(1,Math.ceil(t/o.length));let p=0;for(let $=0;$<l;$++){for(let m=o.length-1;m>0;m--){const v=Math.floor(Math.random()*(m+1));[o[m],o[v]]=[o[v],o[m]]}for(const m of o){if(p>=t)break;this.supervisedStep(m.perspective,m.bestMoves||m.bestMove,s==="minimax_rules"),this.trainingGames++,p++,h&&p%10===0&&h(p,t)}this.learningRate*=r}return}for(let c=0;c<t;c++){const o=[],l=[],p=new Array(9).fill(0);let $=1,m=0;const v=Math.random()<.5?1:-1;for(;;){const y=p.map(w=>w*$);let A;if($===v||s==="self"){if(Math.random()<u){const w=[];for(let M=0;M<9;M++)p[M]===0&&w.push(M);A=w[Math.floor(Math.random()*w.length)]}else A=this.chooseMove(y,!1);$===v?o.push({board:[...y],action:A}):l.push({board:[...y],action:A})}else{const w=[];for(let M=0;M<9;M++)p[M]===0&&w.push(M);A=w[Math.floor(Math.random()*w.length)]}if(p[A]=$,m=this.checkWinner(p),m!==0||p.every(w=>w!==0))break;$*=-1}const _=m===v?1:m===-v?-1:.2;for(let y=o.length-1;y>=0;y--){const A=Math.pow(i,o.length-1-y);this.backpropagate(o[y].board,o[y].action,_*A)}if(s==="self"&&l.length>0){const y=m===-v?1:m===v?-1:.2;for(let A=l.length-1;A>=0;A--){const S=Math.pow(i,l.length-1-A);this.backpropagate(l[A].board,l[A].action,y*S)}}u*=n,this.trainingGames++,(c+1)%500===0&&(this.learningRate*=r),h&&c%10===0&&h(c,t)}}checkWinner(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[s,i,a]of e)if(t[s]!==0&&t[s]===t[i]&&t[i]===t[a])return t[s];return 0}exportModel(){return JSON.stringify({hiddenSizes:this.hiddenSizes,hiddenActivations:this.hiddenActivations,outputActivation:this.outputActivation,weights:this.weights,biases:this.biases,learningRate:this.learningRate,trainingGames:this.trainingGames})}importModel(t){const e=typeof t=="string"?JSON.parse(t):t;this.hiddenSizes=e.hiddenSizes,this.hiddenActivations=e.hiddenActivations,this.outputActivation=e.outputActivation,this.layerSizes=[9,...e.hiddenSizes,9],this.weights=e.weights,this.biases=e.biases,this.learningRate=e.learningRate,this.trainingGames=e.trainingGames,this.lastHiddenRaw=e.hiddenSizes.map(s=>new Array(s).fill(0)),this.lastHidden=e.hiddenSizes.map(s=>new Array(s).fill(0)),this.lastGradients=null,this._cachedPositions=null}getVisualizationData(){return{hiddenSizes:this.hiddenSizes,hiddenActivations:this.hiddenActivations,outputActivation:this.outputActivation,weights:this.weights,biases:this.biases,activations:{input:this.lastInput,hiddenRaw:this.lastHiddenRaw,hidden:this.lastHidden,outputRaw:this.lastOutputRaw,output:this.lastOutput,mask:this.lastMask,masked:this.lastMasked},gradients:this.lastGradients,trainingGames:this.trainingGames}}reset(){this.weights=[],this.biases=[];for(let t=0;t<this.layerSizes.length-1;t++)this.weights.push(this.randomMatrix(this.layerSizes[t+1],this.layerSizes[t])),this.biases.push(new Array(this.layerSizes[t+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastHiddenRaw=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.lastHidden=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.learningRate=.05,this.trainingGames=0,this.lastGradients=null,this._cachedPositions=null}}class c0 extends j{constructor(){super(),this.board=[0,0,0,0,0,0,0,0,0],this.disabled=!1,this.winLine=[]}render(){return k`
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
  `);customElements.define("nn-visualizer",p0);const a1=[32,32,32],o1=["tanh","tanh","tanh"],r1="softmax",l1=[[[-.37344131359076466,-.5453101240567104,1.0237173074858168,.3133525751075742,-1.1955244118363049,.5741156321446023,2.926346179052025,-1.1170892793633436,.09801261994125723],[-1.266481358506445,-1.5931854331871371,-1.1937803099406534,2.067054973090867,-.8933085983221946,1.7949491902568504,1.1377696297826045,1.1277580517382138,1.4889172297668987],[.5700682721819745,-1.8282153679202369,-2.4456421956551035,.5391716603466187,.8156055783140761,-.6039108070370784,.8406256698541081,-.011010461242329352,.47219197308545163],[-1.9304467292791079,-.14065188961864525,-.1913881582782136,.3124733879082013,1.841837182469367,-.3160623498887428,-.09395123517774427,1.1320905235277605,1.0861281624083423],[-.18098319112756617,-.46933079611328815,-.8112058009702019,-2.3562710710402768,1.7416802761681875,-1.9628985208708716,.10988330616441304,.7981115530567521,.004806175795321813],[.14385169557526883,-1.4805822508002262,-.687131716697081,1.1035255386705642,-.2540525513961897,1.633859447915526,-.8712143167485633,-1.5526782244640018,.8335715761209354],[-.05100356865602922,-2.0360985407822456,-.15189408401889098,.36825431492304256,.32936725602329064,.8957682538417256,-2.552086406634075,-.6381590365920656,.23902813677804646],[.5144573372654054,-.9675668398377881,-1.1107322489061242,1.1193485661175646,.5614456889974248,.3078032027564549,-.42212929350060296,-2.0503434674421666,-.7349556551931805],[.8121344554671597,.9016045662836911,.5396575664906762,-.3902997176137475,-.004327098283377189,-.4528420056023303,3.3557160190259445,-.12474653490802877,-.26561187695231087],[-.6521060330291674,-.4932446704183421,-.40775681906319666,-.3656345005238757,-1.0355892379959388,.04770928717051458,.25828211172581655,.7350878893134156,-2.5013886199704896],[.40536638478634734,.7808321552904237,1.2631179690188163,-1.324959119152291,3.0534870296492223,.1955163648958479,-.9138814593787552,-1.505527020890742,.3308510743419672],[2.889963264054627,-.3269507831370316,-.012780315468505426,-.22230339547164524,2.41611906076453,-.05990505390030206,.2816341557837694,.03922325335844543,-2.006573191668033],[3.006937550993392,-.8546624315465654,-.42563794755868745,-.5881424200434947,-1.5777400296446822,.16601783923305577,.20130175573722348,.6141983041719751,-1.211316239813969],[.5337664819050534,.6228784137465767,-.5661086884582562,-.4052271246140671,-2.7740948961287684,-.9412408353076578,.6185686693258873,1.9250066534713821,.9133687685737945],[1.2381947349306162,-.05315454927662731,.14903217150049197,1.5646174037714025,1.2056639234967312,-.6420473460241454,.19418298465538006,-.09927437992596215,.3127756103588013],[.19273121963400736,-1.8573440204513043,-.35864492511047036,.0666536572338182,-1.5569688244599154,.21999986566002,-.03568413796483372,-1.9905990241554505,.03537359258406401],[1.2414714080083589,-.3324922488914484,-.5857301787363289,-.7005146614172569,-2.4361597001519644,1.1020346194124695,-.05786548610085742,-.0725527228364235,2.2792221813951543],[1.227244336148894,-.4301099963245198,-.07434465013751793,1.3423209659936015,-2.1789846546136524,-1.3670389733579118,.24894225288291652,-.673124330337154,1.6328561995135347],[.361463214396749,.5990116658246292,.7026369884460903,-.9617113464567716,-.09567267530422438,.4343749397309691,-.7488623809121208,-.5110859394541957,.8624108632454726],[.5707562357728132,.3066690381532905,.772408528151996,.20112461723812744,1.091331964828469,-1.979221815455208,-.3162425413817556,-.20829155300616173,1.4220023210426154],[-.6760355331030224,-.8203366991171286,1.2130907654596907,.6892651825609405,-.56483668832014,-.5563494259669862,.2705465947221267,.44058504908821355,-.7845407327787034],[.17328649268261673,-.07799994995894823,-2.1264307471875346,-1.3074130751326893,.19631199707320468,-1.5103761322533638,-.5274185430803267,.2942765497187254,1.8190357068948977],[-.3751348479896924,-1.4170468520502186,4.054810053114338,.11281857520701748,-.994484501502418,.003907580180669368,-.04750174899556177,-.4382838870020707,.987511587528335],[.4511618324302359,.33435412047866325,-.21774190677210187,1.2496540465724462,1.7751540205114327,-.31175708143265,-.03089453561236653,-1.5804469307365667,-1.6993103691643225],[-.12468964429746829,-2.6157086705999766,.05800581455213451,-1.0970135379778243,-.7822679603174439,-.009557896355839812,.1439379088508274,1.6103863986466063,.43026447682713803],[.6590900397623588,-1.691687105346396,.8434985246197249,-1.2762257618814028,3.2279800260332503,-1.2537725776847457,.5527152004783434,-.676468950056465,.7477614792793009],[.2889180709248491,.1611295982474808,3.262846339242325,-.36945255389584264,1.4079370822730437,-.0245716384750701,-.600212412410423,.2940002594970811,-.44453710152280074],[-.025898853314086565,-.699828836772612,.13916909174289055,-.8729760039066077,1.0876725067068065,1.603463401554696,.12373554311714896,.567959314714817,2.258515109455805],[-.3036343981059894,-.9761465766611737,.5749276025102922,.8309020228405418,.29135307797589965,.9798572144293385,1.1637536738590963,-1.800484406355953,1.0081649801634387],[-.5026759731155116,-.029707875930776374,-1.0064614848435058,2.3817406985103142,.833772236907835,-.011557015908746578,1.0199244899410849,1.3685526923703686,-1.5832999643977663],[-.12343123335374541,.42687509872890705,.9419425583800914,.7337983360972022,.059359488071886145,.8370420189826419,-3.1812528141917413,-.5074269315323616,-.3158806659108669],[-3.5696198409871442,-.37826242436785074,.551568419188377,.06752651059307095,-.23708408017089305,.8936535108017692,.34145478480445557,-.1280187276392912,.42041696681087926]],[[.6334668354116683,.6268165258199734,1.3538756054586933,.423083459178572,.23928462396520256,-.6624272995254274,-.2275916774306422,-1.1799495090517786,.12136555232176705,-.6665025522817257,.18043954174328425,.8411238071513487,.7000487669320061,.5124814131290436,.7554682519324033,1.139158618774885,.07100292594282727,.6382585397173164,.07179336302012053,.9710015032291592,-.13760873914172397,.10963176138485542,-.4206890915200562,.5574036881894028,1.048946268761169,.07001102764919774,-.24399969633664553,-.04575819560657029,1.4449247421663864,.4074613004668802,-.03308612246634244,-1.2881911219798958],[-.4808396157176227,.28386147290438823,.43505102040225274,.5788657819338369,-.02085172021184778,.3470165969955342,.17934987768234595,-.41291694797616246,-.0457774632726837,-2.6222029573053556,-.3661332868521526,-.6305929547612924,-1.4465024625207732,.6046610981431444,.3346037710735333,.046512835435717034,1.7745967410797168,1.266069826567777,-.3732813116319057,1.5992153168236547,-.35254005783391895,1.9818376859551203,.3796540793573794,-1.246264879576568,-.21224261757477086,.1165007735978878,-.8683157757627992,.865968004586744,1.3721602421328642,-1.2276744236651398,.5607076823440551,.16547356678715738],[.4435808830162445,.10446310783961034,-.8602139062526786,-1.0578168778481154,-.39261433043769145,-.41033946025046597,-.22179902303803706,.02622425698492881,.24569890609080075,.2314804667692212,-2.4257848211844806,-1.3070390286109193,1.0099317597431519,1.0062803898007264,-1.2504662772940938,-.4555980468781148,1.1605365476546161,1.1599447441627797,-.5893080016573221,-.7205851660845333,.15873367684620487,-.29686577956353605,.5626877929580928,-.9755337775260621,-.7135694194561187,-.8472174093978166,-.9633845807974944,-1.5495625634787504,.7328758442265375,-.8912335502378986,.3881750953567731,-.7333736256230582],[.421715546115644,-1.1498356070758438,.014843295444886417,.0683782862589983,.9501867525150259,.42026488012134033,-.46122569869998986,-.3893833158398982,-.0568665480556168,.16742498013745785,-.46787547588146544,.3539051967766027,-.17717527184450402,1.252204045685997,.13000055068859492,2.848490526526576,.30892295196951125,.641363625212951,1.0636015179775893,.7629625192601421,-.083793119319848,-.11788936546004496,-.33214073501598523,-.524127030632923,-.11602515781605283,.6238310008150316,.6906628744613797,-.9526543734980941,-.6052556196330606,-1.202131916718817,-.44445077523128806,.38528825570857145],[1.4745175840242415,.21058127264438473,.7675470245562088,-.781065665136484,-1.1509103110097498,.20301227904574873,-.148729056615818,.5681887462137108,.7353611717680892,-.16695178245587988,.1516112028488147,.5051727372723671,.8510817677522865,-.023704956885488147,.8397610704120482,1.6230149744024884,.11031723708707461,.17735318261403873,-.2255749688834803,-.42594304882809064,.7758557363025522,-.1720744814306508,-.023295552582004875,-.10816803755650684,.3640401474724362,-.3703847030075563,.7927366767035096,-.8603966401062372,.1580924472650603,-.2118438079725135,.08950331215366221,.03690264076190286],[-.040683904458221926,-.4867510832912276,.18450614170100318,.3944438219292477,1.0508146680682386,-.8384767279141364,.34570942162310725,1.353500685933554,1.474126934519273,-.5693870734994796,.11502681332531642,1.3388431351935657,-.7560545111216346,-1.3474296110442714,.37345140505572577,.07149110884424141,.1713791324070111,-.14516505701327198,-.998510977162498,.14623426169263853,.2661563434666096,.2591277973939361,1.22622599842054,.01469733451649369,.5020674516396556,.999005167027349,1.1801272464838373,.2952485648957656,1.0240438643068845,-.8336843498714002,-1.404788809045624,.22446962278455362],[-.2883119122990973,-1.1053148610846926,-.28343638529000587,-.21329687542625203,.9417406625599483,-.26580886386639474,-.19792720863911312,.08179714457810437,-.05299634616755904,.43663042054299117,.7041752027668384,1.383203239344838,.578371177856368,.14657325575768176,-1.6792441398165765,-.5313531232646644,.4553120337853757,-.4370452015163896,-.6633982775849465,-.6358188482445047,-.6906919270424108,.6001261816264987,.05020210145681077,-1.1161329909500626,.313012528065738,.4585739862326555,-.44421408798359635,1.248608952968548,.35622795315570593,-1.0574163458955816,-.8308711706942554,.5107972308190345],[-1.2250639773505623,-1.297756492071547,-.4306735437185575,.38066700106861373,.3704685231602511,-.19205015943547543,-.06949060668201346,-1.75325750201025,.7596785660972307,.14976608123107651,.25266043050217174,1.2128176525180092,-.47404815306987447,.31768906945891606,-.3041105220051594,-.7620528391664403,-.18731691360241676,1.2324709089009194,.3067561415652414,.4677659918621694,.5126112625540663,.5953456124162795,.14374187831184285,-.33214469795048573,-.08037863137826688,.6388220540589444,.4905952624683551,.22798723632401421,.3338078937020966,-1.059253121883528,.8692917079267438,-.25828166694950494],[.5185121245166091,-.013870022386905913,-.13480816154665243,-.47280249897753074,-.8888738482897166,1.0585460340911694,.7247023647670302,.27205487762589403,-.1374142767017097,.5235905814349147,-.4235183585927505,-.011149504333304576,.54371430889558,-.21585945081308724,-.9731404362770392,-.44655973516614217,.5273847056091168,-1.3850091147231738,-.2744040501572783,-2.4412885561769477,-.4337307999790179,-.3002613195852045,.040919744148552734,.0608305482013101,-.43418065291294283,.29224545151216236,-.43637676798676556,1.4206274957791023,.6056045687552372,.000652354553571529,.2869106436479924,.15205637581692277],[.25915290855340584,-.14625814921018443,.3568066863057164,-.0523069127310029,.41431236861713566,.24179941141142677,.7821079289198904,-.24393605324571663,.0269032357088307,.3566319415093068,.34140069464567596,-.708475187419177,-.2435510024866573,-.6038477696051788,-.26640597828596674,.9159090582212774,-.33698367258130235,.4937568358816695,-1.3718147246616064,-.2685262286508974,.4690927619665032,-.38326751899196415,1.724584477566612,-1.1578533652516299,-.10161688158208058,1.3171292173347662,1.792525470716574,.8616832236655063,.1884182021952599,-.16426242263684412,-.7051765565216923,-.32600889587548637],[.6042936800108288,.5006831724768016,.5314081736803585,-.036106505453552526,-1.5115539034571888,.9923356350137098,.45666670984945634,.6358244976267569,-.8026419306074829,-.6317700299204518,-.0009318625895384987,.9272031060555431,.8420033483922307,-.32287780216056833,-.5299774471297547,.9826619455274518,.5671095933418959,.2784048748464834,.8521322729730845,.25849286401494387,.8205371758211939,-1.2843536611498187,-.3163984424461695,-.24164807566092508,-.06861512506585775,.014403729766280933,.47017722351608887,.4776218504647083,.9090698060021081,-.8744341690709964,.9578139273489149,1.5713634974058783],[.19339079230450631,1.6340824602518722,1.4351911669019901,.13714391162298123,.526371002731659,-.08818801817613736,-.6467509933946365,1.117364775725119,.13809330164830513,-.7571208037622675,-.6878476442185532,.4946339553834736,.40971849769928903,.7450307860470023,.243603829131516,-.9593554947244161,.562966907790501,-.6482313438810716,.4454048389245304,-.4950259619418032,-.655443780352253,1.1341713166594654,-.8655917214313684,.004107807823871054,-.14421581427751845,.5684874315066767,-1.9861481004378179,.023655087137498226,-1.1486363394516965,.38350909749664347,-.72714893343844,-.5968787353082545],[-.028680302220693576,.8496294832095456,.40002734249933036,.21251879252470746,-.1323908548611534,-.002648667627780079,-.3283513271982563,-.05938733745521742,-.11013680132948199,-.613182908410066,.8623194691797215,1.0135425917039365,-.001129952886660156,-.5535025913268626,-.24905213636732126,.17950682934462744,.17600713055901923,-.6969614360656061,1.4180472157690343,.09966877028415777,-.20258655132824002,.09099655973139568,-.09711413075382072,-1.1805367027076004,-1.4375215779082866,-.21256192961426906,1.3808557109914512,.24271618345035523,-1.7271874182200841,-1.5300751394271157,.026777600507086986,-2.079709290036892],[-.43593139591794133,.9961034878843507,1.3742849876702161,.006611148171576791,.21169144517952554,.44792331764306714,.5730668421195155,.9022648527923101,-.26256008000523234,.3750631253462318,.4272715573725467,-1.1705276449204554,-.4117198451361369,-.11765886078114016,-.6496189350279044,-.05020625392441784,.10739040193406052,-.0007658441589769848,.2671898066003495,-.9256096473142085,-.8699995862262401,.9105808845266883,-2.1638263597727865,-.12046731266567319,-.2786025988481634,-.06414395902663901,-1.6145838628790987,1.0085155304252111,-.5360526060664688,.502223017354541,.2560066755380066,-.3149995067706156],[-.1803128141334792,1.0819584926154795,.027741232226878677,.3493729986989966,-.4510831637508813,-.05211908636540535,-.9792307617971306,-.3206629224900781,.30232942436524346,.9520431884057564,-.2537195310032282,-1.347485750983546,.4216911589132021,-.611734190542334,-.7149185538617726,.1669500328350716,-1.9398035781754608,-1.0367203876283178,.7252213682264105,-.7158172780302718,1.3185804198133895,-.19485106103209343,.30663621947949066,-.4477643302857046,-.2665990741708621,-.9202748386720526,.16115423020767305,-.40333531638748515,-.43266403176070695,.23784914743782234,.15436743700522973,.9727019634684562],[-.3634271967263852,.3273313666255252,1.5142031546704509,.2053800821680757,.08520973776492692,.35627715332930726,-.4286204341414836,.20748065845738642,-.060282523691130095,.02570301633418649,.19381897075106433,-.37942395692852804,-.41948296759551573,.5816523078222243,-.17182697047786355,.5904176168094981,-.06374333337567914,-.1636242668606309,.6771351521302114,-.47801050727339944,-1.4688010404331937,.7777213556294561,-2.641976751419218,-.08835539613718425,.11749378957004589,-.08942098272053535,-1.322451050738703,.7508266764505057,-.8229636830852377,.0024857448465115924,.036511603660196526,.41464370946485896],[-.5036430093825017,.6678679417081402,.2856746042802125,.32189588851912965,-.9585410356214508,.6309012469713687,.32289553389229614,.9514218448493396,-.7501577091313578,.26241472131321963,-.9791572369471537,-.8748911702049914,-.47123439343449586,.3332433933781351,1.7155023326920618,.5291423700014504,-.7228232020025102,1.0069941268521887,-2.508716189657416,.7424363182620822,.3346158275192919,-.2956165528068195,.15974582623069375,.6018429353833048,-.5708552149363745,-.9587900040168362,-.376814146636383,-1.7199719698422191,.14705688578091394,1.662274676707894,1.5415589346927665,-.31067758631996445],[.025194841997794874,.022706246641197064,.37815689922689805,.45115769869566086,-.19495736306719963,1.71651674901956,.73616932758866,.5561769636623408,-.5366464260597382,.6087857892986724,.07864416946648299,.24582156424804774,.17782754240564141,-.05061719556998798,.2602902192533832,-.8771029164491504,-.04518468580678938,-.27707204833032684,-.183337426129381,-.5019437785608558,.29599889382803074,-.43419181216085423,-1.2001046012262646,.6644438466440717,1.4622287448157352,.9214775170301102,-.36885463091899373,-.03655612229162948,1.1862809211336705,1.2422394237456746,-.328835342669041,.11425719219075704],[.7539956420549996,.5282349947288091,-.9280593312274774,-1.9043762227561094,-1.5777933715156376,-.017813159767468622,-.9337885679514223,-1.0833945508999683,-.15150643367214978,.9874957807627065,-.9537219053022422,-1.7605022785837965,1.391279584245403,2.6796209107941107,-1.1752892804752837,1.1812622335240843,2.5229270984950225,2.743737706418184,.85142612087552,-.49491304759092114,.25201397102114936,-1.1335534910691292,.4654620990231869,-.4164931601691347,.8199973499818006,-2.374957858815929,-.47073811669644705,-1.0734284361227544,-.1641301406351395,-.4516193028135168,.23790754721642732,-.052021439767200015],[-.12238590323491531,.1070199112742704,-.12728342365985695,.4172081514086312,.07624316017199459,-.648599228535428,.049350454367603915,-.6864277705669678,-.18138539378641497,.3975782415775808,-.32333828208634285,-.21707664201585075,-.8320847005621675,-.8106951379258105,-.6548490397361042,.4265968895935353,-.4753517305324304,-.6551882587612384,.4928287373849841,.5775800121053544,-.5220245030506638,.4788615657774084,-.3956558744325316,.2729001555480627,.3181951038172443,-.19163861677248042,-.043107320909127014,-.17920647248487903,-.5634064016381256,.8384457140363681,-.3801755224039507,3.2804973485803073],[.261009680198838,1.0383495408388075,.30007621783388677,.07267693216788151,.1739046352999067,1.17053134233253,.2959320112832273,.5361223636014779,.09937773250598947,.07269714116340531,-.09074047405692116,1.8296188875688484,.23254822794828178,-.3941358693812093,.9653320219949226,.22060566958006872,.4103149624082576,.5427000601221088,-.10118647162932574,-.7852316621630046,.15187846349080827,.7749121948336424,.13943903640949998,-.8927777311129309,-.24714570629119198,1.447527981292052,-.9182558273781035,.5754116712941073,-.6849661877240323,.07159575104009591,.028224979362255726,-.9027332232930032],[-3.6133131618727896,-.5242325777190324,-.9241606148853837,-.34703036384398944,-.9456187023841554,.1880780545877976,2.199943601049023,-.04845117145324757,-1.5362534258131817,-.5154928117384069,-.1280714443527417,-.08144736148348264,-.5796307893969261,.4448634954422409,-.007296985790980716,-1.2838046425638046,-.18874608871371867,.4727482476907315,-.6871484323096291,-.06662380264875105,.19856575410460642,-.07949220883129367,.8842421056785208,-.13969240884864564,-.32267909300212494,-.4115755889011722,-.17672291738569146,.28574632489179785,-.025377138692021715,-.8052646122558792,2.6090097946737916,-.3380993615542794],[.6727117043102018,-.8312479843691798,.20253081823883892,-1.4884359080551068,-1.3184427622771138,.23602172256700824,-.4348095470756254,1.3915611913251529,.5094969957751927,-1.6197506818541068,.7356500947000492,-.23309493604597853,-.9318749400452516,-1.4723720044168558,-.2551982754255706,1.0394781590124664,.410527370060395,.884013443450973,1.691438227045234,.1109440065344556,-.31687980000100935,.21955281558270803,.6532421427110203,1.9208484537770945,-1.885046838448924,-.15522438559258045,-.628888929373194,-.3967647276210136,1.1139251320439079,-1.270063484261243,-.035041440939425975,.4646354858981613],[-.22526577164313785,.7740480809338595,.4642945650854165,-.15075764489762145,-.3299938210013236,-.6311013065528718,-1.338036100186989,-.45381099288586574,.21320756666562457,-.42166556240295366,-.23732431926014907,-.4084594390199648,-.3437198183184709,.823988431810688,-.48150675104444346,-.18647067675821957,.7343145386243589,-.43917723750587495,.15647948659369676,.7216472050201594,-.08271829298729123,-.5460930476910915,-.9186247064227783,-.46766437149872103,1.356910930975028,-.6954302491669648,.1741774843461295,.12989314719299186,.17541202060740338,.2985462910975138,-.5256379350165176,.5891351734794177],[1.7908672941165273,.046138459771792865,.26017542187324527,-.1385701800676579,.1335080335069786,-.2797998721675422,-1.3389277733067373,.03395519955899034,3.431210518116265,-.255471031007861,-.7301771951778263,.17422092643122142,-.40587331138261457,.01589173629954635,-.5328552866149578,.05300939492470745,.4971070419931254,.19115025865928167,-1.0292914104147985,-1.1515277021656485,.381499039574239,-.05261365906125526,.29029478974415535,-.25560433422325834,-.32949008047657696,.8061204925792804,-.11232492333742519,-.02905229541515562,1.2251943590355734,.2577849736879434,-2.0789834710459476,-.06032338980653752],[.5298643732158175,.8106012010312468,.0927796498371305,-.6731191747644423,-.8909996093736566,.691012731255293,-.19973399664194907,.09163309216165086,-.6976409073981473,.8834881935951935,1.530302227529931,.49965225179066597,.15910822050692133,-.5929886883290757,-1.5942001128254193,.2609198818036098,.4935089351221694,-1.3689021763978209,.7120157701263857,-2.586172748321757,-1.3993873608199547,-1.2085385458777267,.14093640507089167,-.3861630929035579,.2800451149354179,-.5768999460712747,-.5601903822621374,2.1824247814998015,-.21356923239477182,-.19187676039793589,.2643905035570549,-.1461371162227923],[.6264591372444849,.7969854438808225,-.13691191599133515,-.6576182049742748,.3980879256903715,.341690482797923,-.4503033604184827,-.5597770881374017,.04955247554589711,.7256001166250862,-2.158807646753377,.19747234353043464,.5098984842618713,.8186084587536051,.2352832278371512,.13184579860095957,.2555367128112458,1.039309038650925,-.671024246167555,-.03777941002778034,.5184787162024722,.3889114158537103,.13881778608446635,-1.2829139297744223,-.7198980494311867,1.0905495310407654,-.14196480925517646,-.4127620221227689,.5133934492014718,.47205043556050774,-.38469233670440733,-.2604926897331177],[.2952586546740066,-.9685428161836566,-1.2688169636094409,-.7917209679936915,.6995113997528676,-.5311495713876342,-.33779347163094386,-.34884223761273475,.5963039657983149,-1.113009885245997,-.9602211799454432,-.8315442516256407,1.0067546627071795,-.07677585800183044,-.8162534797366038,.45064095248770175,.37993356354401897,.41580376720488355,-.3631988137406716,-.001350779312600779,.5295810517071112,.14664918911751496,.7918154310210742,-.3126550197358062,-.9853550611450224,-.1724864403530144,-.2075217136908268,-.7805612196392392,-.37372517586356563,-.7599518817352364,1.2283600965000256,.47472101821611873],[-.9392652113987403,-.518576553912923,-.55208638574329,-.5492401767549028,-.21630034664646508,-1.0381243074052404,-1.129298300744837,-.6919590738051707,.8194404498173219,-.6340275763568097,.3860077429692612,-.6093644346770205,-.27280791456297987,.07459722178036866,-1.1962791681918887,-.5966949502024933,.1116158444239512,.13384414303133044,-.09133687396540989,.05370658629132533,-.35452246280798755,.42325541657391647,-.6760158321004347,.23879518151512308,-3.185242452415244,-.8808933354568997,-1.0233529254916323,-.49191523883620597,-.7362310585387185,.15207056936532676,.8007591501833091,.10218055836329715],[-.6071960761738531,-.3373478750027606,-.7971206422551607,-.7000880050606705,-.22470706630125256,.30414381045353994,-1.2420796468873625,-.2594828305280403,-.3281275894972312,-.8891239601786216,.7555173733584943,.026175865877905134,-.44661296457857247,.08149701260626742,-.08684130305241537,-1.7816329032355347,-.4735731213294102,.020693831241075322,.5957261946169818,-.421504925093787,-.6269245128123945,-.26698969887144175,-.5982920904086122,1.5429480338381825,-.6470752641872464,-.6774103140825332,.12065770979262984,-.3122562960798925,1.3299794195200874,-.2017927918588861,.5741106955616341,.7009018917781165],[-.5978678288196975,-.18296148961903044,.4282048960488297,-1.4418070136648213,.2875422221002154,.3127816061682134,.1646300630178984,.5510292109736847,-.6690401675394662,-.1282292117301152,.9576941435973882,2.5557094107408354,2.9649545435560336,1.399818876309854,1.5722740069951604,-.10080237661245561,.675556581424204,-.0015236669373623359,.340117215568255,.44472650875365494,-.8104147265136957,.09500715454945602,-.15244325056298924,.7567552913047342,-.24051655476826198,-.02735288159870843,.3178884062649258,.039089248517037795,-.08355774547040554,-.19621677438421206,-.23488063625166639,.3080115431072633],[.009579028648568562,-.8169595366216582,-.9627802963974024,-1.1247109048990733,-.14709590676738132,-1.1302602288521848,.012868142929564565,.7459761621802857,.42375900667454247,1.5408474126048923,-.3344791648966617,.7858712538134749,1.3292266055951139,-.1252588895419316,-.500291431009936,-1.0043164515105254,-1.405893424584203,-1.272678783319774,-1.2451050625891098,-1.329650691861282,.6261383589742486,-1.367556743745926,.03782379362135612,.42983267156678046,-.2888763936248846,.029374802080734105,.09181789513148667,-1.4864532123900243,-.30504913212532403,1.1335389754041125,.22042556172023925,-.8149079180243626]],[[-.7988587550726508,.11967335891084867,.5828516452242639,.22595121550472777,-.4663028762243962,-1.1408002123872316,.5345930083002085,-1.271971344433272,.7563193646391366,.4934428771867383,-.056297797201015715,.31723586047807883,.014197074882817686,.1869694707565206,.0610399955264463,.19771414665292317,-.26683213245881116,-.7526658039669722,-1.2386297839021054,-.4695093119632006,-.8992714799745475,-.28255616083372515,.9500937466002474,-.43767438898779343,-.19857051471762166,-1.0282227329355662,1.2442349332931608,-.8149560502361586,-.5647458354962167,-.5304997392704461,-.0666369818708658,-.6990155543696199],[.0035509519644127035,-3.2816707594969428,-.39878355756727873,-.21605966981781397,-.18470646866532076,-.5580245506353629,-.6491010561994242,-.3522384563900337,-.026433402557901185,-.9212884148715501,-.017195183988697786,.40602985601320474,-.32533959060327394,-.060965878992623936,.22759038731874587,-.24121330732098836,.23743462986424735,-.39382740453510345,-.6596412676108293,-.4639773197957659,.362424414371686,-.536804803642903,.42777572015579945,-.3494642127252856,.8765574244386007,.7093391017320635,.15485616479172568,-.016023466898294213,-.22084839427257474,-.3042061560148488,.03930067571580645,.1727513132432217],[-.4308369953644884,-.4948488560544623,-1.0816614756094112,-.5413602290175836,-.042438349671768176,1.6129632813285206,-.6395801794730409,-.46908595685979343,-.7994513867752508,-.26803774492220495,-.5005955053349418,.8672992948901584,.3387267090904009,.8321912254625479,.09646722622660975,.581107896214821,.6758694173381918,.2363077103956623,1.102839859104352,.40200713040281977,-.04979152524559714,-2.1760058172881,-.7308827682266505,-.004139997749018104,-.6594057050667647,.26143123849236377,-.9888421017213174,-.21722869285621807,.5114460896320729,.01976773371861678,-.03301885506615993,-.1959144291194337],[-.042192328243945774,-1.2714951586879515,.7120205189181534,.5325922550722174,.47424892749909137,-.014947570433766972,-1.22050449756672,-.42561426884310083,.010083178652199539,.1483938536913633,.20344229381146095,-.29151114240081777,-.4757718585573156,-.18064627448357942,.06335319455675409,.013611366484147545,.2286784226453974,-.39704396188142893,.8600260821067701,1.1922457385979652,-1.180891974395641,-.8024089036159302,.9929548453907712,.42750888465153897,-.17665411323696645,1.0934457719639046,-.11008075157319794,.4802001939325599,-.24429705612539432,-.2577001536887803,-.8107099291687957,-.34866674896431443],[1.003551814913368,-.11542500195855582,.8486515221471312,.7425312730055701,.39800051370415734,.5381614557124687,.1091709366744294,.19206801904812512,.4171756041433112,-.28461240040478913,-.5994348426469243,-.9831763922593264,-1.1480189812725028,.21838430927888455,-.15330589223111174,.5719667841195903,.08421493922236133,1.3661560661510963,.9471600444034326,-.6694215062179427,-1.0571532577196159,.24196722131522608,-1.161320799407349,1.0907374238950351,1.4266624857272248,.32639491402285603,-.354461063308106,1.5161129940726683,-.1072990360195233,.47020663434657045,.005157615150630293,-.10718735062255265],[-.8158187431985956,-.7041871394052285,-.9670044899056235,.2306569936139003,.8704375240674174,.40725942873440396,-1.2680977370426354,-.00038349745548602135,.22085267436690287,1.169463102790984,-.2965916321598164,-.34307949151044376,-.1632843625931954,.28698795875945105,-.7964262733015296,-.20593694395560036,-2.148419978218415,-.5294604613044152,-.9581512903296028,-.17645071531894732,.2938577962885263,-.640106972101597,-.2570120515875223,.443435020892506,.5526679096220662,-1.1296364067962301,.08431640272405218,.510121897609016,.04719602191964431,.04255553235806906,-1.8393033909958,-.24748060034395478],[.35029824960885814,-.40704168229419685,-.18079136774891366,-.5743515329962828,.25178189879467155,-.4835092038738539,-.4371289396768942,-.20462234757597608,.26041394051823136,-.1585977120049302,.4298434261149331,.12364833129322857,-.04453366126150271,.3220855461102221,.9725832855903289,.7033728842194116,.09809404580249609,-.4755051539166022,-.9917027070610717,.1539499358356644,.035113527910175815,3.320122156660783,-.3708594510726753,.17621754159456202,2.6789356906841766,.004280191650774561,-.9744029268510623,-.5108540444935067,-.07367251093593594,-.26065445769600737,.05948810329884292,-.05102023836075621],[-.12247561872413244,-.2783231891228556,-.4671793823388769,-.4729344858629036,1.3250345101318604,.7696643069652028,.795825036385709,-.18719337887273693,.20956508212296399,.7105898841193472,.1180111931478059,-.785627757214642,-.11187380646201014,.3120701867135679,.2358271540005433,.3207599231436061,.7738616066520974,-.23938930721897092,1.5528015669691142,.3989039200383318,.07905508615615058,2.143585690285603,.8315660145619994,-.3156504933916227,.9893588236853212,1.131526905771635,-.27803847327949355,-.3112684793642539,.011456074961923185,-.7481433923638545,-1.1237795347704485,-.6826306615518672],[-1.0101275020052776,.039937030081804416,.5489674438872811,.04793761797759511,.026636005780032754,.6407288992869258,.21251609208585245,.7717808992515094,.0269150098484037,1.5528396388544408,.21992864280960947,-.6479253011602805,.27823705207971317,-2.476743351222059,.12466148312491841,-2.1198114466656848,-.45010441035291987,-1.0407251833193742,.6389858516576958,.7930039523313672,-.45244876142409296,.07024780513719595,-.008075930840945373,-1.0964686943343485,-1.1720244959475143,-.12800277053310993,.03804552044569325,1.2012256785632347,-.7831580918155897,-.38919510588643347,-.5660801713367929,.39013698977371936],[-1.2256373803090612,.10444965201309164,-1.4064517089490576,-.6906815634234058,-.6679443687232233,-.22691897267758457,.20628942367070038,1.0792052929005336,.7707742049418428,-.19577977422412338,-.3593439503945299,.8282150396455858,-.3635543699318056,.36089032389243636,-.8205604938602586,.7160353588265483,-.56729358622015,.5131037090923413,.23346461511399438,.4172195057626597,.9038402258678888,.6323996440017359,-.1320645531210514,-.45825481945084157,-1.2530130579065824,.7206832382125621,-.6405507479307245,-.11361137388563256,.5763136941170884,-.07008976894039813,.5615361613916489,-.1605827588176801],[.4527766612360085,.048894637036383165,-.0015421820169727242,-.619144022267751,-.047714846905032096,.3232682246930399,-.28945449735418155,-.544834464047892,-.20472768815166137,.4365186969270756,-.12311343593850894,.07183614023882332,.020963893136221694,-.20063448359020195,.15409704850301179,.2536458412275387,-.40787688763766405,.45682585530132447,.35388284226542505,-.04200660995727482,.197546797758608,.6227920833010927,.5921800876143509,1.3854525955154113,.9776879947965714,-.27858091976067756,.05406470411801153,-.11527744997145721,2.8034734759565274,-.3708472708592762,.6004185930286916,.112824430664792],[.8878641282395088,-.4929390658238738,-.0018241723657440045,-.6175292211180606,-.11620860870700878,-.5106201928251094,.6556247260369754,-.000441136495351305,-.2326968867781507,-.2032112836984611,-.2862048875263692,.9935904857959935,.1836910280367381,.21779766547426307,-.48017677466988506,.24527280817672403,-.3738037694986344,-.3303998498598687,-.19922028161233557,-3.154111709478179,-.23790717036538983,-.4218155546486373,-.44287141043769135,-.3711036597834647,.034958177836562625,-.7057535425294577,.6823395131953509,.08836489333010988,.05746193865075419,.400983747789223,-.1127370376261555,-.26555447877159505],[.7259614067378425,.24099721422839832,.3415433239793305,.462264657329772,-.1749690575506853,.413338429441902,.7216282306562335,.4546047231389706,-.23711677813943152,-.7728408015430154,.24397306834209811,.2618006476644132,-1.172261657906051,-.19295458981571334,-1.1091533778601723,.035962104419712995,-.6396829497948899,-.25364892812946555,.8348316062400669,2.39824012399381,.20643843449365162,.1892448914627378,-.27739791389228663,.013335286496350955,-.10990307457050023,.2681806641543362,-.12553800911076418,.34612356259062915,-.0949828328714871,.1689046189325987,2.775170452678887,.13559822400486587],[.5807925901183381,.9605223235828622,.30991071164795214,-2.344377881492577,.4650721563682018,-.6277094536263669,-.6102566226921431,.001737468465682085,-.7021903141515093,-.15830219741022067,-.3564028085272464,1.2110659388948268,.7738932548008566,-.20949916793588966,.6640068018253785,-.012151707691303321,-.4808867460694736,-.36382681796746363,.13102319369131582,-1.6635659352866332,.15278571780378306,.35670328394682244,-.5374007664923188,-.3855719839670734,.06699109924411234,-.02707731113275051,.41301390043568803,-.06368399992986143,-.19935432282085216,.3632284511204969,-1.2912597842373426,-.1328950771582121],[.014802207764618222,.7027011785992997,-.5835963163275342,.42925141864794036,1.4609266834683785,1.297005824168582,.5760394797840473,-.20592899990955754,-.553816496731909,1.0178439479650796,1.1054489848354998,.022394349766780827,.1281317552114294,-.008108540697982343,-.6682503720844883,1.6832682331999977,-.49013331174706504,.517249018553778,-.7739407400821164,-.2972184829923042,.5776099685872521,-.005685116488402636,-.7688644424645348,.0046171788144425425,-2.2562015015321126,.08498840239474795,-.6141940912999982,.12138368467768419,.771141393108564,-.08315962422268618,-.4733022774428449,-.4374082153262824],[.4666368917154484,.387362048625647,-.8753771983244192,-.18280875392092646,-1.4092197216928777,.8055229271047466,.9824653938272546,.13004206274714247,.5282913689475637,-.5221040804955478,29813605406952503e-21,.5048172265772952,-.554567923339877,.3185975423871418,-.542638832137605,-.40640085471048415,.7971987939392075,-.5326752093009217,.23199447891791605,-.4581024142425636,.35726325833138917,-1.567552850732863,.40060198636264144,.43677881613161335,-.11007863916952344,-.783506513687207,.22055709153076608,-1.1464080130059688,.3140681334185024,-1.5533665054260541,-.41654844357889825,-1.3738794723448122],[-.4023505825358403,.5206812187400365,.11860659741518643,-1.3653944923333563,-.31089975347223103,-1.1033248898381702,.1601621217989003,1.1917833514476257,.13316054327947968,-1.2038191536550982,1.6357015852530916,-.031098990914355938,-.2065032510232057,-.02189363352139423,-.030625294248065527,-.7747050395987515,.45452959355037176,.5059995119117945,-.6121637924606673,.225001222451715,.6245469827950642,-.3518146532657216,.463491782777656,.9257898119749678,.6585932793726401,-.40334290907406245,.10960138078734266,.05989519589765268,.11459874408114955,-.21384580594509914,1.405746638046319,1.6365985686488038],[-.46043852210060005,-1.6591700291465354,.5114537832464207,.3909047948042043,.7964167745277575,-1.2324050822345758,-.2592233367035742,-.8900815482431971,.44889348174251237,-.3015576013688775,.45415720332038984,.9452404804516756,.0837802616329895,-.05562965106371467,-.11269157847247904,.02188829136663366,.5155501930675394,-.2602992218984401,.3799251907814985,.7642189452098345,2.181834474841547,-.38158446693021797,-.16142849176193705,-.7944209438854322,.37218066180278636,-.29017096940405535,.5777575755565357,-.1251977530868934,-.020469364730514607,-.03970263254569321,.9218573148043767,-.34515043036713083],[.008334778222065652,-.16135655686605008,-.03720611383582188,.700759080015925,-.08007006684067398,.2751773996246209,.27089836383134036,.6589637606289583,-1.589072448697647,.11635671873582326,-.15888198777736628,-.37564519144809355,-.891162177717646,.4278123672643395,-.5154273343644307,-.3024153180766172,.7375167190087866,.01973072991155817,-.45864139181569014,.544489363188598,.45949635982799325,-.39451267796516,-.40403360157389284,.05964079755241269,.3884981879745352,3.2332258321079563,.6788020452819791,.5816090785594079,.0046590722310927936,-.09893616390515486,.34230539453382564,.0719951314823511],[-.20686471883446614,-1.501716721871647,-.8470236731651356,-.10666125850022166,-.7820272080135274,.11339965357958354,.307852792857735,.18016856520211585,-.792592682852199,-.5233651965822768,-.015610162132746366,.04248641706397475,.3819162798180835,.21891625184402355,-.10243448220315786,.2129535823627675,1.3795257876309828,.2763588996180046,-1.3264693049720677,-1.5375444366785638,-.3710287597967633,-.1904354634583605,.6762095349327842,-.33846902810770835,.42274239183804313,-.08629494023024659,.15902969098330597,.6781225472580014,.32353359146849453,.5532043753541298,-.15548291996426183,.16627018689455156],[-.2377206872747093,.4176913127178343,-.14260793675898298,-.7396983517184845,.15010844281131702,.6615771879935073,-.2937802122790108,-.5972190621064183,.4170329605261267,-.44004664962512713,-.742193672589706,-.604281174931887,-.17793437340439638,-.6350625835620938,1.1850273105703657,-.263739130082167,.19199931176809948,.2521244143544489,-.12071900211366549,-.048866050982229736,.38546107717425954,.043249608089684,-.5672165913364637,-.08693573402487693,-.1955857936889131,.26052982291230997,-.6410726563965984,-.3083224653085093,.36483666691620126,.02631060448174358,.7997379017379799,2.9092221933342777],[.9951370776654872,.8154218350261215,.17056258421099002,-1.342188680900076,-.023749863372946812,-.714682330720584,-.5381922917057769,.3646796643078952,-.31569225766415604,-.2854908620443786,-.6380776452108914,.15261762136456442,-.36106713194017687,.11070653760265625,-.7709149211402356,-.8035984163293315,-.8833479993695328,.40317955179340864,-.5810086595445951,-.3262749034636834,-.07276001360359774,1.4349040163945754,2.362187211390777,.12052519628077428,.7421790214220285,.20825219904321887,-.21044080176820962,-.47822473528522863,-.9355727912681832,-.4640549446275786,.027505462666786523,-.06729598784380497],[.20951394036219503,-.3451021360068974,-.20630297876631165,-.9404662120027658,-.16631779365974317,-.004174891523383244,-.08089725842973026,-.13846172895761882,-.8637225994192234,.2589425548666597,-.06421626475904565,-.07588727514651251,1.1198257103258036,.030018603127748154,.11501484452558315,.15942073320154465,-1.4549646933901061,-.3513435933945379,-.6577705232550843,1.9390684244485872,.3818740870937511,-.5856038300984003,-.8065804145888796,.25833932960427375,1.883662946345443,.33488013914144293,-.1388159101187443,-.013447567989443646,.17212060215710026,-.24803339574404262,-.2804730937119775,-.5845671148579106],[.025291031223786134,.1733776454875238,.4793338729793159,.18043660235933123,-.8689258363559313,.7581152602270619,-.21532973890566184,.38763430582923897,-.1117308205869702,-.842653382130579,.23626274638052547,.4003011204040176,.237525466540767,.342508474838783,-.449393447016454,-.7953943869365713,-.22879927080004386,-.24099293930508672,2.4526822571865163,.013286271679163165,-.6909607374467401,-.137483558496816,-.5625634246918403,.032734801377791126,-.33971903758271194,-.02106282562211835,-.7795325450399306,-.7873249900709404,-2.409724012770216,1.198983686322287,-.9058486440555045,-.08131280618173085],[.2882708879956367,1.0623527830519341,-.004272812459182197,-.23483248099371515,.38454748552328477,.23650187947299525,.16341007775874705,.11567032594665377,.6451705660978595,-1.2153049215572624,-.15622665504006875,-.5771317465783481,-.3680014912670586,-.6711544913974941,.6661976365846347,-.22485353299969724,-.36173221887321255,.8693048076882086,.21658041014039106,-.17314525636535255,-.27933823466021246,.5814651593538255,2.6326682032909026,-.04071917338565326,-.24505661539682658,1.3151929534656184,-.6213695959379655,-.2578472932465417,-1.1877214661408162,.8561689965285585,-.5147335536672539,-1.2533673221603487],[-.49513629145816535,-.6396789085572904,-.1679099444703261,1.7963332931312364,-.18259577808459823,.3446547283361494,.15713283069099407,-.318446231702352,.40849542332996497,-1.1248840431986395,1.480545059339478,-.07715071190196356,-.8174669721537241,.31574946569716617,-.801789846116228,.5059831139615799,.5602580492931497,.215298277913195,1.8505964260204086,.3592048106574112,.0027543851519867472,.44140727673038566,-.7201573284269529,-.1874074628724553,-.7987709644110252,-.8745760564276451,.17144163658759135,-.04345689258770777,.5617369103049763,.4579278252428242,.785223973306383,-.015263142839368122],[.2983277132748498,-.4003111639895477,.09124949048128601,.5809020889122585,-.12861065659002877,1.1695307776199566,-.11463078894821244,.5610215531164746,.05733149265192621,1.5667516078354682,1.2231808050979072,-1.9021987572803842,.2801727793491714,-1.2778874719635527,-.5041171326675085,.3662145936189644,-.0309682326211107,-.7947472552280112,.4483652828667187,-.15012165708355976,-.7957215526023698,.31429068541688265,.22744273708384216,.6510529082581674,-.02663038837159119,-.022752853146270378,-.24172632307075057,.6803644791581427,-.9947044990197623,-.359010533113767,.5374933051558289,.08915769529805734],[-.3117171384922896,.8666015605176727,2.9177386385495305,.5195810272231859,1.2229925666092232,-.6708620677115124,-.44483535916419886,-.038282842747471325,.23957759345989843,-.606388909661959,.5242673496666654,-.2146766755592235,-.5776616505566028,-.0071477392225258035,.928390214303172,.2241517316228106,-.2589495660549668,-.05433415273658675,-2.8032669678148867,-.9982852993547775,-.5914896474995032,-.03352322012076166,-.07407197577909264,.311662144676237,.11978576528592479,.4124273781433449,1.3113484664228883,.8500767490771892,-.3149430745988531,.2333190745342187,-.34328068568443854,-.6426015653711853],[-.2981940782939203,.8031427737089173,1.2464607872994924,.211583184660731,-.8817980661149337,.1320100443266777,-.14867058503642097,.4547626110123085,-.051072624011501616,.2770944820369695,.17558906230454818,-.2168397490687257,.4610878944533702,-.11315281161140583,.7372325706934401,.02595053097258445,-.7541131401188874,-.47257225528848845,-1.5449726662625163,-.21688469308097097,.35144658748848223,.07702631863075801,1.4314124575235438,.018556499185159687,-1.612931437986981,-.10127932765248714,1.2391054358530973,-.39547028165223125,.5859539714315648,-1.0817597222896753,.3212892620061473,.8353315933535072],[-.3041514562385913,-1.9176638329892615,-1.249517606070374,1.8553923624550854,.032694192879953766,1.4770910549365126,.11344931077085735,-.1814274008470185,.44379276212878127,.10009241181799605,-.03994875245693996,-.03341165060461398,-.40891799865347417,.3854142127684575,-.3822924300367871,.30676071419550033,.7368775916576626,-.14103735105756524,1.4087244462352724,.1668119686121619,.6631782902938306,-.2723757395046444,-.19606075600155673,.02373832023897383,.23281148870788285,-.39132489757324823,-.47485588639509346,-.5732534665282749,.9014822150686442,-.04513448870206947,.4727388239691307,-.3529341884390533],[.3515715715159489,-.2908149336265327,-.09031297693729304,1.121956440058799,-.658853697999857,.5405511658613247,.045430426370590735,.04458337459037536,-.13827536531978127,-.03008040397135329,-.026921968557456637,.42975308555444297,-.6599566767715352,.2591927925562623,-.10578613287391832,.39149323925531054,.028900496507637218,.12503737908628776,-3.3828451323514726,.22540291687716452,-.10748272971196457,-.059549760239043806,-1.0022015840382161,-.8626704790152875,.8127072132927079,-.031854118093236766,.22754302507385402,.057849074701113695,-.8632266439901267,.30613619301285316,-.12679536402060573,-.21696141995491555],[-.45330020812127425,-.3138857501650655,-.01564251781264235,-.6646042811500611,-.378672579287702,.3992040210052829,-1.7175848517265937,.5642641843319797,.20107946620063424,-.6555990425810226,.7146775711457735,.020804820136142176,-.5031660624146073,-.5097268787992444,-.7498360782356381,.4112529859212716,-2.732346229584246,1.0892350001038547,.8093761171063859,.47576213629403297,.12854595199635863,.5607195472235655,-.21864681338577358,-.08881327279324554,.44159282697507474,-.6994598239062549,.9248500740546699,-.29690799401248064,.11113959877851831,-.0014572820101214348,.1355051573000689,-.9031425662675178]],[[-.28463683091880404,1.1510757513248353,.7645267813534291,.8969010338724476,-.4019155935925572,.13468308279731345,-.5719644339145803,.25993195651347206,-1.0255978715391183,.08996138084632584,-.4340995975444876,2.506004390588983,-2.5616566453629854,2.3234467815811084,-.2612831567319379,-.8455470465800985,-1.3045380938193782,-.3991921680809111,-.42850439839653287,.4513164942999269,.6001051826213928,.9729741145448567,-.07175287157075448,.5385298665597449,.07622938240928372,-1.5239705407019037,.012244828962389234,-.027481664835084154,-.241082117861752,-1.6571907576920966,-1.1201584737011425,-.21917235913078856],[-.02515254906353939,-.9457347884338064,.2752967145461864,1.3778223109212868,-2.7494394870783223,1.1967729819724875,-.4014412506396409,1.1406363714168422,-.0730616674009683,-.855736823448736,3.2541718507782926,.1973111533955391,-.90942663796538,-2.029666833472492,2.3451921444587396,.9490989410729427,.4611246125867909,1.2519039762687802,1.5690595515485593,-1.0041871504363502,-.02858484571576965,-1.0100647915666272,.1534484514195054,-3.0960328983271364,-1.7951514887711484,1.317469517478796,1.6919153459919098,.16942377343070478,1.717740561761824,2.009669172094524,-2.225780849411187,.5546942951049191],[-1.1622720748401216,1.5798865354736409,.6491486607419276,-.9363509148700421,-.6787622281798367,-.49505739064670334,-.18030087087280106,-.9036938528967507,3.399210855810884,1.4586432201136739,-.6493845312118041,-1.4331273542809333,.5024237131381761,1.0381548624990606,-.3472364521855565,.14186270830112435,.3554681418898953,1.0512694324506737,.0849827549374124,.5008820848609169,-.8644948630021085,1.2314357721200178,.7269490956077387,.2629929535582943,.966875981670061,-1.1022336708445073,-3.663190469188769,.1282067972770628,-.53716154548846,-1.3538516640337546,-1.4574363461210043,-.035034585277933135],[1.107387992297403,-.26429370083247355,-.8007837296583302,-1.5150914311729853,1.329555553411869,-2.104814749917672,-1.6059310700666398,1.4137515189171406,-.06998676738320428,-1.2528952113794283,-.07460774139637225,-1.3515988960678653,1.280064316721476,-1.3997750829999838,-.8407361450870718,2.083469301566193,-1.582563241570294,-.7509053758392888,1.5391361446862004,1.9797739650719592,-.5918456287923641,-.7456422538170981,-1.7608488536432885,.6854928742803466,.042008733257966405,1.155867521510136,.7153623359162976,-1.5561690935817918,-.5501030018926785,1.5043232318591522,1.2470784965454436,-2.853262479019809],[.8991185634785424,.29471487719357353,-1.0343100157850724,1.3029287498893625,-.28947279830146694,-.23035655186305862,.15133490435960512,-.7484541435741874,-.12698736751607118,-.6978577941796744,-.6318702331819261,.03711164868404817,.24040402875800307,.3368802773185537,.3198125357347528,-.6170401980978546,.5943438959476454,.17101642663564096,.46786937041902826,.9690344230994635,-.45711881976906316,-.220195722786101,.7852723977403839,-.7250076306302231,.7612250793278699,-.2996278683326017,.04145609310360147,2.8257251178903995,.9397863041721025,-.6901257219059638,3.30006599200817,.0395920570849431],[1.3136757087614344,.4938318431207385,.18002724282991206,-1.038918290847736,1.014156833838388,1.558486018040551,-.6099525015944867,-.4689063621188942,-.19585925864960776,.6271320954734634,.11581775813526694,-.4847098108317388,.5845648214632662,-1.1210488522809858,-1.0503491488609762,1.1785708548876,-.3535960176424279,-.2037001834603049,-3.7495003794225203,-.9322272953487182,.08832258667398209,-.983256258353025,-1.9225126742213525,1.124300921700929,1.2307089056553675,1.5477100302439448,1.2556321330052018,-1.1752422864603171,1.024853152720382,1.2929213492834177,1.0343546442697527,1.6122447769679529],[-.7035393032175737,.7837002147035375,-1.3092698251153028,-1.0511150652939423,.21591469262187524,-.2917747110969042,3.556306358796504,.9688890530340863,-.6537998809148523,-.03946888087083512,.16408373315912675,-.04810782968077271,.848169553082395,-.006058880851595703,-1.4529611409617083,-.7083062178279186,.1983720040148997,-.19080073514357138,-.14019878421459123,.18994455017484355,-.622520458833553,1.5125154404568328,.8286545459202203,.10784391860814381,.125308072960812,-.7918457742198686,.05555578005194227,-.5176116436907607,-.5879202930749745,-.3270985190549473,-.43522382478444865,.3404420101556032],[-1.3383412073048078,-1.0414072014735527,.7681565775672772,-.3613584409601663,1.093172214275878,.6495220876468151,-.16719799459418233,-.7662270943367534,.26257985508457954,.10815657132427997,-1.3440993936286467,.7775594536099216,.4703485042775094,-.0722598332903363,1.2144453060602365,-1.1991937055239053,-.33024782712051354,.2591445661875325,.5290827930186459,-.33822552894390895,-.7189323907654606,-1.7843681859605593,.959117880361818,.8217818347168357,-2.4270365031837278,.7854778618968828,-.1439951207736355,.49695864406499335,-1.735805165215665,.1750897277301216,.8088880608098901,.4544787114248801],[-.3888660528098238,-2.431733251084776,.6244771262512768,1.0758626984707598,.07183309285910738,-.92546772804651,-.3183329333915243,-.8055301028906098,-1.0115984535711193,-.09684657367175381,-.2655619650996505,-.23612139848666666,-.23690667305544824,.7065817763309861,-.03609502197657634,-.5622990529157349,1.6137839548158452,-1.0398385731861566,.031023554285928897,-.9079007713508945,3.1594714375955784,.6882570017042973,.5653080049022887,.012448382474684057,1.131667402102366,-.9865634622049451,.19644307435149552,-.45718610702561363,-.026370407816757504,-1.7004712609729322,-.8656315955460308,.07516530516649306]]],h1=[[-.5485319128554843,-.5325957377802261,-.4366147255011078,.5422520902229977,.3040894711137863,-.480712214580075,.9076372819892286,.8926720209581273,1.3649152718657878,-.6112452949314169,-1.8051521442132894,-.8075010701375478,-.7276971421826598,-1.3059432569500096,-.045320476483667584,-4.193981302527305,-.5883056002815077,-.366693688210535,-2.8363825623398173,-.22957554530619823,.7621049401202462,.9259781378928528,1.18907055060809,-1.625022812457315,-2.2970977218032087,2.2148151667600087,-.9854741003481668,-.005525334173257211,1.6877209538934632,-.331001069066203,.175633009265887,-2.1158796724730067],[-1.6010753018541175,2.8237664291974003,2.5885021563884982,-3.041848420128783,-1.4293473165066126,.9063362090992999,1.668969428693039,1.231634540622583,1.6081120281878638,.7059218257150672,-.3725647108179782,2.0579873019471737,-1.273938883430477,-.2180172376825059,-1.626355954873953,-2.0642938280842267,1.9102599789031454,1.0013160971553408,-2.700550513889272,-.6210448154219624,2.0201753323082667,2.3937144019533356,-2.047319651561207,-1.4054714220143387,2.7240340920283423,-1.4384624460262447,1.8606154916251394,2.0365755823301446,1.0411785448972106,-.18839477996868131,-1.0708645417775615,2.1008293338946475],[-.2743022839313675,-1.0862916657995156,-.6091860573418811,-.7699497280299473,.1713772245666813,.14776825520086054,-.42309919883195607,.45499476585265386,1.7785313636947622,.46044194888397866,-.08022431635009473,.6857175687487521,.4616059304702169,.3500195231177784,.49405190572594165,.4265205688320575,.6368028953973603,.7284685098090459,.7135619919597572,1.7850389045377755,1.4803797612677003,.10502644703418591,-1.15298557362256,-.14207730753983724,-.4888331448425329,-.347687929700649,-1.1487311019004698,-.09625733355717776,.020066660274540734,-.751843338179033,.9668687997426584,.15667426782126043],[-1.0981641426222892,1.607174190016854,-1.6040598860677022,.2167472829622982,-1.193583230966997,1.1874491017938362,-.20044301030838335,1.6355843809641013,-.5060191028363744]],d1=.0016358138751944612,c1=5e5,p1={hiddenSizes:a1,hiddenActivations:o1,outputActivation:r1,weights:l1,biases:h1,learningRate:d1,trainingGames:c1};class u0 extends j{constructor(){super(),this.hiddenLayerCount=2,this.hiddenNodeCounts=[16,16],this.hiddenActivations=["tanh","tanh"],this.outputActivation="softmax",this.trainingOpponent="minimax_rules",this.discountFactor=.9,this.epsilon=.3,this.epsilonDecay=.999,this.lrDecay=.99,this.moveStrategy="greedy",this.lastChosenMove=-1,this.nn=new O0(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this.waitingForNn=!1,this._lastNnMove=null,this._pendingNnMove=-1,this._selectedNode=null,this.showGradients=!1,this.trainingCount=100,this.isTraining=!1,this.trainingProgress=0,this.trainingPhase="",this.gameMode="human-vs-nn",this.stats={wins:0,losses:0,draws:0}}render(){return k`
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
      `)}return""}_onHiddenActivationChange(t,e){this.hiddenActivations=this.hiddenActivations.map((s,i)=>i===t?e:s),this._recreateNN()}_onOutputActivationChange(t){this.outputActivation=t,this._recreateNN()}_recreateNN(){this.nn=new O0(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this.stats={wins:0,losses:0,draws:0},this._newGame()}async _trainMultiPhase(){const t=[{name:"1/4",games:1e5,opponent:"minimax_rules",lr:.05,lrDecay:.99,epsilon:.3,epsilonDecay:.999},{name:"2/4",games:2e5,opponent:"minimax_rules",lr:.01,lrDecay:.99,epsilon:.3,epsilonDecay:.999},{name:"3/4",games:1e5,opponent:"self",lr:.005,lrDecay:.99,epsilon:.1,epsilonDecay:.999},{name:"4/4",games:1e5,opponent:"minimax_rules",lr:.002,lrDecay:.99,epsilon:.3,epsilonDecay:.999}],e={trainingOpponent:this.trainingOpponent,epsilon:this.epsilon,epsilonDecay:this.epsilonDecay,lrDecay:this.lrDecay,trainingCount:this.trainingCount},s=t.reduce((a,n)=>a+n.games,0);let i=0;this.isTraining=!0,this.trainingProgress=0;for(const a of t){this.trainingPhase=a.name,this.nn.learningRate=a.lr,this.trainingOpponent=a.opponent,this.epsilon=a.epsilon,this.epsilonDecay=a.epsilonDecay,this.lrDecay=a.lrDecay,this.trainingCount=a.games,this.requestUpdate();const n=Math.max(1,Math.floor(a.games/20));let r=0;for(;r<a.games;)await new Promise(h=>{setTimeout(()=>{const u=Math.min(n,a.games-r);this.nn.train(u,{opponent:a.opponent,discountFactor:this.discountFactor,epsilon:a.epsilon,epsilonDecay:a.epsilonDecay,lrDecay:a.lrDecay}),r+=u,i+=u,this.trainingProgress=i/s*100,this.requestUpdate(),h()},0)});this.nn.forward(this.board),this._updateViz()}this.isTraining=!1,this.trainingPhase="",this.trainingProgress=0,this.trainingOpponent=e.trainingOpponent,this.epsilon=e.epsilon,this.epsilonDecay=e.epsilonDecay,this.lrDecay=e.lrDecay,this.trainingCount=e.trainingCount,this.nn.forward(this.board),this._updateViz(),this.requestUpdate()}async _train(){this.isTraining=!0,this.trainingProgress=0;const t=Math.max(1,Math.floor(this.trainingCount/20));let e=0;const s={opponent:this.trainingOpponent,discountFactor:this.discountFactor,epsilon:this.epsilon,epsilonDecay:this.epsilonDecay,lrDecay:this.lrDecay},i=()=>new Promise(a=>{setTimeout(()=>{const n=Math.min(t,this.trainingCount-e);this.nn.train(n,s),e+=n,this.trainingProgress=e/this.trainingCount*100,this.requestUpdate(),a()},0)});for(;e<this.trainingCount;)await i();this.isTraining=!1,this.trainingProgress=0,this.nn.forward(this.board),this._updateViz(),this.requestUpdate()}}G(u0,"properties",{board:{type:Array},currentPlayer:{type:Number},gameOver:{type:Boolean},winner:{type:Number},winLine:{type:Array},status:{type:String},nnData:{type:Object},showGradients:{type:Boolean},trainingCount:{type:Number},isTraining:{type:Boolean},gameMode:{type:String},stats:{type:Object},hiddenLayerCount:{type:Number},hiddenNodeCounts:{type:Array},hiddenActivations:{type:Array},outputActivation:{type:String},trainingOpponent:{type:String},discountFactor:{type:Number},epsilon:{type:Number},epsilonDecay:{type:Number},lrDecay:{type:Number},moveStrategy:{type:String},lastChosenMove:{type:Number},waitingForNn:{type:Boolean},_selectedNode:{state:!0},trainingPhase:{type:String}}),G(u0,"styles",f0`
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
