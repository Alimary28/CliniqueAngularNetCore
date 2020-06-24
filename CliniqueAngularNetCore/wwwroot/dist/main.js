(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-medical-service/add-medical-service.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-medical-service/add-medical-service.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-medical-service works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-details/medical-service-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-details/medical-service-details.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currentMedicalService\" class=\"container\" id=\"details\">\r\n    <div class=\"jumbotron\">\r\n        <h1>{{ currentMedicalService.type }}</h1>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"card\">\r\n            <h4><b>Details:</b></h4>\r\n            <h5>Domain</h5>\r\n            <h5><b>Description: </b>{{ currentMedicalService.description }}</h5>\r\n            <h5><b>Minutes: </b>{{ currentMedicalService.minutes }}</h5>\r\n            <h5><b>Price: </b>{{ currentMedicalService.price }}</h5>\r\n            <h5><b>Doctors: </b>{{ currentMedicalService.staffs }}</h5>\r\n            <div *ngFor=\"let staff of currentMedicalService.staffs\">\r\n                <p>{{staff.position}}-{{staff.firstName}} {{staff.lastName}}<p>\r\n            </div>\r\n        </div>\r\n        <div><hr /> <button id=\"backBtn\" class=\"btn btn-primary\" type=\"button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\"></i></button></div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-list/medical-service-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-list/medical-service-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"services\">\r\n    <div class=\"jumbotron\">\r\n        <h2 id=\"tableLabel\">Medical services</h2>\r\n\r\n        <div class=\"wmx12 mx-auto grid ai-center row\">\r\n            <form id=\"search\" role=\"search\" action=\"/medical-services\" method=\"get\"\r\n                  class=\"grid--cell fl-grow1 searchbar px12 js-searchbar \" autocomplete=\"off\">\r\n                <div class=\"ps-relative\">\r\n                    <input (keyup)=\"doSearch()\" name=\"searchText\" type=\"text\" placeholder=\"Search…\" value=\"\" autocomplete=\"off\"\r\n                           maxlength=\"150\" class=\"s-input s-input__search js-search-field \" aria-label=\"Search\"\r\n                           aria-controls=\"top-search\" data-controller=\"s-popover\" data-action=\"focus->s-popover#show\"\r\n                           data-s-popover-placement=\"bottom-start\" [(ngModel)]=\"searchText\">\r\n                    <svg aria-hidden=\"true\" class=\"s-input-icon s-input-icon__search svg-icon iconSearch\" width=\"18\" height=\"18\"\r\n                         viewBox=\"0 0 18 18\">\r\n                        <path d=\"M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z\">\r\n                        </path>\r\n                    </svg>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isOpen\" class=\"row text-center\" style=\"display:flex; flex-wrap:wrap;\">\r\n        <div *ngFor=\"let service of services\" class=\"col-md-4 col-sm-6 service\" (click)=\"id = service.id\">\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4>{{ service[0].domain }}</h4>\r\n            </div>\r\n            <div *ngFor=\"let item of service\" class=\"card-body\">\r\n            <p>{{ item.type }}</p>\r\n            <p>{{ item.description | slice:0:50 }}...</p>\r\n            <p>\r\n               <a class=\"btn btn-primary\" [routerLink]=\"['/medical-service-list/', item.id]\">Details</a>\r\n            </p>\r\n            <hr/>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-medical-service/update-medical-service.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-medical-service/update-medical-service.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>update-medical-service works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container-home\">\r\n    <div id=\"landing-header\">\r\n        <h1>{{title}}</h1>\r\n        <h3>The best doctor gives the least medicines</h3>\r\n        <p>Our clinic is a full service family practice offering premium healthcare to patients of all ages.</p>\r\n        <a routerLink=\"/medical-service-list\">More info</a>\r\n    </div>\r\n\r\n    <div class=\"slideshow\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<header>\r\n    <nav id=\"nav-style\"\r\n         class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n                <i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>\r\n                Medical Clinic\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\r\n                    aria-label=\"Toggle navigation\" [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav flex-grow\">\r\n                    <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\">\r\n                        <a *appHasRole=\"['Admin']\" class=\"nav-link text-dark\" [routerLink]=\"['/clinic-staff/new']\">\r\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                            Add an employee\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\">\r\n                        <a *appHasRole=\"['Admin','Moderator']\" class=\"nav-link text-dark\" [routerLink]=\"['/medical-service/new']\">\r\n                            <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\r\n                            Add a medical service\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item mr-3\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/medical-service-list']\">\r\n                            <i class=\"fa fa-film\" aria-hidden=\"true\"></i>\r\n                            Medical services\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/appointments']\">\r\n                            <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\r\n                            Make an appointment\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li *ngIf=\"!loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">\r\n                            <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n                            Login\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <div *ngIf=\"loggedIn()\" class=\"dropdown mt-4\" dropdown>\r\n                            <a class=\"dropdown-toggle text-dark\" dropdownToggle>\r\n                                <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n                                Welcome {{loggedInUser | titlecase}}\r\n                            </a>\r\n                            <div class=\"dropdown-menu mt-4\" *dropdownMenu>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\r\n                                    <i class=\"fa fa-user\"></i> Edit Profile\r\n                                </a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\" (click)=\"logout()\">\r\n                                    <i class=\"fa fa-sign-out\"></i>Logout\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>-->\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _component_medical_service_list_medical_service_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/medical-service-list/medical-service-list.component */ "./src/app/component/medical-service-list/medical-service-list.component.ts");
/* harmony import */ var _component_medical_service_details_medical_service_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/medical-service-details/medical-service-details.component */ "./src/app/component/medical-service-details/medical-service-details.component.ts");
/* harmony import */ var _component_add_medical_service_add_medical_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/add-medical-service/add-medical-service.component */ "./src/app/component/add-medical-service/add-medical-service.component.ts");
/* harmony import */ var _component_update_medical_service_update_medical_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/update-medical-service/update-medical-service.component */ "./src/app/component/update-medical-service/update-medical-service.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
            _component_medical_service_list_medical_service_list_component__WEBPACK_IMPORTED_MODULE_9__["MedicalServiceListComponent"],
            _component_medical_service_details_medical_service_details_component__WEBPACK_IMPORTED_MODULE_10__["MedicalServiceDetailsComponent"],
            _component_add_medical_service_add_medical_service_component__WEBPACK_IMPORTED_MODULE_11__["AddMedicalServiceComponent"],
            _component_update_medical_service_update_medical_service_component__WEBPACK_IMPORTED_MODULE_12__["UpdateMedicalServiceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"] },
                { path: 'medical-service-list', component: _component_medical_service_list_medical_service_list_component__WEBPACK_IMPORTED_MODULE_9__["MedicalServiceListComponent"] },
                { path: 'medical-service-list/:id', component: _component_medical_service_details_medical_service_details_component__WEBPACK_IMPORTED_MODULE_10__["MedicalServiceDetailsComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/add-medical-service/add-medical-service.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/add-medical-service/add-medical-service.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGQtbWVkaWNhbC1zZXJ2aWNlL2FkZC1tZWRpY2FsLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/add-medical-service/add-medical-service.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/add-medical-service/add-medical-service.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddMedicalServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedicalServiceComponent", function() { return AddMedicalServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AddMedicalServiceComponent = class AddMedicalServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddMedicalServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-medical-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-medical-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-medical-service/add-medical-service.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-medical-service.component.css */ "./src/app/component/add-medical-service/add-medical-service.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AddMedicalServiceComponent);



/***/ }),

/***/ "./src/app/component/medical-service-details/medical-service-details.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/medical-service-details/medical-service-details.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tZWRpY2FsLXNlcnZpY2UtZGV0YWlscy9tZWRpY2FsLXNlcnZpY2UtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/medical-service-details/medical-service-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/medical-service-details/medical-service-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MedicalServiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalServiceDetailsComponent", function() { return MedicalServiceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_medical_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/medical-service.service */ "./src/app/services/medical-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let MedicalServiceDetailsComponent = class MedicalServiceDetailsComponent {
    constructor(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        this.medicalServiceId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();
    }
    getDetails() {
        this.service.getMedicalService(this.medicalServiceId).subscribe(result => {
            this.currentMedicalService = result;
        });
    }
    goBack() {
        this.router.navigateByUrl('/medical-service-list');
    }
};
MedicalServiceDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_medical_service_service__WEBPACK_IMPORTED_MODULE_2__["MedicalServiceService"] }
];
MedicalServiceDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-medical-service-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./medical-service-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-details/medical-service-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./medical-service-details.component.css */ "./src/app/component/medical-service-details/medical-service-details.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _services_medical_service_service__WEBPACK_IMPORTED_MODULE_2__["MedicalServiceService"]])
], MedicalServiceDetailsComponent);



