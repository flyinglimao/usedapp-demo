(this["webpackJsonpusedapp-demo"]=this["webpackJsonpusedapp-demo"]||[]).push([[0],{104:function(e,t,n){},107:function(e,t){},109:function(e,t){},125:function(e,t,n){"use strict";n.r(t);var c,a=n(2),r=n.n(a),s=n(91),o=n.n(s),i=(n(104),n(12)),b=n(26),j=n(17),d=n(136),l=n(74),u=n(19),h=n(27),O=n(99),p=n(137),x=n(133),f=n(56),m=n(6);function v(){var e=Object(O.a)().account,t=Object(p.a)(e),n=Object(x.a)("0xe22da380ee6b445bb8273c81944adeb6e8450422",e);return e?Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Ethers: ",t?Object(f.a)(t):0]}),Object(m.jsxs)("h1",{children:["USDC: ",n?Object(f.b)(n,6):0]})]}):Object(m.jsx)("h1",{children:"Not Connect Yet"})}var g=h.a.button(c||(c=Object(b.a)(["\n    border: none;\n    background-color: hsl(323, 95%, 80%);\n    border-radius: 12px;\n    font-size: 1.2rem;\n    padding: .5rem 1rem;\n    color: white;\n    font-weight: 500;\n    :hover,\n    :focus {\n        outline: 1px solid hsl(323, 95%, 40%);\n    }\n"])));function y(){var e=Object(O.a)(),t=e.activateBrowserWallet,n=e.account,c=e.error;return Object(a.useEffect)((function(){c&&alert(c)}),[c]),n?Object(m.jsx)("h1",{children:n}):Object(m.jsx)(g,{onClick:function(){return t()},children:"\u9023\u63a5\u9322\u5305"})}var w,k=n(11),C=n(79),F=n(65),M=new C.b([{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"}]),S=h.a.input(w||(w=Object(b.a)(["\n    border: none;\n    font-size: inherit;\n"])));function E(){var e=Object(O.a)().account,t=Object(a.useState)("0xe22da380ee6b445bb8273c81944adeb6e8450422"),n=Object(k.a)(t,2),c=n[0],r=n[1],s=Object(F.a)({abi:M,address:c,method:"balanceOf",args:[e||"0x0000000000000000000000000000000000000000"]}),o=Object(F.b)([{abi:M,address:c,method:"name",args:[]},{abi:M,address:c,method:"decimals",args:[]}]),i=Object(k.a)(o,2),b=i[0],j=i[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["\u4ee3\u5e63\u5730\u5740\uff1a",Object(m.jsx)(S,{type:"text",onChange:function(e){return r(e.currentTarget.value)},value:c})]}),Object(m.jsxs)("h1",{children:["\u4ee3\u5e63\u540d\u7a31\uff1a",b]}),s&&Object(m.jsxs)("h1",{children:["\u4ee3\u5e63\u9918\u984d\uff1a",Object(f.b)(s[0],j)]})]})}var K,N,z,B,I,T=n(64),D=n(134),U=n(135),_=new T.a("0xe22da380ee6b445bb8273c81944adeb6e8450422",[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]),J=h.a.a(K||(K=Object(b.a)(["\n    text-decoration: none;\n    color: hsl(323, 65%, 50%);\n    ::after {\n        content: ' ';\n    }\n"]))),L=h.a.button(N||(N=Object(b.a)(["\n    display: block;\n    margin: 0 auto;\n    border: none;\n    background-color: hsl(323, 95%, 80%);\n    border-radius: 12px;\n    font-size: 1.2rem;\n    padding: .5rem 1rem;\n    color: white;\n    font-weight: 500;\n    :hover,\n    :focus {\n        outline: 1px solid hsl(323, 95%, 40%);\n    }\n"])));function P(){var e=Object(O.a)(),t=e.activateBrowserWallet,n=e.account,c=Object(D.a)(_,"transfer"),a=c.send,r=c.state;function s(e){return e.substr(0,6)+"..."+e.substr(-4)}return Object(m.jsxs)("div",{children:["None"===r.status&&Object(m.jsx)(m.Fragment,{}),"Exception"===r.status&&Object(m.jsx)("h1",{children:"\u4ea4\u6613\u5931\u6557\uff0c\u53c3\u6578\u4e0d\u6b63\u78ba\u6216\u53d6\u6d88\u4ea4\u6613"}),"Mining"===r.status&&Object(m.jsxs)("h1",{children:["\u4ea4\u6613\u9032\u884c\u4e2d",Object(m.jsx)("br",{}),Object(m.jsx)(J,{href:Object(U.a)(r.transaction.hash,j.b.Kovan),children:s(r.transaction.hash)})]}),"Success"===r.status&&Object(m.jsxs)("h1",{children:["\u4ea4\u6613\u6210\u529f",Object(m.jsx)("br",{}),Object(m.jsx)(J,{href:Object(U.a)(r.transaction.hash,j.b.Kovan),children:s(r.transaction.hash)}),"\u4f4d\u65bc ",r.receipt.blockNumber]}),"Fail"===r.status&&Object(m.jsxs)("h1",{children:["\u4ea4\u6613\u5931\u6557",Object(m.jsx)("br",{}),Object(m.jsx)(J,{href:Object(U.a)(r.transaction.hash,j.b.Kovan),children:s(r.transaction.hash)}),"\u4f4d\u65bc ",r.receipt.blockNumber]}),n?Object(m.jsx)(L,{onClick:function(){return a("0x000000000000000000000000000000000000dead","1000000")},children:"\u71d2\u6bc0 1 USDC"}):Object(m.jsx)(L,{onClick:function(){return t()},children:"\u9023\u63a5\u9322\u5305"})]})}var W=h.a.div(z||(z=Object(b.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n"]))),A={readOnlyChainId:j.b.Kovan,readOnlyUrls:Object(i.a)({},j.b.Kovan,"https://kovan.infura.io/v3/1b4fd85ec53748feae973ece5bc436bd")},V="ACTIVE",X=h.a.div(B||(B=Object(b.a)(["\n  position: fixed;\n  top: 2rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: hsl(323, 65%, 90%);\n  display: flex;\n  padding: .3rem .3rem;\n  border-radius: 12px;\n"]))),Y=Object(h.a)(l.b).attrs({activeClassName:V})(I||(I=Object(b.a)(["\n  font-size: 1.2rem;\n  font-weight: 500;\n  text-decoration: none;\n  color: black;\n  padding: .3rem .6rem;\n\n  &."," {\n    border-radius: 12px;\n    background-color: hsl(323, 95%, 80%);\n    color: white;\n  }\n"])),V);var q=function(){return Object(m.jsx)(d.a,{config:A,children:Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(X,{children:[Object(m.jsx)(Y,{to:"/connect",children:"\u9023\u63a5"}),Object(m.jsx)(Y,{to:"/balance",children:"\u9918\u984d"}),Object(m.jsx)(Y,{to:"/contract",children:"\u5408\u7d04"}),Object(m.jsx)(Y,{to:"/transaction",children:"\u4ea4\u6613"})]}),Object(m.jsx)(u.d,{children:Object(m.jsxs)(W,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/connect",component:y}),Object(m.jsx)(u.b,{exact:!0,path:"/balance",component:v}),Object(m.jsx)(u.b,{exact:!0,path:"/contract",component:E}),Object(m.jsx)(u.b,{exact:!0,path:"/transaction",component:P}),Object(m.jsx)(u.a,{to:"/connect"})]})})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),G()}},[[125,1,2]]]);
//# sourceMappingURL=main.cb4a6a0c.chunk.js.map