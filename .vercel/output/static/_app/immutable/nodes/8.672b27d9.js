import{s as lt,f as Cl,h as tt,n as De,r as Xe,b as Dl,i as Al,e as Ce}from"../chunks/scheduler.e04b059d.js";import{S as st,i as at,g as r,s as E,m as ne,h as d,j as b,c as w,f,n as oe,k as l,A as rl,a as ee,z as s,B as R,o as _e,y as z,C as Ie,D as dl,E as Ll,r as He,u as qe,v as Fe,b as xl,d as Ee,t as we,w as je,e as ul,p as Ol}from"../chunks/index.7833e292.js";import{e as Je,u as Nt,d as wl,T as Vl,o as Ml}from"../chunks/Toaster.dcd61226.js";import{e as Mt,s as Il}from"../chunks/index.dfa8a9aa.js";import{w as St}from"../chunks/singletons.5f32a592.js";import{t as Ze}from"../chunks/Toaster.svelte_svelte_type_style_lang.18abee90.js";function Pl(a){let e,t,n,o,i,_,v,g,c,m,u,C,k,p,y,D,h,O,V,x,te,B,F,N,K,S,P,$,ue;return{c(){e=r("div"),t=r("form"),n=r("input"),o=E(),i=r("input"),_=E(),v=r("input"),g=E(),c=r("div"),m=r("div"),u=r("p"),C=ne(a[0]),k=E(),p=r("form"),y=r("input"),D=E(),h=r("button"),O=r("img"),te=E(),B=r("div"),F=r("p"),N=ne(a[6]),K=E(),S=r("p"),P=ne(a[1]),this.h()},l(j){e=d(j,"DIV",{class:!0,role:!0});var A=b(e);t=d(A,"FORM",{action:!0,method:!0});var U=b(t);n=d(U,"INPUT",{type:!0,name:!0}),o=w(U),i=d(U,"INPUT",{name:!0,type:!0,class:!0}),_=w(U),v=d(U,"INPUT",{type:!0,name:!0}),U.forEach(f),g=w(A),c=d(A,"DIV",{class:!0});var le=b(c);m=d(le,"DIV",{class:!0});var G=b(m);u=d(G,"P",{class:!0});var H=b(u);C=oe(H,a[0]),H.forEach(f),k=w(G),p=d(G,"FORM",{action:!0,method:!0});var T=b(p);y=d(T,"INPUT",{type:!0,name:!0}),D=w(T),h=d(T,"BUTTON",{});var L=b(h);O=d(L,"IMG",{src:!0,alt:!0,class:!0}),L.forEach(f),T.forEach(f),G.forEach(f),te=w(le),B=d(le,"DIV",{class:!0});var q=b(B);F=d(q,"P",{class:!0});var ie=b(F);N=oe(ie,a[6]),ie.forEach(f),K=w(q),S=d(q,"P",{class:!0});var Z=b(S);P=oe(Z,a[1]),Z.forEach(f),q.forEach(f),le.forEach(f),A.forEach(f),this.h()},h(){l(n,"type","hidden"),l(n,"name","id"),n.hidden=!0,n.value=a[3],l(i,"name","completed"),l(i,"type","checkbox"),i.checked=a[2],l(i,"class","mt-1 h-5 w-5"),l(v,"type","hidden"),l(v,"name","completed"),v.value="off",l(t,"action","?/completeTodo"),l(t,"method","POST"),l(u,"class","text-lg"),rl(u,"line-through",a[2]),l(y,"type","hidden"),l(y,"name","id"),y.hidden=!0,y.value=a[3],Cl(O.src,V="icons/bin.svg")||l(O,"src",V),l(O,"alt","delete"),l(O,"class",x="h-4 cursor-pointer opacity-30 hover:opacity-100 "+(a[4]?"block":"hidden")),l(p,"action","?/deleteTodo"),l(p,"method","POST"),l(m,"class","flex items-end space-x-5"),l(F,"class","rounded-lg border border-gray-300 px-2 text-sm"),l(S,"class","rounded-lg border border-gray-300 px-2 text-sm"),l(B,"class","flex flex-col items-start space-y-1 xs:flex-row xs:space-x-5 xs:space-y-0"),l(c,"class","flex flex-col space-y-3"),l(e,"class","mb-5 flex items-start space-x-6 rounded-lg border px-8 py-4"),l(e,"role","presentation")},m(j,A){ee(j,e,A),s(e,t),s(t,n),s(t,o),s(t,i),s(t,_),s(t,v),a[9](t),s(e,g),s(e,c),s(c,m),s(m,u),s(u,C),s(m,k),s(m,p),s(p,y),s(p,D),s(p,h),s(h,O),s(c,te),s(c,B),s(B,F),s(F,N),s(B,K),s(B,S),s(S,P),$||(ue=[R(i,"change",a[8]),tt(Mt.call(null,t)),tt(Mt.call(null,p)),R(e,"mouseenter",a[10]),R(e,"mouseleave",a[11])],$=!0)},p(j,[A]){A&8&&(n.value=j[3]),A&4&&(i.checked=j[2]),A&1&&_e(C,j[0]),A&4&&rl(u,"line-through",j[2]),A&8&&(y.value=j[3]),A&16&&x!==(x="h-4 cursor-pointer opacity-30 hover:opacity-100 "+(j[4]?"block":"hidden"))&&l(O,"class",x),A&2&&_e(P,j[1])},i:De,o:De,d(j){j&&f(e),a[9](null),$=!1,Xe(ue)}}}function Nl(a,e,t){let{todo:n="Todo"}=e,{list:o="Inbox"}=e,{completed:i=!1}=e,{id:_=""}=e,{dueDate:v="2023-11-06T00:00:00.000Z"}=e;const g=new Date(v),c={year:"numeric",month:"short",day:"numeric"},m=g.toLocaleDateString("en-US",c);let u=!1,C;const k=()=>C.requestSubmit();function p(h){Dl[h?"unshift":"push"](()=>{C=h,t(5,C)})}const y=()=>t(4,u=!0),D=()=>t(4,u=!1);return a.$$set=h=>{"todo"in h&&t(0,n=h.todo),"list"in h&&t(1,o=h.list),"completed"in h&&t(2,i=h.completed),"id"in h&&t(3,_=h.id),"dueDate"in h&&t(7,v=h.dueDate)},[n,o,i,_,u,C,m,v,k,p,y,D]}class Sl extends st{constructor(e){super(),at(this,e,Nl,Pl,lt,{todo:0,list:1,completed:2,id:3,dueDate:7})}}const vt=St(!1),Pt=St(!1),ze=St(!1);function cl(a,e,t){const n=a.slice();return n[8]=e[t],n}function fl(a,e){let t,n,o=e[8].list_name+"",i,_,v,g,c,m,u,C,k,p,y,D,h='<img src="/icons/bin.svg" alt="delete list" class="h-4 cursor-pointer opacity-30 hover:opacity-100"/>',O,V,x,te;function B(){return e[6](e[8])}return{key:a,first:null,c(){t=r("div"),n=r("a"),i=ne(o),v=E(),g=r("div"),c=r("form"),m=r("input"),C=E(),k=r("input"),y=E(),D=r("button"),D.innerHTML=h,V=E(),this.h()},l(F){t=d(F,"DIV",{role:!0,class:!0});var N=b(t);n=d(N,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var K=b(n);i=oe(K,o),K.forEach(f),v=w(N),g=d(N,"DIV",{class:!0});var S=b(g);c=d(S,"FORM",{action:!0,method:!0});var P=b(c);m=d(P,"INPUT",{type:!0,name:!0}),C=w(P),k=d(P,"INPUT",{type:!0,name:!0}),y=w(P),D=d(P,"BUTTON",{"data-svelte-h":!0}),z(D)!=="svelte-1pkdu19"&&(D.innerHTML=h),P.forEach(f),S.forEach(f),V=w(N),N.forEach(f),this.h()},h(){l(n,"href",_="/dashboard?list="+e[8].list_name),l(n,"class","hover:text-blue"),l(n,"data-sveltekit-preload-data",""),l(m,"type","hidden"),l(m,"name","owner_id"),m.hidden=!0,m.value=u=e[8].owner_id,l(k,"type","hidden"),l(k,"name","list_id"),k.hidden=!0,k.value=p=e[8].id,l(c,"action","?/deleteList"),l(c,"method","POST"),l(g,"class",O="flex gap-1 "+(e[1]&&e[2]===e[8].id?"block":"hidden")),l(t,"role","presentation"),l(t,"class","mb-1 flex items-center justify-between gap-3"),this.first=t},m(F,N){ee(F,t,N),s(t,n),s(n,i),s(t,v),s(t,g),s(g,c),s(c,m),s(c,C),s(c,k),s(c,y),s(c,D),s(t,V),x||(te=[R(n,"click",e[5]),tt(Mt.call(null,c)),R(t,"mouseenter",B),R(t,"mouseleave",e[7])],x=!0)},p(F,N){e=F,N&1&&o!==(o=e[8].list_name+"")&&_e(i,o),N&1&&_!==(_="/dashboard?list="+e[8].list_name)&&l(n,"href",_),N&1&&u!==(u=e[8].owner_id)&&(m.value=u),N&1&&p!==(p=e[8].id)&&(k.value=p),N&7&&O!==(O="flex gap-1 "+(e[1]&&e[2]===e[8].id?"block":"hidden"))&&l(g,"class",O)},d(F){F&&f(t),x=!1,Xe(te)}}}function Ul(a){let e,t,n,o="All lists",i,_,v="Inbox",g,c=[],m=new Map,u,C,k=Je(a[0]);const p=y=>y[8].id;for(let y=0;y<k.length;y+=1){let D=cl(a,k,y),h=p(D);m.set(h,c[y]=fl(h,D))}return{c(){e=r("div"),t=r("ul"),n=r("a"),n.textContent=o,i=E(),_=r("a"),_.textContent=v,g=E();for(let y=0;y<c.length;y+=1)c[y].c();this.h()},l(y){e=d(y,"DIV",{class:!0});var D=b(e);t=d(D,"UL",{class:!0});var h=b(t);n=d(h,"A",{href:!0,"data-sveltekit-preload-data":!0,"data-svelte-h":!0}),z(n)!=="svelte-kdksb"&&(n.textContent=o),i=w(h),_=d(h,"A",{href:!0,"data-sveltekit-preload-data":!0,"data-svelte-h":!0}),z(_)!=="svelte-1qg4u8z"&&(_.textContent=v),g=w(h);for(let O=0;O<c.length;O+=1)c[O].l(h);h.forEach(f),D.forEach(f),this.h()},h(){l(n,"href","/dashboard"),l(n,"data-sveltekit-preload-data",""),l(_,"href","/dashboard?list=Inbox"),l(_,"data-sveltekit-preload-data",""),l(t,"class","flex flex-col text-lg"),l(e,"class","mt-3")},m(y,D){ee(y,e,D),s(e,t),s(t,n),s(t,i),s(t,_),s(t,g);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(t,null);u||(C=[R(n,"click",a[3]),R(_,"click",a[4])],u=!0)},p(y,[D]){D&7&&(k=Je(y[0]),c=Nt(c,D,p,1,y,k,m,t,wl,fl,null,cl))},i:De,o:De,d(y){y&&f(e);for(let D=0;D<c.length;D+=1)c[D].d();u=!1,Xe(C)}}}function Bl(a,e,t){let{listArray:n=[]}=e,o=!1,i="";const _=()=>ze.set(!1),v=()=>ze.set(!1),g=()=>ze.set(!1),c=u=>{t(1,o=!0),t(2,i=u.id)},m=()=>{t(1,o=!0),t(2,i="")};return a.$$set=u=>{"listArray"in u&&t(0,n=u.listArray)},[n,o,i,_,v,g,c,m]}class hl extends st{constructor(e){super(),at(this,e,Bl,Ul,lt,{listArray:0})}}function _l(a,e,t){const n=a.slice();return n[14]=e[t],n}function ml(a){let e,t=a[4].todo+"",n;return{c(){e=r("span"),n=ne(t),this.h()},l(o){e=d(o,"SPAN",{class:!0});var i=b(e);n=oe(i,t),i.forEach(f),this.h()},h(){l(e,"class","text-sm font-light")},m(o,i){ee(o,e,i),s(e,n)},p(o,i){i&16&&t!==(t=o[4].todo+"")&&_e(n,t)},d(o){o&&f(e)}}}function vl(a){let e,t=a[4].due_date+"",n;return{c(){e=r("span"),n=ne(t),this.h()},l(o){e=d(o,"SPAN",{class:!0});var i=b(e);n=oe(i,t),i.forEach(f),this.h()},h(){l(e,"class","text-sm font-light")},m(o,i){ee(o,e,i),s(e,n)},p(o,i){i&16&&t!==(t=o[4].due_date+"")&&_e(n,t)},d(o){o&&f(e)}}}function pl(a,e){let t,n=e[14].list_name+"",o,i;return{key:a,first:null,c(){t=r("option"),o=ne(n),this.h()},l(_){t=d(_,"OPTION",{});var v=b(t);o=oe(v,n),v.forEach(f),this.h()},h(){t.__value=i=e[14].list_name,Ie(t,t.__value),this.first=t},m(_,v){ee(_,t,v),s(t,o)},p(_,v){e=_,v&2&&n!==(n=e[14].list_name+"")&&_e(o,n),v&2&&i!==(i=e[14].list_name)&&(t.__value=i,Ie(t,t.__value))},d(_){_&&f(t)}}}function bl(a){let e,t=a[4].list_name+"",n;return{c(){e=r("span"),n=ne(t),this.h()},l(o){e=d(o,"SPAN",{class:!0});var i=b(e);n=oe(i,t),i.forEach(f),this.h()},h(){l(e,"class","text-sm font-light")},m(o,i){ee(o,e,i),s(e,n)},p(o,i){i&16&&t!==(t=o[4].list_name+"")&&_e(n,t)},d(o){o&&f(e)}}}function Hl(a){let e,t,n,o,i,_,v,g,c,m,u,C,k,p,y,D,h,O,V,x=[],te=new Map,B,F,N,K,S,P,$="add todo",ue,j,A=a[4].todo&&ml(a),U=a[4].dueDate&&vl(a),le=Je(a[1]);const G=T=>T[14].id;for(let T=0;T<le.length;T+=1){let L=_l(a,le,T),q=G(L);te.set(q,x[T]=pl(q,L))}let H=a[4].list_name&&bl(a);return{c(){e=r("div"),t=r("form"),n=r("div"),o=r("div"),i=r("input"),_=E(),v=r("input"),g=E(),c=r("div"),m=r("input"),C=E(),A&&A.c(),k=E(),p=r("div"),y=r("input"),h=E(),U&&U.c(),O=E(),V=r("select");for(let T=0;T<x.length;T+=1)x[T].c();F=E(),H&&H.c(),N=E(),K=r("input"),S=E(),P=r("button"),P.textContent=$,this.h()},l(T){e=d(T,"DIV",{class:!0});var L=b(e);t=d(L,"FORM",{method:!0,action:!0,class:!0});var q=b(t);n=d(q,"DIV",{class:!0});var ie=b(n);o=d(ie,"DIV",{});var Z=b(o);i=d(Z,"INPUT",{type:!0,class:!0}),_=w(Z),v=d(Z,"INPUT",{type:!0,name:!0}),Z.forEach(f),g=w(ie),c=d(ie,"DIV",{class:!0});var ce=b(c);m=d(ce,"INPUT",{type:!0,name:!0,"aria-invalid":!0,class:!0,placeholder:!0}),C=w(ce),A&&A.l(ce),k=w(ce),p=d(ce,"DIV",{class:!0});var J=b(p);y=d(J,"INPUT",{type:!0,name:!0,"aria-invalid":!0,class:!0}),h=w(J),U&&U.l(J),O=w(J),V=d(J,"SELECT",{name:!0,"aria-invalid":!0,id:!0,class:!0});var Re=b(V);for(let se=0;se<x.length;se+=1)x[se].l(Re);Re.forEach(f),F=w(J),H&&H.l(J),N=w(J),K=d(J,"INPUT",{type:!0,name:!0}),J.forEach(f),ce.forEach(f),ie.forEach(f),S=w(q),P=d(q,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),z(P)!=="svelte-8gbbau"&&(P.textContent=$),q.forEach(f),L.forEach(f),this.h()},h(){l(i,"type","checkbox"),l(i,"class","mt-1 h-5 w-5"),i.disabled=!0,l(v,"type","hidden"),l(v,"name","owner_id"),v.value=a[0],l(m,"type","text"),l(m,"name","todo"),l(m,"aria-invalid",u=a[4].todo?"true":void 0),l(m,"class","w-64 border-b border-b-gray-300 py-1 text-lg focus:border-b focus:border-b-blue focus:outline-none"),l(m,"placeholder","Todo"),l(y,"type","date"),l(y,"name","due_date"),l(y,"aria-invalid",D=a[4].due_date?"true":void 0),l(y,"class","rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"),l(V,"name","list"),l(V,"aria-invalid",B=a[4].list_name?"true":void 0),l(V,"id","list"),l(V,"class","rounded-lg border border-gray-300 px-2 text-sm focus:border-blue focus:outline-none"),a[3].list_name===void 0&&Al(()=>a[13].call(V)),l(K,"type","hidden"),l(K,"name","list_id"),K.value=a[2],l(p,"class","flex space-x-5"),l(c,"class","flex flex-col space-y-3"),l(n,"class","flex items-start gap-6"),l(P,"class","mt-8 rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black"),l(P,"type","submit"),l(t,"method","POST"),l(t,"action","?/addTodo"),l(t,"class","flex items-end justify-between space-x-6"),l(e,"class","rounded-lg border border-gray-500 px-8 py-4 focus-within:border-blue")},m(T,L){ee(T,e,L),s(e,t),s(t,n),s(n,o),s(o,i),s(o,_),s(o,v),s(n,g),s(n,c),s(c,m),Ie(m,a[3].todo),s(c,C),A&&A.m(c,null),s(c,k),s(c,p),s(p,y),Ie(y,a[3].due_date),s(p,h),U&&U.m(p,null),s(p,O),s(p,V);for(let q=0;q<x.length;q+=1)x[q]&&x[q].m(V,null);dl(V,a[3].list_name,!0),s(p,F),H&&H.m(p,null),s(p,N),s(p,K),s(t,S),s(t,P),ue||(j=[R(m,"input",a[11]),R(y,"input",a[12]),R(V,"change",a[13]),R(V,"change",a[8]),tt(a[7].call(null,t))],ue=!0)},p(T,[L]){L&1&&(v.value=T[0]),L&16&&u!==(u=T[4].todo?"true":void 0)&&l(m,"aria-invalid",u),L&10&&m.value!==T[3].todo&&Ie(m,T[3].todo),T[4].todo?A?A.p(T,L):(A=ml(T),A.c(),A.m(c,k)):A&&(A.d(1),A=null),L&16&&D!==(D=T[4].due_date?"true":void 0)&&l(y,"aria-invalid",D),L&10&&Ie(y,T[3].due_date),T[4].dueDate?U?U.p(T,L):(U=vl(T),U.c(),U.m(p,O)):U&&(U.d(1),U=null),L&2&&(le=Je(T[1]),x=Nt(x,L,G,1,T,le,te,V,wl,pl,null,_l)),L&16&&B!==(B=T[4].list_name?"true":void 0)&&l(V,"aria-invalid",B),L&10&&dl(V,T[3].list_name),T[4].list_name?H?H.p(T,L):(H=bl(T),H.c(),H.m(p,N)):H&&(H.d(1),H=null),L&4&&(K.value=T[2])},i:De,o:De,d(T){T&&f(e),A&&A.d(),U&&U.d();for(let L=0;L<x.length;L+=1)x[L].d();H&&H.d(),ue=!1,Xe(j)}}}function ql(a,e,t){let n,o,i;Ce(a,vt,h=>t(10,n=h));let{data:_}=e,{owner_id:v}=e;const{form:g,errors:c,enhance:m}=Il(_,{resetForm:!0,onResult({result:h}){h.type==="success"&&vt.set(!1)}});Ce(a,g,h=>t(3,o=h)),Ce(a,c,h=>t(4,i=h));let{listArray:u=[]}=e,C="";function k(){const h=u.find(O=>O.list_name===o.list_name);h&&t(2,C=h.id)}function p(){o.todo=this.value,g.set(o),t(1,u)}function y(){o.due_date=this.value,g.set(o),t(1,u)}function D(){o.list_name=Ll(this),g.set(o),t(1,u)}return a.$$set=h=>{"data"in h&&t(9,_=h.data),"owner_id"in h&&t(0,v=h.owner_id),"listArray"in h&&t(1,u=h.listArray)},a.$$.update=()=>{a.$$.dirty&1024&&n&&k()},[v,u,C,o,i,g,c,m,k,_,n,p,y,D]}class Fl extends st{constructor(e){super(),at(this,e,ql,Hl,lt,{data:9,owner_id:0,listArray:1})}}function gl(a){let e,t=a[1].list_name+"",n;return{c(){e=r("span"),n=ne(t),this.h()},l(o){e=d(o,"SPAN",{class:!0});var i=b(e);n=oe(i,t),i.forEach(f),this.h()},h(){l(e,"class","text-sm font-light")},m(o,i){ee(o,e,i),s(e,n)},p(o,i){i&2&&t!==(t=o[1].list_name+"")&&_e(n,t)},d(o){o&&f(e)}}}function jl(a){let e,t,n,o,i,_,v,g,c="add list",m,u,C=a[1].list_name&&gl(a);return{c(){e=r("form"),t=r("input"),n=E(),o=r("input"),_=E(),C&&C.c(),v=E(),g=r("button"),g.textContent=c,this.h()},l(k){e=d(k,"FORM",{method:!0,action:!0,class:!0});var p=b(e);t=d(p,"INPUT",{type:!0,name:!0}),n=w(p),o=d(p,"INPUT",{type:!0,name:!0,"aria-invalid":!0,placeholder:!0,class:!0}),_=w(p),C&&C.l(p),v=w(p),g=d(p,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(g)!=="svelte-ctkmpa"&&(g.textContent=c),p.forEach(f),this.h()},h(){l(t,"type","hidden"),l(t,"name","owner_id"),t.value=a[0],l(o,"type","text"),l(o,"name","list_name"),l(o,"aria-invalid",i=a[1].list?"true":void 0),l(o,"placeholder","Add list"),l(o,"class","flex-1 border-b border-b-gray-300 bg-transparent py-1 focus:border-b focus:border-b-blue focus:outline-none"),o.required=!0,l(g,"type","submit"),l(g,"class","w-auto rounded-lg border border-gray-400 px-2 py-1 font-mono text-xs text-gray-400 hover:bg-gray-400 hover:text-black"),l(e,"method","POST"),l(e,"action","?/addList"),l(e,"class","mt-5 flex flex-col items-start space-y-3")},m(k,p){ee(k,e,p),s(e,t),s(e,n),s(e,o),Ie(o,a[2].list_name),s(e,_),C&&C.m(e,null),s(e,v),s(e,g),m||(u=[R(o,"input",a[7]),tt(a[5].call(null,e))],m=!0)},p(k,[p]){p&1&&(t.value=k[0]),p&2&&i!==(i=k[1].list?"true":void 0)&&l(o,"aria-invalid",i),p&4&&o.value!==k[2].list_name&&Ie(o,k[2].list_name),k[1].list_name?C?C.p(k,p):(C=gl(k),C.c(),C.m(e,v)):C&&(C.d(1),C=null)},i:De,o:De,d(k){k&&f(e),C&&C.d(),m=!1,Xe(u)}}}function zl(a,e,t){let n,o,{data:i}=e,{owner_id:_}=e;const{form:v,errors:g,enhance:c}=Il(i,{resetForm:!0,warnings:{duplicateId:!1},onResult({result:u}){u.type==="success"&&Pt.set(!1)}});Ce(a,v,u=>t(2,o=u)),Ce(a,g,u=>t(1,n=u));function m(){o.list_name=this.value,v.set(o)}return a.$$set=u=>{"data"in u&&t(6,i=u.data),"owner_id"in u&&t(0,_=u.owner_id)},[_,n,o,v,g,c,i,m]}class yl extends st{constructor(e){super(),at(this,e,zl,jl,lt,{data:6,owner_id:0})}}function kl(a,e,t){const n=a.slice();return n[17]=e[t],n}function Tl(a){let e,t="No todos here. Add one now! 🎉";return{c(){e=r("p"),e.textContent=t,this.h()},l(n){e=d(n,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-11i3vc9"&&(e.textContent=t),this.h()},h(){l(e,"class","rounded-lg border px-8 py-4 text-lg")},m(n,o){ee(n,e,o)},d(n){n&&f(e)}}}function El(a,e){let t,n,o;return n=new Sl({props:{todo:e[17].todo,dueDate:e[17].due_date,list:e[17].list.list_name,completed:e[17].completed,id:e[17].id}}),{key:a,first:null,c(){t=ul(),He(n.$$.fragment),this.h()},l(i){t=ul(),qe(n.$$.fragment,i),this.h()},h(){this.first=t},m(i,_){ee(i,t,_),Fe(n,i,_),o=!0},p(i,_){e=i;const v={};_&8&&(v.todo=e[17].todo),_&8&&(v.dueDate=e[17].due_date),_&8&&(v.list=e[17].list.list_name),_&8&&(v.completed=e[17].completed),_&8&&(v.id=e[17].id),n.$set(v)},i(i){o||(Ee(n.$$.fragment,i),o=!0)},o(i){we(n.$$.fragment,i),o=!1},d(i){i&&f(t),je(n,i)}}}function Rl(a){var Gt,Zt,Jt,Xt,Yt,$t;let e,t,n,o,i,_,v,g,c,m,u='<span class="sr-only">toDo</span> <a href="/"><img class="h-8 w-auto" src="/favicon.png" alt="toDo homepage"/></a>',C,k,p='<span class="sr-only">Close menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>',y,D,h,O,V,x="WELCOME BACK,",te,B,F=((Gt=a[7])==null?void 0:Gt.username)+"",N,K,S,P,$,ue="Lists",j,A,U="+",le,G,H,T,L,q,ie,Z,ce='<button type="submit" class="mt-4 rounded-lg border border-gray-500 px-1 py-0.5 font-mono text-xs">Logout</button>',J,Re,se,re,Ae,Ut='<img src="/favicon.png" class="mb-4 h-10 w-auto" alt="Logo"/>',pt,Le,xe,Bt="WELCOME BACK,",bt,Oe,Ht=((Zt=a[7])==null?void 0:Zt.username)+"",gt,yt,me,qt='<button type="submit" class="mt-4 rounded-lg border border-gray-500 px-1 py-0.5 font-mono text-xs">Logout</button>',kt,de,ve,Ve,Ft="Lists",Tt,pe,jt="+",Et,be,wt,Me,Pe,nt,It,Q,ge,Ke,Ye=a[0]?`Todos in ${a[0]}`:"All todos",ot,Ct,Qe,fe,zt='<span class="sr-only">Open main menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',Dt,$e,At,ye,Rt="+ New Task",Lt,Ne,ke,it,xt,rt,X=[],Kt=new Map,he,Ot,Qt;e=new Vl({}),G=new hl({props:{listArray:a[1]}}),L=new yl({props:{data:a[8],owner_id:(Jt=a[7])==null?void 0:Jt.id}}),be=new hl({props:{listArray:a[1]}}),Pe=new yl({props:{data:a[8],owner_id:(Xt=a[7])==null?void 0:Xt.id}}),ke=new Fl({props:{data:a[9],listArray:a[2],owner_id:(Yt=a[7])==null?void 0:Yt.id}});let Y=(($t=a[3])==null?void 0:$t.length)===0&&Tl(),et=Je(a[3]);const Wt=I=>I[17].id;for(let I=0;I<et.length;I+=1){let M=kl(a,et,I),W=Wt(M);Kt.set(W,X[I]=El(W,M))}return{c(){He(e.$$.fragment),t=E(),n=r("main"),o=r("div"),i=r("div"),_=r("div"),v=E(),g=r("div"),c=r("div"),m=r("a"),m.innerHTML=u,C=E(),k=r("button"),k.innerHTML=p,y=E(),D=r("div"),h=r("div"),O=r("div"),V=r("p"),V.textContent=x,te=E(),B=r("a"),N=ne(F),K=E(),S=r("div"),P=r("div"),$=r("h2"),$.textContent=ue,j=E(),A=r("button"),A.textContent=U,le=E(),He(G.$$.fragment),H=E(),T=r("div"),He(L.$$.fragment),ie=E(),Z=r("form"),Z.innerHTML=ce,Re=E(),se=r("div"),re=r("div"),Ae=r("a"),Ae.innerHTML=Ut,pt=E(),Le=r("div"),xe=r("p"),xe.textContent=Bt,bt=E(),Oe=r("a"),gt=ne(Ht),yt=E(),me=r("form"),me.innerHTML=qt,kt=E(),de=r("div"),ve=r("div"),Ve=r("h2"),Ve.textContent=Ft,Tt=E(),pe=r("button"),pe.textContent=jt,Et=E(),He(be.$$.fragment),wt=E(),Me=r("div"),He(Pe.$$.fragment),It=E(),Q=r("div"),ge=r("div"),Ke=r("h2"),ot=ne(Ye),Ct=E(),Qe=r("div"),fe=r("button"),fe.innerHTML=zt,Dt=E(),$e=r("div"),At=E(),ye=r("button"),ye.textContent=Rt,Lt=E(),Ne=r("div"),He(ke.$$.fragment),xt=E(),Y&&Y.c(),rt=E();for(let I=0;I<X.length;I+=1)X[I].c();this.h()},l(I){qe(e.$$.fragment,I),t=w(I),n=d(I,"MAIN",{});var M=b(n);o=d(M,"DIV",{class:!0});var W=b(o);i=d(W,"DIV",{class:!0,role:!0,"aria-modal":!0});var Se=b(i);_=d(Se,"DIV",{class:!0}),b(_).forEach(f),v=w(Se),g=d(Se,"DIV",{class:!0});var Ue=b(g);c=d(Ue,"DIV",{class:!0});var Be=b(c);m=d(Be,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(m)!=="svelte-1qdcqyv"&&(m.innerHTML=u),C=w(Be),k=d(Be,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(k)!=="svelte-1d2c5z7"&&(k.innerHTML=p),Be.forEach(f),y=w(Ue),D=d(Ue,"DIV",{class:!0});var dt=b(D);h=d(dt,"DIV",{class:!0});var el=b(h);O=d(el,"DIV",{});var ut=b(O);V=d(ut,"P",{class:!0,"data-svelte-h":!0}),z(V)!=="svelte-spigk"&&(V.textContent=x),te=w(ut),B=d(ut,"A",{href:!0,class:!0});var tl=b(B);N=oe(tl,F),tl.forEach(f),ut.forEach(f),el.forEach(f),K=w(dt),S=d(dt,"DIV",{class:!0});var Te=b(S);P=d(Te,"DIV",{class:!0});var ct=b(P);$=d(ct,"H2",{class:!0,"data-svelte-h":!0}),z($)!=="svelte-18bsbzl"&&($.textContent=ue),j=w(ct),A=d(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),z(A)!=="svelte-l8tdcc"&&(A.textContent=U),ct.forEach(f),le=w(Te),qe(G.$$.fragment,Te),H=w(Te),T=d(Te,"DIV",{class:!0});var ll=b(T);qe(L.$$.fragment,ll),ll.forEach(f),ie=w(Te),Z=d(Te,"FORM",{action:!0,method:!0,"data-svelte-h":!0}),z(Z)!=="svelte-xsfaq2"&&(Z.innerHTML=ce),Te.forEach(f),dt.forEach(f),Ue.forEach(f),Se.forEach(f),Re=w(W),se=d(W,"DIV",{class:!0});var ft=b(se);re=d(ft,"DIV",{class:!0});var We=b(re);Ae=d(We,"A",{href:!0,"data-svelte-h":!0}),z(Ae)!=="svelte-teqqoz"&&(Ae.innerHTML=Ut),pt=w(We),Le=d(We,"DIV",{});var ht=b(Le);xe=d(ht,"P",{class:!0,"data-svelte-h":!0}),z(xe)!=="svelte-spigk"&&(xe.textContent=Bt),bt=w(ht),Oe=d(ht,"A",{href:!0,class:!0});var sl=b(Oe);gt=oe(sl,Ht),sl.forEach(f),ht.forEach(f),yt=w(We),me=d(We,"FORM",{action:!0,method:!0,"data-svelte-h":!0}),z(me)!=="svelte-6bibxi"&&(me.innerHTML=qt),We.forEach(f),kt=w(ft),de=d(ft,"DIV",{class:!0});var Ge=b(de);ve=d(Ge,"DIV",{class:!0});var _t=b(ve);Ve=d(_t,"H2",{class:!0,"data-svelte-h":!0}),z(Ve)!=="svelte-18bsbzl"&&(Ve.textContent=Ft),Tt=w(_t),pe=d(_t,"BUTTON",{class:!0,"data-svelte-h":!0}),z(pe)!=="svelte-kz8pqa"&&(pe.textContent=jt),_t.forEach(f),Et=w(Ge),qe(be.$$.fragment,Ge),wt=w(Ge),Me=d(Ge,"DIV",{class:!0});var al=b(Me);qe(Pe.$$.fragment,al),al.forEach(f),Ge.forEach(f),ft.forEach(f),It=w(W),Q=d(W,"DIV",{class:!0});var ae=b(Q);ge=d(ae,"DIV",{class:!0});var mt=b(ge);Ke=d(mt,"H2",{class:!0});var nl=b(Ke);ot=oe(nl,Ye),nl.forEach(f),Ct=w(mt),Qe=d(mt,"DIV",{class:!0});var ol=b(Qe);fe=d(ol,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),z(fe)!=="svelte-41n276"&&(fe.innerHTML=zt),ol.forEach(f),mt.forEach(f),Dt=w(ae),$e=d(ae,"DIV",{class:!0}),b($e).forEach(f),At=w(ae),ye=d(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),z(ye)!=="svelte-1gkcvyq"&&(ye.textContent=Rt),Lt=w(ae),Ne=d(ae,"DIV",{class:!0});var il=b(Ne);qe(ke.$$.fragment,il),il.forEach(f),xt=w(ae),Y&&Y.l(ae),rt=w(ae);for(let Vt=0;Vt<X.length;Vt+=1)X[Vt].l(ae);ae.forEach(f),W.forEach(f),M.forEach(f),this.h()},h(){l(_,"class","fixed inset-0 z-50"),l(m,"href","/dashboard"),l(m,"class","-m-1.5 p-1.5"),l(k,"type","button"),l(k,"class","-m-2.5 rounded-md p-2.5 text-gray-700"),l(c,"class","flex items-center justify-between px-5"),l(V,"class","font-mono text-xs"),l(B,"href","/dashboard"),l(B,"class","text-2xl"),l(h,"class","border-b px-5 py-10"),l($,"class","mb-2 text-2xl font-medium"),l(A,"class","relative mb-2 text-2xl transition ease-in-out hover:rotate-45 hover:scale-110 hover:text-blue hover:duration-100"),l(P,"class","flex justify-between"),l(T,"class",q="mb-5 "+(a[4]?"block":"hidden")),l(Z,"action","/auth/logout"),l(Z,"method","POST"),l(S,"class","px-5 py-10"),l(D,"class","flow-root"),l(g,"class","fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"),l(i,"class",J=(a[6]?"block":"hidden")+" lg:hidden"),l(i,"role","dialog"),l(i,"aria-modal","true"),l(Ae,"href","/"),l(xe,"class","font-mono text-xs"),l(Oe,"href","/dashboard"),l(Oe,"class","text-2xl"),l(me,"action","/auth/logout"),l(me,"method","POST"),l(re,"class","border-b px-20 py-10"),l(Ve,"class","mb-2 text-2xl font-medium"),l(pe,"class","relative mb-2 text-2xl transition ease-in-out hover:rotate-45 hover:scale-110 hover:text-blue hover:duration-100"),l(ve,"class","flex justify-between"),l(Me,"class",nt="mb-5 "+(a[4]?"block":"hidden")),l(de,"class","px-20 py-10"),l(se,"class","hidden lg:col-span-2 lg:flex lg:flex-col"),l(Ke,"class","text-2xl"),l(fe,"type","button"),l(fe,"class","-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"),l(Qe,"class","flex lg:hidden"),l(ge,"class","flex justify-between"),l($e,"class","mb-5 mt-5 h-[1px] bg-black"),l(ye,"class","mb-5 rounded-lg bg-indigo-600 px-4 py-2 text-white"),l(Ne,"class",it="mb-5 "+(a[5]?"block":"hidden")),l(Q,"class","col-span-9 border-l px-10 py-10 sm:px-20 lg:col-span-7"),l(o,"class","mx-auto grid grid-cols-9")},m(I,M){Fe(e,I,M),ee(I,t,M),ee(I,n,M),s(n,o),s(o,i),s(i,_),s(i,v),s(i,g),s(g,c),s(c,m),s(c,C),s(c,k),s(g,y),s(g,D),s(D,h),s(h,O),s(O,V),s(O,te),s(O,B),s(B,N),s(D,K),s(D,S),s(S,P),s(P,$),s(P,j),s(P,A),s(S,le),Fe(G,S,null),s(S,H),s(S,T),Fe(L,T,null),s(S,ie),s(S,Z),s(o,Re),s(o,se),s(se,re),s(re,Ae),s(re,pt),s(re,Le),s(Le,xe),s(Le,bt),s(Le,Oe),s(Oe,gt),s(re,yt),s(re,me),s(se,kt),s(se,de),s(de,ve),s(ve,Ve),s(ve,Tt),s(ve,pe),s(de,Et),Fe(be,de,null),s(de,wt),s(de,Me),Fe(Pe,Me,null),s(o,It),s(o,Q),s(Q,ge),s(ge,Ke),s(Ke,ot),s(ge,Ct),s(ge,Qe),s(Qe,fe),s(Q,Dt),s(Q,$e),s(Q,At),s(Q,ye),s(Q,Lt),s(Q,Ne),Fe(ke,Ne,null),s(Q,xt),Y&&Y.m(Q,null),s(Q,rt);for(let W=0;W<X.length;W+=1)X[W]&&X[W].m(Q,null);he=!0,Ot||(Qt=[R(m,"click",a[14]),R(k,"click",a[15]),R(A,"click",a[11]),R(pe,"click",a[11]),R(fe,"click",a[16]),R(ye,"click",a[10])],Ot=!0)},p(I,[M]){var Be;const W={};M&2&&(W.listArray=I[1]),G.$set(W),(!he||M&16&&q!==(q="mb-5 "+(I[4]?"block":"hidden")))&&l(T,"class",q),(!he||M&64&&J!==(J=(I[6]?"block":"hidden")+" lg:hidden"))&&l(i,"class",J);const Se={};M&2&&(Se.listArray=I[1]),be.$set(Se),(!he||M&16&&nt!==(nt="mb-5 "+(I[4]?"block":"hidden")))&&l(Me,"class",nt),(!he||M&1)&&Ye!==(Ye=I[0]?`Todos in ${I[0]}`:"All todos")&&_e(ot,Ye);const Ue={};M&4&&(Ue.listArray=I[2]),ke.$set(Ue),(!he||M&32&&it!==(it="mb-5 "+(I[5]?"block":"hidden")))&&l(Ne,"class",it),((Be=I[3])==null?void 0:Be.length)===0?Y||(Y=Tl(),Y.c(),Y.m(Q,rt)):Y&&(Y.d(1),Y=null),M&8&&(et=Je(I[3]),Ol(),X=Nt(X,M,Wt,1,I,et,Kt,Q,Ml,El,null,kl),xl())},i(I){if(!he){Ee(e.$$.fragment,I),Ee(G.$$.fragment,I),Ee(L.$$.fragment,I),Ee(be.$$.fragment,I),Ee(Pe.$$.fragment,I),Ee(ke.$$.fragment,I);for(let M=0;M<et.length;M+=1)Ee(X[M]);he=!0}},o(I){we(e.$$.fragment,I),we(G.$$.fragment,I),we(L.$$.fragment,I),we(be.$$.fragment,I),we(Pe.$$.fragment,I),we(ke.$$.fragment,I);for(let M=0;M<X.length;M+=1)we(X[M]);he=!1},d(I){I&&(f(t),f(n)),je(e,I),je(G),je(L),je(be),je(Pe),je(ke),Y&&Y.d();for(let M=0;M<X.length;M+=1)X[M].d();Ot=!1,Xe(Qt)}}}function Kl(a,e,t){let n,o,i,_,v,g,c;Ce(a,Pt,x=>t(4,v=x)),Ce(a,vt,x=>t(5,g=x)),Ce(a,ze,x=>t(6,c=x));let{data:m}=e,{form:u}=e;const{profile:C,addListForm:k,addTodoForm:p}=m;function y(){vt.set(!g)}function D(){Pt.set(!v)}const h=()=>ze.set(!1),O=()=>ze.set(!1),V=()=>ze.set(!0);return a.$$set=x=>{"data"in x&&t(12,m=x.data),"form"in x&&t(13,u=x.form)},a.$$.update=()=>{a.$$.dirty&4096&&t(3,n=m.todo),a.$$.dirty&4096&&t(2,o=m.list),a.$$.dirty&4096&&t(1,i=m.listDashboard),a.$$.dirty&4096&&t(0,_=m.listQueried),a.$$.dirty&8192&&(u!=null&&u.addTodoSuccess?Ze.success("Todo added!"):u!=null&&u.completeTodoSuccess&&(u==null?void 0:u.completed)==="on"?Ze.success("Todo completed!"):u!=null&&u.completeTodoSuccess&&(u==null?void 0:u.completed)==="off"?Ze.success("Todo un-completed!"):u!=null&&u.deleteTodoSuccess?Ze.success("Todo deleted!"):u!=null&&u.addListSuccess?Ze.success("List added!"):u!=null&&u.deleteListSuccess&&Ze.success("List deleted!"))},[_,i,o,n,v,g,c,C,k,p,y,D,m,u,h,O,V]}class Yl extends st{constructor(e){super(),at(this,e,Kl,Rl,lt,{data:12,form:13})}}export{Yl as component};
