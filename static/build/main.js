webpackJsonp([31],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_cache__ = __webpack_require__(337);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__img_cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(229);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imgcache_js__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imgcache_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_imgcache_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(229);
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
 * This service is charged of provide the methods to cache the images
 */
var ImgCacheService = /** @class */ (function () {
    function ImgCacheService(platform, file) {
        this.platform = platform;
        this.file = file;
        this.initNotifier$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"]();
        // change on production mode
        __WEBPACK_IMPORTED_MODULE_3_imgcache_js___default.a.options.debug = true;
    }
    Object.defineProperty(ImgCacheService.prototype, "notifier$", {
        get: function () {
            return this.initNotifier$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Init imgCache library
     * @return {Promise}
     */
    ImgCacheService.prototype.initImgCache = function () {
        var _this = this;
        var init$ = Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback__["bindCallback"])(__WEBPACK_IMPORTED_MODULE_3_imgcache_js___default.a.init)();
        return init$.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["take"])(1), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["tap"])(function () { return _this.initNotifier$.next('init'); }));
    };
    /**
     * Cache is image by using a url. If the image is already cached this method
     * will return the URL
     * @param src {string}
     */
    ImgCacheService.prototype.cache = function (src) {
        var _this = this;
        return this.notifier$.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["switchMapTo"])(this.isCached(src)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["flatMap"])(function (_a) {
            var path = _a[0], success = _a[1];
            return success ? _this.getCachedFileURL(path) : _this.cacheFile(path);
        }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["flatMap"])(function (url) {
            if (_this.platform.is('ios')) {
                return _this.normalizeURlWKWview(url);
            }
            else if (_this.platform.is('cordova') || _this.platform.is('android')) {
                return _this.file.resolveLocalFilesystemUrl(url).then(function (entry) {
                    var nativePath = entry.toURL();
                    console.log('Native URI: ' + nativePath);
                    return nativePath;
                });
            }
            return url;
        }))));
    };
    /**
     * WKWebview doesn't accept urls with file;// or cvdfile:// protocols.
     * The url is formatted and fix to find the img
     * @param url
     * @return {string} - url formatted
     */
    ImgCacheService.prototype.normalizeURlWKWview = function (url) {
        var urlIos = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* normalizeUrlIos */])(this.file.applicationStorageDirectory) + "Library/files/" + Object(__WEBPACK_IMPORTED_MODULE_7__utils__["a" /* normalizeUrlIos */])(url);
        return urlIos.replace('/localhost/persistent', '');
    };
    /**
     * Get file URL if cached
     * @param src - image url
     */
    ImgCacheService.prototype.getCachedFileURL = function (src) {
        return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback__["bindCallback"])(__WEBPACK_IMPORTED_MODULE_3_imgcache_js___default.a.getCachedFileURL)(src)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (urls) { return urls[1]; }));
    };
    /**
     * Cache image using a url
     * @param src {string}
     */
    ImgCacheService.prototype.cacheFile = function (src) {
        return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback__["bindCallback"])(__WEBPACK_IMPORTED_MODULE_3_imgcache_js___default.a.cacheFile)(src);
    };
    /**
     * Check if image is already cached
     * @param src
     */
    ImgCacheService.prototype.isCached = function (src) {
        return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_bindCallback__["bindCallback"])(__WEBPACK_IMPORTED_MODULE_3_imgcache_js___default.a.isCached)(src);
    };
    ImgCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */]])
    ], ImgCacheService);
    return ImgCacheService;
}());

//# sourceMappingURL=img-cache.service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(334);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__database_database__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
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



