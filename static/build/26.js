webpackJsonp([26],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__forgot_password__["a" /* ForgotPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__forgot_password__["a" /* ForgotPasswordPage */]
            ]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, database, toastCtrl, formBuilder, utils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.emailForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
        this.codeForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
        });
        this.passwordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            passwordConfirmation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
        this.passwordForm.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.passwordForm.valid;
        });
        this.isReadyToSave = this.passwordForm.valid;
    }
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        this.database.forgotPassword(this.emailForm.value).then(function (user) {
            if (user) {
                _this.codeForm.controls.email.setValue(_this.emailForm.controls.email.value);
                _this.msg = "Um código de 4 dígitos foi enviado para: " + _this.emailForm.controls.email.value + ". Insira o código abaixo para continuar:";
            }
            else {
                _this.utils.showToast("Usuário não encontrado", "error");
            }
        }).catch(function (e) {
            if (e.status == 422) {
                _this.utils.showToast("Usuário não encontrado", "error");
            }
            else {
                _this.utils.showToast(e.message, "error");
            }
        });
    };
    ForgotPasswordPage.prototype.validateCode = function () {
        var _this = this;
        this.database.validateCode(this.codeForm.value).then(function (isValid) {
            if (isValid) {
                _this.passwordForm.controls.email.setValue(_this.codeForm.controls.email.value);
                _this.passwordForm.controls.passwordCode.setValue(_this.codeForm.controls.passwordCode.value);
                _this.codeConfirmed = true;
            }
            else {
                _this.utils.showToast("Código inválido", "error");
            }
        }).catch(function (e) {
            _this.utils.showToast("Não foi possível validar o código. Tente novamente mais tarde", "error");
        });
    };
    ForgotPasswordPage.prototype.updatePassword = function () {
        var _this = this;
        var password = this.passwordForm.controls.password.value;
        var passwordConfirmation = this.passwordForm.controls.passwordConfirmation.value;
        if (passwordConfirmation && passwordConfirmation == password) {
            this.database.updatePassword(this.passwordForm.value).then(function (isValid) {
                if (isValid) {
                    _this.utils.showToast("Sua senha foi alterada com sucesso!", "success");
                    _this.database.login(_this.passwordForm.value).then(function (user) {
                        if (user) {
                            if (user.profileCompleted) {
                                _this.navCtrl.setRoot("HomePage");
                            }
                            else {
                                _this.navCtrl.setRoot('ProfileEditPage');
                            }
                        }
                    });
                }
            }).catch(function (e) {
                _this.utils.showToast("Não foi possível validar o código. Tente novamente mais tarde", "error");
            });
        }
        else {
            this.utils.showToast("As senhas digitadas são diferentes", "error");
        }
    };
    ForgotPasswordPage.prototype.back = function () {
        this.navCtrl.push('LoginPage');
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Recuperar senha</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form *ngIf="emailForm && !msg" [formGroup]="emailForm" (ngSubmit)="forgotPassword()">\n    <ion-item>\n      <ion-label stacked>Digite seu email</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <div>\n      <button ion-button color="primary" block [disabled]="!emailForm.controls.email.value">CONTINUAR</button>\n    </div>\n  </form>\n  <form *ngIf="codeForm && msg && !codeConfirmed" [formGroup]="codeForm" (ngSubmit)="validateCode()">\n    <br>\n    <br>\n    <h6 class="text-center">{{msg}}</h6>\n    <br>\n    <ion-item>\n      <ion-label stacked>Digite o código recebido no seu email:</ion-label>\n      <ion-input type="text" formControlName="passwordCode"></ion-input>\n    </ion-item>\n    <div>\n      <button ion-button color="primary" block [disabled]="!codeForm.controls.passwordCode.value || codeForm.controls.passwordCode.value.length != 4">VALIDAR CÓDIGO</button>\n    </div>\n  </form>\n  <form *ngIf="passwordForm && msg && codeConfirmed" [formGroup]="passwordForm" (ngSubmit)="updatePassword()">\n    <ion-item>\n      <ion-label stacked>Digite sua nova senha:</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Confirme sua nova senha:</ion-label>\n      <ion-input type="password" formControlName="passwordConfirmation"></ion-input>\n    </ion-item>\n    <div>\n      <button ion-button color="primary" block [disabled]="!isReadyToSave">CONTINUAR</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/forgot-password/forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Database */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=26.js.map