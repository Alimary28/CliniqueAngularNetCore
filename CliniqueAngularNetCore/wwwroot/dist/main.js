(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-staff/add-staff.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-staff/add-staff.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"staffForm\" (ngSubmit)=\"save()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"firstName\">Firstname</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Lastname</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" formControlName=\"lastName\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Age</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"age\" name=\"age\" formControlName=\"age\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Position</label>\r\n            <select name=\"position\" formControlName=\"position\" class=\"form-control\">\r\n                <option value=\"Doctor\">Doctor</option>\r\n                <option value=\"Nurse\">Nurse</option>\r\n                <option value=\"Therapist\">Therapist</option>\r\n                <option value=\"Physician\">Physician</option>\r\n                <option value=\"Receptionist\">Receptionist</option>\r\n                <option value=\"Manager\">Manager</option>\r\n                <option value=\"Surgeon\">Surgeon</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Employment date</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"employmentDate\" name=\"employmentDate\" formControlName=\"employmentDate\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Salary</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"salary\" name=\"salary\" formControlName=\"salary\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n        <button class=\"btn btn-secondary\" type=\"button\" routerLink=\"/staff-list\">Cancel</button>\r\n    </form>\r\n");

/***/ }),

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>appointment works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-medical-service/add-medical-service.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-medical-service/add-medical-service.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" id=\"add-medical-service-style\">\r\n    <div class=\"col-sm-10 offset-sm-1 jumbotron\"><h1>Medical service information</h1></div>\r\n    <div class=\"col-sm-10 offset-sm-1 \">\r\n        <app-update-medical-service [selectedMedicalService]=\"medicalService\"\r\n                          [submitLabel]=\"label\"\r\n                          (onSubmit)=\"reloadData($event)\">\r\n        </app-update-medical-service>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-details/medical-service-details.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-details/medical-service-details.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div *ngIf=\"currentMedicalService\" class=\"container\" id=\"details\">\r\n        <div class=\"jumbotron\">\r\n            <h1>{{ currentMedicalService.name }}</h1>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"card\" id=\"medicalServiceDetails\">\r\n                <h4><b>Details:</b></h4>\r\n                <h5><b>Domain: </b>{{currentMedicalService.domain}}</h5>\r\n                <h5><b>Description: </b>{{ currentMedicalService.description }}</h5>\r\n                <h5><b>Minutes: </b>{{ currentMedicalService.minutes }}</h5>\r\n                <h5><b>Price: </b>{{ currentMedicalService.price }}</h5>\r\n                <h5><b>Doctors: </b> </h5>\r\n                <!--<div *ngFor=\"let staff of currentMedicalService.staffs\">\r\n                    <p>{{staff.position}}: {{staff.firstName}} {{staff.lastName}}</p>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" id=\"medicalService-details-btn\">\r\n\r\n            <div *ngIf=\"isUserLoggedIn\" class=\"col-sm-6\" id=\"crud-medicalService-btn\">\r\n                <button *ngIf=\"currentUserRole == 'Admin'\" class=\"btn btn-outline-danger btn-lg\" type=\"button\"\r\n                        (click)=\"deleteMedicalService()\">\r\n                    Delete medical service\r\n                </button>\r\n\r\n                <button *ngIf=\"currentUserRole == 'Admin'\" class=\"btn btn-outline-warning btn-lg\" type=\"button\"\r\n                        (click)=\"updateMedicalService()\">\r\n                    Update medical service\r\n                </button>\r\n                <button *ngIf=\"currentUserRole == 'Moderator'\" class=\"btn btn-outline-success btn-lg\" type=\"button\"\r\n                        (click)=\"staffFormToggle()\">\r\n                    Add a doctor\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isOpen\">\r\n            <app-update-medical-service [selectedMedicalService]=\"currentMedicalService\" [submitLabel]=\"label\" (onSubmit)=\"reloadData()\">\r\n            </app-update-medical-service>\r\n        </div>\r\n\r\n        <h4 *ngIf=\"currentMedicalService.staffs.length > 0\">Clinic staff:</h4>\r\n        <table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"currentMedicalService.staffs.length > 0\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Position</th>\r\n                    <th>Firstname</th>\r\n                    <th>Lastname</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let staff of currentMedicalService.staffs\">\r\n                    <td>{{ staff.position }}</td>\r\n                    <td>{{ staff.firstName }}</td>\r\n                    <td>{{ staff.lastName }}</td>\r\n                    <td>\r\n                        <a *ngIf=\"currentUserRole == 'Moderator'\" class=\"btn btn-outline-primary btn-sm mr-3\"\r\n                           (click)=\"updateStaff(staff)\">Update</a>\r\n                        <a *ngIf=\"currentUserRole == 'Moderator'\" class=\"btn btn-outline-danger btn-sm\"\r\n                           (click)=\"deleteStaff(staff.staffId)\" (onSubmit)=\"reloadData()\">Delete</a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div *ngIf=\"addStaffMode\">\r\n            <app-add-staff [currentMedicalService]=\"currentMedicalService\" (onSubmit)=\"addStaffPassChild()\"\r\n                             (onClose)=\"closeFormAtCancel()\">\r\n            </app-add-staff>\r\n        </div>\r\n        <div *ngIf=\"updateStaffMode\">\r\n            <app-update-staff [currentMedicalService]=\"currentMedicalService\" [staff]=\"staffs\"\r\n                                 (onSubmit)=\"reloadData()\" (onClose)=\"closeUpdateFormAtCancel()\">\r\n            </app-update-staff>\r\n            <hr />\r\n        </div>\r\n        <div><hr /> <button id=\"backBtn\" class=\"btn btn-primary\" type=\"button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\"></i></button></div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-list/medical-service-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-list/medical-service-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h2 id=\"tableLabel\">Medical services</h2>\r\n\r\n        <div class=\"wmx12 mx-auto grid ai-center row\">\r\n            <form id=\"search\" role=\"search\" action=\"/medical-service-list\" method=\"get\"\r\n                  class=\"grid--cell fl-grow1 searchbar px12 js-searchbar \" autocomplete=\"off\">\r\n                <div class=\"ps-relative\">\r\n                    <input (keyup)=\"doSearch()\" name=\"searchText\" type=\"text\" placeholder=\"Search…\" value=\"\" autocomplete=\"off\"\r\n                           maxlength=\"150\" class=\"s-input s-input__search js-search-field \" aria-label=\"Search\"\r\n                           aria-controls=\"top-search\" data-controller=\"s-popover\" data-action=\"focus->s-popover#show\"\r\n                           data-s-popover-placement=\"bottom-start\" [(ngModel)]=\"searchText\">\r\n                    <svg aria-hidden=\"true\" class=\"s-input-icon s-input-icon__search svg-icon iconSearch\" width=\"18\" height=\"18\"\r\n                         viewBox=\"0 0 18 18\">\r\n                        <path d=\"M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z\">\r\n                        </path>\r\n                    </svg>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isOpen\" class=\"row text-center\" style=\"display:flex; flex-wrap:wrap;\">\r\n        <div *ngFor=\"let service of services\" class=\"col-md-4 col-sm-6 service\" (click)=\"id = service.id\">\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4>{{ service[0].domain }}</h4>\r\n            </div>\r\n            <div *ngFor=\"let item of service\" class=\"card-body\">\r\n            <p><b>{{ item.name }}</b></p>\r\n            <p>{{ item.description | slice:0:50 }}...</p>\r\n            <p>\r\n               <a class=\"btn btn-primary\" [routerLink]=\"['/medical-service-list/', item.id]\">Details</a>\r\n            </p>\r\n            <hr/>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-medical-service/update-medical-service.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-medical-service/update-medical-service.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Update medical service:</p>\r\n<form [formGroup]=\"form\">\r\n    <div class=\"form-group\">\r\n        <label>Domain</label>\r\n        <select name=\"domain\" formControlName=\"domain\" class=\"form-control\">\r\n            <option value=\"Orthopedics\">Orthopedics</option>\r\n            <option value=\"Cardiology\">Cardiology</option>\r\n            <option value=\"Physiokinetotherapy\">Physiokinetotherapy</option>\r\n            <option value=\"Surgery\">Surgery</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" formControlName=\"name\">\r\n        <span *ngIf=\"errorMessage.Name\" class=\"text-danger\"><small>{{errorMessage.Name}}</small> </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea name=\"description\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"description\"\r\n                  required>\r\n    </textarea>\r\n        <span *ngIf=\"errorMessage.Description\" class=\"text-danger\"><small>{{errorMessage.Description}}</small> </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Minutes</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"minutes\" name=\"minutes\" formControlName=\"minutes\">\r\n        <span *ngIf=\"errorMessage.Minutes\" class=\"text-danger\"><small>{{errorMessage.Minutes}}</small> </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Price</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" formControlName=\"price\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"submitData()\">{{ submitLabel }}</button>\r\n    <button class=\"btn btn-secondary\" type=\"button\" routerLink=\"/medical-service-list\">Cancel</button>\r\n</form>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-flex\" id=\"login\">\r\n    <div class=\"d-flex justify-content-center h-100\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h3>Sign In</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"loginForm\"\r\n                      (ngSubmit)=\"loginUser()\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\" class=\"text-light font-weight-bold\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" required>\r\n                        <div *ngIf=\"loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"loginForm.controls['username'].errors.required\">\r\n                                Username is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\" class=\"text-light font-weight-bold\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\r\n                        <div *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"loginForm.controls['password'].errors.required\">\r\n                                Password is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"submit\" value=\"Login\" class=\"btn btn-sm float-right login_btn\" [disabled]=\"!loginForm.valid\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"d-flex justify-content-center links\">\r\n                    Don't have an account?<a href=\"/register\" class=\"subLinks\">Sign Up</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<header>\r\n    <nav id=\"nav-style\"\r\n         class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n                <i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\r\n                Medical Clinic\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\r\n                    aria-label=\"Toggle navigation\" [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav flex-grow\">\r\n\r\n                    <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\">\r\n                        <a *appHasRole=\"['Admin']\" class=\"nav-link text-dark\" [routerLink]=\"['/add-medical-service']\">\r\n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                            Add a medical service\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item mr-3\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/medical-service-list']\">\r\n                            <i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\r\n                            Medical services\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item mr-3\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/staff-list']\">\r\n                            <i class=\"fa fa-user-md\" aria-hidden=\"true\"></i>\r\n                            Clinic staff\r\n                        </a>\r\n                    </li>\r\n                    <li *ngIf=\"loggedIn()\" class=\"nav-item mr-3\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/appointment']\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            Make an appointment\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li *ngIf=\"!loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">\r\n                            <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n                            Login\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <div *ngIf=\"loggedIn()\" class=\"dropdown mt-4\" dropdown>\r\n                            <a class=\"dropdown-toggle text-dark\" dropdownToggle>\r\n                                <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n                                Welcome {{loggedInUser | titlecase}}\r\n                            </a>\r\n                            <div class=\"dropdown-menu mt-4\" *dropdownMenu>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/user-profile']\">\r\n                                    <i class=\"fa fa-user\"></i> Edit Profile\r\n                                </a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\" (click)=\"logout()\">\r\n                                    <i class=\"fa fa-sign-out\"></i>Logout\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-flex\" id=\"login\">\r\n    <div class=\"d-flex justify-content-center h-100\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h2>Register</h2>\r\n            </div>\r\n            <div class=\"card-body py-1\">\r\n                <form [formGroup]=\"form\"\r\n                      (ngSubmit)=\"addUser()\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"firstName\" class=\"text-light font-weight-bold\">Firstname</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"Firstname\" required>\r\n                        <div *ngIf=\"form.controls['firstName'].invalid && (form.controls['firstName'].dirty || form.controls['firstName'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"form.controls['firstName'].errors.required\">\r\n                                Firstname is required.\r\n                            </div>\r\n                            <div *ngIf=\"form.controls['firstName'].errors.pattern\">\r\n                                Firstname must contain only letters.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastName\" class=\"text-light font-weight-bold\">Lastname</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"Lastname\" required>\r\n                        <div *ngIf=\"form.controls['lastName'].invalid && (form.controls['lastName'].dirty || form.controls['lastName'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"form.controls['lastName'].errors.required\">\r\n                                Lastname is required.\r\n                            </div>\r\n                            <div *ngIf=\"form.controls['lastName'].errors.pattern\">\r\n                                Lastname must contain only letters.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\" class=\"text-light font-weight-bold\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Username\" required />\r\n                        <div *ngIf=\"form.controls['username'].invalid && (form.controls['username'].dirty || form.controls['username'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"form.controls['username'].errors.required\">\r\n                                Username is required.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\" class=\"text-light font-weight-bold\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required>\r\n                        <div *ngIf=\"form.controls['email'].invalid && (form.controls['email'].dirty || form.controls['email'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"form.controls['email'].errors.required\">\r\n                                Email is required.\r\n                            </div>\r\n                            <div *ngIf=\"form.controls['email'].errors.email\">\r\n                                Enter a valid email address.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\" class=\"text-light font-weight-bold\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\r\n                        <div *ngIf=\"form.controls['password'].invalid && (form.controls['password'].dirty || form.controls['password'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"form.controls['password'].errors.required\">Password is required!</div>\r\n                            <div *ngIf=\"form.controls['password'].errors.hasNumber\">Password must contain 1 number!</div>\r\n                            <div *ngIf=\"form.controls['password'].errors.hasCapitalCase\">Password must contain 1 capital case!</div>\r\n                            <div *ngIf=\"form.controls['password'].errors.hasSmallCase\">Password must contain 1 small case!</div>\r\n                            <div *ngIf=\"form.controls['password'].errors.minlength\">Password must contain at least 8 characters!</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"confirmedPassword\" class=\"text-light font-weight-bold\">Confirm password</label>\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmedPassword\" placeholder=\"Confirm password\" required>\r\n                        <div *ngIf=\"form.controls['confirmedPassword'].invalid && (form.controls['confirmedPassword'].dirty || form.controls['confirmedPassword'].touched)\" class=\"text-danger\">\r\n                            <div *ngIf=\"form.controls['confirmedPassword'].errors.required\">Confirmation password is required!</div>\r\n                            <div *ngIf=\"form.controls['confirmedPassword'].errors.mustMatch\">Password must match!</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-sm login_btn mr-4\" [disabled]=\"!form.valid\">Register</button>\r\n                        <button class=\"btn btn-sm btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex justify-content-center links\">\r\n                        Already have an account?<a href=\"/login\" class=\"subLinks\">Go to login</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-details/staff-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-details/staff-details.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"currentStaff\" class=\"container\" id=\"details\">\r\n    <div class=\"jumbotron\">\r\n        <h2>{{ currentStaff.firstName }} {{currentStaff.lastName}}</h2>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"card\" id=\"staffDetails\">\r\n            <h4><b>Details:</b></h4>\r\n            <h5><b>Position: </b>{{currentStaff.position}}</h5>\r\n            <h5><b>Age:</b>{{ currentStaff.age }}</h5>\r\n            <h5><b>Date of employment: </b>{{ currentStaff.employmentDate }}</h5>\r\n            <h5><b>Salary: </b>{{ currentStaff.salary }}</h5>\r\n        </div>\r\n    </div>\r\n    <div><hr /> <button id=\"backBtn\" class=\"btn btn-primary\" type=\"button\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\"></i></button></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-list/staff-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff-list/staff-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h2 id=\"tableLabel\">Clinic Staff list</h2>\r\n\r\n        <div class=\"wmx12 mx-auto grid ai-center row\">\r\n            <form id=\"search\" role=\"search\" action=\"/staff-list\" method=\"get\"\r\n                  class=\"grid--cell fl-grow1 searchbar px12 js-searchbar \" autocomplete=\"off\">\r\n                <div class=\"ps-relative\">\r\n                    <input (keyup)=\"doSearch()\" name=\"searchText\" type=\"text\" placeholder=\"Search…\" value=\"\" autocomplete=\"off\"\r\n                           maxlength=\"150\" class=\"s-input s-input__search js-search-field \" aria-label=\"Search\"\r\n                           aria-controls=\"top-search\" data-controller=\"s-popover\" data-action=\"focus->s-popover#show\"\r\n                           data-s-popover-placement=\"bottom-start\" [(ngModel)]=\"searchText\">\r\n                    <svg aria-hidden=\"true\" class=\"s-input-icon s-input-icon__search svg-icon iconSearch\" width=\"18\" height=\"18\"\r\n                         viewBox=\"0 0 18 18\">\r\n                        <path d=\"M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z\">\r\n                        </path>\r\n                    </svg>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isOpen\" class=\"row text-center\" style=\"display:flex; flex-wrap:wrap;\">\r\n        <div *ngFor=\"let staff of staffs\" class=\"col-md-4 col-sm-6 staff\" (click)=\"id = staff.id\">\r\n\r\n            <div class=\"card\">\r\n                    <h5>{{ staff.position }}</h5>\r\n                    <p>{{ staff.firstName }} {{ staff.lastName }}</p>\r\n                    \r\n                    <p *ngIf=\"currentUserRole == 'Admin' || currentUserRole == 'Moderator'\">\r\n                        <a class=\"btn btn-primary\" [routerLink]=\"['/staff-list/', staff.id]\">Details</a>\r\n                    </p>\r\n                    <hr />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-staff/update-staff.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-staff/update-staff.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Update clinic staff:</p>\r\n<form [formGroup]=\"staffForm\" (ngSubmit)=\"save()\">\r\n\r\n    <div class=\"form-group\">\r\n        <label>Firstname</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\">\r\n        <span *ngIf=\"errorMessage.FirstName\" class=\"text-danger\"><small>{{errorMessage.FirstName}}</small> </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Lastname</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" formControlName=\"lastName\">\r\n        <span *ngIf=\"errorMessage.LastName\" class=\"text-danger\"><small>{{errorMessage.LastName}}</small> </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Age</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"age\" name=\"age\" formControlName=\"age\">\r\n        <span *ngIf=\"errorMessage.Age\" class=\"text-danger\"><small>{{errorMessage.Age}}</small> </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Position</label>\r\n        <select name=\"position\" formControlName=\"position\" class=\"form-control\">\r\n            <option value=\"Doctor\">Doctor</option>\r\n            <option value=\"Nurse\">Nurse</option>\r\n            <option value=\"Therapist\">Therapist</option>\r\n            <option value=\"Physician\">Physician</option>\r\n            <option value=\"Receptionist\">Receptionist</option>\r\n            <option value=\"Manager\">Manager</option>\r\n            <option value=\"Surgeon\">Surgeon</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Employment date</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"employmentDate\" name=\"employmentDate\" formControlName=\"employmentDate\">\r\n        <span *ngIf=\"errorMessage.EmploymentDate\" class=\"text-danger\"><small>{{errorMessage.EmploymentDate}}</small> </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Salary</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"salary\" name=\"salary\" formControlName=\"salary\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n    <button class=\"btn btn-secondary\" type=\"button\" routerLink=\"/staff-list\">Cancel</button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"justify-content-center align-items-center container\">\r\n    <div class=\"row justify-content-center align-items-center header\">\r\n        <div>\r\n            <h1 class=\"p-5\">Edit profile</h1>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center align-items-center\" id=\"formRow\">\r\n\r\n        <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveUserData()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"firstName\">Firstname</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" required>\r\n                <div *ngIf=\"profileForm.controls['firstName'].invalid && (profileForm.controls['firstName'].dirty || profileForm.controls['firstName'].touched)\"\r\n                     class=\"text-danger\">\r\n                    <div *ngIf=\"profileForm.controls['firstName'].errors.required\">\r\n                        Firstname is required.\r\n                    </div>\r\n                    <div *ngIf=\"profileForm.controls['firstName'].errors.pattern\">\r\n                        Firstname must contain only letters.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"lastName\">Lastname</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" required>\r\n                <div *ngIf=\"profileForm.controls['lastName'].invalid && (profileForm.controls['lastName'].dirty || profileForm.controls['lastName'].touched)\"\r\n                     class=\"text-danger\">\r\n                    <div *ngIf=\"profileForm.controls['lastName'].errors.required\">\r\n                        Lastname is required.\r\n                    </div>\r\n                    <div *ngIf=\"profileForm.controls['lastName'].errors.pattern\">\r\n                        Lastname must contain only letters.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" required>\r\n                <div *ngIf=\"profileForm.controls['username'].invalid && (profileForm.controls['username'].dirty || profileForm.controls['username'].touched)\"\r\n                     class=\"text-danger\">\r\n                    <div *ngIf=\"profileForm.controls['username'].errors.required\">\r\n                        Username is required.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\" required>\r\n                <div *ngIf=\"profileForm.controls['email'].invalid && (profileForm.controls['email'].dirty || profileForm.controls['email'].touched)\"\r\n                     class=\"text-danger\">\r\n                    <div *ngIf=\"profileForm.controls['email'].errors.required\">\r\n                        Email is required.\r\n                    </div>\r\n                    <div *ngIf=\"profileForm.controls['email'].errors.email\">\r\n                        Enter a valid email address.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!profileForm.valid\">Save</button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"goBack()\">Back</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n");

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

