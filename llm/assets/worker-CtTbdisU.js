const qe={small:{dModel:64,nHeads:4,nLayers:2,dFF:256,contextLength:32},medium:{dModel:128,nHeads:8,nLayers:4,dFF:512,contextLength:64},large:{dModel:256,nHeads:8,nLayers:6,dFF:1024,contextLength:128}};function Ye(e,t){return{...qe[e],vocabSize:t}}function he(e){if(e.dModel%e.nHeads!==0)throw new Error(`dModel (${e.dModel}) måste vara delbar med nHeads (${e.nHeads})`);return e.dModel/e.nHeads}function B(e,t){return{data:new Float32Array(e*t),rows:e,cols:t}}function ie(e,t,r){if(e.cols!==t.rows)throw new Error(`matmul shape-fel: A är ${e.rows}x${e.cols}, B är ${t.rows}x${t.cols}`);const n=r??B(e.rows,t.cols);if(n.rows!==e.rows||n.cols!==t.cols)throw new Error("out-matrisens shape matchar inte A @ B");const{data:s,cols:o}=e,{data:a,cols:i}=t,{data:d}=n;for(let u=0;u<e.rows;u++)for(let c=0;c<i;c++){let l=0;for(let f=0;f<o;f++)l+=s[u*o+f]*a[f*i+c];d[u*i+c]=l}return n}function se(e,t){if(t.length!==e.cols)throw new Error(`vektorlängd ${t.length} matchar inte antalet kolumner ${e.cols}`);for(let r=0;r<e.rows;r++)for(let n=0;n<e.cols;n++)e.data[r*e.cols+n]+=t[n]}function ce(e,t){if(e.rows!==t.rows||e.cols!==t.cols)throw new Error(`addInPlace shape-fel: ${e.rows}x${e.cols} vs ${t.rows}x${t.cols}`);for(let r=0;r<e.data.length;r++)e.data[r]+=t.data[r]}function Je(e){for(let t=0;t<e.rows;t++){const r=t*e.cols;let n=-1/0;for(let a=0;a<e.cols;a++){const i=e.data[r+a];i>n&&(n=i)}let s=0;for(let a=0;a<e.cols;a++){const i=Math.exp(e.data[r+a]-n);e.data[r+a]=i,s+=i}const o=1/s;for(let a=0;a<e.cols;a++)e.data[r+a]*=o}}function le(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function Ze(e,t){const r=Math.max(e(),1e-12),n=e();return Math.sqrt(-2*Math.log(r))*Math.cos(2*Math.PI*n)*t}function We(e,t,r){for(let n=0;n<e.length;n++)e[n]=Ze(t,r)}function Me(e){const t=new Float32Array(e),r=new Float32Array(e);return t.fill(1),{gamma:t,beta:r}}function U(e,t,r,n){const s=B(e,t);return We(s.data,r,n),s}function xe(e,t){const{vocabSize:r,dModel:n,nLayers:s,dFF:o,contextLength:a}=e,i=.02,d=U(r,n,t,i),u=U(a,n,t,i),c=[];for(let b=0;b<s;b++)c.push({ln1:Me(n),attn:{wQ:U(n,n,t,i),wK:U(n,n,t,i),wV:U(n,n,t,i),wO:U(n,n,t,i),bQ:new Float32Array(n),bK:new Float32Array(n),bV:new Float32Array(n),bO:new Float32Array(n)},ln2:Me(n),ff:{w1:U(n,o,t,i),b1:new Float32Array(o),w2:U(o,n,t,i),b2:new Float32Array(n)}});const l=Me(n),f=U(n,r,t,i),m=new Float32Array(r);return{tokenEmbedding:d,positionEmbedding:u,blocks:c,finalLayerNorm:l,outputWeight:f,outputBias:m}}function et(e){const{vocabSize:t,dModel:r,nLayers:n,dFF:s,contextLength:o}=e,a=[];for(let i=0;i<n;i++)a.push({ln1:{gamma:new Float32Array(r),beta:new Float32Array(r)},attn:{wQ:B(r,r),wK:B(r,r),wV:B(r,r),wO:B(r,r),bQ:new Float32Array(r),bK:new Float32Array(r),bV:new Float32Array(r),bO:new Float32Array(r)},ln2:{gamma:new Float32Array(r),beta:new Float32Array(r)},ff:{w1:B(r,s),b1:new Float32Array(s),w2:B(s,r),b2:new Float32Array(r)}});return{tokenEmbedding:B(t,r),positionEmbedding:B(o,r),blocks:a,finalLayerNorm:{gamma:new Float32Array(r),beta:new Float32Array(r)},outputWeight:B(r,t),outputBias:new Float32Array(t)}}function tt(e){const t=["tokenEmbedding","positionEmbedding"];for(let r=0;r<e.nLayers;r++)t.push(`block${r}.ln1.gamma`,`block${r}.ln1.beta`),t.push(`block${r}.attn.wQ`,`block${r}.attn.wK`,`block${r}.attn.wV`,`block${r}.attn.wO`,`block${r}.attn.bQ`,`block${r}.attn.bK`,`block${r}.attn.bV`,`block${r}.attn.bO`),t.push(`block${r}.ln2.gamma`,`block${r}.ln2.beta`),t.push(`block${r}.ff.w1`,`block${r}.ff.b1`,`block${r}.ff.w2`,`block${r}.ff.b2`);return t.push("finalLN.gamma","finalLN.beta"),t.push("outputWeight","outputBias"),t}function G(e){const t=[];t.push(e.tokenEmbedding.data,e.positionEmbedding.data);for(const r of e.blocks)t.push(r.ln1.gamma,r.ln1.beta),t.push(r.attn.wQ.data,r.attn.wK.data,r.attn.wV.data,r.attn.wO.data,r.attn.bQ,r.attn.bK,r.attn.bV,r.attn.bO),t.push(r.ln2.gamma,r.ln2.beta),t.push(r.ff.w1.data,r.ff.b1,r.ff.w2.data,r.ff.b2);return t.push(e.finalLayerNorm.gamma,e.finalLayerNorm.beta),t.push(e.outputWeight.data,e.outputBias),t}function rt(e){let t=0;for(const r of G(e))t+=r.length;return t}const nt=1e-5;function je(e,t,r){const n=B(e.rows,e.cols),s=B(e.rows,e.cols),o=new Float32Array(e.rows),a=new Float32Array(e.rows);for(let i=0;i<e.rows;i++){let d=0;for(let l=0;l<e.cols;l++)d+=e.data[i*e.cols+l];d/=e.cols;let u=0;for(let l=0;l<e.cols;l++){const f=e.data[i*e.cols+l]-d;u+=f*f}u/=e.cols;const c=1/Math.sqrt(u+nt);o[i]=d,a[i]=c;for(let l=0;l<e.cols;l++){const f=(e.data[i*e.cols+l]-d)*c;s.data[i*e.cols+l]=f,n.data[i*e.cols+l]=f*t[l]+r[l]}}return{out:n,cache:{input:e,normalized:s,mean:o,invStd:a,gamma:t}}}function ot(e,t){const r=ie(t,e.w1);se(r,e.b1);for(let s=0;s<r.data.length;s++)r.data[s]<0&&(r.data[s]=0);const n=ie(r,e.w2);return se(n,e.b2),{out:n,cache:{input:t,hidden:r}}}function at(e,t,r){const n=r.rows,{dModel:s}=e,o=e.nHeads,a=he(e),i=1/Math.sqrt(a),d=ie(r,t.wQ);se(d,t.bQ);const u=ie(r,t.wK);se(u,t.bK);const c=ie(r,t.wV);se(c,t.bV);const l=B(n,s),f=[];for(let b=0;b<o;b++){const g=b*a,v=fe(d,g,a),A=fe(u,g,a),C=fe(c,g,a),p=B(n,n);for(let y=0;y<n;y++)for(let h=0;h<n;h++){let _=0;for(let w=0;w<a;w++)_+=v.data[y*a+w]*A.data[h*a+w];p.data[y*n+h]=_*i}for(let y=0;y<n;y++)for(let h=y+1;h<n;h++)p.data[y*n+h]=-1/0;Je(p),f.push(p);for(let y=0;y<n;y++)for(let h=0;h<a;h++){let _=0;for(let w=0;w<n;w++)_+=p.data[y*n+w]*C.data[w*a+h];l.data[y*s+g+h]=_}}const m=ie(l,t.wO);return se(m,t.bO),{out:m,cache:{input:r,Q:d,K:u,V:c,headWeights:f,concatHeadOut:l}}}function it(e,t,r){const n=je(r,t.ln1.gamma,t.ln1.beta),s=at(e,t.attn,n.out),o=ke(r);ce(o,s.out);const a=je(o,t.ln2.gamma,t.ln2.beta),i=ot(t.ff,a.out),d=ke(o);return ce(d,i.out),{out:d,cache:{input:r,ln1:n.cache,attn:s.cache,afterAttn:o,ln2:a.cache,ff:i.cache}}}function we(e,t,r){const n=r.length;if(n===0)throw new Error("Tomt input");if(n>e.contextLength)throw new Error(`Sekvens ${n} överstiger kontextlängd ${e.contextLength}`);const{dModel:s,vocabSize:o}=e,a=B(n,s);for(let l=0;l<n;l++){const f=r[l];if(f<0||f>=o)throw new Error(`Token-ID ${f} utanför vocab`);for(let m=0;m<s;m++)a.data[l*s+m]=t.tokenEmbedding.data[f*s+m]+t.positionEmbedding.data[l*s+m]}let i=a;const d=[];for(const l of t.blocks){const f=it(e,l,i);d.push(f.cache),i=f.out}const u=je(i,t.finalLayerNorm.gamma,t.finalLayerNorm.beta),c=ie(u.out,t.outputWeight);return se(c,t.outputBias),{tokenIds:r,embedded:a,blocks:d,finalLN:u.cache,finalLNOut:u.out,logits:c}}function Ke(e,t,r){const n=we(e,t,r);return{logits:n.logits,seqLength:n.tokenIds.length}}function ke(e){return{data:new Float32Array(e.data),rows:e.rows,cols:e.cols}}function fe(e,t,r){const n=B(e.rows,r);for(let s=0;s<e.rows;s++)for(let o=0;o<r;o++)n.data[s*r+o]=e.data[s*e.cols+t+o];return n}function st(e,t){const r=G(e);return{m:r.map(n=>new Float32Array(n.length)),v:r.map(n=>new Float32Array(n.length)),step:0,lr:t,beta1:.9,beta2:.999,eps:1e-8}}function dt(e,t,r){r.step++;const{beta1:n,beta2:s,eps:o,lr:a}=r,i=1-Math.pow(n,r.step),d=1-Math.pow(s,r.step),u=a*Math.sqrt(d)/i,c=G(e),l=G(t);for(let f=0;f<c.length;f++){const m=c[f],b=l[f],g=r.m[f],v=r.v[f];for(let A=0;A<m.length;A++){const C=b[A],p=n*g[A]+(1-n)*C,y=s*v[A]+(1-s)*C*C;g[A]=p,v[A]=y,m[A]-=u*p/(Math.sqrt(y)+o)}}}function Ve(e){for(const t of G(e))t.fill(0)}function ut(e,t){const r=G(e);let n=0;for(const o of r)for(let a=0;a<o.length;a++)n+=o[a]*o[a];const s=Math.sqrt(n);if(s>t){const o=t/s;for(const a of r)for(let i=0;i<a.length;i++)a[i]*=o}return s}function de(e,t,r){const n=e.rows,s=e.cols,o=t.cols;if(t.rows!==n)throw new Error("matmulAccumTranspose: inner dim");if(r.rows!==s||r.cols!==o)throw new Error("matmulAccumTranspose: result shape");for(let a=0;a<s;a++)for(let i=0;i<o;i++){let d=0;for(let u=0;u<n;u++)d+=e.data[u*s+a]*t.data[u*o+i];r.data[a*o+i]+=d}}function Y(e,t){const r=e.rows,n=e.cols,s=t.rows;if(t.cols!==n)throw new Error("matmulTransposeB: inner dim");const o=B(r,s);for(let a=0;a<r;a++)for(let i=0;i<s;i++){let d=0;for(let u=0;u<n;u++)d+=e.data[a*n+u]*t.data[i*n+u];o.data[a*s+i]=d}return o}function Re(e,t){const r=e.rows,n=e.cols;if(t.length!==r)throw new Error(`target-längd ${t.length} matchar inte logits.rows ${r}`);const s=B(r,n);let o=0;for(let a=0;a<r;a++){let i=-1/0;for(let l=0;l<n;l++){const f=e.data[a*n+l];f>i&&(i=f)}let d=0;for(let l=0;l<n;l++)d+=Math.exp(e.data[a*n+l]-i);const u=i+Math.log(d),c=t[a];o+=u-e.data[a*n+c];for(let l=0;l<n;l++){const f=Math.exp(e.data[a*n+l]-u);s.data[a*n+l]=(f-(l===c?1:0))/r}}return o/=r,{loss:o,dLogits:s}}function Ee(e,t,r,n){const{normalized:s,invStd:o,gamma:a}=t,i=e.rows,d=e.cols,u=B(i,d),c=new Float32Array(d);for(let l=0;l<i;l++){for(let g=0;g<d;g++)r[g]+=s.data[l*d+g]*e.data[l*d+g],n[g]+=e.data[l*d+g];let f=0,m=0;for(let g=0;g<d;g++){const v=e.data[l*d+g]*a[g];c[g]=v,f+=v,m+=v*s.data[l*d+g]}f/=d,m/=d;const b=o[l];for(let g=0;g<d;g++)u.data[l*d+g]=b*(c[g]-f-s.data[l*d+g]*m)}return u}function lt(e,t,r,n){const{input:s,hidden:o}=r,a=n.rows,i=n.cols,d=o.cols;de(o,n,t.w2);for(let l=0;l<a;l++)for(let f=0;f<i;f++)t.b2[f]+=n.data[l*i+f];const u=Y(n,e.w2);for(let l=0;l<u.data.length;l++)o.data[l]<=0&&(u.data[l]=0);const c=u;de(s,c,t.w1);for(let l=0;l<a;l++)for(let f=0;f<d;f++)t.b1[f]+=c.data[l*d+f];return Y(c,e.w1)}function ft(e,t,r,n,s){const o=s.rows,{dModel:a}=e,i=e.nHeads,d=he(e),u=1/Math.sqrt(d),{input:c,Q:l,K:f,V:m,headWeights:b,concatHeadOut:g}=n;de(g,s,r.wO);for(let w=0;w<o;w++)for(let S=0;S<a;S++)r.bO[S]+=s.data[w*a+S];const v=Y(s,t.wO),A=B(o,a),C=B(o,a),p=B(o,a);for(let w=0;w<i;w++){const S=w*d,I=B(o,d);for(let k=0;k<o;k++)for(let L=0;L<d;L++)I.data[k*d+L]=v.data[k*a+S+L];const q=fe(l,S,d),P=fe(f,S,d),N=fe(m,S,d),O=b[w],z=Y(I,N),$=B(o,d);for(let k=0;k<o;k++)for(let L=0;L<d;L++){let T=0;for(let W=0;W<o;W++)T+=O.data[W*o+k]*I.data[W*d+L];$.data[k*d+L]=T}const Q=B(o,o);for(let k=0;k<o;k++){let L=0;for(let T=0;T<o;T++)L+=O.data[k*o+T]*z.data[k*o+T];for(let T=0;T<o;T++)Q.data[k*o+T]=O.data[k*o+T]*(z.data[k*o+T]-L)}const ue=B(o,d);for(let k=0;k<o;k++)for(let L=0;L<d;L++){let T=0;for(let W=0;W<o;W++)T+=Q.data[k*o+W]*P.data[W*d+L];ue.data[k*d+L]=T*u}const ve=B(o,d);for(let k=0;k<o;k++)for(let L=0;L<d;L++){let T=0;for(let W=0;W<o;W++)T+=Q.data[W*o+k]*q.data[W*d+L];ve.data[k*d+L]=T*u}for(let k=0;k<o;k++)for(let L=0;L<d;L++)A.data[k*a+S+L]=ue.data[k*d+L],C.data[k*a+S+L]=ve.data[k*d+L],p.data[k*a+S+L]=$.data[k*d+L]}de(c,A,r.wQ),de(c,C,r.wK),de(c,p,r.wV);for(let w=0;w<o;w++)for(let S=0;S<a;S++)r.bQ[S]+=A.data[w*a+S],r.bK[S]+=C.data[w*a+S],r.bV[S]+=p.data[w*a+S];const y=Y(A,t.wQ),h=Y(C,t.wK),_=Y(p,t.wV);return ce(y,h),ce(y,_),y}function ct(e,t,r,n,s){const o=lt(t.ff,r.ff,n.ff,s),a=Ee(o,n.ln2,r.ln2.gamma,r.ln2.beta),i=ke(s);ce(i,a);const d=ft(e,t.attn,r.attn,n.attn,i),u=Ee(d,n.ln1,r.ln1.gamma,r.ln1.beta),c=ke(i);return ce(c,u),c}function $e(e,t,r,n,s){const{loss:o,dLogits:a}=Re(n.logits,s);de(n.finalLNOut,a,r.outputWeight);for(let c=0;c<a.rows;c++)for(let l=0;l<a.cols;l++)r.outputBias[l]+=a.data[c*a.cols+l];let i=Y(a,t.outputWeight);i=Ee(i,n.finalLN,r.finalLayerNorm.gamma,r.finalLayerNorm.beta);for(let c=t.blocks.length-1;c>=0;c--)i=ct(e,t.blocks[c],r.blocks[c],n.blocks[c],i);const d=i.rows,{dModel:u}=e;for(let c=0;c<d;c++){const l=n.tokenIds[c];for(let f=0;f<u;f++)r.tokenEmbedding.data[l*u+f]+=i.data[c*u+f],r.positionEmbedding.data[c*u+f]+=i.data[c*u+f]}return o}function gt(e){const{corpusIds:t,config:r,rng:n}=e,s=Math.min(r.contextLength,t.length-1);if(s<1)throw new Error("Korpus är för kort för träning");const o=t.length-s-1,a=o>0?Math.floor(n()*(o+1)):0;return{input:t.slice(a,a+s),target:t.slice(a+1,a+s+1)}}function mt(e){Ve(e.grads);let t=0;for(let n=0;n<e.batchSize;n++){const{input:s,target:o}=gt(e),a=we(e.config,e.params,s);t+=$e(e.config,e.params,e.grads,a,o)}if(e.batchSize>1){const n=1/e.batchSize;for(const s of G(e.grads))for(let o=0;o<s.length;o++)s[o]*=n}const r=ut(e.grads,1);return dt(e.params,e.grads,e.adam),e.step++,{loss:t/e.batchSize,gradNorm:r}}function bt(e,t,r,n,s){const o=Array.from(r.encode(n));o.length===0&&o.push(0);const a=o.slice();for(let i=0;i<s;i++){const d=Math.max(0,a.length-e.contextLength),u=a.slice(d),c=new Int32Array(u),{logits:l}=Ke(e,t,c),f=l.cols,m=(l.rows-1)*f;let b=0,g=-1/0;for(let v=0;v<f;v++){const A=l.data[m+v];A>g&&(g=A,b=v)}a.push(b)}return r.decode(a)}function pt(e,t,r,n,s){if(n.strategy==="greedy"){let f=0,m=-1/0;for(let b=0;b<r;b++){const g=e[t+b];g>m&&(m=g,f=b)}return f}const o=new Float32Array(r),a=1/Math.max(n.temperature,1e-6);for(let f=0;f<r;f++)o[f]=e[t+f]*a;if(n.strategy==="top-k"){const f=Math.max(1,Math.min(n.topK|0,r)),b=Array.from(o).sort((g,v)=>v-g)[f-1];for(let g=0;g<r;g++)o[g]<b&&(o[g]=-1/0)}let i=-1/0;for(let f=0;f<r;f++){const m=o[f];m>i&&(i=m)}let d=0;for(let f=0;f<r;f++){const m=Math.exp(o[f]-i);o[f]=m,d+=m}const u=1/d;for(let f=0;f<r;f++)o[f]*=u;const c=s();let l=0;for(let f=0;f<r;f++)if(l+=o[f],c<l)return f;return r-1}function Pe(e,t,r,n){const s=we(e,t,r);return Re(s.logits,n).loss}function ht(e,t,r,n,s,o,a){if(n.length<a+1)throw new Error("Korpusen är för kort för gradient-check");const i=Math.min(a,n.length-1),d=n.length-i-1,u=d>0?Math.floor(s()*(d+1)):0,c=n.slice(u,u+i),l=n.slice(u+1,u+i+1);Ve(r);const f=we(e,t,c),m=$e(e,t,r,f,l),b=G(t),g=G(r),v=tt(e),A=.01,C=.01,p=o*50,y=[];let h=0,_=0;for(;y.length<o&&_<p;){_++;const P=Math.floor(s()*b.length),N=b[P],O=g[P],z=Math.floor(s()*N.length),$=O[z];if(Math.abs($)<C){h++;continue}const Q=N[z];N[z]=Q+A;const ue=Pe(e,t,c,l);N[z]=Q-A;const ve=Pe(e,t,c,l);N[z]=Q;const k=(ue-ve)/(2*A),L=Math.abs(k)+Math.abs($)+1e-8,T=Math.abs(k-$)/L;y.push({paramName:v[P]??`buf${P}`,flatIndex:z,numerical:k,analytical:$,relError:T})}const w=y.map(P=>P.relError),S=w.reduce((P,N)=>Math.max(P,N),0),I=w.reduce((P,N)=>P+N,0)/Math.max(1,w.length),q=y.slice().sort((P,N)=>N.relError-P.relError).slice(0,5);return{checked:y.length,skipped:h,maxRelError:S,meanRelError:I,worst:q,loss:m,seqLength:i}}class De{constructor(t,r,n){this.kind="char",this.idToToken=t,this.frequencies=r,this.totalChars=n,this.totalTokens=n,this.tokenToId=new Map;for(let s=0;s<t.length;s++)this.tokenToId.set(t[s],s)}static fromText(t){const r=new Map;for(const a of t)r.set(a,(r.get(a)??0)+1);const n=Array.from(r.entries()).sort((a,i)=>i[1]!==a[1]?i[1]-a[1]:a[0]<i[0]?-1:a[0]>i[0]?1:0),s=n.map(([a])=>a),o=n.map(([,a])=>a);return new De(s,o,t.length)}get vocabSize(){return this.idToToken.length}encode(t){const r=new Int32Array(t.length);let n=0;for(const s of t){const o=this.tokenToId.get(s);o!==void 0&&(r[n++]=o)}return r.slice(0,n)}decode(t){let r="";for(const n of t)r+=this.idToToken[n]??"";return r}}const _e="\0";function ze(e){return e.match(/\s+|\S+/g)??[]}class Te{constructor(t,r,n,s,o){this.kind="bpe",this.idToToken=t,this.frequencies=r,this.totalChars=s,this.totalTokens=o,this.tokenToId=new Map;for(let a=0;a<t.length;a++)this.tokenToId.set(t[a],a);this.mergeRank=new Map;for(let a=0;a<n.length;a++)this.mergeRank.set(n[a].a+_e+n[a].b,a)}get vocabSize(){return this.idToToken.length}static train(t,r,n){const s=new Map;for(const p of t)s.set(p,(s.get(p)??0)+1);const o=Array.from(s.keys());o.sort();const a=ze(t),i=new Map;for(const p of a)i.set(p,(i.get(p)??0)+1);const d=[],u=[];for(const[p,y]of i)d.push(Array.from(p)),u.push(y);const c=[],l=Math.max(0,r-o.length);for(let p=0;p<l;p++){const y=wt(d,u),h=vt(y);if(!h||h.count<2)break;c.push(h),yt(d,h.a,h.b),n&&(p+1)%10===0&&n(p+1,l,h)}n&&c.length>0&&n(c.length,l,c[c.length-1]);const f=[...o];for(const p of c)f.push(p.a+p.b);const m=new Array(f.length).fill(0),b=new Map;for(let p=0;p<f.length;p++)b.set(f[p],p);let g=0;for(let p=0;p<d.length;p++){const y=d[p],h=u[p];for(const _ of y){const w=b.get(_);w!==void 0&&(m[w]+=h)}g+=y.length*h}const v=f.map((p,y)=>y);v.sort((p,y)=>m[y]!==m[p]?m[y]-m[p]:f[p]<f[y]?-1:1);const A=v.map(p=>f[p]),C=v.map(p=>m[p]);return new Te(A,C,c,t.length,g)}encode(t){const r=ze(t),n=[];for(const s of r){const o=Array.from(s);kt(o,this.mergeRank);for(const a of o){const i=this.tokenToId.get(a);i!==void 0&&n.push(i)}}return new Int32Array(n)}decode(t){let r="";for(const n of t)r+=this.idToToken[n]??"";return r}}function wt(e,t){const r=new Map;for(let n=0;n<e.length;n++){const s=e[n],o=t[n];for(let a=0;a<s.length-1;a++){const i=s[a]+_e+s[a+1];r.set(i,(r.get(i)??0)+o)}}return r}function vt(e){let t=null,r=-1;for(const[s,o]of e)o>r&&(t=s,r=o);if(t===null)return null;const n=t.indexOf(_e);return{a:t.slice(0,n),b:t.slice(n+1),count:r}}function yt(e,t,r){const n=t+r;for(let s=0;s<e.length;s++){const o=e[s];let a=!1;for(let u=0;u<o.length-1;u++)if(o[u]===t&&o[u+1]===r){a=!0;break}if(!a)continue;const i=[];let d=0;for(;d<o.length;)d+1<o.length&&o[d]===t&&o[d+1]===r?(i.push(n),d+=2):(i.push(o[d]),d++);e[s]=i}}function kt(e,t){for(;e.length>1;){let r=1/0,n=-1;for(let s=0;s<e.length-1;s++){const o=e[s]+_e+e[s+1],a=t.get(o);a!==void 0&&a<r&&(r=a,n=s)}if(n<0)return;e.splice(n,2,e[n]+e[n+1])}}const be=class be{constructor(t){this.pipelineCache=new Map,this.device=t,this.queue=t.queue}static async create(){const t=self.navigator;if(!t||!("gpu"in t))return null;try{const r=await t.gpu.requestAdapter();if(!r)return null;const n=await r.requestDevice();return n.addEventListener("uncapturederror",s=>{const o=s;be.lastError=o.error.message,console.error("WebGPU uncaptured error:",o.error.message)}),new be(n)}catch(r){return console.error("WebGPU init failed",r),null}}createStorageBuffer(t){return this.device.createBuffer({size:Math.max(16,t*4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}createUniformBuffer(t){return this.device.createBuffer({size:Math.max(16,t),usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}writeFloat32(t,r,n){this.queue.writeBuffer(t,r,n.buffer,n.byteOffset,n.byteLength)}writeUint32(t,r,n){this.queue.writeBuffer(t,r,n.buffer,n.byteOffset,n.byteLength)}async readFloat32(t,r,n=0){const s=n*4,o=r*4,a=this.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),i=this.device.createCommandEncoder();i.copyBufferToBuffer(t,s,a,0,o),this.queue.submit([i.finish()]),await a.mapAsync(GPUMapMode.READ);const d=new Float32Array(a.getMappedRange().slice(0));return a.unmap(),a.destroy(),d}async readUint32(t,r,n=0){const s=n*4,o=r*4,a=this.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),i=this.device.createCommandEncoder();i.copyBufferToBuffer(t,s,a,0,o),this.queue.submit([i.finish()]),await a.mapAsync(GPUMapMode.READ);const d=new Uint32Array(a.getMappedRange().slice(0));return a.unmap(),a.destroy(),d}getOrCreatePipeline(t,r,n="main"){let s=this.pipelineCache.get(t);if(!s){const o=this.device.createShaderModule({code:r});s=this.device.createComputePipeline({layout:"auto",compute:{module:o,entryPoint:n}}),this.pipelineCache.set(t,s)}return s}};be.lastError=null;let Fe=be;const _t=`
struct Dims { M: u32, N: u32, K: u32, _pad: u32 };
@group(0) @binding(0) var<storage, read> A: array<f32>;
@group(0) @binding(1) var<storage, read> B: array<f32>;
@group(0) @binding(2) var<storage, read_write> C: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.y;
  let col = gid.x;
  if (row >= dims.M || col >= dims.N) { return; }
  var sum = 0.0;
  for (var k: u32 = 0u; k < dims.K; k = k + 1u) {
    sum = sum + A[row * dims.K + k] * B[k * dims.N + col];
  }
  C[row * dims.N + col] = sum;
}
`,St=`
struct Dims { M: u32, N: u32, K: u32, _pad: u32 };
@group(0) @binding(0) var<storage, read> A: array<f32>;
@group(0) @binding(1) var<storage, read> B: array<f32>;
@group(0) @binding(2) var<storage, read_write> C: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.y;
  let col = gid.x;
  if (row >= dims.M || col >= dims.N) { return; }
  var sum = 0.0;
  for (var k: u32 = 0u; k < dims.K; k = k + 1u) {
    sum = sum + A[k * dims.M + row] * B[k * dims.N + col];
  }
  C[row * dims.N + col] = C[row * dims.N + col] + sum;
}
`,Mt=`
struct Dims { M: u32, N: u32, K: u32, _pad: u32 };
@group(0) @binding(0) var<storage, read> A: array<f32>;
@group(0) @binding(1) var<storage, read> B: array<f32>;
@group(0) @binding(2) var<storage, read_write> C: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.y;
  let col = gid.x;
  if (row >= dims.M || col >= dims.N) { return; }
  var sum = 0.0;
  for (var k: u32 = 0u; k < dims.K; k = k + 1u) {
    sum = sum + A[row * dims.K + k] * B[col * dims.K + k];
  }
  C[row * dims.N + col] = sum;
}
`,Lt=`
struct Dims { rows: u32, cols: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read_write> M: array<f32>;
@group(0) @binding(1) var<storage, read> bias: array<f32>;
@group(0) @binding(2) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let idx = gid.x;
  let total = dims.rows * dims.cols;
  if (idx >= total) { return; }
  let col = idx % dims.cols;
  M[idx] = M[idx] + bias[col];
}
`,At=`
struct Dims { rows: u32, cols: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read> dM: array<f32>;
@group(0) @binding(1) var<storage, read_write> dBias: array<f32>;
@group(0) @binding(2) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let col = gid.x;
  if (col >= dims.cols) { return; }
  var sum = 0.0;
  for (var r: u32 = 0u; r < dims.rows; r = r + 1u) {
    sum = sum + dM[r * dims.cols + col];
  }
  dBias[col] = dBias[col] + sum;
}
`,Bt=`
struct Dims { n: u32, _pad0: u32, _pad1: u32, _pad2: u32 };
@group(0) @binding(0) var<storage, read_write> a: array<f32>;
@group(0) @binding(1) var<storage, read> b: array<f32>;
@group(0) @binding(2) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let i = gid.x;
  if (i >= dims.n) { return; }
  a[i] = a[i] + b[i];
}
`,Ot=`
struct Dims { n: u32, _pad0: u32, _pad1: u32, _pad2: u32 };
@group(0) @binding(0) var<storage, read_write> a: array<f32>;
@group(0) @binding(1) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let i = gid.x;
  if (i >= dims.n) { return; }
  a[i] = max(a[i], 0.0);
}
`,jt=`
struct Dims { n: u32, _pad0: u32, _pad1: u32, _pad2: u32 };
@group(0) @binding(0) var<storage, read_write> dHidden: array<f32>;
@group(0) @binding(1) var<storage, read> hidden: array<f32>;
@group(0) @binding(2) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let i = gid.x;
  if (i >= dims.n) { return; }
  if (hidden[i] <= 0.0) { dHidden[i] = 0.0; }
}
`,Et=`
struct Dims { n: u32, _pad0: u32, _pad1: u32, _pad2: u32 };
struct Val { v: f32, _pad0: f32, _pad1: f32, _pad2: f32 };
@group(0) @binding(0) var<storage, read_write> a: array<f32>;
@group(0) @binding(1) var<uniform> dims: Dims;
@group(0) @binding(2) var<uniform> val: Val;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let i = gid.x;
  if (i >= dims.n) { return; }
  a[i] = val.v;
}
`,Ft=`
struct Dims { rows: u32, cols: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read> input: array<f32>;
@group(0) @binding(1) var<storage, read> gamma: array<f32>;
@group(0) @binding(2) var<storage, read> beta: array<f32>;
@group(0) @binding(3) var<storage, read_write> output: array<f32>;
@group(0) @binding(4) var<storage, read_write> normalized: array<f32>;
@group(0) @binding(5) var<storage, read_write> mean: array<f32>;
@group(0) @binding(6) var<storage, read_write> invStd: array<f32>;
@group(0) @binding(7) var<uniform> dims: Dims;

const EPS: f32 = 1.0e-5;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.x;
  if (row >= dims.rows) { return; }
  let cols = dims.cols;
  let base = row * cols;

  var mu = 0.0;
  for (var j: u32 = 0u; j < cols; j = j + 1u) {
    mu = mu + input[base + j];
  }
  mu = mu / f32(cols);

  var variance = 0.0;
  for (var j: u32 = 0u; j < cols; j = j + 1u) {
    let d = input[base + j] - mu;
    variance = variance + d * d;
  }
  variance = variance / f32(cols);

  let is = 1.0 / sqrt(variance + EPS);
  mean[row] = mu;
  invStd[row] = is;

  for (var j: u32 = 0u; j < cols; j = j + 1u) {
    let xn = (input[base + j] - mu) * is;
    normalized[base + j] = xn;
    output[base + j] = xn * gamma[j] + beta[j];
  }
}
`,Ct=`
struct Dims { rows: u32, cols: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read> dY: array<f32>;
@group(0) @binding(1) var<storage, read> normalized: array<f32>;
@group(0) @binding(2) var<storage, read> invStd: array<f32>;
@group(0) @binding(3) var<storage, read> gamma: array<f32>;
@group(0) @binding(4) var<storage, read_write> dX: array<f32>;
@group(0) @binding(5) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.x;
  if (row >= dims.rows) { return; }
  let cols = dims.cols;
  let base = row * cols;
  let invC = 1.0 / f32(cols);

  var meanDxn = 0.0;
  var meanDxnXn = 0.0;
  for (var j: u32 = 0u; j < cols; j = j + 1u) {
    let v = dY[base + j] * gamma[j];
    meanDxn = meanDxn + v;
    meanDxnXn = meanDxn + v * normalized[base + j] - meanDxn; // keep numeric style
  }
  // Rerun för tydlighet — beräkna de två medelvärden separat.
  meanDxn = 0.0;
  meanDxnXn = 0.0;
  for (var j: u32 = 0u; j < cols; j = j + 1u) {
    let v = dY[base + j] * gamma[j];
    meanDxn = meanDxn + v;
    meanDxnXn = meanDxnXn + v * normalized[base + j];
  }
  meanDxn = meanDxn * invC;
  meanDxnXn = meanDxnXn * invC;

  let is = invStd[row];
  for (var j: u32 = 0u; j < cols; j = j + 1u) {
    let v = dY[base + j] * gamma[j];
    dX[base + j] = is * (v - meanDxn - normalized[base + j] * meanDxnXn);
  }
}
`,Dt=`
struct Dims { rows: u32, cols: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read> dY: array<f32>;
@group(0) @binding(1) var<storage, read> normalized: array<f32>;
@group(0) @binding(2) var<storage, read_write> dGamma: array<f32>;
@group(0) @binding(3) var<storage, read_write> dBeta: array<f32>;
@group(0) @binding(4) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let col = gid.x;
  if (col >= dims.cols) { return; }
  var sg = 0.0;
  var sb = 0.0;
  for (var r: u32 = 0u; r < dims.rows; r = r + 1u) {
    let dy = dY[r * dims.cols + col];
    sg = sg + normalized[r * dims.cols + col] * dy;
    sb = sb + dy;
  }
  dGamma[col] = dGamma[col] + sg;
  dBeta[col] = dBeta[col] + sb;
}
`,Tt=`
struct Dims { T: u32, dModel: u32, vocabSize: u32, _pad: u32 };
@group(0) @binding(0) var<storage, read> ids: array<u32>;
@group(0) @binding(1) var<storage, read> tokenEmb: array<f32>;
@group(0) @binding(2) var<storage, read> posEmb: array<f32>;
@group(0) @binding(3) var<storage, read_write> embedded: array<f32>;
@group(0) @binding(4) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let idx = gid.x;
  let total = dims.T * dims.dModel;
  if (idx >= total) { return; }
  let t = idx / dims.dModel;
  let j = idx % dims.dModel;
  let id = ids[t];
  embedded[idx] = tokenEmb[id * dims.dModel + j] + posEmb[t * dims.dModel + j];
}
`,Pt=`
struct Dims { T: u32, dModel: u32, vocabSize: u32, _pad: u32 };
@group(0) @binding(0) var<storage, read> ids: array<u32>;
@group(0) @binding(1) var<storage, read> dEmbedded: array<f32>;
@group(0) @binding(2) var<storage, read_write> dTokenEmb: array<f32>;
@group(0) @binding(3) var<storage, read_write> dPosEmb: array<f32>;
@group(0) @binding(4) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let j = gid.x;
  if (j >= dims.dModel) { return; }
  for (var t: u32 = 0u; t < dims.T; t = t + 1u) {
    let g = dEmbedded[t * dims.dModel + j];
    let id = ids[t];
    dTokenEmb[id * dims.dModel + j] = dTokenEmb[id * dims.dModel + j] + g;
    dPosEmb[t * dims.dModel + j] = dPosEmb[t * dims.dModel + j] + g;
  }
}
`,zt=`
struct Dims {
  T: u32, nHeads: u32, dHead: u32, dModel: u32,
  scale: f32, _pad0: f32, _pad1: f32, _pad2: f32,
};
@group(0) @binding(0) var<storage, read> Q: array<f32>;
@group(0) @binding(1) var<storage, read> K: array<f32>;
@group(0) @binding(2) var<storage, read_write> scores: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let h = gid.z;
  let i = gid.y;
  let j = gid.x;
  if (h >= dims.nHeads || i >= dims.T || j >= dims.T) { return; }
  let colStart = h * dims.dHead;
  let headStride = dims.T * dims.T;
  let outIdx = h * headStride + i * dims.T + j;

  if (j > i) {
    scores[outIdx] = -1.0e30; // causal mask (effektivt -inf)
    return;
  }
  var s = 0.0;
  for (var k: u32 = 0u; k < dims.dHead; k = k + 1u) {
    s = s + Q[i * dims.dModel + colStart + k] *
            K[j * dims.dModel + colStart + k];
  }
  scores[outIdx] = s * dims.scale;
}
`,Nt=`
struct Dims { T: u32, nHeads: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read_write> scores: array<f32>;
@group(0) @binding(1) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.x;
  let total = dims.T * dims.nHeads;
  if (row >= total) { return; }
  let base = row * dims.T;
  var rowMax = scores[base];
  for (var j: u32 = 1u; j < dims.T; j = j + 1u) {
    let v = scores[base + j];
    if (v > rowMax) { rowMax = v; }
  }
  var sum = 0.0;
  for (var j: u32 = 0u; j < dims.T; j = j + 1u) {
    let e = exp(scores[base + j] - rowMax);
    scores[base + j] = e;
    sum = sum + e;
  }
  let inv = 1.0 / sum;
  for (var j: u32 = 0u; j < dims.T; j = j + 1u) {
    scores[base + j] = scores[base + j] * inv;
  }
}
`,Ht=`
struct Dims { T: u32, nHeads: u32, dHead: u32, dModel: u32 };
@group(0) @binding(0) var<storage, read> weights: array<f32>;
@group(0) @binding(1) var<storage, read> V: array<f32>;
@group(0) @binding(2) var<storage, read_write> headOut: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let h = gid.z;
  let i = gid.y;
  let k = gid.x;
  if (h >= dims.nHeads || i >= dims.T || k >= dims.dHead) { return; }
  let headStride = dims.T * dims.T;
  let colStart = h * dims.dHead;
  var s = 0.0;
  for (var j: u32 = 0u; j < dims.T; j = j + 1u) {
    s = s + weights[h * headStride + i * dims.T + j] *
            V[j * dims.dModel + colStart + k];
  }
  headOut[i * dims.dModel + colStart + k] = s;
}
`,It=`
struct Dims { T: u32, nHeads: u32, dHead: u32, dModel: u32 };
@group(0) @binding(0) var<storage, read> dHeadOut: array<f32>;
@group(0) @binding(1) var<storage, read> V: array<f32>;
@group(0) @binding(2) var<storage, read_write> dWeights: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let h = gid.z;
  let i = gid.y;
  let j = gid.x;
  if (h >= dims.nHeads || i >= dims.T || j >= dims.T) { return; }
  let colStart = h * dims.dHead;
  var s = 0.0;
  for (var k: u32 = 0u; k < dims.dHead; k = k + 1u) {
    s = s + dHeadOut[i * dims.dModel + colStart + k] *
            V[j * dims.dModel + colStart + k];
  }
  let headStride = dims.T * dims.T;
  dWeights[h * headStride + i * dims.T + j] = s;
}
`,Wt=`
struct Dims { T: u32, nHeads: u32, dHead: u32, dModel: u32 };
@group(0) @binding(0) var<storage, read> weights: array<f32>;
@group(0) @binding(1) var<storage, read> dHeadOut: array<f32>;
@group(0) @binding(2) var<storage, read_write> dV: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let h = gid.z;
  let j = gid.y;
  let k = gid.x;
  if (h >= dims.nHeads || j >= dims.T || k >= dims.dHead) { return; }
  let colStart = h * dims.dHead;
  let headStride = dims.T * dims.T;
  var s = 0.0;
  for (var i: u32 = 0u; i < dims.T; i = i + 1u) {
    s = s + weights[h * headStride + i * dims.T + j] *
            dHeadOut[i * dims.dModel + colStart + k];
  }
  dV[j * dims.dModel + colStart + k] = s;
}
`,Kt=`
struct Dims { T: u32, nHeads: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read> weights: array<f32>;
@group(0) @binding(1) var<storage, read> dWeights: array<f32>;
@group(0) @binding(2) var<storage, read_write> dScores: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let row = gid.x;
  let total = dims.T * dims.nHeads;
  if (row >= total) { return; }
  let base = row * dims.T;
  var dot = 0.0;
  for (var j: u32 = 0u; j < dims.T; j = j + 1u) {
    dot = dot + weights[base + j] * dWeights[base + j];
  }
  for (var j: u32 = 0u; j < dims.T; j = j + 1u) {
    dScores[base + j] = weights[base + j] * (dWeights[base + j] - dot);
  }
}
`,Vt=`
struct Dims {
  T: u32, nHeads: u32, dHead: u32, dModel: u32,
  scale: f32, _pad0: f32, _pad1: f32, _pad2: f32,
};
@group(0) @binding(0) var<storage, read> dScores: array<f32>;
@group(0) @binding(1) var<storage, read> K: array<f32>;
@group(0) @binding(2) var<storage, read_write> dQ: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let h = gid.z;
  let i = gid.y;
  let k = gid.x;
  if (h >= dims.nHeads || i >= dims.T || k >= dims.dHead) { return; }
  let colStart = h * dims.dHead;
  let headStride = dims.T * dims.T;
  var s = 0.0;
  for (var j: u32 = 0u; j < dims.T; j = j + 1u) {
    s = s + dScores[h * headStride + i * dims.T + j] *
            K[j * dims.dModel + colStart + k];
  }
  dQ[i * dims.dModel + colStart + k] = s * dims.scale;
}
`,Rt=`
struct Dims {
  T: u32, nHeads: u32, dHead: u32, dModel: u32,
  scale: f32, _pad0: f32, _pad1: f32, _pad2: f32,
};
@group(0) @binding(0) var<storage, read> dScores: array<f32>;
@group(0) @binding(1) var<storage, read> Q: array<f32>;
@group(0) @binding(2) var<storage, read_write> dK: array<f32>;
@group(0) @binding(3) var<uniform> dims: Dims;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let h = gid.z;
  let j = gid.y;
  let k = gid.x;
  if (h >= dims.nHeads || j >= dims.T || k >= dims.dHead) { return; }
  let colStart = h * dims.dHead;
  let headStride = dims.T * dims.T;
  var s = 0.0;
  for (var i: u32 = 0u; i < dims.T; i = i + 1u) {
    s = s + dScores[h * headStride + i * dims.T + j] *
            Q[i * dims.dModel + colStart + k];
  }
  dK[j * dims.dModel + colStart + k] = s * dims.scale;
}
`,$t=`
struct Dims { T: u32, V: u32, _pad0: u32, _pad1: u32 };
@group(0) @binding(0) var<storage, read> logits: array<f32>;
@group(0) @binding(1) var<storage, read> targetIds: array<u32>;
@group(0) @binding(2) var<storage, read_write> dLogits: array<f32>;
@group(0) @binding(3) var<storage, read_write> perTokenLoss: array<f32>;
@group(0) @binding(4) var<uniform> dims: Dims;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let t = gid.x;
  if (t >= dims.T) { return; }
  let base = t * dims.V;
  var rowMax = logits[base];
  for (var v: u32 = 1u; v < dims.V; v = v + 1u) {
    let z = logits[base + v];
    if (z > rowMax) { rowMax = z; }
  }
  var sum = 0.0;
  for (var v: u32 = 0u; v < dims.V; v = v + 1u) {
    sum = sum + exp(logits[base + v] - rowMax);
  }
  let logSum = rowMax + log(sum);
  let tgt = targetIds[t];
  perTokenLoss[t] = logSum - logits[base + tgt];
  let invT = 1.0 / f32(dims.T);
  for (var v: u32 = 0u; v < dims.V; v = v + 1u) {
    let p = exp(logits[base + v] - logSum);
    var g = p;
    if (v == tgt) { g = g - 1.0; }
    dLogits[base + v] = g * invT;
  }
}
`,Gt=`
struct Dims { n: u32, _pad0: u32, _pad1: u32, _pad2: u32 };
struct Hyp {
  beta1: f32, beta2: f32, eps: f32, alphaT: f32,
  gradScale: f32, _pad0: f32, _pad1: f32, _pad2: f32,
};
@group(0) @binding(0) var<storage, read_write> p: array<f32>;
@group(0) @binding(1) var<storage, read> g: array<f32>;
@group(0) @binding(2) var<storage, read_write> m: array<f32>;
@group(0) @binding(3) var<storage, read_write> v: array<f32>;
@group(0) @binding(4) var<uniform> dims: Dims;
@group(0) @binding(5) var<uniform> hyp: Hyp;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let i = gid.x;
  if (i >= dims.n) { return; }
  let gi = g[i] * hyp.gradScale;
  let mi = hyp.beta1 * m[i] + (1.0 - hyp.beta1) * gi;
  let vi = hyp.beta2 * v[i] + (1.0 - hyp.beta2) * gi * gi;
  m[i] = mi;
  v[i] = vi;
  p[i] = p[i] - hyp.alphaT * mi / (sqrt(vi) + hyp.eps);
}
`,Qt=`
struct Dims { n: u32, _pad0: u32, _pad1: u32, _pad2: u32 };
struct Val { v: f32, _pad0: f32, _pad1: f32, _pad2: f32 };
@group(0) @binding(0) var<storage, read_write> a: array<f32>;
@group(0) @binding(1) var<uniform> dims: Dims;
@group(0) @binding(2) var<uniform> val: Val;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let i = gid.x;
  if (i >= dims.n) { return; }
  a[i] = a[i] * val.v;
}
`;function M(e,t){return Math.floor((e+t-1)/t)}function D(e,t){const r=e.createUniformBuffer(16),n=new Uint32Array(4);for(let s=0;s<t.length&&s<4;s++)n[s]=t[s]>>>0;return e.writeUint32(r,0,n),r}function ge(e,t,r=[]){const n=Math.max(16,(t.length+r.length)*4),s=e.createUniformBuffer(n),o=new ArrayBuffer(n),a=new Uint32Array(o),i=new Float32Array(o);for(let d=0;d<t.length;d++)a[d]=t[d]>>>0;for(let d=0;d<r.length;d++)i[t.length+d]=r[d];return e.queue.writeBuffer(s,0,o),s}function j(e,t,r){const n=r.map((s,o)=>({binding:o,resource:s}));return e.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:n})}function E(e,t,r,n,s=1,o=1){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(n,s,o)}function x(e,t,r,n,s,o,a,i){const d=e.getOrCreatePipeline("matmul",_t),u=D(e,[o,a,i,0]),c=j(e,d,[{buffer:r},{buffer:n},{buffer:s},{buffer:u}]);E(t,d,c,M(a,8),M(o,8),1)}function ee(e,t,r,n,s,o,a,i){const d=e.getOrCreatePipeline("matmul-at-b-accum",St),u=D(e,[o,a,i,0]),c=j(e,d,[{buffer:r},{buffer:n},{buffer:s},{buffer:u}]);E(t,d,c,M(a,8),M(o,8),1)}function te(e,t,r,n,s,o,a,i){const d=e.getOrCreatePipeline("matmul-a-bt",Mt),u=D(e,[o,a,i,0]),c=j(e,d,[{buffer:r},{buffer:n},{buffer:s},{buffer:u}]);E(t,d,c,M(a,8),M(o,8),1)}function re(e,t,r,n,s,o){const a=e.getOrCreatePipeline("add-row-bias",Lt),i=D(e,[s,o,0,0]),d=j(e,a,[{buffer:r},{buffer:n},{buffer:i}]);E(t,a,d,M(s*o,64))}function ne(e,t,r,n,s,o){const a=e.getOrCreatePipeline("sum-rows-accum",At),i=D(e,[s,o,0,0]),d=j(e,a,[{buffer:r},{buffer:n},{buffer:i}]);E(t,a,d,M(o,64))}function J(e,t,r,n,s){const o=e.getOrCreatePipeline("add-inplace",Bt),a=D(e,[s,0,0,0]),i=j(e,o,[{buffer:r},{buffer:n},{buffer:a}]);E(t,o,i,M(s,64))}function Ut(e,t,r,n){const s=e.getOrCreatePipeline("relu",Ot),o=D(e,[n,0,0,0]),a=j(e,s,[{buffer:r},{buffer:o}]);E(t,s,a,M(n,64))}function Xt(e,t,r,n,s){const o=e.getOrCreatePipeline("relu-bw",jt),a=D(e,[s,0,0,0]),i=j(e,o,[{buffer:r},{buffer:n},{buffer:a}]);E(t,o,i,M(s,64))}function Se(e,t,r,n,s){const o=e.getOrCreatePipeline("fill",Et),a=D(e,[n,0,0,0]),i=ge(e,[],[s,0,0,0]),d=j(e,o,[{buffer:r},{buffer:a},{buffer:i}]);E(t,o,d,M(n,64))}function qt(e,t,r,n,s){const o=e.getOrCreatePipeline("scale",Qt),a=D(e,[n,0,0,0]),i=ge(e,[],[s,0,0,0]),d=j(e,o,[{buffer:r},{buffer:a},{buffer:i}]);E(t,o,d,M(n,64))}function Le(e,t,r,n,s,o,a,i,d,u,c){const l=e.getOrCreatePipeline("layernorm-fw",Ft),f=D(e,[u,c,0,0]),m=j(e,l,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:a},{buffer:i},{buffer:d},{buffer:f}]);E(t,l,m,M(u,64))}function Ae(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("layernorm-bw-dx",Ct),c=D(e,[i,d,0,0]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:a},{buffer:c}]);E(t,u,l,M(i,64))}function Be(e,t,r,n,s,o,a,i){const d=e.getOrCreatePipeline("layernorm-bw-params",Dt),u=D(e,[a,i,0,0]),c=j(e,d,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:u}]);E(t,d,c,M(i,64))}function Yt(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("embed",Tt),c=D(e,[a,i,d,0]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:c}]);E(t,u,l,M(a*i,64))}function Jt(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("embed-bw",Pt),c=D(e,[a,i,d,0]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:c}]);E(t,u,l,M(i,64))}function Zt(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("attn-scores",zt),c=ge(e,[o,a,i,d],[1/Math.sqrt(i),0,0,0]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:c}]);E(t,u,l,M(o,8),M(o,8),a)}function xt(e,t,r,n,s){const o=e.getOrCreatePipeline("attn-softmax",Nt),a=D(e,[n,s,0,0]),i=j(e,o,[{buffer:r},{buffer:a}]);E(t,o,i,M(n*s,64))}function er(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("attn-weighted-sum",Ht),c=D(e,[o,a,i,d]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:c}]);E(t,u,l,M(i,8),M(o,8),a)}function tr(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("attn-dw",It),c=D(e,[o,a,i,d]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:c}]);E(t,u,l,M(o,8),M(o,8),a)}function rr(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("attn-dv",Wt),c=D(e,[o,a,i,d]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:c}]);E(t,u,l,M(i,8),M(o,8),a)}function nr(e,t,r,n,s,o,a){const i=e.getOrCreatePipeline("attn-softmax-bw",Kt),d=D(e,[o,a,0,0]),u=j(e,i,[{buffer:r},{buffer:n},{buffer:s},{buffer:d}]);E(t,i,u,M(o*a,64))}function or(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("attn-dq",Vt),c=ge(e,[o,a,i,d],[1/Math.sqrt(i),0,0,0]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:c}]);E(t,u,l,M(i,8),M(o,8),a)}function ar(e,t,r,n,s,o,a,i,d){const u=e.getOrCreatePipeline("attn-dk",Rt),c=ge(e,[o,a,i,d],[1/Math.sqrt(i),0,0,0]),l=j(e,u,[{buffer:r},{buffer:n},{buffer:s},{buffer:c}]);E(t,u,l,M(i,8),M(o,8),a)}function ir(e,t,r,n,s,o,a,i){const d=e.getOrCreatePipeline("cross-entropy",$t),u=D(e,[a,i,0,0]),c=j(e,d,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:u}]);E(t,d,c,M(a,64))}function sr(e,t,r,n,s,o,a,i,d,u,c,l){const f=e.getOrCreatePipeline("adam",Gt),m=D(e,[a,0,0,0]),b=ge(e,[],[i,d,u,c,l,0,0,0]),g=j(e,f,[{buffer:r},{buffer:n},{buffer:s},{buffer:o},{buffer:m},{buffer:b}]);E(t,f,g,M(a,64))}function Ge(e,t,r,n,s,o,a){const{dModel:i,nHeads:d,dFF:u,vocabSize:c}=r,l=he(r),f=a*i;ir(e,t,o.logits,o.targetBuffer,o.dLogits,o.perTokenLoss,a,c),ee(e,t,o.finalLnOut,o.dLogits,s.outputWeight,i,c,a),ne(e,t,o.dLogits,s.outputBias,a,c),te(e,t,o.dLogits,n.outputWeight,o.dX,a,i,c),Be(e,t,o.dX,o.finalLnNormalized,s.finalLayerNorm.gamma,s.finalLayerNorm.beta,a,i),Ae(e,t,o.dX,o.finalLnNormalized,o.finalLnInvStd,n.finalLayerNorm.gamma,o.dXFromLn,a,i),Se(e,t,o.dX,f,0),J(e,t,o.dX,o.dXFromLn,f);for(let m=r.nLayers-1;m>=0;m--){const b=n.blocks[m],g=s.blocks[m],v=o.blocks[m];ee(e,t,v.ffHidden,o.dX,g.ff.w2,u,i,a),ne(e,t,o.dX,g.ff.b2,a,i),te(e,t,o.dX,b.ff.w2,o.dHidden,a,u,i),Xt(e,t,o.dHidden,v.ffHidden,a*u),ee(e,t,v.ln2Out,o.dHidden,g.ff.w1,i,u,a),ne(e,t,o.dHidden,g.ff.b1,a,u),te(e,t,o.dHidden,b.ff.w1,o.dLn2Out,a,i,u),Be(e,t,o.dLn2Out,v.ln2Normalized,g.ln2.gamma,g.ln2.beta,a,i),Ae(e,t,o.dLn2Out,v.ln2Normalized,v.ln2InvStd,b.ln2.gamma,o.dXFromLn,a,i),J(e,t,o.dX,o.dXFromLn,f),ee(e,t,v.concatHeadOut,o.dX,g.attn.wO,i,i,a),ne(e,t,o.dX,g.attn.bO,a,i),te(e,t,o.dX,b.attn.wO,o.dConcatHeadOut,a,i,i),tr(e,t,o.dConcatHeadOut,v.V,o.dAttnWeights,a,d,l,i),rr(e,t,v.attnWeights,o.dConcatHeadOut,o.dV,a,d,l,i),nr(e,t,v.attnWeights,o.dAttnWeights,o.dScores,a,d),or(e,t,o.dScores,v.K,o.dQ,a,d,l,i),ar(e,t,o.dScores,v.Q,o.dK,a,d,l,i),ee(e,t,v.ln1Out,o.dQ,g.attn.wQ,i,i,a),ne(e,t,o.dQ,g.attn.bQ,a,i),ee(e,t,v.ln1Out,o.dK,g.attn.wK,i,i,a),ne(e,t,o.dK,g.attn.bK,a,i),ee(e,t,v.ln1Out,o.dV,g.attn.wV,i,i,a),ne(e,t,o.dV,g.attn.bV,a,i),te(e,t,o.dQ,b.attn.wQ,o.dLn1Out,a,i,i),te(e,t,o.dK,b.attn.wK,o.dConcatHeadOut,a,i,i),J(e,t,o.dLn1Out,o.dConcatHeadOut,f),te(e,t,o.dV,b.attn.wV,o.dConcatHeadOut,a,i,i),J(e,t,o.dLn1Out,o.dConcatHeadOut,f),Be(e,t,o.dLn1Out,v.ln1Normalized,g.ln1.gamma,g.ln1.beta,a,i),Ae(e,t,o.dLn1Out,v.ln1Normalized,v.ln1InvStd,b.ln1.gamma,o.dXFromLn,a,i),J(e,t,o.dX,o.dXFromLn,f)}Jt(e,t,o.idsBuffer,o.dX,s.tokenEmbedding,s.positionEmbedding,a,i,c)}var dr=Object.freeze({__proto__:null,backward:Ge});function Qe(e,t,r){const n=new Uint32Array(r.length);for(let s=0;s<r.length;s++)n[s]=r[s]>>>0;e.writeUint32(t.idsBuffer,0,n)}function Ue(e,t,r){const n=new Uint32Array(r.length);for(let s=0;s<r.length;s++)n[s]=r[s]>>>0;e.writeUint32(t.targetBuffer,0,n)}function Xe(e,t,r,n,s,o){const{dModel:a,nHeads:i,dFF:d,vocabSize:u}=r,c=he(r),l=o*a;Yt(e,t,s.idsBuffer,n.tokenEmbedding,n.positionEmbedding,s.embedded,o,a,u);let f=s.embedded;for(let m=0;m<r.nLayers;m++){const b=n.blocks[m],g=s.blocks[m];Le(e,t,f,b.ln1.gamma,b.ln1.beta,g.ln1Out,g.ln1Normalized,g.ln1Mean,g.ln1InvStd,o,a),x(e,t,g.ln1Out,b.attn.wQ,g.Q,o,a,a),re(e,t,g.Q,b.attn.bQ,o,a),x(e,t,g.ln1Out,b.attn.wK,g.K,o,a,a),re(e,t,g.K,b.attn.bK,o,a),x(e,t,g.ln1Out,b.attn.wV,g.V,o,a,a),re(e,t,g.V,b.attn.bV,o,a),Zt(e,t,g.Q,g.K,g.attnWeights,o,i,c,a),xt(e,t,g.attnWeights,o,i),er(e,t,g.attnWeights,g.V,g.concatHeadOut,o,i,c,a),x(e,t,g.concatHeadOut,b.attn.wO,g.attnOut,o,a,a),re(e,t,g.attnOut,b.attn.bO,o,a),Ne(e,t,f,g.afterAttn,l),J(e,t,g.afterAttn,g.attnOut,l),Le(e,t,g.afterAttn,b.ln2.gamma,b.ln2.beta,g.ln2Out,g.ln2Normalized,g.ln2Mean,g.ln2InvStd,o,a),x(e,t,g.ln2Out,b.ff.w1,g.ffHidden,o,d,a),re(e,t,g.ffHidden,b.ff.b1,o,d),Ut(e,t,g.ffHidden,o*d),x(e,t,g.ffHidden,b.ff.w2,g.ffOut,o,a,d),re(e,t,g.ffOut,b.ff.b2,o,a),Ne(e,t,g.afterAttn,g.blockOut,l),J(e,t,g.blockOut,g.ffOut,l),f=g.blockOut}Le(e,t,f,n.finalLayerNorm.gamma,n.finalLayerNorm.beta,s.finalLnOut,s.finalLnNormalized,s.finalLnMean,s.finalLnInvStd,o,a),x(e,t,s.finalLnOut,n.outputWeight,s.logits,o,u,a),re(e,t,s.logits,n.outputBias,o,u)}function Ne(e,t,r,n,s){Se(e,t,n,s,0),J(e,t,n,r,s)}var ur=Object.freeze({__proto__:null,forward:Xe,writeInput:Qe,writeTarget:Ue});function Oe(e,t){const r=e.createStorageBuffer(t),n=e.createStorageBuffer(t),s=new Float32Array(t);return s.fill(1),e.writeFloat32(r,0,s),e.writeFloat32(n,0,new Float32Array(t)),{gamma:r,beta:n}}function X(e,t,r,n,s){const o=e.createStorageBuffer(t*r),a=new Float32Array(t*r);return We(a,n,s),e.writeFloat32(o,0,a),o}function oe(e,t){const r=e.createStorageBuffer(t);return e.writeFloat32(r,0,new Float32Array(t)),r}function He(e,t){const{vocabSize:r,dModel:n,nLayers:s,dFF:o}=t,a=.02,i=le(12648430),d=X(e,r,n,i,a),u=X(e,t.contextLength,n,i,a),c=[];for(let b=0;b<s;b++)c.push({ln1:Oe(e,n),attn:{wQ:X(e,n,n,i,a),wK:X(e,n,n,i,a),wV:X(e,n,n,i,a),wO:X(e,n,n,i,a),bQ:oe(e,n),bK:oe(e,n),bV:oe(e,n),bO:oe(e,n)},ln2:Oe(e,n),ff:{w1:X(e,n,o,i,a),b1:oe(e,o),w2:X(e,o,n,i,a),b2:oe(e,n)}});const l=Oe(e,n),f=X(e,n,r,i,a),m=oe(e,r);return{tokenEmbedding:d,positionEmbedding:u,blocks:c,finalLayerNorm:l,outputWeight:f,outputBias:m}}function pe(e,t){const{vocabSize:r,dModel:n,nLayers:s,dFF:o,contextLength:a}=t,i=[];i.push({name:"tokenEmbedding",buffer:e.tokenEmbedding,length:r*n}),i.push({name:"positionEmbedding",buffer:e.positionEmbedding,length:a*n});for(let d=0;d<s;d++){const u=e.blocks[d];i.push({name:`block${d}.ln1.gamma`,buffer:u.ln1.gamma,length:n}),i.push({name:`block${d}.ln1.beta`,buffer:u.ln1.beta,length:n}),i.push({name:`block${d}.attn.wQ`,buffer:u.attn.wQ,length:n*n}),i.push({name:`block${d}.attn.wK`,buffer:u.attn.wK,length:n*n}),i.push({name:`block${d}.attn.wV`,buffer:u.attn.wV,length:n*n}),i.push({name:`block${d}.attn.wO`,buffer:u.attn.wO,length:n*n}),i.push({name:`block${d}.attn.bQ`,buffer:u.attn.bQ,length:n}),i.push({name:`block${d}.attn.bK`,buffer:u.attn.bK,length:n}),i.push({name:`block${d}.attn.bV`,buffer:u.attn.bV,length:n}),i.push({name:`block${d}.attn.bO`,buffer:u.attn.bO,length:n}),i.push({name:`block${d}.ln2.gamma`,buffer:u.ln2.gamma,length:n}),i.push({name:`block${d}.ln2.beta`,buffer:u.ln2.beta,length:n}),i.push({name:`block${d}.ff.w1`,buffer:u.ff.w1,length:n*o}),i.push({name:`block${d}.ff.b1`,buffer:u.ff.b1,length:o}),i.push({name:`block${d}.ff.w2`,buffer:u.ff.w2,length:o*n}),i.push({name:`block${d}.ff.b2`,buffer:u.ff.b2,length:n})}return i.push({name:"finalLN.gamma",buffer:e.finalLayerNorm.gamma,length:n}),i.push({name:"finalLN.beta",buffer:e.finalLayerNorm.beta,length:n}),i.push({name:"outputWeight",buffer:e.outputWeight,length:n*r}),i.push({name:"outputBias",buffer:e.outputBias,length:r}),i}function lr(e,t){const r=t.contextLength,{dModel:n,dFF:s,nLayers:o,nHeads:a,vocabSize:i}=t;he(t);const d=r*n,u=r*s,c=a*r*r,l=r*i,f=[];for(let m=0;m<o;m++)f.push({ln1Normalized:e.createStorageBuffer(d),ln1Mean:e.createStorageBuffer(r),ln1InvStd:e.createStorageBuffer(r),ln1Out:e.createStorageBuffer(d),Q:e.createStorageBuffer(d),K:e.createStorageBuffer(d),V:e.createStorageBuffer(d),attnWeights:e.createStorageBuffer(c),concatHeadOut:e.createStorageBuffer(d),attnOut:e.createStorageBuffer(d),afterAttn:e.createStorageBuffer(d),ln2Normalized:e.createStorageBuffer(d),ln2Mean:e.createStorageBuffer(r),ln2InvStd:e.createStorageBuffer(r),ln2Out:e.createStorageBuffer(d),ffHidden:e.createStorageBuffer(u),ffOut:e.createStorageBuffer(d),blockOut:e.createStorageBuffer(d)});return{embedded:e.createStorageBuffer(d),blocks:f,finalLnNormalized:e.createStorageBuffer(d),finalLnMean:e.createStorageBuffer(r),finalLnInvStd:e.createStorageBuffer(r),finalLnOut:e.createStorageBuffer(d),logits:e.createStorageBuffer(l),dLogits:e.createStorageBuffer(l),perTokenLoss:e.createStorageBuffer(r),dEmbedded:e.createStorageBuffer(d),dX:e.createStorageBuffer(d),dXFromLn:e.createStorageBuffer(d),dAttnOut:e.createStorageBuffer(d),dConcatHeadOut:e.createStorageBuffer(d),dQ:e.createStorageBuffer(d),dK:e.createStorageBuffer(d),dV:e.createStorageBuffer(d),dAttnWeights:e.createStorageBuffer(c),dScores:e.createStorageBuffer(c),dHidden:e.createStorageBuffer(u),dLn2Out:e.createStorageBuffer(d),dLn1Out:e.createStorageBuffer(d),idsBuffer:e.createStorageBuffer(r),targetBuffer:e.createStorageBuffer(r)}}function fr(e,t,r,n){const s=He(e,t),o=He(e,t),a=pe(o,t),i=e.device.createCommandEncoder(),d=i.beginComputePass();for(const f of a)Se(e,d,f.buffer,f.length,0);d.end(),e.queue.submit([i.finish()]);const u=pe(s,t),c=u.map(f=>{const m=e.createStorageBuffer(f.length);return e.writeFloat32(m,0,new Float32Array(f.length)),m}),l=u.map(f=>{const m=e.createStorageBuffer(f.length);return e.writeFloat32(m,0,new Float32Array(f.length)),m});return{ctx:e,config:t,params:s,grads:o,adamM:c,adamV:l,step:0,lr:.01,corpusIds:r,rng:n,batchSize:16,act:lr(e,t)}}function cr(e){const t=Math.min(e.config.contextLength,e.corpusIds.length-1),r=e.corpusIds.length-t-1,n=r>0?Math.floor(e.rng()*(r+1)):0;return{input:e.corpusIds.slice(n,n+t),target:e.corpusIds.slice(n+1,n+t+1)}}async function gr(e){const t=e.ctx,r=pe(e.grads,e.config),n=pe(e.params,e.config);{const h=t.device.createCommandEncoder(),_=h.beginComputePass();for(const w of r)Se(t,_,w.buffer,w.length,0);_.end(),t.queue.submit([h.finish()])}const s=[];for(let h=0;h<e.batchSize;h++){const{input:_,target:w}=cr(e);Qe(t,e.act,_),Ue(t,e.act,w);const S=t.device.createCommandEncoder(),I=S.beginComputePass();Xe(t,I,e.config,e.params,e.act,_.length),Ge(t,I,e.config,e.params,e.grads,e.act,_.length),I.end(),t.queue.submit([S.finish()]),s.push(t.readFloat32(e.act.perTokenLoss,_.length))}const o=1/e.batchSize;{const h=t.device.createCommandEncoder(),_=h.beginComputePass();for(const w of r)qt(t,_,w.buffer,w.length,o);_.end(),t.queue.submit([h.finish()])}let a=0;const i=await Promise.all(r.map(h=>t.readFloat32(h.buffer,h.length)));for(const h of i)for(let _=0;_<h.length;_++)a+=h[_]*h[_];const d=Math.sqrt(a),u=1,c=d>u?u/d:1;e.step++;const l=.9,f=.999,m=1e-8,b=1-Math.pow(l,e.step),g=1-Math.pow(f,e.step),v=e.lr*Math.sqrt(g)/b;{const h=t.device.createCommandEncoder(),_=h.beginComputePass();for(let w=0;w<n.length;w++){const S=n[w],I=r[w];sr(t,_,S.buffer,I.buffer,e.adamM[w],e.adamV[w],S.length,l,f,m,v,c)}_.end(),t.queue.submit([h.finish()])}const A=await Promise.all(s);let C=0,p=0;for(const h of A)for(let _=0;_<h.length;_++)C+=h[_],p++;return{loss:p>0?C/p:0,gradNorm:d}}async function mr(e){const t=e.ctx,r=Math.min(e.config.contextLength,e.corpusIds.length-1),n=e.corpusIds.slice(0,r),s=e.corpusIds.slice(1,r+1),{writeInput:o,writeTarget:a,forward:i}=await Promise.resolve().then(function(){return ur}),{backward:d}=await Promise.resolve().then(function(){return dr});o(t,e.act,n),a(t,e.act,s),t.device.pushErrorScope("validation");const u=t.device.createCommandEncoder(),c=u.beginComputePass();i(t,c,e.config,e.params,e.act,r),d(t,c,e.config,e.params,e.grads,e.act,r),c.end(),t.queue.submit([u.finish()]);const l=await t.device.popErrorScope();l&&(console.error("GPU backward validation error:",l.message),e.lastError=l.message);const f=e.config.vocabSize,m=e.config.dModel,b=e.act.blocks[0];return{logitsFirstRow:await t.readFloat32(e.act.logits,f),perTokenLoss:await t.readFloat32(e.act.perTokenLoss,r),embeddedFirstRow:await t.readFloat32(e.act.embedded,m),block0Ln1Out:await t.readFloat32(b.ln1Out,m),block0Q:await t.readFloat32(b.Q,m),finalLnOut:await t.readFloat32(e.act.finalLnOut,m)}}function H(e,t){t&&t.length>0?self.postMessage(e,t):self.postMessage(e)}function br(e,t,r){let n=-1/0;for(let i=0;i<r;i++){const d=e[t+i];d>n&&(n=d)}const s=new Float32Array(r);let o=0;for(let i=0;i<r;i++){const d=Math.exp(e[t+i]-n);s[i]=d,o+=d}const a=1/o;for(let i=0;i<r;i++)s[i]*=a;return s}let V=null,K=null,ae=null,F=null,R=null,ye=null,me="cpu",Z=!1;function pr(e,t){const r=Ye(t,e),n=le(12648430),s=xe(r,n);return{config:r,params:s}}const hr=10,wr=100,Ie="De",vr=60;async function yr(){if(!R||!F)return;const e=pe(R.params,R.config),t=G(F.params);if(e.length!==t.length)return;const r=await Promise.all(e.map(n=>R.ctx.readFloat32(n.buffer,n.length)));for(let n=0;n<r.length;n++)t[n].set(r[n])}async function kr(){if(!V)return;const e=V;let t=performance.now(),r=0,n=0,s=0;for(;Z;){for(let u=0;u<hr&&Z;u++){let c,l;if(me==="gpu"&&R){const f=await gr(R);c=f.loss,l=f.gradNorm}else if(F){const f=mt(F);c=f.loss,l=f.gradNorm}else break;r+=c,n+=l,s++}if(!Z)break;const o=R?R.step:F?F.step:0;me==="gpu"&&await yr();const a=performance.now(),i=Math.max(1e-6,(a-t)/1e3),d=s/i;if(H({type:"train:progress",step:o,loss:r/s,samplesPerSecond:d,gradNorm:n/s}),F&&o%wr===0){const u=bt(F.config,F.params,e,Ie,vr);H({type:"train:sample",step:o,prefix:Ie,generated:u})}r=0,n=0,s=0,t=performance.now(),await new Promise(u=>setTimeout(u,0))}}let Ce=0;async function _r(e,t,r,n,s){if(!V||!K||!ae)return;const o=++Ce,a=V,i=K,d=Array.from(a.encode(e));d.length===0&&d.push(0);const u=le(Date.now()&4294967295);for(let c=0;c<t;c++){if(o!==Ce)return;const l=Math.max(0,d.length-i.contextLength),f=new Int32Array(d.slice(l)),m=we(i,ae,f),{logits:b}=m,g=b.cols,v=(b.rows-1)*g,A=pt(b.data,v,g,{strategy:r,temperature:n,topK:s},u),C=br(b.data,v,g),p=Math.min(10,g),y=Array.from({length:g},(O,z)=>z).sort((O,z)=>C[z]-C[O]),h=new Array(p),_=new Array(p);for(let O=0;O<p;O++){const z=y[O];h[O]=a.idToToken[z]??"",_[O]=C[z]}d.push(A);const w=a.idToToken[A];H({type:"inference:token",index:c,char:w}),H({type:"inference:probs",step:c,topChars:h,topProbs:_,chosenChar:w,chosenProb:C[A]});const S=f.length,I=i.nLayers,q=i.nHeads,P=new Float32Array(I*q*S*S);for(let O=0;O<I;O++){const z=m.blocks[O].attn;for(let $=0;$<q;$++){const Q=z.headWeights[$],ue=(O*q+$)*S*S;P.set(Q.data,ue)}}const N=new Array(S);for(let O=0;O<S;O++)N[O]=a.idToToken[f[O]]??"";H({type:"inference:attention",step:c,contextChars:N,nLayers:I,nHeads:q,T:S,matrices:P},[P.buffer]),await new Promise(O=>setTimeout(O,25))}H({type:"inference:done",count:t})}self.onmessage=async e=>{const t=e.data;switch(t.type){case"ping":H({type:"pong",payload:t.payload,receivedAt:Date.now()});return;case"corpus:submit":{Z=!1,Ce++,t.tokenizer==="bpe"?V=Te.train(t.text,t.bpeVocabSize,(d,u,c)=>{H({type:"tokenizer:progress",mergesDone:d,targetMerges:u,latestA:c.a,latestB:c.b,latestCount:c.count})}):V=De.fromText(t.text),H({type:"corpus:analyzed",tokenizerKind:V.kind,vocab:V.idToToken.slice(),frequencies:V.frequencies.slice(),totalChars:V.totalChars,totalTokens:V.totalTokens});const r=pr(V.vocabSize,t.modelPreset);K=r.config,ae=r.params;const n=V.encode(t.text);F={config:K,params:ae,grads:et(K),adam:st(ae,.01),corpusIds:n,rng:le(195948557),step:0,batchSize:16},me="cpu",t.backend==="gpu"?(ye||(ye=await Fe.create()),ye?(R=fr(ye,K,n,le(195948557)),me="gpu"):console.warn("WebGPU ej tillgängligt, kör CPU-backend.")):R=null;const s=Math.min(K.contextLength,Math.max(1,n.length),8),o=n.slice(0,s),{logits:a}=Ke(K,ae,o);let i=-1/0;for(let d=0;d<a.data.length;d++){const u=a.data[d];if(!Number.isFinite(u))throw new Error(`Icke-ändligt logit vid index ${d}: ${u}`);u>i&&(i=u)}H({type:"model:ready",vocabSize:K.vocabSize,dModel:K.dModel,nHeads:K.nHeads,nLayers:K.nLayers,dFF:K.dFF,contextLength:K.contextLength,parameterCount:rt(ae),backend:me,sanityMaxLogit:i}),H({type:"train:state",state:"idle",step:0});return}case"train:start":case"train:resume":{if(!F||Z)return;Z=!0,t.type==="train:start"&&(F.adam.lr=t.learningRate),H({type:"train:state",state:"running",step:F.step}),kr().then(()=>{H({type:"train:state",state:"paused",step:F?F.step:0})});return}case"train:pause":{Z=!1;return}case"train:set-batch-size":{F&&t.batchSize>=1&&(F.batchSize=t.batchSize|0);return}case"grad-check:start":{if(!F)return;Z=!1;const r=ht(F.config,F.params,F.grads,F.corpusIds,le((Date.now()^F.step)>>>0),100,8);H({type:"grad-check:result",checked:r.checked,skipped:r.skipped,maxRelError:r.maxRelError,meanRelError:r.meanRelError,loss:r.loss,seqLength:r.seqLength,worst:r.worst.map(n=>({paramName:n.paramName,flatIndex:n.flatIndex,numerical:n.numerical,analytical:n.analytical,relError:n.relError}))});return}case"gpu:debug":{if(!R)return;const r=await mr(R),n=R.lastError;H({type:"gpu:debug-result",logitsFirstRow:Array.from(r.logitsFirstRow),perTokenLoss:Array.from(r.perTokenLoss),embeddedFirstRow:Array.from(r.embeddedFirstRow),block0Ln1Out:Array.from(r.block0Ln1Out),block0Q:Array.from(r.block0Q),finalLnOut:Array.from(r.finalLnOut),lastError:n??null});return}case"inference:start":{_r(t.prompt,t.nTokens,t.strategy,t.temperature,t.topK);return}default:{const r=t;throw new Error(`Okänt meddelande: ${JSON.stringify(r)}`)}}};H({type:"ready"});
