/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(e,t){var n,a,r=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,i=0,l={};function getElements(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function getExpandoData(e){var t=l[e._html5shiv];return t||(t={},i++,e._html5shiv=i,l[i]=t),t}function createElement(e,n,r){return n||(n=t),a?n.createElement(e):(r||(r=getExpandoData(n)),!(i=r.cache[e]?r.cache[e].cloneNode():c.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||o.test(e)||i.tagUrn?i:r.frag.appendChild(i));var i}function shivDocument(e){e||(e=t);var r=getExpandoData(e);return!m.shivCSS||n||r.hasCSS||(r.hasCSS=!!function addStyleSheet(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),a||function shivMethods(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return m.shivMethods?createElement(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+getElements().join().replace(/[\w\-:]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(m,t.frag)}(e,r),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,a=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,a=!0}}();var m={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==r.shivCSS,supportsUnknownElements:a,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:function createDocumentFragment(e,n){if(e||(e=t),a)return e.createDocumentFragment();for(var r=(n=n||getExpandoData(e)).frag.cloneNode(),o=0,c=getElements(),i=c.length;o<i;o++)r.createElement(c[o]);return r},addElements:function addElements(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,shivDocument(t)}};e.html5=m,shivDocument(t),"object"==typeof module&&module.exports&&(module.exports=m)}("undefined"!=typeof window?window:this,document);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2020-02-04T14:52:04 UTC
 * Commit:   c0b60b06ccb95f1217f01c61de1ba8da9154dbee
 */
