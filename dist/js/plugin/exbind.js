define("exbind",[],function(require,exports){Object.prototype.forEachIn=function(a){for(var b in this)this.hasOwnProperty(b)&&a(b,this[b])};var a=function(a){return"[object Object]"==={}.toString.call(a)},b=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},c=function(a){return"[object String]"==={}.toString.call(a)},d=function(a){return"[object Function]"==={}.toString.call(a)},e=function(a){var b=String(a||"").split(",");return b.map(function(a){return a.trim()})},f=function(a){var b={};return(a||"").split("&").forEach(function(a){var c=a.indexOf("=",0);if(c>0&&c<a.length-1){var d=a.substring(0,c).trim();b[d]=a.substring(c+1,a.length).trim()}}),b},g=function(b,c,d){this.node=b,this.actArr=c,this.param=a(d)?d:null,this.isLock=!1};g.prototype.bind=function(a,b){var c=this,d=function(d){var e=0,f={stop:function(){c.isLock=!0},next:function(){c.isLock=!1,g()},param:c.param},g=function(){for(;!b[c.actArr[e]]&&e<c.actArr.length;)e++;e<c.actArr.length&&(b[c.actArr[e]].call(c.node,f,d),"load"===a?c.actArr.splice(e,1):e++,c.isLock||g())};c.isLock||g()};"load"===a?setTimeout(function(){d()},0):c.event||(c.event=!0,c.node.addEventListener(a,d,!1))};var h=function(){this.actMap={},this.eventMap={},this.init()};return h.prototype={constructor:h,register:function(a,b,e){var f=this;c(a)&&c(b)&&d(e)&&(f.eventMap[b]||(f.eventMap[b]={}),f.eventMap[b][a]||(f.eventMap[b][a]=e,f.actMap[a]&&f.actMap[a].length&&f.actMap[a].forEach(function(a){a.bind(b,f.eventMap[b])})))},registerNode:function(a,d,h){var i=this;if(d=d||e(a.getAttribute("data-act")||""),h=h||f(a.getAttribute("data-param")||""),b(d)){var j=new g(a,d,h);d.forEach(function(a){c(a)&&(i.actMap[a]||(i.actMap[a]=[]),i.actMap[a].push(j),i.eventMap.forEachIn(function(b,c){c[a]&&j.bind(b,c)}))})}a.removeAttribute("data-act"),a.removeAttribute("data-param")},scan:function(a){var b=this;if(a=a||document.body,1===a.nodeType){var c=a.querySelectorAll("[data-act]");a.hasAttribute("data-act")&&b.registerNode(a),[].slice.call(c).forEach(function(a){b.registerNode(a)})}},init:function(){var a=this;a.scan();var b=[],c=null;document.addEventListener("DOMNodeInserted",function(d){b.push(d.target),clearTimeout(c),c=setTimeout(function(){var c=[];b.forEach(function(a){1==a.nodeType&&c.indexOf(a)<0&&c.push(a)}),b.length=0,c.forEach(function(b){a.scan(b)})},100)})}},new h});