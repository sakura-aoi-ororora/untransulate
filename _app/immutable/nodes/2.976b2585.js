import{s as R,n as E,r as S}from"../chunks/scheduler.e108d1fd.js";import{S as k,i as j,g as x,s as T,h as d,x as b,c as y,j as w,f as i,k as h,a as p,z as _,A}from"../chunks/index.5cee8edd.js";const v="https://script.google.com/macros/s/AKfycbwy0DX4Rlms3M_y3EOo5ZBtSDdUoOT2556ToxRwBYEkdlAV_aqALhUfFqCdrVJEgRBSFA/exec?";async function q(o,a){const u={text:o,languages:JSON.stringify(a)},s=new URLSearchParams(u);console.log(v+s);const c=(await(await fetch(v+s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).json()).message;return console.log(c),c}function B(o){let a,u="This page is Home!",s,e,c,l,m="transulate",f,n,g,C;return{c(){a=x("h1"),a.textContent=u,s=T(),e=x("textarea"),c=T(),l=x("button"),l.textContent=m,f=T(),n=x("textarea"),this.h()},l(t){a=d(t,"H1",{"data-svelte-h":!0}),b(a)!=="svelte-hl3qmb"&&(a.textContent=u),s=y(t),e=d(t,"TEXTAREA",{class:!0,placeholder:!0}),w(e).forEach(i),c=y(t),l=d(t,"BUTTON",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-8rumz"&&(l.textContent=m),f=y(t),n=d(t,"TEXTAREA",{class:!0,placeholder:!0}),w(n).forEach(i),this.h()},h(){h(e,"class","textarea textarea-bordered textarea-primary"),h(e,"placeholder","source"),h(l,"class","btn btn-accent"),h(n,"class","textarea textarea-bordered textarea-secondary"),h(n,"placeholder","target")},m(t,r){p(t,a,r),p(t,s,r),p(t,e,r),_(e,o[0]),p(t,c,r),p(t,l,r),p(t,f,r),p(t,n,r),_(n,o[1]),g||(C=[A(e,"input",o[3]),A(l,"click",o[2]),A(n,"input",o[4])],g=!0)},p(t,[r]){r&1&&_(e,t[0]),r&2&&_(n,t[1])},i:E,o:E,d(t){t&&(i(a),i(s),i(e),i(c),i(l),i(f),i(n)),g=!1,S(C)}}}function L(o,a,u){let s="",e="";const c=["ja","eu","en","gn","ja"];async function l(){q(s,c).then(n=>u(1,e=n))}function m(){s=this.value,u(0,s)}function f(){e=this.value,u(1,e)}return[s,e,l,m,f]}class P extends k{constructor(a){super(),j(this,a,L,B,R,{})}}export{P as component};