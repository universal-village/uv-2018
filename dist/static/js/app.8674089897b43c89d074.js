webpackJsonp([1],{"+MRW":function(e,t){},0:function(e,t){},In0R:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),o=a("NYxO"),r=a("8+8L"),n=a("A0EI"),i=a.n(n),l=a("NETs"),c=a.n(l),p=a("olAn"),u=a("grln"),d=a.n(u),m=(a("tvyh"),{name:"App",created:function(){this.updateBreadcrumb()},watch:{$route:"updateBreadcrumb"},methods:{updateBreadcrumb:function(){console.log(this.$store.state.navPageList),this.$store.state.navPageList=this.$route.path.substr(1).split("/").filter(Boolean),this.$store.state.navPageList.unshift("Home"),console.log(this.$store.state.navPageList)},logout:function(){var e=this;this.$store.state.authenticate.username="",this.$store.state.authenticate.token="",this.$http.get(this.$store.state.endpoint+"/logout").then(function(t){!0===t.body.flag?(e.$message.success("Logout: Successfully.",3),e.$store.state.authenticate.username="",e.$store.state.authenticate.token="",setTimeout(function(){e.$router.push("/")},3e3)):e.$message.error("Logout: Failed. Please try again later.",10)},function(t){e.$message.error("Logout: Internal Server Error. Please contact administrator.",10)})}},computed:{thisYear:function(){return(new Date).getFullYear()}}}),f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{attrs:{id:"app"}},[a("a-layout-header",{staticClass:"header"},[a("div",{staticClass:"logo"}),e._v(" "),a("a-menu",{staticStyle:{"box-shadow":"rgba(-2, 0, 0, 0.14) 0 16px 24px 10px, rgba(-2 0, 0, 0.12) 0 6px 30px 5px, rgba(0, 0, 0, 1) 0 8px 20px -5px }"},style:{lineHeight:"64px",background:"none"},attrs:{theme:"dark",breakpoint:"lg",mode:"horizontal",defaultSelectedKeys:["0"]}},[a("a-menu-item",{key:"0"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/my"}},[e._v("My UV")])],1)],1),e._v(" "),0===this.$store.state.authenticate.token.length?a("div",{staticStyle:{float:"right",transform:"translateY(-4.5em)"}},[a("router-link",{attrs:{to:"/login"}},[a("a-button",{attrs:{type:"dashed"}},[e._v("Login")])],1)],1):a("div",{staticStyle:{float:"right",transform:"translateY(-4.5em)",color:"rgba(255, 255, 255, 0.65)"}},[e._v("\n      "+e._s(this.$store.state.authenticate.username)+"   "),a("a-button",{attrs:{type:"danger"},on:{click:e.logout}},[e._v("Logout")])],1)],1),e._v(" "),a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("router-view",{attrs:{name:"App"}})],1),e._v(" "),a("a-layout-footer",{staticStyle:{"text-align":"center",background:"rgba(240,242,245,.5)"}},[e._v("\n    Copyright © 2012-"+e._s(e.thisYear)+". The International Conference on Universal Village. All Rights Reserved.\n  ")])],1)},staticRenderFns:[]};var h=a("VU/8")(m,f,!1,function(e){a("ld/C")},null,null).exports,y=a("/ocq"),g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-layout-content",{staticStyle:{padding:"0 50px"}},[a("a-layout",{staticStyle:{padding:"0 24px 24px",background:"rgba(255, 255, 255, .75)"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},e._l(this.$store.state.navPageList,function(t){return a("a-breadcrumb-item",{key:t},[e._v("\n          "+e._s(e._f("capitalize")(t))+"\n        ")])})),e._v(" "),a("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},[a("div",{attrs:{property:"content:encoded"}},[a("p",[e._v("After great success in China (Beijing, UV2013), United States (Boston, UV2014) and Japan (Nagoya, UV2016), the Fourth International Conference on Universal Village (UV2018) will be held again in Boston, United States. UV2018 will intensively exemplifies a desired future society that pursues human-nature harmony through wise application of advanced technologies. The concept is an expanded/advanced version of Smart Cities, and signifies that we follow the law of universe to protect the environment and eco-systems, while innovate new lifestyles to provide sustainable happiness for humanity’s future.")]),e._v(" "),a("p",[e._v("UV2018 will call for the collective efforts across multi-disciplinary fields to develop a platform where researchers with different backgrounds can well collaborate beyond the traditional filed boundaries, and to find a systematic, coordinated, long-term solution for the future of human kind and mother nature.")]),e._v(" "),a("p",[e._v("Subjects for UV2018 include but are not limited to the following topics:")]),e._v(" "),a("ul",[a("li",[e._v("Develop systematic methodologies to advance UV technologies and to develop UV systems, including, intelligent transportation, intelligent environment & communities, intelligent healthcare, intelligent food systems, etc.")]),e._v(" "),a("li",[e._v("New life styles enabled by IT / New energy sources / New materials / Effective microorganism technology and environmental protection.")]),e._v(" "),a("li",[e._v("Address suitable paths of design, development, implementation, engineering and integration appropriate for different regions.")]),e._v(" "),a("li",[e._v("Explore how to benefit governments, companies, universities as well as societies on specific UV topics as well as practical UV solutions.")])]),e._v(" "),a("router-link",{attrs:{to:"/pages/uv2018-call-for-paper"}},[a("a-button",{attrs:{type:"dashed"}},[e._v("\n              UV2018 Call for Paper\n            ")])],1)],1)])],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")({name:"Home"},g,!1,function(e){a("pWj3")},null,null).exports,b={name:"Login",components:{VueRecaptcha:p.a},data:function(){return{email:"",password:"",spinning:!1}},watch:{$route:"checkLoginStatus"},created:function(){this.checkLoginStatus()},methods:{emitEmptyEmail:function(){this.$refs.emailInput.focus(),this.email=""},emitEmptyPassword:function(){this.$refs.passwordInput.focus(),this.password=""},handleSubmit:function(e){var t=this;this.spinning=!0,e.preventDefault(),this.$http.post(this.$store.state.endpoint+"/login",{email:this.email,password:this.password},{emulateJSON:!0}).then(function(e){console.log(e.body.flag),t.spinning=!1,!0===e.body.flag?(t.$message.success("Successfully logged in. Redirecting you to the homepage in 3s.",4),t.$store.state.authenticate.username=t.email,t.$store.state.authenticate.token=t.email,setTimeout(function(){t.$router.push("/")},3e3)):t.$message.error("Username or Password is incorrect. Check your credentials and try again.",10)},function(e){t.spinning=!1,t.$message.error("Internal Server Error. Please try again.",10)})},checkStatus:function(e){403===e?this.$router.push("/login"):e>500?this.$router.push("/error/server-error"):404===e?this.$router.push("/error/not-found"):this.$router.push("/error/unknown-error")},checkLoginStatus:function(){this.$store.state.authenticate.token.length>0?this.$router.go(-1):this.$store.state.authenticate.username.length>0&&this.$router.go(-1)}}},x={render:function(){var e=this,t=this,a=t.$createElement,s=t._self._c||a;return s("a-layout-content",{staticStyle:{padding:"0 50px"}},[s("a-layout",{staticStyle:{padding:"0 24px 24px",background:"rgba(255, 255, 255, .75)"}},[s("a-breadcrumb",{staticStyle:{margin:"16px 0"}},t._l(this.$store.state.navPageList,function(e){return s("a-breadcrumb-item",{key:e},[t._v("\n        "+t._s(t._f("capitalize")(e))+"\n      ")])})),t._v(" "),s("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},[s("div",{staticClass:"content"},[s("a-spin",{attrs:{spinning:t.spinning}},[s("h1",[t._v("Login   "),s("span",{staticStyle:{"font-size":"60%"}},[t._v("Not a member? "),s("router-link",{attrs:{to:"/register"}},[t._v("Register >")])],1)]),t._v(" "),s("a-form",{attrs:{autoFormCreate:function(t){e.form=t}},on:{submit:t.handleSubmit}},[s("a-form-item",{attrs:{label:"E-mail",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"email",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your E-mail!"}]}}},[s("a-input",{ref:"emailInput",attrs:{placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"}),t._v(" "),t.email?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyEmail},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Password",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your password!"}]}}},[s("a-input",{ref:"passwordInput",attrs:{placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"}),t._v(" "),t.password?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyPassword},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{wrapperCol:{span:12,offset:3}}},[s("a-button",{attrs:{type:"primary",htmlType:"submit"}},[t._v("\n                  Submit\n                ")])],1)],1)],1)],1)])],1)],1)},staticRenderFns:[]};var _=a("VU/8")(b,x,!1,function(e){a("In0R")},"data-v-4619347c",null).exports,k=a("pFYg"),w=a.n(k),j={name:"Login",components:{VueRecaptcha:p.a},data:function(){return{spinning:!1,email:"",password:"",confirmPassword:"",zipcode:"",bios:"",firstname:"",middlename:"",lastname:"",nameInOwnLanguage:"",organization:"",address:"",city:"",state:"",country:"",telephone:"",fax:"",cellphone:"",passport:"",needSupport:!0,birthdayDate:"",title:"",current:0,steps:[{index:0,name:"Personal Information",icon:"user"},{index:1,name:"Academic Information",icon:"book"},{index:2,name:"Contact Information",icon:"phone"},{index:3,name:"Personification",icon:"skin"}]}},watch:{$route:"checkLoginStatus"},created:function(){this.checkLoginStatus()},methods:{next:function(){this.current++},prev:function(){this.current--},emitEmptyEmail:function(){this.$refs.emailInput.focus(),this.email=""},emitEmptyPassword:function(){this.$refs.passwordInput.focus(),this.password=""},emitEmptyField:function(e){console.log(e)},birthdayDateStringHandler:function(e,t){console.log(e,t)},handleSubmit:function(e){var t=this;this.spinning=!0,e.preventDefault(),console.log(this.birthdayDate,w()(this.birthdayDate),this.birthdayDate.toString(),w()(this.birthdayDate.toString())),this.$http.post(this.$store.state.endpoint+"/register",{email:this.email,password:this.password,zipcode:this.zipcode,bios:this.bios,firstname:this.firstname,middlename:this.middlename,lastname:this.lastname,nameInOwnLanguage:this.nameInOwnLanguage,organization:this.organization,address:this.address,city:this.city,state:this.state,country:this.country,telephone:this.telephone,fax:this.fax,cellphone:this.cellphone,passport:this.passport,needSupport:this.needSupport,birthyear:this.birthdayDate.toString().split(".")[0],birthmonth:this.birthdayDate.toString().split(".")[1],birthday:this.birthdayDate.toString().split(".")[2],title:this.title},{emulateJSON:!0}).then(function(e){console.log(e.body.flag),t.spinning=!1,!0===e.body.flag?(t.$message.success("Successfully registered. Please use your E-mail to log in",5),t.$router.push("/login")):t.$message.error("Registration failed. Check your form and try again.",10)},function(e){t.spinning=!1,t.$message.error("Internal Server Error. Please try again.",10)})},checkStatus:function(e){403===e?this.$router.push("/login"):e>500?this.$router.push("/error/server-error"):404===e?this.$router.push("/error/not-found"):this.$router.push("/error/unknown-error")},checkLoginStatus:function(){console.log(this.birthdayDate),this.$store.state.authenticate.token.length>0?this.$router.go(-1):this.$store.state.authenticate.username.length>0&&this.$router.go(-1)}}},S={render:function(){var e=this,t=this,a=t.$createElement,s=t._self._c||a;return s("a-layout-content",{staticStyle:{padding:"0 50px"}},[s("a-layout",{staticStyle:{padding:"0 24px 24px",background:"rgba(255, 255, 255, .75)"}},[s("a-breadcrumb",{staticStyle:{margin:"16px 0"}},t._l(this.$store.state.navPageList,function(e){return s("a-breadcrumb-item",{key:e},[t._v("\n        "+t._s(t._f("capitalize")(e))+"\n      ")])})),t._v(" "),s("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},[s("div",{staticClass:"content"},[s("a-spin",{attrs:{spinning:t.spinning}},[s("h1",[t._v("Register   "),s("span",{staticStyle:{"font-size":"60%"}},[t._v("Already a member? "),s("router-link",{attrs:{to:"/login"}},[t._v("Login >")])],1)]),t._v(" "),s("div",{staticClass:"stepShow"},[s("a-steps",{attrs:{direction:"vertical",size:"small",current:t.current}},t._l(t.steps,function(e){return s("a-step",{key:e,attrs:{title:e.name}},[e.index===t.current?s("a-icon",{attrs:{slot:"icon",type:"loading"},slot:"icon"}):e.index>t.current?s("a-icon",{attrs:{slot:"icon",type:e.icon},slot:"icon"}):s("a-icon",{attrs:{slot:"icon",type:"check"},slot:"icon"})],1)}))],1),t._v(" "),s("a-form",{attrs:{autoFormCreate:function(t){e.form=t}},on:{submit:t.handleSubmit}},[0===t.current?s("div",[s("a-form-item",{attrs:{label:"Title",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"title",fieldDecoratorOptions:{rules:[{required:!0,message:"How should we call you?"}]}}},[s("a-input",{ref:"titleInput",attrs:{placeholder:"Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"}),t._v(" "),t.title?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"First Name",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"firstname",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your First Name!"}]}}},[s("a-input",{attrs:{placeholder:"First Name"},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}},[t.firstname?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Middle Name",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"middlename",fieldDecoratorOptions:{rules:[{required:!1,message:"Please input your Middle Name!"}]}}},[s("a-input",{attrs:{placeholder:"Middle Name"},model:{value:t.middlename,callback:function(e){t.middlename=e},expression:"middlename"}},[t.middlename?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Last Name",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"lastname",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Last Name!"}]}}},[s("a-input",{attrs:{placeholder:"Last Name"},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}},[t.lastname?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Name in own Language",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"nameInOwnLanguage",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Name in own Language!"}]}}},[s("a-input",{ref:"nameInOwnLanguageInput",attrs:{placeholder:"Name in own Language"},model:{value:t.nameInOwnLanguage,callback:function(e){t.nameInOwnLanguage=e},expression:"nameInOwnLanguage"}},[s("a-icon",{attrs:{slot:"prefix",type:"contacts"},slot:"prefix"}),t._v(" "),t.nameInOwnLanguage?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"E-mail",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"email",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your E-mail!"}]}}},[s("a-input",{ref:"emailInput",attrs:{placeholder:"example@example.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[s("a-icon",{attrs:{slot:"prefix",type:"mail"},slot:"prefix"}),t._v(" "),t.email?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Password",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Password!"}]}}},[s("a-input",{ref:"passwordInput",attrs:{type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"}),t._v(" "),t.password?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Confirm Password",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"confirmPassword",fieldDecoratorOptions:{rules:[{required:!0,message:"Please confirm your password!"}]}}},[s("a-input",{ref:"confirmPasswordInput",attrs:{type:"password",placeholder:"Your password again"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"}),t._v(" "),t.confirmPassword?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Birthday",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"birthdayDate",fieldDecoratorOptions:{rules:[{required:!0,message:"What's your Birthday?"}]}}},[s("a-input",{ref:"titleInput",attrs:{placeholder:"Birthday"},model:{value:t.birthdayDate,callback:function(e){t.birthdayDate=e},expression:"birthdayDate"}},[s("a-icon",{attrs:{slot:"prefix",type:"gift"},slot:"prefix"}),t._v(" "),t.birthdayDate?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1)],1):1===t.current?s("div",[s("a-form-item",{attrs:{label:"Biblography",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"bios",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Biblography!"}]}}},[s("a-textarea",{ref:"biosInput",attrs:{placeholder:"Short summary about yourself",autosize:{minRows:3}},model:{value:t.bios,callback:function(e){t.bios=e},expression:"bios"}},[s("a-icon",{attrs:{slot:"prefix",type:"smile"},slot:"prefix"}),t._v(" "),t.bios?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Organization",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"organization",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Organization!"}]}}},[s("a-input",{ref:"organizationInput",attrs:{placeholder:"Organization"},model:{value:t.organization,callback:function(e){t.organization=e},expression:"organization"}},[s("a-icon",{attrs:{slot:"prefix",type:"team"},slot:"prefix"}),t._v(" "),t.organization?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1)],1):2===t.current?s("div",[s("a-form-item",{attrs:{label:"Address",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"address",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Address!"}]}}},[s("a-input",{ref:"addressInput",attrs:{placeholder:"Address"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}},[s("a-icon",{attrs:{slot:"prefix",type:"car"},slot:"prefix"}),t._v(" "),t.address?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"City",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"city",fieldDecoratorOptions:{rules:[{required:!1,message:"Please input your City!"}]}}},[s("a-input",{ref:"cityInput",attrs:{placeholder:"City"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},[s("a-icon",{attrs:{slot:"prefix",type:"car"},slot:"prefix"}),t._v(" "),t.city?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Zip Postal Code",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"zipcode",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Zip Postal Code!"}]}}},[s("a-input",{ref:"zipcodeInput",attrs:{placeholder:"02049"},model:{value:t.zipcode,callback:function(e){t.zipcode=e},expression:"zipcode"}},[s("a-icon",{attrs:{slot:"prefix",type:"mail"},slot:"prefix"}),t._v(" "),t.zipcode?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"State",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"state",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your State!"}]}}},[s("a-input",{ref:"stateInput",attrs:{placeholder:"State"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[s("a-icon",{attrs:{slot:"prefix",type:"car"},slot:"prefix"}),t._v(" "),t.state?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Country",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"country",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Country!"}]}}},[s("a-input",{ref:"countryInput",attrs:{placeholder:"Country"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},[s("a-icon",{attrs:{slot:"prefix",type:"car"},slot:"prefix"}),t._v(" "),t.country?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Telephone",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"telephone",fieldDecoratorOptions:{rules:[{required:!1,message:"Please input your Telephone!"}]}}},[s("a-input",{ref:"telephoneInput",attrs:{placeholder:"Telephone"},model:{value:t.telephone,callback:function(e){t.telephone=e},expression:"telephone"}},[s("a-icon",{attrs:{slot:"prefix",type:"phone"},slot:"prefix"}),t._v(" "),t.telephone?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Fax",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"fax",fieldDecoratorOptions:{rules:[{required:!1,message:"Please input your Fax!"}]}}},[s("a-input",{ref:"faxInput",attrs:{placeholder:"Fax"},model:{value:t.fax,callback:function(e){t.fax=e},expression:"fax"}},[s("a-icon",{attrs:{slot:"prefix",type:"phone"},slot:"prefix"}),t._v(" "),t.fax?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),s("a-form-item",{attrs:{label:"Cellphone",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"cellphone",fieldDecoratorOptions:{rules:[{required:!1,message:"Please input your Cellphone!"}]}}},[s("a-input",{ref:"cellphoneInput",attrs:{placeholder:"Cellphone"},model:{value:t.cellphone,callback:function(e){t.cellphone=e},expression:"cellphone"}},[s("a-icon",{attrs:{slot:"prefix",type:"phone"},slot:"prefix"}),t._v(" "),t.cellphone?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1)],1):3===t.current?s("div",[s("a-form-item",{attrs:{label:"I Need a Support Letter for US Visa",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"needSupport",fieldDecoratorOptions:{rules:[{required:!0,message:"Do you need Support?"}]}}},[s("a-switch",{attrs:{checkedChildren:"Yes",unCheckedChildren:"No"},model:{value:t.needSupport,callback:function(e){t.needSupport=e},expression:"needSupport"}})],1),t._v(" "),t.needSupport?s("a-form-item",{attrs:{label:"Passport Number",labelCol:{span:9},wrapperCol:{span:12},fieldDecoratorId:"passport",fieldDecoratorOptions:{rules:[{required:!1,message:"Please input your Passport!"}]}}},[s("a-input",{ref:"passportInput",attrs:{placeholder:"Passport"},model:{value:t.passport,callback:function(e){t.passport=e},expression:"passport"}},[s("a-icon",{attrs:{slot:"prefix",type:"idcard"},slot:"prefix"}),t._v(" "),t.passport?s("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1):t._e(),t._v(" "),s("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"submit"}},[t._v("\n                  Submit   "),s("a-icon",{attrs:{type:"forward"}})],1)],1):s("div",[t._v("\n              App Error. Please contact administrator.\n            ")]),t._v(" "),s("a-button-group",{staticStyle:{float:"right"},attrs:{size:t.size}},[t.current>0&&t.current<=3?s("a-button",{attrs:{type:"primary"},on:{click:t.prev}},[s("a-icon",{attrs:{type:"left"}}),t._v("Previous\n              ")],1):t._e(),t._v(" "),t.current>=0&&t.current<3?s("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("\n                Next"),s("a-icon",{attrs:{type:"right"}})],1):t._e()],1)],1)],1)],1)])],1)],1)},staticRenderFns:[]};var I=a("VU/8")(j,S,!1,function(e){a("oOT0")},"data-v-4cdfc75e",null).exports,C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{staticStyle:{background:"none !important"}},[a("a-layout-sider",{staticStyle:{background:"none"},attrs:{width:"200"}},[a("a-menu",{style:{height:"100%",borderRight:0,background:"rgba(255, 255, 255, .5)"},attrs:{mode:"inline"}},[a("a-sub-menu",{key:"sub1"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"solution"}}),e._v("My Submissions")],1),e._v(" "),a("a-menu-item",{key:"1"},[a("router-link",{attrs:{to:"/my/submissions/paper"}},[a("a-icon",{attrs:{type:"copy"}}),e._v("Papers")],1)],1)],1),e._v(" "),e.submenu2enabled?a("a-sub-menu",{key:"sub2"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"profile"}}),e._v("My Profile")],1),e._v(" "),a("a-menu-item",{key:"5"},[a("router-link",{attrs:{to:"/my/profile/general"}},[a("a-icon",{attrs:{type:"setting"}}),e._v("General")],1)],1),e._v(" "),a("a-menu-item",{key:"6"},[a("router-link",{attrs:{to:"/my/profile/academic"}},[a("a-icon",{attrs:{type:"book"}}),e._v("Academic")],1)],1)],1):e._e()],1)],1),e._v(" "),a("a-layout",{staticStyle:{padding:"0 24px 24px",background:"none !important"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},e._l(this.$store.state.navPageList,function(t){return a("a-breadcrumb-item",{key:t},[e._v("\n        "+e._s(e._f("capitalize")(t))+"\n      ")])})),e._v(" "),a("a-layout-content",{style:{background:"rgba(255, 255, 255, .5)",padding:"24px",margin:0,minHeight:"280px"}},[a("router-view")],1)],1)],1)},staticRenderFns:[]};var E=a("VU/8")({name:"Index",data:function(){return{submenu2enabled:!1}},created:function(){this.checkLoginStatus()},methods:{checkLoginStatus:function(){0===this.$store.state.authenticate.token.length?(this.$message.info("Before entering My UV, please log in.",10),this.$router.push("/login")):0===this.$store.state.authenticate.username.length&&(this.$message.info("Before entering My UV, please log in.",10),this.$router.push("/login"))}}},C,!1,function(e){a("+MRW")},"data-v-9c5fbd80",null).exports,P={name:"Submissions",created:function(){this.updateBreadcrumb()},watch:{$route:"updateBreadcrumb"},methods:{updateBreadcrumb:function(){console.log(this.$store.state.navPageList),this.$store.state.navPageList=this.$route.path.substr(1).split("/").filter(Boolean),this.$store.state.navPageList.unshift("Home"),console.log(this.$store.state.navPageList)}}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("My Submissions")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var $=a("VU/8")(P,D,!1,function(e){a("wlYJ")},"data-v-a3161568",null).exports,z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._v("\n  Welcome to My UV. Use the navigation bar at the "),t("b",[this._v("left")]),this._v(" to operate the system with your need.\n")])}]};var L=a("VU/8")({name:"UVIndex"},z,!1,function(e){a("Rlk2")},"data-v-78703cf2",null).exports,F=[{dataIndex:"author",key:"author",title:"Author"},{title:"Status",dataIndex:"status",key:"status"},{title:"Title",dataIndex:"title",key:"title",scopedSlots:{customRender:"titles"}},{title:"Keywords",dataIndex:"keywords",key:"keywords",scopedSlots:{customRender:"keywords"}},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],O=[{id:"1",author:"John Blue",keywords:["CNN","Tensorflow"],title:"Something Interesting",status:"Approved"},{id:"2",author:"Peter Green",keywords:["AI","MATLAB"],title:"Something more Interesting",status:"Not Approved"},{id:"3",author:"Alex Yellow",keywords:["CV","Python"],title:"Something really Interesting",status:"Pending"}],N={name:"Papers",data:function(){return{columns:F,data:O,modalVisible:!1,actionenabled:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){this.$http.get(this.$store.state.endpoint+"/login",{})}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-table",{attrs:{columns:e.columns,dataSource:e.data},scopedSlots:e._u([{key:"titles",fn:function(t){return a("a",{attrs:{href:"#"},on:{click:function(t){e.detailEntry(e.record.id)}}},[e._v(e._s(t))])}},{key:"keywords",fn:function(t){return a("span",{},[e._v("\n      "+e._s(t.join(" | "))+"\n    ")])}},{key:"action",fn:function(t,s){return e.actionenabled?a("span",{},[a("a",{attrs:{href:"#"},on:{click:function(t){e.editEntry(s.id)}}},[e._v("Edit")]),e._v(" "),a("a-divider",{attrs:{type:"vertical"}}),e._v(" "),a("a",{attrs:{href:"#"},on:{click:function(t){e.deleteEntry(s.id)}}},[e._v("Delete")])],1):e._e()}}])})],1)},staticRenderFns:[]};var R=a("VU/8")(N,q,!1,function(e){a("n4eP")},"data-v-c8ced7ea",null).exports;s.default.use(y.a);var U=new y.a({routes:[{path:"/",name:"Home",components:{App:v}},{path:"/login",name:"Login",components:{App:_}},{path:"/register",name:"Register",components:{App:I}},{path:"/my",name:"My Base Object",components:{App:E},children:[{path:"",name:"My UV / Homepage",component:L},{path:"submissions",component:$,children:[{path:"paper",component:R}]}]}]});s.default.config.productionTip=!1,s.default.use(o.a),s.default.use(r.a),s.default.use(i.a),s.default.use(d.a),s.default.use(c.a);var V=new o.a.Store({state:{endpoint:"http://128.31.37.81:8080/uv2018",navPageList:[],authenticate:{category:[],token:"",role:0,username:"",permission:0},sitekey:"6Ldn5WMUAAAAAAbUaPRaIVkp2C8HrpIVvjM2vf0U"}});s.default.filter("capitalize",function(e){return e?(e=e.toString()).charAt(0).toUpperCase()+e.slice(1):""}),new s.default({el:"#app",router:U,store:V,components:{App:h,VueRecaptcha:p.a},template:"<App />"})},Rlk2:function(e,t){},"ld/C":function(e,t){},n4eP:function(e,t){},oOT0:function(e,t){},pWj3:function(e,t){},tvyh:function(e,t){},uslO:function(e,t,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(e){return a(r(e))}function r(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}o.keys=function(){return Object.keys(s)},o.resolve=r,e.exports=o,o.id="uslO"},wlYJ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8674089897b43c89d074.js.map
