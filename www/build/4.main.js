webpackJsonp([4],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_list__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesListPageModule", function() { return SitesListPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SitesListPageModule = (function () {
    function SitesListPageModule() {
    }
    return SitesListPageModule;
}());
SitesListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sites_list__["a" /* SitesListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sites_list__["a" /* SitesListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sites_list__["a" /* SitesListPage */]
        ]
    })
], SitesListPageModule);

//# sourceMappingURL=sites-list.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(319);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_sites__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__sites_sites__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_editor__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__editor_editor__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(220);
/* unused harmony export AuthProvider */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(af2Auth) {
        this.af2Auth = af2Auth;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.registerUser = function (user) {
        return this.af2Auth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthProvider);

var _a;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(318);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesListPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SitesListPage = (function () {
    function SitesListPage(sitesService, editorService, navCtrl, alertCtrl, toastCtrl, actionSheetCtrl, navParams) {
        var _this = this;
        this.sitesService = sitesService;
        this.editorService = editorService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        var editorId = this.navParams.data.editor_id;
        if (editorId) {
            this.loadEditor(editorId);
        }
        else {
            this.sitesService.fetchAll()
                .subscribe(function (data) {
                _this.sites = data;
            });
        }
    }
    SitesListPage.prototype.loadSites = function (editorId) {
        var _this = this;
        this.sitesService.fetchByEditorId(editorId)
            .subscribe(function (data) {
            _this.sites = data;
        });
    };
    SitesListPage.prototype.loadEditor = function (editorId) {
        var _this = this;
        this.editorService.fetchById(editorId)
            .subscribe(function (data) {
            _this.editor = data;
            console.log(_this.editor.name);
            _this.loadSites(_this.editor.$key);
        });
    };
    SitesListPage.prototype.openSiteReport = function (site) {
        this.navCtrl.push('sites-report', {
            'id': site.$key
        });
    };
    SitesListPage.prototype.updateSite = function ($event, site) {
        $event.stopPropagation();
        this.navCtrl.push('site-details', {
            'id': site.$key
        });
    };
    SitesListPage.prototype.removeSite = function ($event, site) {
        var _this = this;
        $event.stopPropagation();
        var alert = this.alertCtrl.create({
            title: 'Confirm deletion',
            message: 'Do you want to remove this site?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.sitesService.delete(site.$key)
                            .then(function (_) {
                            _this.presentToast('Site removed successfully');
                        })
                            .catch(function (err) { return console.log(err, 'You do not have access!'); });
                    }
                }
            ]
        });
        alert.present();
    };
    SitesListPage.prototype.isUndefined = function (val) { return typeof val === 'undefined'; };
    SitesListPage.prototype.addSite = function (editorId) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Site Name',
            message: "Enter a name for this new site you're so keen on adding",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.sitesService.create(data.name, editorId)
                            .then(function (site) {
                            _this.navCtrl.push('site-details', {
                                'id': site.key
                            });
                        })
                            .catch(function (err) { return console.log(err, 'Can\'t create Site!'); });
                    }
                }
            ]
        });
        prompt.present();
    };
    SitesListPage.prototype.openSite = function ($event, site) {
        $event.stopPropagation();
        window.open(site.url);
    };
    SitesListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return SitesListPage;
}());
SitesListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'sites-list',
        segment: 'sites'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sites-list',template:/*ion-inline-start:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/sites-list/sites-list.html"*/'<!--\n  Generated template for the SitesListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="editor; else allSites">Sites of {{editor.name}}</ion-title>\n    <ng-template #allSites>\n      <ion-title>All Sites</ion-title>\n    </ng-template>\n    <ion-buttons *ngIf="editor" end>\n      <button ion-button icon-only (click)="addSite(editor.$key)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <input type="text" #editorId (change)="loadSites(editorId.value)" />\n  <ion-list>\n    <ion-item *ngFor="let site of sites" (click)="openSiteReport(site)">\n      {{site.title}}<br />\n      <small><a (click)="openSite($event, site)">{{site.url}}</a></small>\n    <button item-right (click)="removeSite($event, site)" ion-button icon-only default>\n      <ion-icon name="trash"></ion-icon>\n    </button>\n    <button item-right (click)="updateSite($event, site)" ion-button icon-only default>\n      <ion-icon name="create"></ion-icon>\n    </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/sites-list/sites-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["b" /* SitesProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* EditorProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SitesListPage);

//# sourceMappingURL=sites-list.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map