/***/ "./src/app/add-staff/add-staff.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-staff/add-staff.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdGFmZi9hZGQtc3RhZmYuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/add-staff/add-staff.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-staff/add-staff.component.ts ***!
  \**************************************************/
/*! exports provided: AddStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function() { return AddStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_MedicalServiceDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/MedicalServiceDetail */ "./src/app/models/MedicalServiceDetail.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/clinic-staff.service */ "./src/app/services/clinic-staff.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
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






let AddStaffComponent = class AddStaffComponent {
    constructor(router, formBuilder, service, http) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.http = http;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.staffForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            employmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    save() {
        const newStaff = this.staffForm.value;
        this.service.addClinicStaff(this.currentMedicalService.id, newStaff)
            .subscribe(() => {
            alert('Succesfully added!');
            this.onSubmit.emit();
        }, err => {
            alert('Clinic staff not added!');
        });
    }
};
AddStaffComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_4__["ClinicStaffService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], AddStaffComponent.prototype, "onSubmit", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], AddStaffComponent.prototype, "onClose", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _models_MedicalServiceDetail__WEBPACK_IMPORTED_MODULE_2__["MedicalServiceDetail"])
], AddStaffComponent.prototype, "currentMedicalService", void 0);
AddStaffComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-staff',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-staff/add-staff.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-staff.component.css */ "./src/app/add-staff/add-staff.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_4__["ClinicStaffService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], AddStaffComponent);



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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authenticate.service */ "./src/app/services/authenticate.service.ts");
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



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'app';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
            this.authService.changeLoggedInUser(this.authService.decodedToken.unique_name);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _component_medical_service_list_medical_service_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/medical-service-list/medical-service-list.component */ "./src/app/component/medical-service-list/medical-service-list.component.ts");