/***/ }),

/***/ "./src/app/component/medical-service-list/medical-service-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/component/medical-service-list/medical-service-list.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    padding: 9px;\r\n}\r\n.services {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    /*background-size: cover;\r\n    min-width: 1024px;\r\n    width: 100%;*/\r\n}\r\n.h4 {\r\n    font-size: 20px;\r\n}\r\n.wmx12 {\r\n    max-width: 97.2307692rem !important;\r\n}\r\n.grid {\r\n    display: flex;\r\n}\r\n.mx-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n}\r\n.searchbar {\r\n    color: var(--black-800);\r\n    flex-shrink: 10000;\r\n}\r\n.fl-grow1 {\r\n    flex-grow: 1;\r\n}\r\n.px12 {\r\n    padding-left: 12px !important;\r\n    padding-right: 12px !important;\r\n}\r\n.searchbar .s-input {\r\n    border-color: #9199a1;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    color: #383f47;\r\n}\r\n.s-input.s-input__search {\r\n    padding-left: 32px;\r\n    width: 100%;\r\n}\r\n.s-input {\r\n    -webkit-appearance: none;\r\n    width: 80%;\r\n    margin: 0;\r\n    padding: .6em .7em;\r\n    border: 1px solid #9fa2a5;\r\n    border-radius: 3px;\r\n    font-size: 13px;\r\n    font-family: inherit;\r\n    line-height: 1.15384615;\r\n}\r\n.ps-relative {\r\n    position: relative !important;\r\n    display: block;\r\n    padding: 0;\r\n    border: 0;\r\n    font: inherit;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n}\r\n.jumbotron {\r\n    margin-top: 10px;\r\n    padding-top: 8px;\r\n    padding-bottom: 28px;\r\n}\r\n.s-input-icon.s-input-icon__search {\r\n    right: auto;\r\n    left: .7em;\r\n    color: var(--black-200);\r\n}\r\n.svg-icon {\r\n    vertical-align: bottom;\r\n}\r\n.s-input-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -9px;\r\n    pointer-events: none;\r\n}\r\n.svg-icon:not(.native) * {\r\n    fill: currentColor;\r\n}\r\n.jumbotron h1, p {\r\n    text-align: center;\r\n}\r\n.card:hover { /* IE 9 */ /* Safari 3-8 */\r\n   transform: scale(1.05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lZGljYWwtc2VydmljZS1saXN0L21lZGljYWwtc2VydmljZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwrRUFBK0U7SUFDL0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1Y7O2lCQUVhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBR0EsY0FDK0IsU0FBUyxFQUNMLGVBQWU7R0FDL0Msc0JBQXNCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L21lZGljYWwtc2VydmljZS1saXN0L21lZGljYWwtc2VydmljZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbn1cclxuLnNlcnZpY2VzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvY3Rvcm9rei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmcxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi13aWR0aDogMTAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7Ki9cclxufVxyXG4uaDQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi53bXgxMiB7XHJcbiAgICBtYXgtd2lkdGg6IDk3LjIzMDc2OTJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm14LWF1dG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2hiYXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLTgwMCk7XHJcbiAgICBmbGV4LXNocmluazogMTAwMDA7XHJcbn1cclxuXHJcbi5mbC1ncm93MSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5weDEyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoYmFyIC5zLWlucHV0IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzkxOTlhMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6ICMzODNmNDc7XHJcbn1cclxuXHJcbi5zLWlucHV0LnMtaW5wdXRfX3NlYXJjaCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnMtaW5wdXQge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IC42ZW0gLjdlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZmEyYTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1Mzg0NjE1O1xyXG59XHJcblxyXG4ucHMtcmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5zLWlucHV0LWljb24ucy1pbnB1dC1pY29uX19zZWFyY2gge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAuN2VtO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLTIwMCk7XHJcbn1cclxuXHJcbi5zdmctaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4ucy1pbnB1dC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTlweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3ZnLWljb246bm90KC5uYXRpdmUpICoge1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG5cclxuLmp1bWJvdHJvbiBoMSwgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBJRSA5ICovXHJcbiAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/medical-service-list/medical-service-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/component/medical-service-list/medical-service-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MedicalServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalServiceListComponent", function() { return MedicalServiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_medical_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/medical-service.service */ "./src/app/services/medical-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let MedicalServiceListComponent = class MedicalServiceListComponent {
    constructor(router, activatedRoute, medicalService, http, baseUrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.medicalService = medicalService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.isOpen = false;
        document.querySelector('app-nav-menu').setAttribute('style', 'display:block;');
    }
    ngOnInit() {
        this.getMedicalServices();
    }
    doSearch() {
        this.router.navigate([], {
            queryParams: { searchText: this.searchText }
        });
        this.getMedicalServices();
    }
    getMedicalServices() {
        if (this.searchText) {
            this.medicalService.getFilteredMedicalService(this.searchText).subscribe(result => this.services = result);
        }
        else {
            this.http.get(this.baseUrl + 'api/MedicalServices').subscribe(result => {
                this.services = result;
                console.log(this.services);
            }, error => console.error(error));
            this.router.navigate(['/medical-service-list']);
        }
    }
    getMedicalServiceById(id) {
        return this.services.find(medicalService => medicalService.id === id);
    }
};
MedicalServiceListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_medical_service_service__WEBPACK_IMPORTED_MODULE_3__["MedicalServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
MedicalServiceListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-medical-service-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./medical-service-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-list/medical-service-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./medical-service-list.component.css */ "./src/app/component/medical-service-list/medical-service-list.component.css")).default]
    }),
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_medical_service_service__WEBPACK_IMPORTED_MODULE_3__["MedicalServiceService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], MedicalServiceListComponent);



/***/ }),

