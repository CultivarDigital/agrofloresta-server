webpackJsonp([16],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsPageModule", function() { return PlantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plants__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlantsPageModule = /** @class */ (function () {
    function PlantsPageModule() {
    }
    PlantsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__plants__["a" /* PlantsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__plants__["a" /* PlantsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__["a" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__plants__["a" /* PlantsPage */]
            ]
        })
    ], PlantsPageModule);
    return PlantsPageModule;
}());

//# sourceMappingURL=plants.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLoaderConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var ImageLoaderConfig = (function () {
    function ImageLoaderConfig() {
        this.debugMode = false;
        this.spinnerEnabled = true;
        this.fallbackAsPlaceholder = false;
        this.backgroundSize = 'contain';
        this.backgroundRepeat = 'no-repeat';
        this.display = 'block';
        this.width = '100%';
        this.height = '100%';
        this.useImg = false;
        this.concurrency = 5;
        this.maxCacheSize = -1;
        this.maxCacheAge = -1;
        this.imageReturnType = 'uri';
        this.fileNameCachedWithExtension = false;
        this.fallbackFileNameCachedExtension = '.jpg';
        this._cacheDirectoryName = 'image-loader-cache';
    }
    Object.defineProperty(ImageLoaderConfig.prototype, "cacheDirectoryName", {
        get: function () {
            return this._cacheDirectoryName;
        },
        set: function (name) {
            name.replace(/\W/g, '');
            this._cacheDirectoryName = name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enables debug mode to receive console logs, errors, warnings
     */
    ImageLoaderConfig.prototype.enableDebugMode = function () {
        this.debugMode = true;
    };
    /**
     * Enable/Disable the spinner by default. Defaults to true.
     * @param enable {boolean} set to true to enable
     */
    ImageLoaderConfig.prototype.enableSpinner = function (enable) {
        this.spinnerEnabled = enable;
    };
    /**
     * Enable/Disable the fallback image as placeholder instead of the spinner. Defaults to false.
     * @param enable {boolean} set to true to enable
     */
    ImageLoaderConfig.prototype.enableFallbackAsPlaceholder = function (enable) {
        this.fallbackAsPlaceholder = enable;
    };
    /**
     * Sets the cache directory name. Defaults to 'image-loader-cache'
     * @param name {string} name of directory
     */
    ImageLoaderConfig.prototype.setCacheDirectoryName = function (name) {
        this.cacheDirectoryName = name;
    };
    /**
     * Set default height for images that are not using <img> tag
     * @param height {string} height
     */
    ImageLoaderConfig.prototype.setHeight = function (height) {
        this.height = height;
    };
    /**
     * Set default width for images that are not using <img> tag
     * @param width {string} Width
     */
    ImageLoaderConfig.prototype.setWidth = function (width) {
        this.width = width;
    };
    /**
     * Enable display mode for images that are not using <img> tag
     * @param display {string} Display mode
     */
    ImageLoaderConfig.prototype.setDisplay = function (display) {
        this.display = display;
    };
    /**
     * Use <img> tag by default
     * @param use {boolean} set to true to use <img> tag by default
     */
    ImageLoaderConfig.prototype.useImageTag = function (use) {
        this.useImg = use;
    };
    /**
     * Set default background size for images that are not using <img> tag
     * @param backgroundSize {string} Background size
     */
    ImageLoaderConfig.prototype.setBackgroundSize = function (backgroundSize) {
        this.backgroundSize = backgroundSize;
    };
    /**
     * Set background repeat for images that are not using <img> tag
     * @param backgroundRepeat {string} Background repeat
     */
    ImageLoaderConfig.prototype.setBackgroundRepeat = function (backgroundRepeat) {
        this.backgroundRepeat = backgroundRepeat;
    };
    /**
     * Set fallback URL to use when image src is undefined or did not resolve.
     * This image will not be cached. This should ideally be a locally saved image.
     * @param fallbackUrl {string} The remote or local URL of the image
     */
    ImageLoaderConfig.prototype.setFallbackUrl = function (fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
    };
    /**
     * Set the maximum number of allowed connections at the same time.
     * @param concurrency
     */
    ImageLoaderConfig.prototype.setConcurrency = function (concurrency) {
        this.concurrency = concurrency;
    };
    /**
     * Sets the maximum allowed cache size
     * @param cacheSize {number} Cache size in bytes
     */
    ImageLoaderConfig.prototype.setMaximumCacheSize = function (cacheSize) {
        this.maxCacheSize = cacheSize;
    };
    /**
     * Sets the maximum allowed cache age
     * @param cacheAge {number} Maximum cache age in milliseconds
     */
    ImageLoaderConfig.prototype.setMaximumCacheAge = function (cacheAge) {
        this.maxCacheAge = cacheAge;
    };
    /**
     * Set the return type of cached images
     * @param imageReturnType {string} The return type; either 'base64' or 'uri'
     */
    ImageLoaderConfig.prototype.setImageReturnType = function (imageReturnType) {
        this.imageReturnType = imageReturnType;
    };
    /**
     * Set the default spinnern ame
     * @param name
     */
    ImageLoaderConfig.prototype.setSpinnerName = function (name) {
        this.spinnerName = name;
    };
    /**
     * Set the default spinner color
     * @param color
     */
    ImageLoaderConfig.prototype.setSpinnerColor = function (color) {
        this.spinnerColor = color;
    };
    /**
     * Set headers options for the HttpClient transfers.
     * @param headers
     */
    ImageLoaderConfig.prototype.setHttpHeaders = function (headers) {
        this.httpHeaders = headers;
    };
    /**
     * Set options for the FileTransfer plugin
     * @param options
     * @deprecated FileTransfer plugin removed.
     */
    ImageLoaderConfig.prototype.setFileTransferOptions = function (options) {
        // do nothing, plugin deprecated.
    };
    /**
     * Enable/Disable the save filename of cached images with extension.  Defaults to false.
     * @param enable {boolean} set to true to enable
     */
    ImageLoaderConfig.prototype.setFileNameCachedWithExtension = function (enable) {
        this.fileNameCachedWithExtension = enable;
    };
    /**
     * Set fallback extension filename of cached images.  Defaults to '.jpg'.
     * @param extension {string} fallback extension (e.x .jpg)
     */
    ImageLoaderConfig.prototype.setFallbackFileNameCachedExtension = function (extension) {
        this.fallbackFileNameCachedExtension = extension;
    };
    return ImageLoaderConfig;
}());

ImageLoaderConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
ImageLoaderConfig.ctorParameters = function () { return []; };
//# sourceMappingURL=image-loader-config.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_loader_config__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__);







var ImageLoader = (function () {
    function ImageLoader(config, file, http, platform) {
        var _this = this;
        this.config = config;
        this.file = file;
        this.http = http;
        this.platform = platform;
        /**
         * Indicates if the cache service is ready.
         * When the cache service isn't ready, images are loaded via browser instead.
         * @type {boolean}
         */
        this.isCacheReady = false;
        /**
         * Indicates if this service is initialized.
         * This service is initialized once all the setup is done.
         * @type {boolean}
         */
        this.isInit = false;
        /**
         * Number of concurrent requests allowed
         * @type {number}
         */
        this.concurrency = 5;
        /**
         * Queue items
         * @type {Array}
         */
        this.queue = [];
        this.processing = 0;
        /**
         * Fast accessable Object for currently processing items
         */
        this.currentlyProcessing = {};
        this.cacheIndex = [];
        this.currentCacheSize = 0;
        this.indexed = false;
        if (!platform.is('cordova')) {
            // we are running on a browser, or using livereload
            // plugin will not function in this case
            this.isInit = true;
            this.throwWarning('You are running on a browser or using livereload, IonicImageLoader will not function, falling back to browser loading.');
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["fromEvent"])(document, 'deviceready').first().subscribe(function (res) {
                if (_this.nativeAvailable) {
                    _this.initCache();
                }
                else {
                    // we are running on a browser, or using livereload
                    // plugin will not function in this case
                    _this.isInit = true;
                    _this.throwWarning('You are running on a browser or using livereload, IonicImageLoader will not function, falling back to browser loading.');
                }
            });
        }
    }
    Object.defineProperty(ImageLoader.prototype, "nativeAvailable", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */].installed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isCacheSpaceExceeded", {
        get: function () {
            return this.config.maxCacheSize > -1 && this.currentCacheSize > this.config.maxCacheSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isWKWebView", {
        get: function () {
            return this.platform.is('ios') && window.webkit && window.webkit.messageHandlers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isIonicWKWebView", {
        get: function () {
            return this.isWKWebView && (location.host === 'localhost:8080' || window.LiveReload);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "isDevServer", {
        get: function () {
            return (window['IonicDevServer'] != undefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "canProcess", {
        /**
         * Check if we can process more items in the queue
         * @returns {boolean}
         */
        get: function () {
            return (this.queue.length > 0
                && this.processing < this.concurrency);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Preload an image
     * @param imageUrl {string} Image URL
     * @returns {Promise<string>} returns a promise that resolves with the cached image URL
     */
    ImageLoader.prototype.preload = function (imageUrl) {
        return this.getImagePath(imageUrl);
    };
    /**
     * Clears the cache
     */
    ImageLoader.prototype.clearCache = function () {
        var _this = this;
        if (!this.platform.is('cordova'))
            return;
        var clear = function () {
            if (!_this.isInit) {
                // do not run this method until our service is initialized
                setTimeout(clear.bind(_this), 500);
                return;
            }
            // pause any operations
            _this.isInit = false;
            _this.file.removeRecursively(_this.file.cacheDirectory, _this.config.cacheDirectoryName)
                .then(function () {
                if (_this.isWKWebView && !_this.isIonicWKWebView) {
                    // also clear the temp files
                    _this.file.removeRecursively(_this.file.tempDirectory, _this.config.cacheDirectoryName)
                        .catch(function (error) {
                        // Noop catch. Removing the tempDirectory might fail,
                        // as it is not persistent.
                    })
                        .then(function () {
                        _this.initCache(true);
                    });
                }
                else {
                    _this.initCache(true);
                }
            })
                .catch(_this.throwError.bind(_this));
        };
        clear();
    };
    /**
     * Gets the filesystem path of an image.
     * This will return the remote path if anything goes wrong or if the cache service isn't ready yet.
     * @param imageUrl {string} The remote URL of the image
     * @returns {Promise<string>} Returns a promise that will always resolve with an image URL
     */
    ImageLoader.prototype.getImagePath = function (imageUrl) {
        var _this = this;
        if (typeof imageUrl !== 'string' || imageUrl.length <= 0) {
            return Promise.reject('The image url provided was empty or invalid.');
        }
        return new Promise(function (resolve, reject) {
            var getImage = function () {
                if (_this.isImageUrlRelative(imageUrl)) {
                    resolve(imageUrl);
                }
                else {
                    _this.getCachedImagePath(imageUrl)
                        .then(resolve)
                        .catch(function () {
                        // image doesn't exist in cache, lets fetch it and save it
                        _this.addItemToQueue(imageUrl, resolve, reject);
                    });
                }
            };
            var check = function () {
                if (_this.isInit) {
                    if (_this.isCacheReady) {
                        getImage();
                    }
                    else {
                        _this.throwWarning('The cache system is not running. Images will be loaded by your browser instead.');
                        resolve(imageUrl);
                    }
                }
                else {
                    setTimeout(function () { return check(); }, 250);
                }
            };
            check();
        });
    };
    /**
     * Returns if an imageUrl is an relative path
     * @param imageUrl
     */
    ImageLoader.prototype.isImageUrlRelative = function (imageUrl) {
        return !/^(https?|file):\/\/\/?/i.test(imageUrl);
    };
    /**
     * Add an item to the queue
     * @param imageUrl
     * @param resolve
     * @param reject
     */
    ImageLoader.prototype.addItemToQueue = function (imageUrl, resolve, reject) {
        this.queue.push({
            imageUrl: imageUrl,
            resolve: resolve,
            reject: reject
        });
        this.processQueue();
    };
    /**
     * Processes one item from the queue
     */
    ImageLoader.prototype.processQueue = function () {
        var _this = this;
        // make sure we can process items first
        if (!this.canProcess)
            return;
        // increase the processing number
        this.processing++;
        // take the first item from queue
        var currentItem = this.queue.splice(0, 1)[0];
        if (this.currentlyProcessing[currentItem.imageUrl] === undefined) {
            this.currentlyProcessing[currentItem.imageUrl] = new Promise(function (resolve, reject) {
                // process more items concurrently if we can
                if (_this.canProcess)
                    _this.processQueue();
                // function to call when done processing this item
                // this will reduce the processing number
                // then will execute this function again to process any remaining items
                var done = function () {
                    _this.processing--;
                    _this.processQueue();
                    if (_this.currentlyProcessing[currentItem.imageUrl] !== undefined) {
                        delete _this.currentlyProcessing[currentItem.imageUrl];
                    }
                };
                var error = function (e) {
                    currentItem.reject();
                    _this.throwError(e);
                    done();
                };
                var localDir = _this.file.cacheDirectory + _this.config.cacheDirectoryName + '/';
                var fileName = _this.createFileName(currentItem.imageUrl);
                _this.http.get(currentItem.imageUrl, {
                    responseType: 'blob',
                    headers: _this.config.httpHeaders
                }).subscribe(function (data) {
                    _this.file.writeFile(localDir, fileName, data, { replace: true }).then(function (file) {
                        if (_this.isCacheSpaceExceeded) {
                            _this.maintainCacheSize();
                        }
                        _this.addFileToIndex(file).then(function () {
                            _this.getCachedImagePath(currentItem.imageUrl).then(function (localUrl) {
                                currentItem.resolve(localUrl);
                                resolve();
                                done();
                                _this.maintainCacheSize();
                            });
                        });
                    }).catch(function (e) {
                        //Could not write image
                        error(e);
                    });
                }, function (e) {
                    //Could not get image via httpClient
                    error(e);
                });
            });
        }
        else {
            //Prevented same Image from loading at the same time
            this.currentlyProcessing[currentItem.imageUrl].then(function () {
                _this.getCachedImagePath(currentItem.imageUrl).then(function (localUrl) {
                    currentItem.resolve(localUrl);
                });
            });
        }
    };
    /**
     * Initialize the cache service
     * @param replace {boolean} Whether to replace the cache directory if it already exists
     */
    ImageLoader.prototype.initCache = function (replace) {
        var _this = this;
        this.concurrency = this.config.concurrency;
        // create cache directories if they do not exist
        this.createCacheDirectory(replace)
            .catch(function (e) {
            _this.throwError(e);
            _this.isInit = true;
        })
            .then(function () { return _this.indexCache(); })
            .then(function () {
            _this.isCacheReady = true;
            _this.isInit = true;
        });
    };
    /**
     * Adds a file to index.
     * Also deletes any files if they are older than the set maximum cache age.
     * @param file {FileEntry} File to index
     * @returns {Promise<any>}
     */
    ImageLoader.prototype.addFileToIndex = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) { return file.getMetadata(resolve, reject); })
            .then(function (metadata) {
            if (_this.config.maxCacheAge > -1
                && (Date.now() - metadata.modificationTime.getTime()) > _this.config.maxCacheAge) {
                // file age exceeds maximum cache age
                return _this.removeFile(file.name);
            }
            else {
                // file age doesn't exceed maximum cache age, or maximum cache age isn't set
                _this.currentCacheSize += metadata.size;
                // add item to index
                _this.cacheIndex.push({
                    name: file.name,
                    modificationTime: metadata.modificationTime,
                    size: metadata.size
                });
                return Promise.resolve();
            }
        });
    };
    /**
     * Indexes the cache if necessary
     * @returns {any}
     */
    ImageLoader.prototype.indexCache = function () {
        var _this = this;
        this.cacheIndex = [];
        return this.file.listDir(this.file.cacheDirectory, this.config.cacheDirectoryName)
            .then(function (files) { return Promise.all(files.map(_this.addFileToIndex.bind(_this))); })
            .then(function () {
            // Sort items by date. Most recent to oldest.
            _this.cacheIndex = _this.cacheIndex.sort(function (a, b) { return a > b ? -1 : a < b ? 1 : 0; });
            _this.indexed = true;
            return Promise.resolve();
        })
            .catch(function (e) {
            _this.throwError(e);
            return Promise.resolve();
        });
    };
    /**
     * This method runs every time a new file is added.
     * It checks the cache size and ensures that it doesn't exceed the maximum cache size set in the config.
     * If the limit is reached, it will delete old images to create free space.
     */
    ImageLoader.prototype.maintainCacheSize = function () {
        var _this = this;
        if (this.config.maxCacheSize > -1 && this.indexed) {
            var maintain_1 = function () {
                if (_this.currentCacheSize > _this.config.maxCacheSize) {
                    // called when item is done processing
                    var next_1 = function () {
                        _this.currentCacheSize -= file_1.size;
                        maintain_1();
                    };
                    // grab the first item in index since it's the oldest one
                    var file_1 = _this.cacheIndex.splice(0, 1)[0];
                    if (typeof file_1 == 'undefined')
                        return maintain_1();
                    // delete the file then process next file if necessary
                    _this.removeFile(file_1.name)
                        .then(function () { return next_1(); })
                        .catch(function () { return next_1(); }); // ignore errors, nothing we can do about it
                }
            };
            maintain_1();
        }
    };
    /**
     * Remove a file
     * @param file {string} The name of the file to remove
     */
    ImageLoader.prototype.removeFile = function (file) {
        var _this = this;
        return this.file
            .removeFile(this.file.cacheDirectory + this.config.cacheDirectoryName, file)
            .then(function () {
            if (_this.isWKWebView && !_this.isIonicWKWebView) {
                return _this.file
                    .removeFile(_this.file.tempDirectory + _this.config.cacheDirectoryName, file)
                    .catch(function () {
                    // Noop catch. Removing the files from tempDirectory might fail, as it is not persistent.
                });
            }
        });
    };
    /**
     * Get the local path of a previously cached image if exists
     * @param url {string} The remote URL of the image
     * @returns {Promise<string>} Returns a promise that resolves with the local path if exists, or rejects if doesn't exist
     */
    ImageLoader.prototype.getCachedImagePath = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // make sure cache is ready
            if (!_this.isCacheReady) {
                return reject();
            }
            // if we're running with livereload, ignore cache and call the resource from it's URL
            if (_this.isDevServer) {
                return resolve(url);
            }
            // get file name
            var fileName = _this.createFileName(url);
            // get full path
            var dirPath = _this.file.cacheDirectory + _this.config.cacheDirectoryName, tempDirPath = _this.file.tempDirectory + _this.config.cacheDirectoryName;
            // check if exists
            _this.file.resolveLocalFilesystemUrl(dirPath + '/' + fileName)
                .then(function (fileEntry) {
                // file exists in cache
                if (_this.config.imageReturnType === 'base64') {
                    // read the file as data url and return the base64 string.
                    // should always be successful as the existence of the file
                    // is alreay ensured
                    _this.file
                        .readAsDataURL(dirPath, fileName)
                        .then(function (base64) {
                        base64 = base64.replace('data:null', 'data:*/*');
                        resolve(base64);
                    })
                        .catch(reject);
                }
                else if (_this.config.imageReturnType === 'uri') {
                    // now check if iOS device & using WKWebView Engine.
                    // in this case only the tempDirectory is accessible,
                    // therefore the file needs to be copied into that directory first!
                    if (_this.isIonicWKWebView) {
                        // Use Ionic normalizeUrl to generate the right URL for Ionic WKWebView
                        resolve(Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* normalizeURL */])(fileEntry.nativeURL));
                    }
                    else if (_this.isWKWebView) {
                        // check if file already exists in temp directory
                        _this.file.resolveLocalFilesystemUrl(tempDirPath + '/' + fileName)
                            .then(function (tempFileEntry) {
                            // file exists in temp directory
                            // return native path
                            resolve(tempFileEntry.nativeURL);
                        })
                            .catch(function () {
                            // file does not yet exist in the temp directory.
                            // copy it!
                            _this.file.copyFile(dirPath, fileName, tempDirPath, fileName)
                                .then(function (tempFileEntry) {
                                // now the file exists in the temp directory
                                // return native path
                                resolve(tempFileEntry.nativeURL);
                            })
                                .catch(reject);
                        });
                    }
                    else {
                        // return native path
                        resolve(fileEntry.nativeURL);
                    }
                }
            })
                .catch(reject); // file doesn't exist
        });
    };
    /**
     * Throws a console error if debug mode is enabled
     * @param args {any[]} Error message
     */
    ImageLoader.prototype.throwError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.config.debugMode) {
            args.unshift('ImageLoader Error: ');
            console.error.apply(console, args);
        }
    };
    /**
     * Throws a console warning if debug mode is enabled
     * @param args {any[]} Error message
     */
    ImageLoader.prototype.throwWarning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.config.debugMode) {
            args.unshift('ImageLoader Warning: ');
            console.warn.apply(console, args);
        }
    };
    /**
     * Check if the cache directory exists
     * @param directory {string} The directory to check. Either this.file.tempDirectory or this.file.cacheDirectory
     * @returns {Promise<boolean|FileError>} Returns a promise that resolves if exists, and rejects if it doesn't
     */
    ImageLoader.prototype.cacheDirectoryExists = function (directory) {
        return this.file.checkDir(directory, this.config.cacheDirectoryName);
    };
    /**
     * Create the cache directories
     * @param replace {boolean} override directory if exists
     * @returns {Promise<DirectoryEntry|FileError>} Returns a promise that resolves if the directories were created, and rejects on error
     */
    ImageLoader.prototype.createCacheDirectory = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        var cacheDirectoryPromise, tempDirectoryPromise;
        if (replace) {
            // create or replace the cache directory
            cacheDirectoryPromise = this.file.createDir(this.file.cacheDirectory, this.config.cacheDirectoryName, replace);
        }
        else {
            // check if the cache directory exists.
            // if it does not exist create it!
            cacheDirectoryPromise = this.cacheDirectoryExists(this.file.cacheDirectory)
                .catch(function () { return _this.file.createDir(_this.file.cacheDirectory, _this.config.cacheDirectoryName, false); });
        }
        if (this.isWKWebView && !this.isIonicWKWebView) {
            if (replace) {
                // create or replace the temp directory
                tempDirectoryPromise = this.file.createDir(this.file.tempDirectory, this.config.cacheDirectoryName, replace);
            }
            else {
                // check if the temp directory exists.
                // if it does not exist create it!
                tempDirectoryPromise = this.cacheDirectoryExists(this.file.tempDirectory)
                    .catch(function () { return _this.file.createDir(_this.file.tempDirectory, _this.config.cacheDirectoryName, false); });
            }
        }
        else {
            tempDirectoryPromise = Promise.resolve();
        }
        return Promise.all([cacheDirectoryPromise, tempDirectoryPromise]);
    };
    /**
     * Creates a unique file name out of the URL
     * @param url {string} URL of the file
     * @returns {string} Unique file name
     */
    ImageLoader.prototype.createFileName = function (url) {
        // hash the url to get a unique file name
        return this.hashString(url).toString() + (this.config.fileNameCachedWithExtension ? this.getExtensionFromFileName(url) : '');
    };
    /**
     * Converts a string to a unique 32-bit int
     * @param string {string} string to hash
     * @returns {number} 32-bit int
     */
    ImageLoader.prototype.hashString = function (string) {
        var hash = 0, char;
        if (string.length === 0)
            return hash;
        for (var i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    };
    /**
     * extract extension from filename or url
     *
     * @param filename
     * @returns {string}
     */
    ImageLoader.prototype.getExtensionFromFileName = function (filename) {
        return filename.substr((~-filename.lastIndexOf('.') >>> 0) + 1) || this.config.fallbackFileNameCachedExtension;
    };
    return ImageLoader;
}());

ImageLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
ImageLoader.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__image_loader_config__["a" /* ImageLoaderConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], },
    { type: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], },
]; };
//# sourceMappingURL=image-loader.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_image_loader__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_loader_config__ = __webpack_require__(515);



var propMap = {
    display: 'display',
    height: 'height',
    width: 'width',
    backgroundSize: 'background-size',
    backgroundRepeat: 'background-repeat'
};
var ImgLoader = (function () {
    function ImgLoader(_element, _renderer, _imageLoader, _config) {
        this._element = _element;
        this._renderer = _renderer;
        this._imageLoader = _imageLoader;
        this._config = _config;
        /**
         * Fallback URL to load when the image url fails to load or does not exist.
         */
        this.fallbackUrl = this._config.fallbackUrl;
        /**
         * Whether to show a spinner while the image loads
         */
        this.spinner = this._config.spinnerEnabled;
        /**
         * Whether to show the fallback image instead of a spinner while the image loads
         */
        this.fallbackAsPlaceholder = this._config.fallbackAsPlaceholder;
        this._useImg = this._config.useImg;
        /**
         * Attributes to pass through to img tag if _useImg == true
         */
        this.imgAttributes = [];
        /**
         * Enable/Disable caching
         * @type {boolean}
         */
        this.cache = true;
        /**
         * Width of the image. This will be ignored if using useImg.
         */
        this.width = this._config.width;
        /**
         * Height of the image. This will be ignored if using useImg.
         */
        this.height = this._config.height;
        /**
         * Display type of the image. This will be ignored if using useImg.
         */
        this.display = this._config.display;
        /**
         * Background size. This will be ignored if using useImg.
         */
        this.backgroundSize = this._config.backgroundSize;
        /**
         * Background repeat. This will be ignored if using useImg.
         */
        this.backgroundRepeat = this._config.backgroundRepeat;
        /**
         * Name of the spinner
         */
        this.spinnerName = this._config.spinnerName;
        /**
         * Color of the spinner
         */
        this.spinnerColor = this._config.spinnerColor;
        /**
         * Notify on image load..
         */
        this.load = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Indicates if the image is still loading
         * @type {boolean}
         */
        this.isLoading = true;
    }
    Object.defineProperty(ImgLoader.prototype, "useImg", {
        /**
         * Use <img> tag
         */
        set: function (val) {
            this._useImg = val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgLoader.prototype, "noCache", {
        /**
         * Convenience attribute to disable caching
         * @param val
         */
        set: function (val) {
            this.cache = val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgLoader.prototype, "src", {
        get: function () {
            return this._src;
        },
        /**
         * The URL of the image to load.
         */
        set: function (imageUrl) {
            this._src = this.processImageUrl(imageUrl);
            this.updateImage(this._src);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ImgLoader.prototype.ngOnInit = function () {
        if (this.fallbackAsPlaceholder && this.fallbackUrl) {
            this.setImage(this.fallbackUrl, false);
        }
        if (!this.src) {
            // image url was not passed
            // this can happen when [src] is set to a variable that turned out to be undefined
            // one example could be a list of users with their profile pictures
            // in this case, it would be useful to use the fallback image instead
            // if fallbackUrl was used as placeholder we do not need to set it again
            if (!this.fallbackAsPlaceholder && this.fallbackUrl) {
                // we're not going to cache the fallback image since it should be locally saved
                this.setImage(this.fallbackUrl);
            }
            else {
                this.isLoading = false;
            }
        }
    };
    ImgLoader.prototype.updateImage = function (imageUrl) {
        var _this = this;
        this._imageLoader.getImagePath(imageUrl)
            .then(function (imageUrl) { return _this.setImage(imageUrl); })
            .catch(function (error) { return _this.setImage(_this.fallbackUrl || imageUrl); });
    };
    /**
     * Gets the image URL to be loaded and disables caching if necessary
     * @returns {string}
     */
    ImgLoader.prototype.processImageUrl = function (imageUrl) {
        if (this.cache === false) {
            // need to disable caching
            if (imageUrl.indexOf('?') === -1) {
                imageUrl += '?';
            }
            if (['&', '?'].indexOf(imageUrl.charAt(imageUrl.length)) === -1) {
                imageUrl += '&';
            }
            // append timestamp at the end to make URL unique
            imageUrl += 'cache_buster=' + Date.now();
        }
        return imageUrl;
    };
    /**
     * Set the image to be displayed
     * @param imageUrl {string} image src
     * @param stopLoading {boolean} set to true to mark the image as loaded
     */
    ImgLoader.prototype.setImage = function (imageUrl, stopLoading) {
        var _this = this;
        if (stopLoading === void 0) { stopLoading = true; }
        this.isLoading = !stopLoading;
        if (this._useImg) {
            // Using <img> tag
            if (!this.element) {
                // create img element if we dont have one
                this.element = this._renderer.createElement(this._element.nativeElement, 'img');
            }
            // set it's src
            this._renderer.setElementAttribute(this.element, 'src', imageUrl);
            // if imgAttributes are defined, add them to our img element
            this.imgAttributes.forEach(function (attribute) {
                _this._renderer.setElementAttribute(_this.element, attribute.element, attribute.value);
            });
            if (this.fallbackUrl && !this._imageLoader.nativeAvailable) {
                this._renderer.listen(this.element, 'error', function () { return _this._renderer.setElementAttribute(_this.element, 'src', _this.fallbackUrl); });
            }
        }
        else {
            // Not using <img> tag
            this.element = this._element.nativeElement;
            for (var prop in propMap) {
                if (this[prop]) {
                    this._renderer.setElementStyle(this.element, propMap[prop], this[prop]);
                }
            }
            this._renderer.setElementStyle(this.element, 'background-image', 'url(\'' + (imageUrl || this.fallbackUrl) + '\')');
        }
        this.load.emit(this);
    };
    return ImgLoader;
}());

ImgLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */], args: [{
                selector: 'img-loader',
                template: '<ion-spinner *ngIf="spinner && isLoading && !fallbackAsPlaceholder" [name]="spinnerName" [color]="spinnerColor"></ion-spinner>' +
                    '<ng-content></ng-content>',
                styles: ['ion-spinner { float: none; margin-left: auto; margin-right: auto; display: block; }']
            },] },
];
/** @nocollapse */
ImgLoader.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__providers_image_loader__["a" /* ImageLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__providers_image_loader_config__["a" /* ImageLoaderConfig */], },
]; };
ImgLoader.propDecorators = {
    'fallbackUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['fallback',] },],
    'spinner': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'fallbackAsPlaceholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'useImg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'imgAttributes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */], args: ['imgAttributes',] },],
    'noCache': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'cache': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'src': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'height': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'backgroundSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'backgroundRepeat': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'spinnerName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'spinnerColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    'load': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */] },],
};
//# sourceMappingURL=img-loader.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_loader_module__ = __webpack_require__(521);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__image_loader_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_img_loader__ = __webpack_require__(519);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_loader_config__ = __webpack_require__(515);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_loader__ = __webpack_require__(518);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicImageLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_img_loader__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_image_loader__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_loader_config__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(73);







