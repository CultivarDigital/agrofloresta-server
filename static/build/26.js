webpackJsonp([26],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatePageModule", function() { return DonatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donate__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonatePageModule = /** @class */ (function () {
    function DonatePageModule() {
    }
    DonatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donate__["a" /* DonatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donate__["a" /* DonatePage */]),
            ],
        })
    ], DonatePageModule);
    return DonatePageModule;
}());

//# sourceMappingURL=donate.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the DonatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonatePage = /** @class */ (function () {
    function DonatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonatePage');
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/donate/donate.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Faça uma doação</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div>\n		<p>Esta plataforma foi criada e é mantida de forma totalmente voluntária.</p>\n		<p> Para manter os custos mensais de programação e hospedagem contamos apenas com doações. </p>\n		<p>Para ajudar você pode fazer uma doação em qualquer das contas abaixo: </p>\n		<h5>Doe com cartão de crédito, débito ou boleto:</h5>\n		<p>\n			<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HH697JKUJ45YG" target="_blank"><img src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"></a>\n		</p>\n		<br>\n		<h5>Doe com Bitcoin:</h5>\n		<p>Envie Bitcoin para o endereço abaixo:</p>\n		<p>3GxoF6jtUzjpaPWFoKjgaaZsagScCds9px</p>\n		<img src="assets/img/btc_qrcode.png">\n		<br>\n		<br>\n		<h5>Doe com Ether:</h5>\n		<p>Envie Ethereum para o endereço abaixo:</p>\n		<p>0x9f404Ad3D4a3d33A2abED35579984000de6adf10</p>\n		<img src="assets/img/eth_qrcode.png">\n		<br>\n		<br>\n	</div>	\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/donate/donate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DonatePage);
    return DonatePage;
}());

//# sourceMappingURL=donate.js.map

/***/ })

});
//# sourceMappingURL=26.js.map