/* harmony import */ var _component_medical_service_details_medical_service_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/medical-service-details/medical-service-details.component */ "./src/app/component/medical-service-details/medical-service-details.component.ts");
/* harmony import */ var _component_add_medical_service_add_medical_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/add-medical-service/add-medical-service.component */ "./src/app/component/add-medical-service/add-medical-service.component.ts");
/* harmony import */ var _component_update_medical_service_update_medical_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/update-medical-service/update-medical-service.component */ "./src/app/component/update-medical-service/update-medical-service.component.ts");
/* harmony import */ var _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./staff-list/staff-list.component */ "./src/app/staff-list/staff-list.component.ts");
/* harmony import */ var _staff_details_staff_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./staff-details/staff-details.component */ "./src/app/staff-details/staff-details.component.ts");
/* harmony import */ var _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-staff/add-staff.component */ "./src/app/add-staff/add-staff.component.ts");
/* harmony import */ var _update_staff_update_staff_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-staff/update-staff.component */ "./src/app/update-staff/update-staff.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/clinic-staff.service */ "./src/app/services/clinic-staff.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _has_role_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./has-role.directive */ "./src/app/has-role.directive.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./appointment/appointment.component */ "./src/app/appointment/appointment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



























function tokenGetter() {
    return localStorage.getItem('token');
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
            _component_medical_service_list_medical_service_list_component__WEBPACK_IMPORTED_MODULE_9__["MedicalServiceListComponent"],
            _component_medical_service_details_medical_service_details_component__WEBPACK_IMPORTED_MODULE_10__["MedicalServiceDetailsComponent"],
            _component_add_medical_service_add_medical_service_component__WEBPACK_IMPORTED_MODULE_11__["AddMedicalServiceComponent"],
            _component_update_medical_service_update_medical_service_component__WEBPACK_IMPORTED_MODULE_12__["UpdateMedicalServiceComponent"],
            _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_13__["StaffListComponent"],
            _staff_details_staff_details_component__WEBPACK_IMPORTED_MODULE_14__["StaffDetailsComponent"],
            _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_15__["AddStaffComponent"],
            _update_staff_update_staff_component__WEBPACK_IMPORTED_MODULE_16__["UpdateStaffComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
            _has_role_directive__WEBPACK_IMPORTED_MODULE_23__["HasRoleDirective"],
            _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_26__["AppointmentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                config: {
                    tokenGetter,
                    whitelistedDomains: ['localhost:5001'],
                    blacklistedRoutes: ['localhost:5001/users/authenticate']
                },
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], pathMatch: 'full' },
                { path: 'medical-service-list', component: _component_medical_service_list_medical_service_list_component__WEBPACK_IMPORTED_MODULE_9__["MedicalServiceListComponent"] },
                { path: 'medical-service-list/:id', component: _component_medical_service_details_medical_service_details_component__WEBPACK_IMPORTED_MODULE_10__["MedicalServiceDetailsComponent"] },
                { path: 'update-medical-service/:id', component: _component_update_medical_service_update_medical_service_component__WEBPACK_IMPORTED_MODULE_12__["UpdateMedicalServiceComponent"] },
                { path: 'add-medical-service', component: _component_add_medical_service_add_medical_service_component__WEBPACK_IMPORTED_MODULE_11__["AddMedicalServiceComponent"],
                    data: { roles: ['Admin'] },
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]]
                },
                { path: 'staff-list', component: _staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_13__["StaffListComponent"] },
                { path: 'staff-list/:id', component: _staff_details_staff_details_component__WEBPACK_IMPORTED_MODULE_14__["StaffDetailsComponent"] },
                {
                    path: 'add-staff', component: _add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_15__["AddStaffComponent"],
                    data: { roles: ['Admin', 'Moderator'] },
                    canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuardService"]]
                },
                { path: 'update-staff', component: _update_staff_update_staff_component__WEBPACK_IMPORTED_MODULE_16__["UpdateStaffComponent"] },
                { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"] },
                { path: 'appointment', component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_26__["AppointmentComponent"] }
            ])
        ],
        entryComponents: [
        //AddMedicalServiceComponent,
        //UpdateMedicalServiceComponent,
        ],
        providers: [
            _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_20__["ClinicStaffService"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_21__["AuthenticateService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/appointment/appointment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/appointment/appointment.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/appointment/appointment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/appointment/appointment.component.ts ***!
  \******************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
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

let AppointmentComponent = class AppointmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-appointment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/appointment.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./appointment.component.css */ "./src/app/appointment/appointment.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], AppointmentComponent);



/***/ }),

/***/ "./src/app/component/add-medical-service/add-medical-service.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/add-medical-service/add-medical-service.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    width: 100%;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    height: 100px;\r\n}\r\n\r\n.jumbotron {\r\n    text-align: center;\r\n    background-color: #c7bbbbc9;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    #add-medical-service-style .jumbotron {\r\n        padding-top: 30px !important;\r\n        padding-bottom: 30px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkZC1tZWRpY2FsLXNlcnZpY2UvYWRkLW1lZGljYWwtc2VydmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLDhCQUE4QjtJQUNsQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkZC1tZWRpY2FsLXNlcnZpY2UvYWRkLW1lZGljYWwtc2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdiYmJiYzk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjYWRkLW1lZGljYWwtc2VydmljZS1zdHlsZSAuanVtYm90cm9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _models_medical_service_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/medical-service.model */ "./src/app/models/medical-service.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
    constructor(router) {
        this.router = router;
        this.label = 'Add';
        this.medicalService = new _models_medical_service_model__WEBPACK_IMPORTED_MODULE_1__["MedicalService"]();
    }
    ngOnInit() {
    }
    reloadData(action) {
        this.router.navigate(['medical-service-list']);
    }
};
AddMedicalServiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddMedicalServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-medical-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-medical-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-medical-service/add-medical-service.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-medical-service.component.css */ "./src/app/component/add-medical-service/add-medical-service.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    padding: 9px;\r\n}\r\n#details jumbotron {\r\n    margin-top: 10px;\r\n    padding-top: 8px;\r\n    padding-bottom: 28px;\r\n}\r\n#medicalServiceDetails {\r\n    background-color: #f8f8f8;\r\n}\r\n#medicalServiceDetails {\r\n    box-shadow: 0px 4px 21px 0px rgba(0,0,0,0.75);\r\n    padding: 3rem;\r\n}\r\n#details.container {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n}\r\n#details h1 {\r\n    text-align: center;\r\n    color: black;\r\n}\r\n.card {\r\n    font-size: 15px;\r\n    background-color: #f8f8f8;\r\n}\r\nbutton {\r\n   \r\n    margin: 5px;\r\n}\r\n.container h4 {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n}\r\n#crud-medicalService-btn {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\r\n}\r\n.btn-primary {\r\n    margin-right: 10px;\r\n}\r\n#medicalServiceDetails-btn {\r\n    margin-bottom: 20px;\r\n}\r\n@media screen and (min-width: 768px) {\r\n    #details .jumbotron {\r\n        padding-top: 30px !important;\r\n        padding-bottom: 30px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n}\r\n.h4 {\r\n    font-size: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lZGljYWwtc2VydmljZS1kZXRhaWxzL21lZGljYWwtc2VydmljZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFHSSw2Q0FBNkM7SUFDN0MsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksK0VBQStFO0lBQy9FLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsOEJBQThCO0lBQ2xDO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVkaWNhbC1zZXJ2aWNlLWRldGFpbHMvbWVkaWNhbC1zZXJ2aWNlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG4jZGV0YWlscyBqdW1ib3Ryb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxufVxyXG4jbWVkaWNhbFNlcnZpY2VEZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuI21lZGljYWxTZXJ2aWNlRGV0YWlscyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjFweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxufVxyXG4jZGV0YWlscy5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZG9jdG9yb2t6LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9iZzEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4jZGV0YWlscyBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG5idXR0b24ge1xyXG4gICBcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5jb250YWluZXIgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNjcnVkLW1lZGljYWxTZXJ2aWNlLWJ0biB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuI21lZGljYWxTZXJ2aWNlRGV0YWlscy1idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2RldGFpbHMgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uaDQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clinic-staff.service */ "./src/app/services/clinic-staff.service.ts");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
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
    constructor(route, router, service, staffService, authService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.staffService = staffService;
        this.authService = authService;
        this.isOpen = false;
        this.label = 'Update';
        this.addStaffMode = false;
        this.updateStaffMode = false;
        this.isUserLoggedIn = false;
    }
    ngOnInit() {
        this.medicalServiceId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();
        this.isUserLoggedIn = this.authService.isLoggedIn();
        if (this.isUserLoggedIn) {
            this.loggedUser = this.authService.decodedToken.unique_name;
        }
        this.currentUserRole = this.authService.getUserRole();
    }
    getDetails() {
        this.service.getMedicalService(this.medicalServiceId).subscribe(result => {
            this.currentMedicalService = result;
        });
    }
    reloadData() {
        this.updateStaffMode = false;
        this.isOpen = false;
        this.getDetails();
    }
    deleteMedicalService() {
        if (confirm("Are you sure you want to delete this medical service?")) {
            this.service.deleteMedicalService(this.medicalServiceId)
                .subscribe(result => {
                alert('Medical service successfully deleted!');
                this.currentMedicalService = result;
            }, error => alert('Cannot delete medical service'));
        }
    }
    addDoctor() {
        this.router.navigateByUrl('/add-clinic-staff');
    }
    updateMedicalService() {
        if (this.isOpen === false) {
            this.isOpen = true;
        }
        else {
            this.isOpen = false;
        }
    }
    staffFormToggle() {
        this.updateStaffMode = false;
        this.addStaffMode = !this.addStaffMode;
    }
    updateStaff(staff) {
        this.staffs = staff;
        this.addStaffMode = false;
        this.updateStaffMode = !this.updateStaffMode;
    }
    addStaffPassChild() {
        this.addStaffMode = false;
    }
    closeFormAtCancel() {
        this.addStaffMode = false;
    }
    closeUpdateFormAtCancel() {
        this.updateStaffMode = false;
    }
    deleteStaff(staffId) {
        this.updateStaffMode = false;
        if (confirm("Are you sure you want to delete this clinic staff?")) {
            this.staffService.deleteClinicStaff(staffId)
                .subscribe(result => {
                alert('Clinic staff successfully deleted!');
                this.getDetails();
            }, error => alert('Cannot delete medical service'));
        }
    }
    goBack() {
        this.router.navigateByUrl('/medical-service-list');
    }
};
MedicalServiceDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_medical_service_service__WEBPACK_IMPORTED_MODULE_2__["MedicalServiceService"] },
    { type: _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_3__["ClinicStaffService"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] }
];
MedicalServiceDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-medical-service-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./medical-service-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-details/medical-service-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./medical-service-details.component.css */ "./src/app/component/medical-service-details/medical-service-details.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _services_medical_service_service__WEBPACK_IMPORTED_MODULE_2__["MedicalServiceService"],
        _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_3__["ClinicStaffService"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    padding: 9px;\r\n}\r\n\r\n.container {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.h4 {\r\n    font-size: 20px;\r\n}\r\n\r\n.wmx12 {\r\n    max-width: 97.2307692rem !important;\r\n}\r\n\r\n.grid {\r\n    display: flex;\r\n}\r\n\r\n.mx-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n}\r\n\r\n.searchbar {\r\n    color: var(--black-800);\r\n    flex-shrink: 10000;\r\n}\r\n\r\n.fl-grow1 {\r\n    flex-grow: 1;\r\n}\r\n\r\n.px12 {\r\n    padding-left: 12px !important;\r\n    padding-right: 12px !important;\r\n}\r\n\r\n.searchbar .s-input {\r\n    border-color: #9199a1;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    color: #383f47;\r\n}\r\n\r\n.s-input.s-input__search {\r\n    padding-left: 32px;\r\n    width: 100%;\r\n}\r\n\r\n.s-input {\r\n    -webkit-appearance: none;\r\n    width: 80%;\r\n    margin: 0;\r\n    padding: .6em .7em;\r\n    border: 1px solid #9fa2a5;\r\n    border-radius: 3px;\r\n    font-size: 13px;\r\n    font-family: inherit;\r\n    line-height: 1.15384615;\r\n}\r\n\r\n.ps-relative {\r\n    position: relative !important;\r\n    display: block;\r\n    padding: 0;\r\n    border: 0;\r\n    font: inherit;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.jumbotron {\r\n    margin-top: 10px;\r\n    padding-top: 8px;\r\n    padding-bottom: 28px;\r\n}\r\n\r\n.s-input-icon.s-input-icon__search {\r\n    right: auto;\r\n    left: .7em;\r\n    color: var(--black-200);\r\n}\r\n\r\n.svg-icon {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.s-input-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -9px;\r\n    pointer-events: none;\r\n}\r\n\r\n.svg-icon:not(.native) * {\r\n    fill: currentColor;\r\n}\r\n\r\n.jumbotron h1, p {\r\n    text-align: center;\r\n}\r\n\r\n.card:hover { /* IE 9 */ /* Safari 3-8 */\r\n   transform: scale(1.05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lZGljYWwtc2VydmljZS1saXN0L21lZGljYWwtc2VydmljZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0VBQStFO0lBQy9FLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBLGNBQytCLFNBQVMsRUFDTCxlQUFlO0dBQy9DLHNCQUFzQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tZWRpY2FsLXNlcnZpY2UtbGlzdC9tZWRpY2FsLXNlcnZpY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvY3Rvcm9rei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmcxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5oNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLndteDEyIHtcclxuICAgIG1heC13aWR0aDogOTcuMjMwNzY5MnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubXgtYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaGJhciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stODAwKTtcclxuICAgIGZsZXgtc2hyaW5rOiAxMDAwMDtcclxufVxyXG5cclxuLmZsLWdyb3cxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnB4MTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXIgLnMtaW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTE5OWExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogIzM4M2Y0NztcclxufVxyXG5cclxuLnMtaW5wdXQucy1pbnB1dF9fc2VhcmNoIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucy1pbnB1dCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogLjZlbSAuN2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlmYTJhNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTUzODQ2MTU7XHJcbn1cclxuXHJcbi5wcy1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLnMtaW5wdXQtaWNvbi5zLWlucHV0LWljb25fX3NlYXJjaCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC43ZW07XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stMjAwKTtcclxufVxyXG5cclxuLnN2Zy1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5zLWlucHV0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdmctaWNvbjpub3QoLm5hdGl2ZSkgKiB7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcblxyXG4uanVtYm90cm9uIGgxLCBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIElFIDkgKi9cclxuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
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
    constructor(router, activatedRoute, medicalService, authService, http, baseUrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.medicalService = medicalService;
        this.authService = authService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.isOpen = false;
        document.querySelector('app-nav-menu').setAttribute('style', 'display:block;');
    }
    ngOnInit() {
        this.getMedicalServices();
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUserRole = this.authService.getUserRole();
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
    reloadData(action) {
        this.id = undefined;
        this.isOpen = false;
        if (action !== 'Cancel') {
            this.getMedicalServices();
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
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
MedicalServiceListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-medical-service-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./medical-service-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/medical-service-list/medical-service-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./medical-service-list.component.css */ "./src/app/component/medical-service-list/medical-service-list.component.css")).default]
    }),
    __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_medical_service_service__WEBPACK_IMPORTED_MODULE_3__["MedicalServiceService"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"],
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
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    width: 100%;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    height: 100px;\r\n}\r\n\r\n.btn-primary {\r\n    margin-right: 10px;\r\n}\r\n\r\n#add-medical-service-style .container {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\nlabel {\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VwZGF0ZS1tZWRpY2FsLXNlcnZpY2UvdXBkYXRlLW1lZGljYWwtc2VydmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSwrRUFBK0U7SUFDL0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91cGRhdGUtbWVkaWNhbC1zZXJ2aWNlL3VwZGF0ZS1tZWRpY2FsLXNlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4jYWRkLW1lZGljYWwtc2VydmljZS1zdHlsZSAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvY3Rvcm9rei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmcxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _models_medical_service_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/medical-service.model */ "./src/app/models/medical-service.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let UpdateMedicalServiceComponent = class UpdateMedicalServiceComponent {
    constructor(service) {
        this.service = service;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorMessage = [];
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedMedicalService.domain),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedMedicalService.name),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedMedicalService.description),
            minutes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedMedicalService.minutes),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedMedicalService.price)
        });
        this.form.updateValueAndValidity();
    }
    submitData() {
        try {
            const medicalService = this.form.value;
            medicalService.id = this.selectedMedicalService.id;
            if (this.submitLabel === "Add") {
                this.service.addMedicalService(medicalService).subscribe(_ => {
                    this.onSubmit.emit(this.submitLabel);
                    alert("Medical service successfully added");
                }, error => {
                    alert(error);
                });
            }
            else {
                this.service.updateMedicalService(medicalService.id, medicalService).subscribe(_ => {
                    this.onSubmit.emit(this.submitLabel);
                    alert("Medical service successfully updated");
                }, error => {
                    alert(error);
                });
            }
        }
        catch (e) {
            alert(e.message);
        }
    }
};
UpdateMedicalServiceComponent.ctorParameters = () => [
    { type: _services_medical_service_service__WEBPACK_IMPORTED_MODULE_3__["MedicalServiceService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], UpdateMedicalServiceComponent.prototype, "submitLabel", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _models_medical_service_model__WEBPACK_IMPORTED_MODULE_1__["MedicalService"])
], UpdateMedicalServiceComponent.prototype, "selectedMedicalService", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], UpdateMedicalServiceComponent.prototype, "onSubmit", void 0);
UpdateMedicalServiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-update-medical-service',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-medical-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/update-medical-service/update-medical-service.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./update-medical-service.component.css */ "./src/app/component/update-medical-service/update-medical-service.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_medical_service_service__WEBPACK_IMPORTED_MODULE_3__["MedicalServiceService"]])
], UpdateMedicalServiceComponent);



