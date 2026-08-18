(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const E={linen:"#efe6d5",linenDeep:"#e3d7c2",ink:"#2f2a24",inkSoft:"#6c6154",boardWell:"#ddceb4",boardLine:"rgba(47, 42, 36, 0.14)",activeFrame:"#a8432f",idleFrame:"#b9a48a",valid:"rgba(84, 124, 74, 0.55)",invalid:"rgba(168, 67, 47, 0.45)",burned:"#a89880"},Te=[{fill:"#a8432f",seam:"#7c2e1f"},{fill:"#2f4b6e",seam:"#1f3550"},{fill:"#c08a2e",seam:"#8e6318"},{fill:"#5c7248",seam:"#3f5231"},{fill:"#8a4a63",seam:"#642f45"},{fill:"#3f6f6a",seam:"#28504c"}];function ft(t){return Te[t%Te.length]}function mt(t){return t===6?"diagonal-down":t===5?"diagonal-up":"solid"}function gt(){const t=document.createElement("style");t.textContent=`:root {
  --omino-linen: ${E.linen};
  --omino-linen-deep: ${E.linenDeep};
  --omino-ink: ${E.ink};
  --omino-ink-soft: ${E.inkSoft};
  --omino-board-well: ${E.boardWell};
  --omino-active: ${E.activeFrame};
  --omino-idle: ${E.idleFrame};
  --omino-burned: ${E.burned};
}`,document.head.append(t)}const ve=4294967296,yt=2166136261,vt=16777619;function bt(t){let e=t>>>0;return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function $t(t){if(typeof t=="number"){if(!Number.isInteger(t))throw new RangeError(`Numeric seed must be an integer, got ${t}`);return t>>>0}let e=yt;for(let i=0;i<t.length;i+=1)e^=t.charCodeAt(i),e=Math.imul(e,vt);return bt(e)}class he{#e;constructor(e){this.#e=$t(e)}static fromState(e){const i=new he(0);return i.#e=e>>>0,i}get state(){return this.#e}clone(){return he.fromState(this.#e)}nextUint32(){this.#e=this.#e+1831565813|0;let e=this.#e;return e=Math.imul(e^e>>>15,1|e),e=e+Math.imul(e^e>>>7,61|e)^e,(e^e>>>14)>>>0}next(){return this.nextUint32()/ve}nextInt(e){if(!Number.isInteger(e)||e<=0)throw new RangeError(`Bound must be a positive integer, got ${e}`);const i=ve-ve%e;let n=this.nextUint32();for(;n>=i;)n=this.nextUint32();return n%e}shuffle(e){const i=e.slice();for(let n=i.length-1;n>0;n-=1){const s=this.nextInt(n+1),o=i[n],r=i[s];i[n]=r,i[s]=o}return i}}function xt(t,e){return t.y-e.y||t.x-e.x}function se(t){let e=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;for(const n of t)n.x<e&&(e=n.x),n.y<i&&(i=n.y);return t.map(n=>({x:n.x-e,y:n.y-i})).sort(xt)}function Ge(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n+=1){const s=t[n],o=e[n];if(s.y!==o.y)return s.y-o.y;if(s.x!==o.x)return s.x-o.x}return t.length-e.length}function W(t){return t.map(e=>`${e.x},${e.y}`).join(" ")}function wt(t){let e=0;for(const i of t)i.x>e&&(e=i.x);return e+1}function At(t){let e=0;for(const i of t)i.y>e&&(e=i.y);return e+1}function _t(t){return se(t.map(e=>({x:-e.y,y:e.x})))}function Et(t){return se(t.map(e=>({x:-e.x,y:e.y})))}function St(t){return t.map(e=>({x:-e.y,y:e.x}))}function kt(t){return t.map(e=>({x:-e.x,y:e.y}))}function qe(t){const e=new Map;for(const i of[t,kt(t)]){let n=i;for(let s=0;s<4;s+=1){const o=se(n);e.set(W(o),o),n=St(n)}}return[...e.values()].sort(Ge)}function Ke(t){return qe(t)[0]}function It(t){return[{x:t.x+1,y:t.y},{x:t.x-1,y:t.y},{x:t.x,y:t.y+1},{x:t.x,y:t.y-1}]}function Ct(t){const e=[];return t.forEach((i,n)=>{[...i].forEach((s,o)=>{(s==="#"||s==="X")&&e.push({x:o,y:n})})}),se(e)}const Pe=6,$e=56,Tt={1:"monomino",2:"domino",3:"tromino",4:"tetromino",5:"pentomino",6:"hexomino"};function Pt(t){const e=Tt[t];if(e===void 0)throw new RangeError(`No polyomino family for size ${t}`);return e}const Nt={O1:["#"],I2:["##"],I3:["###"],V3:["#.","##"],I4:["####"],O4:["##","##"],T4:["###",".#."],S4:[".##","##."],L4:["#.","#.","##"],F:[".##","##.",".#."],I:["#####"],L:["#.","#.","#.","##"],N:[".#",".#","##","#."],P:["##","##","#."],T:["###",".#.",".#."],U:["#.#","###"],V:["#..","#..","###"],W:["#..","##.",".##"],X:[".#.","###",".#."],Y:[".#","##",".#",".#"],Z:["##.",".#.",".##"]};function Mt(t){const e=new Map;let i=[[{x:0,y:0}]];e.set(1,i);for(let n=2;n<=t;n+=1){const s=new Map;for(const o of i){const r=new Set(o.map(a=>`${a.x},${a.y}`));for(const a of o)for(const c of It(a)){if(r.has(`${c.x},${c.y}`))continue;const d=Ke(se([...o,c]));s.set(W(d),d)}}i=[...s.values()].sort(Ge),e.set(n,i)}return e}function Ot(){const t=Mt(Pe),e=new Map;for(const[s,o]of Object.entries(Nt))e.set(W(Ke(Ct(o))),s);const i=[];let n=0;for(let s=1;s<=Pe;s+=1)for(const o of t.get(s)??[]){const r=W(o);let a=e.get(r);a===void 0&&(n+=1,a=`H${String(n).padStart(2,"0")}`);const c=qe(o),d=new Map(c.map((l,p)=>[W(l),p])),h=(l,p)=>{const g=d.get(W(l));if(g===void 0)throw new Error(`${p} of ${a} left its own orientation set`);return g};i.push({id:i.length,size:s,name:a,key:r,orientations:c.map(l=>({cells:l,width:wt(l),height:At(l),rotateCw:h(_t(l),"rotation"),flip:h(Et(l),"reflection")}))})}return i}const pe=Object.freeze(Ot());pe.reduce((t,e)=>t+e.size,0);function L(t){const e=pe[t];if(e===void 0)throw new RangeError(`No piece with id ${t}`);return e}pe.filter(t=>t.size%2===1).length;const u=9,w=u*u,S=255,Xe=2*w,fe=3,oe=Object.freeze({lineBonus:6,passCost:2,slotSurcharge:Object.freeze([0,1,2])});function me(t,e,i=oe){const n=i.slotSurcharge[e-1];if(n===void 0)throw new RangeError(`Slot must be 1..${fe}, got ${e}`);return t+n}function Ne(){return{cells:new Uint8Array(w).fill(S),spent:0,covered:0,linesCompleted:0}}function xe(t,e=oe,i={}){const n=new he(t).shuffle(pe.map(o=>o.id)),s=i.firstPlayer??0;return{seed:t,balance:e,chain:n,marker:0,burned:[],players:[Ne(),Ne()],firstPlayer:s,toMove:s,lastActor:null,history:[],ended:n.length===0}}function Rt(t,e,i){const[n,s]=t;return n.spent<s.spent?0:s.spent<n.spent?1:e===null?i:e===0?1:0}function Ze(t){return t.chain.length-t.marker}function Je(t){const e=Math.min(fe,Ze(t)),i=[];for(let n=0;n<e;n+=1)i.push(L(t.chain[t.marker+n]));return i}function M(t,e){if(!Number.isInteger(e)||e<1||e>fe)return;const i=t.marker+e-1;if(!(i>=t.chain.length))return L(t.chain[i])}function G(t,e){return e*u+t}function q(t,e,i,n,s){const o=e.orientations[i];if(o===void 0||!Number.isInteger(n)||!Number.isInteger(s)||n<0||s<0||n+o.width>u||s+o.height>u)return!1;for(const r of o.cells)if(t.cells[G(n+r.x,s+r.y)]!==S)return!1;return!0}function Ut(t){let e=0;for(let i=0;i<u;i+=1){let n=!0;for(let s=0;s<u;s+=1)if(t[G(s,i)]===S){n=!1;break}n&&(e+=1)}for(let i=0;i<u;i+=1){let n=!0;for(let s=0;s<u;s+=1)if(t[G(i,s)]===S){n=!1;break}n&&(e+=1)}return e}function Qe(t){const e=[];for(let i=0;i<u;i+=1){let n=!0;for(let s=0;s<u;s+=1)t.cells[G(s,i)]===S&&(n=!1);e.push(n)}for(let i=0;i<u;i+=1){let n=!0;for(let s=0;s<u;s+=1)t.cells[G(i,s)]===S&&(n=!1);e.push(n)}return e}function K(t,e=oe){return 2*t.covered-t.spent+e.lineBonus*t.linesCompleted}function Bt(t,e=oe){const i=w-t.covered;return Xe-t.spent-2*i+e.lineBonus*t.linesCompleted}function Lt(t,e){if(t.ended)return!1;if(e.type==="pass")return!0;const i=M(t,e.slot);if(i===void 0)return!1;const n=t.players[t.toMove];return q(n,i,e.orientation,e.x,e.y)}function et(t){if(t.ended)return[];const e=[],i=t.players[t.toMove],n=Je(t);for(let s=0;s<n.length;s+=1){const o=n[s],r=s+1;for(let a=0;a<o.orientations.length;a+=1){const c=o.orientations[a],d=u-c.width,h=u-c.height;for(let l=0;l<=h;l+=1)for(let p=0;p<=d;p+=1)q(i,o,a,p,l)&&e.push({type:"buy",slot:r,orientation:a,x:p,y:l})}}return e.push({type:"pass"}),e}function zt(t){if(t.ended)return!1;const e=t.players[t.toMove],i=Je(t);for(let n=0;n<i.length;n+=1){const s=i[n];for(let o=0;o<s.orientations.length;o+=1){const r=s.orientations[o];for(let a=0;a<=u-r.height;a+=1)for(let c=0;c<=u-r.width;c+=1)if(q(e,s,o,c,a))return!0}}return!1}class ce extends Error{constructor(e){super(e),this.name="IllegalActionError"}}function tt(t,e){if(t.ended)throw new ce("The game has ended");const i=t.toMove,n=t.players[i];let s,o,r;if(e.type==="buy"){const d=M(t,e.slot);if(d===void 0)throw new ce(`Slot ${e.slot} holds no piece`);if(!q(n,d,e.orientation,e.x,e.y))throw new ce(`Piece ${d.name} cannot be placed in orientation ${e.orientation} at (${e.x}, ${e.y})`);const h=d.orientations[e.orientation],l=t.players[i].cells.slice();for(const p of h.cells)l[G(e.x+p.x,e.y+p.y)]=d.id;s={cells:l,spent:n.spent+me(d.size,e.slot,t.balance),covered:n.covered+d.size,linesCompleted:Ut(l)},o=t.chain.slice(t.marker,t.marker+e.slot-1),r=t.marker+e.slot}else{s={cells:n.cells,spent:n.spent+t.balance.passCost,covered:n.covered,linesCompleted:n.linesCompleted};const d=Math.min(t.marker+fe,t.chain.length);o=t.chain.slice(t.marker,d),r=d}const a=i===0?[s,t.players[1]]:[t.players[0],s],c=r>=t.chain.length;return{seed:t.seed,balance:t.balance,chain:t.chain,marker:r,burned:o.length>0?[...t.burned,...o]:t.burned,players:a,firstPlayer:t.firstPlayer,toMove:Rt(a,i,t.firstPlayer),lastActor:i,history:[...t.history,e],ended:c}}function Ft(t,e,i=oe,n={}){let s=xe(t,i,n);for(const o of e)s=tt(s,o);return s}function Me(t,e){return t.history.length>0&&t.lastActor===e}function Oe(t){if(t.history.length===0)throw new ce("Nothing to undo");return Ft(t.seed,t.history.slice(0,-1),t.balance,{firstPlayer:t.firstPlayer})}function Ht(t){if(!t.ended)return;const[e,i]=t.players,n=K(e,t.balance),s=K(i,t.balance);return n!==s?{kind:"winner",player:n>s?0:1}:e.covered!==i.covered?{kind:"winner",player:e.covered>i.covered?0:1}:e.spent!==i.spent?{kind:"winner",player:e.spent<i.spent?0:1}:{kind:"draw"}}function it(t){let e=0,i=0,n=0,s=0,o=0;for(let r=t.marker;r<t.chain.length;r+=1){const a=L(t.chain[r]);a.size===6?e+=1:a.size===5?i+=1:a.size===4?n+=1:s+=1,a.size%2===1&&(o+=1)}return{remaining:Ze(t),hexominoes:e,pentominoes:i,tetrominoes:n,small:s,odd:o}}class nt extends Error{constructor(e){super(e),this.name="RuleViolation"}}function $(t,e){if(!t)throw new nt(e)}function Re(t,e){let i=0;for(const s of t.cells)s!==S&&(i+=1);$(t.cells.length===w,`${e}: board has ${t.cells.length} cells, expected ${w}`),$(t.covered===i,`${e}: covered says ${t.covered} but ${i} cells are filled`),$(t.covered<=w,`${e}: covered ${t.covered} exceeds the board`),$(t.spent>=0,`${e}: spent went negative (${t.spent})`);const n=Qe(t).filter(Boolean).length;$(t.linesCompleted===n,`${e}: linesCompleted says ${t.linesCompleted} but ${n} lines are full`)}function st(t){Re(t.players[0],"player 1"),Re(t.players[1],"player 2");for(const s of t.players){$(K(s,t.balance)===Bt(s,t.balance),"score identity 2×covered − spent + bonus×lines ≠ 162 − spent − 2×empty + bonus×lines");const o=w-s.covered;$(K(s,t.balance)===Xe-s.spent-2*o+t.balance.lineBonus*s.linesCompleted,"score does not match the identity recomputed from raw counts")}const e=t.players.reduce((s,o)=>{const r=new Set;for(const a of o.cells)a!==S&&r.add(a);return s+r.size},0),i=t.chain.length-t.marker;$(i+t.burned.length+e===$e,`piece accounting: ${i} in chain + ${t.burned.length} burned + ${e} placed ≠ ${$e}`),$(new Set(t.burned).size===t.burned.length,"a piece was burned twice");const n=it(t);if($(n.hexominoes+n.pentominoes+n.tetrominoes+n.small===n.remaining,"chain class counts do not add up to the remaining count"),$(t.ended===t.marker>=t.chain.length,"ended flag disagrees with chain exhaustion"),!t.ended){const[s,o]=t.players;let r;s.spent!==o.spent?r=s.spent<o.spent?0:1:t.lastActor===null?r=t.firstPlayer:r=t.lastActor===0?1:0,$(t.toMove===r,`turn order: expected player ${r+1} to move, got ${t.toMove+1}`)}}function Dt(t,e,i){$(Lt(t,e),`an illegal action was applied: ${JSON.stringify(e)}`),$(i.marker>t.marker,`marker did not advance (${t.marker} → ${i.marker})`);for(const a of[0,1])$(i.players[a].spent>=t.players[a].spent,`player ${a+1}: spent decreased`),$(i.players[a].covered>=t.players[a].covered,`player ${a+1}: covered decreased`),$(i.players[a].linesCompleted>=t.players[a].linesCompleted,`player ${a+1}: a completed line was lost`);const n=t.toMove,s=n===0?1:0;$(i.players[s].spent===t.players[s].spent&&i.players[s].covered===t.players[s].covered,"the player who did not act was modified");const o=t.players[n].cells,r=i.players[n].cells;for(let a=0;a<w;a+=1)o[a]!==S&&$(r[a]===o[a],`cell ${a} was overwritten (piece ${o[a]} → ${r[a]})`);if(e.type==="pass"){$(i.players[n].covered===t.players[n].covered,"a pass changed the board"),$(i.players[n].spent===t.players[n].spent+t.balance.passCost,"a pass charged the wrong amount");const a=Math.min(3,t.chain.length-t.marker);$(i.burned.length===t.burned.length+a,`a pass burned ${i.burned.length-t.burned.length} pieces, expected ${a}`)}else{$(i.marker===t.marker+e.slot,"a buy advanced the marker by the wrong amount"),$(i.burned.length===t.burned.length+e.slot-1,"a buy burned the wrong number of pieces");const a=i.players[n].covered-t.players[n].covered;$(a>=1&&a<=6,`a buy covered ${a} squares`)}st(i)}class ot extends Error{constructor(e){super(`Agent "${e}" was asked to move with no legal action available`),this.name="NoLegalActionError"}}function Vt(t="greedy"){const e=new Uint8Array(w),i=new Uint8Array(w),n=new Int32Array(w);function s(){i.fill(0);let o=0;for(let r=0;r<w;r+=1){if(e[r]===1||i[r]===1)continue;o+=1;let a=0;for(n[a]=r,a+=1,i[r]=1;a>0;){a-=1;const c=n[a],d=c%u,h=c/u|0;if(d>0){const l=c-1;e[l]===0&&i[l]===0&&(i[l]=1,n[a]=l,a+=1)}if(d<u-1){const l=c+1;e[l]===0&&i[l]===0&&(i[l]=1,n[a]=l,a+=1)}if(h>0){const l=c-u;e[l]===0&&i[l]===0&&(i[l]=1,n[a]=l,a+=1)}if(h<u-1){const l=c+u;e[l]===0&&i[l]===0&&(i[l]=1,n[a]=l,a+=1)}}}return o}return{name:t,chooseAction(o){const r=et(o);if(r.length===0)throw new ot(t);const a=o.players[o.toMove],{lineBonus:c,passCost:d}=o.balance,h=new Int32Array(u),l=new Int32Array(u);for(let f=0;f<u;f+=1)for(let _=0;_<u;_+=1)a.cells[f*u+_]!==S&&(h[f]=h[f]+1,l[_]=l[_]+1);for(let f=0;f<w;f+=1)e[f]=a.cells[f]===S?0:1;const p=f=>{if(f.type==="pass")return s();const k=M(o,f.slot)?.orientations[f.orientation];if(k===void 0)return Number.POSITIVE_INFINITY;for(const I of k.cells)e[(f.y+I.y)*u+f.x+I.x]=1;const N=s();for(const I of k.cells)e[(f.y+I.y)*u+f.x+I.x]=0;return N};let g={type:"pass"},m=-d,C=Number.POSITIVE_INFINITY,T=!1;const v=new Int32Array(u),y=new Int32Array(u);for(const f of r){if(f.type==="pass")continue;const _=M(o,f.slot);if(_===void 0)continue;const k=_.orientations[f.orientation];if(k===void 0)continue;v.fill(0),y.fill(0);for(const U of k.cells){const b=f.x+U.x,P=f.y+U.y;v[P]=v[P]+1,y[b]=y[b]+1}let N=0;for(const U of k.cells){const b=f.y+U.y,P=f.x+U.x;v[b]!==0&&h[b]+v[b]===u&&(N+=1,v[b]=0),y[P]!==0&&l[P]+y[P]===u&&(N+=1,y[P]=0)}const I=2*_.size-me(_.size,f.slot,o.balance)+c*N;if(I<m)continue;if(I>m){m=I,g=f,T=!1,C=Number.POSITIVE_INFINITY;continue}T||(C=p(g),T=!0);const le=p(f);le<C&&(C=le,g=f)}return g}}}const jt=Object.freeze({hopelessCellCost:2,riskyCellCost:2,riskyRegionSize:7,lineProgress:.8});function rt(t=jt,e="heuristic"){const i=new Uint8Array(w),n=new Uint8Array(w),s=new Int32Array(w);function o(r){n.fill(0);let a=0;for(let c=0;c<w;c+=1){if(i[c]===1||n[c]===1)continue;let d=0,h=0;for(s[h]=c,h+=1,n[c]=1;h>0;){h-=1;const l=s[h];d+=1;const p=l%u,g=l/u|0;if(p>0){const m=l-1;i[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}if(p<u-1){const m=l+1;i[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}if(g>0){const m=l-u;i[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}if(g<u-1){const m=l+u;i[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}}d<r?a+=d*t.hopelessCellCost:d<t.riskyRegionSize&&(a+=d*t.riskyCellCost)}return a}return{name:e,chooseAction(r){const a=et(r);if(a.length===0)throw new ot(e);const c=r.players[r.toMove],{lineBonus:d,passCost:h}=r.balance;let l=Number.POSITIVE_INFINITY;for(let y=r.marker;y<r.chain.length;y+=1){const f=L(r.chain[y]).size;f<l&&(l=f)}Number.isFinite(l)||(l=1);const p=new Int32Array(u),g=new Int32Array(u);for(let y=0;y<u;y+=1)for(let f=0;f<u;f+=1)c.cells[y*u+f]!==S&&(p[y]=p[y]+1,g[f]=g[f]+1);for(let y=0;y<w;y+=1)i[y]=c.cells[y]===S?0:1;let m={type:"pass"},C=-h-o(l);const T=new Int32Array(u),v=new Int32Array(u);for(const y of a){if(y.type==="pass")continue;const f=M(r,y.slot);if(f===void 0)continue;const _=f.orientations[y.orientation];if(_===void 0)continue;T.fill(0),v.fill(0);for(const b of _.cells)T[y.y+b.y]=T[y.y+b.y]+1,v[y.x+b.x]=v[y.x+b.x]+1;let k=0,N=0;for(let b=0;b<u;b+=1){const P=T[b];if(P>0){const z=p[b],F=z+P;F===u&&(k+=1),N+=(F*F-z*z)/u}const Ce=v[b];if(Ce>0){const z=g[b],F=z+Ce;F===u&&(k+=1),N+=(F*F-z*z)/u}}const I=2*f.size-me(f.size,y.slot,r.balance)+d*k;for(const b of _.cells)i[(y.y+b.y)*u+y.x+b.x]=1;const le=o(l);for(const b of _.cells)i[(y.y+b.y)*u+y.x+b.x]=0;const U=I+t.lineProgress*N-le;U>C&&(C=U,m=y)}return m}}}const de=globalThis,_e=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol(),Ue=new WeakMap;let at=class{constructor(e,i,n){if(this._$cssResult$=!0,n!==Ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(_e&&e===void 0){const n=i!==void 0&&i.length===1;n&&(e=Ue.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ue.set(i,e))}return e}toString(){return this.cssText}};const Wt=t=>new at(typeof t=="string"?t:t+"",void 0,Ee),re=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new at(i,t,Ee)},Yt=(t,e)=>{if(_e)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const n=document.createElement("style"),s=de.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}},Be=_e?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const n of e.cssRules)i+=n.cssText;return Wt(i)})(t):t;const{is:Gt,defineProperty:qt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Xt,getOwnPropertySymbols:Zt,getPrototypeOf:Jt}=Object,ge=globalThis,Le=ge.trustedTypes,Qt=Le?Le.emptyScript:"",ei=ge.reactiveElementPolyfillSupport,Q=(t,e)=>t,we={toAttribute(t,e){switch(e){case Boolean:t=t?Qt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},lt=(t,e)=>!Gt(t,e),ze={attribute:!0,type:String,converter:we,reflect:!1,useDefault:!1,hasChanged:lt};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;let j=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=ze){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,i);s!==void 0&&qt(this.prototype,e,s)}}static getPropertyDescriptor(e,i,n){const{get:s,set:o}=Kt(this.prototype,e)??{get(){return this[i]},set(r){this[i]=r}};return{get:s,set(r){const a=s?.call(this);o?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ze}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const e=Jt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const i=this.properties,n=[...Xt(i),...Zt(i)];for(const s of n)this.createProperty(s,i[s])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[n,s]of i)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const s=this._$Eu(i,n);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)i.unshift(Be(s))}else e!==void 0&&i.push(Be(e));return i}static _$Eu(e,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,n){this._$AK(e,n)}_$ET(e,i){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:we).toAttribute(i,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,i){const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:we;this._$Em=s;const a=r.fromAttribute(i,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,i,n,s=!1,o){if(e!==void 0){const r=this.constructor;if(s===!1&&(o=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??lt)(o,i)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:n,reflect:s,wrapped:o},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??i??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(i=void 0),this._$AL.set(e,i)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n){const{wrapped:r}=o,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(i)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[Q("elementProperties")]=new Map,j[Q("finalized")]=new Map,ei?.({ReactiveElement:j}),(ge.reactiveElementVersions??=[]).push("2.1.2");const Se=globalThis,Fe=t=>t,ue=Se.trustedTypes,He=ue?ue.createPolicy("lit-html",{createHTML:t=>t}):void 0,ct="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,dt="?"+B,ti=`<${dt}>`,V=document,te=()=>V.createComment(""),ie=t=>t===null||typeof t!="object"&&typeof t!="function",ke=Array.isArray,ii=t=>ke(t)||typeof t?.[Symbol.iterator]=="function",be=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Ve=/>/g,H=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,We=/"/g,ht=/^(?:script|style|textarea|title)$/i,ni=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),x=ni(1),X=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Ye=new WeakMap,D=V.createTreeWalker(V,129);function ut(t,e){if(!ke(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return He!==void 0?He.createHTML(e):e}const si=(t,e)=>{const i=t.length-1,n=[];let s,o=e===2?"<svg>":e===3?"<math>":"",r=J;for(let a=0;a<i;a++){const c=t[a];let d,h,l=-1,p=0;for(;p<c.length&&(r.lastIndex=p,h=r.exec(c),h!==null);)p=r.lastIndex,r===J?h[1]==="!--"?r=De:h[1]!==void 0?r=Ve:h[2]!==void 0?(ht.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=H):h[3]!==void 0&&(r=H):r===H?h[0]===">"?(r=s??J,l=-1):h[1]===void 0?l=-2:(l=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?H:h[3]==='"'?We:je):r===We||r===je?r=H:r===De||r===Ve?r=J:(r=H,s=void 0);const g=r===H&&t[a+1].startsWith("/>")?" ":"";o+=r===J?c+ti:l>=0?(n.push(d),c.slice(0,l)+ct+c.slice(l)+B+g):c+B+(l===-2?a:g)}return[ut(t,o+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ne{constructor({strings:e,_$litType$:i},n){let s;this.parts=[];let o=0,r=0;const a=e.length-1,c=this.parts,[d,h]=si(e,i);if(this.el=ne.createElement(d,n),D.currentNode=this.el.content,i===2||i===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=D.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ct)){const p=h[r++],g=s.getAttribute(l).split(B),m=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?ri:m[1]==="?"?ai:m[1]==="@"?li:ye}),s.removeAttribute(l)}else l.startsWith(B)&&(c.push({type:6,index:o}),s.removeAttribute(l));if(ht.test(s.tagName)){const l=s.textContent.split(B),p=l.length-1;if(p>0){s.textContent=ue?ue.emptyScript:"";for(let g=0;g<p;g++)s.append(l[g],te()),D.nextNode(),c.push({type:2,index:++o});s.append(l[p],te())}}}else if(s.nodeType===8)if(s.data===dt)c.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(B,l+1))!==-1;)c.push({type:7,index:o}),l+=B.length-1}o++}}static createElement(e,i){const n=V.createElement("template");return n.innerHTML=e,n}}function Z(t,e,i=t,n){if(e===X)return e;let s=n!==void 0?i._$Co?.[n]:i._$Cl;const o=ie(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(t),s._$AT(t,i,n)),n!==void 0?(i._$Co??=[])[n]=s:i._$Cl=s),s!==void 0&&(e=Z(t,s._$AS(t,e.values),s,n)),e}class oi{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:n}=this._$AD,s=(e?.creationScope??V).importNode(i,!0);D.currentNode=s;let o=D.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new ae(o,o.nextSibling,this,e):c.type===1?d=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(d=new ci(o,this,e)),this._$AV.push(d),c=n[++a]}r!==c?.index&&(o=D.nextNode(),r++)}return D.currentNode=V,s}p(e){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,i),i+=n.strings.length-2):n._$AI(e[i])),i++}}class ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,n,s){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Z(this,e,i),ie(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ii(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ne.createElement(ut(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(i);else{const o=new oi(s,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}_$AC(e){let i=Ye.get(e.strings);return i===void 0&&Ye.set(e.strings,i=new ne(e)),i}k(e){ke(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,s=0;for(const o of e)s===i.length?i.push(n=new ae(this.O(te()),this.O(te()),this,this.options)):n=i[s],n._$AI(o),s++;s<i.length&&(this._$AR(n&&n._$AB.nextSibling,s),i.length=s)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const n=Fe(e).nextSibling;Fe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ye{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,n,s,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=i,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,i=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=Z(this,e,i,0),r=!ie(e)||e!==this._$AH&&e!==X,r&&(this._$AH=e);else{const a=e;let c,d;for(e=o[0],c=0;c<o.length-1;c++)d=Z(this,a[n+c],i,c),d===X&&(d=this._$AH[c]),r||=!ie(d)||d!==this._$AH[c],d===A?e=A:e!==A&&(e+=(d??"")+o[c+1]),this._$AH[c]=d}r&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ri extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class ai extends ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class li extends ye{constructor(e,i,n,s,o){super(e,i,n,s,o),this.type=5}_$AI(e,i=this){if((e=Z(this,e,i,0)??A)===X)return;const n=this._$AH,s=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==A&&(n===A||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ci{constructor(e,i,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const di=Se.litHtmlPolyfillSupport;di?.(ne,ae),(Se.litHtmlVersions??=[]).push("3.3.3");const hi=(t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(s===void 0){const o=i?.renderBefore??null;n._$litPart$=s=new ae(e.insertBefore(te(),o),o,void 0,i??{})}return s._$AI(t),s};const Ie=globalThis;class O extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hi(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}O._$litElement$=!0,O.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:O});const ui=Ie.litElementPolyfillSupport;ui?.({LitElement:O});(Ie.litElementVersions??=[]).push("4.2.2");function Ae(t,e,i,n,s,o,r,a=1){const c=ft(o),d=mt(r),h=new Set(e.map(l=>`${l.x},${l.y}`));t.save(),t.globalAlpha=a,t.fillStyle=c.fill,t.beginPath();for(const l of e)t.rect(i+l.x*s,n+l.y*s,s,s);t.fill(),pi(t,e,i,n,s,d,c.seam),t.strokeStyle=c.seam,t.lineWidth=Math.max(1,s*.06),t.beginPath();for(const l of e){const p=i+l.x*s,g=n+l.y*s;h.has(`${l.x},${l.y-1}`)||(t.moveTo(p,g),t.lineTo(p+s,g)),h.has(`${l.x},${l.y+1}`)||(t.moveTo(p,g+s),t.lineTo(p+s,g+s)),h.has(`${l.x-1},${l.y}`)||(t.moveTo(p,g),t.lineTo(p,g+s)),h.has(`${l.x+1},${l.y}`)||(t.moveTo(p+s,g),t.lineTo(p+s,g+s))}t.stroke(),t.restore()}function pi(t,e,i,n,s,o,r){if(o==="solid")return;t.save(),t.beginPath();for(const v of e)t.rect(i+v.x*s,n+v.y*s,s,s);t.clip();let a=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(const v of e)a=Math.min(a,v.x),c=Math.min(c,v.y),d=Math.max(d,v.x+1),h=Math.max(h,v.y+1);const l=i+a*s,p=n+c*s,g=(d-a)*s,m=(h-c)*s;t.strokeStyle=r,t.globalAlpha=.55;const C=s*.34;t.lineWidth=C*.55;const T=g+m;for(let v=-m;v<=T;v+=C)t.beginPath(),o==="diagonal-down"?(t.moveTo(l+v,p),t.lineTo(l+v+m,p+m)):(t.moveTo(l+v,p+m),t.lineTo(l+v+m,p)),t.stroke();t.restore()}function fi(t,e,i){const n=u*e;t.fillStyle=E.boardWell,t.fillRect(0,0,n,n),t.strokeStyle=E.boardLine,t.lineWidth=1,t.beginPath();for(let c=1;c<u;c+=1)t.moveTo(c*e+.5,0),t.lineTo(c*e+.5,n),t.moveTo(0,c*e+.5),t.lineTo(n,c*e+.5);t.stroke();const s=Math.floor(u/2);t.save(),t.strokeStyle="rgba(47, 42, 36, 0.22)",t.lineWidth=Math.max(1,e*.05);const o=s*e+e/2,r=s*e+e/2,a=e*.22;t.beginPath(),t.arc(o,r,a,0,Math.PI*2),t.moveTo(o-a,r),t.lineTo(o+a,r),t.moveTo(o,r-a),t.lineTo(o,r+a),t.stroke(),t.restore(),t.strokeStyle=i?E.activeFrame:E.idleFrame,t.lineWidth=i?4:2,t.strokeRect(t.lineWidth/2,t.lineWidth/2,n-t.lineWidth,n-t.lineWidth)}const R=14;function mi(t,e,i){const n=u*i,s=2,o=R-s*2,r=i*.7;t.save(),t.fillStyle="#c08a2e",t.strokeStyle="#8e6318",t.lineWidth=1;const a=(c,d,h,l)=>{t.beginPath(),t.roundRect(c,d,h,l,Math.min(h,l)/2),t.fill(),t.stroke()};for(let c=0;c<u;c+=1){if(e[c]){const d=c*i+(i-r)/2;a(-R+s,d,o,r),a(n+s,d,o,r)}if(e[u+c]){const d=c*i+(i-r)/2;a(d,-R+s,r,o),a(d,n+s,r,o)}}t.restore()}function gi(t,e,i){const{cellSize:n,active:s,lines:o,ghost:r}=i,a=u*n+R*2;t.clearRect(0,0,a,a),t.save(),t.translate(R,R),fi(t,n,s);const c=new Map;for(let d=0;d<u;d+=1)for(let h=0;h<u;h+=1){const l=e.cells[d*u+h];if(l===void 0||l===S)continue;const p=c.get(l)??[];p.push({x:h,y:d}),c.set(l,p)}for(const[d,h]of c)Ae(t,h,0,0,n,d,L(d).size);if(mi(t,o,n),r!==void 0){Ae(t,r.orientation.cells,r.x*n,r.y*n,n,r.pieceId,r.size,.5),t.save(),t.fillStyle=r.valid?E.valid:E.invalid;for(const d of r.orientation.cells)t.fillRect((r.x+d.x)*n,(r.y+d.y)*n,n,n);t.restore()}t.restore()}function yi(t,e,i,n,s,o,r){t.clearRect(0,0,s,o);const a=Math.min(r,Math.floor(s/i.width),Math.floor(o/i.height)),c=(s-i.width*a)/2,d=(o-i.height*a)/2;Ae(t,i.cells,c,d,a,e,n)}class vi extends O{static styles=re`
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
  `;static properties={player:{attribute:!1},lines:{attribute:!1},ghost:{attribute:!1},active:{type:Boolean},cellSize:{type:Number},interactive:{type:Boolean}};constructor(){super(),this.lines=[],this.active=!1,this.cellSize=44,this.interactive=!1}get extent(){return u*this.cellSize+R*2}render(){return x`
      <canvas
        class=${this.interactive?"placing":""}
        @pointermove=${this.handlePointerMove}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.handleClick}
      ></canvas>
    `}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null||this.player===void 0)return;const i=window.devicePixelRatio||1,n=Math.round(this.extent*i);(e.width!==n||e.height!==n)&&(e.width=n,e.height=n,e.style.width=`${this.extent}px`,e.style.height=`${this.extent}px`);const s=e.getContext("2d");s!==null&&(s.setTransform(i,0,0,i,0,0),gi(s,this.player,{cellSize:this.cellSize,active:this.active,lines:this.lines,ghost:this.ghost}))}cellFromEvent(e){const i=this.renderRoot.querySelector("canvas");if(i===null)return null;const n=i.getBoundingClientRect(),s=Math.floor((e.clientX-n.left-R)/this.cellSize),o=Math.floor((e.clientY-n.top-R)/this.cellSize);return s<0||o<0||s>=u||o>=u?null:{x:s,y:o}}handlePointerMove(e){if(!this.interactive)return;const i=this.cellFromEvent(e);if(i===null){this.dispatchEvent(new CustomEvent("cell-leave"));return}this.dispatchEvent(new CustomEvent("cell-hover",{detail:i}))}handlePointerLeave(){this.interactive&&this.dispatchEvent(new CustomEvent("cell-leave"))}handleClick(e){if(!this.interactive)return;const i=this.cellFromEvent(e);i!==null&&this.dispatchEvent(new CustomEvent("cell-click",{detail:i}))}}customElements.define("omino-board",vi);class bi extends O{static styles=re`
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
  `;static properties={pieceId:{type:Number},orientation:{type:Number},variant:{type:String},cost:{type:Number},selected:{type:Boolean},chainNumber:{type:Number},box:{type:Number}};constructor(){super(),this.pieceId=0,this.orientation=0,this.variant="upcoming",this.selected=!1,this.box=56}render(){const e=L(this.pieceId),i=["card",this.variant,this.selected?"selected":""].join(" ");return x`
      <div class=${i}>
        ${this.variant==="buyable"?x`<span class="family">${Pt(e.size)}</span>`:null}
        <canvas></canvas>
        <span class="name">${e.name}</span>
        ${this.renderMeta()}
        ${this.cost===void 0?null:x`<span class="cost">${this.cost}</span>`}
      </div>
    `}renderMeta(){return this.variant==="burned"?x`<span class="burned-label">BURNED</span>`:this.variant==="buyable"?null:x`<span class="meta"
      >${this.chainNumber===void 0?"":`#${this.chainNumber}`}</span
    >`}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null)return;const i=L(this.pieceId),n=i.orientations[this.orientation]??i.orientations[0],s=window.devicePixelRatio||1;e.width=Math.round(this.box*s),e.height=Math.round(this.box*s),e.style.width=`${this.box}px`,e.style.height=`${this.box}px`;const o=e.getContext("2d");o!==null&&(o.setTransform(s,0,0,s,0,0),yi(o,this.pieceId,n,i.size,this.box,this.box,Math.floor(this.box/6)))}}customElements.define("omino-card",bi);class ee extends O{static styles=re`
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
    .chip .odd {
      color: var(--omino-active);
    }
    .key-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .swatch {
      display: inline-block;
      width: 16px;
      height: 12px;
      border-radius: 2px;
      border: 1px solid rgba(47, 42, 36, 0.3);
      vertical-align: -2px;
    }
    .swatch.down {
      background: repeating-linear-gradient(
        135deg,
        #c08a2e 0 3px,
        #8e6318 3px 6px
      );
    }
    .swatch.up {
      background: repeating-linear-gradient(
        45deg,
        #5c7248 0 3px,
        #3f5231 3px 6px
      );
    }
    .swatch.solid {
      background: #2f4b6e;
    }
    .spacer {
      flex: 1;
    }
  `;static properties={state:{attribute:!1},summary:{attribute:!1},selectedSlot:{type:Number},selectedOrientation:{type:Number},windowStart:{type:Number}};static UPCOMING_VISIBLE=7;static BURNED_VISIBLE=2;constructor(){super(),this.selectedOrientation=0,this.windowStart=0}render(){const e=this.state,i=this.summary;if(e===void 0||i===void 0)return null;const n=e.balance,s=Math.min(3,i.remaining),o=e.burned.slice(-ee.BURNED_VISIBLE),r=e.marker+s+this.windowStart,a=e.chain.slice(r,r+ee.UPCOMING_VISIBLE),c=Math.max(0,i.remaining-s-this.windowStart);return x`
      <div class="heading">
        <h2>OMINO CHAIN</h2>
        <span class="counter"
          >${i.remaining} of ${$e} remaining</span
        >
      </div>

      <div class="band">
        <div class="group">
          ${o.map(d=>x`<omino-card
                .pieceId=${d}
                variant="burned"
                .box=${38}
              ></omino-card>`)}
        </div>

        <div class="divider"></div>

        <div class="group buyable">
          ${Array.from({length:s},(d,h)=>{const l=h+1,p=e.chain[e.marker+h],g=this.selectedSlot===l;return x`<omino-card
              .pieceId=${p}
              .orientation=${g?this.selectedOrientation:0}
              variant="buyable"
              .cost=${me(L(p).size,l,n)}
              ?selected=${g}
              .box=${104}
              @click=${()=>this.selectSlot(l)}
            ></omino-card>`})}
        </div>

        <div class="divider"></div>

        <button
          class="arrow"
          ?disabled=${this.windowStart===0}
          @click=${()=>this.scrollWindow(-1)}
          title="Scroll the upcoming window back"
        >
          ‹
        </button>
        <div class="group">
          ${a.map((d,h)=>x`<omino-card
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

        <div class="chip">
          REMAINING<br />
          6s <b>${i.hexominoes}</b> · 5s <b>${i.pentominoes}</b> ·
          4s <b>${i.tetrominoes}</b> · 1–3 <b>${i.small}</b><br />
          <span class="odd">odd pieces left: <b>${i.odd}</b></span>
        </div>

        <div class="chip">
          FABRIC KEY
          <div class="key-row">
            <span class="swatch down"></span> hexomino · stripes ↘
          </div>
          <div class="key-row">
            <span class="swatch up"></span> pentomino · stripes ↗
          </div>
          <div class="key-row">
            <span class="swatch solid"></span> 1–4 squares · solid
          </div>
        </div>
      </div>
    `}selectSlot(e){this.dispatchEvent(new CustomEvent("slot-select",{detail:{slot:e}}))}scrollWindow(e){const i=Math.max(0,this.windowStart+e*3);this.dispatchEvent(new CustomEvent("window-change",{detail:{windowStart:i}}))}}customElements.define("omino-chain",ee);class $i extends O{static styles=re`
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
  `;static properties={state:{attribute:!1},names:{attribute:!1},outcome:{type:String}};constructor(){super(),this.names=["Player 1","Player 2"]}render(){const e=this.state;if(e===void 0)return null;const i=[K(e.players[0],e.balance),K(e.players[1],e.balance)],n=i[0]===i[1]?-1:i[0]>i[1]?0:1,s=e.ended?-1:e.toMove;return x`
      <div class="scores">
        ${[0,1].map(o=>x`
            <div class="score ${n===o?"leader":""}">
              <span class="value">${i[o]}</span>
              <span class="who">${this.names[o]}</span>
            </div>
          `)}
      </div>

      <div class="tempo">
        <div class="numbers">
          <span class=${s===0?"acting":""}
            >${e.players[0].spent}</span
          >
          <span class=${s===1?"acting":""}
            >${e.players[1].spent}</span
          >
        </div>
        <div class="caption">
          ${e.ended?"game over":`lowest spent acts next — ${this.names[s]}`}
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

      ${this.outcome===void 0?null:x`<div class="ended">${this.outcome}</div>`}
    `}}customElements.define("omino-score-strip",$i);const xi={hotseat:["Player 1","Player 2"],ai:["You","Omino AI"]},wi={baseline:"Baseline",sharp:"Sharp"};function Ai(t){return t==="baseline"?Vt():rt()}class Y extends O{static styles=re`
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
  `;static properties={game:{attribute:!1},selectedSlot:{attribute:!1},orientation:{attribute:!1},hover:{attribute:!1},windowStart:{attribute:!1},undoBlocked:{attribute:!1},violation:{attribute:!1},seedInput:{attribute:!1},mode:{attribute:!1},aiThinking:{attribute:!1},difficulty:{attribute:!1}};static AI_SIDE=1;static AI_MOVE_DELAY_MS=380;ai=rt();aiTimer;onKeyDown=e=>{const i=e.key.toLowerCase();if(!(i!=="r"&&i!=="f"&&i!=="escape")&&this.selectedSlot!==void 0){if(e.preventDefault(),i==="escape"){this.clearSelection();return}this.changePose(i==="r"?"rotate":"flip")}};changePose(e){if(this.selectedSlot===void 0)return;const i=M(this.game,this.selectedSlot);if(i===void 0)return;const n=i.orientations[this.orientation];n!==void 0&&(this.orientation=e==="rotate"?n.rotateCw:n.flip)}constructor(){super(),this.seedInput="omino-1",this.game=xe(this.seedInput),this.orientation=0,this.windowStart=0,this.undoBlocked=!1,this.mode="hotseat",this.aiThinking=!1,this.difficulty="sharp"}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){window.removeEventListener("keydown",this.onKeyDown),this.cancelAiTurn(),super.disconnectedCallback()}cancelAiTurn(){this.aiTimer!==void 0&&(clearTimeout(this.aiTimer),this.aiTimer=void 0),this.aiThinking=!1}get aiToMove(){return this.mode==="ai"&&!this.game.ended&&this.game.toMove===Y.AI_SIDE}scheduleAiTurn(){if(!this.aiToMove){this.cancelAiTurn();return}this.aiThinking=!0,this.aiTimer=setTimeout(()=>{if(this.aiTimer=void 0,!this.aiToMove){this.aiThinking=!1;return}const e=this.ai.chooseAction(this.game);if(!this.commit(e)){this.aiThinking=!1;return}this.scheduleAiTurn()},Y.AI_MOVE_DELAY_MS)}ghostFor(e){if(e!==this.game.toMove||this.game.ended||this.selectedSlot===void 0||this.hover===void 0)return;const i=M(this.game,this.selectedSlot);if(i===void 0)return;const n=i.orientations[this.orientation];if(n!==void 0)return{orientation:n,pieceId:i.id,size:i.size,x:this.hover.x,y:this.hover.y,valid:q(this.game.players[e],i,this.orientation,this.hover.x,this.hover.y)}}get names(){return xi[this.mode]}outcomeText(){const e=Ht(this.game);if(e!==void 0)return e.kind==="draw"?"Game over — a draw":`Game over — ${this.names[e.player]} wins`}hintText(){return this.game.ended?"Chain exhausted. Start a new game to play again.":this.violation!==void 0?"":this.aiThinking?"Omino AI is moving…":this.selectedSlot===void 0?zt(this.game)?"Click a purchasable card to pick it up.":"No purchasable piece fits — passing is forced.":"R rotates · F flips · Esc deselects · click a valid square to place"}clearSelection(){this.selectedSlot=void 0,this.orientation=0,this.hover=void 0}commit(e){const i=this.game;try{const n=tt(i,e);return Dt(i,e,n),this.game=n,this.undoBlocked=!1,this.clearSelection(),!0}catch(n){return n instanceof nt?this.violation=`Rule violation: ${n.message}`:n instanceof Error?this.violation=`Rejected: ${n.message}`:this.violation="Rejected: unknown error",this.cancelAiTurn(),!1}}commitHuman(e){this.commit(e)&&this.aiToMove&&this.scheduleAiTurn()}handleCellClick(e,i){if(e!==this.game.toMove||this.selectedSlot===void 0)return;const n=M(this.game,this.selectedSlot);n!==void 0&&q(this.game.players[e],n,this.orientation,i.x,i.y)&&this.commitHuman({type:"buy",slot:this.selectedSlot,orientation:this.orientation,x:i.x,y:i.y})}handleUndo(){const e=this.game.lastActor;if(e===null||!Me(this.game,e))return;this.cancelAiTurn();let i=this.game;if(this.mode==="ai")for(;i.history.length>0&&i.lastActor===Y.AI_SIDE;)i=Oe(i);i.history.length>0&&(i=Oe(i));try{st(i)}catch(n){this.violation=n instanceof Error?`Undo produced an invalid state: ${n.message}`:"Undo produced an invalid state";return}this.game=i,this.undoBlocked=!0,this.clearSelection()}startGame(e,i=this.mode,n=this.difficulty){this.cancelAiTurn(),this.seedInput=e,this.mode=i,this.difficulty=n,this.ai=Ai(n),this.game=xe(e),this.windowStart=0,this.undoBlocked=!1,this.violation=void 0,this.clearSelection(),this.aiToMove&&this.scheduleAiTurn()}renderPoseControls(){const e=this.selectedSlot===void 0?void 0:M(this.game,this.selectedSlot),i=e===void 0||e.orientations.length===1;return x`
      <button
        ?disabled=${i}
        title=${i?"This piece looks the same in every orientation":"Rotate 90° (R)"}
        @click=${()=>this.changePose("rotate")}
      >
        ⟳ Rotate
      </button>
      <button
        ?disabled=${i}
        title=${i?"This piece looks the same mirrored":"Flip (F)"}
        @click=${()=>this.changePose("flip")}
      >
        ⇄ Flip
      </button>
    `}renderSide(e){const i=this.names,n=!this.game.ended&&this.game.toMove===e,s=this.mode==="ai"&&e===Y.AI_SIDE,o=n&&!s&&!this.aiThinking,r=this.game.players[e],a=!this.game.ended&&!this.undoBlocked&&!this.aiThinking&&(this.mode==="ai"?e===0&&this.game.history.length>0:this.game.lastActor===e&&Me(this.game,e));return x`
      <div class="side ${n?"":"idle"}">
        <h2>${i[e]} · 9×9</h2>
        <omino-board
          .player=${r}
          .lines=${Qe(r)}
          .ghost=${this.ghostFor(e)}
          ?active=${n}
          ?interactive=${o&&this.selectedSlot!==void 0}
          .cellSize=${44}
          @cell-hover=${c=>{o&&(this.hover=c.detail)}}
          @cell-leave=${()=>{o&&(this.hover=void 0)}}
          @cell-click=${c=>this.handleCellClick(e,c.detail)}
        ></omino-board>

        <div class="actions">
          ${o&&this.selectedSlot!==void 0?this.renderPoseControls():null}
          ${o?x`<button
                class="primary"
                @click=${()=>this.commitHuman({type:"pass"})}
                title="Pass: costs 2 spent and burns all 3 purchasable pieces"
              >
                Pass · costs 2 · burns all 3
              </button>`:x`<span class="waiting"
                >${this.waitingLabel(e,n)}</span
              >`}
          ${a?x`<button class="undo-chip" @click=${()=>this.handleUndo()}>
                ${this.mode==="ai"?"Undo my last move":`Undo ${i[e]}'s move`}
              </button>`:null}
        </div>
      </div>
    `}waitingLabel(e,i){return this.game.ended?"":i&&this.aiThinking?"Thinking…":"Waiting"}render(){const e=it(this.game);return x`
      <header>
        <h1>Omino</h1>
        <label for="seed">seed</label>
        <input
          id="seed"
          .value=${this.seedInput}
          @input=${i=>{this.seedInput=i.target.value}}
          @keydown=${i=>{i.stopPropagation(),i.key==="Enter"&&this.startGame(this.seedInput)}}
        />
        <button @click=${()=>this.startGame(this.seedInput)}>New game</button>
        <div class="mode">
          ${["hotseat","ai"].map(i=>x`
              <button
                class=${this.mode===i?"selected":""}
                @click=${()=>this.startGame(this.seedInput,i)}
                title=${i==="hotseat"?"Two players on this screen":"Play the greedy baseline agent"}
              >
                ${i==="hotseat"?"Hotseat":"vs AI"}
              </button>
            `)}
        </div>
        ${this.mode==="ai"?x`<div class="mode">
              ${["baseline","sharp"].map(i=>x`
                  <button
                    class=${this.difficulty===i?"selected":""}
                    @click=${()=>this.startGame(this.seedInput,"ai",i)}
                    title=${i==="baseline"?"Greedy: takes the biggest piece it can, never weighs fit":"Packing-aware: avoids stranding cells. Beats baseline ~61%"}
                  >
                    ${wi[i]}
                  </button>
                `)}
            </div>`:null}
        <div class="spacer"></div>
        <span class="hint">${this.hintText()}</span>
      </header>

      ${this.violation===void 0?null:x`<div class="violation">${this.violation}</div>`}

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
        .windowStart=${this.windowStart}
        @slot-select=${i=>{if(this.game.ended)return;const n=i.detail.slot;if(this.selectedSlot===n){this.clearSelection();return}this.selectedSlot=n,this.orientation=0}}
        @window-change=${i=>{this.windowStart=i.detail.windowStart}}
      ></omino-chain>
    `}}customElements.define("omino-app",Y);gt();document.body.style.margin="0";const pt=document.querySelector("#app");if(pt===null)throw new Error("Missing #app mount point");pt.append(document.createElement("omino-app"));