/***/ "./src/app/component/update-medical-service/update-medical-service.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/component/update-medical-service/update-medical-service.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91cGRhdGUtbWVkaWNhbC1zZXJ2aWNlL3VwZGF0ZS1tZWRpY2FsLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/update-medical-service/update-medical-service.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/component/update-medical-service/update-medical-service.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UpdateMedicalServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMedicalServiceComponent", function() { return UpdateMedicalServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let UpdateMedicalServiceComponent = class UpdateMedicalServiceComponent {
    constructor() { }
    ngOnInit() {
    }
};
UpdateMedicalServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-update-medical-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-medical-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-medical-service/update-medical-service.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./update-medical-service.component.css */ "./src/app/component/update-medical-service/update-medical-service.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], UpdateMedicalServiceComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: black;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n}\r\n\r\n#nav-style {\r\n    visibility: hidden !important;\r\n}\r\n\r\n#landing-header {\r\n    z-index: 1;\r\n    text-align: center;\r\n    padding: 3%;\r\n    background: none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 60%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#landing-header h1 {\r\n    color: black;\r\n    font-size: 30px;\r\n}\r\n\r\n.slideshow {\r\n    background-image: url(https://www.artisansofmedicine.com/wp-content/uploads/2019/06/Why-Do-Family-Doctors-Recommend-Genetic-Testing.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdJQUF3STtJQUN4SSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNuYXYtc3R5bGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNsYW5kaW5nLWhlYWRlciB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4jbGFuZGluZy1oZWFkZXIgaDEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc2xpZGVzaG93IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5hcnRpc2Fuc29mbWVkaWNpbmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA2L1doeS1Eby1GYW1pbHktRG9jdG9ycy1SZWNvbW1lbmQtR2VuZXRpYy1UZXN0aW5nLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomePageComponent = class HomePageComponent {
    constructor() {
        this.title = 'Welcome to Medical Clinic';
        document.querySelector('app-nav-menu').setAttribute('style', 'display:none;');
    }
    ngOnInit() {
    }
};
HomePageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home-page',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}*/\r\n\r\nhtml,\r\nbody,\r\nheader,\r\n#intro {\r\n    height: 100%;\r\n}\r\n\r\n#intro {\r\n    background: url(\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img%20%283%29.jpg\")no-repeat center center fixed;\r\n    background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQkU7O0FBRUY7Ozs7SUFJSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0lBQWtJO0lBQ2xJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59Ki9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmhlYWRlcixcclxuI2ludHJvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2ludHJvIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vbWRib290c3RyYXAuY29tL2ltZy9QaG90b3MvSG9yaXpvbnRhbC9OYXR1cmUvZnVsbCUyMHBhZ2UvaW1nJTIwJTI4MyUyOS5qcGdcIiluby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/services/medical-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/medical-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MedicalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalServiceService", function() { return MedicalServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MedicalServiceService = class MedicalServiceService {
    constructor(http) {
        this.http = http;
        this.backendUrl = '/api/MedicalServices';
    }
    getMedicalServices() {
        return this.http.get(this.backendUrl);
    }
    getMedicalService(id) {
        return this.http.get(this.backendUrl + '/' + `${id}`);
    }
    addMedicalService(medicalService) {
        return this.http.post(this.backendUrl, medicalService);
    }
    updateMedicalService(id, medicalService) {
        return this.http.put(this.backendUrl + `/${id}`, medicalService);
    }
    deleteMedicalService(id) {
        return this.http.delete(this.backendUrl + `/${id}`);
    }
    getFilteredMedicalService(searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('searchText', searchText);
        return this.http.get(this.backendUrl, { params: params });
    }
};
MedicalServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MedicalServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MedicalServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\CSharpProjects\CliniqueAngularNetCore\CliniqueAngularNetCore\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map