/***/ }),

/***/ "./src/app/custom-validator.ts":
/*!*************************************!*\
  !*** ./src/app/custom-validator.ts ***!
  \*************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class CustomValidator {
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
}


/***/ }),

/***/ "./src/app/has-role.directive.ts":
/*!***************************************!*\
  !*** ./src/app/has-role.directive.ts ***!
  \***************************************/
/*! exports provided: HasRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function() { return HasRoleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authenticate.service */ "./src/app/services/authenticate.service.ts");
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


let HasRoleDirective = class HasRoleDirective {
    constructor(authService, viewContainerRef, templateRef) {
        this.authService = authService;
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.isVisible = false;
    }
    ngOnInit() {
        const userRoles = this.authService.decodedToken.role;
        if (!userRoles) {
            this.viewContainerRef.clear();
        }
        if (this.authService.roleMatch(this.appHasRole)) {
            if (!this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.isVisible = false;
                this.viewContainerRef.clear();
            }
        }
    }
};
HasRoleDirective.ctorParameters = () => [
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], HasRoleDirective.prototype, "appHasRole", void 0);
HasRoleDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appHasRole]'
    }),
    __metadata("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
], HasRoleDirective);



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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n}\r\n\r\n.container {\r\n    height: 100%;\r\n    align-content: center;\r\n}\r\n\r\n.card {\r\n    height: 370px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    width: 400px;\r\n    background-color: rgba(0,0,0,0.7) !important;\r\n}\r\n\r\n.card-header h3 {\r\n    color: white;\r\n}\r\n\r\n.input-group-prepend span {\r\n    width: 50px;\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border: 0 !important;\r\n}\r\n\r\ninput:focus {\r\n    outline: 0 0 0 0 !important;\r\n    box-shadow: 0 0 0 0 !important;\r\n}\r\n\r\n.remember input {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.login_btn {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n    width: 20%;\r\n}\r\n\r\n.login_btn:hover {\r\n    color: #fff;\r\n    background-color: #449d44;\r\n    border-color: #398439;\r\n}\r\n\r\n.links {\r\n    color: white;\r\n}\r\n\r\n.links a {\r\n    margin-left: 10px;\r\n}\r\n\r\n.subLinks {\r\n    color: black;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.ng-invalid.ng-touched.form-control {\r\n    border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtFQUErRTtJQUMvRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvY3Rvcm9rei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmcxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNhcmQtaGVhZGVyIGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbWVtYmVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYzc0MzA7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbi5sb2dpbl9idG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ5ZDQ0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzk4NDM5O1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlua3MgYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnN1YkxpbmtzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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




let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.logout();
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
    }
    loginUser() {
        this.authService.loginUser(this.loginForm.value).subscribe(user => {
            localStorage.setItem('token', user.token);
            this.authService.decodeToken();
            this.authService.changeLoggedInUser(user.username);
            alert('Succesfully logged in!');
            this.router.navigate(['/medical-service-list']);
        }, err => alert('Invalid username or password!'));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/models/MedicalServiceDetail.ts":
/*!************************************************!*\
  !*** ./src/app/models/MedicalServiceDetail.ts ***!
  \************************************************/
/*! exports provided: MedicalServiceDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalServiceDetail", function() { return MedicalServiceDetail; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class MedicalServiceDetail {
}


/***/ }),

