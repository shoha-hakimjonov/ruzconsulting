(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{232:function(t,e,n){"use strict";var o=new Map;function r(t){if("undefined"==typeof IntersectionObserver)return null;var e=JSON.stringify(t);if(o.has(e))return o.get(e);var n=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&t.target.hydrate&&t.target.hydrate()}))}),t);return o.set(e,n),n}var l="undefined"==typeof window,c=!l;var h={props:{idleTimeout:{default:2e3,type:Number},onInteraction:{type:[Array,Boolean,String]},ssrOnly:{type:Boolean},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},data:function(){return{hydrated:l}},watch:{triggerHydration:{immediate:!0,handler:function(t){t&&this.hydrate()}}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},mounted:function(){var t=this;if(0!==this.$el.childElementCount){if(!this.ssrOnly){if(this.interactionEvents.forEach((function(e){t.$el.addEventListener(e,t.hydrate,{capture:!0,once:!0})})),this.interactionEvents.length&&(this.interaction=function(){t.interactionEvents.forEach((function(e){return t.$el.removeEventListener(e,t.hydrate)}))}),this.whenIdle){if(!("requestIdleCallback"in window&&"requestAnimationFrame"in window))return void this.hydrate();var e=requestIdleCallback((function(){requestAnimationFrame((function(){t.hydrate()}))}),{timeout:this.idleTimeout});this.idle=function(){return cancelIdleCallback(e)}}if(this.whenVisible){var n=r(!0===this.whenVisible?{}:this.whenVisible);if(!n)return void this.hydrate();this.$el.hydrate=this.hydrate,n.observe(this.$el),this.visible=function(){n.unobserve(t.$el),delete t.$el.hydrate}}}}else this.hydrate()},beforeDestroy:function(){this.cleanup()},methods:{cleanup:function(){var t=this;["idle","interaction","visible"].forEach((function(e){e in t&&(t[e](),delete t[e])}))},hydrate:function(){this.hydrated=!0,this.cleanup()}},render:function(t){var e=this.$el?this.$el.tagName:"div",n=this.$scopedSlots.default?this.$scopedSlots.default({hydrated:this.hydrated}):this.$slots.default[0],o=this.hydrated?n:t(e);return c&&(o.asyncFactory=this.hydrated?{resolved:!0}:{},o.isAsyncPlaceholder=!this.hydrated),o}};e.a=h},336:function(t,e,n){var content=n(526);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("247ecef4",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";var o=n(336);n.n(o).a},526:function(t,e,n){(e=n(14)(!1)).push([t.i,"#page{width:100%;overflow-x:hidden}.scroll-up{position:fixed;bottom:5%;right:2%;width:50px;padding:8px 3px;background-color:#151b1a;background-size:contain;background-repeat:no-repeat;border:none;border-radius:3px;cursor:pointer;z-index:11}.scroll-up img{display:block;width:100%;height:30px;margin-bottom:5px;-o-object-fit:contain;object-fit:contain;-webkit-transition:all .3s;transition:all .3s}.scroll-up .text{display:block;font-size:16px;color:#fff;text-transform:uppercase;text-align:center}.scroll-up:hover img{-webkit-transform:translateY(-2px);transform:translateY(-2px)}",""]),t.exports=e},650:function(t,e,n){"use strict";n.r(e);var o=n(392),r=n.n(o),l={components:{LazyHydrate:n(232).a,AppCallbackForm:function(){return n.e(45).then(n.bind(null,656))},AppCustomsCalculator:function(){return Promise.all([n.e(42),n.e(44)]).then(n.bind(null,624))}},data:function(){return{schema:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"http://site.com",logo:"http://site.com/logo.png",description:"Описание компании",address:{"@type":"PostalAddress",streetAddress:"Физический адрес",addressLocality:"Киев",postalCode:"0200",addressCountry:"Страна"},telephone:"(093) 958 00 34",email:"info@ubtrading.com.ua"}),formVisible:!1,customsCalculatorVisible:!1,withDelivery:!1}},methods:{svgAnimate:function(){r()(".svg-animate").each((function(){r()(this).offset().top<r()(document).scrollTop()+r()(window).height()-50&&!r()(this).hasClass("animate")&&r()(this).addClass("animate")}))},elemAnimate:function(t,e){var n=r()(window).scrollTop(),o=r()(window).height();r()(".".concat(t)).each((function(){var t=r()(this).offset().top,l=r()(this).height();n+o>=t&&n<=t+l&&!r()(this).hasClass(e)&&r()(this).addClass(e)}))},loadLazyBackground:function(){r()(".lazy-bg").each((function(){var t=r()(window).scrollTop(),e=r()(window).height(),n=r()(this).offset().top,o=r()(this).height();t+e>=n&&t<=n+o&&r()(this).hasClass("lazy-bg")&&r()(this).removeClass("lazy-bg")}))},scrollUp:function(){r()("body,html").animate({scrollTop:0},1e3)},useAllScrollFuncrions:function(){this.svgAnimate(),this.elemAnimate("main-animate","animate"),this.elemAnimate("right-animate","r-animate"),this.elemAnimate("left-animate","l-animate"),this.elemAnimate("stop-animate","animate-stop"),this.loadLazyBackground();var t=r()("#scroll-up");window.innerWidth>250&&(r()(window).scrollTop()>window.innerHeight?t.removeClass("display-n"):t.addClass("display-n"))}},mounted:function(){var t=this;this.useAllScrollFuncrions(),r()(window).on("scroll",(function(){t.useAllScrollFuncrions()})),this.$root.$on("toggleform",(function(e){e?t.$refs.callbackForm.$el.classList.add("active"):t.$refs.callbackForm.$el.classList.remove("active")})),this.$root.$on("closecustomscalculator",(function(){t.customsCalculatorVisible=!1,t.withDelivery=!1})),this.$root.$on("opencustomscalculator",(function(){t.customsCalculatorVisible=!0,t.withDelivery=!1})),this.$root.$on("opencustomscalculatorwithdev",(function(){t.customsCalculatorVisible=!0,t.withDelivery=!0}))}},c=(n(525),n(42)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.schema)}}),t._v(" "),n("nuxt"),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-callback-form",{ref:"callbackForm"})],1),t._v(" "),n("button",{staticClass:"scroll-up display-n",attrs:{id:"scroll-up"},on:{click:t.scrollUp}},[n("img",{attrs:{src:"/images/to-top.png",alt:"top"}}),t._v(" "),n("span",{staticClass:"text"},[t._v("Top")])]),t._v(" "),t.customsCalculatorVisible?n("app-customs-calculator",{attrs:{delivery:t.withDelivery}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);