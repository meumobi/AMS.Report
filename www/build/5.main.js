webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editors_details__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorsDetailsPageModule", function() { return EditorsDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditorsDetailsPageModule = (function () {
    function EditorsDetailsPageModule() {
    }
    return EditorsDetailsPageModule;
}());
EditorsDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editors_details__["a" /* EditorsDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editors_details__["a" /* EditorsDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__editors_details__["a" /* EditorsDetailsPage */]
        ]
    })
], EditorsDetailsPageModule);

//# sourceMappingURL=editors-details.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorsDetailsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorsDetailsPage = (function () {
    function EditorsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.editor = { name: '' };
        if (this.navParams.data.editor) {
            this.editor = this.navParams.data.editor;
            console.log('Editor: ' + this.editor.name);
        }
    }
    EditorsDetailsPage.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    EditorsDetailsPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return EditorsDetailsPage;
}());
EditorsDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'editors-details',
        segment: 'editors/details/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-editors-details',template:/*ion-inline-start:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/editors-details/editors-details.html"*/'<!--\n  Generated template for the EditorsDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editors-details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form novalidate (ngSubmit)="onSubmit(f)" #f="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label color="primary" stacked>Name</ion-label>\n        <ion-input type="text" name="name" [(ngModel)]="editor.name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Siret</ion-label>\n        <ion-input type="number" name="siret" [(ngModel)]="editor.siret">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>RCS</ion-label>\n        <ion-input type="text" name="rcs" [(ngModel)]="editor.rcs">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>TVA intracommunautaire</ion-label>\n        <ion-input type="text" name="tva" [(ngModel)]="editor.tva">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Address</ion-label>\n        <ion-input type="text" name="address" [(ngModel)]="editor.address">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>City</ion-label>\n        <ion-input type="text" name="city" [(ngModel)]="editor.city">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Zip Code</ion-label>\n        <ion-input type="text" name="zip" [(ngModel)]="editor.zip">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n      <ion-row responsive-sm>\n    <ion-col>\n      <button ion-button (click)="onSubmit(f)" type="submit" block>Save</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="cancel()" color="light" block>Cancel</button>\n    </ion-col>\n  </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/editors-details/editors-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], EditorsDetailsPage);

//# sourceMappingURL=editors-details.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map