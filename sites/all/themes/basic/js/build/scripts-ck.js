!function($,e,t,n,o){e.behaviors.basic={attach:function(e,o){function i(){var e=$(t).width(),n=$(t).height()-200;$(".owl-theme .owl-item img").each(function(){aspectRatio=$(this).width()/$(this).height();var e=parseInt(n*aspectRatio);console.log(aspectRatio,e),$(this).width(e).height(n).css("margin-left","-"+e/2+"px")})}var a=!1;$(t).ready(function(){$("ul#primary a").each(function(){$(this).attr("name")&&$(this).append('<span class="subname">'+$(this).attr("name")+"</span>")}),$("map area").on("click",function(){for(var e=$(this).attr("title"),t=e.split(" "),n=0;n<t.length;n++)classHour=parseInt(t[n]),$(".hour-"+classHour).length>0&&($(".clock-element.come-in").not($(".hour-"+classHour)).removeClass("come-in").addClass("come-out"),$(".hour-"+classHour).removeClass("come-out").addClass("come-in"));return!1})}),$(t).load(function(){i(),$(".portfolio .views-row, .block-title, .view-header, .webform-component").each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("come-in")}),$(".clock-element").each(function(){var e=$(this).find(".time").text(),t=parseInt(e.substr(0,2)),n=parseInt(e.substr(3,2));if(t>=12)var o=(30*(t-12+n/60)-90)*Math.PI/180;else var o=(30*(t+n/60)-90)*Math.PI/180;radius=$(".view-intro").outerHeight()/2,tmpTop=radius+radius*Math.sin(o)-$(this).outerHeight()/2,t>=6&&12>t||t>=18&&24>t?($(this).addClass("align-right"),tmpLeft=radius+radius*Math.cos(o)-$(this).outerWidth()):($(this).addClass("align-left"),tmpLeft=radius+radius*Math.cos(o)),$(this).addClass("hour-"+t),$(this).css({top:tmpTop,left:tmpLeft})})}),$(t).resize(function(){i()}),$(t).scroll(function(e){if($(".portfolio .views-row, .block-title, .view-header, .webform-component").each(function(e,t){var t=$(t);t.visible(!0)&&t.addClass("come-in")}),$(".view-intro").visible(!0)&&!a){var t=$(".view-intro .clock-element");t.each(function(e){var n=$(this);setTimeout(function(){n.addClass("come-in")},1e3*e),t.length==e+1&&setTimeout(function(){$(".clock-element").addClass("come-out"),$(".clock-element").removeClass("come-in")},2e3*e)}),a=!0}}),$(n).ready(function(){$(".map .pointer").magnificPopup({type:"inline",midClick:!0}),$(".views-row a").magnificPopup({type:"ajax",callbacks:{parseAjax:function(e){console.log($(e.data).find("article.node"));var t=$('<div class="white-popup"></div>').append($(e.data).find("article"));e.data=t},ajaxContentAdded:function(){}}}),$(n).on("click",".mfp-content .pager a",function(e){var t=$(this).parents("article");$.get($(this).attr("href"),function(e){t.html($(e).find("article").html())}),e.preventDefault()}),$("a[href*=#]:not([href=#])").not(".pointer").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})})}}}(jQuery,Drupal,this,this.document),function($){$.fn.visible=function(e){var t=$(this),n=$(window),o=n.scrollTop(),i=o+n.height(),a=t.offset().top,s=a+t.height(),r=e===!0?s:a,l=e===!0?a:s;return i>=l&&r>=o}}(jQuery),function(e){var t="Close",n="BeforeClose",o="AfterClose",i="BeforeAppend",a="MarkupParse",s="Open",r="Change",l="mfp",c="."+l,p="mfp-ready",u="mfp-removing",d="mfp-prevent-close",f,m=function(){},h=!!window.jQuery,g,v=e(window),C,w,b,y,k,x=function(e,t){f.ev.on(l+e+c,t)},I=function(t,n,o,i){var a=document.createElement("div");return a.className="mfp-"+t,o&&(a.innerHTML=o),i?n&&n.appendChild(a):(a=e(a),n&&a.appendTo(n)),a},T=function(t,n){f.ev.triggerHandler(l+t,n),f.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),f.st.callbacks[t]&&f.st.callbacks[t].apply(f,e.isArray(n)?n:[n]))},P=function(t){return t===k&&f.currTemplate.closeBtn||(f.currTemplate.closeBtn=e(f.st.closeMarkup.replace("%title%",f.st.tClose)),k=t),f.currTemplate.closeBtn},O=function(){e.magnificPopup.instance||(f=new m,f.init(),e.magnificPopup.instance=f)},_=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};m.prototype={constructor:m,init:function(){var t=navigator.appVersion;f.isIE7=-1!==t.indexOf("MSIE 7."),f.isIE8=-1!==t.indexOf("MSIE 8."),f.isLowIE=f.isIE7||f.isIE8,f.isAndroid=/android/gi.test(t),f.isIOS=/iphone|ipad|ipod/gi.test(t),f.supportsTransition=_(),f.probablyMobile=f.isAndroid||f.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),w=e(document),f.popupsCache={}},open:function(t){C||(C=e(document.body));var n;if(t.isObj===!1){f.items=t.items.toArray(),f.index=0;var o=t.items,i;for(n=0;n<o.length;n++)if(i=o[n],i.parsed&&(i=i.el[0]),i===t.el[0]){f.index=n;break}}else f.items=e.isArray(t.items)?t.items:[t.items],f.index=t.index||0;if(f.isOpen)return void f.updateItemHTML();f.types=[],y="",f.ev=t.mainEl&&t.mainEl.length?t.mainEl.eq(0):w,t.key?(f.popupsCache[t.key]||(f.popupsCache[t.key]={}),f.currTemplate=f.popupsCache[t.key]):f.currTemplate={},f.st=e.extend(!0,{},e.magnificPopup.defaults,t),f.fixedContentPos="auto"===f.st.fixedContentPos?!f.probablyMobile:f.st.fixedContentPos,f.st.modal&&(f.st.closeOnContentClick=!1,f.st.closeOnBgClick=!1,f.st.showCloseBtn=!1,f.st.enableEscapeKey=!1),f.bgOverlay||(f.bgOverlay=I("bg").on("click"+c,function(){f.close()}),f.wrap=I("wrap").attr("tabindex",-1).on("click"+c,function(e){f._checkIfClose(e.target)&&f.close()}),f.container=I("container",f.wrap)),f.contentContainer=I("content"),f.st.preloader&&(f.preloader=I("preloader",f.container,f.st.tLoading));var r=e.magnificPopup.modules;for(n=0;n<r.length;n++){var l=r[n];l=l.charAt(0).toUpperCase()+l.slice(1),f["init"+l].call(f)}T("BeforeOpen"),f.st.showCloseBtn&&(f.st.closeBtnInside?(x(a,function(e,t,n,o){n.close_replaceWith=P(o.type)}),y+=" mfp-close-btn-in"):f.wrap.append(P())),f.st.alignTop&&(y+=" mfp-align-top"),f.wrap.css(f.fixedContentPos?{overflow:f.st.overflowY,overflowX:"hidden",overflowY:f.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(f.st.fixedBgPos===!1||"auto"===f.st.fixedBgPos&&!f.fixedContentPos)&&f.bgOverlay.css({height:w.height(),position:"absolute"}),f.st.enableEscapeKey&&w.on("keyup"+c,function(e){27===e.keyCode&&f.close()}),v.on("resize"+c,function(){f.updateSize()}),f.st.closeOnContentClick||(y+=" mfp-auto-cursor"),y&&f.wrap.addClass(y);var u=f.wH=v.height(),d={};if(f.fixedContentPos&&f._hasScrollBar(u)){var m=f._getScrollbarSize();m&&(d.marginRight=m)}f.fixedContentPos&&(f.isIE7?e("body, html").css("overflow","hidden"):d.overflow="hidden");var h=f.st.mainClass;return f.isIE7&&(h+=" mfp-ie7"),h&&f._addClassToMFP(h),f.updateItemHTML(),T("BuildControls"),e("html").css(d),f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo||C),f._lastFocusedEl=document.activeElement,setTimeout(function(){f.content?(f._addClassToMFP(p),f._setFocus()):f.bgOverlay.addClass(p),w.on("focusin"+c,f._onFocusIn)},16),f.isOpen=!0,f.updateSize(u),T(s),t},close:function(){f.isOpen&&(T(n),f.isOpen=!1,f.st.removalDelay&&!f.isLowIE&&f.supportsTransition?(f._addClassToMFP(u),setTimeout(function(){f._close()},f.st.removalDelay)):f._close())},_close:function(){T(t);var n=u+" "+p+" ";if(f.bgOverlay.detach(),f.wrap.detach(),f.container.empty(),f.st.mainClass&&(n+=f.st.mainClass+" "),f._removeClassFromMFP(n),f.fixedContentPos){var i={marginRight:""};f.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}w.off("keyup"+c+" focusin"+c),f.ev.off(c),f.wrap.attr("class","mfp-wrap").removeAttr("style"),f.bgOverlay.attr("class","mfp-bg"),f.container.attr("class","mfp-container"),f.st.showCloseBtn&&(!f.st.closeBtnInside||f.currTemplate[f.currItem.type]===!0)&&f.currTemplate.closeBtn&&f.currTemplate.closeBtn.detach(),f._lastFocusedEl&&e(f._lastFocusedEl).focus(),f.currItem=null,f.content=null,f.currTemplate=null,f.prevHeight=0,T(o)},updateSize:function(e){if(f.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;f.wrap.css("height",n),f.wH=n}else f.wH=e||v.height();f.fixedContentPos||f.wrap.css("height",f.wH),T("Resize")},updateItemHTML:function(){var t=f.items[f.index];f.contentContainer.detach(),f.content&&f.content.detach(),t.parsed||(t=f.parseEl(f.index));var n=t.type;if(T("BeforeChange",[f.currItem?f.currItem.type:"",n]),f.currItem=t,!f.currTemplate[n]){var o=f.st[n]?f.st[n].markup:!1;T("FirstMarkupParse",o),f.currTemplate[n]=o?e(o):!0}b&&b!==t.type&&f.container.removeClass("mfp-"+b+"-holder");var i=f["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,f.currTemplate[n]);f.appendContent(i,n),t.preloaded=!0,T(r,t),b=t.type,f.container.prepend(f.contentContainer),T("AfterChange")},appendContent:function(e,t){f.content=e,e?f.st.showCloseBtn&&f.st.closeBtnInside&&f.currTemplate[t]===!0?f.content.find(".mfp-close").length||f.content.append(P()):f.content=e:f.content="",T(i),f.container.addClass("mfp-"+t+"-holder"),f.contentContainer.append(f.content)},parseEl:function(t){var n=f.items[t],o;if(n.tagName?n={el:e(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var i=f.types,a=0;a<i.length;a++)if(n.el.hasClass("mfp-"+i[a])){o=i[a];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||f.st.type||"inline",n.index=t,n.parsed=!0,f.items[t]=n,T("ElementParse",n),f.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,f._openClick(n,e,t)};t||(t={});var o="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(o).on(o,n)):(t.isObj=!1,t.delegate?e.off(o).on(o,t.delegate,n):(t.items=e,e.off(o).on(o,n)))},_openClick:function(t,n,o){var i=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(i||2!==t.which&&!t.ctrlKey&&!t.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(f))return!0}else if(v.width()<a)return!0;t.type&&(t.preventDefault(),f.isOpen&&t.stopPropagation()),o.el=e(t.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),f.open(o)}},updateStatus:function(e,t){if(f.preloader){g!==e&&f.container.removeClass("mfp-s-"+g),!t&&"loading"===e&&(t=f.st.tLoading);var n={status:e,text:t};T("UpdateStatus",n),e=n.status,t=n.text,f.preloader.html(t),f.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),f.container.addClass("mfp-s-"+e),g=e}},_checkIfClose:function(t){if(!e(t).hasClass(d)){var n=f.st.closeOnContentClick,o=f.st.closeOnBgClick;if(n&&o)return!0;if(!f.content||e(t).hasClass("mfp-close")||f.preloader&&t===f.preloader[0])return!0;if(t===f.content[0]||e.contains(f.content[0],t)){if(n)return!0}else if(o&&e.contains(document,t))return!0;return!1}},_addClassToMFP:function(e){f.bgOverlay.addClass(e),f.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),f.wrap.removeClass(e)},_hasScrollBar:function(e){return(f.isIE7?w.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(f.st.focus?f.content.find(f.st.focus).eq(0):f.wrap).focus()},_onFocusIn:function(t){return t.target===f.wrap[0]||e.contains(f.wrap[0],t.target)?void 0:(f._setFocus(),!1)},_parseMarkup:function(t,n,o){var i;o.data&&(n=e.extend(o.data,n)),T(a,[t,n,o]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(i=e.split("_"),i.length>1){var o=t.find(c+"-"+i[0]);if(o.length>0){var a=i[1];"replaceWith"===a?o[0]!==n[0]&&o.replaceWith(n):"img"===a?o.is("img")?o.attr("src",n):o.replaceWith('<img src="'+n+'" class="'+o.attr("class")+'" />'):o.attr(i[1],n)}}else t.find(c+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===f.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),f.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f.scrollbarSize}},e.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(t,n){return O(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){O();var n=e(this);if("string"==typeof t)if("open"===t){var o,i=h?n.data("magnificPopup"):n[0].magnificPopup,a=parseInt(arguments[1],10)||0;i.items?o=i.items[a]:(o=n,i.delegate&&(o=o.find(i.delegate)),o=o.eq(a)),f._openClick({mfpEl:o},n,i)}else f.isOpen&&f[t].apply(f,Array.prototype.slice.call(arguments,1));else t=e.extend(!0,{},t),h?n.data("magnificPopup",t):n[0].magnificPopup=t,f.addGroup(n,t);return n};var E="inline",M,B,S,A=function(){S&&(B.after(S.addClass(M)).detach(),S=null)};e.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){f.types.push(E),x(t+"."+E,function(){A()})},getInline:function(t,n){if(A(),t.src){var o=f.st.inline,i=e(t.src);if(i.length){var a=i[0].parentNode;a&&a.tagName&&(B||(M=o.hiddenClass,B=I(M),M="mfp-"+M),S=i.after(B).detach().removeClass(M)),f.updateStatus("ready")}else f.updateStatus("error",o.tNotFound),i=e("<div>");return t.inlineElement=i,i}return f.updateStatus("ready"),f._parseMarkup(n,{},t),n}}});var j="ajax",z,F=function(){z&&C.removeClass(z)},H=function(){F(),f.req&&f.req.abort()};e.magnificPopup.registerModule(j,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){f.types.push(j),z=f.st.ajax.cursor,x(t+"."+j,H),x("BeforeChange."+j,H)},getAjax:function(t){z&&C.addClass(z),f.updateStatus("loading");var n=e.extend({url:t.src,success:function(n,o,i){var a={data:n,xhr:i};T("ParseAjax",a),f.appendContent(e(a.data),j),t.finished=!0,F(),f._setFocus(),setTimeout(function(){f.wrap.addClass(p)},16),f.updateStatus("ready"),T("AjaxContentAdded")},error:function(){F(),t.finished=t.loadError=!0,f.updateStatus("error",f.st.ajax.tError.replace("%url%",t.src))}},f.st.ajax.settings);return f.req=e.ajax(n),""}}});var L,W=function(){return void 0===L&&(L=void 0!==document.createElement("p").style.MozTransform),L};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=f.st.zoom,o=".zoom",i;if(e.enabled&&f.supportsTransition){var a=e.duration,s=function(t){var n=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+e.duration/1e3+"s "+e.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return i["-webkit-"+a]=i["-moz-"+a]=i["-o-"+a]=i[a]=o,n.css(i),n},r=function(){f.content.css("visibility","visible")},l,c;x("BuildControls"+o,function(){if(f._allowZoom()){if(clearTimeout(l),f.content.css("visibility","hidden"),i=f._getItemToZoom(),!i)return void r();c=s(i),c.css(f._getOffset()),f.wrap.append(c),l=setTimeout(function(){c.css(f._getOffset(!0)),l=setTimeout(function(){r(),setTimeout(function(){c.remove(),i=c=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(n+o,function(){if(f._allowZoom()){if(clearTimeout(l),f.st.removalDelay=a,!i){if(i=f._getItemToZoom(),!i)return;c=s(i)}c.css(f._getOffset(!0)),f.wrap.append(c),f.content.css("visibility","hidden"),setTimeout(function(){c.css(f._getOffset())},16)}}),x(t+o,function(){f._allowZoom()&&(r(),c&&c.remove(),i=null)})}},_allowZoom:function(){return"image"===f.currItem.type},_getItemToZoom:function(){return f.currItem.hasSize?f.currItem.img:!1},_getOffset:function(t){var n;n=t?f.currItem.img:f.st.zoom.opener(f.currItem.el||f.currItem);var o=n.offset(),i=parseInt(n.css("padding-top"),10),a=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-i;var s={width:n.width(),height:(h?n.innerHeight():n[0].offsetHeight)-a-i};return W()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}}),O()}(window.jQuery||window.Zepto);