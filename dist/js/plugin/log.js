define("log",[],function(require,exports){var a,b,c,d,e,f=!0,g=function(){b.style.display="block",d.style.display="block",e.style.display="block",c.innerHTML="&times;",c.style.left="auto",c.style.right=0,f=!1},h=function(){b.style.display="none",d.style.display="none",e.style.display="none",c.style.left=0,c.style.right="auto",c.innerHTML="&gt;",f=!0},i=function(){d=document.createElement("input"),d.type="text",e=document.createElement("button"),e.type="button",e.innerText="执行",b=document.createElement("textarea"),c=document.createElement("i"),a=document.createElement("div"),c.innerHTML="&times;",b.style.cssText='border: 0;margin: 0;padding: 0;resize: none;background: #000;color: #fff;width: 100%;height: 5rem;color: #fff;font: 400 0.75rem/1rem "sans-serif";vertical-align: top;',d.style.cssText="box-sizing: border-box;border: 1px solid #333;width: 100%;height: 2rem;line-height: 2rem;padding: 0;margin: 0;display: block;background: #f0f0f0;color: #666;font-size: 1rem;",e.style.cssText="width: 4rem;height: 2rem;text-align: center;line-height: 2rem;color: #666;position: absolute;right: 0;bottom: 0;font-size: 1rem;padding: 0;",c.style.cssText='position: absolute;right: 0; top: 100%;display: block;width: 1.2rem;height: 1.2rem;background-color: #fff;box-shadow: 0 0 2px 2px #eee inset;color: #000;font: 400 0.75rem/1.2rem "sans-serif";text-align: center;',a.style.cssText="position: absolute;z-index: 9999;width: 100%;left: 0;font-size: 0;top: 0",a.appendChild(b),a.appendChild(d),a.appendChild(e),a.appendChild(c),document.body.appendChild(a),f=!1,e.addEventListener("click",function(a){var b=d.value;m(new Function("return "+b.replace(/console\.\w+/,"print_log")).call(window))},!1),c.addEventListener("click",function(a){f?g():h()},!1)},j=function(a,b){return Object.prototype.toString.call(b)==="[object "+a+"]"},k=function(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])},l=function(a){if(j("String",a)||j("Number",a)||j("Boolean",a))return String(a);if(j("Array",a))return"["+a.join(",")+"]";if(a instanceof Element)return a.outerHTML;var b={};return k(a,function(a,c){j("String",c)||j("Number",c)||j("Boolean",c)?b[a]=String(c):j("Array",c)?b[a]="["+c.join(",")+"]":c instanceof Element?b[a]=c.outerHTML:b[a]=String(c)}),JSON.stringify(b,null,"    ")},m=function(a){var c="";[].slice.call(arguments).forEach(function(a){c+=l(a)+"\n"}),b.value=c+b.value+"\n"};return i(),h(),window.print_log=m,m});