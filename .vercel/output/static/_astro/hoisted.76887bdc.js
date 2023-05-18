import{I as m}from"./IntersectionHandler.7eaf436d.js";import"./hoisted.d17de7b4.js";(async function(){const e={root:null,rootMargin:"0px",threshold:.01};m.init(e);const t=document.getElementById("feets").parentNode,i=document.getElementById("feets");function o(){i.style.display="initial"}function n(){i.style.display="hidden"}function r(a){const{isIntersecting:c}=a;c?o():n()}m.observe(t,r),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?t.getBoundingClientRect().top+window.innerHeight>0&&o():n()})})();var d,g,R,y,V=-1,h=function(e){addEventListener("pageshow",function(t){t.persisted&&(V=t.timeStamp,e(t))},!0)},x=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},w=function(){var e=x();return e&&e.activationStart||0},l=function(e,t){var i=x(),o="navigate";return V>=0?o="back-forward-cache":i&&(o=document.prerendering||w()>0?"prerender":document.wasDiscarded?"restore":i.type.replace(/_/g,"-")),{name:e,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:o}},E=function(e,t,i){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var o=new PerformanceObserver(function(n){Promise.resolve().then(function(){t(n.getEntries())})});return o.observe(Object.assign({type:e,buffered:!0},i||{})),o}}catch{}},f=function(e,t,i,o){var n,r;return function(a){t.value>=0&&(a||o)&&((r=t.value-(n||0))||n===void 0)&&(n=t.value,t.delta=r,t.rating=function(c,s){return c>s[1]?"poor":c>s[0]?"needs-improvement":"good"}(t.value,i),e(t))}},T=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},S=function(e){var t=function(i){i.type!=="pagehide"&&document.visibilityState!=="hidden"||e(i)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},C=function(e){var t=!1;return function(i){t||(e(i),t=!0)}},p=-1,k=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},b=function(e){document.visibilityState==="hidden"&&p>-1&&(p=e.type==="visibilitychange"?e.timeStamp:0,U())},B=function(){addEventListener("visibilitychange",b,!0),addEventListener("prerenderingchange",b,!0)},U=function(){removeEventListener("visibilitychange",b,!0),removeEventListener("prerenderingchange",b,!0)},I=function(){return p<0&&(p=k(),B(),h(function(){setTimeout(function(){p=k(),B()},0)})),{get firstHiddenTime(){return p}}},A=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},D=[1800,3e3],W=function(e,t){t=t||{},A(function(){var i,o=I(),n=l("FCP"),r=E("paint",function(a){a.forEach(function(c){c.name==="first-contentful-paint"&&(r.disconnect(),c.startTime<o.firstHiddenTime&&(n.value=Math.max(c.startTime-w(),0),n.entries.push(c),i(!0)))})});r&&(i=f(e,n,D,t.reportAllChanges),h(function(a){n=l("FCP"),i=f(e,n,D,t.reportAllChanges),T(function(){n.value=performance.now()-a.timeStamp,i(!0)})}))})},H=[.1,.25],_=function(e,t){t=t||{},W(C(function(){var i,o=l("CLS",0),n=0,r=[],a=function(s){s.forEach(function(u){if(!u.hadRecentInput){var N=r[0],j=r[r.length-1];n&&u.startTime-j.startTime<1e3&&u.startTime-N.startTime<5e3?(n+=u.value,r.push(u)):(n=u.value,r=[u])}}),n>o.value&&(o.value=n,o.entries=r,i())},c=E("layout-shift",a);c&&(i=f(e,o,H,t.reportAllChanges),S(function(){a(c.takeRecords()),i(!0)}),h(function(){n=0,o=l("CLS",0),i=f(e,o,H,t.reportAllChanges),T(function(){return i()})}),setTimeout(i,0))}))},v={passive:!0,capture:!0},z=new Date,M=function(e,t){d||(d=t,g=e,R=new Date,O(removeEventListener),q())},q=function(){if(g>=0&&g<R-z){var e={entryType:"first-input",name:d.type,target:d.target,cancelable:d.cancelable,startTime:d.timeStamp,processingStart:d.timeStamp+g};y.forEach(function(t){t(e)}),y=[]}},G=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;e.type=="pointerdown"?function(i,o){var n=function(){M(i,o),a()},r=function(){a()},a=function(){removeEventListener("pointerup",n,v),removeEventListener("pointercancel",r,v)};addEventListener("pointerup",n,v),addEventListener("pointercancel",r,v)}(t,e):M(t,e)}},O=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,G,v)})},P=[100,300],J=function(e,t){t=t||{},A(function(){var i,o=I(),n=l("FID"),r=function(s){s.startTime<o.firstHiddenTime&&(n.value=s.processingStart-s.startTime,n.entries.push(s),i(!0))},a=function(s){s.forEach(r)},c=E("first-input",a);i=f(e,n,P,t.reportAllChanges),c&&S(C(function(){a(c.takeRecords()),c.disconnect()})),c&&h(function(){var s;n=l("FID"),i=f(e,n,P,t.reportAllChanges),y=[],g=-1,d=null,O(addEventListener),s=r,y.push(s),q()})})},F=[2500,4e3],L={},K=function(e,t){t=t||{},A(function(){var i,o=I(),n=l("LCP"),r=function(s){var u=s[s.length-1];u&&u.startTime<o.firstHiddenTime&&(n.value=Math.max(u.startTime-w(),0),n.entries=[u],i())},a=E("largest-contentful-paint",r);if(a){i=f(e,n,F,t.reportAllChanges);var c=C(function(){L[n.id]||(r(a.takeRecords()),a.disconnect(),L[n.id]=!0,i(!0))});["keydown","click"].forEach(function(s){addEventListener(s,c,!0)}),S(c),h(function(s){n=l("LCP"),i=f(e,n,F,t.reportAllChanges),T(function(){n.value=performance.now()-s.timeStamp,L[n.id]=!0,i(!0)})})}})};_(console.log);J(console.log);K(console.log);(async function(){const e={root:null,rootMargin:"0px",threshold:.01};m.init(e);const t=document.getElementById("stars-container").parentNode,i=document.getElementById("stars-container");function o(){i.style.display="initial"}function n(){i.style.display="hidden"}function r(a){const{isIntersecting:c}=a;c?o():n()}m.observe(t,r),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?t.getBoundingClientRect().top+window.innerHeight>0&&o():n()})})();(async function(){const e={root:null,rootMargin:"0px",threshold:.01};m.init(e);const t=document.getElementById("splash"),i=t.querySelector("#frank"),o=document.getElementById("site-header");function n(){console.log("intro start"),i.classList.add("frank"),o.classList.add("bg-opacity-50")}function r(){console.log("intro stop"),i.classList.remove("frank"),o.classList.remove("bg-opacity-50")}function a(c){const{isIntersecting:s}=c;s?n():r()}m.observe(t,a),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?t.getBoundingClientRect().top+window.innerHeight>0&&n():r()})})();