/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
/*!
Waypoints Inview Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function noop(){}var t=window.Waypoint;function Inview(e){this.options=t.Adapter.extend({},Inview.defaults,e),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}Inview.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,n=t[this.axis].length;e<n;e++){var i=t[this.axis][e];this.createWaypoint(i)}},Inview.prototype.createWaypoint=function(e){var n=this;this.waypoints.push(new t({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(e){n.options[t[e]].call(n,e)}}(e),offset:e.offset,horizontal:this.options.horizontal}))},Inview.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;t<e;t++)this.waypoints[t].destroy();this.waypoints=[]},Inview.prototype.disable=function(){for(var t=0,e=this.waypoints.length;t<e;t++)this.waypoints[t].disable()},Inview.prototype.enable=function(){for(var t=0,e=this.waypoints.length;t<e;t++)this.waypoints[t].enable()},Inview.defaults={context:window,enabled:!0,enter:noop,entered:noop,exit:noop,exited:noop},t.Inview=Inview}();
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b4
 * Compiled: 2020-01-05T09:50:39 UTC
 * Commit:   d4c3668bda078b5f24c96172868285e415f4985b
 */
