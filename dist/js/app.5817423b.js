(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5d348dcb"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"59a6c46b"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],p.parentNode.removeChild(p),r(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2352:function(t,e,r){t.exports=r.p+"img/musa.093087b8.jpg"},4230:function(t,e,r){},"4f82":function(t,e,r){"use strict";var a=r("532a"),n=r.n(a);n.a},"532a":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"grey lighten-4"},[r("Navbar"),r("v-content",{staticClass:"mx-5 mb-4"},[r("router-view")],1),r("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("v-app-bar",{attrs:{flat:"",app:""}},[r("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),r("v-btn",{staticClass:"titelTxt",attrs:{text:"",router:"",to:"/"}},[t._v("Post Eater")]),r("v-spacer"),r("v-toolbar-items",{staticClass:"caption"},[r("v-btn",{attrs:{text:"",router:"",to:"/team"}},[t._v("Team")])],1)],1),r("v-navigation-drawer",{staticClass:"indigo",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.links,(function(e){return r("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[r("v-list-item-action",[r("v-icon",{staticClass:"white--text",attrs:{left:""}},[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)},i=[],c={data:function(){return{drawer:!1,links:[{icon:"mdi-home-circle",text:"Home",route:"/"},{icon:"mdi-account-card-details",text:"Team",route:"/team"}]}},created:function(){},computed:{},methods:{}},l=c,u=r("2877"),d=r("6544"),p=r.n(d),f=r("40dc"),v=r("5bc1"),h=r("8336"),m=r("132d"),b=r("8860"),g=r("da13"),w=r("1800"),y=r("5d23"),_=r("f774"),C=r("2fa4"),P=r("2a7f"),I=Object(u["a"])(l,s,i,!1,null,null,null),k=I.exports;p()(I,{VAppBar:f["a"],VAppBarNavIcon:v["a"],VBtn:h["a"],VIcon:m["a"],VList:b["a"],VListItem:g["a"],VListItemAction:w["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:_["a"],VSpacer:C["a"],VToolbarItems:P["a"]});var x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"footerDiv"},[r("v-row",{attrs:{justify:"center"}},[r("div",[r("p",[t._v("© 2019-2020, "),r("a",{staticClass:"ancorTG",attrs:{href:"http://its.prochito.com/its.prochito.com"}},[t._v("its.prochito.com")]),t._v(" all rights reserved.")])])])],1)},j=[],V={},S=V,E=(r("4f82"),r("a523")),O=r("0fd9"),T=Object(u["a"])(S,x,j,!1,null,"1cf18675",null),A=T.exports;p()(T,{VContainer:E["a"],VRow:O["a"]});var L={name:"App",components:{Navbar:k,Footer:A},data:function(){return{}}},F=L,N=r("7496"),B=r("a75b"),$=Object(u["a"])(F,n,o,!1,null,null,null),q=$.exports;p()($,{VApp:N["a"],VContent:B["a"]});r("d3b7");var z=r("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("h2",{staticClass:"mx-2 allUser",on:{click:function(e){return t.allpost()}}},[t._v("All Users Posts")])]),a("p",{attrs:{align:"center"}},[t._v("cleck to show all posts bellow..")]),a("v-row",[a("v-col",{staticClass:"mt-8",attrs:{md:"1"}},[a("div",{staticClass:"left arrow",on:{click:function(e){return t.scrollLeft()}}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"purple",dark:""}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-left-bold")])],1)],1)]),a("v-col",{attrs:{md:"10"}},[a("div",{ref:"myId",staticClass:"scrolling-wrapper",attrs:{id:"myId"}},t._l(t.users,(function(e){return a("div",{key:e.id,staticClass:"card",on:{click:function(r){return t.optimizePost(e.id)}}},[a("v-avatar",{staticClass:"mt-1 mb-4",attrs:{size:"120"}},[a("img",{attrs:{src:r("2352"),alt:"",srcset:""}})]),a("p",[t._v(t._s(e.name))])],1)})),0)]),a("v-col",{staticClass:"mt-8",attrs:{md:"1"}},[a("div",{staticClass:"right arrow",on:{click:function(e){return t.scrollRight()}}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"purple",dark:""}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-arrow-right-bold")])],1)],1)])],1),a("p",{attrs:{align:"center"}},[t._v("cleck to show there specifi posts bellow..")]),a("v-row",{attrs:{justify:"center"}},[a("h2",[t._v("See latest Post ")])]),a("v-row",{attrs:{justify:"center"}},t._l(t.singleIdPosts,(function(e){return a("v-col",{key:e.id,staticClass:"postCard",attrs:{md:"3"},on:{click:function(e){t.postShow=!t.postShow}}},[a("v-row",[a("v-col",{staticClass:"pl-2",attrs:{md:"3"}},[a("v-avatar",{attrs:{size:"50"}},[t._v(" "+t._s(e.id)+" ")])],1),a("v-col",{staticClass:"postTxt",attrs:{md:"8"}},[a("h4",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.body))])])],1)],1)})),1),t.postShow?a("v-row",{staticClass:"userPost",on:{click:function(e){t.postShow=!t.postShow}}},[a("h2",{staticClass:"white--text"},[t._v("this is a post details page")])]):t._e()],1)},M=[],R=(r("159b"),{name:"home",data:function(){return{postShow:!1,users:[],userPost:[],userId:"",userPosId:"",singleIdPosts:[]}},created:function(){var t=this,e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){e.userPost=t,e.userPost.forEach((function(t){var r={title:t.title,body:t.body,id:t.id};e.singleIdPosts.push(r)}))})),fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){t.users=e}))},watch:{userId:{handler:function(t){this.calculate()},deep:!0}},methods:{scrollLeft:function(){var t=document.querySelector(".scrolling-wrapper");t.scrollLeft-=100},scrollRight:function(){var t=document.querySelector(".scrolling-wrapper");t.scrollLeft+=100},optimizePost:function(t){var e=this;e.userId=t},calculate:function(){var t=this;t.singleIdPosts=[],t.userPost.forEach((function(e){var r={title:e.title,body:e.body,id:e.id,userId:e.userId};t.userId==r.userId&&t.singleIdPosts.push(r)}))},allpost:function(){var t=this;t.singleIdPosts=[],t.userPost.forEach((function(e){var r={title:e.title,body:e.body,id:e.id,userId:e.userId};t.singleIdPosts.push(r)}))}}}),U=R,H=(r("cccb"),r("8212")),J=r("62ad"),G=Object(u["a"])(U,D,M,!1,null,null,null),K=G.exports;p()(G,{VAvatar:H["a"],VBtn:h["a"],VCol:J["a"],VContainer:E["a"],VIcon:m["a"],VRow:O["a"]}),a["default"].use(z["a"]);var Q=[{path:"/",name:"home",component:K},{path:"/Team",name:"taam",component:function(){return r.e("about").then(r.bind(null,"0767"))}}],W=new z["a"]({mode:"hash",base:"/",routes:Q}),X=W,Y=r("ce5b"),Z=r.n(Y);r("bf40");a["default"].use(Z.a);var tt=new Z.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});r("d5e8"),r("5363");a["default"].config.productionTip=!1,new a["default"]({router:X,vuetify:tt,data:function(){return{}},render:function(t){return t(q)}}).$mount("#app")},cccb:function(t,e,r){"use strict";var a=r("4230"),n=r.n(a);n.a}});
//# sourceMappingURL=app.5817423b.js.map