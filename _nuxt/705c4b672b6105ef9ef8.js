(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{340:function(t,e,o){var content=o(541);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("1b78e9ad",content,!0,{sourceMap:!1})},540:function(t,e,o){"use strict";var n=o(340);o.n(n).a},541:function(t,e,o){(e=o(14)(!1)).push([t.i,'.blog[data-v-0fbeeac8]{position:relative;padding-top:150px;padding-bottom:50px;box-sizing:border-box}.blog__box[data-v-0fbeeac8]{margin-bottom:75px;font-size:32px;color:#9d9d9d}.blog__box[data-v-0fbeeac8]:after{position:absolute;content:"";display:inline-block;background-color:#cc9557;left:-5px;top:-150px;height:115px;width:48px}.blog__title[data-v-0fbeeac8]{position:relative;padding-right:10px;color:#a19699;font-family:muller-b,serif;font-size:60px;font-weight:400;line-height:34px}.blog__title[data-v-0fbeeac8]:after{position:absolute;content:" ";display:inline;background-color:#a19699;width:1px;height:30px;top:5px;right:-3px}.blog__descr[data-v-0fbeeac8]{font-size:14px;padding:0 15px;white-space:nowrap;font-family:muller-l,serif}.blog__category[data-v-0fbeeac8]{text-align:center;font-size:10px;color:#fff;background-color:#3182c9;border-radius:5px;padding:5px 10px 3px;left:20px;top:20px}.blog__name[data-v-0fbeeac8]{font-family:muller-b,serif}.blog__text[data-v-0fbeeac8]{padding:15px 15px 30px;min-height:270px}.blog__date[data-v-0fbeeac8]{font-family:muller-thini,serif;font-size:10px;margin:10px 0;color:#828282}.blog__container[data-v-0fbeeac8]{margin:0 -15px}.swiper-slide-wrapper[data-v-0fbeeac8]{padding:10px}.blog__item[data-v-0fbeeac8]{position:relative;background-color:#fff;margin-bottom:10px;z-index:1;-webkit-transition:all .5s;transition:all .5s}.blog__item[data-v-0fbeeac8]:hover{box-shadow:0 0 10px rgba(0,0,0,.3)}.blog__item[data-v-0fbeeac8]:hover:before{opacity:0}.blog__item img[data-v-0fbeeac8]{display:block;width:100%;height:200px;-o-object-fit:cover;object-fit:cover}.blog__text p[data-v-0fbeeac8]{font-family:muller-l,serif;font-size:12px;margin-bottom:7px}.blog__content[data-v-0fbeeac8]{height:105px;overflow-y:hidden}.swiper-button-next[data-v-0fbeeac8],.swiper-button-prev[data-v-0fbeeac8]{background-image:url(/images/swiper-arrow.svg)}.swiper-button-prev[data-v-0fbeeac8]{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.swiper-button-next[data-v-0fbeeac8]:focus,.swiper-button-prev[data-v-0fbeeac8]:focus{outline:none}@media screen and (max-width:1281px){.blog__item[data-v-0fbeeac8]:before{background-position:0 -69px}}@media screen and (min-width:992px){.swiper-button-next[data-v-0fbeeac8],.swiper-button-prev[data-v-0fbeeac8]{display:none}}@media screen and (max-width:991px){.blog__item[data-v-0fbeeac8]{width:280px;max-width:100%;margin:auto}.blog__item[data-v-0fbeeac8]:before{background-position:0 -100px}.swiper-button-prev[data-v-0fbeeac8]{left:0}.swiper-button-next[data-v-0fbeeac8]{right:0}}@media screen and (max-width:767px){.blog__title>div[data-v-0fbeeac8]{margin-bottom:15px}.blog__title[data-v-0fbeeac8]:after{top:12px}.blog__item[data-v-0fbeeac8]:before{background-position:0 -72px}}@media screen and (max-width:575px){.blog[data-v-0fbeeac8]{padding-bottom:0;padding-top:100px}.blog__box[data-v-0fbeeac8]:after{left:5px;height:80px;width:16px;top:-100px}.blog__title[data-v-0fbeeac8]{margin-bottom:30px;font-size:25px;color:#1c0001;opacity:.7}.blog__title[data-v-0fbeeac8]:after{display:none}.blog__title_small[data-v-0fbeeac8]{white-space:normal;font-size:14px;padding:0 5px}a.blog__title_small[data-v-0fbeeac8]{padding:0 0 0 70px}.blog__title svg line[data-v-0fbeeac8]{stroke-width:5px;opacity:1}}',""]),t.exports=e},653:function(t,e,o){"use strict";o.r(e);var n={props:["posts"],data:function(){return{swiperOption:{slidesPerView:4,spaceBetween:40,autoplay:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{767:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:10,autoplay:{delay:5e3}}}}}},mounted:function(){this.posts.forEach((function(t){t.description.length>190&&(t.description=t.description.slice(0,190)+"...")}))}},l=(o(540),o(42)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"blog"},[o("div",{staticClass:"container"},[o("div",{staticClass:"blog__box pos-r c-after flex ai-c fw-w-sm"},[t._m(0),t._v(" "),o("svg",{staticClass:"svg-animate w50-sm w33-esm",attrs:{height:"10",width:"800"}},[o("line",{attrs:{x1:"0",y1:"5",x2:"100%",y2:"5","stroke-width":"9",stroke:"#cc9557"}})]),t._v(" "),o("nuxt-link",{staticClass:"blog__more blog__descr hover",attrs:{to:"/blog"}},[t._v("Читать больше...")])],1),t._v(" "),o("div",{staticClass:"blog__container flex jc-sa fw-w-md"},[o("swiper",{attrs:{options:t.swiperOption}},[t._l(t.posts,(function(e,n){return o("swiper-slide",{key:n},[o("div",{staticClass:"swiper-slide-wrapper"},[o("nuxt-link",{staticClass:"blog__item pos-r block",attrs:{to:"/blog/"+e.slug}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/uploads"+e.imageUrl,expression:"'/uploads' + post.imageUrl"}],attrs:{alt:e.title}}),t._v(" "),o("div",{staticClass:"blog__text"},[o("div",{staticClass:"blog__name"},[t._v("\n                                    "+t._s(e.title)+"\n                                ")]),t._v(" "),o("div",{staticClass:"blog__date"},[t._v(t._s(t._f("date")(new Date(e.date))))]),t._v(" "),o("div",{staticClass:"blog__content"},[t._v("\n                                    "+t._s(e.description)+"\n                                ")])])])],1)])})),t._v(" "),o("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),o("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex ai-c w100-sm opacity left-animate"},[e("span",{staticClass:"blog__title"},[this._v("Блог")]),this._v(" "),e("span",{staticClass:"pos-r blog__descr"},[this._v("Новости, аналитика в сфере  "),e("br"),this._v("импорта автомобилей\n            ")])])}],!1,null,"0fbeeac8",null);e.default=component.exports}}]);