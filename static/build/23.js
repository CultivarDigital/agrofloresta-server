webpackJsonp([23],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, database, toastCtrl, formBuilder, utils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.form = formBuilder.group({
            email: ['diegomr86@gmail.com', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            password: ['']
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.isReadyToSave = this.form.valid;
    }
    LoginPage.prototype.loadUser = function () {
        var _this = this;
        this.database.loadUser(this.form.controls.email.value).then(function (user) {
            if (user) {
                _this.user = user;
            }
        }).catch(function (e) {
            if (e.status == 422 && _this.form.controls.email.value) {
                _this.doSignup();
            }
            else {
                _this.utils.showToast('Erro: ' + JSON.stringify(e), 'error');
            }
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.database.login(this.form.controls.email.value).then(function (user) {
            if (user) {
                if (user.profileCompleted) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
                }
                else {
                    _this.navCtrl.setRoot('ProfileEditPage');
                }
            }
        }).catch(function (e) {
            console.log(e);
            if (e.status == 422 && _this.form.controls.email.value) {
                _this.doSignup();
            }
            else {
                _this.utils.showToast('Erro: ' + JSON.stringify(e), 'error');
            }
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.doSignup = function () {
        var _this = this;
        this.database.signup(this.form.controls.email.value).then(function (user) {
            if (user) {
                if (user.profileCompleted) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
                }
                else {
                    _this.navCtrl.setRoot('ProfileEditPage');
                }
            }
        }).catch(function (e) {
            console.log('signup error', e);
            _this.utils.showToast('Erro: ' + JSON.stringify(e), 'error');
        });
    };
    var _a, _b, _c, _d, _e;
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Entrar</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="login()">\n    <ion-item>\n      <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <div>\n      <button ion-button color="primary" block [disabled]="!isReadyToSave">CONTINUAR</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Database */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]) === "function" ? _e : Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=23.js.map