var Utils = /** @class */ (function () {
    function Utils(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    Utils.prototype.showConfirm = function (onContinue) {
        var confirm = this.alertCtrl.create({
            title: 'Tem certeza disso?',
            message: 'Essa é uma plataforma colaborativa e essa mudança vai valer para todos os usuários.',
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Continuar',
                    handler: onContinue
                }
            ]
        });
        confirm.present();
    };
    Utils.prototype.showToast = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom',
            cssClass: cssClass
        });
        toast.present();
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		452,
		30
	],
	"../pages/cards/cards.module": [
		453,
		29
	],
	"../pages/content/content.module": [
		454,
		28
	],
	"../pages/csas/csas.module": [
		455,
		27
	],
	"../pages/donate/donate.module": [
		456,
		26
	],
	"../pages/feed/feed.module": [
		457,
		15
	],
	"../pages/forum/forum.module": [
		458,
		14
	],
	"../pages/guide-form/guide-form.module": [
		459,
		4
	],
	"../pages/guide/guide.module": [
		460,
		13
	],
	"../pages/guides/guides.module": [
		461,
		25
	],
	"../pages/home/home.module": [
		462,
		12
	],
	"../pages/how-to-help/how-to-help.module": [
		463,
		24
	],
	"../pages/library/library.module": [
		464,
		11
	],
	"../pages/login/login.module": [
		465,
		23
	],
	"../pages/menu/menu.module": [
		466,
		22
	],
	"../pages/moon-calendar/moon-calendar.module": [
		468,
		10
	],
	"../pages/plant-form/plant-form.module": [
		467,
		3
	],
	"../pages/plant/plant.module": [
		469,
		9
	],
	"../pages/plants/plants.module": [
		471,
		16
	],
	"../pages/post-form/post-form.module": [
		470,
		2
	],
	"../pages/post/post.module": [
		472,
		0
	],
	"../pages/profile-edit/profile-edit.module": [
		473,
		8
	],
	"../pages/profile/profile.module": [
		474,
		7
	],
	"../pages/settings/settings.module": [
		475,
		21
	],
	"../pages/share/share.module": [
		476,
		20
	],
	"../pages/signup/signup.module": [
		477,
		6
	],
	"../pages/tabs/tabs.module": [
		478,
		19
	],
	"../pages/topic-form/topic-form.module": [
		479,
		1
	],
	"../pages/topic/topic.module": [
		481,
		5
	],
	"../pages/tutorial/tutorial.module": [
		480,
		18
	],
	"../pages/welcome/welcome.module": [
		482,
		17
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(57);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Database = /** @class */ (function () {
    function Database(storage, plt, http, utils) {
        this.storage = storage;
        this.plt = plt;
        this.http = http;
        this.utils = utils;
        this.baseUrl = 'http://localhost:3000/api/';
        this.cycles = {
            placenta1: 'Placenta 1 (Até 3 meses)',
            placenta2: 'Placenta 2 (3 meses a 1 ano)',
            secundaria1: 'Secundária 1 (1 a 10 anos)',
            secundaria2: 'Secundária 2 (10 a 25 anos)',
            secundaria3: 'Secundária 3 (25 a 50 anos)',
            climax: 'Climax (Mais de 50 anos)'
        };
        this.stratums = {
            baixo: 'Baixo',
            medio: 'Médio',
            alto: 'Alto',
            emergente: 'Emergente'
        };
    }
    Database.prototype.query = function (type, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return this.http.get(this.baseUrl + type, { params: params, headers: this.httpHeaders() }).toPromise().catch(function (e) { return _this.showError(e, _this.utils); });
    };
    Database.prototype.get = function (type, id) {
        var _this = this;
        return this.http.get(this.baseUrl + type + '/' + id, { headers: this.httpHeaders() }).toPromise().catch(function (e) { return _this.showError(e, _this.utils); });
    };
    Database.prototype.save = function (type, item) {
        if (item._id) {
            return this.put(type, item);
        }
        else {
            delete item._id;
            return this.post(type, item);
        }
    };
    Database.prototype.post = function (type, item) {
        var _this = this;
        return this.http.post(this.baseUrl + type, item, { headers: this.httpHeaders() }).toPromise().catch(function (e) { return _this.showError(e, _this.utils); });
    };
    Database.prototype.put = function (type, item) {
        var _this = this;
        return this.http.put(this.baseUrl + type + '/' + item._id, item, { headers: this.httpHeaders() }).toPromise().catch(function (e) { return _this.showError(e, _this.utils); });
    };
    Database.prototype.remove = function (type, item) {
        var _this = this;
        return this.http.delete(this.baseUrl + type + '/' + item._id, { headers: this.httpHeaders() }).toPromise().catch(function (e) { return _this.showError(e, _this.utils); });
    };
    Database.prototype.saveProfile = function (item) {
        var _this = this;
        return this.put('users', item).then(function (res) {
            return _this.login(item.email);
        });
    };
    Database.prototype.signup = function (email) {
        var _this = this;
        return this.storage.get('currentPosition').then(function (position) {
            var coordinates = [];
            if (position && position.latitude && position.longitude) {
                coordinates = [Number(position.latitude), Number(position.longitude)];
            }
            return _this.post('users/register', {
                email: email,
                password: 'agrofloresta',
                address: {
                    location: {
                        type: "Point",
                        coordinates: coordinates
                    }
                }
            }).then(function (resp) {
                if (resp) {
                    return _this.login(email);
                }
            });
        });
    };
    Database.prototype.login = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.baseUrl + "users/login", { email: email, password: 'agrofloresta' }).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res && res._id) {
                            this.storage.set('currentUser', res);
                            this.currentUser = res;
                            return [2 /*return*/, res];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Database.prototype.logout = function () {
        this.currentUser = undefined;
        return this.storage.remove('currentUser');
    };
    Database.prototype.getCurrentUser = function () {
        var _this = this;
        return this.storage.get('currentUser').then(function (response) {
            _this.currentUser = response;
            return response;
        });
    };
    Database.prototype.skipTour = function () {
        return this.storage.get('skipTour').then(function (response) {
            return response;
        });
    };
    Database.prototype.setSkipTour = function (skipTour) {
        this.storage.set('skipTour', skipTour).then(function (response) {
            return response;
        });
    };
    Database.prototype.httpHeaders = function () {
        var currentUser = this.currentUser;
        if (currentUser && currentUser.token) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'Token ' + this.currentUser.token
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({});
        }
    };
    Database.prototype.loadAdditionalFields = function (type) {
        var _this = this;
        return this.query(type).then(function (docs) {
            if (docs) {
                _this.additional_fields = docs.map(function (item) { return item.additional_fields; }).filter(function (a) { return a; });
                _this.additional_fields = _this.additional_fields.reduce(function (a, b) { return a.concat(b); }, []);
                _this.additional_fields = _this.additional_fields.reduce(function (a, b) { return a.concat(b.name); }, []);
                _this.additional_fields = _this.additional_fields.filter(function (el, i, a) { return i === a.indexOf(el); });
                return _this.additional_fields;
            }
        });
    };
    Database.prototype.showError = function (e, utils) {
        utils.showToast((e.error || e.message), 'error');
    };
    var _a, _b, _c, _d;
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* Utils */]) === "function" ? _d : Object])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Component in charge of lazy load images and cache them
 */
