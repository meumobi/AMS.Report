webpackJsonp([6],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_details__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorDetailsPageModule", function() { return EditorDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditorDetailsPageModule = (function () {
    function EditorDetailsPageModule() {
    }
    return EditorDetailsPageModule;
}());
EditorDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editor_details__["a" /* EditorDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editor_details__["a" /* EditorDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__editor_details__["a" /* EditorDetailsPage */]
        ]
    })
], EditorDetailsPageModule);

//# sourceMappingURL=editor-details.module.js.map

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

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorDetailsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorDetailsPage = (function () {
    function EditorDetailsPage(navCtrl, navParams, toastCtrl, editorService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.editorService = editorService;
        var key = this.navParams.data.id;
        this.editorService.fetchById(key).subscribe(function (data) {
            _this.editor = data;
        });
    }
    EditorDetailsPage.prototype.presentToast = function (msg) {
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
    EditorDetailsPage.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.editorService.update(this.editor.$key, value)
            .then(function (_) {
            _this.presentToast('Site updated successfully');
            _this.navCtrl.pop();
        })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    EditorDetailsPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return EditorDetailsPage;
}());
EditorDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'editor-details',
        segment: 'editor/details/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editor-details',template:/*ion-inline-start:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/editor-details/editor-details.html"*/'<!--\n  Generated template for the EditorsDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editor-details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form novalidate (ngSubmit)="onSubmit(f)" #f="ngForm" *ngIf="editor">\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary" floating>Name</ion-label>\n        <ion-input type="text" \n          name="name" \n          [(ngModel)]="editor.name"\n          #editorName=\'ngModel\'\n          required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf="editorName.errors?.required && editorName.touched" class="error">\n        Name is required\n      </div>\n      <ion-item>\n        <ion-label color="primary" floating>Siret</ion-label>\n        <ion-input type="number" name="siret" [(ngModel)]="editor.siret">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>RCS</ion-label>\n        <ion-input type="text" name="rcs" [(ngModel)]="editor.rcs">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>TVA intracommunautaire</ion-label>\n        <ion-input type="text" name="tva" [(ngModel)]="editor.tva">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Address</ion-label>\n        <ion-input type="text" name="address" [(ngModel)]="editor.address">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Extra Address Information</ion-label>\n        <ion-input type="text" name="eai" [(ngModel)]="editor.eai">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>City</ion-label>\n        <ion-input type="text" name="city" [(ngModel)]="editor.city">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Zip Code</ion-label>\n        <ion-input type="text" name="zip" [(ngModel)]="editor.zip">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n      <ion-row responsive-sm>\n    <ion-col>\n      <button ion-button type="submit" block>Save</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button type="button" (click)="cancel()" color="light" block>Cancel</button>\n    </ion-col>\n  </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/editor-details/editor-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* EditorProvider */]])
], EditorDetailsPage);

//# sourceMappingURL=editor-details.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map