/***/ "./src/app/models/medical-service.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/medical-service.model.ts ***!
  \*************************************************/
/*! exports provided: MedicalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalService", function() { return MedicalService; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class MedicalService {
}


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n}\r\n\r\nhtml {\r\n    font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    html {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n.box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .navbar-collapse.collapse {\r\n        display: flex !important\r\n    }\r\n}\r\n\r\n.dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZSwgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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



let NavMenuComponent = class NavMenuComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isExpanded = false;
    }
    ngOnInit() {
        this.authService.currentLoggedInUser.subscribe(loggedInUser => {
            this.loggedInUser = loggedInUser;
            console.log(this.loggedInUser);
        });
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    loggedIn() {
        return this.authService.isLoggedIn();
    }
    logout() {
        this.authService.logout();
        alert('User logged out!');
        this.router.navigate(['/medical-service-list']);
    }
    testUserRoles() {
        this.authService.roleMatch('Admin, Moderator');
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.container {\r\n    height: 100%;\r\n    align-content: center;\r\n}\r\n\r\n.card {\r\n    height: 580px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    width: 400px;\r\n    background-color: rgba(0,0,0,0.7) !important;\r\n}\r\n\r\n.card-header h3 {\r\n    color: white;\r\n}\r\n\r\n.input-group-prepend span {\r\n    width: 50px;\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border: 0 !important;\r\n}\r\n\r\ninput:focus {\r\n    outline: 0 0 0 0 !important;\r\n    box-shadow: 0 0 0 0 !important;\r\n}\r\n\r\n.remember input {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.login_btn {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n    width: 20%;\r\n}\r\n\r\n.login_btn:hover {\r\n        color: #fff;\r\n        background-color: #449d44;\r\n        border-color: #398439;\r\n    }\r\n\r\n.links {\r\n    color: white;\r\n}\r\n\r\n.links a {\r\n        margin-left: 10px;\r\n    }\r\n\r\n.subLinks {\r\n    color: black;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.ng-invalid.ng-touched.form-control {\r\n    border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtFQUErRTtJQUMvRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw0Q0FBNEM7QUFDaEQ7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFSTtRQUNJLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIscUJBQXFCO0lBQ3pCOztBQUVKO0lBQ0ksWUFBWTtBQUNoQjs7QUFFSTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kb2N0b3Jva3ouY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAyL2JnMS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGhlaWdodDogNTgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNhcmQtaGVhZGVyIGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbWVtYmVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0biB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYzc0MzA7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4gICAgLmxvZ2luX2J0bjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMzOTg0Mzk7XHJcbiAgICB9XHJcblxyXG4ubGlua3Mge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4gICAgLmxpbmtzIGEge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuLnN1YkxpbmtzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _custom_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-validator */ "./src/app/custom-validator.ts");
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





