(this["webpackJsonpether-lottery"]=this["webpackJsonpether-lottery"]||[]).push([[0],{172:function(e,t,n){e.exports=n(424)},177:function(e,t,n){},178:function(e,t,n){},180:function(e,t,n){},192:function(e,t){},216:function(e,t){},218:function(e,t){},233:function(e,t){},307:function(e,t){},309:function(e,t){},424:function(e,t,n){"use strict";n.r(t);var a,r=n(10),i=n.n(r),o=n(170),u=n.n(o),s=(n(177),n(178),n(17)),c=n.n(s),l=n(63),p=n(52),d=(n(180),n(171)),m=n.n(d);!window.ethereum.isMetaMask||"undefined"===typeof window.ethereum&&"undefined"===typeof window.web3||(a=new m.a(window.ethereum)||window.web3.currentProvider);var y=a,f=new y.eth.Contract([{inputs:[],name:"enter",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"pickWinner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPlayers",outputs:[{internalType:"address payable[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRandomNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lottery",type:"uint256"}],name:"getWinnerByLottery",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lotteryHistory",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lotteryId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"players",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"}],"0x52163939DF97C31D65A1d2E8052fc5cF49Dd1374");function b(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),u=Object(p.a)(o,2),s=u[0],d=u[1],m=Object(r.useState)(0),b=Object(p.a)(m,2),w=b[0],h=b[1],v=Object(r.useState)("hidden"),g=Object(p.a)(v,2),x=(g[0],g[1]),E=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.methods.getPlayers().call();case 2:return t=e.sent,e.next=5,window.ethereum.enable();case 5:n=e.sent,h(t.length),n[0].toString().toLowerCase()=="0x87ad11C93Cd39Dd6BdA97e093de85Fee8506e083".toString().toLowerCase()?x("block"):x("hidden"),5==t.length&&j();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){E()}),[]);var k=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,window.ethereum.enable();case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return a("Processing request please wait..."),console.log(y.utils.toWei(s,"ether")),e.next=14,f.methods.enter().send({from:n[0],value:y.utils.toWei(s,"ether")});case 14:a("Successfully registered among players.");case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return a("Selecting winner among all players, please wait ... maximum one minute."),e.next=12,f.methods.pickWinner().send({from:t[0]});case 12:a("The winner is found.");case 13:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{id:"container",className:"h-screen w-full items-center justify-center md:bg-cover bg-center bg-fixed bg-no-repeat"},i.a.createElement("div",{className:"model h-full w-full"},i.a.createElement("div",{className:"h-full w-full flex flex-col items-center justify-center"},i.a.createElement("div",{className:"text-white font-bold text-4xl"},"Wanna be in the big part waiting for the prize?"),i.a.createElement("form",{onSubmit:function(e){return k(e)}},i.a.createElement("div",null,i.a.createElement("input",{className:"mt-7 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",placeholder:"Enter amount",value:s,onChange:function(e){return d(e.target.value)}})),i.a.createElement("button",{className:"bg-black w-full m-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"},"Enter")),i.a.createElement("h1",{className:"text-white font-bold"}," ",n),i.a.createElement("p",{className:"text-white font-bold"},"Now we have ",w," players in this lottery circle."),i.a.createElement("p",{className:"text-white font-bold p-4"},"When the number of players reach 5 we choose the winner."))))}function w(){return i.a.createElement("div",null,i.a.createElement(b,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.40c04582.chunk.js.map