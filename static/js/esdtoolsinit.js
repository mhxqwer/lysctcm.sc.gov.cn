// try{
// 	var esdtemp = document.createElement("style");
// 	esdtemp.setAttribute("type", "text/css");
// 	esdtemp.id="esdToolsStyle";
// 	esdtemp.textContent=".esd-tools {background: transparent;font-size:16px;color: #000000;left: 0;padding: 10px;position: absolute;top: -4.2rem;-webkit-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;z-index: 7001;}.esd-tools:focus {background: white;left: 0;outline: 0;position: absolute;top: 0;-webkit-transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;}"
// 	document.getElementsByTagName("head")[0].appendChild(esdtemp);
	
// 	var esdTipLink1 = document.createElement("a");
// 	esdTipLink1.setAttribute("href","javascript:void(0);");
// 	esdTipLink1.setAttribute("aria-label","按回车键在新窗口打开无障碍说明页面,按Alt加波浪键打开导盲模式。");
// 	esdTipLink1.appendChild(document.createTextNode("按回车键在新窗口打开无障碍说明页面,按Alt+~键打开导盲模式。"));
// 	esdTipLink1.tabIndex="7";
// 	esdTipLink1.id="esdTipLink1";
// 	esdTipLink1.className = "esd-tools";
// 	document.getElementsByTagName("BODY")[0].appendChild(esdTipLink1);
// 	esdTipLink1.onclick = function(){
// 		window.open("https://www.yunmd.net/toolbar/allToolvarV5/help.html","_blank");
// 	}
	
// 	var esdTipLink2 = document.createElement("a");
// 	esdTipLink2.setAttribute("href","javascript:void(0);");
// 	esdTipLink2.appendChild(document.createTextNode(""));
// 	esdTipLink2.tabIndex="8";
// 	esdTipLink2.id="esdTipLink2";
// 	esdTipLink2.target="_self"
// 	esdTipLink2.style.setProperty("max-width","0px","important");
// 	esdTipLink2.style.setProperty("float","left","important");
// 	esdTipLink2.style.setProperty("border","0px","important");
// 	esdTipLink2.style.setProperty("padding","0px","important");
// 	esdTipLink2.style.setProperty("margin","0px","important");
// 	esdTipLink2.style.setProperty("width","0px","important");
// 	esdTipLink2.style.setProperty("height","0px","important");
// 	esdTipLink2.style.setProperty("overflow","hidden","important");
// 	esdTipLink2.style.setProperty("display","block","important");
// 	esdTipLink2.style.setProperty("left","0","important");
// 	esdTipLink2.style.setProperty("top","0","important");
// 	esdTipLink2.style.setProperty("position","absolute","important");
// 	//esdTipLink2.className = "esdNavLink";
// 	document.getElementsByTagName("BODY")[0].appendChild(esdTipLink2);
// 	esdTipLink2.innerText = "跳转到主要内容区域";
// 	if(navigator.userAgent.toLowerCase().indexOf("msie 8.0")>-1||navigator.userAgent.toLowerCase().indexOf("msie 7.0")>-1){
	    
