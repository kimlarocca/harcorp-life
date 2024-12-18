import{H as $,T as V,a as W}from"./components.6e385815.js";import{k as q,m as v,p as O,q as I,s as U,t as J,u as b,v as G,x as Q,y as X,a as H,b as D,w as P,e as p,z,A as N,B as F,h as Y,o as M,i as A}from"./entry.fd10f7e5.js";import"./composables.0a84a092.js";const Z=()=>null;function tt(...n){var c;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,e,t={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??Z,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=q(),o=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],h=()=>o()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:v(o()??((c=t.default)==null?void 0:c.call(t))??null),pending:v(!h()),error:v(a.payload._errors[s]?O(a.payload._errors[s]):null)});const i={...a._asyncData[s]};i.refresh=i.execute=(l={})=>{if(a._asyncDataPromises[s]){if(l.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(l._initial&&h())return o();i.pending.value=!0;const g=new Promise((f,m)=>{try{f(e(a))}catch(k){m(k)}}).then(f=>{if(g.cancelled)return a._asyncDataPromises[s];t.transform&&(f=t.transform(f)),t.pick&&(f=et(f,t.pick)),i.data.value=f,i.error.value=null}).catch(f=>{var m;if(g.cancelled)return a._asyncDataPromises[s];i.error.value=f,i.data.value=b(((m=t.default)==null?void 0:m.call(t))??null)}).finally(()=>{g.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=O(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const u=()=>i.refresh({_initial:!0}),d=t.server!==!1&&a.payload.serverRendered;{const l=G();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const f=l._nuxtOnBeforeMountCbs;l&&(I(()=>{f.forEach(m=>{m()}),f.splice(0,f.length)}),U(()=>f.splice(0,f.length)))}d&&a.isHydrating&&h()?i.pending.value=!1:l&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?l._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&J(t.watch,()=>i.refresh());const g=a.hook("app:data:refresh",f=>{if(!f||f.includes(s))return i.refresh()});l&&U(g)}const y=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(y,i),y}function et(n,r){const s={};for(const e of r)s[e]=n[e];return s}const E=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function st(n,r){r?r={...E,...r}:r=E;const s=j(r);return s.dispatch(n),s.toString()}const rt=Object.freeze(["prototype","__proto__","constructor"]);function j(n){let r="",s=new Map;const e=t=>{r+=t};return{toString(){return r},getContext(){return s},dispatch(t){return n.replacer&&(t=n.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const h=a.length;h<10?o="unknown:["+a+"]":o=a.slice(8,h-1),o=o.toLowerCase();let i=null;if((i=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):n.ignoreUnknown||this.unkown(t,o);else{let u=Object.keys(t);n.unorderedObjects&&(u=u.sort());let d=[];n.respectType!==!1&&!T(t)&&(d=rt),n.excludeKeys&&(u=u.filter(c=>!n.excludeKeys(c)),d=d.filter(c=>!n.excludeKeys(c))),e("object:"+(u.length+d.length)+":");const y=c=>{this.dispatch(c),e(":"),n.excludeValues||this.dispatch(t[c]),e(",")};for(const c of u)y(c);for(const c of d)y(c)}},array(t,a){if(a=a===void 0?n.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=new Map,h=t.map(i=>{const u=j(n);u.dispatch(i);for(const[d,y]of u.getContext())o.set(d,y);return u.toString()});return s=o,h.sort(),this.array(h,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),T(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,n.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,n.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const R="[native code] }",nt=R.length;function T(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-nt)===R}class B{constructor(r,s){r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||at).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new B([...this.words])}}const at={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},it={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,a=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,h=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<n.sigBytes*8;i++)s.push(r.charAt(h>>>6*(3-i)&63))}return s.join("")}},ot={parse(n){const r=n.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new B(s,r)}},ct={parse(n){return ot.parse(unescape(encodeURIComponent(n)))}};class lt{constructor(){this._data=new B,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new B,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=ct.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new B(s,a)}}class ut extends lt{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const L=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ft=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],S=[];class ht extends ut{constructor(){super(...arguments),this._hash=new B([...L])}reset(){super.reset(),this._hash=new B([...L])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],h=e[3],i=e[4],u=e[5],d=e[6],y=e[7];for(let c=0;c<64;c++){if(c<16)S[c]=r[s+c]|0;else{const C=S[c-15],x=(C<<25|C>>>7)^(C<<14|C>>>18)^C>>>3,w=S[c-2],K=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;S[c]=x+S[c-7]+K+S[c-16]}const l=i&u^~i&d,g=t&a^t&o^a&o,f=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),m=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),k=y+m+l+ft[c]+S[c],_=f+g;y=d,d=u,u=i,i=h+k|0,h=o,o=a,a=t,t=k+_|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+h|0,e[4]=e[4]+i|0,e[5]=e[5]+u|0,e[6]=e[6]+d|0,e[7]=e[7]+y|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function dt(n){return new ht().finalize(n).toString(it)}function pt(n,r={}){const s=typeof n=="string"?n:st(n,r);return dt(s).slice(0,10)}function yt(n,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],a=e.key||pt([t,b(e.baseURL),typeof n=="string"?n:"",b(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,h=Q(()=>{let x=n;return typeof x=="function"&&(x=x()),b(x)}),{server:i,lazy:u,default:d,transform:y,pick:c,watch:l,immediate:g,...f}=e,m=X({...f,cache:typeof e.cache=="boolean"?void 0:e.cache}),k={server:i,lazy:u,default:d,transform:y,pick:c,immediate:g,watch:[m,h,...l||[]]};let _;return tt(o,()=>{var w;return(w=_==null?void 0:_.abort)==null||w.call(_),_=typeof AbortController<"u"?new AbortController:{},typeof h.value=="string"&&h.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(h.value,{signal:_.signal,...m})},k)}async function mt(n,r,s,e){let t={personalizations:[{to:[{email:"info@harcorplife.com",name:"HarcorpLife.com"}]}],from:{email:"kim@4siteusa.com",name:"HarcorpLife.com"},subject:"New Contact Form Submission From HarcorpLife.com!",content:[{type:"text/plain",value:"New Contact Form Submission! User Email: "+s+" Name: "+n+" Phone: "+e+" Message: "+r},{type:"text/html",value:`<h1>New Contact Form Submission!</h1><p>User Email: ${s}</p><p>Name: ${n}</p><p>Phone: ${e}</p><p>Message: ${r}</p>`}]};await yt("/api/sendgrid",{method:"POST",body:t},"$tSbaNzRsym")}const gt={class:"secondary"},_t=p("section",{class:"secondary-hero mb-8"},[p("div",{class:"container grid"},[p("div",{class:"col"},[p("h1",null,"Contact Us")])])],-1),bt={class:"container"},wt=p("h3",{class:"mb-4"},"Please fill out the following form to contact us:",-1),vt={class:"mb-4"},Bt=p("label",{for:"userName"},"Full Name",-1),xt={class:"mb-4"},St=p("label",{for:"userEmail"},"Email",-1),kt={class:"mb-4"},Ct=p("label",{for:"userEmail"},"Phone (optional)",-1),Dt={class:"mb-4"},Pt=p("label",{for:"userMessage"},"Message",-1),zt={key:1},Mt={__name:"contact",setup(n){const r=v(""),s=v(""),e=v(""),t=v(""),a=v(!1),o=async()=>{mt(s.value,r.value,e.value,t.value),a.value=!0,s.value="",r.value="",e.value=""};return(h,i)=>{const u=V,d=W,y=$,c=Y("Button");return M(),H("div",gt,[D(y,{lang:"en"},{default:P(()=>[D(d,null,{default:P(()=>[D(u,null,{default:P(()=>[A("Harcorp Life LLC | Contact Us")]),_:1})]),_:1})]),_:1}),_t,p("section",bt,[wt,b(a)?(M(),H("p",zt," Thank you for contacting us! We will get back to you as soon as possible. ")):(M(),H("form",{key:0,onSubmit:i[4]||(i[4]=l=>o())},[p("div",vt,[Bt,z(p("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>F(r)?r.value=l:null),type:"text",id:"userName",name:"userName",required:""},null,512),[[N,b(r)]])]),p("div",xt,[St,z(p("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>F(s)?s.value=l:null),type:"email",id:"userEmail",name:"userEmail",required:""},null,512),[[N,b(s)]])]),p("div",kt,[Ct,z(p("input",{"onUpdate:modelValue":i[2]||(i[2]=l=>F(t)?t.value=l:null),type:"text",id:"userPhone",name:"userPhone"},null,512),[[N,b(t)]])]),p("div",Dt,[Pt,z(p("textarea",{"onUpdate:modelValue":i[3]||(i[3]=l=>F(e)?e.value=l:null),id:"userMessage",name:"userMessage",required:""},null,512),[[N,b(e)]])]),D(c,{type:"submit"},{default:P(()=>[A("Submit")]),_:1})],32))])])}}};export{Mt as default};