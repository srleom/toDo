import{s as N,h as O,n as F,r as U,e as q}from"../chunks/scheduler.e04b059d.js";import{S as R,i as Y,g as h,s as V,h as _,j as y,y as M,c as D,f as x,k as s,a as B,z as u,C as z,B as G,m as J,n as K,o as Q}from"../chunks/index.7833e292.js";import{s as W}from"../chunks/index.dfa8a9aa.js";import"../chunks/singletons.5f32a592.js";/* empty css                                                         */function A(o){let e,t=o[0].username+"",d;return{c(){e=h("span"),d=J(t),this.h()},l(n){e=_(n,"SPAN",{class:!0});var a=y(e);d=K(a,t),a.forEach(x),this.h()},h(){s(e,"class","text-sm font-light text-red-500")},m(n,a){B(n,e,a),u(e,d)},p(n,a){a&1&&t!==(t=n[0].username+"")&&Q(d,t)},d(n){n&&x(e)}}}function X(o){let e,t,d='<a href="/"><img class="mx-auto h-10 w-auto" src="/favicon.png" alt="Your Company"/></a> <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">Create profile</h2>',n,a,i,f,c,w="Username",p,g,l,C,L,P,b,j='<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create profile</button>',T,H,r=o[0].username&&A(o);return{c(){e=h("div"),t=h("div"),t.innerHTML=d,n=V(),a=h("div"),i=h("form"),f=h("div"),c=h("label"),c.textContent=w,p=V(),g=h("div"),l=h("input"),L=V(),r&&r.c(),P=V(),b=h("div"),b.innerHTML=j,this.h()},l(m){e=_(m,"DIV",{class:!0});var v=y(e);t=_(v,"DIV",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-a8kx4k"&&(t.innerHTML=d),n=D(v),a=_(v,"DIV",{class:!0});var S=y(a);i=_(S,"FORM",{class:!0,action:!0,method:!0});var k=y(i);f=_(k,"DIV",{});var E=y(f);c=_(E,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),M(c)!=="svelte-n76fj0"&&(c.textContent=w),p=D(E),g=_(E,"DIV",{class:!0});var I=y(g);l=_(I,"INPUT",{id:!0,name:!0,type:!0,"aria-invalid":!0,autocomplete:!0,class:!0}),L=D(I),r&&r.l(I),I.forEach(x),E.forEach(x),P=D(k),b=_(k,"DIV",{"data-svelte-h":!0}),M(b)!=="svelte-zf0804"&&(b.innerHTML=j),k.forEach(x),S.forEach(x),v.forEach(x),this.h()},h(){s(t,"class","sm:mx-auto sm:w-full sm:max-w-sm"),s(c,"for","username"),s(c,"class","block text-sm font-medium leading-6 text-gray-900"),s(l,"id","username"),s(l,"name","username"),s(l,"type","text"),s(l,"aria-invalid",C=o[0].username?"true":void 0),s(l,"autocomplete","given-name"),l.required=!0,s(l,"class","block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),s(g,"class","mt-2"),s(i,"class","space-y-6"),s(i,"action","?/createProfile"),s(i,"method","POST"),i.noValidate=!0,s(a,"class","mt-10 sm:mx-auto sm:w-full sm:max-w-sm"),s(e,"class","flex min-h-full flex-col justify-center px-6 py-12 lg:px-8")},m(m,v){B(m,e,v),u(e,t),u(e,n),u(e,a),u(a,i),u(i,f),u(f,c),u(f,p),u(f,g),u(g,l),z(l,o[1].username),u(g,L),r&&r.m(g,null),u(i,P),u(i,b),T||(H=[G(l,"input",o[6]),O(o[4].call(null,i))],T=!0)},p(m,[v]){v&1&&C!==(C=m[0].username?"true":void 0)&&s(l,"aria-invalid",C),v&2&&l.value!==m[1].username&&z(l,m[1].username),m[0].username?r?r.p(m,v):(r=A(m),r.c(),r.m(g,null)):r&&(r.d(1),r=null)},i:F,o:F,d(m){m&&x(e),r&&r.d(),T=!1,U(H)}}}function Z(o,e,t){let d,n,{data:a}=e;const{form:i,errors:f,enhance:c}=W(a.createProfileForm);q(o,i,p=>t(1,n=p)),q(o,f,p=>t(0,d=p));function w(){n.username=this.value,i.set(n)}return o.$$set=p=>{"data"in p&&t(5,a=p.data)},[d,n,i,f,c,a,w]}class ne extends R{constructor(e){super(),Y(this,e,Z,X,N,{data:5})}}export{ne as component};