// 	}else{
// 		if(window.location.href=="https://www.sc.gov.cn/10462/index.shtml"||window.location.href=="https://www.sc.gov.cn/"){
// 			var navOutNode = document.querySelectorAll(".head")[0];
// 			navOutNode.nextElementSibling.className = navOutNode.nextElementSibling.className + " esdUnCount";
// 			esdTipLink2.onclick = function(){
// 				navOutNode.nextElementSibling.setAttribute("role","link")
// 				navOutNode.nextElementSibling.setAttribute("tabindex","-1")
// 				navOutNode.nextElementSibling.setAttribute("aria-label","已跳转到主要内容区域");
// 				navOutNode.nextElementSibling.focus();
// 			}
// 		}else if(window.location.href=="https://www.sc.gov.cn/10462/wza2012/zfld/zfld.shtml"){
// 			var mainNode = document.querySelectorAll("#container")[0];
// 			mainNode.className = mainNode.className + " esdUnCount";
// 			esdTipLink2.onclick = function(){
// 				mainNode.setAttribute("role","link")
// 				mainNode.setAttribute("tabindex","-1")
// 				mainNode.setAttribute("aria-label","已跳转到主要内容区域");
// 				mainNode.focus();
// 			}
// 		}else if(window.location.href == "https://www.sc.gov.cn/10462/wza2012/jgzn/jgzn.shtml"){
// 			var mainNode = document.querySelectorAll(".container")[0];
// 			mainNode.className = mainNode.className + " esdUnCount";
// 			esdTipLink2.onclick = function(){
// 				mainNode.setAttribute("role","link")
// 				mainNode.setAttribute("tabindex","-1")
// 				mainNode.setAttribute("aria-label","已跳转到主要内容区域");
// 				mainNode.focus();
// 			}
// 		}else if(window.location.href=="https://www.sc.gov.cn/10462/wza2012/zwxx/zwxx.shtml"||window.location.href=="https://www.sc.gov.cn/10462/c106773/zjsc.shtml"){
// 			var mainNode = document.querySelectorAll(".content")[0];
// 			mainNode.className = mainNode.className + " esdUnCount";
// 			esdTipLink2.onclick = function(){
// 				mainNode.setAttribute("role","link")
// 				mainNode.setAttribute("tabindex","-1")
// 				mainNode.setAttribute("aria-label","已跳转到主要内容区域");
// 				mainNode.focus();
// 			}
// 		}else if(window.location.href=="https://www.sc.gov.cn/10462/wza2012/hdjl/hdjl.shtml"){
// 			var mainNode = document.querySelectorAll("div.container.hdjl_zxft")[0];
// 			mainNode.className = mainNode.className + " esdUnCount";
// 			esdTipLink2.onclick = function(){
// 				mainNode.setAttribute("role","link")
// 				mainNode.setAttribute("tabindex","-1")
// 				mainNode.setAttribute("aria-label","已跳转到主要内容区域");
// 				mainNode.focus();
// 			}
// 		}else{
// 			var mainNode = document.querySelectorAll("#container")[0];
// 			mainNode.className = mainNode.className + " esdUnCount";
// 			esdTipLink2.onclick = function(){
// 				mainNode.setAttribute("role","link")
// 				mainNode.setAttribute("tabindex","-1")
// 				mainNode.setAttribute("aria-label","已跳转到主要内容区域");
// 				mainNode.focus();
// 			}
// 		}
// 	}
	
// }catch(e){
// 	console.log(e);
// }


var EsdToolbarInit={};

EsdToolbarInit.path = "https://www.mangren.com/sc.gov.cnV5/";
EsdToolbarInit.toolbarOpenStatus = null;

EsdToolbarInit.loadScript = function(func){
	var esd_jquery_js = document.createElement('script'); 
	esd_jquery_js.setAttribute('type', 'text/javascript'); 
	esd_jquery_js.setAttribute('src', EsdToolbarInit.path+'jquery.js'); 
	esd_jquery_js.setAttribute('charset', 'utf-8'); 
	esd_jquery_js.onload = function(){
		var esd_base64_js = document.createElement('script'); 
		esd_base64_js.setAttribute('type', 'text/javascript'); 
		esd_base64_js.setAttribute('src', EsdToolbarInit.path+'base64.js'); 
		esd_base64_js.setAttribute('charset', 'utf-8'); 
		esd_base64_js.onload = function(){
			var esd_soundmanager2_js = document.createElement('script'); 
			esd_soundmanager2_js.setAttribute('type', 'text/javascript'); 
			esd_soundmanager2_js.setAttribute('src', EsdToolbarInit.path+'soundmanager2.js'); 
			esd_soundmanager2_js.setAttribute('charset', 'utf-8'); 
			esd_soundmanager2_js.onload = function(){
				var esd_pinyin_js = document.createElement('script'); 
				esd_pinyin_js.setAttribute('type', 'text/javascript'); 
				esd_pinyin_js.setAttribute('src', EsdToolbarInit.path+'pinyin.js'); 
				esd_pinyin_js.setAttribute('charset', 'utf-8'); 
				esd_pinyin_js.onload = function(){
					var esd_handleInnerIframe_js = document.createElement('script'); 
					esd_handleInnerIframe_js.setAttribute('type', 'text/javascript'); 
					esd_handleInnerIframe_js.setAttribute('src', EsdToolbarInit.path+'handleInnerIframe.js'); 
					esd_handleInnerIframe_js.setAttribute('charset', 'utf-8'); 
					esd_handleInnerIframe_js.onload = function(){
						var esd_toolbar_js = document.createElement('script'); 
						esd_toolbar_js.setAttribute('type', 'text/javascript'); 
						esd_toolbar_js.setAttribute('src', EsdToolbarInit.path+'toolbar.js'); 
						esd_toolbar_js.setAttribute('charset', 'utf-8'); 
						esd_toolbar_js.setAttribute('id', 'ESDWebAppToolbar'); 
						document.head.appendChild(esd_toolbar_js);
						esd_toolbar_js.onload = function(){
							if(func!=null){
								func();
							}
						};
					};	
					document.head.appendChild(esd_handleInnerIframe_js);	
				};
				document.head.appendChild(esd_pinyin_js);	
			};
			document.head.appendChild(esd_soundmanager2_js);	
		};	
		document.head.appendChild(esd_base64_js);
	};	
	document.head.appendChild(esd_jquery_js);
};

