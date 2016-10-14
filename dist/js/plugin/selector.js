define("selector",[],function(require,exports){var a=function(a){this.param=a,this.is_ready=!1,this.defaultValue=a.defaultValue||[],this.row=null,this.cells=[],this.init()};return a.prototype={constructor:a,get_result:function(){var a=this,b=a.param.data,c=a.defaultValue,d=[],e=0,f=function(a){if(c[e]>-1){var b=a[c[e]];d.push(b);for(var g in b)b.hasOwnProperty(g)&&Array.isArray(b[g])&&(e++,f(b[g]))}};return f(b),d},get_position:function(){var a=this;clearTimeout(a.result_timer),a.result_timer=setTimeout(function(){var b=a.defaultValue;b.length=0,a.cells.forEach(function(c){var d=Math.round(c.scrollTop/a.pxHeight);b.push(d)}),a.render(),a.set_position()},0)},set_position:function(){var a=this,b=a.defaultValue;a.cells.forEach(function(c,d){var e=0,f=c.children;b&&b[d]>-1&&(e=b[d]),e>=f.length-3&&(e=f.length-3),c.scrollTop=a.pxHeight*e,c.active_child&&c.active_child.classList.remove("active"),c.active_child=c.children[e+2],c.active_child.classList.add("active")})},render:function(){var a=this,b=a.param,c=b.data,d=b.display||"name",e=0,f=a.defaultValue,g=function(b){var c=a.cells[e];c||(c=document.createElement("div"),c.className="selector-cell",a.cells.push(c),a.row.appendChild(c));var h,i="<span>&nbsp;</span><span>&nbsp;</span>";h=f&&f[e]>-1&&b[f[e]]?b[f[e]]:b[0],b.forEach(function(a){i+="<span>"+a[d]+"</span>"}),i+="<span>&nbsp;</span><span>&nbsp;</span>",c.innerHTML=i;for(var j in h)h.hasOwnProperty(j)&&Array.isArray(h[j])&&(e++,g(h[j]))};g(c)},show:function(){var a=this;if(a.wrap.style.display="block",!a.is_ready){if(a.render(),!a.pxHeight){var b=a.cells[0];a.pxHeight=b.scrollHeight/b.children.length}a.set_position(),a.cells.forEach(function(b){var c=null,d=!1,e=!1;b.style.width=100/a.cells.length+"%",b.addEventListener("scroll",function(){e=!0,clearTimeout(c),c=setTimeout(function(){e=!1,!d&&a.get_position()},100)});var f=function(b){switch(b.type){case"touchstart":d=!0;break;case"touchcancel":case"touchend":d=!1,!e&&a.get_position()}};b.addEventListener("touchstart",f,!1),b.addEventListener("touchend",f,!1),b.addEventListener("touchcancel",f,!1)})}0==a.defaultValue.length&&a.get_position()},hide:function(){this.wrap.style.display="none"},init:function(){var a=this,b=a.param;if(b&&b.data){var c=document.createElement("div");c.className="popup-selector "+(b.className||"");var d='<div class="selector-content"><div class="selector-bar"><a href="javascript:;" class="btn-cancel">关闭</a><a href="javascript:;" class="btn-confirm">完成</a></div>';b.title&&b.title.length&&(d+='<div class="selector-title">',b.title.forEach(function(a){d+="<span>"+a+"</span>"}),d+="</div>"),d+='<div class="selector-current"></div><div class="selector-row"></div></div>',c.innerHTML=d,a.wrap=c,document.body.appendChild(c),a.row=c.querySelector(".selector-row"),c.querySelector(".btn-confirm").addEventListener("click",function(){a.hide(),b.confirm&&b.confirm(a.get_result())}),c.querySelector(".btn-cancel").addEventListener("click",function(){a.hide(),b.cancel&&b.cancel()})}}},a});