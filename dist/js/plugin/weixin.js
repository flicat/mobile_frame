define("weixin",["ajax","jweixin"],function(require,exports){var a=require("ajax"),b=require("jweixin"),c=0,d=function(){var e={url:String(location.href).split("#")[0]};a({type:"post",url:Config.url+"wap/wechat_api/get_jssdk_config",data:e,dataType:"json",success:function(a){a&&200==a.code&&(b.error(function(a){c++<2?d():console.log(JSON.stringify(a,null,"  "))}),b.config({debug:!1,appId:"wx1f628d662cfea925",timestamp:a.data.timestamp,nonceStr:a.data.nonceStr,signature:a.data.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}),b.showOptionMenu(),b.showMenuItems({menuList:["menuItem:exposeArticle","menuItem:setFont","menuItem:dayMode","menuItem:nightMode","menuItem:refresh","menuItem:profile","menuItem:addContact","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:favorite","menuItem:share:facebook","menuItem:share:QZone","menuItem:editTag","menuItem:delete","menuItem:copyUrl","menuItem:originPage","menuItem:readMode","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"]}))}})};return d(),b});