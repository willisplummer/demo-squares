parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({8:[function(require,module,exports) {
const e=e=>o=>{let t;o(0,(o,l)=>{0===o&&(t=l),1===o&&e(l),1!==o&&0!==o||t(1)})};module.exports=e;
},{}],9:[function(require,module,exports) {
const e=e=>(r,s)=>{if(0!==r)return;let u;s(0,e=>{2===e&&u&&(u.unsubscribe?u.unsubscribe():u())}),u=e.subscribe({next:e=>s(1,e),error:e=>s(2,e),complete:()=>s(2)})};module.exports=e;
},{}],11:[function(require,module,exports) {
const o=o=>(e,t)=>{if(0!==e)return;const n="undefined"!=typeof Symbol&&o[Symbol.iterator]?o[Symbol.iterator]():o;let r,l=!1,d=!1;t(0,o=>{1===o&&(d=!0,l||r&&r.done||function(){for(l=!0;d;)d=!1,(r=n.next()).done?t(2):t(1,r.value);l=!1}())})};module.exports=o;
},{}],10:[function(require,module,exports) {
const e=(e,t)=>(n,r)=>{if(0!==n)return;const o=e=>r(1,e);r(0,n=>{2===n&&e.removeEventListener(t,o)}),e.addEventListener(t,o)};module.exports=e;
},{}],12:[function(require,module,exports) {
const e=e=>(t,n)=>{if(0!==t)return;let o=!1;e.then(e=>{o||(n(1,e),n(2))},e=>{o||n(2,e)}),n(0,e=>{2===e&&(o=!0)})};module.exports=e;
},{}],13:[function(require,module,exports) {
const e=e=>(t,r)=>{if(0!==t)return;let l=0;const n=setInterval(()=>{r(1,l++)},e);r(0,e=>{2===e&&clearInterval(n)})};module.exports=e;
},{}],14:[function(require,module,exports) {
const o=o=>e=>(s,t)=>{0===s&&e(0,(e,s)=>{t(e,1===e?o(s):s)})};module.exports=o;
},{}],15:[function(require,module,exports) {
function e(e,t){let n=2===arguments.length;return r=>(l,u)=>{if(0!==l)return;let o=t;r(0,(t,r)=>{1===t?(o=n?e(o,r):(n=!0,r),u(1,o)):u(t,r)})}}module.exports=e;
},{}],16:[function(require,module,exports) {
const o=o=>(e,i)=>{if(0!==e)return;const t=o=>void 0!==o,n=o=>void 0===o,s=()=>{};let c,d,f=!1;function l(o){1===o&&(d||c||s)(1),2===o&&(d&&d(2),c&&c(2))}o(0,(o,e)=>{if(0===o)c=e,i(0,l);else if(1===o){const o=e;d&&d(2),o(0,(o,e)=>{0===o?(d=e)(1):1===o?i(1,e):2===o&&n(e)?f?i(2):(d=void 0,c(1)):2===o&&t(e)&&i(2,e)})}else 2===o&&n(e)?d?f=!0:i(2):2===o&&t(e)&&i(2,e)})};module.exports=o;
},{}],17:[function(require,module,exports) {
const t=t=>e=>(n,o)=>{if(0!==n)return;let r,u=0;function c(e,n){u<t&&r(e,n)}e(0,(e,n)=>{0===e?(r=n,o(0,c)):1===e?u<t&&(u++,o(e,n),u===t&&(o(2),r(2))):o(e,n)})};module.exports=t;
},{}],18:[function(require,module,exports) {
const e=e=>t=>(o,r)=>{if(0!==o)return;let l,n=0;t(0,(t,o)=>{0===t?(l=o,r(t,o)):1===t&&n<e?(n++,l(1)):r(t,o)})};module.exports=e;
},{}],19:[function(require,module,exports) {
const e=e=>t=>(o,r)=>{if(0!==o)return;let l;t(0,(t,o)=>{0===t?(l=o,r(t,o)):1===t?e(o)?r(t,o):l(1):r(t,o)})};module.exports=e;
},{}],20:[function(require,module,exports) {
function t(...t){return(e,r)=>{if(0!==e)return;const n=t.length,o=new Array(n);let f=0,l=0;const i=t=>{if(0!==t)for(let e=0;e<n;e++)o[e]&&o[e](t)};for(let e=0;e<n;e++)t[e](0,(t,u)=>{0===t?(o[e]=u,1==++f&&r(0,i)):2===t?(o[e]=void 0,++l===n&&r(2)):r(t,u)})}}module.exports=t;
},{}],21:[function(require,module,exports) {
const t=(...t)=>(n,o)=>{if(0!==n)return;const e=t.length;if(0===e)return o(0,()=>{}),void o(2);let r,c=0;const i=(t,n)=>{1!==t&&2!==t||r(t,n)};!function n(){c!==e?t[c](0,(t,e)=>{0===t?(r=e,0===c?o(0,i):r(1)):1===t?o(1,e):2===t&&(c++,n())}):o(2)}()};module.exports=t;
},{}],22:[function(require,module,exports) {
const e={},r=(...r)=>(t,n)=>{if(0!==t)return;const o=r.length;if(0===o)return n(0,()=>{}),n(1,[]),void n(2);let f=o,s=o,i=o;const l=new Array(o),c=new Array(o),a=(e,r)=>{if(2===e)for(let e=0;e<o;e++)c[e](2)};r.forEach((r,t)=>{l[t]=e,r(0,(r,u)=>{if(0===r)c[t]=u,0==--f&&n(0,a);else if(1===r){const r=s?l[t]===e?--s:s:0;if(l[t]=u,0===r){const e=new Array(o);for(let r=0;r<o;++r)e[r]=l[r];n(1,e)}}else 2===r?0==--i&&n(2):n(r,u)})})};module.exports=r;
},{}],23:[function(require,module,exports) {
const e=e=>{let l,t=[];return function(n,s){0===n&&(t.push(s),1===t.length&&e(0,(e,n)=>{if(0===e)l=n;else for(let l of t.slice(0))l(e,n);2===e&&(t=[])}),s(0,(e,n)=>{if(0!==e)if(2===e){const e=t.indexOf(s);e>-1&&t.splice(e,1),t.length||l(2)}else l(e,n)}))}};module.exports=e;
},{}],24:[function(require,module,exports) {
function e(...e){let t=e[0];for(let l=1,n=e.length;l<n;l++)t=e[l](t);return t}module.exports=e;
},{}],7:[function(require,module,exports) {
module.exports={forEach:require("callbag-for-each"),fromObs:require("callbag-from-obs"),fromIter:require("callbag-from-iter"),fromEvent:require("callbag-from-event"),fromPromise:require("callbag-from-promise"),interval:require("callbag-interval"),map:require("callbag-map"),scan:require("callbag-scan"),flatten:require("callbag-flatten"),take:require("callbag-take"),skip:require("callbag-skip"),filter:require("callbag-filter"),merge:require("callbag-merge"),concat:require("callbag-concat"),combine:require("callbag-combine"),share:require("callbag-share"),pipe:require("callbag-pipe")};
},{"callbag-for-each":8,"callbag-from-obs":9,"callbag-from-iter":11,"callbag-from-event":10,"callbag-from-promise":12,"callbag-interval":13,"callbag-map":14,"callbag-scan":15,"callbag-flatten":16,"callbag-take":17,"callbag-skip":18,"callbag-filter":19,"callbag-merge":20,"callbag-concat":21,"callbag-combine":22,"callbag-share":23,"callbag-pipe":24}],5:[function(require,module,exports) {
"use strict";var t=require("callbag-basics"),e=["#a8e6cf","#dcedc1","#ffd3b6","#ffaaa5","#ff8b94"],r=50,n=document.getElementById("home"),a=function(t,e){var r=document.createElement("div");r.setAttribute("class","row");var n=document.createElement("div");n.setAttribute("class","square"),Array(5).fill(void 0).forEach(function(t,a){var o=n.cloneNode(),i=5*(e-1)+a+1;o.setAttribute("id","square-"+i),r.appendChild(o)}),t.appendChild(r)},o=function(t,e){var r=3;Array(e).fill(void 0).forEach(function(){a(t,++r)})},i=r/5-3;o(n,i);var c=Array(r).fill(void 0).map(function(t,e){return"square-"+(e+1)}),u=function(t){if(/^#[0-9A-F]{6}$/i.test(t))return t;function e(t){return("0"+parseInt(t).toString(16)).slice(-2)}return"#"+e((t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+e(t[2])+e(t[3])},d=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random(),n=document.getElementById(t),a=u(n.style.backgroundColor||e[0]),o=e.filter(function(t){return t!==a}),i=o[Math.floor(r*o.length)];n.style.backgroundColor=i};(0,t.pipe)((0,t.fromEvent)(document,"mouseover"),(0,t.filter)(function(t){return c.includes(t.target.id)}),(0,t.map)(function(t){return t.target.id}),(0,t.forEach)(d));
},{"callbag-basics":7}],6:[function(require,module,exports) {
"use strict";var t=require("callbag-basics"),n=["home","about","signup"],e=n.map(function(t){return t+"-bttn"}),i=function(t){window.location.hash=t},r=function(t){var e=t?t.substr(1):"home";document.getElementById(e).classList.remove("hide"),n.filter(function(t){return t!==e}).forEach(function(t){return document.getElementById(t).classList.add("hide")})};(0,t.pipe)((0,t.fromEvent)(document,"click"),(0,t.filter)(function(t){return e.includes(t.target.id)}),(0,t.map)(function(t){return t.target.id.split("-")[0]}),(0,t.forEach)(i)),(0,t.pipe)((0,t.fromEvent)(window,"hashchange"),(0,t.forEach)(function(){return r(window.location.hash)}));
},{"callbag-basics":7}],4:[function(require,module,exports) {
"use strict";var e=require("./squares.js"),r=t(e),u=require("./nav.js"),s=t(u);function t(e){return e&&e.__esModule?e:{default:e}}
},{"./squares.js":5,"./nav.js":6}]},{},[4])
//# sourceMappingURL=/demosquares/demo-squares.9a343212.map