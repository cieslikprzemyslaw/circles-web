(this["webpackJsonpcircles-web"]=this["webpackJsonpcircles-web"]||[]).push([[7,10],{136:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return a}));var r=e(0),o=e(49),c=e(139),u=function(t){var n=Object(r.useContext)(o.b);return Object(r.useMemo)((function(){return t(n[0])}),[n,t])},a=function(){var t=Object(r.useContext)(o.b);return Object(r.useRef)((function(n){console.log("\ud83d\udcc1",n.type,"=>",n.payload),function(t,n){t((function(t){var e={};switch(n.type){case"SET_CURRENT_ACCOUNT":e.currentAccount=Object(c.a)({},n.payload);break;case"SET_BACKGROUND_THEME":e.preferences||(e.preferences={}),e.preferences.backgroundTheme=Object(c.a)({},n.payload)}return Object(c.a)(Object(c.a)({},t),e)}))}(t[1],n)})).current}},137:function(t,n,e){t.exports=e(179)},138:function(t,n,e){"use strict";function r(t,n,e,r,o,c,u){try{var a=t[c](u),i=a.value}catch(s){return void e(s)}a.done?n(i):Promise.resolve(i).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,c){var u=t.apply(n,e);function a(t){r(u,o,c,a,i,"next",t)}function i(t){r(u,o,c,a,i,"throw",t)}a(void 0)}))}}e.d(n,"a",(function(){return o}))},139:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(146);function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}},140:function(t,n,e){"use strict";e.d(n,"c",(function(){return l})),e.d(n,"a",(function(){return d})),e.d(n,"d",(function(){return h})),e.d(n,"e",(function(){return p})),e.d(n,"g",(function(){return b})),e.d(n,"f",(function(){return v})),e.d(n,"b",(function(){return y}));var r=e(152),o=e(139),c=e(153),u=e(154),a=e(164),i=e(168),s=e(150),f=e(151),l=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t,r,o,u){var a;return Object(c.a)(this,e),a=n.call(this,["account-accountInfo",{account_id:t,flags:!!r,rooms:!!o,friends:!!u}]),Object(f.b)("account_id",t,"string"),Object(f.b)("flags",r,"boolean","undefined"),Object(f.b)("rooms",o,"boolean","undefined"),Object(f.b)("friends",u,"boolean","undefined"),a}return Object(u.a)(e,[{key:"parse",value:function(t,n){return 200!==t?n:(Object(f.b)("data",n,"object"),Object(f.a)(n,"id","string"),Object(f.a)(n,"label","string"),Object(f.a)(n,"created_at","string"),Object(f.a)(n,"avatar_url","string","undefined"),Object(f.a)(n,"contact","object"),n.contact&&Object(f.a)(n.contact,"email","string"),Object(f.a)(n,"details","object"),Object(f.a)(n,"flags","object","undefined"),Object(f.a)(n,"friends","array","undefined"),Object(f.a)(n,"rooms","array","undefined"),Object(o.a)(Object(o.a)({},n),{},{created_at:new Date(n.created_at)}))}}]),e}(s.b),d=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t,r){return Object(c.a)(this,e),n.call(this,["account-accountChange",{account_id:t,changes:JSON.stringify(r)}])}return Object(u.a)(e,[{key:"parse",value:function(t,n){return n}}]),e}(s.b),h=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t,r){var o;return Object(c.a)(this,e),o=n.call(this,["account-accountList",{volume:r,included:t}]),Object(f.b)("volume",r,"number","undefined"),Object(f.b)("included",t,"array","undefined"),o}return Object(u.a)(e,[{key:"parse",value:function(t,n){return n}}]),e}(s.b),p=(s.b,function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t){return Object(c.a)(this,e),n.call(this,["account-accountLogin",{token:t}])}return Object(u.a)(e,[{key:"parse",value:function(t,n){return n}}]),e}(s.b)),b=(s.b,s.b,function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t,r){return Object(c.a)(this,e),n.call(this,["room-roomInfo",{room_id:t,accounts:r}])}return Object(u.a)(e,[{key:"parse",value:function(t,n){return n}}]),e}(s.b)),v=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t,o,u){return Object(c.a)(this,e),n.call(this,["room-roomCreate",{label:o,invite:[].concat(Object(r.a)(u),[t])}])}return Object(u.a)(e,[{key:"parse",value:function(t,n){return n}}]),e}(s.b),y=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(t){return Object(c.a)(this,e),n.call(this,["account-accountGetSuggestions",{account_id:t}])}return Object(u.a)(e,[{key:"parse",value:function(t,n){return n}}]),e}(s.b)},142:function(t,n,e){"use strict";var r=e(139),o=e(0),c=e.n(o);n.a=function(t){var n,e=function(t){for(var n=Object(r.a)({},t),e=arguments.length,o=new Array(e>1?e-1:0),c=1;c<e;c++)o[c-1]=arguments[c];for(var u in n)o.includes(u)&&delete n[u];return n}(t,"children","className"),o=Object.freeze(Object(r.a)(Object(r.a)({display:"flex"},e),t.style)),u=null!==(n=t.rootComponent)&&void 0!==n?n:c.a.createElement("div");return c.a.cloneElement(u,{onClick:t.onClick,style:o,className:t.className,children:t.children})}},143:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return f}));var r=e(24),o=e(0),c=e(136),u=e(9),a=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var c=Object(o.useRef)(null),u=f();if(null===c.current){var a=t.apply(void 0,e),i=function(t){c.current[0]=t,u()};c.current=[a,i]}return Object(o.useEffect)((function(){var n=t.apply(void 0,e);c.current[0]!==n&&c.current[1](n)}),[t,e]),c.current},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/home",e=Object(u.f)();Object(o.useEffect)((function(){t&&e.push(n)}),[t,n,e])},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/home",n=Object(c.b)((function(t){return t.currentAccount}));i(!!n,t)},f=function(){var t=Object(o.useState)(),n=Object(r.a)(t,2)[1];return Object(o.useCallback)((function(){return n({})}),[])}},145:function(t,n,e){"use strict";e.d(n,"b",(function(){return y})),e.d(n,"c",(function(){return O})),e.d(n,"a",(function(){return j})),e.d(n,"d",(function(){return g}));var r=e(137),o=e.n(r),c=e(165),u=e(152),a=e(138),i=e(0),s=e(150),f=e(143),l=e(157),d=e(140),h=e(136),p=e(147),b=l.a.host_url,v=new s.a(b),y=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var s=Object(i.useRef)(null),l=Object(f.c)();return Object(i.useEffect)((function(){s.current={status:102},function(){var n=Object(a.a)(o.a.mark((function n(){var r,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e||[],n.next=3,v.execute(Object(c.a)(t,Object(u.a)(r)));case 3:a=n.sent,s.current=a,l();case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[]),s.current},O=function(){var t=Object(i.useRef)(null),n=Object(f.c)();if(null===t.current){var e=function(){var t=Object(a.a)(o.a.mark((function t(e){var r,u,a,i,s,f=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=f.length,u=new Array(r>1?r-1:0),a=1;a<r;a++)u[a-1]=f[a];return i=u||[],t.next=4,v.execute(Object(c.a)(e,i));case 4:return s=t.sent,n(),t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();t.current=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e.apply(void 0,[t].concat(r))}}return t.current},j=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,c=Object(h.b)((function(t){return t.currentAccount})),u=Object(i.useRef)(t?void 0:null!==c&&void 0!==c?c:void 0),s=Object(h.a)(),l=O(),b=Object(f.c)();return Object(i.useEffect)((function(){var n=function(){var n=Object(a.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(d.c,t||(null===c||void 0===c?void 0:c.id),null===r||void 0===r?void 0:r.flags,null===r||void 0===r?void 0:r.rooms,null===r||void 0===r?void 0:r.contacts);case 2:200===(a=n.sent).status&&(u.current=a.data,e&&s(Object(p.b)(a.data)),b());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(t||(null===c||void 0===c?void 0:c.id))&&n()}),[t]),null!==(n=u.current)&&void 0!==n?n:null},g=function(t,n){var e,r=Object(i.useRef)(),c=O(),u=Object(f.c)();return Object(i.useEffect)((function(){t&&function(){var e=Object(a.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(d.g,t,!!n);case 2:200===(a=e.sent).status&&(r.current=a.data,u());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),null!==(e=r.current)&&void 0!==e?e:null}},146:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},147:function(t,n,e){"use strict";e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return d})),e.d(n,"a",(function(){return h}));var r=e(137),o=e.n(r),c=e(138),u=e(157),a=e(140),i=e(150),s=u.a.host_url,f=new i.a(s),l=function(t){return{type:"SET_CURRENT_ACCOUNT",payload:t}},d=function(){var t=Object(c.a)(o.a.mark((function t(n){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.execute(new a.c(n,!0,!0,!0));case 2:return e=t.sent,r=e.data,t.abrupt("return",{type:"SET_CURRENT_ACCOUNT",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(t){return{type:"SET_BACKGROUND_THEME",payload:t}}},148:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,"a",(function(){return r}))},149:function(t,n,e){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}e.d(n,"a",(function(){return r}))},150:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return u}));var r=e(153),o=e(154),c=function(){function t(n){Object(r.a)(this,t),this.url=void 0,this.url=n}return Object(o.a)(t,[{key:"makeArguments",value:function(t){return Object.entries(t).map((function(t){return"".concat(t[0],"=").concat("object"===typeof t[1]?JSON.stringify(t[1]):t[1])})).join("&")}},{key:"execute",value:function(t){var n=this;return new Promise((function(e,r){var o=!1,c=t.exec[0],u=n.makeArguments(t.exec[1]),a="".concat(n.url).concat(c,"?").concat(u),i=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"});fetch(a,{mode:"cors",headers:i}).then((function(t){return t.json()})).then((function(t){if(!o){o=!0;var n=t;console.log("\ud83d\udcf6",c,"=>",n),e(n)}})).catch(r)}))}}]),t}(),u=function(){function t(n){Object(r.a)(this,t),this.exec=void 0,this.status=void 0,this.exec=n,this.status=0}return Object(o.a)(t,[{key:"parse",value:function(t,n){return n}}]),t}()},151:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return u}));var r=function(t){return null!==t&&102!==t.status},o=function(t){return t.toString().replace(/,/g,", ")},c=function(t,n){var e=typeof n;"object"===e&&(null===n?e="null":Array.isArray(n)&&(e="array"));for(var r=arguments.length,c=new Array(r>2?r-2:0),u=2;u<r;u++)c[u-2]=arguments[u];if(!c.includes(e))throw new Error("Expected ".concat(o(c)," for ").concat(t,", got ").concat(typeof n));return n},u=function(t,n){for(var e=t[n],r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];return c.apply(void 0,[n,e].concat(o)),e}},152:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(48);var o=e(60);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},153:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},154:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},156:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return a}));var r=e(162),o=e(0),c=e(143),u=function(t){return t(localStorage)},a=function(){var t=Object(c.c)();return Object(o.useRef)((function(n,e){void 0===e||null===e?Object(r.a)(n):Object(r.b)(n,e),t()})).current}},157:function(t,n,e){"use strict";n.a={host_url:"https://us-central1-ping-82fee.cloudfunctions.net/"}},162:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}));var r=function(t,n){localStorage.setItem(t,n)},o=function(t){localStorage.removeItem(t)}},164:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(148);function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Object(r.a)(t,n)}},165:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(148),o=e(149);function c(t,n,e){return(c=Object(o.a)()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var c=new(Function.bind.apply(t,o));return e&&Object(r.a)(c,e.prototype),c}).apply(null,arguments)}},168:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return a}));var o=e(149);function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function a(t){var n=Object(o.a)();return function(){var e,o=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return u(this,e)}}},169:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=[{id:"1103088",label:"One color",url:"https://source.unsplash.com/collection/1103088/"},{id:"1971015",label:"Simplicity",url:"https://source.unsplash.com/collection/1971015/"},{id:"1426076",label:"Pastel & Sparkle",url:"https://source.unsplash.com/collection/1426076/"},{id:"1111575",label:"Space",url:"https://source.unsplash.com/collection/1111575/"},{id:"1922729",label:"From above",url:"https://source.unsplash.com/collection/1922729/"}]},179:function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function i(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,c=Object.create(o.prototype),u=new S(r||[]);return c._invoke=function(t,n,e){var r=f;return function(o,c){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw c;return A()}for(e.method=o,e.arg=c;;){var u=e.delegate;if(u){var a=k(u,e);if(a){if(a===p)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var i=s(t,n,e);if("normal"===i.type){if(r=e.done?h:l,i.arg===p)continue;return{value:i.arg,done:e.done}}"throw"===i.type&&(r=h,e.method="throw",e.arg=i.arg)}}}(t,e,u),c}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=i;var f="suspendedStart",l="suspendedYield",d="executing",h="completed",p={};function b(){}function v(){}function y(){}var O={};O[c]=function(){return this};var j=Object.getPrototypeOf,g=j&&j(j(L([])));g&&g!==e&&r.call(g,c)&&(O=g);var m=y.prototype=b.prototype=Object.create(O);function w(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function x(t,n){function e(o,c,u,a){var i=s(t[o],t,c);if("throw"!==i.type){var f=i.arg,l=f.value;return l&&"object"===typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,u,a)}),(function(t){e("throw",t,u,a)})):n.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return e("throw",t,u,a)}))}a(i.arg)}var o;this._invoke=function(t,r){function c(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(c,c):c()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var c=o.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return u.next=u}}return{next:A}}function A(){return{value:n,done:!0}}return v.prototype=m.constructor=y,y.constructor=v,y[a]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(x.prototype),x.prototype[u]=function(){return this},t.AsyncIterator=x,t.async=function(n,e,r,o,c){void 0===c&&(c=Promise);var u=new x(i(n,e,r,o),c);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},w(m),m[a]="Generator",m[c]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var u=this.tryEntries[c],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),s=r.call(u,"finallyLoc");if(i&&s){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=n&&n<=c.finallyLoc&&(c=null);var u=c?c.completion:{};return u.type=t,u.arg=n,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},191:function(t,n,e){"use strict";e.r(n);var r=e(4),o=e(137),c=e.n(o),u=e(138),a=e(0),i=e.p+"static/media/circles-logo.420d4698.svg",s=e(123),f=Object(s.a)((function(t){return{root:{backgroundColor:t.palette.background.paper},logo:{width:"300px",height:"300px"}}})),l=e(142),d=e(9),h=e(136),p=e(156),b=e(140),v=e(147),y=e(145),O=e(59),j=e.n(O),g=e(63),m=e(169);n.default=function(){var t=Object(d.f)(),n=t.location.state,e=f(),o=Object(h.a)(),s=Object(y.c)(),O=Object(g.b)().enqueueSnackbar,w=Object(p.a)((function(t){return t.accountIdToken}));return Object(a.useEffect)((function(){w?function(){var e=Object(u.a)(c.a.mark((function e(){var r,a,i,f,l,d,h,p,y,g,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(b.e,w);case 2:if(a=e.sent,!(i=null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.account_id)){e.next=11;break}return e.next=7,s(b.c,i,!0,!0,!0);case 7:200===(f=e.sent).status?(o(Object(v.b)(f.data)),p=localStorage.getItem("background-theme")||"1922729",y=null!==(l=m.a.find((function(t){return t.id.toString()===p.toString()})))&&void 0!==l?l:m.a[0],o(Object(v.a)(y)),(null===(d=f.data)||void 0===d||null===(h=d.flags)||void 0===h?void 0:h.includes("needs_init"))?t.push("/welcome"):((x=null===j.a||void 0===j.a?void 0:j.a.messaging())&&f.data&&(null===x||void 0===x||x.requestPermission().then(Object(u.a)(c.a.mark((function t(){var n,e,r,o,u,a,i,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getToken();case 2:if(o=t.sent,(null===(n=f.data)||void 0===n?void 0:n.tokens)&&(null===(e=f.data)||void 0===e||null===(r=e.tokens)||void 0===r?void 0:r.includes(o))){t.next=8;break}return(l=null!==(u=null===(a=f.data)||void 0===a?void 0:a.tokens)&&void 0!==u?u:[]).push(o),t.next=8,s(b.a,null===(i=f.data)||void 0===i?void 0:i.id,{tokens:l});case 8:console.log(o);case 9:case"end":return t.stop()}}),t)})))).catch((function(t){console.log("Unable to get permission to notify.",t)})),navigator.serviceWorker.addEventListener("message",(function(t){var n,e,r;O(null===t||void 0===t||null===(n=t.data)||void 0===n||null===(e=n["firebase-messaging-msg-data"])||void 0===e||null===(r=e.notification)||void 0===r?void 0:r.body),console.log(t)}))),t.push(null!==(g=null===n||void 0===n?void 0:n.initialPath)&&void 0!==g?g:"/home"))):t.push("/intro"),e.next=12;break;case 11:t.push("/intro");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():t.push("/intro")}),[]),Object(r.jsx)(l.a,{alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",className:e.root,children:Object(r.jsx)("img",{src:i,alt:"logo",className:e.logo})})}}}]);
//# sourceMappingURL=7.aac1a975.chunk.js.map