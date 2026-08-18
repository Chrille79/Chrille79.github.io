(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const A={linen:"#efe6d5",linenDeep:"#e3d7c2",ink:"#2f2a24",inkSoft:"#6c6154",boardWell:"#ddceb4",boardLine:"rgba(47, 42, 36, 0.14)",activeFrame:"#a8432f",idleFrame:"#b9a48a",valid:"rgba(84, 124, 74, 0.55)",invalid:"rgba(168, 67, 47, 0.45)",burned:"#a89880"},Me=[{fill:"#a8432f",seam:"#7c2e1f"},{fill:"#2f4b6e",seam:"#1f3550"},{fill:"#c08a2e",seam:"#8e6318"},{fill:"#5c7248",seam:"#3f5231"},{fill:"#8a4a63",seam:"#642f45"},{fill:"#3f6f6a",seam:"#28504c"}];function yt(i){return Me[i%Me.length]}function vt(i){return i===6?"diagonal-down":i===5?"diagonal-up":"solid"}function $t(){const i=document.createElement("style");i.textContent=`:root {
  --omino-linen: ${A.linen};
  --omino-linen-deep: ${A.linenDeep};
  --omino-ink: ${A.ink};
  --omino-ink-soft: ${A.inkSoft};
  --omino-board-well: ${A.boardWell};
  --omino-active: ${A.activeFrame};
  --omino-idle: ${A.idleFrame};
  --omino-burned: ${A.burned};
}`,document.head.append(i)}const ve=4294967296,xt=2166136261,wt=16777619;function kt(i){let e=i>>>0;return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function At(i){if(typeof i=="number"){if(!Number.isInteger(i))throw new RangeError(`Numeric seed must be an integer, got ${i}`);return i>>>0}let e=xt;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,wt);return kt(e)}class ue{#e;constructor(e){this.#e=At(e)}static fromState(e){const t=new ue(0);return t.#e=e>>>0,t}get state(){return this.#e}clone(){return ue.fromState(this.#e)}nextUint32(){this.#e=this.#e+1831565813|0;let e=this.#e;return e=Math.imul(e^e>>>15,1|e),e=e+Math.imul(e^e>>>7,61|e)^e,(e^e>>>14)>>>0}next(){return this.nextUint32()/ve}nextInt(e){if(!Number.isInteger(e)||e<=0)throw new RangeError(`Bound must be a positive integer, got ${e}`);const t=ve-ve%e;let n=this.nextUint32();for(;n>=t;)n=this.nextUint32();return n%e}shuffle(e){const t=e.slice();for(let n=t.length-1;n>0;n-=1){const o=this.nextInt(n+1),s=t[n],r=t[o];t[n]=r,t[o]=s}return t}}function St(i,e){return i.y-e.y||i.x-e.x}function oe(i){let e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY;for(const n of i)n.x<e&&(e=n.x),n.y<t&&(t=n.y);return i.map(n=>({x:n.x-e,y:n.y-t})).sort(St)}function Ke(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n+=1){const o=i[n],s=e[n];if(o.y!==s.y)return o.y-s.y;if(o.x!==s.x)return o.x-s.x}return i.length-e.length}function V(i){return i.map(e=>`${e.x},${e.y}`).join(" ")}function _t(i){let e=0;for(const t of i)t.x>e&&(e=t.x);return e+1}function Et(i){let e=0;for(const t of i)t.y>e&&(e=t.y);return e+1}function It(i){return oe(i.map(e=>({x:-e.y,y:e.x})))}function Ct(i){return oe(i.map(e=>({x:-e.x,y:e.y})))}function Tt(i){return i.map(e=>({x:-e.y,y:e.x}))}function Pt(i){return i.map(e=>({x:-e.x,y:e.y}))}function Xe(i){const e=new Map;for(const t of[i,Pt(i)]){let n=t;for(let o=0;o<4;o+=1){const s=oe(n);e.set(V(s),s),n=Tt(n)}}return[...e.values()].sort(Ke)}function Ze(i){return Xe(i)[0]}function Mt(i){return[{x:i.x+1,y:i.y},{x:i.x-1,y:i.y},{x:i.x,y:i.y+1},{x:i.x,y:i.y-1}]}function Nt(i){const e=[];return i.forEach((t,n)=>{[...t].forEach((o,s)=>{(o==="#"||o==="X")&&e.push({x:s,y:n})})}),oe(e)}const Ne=6,Ot={1:1,2:1,3:2,4:5,5:12,6:35},xe=56,Rt={1:"monomino",2:"domino",3:"tromino",4:"tetromino",5:"pentomino",6:"hexomino"};function Je(i){const e=Rt[i];if(e===void 0)throw new RangeError(`No polyomino family for size ${i}`);return e}const zt={O1:["#"],I2:["##"],I3:["###"],V3:["#.","##"],I4:["####"],O4:["##","##"],T4:["###",".#."],S4:[".##","##."],L4:["#.","#.","##"],F:[".##","##.",".#."],I:["#####"],L:["#.","#.","#.","##"],N:[".#",".#","##","#."],P:["##","##","#."],T:["###",".#.",".#."],U:["#.#","###"],V:["#..","#..","###"],W:["#..","##.",".##"],X:[".#.","###",".#."],Y:[".#","##",".#",".#"],Z:["##.",".#.",".##"]};function Ut(i){const e=new Map;let t=[[{x:0,y:0}]];e.set(1,t);for(let n=2;n<=i;n+=1){const o=new Map;for(const s of t){const r=new Set(s.map(a=>`${a.x},${a.y}`));for(const a of s)for(const c of Mt(a)){if(r.has(`${c.x},${c.y}`))continue;const d=Ze(oe([...s,c]));o.set(V(d),d)}}t=[...o.values()].sort(Ke),e.set(n,t)}return e}function Bt(){const i=Ut(Ne),e=new Map;for(const[o,s]of Object.entries(zt))e.set(V(Ze(Nt(s))),o);const t=[];let n=0;for(let o=1;o<=Ne;o+=1)for(const s of i.get(o)??[]){const r=V(s);let a=e.get(r);a===void 0&&(n+=1,a=`H${String(n).padStart(2,"0")}`);const c=Xe(s),d=new Map(c.map((l,f)=>[V(l),f])),h=(l,f)=>{const b=d.get(V(l));if(b===void 0)throw new Error(`${f} of ${a} left its own orientation set`);return b};t.push({id:t.length,size:o,name:a,key:r,orientations:c.map(l=>({cells:l,width:_t(l),height:Et(l),rotateCw:h(It(l),"rotation"),flip:h(Ct(l),"reflection")}))})}return t}const se=Object.freeze(Bt());se.reduce((i,e)=>i+e.size,0);function P(i){const e=se[i];if(e===void 0)throw new RangeError(`No piece with id ${i}`);return e}se.filter(i=>i.size%2===1).length;const p=9,w=p*p,S=255,Qe=2*w,re=3,ae=Object.freeze({lineBonus:6,passSurcharge:Object.freeze([0,1,2]),slotSurcharge:Object.freeze([0,1,2])});function be(i,e,t=ae){const n=t.slotSurcharge[e-1];if(n===void 0)throw new RangeError(`Slot must be 1..${re}, got ${e}`);return i+n}function Oe(){return{cells:new Uint8Array(w).fill(S),spent:0,covered:0,linesCompleted:0}}function we(i,e=ae,t={}){const n=new ue(i).shuffle(se.map(s=>s.id)),o=t.firstPlayer??0;return{seed:i,balance:e,chain:n,marker:0,burned:[],players:[Oe(),Oe()],firstPlayer:o,toMove:o,lastActor:null,history:[],ended:n.length===0}}function Lt(i,e,t){const[n,o]=i;return n.spent<o.spent?0:o.spent<n.spent?1:e===null?t:e===0?1:0}function et(i){return i.chain.length-i.marker}function fe(i){const e=Math.min(re,et(i)),t=[];for(let n=0;n<e;n+=1)t.push(P(i.chain[i.marker+n]));return t}function O(i,e){if(!Number.isInteger(e)||e<1||e>re)return;const t=i.marker+e-1;if(!(t>=i.chain.length))return P(i.chain[t])}function Y(i,e){return e*p+i}function G(i,e,t,n,o){const s=e.orientations[t];if(s===void 0||!Number.isInteger(n)||!Number.isInteger(o)||n<0||o<0||n+s.width>p||o+s.height>p)return!1;for(const r of s.cells)if(i.cells[Y(n+r.x,o+r.y)]!==S)return!1;return!0}function tt(i,e){for(let t=0;t<e.orientations.length;t+=1){const n=e.orientations[t];for(let o=0;o<=p-n.height;o+=1)for(let s=0;s<=p-n.width;s+=1)if(G(i,e,t,s,o))return!0}return!1}function Ft(i){let e=0;for(let t=0;t<p;t+=1){let n=!0;for(let o=0;o<p;o+=1)if(i[Y(o,t)]===S){n=!1;break}n&&(e+=1)}for(let t=0;t<p;t+=1){let n=!0;for(let o=0;o<p;o+=1)if(i[Y(t,o)]===S){n=!1;break}n&&(e+=1)}return e}function it(i){const e=[];for(let t=0;t<p;t+=1){let n=!0;for(let o=0;o<p;o+=1)i.cells[Y(o,t)]===S&&(n=!1);e.push(n)}for(let t=0;t<p;t+=1){let n=!0;for(let o=0;o<p;o+=1)i.cells[Y(t,o)]===S&&(n=!1);e.push(n)}return e}function K(i,e=ae){return 2*i.covered-i.spent+e.lineBonus*i.linesCompleted}function Ht(i,e=ae){const t=w-i.covered;return Qe-i.spent-2*t+e.lineBonus*i.linesCompleted}function Dt(i,e){if(i.ended)return!1;if(e.type==="pass")return!0;const t=O(i,e.slot);if(t===void 0)return!1;const n=i.players[i.toMove];return G(n,t,e.orientation,e.x,e.y)}function nt(i){if(i.ended)return[];const e=[],t=i.players[i.toMove],n=fe(i);for(let o=0;o<n.length;o+=1){const s=n[o],r=o+1;for(let a=0;a<s.orientations.length;a+=1){const c=s.orientations[a],d=p-c.width,h=p-c.height;for(let l=0;l<=h;l+=1)for(let f=0;f<=d;f+=1)G(t,s,a,f,l)&&e.push({type:"buy",slot:r,orientation:a,x:f,y:l})}}return e.push({type:"pass"}),e}function Wt(i){if(i.ended)return!1;const e=i.players[i.toMove];return fe(i).some(t=>tt(e,t))}function le(i){const e=Math.min(re,i.chain.length-i.marker);return e<=0?0:i.balance.passSurcharge[e-1]??0}class he extends Error{constructor(e){super(e),this.name="IllegalActionError"}}function ot(i,e){if(i.ended)throw new he("The game has ended");const t=i.toMove,n=i.players[t];let o,s,r;if(e.type==="buy"){const d=O(i,e.slot);if(d===void 0)throw new he(`Slot ${e.slot} holds no piece`);if(!G(n,d,e.orientation,e.x,e.y))throw new he(`Piece ${d.name} cannot be placed in orientation ${e.orientation} at (${e.x}, ${e.y})`);const h=d.orientations[e.orientation],l=i.players[t].cells.slice();for(const f of h.cells)l[Y(e.x+f.x,e.y+f.y)]=d.id;o={cells:l,spent:n.spent+be(d.size,e.slot,i.balance),covered:n.covered+d.size,linesCompleted:Ft(l)},s=i.chain.slice(i.marker,i.marker+e.slot-1),r=i.marker+e.slot}else{o={cells:n.cells,spent:n.spent+le(i),covered:n.covered,linesCompleted:n.linesCompleted};const d=Math.min(i.marker+re,i.chain.length);s=i.chain.slice(i.marker,d),r=d}const a=t===0?[o,i.players[1]]:[i.players[0],o],c=r>=i.chain.length;return{seed:i.seed,balance:i.balance,chain:i.chain,marker:r,burned:s.length>0?[...i.burned,...s]:i.burned,players:a,firstPlayer:i.firstPlayer,toMove:Lt(a,t,i.firstPlayer),lastActor:t,history:[...i.history,e],ended:c}}function jt(i,e,t=ae,n={}){let o=we(i,t,n);for(const s of e)o=ot(o,s);return o}function Re(i,e){return i.history.length>0&&i.lastActor===e}function ze(i){if(i.history.length===0)throw new he("Nothing to undo");return jt(i.seed,i.history.slice(0,-1),i.balance,{firstPlayer:i.firstPlayer})}function Vt(i){if(!i.ended)return;const[e,t]=i.players,n=K(e,i.balance),o=K(t,i.balance);return n!==o?{kind:"winner",player:n>o?0:1}:e.covered!==t.covered?{kind:"winner",player:e.covered>t.covered?0:1}:e.spent!==t.spent?{kind:"winner",player:e.spent<t.spent?0:1}:{kind:"draw"}}function st(i){let e=0,t=0,n=0,o=0,s=0;for(let r=i.marker;r<i.chain.length;r+=1){const a=P(i.chain[r]);a.size===6?e+=1:a.size===5?t+=1:a.size===4?n+=1:o+=1,a.size%2===1&&(s+=1)}return{remaining:et(i),hexominoes:e,pentominoes:t,tetrominoes:n,small:o,odd:s}}class rt extends Error{constructor(e){super(e),this.name="RuleViolation"}}function x(i,e){if(!i)throw new rt(e)}function Ue(i,e){let t=0;for(const o of i.cells)o!==S&&(t+=1);x(i.cells.length===w,`${e}: board has ${i.cells.length} cells, expected ${w}`),x(i.covered===t,`${e}: covered says ${i.covered} but ${t} cells are filled`),x(i.covered<=w,`${e}: covered ${i.covered} exceeds the board`),x(i.spent>=0,`${e}: spent went negative (${i.spent})`);const n=it(i).filter(Boolean).length;x(i.linesCompleted===n,`${e}: linesCompleted says ${i.linesCompleted} but ${n} lines are full`)}function at(i){Ue(i.players[0],"player 1"),Ue(i.players[1],"player 2");for(const o of i.players){x(K(o,i.balance)===Ht(o,i.balance),"score identity 2×covered − spent + bonus×lines ≠ 162 − spent − 2×empty + bonus×lines");const s=w-o.covered;x(K(o,i.balance)===Qe-o.spent-2*s+i.balance.lineBonus*o.linesCompleted,"score does not match the identity recomputed from raw counts")}const e=i.players.reduce((o,s)=>{const r=new Set;for(const a of s.cells)a!==S&&r.add(a);return o+r.size},0),t=i.chain.length-i.marker;x(t+i.burned.length+e===xe,`piece accounting: ${t} in chain + ${i.burned.length} burned + ${e} placed ≠ ${xe}`),x(new Set(i.burned).size===i.burned.length,"a piece was burned twice");const n=st(i);if(x(n.hexominoes+n.pentominoes+n.tetrominoes+n.small===n.remaining,"chain class counts do not add up to the remaining count"),x(i.ended===i.marker>=i.chain.length,"ended flag disagrees with chain exhaustion"),!i.ended){const[o,s]=i.players;let r;o.spent!==s.spent?r=o.spent<s.spent?0:1:i.lastActor===null?r=i.firstPlayer:r=i.lastActor===0?1:0,x(i.toMove===r,`turn order: expected player ${r+1} to move, got ${i.toMove+1}`)}}function qt(i,e,t){x(Dt(i,e),`an illegal action was applied: ${JSON.stringify(e)}`),x(t.marker>i.marker,`marker did not advance (${i.marker} → ${t.marker})`);for(const a of[0,1])x(t.players[a].spent>=i.players[a].spent,`player ${a+1}: spent decreased`),x(t.players[a].covered>=i.players[a].covered,`player ${a+1}: covered decreased`),x(t.players[a].linesCompleted>=i.players[a].linesCompleted,`player ${a+1}: a completed line was lost`);const n=i.toMove,o=n===0?1:0;x(t.players[o].spent===i.players[o].spent&&t.players[o].covered===i.players[o].covered,"the player who did not act was modified");const s=i.players[n].cells,r=t.players[n].cells;for(let a=0;a<w;a+=1)s[a]!==S&&x(r[a]===s[a],`cell ${a} was overwritten (piece ${s[a]} → ${r[a]})`);if(e.type==="pass"){x(t.players[n].covered===i.players[n].covered,"a pass changed the board"),x(t.players[n].spent===i.players[n].spent+le(i),"a pass charged the wrong amount");const a=Math.min(3,i.chain.length-i.marker);x(t.burned.length===i.burned.length+a,`a pass burned ${t.burned.length-i.burned.length} pieces, expected ${a}`)}else{x(t.marker===i.marker+e.slot,"a buy advanced the marker by the wrong amount"),x(t.burned.length===i.burned.length+e.slot-1,"a buy burned the wrong number of pieces");const a=t.players[n].covered-i.players[n].covered;x(a>=1&&a<=6,`a buy covered ${a} squares`)}at(t)}class lt extends Error{constructor(e){super(`Agent "${e}" was asked to move with no legal action available`),this.name="NoLegalActionError"}}function Yt(i="greedy"){const e=new Uint8Array(w),t=new Uint8Array(w),n=new Int32Array(w);function o(){t.fill(0);let s=0;for(let r=0;r<w;r+=1){if(e[r]===1||t[r]===1)continue;s+=1;let a=0;for(n[a]=r,a+=1,t[r]=1;a>0;){a-=1;const c=n[a],d=c%p,h=c/p|0;if(d>0){const l=c-1;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}if(d<p-1){const l=c+1;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}if(h>0){const l=c-p;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}if(h<p-1){const l=c+p;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}}}return s}return{name:i,chooseAction(s){const r=nt(s);if(r.length===0)throw new lt(i);const a=s.players[s.toMove],{lineBonus:c}=s.balance,d=new Int32Array(p),h=new Int32Array(p);for(let u=0;u<p;u+=1)for(let v=0;v<p;v+=1)a.cells[u*p+v]!==S&&(d[u]=d[u]+1,h[v]=h[v]+1);for(let u=0;u<w;u+=1)e[u]=a.cells[u]===S?0:1;const l=u=>{if(u.type==="pass")return o();const I=O(s,u.slot)?.orientations[u.orientation];if(I===void 0)return Number.POSITIVE_INFINITY;for(const E of I.cells)e[(u.y+E.y)*p+u.x+E.x]=1;const N=o();for(const E of I.cells)e[(u.y+E.y)*p+u.x+E.x]=0;return N};let f={type:"pass"},b=-le(s),m=Number.POSITIVE_INFINITY,M=!1;const _=new Int32Array(p),y=new Int32Array(p);for(const u of r){if(u.type==="pass")continue;const v=O(s,u.slot);if(v===void 0)continue;const I=v.orientations[u.orientation];if(I===void 0)continue;_.fill(0),y.fill(0);for(const U of I.cells){const T=u.x+U.x,$=u.y+U.y;_[$]=_[$]+1,y[T]=y[T]+1}let N=0;for(const U of I.cells){const T=u.y+U.y,$=u.x+U.x;_[T]!==0&&d[T]+_[T]===p&&(N+=1,_[T]=0),y[$]!==0&&h[$]+y[$]===p&&(N+=1,y[$]=0)}const E=2*v.size-be(v.size,u.slot,s.balance)+c*N;if(E<b)continue;if(E>b){b=E,f=u,M=!1,m=Number.POSITIVE_INFINITY;continue}M||(m=l(f),M=!0);const de=l(u);de<m&&(m=de,f=u)}return f}}}const Gt=Object.freeze({hopelessCellCost:2,riskyCellCost:2,riskyRegionSize:7,lineProgress:.8});function ct(i=Gt,e="heuristic"){const t=new Uint8Array(w),n=new Uint8Array(w),o=new Int32Array(w);function s(r){n.fill(0);let a=0;for(let c=0;c<w;c+=1){if(t[c]===1||n[c]===1)continue;let d=0,h=0;for(o[h]=c,h+=1,n[c]=1;h>0;){h-=1;const l=o[h];d+=1;const f=l%p,b=l/p|0;if(f>0){const m=l-1;t[m]===0&&n[m]===0&&(n[m]=1,o[h]=m,h+=1)}if(f<p-1){const m=l+1;t[m]===0&&n[m]===0&&(n[m]=1,o[h]=m,h+=1)}if(b>0){const m=l-p;t[m]===0&&n[m]===0&&(n[m]=1,o[h]=m,h+=1)}if(b<p-1){const m=l+p;t[m]===0&&n[m]===0&&(n[m]=1,o[h]=m,h+=1)}}d<r?a+=d*i.hopelessCellCost:d<i.riskyRegionSize&&(a+=d*i.riskyCellCost)}return a}return{name:e,chooseAction(r){const a=nt(r);if(a.length===0)throw new lt(e);const c=r.players[r.toMove],{lineBonus:d}=r.balance,h=le(r);let l=Number.POSITIVE_INFINITY;for(let u=r.marker;u<r.chain.length;u+=1){const v=P(r.chain[u]).size;v<l&&(l=v)}Number.isFinite(l)||(l=1);const f=new Int32Array(p),b=new Int32Array(p);for(let u=0;u<p;u+=1)for(let v=0;v<p;v+=1)c.cells[u*p+v]!==S&&(f[u]=f[u]+1,b[v]=b[v]+1);for(let u=0;u<w;u+=1)t[u]=c.cells[u]===S?0:1;let m={type:"pass"},M=-h-s(l);const _=new Int32Array(p),y=new Int32Array(p);for(const u of a){if(u.type==="pass")continue;const v=O(r,u.slot);if(v===void 0)continue;const I=v.orientations[u.orientation];if(I===void 0)continue;_.fill(0),y.fill(0);for(const $ of I.cells)_[u.y+$.y]=_[u.y+$.y]+1,y[u.x+$.x]=y[u.x+$.x]+1;let N=0,E=0;for(let $=0;$<p;$+=1){const Te=_[$];if(Te>0){const B=f[$],L=B+Te;L===p&&(N+=1),E+=(L*L-B*B)/p}const Pe=y[$];if(Pe>0){const B=b[$],L=B+Pe;L===p&&(N+=1),E+=(L*L-B*B)/p}}const de=2*v.size-be(v.size,u.slot,r.balance)+d*N;for(const $ of I.cells)t[(u.y+$.y)*p+u.x+$.x]=1;const U=s(l);for(const $ of I.cells)t[(u.y+$.y)*p+u.x+$.x]=0;const T=de+i.lineProgress*E-U;T>M&&(M=T,m=u)}return m}}}const pe=globalThis,Se=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),Be=new WeakMap;let dt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Se&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Be.set(t,e))}return e}toString(){return this.cssText}};const Kt=i=>new dt(typeof i=="string"?i:i+"",void 0,_e),W=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new dt(t,i,_e)},Xt=(i,e)=>{if(Se)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=pe.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}},Le=Se?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Kt(t)})(i):i;const{is:Zt,defineProperty:Jt,getOwnPropertyDescriptor:Qt,getOwnPropertyNames:ei,getOwnPropertySymbols:ti,getPrototypeOf:ii}=Object,ge=globalThis,Fe=ge.trustedTypes,ni=Fe?Fe.emptyScript:"",oi=ge.reactiveElementPolyfillSupport,Q=(i,e)=>i,ke={toAttribute(i,e){switch(e){case Boolean:i=i?ni:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ht=(i,e)=>!Zt(i,e),He={attribute:!0,type:String,converter:ke,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;let j=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=He){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Jt(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:s}=Qt(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:o,set(r){const a=o?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??He}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const e=ii(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const t=this.properties,n=[...ei(t),...ti(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Le(o))}else e!==void 0&&t.push(Le(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:ke).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ke;this._$Em=o;const a=r.fromAttribute(t,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,s){if(e!==void 0){const r=this.constructor;if(o===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??ht)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:r}=s,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[Q("elementProperties")]=new Map,j[Q("finalized")]=new Map,oi?.({ReactiveElement:j}),(ge.reactiveElementVersions??=[]).push("2.1.2");const Ee=globalThis,De=i=>i,me=Ee.trustedTypes,We=me?me.createPolicy("lit-html",{createHTML:i=>i}):void 0,pt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,ut="?"+z,si=`<${ut}>`,D=document,te=()=>D.createComment(""),ie=i=>i===null||typeof i!="object"&&typeof i!="function",Ie=Array.isArray,ri=i=>Ie(i)||typeof i?.[Symbol.iterator]=="function",$e=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Ve=/>/g,F=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ye=/"/g,ft=/^(?:script|style|textarea|title)$/i,ai=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=ai(1),X=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Ge=new WeakMap,H=D.createTreeWalker(D,129);function mt(i,e){if(!Ie(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return We!==void 0?We.createHTML(e):e}const li=(i,e)=>{const t=i.length-1,n=[];let o,s=e===2?"<svg>":e===3?"<math>":"",r=J;for(let a=0;a<t;a++){const c=i[a];let d,h,l=-1,f=0;for(;f<c.length&&(r.lastIndex=f,h=r.exec(c),h!==null);)f=r.lastIndex,r===J?h[1]==="!--"?r=je:h[1]!==void 0?r=Ve:h[2]!==void 0?(ft.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=F):h[3]!==void 0&&(r=F):r===F?h[0]===">"?(r=o??J,l=-1):h[1]===void 0?l=-2:(l=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?F:h[3]==='"'?Ye:qe):r===Ye||r===qe?r=F:r===je||r===Ve?r=J:(r=F,o=void 0);const b=r===F&&i[a+1].startsWith("/>")?" ":"";s+=r===J?c+si:l>=0?(n.push(d),c.slice(0,l)+pt+c.slice(l)+z+b):c+z+(l===-2?a:b)}return[mt(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ne{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let s=0,r=0;const a=e.length-1,c=this.parts,[d,h]=li(e,t);if(this.el=ne.createElement(d,n),H.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(o=H.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const l of o.getAttributeNames())if(l.endsWith(pt)){const f=h[r++],b=o.getAttribute(l).split(z),m=/([.?@])?(.*)/.exec(f);c.push({type:1,index:s,name:m[2],strings:b,ctor:m[1]==="."?di:m[1]==="?"?hi:m[1]==="@"?pi:ye}),o.removeAttribute(l)}else l.startsWith(z)&&(c.push({type:6,index:s}),o.removeAttribute(l));if(ft.test(o.tagName)){const l=o.textContent.split(z),f=l.length-1;if(f>0){o.textContent=me?me.emptyScript:"";for(let b=0;b<f;b++)o.append(l[b],te()),H.nextNode(),c.push({type:2,index:++s});o.append(l[f],te())}}}else if(o.nodeType===8)if(o.data===ut)c.push({type:2,index:s});else{let l=-1;for(;(l=o.data.indexOf(z,l+1))!==-1;)c.push({type:7,index:s}),l+=z.length-1}s++}}static createElement(e,t){const n=D.createElement("template");return n.innerHTML=e,n}}function Z(i,e,t=i,n){if(e===X)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl;const s=ie(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Z(i,o._$AS(i,e.values),o,n)),e}class ci{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??D).importNode(t,!0);H.currentNode=o;let s=H.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new ce(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new ui(s,this,e)),this._$AV.push(d),c=n[++a]}r!==c?.index&&(s=H.nextNode(),r++)}return H.currentNode=D,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ce{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ie(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ri(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ne.createElement(mt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const s=new ci(o,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new ne(e)),t}k(e){Ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const s of e)o===t.length?t.push(n=new ce(this.O(te()),this.O(te()),this,this.options)):n=t[o],n._$AI(s),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=De(e).nextSibling;De(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ye{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,s){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,o){const s=this.strings;let r=!1;if(s===void 0)e=Z(this,e,t,0),r=!ie(e)||e!==this._$AH&&e!==X,r&&(this._$AH=e);else{const a=e;let c,d;for(e=s[0],c=0;c<s.length-1;c++)d=Z(this,a[n+c],t,c),d===X&&(d=this._$AH[c]),r||=!ie(d)||d!==this._$AH[c],d===k?e=k:e!==k&&(e+=(d??"")+s[c+1]),this._$AH[c]=d}r&&!o&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class di extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}}class hi extends ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class pi extends ye{constructor(e,t,n,o,s){super(e,t,n,o,s),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??k)===X)return;const n=this._$AH,o=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==k&&(n===k||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ui{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const fi=Ee.litHtmlPolyfillSupport;fi?.(ne,ce),(Ee.litHtmlVersions??=[]).push("3.3.3");const mi=(i,e,t)=>{const n=t?.renderBefore??e;let o=n._$litPart$;if(o===void 0){const s=t?.renderBefore??null;n._$litPart$=o=new ce(e.insertBefore(te(),s),s,void 0,t??{})}return o._$AI(i),o};const Ce=globalThis;class C extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}C._$litElement$=!0,C.finalized=!0,Ce.litElementHydrateSupport?.({LitElement:C});const bi=Ce.litElementPolyfillSupport;bi?.({LitElement:C});(Ce.litElementVersions??=[]).push("4.2.2");function Ae(i,e,t,n,o,s,r,a=1){const c=yt(s),d=vt(r),h=new Set(e.map(l=>`${l.x},${l.y}`));i.save(),i.globalAlpha=a,i.fillStyle=c.fill,i.beginPath();for(const l of e)i.rect(t+l.x*o,n+l.y*o,o,o);i.fill(),gi(i,e,t,n,o,d,c.seam),i.strokeStyle=c.seam,i.lineWidth=Math.max(1,o*.06),i.beginPath();for(const l of e){const f=t+l.x*o,b=n+l.y*o;h.has(`${l.x},${l.y-1}`)||(i.moveTo(f,b),i.lineTo(f+o,b)),h.has(`${l.x},${l.y+1}`)||(i.moveTo(f,b+o),i.lineTo(f+o,b+o)),h.has(`${l.x-1},${l.y}`)||(i.moveTo(f,b),i.lineTo(f,b+o)),h.has(`${l.x+1},${l.y}`)||(i.moveTo(f+o,b),i.lineTo(f+o,b+o))}i.stroke(),i.restore()}function gi(i,e,t,n,o,s,r){if(s==="solid")return;i.save(),i.beginPath();for(const y of e)i.rect(t+y.x*o,n+y.y*o,o,o);i.clip();let a=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(const y of e)a=Math.min(a,y.x),c=Math.min(c,y.y),d=Math.max(d,y.x+1),h=Math.max(h,y.y+1);const l=t+a*o,f=n+c*o,b=(d-a)*o,m=(h-c)*o;i.strokeStyle=r,i.globalAlpha=.55;const M=o*.34;i.lineWidth=M*.55;const _=b+m;for(let y=-m;y<=_;y+=M)i.beginPath(),s==="diagonal-down"?(i.moveTo(l+y,f),i.lineTo(l+y+m,f+m)):(i.moveTo(l+y,f+m),i.lineTo(l+y+m,f)),i.stroke();i.restore()}function yi(i,e,t){const n=p*e;i.fillStyle=A.boardWell,i.fillRect(0,0,n,n),i.strokeStyle=A.boardLine,i.lineWidth=1,i.beginPath();for(let c=1;c<p;c+=1)i.moveTo(c*e+.5,0),i.lineTo(c*e+.5,n),i.moveTo(0,c*e+.5),i.lineTo(n,c*e+.5);i.stroke();const o=Math.floor(p/2);i.save(),i.strokeStyle="rgba(47, 42, 36, 0.22)",i.lineWidth=Math.max(1,e*.05);const s=o*e+e/2,r=o*e+e/2,a=e*.22;i.beginPath(),i.arc(s,r,a,0,Math.PI*2),i.moveTo(s-a,r),i.lineTo(s+a,r),i.moveTo(s,r-a),i.lineTo(s,r+a),i.stroke(),i.restore(),i.strokeStyle=t?A.activeFrame:A.idleFrame,i.lineWidth=t?4:2,i.strokeRect(i.lineWidth/2,i.lineWidth/2,n-i.lineWidth,n-i.lineWidth)}const R=14;function vi(i,e,t){const n=p*t,o=2,s=R-o*2,r=t*.7;i.save(),i.fillStyle="#c08a2e",i.strokeStyle="#8e6318",i.lineWidth=1;const a=(c,d,h,l)=>{i.beginPath(),i.roundRect(c,d,h,l,Math.min(h,l)/2),i.fill(),i.stroke()};for(let c=0;c<p;c+=1){if(e[c]){const d=c*t+(t-r)/2;a(-R+o,d,s,r),a(n+o,d,s,r)}if(e[p+c]){const d=c*t+(t-r)/2;a(d,-R+o,r,s),a(d,n+o,r,s)}}i.restore()}function $i(i,e,t){const{cellSize:n,active:o,lines:s,ghost:r}=t,a=p*n+R*2;i.clearRect(0,0,a,a),i.save(),i.translate(R,R),yi(i,n,o);const c=new Map;for(let d=0;d<p;d+=1)for(let h=0;h<p;h+=1){const l=e.cells[d*p+h];if(l===void 0||l===S)continue;const f=c.get(l)??[];f.push({x:h,y:d}),c.set(l,f)}for(const[d,h]of c)Ae(i,h,0,0,n,d,P(d).size);if(vi(i,s,n),r!==void 0){Ae(i,r.orientation.cells,r.x*n,r.y*n,n,r.pieceId,r.size,.5),i.save(),i.fillStyle=r.valid?A.valid:A.invalid;for(const d of r.orientation.cells)i.fillRect((r.x+d.x)*n,(r.y+d.y)*n,n,n);i.restore()}i.restore()}function bt(i,e,t,n,o,s,r){i.clearRect(0,0,o,s);const a=Math.min(r,Math.floor(o/t.width),Math.floor(s/t.height)),c=(o-t.width*a)/2,d=(s-t.height*a)/2;Ae(i,t.cells,c,d,a,e,n)}class xi extends C{static styles=W`
    :host {
      display: block;
    }
    canvas {
      display: block;
      border-radius: 4px;
      cursor: default;
    }
    canvas.placing {
      cursor: crosshair;
    }
  `;static properties={player:{attribute:!1},lines:{attribute:!1},ghost:{attribute:!1},active:{type:Boolean},cellSize:{type:Number},interactive:{type:Boolean}};constructor(){super(),this.lines=[],this.active=!1,this.cellSize=44,this.interactive=!1}get extent(){return p*this.cellSize+R*2}render(){return g`
      <canvas
        class=${this.interactive?"placing":""}
        @pointermove=${this.handlePointerMove}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.handleClick}
      ></canvas>
    `}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null||this.player===void 0)return;const t=window.devicePixelRatio||1,n=Math.round(this.extent*t);(e.width!==n||e.height!==n)&&(e.width=n,e.height=n,e.style.width=`${this.extent}px`,e.style.height=`${this.extent}px`);const o=e.getContext("2d");o!==null&&(o.setTransform(t,0,0,t,0,0),$i(o,this.player,{cellSize:this.cellSize,active:this.active,lines:this.lines,ghost:this.ghost}))}cellFromEvent(e){const t=this.renderRoot.querySelector("canvas");if(t===null)return null;const n=t.getBoundingClientRect(),o=Math.floor((e.clientX-n.left-R)/this.cellSize),s=Math.floor((e.clientY-n.top-R)/this.cellSize);return o<0||s<0||o>=p||s>=p?null:{x:o,y:s}}handlePointerMove(e){if(!this.interactive)return;const t=this.cellFromEvent(e);if(t===null){this.dispatchEvent(new CustomEvent("cell-leave"));return}this.dispatchEvent(new CustomEvent("cell-hover",{detail:t}))}handlePointerLeave(){this.interactive&&this.dispatchEvent(new CustomEvent("cell-leave"))}handleClick(e){if(!this.interactive)return;const t=this.cellFromEvent(e);t!==null&&this.dispatchEvent(new CustomEvent("cell-click",{detail:t}))}}customElements.define("omino-board",xi);class wi extends C{static styles=W`
    :host {
      display: block;
    }
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 6px 8px;
      border-radius: 8px;
      background: var(--omino-linen);
      border: 2px solid transparent;
      transition: transform 0.08s ease-out;
    }
    .card.buyable {
      background: #f6efe0;
      border-color: rgba(47, 42, 36, 0.18);
      box-shadow: 0 2px 5px rgba(47, 42, 36, 0.14);
      cursor: pointer;
    }
    .card.buyable:hover {
      transform: translateY(-2px);
    }
    .card.selected {
      border-color: var(--omino-active);
      box-shadow: 0 4px 10px rgba(168, 67, 47, 0.3);
    }
    /* A purchasable piece that fits nowhere on the active player's board. It
       stays clickable — the player may still pick it up to see for themselves —
       but the shape is muted and a tab spells out why, so a buy that can never
       be legal is not left to be discovered one hovered square at a time. */
    .card.unplaceable {
      position: relative;
    }
    .card.unplaceable canvas,
    .card.unplaceable .name,
    .card.unplaceable .family,
    .card.unplaceable .cost {
      opacity: 0.45;
      filter: grayscale(0.6);
    }
    .card.unplaceable.selected .cost,
    .card.unplaceable.selected .family {
      color: var(--omino-active);
    }
    .no-fit {
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #fdf6e8;
      background: rgba(47, 42, 36, 0.82);
      border-radius: 6px;
      padding: 2px 6px;
      pointer-events: none;
    }
    .card.upcoming {
      opacity: 0.62;
    }
    .card.burned {
      opacity: 0.4;
      filter: grayscale(0.85);
    }
    canvas {
      display: block;
    }
    .name {
      font-size: 11px;
      font-weight: 600;
      color: var(--omino-ink);
      letter-spacing: 0.02em;
    }
    .meta {
      font-size: 10px;
      color: var(--omino-ink-soft);
    }
    .cost {
      font-size: 18px;
      font-weight: 700;
      line-height: 1;
      color: var(--omino-active);
    }
    .burned-label {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--omino-ink-soft);
    }
    /* Family name as a header above the shape: it categorises the piece, so
       it introduces the card rather than trailing after it. All caps with
       wide tracking matches the OMINO CHAIN / REMAINING / FABRIC KEY labels,
       so it reads as a category rather than as part of the piece's name. */
    .family {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.11em;
      text-transform: uppercase;
      color: var(--omino-ink-soft);
      margin-bottom: 2px;
    }
    .card.selected .family {
      color: var(--omino-active);
    }
    .card.buyable .name {
      font-size: 13px;
    }
    .card.buyable .meta {
      font-size: 11px;
    }
    .card.buyable .cost {
      font-size: 22px;
    }
  `;static properties={pieceId:{type:Number},orientation:{type:Number},variant:{type:String},cost:{type:Number},selected:{type:Boolean},unplaceable:{type:Boolean},chainNumber:{type:Number},box:{type:Number}};constructor(){super(),this.pieceId=0,this.orientation=0,this.variant="upcoming",this.selected=!1,this.unplaceable=!1,this.box=56}render(){const e=P(this.pieceId),t=this.variant==="buyable"&&this.unplaceable,n=["card",this.variant,this.selected?"selected":"",t?"unplaceable":""].join(" ");return g`
      <div class=${n}>
        ${t?g`<span class="no-fit" title="This piece fits nowhere on your board"
              >Won't fit</span
            >`:null}
        ${this.variant==="buyable"?g`<span class="family">${Je(e.size)}</span>`:null}
        <canvas></canvas>
        <span class="name">${e.name}</span>
        ${this.renderMeta()}
        ${this.cost===void 0?null:g`<span class="cost">${this.cost}</span>`}
      </div>
    `}renderMeta(){return this.variant==="burned"?g`<span class="burned-label">BURNED</span>`:this.variant==="buyable"?null:g`<span class="meta"
      >${this.chainNumber===void 0?"":`#${this.chainNumber}`}</span
    >`}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null)return;const t=P(this.pieceId),n=t.orientations[this.orientation]??t.orientations[0],o=window.devicePixelRatio||1;e.width=Math.round(this.box*o),e.height=Math.round(this.box*o),e.style.width=`${this.box}px`,e.style.height=`${this.box}px`;const s=e.getContext("2d");s!==null&&(s.setTransform(o,0,0,o,0,0),bt(s,this.pieceId,n,t.size,this.box,this.box,Math.floor(this.box/6)))}}customElements.define("omino-card",wi);class ee extends C{static styles=W`
    :host {
      display: block;
      background: var(--omino-linen-deep);
      border-top: 2px solid rgba(47, 42, 36, 0.16);
      padding: 10px 16px 12px;
    }
    .heading {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 8px;
    }
    h2 {
      margin: 0;
      font-size: 12px;
      letter-spacing: 0.16em;
      font-weight: 700;
      color: var(--omino-ink);
    }
    .counter {
      font-size: 12px;
      color: var(--omino-ink-soft);
    }
    .band {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .group {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .group.buyable {
      padding: 4px 10px;
      border-radius: 10px;
      background: rgba(255, 250, 238, 0.7);
      border: 1px solid rgba(47, 42, 36, 0.12);
    }
    .divider {
      width: 2px;
      align-self: stretch;
      background: rgba(47, 42, 36, 0.14);
      border-radius: 1px;
    }
    button.arrow {
      font: inherit;
      font-size: 14px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 1px solid rgba(47, 42, 36, 0.25);
      background: var(--omino-linen);
      color: var(--omino-ink);
      cursor: pointer;
    }
    button.arrow:disabled {
      opacity: 0.35;
      cursor: default;
    }
    .chip {
      font-size: 11px;
      line-height: 1.5;
      color: var(--omino-ink);
      background: var(--omino-linen);
      border: 1px solid rgba(47, 42, 36, 0.16);
      border-radius: 8px;
      padding: 6px 10px;
      white-space: nowrap;
    }
    .chip b {
      font-weight: 700;
    }
    .chip.remaining {
      display: flex;
      flex-direction: column;
      gap: 1px;
      line-height: 1.35;
    }
    .chip-title {
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-bottom: 3px;
    }
    .rline {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
    .rline.odd {
      color: var(--omino-active);
      margin-top: 4px;
      border-top: 1px solid rgba(47, 42, 36, 0.12);
      padding-top: 3px;
    }
    .spacer {
      flex: 1;
    }
  `;static properties={state:{attribute:!1},summary:{attribute:!1},selectedSlot:{type:Number},selectedOrientation:{type:Number},unplaceableSlots:{attribute:!1},windowStart:{type:Number}};static UPCOMING_VISIBLE=7;static BURNED_VISIBLE=2;constructor(){super(),this.selectedOrientation=0,this.unplaceableSlots=new Set,this.windowStart=0}render(){const e=this.state,t=this.summary;if(e===void 0||t===void 0)return null;const n=e.balance,o=Math.min(3,t.remaining),s=e.burned.slice(-ee.BURNED_VISIBLE),r=e.marker+o+this.windowStart,a=e.chain.slice(r,r+ee.UPCOMING_VISIBLE),c=Math.max(0,t.remaining-o-this.windowStart);return g`
      <div class="heading">
        <h2>OMINO CHAIN</h2>
        <span class="counter"
          >${t.remaining} of ${xe} remaining</span
        >
      </div>

      <div class="band">
        <button
          class="arrow"
          ?disabled=${this.windowStart===0}
          @click=${()=>this.scrollWindow(-1)}
          title="Scroll the upcoming window back"
        >
          ‹
        </button>

        <div class="group">
          ${s.map(d=>g`<omino-card
                .pieceId=${d}
                variant="burned"
                .box=${38}
              ></omino-card>`)}
        </div>

        <div class="divider"></div>

        <div class="group buyable">
          ${Array.from({length:o},(d,h)=>{const l=h+1,f=e.chain[e.marker+h],b=this.selectedSlot===l,m=this.unplaceableSlots.has(l);return g`<omino-card
              .pieceId=${f}
              .orientation=${b?this.selectedOrientation:0}
              variant="buyable"
              .cost=${be(P(f).size,l,n)}
              ?selected=${b}
              ?unplaceable=${m}
              .box=${104}
              @click=${()=>this.selectSlot(l)}
            ></omino-card>`})}
        </div>

        <div class="divider"></div>

        <div class="group">
          ${a.map((d,h)=>g`<omino-card
                .pieceId=${d}
                variant="upcoming"
                .chainNumber=${r+h+1}
                .box=${40}
              ></omino-card>`)}
        </div>
        <button
          class="arrow"
          ?disabled=${c<=ee.UPCOMING_VISIBLE}
          @click=${()=>this.scrollWindow(1)}
          title="Scroll the upcoming window forward"
        >
          ›
        </button>

        <div class="spacer"></div>

        <div class="chip remaining">
          <span class="chip-title">REMAINING</span>
          <div class="rline"><span>6s</span><b>${t.hexominoes}</b></div>
          <div class="rline"><span>5s</span><b>${t.pentominoes}</b></div>
          <div class="rline"><span>4s</span><b>${t.tetrominoes}</b></div>
          <div class="rline"><span>1–3</span><b>${t.small}</b></div>
          <div class="rline odd"><span>odd left</span><b>${t.odd}</b></div>
        </div>
      </div>
    `}selectSlot(e){this.dispatchEvent(new CustomEvent("slot-select",{detail:{slot:e}}))}scrollWindow(e){const t=Math.max(0,this.windowStart+e*3);this.dispatchEvent(new CustomEvent("window-change",{detail:{windowStart:t}}))}}customElements.define("omino-chain",ee);class ki extends C{static styles=W`
    :host {
      display: block;
    }
    .piece {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      padding: 6px;
      border-radius: 8px;
      background: #f6efe0;
      border: 1px solid rgba(47, 42, 36, 0.12);
    }
    canvas {
      display: block;
    }
    .name {
      font-size: 11px;
      font-weight: 600;
      color: var(--omino-ink);
      letter-spacing: 0.02em;
    }
  `;static properties={pieceId:{type:Number},box:{type:Number}};constructor(){super(),this.pieceId=0,this.box=48}render(){const e=P(this.pieceId);return g`
      <div class="piece">
        <canvas></canvas>
        <span class="name">${e.name}</span>
      </div>
    `}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null)return;const t=P(this.pieceId),n=t.orientations[0],o=window.devicePixelRatio||1;e.width=Math.round(this.box*o),e.height=Math.round(this.box*o),e.style.width=`${this.box}px`,e.style.height=`${this.box}px`;const s=e.getContext("2d");s!==null&&(s.setTransform(o,0,0,o,0,0),bt(s,this.pieceId,n,t.size,this.box,this.box,Math.floor(this.box/6)))}}customElements.define("omino-piece",ki);function Ai(){const i=new Map;for(const e of se){const t=i.get(e.size)??[];t.push(e.id),i.set(e.size,t)}return[...i.keys()].sort((e,t)=>t-e).map(e=>({size:e,title:`${Je(e).replace(/^./,t=>t.toUpperCase())}es`,pieces:i.get(e)??[]}))}const Si=Ai();class _i extends C{static styles=W`
    :host {
      position: fixed;
      inset: 0;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 40px 20px;
      background: rgba(31, 27, 22, 0.55);
      overflow-y: auto;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    .panel {
      position: relative;
      width: min(880px, 100%);
      background: var(--omino-linen);
      color: var(--omino-ink);
      border-radius: 14px;
      border: 1px solid rgba(47, 42, 36, 0.2);
      box-shadow: 0 18px 50px rgba(31, 27, 22, 0.4);
      padding: 28px 32px 34px;
    }
    .close {
      position: absolute;
      top: 16px;
      right: 16px;
      font: inherit;
      font-size: 18px;
      line-height: 1;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid rgba(47, 42, 36, 0.25);
      background: #fbf6ea;
      color: var(--omino-ink);
      cursor: pointer;
    }
    .close:hover {
      background: #fffaf0;
    }
    h1 {
      margin: 0 0 4px;
      font-size: 24px;
      letter-spacing: 0.04em;
    }
    .tagline {
      margin: 0 0 20px;
      font-size: 13px;
      color: var(--omino-ink-soft);
      font-style: italic;
    }
    section {
      margin-top: 26px;
    }
    h2 {
      margin: 0 0 10px;
      font-size: 12px;
      letter-spacing: 0.16em;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--omino-ink);
      border-bottom: 1px solid rgba(47, 42, 36, 0.16);
      padding-bottom: 5px;
    }
    p {
      margin: 0 0 10px;
      font-size: 14px;
      line-height: 1.55;
    }
    p:last-child {
      margin-bottom: 0;
    }
    ul {
      margin: 0 0 10px;
      padding-left: 20px;
      font-size: 14px;
      line-height: 1.55;
    }
    li {
      margin-bottom: 5px;
    }
    b {
      font-weight: 700;
    }
    code {
      font-family: 'Cascadia Code', 'Consolas', monospace;
      font-size: 13px;
      background: rgba(47, 42, 36, 0.08);
      padding: 1px 5px;
      border-radius: 4px;
    }
    .formula {
      display: inline-block;
      font-family: 'Cascadia Code', 'Consolas', monospace;
      font-size: 14px;
      background: #f6efe0;
      border: 1px solid rgba(47, 42, 36, 0.16);
      border-radius: 8px;
      padding: 8px 12px;
      margin: 4px 0 10px;
    }
    kbd {
      font-family: 'Segoe UI', system-ui, sans-serif;
      font-size: 12px;
      font-weight: 600;
      background: #fbf6ea;
      border: 1px solid rgba(47, 42, 36, 0.3);
      border-bottom-width: 2px;
      border-radius: 5px;
      padding: 1px 6px;
    }
    /* Fabric key, mirrored from the chain band so the two never drift. */
    .fabric-key {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 20px;
      font-size: 13px;
    }
    .key-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .swatch {
      display: inline-block;
      width: 22px;
      height: 16px;
      border-radius: 3px;
      border: 1px solid rgba(47, 42, 36, 0.3);
    }
    .swatch.down {
      background: repeating-linear-gradient(
        135deg,
        #c08a2e 0 3px,
        #8e6318 3px 6px
      );
    }
    .swatch.up {
      background: repeating-linear-gradient(45deg, #5c7248 0 3px, #3f5231 3px 6px);
    }
    .swatch.solid {
      background: #2f4b6e;
    }
    .family {
      margin-top: 18px;
    }
    .family-head {
      display: flex;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 8px;
    }
    .family-name {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
    .family-count {
      font-size: 12px;
      color: var(--omino-ink-soft);
    }
    .pieces {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .gallery-note {
      font-size: 13px;
      color: var(--omino-ink-soft);
      margin-bottom: 4px;
    }
  `;onKeyDown=e=>{e.key==="Escape"&&(e.stopImmediatePropagation(),e.preventDefault(),this.close())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown,!0)}disconnectedCallback(){window.removeEventListener("keydown",this.onKeyDown,!0),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent("close"))}render(){return g`
      <div
        class="panel"
        @click=${e=>e.stopPropagation()}
      >
        <button class="close" title="Close (Esc)" @click=${()=>this.close()}>
          ✕
        </button>

        <h1>Omino</h1>
        <p class="tagline">
          A quilt of polyominoes — buy pieces from a shared chain, stitch them
          onto your board, and score coverage and completed lines.
        </p>

        ${this.renderStory()} ${this.renderRules()} ${this.renderScoring()}
        ${this.renderFabricKey()} ${this.renderControls()}
        ${this.renderGallery()}
      </div>
    `}renderStory(){return g`
      <section>
        <h2>Where the name comes from</h2>
        <p>
          A <b>polyomino</b> is a shape made of unit squares joined edge to edge
          — the domino you know is the two-square case. The word was coined in
          1953 by the mathematician <b>Solomon W. Golomb</b>, who noticed that
          "domino" sounds like <i>d-omino</i>, as if the "d-" meant <i>two</i>.
          Reading it that way leaves <b>"-omino"</b> as the part that means a
          single square.
        </p>
        <p>
          So he back-formed the whole family from that root: one square is an
          <i>omino</i>, two a <i>domino</i>, three a <i>tromino</i>, and on up
          through <i>tetromino</i>, <i>pentomino</i> and <i>hexomino</i>. This
          game is built from exactly that family — every free polyomino from one
          square up to six — so it takes its name from their shared root:
          <b>Omino</b>.
        </p>
      </section>
    `}renderRules(){return g`
      <section>
        <h2>How to play</h2>
        <p>
          Each player has a personal <b>9×9 board</b> (81 cells). A shared,
          shuffled <b>chain</b> of all 56 pieces sits between you; a marker
          points at the next three pieces, the purchasable <b>slots 1, 2, 3</b>.
        </p>
        <p>
          <b>Turn order follows tempo, not alternation.</b> Whoever has the
          lower total <code>spent</code> acts next — so a cheap move can let you
          act several times in a row. Ties go to whoever did not act most
          recently (Player 1 opens).
        </p>
        <p>On your turn you take exactly one action:</p>
        <ul>
          <li>
            <b>Buy (= place, one action).</b> Pick a slot <code>k</code>,
            rotate and/or flip the piece, and place it on any legal empty cells
            of your board (inside the grid, no overlap — adjacency is
            <i>not</i> required). It costs <code>size + (k − 1)</code>: deeper
            slots cost more, and every piece <i>before</i> your chosen slot is
            <b>burned</b> — gone from the game for both players. You may only buy
            a piece you can actually place.
          </li>
          <li>
            <b>Pass.</b> Adds <code>2</code> to your <code>spent</code> and
            <b>burns all three</b> purchasable pieces. Passing is always legal,
            and is forced when no purchasable piece fits anywhere on your board.
          </li>
        </ul>
        <p>
          Every action advances the marker, so the chain only shrinks. The game
          ends the moment the chain runs out — that is the only end condition.
        </p>
      </section>
    `}renderScoring(){return g`
      <section>
        <h2>Scoring</h2>
        <p>Your score is shown live and always equals:</p>
        <span class="formula"
          >score = 2 × covered − spent + 6 × lines completed</span
        >
        <ul>
          <li>
            <b>Covered</b> — squares you have placed. Every square is worth two
            points, so bigger pieces pay off, but…
          </li>
          <li>
            <b>Spent</b> — the running tempo cost of everything you bought (and
            any passes). It only ever goes up.
          </li>
          <li>
            <b>Lines</b> — each fully covered row or column scores a
            <b>+6</b> bonus, once. A board has 18 lines (9 rows + 9 columns).
          </li>
        </ul>
        <p>
          The board has 81 cells — an odd number — and even-sized pieces only
          ever change coverage in even steps. Covering every cell therefore
          needs an <b>odd number of odd-sized pieces</b> (sizes 1, 3, 5). The
          chain band shows how many odd pieces remain; what you do with that is
          up to you.
        </p>
        <p>
          When the chain empties, the <b>higher score wins</b>. Ties break on
          more covered, then less spent, then a draw. You may <b>undo</b> your
          most recent action until your opponent responds.
        </p>
      </section>
    `}renderFabricKey(){return g`
      <section>
        <h2>Fabric key</h2>
        <p class="gallery-note">
          The weave on a piece tells you its size class at a glance — readable
          even without colour:
        </p>
        <div class="fabric-key">
          <span class="key-row"
            ><span class="swatch down"></span> Hexomino (6) · stripes ↘</span
          >
          <span class="key-row"
            ><span class="swatch up"></span> Pentomino (5) · stripes ↗</span
          >
          <span class="key-row"
            ><span class="swatch solid"></span> 1–4 squares · solid weave</span
          >
        </div>
      </section>
    `}renderControls(){return g`
      <section>
        <h2>Controls &amp; setup</h2>
        <ul>
          <li>
            <b>Seed.</b> The seed shuffles the chain. The same seed always
            produces the exact same game, so you can replay a position or share
            one. Type a seed and press <kbd>Enter</kbd> or <b>New game</b>, or
            hit the <b>🎲</b> button for a fresh random seed.
          </li>
          <li>
            <b>Hotseat.</b> Two players share this screen, taking turns. Boards
            are fixed — Player 1 on the left, Player 2 on the right — and the
            active board is highlighted.
          </li>
          <li>
            <b>vs AI.</b> You play the left board against the computer. Two
            strengths: <b>Baseline</b> grabs the biggest piece it can and never
            weighs fit; <b>Sharp</b> is packing-aware and beats Baseline about
            61% of the time.
          </li>
          <li>
            <b>Placing a piece.</b> Click a purchasable card to pick it up. You
            can both <b>rotate</b> it (<kbd>R</kbd>) and <b>flip</b> it — mirror
            it — (<kbd>F</kbd>), and combine the two freely to reach any of the
            piece's orientations (up to 8; fewer for symmetric shapes). The
            <b>Rotate</b> / <b>Flip</b> buttons beside the board do the same, and
            <kbd>Esc</kbd> deselects. Click a valid square to place it. A card
            that fits nowhere on your board is marked <b>Won't fit</b>.
          </li>
        </ul>
      </section>
    `}renderGallery(){return g`
      <section>
        <h2>Every piece in the pot</h2>
        <p class="gallery-note">
          The pot holds exactly one of every free polyomino from one square to
          six — 56 pieces in all, identified up to rotation and reflection.
        </p>
        ${Si.map(e=>g`
            <div class="family">
              <div class="family-head">
                <span class="family-name">${e.title}</span>
                <span class="family-count"
                  >${e.pieces.length} ${e.pieces.length===1?"piece":"pieces"} · ${e.size}
                  ${e.size===1?"square":"squares"} each ·
                  expected ${Ot[e.size]}</span
                >
              </div>
              <div class="pieces">
                ${e.pieces.map(t=>g`<omino-piece .pieceId=${t} .box=${48}></omino-piece>`)}
              </div>
            </div>
          `)}
      </section>
    `}}customElements.define("omino-help",_i);class Ei extends C{static styles=W`
    :host {
      display: block;
      width: 220px;
      font-size: 13px;
      color: var(--omino-ink);
    }
    .scores {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      gap: 8px;
      margin-bottom: 10px;
    }
    .score {
      text-align: center;
      flex: 1;
      padding: 6px 4px;
      border-radius: 8px;
    }
    .score.leader {
      background: rgba(168, 67, 47, 0.12);
    }
    .score .value {
      display: block;
      font-size: 34px;
      font-weight: 700;
      line-height: 1;
    }
    .score .who {
      display: block;
      font-size: 11px;
      color: var(--omino-ink-soft);
      margin-top: 2px;
    }
    .tempo {
      background: var(--omino-linen);
      border: 1px solid rgba(47, 42, 36, 0.16);
      border-radius: 8px;
      padding: 8px 10px;
      margin-bottom: 10px;
      text-align: center;
    }
    .tempo .numbers {
      display: flex;
      justify-content: space-around;
      font-size: 15px;
      font-weight: 600;
    }
    .tempo .numbers span.acting::before {
      content: '▸ ';
      color: var(--omino-active);
    }
    .tempo .caption {
      font-size: 11px;
      color: var(--omino-ink-soft);
      margin-top: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }
    th,
    td {
      padding: 3px 4px;
      text-align: center;
    }
    th:first-child,
    td:first-child {
      text-align: left;
      color: var(--omino-ink-soft);
      font-weight: 500;
    }
    thead th {
      font-size: 11px;
      color: var(--omino-ink-soft);
      border-bottom: 1px solid rgba(47, 42, 36, 0.16);
    }
    .ended {
      margin-top: 10px;
      padding: 8px;
      border-radius: 8px;
      background: rgba(168, 67, 47, 0.14);
      text-align: center;
      font-weight: 700;
    }
  `;static properties={state:{attribute:!1},names:{attribute:!1},outcome:{type:String}};constructor(){super(),this.names=["Player 1","Player 2"]}render(){const e=this.state;if(e===void 0)return null;const t=[K(e.players[0],e.balance),K(e.players[1],e.balance)],n=t[0]===t[1]?-1:t[0]>t[1]?0:1,o=e.ended?-1:e.toMove;return g`
      <div class="scores">
        ${[0,1].map(s=>g`
            <div class="score ${n===s?"leader":""}">
              <span class="value">${t[s]}</span>
              <span class="who">${this.names[s]}</span>
            </div>
          `)}
      </div>

      <div class="tempo">
        <div class="numbers">
          <span class=${o===0?"acting":""}
            >${e.players[0].spent}</span
          >
          <span class=${o===1?"acting":""}
            >${e.players[1].spent}</span
          >
        </div>
        <div class="caption">
          ${e.ended?"game over":`lowest spent acts next — ${this.names[o]}`}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>${this.names[0]}</th>
            <th>${this.names[1]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>covered</td>
            <td>${e.players[0].covered}/${w}</td>
            <td>${e.players[1].covered}/${w}</td>
          </tr>
          <tr>
            <td>lines</td>
            <td>
              ${e.players[0].linesCompleted}
              (+${e.players[0].linesCompleted*e.balance.lineBonus})
            </td>
            <td>
              ${e.players[1].linesCompleted}
              (+${e.players[1].linesCompleted*e.balance.lineBonus})
            </td>
          </tr>
          <tr>
            <td>spent</td>
            <td>${e.players[0].spent}</td>
            <td>${e.players[1].spent}</td>
          </tr>
        </tbody>
      </table>

      ${this.outcome===void 0?null:g`<div class="ended">${this.outcome}</div>`}
    `}}customElements.define("omino-score-strip",Ei);const Ii={hotseat:["Player 1","Player 2"],ai:["You","Omino AI"]},Ci={baseline:"Baseline",sharp:"Sharp"};function Ti(i){return i==="baseline"?Yt():ct()}class q extends C{static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: var(--omino-linen);
      color: var(--omino-ink);
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 10px 16px;
      border-bottom: 1px solid rgba(47, 42, 36, 0.14);
    }
    header h1 {
      margin: 0;
      font-size: 17px;
      letter-spacing: 0.04em;
    }
    header .spacer {
      flex: 1;
    }
    label {
      font-size: 12px;
      color: var(--omino-ink-soft);
    }
    input {
      font: inherit;
      font-size: 13px;
      width: 130px;
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid rgba(47, 42, 36, 0.25);
      background: #fbf6ea;
      color: var(--omino-ink);
    }
    button {
      font: inherit;
      font-size: 13px;
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid rgba(47, 42, 36, 0.25);
      background: #fbf6ea;
      color: var(--omino-ink);
      cursor: pointer;
    }
    button:hover:not(:disabled) {
      background: #fffaf0;
    }
    button:disabled {
      opacity: 0.4;
      cursor: default;
    }
    button.primary {
      background: var(--omino-active);
      border-color: rgba(47, 42, 36, 0.3);
      color: #fdf6e8;
      font-weight: 600;
    }
    button.primary:hover:not(:disabled) {
      background: #b94b35;
    }
    .mode {
      display: flex;
      gap: 0;
    }
    .mode button {
      border-radius: 0;
    }
    .mode button:first-child {
      border-radius: 6px 0 0 6px;
    }
    .mode button:last-child {
      border-radius: 0 6px 6px 0;
      border-left: none;
    }
    .mode button.selected {
      background: var(--omino-active);
      color: #fdf6e8;
      font-weight: 600;
    }
    main {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28px;
      padding: 20px 16px;
    }
    .side {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .side h2 {
      margin: 0;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.03em;
    }
    .side.idle h2 {
      color: var(--omino-ink-soft);
    }
    .side.idle omino-board {
      filter: saturate(0.75);
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
    }
    .waiting {
      font-size: 12px;
      color: var(--omino-ink-soft);
      font-style: italic;
    }
    .undo-chip {
      font-size: 12px;
      padding: 5px 10px;
      border-radius: 14px;
      background: rgba(47, 42, 36, 0.86);
      color: #f6efe0;
      border: none;
    }
    .hint {
      font-size: 12px;
      color: var(--omino-ink-soft);
      min-height: 18px;
      text-align: center;
    }
    .violation {
      margin: 0 16px 10px;
      padding: 10px 14px;
      border-radius: 8px;
      background: #b0281a;
      color: #fff;
      font-size: 13px;
      font-weight: 600;
    }
  `;static properties={game:{attribute:!1},selectedSlot:{attribute:!1},orientation:{attribute:!1},hover:{attribute:!1},windowStart:{attribute:!1},undoBlocked:{attribute:!1},violation:{attribute:!1},seedInput:{attribute:!1},mode:{attribute:!1},aiThinking:{attribute:!1},difficulty:{attribute:!1},helpOpen:{attribute:!1}};static AI_SIDE=1;static AI_MOVE_DELAY_MS=380;ai=ct();aiTimer;onKeyDown=e=>{const t=e.key.toLowerCase();if(!(t!=="r"&&t!=="f"&&t!=="escape")&&this.selectedSlot!==void 0){if(e.preventDefault(),t==="escape"){this.clearSelection();return}this.changePose(t==="r"?"rotate":"flip")}};changePose(e){if(this.selectedSlot===void 0)return;const t=O(this.game,this.selectedSlot);if(t===void 0)return;const n=t.orientations[this.orientation];n!==void 0&&(this.orientation=e==="rotate"?n.rotateCw:n.flip)}constructor(){super(),this.seedInput="omino-1",this.game=we(this.seedInput),this.orientation=0,this.windowStart=0,this.undoBlocked=!1,this.mode="hotseat",this.aiThinking=!1,this.difficulty="sharp",this.helpOpen=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){window.removeEventListener("keydown",this.onKeyDown),this.cancelAiTurn(),super.disconnectedCallback()}cancelAiTurn(){this.aiTimer!==void 0&&(clearTimeout(this.aiTimer),this.aiTimer=void 0),this.aiThinking=!1}get aiToMove(){return this.mode==="ai"&&!this.game.ended&&this.game.toMove===q.AI_SIDE}scheduleAiTurn(){if(!this.aiToMove){this.cancelAiTurn();return}this.aiThinking=!0,this.aiTimer=setTimeout(()=>{if(this.aiTimer=void 0,!this.aiToMove){this.aiThinking=!1;return}const e=this.ai.chooseAction(this.game);if(!this.commit(e)){this.aiThinking=!1;return}this.scheduleAiTurn()},q.AI_MOVE_DELAY_MS)}ghostFor(e){if(e!==this.game.toMove||this.game.ended||this.selectedSlot===void 0||this.hover===void 0)return;const t=O(this.game,this.selectedSlot);if(t===void 0)return;const n=t.orientations[this.orientation];if(n!==void 0)return{orientation:n,pieceId:t.id,size:t.size,x:this.hover.x,y:this.hover.y,valid:G(this.game.players[e],t,this.orientation,this.hover.x,this.hover.y)}}unplaceableSlots(){const e=new Set;if(this.game.ended)return e;const t=this.game.players[this.game.toMove];return fe(this.game).forEach((n,o)=>{tt(t,n)||e.add(o+1)}),e}get names(){return Ii[this.mode]}outcomeText(){const e=Vt(this.game);if(e!==void 0)return e.kind==="draw"?"Game over — a draw":`Game over — ${this.names[e.player]} wins`}hintText(){return this.game.ended?"Chain exhausted. Start a new game to play again.":this.violation!==void 0?"":this.aiThinking?"Omino AI is moving…":this.selectedSlot===void 0?Wt(this.game)?"Click a purchasable card to pick it up.":"No purchasable piece fits — passing is forced.":"R rotates · F flips · Esc deselects · click a valid square to place"}clearSelection(){this.selectedSlot=void 0,this.orientation=0,this.hover=void 0}commit(e){const t=this.game;try{const n=ot(t,e);return qt(t,e,n),this.game=n,this.undoBlocked=!1,this.clearSelection(),!0}catch(n){return n instanceof rt?this.violation=`Rule violation: ${n.message}`:n instanceof Error?this.violation=`Rejected: ${n.message}`:this.violation="Rejected: unknown error",this.cancelAiTurn(),!1}}commitHuman(e){this.commit(e)&&this.aiToMove&&this.scheduleAiTurn()}handleCellClick(e,t){if(e!==this.game.toMove||this.selectedSlot===void 0)return;const n=O(this.game,this.selectedSlot);n!==void 0&&G(this.game.players[e],n,this.orientation,t.x,t.y)&&this.commitHuman({type:"buy",slot:this.selectedSlot,orientation:this.orientation,x:t.x,y:t.y})}handleUndo(){const e=this.game.lastActor;if(e===null||!Re(this.game,e))return;this.cancelAiTurn();let t=this.game;if(this.mode==="ai")for(;t.history.length>0&&t.lastActor===q.AI_SIDE;)t=ze(t);t.history.length>0&&(t=ze(t));try{at(t)}catch(n){this.violation=n instanceof Error?`Undo produced an invalid state: ${n.message}`:"Undo produced an invalid state";return}this.game=t,this.undoBlocked=!0,this.clearSelection()}startGame(e,t=this.mode,n=this.difficulty){this.cancelAiTurn(),this.seedInput=e,this.mode=t,this.difficulty=n,this.ai=Ti(n),this.game=we(e),this.windowStart=0,this.undoBlocked=!1,this.violation=void 0,this.clearSelection(),this.aiToMove&&this.scheduleAiTurn()}rollSeed(){const e=`omino-${Math.random().toString(36).slice(2,8)}`;this.startGame(e)}renderPoseControls(){const e=this.selectedSlot===void 0?void 0:O(this.game,this.selectedSlot),t=e===void 0||e.orientations.length===1;return g`
      <button
        ?disabled=${t}
        title=${t?"This piece looks the same in every orientation":"Rotate 90° (R)"}
        @click=${()=>this.changePose("rotate")}
      >
        ⟳ Rotate
      </button>
      <button
        ?disabled=${t}
        title=${t?"This piece looks the same mirrored":"Flip (F)"}
        @click=${()=>this.changePose("flip")}
      >
        ⇄ Flip
      </button>
    `}renderSide(e){const t=this.names,n=!this.game.ended&&this.game.toMove===e,o=this.mode==="ai"&&e===q.AI_SIDE,s=n&&!o&&!this.aiThinking,r=this.game.players[e],a=le(this.game),c=fe(this.game).length,d=c===1?"burns the last piece":`burns all ${c}`,h=!this.game.ended&&!this.undoBlocked&&!this.aiThinking&&(this.mode==="ai"?e===0&&this.game.history.length>0:this.game.lastActor===e&&Re(this.game,e));return g`
      <div class="side ${n?"":"idle"}">
        <h2>${t[e]} · 9×9</h2>
        <omino-board
          .player=${r}
          .lines=${it(r)}
          .ghost=${this.ghostFor(e)}
          ?active=${n}
          ?interactive=${s&&this.selectedSlot!==void 0}
          .cellSize=${44}
          @cell-hover=${l=>{s&&(this.hover=l.detail)}}
          @cell-leave=${()=>{s&&(this.hover=void 0)}}
          @cell-click=${l=>this.handleCellClick(e,l.detail)}
        ></omino-board>

        <div class="actions">
          ${s&&this.selectedSlot!==void 0?this.renderPoseControls():null}
          ${s?g`<button
                class="primary"
                @click=${()=>this.commitHuman({type:"pass"})}
                title="Pass: adds ${a} to spent and burns every purchasable piece"
              >
                Pass · costs ${a} · ${d}
              </button>`:g`<span class="waiting"
                >${this.waitingLabel(e,n)}</span
              >`}
          ${h?g`<button class="undo-chip" @click=${()=>this.handleUndo()}>
                ${this.mode==="ai"?"Undo my last move":`Undo ${t[e]}'s move`}
              </button>`:null}
        </div>
      </div>
    `}waitingLabel(e,t){return this.game.ended?"":t&&this.aiThinking?"Thinking…":"Waiting"}render(){const e=st(this.game);return g`
      <header>
        <h1>Omino</h1>
        <label for="seed">seed</label>
        <input
          id="seed"
          .value=${this.seedInput}
          @input=${t=>{this.seedInput=t.target.value}}
          @keydown=${t=>{t.stopPropagation(),t.key==="Enter"&&this.startGame(this.seedInput)}}
        />
        <button
          class="dice"
          title="Roll a fresh random seed and start a new game"
          @click=${()=>this.rollSeed()}
        >
          🎲
        </button>
        <button @click=${()=>this.startGame(this.seedInput)}>New game</button>
        <div class="mode">
          ${["hotseat","ai"].map(t=>g`
              <button
                class=${this.mode===t?"selected":""}
                @click=${()=>this.startGame(this.seedInput,t)}
                title=${t==="hotseat"?"Two players on this screen":"Play the greedy baseline agent"}
              >
                ${t==="hotseat"?"Hotseat":"vs AI"}
              </button>
            `)}
        </div>
        ${this.mode==="ai"?g`<div class="mode">
              ${["baseline","sharp"].map(t=>g`
                  <button
                    class=${this.difficulty===t?"selected":""}
                    @click=${()=>this.startGame(this.seedInput,"ai",t)}
                    title=${t==="baseline"?"Greedy: takes the biggest piece it can, never weighs fit":"Packing-aware: avoids stranding cells. Beats baseline ~61%"}
                  >
                    ${Ci[t]}
                  </button>
                `)}
            </div>`:null}
        <div class="spacer"></div>
        <span class="hint">${this.hintText()}</span>
        <button
          class="help"
          title="How to play, scoring, and every piece"
          @click=${()=>{this.helpOpen=!0}}
        >
          ? Help
        </button>
      </header>

      ${this.violation===void 0?null:g`<div class="violation">${this.violation}</div>`}

      <main>
        ${this.renderSide(0)}
        <omino-score-strip
          .state=${this.game}
          .names=${this.names}
          .outcome=${this.outcomeText()}
        ></omino-score-strip>
        ${this.renderSide(1)}
      </main>

      <omino-chain
        .state=${this.game}
        .summary=${e}
        .selectedSlot=${this.selectedSlot}
        .selectedOrientation=${this.orientation}
        .unplaceableSlots=${this.unplaceableSlots()}
        .windowStart=${this.windowStart}
        @slot-select=${t=>{if(this.game.ended)return;const n=t.detail.slot;if(this.selectedSlot===n){this.clearSelection();return}this.selectedSlot=n,this.orientation=0}}
        @window-change=${t=>{this.windowStart=t.detail.windowStart}}
      ></omino-chain>

      ${this.helpOpen?g`<omino-help
            @close=${()=>{this.helpOpen=!1}}
          ></omino-help>`:null}
    `}}customElements.define("omino-app",q);$t();document.body.style.margin="0";const gt=document.querySelector("#app");if(gt===null)throw new Error("Missing #app mount point");gt.append(document.createElement("omino-app"));
