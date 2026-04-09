var Ot=Object.defineProperty;var zt=(r,t,e)=>t in r?Ot(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var z=(r,t,e)=>zt(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,rt=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),ct=new WeakMap;let At=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ct.set(e,t))}return t}toString(){return this.cssText}};const Pt=r=>new At(typeof r=="string"?r:r+"",void 0,lt),ht=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new At(e,r,lt)},Ht=(r,t)=>{if(rt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=K.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},pt=rt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Pt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gt,defineProperty:Lt,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Dt,getOwnPropertySymbols:Ut,getPrototypeOf:Tt}=Object,E=globalThis,ut=E.trustedTypes,Ft=ut?ut.emptyScript:"",Q=E.reactiveElementPolyfillSupport,I=(r,t)=>r,it={toAttribute(r,t){switch(t){case Boolean:r=r?Ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},kt=(r,t)=>!Gt(r,t),ft={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:kt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ft){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Lt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=Rt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){const l=i==null?void 0:i.call(this);n==null||n.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ft}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,s=[...Dt(e),...Ut(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(pt(i))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ht(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:it).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var n,a;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:it;this._$Em=i;const c=o.fromAttribute(e,l.type);this[i]=c??((a=this._$Ej)==null?void 0:a.get(i))??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){var a;if(t!==void 0){const l=this.constructor;if(i===!1&&(n=this[t]),s??(s=l.getPropertyOptions(t)),!((s.hasChanged??kt)(n,e)||s.useDefault&&s.reflect&&n===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:l}=a,o=this[n];l!==!0||this._$AL.has(n)||o===void 0||this.C(n,void 0,a,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[I("elementProperties")]=new Map,D[I("finalized")]=new Map,Q==null||Q({ReactiveElement:D}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,gt=r=>r,Z=V.trustedTypes,$t=Z?Z.createPolicy("lit-html",{createHTML:r=>r}):void 0,St="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+M,It=`<${Nt}>`,R=document,B=()=>R.createComment(""),j=r=>r===null||typeof r!="object"&&typeof r!="function",dt=Array.isArray,Vt=r=>dt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mt=/-->/g,bt=/>/g,P=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,yt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),w=Mt(1),N=Mt(2),U=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),wt=new WeakMap,H=R.createTreeWalker(R,129);function Et(r,t){if(!dt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}const Bt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",a=F;for(let l=0;l<e;l++){const o=r[l];let c,u,p=-1,g=0;for(;g<o.length&&(a.lastIndex=g,u=a.exec(o),u!==null);)g=a.lastIndex,a===F?u[1]==="!--"?a=mt:u[1]!==void 0?a=bt:u[2]!==void 0?(Ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=P):u[3]!==void 0&&(a=P):a===P?u[0]===">"?(a=i??F,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?P:u[3]==='"'?yt:vt):a===yt||a===vt?a=P:a===mt||a===bt?a=F:(a=P,i=void 0);const b=a===P&&r[l+1].startsWith("/>")?" ":"";n+=a===F?o+It:p>=0?(s.push(c),o.slice(0,p)+St+o.slice(p)+M+b):o+M+(p===-2?l:b)}return[Et(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class W{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0;const l=t.length-1,o=this.parts,[c,u]=Bt(t,e);if(this.el=W.createElement(c,s),H.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=H.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(St)){const g=u[a++],b=i.getAttribute(p).split(M),d=/([.?@])?(.*)/.exec(g);o.push({type:1,index:n,name:d[2],strings:b,ctor:d[1]==="."?Wt:d[1]==="?"?qt:d[1]==="@"?Xt:J}),i.removeAttribute(p)}else p.startsWith(M)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(Ct.test(i.tagName)){const p=i.textContent.split(M),g=p.length-1;if(g>0){i.textContent=Z?Z.emptyScript:"";for(let b=0;b<g;b++)i.append(p[b],B()),H.nextNode(),o.push({type:2,index:++n});i.append(p[g],B())}}}else if(i.nodeType===8)if(i.data===Nt)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(M,p+1))!==-1;)o.push({type:7,index:n}),p+=M.length-1}n++}}static createElement(t,e){const s=R.createElement("template");return s.innerHTML=t,s}}function T(r,t,e=r,s){var a,l;if(t===U)return t;let i=s!==void 0?(a=e._$Co)==null?void 0:a[s]:e._$Cl;const n=j(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=T(r,i._$AS(r,t.values),i,s)),t}class jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??R).importNode(e,!0);H.currentNode=i;let n=H.nextNode(),a=0,l=0,o=s[0];for(;o!==void 0;){if(a===o.index){let c;o.type===2?c=new q(n,n.nextSibling,this,t):o.type===1?c=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(c=new Kt(n,this,t)),this._$AV.push(c),o=s[++l]}a!==(o==null?void 0:o.index)&&(n=H.nextNode(),a++)}return H.currentNode=R,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class q{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),j(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(Et(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const a=new jt(i,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new W(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new q(this.O(B()),this.O(B()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=gt(t).nextSibling;gt(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(t,e=this,s,i){const n=this.strings;let a=!1;if(n===void 0)t=T(this,t,e,0),a=!j(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const l=t;let o,c;for(t=n[0],o=0;o<n.length-1;o++)c=T(this,l[s+o],e,o),c===U&&(c=this._$AH[o]),a||(a=!j(c)||c!==this._$AH[o]),c===A?t=A:t!==A&&(t+=(c??"")+n[o+1]),this._$AH[o]=c}a&&!i&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Wt extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class qt extends J{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class Xt extends J{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??A)===U)return;const s=this._$AH,i=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==A&&(s===A||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Kt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const et=V.litHtmlPolyfillSupport;et==null||et(W,q),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.3.2");const Zt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new q(t.insertBefore(B(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis;class L extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return U}}var _t;L._$litElement$=!0,L.finalized=!0,(_t=G.litElementHydrateSupport)==null||_t.call(G,{LitElement:L});const st=G.litElementPolyfillSupport;st==null||st({LitElement:L});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");class xt{constructor(t=[12]){this.hiddenSizes=t,this.layerSizes=[9,...t,9],this.weights=[],this.biases=[];for(let e=0;e<this.layerSizes.length-1;e++)this.weights.push(this.randomMatrix(this.layerSizes[e+1],this.layerSizes[e])),this.biases.push(new Array(this.layerSizes[e+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastInput=new Array(9).fill(0),this.lastHiddenRaw=t.map(e=>new Array(e).fill(0)),this.lastHidden=t.map(e=>new Array(e).fill(0)),this.lastOutputRaw=new Array(9).fill(0),this.lastOutput=new Array(9).fill(0),this.lastMasked=new Array(9).fill(0),this.lastMask=new Array(9).fill(1),this.lastGradients=null,this.learningRate=.05,this.trainingGames=0}randomMatrix(t,e){const s=[];for(let i=0;i<t;i++){s[i]=[];for(let n=0;n<e;n++)s[i][n]=(Math.random()-.5)*.5}return s}relu(t){return Math.max(0,t)}reluDerivative(t){return t>0?1:0}softmax(t){const e=Math.max(...t),s=t.map(n=>Math.exp(n-e)),i=s.reduce((n,a)=>n+a,0);return s.map(n=>n/i)}forward(t){this.lastInput=[...t];let e=t;for(let a=0;a<this.hiddenSizes.length;a++){const l=this.hiddenSizes[a],o=new Array(l).fill(0),c=new Array(l).fill(0);for(let u=0;u<l;u++){let p=this.biases[a][u];for(let g=0;g<e.length;g++)p+=this.weights[a][u][g]*e[g];o[u]=p,c[u]=this.relu(p)}this.lastHiddenRaw[a]=o,this.lastHidden[a]=c,e=c}const s=this.weights.length-1;this.lastOutputRaw=new Array(9).fill(0);for(let a=0;a<9;a++){let l=this.biases[s][a];for(let o=0;o<e.length;o++)l+=this.weights[s][a][o]*e[o];this.lastOutputRaw[a]=l}this.lastOutput=this.softmax(this.lastOutputRaw),this.lastMask=t.map(a=>a===0?1:0);const i=this.lastOutput.map((a,l)=>a*this.lastMask[l]),n=i.reduce((a,l)=>a+l,0);return this.lastMasked=n>0?i.map(a=>a/n):this.lastMask.map(a=>a/this.lastMask.reduce((l,o)=>l+o,0)),this.lastMasked}chooseMove(t,e=!1){const s=this.forward(t);if(e){let a=-1,l=-1;for(let o=0;o<9;o++)s[o]>l&&(l=s[o],a=o);return a}const i=Math.random();let n=0;for(let a=0;a<9;a++)if(n+=s[a],i<n)return a;return 8}backpropagate(t,e,s){this.forward(t);const i=new Array(9).fill(0);for(let d=0;d<9;d++)d===e?i[d]=s*(1-this.lastOutput[d]):i[d]=s*-this.lastOutput[d];const n=[],a=[];for(let d=0;d<this.weights.length;d++)n.push(this.weights[d].map($=>$.map(()=>0))),a.push(new Array(this.biases[d].length).fill(0));const l=this.hiddenSizes.map(d=>new Array(d).fill(0)),o=this.weights.length-1,c=this.hiddenSizes.length-1,u=this.lastHidden[c];for(let d=0;d<9;d++){a[o][d]=i[d];for(let $=0;$<u.length;$++)n[o][d][$]=i[d]*u[$]}for(let d=0;d<this.hiddenSizes[c];d++){let $=0;for(let y=0;y<9;y++)$+=this.weights[o][y][d]*i[y];l[c][d]=$*this.reluDerivative(this.lastHiddenRaw[c][d])}for(let d=c-1;d>=0;d--){const $=l[d+1],y=d+1;for(let v=0;v<this.hiddenSizes[d+1];v++){a[y][v]=$[v];for(let m=0;m<this.hiddenSizes[d];m++)n[y][v][m]=$[v]*this.lastHidden[d][m]}for(let v=0;v<this.hiddenSizes[d];v++){let m=0;for(let x=0;x<this.hiddenSizes[d+1];x++)m+=this.weights[y][x][v]*$[x];l[d][v]=m*this.reluDerivative(this.lastHiddenRaw[d][v])}}const p=l[0];for(let d=0;d<this.hiddenSizes[0];d++){a[0][d]=p[d];for(let $=0;$<9;$++)n[0][d][$]=p[d]*this.lastInput[$]}const g=1,b=d=>Math.max(-g,Math.min(g,d));for(let d=0;d<this.weights.length;d++)for(let $=0;$<this.weights[d].length;$++){this.biases[d][$]+=this.learningRate*b(a[d][$]);for(let y=0;y<this.weights[d][$].length;y++)this.weights[d][$][y]+=this.learningRate*b(n[d][$][y])}return this.lastGradients={outputGrad:i,hiddenGrad:l,weightsGrad:n,biasesGrad:a},this.lastGradients}train(t,e){for(let s=0;s<t;s++){const i=[],n=new Array(9).fill(0);let a=1,l=0;for(;;){const c=n.map(p=>p*a);let u;if(a===1)u=this.chooseMove(c,!1),i.push({board:[...c],action:u});else{const p=[];for(let g=0;g<9;g++)n[g]===0&&p.push(g);u=p[Math.floor(Math.random()*p.length)]}if(n[u]=a,l=this.checkWinner(n),l!==0||n.every(p=>p!==0))break;a*=-1}const o=l===1?1:l===-1?-1:.1;for(const c of i)this.backpropagate(c.board,c.action,o);this.trainingGames++,e&&s%10===0&&e(s,t)}}checkWinner(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[s,i,n]of e)if(t[s]!==0&&t[s]===t[i]&&t[i]===t[n])return t[s];return 0}getVisualizationData(){return{hiddenSizes:this.hiddenSizes,weights:this.weights,biases:this.biases,activations:{input:this.lastInput,hiddenRaw:this.lastHiddenRaw,hidden:this.lastHidden,outputRaw:this.lastOutputRaw,output:this.lastOutput,mask:this.lastMask,masked:this.lastMasked},gradients:this.lastGradients,trainingGames:this.trainingGames}}reset(){this.weights=[],this.biases=[];for(let t=0;t<this.layerSizes.length-1;t++)this.weights.push(this.randomMatrix(this.layerSizes[t+1],this.layerSizes[t])),this.biases.push(new Array(this.layerSizes[t+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastHiddenRaw=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.lastHidden=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.trainingGames=0,this.lastGradients=null}}class nt extends L{constructor(){super(),this.board=[0,0,0,0,0,0,0,0,0],this.disabled=!1,this.winLine=[]}render(){return w`
      <div class="grid">
        ${this.board.map((t,e)=>w`
          <div
            class="cell ${t===1?"x":t===-1?"o":""} ${t!==0?"occupied":""} ${this.disabled?"disabled":""} ${this.winLine.includes(e)?"win":""}"
            @click=${()=>this._onCellClick(e)}
          >
            <span class="node-label">${e+1}</span>
            ${t===1?"X":t===-1?"O":""}
          </div>
        `)}
      </div>
    `}_onCellClick(t){this.disabled||this.board[t]!==0||this.dispatchEvent(new CustomEvent("cell-click",{detail:{index:t},bubbles:!0,composed:!0}))}}z(nt,"properties",{board:{type:Array},disabled:{type:Boolean},winLine:{type:Array}}),z(nt,"styles",ht`
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
  `);customElements.define("ttt-board",nt);class at extends L{constructor(){super(),this.data=null,this.showGradients=!1,this._hoveredNode=null,this._selectedNode=null}_onNodeEnter(t,e){this._hoveredNode={layer:t,index:e}}_onNodeLeave(){this._hoveredNode=null}_onNodeClick(t,e){this._selectedNode&&this._selectedNode.layer===t&&this._selectedNode.index===e?this._selectedNode=null:this._selectedNode={layer:t,index:e},this.dispatchEvent(new CustomEvent("node-select",{detail:{node:this._selectedNode},bubbles:!0,composed:!0}))}render(){if(!this.data)return w`<p style="text-align:center;color:#64748b;">Laddar nätverk...</p>`;const{hiddenSizes:t,weights:e,activations:s,gradients:i}=this.data,n=t.length,a=2+n+1,l=900,o=35,c=55,u=9*c,p=o+u,g=50,b=[];for(let h=0;h<a;h++)b.push(g+h*((l-2*g)/(a-1)));const d=["Input (9)"],$=["Brädets tillstånd"];for(let h=0;h<n;h++){const f=n===1?`Dolt lager (${t[h]})`:`Dolt ${h+1} (${t[h]})`;d.push(f),$.push("ReLU-aktivering")}d.push("Output (9)"),$.push("Softmax"),d.push("Filtrerat (9)"),$.push("Ogiltiga drag = 0");const y=this._nodePositions(9,b[0],u,c,o),v=t.map((h,f)=>{const _=Math.min(c,u/h);return this._nodePositions(h,b[1+f],u,_,o)}),m=1+n,x=m+1,k=this._nodePositions(9,b[m],u,c,o),O=this._nodePositions(9,b[x],u,c,o),Y=h=>h===1?"X":h===-1?"O":"·",C=this._hoveredNode;return w`
      <svg viewBox="0 0 ${l} ${p}" preserveAspectRatio="xMidYMin meet">
        <!-- Layer labels -->
        ${b.map((h,f)=>N`
          <text x="${h}" y="14" class="layer-label">${d[f]}</text>
          <text x="${h}" y="28" class="label">${$[f]}</text>
        `)}

        <!-- Connections: Input → Hidden[0] -->
        ${this._renderConnections(y,v[0],e[0],this.showGradients&&i?i.weightsGrad[0]:null,0,1)}

        <!-- Connections between hidden layers -->
        ${v.slice(0,-1).map((h,f)=>this._renderConnections(h,v[f+1],e[f+1],this.showGradients&&i?i.weightsGrad[f+1]:null,f+1,f+2))}

        <!-- Connections: Last hidden → Output -->
        ${this._renderConnections(v[n-1],k,e[e.length-1],this.showGradients&&i?i.weightsGrad[e.length-1]:null,n,n+1)}

        <!-- Connections: Output → Masked (simple 1:1) -->
        ${k.map((h,f)=>{const _=O[f],S=s.mask[f]===0,X=C&&!(C.layer===n+1&&C.index===f||C.layer===n+2&&C.index===f);return N`<line
            x1="${h.x}" y1="${h.y}"
            x2="${_.x}" y2="${_.y}"
            stroke="${S?"#ef4444":"#22c55e"}"
            stroke-width="1.5"
            stroke-opacity="${X?.05:.6}"
            ${S?N`stroke-dasharray="4,3"`:""}
          />`})}

        <!-- Input nodes -->
        ${y.map((h,f)=>{const _=s.input[f],S=_===1?"#60a5fa":_===-1?"#f472b6":"#64748b";return N`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(0,f)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(0,f)}>
              <rect x="${h.x-24}" y="${h.y-14}" width="48" height="28" rx="6"
                fill="${S}" fill-opacity="0.15" stroke="${S}" stroke-width="1.5" />
              <text x="${h.x-12}" y="${h.y+1}" class="value-label" text-anchor="middle"
                fill="#94a3b8" font-size="10" font-weight="600">${f+1}</text>
              <text x="${h.x+12}" y="${h.y+1}" class="value-label" text-anchor="middle"
                fill="${S}" font-size="12" font-weight="700">${Y(_)}</text>
            </g>
          `})}

        <!-- Hidden layer nodes -->
        ${v.map((h,f)=>h.map((_,S)=>this._renderInteractiveNode(_,s.hidden[f][S],s.hidden[f][S].toFixed(2),"#a78bfa",10,this.showGradients&&i?i.hiddenGrad[f][S]:0,f+1,S)))}

        <!-- Output nodes -->
        ${k.map((h,f)=>N`
          <g class="node-interactive"
            @mouseenter=${()=>this._onNodeEnter(n+1,f)}
            @mouseleave=${()=>this._onNodeLeave()}
            @click=${()=>this._onNodeClick(n+1,f)}>
            ${this.showGradients&&i&&Math.abs(i.outputGrad[f])>.01?N`
              <circle cx="${h.x}" cy="${h.y}" r="18"
                fill="${i.outputGrad[f]>0?"rgba(34,197,94,"+Math.min(Math.abs(i.outputGrad[f])*10,.8)+")":"rgba(239,68,68,"+Math.min(Math.abs(i.outputGrad[f])*10,.8)+")"}" />
            `:""}
            <circle cx="${h.x}" cy="${h.y}" r="14"
              fill="#f59e0b" fill-opacity="${.3+Math.min(s.output[f],1)*.7}"
              stroke="#f59e0b" stroke-width="1.5" />
            <text x="${h.x}" y="${h.y-3}" class="value-label" font-size="7" fill="#94a3b8">${f+1}</text>
            <text x="${h.x}" y="${h.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${(s.output[f]*100).toFixed(0)}%</text>
          </g>
        `)}

        <!-- Masked output nodes -->
        ${O.map((h,f)=>{const _=s.mask[f]===0,S=_?"#ef4444":"#22c55e",X=_?0:s.masked[f];return N`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(n+2,f)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(n+2,f)}>
              <circle cx="${h.x}" cy="${h.y}" r="14"
                fill="${S}" fill-opacity="${_?.3:.3+Math.min(X,1)*.7}"
                stroke="${S}" stroke-width="1.5" />
              <text x="${h.x}" y="${h.y-3}" class="value-label" font-size="7" fill="#94a3b8">${f+1}</text>
              <text x="${h.x}" y="${h.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${_?"✕":(X*100).toFixed(0)+"%"}</text>
            </g>
          `})}

      </svg>
      <div class="legend">
        Linjetjocklek = viktstyrka | Färg: blå=positiv, röd=negativ${this.showGradients?" | Nodglöd = gradientstyrka":""}
      </div>
    `}_nodePositions(t,e,s,i,n=0){const a=n+(s-(t-1)*i)/2,l=[];for(let o=0;o<t;o++)l.push({x:e,y:a+o*i});return l}_renderConnections(t,e,s,i,n,a){const l=[];let o=0;for(let u=0;u<e.length;u++)for(let p=0;p<t.length;p++)o=Math.max(o,Math.abs(s[u][p]));o===0&&(o=1);const c=this._hoveredNode;for(let u=0;u<e.length;u++)for(let p=0;p<t.length;p++){const g=s[u][p],b=Math.abs(g)/o;if(b<.15)continue;const d=t[p],$=e[u],y=!c||c.layer===n&&c.index===p||c.layer===a&&c.index===u;let v;if(this.showGradients&&i){const k=i[u][p],O=Math.min(Math.abs(k)*20,1);v=k>0?`rgba(34, 197, 94, ${.15+O*.7})`:`rgba(239, 68, 68, ${.15+O*.7})`}else v=g>0?`rgba(96, 165, 250, ${.1+b*.5})`:`rgba(244, 114, 182, ${.1+b*.5})`;const m=this.showGradients&&i?i[u][p]:null,x=m!==null?`Vikt: ${g.toFixed(4)} | Gradient: ${m.toFixed(4)}`:`Vikt: ${g.toFixed(4)}`;l.push(N`<line
          x1="${d.x}" y1="${d.y}"
          x2="${$.x}" y2="${$.y}"
          stroke="${v}"
          stroke-width="${.5+b*2.5}"
          opacity="${y?1:.05}"
        ><title>${x}</title></line>`)}return l}_renderInteractiveNode(t,e,s,i,n,a,l,o){const u=.3+Math.min(Math.abs(e),1)*.7;let p="none";if(a&&Math.abs(a)>.01){const g=Math.min(Math.abs(a)*10,1);p=a>0?`rgba(34, 197, 94, ${g*.8})`:`rgba(239, 68, 68, ${g*.8})`}return N`
      <g class="node-interactive"
        @mouseenter=${()=>this._onNodeEnter(l,o)}
        @mouseleave=${()=>this._onNodeLeave()}
        @click=${()=>this._onNodeClick(l,o)}>
        ${p!=="none"?N`<circle cx="${t.x}" cy="${t.y}" r="${n+4}" fill="${p}" />`:""}
        <circle
          cx="${t.x}" cy="${t.y}" r="${n}"
          fill="${i}"
          fill-opacity="${u}"
          stroke="${i}"
          stroke-width="1.5"
        />
        <text x="${t.x}" y="${t.y}" class="value-label">${s}</text>
      </g>
    `}}z(at,"properties",{data:{type:Object},showGradients:{type:Boolean},_hoveredNode:{state:!0},_selectedNode:{state:!0}}),z(at,"styles",ht`
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
  `);customElements.define("nn-visualizer",at);class ot extends L{constructor(){super(),this.hiddenLayerCount=1,this.hiddenNodeCounts=[12],this.nn=new xt(this.hiddenNodeCounts),this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this.nnData=this.nn.getVisualizationData(),this.waitingForNn=!1,this._selectedNode=null,this.showGradients=!1,this.trainingCount=100,this.isTraining=!1,this.trainingProgress=0,this.gameMode="human-vs-nn",this.stats={wins:0,losses:0,draws:0}}render(){return w`
      <h1>Neuralt Nätverk spelar TicTacToe</h1>
      <p class="subtitle">Se hur ett neuralt nätverk lär sig spela genom träning med backpropagation</p>

      <div class="main-layout">
        <div class="sidebar">
          <div class="game-section">
            <div class="board-area">
              <ttt-board
                .board=${this.board}
                .winLine=${this.winLine}
                ?disabled=${this.gameOver||this.currentPlayer===-1||this.isTraining}
                @cell-click=${this._onCellClick}
              ></ttt-board>
              ${this.gameOver?w`
                <div class="status ${this.winner===1?"win":this.winner===-1?"lose":"draw"}">
                  ${this.status}
                </div>
              `:""}
              ${!this.gameOver&&this.currentPlayer===1?w`
                <button class="ai-suggest" @click=${this._playAiSuggestion}>Spela AI:s förslag</button>
              `:""}
              ${this.waitingForNn?w`
                <button class="primary ai-suggest" @click=${this._playNnMove}>Spela AI:s drag</button>
              `:""}
            </div>
          </div>

          <div class="controls">
            <div class="control-group">
              <h3>Spel</h3>
              <button @click=${this._newGame}>Nytt spel</button>
              <button class="danger" @click=${this._resetNN}>Nollställ nätverk</button>
              <div class="stat-row">
                <span>Dolda lager:</span>
                <select @change=${this._onLayerCountChange}>
                  <option value="1" ?selected=${this.hiddenLayerCount===1}>1</option>
                  <option value="2" ?selected=${this.hiddenLayerCount===2}>2</option>
                </select>
              </div>
              ${this.hiddenNodeCounts.map((t,e)=>w`
                <div class="stat-row">
                  <span>${this.hiddenLayerCount===1?"Noder:":`Lager ${e+1}:`}</span>
                  <select @change=${s=>this._onNodeCountChange(e,parseInt(s.target.value))}>
                    ${[4,8,12,16,24].map(s=>w`
                      <option value="${s}" ?selected=${t===s}>${s}</option>
                    `)}
                  </select>
                </div>
              `)}
              <select @change=${t=>this.trainingCount=parseInt(t.target.value)}>
                <option value="10">10 spel</option>
                <option value="100" selected>100 spel</option>
                <option value="500">500 spel</option>
                <option value="1000">1 000 spel</option>
                <option value="5000">5 000 spel</option>
                <option value="10000">10 000 spel</option>
                <option value="50000">50 000 spel</option>
                <option value="100000">100 000 spel</option>
              </select>
              <button class="primary" @click=${this._train} ?disabled=${this.isTraining}>
                ${this.isTraining?"Tränar...":"Träna nätverket"}
              </button>
              ${this.isTraining?w`
                <div class="training-bar">
                  <div class="training-bar-fill" style="width:${this.trainingProgress}%"></div>
                </div>
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
            </div>
          </div>
          ${this._renderNodeDetail()}
        </div>

        <div class="nn-section">
          <nn-visualizer
            .data=${this.nnData}
            .showGradients=${this.showGradients}
            @node-select=${t=>this._selectedNode=t.detail.node}
          ></nn-visualizer>
        </div>
      </div>
    `}_onCellClick(t){const{index:e}=t.detail;if(this.gameOver||this.board[e]!==0||this.currentPlayer!==1||(this._makeMove(e,1),this.gameOver))return;this.currentPlayer=-1;const s=this.board.map(i=>i*-1);this.nn.forward(s),this.nnData=this.nn.getVisualizationData(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_playNnMove(){if(!this.waitingForNn||this.gameOver)return;this.waitingForNn=!1;const t=this.board.map(s=>s*-1),e=this.nn.chooseMove(t,!0);this.nnData=this.nn.getVisualizationData(),this._makeMove(e,-1),this.gameOver||(this.currentPlayer=1,this.nn.forward([...this.board]),this.nnData=this.nn.getVisualizationData(),this.status="Ditt drag (X)")}_playAiSuggestion(){if(this.gameOver||this.currentPlayer!==1)return;const t=this.nn.forward([...this.board]);let e=-1,s=-1;for(let n=0;n<9;n++)t[n]>s&&(s=t[n],e=n);if(this._makeMove(e,1),this.gameOver)return;this.currentPlayer=-1;const i=this.board.map(n=>n*-1);this.nn.forward(i),this.nnData=this.nn.getVisualizationData(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_makeMove(t,e){const s=[...this.board];s[t]=e,this.board=s;const i=this._checkGameOver(this.board);i&&(this.gameOver=!0,this.winner=i.winner,this.winLine=i.line||[],i.winner===1?(this.status="Du vann!",this.stats={...this.stats,wins:this.stats.wins+1},this._trainOnGame(-1)):i.winner===-1?(this.status="Nätverket vann!",this.stats={...this.stats,losses:this.stats.losses+1},this._trainOnGame(1)):(this.status="Oavgjort!",this.stats={...this.stats,draws:this.stats.draws+1},this._trainOnGame(.1)))}_trainOnGame(t){if(this.nnData){const e=this.board.map(s=>s*-1);for(let s=0;s<9;s++)if(this.board[s]===-1){this.nn.backpropagate(e,s,t);break}this.nnData=this.nn.getVisualizationData()}}_checkGameOver(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const s of e){const[i,n,a]=s;if(t[i]!==0&&t[i]===t[n]&&t[n]===t[a])return{winner:t[i],line:s}}return t.every(s=>s!==0)?{winner:0}:null}_newGame(){this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.waitingForNn=!1,this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this.nnData=this.nn.getVisualizationData()}_resetNN(){this.nn.reset(),this.stats={wins:0,losses:0,draws:0},this._newGame()}_onLayerCountChange(t){const e=parseInt(t.target.value);if(e>this.hiddenLayerCount)for(;this.hiddenNodeCounts.length<e;)this.hiddenNodeCounts=[...this.hiddenNodeCounts,12];else this.hiddenNodeCounts=this.hiddenNodeCounts.slice(0,e);this.hiddenLayerCount=e,this._recreateNN()}_onNodeCountChange(t,e){this.hiddenNodeCounts=this.hiddenNodeCounts.map((s,i)=>i===t?e:s),this._recreateNN()}_renderNodeDetail(){const t=this._selectedNode;if(!t||!this.nnData)return"";const{hiddenSizes:e,weights:s,biases:i,activations:n,gradients:a}=this.nnData,l=e.length;if(t.layer===0){const o=n.input[t.index],c=o===1?"X (egen)":o===-1?"O (motståndare)":"Tom",u=[],p=s[0];for(let g=0;g<e[0];g++)u.push({to:g,w:p[g][t.index]});return u.sort((g,b)=>Math.abs(b.w)-Math.abs(g.w)),w`<div class="detail-panel">
        <h4>Input ${t.index+1}</h4>
        <div class="detail-row"><span>Värde:</span><span class="val">${c} (${o})</span></div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${u.map(({to:g,w:b})=>w`
            <span class="detail-weight">H${l>1?"1·":""}${g+1}: <span class="wval ${b>=0?"pos":"neg"}">${b.toFixed(3)}</span></span>
          `)}
        </div>
      </div>`}if(t.layer>=1&&t.layer<=l){const o=t.layer-1,c=t.index,u=n.hiddenRaw[o][c],p=n.hidden[o][c],g=i[o][c],b=this.showGradients&&a?a.hiddenGrad[o][c]:null,d=s[o],$=o===0?9:e[o-1],y=[];for(let h=0;h<$;h++)y.push({from:h,w:d[c][h]});y.sort((h,f)=>Math.abs(f.w)-Math.abs(h.w));const v=o===0?"In":`H${o}`,m=s[o+1],x=o<l-1?e[o+1]:9,k=[];for(let h=0;h<x;h++)k.push({to:h,w:m[h][c]});k.sort((h,f)=>Math.abs(f.w)-Math.abs(h.w));const O=o<l-1?`H${o+2}`:"Out",Y=o===0?n.input:n.hidden[o-1],C=[];for(let h=0;h<$;h++){const f=d[c][h],_=Y[h];_!==0&&C.push({label:`${v}${h+1}`,w:f,a:_,product:f*_})}return C.sort((h,f)=>Math.abs(f.product)-Math.abs(h.product)),w`<div class="detail-panel">
        <h4>${l===1?`Dolt lager, nod ${c+1}`:`Dolt ${o+1}, nod ${c+1}`}</h4>
        <div class="formula">
          <span style="color:#94a3b8;">ReLU(</span>${g.toFixed(3)}${C.map(h=>w`<span> ${h.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(h.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${h.a.toFixed(1)}</span></span>`)})<br>
          <span style="color:#94a3b8;">= ReLU(${u.toFixed(4)}) = <span style="color:#e2e8f0;font-weight:600;">${p.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${g.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${u.toFixed(4)}</span></div>
        <div class="detail-row"><span>Efter ReLU:</span><span class="val">${p.toFixed(4)}</span></div>
        ${b!==null?w`<div class="detail-row"><span>Gradient:</span><span class="val">${b.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${y.map(({from:h,w:f})=>w`<span class="detail-weight">${v}${h+1}: <span class="wval ${f>=0?"pos":"neg"}">${f.toFixed(3)}</span></span>`)}
        </div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${k.map(({to:h,w:f})=>w`<span class="detail-weight">${O}${h+1}: <span class="wval ${f>=0?"pos":"neg"}">${f.toFixed(3)}</span></span>`)}
        </div>
      </div>`}if(t.layer===l+1){const o=t.index,c=n.outputRaw[o],u=n.output[o],p=i[i.length-1][o],g=this.showGradients&&a?a.outputGrad[o]:null,b=s[s.length-1],d=e[l-1],$=[];for(let m=0;m<d;m++)$.push({from:m,w:b[o][m]});$.sort((m,x)=>Math.abs(x.w)-Math.abs(m.w));const y=n.hidden[l-1],v=[];for(let m=0;m<d;m++){const x=b[o][m],k=y[m];k!==0&&v.push({label:`H${l>1?l:""}${m+1}`,w:x,a:k,product:x*k})}return v.sort((m,x)=>Math.abs(x.product)-Math.abs(m.product)),w`<div class="detail-panel">
        <h4>Output ${o+1} (ruta ${o+1})</h4>
        <div class="formula">
          ${p.toFixed(3)}${v.map(m=>w`<span> ${m.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(m.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${m.a.toFixed(2)}</span></span>`)}<br>
          <span style="color:#94a3b8;">= ${c.toFixed(4)} → softmax → <span style="color:#e2e8f0;font-weight:600;">${(u*100).toFixed(1)}%</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${p.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${c.toFixed(4)}</span></div>
        <div class="detail-row"><span>Softmax:</span><span class="val">${(u*100).toFixed(1)}%</span></div>
        ${g!==null?w`<div class="detail-row"><span>Gradient:</span><span class="val">${g.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${$.map(({from:m,w:x})=>w`<span class="detail-weight">H${l>1?l:""}${m+1}: <span class="wval ${x>=0?"pos":"neg"}">${x.toFixed(3)}</span></span>`)}
        </div>
      </div>`}if(t.layer===l+2){const o=t.index,c=n.mask[o]===0,u=c?0:n.masked[o];return w`<div class="detail-panel">
        <h4>Filtrerat ${o+1} (ruta ${o+1})</h4>
        <div class="detail-row"><span>Status:</span><span class="val">${c?"Maskerad (upptagen)":"Tillgänglig"}</span></div>
        <div class="detail-row"><span>Sannolikhet:</span><span class="val">${(u*100).toFixed(1)}%</span></div>
      </div>`}return""}_recreateNN(){this.nn=new xt(this.hiddenNodeCounts),this.nn.forward([0,0,0,0,0,0,0,0,0]),this.nnData=this.nn.getVisualizationData(),this.stats={wins:0,losses:0,draws:0},this._newGame()}async _train(){this.isTraining=!0,this.trainingProgress=0;const t=Math.max(1,Math.floor(this.trainingCount/20));let e=0;const s=()=>new Promise(i=>{setTimeout(()=>{const n=Math.min(t,this.trainingCount-e);this.nn.train(n),e+=n,this.trainingProgress=e/this.trainingCount*100,this.requestUpdate(),i()},0)});for(;e<this.trainingCount;)await s();this.isTraining=!1,this.trainingProgress=0,this.nn.forward(this.board),this.nnData=this.nn.getVisualizationData(),this.requestUpdate()}}z(ot,"properties",{board:{type:Array},currentPlayer:{type:Number},gameOver:{type:Boolean},winner:{type:Number},winLine:{type:Array},status:{type:String},nnData:{type:Object},showGradients:{type:Boolean},trainingCount:{type:Number},isTraining:{type:Boolean},gameMode:{type:String},stats:{type:Object},hiddenLayerCount:{type:Number},hiddenNodeCounts:{type:Array},waitingForNn:{type:Boolean},_selectedNode:{state:!0}}),z(ot,"styles",ht`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      padding: 8px 16px;
      overflow: hidden;
      box-sizing: border-box;
    }

    .main-layout {
      display: flex;
      gap: 16px;
      flex: 1;
      min-height: 0;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      min-height: 0;
      overflow: hidden;
    }

    h1 {
      text-align: center;
      font-size: 1.2rem;
      color: #f1f5f9;
      margin-bottom: 1px;
      flex-shrink: 0;
    }

    .subtitle {
      text-align: center;
      color: #64748b;
      font-size: 0.75rem;
      margin-bottom: 8px;
      flex-shrink: 0;
    }

    .game-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .board-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
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

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      width: 240px;
    }

    .controls .control-group {
      width: 100%;
    }

    .control-group {
      background: #1e293b;
      border-radius: 8px;
      padding: 10px 12px;
      border: 1px solid #334155;
    }

    .control-group h3 {
      margin: 0 0 8px 0;
      font-size: 0.75rem;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

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

    .nn-section {
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

    .nn-section h2 {
      text-align: center;
      font-size: 0.85rem;
      color: #cbd5e1;
      margin: 0 0 4px 0;
      flex-shrink: 0;
    }

    .training-bar {
      height: 4px;
      background: #334155;
      border-radius: 2px;
      margin: 8px 0;
      overflow: hidden;
    }

    .training-bar-fill {
      height: 100%;
      background: #60a5fa;
      border-radius: 2px;
      transition: width 0.2s;
    }

    .detail-panel {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 0.7rem;
      color: #cbd5e1;
      width: 240px;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      box-sizing: border-box;
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
    .detail-panel h4 {
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
  `);customElements.define("nn-demo-app",ot);
