(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,_t=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),Pt=new WeakMap;let Kt=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(_t&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Pt.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Pt.set(r,t))}return t}toString(){return this.cssText}};const Qt=e=>new Kt(typeof e=="string"?e:e+"",void 0,$t),V=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new Kt(r,e,$t)},Xt=(e,t)=>{if(_t)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),s=ot.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)}},Et=_t?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Qt(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yt,defineProperty:te,getOwnPropertyDescriptor:ee,getOwnPropertyNames:re,getOwnPropertySymbols:se,getPrototypeOf:ne}=Object,H=globalThis,Ct=H.trustedTypes,ie=Ct?Ct.emptyScript:"",mt=H.reactiveElementPolyfillSupport,J=(e,t)=>e,at={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},yt=(e,t)=>!Yt(e,t),Tt={attribute:!0,type:String,converter:at,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);let I=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Tt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,r);s!==void 0&&te(this.prototype,t,s)}}static getPropertyDescriptor(t,r,n){const{get:s,set:i}=ee(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);i==null||i.call(this,o),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const t=ne(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const r=this.properties,n=[...re(r),...se(r)];for(const s of n)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)r.unshift(Et(s))}else t!==void 0&&r.push(Et(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){var i;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:at).toAttribute(r,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,r){var i,o;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:at;this._$Em=s;const p=a.fromAttribute(r,l.type);this[s]=p??((o=this._$Ej)==null?void 0:o.get(s))??p,this._$Em=null}}requestUpdate(t,r,n,s=!1,i){var o;if(t!==void 0){const l=this.constructor;if(s===!1&&(i=this[t]),n??(n=l.getPropertyOptions(t)),!((n.hasChanged??yt)(i,r)||n.useDefault&&n.reflect&&i===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(l._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??r??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:l}=o,a=this[i];l!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[J("elementProperties")]=new Map,I[J("finalized")]=new Map,mt==null||mt({ReactiveElement:I}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,Lt=e=>e,lt=Z.trustedTypes,Mt=lt?lt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+z,oe=`<${Gt}>`,U=document,Q=()=>U.createComment(""),X=e=>e===null||typeof e!="object"&&typeof e!="function",xt=Array.isArray,ae=e=>xt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Ht=/>/g,N=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Ot=/"/g,qt=/^(?:script|style|textarea|title)$/i,le=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),c=le(1),j=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Nt=new WeakMap,D=U.createTreeWalker(U,129);function Wt(e,t){if(!xt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}const de=(e,t)=>{const r=e.length-1,n=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=q;for(let l=0;l<r;l++){const a=e[l];let p,u,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===q?u[1]==="!--"?o=zt:u[1]!==void 0?o=Ht:u[2]!==void 0?(qt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=N):u[3]!==void 0&&(o=N):o===N?u[0]===">"?(o=s??q,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?N:u[3]==='"'?Ot:Rt):o===Ot||o===Rt?o=N:o===zt||o===Ht?o=q:(o=N,s=void 0);const b=o===N&&e[l+1].startsWith("/>")?" ":"";i+=o===q?a+oe:h>=0?(n.push(p),a.slice(0,h)+Vt+a.slice(h)+z+b):a+z+(h===-2?l:b)}return[Wt(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Y{constructor({strings:t,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const l=t.length-1,a=this.parts,[p,u]=de(t,r);if(this.el=Y.createElement(p,n),D.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=D.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Vt)){const f=u[o++],b=s.getAttribute(h).split(z),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:g[2],strings:b,ctor:g[1]==="."?pe:g[1]==="?"?he:g[1]==="@"?ue:ct}),s.removeAttribute(h)}else h.startsWith(z)&&(a.push({type:6,index:i}),s.removeAttribute(h));if(qt.test(s.tagName)){const h=s.textContent.split(z),f=h.length-1;if(f>0){s.textContent=lt?lt.emptyScript:"";for(let b=0;b<f;b++)s.append(h[b],Q()),D.nextNode(),a.push({type:2,index:++i});s.append(h[f],Q())}}}else if(s.nodeType===8)if(s.data===Gt)a.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(z,h+1))!==-1;)a.push({type:7,index:i}),h+=z.length-1}i++}}static createElement(t,r){const n=U.createElement("template");return n.innerHTML=t,n}}function K(e,t,r=e,n){var o,l;if(t===j)return t;let s=n!==void 0?(o=r._$Co)==null?void 0:o[n]:r._$Cl;const i=X(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(t=K(e,s._$AS(e,t.values),s,n)),t}class ce{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,s=((t==null?void 0:t.creationScope)??U).importNode(r,!0);D.currentNode=s;let i=D.nextNode(),o=0,l=0,a=n[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new et(i,i.nextSibling,this,t):a.type===1?p=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(p=new me(i,this,t)),this._$AV.push(p),a=n[++l]}o!==(a==null?void 0:a.index)&&(i=D.nextNode(),o++)}return D.currentNode=U,s}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class et{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=K(this,t,r),X(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ae(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&X(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Y.createElement(Wt(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const o=new ce(s,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=Nt.get(t.strings);return r===void 0&&Nt.set(t.strings,r=new Y(t)),r}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of t)s===r.length?r.push(n=new et(this.O(Q()),this.O(Q()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t!==this._$AB;){const s=Lt(t).nextSibling;Lt(t).remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,s,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(t,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)t=K(this,t,r,0),o=!X(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const l=t;let a,p;for(t=i[0],a=0;a<i.length-1;a++)p=K(this,l[n+a],r,a),p===j&&(p=this._$AH[a]),o||(o=!X(p)||p!==this._$AH[a]),p===d?t=d:t!==d&&(t+=(p??"")+i[a+1]),this._$AH[a]=p}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pe extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class he extends ct{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ue extends ct{constructor(t,r,n,s,i){super(t,r,n,s,i),this.type=5}_$AI(t,r=this){if((t=K(this,t,r,0)??d)===j)return;const n=this._$AH,s=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==d&&(n===d||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class me{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ft=Z.litHtmlPolyfillSupport;ft==null||ft(Y,et),(Z.litHtmlVersions??(Z.litHtmlVersions=[])).push("3.3.2");const ge=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let s=n._$litPart$;if(s===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new et(t.insertBefore(Q(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;class R extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ge(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return j}}var jt;R._$litElement$=!0,R.finalized=!0,(jt=B.litElementHydrateSupport)==null||jt.call(B,{LitElement:R});const vt=B.litElementPolyfillSupport;vt==null||vt({LitElement:R});(B.litElementVersions??(B.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:yt},ve=(e=fe,t,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(n==="setter"){const{name:o}=r;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,e,!0,l)}}throw Error("Unsupported decorator location: "+n)};function O(e){return(t,r)=>typeof r=="object"?ve(e,t,r):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e){return O({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(e,t){return(r,n,s)=>{const i=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(e))??null};return be(r,n,{get(){return i(this)}})}}const ht=V`
  :host {
    display: block;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    font-family: var(--font-sans);
    color: var(--text-primary);
  }

  h2 {
    margin: 0 0 0.9rem;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: var(--text-primary);
  }

  p {
    margin: 0.25rem 0;
  }

  .placeholder {
    color: var(--text-muted);
    font-style: italic;
  }

  .label {
    color: var(--text-secondary);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 0.85rem;
    font-weight: 600;
  }

  /* Kort pedagogisk beskrivning som ligger under varje rubrik. */
  .explain {
    color: var(--text-secondary);
    font-size: 0.88rem;
    line-height: 1.55;
    margin: 0 0 0.9rem;
    max-width: 62ch;
  }
  .explain b,
  .explain strong {
    color: var(--text-primary);
    font-weight: 600;
  }
  .explain code {
    background: var(--bg-muted);
    padding: 1px 5px;
    border-radius: 3px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--text-primary);
  }
`,kt=V`
  button {
    padding: 0.4rem 0.9rem;
    font: inherit;
    cursor: pointer;
    background: var(--bg-card);
    color: var(--text-primary);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    transition: background 0.12s ease, border-color 0.12s ease,
      color 0.12s ease;
  }
  button:hover:not([disabled]) {
    background: var(--accent-soft);
    border-color: var(--accent);
    color: var(--accent-strong);
  }
  button[disabled] {
    cursor: not-allowed;
    opacity: 0.45;
  }

  input[type='text'],
  input[type='number'],
  select,
  textarea {
    font: inherit;
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    background: var(--bg-card);
    color: var(--text-primary);
    transition: border-color 0.12s ease, box-shadow 0.12s ease;
  }
  input[type='text']:focus,
  input[type='number']:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  input[type='range'] {
    vertical-align: middle;
    accent-color: var(--accent);
  }

  label {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
`;var $e=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,P=(e,t,r,n)=>{for(var s=n>1?void 0:n?ye(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&$e(t,r,s),s};const xe=`Det var en gång en liten modell som inte visste något alls.
Den tittade på bokstäver, en i taget, och försökte gissa vad som skulle komma härnäst.
Först gissade den helt slumpmässigt. Sen började mönster dyka upp: efter ett q kommer oftast ett u, efter en punkt kommer ofta ett mellanslag, och så vidare.
Modellen var liten och dum, men den lärde sig — långsamt, ett steg i taget.`,ke=[{label:"Nils Holgersson (Lagerlöf)",path:"./corpus/nils-holgersson.txt"}];let k=class extends R{constructor(){super(...arguments),this.analysis=null,this._text=xe,this._loading=!1,this._loadStatus="",this._tokenizerKind="char",this._bpeVocabSize=256,this._backend="cpu",this._modelPreset="small",this.bpeProgress=null}_onInput(e){this._text=e.target.value,this._loadStatus=""}_onAnalyze(){const e={text:this._text,tokenizer:this._tokenizerKind,bpeVocabSize:this._bpeVocabSize,backend:this._backend,modelPreset:this._modelPreset};this.dispatchEvent(new CustomEvent("corpus-submit",{detail:e,bubbles:!0,composed:!0}))}_onTokenizerChange(e){this._tokenizerKind=e.target.value}_onBpeVocabInput(e){const t=parseInt(e.target.value,10);!Number.isNaN(t)&&t>=10&&(this._bpeVocabSize=t)}_onBackendChange(e){this._backend=e.target.value}_onPresetChange(e){this._modelPreset=e.target.value}async _onFileInput(e){var n;const t=e.target,r=(n=t.files)==null?void 0:n[0];if(r){this._loading=!0,this._loadStatus=`Läser ${r.name}…`;try{const s=await r.text();this._text=s,this._loadStatus=`Laddade ${r.name} (${s.length.toLocaleString("sv-SE")} tecken).`}catch(s){this._loadStatus=`Kunde inte läsa filen: ${s.message}`}finally{this._loading=!1,t.value=""}}}async _onLoadPreset(e,t){this._loading=!0,this._loadStatus=`Hämtar ${t}…`;try{const r=await fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}`);const n=await r.text();this._text=n,this._loadStatus=`Laddade ${t} (${n.length.toLocaleString("sv-SE")} tecken).`}catch(r){this._loadStatus=`Kunde inte hämta ${t}: ${r.message}`}finally{this._loading=!1}}render(){return c`
      <h2>Corpus</h2>
      <p class="explain">
        Välj träningstext och tokenizer. <b>Char</b> ger en token per
        tecken — enklast och direkt läsbart. <b>BPE</b> lär sig slå ihop
        vanliga teckenpar till större tokens, precis som riktiga LLM:er.
        Histogrammet visar hur ofta varje token förekommer i texten.
      </p>
      <textarea .value=${this._text} @input=${this._onInput}></textarea>
      <div class="controls">
        <label>
          Tokenizer:
          <select
            .value=${this._tokenizerKind}
            @change=${this._onTokenizerChange}
            ?disabled=${this._loading}
          >
            <option value="char">Char</option>
            <option value="bpe">BPE</option>
          </select>
        </label>
        ${this._tokenizerKind==="bpe"?c`
              <label>
                Vocab-mål:
                <input
                  type="number"
                  min="50"
                  max="2000"
                  step="10"
                  .value=${String(this._bpeVocabSize)}
                  @input=${this._onBpeVocabInput}
                  ?disabled=${this._loading}
                />
              </label>
            `:d}
        <label>
          Backend:
          <select
            .value=${this._backend}
            @change=${this._onBackendChange}
            ?disabled=${this._loading}
          >
            <option value="cpu">CPU</option>
            <option value="gpu">GPU (WebGPU)</option>
          </select>
        </label>
        <label>
          Storlek:
          <select
            .value=${this._modelPreset}
            @change=${this._onPresetChange}
            ?disabled=${this._loading}
          >
            <option value="small">Litet (~113k params)</option>
            <option value="medium">Medium (~820k params)</option>
            <option value="large">Stort (~4.8M params)</option>
          </select>
        </label>
      </div>
      <div class="controls">
        <button @click=${this._onAnalyze} ?disabled=${this._loading}>
          Analysera korpus
        </button>
        <input
          type="file"
          accept=".txt,text/plain"
          @change=${this._onFileInput}
          ?disabled=${this._loading}
          style="display: none"
        />
        <button
          type="button"
          @click=${()=>{var e;return(e=this._fileInput)==null?void 0:e.click()}}
          ?disabled=${this._loading}
        >
          Ladda fil…
        </button>
        ${ke.map(e=>c`
            <button
              type="button"
              @click=${()=>this._onLoadPreset(e.path,e.label)}
              ?disabled=${this._loading}
            >
              Ladda ${e.label}
            </button>
          `)}
        ${this._loadStatus?c`<span class="load-status">${this._loadStatus}</span>`:d}
      </div>
      ${this.bpeProgress?this._renderBpeProgress(this.bpeProgress):d}
      ${this.analysis?this._renderAnalysis(this.analysis):d}
    `}_renderBpeProgress(e){const t=e.targetMerges>0?e.mergesDone/e.targetMerges*100:100;return c`
      <div class="label">BPE-träning</div>
      <div class="bpe-progress">
        <div class="bpe-bar" style=${`width: ${t}%`}></div>
      </div>
      <div class="bpe-status">
        Merge ${e.mergesDone} / ${e.targetMerges}:
        <code>${st(e.latestA)}</code> +
        <code>${st(e.latestB)}</code> →
        <code>${st(e.latestA+e.latestB)}</code>
        (${e.latestCount.toLocaleString("sv-SE")} förekomster)
      </div>
    `}_renderAnalysis(e){const t=e.frequencies[0]??1,r=e.tokenizerKind==="bpe"?60:e.vocab.length,n=e.vocab.slice(0,r),s=e.vocab.length-n.length;return c`
      <div class="summary">
        <dl>
          <dt>Tokenizer</dt>
          <dd>${e.tokenizerKind==="bpe"?"BPE":"Char"}</dd>
          <dt>Totalt antal tecken</dt>
          <dd>${e.totalChars.toLocaleString("sv-SE")}</dd>
          <dt>Antal tokens efter tokenisering</dt>
          <dd>${e.totalTokens.toLocaleString("sv-SE")}</dd>
          <dt>Vokabulärstorlek</dt>
          <dd>${e.vocab.length}</dd>
          ${e.totalTokens>0?c`<dt>Genomsnittlig tokenlängd</dt>
                <dd>
                  ${(e.totalChars/e.totalTokens).toFixed(2)} tecken
                </dd>`:d}
        </dl>
      </div>
      <div class="histogram" role="table" aria-label="Tokenfrekvenser">
        ${n.map((i,o)=>{const l=e.frequencies[o]??0,a=l/t*100;return c`
            <div class="char">${st(i)}</div>
            <div class="bar" style=${`width: ${a}%`}></div>
            <div class="count">${l.toLocaleString("sv-SE")}</div>
          `})}
      </div>
      ${s>0?c`<div class="histogram-more">
            …och ${s} tokens till i svansen.
          </div>`:d}
    `}};k.styles=[ht,kt,V`
      textarea {
        width: 100%;
        min-height: 8rem;
        font-family: var(--font-mono);
        font-size: 0.82rem;
        line-height: 1.5;
        padding: 0.6rem 0.75rem;
        resize: vertical;
      }
      .controls {
        margin-top: 0.6rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-items: center;
      }
      .load-status {
        font-size: 0.8rem;
        color: var(--text-secondary);
        font-variant-numeric: tabular-nums;
      }
      .summary {
        margin-top: 1rem;
        font-size: 0.9rem;
      }
      .summary dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.2rem 1rem;
        margin: 0.25rem 0 0;
      }
      .summary dt {
        color: var(--text-secondary);
      }
      .summary dd {
        margin: 0;
        font-variant-numeric: tabular-nums;
      }
      .histogram {
        margin-top: 0.75rem;
        display: grid;
        /* Första kolumnen växer till minst 2.5rem men max ~9rem så
           flerteckens-BPE-tokens får plats utan att sprängs. */
        grid-template-columns: minmax(2.5rem, max-content) 1fr 4.5rem;
        column-gap: 0.6rem;
        row-gap: 0.12rem;
        font-size: 0.78rem;
        font-family: var(--font-mono);
        align-items: center;
      }
      .char {
        text-align: right;
        white-space: pre;
        color: var(--text-primary);
        max-width: 9rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .histogram-more {
        margin-top: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.78rem;
        font-style: italic;
      }
      .bpe-progress {
        margin-top: 0.35rem;
        height: 6px;
        background: var(--bg-muted);
        border-radius: 3px;
        overflow: hidden;
      }
      .bpe-bar {
        height: 100%;
        background: var(--accent);
        transition: width 0.2s ease;
      }
      .bpe-status {
        margin-top: 0.4rem;
        font-size: 0.8rem;
        color: var(--text-secondary);
      }
      .bpe-status code {
        background: var(--bg-muted);
        border-radius: 3px;
        padding: 1px 4px;
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--text-primary);
      }
      .bar {
        height: 0.7rem;
        background: var(--accent);
        border-radius: 2px;
        opacity: 0.75;
      }
      .count {
        color: var(--text-secondary);
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
    `];P([O({attribute:!1})],k.prototype,"analysis",2);P([m()],k.prototype,"_text",2);P([m()],k.prototype,"_loading",2);P([m()],k.prototype,"_loadStatus",2);P([m()],k.prototype,"_tokenizerKind",2);P([m()],k.prototype,"_bpeVocabSize",2);P([m()],k.prototype,"_backend",2);P([m()],k.prototype,"_modelPreset",2);P([O({attribute:!1})],k.prototype,"bpeProgress",2);P([_e('input[type="file"]')],k.prototype,"_fileInput",2);k=P([pt("corpus-panel")],k);function st(e){let t="";for(const r of e)r===" "?t+="␠":r===`
`?t+="␤":r==="	"?t+="␉":t+=r;return t}var Se=Object.defineProperty,we=Object.getOwnPropertyDescriptor,y=(e,t,r,n)=>{for(var s=n>1?void 0:n?we(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&Se(t,r,s),s};const Dt=500,Ae=420,Pe=140;let v=class extends R{constructor(){super(...arguments),this.model=null,this.trainingState="idle",this._batchSize=16,this._gradCheckRunning=!1,this._gradCheckResult=null,this._step=0,this._samplesPerSecond=0,this._gradNorm=0,this._lossHistory=[],this._latestLoss=null,this._sampleText="",this._samplePrefix="",this._sampleStep=0}pushProgress(e,t,r,n){this._step=e,this._latestLoss=t,this._samplesPerSecond=r,this._gradNorm=n;const s=this._lossHistory.slice();s.push({step:e,loss:t}),s.length>Dt&&s.splice(0,s.length-Dt),this._lossHistory=s}pushSample(e,t,r){this._sampleStep=e,this._samplePrefix=t,this._sampleText=r}resetHistory(){this._lossHistory=[],this._latestLoss=null,this._step=0,this._sampleText="",this._samplePrefix="",this._sampleStep=0,this._samplesPerSecond=0,this._gradNorm=0,this._gradCheckResult=null}pushGradCheckResult(e){this._gradCheckResult=e,this._gradCheckRunning=!1}updated(){this._drawChart()}_drawChart(){const e=this.renderRoot.querySelector("canvas");if(!e)return;const t=e.getContext("2d");if(!t)return;const r=getComputedStyle(this),n=W(r,"--bg-subtle","#faf8f3"),s=W(r,"--border","#e3ddd2"),i=W(r,"--text-secondary","#656058"),o=W(r,"--text-muted","#9a958d"),l=W(r,"--accent","#216b52"),a=e.width,p=e.height;t.clearRect(0,0,a,p),t.fillStyle=n,t.fillRect(0,0,a,p);const u=this._lossHistory;if(u.length<2){t.fillStyle=o,t.font="12px var(--font-sans), system-ui, sans-serif",t.fillText("Väntar på träningsdata…",10,20);return}const h=this.model?Math.log(this.model.vocabSize):null;let f=0;for(const _ of u)_.loss>f&&(f=_.loss);h!==null&&(f=Math.max(f,h));const b=Math.max(f*1.1,.5),g=u[0].step,w=u[u.length-1].step,ut=Math.max(1,w-g),A=32,Jt=10,L=10,Zt=20,rt=a-A-Jt,M=p-L-Zt;t.strokeStyle=s,t.lineWidth=1,t.beginPath();for(let _=0;_<=4;_++){const G=L+M*_/4;t.moveTo(A,G),t.lineTo(A+rt,G)}if(t.stroke(),t.fillStyle=i,t.font="10px system-ui, sans-serif",t.textAlign="right",t.textBaseline="middle",t.fillText("0",A-6,L+M),t.fillText(b.toFixed(2),A-6,L),t.textAlign="center",t.textBaseline="top",t.fillText(String(g),A,L+M+4),t.fillText(String(w),A+rt,L+M+4),h!==null){const _=L+M-h/b*M;t.save(),t.strokeStyle=o,t.setLineDash([3,3]),t.lineWidth=1,t.beginPath(),t.moveTo(A,_),t.lineTo(A+rt,_),t.stroke(),t.restore(),t.fillStyle=o,t.font="10px system-ui, sans-serif",t.textAlign="left",t.textBaseline="bottom",t.fillText(`ln(vocab) = ${h.toFixed(2)}`,A+4,_-2)}t.strokeStyle=l,t.lineWidth=1.5,t.lineJoin="round",t.lineCap="round",t.beginPath();for(let _=0;_<u.length;_++){const G=u[_],wt=A+(G.step-g)/ut*rt,At=L+M-Math.min(G.loss,b)/b*M;_===0?t.moveTo(wt,At):t.lineTo(wt,At)}t.stroke()}render(){return c`
      <h2>Träning</h2>
      ${this._renderExplain()}
      ${this.model?this._renderInfo(this.model):this._renderEmpty()}
      ${this.model?this._renderControls():d}
      ${this.model?this._renderStats():d}
      ${this.model?c`
            <div class="label">Loss per steg</div>
            <canvas
              width=${Ae}
              height=${Pe}
            ></canvas>
          `:d}
      ${this.model?this._renderSample():d}
      ${this._gradCheckResult?this._renderGradCheck(this._gradCheckResult):d}
    `}_renderGradCheck(e){const t=e.meanRelError<.05&&e.maxRelError<.5,r=!t&&e.meanRelError<.2;return c`
      <div class="label">Gradient-check</div>
      <div class="gc-summary">
        <span class="gc-status ${t?"ok":r?"warn":"bad"}">
          ${t?"✓ Backprop OK":r?"~ Marginellt":"✗ Avvikelse funnen"}
        </span>
        <span class="gc-detail">
          medelavvikelse ${(e.meanRelError*100).toFixed(2)}% ·
          max ${(e.maxRelError*100).toFixed(1)}% ·
          ${e.checked} kontrollerade (${e.skipped} skippade för små) ·
          loss ${e.loss.toFixed(3)} vid T=${e.seqLength}
        </span>
      </div>
      <p class="gc-note">
        Finita differenser beräknas i Float32-precision, så enstaka
        parametrar långt från loss kan få stort relativt fel på små
        gradienter. Medelavvikelsen är det intressanta måttet — om
        hela backward var trasig skulle den ligga på 50%+.
      </p>
      <div class="gc-table">
        <div class="gc-head">Värst avvikande</div>
        <div class="gc-head">Analytisk</div>
        <div class="gc-head">Numerisk</div>
        <div class="gc-head">Relfel</div>
        ${e.worst.map(s=>c`
            <div class="gc-name">${s.paramName}[${s.flatIndex}]</div>
            <div class="gc-num">${s.analytical.toExponential(3)}</div>
            <div class="gc-num">${s.numerical.toExponential(3)}</div>
            <div class="gc-num">${s.relError.toExponential(2)}</div>
          `)}
      </div>
    `}_renderExplain(){const e=this.model?Math.log(this.model.vocabSize).toFixed(2):null;return c`
      <p class="explain">
        Modellen lär sig genom att gissa nästa token för varje position
        i texten, jämföra med rätt svar (<b>cross-entropy loss</b>) och
        uppdatera alla vikter med handskriven backprop + Adam. En helt
        slumpmässig modell ligger på
        <code>ln(vocab)${e?` = ${e}`:""}</code> — ju
        längre under den linjen loss hamnar, desto mer struktur har
        modellen lärt sig.
      </p>
    `}_renderEmpty(){return c`
      <p class="placeholder">
        Analysera en korpus för att bygga modellen.
      </p>
    `}_renderInfo(e){return c`
      <dl>
        <dt>Parametrar</dt>
        <dd>${Ee(e.parameterCount)}</dd>
        <dt>Lager / heads</dt>
        <dd>${e.nLayers} / ${e.nHeads}</dd>
        <dt>dModel / dFF</dt>
        <dd>${e.dModel} / ${e.dFF}</dd>
        <dt>Kontextlängd</dt>
        <dd>${e.contextLength}</dd>
        <dt>Vocab-storlek</dt>
        <dd>${e.vocabSize}</dd>
      </dl>
    `}_renderControls(){const e=this.trainingState,t=e==="running";return c`
      <div class="controls">
        ${e==="idle"?c`<button @click=${this._emitStart}>Börja träna</button>`:d}
        ${e==="running"?c`<button @click=${this._emitPause}>Pausa</button>`:d}
        ${e==="paused"?c`<button @click=${this._emitResume}>Återuppta</button>`:d}
        <label>
          Batch:
          <input
            type="number"
            min="1"
            max="64"
            .value=${String(this._batchSize)}
            @input=${this._onBatchSizeInput}
          />
        </label>
        <button
          @click=${this._emitGradCheck}
          ?disabled=${t||this._gradCheckRunning}
          title="Jämför handskriven backprop med numeriska gradienter"
        >
          ${this._gradCheckRunning?"Kontrollerar…":"Verifiera backprop"}
        </button>
      </div>
    `}_onBatchSizeInput(e){const t=parseInt(e.target.value,10);!Number.isNaN(t)&&t>=1&&(this._batchSize=t,this.dispatchEvent(new CustomEvent("batch-size-change",{detail:{batchSize:t},bubbles:!0,composed:!0})))}_emitGradCheck(){this._gradCheckRunning=!0,this._gradCheckResult=null,this.dispatchEvent(new CustomEvent("grad-check",{bubbles:!0,composed:!0}))}_renderStats(){return this._step===0&&this._latestLoss===null?d:c`
      <div class="stats">
        Steg ${this._step}
        ${this._latestLoss!==null?` | loss ${this._latestLoss.toFixed(3)}`:""}
        ${this._samplesPerSecond>0?` | ${this._samplesPerSecond.toFixed(1)} steg/s`:""}
        ${this._gradNorm>0?` | ‖grad‖ ${this._gradNorm.toFixed(2)}`:""}
      </div>
    `}_renderSample(){return this._sampleText?c`
      <div class="label">
        Sample vid steg ${this._sampleStep}
        ${this._samplePrefix?` (prefix: "${this._samplePrefix}")`:""}
      </div>
      <div class="sample">${this._sampleText}</div>
    `:c`
        <div class="label">Sample-output</div>
        <div class="sample empty">
          Sample visas när träningen har kört några hundra steg.
        </div>
      `}_emitStart(){this.dispatchEvent(new CustomEvent("train-start",{bubbles:!0,composed:!0}))}_emitPause(){this.dispatchEvent(new CustomEvent("train-pause",{bubbles:!0,composed:!0}))}_emitResume(){this.dispatchEvent(new CustomEvent("train-resume",{bubbles:!0,composed:!0}))}};v.styles=[ht,kt,V`
      dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.2rem 1rem;
        margin: 0.25rem 0 0;
        font-size: 0.9rem;
      }
      dt {
        color: var(--text-secondary);
      }
      dd {
        margin: 0;
        font-variant-numeric: tabular-nums;
      }
      .controls {
        margin-top: 0.9rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .stats {
        margin-top: 0.6rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        font-variant-numeric: tabular-nums;
      }
      canvas {
        margin-top: 0.35rem;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--bg-subtle);
        display: block;
      }
      .sample {
        margin-top: 0.35rem;
        font-family: var(--font-mono);
        font-size: 0.82rem;
        background: var(--bg-subtle);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 0.65rem 0.75rem;
        min-height: 3rem;
        white-space: pre-wrap;
        word-break: break-word;
        color: var(--text-primary);
      }
      .sample.empty {
        color: var(--text-muted);
        font-style: italic;
      }
      .gc-summary {
        margin-top: 0.35rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
      }
      .gc-status {
        font-weight: 600;
        margin-right: 0.4rem;
      }
      .gc-status.ok {
        color: var(--accent);
      }
      .gc-status.warn {
        color: #b38200;
      }
      .gc-status.bad {
        color: var(--danger);
      }
      .gc-note {
        margin: 0.35rem 0 0.5rem;
        font-size: 0.78rem;
        color: var(--text-muted);
        line-height: 1.5;
        max-width: 58ch;
      }
      .gc-table {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        column-gap: 0.6rem;
        row-gap: 0.2rem;
        font-family: var(--font-mono);
        font-size: 0.78rem;
      }
      .gc-head {
        font-family: var(--font-sans);
        color: var(--text-muted);
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .gc-name {
        color: var(--text-primary);
      }
      .gc-num {
        color: var(--text-secondary);
        font-variant-numeric: tabular-nums;
      }
    `];y([O({attribute:!1})],v.prototype,"model",2);y([O({attribute:!1})],v.prototype,"trainingState",2);y([m()],v.prototype,"_batchSize",2);y([m()],v.prototype,"_gradCheckRunning",2);y([m()],v.prototype,"_gradCheckResult",2);y([m()],v.prototype,"_step",2);y([m()],v.prototype,"_samplesPerSecond",2);y([m()],v.prototype,"_gradNorm",2);y([m()],v.prototype,"_lossHistory",2);y([m()],v.prototype,"_latestLoss",2);y([m()],v.prototype,"_sampleText",2);y([m()],v.prototype,"_samplePrefix",2);y([m()],v.prototype,"_sampleStep",2);v=y([pt("training-panel")],v);function Ee(e){return e.toLocaleString("sv-SE")}function W(e,t,r){return e.getPropertyValue(t).trim()||r}var Ce=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,S=(e,t,r,n)=>{for(var s=n>1?void 0:n?Te(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&Ce(t,r,s),s};const Bt=180,nt=16,it=16;let $=class extends R{constructor(){super(...arguments),this.enabled=!1,this._prompt="De",this._nTokens=60,this._strategy="sampling",this._temperature=.8,this._topK=10,this._generating=!1,this._activePrompt="",this._generated="",this._receivedCount=0,this._attention=null,this._probs=null}pushToken(e,t){e===0&&(this._generated=""),this._generated+=t,this._receivedCount=e+1}pushAttention(e){this._attention=e}pushProbs(e){this._probs=e}done(e){this._generating=!1,this._receivedCount=e}reset(){this._generating=!1,this._generated="",this._activePrompt="",this._receivedCount=0,this._attention=null,this._probs=null}_onPromptInput(e){this._prompt=e.target.value}_onTokensInput(e){const t=parseInt(e.target.value,10);!Number.isNaN(t)&&t>0&&(this._nTokens=t)}_onStrategyChange(e){this._strategy=e.target.value}_onTemperatureInput(e){const t=parseFloat(e.target.value);Number.isNaN(t)||(this._temperature=t)}_onTopKInput(e){const t=parseInt(e.target.value,10);!Number.isNaN(t)&&t>0&&(this._topK=t)}_onGenerate(){if(!this._prompt.length)return;this._generating=!0,this._generated="",this._receivedCount=0,this._activePrompt=this._prompt,this._attention=null,this._probs=null;const e={prompt:this._prompt,nTokens:this._nTokens,strategy:this._strategy,temperature:this._temperature,topK:this._topK};this.dispatchEvent(new CustomEvent("inference-start",{detail:e,bubbles:!0,composed:!0}))}updated(e){e.has("_attention")&&this._drawAttention()}_drawAttention(){const e=this._attention;if(!e)return;const t=this.renderRoot.querySelectorAll("canvas.heatmap");let r=0;for(let n=0;n<e.nLayers;n++)for(let s=0;s<e.nHeads;s++){const i=t[r++];i&&Le(i,e,n,s)}}render(){return this.enabled?c`
      <h2>Inferens</h2>
      <p class="explain">
        Skriv ett prefix och se modellen generera en token i taget.
        <b>Top-10-stapeln</b> visar modellens råa tro (softmax utan
        temperatur); valet styrs av strategin och temperaturen.
        <b>Attention-heatmaps</b> visar för varje lager och head hur
        varje position (rad) vägde tidigare positioner (kolumner) —
        övre triangeln är alltid vit pga causal mask.
      </p>
      <div class="row">
        <label>
          Prompt:
          <input
            type="text"
            .value=${this._prompt}
            @input=${this._onPromptInput}
            ?disabled=${this._generating}
          />
        </label>
        <label>
          Tokens:
          <input
            type="number"
            min="1"
            max="500"
            .value=${String(this._nTokens)}
            @input=${this._onTokensInput}
            ?disabled=${this._generating}
          />
        </label>
      </div>
      <div class="row">
        <label>
          Strategi:
          <select
            .value=${this._strategy}
            @change=${this._onStrategyChange}
            ?disabled=${this._generating}
          >
            <option value="greedy">Greedy (argmax)</option>
            <option value="top-k">Top-k</option>
            <option value="sampling">Sampling</option>
          </select>
        </label>
        ${this._strategy!=="greedy"?c`
              <label>
                Temperature:
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.05"
                  .value=${String(this._temperature)}
                  @input=${this._onTemperatureInput}
                  ?disabled=${this._generating}
                />
                <span class="temp-value"
                  >${this._temperature.toFixed(2)}</span
                >
              </label>
            `:d}
        ${this._strategy==="top-k"?c`
              <label>
                k:
                <input
                  type="number"
                  min="1"
                  max="200"
                  .value=${String(this._topK)}
                  @input=${this._onTopKInput}
                  ?disabled=${this._generating}
                />
              </label>
            `:d}
      </div>
      <div class="row">
        <button @click=${this._onGenerate} ?disabled=${this._generating}>
          ${this._generating?"Genererar…":"Generera"}
        </button>
        ${this._generating?c`<span class="counter"
              >${this._receivedCount} / ${this._nTokens}</span
            >`:d}
      </div>
      ${this._activePrompt||this._generated?c`
            <div class="label">Output</div>
            <div class="output">
              <span class="prompt">${this._activePrompt}</span><span
                class="generated"
                >${this._generated}</span
              >${this._generating?c`<span class="cursor"></span>`:d}
            </div>
          `:d}
      ${this._renderProbs()}
      ${this._renderAttention()}
    `:c`
        <h2>Inferens</h2>
        <p class="placeholder">Bygg en modell först genom att analysera en korpus.</p>
      `}_renderProbs(){const e=this._probs;if(!e)return d;const t=e.topProbs[0]??1,r=e.topChars.map((s,i)=>{const o=e.topProbs[i]??0,l=t>0?o/t*100:0,a=s===e.chosenChar;return c`
        <div class=${a?"p-row chosen":"p-row"}>
          <span class="p-char">${dt(s)}</span>
          <span class="p-bar" style=${`width: ${l}%`}></span>
          <span class="p-val">${(o*100).toFixed(1)}%</span>
        </div>
      `}),n=!e.topChars.includes(e.chosenChar);return c`
      <div class="label">Topp-10 sannolikheter (steg ${e.step})</div>
      <div class="probs">${r}</div>
      <div class="probs-hint">
        ${n?`Samplingen valde "${dt(e.chosenChar)}" (${(e.chosenProb*100).toFixed(2)}%) — utanför topp-10 på grund av temperatur.`:"Det valda tecknet är markerat i fetstil."}
      </div>
    `}_renderAttention(){const e=this._attention;if(!e)return d;const t=[];for(let r=0;r<e.nLayers;r++)for(let n=0;n<e.nHeads;n++)t.push(c`
          <div class="attn-head">
            <canvas
              class="heatmap"
              data-layer=${r}
              data-head=${n}
              width=${Bt}
              height=${Bt}
            ></canvas>
            <div>Lager ${r}, Head ${n}</div>
          </div>
        `);return c`
      <div class="label">
        Attention efter steg ${e.step} (T = ${e.T})
      </div>
      <div
        class="attn-grid"
        style=${`grid-template-columns: repeat(${e.nHeads}, auto)`}
      >
        ${t}
      </div>
      <div class="attn-hint">
        Rad i = var token i tittar. Kolumn j = hur mycket token i tittar
        på token j. Övre triangeln är alltid vit — causal mask.
      </div>
    `}};$.styles=[ht,kt,V`
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem 0.8rem;
        align-items: center;
        margin-top: 0.55rem;
      }
      .row:first-of-type {
        margin-top: 0;
      }
      input[type='text'] {
        min-width: 12rem;
      }
      input[type='number'] {
        width: 5rem;
      }
      .temp-value {
        font-variant-numeric: tabular-nums;
        color: var(--text-secondary);
        min-width: 2.5rem;
        display: inline-block;
        text-align: right;
      }
      .output {
        margin-top: 0.35rem;
        font-family: var(--font-mono);
        font-size: 0.88rem;
        background: var(--bg-subtle);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 0.75rem 0.85rem;
        min-height: 4rem;
        white-space: pre-wrap;
        word-break: break-word;
        color: var(--text-primary);
      }
      .output .prompt {
        background: var(--accent-soft);
        color: var(--accent-strong);
        padding: 1px 3px;
        border-radius: 3px;
      }
      .output .generated {
        color: var(--accent);
      }
      .output .cursor {
        display: inline-block;
        width: 0.5em;
        height: 1em;
        vertical-align: -0.15em;
        background: var(--accent);
        margin-left: 1px;
        animation: blink 0.8s step-end infinite;
      }
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
      .counter {
        font-size: 0.82rem;
        color: var(--text-secondary);
        font-variant-numeric: tabular-nums;
      }
      .attn-grid {
        margin-top: 0.35rem;
        display: grid;
        gap: 0.75rem 0.75rem;
        grid-auto-flow: row;
      }
      .attn-head {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.72rem;
        color: var(--text-secondary);
        font-variant-numeric: tabular-nums;
        gap: 0.25rem;
      }
      .attn-head canvas {
        border: 1px solid var(--border);
        background: var(--bg-card);
        border-radius: var(--radius-sm);
        image-rendering: pixelated;
      }
      .attn-hint {
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin-top: 0.5rem;
        line-height: 1.45;
      }
      .probs {
        margin-top: 0.35rem;
        display: grid;
        grid-template-columns: 2rem 1fr 3.5rem;
        column-gap: 0.6rem;
        row-gap: 0.2rem;
        font-size: 0.82rem;
        font-family: var(--font-mono);
        align-items: center;
      }
      .probs .p-char {
        text-align: right;
        white-space: pre;
        color: var(--text-primary);
      }
      .probs .p-bar {
        height: 0.8rem;
        background: var(--accent);
        border-radius: 2px;
        opacity: 0.55;
        transition: width 0.12s ease;
      }
      .probs .p-row.chosen .p-bar {
        opacity: 1;
      }
      .probs .p-row.chosen .p-char {
        font-weight: 700;
        color: var(--accent-strong);
      }
      .probs .p-val {
        color: var(--text-secondary);
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .probs .p-row {
        display: contents;
      }
      .probs-hint {
        font-size: 0.78rem;
        color: var(--text-secondary);
        margin-top: 0.4rem;
        line-height: 1.45;
      }
    `];S([O({type:Boolean,reflect:!0})],$.prototype,"enabled",2);S([m()],$.prototype,"_prompt",2);S([m()],$.prototype,"_nTokens",2);S([m()],$.prototype,"_strategy",2);S([m()],$.prototype,"_temperature",2);S([m()],$.prototype,"_topK",2);S([m()],$.prototype,"_generating",2);S([m()],$.prototype,"_activePrompt",2);S([m()],$.prototype,"_generated",2);S([m()],$.prototype,"_receivedCount",2);S([m()],$.prototype,"_attention",2);S([m()],$.prototype,"_probs",2);$=S([pt("inference-panel")],$);function Le(e,t,r,n){const s=e.getContext("2d");if(!s)return;const i=e.width,o=e.height;s.clearRect(0,0,i,o),s.fillStyle="#fff",s.fillRect(0,0,i,o);const l=i-nt,a=o-it,p=t.T,u=l/p,h=a/p,f=(r*t.nHeads+n)*p*p;for(let g=0;g<p;g++)for(let w=0;w<p;w++){const ut=t.matrices[f+g*p+w]??0;s.fillStyle=Me(ut),s.fillRect(nt+w*u,it+g*h,u+1,h+1)}const b=Math.max(5,Math.min(10,u-1));s.fillStyle="#555",s.font=`${b}px ui-monospace, Menlo, Consolas, monospace`,s.textAlign="center",s.textBaseline="bottom";for(let g=0;g<p;g++){const w=dt(t.contextChars[g]??"");s.fillText(w,nt+g*u+u/2,it-2)}s.textAlign="right",s.textBaseline="middle";for(let g=0;g<p;g++){const w=dt(t.contextChars[g]??"");s.fillText(w,nt-2,it+g*h+h/2)}}function Me(e){const t=Math.min(1,Math.max(0,e)),r=Math.round(255+-222*t),n=Math.round(255+-148*t),s=Math.round(255+-173*t);return`rgb(${r}, ${n}, ${s})`}function dt(e){return e===" "?"␠":e===`
`?"␤":e==="	"?"␉":e}var ze=Object.defineProperty,He=Object.getOwnPropertyDescriptor,St=(e,t,r,n)=>{for(var s=n>1?void 0:n?He(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&ze(t,r,s),s};const Re=[{name:"GPT-2 small",year:"2019",params:124e6,nLayers:12,nHeads:12,dModel:768,contextLength:1024,vocabSize:50257,trainingData:"40 GB text (~10 B tokens)",gpuHours:"~1 000"},{name:"GPT-2 XL",year:"2019",params:15e8,nLayers:48,nHeads:25,dModel:1600,contextLength:1024,vocabSize:50257,trainingData:"40 GB text (~10 B tokens)",gpuHours:"~40 000"},{name:"GPT-3",year:"2020",params:175e9,nLayers:96,nHeads:96,dModel:12288,contextLength:2048,vocabSize:50257,trainingData:"~300 B tokens (CommonCrawl m.m.)",gpuHours:"~3,6 M"},{name:"Llama 2 7B",year:"2023",params:67e8,nLayers:32,nHeads:32,dModel:4096,contextLength:4096,vocabSize:32e3,trainingData:"2 B tokens",gpuHours:"184 k"},{name:"Llama 3 8B",year:"2024",params:803e7,nLayers:32,nHeads:32,dModel:4096,contextLength:128e3,vocabSize:128256,trainingData:"15 T tokens",gpuHours:"1,3 M"},{name:"Llama 3 70B",year:"2024",params:706e8,nLayers:80,nHeads:64,dModel:8192,contextLength:128e3,vocabSize:128256,trainingData:"15 T tokens",gpuHours:"6,4 M"},{name:"GPT-4",year:"2023",params:17e11,nLayers:null,nHeads:null,dModel:null,contextLength:128e3,vocabSize:100277,trainingData:"okänt (MoE-arkitektur)",gpuHours:"~25 M (est.)",note:"Parameterantal är uppskattat; aktiv parametermängd per forward är lägre pga Mixture-of-Experts."}];let tt=class extends R{constructor(){super(...arguments),this.model=null,this.trainingTokens=null}_buildRows(){const e=[];if(this.model){const t=this.model.parameterCount;let r="< 0,01";t>3e6?r="~0,1":t>5e5&&(r="~0,02"),e.push({name:"Denna demo",year:"2026",params:t,nLayers:this.model.nLayers,nHeads:this.model.nHeads,dModel:this.model.dModel,contextLength:this.model.contextLength,vocabSize:this.model.vocabSize,trainingData:this.trainingTokens!==null?`${It(this.trainingTokens)} tokens`:"korpusen du laddat",gpuHours:r,highlight:!0})}return e.push(...Re),e}render(){const e=this._buildRows();return c`
      <h2>Jämförelse med riktiga LLM:er</h2>
      <p class="explain">
        Samma mekanik, olika skala. Alla modeller i listan är
        transformer-decoders med next-token-prediktion — precis som
        vår. Det som skiljer är storlek, träningsdata och
        fine-tuning-fasen ovanpå pretraining.
      </p>
      <div class="wrap">
        <table>
          <thead>
            <tr>
              <th>Modell</th>
              <th>År</th>
              <th>Parametrar</th>
              <th>Lager</th>
              <th>Heads</th>
              <th>dModel</th>
              <th>Kontext</th>
              <th>Vocab</th>
              <th>GPU-timmar</th>
              <th>Träningsdata</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(t=>this._renderRow(t))}
          </tbody>
        </table>
      </div>
      ${e.some(t=>t.note)?c`<div class="note">
            * GPT-4 är Mixture-of-Experts; aktiva parametrar per forward
            är lägre än totalen.
          </div>`:d}
    `}_renderRow(e){return c`
      <tr class=${e.highlight?"highlight":""}>
        <td class="name">${e.name}${e.note?"*":""}</td>
        <td>${e.year}</td>
        <td>${It(e.params)}</td>
        <td>${e.nLayers??c`<span class="dim">?</span>`}</td>
        <td>${e.nHeads??c`<span class="dim">?</span>`}</td>
        <td>${e.dModel??c`<span class="dim">?</span>`}</td>
        <td>${Ut(e.contextLength)}</td>
        <td>${Ut(e.vocabSize)}</td>
        <td>${e.gpuHours}</td>
        <td>${e.trainingData}</td>
      </tr>
    `}};tt.styles=[ht,V`
      .wrap {
        overflow-x: auto;
      }
      table {
        border-collapse: collapse;
        width: 100%;
        font-size: 0.82rem;
        font-variant-numeric: tabular-nums;
      }
      th,
      td {
        text-align: right;
        padding: 0.45rem 0.7rem;
        border-bottom: 1px solid var(--border);
        white-space: nowrap;
      }
      th:first-child,
      td:first-child {
        text-align: left;
      }
      th {
        font-weight: 600;
        color: var(--text-secondary);
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        background: var(--bg-subtle);
        position: sticky;
        top: 0;
      }
      tr.highlight {
        background: var(--accent-soft);
      }
      tr.highlight td {
        font-weight: 600;
        color: var(--accent-strong);
      }
      td.name {
        font-weight: 500;
      }
      .note {
        font-size: 0.78rem;
        color: var(--text-muted);
        margin-top: 0.6rem;
        line-height: 1.5;
      }
      .dim {
        color: var(--text-muted);
      }
    `];St([O({attribute:!1})],tt.prototype,"model",2);St([O({attribute:!1})],tt.prototype,"trainingTokens",2);tt=St([pt("comparison-panel")],tt);function Ut(e){return e>=1e6?`${(e/1e6).toFixed(1)} M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)} k`:e.toLocaleString("sv-SE")}function It(e){return e>=1e12?`${(e/1e12).toFixed(1)} T`:e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)} B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)} M`:e>=1e3?`${(e/1e3).toFixed(0)} k`:e.toLocaleString("sv-SE")}function Oe(e){return new Worker(""+new URL("worker-CtTbdisU.js",import.meta.url).href,{type:"module",name:e==null?void 0:e.name})}class Ne{constructor(){this.listeners=new Set,this.worker=new Oe,this.worker.onmessage=t=>{for(const r of this.listeners)r(t.data)}}send(t){this.worker.postMessage(t)}onMessage(t){return this.listeners.add(t),()=>this.listeners.delete(t)}}const De=.01,Ft=document.getElementById("status");function C(e){Ft&&(Ft.textContent=e)}const F=document.querySelector("corpus-panel");if(!F)throw new Error("corpus-panel saknas i DOM");const x=document.querySelector("training-panel");if(!x)throw new Error("training-panel saknas i DOM");const T=document.querySelector("inference-panel");if(!T)throw new Error("inference-panel saknas i DOM");const bt=document.querySelector("comparison-panel");if(!bt)throw new Error("comparison-panel saknas i DOM");const E=new Ne;window.__client=E;E.onMessage(e=>{switch(e.type){case"ready":C("Worker redo. Skickar ping…"),E.send({type:"ping",payload:"hej worker"});return;case"pong":{const t=Date.now()-e.receivedAt;C(`Pong mottagen: "${e.payload}" (rundtur ~${t} ms)`);return}case"corpus:analyzed":F.analysis={tokenizerKind:e.tokenizerKind,vocab:e.vocab,frequencies:e.frequencies,totalChars:e.totalChars,totalTokens:e.totalTokens},F.bpeProgress=null,bt.trainingTokens=e.totalTokens,C(`Korpus analyserad: ${e.totalChars.toLocaleString("sv-SE")} tecken, ${e.totalTokens.toLocaleString("sv-SE")} tokens, ${e.vocab.length} i vocab. Bygger modell…`),x.resetHistory(),T.reset(),T.enabled=!1;return;case"tokenizer:progress":F.bpeProgress={mergesDone:e.mergesDone,targetMerges:e.targetMerges,latestA:e.latestA,latestB:e.latestB,latestCount:e.latestCount},C(`Tränar BPE: merge ${e.mergesDone}/${e.targetMerges}…`);return;case"model:ready":T.enabled=!0,x.model={vocabSize:e.vocabSize,dModel:e.dModel,nHeads:e.nHeads,nLayers:e.nLayers,dFF:e.dFF,contextLength:e.contextLength,parameterCount:e.parameterCount},bt.model=x.model,C(`Modell redo på ${e.backend.toUpperCase()}: ${e.parameterCount.toLocaleString("sv-SE")} parametrar. Forward-pass OK (max logit ${e.sanityMaxLogit.toFixed(3)}).`);return;case"train:state":x.trainingState=e.state,e.state==="running"?C(`Tränar… steg ${e.step}`):e.state==="paused"&&C(`Pausad vid steg ${e.step}`);return;case"train:progress":x.pushProgress(e.step,e.loss,e.samplesPerSecond,e.gradNorm),C(`Tränar… steg ${e.step}, loss ${e.loss.toFixed(3)}, ${e.samplesPerSecond.toFixed(1)} steg/s`);return;case"train:sample":x.pushSample(e.step,e.prefix,e.generated);return;case"inference:token":T.pushToken(e.index,e.char);return;case"inference:attention":T.pushAttention({step:e.step,contextChars:e.contextChars,nLayers:e.nLayers,nHeads:e.nHeads,T:e.T,matrices:e.matrices});return;case"grad-check:result":x.pushGradCheckResult({checked:e.checked,skipped:e.skipped,maxRelError:e.maxRelError,meanRelError:e.meanRelError,loss:e.loss,seqLength:e.seqLength,worst:e.worst});return;case"gpu:debug-result":window.__gpuDebug={logitsFirstRow:e.logitsFirstRow,perTokenLoss:e.perTokenLoss,embeddedFirstRow:e.embeddedFirstRow,block0Ln1Out:e.block0Ln1Out,block0Q:e.block0Q,finalLnOut:e.finalLnOut,lastError:e.lastError},e.lastError&&console.error("[GPU validation]",e.lastError);return;case"inference:probs":T.pushProbs({step:e.step,topChars:e.topChars,topProbs:e.topProbs,chosenChar:e.chosenChar,chosenProb:e.chosenProb});return;case"inference:done":T.done(e.count);return;default:{const t=e;throw new Error(`Okänt meddelande: ${JSON.stringify(t)}`)}}});F.addEventListener("corpus-submit",e=>{E.send({type:"corpus:submit",text:e.detail.text,tokenizer:e.detail.tokenizer,bpeVocabSize:e.detail.bpeVocabSize,backend:e.detail.backend,modelPreset:e.detail.modelPreset}),F.bpeProgress=null,C(e.detail.tokenizer==="bpe"?"Tränar BPE-tokenizer…":"Analyserar korpus…")});x.addEventListener("train-start",()=>{E.send({type:"train:start",learningRate:De})});x.addEventListener("train-pause",()=>{E.send({type:"train:pause"})});x.addEventListener("train-resume",()=>{E.send({type:"train:resume"})});x.addEventListener("batch-size-change",e=>{E.send({type:"train:set-batch-size",batchSize:e.detail.batchSize})});x.addEventListener("grad-check",()=>{E.send({type:"grad-check:start"})});T.addEventListener("inference-start",e=>{E.send({type:"inference:start",prompt:e.detail.prompt,nTokens:e.detail.nTokens,strategy:e.detail.strategy,temperature:e.detail.temperature,topK:e.detail.topK})});
