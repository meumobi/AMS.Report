webpackJsonp([3],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sites_report__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesReportPageModule", function() { return SitesReportPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SitesReportPageModule = (function () {
    function SitesReportPageModule() {
    }
    return SitesReportPageModule;
}());
SitesReportPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sites_report__["a" /* SitesReportPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sites_report__["a" /* SitesReportPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sites_report__["a" /* SitesReportPage */]
        ]
    })
], SitesReportPageModule);

//# sourceMappingURL=sites-report.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesReportPage; });
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
 * Generated class for the SitesReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SitesReportPage = (function () {
    function SitesReportPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.site = this.navParams.data.site;
        var query = {};
        if (this.site) {
            query.orderByChild = 'date';
            query.startAt = "2017-03-02";
            query.endAt = "2017-03-04";
        }
        this.reports = db.list('/reports/' + this.site.title, { query: query });
    }
    SitesReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SitesReportPage');
    };
    return SitesReportPage;
}());
SitesReportPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'sites-report',
        segment: 'report/:id'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-sites-report',template:/*ion-inline-start:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/sites-report/sites-report.html"*/'<!--\n  Generated template for the SitesReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sites-report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label>FORMAT</ion-label>\n			<ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n				<ion-option value="bacon" selected="true">1600 x 1000</ion-option>\n				<ion-option value="olives">300 x 250</ion-option>\n				<ion-option value="xcheese" selected="true">970 x 250</ion-option>\n				<ion-option value="peppers">728 x 90</ion-option>\n				<ion-option value="mushrooms">300 x 600</ion-option>\n				<ion-option value="onions">320 x 50</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label>POSITION</ion-label>\n			<ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n				<ion-option value="bacon" selected="true">Haut</ion-option>\n				<ion-option value="olives">Bas</ion-option>\n				<ion-option value="xcheese" selected="true">STF</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label>Start Date</ion-label>\n			<ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="startDate"></ion-datetime>\n		</ion-item>\n		<ion-item>\n			<ion-label>End Date</ion-label>\n			<ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="endDate"></ion-datetime>\n		</ion-item>\n	</ion-list>\n	<button ion-button full>Apply</button>\n\n  <ion-list>\n    <ion-item *ngFor="let raw of reports | async">\n      {{raw.date}} | {{raw.site}} | {{raw.revenu}} | {{raw.fillRate}} | {{raw.inventaire}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/victor/Dvpt/PROJECTS/ion-ams-report/src/pages/sites-report/sites-report.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], SitesReportPage);

var _a, _b, _c;
//# sourceMappingURL=sites-report.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map