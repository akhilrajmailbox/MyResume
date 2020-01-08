/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
window.Modernizr=function(t,r,s){function x(t){w.cssText=t}function z(t,r){return typeof t===r}function A(t,r){return!!~(""+t).indexOf(r)}function B(t,r){for(var u in t){var v=t[u];if(!A(v,"-")&&w[v]!==s)return"pfx"!=r||v}return!1}function C(t,r,u){for(var v in t){var y=r[t[v]];if(y!==s)return!1===u?t[v]:z(y,"function")?y.bind(u||r):y}return!1}function D(t,r,s){var u=t.charAt(0).toUpperCase()+t.slice(1),v=(t+" "+N.join(u+" ")+u).split(" ");return z(r,"string")||z(r,"undefined")?B(v,r):C(v=(t+" "+O.join(u+" ")+u).split(" "),r,s)}var u,v,y={},E=r.documentElement,S=r.createElement("modernizr"),w=S.style,F="Webkit Moz O ms",N=F.split(" "),O=F.toLowerCase().split(" "),M={},T=[],L=T.slice,P={}.hasOwnProperty;for(var U in v=z(P,"undefined")||z(P.call,"undefined")?function(t,r){return r in t&&z(t.constructor.prototype[r],"undefined")}:function(t,r){return P.call(t,r)},Function.prototype.bind||(Function.prototype.bind=function(t){var r=this;if("function"!=typeof r)throw new TypeError;var s=L.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=r.prototype;var u=new a,v=r.apply(u,s.concat(L.call(arguments)));return Object(v)===v?v:u}return r.apply(t,s.concat(L.call(arguments)))};return e}),M.csstransitions=function(){return D("transition")},M)v(M,U)&&(u=U.toLowerCase(),y[u]=M[U](),T.push((y[u]?"":"no-")+u));return y.addTest=function(t,r){if("object"==typeof t)for(var u in t)v(t,u)&&y.addTest(u,t[u]);else{if(t=t.toLowerCase(),y[t]!==s)return y;r="function"==typeof r?r():r,E.className+=" "+(r?"":"no-")+t,y[t]=r}return y},x(""),S=null,function(t,r){function l(){var t=N.elements;return"string"==typeof t?t.split(" "):t}function m(t){var r=F[t[S]];return r||(r={},w++,t[S]=w,F[w]=r),r}function n(t,s,v){return s||(s=r),u?s.createElement(t):(v||(v=m(s)),(S=v.cache[t]?v.cache[t].cloneNode():E.test(t)?(v.cache[t]=v.createElem(t)).cloneNode():v.createElem(t)).canHaveChildren&&!y.test(t)?v.frag.appendChild(S):S);var S}function q(t){t||(t=r);var v=m(t);return N.shivCSS&&!s&&!v.hasCSS&&(v.hasCSS=!!function k(t,r){var s=t.createElement("p"),u=t.getElementsByTagName("head")[0]||t.documentElement;return s.innerHTML="x<style>"+r+"</style>",u.insertBefore(s.lastChild,u.firstChild)}(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||function p(t,r){r.cache||(r.cache={},r.createElem=t.createElement,r.createFrag=t.createDocumentFragment,r.frag=r.createFrag()),t.createElement=function(s){return N.shivMethods?n(s,t,r):r.createElem(s)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,(function(t){return r.createElem(t),r.frag.createElement(t),'c("'+t+'")'}))+");return n}")(N,r.frag)}(t,v),t}var s,u,v=t.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,E=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,S="_html5shiv",w=0,F={};!function(){try{var t=r.createElement("a");t.innerHTML="<xyz></xyz>",s="hidden"in t,u=1==t.childNodes.length||function(){r.createElement("a");var t=r.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(t){s=!0,u=!0}}();var N={elements:v.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==v.shivCSS,supportsUnknownElements:u,shivMethods:!1!==v.shivMethods,type:"default",shivDocument:q,createElement:n,createDocumentFragment:function o(t,s){if(t||(t=r),u)return t.createDocumentFragment();for(var v=(s=s||m(t)).frag.cloneNode(),y=0,E=l(),S=E.length;y<S;y++)v.createElement(E[y]);return v}};t.html5=N,q(r)}(this,r),y._version="2.6.2",y._domPrefixes=O,y._cssomPrefixes=N,y.testProp=function(t){return B([t])},y.testAllProps=D,y.prefixed=function(t,r,s){return r?D(t,r,s):D(t,"pfx")},E.className=E.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+T.join(" "),y}(0,this.document),function(t,r,s){function d(t){return"[object Function]"==w.call(t)}function e(t){return"string"==typeof t}function f(){}function g(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function h(){var t=F.shift();N=1,t?t.t?E((function(){("c"==t.t?v.injectCss:v.injectJs)(t.s,0,t.a,t.x,t.e,1)}),0):(t(),h()):N=0}function i(t,s,u,y,w,O,L){function k(r){if(!U&&g(P.readyState)&&(H.r=U=1,!N&&h(),P.onload=P.onreadystatechange=null,r))for(var u in"img"!=t&&E((function(){T.removeChild(P)}),50),_[s])_[s].hasOwnProperty(u)&&_[s][u].onload()}L=L||v.errorTimeout;var P=r.createElement(t),U=0,$=0,H={t:u,s:s,e:w,a:O,x:L};1===_[s]&&($=1,_[s]=[]),"object"==t?P.data=s:(P.src=s,P.type=t),P.width=P.height="0",P.onerror=P.onload=P.onreadystatechange=function(){k.call(this,$)},F.splice(y,0,H),"img"!=t&&($||2===_[s]?(T.insertBefore(P,M?null:S),E(k,L)):_[s].push(P))}function j(t,r,s,u,v){return N=0,r=r||"j",e(t)?i("c"==r?P:L,t,r,this.i++,s,u,v):(F.splice(this.i++,0,t),1==F.length&&h()),this}function k(){var t=v;return t.loader={load:j,i:0},t}var u,v,y=r.documentElement,E=t.setTimeout,S=r.getElementsByTagName("script")[0],w={}.toString,F=[],N=0,O="MozAppearance"in y.style,M=O&&!!r.createRange().compareNode,T=M?y:S.parentNode,L=(y=t.opera&&"[object Opera]"==w.call(t.opera),y=!!r.attachEvent&&!y,O?"object":y?"script":"img"),P=y?"script":L,U=Array.isArray||function(t){return"[object Array]"==w.call(t)},$=[],_={},H={timeout:function(t,r){return r.length&&(t.timeout=r[0]),t}};(v=function(t){function g(t,r,s,u,v){var y=function b(t){t=t.split("!");var r,s,u,v=$.length,y=t.pop(),E=t.length;for(y={url:y,origUrl:y,prefixes:t},s=0;s<E;s++)u=t[s].split("="),(r=H[u.shift()])&&(y=r(y,u));for(s=0;s<v;s++)y=$[s](y);return y}(t),E=y.autoCallback;y.url.split(".").pop().split("?").shift(),y.bypass||(r&&(r=d(r)?r:r[t]||r[u]||r[t.split("/").pop().split("?")[0]]),y.instead?y.instead(t,r,s,u,v):(_[y.url]?y.noexec=!0:_[y.url]=1,s.load(y.url,y.forceCSS||!y.forceJS&&"css"==y.url.split(".").pop().split("?").shift()?"c":void 0,y.noexec,y.attrs,y.timeout),(d(r)||d(E))&&s.load((function(){k(),r&&r(y.origUrl,v,u),E&&E(y.origUrl,v,u),_[y.url]=2}))))}function h(t,r){function c(t,y){if(t){if(e(t))y||(E=function(){var t=[].slice.call(arguments);S.apply(this,t),w()}),g(t,E,r,0,v);else if(Object(t)===t)for(u in s=function(){var r,s=0;for(r in t)t.hasOwnProperty(r)&&s++;return s}(),t)t.hasOwnProperty(u)&&(!y&&!--s&&(d(E)?E=function(){var t=[].slice.call(arguments);S.apply(this,t),w()}:E[u]=function(t){return function(){var r=[].slice.call(arguments);t&&t.apply(this,r),w()}}(S[u])),g(t[u],E,r,u,v))}else!y&&w()}var s,u,v=!!t.test,y=t.load||t.both,E=t.callback||f,S=E,w=t.complete||f;c(v?t.yep:t.nope,!!y),y&&c(y)}var r,s,u=this.yepnope.loader;if(e(t))g(t,0,u,0);else if(U(t))for(r=0;r<t.length;r++)e(s=t[r])?g(s,0,u,0):U(s)?v(s):Object(s)===s&&h(s,u);else Object(t)===t&&h(t,u)}).addPrefix=function(t,r){H[t]=r},v.addFilter=function(t){$.push(t)},v.errorTimeout=1e4,null==r.readyState&&r.addEventListener&&(r.readyState="loading",r.addEventListener("DOMContentLoaded",u=function(){r.removeEventListener("DOMContentLoaded",u,0),r.readyState="complete"},0)),t.yepnope=k(),t.yepnope.executeStack=h,t.yepnope.injectJs=function(t,s,u,y,w,F){var N,O,M=r.createElement("script");y=y||v.errorTimeout;for(O in M.src=t,u)M.setAttribute(O,u[O]);s=F?h:s||f,M.onreadystatechange=M.onload=function(){!N&&g(M.readyState)&&(N=1,s(),M.onload=M.onreadystatechange=null)},E((function(){N||(N=1,s(1))}),y),w?M.onload():S.parentNode.insertBefore(M,S)},t.yepnope.injectCss=function(t,s,u,v,y,w){var F;v=r.createElement("link"),s=w?h:s||f;for(F in v.href=t,v.rel="stylesheet",v.type="text/css",u)v.setAttribute(F,u[F]);y||(S.parentNode.insertBefore(v,S),E(s,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2020-01-08T06:02:16 UTC
 * Commit:   68e7bb9ec70ff48caf9a898e795ae2397fa4b26e
 */
