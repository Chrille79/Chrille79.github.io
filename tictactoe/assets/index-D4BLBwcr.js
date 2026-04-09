var Ft=Object.defineProperty;var Gt=(d,t,e)=>t in d?Ft(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var G=(d,t,e)=>Gt(d,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,ut=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),$t=new WeakMap;let Ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ut&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$t.set(e,t))}return t}toString(){return this.cssText}};const Lt=d=>new Ot(typeof d=="string"?d:d+"",void 0,ft),gt=(d,...t)=>{const e=d.length===1?d[0]:t.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+d[a+1],d[0]);return new Ot(e,d,ft)},Tt=(d,t)=>{if(ut)d.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=st.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,d.appendChild(s)}},vt=ut?d=>d:d=>d instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Lt(e)})(d):d;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:It,defineProperty:Ut,getOwnPropertyDescriptor:Vt,getOwnPropertyNames:jt,getOwnPropertySymbols:Bt,getPrototypeOf:Wt}=Object,F=globalThis,yt=F.trustedTypes,qt=yt?yt.emptyScript:"",ot=F.reactiveElementPolyfillSupport,K=(d,t)=>d,ht={toAttribute(d,t){switch(t){case Boolean:d=d?qt:null;break;case Object:case Array:d=d==null?d:JSON.stringify(d)}return d},fromAttribute(d,t){let e=d;switch(t){case Boolean:e=d!==null;break;case Number:e=d===null?null:Number(d);break;case Object:case Array:try{e=JSON.parse(d)}catch{e=null}}return e}},Et=(d,t)=>!It(d,t),wt={attribute:!0,type:String,converter:ht,reflect:!1,useDefault:!1,hasChanged:Et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let B=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=Vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const r=i==null?void 0:i.call(this);a==null||a.call(this,n),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const e=this.properties,s=[...jt(e),...Bt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(vt(i))}else t!==void 0&&e.push(vt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var a;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:ht).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var a,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((a=r.converter)==null?void 0:a.fromAttribute)!==void 0?r.converter:ht;this._$Em=i;const f=l.fromAttribute(e,r.type);this[i]=f??((n=this._$Ej)==null?void 0:n.get(i))??f,this._$Em=null}}requestUpdate(t,e,s,i=!1,a){var n;if(t!==void 0){const r=this.constructor;if(i===!1&&(a=this[t]),s??(s=r.getPropertyOptions(t)),!((s.hasChanged??Et)(a,e)||s.useDefault&&s.reflect&&a===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,n]of i){const{wrapped:r}=n,l=this[a];r!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[K("elementProperties")]=new Map,B[K("finalized")]=new Map,ot==null||ot({ReactiveElement:B}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,bt=d=>d,it=Z.trustedTypes,xt=it?it.createPolicy("lit-html",{createHTML:d=>d}):void 0,zt="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+R,Xt=`<${Pt}>`,V=document,J=()=>V.createComment(""),Y=d=>d===null||typeof d!="object"&&typeof d!="function",mt=Array.isArray,Kt=d=>mt(d)||typeof(d==null?void 0:d[Symbol.iterator])=="function",at=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,At=/>/g,L=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,St=/"/g,Dt=/^(?:script|style|textarea|title)$/i,Ht=d=>(t,...e)=>({_$litType$:d,strings:t,values:e}),S=Ht(1),D=Ht(2),W=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Mt=new WeakMap,T=V.createTreeWalker(V,129);function Rt(d,t){if(!mt(d)||!d.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(t):t}const Zt=(d,t)=>{const e=d.length-1,s=[];let i,a=t===2?"<svg>":t===3?"<math>":"",n=X;for(let r=0;r<e;r++){const l=d[r];let f,c,h=-1,m=0;for(;m<l.length&&(n.lastIndex=m,c=n.exec(l),c!==null);)m=n.lastIndex,n===X?c[1]==="!--"?n=_t:c[1]!==void 0?n=At:c[2]!==void 0?(Dt.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=L):c[3]!==void 0&&(n=L):n===L?c[0]===">"?(n=i??X,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,f=c[1],n=c[3]===void 0?L:c[3]==='"'?St:kt):n===St||n===kt?n=L:n===_t||n===At?n=X:(n=L,i=void 0);const y=n===L&&d[r+1].startsWith("/>")?" ":"";a+=n===X?l+Xt:h>=0?(s.push(f),l.slice(0,h)+zt+l.slice(h)+R+y):l+R+(h===-2?r:y)}return[Rt(d,a+(d[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,n=0;const r=t.length-1,l=this.parts,[f,c]=Zt(t,e);if(this.el=Q.createElement(f,s),T.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=T.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(zt)){const m=c[n++],y=i.getAttribute(h).split(R),w=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:w[2],strings:y,ctor:w[1]==="."?Yt:w[1]==="?"?Qt:w[1]==="@"?te:nt}),i.removeAttribute(h)}else h.startsWith(R)&&(l.push({type:6,index:a}),i.removeAttribute(h));if(Dt.test(i.tagName)){const h=i.textContent.split(R),m=h.length-1;if(m>0){i.textContent=it?it.emptyScript:"";for(let y=0;y<m;y++)i.append(h[y],J()),T.nextNode(),l.push({type:2,index:++a});i.append(h[m],J())}}}else if(i.nodeType===8)if(i.data===Pt)l.push({type:2,index:a});else{let h=-1;for(;(h=i.data.indexOf(R,h+1))!==-1;)l.push({type:7,index:a}),h+=R.length-1}a++}}static createElement(t,e){const s=V.createElement("template");return s.innerHTML=t,s}}function q(d,t,e=d,s){var n,r;if(t===W)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const a=Y(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((r=i==null?void 0:i._$AO)==null||r.call(i,!1),a===void 0?i=void 0:(i=new a(d),i._$AT(d,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=q(d,i._$AS(d,t.values),i,s)),t}class Jt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??V).importNode(e,!0);T.currentNode=i;let a=T.nextNode(),n=0,r=0,l=s[0];for(;l!==void 0;){if(n===l.index){let f;l.type===2?f=new tt(a,a.nextSibling,this,t):l.type===1?f=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(f=new ee(a,this,t)),this._$AV.push(f),l=s[++r]}n!==(l==null?void 0:l.index)&&(a=T.nextNode(),n++)}return T.currentNode=V,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),Y(t)?t===N||t==null||t===""?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==N&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Q.createElement(Rt(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(e);else{const n=new Jt(i,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new Q(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new tt(this.O(J()),this.O(J()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=bt(t).nextSibling;bt(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}_$AI(t,e=this,s,i){const a=this.strings;let n=!1;if(a===void 0)t=q(this,t,e,0),n=!Y(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const r=t;let l,f;for(t=a[0],l=0;l<a.length-1;l++)f=q(this,r[s+l],e,l),f===W&&(f=this._$AH[l]),n||(n=!Y(f)||f!==this._$AH[l]),f===N?t=N:t!==N&&(t+=(f??"")+a[l+1]),this._$AH[l]=f}n&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Yt extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}class Qt extends nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N)}}class te extends nt{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??N)===W)return;const s=this._$AH,i=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==N&&(s===N||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ee{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const rt=Z.litHtmlPolyfillSupport;rt==null||rt(Q,tt),(Z.litHtmlVersions??(Z.litHtmlVersions=[])).push("3.3.2");const se=(d,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const a=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new tt(t.insertBefore(J(),a),a,void 0,e??{})}return i._$AI(d),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis;class U extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=se(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return W}}var Ct;U._$litElement$=!0,U.finalized=!0,(Ct=I.litElementHydrateSupport)==null||Ct.call(I,{LitElement:U});const lt=I.litElementPolyfillSupport;lt==null||lt({LitElement:U});(I.litElementVersions??(I.litElementVersions=[])).push("4.2.2");const H={relu:{name:"ReLU",formula:"max(0, x)",fn:d=>Math.max(0,d),derivative:d=>d>0?1:0},sigmoid:{name:"Sigmoid",formula:"1 / (1 + e⁻ˣ)",fn:d=>1/(1+Math.exp(-d)),derivative:d=>{const t=1/(1+Math.exp(-d));return t*(1-t)}},tanh:{name:"Tanh",formula:"tanh(x)",fn:d=>Math.tanh(d),derivative:d=>1-Math.tanh(d)**2},leaky_relu:{name:"Leaky ReLU",formula:"x > 0 ? x : 0.01x",fn:d=>d>0?d:.01*d,derivative:d=>d>0?1:.01}};class Nt{constructor(t=[12],e=null,s="softmax"){this.hiddenSizes=t,this.hiddenActivations=e||t.map(()=>"relu"),this.outputActivation=s,this.layerSizes=[9,...t,9],this.weights=[],this.biases=[];for(let i=0;i<this.layerSizes.length-1;i++)this.weights.push(this.randomMatrix(this.layerSizes[i+1],this.layerSizes[i])),this.biases.push(new Array(this.layerSizes[i+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastInput=new Array(9).fill(0),this.lastHiddenRaw=t.map(i=>new Array(i).fill(0)),this.lastHidden=t.map(i=>new Array(i).fill(0)),this.lastOutputRaw=new Array(9).fill(0),this.lastOutput=new Array(9).fill(0),this.lastMasked=new Array(9).fill(0),this.lastMask=new Array(9).fill(1),this.lastGradients=null,this.learningRate=.05,this.trainingGames=0}randomMatrix(t,e){const s=[];for(let i=0;i<t;i++){s[i]=[];for(let a=0;a<e;a++)s[i][a]=(Math.random()-.5)*.5}return s}softmax(t){const e=Math.max(...t),s=t.map(a=>Math.exp(a-e)),i=s.reduce((a,n)=>a+n,0);return s.map(a=>a/i)}_getActivation(t){return H[t]||H.relu}forward(t){this.lastInput=[...t];let e=t;for(let n=0;n<this.hiddenSizes.length;n++){const r=this.hiddenSizes[n],l=this._getActivation(this.hiddenActivations[n]).fn,f=new Array(r).fill(0),c=new Array(r).fill(0);for(let h=0;h<r;h++){let m=this.biases[n][h];for(let y=0;y<e.length;y++)m+=this.weights[n][h][y]*e[y];f[h]=m,c[h]=l(m)}this.lastHiddenRaw[n]=f,this.lastHidden[n]=c,e=c}const s=this.weights.length-1;this.lastOutputRaw=new Array(9).fill(0);for(let n=0;n<9;n++){let r=this.biases[s][n];for(let l=0;l<e.length;l++)r+=this.weights[s][n][l]*e[l];this.lastOutputRaw[n]=r}if(this.outputActivation==="softmax")this.lastOutput=this.softmax(this.lastOutputRaw);else{const n=this._getActivation(this.outputActivation).fn;this.lastOutput=this.lastOutputRaw.map(r=>n(r))}this.lastMask=t.map(n=>n===0?1:0);const i=this.lastOutput.map((n,r)=>n*this.lastMask[r]),a=i.reduce((n,r)=>n+r,0);return this.lastMasked=a>0?i.map(n=>n/a):this.lastMask.map(n=>n/this.lastMask.reduce((r,l)=>r+l,0)),this.lastMasked}_tacticalCheck(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=[0,2,6,8];for(const[i,a,n]of e){const r=[t[i],t[a],t[n]];if(r.filter(l=>l===1).length===2&&r.filter(l=>l===0).length===1)return[i,a,n][r.indexOf(0)]}for(const[i,a,n]of e){const r=[t[i],t[a],t[n]];if(r.filter(l=>l===-1).length===2&&r.filter(l=>l===0).length===1)return[i,a,n][r.indexOf(0)]}if(t[4]===0)return 4;for(const i of s)if(t[i]===-1){const a=8-i;if(t[a]===0)return a}for(const i of s)if(t[i]===0)return i;return-1}chooseMove(t,e=!1){const s=this.forward(t);if(e){let n=-1,r=-1;for(let l=0;l<9;l++)s[l]>r&&(r=s[l],n=l);return n}const i=Math.random();let a=0;for(let n=0;n<9;n++)if(a+=s[n],i<a)return n;return 8}backpropagate(t,e,s){this.forward(t);const i=new Array(9).fill(0);for(let o=0;o<9;o++)o===e?i[o]=s*(1-this.lastOutput[o]):i[o]=s*-this.lastOutput[o];const a=[],n=[];for(let o=0;o<this.weights.length;o++)a.push(this.weights[o].map(p=>p.map(()=>0))),n.push(new Array(this.biases[o].length).fill(0));const r=this.hiddenSizes.map(o=>new Array(o).fill(0)),l=this.weights.length-1,f=this.hiddenSizes.length-1,c=this.lastHidden[f];for(let o=0;o<9;o++){n[l][o]=i[o];for(let p=0;p<c.length;p++)a[l][o][p]=i[o]*c[p]}const h=this._getActivation(this.hiddenActivations[f]).derivative;for(let o=0;o<this.hiddenSizes[f];o++){let p=0;for(let g=0;g<9;g++)p+=this.weights[l][g][o]*i[g];r[f][o]=p*h(this.lastHiddenRaw[f][o])}for(let o=f-1;o>=0;o--){const p=r[o+1],g=o+1;for(let $=0;$<this.hiddenSizes[o+1];$++){n[g][$]=p[$];for(let b=0;b<this.hiddenSizes[o];b++)a[g][$][b]=p[$]*this.lastHidden[o][b]}const _=this._getActivation(this.hiddenActivations[o]).derivative;for(let $=0;$<this.hiddenSizes[o];$++){let b=0;for(let x=0;x<this.hiddenSizes[o+1];x++)b+=this.weights[g][x][$]*p[x];r[o][$]=b*_(this.lastHiddenRaw[o][$])}}const m=r[0];for(let o=0;o<this.hiddenSizes[0];o++){n[0][o]=m[o];for(let p=0;p<9;p++)a[0][o][p]=m[o]*this.lastInput[p]}const y=1,w=o=>Math.max(-y,Math.min(y,o));for(let o=0;o<this.weights.length;o++)for(let p=0;p<this.weights[o].length;p++){this.biases[o][p]+=this.learningRate*w(n[o][p]);for(let g=0;g<this.weights[o][p].length;g++)this.weights[o][p][g]+=this.learningRate*w(a[o][p][g])}return this.lastGradients={outputGrad:i,hiddenGrad:r,weightsGrad:a,biasesGrad:n},this.lastGradients}minimax(t,e,s=-1/0,i=1/0){const a=this.checkWinner(t);if(a===1)return{score:1,move:-1};if(a===-1)return{score:-1,move:-1};const n=[];for(let l=0;l<9;l++)t[l]===0&&n.push(l);if(n.length===0)return{score:0,move:-1};let r=n[0];if(e===1){let l=-1/0;for(const f of n){t[f]=e;const{score:c}=this.minimax(t,-1,s,i);if(t[f]=0,c>l&&(l=c,r=f),s=Math.max(s,c),i<=s)break}return{score:l,move:r}}else{let l=1/0;for(const f of n){t[f]=e;const{score:c}=this.minimax(t,1,s,i);if(t[f]=0,c<l&&(l=c,r=f),i=Math.min(i,c),i<=s)break}return{score:l,move:r}}}supervisedStep(t,e,s=!1){this.forward(t);const i=Array.isArray(e)?e:[e],a=new Array(9).fill(0);if(s&&i.length>1){const o=[3,1,3,1,5,1,3,1,3];let p=0;for(const g of i)p+=o[g];for(const g of i)a[g]=o[g]/p}else{const o=1/i.length;for(const p of i)a[p]=o}const n=new Array(9).fill(0);for(let o=0;o<9;o++)n[o]=-(this.lastOutput[o]-a[o]);const r=[],l=[];for(let o=0;o<this.weights.length;o++)r.push(this.weights[o].map(p=>p.map(()=>0))),l.push(new Array(this.biases[o].length).fill(0));const f=this.hiddenSizes.map(o=>new Array(o).fill(0)),c=this.weights.length-1,h=this.hiddenSizes.length-1,m=this.lastHidden[h];for(let o=0;o<9;o++){l[c][o]=n[o];for(let p=0;p<m.length;p++)r[c][o][p]=n[o]*m[p]}const y=this._getActivation(this.hiddenActivations[h]).derivative;for(let o=0;o<this.hiddenSizes[h];o++){let p=0;for(let g=0;g<9;g++)p+=this.weights[c][g][o]*n[g];f[h][o]=p*y(this.lastHiddenRaw[h][o])}for(let o=h-1;o>=0;o--){const p=f[o+1],g=o+1;for(let $=0;$<this.hiddenSizes[o+1];$++){l[g][$]=p[$];for(let b=0;b<this.hiddenSizes[o];b++)r[g][$][b]=p[$]*this.lastHidden[o][b]}const _=this._getActivation(this.hiddenActivations[o]).derivative;for(let $=0;$<this.hiddenSizes[o];$++){let b=0;for(let x=0;x<this.hiddenSizes[o+1];x++)b+=this.weights[g][x][$]*p[x];f[o][$]=b*_(this.lastHiddenRaw[o][$])}}const w=f[0];for(let o=0;o<this.hiddenSizes[0];o++){l[0][o]=w[o];for(let p=0;p<9;p++)r[0][o][p]=w[o]*this.lastInput[p]}for(let o=0;o<this.weights.length;o++)for(let p=0;p<this.weights[o].length;p++){this.biases[o][p]+=this.learningRate*l[o][p];for(let g=0;g<this.weights[o][p].length;g++)this.weights[o][p][g]+=this.learningRate*r[o][p][g]}}_collectAllPositions(){const t=new Map,e=(s,i)=>{if(this.checkWinner(s)!==0)return;const a=[];for(let h=0;h<9;h++)s[h]===0&&a.push(h);if(a.length===0)return;const n=s.join(",")+"|"+i;if(t.has(n))return;const r=this.minimax([...s],i),l=r.score,f=[];for(const h of a){s[h]=i;const{score:m}=this.minimax(s,-i);s[h]=0,m===l&&f.push(h)}const c=s.map(h=>h*i);t.set(n,{perspective:c,bestMoves:f,bestMove:r.move});for(const h of a)s[h]=i,e(s,-i),s[h]=0};return e(new Array(9).fill(0),1),[...t.values()]}train(t,e={}){const{opponent:s="minimax",discountFactor:i=.9,epsilon:a=.3,epsilonDecay:n=.999,lrDecay:r=.9999,onProgress:l=null}=e;let f=a;if(s==="minimax"||s==="minimax_rules"){const c=this._collectAllPositions();let h;if(s==="minimax_rules"){const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];h=[];for(const o of c){const p=o.perspective;let g=1;o.bestMoves.length===1&&(g=3);for(const[_,$,b]of w){const x=[p[_],p[$],p[b]],C=x.filter(M=>M===1).length,z=x.filter(M=>M===-1).length;if(x.filter(M=>M===0).length===1&&(C===2||z===2)){g=15;break}}g<10&&o.bestMoves.length===1&&o.bestMoves[0]===4&&(g=10),g<5&&p.filter($=>$!==0).length<=2&&(g=5);for(let _=0;_<g;_++)h.push(o)}}else h=c;const m=Math.max(1,Math.ceil(t/h.length));let y=0;for(let w=0;w<m;w++){for(let o=h.length-1;o>0;o--){const p=Math.floor(Math.random()*(o+1));[h[o],h[p]]=[h[p],h[o]]}for(const o of h){if(y>=t)break;this.supervisedStep(o.perspective,o.bestMoves||o.bestMove,s==="minimax_rules"),this.trainingGames++,y++,l&&y%10===0&&l(y,t)}this.learningRate*=r}return}for(let c=0;c<t;c++){const h=[],m=[],y=new Array(9).fill(0);let w=1,o=0;const p=Math.random()<.5?1:-1;for(;;){const _=y.map(x=>x*w);let $;if(w===p||s==="self"){if(Math.random()<f){const x=[];for(let C=0;C<9;C++)y[C]===0&&x.push(C);$=x[Math.floor(Math.random()*x.length)]}else $=this.chooseMove(_,!1);w===p?h.push({board:[..._],action:$}):m.push({board:[..._],action:$})}else{const x=[];for(let C=0;C<9;C++)y[C]===0&&x.push(C);$=x[Math.floor(Math.random()*x.length)]}if(y[$]=w,o=this.checkWinner(y),o!==0||y.every(x=>x!==0))break;w*=-1}const g=o===p?1:o===-p?-1:.2;for(let _=h.length-1;_>=0;_--){const $=Math.pow(i,h.length-1-_);this.backpropagate(h[_].board,h[_].action,g*$)}if(s==="self"&&m.length>0){const _=o===-p?1:o===p?-1:.2;for(let $=m.length-1;$>=0;$--){const b=Math.pow(i,m.length-1-$);this.backpropagate(m[$].board,m[$].action,_*b)}}f*=n,this.learningRate*=r,this.trainingGames++,l&&c%10===0&&l(c,t)}}checkWinner(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[s,i,a]of e)if(t[s]!==0&&t[s]===t[i]&&t[i]===t[a])return t[s];return 0}getVisualizationData(){return{hiddenSizes:this.hiddenSizes,hiddenActivations:this.hiddenActivations,outputActivation:this.outputActivation,weights:this.weights,biases:this.biases,activations:{input:this.lastInput,hiddenRaw:this.lastHiddenRaw,hidden:this.lastHidden,outputRaw:this.lastOutputRaw,output:this.lastOutput,mask:this.lastMask,masked:this.lastMasked},gradients:this.lastGradients,trainingGames:this.trainingGames}}reset(){this.weights=[],this.biases=[];for(let t=0;t<this.layerSizes.length-1;t++)this.weights.push(this.randomMatrix(this.layerSizes[t+1],this.layerSizes[t])),this.biases.push(new Array(this.layerSizes[t+1]).fill(0).map(()=>(Math.random()-.5)*.1));this.lastHiddenRaw=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.lastHidden=this.hiddenSizes.map(t=>new Array(t).fill(0)),this.learningRate=.05,this.trainingGames=0,this.lastGradients=null}}class dt extends U{constructor(){super(),this.board=[0,0,0,0,0,0,0,0,0],this.disabled=!1,this.winLine=[]}render(){return S`
      <div class="grid">
        ${this.board.map((t,e)=>S`
          <div
            class="cell ${t===1?"x":t===-1?"o":""} ${t!==0?"occupied":""} ${this.disabled?"disabled":""} ${this.winLine.includes(e)?"win":""}"
            @click=${()=>this._onCellClick(e)}
          >
            <span class="node-label">${e+1}</span>
            ${t===1?"X":t===-1?"O":""}
          </div>
        `)}
      </div>
    `}_onCellClick(t){this.disabled||this.board[t]!==0||this.dispatchEvent(new CustomEvent("cell-click",{detail:{index:t},bubbles:!0,composed:!0}))}}G(dt,"properties",{board:{type:Array},disabled:{type:Boolean},winLine:{type:Array}}),G(dt,"styles",gt`
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
  `);customElements.define("ttt-board",dt);class ct extends U{constructor(){super(),this.data=null,this.showGradients=!1,this._hoveredNode=null,this._selectedNode=null}_onNodeEnter(t,e){this._hoveredNode={layer:t,index:e}}_onNodeLeave(){this._hoveredNode=null}_onNodeClick(t,e){this._selectedNode&&this._selectedNode.layer===t&&this._selectedNode.index===e?this._selectedNode=null:this._selectedNode={layer:t,index:e},this.dispatchEvent(new CustomEvent("node-select",{detail:{node:this._selectedNode},bubbles:!0,composed:!0}))}render(){var j,A;if(!this.data)return S`<p style="text-align:center;color:#64748b;">Laddar nätverk...</p>`;const{hiddenSizes:t,hiddenActivations:e,outputActivation:s,weights:i,activations:a,gradients:n}=this.data,r=t.length,l=2+r+1,f=r>=3?1100:900,c=35,h=55,m=9*h,y=c+m,w=50,o=[];for(let u=0;u<l;u++)o.push(w+u*((f-2*w)/(l-1)));const p=["Input (9)"],g=["Brädets tillstånd"];for(let u=0;u<r;u++){const v=r===1?`Dolt lager (${t[u]})`:`Dolt ${u+1} (${t[u]})`;p.push(v);const O=(e==null?void 0:e[u])||"relu",E=((j=H[O])==null?void 0:j.name)||"ReLU";g.push(`${E}-aktivering`)}p.push("Output (9)");const _=s==="softmax"?"Softmax":((A=H[s])==null?void 0:A.name)||s;g.push(_),p.push("Filtrerat (9)"),g.push("Ogiltiga drag = 0");const $=this._nodePositions(9,o[0],m,h,c),b=t.map((u,v)=>{const O=Math.min(h,m/u);return this._nodePositions(u,o[1+v],m,O,c)}),x=1+r,C=x+1,z=this._nodePositions(9,o[x],m,h,c),k=this._nodePositions(9,o[C],m,h,c),M=u=>u===1?"X":u===-1?"O":"·",P=this._hoveredNode;return S`
      <svg viewBox="0 0 ${f} ${y}" preserveAspectRatio="xMidYMin meet">
        <!-- Layer labels -->
        ${o.map((u,v)=>D`
          <text x="${u}" y="14" class="layer-label">${p[v]}</text>
          <text x="${u}" y="28" class="label">${g[v]}</text>
        `)}

        <!-- Connections: Input → Hidden[0] -->
        ${this._renderConnections($,b[0],i[0],this.showGradients&&n?n.weightsGrad[0]:null,0,1)}

        <!-- Connections between hidden layers -->
        ${b.slice(0,-1).map((u,v)=>this._renderConnections(u,b[v+1],i[v+1],this.showGradients&&n?n.weightsGrad[v+1]:null,v+1,v+2))}

        <!-- Connections: Last hidden → Output -->
        ${this._renderConnections(b[r-1],z,i[i.length-1],this.showGradients&&n?n.weightsGrad[i.length-1]:null,r,r+1)}

        <!-- Connections: Output → Masked (simple 1:1) -->
        ${z.map((u,v)=>{const O=k[v],E=a.mask[v]===0,et=P&&!(P.layer===r+1&&P.index===v||P.layer===r+2&&P.index===v);return D`<line
            x1="${u.x}" y1="${u.y}"
            x2="${O.x}" y2="${O.y}"
            stroke="${E?"#ef4444":"#22c55e"}"
            stroke-width="1.5"
            stroke-opacity="${et?.05:.6}"
            ${E?D`stroke-dasharray="4,3"`:""}
          />`})}

        <!-- Input nodes -->
        ${$.map((u,v)=>{const O=a.input[v],E=O===1?"#60a5fa":O===-1?"#f472b6":"#64748b";return D`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(0,v)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(0,v)}>
              <rect x="${u.x-24}" y="${u.y-14}" width="48" height="28" rx="6"
                fill="${E}" fill-opacity="0.15" stroke="${E}" stroke-width="1.5" />
              <text x="${u.x-12}" y="${u.y+1}" class="value-label" text-anchor="middle"
                fill="#94a3b8" font-size="10" font-weight="600">${v+1}</text>
              <text x="${u.x+12}" y="${u.y+1}" class="value-label" text-anchor="middle"
                fill="${E}" font-size="12" font-weight="700">${M(O)}</text>
            </g>
          `})}

        <!-- Hidden layer nodes -->
        ${b.map((u,v)=>u.map((O,E)=>this._renderInteractiveNode(O,a.hidden[v][E],a.hidden[v][E].toFixed(2),"#a78bfa",10,this.showGradients&&n?n.hiddenGrad[v][E]:0,v+1,E)))}

        <!-- Output nodes -->
        ${z.map((u,v)=>D`
          <g class="node-interactive"
            @mouseenter=${()=>this._onNodeEnter(r+1,v)}
            @mouseleave=${()=>this._onNodeLeave()}
            @click=${()=>this._onNodeClick(r+1,v)}>
            ${this.showGradients&&n&&Math.abs(n.outputGrad[v])>.01?D`
              <circle cx="${u.x}" cy="${u.y}" r="18"
                fill="${n.outputGrad[v]>0?"rgba(34,197,94,"+Math.min(Math.abs(n.outputGrad[v])*10,.8)+")":"rgba(239,68,68,"+Math.min(Math.abs(n.outputGrad[v])*10,.8)+")"}" />
            `:""}
            <circle cx="${u.x}" cy="${u.y}" r="14"
              fill="#f59e0b" fill-opacity="${.3+Math.min(a.output[v],1)*.7}"
              stroke="#f59e0b" stroke-width="1.5" />
            <text x="${u.x}" y="${u.y-3}" class="value-label" font-size="7" fill="#94a3b8">${v+1}</text>
            <text x="${u.x}" y="${u.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${(a.output[v]*100).toFixed(0)}%</text>
          </g>
        `)}

        <!-- Masked output nodes -->
        ${k.map((u,v)=>{const O=a.mask[v]===0,E=O?"#ef4444":"#22c55e",et=O?0:a.masked[v];return D`
            <g class="node-interactive"
              @mouseenter=${()=>this._onNodeEnter(r+2,v)}
              @mouseleave=${()=>this._onNodeLeave()}
              @click=${()=>this._onNodeClick(r+2,v)}>
              <circle cx="${u.x}" cy="${u.y}" r="14"
                fill="${E}" fill-opacity="${O?.3:.3+Math.min(et,1)*.7}"
                stroke="${E}" stroke-width="1.5" />
              <text x="${u.x}" y="${u.y-3}" class="value-label" font-size="7" fill="#94a3b8">${v+1}</text>
              <text x="${u.x}" y="${u.y+7}" class="value-label" font-size="8" fill="#e2e8f0">${O?"✕":(et*100).toFixed(0)+"%"}</text>
            </g>
          `})}

      </svg>
      <div class="legend">
        Linjetjocklek = viktstyrka | Färg: blå=positiv, röd=negativ${this.showGradients?" | Nodglöd = gradientstyrka":""}
      </div>
    `}_nodePositions(t,e,s,i,a=0){const n=a+(s-(t-1)*i)/2,r=[];for(let l=0;l<t;l++)r.push({x:e,y:n+l*i});return r}_renderConnections(t,e,s,i,a,n){const r=[];let l=0;for(let c=0;c<e.length;c++)for(let h=0;h<t.length;h++)l=Math.max(l,Math.abs(s[c][h]));l===0&&(l=1);const f=this._hoveredNode;for(let c=0;c<e.length;c++)for(let h=0;h<t.length;h++){const m=s[c][h],y=Math.abs(m)/l;if(y<.15)continue;const w=t[h],o=e[c],p=!f||f.layer===a&&f.index===h||f.layer===n&&f.index===c;let g;if(this.showGradients&&i){const b=i[c][h],x=Math.min(Math.abs(b)*20,1);g=b>0?`rgba(34, 197, 94, ${.15+x*.7})`:`rgba(239, 68, 68, ${.15+x*.7})`}else g=m>0?`rgba(96, 165, 250, ${.1+y*.5})`:`rgba(244, 114, 182, ${.1+y*.5})`;const _=this.showGradients&&i?i[c][h]:null,$=_!==null?`Vikt: ${m.toFixed(4)} | Gradient: ${_.toFixed(4)}`:`Vikt: ${m.toFixed(4)}`;r.push(D`<line
          x1="${w.x}" y1="${w.y}"
          x2="${o.x}" y2="${o.y}"
          stroke="${g}"
          stroke-width="${.5+y*2.5}"
          opacity="${p?1:.05}"
        ><title>${$}</title></line>`)}return r}_renderInteractiveNode(t,e,s,i,a,n,r,l){const c=.3+Math.min(Math.abs(e),1)*.7;let h="none";if(n&&Math.abs(n)>.01){const m=Math.min(Math.abs(n)*10,1);h=n>0?`rgba(34, 197, 94, ${m*.8})`:`rgba(239, 68, 68, ${m*.8})`}return D`
      <g class="node-interactive"
        @mouseenter=${()=>this._onNodeEnter(r,l)}
        @mouseleave=${()=>this._onNodeLeave()}
        @click=${()=>this._onNodeClick(r,l)}>
        ${h!=="none"?D`<circle cx="${t.x}" cy="${t.y}" r="${a+4}" fill="${h}" />`:""}
        <circle
          cx="${t.x}" cy="${t.y}" r="${a}"
          fill="${i}"
          fill-opacity="${c}"
          stroke="${i}"
          stroke-width="1.5"
        />
        <text x="${t.x}" y="${t.y}" class="value-label">${s}</text>
      </g>
    `}}G(ct,"properties",{data:{type:Object},showGradients:{type:Boolean},_hoveredNode:{state:!0},_selectedNode:{state:!0}}),G(ct,"styles",gt`
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
  `);customElements.define("nn-visualizer",ct);class pt extends U{constructor(){super(),this.hiddenLayerCount=3,this.hiddenNodeCounts=[16,16,16],this.hiddenActivations=["tanh","tanh","tanh"],this.outputActivation="softmax",this.trainingOpponent="minimax_rules",this.discountFactor=.9,this.epsilon=.3,this.epsilonDecay=.999,this.lrDecay=.9,this.nn=new Nt(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this.nnData=this.nn.getVisualizationData(),this.waitingForNn=!1,this._selectedNode=null,this.showGradients=!1,this.trainingCount=100,this.isTraining=!1,this.trainingProgress=0,this.gameMode="human-vs-nn",this.stats={wins:0,losses:0,draws:0}}render(){return S`
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
              ${this.gameOver?S`
                <div class="status ${this.winner===1?"win":this.winner===-1?"lose":"draw"}">
                  ${this.status}
                </div>
              `:""}
              ${!this.gameOver&&this.currentPlayer===1?S`
                <button class="ai-suggest" @click=${this._playAiSuggestion}>Spela AI:s förslag</button>
              `:""}
              ${this.waitingForNn?S`
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
                  <option value="3" ?selected=${this.hiddenLayerCount===3}>3</option>
                </select>
              </div>
              ${this.hiddenNodeCounts.map((t,e)=>S`
                <div class="stat-row">
                  <span>${this.hiddenLayerCount===1?"Noder:":`Lager ${e+1}:`}</span>
                  <select @change=${s=>this._onNodeCountChange(e,parseInt(s.target.value))}>
                    ${[4,8,12,16,24,32,36,48,64].map(s=>S`
                      <option value="${s}" ?selected=${t===s}>${s}</option>
                    `)}
                  </select>
                </div>
                <div class="stat-row">
                  <span>${this.hiddenLayerCount===1?"Aktivering:":`Akt. ${e+1}:`}</span>
                  <select @change=${s=>this._onHiddenActivationChange(e,s.target.value)}>
                    ${Object.entries(H).map(([s,i])=>S`
                      <option value="${s}" ?selected=${this.hiddenActivations[e]===s}>${i.name}</option>
                    `)}
                  </select>
                </div>
              `)}
              <div class="stat-row">
                <span>Output akt.:</span>
                <select @change=${t=>this._onOutputActivationChange(t.target.value)}>
                  <option value="softmax" ?selected=${this.outputActivation==="softmax"}>Softmax</option>
                  ${Object.entries(H).map(([t,e])=>S`
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
              ${this.isTraining?S`
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

            <div class="control-group">
              <h3>Träningsinställningar</h3>
              <div class="stat-row">
                <span>Motståndare:</span>
                <select @change=${t=>this.trainingOpponent=t.target.value}>
                  <option value="minimax_rules" ?selected=${this.trainingOpponent==="minimax_rules"}>Minimax + regler</option>
                  <option value="minimax" ?selected=${this.trainingOpponent==="minimax"}>Minimax</option>
                  <option value="self" ?selected=${this.trainingOpponent==="self"}>Self-play</option>
                  <option value="random" ?selected=${this.trainingOpponent==="random"}>Slumpmässig</option>
                </select>
              </div>
              <div class="stat-row">
                <span>Discount (γ):</span>
                <input type="number" min="0" max="1" step="0.05"
                  .value=${this.discountFactor.toString()}
                  @change=${t=>this.discountFactor=parseFloat(t.target.value)} />
              </div>
              <div class="stat-row">
                <span>Epsilon (ε):</span>
                <input type="number" min="0" max="1" step="0.05"
                  .value=${this.epsilon.toString()}
                  @change=${t=>this.epsilon=parseFloat(t.target.value)} />
              </div>
              <div class="stat-row">
                <span>ε-decay:</span>
                <input type="number" min="0.9" max="1" step="0.001"
                  .value=${this.epsilonDecay.toString()}
                  @change=${t=>this.epsilonDecay=parseFloat(t.target.value)} />
              </div>
              <div class="stat-row">
                <span>LR-decay:</span>
                <input type="number" min="0.5" max="1" step="0.01"
                  .value=${this.lrDecay.toString()}
                  @change=${t=>this.lrDecay=parseFloat(t.target.value)} />
              </div>
              <div class="stat-row">
                <span>Nuvarande LR:</span>
                <span class="stat-val">${this.nn.learningRate.toFixed(6)}</span>
              </div>
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
    `}_onCellClick(t){const{index:e}=t.detail;if(this.gameOver||this.board[e]!==0||this.currentPlayer!==1||(this._makeMove(e,1),this.gameOver))return;this.currentPlayer=-1;const s=this.board.map(i=>i*-1);this.nn.forward(s),this.nnData=this.nn.getVisualizationData(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_playNnMove(){if(!this.waitingForNn||this.gameOver)return;this.waitingForNn=!1;const t=this.board.map(s=>s*-1),e=this.nn.chooseMove(t,!0);this.nnData=this.nn.getVisualizationData(),this._makeMove(e,-1),this.gameOver||(this.currentPlayer=1,this.nn.forward([...this.board]),this.nnData=this.nn.getVisualizationData(),this.status="Ditt drag (X)")}_playAiSuggestion(){if(this.gameOver||this.currentPlayer!==1)return;const t=this.nn.chooseMove([...this.board],!0);if(this._makeMove(t,1),this.gameOver)return;this.currentPlayer=-1;const e=this.board.map(s=>s*-1);this.nn.forward(e),this.nnData=this.nn.getVisualizationData(),this.waitingForNn=!0,this.status='Nätverkets tur — tryck "Spela AI:s drag"'}_makeMove(t,e){const s=[...this.board];s[t]=e,this.board=s;const i=this._checkGameOver(this.board);i&&(this.gameOver=!0,this.winner=i.winner,this.winLine=i.line||[],i.winner===1?(this.status="Du vann!",this.stats={...this.stats,wins:this.stats.wins+1},this._trainOnGame(-1)):i.winner===-1?(this.status="Nätverket vann!",this.stats={...this.stats,losses:this.stats.losses+1},this._trainOnGame(1)):(this.status="Oavgjort!",this.stats={...this.stats,draws:this.stats.draws+1},this._trainOnGame(.1)))}_trainOnGame(t){if(this.nnData){const e=this.board.map(s=>s*-1);for(let s=0;s<9;s++)if(this.board[s]===-1){this.nn.backpropagate(e,s,t);break}this.nnData=this.nn.getVisualizationData()}}_checkGameOver(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const s of e){const[i,a,n]=s;if(t[i]!==0&&t[i]===t[a]&&t[a]===t[n])return{winner:t[i],line:s}}return t.every(s=>s!==0)?{winner:0}:null}_newGame(){this.board=[0,0,0,0,0,0,0,0,0],this.currentPlayer=1,this.gameOver=!1,this.winner=0,this.winLine=[],this.waitingForNn=!1,this.status="Ditt drag (X)",this.nn.forward([0,0,0,0,0,0,0,0,0]),this.nnData=this.nn.getVisualizationData()}_resetNN(){this.nn.reset(),this.stats={wins:0,losses:0,draws:0},this._newGame()}_onLayerCountChange(t){const e=parseInt(t.target.value);if(e>this.hiddenLayerCount)for(;this.hiddenNodeCounts.length<e;)this.hiddenNodeCounts=[...this.hiddenNodeCounts,36],this.hiddenActivations=[...this.hiddenActivations,"tanh"];else this.hiddenNodeCounts=this.hiddenNodeCounts.slice(0,e),this.hiddenActivations=this.hiddenActivations.slice(0,e);this.hiddenLayerCount=e,this._recreateNN()}_onNodeCountChange(t,e){this.hiddenNodeCounts=this.hiddenNodeCounts.map((s,i)=>i===t?e:s),this._recreateNN()}_renderNodeDetail(){var l,f;const t=this._selectedNode;if(!t||!this.nnData)return"";const{hiddenSizes:e,weights:s,biases:i,activations:a,gradients:n}=this.nnData,r=e.length;if(t.layer===0){const c=a.input[t.index],h=c===1?"X (egen)":c===-1?"O (motståndare)":"Tom",m=[],y=s[0];for(let w=0;w<e[0];w++)m.push({to:w,w:y[w][t.index]});return m.sort((w,o)=>Math.abs(o.w)-Math.abs(w.w)),S`<div class="detail-panel">
        <h4>Input ${t.index+1}</h4>
        <div class="detail-row"><span>Värde:</span><span class="val">${h} (${c})</span></div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${m.map(({to:w,w:o})=>S`
            <span class="detail-weight">H${r>1?"1·":""}${w+1}: <span class="wval ${o>=0?"pos":"neg"}">${o.toFixed(3)}</span></span>
          `)}
        </div>
      </div>`}if(t.layer>=1&&t.layer<=r){const c=t.layer-1,h=t.index,m=a.hiddenRaw[c][h],y=a.hidden[c][h],w=i[c][h],o=this.showGradients&&n?n.hiddenGrad[c][h]:null,p=this.nnData.hiddenActivations[c],g=H[p]||H.relu,_=s[c],$=c===0?9:e[c-1],b=[];for(let A=0;A<$;A++)b.push({from:A,w:_[h][A]});b.sort((A,u)=>Math.abs(u.w)-Math.abs(A.w));const x=c===0?"In":`H${c}`,C=s[c+1],z=c<r-1?e[c+1]:9,k=[];for(let A=0;A<z;A++)k.push({to:A,w:C[A][h]});k.sort((A,u)=>Math.abs(u.w)-Math.abs(A.w));const M=c<r-1?`H${c+2}`:"Out",P=c===0?a.input:a.hidden[c-1],j=[];for(let A=0;A<$;A++){const u=_[h][A],v=P[A];v!==0&&j.push({label:`${x}${A+1}`,w:u,a:v,product:u*v})}return j.sort((A,u)=>Math.abs(u.product)-Math.abs(A.product)),S`<div class="detail-panel">
        <h4>${r===1?`Dolt lager, nod ${h+1}`:`Dolt ${c+1}, nod ${h+1}`}</h4>
        <div style="color:#64748b;font-size:0.6rem;margin-bottom:4px;">${g.name}: f(x) = ${g.formula}</div>
        <div class="formula">
          <span style="color:#94a3b8;">${g.name}(</span>${w.toFixed(3)}${j.map(A=>S`<span> ${A.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(A.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${A.a.toFixed(1)}</span></span>`)})<br>
          <span style="color:#94a3b8;">= ${g.name}(${m.toFixed(4)}) = <span style="color:#e2e8f0;font-weight:600;">${y.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${w.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${m.toFixed(4)}</span></div>
        <div class="detail-row"><span>Efter ${g.name}:</span><span class="val">${y.toFixed(4)}</span></div>
        ${o!==null?S`<div class="detail-row"><span>Gradient:</span><span class="val">${o.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${b.map(({from:A,w:u})=>S`<span class="detail-weight">${x}${A+1}: <span class="wval ${u>=0?"pos":"neg"}">${u.toFixed(3)}</span></span>`)}
        </div>
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Utgående vikter:</div>
        <div class="detail-weights">
          ${k.map(({to:A,w:u})=>S`<span class="detail-weight">${M}${A+1}: <span class="wval ${u>=0?"pos":"neg"}">${u.toFixed(3)}</span></span>`)}
        </div>
      </div>`}if(t.layer===r+1){const c=t.index,h=a.outputRaw[c],m=a.output[c],y=i[i.length-1][c],w=this.showGradients&&n?n.outputGrad[c]:null,o=s[s.length-1],p=e[r-1],g=[];for(let k=0;k<p;k++)g.push({from:k,w:o[c][k]});g.sort((k,M)=>Math.abs(M.w)-Math.abs(k.w));const _=this.nnData.outputActivation,$=_==="softmax",b=$?"Softmax":((l=H[_])==null?void 0:l.name)||_,x=$?"eˣⁱ / Σeˣʲ":((f=H[_])==null?void 0:f.formula)||"",C=a.hidden[r-1],z=[];for(let k=0;k<p;k++){const M=o[c][k],P=C[k];P!==0&&z.push({label:`H${r>1?r:""}${k+1}`,w:M,a:P,product:M*P})}return z.sort((k,M)=>Math.abs(M.product)-Math.abs(k.product)),S`<div class="detail-panel">
        <h4>Output ${c+1} (ruta ${c+1})</h4>
        <div style="color:#64748b;font-size:0.6rem;margin-bottom:4px;">${b}: f(x) = ${x}</div>
        <div class="formula">
          ${y.toFixed(3)}${z.map(k=>S`<span> ${k.product>=0?"+":"−"} <span style="color:#60a5fa;">${Math.abs(k.w).toFixed(2)}</span>×<span style="color:#a78bfa;">${k.a.toFixed(2)}</span></span>`)}<br>
          <span style="color:#94a3b8;">= ${h.toFixed(4)} → ${b} → <span style="color:#e2e8f0;font-weight:600;">${$?(m*100).toFixed(1)+"%":m.toFixed(4)}</span></span>
        </div>
        <div class="detail-row"><span>Bias:</span><span class="val">${y.toFixed(4)}</span></div>
        <div class="detail-row"><span>Rå summa:</span><span class="val">${h.toFixed(4)}</span></div>
        <div class="detail-row"><span>${b}:</span><span class="val">${$?(m*100).toFixed(1)+"%":m.toFixed(4)}</span></div>
        ${w!==null?S`<div class="detail-row"><span>Gradient:</span><span class="val">${w.toFixed(4)}</span></div>`:""}
        <div style="color:#64748b;margin-top:4px;font-size:0.65rem;">Inkommande vikter:</div>
        <div class="detail-weights">
          ${g.map(({from:k,w:M})=>S`<span class="detail-weight">H${r>1?r:""}${k+1}: <span class="wval ${M>=0?"pos":"neg"}">${M.toFixed(3)}</span></span>`)}
        </div>
      </div>`}if(t.layer===r+2){const c=t.index,h=a.mask[c]===0,m=h?0:a.masked[c];return S`<div class="detail-panel">
        <h4>Filtrerat ${c+1} (ruta ${c+1})</h4>
        <div class="detail-row"><span>Status:</span><span class="val">${h?"Maskerad (upptagen)":"Tillgänglig"}</span></div>
        <div class="detail-row"><span>Sannolikhet:</span><span class="val">${(m*100).toFixed(1)}%</span></div>
      </div>`}return""}_onHiddenActivationChange(t,e){this.hiddenActivations=this.hiddenActivations.map((s,i)=>i===t?e:s),this._recreateNN()}_onOutputActivationChange(t){this.outputActivation=t,this._recreateNN()}_recreateNN(){this.nn=new Nt(this.hiddenNodeCounts,this.hiddenActivations,this.outputActivation),this.nn.forward([0,0,0,0,0,0,0,0,0]),this.nnData=this.nn.getVisualizationData(),this.stats={wins:0,losses:0,draws:0},this._newGame()}async _train(){this.isTraining=!0,this.trainingProgress=0;const t=Math.max(1,Math.floor(this.trainingCount/20));let e=0;const s={opponent:this.trainingOpponent,discountFactor:this.discountFactor,epsilon:this.epsilon,epsilonDecay:this.epsilonDecay,lrDecay:this.lrDecay},i=()=>new Promise(a=>{setTimeout(()=>{const n=Math.min(t,this.trainingCount-e);this.nn.train(n,s),e+=n,this.trainingProgress=e/this.trainingCount*100,this.requestUpdate(),a()},0)});for(;e<this.trainingCount;)await i();this.isTraining=!1,this.trainingProgress=0,this.nn.forward(this.board),this.nnData=this.nn.getVisualizationData(),this.requestUpdate()}}G(pt,"properties",{board:{type:Array},currentPlayer:{type:Number},gameOver:{type:Boolean},winner:{type:Number},winLine:{type:Array},status:{type:String},nnData:{type:Object},showGradients:{type:Boolean},trainingCount:{type:Number},isTraining:{type:Boolean},gameMode:{type:String},stats:{type:Object},hiddenLayerCount:{type:Number},hiddenNodeCounts:{type:Array},hiddenActivations:{type:Array},outputActivation:{type:String},trainingOpponent:{type:String},discountFactor:{type:Number},epsilon:{type:Number},epsilonDecay:{type:Number},lrDecay:{type:Number},waitingForNn:{type:Boolean},_selectedNode:{state:!0}}),G(pt,"styles",gt`
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
      overflow-y: auto;
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
  `);customElements.define("nn-demo-app",pt);
