webpackJsonp([4],{"/yRs":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=(n=s("8ebl")).default||n,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var o=s("VU/8")(a,r,!1,function(t){s("tvr4")},null,null);e.default=o.exports},0:function(t,e){},"5ZbH":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=(n=s("hOwk")).default||n,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var o=s("VU/8")(a,r,!1,function(t){s("6X0i")},null,null);e.default=o.exports},"5cLx":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=(n=s("WgA/")).default||n,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},o=s("VU/8")(a,r,!1,null,null,null);e.default=o.exports},"6X0i":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("NYxO"),r=s("8+8L"),o=s("A0EI"),i=s.n(o),u=s("NETs"),l=s.n(u),c=s("olAn"),p=s("AYPi"),m=s.n(p),v=s("sA6N"),d=s("424j"),h=s("grln"),j=s.n(h),f=(s("tvyh"),{name:"App",created:function(){this.updateBreadcrumb()},watch:{$route:"updateBreadcrumb"},methods:{updateBreadcrumb:function(){console.log(this.$store.state.navPageList),this.$store.state.navPageList=this.$route.path.substr(1).split("/").filter(Boolean),this.$store.state.navPageList.unshift("Home"),console.log(this.$store.state.navPageList)},logout:function(){var t=this;this.$store.state.authenticate.username="",this.$store.state.authenticate.token="",this.$http.get(this.$store.state.endpoint+"/logout").then(function(e){!0===e.body.flag?(t.$message.success("Logout: Successfully.",3),t.$store.state.authenticate.username="",t.$store.state.authenticate.token=""):t.$message.error("Logout: Failed. Please try again later.",10)},function(e){t.$message.error("Logout: Internal Server Error. Please contact administrator.",10)})}},computed:{thisYear:function(){return(new Date).getFullYear()}}}),g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a-layout",{attrs:{id:"app"}},[s("a-back-top"),t._v(" "),s("div",{staticClass:"background"}),t._v(" "),s("a-layout-header",{staticClass:"header"},[s("div",{staticClass:"logo"}),t._v(" "),s("a-menu",{staticStyle:{"box-shadow":"rgba(-2, 0, 0, 0.14) 0 16px 24px 10px, rgba(-2 0, 0, 0.12) 0 6px 30px 5px, rgba(0, 0, 0, 1) 0 8px 20px -5px }"},style:{lineHeight:"64px",background:"none"},attrs:{theme:"dark",breakpoint:"lg",mode:"horizontal",defaultSelectedKeys:["0"]}},[s("a-menu-item",{key:"home"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("a-sub-menu",[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("Authors "),s("a-icon",{attrs:{type:"down"}})],1),t._v(" "),s("a-menu-item",{key:"authors:call-for-papers"},[s("router-link",{attrs:{to:"/pages/call-for-papers"}},[t._v("Call for Papers")])],1),t._v(" "),s("a-menu-item",{key:"authors:paper-submission"},[s("router-link",{attrs:{to:"/my/submissions/paper/add"}},[t._v("Paper Submission")])],1),t._v(" "),s("a-menu-item",{key:"authors:important-dates"},[s("router-link",{attrs:{to:"/pages/important-dates"}},[t._v("Important Dates")])],1)],1),t._v(" "),s("a-sub-menu",[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("Program "),s("a-icon",{attrs:{type:"down"}})],1),t._v(" "),s("a-menu-item",{key:"program:category-and-session"},[s("router-link",{attrs:{to:"/pages/category-and-session"}},[t._v("Categories and Sessions")])],1),t._v(" "),s("a-menu-item",{key:"program:forum"},[s("router-link",{attrs:{to:"/forum"}},[t._v("Forums")])],1),t._v(" "),s("a-menu-item",{key:"program:workshops"},[s("router-link",{attrs:{to:"/workshops"}},[t._v("Workshops")])],1),t._v(" "),s("a-menu-item",{key:"program:schedule"},[s("router-link",{attrs:{to:"/pages/schedule"}},[t._v("Schedule")])],1),t._v(" "),s("a-menu-item",{key:"program:accepted-papers"},[s("router-link",{attrs:{to:"/pages/accepted-papers"}},[t._v("Accepted Papers")])],1)],1),t._v(" "),s("a-sub-menu",[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("Attending "),s("a-icon",{attrs:{type:"down"}})],1),t._v(" "),s("a-menu-item",{key:"attending:accommodation"},[s("router-link",{attrs:{to:"/pages/accommodation"}},[t._v("Accommodation")])],1),t._v(" "),s("a-menu-item",{key:"attending:local-information"},[s("router-link",{attrs:{to:"/pages/local-information"}},[t._v("Local Information")])],1),t._v(" "),s("a-menu-item",{key:"attending:registration"},[s("router-link",{attrs:{to:"/pages/registration"}},[t._v("Registration")])],1)],1),t._v(" "),s("a-menu-item",{key:"exhibition"},[s("router-link",{attrs:{to:"/pages/exhibition"}},[t._v("Exhibitions")])],1),t._v(" "),s("a-menu-item",{key:"committee"},[s("router-link",{attrs:{to:"/pages/committee"}},[t._v("Committee")])],1),t._v(" "),s("a-menu-item",{key:"sponsors"},[s("router-link",{attrs:{to:"/pages/sponsors"}},[t._v("Sponsors")])],1),t._v(" "),s("a-sub-menu",[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("About Us "),s("a-icon",{attrs:{type:"down"}})],1),t._v(" "),s("a-menu-item",{key:"about-us:mission-and-vision"},[s("router-link",{attrs:{to:"/pages/mission-and-vision"}},[t._v("Mission and Vision")])],1),t._v(" "),s("a-sub-menu",{key:"about-us:previous-conferences",style:{marginRight:"1em"},attrs:{title:"Previous Conferences"}},[s("a-menu-item",{key:"about-us:previous-conferences:uv-2013"},[s("router-link",{attrs:{to:"/archive/uv-2013"}},[t._v("UV 2013")])],1),t._v(" "),s("a-menu-item",{key:"about-us:previous-conferences:uv-2014"},[s("router-link",{attrs:{to:"/archive/uv-2014"}},[t._v("UV 2014")])],1),t._v(" "),s("a-menu-item",{key:"about-us:previous-conferences:uv-2016"},[s("router-link",{attrs:{to:"/archive/uv-2016"}},[t._v("UV 2016")])],1)],1),t._v(" "),s("a-menu-item",{key:"about-us:contact-us"},[s("router-link",{attrs:{to:"/pages/contact-us"}},[t._v("Contact Us")])],1)],1),t._v(" "),s("a-menu-item",{key:"my-uv"},[s("router-link",{attrs:{to:"/my"}},[t._v("My UV")])],1),t._v(" "),0===this.$store.state.authenticate.token.length?s("a-menu-item",{key:"logged-out",staticClass:"disable-activation",staticStyle:{float:"right"}},[s("router-link",{attrs:{to:"/login"}},[s("a-button",{staticClass:"btn",attrs:{type:"dashed"}},[s("a-icon",{attrs:{type:"login"}}),t._v(" Login")],1)],1)],1):s("a-menu-item",{key:"logged-in",staticClass:"disable-activation",staticStyle:{float:"right",color:"rgba(255, 255, 255, 0.65)"}},[s("span",{staticStyle:{"font-family":"Source Code Pro, Courier New, Courier, Consolas, Menlo, monospace"}},[t._v("\n          "+t._s(this.$store.state.authenticate.username)+"\n        ")]),t._v(" "),s("a-divider",{attrs:{type:"vertical"}}),t._v(" "),s("a-button",{staticClass:"btn",attrs:{type:"danger"},on:{click:t.logout}},[s("a-icon",{attrs:{type:"logout"}}),t._v(" Logout")],1)],1)],1)],1),t._v(" "),s("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[s("router-view",{attrs:{name:"App"}})],1),t._v(" "),s("a-layout-footer",{staticStyle:{"text-align":"center",background:"rgba(240,242,245,.5)"}},[t._v("\n    Copyright © 2012-"+t._s(t.thisYear)+". The International Conference on Universal Village. All Rights Reserved.\n  ")])],1)},staticRenderFns:[]};var y=s("VU/8")(f,g,!1,function(t){s("vGPm")},null,null).exports,b=s("/ocq");n.default.use(b.a);var k=new b.a({base:"/uv2018",routes:[{path:"/",name:"Home",components:{App:function(){return s.e(1).then(s.bind(null,"lO7g"))}}},{path:"/login",name:"Login",components:{App:function(){return s.e(2).then(s.bind(null,"IdyC"))}}},{path:"/register",name:"Register",components:{App:function(){return s.e(2).then(s.bind(null,"ZIrY"))}}},{path:"/reset-password",name:"Reset Password",components:{App:function(){return s.e(2).then(s.bind(null,"1xEE"))}}},{path:"/my",name:"My Base Object",components:{App:function(){return s.e(0).then(s.bind(null,"oTaY"))}},children:[{path:"",name:"My UV / Homepage",components:{My:function(){return s.e(0).then(s.bind(null,"M9YD"))}}},{path:"submissions",components:{My:function(){return s.e(0).then(s.bind(null,"MgXP"))}},children:[{path:"paper",components:{MySubmissions:function(){return s.e(1).then(s.bind(null,"QRLF"))}}},{path:"add",components:{MySubmissions:function(){return s.e(0).then(s.bind(null,"AIv4"))}}}]}]},{path:"/pages",name:"Pages",components:{App:function(){return s.e(1).then(s.bind(null,"7Kx4"))}}},{path:"/pages/:page",name:"Pages Detail",components:{App:function(){return s.e(1).then(s.bind(null,"u+y1"))}}}]});n.default.config.productionTip=!1,n.default.use(a.a),n.default.use(r.a),n.default.use(i.a),n.default.use(j.a),n.default.use(l.a),n.default.use(m.a,{id:"UA-122336687-1",router:k}),n.default.use(v,{load:{key:"AIzaSyAuciiA4rPTALnygCCw1xT0EcHV-Oqh1y0",libraries:"places"}});var _=new a.a.Store({state:{endpoint:"https://api-beta.universal-village.org/uv-web",navPageList:[],authenticate:{token:"1",role:0,username:"root",permission:0,shaSalt:"universal-village"},sitekey:"6Ldn5WMUAAAAAAbUaPRaIVkp2C8HrpIVvjM2vf0U"},plugins:[Object(d.a)()]});n.default.filter("capitalize",function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}),new n.default({el:"#app",router:k,store:_,components:{App:y,VueRecaptcha:c.a},template:"<App />"})},O1XB:function(t,e,s){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=n},YI6p:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("jIen"),a=s.n(n);for(var r in n)"default"!==r&&function(t){s.d(e,t,function(){return n[t]})}(r);var o=s("O1XB"),i=s("VU/8")(a.a,o.a,!1,null,null,null);e.default=i.exports},preG:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=(n=s("hQTS")).default||n,r={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:this.placeholder},domProps:{value:this.value}})},staticRenderFns:[]},o=s("VU/8")(a,r,!1,null,null,null);e.default=o.exports},tvr4:function(t,e){},tvyh:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(r(t))}function r(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="uslO"},vGPm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c9dd82f9d40d7966ab18.js.map