import{S as P,i as X,s as z,H as L,e as h,a as S,D as Y,t as O,b as r,c as J,d as a,J as Q,E as Z,l as E,m as V,y as $,A as ee,f as K,G as te,v as ne,r as le,h as B,x as F,Q as ae}from"./DarkMode-96777a85.js";function G(n,c,e){const l=n.slice();return l[19]=c[e],l[21]=e,l}function H(n){let c,e,l,f,u,o;return{c(){c=h("div"),e=h("a"),l=h("img"),o=S(),r(l,"class","h-auto rounded-lg shadow-xl"),B(l.src,f=n[19])||r(l,"src",f),r(l,"alt","image"),r(e,"href",u="/api/get_full_image/"+n[2][n[21]]),r(e,"target","_blank"),r(c,"class","flex flex-col")},m(d,w){J(d,c,w),a(c,e),a(e,l),a(c,o)},p(d,w){w&2&&!B(l.src,f=d[19])&&r(l,"src",f),w&4&&u!==(u="/api/get_full_image/"+d[2][d[21]])&&r(e,"href",u)},d(d){d&&K(c)}}}function re(n){let c,e,l,f,u,o,d,w,b,A,C,x,j,M,v,p,R,q,W,D,N,s,i,g,I,T;b=new L({});let k=n[1],m=[];for(let t=0;t<k.length;t+=1)m[t]=H(G(n,k,t));return{c(){c=h("div"),e=h("div"),l=h("div"),f=h("div"),u=h("input"),o=S(),d=h("button"),d.textContent="Query All Videos",w=S(),Y(b.$$.fragment),A=S(),C=h("p"),x=O(n[4]),j=O(" Videos Indexed So far."),M=S(),v=h("div"),p=h("input"),R=S(),q=h("label"),W=O("Current Context Window: "),D=O(n[5]),N=S(),s=h("div"),i=h("div");for(let t=0;t<m.length;t+=1)m[t].c();r(u,"class","bg-transparent focus:outline-none dark:text-white border-b border-black dark:border-white"),r(u,"placeholder","Search"),r(d,"class","bg-blue-600 hover:bg-blue-800 disabled:bg-blue-400 text-white px-3 py-1 ml-2 rounded-md"),r(f,"class","flex flex-row my-2"),r(C,"class","dark:dark:text-white"),r(p,"type","range"),r(p,"min","0"),r(p,"max","3"),r(p,"class","w-full"),r(q,"for","context_window"),r(q,"class","dark:text-white"),r(v,"class","my-4"),r(e,"class","flex flex-row place-content-center mt-10 select-none"),r(i,"class","relative grid md:grid-cols-3 2xl:grid-cols-4 gap-8 mt-6 grid-flow-row-dense"),r(s,"class","flex items-center select-none m-4"),r(c,"class","overflow-y-auto min-h-screen dark:bg-gray-600 dark:text-white")},m(t,y){J(t,c,y),a(c,e),a(e,l),a(l,f),a(f,u),Q(u,n[3]),a(f,o),a(f,d),n[11](d),a(f,w),Z(b,f,null),a(l,A),a(l,C),a(C,x),a(C,j),a(l,M),a(l,v),a(v,p),n[12](p),Q(p,n[5]),a(v,R),a(v,q),a(q,W),a(q,D),a(c,N),a(c,s),a(s,i);for(let _=0;_<m.length;_+=1)m[_].m(i,null);g=!0,I||(T=[E(u,"keyup",n[8]),E(u,"input",n[10]),E(d,"click",n[7]),E(p,"change",n[9]),E(p,"change",n[13]),E(p,"input",n[13])],I=!0)},p(t,[y]){if(y&8&&u.value!==t[3]&&Q(u,t[3]),(!g||y&16)&&V(x,t[4]),y&32&&Q(p,t[5]),(!g||y&32)&&V(D,t[5]),y&6){k=t[1];let _;for(_=0;_<k.length;_+=1){const U=G(t,k,_);m[_]?m[_].p(U,y):(m[_]=H(U),m[_].c(),m[_].m(i,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=k.length}},i(t){g||($(b.$$.fragment,t),g=!0)},o(t){ee(b.$$.fragment,t),g=!1},d(t){t&&K(c),n[11](null),te(b),n[12](null),ne(m,t),I=!1,le(T)}}}let se=100;const oe="/api";function ie(n,c,e){let l=[],f=[],u=[],o,d="",w=0,b,A=0;function C(){const s=f.map((i,g)=>({i:g,value:f[g]}));s.sort((i,g)=>i.value>g.value?-1:i.value<g.value?1:0),f=s.map(i=>i.value),e(1,l=s.map(i=>l[i.i])),e(2,u=s.map(i=>u[i.i]))}async function x(){if(b=new FormData,!d)return;if(b.append("text_query",d),b.append("context_window",v.toString()),w==0&&(e(1,l=[]),e(2,u=[]),f=[],b.append("query_start","true"),e(0,o.disabled=!0,o)),w==se){console.log("Max limit reached. Ending query."),w=0,e(0,o.disabled=!1,o);return}const s=oe+"/search/video";let i=await fetch(s,{method:"POST",body:b});if(!i.ok)throw e(0,o.disabled=!1,o),new Error(i);let g=i.body.getReader(),I=await new ReadableStream({start(m){return t();function t(){return g.read().then(({done:y,value:_})=>{if(y){m.close();return}return m.enqueue(_),t()})}}}),k=await(await new Response(I)).json();if(k.query_completed==!0){console.log("Stream completed"),w=0,e(0,o.disabled=!1,o);return}u.push(k.local_hash),l.push(k.data),f.push(Number(k.score)),C(),w+=1,x()}function j(s){s.key==="Enter"&&o.disabled==!1&&x()}async function M(){let s=await fetch("/api/getIndexCount/video");if(s.ok){let i=await s.json();e(4,A=i.index_count)}else throw new Error(s)}let v=1,p;function R(){x()}M();function q(){d=this.value,e(3,d)}function W(s){F[s?"unshift":"push"](()=>{o=s,e(0,o)})}function D(s){F[s?"unshift":"push"](()=>{p=s,e(6,p),e(0,o)})}function N(){v=ae(this.value),e(5,v)}return n.$$.update=()=>{n.$$.dirty&1&&o&&e(6,p.disabled=o.disabled,p)},[o,l,u,d,A,v,p,x,j,R,q,W,D,N]}class ue extends P{constructor(c){super(),X(this,c,ie,re,z,{})}}new ue({target:document.getElementById("app")});
