(this["webpackJsonpcandymachine-v2-boiler-mint-site-noflp"]=this["webpackJsonpcandymachine-v2-boiler-mint-site-noflp"]||[]).push([[0],{110:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v}));var r=n(12),a=n(4),i=n(1),c=n.n(i),s=n(24),o=n(38),u=n(5),l=n(187),d=n(42),b=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",i=l.length>4&&void 0!==l[4]&&l[4],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,O(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,o,u,l,d,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.c(r,t,{preflightCommitment:"recent"}),e.next=3,s.b.fetchIdl(b,a);case 3:return i=e.sent,o=new s.b(i,b,a),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),p=l-d,e.abrupt("return",{id:n,program:o,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,isSoldOut:0===p,isActive:u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,b,f,g,v,O,y,w,k,S,T,P,M,A,E,C,R;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.e.Keypair.generate(),e.next=3,Object(d.c)(a.publicKey,n);case 3:if(i=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(d.c)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return b=e.t0,f=t.id,g=[],v=[a],O=[],e.t1=s.e.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=o.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 22:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,a.publicKey,0,n,n),e.t10=m(i,n,n,a.publicKey),e.t11=o.c.createMintToInstruction(o.b,a.publicKey,i,n,[],1),y=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=g,e.next=34,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return g.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=g,e.next=42,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return w=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(d.c)(w,n);case 49:if(k=e.sent[0],g.push({pubkey:k,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=s.e.Keypair.generate(),g.push({pubkey:w,isWritable:!0,isSigner:!1}),g.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),v.push(S),e.next=58,t.program.provider.connection.getAccountInfo(k);case 58:e.sent&&(y.push(o.c.createApproveInstruction(o.b,k,S.publicKey,n,[],1)),O.push(o.c.createRevokeInstruction(o.b,k,n,[])));case 60:return t.state.tokenMint&&(T=s.e.Keypair.generate(),v.push(T),g.push({pubkey:b,isWritable:!0,isSigner:!1}),g.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),y.push(o.c.createApproveInstruction(o.b,b,T.publicKey,n,[],t.state.price.toNumber())),O.push(o.c.createRevokeInstruction(o.b,b,n,[]))),e.next=63,j(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return M=e.sent,e.next=69,x(f);case 69:return A=e.sent,E=Object(r.a)(A,2),C=E[0],R=E[1],e.t18=y,e.next=76,t.program.instruction.mintNft(R,{accounts:{candyMachine:f,candyMachineCreator:C,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:M,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:s.e.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:g.length>0?g:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[y,O],[v,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(16).Buffer)},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(19),i=n(4),c=n(1),s=n.n(c),o=n(5),u=n(101);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,d,b,f,m,g,h,j,x,v,O,y,w,k,S=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},m=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.f;case 7:if(g=[],m){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:m=e.sent;case 12:h=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=m.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),g.push(s)},j=0;case 14:if(!(j<i.length)){e.next=21;break}if("continue"!==h(j)){e.next=18;break}return e.abrupt("continue",18);case 18:j++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(g);case 23:x=e.sent,v=[],O={breakEarly:!1,i:0},console.log("Signed txns length",x.length,"vs handed in length",i.length),y=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p({connection:t,signedTransaction:x[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){f(x[n],n),l===r.StopOnFailure&&(O.breakEarly=!0,O.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!O.breakEarly){e.next=19;break}return console.log("Died on ",O.i),e.t1=O.i,e.next=16,Promise.all(v);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:v.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),w=0;case 29:if(!(w<x.length)){e.next=37;break}return e.delegateYield(y(w),"t0",31);case 31:if("object"!==typeof(k=e.t0)){e.next=34;break}return e.abrupt("return",k.v);case 34:w++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(v);case 40:return e.t1=x.length,e.next=43,Promise.all(v);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},b=15e3;function p(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,u,l,p,f,g,j,v,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?b:a,o=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,x(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(p,c,r,"recent",!0);case 13:if(g=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!g.err){e.next=19;break}throw console.error(g.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===g||void 0===g?void 0:g.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return j=null,e.prev=28,e.next=31,m(r,n,"single");case 31:j=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!j||!j.err){e.next=47;break}if(!j.logs){e.next=46;break}v=j.logs.length-1;case 39:if(!(v>=0)){e.next=46;break}if(!(O=j.logs[v]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+O.slice("Program log: ".length));case 43:--v,e.next=39;break;case 46:throw new Error(JSON.stringify(j.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function m(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return j.apply(this,arguments)}function j(){return j=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,u,l,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",c=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(d,b){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(p){o=!0,console.error("WS error in setup",t,p)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function x(e){return new Promise((function(t){return setTimeout(t,e)}))}},208:function(e,t,n){},209:function(e,t,n){},211:function(e,t){},214:function(e,t){},226:function(e,t){},237:function(e,t){},238:function(e,t){},259:function(e,t){},262:function(e,t){},268:function(e,t){},279:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(30),c=n.n(i),s=(n(208),n(209),n(21)),o=n(4),u=n(12),l=n(61),d=n(1),b=n.n(d),p=n(62),f=n(320),m=n(327),g=n(314),h=n(319),j=n(324),x=n(5),v=n(178),O=n(135),y=n(110),w=n(312),k=n(318),S=n(90),T=n(8),P=n(7),M=n(14),A=n(15),E=n(24),C=n(11);function R(e){return new E.a(new Date(e).getTime()/1e3)}var N,K,W=!1,D="Minting Paused",L="We have dectected and issue while minting. Standby for an update",_={title:"Welcome!",desc:"Connect your wallet and load in! Mint starts soon!",countdownEnable:!0,countdownTo:R("17 Feb 2022 16:00:00 UTC"),showPrice:!1,enableCustomHTML:!1},I=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"custom-mint-container",children:Object(C.jsx)("p",{children:"Test 1"})})}}]),n}(a.a.Component),B={enabled:!1,startDate:R("17 Feb 2022 16:00:00 UTC"),endDate:R("17 Feb 2022 19:00:00 UTC"),countdown:!1,title:"Whitelist",desc:void 0,enableCustomHTML:!1},F=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"custom-mint-container",children:Object(C.jsx)("p",{children:"Test 2"})})}}]),n}(a.a.Component),U={startDate:R("22 Feb 2022 16:00:00 UTC"),endDate:R("22 Feb 2022 17:00:00 UTC"),countdown:!1,title:"Public Sale",desc:"Sale is now live. Mint your NFT below",enableCustomHTML:!1},H=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"custom-mint-container",children:Object(C.jsx)("p",{children:"Test 3"})})}}]),n}(a.a.Component),Y=n(42),z=Object(p.a)(w.a)(N||(N=Object(l.a)(["\n  \n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),G=function(e){var t,n,a,i,c=e.onMint,s=e.candyMachine,l=e.isMinting,d=Object(S.c)(),p=d.requestGatewayToken,f=d.gatewayStatus,m=Object(r.useState)(!1),g=Object(u.a)(m,2),h=g[0],j=g[1],x=null===(t=Object(Y.f)(B.startDate))||void 0===t?void 0:t.getTime(),v=null===(n=Object(Y.f)(B.endDate))||void 0===n?void 0:n.getTime(),O=null===(a=Object(Y.f)(U.startDate))||void 0===a?void 0:a.getTime(),y=null===(i=Object(Y.f)(U.endDate))||void 0===i?void 0:i.getTime();function w(){return!!(B.enabled&&x&&v&&Date.now()>x&&Date.now()<v)}var T=w();function P(){return O&&y?Date.now()>O&&Date.now()<y:O?Date.now()>O:void 0}console.log("is Whitelist Sale Active? "+w());var M=P();return console.log("is public sale live? "+P()),console.log(null===s||void 0===s?void 0:s.state.isSoldOut,l,T||M,!(null!==s&&void 0!==s&&s.state.isActive)),Object(r.useEffect)((function(){f===S.b.ACTIVE&&h&&(console.log("Minting"),c(),j(!1))}),[f,h,j,c]),Object(C.jsx)(z,{className:"minting-button",disabled:(null===s||void 0===s?void 0:s.state.isSoldOut)||l||W||!(T||M),onClick:Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),null===s||void 0===s||!s.state.isActive||null===s||void 0===s||!s.state.gatekeeper){e.next=15;break}if(console.log("gatekeeper active"),f!==S.b.ACTIVE){e.next=8;break}console.log(f+S.b.ACTIVE),j(!0),e.next=13;break;case 8:return console.log("requeting token"),e.next=11,p();case 11:t=e.sent,console.log(t);case 13:e.next=18;break;case 15:return e.next=17,c();case 17:j(!1);case 18:case"end":return e.stop()}}),e)}))),variant:"contained",children:Object(C.jsx)("div",{className:"mint-button-text",children:null!==s&&void 0!==s&&s.state.isSoldOut?"SOLD OUT":l?Object(C.jsx)(k.a,{}):W?"Mint Paused":"MINT"})})},V=n(315),q=n(153),J=n(310),Z=n(332),X=Object(J.a)((function(e){return Object(Z.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.5),marginRight:0,width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:e.spacing(1),marginRight:0,padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),Q=function(e){var t=e.date,n=e.status,a=e.style,i=e.start,c=e.end,s=e.onComplete,o=X(),l=Object(r.useState)(!!(i&&c&&t)&&i.getTime()-Date.now()<0),d=Object(u.a)(l,2),b=d[0],p=(d[1],function(e){var t=e.days,r=e.hours,i=e.minutes,c=e.seconds;return r+=24*t,e.completed?n?Object(C.jsx)("span",{className:o.done,children:n}):null:Object(C.jsxs)("div",{className:o.root,style:a,children:[b&&Object(C.jsx)(g.a,{elevation:0,children:Object(C.jsx)("span",{className:o.item,children:"+"})}),Object(C.jsxs)(g.a,{elevation:0,children:[Object(C.jsx)("span",{className:o.item,children:r<10?"0".concat(r):r}),Object(C.jsx)("span",{children:"hrs"})]}),Object(C.jsxs)(g.a,{elevation:0,children:[Object(C.jsx)("span",{className:o.item,children:i<10?"0".concat(i):i}),Object(C.jsx)("span",{children:"mins"})]}),Object(C.jsxs)(g.a,{elevation:0,children:[Object(C.jsx)("span",{className:o.item,children:c<10?"0".concat(c):c}),Object(C.jsx)("span",{children:"secs"})]})]})});return t&&i&&c&&b&&q.a,t?Object(C.jsx)(q.a,{date:t,onComplete:s,renderer:p}):null};!function(e){e[e.AnticipationPhase=0]="AnticipationPhase",e[e.SetPrice=1]="SetPrice",e[e.GracePeriod=2]="GracePeriod",e[e.Lottery=3]="Lottery",e[e.RaffleFinished=4]="RaffleFinished",e[e.WaitForCM=5]="WaitForCM",e[e.Phase4=6]="Phase4",e[e.MintOff=7]="MintOff",e[e.WhiteListMint=8]="WhiteListMint",e[e.PublicMint=9]="PublicMint",e[e.Welcome=10]="Welcome",e[e.Panic=11]="Panic"}(K||(K={}));var $,ee,te=function(e){var t=e.phaseName,n=e.desc,r=e.date,a=e.status,i=e.countdownEnable;return Object(C.jsxs)(C.Fragment,{children:[!0===i&&Object(C.jsx)(h.a,{container:!0,style:{position:"absolute",top:"-30px",left:"0px"},children:Object(C.jsx)(f.a,{style:{justifyContent:"center"},children:Object(C.jsx)(Q,{date:Object(Y.f)(r),style:{justifyContent:"center"},status:a||"COMPLETE"})})}),Object(C.jsx)(h.a,{container:!0,className:"mintHeader",alignItems:"center",children:Object(C.jsx)(h.a,{children:Object(C.jsx)(V.a,{variant:"h5",style:{fontWeight:600,textAlign:"center"},className:"pb-2",children:t})})}),n&&Object(C.jsx)(V.a,{className:"pb-2",variant:"body1",color:"textSecondary",children:n})]})},ne=function(e){var t=e.phase,n=e.candyMachine,r=Object(v.b)();return console.log("D",n),console.log("Wallet",r),Object(C.jsxs)(C.Fragment,{children:[t===K.Panic&&Object(C.jsx)(te,{phaseName:D,desc:L}),t===K.Welcome&&Object(C.jsx)(te,{phaseName:_.title,desc:_.desc,date:_.countdownTo,countdownEnable:_.countdownEnable}),t===K.WhiteListMint&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(te,{phaseName:B.title,desc:B.desc,date:B.endDate,countdownEnable:B.countdown,status:"WHITELIST LIVE"})}),t===K.PublicMint&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(te,{phaseName:U.title,desc:U.desc,date:U.endDate,countdownEnable:U.countdown,status:"LIVE"})})]})},re=Object(p.a)(O.a)($||($=Object(l.a)(["\n  position: absolute;\n  left: 0px;\n  bottom: -15px;\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  transform: translate(0%, -50%);\n"]))),ae=p.a.div(ee||(ee=Object(l.a)(["\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  bottom: 15px;\n"]))),ie=function(e){var t,n,a=e.rpcHost,i=Object(r.useState)(0),c=Object(u.a)(i,2),l=c[0],d=c[1],p=Object(r.useState)(!1),O=Object(u.a)(p,2),w=O[0],k=O[1],T=Object(r.useState)(null),P=Object(u.a)(T,2),M=P[0],A=P[1],E=Object(r.useState)(null),R=Object(u.a)(E,2),N=(R[0],R[1]),D=Object(r.useState)(),L=Object(u.a)(D,2),z=L[0],V=L[1],q=Object(r.useState)(),J=Object(u.a)(q,2),Z=J[0],X=J[1],Q=Object(r.useState)(null),$=Object(u.a)(Q,2),ee=$[0],te=$[1],ie=Object(v.b)(),ce=Object(r.useMemo)((function(){if(ie&&ie.publicKey&&ie.signAllTransactions&&ie.signTransaction)return{publicKey:ie.publicKey,signAllTransactions:ie.signAllTransactions,signTransaction:ie.signTransaction}}),[ie]),se=Object(r.useState)({open:!1,message:"",severity:void 0}),oe=Object(u.a)(se,2),ue=oe[0],le=oe[1],de=function(){var t=Object(o.a)(b.a.mark((function t(){var n,r,a,i,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,k(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(ie.connected&&null!==Z&&void 0!==Z&&Z.program&&ie.publicKey)){t.next=13;break}return t.next=6,Object(y.d)(Z,ie.publicKey);case 6:if(a=t.sent[0],i={err:!0},!a){t.next=12;break}return t.next=11,Object(y.b)(a,e.txTimeout,e.connection,"singleGossip",!0);case 11:i=t.sent;case 12:null!==(r=i)&&void 0!==r&&r.err?le({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(le({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),A(M+1),l&&l>0&&d(l-1));case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",window.location.reload()):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")):c="Transaction Timeout! Please try again.",le({open:!0,message:c,severity:"error"});case 20:return t.prev=20,k(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(o.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ce){t.next=3;break}return console.log("anchor wallet not found"),t.abrupt("return");case 3:if(console.log("wallet connected"),ce.publicKey&&V(ce.publicKey),!e.candyMachineId){t.next=20;break}return t.prev=6,t.next=9,Object(y.c)(ce,e.candyMachineId,e.connection);case 9:return n=t.sent,t.next=12,X(n);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),console.log("Problem getting candy machine state"),console.log(t.t0);case 18:t.next=21;break;case 20:console.log("No candy machine detected in configuration.");case 21:case"end":return t.stop()}}),t,null,[[6,14]])})))()}),[ce,e.candyMachineId,e.connection]),Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(b.a.mark((function t(){var n,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!z||null===Z||void 0===Z||null===(n=Z.state.whitelistMintSettings)||void 0===n||!n.mint){t.next=11;break}return t.prev=1,t.next=4,e.connection.getParsedTokenAccountsByOwner(z,{mint:null===Z||void 0===Z||null===(r=Z.state.whitelistMintSettings)||void 0===r?void 0:r.mint});case 4:a=t.sent,d(a.value[0].account.data.parsed.info.tokenAmount.amount),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d(0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),null!==Z&&void 0!==Z&&Z.state.itemsAvailable&&N(null===Z||void 0===Z?void 0:Z.state.itemsAvailable),null==(null===Z||void 0===Z?void 0:Z.state.itemsRedeemed)?A(0):A(null===Z||void 0===Z?void 0:Z.state.itemsRedeemed),null!==Z&&void 0!==Z&&Z.state.price&&te((null===Z||void 0===Z?void 0:Z.state.price.toNumber())/1e9)}),[Z,z,e.connection]);var be=function(e){var t,n,r,a=(new Date).getTime(),i=null===(t=Object(Y.f)(B.startDate))||void 0===t?void 0:t.getTime(),c=null===(n=Object(Y.f)(B.endDate))||void 0===n?void 0:n.getTime(),s=null===(r=Object(Y.f)(U.startDate))||void 0===r?void 0:r.getTime();return!0===W?K.Panic:s&&a>s?K.PublicMint:B.enabled&&i&&c&&a>i&&a<c?K.WhiteListMint:K.Welcome}();return Object(C.jsxs)(f.a,{children:[Object(C.jsx)(f.a,{maxWidth:"xs",style:{position:"relative"},children:Object(C.jsx)(g.a,{style:{padding:"34px 24px 90px 24px",display:"flex",borderRadius:6},className:"minting-box",children:Object(C.jsxs)(h.a,{container:!0,justifyContent:"space-between",direction:"column",children:[Object(C.jsx)(ne,{phase:be,candyMachine:Z,rpcUrl:a}),Object(C.jsxs)("div",{children:[be===K.Welcome&&_.enableCustomHTML&&Object(C.jsx)(I,{}),be===K.WhiteListMint&&B.enableCustomHTML&&Object(C.jsx)(F,{}),be===K.PublicMint&&U.enableCustomHTML&&Object(C.jsx)(H,{}),(be===K.PublicMint||K.WhiteListMint)&&Object(C.jsxs)(C.Fragment,{children:[be===K.WhiteListMint&&Object(C.jsxs)("div",{className:"card minting-info text-center",children:[l>=0?Object(C.jsx)("h1",{children:l}):Object(C.jsx)("div",{className:"loading"}),Object(C.jsx)("div",{children:Object(C.jsx)("p",{children:"Mints to Claim"})})]}),Object(C.jsx)(h.a,{container:!0,justifyContent:"space-between",color:"textSecondary",children:Object(C.jsx)("div",{className:"text-end",children:be===K.Welcome&&_.showPrice||be===K.WhiteListMint||be===K.PublicMint?Object(C.jsx)(C.Fragment,{children:ee?Object(C.jsxs)("p",{children:[ee," Sol"]}):Object(C.jsx)("p",{className:"loading"})}):""})}),ie.connected?Object(C.jsx)(ae,{children:null!==Z&&void 0!==Z&&Z.state.isActive&&null!==Z&&void 0!==Z&&Z.state.gatekeeper&&ie.publicKey&&ie.signTransaction?Object(C.jsx)(S.a,{wallet:{publicKey:ie.publicKey||new x.PublicKey(y.a),signTransaction:ie.signTransaction},gatekeeperNetwork:null===Z||void 0===Z||null===(t=Z.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:a,options:{autoShowModal:!1},children:Object(C.jsx)(G,{candyMachine:Z,isMinting:w,onMint:de})}):Object(C.jsx)(G,{candyMachine:Z,isMinting:w,onMint:de})}):Object(C.jsxs)(re,{children:["Connect",""]})]})]})]})})}),Object(C.jsx)(m.a,{open:ue.open,autoHideDuration:6e3,onClose:function(){return le(Object(s.a)(Object(s.a)({},ue),{},{open:!1}))},children:Object(C.jsx)(j.a,{onClose:function(){return le(Object(s.a)(Object(s.a)({},ue),{},{open:!1}))},severity:ue.severity,children:ue.message})})]})},ce=n(328),se=n(329),oe=n(325),ue=n(330),le=n(331),de=n(326),be=n(192),pe=n(323),fe=Object(be.a)({palette:{type:"dark"}}),me=new E.e.PublicKey("DYhFfy5dFW4ytvRYzPbh8GqiQ3Adg4gXLGEoZ2pxRRr4"),ge="https://trashpandas.rpcpool.com",he=new E.e.Connection(ge),je=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"DYhFfy5dFW4ytvRYzPbh8GqiQ3Adg4gXLGEoZ2pxRRr4",REACT_APP_SOLANA_NETWORK:"mainnet-beta",REACT_APP_SOLANA_RPC_HOST:"https://trashpandas.rpcpool.com"}).REACT_APP_CANDY_START_DATE,10),xe=function(){var e=Object(r.useMemo)((function(){return Object(x.clusterApiUrl)("mainnet-beta")}),[]),t=Object(r.useMemo)((function(){return[Object(ce.a)(),Object(se.a)(),Object(oe.a)(),Object(ue.a)()]}),[]);return Object(C.jsxs)("div",{children:[Object(C.jsx)("nav",{}),Object(C.jsx)("div",{className:"content-wrapper",children:Object(C.jsxs)("header",{className:"card",id:"link1",children:[Object(C.jsxs)("div",{style:{padding:"0 14px 0 14px 0"},children:[Object(C.jsx)("img",{className:"nav-logos",src:"/img/bull.gif",alt:""}),Object(C.jsx)("p",{className:"text-secondary-color",children:"Prime Bulls is a collection of 333 Bulls created with love and diligence and having own unique design. Bulls were created with an idea to show how strong a community can be invading a Solana world with an amazing DAO. Bulls have their own crypto currency, private discord, and an amazing meta verse in the very close future."})]}),Object(C.jsx)("div",{children:Object(C.jsx)(pe.a,{theme:fe,children:Object(C.jsx)(le.a,{endpoint:e,children:Object(C.jsx)(de.a,{wallets:t,autoConnect:!0,children:Object(C.jsx)(O.b,{children:Object(C.jsx)(ie,{candyMachineId:me,connection:he,startDate:je,txTimeout:3e4,rpcHost:ge})})})})})})]})})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(xe,{})}),document.getElementById("root")),ve()},42:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(4),a=n(1),i=n.n(a),c=n(24),s=n(38),o=(n(5),new c.e.PublicKey("faircnAB9k59Y4TXmLabBULeuTLgV7TkGMGNkjnA15j"),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(16).Buffer)}},[[279,1,2]]]);
//# sourceMappingURL=main.cc490cdc.chunk.js.map