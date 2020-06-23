(this["webpackJsonpcircles-web"]=this["webpackJsonpcircles-web"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=(a(98),a(10)),l=a(149),u=a(22),s=a.n(u),m=a(27),d=a(16),p=a(8),f=a.n(p),v=a(14),h=a(71),g=a.n(h),b=a(139),E=Object(b.a)((function(e){return{root:{color:e.palette.primary.main},logo:{width:"300px",height:"300px"}}})),w=a(44),x=function(e){var t=function(e){for(var t=Object(w.a)({},e),a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];for(var i in t)n.includes(i)&&delete t[i];return t}(e,"children","className"),a=Object.freeze(Object(w.a)({display:"flex"},t,{},e.style));return r.a.createElement("div",{style:a,className:e.className},e.children)},j=Object.freeze({currentAccount:void 0}),y=r.a.createContext([j,function(){}]),O=function(e){return e(Object(n.useContext)(y)[0])},k=function(){var e=Object(n.useContext)(y);return Object(n.useRef)((function(t){console.log("\ud83d\udcc1",t.type,"=>",t.payload),function(e,t){e((function(e){var a={};switch(t.type){case"SET_CURRENT_ACCOUNT":a.currentAccount=Object(w.a)({},t.payload)}return Object(w.a)({},e,{},a)}))}(e[1],t)})).current},S=function(e,t){localStorage.setItem(e,t)},C=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2)[1];return Object(n.useCallback)((function(){return t({})}),[])},_=function(){var e=C();return Object(n.useRef)((function(t,a){void 0===a||null===a?function(e){localStorage.removeItem(e)}(t):S(t,a),e()})).current},P=(a(60),a(24)),I=a(25),N=a(31),W=a(30),A=function(){function e(t){Object(P.a)(this,e),this.url=void 0,this.url=t}return Object(I.a)(e,[{key:"makeArguments",value:function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat("object"===typeof e[1]?JSON.stringify(e[1]):e[1])})).join("&")}},{key:"execute",value:function(e){var t=this;return new Promise((function(a,n){var r=!1,i=e.exec[0],o=t.makeArguments(e.exec[1]),c="".concat(t.url).concat(i,"?").concat(o),l=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"});fetch(c,{mode:"cors",headers:l}).then((function(e){return e.json()})).then((function(e){if(!r){r=!0;var t=e;console.log("\ud83d\udcf6",i,"=>",t),a(t)}})).catch(n)}))}}]),e}(),D=function(){function e(t){Object(P.a)(this,e),this.exec=void 0,this.status=void 0,this.exec=t,this.status=0}return Object(I.a)(e,[{key:"parse",value:function(e,t){return t}}]),e}(),R=function(e){Object(W.a)(a,e);var t=Object(N.a)(a);function a(e,n,r,i){return Object(P.a)(this,a),t.call(this,["accountInfo",{account_id:e,flags:!!n,rooms:!!r,contacts:!!i}])}return Object(I.a)(a,[{key:"parse",value:function(e,t){return t}}]),a}(D),z=function(e){Object(W.a)(a,e);var t=Object(N.a)(a);function a(e,n){return Object(P.a)(this,a),t.call(this,["accountChange",{account_id:e,changes:JSON.stringify(n)}])}return Object(I.a)(a,[{key:"parse",value:function(e,t){return t}}]),a}(D),L=function(e){Object(W.a)(a,e);var t=Object(N.a)(a);function a(e){return Object(P.a)(this,a),t.call(this,["accountLogin",{token:e}])}return Object(I.a)(a,[{key:"parse",value:function(e,t){return t}}]),a}(D),U=function(e){Object(W.a)(a,e);var t=Object(N.a)(a);function a(e,n){return Object(P.a)(this,a),t.call(this,["roomInfo",{room_id:e,accounts:n}])}return Object(I.a)(a,[{key:"parse",value:function(e,t){return t}}]),a}(D),T=function(e){return{type:"SET_CURRENT_ACCOUNT",payload:e}},B=a(62),M=new A("https://us-central1-ping-82fee.cloudfunctions.net/"),H=function(){var e=Object(n.useRef)(null),t=C();if(null===e.current){var a=function(){var e=Object(v.a)(f.a.mark((function e(a){var n,r,i,o,c,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=l.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=l[i];return o=r||[],e.next=4,M.execute(Object(B.a)(a,o));case 4:return c=e.sent,t(),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.current=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return a.apply(void 0,[e].concat(n))}}return e.current},F=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=O((function(e){return e.currentAccount})),o=Object(n.useRef)(e?void 0:null!==i&&void 0!==i?i:void 0),c=k(),l=H(),u=C();return Object(n.useEffect)((function(){var t=function(){var t=Object(v.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(R,e||(null===i||void 0===i?void 0:i.id),null===r||void 0===r?void 0:r.flags,null===r||void 0===r?void 0:r.rooms,null===r||void 0===r?void 0:r.contacts);case 2:200===(n=t.sent).status&&(o.current=n.data,a&&c(T(n.data)),u());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(e||(null===i||void 0===i?void 0:i.id))&&t()}),[e]),null!==(t=o.current)&&void 0!==t?t:null},V=function(){var e=Object(d.f)(),t=e.location.state,a=E(),i=k(),o=H(),c=function(e){return e.accountIdToken}(localStorage);return Object(n.useEffect)((function(){c?function(){var a=Object(v.a)(f.a.mark((function a(){var n,r,l,u,s,m,d;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o(L,c);case 2:if(r=a.sent,!(l=null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.account_id)){a.next=11;break}return a.next=7,o(R,l,!0,!0,!0);case 7:200===(u=a.sent).status?(i(T(u.data)),(null===(s=u.data)||void 0===s||null===(m=s.flags)||void 0===m?void 0:m.includes("needs_init"))?e.push("/welcome"):e.push(null!==(d=null===t||void 0===t?void 0:t.initialPath)&&void 0!==d?d:"/home")):e.push("/intro"),a.next=12;break;case 11:e.push("/intro");case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()():e.push("/intro")}),[]),r.a.createElement(x,{alignItems:"center",justifyContent:"center",width:"100%",height:"100vh"},r.a.createElement("img",{src:g.a,alt:"logo",className:a.logo}))},J=Object(b.a)((function(e){return{root:{},introViewRoot:{maxWidth:e.breakpoints.values.md,margin:"0 auto"},introViewContentWrapper:{maxWidth:"60%",marginTop:"5%"}}})),q=function(e){return{title:{en_US:"Intro",pl_PL:"Intro",de_DE:"Intro"},firstTitle:{en_US:"Welcome to safe chat!",pl_PL:"Pierwszy Part",de_DE:"Erstes Part"},secondTitle:{en_US:"Available everywhere",pl_PL:"Drugi Part",de_DE:"Zweiten Part"},thirdTitle:{en_US:"Reliable and Stable",pl_PL:"Trzeci Part",de_DE:"Dreien Part"},yes:e.yes}},G=a(111),K=a(143),Q=a(40),Y=a(144),$=function(e){var t=e.activePart;return r.a.createElement(x,{justifyContent:"center",alignItems:"center"},r.a.createElement(Z,{active:t>=0}),r.a.createElement(Z,{active:t>=1}),r.a.createElement(Z,{active:t>=2}))},Z=function(e){var t=e.active,a=Object(Q.a)();return r.a.createElement(Y.a,{style:{opacity:t?1:.15,fontSize:"14px",color:t?a.palette.primary.main:"#000"}},"lens")},X=function(e){var t=J();if(e.activePart!==e.partId)return null;var a=0===e.partId?"Skip":"Back",n=2===e.partId?"Continue":"Next";return r.a.createElement("div",{className:t.introViewRoot,style:{height:"100vh"}},r.a.createElement(x,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},r.a.createElement(x,{flexDirection:"column",height:"90vh",alignItems:"center",justifyContent:"center"},r.a.createElement(x,{alignItems:"center",justifyContent:"center"},r.a.createElement("img",{src:e.image,alt:e.title,style:{maxWidth:"300px",height:"auto"}})),r.a.createElement(x,{className:t.introViewContentWrapper,alignItems:"center",justifyContent:"center",flexDirection:"column"},r.a.createElement(G.a,{variant:"h2"},e.title),r.a.createElement(G.a,{align:"center",paragraph:!0},e.description))),r.a.createElement(x,{justifyContent:"space-evenly",height:"10vh",alignItems:"center",width:"60%"},r.a.createElement(K.a,{onClick:e.onPrev},a),r.a.createElement($,{activePart:e.activePart}),r.a.createElement(K.a,{variant:"contained",color:"primary",onClick:e.onNext},n))))},ee=a(75),te=a.n(ee),ae=a(76),ne=a.n(ae),re=a(77),ie=a.n(re),oe=function(){var e=Object(d.f)(),t=Object(u.useLittera)(q),a=Object(c.a)(t,1)[0],i=J(),o=Object(n.useState)(0),l=Object(c.a)(o,2),s=l[0],m=l[1],p=Object(n.useCallback)((function(){m((function(t){return 2===t?(e.push("/login"),t):t+1}))}),[m,e]),f=Object(n.useCallback)((function(){m((function(t){return 0===t?(e.push("/login"),t):t-1}))}),[m,e]);return r.a.createElement("div",{className:i.root},r.a.createElement(X,{activePart:s,partId:0,onNext:p,onPrev:f,image:te.a,title:a.firstTitle,description:"Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse."}),r.a.createElement(X,{activePart:s,partId:1,onNext:p,onPrev:f,image:ne.a,title:a.secondTitle,description:"Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse."}),r.a.createElement(X,{activePart:s,partId:2,onNext:p,onPrev:f,image:ie.a,title:a.thirdTitle,description:"Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse."}))},ce=a(19),le=Object(b.a)((function(e){return{root:Object(ce.a)({minHeight:"calc(100vh - (300px + 42px))",alignItems:"center"},e.breakpoints.up("sm"),{minHeight:"calc(100vh - (350px + 42px))",alignItems:"flex-start"}),container:{maxWidth:e.breakpoints.values.md,width:"100%",padding:"0 ".concat(e.spacing(4),"px")},inputWrapper:{},loginImage:Object(ce.a)({width:"auto",height:"240px",position:"absolute",right:"2%",bottom:"0px"},e.breakpoints.up("sm"),{height:"310px",bottom:"5px"}),imgContainer:Object(ce.a)({height:"300px",position:"relative",overflow:"hidden",background:"linear-gradient(to top left, ".concat(e.palette.primary.dark,", ").concat(e.palette.primary.main,")")},e.breakpoints.up("sm"),{height:"350px"}),wave:{position:"absolute",zIndex:5,bottom:"-10%",left:"-1%",width:"102%",height:"auto"},footerWrapper:{maxWidth:e.breakpoints.values.md,margin:"0 auto",padding:"0 ".concat(e.spacing(4),"px")}}})),ue=function(e){return{title:{en_US:"Sign in",pl_PL:"B\u0105d\u017a w kontakcie!",de_DE:"Stayen ins Touchejen"},yes:e.yes}},se=a(150),me=a(147),de=a(78),pe=a.n(de),fe=a(41),ve=a.n(fe),he=a(18),ge=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var a=new he.auth.GoogleAuthProvider;a.addScope("https://www.googleapis.com/auth/contacts.readonly"),he.auth().signInWithPopup(a).then((function(t){e(t),Ee()})).catch((function(e){var a=e.code,n=e.message;console.log("\ud83d\udd12 Authorization =>",a,n),t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(v.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){he.auth().signInWithEmailAndPassword(t,a).then((function(t){e(t),Ee()})).catch((function(e){var t=e.code,a=e.message;console.log("\ud83d\udd12 Authorization =>",t,a),n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ee=function(){var e,t,a=null!==(e=null===he||void 0===he||null===(t=he.auth())||void 0===t?void 0:t.currentUser)&&void 0!==e?e:null;a&&a.getIdToken(!0).then((function(e){S("accountIdToken",e)})).catch((function(e){var t=e.code,a=e.message;console.log("\ud83d\udd12 Authorization =>",t,a)}))},we=function(){var e=Object(v.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){he.auth().createUserWithEmailAndPassword(t,a).then((function(t){e(t)})).catch((function(e){var t=e.code,a=e.message;console.log("\ud83d\udd12 Authorization =>",t,a),n(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),xe=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){he.auth().signOut().then((function(t){e(t)})).catch((function(e){var a=e.code,n=e.message;console.log("\ud83d\udd12 Authorization =>",a,n),t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=a(151),ye=a(146),Oe=function(){var e=Object(d.f)(),t=Object(u.useLittera)(ue),a=Object(c.a)(t,1)[0],i=le(),o=H(),l=k(),s=Object(n.useState)(""),m=Object(c.a)(s,2),p=m[0],h=m[1],g=Object(n.useState)(""),b=Object(c.a)(g,2),E=b[0],w=b[1],j=Object(n.useState)(""),y=Object(c.a)(j,2),O=y[0],S=y[1],C=function(){var t=Object(v.a)(f.a.mark((function t(a){var n,r,i,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(R,(null===a||void 0===a||null===(n=a.user)||void 0===n?void 0:n.uid)||"",!0);case 2:200===(r=t.sent).status?(l(T(r.data)),(null===(i=r.data)||void 0===i||null===(c=i.flags)||void 0===c?void 0:c.includes("needs_init"))?e.push("/welcome"):e.push("/home")):404===r.status&&S("Account not found!");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(e){return function(t){var a,n,r=null!==(a=null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)&&void 0!==a?a:"";"email"===e&&h(r),"password"===e&&w(r)}};return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{className:i.imgContainer},r.a.createElement("img",{className:i.loginImage,src:pe.a,alt:"loginImage"}),r.a.createElement("img",{className:i.wave,src:ve.a,alt:""})),r.a.createElement(x,{justifyContent:"center",width:"100%",className:i.root},r.a.createElement("div",{className:i.container},r.a.createElement(G.a,{variant:"h3",paragraph:!0},a.title),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S(""),be(p,E).then(C).catch((function(e){S(e.message)}))}},r.a.createElement(x,{className:i.inputWrapper,flexDirection:"column"},r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"email-input",value:p,onChange:_("email"),type:"email",label:"E-Mail",variant:"outlined"}),r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"password-input",value:E,onChange:_("password"),type:"password",label:"Password",variant:"outlined"})),O&&r.a.createElement(je.a,{style:{margin:"10px 0"},severity:"error"},r.a.createElement(ye.a,null,"Upps..."),O),r.a.createElement(x,{justifyContent:"space-between"},r.a.createElement(K.a,{onClick:function(){e.push("/signup")},color:"primary",type:"button"},"Sign Up"),r.a.createElement(me.a,{color:"primary","aria-label":"add",type:"submit"},r.a.createElement(Y.a,{style:{color:"white"}},"keyboard_arrow_right")))),r.a.createElement(K.a,{onClick:function(){ge().then(C).catch((function(e){S(e.message)}))},type:"button"},"Login with Google!"))),r.a.createElement(x,{className:i.footerWrapper,alignItems:"center",justifyContent:"flex-end",height:"42px"},r.a.createElement(G.a,{align:"right"},"Forgot password?")))},ke=Object(b.a)((function(e){return{root:Object(ce.a)({minHeight:"calc(100vh - (300px + 42px))",alignItems:"center"},e.breakpoints.up("sm"),{minHeight:"calc(100vh - (350px + 42px))",alignItems:"flex-start"}),container:{maxWidth:e.breakpoints.values.md,width:"100%",padding:"0 ".concat(e.spacing(4),"px")},inputWrapper:{},signImage:Object(ce.a)({width:"auto",height:"240px",position:"absolute",right:"2%",bottom:"0px"},e.breakpoints.up("sm"),{height:"310px",bottom:"5px"}),imgContainer:Object(ce.a)({height:"300px",position:"relative",overflow:"hidden",background:"linear-gradient(to top left, ".concat(e.palette.primary.dark,", ").concat(e.palette.primary.main,")")},e.breakpoints.up("sm"),{height:"350px"}),wave:{position:"absolute",zIndex:5,bottom:"-10%",left:"-1%",width:"102%",height:"auto"},footerWrapper:{maxWidth:e.breakpoints.values.md,margin:"0 auto",padding:"0 ".concat(e.spacing(4),"px")}}})),Se=function(e){return{title:{en_US:"Sign up",pl_PL:"B\u0105d\u017a w kontakcie!",de_DE:"Stayen ins Touchejen"},yes:e.yes}},Ce=a(79),_e=a.n(Ce),Pe=function(){var e=Object(d.f)(),t=Object(u.useLittera)(Se),a=Object(c.a)(t,1)[0],i=ke(),o=_(),l=Object(n.useState)(""),s=Object(c.a)(l,2),m=s[0],p=s[1],h=Object(n.useState)(""),g=Object(c.a)(h,2),b=g[0],E=g[1],w=Object(n.useState)(""),j=Object(c.a)(w,2),y=j[0],O=j[1],k=Object(n.useState)(""),S=Object(c.a)(k,2),C=S[0],P=S[1],I=function(e){return function(t){var a,n,r=null!==(a=null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.value)&&void 0!==a?a:"";"email"===e&&p(r),"password"===e&&E(r),"password-confirm"===e&&O(r)}};return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{className:i.imgContainer},r.a.createElement("img",{className:i.signImage,src:_e.a,alt:"signImage"}),r.a.createElement("img",{className:i.wave,src:ve.a,alt:""})),r.a.createElement(x,{justifyContent:"center",width:"100%",className:i.root},r.a.createElement("div",{className:i.container},r.a.createElement(G.a,{variant:"h3",paragraph:!0},a.title),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),P("");var a=m,n=b;y===n?n.length<13?P("Password is too short."):we(a,n).then(function(){var t=Object(v.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Result =>",a),(null===a||void 0===a||null===(n=a.user)||void 0===n?void 0:n.uid)&&o("accountIdToken",a.user.uid),e.push("/welcome");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){P(e.message)})):P("Passwords are not identical.")}},r.a.createElement(x,{className:i.inputWrapper,flexDirection:"column"},r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"email-input",value:m,onChange:I("email"),type:"email",label:"E-mail",variant:"outlined"}),r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"password-input",value:b,onChange:I("password"),type:"password",label:"Password",variant:"outlined"}),r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"confirm-password-input",value:y,onChange:I("password-confirm"),type:"password",label:"Confirm password",variant:"outlined"})),C&&r.a.createElement(je.a,{style:{margin:"10px 0"},severity:"error"},r.a.createElement(ye.a,null,"Upps..."),C),r.a.createElement(x,{justifyContent:"space-between"},r.a.createElement(K.a,{onClick:function(){e.push("/login")},color:"primary",type:"button"},"Login"),r.a.createElement(me.a,{color:"primary","aria-label":"add",type:"submit"},r.a.createElement(Y.a,{style:{color:"white"}},"keyboard_arrow_right")))))),r.a.createElement(x,{className:i.footerWrapper,alignItems:"center",justifyContent:"flex-end",height:"42px"},r.a.createElement(G.a,{align:"right"})))},Ie=Object(b.a)((function(e){return{root:{position:"relative",maxWidth:e.breakpoints.values.md,margin:"0 auto",padding:"0 ".concat(e.spacing(4))},inputWrapper:{},wave:{position:"absolute",zIndex:5,bottom:"-10%",left:"-1%",width:"102%",height:"auto"},personalImage:Object(ce.a)({width:"auto",height:"240px",position:"absolute",right:"2%",bottom:"0px"},e.breakpoints.up("sm"),{height:"310px",bottom:"5px"}),imgContainer:Object(ce.a)({height:"300px",position:"relative",overflow:"hidden",background:"linear-gradient(to top left, ".concat(e.palette.primary.dark,", ").concat(e.palette.primary.main,")")},e.breakpoints.up("sm"),{height:"350px"}),welcomeTitle:{color:e.palette.primary.main}}})),Ne=function(e){return{title:{en_US:"Welcome,",pl_PL:"Witamy",de_DE:"Willkommen"},yes:e.yes}},We=a(80),Ae=a.n(We),De=function(){var e,t,a,i=Object(d.f)(),o=Object(u.useLittera)(Ne),l=Object(c.a)(o,1)[0],s=Ie(),m=k(),p=H(),h=O((function(e){return e.currentAccount})),g=Object(n.useState)(null!==(e=null===h||void 0===h?void 0:h.label)&&void 0!==e?e:""),b=Object(c.a)(g,2),E=b[0],w=b[1],j=Object(n.useState)(null!==(t=null===h||void 0===h?void 0:h.name)&&void 0!==t?t:""),y=Object(c.a)(j,2),S=y[0],C=y[1],_=Object(n.useState)(null!==(a=null===h||void 0===h?void 0:h.surname)&&void 0!==a?a:""),P=Object(c.a)(_,2),I=P[0],N=P[1],W=function(e){var t,a,n,r,i=null!==(t=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.id)&&void 0!==t?t:"",o=null!==(n=null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.value)&&void 0!==n?n:"";switch(i){case"label":w(o);break;case"name":C(o);break;case"surname":N(o)}},A=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E&&S&&I)){e.next=12;break}return e.next=3,p(z,(null===h||void 0===h?void 0:h.id)||"",{label:E,name:S,surname:I});case 3:if(204!==e.sent.status){e.next=10;break}return e.next=7,p(R,(null===h||void 0===h?void 0:h.id)||"",!0);case 7:200===(t=e.sent).status&&m(T(t.data)),i.push("/home");case 10:e.next=13;break;case 12:alert("Implement error handling!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:s.imgContainer},r.a.createElement("img",{className:s.personalImage,src:Ae.a,alt:"PersonalInformation"}),r.a.createElement("img",{className:s.wave,src:ve.a,alt:"wave"})),r.a.createElement("div",{className:s.root},r.a.createElement(G.a,{className:s.welcomeTitle,variant:"h2"},l.title," ",null===h||void 0===h?void 0:h.label),r.a.createElement(G.a,{style:{opacity:"0.7",marginBottom:"35px"},paragraph:!0},"Here you need to provide us with some data about you. Name, Surname etc."),r.a.createElement(G.a,{style:{paddingBottom:"16px"},variant:"h4"},"Personal information"),r.a.createElement(x,{flexDirection:"column",className:s.inputWrapper},r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"label",label:"Label",variant:"outlined",value:E,onChange:W}),r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"name",label:"Name",variant:"outlined",value:S,onChange:W}),r.a.createElement(se.a,{style:{marginBottom:"15px"},id:"surname",label:"Surname",variant:"outlined",value:I,onChange:W})),r.a.createElement(K.a,{style:{color:"white",float:"right",marginBottom:"15px"},variant:"contained",color:"primary",onClick:A},"Save")))},Re=Object(b.a)((function(e){return{root:{}}})),ze=function(e){return{title:{en_US:"Home",pl_PL:"Strona g\u0142\xf3wna",de_DE:"Startseite"},yes:e.yes}},Le=function(e){var t=Object(d.f)();return r.a.createElement(G.a,{onClick:function(){return t.push("/room/".concat(e.id))}},e.label)},Ue=function(){var e=Object(d.f)(),t=Object(u.useLittera)(ze),a=Object(c.a)(t,1)[0],n=Re(),i=_(),o=k(),l=O((function(e){return e.currentAccount})),s=function(){var t=Object(v.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xe();case 2:i("accountIdToken"),o(T(null)),e.push("/login");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:n.root},a.title,r.a.createElement(x,{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},l&&r.a.createElement(K.a,{onClick:function(){return e.push("/profile")}},l.label," Profile"),l&&r.a.createElement(K.a,{variant:"contained",onClick:s},"Sign out")),r.a.createElement("br",null),r.a.createElement(G.a,{variant:"h2",gutterBottom:!0},"Rooms"),(null===l||void 0===l?void 0:l.rooms)&&l.rooms.map((function(e){return r.a.createElement(Le,Object.assign({key:e.id},e))})))},Te=Object(b.a)((function(e){return{root:{}}})),Be=function(e){return{title:{en_US:"Profile",pl_PL:"Profil",de_DE:"Profil"},yes:e.yes}},Me=a(148),He=function(e){var t=F(e.account_id,!1,{flags:!0,rooms:!0,contacts:!0});return t?r.a.createElement("div",{style:{border:"1px solid #121212"}},r.a.createElement("img",{alt:"profile",src:t.avatar_url,style:{width:"220px",height:"auto"}}),r.a.createElement(G.a,{gutterBottom:!0,variant:"h4"},t.label),r.a.createElement(G.a,null,t.name," ",t.surname),r.a.createElement(G.a,null,"Is favorite? ",e.favorite?"true":"false")):r.a.createElement("div",null,"...")},Fe=function(){var e=Object(u.useLittera)(Be),t=Object(c.a)(e,1)[0],a=Te(),n=F(void 0,!0);return n?r.a.createElement("div",{className:a.root},t.title,r.a.createElement("img",{alt:"profile",src:n.avatar_url,style:{width:"220px",height:"auto"}}),r.a.createElement(G.a,{paragraph:!0},n.label),r.a.createElement(G.a,{paragraph:!0},n.name),r.a.createElement(G.a,{paragraph:!0},n.surname),r.a.createElement(G.a,{paragraph:!0},n.email),r.a.createElement("br",null),r.a.createElement(G.a,{variant:"h3"},"Contacts:"),(null===n||void 0===n?void 0:n.contacts)&&n.contacts.map((function(e){return r.a.createElement(He,Object.assign({key:e.account_id},e))}))):r.a.createElement(Me.a,null)},Ve=Object(b.a)((function(e){return{root:{position:"relative",flexBasis:"70%",width:"70%"},messagesRoot:{minWidth:"70vw",width:"100%",position:"relative",height:"calc(100vh - 36px)",overflow:"auto",display:"flex"},messageRoot:{margin:"15px 0"},ownedMessage:{alignSelf:"flex-end",color:"#000",backgroundColor:"#eee"},notOwnedMessage:{alignSelf:"flex-start",color:"#FFF",background:e.palette.primary.main},message:{maxWidth:"280px",position:"relative",padding:"16px 22px",borderRadius:"250px"},avatar:{borderRadius:"28px",width:"28px",height:"28px",backgroundColor:"white",right:"-20px",bottom:"-10px",position:"relative",padding:"3px",zIndex:5}}})),Je=a(81),qe=a.n(Je);var Ge=function(e){var t,a,n=e.message,i=e.author,o=e.isOwned,c=Ve(),l=qe()(c.message,(t={},Object(ce.a)(t,c.ownedMessage,o),Object(ce.a)(t,c.notOwnedMessage,!o),t)),u=(a=n.value,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(a)?r.a.createElement("a",{href:n.value,target:"_blank",rel:"noopener noreferrer"},n.value):n.value);return r.a.createElement(x,{alignItems:"flex-end",className:c.messageRoot,style:{alignSelf:o?"flex-end":"flex-start"}},!o&&(null===i||void 0===i?void 0:i.avatar_url)&&r.a.createElement("img",{alt:"author avatar",src:i.avatar_url,className:c.avatar}),r.a.createElement("div",{className:l},u))},Ke=function(e){var t=e.roomId,a=e.accounts,i=Ve(),o=function(e){var t=Object(n.useState)(null),a=Object(c.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){he.database().ref(function(e){return"rooms/".concat(e,"/messages")}(e)).on("value",(function(e){var t;i(null!==(t=e.val())&&void 0!==t?t:[])}))}),[]),r}(t),l=Object(n.useCallback)((function(e){var t;return null!==(t=a.find((function(t){return t.id===e})))&&void 0!==t?t:null}),[a]),u=O((function(e){var t;return null!==(t=e.currentAccount)&&void 0!==t?t:null}));return o?r.a.createElement(x,{flexDirection:"column-reverse",className:i.messagesRoot},Object.keys(o).reverse().map((function(e){var t=o[e];return r.a.createElement(Ge,{key:e,message:t,author:l(t.author),isOwned:(null===u||void 0===u?void 0:u.id)===t.author})}))):r.a.createElement(Me.a,null)},Qe=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),i=a[0],o=a[1];return r.a.createElement("form",{id:"message-form",style:{width:"100%",position:"relative",display:"flex"},onSubmit:function(t){t.preventDefault(),i.length>0&&(e.onSubmit(i),o(""))}},r.a.createElement(se.a,{autoComplete:"off",fullWidth:!0,value:i,onChange:function(e){var t,a;o(null!==(t=null===(a=e.target)||void 0===a?void 0:a.value)&&void 0!==t?t:"")},type:"text",id:"message-textfield"}),r.a.createElement(K.a,{type:"submit",id:"message-submit"},"Submit"))},Ye=function(){var e,t,a,i,o=Object(d.h)(),c=E(),l=O((function(e){return e.currentAccount})),u=function(e,t){var a,r=Object(n.useRef)(),i=H(),o=C();return Object(n.useEffect)((function(){e&&function(){var a=Object(v.a)(f.a.mark((function a(){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i(U,e,!!t);case 2:200===(n=a.sent).status&&(r.current=n.data,o());case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[e]),null!==(a=r.current)&&void 0!==a?a:null}(o.id),s=(a=o.id,i=null!==(e=null===l||void 0===l?void 0:l.id)&&void 0!==e?e:"",Object(n.useCallback)((function(e){var t={author:i,value:e,timestamp:(new Date).toString()},n=he.database().ref().child("rooms").child(a).child("messages").push().key,r={};return r["/rooms/".concat(a,"/messages/").concat(n)]=t,he.database().ref().update(r)}),[i,a]));return u&&u.id?r.a.createElement("div",{className:c.root},r.a.createElement(Ke,{accounts:null!==(t=null===u||void 0===u?void 0:u.accounts)&&void 0!==t?t:[],roomId:u.id}),r.a.createElement(Qe,{onSubmit:s})):r.a.createElement(Me.a,null)},$e=function(){return r.a.createElement("div",{style:{flexBasis:"30%",width:"30%"}},"ResendRooms!")},Ze=function(){return r.a.createElement(x,{width:"100%"},r.a.createElement($e,null),r.a.createElement(Ye,null))};var Xe=function(){var e=Object(d.f)(),t=Object(d.g)();return Object(n.useEffect)((function(){"/"!==t.pathname&&e.push({pathname:"/",state:{initialPath:t.pathname}})}),[]),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:V}),r.a.createElement(d.a,{exact:!0,path:"/intro",component:oe}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:Pe}),r.a.createElement(d.a,{exact:!0,path:"/welcome",component:De}),r.a.createElement(d.a,{exact:!0,path:"/login",component:Oe}),r.a.createElement(d.a,{exact:!0,path:"/home",component:Ue}),r.a.createElement(d.a,{exact:!0,path:"/profile",component:Fe}),r.a.createElement(d.a,{path:"/room/:id",component:Ze}),r.a.createElement(d.a,{exact:!0,component:function(){return r.a.createElement("div",null,"Error page ",r.a.createElement("br",null)," ",r.a.createElement(K.a,{variant:"contained",onClick:function(){return e.push("/")}},"Reload"))}}))},et=a(82),tt=Object(et.a)({palette:{primary:{main:"#449ee2"},secondary:{main:"#99d8ff"},background:{default:"#FAFAFA"}},spacing:4}),at=Object.freeze(["en_US","pl_PL","de_DE"]),nt=Object.freeze({yes:{en_US:"Yes",pl_PL:"Tak",de_DE:"Ja"},no:{en_US:"No",pl_PL:"Nie",de_DE:"Nein"}}),rt=function(e){var t=e.children,a=e.initialState,i=Object(n.useState)(null!==a&&void 0!==a?a:j),o=Object(c.a)(i,2),l=o[0],u=o[1];return r.a.createElement(y.Provider,{value:[l,u]},t)};var it=function(){var e=function(){var e=Object(n.useState)(at[0]),t=Object(c.a)(e,2);return[t[0],t[1],nt]}(),t=Object(c.a)(e,3),a=t[0],i=t[1],o=t[2];return r.a.createElement(rt,null,r.a.createElement(l.a,{theme:tt},r.a.createElement(s.a,{language:a,setLanguage:i,preset:o},r.a.createElement(m.a,{basename:null!=="/circles-web"?"/circles-web":"/"},r.a.createElement(Xe,null)))))},ot=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(104),a(106),a(110);he.initializeApp({apiKey:"AIzaSyA_AUH-zsM6ecOoWFeEKdYRQ-w64nWz3zA",authDomain:"ping-82fee.firebaseapp.com",databaseURL:"https://ping-82fee.firebaseio.com",projectId:"ping-82fee",storageBucket:"ping-82fee.appspot.com",messagingSenderId:"262343699619",appId:"1:262343699619:web:9b197e44a89eb579376316",measurementId:"G-Q9S8PDHJDP"}),he.messaging().usePublicVapidKey("BFpEHR0UHDMxqVkWLbe884ukhegFUVl-SPUGpDaG2PG9BaQMr5BmNeq3BAyzMfqMD-kiJV-dwQKEDcubgNMRozw"),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(it,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ot?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ct(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ct(t,e)}))}}()},41:function(e,t,a){e.exports=a.p+"static/media/wave.21665015.svg"},71:function(e,t,a){e.exports=a.p+"static/media/circles-logo.b212bb26.svg"},75:function(e,t,a){e.exports=a.p+"static/media/intro00.563800af.svg"},76:function(e,t,a){e.exports=a.p+"static/media/intro01.37601bb1.svg"},77:function(e,t,a){e.exports=a.p+"static/media/intro02.1847156e.svg"},78:function(e,t,a){e.exports=a.p+"static/media/verifed.1d3d7325.svg"},79:function(e,t,a){e.exports=a.p+"static/media/celebration.bc0c3204.svg"},80:function(e,t,a){e.exports=a.p+"static/media/personal.ce3bc716.svg"},93:function(e,t,a){e.exports=a(109)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.fe1da7bc.chunk.js.map