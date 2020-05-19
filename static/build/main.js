webpackJsonp([32],{104:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(1),n(51);var o=function(){function e(e,t){this.alertCtrl=e,this.toastCtrl=t}return e.prototype.showConfirm=function(e){this.alertCtrl.create({title:"Tem certeza disso?",message:"Essa é uma plataforma colaborativa e essa mudança vai valer para todos os usuários.",buttons:[{text:"Cancelar"},{text:"Continuar",handler:e}]}).present()},e.prototype.showToast=function(e,t){this.toastCtrl.create({message:e,duration:3e3,position:"bottom",cssClass:t}).present()},e}()},105:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(1);var o=n(76),l=(n(68),function(){function e(e,t){this.http=e,this.database=t,this.url="https://www.redeagroflorestal.com.br/",this.loading=!1}return e.prototype.fileUpload=function(e,t){var n=new FormData;if(n.append("image",e,e.name),t)for(var l in t)n.append(l,t[l]);console.log(this.database.httpHeaders());var a=new o.i("POST",this.url+"api/uploads/images",n,{headers:this.database.httpHeaders()});return this.http.request(a)},e.prototype.setPreview=function(e,t){var n=this.imageUrl(e,t);this.preview=n},e.prototype.imageUrl=function(e,t){return"string"==typeof e&&e.startsWith("http")?encodeURI(e):e&&e.url?e.url.startsWith("http")?encodeURI(e.url):encodeURI(this.url+(t&&e[t]?e[t]:e.medium)):void 0},e.prototype.processWebImage=function(e,t){var n=this;this.loading=!0,this.fileUpload(e.target.files[0]).subscribe(function(e){e.body&&(n.loading=!1,n.setPreview(e.body,"medium"),t.patchValue({picture:e.body}))},function(e){n.loading=!1})},e.prototype.get=function(e,t,n){if(n||(n={params:new o.h}),t){n.params=new o.h;for(var l in t)n.params=n.params.set(l,t[l])}return this.http.get(this.url+e,n)},e.prototype.post=function(e,t,n){return this.http.post(this.url+e,t,n)},e.prototype.put=function(e,t,n){return this.http.put(this.url+e,t,n)},e.prototype.delete=function(e,t){return this.http.delete(this.url+e,t)},e.prototype.patch=function(e,t,n){return this.http.patch(this.url+e,t,n)},e}())},163:function(e,t,n){"use strict";var o=n(1),l=n(0),a=(n(15),function(){return function(){this.placeholderActive=!0}}()),r=n(60),i=function(){function e(e,t,n){this.el=e,this.imgCacheService=t,this.renderer=n,this.source="",this.loaded=new l.n}return e.prototype.ngOnInit=function(){var e=this,t=this.el.nativeElement;console.log("ELEMENT: ",t),console.log("SRC: ",this.source),this.loadListener=this.renderer.listen(t,"load",function(){e.renderer.addClass(t,"loaded"),e.loaded.emit()}),this.errorListener=this.renderer.listen(t,"error",function(){t.remove()}),this.renderer.setAttribute(t,"src",this.source),this.cacheSubscription=this.imgCacheService.cache(this.source).subscribe(function(n){e.renderer.setAttribute(t,"src",n)},function(e){return console.log(e)})},e.prototype.ngOnDestroy=function(){this.loadListener(),this.errorListener(),this.cacheSubscription.unsubscribe()},e}(),u=function(){function e(e){}return t=e,e.forRoot=function(){return{ngModule:t,providers:[r.a]}},e=t=Object(o.__decorate)([Object(o.__param)(0,Object(l.y)()),Object(o.__param)(0,Object(l.I)())],e);var t}(),s=n(263);n.d(t,!1,function(){return r.a}),n.d(t,!1,function(){return u}),n.d(t,!1,function(){return a}),n.d(t,!1,function(){return i}),n.d(t,!1,function(){return s.a})},166:function(e,t,n){"use strict";n(105);var o=n(195);n.d(t,"a",function(){return o.a});n(68)},167:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(1),n(171);var o=function(){return function(){}}()},171:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(1);var o=n(0),l=(n(163),function(){function e(e,t,n){this.el=e,this.imgCacheService=t,this.renderer=n,this.source="",this.noitem="",this.loaded=new o.n}return e.prototype.ngOnInit=function(){var e=this,t=this.el.nativeElement;this.loadListener=this.renderer.listen(t,"load",function(){e.renderer.addClass(t,"loaded"),e.loaded.emit()}),this.errorListener=this.renderer.listen(t,"error",function(){}),this.source||(this.source=this.noitem||"assets/img/logo.png"),this.renderer.setAttribute(t,"src",this.source)},e.prototype.ngOnDestroy=function(){this.loadListener(),this.errorListener(),this.cacheSubscription&&this.cacheSubscription.unsubscribe()},e}())},195:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(1);var o=function(){function e(e,t){this.storage=e,this.SETTINGS_KEY="_settings",this._defaults=t}return e.prototype.load=function(){var e=this;return this.storage.get(this.SETTINGS_KEY).then(function(t){return t?(e.settings=t,e._mergeDefaults(e._defaults)):e.setAll(e._defaults).then(function(t){e.settings=t})})},e.prototype._mergeDefaults=function(e){for(var t in e)t in this.settings||(this.settings[t]=e[t]);return this.setAll(this.settings)},e.prototype.merge=function(e){for(var t in e)this.settings[t]=e[t];return this.save()},e.prototype.setValue=function(e,t){return this.settings[e]=t,this.storage.set(this.SETTINGS_KEY,this.settings)},e.prototype.setAll=function(e){return this.storage.set(this.SETTINGS_KEY,e)},e.prototype.getValue=function(e){return this.storage.get(this.SETTINGS_KEY).then(function(t){return t[e]})},e.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(e.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),e}()},206:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=206},237:function(e,t,n){function o(e){var t=l[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var l={"../pages/about/about.module.ngfactory":[410,28],"../pages/cards/cards.module.ngfactory":[411,27],"../pages/content/content.module.ngfactory":[412,26],"../pages/csas/csas.module.ngfactory":[414,25],"../pages/donate/donate.module.ngfactory":[413,24],"../pages/feed/feed.module.ngfactory":[415,5],"../pages/forgot-password/forgot-password.module.ngfactory":[416,20],"../pages/forum/forum.module.ngfactory":[417,10],"../pages/guide-form/guide-form.module.ngfactory":[418,3],"../pages/guide/guide.module.ngfactory":[419,13],"../pages/guides/guides.module.ngfactory":[421,18],"../pages/home/home.module.ngfactory":[420,8],"../pages/how-to-help/how-to-help.module.ngfactory":[423,23],"../pages/library/library.module.ngfactory":[422,9],"../pages/login/login.module.ngfactory":[424,19],"../pages/menu/menu.module.ngfactory":[425,31],"../pages/moon-calendar/moon-calendar.module.ngfactory":[426,15],"../pages/plant-form/plant-form.module.ngfactory":[427,2],"../pages/plant/plant.module.ngfactory":[428,6],"../pages/plants/plants.module.ngfactory":[431,16],"../pages/post-form/post-form.module.ngfactory":[429,1],"../pages/post/post.module.ngfactory":[430,0],"../pages/profile-edit/profile-edit.module.ngfactory":[432,11],"../pages/profile/profile.module.ngfactory":[433,7],"../pages/register/register.module.ngfactory":[434,14],"../pages/settings/settings.module.ngfactory":[435,17],"../pages/share/share.module.ngfactory":[437,22],"../pages/tabs/tabs.module.ngfactory":[438,30],"../pages/topic-form/topic-form.module.ngfactory":[436,4],"../pages/topic/topic.module.ngfactory":[439,12],"../pages/tutorial/tutorial.module.ngfactory":[440,21],"../pages/welcome/welcome.module.ngfactory":[441,29]};o.keys=function(){return Object.keys(l)},o.id=237,e.exports=o},263:function(e,t,n){"use strict";function o(e){return e.replace(/(cdvfile|file):\/\//g,"")}n.d(t,"a",function(){return o})},281:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return i});var o="WelcomePage",l="HomePage",a="WelcomePage",r="SearchPage",i="SettingsPage"},286:function(e,t,n){"use strict";function o(e){return new F.a(e,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function l(e){return c._27(0,[(e()(),c._3(0,0,null,null,7,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(e,t,n){var o=!0;if("click"===t){o=!1!==c._15(e,2).toggle()&&o}return o},K.b,K.a)),c._2(1,1097728,[[6,4],[5,4]],0,W.a,[[8,""],D.a,c.l,c.C],null,null),c._2(2,1064960,null,0,q.a,[B.a,[2,Y.a],[2,W.a],[2,J.a]],{menuToggle:[0,"menuToggle"]},null),c._2(3,16384,null,1,X.a,[D.a,c.l,c.C,[2,z.a],[2,J.a]],null,null),c._23(603979776,6,{_buttons:1}),(e()(),c._25(-1,0,["\n              "])),(e()(),c._3(6,0,null,0,0,"img",[["src","assets/img/logo_white.png"],["style","width: 40px;"]],null,null,null,null,null)),(e()(),c._25(-1,0,["\n            "]))],function(e,t){e(t,2,0,"")},function(e,t){e(t,0,0,c._15(t,2).isHidden)})}function a(e){return c._27(0,[(e()(),c._3(0,0,null,null,2,"ion-title",[],null,null,null,$.b,$.a)),c._2(1,49152,null,0,V.a,[D.a,c.l,c.C,[2,z.a],[2,J.a]],null,null),(e()(),c._25(-1,0,["\n            Rede Agroflorestal\n          "]))],null,null)}function r(e){return c._27(0,[(e()(),c._3(0,0,null,null,20,"ion-item",[["class","menu_profile item item-block"],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,6).close()&&o}if("click"===t){o=!1!==l.profile(l.database.currentUser)&&o}return o},Q.b,Q.a)),c._2(1,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,7,{contentLabel:0}),c._23(603979776,8,{_buttons:1}),c._23(603979776,9,{_icons:1}),c._2(5,16384,null,0,ne.a,[],null,null),c._2(6,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["\n            "])),(e()(),c._3(8,0,null,0,5,"ion-avatar",[["item-start",""]],null,null,null,null,null)),c._2(9,16384,null,0,le.a,[],null,null),(e()(),c._25(-1,null,["\n              "])),(e()(),c._3(11,0,null,null,1,"img",[["img-cache",""],["noitem","assets/img/no-user.png"]],null,null,null,null,null)),c._2(12,212992,null,0,ae.a,[c.l,re.a,c.D],{source:[0,"source"],noitem:[1,"noitem"]},null),(e()(),c._25(-1,null,["\n            "])),(e()(),c._25(-1,2,["\n            "])),(e()(),c._3(15,0,null,2,1,"h2",[],null,null,null,null,null)),(e()(),c._25(16,null,["",""])),(e()(),c._25(-1,2,["\n            "])),(e()(),c._3(18,0,null,2,1,"p",[],null,null,null,null,null)),(e()(),c._25(19,null,["",""])),(e()(),c._25(-1,2,["\n          "]))],function(e,t){var n=t.component;e(t,6,0,"");e(t,12,0,n.api.imageUrl(n.database.currentUser.picture,"thumb"),"assets/img/no-user.png")},function(e,t){var n=t.component;e(t,16,0,n.database.currentUser.name);e(t,19,0,n.database.currentUser.email)})}function i(e){return c._27(0,[(e()(),c._3(0,0,null,null,125,"ion-menu",[["role","navigation"]],null,null,null,ie.b,ie.a)),c._2(1,245760,null,2,ue.a,[B.a,c.l,D.a,se.a,c.C,ce.a,de.l,ge.a,fe.a],{content:[0,"content"]},null),c._23(335544320,3,{menuContent:0}),c._23(335544320,4,{menuNav:0}),c._21(2048,[[2,4]],pe.a,null,[ue.a]),(e()(),c._25(-1,0,["\n      "])),(e()(),c._3(6,0,null,0,17,"ion-header",[],null,null,null,null,null)),c._2(7,16384,null,0,me.a,[D.a,c.l,c.C,[2,Y.a]],null,null),(e()(),c._25(-1,null,["\n        "])),(e()(),c._3(9,0,null,null,13,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,_e.b,_e.a)),c._2(10,49152,null,0,z.a,[D.a,c.l,c.C],null,null),(e()(),c._25(-1,3,["\n          "])),(e()(),c._3(12,0,null,0,6,"ion-buttons",[["left",""]],null,null,null,null,null)),c._2(13,16384,null,1,X.a,[D.a,c.l,c.C,[2,z.a],[2,J.a]],null,null),c._23(603979776,5,{_buttons:1}),(e()(),c._25(-1,null,["\n            "])),(e()(),c.Y(16777216,null,null,1,null,l)),c._2(17,16384,null,0,he.k,[c.M,c.J],{ngIf:[0,"ngIf"]},null),(e()(),c._25(-1,null,["\n          "])),(e()(),c._25(-1,3,["\n\n          "])),(e()(),c.Y(16777216,null,3,1,null,a)),c._2(21,16384,null,0,he.k,[c.M,c.J],{ngIf:[0,"ngIf"]},null),(e()(),c._25(-1,3,["\n        "])),(e()(),c._25(-1,null,["\n      "])),(e()(),c._25(-1,0,["\n\n      "])),(e()(),c._3(25,0,null,0,99,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ye.b,ye.a)),c._2(26,4374528,[[3,4]],0,be.a,[D.a,se.a,ge.a,c.l,c.C,fe.a,ce.a,c.x,[2,Y.a],[2,Pe.a]],null,null),(e()(),c._25(-1,1,["\n        "])),(e()(),c._3(28,0,null,1,95,"ion-list",[],null,null,null,null,null)),c._2(29,16384,null,0,Ce.a,[D.a,c.l,c.C,se.a,de.l,ge.a],null,null),(e()(),c._25(-1,null,["\n          "])),(e()(),c.Y(16777216,null,null,1,null,r)),c._2(32,16384,null,0,he.k,[c.M,c.J],{ngIf:[0,"ngIf"]},null),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(34,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,40).close()&&o}if("click"===t){o=!1!==l.openPage("HomePage")&&o}return o},Q.b,Q.a)),c._2(35,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,10,{contentLabel:0}),c._23(603979776,11,{_buttons:1}),c._23(603979776,12,{_icons:1}),c._2(39,16384,null,0,ne.a,[],null,null),c._2(40,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Início"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(43,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,49).close()&&o}if("click"===t){o=!1!==l.openPage("FeedPage")&&o}return o},Q.b,Q.a)),c._2(44,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,13,{contentLabel:0}),c._23(603979776,14,{_buttons:1}),c._23(603979776,15,{_icons:1}),c._2(48,16384,null,0,ne.a,[],null,null),c._2(49,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Rede"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(52,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,58).close()&&o}if("click"===t){o=!1!==l.openPage("ForumPage")&&o}return o},Q.b,Q.a)),c._2(53,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,16,{contentLabel:0}),c._23(603979776,17,{_buttons:1}),c._23(603979776,18,{_icons:1}),c._2(57,16384,null,0,ne.a,[],null,null),c._2(58,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Fórum"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(61,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,67).close()&&o}if("click"===t){o=!1!==l.openPage("PlantsPage")&&o}return o},Q.b,Q.a)),c._2(62,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,19,{contentLabel:0}),c._23(603979776,20,{_buttons:1}),c._23(603979776,21,{_icons:1}),c._2(66,16384,null,0,ne.a,[],null,null),c._2(67,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Catálogo de espécies"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(70,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,76).close()&&o}if("click"===t){o=!1!==l.openPage("LibraryPage")&&o}return o},Q.b,Q.a)),c._2(71,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,22,{contentLabel:0}),c._23(603979776,23,{_buttons:1}),c._23(603979776,24,{_icons:1}),c._2(75,16384,null,0,ne.a,[],null,null),c._2(76,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Biblioteca"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(79,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,85).close()&&o}if("click"===t){o=!1!==l.openPage("FeedPage",{category:"event"})&&o}return o},Q.b,Q.a)),c._2(80,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,25,{contentLabel:0}),c._23(603979776,26,{_buttons:1}),c._23(603979776,27,{_icons:1}),c._2(84,16384,null,0,ne.a,[],null,null),c._2(85,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Eventos"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(88,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,94).close()&&o}if("click"===t){o=!1!==l.openPage("MoonCalendarPage")&&o}return o},Q.b,Q.a)),c._2(89,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,28,{contentLabel:0}),c._23(603979776,29,{_buttons:1}),c._23(603979776,30,{_icons:1}),c._2(93,16384,null,0,ne.a,[],null,null),c._2(94,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Calendário lunar"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(97,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,103).close()&&o}if("click"===t){o=!1!==l.openPage("CsasPage")&&o}return o},Q.b,Q.a)),c._2(98,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,31,{contentLabel:0}),c._23(603979776,32,{_buttons:1}),c._23(603979776,33,{_icons:1}),c._2(102,16384,null,0,ne.a,[],null,null),c._2(103,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["CSAs"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(106,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,112).close()&&o}if("click"===t){o=!1!==l.openPage("AboutPage")&&o}return o},Q.b,Q.a)),c._2(107,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,34,{contentLabel:0}),c._23(603979776,35,{_buttons:1}),c._23(603979776,36,{_icons:1}),c._2(111,16384,null,0,ne.a,[],null,null),c._2(112,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Sobre"])),(e()(),c._25(-1,null,["\n          "])),(e()(),c._3(115,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(e,t,n){var o=!0,l=e.component;if("click"===t){o=!1!==c._15(e,121).close()&&o}if("click"===t){o=!1!==l.openPage("DonatePage")&&o}return o},Q.b,Q.a)),c._2(116,1097728,null,3,Z.a,[ee.a,D.a,c.l,c.C,[2,te.a]],null,null),c._23(335544320,37,{contentLabel:0}),c._23(603979776,38,{_buttons:1}),c._23(603979776,39,{_icons:1}),c._2(120,16384,null,0,ne.a,[],null,null),c._2(121,16384,null,0,oe.a,[B.a],{menuClose:[0,"menuClose"]},null),(e()(),c._25(-1,2,["Colabore"])),(e()(),c._25(-1,null,["\n        "])),(e()(),c._25(-1,1,["\n      "])),(e()(),c._25(-1,0,["\n\n    "]))],function(e,t){var n=t.component;e(t,1,0,c._15(t.parent,10));e(t,17,0,!n.form);e(t,21,0,n.database.currentUser);e(t,32,0,n.database.currentUser);e(t,40,0,"");e(t,49,0,"");e(t,58,0,"");e(t,67,0,"");e(t,76,0,"");e(t,85,0,"");e(t,94,0,"");e(t,103,0,"");e(t,112,0,"");e(t,121,0,"")},function(e,t){e(t,9,0,c._15(t,10)._sbPadding);e(t,25,0,c._15(t,26).statusbarPadding,c._15(t,26)._hasRefresher)})}function u(e){return c._27(0,[c._23(402653184,1,{nav:0}),(e()(),c._3(1,0,null,null,11,"ion-split-pane",[],null,null,null,null,null)),c._2(2,4341760,null,1,pe.b,[c.x,se.a,D.a,c.l,c.C],{enabled:[0,"enabled"]},null),c._23(603979776,2,{_setchildren:1}),c._21(2048,[[2,4]],pe.a,null,[pe.b]),(e()(),c._25(-1,null,["\n    "])),(e()(),c.Y(16777216,null,null,1,null,i)),c._2(7,16384,null,0,he.k,[c.M,c.J],{ngIf:[0,"ngIf"]},null),(e()(),c._25(-1,null,["\n    "])),(e()(),c._3(9,0,null,null,2,"ion-nav",[["main",""]],null,null,null,ve.b,ve.a)),c._2(10,4374528,[[1,4],["content",4]],0,we.a,[[2,Y.a],[2,Pe.a],fe.a,D.a,se.a,c.l,c.x,c.C,c.k,de.l,ke.a,[2,Fe.a],ge.a,c.m],{root:[0,"root"]},null),c._21(2048,[[2,4]],pe.a,null,[we.a]),(e()(),c._25(-1,null,["\n  "]))],function(e,t){var n=t.component;e(t,2,0,n.database.currentUser);e(t,7,0,n.database.currentUser);e(t,10,0,n.rootPage)},null)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(36),c=n(0),d=(n(1),n(76)),g=n(182),f=n(83),p=n(84),m=n(56),_=n(106),h=n(313),y=(n(51),n(190)),b=n(191),P=n(103),C=n(116),v=n(265),w=(n(283),n(266)),k=n(167),F=n(166),U=n(104),H=n(281),T=(n(163),function(){function e(e,t,n,o,l,a,r,i,u,s,c){var d=this;this.translate=e,this.config=n,this.statusBar=o,this.splashScreen=l,this.api=a,this.database=r,this.menuCtrl=i,this.storage=u,this.geolocation=s,t.ready().then(function(){d.statusBar.styleDefault(),c.initImgCache().subscribe(function(e){return console.log("init")},function(e){return console.log("fail init",e)}),d.initTranslate(),d.storage.get("currentPosition").then(function(e){e&&e.latitude||d.geolocation.getCurrentPosition().then(function(e){d.storage.set("currentPosition",{latitude:e.coords.latitude,longitude:e.coords.longitude,accuracy:e.coords.accuracy,altitude:e.coords.altitude,timestamp:e.timestamp}).catch(function(e){console.log("errr",e)})}).catch(function(e){console.log("Error getting location",e)})}),d.database.skipTour().then(function(e){e?d.database.getCurrentUser().then(function(e){d.rootPage=e?e.name?H.b:"ProfileEditPage":H.a}).catch(function(e){console.log("error getting currentUser")}):d.rootPage="TutorialPage"}).catch(function(e){console.log("error getting skipTour")}),d.splashScreen.hide()})}return e.prototype.initTranslate=function(){var e=this;this.translate.setDefaultLang("pt-br");this.translate.use("pt-br"),this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(t){e.config.set("ios","backButtonText",t.BACK_BUTTON_TEXT)})},e.prototype.logout=function(){this.nav.setRoot("WelcomePage"),this.database.logout()},e.prototype.openPage=function(e,t){this.nav.setRoot(e,t)},e.prototype.profile=function(e){this.nav.setRoot("ProfilePage",{id:e._id})},e}()),M=function(e){return new h.a(e,"./assets/i18n/",".json")},N=function(){return function(){}}(),S=n(63),E=n(268),O=n(269),L=n(270),j=n(271),x=n(272),I=n(273),R=n(274),A=n(275),G=n(276),K=n(52),W=n(26),D=n(2),q=n(112),B=n(30),Y=n(6),J=n(45),X=n(108),z=n(46),$=n(278),V=n(69),Q=n(170),Z=n(20),ee=n(18),te=n(54),ne=n(70),oe=n(121),le=n(111),ae=n(171),re=n(60),ie=n(284),ue=n(78),se=n(5),ce=n(33),de=n(8),ge=n(13),fe=n(12),pe=n(39),me=n(107),_e=n(409),he=n(15),ye=n(277),be=n(29),Pe=n(28),Ce=n(61),ve=n(285),we=n(62),ke=n(38),Fe=n(19),Ue=n(37),He=n(105),Te=n(68),Me=c._1({encapsulation:2,styles:[],data:{}}),Ne=c.Z("ng-component",T,function(e){return c._27(0,[(e()(),c._3(0,0,null,null,1,"ng-component",[],null,null,null,u,Me)),c._2(1,49152,null,0,T,[Ue.a,se.a,D.a,p.a,f.a,He.a,Te.a,B.a,m.b,P.a,re.a],null,null)],null,null)},{},{},[]),Se=n(150),Ee=n(267),Oe=n(114),Le=n(24),je=n(72),xe=n(73),Ie=n(75),Re=n(74),Ae=n(110),Ge=n(141),Ke=n(143),We=n(149),De=n(40),qe=n(147),Be=n(168),Ye=n(65),Je=n(53),Xe=n(117),ze=n(77),$e=n(155),Ve=n(152),Qe=n(115),Ze=n(195),et=n(264),tt=n(151),nt=n(148),ot=n(153),lt=c._0(N,[S.b],function(e){return c._11([c._12(512,c.k,c.W,[[8,[E.a,O.a,L.a,j.a,x.a,I.a,R.a,A.a,G.a,Ne]],[3,c.k],c.v]),c._12(5120,c.t,c._22,[[3,c.t]]),c._12(4608,he.m,he.l,[c.t,[2,he.w]]),c._12(5120,c.b,c._5,[]),c._12(5120,c.r,c._13,[]),c._12(5120,c.s,c._16,[]),c._12(4608,s.c,s.q,[he.d]),c._12(6144,c.G,null,[s.c]),c._12(4608,s.f,Se.a,[]),c._12(5120,s.d,function(e,t,n,o,l){return[new s.k(e,t),new s.o(n),new s.n(o,l)]},[he.d,c.x,he.d,he.d,s.f]),c._12(4608,s.e,s.e,[s.d,c.x]),c._12(135680,s.m,s.m,[he.d]),c._12(4608,s.l,s.l,[s.e,s.m]),c._12(5120,Ee.a,w.d,[]),c._12(5120,Ee.c,w.e,[]),c._12(4608,Ee.b,w.c,[Ee.a,Ee.c]),c._12(5120,c.E,w.f,[s.l,Ee.b,c.x]),c._12(6144,s.p,null,[s.m]),c._12(4608,c.K,c.K,[c.x]),c._12(4608,s.h,s.h,[he.d]),c._12(4608,s.i,s.i,[he.d]),c._12(4608,Oe.b,w.b,[c.E,s.b]),c._12(4608,d.k,d.q,[he.d,c.z,d.o]),c._12(4608,d.r,d.r,[d.k,d.p]),c._12(5120,d.a,function(e){return[e]},[d.r]),c._12(4608,d.n,d.n,[]),c._12(6144,d.l,null,[d.n]),c._12(4608,d.j,d.j,[d.l]),c._12(6144,d.b,null,[d.j]),c._12(4608,d.f,d.m,[d.b,c.q]),c._12(4608,d.c,d.c,[d.f]),c._12(4608,Le.y,Le.y,[]),c._12(4608,Le.e,Le.e,[]),c._12(5120,je.b,M,[d.c]),c._12(4608,xe.a,xe.b,[]),c._12(4608,Ie.b,Ie.a,[]),c._12(4608,Re.b,Re.a,[]),c._12(4608,Ae.a,Ae.a,[]),c._12(4608,Ue.a,Ue.a,[Ae.a,je.b,xe.a,Ie.b,Re.b,Ue.b,Ue.c]),c._12(4608,Ge.a,Ge.a,[fe.a,D.a]),c._12(4608,Ke.a,Ke.a,[fe.a,D.a]),c._12(4608,We.a,We.a,[]),c._12(4608,ee.a,ee.a,[]),c._12(4608,De.a,De.a,[se.a]),c._12(4608,ce.a,ce.a,[D.a,se.a,c.x,ge.a]),c._12(4608,qe.a,qe.a,[fe.a,D.a]),c._12(5120,he.h,Be.c,[he.t,[2,he.a],D.a]),c._12(4608,he.g,he.g,[he.h]),c._12(5120,Ye.b,Ye.d,[fe.a,Ye.a]),c._12(5120,Fe.a,Fe.b,[fe.a,Ye.b,he.g,Je.b,c.k]),c._12(4608,Xe.a,Xe.a,[fe.a,D.a,Fe.a]),c._12(4608,ze.a,ze.a,[fe.a,D.a]),c._12(4608,$e.a,$e.a,[fe.a,D.a,Fe.a]),c._12(4608,Ve.a,Ve.a,[D.a,se.a,ge.a,fe.a,de.l]),c._12(4608,Qe.a,Qe.a,[fe.a,D.a]),c._12(4608,ke.a,ke.a,[se.a,D.a]),c._12(5120,m.b,m.d,[m.c]),c._12(4608,U.a,U.a,[Ke.a,Qe.a]),c._12(4608,Te.a,Te.a,[m.b,se.a,d.c,U.a]),c._12(4608,He.a,He.a,[d.c,Te.a]),c._12(4608,g.a,g.a,[]),c._12(4608,f.a,f.a,[]),c._12(4608,p.a,p.a,[]),c._12(4608,y.a,y.a,[]),c._12(4608,b.a,b.a,[]),c._12(4608,P.a,P.a,[]),c._12(4608,C.a,C.a,[]),c._12(4608,re.a,re.a,[se.a,C.a]),c._12(4608,v.a,v.a,[]),c._12(5120,Ze.a,o,[m.b]),c._12(512,he.c,he.c,[]),c._12(512,c.m,et.a,[]),c._12(256,D.b,{},[]),c._12(1024,tt.a,tt.b,[]),c._12(1024,se.a,se.b,[s.b,tt.a,c.x]),c._12(1024,D.a,D.c,[D.b,se.a]),c._12(512,ge.a,ge.a,[se.a]),c._12(512,B.a,B.a,[]),c._12(512,fe.a,fe.a,[D.a,se.a,[2,B.a]]),c._12(512,de.l,de.l,[fe.a]),c._12(256,Ye.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#AboutPageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/donate/donate.module.ngfactory#DonatePageModuleNgFactory",name:"DonatePage",segment:"donate",priority:"low",defaultHistory:[]},{loadChildren:"../pages/csas/csas.module.ngfactory#CsasPageModuleNgFactory",name:"CsasPage",segment:"csas",priority:"low",defaultHistory:[]},{loadChildren:"../pages/feed/feed.module.ngfactory#FeedPageModuleNgFactory",name:"FeedPage",segment:"feed/:category/:tag",priority:"low",defaultHistory:[]},{loadChildren:"../pages/forgot-password/forgot-password.module.ngfactory#ForgotPasswordPageModuleNgFactory",name:"ForgotPasswordPage",segment:"forgot-password",priority:"low",defaultHistory:[]},{loadChildren:"../pages/forum/forum.module.ngfactory#ForumPageModuleNgFactory",name:"ForumPage",segment:"forum",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guide-form/guide-form.module.ngfactory#GuideFormPageModuleNgFactory",name:"GuideFormPage",segment:"guide-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guide/guide.module.ngfactory#GuidePageModuleNgFactory",name:"GuidePage",segment:"guide/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guides/guides.module.ngfactory#GuidesPageModuleNgFactory",name:"GuidesPage",segment:"guides",priority:"low",defaultHistory:[]},{loadChildren:"../pages/library/library.module.ngfactory#LibraryPageModuleNgFactory",name:"LibraryPage",segment:"library/:category",priority:"low",defaultHistory:[]},{loadChildren:"../pages/how-to-help/how-to-help.module.ngfactory#HowToHelpPageModuleNgFactory",name:"HowToHelpPage",segment:"how-to-help",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/moon-calendar/moon-calendar.module.ngfactory#MoonCalendarPageModuleNgFactory",name:"MoonCalendarPage",segment:"moon-calendar",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plant-form/plant-form.module.ngfactory#PlantFormPageModuleNgFactory",name:"PlantFormPage",segment:"plant-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plant/plant.module.ngfactory#PlantPageModuleNgFactory",name:"PlantPage",segment:"plant/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post-form/post-form.module.ngfactory#PostFormPageModuleNgFactory",name:"PostFormPage",segment:"post-form/:category",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post/post.module.ngfactory#PostPageModuleNgFactory",name:"PostPage",segment:"post/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plants/plants.module.ngfactory#PlantsPageModuleNgFactory",name:"PlantsPage",segment:"plants",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile-edit/profile-edit.module.ngfactory#ProfileEditPageModuleNgFactory",name:"ProfileEditPage",segment:"profile-edit",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/register/register.module.ngfactory#RegisterPageModuleNgFactory",name:"RegisterPage",segment:"register",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/topic-form/topic-form.module.ngfactory#TopicFormPageModuleNgFactory",name:"TopicFormPage",segment:"topic-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/share/share.module.ngfactory#SharePageModuleNgFactory",name:"SharePage",segment:"share",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/topic/topic.module.ngfactory#TopicPageModuleNgFactory",name:"TopicPage",segment:"topic/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),c._12(512,c.i,c.i,[]),c._12(512,nt.a,nt.a,[c.i]),c._12(1024,Je.b,Je.c,[nt.a,c.q]),c._12(1024,c.c,function(e,t,n,o,l,a,r,i,u,c,d,g,f){return[s.s(e),ot.a(t),We.b(n,o),Ve.b(l,a,r,i,u),Je.d(c,d,g,f)]},[[2,c.w],D.a,se.a,ge.a,D.a,se.a,ge.a,fe.a,de.l,D.a,Ye.a,Je.b,c.x]),c._12(512,c.d,c.d,[[2,c.c]]),c._12(131584,c.f,c.f,[c.x,c.X,c.q,c.m,c.k,c.d]),c._12(512,c.e,c.e,[c.f]),c._12(512,s.a,s.a,[[3,s.a]]),c._12(512,w.a,w.a,[]),c._12(512,d.e,d.e,[]),c._12(512,d.d,d.d,[]),c._12(512,_.a,_.a,[]),c._12(512,Le.w,Le.w,[]),c._12(512,Le.l,Le.l,[]),c._12(512,Le.u,Le.u,[]),c._12(512,Be.a,Be.a,[]),c._12(512,m.a,m.a,[]),c._12(512,k.a,k.a,[]),c._12(512,N,N,[]),c._12(256,d.o,"XSRF-TOKEN",[]),c._12(256,d.p,"X-XSRF-TOKEN",[]),c._12(256,Ue.c,void 0,[]),c._12(256,Ue.b,void 0,[]),c._12(256,S.a,T,[]),c._12(256,he.a,"/",[]),c._12(256,m.c,{name:"__redeagroflorestal",driverOrder:["indexeddb","sqlite","websql"]},[])])});Object(c.Q)(),Object(s.j)().bootstrapModuleFactory(lt)},60:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(1),n(116),n(51);var o=n(318),l=n.n(o),a=n(164),r=(n.n(a),n(280)),i=(n.n(r),n(407)),u=(n.n(i),n(263)),s=function(){function e(e,t){this.platform=e,this.file=t,this.initNotifier$=new a.ReplaySubject,l.a.options.debug=!0}return Object.defineProperty(e.prototype,"notifier$",{get:function(){return this.initNotifier$.asObservable()},enumerable:!0,configurable:!0}),e.prototype.initImgCache=function(){var e=this;return Object(i.bindCallback)(l.a.init)().pipe(Object(r.take)(1),Object(r.tap)(function(){return e.initNotifier$.next("init")}))},e.prototype.cache=function(e){var t=this;return this.notifier$.pipe(Object(r.switchMapTo)(this.isCached(e).pipe(Object(r.flatMap)(function(e){var n=e[0];return e[1]?t.getCachedFileURL(n):t.cacheFile(n)}),Object(r.flatMap)(function(e){return t.platform.is("ios")?t.normalizeURlWKWview(e):t.platform.is("cordova")||t.platform.is("android")?t.file.resolveLocalFilesystemUrl(e).then(function(e){var t=e.toURL();return console.log("Native URI: "+t),t}):e}))))},e.prototype.normalizeURlWKWview=function(e){return(Object(u.a)(this.file.applicationStorageDirectory)+"Library/files/"+Object(u.a)(e)).replace("/localhost/persistent","")},e.prototype.getCachedFileURL=function(e){return Object(i.bindCallback)(l.a.getCachedFileURL)(e).pipe(Object(r.map)(function(e){return e[1]}))},e.prototype.cacheFile=function(e){return Object(i.bindCallback)(l.a.cacheFile)(e)},e.prototype.isCached=function(e){return Object(i.bindCallback)(l.a.isCached)(e)},e}()},68:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(1);var o=n(76),l=(n(51),this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(l,a){function r(e){try{u(o.next(e))}catch(e){a(e)}}function i(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){e.done?l(e.value):new n(function(t){t(e.value)}).then(r,i)}u((o=o.apply(e,t||[])).next())})}),a=this&&this.__generator||function(e,t){function n(n){return function(r){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,l&&(a=l[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(l,n[1])).done)return a;switch(l=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,l=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){i.label=n[1];break}if(6===n[0]&&i.label<a[1]){i.label=a[1],a=n;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(n);break}a[2]&&i.ops.pop(),i.trys.pop();continue}n=t.call(e,i)}catch(e){n=[6,e],l=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,r])}}var o,l,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r},r=function(){function e(e,t,n,o){this.storage=e,this.plt=t,this.http=n,this.utils=o,this.baseUrl="https://www.redeagroflorestal.com.br/api/",this.cycles={placenta1:"Placenta 1 (Até 3 meses)",placenta2:"Placenta 2 (3 meses a 1 ano)",secundaria1:"Secundária 1 (1 a 10 anos)",secundaria2:"Secundária 2 (10 a 25 anos)",secundaria3:"Secundária 3 (25 a 50 anos)",climax:"Climax (Mais de 50 anos)"},this.stratums={baixo:"Baixo",medio:"Médio",alto:"Alto",emergente:"Emergente"}}return e.prototype.query=function(e,t){var n=this;return void 0===t&&(t={}),this.http.get(this.baseUrl+e,{params:t,headers:this.httpHeaders()}).toPromise().catch(function(e){return n.showError(e,n.utils)})},e.prototype.get=function(e,t){var n=this;return this.http.get(this.baseUrl+e+"/"+t,{headers:this.httpHeaders()}).toPromise().catch(function(e){return n.showError(e,n.utils)})},e.prototype.save=function(e,t){return t._id?this.put(e,t):(delete t._id,this.post(e,t))},e.prototype.post=function(e,t){var n=this;return this.http.post(this.baseUrl+e,t,{headers:this.httpHeaders()}).toPromise().catch(function(e){return n.showError(e,n.utils)})},e.prototype.put=function(e,t){var n=this;return this.http.put(this.baseUrl+e+"/"+t._id,t,{headers:this.httpHeaders()}).toPromise().catch(function(e){return n.showError(e,n.utils)})},e.prototype.remove=function(e,t){var n=this;return this.http.delete(this.baseUrl+e+"/"+t._id,{headers:this.httpHeaders()}).toPromise().catch(function(e){return n.showError(e,n.utils)})},e.prototype.saveProfile=function(e){var t=this;return this.http.put(this.baseUrl+"users/"+e._id,e,{headers:this.httpHeaders()}).toPromise().then(function(e){return t.currentUser.name=e.name,t.currentUser.email=e.email,t.currentUser.bio=e.bio,t.currentUser.phone=e.phone,t.currentUser.address=e.address,t.currentUser.picture=e.picture,t.currentUser.profileCompleted=e.profileCompleted,t.storage.set("currentUser",t.currentUser),t.currentUser})},e.prototype.login=function(e){var t=this;return this.http.post(this.baseUrl+"users/login",e).toPromise().then(function(e){if(e&&e._id)return t.storage.set("currentUser",e),t.currentUser=e,e})},e.prototype.forgotPassword=function(e){return this.http.post(this.baseUrl+"users/forgot_password",e).toPromise()},e.prototype.validateCode=function(e){return this.http.post(this.baseUrl+"users/validate_code",e).toPromise()},e.prototype.updatePassword=function(e){return this.http.post(this.baseUrl+"users/update_password",e).toPromise()},e.prototype.register=function(e){return l(this,void 0,void 0,function(){var t,n,o=this;return a(this,function(l){switch(l.label){case 0:return[4,this.storage.get("currentPosition")];case 1:return t=l.sent(),n=[],t&&t.latitude&&t.longitude&&(n=[Number(t.latitude),Number(t.longitude)]),e.address={location:{type:"Point",coordinates:n}},[2,this.http.post(this.baseUrl+"users/register",e).toPromise().then(function(t){if(t&&t._id)return o.login({email:e.email,password:e.password})})]}})})},e.prototype.logout=function(){return this.currentUser=void 0,this.storage.remove("currentUser")},e.prototype.getCurrentUser=function(){var e=this;return this.storage.get("currentUser").then(function(t){return e.currentUser=t,t})},e.prototype.skipTour=function(){return this.storage.get("skipTour").then(function(e){return e})},e.prototype.setSkipTour=function(e){this.storage.set("skipTour",e).then(function(e){return e})},e.prototype.httpHeaders=function(){var e=this.currentUser;return new o.g(e&&e.token?{Authorization:"Token "+this.currentUser.token}:{})},e.prototype.loadAdditionalFields=function(e){var t=this;return this.query(e).then(function(e){if(e)return t.additional_fields=e.map(function(e){return e.additional_fields}).filter(function(e){return e}),t.additional_fields=t.additional_fields.reduce(function(e,t){return e.concat(t)},[]),t.additional_fields=t.additional_fields.reduce(function(e,t){return e.concat(t.name)},[]),t.additional_fields=t.additional_fields.filter(function(e,t,n){return t===n.indexOf(e)}),t.additional_fields})},e.prototype.showError=function(e,t){t.showToast(e.error||e.message,"error")},e}()}},[286]);