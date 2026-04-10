var Dt=Object.defineProperty;var Gt=(d,t,e)=>t in d?Dt(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var D=(d,t,e)=>Gt(d,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,ft=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),yt=new WeakMap;let zt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ft&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&yt.set(e,t))}return t}toString(){return this.cssText}};const Ut=d=>new zt(typeof d=="string"?d:d+"",void 0,gt),mt=(d,...t)=>{const e=d.length===1?d[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+d[o+1],d[0]);return new zt(e,d,gt)},It=(d,t)=>{if(ft)d.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=it.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,d.appendChild(s)}},bt=ft?d=>d:d=>d instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ut(e)})(d):d;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jt,defineProperty:Vt,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:Wt,getOwnPropertySymbols:qt,getPrototypeOf:Kt}=Object,F=globalThis,xt=F.trustedTypes,Xt=xt?xt.emptyScript:"",at=F.reactiveElementPolyfillSupport,Z=(d,t)=>d,dt={toAttribute(d,t){switch(t){case Boolean:d=d?Xt:null;break;case Object:case Array:d=d==null?d:JSON.stringify(d)}return d},fromAttribute(d,t){let e=d;switch(t){case Boolean:e=d!==null;break;case Number:e=d===null?null:Number(d);break;case Object:case Array:try{e=JSON.parse(d)}catch{e=null}}return e}},Pt=(d,t)=>!jt(d,t),wt={attribute:!0,type:String,converter:dt,reflect:!1,useDefault:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Vt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=Bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(Z("elementProperties")))return;const t=Kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Z("properties"))){const e=this.properties,s=[...Wt(e),...qt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(bt(i))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return It(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:dt).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),h=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:dt;this._$Em=i;const f=h.fromAttribute(e,l.type);this[i]=f??((n=this._$Ej)==null?void 0:n.get(i))??f,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){var n;if(t!==void 0){const l=this.constructor;if(i===!1&&(o=this[t]),s??(s=l.getPropertyOptions(t)),!((s.hasChanged??Pt)(o,e)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:l}=n,h=this[o];l!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,n,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[Z("elementProperties")]=new Map,W[Z("finalized")]=new Map,at==null||at({ReactiveElement:W}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,_t=d=>d,nt=J.trustedTypes,At=nt?nt.createPolicy("lit-html",{createHTML:d=>d}):void 0,Ht="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,Rt="?"+L,Zt=`<${Rt}>`,V=document,Y=()=>V.createComment(""),Q=d=>d===null||typeof d!="object"&&typeof d!="function",vt=Array.isArray,Jt=d=>vt(d)||typeof(d==null?void 0:d[Symbol.iterator])=="function",rt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Mt=/>/g,G=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Nt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Ft=d=>(t,...e)=>({_$litType$:d,strings:t,values:e}),k=Ft(1),H=Ft(2),q=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Ct=new WeakMap,U=V.createTreeWalker(V,129);function Tt(d,t){if(!vt(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return At!==void 0?At.createHTML(t):t}const Yt=(d,t)=>{const e=d.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=X;for(let l=0;l<e;l++){const h=d[l];let f,c,a=-1,r=0;for(;r<h.length&&(n.lastIndex=r,c=n.exec(h),c!==null);)r=n.lastIndex,n===X?c[1]==="!--"?n=kt:c[1]!==void 0?n=Mt:c[2]!==void 0?(Lt.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=G):c[3]!==void 0&&(n=G):n===G?c[0]===">"?(n=i??X,a=-1):c[1]===void 0?a=-2:(a=n.lastIndex-c[2].length,f=c[1],n=c[3]===void 0?G:c[3]==='"'?Nt:St):n===Nt||n===St?n=G:n===kt||n===Mt?n=X:(n=G,i=void 0);const p=n===G&&d[l+1].startsWith("/>")?" ":"";o+=n===X?h+Zt:a>=0?(s.push(f),h.slice(0,a)+Ht+h.slice(a)+L+p):h+L+(a===-2?l:p)}return[Tt(d,o+(d[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class tt{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,h=this.parts,[f,c]=Yt(t,e);if(this.el=tt.createElement(f,s),U.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=U.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(Ht)){const r=c[n++],p=i.getAttribute(a).split(L),$=/([.?@])?(.*)/.exec(r);h.push({type:1,index:o,name:$[2],strings:p,ctor:$[1]==="."?te:$[1]==="?"?ee:$[1]==="@"?se:ot}),i.removeAttribute(a)}else a.startsWith(L)&&(h.push({type:6,index:o}),i.removeAttribute(a));if(Lt.test(i.tagName)){const a=i.textContent.split(L),r=a.length-1;if(r>0){i.textContent=nt?nt.emptyScript:"";for(let p=0;p<r;p++)i.append(a[p],Y()),U.nextNode(),h.push({type:2,index:++o});i.append(a[r],Y())}}}else if(i.nodeType===8)if(i.data===Rt)h.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(L,a+1))!==-1;)h.push({type:7,index:o}),a+=L.length-1}o++}}static createElement(t,e){const s=V.createElement("template");return s.innerHTML=t,s}}function K(d,t,e=d,s){var n,l;if(t===q)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=Q(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(d),i._$AT(d,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=K(d,i._$AS(d,t.values),i,s)),t}class Qt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??V).importNode(e,!0);U.currentNode=i;let o=U.nextNode(),n=0,l=0,h=s[0];for(;h!==void 0;){if(n===h.index){let f;h.type===2?f=new et(o,o.nextSibling,this,t):h.type===1?f=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(f=new ie(o,this,t)),this._$AV.push(f),h=s[++l]}n!==(h==null?void 0:h.index)&&(o=U.nextNode(),n++)}return U.currentNode=V,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),Q(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=tt.createElement(Tt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Qt(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new tt(t)),e}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new et(this.O(Y()),this.O(Y()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=_t(t).nextSibling;_t(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=K(this,t,e,0),n=!Q(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const l=t;let h,f;for(t=o[0],h=0;h<o.length-1;h++)f=K(this,l[s+h],e,h),f===q&&(f=this._$AH[h]),n||(n=!Q(f)||f!==this._$AH[h]),f===N?t=N:t!==N&&(t+=(f??"")+o[h+1]),this._$AH[h]=f}n&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class ee extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class se extends ot{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??N)===q)return;const s=this._$AH,i=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==N&&(s===N||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ie{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const lt=J.litHtmlPolyfillSupport;lt==null||lt(tt,et),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.3.2");const ne=(d,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new et(t.insertBefore(Y(),o),o,void 0,e??{})}return i._$AI(d),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis;class j extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return q}}var Et;j._$litElement$=!0,j.finalized=!0,(Et=I.litElementHydrateSupport)==null||Et.call(I,{LitElement:j});const ht=I.litElementPolyfillSupport;ht==null||ht({LitElement:j});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");const R={relu:{name:"ReLU",formula:"max(0, x)",fn:d=>Math.max(0,d),derivative:d=>d>0?1:0},sigmoid:{name:"Sigmoid",formula:"1 / (1 + e⁻ˣ)",fn:d=>1/(1+Math.exp(-d)),derivative:d=>{const t=1/(1+Math.exp(-d));return t*(1-t)}},tanh:{name:"Tanh",formula:"tanh(x)",fn:d=>Math.tanh(d),derivative:d=>1-Math.tanh(d)**2},leaky_relu:{name:"Leaky ReLU",formula:"x > 0 ? x : 0.01x",fn:d=>d>0?d:.01*d,derivative:d=>d>0?1:.01}};class Ot{constructor(t=[12],e=null,s="softmax"){this.hiddenSizes=t,this.hiddenActivations=e||t.map(()=>"relu"),this.outputActivation=s,this.layerSizes=[9,...t,9],this.weights=[],this.biases=[];for(let i=0;i<this.layerSizes.length-1;i++)this.weights.push(this.randomMatrix(this.layerSizes[i+1],this.layerSizes[i])),this.biases.push(new Array(this.layerSizes[i+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastInput=new Array(9).fill(0),this.lastHiddenRaw=t.map(i=>new Array(i).fill(0)),this.lastHidden=t.map(i=>new Array(i).fill(0)),this.lastOutputRaw=new Array(9).fill(0),this.lastOutput=new Array(9).fill(0),this.lastMasked=new Array(9).fill(0),this.lastMask=new Array(9).fill(1),this.lastGradients=null,this.learningRate=.05,this.trainingGames=0}randomMatrix(t,e){const s=[];for(let i=0;i<t;i++){s[i]=[];for(let o=0;o<e;o++)s[i][o]=(Math.random()-.5)*.5}return s}softmax(t){const e=Math.max(...t),s=t.map(o=>Math.exp(o-e)),i=s.reduce((o,n)=>o+n,0);return s.map(o=>o/i)}_getActivation(t){return R[t]||R.relu}forward(t){this.lastInput=[...t];let e=t;for(let n=0;n<this.hiddenSizes.length;n++){const l=this.hiddenSizes[n],h=this._getActivation(this.hiddenActivations[n]).fn,f=new Array(l).fill(0),c=new Array(l).fill(0);for(let a=0;a<l;a++){let r=this.biases[n][a];for(let p=0;p<e.length;p++)r+=this.weights[n][a][p]*e[p];f[a]=r,c[a]=h(r)}this.lastHiddenRaw[n]=f,this.lastHidden[n]=c,e=c}const s=this.weights.length-1;this.lastOutputRaw=new Array(9).fill(0);for(let n=0;n<9;n++){let l=this.biases[s][n];for(let h=0;h<e.length;h++)l+=this.weights[s][n][h]*e[h];this.lastOutputRaw[n]=l}if(this.outputActivation==="softmax")this.lastOutput=this.softmax(this.lastOutputRaw);else{const n=this._getActivation(this.outputActivation).fn;this.lastOutput=this.lastOutputRaw.map(l=>n(l))}this.lastMask=t.map(n=>n===0?1:0);const i=this.lastOutput.map((n,l)=>n*this.lastMask[l]),o=i.reduce((n,l)=>n+l,0);return this.lastMasked=o>0?i.map(n=>n/o):this.lastMask.map(n=>n/this.lastMask.reduce((l,h)=>l+h,0)),this.lastMasked}pickMove(t="greedy",e={}){const s=this.lastMasked;if(!s)return-1;switch(t){case"greedy":{let i=-1,o=-1;for(let n=0;n<9;n++)s[n]>o&&(o=s[n],i=n);return i}case"roulette":{const i=Math.random();let o=0;for(let n=0;n<9;n++)if(o+=s[n],i<o)return n;return 8}case"softmax":{const i=e.temperature||.5,o=this.lastOutputRaw.map((r,p)=>this.lastMask[p]?r/i:-1e9),n=Math.max(...o),l=o.map(r=>Math.exp(r-n)),h=l.reduce((r,p)=>r+p,0),f=l.map(r=>r/h),c=Math.random();let a=0;for(let r=0;r<9;r++)if(a+=f[r],c<a)return r;return 8}case"top-k":{const i=e.k||3,n=s.map((c,a)=>({p:c,i:a})).sort((c,a)=>a.p-c.p).slice(0,i).filter(c=>c.p>0),l=n.reduce((c,a)=>c+a.p,0),h=Math.random()*l;let f=0;for(const c of n)if(f+=c.p,h<f)return c.i;return n[n.length-1].i}case"epsilon-greedy":{const i=e.epsilon||.1;if(Math.random()<i){const l=[];for(let h=0;h<9;h++)s[h]>0&&l.push(h);return l[Math.floor(Math.random()*l.length)]}let o=-1,n=-1;for(let l=0;l<9;l++)s[l]>n&&(n=s[l],o=l);return o}default:return this.pickMove("greedy")}}chooseMove(t,e="roulette",s={}){return e===!0&&(e="greedy"),e===!1&&(e="roulette"),this.forward(t),this.pickMove(e,s)}_backpropAndUpdate(t,e=null){const s=[],i=[];for(let r=0;r<this.weights.length;r++)s.push(this.weights[r].map(p=>p.map(()=>0))),i.push(new Array(this.biases[r].length).fill(0));const o=this.hiddenSizes.map(r=>new Array(r).fill(0)),n=this.weights.length-1,l=this.hiddenSizes.length-1,h=this.lastHidden[l];for(let r=0;r<9;r++){i[n][r]=t[r];for(let p=0;p<h.length;p++)s[n][r][p]=t[r]*h[p]}const f=this._getActivation(this.hiddenActivations[l]).derivative;for(let r=0;r<this.hiddenSizes[l];r++){let p=0;for(let $=0;$<9;$++)p+=this.weights[n][$][r]*t[$];o[l][r]=p*f(this.lastHiddenRaw[l][r])}for(let r=l-1;r>=0;r--){const p=o[r+1],$=r+1;for(let v=0;v<this.hiddenSizes[r+1];v++){i[$][v]=p[v];for(let _=0;_<this.hiddenSizes[r];_++)s[$][v][_]=p[v]*this.lastHidden[r][_]}const g=this._getActivation(this.hiddenActivations[r]).derivative;for(let v=0;v<this.hiddenSizes[r];v++){let _=0;for(let y=0;y<this.hiddenSizes[r+1];y++)_+=this.weights[$][y][v]*p[y];o[r][v]=_*g(this.lastHiddenRaw[r][v])}}const c=o[0];for(let r=0;r<this.hiddenSizes[0];r++){i[0][r]=c[r];for(let p=0;p<9;p++)s[0][r][p]=c[r]*this.lastInput[p]}const a=e!=null?r=>Math.max(-e,Math.min(e,r)):r=>r;for(let r=0;r<this.weights.length;r++)for(let p=0;p<this.weights[r].length;p++){this.biases[r][p]+=this.learningRate*a(i[r][p]);for(let $=0;$<this.weights[r][p].length;$++)this.weights[r][p][$]+=this.learningRate*a(s[r][p][$])}return{outputGrad:t,hiddenGrad:o,weightsGrad:s,biasesGrad:i}}backpropagate(t,e,s){this.forward(t);const i=new Array(9).fill(0);for(let o=0;o<9;o++)i[o]=o===e?s*(1-this.lastOutput[o]):s*-this.lastOutput[o];return this.lastGradients=this._backpropAndUpdate(i,1),this.lastGradients}minimax(t,e,s=-1/0,i=1/0){const o=this.checkWinner(t);if(o===1)return{score:1,move:-1};if(o===-1)return{score:-1,move:-1};const n=[];for(let h=0;h<9;h++)t[h]===0&&n.push(h);if(n.length===0)return{score:0,move:-1};let l=n[0];if(e===1){let h=-1/0;for(const f of n){t[f]=e;const{score:c}=this.minimax(t,-1,s,i);if(t[f]=0,c>h&&(h=c,l=f),s=Math.max(s,c),i<=s)break}return{score:h,move:l}}else{let h=1/0;for(const f of n){t[f]=e;const{score:c}=this.minimax(t,1,s,i);if(t[f]=0,c<h&&(h=c,l=f),i=Math.min(i,c),i<=s)break}return{score:h,move:l}}}supervisedStep(t,e,s=!1){this.forward(t);const i=Array.isArray(e)?e:[e],o=new Array(9).fill(0);if(s&&i.length>1){const l=[3,1,3,1,5,1,3,1,3];let h=0;for(const f of i)h+=l[f];for(const f of i)o[f]=l[f]/h}else{const l=1/i.length;for(const h of i)o[h]=l}const n=new Array(9).fill(0);for(let l=0;l<9;l++)n[l]=-(this.lastOutput[l]-o[l]);this._backpropAndUpdate(n,null)}_collectAllPositions(){const t=new Map,e=(s,i)=>{if(this.checkWinner(s)!==0)return;const o=[];for(let a=0;a<9;a++)s[a]===0&&o.push(a);if(o.length===0)return;const n=s.join(",")+"|"+i;if(t.has(n))return;const l=this.minimax([...s],i),h=l.score,f=[];for(const a of o){s[a]=i;const{score:r}=this.minimax(s,-i);s[a]=0,r===h&&f.push(a)}const c=s.map(a=>a*i);t.set(n,{perspective:c,bestMoves:f,bestMove:l.move});for(const a of o)s[a]=i,e(s,-i),s[a]=0};return e(new Array(9).fill(0),1),[...t.values()]}train(t,e={}){const{opponent:s="minimax",discountFactor:i=.9,epsilon:o=.3,epsilonDecay:n=.999,lrDecay:l=.9999,onProgress:h=null}=e;let f=o;if(s==="minimax"||s==="minimax_rules"){const c=this._cachedPositions||this._collectAllPositions();this._cachedPositions=c;let a;if(s==="minimax_rules"){const $=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];a=[];for(const g of c){const v=g.perspective;let _=1;g.bestMoves.length===1&&(_=3);for(const[y,A,S]of $){const x=[v[y],v[A],v[S]],M=x.filter(b=>b===1).length,T=x.filter(b=>b===-1).length;if(x.filter(b=>b===0).length===1&&(M===2||T===2)){_=15;break}}_<10&&g.bestMoves.length===1&&g.bestMoves[0]===4&&(_=10),_<5&&v.filter(A=>A!==0).length<=2&&(_=5);for(let y=0;y<_;y++)a.push(g)}}else a=c;const r=Math.max(1,Math.ceil(t/a.length));let p=0;for(let $=0;$<r;$++){for(let g=a.length-1;g>0;g--){const v=Math.floor(Math.random()*(g+1));[a[g],a[v]]=[a[v],a[g]]}for(const g of a){if(p>=t)break;this.supervisedStep(g.perspective,g.bestMoves||g.bestMove,s==="minimax_rules"),this.trainingGames++,p++,h&&p%10===0&&h(p,t)}this.learningRate*=l}return}for(let c=0;c<t;c++){const a=[],r=[],p=new Array(9).fill(0);let $=1,g=0;const v=Math.random()<.5?1:-1;for(;;){const y=p.map(x=>x*$);let A;if($===v||s==="self"){if(Math.random()<f){const x=[];for(let M=0;M<9;M++)p[M]===0&&x.push(M);A=x[Math.floor(Math.random()*x.length)]}else A=this.chooseMove(y,!1);$===v?a.push({board:[...y],action:A}):r.push({board:[...y],action:A})}else{const x=[];for(let M=0;M<9;M++)p[M]===0&&x.push(M);A=x[Math.floor(Math.random()*x.length)]}if(p[A]=$,g=this.checkWinner(p),g!==0||p.every(x=>x!==0))break;$*=-1}const _=g===v?1:g===-v?-1:.2;for(let y=a.length-1;y>=0;y--){const A=Math.pow(i,a.length-1-y);this.backpropagate(a[y].board,a[y].action,_*A)}if(s==="self"&&r.length>0){const y=g===-v?1:g===v?-1:.2;for(let A=r.length-1;A>=0;A--){const S=Math.pow(i,r.length-1-A);this.backpropagate(r[A].board,r[A].action,y*S)}}f*=n,this.learningRate*=l,this.trainingGames++,h&&c%10===0&&h(c,t)}}checkWinner(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[s,i,o]of e)if(t[s]!==0&&t[s]===t[i]&&t[i]===t[o])return t[s];return 0}getVisualizationData(){return{hiddenSizes:this.hiddenSizes,hiddenActivations:this.hiddenActivations,outputActivation:this.outputActivation,weights:this.weights,biases:this.biases,activations:{input:this.lastInput,hiddenRaw:this.lastHiddenRaw,hidden:this.lastHidden,outputRaw:this.lastOutputRaw,output:this.lastOutput,mask:this.lastMask,masked:this.lastMasked},gradients:this.lastGradients,trainingGames:this.trainingGames}}reset(){this.weights=[],this.biases=[];for(let t=0;t<this.layerSizes.length-1;t++)this.weights.push(this.randomMatrix(this.layerSizes[t+1],this.layerSizes[t])),this.biases.push(new Array(this.layerSizes[t+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastHiddenRaw=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.lastHidden=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.learningRate=.05,this.trainingGames=0,this.lastGradients=null,this._cachedPositions=null}}class ct extends j{constructor(){super(),this.board=[0,0,0,0,0,0,0,0,0],this.disabled=!1,this.winLine=[]}render(){return k`
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
    `}_onCellClick(t){this.disabled||this.board[t]!==0||this.dispatchEvent(new CustomEvent("cell-click",{detail:{index:t},bubbles:!0,composed:!0}))}}D(ct,"properties",{board:{type:Array},disabled:{type:Boolean},winLine:{type:Array}}),D(ct,"styles",mt`
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
  `);customElements.define("ttt-board",ct);class pt extends j{constructor(){super(),this.data=null,this.showGradients=!1,this._hoveredNode=null,this._selectedNode=null}_onNodeEnter(t,e){this._hoveredNode={layer:t,index:e}}_onNodeLeave(){this._hoveredNode=null}_onNodeClick(t,e){this._selectedNode&&this._selectedNode.layer===t&&this._selectedNode.index===e?this._selectedNode=null:this._selectedNode={layer:t,index:e},this.dispatchEvent(new CustomEvent("node-select",{detail:{node:this._selectedNode},bubbles:!0,composed:!0}))}render(){var B,w;if(!this.data)return k`<p style="text-align:center;color:#64748b;">Laddar nätverk...</p>`;const{hiddenSizes:t,hiddenActivations:e,outputActivation:s,weights:i,activations:o,gradients:n}=this.data,l=t.length,h=2+l+1,f=l>=3?1100:900,c=35,a=55,r=9*a,p=c+r,$=50,g=[];for(let u=0;u<h;u++)g.push($+u*((f-2*$)/(h-1)));const v=["Input (9)"],_=["Brädets tillstånd"];for(let u=0;u<l;u++){const m=l===1?`Dolt lager (${t[u]})`:`Dolt ${u+1} (${t[u]})`;v.push(m);const C=(e==null?void 0:e[u])||"relu",O=((B=R[C])==null?void 0:B.name)||"ReLU";_.push(`${O}-aktivering`)}v.push("Output (9)");const y=s==="softmax"?"Softmax":((w=R[s])==null?void 0:w.name)||s;_.push(y),v.push("Filtrerat (9)");const A={greedy:"Greedy",roulette:"Roulette wheel",softmax:"Softmax","top-k":"Top-k","epsilon-greedy":"Epsilon-greedy"};_.push(A[this.moveStrategy]||"Ogiltiga drag = 0");const S=this._nodePositions(9,g[0],r,a,c),x=t.map((u,m)=>{const C=Math.min(a,r/u);return this._nodePositions(u,g[1+m],r,C,c)}),M=1+l,T=M+1,P=this._nodePositions(9,g[M],r,a,c),b=this._nodePositions(9,g[T],r,a,c),E=u=>u===1?"X":u===-1?"O":"·",z=this._hoveredNode;return k`
      <svg viewBox="0 0 ${f} ${p}" preserveAspectRatio="xMidYMin meet">
        <!-- Layer labels -->
        ${g.map((u,m)=>H`
          <text x="${u}" y="14" class="layer-label">${v[m]}</text>
          <text x="${u}" y="28" class="label">${_[m]}</text>
        `)}

        <!-- Connections: Input → Hidden[0] -->
        ${this._renderConnections(S,x[0],i[0],this.showGradients&&n?n.weightsGrad[0]:null,0,1)}

        <!-- Connections between hidden layers -->
        ${x.slice(0,-1).map((u,m)=>this._renderConnections(u,x[m+1],i[m+1],this.showGradients&&n?n.weightsGrad[m+1]:null,m+1,m+2))}

        <!-- Connections: Last hidden → Output -->
        ${this._renderConnections(x[l-1],P,i[i.length-1],this.showGradients&&n?n.weightsGrad[i.length-1]:null,l,l+1)}

        <!-- Connections: Output → Masked (simple 1:1) -->
        ${P.map((u,m)=>{const C=b[m],O=o.mask[m]===0,st=z&&!(z.layer===l+1&&z.index===m||z.layer===l+2&&z.index===m);return H`<line
            x1="${u.x}" y1="${u.y}"
            x2="${C.x}" y2="${C.y}"
            stroke="${O?"#ef4444":this.chosenMove===m?"#22c55e":"#eab308"}"
            stroke-width="1.5"
            stroke-opacity="${st?.05:.6}"
            ${O?H`stroke-dasharray="4,3"`:""}
          />`})}

        <!-- Input nodes -->
        ${S.map((u,m)=>{const C=o.input[m],O=C===1?"#60a5fa":C===-1?"#f472b6":"#64748b";return H`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(0,m)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(0,m)}>
              <rect x="${u.x-24}" y="${u.y-14}" width="48" height="28" rx="6"
                fill="${O}" fill-opacity="0.15" stroke="${O}" stroke-width="1.5" />
              <text x="${u.x-12}" y="${u.y+1}" class="value-label" text-anchor="middle"
                fill="#94a3b8" font-size="10" font-weight="600">${m+1}</text>
              <text x="${u.x+12}" y="${u.y+1}" class="value-label" text-anchor="middle"
                fill="${O}" font-size="12" font-weight="700">${E(C)}</text>
            </g>
          `})}

        <!-- Hidden layer nodes -->
        ${x.map((u,m)=>u.map((C,O)=>this._renderInteractiveNode(C,o.hidden[m][O],o.hidden[m][O].toFixed(2),"#a78bfa",10,this.showGradients&&n?n.hiddenGrad[m][O]:0,m+1,O)))}

        <!-- Output nodes -->
        ${P.map((u,m)=>H`
          <g class="node-interactive"
            @mouseenter=${()=>this._onNodeEnter(l+1,m)}
            @mouseleave=${()=>this._onNodeLeave()}
            @click=${()=>this._onNodeClick(l+1,m)}>
            ${this.showGradients&&n&&Math.abs(n.outputGrad[m])>.01?H`
              <circle cx="${u.x}" cy="${u.y}" r="18"
                fill="${n.outputGrad[m]>0?"rgba(34,197,94,"+Math.min(Math.abs(n.outputGrad[m])*10,.8)+")":"rgba(239,68,68,"+Math.min(Math.abs(n.outputGrad[m])*10,.8)+")"}" />
            `:""}
            <circle cx="${u.x}" cy="${u.y}" r="14"
              fill="#f59e0b" fill-opacity="${.3+Math.min(o.output[m],1)*.7}"
              stroke="#f59e0b" stroke-width="1.5" />
            <text x="${u.x}" y="${u.y-3}" class="value-label" font-size="7" fill="#94a3b8">${m+1}</text>
            <text x="${u.x}" y="${u.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${(o.output[m]*100).toFixed(0)}%</text>
          </g>
        `)}

        <!-- Masked output nodes -->
        ${b.map((u,m)=>{const C=o.mask[m]===0,O=this.chosenMove===m,st=C?"#ef4444":O?"#22c55e":"#eab308",$t=C?0:o.masked[m];return H`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(l+2,m)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(l+2,m)}>
              <circle cx="${u.x}" cy="${u.y}" r="14"
                fill="${st}" fill-opacity="${C?.3:.3+Math.min($t,1)*.7}"
                stroke="${st}" stroke-width="1.5" />
              <text x="${u.x}" y="${u.y-3}" class="value-label" font-size="7" fill="#94a3b8">${m+1}</text>
              <text x="${u.x}" y="${u.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${C?"✕":($t*100).toFixed(0)+"%"}</text>
            </g>
          `})}

      </svg>
      <div class="legend">
        Linjetjocklek = viktstyrka | Färg: blå=positiv, röd=negativ${this.showGradients?" | Nodglöd = gradientstyrka":""}
      </div>
    `}_nodePositions(t,e,s,i,o=0){const n=o+(s-(t-1)*i)/2,l=[];for(let h=0;h<t;h++)l.push({x:e,y:n+h*i});return l}_renderConnections(t,e,s,i,o,n){const l=[];let h=0;for(let c=0;c<e.length;c++)for(let a=0;a<t.length;a++)h=Math.max(h,Math.abs(s[c][a]));h===0&&(h=1);const f=this._hoveredNode;for(let c=0;c<e.length;c++)for(let a=0;a<t.length;a++){const r=s[c][a],p=Math.abs(r)/h;if(p<.15)continue;const $=t[a],g=e[c],v=!f||f.layer===o&&f.index===a||f.layer===n&&f.index===c;let _;if(this.showGradients&&i){const S=i[c][a],x=Math.min(Math.abs(S)*20,1);_=S>0?`rgba(34, 197, 94, ${.15+x*.7})`:`rgba(239, 68, 68, ${.15+x*.7})`}else _=r>0?`rgba(96, 165, 250, ${.1+p*.5})`:`rgba(244, 114, 182, ${.1+p*.5})`;const y=this.showGradients&&i?i[c][a]:null,A=y!==null?`Vikt: ${r.toFixed(4)} | Gradient: ${y.toFixed(4)}`:`Vikt: ${r.toFixed(4)}`;l.push(H`<line
          x1="${$.x}" y1="${$.y}"
          x2="${g.x}" y2="${g.y}"
          stroke="${_}"
          stroke-width="${.5+p*2.5}"
          opacity="${v?1:.05}"
        ><title>${A}</title></line>`)}return l}_renderInteractiveNode(t,e,s,i,o,n,l,h){const c=.3+Math.min(Math.abs(e),1)*.7;let a="none";if(n&&Math.abs(n)>.01){const r=Math.min(Math.abs(n)*10,1);a=n>0?`rgba(34, 197, 94, ${r*.8})`:`rgba(239, 68, 68, ${r*.8})`}return H`
      <g class="node-interactive"
        @mouseenter=${()=>this._onNodeEnter(l,h)}
        @mouseleave=${()=>this._onNodeLeave()}
        @click=${()=>this._onNodeClick(l,h)}>
        ${a!=="none"?H`<circle cx="${t.x}" cy="${t.y}" r="${o+4}" fill="${a}" />`:""}
        <circle
          cx="${t.x}" cy="${t.y}" r="${o}"
          fill="${i}"
          fill-opacity="${c}"
          stroke="${i}"
          stroke-width="1.5"
        />
        <text x="${t.x}" y="${t.y}" class="value-label">${s}</text>
      </g>
    `}}D(pt,"properties",{data:{type:Object},showGradients:{type:Boolean},moveStrategy:{type:String},chosenMove:{type:Number},_hoveredNode:{state:!0},_selectedNode:{state:!0}}),D(pt,"styles",mt`
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
  `);customElements.define("nn-visualizer",pt);class ut extends j{constructor(){super(),this.hiddenLayerCount=3,this.hiddenNodeCounts=[16,16,16],this.hiddenActivations=["tanh","tanh","tanh"],this.outputActivation="softmax",this.trainingOpponent="minimax_rules",this.discountFactor=.9,this.epsilon=.3,this.epsilonDecay=.999,this.lrDecay=.9,this.moveStrategy="greedy",this.lastChosenMove=-1,this.nn=new Ot(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this.waitingForNn=!1,this._lastNnMove=null,this._selectedNode=null,this.showGradients=!1,this.trainingCount=100,this.isTraining=!1,this.trainingProgress=0,this.gameMode="human-vs-nn",this.stats={wins:0,losses:0,draws:0}}render(){return k`
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
            </select>
            <button class="primary" @click=${this._train} ?disabled=${this.isTraining}>
              ${this.isTraining?"Tränar...":"Träna nätverket"}
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
    `}_onCellClick(t){const{index:e}=t.detail;if(this.gameOver||this.board[e]!==0||this.currentPlayer!==1||(this._makeMove(e,1),this.gameOver))return;this.currentPlayer=-1;const s=this.board.map(i=>i*-1);this.nn.forward(s),this._updateViz(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_playNnMove(){if(!this.waitingForNn||this.gameOver)return;this.waitingForNn=!1;const t=this.board.map(s=>s*-1),e=this.nn.chooseMove(t,this.moveStrategy,{epsilon:this.epsilon});this._lastNnMove={index:e,board:t},this._updateViz(),this._makeMove(e,-1),this.gameOver||(this.currentPlayer=1,this.nn.forward([...this.board]),this._updateViz(),this.status="Ditt drag (X)")}_playAiSuggestion(){if(this.gameOver||this.currentPlayer!==1)return;const t=this.nn.chooseMove([...this.board],this.moveStrategy,{epsilon:this.epsilon});if(this._makeMove(t,1),this.gameOver)return;this.currentPlayer=-1;const e=this.board.map(s=>s*-1);this.nn.forward(e),this._updateViz(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_makeMove(t,e){const s=[...this.board];s[t]=e,this.board=s;const i=this._checkGameOver(this.board);i&&(this.gameOver=!0,this.winner=i.winner,this.winLine=i.line||[],i.winner===1?(this.status="Du vann!",this.stats={...this.stats,wins:this.stats.wins+1},this._trainOnGame(-1)):i.winner===-1?(this.status="Nätverket vann!",this.stats={...this.stats,losses:this.stats.losses+1},this._trainOnGame(1)):(this.status="Oavgjort!",this.stats={...this.stats,draws:this.stats.draws+1},this._trainOnGame(.1)))}_trainOnGame(t){this._lastNnMove&&(this.nn.backpropagate(this._lastNnMove.board,this._lastNnMove.index,t),this._updateViz())}_checkGameOver(t){const e=this.nn.checkWinner(t);if(e!==0){const i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].find(([o,n,l])=>t[o]===e&&t[n]===e&&t[l]===e);return{winner:e,line:i}}return t.every(s=>s!==0)?{winner:0}:null}_updateViz(){this.nnData=this.nn.getVisualizationData(),this.lastChosenMove=this.nn.pickMove(this.moveStrategy,{epsilon:this.epsilon})}_newGame(){this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.waitingForNn=!1,this._lastNnMove=null,this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz()}_resetNN(){this.nn.reset(),this.stats={wins:0,losses:0,draws:0},this._newGame()}_onLayerCountChange(t){const e=parseInt(t.target.value);if(e>this.hiddenLayerCount)for(;this.hiddenNodeCounts.length<e;)this.hiddenNodeCounts=[...this.hiddenNodeCounts,36],this.hiddenActivations=[...this.hiddenActivations,"tanh"];else this.hiddenNodeCounts=this.hiddenNodeCounts.slice(0,e),this.hiddenActivations=this.hiddenActivations.slice(0,e);this.hiddenLayerCount=e,this._recreateNN()}_onNodeCountChange(t,e){this.hiddenNodeCounts=this.hiddenNodeCounts.map((s,i)=>i===t?e:s),this._recreateNN()}_renderNodeDetail(){var f,c;const t=this._selectedNode;if(!t||!this.nnData)return"";const e=a=>k`<details open class="node-detail"><summary>Nodinformation</summary>${a}</details>`,{hiddenSizes:s,weights:i,biases:o,activations:n,gradients:l}=this.nnData,h=s.length;if(t.layer===0){const a=n.input[t.index],r=a===1?"X (egen)":a===-1?"O (motståndare)":"Tom",p=[],$=i[0];for(let g=0;g<s[0];g++)p.push({to:g,w:$[g][t.index]});return p.sort((g,v)=>Math.abs(v.w)-Math.abs(g.w)),e(k`
        <h4>Input ${t.index+1}</h4>
        <div class="detail-row"><span>Värde:</span><span class="val">${r} (${a})</span></div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${p.map(({to:g,w:v})=>k`
            <span class="detail-weight">H${h>1?"1·":""}${g+1}: <span class="wval ${v>=0?"pos":"neg"}">${v.toFixed(3)}</span></span>
          `)}
        </div>
      `)}if(t.layer>=1&&t.layer<=h){const a=t.layer-1,r=t.index,p=n.hiddenRaw[a][r],$=n.hidden[a][r],g=o[a][r],v=this.showGradients&&l?l.hiddenGrad[a][r]:null,_=this.nnData.hiddenActivations[a],y=R[_]||R.relu,A=i[a],S=a===0?9:s[a-1],x=[];for(let w=0;w<S;w++)x.push({from:w,w:A[r][w]});x.sort((w,u)=>Math.abs(u.w)-Math.abs(w.w));const M=a===0?"In":`H${a}`,T=i[a+1],P=a<h-1?s[a+1]:9,b=[];for(let w=0;w<P;w++)b.push({to:w,w:T[w][r]});b.sort((w,u)=>Math.abs(u.w)-Math.abs(w.w));const E=a<h-1?`H${a+2}`:"Out",z=a===0?n.input:n.hidden[a-1],B=[];for(let w=0;w<S;w++){const u=A[r][w],m=z[w];m!==0&&B.push({label:`${M}${w+1}`,w:u,a:m,product:u*m})}return B.sort((w,u)=>Math.abs(u.product)-Math.abs(w.product)),e(k`
        <h4>${h===1?`Dolt lager, nod ${r+1}`:`Dolt ${a+1}, nod ${r+1}`}</h4>
        <div style="color:#64748b;font-size:0.6rem;margin-bottom:4px;">${y.name}: f(x) = ${y.formula}</div>
        <div class="formula">
          <span style="color:#94a3b8;">${y.name}(</span>${g.toFixed(3)}${B.map(w=>k`<span> ${w.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(w.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${w.a.toFixed(1)}</span></span>`)})<br>
          <span style="color:#94a3b8;">= ${y.name}(${p.toFixed(4)}) = <span style="color:#e2e8f0;font-weight:600;">${$.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${g.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${p.toFixed(4)}</span></div>
        <div class="detail-row"><span>Efter ${y.name}:</span><span class="val">${$.toFixed(4)}</span></div>
        ${v!==null?k`<div class="detail-row"><span>Gradient:</span><span class="val">${v.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${x.map(({from:w,w:u})=>k`<span class="detail-weight">${M}${w+1}: <span class="wval ${u>=0?"pos":"neg"}">${u.toFixed(3)}</span></span>`)}
        </div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${b.map(({to:w,w:u})=>k`<span class="detail-weight">${E}${w+1}: <span class="wval ${u>=0?"pos":"neg"}">${u.toFixed(3)}</span></span>`)}
        </div>
      `)}if(t.layer===h+1){const a=t.index,r=n.outputRaw[a],p=n.output[a],$=o[o.length-1][a],g=this.showGradients&&l?l.outputGrad[a]:null,v=i[i.length-1],_=s[h-1],y=[];for(let b=0;b<_;b++)y.push({from:b,w:v[a][b]});y.sort((b,E)=>Math.abs(E.w)-Math.abs(b.w));const A=this.nnData.outputActivation,S=A==="softmax",x=S?"Softmax":((f=R[A])==null?void 0:f.name)||A,M=S?"eˣⁱ / Σeˣʲ":((c=R[A])==null?void 0:c.formula)||"",T=n.hidden[h-1],P=[];for(let b=0;b<_;b++){const E=v[a][b],z=T[b];z!==0&&P.push({label:`H${h>1?h:""}${b+1}`,w:E,a:z,product:E*z})}return P.sort((b,E)=>Math.abs(E.product)-Math.abs(b.product)),e(k`
        <h4>Output ${a+1} (ruta ${a+1})</h4>
        <div style="color:#64748b;font-size:0.6rem;margin-bottom:4px;">${x}: f(x) = ${M}</div>
        <div class="formula">
          ${$.toFixed(3)}${P.map(b=>k`<span> ${b.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(b.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${b.a.toFixed(2)}</span></span>`)}<br>
          <span style="color:#94a3b8;">= ${r.toFixed(4)} → ${x} → <span style="color:#e2e8f0;font-weight:600;">${S?(p*100).toFixed(1)+"%":p.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${$.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${r.toFixed(4)}</span></div>
        <div class="detail-row"><span>${x}:</span><span class="val">${S?(p*100).toFixed(1)+"%":p.toFixed(4)}</span></div>
        ${g!==null?k`<div class="detail-row"><span>Gradient:</span><span class="val">${g.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${y.map(({from:b,w:E})=>k`<span class="detail-weight">H${h>1?h:""}${b+1}: <span class="wval ${E>=0?"pos":"neg"}">${E.toFixed(3)}</span></span>`)}
        </div>
      `)}if(t.layer===h+2){const a=t.index,r=n.mask[a]===0,p=r?0:n.masked[a];return e(k`
        <h4>Filtrerat ${a+1} (ruta ${a+1})</h4>
        <div class="detail-row"><span>Status:</span><span class="val">${r?"Maskerad (upptagen)":"Tillgänglig"}</span></div>
        <div class="detail-row"><span>Sannolikhet:</span><span class="val">${(p*100).toFixed(1)}%</span></div>
      `)}return""}_onHiddenActivationChange(t,e){this.hiddenActivations=this.hiddenActivations.map((s,i)=>i===t?e:s),this._recreateNN()}_onOutputActivationChange(t){this.outputActivation=t,this._recreateNN()}_recreateNN(){this.nn=new Ot(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.nn.forward([0,0,0,0,0,0,0,0,0]),this._updateViz(),this.stats={wins:0,losses:0,draws:0},this._newGame()}async _train(){this.isTraining=!0,this.trainingProgress=0;const t=Math.max(1,Math.floor(this.trainingCount/20));let e=0;const s={opponent:this.trainingOpponent,discountFactor:this.discountFactor,epsilon:this.epsilon,epsilonDecay:this.epsilonDecay,lrDecay:this.lrDecay},i=()=>new Promise(o=>{setTimeout(()=>{const n=Math.min(t,this.trainingCount-e);this.nn.train(n,s),e+=n,this.trainingProgress=e/this.trainingCount*100,this.requestUpdate(),o()},0)});for(;e<this.trainingCount;)await i();this.isTraining=!1,this.trainingProgress=0,this.nn.forward(this.board),this._updateViz(),this.requestUpdate()}}D(ut,"properties",{board:{type:Array},currentPlayer:{type:Number},gameOver:{type:Boolean},winner:{type:Number},winLine:{type:Array},status:{type:String},nnData:{type:Object},showGradients:{type:Boolean},trainingCount:{type:Number},isTraining:{type:Boolean},gameMode:{type:String},stats:{type:Object},hiddenLayerCount:{type:Number},hiddenNodeCounts:{type:Array},hiddenActivations:{type:Array},outputActivation:{type:String},trainingOpponent:{type:String},discountFactor:{type:Number},epsilon:{type:Number},epsilonDecay:{type:Number},lrDecay:{type:Number},moveStrategy:{type:String},lastChosenMove:{type:Number},waitingForNn:{type:Boolean},_selectedNode:{state:!0}}),D(ut,"styles",mt`
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
  `);customElements.define("nn-demo-app",ut);
