webpackJsonp([17],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(273);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/register page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, fb, googlePlus, database) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.database = database;
    }
    WelcomePage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            _this.fb.api("me?fields=id,name,email,first_name,picture.width(320).height(320).as(picture_large)", []).then(function (user) {
                var metadata = { email: user.email, name: user.name, picture: user.picture_large.data.url, facebook_id: user.id };
                _this.database.login({ email: user.email, password: 'fbid_' + user.id }).then(function (resp) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
                }).catch(function (e) {
                    metadata['password'] = Math.random().toString(36).slice(-6);
                    _this.database.register(metadata).then(function (resp) {
                        if (resp) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
                        }
                    });
                });
            });
        }).catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    WelcomePage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login()
            .then(function (user) {
            _this.database.register({ type: 'user', email: user.email, name: user.displayName, picture: user.imageUrl, google_id: user.userId }).then(function (resp) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
            }).catch(function (e) {
                if (e.name == 'conflict') {
                    _this.database.login(user.email).then(function (resp) {
                        if (resp) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
                        }
                    });
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomePage.prototype.guest = function () {
        var _this = this;
        this.database.login({ email: 'convidado@redeagroflorestal.com.br', password: 'agrofloresta' }).then(function (resp) {
            if (resp) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
            }
        }).catch(function (err) {
            console.error(err);
            _this.database.register({ email: 'convidado@redeagroflorestal.com.br', password: 'agrofloresta', name: 'Convidado' }).then(function (resp) {
                if (resp) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
                }
            });
        });
    };
    WelcomePage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      <p>Rede Agroflorestal</p>\n      <p><small>Plataforma de aprendizado coletivo</small></p>\n    </div>\n  </div>\n  <div padding>\n    <button ion-button block (click)="login()" class="login">ENTRAR COM E-MAIL</button>\n    <br>\n    <button ion-button block icon-start (click)="facebookLogin()" style="background: #4267b2; padding-top: 4px; text-transform: unset;">\n      <ion-icon name="logo-facebook"></ion-icon>\n      Continue com Facebook\n    </button>\n    <button ion-button block (click)="register()" class="login">CADASTRE-SE</button>\n<!--     <button showWhen="android,ios" ion-button block icon-start (click)="googleLogin()" class="login">\n      <ion-icon name="logo-google"></ion-icon>\n      Entrar com Google\n    </button>\n -->\n    <button ion-button block (click)="guest()" class="login">ENTRAR COMO CONVIDADO</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Database */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=17.js.map