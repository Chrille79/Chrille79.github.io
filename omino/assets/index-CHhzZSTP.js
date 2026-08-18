(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const E={linen:"#efe6d5",linenDeep:"#e3d7c2",ink:"#2f2a24",inkSoft:"#6c6154",boardWell:"#ddceb4",boardLine:"rgba(47, 42, 36, 0.14)",activeFrame:"#a8432f",idleFrame:"#b9a48a",valid:"rgba(84, 124, 74, 0.55)",invalid:"rgba(168, 67, 47, 0.45)",burned:"#a89880"},Pe=[{fill:"#a8432f",seam:"#7c2e1f"},{fill:"#2f4b6e",seam:"#1f3550"},{fill:"#c08a2e",seam:"#8e6318"},{fill:"#5c7248",seam:"#3f5231"},{fill:"#8a4a63",seam:"#642f45"},{fill:"#3f6f6a",seam:"#28504c"}];function mt(i){return Pe[i%Pe.length]}function gt(i){return i===6?"diagonal-down":i===5?"diagonal-up":"solid"}function yt(){const i=document.createElement("style");i.textContent=`:root {
  --omino-linen: ${E.linen};
  --omino-linen-deep: ${E.linenDeep};
  --omino-ink: ${E.ink};
  --omino-ink-soft: ${E.inkSoft};
  --omino-board-well: ${E.boardWell};
  --omino-active: ${E.activeFrame};
  --omino-idle: ${E.idleFrame};
  --omino-burned: ${E.burned};
}`,document.head.append(i)}const be=4294967296,bt=2166136261,vt=16777619;function $t(i){let e=i>>>0;return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function xt(i){if(typeof i=="number"){if(!Number.isInteger(i))throw new RangeError(`Numeric seed must be an integer, got ${i}`);return i>>>0}let e=bt;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,vt);return $t(e)}class he{#e;constructor(e){this.#e=xt(e)}static fromState(e){const t=new he(0);return t.#e=e>>>0,t}get state(){return this.#e}clone(){return he.fromState(this.#e)}nextUint32(){this.#e=this.#e+1831565813|0;let e=this.#e;return e=Math.imul(e^e>>>15,1|e),e=e+Math.imul(e^e>>>7,61|e)^e,(e^e>>>14)>>>0}next(){return this.nextUint32()/be}nextInt(e){if(!Number.isInteger(e)||e<=0)throw new RangeError(`Bound must be a positive integer, got ${e}`);const t=be-be%e;let n=this.nextUint32();for(;n>=t;)n=this.nextUint32();return n%e}shuffle(e){const t=e.slice();for(let n=t.length-1;n>0;n-=1){const s=this.nextInt(n+1),o=t[n],r=t[s];t[n]=r,t[s]=o}return t}}function wt(i,e){return i.y-e.y||i.x-e.x}function se(i){let e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY;for(const n of i)n.x<e&&(e=n.x),n.y<t&&(t=n.y);return i.map(n=>({x:n.x-e,y:n.y-t})).sort(wt)}function qe(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n+=1){const s=i[n],o=e[n];if(s.y!==o.y)return s.y-o.y;if(s.x!==o.x)return s.x-o.x}return i.length-e.length}function j(i){return i.map(e=>`${e.x},${e.y}`).join(" ")}function At(i){let e=0;for(const t of i)t.x>e&&(e=t.x);return e+1}function _t(i){let e=0;for(const t of i)t.y>e&&(e=t.y);return e+1}function Et(i){return se(i.map(e=>({x:-e.y,y:e.x})))}function St(i){return se(i.map(e=>({x:-e.x,y:e.y})))}function kt(i){return i.map(e=>({x:-e.y,y:e.x}))}function It(i){return i.map(e=>({x:-e.x,y:e.y}))}function Ke(i){const e=new Map;for(const t of[i,It(i)]){let n=t;for(let s=0;s<4;s+=1){const o=se(n);e.set(j(o),o),n=kt(n)}}return[...e.values()].sort(qe)}function Xe(i){return Ke(i)[0]}function Ct(i){return[{x:i.x+1,y:i.y},{x:i.x-1,y:i.y},{x:i.x,y:i.y+1},{x:i.x,y:i.y-1}]}function Tt(i){const e=[];return i.forEach((t,n)=>{[...t].forEach((s,o)=>{(s==="#"||s==="X")&&e.push({x:o,y:n})})}),se(e)}const Ne=6,$e=56,Pt={1:"monomino",2:"domino",3:"tromino",4:"tetromino",5:"pentomino",6:"hexomino"};function Nt(i){const e=Pt[i];if(e===void 0)throw new RangeError(`No polyomino family for size ${i}`);return e}const Mt={O1:["#"],I2:["##"],I3:["###"],V3:["#.","##"],I4:["####"],O4:["##","##"],T4:["###",".#."],S4:[".##","##."],L4:["#.","#.","##"],F:[".##","##.",".#."],I:["#####"],L:["#.","#.","#.","##"],N:[".#",".#","##","#."],P:["##","##","#."],T:["###",".#.",".#."],U:["#.#","###"],V:["#..","#..","###"],W:["#..","##.",".##"],X:[".#.","###",".#."],Y:[".#","##",".#",".#"],Z:["##.",".#.",".##"]};function Ot(i){const e=new Map;let t=[[{x:0,y:0}]];e.set(1,t);for(let n=2;n<=i;n+=1){const s=new Map;for(const o of t){const r=new Set(o.map(a=>`${a.x},${a.y}`));for(const a of o)for(const c of Ct(a)){if(r.has(`${c.x},${c.y}`))continue;const d=Xe(se([...o,c]));s.set(j(d),d)}}t=[...s.values()].sort(qe),e.set(n,t)}return e}function Rt(){const i=Ot(Ne),e=new Map;for(const[s,o]of Object.entries(Mt))e.set(j(Xe(Tt(o))),s);const t=[];let n=0;for(let s=1;s<=Ne;s+=1)for(const o of i.get(s)??[]){const r=j(o);let a=e.get(r);a===void 0&&(n+=1,a=`H${String(n).padStart(2,"0")}`);const c=Ke(o),d=new Map(c.map((l,p)=>[j(l),p])),h=(l,p)=>{const g=d.get(j(l));if(g===void 0)throw new Error(`${p} of ${a} left its own orientation set`);return g};t.push({id:t.length,size:s,name:a,key:r,orientations:c.map(l=>({cells:l,width:At(l),height:_t(l),rotateCw:h(Et(l),"rotation"),flip:h(St(l),"reflection")}))})}return t}const pe=Object.freeze(Rt());pe.reduce((i,e)=>i+e.size,0);function L(i){const e=pe[i];if(e===void 0)throw new RangeError(`No piece with id ${i}`);return e}pe.filter(i=>i.size%2===1).length;const u=9,w=u*u,S=255,Ze=2*w,fe=3,oe=Object.freeze({lineBonus:6,passCost:2,slotSurcharge:Object.freeze([0,1,2])});function me(i,e,t=oe){const n=t.slotSurcharge[e-1];if(n===void 0)throw new RangeError(`Slot must be 1..${fe}, got ${e}`);return i+n}function Me(){return{cells:new Uint8Array(w).fill(S),spent:0,covered:0,linesCompleted:0}}function xe(i,e=oe,t={}){const n=new he(i).shuffle(pe.map(o=>o.id)),s=t.firstPlayer??0;return{seed:i,balance:e,chain:n,marker:0,burned:[],players:[Me(),Me()],firstPlayer:s,toMove:s,lastActor:null,history:[],ended:n.length===0}}function Ut(i,e,t){const[n,s]=i;return n.spent<s.spent?0:s.spent<n.spent?1:e===null?t:e===0?1:0}function Je(i){return i.chain.length-i.marker}function _e(i){const e=Math.min(fe,Je(i)),t=[];for(let n=0;n<e;n+=1)t.push(L(i.chain[i.marker+n]));return t}function M(i,e){if(!Number.isInteger(e)||e<1||e>fe)return;const t=i.marker+e-1;if(!(t>=i.chain.length))return L(i.chain[t])}function G(i,e){return e*u+i}function q(i,e,t,n,s){const o=e.orientations[t];if(o===void 0||!Number.isInteger(n)||!Number.isInteger(s)||n<0||s<0||n+o.width>u||s+o.height>u)return!1;for(const r of o.cells)if(i.cells[G(n+r.x,s+r.y)]!==S)return!1;return!0}function Qe(i,e){for(let t=0;t<e.orientations.length;t+=1){const n=e.orientations[t];for(let s=0;s<=u-n.height;s+=1)for(let o=0;o<=u-n.width;o+=1)if(q(i,e,t,o,s))return!0}return!1}function Bt(i){let e=0;for(let t=0;t<u;t+=1){let n=!0;for(let s=0;s<u;s+=1)if(i[G(s,t)]===S){n=!1;break}n&&(e+=1)}for(let t=0;t<u;t+=1){let n=!0;for(let s=0;s<u;s+=1)if(i[G(t,s)]===S){n=!1;break}n&&(e+=1)}return e}function et(i){const e=[];for(let t=0;t<u;t+=1){let n=!0;for(let s=0;s<u;s+=1)i.cells[G(s,t)]===S&&(n=!1);e.push(n)}for(let t=0;t<u;t+=1){let n=!0;for(let s=0;s<u;s+=1)i.cells[G(t,s)]===S&&(n=!1);e.push(n)}return e}function K(i,e=oe){return 2*i.covered-i.spent+e.lineBonus*i.linesCompleted}function Lt(i,e=oe){const t=w-i.covered;return Ze-i.spent-2*t+e.lineBonus*i.linesCompleted}function zt(i,e){if(i.ended)return!1;if(e.type==="pass")return!0;const t=M(i,e.slot);if(t===void 0)return!1;const n=i.players[i.toMove];return q(n,t,e.orientation,e.x,e.y)}function tt(i){if(i.ended)return[];const e=[],t=i.players[i.toMove],n=_e(i);for(let s=0;s<n.length;s+=1){const o=n[s],r=s+1;for(let a=0;a<o.orientations.length;a+=1){const c=o.orientations[a],d=u-c.width,h=u-c.height;for(let l=0;l<=h;l+=1)for(let p=0;p<=d;p+=1)q(t,o,a,p,l)&&e.push({type:"buy",slot:r,orientation:a,x:p,y:l})}}return e.push({type:"pass"}),e}function Ft(i){if(i.ended)return!1;const e=i.players[i.toMove];return _e(i).some(t=>Qe(e,t))}class ce extends Error{constructor(e){super(e),this.name="IllegalActionError"}}function it(i,e){if(i.ended)throw new ce("The game has ended");const t=i.toMove,n=i.players[t];let s,o,r;if(e.type==="buy"){const d=M(i,e.slot);if(d===void 0)throw new ce(`Slot ${e.slot} holds no piece`);if(!q(n,d,e.orientation,e.x,e.y))throw new ce(`Piece ${d.name} cannot be placed in orientation ${e.orientation} at (${e.x}, ${e.y})`);const h=d.orientations[e.orientation],l=i.players[t].cells.slice();for(const p of h.cells)l[G(e.x+p.x,e.y+p.y)]=d.id;s={cells:l,spent:n.spent+me(d.size,e.slot,i.balance),covered:n.covered+d.size,linesCompleted:Bt(l)},o=i.chain.slice(i.marker,i.marker+e.slot-1),r=i.marker+e.slot}else{s={cells:n.cells,spent:n.spent+i.balance.passCost,covered:n.covered,linesCompleted:n.linesCompleted};const d=Math.min(i.marker+fe,i.chain.length);o=i.chain.slice(i.marker,d),r=d}const a=t===0?[s,i.players[1]]:[i.players[0],s],c=r>=i.chain.length;return{seed:i.seed,balance:i.balance,chain:i.chain,marker:r,burned:o.length>0?[...i.burned,...o]:i.burned,players:a,firstPlayer:i.firstPlayer,toMove:Ut(a,t,i.firstPlayer),lastActor:t,history:[...i.history,e],ended:c}}function Ht(i,e,t=oe,n={}){let s=xe(i,t,n);for(const o of e)s=it(s,o);return s}function Oe(i,e){return i.history.length>0&&i.lastActor===e}function Re(i){if(i.history.length===0)throw new ce("Nothing to undo");return Ht(i.seed,i.history.slice(0,-1),i.balance,{firstPlayer:i.firstPlayer})}function Dt(i){if(!i.ended)return;const[e,t]=i.players,n=K(e,i.balance),s=K(t,i.balance);return n!==s?{kind:"winner",player:n>s?0:1}:e.covered!==t.covered?{kind:"winner",player:e.covered>t.covered?0:1}:e.spent!==t.spent?{kind:"winner",player:e.spent<t.spent?0:1}:{kind:"draw"}}function nt(i){let e=0,t=0,n=0,s=0,o=0;for(let r=i.marker;r<i.chain.length;r+=1){const a=L(i.chain[r]);a.size===6?e+=1:a.size===5?t+=1:a.size===4?n+=1:s+=1,a.size%2===1&&(o+=1)}return{remaining:Je(i),hexominoes:e,pentominoes:t,tetrominoes:n,small:s,odd:o}}class st extends Error{constructor(e){super(e),this.name="RuleViolation"}}function $(i,e){if(!i)throw new st(e)}function Ue(i,e){let t=0;for(const s of i.cells)s!==S&&(t+=1);$(i.cells.length===w,`${e}: board has ${i.cells.length} cells, expected ${w}`),$(i.covered===t,`${e}: covered says ${i.covered} but ${t} cells are filled`),$(i.covered<=w,`${e}: covered ${i.covered} exceeds the board`),$(i.spent>=0,`${e}: spent went negative (${i.spent})`);const n=et(i).filter(Boolean).length;$(i.linesCompleted===n,`${e}: linesCompleted says ${i.linesCompleted} but ${n} lines are full`)}function ot(i){Ue(i.players[0],"player 1"),Ue(i.players[1],"player 2");for(const s of i.players){$(K(s,i.balance)===Lt(s,i.balance),"score identity 2×covered − spent + bonus×lines ≠ 162 − spent − 2×empty + bonus×lines");const o=w-s.covered;$(K(s,i.balance)===Ze-s.spent-2*o+i.balance.lineBonus*s.linesCompleted,"score does not match the identity recomputed from raw counts")}const e=i.players.reduce((s,o)=>{const r=new Set;for(const a of o.cells)a!==S&&r.add(a);return s+r.size},0),t=i.chain.length-i.marker;$(t+i.burned.length+e===$e,`piece accounting: ${t} in chain + ${i.burned.length} burned + ${e} placed ≠ ${$e}`),$(new Set(i.burned).size===i.burned.length,"a piece was burned twice");const n=nt(i);if($(n.hexominoes+n.pentominoes+n.tetrominoes+n.small===n.remaining,"chain class counts do not add up to the remaining count"),$(i.ended===i.marker>=i.chain.length,"ended flag disagrees with chain exhaustion"),!i.ended){const[s,o]=i.players;let r;s.spent!==o.spent?r=s.spent<o.spent?0:1:i.lastActor===null?r=i.firstPlayer:r=i.lastActor===0?1:0,$(i.toMove===r,`turn order: expected player ${r+1} to move, got ${i.toMove+1}`)}}function Vt(i,e,t){$(zt(i,e),`an illegal action was applied: ${JSON.stringify(e)}`),$(t.marker>i.marker,`marker did not advance (${i.marker} → ${t.marker})`);for(const a of[0,1])$(t.players[a].spent>=i.players[a].spent,`player ${a+1}: spent decreased`),$(t.players[a].covered>=i.players[a].covered,`player ${a+1}: covered decreased`),$(t.players[a].linesCompleted>=i.players[a].linesCompleted,`player ${a+1}: a completed line was lost`);const n=i.toMove,s=n===0?1:0;$(t.players[s].spent===i.players[s].spent&&t.players[s].covered===i.players[s].covered,"the player who did not act was modified");const o=i.players[n].cells,r=t.players[n].cells;for(let a=0;a<w;a+=1)o[a]!==S&&$(r[a]===o[a],`cell ${a} was overwritten (piece ${o[a]} → ${r[a]})`);if(e.type==="pass"){$(t.players[n].covered===i.players[n].covered,"a pass changed the board"),$(t.players[n].spent===i.players[n].spent+i.balance.passCost,"a pass charged the wrong amount");const a=Math.min(3,i.chain.length-i.marker);$(t.burned.length===i.burned.length+a,`a pass burned ${t.burned.length-i.burned.length} pieces, expected ${a}`)}else{$(t.marker===i.marker+e.slot,"a buy advanced the marker by the wrong amount"),$(t.burned.length===i.burned.length+e.slot-1,"a buy burned the wrong number of pieces");const a=t.players[n].covered-i.players[n].covered;$(a>=1&&a<=6,`a buy covered ${a} squares`)}ot(t)}class rt extends Error{constructor(e){super(`Agent "${e}" was asked to move with no legal action available`),this.name="NoLegalActionError"}}function Wt(i="greedy"){const e=new Uint8Array(w),t=new Uint8Array(w),n=new Int32Array(w);function s(){t.fill(0);let o=0;for(let r=0;r<w;r+=1){if(e[r]===1||t[r]===1)continue;o+=1;let a=0;for(n[a]=r,a+=1,t[r]=1;a>0;){a-=1;const c=n[a],d=c%u,h=c/u|0;if(d>0){const l=c-1;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}if(d<u-1){const l=c+1;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}if(h>0){const l=c-u;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}if(h<u-1){const l=c+u;e[l]===0&&t[l]===0&&(t[l]=1,n[a]=l,a+=1)}}}return o}return{name:i,chooseAction(o){const r=tt(o);if(r.length===0)throw new rt(i);const a=o.players[o.toMove],{lineBonus:c,passCost:d}=o.balance,h=new Int32Array(u),l=new Int32Array(u);for(let f=0;f<u;f+=1)for(let _=0;_<u;_+=1)a.cells[f*u+_]!==S&&(h[f]=h[f]+1,l[_]=l[_]+1);for(let f=0;f<w;f+=1)e[f]=a.cells[f]===S?0:1;const p=f=>{if(f.type==="pass")return s();const k=M(o,f.slot)?.orientations[f.orientation];if(k===void 0)return Number.POSITIVE_INFINITY;for(const I of k.cells)e[(f.y+I.y)*u+f.x+I.x]=1;const N=s();for(const I of k.cells)e[(f.y+I.y)*u+f.x+I.x]=0;return N};let g={type:"pass"},m=-d,C=Number.POSITIVE_INFINITY,T=!1;const b=new Int32Array(u),y=new Int32Array(u);for(const f of r){if(f.type==="pass")continue;const _=M(o,f.slot);if(_===void 0)continue;const k=_.orientations[f.orientation];if(k===void 0)continue;b.fill(0),y.fill(0);for(const U of k.cells){const v=f.x+U.x,P=f.y+U.y;b[P]=b[P]+1,y[v]=y[v]+1}let N=0;for(const U of k.cells){const v=f.y+U.y,P=f.x+U.x;b[v]!==0&&h[v]+b[v]===u&&(N+=1,b[v]=0),y[P]!==0&&l[P]+y[P]===u&&(N+=1,y[P]=0)}const I=2*_.size-me(_.size,f.slot,o.balance)+c*N;if(I<m)continue;if(I>m){m=I,g=f,T=!1,C=Number.POSITIVE_INFINITY;continue}T||(C=p(g),T=!0);const le=p(f);le<C&&(C=le,g=f)}return g}}}const jt=Object.freeze({hopelessCellCost:2,riskyCellCost:2,riskyRegionSize:7,lineProgress:.8});function at(i=jt,e="heuristic"){const t=new Uint8Array(w),n=new Uint8Array(w),s=new Int32Array(w);function o(r){n.fill(0);let a=0;for(let c=0;c<w;c+=1){if(t[c]===1||n[c]===1)continue;let d=0,h=0;for(s[h]=c,h+=1,n[c]=1;h>0;){h-=1;const l=s[h];d+=1;const p=l%u,g=l/u|0;if(p>0){const m=l-1;t[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}if(p<u-1){const m=l+1;t[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}if(g>0){const m=l-u;t[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}if(g<u-1){const m=l+u;t[m]===0&&n[m]===0&&(n[m]=1,s[h]=m,h+=1)}}d<r?a+=d*i.hopelessCellCost:d<i.riskyRegionSize&&(a+=d*i.riskyCellCost)}return a}return{name:e,chooseAction(r){const a=tt(r);if(a.length===0)throw new rt(e);const c=r.players[r.toMove],{lineBonus:d,passCost:h}=r.balance;let l=Number.POSITIVE_INFINITY;for(let y=r.marker;y<r.chain.length;y+=1){const f=L(r.chain[y]).size;f<l&&(l=f)}Number.isFinite(l)||(l=1);const p=new Int32Array(u),g=new Int32Array(u);for(let y=0;y<u;y+=1)for(let f=0;f<u;f+=1)c.cells[y*u+f]!==S&&(p[y]=p[y]+1,g[f]=g[f]+1);for(let y=0;y<w;y+=1)t[y]=c.cells[y]===S?0:1;let m={type:"pass"},C=-h-o(l);const T=new Int32Array(u),b=new Int32Array(u);for(const y of a){if(y.type==="pass")continue;const f=M(r,y.slot);if(f===void 0)continue;const _=f.orientations[y.orientation];if(_===void 0)continue;T.fill(0),b.fill(0);for(const v of _.cells)T[y.y+v.y]=T[y.y+v.y]+1,b[y.x+v.x]=b[y.x+v.x]+1;let k=0,N=0;for(let v=0;v<u;v+=1){const P=T[v];if(P>0){const z=p[v],F=z+P;F===u&&(k+=1),N+=(F*F-z*z)/u}const Te=b[v];if(Te>0){const z=g[v],F=z+Te;F===u&&(k+=1),N+=(F*F-z*z)/u}}const I=2*f.size-me(f.size,y.slot,r.balance)+d*k;for(const v of _.cells)t[(y.y+v.y)*u+y.x+v.x]=1;const le=o(l);for(const v of _.cells)t[(y.y+v.y)*u+y.x+v.x]=0;const U=I+i.lineProgress*N-le;U>C&&(C=U,m=y)}return m}}}const de=globalThis,Ee=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),Be=new WeakMap;let lt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ee&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Be.set(t,e))}return e}toString(){return this.cssText}};const Yt=i=>new lt(typeof i=="string"?i:i+"",void 0,Se),re=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new lt(t,i,Se)},Gt=(i,e)=>{if(Ee)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=de.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)}},Le=Ee?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Yt(t)})(i):i;const{is:qt,defineProperty:Kt,getOwnPropertyDescriptor:Xt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Jt,getPrototypeOf:Qt}=Object,ge=globalThis,ze=ge.trustedTypes,ei=ze?ze.emptyScript:"",ti=ge.reactiveElementPolyfillSupport,Q=(i,e)=>i,we={toAttribute(i,e){switch(e){case Boolean:i=i?ei:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ct=(i,e)=>!qt(i,e),Fe={attribute:!0,type:String,converter:we,reflect:!1,useDefault:!1,hasChanged:ct};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;let W=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Kt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:o}=Xt(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){const a=s?.call(this);o?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fe}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;const e=Qt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){const t=this.properties,n=[...Zt(t),...Jt(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Le(s))}else e!==void 0&&t.push(Le(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:we).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:we;this._$Em=s;const a=r.fromAttribute(t,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,n,s=!1,o){if(e!==void 0){const r=this.constructor;if(s===!1&&(o=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??ct)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:o},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n){const{wrapped:r}=o,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[Q("elementProperties")]=new Map,W[Q("finalized")]=new Map,ti?.({ReactiveElement:W}),(ge.reactiveElementVersions??=[]).push("2.1.2");const ke=globalThis,He=i=>i,ue=ke.trustedTypes,De=ue?ue.createPolicy("lit-html",{createHTML:i=>i}):void 0,dt="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+B,ii=`<${ht}>`,V=document,te=()=>V.createComment(""),ie=i=>i===null||typeof i!="object"&&typeof i!="function",Ie=Array.isArray,ni=i=>Ie(i)||typeof i?.[Symbol.iterator]=="function",ve=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,We=/>/g,H=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,Ye=/"/g,ut=/^(?:script|style|textarea|title)$/i,si=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),x=si(1),X=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Ge=new WeakMap,D=V.createTreeWalker(V,129);function pt(i,e){if(!Ie(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return De!==void 0?De.createHTML(e):e}const oi=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":e===3?"<math>":"",r=J;for(let a=0;a<t;a++){const c=i[a];let d,h,l=-1,p=0;for(;p<c.length&&(r.lastIndex=p,h=r.exec(c),h!==null);)p=r.lastIndex,r===J?h[1]==="!--"?r=Ve:h[1]!==void 0?r=We:h[2]!==void 0?(ut.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=H):h[3]!==void 0&&(r=H):r===H?h[0]===">"?(r=s??J,l=-1):h[1]===void 0?l=-2:(l=r.lastIndex-h[2].length,d=h[1],r=h[3]===void 0?H:h[3]==='"'?Ye:je):r===Ye||r===je?r=H:r===Ve||r===We?r=J:(r=H,s=void 0);const g=r===H&&i[a+1].startsWith("/>")?" ":"";o+=r===J?c+ii:l>=0?(n.push(d),c.slice(0,l)+dt+c.slice(l)+B+g):c+B+(l===-2?a:g)}return[pt(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ne{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const a=e.length-1,c=this.parts,[d,h]=oi(e,t);if(this.el=ne.createElement(d,n),D.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=D.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(dt)){const p=h[r++],g=s.getAttribute(l).split(B),m=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?ai:m[1]==="?"?li:m[1]==="@"?ci:ye}),s.removeAttribute(l)}else l.startsWith(B)&&(c.push({type:6,index:o}),s.removeAttribute(l));if(ut.test(s.tagName)){const l=s.textContent.split(B),p=l.length-1;if(p>0){s.textContent=ue?ue.emptyScript:"";for(let g=0;g<p;g++)s.append(l[g],te()),D.nextNode(),c.push({type:2,index:++o});s.append(l[p],te())}}}else if(s.nodeType===8)if(s.data===ht)c.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(B,l+1))!==-1;)c.push({type:7,index:o}),l+=B.length-1}o++}}static createElement(e,t){const n=V.createElement("template");return n.innerHTML=e,n}}function Z(i,e,t=i,n){if(e===X)return e;let s=n!==void 0?t._$Co?.[n]:t._$Cl;const o=ie(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=s:t._$Cl=s),s!==void 0&&(e=Z(i,s._$AS(i,e.values),s,n)),e}class ri{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=(e?.creationScope??V).importNode(t,!0);D.currentNode=s;let o=D.nextNode(),r=0,a=0,c=n[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new ae(o,o.nextSibling,this,e):c.type===1?d=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(d=new di(o,this,e)),this._$AV.push(d),c=n[++a]}r!==c?.index&&(o=D.nextNode(),r++)}return D.currentNode=V,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ie(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ni(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ne.createElement(pt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(t);else{const o=new ri(s,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new ne(e)),t}k(e){Ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new ae(this.O(te()),this.O(te()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=He(e).nextSibling;He(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ye{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=Z(this,e,t,0),r=!ie(e)||e!==this._$AH&&e!==X,r&&(this._$AH=e);else{const a=e;let c,d;for(e=o[0],c=0;c<o.length-1;c++)d=Z(this,a[n+c],t,c),d===X&&(d=this._$AH[c]),r||=!ie(d)||d!==this._$AH[c],d===A?e=A:e!==A&&(e+=(d??"")+o[c+1]),this._$AH[c]=d}r&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ai extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class li extends ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class ci extends ye{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??A)===X)return;const n=this._$AH,s=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==A&&(n===A||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class di{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const hi=ke.litHtmlPolyfillSupport;hi?.(ne,ae),(ke.litHtmlVersions??=[]).push("3.3.3");const ui=(i,e,t)=>{const n=t?.renderBefore??e;let s=n._$litPart$;if(s===void 0){const o=t?.renderBefore??null;n._$litPart$=s=new ae(e.insertBefore(te(),o),o,void 0,t??{})}return s._$AI(i),s};const Ce=globalThis;class O extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ui(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}O._$litElement$=!0,O.finalized=!0,Ce.litElementHydrateSupport?.({LitElement:O});const pi=Ce.litElementPolyfillSupport;pi?.({LitElement:O});(Ce.litElementVersions??=[]).push("4.2.2");function Ae(i,e,t,n,s,o,r,a=1){const c=mt(o),d=gt(r),h=new Set(e.map(l=>`${l.x},${l.y}`));i.save(),i.globalAlpha=a,i.fillStyle=c.fill,i.beginPath();for(const l of e)i.rect(t+l.x*s,n+l.y*s,s,s);i.fill(),fi(i,e,t,n,s,d,c.seam),i.strokeStyle=c.seam,i.lineWidth=Math.max(1,s*.06),i.beginPath();for(const l of e){const p=t+l.x*s,g=n+l.y*s;h.has(`${l.x},${l.y-1}`)||(i.moveTo(p,g),i.lineTo(p+s,g)),h.has(`${l.x},${l.y+1}`)||(i.moveTo(p,g+s),i.lineTo(p+s,g+s)),h.has(`${l.x-1},${l.y}`)||(i.moveTo(p,g),i.lineTo(p,g+s)),h.has(`${l.x+1},${l.y}`)||(i.moveTo(p+s,g),i.lineTo(p+s,g+s))}i.stroke(),i.restore()}function fi(i,e,t,n,s,o,r){if(o==="solid")return;i.save(),i.beginPath();for(const b of e)i.rect(t+b.x*s,n+b.y*s,s,s);i.clip();let a=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;for(const b of e)a=Math.min(a,b.x),c=Math.min(c,b.y),d=Math.max(d,b.x+1),h=Math.max(h,b.y+1);const l=t+a*s,p=n+c*s,g=(d-a)*s,m=(h-c)*s;i.strokeStyle=r,i.globalAlpha=.55;const C=s*.34;i.lineWidth=C*.55;const T=g+m;for(let b=-m;b<=T;b+=C)i.beginPath(),o==="diagonal-down"?(i.moveTo(l+b,p),i.lineTo(l+b+m,p+m)):(i.moveTo(l+b,p+m),i.lineTo(l+b+m,p)),i.stroke();i.restore()}function mi(i,e,t){const n=u*e;i.fillStyle=E.boardWell,i.fillRect(0,0,n,n),i.strokeStyle=E.boardLine,i.lineWidth=1,i.beginPath();for(let c=1;c<u;c+=1)i.moveTo(c*e+.5,0),i.lineTo(c*e+.5,n),i.moveTo(0,c*e+.5),i.lineTo(n,c*e+.5);i.stroke();const s=Math.floor(u/2);i.save(),i.strokeStyle="rgba(47, 42, 36, 0.22)",i.lineWidth=Math.max(1,e*.05);const o=s*e+e/2,r=s*e+e/2,a=e*.22;i.beginPath(),i.arc(o,r,a,0,Math.PI*2),i.moveTo(o-a,r),i.lineTo(o+a,r),i.moveTo(o,r-a),i.lineTo(o,r+a),i.stroke(),i.restore(),i.strokeStyle=t?E.activeFrame:E.idleFrame,i.lineWidth=t?4:2,i.strokeRect(i.lineWidth/2,i.lineWidth/2,n-i.lineWidth,n-i.lineWidth)}const R=14;function gi(i,e,t){const n=u*t,s=2,o=R-s*2,r=t*.7;i.save(),i.fillStyle="#c08a2e",i.strokeStyle="#8e6318",i.lineWidth=1;const a=(c,d,h,l)=>{i.beginPath(),i.roundRect(c,d,h,l,Math.min(h,l)/2),i.fill(),i.stroke()};for(let c=0;c<u;c+=1){if(e[c]){const d=c*t+(t-r)/2;a(-R+s,d,o,r),a(n+s,d,o,r)}if(e[u+c]){const d=c*t+(t-r)/2;a(d,-R+s,r,o),a(d,n+s,r,o)}}i.restore()}function yi(i,e,t){const{cellSize:n,active:s,lines:o,ghost:r}=t,a=u*n+R*2;i.clearRect(0,0,a,a),i.save(),i.translate(R,R),mi(i,n,s);const c=new Map;for(let d=0;d<u;d+=1)for(let h=0;h<u;h+=1){const l=e.cells[d*u+h];if(l===void 0||l===S)continue;const p=c.get(l)??[];p.push({x:h,y:d}),c.set(l,p)}for(const[d,h]of c)Ae(i,h,0,0,n,d,L(d).size);if(gi(i,o,n),r!==void 0){Ae(i,r.orientation.cells,r.x*n,r.y*n,n,r.pieceId,r.size,.5),i.save(),i.fillStyle=r.valid?E.valid:E.invalid;for(const d of r.orientation.cells)i.fillRect((r.x+d.x)*n,(r.y+d.y)*n,n,n);i.restore()}i.restore()}function bi(i,e,t,n,s,o,r){i.clearRect(0,0,s,o);const a=Math.min(r,Math.floor(s/t.width),Math.floor(o/t.height)),c=(s-t.width*a)/2,d=(o-t.height*a)/2;Ae(i,t.cells,c,d,a,e,n)}class vi extends O{static styles=re`
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
    `}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null||this.player===void 0)return;const t=window.devicePixelRatio||1,n=Math.round(this.extent*t);(e.width!==n||e.height!==n)&&(e.width=n,e.height=n,e.style.width=`${this.extent}px`,e.style.height=`${this.extent}px`);const s=e.getContext("2d");s!==null&&(s.setTransform(t,0,0,t,0,0),yi(s,this.player,{cellSize:this.cellSize,active:this.active,lines:this.lines,ghost:this.ghost}))}cellFromEvent(e){const t=this.renderRoot.querySelector("canvas");if(t===null)return null;const n=t.getBoundingClientRect(),s=Math.floor((e.clientX-n.left-R)/this.cellSize),o=Math.floor((e.clientY-n.top-R)/this.cellSize);return s<0||o<0||s>=u||o>=u?null:{x:s,y:o}}handlePointerMove(e){if(!this.interactive)return;const t=this.cellFromEvent(e);if(t===null){this.dispatchEvent(new CustomEvent("cell-leave"));return}this.dispatchEvent(new CustomEvent("cell-hover",{detail:t}))}handlePointerLeave(){this.interactive&&this.dispatchEvent(new CustomEvent("cell-leave"))}handleClick(e){if(!this.interactive)return;const t=this.cellFromEvent(e);t!==null&&this.dispatchEvent(new CustomEvent("cell-click",{detail:t}))}}customElements.define("omino-board",vi);class $i extends O{static styles=re`
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
  `;static properties={pieceId:{type:Number},orientation:{type:Number},variant:{type:String},cost:{type:Number},selected:{type:Boolean},unplaceable:{type:Boolean},chainNumber:{type:Number},box:{type:Number}};constructor(){super(),this.pieceId=0,this.orientation=0,this.variant="upcoming",this.selected=!1,this.unplaceable=!1,this.box=56}render(){const e=L(this.pieceId),t=this.variant==="buyable"&&this.unplaceable,n=["card",this.variant,this.selected?"selected":"",t?"unplaceable":""].join(" ");return x`
      <div class=${n}>
        ${t?x`<span class="no-fit" title="This piece fits nowhere on your board"
              >Won't fit</span
            >`:null}
        ${this.variant==="buyable"?x`<span class="family">${Nt(e.size)}</span>`:null}
        <canvas></canvas>
        <span class="name">${e.name}</span>
        ${this.renderMeta()}
        ${this.cost===void 0?null:x`<span class="cost">${this.cost}</span>`}
      </div>
    `}renderMeta(){return this.variant==="burned"?x`<span class="burned-label">BURNED</span>`:this.variant==="buyable"?null:x`<span class="meta"
      >${this.chainNumber===void 0?"":`#${this.chainNumber}`}</span
    >`}updated(){const e=this.renderRoot.querySelector("canvas");if(e===null)return;const t=L(this.pieceId),n=t.orientations[this.orientation]??t.orientations[0],s=window.devicePixelRatio||1;e.width=Math.round(this.box*s),e.height=Math.round(this.box*s),e.style.width=`${this.box}px`,e.style.height=`${this.box}px`;const o=e.getContext("2d");o!==null&&(o.setTransform(s,0,0,s,0,0),bi(o,this.pieceId,n,t.size,this.box,this.box,Math.floor(this.box/6)))}}customElements.define("omino-card",$i);class ee extends O{static styles=re`
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
  `;static properties={state:{attribute:!1},summary:{attribute:!1},selectedSlot:{type:Number},selectedOrientation:{type:Number},unplaceableSlots:{attribute:!1},windowStart:{type:Number}};static UPCOMING_VISIBLE=7;static BURNED_VISIBLE=2;constructor(){super(),this.selectedOrientation=0,this.unplaceableSlots=new Set,this.windowStart=0}render(){const e=this.state,t=this.summary;if(e===void 0||t===void 0)return null;const n=e.balance,s=Math.min(3,t.remaining),o=e.burned.slice(-ee.BURNED_VISIBLE),r=e.marker+s+this.windowStart,a=e.chain.slice(r,r+ee.UPCOMING_VISIBLE),c=Math.max(0,t.remaining-s-this.windowStart);return x`
      <div class="heading">
        <h2>OMINO CHAIN</h2>
        <span class="counter"
          >${t.remaining} of ${$e} remaining</span
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
          ${Array.from({length:s},(d,h)=>{const l=h+1,p=e.chain[e.marker+h],g=this.selectedSlot===l,m=this.unplaceableSlots.has(l);return x`<omino-card
              .pieceId=${p}
              .orientation=${g?this.selectedOrientation:0}
              variant="buyable"
              .cost=${me(L(p).size,l,n)}
              ?selected=${g}
              ?unplaceable=${m}
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
          6s <b>${t.hexominoes}</b> · 5s <b>${t.pentominoes}</b> ·
          4s <b>${t.tetrominoes}</b> · 1–3 <b>${t.small}</b><br />
          <span class="odd">odd pieces left: <b>${t.odd}</b></span>
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
    `}selectSlot(e){this.dispatchEvent(new CustomEvent("slot-select",{detail:{slot:e}}))}scrollWindow(e){const t=Math.max(0,this.windowStart+e*3);this.dispatchEvent(new CustomEvent("window-change",{detail:{windowStart:t}}))}}customElements.define("omino-chain",ee);class xi extends O{static styles=re`
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
  `;static properties={state:{attribute:!1},names:{attribute:!1},outcome:{type:String}};constructor(){super(),this.names=["Player 1","Player 2"]}render(){const e=this.state;if(e===void 0)return null;const t=[K(e.players[0],e.balance),K(e.players[1],e.balance)],n=t[0]===t[1]?-1:t[0]>t[1]?0:1,s=e.ended?-1:e.toMove;return x`
      <div class="scores">
        ${[0,1].map(o=>x`
            <div class="score ${n===o?"leader":""}">
              <span class="value">${t[o]}</span>
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
    `}}customElements.define("omino-score-strip",xi);const wi={hotseat:["Player 1","Player 2"],ai:["You","Omino AI"]},Ai={baseline:"Baseline",sharp:"Sharp"};function _i(i){return i==="baseline"?Wt():at()}class Y extends O{static styles=re`
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
  `;static properties={game:{attribute:!1},selectedSlot:{attribute:!1},orientation:{attribute:!1},hover:{attribute:!1},windowStart:{attribute:!1},undoBlocked:{attribute:!1},violation:{attribute:!1},seedInput:{attribute:!1},mode:{attribute:!1},aiThinking:{attribute:!1},difficulty:{attribute:!1}};static AI_SIDE=1;static AI_MOVE_DELAY_MS=380;ai=at();aiTimer;onKeyDown=e=>{const t=e.key.toLowerCase();if(!(t!=="r"&&t!=="f"&&t!=="escape")&&this.selectedSlot!==void 0){if(e.preventDefault(),t==="escape"){this.clearSelection();return}this.changePose(t==="r"?"rotate":"flip")}};changePose(e){if(this.selectedSlot===void 0)return;const t=M(this.game,this.selectedSlot);if(t===void 0)return;const n=t.orientations[this.orientation];n!==void 0&&(this.orientation=e==="rotate"?n.rotateCw:n.flip)}constructor(){super(),this.seedInput="omino-1",this.game=xe(this.seedInput),this.orientation=0,this.windowStart=0,this.undoBlocked=!1,this.mode="hotseat",this.aiThinking=!1,this.difficulty="sharp"}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKeyDown)}disconnectedCallback(){window.removeEventListener("keydown",this.onKeyDown),this.cancelAiTurn(),super.disconnectedCallback()}cancelAiTurn(){this.aiTimer!==void 0&&(clearTimeout(this.aiTimer),this.aiTimer=void 0),this.aiThinking=!1}get aiToMove(){return this.mode==="ai"&&!this.game.ended&&this.game.toMove===Y.AI_SIDE}scheduleAiTurn(){if(!this.aiToMove){this.cancelAiTurn();return}this.aiThinking=!0,this.aiTimer=setTimeout(()=>{if(this.aiTimer=void 0,!this.aiToMove){this.aiThinking=!1;return}const e=this.ai.chooseAction(this.game);if(!this.commit(e)){this.aiThinking=!1;return}this.scheduleAiTurn()},Y.AI_MOVE_DELAY_MS)}ghostFor(e){if(e!==this.game.toMove||this.game.ended||this.selectedSlot===void 0||this.hover===void 0)return;const t=M(this.game,this.selectedSlot);if(t===void 0)return;const n=t.orientations[this.orientation];if(n!==void 0)return{orientation:n,pieceId:t.id,size:t.size,x:this.hover.x,y:this.hover.y,valid:q(this.game.players[e],t,this.orientation,this.hover.x,this.hover.y)}}unplaceableSlots(){const e=new Set;if(this.game.ended)return e;const t=this.game.players[this.game.toMove];return _e(this.game).forEach((n,s)=>{Qe(t,n)||e.add(s+1)}),e}get names(){return wi[this.mode]}outcomeText(){const e=Dt(this.game);if(e!==void 0)return e.kind==="draw"?"Game over — a draw":`Game over — ${this.names[e.player]} wins`}hintText(){return this.game.ended?"Chain exhausted. Start a new game to play again.":this.violation!==void 0?"":this.aiThinking?"Omino AI is moving…":this.selectedSlot===void 0?Ft(this.game)?"Click a purchasable card to pick it up.":"No purchasable piece fits — passing is forced.":"R rotates · F flips · Esc deselects · click a valid square to place"}clearSelection(){this.selectedSlot=void 0,this.orientation=0,this.hover=void 0}commit(e){const t=this.game;try{const n=it(t,e);return Vt(t,e,n),this.game=n,this.undoBlocked=!1,this.clearSelection(),!0}catch(n){return n instanceof st?this.violation=`Rule violation: ${n.message}`:n instanceof Error?this.violation=`Rejected: ${n.message}`:this.violation="Rejected: unknown error",this.cancelAiTurn(),!1}}commitHuman(e){this.commit(e)&&this.aiToMove&&this.scheduleAiTurn()}handleCellClick(e,t){if(e!==this.game.toMove||this.selectedSlot===void 0)return;const n=M(this.game,this.selectedSlot);n!==void 0&&q(this.game.players[e],n,this.orientation,t.x,t.y)&&this.commitHuman({type:"buy",slot:this.selectedSlot,orientation:this.orientation,x:t.x,y:t.y})}handleUndo(){const e=this.game.lastActor;if(e===null||!Oe(this.game,e))return;this.cancelAiTurn();let t=this.game;if(this.mode==="ai")for(;t.history.length>0&&t.lastActor===Y.AI_SIDE;)t=Re(t);t.history.length>0&&(t=Re(t));try{ot(t)}catch(n){this.violation=n instanceof Error?`Undo produced an invalid state: ${n.message}`:"Undo produced an invalid state";return}this.game=t,this.undoBlocked=!0,this.clearSelection()}startGame(e,t=this.mode,n=this.difficulty){this.cancelAiTurn(),this.seedInput=e,this.mode=t,this.difficulty=n,this.ai=_i(n),this.game=xe(e),this.windowStart=0,this.undoBlocked=!1,this.violation=void 0,this.clearSelection(),this.aiToMove&&this.scheduleAiTurn()}renderPoseControls(){const e=this.selectedSlot===void 0?void 0:M(this.game,this.selectedSlot),t=e===void 0||e.orientations.length===1;return x`
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
    `}renderSide(e){const t=this.names,n=!this.game.ended&&this.game.toMove===e,s=this.mode==="ai"&&e===Y.AI_SIDE,o=n&&!s&&!this.aiThinking,r=this.game.players[e],a=!this.game.ended&&!this.undoBlocked&&!this.aiThinking&&(this.mode==="ai"?e===0&&this.game.history.length>0:this.game.lastActor===e&&Oe(this.game,e));return x`
      <div class="side ${n?"":"idle"}">
        <h2>${t[e]} · 9×9</h2>
        <omino-board
          .player=${r}
          .lines=${et(r)}
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
                ${this.mode==="ai"?"Undo my last move":`Undo ${t[e]}'s move`}
              </button>`:null}
        </div>
      </div>
    `}waitingLabel(e,t){return this.game.ended?"":t&&this.aiThinking?"Thinking…":"Waiting"}render(){const e=nt(this.game);return x`
      <header>
        <h1>Omino</h1>
        <label for="seed">seed</label>
        <input
          id="seed"
          .value=${this.seedInput}
          @input=${t=>{this.seedInput=t.target.value}}
          @keydown=${t=>{t.stopPropagation(),t.key==="Enter"&&this.startGame(this.seedInput)}}
        />
        <button @click=${()=>this.startGame(this.seedInput)}>New game</button>
        <div class="mode">
          ${["hotseat","ai"].map(t=>x`
              <button
                class=${this.mode===t?"selected":""}
                @click=${()=>this.startGame(this.seedInput,t)}
                title=${t==="hotseat"?"Two players on this screen":"Play the greedy baseline agent"}
              >
                ${t==="hotseat"?"Hotseat":"vs AI"}
              </button>
            `)}
        </div>
        ${this.mode==="ai"?x`<div class="mode">
              ${["baseline","sharp"].map(t=>x`
                  <button
                    class=${this.difficulty===t?"selected":""}
                    @click=${()=>this.startGame(this.seedInput,"ai",t)}
                    title=${t==="baseline"?"Greedy: takes the biggest piece it can, never weighs fit":"Packing-aware: avoids stranding cells. Beats baseline ~61%"}
                  >
                    ${Ai[t]}
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
        .unplaceableSlots=${this.unplaceableSlots()}
        .windowStart=${this.windowStart}
        @slot-select=${t=>{if(this.game.ended)return;const n=t.detail.slot;if(this.selectedSlot===n){this.clearSelection();return}this.selectedSlot=n,this.orientation=0}}
        @window-change=${t=>{this.windowStart=t.detail.windowStart}}
      ></omino-chain>
    `}}customElements.define("omino-app",Y);yt();document.body.style.margin="0";const ft=document.querySelector("#app");if(ft===null)throw new Error("Missing #app mount point");ft.append(document.createElement("omino-app"));
