(this["webpackJsonpether-lottery"]=this["webpackJsonpether-lottery"]||[]).push([[0],{172:function(e,t,n){e.exports=n(424)},177:function(e,t,n){},178:function(e,t,n){},190:function(e,t){},214:function(e,t){},216:function(e,t){},232:function(e,t){},306:function(e,t){},308:function(e,t){},423:function(e,t,n){},424:function(e,t,n){"use strict";n.r(t);var a,i=n(10),r=n.n(i),u=n(171),s=n.n(u),o=(n(177),n(178),n(63)),l=n.n(o);!window.ethereum.isMetaMask||"undefined"===typeof window.ethereum&&"undefined"===typeof window.web3||(a=new l.a(window.ethereum)||window.web3.currentProvider);new a.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"enter",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPlayers",outputs:[{internalType:"address payable[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRandomNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lottery",type:"uint256"}],name:"getWinnerByLottery",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lotteryHistory",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lotteryId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pickWinner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"players",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"}],"0xe65c7c531dbe2c4a23c3ea9bb643e2e987c26b18");var c,p=n(17),y=n.n(p),d=n(64),m=n(52);n(423);!window.ethereum.isMetaMask||"undefined"===typeof window.ethereum&&"undefined"===typeof window.web3||(c=new l.a(window.ethereum)||window.web3.currentProvider);var b=c,f=new b.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"enter",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPlayers",outputs:[{internalType:"address payable[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getRandomNumber",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lottery",type:"uint256"}],name:"getWinnerByLottery",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lotteryHistory",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lotteryId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pickWinner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"players",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"}],"0xe65c7c531dbe2c4a23c3ea9bb643e2e987c26b18");function w(){var e=Object(i.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],u=Object(i.useState)(""),s=Object(m.a)(u,2),o=s[0],l=s[1],c=Object(i.useState)(""),p=Object(m.a)(c,2),w=p[0],h=p[1],v=Object(i.useState)("hidden"),g=Object(m.a)(v,2),x=(g[0],g[1]),M=function(){var e=Object(d.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.methods.getPlayers().call();case 2:return t=e.sent,e.next=5,window.ethereum.enable();case 5:n=e.sent,h(t.length),n[0].toString().toLowerCase()=="0x87ad11C93Cd39Dd6BdA97e093de85Fee8506e083".toString().toLowerCase()?x("block"):x("hidden"),5==t.length&&E();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){M()}),[]);var T=function(){var e=Object(d.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,window.ethereum.enable();case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return a("Processing request please wait..."),console.log(b.utils.toWei(o,"ether")),e.next=14,f.methods.enter().send({from:n[0],value:b.utils.toWei(o,"ether")});case 14:a("Successfully registered among players.");case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return a("Selecting winner among all players, please wait ... maximum one minute."),e.next=12,f.methods.pickWinner().send({from:t[0]});case 12:a("The winner is found.");case 13:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"container",className:"h-screen w-full items-center justify-center md:bg-cover bg-center bg-fixed bg-no-repeat"},r.a.createElement("div",{className:"model h-full w-full"},r.a.createElement("div",{className:"h-full w-full flex flex-col items-center justify-center"},r.a.createElement("div",{className:"text-white font-bold text-4xl"},"Wanna be in the big part waiting for the prize?"),r.a.createElement("form",{onSubmit:function(e){return T(e)}},r.a.createElement("div",null,r.a.createElement("input",{className:"mt-7 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",placeholder:"Enter amount",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement("button",{className:"bg-black w-full m-9 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"},"Enter")),r.a.createElement("h1",{className:"text-white font-bold"}," ",n),r.a.createElement("p",{className:"text-white font-bold"},"Now we have ",w," players in this lottery circle."),r.a.createElement("p",{className:"text-white font-bold p-4"},"When the number of players reach 5 we choose the winner."))))}function h(){return r.a.createElement("div",null,r.a.createElement(w,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.8144891a.chunk.js.map