let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.errorMessage = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.authService.logout();
        this.form = this.formBuilder.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]*$/)
                ])],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]*$/)
                ])],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])
            ],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/\d/, { hasNumber: true }),
                    _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].patternValidator(/[a-z]/, { hasSmallCase: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)
                ])
            ],
            confirmedPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        }, {
            validator: _custom_validator__WEBPACK_IMPORTED_MODULE_4__["CustomValidator"].mustMatch('password', 'confirmedPassword')
        });
    }
    addUser() {
        const pswd = this.form.get('password').value;
        const confPswd = this.form.get('confirmedPassword').value;
        if (pswd === confPswd) {
            this.authService.registerUser(this.form.value).subscribe(user => {
                this.router.navigate(['/login']);
                alert('User succesfully created!');
            }, err => alert(err));
        }
        else {
            alert('Passwords are not the same!');
        }
    }
    onReset() {
        this.submitted = false;
        this.form.reset();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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



let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next) {
        const roles = next.data.roles;
        if (roles) {
            const match = this.authService.roleMatch(roles);
            if (match) {
                return true;
            }
            else {
                this.router.navigate(['/medical-service-list']);
                alert('You are not authorized to access this area');
            }
        }
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/medical-service-list']);
        return false;
    }
    canActivateChild() {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/medical-service-list']);
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/authenticate.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authenticate.service.ts ***!
  \**************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
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




let AuthenticateService = class AuthenticateService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/users';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.loggedInUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentLoggedInUser = this.loggedInUser.asObservable();
    }
    changeLoggedInUser(loggedInUser) {
        this.loggedInUser.next(loggedInUser);
    }
    registerUser(user) {
        return this.http.post(this.baseUrl + '/register', user);
    }
    loginUser(user) {
        return this.http.post(this.baseUrl + '/authenticate', user);
    }
    getUserById(id) {
        return this.http.get(this.baseUrl + `/${id}`);
    }
    updateUser(id, user) {
        return this.http.put(this.baseUrl + `/${id}`, user);
    }
    isLoggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
    decodeToken() {
        this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        return this.decodedToken;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUserRole() {
        if (this.isLoggedIn()) {
            return this.decodeToken().role;
        }
        return '';
    }
    roleMatch(allowedRoles) {
        let isMatch = false;
        if (this.isLoggedIn) {
            const userRole = this.decodedToken.role;
            if (allowedRoles.includes(userRole)) {
                isMatch = true;
            }
        }
        return isMatch;
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        this.decodedToken = null;
    }
};
AuthenticateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticateService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthenticateService);



