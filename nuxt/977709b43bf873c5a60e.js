(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{232:function(t,e,n){"use strict";var r=new Map;function o(t){if("undefined"==typeof IntersectionObserver)return null;var e=JSON.stringify(t);if(r.has(e))return r.get(e);var n=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&t.target.hydrate&&t.target.hydrate()}))}),t);return r.set(e,n),n}var l="undefined"==typeof window,c=!l;var h={props:{idleTimeout:{default:2e3,type:Number},onInteraction:{type:[Array,Boolean,String]},ssrOnly:{type:Boolean},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},data:function(){return{hydrated:l}},watch:{triggerHydration:{immediate:!0,handler:function(t){t&&this.hydrate()}}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},mounted:function(){var t=this;if(0!==this.$el.childElementCount){if(!this.ssrOnly){if(this.interactionEvents.forEach((function(e){t.$el.addEventListener(e,t.hydrate,{capture:!0,once:!0})})),this.interactionEvents.length&&(this.interaction=function(){t.interactionEvents.forEach((function(e){return t.$el.removeEventListener(e,t.hydrate)}))}),this.whenIdle){if(!("requestIdleCallback"in window&&"requestAnimationFrame"in window))return void this.hydrate();var e=requestIdleCallback((function(){requestAnimationFrame((function(){t.hydrate()}))}),{timeout:this.idleTimeout});this.idle=function(){return cancelIdleCallback(e)}}if(this.whenVisible){var n=o(!0===this.whenVisible?{}:this.whenVisible);if(!n)return void this.hydrate();this.$el.hydrate=this.hydrate,n.observe(this.$el),this.visible=function(){n.unobserve(t.$el),delete t.$el.hydrate}}}}else this.hydrate()},beforeDestroy:function(){this.cleanup()},methods:{cleanup:function(){var t=this;["idle","interaction","visible"].forEach((function(e){e in t&&(t[e](),delete t[e])}))},hydrate:function(){this.hydrated=!0,this.cleanup()}},render:function(t){var e=this.$el?this.$el.tagName:"div",n=this.$scopedSlots.default?this.$scopedSlots.default({hydrated:this.hydrated}):this.$slots.default[0],r=this.hydrated?n:t(e);return c&&(r.asyncFactory=this.hydrated?{resolved:!0}:{},r.isAsyncPlaceholder=!this.hydrated),r}};e.a=h},290:function(t,e,n){var content=n(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6555d332",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";var r=n(290);n.n(r).a},423:function(t,e,n){(e=n(14)(!1)).push([t.i,"@media screen and (min-width:992px){.work__svg[data-v-4ef4789e]{height:160px}}@media screen and (max-width:767px){.what__block[data-v-4ef4789e]{background-size:200% 100%;background-position:100%}}",""]),t.exports=e},627:function(t,e,n){"use strict";n.r(e);n(59),n(79),n(7);var r,o=n(1),l={components:{LazyHydrate:n(232).a,AppHeader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,271))},AppAbout:function(){return n.e(3).then(n.bind(null,658))},AppAdvantages:function(){return n.e(4).then(n.bind(null,651))},AppWorkingSchema:function(){return Promise.all([n.e(5),n.e(6)]).then(n.bind(null,652))},AppBlog:function(){return n.e(8).then(n.bind(null,653))},AppConsultation:function(){return n.e(1).then(n.bind(null,654))},AppFooter:function(){return n.e(2).then(n.bind(null,655))}},data:function(){return{breadcrumbs:[{url:"https://ubtrading.com.ua",path:"/",text:"Таможенно-брокерские услуги"},{url:"https://ubtrading.com.ua/eu",text:"Автомобили из Евросоюза"}],header:{title:"Таможенно-брокерские услуги",subtitle:"Профессиональное таможенное оформление и сертификация автомобилей,<br> мотоциклов и других видов транспортных средств с Евросоюза «под ключ»",backImage:{desktop:"images/new-bg-es.jpg",mobile:"images/new-bg-es-mobile.jpg"},frontImage:{desktop:"images/new-avto-es.png"},multilang:!1,showAboutImport:!0,bannerLinks:[{title:"США",href:"/usa"},{title:"Грузия",href:"/georgia"},{title:"Евросоюз",href:"/eu"}]},advantages:{backgroundImage:"images/bg4.png",items:[{icon:"images/why-1.png",text:'Является лицензированным <a href="http://tradecar.hostronavt.ru/sfs.gov.ua/dovidniki--reestri--perelik/reestri/94921.html" rel="nofollow"> <br> таможенным брокером</a>'},{icon:"images/why-4.png",text:"Минимизируем риски повышения таможенной стоимости"},{icon:"images/why-8.png",text:"На счету более тысячи растаможенных авто"},{icon:"images/why-2.png",text:"Более 10 лет опыта работы в сфере внешнеэкономической деятельности"},{icon:"images/why-5.png",text:"Доступная цена услуг (у нас нет скрытых и дополнительных платежей). Оплата после выполнения услуг."},{icon:"images/why-6.png",text:"Официальные юридические отношения с клиентами"},{icon:"images/why-3.png",text:"Таможенное оформление любого автомобиля всего за 3 часа"},{icon:"images/why-7.png",text:"Особые условия для постоянных и системных клиентов"}],withSvg:!0},schemaItems:[{title:"Перед покупкой автомобиля",text:'<p>Проверить соответствие автомобиля экологическим нормам (не ниже \n                        ЕВРО 2 – для б/у легковых автомобилей, не ниже ЕВРО 5 – для новых \n                        легковых и грузовых автомобилей);</p>\n                    <p>Проверить снятие б/у автомобиля с регистрации в уполномоченных органах \n                        (<i><a href="https://historiapojazdu.gov.pl/" target="_blank" rel="nofollow">Польша</a>, \n                            <a href="https://www.regitra.lt/" target="_blank" rel="nofollow">Литва</a>, \n                            <a href="https://eteenindus.mnt.ee/main.jsf" target="_blank" rel="nofollow">Эстония</a></i>)</p>'},{title:"Перед пересечением границы",text:'<p>Заключить с таможенным брокером договор на право декларирования товаров клиента \n                        перед таможенными органами Украины</p>\n                    <p>Расчет таможенных платежей таможенным брокером (с учетом данных каталога schwacke \n                        и таможенных оформлений аналогичных авто)</p>\n                    <p>Оплата таможенных платежей собственником автомобиля (Оплата проводится собственником \n                        авто либо лицом по доверенности через кассу банка или онлайн банкинг, а также любым лицом \n                        через терминал банка непосредственно на расчетный счет таможни, в которой планируется \n                        таможенное оформление. <a href="http://kyiv.sfs.gov.ua/dfs-u-regioni/mitnitsya/kontakti/" target="_blank" rel="nofollow">Реквизиты Киевской городской таможни</a></p>\n                    <p>Оформление таможенным брокером предварительной декларация (ПД) для пропуска авто на \n                        территорию Украины</p>'},{title:"Пересечение границы Украины",text:"<p>Выбрать полосу движения по красному коридору в пункте пропуска на украинской границе</p>\n                    <p>Назвать номер предварительной декларации (ПД) инспектору таможни</p>\n                    <p>Пройти процедуру пропуска на таможенную территорию Украины (таможенный досмотр, подписания \n                        акта досмотра, взятие обязательства о доставке авто, получение документов с отметками таможни)</p>"},{title:"Перед таможенным оформлением",text:'<p>Получить от <a href="https://mtu.gov.ua/content/perelik-priznachenih-organiv-iz-sertifikacii-kolisnih-transportnih-zasobiv.html" target="_blank" rel="nofollow"> \n                        уполномоченных органов</a> сертификат или справку на соответствие транспортного средства \n                        экологическим нормам </p>\n                    <p>Доставить автомобиль в зону таможенного контроля внутренней таможни, в которой проводилось \n                        оформление предварительной декларации (ПД), на протяжении установленных законодательством \n                        10 календарных дней с момента пересечения границы</p>'},{title:"Документы для таможенного оформления",text:'<p>Подтверждение права собственности на автомобиль (договор купли-продажи (контракт)</p>\n                    <p>Подтверждение стоимости автомобиля (договор купли-продажи (контракт) или инвойс \n                        (счет-фактура) – обязательные; экспортная таможенная декларация ЕС, SWIFT \n                        платёж – не обязательные)</p>\n                    <p>Подтверждение соответствия автомобиля экологичным нормам в Украине (сертификат \n                        соответствия или справка от \n                        <a href="https://mtu.gov.ua/content/perelik-priznachenih-organiv-iz-sertifikacii-kolisnih-transportnih-zasobiv.html" target="_blank" rel="nofollow">уполномоченных органов</a>)</p>\n                    <p>Документы на автомобиль (техпаспорт – для б/у авто)</p>\n                    <p>Документы на собственника автомобиля (паспорт, код ИНН, загранпаспорт, нотариальная \n                        доверенность (в случае пересечения границы лицом по доверенности)</p>\n                    <p>Документы для получения льготы (сертификат происхождения EUR1 (для получения \n                        юридическими лицами преференций при таможенном оформлении)</p>'},{title:"Таможенное оформление",text:"<p>Декларирование таможенным брокером таможенному органу автомобиля, \n                        на основании полученных от клиента документов, путем подачи таможенной \n                        декларации и предусмотренных законодательством документов</p>\n                    <p>Прохождение таможенного досмотра и других этапов таможенного оформления</p>\n                    <p>Получить в таможне заверенную оформленную таможенную декларацию и документ \n                        на право регистрации в органах полиции после завершения таможенного оформления.</p>"}],consultationTitle:"Нужна квалифицированная помощь?",footer:{slogan:"Пока вы думаете, остальные уже ездят!",backgroundImage:"images/footer-bg-EU.jpg"}}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,meta,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,n.dispatch("meta/fetchByPageName","eu");case 3:return(meta=t.sent)||(meta={title:"UBTrading",description:"Таможено-брокерскик услуги.",keywords:""}),t.next=7,n.dispatch("option/fetchByTitle","phones");case 7:return r=(r=(r=t.sent).value.split(",")).map((function(t){var e={text:t};return e.href="tel:+"+t.replace(/\D/gi,""),e})),t.next=12,n.dispatch("post/fetchByPageNumber",1);case 12:return o=t.sent,l=(l=o.posts).slice(0,4),t.abrupt("return",{meta:meta,phones:r,blogPosts:l});case 16:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"keywords",name:"keywords",content:this.meta.keywords}],link:[{rel:"canonical",href:"https://ubtrading.com.ua/eu"}]}},jsonld:function(){return{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:this.breadcrumbs.map((function(t,e){return{"@type":"ListItem",position:e+1,item:{"@id":t.url,name:t.text}}}))}},mounted:function(){document.querySelector("body").classList.remove("body-fix")}},c=(n(422),n(42)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-header",{attrs:{data:t.header,phones:t.phones}})],1),t._v(" "),n("main",[n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-about")],1),t._v(" "),n("div",{staticClass:"cars-bg lazy-bg"},[n("LazyHydrate",{staticStyle:{position:"relative","z-index":"1"},attrs:{"when-visible":""}},[n("app-advantages",{attrs:{data:t.advantages}})],1),t._v(" "),n("section",{staticClass:"what pos-r"},[n("div",{staticClass:"container"},[n("div",{staticClass:"what__title pos-r c-after"},[n("p",{staticClass:"opacity left-animate"},[t._v("Что")]),t._v(" "),n("p",{staticClass:"what__title_large opacity right-animate"},[t._v("входит")]),t._v(" "),n("p",{staticClass:"what__title_last opacity left-animate"},[t._v("в услугу?")]),t._v(" "),n("svg",{staticClass:"svg-animate pos-a"},[n("line",{attrs:{x1:"0",y1:"5",x2:"100%",y2:"5","stroke-width":"9",stroke:"#cc9557"}}),t._v(" "),n("line",{attrs:{x1:"100%",y1:"5",x2:"100%",y2:"100%","stroke-width":"18",stroke:"#cc9557"}})])])]),t._v(" "),t._m(0),t._v(" "),n("svg",{staticClass:"svg-animate work__svg pos-a"},[n("line",{attrs:{x1:"100%",y1:"-100",x2:"100%",y2:"100%","stroke-width":"18",stroke:"#cc9557"}}),t._v(" "),n("line",{attrs:{x1:"100%",y1:"100%",x2:"0",y2:"100%","stroke-width":"18",stroke:"#cc9557"}})])]),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-working-schema",{staticClass:"work-EU",attrs:{items:t.schemaItems}})],1)],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-blog",{attrs:{posts:t.blogPosts}})],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-consultation",{staticClass:"help-EU",attrs:{title:t.consultationTitle}})],1)],1),t._v(" "),n("LazyHydrate",{attrs:{"when-visible":""}},[n("app-footer",{attrs:{data:t.footer,breadcrumbs:t.breadcrumbs,phones:t.phones}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"what__block pos-r c-before c-after blk-block blk-block-EU lazy-bg"},[n("div",{staticClass:"container flex fw-w jc-fe"},[n("div",{staticClass:"what__item pos-r c-after w33 w50-md w100-esm"},[n("p",[t._v("Консультация по всем вопросам таможенного оформления и оптимизации налогообложения")])]),t._v(" "),n("div",{staticClass:"what__item pos-r c-after w33 w50-md w100-esm"},[n("p",[t._v("Оформление предварительной декларации (ПД)")])]),t._v(" "),n("div",{staticClass:"what__item pos-r c-after w33 w50-md w100-esm"},[n("p",[t._v("Декларирование автомобиля таможенным органам")])]),t._v(" "),n("div",{staticClass:"what__item pos-r c-after w33 w50-md w100-esm"},[n("p",[t._v("Расчет таможенных платежей (с учетом данных каталога schwacke и таможенных оформлений аналогичных авто)")])]),t._v(" "),n("div",{staticClass:"what__item pos-r c-after w33 w50-md w100-esm"},[n("p",[t._v("Получение документов о соответствии автомобиля экологическим нормам ЕВРО 2-6")])]),t._v(" "),n("div",{staticClass:"what__item pos-r c-after w33 w50-md w100-esm"},[n("p",[t._v("Представление интересов клиента на всех этапах таможенного оформления")])])])])}],!1,null,"4ef4789e",null);e.default=component.exports}}]);