(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(27),c=n.n(o),r=n(29),s=n(7),l=n(1),d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"REST API Documentation"}),Object(l.jsxs)("p",{children:["The main endpoint is:"," ",Object(l.jsx)("a",{href:"https://min-to-win.netlify.app/api-v1",target:"_blank",rel:"noopener noreferrer",children:"https://min-to-win.netlify.app/api-v1"})]}),Object(l.jsx)("h2",{children:"Data Response"}),Object(l.jsxs)("p",{children:["Responses are sent as a JSON object with a ",Object(l.jsx)("code",{children:'"data"'})," field containing the information for a single game, or as an array with a list of games."]}),Object(l.jsx)("h3",{children:"Response for single game"}),Object(l.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:'{\n  "success": true,\n  "data": {\n    "_id": "618dc9f76417fb53ec9459bd",\n    "title": "Face the Cookie",\n    "description": "This is one of the more delicious games on the roster. Each player has a cookie on their forehead. Using only their facial muscles, they will need to move this cookie, to their mouth. If a cookie falls to the ground during the attempt, the person must take another cookie and start all over again.",\n    "materials": [\n        "Cookies"\n    ],\n    "type": "Head to Head",\n    "demoVideo": "https://youtu.be/HljLGW45_-E",\n    "gameId": 1\n  }\n}'}),Object(l.jsx)("h3",{children:"Response for list of games"}),Object(l.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:'{\n    "success": true,\n    "data": [\n        {\n            "_id": "618dc9f76417fb53ec9459bd",\n            "title": "Face the Cookie",\n            "description": "This is one of the more delicious games on the roster. Each player has a cookie on their forehead. Using only their facial muscles, they will need to move this cookie, to their mouth. If a cookie falls to the ground during the attempt, the person must take another cookie and start all over again.",\n            "materials": [\n                "Cookies"\n            ],\n            "type": "Head to Head",\n            "demoVideo": "https://youtu.be/HljLGW45_-E",\n            "gameId": 1\n        },\n        {\n            "_id": "618dc9f76417fb53ec9459be",\n            "title": "Whippersnapper",\n            "description": "Each player will be given a towel or a rug and will have a box a certain distance away from them. The front part of the cloth will be weighted down. A ping pong ball will be placed on the rug. You will need to flick the cloth \u2013 and the ball \u2013 upwards using the two free ends of the cloth. You will need to get the ball into the box with this method.",\n            "materials": [\n                "Towel or rug for each player",\n                "Ping pong balls",\n                "Boxes"\n            ],\n            "type": "Head to Head",\n            "demoVideo": "https://youtu.be/sojMlUNhLos",\n            "gameId": 2\n        },\n        {\n            "_id": "618dc9f76417fb53ec9459bf",\n            "title": "Nose Dive",\n            "description": "Here the contestants rely on petroleum jelly (or something similar) and a bowl full of cotton balls. The goal is to rub the jelly on your nose and use it to pick up the cotton balls. Once the cotton ball has stuck to your nose, you will need to walk across the room and deposit the ball in another bowl. You will then need to go back and repeat the process.",\n            "materials": [\n                "Petroleum Jelly",\n                "Cotton balls"\n            ],\n            "type": "Head to Head",\n            "demoVideo": "https://youtu.be/dFFtXUDxhuU",\n            "gameId": 3\n        }\n    ]\n}'}),Object(l.jsx)("h2",{children:"Routes"}),Object(l.jsx)("h3",{children:"/games?limit=:limit"}),Object(l.jsx)("p",{children:"Returns a list of games with the given limit (default=20)."}),Object(l.jsx)("h3",{children:"/games/:gameId"}),Object(l.jsxs)("p",{children:["Returns the game with the specific ",Object(l.jsx)("code",{children:"gameId"}),"."]})]})},h=n(54),j=n.n(h),b=n(70),p=n(12),m=n(73),x=n.n(m),u=n(153),O=n(152),f=n(154),g=n(145),y=n(149),w=n(155),v=function(){return Object(l.jsx)("div",{className:"hero",children:Object(l.jsx)(O.a,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:Object(l.jsxs)(u.a,{maxWidth:"sm",children:[Object(l.jsx)(f.a,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Minute To Win It Games Wiki"}),Object(l.jsxs)(f.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:["A list of Minute to Win It games, originally scraped from the"," ",Object(l.jsx)("a",{href:"https://challengestodo.com/minute-to-win-it-games/",target:"_blank",rel:"noopener noreferrer",children:"Challenges To Do website"}),"."]}),Object(l.jsxs)(g.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[Object(l.jsx)(y.a,{variant:"contained",children:Object(l.jsx)(w.a,{style:{textDecoration:"none",color:"white"},href:"#games",children:"Browse Games"})}),Object(l.jsx)(y.a,{variant:"outlined",children:Object(l.jsx)(r.b,{style:{textDecoration:"none",color:"initial"},to:"/api/doc",children:"View API"})})]})]})})})},k=function(){return Object(l.jsx)("div",{})},I=n(151),H=n(77),D=n.n(H),W=n(156),C=n(158),T=n(159),R=n(160),_=n(148),E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"480px",width:"max-content",bgcolor:"background.paper",border:"2px solid #000",p:4},N=function(e){var t=e.game,n=Object(a.useState)(!1),i=Object(p.a)(n,2),o=i[0],c=i[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(W.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(l.jsx)(C.a,{component:"img",image:t.coverImg,alt:"Cover Image for ".concat(t.title)}),Object(l.jsxs)(O.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(l.jsxs)(T.a,{sx:{flex:"1 0 auto"},children:[Object(l.jsx)(f.a,{component:"div",variant:"h4",sx:{my:2},children:t.title}),Object(l.jsx)(f.a,{component:"inline",variant:"p",color:"white",bgcolor:function(e){switch(e){case"Head to Head":return"primary.main";case"2 vs 2":return"secondary.main";case"Multiplayer":return"info.main";case"Relay":return"success.main";default:return"text.secondary"}}(t.type),sx:{my:2,p:1,borderRadius:2},children:t.type}),Object(l.jsx)(f.a,{variant:"p",color:"text.primary",component:"div",sx:{my:2},children:t.description})]}),t.demoVideo&&Object(l.jsxs)(R.a,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[Object(l.jsx)(y.a,{onClick:function(){return c(!0)},children:"View Demo"}),Object(l.jsx)(_.a,{open:o,onClose:function(){return c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(l.jsxs)(O.a,{sx:E,children:[Object(l.jsx)(f.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:t.title}),Object(l.jsx)(O.a,{children:Object(l.jsx)(D.a,{controls:!0,url:t.demoVideo})})]})})]})]})]})})},S=function(e){var t=e.games;return Object(l.jsx)(u.a,{children:Object(l.jsx)(I.a,{container:!0,spacing:4,children:t.map((function(e){return Object(l.jsx)(I.a,{item:!0,xs:12,sm:8,md:6,children:Object(l.jsx)(N,{game:e},e.gameId)},e.gameId)}))})})},V=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)("".concat("https://min-to-win.netlify.app/api-v1","/games")),c=Object(p.a)(o,2);c[0],c[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat("https://min-to-win.netlify.app/api-v1","/games"));case 2:t=e.sent,i(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(l.jsxs)("main",{children:[Object(l.jsx)(v,{}),Object(l.jsxs)(u.a,{children:[Object(l.jsx)("h1",{id:"games",children:"The Games"}),Object(l.jsx)(k,{}),Object(l.jsx)(S,{games:n})]})]})},M=n(161),A=n(162),G=function(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)(M.a,{position:"relative",children:Object(l.jsxs)(A.a,{sx:{display:"flex",justifyContent:"space-evenly"},children:[Object(l.jsx)("div",{className:"left",style:{width:"50%"},children:Object(l.jsx)(f.a,{variant:"h6",color:"inherit",noWrap:!0,children:Object(l.jsx)(r.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"MinToWin"})})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)(O.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[Object(l.jsx)(f.a,{sx:{minWidth:100},children:Object(l.jsx)(r.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Home"})}),Object(l.jsx)(f.a,{sx:{minWidth:100},children:Object(l.jsx)(r.b,{style:{textDecoration:"none",color:"white"},to:"/api/doc",children:"API"})})]})})]})})})},P=function(){return Object(l.jsx)(O.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:Object(l.jsxs)(f.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:["Made with \u2615 \ud83d\ude2d \ud83d\udcc3 by"," ",Object(l.jsx)(w.a,{target:"_blank",href:"https://geraldiner.com",children:"@geraldiner"})]})})},U=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(G,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",element:Object(l.jsx)(V,{})}),Object(l.jsx)(s.a,{exact:!0,path:"/api/doc",element:Object(l.jsx)(d,{})})]}),Object(l.jsx)(P,{})]})})},B=n(163);c.a.render(Object(l.jsxs)(i.a.StrictMode,{children:[Object(l.jsx)(B.a,{}),Object(l.jsx)(U,{})]}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.ea976490.chunk.js.map