/***/ }),

/***/ "./src/app/services/clinic-staff.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/clinic-staff.service.ts ***!
  \**************************************************/
/*! exports provided: ClinicStaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicStaffService", function() { return ClinicStaffService; });
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


let ClinicStaffService = class ClinicStaffService {
    constructor(http) {
        this.http = http;
        this.backendUrl = '/api/ClinicStaffs';
        this.medicalServicerUrl = '/api/MedicalServices';
    }
    getClinicStaffs() {
        return this.http.get(this.backendUrl);
    }
    getStaffById(id) {
        return this.http.get(this.backendUrl + '/' + `${id}`);
    }
    addClinicStaff(medicalServiceId, staff) {
        return this.http.post(this.medicalServicerUrl + '/' + `${medicalServiceId}` + '/ClinicStaffs', staff);
    }
    updateClinicStaff(id, staff) {
        return this.http.put(this.backendUrl + '/' + `${id}`, staff);
    }
    deleteClinicStaff(id) {
        return this.http.delete(this.backendUrl + `/${id}`);
    }
};
ClinicStaffService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ClinicStaffService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ClinicStaffService);



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
        return this.http.put(this.backendUrl + '/' + `${id}`, medicalService);
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

/***/ "./src/app/staff-details/staff-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/staff-details/staff-details.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    padding: 9px;\r\n}\r\n\r\n#details jumbotron {\r\n    margin-top: 10px;\r\n    padding-top: 8px;\r\n    padding-bottom: 28px;\r\n}\r\n\r\n#staffDetails {\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n#staffDetails {\r\n    box-shadow: 0px 4px 21px 0px rgba(0,0,0,0.75);\r\n    padding: 3rem;\r\n}\r\n\r\n#details.container {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n}\r\n\r\n#details h1 {\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.card {\r\n    font-size: 15px;\r\n    background-color: #f8f8f8;\r\n}\r\n\r\nbutton {\r\n    margin: 5px;\r\n}\r\n\r\n.container h4 {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n#crud-staff-btn {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\r\n}\r\n\r\n.btn-primary {\r\n    margin-right: 10px;\r\n}\r\n\r\n#staffDetails-btn {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    #details .jumbotron {\r\n        padding-top: 30px !important;\r\n        padding-bottom: 30px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n}\r\n\r\n.h4 {\r\n    font-size: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYtZGV0YWlscy9zdGFmZi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFHSSw2Q0FBNkM7SUFDN0MsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtFQUErRTtJQUMvRSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQiw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi1kZXRhaWxzL3N0YWZmLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG5cclxuI2RldGFpbHMganVtYm90cm9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbiNzdGFmZkRldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG5cclxuI3N0YWZmRGV0YWlscyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjFweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxufVxyXG5cclxuI2RldGFpbHMuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvY3Rvcm9rei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmcxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuI2RldGFpbHMgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNjcnVkLXN0YWZmLWJ0biB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3N0YWZmRGV0YWlscy1idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICNkZXRhaWxzIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/staff-details/staff-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/staff-details/staff-details.component.ts ***!
  \**********************************************************/
/*! exports provided: StaffDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDetailsComponent", function() { return StaffDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/clinic-staff.service */ "./src/app/services/clinic-staff.service.ts");
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



let StaffDetailsComponent = class StaffDetailsComponent {
    constructor(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.isOpen = false;
        this.label = 'Update';
    }
    ngOnInit() {
        this.staffId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();
    }
    getDetails() {
        this.service.getStaffById(this.staffId).subscribe(result => {
            this.currentStaff = result;
        });
    }
    reloadData() {
        this.isOpen = false;
        this.getDetails();
    }
    deleteStaff() {
        if (confirm("Are you sure you want to delete this clinic staff?")) {
            this.service.deleteClinicStaff(this.staffId)
                .subscribe(result => {
                alert('Clinic staff successfully deleted!');
                this.currentStaff = result;
            }, error => alert('Cannot delete clinic staff'));
        }
    }
    updateStaff() {
        if (this.isOpen === false) {
            this.isOpen = true;
        }
        else {
            this.isOpen = false;
        }
    }
    goBack() {
        this.router.navigateByUrl('/staff-list');
    }
};
StaffDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_2__["ClinicStaffService"] }
];
StaffDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-staff-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./staff-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-details/staff-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./staff-details.component.css */ "./src/app/staff-details/staff-details.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_2__["ClinicStaffService"]])
], StaffDetailsComponent);



/***/ }),