EsdToolbarInit.getCookie = function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) 
            return c.substring(nameEQ.length, c.length);
    }
    return null;
};
EsdToolbarInit.setCookie = function(name, value, days){
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

EsdToolbarInit.init = function(){
	EsdToolbarInit.toolbarOpenStatus = EsdToolbarInit.getCookie("wzaIsOn");
	if(EsdToolbarInit.toolbarOpenStatus=="true"||EsdToolbarInit.toolbarOpenStatus==true){
		EsdToolbarInit.loadScript(null);
	}else{
		document.getElementById("toolbarSwitch").onclick=function(e)
                {
			EsdToolbarInit.loadScript(null);
			EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
			document.getElementById("toolbarSwitch").onclick=null;
			document.getElementById("toolbarSwitch").onkeydown=null
			// document.getElementById("toolbarElderlySwitch").onclick=null;
		}
		document.getElementById("toolbarSwitch").onkeydown=function(e){
			if (e.keyCode == 13) {
				EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
				EsdToolbarInit.setCookie("readScreen", true, 10);
				EsdToolbarInit.setCookie("speakVolume", 0, 10);
				EsdToolbarInit.loadScript(function(){
					EsdToolbar.readScreen.init();
					jq_t("#toolbar").hide();
					jq_t("#toolbarHtml").show("fast",function(){
						jq_t("#toolbarPage2").show();
						if(EsdToolbar.statusmagnifier == "on"){
							EsdToolbar.magnifier.toolbarMagnifier();
						}
					});
					jq_t("body").css("padding-top", "98px");
					EsdToolbar.rebuild();
					EsdToolbar.isOpen = true;
				});
				document.getElementById("toolbarSwitch").onclick=null;
				document.getElementById("toolbarSwitch").onkeydown=null
				// document.getElementById("toolbarElderlySwitch").onclick=null;
				return false;
			}
		}
		// document.getElementById("toolbarElderlySwitch").onclick=function(){
		// 	EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
		// 	EsdToolbarInit.setCookie("elderlyMode", true, 10);
		// 	EsdToolbarInit.loadScript(function(){
		// 		EsdToolbar.readScreen.init();
		// 		jq_t("#toolbar").hide();
		// 		jq_t("#toolbarHtml").show("fast",function(){
		// 			jq_t("#toolbarElderly").show();
		// 			if(EsdToolbar.statusmagnifier == "on"){
		// 				EsdToolbar.magnifier.toolbarMagnifier();
		// 			}
		// 		});
		// 		jq_t("body").css("padding-top", "80px");
		// 		EsdToolbar.rebuild();
		// 		EsdToolbar.isOpen = true;
		// 	});
		// 	document.getElementById("toolbarSwitch").onclick=null;
		// 	document.getElementById("toolbarSwitch").onkeydown=null
		// 	document.getElementById("toolbarElderlySwitch").onclick=null;
		// 	return false;
		// }
		document.onkeydown = function(e){
			//if (e.ctrlKey&&e.altKey) {
			if (e.altKey) {
				if(typeof(EsdToolbar)=="undefined"){
					if (e.keyCode == 192) {  //alt+~
						if(navigator.userAgent.toLowerCase().indexOf("msie 8.0")>-1||navigator.userAgent.toLowerCase().indexOf("msie 7.0")>-1){
							alert("当前浏览器版本过低,辅助工具无法正常使用!\r\n请使用更高版本的浏览器!");
							return false;
						}
						EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
						EsdToolbarInit.setCookie("readScreen", true, 10);
						EsdToolbarInit.setCookie("speakVolume", 0, 10);
						EsdToolbarInit.loadScript(function(){
							EsdToolbar.readScreen.init();
							jq_t("#toolbar").hide();
							jq_t("#toolbarHtml").show("fast",function(){
								jq_t("#toolbarPage2").show();
								//if(EsdToolbar.statusmagnifier == "on"){
								//	EsdToolbar.magnifier.toolbarMagnifier();
								//}
							});
							jq_t("body").css("padding-top", "98px");
							EsdToolbar.rebuild();
							EsdToolbar.isOpen = true;
						});
					}
				}else if(EsdToolbar.isOpen==false){
					if (e.keyCode == 192) {  //alt+~
						EsdToolbar.openKeydown();
					}
				}
			}
		}
	}
}
EsdToolbarInit.init();

//引用路由文件
//var esd_route_js = document.createElement('script'); 
//esd_route_js.setAttribute('type', 'text/javascript'); 
//esd_route_js.setAttribute('src', '########'); 
//esd_route_js.setAttribute('charset', 'utf-8'); 
//document.head.appendChild(esd_route_js);


