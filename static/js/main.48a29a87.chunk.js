(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,r){e.exports={page:"StartPage_page__q-1OI",button__link:"StartPage_button__link__3rI0k",screensaver:"StartPage_screensaver__14ttv"}},19:function(e,t,r){e.exports={form_user:"AddUserForm_form_user__2Lv9Q",input__enter:"AddUserForm_input__enter__2o0x-",button__submit:"AddUserForm_button__submit__zX7AA"}},29:function(e,t,r){e.exports={list__users:"Users_list__users__377ze",button__del:"Users_button__del__2Pug8"}},46:function(e,t,r){e.exports={error__page:"NotFoundPage_error__page__3Jy-5"}},55:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var n,s=r(0),c=r.n(s),a=r(22),i=r.n(a),u=(r(55),r(18)),o=r.n(u),l=r(15),j=r(3),_=r(1),d=function(){return Object(_.jsx)("div",{className:o.a.screensaver,children:Object(_.jsx)("img",{src:"https://www.look.com.ua/large/201209/39310.jpg",alt:"screensaver"})})},b=r(11),p=r(12),O=r(50),m=r(42),f=r.n(m).a.create({baseURL:"https://reqres.in/api/"}),h=function(){return f.get("users?per_page=10")};!function(e){e.APP_STATUS="APP_STATUS",e.APP_ERROR="APP_ERROR"}(n||(n={}));var x,v={status:"succeeded",error:null},g=function(e){return{type:n.APP_STATUS,status:e}},E=function(e){return{type:n.APP_ERROR,error:e}};!function(e){e.GET_USERS="GET_USERS",e.DELETE_USER="DElETE_USER",e.ADD_USER="ADD_USER"}(x||(x={}));var S=[],P=function(){return function(e){e(g("loading")),h().then((function(t){var r;e((r=t.data,{type:x.GET_USERS,users:r})),e(g("succeeded"))})).catch((function(t){e(E(t)),e(g("succeeded"))}))}},U=r(29),R=r.n(U),A=function(e){return Object(_.jsx)("div",{className:R.a.list__users,children:e.users.map((function(t){return Object(_.jsxs)("div",{children:[t.first_name," ",t.last_name," ",t.email,Object(_.jsx)("button",{className:R.a.button__del,onClick:function(){return r=t.id,void e.deleteUserCallback(r);var r},children:"Delete"})]},t.id)}))})},N=r(49),T=r(45),D=r(19),F=r.n(D),w=function(){var e=Object(b.b)(),t=Object(N.a)({initialValues:{id:Object(T.v1)(),first_name:"",last_name:"",email:""},validate:function(e){var t={};return e.first_name||(t.first_name="Invalid data"),e.last_name||(t.last_name="Invalid data"),e.email||(t.email="Invalid data"),t},onSubmit:function(r){var n;e((n=r,{type:x.ADD_USER,user:n})),t.resetForm()}});return Object(_.jsxs)("form",{className:F.a.form_user,onSubmit:t.handleSubmit,children:[Object(_.jsx)("label",{htmlFor:"New User",children:"New User:"}),t.touched.email&&Object(_.jsx)("div",{style:{color:"red",textAlign:"center"},children:t.errors.email}),Object(_.jsx)("input",Object(p.a)({id:"v1()",placeholder:"first_name",className:F.a.input__enter},t.getFieldProps("first_name"))),Object(_.jsx)("input",Object(p.a)({id:"v1()",placeholder:"last_name",className:F.a.input__enter},t.getFieldProps("last_name"))),Object(_.jsx)("input",Object(p.a)({id:"v1()",placeholder:"email",className:F.a.input__enter},t.getFieldProps("email"))),Object(_.jsx)("button",{className:F.a.button__submit,type:"submit",children:"Submit"})]})},y=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.app}));Object(s.useEffect)((function(){e(P())}),[e]);return Object(_.jsxs)("div",{children:[Object(_.jsx)(A,{users:t,deleteUserCallback:function(t){e(function(e){return{type:x.DELETE_USER,id:e}}(t))}}),Object(_.jsx)(w,{})]})},k=r(46),L=r.n(k),I=function(){Object(b.b)();var e=Object(b.c)((function(e){return e.status.error}));return Object(_.jsxs)("div",{className:L.a.error__page,children:[e,Object(_.jsx)("img",{src:"https://img.freepik.com/free-vector/404-error-with-character-error-design-template-website_114341-24.jpg?size=626&ext=jpg",alt:"pageNotFound"}),Object(_.jsx)("p",{children:Object(_.jsx)(l.b,{to:"/",children:" Go to Home "})})]})},C="/startPage",G="/userPage",z=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(j.d,{children:[Object(_.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(_.jsx)(j.a,{to:C})}}),Object(_.jsx)(j.b,{path:C,render:function(){return Object(_.jsx)(d,{})}}),Object(_.jsx)(j.b,{path:G,render:function(){return Object(_.jsx)(y,{})}}),Object(_.jsx)(j.b,{path:"*",render:function(){return Object(_.jsx)(I,{})}})]})})},J=function(){return Object(_.jsxs)("div",{className:o.a.page,children:[Object(_.jsx)(l.c,{to:C,className:o.a.button__link,children:"Start Page"}),Object(_.jsx)(l.c,{to:G,className:o.a.button__link,children:"Get User"})]})},q=r.p+"static/media/preloader.b0090460.svg",B=function(){return Object(_.jsx)("img",{src:q,alt:""})};var H=function(){var e=Object(b.c)((function(e){return e.status.status}));return Object(_.jsxs)("div",{className:"App",children:["loading"===e&&Object(_.jsx)("div",{className:"preLoader",children:Object(_.jsx)(B,{})}),Object(_.jsx)(J,{}),Object(_.jsx)(z,{})]})},M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,82)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),c(e),a(e)}))},Q=r(26),V=r(48),X=Object(Q.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.GET_USERS:return t.users.data.map((function(e){return e}));case x.DELETE_USER:return e.filter((function(e){return e.id!==t.id}));case x.ADD_USER:return[].concat(Object(O.a)(e),[Object(p.a)({},t.user)]);default:return e}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.APP_STATUS:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case n.APP_ERROR:return Object(p.a)(Object(p.a)({},e),{},{error:t.error});default:return e}}}),K=Object(Q.c)(X,Object(Q.a)(V.a));window.store=K,i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(l.a,{children:Object(_.jsx)(b.a,{store:K,children:Object(_.jsx)(H,{})})})}),document.getElementById("root")),M()}},[[81,1,2]]]);
//# sourceMappingURL=main.48a29a87.chunk.js.map