/***/ "./src/app/staff-list/staff-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/staff-list/staff-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    padding: 9px;\r\n}\r\n\r\n.container {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.h4 {\r\n    font-size: 20px;\r\n}\r\n\r\n.wmx12 {\r\n    max-width: 97.2307692rem !important;\r\n}\r\n\r\n.grid {\r\n    display: flex;\r\n}\r\n\r\n.mx-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n}\r\n\r\n.searchbar {\r\n    color: var(--black-800);\r\n    flex-shrink: 10000;\r\n}\r\n\r\n.fl-grow1 {\r\n    flex-grow: 1;\r\n}\r\n\r\n.px12 {\r\n    padding-left: 12px !important;\r\n    padding-right: 12px !important;\r\n}\r\n\r\n.searchbar .s-input {\r\n    border-color: #9199a1;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    color: #383f47;\r\n}\r\n\r\n.s-input.s-input__search {\r\n    padding-left: 32px;\r\n    width: 100%;\r\n}\r\n\r\n.s-input {\r\n    -webkit-appearance: none;\r\n    width: 80%;\r\n    margin: 0;\r\n    padding: .6em .7em;\r\n    border: 1px solid #9fa2a5;\r\n    border-radius: 3px;\r\n    font-size: 13px;\r\n    font-family: inherit;\r\n    line-height: 1.15384615;\r\n}\r\n\r\n.ps-relative {\r\n    position: relative !important;\r\n    display: block;\r\n    padding: 0;\r\n    border: 0;\r\n    font: inherit;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.jumbotron {\r\n    margin-top: 10px;\r\n    padding-top: 8px;\r\n    padding-bottom: 28px;\r\n}\r\n\r\n.s-input-icon.s-input-icon__search {\r\n    right: auto;\r\n    left: .7em;\r\n    color: var(--black-200);\r\n}\r\n\r\n.svg-icon {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.s-input-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -9px;\r\n    pointer-events: none;\r\n}\r\n\r\n.svg-icon:not(.native) * {\r\n    fill: currentColor;\r\n}\r\n\r\n.jumbotron h1, p {\r\n    text-align: center;\r\n}\r\n\r\n.card:hover { /* IE 9 */ /* Safari 3-8 */\r\n    transform: scale(1.05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYtbGlzdC9zdGFmZi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0VBQStFO0lBQy9FLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBLGNBQ2dDLFNBQVMsRUFDTCxlQUFlO0lBQy9DLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmLWxpc3Qvc3RhZmYtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2RvY3Rvcm9rei5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDIvYmcxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaDQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ud214MTIge1xyXG4gICAgbWF4LXdpZHRoOiA5Ny4yMzA3NjkycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5teC1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaGJhciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stODAwKTtcclxuICAgIGZsZXgtc2hyaW5rOiAxMDAwMDtcclxufVxyXG5cclxuLmZsLWdyb3cxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnB4MTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXIgLnMtaW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTE5OWExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogIzM4M2Y0NztcclxufVxyXG5cclxuLnMtaW5wdXQucy1pbnB1dF9fc2VhcmNoIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucy1pbnB1dCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogLjZlbSAuN2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlmYTJhNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTUzODQ2MTU7XHJcbn1cclxuXHJcbi5wcy1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLnMtaW5wdXQtaWNvbi5zLWlucHV0LWljb25fX3NlYXJjaCB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6IC43ZW07XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stMjAwKTtcclxufVxyXG5cclxuLnN2Zy1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5zLWlucHV0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdmctaWNvbjpub3QoLm5hdGl2ZSkgKiB7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcblxyXG4uanVtYm90cm9uIGgxLCBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNhZmFyaSAzLTggKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/staff-list/staff-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff-list/staff-list.component.ts ***!
  \****************************************************/
/*! exports provided: StaffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffListComponent", function() { return StaffListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/clinic-staff.service */ "./src/app/services/clinic-staff.service.ts");
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




let StaffListComponent = class StaffListComponent {
    constructor(router, activatedRoute, service, http, baseUrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.http = http;
        this.baseUrl = baseUrl;
        this.isOpen = false;
    }
    ngOnInit() {
        this.getStaffList();
    }
    getStaffList() {
        this.http.get(this.baseUrl + 'api/ClinicStaffs').subscribe(res => {
            this.staffs = res;
            console.log(this.staffs);
        }, error => console.error(error));
        this.router.navigate(['/staff-list']);
    }
    getStaffById(id) {
        return this.staffs.find(staff => staff.id === id);
    }
};
StaffListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_3__["ClinicStaffService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
StaffListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-staff-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./staff-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff-list/staff-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./staff-list.component.css */ "./src/app/staff-list/staff-list.component.css")).default]
    }),
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_3__["ClinicStaffService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
], StaffListComponent);



/***/ }),

/***/ "./src/app/update-staff/update-staff.component.css":
/*!*********************************************************!*\
  !*** ./src/app/update-staff/update-staff.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\r\n    width: 100%;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    height: 100px;\r\n}\r\n\r\n.btn-primary {\r\n    margin-right: 10px;\r\n}\r\n\r\n#add-medical-service-style .container {\r\n    background-image: url(https://doctorokz.com/wp-content/uploads/2018/02/bg1.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\nlabel {\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXN0YWZmL3VwZGF0ZS1zdGFmZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrRUFBK0U7SUFDL0UsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zdGFmZi91cGRhdGUtc3RhZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNhZGQtbWVkaWNhbC1zZXJ2aWNlLXN0eWxlIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZG9jdG9yb2t6LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9iZzEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/update-staff/update-staff.component.ts":
/*!********************************************************!*\
  !*** ./src/app/update-staff/update-staff.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStaffComponent", function() { return UpdateStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/clinic-staff.service */ "./src/app/services/clinic-staff.service.ts");
/* harmony import */ var _models_medical_service_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/medical-service.model */ "./src/app/models/medical-service.model.ts");
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




let UpdateStaffComponent = class UpdateStaffComponent {
    constructor(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.staffForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            employmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.errorMessage = [];
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.staffForm = this.formBuilder.group({
            id: [this.staff.id],
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.staff.firstName),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.staff.lastName),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.staff.age),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.staff.position),
            employmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.staff.employmentDate),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.staff.salary),
            medicalServiceId: [this.staff.medicalServiceId]
        });
        this.staffForm.updateValueAndValidity();
    }
    save() {
        this.service.updateClinicStaff(this.staff.id, this.staffForm.value)
            .subscribe(_ => {
            this.initForm();
            this.onSubmit.emit();
            alert("Clinic staff successfully updated");
        }, error => {
            alert(error);
        });
    }
};
UpdateStaffComponent.ctorParameters = () => [
    { type: _services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_2__["ClinicStaffService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], UpdateStaffComponent.prototype, "staff", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _models_medical_service_model__WEBPACK_IMPORTED_MODULE_3__["MedicalService"])
], UpdateStaffComponent.prototype, "currentMedicalService", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], UpdateStaffComponent.prototype, "onSubmit", void 0);
UpdateStaffComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-update-staff',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-staff/update-staff.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./update-staff.component.css */ "./src/app/update-staff/update-staff.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_clinic_staff_service__WEBPACK_IMPORTED_MODULE_2__["ClinicStaffService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], UpdateStaffComponent);



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n.form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.btn-primary {\r\n    margin-right: 10px;\r\n}\r\n\r\n.ng-invalid.ng-touched.form-control {\r\n    border: 1px solid red;\r\n}\r\n\r\n.header {\r\n    opacity: 0.8;\r\n    text-align: center;\r\n    padding: 0;\r\n    background-color: #eee;\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n#formRow {\r\n    box-shadow: 0px 4px 21px 0px rgba(0,0,0,0.75);\r\n    padding: 3rem;\r\n    width: 60%;\r\n    margin: auto;\r\n    background-color: #eee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUdJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtUm93IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAyMXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDIxcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIxcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
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




let UserProfileComponent = class UserProfileComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.profileForm = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    createUserProfileForm() {
        this.profileForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]*$/)],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]*$/)],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
        });
    }
    getUserDetails() {
        this.id = this.authService.decodedToken.nameid;
        this.authService.getUserById(this.id).subscribe(user => {
            this.currentUser = user;
            this.profileForm.patchValue({
                firstName: this.currentUser.firstName,
                lastName: this.currentUser.lastName,
                username: this.currentUser.username,
                email: this.currentUser.email
            });
        });
    }
    saveUserData() {
        this.currentUser = this.profileForm.value;
        this.authService.updateUser(this.id, this.currentUser).subscribe(_ => {
            localStorage.setItem('loggedInUser', this.profileForm.value.username);
            this.authService.changeLoggedInUser(this.profileForm.value.username);
            this.router.navigate(['/medical-service-list']);
        }, error => alert(error));
    }
    goBack() {
        this.router.navigate(['/medical-service-list']);
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] }
];
UserProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-profile',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
], UserProfileComponent);



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