var LazyImgComponent = /** @class */ (function () {
    function LazyImgComponent() {
        this.placeholderActive = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LazyImgComponent.prototype, "source", void 0);
    LazyImgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'op-lazy-img',
            template: "\n  <div text-center [ngClass]=\"{ 'placeholder': placeholderActive }\">\n    <img op-lazy-img-cache [source]=\"source\" (loaded)=\"placeholderActive = false\"/>\n    {{source}}\n    \n  </div>\n  ",
        })
    ], LazyImgComponent);
    return LazyImgComponent;
}());

//# sourceMappingURL=lazy-img.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoadDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_cache_service__ = __webpack_require__(116);
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
* This directive is charge of cache the images and emit a loaded event
*/
var LazyLoadDirective = /** @class */ (function () {
    function LazyLoadDirective(el, imgCacheService, renderer) {
        this.el = el;
        this.imgCacheService = imgCacheService;
        this.renderer = renderer;
        this.source = '';
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LazyLoadDirective.prototype.ngOnInit = function () {
        var _this = this;
        // get img element
        var nativeElement = this.el.nativeElement;
        console.log('ELEMENT: ', nativeElement);
        console.log('SRC: ', this.source);
        // add load listener
        this.loadListener = this.renderer.listen(nativeElement, 'load', function () {
            _this.renderer.addClass(nativeElement, 'loaded');
            _this.loaded.emit();
        });
        this.errorListener = this.renderer.listen(nativeElement, 'error', function () {
            nativeElement.remove();
        });
        this.renderer.setAttribute(nativeElement, 'src', this.source);
        // cache img and set the src to the img
        this.cacheSubscription =
            this.imgCacheService
                .cache(this.source)
                .subscribe(function (value) {
                _this.renderer.setAttribute(nativeElement, 'src', value);
            }, function (e) { return console.log(e); });
    };
    LazyLoadDirective.prototype.ngOnDestroy = function () {
        // remove listeners
        this.loadListener();
        this.errorListener();
        this.cacheSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('source') // double check
        ,
        __metadata("design:type", String)
    ], LazyLoadDirective.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LazyLoadDirective.prototype, "loaded", void 0);
    LazyLoadDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[op-lazy-img-cache]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__img_cache_service__["a" /* ImgCacheService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], LazyLoadDirective);
    return LazyLoadDirective;
}());

//# sourceMappingURL=lazy-img.directive.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url_util__ = __webpack_require__(430);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__url_util__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_cache_img_cache__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__img_cache_img_cache__["a" /* ImgCacheDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__img_cache_img_cache__["a" /* ImgCacheDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'WelcomePage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
// export const MainPage = 'PlantsPage';
var MainPage = 'HomePage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'WelcomePage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(285);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_fromEvent__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_directives_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_utils__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__global__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { LocationStrategy, PathLocationStrategy } from '@angular/common';






// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_18__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/csas/csas.module#CsasPageModule', name: 'CsasPage', segment: 'csas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donate/donate.module#DonatePageModule', name: 'DonatePage', segment: 'donate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed/:category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide-form/guide-form.module#GuideFormPageModule', name: 'GuideFormPage', segment: 'guide-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guide/guide.module#GuidePageModule', name: 'GuidePage', segment: 'guide/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guides/guides.module#GuidesPageModule', name: 'GuidesPage', segment: 'guides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/how-to-help/how-to-help.module#HowToHelpPageModule', name: 'HowToHelpPage', segment: 'how-to-help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library/:category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plant-form/plant-form.module#PlantFormPageModule', name: 'PlantFormPage', segment: 'plant-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moon-calendar/moon-calendar.module#MoonCalendarPageModule', name: 'MoonCalendarPage', segment: 'moon-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plant/plant.module#PlantPageModule', name: 'PlantPage', segment: 'plant/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-form/post-form.module#PostFormPageModule', name: 'PostFormPage', segment: 'post-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plants/plants.module#PlantsPageModule', name: 'PlantsPage', segment: 'plants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/share/share.module#SharePageModule', name: 'SharePage', segment: 'share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topic-form/topic-form.module#TopicFormPageModule', name: 'TopicFormPage', segment: 'topic-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topic/topic.module#TopicPageModule', name: 'TopicPage', segment: 'topic/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__agrofloresta',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_17__directives_directives_module__["a" /* DirectivesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_18__providers__["b" /* Database */],
                __WEBPACK_IMPORTED_MODULE_19__utils_utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_21__global__["a" /* ImgCacheService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_18__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(216);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http, database) {
        this.http = http;
        this.database = database;
        this.url = 'http://localhost:3000/';
        // url: string = 'https://www.redeagroflorestal.com.br/';
        this.loading = false;
    }
    Api.prototype.fileUpload = function (fileItem, extraData) {
        var formData = new FormData();
        formData.append('image', fileItem, fileItem.name);
        if (extraData) {
            for (var key in extraData) {
                // iterate and set other form data
                formData.append(key, extraData[key]);
            }
        }
        console.log(this.database.httpHeaders());
        var req = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpRequest */]('POST', this.url + 'api/uploads/images', formData, { headers: this.database.httpHeaders() });
        return this.http.request(req);
    };
    Api.prototype.setPreview = function (image, path) {
        var p = this.imageUrl(image, path);
        this.preview = p;
    };
    Api.prototype.imageUrl = function (picture, path) {
        if ((typeof picture) == 'string' && picture.startsWith('http')) {
            return encodeURI(picture);
        }
        else if (picture && picture['url']) {
            if (picture['url'].startsWith('http')) {
                return encodeURI(picture['url']);
            }
            else {
                return encodeURI(this.url + (path && picture[path] ? picture[path] : picture['medium']));
            }
        }
    };
    Api.prototype.processWebImage = function (event, form) {
        var _this = this;
        this.loading = true;
        this.fileUpload(event.target.files[0]).subscribe(function (event) {
            if (event.body) {
                _this.loading = false;
                _this.setPreview(event.body, 'medium');
                form.patchValue({ 'picture': event.body });
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* Database */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(57);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgCacheDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
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
* This directive is charge of cache the images and emit a loaded event
*/
var ImgCacheDirective = /** @class */ (function () {
    function ImgCacheDirective(el, imgCacheService, renderer, platform) {
        this.el = el;
        this.imgCacheService = imgCacheService;
        this.renderer = renderer;
        this.platform = platform;
        this.source = '';
        this.noitem = '';
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ImgCacheDirective.prototype.ngOnInit = function () {
        var _this = this;
        // get img element
        var nativeElement = this.el.nativeElement;
        // add load listener
        this.loadListener = this.renderer.listen(nativeElement, 'load', function () {
            _this.renderer.addClass(nativeElement, 'loaded');
            _this.loaded.emit();
        });
        this.errorListener = this.renderer.listen(nativeElement, 'error', function () {
            // nativeElement.remove();
            // this.renderer.setAttribute(nativeElement, 'src', 'assets/img/logo.png');
        });
        if (!this.source) {
            this.source = this.noitem || "assets/img/logo.png";
        }
        this.renderer.setAttribute(nativeElement, 'src', this.source);
        // cache img and set the src to the img
        if (this.platform.is('android')) {
            this.cacheSubscription =
                this.imgCacheService
                    .cache(this.source)
                    .subscribe(function (value) {
                    _this.renderer.setAttribute(nativeElement, 'src', value);
                }, function (e) { return console.log(e); });
        }
    };
    ImgCacheDirective.prototype.ngOnDestroy = function () {
        // remove listeners
        this.loadListener();
        this.errorListener();
        if (this.cacheSubscription) {
            this.cacheSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('source') // double check
        ,
        __metadata("design:type", String)
    ], ImgCacheDirective.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('noitem') // double check
        ,
        __metadata("design:type", String)
    ], ImgCacheDirective.prototype, "noitem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ImgCacheDirective.prototype, "loaded", void 0);
    ImgCacheDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[img-cache]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__global__["a" /* ImgCacheService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], ImgCacheDirective);
    return ImgCacheDirective;
}());

//# sourceMappingURL=img-cache.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_cache_module__ = __webpack_require__(338);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_cache_service__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__img_cache_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_img_component__ = __webpack_require__(217);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_img_directive__ = __webpack_require__(218);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CacheImgModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lazy_img_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_img_directive__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_cache_service__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var declarations = [
    __WEBPACK_IMPORTED_MODULE_2__lazy_img_component__["a" /* LazyImgComponent */],
    __WEBPACK_IMPORTED_MODULE_3__lazy_img_directive__["a" /* LazyLoadDirective */]
];
var CacheImgModule = /** @class */ (function () {
    function CacheImgModule(parentModule) {
    }
    CacheImgModule_1 = CacheImgModule;
    CacheImgModule.forRoot = function () {
        return {
            ngModule: CacheImgModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__img_cache_service__["a" /* ImgCacheService */]
            ]
        };
    };
    var CacheImgModule_1;
    CacheImgModule = CacheImgModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: __spreadArrays(declarations),
            exports: __spreadArrays(declarations)
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CacheImgModule])
    ], CacheImgModule);
    return CacheImgModule;
}());

//# sourceMappingURL=img-cache.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeUrlIos;
function normalizeUrlIos(url) {
    return (url).replace(/(cdvfile|file):\/\//g, '');
}
//# sourceMappingURL=url.util.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, config, statusBar, splashScreen, api, database, menuCtrl, storage, geolocation, imgCacheService) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.api = api;
        this.database = database;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.imageLoaderConfig.enableDebugMode();
            // // this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
            // this.imageLoaderConfig.setFallbackUrl('assets/img/logo.png');
            // this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
            _this.statusBar.styleDefault();
            imgCacheService.initImgCache().subscribe(function (v) { return console.log('init'); }, function (e) { return console.log('fail init', e); });
            // this.database.sync();
            _this.initTranslate();
            _this.storage.get('currentPosition').then(function (p) {
                if (!p || !p.latitude) {
                    _this.geolocation.getCurrentPosition().then(function (position) {
                        _this.storage.set('currentPosition', { latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy, altitude: position.coords.altitude, timestamp: position.timestamp }).catch(function (e) {
                            console.log('errr', e);
                        });
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                    });
                }
            });
            _this.database.skipTour().then(function (skipTour) {
                if (skipTour) {
                    _this.database.getCurrentUser().then(function (r) {
                        if (r) {
                            _this.rootPage = (r.name ? __WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */] : 'ProfileEditPage');
                        }
                        else {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
                        }
                    }).catch(function (e) {
                        console.log("error getting currentUser");
                    });
                }
                else {
                    _this.rootPage = 'TutorialPage';
                }
            }).catch(function (e) {
                console.log("error getting skipTour");
            });
            _this.splashScreen.hide();
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('pt-br');
        // const browserLang =  this.translate.getBrowserLang();
        var browserLang = false;
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('pt-br'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot('WelcomePage');
        this.database.logout();
        // this.menuCtrl.close();
    };
    MyApp.prototype.openPage = function (page, params) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page, params);
    };
    MyApp.prototype.profile = function (user) {
        this.nav.setRoot('ProfilePage', { id: user._id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-split-pane [enabled]=\"this.database.currentUser\">\n    <ion-menu [content]=\"content\" *ngIf=\"this.database.currentUser\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons left>\n            <button ion-button icon-only menuToggle *ngIf=\"!form\">\n              <img src=\"assets/img/logo_white.png\" style=\"width: 40px;\">\n            </button>\n          </ion-buttons>\n\n          <ion-title *ngIf=\"this.database.currentUser\">\n            Rede Agroflorestal\n          </ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list>\n          <ion-item menuClose *ngIf=\"this.database.currentUser\" (click)=\"profile(this.database.currentUser)\" class=\"menu_profile\">\n            <ion-avatar item-start>\n              <img img-cache [source]=\"this.api.imageUrl(this.database.currentUser.picture, 'thumb')\" noitem=\"assets/img/no-user.png\" >\n            </ion-avatar>\n            <h2>{{this.database.currentUser.name}}</h2>\n            <p>{{this.database.currentUser.email}}</p>\n          </ion-item>\n          <button menuClose ion-item (click)=\"openPage('HomePage')\">In\u00EDcio</button>\n          <button menuClose ion-item (click)=\"openPage('PlantsPage')\">Cat\u00E1logo de esp\u00E9cies</button>\n          <button menuClose ion-item (click)=\"openPage('FeedPage')\">\u00DAltimas postagens</button>\n          <button menuClose ion-item (click)=\"openPage('MoonCalendarPage')\">Calend\u00E1rio lunar</button>\n          <button menuClose ion-item (click)=\"openPage('ForumPage')\">F\u00F3rum de discuss\u00F5es</button>\n          <button menuClose ion-item (click)=\"openPage('LibraryPage')\">Biblioteca</button>\n          <button menuClose ion-item (click)=\"openPage('FeedPage', { category: 'event' })\">Eventos</button>\n          <button menuClose ion-item (click)=\"openPage('CsasPage')\">CSAs</button>\n          <button menuClose ion-item (click)=\"openPage('AboutPage')\">Sobre</button>\n          <button menuClose ion-item (click)=\"openPage('DonatePage')\">Ajude-nos</button>\n        </ion-list>\n      </ion-content>\n\n    </ion-menu>\n    <ion-nav #content main [root]=\"rootPage\"></ion-nav>\n  </ion-split-pane>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_9__global__["a" /* ImgCacheService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map