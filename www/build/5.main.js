webpackJsonp([5],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_details__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDetailsPageModule", function() { return SiteDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SiteDetailsPageModule = (function () {
    function SiteDetailsPageModule() {
    }
    return SiteDetailsPageModule;
}());
SiteDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__site_details__["a" /* SiteDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_details__["a" /* SiteDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__site_details__["a" /* SiteDetailsPage */]
        ]
    })
], SiteDetailsPageModule);

//# sourceMappingURL=site-details.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(318);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_sites__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__sites_sites__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_editor__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__editor_editor__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 318:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteDetailsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteDetailsPage = (function () {
    function SiteDetailsPage(navCtrl, navParams, toastCtrl, sitesService, editorService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.sitesService = sitesService;
        this.editorService = editorService;
        var key = this.navParams.data.id;
        this.sitesService.fetchById(key).subscribe(function (data) {
            _this.site = data;
            _this.loadEditor(_this.site.editor_id);
        });
    }
    SiteDetailsPage.prototype.presentToast = function (msg) {
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
    SiteDetailsPage.prototype.loadEditor = function (editorId) {
        var _this = this;
        this.editorService.fetchById(editorId)
            .subscribe(function (data) {
            _this.editor = data;
            console.log(_this.editor.name);
        });
    };
    SiteDetailsPage.prototype.isUndefined = function (val) { return typeof val === 'undefined'; };
    SiteDetailsPage.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.sitesService.update(this.site.$key, value)
            .then(function (_) {
            _this.presentToast('Site updated successfully');
            _this.navCtrl.pop();
        })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    SiteDetailsPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return SiteDetailsPage;
}());
SiteDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'site-details',
        segment: 'site/details/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-site-details',template:/*ion-inline-start:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/site-details/site-details.html"*/'<!--\n  Generated template for the SitesDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit Site</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form novalidate (ngSubmit)="onSubmit(f)" #f="ngForm" *ngIf="site">\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary" stacked>Name</ion-label>\n        <ion-input type="text" \n          name="title" \n          [(ngModel)]="site.title" \n          #siteName=\'ngModel\'\n          required>\n        </ion-input>\n      </ion-item>\n        <div *ngIf="siteName.errors?.required && siteName.touched" class="error">\n          Name is required\n        </div>\n      <ion-item>\n        <ion-label color="primary" stacked>URL</ion-label>\n        <ion-input type="url" name="url" [(ngModel)]="site.url">\n        </ion-input>\n      </ion-item>\n      <ion-item *ngIf="(editor && editor.name)">\n        <ion-label color="primary" stacked>Editor</ion-label>\n        <ion-input type="text" \n          disabled="true"\n          [ngModel]="editor.name"\n          [ngModelOptions]="{standalone: true}">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button \n          type="submit" \n          [disabled]="f.invalid"\n          block>Save</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button \n          type="button"\n          (click)="cancel()" \n          color="light" \n          block>Cancel</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/site-details/site-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* SitesProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* EditorProvider */]])
], SiteDetailsPage);

//# sourceMappingURL=site-details.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map