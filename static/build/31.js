webpackJsonp([31],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.openPage = function (page, params) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(page, params);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h2> Rede Agroflorestal </h2>\n<p>Plataforma de construção colaborativa de conhecimento sobre Agroflorestas.</p>\n<br>\n\n<img img-cache src="https://ipoema.org.br/wp-content/uploads/2018/08/agrofloresta.png" width="590" />\n\n<h5> Objetivo </h5>\n\nCriar uma base de dados de conhecimento coletivo sobre agrofloresta que colabore para a difusão de conhecimentos desta forma de se fazer agricultura com sustentabilidade e ofereça ferramentas que os agricultores poderão utilizar na implementação e manutenção destes sistemas.\n\n<h5> Sobre a Plataforma </h5>\n<ul>\n	<li>Responsabilidade compartilhada: Todo o conteúdo é criado, mantido e/ou alterado pela própria comunidade;</li>\n	<li>Qualquer pessoa pode criar ou alterar qualquer conteúdo (exceto comentários);</li>\n	<li>O Código fonte aberto (open source);</li>\n	<li>Informações essênciais devem estar disponíveis mesmo que o usuário não esteja conectado (offline first);</li>\n	<li>Só é permitida a veiculação de publicidade sobre cursos, atividades e publicações relacionadas à Agrofloresta;</li>\n	<li>Deve ser acessível em qualquer plataforma Web, Android e IOS;</li>\n	<li>Pode servir de base para criação de novas tecnologias relacionadas.</li>\n	<li>Disponibilizar uma api para que outras tecnologias possam usar esta base de dados.</li>\n</ul>\n\n<h5> Como colaborar </h5>\n\nVocê pode ajudar esse projeto das seguintes formas:\n\n<ul>\n	<li>Faça sua propria agrofloresta;</li>\n	<li>Crie e ajude a melhorar o conteúdo da plataforma;</li>\n	<li><a href="https://github.com/diegomr86/agrofloresta" target="_blank">Melhore o código ou design do aplicativo; </a></li>\n	<li><a href="https://github.com/diegomr86/agrofloresta/issues/new" target="_blank">Informe qualquer problema;</a></li>\n	<li><a href="https://github.com/diegomr86/agrofloresta/issues/new" target="_blank">Dê uma dica ou idéia;</a></li>\n	<!-- <li><a (click)="openPage(\'SharePage\')">Compartilhe com seus amigos</a></li> -->\n	<li><a (click)="openPage(\'DonatePage\')">Faça uma doação;</a></li>\n	<li><a href="https://diegomr86.github.io" target="_blank">Troque idéias conosco!</a></li>\n</ul>\n\n<h5> Criado por </h5>\n\n<p><img img-cache style="width: 100px" src="https://diegomr86.github.io/assets/images/profile.jpg"></p>\n<p><strong>Diego M. Rodrigues</strong></p>\n<p>Programador focado no desenvolvimento projetos de código aberto e com objetivo resolver problemas sociais e ambientais baseados na sustentabilidade.</p>\n<p>\n	<a href="https://diegomr86.github.io" target="_blank">Site</a>\n	<br>\n	<a href="mailto:diegomr86.gmail.com" target="_blank">diegomr86.gmail.com</a>\n</p>\n\n<h5> Licença </h5>\n\n<p>Este software está licenciado sobre a licença:</p>\n\n<p> <strong>Creative Commons (CC BY-NC-SA 4.0) (LICENSE)</strong> </p>\n\n<img style="width: 200px" src="https://br.creativecommons.org/wp-content/uploads/2015/04/by-nc-sa.jpg" />\n\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=31.js.map