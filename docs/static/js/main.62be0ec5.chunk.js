(this["webpackJsonpusedapp-demo"]=this["webpackJsonpusedapp-demo"]||[]).push([[0],{104:function(e,n,t){},107:function(e,n){},109:function(e,n){},125:function(e,n,t){"use strict";t.r(n);var a,c=t(2),r=t.n(c),s=t(91),o=t.n(s),i=(t(104),t(12)),b=t(26),j=t(17),d=t(136),l=t(74),h=t(19),u=t(27),O=t(99),p=t(137),x=t(133),f=t(56),m=t(7);function v(){var e=Object(O.a)().account,n=Object(p.a)(e),t=Object(x.a)("0xe22da380ee6b445bb8273c81944adeb6e8450422",e);return e?Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Ethers: ",n?Object(f.a)(n):0]}),Object(m.jsxs)("h1",{children:["USDC: ",t?Object(f.b)(t,6):0]})]}):Object(m.jsx)("h1",{children:"Not Connect Yet"})}var g=u.a.button(a||(a=Object(b.a)(["\n    border: none;\n    background-color: hsl(323, 95%, 80%);\n    border-radius: 12px;\n    font-size: 1.2rem;\n    padding: .5rem 1rem;\n    color: white;\n    font-weight: 500;\n    :hover,\n    :focus {\n        outline: 1px solid hsl(323, 95%, 40%);\n    }\n"])));function y(){var e=Object(O.a)(),n=e.activateBrowserWallet,t=e.account,a=e.error;return console.log(a),Object(c.useEffect)((function(){a&&alert(a)}),[a]),t?Object(m.jsx)("h1",{children:t}):Object(m.jsx)(g,{onClick:function(){return n()},children:"Connect To Wallet"})}var w,k=t(11),C=t(79),F=t(65),M=new C.b([{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"}]),S=u.a.input(w||(w=Object(b.a)(["\n    border: none;\n    font-size: inherit;\n"])));function E(){var e=Object(O.a)().account,n=Object(c.useState)("0xe22da380ee6b445bb8273c81944adeb6e8450422"),t=Object(k.a)(n,2),a=t[0],r=t[1],s=Object(F.a)({abi:M,address:a,method:"name",args:[]}),o=Object(F.b)([{abi:M,address:a,method:"decimals",args:[]},{abi:M,address:a,method:"balanceOf",args:[e]}]),i=Object(k.a)(o,2),b=i[0],j=i[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["\u4ee3\u5e63\u5730\u5740\uff1a",Object(m.jsx)(S,{type:"text",onChange:function(e){return r(e.currentTarget.value)},value:a})]}),Object(m.jsxs)("h1",{children:["\u4ee3\u5e63\u540d\u7a31\uff1a",s]}),j&&Object(m.jsxs)("h1",{children:["\u4ee3\u5e63\u9918\u984d\uff1a",Object(f.b)(j[0],b)]})]})}var K,N,T,z,I,B=t(64),D=t(134),U=t(135),_=new B.a("0xe22da380ee6b445bb8273c81944adeb6e8450422",[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]),J=u.a.a(K||(K=Object(b.a)(["\n    text-decoration: none;\n    color: hsl(323, 65%, 50%);\n    ::after {\n        content: ' ';\n    }\n"]))),L=u.a.button(N||(N=Object(b.a)(["\n    display: block;\n    margin: 0 auto;\n    border: none;\n    background-color: hsl(323, 95%, 80%);\n    border-radius: 12px;\n    font-size: 1.2rem;\n    padding: .5rem 1rem;\n    color: white;\n    font-weight: 500;\n    :hover,\n    :focus {\n        outline: 1px solid hsl(323, 95%, 40%);\n    }\n"])));function P(){var e=Object(D.a)(_,"transfer"),n=e.send,t=e.state;function a(e){return e.substr(0,6)+"..."+e.substr(-4)}return Object(m.jsxs)("div",{children:["None"===t.status&&Object(m.jsx)(m.Fragment,{}),"Exception"===t.status&&Object(m.jsx)("h1",{children:"\u4ea4\u6613\u5931\u6557\uff0c\u53c3\u6578\u4e0d\u6b63\u78ba\u6216\u53d6\u6d88\u4ea4\u6613"}),"Mining"===t.status&&Object(m.jsxs)("h1",{children:["\u4ea4\u6613\u9032\u884c\u4e2d",Object(m.jsx)("br",{}),Object(m.jsx)(J,{href:Object(U.a)(t.transaction.hash,j.b.Kovan),children:a(t.transaction.hash)})]}),"Success"===t.status&&Object(m.jsxs)("h1",{children:["\u4ea4\u6613\u6210\u529f",Object(m.jsx)("br",{}),Object(m.jsx)(J,{href:Object(U.a)(t.transaction.hash,j.b.Kovan),children:a(t.transaction.hash)}),"\u4f4d\u65bc ",t.receipt.blockNumber]}),"Fail"===t.status&&Object(m.jsxs)("h1",{children:["\u4ea4\u6613\u5931\u6557",Object(m.jsx)("br",{}),Object(m.jsx)(J,{href:Object(U.a)(t.transaction.hash,j.b.Kovan),children:a(t.transaction.hash)}),"\u4f4d\u65bc ",t.receipt.blockNumber]}),Object(m.jsx)(L,{onClick:function(){return n("0x000000000000000000000000000000000000dead","1000000")},children:"\u71d2\u6bc0 1 USDC"})]})}var W=u.a.div(T||(T=Object(b.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n"]))),A={readOnlyChainId:j.b.Kovan,readOnlyUrls:Object(i.a)({},j.b.Kovan,"https://kovan.infura.io/v3/1b4fd85ec53748feae973ece5bc436bd")},V="ACTIVE",X=u.a.div(z||(z=Object(b.a)(["\n  position: fixed;\n  top: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: hsl(323, 65%, 90%);\n  display: flex;\n  padding: .3rem .3rem;\n  border-radius: 12px;\n"]))),Y=Object(u.a)(l.b).attrs({activeClassName:V})(I||(I=Object(b.a)(["\n  font-size: 1.2rem;\n  font-weight: 500;\n  text-decoration: none;\n  color: black;\n  padding: .3rem .6rem;\n\n  &."," {\n    border-radius: 12px;\n    background-color: hsl(323, 95%, 80%);\n    color: white;\n  }\n"])),V);var q=function(){return Object(m.jsx)(d.a,{config:A,children:Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(X,{children:[Object(m.jsx)(Y,{to:"/connect",children:"\u9023\u63a5"}),Object(m.jsx)(Y,{to:"/balance",children:"\u9918\u984d"}),Object(m.jsx)(Y,{to:"/contract",children:"\u5408\u7d04"}),Object(m.jsx)(Y,{to:"/transaction",children:"\u4ea4\u6613"})]}),Object(m.jsx)(h.d,{children:Object(m.jsxs)(W,{children:[Object(m.jsx)(h.b,{exact:!0,path:"/connect",component:y}),Object(m.jsx)(h.b,{exact:!0,path:"/balance",component:v}),Object(m.jsx)(h.b,{exact:!0,path:"/contract",component:E}),Object(m.jsx)(h.b,{exact:!0,path:"/transaction",component:P}),Object(m.jsx)(h.a,{to:"/connect"})]})})]})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,138)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),G()}},[[125,1,2]]]);
//# sourceMappingURL=main.62be0ec5.chunk.js.map