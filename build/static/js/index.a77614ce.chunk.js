(this["webpackJsonpgame-app"]=this["webpackJsonpgame-app"]||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/imageDropShadow.4a439170.png"},185:function(e,t,a){e.exports=a.p+"static/media/image.dd608d34.png"},205:function(e,t,a){a(206),e.exports=a(399)},235:function(e,t,a){},240:function(e,t,a){},264:function(e,t,a){},385:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(235),a(43)),i=a(44),s=a(46),u=a(45),m=a(54),d=a(42),p=a(33),h=a(69),f=a.n(h),b=a(85),g=a(202),v=a(400),y=a(405),E=a(56),k=a(65),j=localStorage.token;j||(j=localStorage.token=Math.random().toString(36).substr(-8));var w=a(78),O=a.n(w),x={getList:function(e){return O.a.get("/book/list",e).then((function(e){return e}))},openBook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=O.a.get("/_api2/read/openBook",e).then((function(e){return e}));return t}},C=x,S=(a(240),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleClick=function(e,t,a){t?C.openBook({bookId:a}):(e.preventDefault(),g.b.warning("\u8bf7\u5148\u5b8c\u6210\u524d\u4e00\u672c\u4e66"))},e.state={},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.bookItem,o=(t.bookList,t.users,a.id),c=a.title,l=(a.imageLinks,a.authors),i=void 0===l?[]:l,s=a.cover,u=a.url;return r.a.createElement(n.Fragment,null,r.a.createElement(d.b,{to:{pathname:"iframe/".concat(o),query:{url:u,bookId:o}}},r.a.createElement("li",{key:o,onClick:function(t){return e.handleClick(t,u,o)}},r.a.createElement("div",{className:"book"},r.a.createElement("div",{className:"book-top"},r.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(s,")"),backgroundSize:"100%"}})),r.a.createElement("div",{className:"book-title"},c),r.a.createElement("div",{className:"book-authors"},i.join())))))}}]),a}(r.a.Component)),L=Object(m.b)((function(e){var t=e.users;return{users:Object.values(t)}}))(S),I=(a(264),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bookList:[],visible:"/home"!==window.location.pathname,videoVisible:!1},e.getBookList=Object(b.a)(f.a.mark((function t(){var a,n,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getList();case 2:a=t.sent,n=a.success,r=a.data,o=a.msg,n?e.setState({bookList:r}):g.b.error("".concat(o));case 7:case"end":return t.stop()}}),t)}))),e.handleOk=function(t){e.setState({visible:!1,videoVisible:!0})},e.handleCancel=function(t){e.setState({visible:!1})},e.videoHandleCancel=function(){e.setState({videoVisible:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getBookList();var e=this.props.location.data;this.setState({userType:e.userType},(function(){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.bookList,n=t.visible,o=t.videoVisible,c=t.userType;return r.a.createElement("div",{className:"home-books-results"},!o&&!n&&r.a.createElement(v.a,{tip:"\u52a0\u8f7d\u4e2d...",spinning:!(a.length>0)},r.a.createElement("ol",{className:"books-grid"},a.map((function(t){return r.a.createElement(L,{key:t.id,bookList:a,getBookList:e.getBookList,bookItem:t})})))),r.a.createElement(y.a,{title:null,visible:n,onOk:this.handleOk,closable:!1,onCancel:this.handleCancel,bodyStyle:{textAlign:"center"},footer:[r.a.createElement(E.a,{key:"submit",type:"primary",onClick:this.handleOk},"\u786e\u5b9a")]},"\u5f00\u59cb\u5b9e\u9a8c\u524d\u8bf7\u60a8\u89c2\u770b\u672c\u7cfb\u7edf\u6559\u5b66\u89c6\u9891"),r.a.createElement(y.a,{title:null,width:"70%",visible:o,onCancel:this.videoHandleCancel,footer:null,destroyOnClose:!0},r.a.createElement("video",{style:{width:"100%",height:"100%",outline:"unset"},controls:!0},1!=c&&r.a.createElement("source",{src:"/video.mp4",type:"video/mp4"}),1==c&&r.a.createElement("source",{src:"/videoB.mp4",type:"video/mp4"}))))}}]),a}(r.a.Component)),R=I,U=a(203),T=a(143),N=a(179),B=a.n(N),z=a(180),A=a.n(z),D=a(94),P=a(61),F=a(409),M=a(410),W=a(411),H=a(412),V=a(413),_=function(){var e=r.a.useRef(null),t=r.a.useRef(null),a=r.a.useState(!1),n=Object(T.a)(a,2),o=n[0],c=n[1],l=r.a.useState([]),i=Object(T.a)(l,2),s=i[0],u=i[1],m=r.a.useCallback((function(){console.log("Start Capture"),c(!0),t.current=new MediaRecorder(e.current.stream,{mimeType:"video/webm"}),t.current.addEventListener("dataavailable",d),t.current.start()}),[e,c,t]),d=r.a.useCallback((function(e){var t=e.data;t.size>0&&u((function(e){return e.concat(t)}))}),[u]),p=r.a.useCallback((function(){console.log("Stop Capture"),t.current.stop(),c(!1)}),[t,e,c]),h=r.a.useCallback((function(){if(console.log("Upload Video"),s.length){console.log("Creating blob");var e=new Blob(s,{type:"video/webm"}),t=new FormData;t.append("blob",e),A()({method:"post",url:"http://ec2-35-153-79-96.compute-1.amazonaws.com:8080/video/upload",data:t}).then((function(e){console.log("Success"),console.log(e),U.a.open({message:"Successfully uploaded video",icon:r.a.createElement(F.a,{style:{color:"#a0d911"}})})})).catch((function(e){console.log("Failed"),console.log(e.response.data.message),U.a.open({message:"Failed to upload video",icon:r.a.createElement(M.a,{style:{color:"#f5222d"}})})})),u([])}}),[s]);r.a.useCallback((function(){p(),s.length>0&&h()}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(D.a,{justify:"space-around",align:"middle"},r.a.createElement(P.a,{flex:1},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},o?r.a.createElement(E.a,{onClick:p,type:"primary",icon:r.a.createElement(W.a,null),danger:!0},"\u7ed3\u675f\u5f55\u5236\u5e76\u4e0a\u4f20"):r.a.createElement(E.a,{onClick:m,type:"primary",icon:r.a.createElement(H.a,null)},"\u5f00\u59cb\u5f55\u5236"))),r.a.createElement(P.a,{flex:3},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(B.a,{audio:!0,ref:e,videoConstraints:{width:320,height:240,facingMode:"user"},width:"180"}))),r.a.createElement(P.a,{flex:1},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},s.length>0&&r.a.createElement(E.a,{onClick:h,type:"primary",icon:r.a.createElement(V.a,null)},"\u5f00\u59cb\u4e0a\u4f20"),s.length<=0&&r.a.createElement(E.a,{disabled:!0,type:"primary",icon:r.a.createElement(V.a,null)},"\u5f00\u59cb\u4e0a\u4f20")))),r.a.createElement(D.a,{style:{marginBottom:8}})))},q=a(414),J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,scale:1},e.scaleResize=function(){var t=1,a=window.innerWidth;window.innerHeight;t=a>1024?1:819.2>=a<=1024?.8:Math.floor(a/1024*10)/10,e.setState({scale:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.scaleResize(),this.iframeEl.onload=function(){e.setState({isLoading:!1})},U.a.open({message:"Please click start Capture before starting.",description:"When finished, please press the stop capture button",icon:r.a.createElement(q.a,{style:{color:"#f5222d"}}),onClick:function(){console.log("Notification Clicked!")}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.scale,o=this.props.location.query||{},c=o.url,l=o.bookId,i=this.props.authUser;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_,null)),r.a.createElement("div",{className:"iframe-container",style:{paddingLeft:10,width:1024,height:768,WebkitOverflowScrolling:"touch"}},a?r.a.createElement("div",{style:{position:"absolute",zIndex:1e3,left:0,top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgb(245, 247, 250)"}},r.a.createElement(v.a,null)):null,r.a.createElement("iframe",{title:"\u5916\u94fe",ref:function(t){return e.iframeEl=t},allowtransparency:"no",src:"".concat(c,"?user=").concat(i,"&bookId=").concat(l),frameBorder:"0",width:"100%",height:"100%",scrolling:"yes",style:{transform:"scale(".concat(n,")")}})))}}]),a}(n.Component),G=Object(m.b)((function(e){return{authUser:e.authUser}}))(J),K=a(404),X=a(142),Q={post:function(){var e=O.a.post("/_api2/user/logout").then((function(e){return e}));return e}},Y=Q;function Z(e){return $.apply(this,arguments)}function $(){return($=Object(b.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.post();case 3:a=e.sent,n=a.success,r=a.detail,void 0===r?{}:r,n?setTimeout((function(){t.push({pathname:"/",data:{userType:null}}),window.location.reload(!0)}),500):console.log("\u9000\u51fa\u9519\u8bef"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var ee=function(e){var t=e.location,a=e.history,n=t.pathname.split("/")[1]||"home";return r.a.createElement(X.a,{mode:"horizontal",selectedKeys:[n]},r.a.createElement(X.a.Item,{key:"home"},r.a.createElement(d.c,{to:"/home",exact:!0,activeClassName:"active"},"Home")),r.a.createElement(X.a.Item,{key:"logout",onClick:function(){return Z(a)}},"Logout"))},te=Object(p.f)(ee),ae=function(e){e.user;return r.a.createElement(K.a,{className:"site-page-header",backIcon:!1,title:"Books View",extra:r.a.createElement(te,null)})},ne=Object(m.b)((function(e){var t=e.authUser;return{user:e.users[t]}}))(ae),re=a(402),oe=a(185),ce=a.n(oe),le=a(415),ie=a(416),se={post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.username,a=e.password,n=O.a.post("/_api2/user/login?id=9&password=".concat(a,"&userType=1&username=").concat(t),e).then((function(e){return console.log(e),e}));return n}},ue=se,me=a(403),de=a(407),pe="SET_AUTHED_USER";function he(e){return{type:pe,id:e}}var fe="RECEIVE_USERS",be="UPDATE_USERS";function ge(e){return{type:be,bookId:e}}var ve=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.generateDropdownData=function(){return e.props.users.map((function(e){return{key:e.id,text:e.name,value:e.id,image:{avatar:!0,src:e.avatarURL}}}))},e}return Object(i.a)(a,[{key:"handleSubmit",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r,o,c,l,i,s,u,m=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,n=a.setAuthUser,r=a.updateUserBookId,o=t.username,c=t.password,e.next=4,ue.post({username:o,password:c});case 4:l=e.sent,i=l.success,s=l.detail,u=void 0===s?{}:s,i?(g.b.success("\u767b\u9646\u6210\u529f"),setTimeout((function(){n("".concat(o)),r(u.bookPointer),m.props.history.push({pathname:"/",data:{userType:u.userType}})}),500)):g.b.error("\u8d26\u53f7\u5bc6\u7801\u9519\u8bef");case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(me.a,{style:{width:"100%"},onFinish:this.handleSubmit.bind(this),className:"login-form"},r.a.createElement(me.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(de.a,{style:{borderRadius:"10px"},prefix:r.a.createElement(le.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(me.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(de.a,{prefix:r.a.createElement(ie.a,{className:"site-form-item-icon"}),style:{borderRadius:"10px"},type:"password",placeholder:"Password"})),r.a.createElement(me.a.Item,null,r.a.createElement(D.a,{justify:"center"},r.a.createElement(E.a,{type:"primary",style:{background:"orange",borderColor:"orange",borderRadius:"25px"},htmlType:"submit",className:"login-form-button"},"Login"))))}}]),a}(n.Component),ye=Object(m.b)((function(e){var t=e.users;return{users:Object.values(t)}}),{setAuthUser:he,updateUserBookId:ge})(Object(p.f)(ve)),Ee=(a(385),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.handleLoading=function(){e.setState({loading:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){this.state.loading;return r.a.createElement("div",null,r.a.createElement("div",{className:"login-box flex-wrap flex-center flex-middle flex-direction-column"},r.a.createElement(re.a,{style:{width:"150%",borderRadius:"25px"}},r.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"55%"},src:ce.a,alt:"Logo"}),r.a.createElement("h3",{style:{color:"orange",fontSize:"24px",textAlign:"center"}},"Orange Oakleaf"),r.a.createElement("h3",{style:{color:"orange",fontSize:"18px"}},"Sign In"),r.a.createElement(ye,{onLoading:this.handleLoading}))))}}]),a}(n.Component)),ke=Ee,je=a(141),we=a.n(je),Oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.handleLoading=function(){e.setState({loading:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){this.state.loading;return r.a.createElement("div",null,r.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"15%"},src:we.a,alt:"Logo"}),r.a.createElement("h2",{style:Se},"University of California, Irvine"),r.a.createElement("h2",{style:Se},"Interactive Storybook Research Project"),r.a.createElement("h2",{style:Se},"\u7f8e\u56fd\u52a0\u5dde\u5927\u5b66\u6b27\u6587\u5206\u6821 \xb7 \u4e92\u52a8\u5f0f\u82f1\u8bed\u7535\u5b50\u7ed8\u672c\u79d1\u7814\u9879\u76ee"),r.a.createElement(re.a,{style:{width:"100%",borderRadius:"25px",borderColor:"yellow"}},r.a.createElement("h4",{style:Le},"\u5c0a\u656c\u7684\u5bb6\u957f:"),r.a.createElement("h4",{style:Le},"\u60a8\u597d\uff0c\u611f\u8c22\u60a8\u4e0e\u5b69\u5b50\u4e00\u8d77\u53c2\u4e0e\u672c\u6b21\u7814\u7a76\u9879\u76ee\uff01\u4e3a\u4e86\u5b9e\u9a8c\u987a\u5229\u8fdb\u884c\uff0c\u8bf7\u60a8\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"),Ce(),r.a.createElement("h4",{style:Le},"\u5982\u679c\u60a8\u5bf9\u5b9e\u9a8c\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u6b22\u8fce\u968f\u65f6\u4e0e\u6211\u4eec\u8054\u7cfb\uff1a"),r.a.createElement("h4",{style:{color:"black",fontSize:"medium",textAlign:"center",fontWeight:"bold"}},"\u5fae\u4fe1\uff1adayunheshui | \u90ae\u7bb1\uff1adandany1@uci.edu | \u7535\u8bdd\uff1a(\u4e2d)13240736364 / (\u7f8e)213-446-8747")),r.a.createElement("h2",{style:Se},"\u8bf7\u60a8\u5728\u505a\u597d\u51c6\u5907\u540e\uff0c\u70b9\u51fb\u201c\u767b\u5f55\u201d"),r.a.createElement("div",{style:Ie},r.a.createElement("div",{style:Re},r.a.createElement(d.b,{to:"/login"},r.a.createElement(E.a,{type:"primary",style:Ue},"\u767b \u2003 \u5f55")))))}}]),a}(n.Component),xe=["\u8bf7\u5728\u9605\u8bfb\u671f\u95f4\u786e\u4fdd\u7f51\u7edc\u7545\u901a","\u8bf7\u5728\u5b89\u9759\u7684\u73af\u5883\u4e0b\u8fdb\u884c\u9605\u8bfb","\u9605\u8bfb\u65f6\u8bf7\u4fdd\u6301\u8bbe\u5907\u97f3\u91cf\u9002\u4e2d","\u8bf7\u5141\u8bb8\u6211\u4eec\u7684\u7f51\u7ad9\u8bbf\u95ee\u60a8\u7684\u6444\u50cf\u5934\uff0c\u5e76\u786e\u4fdd\u60a8\u548c\u5b69\u5b50\u7684\u8138\u4e00\u76f4\u5728\u6444\u50cf\u5934\u8303\u56f4\u5185"],Ce=function(){return r.a.createElement("ul",null,xe.map((function(e){return r.a.createElement(D.a,null,r.a.createElement(P.a,{span:20,push:4},r.a.createElement("div",{style:Le}," ",e," ")),r.a.createElement(P.a,{span:4,pull:20},r.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"30%"},src:we.a,alt:"Logo"})))})))},Se={color:"blue",fontSize:"x-large",textAlign:"center",fontWeight:"bold"},Le={color:"black",fontSize:"medium",fontWeight:"bold"},Ie={position:"relative"},Re={display:"flex",justifyContent:"center",alignItems:"center"},Ue={backgroundColor:"blue",borderColor:"blue",textAlign:"center",fontSize:"medium",borderRadius:"10px",fontWeight:"bold",tabSize:6},Te=Oe,Ne=a(408),Be=function(e){return r.a.createElement(Ne.a,{status:"403",title:"\u9700\u8981\u91cd\u65b0\u767b\u9646",subTitle:"\u62b1\u6b49\uff0c\u5237\u65b0\u540e\u65e0\u6cd5\u4fdd\u5b58\u8fdb\u5ea6 \u8bf7\u8fd4\u56de\u4e3b\u9875\u91cd\u65b0\u767b\u5f55",extra:r.a.createElement(E.a,{type:"primary",onClick:function(){return e.history.push("/")}},"\u8fd4\u56de\u4e3b\u9875")})},ze=Object(p.f)(Be),Ae=a(406),De=(a(401),a(417),a(418),a(419),Ae.a.Title,Ae.a.Paragraph,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({redirect:"/"})}},{key:"render",value:function(){var e=this.props,t=e.authUser;e.loading;return console.log("authUser",t),r.a.createElement(d.a,null,r.a.createElement(n.Fragment,null,t&&r.a.createElement(ne,null),r.a.createElement("div",{className:"container flex-wrap flex-center flex-middle flex-direction-column"},t?r.a.createElement(n.Fragment,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:R}),r.a.createElement(p.a,{path:"/home",exact:!0,component:R}),r.a.createElement(p.a,{path:"/iframe/:bookId",component:G}))):r.a.createElement(p.a,{render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:Te}),r.a.createElement(p.a,{path:"/login",exact:!0,component:ke}),r.a.createElement(p.a,{path:"*",component:ze})))}}))))}}]),a}(n.Component)),Pe=Object(m.b)((function(e){return{authUser:e.authUser,loading:e.LoadingBar}}))(De),Fe=a(66);function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return t.id;default:return e}}function We(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(k.a)(Object(k.a)({},e),t.users);case be:return Object(k.a)(Object(k.a)({},e),{},{bookId:t.bookId});default:return e}}var He=Object(Fe.combineReducers)({authUser:Me,users:We}),Ve=a(198),_e=Object(Fe.applyMiddleware)(Ve.a),qe=a(199),Je=Object(Fe.createStore)(He,Object(qe.composeWithDevTools)(_e));c.a.render(r.a.createElement(m.a,{store:Je},r.a.createElement(Pe,null)),document.getElementById("root"))},78:function(e,t){var a=function(e){var t=Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&");return"?".concat(t)},n=function(e,t,a){return new Promise((function(n,r){var o={url:e,method:t,contentType:"application/json",success:function(e){n(e)},error:function(e){n({success:!1,message:"\u7f51\u7edc\u9519\u8bef, \u8bf7\u91cd\u65b0\u5c1d\u8bd5"})}};if("post"===t){var c=JSON.stringify(a);o.data=c}!function(e){var t=new XMLHttpRequest;t.open(e.method,e.url,!0),t.withCredentials=!0,void 0!==e.contentType&&t.setRequestHeader("Content-Type",e.contentType),t.onreadystatechange=function(a){if(4===t.readyState){if(200==t.status)try{var n=JSON.parse(t.response);e.success(n)}catch(r){e.success({success:!0})}500==t.status&&e.error()}},"GET"===e.method?t.send():t.send(e.data)}(o)}))},r={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e+a(t),o="get",c={};return n(r,o,c)},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e,r="post";return n(a,r,t)}};e.exports=r}},[[205,1,2]]]);
//# sourceMappingURL=index.a77614ce.chunk.js.map