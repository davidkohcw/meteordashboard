(this.webpackJsonpmeteordashboard=this.webpackJsonpmeteordashboard||[]).push([[0],{222:function(e,t,n){},224:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(186),s=n.n(c),o=(n(222),n(123)),l=n.n(o),i=n(187),j=n(48),d=n.p+"static/media/logo.6ce24c58.svg",u=(n(224),n(188)),b=n.n(u),h=n(7),x=function(e){var t=e.props;if(void 0==t)return null;console.log(t);return Object(h.jsxs)("table",{id:"Current-Leaders-Table",className:"ui small selectable inverted table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Contribution"}),Object(h.jsx)("th",{children:"Wallet ID"})]})}),Object(h.jsx)("tbody",{children:Object.values(t).map((function(e){return Object(h.jsxs)("tr",{className:"Table-Row",children:[Object(h.jsx)("td",{children:e.amount}),Object(h.jsx)("td",{children:e.from})]})}))})]})},O=(n(244),n(357)),f=n(360),m=n(358),p=n(362),g=function(e){var t=e.props;if(void 0==t)return null;return Object(h.jsxs)(f.a,{domainPadding:20,children:[Object(h.jsx)(m.a,{style:{data:{fill:"#c43a31"}},data:t,bins:20,x:"amount",labels:function(e){return function(e){return e.y>0?e.y:""}(e.datum)}}),Object(h.jsx)(p.a,{label:"Contribution"}),Object(h.jsx)(p.a,{dependentAxis:!0,label:"Wallet Count"})]})},v=function(e){var t=e.props;if(void 0==t)return null;function n(e,t){var n=Math.floor(t*e/100)+10;return NaN==n?null:n}return Object(h.jsxs)("table",{className:"ui tiny selectable inverted table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Tier"}),Object(h.jsx)("th",{children:"Breakdown"}),Object(h.jsx)("th",{children:"Available"}),Object(h.jsx)("th",{children:"Odds of Egg"}),Object(h.jsx)("th",{children:"Min Contribution"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Legendary"}),Object(h.jsx)("td",{children:"Top 10"}),Object(h.jsx)("td",{children:"10"}),Object(h.jsx)("td",{children:"100%"}),Object(h.jsxs)("td",{children:[" ",t[10].amount," UST "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Ancient"}),Object(h.jsx)("td",{children:"Next 9%"}),Object(h.jsx)("td",{children:"30"}),Object(h.jsxs)("td",{children:[" ",(3e3/(.09*t.length)).toFixed(2),"% "]}),Object(h.jsxs)("td",{children:[" ",t[n(9,t.length)].amount," "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Rare"}),Object(h.jsx)("td",{children:"Next 22%"}),Object(h.jsx)("td",{children:"60"}),Object(h.jsxs)("td",{children:[" ",100*(60/(.22*t.length)).toFixed(2),"% "]}),Object(h.jsxs)("td",{children:[" ",t[n(31,t.length)].amount]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Common"}),Object(h.jsx)("td",{children:"Remainder"}),Object(h.jsx)("td",{children:"101"}),Object(h.jsxs)("td",{children:[" ",(101/(.69*t.length-10)*100).toFixed(2),"%  "]}),Object(h.jsx)("td",{children:" 8 UST "})]})]})]})},y=n(361),k=n(363),S=function(e){var t=e.props,n=Object(r.useState)([]),a=Object(j.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)([]),l=Object(j.a)(o,2),i=l[0],d=l[1],u=Object(r.useState)([]),b=Object(j.a)(u,2),x=b[0],O=b[1],m=Object(r.useState)([]),g=Object(j.a)(m,2),v=g[0],S=g[1];if(Object(r.useEffect)((function(){!function(e){for(var t=[],n=[],r=[],a=[],c=0;c<e.length;c++)t.push({x:c,y:w(e[c])}),n.push({x:c,y:C(e[c])}),r.push({x:c,y:T(e[c])}),a.push({x:c,y:8});s(t),d(n),O(r),S(a)}(t)}),[t]),void 0==t)return null;function w(e){return e.length>=10?e[10].amount:e[e.length].amount}function C(e){return e.length>=10?e[Math.floor(.09*e.length+10)].amount:e[e.length].amount}function T(e){return e.length>=10?e[Math.floor(.31*e.length+10)].amount:e[e.length].amount}return Object(h.jsxs)(f.a,{domainPadding:20,children:[Object(h.jsx)(y.a,{style:{data:{stroke:"#c43a31"}},data:c,interpolation:"natural"}),Object(h.jsx)(y.a,{style:{data:{stroke:"blue"}},data:i,interpolation:"natural"}),Object(h.jsx)(y.a,{style:{data:{stroke:"orange"}},data:x,interpolation:"natural"}),Object(h.jsx)(y.a,{style:{data:{stroke:"green"}},data:v,interpolation:"natural"}),Object(h.jsx)(k.a,{x:50,y:10,orientation:"horizontal",gutter:20,colorScale:["#c43a31","blue","orange","green"],data:[{name:"Legendary"},{name:"Ancient"},{name:"Rare"},{name:"Common"}]}),Object(h.jsx)(p.a,{label:"Meteor Shower"}),Object(h.jsx)(p.a,{dependentAxis:!0})]})};var w=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=new Date(2021,10,1,5).getTime(),s=10,o="terra193xyvyk5c6f46k87x9nq7gcg305dk37nzm7vdt",u=function(){var e=(new Date).getTime(),t=Math.floor((e-c)/36e4);if(t>s)return 9;return t}();function f(e,t){var n="https://bombay-fcd.terra.dev/v1/txs?";return n+="account="+e,t&&(n+="&offset="+t),n+="&limit=100"}function m(e,t){return e.amount<t.amount?1:e.amount>t.amount?-1:0}function p(){return(p=Object(i.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=f(o),n=!0,r=[];case 3:if(!n){e.next=8;break}return e.next=6,b.a.get(t).then((function(e){var a=e.data.next,c=k(e.data.txs);r=r.concat(c),t=f(o,a),c.length<100&&(n=!1)}));case 6:e.next=3;break;case 8:r.reverse(),a(y(r));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){for(var t=[],n=0;n<s;n++)t.push([]);for(n=0;n<e.length;n++){var r=Math.floor((e[n].timestamp-c)/36e5);if(r<s)if(0==t[r].length)t[r].push(e[n]);else for(var a=parseInt(t[r].length),o=0;o<a;o++){if(t[r][o].from!=e[n].from){t[r].push(e[n]);break}t[r][o].amount+=e[n].amount}}console.log("Sorting!");for(n=0;n<s;n++)t[n].sort(m);return t}function k(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],a=Date.parse(r.timestamp),s=r.tx.value.msg[0].value.from_address,o=r.tx.value.msg[0].value.amount[0];if("uusd"==o.denom&&a>c){var l={timestamp:a,from:s,amount:parseFloat((parseFloat(o.amount)*Math.pow(10,-6)).toFixed(2))};t.push(l)}}return t}return console.log("Start time: ",c),console.log(u),Object(r.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(O.a,{children:[Object(h.jsx)("h1",{children:"Meteor Shower Dashboard"}),Object(h.jsxs)("h2",{id:"Sub-Heading",children:["Current Shower: ",u+1," / ",s]})]}),Object(h.jsxs)(O.a,{id:"Top-Dashboard",children:[Object(h.jsx)(x,{props:n[u]}),Object(h.jsxs)(O.a,{children:[Object(h.jsx)("div",{children:Object(h.jsx)(g,{props:n[u]})}),Object(h.jsx)(v,{props:n[u]})]})]}),Object(h.jsx)(O.a,{children:Object(h.jsx)(S,{props:n})}),Object(h.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Querying Blockchain :o"})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),C()}},[[350,1,2]]]);
//# sourceMappingURL=main.5c0af6a5.chunk.js.map