(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_payment_page_request_payment_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-payment-page/request-payment-page.component */ "./src/app/request-payment-page/request-payment-page.component.ts");
/* harmony import */ var _pay_bank_page_pay_bank_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pay-bank-page/pay-bank-page.component */ "./src/app/pay-bank-page/pay-bank-page.component.ts");
/* harmony import */ var _pay_card_page_pay_card_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pay-card-page/pay-card-page.component */ "./src/app/pay-card-page/pay-card-page.component.ts");






var routes = [
    { path: 'request-payment', component: _request_payment_page_request_payment_page_component__WEBPACK_IMPORTED_MODULE_3__["RequestPaymentPageComponent"], data: { title: 'Запросить платёж' } },
    { path: 'pay/card', component: _pay_card_page_pay_card_page_component__WEBPACK_IMPORTED_MODULE_5__["PayCardPageComponent"], data: { title: 'Заплатить с карты' } },
    { path: 'pay/bank', component: _pay_bank_page_pay_bank_page_component__WEBPACK_IMPORTED_MODULE_4__["PayBankPageComponent"], data: { title: 'Заплатить из интернет-банка' } },
    { path: '**', redirectTo: '/pay/card' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(activatedRoute, router, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]))
                return;
            var snapshot = _this.activatedRoute.firstChild.snapshot;
            var title = "\u041C\u0430\u0433\u0430\u0437\u0438\u043D - " + (snapshot.data ? snapshot.data.title : '');
            _this.titleService.setTitle(title);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pay_card_page_pay_card_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay-card-page/pay-card-page.component */ "./src/app/pay-card-page/pay-card-page.component.ts");
