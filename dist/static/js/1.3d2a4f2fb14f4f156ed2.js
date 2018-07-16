webpackJsonp([1],{"7Kx4":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-layout-content",{staticStyle:{padding:"0 50px"}},[a("a-layout",{staticStyle:{padding:"0 24px 24px",background:"rgba(255, 255, 255, .75)"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},e._l(this.$store.state.navPageList,function(t){return a("a-breadcrumb-item",{key:t},[e._v("\n          "+e._s(e._f("capitalize")(t))+"\n        ")])})),e._v(" "),a("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},[a("ul",e._l(e.pageList,function(t){return a("li",{key:t},[a("router-link",{attrs:{to:e.getLinkHref(t.link)}},[e._v("\n              "+e._s(t.name)+"\n            ")])],1)}))])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"PagesIndex",data:function(){return{pageList:[{name:"My first page",link:"my-first-page"},{name:"Call for papers",link:"call-for-papers"}]}},methods:{getLinkHref:function(e){return"/pages/"+e}}},n,!1,function(e){a("IvDz")},"data-v-52042f14",null);t.default=i.exports},Gr9f:function(e,t){},IvDz:function(e,t){},QRLF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{dataIndex:"paperid",key:"paperid",title:"ID",width:75,fixed:"left"},{title:"Title",dataIndex:"title",key:"title",scopedSlots:{customRender:"titles"},width:250},{dataIndex:"abstract",key:"abstract",title:"Abstract",width:200},{dataIndex:"categoryid",key:"categoryid",scopedSlots:{customRender:"category"},title:"Category",width:150},{title:"Authors",dataIndex:"authors",key:"authors",scopedSlots:{customRender:"authors"},width:200},{title:"Keywords",dataIndex:"keyword",key:"keyword",scopedSlots:{customRender:"keywords"},width:300},{title:"Action",key:"action",fixed:"right",width:125,scopedSlots:{customRender:"action"}}],i=[{id:"1",author:"John Blue",keywords:["CNN","Tensorflow"],title:"Something Interesting",status:"Approved"},{id:"2",author:"Peter Green",keywords:["AI","MATLAB"],title:"Something more Interesting",status:"Not Approved"},{id:"3",author:"Alex Yellow",keywords:["CV","Python"],title:"Something really Interesting",status:"Pending"}],o={name:"Papers",data:function(){return{columns:n,data:i,modalVisible:!1,editingPaperId:null,submittingEdition:!1,paperList:[{paperid:1,title:"Something Interesting",abstract:"Something",categoryid:122,authors:["Alpha","Ben","Charlie"],keyword:["AI","CV","Computer Vision"]}],edit:{title:null,abstract:null,category:null,authors:null,keywords:null,paper:null},categoryMatcher:{122:"Computer"}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.$http.get(this.$store.state.endpoint+"/myPaper").then(function(e){console.log(e.body)},function(t){e.$message.error("Can't fetch My Paper Submissions. Please try again later.",5)})},editEntry:function(e){this.editingPaperId=e,this.modalVisible=!0},updateEntry:function(e){},handleOk:function(e){console.log("ok, event obj: ",e),this.submittingEdition=!0},handleChange:function(e){console.log(e)},deleteEntry:function(e){var t=this,a=this.$message.loading("Deleting your submission...",0);this.$http.get(this.$store.state.endpoint+"/deletePaper",{paperId:e}).then(function(n){console.log(n.body),n.body.flag?(a(),t.$message.success("Paper submission deleted successfully.",3),t.paperList=t.paperList.filter(function(t){return t.paperId!==e})):(a(),t.$message.error("Error occured while deleting your submission. Please try again later.",5))},function(e){a(),t.$message.error("Error occured while deleting your submission. Please try again later.",5)})}}},r={render:function(){var e=this,t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("h1",[t._v("My Submissions")]),t._v(" "),n("a-modal",{attrs:{title:"Edit Paper Submission",onOk:"handleOk"},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[n("template",{slot:"footer"},[n("a-button",{key:"back",on:{click:function(){e.modalVisible=!1}}},[t._v("Cancel")]),t._v(" "),n("a-button",{key:"submit",attrs:{type:"primary",loading:t.submittingEdition},on:{click:t.handleOk}},[t._v("\n        Submit\n      ")])],1),t._v(" "),n("a-form",{attrs:{autoFormCreate:function(t){e.form=t}},on:{submit:t.handleSubmit}},[n("a-form-item",{attrs:{label:"Title",labelCol:{span:6},wrapperCol:{span:16},fieldDecoratorId:"title",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input the title of your paper submission!"}]}}},[n("a-input",{ref:"titleInput",attrs:{placeholder:"Title"},model:{value:t.edit.title,callback:function(e){t.$set(t.edit,"title",e)},expression:"edit.title"}},[n("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"}),t._v(" "),t.edit.title?n("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),n("a-form-item",{attrs:{label:"Abstract",labelCol:{span:6},wrapperCol:{span:16},fieldDecoratorId:"abstract",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input the Abstract of your paper submission!"}]},autosize:{minRows:3}}},[n("a-textarea",{attrs:{placeholder:"Abstract"},model:{value:t.edit.abstract,callback:function(e){t.$set(t.edit,"abstract",e)},expression:"edit.abstract"}},[t.edit.abstract?n("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:t.emitEmptyField},slot:"suffix"}):t._e()],1)],1),t._v(" "),n("a-form-item",{attrs:{label:"Category",labelCol:{span:6},wrapperCol:{span:16},fieldDecoratorId:"category",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input the Category of your paper submission!"}]}}},[n("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags",placeholder:"Category",tokenSeparators:[","],modal:"edit.category"},on:{change:t.handleChange}},t._l(t.categoryAutoComplete,function(e){return n("a-select-option",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])}))],1),t._v(" "),n("a-form-item",{attrs:{label:"Authors",labelCol:{span:6},wrapperCol:{span:16},fieldDecoratorId:"authors",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input the Authors of your paper submission!"}]}}},[n("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags",placeholder:"Authors",tokenSeparators:[","],modal:"edit.keywords"},on:{change:t.handleChange}})],1),t._v(" "),n("a-form-item",{attrs:{label:"Keywords",labelCol:{span:6},wrapperCol:{span:16},fieldDecoratorId:"keywords",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input the Keywords of your paper submission!"}]}}},[n("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags",placeholder:"Keywords",tokenSeparators:[","],modal:"edit.keywords"},on:{change:t.handleChange}},t._l(t.tagList,function(e){return n("a-select-option",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])}))],1),t._v(" "),n("a-form-item",{attrs:{label:"Paper",labelCol:{span:6},wrapperCol:{span:16},fieldDecoratorId:"paper",fieldDecoratorOptions:{rules:[{required:!0,message:"Please upload the Paper of your paper submission!"}]}}},[n("a-upload-dragger",{attrs:{name:"file",multiple:!0,action:"//jsonplaceholder.typicode.com/posts/"},on:{change:t.handleChange}},[n("p",{staticClass:"ant-upload-drag-icon"},[n("a-icon",{attrs:{type:"inbox"}})],1),t._v(" "),n("p",{staticClass:"ant-upload-text",style:{padding:"0 1em"}},[t._v("Click or drag file to this area to upload")]),t._v(" "),n("p",{staticClass:"ant-upload-hint",style:{padding:"0 1em"}},[t._v("Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")])])],1)],1)],2),t._v(" "),n("a-table",{attrs:{columns:t.columns,dataSource:t.paperList,scroll:{x:1300,y:100}},scopedSlots:t._u([{key:"titles",fn:function(e){return n("a",{attrs:{href:"#"},on:{click:function(e){t.detailEntry(t.record.id)}}},[t._v("\n      "+t._s(e)+"\n    ")])}},{key:"authors",fn:function(e){return n("span",{},[t._v("\n      "+t._s(e.join(", "))+"\n    ")])}},{key:"keywords",fn:function(e){return n("span",{},[t._v("\n      "+t._s(e.join(", "))+"\n    ")])}},{key:"category",fn:function(e){return n("span",{},[t._v("\n      "+t._s(t.categoryMatcher[e])+" ("+t._s(e)+")\n    ")])}},{key:"action",fn:function(e,a){return n("span",{},[n("a",{on:{click:function(e){t.editEntry(a.paperid)}}},[t._v("Edit")]),t._v(" "),n("a-divider",{attrs:{type:"vertical"}}),t._v(" "),n("a-popconfirm",{attrs:{title:"Are you sure to delete this paper submission?",okText:"Delete",cancelText:"No"},on:{confirm:function(e){t.deleteEntry(a.paperid)},cancel:t.cancel}},[n("a",[t._v("Delete")])])],1)}}])})],1)},staticRenderFns:[]};var s=a("VU/8")(o,r,!1,function(e){a("Gr9f")},"data-v-091ba2c8",null);t.default=s.exports},U1XR:function(e,t){},"W6/1":function(e,t){},lO7g:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-layout-content",{staticStyle:{padding:"0 50px"}},[a("a-layout",{staticStyle:{padding:"0 24px 24px",background:"rgba(255, 255, 255, .75)"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},e._l(this.$store.state.navPageList,function(t){return a("a-breadcrumb-item",{key:t},[e._v("\n          "+e._s(e._f("capitalize")(t))+"\n        ")])})),e._v(" "),a("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},[a("div",{attrs:{property:"content:encoded"}},[a("p",[e._v("After great success in China (Beijing, UV2013), United States (Boston, UV2014) and Japan (Nagoya, UV2016), the Fourth International Conference on Universal Village (UV2018) will be held again in Boston, United States. UV2018 will intensively exemplifies a desired future society that pursues human-nature harmony through wise application of advanced technologies. The concept is an expanded/advanced version of Smart Cities, and signifies that we follow the law of universe to protect the environment and eco-systems, while innovate new lifestyles to provide sustainable happiness for humanity’s future.")]),e._v(" "),a("p",[e._v("UV2018 will call for the collective efforts across multi-disciplinary fields to develop a platform where researchers with different backgrounds can well collaborate beyond the traditional filed boundaries, and to find a systematic, coordinated, long-term solution for the future of human kind and mother nature.")]),e._v(" "),a("p",[e._v("Subjects for UV2018 include but are not limited to the following topics:")]),e._v(" "),a("ul",[a("li",[e._v("Develop systematic methodologies to advance UV technologies and to develop UV systems, including, intelligent transportation, intelligent environment & communities, intelligent healthcare, intelligent food systems, etc.")]),e._v(" "),a("li",[e._v("New life styles enabled by IT / New energy sources / New materials / Effective microorganism technology and environmental protection.")]),e._v(" "),a("li",[e._v("Address suitable paths of design, development, implementation, engineering and integration appropriate for different regions.")]),e._v(" "),a("li",[e._v("Explore how to benefit governments, companies, universities as well as societies on specific UV topics as well as practical UV solutions.")])]),e._v(" "),a("router-link",{attrs:{to:"/pages/call-for-papers"}},[a("a-button",{attrs:{type:"dashed"}},[e._v("\n              UV2018 Call for Papers\n            ")])],1)],1)])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({name:"Home"},n,!1,function(e){a("U1XR")},null,null);t.default=i.exports},"u+y1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"PagesDetail",data:function(){return{pageMeta:{}}},watch:{$route:"fetchData"},created:function(){this.fetchData()},methods:{getLinkHref:function(e){return"/pages/"+e},fetchData:function(){var e=this;this.$http.get(this.$store.state.endpoint+"/get",{email:this.email,password:this.password},{emulateJSON:!0}).then(function(t){console.log(t.body.flag),e.spinning=!1,!0===t.body.flag?(e.$message.success("Successfully logged in. Redirecting you to the homepage in 3s.",4),e.$store.state.authenticate.username=e.email,e.$store.state.authenticate.token=e.email,setTimeout(function(){e.$router.push("/")},3e3)):e.$message.error("Username or Password is incorrect. Check your credentials and try again.",10)},function(t){e.spinning=!1,e.$message.error("Internal Server Error. Please try again.",10)})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-content",{staticStyle:{padding:"0 50px"}},[a("a-layout",{staticStyle:{padding:"0 24px 24px",background:"rgba(255, 255, 255, .75)"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},e._l(this.$store.state.navPageList,function(t){return a("a-breadcrumb-item",{key:t},[e._v("\n        "+e._s(e._f("capitalize")(t))+"\n      ")])})),e._v(" "),a("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"},domProps:{innerHTML:e._s(e.pageMeta.content)}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(e){a("W6/1")},"data-v-6721bad3",null);t.default=o.exports}});
//# sourceMappingURL=1.3d2a4f2fb14f4f156ed2.js.map