//CSS Ready
(function(n){n.fn.bxSlider=function(t){function gt(){t.mode=="horizontal"?(u.wrap('<div class="'+t.wrapperClass+'" style="width:'+ct+'px; position:relative;"><\/div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+ct+'px;"><\/div>').css({width:"999999px",position:"relative",left:"-"+rt+"px"}),u.children().css({width:at,float:"left",listStyle:"none"}),e=u.parent().parent(),r.addClass("pager")):t.mode=="vertical"?(u.wrap('<div class="'+t.wrapperClass+'" style="width:'+w+'px; position:relative;"><\/div>').wrap('<div class="bx-window" style="width:'+w+"px; height:"+vt+'px; position:relative; overflow:hidden;"><\/div>').css({height:"999999px",position:"relative",top:"-"+ut+"px"}),u.children().css({listStyle:"none",height:c}),e=u.parent().parent(),r.addClass("pager")):t.mode=="fade"&&(u.wrap('<div class="'+t.wrapperClass+'" style="width:'+w+'px; position:relative;"><\/div>').wrap('<div class="bx-window" style="height:'+c+"px; width:"+w+'px; position:relative; overflow:hidden;"><\/div>'),u.children().css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98}),e=u.parent().parent(),r.not(":eq("+i+")").fadeTo(0,0),r.eq(i).css("zIndex",99));t.captions&&t.captionsSelector==null&&e.append('<div class="bx-captions"><\/div>')}function ni(){t.nextImage!=""?(nextContent=t.nextImage,nextType="image"):(nextContent=t.nextText,nextType="text");t.prevImage!=""?(prevContent=t.prevImage,prevType="image"):(prevContent=t.prevText,prevType="text");fi(nextType,nextContent,prevType,prevContent)}function ti(){t.auto?t.infiniteLoop?t.autoDirection=="next"?p=setInterval(function(){f.goToNextSlide(!1)},t.pause):t.autoDirection=="prev"&&(p=setInterval(function(){f.goToPreviousSlide(!1)},t.pause)):t.autoDirection=="next"?p=setInterval(function(){i+=t.moveSlideQty;i>b&&(i=i%r.length);f.goToSlide(i,!1)},t.pause):t.autoDirection=="prev"&&(p=setInterval(function(){i-=t.moveSlideQty;i<0&&(negativeOffset=i%r.length,i=negativeOffset==0?0:r.length+negativeOffset);f.goToSlide(i,!1)},t.pause)):t.ticker&&(t.tickerSpeed*=10,n(".pager",e).each(function(){a+=n(this).width();v+=n(this).height()}),t.tickerDirection=="prev"&&t.mode=="horizontal"?u.css("left","-"+(a+rt)+"px"):t.tickerDirection=="prev"&&t.mode=="vertical"&&u.css("top","-"+(v+ut)+"px"),t.mode=="horizontal"?(ft=parseInt(u.css("left")),y(ft,a,t.tickerSpeed)):t.mode=="vertical"&&(et=parseInt(u.css("top")),y(et,v,t.tickerSpeed)),t.tickerHover&&ui())}function y(n,i,r){t.mode=="horizontal"?t.tickerDirection=="next"?u.animate({left:"-="+i+"px"},r,"linear",function(){u.css("left",n);y(n,a,t.tickerSpeed)}):t.tickerDirection=="prev"&&u.animate({left:"+="+i+"px"},r,"linear",function(){u.css("left",n);y(n,a,t.tickerSpeed)}):t.mode=="vertical"&&(t.tickerDirection=="next"?u.animate({top:"-="+i+"px"},r,"linear",function(){u.css("top",n);y(n,v,t.tickerSpeed)}):t.tickerDirection=="prev"&&u.animate({top:"+="+i+"px"},r,"linear",function(){u.css("top",n);y(n,v,t.tickerSpeed)}))}function ii(){t.startImage!=""?(startContent=t.startImage,startType="image"):(startContent=t.startText,startType="text");t.stopImage!=""?(stopContent=t.stopImage,stopType="image"):(stopContent=t.stopText,stopType="text");ei(startType,startContent,stopType,stopContent)}function ri(){e.find(".bx-window").hover(function(){h&&f.stopShow(!1)},function(){h&&f.startShow(!1)})}function ui(){u.hover(function(){h&&f.stopTicker(!1)},function(){h&&f.startTicker(!1)})}function lt(){r.not(":eq("+i+")").fadeTo(t.speed,0).css("zIndex",98);r.eq(i).css("zIndex",99).fadeTo(t.speed,1,function(){o=!1;jQuery.browser.msie&&r.eq(i).get(0).style.removeAttribute("filter");t.onAfterSlide(i,r.length,r.eq(i))})}function k(r){t.pagerType=="full"&&t.pager?(n("a",l).removeClass(t.pagerActiveClass),n("a",l).eq(r).addClass(t.pagerActiveClass)):t.pagerType=="short"&&t.pager&&n(".bx-pager-current",l).html(i+1)}function fi(i,r,u,o){var s=n('<a href="" class="bx-next"><\/a>'),h=n('<a href="" class="bx-prev"><\/a>');i=="text"?s.html(r):s.html('<img src="'+r+'" />');u=="text"?h.html(o):h.html('<img src="'+o+'" />');t.prevSelector?n(t.prevSelector).append(h):e.append(h);t.nextSelector?n(t.nextSelector).append(s):e.append(s);s.click(function(){return f.goToNextSlide(),!1});h.click(function(){return f.goToPreviousSlide(),!1})}function yt(i){var h=r.length,o,u,s;if(t.moveSlideQty>1&&(h=r.length%t.moveSlideQty!=0?Math.ceil(r.length/t.moveSlideQty):r.length/t.moveSlideQty),o="",t.buildPager)for(u=0;u<h;u++)o+=t.buildPager(u,r.eq(u*t.moveSlideQty));else if(i=="full")for(u=1;u<=h;u++)o+='<a href="" class="pager-link pager-'+u+'">'+u+"<\/a>";else i=="short"&&(o='<span class="bx-pager-current">'+(t.startingSlide+1)+"<\/span> "+t.pagerShortSeparator+' <span class="bx-pager-total">'+r.length+"<\/span>");t.pagerSelector?(n(t.pagerSelector).append(o),l=n(t.pagerSelector)):(s=n('<div class="bx-pager"><\/div>'),s.append(o),t.pagerLocation=="top"?e.prepend(s):t.pagerLocation=="bottom"&&e.append(s),l=n(".bx-pager",e));l.children().click(function(){if(t.pagerType=="full"){var n=l.children().index(this);t.moveSlideQty>1&&(n*=t.moveSlideQty);f.goToSlide(n)}return!1})}function st(){var u=n("img",r.eq(i)).attr("title");u!=""?t.captionsSelector?n(t.captionsSelector).html(u):n(".bx-captions",e).html(u):t.captionsSelector?n(t.captionsSelector).html("&nbsp;"):n(".bx-captions",e).html("&nbsp;")}function ei(i,r,u,o){s=n('<a href="" class="bx-start"><\/a>');tt=i=="text"?r:'<img src="'+r+'" />';it=u=="text"?o:'<img src="'+o+'" />';t.autoControlsSelector?n(t.autoControlsSelector).append(s):(e.append('<div class="bx-auto"><\/div>'),n(".bx-auto",e).html(s));s.click(function(){return t.ticker?n(this).hasClass("stop")?f.stopTicker():n(this).hasClass("start")&&f.startTicker():n(this).hasClass("stop")?f.stopShow(!0):n(this).hasClass("start")&&f.startShow(!0),!1})}function ht(){!t.infiniteLoop&&t.hideControlOnEnd&&(i==ot?n(".bx-prev",e).addClass("hide"):n(".bx-prev",e).removeClass("hide"),i==b?n(".bx-next",e).addClass("hide"):n(".bx-next",e).removeClass("hide"))}function d(t,i){var r;return i=="left"?r=n(".pager",e).eq(t).position().left:i=="top"&&(r=n(".pager",e).eq(t).position().top),r}function oi(){return g.outerWidth()*t.displaySlideQty}function si(){return g.outerHeight()*t.displaySlideQty}var wt={mode:"horizontal",infiniteLoop:!1,hideControlOnEnd:!0,controls:!0,speed:500,easing:"swing",pager:!1,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:!1,captionsSelector:null,auto:!0,autoDirection:"next",autoControls:!1,autoControlsSelector:null,autoStart:!0,autoHover:!1,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:!1,tickerSpeed:5e3,tickerDirection:"next",tickerHover:!1,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:!1,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null},t=n.extend(wt,t),f=this,u="",bt="",r="",e="",g="",at="",nt="",ct="",vt="",l="",p="",s="",kt="",tt="",it="",h=!0,dt=!1,w=0,c=0,i=0,rt=0,ut=0,a=0,v=0,ft=0,et=0,o=!1,ot=0,b=r.length-1;return this.goToSlide=function(n,e){if(!o){o=!0;i=n;t.onBeforeSlide(i,r.length,r.eq(i));if(typeof e=="undefined")var e=!0;if(e&&t.auto&&f.stopShow(!0),slide=n,slide==ot)t.onFirstSlide(i,r.length,r.eq(i));if(slide==b)t.onLastSlide(i,r.length,r.eq(i));t.mode=="horizontal"?u.animate({left:"-"+d(slide,"left")+"px"},t.speed,t.easing,function(){o=!1;t.onAfterSlide(i,r.length,r.eq(i))}):t.mode=="vertical"?u.animate({top:"-"+d(slide,"top")+"px"},t.speed,t.easing,function(){o=!1;t.onAfterSlide(i,r.length,r.eq(i))}):t.mode=="fade"&&lt();ht();t.moveSlideQty>1&&(n=Math.floor(n/t.moveSlideQty));k(n);st()}},this.goToNextSlide=function(n){var n,e,s,h;if(typeof n=="undefined"&&(n=!0),n&&t.auto&&f.stopShow(!0),t.infiniteLoop){if(!o){o=!0;e=!1;i=i+t.moveSlideQty;i>b&&(i=i%r.length,e=!0);t.onNextSlide(i,r.length,r.eq(i));t.onBeforeSlide(i,r.length,r.eq(i));t.mode=="horizontal"?(s=t.moveSlideQty*nt,u.animate({left:"-="+s+"px"},t.speed,t.easing,function(){o=!1;e&&u.css("left","-"+d(i,"left")+"px");t.onAfterSlide(i,r.length,r.eq(i))})):t.mode=="vertical"?(h=t.moveSlideQty*c,u.animate({top:"-="+h+"px"},t.speed,t.easing,function(){o=!1;e&&u.css("top","-"+d(i,"top")+"px");t.onAfterSlide(i,r.length,r.eq(i))})):t.mode=="fade"&&lt();t.moveSlideQty>1?k(Math.ceil(i/t.moveSlideQty)):k(i);st()}}else if(!o)if(e=!1,i=i+t.moveSlideQty,i<=b){ht();t.onNextSlide(i,r.length,r.eq(i));f.goToSlide(i)}else i-=t.moveSlideQty},this.goToPreviousSlide=function(s){var s,h,l,a;if(typeof s=="undefined"&&(s=!0),s&&t.auto&&f.stopShow(!0),t.infiniteLoop){if(!o){o=!0;h=!1;i=i-t.moveSlideQty;i<0&&(negativeOffset=i%r.length,i=negativeOffset==0?0:r.length+negativeOffset,h=!0);t.onPrevSlide(i,r.length,r.eq(i));t.onBeforeSlide(i,r.length,r.eq(i));t.mode=="horizontal"?(l=t.moveSlideQty*nt,u.animate({left:"+="+l+"px"},t.speed,t.easing,function(){o=!1;h&&u.css("left","-"+d(i,"left")+"px");t.onAfterSlide(i,r.length,r.eq(i))})):t.mode=="vertical"?(a=t.moveSlideQty*c,u.animate({top:"+="+a+"px"},t.speed,t.easing,function(){o=!1;h&&u.css("top","-"+d(i,"top")+"px");t.onAfterSlide(i,r.length,r.eq(i))})):t.mode=="fade"&&lt();t.moveSlideQty>1?k(Math.ceil(i/t.moveSlideQty)):k(i);st()}}else if(!o){h=!1;i=i-t.moveSlideQty;i<0&&(i=0,t.hideControlOnEnd&&n(".bx-prev",e).addClass("hide"));ht();t.onPrevSlide(i,r.length,r.eq(i));f.goToSlide(i)}},this.goToFirstSlide=function(n){if(typeof n=="undefined")var n=!0;f.goToSlide(ot,n)},this.goToLastSlide=function(){if(typeof n=="undefined")var n=!0;f.goToSlide(b,n)},this.getCurrentSlide=function(){return i},this.getSlideCount=function(){return r.length},this.stopShow=function(n){if(clearInterval(p),typeof n=="undefined")var n=!0;n&&t.autoControls&&(s.html(tt).removeClass("stop").addClass("start"),h=!1)},this.startShow=function(n){if(typeof n=="undefined")var n=!0;ti();n&&t.autoControls&&(s.html(it).removeClass("start").addClass("stop"),h=!0)},this.stopTicker=function(n){if(u.stop(),typeof n=="undefined")var n=!0;n&&t.ticker&&(s.html(tt).removeClass("stop").addClass("start"),h=!1)},this.startTicker=function(n){var f,o,i,e,n;t.mode=="horizontal"?(t.tickerDirection=="next"?(f=parseInt(u.css("left")),i=a+f+r.eq(0).width()):t.tickerDirection=="prev"&&(f=-parseInt(u.css("left")),i=f-r.eq(0).width()),e=i*t.tickerSpeed/a,y(ft,i,e)):t.mode=="vertical"&&(t.tickerDirection=="next"?(o=parseInt(u.css("top")),i=v+o+r.eq(0).height()):t.tickerDirection=="prev"&&(o=-parseInt(u.css("top")),i=o-r.eq(0).height()),e=i*t.tickerSpeed/v,y(et,i,e),typeof n=="undefined"&&(n=!0),n&&t.ticker&&(s.html(it).removeClass("start").addClass("stop"),h=!0))},this.initShow=function(){if(u=n(this),bt=u.clone(),r=u.children(),e="",g=u.children(":first"),at=g.width(),w=0,nt=g.outerWidth(),c=0,ct=oi(),vt=si(),o=!1,l="",i=0,rt=0,ut=0,p="",s="",kt="",tt="",it="",h=!0,dt=!1,a=0,v=0,ft=0,et=0,ot=0,b=r.length-1,r.each(function(){n(this).outerHeight()>c&&(c=n(this).outerHeight());n(this).outerWidth()>w&&(w=n(this).outerWidth())}),t.randomStart){var y=Math.floor(Math.random()*r.length);i=y;rt=nt*(t.moveSlideQty+y);ut=c*(t.moveSlideQty+y)}else i=t.startingSlide,rt=nt*(t.moveSlideQty+t.startingSlide-1),ut=c*(t.moveSlideQty+t.startingSlide-1);gt();t.pager&&!t.ticker&&(t.pagerType=="full"?yt("full"):t.pagerType=="short"&&yt("short"));t.controls&&!t.ticker&&ni();(t.auto||t.ticker)&&(t.autoControls&&ii(),t.autoStart?setTimeout(function(){f.startShow(!0)},t.autoDelay):f.stopShow(!0),t.autoHover&&!t.ticker&&ri());t.moveSlideQty>1?k(Math.ceil(i/t.moveSlideQty)):k(i);ht();t.captions&&st();t.onAfterSlide(i,r.length,r.eq(i))},this.destroyShow=function(){clearInterval(p);n(".bx-next, .bx-prev, .bx-pager, .bx-auto",e).remove();u.unwrap().unwrap().removeAttr("style");u.children().removeAttr("style").not(".pager").remove();r.removeClass("pager")},this.reloadShow=function(){f.destroyShow();f.initShow()},this.each(function(){n(this).children().length>0&&f.initShow()}),this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return parseFloat(jQuery.css(this.elem,this.prop))}})(jQuery);
//# sourceMappingURL=jquery.bxSlider.min.js.map