var IonicImageLoader = (function () {
    function IonicImageLoader() {
    }
    IonicImageLoader.forRoot = function () {
        return {
            ngModule: IonicImageLoader,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_image_loader_config__["a" /* ImageLoaderConfig */],
                __WEBPACK_IMPORTED_MODULE_2__providers_image_loader__["a" /* ImageLoader */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]
            ]
        };
    };
    return IonicImageLoader;
}());

IonicImageLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__components_img_loader__["a" /* ImgLoader */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */],
                    __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__components_img_loader__["a" /* ImgLoader */]
                ]
            },] },
];
/** @nocollapse */
IonicImageLoader.ctorParameters = function () { return []; };
//# sourceMappingURL=image-loader.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var first_1 = __webpack_require__(523);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var first_1 = __webpack_require__(274);
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {function(value: T, index: number): R} [resultSelector] A function to
 * produce the value on the output Observable based on the values
 * and the indices of the source Observable. The arguments passed to this
 * function are:
 * - `value`: the value that was emitted on the source.
 * - `index`: the "index" of the value from the source.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first(predicate, resultSelector, defaultValue) {
    return first_1.first(predicate, resultSelector, defaultValue)(this);
}
exports.first = first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlantsPage = /** @class */ (function () {
    function PlantsPage(navCtrl, database, api, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.Object = Object;
        this.searching = false;
        this.filters = {
            cycle: '',
            stratum: '',
            search: '',
            page: 1
        };
        this.list();
    }
    PlantsPage.prototype.list = function () {
        var _this = this;
        this.searching = true;
        this.database.query('plants', this.filters).then(function (res) {
            if (!_this.plants) {
                _this.plants = [];
            }
            _this.plants = _this.plants.concat(res);
            _this.searching = false;
        });
    };
    PlantsPage.prototype.showMore = function (infiniteScroll) {
        this.filters.page += 1;
        this.list();
        infiniteScroll.complete();
    };
    PlantsPage.prototype.search = function () {
        this.plants = [];
        this.filters.page = 1;
        this.list();
    };
    PlantsPage.prototype.add = function () {
        this.navCtrl.push('PlantFormPage');
    };
    PlantsPage.prototype.open = function (id) {
        this.navCtrl.push('PlantPage', {
            id: id
        });
    };
    PlantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plants',template:/*ion-inline-start:"/home/diego/dev/agrofloresta/src/pages/plants/plants.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Catálogo de espécies</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-searchbar [(ngModel)]="filters.search" (ionInput)="search()" placeholder="Procurar"></ion-searchbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-select [(ngModel)]="filters.cycle" (ionChange)="search()" interface="popover" >\n            <ion-option value="">Todos os ciclos</ion-option>\n            <ion-option *ngFor="let cycle of Object.keys(database.cycles)" [value]="cycle">{{database.cycles[cycle]}}</ion-option>\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-select [(ngModel)]="filters.stratum" (ionChange)="search()" interface="popover">\n            <ion-option value="">Todos os estratos</ion-option>\n            <ion-option *ngFor="let stratum of Object.keys(database.stratums)" [value]="stratum">{{database.stratums[stratum]}}</ion-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngIf="plants && plants.length == 0 && !searching" text-center padding>\n      <p>Nenhum ítem encontrado</p>\n    </div>\n    <ion-list>\n      <ion-item-sliding *ngFor="let plant of plants">\n        <button ion-item (click)="open(plant._id)">\n          <ion-avatar item-start>\n            <img img-cache [source]="this.api.imageUrl(plant.picture, \'thumb\')">\n          </ion-avatar>\n          <h2>{{plant.name}}</h2>\n          <p *ngIf="plant.scientific_name">{{plant.scientific_name}}</p>\n        </button>\n      </ion-item-sliding>\n      <ion-infinite-scroll (ionInfinite)="showMore($event)">\n       <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando espécies...">\n       </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/diego/dev/agrofloresta/src/pages/plants/plants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PlantsPage);
    return PlantsPage;
}());

//# sourceMappingURL=plants.js.map

/***/ })

});
//# sourceMappingURL=16.js.map