(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();var oh={exports:{}},ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function jb(){if(fv)return ao;fv=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:l,type:r,key:d,ref:c!==void 0?c:null,props:f}}return ao.Fragment=t,ao.jsx=i,ao.jsxs=i,ao}var dv;function Wb(){return dv||(dv=1,oh.exports=jb()),oh.exports}var p=Wb(),ch={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function qb(){if(hv)return ot;hv=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),T=Symbol.iterator;function w(B){return B===null||typeof B!="object"?null:(B=T&&B[T]||B["@@iterator"],typeof B=="function"?B:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function D(B,ge,we){this.props=B,this.context=ge,this.refs=y,this.updater=we||N}D.prototype.isReactComponent={},D.prototype.setState=function(B,ge){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ge,"setState")},D.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function F(){}F.prototype=D.prototype;function C(B,ge,we){this.props=B,this.context=ge,this.refs=y,this.updater=we||N}var z=C.prototype=new F;z.constructor=C,b(z,D.prototype),z.isPureReactComponent=!0;var L=Array.isArray;function U(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function H(B,ge,we){var Z=we.ref;return{$$typeof:l,type:B,key:ge,ref:Z!==void 0?Z:null,props:we}}function k(B,ge){return H(B.type,ge,B.props)}function $(B){return typeof B=="object"&&B!==null&&B.$$typeof===l}function ce(B){var ge={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(we){return ge[we]})}var J=/\/+/g;function ee(B,ge){return typeof B=="object"&&B!==null&&B.key!=null?ce(""+B.key):ge.toString(36)}function W(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(U,U):(B.status="pending",B.then(function(ge){B.status==="pending"&&(B.status="fulfilled",B.value=ge)},function(ge){B.status==="pending"&&(B.status="rejected",B.reason=ge)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function q(B,ge,we,Z,he){var Ae=typeof B;(Ae==="undefined"||Ae==="boolean")&&(B=null);var Te=!1;if(B===null)Te=!0;else switch(Ae){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(B.$$typeof){case l:case t:Te=!0;break;case S:return Te=B._init,q(Te(B._payload),ge,we,Z,he)}}if(Te)return he=he(B),Te=Z===""?"."+ee(B,0):Z,L(he)?(we="",Te!=null&&(we=Te.replace(J,"$&/")+"/"),q(he,ge,we,"",function(At){return At})):he!=null&&($(he)&&(he=k(he,we+(he.key==null||B&&B.key===he.key?"":(""+he.key).replace(J,"$&/")+"/")+Te)),ge.push(he)),1;Te=0;var me=Z===""?".":Z+":";if(L(B))for(var Re=0;Re<B.length;Re++)Z=B[Re],Ae=me+ee(Z,Re),Te+=q(Z,ge,we,Ae,he);else if(Re=w(B),typeof Re=="function")for(B=Re.call(B),Re=0;!(Z=B.next()).done;)Z=Z.value,Ae=me+ee(Z,Re++),Te+=q(Z,ge,we,Ae,he);else if(Ae==="object"){if(typeof B.then=="function")return q(W(B),ge,we,Z,he);throw ge=String(B),Error("Objects are not valid as a React child (found: "+(ge==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ge)+"). If you meant to render a collection of children, use an array instead.")}return Te}function de(B,ge,we){if(B==null)return B;var Z=[],he=0;return q(B,Z,"","",function(Ae){return ge.call(we,Ae,he++)}),Z}function re(B){if(B._status===-1){var ge=B._result,we=ge();we.then(function(Z){(B._status===0||B._status===-1)&&(B._status=1,B._result=Z,we.status===void 0&&(we.status="fulfilled",we.value=Z))},function(Z){(B._status===0||B._status===-1)&&(B._status=2,B._result=Z,we.status===void 0&&(we.status="rejected",we.reason=Z))}),B._status===-1&&(B._status=0,B._result=we)}if(B._status===1)return B._result.default;throw B._result}var pe=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ge=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ge))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function _e(B){var ge=E.T,we={};we.types=ge!==null?ge.types:null,E.T=we;try{var Z=B(),he=E.S;he!==null&&he(we,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(U,pe)}catch(Ae){pe(Ae)}finally{ge!==null&&we.types!==null&&(ge.types=we.types),E.T=ge}}function Ze(B){var ge=E.T;if(ge!==null){var we=ge.types;we===null?ge.types=[B]:we.indexOf(B)===-1&&we.push(B)}else _e(Ze.bind(null,B))}var qe={map:de,forEach:function(B,ge,we){de(B,function(){ge.apply(this,arguments)},we)},count:function(B){var ge=0;return de(B,function(){ge++}),ge},toArray:function(B){return de(B,function(ge){return ge})||[]},only:function(B){if(!$(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ot.Activity=_,ot.Children=qe,ot.Component=D,ot.Fragment=i,ot.Profiler=c,ot.PureComponent=C,ot.StrictMode=r,ot.Suspense=x,ot.ViewTransition=v,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,ot.__COMPILER_RUNTIME={__proto__:null,c:function(B){return E.H.useMemoCache(B)}},ot.addTransitionType=Ze,ot.cache=function(B){return function(){return B.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(B,ge,we){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Z=b({},B.props),he=B.key;if(ge!=null)for(Ae in ge.key!==void 0&&(he=""+ge.key),ge)!O.call(ge,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ge.ref===void 0||(Z[Ae]=ge[Ae]);var Ae=arguments.length-2;if(Ae===1)Z.children=we;else if(1<Ae){for(var Te=Array(Ae),me=0;me<Ae;me++)Te[me]=arguments[me+2];Z.children=Te}return H(B.type,he,Z)},ot.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},ot.createElement=function(B,ge,we){var Z,he={},Ae=null;if(ge!=null)for(Z in ge.key!==void 0&&(Ae=""+ge.key),ge)O.call(ge,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(he[Z]=ge[Z]);var Te=arguments.length-2;if(Te===1)he.children=we;else if(1<Te){for(var me=Array(Te),Re=0;Re<Te;Re++)me[Re]=arguments[Re+2];he.children=me}if(B&&B.defaultProps)for(Z in Te=B.defaultProps,Te)he[Z]===void 0&&(he[Z]=Te[Z]);return H(B,Ae,he)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(B){return{$$typeof:h,render:B}},ot.isValidElement=$,ot.lazy=function(B){return{$$typeof:S,_payload:{_status:-1,_result:B},_init:re}},ot.memo=function(B,ge){return{$$typeof:g,type:B,compare:ge===void 0?null:ge}},ot.startTransition=_e,ot.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},ot.use=function(B){return E.H.use(B)},ot.useActionState=function(B,ge,we){return E.H.useActionState(B,ge,we)},ot.useCallback=function(B,ge){return E.H.useCallback(B,ge)},ot.useContext=function(B){return E.H.useContext(B)},ot.useDebugValue=function(){},ot.useDeferredValue=function(B,ge){return E.H.useDeferredValue(B,ge)},ot.useEffect=function(B,ge){return E.H.useEffect(B,ge)},ot.useEffectEvent=function(B){return E.H.useEffectEvent(B)},ot.useId=function(){return E.H.useId()},ot.useImperativeHandle=function(B,ge,we){return E.H.useImperativeHandle(B,ge,we)},ot.useInsertionEffect=function(B,ge){return E.H.useInsertionEffect(B,ge)},ot.useLayoutEffect=function(B,ge){return E.H.useLayoutEffect(B,ge)},ot.useMemo=function(B,ge){return E.H.useMemo(B,ge)},ot.useOptimistic=function(B,ge){return E.H.useOptimistic(B,ge)},ot.useReducer=function(B,ge,we){return E.H.useReducer(B,ge,we)},ot.useRef=function(B){return E.H.useRef(B)},ot.useState=function(B){return E.H.useState(B)},ot.useSyncExternalStore=function(B,ge,we){return E.H.useSyncExternalStore(B,ge,we)},ot.useTransition=function(){return E.H.useTransition()},ot.version="19.3.0",ot}var pv;function Fp(){return pv||(pv=1,ch.exports=qb()),ch.exports}var Bt=Fp(),uh={exports:{}},so={},fh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function Yb(){return mv||(mv=1,(function(l){function t(W,q){var de=W.length;W.push(q);e:for(;0<de;){var re=de-1>>>1,pe=W[re];if(0<c(pe,q))W[re]=q,W[de]=pe,de=re;else break e}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var q=W[0],de=W.pop();if(de!==q){W[0]=de;e:for(var re=0,pe=W.length,_e=pe>>>1;re<_e;){var Ze=2*(re+1)-1,qe=W[Ze],B=Ze+1,ge=W[B];if(0>c(qe,de))B<pe&&0>c(ge,qe)?(W[re]=ge,W[B]=de,re=B):(W[re]=qe,W[Ze]=de,re=Ze);else if(B<pe&&0>c(ge,de))W[re]=ge,W[B]=de,re=B;else break e}}return q}function c(W,q){var de=W.sortIndex-q.sortIndex;return de!==0?de:W.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();l.unstable_now=function(){return d.now()-h}}var x=[],g=[],S=1,_=null,v=3,T=!1,w=!1,N=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var q=i(g);q!==null;){if(q.callback===null)r(g);else if(q.startTime<=W)r(g),q.sortIndex=q.expirationTime,t(x,q);else break;q=i(g)}}function z(W){if(N=!1,C(W),!w)if(i(x)!==null)w=!0,L||(L=!0,$());else{var q=i(g);q!==null&&ee(z,q.startTime-W)}}var L=!1,U=-1,E=5,O=-1;function H(){return b?!0:!(l.unstable_now()-O<E)}function k(){if(b=!1,L){var W=l.unstable_now();O=W;var q=!0;try{e:{w=!1,N&&(N=!1,D(U),U=-1),T=!0;var de=v;try{t:{for(C(W),_=i(x);_!==null&&!(_.expirationTime>W&&H());){var re=_.callback;if(typeof re=="function"){_.callback=null,v=_.priorityLevel;var pe=re(_.expirationTime<=W);if(W=l.unstable_now(),typeof pe=="function"){_.callback=pe,C(W),q=!0;break t}_===i(x)&&r(x),C(W)}else r(x);_=i(x)}if(_!==null)q=!0;else{var _e=i(g);_e!==null&&ee(z,_e.startTime-W),q=!1}}break e}finally{_=null,v=de,T=!1}q=void 0}}finally{q?$():L=!1}}}var $;if(typeof F=="function")$=function(){F(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,J=ce.port2;ce.port1.onmessage=k,$=function(){J.postMessage(null)}}else $=function(){y(k,0)};function ee(W,q){U=y(function(){W(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(W){W.callback=null},l.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(W){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var de=v;v=q;try{return W()}finally{v=de}},l.unstable_requestPaint=function(){b=!0},l.unstable_runWithPriority=function(W,q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var de=v;v=W;try{return q()}finally{v=de}},l.unstable_scheduleCallback=function(W,q,de){var re=l.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?re+de:re):de=re,W){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=de+pe,W={id:S++,callback:q,priorityLevel:W,startTime:de,expirationTime:pe,sortIndex:-1},de>re?(W.sortIndex=de,t(g,W),i(x)===null&&W===i(g)&&(N?(D(U),U=-1):N=!0,ee(z,de-re))):(W.sortIndex=pe,t(x,W),w||T||(w=!0,L||(L=!0,$()))),W},l.unstable_shouldYield=H,l.unstable_wrapCallback=function(W){var q=v;return function(){var de=v;v=q;try{return W.apply(this,arguments)}finally{v=de}}}})(dh)),dh}var gv;function Zb(){return gv||(gv=1,fh.exports=Yb()),fh.exports}var hh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function Kb(){if(xv)return Ln;xv=1;var l=Fp();function t(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:T==null?null:T===d?d:""+T,children:S,containerInfo:_,implementation:v}}var x=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(S){return{$$typeof:f,_reason:S}},Ln.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(S,_,null,v)},Ln.flushSync=function(S){var _=x.T,v=r.p;try{if(x.T=null,r.p=2,S)return S()}finally{x.T=_,r.p=v,r.d.f()}},Ln.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(S,_))},Ln.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Ln.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,T=g(v,_.crossOrigin),w=typeof _.integrity=="string"?_.integrity:void 0,N=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?r.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:N}):v==="script"&&r.d.X(S,{crossOrigin:T,integrity:w,fetchPriority:N,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ln.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=g(_.as,_.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(S)},Ln.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,T=g(v,_.crossOrigin);r.d.L(S,v,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ln.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=g(_.as,_.crossOrigin);r.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(S)},Ln.requestFormReset=function(S){r.d.r(S)},Ln.unstable_batchedUpdates=function(S,_){return S(_)},Ln.useFormState=function(S,_,v){return x.H.useFormState(S,_,v)},Ln.useFormStatus=function(){return x.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var vv;function Qb(){if(vv)return hh.exports;vv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),hh.exports=Kb(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function Jb(){if(_v)return so;_v=1;var l=Zb(),t=Fp(),i=Qb();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(r(188))}function g(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var o=a.return;if(o===null)break;var u=o.alternate;if(u===null){if(s=o.return,s!==null){a=s;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===a)return x(o),e;if(u===s)return x(o),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=o,s=u;else{for(var m=!1,R=o.child;R;){if(R===a){m=!0,a=o,s=u;break}if(R===s){m=!0,s=o,a=u;break}R=R.sibling}if(!m){for(R=u.child;R;){if(R===a){m=!0,a=u,s=o;break}if(R===s){m=!0,s=u,a=o;break}R=R.sibling}if(!m)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,s,o,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,o,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,s,o,u))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function T(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function w(e){var n=[null,null],a=v(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,s))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,D=null;function F(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function C(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(y=e),!0):!1}function z(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,n,a){for(var s=0,o=e;o;o=a(o))s++;o=0;for(var u=n;u;u=a(u))o++;for(;0<s-o;)e=a(e),s--;for(;0<o-s;)n=a(n),o--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var U=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),Ze=Symbol.for("react.legacy_hidden"),qe=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),ge=Symbol.for("react.recoverable"),we=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case ce:return"Profiler";case $:return"StrictMode";case q:return"Suspense";case de:return"SuspenseList";case _e:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case ee:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case re:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case pe:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Te=Array.isArray,me=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At={pending:!1,data:null,method:null,action:null},st=[],ct=-1;function pt(e){return{current:e}}function Je(e){0>ct||(e.current=st[ct],st[ct]=null,ct--)}function nt(e,n){ct++,st[ct]=e.current,e.current=n}var Ft=pt(null),an=pt(null),Pt=pt(null),jt=pt(null);function j(e,n){switch(nt(Pt,n),nt(an,e),nt(Ft,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Sx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Sx(n),e=yx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Je(Ft),nt(Ft,e)}function sn(){Je(Ft),Je(an),Je(Pt)}function It(e){var n=e.memoizedState;n!==null&&(Fr._currentValue=n.memoizedState,nt(jt,e)),n=Ft.current;var a=yx(n,e.type);n!==a&&(nt(an,e),nt(Ft,a))}function P(e){an.current===e&&(Je(Ft),Je(an)),jt.current===e&&(Je(jt),Fr._currentValue=At)}var M,te;function le(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+te}var xe=!1;function Ce(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ze){var Y=ze}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(ze){Y=ze}ye=!1;try{var se=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ye=!0,new e}finally{ye&&(se!==void 0?Object.defineProperty(e.prototype,"props",se):delete e.prototype.props)}}}else{try{throw Error()}catch(ze){Y=ze}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ze){if(ze&&Y&&typeof ze.stack=="string")return[ze.stack,Y.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),m=u[0],R=u[1];if(m&&R){var I=m.split(`
`),Q=R.split(`
`);for(o=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;o<Q.length&&!Q[o].includes("DetermineComponentFrameRoot");)o++;if(s===I.length||o===Q.length)for(s=I.length-1,o=Q.length-1;1<=s&&0<=o&&I[s]!==Q[o];)o--;for(;1<=s&&0<=o;s--,o--)if(I[s]!==Q[o]){if(s!==1||o!==1)do if(s--,o--,0>o||I[s]!==Q[o]){var ue=`
`+I[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=o);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?le(a):""}function Ue(e,n){switch(e.tag){case 26:case 27:case 5:return le(e.type);case 16:return le("Lazy");case 13:return e.child!==n&&n!==null?le("Suspense Fallback"):le("Suspense");case 19:return le("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return le("Activity");case 30:return le("ViewTransition");default:return""}}function ve(e){try{var n="",a=null;do n+=Ue(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Me=Object.prototype.hasOwnProperty,De=l.unstable_scheduleCallback,et=l.unstable_cancelCallback,Ie=l.unstable_shouldYield,Pe=l.unstable_requestPaint,ke=l.unstable_now,it=l.unstable_getCurrentPriorityLevel,ut=l.unstable_ImmediatePriority,X=l.unstable_UserBlockingPriority,Ne=l.unstable_NormalPriority,be=l.unstable_LowPriority,Le=l.unstable_IdlePriority,Ve=l.log,Ee=l.unstable_setDisableYieldValue,$e=null,Ge=null;function Nt(e){if(typeof Ve=="function"&&Ee(e),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode($e,e)}catch{}}var ft=Math.clz32?Math.clz32:Pu,ti=Math.log,gi=Math.LN2;function Pu(e){return e>>>=0,e===0?32:31-(ti(e)/gi|0)|0}var tr=256,Ss=262144,Ia=4194304;function ha(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ys(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var o=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~u,s!==0?o=ha(s):(m&=R,m!==0?o=ha(m):a||(a=R&~e,a!==0&&(o=ha(a))))):(R=s&~u,R!==0?o=ha(R):m!==0?o=ha(m):a||(a=s&~e,a!==0&&(o=ha(a)))),o===0?0:n!==0&&n!==o&&(n&u)===0&&(u=o&-o,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:o}function Ba(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Vi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-ft(a),o=1<<s;n|=e[s],a&=~o}return n}function ul(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var e=Ia;return Ia<<=1,(Ia&62914560)===0&&(Ia=4194304),e}function nr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function To(e,n,a,s,o,u){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=m&~a;0<a;){var ue=31-ft(a),ye=1<<ue;R[ue]=0,I[ue]=-1;var Y=Q[ue];if(Y!==null)for(Q[ue]=null,ue=0;ue<Y.length;ue++){var se=Y[ue];se!==null&&(se.lane&=-536870913)}a&=~ye}s!==0&&bs(e,s,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~n))}function bs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ft(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function dl(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ft(a),o=1<<s;o&n|e[s]&n&&(e[s]|=n),a&=~o}}function hl(e,n){var a=n&-n;return a=(a&42)!==0?1:pl(a),(a&(e.suspendedLanes|n))!==0?0:a}function pl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ml(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ao(){var e=Re.p;return e!==0?e:(e=window.event,e===void 0?32:av(e.type))}function Ro(e,n){var a=Re.p;try{return Re.p=e,n()}finally{Re.p=a}}var xi=Math.random().toString(36).slice(2),A="__reactFiber$"+xi,G="__reactProps$"+xi,fe="__reactContainer$"+xi,ie="__reactEvents$"+xi,ae="__reactListeners$"+xi,Be="__reactHandles$"+xi,Xe="__reactResources$"+xi,Oe="__reactMarker$"+xi,Ye="__reactLoad$"+xi;function Ke(e){delete e[A],delete e[G],delete e[ae],delete e[Be]}function rt(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[fe]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Bx(e);e!==null;){if(a=e[A])return a;e=Bx(e)}return n}e=a,a=e.parentNode}return null}function dt(e){if(e=e[A]||e[fe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function je(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Mt(e){var n=e[Xe];return n||(n=e[Xe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[Oe]=!0}function Kt(e){e[Ye]=void 0}var kt=new Set,Sn={};function Fe(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(Sn[e]=n,e=0;e<n.length;e++)kt.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fn={},ni={};function Xi(e){return Me.call(ni,e)?!0:Me.call(Fn,e)?!1:Dt.test(e)?ni[e]=!0:(Fn[e]=!0,!1)}var _t=!1;function Gt(){var e=_t;return _t=!1,e}function $t(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ii(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Rt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wo(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var o=s.get,u=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(m){a=""+m,u.call(this,m)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Iu(e){if(!e._valueTracker){var n=pa(e)?"checked":"value";e._valueTracker=wo(e,n,""+e[n])}}function om(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=pa(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var dS=/[\n"\\]/g;function vi(e){return e.replace(dS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bu(e,n,a,s,o,u,m,R){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+un(n)):e.value!==""+un(n)&&(e.value=""+un(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?m==="number"&&e.value==n?Fu(e,un(e.value)):Fu(e,un(n)):a!=null?Fu(e,un(a)):s!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+un(R):e.removeAttribute("name")}function cm(e,n,a,s,o,u,m,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Iu(e);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Iu(e)}function Fu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ir(e,n,a,s){if(e=e.options,n){n={};for(var o=0;o<a.length;o++)n["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=n.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&s&&(e[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function um(e,n,a){if(n!=null&&(n=""+un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+un(a):""}function fm(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Te(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Iu(e)}function ar(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dm(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||hS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function hm(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",_t=!0);for(var o in n)s=n[o],n.hasOwnProperty(o)&&a[o]!==s&&(dm(e,o,s),_t=!0)}else for(var u in n)n.hasOwnProperty(u)&&dm(e,u,n[u])}function Hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Co(e){return mS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Gu=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sr=null,rr=null;function pm(e){var n=dt(e);if(n&&(e=n.stateNode)){var a=e[G]||null;e:switch(e=n.stateNode,n.type){case"input":if(Bu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var o=s[G]||null;if(!o)throw Error(r(90));Bu(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&om(s)}break e;case"textarea":um(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ir(e,!!a.multiple,n,!1)}}}var ku=!1;function mm(e,n,a){if(ku)return e(n,a);ku=!0;try{var s=e(n);return s}finally{if(ku=!1,(sr!==null||rr!==null)&&(Cc(),sr&&(n=sr,e=rr,rr=sr=null,pm(n),e)))for(n=0;n<e.length;n++)pm(e[n])}}function gl(e,n){var a=e.stateNode;if(a===null)return null;var s=a[G]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(ma)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Xu=!1}var Fa=null,ju=null,No=null;function gm(){if(No)return No;var e,n=ju,a=n.length,s,o="value"in Fa?Fa.value:Fa.textContent,u=o.length;for(e=0;e<a&&n[e]===o[e];e++);var m=a-e;for(s=1;s<=m&&n[a-s]===o[u-s];s++);return No=o.slice(e,1<s?1-s:void 0)}function Do(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function xm(){return!1}function Hn(e){function n(a,s,o,u,m){this._reactName=a,this._targetInst=o,this.type=s,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Uo:xm,this.isPropagationStopped=xm,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lo=Hn(Ha),vl=U({},Ha,{view:0,detail:0}),gS=Hn(vl),Wu,qu,_l,Oo=U({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(Wu=e.screenX-_l.screenX,qu=e.screenY-_l.screenY):qu=Wu=0,_l=e),Wu)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),vm=Hn(Oo),xS=U({},Oo,{dataTransfer:0}),vS=Hn(xS),_S=U({},vl,{relatedTarget:0}),Yu=Hn(_S),SS=U({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),yS=Hn(SS),bS=U({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),MS=Hn(bS),ES=U({},Ha,{data:0}),_m=Hn(ES),TS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=RS[e])?!!n[e]:!1}function Zu(){return wS}var CS=U({},vl,{key:function(e){if(e.key){var n=TS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?AS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),NS=Hn(CS),DS=U({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Hn(DS),US=U({},Ha,{submitter:0}),LS=Hn(US),OS=U({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),zS=Hn(OS),PS=U({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=Hn(PS),BS=U({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Hn(BS),HS=U({},Ha,{newState:0,oldState:0,source:0}),GS=Hn(HS),VS=[9,13,27,32],Ku=ma&&"CompositionEvent"in window,Sl=null;ma&&"documentMode"in document&&(Sl=document.documentMode);var kS=ma&&"TextEvent"in window&&!Sl,ym=ma&&(!Ku||Sl&&8<Sl&&11>=Sl),bm=" ",Mm=!1;function Em(e,n){switch(e){case"keyup":return VS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function XS(e,n){switch(e){case"compositionend":return Tm(n);case"keypress":return n.which!==32?null:(Mm=!0,bm);case"textInput":return e=n.data,e===bm&&Mm?null:e;default:return null}}function jS(e,n){if(lr)return e==="compositionend"||!Ku&&Em(e,n)?(e=gm(),No=ju=Fa=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!WS[e.type]:n==="textarea"}function Rm(e,n,a,s){sr?rr?rr.push(s):rr=[s]:sr=s,n=zc(n,"onChange"),0<n.length&&(a=new Lo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var yl=null,bl=null;function qS(e){px(e,0)}function zo(e){var n=je(e);if(om(n))return e}function wm(e,n){if(e==="change")return n}var Cm=!1;if(ma){var Qu;if(ma){var Ju="oninput"in document;if(!Ju){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Ju=typeof Nm.oninput=="function"}Qu=Ju}else Qu=!1;Cm=Qu&&(!document.documentMode||9<document.documentMode)}function Dm(){yl&&(yl.detachEvent("onpropertychange",Um),bl=yl=null)}function Um(e){if(e.propertyName==="value"&&zo(bl)){var n=[];Rm(n,bl,e,Vu(e)),mm(qS,n)}}function YS(e,n,a){e==="focusin"?(Dm(),yl=n,bl=a,yl.attachEvent("onpropertychange",Um)):e==="focusout"&&Dm()}function ZS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(bl)}function KS(e,n){if(e==="click")return zo(n)}function QS(e,n){if(e==="input"||e==="change")return zo(n)}function JS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ai=typeof Object.is=="function"?Object.is:JS;function Ml(e,n){if(ai(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var o=a[s];if(!Me.call(n,o)||!ai(e[o],n[o]))return!1}return!0}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Om(e,n){var a=Lm(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lm(a)}}function zm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$u(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$u(e.document)}return n}function ef(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $S=ma&&"documentMode"in document&&11>=document.documentMode,or=null,tf=null,El=null,nf=!1;function Im(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nf||or==null||or!==$u(s)||(s=or,"selectionStart"in s&&ef(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),El&&Ml(El,s)||(El=s,s=zc(tf,"onSelect"),0<s.length&&(n=new Lo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=or)))}function Ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var cr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},af={},Bm={};ma&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Es(e){if(af[e])return af[e];if(!cr[e])return e;var n=cr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bm)return af[e]=n[a];return e}var Fm=Es("animationend"),Hm=Es("animationiteration"),Gm=Es("animationstart"),ey=Es("transitionrun"),ty=Es("transitionstart"),ny=Es("transitioncancel"),Vm=Es("transitionend"),km=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function Ni(e,n){km.set(e,n),Fe(n,[e])}var iy=0;function ga(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Oi.identifierPrefix;var a=iy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Xm(e){if(e==null||typeof e=="string")return e;var n=null,a=Cr;if(a!==null)for(var s=0;s<a.length;s++){var o=e[a[s]];if(o!=null){if(o==="none")return"none";n=n==null?o:n+(" "+o)}}return n??e.default}function xa(e,n){return e=Xm(e),n=Xm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Po=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],ur=0,rf=0;function Io(){for(var e=ur,n=rf=ur=0;n<e;){var a=_i[n];_i[n++]=null;var s=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];if(_i[n++]=null,s!==null&&o!==null){var m=s.pending;m===null?o.next=o:(o.next=m.next,m.next=o),s.pending=o}u!==0&&jm(a,o,u)}}function Bo(e,n,a,s){_i[ur++]=e,_i[ur++]=n,_i[ur++]=a,_i[ur++]=s,rf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function lf(e,n,a,s){return Bo(e,n,a,s),Fo(e)}function Ts(e,n){return Bo(e,null,null,n),Fo(e)}function jm(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var o=!1,u=e.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&n!==null&&(o=31-ft(a),e=u.hiddenUpdates,s=e[o],s===null?e[o]=[n]:s.push(n),n.lane=a|536870912),u):null}function Fo(e){if(50<Wl)throw Wl=0,wc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var fr={};function ay(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,s){return new ay(e,n,a,s)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Wm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ho(e,n,a,s,o,u){var m=0;if(s=e,typeof s=="function")of(s)&&(m=1);else if(typeof s=="string")m=Ub(e,a,Ft.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case _e:return e=Yn(31,a,n,o),e.elementType=_e,e.lanes=u,e;case k:return As(a.children,o,u,n);case $:m=8,o|=24;break;case ce:return e=Yn(12,a,n,o|2),e.elementType=ce,e.lanes=u,e;case q:return e=Yn(13,a,n,o),e.elementType=q,e.lanes=u,e;case de:return e=Yn(19,a,n,o),e.elementType=de,e.lanes=u,e;case Ze:case B:return e=o|32,e=Yn(30,a,n,e),e.elementType=B,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ee:m=10;break e;case J:m=9;break e;case W:m=11;break e;case re:m=14;break e;case pe:m=16,s=null;break e}m=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Yn(m,a,n,o),n.elementType=e,n.type=s,n.lanes=u,n}function As(e,n,a,s){return e=Yn(7,e,s,n),e.lanes=a,e}function cf(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function qm(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function uf(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ym=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var a=Ym.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ve(n)},Ym.set(e,n),n)}return{value:e,source:n,stack:ve(n)}}var dr=[],hr=0,Go=null,Tl=0,yi=[],bi=0,Ga=null,Wi=1,qi="";function _a(e,n){dr[hr++]=Tl,dr[hr++]=Go,Go=e,Tl=n}function Zm(e,n,a){yi[bi++]=Wi,yi[bi++]=qi,yi[bi++]=Ga,Ga=e;var s=Wi;e=qi;var o=32-ft(s)-1;s&=~(1<<o),a+=1;var u=32-ft(n)+o;if(30<u){var m=o-o%5;u=(s&(1<<m)-1).toString(32),s>>=m,o-=m,Wi=1<<32-ft(n)+o|a<<o|s,qi=u+e}else Wi=1<<u|a<<o|s,qi=e}function Vo(e){e.return!==null&&(_a(e,1),Zm(e,1,0))}function ff(e){for(;e===Go;)Go=dr[--hr],dr[hr]=null,Tl=dr[--hr],dr[hr]=null;for(;e===Ga;)Ga=yi[--bi],yi[bi]=null,qi=yi[--bi],yi[bi]=null,Wi=yi[--bi],yi[bi]=null}function Km(e,n){yi[bi++]=Wi,yi[bi++]=qi,yi[bi++]=Ga,Wi=n.id,qi=n.overflow,Ga=e}var En=null,en=null,St=!1,Va=null,Mi=!1,df=Error(r(519));function ka(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Al(Si(n,e)),df}function Qm(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[A]=e,n[G]=s,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<Yl.length;a++)Tt(Yl[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),cm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),fm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||vx(n.textContent,a)?(s.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),s.onScroll!=null&&Tt("scroll",n),s.onScrollEnd!=null&&Tt("scrollend",n),s.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||ka(e,!0)}function ko(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:En=En.return}}function pr(e){if(e!==En)return!1;if(!St)return ko(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vd(e.type,e.memoizedProps)),a=!a),a&&en&&ka(e),ko(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));en=Ix(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));en=Ix(e)}else n===27?(n=en,ss(e.type)?(e=Qd,Qd=null,en=e):en=n):en=En?Ti(e.stateNode.nextSibling):null;return!0}function Rs(){en=En=null,St=!1}function hf(){var e=Va;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Va=null),e}function Al(e){Va===null?Va=[e]:Va.push(e)}var pf=pt(null),ws=null,Sa=null;function Xa(e,n,a){nt(pf,n._currentValue),n._currentValue=a}function ya(e){e._currentValue=pf.current,Je(pf)}function Xo(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function mf(e,n,a,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var m=o.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=o;for(var I=0;I<n.length;I++)if(R.context===n[I]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),Xo(u.return,a,e),s||(m=null);break e}u=R.next}}else if(o.tag===18){if(m=o.return,m===null)throw Error(r(341));m.lanes|=a,u=m.alternate,u!==null&&(u.lanes|=a),Xo(m,a,e),m=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=a,m=o.alternate,m!==null&&(m.lanes|=a),Xo(o.return,a,e),m=o.child,m=m!==null?m.sibling:null):m=o.child;if(m!==null)m.return=o;else for(m=o;m!==null;){if(m===e){m=null;break}if(o=m.sibling,o!==null){o.return=m.return,m=o;break}m=m.return}o=m}}function Cs(e,n,a,s){e=null;for(var o=n,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var m=o.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var R=o.type;ai(o.pendingProps.value,m.value)||(e!==null?e.push(R):e=[R])}}else if(o===jt.current){if(m=o.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Fr):e=[Fr])}o=o.return}return e!==null&&mf(n,e,a,s),n.flags|=262144,e!==null}function jo(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){ws=e,Sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Jm(ws,e)}function Wo(e,n){return ws===null&&Ns(e),Jm(e,n)}function Jm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(e===null)throw Error(r(308));Sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Sa=Sa.next=n;return a}var sy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ry=l.unstable_scheduleCallback,ly=l.unstable_NormalPriority,mn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new sy,data:new Map,refCount:0}}function Rl(e){e.refCount--,e.refCount===0&&ry(ly,function(){e.controller.abort()})}function $m(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var wl=null;function oy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Cl=null,xf=0,Ds=0,mr=null;function cy(e,n){if(Cl===null){var a=Cl=[];xf=0,Ds=Ld(),mr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xf++,n.then(e0,e0),n}function e0(){if(--xf===0&&(wl=null,Cl!==null)){mr!==null&&(mr.status="fulfilled");var e=Cl;Cl=null,Ds=0,mr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uy(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var o=0;o<a.length;o++)(0,a[o])(n)},function(o){for(s.status="rejected",s.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),s}var t0=me.S;me.S=function(e,n){if(qg=ke(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cy(e,n),wl!==null)for(var a=Lr;a!==null;)$m(a,wl),a=a.next;if(a=e.types,a!==null){for(var s=Lr;s!==null;)$m(s,a),s=s.next;if(Ds!==0){s=wl,s===null&&(s=wl=[]);for(var o=0;o<a.length;o++){var u=a[o];s.indexOf(u)===-1&&s.push(u)}}}t0!==null&&t0(e,n)};var Us=pt(null);function vf(){var e=Us.current;return e!==null?e:Jt.pooledCache}function qo(e,n){n===null?nt(Us,Us.current):nt(Us,n.pool)}function n0(){var e=vf();return e===null?null:{parent:mn._currentValue,pool:e}}var gr=Error(r(460)),_f=Error(r(474)),Yo=Error(r(542)),Zo={then:function(){}};function i0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function a0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,r0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var o=n;o.status="fulfilled",o.value=s}},function(s){if(n.status==="pending"){var o=n;o.status="rejected",o.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,r0(e),e}throw Os=n,gr}}function Ls(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,gr):a}}var Os=null;function s0(){if(Os===null)throw Error(r(459));var e=Os;return Os=null,e}function r0(e){if(e===gr||e===Yo)throw Error(r(483))}var xr=null,Nl=0;function Ko(e){var n=Nl;return Nl+=1,xr===null&&(xr=[]),a0(xr,e,n)}function ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Qo(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function l0(e){function n(K,V){if(e){var ne=K.deletions;ne===null?(K.deletions=[V],K.flags|=16):ne.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function s(K){for(var V=new Map;K!==null;)K.key===null?V.set(K.index,K):V.set(K.key,K),K=K.sibling;return V}function o(K,V){return K=va(K,V),K.index=0,K.sibling=null,K}function u(K,V,ne){return K.index=ne,e?(ne=K.alternate,ne!==null?(ne=ne.index,ne<V?(K.flags|=2,V):ne):(K.flags|=134217730,V)):(K.flags|=1048576,V)}function m(K){return e&&K.alternate===null&&(K.flags|=134217730),K}function R(K,V,ne,Se){return V===null||V.tag!==6?(V=cf(ne,K.mode,Se),V.return=K,V):(V=o(V,ne),V.return=K,V)}function I(K,V,ne,Se){var We=ne.type;return We===k?(K=ue(K,V,ne.props.children,Se,ne.key),ja(K,ne),K):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===pe&&Ls(We)===V.type)?(V=o(V,ne.props),ja(V,ne),V.return=K,V):(V=Ho(ne.type,ne.key,ne.props,null,K.mode,Se),ja(V,ne),V.return=K,V)}function Q(K,V,ne,Se){return V===null||V.tag!==4||V.stateNode.containerInfo!==ne.containerInfo||V.stateNode.implementation!==ne.implementation?(V=uf(ne,K.mode,Se),V.return=K,V):(V=o(V,ne.children||[]),V.return=K,V)}function ue(K,V,ne,Se,We){return V===null||V.tag!==7?(V=As(ne,K.mode,Se,We),V.return=K,V):(V=o(V,ne),V.return=K,V)}function ye(K,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=cf(""+V,K.mode,ne),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case O:return ne=Ho(V.type,V.key,V.props,null,K.mode,ne),ja(ne,V),ne.return=K,ne;case H:return V=uf(V,K.mode,ne),V.return=K,V;case pe:return V=Ls(V),ye(K,V,ne)}if(Te(V)||Z(V))return V=As(V,K.mode,ne,null),V.return=K,V;if(typeof V.then=="function")return ye(K,Ko(V),ne);if(V.$$typeof===ee)return ye(K,Wo(K,V),ne);Qo(K,V)}return null}function Y(K,V,ne,Se){var We=V!==null?V.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return We!==null?null:R(K,V,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case O:return ne.key===We?I(K,V,ne,Se):null;case H:return ne.key===We?Q(K,V,ne,Se):null;case pe:return ne=Ls(ne),Y(K,V,ne,Se)}if(Te(ne)||Z(ne))return We!==null?null:ue(K,V,ne,Se,null);if(typeof ne.then=="function")return Y(K,V,Ko(ne),Se);if(ne.$$typeof===ee)return Y(K,V,Wo(K,ne),Se);Qo(K,ne)}return null}function se(K,V,ne,Se,We){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return K=K.get(ne)||null,R(V,K,""+Se,We);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case O:return K=K.get(Se.key===null?ne:Se.key)||null,I(V,K,Se,We);case H:return K=K.get(Se.key===null?ne:Se.key)||null,Q(V,K,Se,We);case pe:return Se=Ls(Se),se(K,V,ne,Se,We)}if(Te(Se)||Z(Se))return K=K.get(ne)||null,ue(V,K,Se,We,null);if(typeof Se.then=="function")return se(K,V,ne,Ko(Se),We);if(Se.$$typeof===ee)return se(K,V,ne,Wo(V,Se),We);Qo(V,Se)}return null}function ze(K,V,ne,Se){for(var We=null,Ct=null,tt=V,at=V=0,vn=null;tt!==null&&at<ne.length;at++){tt.index>at?(vn=tt,tt=null):vn=tt.sibling;var Ot=Y(K,tt,ne[at],Se);if(Ot===null){tt===null&&(tt=vn);break}e&&tt&&Ot.alternate===null&&n(K,tt),V=u(Ot,V,at),Ct===null?We=Ot:Ct.sibling=Ot,Ct=Ot,tt=vn}if(at===ne.length)return a(K,tt),St&&_a(K,at),We;if(tt===null){for(;at<ne.length;at++)tt=ye(K,ne[at],Se),tt!==null&&(V=u(tt,V,at),Ct===null?We=tt:Ct.sibling=tt,Ct=tt);return St&&_a(K,at),We}for(tt=s(tt);at<ne.length;at++)vn=se(tt,K,at,ne[at],Se),vn!==null&&(e&&(Ot=vn.alternate,Ot!==null&&tt.delete(Ot.key===null?at:Ot.key)),V=u(vn,V,at),Ct===null?We=vn:Ct.sibling=vn,Ct=vn);return e&&tt.forEach(function(us){return n(K,us)}),St&&_a(K,at),We}function Qe(K,V,ne,Se){if(ne==null)throw Error(r(151));for(var We=null,Ct=null,tt=V,at=V=0,vn=null,Ot=ne.next();tt!==null&&!Ot.done;at++,Ot=ne.next()){tt.index>at?(vn=tt,tt=null):vn=tt.sibling;var us=Y(K,tt,Ot.value,Se);if(us===null){tt===null&&(tt=vn);break}e&&tt&&us.alternate===null&&n(K,tt),V=u(us,V,at),Ct===null?We=us:Ct.sibling=us,Ct=us,tt=vn}if(Ot.done)return a(K,tt),St&&_a(K,at),We;if(tt===null){for(;!Ot.done;at++,Ot=ne.next())Ot=ye(K,Ot.value,Se),Ot!==null&&(V=u(Ot,V,at),Ct===null?We=Ot:Ct.sibling=Ot,Ct=Ot);return St&&_a(K,at),We}for(tt=s(tt);!Ot.done;at++,Ot=ne.next())Ot=se(tt,K,at,Ot.value,Se),Ot!==null&&(e&&(vn=Ot.alternate,vn!==null&&tt.delete(vn.key===null?at:vn.key)),V=u(Ot,V,at),Ct===null?We=Ot:Ct.sibling=Ot,Ct=Ot);return e&&tt.forEach(function(Xb){return n(K,Xb)}),St&&_a(K,at),We}function gt(K,V,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===k&&ne.key===null&&ne.props.ref===void 0&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case O:e:{for(var We=ne.key;V!==null;){if(V.key===We){if(We=ne.type,We===k){if(V.tag===7){a(K,V.sibling),Se=o(V,ne.props.children),ja(Se,ne),Se.return=K,K=Se;break e}}else if(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===pe&&Ls(We)===V.type){a(K,V.sibling),Se=o(V,ne.props),ja(Se,ne),Se.return=K,K=Se;break e}a(K,V);break}else n(K,V);V=V.sibling}ne.type===k?(Se=As(ne.props.children,K.mode,Se,ne.key),ja(Se,ne),Se.return=K,K=Se):(Se=Ho(ne.type,ne.key,ne.props,null,K.mode,Se),ja(Se,ne),Se.return=K,K=Se)}return m(K);case H:e:{for(We=ne.key;V!==null;){if(V.key===We)if(V.tag===4&&V.stateNode.containerInfo===ne.containerInfo&&V.stateNode.implementation===ne.implementation){a(K,V.sibling),Se=o(V,ne.children||[]),Se.return=K,K=Se;break e}else{a(K,V);break}else n(K,V);V=V.sibling}Se=uf(ne,K.mode,Se),Se.return=K,K=Se}return m(K);case pe:return ne=Ls(ne),gt(K,V,ne,Se)}if(Te(ne))return ze(K,V,ne,Se);if(Z(ne)){if(We=Z(ne),typeof We!="function")throw Error(r(150));return ne=We.call(ne),Qe(K,V,ne,Se)}if(typeof ne.then=="function")return gt(K,V,Ko(ne),Se);if(ne.$$typeof===ee)return gt(K,V,Wo(K,ne),Se);Qo(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,V!==null&&V.tag===6?(a(K,V.sibling),Se=o(V,ne),Se.return=K,K=Se):(a(K,V),Se=cf(ne,K.mode,Se),Se.return=K,K=Se),m(K)):a(K,V)}return function(K,V,ne,Se){try{Nl=0;var We=gt(K,V,ne,Se);return xr=null,We}catch(tt){if(tt===gr||tt===Yo)throw tt;var Ct=Yn(29,tt,null,K.mode);return Ct.lanes=Se,Ct.return=K,Ct}finally{}}}var zs=l0(!0),o0=l0(!1),Wa=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Vt&2)!==0){var o=s.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),s.pending=n,n=Fo(e),jm(e,null,a),n}return Bo(e,s,n,a),Fo(e)}function Dl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,dl(e,a)}}function bf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var o=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?o=u=m:u=u.next=m,a=a.next}while(a!==null);u===null?o=u=n:u=u.next=n}else o=u=n;a={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Mf=!1;function Ul(){if(Mf){var e=mr;if(e!==null)throw e}}function Ll(e,n,a,s){Mf=!1;var o=e.updateQueue;Wa=!1;var u=o.firstBaseUpdate,m=o.lastBaseUpdate,R=o.shared.pending;if(R!==null){o.shared.pending=null;var I=R,Q=I.next;I.next=null,m===null?u=Q:m.next=Q,m=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,R=ue.lastBaseUpdate,R!==m&&(R===null?ue.firstBaseUpdate=Q:R.next=Q,ue.lastBaseUpdate=I))}if(u!==null){var ye=o.baseState;m=0,ue=Q=I=null,R=u;do{var Y=R.lane&-536870913,se=Y!==R.lane;if(se?(wt&Y)===Y:(s&Y)===Y){Y!==0&&Y===Ds&&(Mf=!0),ue!==null&&(ue=ue.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ze=e,Qe=R;Y=n;var gt=a;switch(Qe.tag){case 1:if(ze=Qe.payload,typeof ze=="function"){ye=ze.call(gt,ye,Y);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Qe.payload,Y=typeof ze=="function"?ze.call(gt,ye,Y):ze,Y==null)break e;ye=U({},ye,Y);break e;case 2:Wa=!0}}Y=R.callback,Y!==null&&(e.flags|=64,se&&(e.flags|=8192),se=o.callbacks,se===null?o.callbacks=[Y]:se.push(Y))}else se={lane:Y,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ue===null?(Q=ue=se,I=ye):ue=ue.next=se,m|=Y;if(R=R.next,R===null){if(R=o.shared.pending,R===null)break;se=R,R=se.next,se.next=null,o.lastBaseUpdate=se,o.shared.pending=null}}while(!0);ue===null&&(I=ye),o.baseState=I,o.firstBaseUpdate=Q,o.lastBaseUpdate=ue,u===null&&(o.shared.lanes=0),ts|=m,e.lanes=m,e.memoizedState=ye}}function c0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function u0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)c0(a[e],n)}var Za=pt(null),Jo=pt(0);function f0(e,n){e=Aa,nt(Jo,e),nt(Za,n),Aa=e|n.baseLanes}function Ef(){nt(Jo,Aa),nt(Za,Za.current)}function Tf(){Aa=Jo.current,Je(Za),Je(Jo)}var Cn=pt(null),zn=null;function Ka(e){var n=e.alternate;nt(Nn,Nn.current&1),nt(Cn,e),zn===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(zn=e)}function Af(e){nt(Nn,Nn.current),nt(Cn,e),zn===null&&(zn=e)}function d0(e){e.tag===22?(nt(Nn,Nn.current),nt(Cn,e),zn===null&&(zn=e)):Qa()}function Qa(){nt(Nn,Nn.current),nt(Cn,Cn.current)}function si(e){Je(Cn),zn===e&&(zn=null),Je(Nn)}var Nn=pt(0);function Ol(e,n){nt(Cn,Cn.current),nt(Nn,n)}function Rf(e){Je(Nn),Je(Cn),zn===e&&(zn=null)}function $o(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zd(a)||Kd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,mt=null,Qt=null,gn=null,ec=!1,vr=!1,Ps=!1,tc=0,zl=0,_r=null,fy=0;function fn(){throw Error(r(321))}function wf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ai(e[a],n[a]))return!1;return!0}function Cf(e,n,a,s,o,u){return ba=u,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,me.H=e===null||e.memoizedState===null?Z0:K0,Ps=!1,u=a(s,o),Ps=!1,vr&&(u=p0(n,a,s,o)),h0(e),u}function h0(e){me.H=oc;var n=Qt!==null&&Qt.next!==null;if(ba=0,gn=Qt=mt=null,ec=!1,zl=0,_r=null,n)throw Error(r(300));e===null||xn||(e=e.dependencies,e!==null&&jo(e)&&(xn=!0))}function p0(e,n,a,s){mt=e;var o=0;do{if(vr&&(_r=null),zl=0,vr=!1,25<=o)throw Error(r(301));if(o+=1,gn=Qt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}me.H=_y,u=n(a,s)}while(vr);return u}function dy(){var e=me.H,n=e.useState()[0];return n=typeof n.then=="function"?Pl(n):n,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(mt.flags|=1024),n}function Nf(){var e=tc!==0;return tc=0,e}function Df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Uf(e){if(ec){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ec=!1}ba=0,gn=Qt=mt=null,vr=!1,zl=tc=0,_r=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?mt.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(Qt===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var n=gn===null?mt.memoizedState:gn.next;if(n!==null)gn=n,Qt=e;else{if(e===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},gn===null?mt.memoizedState=gn=e:gn=gn.next=e}return gn}function nc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var n=zl;return zl+=1,_r===null&&(_r=[]),e=a0(_r,e,n),n=mt,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,me.H=n===null||n.memoizedState===null?Z0:K0),e}function ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===ge)return;if(e.$$typeof===ee)return wn(e)}throw Error(r(438,String(e)))}function Lf(e){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=mt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(o){return o.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nc(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=qe;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function ac(e){var n=hn();return Of(n,Qt,e)}function Of(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var o=e.baseQueue,u=s.pending;if(u!==null){if(o!==null){var m=o.next;o.next=u.next,u.next=m}n.baseQueue=o=u,s.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{n=o.next;var R=m=null,I=null,Q=n,ue=!1;do{var ye=Q.lane&-536870913;if(ye!==Q.lane?(wt&ye)===ye:(ba&ye)===ye){var Y=Q.revertLane;if(Y===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ye===Ds&&(ue=!0);else if((ba&Y)===Y){Q=Q.next,Y===Ds&&(ue=!0);continue}else ye={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(R=I=ye,m=u):I=I.next=ye,mt.lanes|=Y,ts|=Y;ye=Q.action,Ps&&a(u,ye),u=Q.hasEagerState?Q.eagerState:a(u,ye)}else Y={lane:ye,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(R=I=Y,m=u):I=I.next=Y,mt.lanes|=ye,ts|=ye;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?m=u:I.next=R,!ai(u,e.memoizedState)&&(xn=!0,ue&&(a=mr,a!==null)))throw a;e.memoizedState=u,e.baseState=m,e.baseQueue=I,s.lastRenderedState=u}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function zf(e){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,o=a.pending,u=n.memoizedState;if(o!==null){a.pending=null;var m=o=o.next;do u=e(u,m.action),m=m.next;while(m!==o);ai(u,n.memoizedState)||(xn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function m0(e,n,a){var s=mt,o=hn(),u=St;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var m=!ai((Qt||o).memoizedState,a);if(m&&(o.memoizedState=a,xn=!0),o=o.queue,Bf(v0.bind(null,s,o,e),[e]),e=o.getSnapshot!==n||m||gn!==null&&(gn.memoizedState.tag&1)!==0,Sr(e?9:8,{destroy:void 0},x0.bind(null,s,o,a,n),null),e){if(s.flags|=2048,Jt===null)throw Error(r(349));u||(ba&127)!==0||g0(s,n,a)}return a}function g0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=nc(),mt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function x0(e,n,a,s){n.value=a,n.getSnapshot=s,_0(n)&&S0(e)}function v0(e,n,a){return a(function(){_0(n)&&S0(e)})}function _0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ai(e,a)}catch{return!0}}function S0(e){var n=Ts(e,2);n!==null&&Jn(n,e,2)}function Pf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Ps){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function y0(e,n,a,s){return e.baseState=a,Of(e,Qt,typeof s=="function"?s:Ma)}function hy(e,n,a,s,o){if(lc(e))throw Error(r(485));if(e=n.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};me.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,b0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function b0(e,n){var a=n.action,s=n.payload,o=e.state;if(n.isTransition){var u=me.T,m={};m.types=u!==null?u.types:null,me.T=m;try{var R=a(o,s),I=me.S;I!==null&&I(m,R),M0(e,n,R)}catch(Q){If(e,n,Q)}finally{u!==null&&m.types!==null&&(u.types=m.types),me.T=u}}else try{u=a(o,s),M0(e,n,u)}catch(Q){If(e,n,Q)}}function M0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){E0(e,n,s)},function(s){return If(e,n,s)}):E0(e,n,a)}function E0(e,n,a){n.status="fulfilled",n.value=a,T0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,b0(e,a)))}function If(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,T0(n),n=n.next;while(n!==s)}e.action=null}function T0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function A0(e,n){return n}function R0(e,n){if(St){var a=Jt.formState;if(a!==null){e:{var s=mt;if(St){if(en){t:{for(var o=en,u=Mi;o.nodeType!==8;){if(!u){o=null;break t}if(o=Ti(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){en=Ti(o.nextSibling),s=o.data==="F!";break e}}ka(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A0,lastRenderedState:n},a.queue=s,a=W0.bind(null,mt,s),s.dispatch=a,s=Pf(!1),u=kf.bind(null,mt,!1,s.queue),s=Gn(),o={state:n,dispatch:null,action:e,pending:null},s.queue=o,a=hy.bind(null,mt,o,u,a),o.dispatch=a,s.memoizedState=e,[n,a,!1]}function w0(e){var n=hn();return C0(n,Qt,e)}function C0(e,n,a){if(n=Of(e,n,A0)[0],e=ac(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Pl(n)}catch(m){throw m===gr?Yo:m}else s=n;n=hn();var o=n.queue,u=o.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,Sr(9,{destroy:void 0},py.bind(null,o,a),null)),[s,u,e]}function py(e,n){e.action=n}function N0(e){var n=hn(),a=Qt;if(a!==null)return C0(n,a,e);hn(),n=n.memoizedState,a=hn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Sr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=mt.updateQueue,n===null&&(n=nc(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function D0(){return hn().memoizedState}function sc(e,n,a,s){var o=Gn();mt.flags|=e,o.memoizedState=Sr(1|n,{destroy:void 0},a,s===void 0?null:s)}function rc(e,n,a,s){var o=hn();s=s===void 0?null:s;var u=o.memoizedState.inst;Qt!==null&&s!==null&&wf(s,Qt.memoizedState.deps)?o.memoizedState=Sr(n,u,a,s):(mt.flags|=e,o.memoizedState=Sr(1|n,u,a,s))}function U0(e,n){sc(8390656,8,e,n)}function Bf(e,n){rc(2048,8,e,n)}function my(e){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=nc(),mt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function L0(e){var n=hn().memoizedState;return my({ref:n,nextImpl:e}),function(){if((Vt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function O0(e,n){return rc(4,2,e,n)}function z0(e,n){return rc(4,4,e,n)}function P0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function I0(e,n,a){a=a!=null?a.concat([e]):null,rc(4,4,P0.bind(null,n,e),a)}function Ff(){}function B0(e,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&wf(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function F0(e,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&wf(n,s[1]))return s[0];if(s=e(),Ps){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Hf(e,n,a){return a===void 0||(ba&1073741824)!==0&&(wt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Zg(),mt.lanes|=e,ts|=e,a)}function H0(e,n,a,s){return ai(a,n)?a:Za.current!==null?(e=Hf(e,a,s),ai(e,n)||(xn=!0),e):(ba&106)===0||(ba&1073741824)!==0&&(wt&261930)===0?(xn=!0,e.memoizedState=a):(e=Zg(),mt.lanes|=e,ts|=e,n)}function G0(e,n,a,s,o){var u=Re.p;Re.p=u!==0&&8>u?u:8;var m=me.T,R={};R.types=m!==null?m.types:null,me.T=R,kf(e,!1,n,a);try{var I=o(),Q=me.S;if(Q!==null&&Q(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=uy(I,s);Il(e,n,ue,ci(e))}else Il(e,n,s,ci(e))}catch(ye){Il(e,n,{then:function(){},status:"rejected",reason:ye},ci())}finally{Re.p=u,m!==null&&R.types!==null&&(m.types=R.types),me.T=m}}function gy(){}function Gf(e,n,a,s){if(e.tag!==5)throw Error(r(476));var o=V0(e).queue;G0(e,o,n,At,a===null?gy:function(){return k0(e),a(s)})}function V0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:At,baseState:At,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:At},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function k0(e){var n=V0(e);n.next===null&&(n=e.alternate.memoizedState),Il(e,n.next.queue,{},ci())}function Vf(){return wn(Fr)}function X0(){return hn().memoizedState}function j0(){return hn().memoizedState}function xy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();e=qa(a);var s=Ya(n,e,a);s!==null&&(Jn(s,n,a),Dl(s,n,a)),n={cache:gf()},e.payload=n;return}n=n.return}}function vy(e,n,a){var s=ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(e)?q0(n,a):(a=lf(e,n,a,s),a!==null&&(Jn(a,e,s),Y0(a,n,s)))}function W0(e,n,a){var s=ci();Il(e,n,a,s)}function Il(e,n,a,s){var o={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(e))q0(n,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var m=n.lastRenderedState,R=u(m,a);if(o.hasEagerState=!0,o.eagerState=R,ai(R,m))return Bo(e,n,o,0),Jt===null&&Io(),!1}catch{}finally{}if(a=lf(e,n,o,s),a!==null)return Jn(a,e,s),Y0(a,n,s),!0}return!1}function kf(e,n,a,s){if(s={lane:2,revertLane:Ld(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(n)throw Error(r(479))}else n=lf(e,a,s,2),n!==null&&Jn(n,e,2)}function lc(e){var n=e.alternate;return e===mt||n!==null&&n===mt}function q0(e,n){vr=ec=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Y0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,dl(e,a)}}var oc={readContext:wn,use:ic,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},Z0={readContext:wn,use:ic,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:U0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,sc(4194308,4,P0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return sc(4194308,4,e,n)},useInsertionEffect:function(e,n){sc(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var s=e();if(Ps){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Gn();if(a!==void 0){var o=a(n);if(Ps){Nt(!0);try{a(n)}finally{Nt(!1)}}}else o=n;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=vy.bind(null,mt,e),[s.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pf(e);var n=e.queue,a=W0.bind(null,mt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(e,n){var a=Gn();return Hf(a,e,n)},useTransition:function(){var e=Pf(!1);return e=G0.bind(null,mt,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=mt,o=Gn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Jt===null)throw Error(r(349));(wt&127)!==0||g0(s,n,a)}o.memoizedState=a;var u={value:a,getSnapshot:n};return o.queue=u,U0(v0.bind(null,s,u,e),[e]),s.flags|=2048,Sr(9,{destroy:void 0},x0.bind(null,s,u,a,n),null),a},useId:function(){var e=Gn(),n=Jt.identifierPrefix;if(St){var a=qi,s=Wi;a=(s&~(1<<32-ft(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Vf,useFormState:R0,useActionState:R0,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=kf.bind(null,mt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lf,useCacheRefresh:function(){return Gn().memoizedState=xy.bind(null,mt)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Vt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},K0={readContext:wn,use:ic,useCallback:B0,useContext:wn,useEffect:Bf,useImperativeHandle:I0,useInsertionEffect:O0,useLayoutEffect:z0,useMemo:F0,useReducer:ac,useRef:D0,useState:function(){return ac(Ma)},useDebugValue:Ff,useDeferredValue:function(e,n){var a=hn();return H0(a,Qt.memoizedState,e,n)},useTransition:function(){var e=ac(Ma)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Pl(e),n]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:Vf,useFormState:w0,useActionState:w0,useOptimistic:function(e,n){var a=hn();return y0(a,Qt,e,n)},useMemoCache:Lf,useCacheRefresh:j0,useEffectEvent:L0},_y={readContext:wn,use:ic,useCallback:B0,useContext:wn,useEffect:Bf,useImperativeHandle:I0,useInsertionEffect:O0,useLayoutEffect:z0,useMemo:F0,useReducer:zf,useRef:D0,useState:function(){return zf(Ma)},useDebugValue:Ff,useDeferredValue:function(e,n){var a=hn();return Qt===null?Hf(a,e,n):H0(a,Qt.memoizedState,e,n)},useTransition:function(){var e=zf(Ma)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Pl(e),n]},useSyncExternalStore:m0,useId:X0,useHostTransitionStatus:Vf,useFormState:N0,useActionState:N0,useOptimistic:function(e,n){var a=hn();return Qt!==null?y0(a,Qt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:j0,useEffectEvent:L0};function Xf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:U({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var jf={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ci(),o=qa(s);o.payload=n,a!=null&&(o.callback=a),n=Ya(e,o,s),n!==null&&(Jn(n,e,s),Dl(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ci(),o=qa(s);o.tag=1,o.payload=n,a!=null&&(o.callback=a),n=Ya(e,o,s),n!==null&&(Jn(n,e,s),Dl(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ci(),s=qa(a);s.tag=2,n!=null&&(s.callback=n),n=Ya(e,s,a),n!==null&&(Jn(n,e,a),Dl(n,e,a))}};function Q0(e,n,a,s,o,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,m):n.prototype&&n.prototype.isPureReactComponent?!Ml(a,s)||!Ml(o,u):!0}function J0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&jf.enqueueReplaceState(n,n.state,null)}function Is(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=U({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function $0(e){Po(e)}function eg(e){console.error(e)}function tg(e){Po(e)}function cc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function ng(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Wf(e,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){cc(e,n)},a}function ig(e){return e=qa(e),e.tag=3,e}function ag(e,n,a,s){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var u=s.value;e.payload=function(){return o(u)},e.callback=function(){ng(n,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){ng(n,a,s),typeof o!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function Sy(e,n,a,s,o){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Cs(n,a,o,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Nc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=o,s===Zo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Nd(e,s,o)),!1;case 22:return a.flags|=65536,s===Zo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Nd(e,s,o)),!1}throw Error(r(435,a.tag))}return Nd(e,s,o),Nc(),!1}if(St)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=o,s!==df&&(e=Error(r(422),{cause:s}),Al(Si(e,a)))):(s!==df&&(n=Error(r(423),{cause:s}),Al(Si(n,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=Si(s,a),o=Wf(e.stateNode,s,o),bf(e,o),dn!==4&&(dn=2)),!1;var u=Error(r(520),{cause:s});if(u=Si(u,a),jl===null?jl=[u]:jl.push(u),dn!==4&&(dn=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=Wf(a.stateNode,s,e),bf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ns===null||!ns.has(u))))return a.flags|=65536,o&=-o,a.lanes|=o,o=ig(o),ag(o,e,a,s),bf(a,o),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var qf=Error(r(461)),xn=!1;function yn(e,n,a,s){n.child=e===null?o0(n,null,a,s):zs(n,e.child,a,s)}function sg(e,n,a,s,o){a=a.render;var u=n.ref;if("ref"in s){var m={};for(var R in s)R!=="ref"&&(m[R]=s[R])}else m=s;return Ns(n),s=Cf(e,n,a,m,u,o),R=Nf(),e!==null&&!xn?(Df(e,n,o),Ea(e,n,o)):(St&&R&&Vo(n),n.flags|=1,yn(e,n,s,o),n.child)}function rg(e,n,a,s,o){if(e===null){var u=a.type;return typeof u=="function"&&!of(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,lg(e,n,u,s,o)):(e=Ho(a.type,null,s,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!td(e,o)){var m=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ml,a(m,s)&&e.ref===n.ref)return Ea(e,n,o)}return n.flags|=1,e=va(u,s),e.ref=n.ref,e.return=n,n.child=e}function lg(e,n,a,s,o){if(e!==null){var u=e.memoizedProps;if(Ml(u,s)&&e.ref===n.ref)if(xn=!1,n.pendingProps=s=u,td(e,o))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Ea(e,n,o)}return Yf(e,n,a,s,o)}function og(e,n,a,s){var o=s.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(s=n.child=e.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;s=o&~u}else s=0,n.child=null;return cg(e,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&qo(n,u!==null?u.cachePool:null),u!==null?f0(n,u):Ef(),d0(n);else return s=n.lanes=536870912,cg(e,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(qo(n,u.cachePool),f0(n,u),Qa(),n.memoizedState=null):(e!==null&&qo(n,null),Ef(),Qa());return yn(e,n,o,a),n.child}function Bl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cg(e,n,a,s,o){var u=vf();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&qo(n,null),Ef(),d0(n),e!==null&&Cs(e,n,s,!0),n.childLanes=o,null}function uc(e,n){return n=fc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ug(e,n,a){return zs(n,e.child,null,a),e=uc(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function yy(e,n,a){var s=n.pendingProps,o=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(s.mode==="hidden")return e=uc(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bl(null,e);if(Af(n),(e=en)?(e=Px(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=qm(e),a.return=n,n.child=a,En=n,en=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return uc(n,s)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(Af(n),o)if(n.flags&256)n.flags&=-257,n=ug(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(xn||Cs(e,n,a,!1),o=(a&e.childLanes)!==0,xn||o){if(Za.current===null){if(s=Jt,s!==null&&(m=hl(s,a),m!==0&&m!==u.retryLane))throw u.retryLane=m,Ts(e,m),Jn(s,e,m),qf;Nc()}n=ug(e,n,a)}else e=u.treeContext,en=Ti(m.nextSibling),En=n,St=!0,Va=null,Mi=!1,e!==null&&Km(n,e),n=uc(n,s),n.flags|=134221824;return n}return e=va(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yf(e,n,a,s,o){return Ns(n),a=Cf(e,n,a,s,void 0,o),s=Nf(),e!==null&&!xn?(Df(e,n,o),Ea(e,n,o)):(St&&s&&Vo(n),n.flags|=1,yn(e,n,a,o),n.child)}function fg(e,n,a,s,o,u){return Ns(n),n.updateQueue=null,a=p0(n,s,a,o),h0(e),s=Nf(),e!==null&&!xn?(Df(e,n,u),Ea(e,n,u)):(St&&s&&Vo(n),n.flags|=1,yn(e,n,a,u),n.child)}function dg(e,n,a,s,o){if(Ns(n),n.stateNode===null){var u=fr,m=a.contextType;typeof m=="object"&&m!==null&&(u=wn(m)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Sf(n),m=a.contextType,u.context=typeof m=="object"&&m!==null?wn(m):fr,u.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Xf(n,a,m,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&jf.enqueueReplaceState(u,u.state,null),Ll(n,s,u,o),Ul(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,I=Is(a,R);u.props=I;var Q=u.context,ue=a.contextType;m=fr,typeof ue=="object"&&ue!==null&&(m=wn(ue));var ye=a.getDerivedStateFromProps;ue=typeof ye=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ue||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||Q!==m)&&J0(n,u,s,m),Wa=!1;var Y=n.memoizedState;u.state=Y,Ll(n,s,u,o),Ul(),Q=n.memoizedState,R||Y!==Q||Wa?(typeof ye=="function"&&(Xf(n,a,ye,s),Q=n.memoizedState),(I=Wa||Q0(n,a,I,s,Y,Q,m))?(ue||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),u.props=s,u.state=Q,u.context=m,s=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,yf(e,n),m=n.memoizedProps,ue=Is(a,m),u.props=ue,ye=n.pendingProps,Y=u.context,Q=a.contextType,I=fr,typeof Q=="object"&&Q!==null&&(I=wn(Q)),R=a.getDerivedStateFromProps,(Q=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==ye||Y!==I)&&J0(n,u,s,I),Wa=!1,Y=n.memoizedState,u.state=Y,Ll(n,s,u,o),Ul();var se=n.memoizedState;m!==ye||Y!==se||Wa||e!==null&&e.dependencies!==null&&jo(e.dependencies)?(typeof R=="function"&&(Xf(n,a,R,s),se=n.memoizedState),(ue=Wa||Q0(n,a,ue,s,Y,se,I)||e!==null&&e.dependencies!==null&&jo(e.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,se,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,se,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=se),u.props=s,u.state=se,u.context=I,s=ue):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),s=!1)}return u=s,yr(e,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&s?(n.child=zs(n,e.child,null,o),n.child=zs(n,null,a,o)):yn(e,n,a,o),n.memoizedState=u.state,e=n.child):e=Ea(e,n,o),e}function hg(e,n,a,s){return Rs(),n.flags|=256,yn(e,n,a,s),n.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(e){return{baseLanes:e,cachePool:n0()}}function Qf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function pg(e,n,a){var s=n.pendingProps,o=!1,u=(n.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),m&&(o=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(o?Ka(n):Qa(),(e=en)?(e=Px(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=qm(e),a.return=n,n.child=a,En=n,en=null)):e=null,e===null)throw ka(n);return Kd(e)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,o?(Qa(),o=n.mode,u=fc({mode:"hidden",children:u},o),s=As(s,o,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=Kf(a),s.childLanes=Qf(e,m,a),n.memoizedState=Zf,Bl(null,s)):(Ka(n),Jf(n,u))}var R=e.memoizedState;if(R!==null){var I=R.dehydrated;if(I!==null)return by(e,n,u,m,s,I,R,a)}return o?(Qa(),o=s.fallback,u=n.mode,R=e.child,I=R.sibling,s=va(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,I!==null?o=va(I,o):(o=As(o,u,a,null),o.flags|=2),o.return=n,s.return=n,s.sibling=o,n.child=s,Bl(null,s),s=n.child,o=e.child.memoizedState,o===null?o=Kf(a):(u=o.cachePool,u!==null?(R=mn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=n0(),o={baseLanes:o.baseLanes|a,cachePool:u}),s.memoizedState=o,s.childLanes=Qf(e,m,a),n.memoizedState=Zf,Bl(e.child,s)):(Ka(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=a,n.memoizedState=null,a)}function Jf(e,n){return n=fc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function fc(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function dc(e,n,a){return zs(n,e.child,null,a),e=Jf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function by(e,n,a,s,o,u,m,R){if(a)return n.flags&256?(Ka(n),n.flags&=-257,dc(e,n,R)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,null):(Qa(),u=o.fallback,m=n.mode,o=fc({mode:"visible",children:o.children},m),u=As(u,m,R,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,zs(n,e.child,null,R),o=n.child,o.memoizedState=Kf(R),o.childLanes=Qf(e,s,R),n.memoizedState=Zf,Bl(null,o));if(Ka(n),Kd(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(o=Error(r(419)),o.stack="",o.digest=s,Al({value:o,source:null,stack:null})),dc(e,n,R)}if(xn||Cs(e,n,R,!1),s=(R&e.childLanes)!==0,xn||s){if(Za.current!==null)return dc(e,n,R);if(s=Jt,s!==null&&(o=hl(s,R),o!==0&&o!==m.retryLane))throw m.retryLane=o,Ts(e,o),Jn(s,e,o),qf;return Zd(u)||Nc(),dc(e,n,R)}return Zd(u)?(n.flags|=192,n.child=e.child,null):(e=m.treeContext,en=Ti(u.nextSibling),En=n,St=!0,Va=null,Mi=!1,e!==null&&Km(n,e),n=Jf(n,o.children),n.flags|=134221824,n)}function mg(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Xo(e.return,n,a)}function gg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&$o(a)===null&&(n=e),e=e.sibling}return n}function hc(e,n,a,s,o,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:o,treeForkCount:u}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=o,m.treeForkCount=u)}function $f(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ed(e,n,a){var s=n.pendingProps,o=s.revealOrder,u=s.tail;s=s.children;var m=Nn.current;if(n.flags&128)return Ol(n,m),null;var R=(m&2)!==0;if(R?(m=m&1|2,n.flags|=128):m&=1,Ol(n,m),o==="backwards"&&e!==null?($f(e),yn(e,n,s,a),$f(e)):yn(e,n,s,a),s=St?Tl:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mg(e,a,n);else if(e.tag===19)mg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":a=gg(n.child),a===null?(o=n.child,n.child=null):(o=a.sibling,a.sibling=null,$f(n)),hc(n,!0,o,null,u,s);break;case"unstable_legacy-backwards":for(a=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){n.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}hc(n,!0,a,null,u,s);break;case"together":hc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=gg(n.child),a===null?(o=n.child,n.child=null):(o=a.sibling,a.sibling=null),hc(n,!1,o,a,u,s)}return n.child}function xg(e,n,a){var s=n.pendingProps;return Xa(n,n.type,s.value),yn(e,n,s.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ts|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Cs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function td(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&jo(e)))}function My(e,n,a){switch(n.tag){case 3:j(n,n.stateNode.containerInfo),Xa(n,mn,e.memoizedState.cache),Rs();break;case 27:case 5:It(n);break;case 4:j(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Af(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ka(n),n.flags|=128,null;s=Cs(e,n,a,!1);var o=n.child.childLanes;return s||(a&o)!==0?pg(e,n,a):(Ka(n),e=Ea(e,n,a),e!==null?e.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return ed(e,n,a);if(o=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Cs(e,n,a,!1),s=(a&n.childLanes)!==0),o){if(s)return ed(e,n,a);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ol(n,Nn.current),s)break;return null;case 22:return n.lanes=0,og(e,n,a,n.pendingProps);case 24:Xa(n,mn,e.memoizedState.cache)}return Ea(e,n,a)}function vg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!td(e,a)&&(n.flags&128)===0)return xn=!1,My(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,St&&(n.flags&1048576)!==0&&Zm(n,Tl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=Ls(n.elementType),n.type=e,typeof e=="function")of(e)?(s=Is(e,s),n.tag=1,n=dg(null,n,e,s,a)):(n.tag=0,n=Yf(null,n,e,s,a));else{if(e!=null){var o=e.$$typeof;if(o===W){n.tag=11,n=sg(null,n,e,s,a);break e}else if(o===re){n.tag=14,n=rg(null,n,e,s,a);break e}else if(o===ee){n.tag=10,n.type=e,n=xg(null,n,a);break e}}throw n=Ae(e)||e,Error(r(306,n,""))}}return n;case 0:return Yf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,o=Is(s,n.pendingProps),dg(e,n,s,o,a);case 3:e:{if(j(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;o=u.element,yf(e,n),Ll(n,s,null,a);var m=n.memoizedState;if(s=m.cache,Xa(n,mn,s),s!==u.cache&&mf(n,[mn],a,!0),Ul(),s=m.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=hg(e,n,s,a);break e}else if(s!==o){o=Si(Error(r(424)),n),Al(o),n=hg(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Ti(e.firstChild),En=n,St=!0,Va=null,Mi=!0,a=o0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),s===o){n=Ea(e,n,a);break e}yn(e,n,s,a)}n=n.child}return n;case 26:return yr(e,n),e===null?(a=kx(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(n.stateNode=bx(n.type,n.pendingProps,Pt.current,n)):n.memoizedState=kx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&St&&(s=n.stateNode=Fx(n.type,n.pendingProps,Pt.current),En=n,Mi=!0,o=en,ss(n.type)?(Qd=o,en=Ti(s.firstChild)):en=o),yn(e,n,n.pendingProps.children,a),yr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((o=s=en)&&(s=xb(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,En=n,en=Ti(s.firstChild),Mi=!1,o=!0):o=!1),o||ka(n)),It(n),o=n.type,u=n.pendingProps,m=e!==null?e.memoizedProps:null,s=u.children,Vd(o,u)?s=null:m!==null&&Vd(o,m)&&(n.flags|=32),n.memoizedState!==null&&(o=Cf(e,n,dy,null,null,a),Fr._currentValue=o),yr(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&St&&((e=a=en)&&(a=vb(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,En=n,en=null,e=!0):e=!1),e||ka(n)),null;case 13:return pg(e,n,a);case 4:return j(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=zs(n,null,s,a):yn(e,n,s,a),n.child;case 11:return sg(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,yr(e,n),yn(e,n,s,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return xg(e,n,a);case 9:return o=n.type._context,s=n.pendingProps.children,Ns(n),o=wn(o),s=s(o),n.flags|=1,yn(e,n,s,a),n.child;case 14:return rg(e,n,n.type,n.pendingProps,a);case 15:return lg(e,n,n.type,n.pendingProps,a);case 19:return ed(e,n,a);case 31:return yy(e,n,a);case 22:return og(e,n,a,n.pendingProps);case 24:return Ns(n),s=wn(mn),e===null?(o=vf(),o===null&&(o=Jt,u=gf(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=a),o=u),n.memoizedState={parent:s,cache:o},Sf(n),Xa(n,mn,o)):((e.lanes&a)!==0&&(yf(e,n),Ll(n,null,null,a),Ul()),o=e.memoizedState,u=n.memoizedState,o.parent!==s?(o={parent:s,cache:s},n.memoizedState=o,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=o),Xa(n,mn,s)):(s=u.cache,Xa(n,mn,s),s!==o.cache&&mf(n,[mn],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:St&&Vo(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:yr(e,n),yn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ta(e){e.flags|=4}function nd(e,n,a,s,o){var u;if((u=(e.mode&32)!==0)&&(u=a===null?qx(n,s):qx(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if($g())e.flags|=8192;else throw Os=Zo,_f}else e.flags&=-16777217}function _g(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yx(n))if($g())e.flags|=8192;else throw Os=Zo,_f}function pc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?fl():536870912,e.lanes|=n,Ar|=n)}function Fl(e,n){if(!St)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags&1206910976,s|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Ey(e,n,a){var s=n.pendingProps;switch(ff(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ya(mn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(pr(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hf())),tn(n),null;case 26:var o=n.type,u=n.memoizedState;return e===null?(Ta(n),u!==null?(tn(n),_g(n,u)):(tn(n),nd(n,o,null,s,a))):u?u!==e.memoizedState?(Ta(n),tn(n),_g(n,u)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ta(n),tn(n),nd(n,o,e,s,a)),null;case 27:if(P(n),a=Pt.current,o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return tn(n),n.subtreeFlags&=-33554433,null}e=Ft.current,pr(n)?Qm(n):(e=Fx(o,s,a),n.stateNode=e,Ta(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),o=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return tn(n),n.subtreeFlags&=-33554433,null}if(u=Ft.current,pr(n))Qm(n);else{var m=Kl(Pt.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?m.createElement(o,{is:s.is}):m.createElement(o)}}u[A]=n,u[G]=s;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=u;e:switch(Un(u,o,s),o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Ta(n)}}return tn(n),n.subtreeFlags&=-33554433,nd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Pt.current,pr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,o=En,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||vx(e.nodeValue,a)),e||ka(n,!0)}else e=Kl(e).createTextNode(s),e[A]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=pr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[A]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=pr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[A]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),o=!1}else o=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),pc(n,n.updateQueue),tn(n),null);case 4:return sn(),e===null&&Id(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return ya(n.type),tn(n),null;case 19:if(Rf(n),s=n.memoizedState,s===null)return tn(n),null;if(o=(n.flags&128)!==0,u=s.rendering,u===null)if(o)Fl(s,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=$o(e),u!==null){for(n.flags|=128,Fl(s,!1),e=u.updateQueue,n.updateQueue=e,pc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Wm(a,e),a=a.sibling;return Ol(n,Nn.current&1|2),St&&_a(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&ke()>Ac&&(n.flags|=128,o=!0,Fl(s,!1),n.lanes=4194304)}else{if(!o)if(e=$o(u),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,pc(n,e),Fl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!St)return tn(n),null}else 2*ke()-s.renderingStartTime>Ac&&a!==536870912&&(n.flags|=128,o=!0,Fl(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(e=s.last,e!==null?e.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,u=Nn.current,u=o?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||St?Ol(n,u):(a=u,nt(Cn,n),nt(Nn,a),zn===null&&(zn=n)),St&&_a(n,s.treeForkCount),e}return tn(n),null;case 22:case 23:return si(n),Tf(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&pc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Je(Us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ya(mn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(r(156,n.tag))}function Ty(e,n){switch(ff(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ya(mn),sn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Rf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return ya(n.type),null;case 22:case 23:return si(n),Tf(),e!==null&&Je(Us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ya(mn),null;case 25:return null;default:return null}}function Sg(e,n){switch(ff(n),n.tag){case 3:ya(mn),sn();break;case 26:case 27:case 5:P(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Rf(n);break;case 10:ya(n.type);break;case 22:case 23:si(n),Tf(),e!==null&&Je(Us);break;case 24:ya(mn)}}function Hl(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&e)===e){s=void 0;var u=a.create,m=a.inst;s=u(),m.destroy=s}a=a.next}while(a!==o)}}catch(R){qt(n,n.return,R)}}function Ja(e,n,a){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){var m=s.inst,R=m.destroy;if(R!==void 0){m.destroy=void 0,o=n;var I=a,Q=R;try{Q()}catch(ue){qt(o,I,ue)}}}s=s.next}while(s!==u)}}catch(ue){qt(n,n.return,ue)}}function yg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{u0(n,a)}catch(s){qt(e,e.return,s)}}}function bg(e,n,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){qt(e,n,s)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var o=e.stateNode,u=ga(e.memoizedProps,o);(o.ref===null||o.ref.name!==u)&&(o.ref=Cx(u)),s=o.ref;break;case 7:if(e.stateNode===null){var m=new ui(e);_(e.child,!1,mb,m,void 0,void 0),e.stateNode=m}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){qt(e,n,R)}}function Dn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(o){qt(e,n,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){qt(e,n,o)}else a.current=null}function mc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)zx(e.stateNode,n[a])}function Mg(e){for(var n=e.return;n!==null&&(ad(n)&&zx(e.stateNode,n.stateNode),!id(n));)n=n.return}function Gl(e){for(var n=e.return;n!==null&&(ad(n)&&gb(e.stateNode,n.stateNode),!id(n));)n=n.return}function id(e){return e.tag===5||e.tag===3||e.tag===27}function ad(e){return e&&e.tag===7&&e.stateNode!==null}function sd(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(o){qt(e,e.return,o)}}function rd(e,n,a){try{var s=e.stateNode;Qy(s,e.type,a,n),s[G]=n}catch(o){qt(e,e.return,o)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ss(e.type)||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function od(e,n,a,s){var o=e.tag;if(o===5||o===6)o=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(o,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(o),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),mc(e,s),_t=!0;else if(o!==4&&(o===27&&(mc(e,s),s=null,ss(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(od(e,n,a,s),e=e.sibling;e!==null;)od(e,n,a,s),e=e.sibling}function gc(e,n,a,s){var o=e.tag;if(o===5||o===6)o=e.stateNode,n?a.insertBefore(o,n):a.appendChild(o),mc(e,s),_t=!0;else if(o!==4&&(o===27&&(mc(e,s),s=null,ss(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(gc(e,n,a,s),e=e.sibling;e!==null;)gc(e,n,a,s),e=e.sibling}function Tg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,o=n.attributes;o.length;)n.removeAttributeNode(o[0]);Un(n,s,a),n[A]=e,n[G]=a}catch(u){qt(e,e.return,u)}}var xc=!1,ri=null;function Ag(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(xc=!0)}var Zi=null;function Rg(){var e=Zi;return Zi=null,e}var Zn=0;function br(e,n,a,s,o){return Zn=0,wg(e.child,n,a,s,o)}function wg(e,n,a,s,o){for(var u=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(s!==null){var R=jd(m);s.push(R),R.view&&(u=!0)}else u||jd(m).view&&(u=!0);xc=!0,Rx(m,Zn===0?n:n+"_"+Zn,a),Zn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||wg(e.child,n,a,s,o)&&(u=!0));e=e.sibling}return u}function Ki(e,n){for(;e!==null;)e.tag===5?wx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ki(e.child,n)),e=e.sibling}function vc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(vc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(br(e,a,n,null,!1)||Ki(e.child,!1))}e=e.sibling}}function cd(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,o=ga(s,a),u=xa(s.default,a.paired?s.share:s.enter);u!=="none"?br(e,o,u,null,!1)?(vc(e),a.paired||n||Nr(e,s.onEnter)):Ki(e.child,!1):vc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)cd(e,n),e=e.sibling;else vc(e)}function ud(e){if(ri!==null&&ri.size!==0){var n=ri;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var o=n.get(s);if(o!==void 0){var u=xa(a.default,a.share);if(u!=="none"&&(br(e,s,u,null,!1)?(u=e.stateNode,o.paired=u,u.paired=o,Nr(e,a.onShare)):Ki(e.child,!1)),n.delete(s),n.size===0)break}}}ud(e)}e=e.sibling}}}function fd(e){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode),s=ri!==null?ri.get(a):void 0,o=xa(n.default,s!==void 0?n.share:n.exit);o!=="none"&&(br(e,a,o,null,!1)?s!==void 0?(o=e.stateNode,s.paired=o,o.paired=s,ri.delete(a),Nr(e,n.onShare)):Nr(e,n.onExit):Ki(e.child,!1)),ri!==null&&ud(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)fd(e),e=e.sibling;else ri!==null&&ud(e)}function Cg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode);n=xa(n.default,n.update),e.flags&=-5,n!=="none"&&br(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Cg(e);e=e.sibling}}function dd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ki(e.child,!1))}dd(e)}e=e.sibling}}function _c(e){if(e.tag===30)e.stateNode.paired=null,Ki(e.child,!1),dd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_c(e),e=e.sibling;else dd(e)}function Ng(e){for(e=e.child;e!==null;)e.tag===30?Ki(e.child,!1):(e.subtreeFlags&33554432)!==0&&Ng(e),e=e.sibling}function hd(e,n,a,s,o,u,m){for(var R=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Zn<u.length){var Q=u[Zn],ue=jd(I);(Q.view||ue.view)&&(R=!0);var ye;if(ye=(e.flags&4)===0)if(ue.clip)ye=!0;else{ye=Q.rect;var Y=ue.rect;ye=ye.y!==Y.y||ye.x!==Y.x||ye.height!==Y.height||ye.width!==Y.width}ye&&(e.flags|=4),ue.abs?ue=!Q.abs:(Q=Q.rect,ue=ue.rect,ue=Q.height!==ue.height||Q.width!==ue.width),ue&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Rx(I,Zn===0?a:a+"_"+Zn,o),R&&(e.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(I,Zn===0?s:s+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?e.flags|=n.flags&32:hd(e,n.child,a,s,o,u,m)&&(R=!0));n=n.sibling}return R}function Dg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,o=ga(a,s),u=xa(a.default,a.update),m;m=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;Zn=0,o=hd(s,R,o,o,u,m,!1),(e.flags&4)!==0&&o&&Nr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Dg(e);e=e.sibling}}var Tn=!1,Xt=!1,Qi=!1,pd=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,An=null,Ji=!1,Vl=!1,Sc=!1,md=!1;function Ay(e,n,a){if(e=e.containerInfo,Hd=Hr,e=Pm(e),ef(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var R=0,I=-1,Q=-1,ue=0,ye=0,Y=e,se=null;t:for(;;){for(var ze;Y!==s||u!==0&&Y.nodeType!==3||(I=R+u),Y!==m||o!==0&&Y.nodeType!==3||(Q=R+o),Y.nodeType===3&&(R+=Y.nodeValue.length),(ze=Y.firstChild)!==null;)se=Y,Y=ze;for(;;){if(Y===e)break t;if(se===s&&++ue===u&&(I=R),se===m&&++ye===o&&(Q=R),(ze=Y.nextSibling)!==null)break;Y=se,se=Y.parentNode}Y=ze}s=I===-1||Q===-1?null:{start:I,end:Q}}else s=null}s=s||{start:0,end:0}}else s=null;for(Gd={focusedElem:e,selectionRange:s},Hr=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(e=An,a&&(s=e.deletions,s!==null))for(u=0;u<s.length;u++)a&&fd(s[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&Ag(e),yc(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&fd(s),yc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Ag(e),yc(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,An=s):(a&&Cg(e),yc(a))}}ri=null}function yc(e){for(;An!==null;){var n=An,a=e,s=n.alternate,o=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&s!==null){a=void 0,o=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var m=Is(n.type,o);a=u.getSnapshotBeforeUpdate(m,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){qt(n,n.return,R)}}break;case 3:if((o&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Yd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Yd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ga(s.memoizedProps,s.stateNode),o=n.memoizedProps,o=xa(o.default,o.update),o!=="none"&&br(s,a,o,s.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function Lg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),s&4&&Hl(5,a);break;case 1:if($i(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(m){qt(a,a.return,m)}else{var o=Is(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(o,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){qt(a,a.return,m)}}s&64&&yg(a),s&512&&Yi(a,a.return);break;case 3:if($i(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{u0(e,n)}catch(m){qt(a,a.return,m)}}break;case 27:n===null&&s&4&&Tg(a);case 26:case 5:$i(e,a),n===null&&s&4&&sd(a),s&512&&Yi(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),s&4&&Ig(e,a);break;case 13:$i(e,a),s&4&&Bg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=By.bind(null,a),_b(e,a))));break;case 22:if(s=a.memoizedState!==null||Tn,!s){var u=n!==null&&n.memoizedState!==null||Xt;n=Tn,o=Xt,Tn=s,(Xt=u)&&!o?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Li(e,a,s)):$i(e,a),Tn=n,Xt=o}break;case 30:$i(e,a),s&512&&Yi(a,a.return);break;case 7:s&512&&Yi(a,a.return);default:$i(e,a)}}function gd(e,n){for(e=e.child;e!==null;)Og(e,n),e=e.sibling}function Og(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var o=e.stateNode,u=e.memoizedProps.style,m=u!=null&&u.hasOwnProperty("display")?u.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(I){qt(e,e.return,I)}xd(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,_t=!0}catch(I){qt(e,e.return,I)}break;case 18:try{var R=e.stateNode;n?Ax(R,!0):Ax(e.stateNode,!1)}catch(I){qt(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&gd(e,n);break;default:gd(e,n)}}function xd(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=n;switch(a.tag){case 4:Og(a,s);break e;case 22:a.memoizedState===null&&xd(a,s);break e;default:xd(a,s)}}e=e.sibling}}function zg(e){var n=e.alternate;n!==null&&(e.alternate=null,zg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ke(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Kn=!1;function Di(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 26:Xt||Dn(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||Dn(a,n),Gl(a);var s=nn,o=Kn;ss(a.type)&&(nn=a.stateNode,Kn=!1),Di(e,n,a),Hx(a.stateNode,a.type,a.memoizedProps),nn=s,Kn=o;break;case 5:Xt||Dn(a,n),Gl(a);case 6:if(a.tag===6&&Gl(a),s=nn,o=Kn,nn=null,Di(e,n,a),nn=s,Kn=o,nn!==null)if(Kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),_t=!0}catch(u){qt(a,n,u)}else try{nn.removeChild(a.stateNode),_t=!0}catch(u){qt(a,n,u)}break;case 18:nn!==null&&(Kn?(e=nn,Tx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Gr(e)):Tx(nn,a.stateNode));break;case 4:s=nn,o=Kn,nn=a.stateNode.containerInfo,Kn=!0,Di(e,n,a),nn=s,Kn=o;break;case 0:case 11:case 14:case 15:Ja(2,a,n),Xt||Ja(4,a,n),Di(e,n,a);break;case 1:Xt||(Dn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bg(a,n,s)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:Xt=(s=Xt)||a.memoizedState!==null,Di(e,n,a),Xt=s;break;case 30:Dn(a,n),Di(e,n,a);break;case 7:Xt||Dn(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function Ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gr(e)}catch(a){qt(n,n.return,a)}}}function Bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(a){qt(n,n.return,a)}}function Ry(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ug),n;default:throw Error(r(435,e.tag))}}function bc(e,n){var a=Ry(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var o=Fy.bind(null,e,s);s.then(o,o)}})}function Vn(e,n,a){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],m=e,R=n,I=R;e:for(;I!==null;){switch(I.tag){case 27:if(ss(I.type)){nn=I.stateNode,Kn=!1;break e}break;case 5:nn=I.stateNode,Kn=!1;break e;case 3:case 4:nn=I.stateNode.containerInfo,Kn=!0;break e}I=I.return}if(nn===null)throw Error(r(160));Pg(m,R,u),nn=null,Kn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,e,a),n=n.sibling}var Ui=null;function Fg(e,n,a){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var m=s[u];m.ref.impl=m.nextImpl}Vn(n,e,a),kn(e),o&4&&(Ja(3,e,e.return),Hl(3,e),Ja(5,e,e.return));break;case 1:Vn(n,e,a),kn(e),o&512&&(Xt||s===null||Dn(s,s.return)),o&64&&Tn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ui,Vn(n,e,a),kn(e),o&512&&(Xt||s===null||Dn(s,s.return)),o&4)if(o=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(Tn)e.stateNode=bx(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,o=u.ownerDocument||u;t:switch(n){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Oe]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(n),o.head.insertBefore(s,o.querySelector("head > title"))),Un(s,n,a),s[A]=e,vt(s),n=s;break e;case"link":if(u=Wx("link","href",o).get(n+(a.href||""))){for(m=0;m<u.length;m++)if(s=u[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(m,1);break t}}s=o.createElement(n),Un(s,n,a),o.head.appendChild(s);break;case"meta":if(u=Wx("meta","content",o).get(n+(a.content||""))){for(m=0;m<u.length;m++)if(s=u[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(m,1);break t}}s=o.createElement(n),Un(s,n,a),o.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=e,vt(s),n=s}e.stateNode=n}else Tn||th(u,e.type,e.stateNode);else e.stateNode=jx(u,a,e.memoizedProps);else o!==a?(o===null?(n=s.stateNode,n===null||Xt||n.parentNode.removeChild(n)):o.count--,a===null?Tn||th(u,e.type,e.stateNode):jx(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&rd(e,e.memoizedProps,s.memoizedProps);break;case 27:Vn(n,e,a),kn(e),o&512&&(Xt||s===null||Dn(s,s.return)),s!==null&&o&4&&rd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(u=Qi,Qi=!1,Vn(n,e,a),Qi=u,kn(e),o&512&&(Xt||s===null||Dn(s,s.return)),e.flags&32){n=e.stateNode;try{ar(n,""),_t=!0}catch(ue){qt(e,e.return,ue)}}o&4&&e.stateNode!=null&&(n=e.memoizedProps,rd(e,n,s!==null?s.memoizedProps:n)),o&1024&&(pd=!0);break;case 6:if(Vn(n,e,a),kn(e),o&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,_t=!0}catch(ue){qt(e,e.return,ue)}}break;case 3:if(_t=!1,Ic=null,u=Ui,Ui=Ql(n.containerInfo),Vn(n,e,a),Ui=u,kn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(ue){qt(e,e.return,ue)}pd&&(pd=!1,Hg(e)),_t=!1;break;case 4:o=Qi,Qi=Tn,s=Gt(),u=Ui,Ui=Ql(e.stateNode.containerInfo),Vn(n,e,a),kn(e),Ui=u,_t&&Vl&&(Sc=!0),_t=s,Qi=o;break;case 12:Vn(n,e,a),kn(e);break;case 31:Vn(n,e,a),kn(e),o&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,bc(e,n)));break;case 13:Vn(n,e,a),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Tc=ke()),o&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,bc(e,n)));break;case 22:u=e.memoizedState!==null,m=s!==null&&s.memoizedState!==null;var R=Tn,I=Xt,Q=Qi;Tn=R||u,Qi=Q||u,Xt=I||m,Vn(n,e,a),Xt=I,Qi=Q,Tn=R,kn(e),o&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||m||Tn||Xt||(n=m||Xt,a=Tn,s=Xt,Tn=u||Tn,Xt=n,$a(e,2),Tn=a,Xt=s),!u&&Qi||gd(e,u)),o&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bc(e,a))));break;case 19:Vn(n,e,a),kn(e),o&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,bc(e,n)));break;case 30:o&512&&(Xt||s===null||Dn(s,s.return)),o=Gt(),u=Vl,m=(a&335544064)===a,R=e.memoizedProps,Vl=m&&xa(R.default,R.update)!=="none",Vn(n,e,a),kn(e),m&&s!==null&&_t&&(e.flags|=4),Vl=u,_t=o;break;case 21:break;case 7:o&512&&(Xt||s===null||Dn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Vn(n,e,a),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Eg(s)){a=s;break}s=s.return}s=null;for(var o=e.return;o!==null;){if(ad(o)){var u=o.stateNode;s===null?s=[u]:s.push(u)}if(id(o))break;o=o.return}var m=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,I=ld(e);gc(e,I,R,m);break;case 5:var Q=a.stateNode;a.flags&32&&(ar(Q,""),a.flags&=-33);var ue=ld(e);gc(e,ue,Q,m);break;case 3:case 4:var ye=a.stateNode.containerInfo,Y=ld(e);od(e,Y,ye,m);break;default:throw Error(r(161))}}catch(se){qt(e,e.return,se)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Hg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hr=!0,n.reset(),Hr=!1),e=e.sibling}}function Mr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Gg(n,e),n=n.sibling;else Dg(n)}function Gg(e,n){var a=e.alternate;if(a===null)cd(e,!1);else switch(e.tag){case 3:if(md=Ji=!1,Rg(),Mr(n,e),!Ji&&!Sc){if(e=Zi,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var o=e[s+1];wx(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),md=!0}Zi=null;break;case 5:Mr(n,e);break;case 4:s=Ji,Ji=!1,Mr(n,e),Ji&&(Sc=!0),Ji=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?cd(e,!1):Mr(n,e));break;case 30:s=Ji,o=Rg(),Ji=!1,Mr(n,e),Ji&&(e.flags|=4);var u=e.memoizedProps,m=e.stateNode;n=ga(u,m),m=ga(a.memoizedProps,m);var R=xa(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Zn=0,n=hd(e,a,n,m,R,u,!0),Zn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Nr(e,e.memoizedProps.onUpdate),Zi=o):o!==null&&(o.push.apply(o,Zi),Zi=o),Ji=(e.flags&32)!==0?!0:s;break;default:Mr(n,e)}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lg(e,n.alternate,n),n=n.sibling}function $a(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),$a(a,s);break;case 1:Dn(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&bg(a,a.return,o),$a(a,s);break;case 27:(s&2)!==0&&Hx(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||Gl(a),$a(a,s);break;case 6:Gl(a);break;case 26:Dn(a,a.return),o=a.stateNode,a.memoizedState!==null||o===null||Xt||o.parentNode.removeChild(o),$a(a,s);break;case 22:a.memoizedState===null&&$a(a,s);break;case 30:Dn(a,a.return),$a(a,s);break;case 7:Dn(a,a.return);default:$a(a,s)}e=e.sibling}}function Li(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,o=e,u=n,m=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Li(o,u,a),Hl(4,u);break;case 1:if(Li(o,u,a),s=u,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(ue){qt(s,s.return,ue)}if(s=u,o=s.updateQueue,o!==null){var I=s.stateNode;try{var Q=o.shared.hiddenCallbacks;if(Q!==null)for(o.shared.hiddenCallbacks=null,o=0;o<Q.length;o++)c0(Q[o],I)}catch(ue){qt(s,s.return,ue)}}R&&m&64&&yg(u),Yi(u,u.return);break;case 27:(a&2)!==0&&Tg(u);case 5:u.tag!==5&&u.tag!==27||Mg(u),Li(o,u,a),R&&s===null&&m&4&&sd(u),Yi(u,u.return);break;case 6:Mg(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||Tn||th(Ql(I.ownerDocument),u.type,I),Li(o,u,a),R&&s===null&&m&4&&sd(u),Yi(u,u.return);break;case 12:Li(o,u,a);break;case 31:Li(o,u,a),R&&m&4&&Ig(o,u);break;case 13:Li(o,u,a),R&&m&4&&Bg(o,u);break;case 22:u.memoizedState===null&&Li(o,u,a),Yi(u,u.return);break;case 30:Li(o,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:Li(o,u,a)}n=n.sibling}}function vd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Rl(a))}function _d(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rl(e))}function Ei(e,n,a,s){var o=(a&335544064)===a;if(n.subtreeFlags&(o?10262:10256))for(n=n.child;n!==null;)Vg(e,n,a,s),n=n.sibling;else o&&Ng(n)}function Vg(e,n,a,s){var o=(a&335544064)===a;o&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_c(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,s),u&2048&&Hl(9,n);break;case 1:Ei(e,n,a,s);break;case 3:Ei(e,n,a,s),o&&md&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Rl(u)));break;case 12:if(u&2048){Ei(e,n,a,s),u=n.stateNode;try{var m=n.memoizedProps,R=m.id,I=m.onPostCommit;typeof I=="function"&&I(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){qt(n,n.return,Q)}}else Ei(e,n,a,s);break;case 31:Ei(e,n,a,s);break;case 13:Ei(e,n,a,s);break;case 23:break;case 22:m=n.stateNode,R=n.alternate,n.memoizedState!==null?(o&&R!==null&&R.memoizedState===null&&_c(R),m._visibility&2?Ei(e,n,a,s):kl(e,n)):(o&&R!==null&&R.memoizedState!==null&&_c(n),m._visibility&2?Ei(e,n,a,s):(m._visibility|=2,Er(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&vd(R,n);break;case 24:Ei(e,n,a,s),u&2048&&_d(n.alternate,n);break;case 30:o&&(u=n.alternate,u!==null&&(Ki(u.child,!0),Ki(n.child,!0))),Ei(e,n,a,s);break;default:Ei(e,n,a,s)}}function Er(e,n,a,s,o){for(o=o&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,m=n,R=a,I=s,Q=m.flags;switch(m.tag){case 0:case 11:case 15:Er(u,m,R,I,o),Hl(8,m);break;case 23:break;case 22:var ue=m.stateNode;m.memoizedState!==null?ue._visibility&2?Er(u,m,R,I,o):kl(u,m):(ue._visibility|=2,Er(u,m,R,I,o)),o&&Q&2048&&vd(m.alternate,m);break;case 24:Er(u,m,R,I,o),o&&Q&2048&&_d(m.alternate,m);break;default:Er(u,m,R,I,o)}n=n.sibling}}function kl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,o=s.flags;switch(s.tag){case 22:kl(a,s),o&2048&&vd(s.alternate,s);break;case 24:kl(a,s),o&2048&&_d(s.alternate,s);break;default:kl(a,s)}n=n.sibling}}var Bs=8192;function Fs(e,n,a){if(e.subtreeFlags&Bs)for(e=e.child;e!==null;)kg(e,n,a),e=e.sibling}function kg(e,n,a){switch(e.tag){case 26:Fs(e,n,a),e.flags&Bs&&(e.memoizedState!==null?Lb(a,Ui,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Kx(a,e)));break;case 5:Fs(e,n,a),e.flags&Bs&&(e=e.stateNode,(n&335544128)===n&&Kx(a,e));break;case 3:case 4:var s=Ui;Ui=Ql(e.stateNode.containerInfo),Fs(e,n,a),Ui=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Bs,Bs=16777216,Fs(e,n,a),Bs=s):Fs(e,n,a));break;case 30:if((e.flags&Bs)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var o=e.stateNode;o.paired=null,ri===null&&(ri=new Map),ri.set(s,o)}Fs(e,n,a);break;default:Fs(e,n,a)}}function Xg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Wg(s,e)}Xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jg(e),e=e.sibling}function jg(e){switch(e.tag){case 0:case 11:case 15:Xl(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:Xl(e);break;case 12:Xl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Mc(e)):Xl(e);break;default:Xl(e)}}function Mc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,Wg(s,e)}Xg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Mc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Mc(n));break;default:Mc(n)}e=e.sibling}}function Wg(e,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Rl(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else e:for(a=e;An!==null;){s=An;var o=s.sibling,u=s.return;if(zg(s),s===a){An=null;break e}if(o!==null){o.return=u,An=o;break e}An=u}}}var wy={getCacheForType:function(e){var n=wn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(mn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Vt=0,Jt=null,Et=null,wt=0,Wt=0,li=null,es=!1,Tr=!1,Sd=!1,Aa=0,dn=0,ts=0,Hs=0,Ec=0,oi=0,Ar=0,jl=null,Qn=null,yd=!1,Tc=0,qg=0,Ac=1/0,Rc=null,ns=null,rn=0,Oi=null,Gs=null,ea=0,bd=0,Md=null,Yg=null,Rr=null,wr=null,Cr=null,Wl=0,wc=null;function ci(){return(Vt&2)!==0&&wt!==0?wt&-wt:me.T!==null?Ld():Ao()}function Zg(){if(oi===0)if((wt&536870912)===0||St){var e=Ss;Ss<<=1,(Ss&3932160)===0&&(Ss=262144),oi=e}else oi=536870912;return e=Cn.current,e!==null&&(e.flags|=32),oi}function Nr(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Cx(ga(e.memoizedProps,a))),wr===null&&(wr=[]),wr.push(n.bind(null,s))}}function Jn(e,n,a){(e===Jt&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)&&(Dr(e,0),is(e,wt,oi,!1)),ki(e,a),((Vt&2)===0||e!==Jt)&&(e===Jt&&((Vt&2)===0&&(Hs|=a),dn===4&&is(e,wt,oi,!1)),ta(e))}function Kg(e,n,a){if((Vt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ba(e,n),o=s?Uy(e,n):Td(e,n,!0),u=s;do{if(o===0){Tr&&!s&&is(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!Ny(a)){o=Td(e,n,!1),u=!1;continue}if(o===2){if(u=n,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var R=e;o=jl;var I=R.current.memoizedState.isDehydrated;if(I&&(Dr(R,m).flags|=256),m=Td(R,m,!1),m!==2&&m!==6){if(Sd&&!I){R.errorRecoveryDisabledLanes|=u,Hs|=u,o=4;break e}u=Qn,Qn=o,u!==null&&(Qn===null?Qn=u:Qn.push.apply(Qn,u))}o=m}if(u=!1,o!==2)continue}}if(o===1){Dr(e,0),is(e,n,0,!0);break}e:{switch(s=e,u=o,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:is(s,n,oi,!es);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(o=Tc+300-ke(),10<o)){if(is(s,n,oi,!es),ys(s,0,!0)!==0)break e;ea=n,s.timeoutHandle=Xd(Qg.bind(null,s,a,Qn,Rc,yd,n,oi,Hs,Ar,es,u,"Throttled",-0,0),o);break e}Qg(s,a,Qn,Rc,yd,n,oi,Hs,Ar,es,u,null,-0,0)}}break}while(!0);ta(e)}function Qg(e,n,a,s,o,u,m,R,I,Q,ue,ye,Y,se){e.timeoutHandle=-1;var ze=n.subtreeFlags,Qe=(u&335544064)===u;if(ye=null,(Qe||ze&8192||(ze&16785408)===16785408)&&(ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},ri=null,kg(n,u,ye),Qe&&(ze=ye,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(ze.count++,ze.waitingForViewTransition=!0,ze=eo.bind(ze),Qe.finished.then(ze,ze))),ze=(u&62914560)===u?Tc-ke():(u&4194048)===u?qg-ke():0,ze=Ob(ye,ze),ze!==null)){ea=u,e.cancelPendingCommit=ze(sx.bind(null,e,n,u,a,s,o,m,R,I,Q,ue,ye,null,Y,se)),is(e,u,m,!Q);return}sx(e,n,u,a,s,o,m,R,I,Q,ue,ye)}function Ny(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var o=a[s],u=o.getSnapshot;o=o.value;try{if(!ai(u(),o))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function is(e,n,a,s){n=Vi(e,n),n&=~Ec,n&=~Hs,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var o=n;0<o;){var u=31-ft(o),m=1<<u;s[u]=-1,o&=~m}a!==0&&bs(e,a,n)}function Cc(){return(Vt&6)===0?(ql(0),!1):!0}function Ed(){if(Et!==null){if(Wt===0)var e=Et.return;else e=Et,Sa=ws=null,Uf(e),xr=null,Nl=0,e=Et;for(;e!==null;)Sg(e.alternate,e),e=e.return;Et=null}}function Dr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,eb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Ed(),Jt=e,Et=a=va(e.current,null),wt=n,Wt=0,li=null,es=!1,Tr=Ba(e,n),Sd=!1,Ar=oi=Ec=Hs=ts=dn=0,Qn=jl=null,yd=!1,Aa=Vi(e,n),Io(),a}function Jg(e,n){mt=null,me.H=oc,n===gr||n===Yo?(n=s0(),Wt=3):n===_f?(n=s0(),Wt=4):Wt=n===qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,Et===null&&(dn=1,cc(e,Si(n,e.current)))}function $g(){var e=Cn.current;return e===null?!0:(wt&4194048)===wt?zn===null:(wt&62914560)===wt||(wt&536870912)!==0?e===zn:!1}function ex(){var e=me.H;return me.H=oc,e===null?oc:e}function tx(){var e=me.A;return me.A=wy,e}function Nc(){dn=4,es||(wt&4194048)!==wt&&Cn.current!==null||(Tr=!0),(ts&134217727)===0&&(Hs&134217727)===0||Jt===null||is(Jt,wt,oi,!1)}function Td(e,n,a){var s=Vt;Vt|=2;var o=ex(),u=tx();(Jt!==e||wt!==n)&&(Rc=null,Dr(e,n)),n=!1;var m=dn;e:do try{if(Wt!==0&&Et!==null){var R=Et,I=li;switch(Wt){case 8:Ed(),m=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var Q=Wt;if(Wt=0,li=null,Ur(e,R,I,Q),a&&Tr){m=0;break e}break;default:Q=Wt,Wt=0,li=null,Ur(e,R,I,Q)}}Dy(),m=dn;break}catch(ue){Jg(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Sa=ws=null,Vt=s,me.H=o,me.A=u,Et===null&&(Jt=null,wt=0,Io()),m}function Dy(){for(;Et!==null;)nx(Et)}function Uy(e,n){var a=Vt;Vt|=2;var s=ex(),o=tx();Jt!==e||wt!==n?(Rc=null,Ac=ke()+500,Dr(e,n)):Tr=Ba(e,n);e:do try{if(Wt!==0&&Et!==null){n=Et;var u=li;t:switch(Wt){case 1:Wt=0,li=null,Ur(e,n,u,1);break;case 2:case 9:if(i0(u)){Wt=0,li=null,ix(n);break}n=function(){Wt!==2&&Wt!==9||Jt!==e||(Wt=7),ta(e)},u.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:i0(u)?(Wt=0,li=null,ix(n)):(Wt=0,li=null,Ur(e,n,u,7));break;case 5:var m=null;switch(Et.tag){case 26:m=Et.memoizedState;case 5:case 27:var R=Et;if(m?Yx(m):R.stateNode.complete){Wt=0,li=null;var I=R.sibling;if(I!==null)Et=I;else{var Q=R.return;Q!==null?(Et=Q,Dc(Q)):Et=null}break t}}Wt=0,li=null,Ur(e,n,u,5);break;case 6:Wt=0,li=null,Ur(e,n,u,6);break;case 8:Ed(),dn=6;break e;default:throw Error(r(462))}}Ly();break}catch(ue){Jg(e,ue)}while(!0);return Sa=ws=null,me.H=s,me.A=o,Vt=a,Et!==null?0:(Jt=null,wt=0,Io(),dn)}function Ly(){for(;Et!==null&&!Ie();)nx(Et)}function nx(e){var n=vg(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,n===null?Dc(e):Et=n}function ix(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=fg(a,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=fg(a,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:Uf(n);var s=n;s===En&&(St?(ko(s),s.tag===5&&s.stateNode!=null&&(en=s.stateNode)):(ko(s),St=!0));default:Sg(a,n),n=Et=Wm(n,Aa),n=vg(a,n,Aa)}e.memoizedProps=e.pendingProps,n===null?Dc(e):Et=n}function Ur(e,n,a,s){Sa=ws=null,Uf(n),xr=null,Nl=0;var o=n.return;try{if(Sy(e,o,n,a,wt)){dn=1,cc(e,Si(a,e.current)),Et=null;return}}catch(u){if(o!==null)throw Et=o,u;dn=1,cc(e,Si(a,e.current)),Et=null;return}n.flags&32768?(St||s===1?e=!0:Tr||(wt&536870912)!==0?e=!1:(es=e=!0,(s===2||s===9||s===3||s===6)&&(s=Cn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ax(n,e)):Dc(n)}function Dc(e){var n=e;do{if((n.flags&32768)!==0){ax(n,es);return}e=n.return;var a=Ey(n.alternate,n,Aa);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=e}while(n!==null);dn===0&&(dn=5)}function ax(e,n){do{var a=Ty(e.alternate,e);if(a!==null){a.flags&=32767,Et=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Et=e;return}Et=e=a}while(e!==null);dn=6,Et=null}function sx(e,n,a,s,o,u,m,R,I,Q,ue,ye){e.cancelPendingCommit=null;do Uc();while(rn!==0);if((Vt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===Jt&&(Et=Jt=null,wt=0),Gs=n,Oi=e,ea=a,Md=o,Yg=s,Oy(e,n,a,m,R,I,ye)}}function Oy(e,n,a,s,o,u,m){var R=n.lanes|n.childLanes;if(bd=R,R|=rf,To(e,a,R,s,o,u),wr=null,(a&335544064)===a?(Cr=oy(e),s=10262):(Cr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,Hy(Ne,function(){return Cd(),null})):(e.callbackNode=null,e.callbackPriority=0),xc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=me.T,me.T=null,o=Re.p,Re.p=2,u=Vt,Vt|=4;try{Ay(e,n,a)}finally{Vt=u,Re.p=o,me.T=s}}rn=1,xc?Rr=rb(m,e.containerInfo,Cr,Ad,Rd,Py,wd,Cd,zy):(Ad(),Rd(),wd())}function zy(e){if(rn!==0){var n=Oi.onRecoverableError;n(e,{componentStack:null})}}function Py(){rn===3&&(rn=0,Gg(Gs,Oi),rn=4)}function Ad(){if(rn===1){rn=0;var e=Oi,n=Gs,a=ea,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=me.T,me.T=null;var o=Re.p;Re.p=2;var u=Vt;Vt|=4;try{Vl=Sc=!1,Fg(n,e,a),a=Gd;var m=Pm(e.containerInfo),R=a.focusedElem,I=a.selectionRange;if(m!==R&&R&&R.ownerDocument&&zm(R.ownerDocument.documentElement,R)){if(I!==null&&ef(R)){var Q=I.start,ue=I.end;if(ue===void 0&&(ue=Q),"selectionStart"in R)R.selectionStart=Q,R.selectionEnd=Math.min(ue,R.value.length);else{var ye=R.ownerDocument||document,Y=ye&&ye.defaultView||window;if(Y.getSelection){var se=Y.getSelection(),ze=R.textContent.length,Qe=Math.min(I.start,ze),gt=I.end===void 0?Qe:Math.min(I.end,ze);!se.extend&&Qe>gt&&(m=gt,gt=Qe,Qe=m);var K=Om(R,Qe),V=Om(R,gt);if(K&&V&&(se.rangeCount!==1||se.anchorNode!==K.node||se.anchorOffset!==K.offset||se.focusNode!==V.node||se.focusOffset!==V.offset)){var ne=ye.createRange();ne.setStart(K.node,K.offset),se.removeAllRanges(),Qe>gt?(se.addRange(ne),se.extend(V.node,V.offset)):(ne.setEnd(V.node,V.offset),se.addRange(ne))}}}}for(ye=[],se=R;se=se.parentNode;)se.nodeType===1&&ye.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Hr=!!Hd,Gd=Hd=null}finally{Vt=u,Re.p=o,me.T=s}}e.current=n,rn=2}}function Rd(){if(rn===2){rn=0;var e=Oi,n=Gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=me.T,me.T=null;var s=Re.p;Re.p=2;var o=Vt;Vt|=4;try{Lg(e,n.alternate,n)}finally{Vt=o,Re.p=s,me.T=a}}rn=3}}function wd(){if(rn===4||rn===3){rn=0;var e=Rr;Rr=null,Pe();var n=Oi,a=Gs,s=ea,o=Yg,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?rn=5:(rn=0,Gs=Oi=null,rx(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ns=null),ml(s),a=a.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot($e,a,void 0,(a.current.flags&128)===128)}catch{}if(o!==null){a=me.T,u=Re.p,Re.p=2,me.T=null;try{for(var m=n.onRecoverableError,R=0;R<o.length;R++){var I=o[R];m(I.value,{componentStack:I.stack})}}finally{me.T=a,Re.p=u}}if(o=wr,m=Cr,Cr=null,o!==null&&(wr=null,m===null&&(m=[]),e!==null))for(I=0;I<o.length;I++)a=(0,o[I])(m),a!==void 0&&e.finished.finally(a);(ea&3)!==0&&Uc(),ta(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===wc?Wl++:(Wl=0,wc=n):(Wl=0,wc=null),ql(0)}}function rx(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Rl(n)))}function Uc(){return Rr!==null&&(Rr.skipTransition(),Rr=null),Ad(),Rd(),wd(),Cd()}function Cd(){if(rn!==5)return!1;var e=Oi,n=bd;bd=0;var a=ml(ea),s=me.T,o=Re.p;try{Re.p=32>a?32:a,me.T=null,a=Md,Md=null;var u=Oi,m=ea;if(rn=0,Gs=Oi=null,ea=0,(Vt&6)!==0)throw Error(r(331));var R=Vt;if(Vt|=4,jg(u.current),Vg(u,u.current,m,a),Vt=R,ql(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot($e,u)}catch{}return!0}finally{Re.p=o,me.T=s,rx(e,n)}}function lx(e,n,a){n=Si(a,n),n=Wf(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(ki(e,2),ta(e))}function qt(e,n,a){if(e.tag===3)lx(e,e,a);else for(;n!==null;){if(n.tag===3){lx(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ns===null||!ns.has(s))){e=Si(a,e),a=ig(2),s=Ya(n,a,2),s!==null&&(ag(a,s,n,e),ki(s,2),ta(s));break}}n=n.return}}function Nd(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Cy;var o=new Set;s.set(n,o)}else o=s.get(n),o===void 0&&(o=new Set,s.set(n,o));o.has(a)||(Sd=!0,o.add(a),e=Iy.bind(null,e,n,a),n.then(e,e))}function Iy(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(wt&a)===a&&((dn===4||dn===3&&(wt&62914560)===wt&&300>ke()-Tc)&&(Vt&2)===0?Dr(e,0):Ec|=a,Ar===wt&&(Ar=0)),ta(e)}function ox(e,n){n===0&&(n=fl()),e=Ts(e,n),e!==null&&(ki(e,n),ta(e))}function By(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ox(e,a)}function Fy(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ox(e,a)}function Hy(e,n){return De(e,n)}var Lr=null,Or=null,Dd=!1,Lc=!1,Ud=!1,as=0;function ta(e){e!==Or&&e.next===null&&(Or===null?Lr=Or=e:Or=Or.next=e),Lc=!0,Dd||(Dd=!0,Vy())}function ql(e,n){if(!Ud&&Lc){Ud=!0;do for(var a=!1,s=Lr;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var u=0;else{var m=s.suspendedLanes,R=s.pingedLanes;u=(1<<31-ft(42|e)+1)-1,u&=o&~(m&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,dx(s,u))}else u=wt,u=ys(s,s===Jt?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ba(s,u)||(a=!0,dx(s,u));s=s.next}while(a);Ud=!1}}function Gy(){cx()}function cx(){Lc=Dd=!1;var e=0;as!==0&&$y()&&(e=as);for(var n=ke(),a=null,s=Lr;s!==null;){var o=s.next,u=ux(s,n);u===0?(s.next=null,a===null?Lr=o:a.next=o,o===null&&(Or=a)):(a=s,(e!==0||(u&3)!==0)&&(Lc=!0)),s=o}rn!==0&&rn!==5||ql(e),as!==0&&(as=0)}function ux(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-ft(u),R=1<<m,I=o[m];I===-1?((R&a)===0||(R&s)!==0)&&(o[m]=ul(R,n)):I<=n&&(e.expiredLanes|=R),u&=~R}if(n=Jt,a=wt,a=ys(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Wt===2||Wt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&et(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ba(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&et(s),ml(a)){case 2:case 8:a=X;break;case 32:a=Ne;break;case 268435456:a=Le;break;default:a=Ne}return s=fx.bind(null,e),a=De(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&et(s),e.callbackPriority=2,e.callbackNode=null,2}function fx(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Uc()&&e.callbackNode!==a)return null;var s=wt;return s=ys(e,e===Jt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Kg(e,s,n),ux(e,ke()),e.callbackNode!=null&&e.callbackNode===a?fx.bind(null,e):null)}function dx(e,n){if(Uc())return null;Kg(e,n,!0)}function Vy(){tb(function(){(Vt&6)!==0?De(ut,Gy):cx()})}function Ld(){if(as===0){var e=Ds;e===0&&(e=tr,tr<<=1,(tr&261888)===0&&(tr=256)),as=e}return as}function hx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Co(e)}function ky(e,n,a,s,o){if(n==="submit"&&a&&a.stateNode===o){var u=hx((o[G]||null).action),m=s.submitter;m&&(n=(n=m[G]||null)?hx(n.formAction):m.getAttribute("formAction"),n!==null&&(u=n,m=null));var R=new Lo("action","action",null,s,o);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(as!==0){var I=new FormData(o,m);Gf(a,{pending:!0,data:I,method:o.method,action:u},null,I)}}else typeof u=="function"&&(R.preventDefault(),I=new FormData(o,m),Gf(a,{pending:!0,data:I,method:o.method,action:u},u,I))},currentTarget:o}]})}}for(var Od=0;Od<sf.length;Od++){var zd=sf[Od],Xy=zd.toLowerCase(),jy=zd[0].toUpperCase()+zd.slice(1);Ni(Xy,"on"+jy)}Ni(Fm,"onAnimationEnd"),Ni(Hm,"onAnimationIteration"),Ni(Gm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(ey,"onTransitionRun"),Ni(ty,"onTransitionStart"),Ni(ny,"onTransitionCancel"),Ni(Vm,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function px(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],o=s.event;s=s.listeners;e:{var u=void 0;if(n)for(var m=s.length-1;0<=m;m--){var R=s[m],I=R.instance,Q=R.currentTarget;if(R=R.listener,I!==u&&o.isPropagationStopped())break e;u=R,o.currentTarget=Q;try{u(o)}catch(ue){Po(ue)}o.currentTarget=null,u=I}else for(m=0;m<s.length;m++){if(R=s[m],I=R.instance,Q=R.currentTarget,R=R.listener,I!==u&&o.isPropagationStopped())break e;u=R,o.currentTarget=Q;try{u(o)}catch(ue){Po(ue)}o.currentTarget=null,u=I}}}}function Tt(e,n){var a=n[ie];a===void 0&&(a=n[ie]=new Set);var s=e+"__bubble";a.has(s)||(mx(n,e,2,!1),a.add(s))}function Pd(e,n,a){var s=0;n&&(s|=4),mx(a,e,s,n)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Id(e){if(!e[Oc]){e[Oc]=!0,kt.forEach(function(a){a!=="selectionchange"&&(Wy.has(a)||Pd(a,!1,e),Pd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Oc]||(n[Oc]=!0,Pd("selectionchange",!1,n))}}function mx(e,n,a,s){switch(av(n)){case 2:var o=Bb;break;case 8:o=Fb;break;default:o=ih}a=o.bind(null,n,a,e),o=void 0,!Xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(n,a,{capture:!0,passive:o}):e.addEventListener(n,a,!0):o!==void 0?e.addEventListener(n,a,{passive:o}):e.addEventListener(n,a,!1)}function Bd(e,n,a,s,o){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var R=s.stateNode.containerInfo;if(R===o)break;if(m===4)for(m=s.return;m!==null;){var I=m.tag;if((I===3||I===4)&&m.stateNode.containerInfo===o)return;m=m.return}for(;R!==null;){if(m=rt(R),m===null)return;if(I=m.tag,I===5||I===6||I===26||I===27){s=u=m;continue e}R=R.parentNode}}s=s.return}mm(function(){var Q=u,ue=Vu(a),ye=[];e:{var Y=km.get(e);if(Y!==void 0){var se=Lo,ze=e;switch(e){case"keypress":if(Do(a)===0)break e;case"keydown":case"keyup":se=NS;break;case"focusin":ze="focus",se=Yu;break;case"focusout":ze="blur",se=Yu;break;case"beforeblur":case"afterblur":se=Yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=vS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=zS;break;case Fm:case Hm:case Gm:se=yS;break;case Vm:se=IS;break;case"scroll":case"scrollend":se=gS;break;case"wheel":se=FS;break;case"copy":case"cut":case"paste":se=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Sm;break;case"submit":se=LS;break;case"toggle":case"beforetoggle":se=GS}var Qe=(n&4)!==0,gt=!Qe&&(e==="scroll"||e==="scrollend"),K=Qe?Y!==null?Y+"Capture":null:Y;Qe=[];for(var V=Q,ne;V!==null;){var Se=V;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||K===null||(Se=gl(V,K),Se!=null&&Qe.push(Zl(V,Se,ne))),gt)break;V=V.return}0<Qe.length&&(Y=new se(Y,ze,null,a,ue),ye.push({event:Y,listeners:Qe}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",se&&a!==Gu&&(ze=a.relatedTarget||a.fromElement)&&(rt(ze)||ze[fe]))break e;(Y||se)&&(ze=ue.window===ue?ue:(se=ue.ownerDocument)?se.defaultView||se.parentWindow:window,Y?(se=a.relatedTarget||a.toElement,Y=Q,se=se?rt(se):null,se!==null&&(gt=f(se),Qe=se.tag,se!==gt||Qe!==5&&Qe!==27&&Qe!==6)&&(se=null)):(Y=null,se=Q),Y!==se&&(Qe=vm,Se="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Sm,Se="onPointerLeave",K="onPointerEnter",V="pointer"),gt=Y==null?ze:je(Y),ne=se==null?ze:je(se),ze=new Qe(Se,V+"leave",Y,a,ue),ze.target=gt,ze.relatedTarget=ne,Se=null,rt(ue)===Q&&(Qe=new Qe(K,V+"enter",se,a,ue),Qe.target=ne,Qe.relatedTarget=gt,Se=Qe),gt=Se,Qe=Y&&se?L(Y,se,qy):null,Y!==null&&gx(ye,ze,Y,Qe,!1),se!==null&&gt!==null&&gx(ye,gt,se,Qe,!0)))}e:{if(Y=Q?je(Q):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var We=wm;else if(Am(Y))if(Cm)We=QS;else{We=ZS;var Ct=YS}else se=Y.nodeName,!se||se.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&Hu(Q.elementType)&&(We=wm):We=KS;if(We&&(We=We(e,Q))){Rm(ye,We,a,ue);break e}Ct&&Ct(e,Y,Q)}switch(Ct=Q?je(Q):window,e){case"focusin":(Am(Ct)||Ct.contentEditable==="true")&&(or=Ct,tf=Q,El=null);break;case"focusout":El=tf=or=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Im(ye,a,ue);break;case"selectionchange":if($S)break;case"keydown":case"keyup":Im(ye,a,ue)}var tt;if(Ku)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else lr?Em(e,a)&&(at="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(ym&&a.locale!=="ko"&&(lr||at!=="onCompositionStart"?at==="onCompositionEnd"&&lr&&(tt=gm()):(Fa=ue,ju="value"in Fa?Fa.value:Fa.textContent,lr=!0)),Ct=zc(Q,at),0<Ct.length&&(at=new _m(at,e,null,a,ue),ye.push({event:at,listeners:Ct}),tt?at.data=tt:(tt=Tm(a),tt!==null&&(at.data=tt)))),(tt=kS?XS(e,a):jS(e,a))&&(at=zc(Q,"onBeforeInput"),0<at.length&&(Ct=new _m("onBeforeInput","beforeinput",null,a,ue),ye.push({event:Ct,listeners:at}),Ct.data=tt)),ky(ye,e,Q,a,ue)}px(ye,n)})}function Zl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function zc(e,n){for(var a=n+"Capture",s=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=gl(e,a),o!=null&&s.unshift(Zl(e,o,u)),o=gl(e,n),o!=null&&s.push(Zl(e,o,u))),e.tag===3)return s;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gx(e,n,a,s,o){for(var u=n._reactName,m=[];a!==null&&a!==s;){var R=a,I=R.alternate,Q=R.stateNode;if(R=R.tag,I!==null&&I===s)break;R!==5&&R!==26&&R!==27||Q===null||(I=Q,o?(Q=gl(a,u),Q!=null&&m.unshift(Zl(a,Q,I))):o||(Q=gl(a,u),Q!=null&&m.push(Zl(a,Q,I)))),a=a.return}m.length!==0&&e.push({event:n,listeners:m})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function xx(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Zy,"")}function vx(e,n){return n=xx(n),xx(e)===n}function Yt(e,n,a,s,o,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ar(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ar(e,""+s);else return;break;case"className":ii(e,"class",s);break;case"tabIndex":ii(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,a,s);break;case"style":hm(e,s,u);return;case"data":if(n!=="object"){ii(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Co(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Yt(e,n,"name",o.name,o,null),Yt(e,n,"formEncType",o.formEncType,o,null),Yt(e,n,"formMethod",o.formMethod,o,null),Yt(e,n,"formTarget",o.formTarget,o,null)):(Yt(e,n,"encType",o.encType,o,null),Yt(e,n,"method",o.method,o,null),Yt(e,n,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Co(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ji);return;case"onScroll":s!=null&&Tt("scroll",e);return;case"onScrollEnd":s!=null&&Tt("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Co(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),$t(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$t(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=pS.get(a)||a,$t(e,a,s);else return}_t=!0}function Fd(e,n,a,s,o,u){switch(a){case"style":hm(e,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(o.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")ar(e,s);else if(typeof s=="number"||typeof s=="bigint")ar(e,""+s);else return;break;case"onScroll":s!=null&&Tt("scroll",e);return;case"onScrollEnd":s!=null&&Tt("scrollend",e);return;case"onClick":s!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),u=a.slice(2,o?a.length-7:void 0),n=e[G]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,o),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,s,o);break e}_t=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):$t(e,a,s)}return}_t=!0}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var s=!1,o=!1,u;for(u in a)if(a.hasOwnProperty(u)){var m=a[u];if(m!=null)switch(u){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(e,n,u,m,a,null)}}o&&Yt(e,n,"srcSet",a.srcSet,a,null),s&&Yt(e,n,"src",a.src,a,null);return;case"input":Tt("invalid",e);var R=u=m=o=null,I=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":o=ue;break;case"type":m=ue;break;case"checked":I=ue;break;case"defaultChecked":Q=ue;break;case"value":u=ue;break;case"defaultValue":R=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Yt(e,n,s,ue,a,null)}}cm(e,u,R,I,Q,m,o,!1);return;case"select":Tt("invalid",e),s=m=u=null;for(o in a)if(a.hasOwnProperty(o)&&(R=a[o],R!=null))switch(o){case"value":u=R;break;case"defaultValue":m=R;break;case"multiple":s=R;default:Yt(e,n,o,R,a,null)}n=u,a=m,e.multiple=!!s,n!=null?ir(e,!!s,n,!1):a!=null&&ir(e,!!s,a,!0);return;case"textarea":Tt("invalid",e),u=o=s=null;for(m in a)if(a.hasOwnProperty(m)&&(R=a[m],R!=null))switch(m){case"value":s=R;break;case"defaultValue":o=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Yt(e,n,m,R,a,null)}fm(e,s,o,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Yt(e,n,I,s,a,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(s=0;s<Yl.length;s++)Tt(Yl[s],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(e,n,Q,s,a,null)}return;default:if(Hu(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&Fd(e,n,ue,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Yt(e,n,R,s,a,null))}var Ky={};function Qy(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,m=null,R=null,I=null,Q=null,ue=null;for(se in a){var ye=a[se];if(a.hasOwnProperty(se)&&ye!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":I=ye;default:s.hasOwnProperty(se)||Yt(e,n,se,null,s,ye)}}for(var Y in s){var se=s[Y];if(ye=a[Y],s.hasOwnProperty(Y)&&(se!=null||ye!=null))switch(Y){case"type":se!==ye&&(_t=!0),u=se;break;case"name":se!==ye&&(_t=!0),o=se;break;case"checked":se!==ye&&(_t=!0),Q=se;break;case"defaultChecked":se!==ye&&(_t=!0),ue=se;break;case"value":se!==ye&&(_t=!0),m=se;break;case"defaultValue":se!==ye&&(_t=!0),R=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==ye&&Yt(e,n,Y,se,s,ye)}}Bu(e,m,R,I,Q,ue,u,o);return;case"select":se=m=R=Y=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":se=I;default:s.hasOwnProperty(u)||Yt(e,n,u,null,s,I)}for(o in s)if(u=s[o],I=a[o],s.hasOwnProperty(o)&&(u!=null||I!=null))switch(o){case"value":u!==I&&(_t=!0),Y=u;break;case"defaultValue":u!==I&&(_t=!0),R=u;break;case"multiple":u!==I&&(_t=!0),m=u;default:u!==I&&Yt(e,n,o,u,s,I)}n=R,a=m,s=se,Y!=null?ir(e,!!a,Y,!1):!!s!=!!a&&(n!=null?ir(e,!!a,n,!0):ir(e,!!a,a?[]:"",!1));return;case"textarea":se=Y=null;for(R in a)if(o=a[R],a.hasOwnProperty(R)&&o!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(e,n,R,null,s,o)}for(m in s)if(o=s[m],u=a[m],s.hasOwnProperty(m)&&(o!=null||u!=null))switch(m){case"value":o!==u&&(_t=!0),Y=o;break;case"defaultValue":o!==u&&(_t=!0),se=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==u&&Yt(e,n,m,o,s,u)}um(e,Y,se);return;case"option":for(var ze in a)if(Y=a[ze],a.hasOwnProperty(ze)&&Y!=null&&!s.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Yt(e,n,ze,null,s,Y)}for(I in s)if(Y=s[I],se=a[I],s.hasOwnProperty(I)&&Y!==se&&(Y!=null||se!=null))switch(I){case"selected":Y!==se&&(_t=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Yt(e,n,I,Y,s,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)Y=a[Qe],a.hasOwnProperty(Qe)&&Y!=null&&!s.hasOwnProperty(Qe)&&Yt(e,n,Qe,null,s,Y);for(Q in s)if(Y=s[Q],se=a[Q],s.hasOwnProperty(Q)&&Y!==se&&(Y!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,n));break;default:Yt(e,n,Q,Y,s,se)}return;default:if(Hu(n)){for(var gt in a)Y=a[gt],a.hasOwnProperty(gt)&&Y!==void 0&&!s.hasOwnProperty(gt)&&Fd(e,n,gt,void 0,s,Y);for(ue in s)Y=s[ue],se=a[ue],!s.hasOwnProperty(ue)||Y===se||Y===void 0&&se===void 0||Fd(e,n,ue,Y,s,se);return}}for(var K in a)Y=a[K],a.hasOwnProperty(K)&&Y!=null&&!s.hasOwnProperty(K)&&Yt(e,n,K,null,s,Y);for(ye in s)Y=s[ye],se=a[ye],!s.hasOwnProperty(ye)||Y===se||Y==null&&se==null||Yt(e,n,ye,Y,s,se)}function _x(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var o=a[s],u=o.transferSize,m=o.initiatorType,R=o.duration;if(u&&R&&_x(m)){for(m=0,R=o.responseEnd,s+=1;s<a.length;s++){var I=a[s],Q=I.startTime;if(Q>R)break;var ue=I.transferSize,ye=I.initiatorType;ue&&_x(ye)&&(I=I.responseEnd,m+=ue*(I<R?1:(R-Q)/(I-Q)))}if(--s,n+=8*(u+m)/(o.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hd=null,Gd=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Sx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bx(e,n,a,s){return a=Kl(a).createElement(e),a[A]=s,a[G]=n,Un(a,e,n),vt(a),a}function Vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kd=null;function $y(){var e=window.event;return e&&e.type==="popstate"?e===kd?!1:(kd=e,!0):(kd=null,!1)}var Xd=typeof setTimeout=="function"?setTimeout:void 0,eb=typeof clearTimeout=="function"?clearTimeout:void 0,Mx=typeof Promise=="function"?Promise:void 0,Ex=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xd,tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Mx<"u"?function(e){return Mx.resolve(null).then(e).catch(nb)}:Xd;function nb(e){setTimeout(function(){throw e})}function ss(e){return e==="head"}function Tx(e,n){var a=n,s=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(o),Gr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Jd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Jd(a);for(var u=a.firstChild;u;){var m=u.nextSibling,R=u.nodeName;u[Oe]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=m}}else a==="body"&&Jd(e.ownerDocument.body);a=o}while(a);Gr(n)}function Ax(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Rx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var o=s=0;o<n.length;o++){var u=n[o];0<u.width&&0<u.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function wx(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ib(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function jd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return ib(n,a,e)}function ab(e){return e.documentElement.clientHeight}function sb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function rb(e,n,a,s,o,u,m,R,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var ue=Q.startViewTransition({update:function(){var Y=Q.defaultView,se=Y.navigation&&Y.navigation.transition,ze=Q.fonts.status;s();var Qe=[];if(ze==="loaded"&&(ab(Q),Q.fonts.status==="loading"&&Qe.push(Q.fonts.ready)),ze=Qe.length,e!==null)for(var gt=e.suspenseyImages,K=0,V=0;V<gt.length;V++){var ne=gt[V];if(!ne.complete){var Se=ne.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<Y.innerHeight&&Se.left<Y.innerWidth){if(K+=Zx(ne),K>Bc){Qe.length=ze;break}ne=new Promise(sb.bind(ne)),Qe.push(ne)}}}if(0<Qe.length)return Y=Promise.race([Promise.all(Qe),new Promise(function(We){return setTimeout(We,500)})]).then(o,o),(se?Promise.allSettled([se.finished,Y]):Y).then(u,u);if(o(),se)return se.finished.then(u,u);u()},types:a});Q.__reactViewTransition=ue;var ye=[];return ue.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),se=0;se<Y.length;se++){var ze=Y[se],Qe=ze.effect,gt=Qe.pseudoElement;if(gt!=null&&gt.startsWith("::view-transition")){ye.push(ze),ze=Qe.getKeyframes();for(var K=gt=void 0,V=!0,ne=0;ne<ze.length;ne++){var Se=ze[ne],We=Se.width;if(gt===void 0)gt=We;else if(gt!==We){V=!1;break}if(We=Se.height,K===void 0)K=We;else if(K!==We){V=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}V&&gt!==void 0&&K!==void 0&&(Qe.setKeyframes(ze),V=getComputedStyle(Qe.target,Qe.pseudoElement),V.width!==gt||V.height!==K)&&(V=ze[0],V.width=gt,V.height=K,V=ze[ze.length-1],V.width=gt,V.height=K,Qe.setKeyframes(ze))}}m()},function(Y){Q.__reactViewTransition===ue&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&I(Y)}finally{s(),o(),m()}}),ue.finished.finally(function(){for(var Y=0;Y<ye.length;Y++)ye[Y].cancel();Q.__reactViewTransition===ue&&(Q.__reactViewTransition=null),R()}),ue}catch{return s(),o(),m(),null}}function Vs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Vs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:U({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Vs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],o=0;o<a.length;o++){var u=a[o].effect;u!==null&&u.target===e&&u.pseudoElement===n&&s.push(a[o])}return s},Vs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Cx(e){return{name:e,group:new Vs("group",e),imagePair:new Vs("image-pair",e),old:new Vs("old",e),new:new Vs("new",e)}}function ui(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(e,n,a){var s=null,o=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Dx(u,e,n,a)===-1){var m=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(I){m.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(o=m.removeEventListener.bind(m,e,n,a),s.addEventListener("abort",o,{once:!0}),o=s.removeEventListener.bind(s,"abort",o)),s=zr(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:o}),_(this._fragmentFiber.child,!1,lb,e,R,s)}this._eventListeners=u}};function lb(e,n,a,s){return b(e).addEventListener(n,a,s),!1}ui.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=Dx(s,e,n,a),n!==-1)){var o=s[n];a=o.attachedListener;var u=o.cleanup;o=zr(o.optionsOrUseCapture),_(this._fragmentFiber.child,!1,ob,e,a,o),s.splice(n,1),u!==null&&u()}};function ob(e,n,a,s){return b(e).removeEventListener(n,a,s),!1}function zr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Nx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Dx(e,n,a,s){if(e.length===0)return-1;s=Nx(s);for(var o=0;o<e.length;o++){var u=e[o];if(u.type===n&&u.listener===a&&Nx(u.optionsOrUseCapture)===s)return o}return-1}ui.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var o=0;o<a.length;o++){var u=a[o];s.addEventListener(u.type,u.attachedListener,zr(u.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(o=0;o<a.length;o++)u=a[o],s.removeEventListener(u.type,u.attachedListener,zr(u.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},ui.prototype.focus=function(e){_(this._fragmentFiber.child,!0,Ux,e,void 0,void 0)};function Ux(e,n){return e.tag===6?!1:(e=b(e),Sb(e,n))}ui.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,Wd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Ux(n[a],e);a--);};function Wd(e,n){return n.push(e),!1}ui.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=b(e),e=Kl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,cb,e,void 0,void 0))};function cb(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,ub,e,void 0,void 0)};function ub(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}ui.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,fb,e,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):zi[n++]=s}zi.length=n}};function fb(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var zi=[],qd=!1;function db(e,n,a){zi.push({fragmentInstance:e,observer:n,instance:a}),qd||(qd=!0,yb(function(){qd=!1;var s=zi;zi=[];for(var o=0;o<s.length;o++){var u=s[o];u.observer.unobserve(u.instance)}}))}ui.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,hb,e,void 0,void 0),e};function hb(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}ui.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},ui.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Wd,a,void 0,void 0);var s=b(n);if(a.length===0){if(a=s,T(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var o=s=a.compareDocumentPosition(e);return a===e?o=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(n)[1],a===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),o=b(a[a.length-1]);var u=T(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(e),R=o.compareDocumentPosition(e),I=m&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&u&&m&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||u&&o===e||I||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!u&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pb(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pb(e,n,a,s,o){var u=rt(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=o.ownerDocument,o===u||o===u.documentElement||o===u.body;e:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=L(a,u,z),n===null?n=!1:(_(n,!0,F,u,a),u=y,y=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=L(s,u,z),n===null?n=!1:(_(n,!0,C,u,s),u=y,D=y=null,n=u!==null)),n):!1}function Lx(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,Wd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=w(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=b(s),Lx(e,a);return}if(s=b(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var o=n[s];o.tag===6?(o=b(o),Lx(o,a)):b(o).scrollIntoView(e),s+=a?-1:1}};function mb(e,n){return e=b(e),Ox(e,n),!1}function Ox(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function zx(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var o=a[s];e.addEventListener(o.type,o.attachedListener,zr(o.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var m=0,R=0;R<zi.length;R++){var I=zi[R];(I.fragmentInstance!==n||I.observer!==u||I.instance!==e)&&(zi[m++]=I)}zi.length=m,u.observe(e)}),Ox(e,n))}function gb(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var o=a[s];e.removeEventListener(o.type,o.attachedListener,zr(o.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?db(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Yd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xb(e,n,a,s){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function vb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ti(e.nextSibling),e===null))return null;return e}function Px(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ti(e.nextSibling),e===null))return null;return e}function Zd(e){return e.data==="$?"||e.data==="$~"}function Kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _b(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Qd=null;function Ix(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Bx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Sb(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function yb(e){Ex(function(){Ex(function(n){return e(n)})})}function Fx(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Hx(e,n,a){for(var s in a){var o=a[s];a.hasOwnProperty(s)&&o!=null&&Yt(e,n,s,null,Ky,o)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),Ke(e)}function Jd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ke(e)}var Ai=new Map,Gx=new Set;function Ql(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ra=Re.d;Re.d={f:bb,r:Mb,D:Eb,C:Tb,L:Ab,m:Rb,X:Cb,S:wb,M:Nb};function bb(){var e=Ra.f(),n=Cc();return e||n}function Mb(e){var n=dt(e);n!==null&&n.tag===5&&n.type==="form"?k0(n):Ra.r(e)}var Pr=typeof document>"u"?null:document;function Vx(e,n,a){var s=Pr;if(s&&typeof n=="string"&&n){var o=vi(n);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Gx.has(o)||(Gx.add(o),e={rel:e,crossOrigin:a,href:n},s.querySelector(o)===null&&(n=s.createElement("link"),Un(n,"link",e),vt(n),s.head.appendChild(n)))}}function Eb(e){Ra.D(e),Vx("dns-prefetch",e,null)}function Tb(e,n){Ra.C(e,n),Vx("preconnect",e,n)}function Ab(e,n,a){Ra.L(e,n,a);var s=Pr;if(s&&e&&n){var o='link[rel="preload"][as="'+vi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+vi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+vi(a.imageSizes)+'"]')):o+='[href="'+vi(e)+'"]';var u=o;switch(n){case"style":u=Ir(e);break;case"script":u=Br(e)}if(!(Ai.has(u)||(e=U({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ai.set(u,e),s.querySelector(o)!==null||n==="style"&&s.querySelector(Jl(u))||n==="script"&&s.querySelector($l(u))))){var m=s.createElement("link");Un(m,"link",e),n==="style"&&(m[Ye]=!0,m.onload=m.onerror=function(){Kt(m)}),vt(m),s.head.appendChild(m)}}}function Rb(e,n){Ra.m(e,n);var a=Pr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",o='link[rel="modulepreload"][as="'+vi(s)+'"][href="'+vi(e)+'"]',u=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Br(e)}if(!Ai.has(u)&&(e=U({rel:"modulepreload",href:e},n),Ai.set(u,e),a.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(u)))return}s=a.createElement("link"),Un(s,"link",e),vt(s),a.head.appendChild(s)}}}function wb(e,n,a){Ra.S(e,n,a);var s=Pr;if(s&&e){var o=Mt(s).hoistableStyles,u=Ir(e);n=n||"default";var m=o.get(u);if(!m){var R={loading:0,preload:null};if(m=s.querySelector(Jl(u)))R.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ai.get(u))&&$d(e,a);var I=m=s.createElement("link");vt(I),Un(I,"link",e),I._p=new Promise(function(Q,ue){I.onload=Q,I.onerror=ue}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Pc(m,n,s)}m={type:"stylesheet",instance:m,count:1,state:R},o.set(u,m)}}}function Cb(e,n){Ra.X(e,n);var a=Pr;if(a&&e){var s=Mt(a).hoistableScripts,o=Br(e),u=s.get(o);u||(u=a.querySelector($l(o)),u||(e=U({src:e,async:!0},n),(n=Ai.get(o))&&eh(e,n),u=a.createElement("script"),vt(u),Un(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function Nb(e,n){Ra.M(e,n);var a=Pr;if(a&&e){var s=Mt(a).hoistableScripts,o=Br(e),u=s.get(o);u||(u=a.querySelector($l(o)),u||(e=U({src:e,async:!0,type:"module"},n),(n=Ai.get(o))&&eh(e,n),u=a.createElement("script"),vt(u),Un(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function kx(e,n,a,s){var o=(o=Pt.current)?Ql(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ir(a.href),n=Mt(o).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ir(a.href);var u=Mt(o).hoistableStyles,m=u.get(e);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=o.querySelector(Jl(e)))?u._p||(m.instance=u,m.state.loading=5):(u=Ai.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(e,u)),Db(o,e,u,m.state))),n&&s===null)throw Error(r(528,""));return m}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Br(a),n=Mt(o).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ir(e){return'href="'+vi(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Xx(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function Db(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ye]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[Ye]=!0,n.onload=n.onerror=Kt.bind(null,n),Un(n,"link",a),vt(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Br(e){return'[src="'+vi(e)+'"]'}function $l(e){return"script[async]"+e}function jx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+vi(a.href)+'"]');if(s)return n.instance=s,vt(s),s;var o=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),vt(s),Un(s,"style",o),Pc(s,a.precedence,e),n.instance=s;case"stylesheet":o=Ir(a.href);var u=e.querySelector(Jl(o));if(u)return n.state.loading|=4,n.instance=u,vt(u),u;s=Xx(a),(o=Ai.get(o))&&$d(s,o),u=(e.ownerDocument||e).createElement("link"),vt(u);var m=u;return m._p=new Promise(function(R,I){m.onload=R,m.onerror=I}),Un(u,"link",s),n.state.loading|=4,Pc(u,a.precedence,e),n.instance=u;case"script":return u=Br(a.src),(o=e.querySelector($l(u)))?(n.instance=o,vt(o),o):(s=a,(o=Ai.get(u))&&(s=U({},a),eh(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),vt(o),Un(o,"link",s),e.head.appendChild(o),n.instance=o);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pc(s,a.precedence,e));return n.instance}function Pc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,u=o,m=0;m<s.length;m++){var R=s[m];if(R.dataset.precedence===n)u=R;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $d(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ic=null;function Wx(e,n,a){if(Ic===null){var s=new Map,o=Ic=new Map;o.set(a,s)}else o=Ic,s=o.get(a),s||(s=new Map,o.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var u=a[o];if(!(u[Oe]||u[A]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(n)||"";m=e+m;var R=s.get(m);R?R.push(u):s.set(m,[u])}}return s}function th(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ub(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qx(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Yx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Kx(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Zx(n),e.suspenseyImages.push(n)),e=zb.bind(e),n.decode().then(e,e))}function Lb(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=Ir(s.href),u=n.querySelector(Jl(o));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=eo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,vt(u);return}u=n.ownerDocument||n,s=Xx(s),(o=Ai.get(o))&&$d(s,o),u=u.createElement("link"),vt(u);var m=u;m._p=new Promise(function(R,I){m.onload=R,m.onerror=I}),Un(u,"link",s),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=eo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bc=0;function Ob(e,n){return e.stylesheets&&e.count===0&&Hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Bc===0&&(Bc=62500*Jy());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Bc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(o)}}:null}function Qx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Hc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function eo(){this.count--,Qx(this)}function zb(){this.imgCount--,Qx(this)}var Fc=null;function Hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fc=new Map,n.forEach(Pb,e),Fc=null,eo.call(e))}function Pb(e,n){if(!(n.state.loading&4)){var a=Fc.get(e);if(a)var s=a.get(null);else{a=new Map,Fc.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var m=o[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}o=n.instance,m=o.getAttribute("data-precedence"),u=a.get(m)||s,u===s&&a.set(null,o),a.set(m,o),this.count++,s=eo.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),n.state.loading|=4}}var Fr={$$typeof:ee,Provider:null,Consumer:null,_currentValue:At,_currentValue2:At,_threadCount:0};function Ib(e,n,a,s,o,u,m,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Jx(e,n,a,s,o,u,m,R,I,Q,ue,ye){return e=new Ib(e,n,a,m,I,Q,ue,ye,R),n=1,u===!0&&(n|=24),u=Yn(3,null,null,n),e.current=u,u.stateNode=e,n=gf(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Sf(u),e}function $x(e){return e?(e=fr,e):fr}function ev(e,n,a,s,o,u){o=$x(o),s.context===null?s.context=o:s.pendingContext=o,s=qa(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Ya(e,s,n),a!==null&&(Jn(a,e,n),Dl(a,e,n))}function tv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){tv(e,n),(e=e.alternate)&&tv(e,n)}function nv(e){if(e.tag===13||e.tag===31){var n=Ts(e,67108864);n!==null&&Jn(n,e,67108864),nh(e,67108864)}}function iv(e){if(e.tag===13||e.tag===31){var n=ci();n=pl(n);var a=Ts(e,n);a!==null&&Jn(a,e,n),nh(e,n)}}var Hr=!0;function Bb(e,n,a,s){var o=me.T;me.T=null;var u=Re.p;try{Re.p=2,ih(e,n,a,s)}finally{Re.p=u,me.T=o}}function Fb(e,n,a,s){var o=me.T;me.T=null;var u=Re.p;try{Re.p=8,ih(e,n,a,s)}finally{Re.p=u,me.T=o}}function ih(e,n,a,s){if(Hr){var o=ah(s);if(o===null)Bd(e,n,s,Gc,a),sv(e,s);else if(Gb(o,e,n,a,s))s.stopPropagation();else if(sv(e,s),n&4&&-1<Hb.indexOf(e)){for(;o!==null;){var u=dt(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=ha(u.pendingLanes);if(m!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;m;){var I=1<<31-ft(m);R.entanglements[1]|=I,m&=~I}ta(u),(Vt&6)===0&&(Ac=ke()+500,ql(0))}}break;case 31:case 13:R=Ts(u,2),R!==null&&Jn(R,u,2),Cc(),nh(u,2)}if(u=ah(s),u===null&&Bd(e,n,s,Gc,a),u===o)break;o=u}o!==null&&s.stopPropagation()}else Bd(e,n,s,null,a)}}function ah(e){return e=Vu(e),sh(e)}var Gc=null;function sh(e){if(Gc=null,e=rt(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gc=e,null}function av(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case ut:return 2;case X:return 8;case Ne:case be:return 32;case Le:return 268435456;default:return 32}default:return 32}}var rh=!1,rs=null,ls=null,os=null,to=new Map,no=new Map,cs=[],Hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(e,n){switch(e){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":to.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(n.pointerId)}}function io(e,n,a,s,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[o]},n!==null&&(n=dt(n),n!==null&&nv(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Gb(e,n,a,s,o){switch(n){case"focusin":return rs=io(rs,e,n,a,s,o),!0;case"dragenter":return ls=io(ls,e,n,a,s,o),!0;case"mouseover":return os=io(os,e,n,a,s,o),!0;case"pointerover":var u=o.pointerId;return to.set(u,io(to.get(u)||null,e,n,a,s,o)),!0;case"gotpointercapture":return u=o.pointerId,no.set(u,io(no.get(u)||null,e,n,a,s,o)),!0}return!1}function rv(e){var n=rt(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ro(e.priority,function(){iv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ro(e.priority,function(){iv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Gu=s,a.target.dispatchEvent(s),Gu=null}else return n=dt(a),n!==null&&nv(n),e.blockedOn=a,!1;n.shift()}return!0}function lv(e,n,a){Vc(e)&&a.delete(n)}function Vb(){rh=!1,rs!==null&&Vc(rs)&&(rs=null),ls!==null&&Vc(ls)&&(ls=null),os!==null&&Vc(os)&&(os=null),to.forEach(lv),no.forEach(lv)}function kc(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Vb)))}var Xc=null;function ov(e){Xc!==e&&(Xc=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Xc===e&&(Xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],o=e[n+2];if(typeof s!="function"){if(sh(s||a)===null)continue;break}var u=dt(a);u!==null&&(e.splice(n,3),n-=3,Gf(u,{pending:!0,data:o,method:a.method,action:s},s,o))}}))}function Gr(e){function n(I){return kc(I,e)}rs!==null&&kc(rs,e),ls!==null&&kc(ls,e),os!==null&&kc(os,e),to.forEach(n),no.forEach(n);for(var a=0;a<cs.length;a++){var s=cs[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)rv(a),a.blockedOn===null&&cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var o=a[s],u=a[s+1],m=o[G]||null;if(typeof u=="function")m||ov(a);else if(m){var R=null;if(u&&u.hasAttribute("formAction")){if(o=u,m=u[G]||null)R=m.formAction;else if(sh(o)!==null)continue}else R=m.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),ov(a)}}}function cv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return o=m})},focusReset:"manual",scroll:"manual"})}function n(){o!==null&&(o(),o=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),o!==null&&(o(),o=null)}}}function lh(e){this._internalRoot=e}jc.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ci();ev(a,s,e,n,null,null)},jc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ev(e.current,2,null,e,null,null),Cc(),n[fe]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ao();e={blockedOn:null,target:e,priority:n};for(var a=0;a<cs.length&&n!==0&&n<cs[a].priority;a++);cs.splice(a,0,e),a===0&&rv(e)}};var uv=t.version;if(uv!=="19.3.0")throw Error(r(527,uv,"19.3.0"));Re.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var kb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:me,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wc.isDisabled&&Wc.supportsFiber)try{$e=Wc.inject(kb),Ge=Wc}catch{}}return so.createRoot=function(e,n){if(!c(e))throw Error(r(299));var a=!1,s="",o=$0,u=eg,m=tg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Jx(e,1,!1,null,null,a,s,null,o,u,m,cv),e[fe]=n.current,Id(e),new lh(n)},so.hydrateRoot=function(e,n,a){if(!c(e))throw Error(r(299));var s=!1,o="",u=$0,m=eg,R=tg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Jx(e,1,!0,n,a??null,s,o,I,u,m,R,cv),n.context=$x(null),a=n.current,s=ci(),s=pl(s),o=qa(s),o.callback=null,Ya(a,o,s),a=s,n.current.lanes=a,ki(n,a),ta(n),e[fe]=n.current,Id(e),new jc(n)},so.version="19.3.0",so}var Sv;function $b(){if(Sv)return uh.exports;Sv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),uh.exports=Jb(),uh.exports}var eM=$b();const yt={name:"Анна Агабекян",title:"Продуктовый дизайнер",roleLevel:"Middle+ Product Designer",experienceYears:"4 года 11 месяцев",expectedSalary:"Обговаривается",location:"Октябрьский, Башкортостан",workPreference:"Готова к переезду, гибриду либо офису",email:"project.atoma@yandex.com",telegramPersonal:"https://t.me/vaivin",telegramPersonalHandle:"@vaivin",telegramChannel:"https://t.me/projectatoma",telegramChannelHandle:"@projectatoma",dprofileUrl:"https://dprofile.ru/myonlyregret",behanceUrl:"https://behance.net/exussremo",dribbbleUrl:"https://dribbble.com/annaatoma",qualification:{year:"2022",title:"UX/UI дизайн мобильных приложений Pro",honors:"ЗОЛОТОЙ СЕРТИФИКАТ",school:"UPROCK"},bio:"Продуктовый дизайнер и основатель студии ATOMA с почти 5-летним опытом в продуктовых командах, EdTech, Web3, FinTech и Full-stack веб-разработке. Проектирую цифровые продукты от этапа исследований, CustDev и CJM до масштабируемых дизайн-систем и развертывания на боевом хостинге. В портфолио — коммерческие проекты: сайт для кафе «Белоснежка» (г. Октябрьский, дизайн + full-stack разработка + домен и хостинг под ключ), мобильное обучающее приложение LIBRIUM (Community Design), игровая экосистема PPKAS на блокчейне Kaspa, а также некоммерческий сервис поиска исполнителей EZ (UPROCK)."},tM=[{value:"End-to-End",label:"Дизайн + Dev + Хост",context:"Коммерческий запуск сайта кафе Белоснежка (ATOMA)"},{value:"+30%",label:"Регистрации на курсы",context:"Редизайн мобильной воронки в EdTech (LIBRIUM)"},{value:"+22%",label:"D1 Retention",context:"Поэтапный онбординг в Web3-продукте (PPKAS)"},{value:"89%",label:"Конверсия кошельков",context:"Некастодиальные кошельки на блокчейне Kaspa"},{value:"5 мин → 1 мин",label:"Скорость сценариев",context:"Оптимизация B2B SaaS панели управления"},{value:"-40%",label:"Скорость handoff",context:"Дизайн-система из 50+ переиспользуемых токенов"}],nM=[{category:"UX/UI & Продуктовая стратегия",code:"MOD_01",skills:["UX-аудит и эвристический анализ","Глубинные интервью (CustDev) & JTBD","Customer Journey Mapping (CJM)","Юзабилити-тестирование (модерируемое)","A/B тестирование и конверсионные воронки","Информационная архитектура (IA)","Аналитика поведения пользователей"]},{category:"Дизайн-системы & Прототипирование",code:"MOD_02",skills:["Figma Tokens, переменные и варианты","Библиотеки 50+ компонентов с автолейаутами","High-Fidelity вайрфреймы и спецификации","Кликабельные прототипы (Figma / Framer)","Miro Flow Mapping & воркшопы","Передача макетов в разработку (Handoff)"]},{category:"Отраслевой фокус & Технологии",code:"MOD_03",skills:["Студия ATOMA: Full-cycle запуск сайтов под ключ","Frontend & Backend разработка для веб-сервисов","DevOps: аренда хостинга, покупка домена, DNS & SSL","EdTech: микрообучение и графы знаний","Web3 & блокчейн (Kaspa Network)","Некастодиальные кошельки & безопасность (DevSecOps)"]}],Ys=[{id:"belosnezhka",index:"01",title:"КАФЕ «БЕЛОСНЕЖКА» // ВЕБ-САЙТ И ОНЛАЙН-МЕНЮ (Г. ОКТЯБРЬСКИЙ)",subtitle:"Коммерческий проект студии ATOMA: дизайн, фронтенд, бэкенд, покупка домена, хостинг и деплой в продакшн",category:"fullstack-web",origin:"commercial",originLabel:"Коммерческий проект • Студия ATOMA • В разработке",isLatest:!0,isInProgress:!0,period:"2025 — по наст. время",role:"Основатель студии ATOMA / Lead Designer & Full-stack Developer",company:"Кафе «Белоснежка» (г. Октябрьский) / Студия ATOMA",tags:["В разработке","Коммерческий проект","Студия ATOMA","Full-stack Web","UX/UI в Figma","Хостинг & Домен","г. Октябрьский","Live сайт"],metrics:"End-to-End запуск соло (Дизайн + Dev + Хостинг), belosnezhka-cafe.ru",description:"Разработка коммерческого сайта для кафе «Белоснежка» (г. Октябрьский) в рамках студии ATOMA. Полный цикл реализации: от дизайн-концепта и адаптивной верстки до бэкенда, покупки домена и деплоя на хостинг.",longDescription:"Проект реализуется в рамках собственной студии ATOMA, основанной для создания качественных цифровых продуктов полного цикла. Для кафе «Белоснежка» в городе Октябрьский ведется полный цикл разработки: UX/UI дизайн в Figma, адаптивная фронтенд-верстка, бэкенд, приобретение и настройка доменного имени belosnezhka-cafe.ru, аренда и конфигурирование хостинга, SSL-сертификатов и публикация на боевом сервере.",problemStatement:"У заведения отсутствовал централизованный современный веб-ресурс: гости искали меню по разрозненным фотографиям в соцсетях, что снижало конверсию в заказы и бронирование столиков.",solutionHypothesis:"Быстрый адаптивный сайт с чистым визуальным меню, кнопками прямого заказа, контактами и локацией в г. Октябрьский увеличит приток гостей и структурирует поток обращений.",duties:["Проведение предпроектного анализа, определение позиционирования заведения и требований к меню","Проектирование UX/UI структуры и визуальной эстетики в Figma (мобильная и десктопная версии)","Фронтенд-разработка: адаптивный интерфейс, фильтрация блюд, плавные переходы и оптимизация изображений","Бэкенд-разработка: серверная логика обработки контактных форм и маршрутизация запросов","Инфраструктура и DevOps: покупка домена belosnezhka-cafe.ru, выбор и настройка хостинга, SSL-сертификата и боевой деплой","Тестирование кроссбраузерности и финальная оптимизация скорости загрузки"],achievements:["Полностью самостоятельная реализация проекта от первого наброска до рабочего веб-сервера (End-to-End)","Успешный запуск на боевом домене https://belosnezhka-cafe.ru/ с защищенным HTTPS-соединением","Продуманная адаптивная структура меню, удобная для просмотра со смартфонов гостей кафе","Проект находится в активной фазе развития и полировки в рамках студии ATOMA"],keyFeatures:["Интерактивное меню блюд и напитков с ценами и составом","Адаптивная мобильная оптимизация (быстрая загрузка даже при слабом 3G/4G)","Собственная инфраструктура: домен belosnezhka-cafe.ru и хостинг с SSL","Кнопки прямого ��ызова и быстрой связи для бронирования столиков","Интеграция интерактивной карты г. Октябрьский"],videoTitle:"Демонстрация веб-сайта кафе Белоснежка и этапы разработки",videoUrl:"",videoStages:[{step:"01",title:"Брифинг & Исследование HoReCa",desc:"Формирование структуры меню, сбор контента кафе «Белоснежка» и сценариев гостей заведения",duration:"Этап 1"},{step:"02",title:"UX/UI дизайн в Figma",desc:"Проектирование чистой сетки, аппетитной типографики, акцентных кнопок и мобильной версии",duration:"Этап 2"},{step:"03",title:"Full-stack разработка (Front + Back)",desc:"Верстка компонентов, интерактивное меню, анимации и серверный бэкенд обработки заявок",duration:"Этап 3"},{step:"04",title:"Покупка домена, хостинг и деплой",desc:"Регистрация belosnezhka-cafe.ru, привязка DNS, настройка сервера хостинга, SSL и публикация",duration:"Production Live"}],targetAudience:[{persona:"Житель или гость г. Октябрьский",role:"Посетитель кафе",painPoint:"Хочет быстро посмотреть меню с актуальными ценами с телефона и забронировать столик или сделать заказ без лишних звонков"}],externalLinks:{liveSite:"https://belosnezhka-cafe.ru/",telegram:"https://t.me/vaivin"},accentColor:"#D97706",previewVisual:"belosnezhka-cafe"},{id:"librium",index:"02",title:"LIBRIUM // МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ ОБУЧЕНИЯ",subtitle:"Образовательное приложение (EdTech): микрообучение, интерактивный граф знаний и сессии фокуса",category:"edtech",origin:"commercial",originLabel:"Коммерческий проект • Community Design",isLatest:!1,period:"2024 — 2025",role:"Lead Product & UX Designer",company:"Community Design",tags:["Коммерческий проект","Community Design","EdTech","iOS & Android","Микрообучение","CustDev","Граф знаний","Dprofile"],metrics:"18 CustDev интервью, 4 итерации кликабельного прототипа, +42% скорость усвоения тем",description:"Комплексное проектирование мобильного EdTech-приложения в Community Design: от глубинных интервью и CJM до интерактивного графа знаний и дизайн-системы.",longDescription:"Проект LIBRIUM разработан в Community Design. Задача — переосмыслить опыт мобильного обучения. Традиционные 40-минутные вебинары показывают катастрофический отток из-за когнитивной усталости. В LIBRIUM спроектировано дробление тем на 3–5 минутные кванты знаний, интерактивный граф взаимосвязей и алгоритм интервального повторения.",problemStatement:"Студенты и специалисты забрасывают до 80% онлайн-курсов из-за монолитного формата и отсутствия видимого прогресса при обучении на ходу.",solutionHypothesis:"Разбивка курсов на 4-минутные интерактивные сессии с визуальным графом взаимосвязи понятий увеличит недельное удержание пользователей (W1 Retention) минимум на 35%.",duties:["Проведение 18 глубинных проблемных и решенческих интервью с целевой аудиторией (CustDev)","Формирование продуктовых гипотез, сценариев использования и структуры CJM","Проектирование информационной архитектуры, интерактивного графа знаний и карточек микроуроков","Разработка дизайн-системы и библиотеки компонентов в Figma с токенами для темной и светлой темы","Сборка кликабельного интерактивного прототипа в Figma/Framer с реалистичной физикой микро-анимаций","Модерирование юзабилити-тестирований и подготовка документации для разработчиков"],achievements:["18 глубинных CustDev-интервью выявили ключевой паттерн: 76% пользователей учатся урывками в транспорте или межд�� рабочими задачами","4 итерации кликабельного прототипа позволили устранить трение в навигации по древу навыков","По результатам закрытого тестирования скорость освоения сложных понятий выросла на 42% по сравнению с чтением лонгридов","Создана масштабируемая дизайн-система из 80+ компонентов и токенов, готовая к быстрой верстке","Кейс опубликован на Dprofile: dprofile.ru/case/181859/librium-mobilnoe-prilozenie-dlia-obuceniia"],keyFeatures:["Интерактивный граф знаний: наглядные связи между сложными терминами","Микро-сессии 3–5 минут: удобный формат для обучения на ходу","Интервальное повторение (Spaced Repetition) на базе кривой Эббингауза","Режим глубокого фокуса с таймером без отвлекающих уведомлений"],videoTitle:"Этапы проектирования и UI-разработки приложения Librium",videoUrl:"",videoStages:[{step:"01",title:"CustDev & Исследование болей",desc:"18 глубинных интервью, фиксация барьеров традиционных онлайн-курсов, CJM текущего опыта",duration:"Недели 1–2"},{step:"02",title:"Архитектура & Граф знаний",desc:"Проектирование информационной структуры, связей между модулями и алгоритма интервального повторения",duration:"Недели 3–4"},{step:"03",title:"Low-Fi вайрфреймы & Тест гипотез",desc:"Проверка сценария прохождения микро-урока на 5 респондентах в черно-белых прототипах",duration:"Недели 5–6"},{step:"04",title:"Дизайн-система & Токены",desc:"Палитра спокойных оттенков без когнитивного шума, сетка типографики, 80+ UI-компонентов",duration:"Недели 7–8"},{step:"05",title:"Интерактивный кликабельный прототип",desc:"Сборка анимаций переходов, микровзаимодействий и проведение финального юзабилити-тестирования",duration:"MVP финализация"}],targetAudience:[{persona:"Михаил, 24 года",role:"Junior Frontend Developer",painPoint:"Хочет прокачать алгоритмы и архитектуру, но после рабочего дня нет сил смотреть 2-часовые вебинары"},{persona:"Елена, 28 лет",role:"Product Analyst",painPoint:"Изучает финансовое моделирование, часто отвлекается на звонки и теряет контекст пройденного материала"}],externalLinks:{dprofile:"https://dprofile.ru/case/181859/librium-mobilnoe-prilozenie-dlia-obuceniia",behance:"https://behance.net/exussremo",telegram:"https://t.me/vaivin"},accentColor:"#0D9488",previewMedia:[{type:"iframe",src:"https://kinescope.io/embed/kycri4X5eue7h57S6e146s",title:"Анимация интерфейса Librium"}],previewVisual:"librium-mobile"},{id:"ppkas",index:"02",title:"PPKAS // KASPA P2E & WEB3 ECOSYSTEM",subtitle:"Продуктовый дизайн P2E-платформы на стыке Web3, игр и блокчейн-инфраструктуры Kaspa",category:"web3",origin:"commercial",originLabel:"Коммерческий проект • Web3 & P2E",isLatest:!1,period:"Апрель 2025 — Май 2026",role:"Middle Product Designer (Full-time)",company:"PPKAS",tags:["Коммерческий проект","Web3","Kaspa Blockchain","P2E Games","UX Audit","Wallet Setup","DevSecOps"],metrics:"+22% D1 Retention, 89% Wallet Conversion, +20% New User Speed",description:"Разработка, совершенствование и аудит UX/UI для P2E-игры на блокчейне Kaspa. Проектирование игровых циклов, подключение некастодиальных кошельков и финансовая безопасность.",longDescription:"В рамках PPKAS был проведен комплексный UX-аудит P2E-экосистемы. Главный вызов состоял в устранении высокого порога входа в Web3: сложные сид-фразы, комиссии сети и настройка адресов отпугивали новичков. Был спроектирован бесшовный онбординг, где игра доступна мгновенно, а кошелек создается в 2 шага с понятной визуализацией транзакций.",problemStatement:"Сложный криптографический онбординг отсекал более 60% потенциальных игроков до первого игрового действия.",solutionHypothesis:"Отложенное создание кошелька и мгновенный доступ к геймплею поднимут D1 удержание минимум на 15%.",duties:["Разработка, совершенствование и проведение аудита UX/UI для продукта P2E на стыке Web3, игр и блокчейн-инфраструктуры Kaspa","Разработка пользовательских сценариев, интерфейсов, прототипов и визуальных решений для игровых и финансовых механик продукта","Организация и проведение пользовательских исследований, интервью и тестирования интерфейса","Сотрудничество с продакт-менеджерами, бизнес-аналитиками, разработчиками и специалистами по безопасности для достижения целей Web3 и DevSecOps","Подготовка, презентация и внедрение основных дизайнерских решений"],achievements:["Проведен полный UX-аудит платформы P2E, устранена критическая ошибка, что позволило увеличить скорость и объем регистрации новых пользователей на 20%","Разработан и внедрен поэтапный процесс адаптации, обеспечивающий мгновенный доступ к игре и повысивший удержание пользователей в первый день на 22%","Достигнут 89% показатель успешной конверсии при создании кошельков благодаря переработке всего процесса нанесения токенов и настройки кошелька","В сотрудничестве с командами инженеров и безопасности внедрены ключевые игровые циклы и финансовые механики"],keyFeatures:["Non-Custodial Kaspa Wallet с 2-step сид-онбордингом и биометрией","P2E Game Loop Dashboard: мониторинг наград, стейкинга и дропов","Спецификации для DevSecOps с валидацией анти-фрод проверок","Figma дизайн-система токенов для мобильных и десктоп клиентов"],externalLinks:{dprofile:"https://dprofile.ru/myonlyregret",behance:"https://behance.net/exussremo",telegram:"https://t.me/vaivin"},accentColor:"#16A34A",previewVisual:"web3-kaspa"},{id:"ez-marketplace",index:"03",title:"EZ // БЫСТРЫЙ ПОИСК ИСПОЛНИТЕЛЕЙ И ЗАКАЗЧИКОВ",subtitle:"Сервис поиска исполнителей и заказчиков фриланс-услуг с прозрачным расчетом смет и безопасной сделкой",category:"saas",origin:"non_commercial",originLabel:"Учебный проект • Школа UPROCK",isLatest:!1,period:"2021 — 2022",role:"UX/UI Designer / UPROCK",company:"Школа UPROCK (Учебный проект)",tags:["Некоммерческий проект","Учебный проект UPROCK","Маркетплейс","Поиск исполнителей","CJM 2 ролей","Dprofile /case/876"],metrics:"CJM для 2 ролей, поиск исполнителя <2 мин, Золотой сертификат UPROCK",description:"Учебный проект в школе UPROCK: сервис быстрого поиска исполнителей и заказчиков. Глубокий анализ конкурентов, CJM для заказчиков и фрилансеров, калькулятор сметы и дизайн-система.",longDescription:"Проект EZ выполнен в учебном плане школы UPROCK. Цель сервиса — кардинально ускорить процесс подбора квалифицированных специалистов и согласования условий. На классических биржах заказчики тратят часы на изучение откликов, а фрилансеры страдают от демпинга. В EZ спроектирована система прозрачных карточек с фиксированными тарифами, быстрым предпросмотром портфолио в 1 клик и автоматическим расчетом сметы.",problemStatement:"Заказчики тратят часы на разбор сотен нерелевантных откликов, а исполнители сталкиваются с непрозрачными условиями и задержками выплат.",solutionHypothesis:"Стандартизированная карточка специалиста с подтвержденными навыками, витриной работ и авто-расчетом сметы сократит время первого контакта до 2 минут.",duties:["Конкурентный анализ ведущих платформ поиска исполнителей (YouDo, FL.ru, Kwork, Behance)","Проработка детальных User Personas и карты путей пользователя (CJM) для двух ролей: Заказчик и Специалист","Проектирование информационной архитектуры, фильтров каталога и карточек услуг","Разработка модульной сетки и адаптивной дизайн-системы для десктопа и мобильных устройств","Интерактивное прототипирование ключевых сценариев безопасной сделки в Figma"],achievements:["Спроектирован сквозной сценарий поиска, согласования сметы и оформления безопасной сделки","Создана чистая модульная дизайн-система карточек с акцентом на типографику и удобство сканирования","Проект успешно защищен в рамках учебного плана школы UPROCK и получил Золотой сертификат","Кейс опубликован на Dprofile: dprofile.ru/case/876/ez-bystryi-poisk-ispolnitelei-i-zakazcikov"],keyFeatures:["Умная фильтрация по компетенциям, ставкам и доступности специалиста","Прозрачный калькулятор стоимости и расчет сроков выполнения задач","Быстрый просмотр кейсов портфолио прямо из списка специалистов","Безопасная сделка (Escrow) с пошаговым подтверждением этапов"],externalLinks:{dprofile:"https://dprofile.ru/case/876/ez-bystryi-poisk-ispolnitelei-i-zakazcikov",behance:"https://behance.net/exussremo",telegram:"https://t.me/vaivin"},accentColor:"#2563EB",previewVisual:"ez-marketplace"},{id:"community-design",index:"04",title:"COMMUNITY DESIGN // B2B SAAS & E-COMMERCE",subtitle:"Комплексные продуктовые решения для стартапов и B2B экосистем (KFBIO, FITVEND, STITCHLAB)",category:"saas",origin:"commercial",originLabel:"Коммерческий проект • Community Design",period:"Май 2022 — Апрель 2025",role:"Product Designer (Freelance / Remote)",company:"Community Design (KFBIO, FITVEND, STITCHLAB)",tags:["Коммерческий проект","Community Design","B2B SaaS","E-commerce","Design System","User Testing"],metrics:"+30% Registrations, 5m → 1m Task Time, -40% Handoff Speed",description:"Проектирование B2B SaaS панелей управления, воронки мобильных курсов и масштабируемых дизайн-систем. Ускорение рабочих сценариев пользователей в 5 раз.",longDescription:"В рамках Community Design велись ключевые продуктовые направления для KFBIO, FITVEND и STITCHLAB. Для мобильных курсов переработан процесс регистрации, повысивший закрытие воронок на 30%. Для B2B SaaS создана панель управления, сократившая рутинные сценарии с 5 минут до 1 минуты.",duties:["Проектирование воронок регистрации и адаптации пользователей в мобильных сервисах","Проведение сессий пользовательского тестирования и формирование бэклога продуктовых улучшений","Создание комплексных дизайн-систем в Figma с токенами и вариантами","Проектирование B2B SaaS панелей управления с большими объемами аналитических данных"],achievements:["Для образовательного направления переработан флоу регистрации, что увеличило количество завершенных регистраций на 30% в первый месяц","Разработана комплексная система дизайна в Figma для платформы электронной коммерции (50+ переиспользуемых компонентов), сократившая время передачи проекта на 40%","Полный цикл проектирования UX/UI для панели управления B2B SaaS-сервиса: сокращение времени выполнения задач пользователями с 5 минут до 1 минуты"],keyFeatures:["50+ многократно используемых компонентов в Figma с автолейаутами","B2B SaaS: фильтрация терабайтов аналитических логов с кастомными пресетами","Клиентские проекты: KFBIO, FITVEND, STITCHLAB"],externalLinks:{dprofile:"https://dprofile.ru/myonlyregret",behance:"https://behance.net/exussremo"},accentColor:"#0284C7",previewVisual:"saas-dashboard"},{id:"fintech-p2p",index:"05",title:"P2P FINTECH // АРХИТЕКТУРА ПЕРЕВОДОВ",subtitle:"Прототип и архитектура нового пользовательского сценария мгновенных P2P-переводов",category:"fintech",origin:"commercial",originLabel:"Коммерческий проект • FinTech",period:"2023 — 2024",role:"Product Designer",company:"FinTech Client",tags:["Коммерческий проект","FinTech","P2P Payments","Usability Testing","Security UX","Figma Prototyping"],metrics:"100% одобрение в 5 UX-сессиях, топ-1 приоритет в бэклоге",description:"Разработка новой функции мгновенных P2P-платежей с защитой от ошибок и биометрическим подтверждением.",longDescription:"Для финтех-клиента спроектирован интерактивный прототип новой функции P2P-платежей. Решение прошло 5 раундов юзабилити-тестирования без единого критического сбоя со стороны пользователей и было сразу включено в приоритетный спринт разработки.",duties:["Анализ существующих сценариев денежных переводов и выявление узких мест","Создание интерактивного прототипа высокой детализации в Figma","Модерирование 5 сессий качественного юзабилити-тестирования","Синхронизация требований с командами безопасности и разработки"],achievements:["Прототип получил единогласно положительные отзывы во всех 5 сессиях пользовательского тестирования","Фича включена стейкхолдерами в приоритетный список задач для немедленной разработки"],keyFeatures:["Умный поиск получателя по номеру, никнейму или QR-коду","Защита от опечатки в реквизитах с авто-проверкой получателя","Мгновенный статус транзакции с понятным подтверждением списания"],externalLinks:{dprofile:"https://dprofile.ru/myonlyregret",behance:"https://behance.net/exussremo"},accentColor:"#059669",previewVisual:"fintech-p2p"},{id:"elysium-rpg",index:"06",title:"ELYSIUM CHRONICLES // 2D GAME HUD & ART",subtitle:"Игровой интерфейс мобильной RPG, инвентарь, карточки героев и 2D-арт",category:"game-2d",origin:"concept",originLabel:"Концепт / R&D • Game UI & 2D Art",period:"2024",role:"Lead 2D & UI/UX Game Artist",company:"Game Lab",tags:["Концепт / R&D","Game UI/HUD","2D Art","Spine 2D","Isometric Props","Hero Cards"],metrics:"60+ прорисованных иконок, 12 экранов кор-геймплея",description:"Полный визуальный цикл мобильной 2D RPG: от боевого HUD и древа талантов до анимированных сундуков и изометрических локаций.",longDescription:"Создание аутентичного арт-стиля и интерфейса для мобильной фэнтезийной RPG. Эргономика под управление одним пальцем, адаптация под экраны 16:9 и 20:9, стилизованные иконки способностей и предметов инвентаря.",duties:["Проектирование игрового HUD и навигационных цепочек меню","Отрисовка 60+ кастомных иконок способностей и айтемов","Скелетная 2D анимация в Spine и микро-VFX для интерактивных элементов"],achievements:["Спроектирована модульная боевая панель с эргономичным доступом под правую руку","Утверждена полная визуальная библия проекта для дальнейшего масштабирования"],keyFeatures:["Модульный HUD с мгновенным кастом умений","Изометрические ассеты ресурсов и сундуков с сочным дропом","Оптимизированный атлас спрайтов для Unity/Godot"],externalLinks:{dprofile:"https://dprofile.ru/myonlyregret",behance:"https://behance.net/exussremo",dribbble:"https://dribbble.com/annaatoma"},accentColor:"#D97706",previewVisual:"game-hud"},{id:"project-atoma-lab",index:"07",title:"@PROJECTATOMA // MOTION & DESIGN LAB",subtitle:"Экспериментальные микро-взаимодействия, Lottie и авторский канал",category:"game-2d",origin:"non_commercial",originLabel:"Авторская R&D лаборатория и канал",period:"2024 — 2026",role:"Creator & Motion Designer",company:"Project Atoma",tags:["Некоммерческий проект","Telegram @projectatoma","Lottie JSON","60 FPS Motion","Dribbble","Creative Lab"],metrics:"50k+ просмотров на Dribbble, сотни сохранений",description:"Лаборатория кинетического дизайна: пружинные анимации, микро-взаимодействия, разборы UX в Telegram-канале @projectatoma.",longDescription:"Авторский канал и R&D пространство @projectatoma. Исследования передовых трендов в моушн-дизайне, микро-анимации состояний кнопок, физика свайпов и дизайн-исследования.",duties:["Создание 60 FPS интерфейсных шотов для Dribbble и Behance","Экспорт ультра-легких Lottie JSON файлов (<40 KB)","Ведение телеграм-канала @projectatoma с обзорами UX"],achievements:["Сформировано активное сообщество дизайнеров в канале @projectatoma","Десятки шотов в топах Dribbble"],keyFeatures:["Spring physics микро-анимации переходов","Готовые JSON пресеты для разработчиков","Регулярные публикации в @projectatoma"],externalLinks:{telegram:"https://t.me/projectatoma",dribbble:"https://dribbble.com/annaatoma",dprofile:"https://dprofile.ru/myonlyregret"},accentColor:"#7C3AED",previewVisual:"atoma-lab"}],b_=[{period:"2025 — по наст. время",title:"Основатель студии / Lead Product Designer & Full-stack",company:"ATOMA STUDIO",type:"Собственная студия, коммерческая веб-разработка",location:"Октябрьский / Remote",clients:["Кафе «Белоснежка» (г. Октябрьский)"],duties:["Полный цикл проектирования и запуска коммерческих цифровых продуктов под ключ (End-to-End)","UX/UI дизайн в Figma: исследование рынка HoReCa, интерактивные прототипы, мобильная эргономика","Frontend & Backend веб-разработка: верстка, анимации, серверная логика обработки заказов","DevOps & Инфраструктура: подбор и покупка доменов, аренда хостинга, настройка DNS/SSL и деплой на сервере"],achievements:["Основана независимая продуктовая веб-студия ATOMA","С нуля спроектирован, разработан и запущен сайт кафе «Белоснежка» — https://belosnezhka-cafe.ru/ (дизайн + фронт + бэк + хостинг)"]},{period:"Апрель 2025 — Май 2026",title:"Middle Product Designer",company:"PPKAS",type:"Полная занятость, удалённо",location:"Remote",duties:["Разработка, совершенствование и проведение аудита UX/UI для продукта P2E на стыке Web3, игр и блокчейн-инфраструктуры Kaspa","Разработка пользовательских сценариев, интерфейсов, прототипов и визуальных решений для игровых и финансовых механик продукта","Организация и проведение пользовательских исследований, интервью и тестирования интерфейса","Сотрудничество с продакт-менеджерами, бизнес-аналитиками, разработчиками и специалистами по безопасности (DevSecOps)"],achievements:["UX-аудит платформы P2E устранил критическую ошибку, увеличив регистрацию новых пользователей на 20%","Поэтапный онбординг повысил удержание пользователей в первый день (D1) на 22%","Достигнут 89% показатель успешной конверсии при создании некастодиальных кошельков","Спроектированы и внедрены основные игровые циклы и финансовые механики"]},{period:"Май 2022 — Апрель 2025",title:"Product Designer",company:"COMMUNITY DESIGN",type:"Фриланс, удалённо",location:"Remote",clients:["KFBIO","FITVEND","STITCHLAB"],duties:["Разработка воронок адаптации, мобильных потоков регистрации и B2B дашбордов","Создание сквозных дизайн-систем в Figma с компонентами и переменными","Проведение юзабилити-тестирований и синтез результатов в продуктовый бэклог"],achievements:["EdTech: разработано обучающее приложение LIBRIUM (18 CustDev-интервью, интерактивный граф знаний, Dprofile case/181859)","EdTech воронка: переработанный флоу регистрации увеличил завершенные регистрации на 30% в 1-й месяц","FinTech: прототип P2P-платежей успешно прошел 5 сессий тестирования и включен в топ-приоритет разработки","E-commerce: создана дизайн-система из 50+ компонентов, сократившая время передачи в разработку на 40%","B2B SaaS: переработана панель управления, сократившая время выполнения задач пользователями с 5 мин до 1 мин"]},{period:"Июль 2021 — Май 2022",title:"Стажёр UX/UI дизайнер",company:"UPROCK",type:"Частичная занятость, удалённо",location:"Remote",certificate:"ЗОЛОТОЙ СЕРТИФИКАТ (UX/UI дизайн мобильных приложений Pro, 2022)",duties:["Ведение проектов от начальной стадии исследований до финальных макетов","Взаимодействие с дизайнерами и инженерами для контроля качества и дедлайнов","Анализ потребностей клиентов и презентация дизайн-решений"],achievements:["Разработан проект EZ — быстрый поиск исполнителей и заказчиков (Dprofile case/876)","Участие в разработке дизайна end-to-end для 2 клиентских мобильных проектов","Участие в разработке новой дизайн-системы, компонентов и стилей","Проведение юзабилити-тестирований и формирование рекомендаций для старшей команды"]}],iM=[{label:"Telegram Direct",handle:"@vaivin",url:"https://t.me/vaivin",type:"telegram"},{label:"Telegram Channel",handle:"@projectatoma",url:"https://t.me/projectatoma",type:"telegram"},{label:"Email",handle:"project.atoma@yandex.com",url:"mailto:project.atoma@yandex.com",type:"email"},{label:"Dprofile",handle:"dprofile.ru/myonlyregret",url:"https://dprofile.ru/myonlyregret",type:"portfolio"},{label:"Behance",handle:"behance.net/exussremo",url:"https://behance.net/exussremo",type:"portfolio"},{label:"Dribbble",handle:"dribbble.com/annaatoma",url:"https://dribbble.com/annaatoma",type:"portfolio"},{label:"LinkedIn",handle:"linkedin.com",url:"https://linkedin.com",type:"social"}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sM=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),yv=l=>{const t=sM(l);return t.charAt(0).toUpperCase()+t.slice(1)},M_=(...l)=>l.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),rM=l=>{for(const t in l)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=Bt.forwardRef(({color:l="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:c="",children:f,iconNode:d,...h},x)=>Bt.createElement("svg",{ref:x,...lM,width:t,height:t,stroke:l,strokeWidth:r?Number(i)*24/Number(t):i,className:M_("lucide",c),...!f&&!rM(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,S])=>Bt.createElement(g,S)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(l,t)=>{const i=Bt.forwardRef(({className:r,...c},f)=>Bt.createElement(oM,{ref:f,iconNode:t,className:M_(`lucide-${aM(yv(l))}`,`lucide-${l}`,r),...c}));return i.displayName=yv(l),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],uM=pn("arrow-down",cM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],dM=pn("arrow-left",fM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],vs=pn("arrow-up-right",hM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],mM=pn("arrow-up",pM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],xM=pn("award",gM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Hp=pn("check",vM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],E_=pn("chevron-right",_M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],T_=pn("circle-check",SM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],bM=pn("copy",yM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],A_=pn("file-text",MM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],TM=pn("image",EM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],RM=pn("layers",AM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],CM=pn("link",wM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],DM=pn("printer",NM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],LM=pn("refresh-cw",UM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Gp=pn("send",OM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],PM=pn("share-2",zM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],BM=pn("upload",IM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],HM=pn("users",FM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],bv=pn("video",GM);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kM=pn("x",VM),XM=({onOpenResume:l})=>p.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-zinc-200/80",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between gap-6",children:[p.jsx("div",{className:"flex items-center gap-4",children:p.jsxs("a",{href:"#",className:"group flex flex-col",children:[p.jsx("span",{className:"font-display font-extrabold text-xl sm:text-2xl text-zinc-900 tracking-tight group-hover:text-emerald-800 transition-colors",children:"Анна Агабекян"}),p.jsx("span",{className:"text-xs sm:text-sm text-zinc-500 font-medium tracking-normal",children:"Product Designer • EdTech, Web3, FinTech & Game UI"})]})}),p.jsxs("nav",{className:"hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600",children:[p.jsx("a",{href:"#works-section",className:"hover:text-zinc-900 transition-colors",children:"Кейсы & Проекты"}),p.jsx("a",{href:"#experience-section",className:"hover:text-zinc-900 transition-colors",children:"Опыт и хронология"}),p.jsx("a",{href:"#skills-section",className:"hover:text-zinc-900 transition-colors",children:"Компетенции & Стек"}),p.jsx("a",{href:"#contact-section",className:"hover:text-zinc-900 transition-colors",children:"Контакты"})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsxs("button",{type:"button",onClick:l,className:"px-4 py-2.5 rounded-full border border-zinc-200 hover:border-zinc-400 bg-white text-zinc-700 hover:text-zinc-900 transition-all text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs",children:[p.jsx(A_,{className:"w-4 h-4 text-zinc-500"}),p.jsx("span",{children:"Резюме (CV)"})]}),p.jsxs("a",{href:yt.telegramPersonal,target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 rounded-full bg-[#18181B] text-white font-bold hover:bg-zinc-800 transition-all text-xs sm:text-sm flex items-center gap-1.5 shadow-sm active:scale-95",children:[p.jsx("span",{children:"Написать в Telegram"}),p.jsx(vs,{className:"w-4 h-4"})]})]})]})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="186",jM=0,Mv=1,WM=2,vu=1,qM=2,po=3,Qs=0,ei=1,sa=2,Oa=0,go=1,qh=2,Ev=3,Tv=4,YM=5,tl=100,ZM=101,KM=102,QM=103,JM=104,$M=200,eE=201,tE=202,nE=203,R_=204,w_=205,iE=206,aE=207,sE=208,rE=209,lE=210,oE=211,cE=212,uE=213,fE=214,Yh=0,Zh=1,Kh=2,xo=3,Qh=4,Jh=5,$h=6,ep=7,C_=0,dE=1,hE=2,oa=0,N_=1,D_=2,U_=3,kp=4,L_=5,O_=6,z_=7,P_=300,Js=301,sl=302,ph=303,mh=304,Du=306,tp=1e3,La=1001,np=1002,On=1003,pE=1004,qc=1005,Bn=1006,gh=1007,Zs=1008,pi=1009,I_=1010,B_=1011,vo=1012,Xp=1013,ua=1014,ra=1015,fa=1016,jp=1017,Wp=1018,_o=1020,F_=35902,H_=35899,G_=1021,V_=1022,Hi=1023,Pa=1026,Ks=1027,k_=1028,qp=1029,$s=1030,Yp=1031,Zp=1033,_u=33776,Su=33777,yu=33778,bu=33779,ip=35840,ap=35841,sp=35842,rp=35843,lp=36196,op=37492,cp=37496,up=37488,fp=37489,Eu=37490,dp=37491,hp=37808,pp=37809,mp=37810,gp=37811,xp=37812,vp=37813,_p=37814,Sp=37815,yp=37816,bp=37817,Mp=37818,Ep=37819,Tp=37820,Ap=37821,Rp=36492,wp=36494,Cp=36495,Np=36283,Dp=36284,Tu=36285,Up=36286,mE=3200,Lp=0,gE=1,xs="",wi="srgb",Au="srgb-linear",Ru="linear",Zt="srgb",xh=7680,xE=519,vE=512,_E=513,SE=514,Kp=515,yE=516,bE=517,Qp=518,ME=519,EE=35044,Av="300 es",la=2e3,So=2001;function TE(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function wu(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function AE(){const l=wu("canvas");return l.style.display="block",l}const Rv={};function wv(...l){const t="THREE."+l.shift();console.log(t,...l)}function X_(l){const t=l[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=l[1];i&&i.isStackTrace?l[0]+=" "+i.getLocation():l[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return l}function lt(...l){l=X_(l);const t="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...l)}}function Ht(...l){l=X_(l);const t="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...l)}}function il(...l){const t=l.join(" ");t in Rv||(Rv[t]=!0,lt(...l))}function RE(l,t,i){return new Promise(function(r,c){function f(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:c();break;case l.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const wE={[Yh]:Zh,[Kh]:$h,[Qh]:ep,[xo]:Jh,[Zh]:Yh,[$h]:Kh,[ep]:Qh,[Jh]:xo};class er{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const c=r[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const c=r.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=Math.PI/180,Op=180/Math.PI;function bo(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[l&255]+Pn[l>>8&255]+Pn[l>>16&255]+Pn[l>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Lt(l,t,i){return Math.max(t,Math.min(i,l))}function CE(l,t){return(l%t+t)%t}function _h(l,t,i){return(1-i)*l+i*t}function ro(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:case Uint8ClampedArray:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const im=class im{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6],this.y=c[1]*i+c[4]*r+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Lt(this.x,t.x,i.x),this.y=Lt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Lt(this.x,t,i),this.y=Lt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Lt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*r-d*c+t.x,this.y=f*c+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};im.prototype.isVector2=!0;let bt=im;class ll{constructor(t=0,i=0,r=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=c}static slerpFlat(t,i,r,c,f,d,h){let x=r[c+0],g=r[c+1],S=r[c+2],_=r[c+3],v=f[d+0],T=f[d+1],w=f[d+2],N=f[d+3];if(_!==N||x!==v||g!==T||S!==w){let b=x*v+g*T+S*w+_*N;b<0&&(v=-v,T=-T,w=-w,N=-N,b=-b);let y=1-h;if(b<.9995){const D=Math.acos(b),F=Math.sin(D);y=Math.sin(y*D)/F,h=Math.sin(h*D)/F,x=x*y+v*h,g=g*y+T*h,S=S*y+w*h,_=_*y+N*h}else{x=x*y+v*h,g=g*y+T*h,S=S*y+w*h,_=_*y+N*h;const D=1/Math.sqrt(x*x+g*g+S*S+_*_);x*=D,g*=D,S*=D,_*=D}}t[i]=x,t[i+1]=g,t[i+2]=S,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,c,f,d){const h=r[c],x=r[c+1],g=r[c+2],S=r[c+3],_=f[d],v=f[d+1],T=f[d+2],w=f[d+3];return t[i]=h*w+S*_+x*T-g*v,t[i+1]=x*w+S*v+g*_-h*T,t[i+2]=g*w+S*T+h*v-x*_,t[i+3]=S*w-h*_-x*v-g*T,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,c){return this._x=t,this._y=i,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,x=Math.sin,g=h(r/2),S=h(c/2),_=h(f/2),v=x(r/2),T=x(c/2),w=x(f/2);switch(d){case"XYZ":this._x=v*S*_+g*T*w,this._y=g*T*_-v*S*w,this._z=g*S*w+v*T*_,this._w=g*S*_-v*T*w;break;case"YXZ":this._x=v*S*_+g*T*w,this._y=g*T*_-v*S*w,this._z=g*S*w-v*T*_,this._w=g*S*_+v*T*w;break;case"ZXY":this._x=v*S*_-g*T*w,this._y=g*T*_+v*S*w,this._z=g*S*w+v*T*_,this._w=g*S*_-v*T*w;break;case"ZYX":this._x=v*S*_-g*T*w,this._y=g*T*_+v*S*w,this._z=g*S*w-v*T*_,this._w=g*S*_+v*T*w;break;case"YZX":this._x=v*S*_+g*T*w,this._y=g*T*_+v*S*w,this._z=g*S*w-v*T*_,this._w=g*S*_-v*T*w;break;case"XZY":this._x=v*S*_-g*T*w,this._y=g*T*_-v*S*w,this._z=g*S*w+v*T*_,this._w=g*S*_+v*T*w;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,c=Math.sin(r);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],c=i[4],f=i[8],d=i[1],h=i[5],x=i[9],g=i[2],S=i[6],_=i[10],v=r+h+_;if(v>0){const T=.5/Math.sqrt(v+1);this._w=.25/T,this._x=(S-x)*T,this._y=(f-g)*T,this._z=(d-c)*T}else if(r>h&&r>_){const T=2*Math.sqrt(1+r-h-_);this._w=(S-x)/T,this._x=.25*T,this._y=(c+d)/T,this._z=(f+g)/T}else if(h>_){const T=2*Math.sqrt(1+h-r-_);this._w=(f-g)/T,this._x=(c+d)/T,this._y=.25*T,this._z=(x+S)/T}else{const T=2*Math.sqrt(1+_-r-h);this._w=(d-c)/T,this._x=(f+g)/T,this._y=(x+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Lt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const c=Math.min(1,i/r);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,c=t._y,f=t._z,d=t._w,h=i._x,x=i._y,g=i._z,S=i._w;return this._x=r*S+d*h+c*g-f*x,this._y=c*S+d*x+f*h-r*g,this._z=f*S+d*g+r*x-c*h,this._w=d*S-r*h-c*x-f*g,this._onChangeCallback(),this}slerp(t,i){let r=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,c=-c,f=-f,d=-d,h=-h);let x=1-i;if(h<.9995){const g=Math.acos(h),S=Math.sin(g);x=Math.sin(x*g)/S,i=Math.sin(i*g)/S,this._x=this._x*x+r*i,this._y=this._y*x+c*i,this._z=this._z*x+f*i,this._w=this._w*x+d*i,this._onChangeCallback()}else this._x=this._x*x+r*i,this._y=this._y*x+c*i,this._z=this._z*x+f*i,this._w=this._w*x+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const am=class am{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Cv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Cv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*r+f[6]*c,this.y=f[1]*i+f[4]*r+f[7]*c,this.z=f[2]*i+f[5]*r+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,c=this.z,f=t.x,d=t.y,h=t.z,x=t.w,g=2*(d*c-h*r),S=2*(h*i-f*c),_=2*(f*r-d*i);return this.x=i+x*g+d*_-h*S,this.y=r+x*S+h*g-f*_,this.z=c+x*_+f*S-d*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*c,this.y=f[1]*i+f[5]*r+f[9]*c,this.z=f[2]*i+f[6]*r+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Lt(this.x,t.x,i.x),this.y=Lt(this.y,t.y,i.y),this.z=Lt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Lt(this.x,t,i),this.y=Lt(this.y,t,i),this.z=Lt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,c=t.y,f=t.z,d=i.x,h=i.y,x=i.z;return this.x=c*x-f*h,this.y=f*d-r*x,this.z=r*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Lt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,c=this.z-t.z;return i*i+r*r+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const c=Math.sin(i)*t;return this.x=c*Math.sin(r),this.y=Math.cos(i)*t,this.z=c*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};am.prototype.isVector3=!0;let oe=am;const Sh=new oe,Cv=new ll,sm=class sm{constructor(t,i,r,c,f,d,h,x,g){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,c,f,d,h,x,g)}set(t,i,r,c,f,d,h,x,g){const S=this.elements;return S[0]=t,S[1]=c,S[2]=h,S[3]=i,S[4]=f,S[5]=x,S[6]=r,S[7]=d,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,f=this.elements,d=r[0],h=r[3],x=r[6],g=r[1],S=r[4],_=r[7],v=r[2],T=r[5],w=r[8],N=c[0],b=c[3],y=c[6],D=c[1],F=c[4],C=c[7],z=c[2],L=c[5],U=c[8];return f[0]=d*N+h*D+x*z,f[3]=d*b+h*F+x*L,f[6]=d*y+h*C+x*U,f[1]=g*N+S*D+_*z,f[4]=g*b+S*F+_*L,f[7]=g*y+S*C+_*U,f[2]=v*N+T*D+w*z,f[5]=v*b+T*F+w*L,f[8]=v*y+T*C+w*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],h=t[5],x=t[6],g=t[7],S=t[8];return i*d*S-i*h*g-r*f*S+r*h*x+c*f*g-c*d*x}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],h=t[5],x=t[6],g=t[7],S=t[8],_=S*d-h*g,v=h*x-S*f,T=g*f-d*x,w=i*_+r*v+c*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/w;return t[0]=_*N,t[1]=(c*g-S*r)*N,t[2]=(h*r-c*d)*N,t[3]=v*N,t[4]=(S*i-c*x)*N,t[5]=(c*f-h*i)*N,t[6]=T*N,t[7]=(r*x-g*i)*N,t[8]=(d*i-r*f)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,c,f,d,h){const x=Math.cos(f),g=Math.sin(f);return this.set(r*x,r*g,-r*(x*d+g*h)+d+t,-c*g,c*x,-c*(-g*d+x*h)+h+i,0,0,1),this}scale(t,i){return il("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(t,i)),this}rotate(t){return il("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-t)),this}translate(t,i){return il("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<9;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let ht=sm;const yh=new ht,Nv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NE(){const l={enabled:!0,workingColorSpace:Au,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Zt&&(c.r=za(c.r),c.g=za(c.g),c.b=za(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Zt&&(c.r=al(c.r),c.g=al(c.g),c.b=al(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===xs?Ru:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return l.define({[Au]:{primaries:t,whitePoint:r,transfer:Ru,toXYZ:Nv,fromXYZ:Dv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:t,whitePoint:r,transfer:Zt,toXYZ:Nv,fromXYZ:Dv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),l}const Ut=NE();function za(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function al(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Vr;class DE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Vr===void 0&&(Vr=wu("canvas")),Vr.width=t.width,Vr.height=t.height;const c=Vr.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),r=Vr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=wu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const c=r.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=za(f[d]/255)*255;return r.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(za(i[r]/255)*255):i[r]=za(i[r]);return{data:i,width:t.width,height:t.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UE=0;class Jp{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(bh(c[d].image)):f.push(bh(c[d]))}else f=bh(c);r.url=f}return i||(t.images[this.uuid]=r),r}}function bh(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?DE.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let LE=0;const Mh=new oe;class jn extends er{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=La,c=La,f=Bn,d=Zs,h=Hi,x=pi,g=jn.DEFAULT_ANISOTROPY,S=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=bo(),this.name="",this.source=new Jp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=x,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&r&&c.isVector2&&r.isVector2||c&&r&&c.isVector3&&r.isVector3||c&&r&&c.isMatrix3&&r.isMatrix3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tp:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case np:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tp:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case np:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=P_;jn.DEFAULT_ANISOTROPY=1;const rm=class rm{constructor(t=0,i=0,r=0,c=1){this.x=t,this.y=i,this.z=r,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,c){return this.x=t,this.y=i,this.z=r,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,c,f;const x=t.elements,g=x[0],S=x[4],_=x[8],v=x[1],T=x[5],w=x[9],N=x[2],b=x[6],y=x[10];if(Math.abs(S-v)<.01&&Math.abs(_-N)<.01&&Math.abs(w-b)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+N)<.1&&Math.abs(w+b)<.1&&Math.abs(g+T+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(g+1)/2,C=(T+1)/2,z=(y+1)/2,L=(S+v)/4,U=(_+N)/4,E=(w+b)/4;return F>C&&F>z?F<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(F),c=L/r,f=U/r):C>z?C<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(C),r=L/c,f=E/c):z<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(z),r=U/f,c=E/f),this.set(r,c,f,i),this}let D=Math.sqrt((b-w)*(b-w)+(_-N)*(_-N)+(v-S)*(v-S));return Math.abs(D)<.001&&(D=1),this.x=(b-w)/D,this.y=(_-N)/D,this.z=(v-S)/D,this.w=Math.acos((g+T+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Lt(this.x,t.x,i.x),this.y=Lt(this.y,t.y,i.y),this.z=Lt(this.z,t.z,i.z),this.w=Lt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Lt(this.x,t,i),this.y=Lt(this.y,t,i),this.z=Lt(this.z,t,i),this.w=Lt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rm.prototype.isVector4=!0;let ln=rm;class OE extends er{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:r.depth},f=new jn(c),d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=r,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new Jp(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends OE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class j_ extends jn{constructor(t=null,i=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=On,this.minFilter=On,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends jn{constructor(t=null,i=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:c},this.magFilter=On,this.minFilter=On,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Nu=class Nu{constructor(t,i,r,c,f,d,h,x,g,S,_,v,T,w,N,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,c,f,d,h,x,g,S,_,v,T,w,N,b)}set(t,i,r,c,f,d,h,x,g,S,_,v,T,w,N,b){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=c,y[1]=f,y[5]=d,y[9]=h,y[13]=x,y[2]=g,y[6]=S,y[10]=_,y[14]=v,y[3]=T,y[7]=w,y[11]=N,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nu().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,c=1/kr.setFromMatrixColumn(t,0).length(),f=1/kr.setFromMatrixColumn(t,1).length(),d=1/kr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*c,i[1]=r[1]*c,i[2]=r[2]*c,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,c=t.y,f=t.z,d=Math.cos(r),h=Math.sin(r),x=Math.cos(c),g=Math.sin(c),S=Math.cos(f),_=Math.sin(f);if(t.order==="XYZ"){const v=d*S,T=d*_,w=h*S,N=h*_;i[0]=x*S,i[4]=-x*_,i[8]=g,i[1]=T+w*g,i[5]=v-N*g,i[9]=-h*x,i[2]=N-v*g,i[6]=w+T*g,i[10]=d*x}else if(t.order==="YXZ"){const v=x*S,T=x*_,w=g*S,N=g*_;i[0]=v+N*h,i[4]=w*h-T,i[8]=d*g,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=T*h-w,i[6]=N+v*h,i[10]=d*x}else if(t.order==="ZXY"){const v=x*S,T=x*_,w=g*S,N=g*_;i[0]=v-N*h,i[4]=-d*_,i[8]=w+T*h,i[1]=T+w*h,i[5]=d*S,i[9]=N-v*h,i[2]=-d*g,i[6]=h,i[10]=d*x}else if(t.order==="ZYX"){const v=d*S,T=d*_,w=h*S,N=h*_;i[0]=x*S,i[4]=w*g-T,i[8]=v*g+N,i[1]=x*_,i[5]=N*g+v,i[9]=T*g-w,i[2]=-g,i[6]=h*x,i[10]=d*x}else if(t.order==="YZX"){const v=d*x,T=d*g,w=h*x,N=h*g;i[0]=x*S,i[4]=N-v*_,i[8]=w*_+T,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-g*S,i[6]=T*_+w,i[10]=v-N*_}else if(t.order==="XZY"){const v=d*x,T=d*g,w=h*x,N=h*g;i[0]=x*S,i[4]=-_,i[8]=g*S,i[1]=v*_+N,i[5]=d*S,i[9]=T*_-w,i[2]=w*_-T,i[6]=h*S,i[10]=N*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PE,t,IE)}lookAt(t,i,r){const c=this.elements;return fi.subVectors(t,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),fs.crossVectors(r,fi),fs.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),fs.crossVectors(r,fi)),fs.normalize(),Yc.crossVectors(fi,fs),c[0]=fs.x,c[4]=Yc.x,c[8]=fi.x,c[1]=fs.y,c[5]=Yc.y,c[9]=fi.y,c[2]=fs.z,c[6]=Yc.z,c[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,c=i.elements,f=this.elements,d=r[0],h=r[4],x=r[8],g=r[12],S=r[1],_=r[5],v=r[9],T=r[13],w=r[2],N=r[6],b=r[10],y=r[14],D=r[3],F=r[7],C=r[11],z=r[15],L=c[0],U=c[4],E=c[8],O=c[12],H=c[1],k=c[5],$=c[9],ce=c[13],J=c[2],ee=c[6],W=c[10],q=c[14],de=c[3],re=c[7],pe=c[11],_e=c[15];return f[0]=d*L+h*H+x*J+g*de,f[4]=d*U+h*k+x*ee+g*re,f[8]=d*E+h*$+x*W+g*pe,f[12]=d*O+h*ce+x*q+g*_e,f[1]=S*L+_*H+v*J+T*de,f[5]=S*U+_*k+v*ee+T*re,f[9]=S*E+_*$+v*W+T*pe,f[13]=S*O+_*ce+v*q+T*_e,f[2]=w*L+N*H+b*J+y*de,f[6]=w*U+N*k+b*ee+y*re,f[10]=w*E+N*$+b*W+y*pe,f[14]=w*O+N*ce+b*q+y*_e,f[3]=D*L+F*H+C*J+z*de,f[7]=D*U+F*k+C*ee+z*re,f[11]=D*E+F*$+C*W+z*pe,f[15]=D*O+F*ce+C*q+z*_e,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],c=t[8],f=t[12],d=t[1],h=t[5],x=t[9],g=t[13],S=t[2],_=t[6],v=t[10],T=t[14],w=t[3],N=t[7],b=t[11],y=t[15],D=x*T-g*v,F=h*T-g*_,C=h*v-x*_,z=d*T-g*S,L=d*v-x*S,U=d*_-h*S;return i*(N*D-b*F+y*C)-r*(w*D-b*z+y*L)+c*(w*F-N*z+y*U)-f*(w*C-N*L+b*U)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],c=t[8],f=t[1],d=t[5],h=t[9],x=t[2],g=t[6],S=t[10];return i*(d*S-h*g)-r*(f*S-h*x)+c*(f*g-d*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],c=t[2],f=t[3],d=t[4],h=t[5],x=t[6],g=t[7],S=t[8],_=t[9],v=t[10],T=t[11],w=t[12],N=t[13],b=t[14],y=t[15],D=i*h-r*d,F=i*x-c*d,C=i*g-f*d,z=r*x-c*h,L=r*g-f*h,U=c*g-f*x,E=S*N-_*w,O=S*b-v*w,H=S*y-T*w,k=_*b-v*N,$=_*y-T*N,ce=v*y-T*b,J=D*ce-F*$+C*k+z*H-L*O+U*E;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/J;return t[0]=(h*ce-x*$+g*k)*ee,t[1]=(c*$-r*ce-f*k)*ee,t[2]=(N*U-b*L+y*z)*ee,t[3]=(v*L-_*U-T*z)*ee,t[4]=(x*H-d*ce-g*O)*ee,t[5]=(i*ce-c*H+f*O)*ee,t[6]=(b*C-w*U-y*F)*ee,t[7]=(S*U-v*C+T*F)*ee,t[8]=(d*$-h*H+g*E)*ee,t[9]=(r*H-i*$-f*E)*ee,t[10]=(w*L-N*C+y*D)*ee,t[11]=(_*C-S*L-T*D)*ee,t[12]=(h*O-d*k-x*E)*ee,t[13]=(i*k-r*O+c*E)*ee,t[14]=(N*F-w*z-b*D)*ee,t[15]=(S*z-_*F+v*D)*ee,this}scale(t){const i=this.elements,r=t.x,c=t.y,f=t.z;return i[0]*=r,i[4]*=c,i[8]*=f,i[1]*=r,i[5]*=c,i[9]*=f,i[2]*=r,i[6]*=c,i[10]*=f,i[3]*=r,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,c))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),c=Math.sin(i),f=1-r,d=t.x,h=t.y,x=t.z,g=f*d,S=f*h;return this.set(g*d+r,g*h-c*x,g*x+c*h,0,g*h+c*x,S*h+r,S*x-c*d,0,g*x-c*h,S*x+c*d,f*x*x+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,c,f,d){return this.set(1,r,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,r){const c=this.elements,f=i._x,d=i._y,h=i._z,x=i._w,g=f+f,S=d+d,_=h+h,v=f*g,T=f*S,w=f*_,N=d*S,b=d*_,y=h*_,D=x*g,F=x*S,C=x*_,z=r.x,L=r.y,U=r.z;return c[0]=(1-(N+y))*z,c[1]=(T+C)*z,c[2]=(w-F)*z,c[3]=0,c[4]=(T-C)*L,c[5]=(1-(v+y))*L,c[6]=(b+D)*L,c[7]=0,c[8]=(w+F)*U,c[9]=(b-D)*U,c[10]=(1-(v+N))*U,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,r){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return r.set(1,1,1),i.identity(),this;let d=kr.set(c[0],c[1],c[2]).length();const h=kr.set(c[4],c[5],c[6]).length(),x=kr.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Pi.copy(this);const g=1/d,S=1/h,_=1/x;return Pi.elements[0]*=g,Pi.elements[1]*=g,Pi.elements[2]*=g,Pi.elements[4]*=S,Pi.elements[5]*=S,Pi.elements[6]*=S,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,i.setFromRotationMatrix(Pi),r.x=d,r.y=h,r.z=x,this}makePerspective(t,i,r,c,f,d,h=la,x=!1){const g=this.elements,S=2*f/(i-t),_=2*f/(r-c),v=(i+t)/(i-t),T=(r+c)/(r-c);let w,N;if(x)w=f/(d-f),N=d*f/(d-f);else if(h===la)w=-(d+f)/(d-f),N=-2*d*f/(d-f);else if(h===So)w=-d/(d-f),N=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=v,g[12]=0,g[1]=0,g[5]=_,g[9]=T,g[13]=0,g[2]=0,g[6]=0,g[10]=w,g[14]=N,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,r,c,f,d,h=la,x=!1){const g=this.elements,S=2/(i-t),_=2/(r-c),v=-(i+t)/(i-t),T=-(r+c)/(r-c);let w,N;if(x)w=1/(d-f),N=d/(d-f);else if(h===la)w=-2/(d-f),N=-(d+f)/(d-f);else if(h===So)w=-1/(d-f),N=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=0,g[12]=v,g[1]=0,g[5]=_,g[9]=0,g[13]=T,g[2]=0,g[6]=0,g[10]=w,g[14]=N,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let c=0;c<16;c++)if(i[c]!==r[c])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Nu.prototype.isMatrix4=!0;let on=Nu;const kr=new oe,Pi=new on,PE=new oe(0,0,0),IE=new oe(1,1,1),fs=new oe,Yc=new oe,fi=new oe,Uv=new on,Lv=new ll;class _s{constructor(t=0,i=0,r=0,c=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,c=this._order){return this._x=t,this._y=i,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],x=c[1],g=c[5],S=c[9],_=c[2],v=c[6],T=c[10];switch(i){case"XYZ":this._y=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(x,g)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,T),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(x,f));break;case"ZYX":this._y=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,T),this._z=Math.atan2(x,f)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Lt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,g),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,T),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Uv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let BE=0;const Ov=new oe,Xr=new ll,wa=new on,Zc=new oe,lo=new oe,FE=new oe,HE=new ll,zv=new oe(1,0,0),Pv=new oe(0,1,0),Iv=new oe(0,0,1),Bv={type:"added"},GE={type:"removed"},jr={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Wn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new oe,i=new _s,r=new ll,c=new oe(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new on},normalMatrix:{value:new ht}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Xr.setFromAxisAngle(t,i),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,i){return Xr.setFromAxisAngle(t,i),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(zv,t)}rotateY(t){return this.rotateOnAxis(Pv,t)}rotateZ(t){return this.rotateOnAxis(Iv,t)}translateOnAxis(t,i){return Ov.copy(t).applyQuaternion(this.quaternion),this.position.add(Ov.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zv,t)}translateY(t){return this.translateOnAxis(Pv,t)}translateZ(t){return this.translateOnAxis(Iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Zc.copy(t):Zc.set(t,i,r);const c=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(lo,Zc,this.up):wa.lookAt(Zc,lo,this.up),this.quaternion.setFromRotationMatrix(wa),c&&(wa.extractRotation(c.matrixWorld),Xr.setFromRotationMatrix(wa),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bv),jr.child=t,this.dispatchEvent(jr),jr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(GE),Eh.child=t,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bv),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,c=this.children.length;r<c;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,FE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,HE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*r-f[8]*c,f[13]+=r-f[1]*i-f[5]*r-f[9]*c,f[14]+=c-f[2]*i-f[6]*r-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,c=i.length;r<c;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,x){return h[x.uuid]===void 0&&(h[x.uuid]=x.toJSON(t)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const x=h.shapes;if(Array.isArray(x))for(let g=0,S=x.length;g<S;g++){const _=x[g];f(t.shapes,_)}else f(t.shapes,x)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let x=0,g=this.material.length;x<g;x++)h.push(f(t.materials,this.material[x]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const x=this.animations[h];c.animations.push(f(t.animations,x))}}if(i){const h=d(t.geometries),x=d(t.materials),g=d(t.textures),S=d(t.images),_=d(t.shapes),v=d(t.skeletons),T=d(t.animations),w=d(t.nodes);h.length>0&&(r.geometries=h),x.length>0&&(r.materials=x),g.length>0&&(r.textures=g),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),T.length>0&&(r.animations=T),w.length>0&&(r.nodes=w)}return r.object=c,r;function d(h){const x=[];for(const g in h){const S=h[g];delete S.metadata,x.push(S)}return x}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const c=t.children[r];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Wn.DEFAULT_UP=new oe(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let c=null,f=null,d=null;const h=this._targetRay,x=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){d=!0;for(const N of t.hand.values()){const b=i.getJointPose(N,r),y=this._getHandJoint(g,N);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const S=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],v=S.position.distanceTo(_.position),T=.02,w=.005;g.inputState.pinching&&v>T+w?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&v<=T-w&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else x!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,r),f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,f.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(f.linearVelocity)):x.hasLinearVelocity=!1,f.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(f.angularVelocity)):x.hasAngularVelocity=!1,x.eventsEnabled&&x.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return h!==null&&(h.visible=c!==null),x!==null&&(x.visible=f!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Kc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function Ah(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class zt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=wi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,r,c=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ut.colorSpaceToWorking(this,c),this}setHSL(t,i,r,c=Ut.workingColorSpace){if(t=CE(t,1),i=Lt(i,0,1),r=Lt(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Ah(d,f,t+1/3),this.g=Ah(d,f,t),this.b=Ah(d,f,t-1/3)}return Ut.colorSpaceToWorking(this,c),this}setStyle(t,i=wi){function r(f){f!==void 0&&parseFloat(f)<1&&lt("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:lt("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=wi){const r=q_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}copyLinearToSRGB(t){return this.r=al(t.r),this.g=al(t.g),this.b=al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wi){return Ut.workingToColorSpace(In.copy(this),t),Math.round(Lt(In.r*255,0,255))*65536+Math.round(Lt(In.g*255,0,255))*256+Math.round(Lt(In.b*255,0,255))}getHexString(t=wi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(In.copy(this),i);const r=In.r,c=In.g,f=In.b,d=Math.max(r,c,f),h=Math.min(r,c,f);let x,g;const S=(h+d)/2;if(h===d)x=0,g=0;else{const _=d-h;switch(g=S<=.5?_/(d+h):_/(2-d-h),d){case r:x=(c-f)/_+(c<f?6:0);break;case c:x=(f-r)/_+2;break;case f:x=(r-c)/_+4;break}x/=6}return t.h=x,t.s=g,t.l=S,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=wi){Ut.workingToColorSpace(In.copy(this),t);const i=In.r,r=In.g,c=In.b;return t!==wi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(t,i,r){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+i,ds.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ds),t.getHSL(Qc);const r=_h(ds.h,Qc.h,i),c=_h(ds.s,Qc.s,i),f=_h(ds.l,Qc.l,i);return this.setHSL(r,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*r+f[6]*c,this.g=f[1]*i+f[4]*r+f[7]*c,this.b=f[2]*i+f[5]*r+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new zt;zt.NAMES=q_;class kE extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new oe,Ca=new oe,Rh=new oe,Na=new oe,Wr=new oe,qr=new oe,Fv=new oe,wh=new oe,Ch=new oe,Nh=new oe,Dh=new ln,Uh=new ln,Lh=new ln;class Fi{constructor(t=new oe,i=new oe,r=new oe){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,c){c.subVectors(r,i),Ii.subVectors(t,i),c.cross(Ii);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,r,c,f){Ii.subVectors(c,i),Ca.subVectors(r,i),Rh.subVectors(t,i);const d=Ii.dot(Ii),h=Ii.dot(Ca),x=Ii.dot(Rh),g=Ca.dot(Ca),S=Ca.dot(Rh),_=d*g-h*h;if(_===0)return f.set(0,0,0),null;const v=1/_,T=(g*x-h*S)*v,w=(d*S-h*x)*v;return f.set(1-T-w,w,T)}static containsPoint(t,i,r,c){return this.getBarycoord(t,i,r,c,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,i,r,c,f,d,h,x){return this.getBarycoord(t,i,r,c,Na)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(f,Na.x),x.addScaledVector(d,Na.y),x.addScaledVector(h,Na.z),x)}static getInterpolatedAttribute(t,i,r,c,f,d){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,r),Lh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Dh,f.x),d.addScaledVector(Uh,f.y),d.addScaledVector(Lh,f.z),d}static isFrontFacing(t,i,r,c){return Ii.subVectors(r,i),Ca.subVectors(t,i),Ii.cross(Ca).dot(c)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,c){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,r,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Ii.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,c,f){return Fi.getInterpolation(t,this.a,this.b,this.c,i,r,c,f)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,c=this.b,f=this.c;let d,h;Wr.subVectors(c,r),qr.subVectors(f,r),wh.subVectors(t,r);const x=Wr.dot(wh),g=qr.dot(wh);if(x<=0&&g<=0)return i.copy(r);Ch.subVectors(t,c);const S=Wr.dot(Ch),_=qr.dot(Ch);if(S>=0&&_<=S)return i.copy(c);const v=x*_-S*g;if(v<=0&&x>=0&&S<=0)return d=x/(x-S),i.copy(r).addScaledVector(Wr,d);Nh.subVectors(t,f);const T=Wr.dot(Nh),w=qr.dot(Nh);if(w>=0&&T<=w)return i.copy(f);const N=T*g-x*w;if(N<=0&&g>=0&&w<=0)return h=g/(g-w),i.copy(r).addScaledVector(qr,h);const b=S*w-T*_;if(b<=0&&_-S>=0&&T-w>=0)return Fv.subVectors(f,c),h=(_-S)/(_-S+(T-w)),i.copy(c).addScaledVector(Fv,h);const y=1/(b+N+v);return d=N*y,h=v*y,i.copy(r).addScaledVector(Wr,d).addScaledVector(qr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Mo{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Bi):Bi.fromBufferAttribute(f,d),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jc.copy(r.boundingBox)),Jc.applyMatrix4(t.matrixWorld),this.union(Jc)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),$c.subVectors(this.max,oo),Yr.subVectors(t.a,oo),Zr.subVectors(t.b,oo),Kr.subVectors(t.c,oo),hs.subVectors(Zr,Yr),ps.subVectors(Kr,Zr),ks.subVectors(Yr,Kr);let i=[0,-hs.z,hs.y,0,-ps.z,ps.y,0,-ks.z,ks.y,hs.z,0,-hs.x,ps.z,0,-ps.x,ks.z,0,-ks.x,-hs.y,hs.x,0,-ps.y,ps.x,0,-ks.y,ks.x,0];return!Oh(i,Yr,Zr,Kr,$c)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,Yr,Zr,Kr,$c))?!1:(eu.crossVectors(hs,ps),i=[eu.x,eu.y,eu.z],Oh(i,Yr,Zr,Kr,$c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Bi=new oe,Jc=new Mo,Yr=new oe,Zr=new oe,Kr=new oe,hs=new oe,ps=new oe,ks=new oe,oo=new oe,$c=new oe,eu=new oe,Xs=new oe;function Oh(l,t,i,r,c){for(let f=0,d=l.length-3;f<=d;f+=3){Xs.fromArray(l,f);const h=c.x*Math.abs(Xs.x)+c.y*Math.abs(Xs.y)+c.z*Math.abs(Xs.z),x=t.dot(Xs),g=i.dot(Xs),S=r.dot(Xs);if(Math.max(-Math.max(x,g,S),Math.min(x,g,S))>h)return!1}return!0}const _n=new oe,tu=new bt;let XE=0;class ca extends er{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=EE,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[r+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tu.fromBufferAttribute(this,i),tu.applyMatrix3(t),this.setXY(i,tu.x,tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=ro(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,c){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),c=$n(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this}setXYZW(t,i,r,c,f){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),c=$n(c,this.array),f=$n(f,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Y_ extends ca{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Z_ extends ca{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class qn extends ca{constructor(t,i,r){super(new Float32Array(t),i,r)}}const jE=new Mo,co=new oe,zh=new oe;class Uu{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):jE.setFromPoints(t).getCenter(r);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,r.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;co.subVectors(t,this.center);const i=co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),c=(r-this.radius)*.5;this.center.addScaledVector(co,c/r),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(co.copy(t.center).add(zh)),this.expandByPoint(co.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let WE=0;const Ri=new on,Ph=new Wn,Qr=new oe,di=new Mo,uo=new Mo,Rn=new oe;class mi extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(TE(t)?Z_:Y_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new ht().getNormalMatrix(t);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,i,r){return Ri.makeTranslation(t,i,r),this.applyMatrix4(Ri),this}scale(t,i,r){return Ri.makeScale(t,i,r),this.applyMatrix4(Ri),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new qn(r,3))}else{const r=Math.min(t.length,i.count);for(let c=0;c<r;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,c=i.length;r<c;r++){const f=i[r];di.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];uo.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(di.min,uo.min),di.expandByPoint(Rn),Rn.addVectors(di.max,uo.max),di.expandByPoint(Rn)):(di.expandByPoint(uo.min),di.expandByPoint(uo.max))}di.getCenter(r);let c=0;for(let f=0,d=t.count;f<d;f++)Rn.fromBufferAttribute(t,f),c=Math.max(c,r.distanceToSquared(Rn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],x=this.morphTargetsRelative;for(let g=0,S=h.count;g<S;g++)Rn.fromBufferAttribute(h,g),x&&(Qr.fromBufferAttribute(t,g),Rn.add(Qr)),c=Math.max(c,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new ca(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],x=[];for(let E=0;E<r.count;E++)h[E]=new oe,x[E]=new oe;const g=new oe,S=new oe,_=new oe,v=new bt,T=new bt,w=new bt,N=new oe,b=new oe;function y(E,O,H){g.fromBufferAttribute(r,E),S.fromBufferAttribute(r,O),_.fromBufferAttribute(r,H),v.fromBufferAttribute(f,E),T.fromBufferAttribute(f,O),w.fromBufferAttribute(f,H),S.sub(g),_.sub(g),T.sub(v),w.sub(v);const k=1/(T.x*w.y-w.x*T.y);isFinite(k)&&(N.copy(S).multiplyScalar(w.y).addScaledVector(_,-T.y).multiplyScalar(k),b.copy(_).multiplyScalar(T.x).addScaledVector(S,-w.x).multiplyScalar(k),h[E].add(N),h[O].add(N),h[H].add(N),x[E].add(b),x[O].add(b),x[H].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let E=0,O=D.length;E<O;++E){const H=D[E],k=H.start,$=H.count;for(let ce=k,J=k+$;ce<J;ce+=3)y(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const F=new oe,C=new oe,z=new oe,L=new oe;function U(E){z.fromBufferAttribute(c,E),L.copy(z);const O=h[E];F.copy(O),F.sub(z.multiplyScalar(z.dot(O))).normalize(),C.crossVectors(L,O);const k=C.dot(x[E])<0?-1:1;d.setXYZW(E,F.x,F.y,F.z,k)}for(let E=0,O=D.length;E<O;++E){const H=D[E],k=H.start,$=H.count;for(let ce=k,J=k+$;ce<J;ce+=3)U(t.getX(ce+0)),U(t.getX(ce+1)),U(t.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ca(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,T=r.count;v<T;v++)r.setXYZ(v,0,0,0);const c=new oe,f=new oe,d=new oe,h=new oe,x=new oe,g=new oe,S=new oe,_=new oe;if(t)for(let v=0,T=t.count;v<T;v+=3){const w=t.getX(v+0),N=t.getX(v+1),b=t.getX(v+2);c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,b),S.subVectors(d,f),_.subVectors(c,f),S.cross(_),h.fromBufferAttribute(r,w),x.fromBufferAttribute(r,N),g.fromBufferAttribute(r,b),h.add(S),x.add(S),g.add(S),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(N,x.x,x.y,x.z),r.setXYZ(b,g.x,g.y,g.z)}else for(let v=0,T=i.count;v<T;v+=3)c.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,f),_.subVectors(c,f),S.cross(_),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,x){const g=h.array,S=h.itemSize,_=h.normalized,v=new g.constructor(x.length*S);let T=0,w=0;for(let N=0,b=x.length;N<b;N++){h.isInterleavedBufferAttribute?T=x[N]*h.data.stride+h.offset:T=x[N]*S;for(let y=0;y<S;y++)v[w++]=g[T++]}return new ca(v,S,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,r=this.index.array,c=this.attributes;for(const h in c){const x=c[h],g=t(x,r);i.setAttribute(h,g)}const f=this.morphAttributes;for(const h in f){const x=[],g=f[h];for(let S=0,_=g.length;S<_;S++){const v=g[S],T=t(v,r);x.push(T)}i.morphAttributes[h]=x}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,x=d.length;h<x;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const x=this.parameters;for(const g in x)x[g]!==void 0&&(t[g]=x[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const x in r){const g=r[x];t.data.attributes[x]=g.toJSON(t.data)}const c={};let f=!1;for(const x in this.morphAttributes){const g=this.morphAttributes[x],S=[];for(let _=0,v=g.length;_<v;_++){const T=g[_];S.push(T.toJSON(t.data))}S.length>0&&(c[x]=S,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const c=t.attributes;for(const g in c){const S=c[g];this.setAttribute(g,S.clone(i))}const f=t.morphAttributes;for(const g in f){const S=[],_=f[g];for(let v=0,T=_.length;v<T;v++)S.push(_[v].clone(i));this.morphAttributes[g]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let g=0,S=d.length;g<S;g++){const _=d[g];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const x=t.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new oe,qE=new oe,YE=new ht;class gs{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,c){return this.normal.set(t,i,r),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const c=Ih.subVectors(r,i).cross(qE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const c=t.delta(Ih),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||YE.getNormalMatrix(t),c=this.coplanarPoint(Ih).applyMatrix4(t),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let ZE=0;class ol extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=go,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=R_,this.blendDst=w_,this.blendEquation=tl,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xh,this.stencilZFail=xh,this.stencilZPass=xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector2&&r&&r.isVector2||c&&c.isEuler&&r&&r.isEuler||c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const d=[];for(const h in f){const x=f[h];delete x.metadata,d.push(x)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new gs().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new bt().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const c=i.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ua=new oe,Bh=new oe,nu=new oe,iu=new oe;class K_{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(t))}distanceSqToSegment(t,i,r,c){Bh.copy(t).add(i).multiplyScalar(.5),nu.copy(i).sub(t).normalize(),iu.copy(this.origin).sub(Bh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(nu),h=iu.dot(this.direction),x=-iu.dot(nu),g=iu.lengthSq(),S=Math.abs(1-d*d);let _,v,T,w;if(S>0)if(_=d*x-h,v=d*h-x,w=f*S,_>=0)if(v>=-w)if(v<=w){const N=1/S;_*=N,v*=N,T=_*(_+d*v+2*h)+v*(d*_+v+2*x)+g}else v=f,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*x)+g;else v=-f,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*x)+g;else v<=-w?(_=Math.max(0,-(-d*f+h)),v=_>0?-f:Math.min(Math.max(-f,-x),f),T=-_*_+v*(v+2*x)+g):v<=w?(_=0,v=Math.min(Math.max(-f,-x),f),T=v*(v+2*x)+g):(_=Math.max(0,-(d*f+h)),v=_>0?f:Math.min(Math.max(-f,-x),f),T=-_*_+v*(v+2*x)+g);else v=d>0?-f:f,_=Math.max(0,-(d*v+h)),T=-_*_+v*(v+2*x)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),c&&c.copy(Bh).addScaledVector(nu,v),T}intersectSphere(t,i){if(t.radius<0)return null;Ua.subVectors(t.center,this.origin);const r=Ua.dot(this.direction),c=Ua.dot(Ua)-r*r,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=r-d,x=r+d;return x<0?null:h<0?this.at(x,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,c,f,d,h,x;const g=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return g>=0?(r=(t.min.x-v.x)*g,c=(t.max.x-v.x)*g):(r=(t.max.x-v.x)*g,c=(t.min.x-v.x)*g),S>=0?(f=(t.min.y-v.y)*S,d=(t.max.y-v.y)*S):(f=(t.max.y-v.y)*S,d=(t.min.y-v.y)*S),r>d||f>c||((f>r||isNaN(r))&&(r=f),(d<c||isNaN(c))&&(c=d),_>=0?(h=(t.min.z-v.z)*_,x=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,x=(t.min.z-v.z)*_),r>x||h>c)||((h>r||r!==r)&&(r=h),(x<c||c!==c)&&(c=x),c<0)?null:this.at(r>=0?r:c,i)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,i,r,c,f){const d=this.origin,h=this.direction,x=h.x,g=h.y,S=h.z,_=t.x-d.x,v=t.y-d.y,T=t.z-d.z,w=i.x-d.x,N=i.y-d.y,b=i.z-d.z,y=r.x-d.x,D=r.y-d.y,F=r.z-d.z,C=Math.abs(x),z=Math.abs(g),L=Math.abs(S);let U,E,O,H,k,$,ce,J,ee,W,q,de;if(C>=z&&C>=L?(O=x,$=_,ee=w,de=y,x>=0?(U=g,E=S,H=v,k=T,ce=N,J=b,W=D,q=F):(U=S,E=g,H=T,k=v,ce=b,J=N,W=F,q=D)):z>=L?(O=g,$=v,ee=N,de=D,g>=0?(U=S,E=x,H=T,k=_,ce=b,J=w,W=F,q=y):(U=x,E=S,H=_,k=T,ce=w,J=b,W=y,q=F)):(O=S,$=T,ee=b,de=F,S>=0?(U=x,E=g,H=_,k=v,ce=w,J=N,W=y,q=D):(U=g,E=x,H=v,k=_,ce=N,J=w,W=D,q=y)),O===0)return null;const re=U/O,pe=E/O,_e=1/O,Ze=H-re*$,qe=k-pe*$,B=ce-re*ee,ge=J-pe*ee,we=W-re*de,Z=q-pe*de,he=we*ge-Z*B,Ae=Ze*Z-qe*we,Te=B*qe-ge*Ze;if(c){if(he<0||Ae<0||Te<0)return null}else if((he<0||Ae<0||Te<0)&&(he>0||Ae>0||Te>0))return null;const me=he+Ae+Te;if(me===0)return null;const Re=_e*(he*$+Ae*ee+Te*de);return(me>0?Re<0:Re>0)?null:this.at(Re/me,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cu extends ol{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Hv=new on,js=new K_,au=new Uu,Gv=new oe,su=new oe,ru=new oe,lu=new oe,Fh=new oe,ou=new oe,Vv=new oe,cu=new oe;class Ci extends Wn{constructor(t=new mi,i=new Cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){ou.set(0,0,0);for(let x=0,g=f.length;x<g;x++){const S=h[x],_=f[x];S!==0&&(Fh.fromBufferAttribute(_,t),d?ou.addScaledVector(Fh,S):ou.addScaledVector(Fh.sub(i),S))}i.add(ou)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),au.copy(r.boundingSphere),au.applyMatrix4(f),js.copy(t.ray).recast(t.near),!(au.containsPoint(js.origin)===!1&&(js.intersectSphere(au,Gv)===null||js.origin.distanceToSquared(Gv)>(t.far-t.near)**2))&&(Hv.copy(f).invert(),js.copy(t.ray).applyMatrix4(Hv),!(r.boundingBox!==null&&js.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,js)))}_computeIntersections(t,i,r){let c;const f=this.geometry,d=this.material,h=f.index,x=f.attributes.position,g=f.attributes.uv,S=f.attributes.uv1,_=f.attributes.normal,v=f.groups,T=f.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,N=v.length;w<N;w++){const b=v[w],y=d[b.materialIndex],D=Math.max(b.start,T.start),F=Math.min(h.count,Math.min(b.start+b.count,T.start+T.count));for(let C=D,z=F;C<z;C+=3){const L=h.getX(C),U=h.getX(C+1),E=h.getX(C+2);c=uu(this,y,t,r,g,S,_,L,U,E),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=b.materialIndex,i.push(c))}}else{const w=Math.max(0,T.start),N=Math.min(h.count,T.start+T.count);for(let b=w,y=N;b<y;b+=3){const D=h.getX(b),F=h.getX(b+1),C=h.getX(b+2);c=uu(this,d,t,r,g,S,_,D,F,C),c&&(c.faceIndex=Math.floor(b/3),i.push(c))}}else if(x!==void 0)if(Array.isArray(d))for(let w=0,N=v.length;w<N;w++){const b=v[w],y=d[b.materialIndex],D=Math.max(b.start,T.start),F=Math.min(x.count,Math.min(b.start+b.count,T.start+T.count));for(let C=D,z=F;C<z;C+=3){const L=C,U=C+1,E=C+2;c=uu(this,y,t,r,g,S,_,L,U,E),c&&(c.faceIndex=Math.floor(C/3),c.face.materialIndex=b.materialIndex,i.push(c))}}else{const w=Math.max(0,T.start),N=Math.min(x.count,T.start+T.count);for(let b=w,y=N;b<y;b+=3){const D=b,F=b+1,C=b+2;c=uu(this,d,t,r,g,S,_,D,F,C),c&&(c.faceIndex=Math.floor(b/3),i.push(c))}}}}function KE(l,t,i,r,c,f,d,h){let x;if(t.side===ei?x=r.intersectTriangle(d,f,c,!0,h):x=r.intersectTriangle(c,f,d,t.side===Qs,h),x===null)return null;cu.copy(h),cu.applyMatrix4(l.matrixWorld);const g=i.ray.origin.distanceTo(cu);return g<i.near||g>i.far?null:{distance:g,point:cu.clone(),object:l}}function uu(l,t,i,r,c,f,d,h,x,g){l.getVertexPosition(h,su),l.getVertexPosition(x,ru),l.getVertexPosition(g,lu);const S=KE(l,t,i,r,su,ru,lu,Vv);if(S){const _=new oe;Fi.getBarycoord(Vv,su,ru,lu,_),c&&(S.uv=Fi.getInterpolatedAttribute(c,h,x,g,_,new bt)),f&&(S.uv1=Fi.getInterpolatedAttribute(f,h,x,g,_,new bt)),d&&(S.normal=Fi.getInterpolatedAttribute(d,h,x,g,_,new oe),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:x,c:g,normal:new oe,materialIndex:0};Fi.getNormal(su,ru,lu,v.normal),S.face=v,S.barycoord=_}return S}class QE extends jn{constructor(t=null,i=1,r=1,c,f,d,h,x,g=On,S=On,_,v){super(null,d,h,x,g,S,c,f,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ws=new Uu,JE=new bt(.5,.5),fu=new oe;class $p{constructor(t=new gs,i=new gs,r=new gs,c=new gs,f=new gs,d=new gs){this.planes=[t,i,r,c,f,d]}set(t,i,r,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=la,r=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],x=f[2],g=f[3],S=f[4],_=f[5],v=f[6],T=f[7],w=f[8],N=f[9],b=f[10],y=f[11],D=f[12],F=f[13],C=f[14],z=f[15];if(c[0].setComponents(g-d,T-S,y-w,z-D).normalize(),c[1].setComponents(g+d,T+S,y+w,z+D).normalize(),c[2].setComponents(g+h,T+_,y+N,z+F).normalize(),c[3].setComponents(g-h,T-_,y-N,z-F).normalize(),r)c[4].setComponents(x,v,b,C).normalize(),c[5].setComponents(g-x,T-v,y-b,z-C).normalize();else if(c[4].setComponents(g-x,T-v,y-b,z-C).normalize(),i===la)c[5].setComponents(g+x,T+v,y+b,z+C).normalize();else if(i===So)c[5].setComponents(x,v,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const i=JE.distanceTo(t.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const i=this.planes,r=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const c=i[r];if(fu.x=c.normal.x>0?t.max.x:t.min.x,fu.y=c.normal.y>0?t.max.y:t.min.y,fu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(fu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q_ extends ol{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kv=new on,zp=new K_,du=new Uu,hu=new oe;class $E extends Wn{constructor(t=new mi,i=new Q_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,c=this.matrixWorld,f=t.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(c),du.radius+=f,t.ray.intersectsSphere(du)===!1)return;kv.copy(c).invert(),zp.copy(t.ray).applyMatrix4(kv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),x=h*h,g=r.index,_=r.attributes.position;if(g!==null){const v=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let w=v,N=T;w<N;w++){const b=g.getX(w);hu.fromBufferAttribute(_,b),Xv(hu,b,x,c,t,i,this)}}else{const v=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let w=v,N=T;w<N;w++)hu.fromBufferAttribute(_,w),Xv(hu,w,x,c,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const c=i[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Xv(l,t,i,r,c,f,d){const h=zp.distanceSqToPoint(l);if(h<i){const x=new oe;zp.closestPointToPoint(l,x),x.applyMatrix4(r);const g=c.ray.origin.distanceTo(x);if(g<c.near||g>c.far)return;f.push({distance:g,distanceToRay:Math.sqrt(h),point:x,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class J_ extends jn{constructor(t=[],i=Js,r,c,f,d,h,x,g,S){super(t,i,r,c,f,d,h,x,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yo extends jn{constructor(t,i,r=ua,c,f,d,h=On,x=On,g,S=Pa,_=1){if(S!==Pa&&S!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,c,f,d,h,x,S,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class e1 extends yo{constructor(t,i=ua,r=Js,c,f,d=On,h=On,x,g=Pa){const S={width:t,height:t,depth:1},_=[S,S,S,S,S,S];super(t,t,i,r,c,f,d,h,x,g),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $_ extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Eo extends mi{constructor(t=1,i=1,r=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const x=[],g=[],S=[],_=[];let v=0,T=0;w("z","y","x",-1,-1,r,i,t,d,f,0),w("z","y","x",1,-1,r,i,-t,d,f,1),w("x","z","y",1,1,t,r,i,c,d,2),w("x","z","y",1,-1,t,r,-i,c,d,3),w("x","y","z",1,-1,t,i,r,c,f,4),w("x","y","z",-1,-1,t,i,-r,c,f,5),this.setIndex(x),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(S,3)),this.setAttribute("uv",new qn(_,2));function w(N,b,y,D,F,C,z,L,U,E,O){const H=C/U,k=z/E,$=C/2,ce=z/2,J=L/2,ee=U+1,W=E+1;let q=0,de=0;const re=new oe;for(let pe=0;pe<W;pe++){const _e=pe*k-ce;for(let Ze=0;Ze<ee;Ze++){const qe=Ze*H-$;re[N]=qe*D,re[b]=_e*F,re[y]=J,g.push(re.x,re.y,re.z),re[N]=0,re[b]=0,re[y]=L>0?1:-1,S.push(re.x,re.y,re.z),_.push(Ze/U),_.push(1-pe/E),q+=1}}for(let pe=0;pe<E;pe++)for(let _e=0;_e<U;_e++){const Ze=v+_e+ee*pe,qe=v+_e+ee*(pe+1),B=v+(_e+1)+ee*(pe+1),ge=v+(_e+1)+ee*pe;x.push(Ze,qe,ge),x.push(qe,B,ge),de+=6}h.addGroup(T,de,O),T+=de,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class em extends mi{constructor(t=[],i=[],r=1,c=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:c};const f=[],d=[];h(c),g(r),S(),this.setAttribute("position",new qn(f,3)),this.setAttribute("normal",new qn(f.slice(),3)),this.setAttribute("uv",new qn(d,2)),c===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const F=new oe,C=new oe,z=new oe;for(let L=0;L<i.length;L+=3)T(i[L+0],F),T(i[L+1],C),T(i[L+2],z),x(F,C,z,D)}function x(D,F,C,z){const L=z+1,U=[];for(let E=0;E<=L;E++){U[E]=[];const O=D.clone().lerp(C,E/L),H=F.clone().lerp(C,E/L),k=L-E;for(let $=0;$<=k;$++)$===0&&E===L?U[E][$]=O:U[E][$]=O.clone().lerp(H,$/k)}for(let E=0;E<L;E++)for(let O=0;O<2*(L-E)-1;O++){const H=Math.floor(O/2);O%2===0?(v(U[E][H+1]),v(U[E+1][H]),v(U[E][H])):(v(U[E][H+1]),v(U[E+1][H+1]),v(U[E+1][H]))}}function g(D){const F=new oe;for(let C=0;C<f.length;C+=3)F.x=f[C+0],F.y=f[C+1],F.z=f[C+2],F.normalize().multiplyScalar(D),f[C+0]=F.x,f[C+1]=F.y,f[C+2]=F.z}function S(){const D=new oe;for(let F=0;F<f.length;F+=3){D.x=f[F+0],D.y=f[F+1],D.z=f[F+2];const C=b(D)/2/Math.PI+.5,z=y(D)/Math.PI+.5;d.push(C,1-z)}w(),_()}function _(){for(let D=0;D<d.length;D+=6){const F=d[D+0],C=d[D+2],z=d[D+4],L=Math.max(F,C,z),U=Math.min(F,C,z);L>.9&&U<.1&&(F<.2&&(d[D+0]+=1),C<.2&&(d[D+2]+=1),z<.2&&(d[D+4]+=1))}}function v(D){f.push(D.x,D.y,D.z)}function T(D,F){const C=D*3;F.x=t[C+0],F.y=t[C+1],F.z=t[C+2]}function w(){const D=new oe,F=new oe,C=new oe,z=new oe,L=new bt,U=new bt,E=new bt;for(let O=0,H=0;O<f.length;O+=9,H+=6){D.set(f[O+0],f[O+1],f[O+2]),F.set(f[O+3],f[O+4],f[O+5]),C.set(f[O+6],f[O+7],f[O+8]),L.set(d[H+0],d[H+1]),U.set(d[H+2],d[H+3]),E.set(d[H+4],d[H+5]),z.copy(D).add(F).add(C).divideScalar(3);const k=b(z);N(L,H+0,D,k),N(U,H+2,F,k),N(E,H+4,C,k)}}function N(D,F,C,z){z<0&&D.x===1&&(d[F]=D.x-1),C.x===0&&C.z===0&&(d[F]=z/2/Math.PI+.5)}function b(D){return Math.atan2(D.z,-D.x)}function y(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new em(t.vertices,t.indices,t.radius,t.detail)}}class tm extends em{constructor(t=1,i=0){const r=(1+Math.sqrt(5))/2,c=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(c,f,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new tm(t.radius,t.detail)}}class Lu extends mi{constructor(t=1,i=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(r),x=Math.floor(c),g=h+1,S=x+1,_=t/h,v=i/x,T=[],w=[],N=[],b=[];for(let y=0;y<S;y++){const D=y*v-d;for(let F=0;F<g;F++){const C=F*_-f;w.push(C,-D,0),N.push(0,0,1),b.push(F/h),b.push(1-y/x)}}for(let y=0;y<x;y++)for(let D=0;D<h;D++){const F=D+g*y,C=D+g*(y+1),z=D+1+g*(y+1),L=D+1+g*y;T.push(F,C,L),T.push(C,z,L)}this.setIndex(T),this.setAttribute("position",new qn(w,3)),this.setAttribute("normal",new qn(N,3)),this.setAttribute("uv",new qn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class nm extends mi{constructor(t=.5,i=1,r=32,c=1,f=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:c,thetaStart:f,thetaLength:d},r=Math.max(3,r),c=Math.max(1,c);const h=[],x=[],g=[],S=[];let _=t;const v=(i-t)/c,T=new oe,w=new bt;for(let N=0;N<=c;N++){for(let b=0;b<=r;b++){const y=f+b/r*d;T.x=_*Math.cos(y),T.y=_*Math.sin(y),x.push(T.x,T.y,T.z),g.push(0,0,1),w.x=(T.x/i+1)/2,w.y=(T.y/i+1)/2,S.push(w.x,w.y)}_+=v}for(let N=0;N<c;N++){const b=N*(r+1);for(let y=0;y<r;y++){const D=y+b,F=D,C=D+r+1,z=D+r+2,L=D+1;h.push(F,C,L),h.push(C,z,L)}}this.setIndex(h),this.setAttribute("position",new qn(x,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}function rl(l){const t={};for(const i in l){t[i]={};for(const r in l[i]){const c=l[i][r];if(jv(c))c.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=c.clone();else if(Array.isArray(c))if(jv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][r]=f}else t[i][r]=c.slice();else t[i][r]=c}}return t}function Xn(l){const t={};for(let i=0;i<l.length;i++){const r=rl(l[i]);for(const c in r)t[c]=r[c]}return t}function jv(l){return l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)}function t1(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function eS(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const n1={clone:rl,merge:Xn};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends ol{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rl(t.uniforms),this.uniformsGroups=t1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const c=t.uniforms[r];switch(this.uniforms[r]={},c.type){case"t":this.uniforms[r].value=i[c.value]||null;break;case"c":this.uniforms[r].value=new zt().setHex(c.value);break;case"v2":this.uniforms[r].value=new bt().fromArray(c.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(c.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(c.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(c.value);break;case"m4":this.uniforms[r].value=new on().fromArray(c.value);break;default:this.uniforms[r].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class s1 extends da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class r1 extends ol{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lp,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class l1 extends ol{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o1 extends ol{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tS extends Wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Hh=new on,Wv=new oe,qv=new oe;class c1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $p,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Wv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wv),qv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(qv),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,c){Hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(Hh,t.coordinateSystem,t.reversedDepth);const f=this._frameExtents,d=c?c.z/f.x:1,h=c?c.w/f.y:1,x=c?c.x/f.x:0,g=c?c.y/f.y:0;t.coordinateSystem===So||t.reversedDepth?i.set(.5*d,0,0,.5*d+x,0,.5*h,0,.5*h+g,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+x,0,.5*h,0,.5*h+g,0,0,.5,.5,0,0,0,1),i.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pu=new oe,mu=new ll,na=new oe;class nS extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pu,mu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,na.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(pu,mu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new oe,Yv=new bt,Zv=new bt;class hi extends nS{constructor(t=50,i=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,i){return this.getViewBounds(t,Yv,Zv),i.subVectors(Zv,Yv)}setViewOffset(t,i,r,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(vh*.5*this.fov)/this.zoom,r=2*i,c=this.aspect*r,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const x=d.fullWidth,g=d.fullHeight;f+=d.offsetX*c/x,i-=d.offsetY*r/g,c*=d.width/x,r*=d.height/g}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class u1 extends c1{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class Kv extends tS{constructor(t,i,r=0,c=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=c,this.shadow=new u1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class iS extends nS{constructor(t=-1,i=1,r=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-t,d=r+t,h=c+i,x=c-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,d=f+g*this.view.width,h-=S*this.view.offsetY,x=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,x,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class f1 extends tS{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Jr=-90,$r=1;class d1 extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new hi(Jr,$r,t,i);c.layers=this.layers,this.add(c);const f=new hi(Jr,$r,t,i);f.layers=this.layers,this.add(f);const d=new hi(Jr,$r,t,i);d.layers=this.layers,this.add(d);const h=new hi(Jr,$r,t,i);h.layers=this.layers,this.add(h);const x=new hi(Jr,$r,t,i);x.layers=this.layers,this.add(x);const g=new hi(Jr,$r,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,c,f,d,h,x]=i;for(const g of i)this.remove(g);if(t===la)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(t===So)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,x,g,S]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(r,0,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,1,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,3,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(r,4,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),r.texture.generateMipmaps=N,t.setRenderTarget(r,5,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(_,v,T),t.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class h1 extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class p1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const lm=class lm{constructor(t,i,r,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=r,f[3]=c,this}};lm.prototype.isMatrix2=!0;let Qv=lm;function Jv(l,t,i,r){const c=m1(r);switch(i){case G_:return l*t;case k_:return l*t/c.components*c.byteLength;case qp:return l*t/c.components*c.byteLength;case $s:return l*t*2/c.components*c.byteLength;case Yp:return l*t*2/c.components*c.byteLength;case V_:return l*t*3/c.components*c.byteLength;case Hi:return l*t*4/c.components*c.byteLength;case Zp:return l*t*4/c.components*c.byteLength;case _u:case Su:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case yu:case bu:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case ap:case rp:return Math.max(l,16)*Math.max(t,8)/4;case ip:case sp:return Math.max(l,8)*Math.max(t,8)/2;case lp:case op:case up:case fp:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case cp:case Eu:case dp:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case hp:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case pp:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case mp:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case gp:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case xp:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case vp:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case _p:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case Sp:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case yp:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case bp:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case Mp:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case Ep:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case Tp:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case Ap:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case Rp:case wp:case Cp:return Math.ceil(l/4)*Math.ceil(t/4)*16;case Np:case Dp:return Math.ceil(l/4)*Math.ceil(t/4)*8;case Tu:case Up:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function m1(l){switch(l){case pi:case I_:return{byteLength:1,components:1};case vo:case B_:case fa:return{byteLength:2,components:1};case jp:case Wp:return{byteLength:2,components:4};case ua:case Xp:case ra:return{byteLength:4,components:1};case F_:case H_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function aS(){let l=null,t=!1,i=null,r=null;function c(f,d){r=l.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&l!==null&&(r=l.requestAnimationFrame(c),t=!0)},stop:function(){l!==null&&l.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){l=f}}}function g1(l){const t=new WeakMap;function i(h,x){const g=h.array,S=h.usage,_=g.byteLength,v=l.createBuffer();l.bindBuffer(x,v),l.bufferData(x,g,S),h.onUploadCallback();let T;if(g instanceof Float32Array)T=l.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)T=l.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?T=l.HALF_FLOAT:T=l.UNSIGNED_SHORT;else if(g instanceof Int16Array)T=l.SHORT;else if(g instanceof Uint32Array)T=l.UNSIGNED_INT;else if(g instanceof Int32Array)T=l.INT;else if(g instanceof Int8Array)T=l.BYTE;else if(g instanceof Uint8Array)T=l.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)T=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:v,type:T,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,x,g){const S=x.array,_=x.updateRanges;if(l.bindBuffer(g,h),_.length===0)l.bufferSubData(g,0,S);else{_.sort((T,w)=>T.start-w.start);let v=0;for(let T=1;T<_.length;T++){const w=_[v],N=_[T];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++v,_[v]=N)}_.length=v+1;for(let T=0,w=_.length;T<w;T++){const N=_[T];l.bufferSubData(g,N.start*S.BYTES_PER_ELEMENT,S,N.start,N.count)}x.clearUpdateRanges()}x.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const x=t.get(h);x&&(l.deleteBuffer(x.buffer),t.delete(h))}function d(h,x){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=t.get(h);(!S||S.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=t.get(h);if(g===void 0)t.set(h,i(h,x));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,h,x),g.version=h.version}}return{get:c,remove:f,update:d}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,uT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_T=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ST=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ET=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:x1,alphahash_pars_fragment:v1,alphamap_fragment:_1,alphamap_pars_fragment:S1,alphatest_fragment:y1,alphatest_pars_fragment:b1,aomap_fragment:M1,aomap_pars_fragment:E1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:R1,beginnormal_vertex:w1,bsdfs:C1,iridescence_fragment:N1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:L1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:z1,color_fragment:P1,color_pars_fragment:I1,color_pars_vertex:B1,color_vertex:F1,common:H1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:V1,displacementmap_pars_vertex:k1,displacementmap_vertex:X1,emissivemap_fragment:j1,emissivemap_pars_fragment:W1,colorspace_fragment:q1,colorspace_pars_fragment:Y1,envmap_fragment:Z1,envmap_common_pars_fragment:K1,envmap_pars_fragment:Q1,envmap_pars_vertex:J1,envmap_physical_pars_fragment:cT,envmap_vertex:$1,fog_vertex:eT,fog_pars_vertex:tT,fog_fragment:nT,fog_pars_fragment:iT,gradientmap_pars_fragment:aT,lightmap_pars_fragment:sT,lights_lambert_fragment:rT,lights_lambert_pars_fragment:lT,lights_pars_begin:oT,lights_toon_fragment:uT,lights_toon_pars_fragment:fT,lights_phong_fragment:dT,lights_phong_pars_fragment:hT,lights_physical_fragment:pT,lights_physical_pars_fragment:mT,lights_fragment_begin:gT,lights_fragment_maps:xT,lights_fragment_end:vT,lightprobes_pars_fragment:_T,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:yT,logdepthbuf_pars_vertex:bT,logdepthbuf_vertex:MT,map_fragment:ET,map_pars_fragment:TT,map_particle_fragment:AT,map_particle_pars_fragment:RT,metalnessmap_fragment:wT,metalnessmap_pars_fragment:CT,morphinstance_vertex:NT,morphcolor_vertex:DT,morphnormal_vertex:UT,morphtarget_pars_vertex:LT,morphtarget_vertex:OT,normal_fragment_begin:zT,normal_fragment_maps:PT,normal_pars_fragment:IT,normal_pars_vertex:BT,normal_vertex:FT,normalmap_pars_fragment:HT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:kT,iridescence_pars_fragment:XT,opaque_fragment:jT,packing:WT,premultiplied_alpha_fragment:qT,project_vertex:YT,dithering_fragment:ZT,dithering_pars_fragment:KT,roughnessmap_fragment:QT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:eA,shadowmap_vertex:tA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:aA,skinning_vertex:sA,skinnormal_vertex:rA,specularmap_fragment:lA,specularmap_pars_fragment:oA,tonemapping_fragment:cA,tonemapping_pars_fragment:uA,transmission_fragment:fA,transmission_pars_fragment:dA,uv_pars_fragment:hA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:gA,background_vert:xA,background_frag:vA,backgroundCube_vert:_A,backgroundCube_frag:SA,cube_vert:yA,cube_frag:bA,depth_vert:MA,depth_frag:EA,distance_vert:TA,distance_frag:AA,equirect_vert:RA,equirect_frag:wA,linedashed_vert:CA,linedashed_frag:NA,meshbasic_vert:DA,meshbasic_frag:UA,meshlambert_vert:LA,meshlambert_frag:OA,meshmatcap_vert:zA,meshmatcap_frag:PA,meshnormal_vert:IA,meshnormal_frag:BA,meshphong_vert:FA,meshphong_frag:HA,meshphysical_vert:GA,meshphysical_frag:VA,meshtoon_vert:kA,meshtoon_frag:XA,points_vert:jA,points_frag:WA,shadow_vert:qA,shadow_frag:YA,sprite_vert:ZA,sprite_frag:KA},He={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},aa={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new zt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};aa.physical={uniforms:Xn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const gu={r:0,b:0,g:0},QA=new on,sS=new ht;sS.set(-1,0,0,0,1,0,0,0,1);function JA(l,t,i,r,c,f){const d=new zt(0);let h=c===!0?0:1,x,g,S=null,_=0,v=null;function T(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const C=D.backgroundBlurriness>0;F=t.get(F,C)}return F}function w(D){let F=!1;const C=T(D);C===null?b(d,h):C&&C.isColor&&(b(C,1),F=!0);const z=l.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(l.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function N(D,F){const C=T(F);C&&(C.isCubeTexture||C.mapping===Du)?(g===void 0&&(g=new Ci(new Eo(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:rl(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(F.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(sS),g.material.toneMapped=Ut.getTransfer(C.colorSpace)!==Zt,(S!==C||_!==C.version||v!==l.toneMapping)&&(g.material.needsUpdate=!0,S=C,_=C.version,v=l.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(x===void 0&&(x=new Ci(new Lu(2,2),new da({name:"BackgroundMaterial",uniforms:rl(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(x)),x.material.uniforms.t2D.value=C,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.toneMapped=Ut.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),x.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||_!==C.version||v!==l.toneMapping)&&(x.material.needsUpdate=!0,S=C,_=C.version,v=l.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null))}function b(D,F){D.getRGB(gu,eS(l)),i.buffers.color.setClear(gu.r,gu.g,gu.b,F,f)}function y(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,F=1){d.set(D),h=F,b(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,b(d,h)},render:w,addToRenderList:N,dispose:y}}function $A(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),r={},c=v(null);let f=c,d=!1;function h(k,$,ce,J,ee){let W=!1;const q=_(k,J,ce,$);f!==q&&(f=q,g(f.object)),W=T(k,J,ce,ee),W&&w(k,J,ce,ee),ee!==null&&t.update(ee,l.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,C(k,$,ce,J),ee!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function x(){return l.createVertexArray()}function g(k){return l.bindVertexArray(k)}function S(k){return l.deleteVertexArray(k)}function _(k,$,ce,J){const ee=J.wireframe===!0;let W=r[$.id];W===void 0&&(W={},r[$.id]=W);const q=k.isInstancedMesh===!0?k.id:0;let de=W[q];de===void 0&&(de={},W[q]=de);let re=de[ce.id];re===void 0&&(re={},de[ce.id]=re);let pe=re[ee];return pe===void 0&&(pe=v(x()),re[ee]=pe),pe}function v(k){const $=[],ce=[],J=[];for(let ee=0;ee<i;ee++)$[ee]=0,ce[ee]=0,J[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ce,attributeDivisors:J,object:k,attributes:{},index:null}}function T(k,$,ce,J){const ee=f.attributes,W=$.attributes;let q=0;const de=ce.getAttributes();for(const re in de)if(de[re].location>=0){const _e=ee[re];let Ze=W[re];if(Ze===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(Ze=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(Ze=k.instanceColor)),_e===void 0||_e.attribute!==Ze||Ze&&_e.data!==Ze.data)return!0;q++}return f.attributesNum!==q||f.index!==J}function w(k,$,ce,J){const ee={},W=$.attributes;let q=0;const de=ce.getAttributes();for(const re in de)if(de[re].location>=0){let _e=W[re];_e===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor));const Ze={};Ze.attribute=_e,_e&&_e.data&&(Ze.data=_e.data),ee[re]=Ze,q++}f.attributes=ee,f.attributesNum=q,f.index=J}function N(){const k=f.newAttributes;for(let $=0,ce=k.length;$<ce;$++)k[$]=0}function b(k){y(k,0)}function y(k,$){const ce=f.newAttributes,J=f.enabledAttributes,ee=f.attributeDivisors;ce[k]=1,J[k]===0&&(l.enableVertexAttribArray(k),J[k]=1),ee[k]!==$&&(l.vertexAttribDivisor(k,$),ee[k]=$)}function D(){const k=f.newAttributes,$=f.enabledAttributes;for(let ce=0,J=$.length;ce<J;ce++)$[ce]!==k[ce]&&(l.disableVertexAttribArray(ce),$[ce]=0)}function F(k,$,ce,J,ee,W,q){q===!0?l.vertexAttribIPointer(k,$,ce,ee,W):l.vertexAttribPointer(k,$,ce,J,ee,W)}function C(k,$,ce,J){N();const ee=J.attributes,W=ce.getAttributes(),q=$.defaultAttributeValues;for(const de in W){const re=W[de];if(re.location>=0){let pe=ee[de];if(pe===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(pe=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(pe=k.instanceColor)),pe!==void 0){const _e=pe.normalized,Ze=pe.itemSize,qe=t.get(pe);if(qe===void 0)continue;const B=qe.buffer,ge=qe.type,we=qe.bytesPerElement,Z=ge===l.INT||ge===l.UNSIGNED_INT||pe.gpuType===Xp;if(pe.isInterleavedBufferAttribute){const he=pe.data,Ae=he.stride,Te=pe.offset;if(he.isInstancedInterleavedBuffer){for(let me=0;me<re.locationSize;me++)y(re.location+me,he.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<re.locationSize;me++)b(re.location+me);l.bindBuffer(l.ARRAY_BUFFER,B);for(let me=0;me<re.locationSize;me++)F(re.location+me,Ze/re.locationSize,ge,_e,Ae*we,(Te+Ze/re.locationSize*me)*we,Z)}else{if(pe.isInstancedBufferAttribute){for(let he=0;he<re.locationSize;he++)y(re.location+he,pe.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<re.locationSize;he++)b(re.location+he);l.bindBuffer(l.ARRAY_BUFFER,B);for(let he=0;he<re.locationSize;he++)F(re.location+he,Ze/re.locationSize,ge,_e,Ze*we,Ze/re.locationSize*he*we,Z)}}else if(q!==void 0){const _e=q[de];if(_e!==void 0)switch(_e.length){case 2:l.vertexAttrib2fv(re.location,_e);break;case 3:l.vertexAttrib3fv(re.location,_e);break;case 4:l.vertexAttrib4fv(re.location,_e);break;default:l.vertexAttrib1fv(re.location,_e)}}}}D()}function z(){O();for(const k in r){const $=r[k];for(const ce in $){const J=$[ce];for(const ee in J){const W=J[ee];for(const q in W)S(W[q].object),delete W[q];delete J[ee]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const $=r[k.id];for(const ce in $){const J=$[ce];for(const ee in J){const W=J[ee];for(const q in W)S(W[q].object),delete W[q];delete J[ee]}}delete r[k.id]}function U(k){for(const $ in r){const ce=r[$];for(const J in ce){const ee=ce[J];if(ee[k.id]===void 0)continue;const W=ee[k.id];for(const q in W)S(W[q].object),delete W[q];delete ee[k.id]}}}function E(k){for(const $ in r){const ce=r[$],J=k.isInstancedMesh===!0?k.id:0,ee=ce[J];if(ee!==void 0){for(const W in ee){const q=ee[W];for(const de in q)S(q[de].object),delete q[de];delete ee[W]}delete ce[J],Object.keys(ce).length===0&&delete r[$]}}}function O(){H(),d=!0,f!==c&&(f=c,g(f.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:O,resetDefaultState:H,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:N,enableAttribute:b,disableUnusedAttributes:D}}function e2(l,t,i){let r;function c(x){r=x}function f(x,g){l.drawArrays(r,x,g),i.update(g,r,1)}function d(x,g,S){S!==0&&(l.drawArraysInstanced(r,x,g,S),i.update(g,r,S))}function h(x,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,x,0,g,0,S);let v=0;for(let T=0;T<S;T++)v+=g[T];i.update(v,r,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function t2(l,t,i,r){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");c=l.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(U){return!(U!==Hi&&r.convert(U)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const E=U===fa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==pi&&U!==ra&&!E&&r.convert(U)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE))}function x(U){if(U==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const S=x(g);S!==g&&(lt("WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),w=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=l.getParameter(l.MAX_TEXTURE_SIZE),b=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),y=l.getParameter(l.MAX_VERTEX_ATTRIBS),D=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),F=l.getParameter(l.MAX_VARYING_VECTORS),C=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),z=l.getParameter(l.MAX_SAMPLES),L=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:x,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:T,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:C,maxSamples:z,samples:L}}function n2(l){const t=this;let i=null,r=0,c=!1,f=!1;const d=new gs,h=new ht,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const T=_.length!==0||v||r!==0||c;return c=v,r=_.length,T},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,T){const w=_.clippingPlanes,N=_.clipIntersection,b=_.clipShadows,y=l.get(_);if(!c||w===null||w.length===0||f&&!b)f?S(null):g();else{const D=f?0:r,F=D*4;let C=y.clippingState||null;x.value=C,C=S(w,v,F,T);for(let z=0;z!==F;++z)C[z]=i[z];y.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=D}};function g(){x.value!==i&&(x.value=i,x.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function S(_,v,T,w){const N=_!==null?_.length:0;let b=null;if(N!==0){if(b=x.value,w!==!0||b===null){const y=T+N*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(b===null||b.length<y)&&(b=new Float32Array(y));for(let F=0,C=T;F!==N;++F,C+=4)d.copy(_[F]).applyMatrix4(D,h),d.normal.toArray(b,C),b[C+3]=d.constant}x.value=b,x.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,b}}const nl=4,i2=6,a2=20,s2=256,fo=new iS,$v=new zt;let Gh=null,Vh=0,kh=0,Xh=!1;const r2=new oe,qs=new oe;class e_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,c=100,f={}){const{size:d=256,position:h=r2}=f;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(t,r,c,x,h),i>0&&this._blur(x,0,0,i),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Vh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,el(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Js||t.mapping===sl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:fa,format:Hi,colorSpace:Au,depthBuffer:!1},c=t_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(t,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l2(f)),this._blurMaterial=c2(f,t,i),this._ggxMaterial=o2(f,t,i)}return c}_compileMaterial(t){const i=new Ci(new mi,t);this._renderer.compile(i,fo)}_sceneToCubeUV(t,i,r,c,f){const x=new hi(90,1,i,r),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,T=_.toneMapping;_.getClearColor($v),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(c),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new Eo,new Cu({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,b=N.material;let y=!1;const D=t.background;D?D.isColor&&(b.color.copy(D),t.background=null,y=!0):(b.color.copy($v),y=!0);for(let F=0;F<6;F++){const C=F%3;C===0?(x.up.set(0,g[F],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x+S[F],f.y,f.z)):C===1?(x.up.set(0,0,g[F]),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y+S[F],f.z)):(x.up.set(0,g[F],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y,f.z+S[F]));const z=this._cubeSize;el(c,C*z,F>2?z:0,z,z),_.setRenderTarget(c),y&&_.render(N,x),_.render(t,x)}_.toneMapping=T,_.autoClear=v,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,c=t.mapping===Js||t.mapping===sl;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const x=this._cubeSize;el(i,0,0,3*x,2*x),r.setRenderTarget(i),r.render(d,fo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=r}_applyGGXFilter(t,i,r){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const x=d.uniforms,g=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(g*g-S*S),v=g*1.25,T=_*v,{_lodMax:w}=this,N=this._sizeLods[r],b=3*N*(r>w-nl?r-w+nl:0),y=4*(this._cubeSize-N);x.envMap.value=t.texture,x.roughness.value=T,x.mipInt.value=w-i,el(f,b,y,3*N,2*N),c.setRenderTarget(f),c.render(h,fo),x.envMap.value=f.texture,x.roughness.value=0,x.mipInt.value=w-r,el(t,b,y,3*N,2*N),c.setRenderTarget(t),c.render(h,fo)}_blur(t,i,r,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,r,d),this._blurPass(f,t,r,r,d)}_blurPass(t,i,r,c,f){const d=this._renderer,h=this._blurMaterial,x=this._lodMeshes[c];x.material=h;const g=h.uniforms;g.envMap.value=t.texture,g.sigma.value=f,g.mipInt.value=this._lodMax-r;const S=this._sizeLods[c],_=3*S*(c>this._lodMax-nl?c-this._lodMax+nl:0),v=4*(this._cubeSize-S);el(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(x,fo)}}function l2(l){const t=[],i=[];let r=l;const c=l-nl+1+i2;for(let f=0;f<c;f++){const d=Math.pow(2,r);t.push(d);const h=1/(d-2),x=-h,g=1+h,S=[x,x,g,x,g,g,x,x,g,g,x,g],_=6,v=6,T=3,w=new Float32Array(T*v*_),N=new Float32Array(T*v*_);for(let y=0;y<_;y++){const D=y%3*2/3-1,F=y>2?0:-1,C=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];w.set(C,T*v*y);for(let z=0;z<v;z++){const L=S[z*2]*2-1,U=S[z*2+1]*2-1;y===0?qs.set(1,U,L):y===1?qs.set(-L,1,-U):y===2?qs.set(-L,U,1):y===3?qs.set(-1,U,-L):y===4?qs.set(-L,-1,U):qs.set(L,U,-1),qs.toArray(N,(y*v+z)*T)}}const b=new mi;b.setAttribute("position",new ca(w,T)),b.setAttribute("outputDirection",new ca(N,T)),i.push(new Ci(b,null)),r>nl&&r--}return{lodMeshes:i,sizeLods:t}}function t_(l,t,i){const r=new Gi(l,t,i);return r.texture.mapping=Du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function el(l,t,i,r,c){l.viewport.set(t,i,r,c),l.scissor.set(t,i,r,c)}function o2(l,t,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function c2(l,t,i){return new da({name:"SphericalGaussianBlur",defines:{SAMPLES:a2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function n_(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function i_(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Ou(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class rS extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},c=[r,r,r,r,r,r];this.texture=new J_(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Eo(5,5,5),f=new da({name:"CubemapFromEquirect",uniforms:rl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Oa});f.uniforms.tEquirect.value=i;const d=new Ci(c,f),h=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Bn),new d1(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,c);t.setRenderTarget(f)}}function u2(l){let t=new WeakMap,i=new WeakMap,r=null;function c(v,T=!1){return v==null?null:T?d(v):f(v)}function f(v){if(v&&v.isTexture){const T=v.mapping;if(T===ph||T===mh)if(t.has(v)){const w=t.get(v).texture;return h(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const N=new rS(w.height);return N.fromEquirectangularTexture(l,v),t.set(v,N),v.addEventListener("dispose",g),h(N.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const T=v.mapping,w=T===ph||T===mh,N=T===Js||T===sl;if(w||N){let b=i.get(v);const y=b!==void 0?b.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new e_(l)),b=w?r.fromEquirectangular(v,b):r.fromCubemap(v,b),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),b.texture;if(b!==void 0)return b.texture;{const D=v.image;return w&&D&&D.height>0||N&&D&&x(D)?(r===null&&(r=new e_(l)),b=w?r.fromEquirectangular(v):r.fromCubemap(v),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),v.addEventListener("dispose",S),b.texture):null}}}return v}function h(v,T){return T===ph?v.mapping=Js:T===mh&&(v.mapping=sl),v}function x(v){let T=0;const w=6;for(let N=0;N<w;N++)v[N]!==void 0&&T++;return T===w}function g(v){const T=v.target;T.removeEventListener("dispose",g);const w=t.get(T);w!==void 0&&(t.delete(T),w.dispose())}function S(v){const T=v.target;T.removeEventListener("dispose",S);const w=i.get(T);w!==void 0&&(i.delete(T),w.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:c,dispose:_}}function f2(l){const t={};function i(r){if(t[r]!==void 0)return t[r];const c=l.getExtension(r);return t[r]=c,c}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const c=i(r);return c===null&&il("WebGLRenderer: "+r+" extension not supported."),c}}}function d2(l,t,i,r){const c={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const w in v.attributes)t.remove(v.attributes[w]);v.removeEventListener("dispose",d),delete c[v.id];const T=f.get(v);T&&(t.remove(T),f.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return c[v.id]===!0||(v.addEventListener("dispose",d),c[v.id]=!0,i.memory.geometries++),v}function x(_){const v=_.attributes;for(const T in v)t.update(v[T],l.ARRAY_BUFFER)}function g(_){const v=[],T=_.index,w=_.attributes.position;let N=0;if(w===void 0)return;if(T!==null){const D=T.array;N=T.version;for(let F=0,C=D.length;F<C;F+=3){const z=D[F+0],L=D[F+1],U=D[F+2];v.push(z,L,L,U,U,z)}}else{const D=w.array;N=w.version;for(let F=0,C=D.length/3-1;F<C;F+=3){const z=F+0,L=F+1,U=F+2;v.push(z,L,L,U,U,z)}}const b=new(w.count>=65535?Z_:Y_)(v,1);b.version=N;const y=f.get(_);y&&t.remove(y),f.set(_,b)}function S(_){const v=f.get(_);if(v){const T=_.index;T!==null&&v.version<T.version&&g(_)}else g(_);return f.get(_)}return{get:h,update:x,getWireframeAttribute:S}}function h2(l,t,i){let r;function c(_){r=_}let f,d;function h(_){f=_.type,d=_.bytesPerElement}function x(_,v){l.drawElements(r,v,f,_*d),i.update(v,r,1)}function g(_,v,T){T!==0&&(l.drawElementsInstanced(r,v,f,_*d,T),i.update(v,r,T))}function S(_,v,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,f,_,0,T);let N=0;for(let b=0;b<T;b++)N+=v[b];i.update(N,r,1)}this.setMode=c,this.setIndex=h,this.render=x,this.renderInstances=g,this.renderMultiDraw=S}function p2(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case l.TRIANGLES:i.triangles+=h*(f/3);break;case l.LINES:i.lines+=h*(f/2);break;case l.LINE_STRIP:i.lines+=h*(f-1);break;case l.LINE_LOOP:i.lines+=h*f;break;case l.POINTS:i.points+=h*f;break;default:Ht("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:r}}function m2(l,t,i){const r=new WeakMap,c=new ln;function f(d,h,x){const g=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let H=function(){E.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var T=H;v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,N=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let C=0;w===!0&&(C=1),N===!0&&(C=2),b===!0&&(C=3);let z=h.attributes.position.count*C,L=1;z>t.maxTextureSize&&(L=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const U=new Float32Array(z*L*4*_),E=new j_(U,z,L,_);E.type=ra,E.needsUpdate=!0;const O=C*4;for(let k=0;k<_;k++){const $=y[k],ce=D[k],J=F[k],ee=z*L*4*k;for(let W=0;W<$.count;W++){const q=W*O;w===!0&&(c.fromBufferAttribute($,W),U[ee+q+0]=c.x,U[ee+q+1]=c.y,U[ee+q+2]=c.z,U[ee+q+3]=0),N===!0&&(c.fromBufferAttribute(ce,W),U[ee+q+4]=c.x,U[ee+q+5]=c.y,U[ee+q+6]=c.z,U[ee+q+7]=0),b===!0&&(c.fromBufferAttribute(J,W),U[ee+q+8]=c.x,U[ee+q+9]=c.y,U[ee+q+10]=c.z,U[ee+q+11]=J.itemSize===4?c.w:1)}}v={count:_,texture:E,size:new bt(z,L)},r.set(h,v),h.addEventListener("dispose",H)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)x.getUniforms().setValue(l,"morphTexture",d.morphTexture,i);else{let w=0;for(let b=0;b<g.length;b++)w+=g[b];const N=h.morphTargetsRelative?1:1-w;x.getUniforms().setValue(l,"morphTargetBaseInfluence",N),x.getUniforms().setValue(l,"morphTargetInfluences",g)}x.getUniforms().setValue(l,"morphTargetsTexture",v.texture,i),x.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:f}}function g2(l,t,i,r,c){let f=new WeakMap;function d(g){const S=c.render.frame,_=g.geometry,v=t.get(g,_);if(f.get(v)!==S&&(t.update(v),f.set(v,S)),g.isInstancedMesh&&(g.hasEventListener("dispose",x)===!1&&g.addEventListener("dispose",x),f.get(g)!==S&&(i.update(g.instanceMatrix,l.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,l.ARRAY_BUFFER),f.set(g,S))),g.isSkinnedMesh){const T=g.skeleton;f.get(T)!==S&&(T.update(),f.set(T,S))}return v}function h(){f=new WeakMap}function x(g){const S=g.target;S.removeEventListener("dispose",x),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const x2={[N_]:"LINEAR_TONE_MAPPING",[D_]:"REINHARD_TONE_MAPPING",[U_]:"CINEON_TONE_MAPPING",[kp]:"ACES_FILMIC_TONE_MAPPING",[O_]:"AGX_TONE_MAPPING",[z_]:"NEUTRAL_TONE_MAPPING",[L_]:"CUSTOM_TONE_MAPPING"};function v2(l,t,i,r,c,f){const d=new Gi(t,i,{type:l,depthBuffer:c,stencilBuffer:f,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,x=null;const g=new mi;g.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new qn([0,2,0,0,2,0],2));const S=new s1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Ci(g,S),v=new iS(-1,1,1,-1,0,1);let T=null,w=null,N=!1,b,y=null,D=[],F=!1;this.setSize=function(C,z){d.setSize(C,z),h!==null&&h.setSize(C,z),x!==null&&x.setSize(C,z);for(let L=0;L<D.length;L++){const U=D[L];U.setSize&&U.setSize(C,z)}},this.setEffects=function(C){D=C,F=D.length>0&&D[0].isRenderPass===!0;const z=d.width,L=d.height;D.length>0&&h===null&&(h=new Gi(z,L,{type:fa,depthBuffer:!1,stencilBuffer:!1}),x=new Gi(z,L,{type:fa,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<D.length;U++){const E=D[U];E.setSize&&E.setSize(z,L)}},this.begin=function(C,z){if(N||C.toneMapping===oa&&D.length===0)return!1;if(y=z,z!==null){const L=z.width,U=z.height;(d.width!==L||d.height!==U)&&this.setSize(L,U)}return F===!1&&C.setRenderTarget(d),b=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return F},this.end=function(C,z){C.toneMapping=b,N=!0;let L=d,U=h;for(let E=0;E<D.length;E++){const O=D[E];O.enabled!==!1&&(O.render(C,U,L,z),O.needsSwap!==!1&&(L=U,U=U===h?x:h))}if(T!==C.outputColorSpace||w!==C.toneMapping){T=C.outputColorSpace,w=C.toneMapping,S.defines={},Ut.getTransfer(T)===Zt&&(S.defines.SRGB_TRANSFER="");const E=x2[w];E&&(S.defines[E]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(y),C.render(_,v),y=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),x!==null&&x.dispose(),g.dispose(),S.dispose()}}const lS=new jn,Pp=new yo(1,1),oS=new j_,cS=new zE,uS=new J_,a_=[],s_=[],r_=new Float32Array(16),l_=new Float32Array(9),o_=new Float32Array(4);function cl(l,t,i){const r=l[0];if(r<=0||r>0)return l;const c=t*i;let f=a_[c];if(f===void 0&&(f=new Float32Array(c),a_[c]=f),t!==0){r.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,l[d].toArray(f,h)}return f}function bn(l,t){if(l.length!==t.length)return!1;for(let i=0,r=l.length;i<r;i++)if(l[i]!==t[i])return!1;return!0}function Mn(l,t){for(let i=0,r=t.length;i<r;i++)l[i]=t[i]}function zu(l,t){let i=s_[t];i===void 0&&(i=new Int32Array(t),s_[t]=i);for(let r=0;r!==t;++r)i[r]=l.allocateTextureUnit();return i}function _2(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function S2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;l.uniform2fv(this.addr,t),Mn(i,t)}}function y2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;l.uniform3fv(this.addr,t),Mn(i,t)}}function b2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;l.uniform4fv(this.addr,t),Mn(i,t)}}function M2(l,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(bn(i,r))return;o_.set(r),l.uniformMatrix2fv(this.addr,!1,o_),Mn(i,r)}}function E2(l,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(bn(i,r))return;l_.set(r),l.uniformMatrix3fv(this.addr,!1,l_),Mn(i,r)}}function T2(l,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(bn(i,r))return;r_.set(r),l.uniformMatrix4fv(this.addr,!1,r_),Mn(i,r)}}function A2(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function R2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;l.uniform2iv(this.addr,t),Mn(i,t)}}function w2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;l.uniform3iv(this.addr,t),Mn(i,t)}}function C2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;l.uniform4iv(this.addr,t),Mn(i,t)}}function N2(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function D2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;l.uniform2uiv(this.addr,t),Mn(i,t)}}function U2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;l.uniform3uiv(this.addr,t),Mn(i,t)}}function L2(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;l.uniform4uiv(this.addr,t),Mn(i,t)}}function O2(l,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c);let f;this.type===l.SAMPLER_2D_SHADOW?(Pp.compareFunction=i.isReversedDepthBuffer()?Qp:Kp,f=Pp):f=lS,i.setTexture2D(t||f,c)}function z2(l,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c),i.setTexture3D(t||cS,c)}function P2(l,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c),i.setTextureCube(t||uS,c)}function I2(l,t,i){const r=this.cache,c=i.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c),i.setTexture2DArray(t||oS,c)}function B2(l){switch(l){case 5126:return _2;case 35664:return S2;case 35665:return y2;case 35666:return b2;case 35674:return M2;case 35675:return E2;case 35676:return T2;case 5124:case 35670:return A2;case 35667:case 35671:return R2;case 35668:case 35672:return w2;case 35669:case 35673:return C2;case 5125:return N2;case 36294:return D2;case 36295:return U2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return I2}}function F2(l,t){l.uniform1fv(this.addr,t)}function H2(l,t){const i=cl(t,this.size,2);l.uniform2fv(this.addr,i)}function G2(l,t){const i=cl(t,this.size,3);l.uniform3fv(this.addr,i)}function V2(l,t){const i=cl(t,this.size,4);l.uniform4fv(this.addr,i)}function k2(l,t){const i=cl(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function X2(l,t){const i=cl(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function j2(l,t){const i=cl(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function W2(l,t){l.uniform1iv(this.addr,t)}function q2(l,t){l.uniform2iv(this.addr,t)}function Y2(l,t){l.uniform3iv(this.addr,t)}function Z2(l,t){l.uniform4iv(this.addr,t)}function K2(l,t){l.uniform1uiv(this.addr,t)}function Q2(l,t){l.uniform2uiv(this.addr,t)}function J2(l,t){l.uniform3uiv(this.addr,t)}function $2(l,t){l.uniform4uiv(this.addr,t)}function e3(l,t,i){const r=this.cache,c=t.length,f=zu(i,c);bn(r,f)||(l.uniform1iv(this.addr,f),Mn(r,f));let d;this.type===l.SAMPLER_2D_SHADOW?d=Pp:d=lS;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function t3(l,t,i){const r=this.cache,c=t.length,f=zu(i,c);bn(r,f)||(l.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||cS,f[d])}function n3(l,t,i){const r=this.cache,c=t.length,f=zu(i,c);bn(r,f)||(l.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||uS,f[d])}function i3(l,t,i){const r=this.cache,c=t.length,f=zu(i,c);bn(r,f)||(l.uniform1iv(this.addr,f),Mn(r,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||oS,f[d])}function a3(l){switch(l){case 5126:return F2;case 35664:return H2;case 35665:return G2;case 35666:return V2;case 35674:return k2;case 35675:return X2;case 35676:return j2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return Z2;case 5125:return K2;case 36294:return Q2;case 36295:return J2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class s3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=B2(i.type)}}class r3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=a3(i.type)}}class l3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],r)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function c_(l,t){l.seq.push(t),l.map[t.id]=t}function o3(l,t,i){const r=l.name,c=r.length;for(jh.lastIndex=0;;){const f=jh.exec(r),d=jh.lastIndex;let h=f[1];const x=f[2]==="]",g=f[3];if(x&&(h=h|0),g===void 0||g==="["&&d+2===c){c_(i,g===void 0?new s3(h,l,t):new r3(h,l,t));break}else{let _=i.map[h];_===void 0&&(_=new l3(h),c_(i,_)),i=_}}}class Mu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),x=t.getUniformLocation(i,h.name);o3(h,x,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,r,c){const f=this.map[i];f!==void 0&&f.setValue(t,r,c)}setOptional(t,i,r){const c=i[r];c!==void 0&&this.setValue(t,r,c)}static upload(t,i,r,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],x=r[h.id];x.needsUpdate!==!1&&h.setValue(t,x.value,c)}}static seqWithValue(t,i){const r=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&r.push(d)}return r}}function u_(l,t,i){const r=l.createShader(t);return l.shaderSource(r,i),l.compileShader(r),r}const c3=37297;let u3=0;function f3(l,t){const i=l.split(`
`),r=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const f_=new ht;function d3(l){Ut._getMatrix(f_,Ut.workingColorSpace,l);const t=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(l)){case Ru:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function d_(l,t,i){const r=l.getShaderParameter(t,l.COMPILE_STATUS),f=(l.getShaderInfoLog(t)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+f3(l.getShaderSource(t),h)}else return f}function h3(l,t){const i=d3(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const p3={[N_]:"Linear",[D_]:"Reinhard",[U_]:"Cineon",[kp]:"ACESFilmic",[O_]:"AgX",[z_]:"Neutral",[L_]:"Custom"};function m3(l,t){const i=p3[t];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xu=new oe;function g3(){Ut.getLuminanceCoefficients(xu);const l=xu.x.toFixed(4),t=xu.y.toFixed(4),i=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x3(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function v3(l){const t=[];for(const i in l){const r=l[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function _3(l,t){const i={},r=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=l.getActiveAttrib(t,c),d=f.name;let h=1;f.type===l.FLOAT_MAT2&&(h=2),f.type===l.FLOAT_MAT3&&(h=3),f.type===l.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:l.getAttribLocation(t,d),locationSize:h}}return i}function mo(l){return l!==""}function h_(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(l){return l.replace(S3,b3)}const y3=new Map;function b3(l,t){let i=xt[t];if(i===void 0){const r=y3.get(t);if(r!==void 0)i=xt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ip(i)}const M3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(l){return l.replace(M3,E3)}function E3(l,t,i,r){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function g_(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const T3={[vu]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};function A3(l){return T3[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R3={[Js]:"ENVMAP_TYPE_CUBE",[sl]:"ENVMAP_TYPE_CUBE",[Du]:"ENVMAP_TYPE_CUBE_UV"};function w3(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":R3[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const C3={[sl]:"ENVMAP_MODE_REFRACTION"};function N3(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":C3[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D3={[C_]:"ENVMAP_BLENDING_MULTIPLY",[dE]:"ENVMAP_BLENDING_MIX",[hE]:"ENVMAP_BLENDING_ADD"};function U3(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":D3[l.combine]||"ENVMAP_BLENDING_NONE"}function L3(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function O3(l,t,i,r){const c=l.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const x=A3(i),g=w3(i),S=N3(i),_=U3(i),v=L3(i),T=x3(i),w=v3(f),N=c.createProgram();let b,y,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(mo).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(mo).join(`
`),y.length>0&&(y+=`
`)):(b=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),y=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?xt.tonemapping_pars_fragment:"",i.toneMapping!==oa?m3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,h3("linearToOutputTexel",i.outputColorSpace),g3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(mo).join(`
`)),d=Ip(d),d=h_(d,i),d=p_(d,i),h=Ip(h),h=h_(h,i),h=p_(h,i),d=m_(d),h=m_(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===Av?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=D+b+d,C=D+y+h,z=u_(c,c.VERTEX_SHADER,F),L=u_(c,c.FRAGMENT_SHADER,C);c.attachShader(N,z),c.attachShader(N,L),i.index0AttributeName!==void 0?c.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(N,0,"position"),c.linkProgram(N);function U(k){if(l.debug.checkShaderErrors){const $=c.getProgramInfoLog(N)||"",ce=c.getShaderInfoLog(z)||"",J=c.getShaderInfoLog(L)||"",ee=$.trim(),W=ce.trim(),q=J.trim();let de=!0,re=!0;if(c.getProgramParameter(N,c.LINK_STATUS)===!1)if(de=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(c,N,z,L);else{const pe=d_(c,z,"vertex"),_e=d_(c,L,"fragment");Ht("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(N,c.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+pe+`
`+_e)}else ee!==""?lt("WebGLProgram: Program Info Log:",ee):(W===""||q==="")&&(re=!1);re&&(k.diagnostics={runnable:de,programLog:ee,vertexShader:{log:W,prefix:b},fragmentShader:{log:q,prefix:y}})}c.deleteShader(z),c.deleteShader(L),E=new Mu(c,N),O=_3(c,N)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let O;this.getAttributes=function(){return O===void 0&&U(this),O};let H=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=c.getProgramParameter(N,c3)),H},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=u3++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=z,this.fragmentShader=L,this}let z3=0;class P3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new I3(t),i.set(t,r)),r}}class I3{constructor(t){this.id=z3++,this.code=t,this.usedTimes=0}}function B3(l){return l===$s||l===Eu||l===Tu}function F3(l,t,i,r,c,f){const d=new W_,h=new P3,x=new Set,g=[],S=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return x.add(E),E===0?"uv":`uv${E}`}function N(E,O,H,k,$,ce){const J=k.fog,ee=$.geometry,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,de=t.get(E.envMap||W,q),re=de&&de.mapping===Du?de.image.height:null,pe=T[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&lt("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ze=_e!==void 0?_e.length:0;let qe=0;ee.morphAttributes.position!==void 0&&(qe=1),ee.morphAttributes.normal!==void 0&&(qe=2),ee.morphAttributes.color!==void 0&&(qe=3);let B,ge,we,Z;if(pe){const Nt=aa[pe];B=Nt.vertexShader,ge=Nt.fragmentShader}else{B=E.vertexShader,ge=E.fragmentShader;const Nt=h.getVertexShaderStage(E),ft=h.getFragmentShaderStage(E);h.update(E,Nt,ft),we=Nt.id,Z=ft.id}const he=l.getRenderTarget(),Ae=l.state.buffers.depth.getReversed(),Te=$.isInstancedMesh===!0,me=$.isBatchedMesh===!0,Re=!!E.map,At=!!E.matcap,st=!!de,ct=!!E.aoMap,pt=!!E.lightMap,Je=!!E.bumpMap&&E.wireframe===!1,nt=!!E.normalMap,Ft=!!E.displacementMap,an=!!E.emissiveMap,Pt=!!E.metalnessMap,jt=!!E.roughnessMap,j=E.anisotropy>0,sn=E.clearcoat>0,It=E.dispersion>0,P=E.retroreflectivity>0,M=E.iridescence>0,te=E.sheen>0,le=E.transmission>0,xe=j&&!!E.anisotropyMap,Ce=sn&&!!E.clearcoatMap,Ue=sn&&!!E.clearcoatNormalMap,ve=sn&&!!E.clearcoatRoughnessMap,Me=M&&!!E.iridescenceMap,De=M&&!!E.iridescenceThicknessMap,et=te&&!!E.sheenColorMap,Ie=te&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,ke=!!E.specularColorMap,it=!!E.specularIntensityMap,ut=le&&!!E.transmissionMap,X=le&&!!E.thicknessMap,Ne=!!E.gradientMap,be=!!E.alphaMap,Le=E.alphaTest>0,Ve=!!E.alphaHash,Ee=!!E.extensions;let $e=oa;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&($e=l.toneMapping);const Ge={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:ge,defines:E.defines,customVertexShaderID:we,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:me,batchingColor:me&&$._colorsTexture!==null,instancing:Te,instancingColor:Te&&$.instanceColor!==null,instancingMorph:Te&&$.morphTexture!==null,outputColorSpace:he===null?l.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Re,matcap:At,envMap:st,envMapMode:st&&de.mapping,envMapCubeUVHeight:re,aoMap:ct,lightMap:pt,bumpMap:Je,normalMap:nt,displacementMap:Ft,emissiveMap:an,normalMapObjectSpace:nt&&E.normalMapType===gE,normalMapTangentSpace:nt&&E.normalMapType===Lp,packedNormalMap:nt&&E.normalMapType===Lp&&B3(E.normalMap.format),metalnessMap:Pt,roughnessMap:jt,anisotropy:j,anisotropyMap:xe,clearcoat:sn,clearcoatMap:Ce,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ve,dispersion:It,retroreflection:P,iridescence:M,iridescenceMap:Me,iridescenceThicknessMap:De,sheen:te,sheenColorMap:et,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:ke,specularIntensityMap:it,transmission:le,transmissionMap:ut,thicknessMap:X,gradientMap:Ne,opaque:E.transparent===!1&&E.blending===go&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:Le,alphaHash:Ve,combine:E.combine,mapUv:Re&&w(E.map.channel),aoMapUv:ct&&w(E.aoMap.channel),lightMapUv:pt&&w(E.lightMap.channel),bumpMapUv:Je&&w(E.bumpMap.channel),normalMapUv:nt&&w(E.normalMap.channel),displacementMapUv:Ft&&w(E.displacementMap.channel),emissiveMapUv:an&&w(E.emissiveMap.channel),metalnessMapUv:Pt&&w(E.metalnessMap.channel),roughnessMapUv:jt&&w(E.roughnessMap.channel),anisotropyMapUv:xe&&w(E.anisotropyMap.channel),clearcoatMapUv:Ce&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&w(E.sheenRoughnessMap.channel),specularMapUv:Pe&&w(E.specularMap.channel),specularColorMapUv:ke&&w(E.specularColorMap.channel),specularIntensityMapUv:it&&w(E.specularIntensityMap.channel),transmissionMapUv:ut&&w(E.transmissionMap.channel),thicknessMapUv:X&&w(E.thicknessMap.channel),alphaMapUv:be&&w(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(nt||j),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ee.attributes.uv&&(Re||be),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&nt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ae,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:qe,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:l.shadowMap.enabled&&H.length>0,shadowMapType:l.shadowMap.type,toneMapping:$e,decodeVideoTexture:Re&&E.map.isVideoTexture===!0&&Ut.getTransfer(E.map.colorSpace)===Zt,decodeVideoTextureEmissive:an&&E.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(E.emissiveMap.colorSpace)===Zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sa,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&E.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ge.vertexUv1s=x.has(1),Ge.vertexUv2s=x.has(2),Ge.vertexUv3s=x.has(3),x.clear(),Ge}function b(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)O.push(H),O.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(y(O,E),D(O,E),O.push(l.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function y(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numSunLights),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numSunLightShadows),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function D(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.retroreflection&&d.enable(24),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function F(E){const O=T[E.type];let H;if(O){const k=aa[O];H=n1.clone(k.uniforms)}else H=E.uniforms;return H}function C(E,O){let H=S.get(O);return H!==void 0?++H.usedTimes:(H=new O3(l,O,E,c),g.push(H),S.set(O,H)),H}function z(E){if(--E.usedTimes===0){const O=g.indexOf(E);g[O]=g[g.length-1],g.pop(),S.delete(E.cacheKey),E.destroy()}}function L(E){h.remove(E)}function U(){h.dispose()}return{getParameters:N,getProgramCacheKey:b,getUniforms:F,acquireProgram:C,releaseProgram:z,releaseShaderCache:L,programs:g,dispose:U}}function H3(){let l=new WeakMap;function t(d){return l.has(d)}function i(d){let h=l.get(d);return h===void 0&&(h={},l.set(d,h)),h}function r(d){l.delete(d)}function c(d,h,x){l.get(d)[h]=x}function f(){l=new WeakMap}return{has:t,get:i,remove:r,update:c,dispose:f}}function G3(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.materialVariant!==t.materialVariant?l.materialVariant-t.materialVariant:l.z!==t.z?l.z-t.z:l.id-t.id}function x_(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function v_(){const l=[];let t=0;const i=[],r=[],c=[];function f(){t=0,i.length=0,r.length=0,c.length=0}function d(v){let T=0;return v.isInstancedMesh&&(T+=2),v.isSkinnedMesh&&(T+=1),T}function h(v,T,w,N,b,y){let D=l[t];return D===void 0?(D={id:v.id,object:v,geometry:T,material:w,materialVariant:d(v),groupOrder:N,renderOrder:v.renderOrder,z:b,group:y},l[t]=D):(D.id=v.id,D.object=v,D.geometry=T,D.material=w,D.materialVariant=d(v),D.groupOrder=N,D.renderOrder=v.renderOrder,D.z=b,D.group=y),t++,D}function x(v,T,w,N,b,y,D){D.reversedDepth===!0&&(b=-b);const F=h(v,T,w,N,b,y);w.transmission>0?r.push(F):w.transparent===!0?c.push(F):i.push(F)}function g(v,T,w,N,b,y){const D=h(v,T,w,N,b,y);w.transmission>0?r.unshift(D):w.transparent===!0?c.unshift(D):i.unshift(D)}function S(v,T){i.length>1&&i.sort(v||G3),r.length>1&&r.sort(T||x_),c.length>1&&c.sort(T||x_)}function _(){for(let v=t,T=l.length;v<T;v++){const w=l[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:r,transparent:c,init:f,push:x,unshift:g,finish:_,sort:S}}function V3(){let l=new WeakMap;function t(r,c){const f=l.get(r);let d;return f===void 0?(d=new v_,l.set(r,[d])):c>=f.length?(d=new v_,f.push(d)):d=f[c],d}function i(){l=new WeakMap}return{get:t,dispose:i}}function k3(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new oe,color:new zt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return l[t.id]=i,i}}}function X3(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let j3=0;function W3(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function q3(l){const t=new k3,i=X3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new oe);const c=new oe,f=new on,d=new on;function h(g){let S=0,_=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let T=0,w=0,N=0,b=0,y=0,D=0,F=0,C=0,z=0,L=0,U=0,E=0,O=0,H=0;g.sort(W3);for(let $=0,ce=g.length;$<ce;$++){const J=g[$],ee=J.color,W=J.intensity,q=J.distance;let de=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===$s?de=J.shadow.map.texture:de=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)S+=ee.r*W,_+=ee.g*W,v+=ee.b*W;else if(J.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(J.sh.coefficients[re],W);H++}else if(J.isSunLight){const re=t.get(J);if(re.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const pe=J.shadow,_e=i.get(J);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),r.sunShadow[w]=_e,r.sunShadowMap[w]=de;const Ze=pe.getViewportCount();for(let qe=0;qe<Ze;qe++)r.sunShadowMatrix[N+qe]=pe.getMatrix(qe),r.sunShadowCascade[N+qe]=pe._cascadeData[qe];N+=Ze,w++}r.sun[T]=re,T++}else if(J.isDirectionalLight){const re=t.get(J);if(re.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const pe=J.shadow,_e=i.get(J);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize=pe.mapSize,r.directionalShadow[b]=_e,r.directionalShadowMap[b]=de,r.directionalShadowMatrix[b]=J.shadow.matrix,z++}r.directional[b]=re,b++}else if(J.isSpotLight){const re=t.get(J);re.position.setFromMatrixPosition(J.matrixWorld),re.color.copy(ee).multiplyScalar(W),re.distance=q,re.coneCos=Math.cos(J.angle),re.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),re.decay=J.decay,r.spot[D]=re;const pe=J.shadow;if(J.map&&(r.spotLightMap[E]=J.map,E++,pe.updateMatrices(J),J.castShadow&&O++),r.spotLightMatrix[D]=pe.matrix,J.castShadow){const _e=i.get(J);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize=pe.mapSize,r.spotShadow[D]=_e,r.spotShadowMap[D]=de,U++}D++}else if(J.isRectAreaLight){const re=t.get(J);re.color.copy(ee).multiplyScalar(W),re.halfWidth.set(J.width*.5,0,0),re.halfHeight.set(0,J.height*.5,0),r.rectArea[F]=re,F++}else if(J.isPointLight){const re=t.get(J);if(re.color.copy(J.color).multiplyScalar(J.intensity),re.distance=J.distance,re.decay=J.decay,J.castShadow){const pe=J.shadow,_e=i.get(J);_e.shadowIntensity=pe.intensity,_e.shadowBias=pe.bias,_e.shadowNormalBias=pe.normalBias,_e.shadowRadius=pe.radius,_e.shadowMapSize=pe.mapSize,_e.shadowCameraNear=pe.camera.near,_e.shadowCameraFar=pe.camera.far,r.pointShadow[y]=_e,r.pointShadowMap[y]=de,r.pointShadowMatrix[y]=J.shadow.matrix,L++}r.point[y]=re,y++}else if(J.isHemisphereLight){const re=t.get(J);re.skyColor.copy(J.color).multiplyScalar(W),re.groundColor.copy(J.groundColor).multiplyScalar(W),r.hemi[C]=re,C++}}F>0&&(l.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=v;const k=r.hash;(k.sunLength!==T||k.directionalLength!==b||k.pointLength!==y||k.spotLength!==D||k.rectAreaLength!==F||k.hemiLength!==C||k.numSunShadows!==w||k.numDirectionalShadows!==z||k.numPointShadows!==L||k.numSpotShadows!==U||k.numSpotMaps!==E||k.numLightProbes!==H)&&(r.sun.length=T,r.directional.length=b,r.spot.length=D,r.rectArea.length=F,r.point.length=y,r.hemi.length=C,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=N,r.sunShadowCascade.length=N,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.directionalShadowMatrix.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+E-O,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=H,k.sunLength=T,k.directionalLength=b,k.pointLength=y,k.spotLength=D,k.rectAreaLength=F,k.hemiLength=C,k.numSunShadows=w,k.numDirectionalShadows=z,k.numPointShadows=L,k.numSpotShadows=U,k.numSpotMaps=E,k.numLightProbes=H,r.version=j3++)}function x(g,S){let _=0,v=0,T=0,w=0,N=0,b=0;const y=S.matrixWorldInverse;for(let D=0,F=g.length;D<F;D++){const C=g[D];if(C.isSunLight){const z=r.sun[_];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(y),_++}else if(C.isDirectionalLight){const z=r.directional[v];z.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(y),v++}else if(C.isSpotLight){const z=r.spot[w];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(C.matrixWorld),c.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(y),w++}else if(C.isRectAreaLight){const z=r.rectArea[N];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(y),d.identity(),f.copy(C.matrixWorld),f.premultiply(y),d.extractRotation(f),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),N++}else if(C.isPointLight){const z=r.point[T];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(y),T++}else if(C.isHemisphereLight){const z=r.hemi[b];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(y),b++}}}return{setup:h,setupView:x,state:r}}function __(l){const t=new q3(l),i=[],r=[],c=[];function f(v){_.camera=v,i.length=0,r.length=0,c.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function x(v){c.push(v)}function g(){t.setup(i)}function S(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:g,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:x}}function Y3(l){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new __(l),t.set(c,[h])):f>=d.length?(h=new __(l),d.push(h)):h=d[f],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q3=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],J3=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],S_=new on,ho=new oe,Wh=new oe;function $3(l,t,i){let r=new $p;const c=new bt,f=new bt,d=new ln,h=new l1,x=new o1,g={},S=i.maxTextureSize,_={[Qs]:ei,[ei]:Qs,[sa]:sa},v=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Z3,fragmentShader:K3}),T=v.clone();T.defines.HORIZONTAL_PASS=1;const w=new mi;w.setAttribute("position",new ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Ci(w,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let y=this.type;this.render=function(L,U,E){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===qM&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vu);const O=l.getRenderTarget(),H=l.getActiveCubeFace(),k=l.getActiveMipmapLevel(),$=l.state;$.setBlending(Oa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ce=y!==this.type;ce&&U.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(ee=>ee.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,ee=L.length;J<ee;J++){const W=L[J],q=W.shadow;if(q===void 0){lt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const de=q.getFrameExtents();c.multiply(de),f.copy(q.mapSize),(c.x>S||c.y>S)&&(c.x>S&&(f.x=Math.floor(S/de.x),c.x=f.x*de.x,q.mapSize.x=f.x),c.y>S&&(f.y=Math.floor(S/de.y),c.y=f.y*de.y,q.mapSize.y=f.y));const re=l.state.buffers.depth.getReversed();if(q.camera._reversedDepth=re,q.map===null||ce===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===po){if(W.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Gi(c.x,c.y,{format:$s,type:fa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new yo(c.x,c.y,ra),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=Pa,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=On,q.map.depthTexture.magFilter=On}else W.isPointLight?(q.map=new rS(c.x),q.map.depthTexture=new e1(c.x,ua)):(q.map=new Gi(c.x,c.y),q.map.depthTexture=new yo(c.x,c.y,ua)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=Pa,this.type===vu?(q.map.depthTexture.compareFunction=re?Qp:Kp,q.map.depthTexture.minFilter=Bn,q.map.depthTexture.magFilter=Bn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=On,q.map.depthTexture.magFilter=On);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==c.x||q.map.height!==c.y)&&q.map.setSize(c.x,c.y);const pe=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,E);for(let _e=0;_e<pe;_e++){const Ze=q.getCamera(_e);if(W.isPointLight){const qe=q.camera,B=q.matrix,ge=W.distance||qe.far;ge!==qe.far&&(qe.far=ge,qe.updateProjectionMatrix()),ho.setFromMatrixPosition(W.matrixWorld),qe.position.copy(ho),Wh.copy(qe.position),Wh.add(Q3[_e]),qe.up.copy(J3[_e]),qe.lookAt(Wh),qe.updateMatrixWorld(),B.makeTranslation(-ho.x,-ho.y,-ho.z),S_.multiplyMatrices(qe.projectionMatrix,qe.matrixWorldInverse),q._frustum.setFromProjectionMatrix(S_,qe.coordinateSystem,qe.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)l.setRenderTarget(q.map,_e),l.clear();else{_e===0&&(l.setRenderTarget(q.map),l.clear());const qe=q.getViewport(_e);d.set(f.x*qe.x,f.y*qe.y,f.x*qe.z,f.y*qe.w),$.viewport(d)}r=q.getFrustum(_e),C(U,E,Ze,W,this.type)}q.isPointLightShadow!==!0&&this.type===po&&D(q,E),q.needsUpdate=!1}y=this.type,b.needsUpdate=!1,l.setRenderTarget(O,H,k)};function D(L,U){const E=t.update(N);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,T.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,T.needsUpdate=!0),L.mapPass===null?L.mapPass=new Gi(c.x,c.y,{format:$s,type:fa}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,l.setRenderTarget(L.mapPass),l.clear(),l.renderBufferDirect(U,null,E,v,N,null),T.uniforms.shadow_pass.value=L.mapPass.texture,T.uniforms.resolution.value.set(L.map.width,L.map.height),T.uniforms.radius.value=L.radius,l.setRenderTarget(L.map),l.clear(),l.renderBufferDirect(U,null,E,T,N,null)}function F(L,U,E,O){let H=null;const k=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)H=k;else if(H=E.isPointLight===!0?x:h,l.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const $=H.uuid,ce=U.uuid;let J=g[$];J===void 0&&(J={},g[$]=J);let ee=J[ce];ee===void 0&&(ee=H.clone(),J[ce]=ee,U.addEventListener("dispose",z)),H=ee}if(H.visible=U.visible,H.wireframe=U.wireframe,O===po?H.side=U.shadowSide!==null?U.shadowSide:U.side:H.side=U.shadowSide!==null?U.shadowSide:_[U.side],H.alphaMap=U.alphaMap,H.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,H.map=U.map,H.clipShadows=U.clipShadows,H.clippingPlanes=U.clippingPlanes,H.clipIntersection=U.clipIntersection,H.displacementMap=U.displacementMap,H.displacementScale=U.displacementScale,H.displacementBias=U.displacementBias,H.wireframeLinewidth=U.wireframeLinewidth,H.linewidth=U.linewidth,E.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const $=l.properties.get(H);$.light=E}return H}function C(L,U,E,O,H){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&H===po)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ce=t.update(L),J=L.material;if(Array.isArray(J)){const ee=ce.groups;for(let W=0,q=ee.length;W<q;W++){const de=ee[W],re=J[de.materialIndex];if(re&&re.visible){const pe=F(L,re,O,H);L.onBeforeShadow(l,L,U,E,ce,pe,de),l.renderBufferDirect(E,null,ce,pe,L,de),L.onAfterShadow(l,L,U,E,ce,pe,de)}}}else if(J.visible){const ee=F(L,J,O,H);L.onBeforeShadow(l,L,U,E,ce,ee,null),l.renderBufferDirect(E,null,ce,ee,L,null),L.onAfterShadow(l,L,U,E,ce,ee,null)}}const $=L.children;for(let ce=0,J=$.length;ce<J;ce++)C($[ce],U,E,O,H)}function z(L){L.target.removeEventListener("dispose",z);for(const E in g){const O=g[E],H=L.target.uuid;H in O&&(O[H].dispose(),delete O[H])}}}function eR(l,t){function i(){let X=!1;const Ne=new ln;let be=null;const Le=new ln(0,0,0,0);return{setMask:function(Ve){be!==Ve&&!X&&(l.colorMask(Ve,Ve,Ve,Ve),be=Ve)},setLocked:function(Ve){X=Ve},setClear:function(Ve,Ee,$e,Ge,Nt){Nt===!0&&(Ve*=Ge,Ee*=Ge,$e*=Ge),Ne.set(Ve,Ee,$e,Ge),Le.equals(Ne)===!1&&(l.clearColor(Ve,Ee,$e,Ge),Le.copy(Ne))},reset:function(){X=!1,be=null,Le.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,be=null,Le=null,Ve=null;return{setReversed:function(Ee){if(Ne!==Ee){const $e=t.get("EXT_clip_control");Ee?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ee;const Ge=Ve;Ve=null,this.setClear(Ge)}},getReversed:function(){return Ne},setTest:function(Ee){Ee?he(l.DEPTH_TEST):Ae(l.DEPTH_TEST)},setMask:function(Ee){be!==Ee&&!X&&(l.depthMask(Ee),be=Ee)},setFunc:function(Ee){if(Ne&&(Ee=wE[Ee]),Le!==Ee){switch(Ee){case Yh:l.depthFunc(l.NEVER);break;case Zh:l.depthFunc(l.ALWAYS);break;case Kh:l.depthFunc(l.LESS);break;case xo:l.depthFunc(l.LEQUAL);break;case Qh:l.depthFunc(l.EQUAL);break;case Jh:l.depthFunc(l.GEQUAL);break;case $h:l.depthFunc(l.GREATER);break;case ep:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Le=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ve!==Ee&&(Ve=Ee,Ne&&(Ee=1-Ee),l.clearDepth(Ee))},reset:function(){X=!1,be=null,Le=null,Ve=null,Ne=!1}}}function c(){let X=!1,Ne=null,be=null,Le=null,Ve=null,Ee=null,$e=null,Ge=null,Nt=null;return{setTest:function(ft){X||(ft?he(l.STENCIL_TEST):Ae(l.STENCIL_TEST))},setMask:function(ft){Ne!==ft&&!X&&(l.stencilMask(ft),Ne=ft)},setFunc:function(ft,ti,gi){(be!==ft||Le!==ti||Ve!==gi)&&(l.stencilFunc(ft,ti,gi),be=ft,Le=ti,Ve=gi)},setOp:function(ft,ti,gi){(Ee!==ft||$e!==ti||Ge!==gi)&&(l.stencilOp(ft,ti,gi),Ee=ft,$e=ti,Ge=gi)},setLocked:function(ft){X=ft},setClear:function(ft){Nt!==ft&&(l.clearStencil(ft),Nt=ft)},reset:function(){X=!1,Ne=null,be=null,Le=null,Ve=null,Ee=null,$e=null,Ge=null,Nt=null}}}const f=new i,d=new r,h=new c,x=new WeakMap,g=new WeakMap;let S={},_={},v={},T=new WeakMap,w=[],N=null,b=!1,y=null,D=null,F=null,C=null,z=null,L=null,U=null,E=new zt(0,0,0),O=0,H=!1,k=null,$=null,ce=null,J=null,ee=null;const W=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,de=0;const re=l.getParameter(l.VERSION);re.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(re)[1]),q=de>=1):re.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),q=de>=2);let pe=null,_e={};const Ze=l.getParameter(l.SCISSOR_BOX),qe=l.getParameter(l.VIEWPORT),B=new ln().fromArray(Ze),ge=new ln().fromArray(qe);function we(X,Ne,be,Le){const Ve=new Uint8Array(4),Ee=l.createTexture();l.bindTexture(X,Ee),l.texParameteri(X,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(X,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let $e=0;$e<be;$e++)X===l.TEXTURE_3D||X===l.TEXTURE_2D_ARRAY?l.texImage3D(Ne,0,l.RGBA,1,1,Le,0,l.RGBA,l.UNSIGNED_BYTE,Ve):l.texImage2D(Ne+$e,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Ve);return Ee}const Z={};Z[l.TEXTURE_2D]=we(l.TEXTURE_2D,l.TEXTURE_2D,1),Z[l.TEXTURE_CUBE_MAP]=we(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[l.TEXTURE_2D_ARRAY]=we(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),Z[l.TEXTURE_3D]=we(l.TEXTURE_3D,l.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),he(l.DEPTH_TEST),d.setFunc(xo),Je(!1),nt(Mv),he(l.CULL_FACE),ct(Oa);function he(X){S[X]!==!0&&(l.enable(X),S[X]=!0)}function Ae(X){S[X]!==!1&&(l.disable(X),S[X]=!1)}function Te(X,Ne){return v[X]!==Ne?(l.bindFramebuffer(X,Ne),v[X]=Ne,X===l.DRAW_FRAMEBUFFER&&(v[l.FRAMEBUFFER]=Ne),X===l.FRAMEBUFFER&&(v[l.DRAW_FRAMEBUFFER]=Ne),!0):!1}function me(X,Ne){let be=w,Le=!1;if(X){be=T.get(Ne),be===void 0&&(be=[],T.set(Ne,be));const Ve=X.textures;if(be.length!==Ve.length||be[0]!==l.COLOR_ATTACHMENT0){for(let Ee=0,$e=Ve.length;Ee<$e;Ee++)be[Ee]=l.COLOR_ATTACHMENT0+Ee;be.length=Ve.length,Le=!0}}else be[0]!==l.BACK&&(be[0]=l.BACK,Le=!0);Le&&l.drawBuffers(be)}function Re(X){return N!==X?(l.useProgram(X),N=X,!0):!1}const At={[tl]:l.FUNC_ADD,[ZM]:l.FUNC_SUBTRACT,[KM]:l.FUNC_REVERSE_SUBTRACT};At[QM]=l.MIN,At[JM]=l.MAX;const st={[$M]:l.ZERO,[eE]:l.ONE,[tE]:l.SRC_COLOR,[R_]:l.SRC_ALPHA,[lE]:l.SRC_ALPHA_SATURATE,[sE]:l.DST_COLOR,[iE]:l.DST_ALPHA,[nE]:l.ONE_MINUS_SRC_COLOR,[w_]:l.ONE_MINUS_SRC_ALPHA,[rE]:l.ONE_MINUS_DST_COLOR,[aE]:l.ONE_MINUS_DST_ALPHA,[oE]:l.CONSTANT_COLOR,[cE]:l.ONE_MINUS_CONSTANT_COLOR,[uE]:l.CONSTANT_ALPHA,[fE]:l.ONE_MINUS_CONSTANT_ALPHA};function ct(X,Ne,be,Le,Ve,Ee,$e,Ge,Nt,ft){if(X===Oa){b===!0&&(Ae(l.BLEND),b=!1);return}if(b===!1&&(he(l.BLEND),b=!0),X!==YM){if(X!==y||ft!==H){if((D!==tl||z!==tl)&&(l.blendEquation(l.FUNC_ADD),D=tl,z=tl),ft)switch(X){case go:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case qh:l.blendFunc(l.ONE,l.ONE);break;case Ev:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case Tv:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Ht("WebGLState: Invalid blending: ",X);break}else switch(X){case go:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case qh:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case Ev:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tv:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",X);break}F=null,C=null,L=null,U=null,E.set(0,0,0),O=0,y=X,H=ft}return}Ve=Ve||Ne,Ee=Ee||be,$e=$e||Le,(Ne!==D||Ve!==z)&&(l.blendEquationSeparate(At[Ne],At[Ve]),D=Ne,z=Ve),(be!==F||Le!==C||Ee!==L||$e!==U)&&(l.blendFuncSeparate(st[be],st[Le],st[Ee],st[$e]),F=be,C=Le,L=Ee,U=$e),(Ge.equals(E)===!1||Nt!==O)&&(l.blendColor(Ge.r,Ge.g,Ge.b,Nt),E.copy(Ge),O=Nt),y=X,H=!1}function pt(X,Ne){X.side===sa?Ae(l.CULL_FACE):he(l.CULL_FACE);let be=X.side===ei;Ne&&(be=!be),Je(be),X.blending===go&&X.transparent===!1?ct(Oa):ct(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),f.setMask(X.colorWrite);const Le=X.stencilWrite;h.setTest(Le),Le&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),an(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(l.SAMPLE_ALPHA_TO_COVERAGE):Ae(l.SAMPLE_ALPHA_TO_COVERAGE)}function Je(X){k!==X&&(X?l.frontFace(l.CW):l.frontFace(l.CCW),k=X)}function nt(X){X!==jM?(he(l.CULL_FACE),X!==$&&(X===Mv?l.cullFace(l.BACK):X===WM?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Ae(l.CULL_FACE),$=X}function Ft(X){X!==ce&&(q&&l.lineWidth(X),ce=X)}function an(X,Ne,be){X?(he(l.POLYGON_OFFSET_FILL),(J!==Ne||ee!==be)&&(J=Ne,ee=be,d.getReversed()&&(Ne=-Ne),l.polygonOffset(Ne,be))):Ae(l.POLYGON_OFFSET_FILL)}function Pt(X){X?he(l.SCISSOR_TEST):Ae(l.SCISSOR_TEST)}function jt(X){X===void 0&&(X=l.TEXTURE0+W-1),pe!==X&&(l.activeTexture(X),pe=X)}function j(X,Ne,be){be===void 0&&(pe===null?be=l.TEXTURE0+W-1:be=pe);let Le=_e[be];Le===void 0&&(Le={type:void 0,texture:void 0},_e[be]=Le),(Le.type!==X||Le.texture!==Ne)&&(pe!==be&&(l.activeTexture(be),pe=be),l.bindTexture(X,Ne||Z[X]),Le.type=X,Le.texture=Ne)}function sn(){const X=_e[pe];X!==void 0&&X.type!==void 0&&(l.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function It(){try{l.compressedTexImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function P(){try{l.compressedTexImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function M(){try{l.texSubImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function te(){try{l.texSubImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function le(){try{l.compressedTexSubImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function xe(){try{l.compressedTexSubImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Ce(){try{l.texStorage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Ue(){try{l.texStorage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function ve(){try{l.texImage2D(...arguments)}catch(X){Ht("WebGLState:",X)}}function Me(){try{l.texImage3D(...arguments)}catch(X){Ht("WebGLState:",X)}}function De(X){return _[X]!==void 0?_[X]:l.getParameter(X)}function et(X,Ne){_[X]!==Ne&&(l.pixelStorei(X,Ne),_[X]=Ne)}function Ie(X){B.equals(X)===!1&&(l.scissor(X.x,X.y,X.z,X.w),B.copy(X))}function Pe(X){ge.equals(X)===!1&&(l.viewport(X.x,X.y,X.z,X.w),ge.copy(X))}function ke(X,Ne){let be=g.get(Ne);be===void 0&&(be=new WeakMap,g.set(Ne,be));let Le=be.get(X);Le===void 0&&(Le=l.getUniformBlockIndex(Ne,X.name),be.set(X,Le))}function it(X,Ne){const Le=g.get(Ne).get(X);x.get(Ne)!==Le&&(l.uniformBlockBinding(Ne,Le,X.__bindingPointIndex),x.set(Ne,Le))}function ut(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),d.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),l.pixelStorei(l.PACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,l.BROWSER_DEFAULT_WEBGL),l.pixelStorei(l.PACK_ROW_LENGTH,0),l.pixelStorei(l.PACK_SKIP_PIXELS,0),l.pixelStorei(l.PACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_ROW_LENGTH,0),l.pixelStorei(l.UNPACK_IMAGE_HEIGHT,0),l.pixelStorei(l.UNPACK_SKIP_PIXELS,0),l.pixelStorei(l.UNPACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_SKIP_IMAGES,0),S={},_={},pe=null,_e={},v={},T=new WeakMap,w=[],N=null,b=!1,y=null,D=null,F=null,C=null,z=null,L=null,U=null,E=new zt(0,0,0),O=0,H=!1,k=null,$=null,ce=null,J=null,ee=null,B.set(0,0,l.canvas.width,l.canvas.height),ge.set(0,0,l.canvas.width,l.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:he,disable:Ae,bindFramebuffer:Te,drawBuffers:me,useProgram:Re,setBlending:ct,setMaterial:pt,setFlipSided:Je,setCullFace:nt,setLineWidth:Ft,setPolygonOffset:an,setScissorTest:Pt,activeTexture:jt,bindTexture:j,unbindTexture:sn,compressedTexImage2D:It,compressedTexImage3D:P,texImage2D:ve,texImage3D:Me,pixelStorei:et,getParameter:De,updateUBOMapping:ke,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:M,texSubImage3D:te,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:Ie,viewport:Pe,reset:ut}}function tR(l,t,i,r,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new bt,S=new WeakMap,_=new Set;let v;const T=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(P,M){return w?new OffscreenCanvas(P,M):wu("canvas")}function b(P,M,te){let le=1;const xe=It(P);if((xe.width>te||xe.height>te)&&(le=te/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ce=Math.floor(le*xe.width),Ue=Math.floor(le*xe.height);v===void 0&&(v=N(Ce,Ue));const ve=M?N(Ce,Ue):v;return ve.width=Ce,ve.height=Ue,ve.getContext("2d").drawImage(P,0,0,Ce,Ue),lt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ce+"x"+Ue+")."),ve}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function y(P){return P.generateMipmaps}function D(P){l.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?l.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function C(P,M,te,le,xe,Ce=!1){if(P!==null){if(l[P]!==void 0)return l[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ue;le&&(Ue=t.get("EXT_texture_norm16"),Ue||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=M;if(M===l.RED&&(te===l.FLOAT&&(ve=l.R32F),te===l.HALF_FLOAT&&(ve=l.R16F),te===l.UNSIGNED_BYTE&&(ve=l.R8),te===l.UNSIGNED_SHORT&&Ue&&(ve=Ue.R16_EXT),te===l.SHORT&&Ue&&(ve=Ue.R16_SNORM_EXT)),M===l.RED_INTEGER&&(te===l.UNSIGNED_BYTE&&(ve=l.R8UI),te===l.UNSIGNED_SHORT&&(ve=l.R16UI),te===l.UNSIGNED_INT&&(ve=l.R32UI),te===l.BYTE&&(ve=l.R8I),te===l.SHORT&&(ve=l.R16I),te===l.INT&&(ve=l.R32I)),M===l.RG&&(te===l.FLOAT&&(ve=l.RG32F),te===l.HALF_FLOAT&&(ve=l.RG16F),te===l.UNSIGNED_BYTE&&(ve=l.RG8),te===l.UNSIGNED_SHORT&&Ue&&(ve=Ue.RG16_EXT),te===l.SHORT&&Ue&&(ve=Ue.RG16_SNORM_EXT)),M===l.RG_INTEGER&&(te===l.UNSIGNED_BYTE&&(ve=l.RG8UI),te===l.UNSIGNED_SHORT&&(ve=l.RG16UI),te===l.UNSIGNED_INT&&(ve=l.RG32UI),te===l.BYTE&&(ve=l.RG8I),te===l.SHORT&&(ve=l.RG16I),te===l.INT&&(ve=l.RG32I)),M===l.RGB_INTEGER&&(te===l.UNSIGNED_BYTE&&(ve=l.RGB8UI),te===l.UNSIGNED_SHORT&&(ve=l.RGB16UI),te===l.UNSIGNED_INT&&(ve=l.RGB32UI),te===l.BYTE&&(ve=l.RGB8I),te===l.SHORT&&(ve=l.RGB16I),te===l.INT&&(ve=l.RGB32I)),M===l.RGBA_INTEGER&&(te===l.UNSIGNED_BYTE&&(ve=l.RGBA8UI),te===l.UNSIGNED_SHORT&&(ve=l.RGBA16UI),te===l.UNSIGNED_INT&&(ve=l.RGBA32UI),te===l.BYTE&&(ve=l.RGBA8I),te===l.SHORT&&(ve=l.RGBA16I),te===l.INT&&(ve=l.RGBA32I)),M===l.RGB&&(te===l.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGB16_EXT),te===l.SHORT&&Ue&&(ve=Ue.RGB16_SNORM_EXT),te===l.UNSIGNED_INT_5_9_9_9_REV&&(ve=l.RGB9_E5),te===l.UNSIGNED_INT_10F_11F_11F_REV&&(ve=l.R11F_G11F_B10F)),M===l.RGBA){const Me=Ce?Ru:Ut.getTransfer(xe);te===l.FLOAT&&(ve=l.RGBA32F),te===l.HALF_FLOAT&&(ve=l.RGBA16F),te===l.UNSIGNED_BYTE&&(ve=Me===Zt?l.SRGB8_ALPHA8:l.RGBA8),te===l.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGBA16_EXT),te===l.SHORT&&Ue&&(ve=Ue.RGBA16_SNORM_EXT),te===l.UNSIGNED_SHORT_4_4_4_4&&(ve=l.RGBA4),te===l.UNSIGNED_SHORT_5_5_5_1&&(ve=l.RGB5_A1)}return(ve===l.R16F||ve===l.R32F||ve===l.RG16F||ve===l.RG32F||ve===l.RGBA16F||ve===l.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function z(P,M){let te;return P?M===null||M===ua||M===_o?te=l.DEPTH24_STENCIL8:M===ra?te=l.DEPTH32F_STENCIL8:M===vo&&(te=l.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ua||M===_o?te=l.DEPTH_COMPONENT24:M===ra?te=l.DEPTH_COMPONENT32F:M===vo&&(te=l.DEPTH_COMPONENT16),te}function L(P,M){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==On&&P.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function U(P){const M=P.target;M.removeEventListener("dispose",U),O(M),M.isVideoTexture&&S.delete(M),M.isHTMLTexture&&_.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),k(M)}function O(P){const M=r.get(P);if(M.__webglInit===void 0)return;const te=P.source,le=T.get(te);if(le){const xe=le[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&H(P),Object.keys(le).length===0&&T.delete(te)}r.remove(P)}function H(P){const M=r.get(P);l.deleteTexture(M.__webglTexture);const te=P.source,le=T.get(te);delete le[M.__cacheKey],d.memory.textures--}function k(P){const M=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let xe=0;xe<M.__webglFramebuffer[le].length;xe++)l.deleteFramebuffer(M.__webglFramebuffer[le][xe]);else l.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&l.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)l.deleteFramebuffer(M.__webglFramebuffer[le]);else l.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&l.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&l.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&l.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&l.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const te=P.textures;for(let le=0,xe=te.length;le<xe;le++){const Ce=r.get(te[le]);Ce.__webglTexture&&(l.deleteTexture(Ce.__webglTexture),d.memory.textures--),r.remove(te[le])}r.remove(P)}let $=0;function ce(){$=0}function J(){return $}function ee(P){$=P}function W(){const P=$;return P>=c.maxTextures&&lt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+c.maxTextures),$+=1,P}function q(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function de(P,M){const te=r.get(P);if(P.isVideoTexture&&j(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&te.__version!==P.version){const le=P.image;if(le===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(te,P,M);return}}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(l.TEXTURE_2D,te.__webglTexture,l.TEXTURE0+M)}function re(P,M){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){Ae(te,P,M);return}else P.isExternalTexture&&(te.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(l.TEXTURE_2D_ARRAY,te.__webglTexture,l.TEXTURE0+M)}function pe(P,M){const te=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){Ae(te,P,M);return}i.bindTexture(l.TEXTURE_3D,te.__webglTexture,l.TEXTURE0+M)}function _e(P,M){const te=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&te.__version!==P.version){Te(te,P,M);return}i.bindTexture(l.TEXTURE_CUBE_MAP,te.__webglTexture,l.TEXTURE0+M)}const Ze={[tp]:l.REPEAT,[La]:l.CLAMP_TO_EDGE,[np]:l.MIRRORED_REPEAT},qe={[On]:l.NEAREST,[pE]:l.NEAREST_MIPMAP_NEAREST,[qc]:l.NEAREST_MIPMAP_LINEAR,[Bn]:l.LINEAR,[gh]:l.LINEAR_MIPMAP_NEAREST,[Zs]:l.LINEAR_MIPMAP_LINEAR},B={[vE]:l.NEVER,[ME]:l.ALWAYS,[_E]:l.LESS,[Kp]:l.LEQUAL,[SE]:l.EQUAL,[Qp]:l.GEQUAL,[yE]:l.GREATER,[bE]:l.NOTEQUAL};function ge(P,M){if(M.type===ra&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===gh||M.magFilter===qc||M.magFilter===Zs||M.minFilter===Bn||M.minFilter===gh||M.minFilter===qc||M.minFilter===Zs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(P,l.TEXTURE_WRAP_S,Ze[M.wrapS]),l.texParameteri(P,l.TEXTURE_WRAP_T,Ze[M.wrapT]),(P===l.TEXTURE_3D||P===l.TEXTURE_2D_ARRAY)&&l.texParameteri(P,l.TEXTURE_WRAP_R,Ze[M.wrapR]),l.texParameteri(P,l.TEXTURE_MAG_FILTER,qe[M.magFilter]),l.texParameteri(P,l.TEXTURE_MIN_FILTER,qe[M.minFilter]),M.compareFunction&&(l.texParameteri(P,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(P,l.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==qc&&M.minFilter!==Zs||M.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");l.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,c.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function we(P,M){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",U));const le=M.source;let xe=T.get(le);xe===void 0&&(xe={},T.set(le,xe));const Ce=q(M);if(Ce!==P.__cacheKey){xe[Ce]===void 0&&(xe[Ce]={texture:l.createTexture(),usedTimes:0},d.memory.textures++,te=!0),xe[Ce].usedTimes++;const Ue=xe[P.__cacheKey];Ue!==void 0&&(xe[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&H(M)),P.__cacheKey=Ce,P.__webglTexture=xe[Ce].texture}return te}function Z(P,M,te){return Math.floor(Math.floor(P/te)/M)}function he(P,M,te,le){const Ce=P.updateRanges;if(Ce.length===0)i.texSubImage2D(l.TEXTURE_2D,0,0,0,M.width,M.height,te,le,M.data);else{Ce.sort((et,Ie)=>et.start-Ie.start);let Ue=0;for(let et=1;et<Ce.length;et++){const Ie=Ce[Ue],Pe=Ce[et],ke=Ie.start+Ie.count,it=Z(Pe.start,M.width,4),ut=Z(Ie.start,M.width,4);Pe.start<=ke+1&&it===ut&&Z(Pe.start+Pe.count-1,M.width,4)===it?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++Ue,Ce[Ue]=Pe)}Ce.length=Ue+1;const ve=i.getParameter(l.UNPACK_ROW_LENGTH),Me=i.getParameter(l.UNPACK_SKIP_PIXELS),De=i.getParameter(l.UNPACK_SKIP_ROWS);i.pixelStorei(l.UNPACK_ROW_LENGTH,M.width);for(let et=0,Ie=Ce.length;et<Ie;et++){const Pe=Ce[et],ke=Math.floor(Pe.start/4),it=Math.ceil(Pe.count/4),ut=ke%M.width,X=Math.floor(ke/M.width),Ne=it,be=1;i.pixelStorei(l.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(l.UNPACK_SKIP_ROWS,X),i.texSubImage2D(l.TEXTURE_2D,0,ut,X,Ne,be,te,le,M.data)}P.clearUpdateRanges(),i.pixelStorei(l.UNPACK_ROW_LENGTH,ve),i.pixelStorei(l.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(l.UNPACK_SKIP_ROWS,De)}}function Ae(P,M,te){let le=l.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=l.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=l.TEXTURE_3D);const xe=we(P,M),Ce=M.source;i.bindTexture(le,P.__webglTexture,l.TEXTURE0+te);const Ue=r.get(Ce);if(Ce.version!==Ue.__version||xe===!0){if(i.activeTexture(l.TEXTURE0+te),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const be=Ut.getPrimaries(Ut.workingColorSpace),Le=M.colorSpace===xs?null:Ut.getPrimaries(M.colorSpace),Ve=M.colorSpace===xs||be===Le?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(l.UNPACK_ALIGNMENT,M.unpackAlignment);let Me=b(M.image,!1,c.maxTextureSize);Me=sn(M,Me);const De=f.convert(M.format,M.colorSpace),et=f.convert(M.type);let Ie=C(M.internalFormat,De,et,M.normalized,M.colorSpace,M.isVideoTexture);ge(le,M);let Pe;const ke=M.mipmaps,it=M.isVideoTexture!==!0,ut=Ue.__version===void 0||xe===!0,X=Ce.dataReady,Ne=L(M,Me);if(M.isDepthTexture)Ie=z(M.format===Ks,M.type),ut&&(it?i.texStorage2D(l.TEXTURE_2D,1,Ie,Me.width,Me.height):i.texImage2D(l.TEXTURE_2D,0,Ie,Me.width,Me.height,0,De,et,null));else if(M.isDataTexture)if(ke.length>0){it&&ut&&i.texStorage2D(l.TEXTURE_2D,Ne,Ie,ke[0].width,ke[0].height);for(let be=0,Le=ke.length;be<Le;be++)Pe=ke[be],it?X&&i.texSubImage2D(l.TEXTURE_2D,be,0,0,Pe.width,Pe.height,De,et,Pe.data):i.texImage2D(l.TEXTURE_2D,be,Ie,Pe.width,Pe.height,0,De,et,Pe.data);M.generateMipmaps=!1}else it?(ut&&i.texStorage2D(l.TEXTURE_2D,Ne,Ie,Me.width,Me.height),X&&he(M,Me,De,et)):i.texImage2D(l.TEXTURE_2D,0,Ie,Me.width,Me.height,0,De,et,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&ut&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ne,Ie,ke[0].width,ke[0].height,Me.depth);for(let be=0,Le=ke.length;be<Le;be++)if(Pe=ke[be],M.format!==Hi)if(De!==null)if(it){if(X)if(M.layerUpdates.size>0){const Ve=Jv(Pe.width,Pe.height,M.format,M.type);for(const Ee of M.layerUpdates){const $e=Pe.data.subarray(Ee*Ve/Pe.data.BYTES_PER_ELEMENT,(Ee+1)*Ve/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,be,0,0,Ee,Pe.width,Pe.height,1,De,$e)}}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,Me.depth,De,Pe.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,be,Ie,Pe.width,Pe.height,Me.depth,0,Pe.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,Me.depth,De,et,Pe.data):i.texImage3D(l.TEXTURE_2D_ARRAY,be,Ie,Pe.width,Pe.height,Me.depth,0,De,et,Pe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{it&&ut&&i.texStorage2D(l.TEXTURE_2D,Ne,Ie,ke[0].width,ke[0].height);for(let be=0,Le=ke.length;be<Le;be++)Pe=ke[be],M.format!==Hi?De!==null?it?X&&i.compressedTexSubImage2D(l.TEXTURE_2D,be,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(l.TEXTURE_2D,be,Ie,Pe.width,Pe.height,0,Pe.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&i.texSubImage2D(l.TEXTURE_2D,be,0,0,Pe.width,Pe.height,De,et,Pe.data):i.texImage2D(l.TEXTURE_2D,be,Ie,Pe.width,Pe.height,0,De,et,Pe.data)}else if(M.isDataArrayTexture)if(it){if(ut&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ne,Ie,Me.width,Me.height,Me.depth),X)if(M.layerUpdates.size>0){const be=Jv(Me.width,Me.height,M.format,M.type);for(const Le of M.layerUpdates){const Ve=Me.data.subarray(Le*be/Me.data.BYTES_PER_ELEMENT,(Le+1)*be/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,Le,Me.width,Me.height,1,De,et,Ve)}M.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,et,Me.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,Ie,Me.width,Me.height,Me.depth,0,De,et,Me.data);else if(M.isData3DTexture)it?(ut&&i.texStorage3D(l.TEXTURE_3D,Ne,Ie,Me.width,Me.height,Me.depth),X&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,et,Me.data)):i.texImage3D(l.TEXTURE_3D,0,Ie,Me.width,Me.height,Me.depth,0,De,et,Me.data);else if(M.isFramebufferTexture){if(ut)if(it)i.texStorage2D(l.TEXTURE_2D,Ne,Ie,Me.width,Me.height);else{let be=Me.width,Le=Me.height;for(let Ve=0;Ve<Ne;Ve++)i.texImage2D(l.TEXTURE_2D,Ve,Ie,be,Le,0,De,et,null),be>>=1,Le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in l){const be=l.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),Me.parentNode!==be){be.appendChild(Me),_.add(M),be.onpaint=Le=>{const Ve=Le.changedElements;for(const Ee of _)Ve.includes(Ee.image)&&(Ee.needsUpdate=!0)},be.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,Me);else{const Ve=l.RGBA,Ee=l.RGBA,$e=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,Ve,Ee,$e,Me)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(ke.length>0){if(it&&ut){const be=It(ke[0]);i.texStorage2D(l.TEXTURE_2D,Ne,Ie,be.width,be.height)}for(let be=0,Le=ke.length;be<Le;be++)Pe=ke[be],it?X&&i.texSubImage2D(l.TEXTURE_2D,be,0,0,De,et,Pe):i.texImage2D(l.TEXTURE_2D,be,Ie,De,et,Pe);M.generateMipmaps=!1}else if(it){if(ut){const be=It(Me);i.texStorage2D(l.TEXTURE_2D,Ne,Ie,be.width,be.height)}X&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,De,et,Me)}else i.texImage2D(l.TEXTURE_2D,0,Ie,De,et,Me);y(M)&&D(le),Ue.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Te(P,M,te){if(M.image.length!==6)return;const le=we(P,M),xe=M.source;i.bindTexture(l.TEXTURE_CUBE_MAP,P.__webglTexture,l.TEXTURE0+te);const Ce=r.get(xe);if(xe.version!==Ce.__version||le===!0){i.activeTexture(l.TEXTURE0+te);const Ue=Ut.getPrimaries(Ut.workingColorSpace),ve=M.colorSpace===xs?null:Ut.getPrimaries(M.colorSpace),Me=M.colorSpace===xs||Ue===ve?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(l.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let Ee=0;Ee<6;Ee++)!De&&!et?Ie[Ee]=b(M.image[Ee],!0,c.maxCubemapSize):Ie[Ee]=et?M.image[Ee].image:M.image[Ee],Ie[Ee]=sn(M,Ie[Ee]);const Pe=Ie[0],ke=f.convert(M.format,M.colorSpace),it=f.convert(M.type),ut=C(M.internalFormat,ke,it,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Ne=Ce.__version===void 0||le===!0,be=xe.dataReady;let Le=L(M,Pe);ge(l.TEXTURE_CUBE_MAP,M);let Ve;if(De){X&&Ne&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Le,ut,Pe.width,Pe.height);for(let Ee=0;Ee<6;Ee++){Ve=Ie[Ee].mipmaps;for(let $e=0;$e<Ve.length;$e++){const Ge=Ve[$e];M.format!==Hi?ke!==null?X?be&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,0,0,Ge.width,Ge.height,ke,Ge.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,ut,Ge.width,Ge.height,0,Ge.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?be&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,0,0,Ge.width,Ge.height,ke,it,Ge.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,ut,Ge.width,Ge.height,0,ke,it,Ge.data)}}}else{if(Ve=M.mipmaps,X&&Ne){Ve.length>0&&Le++;const Ee=It(Ie[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Le,ut,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(et){X?be&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ie[Ee].width,Ie[Ee].height,ke,it,Ie[Ee].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,Ie[Ee].width,Ie[Ee].height,0,ke,it,Ie[Ee].data);for(let $e=0;$e<Ve.length;$e++){const Nt=Ve[$e].image[Ee].image;X?be&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,0,0,Nt.width,Nt.height,ke,it,Nt.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,ut,Nt.width,Nt.height,0,ke,it,Nt.data)}}else{X?be&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ke,it,Ie[Ee]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,ke,it,Ie[Ee]);for(let $e=0;$e<Ve.length;$e++){const Ge=Ve[$e];X?be&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,0,0,ke,it,Ge.image[Ee]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,ut,ke,it,Ge.image[Ee])}}}y(M)&&D(l.TEXTURE_CUBE_MAP),Ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function me(P,M,te,le,xe,Ce){const Ue=f.convert(te.format,te.colorSpace),ve=f.convert(te.type),Me=C(te.internalFormat,Ue,ve,te.normalized,te.colorSpace),De=r.get(M),et=r.get(te);if(et.__renderTarget=M,!De.__hasExternalTextures){const Ie=Math.max(1,M.width>>Ce),Pe=Math.max(1,M.height>>Ce);xe===l.TEXTURE_3D||xe===l.TEXTURE_2D_ARRAY?i.texImage3D(xe,Ce,Me,Ie,Pe,M.depth,0,Ue,ve,null):i.texImage2D(xe,Ce,Me,Ie,Pe,0,Ue,ve,null)}i.bindFramebuffer(l.FRAMEBUFFER,P),jt(M)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,le,xe,et.__webglTexture,0,Pt(M)):(xe===l.TEXTURE_2D||xe>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,le,xe,et.__webglTexture,Ce),i.bindFramebuffer(l.FRAMEBUFFER,null)}function Re(P,M,te){if(l.bindRenderbuffer(l.RENDERBUFFER,P),M.depthBuffer){const le=M.depthTexture,xe=le&&le.isDepthTexture?le.type:null,Ce=z(M.stencilBuffer,xe),Ue=M.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;jt(M)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pt(M),Ce,M.width,M.height):te?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pt(M),Ce,M.width,M.height):l.renderbufferStorage(l.RENDERBUFFER,Ce,M.width,M.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Ue,l.RENDERBUFFER,P)}else{const le=M.textures;for(let xe=0;xe<le.length;xe++){const Ce=le[xe],Ue=f.convert(Ce.format,Ce.colorSpace),ve=f.convert(Ce.type),Me=C(Ce.internalFormat,Ue,ve,Ce.normalized,Ce.colorSpace);jt(M)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pt(M),Me,M.width,M.height):te?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pt(M),Me,M.width,M.height):l.renderbufferStorage(l.RENDERBUFFER,Me,M.width,M.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function At(P,M,te){const le=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(l.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=r.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),xe.__webglTexture===void 0){xe.__webglTexture=l.createTexture(),i.bindTexture(l.TEXTURE_CUBE_MAP,xe.__webglTexture),ge(l.TEXTURE_CUBE_MAP,M.depthTexture);const De=f.convert(M.depthTexture.format),et=f.convert(M.depthTexture.type);let Ie;M.depthTexture.format===Pa?Ie=l.DEPTH_COMPONENT24:M.depthTexture.format===Ks&&(Ie=l.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,M.width,M.height,0,De,et,null)}}else de(M.depthTexture,0);const Ce=xe.__webglTexture,Ue=Pt(M),ve=le?l.TEXTURE_CUBE_MAP_POSITIVE_X+te:l.TEXTURE_2D,Me=M.depthTexture.format===Ks?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(M.depthTexture.format===Pa)jt(M)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Me,ve,Ce,0,Ue):l.framebufferTexture2D(l.FRAMEBUFFER,Me,ve,Ce,0);else if(M.depthTexture.format===Ks)jt(M)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Me,ve,Ce,0,Ue):l.framebufferTexture2D(l.FRAMEBUFFER,Me,ve,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(P){const M=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const le=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=le}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(te)for(let le=0;le<6;le++)At(M.__webglFramebuffer[le],P,le);else{const le=P.texture.mipmaps;le&&le.length>0?At(M.__webglFramebuffer[0],P,0):At(M.__webglFramebuffer,P,0)}else if(te){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(l.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=l.createRenderbuffer(),Re(M.__webglDepthbuffer[le],P,!1);else{const xe=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[le];l.bindRenderbuffer(l.RENDERBUFFER,Ce),l.framebufferRenderbuffer(l.FRAMEBUFFER,xe,l.RENDERBUFFER,Ce)}}else{const le=P.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(l.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(l.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=l.createRenderbuffer(),Re(M.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,Ce),l.framebufferRenderbuffer(l.FRAMEBUFFER,xe,l.RENDERBUFFER,Ce)}}i.bindFramebuffer(l.FRAMEBUFFER,null)}function ct(P,M,te){const le=r.get(P);M!==void 0&&me(le.__webglFramebuffer,P,P.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),te!==void 0&&st(P)}function pt(P){const M=P.texture,te=r.get(P),le=r.get(M);P.addEventListener("dispose",E);const xe=P.textures,Ce=P.isWebGLCubeRenderTarget===!0,Ue=xe.length>1;if(Ue||(le.__webglTexture===void 0&&(le.__webglTexture=l.createTexture()),le.__version=M.version,d.memory.textures++),Ce){te.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer[ve]=[];for(let Me=0;Me<M.mipmaps.length;Me++)te.__webglFramebuffer[ve][Me]=l.createFramebuffer()}else te.__webglFramebuffer[ve]=l.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){te.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)te.__webglFramebuffer[ve]=l.createFramebuffer()}else te.__webglFramebuffer=l.createFramebuffer();if(Ue)for(let ve=0,Me=xe.length;ve<Me;ve++){const De=r.get(xe[ve]);De.__webglTexture===void 0&&(De.__webglTexture=l.createTexture(),d.memory.textures++)}if(P.samples>0&&jt(P)===!1){te.__webglMultisampledFramebuffer=l.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ve=0;ve<xe.length;ve++){const Me=xe[ve];te.__webglColorRenderbuffer[ve]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const De=f.convert(Me.format,Me.colorSpace),et=f.convert(Me.type),Ie=C(Me.internalFormat,De,et,Me.normalized,Me.colorSpace,P.isXRRenderTarget===!0),Pe=Pt(P);l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe,Ie,P.width,P.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+ve,l.RENDERBUFFER,te.__webglColorRenderbuffer[ve])}l.bindRenderbuffer(l.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=l.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(l.TEXTURE_CUBE_MAP,le.__webglTexture),ge(l.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)me(te.__webglFramebuffer[ve][Me],P,M,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else me(te.__webglFramebuffer[ve],P,M,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);y(M)&&D(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ve=0,Me=xe.length;ve<Me;ve++){const De=xe[ve],et=r.get(De);let Ie=l.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(Ie,et.__webglTexture),ge(Ie,De),me(te.__webglFramebuffer,P,De,l.COLOR_ATTACHMENT0+ve,Ie,0),y(De)&&D(Ie)}i.unbindTexture()}else{let ve=l.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(ve,le.__webglTexture),ge(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)me(te.__webglFramebuffer[Me],P,M,l.COLOR_ATTACHMENT0,ve,Me);else me(te.__webglFramebuffer,P,M,l.COLOR_ATTACHMENT0,ve,0);y(M)&&D(ve),i.unbindTexture()}P.depthBuffer&&st(P)}function Je(P){const M=P.textures;for(let te=0,le=M.length;te<le;te++){const xe=M[te];if(y(xe)){const Ce=F(P),Ue=r.get(xe).__webglTexture;i.bindTexture(Ce,Ue),D(Ce),i.unbindTexture()}}}const nt=[],Ft=[];function an(P){if(P.samples>0){if(jt(P)===!1){const M=P.textures,te=P.width,le=P.height;let xe=l.COLOR_BUFFER_BIT;const Ce=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Ue=r.get(P),ve=M.length>1;if(ve)for(let De=0;De<M.length;De++)i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Me=P.texture.mipmaps;Me&&Me.length>0?i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let De=0;De<M.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=l.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=l.STENCIL_BUFFER_BIT)),ve){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const et=r.get(M[De]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,et,0)}l.blitFramebuffer(0,0,te,le,0,0,te,le,xe,l.NEAREST),x===!0&&(nt.length=0,Ft.length=0,nt.push(l.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(nt.push(Ce),Ft.push(Ce),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ft)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,nt))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),ve)for(let De=0;De<M.length;De++){i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.RENDERBUFFER,Ue.__webglColorRenderbuffer[De]);const et=r.get(M[De]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,Ue.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+De,l.TEXTURE_2D,et,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&x){const M=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[M])}}}function Pt(P){return Math.min(c.maxSamples,P.samples)}function jt(P){const M=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(P){const M=d.render.frame;S.get(P)!==M&&(S.set(P,M),P.update())}function sn(P,M){const te=P.colorSpace,le=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Au&&te!==xs&&(Ut.getTransfer(te)===Zt?(le!==Hi||xe!==pi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",te)),M}function It(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=W,this.resetTextureUnits=ce,this.getTextureUnits=J,this.setTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=re,this.setTexture3D=pe,this.setTextureCube=_e,this.rebindTextures=ct,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=me,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function nR(l,t){function i(r,c=xs){let f;const d=Ut.getTransfer(c);if(r===pi)return l.UNSIGNED_BYTE;if(r===jp)return l.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return l.UNSIGNED_SHORT_5_5_5_1;if(r===F_)return l.UNSIGNED_INT_5_9_9_9_REV;if(r===H_)return l.UNSIGNED_INT_10F_11F_11F_REV;if(r===I_)return l.BYTE;if(r===B_)return l.SHORT;if(r===vo)return l.UNSIGNED_SHORT;if(r===Xp)return l.INT;if(r===ua)return l.UNSIGNED_INT;if(r===ra)return l.FLOAT;if(r===fa)return l.HALF_FLOAT;if(r===G_)return l.ALPHA;if(r===V_)return l.RGB;if(r===Hi)return l.RGBA;if(r===Pa)return l.DEPTH_COMPONENT;if(r===Ks)return l.DEPTH_STENCIL;if(r===k_)return l.RED;if(r===qp)return l.RED_INTEGER;if(r===$s)return l.RG;if(r===Yp)return l.RG_INTEGER;if(r===Zp)return l.RGBA_INTEGER;if(r===_u||r===Su||r===yu||r===bu)if(d===Zt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===_u)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===_u)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===ap||r===sp||r===rp)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===ip)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ap)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lp||r===op||r===cp||r===up||r===fp||r===Eu||r===dp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(r===lp||r===op)return d===Zt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===cp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===up)return f.COMPRESSED_R11_EAC;if(r===fp)return f.COMPRESSED_SIGNED_R11_EAC;if(r===Eu)return f.COMPRESSED_RG11_EAC;if(r===dp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hp||r===pp||r===mp||r===gp||r===xp||r===vp||r===_p||r===Sp||r===yp||r===bp||r===Mp||r===Ep||r===Tp||r===Ap)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(r===hp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_p)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ep)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tp)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return d===Zt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rp||r===wp||r===Cp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(r===Rp)return d===Zt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Np||r===Dp||r===Tu||r===Up)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(r===Np)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Dp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Up)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_o?l.UNSIGNED_INT_24_8:l[r]!==void 0?l[r]:null}return{convert:i}}const iR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new $_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new da({vertexShader:iR,fragmentShader:aR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ci(new Lu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends er{constructor(t,i){super();const r=this;let c=null,f=1,d=null,h="local-floor",x=1,g=null,S=null,_=null,v=null,T=null,w=null;const N=typeof XRWebGLBinding<"u",b=new sR,y={},D=i.getContextAttributes();let F=null,C=null;const z=[],L=[],U=new bt;let E=null,O=null;const H=new hi;H.viewport=new ln;const k=new hi;k.viewport=new ln;const $=[H,k],ce=new h1;let J=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=z[Z];return he===void 0&&(he=new Th,z[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=z[Z];return he===void 0&&(he=new Th,z[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=z[Z];return he===void 0&&(he=new Th,z[Z]=he),he.getHandSpace()};function W(Z){const he=L.indexOf(Z.inputSource);if(he===-1)return;const Ae=z[he];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,g||d),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){c.removeEventListener("select",W),c.removeEventListener("selectstart",W),c.removeEventListener("selectend",W),c.removeEventListener("squeeze",W),c.removeEventListener("squeezestart",W),c.removeEventListener("squeezeend",W),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",de);for(let Z=0;Z<z.length;Z++){const he=L[Z];he!==null&&(L[Z]=null,z[Z].disconnect(he))}J=null,ee=null,b.reset();for(const Z in y)delete y[Z];if(t.setRenderTarget(F),T=null,v=null,_=null,c=null,C=null,we.stop(),r.isPresenting=!1,t.setPixelRatio(E),t.setSize(U.width,U.height,!1),O!==null){const Z=O.camera;Z.fov=O.fov,Z.zoom=O.zoom,Z.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Z){g=Z},this.getBaseLayer=function(){return v!==null?v:T},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(c,i)),_},this.getFrame=function(){return w},this.getSession=function(){return c},this.setSession=async function(Z){if(c=Z,c!==null){if(F=t.getRenderTarget(),c.addEventListener("select",W),c.addEventListener("selectstart",W),c.addEventListener("selectend",W),c.addEventListener("squeeze",W),c.addEventListener("squeezestart",W),c.addEventListener("squeezeend",W),c.addEventListener("end",q),c.addEventListener("inputsourceschange",de),D.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(U),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Te=null,me=null;D.depth&&(me=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=D.stencil?Ks:Pa,Te=D.stencil?_o:ua);const Re={colorFormat:i.RGBA8,depthFormat:me,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(Re),c.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Gi(v.textureWidth,v.textureHeight,{format:Hi,type:pi,depthTexture:new yo(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(c,i,Ae),c.updateRenderState({baseLayer:T}),t.setPixelRatio(1),t.setSize(T.framebufferWidth,T.framebufferHeight,!1),C=new Gi(T.framebufferWidth,T.framebufferHeight,{format:Hi,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(x),g=null,d=await c.requestReferenceSpace(h),we.setContext(c),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function de(Z){for(let he=0;he<Z.removed.length;he++){const Ae=Z.removed[he],Te=L.indexOf(Ae);Te>=0&&(L[Te]=null,z[Te].disconnect(Ae))}for(let he=0;he<Z.added.length;he++){const Ae=Z.added[he];let Te=L.indexOf(Ae);if(Te===-1){for(let Re=0;Re<z.length;Re++)if(Re>=L.length){L.push(Ae),Te=Re;break}else if(L[Re]===null){L[Re]=Ae,Te=Re;break}if(Te===-1)break}const me=z[Te];me&&me.connect(Ae)}}const re=new oe,pe=new oe;function _e(Z,he,Ae){re.setFromMatrixPosition(he.matrixWorld),pe.setFromMatrixPosition(Ae.matrixWorld);const Te=re.distanceTo(pe),me=he.projectionMatrix.elements,Re=Ae.projectionMatrix.elements,At=me[14]/(me[10]-1),st=me[14]/(me[10]+1),ct=(me[9]+1)/me[5],pt=(me[9]-1)/me[5],Je=(me[8]-1)/me[0],nt=(Re[8]+1)/Re[0],Ft=At*Je,an=At*nt,Pt=Te/(-Je+nt),jt=Pt*-Je;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(jt),Z.translateZ(Pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),me[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const j=At+Pt,sn=st+Pt,It=Ft-jt,P=an+(Te-jt),M=ct*st/sn*j,te=pt*st/sn*j;Z.projectionMatrix.makePerspective(It,P,M,te,j,sn),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ze(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(c===null)return;let he=Z.near,Ae=Z.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(Ae=b.depthFar)),ce.near=k.near=H.near=he,ce.far=k.far=H.far=Ae,(J!==ce.near||ee!==ce.far)&&(c.updateRenderState({depthNear:ce.near,depthFar:ce.far}),J=ce.near,ee=ce.far),ce.layers.mask=Z.layers.mask|6,H.layers.mask=ce.layers.mask&-5,k.layers.mask=ce.layers.mask&-3;const Te=Z.parent,me=ce.cameras;Ze(ce,Te);for(let Re=0;Re<me.length;Re++)Ze(me[Re],Te);me.length===2?_e(ce,H,k):ce.projectionMatrix.copy(H.projectionMatrix),O===null&&Z.isPerspectiveCamera&&(O={camera:Z,fov:Z.fov,zoom:Z.zoom}),qe(Z,ce,Te)};function qe(Z,he,Ae){Ae===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Op*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(v===null&&T===null))return x},this.setFoveation=function(Z){x=Z,v!==null&&(v.fixedFoveation=Z),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ce)},this.getCameraTexture=function(Z){return y[Z]};let B=null;function ge(Z,he){if(S=he.getViewerPose(g||d),w=he,S!==null){const Ae=S.views;T!==null&&(t.setRenderTargetFramebuffer(C,T.framebuffer),t.setRenderTarget(C));let Te=!1;Ae.length!==ce.cameras.length&&(ce.cameras.length=0,Te=!0);for(let st=0;st<Ae.length;st++){const ct=Ae[st];let pt=null;if(T!==null)pt=T.getViewport(ct);else{const nt=_.getViewSubImage(v,ct);pt=nt.viewport,st===0&&(t.setRenderTargetTextures(C,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(C))}let Je=$[st];Je===void 0&&(Je=new hi,Je.layers.enable(st),Je.viewport=new ln,$[st]=Je),Je.matrix.fromArray(ct.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ct.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(ce.matrix.copy(Je.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),Te===!0&&ce.cameras.push(Je)}const me=c.enabledFeatures;if(me&&me.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&N){_=r.getBinding();const st=_.getDepthInformation(Ae[0]);st&&st.isValid&&st.texture&&b.init(st,c.renderState)}if(me&&me.includes("camera-access")&&N){t.state.unbindTexture(),_=r.getBinding();for(let st=0;st<Ae.length;st++){const ct=Ae[st].camera;if(ct){let pt=y[ct];pt||(pt=new $_,y[ct]=pt);const Je=_.getCameraImage(ct);pt.sourceTexture=Je}}}}for(let Ae=0;Ae<z.length;Ae++){const Te=L[Ae],me=z[Ae];Te!==null&&me!==void 0&&me.update(Te,he,g||d)}B&&B(Z,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const we=new aS;we.setAnimationLoop(ge),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}}const lR=new on,fS=new ht;fS.set(-1,0,0,0,1,0,0,0,1);function oR(l,t){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,eS(l)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function c(b,y,D,F,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?f(b,y):y.isMeshLambertMaterial?(f(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(f(b,y),_(b,y)):y.isMeshPhongMaterial?(f(b,y),S(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(f(b,y),v(b,y),y.isMeshPhysicalMaterial&&T(b,y,C)):y.isMeshMatcapMaterial?(f(b,y),w(b,y)):y.isMeshDepthMaterial?f(b,y):y.isMeshDistanceMaterial?(f(b,y),N(b,y)):y.isMeshNormalMaterial?f(b,y):y.isLineBasicMaterial?(d(b,y),y.isLineDashedMaterial&&h(b,y)):y.isPointsMaterial?x(b,y,D,F):y.isSpriteMaterial?g(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ei&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ei&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const D=t.get(y),F=D.envMap,C=D.envMapRotation;F&&(b.envMap.value=F,b.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(C)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(fS),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function d(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function h(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function x(b,y,D,F){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*D,b.scale.value=F*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function g(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function S(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function _(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function v(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function T(b,y,D){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.retroreflectivity>0&&(b.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=D.texture,b.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,y){y.matcap&&(b.matcap.value=y.matcap)}function N(b,y){const D=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(D.matrixWorld),b.nearDistance.value=D.shadow.camera.near,b.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function cR(l,t,i,r){let c={},f={},d=[];const h=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function x(C,z){const L=z.program;r.uniformBlockBinding(C,L)}function g(C,z){let L=c[C.id];L===void 0&&(b(C),L=S(C),c[C.id]=L,C.addEventListener("dispose",D));const U=z.program;r.updateUBOMapping(C,U);const E=t.render.frame;f[C.id]!==E&&(v(C),f[C.id]=E)}function S(C){const z=_();C.__bindingPointIndex=z;const L=l.createBuffer(),U=C.__size,E=C.usage;return l.bindBuffer(l.UNIFORM_BUFFER,L),l.bufferData(l.UNIFORM_BUFFER,U,E),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,z,L),L}function _(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const z=c[C.id],L=C.uniforms,U=C.__cache;l.bindBuffer(l.UNIFORM_BUFFER,z);for(let E=0,O=L.length;E<O;E++){const H=L[E];if(Array.isArray(H))for(let k=0,$=H.length;k<$;k++)T(H[k],E,k,U);else T(H,E,0,U)}l.bindBuffer(l.UNIFORM_BUFFER,null)}function T(C,z,L,U){if(N(C,z,L,U)===!0){const E=C.__offset,O=C.value;if(Array.isArray(O)){let H=0;for(let k=0;k<O.length;k++){const $=O[k],ce=y($);w($,C.__data,H),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(H+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(O,C.__data,0);l.bufferSubData(l.UNIFORM_BUFFER,E,C.__data)}}function w(C,z,L){typeof C=="number"||typeof C=="boolean"?z[0]=C:C.isMatrix3?(z[0]=C.elements[0],z[1]=C.elements[1],z[2]=C.elements[2],z[3]=0,z[4]=C.elements[3],z[5]=C.elements[4],z[6]=C.elements[5],z[7]=0,z[8]=C.elements[6],z[9]=C.elements[7],z[10]=C.elements[8],z[11]=0):ArrayBuffer.isView(C)?z.set(new C.constructor(C.buffer,C.byteOffset,z.length)):C.toArray(z,L)}function N(C,z,L,U){const E=C.value,O=z+"_"+L;if(U[O]===void 0)return typeof E=="number"||typeof E=="boolean"?U[O]=E:ArrayBuffer.isView(E)?U[O]=E.slice():U[O]=E.clone(),!0;{const H=U[O];if(typeof E=="number"||typeof E=="boolean"){if(H!==E)return U[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(H.equals(E)===!1)return H.copy(E),!0}}return!1}function b(C){const z=C.uniforms;let L=0;const U=16;for(let O=0,H=z.length;O<H;O++){const k=Array.isArray(z[O])?z[O]:[z[O]];for(let $=0,ce=k.length;$<ce;$++){const J=k[$],ee=Array.isArray(J.value)?J.value:[J.value];for(let W=0,q=ee.length;W<q;W++){const de=ee[W],re=y(de),pe=L%U,_e=pe%re.boundary,Ze=pe+_e;L+=_e,Ze!==0&&U-Ze<re.storage&&(L+=U-Ze),J.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=re.storage}}}const E=L%U;return E>0&&(L+=U-E),C.__size=L,C.__cache={},this}function y(C){const z={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(z.boundary=4,z.storage=4):C.isVector2?(z.boundary=8,z.storage=8):C.isVector3||C.isColor?(z.boundary=16,z.storage=12):C.isVector4?(z.boundary=16,z.storage=16):C.isMatrix3?(z.boundary=48,z.storage=48):C.isMatrix4?(z.boundary=64,z.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(z.boundary=16,z.storage=C.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",C),z}function D(C){const z=C.target;z.removeEventListener("dispose",D);const L=d.indexOf(z.__bindingPointIndex);d.splice(L,1),l.deleteBuffer(c[z.id]),delete c[z.id],delete f[z.id]}function F(){for(const C in c)l.deleteBuffer(c[C]);d=[],c={},f={}}return{bind:x,update:g,dispose:F}}const uR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function fR(){return ia===null&&(ia=new QE(uR,16,16,$s,fa),ia.name="DFG_LUT",ia.minFilter=Bn,ia.magFilter=Bn,ia.wrapS=La,ia.wrapT=La,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class dR{constructor(t={}){const{canvas:i=AE(),context:r=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:T=pi}=t;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const N=T,b=new Set([Zp,Yp,qp]),y=new Set([pi,ua,vo,_o,jp,Wp]),D=new Uint32Array(4),F=new Int32Array(4),C=new oe;let z=null,L=null;const U=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let k=!1,$=null,ce=null,J=null,ee=null;this._outputColorSpace=wi;let W=0,q=0,de=null,re=-1,pe=null;const _e=new ln,Ze=new ln;let qe=null;const B=new zt(0);let ge=0,we=i.width,Z=i.height,he=1,Ae=null,Te=null;const me=new ln(0,0,we,Z),Re=new ln(0,0,we,Z);let At=!1;const st=new $p;let ct=!1,pt=!1;const Je=new on,nt=new oe,Ft=new ln,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function jt(){return de===null?he:1}let j=r;function sn(A,G){return i.getContext(A,G)}let It,P,M,te,le,xe,Ce,Ue,ve,Me,De,et,Ie,Pe,ke,it,ut,X,Ne,be,Le,Ve,Ee;try{const A={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:x,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vp}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",ft,!1),i.addEventListener("webglcontextcreationerror",ti,!1),j===null){const G="webgl2";if(j=sn(G,A),j===null)throw sn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(A){throw i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",ft,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),Ht("WebGLRenderer: "+A.message),A}function $e(){It=new f2(j),It.init(),Le=new nR(j,It),P=new t2(j,It,t,Le),M=new eR(j,It),P.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),ce=j.createFramebuffer(),J=j.createFramebuffer(),ee=j.createFramebuffer(),te=new p2(j),le=new H3,xe=new tR(j,It,M,le,P,Le,te),Ce=new u2(H),Ue=new g1(j),Ve=new $A(j,Ue),ve=new d2(j,Ue,te,Ve),Me=new g2(j,ve,Ue,Ve,te),X=new m2(j,P,xe),ke=new n2(le),De=new F3(H,Ce,It,P,Ve,ke),et=new oR(H,le),Ie=new V3,Pe=new Y3(It),ut=new JA(H,Ce,M,Me,w,x),it=new $3(H,Me,P),Ee=new cR(j,te,P,M),Ne=new e2(j,It,te),be=new h2(j,It,te),te.programs=De.programs,H.capabilities=P,H.extensions=It,H.properties=le,H.renderLists=Ie,H.shadowMap=it,H.state=M,H.info=te}N!==pi&&(O=new v2(N,i.width,i.height,h,c,f));const Ge=new rR(H,j);this.xr=Ge,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(we,Z,!1))},this.getSize=function(A){return A.set(we,Z)},this.setSize=function(A,G,fe=!0){if(Ge.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}we=A,Z=G,i.width=Math.floor(A*he),i.height=Math.floor(G*he),fe===!0&&(i.style.width=A+"px",i.style.height=G+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(we*he,Z*he).floor()},this.setDrawingBufferSize=function(A,G,fe){we=A,Z=G,he=fe,i.width=Math.floor(A*fe),i.height=Math.floor(G*fe),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(N===pi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(_e)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,G,fe,ie){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,G,fe,ie),M.viewport(_e.copy(me).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,G,fe,ie){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,G,fe,ie),M.scissor(Ze.copy(Re).multiplyScalar(he).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){M.setScissorTest(At=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,fe=!0){let ie=0;if(A){let ae=!1;if(de!==null){const Be=de.texture.format;ae=b.has(Be)}if(ae){const Be=de.texture.type,Xe=y.has(Be),Oe=ut.getClearColor(),Ye=ut.getClearAlpha(),Ke=Oe.r,rt=Oe.g,dt=Oe.b;Xe?(D[0]=Ke,D[1]=rt,D[2]=dt,D[3]=Ye,j.clearBufferuiv(j.COLOR,0,D)):(F[0]=Ke,F[1]=rt,F[2]=dt,F[3]=Ye,j.clearBufferiv(j.COLOR,0,F))}else ie|=j.COLOR_BUFFER_BIT}G&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",ft,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ut.dispose(),Ie.dispose(),Pe.dispose(),le.dispose(),Ce.dispose(),Me.dispose(),Ve.dispose(),Ee.dispose(),De.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",ys),Ge.removeEventListener("sessionend",Ba),Vi.stop()};function Nt(A){A.preventDefault(),wv("WebGLRenderer: Context Lost."),k=!0}function ft(){wv("WebGLRenderer: Context Restored."),k=!1;const A=te.autoReset,G=it.enabled,fe=it.autoUpdate,ie=it.needsUpdate,ae=it.type;$e(),te.autoReset=A,it.enabled=G,it.autoUpdate=fe,it.needsUpdate=ie,it.type=ae}function ti(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gi(A){const G=A.target;G.removeEventListener("dispose",gi),Pu(G)}function Pu(A){tr(A),le.remove(A)}function tr(A){const G=le.get(A).programs;G!==void 0&&(G.forEach(function(fe){De.releaseProgram(fe)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,fe,ie,ae,Be){G===null&&(G=an);const Xe=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Oe=ml(A,G,fe,ie,ae);M.setMaterial(ie,Xe);let Ye=fe.index,Ke=1;if(ie.wireframe===!0){if(Ye=ve.getWireframeAttribute(fe),Ye===void 0)return;Ke=2}const rt=fe.drawRange,dt=fe.attributes.position;let je=rt.start*Ke,Mt=(rt.start+rt.count)*Ke;Be!==null&&(je=Math.max(je,Be.start*Ke),Mt=Math.min(Mt,(Be.start+Be.count)*Ke)),Ye!==null?(je=Math.max(je,0),Mt=Math.min(Mt,Ye.count)):dt!=null&&(je=Math.max(je,0),Mt=Math.min(Mt,dt.count));const vt=Mt-je;if(vt<0||vt===1/0)return;Ve.setup(ae,ie,Oe,fe,Ye);let Kt,kt=Ne;if(Ye!==null&&(Kt=Ue.get(Ye),kt=be,kt.setIndex(Kt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*jt()),kt.setMode(j.LINES)):kt.setMode(j.TRIANGLES);else if(ae.isLine){let Sn=ie.linewidth;Sn===void 0&&(Sn=1),M.setLineWidth(Sn*jt()),ae.isLineSegments?kt.setMode(j.LINES):ae.isLineLoop?kt.setMode(j.LINE_LOOP):kt.setMode(j.LINE_STRIP)}else ae.isPoints?kt.setMode(j.POINTS):ae.isSprite&&kt.setMode(j.TRIANGLES);if(ae.isBatchedMesh)if(It.get("WEBGL_multi_draw"))kt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Sn=ae._multiDrawStarts,Fe=ae._multiDrawCounts,cn=ae._multiDrawCount,Dt=Ye?Ue.get(Ye).bytesPerElement:1,Fn=le.get(ie).currentProgram.getUniforms();for(let ni=0;ni<cn;ni++)Fn.setValue(j,"_gl_DrawID",ni),kt.render(Sn[ni]/Dt,Fe[ni])}else if(ae.isInstancedMesh)kt.renderInstances(je,vt,ae.count);else if(fe.isInstancedBufferGeometry){const Sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Fe=Math.min(fe.instanceCount,Sn);kt.renderInstances(je,vt,Fe)}else kt.render(je,vt)};function Ss(A,G,fe,ie){$!==null&&A.isNodeMaterial&&$.setObject(ie,A),ct===!0&&ke.setState(A,fe,!1),A.transparent===!0&&A.side===sa&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,bs(A,G,ie),A.side=Qs,A.needsUpdate=!0,bs(A,G,ie),A.side=sa):bs(A,G,ie)}this.compile=function(A,G,fe=null){fe===null&&(fe=A),$!==null&&$.renderStart(A,G,fe),L=Pe.get(fe),L.init(G),E.push(L),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(G.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),A!==fe&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(G.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights(),$!==null&&$.updateLights(L.state.lightsArray),pt=this.localClippingEnabled,ct=ke.init(this.clippingPlanes,pt),ct===!0&&ke.setGlobalState(this.clippingPlanes,G),$!==null&&it.render(L.state.shadowsArray,fe,G);const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Be=ae.material;if(Be)if(Array.isArray(Be))for(let Xe=0;Xe<Be.length;Xe++){const Oe=Be[Xe];Ss(Oe,fe,G,ae),ie.add(Oe)}else Ss(Be,fe,G,ae),ie.add(Be)}),L=E.pop(),$!==null&&$.renderEnd(),ie},this.compileAsync=function(A,G,fe=null){const ie=this.compile(A,G,fe);return new Promise(ae=>{function Be(){if(ie.forEach(function(Xe){const Ye=le.get(Xe).currentProgram;(Ye===void 0||Ye.isReady())&&ie.delete(Xe)}),ie.size===0){ae(A);return}setTimeout(Be,10)}It.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ia=null;function ha(A){Ia&&Ia(A)}function ys(){Vi.stop()}function Ba(){Vi.start()}const Vi=new aS;Vi.setAnimationLoop(ha),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){Ia=A,Ge.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},Ge.addEventListener("sessionstart",ys),Ge.addEventListener("sessionend",Ba),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;$!==null&&$.renderStart(A,G);const fe=Ge.enabled===!0&&Ge.isPresenting===!0,ie=O!==null&&(de===null||fe)&&O.begin(H,de);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(G),G=Ge.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,G,de),L=Pe.get(A,E.length),L.init(G),L.state.textureUnits=xe.getTextureUnits(),E.push(L),Je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),st.setFromProjectionMatrix(Je,la,G.reversedDepth),pt=this.localClippingEnabled,ct=ke.init(this.clippingPlanes,pt),z=Ie.get(A,U.length),z.init(),U.push(z),Ge.enabled===!0&&Ge.isPresenting===!0){const Xe=H.xr.getDepthSensingMesh();Xe!==null&&ul(Xe,G,-1/0,H.sortObjects)}ul(A,G,0,H.sortObjects),z.finish(),$!==null&&$.updateLights(L.state.lightsArray),H.sortObjects===!0&&z.sort(Ae,Te),Pt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Pt&&ut.addToRenderList(z,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&ke.beginShadows();const ae=L.state.shadowsArray;if(it.render(ae,A,G),ct===!0&&ke.endShadows(),(ie&&O.hasRenderPass())===!1){const Xe=z.opaque,Oe=z.transmissive;if(L.setupLights(),G.isArrayCamera){const Ye=G.cameras;if(Oe.length>0)for(let Ke=0,rt=Ye.length;Ke<rt;Ke++){const dt=Ye[Ke];nr(Xe,Oe,A,dt)}Pt&&ut.render(A);for(let Ke=0,rt=Ye.length;Ke<rt;Ke++){const dt=Ye[Ke];fl(z,A,dt,dt.viewport)}}else Oe.length>0&&nr(Xe,Oe,A,G),Pt&&ut.render(A),fl(z,A,G)}de!==null&&q===0&&(xe.updateMultisampleRenderTarget(de),xe.updateRenderTargetMipmap(de)),ie&&O.end(H),A.isScene===!0&&A.onAfterRender(H,A,G),Ve.resetDefaultState(),re=-1,pe=null,E.pop(),E.length>0?(L=E[E.length-1],xe.setTextureUnits(L.state.textureUnits),ct===!0&&ke.setGlobalState(H.clippingPlanes,L.state.camera)):L=null,U.pop(),U.length>0?z=U[U.length-1]:z=null,$!==null&&$.renderEnd()};function ul(A,G,fe,ie){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(st)){ie&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Je);const Xe=Me.update(A),Oe=A.material;Oe.visible&&z.push(A,Xe,Oe,fe,Ft.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(st))){const Xe=Me.update(A),Oe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ft.copy(Xe.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(Je)),Array.isArray(Oe)){const Ye=Xe.groups;for(let Ke=0,rt=Ye.length;Ke<rt;Ke++){const dt=Ye[Ke],je=Oe[dt.materialIndex];je&&je.visible&&z.push(A,Xe,je,fe,Ft.z,dt,G)}}else Oe.visible&&z.push(A,Xe,Oe,fe,Ft.z,null,G)}}const Be=A.children;for(let Xe=0,Oe=Be.length;Xe<Oe;Xe++)ul(Be[Xe],G,fe,ie)}function fl(A,G,fe,ie){const{opaque:ae,transmissive:Be,transparent:Xe}=A;L.setupLightsView(fe),ct===!0&&ke.setGlobalState(H.clippingPlanes,fe),ie&&M.viewport(_e.copy(ie)),ae.length>0&&ki(ae,G,fe),Be.length>0&&ki(Be,G,fe),Xe.length>0&&ki(Xe,G,fe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function nr(A,G,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const je=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new Gi(1,1,{generateMipmaps:!0,type:je?fa:pi,minFilter:Zs,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Be=L.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||_e;Be.setSize(Xe.z*H.transmissionResolutionScale,Xe.w*H.transmissionResolutionScale);const Oe=H.getRenderTarget(),Ye=H.getActiveCubeFace(),Ke=H.getActiveMipmapLevel();H.setRenderTarget(Be),H.getClearColor(B),ge=H.getClearAlpha(),ge<1&&H.setClearColor(16777215,.5),H.clear(),Pt&&ut.render(fe);const rt=H.toneMapping;H.toneMapping=oa;const dt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),ct===!0&&ke.setGlobalState(H.clippingPlanes,ie),ki(A,fe,ie),xe.updateMultisampleRenderTarget(Be),xe.updateRenderTargetMipmap(Be),It.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Mt=0,vt=G.length;Mt<vt;Mt++){const Kt=G[Mt],{object:kt,geometry:Sn,material:Fe,group:cn}=Kt;if(Fe.side===sa&&kt.layers.test(ie.layers)){const Dt=Fe.side;Fe.side=ei,Fe.needsUpdate=!0,To(kt,fe,ie,Sn,Fe,cn),Fe.side=Dt,Fe.needsUpdate=!0,je=!0}}je===!0&&(xe.updateMultisampleRenderTarget(Be),xe.updateRenderTargetMipmap(Be))}H.setRenderTarget(Oe,Ye,Ke),H.setClearColor(B,ge),dt!==void 0&&(ie.viewport=dt),H.toneMapping=rt}function ki(A,G,fe){const ie=G.isScene===!0?G.overrideMaterial:null;for(let ae=0,Be=A.length;ae<Be;ae++){const Xe=A[ae],{object:Oe,geometry:Ye,group:Ke}=Xe;let rt=Xe.material;rt.allowOverride===!0&&ie!==null&&(rt=ie),Oe.layers.test(fe.layers)&&To(Oe,G,fe,Ye,rt,Ke)}}function To(A,G,fe,ie,ae,Be){$!==null&&ae.isNodeMaterial&&$.setObject(A,ae),A.onBeforeRender(H,G,fe,ie,ae,Be),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(H,G,fe,ie,A,Be),ae.transparent===!0&&ae.side===sa&&ae.forceSinglePass===!1?(ae.side=ei,ae.needsUpdate=!0,H.renderBufferDirect(fe,G,ie,ae,A,Be),ae.side=Qs,ae.needsUpdate=!0,H.renderBufferDirect(fe,G,ie,ae,A,Be),ae.side=sa):H.renderBufferDirect(fe,G,ie,ae,A,Be),A.onAfterRender(H,G,fe,ie,ae,Be)}function bs(A,G,fe){G.isScene!==!0&&(G=an);const ie=le.get(A),ae=L.state.lights,Be=L.state.shadowsArray,Xe=ae.state.version,Oe=De.getParameters(A,ae.state,Be,G,fe,L.state.lightProbeGridArray),Ye=De.getProgramCacheKey(Oe);let Ke=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,ie.fog=G.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ce.get(A.envMap||ie.environment,rt),ie.envMapRotation=ie.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",gi),Ke=new Map,ie.programs=Ke);let dt=Ke.get(Ye);if(dt!==void 0){if(ie.currentProgram===dt&&ie.lightsStateVersion===Xe)return hl(A,Oe),dt}else Oe.uniforms=De.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,fe,Oe),A.onBeforeCompile(Oe,H),dt=De.acquireProgram(Oe,Ye),Ke.set(Ye,dt),ie.uniforms=Oe.uniforms;const je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=ke.uniform),hl(A,Oe),ie.needsLights=Ro(A),ie.lightsStateVersion=Xe,ie.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.sunLights.value=ae.state.sun,je.sunLightShadows.value=ae.state.sunShadow,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.sunShadowMatrix.value=ae.state.sunShadowMatrix,je.sunShadowCascade.value=ae.state.sunShadowCascade,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=dt,ie.uniformsList=null,dt}function dl(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Mu.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function hl(A,G){const fe=le.get(A);fe.outputColorSpace=G.outputColorSpace,fe.batching=G.batching,fe.batchingColor=G.batchingColor,fe.instancing=G.instancing,fe.instancingColor=G.instancingColor,fe.instancingMorph=G.instancingMorph,fe.skinning=G.skinning,fe.morphTargets=G.morphTargets,fe.morphNormals=G.morphNormals,fe.morphColors=G.morphColors,fe.morphTargetsCount=G.morphTargetsCount,fe.numClippingPlanes=G.numClippingPlanes,fe.numIntersection=G.numClipIntersection,fe.vertexAlphas=G.vertexAlphas,fe.vertexTangents=G.vertexTangents,fe.toneMapping=G.toneMapping}function pl(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let fe=0,ie=A.length;fe<ie;fe++){const ae=A[fe];if(ae.texture!==null&&ae.boundingBox.containsPoint(C))return ae}return null}function ml(A,G,fe,ie,ae){G.isScene!==!0&&(G=an),xe.resetTextureUnits();const Be=G.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?G.environment:null,Oe=de===null?H.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ut.workingColorSpace,Ye=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ke=Ce.get(ie.envMap||Xe,Ye),rt=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!fe.morphAttributes.position,Mt=!!fe.morphAttributes.normal,vt=!!fe.morphAttributes.color;let Kt=oa;ie.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Kt=H.toneMapping);const kt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Sn=kt!==void 0?kt.length:0,Fe=le.get(ie),cn=L.state.lights;if(ct===!0&&(pt===!0||A!==pe)){const Rt=A===pe&&ie.id===re;ke.setState(ie,A,Rt)}let Dt=!1;ie.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==cn.state.version||Fe.outputColorSpace!==Oe||ae.isBatchedMesh&&Fe.batching===!1||!ae.isBatchedMesh&&Fe.batching===!0||ae.isBatchedMesh&&Fe.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Fe.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Fe.instancing===!1||!ae.isInstancedMesh&&Fe.instancing===!0||ae.isSkinnedMesh&&Fe.skinning===!1||!ae.isSkinnedMesh&&Fe.skinning===!0||ae.isInstancedMesh&&Fe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Fe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Fe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Fe.instancingMorph===!1&&ae.morphTexture!==null||Fe.envMap!==Ke||ie.fog===!0&&Fe.fog!==Be||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ke.numPlanes||Fe.numIntersection!==ke.numIntersection)||Fe.vertexAlphas!==rt||Fe.vertexTangents!==dt||Fe.morphTargets!==je||Fe.morphNormals!==Mt||Fe.morphColors!==vt||Fe.toneMapping!==Kt||Fe.morphTargetsCount!==Sn||!!Fe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Dt=!0):(Dt=!0,Fe.__version=ie.version);let Fn=Fe.currentProgram;Dt===!0&&(Fn=bs(ie,G,ae),$&&ie.isNodeMaterial&&$.onUpdateProgram(ie,Fn,Fe));let ni=!1,Xi=!1,_t=!1;const Gt=Fn.getUniforms(),$t=Fe.uniforms;if(M.useProgram(Fn.program)&&(ni=!0,Xi=!0,_t=!0),ie.id!==re&&(re=ie.id,Xi=!0),Fe.needsLights){const Rt=pl(L.state.lightProbeGridArray,ae);Fe.lightProbeGrid!==Rt&&(Fe.lightProbeGrid=Rt,Xi=!0)}if(ni||pe!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(j,"projectionMatrix",A.projectionMatrix),Gt.setValue(j,"viewMatrix",A.matrixWorldInverse);const un=Gt.map.cameraPosition;un!==void 0&&un.setValue(j,nt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Gt.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Gt.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),pe!==A&&(pe=A,Xi=!0,_t=!0)}if(Fe.needsLights&&(cn.state.sunShadowMap.length>0&&Gt.setValue(j,"sunShadowMap",cn.state.sunShadowMap,xe),cn.state.directionalShadowMap.length>0&&Gt.setValue(j,"directionalShadowMap",cn.state.directionalShadowMap,xe),cn.state.spotShadowMap.length>0&&Gt.setValue(j,"spotShadowMap",cn.state.spotShadowMap,xe),cn.state.pointShadowMap.length>0&&Gt.setValue(j,"pointShadowMap",cn.state.pointShadowMap,xe)),ae.isSkinnedMesh){Gt.setOptional(j,ae,"bindMatrix"),Gt.setOptional(j,ae,"bindMatrixInverse");const Rt=ae.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Gt.setValue(j,"boneTexture",Rt.boneTexture,xe))}ae.isBatchedMesh&&(Gt.setOptional(j,ae,"batchingTexture"),Gt.setValue(j,"batchingTexture",ae._matricesTexture,xe),Gt.setOptional(j,ae,"batchingIdTexture"),Gt.setValue(j,"batchingIdTexture",ae._indirectTexture,xe),Gt.setOptional(j,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Gt.setValue(j,"batchingColorTexture",ae._colorsTexture,xe));const ii=fe.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&X.update(ae,fe,Fn),(Xi||Fe.receiveShadow!==ae.receiveShadow)&&(Fe.receiveShadow=ae.receiveShadow,Gt.setValue(j,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&G.environment!==null&&($t.envMapIntensity.value=G.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=fR()),Xi){if(Gt.setValue(j,"toneMappingExposure",H.toneMappingExposure),Fe.needsLights&&Ao($t,_t),Be&&ie.fog===!0&&et.refreshFogUniforms($t,Be),et.refreshMaterialUniforms($t,ie,he,Z,L.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.lightProbeGrid){const Rt=Fe.lightProbeGrid;$t.probesSH.value=Rt.texture,$t.probesMin.value.copy(Rt.boundingBox.min),$t.probesMax.value.copy(Rt.boundingBox.max),$t.probesResolution.value.copy(Rt.resolution)}Mu.upload(j,dl(Fe),$t,xe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Mu.upload(j,dl(Fe),$t,xe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Gt.setValue(j,"center",ae.center),Gt.setValue(j,"modelViewMatrix",ae.modelViewMatrix),Gt.setValue(j,"normalMatrix",ae.normalMatrix),Gt.setValue(j,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Rt=ie.uniformsGroups;for(let un=0,pa=Rt.length;un<pa;un++){const wo=Rt[un];Ee.update(wo,Fn),Ee.bind(wo,Fn)}}return Fn}function Ao(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Ro(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(A,G,fe){const ie=le.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),le.get(A.texture).__webglTexture=G,le.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const fe=le.get(A);fe.__webglFramebuffer=G,fe.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,fe=0){de=A,W=G,q=fe;let ie=null,ae=!1,Be=!1;if(A){const Oe=le.get(A);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,Oe.__webglFramebuffer),_e.copy(A.viewport),Ze.copy(A.scissor),qe=A.scissorTest,M.viewport(_e),M.scissor(Ze),M.setScissorTest(qe),re=-1;return}else if(Oe.__webglFramebuffer===void 0)xe.setupRenderTarget(A);else if(Oe.__hasExternalTextures)xe.rebindTextures(A,le.get(A.texture).__webglTexture,le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Oe.__boundDepthTexture!==rt){if(rt!==null&&le.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Be=!0);const Ke=le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?ie=Ke[G][fe]:ie=Ke[G],ae=!0):A.samples>0&&xe.useMultisampledRTT(A)===!1?ie=le.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[fe]:ie=Ke,_e.copy(A.viewport),Ze.copy(A.scissor),qe=A.scissorTest}else _e.copy(me).multiplyScalar(he).floor(),Ze.copy(Re).multiplyScalar(he).floor(),qe=At;if(fe!==0&&(ie=ce),M.bindFramebuffer(j.FRAMEBUFFER,ie)&&M.drawBuffers(A,ie),M.viewport(_e),M.scissor(Ze),M.setScissorTest(qe),ae){const Oe=le.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,Oe.__webglTexture,fe)}else if(Be){const Oe=G;for(let Ye=0;Ye<A.textures.length;Ye++){const Ke=le.get(A.textures[Ye]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ye,Ke.__webglTexture,fe,Oe)}}else if(A!==null&&fe!==0){const Oe=le.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Oe.__webglTexture,fe)}re=-1};function xi(A){const G=le.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=P.textureFormatReadable(A.format),G.__typeReadable=P.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,fe,ie,ae,Be,Xe,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye){M.bindFramebuffer(j.FRAMEBUFFER,Ye);try{const Ke=A.textures[Oe],rt=Ke.format,dt=Ke.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Oe);const je=xi(Ke);if(je.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ie&&fe>=0&&fe<=A.height-ae&&j.readPixels(G,fe,ie,ae,Le.convert(rt),Le.convert(dt),Be)}finally{const Ke=de!==null?le.get(de).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,G,fe,ie,ae,Be,Xe,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye)if(G>=0&&G<=A.width-ie&&fe>=0&&fe<=A.height-ae){M.bindFramebuffer(j.FRAMEBUFFER,Ye);const Ke=A.textures[Oe],rt=Ke.format,dt=Ke.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Oe);const je=xi(Ke);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Mt),j.bufferData(j.PIXEL_PACK_BUFFER,Be.byteLength,j.STREAM_READ),j.readPixels(G,fe,ie,ae,Le.convert(rt),Le.convert(dt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const vt=de!==null?le.get(de).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,vt);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await RE(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Mt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Be),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Mt),j.deleteSync(Kt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,fe=0){const ie=Math.pow(2,-fe),ae=Math.floor(A.image.width*ie),Be=Math.floor(A.image.height*ie),Xe=G!==null?G.x:0,Oe=G!==null?G.y:0;xe.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,Xe,Oe,ae,Be),M.unbindTexture()},this.copyTextureToTexture=function(A,G,fe=null,ie=null,ae=0,Be=0){let Xe,Oe,Ye,Ke,rt,dt,je,Mt,vt;const Kt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Oe=fe.max.y-fe.min.y,Ye=fe.isBox3?fe.max.z-fe.min.z:1,Ke=fe.min.x,rt=fe.min.y,dt=fe.isBox3?fe.min.z:0;else{const $t=Math.pow(2,-ae);Xe=Math.floor(Kt.width*$t),Oe=Math.floor(Kt.height*$t),A.isDataArrayTexture?Ye=Kt.depth:A.isData3DTexture?Ye=Math.floor(Kt.depth*$t):Ye=1,Ke=0,rt=0,dt=0}ie!==null?(je=ie.x,Mt=ie.y,vt=ie.z):(je=0,Mt=0,vt=0);const kt=Le.convert(G.format),Sn=Le.convert(G.type);let Fe;G.isData3DTexture?(xe.setTexture3D(G,0),Fe=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(xe.setTexture2DArray(G,0),Fe=j.TEXTURE_2D_ARRAY):(xe.setTexture2D(G,0),Fe=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const cn=M.getParameter(j.UNPACK_ROW_LENGTH),Dt=M.getParameter(j.UNPACK_IMAGE_HEIGHT),Fn=M.getParameter(j.UNPACK_SKIP_PIXELS),ni=M.getParameter(j.UNPACK_SKIP_ROWS),Xi=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,Kt.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Kt.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Ke),M.pixelStorei(j.UNPACK_SKIP_ROWS,rt),M.pixelStorei(j.UNPACK_SKIP_IMAGES,dt);const _t=A.isDataArrayTexture||A.isData3DTexture,Gt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const $t=le.get(A),ii=le.get(G),Rt=le.get($t.__renderTarget),un=le.get(ii.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,Rt.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let pa=0;pa<Ye;pa++)_t&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(A).__webglTexture,ae,dt+pa),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,le.get(G).__webglTexture,Be,vt+pa)),j.blitFramebuffer(Ke,rt,Xe,Oe,je,Mt,Xe,Oe,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||le.has(A)){const $t=le.get(A),ii=le.get(G);M.bindFramebuffer(j.READ_FRAMEBUFFER,J),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,ee);for(let Rt=0;Rt<Ye;Rt++)_t?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,$t.__webglTexture,ae,dt+Rt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,$t.__webglTexture,ae),Gt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ii.__webglTexture,Be,vt+Rt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ii.__webglTexture,Be),ae!==0?j.blitFramebuffer(Ke,rt,Xe,Oe,je,Mt,Xe,Oe,j.COLOR_BUFFER_BIT,j.NEAREST):Gt?j.copyTexSubImage3D(Fe,Be,je,Mt,vt+Rt,Ke,rt,Xe,Oe):j.copyTexSubImage2D(Fe,Be,je,Mt,Ke,rt,Xe,Oe);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Fe,Be,je,Mt,vt,Xe,Oe,Ye,kt,Sn,Kt.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(Fe,Be,je,Mt,vt,Xe,Oe,Ye,kt,Kt.data):j.texSubImage3D(Fe,Be,je,Mt,vt,Xe,Oe,Ye,kt,Sn,Kt):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Be,je,Mt,Xe,Oe,kt,Sn,Kt.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Be,je,Mt,Kt.width,Kt.height,kt,Kt.data):j.texSubImage2D(j.TEXTURE_2D,Be,je,Mt,Xe,Oe,kt,Sn,Kt);M.pixelStorei(j.UNPACK_ROW_LENGTH,cn),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Dt),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Fn),M.pixelStorei(j.UNPACK_SKIP_ROWS,ni),M.pixelStorei(j.UNPACK_SKIP_IMAGES,Xi),Be===0&&G.generateMipmaps&&j.generateMipmap(Fe),M.unbindTexture()},this.initRenderTarget=function(A){le.get(A).__webglFramebuffer===void 0&&xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){W=0,q=0,de=null,M.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const hR=({className:l=""})=>{const t=Bt.useRef(null),[i,r]=Bt.useState("wireframe"),[c,f]=Bt.useState("emerald"),[d,h]=Bt.useState(!1),x=Bt.useRef("wireframe"),g=Bt.useRef("emerald"),S=Bt.useRef(1),_=Bt.useRef(0);return Bt.useEffect(()=>{x.current=i},[i]),Bt.useEffect(()=>{g.current=c},[c]),Bt.useEffect(()=>{S.current=d?2.5:1},[d]),Bt.useEffect(()=>{const v=t.current;if(!v)return;const T=new kE,w=new hi(45,v.clientWidth/v.clientHeight,.1,100);w.position.z=7.5;const N=new dR({antialias:!0,alpha:!0,powerPreference:"high-performance"});N.setSize(v.clientWidth,v.clientHeight),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.toneMapping=kp,N.toneMappingExposure=1.2,v.appendChild(N.domElement);const b=new f1(16777215,.4);T.add(b);const y=new Kv(13434624,2,20);y.position.set(5,5,5),T.add(y);const D=new Kv(3718648,2,20);D.position.set(-5,-4,4),T.add(D);const F=2.3,C=new tm(F,16),z=C.attributes.position,L=new Float32Array(z.array),U=new r1({color:328965,roughness:.15,metalness:.95,wireframe:!1,flatShading:!0}),E=new Ci(C,U);T.add(E);const O=new Cu({color:13434624,wireframe:!0,transparent:!0,opacity:.85}),H=new Ci(C,O);T.add(H);const k=650,$=new mi,ce=new Float32Array(k*3),J=new Float32Array(k);for(let Te=0;Te<k;Te++){const me=Math.random(),Re=Math.random(),At=me*2*Math.PI,st=Math.acos(2*Re-1),ct=F*1.05+(Math.random()-.5)*1.8,pt=Math.sin(st);ce[Te*3]=ct*pt*Math.cos(At),ce[Te*3+1]=ct*pt*Math.sin(At),ce[Te*3+2]=ct*Math.cos(st),J[Te]=Math.random()*2+1}$.setAttribute("position",new ca(ce,3));const ee=new Q_({color:13434624,size:.045,transparent:!0,opacity:.75,blending:qh}),W=new $E($,ee);T.add(W);const q=new nm(3.2,3.23,64),de=new Cu({color:16777215,side:sa,transparent:!0,opacity:.25,wireframe:!0}),re=new Ci(q,de);re.rotation.x=Math.PI/2.3,T.add(re);const pe={x:0,y:0},_e={x:0,y:0},Ze=Te=>{const me=v.getBoundingClientRect(),Re=(Te.clientX-me.left)/me.width*2-1,At=-((Te.clientY-me.top)/me.height*2-1);pe.x=Re,pe.y=At},qe=()=>{_.current=1};window.addEventListener("mousemove",Ze,{passive:!0}),v.addEventListener("pointerdown",qe);const B=()=>{const Te=g.current;Te==="emerald"?(O.color.setHex(1096065),ee.color.setHex(3462041),y.color.setHex(366185),D.color.setHex(165063),U.color.setHex(413243)):Te==="slate"?(O.color.setHex(6583435),ee.color.setHex(9741240),y.color.setHex(4674921),D.color.setHex(988970),U.color.setHex(1976635)):(O.color.setHex(14251782),ee.color.setHex(16498468),y.color.setHex(11817737),D.color.setHex(14753096),U.color.setHex(4528643))},ge=new p1;let we;const Z=()=>{we=requestAnimationFrame(Z);const Te=ge.getElapsedTime()*S.current;_e.x+=(pe.x-_e.x)*.05,_e.y+=(pe.y-_e.y)*.05,_.current>.01?_.current*=.92:_.current=0,B();const me=x.current;me==="wireframe"?(H.visible=!0,E.visible=!0,U.opacity=.85,W.visible=!0):me==="faceted"?(H.visible=!1,E.visible=!0,W.visible=!0):me==="points"&&(H.visible=!1,E.visible=!1,W.visible=!0);const Re=z.array,At=Re.length/3,st=1.4,ct=_.current*.6;for(let Je=0;Je<At;Je++){const nt=L[Je*3],Ft=L[Je*3+1],an=L[Je*3+2],jt=1+Math.sin(nt*st+Te*1.5)*Math.cos(Ft*st+Te*1.2)*Math.sin(an*st+Te*.8)*.16+ct*Math.sin(nt*3+Te*4);Re[Je*3]=nt*jt,Re[Je*3+1]=Ft*jt,Re[Je*3+2]=an*jt}z.needsUpdate=!0,C.computeVertexNormals();const pt=Te*.18;E.rotation.y=pt+_e.x*.8,E.rotation.x=_e.y*.6,H.rotation.copy(E.rotation),W.rotation.y=-Te*.08+_e.x*.4,W.rotation.z=Math.sin(Te*.2)*.1,re.rotation.z=Te*.12,re.rotation.y=_e.x*.2,N.render(T,w)};Z();const he=()=>{if(!v)return;const Te=v.clientWidth,me=v.clientHeight;w.aspect=Te/me,w.updateProjectionMatrix(),N.setSize(Te,me)},Ae=new ResizeObserver(()=>{he()});return Ae.observe(v),()=>{cancelAnimationFrame(we),window.removeEventListener("mousemove",Ze),v.removeEventListener("pointerdown",qe),Ae.disconnect(),N.dispose(),C.dispose(),U.dispose(),O.dispose(),ee.dispose(),$.dispose(),N.domElement&&v.contains(N.domElement)&&v.removeChild(N.domElement)}},[]),p.jsxs("div",{className:`relative w-full h-full select-none ${l}`,children:[p.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing",title:"Interactive 3D Void Object — Click to Pulse / Drag to Orbit"}),p.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none text-xs",children:[p.jsxs("div",{className:"flex items-center gap-1 p-1 bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-full pointer-events-auto shadow-sm",children:[p.jsx("button",{type:"button",onClick:()=>r("wireframe"),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${i==="wireframe"?"bg-[#18181B] text-white font-semibold shadow-sm":"text-zinc-600 hover:text-zinc-900"}`,children:"Каркас"}),p.jsx("button",{type:"button",onClick:()=>r("faceted"),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${i==="faceted"?"bg-[#18181B] text-white font-semibold shadow-sm":"text-zinc-600 hover:text-zinc-900"}`,children:"Объем"}),p.jsx("button",{type:"button",onClick:()=>r("points"),className:`px-3 py-1 rounded-full text-xs font-medium transition-all ${i==="points"?"bg-[#18181B] text-white font-semibold shadow-sm":"text-zinc-600 hover:text-zinc-900"}`,children:"Точки"})]}),p.jsxs("div",{className:"flex items-center gap-2 p-1.5 px-3 bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-full pointer-events-auto shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("button",{type:"button",onClick:()=>f("emerald"),className:`w-3.5 h-3.5 rounded-full transition-transform ${c==="emerald"?"bg-emerald-600 ring-2 ring-emerald-800 scale-110":"bg-emerald-600/40 hover:scale-105"}`,title:"Emerald Calm"}),p.jsx("button",{type:"button",onClick:()=>f("slate"),className:`w-3.5 h-3.5 rounded-full transition-transform ${c==="slate"?"bg-slate-700 ring-2 ring-slate-900 scale-110":"bg-slate-400 hover:scale-105"}`,title:"Slate Pure"}),p.jsx("button",{type:"button",onClick:()=>f("amber"),className:`w-3.5 h-3.5 rounded-full transition-transform ${c==="amber"?"bg-amber-600 ring-2 ring-amber-800 scale-110":"bg-amber-500/40 hover:scale-105"}`,title:"Amber Warm"})]}),p.jsx("div",{className:"w-[1px] h-3 bg-zinc-200 mx-0.5"}),p.jsxs("button",{type:"button",onClick:()=>h(v=>!v),className:"text-xs text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors font-medium",title:"Скорость вращения",children:[p.jsx(LM,{className:`w-3 h-3 ${d?"animate-spin text-emerald-600":""}`}),p.jsx("span",{children:d?"2.5x":"1x"})]})]})]})]})},pR=({onOpenResume:l,onExploreWorks:t})=>p.jsxs("section",{className:"relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden border-b border-zinc-200/80 art-grid bg-[#FBFBFD]",children:[p.jsx("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",children:[p.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-center",children:[p.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs sm:text-sm text-zinc-700 w-max mb-6 shadow-xs",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600 animate-pulse"}),p.jsx("span",{className:"font-bold text-zinc-900",children:"Middle+ Product Designer"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-zinc-500",children:"Опыт 4 года 11 месяцев"})]}),p.jsxs("h1",{className:"font-display font-extrabold text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-[#18181B] leading-[1.02] mb-6",children:["Интерфейсы для ",p.jsx("br",{}),p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-zinc-900",children:"EdTech, Web3 и FinTech"})]}),p.jsxs("p",{className:"text-zinc-600 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mb-10 font-normal",children:["Проектирование сложных цифровых продуктов и масштабируемых дизайн-систем. Сквозной продуктовый подход: от глубинных исследований и CustDev до интерфейсов с высокой конверсией — мобильное обучающее приложение ",p.jsx("span",{className:"text-emerald-800 font-semibold",children:"LIBRIUM"})," (Community Design), Web3-экосистема ",p.jsx("span",{className:"text-zinc-900 font-semibold",children:"PPKAS"}),", сервис поиска специалистов ",p.jsx("span",{className:"text-zinc-900 font-semibold",children:"EZ"})," (UPROCK) и аналитические B2B SaaS платформы."]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[p.jsxs("a",{href:yt.telegramPersonal,target:"_blank",rel:"noopener noreferrer",className:"px-8 py-4 rounded-full bg-[#18181B] text-white font-bold text-base hover:bg-zinc-800 transition-all flex items-center gap-2.5 shadow-md active:scale-95",children:[p.jsx(Gp,{className:"w-4 h-4"}),p.jsx("span",{children:"Написать в Telegram"})]}),p.jsxs("button",{type:"button",onClick:t,className:"px-7 py-4 rounded-full bg-white border border-zinc-200/90 hover:border-zinc-400 text-zinc-800 font-semibold text-base transition-all flex items-center gap-2 active:scale-95 shadow-xs",children:[p.jsx("span",{children:"Смотреть проекты"}),p.jsx(uM,{className:"w-4 h-4 text-zinc-500"})]}),p.jsxs("button",{type:"button",onClick:l,className:"px-6 py-4 rounded-full text-zinc-600 hover:text-zinc-900 transition-colors text-base font-medium flex items-center gap-2",children:[p.jsx(A_,{className:"w-4 h-4"}),p.jsx("span",{children:"Резюме (CV)"})]})]}),p.jsxs("div",{className:"mt-12 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center gap-6 text-sm text-zinc-500",children:[p.jsxs("div",{children:["Локация: ",p.jsx("span",{className:"text-zinc-800 font-medium",children:yt.location})]}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsxs("div",{children:["Формат: ",p.jsx("span",{className:"text-zinc-800 font-medium",children:yt.workPreference})]})]})]}),p.jsxs("div",{className:"lg:col-span-5 h-[420px] sm:h-[500px] xl:h-[560px] relative rounded-3xl border border-zinc-200/90 bg-white overflow-hidden shadow-xl",children:[p.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-emerald-100/60 blur-[100px] pointer-events-none rounded-full"}),p.jsx(hR,{className:"w-full h-full"})]})]})}),p.jsx("div",{className:"mt-14 border-t border-b border-zinc-200/80 bg-zinc-100/60 py-3.5 overflow-hidden select-none",children:p.jsxs("div",{className:"animate-marquee whitespace-nowrap flex items-center gap-10 text-zinc-600 text-sm sm:text-base font-medium",children:[p.jsx("span",{className:"text-emerald-800 font-bold",children:"LIBRIUM • МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ ОБУЧЕНИЯ (COMMUNITY DESIGN)"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-zinc-900 font-semibold",children:"18 CUSTDEV ИНТЕРВЬЮ"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-blue-700 font-bold",children:"EZ // ПОИСК ИСПОЛНИТЕЛЕЙ (UPROCK)"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-zinc-900 font-semibold",children:"PPKAS // KASPA WEB3 ECOSYSTEM"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-emerald-800 font-bold",children:"D1 RETENTION +22%"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{children:"WALLET CONVERSION 89%"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-zinc-900 font-semibold",children:"B2B SAAS СКОРОСТЬ 5М → 1М"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{children:"ЗОЛОТОЙ СЕРТИФИКАТ UPROCK"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"text-emerald-800 font-bold",children:"@PROJECTATOMA"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{children:"DPROFILE /MYONLYREGRET"}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{children:"BEHANCE /EXUSSREMO"})]})})]}),mR=()=>p.jsx("section",{className:"py-12 md:py-16 border-b border-zinc-200/80 bg-white",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8",children:[p.jsx("h2",{className:"text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-800",children:"Ключевые измеримые результаты"}),p.jsx("span",{className:"text-xs text-zinc-500",children:"Официальные данные практики и продуктовых кейсов"})]}),p.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6",children:tM.map((l,t)=>p.jsxs("div",{className:"p-5 sm:p-6 bg-[#FBFBFD] border border-zinc-200/80 hover:border-zinc-300 transition-all rounded-2xl group flex flex-col justify-between shadow-xs hover:shadow-sm",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 group-hover:text-emerald-800 transition-colors mb-2 tracking-tight",children:l.value}),p.jsx("div",{className:"text-sm sm:text-base font-bold text-zinc-800 mb-1.5",children:l.label})]}),p.jsx("div",{className:"text-xs text-zinc-500 leading-snug pt-2 border-t border-zinc-200/70 mt-2",children:l.context})]},t))})]})}),Bp=({project:l})=>{const t=l.previewMedia??[],[i,r]=Bt.useState(0);if(t.length===0)return p.jsxs("div",{className:"w-full h-full min-h-[320px] flex flex-col items-center justify-center gap-3 bg-zinc-100 border border-dashed border-zinc-300 rounded-2xl text-center p-8",children:[p.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm",children:p.jsx(TM,{className:"w-6 h-6 text-zinc-400"})}),p.jsx("div",{className:"font-display font-bold text-base text-zinc-700",children:"Превью кейса появится здесь"}),p.jsx("div",{className:"text-sm text-zinc-500 max-w-xs",children:"Добавьте изображение или видео этого проекта"})]});const c=t[Math.min(i,t.length-1)];return p.jsxs("div",{className:"w-full h-full min-h-[320px] relative bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center",children:[c.type==="iframe"&&p.jsx("iframe",{src:c.src,title:c.title??l.title,className:"w-full h-full border-0",allow:"autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;",allowFullScreen:!0},c.src),c.type==="video"&&p.jsx("video",{src:c.src,poster:c.poster,controls:!0,playsInline:!0,className:"w-full h-full object-contain bg-zinc-950"},c.src),c.type==="image"&&p.jsx("img",{src:c.src,alt:c.title??`Превью проекта ${l.title}`,className:"w-full h-full object-contain bg-zinc-950"},c.src),t.length>1&&p.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur rounded-full",children:t.map((f,d)=>p.jsx("button",{type:"button",onClick:()=>r(d),"aria-label":`Показать превью ${d+1}`,className:`h-2 rounded-full transition-all ${d===i?"bg-white w-5":"bg-white/40 w-2"}`},d))})]})},gR=({onSelectProject:l})=>{const[t,i]=Bt.useState("all"),[r,c]=Bt.useState(Ys[0].id),f=Ys.filter(h=>t==="all"?!0:t==="commercial"?h.origin==="commercial":t==="non_commercial"?h.origin==="non_commercial":t==="concept"?h.origin==="concept"||h.category==="game-2d":!0),d=Ys.find(h=>h.id===r)||f[0]||Ys[0];return p.jsx("section",{id:"works-section",className:"py-20 md:py-28 border-b border-zinc-200/80 bg-[#FBFBFD]",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-200/80",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs sm:text-sm text-emerald-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600"}),p.jsx("span",{children:"Продуктовое портфолио"})]}),p.jsx("h2",{className:"font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight",children:"Кейсы & Разработки"})]}),p.jsx("div",{className:"flex flex-wrap gap-2 text-xs sm:text-sm font-medium",children:[{id:"all",label:"Все проекты"},{id:"commercial",label:"Коммерческие (Белоснежка, LIBRIUM, PPKAS)"},{id:"non_commercial",label:"Некоммерческие & Учебные (EZ)"},{id:"concept",label:"Концепты & R&D"}].map(h=>p.jsx("button",{type:"button",onClick:()=>i(h.id),className:`px-4 py-2 rounded-full transition-all ${t===h.id?"bg-[#18181B] text-white font-bold shadow-sm":"bg-white text-zinc-600 border border-zinc-200/90 hover:text-zinc-900 hover:border-zinc-400"}`,children:h.label},h.id))})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start",children:[p.jsx("div",{className:"lg:col-span-7 divide-y divide-zinc-200/80 border-t border-b border-zinc-200/80",children:f.map(h=>{var g;const x=h.id===r;return p.jsxs("div",{onMouseEnter:()=>c(h.id),onClick:()=>l(h),className:`py-8 px-6 -mx-6 cursor-pointer rounded-2xl transition-all duration-200 group ${x?"bg-white shadow-md border border-zinc-200/90":"hover:bg-white/80"}`,children:[p.jsxs("div",{className:"flex items-start justify-between gap-6",children:[p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-zinc-500 mb-2.5",children:[p.jsx("span",{className:"font-semibold text-zinc-800",children:h.company}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{children:h.period}),p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsx("span",{className:"px-2.5 py-0.5 bg-emerald-50 text-emerald-800 font-semibold text-xs rounded-full border border-emerald-200",children:h.originLabel}),h.isInProgress&&p.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 text-amber-900 font-bold text-xs rounded-full border border-amber-300",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"}),"В разработке"]}),h.isLatest&&!h.isInProgress&&p.jsx("span",{className:"px-2.5 py-0.5 bg-zinc-900 text-white font-semibold text-xs rounded-full",children:"Новый кейс"}),((g=h.externalLinks)==null?void 0:g.liveSite)&&p.jsxs("a",{href:h.externalLinks.liveSite,target:"_blank",rel:"noopener noreferrer",onClick:S=>S.stopPropagation(),className:"inline-flex items-center gap-1 px-2.5 py-0.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs rounded-full border border-zinc-200 transition-colors",children:[p.jsx("span",{children:"Live: belosnezhka-cafe.ru"}),p.jsx(vs,{className:"w-3 h-3"})]})]}),p.jsx("h3",{className:"font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#18181B] group-hover:text-emerald-800 transition-colors leading-tight mb-3",children:h.title}),p.jsx("p",{className:"text-base text-zinc-600 font-normal leading-relaxed mb-4 max-w-2xl",children:h.subtitle}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 text-xs sm:text-sm",children:[p.jsx("span",{className:"px-3.5 py-1 bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/80 rounded-full",children:h.metrics}),h.tags.slice(0,3).map((S,_)=>p.jsx("span",{className:"px-3 py-1 bg-zinc-100/80 text-zinc-600 border border-zinc-200/80 rounded-full font-medium",children:S},_))]})]}),p.jsx("div",{className:"w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-[#18181B] group-hover:border-[#18181B] transition-all flex-shrink-0 mt-2 shadow-sm",children:p.jsx(vs,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"mt-6 lg:hidden",children:p.jsx(Bp,{project:h})})]},h.id)})}),p.jsx("div",{className:"hidden lg:block lg:col-span-5 sticky top-28",children:p.jsxs("div",{className:"p-6 sm:p-7 bg-white border border-zinc-200/90 rounded-3xl relative shadow-xl",children:[p.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-zinc-100 text-sm",children:[p.jsxs("div",{className:"flex items-center gap-2.5",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-600"}),p.jsx("span",{className:"font-bold text-zinc-900 font-display",children:"Превью кейса"})]}),p.jsx("span",{className:"text-xs px-2.5 py-0.5 bg-zinc-100 text-zinc-700 font-medium rounded-full",children:d.originLabel})]}),p.jsx("div",{className:"h-[400px]",children:p.jsx(Bp,{project:d})}),p.jsxs("div",{className:"mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between",children:[p.jsxs("div",{className:"text-xs text-zinc-500",children:["Роль: ",p.jsx("span",{className:"text-zinc-900 font-semibold",children:d.role})]}),p.jsxs("button",{type:"button",onClick:()=>l(d),className:"px-5 py-2.5 rounded-full bg-[#18181B] text-white text-xs sm:text-sm font-bold hover:bg-zinc-800 transition-all flex items-center gap-1.5 shadow-sm",children:[p.jsx("span",{children:"Открыть страницу кейса"}),p.jsx(E_,{className:"w-4 h-4"})]})]})]})})]})]})})},xR=()=>p.jsx("section",{id:"experience-section",className:"py-20 md:py-28 border-b border-zinc-200/80 bg-[#FBFBFD]",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-200/80",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs sm:text-sm text-emerald-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600"}),p.jsx("span",{children:"Опыт работы • 4 года 11 месяцев"})]}),p.jsx("h2",{className:"font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight",children:"Карьерная хронология"})]}),p.jsx("div",{className:"text-sm text-zinc-500",children:"Официальные данные коммерческой практики из резюме"})]}),p.jsx("div",{className:"space-y-8",children:b_.map((l,t)=>p.jsxs("div",{className:"p-8 sm:p-10 bg-white border border-zinc-200/90 hover:border-zinc-300 transition-all rounded-3xl shadow-xs",children:[p.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-zinc-100",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-2",children:[p.jsx("span",{className:"px-3 py-1 bg-zinc-100 border border-zinc-200/80 rounded-full text-zinc-700 font-medium",children:l.type}),p.jsx("span",{children:l.period}),l.clients&&p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"text-zinc-300",children:"•"}),p.jsxs("span",{children:["Клиенты: ",l.clients.join(", ")]})]})]}),p.jsxs("h3",{className:"font-display font-extrabold text-2xl sm:text-4xl text-zinc-900",children:[l.title," ",p.jsx("span",{className:"text-emerald-700",children:"/"})," ",l.company]})]}),p.jsx("div",{className:"text-xs sm:text-sm font-bold text-emerald-800 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full self-start",children:"Верифицированный опыт"})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6",children:[p.jsxs("div",{className:"lg:col-span-7",children:[p.jsxs("h4",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4 flex items-center gap-2",children:[p.jsx(T_,{className:"w-4 h-4 text-emerald-600"}),p.jsx("span",{children:"Достижения и измеримые результаты"})]}),p.jsx("ul",{className:"space-y-3",children:l.achievements.map((i,r)=>p.jsxs("li",{className:"flex items-start gap-3 text-base text-zinc-700 leading-relaxed",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2.5 flex-shrink-0"}),p.jsx("span",{children:i})]},r))})]}),p.jsxs("div",{className:"lg:col-span-5 bg-[#FBFBFD] p-6 rounded-2xl border border-zinc-200/80",children:[p.jsx("h4",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700 mb-3",children:"Зона ответственности"}),p.jsx("ul",{className:"space-y-2",children:l.duties.map((i,r)=>p.jsxs("li",{className:"text-sm text-zinc-600 flex items-start gap-2",children:[p.jsx("span",{className:"text-zinc-400",children:"•"}),p.jsx("span",{children:i})]},r))})]})]})]},t))}),p.jsxs("div",{className:"mt-10 p-8 sm:p-10 bg-amber-50/70 border border-amber-200/90 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs",children:[p.jsxs("div",{className:"flex items-start gap-5",children:[p.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white border border-amber-200 flex items-center justify-center text-amber-700 flex-shrink-0 shadow-xs",children:p.jsx(xM,{className:"w-7 h-7"})}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs uppercase tracking-wider text-amber-800 font-bold mb-1",children:yt.qualification.honors}),p.jsx("h3",{className:"font-display font-extrabold text-2xl sm:text-3xl text-zinc-900",children:yt.qualification.title}),p.jsxs("p",{className:"text-sm sm:text-base text-zinc-600 mt-1",children:[yt.qualification.school," • ",yt.qualification.year]})]})]}),p.jsx("div",{className:"text-sm text-zinc-600 max-w-sm",children:"Углубленная квалификация в UX-исследованиях, проектировании дизайн-систем и защите продуктов перед стейкхолдерами."})]})]})}),vR=()=>p.jsx("section",{id:"skills-section",className:"py-20 md:py-28 border-b border-zinc-200/80 bg-white",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-200/80",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs sm:text-sm text-emerald-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600"}),p.jsx("span",{children:"Хард-скиллы & экспертиза"})]}),p.jsx("h2",{className:"font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-tight",children:"Компетенции и стек"})]}),p.jsx("div",{className:"text-sm text-zinc-500",children:"Figma Design Systems • EdTech & Web3 UX • Game UI & Spine 2D"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:nM.map((l,t)=>p.jsxs("div",{className:"p-8 bg-[#FBFBFD] border border-zinc-200/90 hover:border-zinc-300 transition-all rounded-3xl flex flex-col justify-between shadow-xs",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3",children:l.code}),p.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-zinc-900 mb-6",children:l.category}),p.jsx("ul",{className:"space-y-2.5",children:l.skills.map((i,r)=>p.jsxs("li",{className:"p-3.5 bg-white border border-zinc-200/80 rounded-xl text-sm sm:text-base text-zinc-800 flex items-center justify-between hover:border-zinc-400 transition-colors shadow-2xs",children:[p.jsx("span",{className:"font-medium",children:i}),p.jsx(Hp,{className:"w-4 h-4 text-emerald-700 flex-shrink-0"})]},r))})]}),p.jsxs("div",{className:"mt-8 pt-4 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-500",children:[p.jsx("span",{children:"Уровень: Senior / Middle+"}),p.jsx("span",{className:"text-emerald-800 font-bold",children:"Подтверждено кейсами"})]})]},t))}),p.jsxs("div",{className:"mt-10 p-8 bg-[#FBFBFD] border border-zinc-200/90 rounded-3xl shadow-xs",children:[p.jsx("div",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 mb-6",children:"Ежедневный инструментарий для работы"}),p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4",children:[{name:"Figma",role:"Design Systems & Tokens"},{name:"Miro",role:"CJM & User Flows"},{name:"Framer",role:"Интерактивные прототипы"},{name:"After Effects",role:"60 FPS анимация"},{name:"Spine 2D",role:"Скелетный игровой арт"},{name:"Lottie",role:"JSON микро-UI"},{name:"Photoshop",role:"2D графика и текстуры"},{name:"Google Analytics",role:"UX-метрики и воронки"}].map((l,t)=>p.jsxs("div",{className:"p-4 bg-white border border-zinc-200/80 rounded-2xl text-center hover:border-zinc-400 transition-colors shadow-2xs",children:[p.jsx("div",{className:"text-zinc-900 font-display font-bold text-base mb-1",children:l.name}),p.jsx("div",{className:"text-xs text-zinc-500 leading-snug",children:l.role})]},t))})]})]})}),_R=()=>{const[l,t]=Bt.useState(null),[i,r]=Bt.useState(""),c=(d,h)=>{navigator.clipboard.writeText(d),t(h),setTimeout(()=>t(null),2e3)},f=d=>{if(d.preventDefault(),!i.trim())return;const h=`https://t.me/vaivin?text=${encodeURIComponent(i)}`;window.open(h,"_blank")};return p.jsx("section",{id:"contact-section",className:"py-24 md:py-32 border-b border-zinc-200/80 bg-white",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-200/80",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs sm:text-sm text-emerald-800 font-bold uppercase tracking-wider mb-2 flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600"}),p.jsx("span",{children:"Контакты для связи"})]}),p.jsxs("h2",{className:"font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-zinc-900 tracking-tight leading-tight",children:["Обсудить проект или ",p.jsx("br",{}),p.jsx("span",{className:"text-emerald-800",children:"позицию в команде"})]})]}),p.jsxs("div",{className:"text-sm sm:text-base text-zinc-500 max-w-md",children:["Открыта к предложениям: Middle+ / Senior Product Designer. Локация: ",yt.location," (",yt.workPreference,")."]})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start",children:[p.jsxs("div",{className:"lg:col-span-7 bg-[#FBFBFD] border border-zinc-200/90 rounded-3xl p-8 sm:p-10 shadow-lg",children:[p.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-zinc-900 mb-3",children:"Быстрое сообщение в Telegram"}),p.jsx("p",{className:"text-zinc-600 text-base mb-6 leading-relaxed",children:"Напишите задачу по продукту или приглашение на интервью — текст сразу откроется в диалоге в Telegram."}),p.jsxs("form",{onSubmit:f,className:"space-y-4",children:[p.jsx("div",{children:p.jsx("textarea",{rows:4,value:i,onChange:d=>r(d.target.value),placeholder:"Привет, Анна! Мы ищем продуктового дизайнера в проект...",className:"w-full bg-white border border-zinc-200 rounded-2xl p-5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 text-base leading-relaxed resize-none transition-colors shadow-2xs"})}),p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-2",children:[p.jsxs("button",{type:"submit",className:"px-8 py-4 rounded-full bg-[#18181B] text-white font-bold text-base hover:bg-zinc-800 transition-all flex items-center gap-2.5 shadow-md active:scale-95",children:[p.jsx(Gp,{className:"w-4 h-4"}),p.jsx("span",{children:"Отправить в Telegram @vaivin"})]}),p.jsx("div",{className:"text-xs text-zinc-500 font-medium",children:"Время ответа обычно < 2 часов"})]})]})]}),p.jsxs("div",{className:"lg:col-span-5 space-y-3.5",children:[p.jsx("div",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-600 mb-4",children:"Прямые контакты и профили"}),iM.map((d,h)=>p.jsxs("div",{className:"p-5 bg-white border border-zinc-200/90 hover:border-zinc-300 transition-all rounded-2xl flex items-center justify-between group shadow-xs",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-zinc-500 font-medium",children:d.label}),p.jsx("div",{className:"text-zinc-900 font-display font-bold text-lg mt-0.5 group-hover:text-emerald-800 transition-colors",children:d.handle})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:()=>c(d.handle,d.label),className:"p-2.5 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-900 transition-colors bg-white shadow-2xs",title:"Скопировать",children:l===d.label?p.jsx(Hp,{className:"w-4 h-4 text-emerald-600"}):p.jsx(bM,{className:"w-4 h-4"})}),p.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-[#18181B] hover:text-white hover:border-[#18181B] text-zinc-700 transition-all shadow-2xs",title:"Открыть ссылку",children:p.jsx(vs,{className:"w-4 h-4"})})]})]},h))]})]})]})})},SR=()=>{const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return p.jsx("footer",{className:"py-14 bg-white border-t border-zinc-200/80 text-sm select-none",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16",children:[p.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-100",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-display font-extrabold text-2xl text-zinc-900",children:"Анна Агабекян"}),p.jsx("div",{className:"text-zinc-500 text-sm mt-1",children:"Middle+ Product Designer • EdTech, Web3, FinTech & Game UI"})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-600",children:[p.jsx("a",{href:yt.telegramPersonal,target:"_blank",rel:"noreferrer",className:"hover:text-emerald-800 transition-colors",children:"Telegram @vaivin"}),p.jsx("a",{href:yt.telegramChannel,target:"_blank",rel:"noreferrer",className:"hover:text-emerald-800 transition-colors",children:"Канал @projectatoma"}),p.jsx("a",{href:yt.dprofileUrl,target:"_blank",rel:"noreferrer",className:"hover:text-emerald-800 transition-colors",children:"Dprofile"}),p.jsx("a",{href:yt.behanceUrl,target:"_blank",rel:"noreferrer",className:"hover:text-emerald-800 transition-colors",children:"Behance"}),p.jsx("a",{href:yt.dribbbleUrl,target:"_blank",rel:"noreferrer",className:"hover:text-emerald-800 transition-colors",children:"Dribbble"})]}),p.jsxs("button",{type:"button",onClick:l,className:"p-3 px-4 rounded-full bg-zinc-100 border border-zinc-200 hover:bg-[#18181B] hover:text-white hover:border-[#18181B] text-zinc-700 transition-all flex items-center gap-2 text-xs font-semibold shadow-2xs",title:"Наверх",children:[p.jsx("span",{children:"Наверх"}),p.jsx(mM,{className:"w-4 h-4"})]})]}),p.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500",children:[p.jsxs("div",{children:[yt.location," • Готова к релокации и удаленной работе"]}),p.jsxs("div",{children:["© ",new Date().getFullYear()," Анна Агабекян. Все права защищены."]})]})]})})},yR=({project:l,onBack:t,onSelectProject:i})=>{var z,L;const[r,c]=Bt.useState(0),[f,d]=Bt.useState(l.videoUrl||""),[h,x]=Bt.useState(!1),[g,S]=Bt.useState(""),[_,v]=Bt.useState(!1),[T,w]=Bt.useState(!1);Bt.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[l.id]);const N=l.videoStages||[{step:"01",title:"CustDev & Анализ болей",desc:"Глубинные интервью с целевой аудиторией, выявление барьеров и составление CJM",duration:"Недели 1–2"},{step:"02",title:"Информационная архитектура",desc:"Картирование пользовательских сценариев и связей модулей",duration:"Недели 3–4"},{step:"03",title:"Вайрфреймы и тест гипотез",desc:"Low-Fi прототипирование и качественное тестирование на пользователях",duration:"Недели 5–6"},{step:"04",title:"Дизайн-система и токены",desc:"Разработка библиотеки компонентов, типографики и цветовой палитры",duration:"Недели 7–8"},{step:"05",title:"Интерактивный прототип & Handoff",desc:"Финальная сборка микроанимаций в Figma/Framer и передача спецификаций",duration:"Релиз MVP"}],b=Ys.findIndex(U=>U.id===l.id),y=Ys[(b+1)%Ys.length],D=()=>{navigator.clipboard.writeText(window.location.href),w(!0),setTimeout(()=>w(!1),2e3)},F=U=>{U.preventDefault(),d(g),x(!1)},C=()=>{var U,E,O,H;if(f){if(f.includes("youtube.com")||f.includes("youtu.be")){let k=f;return f.includes("watch?v=")?k=f.replace("watch?v=","embed/"):f.includes("youtu.be/")&&(k=f.replace("youtu.be/","www.youtube.com/embed/")),p.jsx("iframe",{src:k,title:l.title,className:"w-full h-full rounded-2xl",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}if(f.includes("vimeo.com")){const k=f.split("/").pop();return p.jsx("iframe",{src:`https://player.vimeo.com/video/${k}`,title:l.title,className:"w-full h-full rounded-2xl",allowFullScreen:!0})}return p.jsx("video",{src:f,controls:!0,className:"w-full h-full object-cover rounded-2xl",autoPlay:!0,muted:!0,loop:!0})}return p.jsxs("div",{className:"w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white relative overflow-hidden rounded-2xl",children:[p.jsxs("div",{className:"flex items-center justify-between z-10",children:[p.jsxs("div",{className:"flex items-center gap-2.5",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),p.jsxs("span",{className:"text-xs font-semibold uppercase tracking-wider text-zinc-300",children:["Этап разработки: ",(U=N[r])==null?void 0:U.step," • ",(E=N[r])==null?void 0:E.duration]})]}),p.jsx("span",{className:"text-xs px-3 py-1 bg-white/10 rounded-full font-medium text-zinc-300 border border-white/10",children:l.originLabel})]}),p.jsxs("div",{className:"my-auto py-8 text-center max-w-xl mx-auto z-10",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/15 mb-4 text-emerald-300 shadow-inner",children:p.jsx(bv,{className:"w-8 h-8"})}),p.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-white mb-2",children:(O=N[r])==null?void 0:O.title}),p.jsx("p",{className:"text-zinc-300 text-sm sm:text-base leading-relaxed",children:(H=N[r])==null?void 0:H.desc}),p.jsxs("div",{className:"mt-6 flex items-center justify-center gap-3",children:[p.jsx("button",{type:"button",onClick:()=>{S("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"),d("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")},className:"px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-medium transition-all",children:"Запустить демо-видео"}),p.jsxs("button",{type:"button",onClick:()=>x(!0),className:"px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-all flex items-center gap-1.5",children:[p.jsx(BM,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Вставить свое видео"})]})]})]}),p.jsxs("div",{className:"z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400",children:[p.jsx("span",{children:"Слот для видеозаписи процесса UI/UX проектирования"}),p.jsx("div",{className:"flex items-center gap-1",children:N.map((k,$)=>p.jsx("button",{type:"button",onClick:()=>c($),className:`h-1.5 rounded-full transition-all ${r===$?"w-6 bg-emerald-400":"w-2 bg-white/20 hover:bg-white/40"}`},$))})]}),p.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.4),transparent_70%)]"})]})};return p.jsxs("div",{className:"min-h-screen bg-[#FBFBFD] text-[#18181B] pb-24 animate-in fade-in duration-300",children:[p.jsx("header",{className:"sticky top-0 z-40 bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-zinc-200/80",children:p.jsxs("div",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between gap-4",children:[p.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[p.jsxs("button",{type:"button",onClick:t,className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-700 hover:text-zinc-900 font-semibold text-xs sm:text-sm transition-all",children:[p.jsx(dM,{className:"w-4 h-4"}),p.jsx("span",{children:"Все проекты"})]}),p.jsxs("div",{className:"hidden md:flex items-center gap-2 text-xs text-zinc-600",children:[p.jsx("span",{children:"Портфолио"}),p.jsx("span",{children:"/"}),p.jsx("span",{children:l.originLabel}),p.jsx("span",{children:"/"}),p.jsx("span",{className:"font-semibold text-zinc-900 truncate max-w-[200px]",children:l.title})]})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("button",{type:"button",onClick:D,className:"p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors",title:"Скопировать ссылку на страницу",children:T?p.jsx(Hp,{className:"w-4 h-4 text-emerald-600"}):p.jsx(PM,{className:"w-4 h-4"})}),p.jsxs("a",{href:"https://t.me/vaivin",target:"_blank",rel:"noopener noreferrer",className:"px-5 py-2.5 rounded-full bg-[#18181B] text-white hover:bg-zinc-800 font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-sm",children:[p.jsx("span",{children:"Обсудить кейс"}),p.jsx(vs,{className:"w-4 h-4"})]})]})]})}),p.jsxs("main",{className:"max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 space-y-14 sm:space-y-20",children:[p.jsxs("div",{className:"border-b border-zinc-200 pb-12",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[p.jsx("span",{className:"px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200",children:l.originLabel}),p.jsx("span",{className:"text-zinc-600",children:"•"}),p.jsx("span",{className:"text-xs sm:text-sm font-semibold text-zinc-700",children:l.company}),p.jsx("span",{className:"text-zinc-600",children:"•"}),p.jsx("span",{className:"text-xs sm:text-sm text-zinc-600",children:l.period}),p.jsx("span",{className:"text-zinc-600",children:"•"}),p.jsx("span",{className:"text-xs sm:text-sm text-emerald-800 font-semibold",children:l.role})]}),p.jsx("h1",{className:"font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight leading-[1.1] mb-6 max-w-5xl",children:l.title}),p.jsx("p",{className:"text-lg sm:text-2xl text-zinc-600 leading-relaxed max-w-4xl font-normal",children:l.subtitle}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-200/80",children:[p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1",children:"Ключевой результат"}),p.jsx("div",{className:"font-display font-extrabold text-2xl sm:text-3xl text-emerald-800",children:l.metrics})]}),p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1",children:"Фокус и статус"}),p.jsxs("div",{className:"text-base sm:text-lg font-bold text-zinc-900 mt-1 flex items-center gap-2",children:[l.isInProgress&&p.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-500 animate-pulse"}),p.jsx("span",{children:l.isInProgress?"В активной разработке":"Реализован"})]}),p.jsx("div",{className:"text-xs text-zinc-600 mt-0.5",children:l.originLabel})]}),p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1",children:"Ключевые теги & инструменты"}),p.jsx("div",{className:"flex flex-wrap gap-1.5 mt-2",children:l.tags.slice(0,5).map((U,E)=>p.jsx("span",{className:"px-2.5 py-0.5 bg-zinc-100 border border-zinc-200/70 text-zinc-700 text-xs font-medium rounded-full",children:U},E))})]})]}),((z=l.externalLinks)==null?void 0:z.liveSite)&&p.jsxs("div",{className:"mt-6 p-4 sm:p-5 bg-gradient-to-r from-amber-50 via-white to-amber-50/50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-amber-900",children:"Боевой сайт кафе «Белоснежка» (г. Октябрьский) • Студия ATOMA"}),p.jsx("div",{className:"text-sm font-semibold text-zinc-900 font-mono mt-0.5",children:l.externalLinks.liveSite})]})]}),p.jsxs("a",{href:l.externalLinks.liveSite,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#18181B] hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm rounded-full transition-colors shadow-sm",children:[p.jsx("span",{children:"Перейти на работающий сайт"}),p.jsx(vs,{className:"w-4 h-4"})]})]}),((L=l.externalLinks)==null?void 0:L.dprofile)&&p.jsxs("div",{className:"mt-6 p-4 sm:p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0"}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-emerald-900",children:"Официальный кейс опубликован на Dprofile"}),p.jsx("div",{className:"text-sm font-semibold text-zinc-800 font-mono mt-0.5",children:l.externalLinks.dprofile})]})]}),p.jsxs("a",{href:l.externalLinks.dprofile,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-full transition-colors shadow-sm",children:[p.jsx("span",{children:"Смотреть кейс на Dprofile"}),p.jsx(vs,{className:"w-4 h-4"})]})]})]}),p.jsxs("section",{className:"space-y-6",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-2",children:[p.jsx(bv,{className:"w-4 h-4"}),p.jsx("span",{children:"Видеодемонстрация этапов разработки"})]}),p.jsx("h2",{className:"font-display font-extrabold text-2xl sm:text-4xl text-[#18181B]",children:"Интерактивный процесс создания приложения"})]}),p.jsx("div",{className:"flex items-center gap-2",children:h?p.jsxs("form",{onSubmit:F,className:"flex items-center gap-2",children:[p.jsx("input",{type:"url",placeholder:"Вставьте ссылку на MP4 / YouTube / Loom / Vimeo",value:g,onChange:U=>S(U.target.value),className:"px-3.5 py-2 text-xs rounded-full border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 w-64 sm:w-80"}),p.jsx("button",{type:"submit",className:"px-4 py-2 bg-emerald-800 text-white rounded-full text-xs font-semibold hover:bg-emerald-700",children:"Сохранить"}),p.jsx("button",{type:"button",onClick:()=>x(!1),className:"px-3 py-2 text-zinc-600 text-xs hover:text-zinc-900",children:"Отмена"})]}):p.jsxs("button",{type:"button",onClick:()=>{S(f),x(!0)},className:"px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-xs font-semibold flex items-center gap-2 transition-colors",children:[p.jsx(CM,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:f?"Изменить ссылку на видео":"Вставить ссылку на видео"})]})})]}),p.jsx("div",{className:"w-full aspect-video min-h-[380px] sm:min-h-[520px] bg-zinc-950 rounded-3xl overflow-hidden shadow-xl border border-zinc-300/80",children:C()}),p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2",children:N.map((U,E)=>{const O=r===E;return p.jsxs("button",{type:"button",onClick:()=>c(E),className:`p-4 rounded-2xl text-left transition-all border ${O?"bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700":"bg-white/60 hover:bg-white border-zinc-200 text-zinc-600"}`,children:[p.jsxs("div",{className:"flex items-center justify-between text-xs font-bold mb-1",children:[p.jsxs("span",{className:O?"text-emerald-800":"text-zinc-600",children:["Этап ",U.step]}),p.jsx("span",{className:"text-[11px] text-zinc-600 font-normal",children:U.duration})]}),p.jsx("div",{className:`text-xs sm:text-sm font-bold ${O?"text-zinc-900":"text-zinc-700"}`,children:U.title})]},E)})})]}),p.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[p.jsxs("div",{className:"p-8 sm:p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4",children:[p.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider border border-rose-200",children:p.jsx("span",{children:"Проблема стартапа"})}),p.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-zinc-900",children:"Когнитивная перегрузка и потеря контекста"}),p.jsx("p",{className:"text-zinc-600 text-base sm:text-lg leading-relaxed",children:l.problemStatement||"Пользователи бросают до 85% купленных онлайн-курсов из-за монолитных 40-минутных форматов и нехватки ощущения прогресса в плотном графике."}),p.jsxs("ul",{className:"space-y-2.5 pt-2 text-sm sm:text-base text-zinc-700",children:[p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-rose-500 font-bold",children:"•"}),p.jsx("span",{children:"Сложно выделить 1–2 часа непрерывного времени в будние дни"})]}),p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-rose-500 font-bold",children:"•"}),p.jsx("span",{children:"Отсутствие наглядной карты связи между разрозненными терминами"})]}),p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-rose-500 font-bold",children:"•"}),p.jsx("span",{children:"Быстрое забывание материала без интервального тестирования"})]})]})]}),p.jsxs("div",{className:"p-8 sm:p-10 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-4",children:[p.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200",children:p.jsx("span",{children:"Продуктовая гипотеза"})}),p.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-zinc-900",children:"Микрообучение и ментальный граф понятий"}),p.jsx("p",{className:"text-zinc-600 text-base sm:text-lg leading-relaxed",children:l.solutionHypothesis||"Дробление сложных дисциплин на 4-минутные интерактивные сессии с визуальным графом взаимосвязи понятий увеличит недельное удержание пользователей (W1 Retention) минимум на 35%."}),p.jsxs("ul",{className:"space-y-2.5 pt-2 text-sm sm:text-base text-zinc-700",children:[p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-emerald-700 font-bold",children:"•"}),p.jsx("span",{children:"Сессии 3–5 минут с фокусным погружением в один конкретный квант"})]}),p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-emerald-700 font-bold",children:"•"}),p.jsx("span",{children:"Интерактивное древо понятий, визуализирующее прогресс освоения"})]}),p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-emerald-700 font-bold",children:"•"}),p.jsx("span",{children:"Алгоритм интервальных повторений, предотвращающий забывание"})]})]})]})]}),l.targetAudience&&p.jsxs("section",{className:"space-y-6",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800",children:[p.jsx(HM,{className:"w-4 h-4"}),p.jsx("span",{children:"CustDev и портреты пользователей"})]}),p.jsx("h2",{className:"font-display font-extrabold text-2xl sm:text-4xl text-[#18181B]",children:"Для кого мы проектировали интерфейс"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:l.targetAudience.map((U,E)=>p.jsxs("div",{className:"p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"font-display font-bold text-xl text-zinc-900",children:U.persona}),p.jsx("span",{className:"text-xs px-3 py-1 bg-zinc-100 text-zinc-700 font-semibold rounded-full border border-zinc-200",children:U.role})]}),p.jsxs("div",{className:"text-sm text-zinc-600",children:[p.jsx("span",{className:"font-semibold text-zinc-900",children:"Основная боль: "}),U.painPoint]})]},E))})]}),p.jsxs("section",{className:"space-y-6",children:[p.jsx("div",{className:"flex items-center justify-between",children:p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-2",children:[p.jsx(RM,{className:"w-4 h-4"}),p.jsx("span",{children:"Финальный интерфейс & дизайн-система"})]}),p.jsx("h2",{className:"font-display font-extrabold text-2xl sm:text-4xl text-[#18181B]",children:"Визуальное воплощение и компоненты"})]})}),p.jsx("div",{className:"h-[460px] sm:h-[580px] rounded-3xl overflow-hidden border border-zinc-300 shadow-xl bg-white",children:p.jsx(Bp,{project:l})}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs text-zinc-600 font-medium",children:"Цветовая концепция"}),p.jsx("div",{className:"text-base font-bold text-zinc-900 mt-1",children:"Non-toxic Calm Tones"}),p.jsx("div",{className:"text-xs text-zinc-600 mt-1",children:"Отсутствие кричащих кислотных оттенков, мягкий контраст для долгого чтения"})]}),p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs text-zinc-600 font-medium",children:"Типографика"}),p.jsx("div",{className:"text-base font-bold text-zinc-900 mt-1",children:"Syne + Plus Jakarta Sans"}),p.jsx("div",{className:"text-xs text-zinc-600 mt-1",children:"Скульптурные заголовки и читабельный гротеск для образовательных текстов"})]}),p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs text-zinc-600 font-medium",children:"Компонентный подход"}),p.jsx("div",{className:"text-base font-bold text-zinc-900 mt-1",children:"Figma Token Architecture"}),p.jsx("div",{className:"text-xs text-zinc-600 mt-1",children:"80+ переиспользуемых атомов, молекул и организмов для быстрого масштабирования"})]}),p.jsxs("div",{className:"p-5 bg-white border border-zinc-200 rounded-2xl shadow-sm",children:[p.jsx("div",{className:"text-xs text-zinc-600 font-medium",children:"Моушн & Микро-отклик"}),p.jsx("div",{className:"text-base font-bold text-zinc-900 mt-1",children:"Spring Physics 60 FPS"}),p.jsx("div",{className:"text-xs text-zinc-600 mt-1",children:"Тактильный отклик при завершении модуля и плавная анимация роста графа"})]})]})]}),p.jsxs("section",{className:"p-8 sm:p-12 bg-white border border-zinc-200 rounded-3xl shadow-sm space-y-8",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-2",children:[p.jsx(T_,{className:"w-4 h-4"}),p.jsx("span",{children:"Результаты и вклад в проект"})]}),p.jsx("h2",{className:"font-display font-extrabold text-2xl sm:text-4xl text-[#18181B]",children:"Что было сделано и доказанный эффект"})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"font-display font-bold text-lg text-zinc-900",children:"Ключевые достижения"}),p.jsx("ul",{className:"space-y-3",children:l.achievements.map((U,E)=>p.jsxs("li",{className:"flex items-start gap-3 text-sm sm:text-base text-zinc-700 leading-relaxed",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0"}),p.jsx("span",{children:U})]},E))})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"font-display font-bold text-lg text-zinc-900",children:"Зона ответственности ведущего дизайнера"}),p.jsx("ul",{className:"space-y-2.5",children:l.duties.map((U,E)=>p.jsxs("li",{className:"flex items-start gap-2.5 text-sm text-zinc-600 leading-relaxed",children:[p.jsx("span",{className:"text-zinc-600 font-bold",children:"•"}),p.jsx("span",{children:U})]},E))})]})]})]}),p.jsxs("section",{className:"pt-10 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-xs uppercase font-bold text-zinc-600 tracking-wider",children:"Следующая работа"}),p.jsxs("button",{type:"button",onClick:()=>i(y),className:"text-left group mt-1",children:[p.jsxs("div",{className:"font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 group-hover:text-emerald-800 transition-colors flex items-center gap-2",children:[p.jsx("span",{children:y.title}),p.jsx(E_,{className:"w-6 h-6 group-hover:translate-x-1 transition-transform"})]}),p.jsx("div",{className:"text-sm text-zinc-600",children:y.originLabel})]})]}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("button",{type:"button",onClick:t,className:"px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-sm transition-colors",children:"Вернуться ко всем проектам"}),p.jsxs("a",{href:yt.telegramPersonal,target:"_blank",rel:"noopener noreferrer",className:"px-7 py-3 rounded-full bg-[#18181B] hover:bg-zinc-800 text-white font-bold text-sm transition-colors flex items-center gap-2",children:[p.jsx("span",{children:"Написать в Telegram"}),p.jsx(vs,{className:"w-4 h-4"})]})]})]})]})]})},y_=({isOpen:l,onClose:t})=>(Bt.useEffect(()=>{const i=r=>{r.key==="Escape"&&t()};return l&&(document.body.style.overflow="hidden",window.addEventListener("keydown",i)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",i)}},[l,t]),l?p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200",children:p.jsxs("div",{className:"relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl",children:[p.jsxs("div",{className:"flex items-center justify-between pb-6 mb-8 border-b border-zinc-200/80",children:[p.jsxs("div",{className:"flex items-center gap-2.5 text-emerald-800 font-bold text-sm",children:[p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-600"}),p.jsx("span",{children:"Официальное резюме"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:()=>window.print(),className:"p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs",title:"Печать",children:p.jsx(DM,{className:"w-4 h-4"})}),p.jsx("button",{type:"button",onClick:t,className:"p-2.5 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 transition-colors shadow-2xs",children:p.jsx(kM,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-zinc-200/80",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"font-display font-extrabold text-3xl sm:text-5xl text-zinc-900 tracking-tight",children:yt.name}),p.jsxs("div",{className:"text-xl sm:text-2xl text-emerald-800 font-bold mt-2",children:[yt.title," (",yt.roleLevel,")"]}),p.jsxs("div",{className:"text-zinc-600 text-sm sm:text-base mt-3 space-y-1.5",children:[p.jsxs("div",{children:["Опыт работы: ",p.jsx("span",{className:"text-zinc-900 font-semibold",children:yt.experienceYears})]}),p.jsxs("div",{children:["Локация: ",yt.location," (",yt.workPreference,")"]}),p.jsxs("div",{children:["Ожидания по зарплате: ",yt.expectedSalary]})]})]}),p.jsxs("div",{className:"space-y-2 text-sm text-zinc-700 self-start p-5 bg-[#FBFBFD] border border-zinc-200/90 rounded-2xl",children:[p.jsxs("div",{children:["Telegram: ",p.jsx("a",{href:yt.telegramPersonal,target:"_blank",rel:"noreferrer",className:"text-emerald-800 font-bold hover:underline",children:yt.telegramPersonalHandle})]}),p.jsxs("div",{children:["Email: ",p.jsx("a",{href:`mailto:${yt.email}`,className:"hover:underline",children:yt.email})]}),p.jsxs("div",{children:["Канал: ",p.jsx("a",{href:yt.telegramChannel,target:"_blank",rel:"noreferrer",className:"hover:underline",children:yt.telegramChannelHandle})]}),p.jsxs("div",{children:["Dprofile: ",p.jsx("a",{href:yt.dprofileUrl,target:"_blank",rel:"noreferrer",className:"hover:underline",children:"myonlyregret"})]}),p.jsxs("div",{children:["Behance: ",p.jsx("a",{href:yt.behanceUrl,target:"_blank",rel:"noreferrer",className:"hover:underline",children:"exussremo"})]}),p.jsxs("div",{children:["Dribbble: ",p.jsx("a",{href:yt.dribbbleUrl,target:"_blank",rel:"noreferrer",className:"hover:underline",children:"annaatoma"})]})]})]}),p.jsxs("div",{className:"py-8 border-b border-zinc-200/80",children:[p.jsx("h2",{className:"text-xs uppercase tracking-wider text-zinc-500 font-bold mb-3",children:"О себе"}),p.jsx("p",{className:"text-zinc-700 text-base sm:text-lg leading-relaxed",children:yt.bio})]}),p.jsxs("div",{className:"py-8 border-b border-zinc-200/80 space-y-8",children:[p.jsx("h2",{className:"text-xs uppercase tracking-wider text-zinc-500 font-bold",children:"Опыт работы"}),b_.map((i,r)=>p.jsxs("div",{className:"p-6 bg-[#FBFBFD] border border-zinc-200/90 rounded-2xl space-y-4",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[p.jsxs("div",{className:"text-xl font-bold font-display text-zinc-900",children:[i.title," ",p.jsx("span",{className:"text-emerald-700",children:"/"})," ",i.company]}),p.jsxs("div",{className:"text-sm text-zinc-500",children:[i.period," (",i.type,")"]})]}),i.clients&&p.jsxs("div",{className:"text-sm text-zinc-500",children:["Клиенты: ",i.clients.join(", ")]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-emerald-800 uppercase font-bold mb-2",children:"Достижения:"}),p.jsx("ul",{className:"space-y-2 text-sm sm:text-base text-zinc-700",children:i.achievements.map((c,f)=>p.jsxs("li",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"text-emerald-700 font-bold",children:"•"}),p.jsx("span",{children:c})]},f))})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-zinc-500 uppercase font-semibold mb-1.5",children:"Обязанности:"}),p.jsx("ul",{className:"space-y-1 text-sm text-zinc-500",children:i.duties.map((c,f)=>p.jsxs("li",{className:"flex items-start gap-2",children:[p.jsx("span",{className:"text-zinc-400",children:"•"}),p.jsx("span",{children:c})]},f))})]})]},r))]}),p.jsxs("div",{className:"pt-8 grid grid-cols-1 md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"p-6 bg-[#FBFBFD] border border-zinc-200/90 rounded-2xl",children:[p.jsx("div",{className:"text-xs text-zinc-500 uppercase font-semibold mb-2",children:"Квалификация"}),p.jsx("div",{className:"text-lg font-bold font-display text-zinc-900",children:yt.qualification.title}),p.jsx("div",{className:"text-sm text-amber-800 font-bold mt-1",children:yt.qualification.honors}),p.jsxs("div",{className:"text-sm text-zinc-600 mt-1",children:[yt.qualification.school," (",yt.qualification.year,")"]})]}),p.jsxs("div",{className:"p-6 bg-[#FBFBFD] border border-zinc-200/90 rounded-2xl",children:[p.jsx("div",{className:"text-xs text-zinc-500 uppercase font-semibold mb-2",children:"Ключевой стек"}),p.jsx("p",{className:"text-sm sm:text-base text-zinc-700 leading-relaxed",children:"Figma, Miro, Framer, Design Systems, CJM, User Research, Usability Testing, Web3 & Game UI, A/B Testing, Spine 2D, Lottie."})]})]}),p.jsx("div",{className:"mt-10 pt-6 border-t border-zinc-200/80 flex justify-end",children:p.jsxs("a",{href:yt.telegramPersonal,target:"_blank",rel:"noopener noreferrer",className:"px-8 py-3.5 rounded-full bg-[#18181B] text-white font-bold text-sm flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm",children:[p.jsx(Gp,{className:"w-4 h-4"}),p.jsx("span",{children:"Написать в Telegram @vaivin"})]})})]})}):null);function bR(){const[l,t]=Bt.useState(null),[i,r]=Bt.useState(!1),c=()=>{const f=document.getElementById("works-section");f&&f.scrollIntoView({behavior:"smooth"})};return l?p.jsxs("div",{className:"min-h-screen bg-[#FBFBFD] text-[#18181B] selection:bg-emerald-100 selection:text-emerald-900 relative font-sans",children:[p.jsx(yR,{project:l,onBack:()=>{t(null),setTimeout(()=>{const f=document.getElementById("works-section");f&&f.scrollIntoView({behavior:"smooth"})},50)},onSelectProject:f=>t(f)}),p.jsx(y_,{isOpen:i,onClose:()=>r(!1)})]}):p.jsxs("div",{className:"min-h-screen bg-[#FBFBFD] text-[#18181B] selection:bg-emerald-100 selection:text-emerald-900 relative font-sans",children:[p.jsx(XM,{onOpenResume:()=>r(!0)}),p.jsxs("main",{children:[p.jsx(pR,{onOpenResume:()=>r(!0),onExploreWorks:c}),p.jsx(mR,{}),p.jsx(gR,{onSelectProject:f=>t(f)}),p.jsx(xR,{}),p.jsx(vR,{}),p.jsx(_R,{})]}),p.jsx(SR,{}),p.jsx(y_,{isOpen:i,onClose:()=>r(!1)})]})}eM.createRoot(document.getElementById("root")).render(p.jsx(Bt.StrictMode,{children:p.jsx(bR,{})}));
