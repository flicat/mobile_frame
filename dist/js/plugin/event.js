define("event",[],function(require,exports){var a=["tap","longTap","swipe","swipeEnd","swipeLeft","swipeRight","swipeUp","swipeDown"],b=function(a){return"[object Number]"===Object.prototype.toString.call(a)},c=function(a,b){var c=Math.atan(Math.abs(b/a))/Math.PI*180;return a<=0&&b<=0?c=180-c:a<=0&&b>=0?c+=180:a>=0&&b>=0&&(c=360-c),c},d=function(){return Object.defineProperties({},{length:{get:function(){return Object.keys(this).length},set:function(a){return!1},enumerable:!1},keys:{value:function(a){return this[Object.keys(this)[a]]},writable:!1,enumerable:!1},empty:{value:function(){for(var a in this)this.hasOwnProperty(a)&&delete this[a]},writable:!1,enumerable:!1}})},e=function(a){a.__bind_custom_event__=!0;var e={target:null,startStamp:0,endStamp:0,startApart:0,endApart:0,startAngle:0,endAngle:0,startX:d(),startY:d(),endX:d(),endY:d(),diffX:d(),diffY:d()},f=function(d){switch(e.target=d.target,d.type){case"touchstart":if(e.startX.empty(),e.startY.empty(),e.diffX.empty(),e.diffY.empty(),[].slice.call(d.touches).forEach(function(a,b){var c=a.identifier||b;e.startX[c]=e.endX[c]=a.clientX,e.startY[c]=e.endY[c]=a.clientY}),e.startStamp=e.endStamp=Date.now(),d.touches.length>1){var f=e.startX.keys(1)-e.startX.keys(0),g=e.startY.keys(1)-e.startY.keys(0);e.startApart=Math.sqrt(f*f+g*g),e.startAngle=c(f,g)}break;case"touchmove":if([].slice.call(d.touches).forEach(function(a,c){var d=a.identifier||c;e.endX[d]=a.clientX,e.endY[d]=a.clientY,b(e.startX[d])&&(e.diffX[d]=e.endX[d]-e.startX[d]),b(e.startY[d])&&(e.diffY[d]=e.endY[d]-e.startY[d])}),d.touches.length>1){var h=e.endX.keys(1)-e.endX.keys(0),i=e.endY.keys(1)-e.endY.keys(0);e.endApart=Math.sqrt(h*h+i*i),e.endAngle=c(h,i)}a.trigger("swipe",e,d);break;case"touchcancel":case"touchend":e.endStamp=Date.now(),e.endX.empty(),e.endY.empty(),[].slice.call(d.changedTouches).forEach(function(b,c){var f=b.identifier||c,g=e.diffX[f],h=e.diffY[f];Math.abs(g)>0||Math.abs(h)>0?(Math.abs(g)<Math.abs(h)&&h<0?a.trigger("swipeUp",e,d):Math.abs(g)<Math.abs(h)&&h>0?a.trigger("swipeDown",e,d):Math.abs(g)>Math.abs(h)&&g<0?a.trigger("swipeLeft",e,d):Math.abs(g)>Math.abs(h)&&g>0&&a.trigger("swipeRight",e,d),a.trigger("swipeEnd",e,d)):(a.trigger("tap",e,d),e.endStamp-e.startStamp>500&&a.trigger("longTap",e,d))})}};a.addEventListener("touchstart",f,!1),a.addEventListener("touchmove",f,!1),a.addEventListener("touchend",f,!1),a.addEventListener("touchcancel",f,!1)};Element.prototype.trigger=function(a,b,c){var d=document.createEvent("HTMLEvents");if(d.initEvent(a,!0,!0),d.data=b||{},d.eventName=a,d.target=this,c&&c instanceof Event){var e=d.preventDefault,f=d.stopPropagation;d.preventDefault=function(){c.preventDefault(),e.apply(d,arguments)},d.stopPropagation=function(){c.stopPropagation(),f.apply(d,arguments)}}return this.dispatchEvent(d),this};var f=Element.prototype.addEventListener,g=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector;Element.prototype.addEventListener=Element.prototype.on=function(b){var c,d,h=this,i=[].slice.call(arguments),j=String(b).split("."),k=j[1]||"all";if(b=j[0],"[object String]"==={}.toString.call(i[1])&&(c=i[1]),d=c&&"[object Function]"==={}.toString.call(i[2])?i[2]:"[object Function]"==={}.toString.call(i[1])?i[1]:function(){},a.indexOf(b)>-1&&!this.__bind_custom_event__&&e(h),h.__custom_event_live__||(h.__custom_event_live__={}),h.__custom_event_live__[k]||(h.__custom_event_live__[k]={}),h.__custom_event_live__[k][b]||(h.__custom_event_live__[k][b]=[]),c){var l=function(e){var f=e.target;a.indexOf(b)>-1&&f===h&&e.data&&e.data.target&&(f=e.data.target);for(var i=g.call(f,c);!i&&f.parentNode&&f!==h;)f=f.parentNode,i=g.call(f,c);i&&d.call(f,e)};h.__custom_event_live__[k][b].push(l),f.call(h,b,l,!1)}else h.__custom_event_live__[k][b].push(d),f.call(h,b,d,!1);return h},Element.prototype.off=function(a,b){var c=this,d=String(a).split("."),e=d[1]||"all";return a=d[0],"[object Function]"==={}.toString.call(b)?c.removeEventListener(a,b,!1):c.__custom_event_live__&&c.__custom_event_live__[e]&&c.__custom_event_live__[e][a]&&c.__custom_event_live__[e][a].length&&c.__custom_event_live__[e][a].forEach(function(b){c.removeEventListener(a,b,!1)}),c},Element.prototype.one=function(a,b){var c=this,d=function(e){c.removeEventListener(a,d,!1),b.call(this,e)};return c.addEventListener(a,d,!1),c}});