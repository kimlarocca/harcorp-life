import{D as f,m as g,h as r,o as _,a as i,e as t,b as o,w as l,u as p,C as u,E as b,f as x,l as v}from"./entry.ae0c1078.js";const d=""+globalThis.__publicAssetsURL("images/logo.png");const C={class:"container"},y=t("img",{src:d,class:"logo",alt:"harcorp life logo"},null,-1),D={__name:"TheHeader",setup(m){const e=f(),n=g([{label:"Personal",command:()=>{e.push("/personal")}},{label:"Commercial",command:()=>{e.push("/commercial")}},{label:"Employee Benefits",command:()=>{e.push("/group")}},{label:"Financial Education",command:()=>{e.push("/education")}},{label:"About Us",command:()=>{e.push("/about")}},{label:"Contact Us",command:()=>{e.push("/contact")}}]);return(a,s)=>{const c=u,h=r("Menubar");return _(),i("header",null,[t("div",C,[o(h,{model:p(n)},{start:l(()=>[o(c,{to:"/",class:"plain flex"},{default:l(()=>[y]),_:1})]),_:1},8,["model"])])])}}},E={class:"container text-center mb-8"},T=t("img",{src:d,class:"logo",alt:"harcorp logo"},null,-1),k=x('<div class="lg:flex justify-content-center mt-4 mb-3"><p>Tele: <a href="tel:202-422-2453" class="mr-4">202-422-2453 </a></p><p> Email: <a href="mailto:info@harcorplife.com" target="_blank" class="mr-4"> info@harcorplife.com </a></p><p>Address: 80 M ST SE Washington, DC 20003</p></div><p class="mb-2"> Company License #3002162539 <span class="mx-2">|</span> Company NPN: 20472977 </p>',2),w={__name:"TheFooter",setup(m){const e=new Date().getFullYear();return(n,a)=>{const s=r("Divider"),c=u;return _(),i("footer",E,[o(s,{class:"pt-4 pb-7"}),o(c,{to:"/",class:"plain"},{default:l(()=>[T]),_:1}),k,t("p",null,"Copyright © "+b(p(e))+" Harcorp Life LLC. All Rights Reserved.",1)])}}},L={};function N(m,e){const n=D,a=r("router-view"),s=w;return _(),i("div",null,[o(n),t("main",null,[o(a)]),o(s)])}const B=v(L,[["render",N]]);export{B as default};