/* harmony import */ var _pay_bank_page_pay_bank_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pay-bank-page/pay-bank-page.component */ "./src/app/pay-bank-page/pay-bank-page.component.ts");
/* harmony import */ var _request_payment_page_request_payment_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-payment-page/request-payment-page.component */ "./src/app/request-payment-page/request-payment-page.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-template/page-template.component */ "./src/app/page-template/page-template.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pay_card_page_pay_card_page_component__WEBPACK_IMPORTED_MODULE_6__["PayCardPageComponent"],
                _pay_bank_page_pay_bank_page_component__WEBPACK_IMPORTED_MODULE_7__["PayBankPageComponent"],
                _request_payment_page_request_payment_page_component__WEBPACK_IMPORTED_MODULE_8__["RequestPaymentPageComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _page_template_page_template_component__WEBPACK_IMPORTED_MODULE_10__["PageTemplateComponent"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_11__["FieldComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/field/field.component.css":
/*!*******************************************!*\
  !*** ./src/app/field/field.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  outline: none;\n  border: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance:textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.input {\n  position: relative;\n  width: 100%;\n}\n\n.field, .field-mask {\n  border: 0;\n  padding: 10px;\n  border-bottom: 1px solid #B0B0B0;\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent;\n  outline: none;\n  font-weight: bold;\n  font-size: 100%;\n  color: #000;\n  font-family: Arial, Helvetica, sans-serif;\n  transition: color .4s, border .4s;\n}\n\n.placeholder {\n  text-overflow: ellipsis;\n white-space: nowrap;\n width: 100%;\n overflow: hidden;\n position: absolute;\n  pointer-events: none;\n  top: 10px;\n  left: 10px;\n  color: #B0B0B0;\n  transition: all .4s;\n}\n\n.hint {\n  color: #B0B0B0;\n  font-size: 70%;\n  left: 50%;\n  min-height: 1.5em;\n  padding-left: 10px;\n  padding-top: .2em;\n  transition: all .4s;\n}\n\n.input-red > .field, .input-red > .field-mask {\n  border-bottom: 1px solid #D8000C;\n}\n\n.input-red > .hint {\n  color: #D8000C;\n}\n\n.input-red-all > .field, .input-red-all > .field-mask {\n  border-bottom: 1px solid #D8000C;\n}\n\n.input-red-all > * {\n  color: #D8000C;\n}\n\n.input-yellow > .field, .input-yellow > .field-mask {\n  border-bottom: 1px solid #eabc04;\n}\n\n.input-yellow > .hint {\n  color: #eabc04;\n}\n\n.input-green > .field, .input-green > .field-mask {\n  border-bottom: 1px solid #4F8A10;\n}\n\n.input-green > .hint {\n  color: #4F8A10;\n}\n\n.field:focus + .field-mask {\n  visibility: hidden;\n}\n\n.field:not(:focus) {\n  opacity: 0;\n}\n\n.field-mask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQsIC5maWVsZC1tYXNrIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0IwQjBCMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIC40cywgYm9yZGVyIC40cztcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI0IwQjBCMDtcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmhpbnQge1xuICBjb2xvcjogI0IwQjBCMDtcbiAgZm9udC1zaXplOiA3MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLWhlaWdodDogMS41ZW07XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IC4yZW07XG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5pbnB1dC1yZWQgPiAuZmllbGQsIC5pbnB1dC1yZWQgPiAuZmllbGQtbWFzayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDgwMDBDO1xufVxuXG4uaW5wdXQtcmVkID4gLmhpbnQge1xuICBjb2xvcjogI0Q4MDAwQztcbn1cblxuLmlucHV0LXJlZC1hbGwgPiAuZmllbGQsIC5pbnB1dC1yZWQtYWxsID4gLmZpZWxkLW1hc2sge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4MDAwQztcbn1cblxuLmlucHV0LXJlZC1hbGwgPiAqIHtcbiAgY29sb3I6ICNEODAwMEM7XG59XG5cbi5pbnB1dC15ZWxsb3cgPiAuZmllbGQsIC5pbnB1dC15ZWxsb3cgPiAuZmllbGQtbWFzayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFiYzA0O1xufVxuXG4uaW5wdXQteWVsbG93ID4gLmhpbnQge1xuICBjb2xvcjogI2VhYmMwNDtcbn1cblxuLmlucHV0LWdyZWVuID4gLmZpZWxkLCAuaW5wdXQtZ3JlZW4gPiAuZmllbGQtbWFzayB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNEY4QTEwO1xufVxuXG4uaW5wdXQtZ3JlZW4gPiAuaGludCB7XG4gIGNvbG9yOiAjNEY4QTEwO1xufVxuXG4uZmllbGQ6Zm9jdXMgKyAuZmllbGQtbWFzayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZpZWxkOm5vdCg6Zm9jdXMpIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZpZWxkLW1hc2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/field/field.component.html":
/*!********************************************!*\
  !*** ./src/app/field/field.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"'input input-' + (props.color || 'gray')\">\n  <input #input [readonly]=\"props.readonly\" [type]=\"props.type\" [id]=\"props.id\" [(ngModel)]=\"fieldText\" class=\"field\">\n  <input [readonly]=\"props.readonly\" class=\"field-mask\" [(ngModel)]=\"fieldMask\">\n  <div class=\"placeholder\">{{ (fieldText || fieldMask) ? '' : props.placeholder }}</div>\n  <div class=\"hint\">{{ props.hint || (fieldText ? props.placeholder : '') }}</div>\n</div>"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldComponent = /** @class */ (function () {
    function FieldComponent() {
        this.props = {};
    }
    Object.defineProperty(FieldComponent.prototype, "fieldText", {
        get: function () {
            return this._fieldText;
        },
        set: function (newValue) {
            var cb = this.props.onChange || (function () { });
            var fmt = this.props.format || (function (x) { return x; });
            if (this.props.type === 'number' && !newValue) {
                this.input.nativeElement.value = '';
            }
            this.props.value = newValue;
            this.props.valid = this.props.type === 'number' ?
                (!isNaN(parseInt(String(newValue))) && this.props.min <= Number(newValue) && this.props.max >= Number(newValue)) :
                (this.props.regex ? !!this.props.regex.exec(newValue) : true);
            this.props.valueMasked = fmt(newValue, this.props.valid);
            this.fieldMask = newValue ? this.props.valueMasked : '';
            cb({ id: this.props.id, newValue: newValue });
            this._fieldText = newValue;
        },
        enumerable: true,
        configurable: true
    });
    FieldComponent.prototype.ngOnInit = function () {
        this.fieldText = this.props.value || '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FieldComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FieldComponent.prototype, "props", void 0);
    FieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/field/field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/mask.ts":
/*!*************************!*\
  !*** ./src/app/mask.ts ***!
  \*************************/
/*! exports provided: pad, padRight, splitGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padRight", function() { return padRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitGroups", function() { return splitGroups; });
var pad = function (number, width, filler) {
    if (filler === void 0) { filler = '0'; }
    var n = number + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(filler) + n;
};
var padRight = function (number, width, filler) {
    if (filler === void 0) { filler = '0'; }
    var n = number + '';
    return n.length >= width ? n : n + new Array(width - n.length + 1).join(filler);
};
var splitGroups = function (val, indeces) {
    var result = [];
    var part = '';
    for (var i = 0; i < val.length; i++) {
        part += val[i];
        if (indeces.includes(i)) {
            result.push(part);
            part = '';
        }
    }
    result.push(part);
    return result;
};


/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link {\n  display: inline-block;\n}\n\n.menu > .link {\n  font-size: 150%;\n  margin: 20px 40px 20px 0px;\n}\n\n.link.selected {\n  color: #000;\n  cursor: default;\n  pointer-events: none;\n}\n\n.submenu, .menu {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.submenu > .link.selected {\n  background: #F4F4F4;\n}\n\n.submenu > .link:not(.selected):hover {\n  background: #FAFAFA;\n}\n\n.submenu > .link {\n  padding: 8px 25px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tZW51ID4gLmxpbmsge1xuICBmb250LXNpemU6IDE1MCU7XG4gIG1hcmdpbjogMjBweCA0MHB4IDIwcHggMHB4O1xufVxuXG4ubGluay5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3VibWVudSwgLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG5cbi5zdWJtZW51ID4gLmxpbmsuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xufVxuXG4uc3VibWVudSA+IC5saW5rOm5vdCguc2VsZWN0ZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbn1cblxuLnN1Ym1lbnUgPiAubGluayB7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <a routerLink=\"/pay/card\" [class]=\"isSubmenuActive ? 'selected link' : 'link'\">Заплатить</a>\n  <a class=\"link\" routerLink=\"/request-payment\" routerLinkActive=\"selected\">\n    Запросить платёж\n  </a>\n</div>\n<div class=\"submenu\" *ngIf=\"isSubmenuActive\">\n  <a class=\"link\" routerLink=\"/pay/card\" routerLinkActive=\"selected\">💳 С карты любого банка</a>\n  <a class=\"link\" routerLink=\"/pay/bank\" routerLinkActive=\"selected\">💻 Из своего интернет-банка</a>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function () {
            _this.isSubmenuActive = _this.router.url.includes('/pay/');
        });
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/page-template/page-template.component.css":
/*!***********************************************************!*\
  !*** ./src/app/page-template/page-template.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 2px solid #E0DCDD;\n  margin-bottom: 20px;\n}\n\n.template {\n  width: 900px;\n  margin: 0 auto;\n  border: 2px solid #E0DCDD;\n  border-top: 0;\n  padding: 40px;\n  margin-bottom: 40px;\n}\n\n.h2 {\n  margin: 0;\n  font-size: 144%;\n}\n\np {\n  margin: .5em 0;\n}\n\np > a {\n  margin-right: 20px;\n}\n\n.phone {\n  color: #888;\n}\n\n.price {\n  color: #666;\n}\n\n.sites {\n  display: flex;\n  margin: 40px 0;\n  justify-content: space-between;\n}\n\n.site {\n  flex: 1 1 auto;\n  border: 1px solid #eee;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  padding: 20px;\n  align-items: center;\n  text-align: left;\n  min-height: 250px;\n}\n\n.site:not(:first-child) {\n  margin-left: 40px;\n}\n\n.site-img {\n  width: 200px;\n}\n\n.description {\n  margin-bottom: 20px;\n}\n\n.social-btns {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.social-btn {\n  padding: 5px 10px;\n  background: #E0DCDD;\n  border-radius: 3px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  color: #000;\n}\n\n.social-btn:before {\n  content: '';\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.social-tweet:before {\n  background-image: url('/web-dhtml/assets/icon_twitter.svg');\n}\n\n.social-tweet:before, .social-fb:before, .social-tg:before {\n  margin-right: 7px;\n}\n\n.social-fb:before {\n  background-image: url('/web-dhtml/assets/icon_fb.svg');\n}\n\n.social-fb:after {\n  content: '176';\n  margin-left: 7px;\n  font-size: 90%;\n}\n\n.social-google:before {\n  background-size: 25px;\n  background-position: -2px -6px;\n  background-image: url('/web-dhtml/assets/icon_gplus.svg');\n}\n\n.social-vk:before {\n  background-image: url('/web-dhtml/assets/icon_vk.svg');\n}\n\n.social-ok:before {\n  background-image: url('/web-dhtml/assets/icon_ok.svg');\n}\n\n.social-tg:before {\n  background-image: url('/web-dhtml/assets/icon_tg.svg');\n}\n\n.social-linkedin:before {\n  background-image: url('/web-dhtml/assets/icon_linkedin.svg');\n}\n\n.footer {\n  border-top: 2px solid #E0DCDD;\n  padding-top: 40px;\n}\n\n@media (max-width: 768px) {\n  .template {\n    border: 0;\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .header {\n    flex-flow: column-reverse nowrap;\n  }\n\n  .animal-logo {\n    width: 100%;\n  }\n\n  .sites {\n    flex-flow: column;\n  }\n\n  .site-img {\n    width: 100%;\n  }\n\n  .site:not(:first-child) {\n    margin-left: 0;\n    margin-top: 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9wYWdlLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzREFBNEM7QUFDOUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLHlEQUErQztBQUNqRDs7QUFFQTtFQUNFLHNEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHNEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHNEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDREQUFrRDtBQUNwRDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9wYWdlLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0UwRENERDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRlbXBsYXRlIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgI0UwRENERDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0NCU7XG59XG5cbnAge1xuICBtYXJnaW46IC41ZW0gMDtcbn1cblxucCA+IGEge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5waG9uZSB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4ucHJpY2Uge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnNpdGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNpdGUge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xufVxuXG4uc2l0ZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4uc2l0ZS1pbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cblxuLnNvY2lhbC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cblxuLnNvY2lhbC1idG4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI0UwRENERDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNvY2lhbC1idG46YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNvY2lhbC10d2VldDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbl90d2l0dGVyLnN2ZycpO1xufVxuXG4uc29jaWFsLXR3ZWV0OmJlZm9yZSwgLnNvY2lhbC1mYjpiZWZvcmUsIC5zb2NpYWwtdGc6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5zb2NpYWwtZmI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25fZmIuc3ZnJyk7XG59XG5cbi5zb2NpYWwtZmI6YWZ0ZXIge1xuICBjb250ZW50OiAnMTc2JztcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiA5MCU7XG59XG5cbi5zb2NpYWwtZ29vZ2xlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbl9ncGx1cy5zdmcnKTtcbn1cblxuLnNvY2lhbC12azpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbl92ay5zdmcnKTtcbn1cblxuLnNvY2lhbC1vazpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbl9vay5zdmcnKTtcbn1cblxuLnNvY2lhbC10ZzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbl90Zy5zdmcnKTtcbn1cblxuLnNvY2lhbC1saW5rZWRpbjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbl9saW5rZWRpbi5zdmcnKTtcbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRTBEQ0REO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50ZW1wbGF0ZSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlIG5vd3JhcDtcbiAgfVxuXG4gIC5hbmltYWwtbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2l0ZXMge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICB9XG5cbiAgLnNpdGUtaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zaXRlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/page-template/page-template.component.html":
/*!************************************************************!*\
  !*** ./src/app/page-template/page-template.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"template\">\n  <header class=\"header\">\n    <div class=\"header-contacts\">\n      <h2 class=\"h2\">{{ name }}</h2>\n      <p>\n        <a class=\"phone link\" href=\"tel:+79221554807\">+79221554807</a>\n        <a class=\"link\" href=\"https://mary.com\">mary.com</a>\n        <a class=\"link\" href=\"mailto:mary@gmail.com\">mary@gmail.com</a>\n      </p>\n      <p><a class=\"link\" href=\"#\">Информация о компании</a></p>\n      <p>&nbsp;</p>\n      <p><a class=\"link\" href=\"#\">Показать реквизиты</a></p>\n    </div>\n    <div class=\"header-photo\">\n      <img class=\"animal-logo\" title=\"{{ name }}\" alt=\"{{ name }}\" width=\"300\" src=\"/web-dhtml/assets/bird.png\">\n    </div>\n  </header>\n  <app-menu></app-menu>\n  <ng-content></ng-content>\n  <footer class=\"footer\">\n    <h2 class=\"h2\">О компании {{ name }}</h2>\n    <div class=\"sites\">\n      <div *ngFor=\"let _ of [1,2,3]\" class=\"site\">\n        <img class=\"site-img\" title=\"Озеро таватуй))\" alt=\"Клубника на улице Рамбла\" src=\"/web-dhtml/assets/italy.jpg\">\n        <div class=\"site-description\">\n          <p>Клубника на улице Рамбла</p>{{i}}\n          <p class=\"price\">139,99 руб.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"description\">\n      <p>\n        Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния (исп. и галис. Reino de España МФА\n        [ˈreino ðe\n        esˈpaɲa]) — суверенное государство на юго-западе Европы и частично в Африке, член Европейского союза и\n        НАТО. Испания\n        занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова...\n      </p>\n      <p><a class=\"link\" href=\"#\">Показать всё</a></p>\n    </div>\n    <div class=\"social-btns\">\n      <a href=\"#\" class=\"social-btn social-tweet\">Твитнуть</a>\n      <a href=\"#\" class=\"social-btn social-fb\">Поделиться</a>\n      <a href=\"#\" class=\"social-btn social-google\"></a>\n      <a href=\"#\" class=\"social-btn social-vk\"></a>\n      <a href=\"#\" class=\"social-btn social-ok\"></a>\n      <a href=\"#\" class=\"social-btn social-linkedin\"></a>\n      <a href=\"#\" class=\"social-btn social-tg\">Отправить</a>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/page-template/page-template.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-template/page-template.component.ts ***!
  \**********************************************************/
/*! exports provided: PageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplateComponent", function() { return PageTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTemplateComponent = /** @class */ (function () {
    function PageTemplateComponent() {
        this.name = "Индивидуальный предприниматель Шевцова Мария Валерьевна";
    }
    PageTemplateComponent.prototype.ngOnInit = function () {
    };
    PageTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-template',
            template: __webpack_require__(/*! ./page-template.component.html */ "./src/app/page-template/page-template.component.html"),
            styles: [__webpack_require__(/*! ./page-template.component.css */ "./src/app/page-template/page-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTemplateComponent);
    return PageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pay-bank-page/pay-bank-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pay-bank-page/pay-bank-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".other-fields {\n  margin: 40px 0;\n}\n\n.other-fields > div {\n  display: flex;\n  align-items: baseline;\n  align-content: flex-start;\n}\n\n.label {\n  min-width: 30%;\n  margin-right: 40px;\n  color: #A3A2A2;\n}\n\n.other-fields > div > :not(:first-child) {\n  width: 50%;\n}\n\n.ndses {\n  margin-left: 10px;\n  margin-top: -10px;\n  position: relative;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.selected {\n  color: #000;\n  pointer-events: none;\n}\n\n@media (max-width: 768px) {\n  .other-fields > div > :not(:first-child) {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LWJhbmstcGFnZS9wYXktYmFuay1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BheS1iYW5rLXBhZ2UvcGF5LWJhbmstcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90aGVyLWZpZWxkcyB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG4ub3RoZXItZmllbGRzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ubGFiZWwge1xuICBtaW4td2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBjb2xvcjogI0EzQTJBMjtcbn1cblxuLm90aGVyLWZpZWxkcyA+IGRpdiA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5uZHNlcyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm90aGVyLWZpZWxkcyA+IGRpdiA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pay-bank-page/pay-bank-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pay-bank-page/pay-bank-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-template>\n  <div class=\"other-fields\">\n    <p>Сформируйте платёжку и загрузите её в свой банк для подписи</p>\n    <div>\n      <label class=\"label\" [for]=\"props.from.id\">От кого</label>\n      <app-field [props]=\"props.from\"></app-field>\n    </div>\n    <div>\n      <label title=\"Банковский идентификационный код\" class=\"label\" [for]=\"props.bik.id\">БИК</label>\n      <app-field [props]=\"props.bik\"></app-field>\n    </div>\n    <div>\n      <label class=\"label\" [for]=\"props.account.id\">Номер счёта</label>\n      <app-field [props]=\"props.account\"></app-field>\n    </div>\n    <div>\n      <label *ngIf=\"nds === 1\" title=\"Налог на добавленную стоимость\" class=\"label\" [for]=\"props.nds.id\">НДС</label>\n      <label *ngIf=\"nds === 2\" title=\"Налог на добавленную стоимость\" class=\"label\" [for]=\"props.nds2.id\">НДС</label>\n      <label *ngIf=\"nds === 3\" title=\"Налог на добавленную стоимость\" class=\"label\" [for]=\"props.nds3.id\">НДС</label>\n      <app-field *ngIf=\"nds === 1\" [props]=\"props.nds\"></app-field>\n      <app-field *ngIf=\"nds === 2\" [props]=\"props.nds2\"></app-field>\n      <app-field *ngIf=\"nds === 3\" [props]=\"props.nds3\"></app-field>\n    </div>\n    <div>\n      <label class=\"label\"></label>\n      <p class=\"ndses\">\n        <a (click)=\"nds = 1\" [class]=\"nds === 1 ? 'selected link' : 'link'\">НДС 18%</a> &nbsp;\n        <a (click)=\"nds = 2\" [class]=\"nds === 2 ? 'selected link' : 'link'\">НДС 10%</a> &nbsp;\n        <a (click)=\"nds = 3\" [class]=\"nds === 3 ? 'selected link' : 'link'\">Без НДС</a> &nbsp;\n      </p>\n    </div>\n    <div>\n      <label class=\"label\" [for]=\"props.amount.id\">Сколько</label>\n      <app-field [props]=\"props.amount\"></app-field>\n    </div>\n    <p>\n      <button (click)=\"onSubmit()\" [title]=\"isFormValid ? '' : 'Форма заполнена неверно'\" [class]=\"'rainbow-btn ' + (isFormValid ? '' : 'disabled')\">\n        Получить файл для интернет-банка\n      </button>\n    </p>\n    <p><a class=\"link\" href=\"javascript:location.reload()\">Очистить форму</a></p>\n  </div>\n</app-page-template>"

/***/ }),

/***/ "./src/app/pay-bank-page/pay-bank-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pay-bank-page/pay-bank-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PayBankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayBankPageComponent", function() { return PayBankPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mask */ "./src/app/mask.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation */ "./src/app/validation.ts");




var PayBankPageComponent = /** @class */ (function () {
    function PayBankPageComponent() {
        this.props = {
            from: {
                regex: /^(\d{10}|\d{12})$/,
                placeholder: 'ИНН или название плательщика',
                errorHint: 'ИНН - 10 или 12 цифр',
            },
            bik: {
                type: 'number',
                format: function (x) { return Object(_mask__WEBPACK_IMPORTED_MODULE_2__["splitGroups"])(Object(_mask__WEBPACK_IMPORTED_MODULE_2__["padRight"])(x, 9), [2, 5]).join('-'); },
                placeholder: '',
                errorHint: 'Введите 9 цифр',
                min: 0,
                max: 999999999,
            },
            account: {
                regex: /./,
                placeholder: '',
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            nds: {
                regex: /./,
                placeholder: '',
                color: 'red',
                value: 'НДС 18%',
                readonly: true,
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            nds2: {
                regex: /./,
                placeholder: '',
                color: 'yellow',
                value: 'НДС 10%',
                readonly: true,
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            nds3: {
                regex: /./,
                placeholder: '',
                color: 'green',
                value: 'Без НДС',
                readonly: true,
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            amount: {
                type: 'number',
                placeholder: 'от 1000 до 75000₽',
                errorHint: 'Введите число от 1000 до 75000',
                format: function (x) { return x + "\u20BD"; },
                min: 1000,
                max: 75000,
            },
        };
        this.nds = 2;
        this.getInvalids = function () { return ({}); };
    }
    PayBankPageComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toBeSent, _i, _a, _b, key, value, link;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        toBeSent = {};
                        for (_i = 0, _a = Object.entries(this.props); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            if (key.includes('nds'))
                                continue;
                            value['color'] = value['valid'] ? 'gray' : 'red-all';
                            value['hint'] = value['valid'] ? '' : value['errorHint'];
                            toBeSent[key] = value['valueMasked'];
                        }
                        toBeSent['nds'] = this.nds;
                        if (!this.isFormValid) return [3 /*break*/, 2];
                        link = document.createElement('a');
                        link.href = 'data:application/json,' + encodeURIComponent(JSON.stringify(toBeSent, null, 2));
                        link.download = 'paybank.json';
                        link.click();
                        alert("Form is valid, request can be sent: " + JSON.stringify(toBeSent, null, 2));
                        return [4 /*yield*/, fetch('/api/pay-bank', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(toBeSent),
                            })];
                    case 1:
                        _c.sent();
                        alert('Sent');
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(PayBankPageComponent.prototype, "isFormValid", {
        get: function () {
            return Object.keys(this.getInvalids()).length === 0;
        },
        enumerable: true,
        configurable: true
    });
    PayBankPageComponent.prototype.ngOnInit = function () {
        this.getInvalids = Object(_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props);
    };
    PayBankPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-bank-page',
            template: __webpack_require__(/*! ./pay-bank-page.component.html */ "./src/app/pay-bank-page/pay-bank-page.component.html"),
            styles: [__webpack_require__(/*! ./pay-bank-page.component.css */ "./src/app/pay-bank-page/pay-bank-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PayBankPageComponent);
    return PayBankPageComponent;
}());



/***/ }),

/***/ "./src/app/pay-card-page/pay-card-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pay-card-page/pay-card-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card-page {\n  margin: 40px 0;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.visa {\n  border-radius: 10px;\n  background: #F7F7F7;\n  flex: 0 0;\n  margin-right: 40px;\n  box-sizing: border-box;\n  min-height: 220px;\n  min-width: 380px;\n  position: relative;\n  box-shadow: 10px 15px 40px -8px rgba(153,153,153,1);\n}\n\n.visa-logo {\n  background: no-repeat url('/web-dhtml/assets/visa.png');\n  position: absolute;\n  width: 231px;\n  height: 62px;\n  right: -20px;\n  top: 10px;\n  -webkit-transform: scale(.7);\n          transform: scale(.7);\n}\n\n.visa-fields-container {\n  position: absolute;\n  width: 80%;\n  left: 20px;\n  bottom: 20px;\n}\n\n.other-fields {\n  flex: 1 1 auto;\n}\n\n.other-fields > div {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  align-content: flex-start;\n}\n\n.other-fields > div > :not(:first-child) {\n  width: 100%;\n}\n\n.label {\n white-space: nowrap;\n min-width: 30%;\n  margin-right: 20px;\n}\n\n.visa-fields-2 {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-start;\n}\n\n.visa-fields-2 > :first-child {\n  margin-right: 40px;\n  width: 40%;\n}\n\n.visa-fields-2 > :not(:first-child) {\n  flex: 0 0 37%;\n}\n\n@media (max-width: 768px) {\n  .card-page {\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .visa {\n    margin-right: 0px;\n    margin-bottom: 40px;\n  }\n\n  .other-fields {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LWNhcmQtcGFnZS9wYXktY2FyZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsdURBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1QsNEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BheS1jYXJkLXBhZ2UvcGF5LWNhcmQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1wYWdlIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnZpc2Ege1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xuICBmbGV4OiAwIDA7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIG1pbi13aWR0aDogMzgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMTBweCAxNXB4IDQwcHggLThweCByZ2JhKDE1MywxNTMsMTUzLDEpO1xufVxuXG4udmlzYS1sb2dvIHtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybCgnL2Fzc2V0cy92aXNhLnBuZycpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMzFweDtcbiAgaGVpZ2h0OiA2MnB4O1xuICByaWdodDogLTIwcHg7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XG59XG5cbi52aXNhLWZpZWxkcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MCU7XG4gIGxlZnQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLm90aGVyLWZpZWxkcyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ub3RoZXItZmllbGRzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5vdGhlci1maWVsZHMgPiBkaXYgPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhYmVsIHtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnZpc2EtZmllbGRzLTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnZpc2EtZmllbGRzLTIgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi52aXNhLWZpZWxkcy0yID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgZmxleDogMCAwIDM3JTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLXBhZ2Uge1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnZpc2Ege1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAub3RoZXItZmllbGRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pay-card-page/pay-card-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pay-card-page/pay-card-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-template>\n  <div class=\"card-page\">\n    <div class=\"visa\">\n      <div class=\"visa-logo\"></div>\n      <div class=\"visa-fields-container\">\n        <div class=\"visa-fields\">\n          <app-field [props]=\"props.card\"></app-field>\n        </div>\n        <div class=\"visa-fields-2\">\n          <app-field [props]=\"props.mmyy\"></app-field>\n          <app-field [props]=\"props.cvc\"></app-field>\n        </div>\n      </div>\n    </div>\n    <div class=\"other-fields\">\n      <div>\n        <label class=\"label\" [for]=\"props.amount.id\">Сумма</label>\n        <app-field [props]=\"props.amount\"></app-field>\n      </div>\n      <div>\n        <label class=\"label\" [for]=\"props.comment.id\">Комментарий</label>\n        <app-field [props]=\"props.comment\"></app-field>\n      </div>\n      <div>\n        <label class=\"label\" [for]=\"props.email.id\">Ваша эл.почта</label>\n        <app-field [props]=\"props.email\"></app-field>\n      </div>\n      <button (click)=\"onSubmit()\" [title]=\"(isFormValid ? '' : 'Форма заполнена неверно')\" [class]=\"'rainbow-btn ' + (isFormValid ? '' : 'disabled')\">Заплатить</button>\n    </div>\n  </div>\n</app-page-template>"

/***/ }),

/***/ "./src/app/pay-card-page/pay-card-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pay-card-page/pay-card-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PayCardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayCardPageComponent", function() { return PayCardPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mask */ "./src/app/mask.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation */ "./src/app/validation.ts");




var PayCardPageComponent = /** @class */ (function () {
    function PayCardPageComponent() {
        this.props = {
            card: {
                type: 'number',
                format: function (x) { return Object(_mask__WEBPACK_IMPORTED_MODULE_2__["splitGroups"])(Object(_mask__WEBPACK_IMPORTED_MODULE_2__["padRight"])(x, 16), [3, 7, 11]).join(' '); },
                placeholder: 'Номер карты',
                errorHint: 'Введите 16 цифр',
                min: 0,
                max: 10000000000000000,
            },
            mmyy: {
                regex: /^(1[012]|0[1-9])(1[789]|2[0-9]|3[0-5])$/,
                placeholder: 'ММ/ГГ',
                errorHint: 'Введите 4 цифры',
                format: function (x, valid) { return valid ?
                    Object(_mask__WEBPACK_IMPORTED_MODULE_2__["splitGroups"])(x, [1]).join('/') : '??/??'; },
            },
            cvc: {
                type: 'number',
                format: function (x) { return Object(_mask__WEBPACK_IMPORTED_MODULE_2__["pad"])(x, 3); },
                placeholder: 'CVC',
                errorHint: 'Введите 3 цифры',
                min: 0,
                max: 999,
            },
            amount: {
                type: 'number',
                placeholder: 'от 1000 до 75000₽',
                errorHint: 'Введите число от 1000 до 75000',
                format: function (x) { return x + "\u20BD"; },
                min: 1000,
                max: 75000,
            },
            comment: {
                placeholder: 'До 150 символов',
            },
            email: {
                regex: /@/,
                placeholder: 'Для квитанций об оплате',
                errorHint: 'Введите почту в формате example@mail.ru',
            },
        };
        this.getInvalids = function () { return ({}); };
    }
    PayCardPageComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toBeSent, _i, _a, _b, key, value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        toBeSent = {};
                        for (_i = 0, _a = Object.entries(this.props); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            value['color'] = value['valid'] ? 'gray' : 'red-all';
                            value['hint'] = value['valid'] ? '' : value['errorHint'];
                            toBeSent[key] = value['valueMasked'];
                        }
                        if (!this.isFormValid) return [3 /*break*/, 2];
                        alert("Form is valid, request can be sent: " + JSON.stringify(toBeSent, null, 2));
                        return [4 /*yield*/, fetch('/api/pay-card', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(toBeSent),
                            })];
                    case 1:
                        _c.sent();
                        alert('Sent');
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(PayCardPageComponent.prototype, "isFormValid", {
        get: function () {
            return Object.keys(this.getInvalids()).length === 0;
        },
        enumerable: true,
        configurable: true
    });
    PayCardPageComponent.prototype.ngOnInit = function () {
        this.getInvalids = Object(_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props);
    };
    PayCardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-card-page',
            template: __webpack_require__(/*! ./pay-card-page.component.html */ "./src/app/pay-card-page/pay-card-page.component.html"),
            styles: [__webpack_require__(/*! ./pay-card-page.component.css */ "./src/app/pay-card-page/pay-card-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PayCardPageComponent);
    return PayCardPageComponent;
}());



/***/ }),

/***/ "./src/app/request-payment-page/request-payment-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/request-payment-page/request-payment-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".other-fields {\n  margin: 40px 0;\n}\n\n.other-fields > div {\n  display: flex;\n  align-items: baseline;\n  align-content: flex-start;\n}\n\n.label {\n  min-width: 30%;\n  margin-right: 40px;\n  color: #A3A2A2;\n}\n\n.other-fields > div > :not(:first-child) {\n  width: 50%;\n}\n\n.ndses {\n  margin-left: 10px;\n  margin-top: -10px;\n  position: relative;\n}\n\n.link {\n  cursor: pointer;\n}\n\n.selected {\n  color: #000;\n  pointer-events: none;\n}\n\n.phone-link-container {\n  font-size: 75%;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n@media (max-width: 768px) {\n  .other-fields > div > :not(:first-child) {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1wYXltZW50LXBhZ2UvcmVxdWVzdC1wYXltZW50LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXF1ZXN0LXBheW1lbnQtcGFnZS9yZXF1ZXN0LXBheW1lbnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90aGVyLWZpZWxkcyB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG4ub3RoZXItZmllbGRzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ubGFiZWwge1xuICBtaW4td2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBjb2xvcjogI0EzQTJBMjtcbn1cblxuLm90aGVyLWZpZWxkcyA+IGRpdiA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5uZHNlcyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucGhvbmUtbGluay1jb250YWluZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm90aGVyLWZpZWxkcyA+IGRpdiA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/request-payment-page/request-payment-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/request-payment-page/request-payment-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-template>\n  <div class=\"other-fields\">\n    <p>\n      Сформируйте платёжку, а Индивидуальный предприниматель Шевцова Мария Валерьевна\n      подпишет её у себя в интернет-банке\n    </p>\n    <div>\n      <label class=\"label\" [for]=\"props.from.id\">ИНН получателя</label>\n      <app-field [props]=\"props.from\"></app-field>\n    </div>\n    <div>\n      <label title=\"Банковский идентификационный код\" class=\"label\" [for]=\"props.bik.id\">БИК</label>\n      <app-field [props]=\"props.bik\"></app-field>\n    </div>\n    <div>\n      <label class=\"label\" [for]=\"props.account.id\">Номер счёта</label>\n      <app-field [props]=\"props.account\"></app-field>\n    </div>\n    <div>\n      <label *ngIf=\"nds === 1\" title=\"Налог на добавленную стоимость\" class=\"label\" [for]=\"props.nds.id\">НДС</label>\n      <label *ngIf=\"nds === 2\" title=\"Налог на добавленную стоимость\" class=\"label\" [for]=\"props.nds2.id\">НДС</label>\n      <label *ngIf=\"nds === 3\" title=\"Налог на добавленную стоимость\" class=\"label\" [for]=\"props.nds3.id\">НДС</label>\n      <app-field *ngIf=\"nds === 1\" [props]=\"props.nds\"></app-field>\n      <app-field *ngIf=\"nds === 2\" [props]=\"props.nds2\"></app-field>\n      <app-field *ngIf=\"nds === 3\" [props]=\"props.nds3\"></app-field>\n    </div>\n    <div>\n      <label class=\"label\"></label>\n      <p class=\"ndses\">\n        <a (click)=\"nds = 1\" [class]=\"nds === 1 ? 'selected link' : 'link'\">НДС 18%</a> &nbsp;\n        <a (click)=\"nds = 2\" [class]=\"nds === 2 ? 'selected link' : 'link'\">НДС 10%</a> &nbsp;\n        <a (click)=\"nds = 3\" [class]=\"nds === 3 ? 'selected link' : 'link'\">Без НДС</a> &nbsp;\n      </p>\n    </div>\n    <div>\n      <label class=\"label\" [for]=\"props.amount.id\">Сколько</label>\n      <app-field [props]=\"props.amount\"></app-field>\n    </div>\n    <div>\n      <label class=\"label\" [for]=\"props.phone.id\">Номер телефона</label>\n      <app-field [props]=\"props.phone\"></app-field>\n    </div>\n    <div>\n      <label class=\"label\"></label>\n      <div class=\"phone-link-container\">\n        <a class=\"link\" href=\"#\">Оставляя телефон, вы соглашаетесь на обработку персональных данных</a>\n      </div>\n    </div>\n    <div>\n      <label class=\"label\" [for]=\"props.email.id\">Эл.почта</label>\n      <app-field [props]=\"props.email\"></app-field>\n    </div>\n    <p>\n      <button (click)=\"onSubmit()\" [title]=\"isFormValid ? '' : 'Форма заполнена неверно'\" [class]=\"'rainbow-btn ' + (isFormValid ? '' : 'disabled')\">\n        Создать платёж\n      </button>\n    </p>\n    <p><a class=\"link\" href=\"javascript:location.reload()\">Очистить форму</a></p>\n  </div>\n</app-page-template>"

/***/ }),

/***/ "./src/app/request-payment-page/request-payment-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/request-payment-page/request-payment-page.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestPaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPaymentPageComponent", function() { return RequestPaymentPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mask */ "./src/app/mask.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation */ "./src/app/validation.ts");




var RequestPaymentPageComponent = /** @class */ (function () {
    function RequestPaymentPageComponent() {
        this.props = {
            from: {
                regex: /^(\d{10}|\d{12})$/,
                placeholder: 'ИНН или название плательщика',
                errorHint: 'ИНН - 10 или 12 цифр',
            },
            bik: {
                type: 'number',
                format: function (x) { return Object(_mask__WEBPACK_IMPORTED_MODULE_2__["splitGroups"])(Object(_mask__WEBPACK_IMPORTED_MODULE_2__["padRight"])(x, 9), [2, 5]).join('-'); },
                placeholder: '',
                errorHint: 'Введите 9 цифр',
                min: 0,
                max: 999999999,
            },
            account: {
                regex: /./,
                placeholder: '',
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            nds: {
                regex: /./,
                placeholder: '',
                color: 'red',
                value: 'НДС 18%',
                readonly: true,
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            nds2: {
                regex: /./,
                placeholder: '',
                color: 'yellow',
                value: 'НДС 10%',
                readonly: true,
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            nds3: {
                regex: /./,
                placeholder: '',
                color: 'green',
                value: 'Без НДС',
                readonly: true,
                errorHint: 'Это поле нужно обязательно заполнить',
            },
            amount: {
                type: 'number',
                placeholder: 'от 1000 до 75000₽',
                errorHint: 'Введите число от 1000 до 75000',
                format: function (x) { return x + "\u20BD"; },
                min: 1000,
                max: 75000,
            },
            email: {
                regex: /@/,
                placeholder: 'Для уведомлений об оплате',
                errorHint: 'Введите почту в формате example@mail.ru',
            },
            phone: {
                regex: /^(.*(\+7|8).*)(.*\d.*){10}$/,
                placeholder: 'например +7 999 9999 999',
                format: function (x, valid) {
                    if (!valid)
                        return x;
                    var numbers = Object(_mask__WEBPACK_IMPORTED_MODULE_2__["padRight"])(x.replace(/[^\d]/g, ''), 11, '?').split('');
                    var p1 = numbers[0] == '7' ? '+7' : '8';
                    var p2 = numbers[1] + numbers[2] + numbers[3];
                    var p3 = numbers[4] + numbers[5] + numbers[6] + numbers[7];
                    var p4 = numbers[8] + numbers[9] + numbers[10];
                    return [p1, p2, p3, p4].join(' ');
                },
                errorHint: 'Введите номер телефона в формате +7 999 9999 999',
            },
        };
        this.nds = 2;
        this.getInvalids = function () { return ({}); };
    }
    RequestPaymentPageComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toBeSent, _i, _a, _b, key, value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        toBeSent = {};
                        for (_i = 0, _a = Object.entries(this.props); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            if (key.includes('nds'))
                                continue;
                            value['color'] = value['valid'] ? 'gray' : 'red-all';
                            value['hint'] = value['valid'] ? '' : value['errorHint'];
                            toBeSent[key] = value['valueMasked'];
                        }
                        toBeSent['nds'] = this.nds;
                        if (!this.isFormValid) return [3 /*break*/, 2];
                        alert("Form is valid, request can be sent: " + JSON.stringify(toBeSent, null, 2));
                        return [4 /*yield*/, fetch('/api/request-payment', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(toBeSent),
                            })];
                    case 1:
                        _c.sent();
                        alert('Sent');
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(RequestPaymentPageComponent.prototype, "isFormValid", {
        get: function () {
            return Object.keys(this.getInvalids()).length === 0;
        },
        enumerable: true,
        configurable: true
    });
    RequestPaymentPageComponent.prototype.ngOnInit = function () {
        this.getInvalids = Object(_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props);
    };
    RequestPaymentPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-payment-page',
            template: __webpack_require__(/*! ./request-payment-page.component.html */ "./src/app/request-payment-page/request-payment-page.component.html"),
            styles: [__webpack_require__(/*! ./request-payment-page.component.css */ "./src/app/request-payment-page/request-payment-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestPaymentPageComponent);
    return RequestPaymentPageComponent;
}());



/***/ }),

/***/ "./src/app/validation.ts":
/*!*******************************!*\
  !*** ./src/app/validation.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var invalids = {};
    var onChange = function (_a) {
        var id = _a.id;
        if (props[id].color === 'red-all')
            props[id].color = 'red';
        if (props[id].valid) {
            delete invalids[id];
        }
        else {
            invalids[id] = 1;
        }
    };
    for (var _i = 0, _a = Object.entries(props); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        props[key].onChange = onChange;
        if (!('id' in value))
            props[key].id = key;
    }
    return function () { return invalids; };
});


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Emil\Desktop\ЛЭНА\AngularExperience\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map