/*! For license information please see main.6bad7502.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{225:function(e,a,t){e.exports=t.p+"static/media/anime3.bd6820f1.png"},226:function(e,a,t){},227:function(e,a,t){},228:function(e,a,t){},229:function(e,a,t){},230:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),o=t(28),c=t.n(o),i=t(15),s=t(22),m=t(10),d=t(11),u=t(13),p=t(12),b=t(17),g=t(4),E=t.n(g),h=t(231),f=t(232),v=t(233),C=t(234),N=t(235),k=t(236),y=t(90),O=t(250),S=t(251),w=t(252),x=t(237),L=t(238),B=t(249),j=t(239),A=function(e){Object(u.a)(n,e);var a=Object(p.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).updateColor=function(){window.innerWidth<993&&t.state.collapseOpen?t.setState({color:"bg-white"}):t.setState({color:"navbar-transparent"})},t.toggleCollapse=function(){t.state.collapseOpen?t.setState({color:"navbar-transparent"}):t.setState({color:"bg-white"}),t.setState({collapseOpen:!t.state.collapseOpen})},t.toggleModalSearch=function(){t.setState({modalSearch:!t.state.modalSearch})},t.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateColor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:E()("navbar-absolute",this.state.color),expand:"lg"},r.a.createElement(f.a,{fluid:!0},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("div",{className:E()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(v.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},this.props.brandText)),r.a.createElement("button",{"aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navigation","data-toggle":"collapse",id:"navigation",type:"button",onClick:this.toggleCollapse},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(C.a,{navbar:!0,isOpen:this.state.collapseOpen},r.a.createElement(N.a,{className:"ml-auto",navbar:!0},r.a.createElement(k.a,{className:"search-bar"},r.a.createElement(y.a,{color:"link","data-target":"#searchModal","data-toggle":"modal",id:"search-button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-zoom-split"}),r.a.createElement("span",{className:"d-lg-none d-md-block"},"Search"))),r.a.createElement(O.a,{nav:!0},r.a.createElement(S.a,{caret:!0,color:"default","data-toggle":"dropdown",nav:!0,onClick:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"photo"},r.a.createElement("img",{alt:"...",src:t(58)})),r.a.createElement("b",{className:"caret d-none d-lg-block d-xl-block"}),r.a.createElement("p",{className:"d-lg-none"},"Account")),r.a.createElement(w.a,{className:"dropdown-navbar",right:!0,tag:"ul"},r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Profile")),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Settings")),r.a.createElement(L.a,{divider:!0,tag:"li"}),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Log out")))),r.a.createElement("li",{className:"separator d-lg-none"}))))),r.a.createElement(B.a,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},r.a.createElement("div",{className:"modal-header"},r.a.createElement(j.a,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),r.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}]),n}(r.a.Component),D=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(f.a,{fluid:!0},r.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," made with"," ",r.a.createElement("i",{className:"tim-icons icon-heart-2"})," by"," ",r.a.createElement("a",{href:"https://liflip.com",target:"_blank"},"LifLip")," ",".")))}}]),t}(r.a.Component),M=t(43),R=t(26),T=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).linkOnClick=function(){document.documentElement.classList.remove("nav-open")},n.activeRoute.bind(Object(M.a)(n)),n}return Object(d.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(n=new b.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&n.destroy()}},{key:"render",value:function(){var e=this,a=this.props,t=a.bgColor,n=a.routes,l=a.rtlActive,o=a.logo,c=null,i=null;return void 0!==o&&(void 0!==o.outterLink?(c=r.a.createElement("a",{href:o.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:this.props.toggleSidebar},r.a.createElement("div",{className:"logo-img"},r.a.createElement("img",{src:o.imgSrc,alt:"react-logo"}))),i=r.a.createElement("a",{href:o.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:this.props.toggleSidebar},o.text)):(c=r.a.createElement(R.a,{to:o.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},r.a.createElement("div",{className:"logo-img"},r.a.createElement("img",{src:o.imgSrc,alt:"react-logo"}))),i=r.a.createElement(R.a,{to:o.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},o.text))),r.a.createElement("div",{className:"sidebar",data:t},r.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==c||null!==i?r.a.createElement("div",{className:"logo"},c,i):null,r.a.createElement(N.a,null,n.map((function(a,t){return a.redirect?null:r.a.createElement("li",{className:e.activeRoute(a.path)+(a.pro?" active-pro":""),key:t},r.a.createElement(R.b,{to:a.layout+a.path,className:"nav-link",activeClassName:"active",onClick:e.props.toggleSidebar},r.a.createElement("i",{className:a.icon}),r.a.createElement("p",null,l?a.rtlName:a.name)))})))))}}]),t}(r.a.Component);T.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var W=T,P=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleClick=function(){"dropdown show-dropdown"===n.state.classes?n.setState({classes:"dropdown show-dropdown show"}):n.setState({classes:"dropdown show-dropdown"})},n.activateMode=function(e){switch(e){case"light":document.body.classList.add("white-content");break;default:document.body.classList.remove("white-content")}},n.state={classes:"dropdown show-dropdown"},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fixed-plugin"},r.a.createElement("div",{className:this.state.classes},r.a.createElement("div",{onClick:this.handleClick},r.a.createElement("i",{className:"fa fa-cog fa-2x"})),r.a.createElement("ul",{className:"dropdown-menu show"},r.a.createElement("li",{className:"header-title"},"Colour Mode"),r.a.createElement("li",{className:"adjustments-line text-center color-change"},r.a.createElement("span",{className:"color-label"},"LIGHT MODE")," ",r.a.createElement("span",{className:"badge light-badge mr-2",onClick:function(){return e.activateMode("light")}})," ",r.a.createElement("span",{className:"badge dark-badge ml-2",onClick:function(){return e.activateMode("dark")}})," ",r.a.createElement("span",{className:"color-label"},"DARK MODE")," "),r.a.createElement("li",{className:"header-title"}))))}}]),t}(l.Component),U=(t(47),t(240)),H=t(241),F=t(242),z=t(243),_=t(244),G=t(245),J=(t(57),t(97)),I=t.n(J),V=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).setBgChartData=function(e){n.setState({bigChartData:e})},n.state={bigChartData:"data1"},n}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(U.a,null,r.a.createElement(H.a,{top:!0,src:I.a,alt:"Loading Video..."}),r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Controls"),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(y.a,{color:"primary",style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-light-3"}))),r.a.createElement(G.a,null,r.a.createElement(y.a,{style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-minimal-up"}))),r.a.createElement(G.a,null,r.a.createElement(y.a,{color:"primary",style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-controller"})))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(y.a,{style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-minimal-left"}))),r.a.createElement(G.a,null,r.a.createElement(y.a,{style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-button-pause"}))),r.a.createElement(G.a,null,r.a.createElement(y.a,{style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-minimal-right"})))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(y.a,{color:"primary",style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-video-66"}))),r.a.createElement(G.a,null,r.a.createElement(y.a,{style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-minimal-down"}))),r.a.createElement(G.a,null,r.a.createElement(y.a,{color:"primary",style:{width:"100%",height:"100px",padding:"0"}},r.a.createElement("i",{className:"tim-icons icon-zoom-split"}))))))))}}]),t}(r.a.Component),Y=t(246),q=t(247);function X(e){var a;a=window.XMLHttpRequest?new XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");var t="";1==e&&(t="/robo/robo.php?test=@uv_accese"),console.log("Received"),2==e&&(t="/robo/robo.php?test=@uv_spente"),3==e&&(t="/robo/robo.php?test=@braccio_pos_init"),4==e&&(t="/robo/robo.php?test=@braccio_alto"),5==e&&(t="/robo/robo.php?test=@braccio_medio"),6==e&&(t="/robo/robo.php?test=@braccio_basso"),7==e&&(t="/robo/robo.php?test=@spruzzo"),8==e&&(t="/robo/robo.php?test=@pompa_on"),9==e&&(t="/robo/robo.php?test=@pompa_off"),10==e&&(t="/robo/robo.php?test=@luci_rbg_accese"),11==e&&(t="/robo/robo.php?test=@luci_rbg_spente"),12==e&&(t="/robo/robo.php?test=@test"),13==e&&(t="/robo/robo.php?test=@sequenza1"),14==e&&(t="/robo/robo.php?test=@cam_uv"),15==e&&(t="/robo/robo.php?test=@cam_alta"),16==e&&(t="/robo/robo.php?test=@cam_media"),17==e&&(t="/robo/robo.php?test=@cam_bassa"),18==e&&(t="/robo/robo.php?test=@detachmotor"),19==e&&(t="/robo/robo.php?test="+document.getElementById("rbgSelector").value),20==e&&(t="/robo/robo.php?test=@%23commandclass:roboleo.BaseSyntSpeech:"+document.getElementById("specchTextBox").value),21==e&&(t="/robo/robo.php?test="+document.getElementById("programString").value),22==e&&(t="/robo/robo.php?test=@attivacontrolli"),23==e&&(t="/robo/robo.php?test=@disattivacontrolli"),24==e&&(t="/robo/robo.php?test=@attivamotori"),25==e&&(t="/robo/robo.php?test=@detachmotor"),26==e&&(t="/robo/robo.php?test=@startallserial"),27==e&&(t="/robo/robo.php?test=@stopallserial"),a.open("GET",t,!0),a.send()}function K(e){console.log("clicked"+e)}var Q,Z,$=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).setBgChartData=function(e){n.setState({bigChartData:e})},n.state={bigChartData:"data1"},n}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"CPU"),r.a.createElement(Y.a,null,"67%"),r.a.createElement(q.a,{value:"67"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Ram"),r.a.createElement(Y.a,null,"15%"),r.a.createElement(q.a,{value:"15"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Network"),r.a.createElement(Y.a,null,"7%"),r.a.createElement(q.a,{value:"7"}))))),r.a.createElement("h3",null,"SENSOR DATA"),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Temperature"),r.a.createElement(Y.a,null,"22\xb0C"),r.a.createElement(q.a,{value:"33"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Flow"),r.a.createElement(Y.a,null,"0.2 L/min"),r.a.createElement(q.a,{value:"20"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Humidity"),r.a.createElement(Y.a,null,"NOT RESPONDING"),r.a.createElement(q.a,{color:"danger",value:"100"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Water Level"),r.a.createElement(Y.a,{id:"WL"},"76%"),r.a.createElement(q.a,{value:"76"}))))),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Time of Flight"),r.a.createElement(Y.a,null,"22 cm"),r.a.createElement(q.a,{value:"70"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Current"),r.a.createElement(Y.a,null,"0.2 Amps"),r.a.createElement(q.a,{value:"24"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Ping"),r.a.createElement(Y.a,null,"20 ms"),r.a.createElement(q.a,{value:"20"})))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Ozone"),r.a.createElement(Y.a,null,"289 DU"),r.a.createElement(q.a,{value:"20"}))))),r.a.createElement("h3",null,"ONBOARD SYSTEMS"),r.a.createElement(_.a,null,r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Light"),r.a.createElement(Y.a,null,"On"),r.a.createElement(y.a,{color:"primary",onClick:K,style:{width:"100%"}},r.a.createElement("i",{className:"tim-icons icon-button-power"}))))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Pump"),r.a.createElement(Y.a,null,"On"),r.a.createElement(y.a,{color:"primary",onClick:K,style:{width:"100%"}},r.a.createElement("i",{className:"tim-icons icon-button-power"}))))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Hook"),r.a.createElement(Y.a,null,"Attached"),r.a.createElement(y.a,{color:"primary",style:{width:"100%"}},r.a.createElement("i",{className:"tim-icons icon-button-power"}))))),r.a.createElement(G.a,null,r.a.createElement(U.a,{style:{width:"100%"}},r.a.createElement(F.a,null,r.a.createElement(z.a,null,"Spray"),r.a.createElement(Y.a,null,"Inactive"),r.a.createElement(y.a,{color:"primary",style:{width:"100%"}},r.a.createElement("i",{className:"tim-icons icon-button-power"})))))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return X(1)},type:"button"},"UV On"),r.a.createElement("button",{onClick:function(){return X(2)},type:"button"},"UV Off"))))}}]),t}(r.a.Component),ee=t(248),ae=[{path:"/dashboard",name:"Control",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-controller",component:V,layout:"/admin"},{path:"/system",name:"System",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-sound-wave",component:$,layout:"/admin"},{path:"/logs",name:"Logs",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-bullet-list-67",component:function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).setBgChartData=function(e){n.setState({bigChartData:e})},n.state={bigChartData:"data1"},n}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(ee.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"TimeStamp"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},"11:22:33"),r.a.createElement("td",null,"Event"),r.a.createElement("td",null,"Camera moved 90\xb0")),r.a.createElement("tr",{className:"table-danger"},r.a.createElement("td",{className:"text-center"},"11:21:39"),r.a.createElement("td",{className:"errorzsx",color:"#fff"},"ERROR"),r.a.createElement("td",null,"Humidity sensor not responding")),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},"10:12:46"),r.a.createElement("td",null,"Event"),r.a.createElement("td",null,"Camera initialized")),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},"10:11:58"),r.a.createElement("td",null,"Event"),r.a.createElement("td",null,"Initializing Camera")),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},"10:11:46"),r.a.createElement("td",null,"Event"),r.a.createElement("td",null,"System booted up correctly!"))))))}}]),t}(r.a.Component),layout:"/admin"}],te=t(58),ne=t.n(te),le=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).toggleSidebar=function(){document.documentElement.classList.toggle("nav-open"),n.setState({sidebarOpened:!n.state.sidebarOpened})},n.getRoutes=function(e){return e.map((function(e,a){return"/admin"===e.layout?r.a.createElement(s.b,{path:e.layout+e.path,component:e.component,key:a}):null}))},n.handleBgClick=function(e){n.setState({backgroundColor:e})},n.getBrandText=function(e){for(var a=0;a<ae.length;a++)if(-1!==n.props.location.pathname.indexOf(ae[a].layout+ae[a].path))return ae[a].name;return"Brand"},n.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),Q=new b.a(this.refs.mainPanel,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),a=0;a<e.length;a++)Q=new b.a(e[a])}}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(Q.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1)for(var a=document.querySelectorAll(".table-responsive"),t=0;t<a.length;t++)Q=new b.a(a[t]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(W,Object.assign({},this.props,{routes:ae,bgColor:this.state.backgroundColor,logo:{outterLink:"#",text:"Pages",imgSrc:ne.a},toggleSidebar:this.toggleSidebar})),r.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},r.a.createElement(A,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),r.a.createElement(s.d,null,this.getRoutes(ae),r.a.createElement(s.a,{from:"*",to:"/admin/dashboard"})),-1!==this.props.location.pathname.indexOf("maps")?null:r.a.createElement(D,{fluid:!0}))),r.a.createElement(P,{bgColor:this.state.backgroundColor,handleBgClick:this.handleBgClick}))}}]),t}(r.a.Component),re=function(e){Object(u.a)(n,e);var a=Object(p.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).updateColor=function(){window.innerWidth<993&&t.state.collapseOpen?t.setState({color:"bg-white"}):t.setState({color:"navbar-transparent"})},t.toggleCollapse=function(){t.state.collapseOpen?t.setState({color:"navbar-transparent"}):t.setState({color:"bg-white"}),t.setState({collapseOpen:!t.state.collapseOpen})},t.toggleModalSearch=function(){t.setState({modalSearch:!t.state.modalSearch})},t.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateColor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:E()("navbar-absolute",this.state.color),expand:"lg"},r.a.createElement(f.a,{fluid:!0},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("div",{className:E()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(v.a,{href:"#pablo",onClick:function(e){return e.preventDefault()}},this.props.brandText)),r.a.createElement("button",{"aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navigation","data-toggle":"collapse",id:"navigation",type:"button",onClick:this.toggleCollapse},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(C.a,{navbar:!0,isOpen:this.state.collapseOpen},r.a.createElement(N.a,{className:"mr-auto",navbar:!0},r.a.createElement(k.a,{className:"search-bar"},r.a.createElement(y.a,{color:"link","data-target":"#searchModal","data-toggle":"modal",id:"search-button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-zoom-split"}),r.a.createElement("span",{className:"d-lg-none d-md-block"},"Search"))),r.a.createElement(O.a,{nav:!0},r.a.createElement(S.a,{caret:!0,color:"default","data-toggle":"dropdown",nav:!0},r.a.createElement("div",{className:"notification d-none d-lg-block d-xl-block"}),r.a.createElement("i",{className:"tim-icons icon-sound-wave"}),r.a.createElement("p",{className:"d-lg-none"},"Notifications")),r.a.createElement(w.a,{className:"dropdown-navbar",tag:"ul",right:!0},r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Mike John responded to your email")),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"You have 5 more tasks")),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Your friend Michael is in town")),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Another notification")),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Another one")))),r.a.createElement(O.a,{nav:!0},r.a.createElement(S.a,{caret:!0,color:"default","data-toggle":"dropdown",nav:!0,onClick:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"photo"},r.a.createElement("img",{alt:"...",src:t(225)})),r.a.createElement("b",{className:"caret d-none d-lg-block d-xl-block"}),r.a.createElement("p",{className:"d-lg-none"},"Log out")),r.a.createElement(w.a,{className:"dropdown-navbar",tag:"ul"},r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Profile")),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Settings")),r.a.createElement(L.a,{divider:!0,tag:"li"}),r.a.createElement(x.a,{tag:"li"},r.a.createElement(L.a,{className:"nav-item"},"Log out")))),r.a.createElement("li",{className:"separator d-lg-none"}))))),r.a.createElement(B.a,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},r.a.createElement("div",{className:"modal-header"},r.a.createElement(j.a,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),r.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}]),n}(r.a.Component),oe=t(98),ce=t.n(oe),ie=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).toggleSidebar=function(){document.documentElement.classList.toggle("nav-open"),n.setState({sidebarOpened:!n.state.sidebarOpened})},n.getRoutes=function(e){return e.map((function(e,a){return"/rtl"===e.layout?r.a.createElement(s.b,{path:e.layout+e.path,component:e.component,key:a}):null}))},n.handleBgClick=function(e){n.setState({backgroundColor:e})},n.getBrandText=function(e){for(var a=0;a<ae.length;a++)if(-1!==n.props.location.pathname.indexOf(ae[a].layout+ae[a].path))return ae[a].rtlName||ae[a].name;return"Brand"},n.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),Z=new b.a(this.refs.mainPanel,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),a=0;a<e.length;a++)Z=new b.a(e[a])}document.body.classList.add("rtl","menu-on-right");var t=document.head,n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.id="rtl-id",n.href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css",t.appendChild(n)}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(Z.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on")),document.body.classList.remove("rtl","menu-on-right"),document.getElementById("rtl-id").remove()}},{key:"componentDidUpdate",value:function(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1)for(var a=document.querySelectorAll(".table-responsive"),t=0;t<a.length;t++)Z=new b.a(a[t]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(W,Object.assign({},this.props,{routes:ae,bgColor:this.state.backgroundColor,rtlActive:!0,logo:{outterLink:"https://www.creative-tim.com/",text:"\u0627\u0644\u0625\u0628\u062f\u0627\u0639\u064a\u0629 \u062a\u064a\u0645",imgSrc:ce.a},toggleSidebar:this.toggleSidebar})),r.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},r.a.createElement(re,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),r.a.createElement(s.d,null,this.getRoutes(ae)),-1!==this.props.location.pathname.indexOf("maps")?null:r.a.createElement(D,{fluid:!0}))),r.a.createElement(P,{bgColor:this.state.backgroundColor,handleBgClick:this.handleBgClick}))}}]),t}(r.a.Component),se=(t(226),t(227),t(228),t(229),Object(i.a)());c.a.render(r.a.createElement(s.c,{history:se},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/admin",render:function(e){return r.a.createElement(le,e)}}),r.a.createElement(s.b,{path:"/rtl",render:function(e){return r.a.createElement(ie,e)}}),r.a.createElement(s.a,{from:"/",to:"/admin/dashboard"}))),document.getElementById("root"))},57:function(e,a){var t={maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:125,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}},n={data1:function(e){var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(29,140,248,0.2)"),a.addColorStop(.4,"rgba(29,140,248,0.0)"),a.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[100,70,90,70,85,60,75,60,90,80,110,100]}]}},data2:function(e){var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(29,140,248,0.2)"),a.addColorStop(.4,"rgba(29,140,248,0.0)"),a.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,120,105,110,95,105,90,100,80,95,70,120]}]}},data3:function(e){var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(29,140,248,0.2)"),a.addColorStop(.4,"rgba(29,140,248,0.0)"),a.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[60,80,65,130,80,105,90,130,70,115,60,130]}]}},options:t},l={data:function(e){var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(29,140,248,0.2)"),a.addColorStop(.4,"rgba(29,140,248,0.0)"),a.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]}},options:t};e.exports={chartExample1:n,chartExample2:l,chartExample3:{data:function(e){var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartExample4:{data:function(e){var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(66,134,121,0.15)"),a.addColorStop(.4,"rgba(66,134,121,0.0)"),a.addColorStop(0,"rgba(66,134,121,0)"),{labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:a,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}}},58:function(e,a,t){e.exports=t.p+"static/media/mike.aab414f7.jpg"},97:function(e,a,t){e.exports=t.p+"static/media/warehouse.2e8e8684.jpg"},98:function(e,a,t){e.exports=t.p+"static/media/react-logo.eb6be414.png"},99:function(e,a,t){e.exports=t(230)}},[[99,1,2]]]);
//# sourceMappingURL=main.6bad7502.chunk.js.map