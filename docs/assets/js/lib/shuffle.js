/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Shuffle=e()}(this,(function(){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(){}E.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function listener(){n.off(t,listener),e.apply(i,arguments)}return listener._=e,this.on(t,listener,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,s=i.length;n<s;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],s=[];if(n&&e)for(var o=0,r=n.length;o<r;o++)n[o].fn!==e&&n[o].fn._!==e&&s.push(n[o]);return s.length?i[t]=s:delete i[t],this}};var t=E,e=E;t.TinyEmitter=e;var i="undefined"!=typeof Element?Element.prototype:{},n=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector,s=function match(t,e){if(!t||1!==t.nodeType)return!1;if(n)return n.call(t,e);for(var i=t.parentNode.querySelectorAll(e),s=0;s<i.length;s++)if(i[s]==t)return!0;return!1};var o=function throttle(t,e){var i,n,s,o,r=0;return function throttled(){i=this,n=arguments;var t=new Date-r;return o||(t>=e?call():o=setTimeout(call,e-t)),s};function call(){o=0,r=+new Date,s=t.apply(i,n),i=null,n=null}};function noop(){}function getNumber(t){return parseFloat(t)||0}var r=function(){function Point(t,e){_classCallCheck(this,Point),this.x=getNumber(t),this.y=getNumber(e)}return _createClass(Point,null,[{key:"equals",value:function equals(t,e){return t.x===e.x&&t.y===e.y}}]),Point}(),l=function(){function Rect(t,e,i,n,s){_classCallCheck(this,Rect),this.id=s,this.left=t,this.top=e,this.width=i,this.height=n}return _createClass(Rect,null,[{key:"intersects",value:function intersects(t,e){return t.left<e.left+e.width&&e.left<t.left+t.width&&t.top<e.top+e.height&&e.top<t.top+t.height}}]),Rect}(),a={BASE:"shuffle",SHUFFLE_ITEM:"shuffle-item",VISIBLE:"shuffle-item--visible",HIDDEN:"shuffle-item--hidden"},u=0,h=function(){function ShuffleItem(t){_classCallCheck(this,ShuffleItem),u+=1,this.id=u,this.element=t,this.isVisible=!0,this.isHidden=!1}return _createClass(ShuffleItem,[{key:"show",value:function show(){this.isVisible=!0,this.element.classList.remove(a.HIDDEN),this.element.classList.add(a.VISIBLE),this.element.removeAttribute("aria-hidden")}},{key:"hide",value:function hide(){this.isVisible=!1,this.element.classList.remove(a.VISIBLE),this.element.classList.add(a.HIDDEN),this.element.setAttribute("aria-hidden",!0)}},{key:"init",value:function init(){this.addClasses([a.SHUFFLE_ITEM,a.VISIBLE]),this.applyCss(ShuffleItem.Css.INITIAL),this.scale=ShuffleItem.Scale.VISIBLE,this.point=new r}},{key:"addClasses",value:function addClasses(t){var e=this;t.forEach((function(t){e.element.classList.add(t)}))}},{key:"removeClasses",value:function removeClasses(t){var e=this;t.forEach((function(t){e.element.classList.remove(t)}))}},{key:"applyCss",value:function applyCss(t){var e=this;Object.keys(t).forEach((function(i){e.element.style[i]=t[i]}))}},{key:"dispose",value:function dispose(){this.removeClasses([a.HIDDEN,a.VISIBLE,a.SHUFFLE_ITEM]),this.element.removeAttribute("style"),this.element=null}}]),ShuffleItem}();h.Css={INITIAL:{position:"absolute",top:0,left:0,visibility:"visible",willChange:"transform"},VISIBLE:{before:{opacity:1,visibility:"visible"},after:{transitionDelay:""}},HIDDEN:{before:{opacity:0},after:{visibility:"hidden",transitionDelay:""}}},h.Scale={VISIBLE:1,HIDDEN:.001};var f=null,testComputedSize=function(){if(null!==f)return f;var t=document.body||document.documentElement,e=document.createElement("div");return e.style.cssText="width:10px;padding:2px;box-sizing:border-box;",t.appendChild(e),f="10px"===window.getComputedStyle(e,null).width,t.removeChild(e),f};function getNumberStyle(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.getComputedStyle(t,null),n=getNumber(i[e]);return testComputedSize()||"width"!==e?testComputedSize()||"height"!==e||(n+=getNumber(i.paddingTop)+getNumber(i.paddingBottom)+getNumber(i.borderTopWidth)+getNumber(i.borderBottomWidth)):n+=getNumber(i.paddingLeft)+getNumber(i.paddingRight)+getNumber(i.borderLeftWidth)+getNumber(i.borderRightWidth),n}var c={reverse:!1,by:null,compare:null,randomize:!1,key:"element"};function sorter(t,e){var i=Object.assign({},c,e),n=Array.from(t),s=!1;return t.length?i.randomize?function randomize(t){for(var e=t.length;e;){e-=1;var i=Math.floor(Math.random()*(e+1)),n=t[i];t[i]=t[e],t[e]=n}return t}(t):("function"==typeof i.by?t.sort((function(t,e){if(s)return 0;var n=i.by(t[i.key]),o=i.by(e[i.key]);return void 0===n&&void 0===o?(s=!0,0):n<o||"sortFirst"===n||"sortLast"===o?-1:n>o||"sortLast"===n||"sortFirst"===o?1:0})):"function"==typeof i.compare&&t.sort(i.compare),s?n:(i.reverse&&t.reverse(),t)):[]}var d={},m=0;function cancelTransitionEnd(t){return!!d[t]&&(d[t].element.removeEventListener("transitionend",d[t].listener),d[t]=null,!0)}function onTransitionEnd(t,e){var i=function uniqueId(){return"transitionend"+(m+=1)}(),n=function listener(t){t.currentTarget===t.target&&(cancelTransitionEnd(i),e(t))};return t.addEventListener("transitionend",n),d[i]={element:t,listener:n},i}function arrayMax(t){return Math.max.apply(Math,t)}function getColumnSpan(t,e,i,n){var s=t/e;return Math.abs(Math.round(s)-s)<n&&(s=Math.round(s)),Math.min(Math.ceil(s),i)}function getAvailablePositions(t,e,i){if(1===e)return t;for(var n=[],s=0;s<=i-e;s++)n.push(arrayMax(t.slice(s,s+e)));return n}function getShortColumn(t,e){for(var i=function arrayMin(t){return Math.min.apply(Math,t)}(t),n=0,s=t.length;n<s;n++)if(t[n]>=i-e&&t[n]<=i+e)return n;return 0}function getCenteredPositions(t,e){var i={};t.forEach((function(t){i[t.top]?i[t.top].push(t):i[t.top]=[t]}));var n=[],s=[],o=[];return Object.keys(i).forEach((function(t){var r=i[t];s.push(r);var a,u=r[r.length-1],h=u.left+u.width,f=Math.round((e-h)/2),c=r,d=!1;if(f>0){var m=[];(d=r.every((function(t){var e=new l(t.left+f,t.top,t.width,t.height,t.id),i=!n.some((function(t){return l.intersects(e,t)}));return m.push(e),i})))&&(c=m)}if(!d&&r.some((function(t){return n.some((function(e){var i=l.intersects(t,e);return i&&(a=e),i}))}))){var p=o.findIndex((function(t){return t.includes(a)}));o.splice(p,1,s[p])}n=n.concat(c),o.push(c)})),[].concat.apply([],o).sort((function(t,e){return t.id-e.id})).map((function(t){return new r(t.left,t.top)}))}function arrayUnique(t){return Array.from(new Set(t))}var p=0,y=function(t){function Shuffle(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,Shuffle),(e=_possibleConstructorReturn(this,_getPrototypeOf(Shuffle).call(this))).options=Object.assign({},Shuffle.options,i),e.options.delimeter&&(e.options.delimiter=e.options.delimeter),e.lastSort={},e.group=Shuffle.ALL_ITEMS,e.lastFilter=Shuffle.ALL_ITEMS,e.isEnabled=!0,e.isDestroyed=!1,e.isInitialized=!1,e._transitions=[],e.isTransitioning=!1,e._queue=[];var n=e._getElementOption(t);if(!n)throw new TypeError("Shuffle needs to be initialized with an element.");return e.element=n,e.id="shuffle_"+p,p+=1,e._init(),e.isInitialized=!0,e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Shuffle,t),_createClass(Shuffle,[{key:"_init",value:function _init(){if(this.items=this._getItems(),this.options.sizer=this._getElementOption(this.options.sizer),this.element.classList.add(Shuffle.Classes.BASE),this._initItems(this.items),this._onResize=this._getResizeFunction(),window.addEventListener("resize",this._onResize),"complete"!==document.readyState){var t=this.layout.bind(this);window.addEventListener("load",(function onLoad(){window.removeEventListener("load",onLoad),t()}))}var e=window.getComputedStyle(this.element,null),i=Shuffle.getSize(this.element).width;this._validateStyles(e),this._setColumns(i),this.filter(this.options.group,this.options.initialSort),this.element.offsetWidth,this.setItemTransitions(this.items),this.element.style.transition="height ".concat(this.options.speed,"ms ").concat(this.options.easing)}},{key:"_getResizeFunction",value:function _getResizeFunction(){var t=this._handleResize.bind(this);return this.options.throttle?this.options.throttle(t,this.options.throttleTime):t}},{key:"_getElementOption",value:function _getElementOption(t){return"string"==typeof t?this.element.querySelector(t):t&&t.nodeType&&1===t.nodeType?t:t&&t.jquery?t[0]:null}},{key:"_validateStyles",value:function _validateStyles(t){"static"===t.position&&(this.element.style.position="relative"),"hidden"!==t.overflow&&(this.element.style.overflow="hidden")}},{key:"_filter",value:function _filter(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastFilter,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.items,i=this._getFilteredSets(t,e);return this._toggleFilterClasses(i),this.lastFilter=t,"string"==typeof t&&(this.group=t),i}},{key:"_getFilteredSets",value:function _getFilteredSets(t,e){var i=this,n=[],s=[];return t===Shuffle.ALL_ITEMS?n=e:e.forEach((function(e){i._doesPassFilter(t,e.element)?n.push(e):s.push(e)})),{visible:n,hidden:s}}},{key:"_doesPassFilter",value:function _doesPassFilter(t,e){if("function"==typeof t)return t.call(e,e,this);var i=e.getAttribute("data-"+Shuffle.FILTER_ATTRIBUTE_KEY),n=this.options.delimiter?i.split(this.options.delimiter):JSON.parse(i);function testCategory(t){return n.includes(t)}return Array.isArray(t)?this.options.filterMode===Shuffle.FilterMode.ANY?t.some(testCategory):t.every(testCategory):n.includes(t)}},{key:"_toggleFilterClasses",value:function _toggleFilterClasses(t){var e=t.visible,i=t.hidden;e.forEach((function(t){t.show()})),i.forEach((function(t){t.hide()}))}},{key:"_initItems",value:function _initItems(t){t.forEach((function(t){t.init()}))}},{key:"_disposeItems",value:function _disposeItems(t){t.forEach((function(t){t.dispose()}))}},{key:"_updateItemCount",value:function _updateItemCount(){this.visibleItems=this._getFilteredItems().length}},{key:"setItemTransitions",value:function setItemTransitions(t){var e=this.options,i=e.speed,n=e.easing,s=this.options.useTransforms?["transform"]:["top","left"],o=Object.keys(h.Css.HIDDEN.before).map((function(t){return function hyphenate(t){return t.replace(/([A-Z])/g,(function(t,e){return"-".concat(e.toLowerCase())}))}(t)})),r=s.concat(o).join();t.forEach((function(t){t.element.style.transitionDuration=i+"ms",t.element.style.transitionTimingFunction=n,t.element.style.transitionProperty=r}))}},{key:"_getItems",value:function _getItems(){var t=this;return Array.from(this.element.children).filter((function(e){return s(e,t.options.itemSelector)})).map((function(t){return new h(t)}))}},{key:"_mergeNewItems",value:function _mergeNewItems(t){var e=Array.from(this.element.children);return sorter(this.items.concat(t),{by:function by(t){return e.indexOf(t)}})}},{key:"_getFilteredItems",value:function _getFilteredItems(){return this.items.filter((function(t){return t.isVisible}))}},{key:"_getConcealedItems",value:function _getConcealedItems(){return this.items.filter((function(t){return!t.isVisible}))}},{key:"_getColumnSize",value:function _getColumnSize(t,e){var i;return 0===(i="function"==typeof this.options.columnWidth?this.options.columnWidth(t):this.options.sizer?Shuffle.getSize(this.options.sizer).width:this.options.columnWidth?this.options.columnWidth:this.items.length>0?Shuffle.getSize(this.items[0].element,!0).width:t)&&(i=t),i+e}},{key:"_getGutterSize",value:function _getGutterSize(t){return"function"==typeof this.options.gutterWidth?this.options.gutterWidth(t):this.options.sizer?getNumberStyle(this.options.sizer,"marginLeft"):this.options.gutterWidth}},{key:"_setColumns",value:function _setColumns(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Shuffle.getSize(this.element).width,e=this._getGutterSize(t),i=this._getColumnSize(t,e),n=(t+e)/i;Math.abs(Math.round(n)-n)<this.options.columnThreshold&&(n=Math.round(n)),this.cols=Math.max(Math.floor(n||0),1),this.containerWidth=t,this.colWidth=i}},{key:"_setContainerSize",value:function _setContainerSize(){this.element.style.height=this._getContainerSize()+"px"}},{key:"_getContainerSize",value:function _getContainerSize(){return arrayMax(this.positions)}},{key:"_getStaggerAmount",value:function _getStaggerAmount(t){return Math.min(t*this.options.staggerAmount,this.options.staggerAmountMax)}},{key:"_dispatch",value:function _dispatch(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.isDestroyed||(e.shuffle=this,this.emit(t,e))}},{key:"_resetCols",value:function _resetCols(){var t=this.cols;for(this.positions=[];t;)t-=1,this.positions.push(0)}},{key:"_layout",value:function _layout(t){var e=this,i=this._getNextPositions(t),n=0;t.forEach((function(t,s){function callback(){t.applyCss(h.Css.VISIBLE.after)}if(r.equals(t.point,i[s])&&!t.isHidden)return t.applyCss(h.Css.VISIBLE.before),void callback();t.point=i[s],t.scale=h.Scale.VISIBLE,t.isHidden=!1;var o=e.getStylesForTransition(t,h.Css.VISIBLE.before);o.transitionDelay=e._getStaggerAmount(n)+"ms",e._queue.push({item:t,styles:o,callback:callback}),n+=1}))}},{key:"_getNextPositions",value:function _getNextPositions(t){var e=this;if(this.options.isCentered){var i=t.map((function(t,i){var n=Shuffle.getSize(t.element,!0),s=e._getItemPosition(n);return new l(s.x,s.y,n.width,n.height,i)}));return this.getTransformedPositions(i,this.containerWidth)}return t.map((function(t){return e._getItemPosition(Shuffle.getSize(t.element,!0))}))}},{key:"_getItemPosition",value:function _getItemPosition(t){return function getItemPosition(t){for(var e=t.itemSize,i=t.positions,n=t.gridSize,s=t.total,o=t.threshold,l=t.buffer,a=getColumnSpan(e.width,n,s,o),u=getAvailablePositions(i,a,s),h=getShortColumn(u,l),f=new r(n*h,u[h]),c=u[h]+e.height,d=0;d<a;d++)i[h+d]=c;return f}({itemSize:t,positions:this.positions,gridSize:this.colWidth,total:this.cols,threshold:this.options.columnThreshold,buffer:this.options.buffer})}},{key:"getTransformedPositions",value:function getTransformedPositions(t,e){return getCenteredPositions(t,e)}},{key:"_shrink",value:function _shrink(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._getConcealedItems(),i=0;e.forEach((function(e){function callback(){e.applyCss(h.Css.HIDDEN.after)}if(e.isHidden)return e.applyCss(h.Css.HIDDEN.before),void callback();e.scale=h.Scale.HIDDEN,e.isHidden=!0;var n=t.getStylesForTransition(e,h.Css.HIDDEN.before);n.transitionDelay=t._getStaggerAmount(i)+"ms",t._queue.push({item:e,styles:n,callback:callback}),i+=1}))}},{key:"_handleResize",value:function _handleResize(){this.isEnabled&&!this.isDestroyed&&this.update()}},{key:"getStylesForTransition",value:function getStylesForTransition(t,e){var i=Object.assign({},e);if(this.options.useTransforms){var n=this.options.roundTransforms?Math.round(t.point.x):t.point.x,s=this.options.roundTransforms?Math.round(t.point.y):t.point.y;i.transform="translate(".concat(n,"px, ").concat(s,"px) scale(").concat(t.scale,")")}else i.left=t.point.x+"px",i.top=t.point.y+"px";return i}},{key:"_whenTransitionDone",value:function _whenTransitionDone(t,e,i){var n=onTransitionEnd(t,(function(t){e(),i(null,t)}));this._transitions.push(n)}},{key:"_getTransitionFunction",value:function _getTransitionFunction(t){var e=this;return function(i){t.item.applyCss(t.styles),e._whenTransitionDone(t.item.element,t.callback,i)}}},{key:"_processQueue",value:function _processQueue(){this.isTransitioning&&this._cancelMovement();var t=this.options.speed>0,e=this._queue.length>0;e&&t&&this.isInitialized?this._startTransitions(this._queue):e?(this._styleImmediately(this._queue),this._dispatch(Shuffle.EventType.LAYOUT)):this._dispatch(Shuffle.EventType.LAYOUT),this._queue.length=0}},{key:"_startTransitions",value:function _startTransitions(t){var e=this;this.isTransitioning=!0,function parallel(t,e,i){i||("function"==typeof e?(i=e,e=null):i=noop);var n=t&&t.length;if(!n)return i(null,[]);var s=!1,o=new Array(n);function maybeDone(t){return function(e,r){if(!s){if(e)return i(e,o),void(s=!0);o[t]=r,--n||i(null,o)}}}t.forEach(e?function(t,i){t.call(e,maybeDone(i))}:function(t,e){t(maybeDone(e))})}(t.map((function(t){return e._getTransitionFunction(t)})),this._movementFinished.bind(this))}},{key:"_cancelMovement",value:function _cancelMovement(){this._transitions.forEach(cancelTransitionEnd),this._transitions.length=0,this.isTransitioning=!1}},{key:"_styleImmediately",value:function _styleImmediately(t){if(t.length){var e=t.map((function(t){return t.item.element}));Shuffle._skipTransitions(e,(function(){t.forEach((function(t){t.item.applyCss(t.styles),t.callback()}))}))}}},{key:"_movementFinished",value:function _movementFinished(){this._transitions.length=0,this.isTransitioning=!1,this._dispatch(Shuffle.EventType.LAYOUT)}},{key:"filter",value:function filter(t,e){this.isEnabled&&((!t||t&&0===t.length)&&(t=Shuffle.ALL_ITEMS),this._filter(t),this._shrink(),this._updateItemCount(),this.sort(e))}},{key:"sort",value:function sort(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastSort;if(this.isEnabled){this._resetCols();var e=sorter(this._getFilteredItems(),t);this._layout(e),this._processQueue(),this._setContainerSize(),this.lastSort=t}}},{key:"update",value:function update(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEnabled&&(t||this._setColumns(),this.sort())}},{key:"layout",value:function layout(){this.update(!0)}},{key:"add",value:function add(t){var e=this,i=arrayUnique(t).map((function(t){return new h(t)}));this._initItems(i),this._resetCols();var n=sorter(this._mergeNewItems(i),this.lastSort),s=this._filter(this.lastFilter,n),o=function isNewItem(t){return i.includes(t)},r=function applyHiddenState(t){t.scale=h.Scale.HIDDEN,t.isHidden=!0,t.applyCss(h.Css.HIDDEN.before),t.applyCss(h.Css.HIDDEN.after)},l=this._getNextPositions(s.visible);s.visible.forEach((function(t,i){o(t)&&(t.point=l[i],r(t),t.applyCss(e.getStylesForTransition(t,{})))})),s.hidden.forEach((function(t){o(t)&&r(t)})),this.element.offsetWidth,this.setItemTransitions(i),this.items=this._mergeNewItems(i),this.filter(this.lastFilter)}},{key:"disable",value:function disable(){this.isEnabled=!1}},{key:"enable",value:function enable(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isEnabled=!0,t&&this.update()}},{key:"remove",value:function remove(t){var e=this;if(t.length){var i=arrayUnique(t),n=i.map((function(t){return e.getItemByElement(t)})).filter((function(t){return!!t}));this._toggleFilterClasses({visible:[],hidden:n}),this._shrink(n),this.sort(),this.items=this.items.filter((function(t){return!n.includes(t)})),this._updateItemCount(),this.once(Shuffle.EventType.LAYOUT,(function handleLayout(){e._disposeItems(n),i.forEach((function(t){t.parentNode.removeChild(t)})),e._dispatch(Shuffle.EventType.REMOVED,{collection:i})}))}}},{key:"getItemByElement",value:function getItemByElement(t){return this.items.find((function(e){return e.element===t}))}},{key:"resetItems",value:function resetItems(){var t=this;this._disposeItems(this.items),this.isInitialized=!1,this.items=this._getItems(),this._initItems(this.items),this.once(Shuffle.EventType.LAYOUT,(function(){t.setItemTransitions(t.items),t.isInitialized=!0})),this.filter(this.lastFilter)}},{key:"destroy",value:function destroy(){this._cancelMovement(),window.removeEventListener("resize",this._onResize),this.element.classList.remove("shuffle"),this.element.removeAttribute("style"),this._disposeItems(this.items),this.items.length=0,this._transitions.length=0,this.options.sizer=null,this.element=null,this.isDestroyed=!0,this.isEnabled=!1}}],[{key:"getSize",value:function getSize(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=window.getComputedStyle(t,null),n=getNumberStyle(t,"width",i),s=getNumberStyle(t,"height",i);if(e){var o=getNumberStyle(t,"marginLeft",i),r=getNumberStyle(t,"marginRight",i),l=getNumberStyle(t,"marginTop",i),a=getNumberStyle(t,"marginBottom",i);n+=o+r,s+=l+a}return{width:n,height:s}}},{key:"_skipTransitions",value:function _skipTransitions(t,e){var i=t.map((function(t){var e=t.style,i=e.transitionDuration,n=e.transitionDelay;return e.transitionDuration="0ms",e.transitionDelay="0ms",{duration:i,delay:n}}));e(),t[0].offsetWidth,t.forEach((function(t,e){t.style.transitionDuration=i[e].duration,t.style.transitionDelay=i[e].delay}))}}]),Shuffle}(t);return y.ShuffleItem=h,y.ALL_ITEMS="all",y.FILTER_ATTRIBUTE_KEY="groups",y.EventType={LAYOUT:"shuffle:layout",REMOVED:"shuffle:removed"},y.Classes=a,y.FilterMode={ANY:"any",ALL:"all"},y.options={group:y.ALL_ITEMS,speed:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)",itemSelector:"*",sizer:null,gutterWidth:0,columnWidth:0,delimiter:null,buffer:0,columnThreshold:.01,initialSort:null,throttle:o,throttleTime:300,staggerAmount:15,staggerAmountMax:150,useTransforms:!0,filterMode:y.FilterMode.ANY,isCentered:!1,roundTransforms:!0},y.Point=r,y.Rect=l,y.__sorter=sorter,y.__getColumnSpan=getColumnSpan,y.__getAvailablePositions=getAvailablePositions,y.__getShortColumn=getShortColumn,y.__getCenteredPositions=getCenteredPositions,y}));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2020-02-04T14:52:04 UTC
 * Commit:   c0b60b06ccb95f1217f01c61de1ba8da9154dbee
 */
