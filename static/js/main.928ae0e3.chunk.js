(this.webpackJsonptiktuk=this.webpackJsonptiktuk||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(17),r=c.n(n),i=(c(57),c(58),c(26)),j=c.n(i),o=c(34),d=c(8),u=(c(60),c(90)),l=c(91),b=c(92),x=c(21),h=c(22),O=c(23),p=c(1),m=function(e){return e<1e3?e:e>=1e3&&e<1e5?Math.round(e/1e3)+"."+Math.round(e/100)%10+"k":e>=1e5&&e<1e6?Math.round(e/1e3)+"k":e>=1e6?Math.round(e/1e6)+"."+Math.round(e/1e5)%10+"M":void 0},f=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!1),i=Object(d.a)(r,2),f=i[0],v=i[1],N=c(42).default,k={method:"GET",url:"https://tiktok33.p.rapidapi.com/trending/feed",headers:{"x-rapidapi-host":"tiktok33.p.rapidapi.com","x-rapidapi-key":"c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"}};return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,N.request(k).then((function(e){console.log(e.data),n(e.data)})).catch((function(e){console.error(e)}));case 3:v(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),f?Object(p.jsx)("div",{class:"text-center pt-5",children:Object(p.jsx)("div",{class:"spinner-border",role:"status",children:Object(p.jsx)("span",{class:"sr-only"})})}):Object(p.jsx)(u.a,{children:a.map((function(e){return Object(p.jsx)(u.a,{children:Object(p.jsxs)(l.a,{className:"justify-content-sm-center my-5",children:[Object(p.jsx)(b.a,{sm:"auto",children:Object(p.jsx)("video",{height:.4*e.videoMeta.height,width:.4*e.videoMeta.width,controls:!0,loop:!0,autoPlay:"autoplay",muted:!0,children:Object(p.jsx)("source",{src:e.videoUrl,type:"Video/mp4"})})}),Object(p.jsxs)(b.a,{sm:"4",className:"py-3",children:[Object(p.jsx)(u.a,{className:"videoAuthor px-0 pb-3",children:Object(p.jsx)(O.b,{className:"authorLink",to:"/"+e.authorMeta.name,children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(b.a,{xs:"auto",children:Object(p.jsx)("img",{className:"AvatarXS",src:e.authorMeta.avatar})}),Object(p.jsxs)(b.a,{className:"px-0",children:[Object(p.jsx)("p",{className:"authorName",children:e.authorMeta.name}),Object(p.jsx)("p",{className:"authorNickName",children:e.authorMeta.nickName})]})]})})}),Object(p.jsx)("p",{className:"videoDescription",children:e.text}),Object(p.jsx)(u.a,{className:"videoStatistic",children:Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(b.a,{className:"text-center",children:[Object(p.jsx)(x.a,{icon:h.c,size:"lg"}),Object(p.jsx)("p",{children:m(e.diggCount)})]}),Object(p.jsxs)(b.a,{className:"text-center",children:[Object(p.jsx)(x.a,{icon:h.a,size:"lg"}),Object(p.jsx)("p",{children:m(e.commentCount)})]}),Object(p.jsxs)(b.a,{className:"text-center",children:[Object(p.jsx)(x.a,{icon:h.b,size:"lg"}),Object(p.jsx)("p",{children:m(e.playCount)})]})]})})]})]})},e.id)}))})},v=(c(83),c(93)),N=c(5),k=function(e){return e<1e3?e:e>=1e3&&e<1e5?Math.round(e/1e3)+"."+Math.round(e/100)%10+"k":e>=1e5&&e<1e6?Math.round(e/1e3)+"k":e>=1e6?Math.round(e/1e6)+"."+Math.round(e/1e5)%10+"M":void 0},g=function(){var e=Object(N.g)().nickname,t=Object(s.useState)(""),a=Object(d.a)(t,2),n=a[0],r=a[1],i=Object(s.useState)(""),O=Object(d.a)(i,2),m=(O[0],O[1],Object(s.useState)(!1)),f=Object(d.a)(m,2),g=f[0],y=f[1],M=c(42).default,S={method:"GET",url:"https://tiktok33.p.rapidapi.com/user/info/"+e,headers:{"x-rapidapi-host":"tiktok33.p.rapidapi.com","x-rapidapi-key":"c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"}};return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,M.request(S).then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.error(e)}));case 3:y(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),g?Object(p.jsx)("div",{class:"text-center pt-5",children:Object(p.jsx)("div",{class:"spinner-border",role:"status",children:Object(p.jsx)("span",{class:"sr-only"})})}):n?Object(p.jsxs)(u.a,{className:"my-4",children:[Object(p.jsx)(l.a,{className:"justify-content-center",children:Object(p.jsx)(b.a,{sm:"auto",xs:"auto",children:Object(p.jsx)(v.a,{className:"Avatar",src:n.user.avatarMedium,roundedCircle:!0})})}),Object(p.jsx)(l.a,{className:"justify-content-center my-3",children:Object(p.jsxs)(b.a,{sm:"auto",xs:"auto",children:[Object(p.jsx)("div",{className:"userName text-center",children:n.user.nickname}),Object(p.jsxs)("div",{className:"userNickName text-center pb-3",children:["@",n.user.uniqueId]}),n.user.signature?Object(p.jsx)("div",{className:"userSignature py-3 px-4",children:n.user.signature}):Object(p.jsx)("p",{})]})}),Object(p.jsx)(l.a,{className:"justify-content-center my-4",children:Object(p.jsx)(b.a,{sm:"auto",xs:"auto",children:Object(p.jsx)(u.a,{className:"videoStatistic",children:Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(b.a,{xs:4,className:"text-center px-4",children:[Object(p.jsx)(x.a,{icon:h.e,size:"2x"}),Object(p.jsx)("p",{children:k(n.stats.followerCount)})]}),Object(p.jsxs)(b.a,{xs:4,className:"text-center px-4",children:[Object(p.jsx)(x.a,{icon:h.c,size:"2x"}),Object(p.jsx)("p",{children:k(n.stats.heartCount)})]}),Object(p.jsxs)(b.a,{xs:4,className:"text-center px-4",children:[Object(p.jsx)(x.a,{icon:h.d,size:"2x"}),Object(p.jsx)("p",{children:k(n.stats.videoCount)})]})]})})})})]}):Object(p.jsx)("div",{})},y=(c(84),c(94)),M=c(95),S=function(){return Object(p.jsx)(y.a,{bg:"light",fixed:"top",children:Object(p.jsx)(u.a,{children:Object(p.jsx)(M.a,{className:"m-auto py-2",children:Object(p.jsx)(M.a.Link,{children:Object(p.jsx)(O.b,{to:"/",className:"navLink",children:"Trending"})})})})})};var C=function(){return Object(p.jsx)(O.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(S,{}),Object(p.jsxs)(N.c,{children:[Object(p.jsx)(N.a,{path:"/",exact:!0,element:Object(p.jsx)(f,{})}),Object(p.jsx)(N.a,{path:"/:nickname",exact:!0,element:Object(p.jsx)(g,{})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(87);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),w()}},[[88,1,2]]]);
//# sourceMappingURL=main.928ae0e3.chunk.js.map