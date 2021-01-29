(this["webpackJsonpcircles-web"]=this["webpackJsonpcircles-web"]||[]).push([[8,10],{136:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var r=n(0),a=n(49),c=n(139),o=function(t){var e=Object(r.useContext)(a.b);return Object(r.useMemo)((function(){return t(e[0])}),[e,t])},u=function(){var t=Object(r.useContext)(a.b);return Object(r.useRef)((function(e){console.log("\ud83d\udcc1",e.type,"=>",e.payload),function(t,e){t((function(t){var n={};switch(e.type){case"SET_CURRENT_ACCOUNT":n.currentAccount=Object(c.a)({},e.payload);break;case"SET_BACKGROUND_THEME":n.preferences||(n.preferences={}),n.preferences.backgroundTheme=Object(c.a)({},e.payload)}return Object(c.a)(Object(c.a)({},t),n)}))}(t[1],e)})).current}},140:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return v})),n.d(e,"g",(function(){return p})),n.d(e,"f",(function(){return j})),n.d(e,"b",(function(){return O}));var r=n(152),a=n(139),c=n(153),o=n(154),u=n(164),i=n(168),s=n(150),l=n(151),f=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t,r,a,o){var u;return Object(c.a)(this,n),u=e.call(this,["account-accountInfo",{account_id:t,flags:!!r,rooms:!!a,friends:!!o}]),Object(l.b)("account_id",t,"string"),Object(l.b)("flags",r,"boolean","undefined"),Object(l.b)("rooms",a,"boolean","undefined"),Object(l.b)("friends",o,"boolean","undefined"),u}return Object(o.a)(n,[{key:"parse",value:function(t,e){return 200!==t?e:(Object(l.b)("data",e,"object"),Object(l.a)(e,"id","string"),Object(l.a)(e,"label","string"),Object(l.a)(e,"created_at","string"),Object(l.a)(e,"avatar_url","string","undefined"),Object(l.a)(e,"contact","object"),e.contact&&Object(l.a)(e.contact,"email","string"),Object(l.a)(e,"details","object"),Object(l.a)(e,"flags","object","undefined"),Object(l.a)(e,"friends","array","undefined"),Object(l.a)(e,"rooms","array","undefined"),Object(a.a)(Object(a.a)({},e),{},{created_at:new Date(e.created_at)}))}}]),n}(s.b),b=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t,r){return Object(c.a)(this,n),e.call(this,["account-accountChange",{account_id:t,changes:JSON.stringify(r)}])}return Object(o.a)(n,[{key:"parse",value:function(t,e){return e}}]),n}(s.b),d=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t,r){var a;return Object(c.a)(this,n),a=e.call(this,["account-accountList",{volume:r,included:t}]),Object(l.b)("volume",r,"number","undefined"),Object(l.b)("included",t,"array","undefined"),a}return Object(o.a)(n,[{key:"parse",value:function(t,e){return e}}]),n}(s.b),v=(s.b,function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,["account-accountLogin",{token:t}])}return Object(o.a)(n,[{key:"parse",value:function(t,e){return e}}]),n}(s.b)),p=(s.b,s.b,function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t,r){return Object(c.a)(this,n),e.call(this,["room-roomInfo",{room_id:t,accounts:r}])}return Object(o.a)(n,[{key:"parse",value:function(t,e){return e}}]),n}(s.b)),j=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t,a,o){return Object(c.a)(this,n),e.call(this,["room-roomCreate",{label:a,invite:[].concat(Object(r.a)(o),[t])}])}return Object(o.a)(n,[{key:"parse",value:function(t,e){return e}}]),n}(s.b),O=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,["account-accountGetSuggestions",{account_id:t}])}return Object(o.a)(n,[{key:"parse",value:function(t,e){return e}}]),n}(s.b)},142:function(t,e,n){"use strict";var r=n(139),a=n(0),c=n.n(a);e.a=function(t){var e,n=function(t){for(var e=Object(r.a)({},t),n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];for(var o in e)a.includes(o)&&delete e[o];return e}(t,"children","className"),a=Object.freeze(Object(r.a)(Object(r.a)({display:"flex"},n),t.style)),o=null!==(e=t.rootComponent)&&void 0!==e?e:c.a.createElement("div");return c.a.cloneElement(o,{onClick:t.onClick,style:a,className:t.className,children:t.children})}},143:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));var r=n(24),a=n(0),c=n(136),o=n(9),u=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var c=Object(a.useRef)(null),o=l();if(null===c.current){var u=t.apply(void 0,n),i=function(t){c.current[0]=t,o()};c.current=[u,i]}return Object(a.useEffect)((function(){var e=t.apply(void 0,n);c.current[0]!==e&&c.current[1](e)}),[t,n]),c.current},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/home",n=Object(o.f)();Object(a.useEffect)((function(){t&&n.push(e)}),[t,e,n])},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/home",e=Object(c.b)((function(t){return t.currentAccount}));i(!!e,t)},l=function(){var t=Object(a.useState)(),e=Object(r.a)(t,2)[1];return Object(a.useCallback)((function(){return e({})}),[])}},145:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return y}));var r=n(137),a=n.n(r),c=n(165),o=n(152),u=n(138),i=n(0),s=n(150),l=n(143),f=n(157),b=n(140),d=n(136),v=n(147),p=f.a.host_url,j=new s.a(p),O=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=Object(i.useRef)(null),f=Object(l.c)();return Object(i.useEffect)((function(){s.current={status:102},function(){var e=Object(u.a)(a.a.mark((function e(){var r,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n||[],e.next=3,j.execute(Object(c.a)(t,Object(o.a)(r)));case 3:u=e.sent,s.current=u,f();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),s.current},h=function(){var t=Object(i.useRef)(null),e=Object(l.c)();if(null===t.current){var n=function(){var t=Object(u.a)(a.a.mark((function t(n){var r,o,u,i,s,l=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=l.length,o=new Array(r>1?r-1:0),u=1;u<r;u++)o[u-1]=l[u];return i=o||[],t.next=4,j.execute(Object(c.a)(n,i));case 4:return s=t.sent,e(),t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();t.current=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return n.apply(void 0,[t].concat(r))}}return t.current},m=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,c=Object(d.b)((function(t){return t.currentAccount})),o=Object(i.useRef)(t?void 0:null!==c&&void 0!==c?c:void 0),s=Object(d.a)(),f=h(),p=Object(l.c)();return Object(i.useEffect)((function(){var e=function(){var e=Object(u.a)(a.a.mark((function e(){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(b.c,t||(null===c||void 0===c?void 0:c.id),null===r||void 0===r?void 0:r.flags,null===r||void 0===r?void 0:r.rooms,null===r||void 0===r?void 0:r.contacts);case 2:200===(u=e.sent).status&&(o.current=u.data,n&&s(Object(v.b)(u.data)),p());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(t||(null===c||void 0===c?void 0:c.id))&&e()}),[t]),null!==(e=o.current)&&void 0!==e?e:null},y=function(t,e){var n,r=Object(i.useRef)(),c=h(),o=Object(l.c)();return Object(i.useEffect)((function(){t&&function(){var n=Object(u.a)(a.a.mark((function n(){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c(b.g,t,!!e);case 2:200===(u=n.sent).status&&(r.current=u.data,o());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[t]),null!==(n=r.current)&&void 0!==n?n:null}},147:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return b})),n.d(e,"a",(function(){return d}));var r=n(137),a=n.n(r),c=n(138),o=n(157),u=n(140),i=n(150),s=o.a.host_url,l=new i.a(s),f=function(t){return{type:"SET_CURRENT_ACCOUNT",payload:t}},b=function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.execute(new u.c(e,!0,!0,!0));case 2:return n=t.sent,r=n.data,t.abrupt("return",{type:"SET_CURRENT_ACCOUNT",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return{type:"SET_BACKGROUND_THEME",payload:t}}},148:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},149:function(t,e,n){"use strict";function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n.d(e,"a",(function(){return r}))},150:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));var r=n(153),a=n(154),c=function(){function t(e){Object(r.a)(this,t),this.url=void 0,this.url=e}return Object(a.a)(t,[{key:"makeArguments",value:function(t){return Object.entries(t).map((function(t){return"".concat(t[0],"=").concat("object"===typeof t[1]?JSON.stringify(t[1]):t[1])})).join("&")}},{key:"execute",value:function(t){var e=this;return new Promise((function(n,r){var a=!1,c=t.exec[0],o=e.makeArguments(t.exec[1]),u="".concat(e.url).concat(c,"?").concat(o),i=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"});fetch(u,{mode:"cors",headers:i}).then((function(t){return t.json()})).then((function(t){if(!a){a=!0;var e=t;console.log("\ud83d\udcf6",c,"=>",e),n(e)}})).catch(r)}))}}]),t}(),o=function(){function t(e){Object(r.a)(this,t),this.exec=void 0,this.status=void 0,this.exec=e,this.status=0}return Object(a.a)(t,[{key:"parse",value:function(t,e){return e}}]),t}()},151:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var r=function(t){return null!==t&&102!==t.status},a=function(t){return t.toString().replace(/,/g,", ")},c=function(t,e){var n=typeof e;"object"===n&&(null===e?n="null":Array.isArray(e)&&(n="array"));for(var r=arguments.length,c=new Array(r>2?r-2:0),o=2;o<r;o++)c[o-2]=arguments[o];if(!c.includes(n))throw new Error("Expected ".concat(a(c)," for ").concat(t,", got ").concat(typeof e));return e},o=function(t,e){for(var n=t[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return c.apply(void 0,[e,n].concat(a)),n}},152:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(48);var a=n(60);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},153:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},154:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},157:function(t,e,n){"use strict";e.a={host_url:"https://us-central1-ping-82fee.cloudfunctions.net/"}},163:function(t,e,n){"use strict";e.a=n.p+"static/media/wave.f70c3bfc.svg"},164:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(148);function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},165:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(148),a=n(149);function c(t,e,n){return(c=Object(a.a)()?Reflect.construct:function(t,e,n){var a=[null];a.push.apply(a,e);var c=new(Function.bind.apply(t,a));return n&&Object(r.a)(c,n.prototype),c}).apply(null,arguments)}},168:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return u}));var a=n(149);function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=Object(a.a)();return function(){var n,a=r(t);if(e){var c=r(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return o(this,n)}}},190:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n(137),c=n.n(a),o=n(138),u=n(24),i=n(0),s=n(58),l=n(146),f=n(123),b=Object(f.a)((function(t){return{root:{position:"relative",maxWidth:t.breakpoints.values.md,margin:"0 auto",padding:"0 ".concat(t.spacing(4))},inputWrapper:{},wave:{position:"absolute",zIndex:5,bottom:"-10%",left:"-1%",width:"102%",height:"auto"},personalImage:Object(l.a)({width:"auto",height:"240px",position:"absolute",right:"2%",bottom:"0px"},t.breakpoints.up("sm"),{height:"310px",bottom:"5px"}),imgContainer:Object(l.a)({height:"300px",position:"relative",overflow:"hidden",background:"linear-gradient(to top left, ".concat(t.palette.primary.dark,", ").concat(t.palette.primary.main,")")},t.breakpoints.up("sm"),{height:"350px"}),welcomeTitle:{color:t.palette.primary.main}}})),d=function(t){return{title:{en_US:"Welcome,",pl_PL:"Witamy",de_DE:"Willkommen"},yes:t.yes}},v=n(227),p=n(136),j=n(338),O=n(142),h=n(128),m=n(163),y=n.p+"static/media/personal.ebfa5829.svg",g=n(145),x=n(140),w=n(147),_=n(9);e.default=function(){var t,e,n,a,l,f,k,S,C,E,A,N=Object(_.f)(),R=Object(s.useLittera)(d),T=Object(u.a)(R,1)[0],P=b(),B=Object(p.a)(),I=Object(g.c)(),U=Object(p.b)((function(t){return t.currentAccount})),D=Object(i.useState)(null!==(t=null===U||void 0===U?void 0:U.label)&&void 0!==t?t:""),L=Object(u.a)(D,2),J=L[0],W=L[1],H=Object(i.useState)(null!==(e=null===U||void 0===U||null===(n=U.details)||void 0===n?void 0:n.first_name)&&void 0!==e?e:""),M=Object(u.a)(H,2),G=M[0],z=M[1],F=Object(i.useState)(null!==(a=null===U||void 0===U||null===(l=U.details)||void 0===l?void 0:l.middle_name)&&void 0!==a?a:""),K=Object(u.a)(F,2),V=K[0],q=K[1],Q=Object(i.useState)(null!==(f=null===U||void 0===U||null===(k=U.details)||void 0===k?void 0:k.last_name)&&void 0!==f?f:""),X=Object(u.a)(Q,2),Y=X[0],Z=X[1],$=Object(i.useState)(null!==(S=null===U||void 0===U||null===(C=U.details)||void 0===C?void 0:C.birthdate)&&void 0!==S?S:new Date),tt=Object(u.a)($,2),et=tt[0],nt=tt[1],rt=Object(i.useState)(null!==(E=null===U||void 0===U||null===(A=U.details)||void 0===A?void 0:A.sex)&&void 0!==E?E:"O"),at=Object(u.a)(rt,2),ct=at[0],ot=at[1],ut=function(t){var e,n,r,a,c=null!==(e=null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.id)&&void 0!==e?e:"",o=null!==(r=null===t||void 0===t||null===(a=t.target)||void 0===a?void 0:a.value)&&void 0!==r?r:"";switch(c){case"label":W(o);break;case"first_name":z(o);break;case"middle_name":q(o);break;case"last_name":Z(o);break;case"birthday":nt(o);break;case"sex":ot(o)}},it=function(){var t=Object(o.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(J&&G&&V&&Y&&et&&ct)){t.next=12;break}return t.next=3,I(x.a,(null===U||void 0===U?void 0:U.id)||"",JSON.parse(JSON.stringify({label:J,details:{first_name:G,middle_name:V,last_name:Y,birthdate:et.toString(),sex:ct}})));case 3:if(204!==t.sent.status){t.next=10;break}return t.next=7,I(x.c,(null===U||void 0===U?void 0:U.id)||"",!0);case 7:200===(e=t.sent).status&&B(Object(w.b)(e.data)),N.push("/home");case 10:t.next=13;break;case 12:alert("Implement error handling!");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:P.imgContainer,children:[Object(r.jsx)("img",{className:P.personalImage,src:y,alt:"PersonalInformation"}),Object(r.jsx)("img",{className:P.wave,src:m.a,alt:"wave"})]}),Object(r.jsxs)("div",{className:P.root,children:[Object(r.jsxs)(v.a,{className:P.welcomeTitle,variant:"h2",children:[T.title," ",null===U||void 0===U?void 0:U.label]}),Object(r.jsx)(v.a,{style:{opacity:"0.7",marginBottom:"35px"},paragraph:!0,children:"Here you need to provide us with some data about you. Name, Surname etc."}),Object(r.jsx)(v.a,{style:{paddingBottom:"16px"},variant:"h4",children:"Personal information"}),Object(r.jsxs)(O.a,{flexDirection:"column",className:P.inputWrapper,children:[Object(r.jsx)(j.a,{style:{marginBottom:"15px"},id:"label",label:"Label",variant:"outlined",value:J,onChange:ut}),Object(r.jsx)(j.a,{style:{marginBottom:"15px"},id:"first_name",label:"First Name",variant:"outlined",value:G,onChange:ut}),Object(r.jsx)(j.a,{style:{marginBottom:"15px"},id:"middle_name",label:"Middle Name",helperText:"Optional",variant:"outlined",value:V,onChange:ut}),Object(r.jsx)(j.a,{style:{marginBottom:"15px"},id:"last_name",label:"Last Name",variant:"outlined",value:Y,onChange:ut}),Object(r.jsx)(j.a,{id:"birthday",label:"Birthday",type:"date",defaultValue:"1990-01-01",InputLabelProps:{shrink:!0},value:et,onChange:ut})]}),Object(r.jsx)(h.a,{style:{color:"white",float:"right",marginBottom:"15px"},variant:"contained",color:"primary",onClick:it,children:"Save"})]})]})}}}]);
//# sourceMappingURL=8.ed7d0d6d.chunk.js.map