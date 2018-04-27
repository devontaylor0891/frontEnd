webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guards_auth_guard__ = __webpack_require__("./src/app/auth/auth-guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guards_admin_guard__ = __webpack_require__("./src/app/auth/auth-guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_content_landing_content_component__ = __webpack_require__("./src/app/landing-content/landing-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feature_search_search_component__ = __webpack_require__("./src/app/feature/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feature_learn_more_learn_more_consumer_learn_more_consumer_component__ = __webpack_require__("./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feature_learn_more_learn_more_producer_learn_more_producer_component__ = __webpack_require__("./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feature_dashboard_dashboard_component__ = __webpack_require__("./src/app/feature/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feature_producer_producer_component__ = __webpack_require__("./src/app/feature/producer/producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feature_producer_producer_page_producer_page_component__ = __webpack_require__("./src/app/feature/producer/producer-page/producer-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feature_producer_product_product_component__ = __webpack_require__("./src/app/feature/producer/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feature_producer_schedule_schedule_component__ = __webpack_require__("./src/app/feature/producer/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__feature_cart_cart_carts_component__ = __webpack_require__("./src/app/feature/cart/cart/carts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__feature_cart_checkout_checkout_component__ = __webpack_require__("./src/app/feature/cart/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__feature_cart_confirmation_confirmation_component__ = __webpack_require__("./src/app/feature/cart/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_callback_callback_component__ = __webpack_require__("./src/app/auth/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_update_profile_update_profile_component__ = __webpack_require__("./src/app/auth/update-profile/update-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__feature_dashboard_admin_add_new_add_user_add_user_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__feature_dashboard_admin_add_new_add_producer_add_producer_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__feature_dashboard_admin_products_add_product_add_product_component__ = __webpack_require__("./src/app/feature/dashboard/admin/products/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__feature_dashboard_admin_add_new_add_delivery_add_delivery_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__feature_dashboard_admin_add_new_add_order_add_order_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__feature_search_search_component__["a" /* SearchComponent */] },
    { path: 'learn-more-consumer', component: __WEBPACK_IMPORTED_MODULE_7__feature_learn_more_learn_more_consumer_learn_more_consumer_component__["a" /* LearnMoreConsumerComponent */] },
    { path: 'learn-more-producer', component: __WEBPACK_IMPORTED_MODULE_8__feature_learn_more_learn_more_producer_learn_more_producer_component__["a" /* LearnMoreProducerComponent */] },
    { path: 'dashboard',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_guards_auth_guard__["a" /* AuthGuard */]
        ],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__feature_dashboard_dashboard_component__["a" /* DashboardComponent */]
            }
        ] },
    { path: 'admin',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_guards_admin_guard__["a" /* AdminGuard */]
        ],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__feature_dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
                    { path: 'add-user', component: __WEBPACK_IMPORTED_MODULE_19__feature_dashboard_admin_add_new_add_user_add_user_component__["a" /* AddUserComponent */] },
                    { path: 'add-producer', component: __WEBPACK_IMPORTED_MODULE_20__feature_dashboard_admin_add_new_add_producer_add_producer_component__["a" /* AddProducerComponent */] },
                    { path: 'add-product', component: __WEBPACK_IMPORTED_MODULE_21__feature_dashboard_admin_products_add_product_add_product_component__["a" /* AddProductComponent */] },
                    { path: 'add-delivery', component: __WEBPACK_IMPORTED_MODULE_22__feature_dashboard_admin_add_new_add_delivery_add_delivery_component__["a" /* AddDeliveryComponent */] },
                    { path: 'add-order', component: __WEBPACK_IMPORTED_MODULE_23__feature_dashboard_admin_add_new_add_order_add_order_component__["a" /* AddOrderComponent */] }
                ]
            }
        ] },
    { path: 'producer/:id', component: __WEBPACK_IMPORTED_MODULE_10__feature_producer_producer_component__["a" /* ProducerComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__feature_producer_producer_page_producer_page_component__["a" /* ProducerPageComponent */] },
            { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_13__feature_producer_schedule_schedule_component__["a" /* ScheduleComponent */] },
            { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_12__feature_producer_product_product_component__["a" /* ProductComponent */] }
        ] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_14__feature_cart_cart_carts_component__["a" /* CartsComponent */] },
    { path: 'checkout/:tempId', component: __WEBPACK_IMPORTED_MODULE_15__feature_cart_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'confirmation', component: __WEBPACK_IMPORTED_MODULE_16__feature_cart_confirmation_confirmation_component__["a" /* ConfirmationComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_17__auth_callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'update-profile', component: __WEBPACK_IMPORTED_MODULE_18__auth_update_profile_update_profile_component__["a" /* UpdateProfileComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__landing_content_landing_content_component__["a" /* LandingContentComponent */], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(appRoutes, { useHash: false })
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__auth_auth_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_guards_admin_guard__["a" /* AdminGuard */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(authService.loggedIn && !profileIncomplete) || !authService.loggedIn\">\n\n    <!--Navbar-->\n    <app-header [isAdmin]=\"isAdmin\"></app-header>\n\n    <!-- Main container-->\n    <div class=\"container-fluid\">\n        <br>\n\t    \t<router-outlet></router-outlet>\n    </div>\n\n    <!--Footer-->\n    <app-footer></app-footer>\n\n</div>\n\n<div *ngIf=\"profileIncomplete\">\n    <app-update-profile></app-update-profile>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_user_user_service__ = __webpack_require__("./src/app/core/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, apiService, userService) {
        this.authService = authService;
        this.router = router;
        this.apiService = apiService;
        this.userService = userService;
        this.authService.handleAuth();
    }
    AppComponent.prototype.ngOnChanges = function () { };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
        this.authService.getIsAdmin()
            .subscribe(function (result) {
            console.log('isAdmin result: ', result);
            _this.isAdmin = result;
        });
        this.authService.getLoggedIn()
            .subscribe(function (result) {
            console.log('logged in result:', result); // this is being called
            _this.loggedIn = result;
        });
        this.userService.getProfileIncomplete()
            .subscribe(function (result) {
            _this.profileIncomplete = result;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_user_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_page_scroll__ = __webpack_require__("./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_calendar__ = __webpack_require__("./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap_modal_modal_ref__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_services_location_location_service__ = __webpack_require__("./src/app/core/services/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_services_utility_utility_service__ = __webpack_require__("./src/app/core/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__feature_dashboard_producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_services_places_places_service__ = __webpack_require__("./src/app/core/services/places/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_services_user_user_service__ = __webpack_require__("./src/app/core/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_pipes_format_cell_pipe__ = __webpack_require__("./src/app/shared/pipes/format-cell.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_pipes_firstCharacterToUppercase_pipe__ = __webpack_require__("./src/app/shared/pipes/firstCharacterToUppercase.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__core_header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__core_footer_footer_component__ = __webpack_require__("./src/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__landing_content_landing_content_component__ = __webpack_require__("./src/app/landing-content/landing-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__feature_search_search_component__ = __webpack_require__("./src/app/feature/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__feature_search_search_options_search_options_search_options_component__ = __webpack_require__("./src/app/feature/search/search-options/search-options/search-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__feature_search_search_results_search_results_search_results_component__ = __webpack_require__("./src/app/feature/search/search-results/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__feature_search_search_results_filter_buttons_filter_buttons_component__ = __webpack_require__("./src/app/feature/search/search-results/filter-buttons/filter-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__feature_search_search_results_results_pane_results_pane_component__ = __webpack_require__("./src/app/feature/search/search-results/results-pane/results-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__feature_search_search_results_results_pane_search_producer_search_producer_component__ = __webpack_require__("./src/app/feature/search/search-results/results-pane/search-producer/search-producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__feature_search_search_results_results_pane_search_calendar_search_calendar_component__ = __webpack_require__("./src/app/feature/search/search-results/results-pane/search-calendar/search-calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__feature_search_search_results_results_pane_search_product_search_product_component__ = __webpack_require__("./src/app/feature/search/search-results/results-pane/search-product/search-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__feature_search_search_results_results_pane_search_producer_producer_card_producer_card_component__ = __webpack_require__("./src/app/feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__feature_producer_producer_component__ = __webpack_require__("./src/app/feature/producer/producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__feature_producer_product_product_component__ = __webpack_require__("./src/app/feature/producer/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__feature_producer_schedule_schedule_component__ = __webpack_require__("./src/app/feature/producer/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__feature_producer_producer_page_producer_page_component__ = __webpack_require__("./src/app/feature/producer/producer-page/producer-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__feature_producer_producer_page_producer_page_product_card_producer_page_product_card_component__ = __webpack_require__("./src/app/feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__feature_cart_cart_carts_component__ = __webpack_require__("./src/app/feature/cart/cart/carts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared_add_to_cart_add_to_cart_component__ = __webpack_require__("./src/app/shared/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__feature_cart_cart_cart_cart_component__ = __webpack_require__("./src/app/feature/cart/cart/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__feature_cart_cart_cart_cart_product_cart_product_component__ = __webpack_require__("./src/app/feature/cart/cart/cart/cart-product/cart-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__feature_cart_checkout_checkout_component__ = __webpack_require__("./src/app/feature/cart/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__feature_cart_checkout_checkout_product_checkout_product_component__ = __webpack_require__("./src/app/feature/cart/checkout/checkout-product/checkout-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__feature_cart_confirmation_confirmation_component__ = __webpack_require__("./src/app/feature/cart/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__feature_learn_more_learn_more_component__ = __webpack_require__("./src/app/feature/learn-more/learn-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__feature_learn_more_learn_more_consumer_learn_more_consumer_component__ = __webpack_require__("./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__feature_learn_more_learn_more_producer_learn_more_producer_component__ = __webpack_require__("./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__auth_signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__auth_register_register_component__ = __webpack_require__("./src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__auth_callback_callback_component__ = __webpack_require__("./src/app/auth/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__auth_update_profile_update_profile_component__ = __webpack_require__("./src/app/auth/update-profile/update-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__shared_account_info_account_info_component__ = __webpack_require__("./src/app/shared/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_product_card_product_card_component__ = __webpack_require__("./src/app/shared/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_app_shared_table_layout_table_layout_component__ = __webpack_require__("./src/app/shared/table-layout/table-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__shared_loading_loading_component__ = __webpack_require__("./src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__shared_pagination_pagination_component__ = __webpack_require__("./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__feature_dashboard_dashboard_component__ = __webpack_require__("./src/app/feature/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__feature_dashboard_admin_users_users_component__ = __webpack_require__("./src/app/feature/dashboard/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__feature_dashboard_admin_producers_producers_component__ = __webpack_require__("./src/app/feature/dashboard/admin/producers/producers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__feature_dashboard_admin_products_products_component__ = __webpack_require__("./src/app/feature/dashboard/admin/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__feature_dashboard_admin_deliveries_deliveries_component__ = __webpack_require__("./src/app/feature/dashboard/admin/deliveries/deliveries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__feature_dashboard_admin_orders_orders_component__ = __webpack_require__("./src/app/feature/dashboard/admin/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__feature_dashboard_admin_orders_order_view_details_order_view_details_component__ = __webpack_require__("./src/app/feature/dashboard/admin/orders/order-view-details/order-view-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__feature_dashboard_admin_products_product_view_details_product_view_details_component__ = __webpack_require__("./src/app/feature/dashboard/admin/products/product-view-details/product-view-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__feature_dashboard_admin_products_product_edit_form_product_edit_form_component__ = __webpack_require__("./src/app/feature/dashboard/admin/products/product-edit-form/product-edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__feature_dashboard_admin_products_add_product_add_product_component__ = __webpack_require__("./src/app/feature/dashboard/admin/products/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__feature_dashboard_admin_add_new_add_user_add_user_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__feature_dashboard_admin_add_new_add_producer_add_producer_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__feature_dashboard_admin_add_new_add_delivery_add_delivery_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__feature_dashboard_admin_add_new_add_order_add_order_component__ = __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__feature_dashboard_admin_admin_dashboard_component__ = __webpack_require__("./src/app/feature/dashboard/admin/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__feature_dashboard_consumer_consumer_dashboard_component__ = __webpack_require__("./src/app/feature/dashboard/consumer/consumer-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__feature_dashboard_producer_producer_dashboard_component__ = __webpack_require__("./src/app/feature/dashboard/producer/producer-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__feature_dashboard_consumer_consumer_orders_consumer_orders_component__ = __webpack_require__("./src/app/feature/dashboard/consumer/consumer-orders/consumer-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__feature_dashboard_producer_producer_orders_producer_orders_component__ = __webpack_require__("./src/app/feature/dashboard/producer/producer-orders/producer-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__feature_dashboard_producer_producer_products_producer_products_component__ = __webpack_require__("./src/app/feature/dashboard/producer/producer-products/producer-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__feature_dashboard_producer_producer_schedule_producer_schedule_component__ = __webpack_require__("./src/app/feature/dashboard/producer/producer-schedule/producer-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__feature_dashboard_producer_modals_product_edit_product_modal_edit_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__feature_dashboard_producer_modals_product_view_product_modal_view_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__feature_dashboard_producer_modals_product_delete_product_modal_delete_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__feature_dashboard_producer_modals_order_edit_order_modal_edit_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__feature_dashboard_producer_modals_order_view_order_modal_view_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__feature_dashboard_producer_modals_schedule_edit_schedule_modal_edit_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__feature_dashboard_producer_modals_schedule_view_schedule_modal_view_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__feature_dashboard_producer_modals_schedule_delete_schedule_modal_delete_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__feature_dashboard_producer_modals_product_add_product_modal_add_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__feature_dashboard_producer_modals_schedule_add_schedule_modal_add_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__feature_dashboard_consumer_modals_order_view_order_modal_view_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__feature_dashboard_consumer_modals_order_edit_order_modal_edit_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__feature_dashboard_producer_modals_order_mark_complete_order_modal_mark_complete_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// ROUTING

// THIRD PARTY MODULES






//import { DateTimePickerModule } from 'ng-pick-datetime';

// SERVICES








// PIPES



// COMPONENTS
// core




// feature/search









// feature/producer





// feature/cart







// feature/learnmore



// auth




// shared





// dashboards - good candidate for lazy loading





















// dashboard/modals - good candidate for lazy loading













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_26__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_27__core_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__core_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__landing_content_landing_content_component__["a" /* LandingContentComponent */],
                __WEBPACK_IMPORTED_MODULE_30__feature_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_51__feature_learn_more_learn_more_component__["a" /* LearnMoreComponent */],
                __WEBPACK_IMPORTED_MODULE_63__feature_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_59__shared_product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__feature_search_search_options_search_options_search_options_component__["a" /* SearchOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__feature_search_search_results_search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__feature_search_search_results_filter_buttons_filter_buttons_component__["a" /* FilterButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__feature_search_search_results_results_pane_results_pane_component__["a" /* ResultsPaneComponent */],
                __WEBPACK_IMPORTED_MODULE_39__feature_producer_producer_component__["a" /* ProducerComponent */],
                __WEBPACK_IMPORTED_MODULE_40__feature_producer_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_41__feature_producer_schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_44__feature_cart_cart_carts_component__["a" /* CartsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_55__auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_64__feature_dashboard_admin_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_65__feature_dashboard_admin_producers_producers_component__["a" /* ProducersComponent */],
                __WEBPACK_IMPORTED_MODULE_66__feature_dashboard_admin_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_67__feature_dashboard_admin_deliveries_deliveries_component__["a" /* DeliveriesComponent */],
                __WEBPACK_IMPORTED_MODULE_58__shared_account_info_account_info_component__["a" /* AccountInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_68__feature_dashboard_admin_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_69__feature_dashboard_admin_orders_order_view_details_order_view_details_component__["a" /* OrderViewDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_56__auth_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_70__feature_dashboard_admin_products_product_view_details_product_view_details_component__["a" /* ProductViewDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_71__feature_dashboard_admin_products_product_edit_form_product_edit_form_component__["a" /* ProductEditFormComponent */],
                __WEBPACK_IMPORTED_MODULE_72__feature_dashboard_admin_products_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_73__feature_dashboard_admin_add_new_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_74__feature_dashboard_admin_add_new_add_producer_add_producer_component__["a" /* AddProducerComponent */],
                __WEBPACK_IMPORTED_MODULE_75__feature_dashboard_admin_add_new_add_delivery_add_delivery_component__["a" /* AddDeliveryComponent */],
                __WEBPACK_IMPORTED_MODULE_76__feature_dashboard_admin_add_new_add_order_add_order_component__["a" /* AddOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_35__feature_search_search_results_results_pane_search_producer_search_producer_component__["a" /* SearchProducerComponent */],
                __WEBPACK_IMPORTED_MODULE_36__feature_search_search_results_results_pane_search_calendar_search_calendar_component__["a" /* SearchCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_37__feature_search_search_results_results_pane_search_product_search_product_component__["a" /* SearchProductComponent */],
                __WEBPACK_IMPORTED_MODULE_38__feature_search_search_results_results_pane_search_producer_producer_card_producer_card_component__["a" /* ProducerCardComponent */],
                __WEBPACK_IMPORTED_MODULE_42__feature_producer_producer_page_producer_page_component__["a" /* ProducerPageComponent */],
                __WEBPACK_IMPORTED_MODULE_43__feature_producer_producer_page_producer_page_product_card_producer_page_product_card_component__["a" /* ProducerPageProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_45__shared_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */],
                __WEBPACK_IMPORTED_MODULE_46__feature_cart_cart_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_47__feature_cart_cart_cart_cart_product_cart_product_component__["a" /* CartProductComponent */],
                __WEBPACK_IMPORTED_MODULE_48__feature_cart_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_49__feature_cart_checkout_checkout_product_checkout_product_component__["a" /* CheckoutProductComponent */],
                __WEBPACK_IMPORTED_MODULE_50__feature_cart_confirmation_confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_57__auth_update_profile_update_profile_component__["a" /* UpdateProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_60_app_shared_table_layout_table_layout_component__["a" /* TableLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_pipes_format_cell_pipe__["a" /* FormatCellPipe */],
                __WEBPACK_IMPORTED_MODULE_25__shared_pipes_firstCharacterToUppercase_pipe__["a" /* FirstCharacterToUppercasePipe */],
                __WEBPACK_IMPORTED_MODULE_77__feature_dashboard_admin_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_78__feature_dashboard_consumer_consumer_dashboard_component__["a" /* ConsumerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_79__feature_dashboard_producer_producer_dashboard_component__["a" /* ProducerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_80__feature_dashboard_consumer_consumer_orders_consumer_orders_component__["a" /* ConsumerOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_81__feature_dashboard_producer_producer_orders_producer_orders_component__["a" /* ProducerOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_82__feature_dashboard_producer_producer_products_producer_products_component__["a" /* ProducerProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_83__feature_dashboard_producer_producer_schedule_producer_schedule_component__["a" /* ProducerScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_84__feature_dashboard_producer_modals_product_edit_product_modal_edit_product_modal_component__["a" /* EditProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_61__shared_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_85__feature_dashboard_producer_modals_product_view_product_modal_view_product_modal_component__["a" /* ViewProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_86__feature_dashboard_producer_modals_product_delete_product_modal_delete_product_modal_component__["a" /* DeleteProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_87__feature_dashboard_producer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* EditOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_88__feature_dashboard_producer_modals_order_view_order_modal_view_order_modal_component__["a" /* ViewOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_89__feature_dashboard_producer_modals_schedule_edit_schedule_modal_edit_schedule_modal_component__["a" /* EditScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_90__feature_dashboard_producer_modals_schedule_view_schedule_modal_view_schedule_modal_component__["a" /* ViewScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_91__feature_dashboard_producer_modals_schedule_delete_schedule_modal_delete_schedule_modal_component__["a" /* DeleteScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_92__feature_dashboard_producer_modals_product_add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_93__feature_dashboard_producer_modals_schedule_add_schedule_modal_add_schedule_modal_component__["a" /* AddScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_94__feature_dashboard_consumer_modals_order_view_order_modal_view_order_modal_component__["a" /* ConsumerViewOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_95__feature_dashboard_consumer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* ConsumerEditOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_52__feature_learn_more_learn_more_consumer_learn_more_consumer_component__["a" /* LearnMoreConsumerComponent */],
                __WEBPACK_IMPORTED_MODULE_53__feature_learn_more_learn_more_producer_learn_more_producer_component__["a" /* LearnMoreProducerComponent */],
                __WEBPACK_IMPORTED_MODULE_62__shared_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_96__feature_dashboard_producer_modals_order_mark_complete_order_modal_mark_complete_order_modal_component__["a" /* MarkCompleteOrderModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAgN6Tt6BxP2Q-iNCNe7HiHfIGotu1j_uY',
                    libraries: ["places"]
                }),
                //DateTimePickerModule,
                __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime__["a" /* OwlDateTimeModule */], __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__core_services_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__core_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_17__core_services_location_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_18__core_services_cart_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common__["c" /* CurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common__["e" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common__["l" /* UpperCasePipe */],
                __WEBPACK_IMPORTED_MODULE_19__core_services_utility_utility_service__["a" /* UtilityService */],
                __WEBPACK_IMPORTED_MODULE_20__feature_dashboard_producer_dashboard_service__["a" /* ProducerDashboardService */],
                __WEBPACK_IMPORTED_MODULE_84__feature_dashboard_producer_modals_product_edit_product_modal_edit_product_modal_component__["a" /* EditProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap_modal_modal_ref__["a" /* NgbActiveModal */],
                __WEBPACK_IMPORTED_MODULE_85__feature_dashboard_producer_modals_product_view_product_modal_view_product_modal_component__["a" /* ViewProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_86__feature_dashboard_producer_modals_product_delete_product_modal_delete_product_modal_component__["a" /* DeleteProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_87__feature_dashboard_producer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* EditOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_88__feature_dashboard_producer_modals_order_view_order_modal_view_order_modal_component__["a" /* ViewOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_89__feature_dashboard_producer_modals_schedule_edit_schedule_modal_edit_schedule_modal_component__["a" /* EditScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_90__feature_dashboard_producer_modals_schedule_view_schedule_modal_view_schedule_modal_component__["a" /* ViewScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_91__feature_dashboard_producer_modals_schedule_delete_schedule_modal_delete_schedule_modal_component__["a" /* DeleteScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_92__feature_dashboard_producer_modals_product_add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_93__feature_dashboard_producer_modals_schedule_add_schedule_modal_add_schedule_modal_component__["a" /* AddScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_94__feature_dashboard_consumer_modals_order_view_order_modal_view_order_modal_component__["a" /* ConsumerViewOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_95__feature_dashboard_consumer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* ConsumerEditOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__core_services_places_places_service__["a" /* PlacesService */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NO_ERRORS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_84__feature_dashboard_producer_modals_product_edit_product_modal_edit_product_modal_component__["a" /* EditProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_85__feature_dashboard_producer_modals_product_view_product_modal_view_product_modal_component__["a" /* ViewProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_86__feature_dashboard_producer_modals_product_delete_product_modal_delete_product_modal_component__["a" /* DeleteProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_87__feature_dashboard_producer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* EditOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_88__feature_dashboard_producer_modals_order_view_order_modal_view_order_modal_component__["a" /* ViewOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_89__feature_dashboard_producer_modals_schedule_edit_schedule_modal_edit_schedule_modal_component__["a" /* EditScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_90__feature_dashboard_producer_modals_schedule_view_schedule_modal_view_schedule_modal_component__["a" /* ViewScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_91__feature_dashboard_producer_modals_schedule_delete_schedule_modal_delete_schedule_modal_component__["a" /* DeleteScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_92__feature_dashboard_producer_modals_product_add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */],
                __WEBPACK_IMPORTED_MODULE_93__feature_dashboard_producer_modals_schedule_add_schedule_modal_add_schedule_modal_component__["a" /* AddScheduleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_94__feature_dashboard_consumer_modals_order_view_order_modal_view_order_modal_component__["a" /* ConsumerViewOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_95__feature_dashboard_consumer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* ConsumerEditOrderModalComponent */],
                __WEBPACK_IMPORTED_MODULE_96__feature_dashboard_producer_modals_order_mark_complete_order_modal_mark_complete_order_modal_component__["a" /* MarkCompleteOrderModalComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_26__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isAdmin) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.tokenValid) {
            return true;
        }
        else {
            // Send guarded route to redirect to after logging in
            this.auth.login(state.url);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_env_config__ = __webpack_require__("./src/app/core/env.config.ts");

;
var AUTH_CONFIG = {
    CLIENT_ID: 'qkYFFjY05abDAnkdLFdZoOdkfZaxFpHk',
    CLIENT_DOMAIN: 'olf.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/',
    REDIRECT: __WEBPACK_IMPORTED_MODULE_0__core_env_config__["a" /* ENV */].BASE_URI + "/callback",
    SCOPE: 'openid profile',
    NAMESPACE: 'http://myapp.com/roles'
};


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_config__ = __webpack_require__("./src/app/auth/auth.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        // Create Auth0 web auth instance
        this._auth0 = new auth0.WebAuth({
            clientID: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_ID,
            domain: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_DOMAIN,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].REDIRECT,
            audience: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].AUDIENCE,
            scope: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].SCOPE
        });
        this.isAdmin$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.isAdmin);
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.loggedIn);
        this.parsedId$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.parsedId);
        this.idAndProfile = [
            this.parsedId,
            this.userProfile
        ];
        this.idAndProfile$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.idAndProfile);
        // If authenticated, set local profile property
        // and update login status subject.
        // If not authenticated but there are still items
        // in localStorage, log out.
        var lsProfile = localStorage.getItem('profile');
        if (this.tokenValid) {
            this.userProfile = JSON.parse(lsProfile);
            this.isAdmin = localStorage.getItem('isAdmin') === 'true';
            this.isAdmin$.next(this.isAdmin);
            this.setLoggedIn(true);
        }
        else if (!this.tokenValid && lsProfile) {
            this.logout();
        }
    }
    AuthService.prototype.getLoggedIn = function () {
        return this.loggedIn$.asObservable();
    };
    ;
    AuthService.prototype.getParsedId = function () {
        return this.parsedId$.asObservable();
    };
    AuthService.prototype.getIdAndProfile = function () {
        return this.idAndProfile$.asObservable();
    };
    AuthService.prototype.getIsAdmin = function () {
        return this.isAdmin$.asObservable();
    };
    // setLoggedIn(value: boolean) {
    //   // Update login status subject
    //   this.loggedIn$.next(value);
    //   this.loggedIn = value;
    //   if (this.userProfile) {
    //     // parse the id and assign it
    //     this.parsedId = this.userProfile.sub.slice(this.userProfile.sub.indexOf('|') + 1);
    //     this.parsedId$.next(this.parsedId);
    //   }
    // };
    AuthService.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
        if (this.userProfile) {
            this.parsedId = this.userProfile.sub.slice(this.userProfile.sub.indexOf('|') + 1);
            this.parsedId$.next(this.parsedId);
            this.idAndProfile$.next([this.parsedId, this.userProfile]);
        }
    };
    ;
    AuthService.prototype.login = function (redirect) {
        // Set redirect after login
        var _redirect = redirect ? redirect : this.router.url;
        localStorage.setItem('authRedirect', _redirect);
        // Auth0 authorize request
        this._auth0.authorize();
    };
    AuthService.prototype.handleAuth = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this._auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                _this._clearRedirect();
                _this.router.navigate(['/']);
                console.error("Error authenticating: " + err.error);
            }
            //may have to remove the following line to make logins not redirect to home page
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype._getProfile = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this._auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
                _this.router.navigate([localStorage.getItem('authRedirect') || '/']);
                _this._clearRedirect();
            }
            else if (err) {
                console.error("Error authenticating: " + err.error);
            }
        });
    };
    AuthService.prototype._clearRedirect = function () {
        // Remove redirect from localStorage
        localStorage.removeItem('authRedirect');
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        // Save session data and update login status subject
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
        // Set tokens and expiration in localStorage and props
        this.isAdmin = this._checkAdmin(profile);
        this.isAdmin$.next(this.isAdmin);
        localStorage.setItem('isAdmin', this.isAdmin.toString());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        // Update login status in loggedIn$ stream
        this.setLoggedIn(true);
    };
    AuthService.prototype._checkAdmin = function (profile) {
        // Check if the user has admin role
        var roles = profile[__WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].NAMESPACE] || [];
        return roles.indexOf('admin') > -1;
    };
    // returnUserType() {
    //   let type = this.userProfile.userType;
    //   return type;
    // }
    AuthService.prototype.logout = function () {
        // Ensure all auth items removed from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('authRedirect');
        localStorage.removeItem('isAdmin');
        this._clearRedirect();
        // Reset local properties, update loggedIn$ stream
        this.userProfile = undefined;
        this.isAdmin = undefined;
        this.setLoggedIn(false);
        // Return to homepage
        this.router.navigate(['/']);
    };
    Object.defineProperty(AuthService.prototype, "tokenValid", {
        get: function () {
            // Check if current time is past access token's expiration
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"loading m-5\">\n      <img class=\"mx-auto\" src=\"../assets/spinner.svg\" alt=\"loading\">\n    </div>\n  </div>\n</div> -->\n<app-loading></app-loading>"

/***/ }),

/***/ "./src/app/auth/callback/callback.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/auth/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/auth/callback/callback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n    <div class=\"md-form form-sm\">\n        <i class=\"fa fa-user prefix\"></i>\n        <input type=\"text\" id=\"name\" class=\"form-control\">\n        <label for=\"name\">Your First Name</label>\n    </div>\n    \n    <div class=\"md-form form-sm\">\n        <i class=\"fa fa-envelope prefix\"></i>\n        <input type=\"text\" id=\"form24\" class=\"form-control\">\n        <label for=\"form24\">Your email</label>\n    </div>\n\n    <div class=\"md-form form-sm\">\n        <i class=\"fa fa-lock prefix\"></i>\n        <input type=\"password\" id=\"form25\" class=\"form-control\">\n        <label for=\"form25\">Your password</label>\n    </div>\n\n    <div class=\"md-form form-sm\">\n        <i class=\"fa fa-lock prefix\"></i>\n        <input type=\"password\" id=\"form26\" class=\"form-control\">\n        <label for=\"form26\">Repeat password</label>\n    </div>\n\n    <div class=\"text-center form-sm mt-2\">\n        <button routerLink=\"dashboard\" class=\"btn btn-olf-primary\">Sign up <i class=\"fa fa-sign-in ml-1\"></i></button>\n    </div>\n\n</div>\n<!--Footer-->\n<div class=\"modal-footer\">\n    <div class=\"options text-right\">\n        <p class=\"pt-1\">Already have an account? <a routerLink=\"login\">Log In</a></p>\n    </div>\n    <button type=\"button\" class=\"btn btn-outline-olf-primary waves-effect ml-auto\" style=\"color:#893d63 !important;\" data-dismiss=\"modal\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body mb-1\">\n    <div class=\"md-form form-sm\">\n        <i class=\"fa fa-envelope prefix\"></i>\n        <input type=\"text\" id=\"form22\" class=\"form-control\">\n        <label for=\"form22\">Your email</label>\n    </div>\n\n    <div class=\"md-form form-sm\">\n        <i class=\"fa fa-lock prefix\"></i>\n        <input type=\"password\" id=\"form23\" class=\"form-control\">\n        <label for=\"form23\">Your password</label>\n    </div>\n    <div class=\"text-center mt-2\">\n        <a routerLink=\"dashboard\" class=\"btn btn-olf-primary\">Log in <i class=\"fa fa-sign-in ml-1\"></i></a>\n    </div>\n</div>\n<!--Footer-->\n<div class=\"modal-footer display-footer\">\n    <div class=\"options text-center text-md-right mt-1\">\n        <p>Not a member? <a routerLink=\"register\">Sign Up</a></p>\n        <p>Forgot <a routerLink=\"#\">Password?</a></p>\n    </div>\n    <button type=\"button\" class=\"btn btn-outline-olf-primary waves-effect ml-auto\" style=\"color:#893d63 !important;\" data-dismiss=\"modal\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/update-profile/update-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-dark\">\n    <div class=\"col-12 col-md-6 mx-auto my-2\">\n        <div class=\"jumbotron\">\n            <h2 class=\"h2-responsive\"><strong>Complete your Profile</strong></h2>\n            <p>We just need a little bit more information so that you can get the most out of Onlylocalfood.com.</p>\n\n            <!-- Form-->\n            <div class=\"card-block\">\n\n                <!--Body-->\n                <form\n                    (ngSubmit)=\"onSubmit(userForm)\"\n                    [formGroup]=\"userForm\">\n\n                    <!-- User Form Group -->\n                    <div formGroupName=\"user\">\n\n                        <h5 class=\"h5-responsive\">\n                            <label for=\"firstName\" class=\"\">First Name</label>\n                        </h5>\n                        <!-- first name -->\n                        <div class=\"md-form pl-3\">\n                            <i class=\"fa fa-user prefix\"></i>\n                            <input\n                                type=\"text\"  \n                                formControlName=\"firstName\"\n                                class=\"form-control\">\n                        </div>\n    \n                        <!-- email -->\n                        <h5 class=\"h5-responsive\">\n                            <label for=\"email\" data-error=\"wrong\" data-success=\"right\">Your email</label>\n                        </h5>\n                        <div class=\"md-form pl-3\">\n                            <i class=\"fa fa-envelope prefix\"></i>\n                            <input\n                                type=\"email\"  \n                                formControlName=\"email\"\n                                class=\"form-control\">\n                        </div>\n    \n                        <!-- consumer or producer -->\n                        <h5 class=\"h5-responsive\">\n                            <label for=\"role\">Are you signing up as a Consumer or a Producer?</label>\n                        </h5>\n                        <div class=\"pl-3\">\n                        \n                            <label class=\"pr-3\">\n                                Consumer: \n                                <input\n                                    type=\"radio\" \n                                    value=\"consumer\"\n                                    formControlName=\"role\"\n                                    (change)=\"onSelectConsumer()\"/>\n                            </label>\n                        \n                            <label>\n                                Producer: \n                                <input \n                                    type=\"radio\" \n                                    formControlName=\"role\"\n                                    value=\"producer\"\n                                    (change)=\"resizeMap(); onSelectProducer()\"/>\n                            </label>\n                        </div>\n\n                    </div>\n\n                    <!-- producer only form -->\n                    <div [class.hidden]=\"role !== 'producer'\" class=\"row\">\n\n                        <!-- Producer Form Group -->\n                        <div formGroupName=\"producer\">\n\n                            <br>\n\n                            <div class=\"col-12\">\n                                <h2 class=\"h2-responsive\"><strong>Welcome to Onlylocalfood.com!</strong></h2>\n                                <p>We're always happy to have new producers.</p>\n                            </div>\n\n                            <!-- business name -->\n                            <div class=\"col-12\">\n                                <h5 class=\"h5-responsive\">\n                                    <label for=\"name\" class=\"\">Business Name</label>\n                                </h5>\n                                <div class=\"md-form pl-3\">\n                                    <i class=\"fa fa-user prefix\"></i>\n                                    <input type=\"text\"  \n                                        formControlName=\"name\"\n                                        class=\"form-control\">\n                                </div>\n                            </div>\n\n                            <!-- description -->\n                            <div class=\"col-12\">\n                                <h5 class=\"h5-responsive\">\n                                    <label for=\"description\">Description of your Business</label>\n                                </h5>\n                                <div class=\"md-form pl-3\">\n                                    <i class=\"fa fa-align-justify prefix\"></i>\n                                    <textarea\n                                        type=\"text\" \n                                        class=\"md-textarea\"\n                                        formControlName=\"description\"\n                                        class=\"form-control\"></textarea>\n                                </div>\n                            </div>\n\n                            <!-- logo upload -->\n                            <div class=\"col-12\">\n                                <h5 class=\"h5-responsive\">\n                                    <label for=\"logoUrl\" class=\"\">Upload a Logo</label>\n                                </h5>\n                                <div class=\"md-form pl-3\">\n                                    <i class=\"fa fa-image prefix\"></i>\n                                    <input\n                                        #logoUrl\n                                        type=\"file\"\n                                        accept=\".png, .jpg, .jpeg\"\n                                        formControlName=\"logoUrl\"\n                                        (change)=\"fileChange($event)\"\n                                        class=\"form-control\">\n                                </div>\n                            </div>\n                        </div>\n                        <!-- producer form group end -->\n\n                        <div>\n\n                            <!-- location -->\n                            <div class=\"col-12\">\n\n                                <h5 class=\"h5-responsive\">\n                                    <label for=\"search\">Enter Your Location</label>\n                                    <p><small>If you only do deliveries and off-farm pickups, your city or town is specific enough. But if you plan on offering the option of scheduled farmgate pickups, then we'll need an address.</small></p>                                    \n                                </h5>\n                                <div class=\"md-form pl-3\">\n                                    <i class=\"fa fa-map-marker prefix\"></i>\n                                    <input  \n                                        autocorrect=\"off\" \n                                        autocapitalize=\"off\" \n                                        spellcheck=\"off\" \n                                        type=\"text\" \n                                        class=\"form-control\" \n                                        #search \n                                        id=\"search\"\n                                        [formControl]=\"searchControl\">\n                                </div>\n\n                            </div>\n\n                            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\n                                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\n                                    <!-- <agm-info-window>Börk</agm-info-window> -->\n                                </agm-marker>\n                            </agm-map>\n\n                        </div>\n\n                    </div>\n\n                    <hr>\n\n                    <div class=\"text-center\">\n                        <button type=\"submit\" class=\"btn btn-olf-primary\" [disabled]=\"!userForm.valid\">Complete Signup</button>\n                    </div>\n                </form>\n\n            </div>\n            <!-- Form-->\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/update-profile/update-profile.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 450px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/auth/update-profile/update-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_user_user_service__ = __webpack_require__("./src/app/core/services/user/user.service.ts");
// import { Component, OnInit, OnChanges, NgZone, ViewChild, ElementRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';
// import { AgmMap } from '@agm/core';
// import { AuthService } from '../auth.service';
// import { ApiService } from '../../core/api.service';
// import { UserService } from '../../core/services/user/user.service';
// import { ProducerModel } from '../../core/models/producer.model';
// @Component({
//   selector: 'app-update-profile',
//   templateUrl: './update-profile.component.html',
//   styleUrls: ['./update-profile.component.scss']
// })
// export class UpdateProfileComponent implements OnInit, OnChanges {
//   id: any;
//   firstName: string;
//   email: string;
//   newValues: Object;
//   newProducerValues: Object;
//   // reactive form
//   userForm: FormGroup;
//   // to transition the form between consumer and producer
//   role: string;
//   public latitude: number;
//   public longitude: number;
//   public searchControl: FormControl;
//   public zoom: number;
//   @ViewChild('search') public searchElementRef: ElementRef;
//   @ViewChild(AgmMap) public agmMap: AgmMap;
//   lat: number;
//   lng: number;
//   streetNumber: number;
//   route: any;
//   address: string;
//   city: string;
//   province: string;
//   postalCode: string;
//   country: string;
//   submitObject: ProducerModel;
//   constructor(private auth: AuthService,
//               private apiService: ApiService,
//               private userService: UserService,
//               private router: Router,
//               private mapsAPILoader: MapsAPILoader,
//               private ngZone: NgZone,
//               private fb: FormBuilder) {
//     // build an empty submitObject
//     this.submitObject = {
//       id: null,
//       name: '',
//       location: '',
//       province: '',
//       address: '',
//       description: '',
//       email: '',
//       logoUrl: '',
//       longitude: null,
//       latitude: null,
//       firstName: '',
//       status: 'active'
//     }
//   }
//   ngOnChanges() {}
//   resizeMap() {
//     this.agmMap.triggerResize();
//   }
//   ngOnInit() { 
//     // ***** LOCATION INIT CODE ******
//     // set google maps defaults
//     this.zoom = 8;
//     this.latitude = 50.5555;
//     this.longitude = -100.5555;
//     // create search FormControl
//     this.searchControl = new FormControl();
//     // set current position
//     // this.setCurrentPosition();
//     // load Places Autocomplete
//     this.mapsAPILoader.load().then(() => {
//       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//         types: ["geocode"]
//       });
//       autocomplete.addListener("place_changed", () => {
//         this.ngZone.run(() => {
//           // get the place result
//           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
//           // verify result
//           if (place.geometry === undefined || place.geometry === null) {
//             return;
//           }
//           console.log('place: ', place);
//           this.fillAddress(place);
//           // set latitude, longitude and zoom
//           this.latitude = place.geometry.location.lat();
//           this.longitude = place.geometry.location.lng();
//           this.zoom = 12;
//         });
//       });
//     });
//     // get the basic info for the user
//     this.auth.getParsedId()
//       .subscribe(
//         result => {
//           this.id = result;
//         }
//       );
//     this.userService.getFirstName()
//       .subscribe(
//         result => {
//           this.firstName = result;
//           console.log('firstName: ', this.firstName);
//         }
//       );
//     this.userService.getEmail()
//       .subscribe(
//         result => {
//           this.email = result;
//         }
//       );
//     // instantiate the formgroup
//     this.userForm = new FormGroup({
//       user: new FormGroup({
//         firstName: new FormControl(this.firstName, [Validators.required]),
//         email: new FormControl(this.email, [Validators.required]),
//         role: new FormControl('consumer', [Validators.required])
//       }),
//       producer: new FormGroup({
//         id: new FormControl(this.id),
//         name: new FormControl('', [Validators.required]),
//         description: new FormControl('', [Validators.required]),
//         logoUrl: new FormControl('')
//       }),
//       status: new FormControl('active')
//     });
//     // set producer fields to disabled
//     this.disableProducerFields();
//   }
//   disableProducerFields() {
//     this.userForm.controls.producer.disable();
//   };
//   enableProducerFields() {
//     this.userForm.controls.producer.enable();
//   };
//   onSelectConsumer() {
//     this.role = 'consumer';
//     this.userForm.patchValue({user:{role: 'consumer'}});
//     this.disableProducerFields();
//   };
//   onSelectProducer() {
//     this.role = 'producer';
//     this.userForm.patchValue({user:{role: 'producer'}});
//     this.enableProducerFields();
//   };
//   buildProducerSubmitObject(form) {
//     this.submitObject = {
//             id: this.id,
//             name: form.producer.name,
//             location: this.city,
//             province: this.province,
//             address: this.address || '',
//             description: form.producer.description,
//             email: form.user.email,
//             logoUrl: form.producer.logoUrl,
//             longitude: this.longitude,
//             latitude: this.latitude,
//             firstName: form.user.firstName,
//             status: 'active',
//             products: [],
//             schedule: []
//           }
//   }
//   onSubmit(form: any): void {
//     console.log('form value: ', form.value);
//     console.log(this.id);
//     this.apiService.patchUser(this.id, form.value.user)
//       .subscribe(
//         result => {
//           console.log('user updated: ', result);
//           if (form.value.user.role === 'producer') {
//             this.buildProducerSubmitObject(form.value);
//             this.apiService.createProducer(this.submitObject)
//               .subscribe(
//                 result => {
//                   console.log('producer profile created: ', result);
//                 }
//               );
//           };
//           // mark profile complete and get the full profile
//           this.userService.profileIncomplete$.next(false);
//           this.userService.getUserFromDb(this.id);
//         }
//       );
//   };
//   private fillAddress(place) {
//     // this.clearAddress();
//     this.parseAddressComponents(place.address_components);
//     this.lat = place.geometry.location.lat();
//     this.lng = place.geometry.location.lng();
//     if (this.streetNumber && this.route) {
//       this.address = this.streetNumber + ' ' + this.route;
//     };
//     this.latitude = this.lat;
//     this.longitude = this.lng;
//   };
//   private parseAddressComponents(components) {
//     for (let i = 0; i < components.length; i++) {
//       let types = components[i].types;
//       for (let j = 0; j < types.length; j++) {
//         let result = types[j];
//         if (result === 'street_number') {
//           this.streetNumber = components[i].short_name;
//         }
//         if (result === 'route') {
//           this.route = components[i].short_name;
//         }
//         if (result === 'locality' || result === 'sublocality') {
//           this.city = components[i].short_name;
//           console.log('city: ', this.city);
//         }
//         if (result === 'administrative_area_level_1') {
//           this.province = components[i].short_name;
//         }
//         if (result === 'postal_code') {
//           this.postalCode = components[i].short_name;
//         }
//         if (result === 'country') {
//           this.country = components[i].short_name;
//         }
//       }
//     }
//   };
// }








var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(auth, apiService, userService, router, mapsAPILoader, ngZone, fb) {
        this.auth = auth;
        this.apiService = apiService;
        this.userService = userService;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.fb = fb;
        // build an empty submitObject
        this.submitObject = {
            id: null,
            name: '',
            location: '',
            province: '',
            address: '',
            description: '',
            email: '',
            logoUrl: '',
            longitude: null,
            latitude: null,
            firstName: '',
            status: 'active'
        };
    }
    UpdateProfileComponent.prototype.ngOnChanges = function () { };
    UpdateProfileComponent.prototype.resizeMap = function () {
        this.agmMap.triggerResize();
    };
    UpdateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ***** LOCATION INIT CODE ******
        // set google maps defaults
        this.zoom = 8;
        this.latitude = 50.5555;
        this.longitude = -100.5555;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        // set current position
        // this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["geocode"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log('place: ', place);
                    _this.fillAddress(place);
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
        // get the basic info for the user
        this.auth.getParsedId()
            .subscribe(function (result) {
            _this.id = result;
        });
        this.userService.getFirstName()
            .subscribe(function (result) {
            _this.firstName = result;
            console.log('firstName: ', _this.firstName);
        });
        this.userService.getEmail()
            .subscribe(function (result) {
            _this.email = result;
        });
        // instantiate the formgroup
        this.userForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            user: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.firstName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
                email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
                role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('consumer', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required])
            }),
            producer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.id),
                name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
                description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
                logoUrl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('')
            }),
            status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('active')
        });
        // set producer fields to disabled
        this.disableProducerFields();
    };
    UpdateProfileComponent.prototype.disableProducerFields = function () {
        this.userForm.controls.producer.disable();
    };
    ;
    UpdateProfileComponent.prototype.enableProducerFields = function () {
        this.userForm.controls.producer.enable();
    };
    ;
    UpdateProfileComponent.prototype.onSelectConsumer = function () {
        this.role = 'consumer';
        this.userForm.patchValue({ user: { role: 'consumer' } });
        this.disableProducerFields();
    };
    ;
    UpdateProfileComponent.prototype.onSelectProducer = function () {
        this.role = 'producer';
        this.userForm.patchValue({ user: { role: 'producer' } });
        this.enableProducerFields();
    };
    ;
    UpdateProfileComponent.prototype.buildProducerSubmitObject = function (form) {
        this.submitObject = {
            id: this.id,
            name: form.producer.name,
            location: this.city,
            province: this.province,
            address: this.address || '',
            description: form.producer.description,
            email: form.user.email,
            logoUrl: form.producer.logoUrl,
            longitude: this.longitude,
            latitude: this.latitude,
            firstName: form.user.firstName,
            status: 'active',
            products: [],
            schedule: []
        };
    };
    UpdateProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('form value: ', form.value);
        console.log(this.id);
        this.apiService.patchUser(this.id, form.value.user)
            .subscribe(function (result) {
            console.log('user updated: ', result);
            if (form.value.user.role === 'producer') {
                _this.buildProducerSubmitObject(form.value);
                _this.apiService.createProducer(_this.submitObject)
                    .subscribe(function (result) {
                    console.log('producer profile created: ', result);
                });
            }
            ;
            // mark profile complete and get the full profile
            _this.userService.profileIncomplete$.next(false);
            _this.userService.getUserFromDb(_this.id);
        });
    };
    ;
    UpdateProfileComponent.prototype.fillAddress = function (place) {
        // this.clearAddress();
        this.parseAddressComponents(place.address_components);
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
        if (this.streetNumber && this.route) {
            this.address = this.streetNumber + ' ' + this.route;
        }
        ;
        this.latitude = this.lat;
        this.longitude = this.lng;
    };
    ;
    UpdateProfileComponent.prototype.parseAddressComponents = function (components) {
        for (var i = 0; i < components.length; i++) {
            var types = components[i].types;
            for (var j = 0; j < types.length; j++) {
                var result = types[j];
                if (result === 'street_number') {
                    this.streetNumber = components[i].short_name;
                }
                if (result === 'route') {
                    this.route = components[i].short_name;
                }
                if (result === 'locality' || result === 'sublocality') {
                    this.city = components[i].short_name;
                    console.log('city: ', this.city);
                }
                if (result === 'administrative_area_level_1') {
                    this.province = components[i].short_name;
                }
                if (result === 'postal_code') {
                    this.postalCode = components[i].short_name;
                }
                if (result === 'country') {
                    this.country = components[i].short_name;
                }
            }
        }
    };
    ;
    // file upload experiment
    UpdateProfileComponent.prototype.fileChange = function (event) {
        // const fileList: FileList = event.target.files;
        var file = this.selectedFileEl.nativeElement.files[0];
        console.log('file: ', file);
        var formData = new FormData();
        formData.append('file', file, file.name);
        console.log('formData: ', formData);
        this.apiService.uploadFile(formData)
            .subscribe(function (result) {
            console.log('image uploaded: ', result);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */])
    ], UpdateProfileComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('logoUrl'),
        __metadata("design:type", Object)
    ], UpdateProfileComponent.prototype, "selectedFileEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* AgmMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* AgmMap */])
    ], UpdateProfileComponent.prototype, "agmMap", void 0);
    UpdateProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-update-profile',
            template: __webpack_require__("./src/app/auth/update-profile/update-profile.component.html"),
            styles: [__webpack_require__("./src/app/auth/update-profile/update-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__env_config__ = __webpack_require__("./src/app/core/env.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { ProductModel } from '../core/models/product.model';
// import { ScheduleModel } from '../core/models/schedule.model';
// import { ProducerModel } from '../core/models/producer.model';
// import { UserModel } from '../core/models/user.model';
// import { OrderModel } from '../core/models/order.model';
var ApiService = /** @class */ (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
        // apiUrl = 'http://localhost:3000';
        this.apiUrl = 'http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api';
        this.productsUrl = '../../../../assets/api/products/';
        this.producerUrl = '../../../../assets/api/producer/';
        this.producersUrl = '../../../../assets/api/producers.json';
        this.allProductsUrl = '../../../../assets/api/products.json';
        this.allSchedulesUrl = '../../../../assets/api/schedules.json';
        this.allUsersUrl = '../../../../assets/api/users.json';
        this.allOrdersUrl = '../../../../assets/api/orders.json';
    }
    Object.defineProperty(ApiService.prototype, "_authHeader", {
        get: function () {
            return "Bearer " + localStorage.getItem('access_token');
        },
        enumerable: true,
        configurable: true
    });
    ;
    // ********** SEARCH *******
    // GET list of PRODUCTS that are attached to DELIVERIES that occur in the future and within the search radius
    // this is using the mock data via json-server
    ApiService.prototype.getSearchResults = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "searchResults")
            .catch(this._handleError);
    };
    ;
    // ********** FILE UPLOAD *******
    // upload the file
    ApiService.prototype.uploadFile = function (formData) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "images/", formData, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
                .append('Content-Type', 'multipart/form-data')
                .append('Accept', 'application/json')
        })
            .catch(this._handleError);
    };
    ;
    // ********** PRODUCTS *******
    // get all products for admin dash
    ApiService.prototype.getProducts = function () {
        return this.http
            .get(this.apiUrl + "/products/")
            .catch(this._handleError);
    };
    // this method will return a product from the mock data
    ApiService.prototype.getProductById = function (productId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "products/" + productId)
            .catch(this._handleError);
    };
    ;
    // GET all products from a single producer
    ApiService.prototype.getProductsByProducerId = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "producer/" + id + '/products')
            .catch(this._handleError);
    };
    // POST new product - producer or admin only
    ApiService.prototype.postProduct = function (product) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "products/", product, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // PUT existing product - producer or admin only
    ApiService.prototype.putProduct = function (id, product) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "products/" + id, product, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // PATCH product fields
    ApiService.prototype.patchProduct = function (id, newFieldAndValue) {
        return this.http
            .patch(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "products/" + id + "/", newFieldAndValue, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // DELETE existing event and all associated RSVPs (admin only)
    ApiService.prototype.deleteProduct = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "products/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // ************** SCHEDULES ****************
    // get all schedules for admin
    ApiService.prototype.getSchedules = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "schedules")
            .catch(this._handleError);
    };
    // GET entire schedule from a single producers
    ApiService.prototype.getScheduleByProducerId = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "producer/" + id + '/schedules')
            .catch(this._handleError);
    };
    // POST new schedule - producer or admin only
    ApiService.prototype.postSchedule = function (schedule) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "schedules/", schedule, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // PUT existing schedule - producer or admin only
    ApiService.prototype.putSchedule = function (id, schedule) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "schedules/" + id, schedule, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ApiService.prototype.deleteSchedule = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "schedules/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // this is returning the proper results, but I will use a mock endpoint for development so we can design proper data
    // GET one product by id from Nikki's endpoint
    // getProductById(id): Observable<ProductCardModel> {
    //   console.log('api service called.')
    //     return this.http
    //       .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/products/' + id)
    //       .map(response => { return response })
    //       .catch(this._handleError);
    // };
    // **************** PRODUCERS ***************
    // get all producers
    ApiService.prototype.getProducers = function () {
        return this.http
            .get(this.apiUrl + "/producers/")
            .catch(this._handleError);
    };
    ;
    // GET one producer by id
    ApiService.prototype.getProducerById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "producer/" + id)
            .catch(this._handleError);
    };
    ;
    // POST a new producer
    ApiService.prototype.createProducer = function (producer) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "producer/", producer, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // ***************** USERS *****************
    // get all users for admin
    ApiService.prototype.getUsers = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "users/")
            .catch(this._handleError);
    };
    ;
    // single user by id
    // getUserById(id) {
    //   return this.http
    //     .get(`${ENV.BASE_API}users/` + id)
    //     .catch(this._handleError);
    // }
    ApiService.prototype.getUserById = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "users/" + id)
            .catch(this._handleError);
    };
    ;
    // create a new user
    ApiService.prototype.createUser = function (user) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "users/", user, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // PATCH user
    ApiService.prototype.patchUser = function (id, newFieldAndValue) {
        return this.http
            .patch(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "users/" + id + "/", newFieldAndValue, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // **************** ORDERS *******************
    // POST order
    ApiService.prototype.postOrder = function (order) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "orders/", order, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // get all orders for admin
    ApiService.prototype.getOrders = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "orders")
            .catch(this._handleError);
    };
    ;
    // get all orders for a single producer
    ApiService.prototype.getOrdersByProducerId = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "producer/" + id + '/orders')
            .catch(this._handleError);
    };
    ;
    // get all orders for a single consumer
    ApiService.prototype.getOrdersByConsumerId = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "consumer/" + id + '/orders')
            .catch(this._handleError);
    };
    ;
    // PUT existing order - producer or admin only
    ApiService.prototype.putOrder = function (id, order) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "orders/" + id, order, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    // PATCH order
    ApiService.prototype.patchOrder = function (id, newFieldAndValue) {
        return this.http
            .patch(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "orders/" + id + "/", newFieldAndValue, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // POST abandoned order
    ApiService.prototype.postAbandonedOrder = function (order) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_6__env_config__["a" /* ENV */].BASE_API + "abandonedOrders/", order, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this._authHeader)
        })
            .catch(this._handleError);
    };
    ;
    // from RWAS
    // GET list of public, future events
    // getEvents$(): Observable<EventModel[]> {
    // return this.http
    // .get(`${ENV.BASE_API}events`)
    // .catch(this._handleError);
    // }
    // ******** ERROR HANDLING *******
    ApiService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Error: Unable to complete request.';
        if (err.message && err.message.indexOf('No JWT present') > -1) {
            this.auth.login();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(errorMsg);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/env.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
// file added in step 2 of Real World Angular Series
// this is to ensure that our dev env doesn't break our prod env and vice versa
var _isDev = window.location.port.indexOf('4200') > -1;
var getHost = function () {
    var protocol = window.location.protocol;
    var host = window.location.host;
    return protocol + "//" + host;
};
// const apiURI = _isDev ? 'http://localhost:8083/api/' : `/api/`; // modify the first option to return http://localhost:3000/searchResults
var apiURI = _isDev ? 'http://localhost:3000/' : "/api/";
var ENV = {
    BASE_URI: getHost(),
    BASE_API: apiURI
};


/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer center-on-small-only\">\n\n        <!--Footer Links-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n\n                <!--First column-->\n                <div class=\"col-md-3 offset-lg-1 hidden-lg-down\">\n                    <h5 class=\"title\">ABOUT OLF</h5>\n                    <p>Onlylocalfood.com is a platform for local food producers to advertise and sell directly to consumers.</p>\n                </div>\n                <!--/.First column-->\n\n                <hr class=\"hidden-md-up\">\n\n                <!--Second column-->\n                <div class=\"col-lg-2 col-md-4 offset-lg-1\">\n                    <h5 class=\"title\">Our Projects</h5>\n                    <ul>\n                        <li><a href=\"#!\">Jeffs Bike Shop</a></li>\n                        <li><a href=\"#!\">Main Street Restaurant</a></li>\n                        <li><a href=\"#!\">Connect Groceries</a></li>\n                        <li><a href=\"#!\">White-To-Black Coffe Shop</a></li>\n                    </ul>\n                </div>\n                <!--/.Second column-->\n\n                <hr class=\"hidden-md-up\">\n\n                <!--Third column-->\n                <div class=\"col-lg-2 col-md-4\">\n                    <h5 class=\"title\">Useful Resources</h5>\n                    <ul>\n                        <li><a href=\"#!\">2016 Advertising Report</a></li>\n                        <li><a href=\"#!\">Best NY Agencies</a></li>\n                        <li><a href=\"#!\">Trends for 2017</a></li>\n                        <li><a href=\"#!\">World Advertisement Report</a></li>\n                    </ul>\n                </div>\n                <!--/.Third column-->\n\n                <hr class=\"hidden-md-up\">\n\n                <!--Fourth column-->\n                <div class=\"col-lg-2 col-md-4\">\n                    <h5 class=\"title\">Find us on</h5>\n                    <ul>\n                        <li><a href=\"https://www.facebook.com/onlylocalfood\" target=\"_blank\">Facebook</a></li>\n                        <li><a href=\"https://www.twitter.com/onlylocalfood\" target=\"_blank\">Twitter</a></li>\n                    </ul>\n                </div>\n                <!--/.Fourth column-->\n\n            </div>\n        </div>\n        <!--/.Footer Links-->\n\n        <hr>\n\n        <!--Copyright-->\n        <div class=\"footer-copyright grey lighten-2\">\n            <div class=\"container-fluid\">\n                <p class=\"text-muted\">© 2018 Copyright: <a href=\"http://www.onlylocalfood.com\"> Onlylocalfood.com </a></p>\n\n            </div>\n        </div>\n        <!--/.Copyright-->\n\n    </footer>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md grey lighten-2\">\n        <div class=\"container flex-center\">\n        <div class=\"row\">\n            <!-- Button that appears on collapse  -->\n            <button class=\"navbar-toggler navbar-toggler-right btn btn-olf-primary btn-sm\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav1\" aria-controls=\"navbarNav1\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"fa fa-bars fa-lg\"></span>\n            </button>\n            <!-- Logo  -->\n            <div class=\"col-5 col-sm-4\">\n                <a routerLink=\"\">\n                    <img src=\"../../assets/images/logo.png\" style=\"max-width: 100%\">\n                </a>\n            </div>\n            <!-- Collapsible Content  -->\n            <div class=\"collapse navbar-collapse col-6 col-lg-8\" id=\"navbarNav1\">\n                <ul class=\"navbar-nav flex-center ml-auto\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"cart\">\n                            <i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\"></i>\n                            <span class=\"badge badge-pill olf-primary-color cart-badge\">{{ cartCount }}</span>\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/search\">Search</a>\n                    </li>\n                    <li class=\"nav-item dropdown\">\n\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" ariaexpanded=\"false\">\n\t\t\t\t\t\t\tLearn More...\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"learn-more-consumer\">For Buyers</a>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"learn-more-producer\">For Producers</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n                    <li class=\"nav-item\" *ngIf=\"loggedIn\">\n                        <a class=\"nav-link\" routerLink=\"dashboard\">My Account</a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"loggedIn\">\n                        <a *ngIf=\"isAdmin\" class=\"nav-link\" routerLink=\"admin\">Admin</a>\n                    </li>\n                    <!--<li class=\"nav-item\">-->\n                    <!--    <button class=\"btn btn-olf-primary\" data-toggle=\"modal\" data-target=\"#modalLRForm\">Sign in/Register</button>-->\n                    <!--</li>-->\n                    <li class=\"nav-item\">\n                        <button class=\"btn btn-olf-primary\" *ngIf=\"!loggedIn\" (click)=\"onLogin($event)\">Sign in/Register</button>\n                        <button class=\"btn btn-olf-primary\" *ngIf=\"loggedIn\" (click)=\"onLogout()\">Logout</button>\n                    </li>\n\t\t\t\n                </ul>\n            </div>\n        </div>\n        </div>\n    </nav>\n    \n                                               \n\n<!--Modal: Login / Register Form-->\n<!--<div class=\"modal fade\" id=\"modalLRForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">-->\n<!--    <div class=\"modal-dialog cascading-modal\" role=\"document\">-->\n        <!--Content-->\n<!--        <div class=\"modal-content\">-->\n\n            <!--Modal cascading tabs-->\n<!--            <div class=\"modal-c-tabs\">-->\n\n                <!-- Nav tabs -->\n<!--                <ul class=\"nav nav-tabs nav-justified tabs-2 grey lighten-2\" role=\"tablist\">-->\n<!--                    <li class=\"nav-item\">-->\n<!--                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#loginPanel\" role=\"tab\"><i class=\"fa fa-user mr-1\"></i> Login</a>-->\n<!--                    </li>-->\n<!--                    <li class=\"nav-item\">-->\n<!--                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#registerPanel\" role=\"tab\"><i class=\"fa fa-user-plus mr-1\"></i> Register</a>-->\n<!--                    </li>-->\n<!--                </ul>-->\n\n                <!-- Tab panels -->\n<!--                <div class=\"tab-content\">-->\n                    <!-- Login Panel-->\n<!--                    <div class=\"tab-pane fade in show active\" id=\"loginPanel\" role=\"tabpanel\">-->\n\n                        <!--Body-->\n<!--                        <app-signin></app-signin>-->\n\n<!--                    </div>-->\n                    <!--/Login Panel-->\n\n                    <!-- Register Panel -->\n<!--                    <div class=\"tab-pane fade\" id=\"registerPanel\" role=\"tabpanel\">-->\n\n                        <!--Body-->\n<!--                        <app-register></app-register>-->\n                        \n<!--                    </div>-->\n                    <!--/ Register Panel-->\n<!--                </div>-->\n\n<!--            </div>-->\n<!--        </div>-->\n        <!--/.Content-->\n<!--    </div>-->\n<!--</div>-->\n<!--Modal: Login / Register Form-->\n\n                                "

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, cartService) {
        this.authService = authService;
        this.cartService = cartService;
    }
    HeaderComponent.prototype.ngOnChanges = function () { };
    HeaderComponent.prototype.onLogin = function (e) {
        console.log('cart stored from header');
        this.cartService.storeCarts();
        this.authService.login();
        e.preventDefault();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.cartService.removeCarts();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loggedIn$
            .subscribe(function (result) {
            _this.loggedIn = result;
            if (_this.loggedIn) {
                _this.cartService.retrieveCarts();
            }
            ;
        });
        this.cartService.getCartCount()
            .subscribe(function (results) {
            _this.cartCount = results;
        });
        this.cartService.loadCartCount();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isAdmin", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_cart_service_cart_service__["a" /* CartService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/models/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModel; });
var OrderModel = /** @class */ (function () {
    function OrderModel(id, chosenSchedule, producer, consumer, tempId, productList, orderDetails) {
        this.id = id;
        this.chosenSchedule = chosenSchedule;
        this.producer = producer;
        this.consumer = consumer;
        this.tempId = tempId;
        this.productList = productList;
        this.orderDetails = orderDetails;
    }
    return OrderModel;
}());



/***/ }),

/***/ "./src/app/core/models/producer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerModel; });
var ProducerModel = /** @class */ (function () {
    function ProducerModel(id, name, location, province, email, longitude, latitude, firstName, status, address, description, logoUrl, registrationDate, products, schedule) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.province = province;
        this.email = email;
        this.longitude = longitude;
        this.latitude = latitude;
        this.firstName = firstName;
        this.status = status;
        this.address = address;
        this.description = description;
        this.logoUrl = logoUrl;
        this.registrationDate = registrationDate;
        this.products = products;
        this.schedule = schedule;
    }
    return ProducerModel;
}());



/***/ }),

/***/ "./src/app/core/models/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductModel = /** @class */ (function () {
    function ProductModel(id, name, description, image, pricePerUnit, unit, unitsPer, category, subcategory, producer, dateAdded, qtyAvailable, qtyPending, qtyAccepted, qtyCompleted, isObsolete, scheduleList) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.pricePerUnit = pricePerUnit;
        this.unit = unit;
        this.unitsPer = unitsPer;
        this.category = category;
        this.subcategory = subcategory;
        this.producer = producer;
        this.dateAdded = dateAdded;
        this.qtyAvailable = qtyAvailable;
        this.qtyPending = qtyPending;
        this.qtyAccepted = qtyAccepted;
        this.qtyCompleted = qtyCompleted;
        this.isObsolete = isObsolete;
        this.scheduleList = scheduleList;
    }
    return ProductModel;
}());



/***/ }),

/***/ "./src/app/core/models/schedule.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModel; });
var ScheduleModel = /** @class */ (function () {
    function ScheduleModel(id, producerId, productList, type, description, startDateTime, endDateTime, hasFee, hasWaiver, latitude, longitude, city, province, orderDeadline, address, fee, feeWaiver, orderList) {
        this.id = id;
        this.producerId = producerId;
        this.productList = productList;
        this.type = type;
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.hasFee = hasFee;
        this.hasWaiver = hasWaiver;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city = city;
        this.province = province;
        this.orderDeadline = orderDeadline;
        this.address = address;
        this.fee = fee;
        this.feeWaiver = feeWaiver;
        this.orderList = orderList;
    }
    return ScheduleModel;
}());



/***/ }),

/***/ "./src/app/core/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(id, firstName, email, registrationDate, role, orders) {
        this.id = id;
        this.firstName = firstName;
        this.email = email;
        this.registrationDate = registrationDate;
        this.role = role;
        this.orders = orders;
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/core/services/cart-service/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_user_user_service__ = __webpack_require__("./src/app/core/services/user/user.service.ts");
// imported in AppModule
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in ...
// Header Component
// Cart Product Component
// Carts Component
// Checkout Component
// Edit Order Modal Component
// Add to Cart Component





var CartService = /** @class */ (function () {
    // during construction, create the empty dataStore and any BehaviourSubjects
    function CartService(apiService, authService, userService) {
        this.apiService = apiService;
        this.authService = authService;
        this.userService = userService;
        // id maker for each cart in the cart service instance
        // start it at negative one so that the tempId will be the index as well
        this.tempId = -1;
        this.dataStore = { carts: [], cartCount: 0, schedulesArray: [{ tempId: null, producerId: null, communityList: [{ city: null, scheduleList: [] }] }] };
        this._carts = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._cartCount = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._schedulesArray = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._cart = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]({});
        this._scheduleList = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._communityList = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._chosenSchedule = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._consumerComment = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this._cartId = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    // ***********DATE LOADING AND OBSERVABLE CREATION**********
    CartService.prototype.getCarts = function () {
        return this._carts.asObservable();
    };
    CartService.prototype.loadCarts = function () {
        this._carts.next(Object.assign({}, this.dataStore).carts);
    };
    CartService.prototype.getCartById = function () {
        return this._cart.asObservable();
    };
    CartService.prototype.loadCartById = function (id) {
        console.log('load cart by id called: ', id);
        var cartToLoad;
        this.dataStore.carts.forEach(function (cart) {
            console.log('cart now: ', cart);
            if (cart.tempId === id) {
                cartToLoad = cart;
            }
        });
        // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
        this._cart.next(Object.assign(cartToLoad));
        console.log('datastore: ', this.dataStore);
    };
    CartService.prototype.getCartIndex = function (tempId) {
        var cartIndex;
        console.log('getting cart Index');
        for (var i = 0; i < this.dataStore.carts.length; i++) {
            console.log('cart looping now: ', this.dataStore.carts[i]);
            console.log('tempId: ', tempId);
            console.log('cart temp id: ', this.dataStore.carts[i].tempId);
            if (this.dataStore.carts[i].tempId === tempId) {
                cartIndex = i;
            }
        }
        return cartIndex;
    };
    CartService.prototype.getCartCount = function () {
        return this._cartCount.asObservable();
    };
    CartService.prototype.loadCartCount = function () {
        this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    };
    CartService.prototype.getCommunityList = function () {
        return this._communityList.asObservable();
    };
    ;
    // loadCommunityList(id) {
    //   console.log('id from checkout comp: ', id);
    //   console.log('loadComm List datastore currently: ', this.dataStore);
    //   this._communityList.next(Object.assign({}, this.dataStore).schedulesArray[id].communityList);
    // }
    CartService.prototype.loadCommunityList = function (producerId) {
        console.log('load communityList by id called: ', producerId);
        var communityListToLoad;
        this.dataStore.schedulesArray.forEach(function (schedule) {
            if (schedule.producerId === producerId) {
                communityListToLoad = schedule.communityList;
            }
        });
        // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
        this._communityList.next(Object.assign(communityListToLoad));
        console.log('datastore: ', this.dataStore);
        ;
    };
    // ***********PRODUCT METHODS**********
    // on click from any 'add to cart' buttons, add the product and qty to the cart
    CartService.prototype.addToCart = function (product, quantity) {
        // calculate the total value of this addition
        var productValue = this.calculateProductOrderValue(product, quantity);
        // create the productQuantities object
        var productQuantities = {
            productId: product.id,
            orderQuantity: quantity,
            orderValue: productValue
        };
        // get producerId from product,
        var producerId = product.producer.id;
        var producerIndex = this.findProducerIndex(producerId);
        var productIndex = this.findProductIndex(producerIndex, product.id);
        // make sure quantity is less than or equal to qtyAvailable
        // get current qtyAvailable
        // let currentQtyAvailable = this.getCurrentlyAvailable(product.id);
        // if not, inform user and make quantity = qtyAvailable
        // if (quantity > currentQtyAvailable) {
        //   quantity = currentQtyAvailable;
        //   // inform user
        // // set a property here as an observable that the component can subscribe to, then it can trigger an alert
        // };
        // change the product's quantities
        console.log('productId: ', product.id);
        console.log('quantity: ', quantity);
        this.makeQtyPending(product.id, quantity);
        // if cart is empty OR if the producerId is not in the cart, add the info to it
        if ((producerIndex === -1) || (producerIndex === undefined)) {
            // add one to the tempIds variable
            this.tempId += 1;
            // producer isn't there, so build the order from scratch
            var newOrder = {
                id: null,
                tempId: this.tempId,
                chosenSchedule: null,
                producerId: producerId,
                producer: product.producer,
                consumerId: null,
                consumer: null,
                productList: [
                    product
                ],
                orderDetails: {
                    productQuantities: [
                        productQuantities
                    ],
                    consumerComment: '',
                    deliveryAddress: '',
                    deliveryFee: null,
                    createdDate: '',
                    producerComment: '',
                    orderStatus: 'pending',
                    orderValue: productValue // set to product value only for the first product added to the cart
                }
            };
            // push the new order into the cart
            this.dataStore.carts.push(newOrder);
        }
        else if (productIndex !== -1) {
            this.findAndAddMoreQty(product.id, quantity, producerIndex, productValue);
            this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
        }
        else {
            this.dataStore.carts[producerIndex].productList.push(product);
            this.dataStore.carts[producerIndex].orderDetails.productQuantities.push(productQuantities);
            this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
        }
        ;
        // add to the schedules array as necessary
        this.addToSchedulesArray(this.tempId, producerId, product.scheduleList);
        // calculate/recalc the totalValue of the cart
        // increase the cartCount
        this.dataStore.cartCount += quantity;
        this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
        console.log('dataStore: ', this.dataStore);
        // if a timer currently exists, clear it, start a new timer
        this.restartTimer();
    };
    ;
    // calculate the total value of the additional product ordered
    CartService.prototype.calculateProductOrderValue = function (product, quantity) {
        var value = product.pricePerUnit * product.unitsPer * quantity;
        return value;
    };
    ;
    CartService.prototype.calculateTotalOrderValue = function (cart) {
        var totalValue = 0;
        cart.orderDetails.productQuantities.forEach(function (object) {
            totalValue += object.orderValue;
        });
        return totalValue;
    };
    ;
    // remove a product from the cart
    CartService.prototype.deleteProduct = function (productId, producerId) {
        // remove the product from the cart
        // return it's quantity to qtyAvailable
        // change the cartCount
        // restart the cart timer
        // if only one cart in datastore, set it equal to cart, otherwise loop through each until you find the productId
        var cart;
        var cartIndex;
        var productIndex;
        if (this.dataStore.carts.length === 1) {
            cart = this.dataStore.carts[0];
            for (var j = 0; j < cart.orderDetails.productQuantities.length; j++) {
                if (cart.orderDetails.productQuantities[j].productId === productId) {
                    cartIndex = 0;
                    productIndex = j;
                }
                ;
            }
            ;
        }
        else {
            for (var i = 0; i < this.dataStore.carts.length; i++) {
                for (var j = 0; j < this.dataStore.carts[i].orderDetails.productQuantities.length; j++) {
                    if (this.dataStore.carts[i].orderDetails.productQuantities[j].productId === productId) {
                        cart = this.dataStore.carts[i];
                        cartIndex = i;
                        productIndex = j;
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        console.log('cart: ', cart); // works
        console.log('cartIndex: ', cartIndex); // undefined
        console.log('productIndex: ', productIndex); // undefined
        // get the quantity
        console.log('qty: ', cart.orderDetails.productQuantities[productIndex].orderQuantity);
        var quantity = cart.orderDetails.productQuantities[productIndex].orderQuantity;
        // splice the product out of the arrays
        this.dataStore.carts[cartIndex].orderDetails.productQuantities.splice(productIndex, 1);
        this.dataStore.carts[cartIndex].productList.splice(productIndex, 1);
        // update the order value
        this.dataStore.carts[cartIndex].orderDetails.orderValue = this.calculateTotalOrderValue(cart);
        // emit the new carts
        this._carts.next(Object.assign({}, this.dataStore).carts);
        // change the qtyAvailable
        this.makeQtyAvailable(productId, quantity);
        // decrease the cartCount
        this.dataStore.cartCount -= quantity;
        this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
        // clear timer and start new timer
        this.restartTimer();
    };
    ;
    // ***********CART MODIFICATION METHODS**********
    // build the cart
    CartService.prototype.buildCart = function (cartId, chosenSchedule, consumerComment, deliveryAddress) {
        // add the consumer to the cart
        this.addConsumer(cartId);
        // add the chosen schedule to the cart
        this.selectSchedule(cartId, chosenSchedule);
        // add the consumer comment to the cart
        this.addConsumerComment(cartId, consumerComment);
        // date stamp the cart
        this.dateStampCart(cartId);
        if (chosenSchedule.type === "Door-to-door Delivery") {
            // add the delivery fee, if required
            this.addDeliveryFee(cartId, chosenSchedule.fee);
            // add the delivery address, if it exists
            this.addDeliveryAddress(cartId, deliveryAddress);
        }
        // change status to pending
        this.makeCartPending(cartId);
        return this.dataStore.carts[cartId];
    };
    ;
    // for each cart in the cart contents, select a schedule
    CartService.prototype.selectSchedule = function (cartId, schedule) {
        // in specified cart, push the schedule details
        console.log('chosen sched given to select schedule method: ', schedule);
        this.dataStore.carts[cartId].chosenSchedule = schedule;
        console.log('cart in dataStore after sched added: ', this.dataStore.carts[cartId]);
    };
    ;
    CartService.prototype.addConsumer = function (cartId) {
        var _this = this;
        // this.dataStore.carts[cartId].consumer = this.authService.userProfile;
        // let idArray = this.authService.userProfile.sub.split('|');
        // this.dataStore.carts[cartId].consumerId = idArray[1];
        this.userService.getUser()
            .subscribe(function (result) {
            _this.dataStore.carts[cartId].consumer = result;
            _this.dataStore.carts[cartId].consumerId = result.id;
        });
    };
    ;
    CartService.prototype.addConsumerComment = function (cartId, comment) {
        this.dataStore.carts[cartId].orderDetails.consumerComment = comment;
    };
    ;
    CartService.prototype.addDeliveryAddress = function (cartId, address) {
        this.dataStore.carts[cartId].orderDetails.deliveryAddress = address;
    };
    ;
    CartService.prototype.addDeliveryFee = function (cartId, fee) {
        this.dataStore.carts[cartId].orderDetails.deliveryFee = fee;
    };
    ;
    CartService.prototype.makeCartPending = function (cartId) {
        this.dataStore.carts[cartId].orderDetails.orderStatus = 'pending';
    };
    CartService.prototype.dateStampCart = function (cartId) {
        var date = new Date();
        this.dataStore.carts[cartId].orderDetails.createdDate = date;
    };
    CartService.prototype.getCartCountOfSingleCart = function (cartId) {
        var count = 0;
        // get the cart
        var cart = this.dataStore.carts[cartId];
        console.log('cart: ', cart);
        // loop through the productQuantities, adding them to count
        for (var i = 0; i < cart.orderDetails.productQuantities.length; i++) {
            console.log('cart.orderDetails.productQuantities[i].orderQuantity; ', cart.orderDetails.productQuantities[i].orderQuantity);
            count += cart.orderDetails.productQuantities[i].orderQuantity;
        }
        console.log('count: ', count);
        return count;
    };
    CartService.prototype.clearCart = function (cartId) {
        // splice the provided cart from the array
        this.dataStore.carts.splice(cartId, 1);
        // refresh localstorage
        this.removeCarts();
        this.storeCarts();
        // refresh the observable
        this._carts.next(Object.assign({}, this.dataStore).carts);
    };
    ;
    // ***********ORDER CONFIRMATION**********
    // confirm and send the order from consumer to producer
    CartService.prototype.confirmAndSendOrder = function (cartId, chosenSchedule, consumerComment, deliveryAddress) {
        var _this = this;
        // build the cart
        var newOrder = this.buildCart(cartId, chosenSchedule, consumerComment, deliveryAddress);
        // send the cart via the api
        console.log('finished cart: ', newOrder);
        this.apiService.postOrder(newOrder)
            .subscribe(function (result) {
            console.log('successfully posted: ', result);
            // remove the cart contents from the cart count
            _this.dataStore.cartCount -= _this.getCartCountOfSingleCart(cartId); // unnecessary??? throws error on single cart checkout, not sure about multi
            // remove the cart from the dataStore on success
            _this.clearCart(cartId);
            console.log('new cartCount: ', _this.dataStore.cartCount);
            _this._cartCount.next(Object.assign({}, _this.dataStore).cartCount);
        }, function (error) { return console.log('could not add new order'); });
    };
    ;
    CartService.prototype.storeCarts = function () {
        console.log('storing carts: ', this.dataStore);
        // store all carts in datastore
        localStorage.setItem('dataStore', JSON.stringify(this.dataStore));
    };
    ;
    CartService.prototype.retrieveCarts = function () {
        var localCarts = JSON.parse(localStorage.getItem('dataStore'));
        if (localCarts) {
            console.log('carts in local storage: ', localCarts);
            // add it/them to the carts array in datastore
            this.dataStore = localCarts;
            this.loadCarts();
            this.loadCartCount();
        }
        else {
            console.log('no carts in local storage');
        }
    };
    ;
    CartService.prototype.removeCarts = function () {
        localStorage.removeItem('dataStore');
    };
    // ***********TIMER METHODS**********
    // 20 minute timer, then mark as abandoned
    CartService.prototype.cartTimer = function () {
        // setTimeout(this.logAbandonedCart, 1200000);
    };
    ;
    CartService.prototype.restartTimer = function () {
        // clear the old timer
        // this.cartTimer.clearTimeout();
        // restart as new
        this.cartTimer();
    };
    ;
    // ***********OTHER METHODS**********
    CartService.prototype.makeQtyPending = function (productId, qty) {
        var _this = this;
        console.log('productId: ', productId);
        console.log('qty: ', qty);
        var newVals = {
            'qtyAvailable': null,
            'qtyPending': null
        };
        // call the API
        this.apiService.getProductById(productId)
            .subscribe(function (result) {
            newVals.qtyAvailable = result.qtyAvailable;
            newVals.qtyPending = result.qtyPending;
            console.log('newVals: ', newVals); // working
            newVals.qtyAvailable -= qty;
            newVals.qtyPending += qty;
            console.log('qty: ', qty);
            console.log('newVals: ', newVals); // not working
            _this.apiService.patchProduct(productId, newVals)
                .subscribe(function (result) {
                console.log('successfully patched product: ', result);
            }, function (error) { return console.log('could not patch product'); });
        });
    };
    ;
    CartService.prototype.makeQtyAvailable = function (productId, qty) {
        var _this = this;
        console.log('productId: ', productId);
        console.log('qty: ', qty);
        var newVals = {
            'qtyAvailable': null,
            'qtyPending': null
        };
        // call the API
        this.apiService.getProductById(productId)
            .subscribe(function (result) {
            newVals.qtyAvailable = result.qtyAvailable;
            newVals.qtyPending = result.qtyPending;
            console.log('newVals: ', newVals); // working
            newVals.qtyAvailable += qty;
            newVals.qtyPending -= qty;
            console.log('qty: ', qty);
            console.log('newVals: ', newVals); // not working
            _this.apiService.patchProduct(productId, newVals)
                .subscribe(function (result) {
                console.log('successfully patched product: ', result);
            }, function (error) { return console.log('could not patch product'); });
        });
    };
    ;
    CartService.prototype.makeQtyAccepted = function (productId, qty) {
        var _this = this;
        console.log('productId: ', productId);
        console.log('qty: ', qty);
        var newVals = {
            'qtyAccepted': null,
            'qtyPending': null
        };
        this.apiService.getProductById(productId)
            .subscribe(function (result) {
            newVals.qtyAccepted = result.qtyAccepted;
            newVals.qtyPending = result.qtyPending;
            console.log('newVals: ', newVals); // working
            newVals.qtyAccepted += qty;
            newVals.qtyPending -= qty;
            console.log('qty: ', qty);
            console.log('newVals: ', newVals); // not working
            _this.apiService.patchProduct(productId, newVals)
                .subscribe(function (result) {
                console.log('successfully patched product: ', result);
            }, function (error) { return console.log('could not patch product'); });
        });
    };
    ;
    // look to see if producer is in cart, return the index number or -1
    CartService.prototype.findProducerIndex = function (id) {
        var _this = this;
        var index;
        if (this.dataStore.carts.length === 0) {
            index = -1;
        }
        else {
            this.dataStore.carts.forEach(function (order) {
                if (order.producer.id === id) {
                    index = (_this.dataStore.carts.indexOf(order));
                }
            });
        }
        return index;
    };
    ;
    CartService.prototype.findProductIndex = function (producerIndex, productId) {
        if ((this.dataStore.carts[producerIndex] === undefined)) {
            return -1;
        }
        else {
            var j = void 0;
            var length_1 = this.dataStore.carts[producerIndex].productList.length;
            for (j = 0; j < length_1; j++) {
                if ((this.dataStore.carts[producerIndex].productList[j].id) === productId) {
                    return j;
                }
                ;
            }
            ;
            return -1;
        }
        ;
    };
    ;
    // find the product in the array and add the given qty to the existing qty
    CartService.prototype.findAndAddMoreQty = function (productId, quantity, producerIndex, productValue) {
        // access the productQuantities array
        var array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
        // loop through the array and return the index of the appropriate product
        var productIndex;
        for (var i = 0; i < array.length; i++) {
            if (array[i].productId === productId) {
                productIndex = i;
            }
        }
        this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderQuantity += quantity;
        this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderValue += productValue;
    };
    ;
    CartService.prototype.addOne = function (productId, producerId) {
        // change the product's quantities
        this.makeQtyPending(productId, 1);
        // increase the cartCount
        this.dataStore.cartCount += 1;
        this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
        var producerIndex = this.findProducerIndex(producerId);
        var productIndex = this.findProductIndex(producerIndex, productId);
        var array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
        var productQuantitiesIndex;
        // find the target product in the productQuantities array
        for (var i = 0; i < array.length; i++) {
            if (array[i].productId === productId) {
                productQuantitiesIndex = i;
            }
            ;
        }
        ;
        // change the quantity of that product
        this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity += 1;
        // calculate the new order value of that product
        this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity);
        this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    };
    CartService.prototype.minusOne = function (productId, producerId) {
        // change the product's quantities
        this.makeQtyPending(productId, -1);
        // increase the cartCount
        this.dataStore.cartCount -= 1;
        this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
        var producerIndex = this.findProducerIndex(producerId);
        var productIndex = this.findProductIndex(producerIndex, productId);
        var array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
        var productQuantitiesIndex;
        // find the target product in the productQuantities array
        for (var i = 0; i < array.length; i++) {
            if (array[i].productId === productId) {
                productQuantitiesIndex = i;
            }
            ;
        }
        ;
        // change the quantity of that product
        this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity -= 1;
        // calculate the new order value of that product
        this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity);
        this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    };
    CartService.prototype.findProducerInSchedList = function (id) {
        var result;
        this.dataStore.schedulesArray.forEach(function (scheduleObject) {
            if (scheduleObject.producerId === id) {
                result = true;
            }
        });
        return result;
    };
    ;
    CartService.prototype.addToSchedulesArray = function (tempId, producerId, scheduleList) {
        var communityList;
        // if dataStore.scheduleList is empty
        if (this.dataStore.schedulesArray[0].producerId === null) {
            //build the communityList array
            communityList = this.buildCommunityList(scheduleList);
            this.dataStore.schedulesArray = [{
                    tempId: tempId,
                    producerId: producerId,
                    communityList: communityList
                }];
        }
        else if (!this.findProducerInSchedList(producerId)) {
            //build the communityList array
            communityList = this.buildCommunityList(scheduleList);
            var newObject = {
                tempId: tempId,
                producerId: producerId,
                communityList: communityList
            };
            this.dataStore.schedulesArray.push(newObject);
        }
    };
    ;
    CartService.prototype.buildCommunityList = function (scheduleList) {
        var _this = this;
        var city;
        var communityList;
        // for each item in the scheduleList
        scheduleList.forEach(function (sched) {
            // get the city
            city = sched.city;
            if (!communityList) {
                communityList = [{
                        city: city,
                        scheduleList: [sched]
                    }];
            }
            else {
                // get the index of the city
                var index = _this.findCityInCommunityList(city, communityList);
                if (index === -1) {
                    communityList.push({ city: city, scheduleList: [sched] });
                }
                else {
                    communityList[index].scheduleList.push(sched);
                }
            }
        });
        return communityList;
    };
    ;
    CartService.prototype.findCityInCommunityList = function (city, communityList) {
        for (var i = 0; i < communityList.length; i++) {
            if (communityList[i].city === city) {
                return i;
            }
        }
        ;
        return -1;
    };
    ;
    // send order to abandoned orders table
    CartService.prototype.logAbandonedCart = function () {
        // let cart;
        // // loop through each cart
        // for (let i = 0; i < this.dataStore.carts.length; i++) {
        // 	cart = this.dataStore.carts[i]
        // 	// return quantities to qtyAvailable
        // 	for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
        // 		this.makeQtyAvailable(cart.orderDetails.productQuantities[i].productId, cart.orderDetails.productQuantities[i].orderQuantity);
        // 	};
        // 	// api method to log cart in abandoned cart table
        // 	this.apiService.postAbandonedOrder(cart)
        // 		.subscribe(
        // 			result => {
        // 				console.log('cart Abandoned: ', cart);
        // 			}, error => console.log('could not log order')
        // 		);
        // };
        // // empty the cart
        // this.emptyAbandonedCart();
    };
    ;
    // change all product quantities from pending back to available
    CartService.prototype.emptyAbandonedCart = function () {
        this.dataStore.carts = [];
        this._carts.next(Object.assign({}, this.dataStore).carts);
    };
    ;
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_user_user_service__["a" /* UserService */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/core/services/location/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
// provided in App Module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in ...
// Table Layout Comp


var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService.prototype.getLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (position) {
                    observer.next(position);
                    observer.complete();
                }, function (error) { return observer.error(error); });
            }
            else {
                observer.error('Unsupported Browser');
            }
        });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/core/services/places/places.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// imported in App Module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in...
// nothing, but this is how it should work I think

var PlacesService = /** @class */ (function () {
    function PlacesService() {
    }
    PlacesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlacesService);
    return PlacesService;
}());



/***/ }),

/***/ "./src/app/core/services/producer/producer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/core/api.service.ts");
// provided in Producer Component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in ...
// Add Product Comp
// Products Comp
// Producer Products Comp
// Producer Page Comp
// Producer Comp, obviously
// Product Component
// Schedule Component





var ProducerService = /** @class */ (function () {
    function ProducerService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        // URLs
        this.producersUrl = '../../../../assets/api/producers.json';
        this.productsUrl = '../../../../assets/api/products.json';
        this.productAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dataStore = {
            producer: null,
            products: [],
            schedule: []
        };
        this._product = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
        this._producer = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
        this._producerProducts = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._producerSchedule = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    // **************************** LOAD ALL INTO DATASTORE ************************ 
    // GET the producer and store the info in the dataStore, if it's not already in there
    ProducerService.prototype.loadProducerData = function (id) {
        var _this = this;
        console.log('id: ', id);
        console.log('datastore: ', this.dataStore);
        if ((this.dataStore.producer === null) || (id !== this.dataStore.producer.id)) {
            this.apiService.getProducerById(id)
                .subscribe(function (response) {
                _this.dataStore.producer = response;
                // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
                _this._producer.next(Object.assign({}, _this.dataStore).producer);
            });
            // then populate products
            this.apiService.getProductsByProducerId(id)
                .subscribe(function (response) {
                _this.dataStore.products = response;
                // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
                _this._producerProducts.next(Object.assign({}, _this.dataStore).products);
            });
            this.apiService.getScheduleByProducerId(id)
                .subscribe(function (response) {
                _this.dataStore.schedule = response;
                // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
                _this._producerSchedule.next(Object.assign({}, _this.dataStore).schedule);
            });
        }
        else {
            return;
        }
    };
    // **************************** SINGLE PRODUCER ************************
    ProducerService.prototype.getProducer = function () {
        return this._producer.asObservable();
    };
    // **************************** MULTIPLE PRODUCTS ************************
    ProducerService.prototype.getAllProducts = function () {
        return this._producerProducts.asObservable();
    };
    // **************************** SINGLE PRODUCT ************************
    // use this to return a product for now
    ProducerService.prototype.getProductById = function (id) {
        return this._product.asObservable();
    };
    // this is returning the data from Nikki's endpoint
    // getProductById(id) {
    //   this.apiService.getProductById(id).
    //     subscribe(
    //       response => {
    //         this.product = response;
    //         return this.product;
    //       }
    //     );
    // }
    // GET the single product with an API call, assign it as the next observable from the BehaviorSubject
    // NOTE -  first check to see if this product is in the dataStore.products array, if not, then make the API call
    ProducerService.prototype.loadProduct = function (productId, producerId) {
        var _this = this;
        this.apiService.getProductById(productId)
            .subscribe(function (response) {
            _this._product.next(Object.assign({}, response));
        });
    };
    // **************************** MULTIPLE SCHEDULES ************************
    ProducerService.prototype.getAllSchedule = function () {
        return this._producerSchedule.asObservable();
    };
    // **************************** SINGLE SCHEDULE ************************
    // GET and LOAD the single schedule with an API call, assign it as the next observable from the BehaviorSubject
    // NOTE -  first check to see if this product is in the dataStore.schedule array, if not, then make the API call
    ProducerService.prototype.getScheduleById = function (id) {
    };
    ;
    ProducerService.prototype.loadScheduleById = function (id) {
    };
    // **************************** ADMIN DASHBOARD ************************
    //  for Admin dash only. original that works with the subscription in the products component class
    ProducerService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ProducerService.prototype.getProducers = function () {
        return this.http.get(this.producersUrl)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    ProducerService.prototype.ngOnInit = function () { };
    ProducerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], ProducerService);
    return ProducerService;
}());



/***/ }),

/***/ "./src/app/core/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/core/api.service.ts");
// provided in Search Comp
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in...
// Search Options Comp
// Filter Buttons Comp
// Results Pane Comp
// Search Calendar Comp
// Search Producer Comp
// Search Comp



var SearchService = /** @class */ (function () {
    // during construction of service, create a empty dataStore and various BehaviorSubjects
    function SearchService(apiService) {
        this.apiService = apiService;
        // ****************** MODIFYING THE VIEW BASED ON FILTER BUTTONS
        // create a private property to hold the default view
        this.viewStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]("products");
        this._viewStatus = this.viewStatus.asObservable();
        this.dataStore = { searchResults: [], deliveryTypes: [], categories: [], searchProducers: [], searchDeliveries: [] };
        this._searchResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._deliveryTypes = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._categories = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._searchProducers = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._searchDeliveries = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
    }
    // fill up the dataStore with a call to the API
    SearchService.prototype.loadAll = function () {
        var _this = this;
        this.apiService.getSearchResults()
            .subscribe(function (response) {
            // fill dataStore
            _this.dataStore.searchResults = response;
            _this.dataStore.deliveryTypes = _this.addDeliveryTypes(_this.dataStore.searchResults);
            _this.dataStore.categories = _this.addCategories(_this.dataStore.searchResults);
            _this.dataStore.searchProducers = _this.addSearchProducers(_this.dataStore.searchResults);
            _this.dataStore.searchDeliveries = _this.addSearchDeliveries(_this.dataStore.searchResults);
            // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
            _this._searchResults.next(Object.assign({}, _this.dataStore).searchResults);
            _this._deliveryTypes.next(Object.assign({}, _this.dataStore).deliveryTypes);
            _this._categories.next(Object.assign({}, _this.dataStore).categories);
            _this._searchProducers.next(Object.assign({}, _this.dataStore).searchProducers);
            _this._searchDeliveries.next(Object.assign({}, _this.dataStore).searchDeliveries);
        }, function (error) { return console.log('could not load search results'); });
    };
    // create an observable out of the copy of the results
    SearchService.prototype.getSearchResults = function () {
        return this._searchResults.asObservable();
    };
    SearchService.prototype.getDeliveryTypes = function () {
        return this._deliveryTypes.asObservable();
    };
    SearchService.prototype.getCategories = function () {
        return this._categories.asObservable();
    };
    SearchService.prototype.getProducers = function () {
        return this._searchProducers.asObservable();
    };
    SearchService.prototype.getDeliveries = function () {
        return this._searchDeliveries.asObservable();
    };
    SearchService.prototype.addDeliveryTypes = function (searchResults) {
        var _this = this;
        searchResults.forEach(function (product) {
            product.scheduleList.forEach(function (delivery) {
                if (!_this.dataStore.deliveryTypes.includes(delivery.type)) {
                    _this.dataStore.deliveryTypes.push(delivery.type);
                }
            });
        });
        return this.dataStore.deliveryTypes;
    };
    SearchService.prototype.addCategories = function (searchResults) {
        var newArray = [];
        searchResults.forEach(function (product) {
            var category = product.category;
            if (newArray.length === 0) {
                newArray = [category];
            }
            else if (newArray.indexOf(category) === -1) {
                newArray.push(category);
            }
        });
        return newArray;
    };
    SearchService.prototype.addSearchProducers = function (searchResults) {
        var _this = this;
        // create the producers array
        var producers = [];
        // loop through each of the search results
        searchResults.forEach(function (product) {
            // get the producer's info
            var producer = product.producer;
            var pId = producer.id;
            // get the index of the producer from our working array
            var pIndex = _this.getProducerIndex(producer, producers);
            // add to producers array if array is empty
            if (producers.length === 0) {
                producers[0] = producer;
            }
            else if (!_this.findByIdInArray(pId, producers)) {
                producers.push(producer);
            }
        });
        // return producers array
        return producers;
    };
    ;
    SearchService.prototype.findByIdInArray = function (id, array) {
        for (var i = 0; i < array.length; i++) {
            if (id === array[i].id) {
                return true;
            }
        }
    };
    SearchService.prototype.getProducerIndex = function (producer, producers) {
        for (var i = 0; i < producers.length; i++) {
            if (producer.id === producers[i].id) {
                return i;
            }
        }
    };
    SearchService.prototype.getSimpleProduct = function (product) {
        // pull out the required info and return as an object
        var productObject = {
            "id": null,
            "name": '',
            "description": '',
            "image": '',
            "pricePerUnit": null,
            "unit": null,
            "unitsPer": null,
            "category": '',
            "subcategory": '',
            "producer": {
                "id": null,
                "name": '',
                "location": '',
                "province": '',
                "address": '',
                "description": '',
                "email": '',
                "logoUrl": '',
                "longitude": null,
                "latitude": null,
                "firstName": '',
                "registrationDate": '',
                "status": ''
            },
            "dateAdded": '',
            "qtyAvailable": null,
            "qtyPending": null,
            "qtyAccepted": null,
            "qtyCompleted": null,
            "isObsolete": false,
            "scheduleList": []
        };
        productObject.id = product.id;
        productObject.name = product.name;
        productObject.pricePerUnit = product.pricePerUnit;
        productObject.unit = product.unit;
        return productObject;
    };
    SearchService.prototype.addSearchDeliveries = function (searchResults) {
        var _this = this;
        var deliveries = [];
        // loop through search results
        searchResults.forEach(function (product) {
            // loop through each product's deliveries
            product.scheduleList.forEach(function (delivery) {
                // if deliveries array is empty, add the delivery
                if (deliveries.length === 0) {
                    deliveries[0] = _this.buildNewSearchDelivery(delivery, product);
                }
                else if (!_this.findByIdInArray(delivery.id, deliveries)) {
                    // add it
                    deliveries.push(_this.buildNewSearchDelivery(delivery, product));
                }
            });
        });
        // return the completed array
        return deliveries;
    };
    ;
    SearchService.prototype.buildNewSearchDelivery = function (delivery, product) {
        var producer = product.producer;
        var delObject = {
            "id": delivery.id,
            "producerId": product.producer.id,
            "productList": delivery.productList,
            "type": delivery.type,
            "description": delivery.description,
            "startDateTime": delivery.startDateTime,
            "endDateTime": delivery.endDateTime,
            "hasFee": delivery.hasFee,
            "fee": delivery.fee,
            "hasWaiver": null,
            "feeWaiver": delivery.feeWaiver,
            "latitude": delivery.latitude,
            "longitude": delivery.longitude,
            "city": delivery.city,
            "address": delivery.address,
            "province": delivery.province,
            "orderDeadline": delivery.orderDeadline,
            "orderList": []
        };
        return delObject;
    };
    SearchService.prototype.locationInArray = function (array, searchTerm, property) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i][property] === searchTerm) {
                return i;
            }
            else {
                return -1;
            }
        }
    };
    SearchService.prototype.onFilter = function (values) {
        var _this = this;
        // get original searchResults, loop through each product, if it doesn't contain one of the deliveries or one of the categories, remove it
        var results = this.dataStore.searchResults;
        var catArray = [];
        values.categories.forEach(function (category) { catArray.push(category); });
        var delArray = [];
        values.deliveryTypes.forEach(function (delivery) { delArray.push(delivery); });
        // make a copy of results array to filter
        var filteredResults = [];
        results.forEach(function (product) {
            // if it does contain the delivery AND it does contain the category
            if (_this.containCategory(product, catArray) && _this.containDelivery(product, delArray)) {
                // push it to the array
                filteredResults.push(product);
            }
        });
        this._searchResults.next(filteredResults);
        // create a new array for producers
        var filteredProducers = this.addSearchProducers(filteredResults);
        this._searchProducers.next(filteredProducers);
        // ditto for deliveries
        var filteredDeliveries = this.addSearchDeliveries(filteredResults);
        this._searchDeliveries.next(filteredDeliveries);
    };
    ;
    SearchService.prototype.containCategory = function (product, categoriesArray) {
        for (var i = 0; i < categoriesArray.length; i++) {
            if (product.category === categoriesArray[i]) {
                return true;
            }
        }
        return false;
    };
    ;
    SearchService.prototype.containDelivery = function (product, deliveriesArray) {
        for (var i = 0; i < deliveriesArray.length; i++) {
            for (var j = 0; j < product.scheduleList.length; j++) {
                if (product.scheduleList[j].type === deliveriesArray[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    ;
    SearchService.prototype.onReset = function () {
        this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
        this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
        this._categories.next(Object.assign({}, this.dataStore).categories);
        this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
        this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
    };
    ;
    SearchService.prototype.changeView = function (view) {
        this.viewStatus.next(view);
    };
    SearchService.prototype.ngOnInit = function () { };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/core/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
// provided in App Module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in...
// App Comp
// Update Profile Comp
// Dashboard Comp
// Account Info Comp - commented out, could probably be removed




var UserService = /** @class */ (function () {
    function UserService(apiService, authService) {
        var _this = this;
        this.apiService = apiService;
        this.authService = authService;
        this.userType$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.userType);
        this.user$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.user);
        this.firstName$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.firstName);
        this.email$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.email);
        this.profileIncomplete$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.profileIncomplete);
        // get isFirstLogin, get getParseId, then either get user from db or add and then get
        this.authService.getIdAndProfile()
            .subscribe(function (result) {
            _this.userId = result[0];
            _this.userProfile = result[1];
            if (_this.userId) {
                _this.apiService.getUserById(_this.userId)
                    .subscribe(function (result) {
                    _this.user = result;
                    _this.getUserFromDb(_this.userId);
                }, function (error) {
                    // if the user isn't yet in the db, add them
                    if (error.indexOf('404') > -1) {
                        var newUser = _this.buildNewUser(_this.userProfile);
                        _this.apiService.createUser(newUser)
                            .subscribe(function (result) {
                            _this.isFirstLogin = false;
                            _this.getUserFromDb(_this.userId);
                        });
                    }
                });
            }
        });
    }
    UserService.prototype.buildNewUser = function (profile) {
        var newUser = {
            'id': this.userId,
            'firstName': profile.given_name || '',
            'email': profile['http://myapp.com/email'] || '',
            'registrationDate': profile.created_at || profile.updated_at,
            'role': '',
            'orders': []
        };
        return newUser;
    };
    ;
    UserService.prototype.ngOnChanges = function () { };
    UserService.prototype.ngOnInit = function () {
    };
    ;
    // create the observables
    UserService.prototype.getProfileIncomplete = function () {
        return this.profileIncomplete$.asObservable();
    };
    UserService.prototype.getUser = function () {
        return this.user$.asObservable();
    };
    UserService.prototype.getUserType = function () {
        return this.userType$.asObservable();
    };
    UserService.prototype.getFirstName = function () {
        return this.firstName$.asObservable();
    };
    UserService.prototype.getEmail = function () {
        return this.email$.asObservable();
    };
    UserService.prototype.getUserFromDb = function (id) {
        var _this = this;
        this.apiService.getUserById(id)
            .subscribe(function (result) {
            _this.user = result;
            _this.user$.next(_this.user);
            console.log('user from db: ', _this.user);
            _this.userType = _this.user.role;
            _this.userType$.next(_this.userType);
            _this.firstName = _this.user.firstName;
            _this.firstName$.next(_this.firstName);
            _this.email = _this.user.email;
            _this.email$.next(_this.email);
            if (_this.user.role && _this.user.firstName && _this.user.email) {
                _this.profileIncomplete = false;
                _this.profileIncomplete$.next(false);
            }
            else {
                _this.profileIncomplete = true;
                _this.profileIncomplete$.next(true);
            }
        });
    };
    ;
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/core/services/utility/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// provided in App Module
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// called in ...
// Table Layout Comp

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = '';
        for (var _i = 0, _a = objArray[0]; _i < _a.length; _i++) {
            var index = _a[_i];
            // Now convert each value to string and comma-separated
            row += index + ',';
        }
        ;
        row = row.slice(0, -1);
        // append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var _b = 0, _c = array[i]; _b < _c.length; _b++) {
                var index = _c[_b];
                if (line !== '') {
                    line += ',';
                }
                ;
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    ;
    UtilityService.prototype.convertAndDownload = function (yourData) {
        var csvData = this.ConvertToCSV(yourData);
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'Results.csv'; /* your file name*/
        a.click();
        return 'success';
    };
    ;
    UtilityService.prototype.removeByAttribute = function (array, attribute, value) {
        if (array) {
            var i = array.length;
            while (i--) {
                if (array[i]
                    && array[i].hasOwnProperty(attribute)
                    && (arguments.length > 2 && array[i][attribute] === value)) {
                    array.splice(i, 1);
                }
            }
            return array;
        }
        else {
            return null;
        }
    };
    ;
    UtilityService.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    ;
    UtilityService.prototype.capitalizeEachFirstLetter = function (str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    ;
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/feature/cart/cart/cart/cart-product/cart-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"cover-div\">\n        <img src=\"../../../../../../assets/images/{{ product.image }}\" class=\"img-fluid cover\" alt=\"\">\n    </div>  \n  </div>\n  <div class=\"col-7 offset-1 text-center\">\n    <div class=\"col\">\n      <p>{{ product.name | uppercase }}</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <button class=\"btn btn-outline-olf-primary m-0 p-2\" type=\"button\" (click)=\"lessOne()\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\n      </div>\n      <div class=\"col-6\">\n          <p class=\"m-0\">{{ productQuantity }} x {{ product.pricePerUnit * product.unitsPer | currency:'CAD':'symbol-narrow':'1.2-2' }}/{{ product.unit }}</p>\n          <p class=\"m-0\"><b>{{ totalProductValue | currency:'CAD':'symbol-narrow':'1.2-2' }}</b></p>\n      </div>\n      <div class=\"col-3\">\n          <button class=\"btn btn-outline-olf-primary m-0 p-2\" type=\"button\" (click)=\"addOne()\"><i class=\"fa fa-plus cart-button\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-1 text-center text-red vertical-center-parent pl-0\">\n    <a (click)=\"onDeleteProduct()\" class=\"vertical-center-child\">\n        <i class=\"fa fa-times-circle fa-lg text-danger\" aria-hidden=\"true\"></i></a>\n  </div>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/feature/cart/cart/cart/cart-product/cart-product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/cart/cart/cart/cart-product/cart-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartProductComponent = /** @class */ (function () {
    function CartProductComponent(cartService) {
        this.cartService = cartService;
    }
    CartProductComponent.prototype.ngOnChanges = function () { };
    CartProductComponent.prototype.addOne = function () {
        if (this.product.qtyAvailable > 0) {
            this.cartService.addOne(this.product.id, this.product.producer.id);
            this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
            this.totalProductValue = this.calculateTotal();
        }
    };
    CartProductComponent.prototype.lessOne = function () {
        if (this.productQuantity > 0) {
            this.cartService.minusOne(this.product.id, this.product.producer.id);
            this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
            this.totalProductValue = this.calculateTotal();
        }
    };
    CartProductComponent.prototype.returnQuantity = function (array, id) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].productId === id) {
                return array[i].orderQuantity;
            }
        }
    };
    CartProductComponent.prototype.calculateTotal = function () {
        return (this.productQuantity) * (this.product.pricePerUnit) * (this.product.unitsPer);
    };
    CartProductComponent.prototype.onDeleteProduct = function () {
        this.cartService.deleteProduct(this.product.id, this.product.producer.id);
        this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
        this.totalProductValue = this.calculateTotal();
    };
    CartProductComponent.prototype.ngOnInit = function () {
        this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
        this.totalProductValue = this.calculateTotal();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_product_model__["a" /* ProductModel */])
    ], CartProductComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CartProductComponent.prototype, "productQuantities", void 0);
    CartProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cart-product',
            template: __webpack_require__("./src/app/feature/cart/cart/cart/cart-product/cart-product.component.html"),
            styles: [__webpack_require__("./src/app/feature/cart/cart/cart/cart-product/cart-product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_cart_service_cart_service__["a" /* CartService */]])
    ], CartProductComponent);
    return CartProductComponent;
}());



/***/ }),

/***/ "./src/app/feature/cart/cart/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row olf-primary-color\">\n  <div class=\"col \">\n    <h3 class=\"h3-responsive text-light pt-2\">{{ cart.producer.name | uppercase }}</h3>\n  </div>\n</div>\n<br>\n<app-cart-product *ngFor=\"let product of cart.productList\" [product]=\"product\" [productQuantities]=\"cart.orderDetails.productQuantities\"></app-cart-product>\n<div class=\"row grey lighten-2 mb-3\">\n  <div class=\"col-6 p-2 text-center\">\n    <span><strong>{{ cart.orderDetails.orderValue | currency:'CAD':'symbol-narrow':'1.2-2' }}</strong></span>    \n  </div>\n  <div class=\"col-6 p-0\">\n      <a class=\"btn btn-olf-primary btn-block px-0 m-0 h-100\" [routerLink]=\"['../checkout/' + cart.tempId]\">Go to Checkout</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/cart/cart/cart/cart.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/cart/cart/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_order_model__ = __webpack_require__("./src/app/core/models/order.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnChanges = function () {
        console.log('received cart from carts: ', this.cart);
    };
    CartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_order_model__["a" /* OrderModel */])
    ], CartComponent.prototype, "cart", void 0);
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/feature/cart/cart/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/feature/cart/cart/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/feature/cart/cart/carts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"w-100 text-center\">\n      <h3 *ngIf=\"carts.length > 1\">Your Carts</h3>\n      <h3 *ngIf=\"carts.length == 1\">Your Cart</h3>\n  </div>\n  <div class=\"col col-md-6 offset-md-3\">\n    <blockquote class=\"blockquote bq-warning p-0\" *ngIf=\"carts.length > 1\">\n        <p class=\"bq-title pb-0\">Please Note:</p>\n        <p>You have products from {{ carts.length }} producers. You will need to select how to get each order separately.</p>\n    </blockquote>\n  </div>\n  <div class=\"col col-md-6 offset-md-3 col-lg-4 offset-lg-4\">\n    <app-cart *ngFor=\"let cart of carts\" [cart]=\"cart\"></app-cart>      \n  </div>\n</div>\n<div class=\"row\" *ngIf=\"carts.length == 0\">\n  <div class=\"col-12\">\n    <p class=\"text-center\">You have nothing in your cart.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/cart/cart/carts.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/cart/cart/carts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartsComponent = /** @class */ (function () {
    function CartsComponent(cartService) {
        this.cartService = cartService;
    }
    CartsComponent.prototype.ngOnChanges = function () { };
    CartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCarts()
            .subscribe(function (results) {
            _this.carts = results;
        });
        this.cartService.loadCarts();
        console.log('carts: ', this.carts);
    };
    CartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-carts',
            template: __webpack_require__("./src/app/feature/cart/cart/carts.component.html"),
            styles: [__webpack_require__("./src/app/feature/cart/cart/carts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_cart_service_cart_service__["a" /* CartService */]])
    ], CartsComponent);
    return CartsComponent;
}());



/***/ }),

/***/ "./src/app/feature/cart/checkout/checkout-product/checkout-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2 col-md-2 offset-md-1 col-lg-1 offset-lg-4\">\n    <div class=\"cover-div\">\n        <img src=\"../../../../../../assets/images/{{ product.image }}\" class=\"img-fluid cover\" alt=\"\">\n    </div>  \n  </div>\n  <div class=\"col-9 offset-1 col-md-8 offset-md-1 col-lg-3 offset-lg-1\">\n    <div class=\"col text-center\">\n      <p class=\"card-text\">{{ product.name | uppercase }}</p>\n      <p class=\"card-text m-0\">{{ quantityOrdered }} x {{ product.pricePerUnit * product.unitsPer | currency:'USD':true:'1.2-2' }}/{{ product.unit }}</p>\n      <p class=\"card-text m-0\"><b>{{ totalPrice | currency:'USD':true:'1.2-2' }}</b></p>\n    </div>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/feature/cart/checkout/checkout-product/checkout-product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/cart/checkout/checkout-product/checkout-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutProductComponent = /** @class */ (function () {
    function CheckoutProductComponent() {
    }
    CheckoutProductComponent.prototype.getProductIndex = function () {
        var index;
        for (var i = 0; i < this.productQuantities.length; i++) {
            if (this.productQuantities[i].productId === this.product.id) {
                index = i;
            }
        }
        return index;
    };
    CheckoutProductComponent.prototype.calculateTotal = function () {
        return (this.product.pricePerUnit) * (this.product.unitsPer) * (this.quantityOrdered);
    };
    CheckoutProductComponent.prototype.ngOnChanges = function () { };
    CheckoutProductComponent.prototype.ngOnInit = function () {
        //get the quantity ordered of this product
        this.quantityOrdered = this.productQuantities[this.getProductIndex()].orderQuantity;
        this.totalPrice = this.calculateTotal();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_product_model__["a" /* ProductModel */])
    ], CheckoutProductComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CheckoutProductComponent.prototype, "productQuantities", void 0);
    CheckoutProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-checkout-product',
            template: __webpack_require__("./src/app/feature/cart/checkout/checkout-product/checkout-product.component.html"),
            styles: [__webpack_require__("./src/app/feature/cart/checkout/checkout-product/checkout-product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutProductComponent);
    return CheckoutProductComponent;
}());



/***/ }),

/***/ "./src/app/feature/cart/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col col-md-6 offset-md-3 mb-2\" *ngIf=\"!isLoggedIn\">\n    <div class=\"row card bg-dark py-5\">\n      <div class=\"col-10 offset-1 bg-light py-2 text-center card-body\">\n        <p>To continue checking out, you need to be logged in so that we can send the proper information to the Producer.</p>\n        <button class=\"btn btn-olf-primary\" type=\"button\" (click)=\"onLogin($event)\">Log in or Sign up</button>\n      </div>\n    </div>\n  </div>\n\n  <app-loading *ngIf=\"!order\"></app-loading>\n\n  <div *ngIf=\"order && isLoggedIn\">\n  <div class=\"col col-md-6 offset-md-3 mb-2\" >\n    <div>\n      <a (click)=\"goBack()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> Back</a>\n    </div>\n    <div class=\"row olf-primary-color\">\n      <div class=\"col\">\n        <div class=\"w-100 text-center\">\n          <h3 class=\"h3-responsive text-light pt-2\">Checkout</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col col-md-6 offset-md-3 card bg-light mb-2\">\n    <div class=\"row grey lighten-2\">\n      <h5 class=\"h5-responsive mx-auto pt-2 card-title\">1. Choose How and When to Get Your Order:</h5>\n    </div>\n    <div class=\"row my-3\">\n      <div class=\"col-12 col-md-8 offset-md-2 card-body\">\n        <h6 class=\"card-subtitle mb-2 text-muted\">First, select your community:</h6>\n        <select class=\"custom-select w-100\" (change)=\"onSelect($event)\">\n          <option selected disabled>Select:</option>\n          <option \n            class=\"dropdown-item\" \n            value=\"{{ community.city }}\" \n            *ngFor=\"let community of communityList\" \n            >{{ community.city }}</option>\n        </select>\n      </div>\n      <div class=\"col-12\">\n        <hr>\n      </div>\n      <div class=\"col-12 col-md-8 offset-md-2 card-body\" *ngIf=\"showSchedules\">\n        <h6 class=\"card-subtitle mb-2 text-muted\">Next, select how and when to get your order: </h6>\n        <div *ngFor=\"let schedule of selectedSchedulesList, let i = index\">\n          <label for=\"{{schedule.id}}\" class=\"custom-control custom-radio w-100\">\n            <input \n              id=\"{{schedule.id}}\" \n              [value]='schedule.id' \n              type=\"radio\" \n              name=\"{{schedule.id}}\" \n              [(ngModel)]=\"radioSelected\" \n              class=\"custom-control-input\" \n              (click)=\"onSelectSchedule(i)\">\n            <span class=\"custom-control-indicator\"></span>\n            <span class=\"custom-control-description w-100\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <p class=\"card-text\"><strong>{{ schedule.type }}</strong></p>\n                  <p class=\"card-text\">{{ schedule.startDateTime | date:'fullDate' }}, {{ schedule.startDateTime | date:'shortTime' }} - {{ schedule.endDateTime | date:'shortTime' }}</p>\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <p class=\"card-text\"><strong>Description:</strong></p>\n                    </div>\n                    <div class=\"col-9\">\n                      <p class=\"card-text\">{{ schedule.description }}</p>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <p class=\"card-text\"><strong>Order Deadline:</strong></p>\n                    </div>\n                    <div class=\"col-9\">\n                      <p class=\"card-text\">{{ schedule.orderDeadline | date: 'medium' }}</p>\n                    </div>\n                  </div>\n                  <hr>\n                </div>\n              </div> \n            </span>\n          </label>\n        </div>\n      </div>\n    </div> \n  </div>\n\n  <div class=\"col col-md-6 offset-md-3 card bg-light mb-2\">\n    <div class=\"row grey lighten-2\">\n      <h5 class=\"h5-responsive mx-auto pt-2 card-title\">2. Review Your Products:</h5>\n    </div>\n    <div class=\"card-body pt-3\">\n      <app-checkout-product \n        *ngFor=\"let product of order.productList\" \n        [product]=\"product\" \n        [productQuantities]=\"order.orderDetails.productQuantities\"\n        ></app-checkout-product>\n    </div>\n  </div>\n\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n    <div class=\"col col-md-6 offset-md-3 card bg-light mb-2\">\n      <div class=\"row grey lighten-2\">\n        <h5 class=\"h5-responsive mx-auto pt-2 card-title\">3. Add Comments and Agree to Terms & Conditions:</h5>\n      </div>\n      <div class=\"card-body pt-3\">\n        <div class=\"row\" *ngIf=\"(order.chosenSchedule) && (order.chosenSchedule.type === 'Door-to-door Delivery')\">\n          <div class=\"col-12\">\n            <blockquote class=\"blockquote bq-warning p-0\">\n              <p class=\"card-text\">You have chosen a door-to-door delivery, which will require a delivery address and may involve a delivery fee.</p>\n            </blockquote>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <label for=\"deliveryAddress\" class=\"text-muted\">\n              Enter the Delivery Address:\n            </label>\n          </div>\n          <div class=\"col-12 col-md-8\">\n            <input\n              type=\"text\" \n              name=\"deliveryAddress\" \n              id=\"deliveryAddress\"\n              required\n              #delAddress=\"ngModel\"\n              [(ngModel)]=\"deliveryAddress\">\n              <p class=\"help-block\" *ngIf=\"delAddress.touched && delAddress.invalid\">\n                Please enter your delivery address so the Producer can find you!\n              </p>\n          </div>\n          <div class=\"mt-2 col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\" *ngIf=\"order.chosenSchedule.hasFee\">\n                <label class=\"text-muted\">\n                  Delivery Fee:\n                </label>\n              </div>\n              <div class=\"col-12 col-md-8\"  *ngIf=\"order.chosenSchedule.hasFee\">\n                <p *ngIf=\"!order.chosenSchedule.feeWaiver\" class=\"card-text\">A delivery fee of {{ order.chosenSchedule.fee | currency:'USD':true:'1.2-2' }} has been added to your order.</p>\n                <p *ngIf=\"order.chosenSchedule.feeWaiver && (order.orderDetails.orderValue >= order.chosenSchedule.feeWaiver)\" class=\"card-text\">Your order qualifies for free delivery!</p>\n                <p *ngIf=\"order.chosenSchedule.feeWaiver && (order.orderDetails.orderValue < order.chosenSchedule.feeWaiver)\" class=\"card-text\">A delivery fee of {{ order.chosenSchedule.fee | currency:'USD':true:'1.2-2' }} has been added to your order.</p>   \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <label for=\"consumerComment\" class=\"text-muted\">\n              Enter any comments or special instructions for the producer:\n            </label>\n          </div>\n          <div class=\"col-12 col-md-8\">\n            <textarea \n              name=\"consumerComment\" \n              id=\"consumerComment\" \n              [(ngModel)]=\"consumerComment\"></textarea>\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <label for=\"agreement\" class=\"form-check-label\">\n            <input \n              class=\"form-check-input\" \n              type=\"checkbox\" \n              name=\"agreement\" \n              id=\"agreement\" \n              value=\"agreement\" \n              [(ngModel)]=\"agreement\">\n            <p class=\"card-text\"><strong>I agree </strong>that Onlylocalfood.com Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </label>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"col col-md-6 offset-md-3 mb-2\">\n      <div class=\"row grey lighten-2 mb-3\">\n        <div class=\"col-6 p-2 text-center\">\n          <span>Your Order Total: <strong>{{ tempOrderValue | currency:'USD':true:'1.2-2' }}</strong></span>    \n        </div>\n        <div class=\"col-6 p-0\">\n          <button \n            type=\"submit\"\n            class=\"btn btn-olf-primary btn-block px-0 m-0 h-100\"\n            [disabled]=\"(!agreement) || (!order.chosenSchedule) || (f.invalid) || (!isLoggedIn)\"\n            >Send Order</button>\n        </div>\n      </div>\n    </div>\n\n  </form>\n</div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/feature/cart/checkout/checkout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/cart/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cartService, router, route, location, authService) {
        this.cartService = cartService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.showSchedules = false;
        this.agreement = false;
        this.isLoggedIn = false;
    }
    CheckoutComponent.prototype.ngOnChanges = function () { };
    CheckoutComponent.prototype.goBack = function () {
        this.location.back();
    };
    CheckoutComponent.prototype.onSelect = function ($event) {
        var selectedCommunity = $event.target.value;
        this.selectedSchedulesList = this.returnSchedules(selectedCommunity);
        this.showSchedules = true;
    };
    CheckoutComponent.prototype.onSelectSchedule = function ($event) {
        var index = $event;
        this.order.chosenSchedule = this.selectedSchedulesList[index];
        if ((this.order.chosenSchedule.hasFee) && (this.order.orderDetails.orderValue < this.order.chosenSchedule.feeWaiver)) {
            this.tempOrderValue = this.order.orderDetails.orderValue + this.order.chosenSchedule.fee;
        }
        else {
            this.tempOrderValue = this.order.orderDetails.orderValue;
        }
    };
    CheckoutComponent.prototype.returnSchedules = function (community) {
        // get the index of the community
        var index;
        for (var i = 0; i < this.communityList.length; i++) {
            if (this.communityList[i].city === community) {
                index = i;
            }
        }
        return this.communityList[index].scheduleList;
    };
    CheckoutComponent.prototype.onSubmit = function (form) {
        this.cartService.confirmAndSendOrder(this.cartIndex, this.order.chosenSchedule, this.consumerComment, this.deliveryAddress);
        this.router.navigateByUrl('confirmation');
    };
    CheckoutComponent.prototype.storeCart = function () {
        this.cartService.storeCarts();
    };
    ;
    CheckoutComponent.prototype.onLogin = function (e) {
        console.log('cart stored from checkout');
        this.storeCart();
        this.authService.login(this.id);
        e.preventDefault();
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('tempId');
        console.log('tempId: ', this.id);
        this.cartIndex = this.cartService.getCartIndex(this.id);
        // load the matching cart
        this.cartService.loadCartById(this.id);
        // subscribe to the cart with the matching id
        this.getCartByIdSub = this.cartService.getCartById()
            .subscribe(function (result) {
            if (result === undefined) {
                console.log('no datastore');
                _this.dataStoreExists = false;
            }
            else {
                console.log('datastore exists');
                _this.dataStoreExists = true;
                _this.order = result;
                console.log('result by id: ', result);
                // set the temporary order value from the order details
                _this.tempOrderValue = _this.order.orderDetails.orderValue;
            }
        });
        // get the logged in status
        this.authService.getLoggedIn()
            .subscribe(function (result) {
            _this.isLoggedIn = result;
            // if they are logged in, load the carts from local storage into datastore
            if (_this.isLoggedIn && !_this.dataStoreExists) {
                console.log('retrieve carts called');
                _this.cartService.retrieveCarts();
            }
            else {
            }
            ;
        });
        this.communityListSub = this.cartService.getCommunityList()
            .subscribe(function (result) {
            _this.communityList = result;
        });
        this.cartService.loadCommunityList(this.order.producer.id);
    };
    ;
    CheckoutComponent.prototype.ngOnDestroy = function () {
        if (this.communityListSub) {
            this.communityListSub.unsubscribe();
        }
        if (this.getCartByIdSub) {
            this.getCartByIdSub.unsubscribe();
        }
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/feature/cart/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/feature/cart/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_services_cart_service_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/feature/cart/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-6 offset-md-3\">\n    <h2>Thank you for your order!</h2>\n    <h3><small class=\"text-faded\">Your order is on its way to the producer.</small></h3>\n    <p class=\"lead\">Once the producer has reviewed your order and accepted it, you will get a confirmation email.</p>\n    <hr>\n    <h3><small class=\"text-faded\">Want to help further support local producers?</small></h3>\n    <p class=\"lead\">Share your purchase on social media!</p>\n    <p>We've even got a cool tidbit for you to share: Did you know that a study from Ontario found that the value of buying locally was <em>three times</em> your original purchase!</p>\n    <p>Sharing links go here</p>\n    <div class=\"card bg-dark text-light p-3\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Want to be informed every time deliveries and pickups are scheduled in your area?</h4>\n        <p class=\"card-text\">Sign up here and never miss an opportunity to buy more locally produced food!</p>\n        <p class=\"card-text\">Sign up link here.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/cart/confirmation/confirmation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/cart/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
    };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-confirmation',
            template: __webpack_require__("./src/app/feature/cart/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("./src/app/feature/cart/confirmation/confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-delivery works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeliveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddDeliveryComponent = /** @class */ (function () {
    function AddDeliveryComponent() {
    }
    AddDeliveryComponent.prototype.ngOnInit = function () {
    };
    AddDeliveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-delivery',
            template: __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/add-new/add-delivery/add-delivery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddDeliveryComponent);
    return AddDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-order works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent() {
    }
    AddOrderComponent.prototype.ngOnInit = function () {
    };
    AddOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-order',
            template: __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/add-new/add-order/add-order.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-producer works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProducerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddProducerComponent = /** @class */ (function () {
    function AddProducerComponent() {
    }
    AddProducerComponent.prototype.ngOnInit = function () {
    };
    AddProducerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-producer',
            template: __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/add-new/add-producer/add-producer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddProducerComponent);
    return AddProducerComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-user works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddUserComponent = /** @class */ (function () {
    function AddUserComponent() {
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-user',
            template: __webpack_require__("./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/add-new/add-user/add-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- Nav tabs -->\n<ul class=\"nav nav-tabs nav-justified tabs-2 grey lighten-2 flex-column flex-sm-row hidden-md-down dash-nav\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#users\" role=\"tab\"><i class=\"fa fa-users mr-1\"></i> Users</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#producers\" role=\"tab\"><i class=\"fa fa-users mr-1\"></i> Producers</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#products\" role=\"tab\"><i class=\"fa fa-list mr-1\"></i> Products</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#deliveries\" role=\"tab\"><i class=\"fa fa-truck mr-1\"></i> Schedule</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\"><i class=\"fa fa-shopping-cart mr-1\"></i> Orders</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#accountInfo\" role=\"tab\"><i class=\"fa fa-info-circle mr-1\"></i> Account Info</a>\n    </li>\n</ul>\n\n<br>\n\n<div class=\"dropdown hidden-md-up\">\n<button class=\"btn btn-olf-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Choose your Section\n</button>\n<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#users\" role=\"tab\">Users</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#producers\" role=\"tab\">Producers</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#products\" role=\"tab\">Products</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#deliveries\" role=\"tab\">Schedule</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\">Orders</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#accountInfo\" role=\"tab\">Account Info</a>\n</div>\n</div>\n\n<!-- Tab panels -->\n<div class=\"tab-content\" style=\"padding: 1em;\">\n\n    <!-- Users Panel-->\n    <div class=\"tab-pane fade in show active\" id=\"users\" role=\"tabpanel\">\n        <app-users></app-users>\n    </div>\n    <!--/Users Panel-->\n\n    <!-- Producers Panel -->\n    <div class=\"tab-pane fade\" id=\"producers\" role=\"tabpanel\">\n        <app-producers></app-producers>\n    </div>\n    <!--/ Producers Panel-->\n    \n    <!-- Products Panel -->\n    <div class=\"tab-pane fade\" id=\"products\" role=\"tabpanel\">\n        <app-products></app-products>\n    </div>\n    <!--/ Products Panel-->\n    \n    <!-- Deliveries Panel -->\n    <div class=\"tab-pane fade\" id=\"deliveries\" role=\"tabpanel\">\n        <app-deliveries></app-deliveries>\n    </div>\n    <!--/ Deliveries Panel-->\n    \n    <!-- Orders Panel -->\n    <div class=\"tab-pane fade\" id=\"orders\" role=\"tabpanel\">\n        <app-orders></app-orders>\n    </div>\n    <!--/ Orders Panel-->\n    \n    <!-- Account Panel -->\n    <div class=\"tab-pane fade\" id=\"accountInfo\" role=\"tabpanel\">\n        <app-account-info [id]=\"id\" [user]=\"user\"></app-account-info>\n    </div>\n    <!--/ Account Panel-->\n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/admin-dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_user_model__ = __webpack_require__("./src/app/core/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], AdminDashboardComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_user_model__["a" /* UserModel */])
    ], AdminDashboardComponent.prototype, "user", void 0);
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("./src/app/feature/dashboard/admin/admin-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/admin-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/deliveries/deliveries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div id=\"deliveriesAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"upcomingDeliveriesHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#deliveriesAccordion\" \n                            href=\"#upcomingDeliveriesCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"upcomingDeliveriesCollapse\">Upcoming Schedule  \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"upcomingDeliveriesCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"upcomingDeliveriesHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"upcomingSchedule\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"completedDeliveriesHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#deliveriesAccordion\" \n                            href=\"#completedDeliveriesCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"completedDeliveriesCollapse\">Completed Schedule \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"completedDeliveriesCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"completedDeliveriesHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"completedSchedule\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/deliveries/deliveries.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/deliveries/deliveries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeliveriesComponent = /** @class */ (function () {
    function DeliveriesComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.upcomingSchedule = [];
        this.completedSchedule = [];
        this.projectSettings = [
            {
                primaryKey: 'type',
                header: 'Type'
            },
            {
                primaryKey: 'startDateTime',
                header: 'Date',
                format: 'mediumDate'
            },
            {
                primaryKey: 'startDateTime',
                header: 'Start Time',
                format: 'shortTime'
            },
            {
                primaryKey: 'endDateTime',
                header: 'End Time',
                format: 'shortTime'
            },
            {
                primaryKey: 'city',
                header: 'Location'
            },
            {
                primaryKey: 'orderDeadline',
                header: 'Deadline Date',
                format: 'mediumDate'
            },
            {
                primaryKey: 'orderDeadline',
                header: 'Deadline Time',
                format: 'shortTime'
            },
            {
                primaryKey: 'producerId',
                header: 'Producer ID'
            }
        ];
    }
    DeliveriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date().toISOString();
        this.dashboardService.getAllSchedules()
            .subscribe(// returns an array
        function (// returns an array
        results) {
            _this.upcomingSchedule = results;
        });
        this.dashboardService.loadAllSchedules();
    };
    DeliveriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-deliveries',
            template: __webpack_require__("./src/app/feature/dashboard/admin/deliveries/deliveries.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/deliveries/deliveries.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], DeliveriesComponent);
    return DeliveriesComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/orders/order-view-details/order-view-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <br>\n    <div class=\"col-xs-12 col-md-8\">\n        \n        <!--Panel-->\n        <div class=\"card card-body\">\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <h4 class=\"card-title col\">View Order Details</h4>\n                    <span class=\"col\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"toggleView(order)\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </span>\n                </div>\n                \n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Producer:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.producerName }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Delivery Date:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.date }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Time:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.startTime }} - {{ order.endTime }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Delivery Type:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.type }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Consumer:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.userName }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Email:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.userEmail }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Order:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>Small order table</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Order Value:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.value | currency:'USD':true:'1.2-2' }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Order Date:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ order.orderedDate }}</p>\n                    </div>\n                </div>\n                \n            </div>\n            \n        </div>\n        <!--/.Panel-->\n        \n        <!--<h4>View Order Details</h4>-->\n        <!--<div class=\"row\">-->\n        <!--    <div class=\"col col-4 text-right\">-->\n        <!--        Producer:-->\n        <!--    </div>-->\n        <!--    <div class=\"col col-8\">-->\n        <!--        {{ order.producerName }}-->\n        <!--    </div>-->\n        <!--</div>-->\n    </div>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/orders/order-view-details/order-view-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/orders/order-view-details/order-view-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderViewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderViewDetailsComponent = /** @class */ (function () {
    function OrderViewDetailsComponent() {
    }
    //this is to give the accordian/dropdown access to the toggle feature to be able to close itself
    OrderViewDetailsComponent.prototype.toggleView = function (order) {
        order.showView = !order.showView;
    };
    OrderViewDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderViewDetailsComponent.prototype, "order", void 0);
    OrderViewDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-order-view-details',
            template: __webpack_require__("./src/app/feature/dashboard/admin/orders/order-view-details/order-view-details.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/orders/order-view-details/order-view-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderViewDetailsComponent);
    return OrderViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div id=\"ordersAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"pendingOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#pendingOrdersCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"pendingOrdersCollapse\">Pending Orders   \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"pendingOrdersCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"pendingOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"pendingOrders\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"acceptedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#acceptedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"acceptedOrdersCollapse\">Accepted Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"acceptedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"acceptedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"acceptedOrders\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"completedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#completedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"completedOrdersCollapse\">Completed Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"completedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"completedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"completedOrders\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"deniedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#deniedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"deniedOrdersCollapse\">Denied Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"deniedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"deniedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"deniedOrders\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/orders/orders.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.pendingOrders = [];
        this.acceptedOrders = [];
        this.completedOrders = [];
        this.deniedOrders = [];
        this.projectSettings = [
            {
                primaryKey: 'producer',
                header: 'Producer'
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Date',
                format: 'mediumDate,createdDate'
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Time',
                format: 'shortTime,createdDate'
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Total',
                format: 'currency,orderValue'
            },
            {
                primaryKey: 'consumer',
                header: 'Consumer'
            }
        ];
    }
    OrdersComponent.prototype.ngOnChanges = function () { };
    OrdersComponent.prototype.toggleView = function (order) {
        order.showView = !order.showView;
    };
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getAllOrders()
            .subscribe(// returns an array
        function (orders) {
            var pending = orders.filter(function (order) { return order.orderDetails.orderStatus === 'pending'; });
            _this.pendingOrders = pending;
            var accepted = orders.filter(function (order) { return order.orderDetails.orderStatus === 'accepted'; });
            _this.acceptedOrders = accepted;
            var completed = orders.filter(function (order) { return order.orderDetails.orderStatus === 'completed'; });
            _this.completedOrders = completed;
            var denied = orders.filter(function (order) { return order.orderDetails.orderStatus === 'denied'; });
            _this.deniedOrders = denied;
        });
        this.dashboardService.loadAllOrders();
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("./src/app/feature/dashboard/admin/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/orders/orders.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/producers/producers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div id=\"producersAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"activeProducersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#producersAccordion\" \n                            href=\"#activeProducersCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"activeProducersCollapse\">Active Producers  \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"activeProducersCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"activeProducersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"activeProducers\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\" *ngIf=\"inactiveProducers.length > 0\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"inactiveProducersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#producersAccordion\" \n                            href=\"#inactiveProducersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"inactiveProducersCollapse\">Inactive Producers \n                            <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"inactiveProducersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"inactiveProducersHeading\">\n                    <div class=\"card-block\">\n                            <app-table-layout\n                            [records]=\"inactiveProducers\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/producers/producers.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/producers/producers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProducersComponent = /** @class */ (function () {
    function ProducersComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.activeProducers = [];
        this.inactiveProducers = [];
        this.editable = true;
        this.deletable = true;
        this.projectSettings = [
            {
                primaryKey: 'name',
                header: 'Name'
            },
            {
                primaryKey: 'location',
                header: 'Location'
            },
            {
                primaryKey: 'province',
                header: 'Province'
            },
            {
                primaryKey: 'firstName',
                header: 'First Name'
            },
            {
                primaryKey: 'email',
                header: 'Email'
            },
            {
                primaryKey: 'registrationDate',
                header: 'Reg. Date',
                format: 'mediumDate',
                sortable: true
            }
        ];
    }
    ProducersComponent.prototype.ngOnChanges = function () { };
    ;
    ;
    ProducersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getAllProducers()
            .subscribe(function (response) {
            console.log('producers from api: ', response);
            var active = response.filter(function (producer) { return producer.status === 'active'; });
            _this.activeProducers = active;
            var inactive = response.filter(function (producer) { return producer.status === 'inactive'; });
            _this.inactiveProducers = inactive;
        });
        this.dashboardService.loadAllProducers();
    };
    ProducersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producers',
            template: __webpack_require__("./src/app/feature/dashboard/admin/producers/producers.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/producers/producers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]])
    ], ProducersComponent);
    return ProducersComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row justify-content-center\">\n    <br>\n    <div class=\"col-xs-12 col-md-8\">\n        \n        <!--Panel-->\n        <div class=\"card card-body\">\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <h4 class=\"card-title col\">Add a New Product</h4>\n                </div>\n                \n                <hr>\n                \n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> <!-- this binds the viewed form to the form we build in the component class --> \n\n                    <div class=\"row\">\n                        <label for=\"name\" class=\"col-4 col-form-label text-right\">Product Name</label>\n                        <div class=\"col-8\">\n                            <input \n                                class=\"form-control\" \n                                type=\"text\" \n                                id=\"name\" \n                                [formControl]=\"form.controls['name']\">\n                                <small \n                                    *ngIf=\"!form.get('name').valid && form.get('name').touched\"\n                                    class=\"help-block\"\n                                    >Please enter a name for the product.</small>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"description\" class=\"col-4 col-form-label text-right\">Description</label>\n                        <div class=\"col-8\">\n                            <input \n                                class=\"form-control\" \n                                type=\"text\" \n                                id=\"description\" \n                                [formControl]=\"form.controls['description']\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                       <label for=\"imagePath\" class=\"col-4 col-form-label text-right\">Image URL</label>\n                        <div class=\"col-8\">\n                            <input \n                                class=\"form-control\" \n                                type=\"text\" \n                                id=\"imagePath\" \n                                [formControl]=\"form.controls['image']\">\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                       <label for=\"pricePerUnit\" class=\"col-4 col-form-label text-right\">Price Per Unit</label>\n                        <div class=\"col-8 input-group\">\n                            <div class=\"input-group-addon\">$</div>\n                            <input \n                                class=\"form-control\" \n                                type=\"number\"\n                                min=\"0\"\n                                step=\"any\"\n                                id=\"pricePerUnit\" \n                                [formControl]=\"form.controls['pricePerUnit']\">\n                        </div>\n                    </div>\n\n                    <br>\n\n                    <div class=\"row\">\n                        <label for=\"unit\" class=\"col-4 col-form-label text-right\">Pricing Unit</label>\n                        <div class=\"col-8\">\n                            <select class=\"custom-select float-left\" name=\"unit\" [formControl]=\"form.controls['unit']\">\n                                <option selected value=\"\">Select a Unit</option>\n                                <option value=\"lb\">Pound</option>\n                                <option value=\"kg\">Kilo</option>\n                                <option value=\"ea\">Each</option>\n                                <option value=\"pkg\">Package</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <br>\n\n                    <div class=\"row\">\n                        <label for=\"unitsPer\" class=\"col-4 col-form-label text-right\">Units Per Final Product</label>\n                        <div class=\"col-8 input-group\">\n                            <input \n                                class=\"form-control\" \n                                type=\"number\"\n                                min=\"0\"\n                                step=\".1\"\n                                id=\"unitsPer\" \n                                [formControl]=\"form.controls['unitsPer']\">\n                        </div>\n                        <div class=\"col-8 offset-4\">\n                            <small class=\"form-text text-muted text-right\">If your final product contains more than 1 unit (like a 5 lb chicken), change this to the average number of units per final product. We can use this to calculate an estimated final price for the consumer.</small>\n                        </div>\n                    </div>\n\n                    <br>\n\n                    <div class=\"row\">\n                        <label for=\"category\" class=\"col-4 col-form-label text-right\">Category</label>\n                        <div class=\"col-8\">\n                            <select class=\"custom-select float-left\" name=\"category\" [formControl]=\"form.controls['category']\">\n                                <option selected value=\"\">Choose a Category</option>\n                                <option value=\"meat\">Meat</option>\n                                <option value=\"vegetables\">Vegetables</option>\n                                <option value=\"dairy\">Dairy</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <br>\n\n                    <div class=\"row\">\n                        <label for=\"subcategory\" class=\"col-4 col-form-label text-right\">Subcategory</label>\n                        <!-- meat subcategories -->\n                        <div class=\"col-8\" *ngIf=\"form.value.category === 'meat'\">\n                            <select class=\"custom-select float-left\" name=\"subcategory\" [formControl]=\"form.controls['subcategory']\">\n                                <option selected value=\"\">Choose a Subcategory</option>\n                                <option value=\"pork\">Pork</option>\n                                <option value=\"beef\">Beef</option>\n                            </select>\n                        </div>\n                        <!-- vegetable subcategories -->\n                        <div class=\"col-8\" *ngIf=\"form.value.category === 'vegetables'\">\n                            <select class=\"custom-select float-left\" name=\"subcategory\" [formControl]=\"form.controls['subcategory']\">\n                                <option selected value=\"\">Choose a Subcategory</option>\n                                <option value=\"carrots\">Carrots</option>\n                                <option value=\"potatoes\">Potatoes</option>\n                            </select>\n                        </div>\n                        <!-- dairy subs -->\n                        <div class=\"col-8\" *ngIf=\"form.value.category === 'dairy'\">\n                            <select class=\"custom-select float-left\" name=\"subcategory\" [formControl]=\"form.controls['subcategory']\">\n                                <option selected value=\"\">Choose a Subcategory</option>\n                                <option value=\"cheese\">Cheese</option>\n                                <option value=\"yogurt\">Yogurt</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <br>\n\n                    <div class=\"row\">\n                        <label for=\"producerName\" class=\"col-4 col-form-label text-right\">Producer Name</label>\n                        <div class=\"col-8\">\n                            <input \n                                class=\"form-control\" \n                                type=\"text\" \n                                id=\"producerName\" \n                                [formControl]=\"form.controls['producerName']\">\n                                <small \n                                    *ngIf=\"!form.get('producerName').valid && form.get('producerName').touched\"\n                                    class=\"help-block\"\n                                    >Please enter a producer's name.</small>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                       <label for=\"qtyAvailable\" class=\"col-4 col-form-label text-right\">Quantity Available</label>\n                        <div class=\"col-8 input-group\">\n                            <input \n                                class=\"form-control\" \n                                type=\"number\"\n                                min=\"0\"\n                                step=\"1\"\n                                id=\"qtyAvailable\" \n                                [formControl]=\"form.controls['qtyAvailable']\">\n                        </div>\n                    </div>\n                    \n                    <hr>\n\n                    <div class=\"row justify-content-end\">\n                        <div class=\"col-xs-12\">\n                            <button class=\"btn btn-olf-primary\" type=\"submit\">Add to Products</button>\n                            <a (click)=\"onCancel()\">Cancel Changes</a>\n                        </div>\n                    </div>\n                </form>\n              \n            </div>\n            \n        </div>\n\n    </div>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/add-product/add-product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_producer_producer_service__ = __webpack_require__("./src/app/core/services/producer/producer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuild, location, producerService) {
        this.formBuild = formBuild;
        this.location = location;
        this.producerService = producerService;
        this.form = formBuild.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'description': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'image': [''],
            'pricePerUnit': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'unit': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'unitsPer': [1, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'category': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'subcategory': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'producerName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'dateAdded': ['September 1, 2017'],
            'qtyAvailable': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'qtyPending': [0],
            'qtyAccepted': [0],
            'qtyCompleted': [0],
            'isObsolete': ['false']
        });
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onSubmit = function () {
        this.producerService.productAdded.emit(this.form.value);
        this.location.back();
    };
    AddProductComponent.prototype.onCancel = function () {
        this.location.back();
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/feature/dashboard/admin/products/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/products/add-product/add-product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_producer_producer_service__["a" /* ProducerService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/product-edit-form/product-edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <br>\n    <div class=\"col-xs-12 col-md-8\">\n      <!--Panel-->\n      <div class=\"card card-body\">\n        <div class=\"card-block\">\n\n          <div class=\"row\">\n            <h4 class=\"card-title col\">Edit Product</h4>\n            <span class=\"col\">\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"toggleEditForm(product)\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </span>\n          </div>\n            \n          <hr>\n\n          <form (ngSubmit)=\"onEditProduct(f)\" #f=\"ngForm\"> <!-- local reference and ngForm gives us access to the angular form javascript object -->\n            <div class=\"form-group row\">\n              <label class=\"col col-sm-4 col-form-label text-right font-weight-bold\" for=\"name\">Product Name:</label>\n              <div class=\"col col-sm-8\">\n                <input\n                type=\"text\"\n                id=\"name\"\n                class=\"form-control\"\n                name=\"name\"\n                ngModel\n                >\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <button class=\"btn btn-olf-primary\" type=\"submit\">Confirm Changes</button>\n                <a (click)=\"toggleEditForm(product)\">Cancel Changes</a>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/product-edit-form/product-edit-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/product-edit-form/product-edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductEditFormComponent = /** @class */ (function () {
    function ProductEditFormComponent() {
    }
    //this is to give the accordian/dropdown access to the toggle feature to be able to close itself
    ProductEditFormComponent.prototype.toggleEditForm = function (product) {
        product.showEditForm = !product.showEditForm;
    };
    ProductEditFormComponent.prototype.onEditProduct = function (form) {
        var value = form.value;
        console.log(value);
    };
    ProductEditFormComponent.prototype.ngOnInit = function () {
        this.productEditForm.setValue({
            name: this.product.name
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductEditFormComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], ProductEditFormComponent.prototype, "productEditForm", void 0);
    ProductEditFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-product-edit-form',
            template: __webpack_require__("./src/app/feature/dashboard/admin/products/product-edit-form/product-edit-form.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/products/product-edit-form/product-edit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductEditFormComponent);
    return ProductEditFormComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/product-view-details/product-view-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <br>\n    <div class=\"col-xs-12 col-md-8\">\n        \n        <!--Panel-->\n        <div class=\"card card-body\">\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <h4 class=\"card-title col\">View Product Details</h4>\n                    <span class=\"col\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"toggleView(product)\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </span>\n                </div>\n                \n                <hr>\n                \n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Product Name:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.name }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Description:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.description }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Price:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.pricePerUnit }}/{{ product.unit }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Units per Each:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.unitsPer }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Total Price:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.pricePerUnit * product.unitsPer }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Producer Name:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.producerName }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Available:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.qtyAvailable }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Pending:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.qtyPending }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Accepted:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.qtyAccepted }}</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col col-4 text-right\">\n                        <p class=\"font-weight-bold\">Completed:</p>\n                    </div>\n                    <div class=\"col col-8\">\n                        <p>{{ product.qtyCompleted }}</p>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n\n    </div>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/product-view-details/product-view-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/product-view-details/product-view-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductViewDetailsComponent = /** @class */ (function () {
    function ProductViewDetailsComponent() {
    }
    //this is to give the accordian/dropdown access to the toggle feature to be able to close itself
    ProductViewDetailsComponent.prototype.toggleView = function (product) {
        product.showView = !product.showView;
    };
    ProductViewDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductViewDetailsComponent.prototype, "product", void 0);
    ProductViewDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-product-view-details',
            template: __webpack_require__("./src/app/feature/dashboard/admin/products/product-view-details/product-view-details.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/products/product-view-details/product-view-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductViewDetailsComponent);
    return ProductViewDetailsComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div id=\"productsAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n            <!-- Here are the links to trigger the 'add new whatever' form to appear, which appears in the router-outlet tag -->\n            <div class=\"row text-center\">\n                <div class=\"col col-xs-12\">\n                    <div class=\"btn-group\">\n                        <a class=\"btn btn-olf-primary\" routerLink=\"add-product\">Add New Product</a>\n                    </div>\n                    <br>\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n\n            <br>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"currentProductsHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#productsAccordion\" \n                            href=\"#currentProductsCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"currentProductsCollapse\">Current Products \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"currentProductsCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"currentProductsHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"currentProducts\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\" *ngIf=\"outOfStockProducts.length > 0\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"outOfStockProductsHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#productsAccordion\" \n                            href=\"#outOfStockProductsCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"outOfStockProductsCollapse\">Out-of-stock Products \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                </a>\n                    </h5>\n                </div>\n                <div id=\"outOfStockProductsCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"outOfStockProductsHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"outOfStockProducts\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\" *ngIf=\"deletedProducts.length > 0\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"deletedProductsHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#productsAccordion\" \n                            href=\"#deletedProductsCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"deletedProductsCollapse\">Deleted Products \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                </a>\n                    </h5>\n                </div>\n                <div id=\"deletedProductsCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"deletedProductsHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"deletedProducts\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/products.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_producer_producer_service__ = __webpack_require__("./src/app/core/services/producer/producer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(producerService, dashboardService) {
        var _this = this;
        this.producerService = producerService;
        this.dashboardService = dashboardService;
        this.currentProducts = [];
        this.outOfStockProducts = [];
        this.deletedProducts = [];
        this.editable = true;
        this.deletable = true;
        this.projectSettings = [
            {
                primaryKey: 'name',
                header: 'Name',
                sortable: true,
            },
            {
                primaryKey: 'pricePerUnit',
                header: 'Price Per',
                format: 'currency',
                sortable: true,
            },
            {
                primaryKey: 'unit',
                header: 'Unit',
                format: 'uppercase',
                nested: false
            },
            {
                primaryKey: 'unitsPer',
                header: 'Units Per'
            },
            {
                primaryKey: 'category',
                header: 'Category',
                sortable: true,
            },
            {
                primaryKey: 'subcategory',
                header: 'Subcat',
                sortable: true,
            },
            {
                primaryKey: 'qtyAvailable',
                header: 'Available',
                sortable: true,
            },
            {
                primaryKey: 'qtyPending',
                header: 'Pending',
                sortable: true,
            },
            {
                primaryKey: 'producer',
                header: 'Producer',
                format: 'null,name',
                sortable: true,
                sortPath: 'name',
                nested: true
            }
        ];
        this.producerService.productAdded.subscribe(function (value) {
            if (value.qtyAvailable > 0) {
                _this.currentProducts.push(value);
            }
            else {
                _this.outOfStockProducts.push(value);
            }
        });
    }
    // view a single product right in the table
    ProductsComponent.prototype.toggleView = function (product) {
        product.showView = !product.showView;
    };
    // edit a single product right in the table
    ProductsComponent.prototype.toggleEditForm = function (product) {
        product.showEditForm = !product.showEditForm;
    };
    // add a new product via the add-product component, push it to the appropriate array
    ProductsComponent.prototype.addNewProduct = function (value) {
        console.log(value);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getAllProducts()
            .subscribe(// returns an array
        function (products) {
            var current = products.filter(function (product) { return product.qtyAvailable > 0 && product.isObsolete === false; });
            _this.currentProducts = current;
            var outOfStock = products.filter(function (product) { return product.qtyAvailable == 0 && product.isObsolete === false; });
            _this.outOfStockProducts = outOfStock;
            var deleted = products.filter(function (product) { return product.isObsolete === true; });
            _this.deletedProducts = deleted;
        });
        this.dashboardService.loadAllProducts();
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/feature/dashboard/admin/products/products.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/products/products.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__core_services_producer_producer_service__["a" /* ProducerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_producer_producer_service__["a" /* ProducerService */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"consumersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#accordion\" \n                            href=\"#consumersCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"consumersCollapse\">Consumers \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"consumersCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"consumersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"consumers\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"producersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#accordion\" \n                            href=\"#producersCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"producersCollapse\">Producers \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"producersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"producersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"producers\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/admin/users/users.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.producers = [];
        this.consumers = [];
        this.editable = true;
        this.deletable = true;
        this.projectSettings = [
            {
                primaryKey: 'firstName',
                header: 'Name'
            },
            {
                primaryKey: 'email',
                header: 'Email'
            }, {
                primaryKey: 'registrationDate',
                header: 'Reg. Date'
            }
        ];
    }
    UsersComponent.prototype.ngOnChanges = function () { };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getAllUsers()
            .subscribe(// returns an array
        function (users) {
            var producerList = users.filter(function (user) { return user.role === 'producer'; });
            _this.producers = producerList;
            var consumerList = users.filter(function (user) { return user.role === 'consumer'; });
            _this.consumers = consumerList;
        });
        this.dashboardService.loadAllUsers();
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/feature/dashboard/admin/users/users.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/admin/users/users.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- Nav tabs -->\n<ul class=\"nav nav-tabs nav-justified tabs-2 grey lighten-2 flex-column flex-sm-row hidden-md-down dash-nav\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\"><i class=\"fa fa-shopping-cart mr-1\"></i> Orders</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#accountInfo\" role=\"tab\"><i class=\"fa fa-info-circle mr-1\"></i> Account Info</a>\n    </li>\n</ul>\n\n<br>\n\n<div class=\"dropdown hidden-md-up\">\n<button class=\"btn btn-olf-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Choose your Section\n</button>\n<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\">Orders</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#accountInfo\" role=\"tab\">Account Info</a>\n</div>\n</div>\n\n<!-- Tab panels -->\n<div class=\"tab-content\" style=\"padding: 1em;\">\n    \n    <!-- Orders Panel -->\n    <div class=\"tab-pane fade in show active\" id=\"orders\" role=\"tabpanel\">\n        <app-consumer-orders [id]=\"id\"></app-consumer-orders>\n    </div>\n    <!--/ Orders Panel-->\n    \n    <!-- Account Panel -->\n    <div class=\"tab-pane fade\" id=\"accountInfo\" role=\"tabpanel\">\n        <app-account-info [user]=\"user\"></app-account-info>\n    </div>\n    <!--/ Account Panel-->\n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consumer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/consumer/consumer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_user_model__ = __webpack_require__("./src/app/core/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsumerDashboardComponent = /** @class */ (function () {
    function ConsumerDashboardComponent() {
    }
    ConsumerDashboardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ConsumerDashboardComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_user_model__["a" /* UserModel */])
    ], ConsumerDashboardComponent.prototype, "user", void 0);
    ConsumerDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-consumer-dashboard',
            template: __webpack_require__("./src/app/feature/dashboard/consumer/consumer-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/consumer/consumer-dashboard.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__consumer_dashboard_service__["a" /* ConsumerDashboardService */]]
        }),
        __metadata("design:paramtypes", [])
    ], ConsumerDashboardComponent);
    return ConsumerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerDashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsumerDashboardService = /** @class */ (function () {
    function ConsumerDashboardService(apiService) {
        this.apiService = apiService;
        this.dataStore = { user: null, orders: [] };
        this._user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._orders = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    ConsumerDashboardService.prototype.loadData = function (id) {
        var _this = this;
        this.apiService.getUserById(id)
            .subscribe(function (result) {
            _this.dataStore.user = result;
            _this._user.next(Object.assign({}, _this.dataStore).user);
            console.log('user: ', _this.dataStore.user);
        }, function (error) { return console.log('could not load user'); });
        this.apiService.getOrdersByConsumerId(id)
            .subscribe(function (result) {
            _this.dataStore.orders = result;
            _this._orders.next(Object.assign({}, _this.dataStore).orders);
        }, function (error) { return console.log('could not load order'); });
    };
    ;
    ConsumerDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */]])
    ], ConsumerDashboardService);
    return ConsumerDashboardService;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-orders/consumer-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col col-xs-12\">\n      <div id=\"ordersAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          \n          <div class=\"card\">\n              <div class=\"card-header dash-accordion\" role=\"tab\" id=\"pendingOrdersHeading\">\n                  <h5 class=\"mb-0\">\n                      <a \n                          data-toggle=\"collapse\" \n                          data-parent=\"#ordersAccordion\" \n                          href=\"#pendingOrdersCollapse\" \n                          aria-expanded=\"true\" \n                          aria-controls=\"pendingOrdersCollapse\">Pending Orders   \n                              <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                      </a>\n                  </h5>\n              </div>\n              <div id=\"pendingOrdersCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"pendingOrdersHeading\">\n                  <div class=\"card-block\">\n                      <app-table-layout\n                          [records]=\"pendingOrders\"\n                          [recordType]=\"recordType\"\n                          [settings]=\"projectSettings\"\n                          [editable]=\"false\"\n                          [deletable]=\"false\"\n                          [pending]=\"false\"\n                          [isConsumer]=\"true\">\n                      </app-table-layout>\n                  </div>\n              </div>\n          </div>\n          \n          <div class=\"card\">\n              <div class=\"card-header dash-accordion\" role=\"tab\" id=\"acceptedOrdersHeading\">\n                  <h5 class=\"mb-0\">\n                      <a \n                          class=\"collapsed\" \n                          data-toggle=\"collapse\" \n                          data-parent=\"#ordersAccordion\" \n                          href=\"#acceptedOrdersCollapse\" \n                          aria-expanded=\"false\" \n                          aria-controls=\"acceptedOrdersCollapse\">Accepted Orders \n                              <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                      </a>\n                  </h5>\n              </div>\n              <div id=\"acceptedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"acceptedOrdersHeading\">\n                  <div class=\"card-block\">\n                      <app-table-layout\n                          [records]=\"acceptedOrders\"\n                          [recordType]=\"recordType\"\n                          [settings]=\"projectSettings\"\n                          [editable]=\"false\"\n                          [deletable]=\"false\"\n                          [isConsumer]=\"true\">\n                      </app-table-layout>\n                  </div>\n              </div>\n          </div>\n          \n          <div class=\"card\">\n              <div class=\"card-header dash-accordion\" role=\"tab\" id=\"completedOrdersHeading\">\n                  <h5 class=\"mb-0\">\n                      <a \n                          class=\"collapsed\" \n                          data-toggle=\"collapse\" \n                          data-parent=\"#ordersAccordion\" \n                          href=\"#completedOrdersCollapse\" \n                          aria-expanded=\"false\" \n                          aria-controls=\"completedOrdersCollapse\">Completed Orders \n                              <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                      </a>\n                  </h5>\n              </div>\n              <div id=\"completedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"completedOrdersHeading\">\n                  <div class=\"card-block\">\n                      <app-table-layout\n                          [records]=\"completedOrders\"\n                          [recordType]=\"recordType\"\n                          [settings]=\"projectSettings\"\n                          [editable]=\"false\"\n                          [deletable]=\"false\"\n                          [isConsumer]=\"true\">\n                      </app-table-layout>\n                  </div>\n              </div>\n          </div>\n          \n          <div class=\"card\">\n              <div class=\"card-header dash-accordion\" role=\"tab\" id=\"deniedOrdersHeading\">\n                  <h5 class=\"mb-0\">\n                      <a \n                          class=\"collapsed\" \n                          data-toggle=\"collapse\" \n                          data-parent=\"#ordersAccordion\" \n                          href=\"#deniedOrdersCollapse\" \n                          aria-expanded=\"false\" \n                          aria-controls=\"deniedOrdersCollapse\">Denied Orders \n                              <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                      </a>\n                  </h5>\n              </div>\n              <div id=\"deniedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"deniedOrdersHeading\">\n                  <div class=\"card-block\">\n                      <app-table-layout\n                          [records]=\"deniedOrders\"\n                          [recordType]=\"recordType\"\n                          [settings]=\"projectSettings\"\n                          [editable]=\"false\"\n                          [deletable]=\"false\"\n                          [isConsumer]=\"true\">\n                      </app-table-layout>\n                  </div>\n              </div>\n          </div>\n          \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-orders/consumer-orders.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/consumer-orders/consumer-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consumer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/consumer/consumer-dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsumerOrdersComponent = /** @class */ (function () {
    function ConsumerOrdersComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.pendingOrders = [];
        this.acceptedOrders = [];
        this.completedOrders = [];
        this.deniedOrders = [];
        this.recordType = 'order';
        this.projectSettings = [
            {
                primaryKey: 'producer',
                header: 'Producer',
                format: 'null,name',
                sortable: true,
                sortPath: 'name',
                nested: true
            },
            {
                primaryKey: 'chosenSchedule',
                header: 'Type',
                format: 'null,type',
                sortable: true
            },
            {
                primaryKey: 'chosenSchedule',
                header: 'Date',
                format: 'mediumDate,startDateTime',
                sortable: false
            },
            {
                primaryKey: 'chosenSchedule',
                header: 'Start Time',
                format: 'shortTime,startDateTime',
                sortable: false
            },
            {
                primaryKey: 'chosenSchedule',
                header: 'End Time',
                format: 'shortTime,endDateTime',
                sortable: false
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Total',
                format: 'currency,orderValue',
                sortable: false
            }
        ];
    }
    ConsumerOrdersComponent.prototype.toggleView = function (order) {
        order.showView = !order.showView;
    };
    ;
    ConsumerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.loadData(this.id);
        this.dashboardService._orders
            .subscribe(function (orders) {
            var pending = orders.filter(function (order) { return order.orderDetails.orderStatus === 'pending'; });
            _this.pendingOrders = pending;
            var accepted = orders.filter(function (order) { return order.orderDetails.orderStatus === 'accepted'; });
            _this.acceptedOrders = accepted;
            var completed = orders.filter(function (order) { return order.orderDetails.orderStatus === 'completed'; });
            _this.completedOrders = completed;
            var denied = orders.filter(function (order) { return order.orderDetails.orderStatus === 'denied'; });
            _this.deniedOrders = denied;
        });
        console.log('id: ', this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ConsumerOrdersComponent.prototype, "id", void 0);
    ConsumerOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-consumer-orders',
            template: __webpack_require__("./src/app/feature/dashboard/consumer/consumer-orders/consumer-orders.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/consumer/consumer-orders/consumer-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__consumer_dashboard_service__["a" /* ConsumerDashboardService */]])
    ], ConsumerOrdersComponent);
    return ConsumerOrdersComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Please review and Accept or Deny this order</h5>\n  <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body dash-modal-body\">\n\n  <app-loading *ngIf=\"submitting\"></app-loading>\n      \n  <div class=\"row\">\n  \n      <div class=\"col-12\">\n          <h4>Order Details</h4>\n      </div>\n  \n      <div class=\"col-12\">\n          <div class=\"row\">\n              <div class=\"col-4 text-right\">\n                  <strong>Order Status:</strong>\n              </div>\n              <div class=\"col-8\">\n                  <p>{{ record.orderDetails.orderStatus }}</p>\n              </div>\n          </div>\n\n      </div>\n  \n          \n      <div class=\"col-12\">\n          <div class=\"row\">\n          <div class=\"col-8 offset-2 justify-content-center\">\n              <table class=\"table\">\n              <thead>\n                  <tr>\n                  <th>Product</th>\n                  <th>Quantity</th>\n                  <th>Value</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let product of products\">\n                  <td>{{ product.name }}</td>\n                  <td>{{ product.quantity }}</td>\n                  <td>{{ product.value | currency:'USD':true:'1.2-2' }}</td>\n                  </tr>\n                  <tr>\n                  <td></td>\n                  <td></td>\n                  <td><strong>{{ record.orderDetails.orderValue | currency:'USD':true:'1.2-2' }}</strong></td>\n                  </tr>\n              </tbody>\n              </table>\n          </div>\n          </div>\n  \n          <hr>\n  \n      </div>\n  </div>\n      \n  <div class=\"row\">\n  \n      <div class=\"col-12\">\n          <h4>Schedule Details</h4>\n      </div>  \n          \n      <div class=\"col-12\">\n  \n          <div class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Schedule Type:</strong>\n          </div>\n          <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.type }}</p>\n          </div>\n          </div>\n  \n          <div *ngIf=\"record.chosenSchedule.address\" class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Address:</strong>\n          </div>\n          <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.address }}</p>\n          </div>\n          </div>\n  \n          <div class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Location:</strong>\n          </div>\n          <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.city }}, {{ record.chosenSchedule.province }}</p>\n          </div>\n          </div>\n  \n          <div class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Date:</strong>\n          </div>\n          <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.startDateTime | date:'mediumDate' }}</p>\n          </div>\n          </div>\n  \n          <div class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Time:</strong>\n          </div>\n          <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.startDateTime | date:'shortTime' }} - {{ record.chosenSchedule.endDateTime | date:'shortTime' }}</p>\n          </div>\n          </div>\n  \n          <div class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Order Deadline:</strong>\n          </div>\n          <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.orderDeadline | date:'mediumDate' }} - {{ record.chosenSchedule.orderDeadline | date:'shortTime' }}</p>\n          </div>\n          </div>\n  \n          <div *ngIf=\"record.chosenSchedule.type === 'Door-to-door Delivery'\">\n              \n          <div class=\"row\">\n              <div class=\"col-4 text-right\">\n              <strong>Delivery Fee:</strong>\n              </div>\n              <div class=\"col-8\">\n              <p>{{ record.chosenSchedule.fee | currency:'USD':true:'1.2-2' }}</p>\n              </div>\n          </div>\n          \n          <div class=\"row\">\n              <div class=\"col-4 text-right\">\n              <strong>Fee Waiver Amount:</strong>\n              </div>\n              <div class=\"col-8\">\n              <p *ngIf=\"record.chosenSchedule.feeWiaver\">{{ record.chosenSchedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n              <p *ngIf=\"!record.chosenSchedule.feeWiaver\">None. Fee applies to all orders.</p>\n              </div>\n          </div>\n          \n          </div>\n          \n          <hr>                \n  \n      </div>\n\n  </div>\n\n  <form *ngIf=\"!submitting\" [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"row\">\n\n          <label for=\"consumerComment\" class=\"col-4 col-form-label text-right\">Please enter your comments:</label>\n          <div class=\"col-8\">\n              <textarea \n                  class=\"form-control\" \n                  type=\"text\" \n                  id=\"consumerComment\" \n                  [formControl]=\"orderForm.controls['consumerComment']\"></textarea>\n          </div>\n\n      </div>\n\n      <div class=\"row justify-content-center\">\n          <button \n              class=\"btn btn-olf-primary\" \n              type=\"submit\"\n              (click)=\"onAccept()\"\n              [disabled]=\"(orderForm.invalid)\"\n              >Confirm these Changes</button>\n          <button \n              class=\"btn btn-olf-primary\" \n              (click)=\"activeModal.close()\"\n              >Cancel Changes</button>\n      </div>\n\n  </form>\n    \n</div>\n\n<div class=\"modal-footer justify-content-center\">\n  <div class=\"row\">\n      <div>\n          <a (click)=\"activeModal.close()\">Cancel Changes</a>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerEditOrderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_order_model__ = __webpack_require__("./src/app/core/models/order.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsumerEditOrderModalComponent = /** @class */ (function () {
    function ConsumerEditOrderModalComponent(fb, router, api, activeModal) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.activeModal = activeModal;
        this.submitting = false;
    }
    ConsumerEditOrderModalComponent.prototype.ngOnInit = function () {
        // this.initialOrder = this.setInitialOrder();
        this.buildForm();
    };
    ConsumerEditOrderModalComponent.prototype.setInitialOrder = function () {
        // return new OrderModel(
        //   // this.record.id,
        //   // this.record.name,
        //   // this.record.description,
        //   // this.record.image,
        //   // this.record.pricePerUnit,
        //   // this.record.unit,
        //   // this.record.unitsPer,
        //   // this.record.category,
        //   // this.record.subcategory,
        //   // this.record.producer,
        //   // this.record.dateAdded,
        //   // this.record.qtyAvailable,
        //   // this.record.qtyPending,
        //   // this.record.qtyAccepted,
        //   // this.record.qtyCompleted,
        //   // this.record.isObsolete,
        //   // this.record.scheduleList
        // );
    };
    ConsumerEditOrderModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.orderForm = this.fb.group({
            consumerComment: [this.record.orderDetails.consumerComment, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]]
        });
        // Subscribe to form value changes
        this.formChangeSub = this.orderForm
            .valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    ;
    ConsumerEditOrderModalComponent.prototype.onValueChanged = function () {
    };
    ;
    ConsumerEditOrderModalComponent.prototype.setSubmitObject = function () {
        // make it equal to the original record
        this.submitObject = this.record;
        // then add the fields from the form
        this.submitObject.orderDetails.producerComment = this.orderForm.value.producerComment;
        this.submitObject.orderDetails.orderStatus = this.orderStatusInput;
    };
    ConsumerEditOrderModalComponent.prototype.onAccept = function () {
        this.orderStatusInput = 'accepted';
    };
    ConsumerEditOrderModalComponent.prototype.onDeny = function () {
        this.orderStatusInput = 'denied';
    };
    ConsumerEditOrderModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        this.setSubmitObject();
        console.log('submitted object: ', this.submitObject);
        this.submitOrderSub = this.api
            .putOrder(this.record.id, this.submitObject)
            .subscribe(function (data) { return _this.handleSubmitSuccess(data); }, function (err) { return _this.handleSubmitError(err); });
    };
    ;
    ConsumerEditOrderModalComponent.prototype.handleSubmitSuccess = function (res) {
        this.submitting = false;
        console.log('put!: ', res);
        // close modal
        this.activeModal.close();
    };
    ;
    ConsumerEditOrderModalComponent.prototype.handleSubmitError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    ;
    ConsumerEditOrderModalComponent.prototype.ngOnDestroy = function () {
        if (this.submitOrderSub) {
            this.submitOrderSub.unsubscribe();
        }
        this.formChangeSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__core_models_order_model__["a" /* OrderModel */])
    ], ConsumerEditOrderModalComponent.prototype, "record", void 0);
    ConsumerEditOrderModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-edit-order-modal',
            template: __webpack_require__("./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ConsumerEditOrderModalComponent);
    return ConsumerEditOrderModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Order from {{ record.consumer.firstName }}</h5>\n  <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n  \n<div class=\"modal-body dash-modal-body\">\n    \n\t<div class=\"row\"> <!-- ORDER DETAILS -->\n\n\t\t<div class=\"col-12\">\n\t\t  <h4>Order Details</h4>\n\t\t</div>\n\n\t\t<div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Order Status:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.orderDetails.orderStatus | uppercase }}</p>\n        </div>\n      </div>\n        \n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Your Comments:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p *ngIf=\"record.orderDetails.consumerComment\">{{ record.orderDetails.consumerComment }}</p>\n          <p *ngIf=\"!record.orderDetails.consumerComment\">No comments entered.</p>\n        </div>\n      </div>\n            \n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Producer Comments:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p *ngIf=\"record.orderDetails.producerComment\">{{ record.orderDetails.producerComment }}</p>\n          <p *ngIf=\"!record.orderDetails.producerComment\">No comments entered.</p>\n        </div>\n      </div>\n    </div>\n\t<hr>\n    </div>\n\t\n\t\n\t<div class=\"row\"> <!-- ORDER CONTENTS -->\n\t\t<div class=\"col-12\">\n\t\t\t<h4>Your Order Contents</h4>\n\t\t</div>\n\t\t<div class=\"col-12\">\n\t\t  <div class=\"row\">\n\t\t\t<div class=\"col-8 offset-2 justify-content-center\">\n\t\t\t  <table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t  <tr>\n\t\t\t\t\t<th>Product</th>\n\t\t\t\t\t<th>Quantity</th>\n\t\t\t\t\t<th>Value</th>\n\t\t\t\t  </tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t  <tr *ngFor=\"let product of products\">\n\t\t\t\t\t<td>{{ product.name }}</td>\n\t\t\t\t\t<td>{{ product.quantity }}</td>\n\t\t\t\t\t<td>{{ product.value | currency:'USD':true:'1.2-2' }}</td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t  <td></td>\n\t\t\t\t  <td></td>\n\t\t\t\t  <td><strong>{{ record.orderDetails.orderValue | currency:'USD':true:'1.2-2' }}</strong></td>\n\t\t\t\t  </tr>\n\t\t\t\t</tbody>\n\t\t\t  </table>\n\t\t\t</div>\n\t\t  </div>\n\n\t\t  <hr>\n\n\t\t</div>\n\t</div>\n \n  <div class=\"row\"> <!-- SCHEDULE DETAILS -->\n\n    <div class=\"col-12\">\n      <h4>Schedule Details</h4>\n    </div>  \n      \n    <div class=\"col-12\">\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Schedule Type:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.type }}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"record.chosenSchedule.address\" class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Address:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.address }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Location:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.city }}, {{ record.chosenSchedule.province }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Date:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.startDateTime | date:'mediumDate' }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Time:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.startDateTime | date:'shortTime' }} - {{ record.chosenSchedule.endDateTime | date:'shortTime' }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Order Deadline:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.orderDeadline | date:'mediumDate' }} - {{ record.chosenSchedule.orderDeadline | date:'shortTime' }}</p>\n        </div>\n      </div>\n\t  \n\t  <div class=\"row\" *ngIf=\"record.chosenSchedule.description\">\n        <div class=\"col-4 text-right\">\n          <strong>Details:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.description }}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"record.chosenSchedule.type === 'Door-to-door Delivery'\">\n            \n        <div class=\"row\">\n          <div class=\"col-4 text-right\">\n            <strong>Delivery Fee:</strong>\n          </div>\n          <div class=\"col-8\">\n            <p>{{ record.chosenSchedule.fee | currency:'USD':true:'1.2-2' }}</p>\n          </div>\n        </div>\n      \n        <div class=\"row\">\n          <div class=\"col-4 text-right\">\n            <strong>Fee Waiver Amount:</strong>\n          </div>\n          <div class=\"col-8\">\n            <p *ngIf=\"record.chosenSchedule.feeWiaver\">{{ record.chosenSchedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n            <p *ngIf=\"!record.chosenSchedule.feeWiaver\">None. Fee applies to all orders.</p>\n          </div>\n        </div>\n      \n      </div>\n      \n      <hr>                \n\n    </div>\n\n  </div>\n    \n</div>\n  \n<div class=\"modal-footer justify-content-center\">\n  <div class=\"row\">\n      <div>\n          <a (click)=\"activeModal.close()\">Close</a>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerViewOrderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_order_model__ = __webpack_require__("./src/app/core/models/order.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsumerViewOrderModalComponent = /** @class */ (function () {
    function ConsumerViewOrderModalComponent(api, activeModal) {
        this.api = api;
        this.activeModal = activeModal;
        // build the products array to use in the table
        this.products = [
            {
                id: null,
                name: '',
                quantity: null,
                value: null
            }
        ];
    }
    ConsumerViewOrderModalComponent.prototype.ngOnInit = function () {
        this.buildProductsArray();
    };
    ConsumerViewOrderModalComponent.prototype.buildProductsArray = function () {
        var newProduct = {
            id: null,
            name: '',
            quantity: null,
            value: null
        };
        var array = this.record.orderDetails.productQuantities;
        // for each product in the productQuantities array, get the id, qty and value
        for (var i = 0; i < array.length; i++) {
            newProduct.id = array[i].productId;
            newProduct.quantity = array[i].orderQuantity;
            newProduct.value = array[i].orderValue;
            newProduct.name = this.getProductName(newProduct.id);
            this.products.push(newProduct);
        }
        // use the id to get the name from the productList array
    };
    ConsumerViewOrderModalComponent.prototype.getProductName = function (id) {
        for (var j = 0; j < this.record.productList.length; j++) {
            if (this.record.productList[j].id === id) {
                return this.record.productList[j].name;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_order_model__["a" /* OrderModel */])
    ], ConsumerViewOrderModalComponent.prototype, "record", void 0);
    ConsumerViewOrderModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-view-order-modal',
            template: __webpack_require__("./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ConsumerViewOrderModalComponent);
    return ConsumerViewOrderModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <app-admin-dashboard *ngIf=\"this.isAdmin\" [id]=\"id\" [user]=\"user\"></app-admin-dashboard>\n    <app-consumer-dashboard *ngIf=\"this.userType === 'consumer' && !this.isAdmin\" [id]=\"id\" [user]=\"user\"></app-consumer-dashboard>\n    <app-producer-dashboard *ngIf=\"this.userType === 'producer'\" [id]=\"id\" [user]=\"user\"></app-producer-dashboard>\n        \n</div>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  padding: .5rem 0 !important; }\n"

/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_user_user_service__ = __webpack_require__("./src/app/core/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnChanges = function () { };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserType()
            .subscribe(function (result) {
            console.log('usertype result: ', result);
            _this.userType = result;
        });
        this.auth.getIsAdmin()
            .subscribe(function (result) {
            _this.isAdmin = result;
        });
        this.auth.getParsedId()
            .subscribe(function (result) {
            _this.id = result;
        });
        this.userService.getUser()
            .subscribe(function (result) {
            _this.user = result;
        });
        console.log('id: ', this.id);
        console.log('userType: ', this.userType);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/feature/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/dashboard.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_user_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    // during construction, create the empty datastore and initialize behaviour subjects
    function DashboardService(apiService) {
        this.apiService = apiService;
        this.dataStore = { producers: [], users: [], products: [], orders: [], schedules: [] };
        this._producers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._users = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._products = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._orders = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._schedules = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    // fill the datastore with the producers
    DashboardService.prototype.loadAllProducers = function () {
        var _this = this;
        this.apiService.getProducers()
            .subscribe(function (response) {
            // fill datastore
            _this.dataStore.producers = response;
            // make a copy and assign to the behaviour subject
            _this._producers.next(Object.assign({}, _this.dataStore).producers);
        }, function (error) { return console.log('could not load producers'); });
    };
    DashboardService.prototype.getAllProducers = function () {
        return this._producers.asObservable();
    };
    DashboardService.prototype.loadAllUsers = function () {
        var _this = this;
        this.apiService.getUsers()
            .subscribe(function (response) {
            _this.dataStore.users = response;
            _this._users.next(Object.assign({}, _this.dataStore).users);
        }, function (error) { return console.log('could not load users'); });
    };
    DashboardService.prototype.getAllUsers = function () {
        return this._users.asObservable();
    };
    DashboardService.prototype.loadAllProducts = function () {
        var _this = this;
        this.apiService.getProducts()
            .subscribe(function (response) {
            _this.dataStore.products = response;
            _this._products.next(Object.assign({}, _this.dataStore).products);
        }, function (error) { return console.log('could not load products'); });
    };
    DashboardService.prototype.getAllProducts = function () {
        return this._products.asObservable();
    };
    DashboardService.prototype.loadAllOrders = function () {
        var _this = this;
        this.apiService.getOrders()
            .subscribe(function (response) {
            _this.dataStore.orders = response;
            _this._orders.next(Object.assign({}, _this.dataStore).orders);
        }, function (error) { return console.log('could not load orders'); });
    };
    DashboardService.prototype.getAllOrders = function () {
        return this._orders.asObservable();
    };
    DashboardService.prototype.loadAllSchedules = function () {
        var _this = this;
        this.apiService.getSchedules()
            .subscribe(function (response) {
            _this.dataStore.schedules = response;
            _this._schedules.next(Object.assign({}, _this.dataStore).schedules);
        }, function (error) { return console.log('could not load schedules'); });
    };
    DashboardService.prototype.getAllSchedules = function () {
        return this._schedules.asObservable();
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer-dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerDashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProducerDashboardService = /** @class */ (function () {
    function ProducerDashboardService(apiService) {
        this.apiService = apiService;
        this.dataStore = { producer: null, user: null, products: [], orders: [], schedules: [] };
        this._producer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._products = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._orders = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._schedules = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    ProducerDashboardService.prototype.loadData = function (id) {
        var _this = this;
        this.apiService.getProducerById(id)
            .subscribe(function (result) {
            _this.dataStore.producer = result;
            console.log('api getProducer result', result);
            _this._producer.next(Object.assign({}, _this.dataStore).producer);
        }, function (error) { return console.log('could not load producer'); });
        this.apiService.getUserById(id)
            .subscribe(function (result) {
            _this.dataStore.user = result;
            _this._user.next(Object.assign({}, _this.dataStore).user);
        }, function (error) { return console.log('could not load user'); });
        this.apiService.getProductsByProducerId(id)
            .subscribe(function (result) {
            _this.dataStore.products = result;
            _this._products.next(Object.assign({}, _this.dataStore).products);
        }, function (error) { return console.log('could not load products'); });
        this.apiService.getOrdersByProducerId(id)
            .subscribe(function (result) {
            _this.dataStore.orders = result;
            _this._orders.next(Object.assign({}, _this.dataStore).orders);
        }, function (error) { return console.log('could not load order'); });
        this.apiService.getScheduleByProducerId(id)
            .subscribe(function (result) {
            _this.dataStore.schedules = result;
            _this._schedules.next(Object.assign({}, _this.dataStore).schedules);
        }, function (error) { return console.log('could not load schedules'); });
    };
    ;
    ProducerDashboardService.prototype.getProducer = function () {
        return this._producer.asObservable();
    };
    ;
    ProducerDashboardService.prototype.getUserData = function () {
        return this._user.asObservable();
    };
    ;
    ProducerDashboardService.prototype.getProducts = function () {
        return this._products.asObservable();
    };
    ;
    ProducerDashboardService.prototype.getOrders = function () {
        return this._orders.asObservable();
    };
    ;
    ProducerDashboardService.prototype.getSchedules = function () {
        return this._schedules.asObservable();
    };
    ;
    ProducerDashboardService.prototype.addNewProduct = function (product) {
        this.apiService.postProduct(product)
            .subscribe(function (result) {
            console.log('posted successfully');
        });
    };
    ;
    ProducerDashboardService.prototype.addNewSchedule = function (schedule) {
        this.apiService.postSchedule(schedule)
            .subscribe(function (result) {
            console.log('posted sched successfully');
        });
    };
    ;
    ProducerDashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */]])
    ], ProducerDashboardService);
    return ProducerDashboardService;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Please review and Accept or Deny this order</h5>\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body dash-modal-body\">\n  \n    <app-loading *ngIf=\"submitting\"></app-loading>\n\n    <div class=\"row\">\n            \n        <div class=\"col-12\">\n            <h4>Consumer Details</h4>\n        </div>\n    \n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Name:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.consumer.firstName }}</p>\n                </div>\n            </div>\n        </div>\n        \n        <hr>\n        \n    </div>\n        \n    <div class=\"row\">\n    \n        <div class=\"col-12\">\n            <h4>Order Details</h4>\n        </div>\n    \n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Order Status:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.orderDetails.orderStatus }}</p>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Consumer Comment:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p *ngIf=\"record.consumerComment\">{{ record.orderDetails.consumerComment }}</p>\n                    <p *ngIf=\"!record.consumerComment\">No comments entered.</p>\n                </div>\n            </div>\n                \n        </div>\n    \n            \n        <div class=\"col-12\">\n            <div class=\"row\">\n            <div class=\"col-8 offset-2 justify-content-center\">\n                <table class=\"table\">\n                <thead>\n                    <tr>\n                    <th>Product</th>\n                    <th>Quantity</th>\n                    <th>Value</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let product of products\">\n                    <td>{{ product.name }}</td>\n                    <td>{{ product.quantity }}</td>\n                    <td>{{ product.value | currency:'USD':true:'1.2-2' }}</td>\n                    </tr>\n                    <tr>\n                    <td></td>\n                    <td></td>\n                    <td><strong>{{ record.orderDetails.orderValue | currency:'USD':true:'1.2-2' }}</strong></td>\n                    </tr>\n                </tbody>\n                </table>\n            </div>\n            </div>\n    \n            <hr>\n    \n        </div>\n    </div>\n        \n    <div class=\"row\">\n    \n        <div class=\"col-12\">\n            <h4>Schedule Details</h4>\n        </div>  \n            \n        <div class=\"col-12\">\n    \n            <div class=\"row\">\n            <div class=\"col-4 text-right\">\n                <strong>Schedule Type:</strong>\n            </div>\n            <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.type }}</p>\n            </div>\n            </div>\n    \n            <div *ngIf=\"record.chosenSchedule.address\" class=\"row\">\n            <div class=\"col-4 text-right\">\n                <strong>Address:</strong>\n            </div>\n            <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.address }}</p>\n            </div>\n            </div>\n    \n            <div class=\"row\">\n            <div class=\"col-4 text-right\">\n                <strong>Location:</strong>\n            </div>\n            <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.city }}, {{ record.chosenSchedule.province }}</p>\n            </div>\n            </div>\n    \n            <div class=\"row\">\n            <div class=\"col-4 text-right\">\n                <strong>Date:</strong>\n            </div>\n            <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.startDateTime | date:'mediumDate' }}</p>\n            </div>\n            </div>\n    \n            <div class=\"row\">\n            <div class=\"col-4 text-right\">\n                <strong>Time:</strong>\n            </div>\n            <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.startDateTime | date:'shortTime' }} - {{ record.chosenSchedule.endDateTime | date:'shortTime' }}</p>\n            </div>\n            </div>\n    \n            <div class=\"row\">\n            <div class=\"col-4 text-right\">\n                <strong>Order Deadline:</strong>\n            </div>\n            <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.orderDeadline | date:'mediumDate' }} - {{ record.chosenSchedule.orderDeadline | date:'shortTime' }}</p>\n            </div>\n            </div>\n    \n            <div *ngIf=\"record.chosenSchedule.type === 'Door-to-door Delivery'\">\n                \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                <strong>Delivery Fee:</strong>\n                </div>\n                <div class=\"col-8\">\n                <p>{{ record.chosenSchedule.fee | currency:'USD':true:'1.2-2' }}</p>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                <strong>Fee Waiver Amount:</strong>\n                </div>\n                <div class=\"col-8\">\n                <p *ngIf=\"record.chosenSchedule.feeWiaver\">{{ record.chosenSchedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n                <p *ngIf=\"!record.chosenSchedule.feeWiaver\">None. Fee applies to all orders.</p>\n                </div>\n            </div>\n            \n            </div>\n            \n            <hr>                \n    \n        </div>\n\n    </div>\n\n    <form *ngIf=\"!submitting\" [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\n\n        <div class=\"row\">\n\n            <label for=\"producerComment\" class=\"col-4 col-form-label text-right\">Please enter your comments:</label>\n            <div class=\"col-8\">\n                <textarea \n                    class=\"form-control\" \n                    type=\"text\" \n                    id=\"producerComment\" \n                    [formControl]=\"orderForm.controls['producerComment']\"></textarea>\n            </div>\n\n        </div>\n\n        <div class=\"row justify-content-center\">\n            <button \n                class=\"btn btn-olf-primary\" \n                type=\"submit\"\n                (click)=\"onAccept()\"\n                [disabled]=\"(orderForm.invalid)\"\n                >Accept this Order</button>\n                <!-- <button \n                class=\"btn btn-olf-primary\" \n                type=\"submit\"\n                [disabled]=\"(form.invalid)\"\n                >Add to Schedule</button> -->\n            <button \n                class=\"btn btn-olf-primary\" \n                type=\"submit\"\n                (click)=\"onDeny()\"\n                [disabled]=\"(orderForm.invalid)\"\n                >Deny this Order</button>\n        </div>\n\n    </form>\n      \n</div>\n\n<div class=\"modal-footer justify-content-center\">\n    <div class=\"row\">\n        <div>\n            <a (click)=\"activeModal.close()\">Cancel Changes</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_order_model__ = __webpack_require__("./src/app/core/models/order.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditOrderModalComponent = /** @class */ (function () {
    function EditOrderModalComponent(fb, router, api, activeModal, cartService) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.onOrderAccepted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onOrderDenied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.submitting = false;
        this.submitObject = { orderDetails: {} };
        // build the products array to use in the table
        this.products = [
            {
                id: null,
                name: '',
                quantity: null,
                value: null
            }
        ];
    }
    ;
    EditOrderModalComponent.prototype.ngOnInit = function () {
        this.buildProductsArray();
        this.buildForm();
        this.submitObject.orderDetails = this.record.orderDetails;
        console.log('this order: ', this.record);
        console.log('submitObject: ', this.submitObject);
    };
    EditOrderModalComponent.prototype.buildProductsArray = function () {
        var newProduct = {
            id: null,
            name: '',
            quantity: null,
            value: null
        };
        var array = this.record.orderDetails.productQuantities;
        // for each product in the productQuantities array, get the id, qty and value
        for (var i = 0; i < array.length; i++) {
            newProduct.id = array[i].productId;
            newProduct.quantity = array[i].orderQuantity;
            newProduct.value = array[i].orderValue;
            newProduct.name = this.getProductName(newProduct.id);
            this.products.push(newProduct);
        }
        // use the id to get the name from the productList array
    };
    ;
    EditOrderModalComponent.prototype.getProductName = function (id) {
        for (var j = 0; j < this.record.productList.length; j++) {
            if (this.record.productList[j].id === id) {
                return this.record.productList[j].name;
            }
        }
    };
    ;
    EditOrderModalComponent.prototype.buildForm = function () {
        this.orderForm = this.fb.group({
            producerComment: [this.record.orderDetails.producerComment, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]]
        });
    };
    ;
    EditOrderModalComponent.prototype.setSubmitObject = function (status) {
        // then add the fields from the form
        this.submitObject.orderDetails.producerComment = this.orderForm.value.producerComment || '';
        this.submitObject.orderDetails.orderStatus = status;
    };
    EditOrderModalComponent.prototype.onAccept = function () {
        var _this = this;
        this.submitting = true;
        this.setSubmitObject('accepted');
        // patch the order
        this.api.patchOrder(this.record.id, this.submitObject)
            .subscribe(function (result) {
            console.log('order accepted and emitted from modal: ', result);
            _this.handleSubmitAcceptSuccess(result);
        }, function (error) {
            _this.handleSubmitError(error);
        });
        // for each product in the cart, call cartService.makeAccepted, these should patch the product
        for (var i = 0; i < this.record.orderDetails.productQuantities.length; i++) {
            var productOrder = this.record.orderDetails.productQuantities[i];
            this.cartService.makeQtyAccepted(productOrder.productId, productOrder.orderQuantity);
        }
    };
    EditOrderModalComponent.prototype.onDeny = function () {
        var _this = this;
        this.submitting = true;
        this.setSubmitObject('denied');
        // patch the order
        this.api.patchOrder(this.record.id, this.submitObject)
            .subscribe(function (result) {
            console.log('order denied and emitted from modal: ', result);
            _this.handleSubmitDenySuccess(result);
        }, function (error) {
            _this.handleSubmitError(error);
        });
        // for each product in the cart, call the cartservice makeAvailable, these also patch the product
        for (var i = 0; i < this.record.orderDetails.productQuantities.length; i++) {
            var productOrder = this.record.orderDetails.productQuantities[i];
            this.cartService.makeQtyAvailable(productOrder.productId, productOrder.orderQuantity);
        }
    };
    // onSubmit() {
    // 	this.submitting = true;
    //   this.setSubmitObject();
    //   console.log('submitted object: ', this.submitObject);
    // 	this.submitOrderSub = this.api
    // 		.putOrder(this.record.id, this.submitObject)
    // 		.subscribe(
    // 		  data => this.handleSubmitSuccess(data),
    // 		  err => this.handleSubmitError(err)
    // 		);
    // };
    EditOrderModalComponent.prototype.handleSubmitAcceptSuccess = function (res) {
        this.submitting = false;
        console.log('put, accepted!: ', res);
        this.onOrderAccepted.emit(res);
        // close modal
        this.activeModal.close();
    };
    ;
    EditOrderModalComponent.prototype.handleSubmitDenySuccess = function (res) {
        this.submitting = false;
        console.log('put, denied!: ', res);
        this.onOrderDenied.emit(res);
        // close modal
        this.activeModal.close();
    };
    ;
    EditOrderModalComponent.prototype.handleSubmitError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__core_models_order_model__["a" /* OrderModel */])
    ], EditOrderModalComponent.prototype, "record", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], EditOrderModalComponent.prototype, "onOrderAccepted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], EditOrderModalComponent.prototype, "onOrderDenied", void 0);
    EditOrderModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-edit-order-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_cart_service_cart_service__["a" /* CartService */]])
    ], EditOrderModalComponent);
    return EditOrderModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Please review and mark this order Complete or Incomplete</h5>\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body dash-modal-body\">\n  \n    <app-loading *ngIf=\"submitting\"></app-loading>\n  \n    <div class=\"row form-section\">\n  \n        <div class=\"col-12 form-section-header\">\n            <h4>Complete Order</h4>\n        </div> \n\n        <div class=\"col-12 form-section-body\">\n\n            <div class=\"row\">\n\n                <div class=\"col-6 text-right\">\n                    <strong>Mark this order Complete:</strong>\n                </div>\n                <div class=\"col-6\">\n                    <button \n                        class=\"btn btn-olf-primary btn-sm\" \n                        (click)=\"onMarkComplete()\"\n                        >Complete Order</button>\n                </div>\n\n            </div>\n            \n        </div>\n  \n    </div>\n  \n    <div class=\"row form-section\">\n            \n        <div class=\"col-12 form-section-header\">\n            <h4>Consumer Details</h4>\n        </div>\n    \n        <div class=\"col-12 form-section-body\">\n            <div class=\"row\">\n                  <div class=\"col-4 text-right\">\n                      <strong>Name:</strong>\n                  </div>\n                <div class=\"col-8\">\n                    <p>{{ record.consumer.firstName }}</p>\n                </div>\n            </div>\n        </div>\n        \n        <hr>\n        \n    </div>\n        \n    <div class=\"row form-section\">\n    \n        <div class=\"col-12 form-section-header\">\n            <h4>Order Details</h4>\n        </div>\n    \n        <div class=\"col-12 form-section-body\">\n            \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Consumer Comment:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p *ngIf=\"record.consumerComment\">{{ record.orderDetails.consumerComment }}</p>\n                    <p *ngIf=\"!record.consumerComment\">No comments entered.</p>\n                </div>\n            </div>\n  \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Producer Comment:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p *ngIf=\"record.consumerComment\">{{ record.orderDetails.producerComment }}</p>\n                    <p *ngIf=\"!record.consumerComment\">No comments entered.</p>\n                </div>\n            </div>\n                \n            <div class=\"row\">\n                <div class=\"col-8 offset-2 justify-content-center\">\n                    <table class=\"table\">\n                    <thead>\n                        <tr>\n                        <th>Product</th>\n                        <th>Quantity</th>\n                        <th>Value</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of products\">\n                        <td>{{ product.name }}</td>\n                        <td>{{ product.quantity }}</td>\n                        <td>{{ product.value | currency:'USD':true:'1.2-2' }}</td>\n                        </tr>\n                        <tr>\n                        <td></td>\n                        <td></td>\n                        <td><strong>{{ record.orderDetails.orderValue | currency:'USD':true:'1.2-2' }}</strong></td>\n                        </tr>\n                    </tbody>\n                    </table>\n                </div>\n            </div>\n    \n        </div>\n    </div>\n        \n    <div class=\"row form-section\">\n    \n        <div class=\"col-12 form-section-header\">\n            <h4>Schedule Details</h4>\n        </div>  \n            \n        <div class=\"col-12 form-section-body\">\n    \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Schedule Type:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.type }}</p>\n                </div>\n            </div>\n    \n            <div *ngIf=\"record.chosenSchedule.address\" class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Address:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.address }}</p>\n                </div>\n            </div>\n    \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Location:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.city }}, {{ record.chosenSchedule.province }}</p>\n                </div>\n            </div>\n    \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Date:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.startDateTime | date:'mediumDate' }}</p>\n                </div>\n            </div>\n    \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Time:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.startDateTime | date:'shortTime' }} - {{ record.chosenSchedule.endDateTime | date:'shortTime' }}</p>\n                </div>\n            </div>\n    \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Order Deadline:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.orderDeadline | date:'mediumDate' }} - {{ record.chosenSchedule.orderDeadline | date:'shortTime' }}</p>\n                </div>\n            </div>\n    \n            <div *ngIf=\"record.chosenSchedule.type === 'Door-to-door Delivery'\">\n                \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Delivery Fee:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{ record.chosenSchedule.fee | currency:'USD':true:'1.2-2' }}</p>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-4 text-right\">\n                    <strong>Fee Waiver Amount:</strong>\n                </div>\n                <div class=\"col-8\">\n                    <p *ngIf=\"record.chosenSchedule.feeWiaver\">{{ record.chosenSchedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n                    <p *ngIf=\"!record.chosenSchedule.feeWiaver\">None. Fee applies to all orders.</p>\n                </div>\n            </div>\n            \n            </div>\n            \n            <hr>                \n    \n        </div>\n  \n    </div>\n  \n    <form *ngIf=\"!submitting\" [formGroup]=\"markCompleteForm\">\n  \n        <div class=\"row form-section\">\n  \n            <div class=\"col-12 form-section-header\">\n                <h4>Incomplete Order</h4>\n            </div>\n\n            <div class=\"col-12 form-section-body\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-12 col-md-8 offset-md-2\">\n                        <p>If this order was not completed, please use this dropdown to select the reason why.</p>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <label for=\"incompleteReason\" class=\"col-4 col-md-3 col-form-label text-right\">\n                            <strong>Reason:</strong>\n                        </label>\n\n                        <div class=\"col-8 col-md-4\">\n                            <select class=\"custom-select float-left\" name=\"incompleteReason\" [formControl]=\"markCompleteForm.controls['incompleteReason']\">\n                                <option selected value=\"\">Select a Reason</option>\n                                <option value=\"no-show\">Consumer No-show</option>\n                                <option value=\"out-of-stock\">Product Out-of-stock</option>\n                                <option value=\"producerCancellation\">Scheduled Delivery or Pickup Cancelled by Producer</option>\n                                <option value=\"consumerCancellation\">Scheduled Delivery or Pickup Cancelled by Consumer</option>\n                            </select>\n                        </div>\n                        \n                        <div class=\"col-12 col-md-4 justify-content-center\">\n                            <button \n                                class=\"btn btn-outline-olf-primary btn-sm\" \n                                (click)=\"onMarkIncomplete()\"\n                                [disabled]=\"(markCompleteForm.invalid)\"\n                                >Mark this Order Incomplete</button>\n                                <!-- <button \n                                class=\"btn btn-olf-primary\" \n                                type=\"submit\"\n                                [disabled]=\"(form.invalid)\"\n                                >Add to Schedule</button> -->\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div> \n  \n        </div>\n  \n    </form>\n      \n</div>\n  \n<div class=\"modal-footer justify-content-center\">\n    <div class=\"row\">\n        <div>\n            <a (click)=\"activeModal.close()\">Cancel Changes</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkCompleteOrderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_models_order_model__ = __webpack_require__("./src/app/core/models/order.model.ts");
// import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ApiService } from '../../../../../../core/api.service';
// import { CartService } from '../../../../../../core/services/cart-service/cart.service';
// import { OrderModel } from '../../../../../../core/models/order.model';
// @Component({
//   selector: 'app-mark-complete-order-modal',
//   templateUrl: './mark-complete-order-modal.component.html',
//   styleUrls: ['./mark-complete-order-modal.component.scss']
// })
// export class MarkCompleteOrderModalComponent implements OnInit, OnDestroy {
//     @Input() record: OrderModel;
//     @Output() onOrderCompleted = new EventEmitter<OrderModel>();
//     @Output() onOrderIncompleted = new EventEmitter<OrderModel>();
//     markCompleteForm: FormGroup;
//     orderUpdateSubscription: any;
//     submitting: boolean = false;
//     submitObject: {
//         'orderDetails': {
//             'orderStatus': string,
//             'incompleteReason': string
//         }
//     };
//     error: boolean;
//     constructor(private fb: FormBuilder,
//                 private router: Router,
//                 private api: ApiService,
//                 private activeModal: NgbActiveModal,
//                 private cartService: CartService) {
//         this.submitObject = { orderDetails : { orderStatus: '', incompleteReason: '' } };
//     };
//     ngOnInit() {
//         this.markCompleteForm = this.fb.group({
//             incompleteReason: ['', [Validators.required] ]
//         });
//     }
//     onMarkComplete() {
//         this.submitting = true;
//         this.submitObject.orderDetails.orderStatus = 'complete';
//         this.submitObject.orderDetails.incompleteReason = '';
//         this.orderUpdateSubscription = this.api.patchOrder(this.record.id, this.submitObject)
//             .subscribe(
//                 result => {
//                     console.log('order completed and emitted from modal: ', result);
//                     this.handleSubmitCompleteSuccess(result);
//                 }, error => {
//                     this.handleSubmitError(error);
//                 }
//             );
//     };
//     onMarkIncomplete() {
//         this.submitting = true;
//         this.submitObject.orderDetails.orderStatus = 'incomplete';
//         this.submitObject.orderDetails.incompleteReason = this.markCompleteForm.value.incompleteReason;
//         this.orderUpdateSubscription = this.api.patchOrder(this.record.id, this.submitObject)
//             .subscribe(
//                 result => {
//                     console.log('order incompleted and emitted from modal: ', result);
//                     this.handleSubmitIncompleteSuccess(result);
//                 }, error => {
//                     this.handleSubmitError(error);
//                 }
//             );
//     };
//     handleSubmitCompleteSuccess(result) {
//         this.submitting = false;
//         console.log('put!: ', result);
//         this.onOrderCompleted.emit(result);
//         // close modal
//         this.activeModal.close();
//     };
//     handleSubmitIncompleteSuccess(result) {
//         this.submitting = false;
//         console.log('put!: ', result);
//         this.onOrderIncompleted.emit(result);
//         // close modal
//         this.activeModal.close();
//     };
//     handleSubmitError(error) {
//         console.error(error);
//         this.submitting = false;
//         this.error = true;
//     };
//     ngOnDestroy() {
//         this.orderUpdateSubscription.unsubscribe();
//     }
// }







var MarkCompleteOrderModalComponent = /** @class */ (function () {
    function MarkCompleteOrderModalComponent(fb, router, api, activeModal, cartService) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.onOrderCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onOrderIncompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.submitting = false;
        this.submitObject = { orderDetails: {} };
        // build the products array to use in the table
        this.products = [
            {
                id: null,
                name: '',
                quantity: null,
                value: null
            }
        ];
    }
    ;
    MarkCompleteOrderModalComponent.prototype.ngOnInit = function () {
        this.buildProductsArray();
        this.markCompleteForm = this.fb.group({
            incompleteReason: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]]
        });
        console.log('this record: ', this.record);
        this.buildSubmitObject();
    };
    ;
    MarkCompleteOrderModalComponent.prototype.buildProductsArray = function () {
        var newProduct = {
            id: null,
            name: '',
            quantity: null,
            value: null
        };
        var array = this.record.orderDetails.productQuantities;
        // for each product in the productQuantities array, get the id, qty and value
        for (var i = 0; i < array.length; i++) {
            newProduct.id = array[i].productId;
            newProduct.quantity = array[i].orderQuantity;
            newProduct.value = array[i].orderValue;
            newProduct.name = this.getProductName(newProduct.id);
            this.products.push(newProduct);
        }
        // use the id to get the name from the productList array
    };
    ;
    MarkCompleteOrderModalComponent.prototype.getProductName = function (id) {
        for (var j = 0; j < this.record.productList.length; j++) {
            if (this.record.productList[j].id === id) {
                return this.record.productList[j].name;
            }
        }
    };
    ;
    MarkCompleteOrderModalComponent.prototype.buildSubmitObject = function () {
        this.submitObject.orderDetails = this.record.orderDetails;
    };
    ;
    MarkCompleteOrderModalComponent.prototype.onMarkComplete = function () {
        var _this = this;
        this.submitting = true;
        this.submitObject.orderDetails.orderStatus = 'complete';
        this.submitObject.orderDetails.incompleteReason = '';
        this.orderUpdateSubscription = this.api.patchOrder(this.record.id, this.submitObject)
            .subscribe(function (result) {
            console.log('order completed and emitted from modal: ', result);
            _this.handleSubmitCompleteSuccess(result);
        }, function (error) {
            _this.handleSubmitError(error);
        });
    };
    ;
    MarkCompleteOrderModalComponent.prototype.onMarkIncomplete = function () {
        var _this = this;
        this.submitting = true;
        console.log('this is the submitObject before:', this.submitObject);
        this.submitObject.orderDetails.orderStatus = 'incomplete';
        this.submitObject.orderDetails.incompleteReason = this.markCompleteForm.value.incompleteReason;
        console.log('this is the submitObject after:', this.submitObject);
        this.orderUpdateSubscription = this.api.patchOrder(this.record.id, this.submitObject)
            .subscribe(function (result) {
            console.log('order incompleted and emitted from modal: ', result);
            _this.handleSubmitIncompleteSuccess(result);
        }, function (error) {
            _this.handleSubmitError(error);
        });
    };
    ;
    MarkCompleteOrderModalComponent.prototype.handleSubmitCompleteSuccess = function (result) {
        this.submitting = false;
        console.log('put!: ', result);
        this.onOrderCompleted.emit(result);
        // close modal
        this.activeModal.close();
    };
    ;
    MarkCompleteOrderModalComponent.prototype.handleSubmitIncompleteSuccess = function (result) {
        this.submitting = false;
        console.log('put!: ', result);
        this.onOrderIncompleted.emit(result);
        // close modal
        this.activeModal.close();
    };
    ;
    MarkCompleteOrderModalComponent.prototype.handleSubmitError = function (error) {
        console.error(error);
        this.submitting = false;
        this.error = true;
    };
    ;
    MarkCompleteOrderModalComponent.prototype.ngOnDestroy = function () {
        if (this.orderUpdateSubscription) {
            this.orderUpdateSubscription.unsubscribe();
        }
        ;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__core_models_order_model__["a" /* OrderModel */])
    ], MarkCompleteOrderModalComponent.prototype, "record", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], MarkCompleteOrderModalComponent.prototype, "onOrderCompleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], MarkCompleteOrderModalComponent.prototype, "onOrderIncompleted", void 0);
    MarkCompleteOrderModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-mark-complete-order-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_cart_service_cart_service__["a" /* CartService */]])
    ], MarkCompleteOrderModalComponent);
    return MarkCompleteOrderModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Order from {{ record.consumer.firstName }}</h5>\n  <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n  \n<div class=\"modal-body dash-modal-body\">\n\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <h4>Consumer Details</h4>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"row\">\n          <div class=\"col-4 text-right\">\n              <strong>Name:</strong>\n            </div>\n            <div class=\"col-8\">\n              <p>{{ record.consumer.firstName }}</p>\n            </div>\n      </div>\n    </div>\n    \n    <hr>\n    \n  </div>\n    \n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <h4>Order Details</h4>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Order Status:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.orderDetails.orderStatus | uppercase }}</p>\n        </div>\n      </div>\n        \n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Consumer Comment:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p *ngIf=\"record.orderDetails.consumerComment\">{{ record.orderDetails.consumerComment }}</p>\n          <p *ngIf=\"!record.orderDetails.consumerComment\">No comments entered.</p>\n        </div>\n      </div>\n            \n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Producer Comment:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p *ngIf=\"record.orderDetails.producerComment\">{{ record.orderDetails.producerComment }}</p>\n          <p *ngIf=\"!record.orderDetails.producerComment\">No comments entered.</p>\n        </div>\n      </div>\n    </div>\n\n      \n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div class=\"col-8 offset-2 justify-content-center\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Product</th>\n                <th>Quantity</th>\n                <th>Value</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let product of products\">\n                <td>{{ product.name }}</td>\n                <td>{{ product.quantity }}</td>\n                <td>{{ product.value | currency:'USD':true:'1.2-2' }}</td>\n              </tr>\n              <tr>\n              <td></td>\n              <td></td>\n              <td><strong>{{ record.orderDetails.orderValue | currency:'USD':true:'1.2-2' }}</strong></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <hr>\n\n    </div>\n  </div>\n \n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <h4>Schedule Details</h4>\n    </div>  \n      \n    <div class=\"col-12\">\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Schedule Type:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.type }}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"record.chosenSchedule.address\" class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Address:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.address }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Location:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.city }}, {{ record.chosenSchedule.province }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Date:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.startDateTime | date:'mediumDate' }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Time:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.startDateTime | date:'shortTime' }} - {{ record.chosenSchedule.endDateTime | date:'shortTime' }}</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Order Deadline:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.chosenSchedule.orderDeadline | date:'mediumDate' }} - {{ record.chosenSchedule.orderDeadline | date:'shortTime' }}</p>\n        </div>\n      </div>\n\n      <div *ngIf=\"record.chosenSchedule.type === 'Door-to-door Delivery'\">\n            \n        <div class=\"row\">\n          <div class=\"col-4 text-right\">\n            <strong>Delivery Fee:</strong>\n          </div>\n          <div class=\"col-8\">\n            <p>{{ record.chosenSchedule.fee | currency:'USD':true:'1.2-2' }}</p>\n          </div>\n        </div>\n      \n        <div class=\"row\">\n          <div class=\"col-4 text-right\">\n            <strong>Fee Waiver Amount:</strong>\n          </div>\n          <div class=\"col-8\">\n            <p *ngIf=\"record.chosenSchedule.feeWiaver\">{{ record.chosenSchedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n            <p *ngIf=\"!record.chosenSchedule.feeWiaver\">None. Fee applies to all orders.</p>\n          </div>\n        </div>\n      \n      </div>\n      \n      <hr>                \n\n    </div>\n\n  </div>\n    \n</div>\n  \n<div class=\"modal-footer justify-content-center\">\n  <div class=\"row\">\n      <div>\n          <a (click)=\"activeModal.close()\">Close</a>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrderModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_order_model__ = __webpack_require__("./src/app/core/models/order.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewOrderModalComponent = /** @class */ (function () {
    function ViewOrderModalComponent(activeModal) {
        this.activeModal = activeModal;
        // build the products array to use in the table
        this.products = [
            {
                id: null,
                name: '',
                quantity: null,
                value: null
            }
        ];
    }
    ViewOrderModalComponent.prototype.ngOnInit = function () {
        this.buildProductsArray();
    };
    ViewOrderModalComponent.prototype.buildProductsArray = function () {
        var newProduct = {
            id: null,
            name: '',
            quantity: null,
            value: null
        };
        var array = this.record.orderDetails.productQuantities;
        // for each product in the productQuantities array, get the id, qty and value
        for (var i = 0; i < array.length; i++) {
            newProduct.id = array[i].productId;
            newProduct.quantity = array[i].orderQuantity;
            newProduct.value = array[i].orderValue;
            newProduct.name = this.getProductName(newProduct.id);
            this.products.push(newProduct);
        }
        // use the id to get the name from the productList array
    };
    ViewOrderModalComponent.prototype.getProductName = function (id) {
        for (var j = 0; j < this.record.productList.length; j++) {
            if (this.record.productList[j].id === id) {
                return this.record.productList[j].name;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_order_model__["a" /* OrderModel */])
    ], ViewOrderModalComponent.prototype, "record", void 0);
    ViewOrderModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-view-order-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ViewOrderModalComponent);
    return ViewOrderModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Add a New Product</h5>\n  <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n          \n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> <!-- this binds the viewed form to the form we build in the component class --> \n  <div class=\"modal-body dash-modal-body\">\n      <div>\n          <div class=\"row\">\n              <label for=\"name\" class=\"col-4 col-form-label text-right\">Product Name</label>\n              <div class=\"col-8\">\n                  <input \n                      class=\"form-control\" \n                      type=\"text\" \n                      id=\"name\" \n                      [formControl]=\"form.controls['name']\">\n                      <small \n                          *ngIf=\"!form.get('name').valid && form.get('name').touched\"\n                          class=\"help-block\"\n                          >Please enter a name for the product.</small>\n              </div>\n          </div>\n          <div class=\"row\">\n              <label for=\"description\" class=\"col-4 col-form-label text-right\">Description</label>\n              <div class=\"col-8\">\n                  <input \n                      class=\"form-control\" \n                      type=\"text\" \n                      id=\"description\" \n                      [formControl]=\"form.controls['description']\">\n              </div>\n          </div>\n\n          <div class=\"row\">\n              <label for=\"imagePath\" class=\"col-4 col-form-label text-right\">Image URL</label>\n              <div class=\"col-8\">\n                  <input \n                      class=\"form-control\" \n                      type=\"text\" \n                      id=\"imagePath\" \n                      [formControl]=\"form.controls['image']\">\n              </div>\n          </div>\n\n          <div class=\"row\">\n              <label for=\"pricePerUnit\" class=\"col-4 col-form-label text-right\">Price Per Unit</label>\n              <div class=\"col-8 input-group\">\n                  <div class=\"input-group-addon\">$</div>\n                  <input \n                      class=\"form-control\" \n                      type=\"number\"\n                      min=\"0\"\n                      step=\"any\"\n                      id=\"pricePerUnit\" \n                      [formControl]=\"form.controls['pricePerUnit']\">\n              </div>\n          </div>\n\n          <br>\n\n          <div class=\"row\">\n              <label for=\"unit\" class=\"col-4 col-form-label text-right\">Pricing Unit</label>\n              <div class=\"col-8\">\n                  <select class=\"custom-select float-left\" name=\"unit\" [formControl]=\"form.controls['unit']\">\n                      <option selected value=\"\">Select a Unit</option>\n                      <option value=\"lb\">Pound</option>\n                      <option value=\"kg\">Kilo</option>\n                      <option value=\"ea\">Each</option>\n                      <option value=\"pkg\">Package</option>\n                  </select>\n              </div>\n          </div>\n\n          <br>\n\n          <div class=\"row\">\n              <label for=\"unitsPer\" class=\"col-4 col-form-label text-right\">Units Per Final Product</label>\n              <div class=\"col-8 input-group\">\n                  <input \n                      class=\"form-control\" \n                      type=\"number\"\n                      min=\"0\"\n                      step=\".1\"\n                      id=\"unitsPer\" \n                      [formControl]=\"form.controls['unitsPer']\">\n              </div>\n              <div class=\"col-8 offset-4\">\n                  <small class=\"form-text text-muted text-right\">If your final product contains more than 1 unit (like a 5 lb chicken), change this to the average number of units per final product. We can use this to calculate an estimated final price for the consumer.</small>\n              </div>\n          </div>\n\n          <br>\n\n          \n\n          <br>\n\n          <!-- category -->\n        <div class=\"row\">\n                <label for=\"category\" class=\"col-4 col-form-label text-right\">Category:</label>\n                <div class=\"col-8\">\n                    <select \n                      class=\"custom-select float-left\" \n                      name=\"category\" \n                      formControlName=\"category\">\n                        <option selected value=\"\">Choose a Category</option>\n                        <option value=\"Dairy & Eggs\">Dairy & Eggs</option>\n                        <option value=\"Meat\">Meat</option>\n                        <option value=\"Produce\">Produce</option>\n                        <option value=\"Value-added\">Value-added</option>\n                    </select>\n                </div>\n            </div>\n      \n            <br>\n      \n          <!-- subcategory -->\n            <div class=\"row\">\n                <label for=\"subcategory\" class=\"col-4 col-form-label text-right\">Subcategory</label>\n                <!-- dairy/egg subcategories -->\n                <div class=\"col-8\" *ngIf=\"form.value.category === 'Dairy & Eggs'\">\n                        <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                            <option selected value=\"\">Choose a Subcategory</option>\n                            <option value=\"Cheese\">Cheese</option>\n                            <option value=\"Eggs\">Eggs</option>\n                            <option value=\"Yogurt\">Yogurt</option>\n                            <option value=\"Other\">Other</option>\n                        </select>\n                    </div>\n                <!-- meat subcategories -->\n                <div class=\"col-8\" *ngIf=\"form.value.category === 'Meat'\">\n                    <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                        <option selected value=\"\">Choose a Subcategory</option>\n                        <option value=\"Beef\">Beef</option>\n                        <option value=\"Bison\">Bison</option>\n                        <option value=\"Chicken\">Chicken</option>\n                        <option value=\"Fish\">Fish</option>\n                        <option value=\"Lamb\">Lamb</option>\n                        <option value=\"Pork\">Pork</option>\n                        <option value=\"Turkey\">Turkey</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n                <!-- produce subcategories -->\n                <div class=\"col-8\" *ngIf=\"form.value.category === 'Produce'\">\n                    <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                        <option selected value=\"\">Choose a Subcategory</option>\n                        <option value=\"Apples\">Apples</option>\n                        <option value=\"Arugula\">Arugula</option>\n                        <option value=\"Beans\">Beans</option>\n                        <option value=\"Beets\">Beets</option>\n                        <option value=\"Berries\">Berries</option>\n                        <option value=\"Cabbage\">Cabbage</option>\n                        <option value=\"Carrots\">Carrots</option>\n                        <option value=\"Corn\">Corn</option>\n                        <option value=\"Cucumbers\">Cucumbers</option>\n                        <option value=\"Eggplant\">Eggplant</option>\n                        <option value=\"Garlic\">Garlic</option>\n                        <option value=\"Herbs\">Herbs</option>\n                        <option value=\"Kale\">Kale</option>\n                        <option value=\"Leeks\">Leeks</option>\n                        <option value=\"Lentils\">Lentils</option>\n                        <option value=\"Lettuce\">Lettuce</option>\n                        <option value=\"Onions\">Onions</option>\n                        <option value=\"Parsnips\">Parsnips</option>\n                        <option value=\"Peas\">Peas</option>\n                        <option value=\"Peppers\">Peppers</option>\n                        <option value=\"Potatoes\">Potatoes</option>\n                        <option value=\"Pumpkin\">Pumpkin</option>\n                        <option value=\"Radishes\">Radishes</option>\n                        <option value=\"Spinach\">Spinach</option>\n                        <option value=\"Squash\">Squash</option>\n                        <option value=\"Swiss Chard\">Swiss Chard</option>\n                        <option value=\"Tomatoes\">Tomatoes</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n                <!-- value added subs -->\n                <div class=\"col-8\" *ngIf=\"form.value.category === 'Value-added'\">\n                    <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                        <option selected value=\"\">Choose a Subcategory</option>\n                        <option value=\"Baking\">Baking</option>\n                        <option value=\"Flour\">Flour</option>\n                        <option value=\"Grains\">Grains</option>\n                        <option value=\"Honey\">Honey</option>\n                        <option value=\"Perogies\">Perogies</option>\n                        <option value=\"Personal Care\">Personal Care</option>\n                        <option value=\"Preserves\">Preserves</option>\n                        <option value=\"Soup\">Soup</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n            </div>\n\n          <div class=\"row\">\n              <label for=\"qtyAvailable\" class=\"col-4 col-form-label text-right\">Quantity Available</label>\n              <div class=\"col-8 input-group\">\n                  <input \n                      class=\"form-control\" \n                      type=\"number\"\n                      min=\"0\"\n                      step=\"1\"\n                      id=\"qtyAvailable\" \n                      [formControl]=\"form.controls['qtyAvailable']\">\n              </div>\n          </div>\n          \n      </div>\n  </div>\n  <div class=\"modal-footer justify-content-center\">\n      <div class=\"row\">\n          <div>\n              <button class=\"btn btn-olf-primary\" type=\"submit\">Add to Products</button>\n              <a (click)=\"close()\">Cancel Changes</a>\n          </div>\n      </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductModalComponent = /** @class */ (function () {
    function AddProductModalComponent(dashboardService, formBuild, activeModal, apiService) {
        this.dashboardService = dashboardService;
        this.formBuild = formBuild;
        this.activeModal = activeModal;
        this.apiService = apiService;
        this.itemCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.form = formBuild.group({
            'id': [''],
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'description': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'image': [''],
            'pricePerUnit': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'unit': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'unitsPer': [1, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'category': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'subcategory': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'dateAdded': [new Date().toISOString()],
            'qtyAvailable': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'qtyPending': [0],
            'qtyAccepted': [0],
            'qtyCompleted': [0],
            'isObsolete': [false],
            'producerId': [''],
            'producer': [''],
            'scheduleList': ['']
        });
    }
    AddProductModalComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        this.form.value.producerId = this.producer.id;
        this.form.value.producer = this.producer;
        // console.log(this.form.value);
        // this.dashboardService.addNewProduct(this.form.value);
        this.apiService.postProduct(this.form.value)
            .subscribe(function (result) {
            _this.itemCreated.emit(result);
            _this.activeModal.close();
        });
    };
    AddProductModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getProducer()
            .subscribe(function (result) {
            _this.producer = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], AddProductModalComponent.prototype, "itemCreated", void 0);
    AddProductModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-product-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__producer_dashboard_service__["a" /* ProducerDashboardService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */]])
    ], AddProductModalComponent);
    return AddProductModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete (obsolete) this product</h4>\n  </div>\n\n  <div class=\"modal-body dash-modal-body\">\n    <app-submitting *ngIf=\"submitting\"></app-submitting>\n\n    <div *ngIf=\"!submitting\">\n\n      <div *ngIf=\"!record.isObsolete\">\n        <div *ngIf=\"hasPending\">\n          <p class=\"mt-3 alert alert-danger\">\n            <strong>Uh Oh!</strong> It looks like this product has {{record.qtyPending }} order(s) pending. That means it can't be marked as obsolete. Once the outstanding orders are complete, you can try again.\n          </p>\n        </div>\n    \n        <div *ngIf=\"!hasPending\">\n          <p class=\"mt-3 alert alert-danger\">\n            <strong>Are you sure?</strong> By clicking 'Confirm' below, you will be marking <strong>{{ record.name }}</strong> 'Obsolete'. It will no longer show up in your Product List.\n            <br>\n            <small>(But don't worry, you can always 'unobsolete' it later!)</small>\n          </p>\n          <button\n            type=\"button\" \n            class=\"btn btn-danger\" \n            (click)=\"onObsolete()\"\n            >Confirm</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"record.isObsolete\">\n          <p class=\"mt-3 alert alert-danger\">\n            <strong>Last chance!</strong> Once you click 'Confirm' below, <strong>{{ record.name }}</strong> will be deleted...Forever.\n          </p>\n          <button\n            type=\"button\" \n            class=\"btn btn-danger\" \n            (click)=\"onDelete()\"\n            >Confirm</button>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\" \n      class=\"btn btn-olf-primary\" \n      (click)=\"activeModal.close()\"\n      >Cancel Delete</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteProductModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
// import { Component, OnInit, Input } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { ApiService } from '../../../../../../core/api.service';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ProductModel } from '../../../../../../core/models/product.model';
// @Component({
//   selector: 'app-delete-product-modal',
//   templateUrl: './delete-product-modal.component.html',
//   styleUrls: ['./delete-product-modal.component.scss']
// })
// export class DeleteProductModalComponent implements OnInit {
//   @Input() record: ProductModel;
//   submitObject: ProductModel;
//   hasPending: boolean;
//   submitting: boolean;
//   error: boolean;
//   constructor(private activeModal: NgbActiveModal,
//               private api: ApiService) { }
//   ngOnInit() {
//     if (this.record.qtyPending > 0) {
//       this.hasPending = true;
//     } else {
//       this.submitObject = this.record;
//     }
//   }
//   onObsolete() {
//     this.submitObject.qtyAvailable = 0;
//     this.submitObject.isObsolete = true;
//     this.submitting = true;
//     this.api.putProduct(this.record.id, this.submitObject)
//       .subscribe(
//         response => {
//           this.submitting = false;
//           this.activeModal.close();
//         },
//         err => {
//           console.error(err);
//           this.submitting = false;
//           this.error = true;
//         }
//       )
//   }
//   onDelete() {
//     this.submitting = true;
//     this.api.deleteProduct(this.record.id)
//       .subscribe(
//         response => {
//           this.submitting = false;
//           this.activeModal.close();
//         },
//         err => {
//           console.error(err);
//           this.submitting = false;
//           this.error = true;
//         }
//       )
//   }
// }




var DeleteProductModalComponent = /** @class */ (function () {
    function DeleteProductModalComponent(activeModal, api) {
        this.activeModal = activeModal;
        this.api = api;
        this.onProductDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onProductObsolete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DeleteProductModalComponent.prototype.ngOnInit = function () {
        if (this.record.qtyPending > 0) {
            this.hasPending = true;
        }
        else {
            this.submitObject = this.record;
        }
    };
    ;
    DeleteProductModalComponent.prototype.onObsolete = function () {
        var _this = this;
        this.submitObject.qtyAvailable = 0;
        this.submitObject.isObsolete = true;
        this.submitting = true;
        this.subscription = this.api.putProduct(this.record.id, this.submitObject)
            .subscribe(function (response) {
            console.log('modal obsolete done: ', response.id);
            _this.handleObsoleteSuccess(response);
        }, function (err) {
            _this.handleSubmitError(err);
        });
    };
    ;
    DeleteProductModalComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitting = true;
        this.subscription = this.api.deleteProduct(this.record.id)
            .subscribe(function (response) {
            console.log('modal delete done: ', _this.record.id);
            _this.handleDeleteSuccess(_this.record.id);
        }, function (err) {
            _this.handleSubmitError(err);
        });
    };
    ;
    DeleteProductModalComponent.prototype.handleDeleteSuccess = function (id) {
        this.submitting = false;
        this.onProductDelete.emit(id);
        // close modal
        this.activeModal.close();
    };
    ;
    DeleteProductModalComponent.prototype.handleObsoleteSuccess = function (response) {
        this.submitting = false;
        this.onProductObsolete.emit(response);
        // close modal
        this.activeModal.close();
    };
    ;
    DeleteProductModalComponent.prototype.handleSubmitError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    ;
    DeleteProductModalComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_product_model__["a" /* ProductModel */])
    ], DeleteProductModalComponent.prototype, "record", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], DeleteProductModalComponent.prototype, "onProductDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], DeleteProductModalComponent.prototype, "onProductObsolete", void 0);
    DeleteProductModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-delete-product-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */]])
    ], DeleteProductModalComponent);
    return DeleteProductModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Edit: {{ record.name | uppercase }}</h5>\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n<div class=\"modal-body dash-modal-body\">\n\n    <div *ngIf=\"record.isObsolete\">\n        <p>\n            By clicking 'Renew Product' below, you can return {{ record.name }} to your Product List. You will still have to adjust the quantity available, as well as make any other changes you deem fit.\n        </p>\n\n        <!-- Renew -->\n        <button\n            type=\"button\"\n            class=\"btn btn-olf-primary\"\n            (click)=\"onRenew()\"\n            >Renew Product</button>\n    \n        <!-- Cancel -->\n        <button\n            type=\"button\" \n            class=\"btn btn-olf-primary\" \n            (click)=\"activeModal.close()\"\n            >Cancel Renewal</button>\n    </div>\n  \n    <form *ngIf=\"!submitting\" [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n        \n        <!-- Name -->\n        <div class=\"row\">\n            <label for=\"name\" class=\"col-4 col-form-label text-right\">Name:</label>\n            <div class=\"col-8\">\n                <input \n                  id=\"name\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"name\">\n            </div>\n        </div>\n      \n        <!-- Description -->\n        <div class=\"row\">\n            <label for=\"description\" class=\"col-4 col-form-label text-right\">Description</label>\n            <div class=\"col-8\">\n                <textarea \n                  class=\"form-control\" \n                  rows=\"3\" \n                  id=\"description\" \n                  formControlName=\"description\"></textarea>\n            </div>\n        </div>\n  \n      <!-- image -->\n        <div class=\"row\">\n            <label for=\"image\" class=\"col-4 col-form-label text-right\">Image URL:</label>\n            <div class=\"col-8\">\n                <input \n                    class=\"form-control\" \n                    type=\"text\" \n                    id=\"image\" \n                    formControlName=\"image\">\n            </div>\n        </div>\n  \n      <!-- price per unit -->\n        <div class=\"row\">\n            <label for=\"pricePerUnit\" class=\"col-4 col-form-label text-right\">Price Per Unit</label>\n            <div class=\"col-8 input-group\">\n                <div class=\"input-group-addon\">$</div>\n                <input \n                    class=\"form-control\" \n                    type=\"number\"\n                    min=\"0\"\n                    step=\"any\"\n                    id=\"pricePerUnit\" \n                    formControlName=\"pricePerUnit\">\n            </div>\n        </div>\n  \n        <br>\n  \n      <!-- unit -->\n        <div class=\"row\">\n            <label for=\"unit\" class=\"col-4 col-form-label text-right\">Pricing Unit</label>\n            <div class=\"col-8\">\n                <select class=\"custom-select float-left\" name=\"unit\" formControlName=\"unit\">\n                    <option selected value=\"\">Select a Unit</option>\n                    <option value=\"lb\">Pound</option>\n                    <option value=\"kg\">Kilo</option>\n                    <option value=\"ea\">Each</option>\n                    <option value=\"pkg\">Package</option>\n                </select>\n            </div>\n        </div>\n  \n        <br>\n      \n      <!-- units per -->\n        <div class=\"row\">\n            <label for=\"unitsPer\" class=\"col-4 col-form-label text-right\">Units Per Final Product</label>\n            <div class=\"col-8 input-group\">\n                <input \n                    class=\"form-control\" \n                    type=\"number\"\n                    min=\"0\"\n                    step=\".1\"\n                    id=\"unitsPer\" \n                    formControlName=\"unitsPer\">\n            </div>\n            <div class=\"col-8 offset-4\">\n                <small class=\"form-text text-muted text-right\">If your final product contains more than 1 unit (like a 5 lb chicken), change this to the average number of units per final product. We can use this to calculate an estimated final price for the consumer.</small>\n            </div>\n        </div>\n  \n        <br>\n        \n      <!-- category -->\n        <div class=\"row\">\n            <label for=\"category\" class=\"col-4 col-form-label text-right\">Category:</label>\n            <div class=\"col-8\">\n                <select \n                  class=\"custom-select float-left\" \n                  name=\"category\" \n                  formControlName=\"category\">\n                    <option selected value=\"\">Choose a Category</option>\n                    <option value=\"Dairy & Eggs\">Dairy & Eggs</option>\n                    <option value=\"Meat\">Meat</option>\n                    <option value=\"Produce\">Produce</option>\n                    <option value=\"Value-added\">Value-added</option>\n                </select>\n            </div>\n        </div>\n  \n        <br>\n  \n      <!-- subcategory -->\n        <div class=\"row\">\n            <label for=\"subcategory\" class=\"col-4 col-form-label text-right\">Subcategory</label>\n            <!-- dairy/egg subcategories -->\n            <div class=\"col-8\" *ngIf=\"productForm.value.category === 'Dairy & Eggs'\">\n                    <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                        <option selected value=\"\">Choose a Subcategory</option>\n                        <option value=\"Cheese\">Cheese</option>\n                        <option value=\"Eggs\">Eggs</option>\n                        <option value=\"Yogurt\">Yogurt</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n            <!-- meat subcategories -->\n            <div class=\"col-8\" *ngIf=\"productForm.value.category === 'Meat'\">\n                <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                    <option selected value=\"\">Choose a Subcategory</option>\n                    <option value=\"Beef\">Beef</option>\n                    <option value=\"Bison\">Bison</option>\n                    <option value=\"Chicken\">Chicken</option>\n                    <option value=\"Fish\">Fish</option>\n                    <option value=\"Lamb\">Lamb</option>\n                    <option value=\"Pork\">Pork</option>\n                    <option value=\"Turkey\">Turkey</option>\n                    <option value=\"Other\">Other</option>\n                </select>\n            </div>\n            <!-- produce subcategories -->\n            <div class=\"col-8\" *ngIf=\"productForm.value.category === 'Produce'\">\n                <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                    <option selected value=\"\">Choose a Subcategory</option>\n                    <option value=\"Apples\">Apples</option>\n                    <option value=\"Arugula\">Arugula</option>\n                    <option value=\"Beans\">Beans</option>\n                    <option value=\"Beets\">Beets</option>\n                    <option value=\"Berries\">Berries</option>\n                    <option value=\"Cabbage\">Cabbage</option>\n                    <option value=\"Carrots\">Carrots</option>\n                    <option value=\"Corn\">Corn</option>\n                    <option value=\"Cucumbers\">Cucumbers</option>\n                    <option value=\"Eggplant\">Eggplant</option>\n                    <option value=\"Garlic\">Garlic</option>\n                    <option value=\"Herbs\">Herbs</option>\n                    <option value=\"Kale\">Kale</option>\n                    <option value=\"Leeks\">Leeks</option>\n                    <option value=\"Lentils\">Lentils</option>\n                    <option value=\"Lettuce\">Lettuce</option>\n                    <option value=\"Onions\">Onions</option>\n                    <option value=\"Parsnips\">Parsnips</option>\n                    <option value=\"Peas\">Peas</option>\n                    <option value=\"Peppers\">Peppers</option>\n                    <option value=\"Potatoes\">Potatoes</option>\n                    <option value=\"Pumpkin\">Pumpkin</option>\n                    <option value=\"Radishes\">Radishes</option>\n                    <option value=\"Spinach\">Spinach</option>\n                    <option value=\"Squash\">Squash</option>\n                    <option value=\"Swiss Chard\">Swiss Chard</option>\n                    <option value=\"Tomatoes\">Tomatoes</option>\n                    <option value=\"Other\">Other</option>\n                </select>\n            </div>\n            <!-- value added subs -->\n            <div class=\"col-8\" *ngIf=\"productForm.value.category === 'Value-added'\">\n                <select class=\"custom-select float-left\" name=\"subcategory\" formControlName=\"subcategory\">\n                    <option selected value=\"\">Choose a Subcategory</option>\n                    <option value=\"Baking\">Baking</option>\n                    <option value=\"Flour\">Flour</option>\n                    <option value=\"Grains\">Grains</option>\n                    <option value=\"Honey\">Honey</option>\n                    <option value=\"Perogies\">Perogies</option>\n                    <option value=\"Personal Care\">Personal Care</option>\n                    <option value=\"Preserves\">Preserves</option>\n                    <option value=\"Soup\">Soup</option>\n                    <option value=\"Other\">Other</option>\n                </select>\n            </div>\n        </div>\n  \n      <!-- qty available -->\n        <div class=\"row\">\n            <label for=\"qtyAvailable\" class=\"col-4 col-form-label text-right\">Quantity Available:</label>\n            <div class=\"col-8 input-group\">\n                <input \n                    class=\"form-control\" \n                    type=\"number\"\n                    min=\"0\"\n                    step=\"1\"\n                    id=\"qtyAvailable\" \n                    formControlName=\"qtyAvailable\">\n            </div>\n        </div>\n      \n        <!-- Submit -->\n        <div class=\"form-group\" *ngIf=\"!submitting\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-olf-primary\"\n            [attr.disabled]=\"productForm.invalid || submitting ? true : null\"\n          >Submit Changes</button>\n            <!-- https://github.com/angular/angular/issues/11271#issuecomment-289806196 -->\n      \n          <!-- API submission error -->\n          <p *ngIf=\"error\" class=\"mt-3 alert alert-danger\">\n            <strong>Error:</strong> There was a problem submitting the event. Please try again.\n          </p>\n        </div>\n      </form>\n  \n      <app-loading *ngIf=\"submitting\"></app-loading>\n  \n  </div>\n\n  <div class=\"modal-footer justify-content-center\">\n    <div class=\"row\">\n        <div>\n            <a (click)=\"activeModal.close()\">Cancel Changes</a>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProductModalComponent = /** @class */ (function () {
    function EditProductModalComponent(fb, router, api, activeModal) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.activeModal = activeModal;
        this.submitting = false;
    }
    EditProductModalComponent.prototype.ngOnInit = function () {
        this.initialProduct = this.setInitialProduct();
        this.buildForm();
        this.calculateTotalValue();
    };
    EditProductModalComponent.prototype.setInitialProduct = function () {
        return new __WEBPACK_IMPORTED_MODULE_5__core_models_product_model__["a" /* ProductModel */](this.record.id, this.record.name, this.record.description, this.record.image, this.record.pricePerUnit, this.record.unit, this.record.unitsPer, this.record.category, this.record.subcategory, this.record.producer, this.record.dateAdded, this.record.qtyAvailable, this.record.qtyPending, this.record.qtyAccepted, this.record.qtyCompleted, this.record.isObsolete, this.record.scheduleList);
    };
    EditProductModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.productForm = this.fb.group({
            name: [this.record.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            description: [this.record.description, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            image: [this.record.image, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            pricePerUnit: [this.record.pricePerUnit, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            unit: [this.record.unit, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            unitsPer: [this.record.unitsPer, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            category: [this.record.category, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            subcategory: [this.record.subcategory, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]],
            qtyAvailable: [this.record.qtyAvailable, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]]
        });
        // Subscribe to form value changes
        this.formChangeSub = this.productForm
            .valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    ;
    EditProductModalComponent.prototype.calculateTotalValue = function () {
        this.totalProductValue = this.productForm.value.pricePerUnit * this.productForm.value.unitsPer;
    };
    EditProductModalComponent.prototype.onValueChanged = function () {
        this.calculateTotalValue();
    };
    ;
    EditProductModalComponent.prototype.setSubmitObject = function () {
        // make it equal to the original record
        this.submitObject = this.record;
        // then add the fields from the form
        this.submitObject.name = this.productForm.value.name;
        this.submitObject.description = this.productForm.value.description;
        this.submitObject.image = this.productForm.value.image;
        this.submitObject.pricePerUnit = this.productForm.value.pricePerUnit;
        this.submitObject.unit = this.productForm.value.unit;
        this.submitObject.unitsPer = this.productForm.value.unitsPer;
        this.submitObject.category = this.productForm.value.category;
        this.submitObject.subcategory = this.productForm.value.subcategory;
        this.submitObject.qtyAvailable = this.productForm.value.qtyAvailable;
    };
    EditProductModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        this.setSubmitObject();
        console.log('submitted object: ', this.submitObject);
        this.submitProductSub = this.api
            .putProduct(this.record.id, this.submitObject)
            .subscribe(function (data) { return _this.handleSubmitSuccess(data); }, function (err) { return _this.handleSubmitError(err); });
    };
    ;
    EditProductModalComponent.prototype.onRenew = function () {
        var _this = this;
        this.submitting = true;
        this.setSubmitObject();
        this.submitObject.isObsolete = false;
        this.api.putProduct(this.record.id, this.submitObject)
            .subscribe(function (response) {
            _this.submitting = false;
            _this.activeModal.close();
        }, function (err) {
            _this.handleSubmitError(err);
        });
    };
    EditProductModalComponent.prototype.handleSubmitSuccess = function (res) {
        this.submitting = false;
        // close modal
        this.activeModal.close();
    };
    ;
    EditProductModalComponent.prototype.handleSubmitError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    ;
    EditProductModalComponent.prototype.ngOnDestroy = function () {
        if (this.submitProductSub) {
            this.submitProductSub.unsubscribe();
        }
        this.formChangeSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__core_models_product_model__["a" /* ProductModel */])
    ], EditProductModalComponent.prototype, "record", void 0);
    EditProductModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-edit-product-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], EditProductModalComponent);
    return EditProductModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\"> Viewing {{ record.name | uppercase }}</h5>\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  \n  <div class=\"modal-body dash-modal-body\">\n  \n    <div class=\"row\">\n      <div class=\"col-4 offset-4\">\n        <img src=\"../../assets/images/{{ record.image }}\" class=\"img-fluid\" alt=\"\">\n      </div>\n    </div>\n\n    <br>\n    \n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Name:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.name }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Category:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.category }} > {{ record.subcategory }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Description:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.description }}</p>\n    </div>\n    </div>\n    \n    <hr>\n    \n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Price per Unit:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.pricePerUnit | currency:'USD':true:'1.2-2' }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Unit:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.unit | uppercase }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Units Per Product:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.unitsPer }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Average Product Price:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ totalPrice | currency:'USD':true:'1.2-2' }}</p>\n    </div>\n    </div>\n    \n    <hr>\n    \n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Available:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.qtyAvailable }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Pending:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.qtyPending }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Accepted:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.qtyAccepted }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Completed:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.qtyCompleted }}</p>\n    </div>\n    </div>\n      \n    <hr>\n    \n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Date Added:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.dateAdded | date:'mediumDate' }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Status:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p *ngIf=\"!record.isObsolete\">Active</p>\n      <p *ngIf=\"record.isObsolete\">Obsolete</p>\n    </div>\n    </div>\n  \n  </div>\n  \n  <div class=\"modal-footer justify-content-center\">\n    <div class=\"row\">\n        <div>\n            <a (click)=\"activeModal.close()\">Close</a>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProductModalComponent = /** @class */ (function () {
    function ViewProductModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ViewProductModalComponent.prototype.ngOnInit = function () {
        this.totalPrice = this.calculateTotalPrice();
    };
    ViewProductModalComponent.prototype.calculateTotalPrice = function () {
        return (this.record.pricePerUnit * this.record.unitsPer);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_product_model__["a" /* ProductModel */])
    ], ViewProductModalComponent.prototype, "record", void 0);
    ViewProductModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-view-product-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ViewProductModalComponent);
    return ViewProductModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n        <h5 class=\"modal-title\">Add a New Schedule</h5>\n        <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n                \n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\"> <!-- this binds the viewed form to the form we build in the component class --> \n        <div class=\"modal-body dash-modal-body\">\n        \n            <app-submitting *ngIf=\"submitting\"></app-submitting>\n        \n            <div *ngIf=\"!submitting\">\n            \n            <!-- SELECT SCHEDULE TYPE BEFORE ANY OTHER OPTIONS SHOWN -->\n                <div class=\"row\">\n                    <label for=\"type\" class=\"col-4 col-form-label text-right\">Schedule Type</label>\n                    <div class=\"col-8\">\n                      <select class=\"custom-select float-left\" name=\"type\" [(ngModel)]=\"type\" [formControl]=\"form.controls['type']\">\n                          <option selected value=\"\">Select a Type</option>\n                          <option value=\"Door-to-door Delivery\">Door-to-door Delivery</option>\n                          <option value=\"Market Pickup\">Market Pickup</option>\n                          <option value=\"On-farm Pickup\">On-farm Pickup</option>\n                          <option value=\"Off-farm Pickup\">Other Pickup</option>\n                      </select>\n                      <small \n                          *ngIf=\"!form.get('type').valid && form.get('type').touched\"\n                          class=\"help-block\"\n                          >Please select the type of delivery or pickup you are planning.</small>\n                    </div>\n                </div>\n                \n            <!-- AFTER TYPE SELECTED, GOOGLE MAPS API SEARCH FOR COMMUNITY -->\n            <!-- Note: this has to be hidden, if locked in an ngIf it will throw an error in the console -->\n                <div class=\"row\" [class.hidden]=\"!type || type === 'On-farm Pickup'\">\n                      <label for=\"search\" class=\"col-4 col-form-label text-right\">Search for Community:</label>\n                      <div class=\"col-8\">\n                            <input  \n                                autocorrect=\"off\" \n                                autocapitalize=\"off\" \n                                spellcheck=\"off\" \n                                type=\"text\" \n                                class=\"form-control\" \n                                #search \n                                id=\"search\"\n                                [formControl]=\"searchControl\">\n                      </div>\n                      \n                    <!-- <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n                        <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                      </agm-map> -->\n                </div>\n    \n            <!-- options required for ALL types -->\n                <div *ngIf=\"type\">\n    \n                <!-- options for EVERYTHING EXCEPT FARMGATE -->\n                  <div *ngIf=\"type !== 'On-farm Pickup'\">\n    \n                      <div *ngIf=\"this.form.value.address\" class=\"row\">\n                          <label for=\"address\" class=\"col-4 col-form-label text-right\">Address:</label>\n                          <div class=\"col-8 input-group\">\n                              <p>{{ this.form.value.address }}</p>\n                          </div>\n                      </div>\n    \n                      <div *ngIf=\"this.form.value.city\" class=\"row\">\n                          <label for=\"city\" class=\"col-4 col-form-label text-right\">City/Town:</label>\n                          <div class=\"col-8 input-group\">\n                              <p>{{ this.form.value.city }}, {{ this.form.value.province }}</p>\n                          </div>\n                      </div>\n            \n                      <br>\n                      \n                  </div>\n                    \n                <!-- DESCRIPTION -->\n                  <div class=\"row\">\n                      <label for=\"description\" class=\"col-4 col-form-label text-right\">Description</label>\n                      <div class=\"col-8\">\n                          <textarea \n                              class=\"form-control\" \n                              type=\"text\" \n                              id=\"description\" \n                              [formControl]=\"form.controls['description']\"></textarea>\n                      </div>\n                  </div>\n                  \n                  <!-- REPEAT? -->\n                  \n                  <div class=\"row\">\n                        <label class=\"col-4 col-form-label text-right\">Does this schedule repeat?</label>\n                        <div class=\"col-8 pl-5\">\n                            <div class=\"form-check form-check-inline\">\n                              <input \n                                [formControl]=\"form.controls['repeat']\" \n                                type=\"radio\" \n                                name=\"repeatYes\" \n                                [(ngModel)]=\"isRepeat\"\n                                id=\"repeatYes\" \n                                [value]=\"true\">\n                              <label class=\"form-check-label\" for=\"repeatYes\">Yes</label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                              <input \n                                [formControl]=\"form.controls['repeat']\" \n                                type=\"radio\" \n                                name=\"repeatNo\"\n                                [(ngModel)]=\"isRepeat\" \n                                id=\"repeatNo\" \n                                [value]=\"false\">\n                              <label class=\"form-check-label\" for=\"repeatNo\">No</label>\n                            </div>\n                        </div>\n                    </div>\n                    \n                <!-- DATE - IS REPEAT - USES DATEPICKER MODULE -->\n                  <div *ngIf=\"isRepeat\" class=\"row\">\n                      <label for=\"dates\" class=\"col-4 col-form-label text-right\">Dates:</label>\n                      <div class=\"col-8\">\n                        <input \n                            [owlDateTime]=\"dates\" \n                            [owlDateTimeTrigger]=\"dates\" \n                            [selectMode]=\"'range'\"\n                            [(ngModel)]=\"dateMoments\"\n                            [ngModelOptions]=\"{standalone: true}\"\n                            (onConfirm)=\"onChooseMultipleDates(value)\"\n                            formControlName=\"dates\"\n                            ngDefaultControl\n                            >\n                        <owl-date-time \n                            #dates\n                            [showButtons]=\"true\"\n                            [dateFormat]=\"'YYYY-MM-DD'\"\n                            [pickerType]=\"'calendar'\" \n                            [placeHolder]=\"'YYYY-MM-DD'\"\n                            [inputId]=\"'dates'\"\n                            [min]=\"moment\"\n                            ></owl-date-time>\n                      </div>\n                  </div>\n        \n                <!-- DATE - NOT REPEAT - USES DATEPICKER MODULE -->\n                  <div *ngIf=\"!isRepeat\" class=\"row\">\n                      <label for=\"date\" class=\"col-4 col-form-label text-right\">Date:</label>\n                      <div class=\"col-8\">\n                        <input \n                            [owlDateTime]=\"date\" \n                            [owlDateTimeTrigger]=\"date\" \n                            [(ngModel)]=\"dateMoment\" \n                            (ngModelChange)=\"onChooseDate()\"\n                            [ngModelOptions]=\"{standalone: true}\"\n                            [formControl]=\"form.controls['date']\"\n                            ngDefaultControl>\n                        <owl-date-time\n                            #date\n                            [dateFormat]=\"'YYYY-MM-DD'\"\n                            [pickerType]=\"'calendar'\" \n                            [placeHolder]=\"'YYYY-MM-DD'\"\n                            [autoClose]=\"true\"\n                            [inputId]=\"'date'\"\n                            [min]=\"moment\"\n                            ></owl-date-time>\n                      </div>\n                  </div>\n\n                  <!-- START TIME - USES DATEPICKER MODULE -->\n                  <div class=\"row\">\n                      <label for=\"input3\" class=\"col-4 col-form-label text-right\">Start Time:</label>\n                      <div class=\"col-8\">\n                            <input \n                                [owlDateTime]=\"startTime\" \n                                [owlDateTimeTrigger]=\"startTime\"\n                                [(ngModel)]=\"startTimeMoment\" \n                                [ngModelOptions]=\"{standalone: true}\"\n                                (ngModelChange)=\"onChooseStartTime()\"\n                                [formControl]=\"form.controls['startTime']\"\n                                ngDefaultControl\n                                >\n                            <owl-date-time \n                                #startTime\n                                [pickerType]=\"'timer'\"\n                                [dateFormat]=\"'hh:mm'\"\n                                [stepMinute]=\"15\"\n                                [autoClose]=\"true\"\n                                [inputId]=\"'input3'\"\n                                ></owl-date-time>\n                      </div>\n                  </div>\n    \n                <!-- END TIME - USES DATEPICKER MODULE -->\n                  <div class=\"row\">\n                      <label for=\"input4\" class=\"col-4 col-form-label text-right\">End Time</label>\n                      <div class=\"col-8\">\n                            <input \n                                [owlDateTime]=\"endTime\" \n                                [owlDateTimeTrigger]=\"endTime\"\n                                [(ngModel)]=\"endTimeMoment\" \n                                [ngModelOptions]=\"{standalone: true}\"\n                                (ngModelChange)=\"onChooseEndTime()\"\n                                [formControl]=\"form.controls['endTime']\"\n                                ngDefaultControl\n                                >\n                            <owl-date-time \n                                #endTime\n                                [pickerType]=\"'timer'\"\n                                [dateFormat]=\"'hh:mm'\"\n                                [stepMinute]=\"15\"\n                                [autoClose]=\"true\"\n                                [inputId]=\"'input4'\"\n                                ></owl-date-time>\n                    </div>\n                  </div>\n\n                  <!-- DEADLINE DATE - only if  a repeat - get hours to calculate a deadline for each repeat -->\n                <div *ngIf=\"isRepeat\">\n                    <div class=\"row\">\n                        <label for=\"deadlineCalcHours\" class=\"col-4 col-form-label text-right\">Order deadline: How many hours before the scheduled start time?</label>\n                        <div class=\"col-8 input-group\">\n                            <input \n                            class=\"form-control\" \n                            type=\"number\"\n                            min=\"0\"\n                            step=\"1\"\n                            id=\"deadlineCalcHours\" \n                            [formControl]=\"form.controls['deadlineCalcHours']\">\n                        </div>\n                    </div>\n                </div>\n    \n                <!-- DEADLINE DATE - only if not a repeat - USES DATEPICKER MODULE -->\n                <div *ngIf=\"!isRepeat\">\n                    <div class=\"row\">\n                        <label for=\"input5\" class=\"col-4 col-form-label text-right\">Order Deadline Date</label>\n                        <div class=\"col-8\">\n                            <input \n                                [owlDateTime]=\"deadlineDate\" \n                                [owlDateTimeTrigger]=\"deadlineDate\"\n                                [(ngModel)]=\"deadlineDateMoment\"\n                                [ngModelOptions]=\"{standalone: true}\"\n                                (ngModelChange)=\"onChooseDeadlineDate()\"\n                                [formControl]=\"form.controls['deadlineDate']\"\n                                ngDefaultControl\n                                >\n                            <owl-date-time\n                                #deadlineDate\n                                [dateFormat]=\"'YYYY-MM-DD'\"\n                                [pickerType]=\"'calendar'\" \n                                [autoClose]=\"true\"\n                                [inputId]=\"'input5'\"\n                                ></owl-date-time>\n                        </div>\n                    </div>\n        \n                    <!-- DEADLINE TIME - USES DATEPICKER MODULE -->\n                    <div class=\"row\">\n                        <label for=\"input6\" class=\"col-4 col-form-label text-right\">Order Deadline Time</label>\n                        <div class=\"col-8\">\n                            <input \n                                [owlDateTime]=\"deadlineTime\" \n                                [owlDateTimeTrigger]=\"deadlineTime\"\n                                [(ngModel)]=\"deadlineTimeMoment\" \n                                [ngModelOptions]=\"{standalone: true}\"\n                                (ngModelChange)=\"onChooseDeadlineTime()\"\n                                [formControl]=\"form.controls['deadlineTime']\"\n                                ngDefaultControl\n                                >\n                            <owl-date-time \n                                #deadlineTime\n                                [pickerType]=\"'timer'\"\n                                [dateFormat]=\"'hh:mm'\"\n                                [autoClose]=\"true\"\n                                [inputId]=\"'input6'\"\n                                ></owl-date-time>\n                        </div>\n                    </div>\n                </div>\n                  \n    \n                  <br>\n        \n                  \n    \n                  <!-- options only for D2D deliveries -->\n                <div *ngIf=\"type == 'Door-to-door Delivery'\">\n                    <p>D2D</p>\n                    <div class=\"row\">\n                        <label for=\"unit\" class=\"col-4 col-form-label text-right\">Does this delivery have a fee?</label>\n                        <div class=\"col-8 pl-5\">\n                            <div class=\"form-check form-check-inline\">\n                              <input \n                                [formControl]=\"form.controls['hasFee']\" \n                                type=\"radio\" \n                                name=\"hasFee\" \n                                [(ngModel)]=\"hasDelFee\"\n                                id=\"feeYes\" \n                                [value]=\"true\">\n                              <label class=\"form-check-label\" for=\"feeYes\">Yes</label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                              <input \n                                [formControl]=\"form.controls['hasFee']\" \n                                type=\"radio\" \n                                name=\"hasFee\"\n                                [(ngModel)]=\"hasDelFee\" \n                                id=\"feeNo\" \n                                [value]=\"false\">\n                              <label class=\"form-check-label\" for=\"feeNo\">No</label>\n                            </div>\n                        </div>\n                    </div>\n      \n                    <div *ngIf=\"hasDelFee\">\n                      <div class=\"row\">\n                        <label for=\"fee\" class=\"col-4 col-form-label text-right\">What is the fee?</label>\n                        <div class=\"col-8 input-group\">\n                          <div class=\"input-group-addon\">$</div>\n                          <input \n                            class=\"form-control\" \n                            type=\"number\"\n                            min=\"0\"\n                            step=\"1\"\n                            id=\"fee\" \n                            [formControl]=\"form.controls['fee']\">\n                        </div>\n                      </div>\n    \n                      <br>\n      \n                      <div class=\"row\">\n                          <label for=\"hasWaiver\" class=\"col-4 col-form-label text-right\">Is there an order value at which you will waive the fee?</label>\n                          <div class=\"col-8 pl-5\">\n                              <div class=\"form-check form-check-inline\">\n                                <input \n                                  [formControl]=\"form.controls['hasWaiver']\" \n                                  type=\"radio\" \n                                  name=\"hasWaiver\" \n                                  [(ngModel)]=\"hasFeeWaiver\"\n                                  id=\"waiverYes\" \n                                  [value]=\"true\">\n                                <label class=\"form-check-label\" for=\"waiverYes\">Yes</label>\n                              </div>\n                              <div class=\"form-check form-check-inline\">\n                                <input \n                                  [formControl]=\"form.controls['hasWaiver']\" \n                                  type=\"radio\" \n                                  name=\"hasWaiver\"\n                                  [(ngModel)]=\"hasFeeWaiver\" \n                                  id=\"waiverNo\" \n                                  [value]=\"false\">\n                                <label class=\"form-check-label\" for=\"waiverNo\">No</label>\n                              </div>\n                          </div>\n                      </div>\n      \n                      <div *ngIf=\"hasFeeWaiver\">\n                        <div class=\"row\">\n                            <label for=\"feeWaiver\" class=\"col-4 col-form-label text-right\">What is the order amount?</label>\n                            <div class=\"col-8 input-group\">\n                                <div class=\"input-group-addon\">$</div>\n                                <input \n                                    class=\"form-control\" \n                                    type=\"number\"\n                                    min=\"0\"\n                                    step=\"1\"\n                                    id=\"feeWaiver\" \n                                    [formControl]=\"form.controls['feeWaiver']\">\n                            </div>\n                        </div>\n                      </div>\n                      \n                    </div>\n                  </div>\n      \n                  <!-- options only for farmgate -->\n                  <div *ngIf=\"type === 'On-farm Pickup'\">\n                    <div class=\"row\">\n                        <label for=\"address\" class=\"col-4 col-form-label text-right\">Your Address:</label>\n                        <div class=\"col-8 input-group\">\n                          <p>{{ producer.address }}</p>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"address\" class=\"col-4 col-form-label text-right\">City, Province:</label>\n                        <div class=\"col-8 input-group\">\n                          <p>{{ producer.location }}, {{ producer.province }}</p>\n                        </div>\n                    </div>\n                    \n                  </div>\n      \n                    <!-- options only for Market or other pickups -->\n                  <div *ngIf=\"type === 'Market Pickup' || type === 'Other Pickup'\">\n                    <p>Market or other pickups</p>\n                  </div>\n    \n                </div>\n                \n                <div class=\"row justify-content-center\">\n                    <button *ngIf=\"!isRepeat\"\n                      class=\"btn btn-olf-primary\" \n                      type=\"submit\"\n                      >Add to Schedule</button>\n                    <button *ngIf=\"isRepeat\"\n                      class=\"btn btn-olf-primary\" \n                      type=\"submit\"\n                      >Add All to Schedule</button>\n                      <!-- <button \n                      class=\"btn btn-olf-primary\" \n                      type=\"submit\"\n                      [disabled]=\"(form.invalid)\"\n                      >Add to Schedule</button> -->\n                </div>\n    \n            </div>\n        </div>\n        <div class=\"modal-footer justify-content-center\">\n            <div class=\"row\">\n                <a (click)=\"onCancel()\">Cancel Changes</a>\n            </div>\n        </div>\n      </form>\n      "

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddScheduleModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddScheduleModalComponent = /** @class */ (function () {
    function AddScheduleModalComponent(dashboardService, formBuild, activeModal, mapsAPILoader, ngZone, apiService) {
        this.dashboardService = dashboardService;
        this.formBuild = formBuild;
        this.activeModal = activeModal;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.itemCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.hasDelFee = false;
        this.hasFeeWaiver = false;
        this.submitting = false;
        this.isRepeat = false;
        this.datesArray = []; // to hold dates if repeat is selected
        // DATE/TIME PICKER SETTINGS
        this.moment = new Date();
        // public minDate = this.moment.setDate(this.moment.getDate() + 1); // set minimum date as tomorrow
        this.dateMoment = new Date(new Date().setDate(new Date().getDate() + 1)); // somehow this works!
        this.startTimeMoment = new Date(0, 0, 0, 12, 0, 0, 0); // default start time is noon
        this.endTimeMoment = new Date(0, 0, 0, 13, 0, 0, 0); // default end time is 1pm
        this.deadlineDateMoment = new Date(); // default is now because date is tomorrow, just for ease of coding
        this.deadlineTimeMoment = new Date(0, 0, 0, (this.startTimeMoment.getHours() - 6), this.startTimeMoment.getMinutes(), 0, 0); // defaults to 12 hours before start time
        this.buildBlankSubmitObject();
        this.form = formBuild.group({
            'type': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'description': [''],
            'repeat': [this.isRepeat, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'date': [this.dateMoment],
            'dates': [this.dateMoments],
            'startTime': [this.startTimeMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'endTime': [this.endTimeMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'deadlineCalcHours': [12],
            'deadlineDate': [this.deadlineDateMoment],
            'deadlineTime': [this.deadlineTimeMoment],
            'hasFee': [false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'fee': [0],
            'hasWaiver': [false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'feeWaiver': [0],
            'latitude': [null],
            'longitude': [null],
            'city': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            'address': [''],
            'province': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]
        });
    }
    AddScheduleModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        if (this.form.value.type === 'On-farm Pickup') {
            this.submitObject.latitude = this.latitude;
            this.submitObject.longitude = this.longitude;
            this.submitObject.address = this.producer.address;
            this.submitObject.city = this.producer.location;
            this.submitObject.province = this.producer.province;
        }
        if (!this.isRepeat) {
            this.buildSubmitObject();
            this.apiService.postSchedule(this.submitObject)
                .subscribe(function (result) {
                _this.itemCreated.emit(result);
            });
        }
        else {
            console.log('datesArray: ', this.datesArray);
            for (var i = 0; i < this.datesArray.length; i++) {
                this.buildRepeatSubmitObject(i, this.form.value.deadlineCalcHours);
                this.apiService.postSchedule(this.submitObject)
                    .subscribe(function (result) {
                    console.log('emitting: ', result);
                    _this.itemCreated.emit(result);
                });
            }
        }
        this.buildBlankSubmitObject();
        this.submitting = false;
        this.activeModal.close();
    };
    // generateRandomId() {
    //   return Math.floor( Math.random() * 1000000 )
    // }
    // for repeat dates
    AddScheduleModalComponent.prototype.buildRepeatSubmitObject = function (i, deadlineHours) {
        this.clearDatesFromSubmitObject();
        // this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
        this.submitObject.producerId = this.producer.id;
        this.submitObject.type = this.form.value.type;
        this.submitObject.description = this.form.value.description;
        this.submitObject.startDateTime = this.buildStartDateTime(this.datesArray[i].schedYear, this.datesArray[i].schedMonth, this.datesArray[i].schedDay, this.schedStartHour, this.schedStartMinute);
        this.submitObject.endDateTime = this.buildEndDateTime(this.datesArray[i].schedYear, this.datesArray[i].schedMonth, this.datesArray[i].schedDay, this.schedEndHour, this.schedEndMinute);
        this.submitObject.hasFee = this.form.value.hasFee;
        this.submitObject.hasWaiver = this.form.value.hasWaiver;
        this.submitObject.orderDeadline = this.buildRepeatOrderDeadline(this.submitObject.startDateTime, deadlineHours);
        this.submitObject.fee = this.form.value.fee;
        this.submitObject.feeWaiver = this.form.value.feeWaiver;
        this.submitObject.orderList = [];
    };
    ;
    AddScheduleModalComponent.prototype.buildBlankSubmitObject = function () {
        this.submitObject = {
            'id': null,
            'producerId': null,
            'productList': [],
            'type': '',
            'description': '',
            'startDateTime': '',
            'endDateTime': '',
            'hasFee': null,
            'hasWaiver': null,
            'latitude': null,
            'longitude': null,
            'city': '',
            'province': '',
            'orderDeadline': '',
            'address': '',
            'fee': null,
            'feeWaiver': null,
            'orderList': []
        };
    };
    AddScheduleModalComponent.prototype.clearDatesFromSubmitObject = function () {
        this.submitObject.startDateTime = '';
        this.submitObject.endDateTime = '';
    };
    AddScheduleModalComponent.prototype.buildSubmitObject = function () {
        // this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
        this.submitObject.producerId = this.producer.id;
        this.submitObject.type = this.form.value.type;
        this.submitObject.description = this.form.value.description;
        this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
        this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute);
        this.submitObject.hasFee = this.form.value.hasFee;
        this.submitObject.hasWaiver = this.form.value.hasWaiver;
        this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
        this.submitObject.fee = this.form.value.fee;
        this.submitObject.feeWaiver = this.form.value.feeWaiver;
        this.submitObject.orderList = [];
    };
    ;
    AddScheduleModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set google maps defaults
        this.zoom = 4;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        // set current position
        // this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["geocode"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log('place: ', place);
                    _this.fillAddress(place);
                    // set latitude, longitude and zoom
                    // this.latitude = place.geometry.location.lat();
                    // this.longitude = place.geometry.location.lng();
                    // this.zoom = 12;
                });
            });
        });
        this.dashboardService.getProducer()
            .subscribe(function (result) {
            _this.producer = result;
            _this.latitude = _this.producer.latitude;
            _this.longitude = _this.producer.longitude;
        });
        // set the defaults for dates
        this.onChooseDate();
        // this.onChooseMultipleDates(new Date());
        this.onChooseStartTime();
        this.onChooseEndTime();
        this.onChooseDeadlineDate();
        this.onChooseDeadlineTime();
    };
    AddScheduleModalComponent.prototype.fillAddress = function (place) {
        this.clearAddress();
        this.parseAddressComponents(place.address_components);
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
        if (this.streetNumber && this.route) {
            this.form.value.address = this.streetNumber + ' ' + this.route;
            this.submitObject.address = this.streetNumber + ' ' + this.route;
        }
        ;
        this.form.value.city = this.city;
        this.submitObject.city = this.city; // still not working
        this.form.value.province = this.province;
        this.submitObject.province = this.province;
        // this.form.value.latitude = this.lat;
        // this.form.value.longitude = this.lng;
        this.submitObject.latitude = this.lat;
        this.submitObject.longitude = this.lng;
    };
    ;
    AddScheduleModalComponent.prototype.clearAddress = function () {
        this.streetNumber = '';
        this.route = '';
        this.city = '';
        this.province = '';
        this.postalCode = '';
        this.country = '';
        this.lat = null;
        this.lng = null;
    };
    AddScheduleModalComponent.prototype.parseAddressComponents = function (components) {
        for (var i = 0; i < components.length; i++) {
            var types = components[i].types;
            for (var j = 0; j < types.length; j++) {
                var result = types[j];
                if (result === 'street_number') {
                    this.streetNumber = components[i].short_name;
                }
                if (result === 'route') {
                    this.route = components[i].short_name;
                }
                if (result === 'locality' || result === 'sublocality') {
                    this.city = components[i].short_name;
                }
                if (result === 'administrative_area_level_1') {
                    this.province = components[i].short_name;
                }
                if (result === 'postal_code') {
                    this.postalCode = components[i].short_name;
                }
                if (result === 'country') {
                    this.country = components[i].short_name;
                }
            }
        }
    };
    ;
    AddScheduleModalComponent.prototype.onChooseDate = function () {
        this.schedDay = this.dateMoment.getDate();
        this.schedMonth = this.dateMoment.getMonth();
        this.schedYear = this.dateMoment.getFullYear();
    };
    ;
    AddScheduleModalComponent.prototype.onChooseMultipleDates = function (value) {
        var valueArray = this.form.controls['dates'].value;
        // for each object in valueArray, get its year, month, and day separated
        for (var i = 0; i < valueArray.length; i++) {
            var date = {
                schedDay: null,
                schedMonth: null,
                schedYear: null
            };
            date.schedDay = valueArray[i].getDate();
            date.schedMonth = valueArray[i].getMonth();
            date.schedYear = valueArray[i].getFullYear();
            this.datesArray.push(date);
        }
        ;
    };
    ;
    AddScheduleModalComponent.prototype.onChooseStartTime = function () {
        this.schedStartHour = this.startTimeMoment.getHours();
        this.schedStartMinute = this.startTimeMoment.getMinutes();
    };
    ;
    AddScheduleModalComponent.prototype.onChooseEndTime = function () {
        this.schedEndHour = this.endTimeMoment.getHours();
        this.schedEndMinute = this.endTimeMoment.getMinutes();
    };
    AddScheduleModalComponent.prototype.onChooseDeadlineDate = function () {
        this.deadlineDateDay = this.deadlineDateMoment.getDate();
        this.deadlineDateMonth = this.deadlineDateMoment.getMonth();
        this.deadlineDateYear = this.deadlineDateMoment.getFullYear();
    };
    ;
    AddScheduleModalComponent.prototype.onChooseDeadlineTime = function () {
        this.deadlineHour = this.deadlineTimeMoment.getHours();
        this.deadlineMinute = this.deadlineTimeMoment.getMinutes();
    };
    AddScheduleModalComponent.prototype.buildStartDateTime = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute, 0, 0).toISOString();
    };
    AddScheduleModalComponent.prototype.buildEndDateTime = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute, 0, 0).toISOString();
    };
    AddScheduleModalComponent.prototype.buildOrderDeadline = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute, 0, 0).toISOString();
    };
    AddScheduleModalComponent.prototype.buildRepeatOrderDeadline = function (date, deadlineHours) {
        var originalDeadline = new Date(date);
        var newDeadline = new Date(originalDeadline.setHours(originalDeadline.getHours() - deadlineHours));
        return newDeadline.toISOString();
    };
    ;
    AddScheduleModalComponent.prototype.onCancel = function () {
        this.activeModal.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */])
    ], AddScheduleModalComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("date"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */])
    ], AddScheduleModalComponent.prototype, "datePickerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], AddScheduleModalComponent.prototype, "itemCreated", void 0);
    AddScheduleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-schedule-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__producer_dashboard_service__["a" /* ProducerDashboardService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__core_api_service__["a" /* ApiService */]])
    ], AddScheduleModalComponent);
    return AddScheduleModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete this {{ record.type }}</h4>\n  </div>\n\n  <div class=\"modal-body dash-modal-body\">\n    <app-submitting *ngIf=\"submitting\"></app-submitting>\n\n    <div *ngIf=\"!submitting\">\n\n      <div>\n        <div *ngIf=\"hasOrders\">\n          <p class=\"mt-3 alert alert-danger\">\n            <strong>Uh Oh!</strong> It looks like this schedule has orders. Unfortunately you can't cancel a delivery or pickup unless you cancel the orders.\n          </p>\n        </div>\n    \n        <div *ngIf=\"!hasOrders\">\n          <p class=\"mt-3 alert alert-danger\">\n            <strong>Are you sure?</strong> By clicking 'Confirm' below, you will be deleting this schedule.\n          </p>\n          <button\n            type=\"button\" \n            class=\"btn btn-danger\" \n            (click)=\"onDelete()\"\n            >Confirm</button>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\" \n      class=\"btn btn-olf-primary\" \n      (click)=\"activeModal.close()\"\n      >Cancel Delete</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteScheduleModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_schedule_model__ = __webpack_require__("./src/app/core/models/schedule.model.ts");
// import { Component, OnInit, Input } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { ApiService } from '../../../../../../core/api.service';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ScheduleModel } from '../../../../../../core/models/schedule.model';
// @Component({
//   selector: 'app-delete-schedule-modal',
//   templateUrl: './delete-schedule-modal.component.html',
//   styleUrls: ['./delete-schedule-modal.component.scss']
// })
// export class DeleteScheduleModalComponent implements OnInit {
//   @Input() record: ScheduleModel;
//   submitObject: ScheduleModel;
//   hasOrders: boolean;
//   submitting: boolean;
//   error: boolean;
//   constructor(private activeModal: NgbActiveModal,
//               private api: ApiService) { }
//   ngOnInit() {
//     if (this.record.orderList.length > 0) {
//       this.hasOrders = true;
//     } else {
//       this.submitObject = this.record;
//     }
//   }
//   onDelete() {
//     this.submitting = true;
//     this.api.deleteSchedule(this.record.id)
//       .subscribe(
//         response => {
//           this.submitting = false;
//           this.activeModal.close();
//         },
//         err => {
//           console.error(err);
//           this.submitting = false;
//           this.error = true;
//         }
//       )
//   }
// }




var DeleteScheduleModalComponent = /** @class */ (function () {
    function DeleteScheduleModalComponent(activeModal, api) {
        this.activeModal = activeModal;
        this.api = api;
        this.onScheduleDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DeleteScheduleModalComponent.prototype.ngOnInit = function () {
        if (this.record.orderList.length > 0) {
            this.hasOrders = true;
        }
        else {
            this.submitObject = this.record;
        }
    };
    DeleteScheduleModalComponent.prototype.onDelete = function () {
        var _this = this;
        this.submitting = true;
        this.deleteScheduleSub = this.api.deleteSchedule(this.record.id)
            .subscribe(function (response) {
            _this.handleSubmitSuccess(response, _this.record.id);
        }, function (err) {
            _this.handleSubmitError(err);
        });
    };
    ;
    DeleteScheduleModalComponent.prototype.handleSubmitSuccess = function (res, id) {
        this.submitting = false;
        console.log('schedule deleted from modal: ', id);
        this.onScheduleDeleted.emit(id);
        // close modal
        this.activeModal.close();
    };
    ;
    DeleteScheduleModalComponent.prototype.handleSubmitError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    ;
    DeleteScheduleModalComponent.prototype.ngOnDestroy = function () {
        if (this.deleteScheduleSub) {
            this.deleteScheduleSub.unsubscribe();
        }
        ;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_schedule_model__["a" /* ScheduleModel */])
    ], DeleteScheduleModalComponent.prototype, "record", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], DeleteScheduleModalComponent.prototype, "onScheduleDeleted", void 0);
    DeleteScheduleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-delete-schedule-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__core_api_service__["a" /* ApiService */]])
    ], DeleteScheduleModalComponent);
    return DeleteScheduleModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Edit</h5>\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n\n<div class=\"modal-body dash-modal-body\">\n  \n    <app-loading *ngIf=\"submitting\"></app-loading>\n\t\n\t\n\t<form *ngIf=\"!submitting\" [formGroup]=\"scheduleForm\" (ngSubmit)=\"onSubmit()\">\n\t\n\t\t<div class=\"row\">\n\t\t\n\t\t\t<div class=\"col-12\">\n\n\t\t\t\t<p>The location details of a scheduled pickup or delivery cannot be modified. If necessary, please delete this instance and create a new one.</p>\t\t\t\n\t\t\t\n\t\t\t\t<div *ngIf=\"hasOrders\" class=\"row\">\n\t\t\t\t\t\t<div class=\"col-8 offset-2\">\n\t\t\t\t\t\t\t\t<blockquote class=\"blockquote bq-warning p-0\">\n\t\t\t\t\t\t\t\t\t<p class=\"bq-title pb-0\">Please Note:</p>\n\t\t\t\t\t\t\t\t\t<p>This {{ record.type }} already has at least one order attached to it. Therefore the date, times, and fee settings cannot be changed. The deadline and details can still be modified, however.</p>\n\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<!-- Type -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t  <strong>Schedule Type:</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t  <p>{{ record.type }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Description -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label for=\"description\" class=\"col-4 col-form-label text-right\"><strong>Details:</strong></label>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t<textarea \n\t\t\t\t\t\t  class=\"form-control\" \n\t\t\t\t\t\t  rows=\"3\" \n\t\t\t\t\t\t  id=\"description\" \n\t\t\t\t\t\t  formControlName=\"description\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Address -->\n\t\t\t\t<div *ngIf=\"record.address\" class=\"row\">\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t  <strong>Address:</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t  <p>{{ record.address }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- City -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t  <strong>Location:</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t  <p>{{ record.city }}, {{ record.province }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<hr>\n\t\t\t\t\n\t\t\t\t<!-- Dates -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t<!-- IF THE SCHED ALREADY HAS ORDERS, DATES ARE NOT CHANGEABLE -->\n\t\t\t\t\t<div *ngIf=\"hasOrders\"  class=\"col-12\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t\t\t\t  <strong>Date:</strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t\t\t  <p>{{ record.startDateTime | date:'mediumDate' }}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t\t\t\t  <strong>Time:</strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t\t\t  <p>{{ record.startDateTime | date:'shortTime' }} - {{ record.endDateTime | date:'shortTime' }}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!-- IF THE SCHED DOES NOT HAVE ORDERS, DATES ARE CHANGEABLE -->\n\t\t\t\t\t<div *ngIf=\"!hasOrders\" class=\"col-12\">\n\t\t\t\t\t\n\t\t\t\t\t\t<!-- DATE - USES DATEPICKER MODULE -->\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t  <label for=\"date\" class=\"col-4 col-form-label text-right\">Date: </label>\n\t\t\t\t\t\t\t  <div class=\"col-8\">\n\t\t\t\t\t\t\t\t<owl-date-time \n\t\t\t\t\t\t\t\t  [(ngModel)]=\"dateMoment\"\n\t\t\t\t\t\t\t\t  [ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t  [dateFormat]=\"'YYYY-MM-DD'\"\n\t\t\t\t\t\t\t\t  [type]=\"'calendar'\" \n\t\t\t\t\t\t\t\t  [placeHolder]=\"'YYYY-MM-DD'\"\n\t\t\t\t\t\t\t\t  (onSelect)=\"onChooseDate()\"\n\t\t\t\t\t\t\t\t  [autoClose]=\"true\"\n\t\t\t\t\t\t\t\t  [inputId]=\"'date'\"\n\t\t\t\t\t\t\t\t  [min]=\"dateMin\"\n\t\t\t\t\t\t\t\t  [formControl]=\"scheduleForm.controls['date']\"></owl-date-time>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\n\t\t\t\t\t\t<!-- START TIME - USES DATEPICKER MODULE -->\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t  <label for=\"startTime\" class=\"col-4 col-form-label text-right\">Start Time:</label>\n\t\t\t\t\t\t\t  <div class=\"col-8\">\n\t\t\t\t\t\t\t\t<owl-date-time \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"startTimeMoment\" \n\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t[type]=\"'timer'\"\n\t\t\t\t\t\t\t\t\t[dateFormat]=\"'hh:mm'\"\n\t\t\t\t\t\t\t\t\t[placeHolder]=\"'HH:MM'\" \n\t\t\t\t\t\t\t\t\t(onSelect)=\"onChooseStartTime()\"\n\t\t\t\t\t\t\t\t\t[autoClose]=\"true\"\n\t\t\t\t\t\t\t\t\t[inputId]=\"'startTime'\"\n\t\t\t\t\t\t\t\t\t[formControl]=\"scheduleForm.controls['startTime']\"></owl-date-time>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t<!-- END TIME - USES DATEPICKER MODULE -->\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t  <label for=\"endTime\" class=\"col-4 col-form-label text-right\">End Time:</label>\n\t\t\t\t\t\t\t  <div class=\"col-8\">\n\t\t\t\t\t\t\t\t<owl-date-time \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"endTimeMoment\" \n\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\n\t\t\t\t\t\t\t\t\t[type]=\"'timer'\"\n\t\t\t\t\t\t\t\t\t[dateFormat]=\"'hh:mm'\"\n\t\t\t\t\t\t\t\t\t[placeHolder]=\"'hh:mm'\" \n\t\t\t\t\t\t\t\t\t(onSelect)=\"onChooseEndTime()\"\n\t\t\t\t\t\t\t\t\t[autoClose]=\"true\"\n\t\t\t\t\t\t\t\t\t[inputId]=\"'endTime'\"\n\t\t\t\t\t\t\t\t\t[formControl]=\"scheduleForm.controls['endTime']\"></owl-date-time>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n                    <!-- DEADLINE DATE - USES DATEPICKER MODULE -->\n                    <div class=\"col-12\">\n\n                        <div class=\"row\">\n                            <label for=\"deadlineDate\" class=\"col-4 col-form-label text-right\">Order Deadline Date:</label>\n                            <div class=\"col-8\">\n                              <owl-date-time \n                                [(ngModel)]=\"deadlineDateMoment\"\n                                [ngModelOptions]=\"{standalone: true}\"\n                                [dateFormat]=\"'YYYY-MM-DD'\"\n                                [type]=\"'calendar'\" \n                                (onSelect)=\"onChooseDeadlineDate()\"\n                                [autoClose]=\"true\"\n                                [inputId]=\"'deadlineDate'\"\n                                [max]=\"deadlineDateMax\"\n                                [formControl]=\"scheduleForm.controls['deadlineDate']\"></owl-date-time>\n                            </div>\n                        </div>\n  \n                      <!-- DEADLINE TIME - USES DATEPICKER MODULE -->\n                        <div class=\"row\">\n                            <label for=\"deadlineTime\" class=\"col-4 col-form-label text-right\">Order Deadline Time:</label>\n                            <div class=\"col-8\">\n                                <owl-date-time \n                                  [(ngModel)]=\"deadlineTimeMoment\" \n                                  [ngModelOptions]=\"{standalone: true}\"\n                                  [type]=\"'timer'\"\n                                  [dateFormat]=\"'hh:mm'\"\n                                  (onSelect)=\"onChooseDeadlineTime()\"\n                                  [autoClose]=\"true\"\n                                  [inputId]=\"'deadlineTime'\"\n                                  [formControl]=\"scheduleForm.controls['deadlineTime']\"></owl-date-time>\n                            </div>\n                        </div>\n\n                    </div>\n\t\t\t\t\t  \n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<!-- Fees -->\n\t\t\t\t<div class=\"row\" *ngIf=\"record.type === 'Door-to-door Delivery'\">\n\t\t\t\t\n\t\t\t\t\t<!-- there are orders, so fees cannot be changed -->\n\t\t\t\t\t<div *ngIf=\"hasOrders\" class=\"col-12\">\n\n                        <hr>\n\t\t\t\t\t\n\t\t\t\t\t\t<div *ngIf=\"record.type === 'Door-to-door Delivery'\">\n    \n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t\t  <strong>Delivery Fee:</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t  <p>{{ record.fee | currency:'USD':true:'1.2-2' }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-4 text-right\">\n\t\t\t\t\t\t\t  <strong>Fee Waiver Amount:</strong>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t  <p *ngIf=\"record.feeWiaver\">{{ record.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n\t\t\t\t\t\t\t  <p *ngIf=\"!record.feeWiaver\">None. Fee applies to all orders.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!-- there are NO orders, so fees can be changed -->\n\t\t\t\t\t<div *ngIf=\"!hasOrders\" class=\"col-12\">\n                    \n                        <hr>                        \n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<label for=\"unit\" class=\"col-4 col-form-label text-right\">Delivery fee?</label>\n\t\t\t\t\t\t\t<div class=\"col-8 pl-5\">\n\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t  <input \n\t\t\t\t\t\t\t\t\t[formControl]=\"scheduleForm.controls['hasFee']\" \n\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\tname=\"hasFee\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hasDelFee\"\n\t\t\t\t\t\t\t\t\tid=\"feeYes\" \n\t\t\t\t\t\t\t\t\t[value]=\"true\">\n\t\t\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"feeYes\">Yes</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t  <input \n\t\t\t\t\t\t\t\t\t[formControl]=\"scheduleForm.controls['hasFee']\" \n\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\tname=\"hasFee\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"hasDelFee\" \n\t\t\t\t\t\t\t\t\tid=\"feeNo\" \n\t\t\t\t\t\t\t\t\t[value]=\"false\">\n\t\t\t\t\t\t\t\t  <label class=\"form-check-label\" for=\"feeNo\">No</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t  \n\t\t\t\t\t\t<div *ngIf=\"hasDelFee\">\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t<label for=\"fee\" class=\"col-4 col-form-label text-right\">Fee amount?</label>\n\t\t\t\t\t\t\t<div class=\"col-8 input-group\">\n\t\t\t\t\t\t\t  <div class=\"input-group-addon\">$</div>\n\t\t\t\t\t\t\t  <input \n\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t\tstep=\"1\"\n\t\t\t\t\t\t\t\tid=\"fee\" \n\t\t\t\t\t\t\t\t[formControl]=\"scheduleForm.controls['fee']\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t  <br>\n\t\t  \n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t  <label for=\"hasWaiver\" class=\"col-4 col-form-label text-right\">Is there an order value at which you will waive the fee?</label>\n\t\t\t\t\t\t\t  <div class=\"col-8 pl-5\">\n\t\t\t\t\t\t\t\t  <div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t  [formControl]=\"scheduleForm.controls['hasWaiver']\" \n\t\t\t\t\t\t\t\t\t  type=\"radio\" \n\t\t\t\t\t\t\t\t\t  name=\"hasWaiver\" \n\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"hasFeeWaiver\"\n\t\t\t\t\t\t\t\t\t  id=\"waiverYes\" \n\t\t\t\t\t\t\t\t\t  [value]=\"true\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"waiverYes\">Yes</label>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t  [formControl]=\"scheduleForm.controls['hasWaiver']\" \n\t\t\t\t\t\t\t\t\t  type=\"radio\" \n\t\t\t\t\t\t\t\t\t  name=\"hasWaiver\"\n\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"hasFeeWaiver\" \n\t\t\t\t\t\t\t\t\t  id=\"waiverNo\" \n\t\t\t\t\t\t\t\t\t  [value]=\"false\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"waiverNo\">No</label>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\t\t  \n\t\t\t\t\t\t  <div *ngIf=\"hasFeeWaiver\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<label for=\"feeWaiver\" class=\"col-4 col-form-label text-right\">What is the order amount?</label>\n\t\t\t\t\t\t\t\t<div class=\"col-8 input-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-addon\">$</div>\n\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t\t\t\tstep=\"1\"\n\t\t\t\t\t\t\t\t\t\tid=\"feeWaiver\" \n\t\t\t\t\t\t\t\t\t\t[formControl]=\"scheduleForm.controls['feeWaiver']\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t\t<button \n\t\t\t\t\t  class=\"btn btn-olf-primary\" \n\t\t\t\t\t  type=\"submit\"\n\t\t\t\t\t  >Update this Schedule</button>\n\t\t\t\t\t  <!-- <button \n\t\t\t\t\t  class=\"btn btn-olf-primary\" \n\t\t\t\t\t  type=\"submit\"\n\t\t\t\t\t  [disabled]=\"(form.invalid)\"\n\t\t\t\t\t  >Add to Schedule</button> -->\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t\n\t\t</div>\n\t\n\t</form>\n\t\t\n\t\n</div>\n\n<div class=\"modal-footer justify-content-center\">\n    <div class=\"row\">\n        <div>\n            <a (click)=\"activeModal.close()\">Cancel Changes</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScheduleModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_schedule_model__ = __webpack_require__("./src/app/core/models/schedule.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditScheduleModalComponent = /** @class */ (function () {
    function EditScheduleModalComponent(formBuild, router, api, activeModal) {
        this.formBuild = formBuild;
        this.router = router;
        this.api = api;
        this.activeModal = activeModal;
        this.submitting = false;
        // DATE/TIME PICKER SETTINGS
        this.moment = new Date();
        this.dateMin = new Date(new Date().setDate(new Date().getDate() + 1)); // must be 1 day in future
        this.deadlineDateMax = new Date(); // default is now, which is 24 hours before dateMin
    }
    EditScheduleModalComponent.prototype.ngOnInit = function () {
        this.setHasOrders();
        this.hasDelFee = this.record.hasFee;
        this.hasFeeWaiver = this.record.hasWaiver;
        // break out the dates/times from the incoming record so they can be used in the form
        this.breakUpDatesTimes();
        // build the form with the incoming record and the date/time defaults
        this.buildForm();
    };
    EditScheduleModalComponent.prototype.setHasOrders = function () {
        if (this.record.orderList.length > 0) {
            this.hasOrders = true;
        }
        else {
            this.hasOrders = false;
        }
    };
    EditScheduleModalComponent.prototype.setDateTimes = function () {
        this.dateMoment = new Date(this.schedYear, this.schedMonth, this.schedDay, 0, 0, 0, 0);
        this.startTimeMoment = new Date(0, 0, 0, this.schedStartHour, this.schedStartMinute, 0, 0);
        this.endTimeMoment = new Date(0, 0, 0, this.schedEndHour, this.schedEndMinute, 0, 0);
        this.deadlineDateMoment = new Date(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, 0, 0, 0, 0);
        this.deadlineTimeMoment = new Date(0, 0, 0, this.deadlineHour, this.deadlineMinute, 0, 0);
    };
    ;
    EditScheduleModalComponent.prototype.breakUpDatesTimes = function () {
        this.schedDay = new Date(this.record.startDateTime).getDate();
        this.schedMonth = new Date(this.record.startDateTime).getMonth();
        this.schedYear = new Date(this.record.startDateTime).getFullYear();
        this.schedStartHour = new Date(this.record.startDateTime).getHours();
        this.schedStartMinute = new Date(this.record.startDateTime).getMinutes();
        this.schedEndHour = new Date(this.record.endDateTime).getHours();
        this.schedEndMinute = new Date(this.record.endDateTime).getMinutes();
        this.deadlineDateDay = new Date(this.record.orderDeadline).getDate();
        this.deadlineDateMonth = new Date(this.record.orderDeadline).getMonth();
        this.deadlineDateYear = new Date(this.record.orderDeadline).getFullYear();
        this.deadlineHour = new Date(this.record.orderDeadline).getHours();
        this.deadlineMinute = new Date(this.record.orderDeadline).getMinutes();
        // set those dates/times into the datepicker defaults
        this.setDateTimes();
    };
    ;
    EditScheduleModalComponent.prototype.buildForm = function () {
        var _this = this;
        this.scheduleForm = this.formBuild.group({
            description: [this.record.description],
            date: [this.dateMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            startTime: [this.startTimeMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            endTime: [this.endTimeMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            deadlineDate: [this.deadlineDateMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            deadlineTime: [this.deadlineTimeMoment, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            hasFee: [this.record.hasFee, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            fee: [this.record.fee],
            hasWaiver: [this.record.hasWaiver, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            feeWaiver: [this.record.feeWaiver]
        });
        // Subscribe to form value changes
        this.formChangeSub = this.scheduleForm
            .valueChanges
            .subscribe(function (data) { return _this.onValueChanged(); });
    };
    ;
    EditScheduleModalComponent.prototype.onValueChanged = function () {
        //   maybe this is where I'll need to reset date/time minimums, etc
    };
    ;
    EditScheduleModalComponent.prototype.setSubmitObject = function () {
        // make it equal to the original record
        this.submitObject = this.record;
        // then add the fields from the form
        this.submitObject.description = this.scheduleForm.value.description;
        this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute);
        this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
        this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
        this.submitObject.hasFee = this.scheduleForm.value.hasFee;
        this.submitObject.fee = this.scheduleForm.value.fee;
        this.submitObject.hasWaiver = this.scheduleForm.value.hasWaiver;
        this.submitObject.feeWaiver = this.scheduleForm.value.feeWaiver;
    };
    ;
    EditScheduleModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitting = true;
        this.setSubmitObject();
        console.log('submitted object: ', this.submitObject);
        this.submitScheduleSub = this.api
            .putSchedule(this.record.id, this.submitObject)
            .subscribe(function (data) { return _this.handleSubmitSuccess(data); }, function (err) { return _this.handleSubmitError(err); });
    };
    ;
    EditScheduleModalComponent.prototype.onChooseDate = function () {
        this.schedDay = this.dateMoment.getDate();
        this.schedMonth = this.dateMoment.getMonth();
        this.schedYear = this.dateMoment.getFullYear();
    };
    ;
    EditScheduleModalComponent.prototype.onChooseStartTime = function () {
        this.schedStartHour = this.startTimeMoment.getHours();
        this.schedStartMinute = this.startTimeMoment.getMinutes();
    };
    ;
    EditScheduleModalComponent.prototype.onChooseEndTime = function () {
        this.schedEndHour = this.endTimeMoment.getHours();
        this.schedEndMinute = this.endTimeMoment.getMinutes();
    };
    ;
    EditScheduleModalComponent.prototype.onChooseDeadlineDate = function () {
        this.deadlineDateDay = this.deadlineDateMoment.getDate();
        this.deadlineDateMonth = this.deadlineDateMoment.getMonth();
        this.deadlineDateYear = this.deadlineDateMoment.getFullYear();
    };
    ;
    EditScheduleModalComponent.prototype.onChooseDeadlineTime = function () {
        this.deadlineHour = this.deadlineTimeMoment.getHours();
        this.deadlineMinute = this.deadlineTimeMoment.getMinutes();
    };
    ;
    EditScheduleModalComponent.prototype.buildStartDateTime = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute, 0, 0).toISOString();
    };
    ;
    EditScheduleModalComponent.prototype.buildEndDateTime = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute, 0, 0).toISOString();
    };
    ;
    EditScheduleModalComponent.prototype.buildOrderDeadline = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute, 0, 0).toISOString();
    };
    ;
    EditScheduleModalComponent.prototype.handleSubmitSuccess = function (res) {
        this.submitting = false;
        // close modal
        this.activeModal.close();
    };
    ;
    EditScheduleModalComponent.prototype.handleSubmitError = function (err) {
        console.error(err);
        this.submitting = false;
        this.error = true;
    };
    ;
    EditScheduleModalComponent.prototype.ngOnDestroy = function () {
        if (this.submitScheduleSub) {
            this.submitScheduleSub.unsubscribe();
        }
        this.formChangeSub.unsubscribe();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__core_models_schedule_model__["a" /* ScheduleModel */])
    ], EditScheduleModalComponent.prototype, "record", void 0);
    EditScheduleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-edit-schedule-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], EditScheduleModalComponent);
    return EditScheduleModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">View Schedule</h5>\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  \n  <div class=\"modal-body dash-modal-body\">\n    \n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Schedule Type:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.type }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Details:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.description }}</p>\n    </div>\n    </div>\n    <div *ngIf=\"record.address\" class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Address:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.address }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Location:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.city }}, {{ record.province }}</p>\n    </div>\n    </div>\n    \n    <hr>\n    \n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Date:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.startDateTime | date:'mediumDate' }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Time:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.startDateTime | date:'shortTime' }} - {{ record.endDateTime | date:'shortTime' }}</p>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-4 text-right\">\n      <strong>Order Deadline:</strong>\n    </div>\n    <div class=\"col-8\">\n      <p>{{ record.orderDeadline | date:'mediumDate' }} - {{ record.orderDeadline | date:'shortTime' }}</p>\n    </div>\n    </div>\n    \n    <hr>\n    \n    <div *ngIf=\"record.type === 'Door-to-door Delivery'\">\n    \n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Delivery Fee:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p>{{ record.fee | currency:'USD':true:'1.2-2' }}</p>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-4 text-right\">\n          <strong>Fee Waiver Amount:</strong>\n        </div>\n        <div class=\"col-8\">\n          <p *ngIf=\"record.feeWiaver\">{{ record.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n          <p *ngIf=\"!record.feeWiaver\">None. Fee applies to all orders.</p>\n        </div>\n      </div>\n    \n    </div>\n    \n  </div>\n  \n  <div class=\"modal-footer justify-content-center\">\n    <div class=\"row\">\n        <div>\n            <a (click)=\"activeModal.close()\">Close</a>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewScheduleModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_schedule_model__ = __webpack_require__("./src/app/core/models/schedule.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewScheduleModalComponent = /** @class */ (function () {
    function ViewScheduleModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ViewScheduleModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_schedule_model__["a" /* ScheduleModel */])
    ], ViewScheduleModalComponent.prototype, "record", void 0);
    ViewScheduleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-view-schedule-modal',
            template: __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ViewScheduleModalComponent);
    return ViewScheduleModalComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!-- Nav tabs -->\n<ul class=\"nav nav-tabs nav-justified tabs-2 grey lighten-2 flex-column flex-sm-row hidden-md-down dash-nav\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#products\" role=\"tab\"><i class=\"fa fa-list mr-1\"></i> Products</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#deliveries\" role=\"tab\"><i class=\"fa fa-truck mr-1\"></i> Schedule</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\"><i class=\"fa fa-shopping-cart mr-1\"></i> Orders</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#accountInfo\" role=\"tab\"><i class=\"fa fa-info-circle mr-1\"></i> Account Info</a>\n    </li>\n</ul>\n\n<br>\n\n<div class=\"dropdown hidden-md-up\">\n<button class=\"btn btn-olf-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Choose your Section\n</button>\n<div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#products\" role=\"tab\">Products</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#deliveries\" role=\"tab\">Schedule</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#orders\" role=\"tab\">Orders</a>\n    <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#accountInfo\" role=\"tab\">Account Info</a>\n</div>\n</div>\n\n<!-- Tab panels -->\n<div class=\"tab-content\" style=\"padding: 1em;\">\n    \n    <!-- Products Panel -->\n    <div class=\"tab-pane fade in show active\" id=\"products\" role=\"tabpanel\">\n        <app-producer-products></app-producer-products>\n    </div>\n    <!--/ Products Panel-->\n    \n    <!-- Deliveries Panel -->\n    <div class=\"tab-pane fade\" id=\"deliveries\" role=\"tabpanel\">\n        <app-producer-schedule></app-producer-schedule>\n    </div>\n    <!--/ Deliveries Panel-->\n    \n    <!-- Orders Panel -->\n    <div class=\"tab-pane fade\" id=\"orders\" role=\"tabpanel\">\n        <app-producer-orders></app-producer-orders>\n    </div>\n    <!--/ Orders Panel-->\n    \n    <!-- Account Panel -->\n    <div class=\"tab-pane fade\" id=\"accountInfo\" role=\"tabpanel\">\n        <app-account-info [user]=\"user\" [producer]=\"producer\"></app-account-info>\n    </div>\n    <!--/ Account Panel-->\n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_user_model__ = __webpack_require__("./src/app/core/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProducerDashboardComponent = /** @class */ (function () {
    function ProducerDashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    ProducerDashboardComponent.prototype.ngOnChanges = function () { };
    ;
    ProducerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getProducer()
            .subscribe(function (result) {
            _this.producer = result;
        });
        this.dashboardService.loadData(this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ProducerDashboardComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__core_models_user_model__["a" /* UserModel */])
    ], ProducerDashboardComponent.prototype, "user", void 0);
    ProducerDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-dashboard',
            template: __webpack_require__("./src/app/feature/dashboard/producer/producer-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/producer-dashboard.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__producer_dashboard_service__["a" /* ProducerDashboardService */]])
    ], ProducerDashboardComponent);
    return ProducerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-orders/producer-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div id=\"ordersAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"pendingOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#pendingOrdersCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"pendingOrdersCollapse\">Pending Orders   \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"pendingOrdersCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"pendingOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"pendingOrders\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"false\"\n                            [deletable]=\"false\"\n                            [pending]=\"true\"\n                            (orderAccepted)=\"onAcceptOrder($event)\"\n                            (orderDenied)=\"onDenyOrder($event)\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"acceptedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#acceptedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"acceptedOrdersCollapse\">Accepted Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"acceptedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"acceptedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"acceptedOrders\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [accepted]=\"true\"\n                            [deletable]=\"false\"\n                            (orderCompleted)=\"onCompleteOrder($event)\"\n                            (orderIncompleted)=\"onIncompleteOrder($event)\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"completedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#completedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"completedOrdersCollapse\">Completed Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"completedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"completedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"completedOrders\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"false\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"deniedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#deniedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"deniedOrdersCollapse\">Denied Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"deniedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"deniedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"deniedOrders\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"false\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"incompletedOrdersHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#ordersAccordion\" \n                            href=\"#incompletedOrdersCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"incompletedOrdersCollapse\">Incomplete Orders \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"incompletedOrdersCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"incompletedOrdersHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"incompletedOrders\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"false\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-orders/producer-orders.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-orders/producer-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_utility_utility_service__ = __webpack_require__("./src/app/core/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProducerOrdersComponent = /** @class */ (function () {
    function ProducerOrdersComponent(dashboardService, utilityService) {
        this.dashboardService = dashboardService;
        this.utilityService = utilityService;
        this.pendingOrders = [];
        this.acceptedOrders = [];
        this.completedOrders = [];
        this.deniedOrders = [];
        this.incompletedOrders = [];
        this.recordType = 'order';
        this.projectSettings = [
            {
                primaryKey: 'consumer',
                header: 'Consumer',
                format: 'null,firstName',
                sortable: true,
                sortPath: 'firstName',
                nested: false
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Date',
                format: 'mediumDate,createdDate',
                sortable: true,
                sortPath: '',
                nested: false
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Time',
                format: 'shortTime,createdDate',
                sortable: false,
                sortPath: '',
                nested: false
            },
            {
                primaryKey: 'chosenSchedule',
                header: 'Location',
                format: 'null,city',
                sortable: true,
                sortPath: 'city',
                nested: false
            },
            {
                primaryKey: 'chosenSchedule',
                header: 'Schedule Date',
                format: 'mediumDate,startDateTime',
                sortable: true,
                sortPath: '',
                nested: false
            },
            {
                primaryKey: 'orderDetails',
                header: 'Order Total',
                format: 'currency,orderValue',
                sortable: true,
                sortPath: '',
                nested: false
            }
        ];
    }
    ProducerOrdersComponent.prototype.ngOnChanges = function () { };
    ProducerOrdersComponent.prototype.toggleView = function (order) {
        order.showView = !order.showView;
    };
    ProducerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getOrders()
            .subscribe(// returns an array
        function (orders) {
            var pending = orders.filter(function (order) { return order.orderDetails.orderStatus === 'pending'; });
            _this.pendingOrders = pending;
            var accepted = orders.filter(function (order) { return order.orderDetails.orderStatus === 'accepted'; });
            _this.acceptedOrders = accepted;
            var completed = orders.filter(function (order) { return order.orderDetails.orderStatus === 'completed'; });
            _this.completedOrders = completed;
            var denied = orders.filter(function (order) { return order.orderDetails.orderStatus === 'denied'; });
            _this.deniedOrders = denied;
            var incomplete = orders.filter(function (order) { return order.orderDetails.orderStatus === 'incomplete'; });
            _this.incompletedOrders = incomplete;
        });
    };
    ProducerOrdersComponent.prototype.onAcceptOrder = function ($event) {
        // remove from pending array
        this.pendingOrders = this.utilityService.removeByAttribute(this.pendingOrders, 'id', $event.id);
        // add to accepted orders
        this.acceptedOrders.push($event);
    };
    ;
    ProducerOrdersComponent.prototype.onDenyOrder = function ($event) {
        // remove from pending array
        this.pendingOrders = this.utilityService.removeByAttribute(this.pendingOrders, 'id', $event.id);
        // add to denied orders
        this.deniedOrders.push($event);
    };
    ;
    ProducerOrdersComponent.prototype.onCompleteOrder = function ($event) {
        // remove from pending array
        this.acceptedOrders = this.utilityService.removeByAttribute(this.acceptedOrders, 'id', $event.id);
        // add to denied orders
        this.completedOrders.push($event);
    };
    ;
    ProducerOrdersComponent.prototype.onIncompleteOrder = function ($event) {
        // remove from pending array
        this.acceptedOrders = this.utilityService.removeByAttribute(this.acceptedOrders, 'id', $event.id);
        // add to denied orders
        this.incompletedOrders.push($event);
    };
    ;
    ProducerOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-orders',
            template: __webpack_require__("./src/app/feature/dashboard/producer/producer-orders/producer-orders.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/producer-orders/producer-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__producer_dashboard_service__["a" /* ProducerDashboardService */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_utility_utility_service__["a" /* UtilityService */]])
    ], ProducerOrdersComponent);
    return ProducerOrdersComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-products/producer-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col col-xs-12\">\n\n        <div id=\"productsAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n            <!-- Add new product button -->\n            <div class=\"row text-center\">\n                <div class=\"col col-xs-12\">\n                    <div class=\"btn-group\">\n                        <a class=\"btn btn-olf-primary\" (click)=\"openModal()\"><i class=\"fa fa-plus prefix mr-3\"></i>Add New Product</a>\n                    </div>\n                    <br>\n                </div>\n            </div>\n\n            <br>\n            \n            <!-- Current Product Table -->\n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"currentProductsHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            data-toggle=\"collapse\" \n                            data-parent=\"#productsAccordion\" \n                            href=\"#currentProductsCollapse\" \n                            aria-expanded=\"true\" \n                            aria-controls=\"currentProductsCollapse\">Current Products \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"currentProductsCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"currentProductsHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"currentProducts\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\"\n                            (productObsoleted)=\"onProductObsoleted($event)\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- Out of stock Product Table -->\n            <div class=\"card\" *ngIf=\"outOfStockProducts.length > 0\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"outOfStockProductsHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#productsAccordion\" \n                            href=\"#outOfStockProductsCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"outOfStockProductsCollapse\">Out-of-stock Products \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"outOfStockProductsCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"outOfStockProductsHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"outOfStockProducts\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\"\n                            (productObsoleted)=\"onProductObsoleted($event)\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- Deleted Product Table -->\n            <div class=\"card\" *ngIf=\"obsoletedProducts.length > 0\">\n                <div class=\"card-header dash-accordion\" role=\"tab\" id=\"deletedProductsHeading\">\n                    <h5 class=\"mb-0\">\n                        <a \n                            class=\"collapsed\" \n                            data-toggle=\"collapse\" \n                            data-parent=\"#productsAccordion\" \n                            href=\"#deletedProductsCollapse\" \n                            aria-expanded=\"false\" \n                            aria-controls=\"deletedProductsCollapse\">Deleted Products \n                                <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                        </a>\n                    </h5>\n                </div>\n                <div id=\"deletedProductsCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"deletedProductsHeading\">\n                    <div class=\"card-block\">\n                        <app-table-layout\n                            [records]=\"obsoletedProducts\"\n                            [recordType]=\"recordType\"\n                            [settings]=\"projectSettings\"\n                            [editable]=\"editable\"\n                            [deletable]=\"deletable\"\n                            (productDeleted)=\"onProductDeleted($event)\">\n                        </app-table-layout>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-products/producer-products.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-products/producer-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_utility_utility_service__ = __webpack_require__("./src/app/core/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_product_add_product_modal_add_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component.ts");
// import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ProductModel } from '../../../../core/models/product.model';
// import { ProducerModel } from '../../../../core/models/producer.model';
// import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';
// // import { ProducerService } from '../../../../core/services/producer/producer.service';
// import { ProducerDashboardService } from '../../producer-dashboard.service';
// import { AddProductModalComponent } from '../modals/product/add-product-modal/add-product-modal.component';
// @Component({
//   selector: 'app-producer-products',
//   templateUrl: './producer-products.component.html',
//   styleUrls: ['./producer-products.component.scss']
// })
// export class ProducerProductsComponent implements OnInit {
//   @ViewChild('modalContent') modalContent: TemplateRef<any>;
//   form: FormGroup; // this will hold our form data in a js object
//   producer: ProducerModel;
//   currentProducts: ProductModel[] = [];
//   outOfStockProducts: ProductModel[] = [];
//   deletedProducts: ProductModel[] = [];
//   recordType: string = 'product';
//   editable: boolean = true;
//   deletable: boolean = true;
//   projectSettings: ColumnSettingModel[] =
//   [
//       {
//         primaryKey: 'name',
//         header: 'Name'
//       },
//       {
//         primaryKey: 'pricePerUnit',
//         header: 'Price Per',
//         // format: 'currency'
//         format: 'currency'
//       },
//       {
//         primaryKey: 'unit',
//         header: 'Unit'
//       },
//       {
//         primaryKey: 'unitsPer',
//         header: 'Units Per'
//       },
//       {
//         primaryKey: 'category',
//         header: 'Category'
//       },
//       {
//         primaryKey: 'subcategory',
//         header: 'Subcat'
//       },
//       {
//         primaryKey: 'qtyAvailable',
//         header: 'Available'
//       },
//       {
//         primaryKey: 'qtyPending',
//         header: 'Pending'
//       }
//   ];
//   constructor(private dashboardService: ProducerDashboardService,
//               private modal: NgbModal) {  };
//   openModal() {
//     const modalRef = this.modal.open(AddProductModalComponent, { size: 'lg' });
//     modalRef.componentInstance.itemCreated
//       .subscribe(
//         (product) => {
//           this.createNew(product);
//         }
//       );
//   };
//   createNew(product: ProductModel) {
//     if (product.qtyAvailable > 0) {
//       this.currentProducts.push(product);
//     } else {
//       this.outOfStockProducts.push(product);
//     };
//   };
//   // view a single product right in the table
//   toggleView(product: any) {
//     product.showView = !product.showView;
//   };
//   // edit a single product right in the table
//   toggleEditForm(product: any) {
//     product.showEditForm = !product.showEditForm;
//   };
//   ngOnInit() {
//     this.dashboardService.getProducer()
//       .subscribe(
//         result => {
//           this.producer = result;
//         }
//       )
//     this.dashboardService.getProducts()
//       .subscribe( // returns an array
//         (products) => {
//           const current = products.filter(product => product.qtyAvailable > 0 && product.isObsolete === false);
//           this.currentProducts = current;
//           const outOfStock = products.filter(product => product.qtyAvailable === 0 && product.isObsolete === false);
//           this.outOfStockProducts = outOfStock;
//           const deleted = products.filter(product => product.isObsolete === true);
//           this.deletedProducts = deleted;
//         }
//       );
//   };
// }


// import { ProducerService } from '../../../../core/services/producer/producer.service';



var ProducerProductsComponent = /** @class */ (function () {
    function ProducerProductsComponent(dashboardService, modal, utilityService) {
        this.dashboardService = dashboardService;
        this.modal = modal;
        this.utilityService = utilityService;
        this.currentProducts = [];
        this.outOfStockProducts = [];
        this.obsoletedProducts = [];
        this.recordType = 'product';
        this.editable = true;
        this.deletable = true;
        this.projectSettings = [
            {
                primaryKey: 'name',
                header: 'Name',
                sortable: true
            },
            {
                primaryKey: 'pricePerUnit',
                header: 'Price Per',
                format: 'currency',
                sortable: true
            },
            {
                primaryKey: 'unit',
                header: 'Unit',
                format: 'uppercase',
                sortable: true
            },
            {
                primaryKey: 'unitsPer',
                header: 'Units Per',
                sortable: true
            },
            {
                primaryKey: 'category',
                header: 'Category',
                sortable: true
            },
            {
                primaryKey: 'subcategory',
                header: 'Subcat',
                sortable: true
            },
            {
                primaryKey: 'qtyAvailable',
                header: 'Available',
                sortable: true
            },
            {
                primaryKey: 'qtyPending',
                header: 'Pending',
                sortable: true
            }
        ];
    }
    ;
    ProducerProductsComponent.prototype.openModal = function () {
        var _this = this;
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_4__modals_product_add_product_modal_add_product_modal_component__["a" /* AddProductModalComponent */], { size: 'lg' });
        modalRef.componentInstance.itemCreated
            .subscribe(function (product) {
            _this.createNew(product);
        });
    };
    ;
    ProducerProductsComponent.prototype.createNew = function (product) {
        if (product.qtyAvailable > 0) {
            this.currentProducts.push(product);
        }
        else {
            this.outOfStockProducts.push(product);
        }
        ;
    };
    ;
    // view a single product right in the table
    ProducerProductsComponent.prototype.toggleView = function (product) {
        product.showView = !product.showView;
    };
    ;
    // edit a single product right in the table
    ProducerProductsComponent.prototype.toggleEditForm = function (product) {
        product.showEditForm = !product.showEditForm;
    };
    ;
    ProducerProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getProducer()
            .subscribe(function (result) {
            _this.producer = result;
        });
        this.dashboardService.getProducts()
            .subscribe(// returns an array
        function (products) {
            var current = products.filter(function (product) { return product.qtyAvailable > 0 && product.isObsolete === false; });
            _this.currentProducts = current;
            var outOfStock = products.filter(function (product) { return product.qtyAvailable === 0 && product.isObsolete === false; });
            _this.outOfStockProducts = outOfStock;
            var obsolete = products.filter(function (product) { return product.isObsolete === true; });
            _this.obsoletedProducts = obsolete;
        });
    };
    ;
    ProducerProductsComponent.prototype.onProductObsoleted = function ($event) {
        // loop through each of the 2 arrays
        // find the product with the matching id
        // return the array name
        console.log('obsoleting: ', $event.id);
        // let arrayName = this.findArrayProductIsCurrentlyIn($event.id);
        // continue as per usual
        this.utilityService.removeByAttribute(this.currentProducts, 'id', $event.id);
        this.utilityService.removeByAttribute(this.outOfStockProducts, 'id', $event.id);
        // add to obsoleted array
        this.obsoletedProducts.push($event);
    };
    ;
    ProducerProductsComponent.prototype.onProductDeleted = function ($event) {
        console.log('removing: ', $event);
        this.obsoletedProducts = this.utilityService.removeByAttribute(this.obsoletedProducts, 'id', $event);
    };
    ;
    ProducerProductsComponent.prototype.findArrayProductIsCurrentlyIn = function (id) {
        var arrayName;
        for (var i = void 0; i < this.currentProducts.length; i++) {
            if (this.currentProducts[i].id === id) {
                console.log('currentProducts id: ', this.currentProducts[i].id);
                arrayName = 'currentProducts';
            }
        }
        ;
        for (var i = void 0; i < this.outOfStockProducts.length; i++) {
            if (this.outOfStockProducts[i].id === id) {
                arrayName = 'outOfStockProducts';
            }
        }
        ;
        for (var i = void 0; i < this.obsoletedProducts.length; i++) {
            if (this.obsoletedProducts[i].id === id) {
                arrayName = 'obsoletedProducts';
            }
        }
        ;
        console.log('arrayName: ', arrayName);
        return arrayName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TemplateRef */])
    ], ProducerProductsComponent.prototype, "modalContent", void 0);
    ProducerProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-products',
            template: __webpack_require__("./src/app/feature/dashboard/producer/producer-products/producer-products.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/producer-products/producer-products.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__producer_dashboard_service__["a" /* ProducerDashboardService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_utility_utility_service__["a" /* UtilityService */]])
    ], ProducerProductsComponent);
    return ProducerProductsComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-schedule/producer-schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col col-xs-12\">\n            <div id=\"deliveriesAccordion\" role=\"tablist\" aria-multiselectable=\"true\">\n    \n                <!-- Add new schedule button -->\n                <div class=\"row text-center\">\n                    <div class=\"col col-xs-12\">\n                        <div class=\"btn-group\">\n                            <a class=\"btn btn-olf-primary\" (click)=\"openModal()\"><i class=\"fa fa-plus prefix mr-3\"></i>Add New Schedule</a>\n                        </div>\n                        <br>\n                    </div>\n                </div>\n    \n                <br>\n                \n                <div class=\"card\">\n                    <div class=\"card-header dash-accordion\" role=\"tab\" id=\"upcomingDeliveriesHeading\">\n                        <h5 class=\"mb-0\">\n                            <a \n                                data-toggle=\"collapse\" \n                                data-parent=\"#deliveriesAccordion\" \n                                href=\"#upcomingDeliveriesCollapse\" \n                                aria-expanded=\"true\" \n                                aria-controls=\"upcomingDeliveriesCollapse\">Upcoming Schedule  \n                                    <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                            </a>\n                        </h5>\n                    </div>\n                    <div id=\"upcomingDeliveriesCollapse\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"upcomingDeliveriesHeading\">\n                        <div class=\"card-block\">\n                            <app-table-layout *ngIf=\"upcomingSchedule.length > 0\"\n                                [records]=\"upcomingSchedule\"\n                                [recordType]=\"recordType\"\n                                [settings]=\"projectSettings\"\n                                [editable]=\"true\"\n                                [deletable]=\"true\"\n                                (scheduleDeleted)=\"onScheduleDeleted($event)\">\n                            </app-table-layout>\n                            <div *ngIf=\"upcomingSchedule.length < 1\">\n                                <p>You have no upcoming deliveries or pickups scheduled.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"card\">\n                    <div class=\"card-header dash-accordion\" role=\"tab\" id=\"completedDeliveriesHeading\">\n                        <h5 class=\"mb-0\">\n                            <a \n                                class=\"collapsed\" \n                                data-toggle=\"collapse\" \n                                data-parent=\"#deliveriesAccordion\" \n                                href=\"#completedDeliveriesCollapse\" \n                                aria-expanded=\"false\" \n                                aria-controls=\"completedDeliveriesCollapse\">Completed Schedule \n                                    <i class=\"fa fa-caret-down fa-lg\" aria-hidden=\"true\"></i>\n                            </a>\n                        </h5>\n                    </div>\n                    <div id=\"completedDeliveriesCollapse\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"completedDeliveriesHeading\">\n                        <div class=\"card-block\">\n                            <app-table-layout\n                                [records]=\"completedSchedule\"\n                                [recordType]=\"recordType\"\n                                [settings]=\"projectSettings\"\n                                [editable]=\"false\"\n                                [deletable]=\"false\">\n                            </app-table-layout>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-schedule/producer-schedule.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/dashboard/producer/producer-schedule/producer-schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_utility_utility_service__ = __webpack_require__("./src/app/core/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_schedule_add_schedule_modal_add_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component.ts");
// import { Component, OnInit } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ProducerDashboardService } from '../../producer-dashboard.service';
// import { ScheduleModel } from '../../../../core/models/schedule.model';
// import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';
// import { AddScheduleModalComponent } from '../modals/schedule/add-schedule-modal/add-schedule-modal.component';
// @Component({
//   selector: 'app-producer-schedule',
//   templateUrl: './producer-schedule.component.html',
//   styleUrls: ['./producer-schedule.component.scss']
// })
// export class ProducerScheduleComponent implements OnInit {
//   upcomingSchedule: ScheduleModel[] = [];
//   completedSchedule: ScheduleModel[] = [];
//   recordType: string = 'schedule';
//   projectSettings: ColumnSettingModel[] = 
//   [
//       {
//         primaryKey: 'type',
//         header: 'Type'
//       },
//       {
//         primaryKey: 'startDateTime',
//         header: 'Date',
//         format: 'mediumDate'
//       },
//       {
//         primaryKey: 'startDateTime',
//         header: 'Start Time',
//         format: 'shortTime'
//       },
//       {
//         primaryKey: 'endDateTime',
//         header: 'End Time',
//         format: 'shortTime'
//       },
//       {
//         primaryKey: 'city',
//         header: 'Location'
//       },
//       {
//         primaryKey: 'orderDeadline',
//         header: 'Deadline Date',
//         format: 'mediumDate'
//       },
//       {
//         primaryKey: 'orderDeadline',
//         header: 'Deadline Time',
//         format: 'shortTime'
//       }
//   ];
//   constructor(private dashboardService: ProducerDashboardService,
//               private modal: NgbModal) { }
//   openModal() {
//     // this.modal.open(this.modalContent, { size: 'lg' });  
//     const modalRef = this.modal.open(AddScheduleModalComponent, { size: 'lg' });
//     modalRef.componentInstance.itemCreated.subscribe((schedule) => {
//       console.log('schedule from event emitter: ', schedule);
//       this.createNew(schedule);
//     });
//   }
//   ngOnInit() {
//     let date = new Date().toISOString();
//     this.dashboardService.getSchedules()
//       .subscribe( // returns an array
//         (schedules) => {
//           const upcoming = schedules.filter(schedule => schedule.endDateTime > date);
//           this.upcomingSchedule = upcoming;
//           console.log('upcoming: ', this.upcomingSchedule);
//           const completed = schedules.filter(schedule => schedule.endDateTime < date);
//           this.completedSchedule = completed;
//           console.log('completed: ', this.completedSchedule);
//         }
//       );
//   }
//   createNew(schedule: ScheduleModel) {
//     this.upcomingSchedule.push(schedule);
//   };
// }





var ProducerScheduleComponent = /** @class */ (function () {
    function ProducerScheduleComponent(dashboardService, modal, utilityService) {
        this.dashboardService = dashboardService;
        this.modal = modal;
        this.utilityService = utilityService;
        this.upcomingSchedule = [];
        this.completedSchedule = [];
        this.recordType = 'schedule';
        this.projectSettings = [
            {
                primaryKey: 'type',
                header: 'Type',
                sortable: true
            },
            {
                primaryKey: 'startDateTime',
                header: 'Date',
                format: 'mediumDate',
                sortable: true
            },
            {
                primaryKey: 'startDateTime',
                header: 'Start Time',
                format: 'shortTime',
                sortable: false
            },
            {
                primaryKey: 'endDateTime',
                header: 'End Time',
                format: 'shortTime',
                sortable: false
            },
            {
                primaryKey: 'city',
                header: 'Location',
                sortable: true
            },
            {
                primaryKey: 'orderDeadline',
                header: 'Deadline Date',
                format: 'mediumDate',
                sortable: true
            },
            {
                primaryKey: 'orderDeadline',
                header: 'Deadline Time',
                format: 'shortTime',
                sortable: false
            }
        ];
    }
    ProducerScheduleComponent.prototype.openModal = function () {
        var _this = this;
        // this.modal.open(this.modalContent, { size: 'lg' });  
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_4__modals_schedule_add_schedule_modal_add_schedule_modal_component__["a" /* AddScheduleModalComponent */], { size: 'lg' });
        modalRef.componentInstance.itemCreated.subscribe(function (schedule) {
            _this.createNew(schedule);
        });
    };
    ProducerScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date().toISOString();
        this.dashboardService.getSchedules()
            .subscribe(// returns an array
        function (schedules) {
            var upcoming = schedules.filter(function (schedule) { return schedule.endDateTime > date; });
            _this.upcomingSchedule = upcoming;
            console.log('upcoming: ', _this.upcomingSchedule);
            var completed = schedules.filter(function (schedule) { return schedule.endDateTime < date; });
            _this.completedSchedule = completed;
        });
    };
    ;
    ProducerScheduleComponent.prototype.createNew = function (schedule) {
        this.upcomingSchedule.push(schedule);
    };
    ;
    ProducerScheduleComponent.prototype.onScheduleDeleted = function ($event) {
        // remove from upcoming array
        this.upcomingSchedule = this.utilityService.removeByAttribute(this.upcomingSchedule, 'id', $event);
    };
    ;
    ProducerScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-schedule',
            template: __webpack_require__("./src/app/feature/dashboard/producer/producer-schedule/producer-schedule.component.html"),
            styles: [__webpack_require__("./src/app/feature/dashboard/producer/producer-schedule/producer-schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__producer_dashboard_service__["a" /* ProducerDashboardService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_utility_utility_service__["a" /* UtilityService */]])
    ], ProducerScheduleComponent);
    return ProducerScheduleComponent;
}());



/***/ }),

/***/ "./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  learn-more-consumer works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnMoreConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnMoreConsumerComponent = /** @class */ (function () {
    function LearnMoreConsumerComponent() {
    }
    LearnMoreConsumerComponent.prototype.ngOnInit = function () {
    };
    LearnMoreConsumerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-learn-more-consumer',
            template: __webpack_require__("./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.html"),
            styles: [__webpack_require__("./src/app/feature/learn-more/learn-more-consumer/learn-more-consumer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnMoreConsumerComponent);
    return LearnMoreConsumerComponent;
}());



/***/ }),

/***/ "./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  learn-more-producer works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnMoreProducerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnMoreProducerComponent = /** @class */ (function () {
    function LearnMoreProducerComponent() {
    }
    LearnMoreProducerComponent.prototype.ngOnInit = function () {
    };
    LearnMoreProducerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-learn-more-producer',
            template: __webpack_require__("./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.html"),
            styles: [__webpack_require__("./src/app/feature/learn-more/learn-more-producer/learn-more-producer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnMoreProducerComponent);
    return LearnMoreProducerComponent;
}());



/***/ }),

/***/ "./src/app/feature/learn-more/learn-more.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  learn-more works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature/learn-more/learn-more.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/learn-more/learn-more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnMoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnMoreComponent = /** @class */ (function () {
    function LearnMoreComponent() {
    }
    LearnMoreComponent.prototype.ngOnInit = function () {
    };
    LearnMoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-learn-more',
            template: __webpack_require__("./src/app/feature/learn-more/learn-more.component.html"),
            styles: [__webpack_require__("./src/app/feature/learn-more/learn-more.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LearnMoreComponent);
    return LearnMoreComponent;
}());



/***/ }),

/***/ "./src/app/feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div class=\"card\">\n    \n    <!--Card image-->\n    <!--  [ngClass]=\"{outOfStockOverlay: isOutOfStock}\" -->\n    <div class=\"view overlay hm-white-slight cover-div\">\n        <img src=\"../../assets/images/{{ product.image }}\" class=\"img-fluid cover\" alt=\"\" >\n        <a [routerLink]=\"['../' + product.producer.id + '/product/' + product.id]\">\n            <div class=\"mask waves-effect waves-light\"></div>\n        </a>\n        <div class=\"outOfStockOverlay cover-div\" *ngIf=\"isOutOfStock\"><img class=\"img-fluid cover\" src=\"../../assets/images/outOfStock.png\"></div>\n        \n    </div>\n    <!--/.Card image-->\n\n    <!--Card content-->\n    <div class=\"card-block text-center\">\n        <!--Product Name-->\n        \n        <h5 class=\"card-title\"><strong><a [routerLink]=\"['../' + product.producer.id + '/product/' + product.id]\">{{ product.name }}</a></strong></h5>\n\n        <!--Description-->\n        <p class=\"card-text text-left text-truncate small\">{{ product.description }}</p>\n\n    </div>\n    <!--/.Card content-->\n\n    <!--Card footer-->\n    <div class=\"card-footer text-center px-0 pb-0\">\n        <p>{{ product.pricePerUnit | currency:'USD':true:'1.2-2' }}/{{ product.unit }}</p>\n        <app-add-to-cart [product]=\"product\"></app-add-to-cart>\n    </div>\n    <!--/.Card footer-->\n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./src/app/feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component.scss":
/***/ (function(module, exports) {

module.exports = ".cover-div {\n  width: 100%; }\n\n.cover-div:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%; }\n\n.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerPageProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProducerPageProductCardComponent = /** @class */ (function () {
    function ProducerPageProductCardComponent() {
    }
    ProducerPageProductCardComponent.prototype.ngOnInit = function () {
        this.isOutOfStock = this.product.qtyAvailable < 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_product_model__["a" /* ProductModel */])
    ], ProducerPageProductCardComponent.prototype, "product", void 0);
    ProducerPageProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-page-product-card',
            template: __webpack_require__("./src/app/feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component.html"),
            styles: [__webpack_require__("./src/app/feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProducerPageProductCardComponent);
    return ProducerPageProductCardComponent;
}());



/***/ }),

/***/ "./src/app/feature/producer/producer-page/producer-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center\">\n  <div class=\"col-12 col-sm-8 push-sm-4 col-md-4 push-md-6 text-center\">\n    <h2>{{ producer.name | uppercase }}</h2>\n    <p>{{ producer.location }}, {{ producer.province | uppercase }}</p>\n    <a pageScroll href=\"#products\" class=\"btn btn-olf-primary\">Jump to Products</a>\n    <a pageScroll href=\"#schedule\" class=\"btn btn-olf-primary\">Jump to Schedule</a>\n  </div>\n  <div class=\"col-10 offset-1 col-sm-4 pull-sm-8 offset-sm-0 col-md-4 pull-md-4 offset-md-2\">\n      <img src=\"../../../../assets/images/{{ producer.logoUrl }}\" class=\"img-fluid\" alt=\"food\">\n  </div>\n</div>\n  \n<hr>\n\n<div class=\"row\">\n  <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-3\">\n    <p>{{ producer.description }}</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"divider-new\">\n      <h3 id=\"schedule\">UPCOMING SCHEDULE</h3>\n    </div>\n    <app-schedule></app-schedule>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"divider-new text-center\">\n      <h3 id=\"products\">PRODUCTS</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 offset-sm-1 col-lg-10 offset-lg-1\">\n        <div class=\"row\">\n          <app-producer-page-product-card class=\"col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 mb-2\"  *ngFor=\"let product of products\" [product]=\"product\"></app-producer-page-product-card>\n          <app-producer-page-product-card class=\"col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 mb-2\"  *ngFor=\"let product of outOfStockProducts\" [product]=\"product\"></app-producer-page-product-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature/producer/producer-page/producer-page.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/producer/producer-page/producer-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_producer_producer_service__ = __webpack_require__("./src/app/core/services/producer/producer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProducerPageComponent = /** @class */ (function () {
    function ProducerPageComponent(producerService) {
        this.producerService = producerService;
        this.products = [];
        this.outOfStockProducts = [];
    }
    ProducerPageComponent.prototype.ngOnChanges = function () { };
    ProducerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producerService.getProducer()
            .subscribe(function (result) {
            _this.producer = result;
        });
        this.producerService.getAllProducts()
            .subscribe(function (results) {
            for (var i = 0; i < results.length; i++) {
                if (results[i].qtyAvailable < 1) {
                    _this.outOfStockProducts.push(results[i]);
                }
                else {
                    _this.products.push(results[i]);
                }
            }
            // this.products = results;
        });
        this.producerService.getAllSchedule()
            .subscribe(function (results) {
            _this.schedule = results;
        });
    };
    ProducerPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-page',
            template: __webpack_require__("./src/app/feature/producer/producer-page/producer-page.component.html"),
            styles: [__webpack_require__("./src/app/feature/producer/producer-page/producer-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_producer_producer_service__["a" /* ProducerService */]])
    ], ProducerPageComponent);
    return ProducerPageComponent;
}());



/***/ }),

/***/ "./src/app/feature/producer/producer.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/feature/producer/producer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/producer/producer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_producer_producer_service__ = __webpack_require__("./src/app/core/services/producer/producer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProducerComponent = /** @class */ (function () {
    function ProducerComponent(route, router, producerService) {
        this.route = route;
        this.router = router;
        this.producerService = producerService;
        this.products = [];
        this.schedule = [];
    }
    ProducerComponent.prototype.ngOnChanges = function () { };
    ;
    ProducerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // NOTE - because I've moved the producer page out of this component, this 'id' won't work any more.
        // maybe move this declaration to the producer page component and then emit it to this component
        // then, when it is received, call the loadProducerData method
        var id = this.route.snapshot.paramMap.get('id');
        // subscribe to the appropriate methods to populate data
        this.producerService.getProducer()
            .subscribe(function (result) {
            _this.producer = result;
        });
        this.producerService.getAllProducts()
            .subscribe(function (result) {
            _this.products = result;
        });
        this.producerService.getAllSchedule()
            .subscribe(function (result) {
            _this.schedule = result;
        });
        // load the producer's information
        this.producerService.loadProducerData(+id);
    };
    ProducerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer',
            template: __webpack_require__("./src/app/feature/producer/producer.component.html"),
            styles: [__webpack_require__("./src/app/feature/producer/producer.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__core_services_producer_producer_service__["a" /* ProducerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_producer_producer_service__["a" /* ProducerService */]])
    ], ProducerComponent);
    return ProducerComponent;
}());



/***/ }),

/***/ "./src/app/feature/producer/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- display once resolved -->\n<div class=\"row\" *ngIf=\"product?.producer\">\n\t<div class=\"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3\">\n\t\t<!-- Product Details -->\n\t\t<div class=\"row justify-content-sm-center\">\n\t\t\t<div class=\"col col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-1\">\n\t\t\t\t<img src=\"../../../../assets/images/{{ product.image }}\" class=\"img-fluid\" alt=\"food\">\n\t\t\t</div>\n\t\t\t<div class=\"col col-xs-12 col-sm-6\">\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<h4><a [routerLink]=\"['../../../../producer/' + product.producer.id]\">{{ product.producer?.name }}</a></h4>\n\t\t\t\t\t<h2>{{ product.name }}</h2>\n\t\t\t\t</div>\n\t\t\t\t<p>{{ product.description }}</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t<div class=\"row justify-content-sm-center\">\n\t\t\t<div class=\"col-5 col-md-3 col-offset-md-2\">\n\t\t\t\t<h3 class=\"text-center\">{{ product.pricePerUnit }}/{{ product.unit }}</h3>\n\t\t\t</div>\n\t\t\t<div class=\"col-7 col-md-4\">\n\t\t\t\t\t<app-add-to-cart [product]=\"product\"></app-add-to-cart>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\t\n\t\t<hr>\n\t\t\n\t\t<div> \n\t\t\t<!-- Delivery Schedule -->\n\t\t\t<div class=\"divider-new\">\n\t            <a [routerLink]=\"['../../../../producer/' + product.producer.id + '/schedule']\" class=\"btn btn-olf-primary\">View this Producer's Upcoming Schedule</a>\n\t        </div>\n\t\t\t<!-- Related Products / Other products from the same producer -->\n\t\t\t<div class=\"divider-new\">\n\t            <a [routerLink]=\"['../../../../producer/' + product.producer.id]\" class=\"btn btn-olf-primary\">View All Products from this Producer</a>\n\t\t\t</div>\n\t\t</div>\n\t        \n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/feature/producer/product/product.component.scss":
/***/ (function(module, exports) {

module.exports = ".cover-div {\n  width: 100%; }\n\n.cover-div:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%; }\n\n.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/feature/producer/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_producer_producer_service__ = __webpack_require__("./src/app/core/services/producer/producer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, producerService) {
        this.route = route;
        this.producerService = producerService;
    }
    ProductComponent.prototype.ngOnChanges = function () { };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.path = window.location.pathname;
        this.pathArray = this.path.split('/');
        this.producerId = this.pathArray[2];
        // note - the snapshot method being used here won't work if the user can navigate directly between product pages
        // see https://angular.io/guide/router#activated-route-in-action
        var id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        console.log(this.producerId);
        // subscribe to the get method results
        this.producerService.getProductById(id)
            .subscribe(function (result) { _this.product = result; });
        // load the product in the service
        this.producerService.loadProduct(id, this.producerId);
        console.log('product: ', this.product);
        // this is the non-snapshot method, it doesn't work right now but that might be caused by 'undefined' data being returned right now
        // try again after the endpoint is returning data I want
        // this.product = this.route.paramMap
        //   .switchMap((params: ParamMap) => {
        //     this.productService.getProductById(params.get('id'))
        //   });
        // console.log(this.route.paramMap)
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/feature/producer/product/product.component.html"),
            styles: [__webpack_require__("./src/app/feature/producer/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_producer_producer_service__["a" /* ProducerService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/feature/producer/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8 offset-lg-2\">\n      <ng-template #modalContent let-close=\"close\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">{{ modalData.event.meta.schedule.type }}</h5>\n          <button type=\"button\" class=\"close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div>\n            <h4>Event Details:</h4> \n            <br>           \n            <p><b>Where: </b>{{ modalData.event.meta.schedule.address }}, {{ modalData.event.meta.schedule.city }}, {{ modalData.event.meta.schedule.province }}</p>\n            <p><b>Date: </b>{{ modalData.event.meta.schedule.startDateTime | date:'fullDate' }}</p>\n            <p><b>Time: </b>{{ modalData.event.meta.schedule.startDateTime | date:'shortTime' }} - {{ modalData.event.meta.schedule.endDateTime | date:'shortTime' }}</p>\n            <p><b>Description: </b>{{ modalData.event.meta.schedule.description }}</p>\n            <p><b>Order Deadline: </b>{{ modalData.event.meta.schedule.orderDeadline | date:'shortTime' }}, {{ modalData.event.meta.schedule.orderDeadline | date:'fullDate' }}</p>\n            <div *ngIf=\"modalData.event.meta.schedule.type === 'Door-to-door Delivery' && modalData.event.meta.schedule.hasFee\">\n              <p><b>Delivery Fee: </b>{{ modalData.event.meta.schedule.fee | currency:'USD':true:'1.2-2' }}</p>\n              <p *ngIf=\"modalData.event.meta.schedule.feeWaiver\"><b>Fee Waiver: </b>{{ modalData.event.meta.schedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <a *ngIf=\"!isProducerPage\" class=\"btn btn-olf-primary\" [routerLink]=\"['../../../producer/' + modalData.event.meta.schedule.producerId]\" (click)=\"close()\">Visit their Store</a>\n          <button type=\"button\" class=\"btn btn-outline-olf-primary\" (click)=\"close()\">Close</button>\n        </div>\n      </ng-template>\n\n      <!-- Custom template for day in month view -->\n      <ng-template\n        #defaultTemplate\n        let-day=\"day\"\n        let-openDay=\"openDay\"\n        let-locale=\"locale\"\n        let-tooltipPlacement=\"tooltipPlacement\"\n        let-highlightDay=\"highlightDay\"\n        let-unhighlightDay=\"unhighlightDay\"\n        let-eventClicked=\"eventClicked\"\n        let-tooltipTemplate=\"tooltipTemplate\"\n        let-tooltipAppendToBody=\"tooltipAppendToBody\">\n        <div class=\"cal-cell-top\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n          <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n        </div>\n        <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n          <div\n            class=\"cal-event\"\n            *ngFor=\"let event of day.events\"\n            \n            [ngClass]=\"event?.cssClass\"\n            (mouseenter)=\"highlightDay.emit({event: event})\"\n            (mouseleave)=\"unhighlightDay.emit({event: event})\"\n            [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipEvent]=\"event\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            mwlDraggable\n            [dropData]=\"{event: event}\"\n            [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n            (mwlClick)=\"onEventClick($event, event)\">\n          </div>\n        </div>\n      </ng-template>\n        \n      <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-olf-primary\"\n              mwlCalendarPreviousView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"activeDayIsOpen = false\">\n              Previous\n            </div>\n            <!-- <div\n              class=\"btn btn-outline-secondary\"\n              mwlCalendarToday\n              [(viewDate)]=\"viewDate\">\n              Today\n            </div> -->\n            <div\n              class=\"btn btn-olf-primary\"\n              mwlCalendarNextView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"activeDayIsOpen = false\">\n              Next\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <!-- <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = 'month'\"\n              [class.active]=\"view === 'month'\">\n              Month\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = 'week'\"\n              [class.active]=\"view === 'week'\">\n              Week\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = 'day'\"\n              [class.active]=\"view === 'day'\">\n              Day\n            </div>\n          </div>\n        </div> -->\n      </div>\n\n      <br>\n\n      <div >\n          <div [ngSwitch]=\"view\">\n              <mwl-calendar-month-view\n                *ngSwitchCase=\"'month'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                [activeDayIsOpen]=\"activeDayIsOpen\"\n                (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\"\n                [cellTemplate]=\"defaultTemplate\">\n              </mwl-calendar-month-view>\n              <!-- <mwl-calendar-week-view\n                *ngSwitchCase=\"'week'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-week-view>\n              <mwl-calendar-day-view\n                *ngSwitchCase=\"'day'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-day-view> -->\n            </div>\n      </div>\n      \n        \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/producer/schedule/schedule.component.scss":
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/feature/producer/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_producer_producer_service__ = __webpack_require__("./src/app/core/services/producer/producer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    green: {
        primary: '#3c910f',
        secondary: '#FAE3E3'
    }
};
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(modal, route, producerService) {
        this.modal = modal;
        this.route = route;
        this.producerService = producerService;
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.events = [];
        this.activeDayIsOpen = true;
    }
    ScheduleComponent.prototype.ngOnChanges = function () { };
    ScheduleComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    ScheduleComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    ScheduleComponent.prototype.pathIsProducerPage = function (pathArray) {
        if (pathArray.length === 3) {
            return true;
        }
        else {
            return false;
        }
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // test the path in order to display the approprate link in the modal if not on Producer Page
        this.path = window.location.pathname;
        this.pathArray = this.path.split('/');
        this.isProducerPage = this.pathIsProducerPage(this.pathArray);
        // subscribe to the get method results
        this.producerService.getAllSchedule()
            .subscribe(function (result) {
            var data = result;
            data.forEach(function (result) {
                _this.events.push({
                    title: result.type,
                    color: colors.green,
                    start: new Date(result.startDateTime),
                    meta: {
                        schedule: result
                    }
                });
            });
            _this.refresh.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TemplateRef */])
    ], ScheduleComponent.prototype, "modalContent", void 0);
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-schedule',
            template: __webpack_require__("./src/app/feature/producer/schedule/schedule.component.html"),
            styles: [__webpack_require__("./src/app/feature/producer/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_producer_producer_service__["a" /* ProducerService */]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-options/search-options/search-options.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\n    <div class=\"card-header olf-primary-color white-text\">\n        Search Options\n    </div>\n    <div class=\"card-block grey lighten-3\">\n        <p class=\"card-text\">Modify the settings below to narrow your search.</p>\n        <hr>\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-12\">\n                    <h5 class=\"card-title\">Categories</h5>\n                        <div *ngFor=\"let category of categoriesList; let i = index\">\n                            <input type=\"checkbox\" id=\"c.{{ category }}\" name=\"c.{{ category }}\" [ngModel]=\"checkboxValue\" [checked]=\"checkboxValue\">\n                            <label for=\"c.{{ category }}\">{{ category }}</label>\n                        </div>\n                </div>\n                <hr>\n                \n                <hr>\n                <div class=\"col-6 col-md-12\">\n                    <h5 class=\"card-title\">Delivery Types</h5>\n                    <form-group>\n                        <div *ngFor=\"let delivery of deliveryTypes\">\n                            <input type=\"checkbox\" id=\"d.{{ delivery }}\" name=\"d.{{ delivery }}\" [ngModel]=\"checkboxValue\" [checked]=\"checkboxValue\">\n                            <label for=\"d.{{ delivery }}\">{{ delivery }}</label>\n                        </div>\n                    </form-group>\n                </div>\n            </div>\n            <div class=\"row\">\n                <button type=\"submit\" class=\"btn btn-olf-primary mx-auto\">Search!</button>\n                <button type=\"button\" class=\"btn btn-olf-primary mx-auto\" (click)=\"reset(f)\">Reset Search</button>\n            </div>\n        </form>\n        \n    </div>\n</div> -->\n\n<!--Panel-->\n<div class=\"card\">\n        <div class=\"card-header olf-primary-color white-text\">\n            Search Options\n        </div>\n        <div class=\"card-block grey lighten-3\">\n            <p class=\"card-text\">Modify the settings below to narrow your search.</p>\n            <hr>\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                <div class=\"row\">\n                    <div class=\"col-6 col-md-12\">\n                        <h5 class=\"card-title\">Categories</h5>\n                            <div *ngFor=\"let category of categoriesList; let i = index\">\n                                <input type=\"checkbox\" id=\"c.{{ category.category }}\" name=\"c.{{ category.category }}\" [(ngModel)]=\"category.checkboxValue\" [checked]=\"category.checkboxValue\">\n                                <label for=\"c.{{ category.category }}\">{{ category.category }}</label>\n                            </div>\n                    </div>\n                    <hr>\n                    \n                    <hr>\n                    <div class=\"col-6 col-md-12\">\n                        <h5 class=\"card-title\">Delivery Types</h5>\n                        <form-group>\n                            <div *ngFor=\"let delivery of deliveryTypes\">\n                                <input type=\"checkbox\" id=\"d.{{ delivery.type }}\" name=\"d.{{ delivery.type }}\" [(ngModel)]=\"delivery.checkboxValue\" [checked]=\"delivery.checkboxValue\">\n                                <label for=\"d.{{ delivery.type }}\">{{ delivery.type }}</label>\n                            </div>\n                        </form-group>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <button type=\"submit\" class=\"btn btn-olf-primary mx-auto\">Search!</button>\n                    <button type=\"button\" class=\"btn btn-olf-primary mx-auto\" (click)=\"reset(f)\">Reset Search</button>\n                </div>\n            </form>\n            \n        </div>\n    </div>\n    <!--/.Panel-->\n"

/***/ }),

/***/ "./src/app/feature/search/search-options/search-options/search-options.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-options/search-options/search-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__ = __webpack_require__("./src/app/core/services/search/search.service.ts");
// import { Component, OnInit, OnChanges } from '@angular/core';
// import { NgForm } from '@angular/forms';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { SearchService } from '../../../../core/services/search/search.service';
// @Component({
//   selector: 'app-search-options',
//   templateUrl: './search-options.component.html',
//   styleUrls: ['./search-options.component.scss']
// })
// export class SearchOptionsComponent implements OnInit, OnChanges {
//   checkboxValue: boolean;
//   deliveryTypes: string[];
//   categoriesList: string[];
//   submittedValues: any = {
//     categories: [],
//     deliveryTypes: []
//   };
//   constructor(private searchService: SearchService) {}
//   ngOnChanges() {
//   }
//   ngOnInit() {
//     this.checkboxValue = true;
//     // subscribe to the delivery types
//     this.searchService.getDeliveryTypes()
//       .subscribe(
//         results => {
//           this.deliveryTypes = results;
//         //  console.log("These are the delivery types from the subscription:");
//         //  console.log(this.deliveryTypes);
//         }
//       );
//     // subscribe to the category types
//     this.searchService.getCategories()
//       .subscribe(
//         results => {
//           this.categoriesList = results;
//         }
//       );
//   }
//   onSubmit(form: NgForm) {
//     //empty the submitted values
//     this.submittedValues = {
//       categories: [],
//       deliveryTypes: []
//     };
//     // separate and loop through each of the values
//     for (let property in form.value) {
//       if (form.value.hasOwnProperty(property)) {
//         let propValue = form.value[property]; //get the returned values
//         // if the returned value is true
//         if (propValue) {
//           //separate the properties by their type (category or delivery)
//           if (property.split('.')[0] === 'c') {
//             //add the property to the appropriate array
//             this.submittedValues.categories.push(property.split('.')[1]);
//           } else {
//             this.submittedValues.deliveryTypes.push(property.split('.')[1]);
//           }
//         }
//       }
//     }
//     //then send the submitted values to search service to update the view
//     this.searchService.onFilter(this.submittedValues);
//   }
//   reset(form: NgForm) {
//     // form.reset();
//     this.checkboxValue = true;
//     this.searchService.onReset();
//     this.submittedValues = {
//       categories: [],
//       deliveryTypes: []
//     };
//   }
// }


var SearchOptionsComponent = /** @class */ (function () {
    function SearchOptionsComponent(searchService) {
        this.searchService = searchService;
        this.submittedValues = {
            categories: [],
            deliveryTypes: []
        };
        this.deliveryTypes = [
            {
                type: '',
                checkboxValue: null
            }
        ];
        this.categoriesList = [
            {
                category: '',
                checkboxValue: null
            }
        ];
    }
    SearchOptionsComponent.prototype.ngOnChanges = function () {
    };
    SearchOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the delivery types
        this.searchService.getDeliveryTypes()
            .subscribe(function (results) {
            for (var i = 0; i < results.length; i++) {
                var newDel = {
                    type: results[i],
                    checkboxValue: true
                };
                _this.deliveryTypes[i] = newDel;
            }
            ;
            //  this.deliveryTypes = result;
            //  console.log("These are the delivery types from the subscription:");
            //  console.log(this.deliveryTypes);
        });
        // subscribe to the category types
        this.searchService.getCategories()
            .subscribe(function (results) {
            for (var i = 0; i < results.length; i++) {
                var newCat = {
                    category: results[i],
                    checkboxValue: true
                };
                _this.categoriesList[i] = newCat;
            }
            ;
            //this.categoriesList = results;
        });
    };
    SearchOptionsComponent.prototype.onSubmit = function (form) {
        //empty the submitted values
        this.submittedValues = {
            categories: [],
            deliveryTypes: []
        };
        // separate and loop through each of the values
        for (var property in form.value) {
            if (form.value.hasOwnProperty(property)) {
                var propValue = form.value[property]; //get the returned values
                // if the returned value is true
                if (propValue) {
                    //separate the properties by their type (category or delivery)
                    if (property.split('.')[0] === 'c') {
                        //add the property to the appropriate array
                        this.submittedValues.categories.push(property.split('.')[1]);
                    }
                    else {
                        this.submittedValues.deliveryTypes.push(property.split('.')[1]);
                    }
                }
            }
        }
        //then send the submitted values to search service to update the view
        this.searchService.onFilter(this.submittedValues);
    };
    SearchOptionsComponent.prototype.reset = function (form) {
        // reset all checkboxes to true
        for (var i = 0; i < this.deliveryTypes.length; i++) {
            this.deliveryTypes[i].checkboxValue = true;
        }
        for (var i = 0; i < this.categoriesList.length; i++) {
            this.categoriesList[i].checkboxValue = true;
        }
        this.searchService.onReset();
        this.submittedValues = {
            categories: [],
            deliveryTypes: []
        };
    };
    SearchOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search-options',
            template: __webpack_require__("./src/app/feature/search/search-options/search-options/search-options.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-options/search-options/search-options.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__["a" /* SearchService */]])
    ], SearchOptionsComponent);
    return SearchOptionsComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/filter-buttons/filter-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t\n\t<div class=\"col-xs-12 mx-auto\">\n\t\t<p>Show me: \n\t\t\t<button\n\t\t\t\tclass=\"btn\" \n\t\t\t\t[ngClass]=\"{'btn-olf-primary': view === 'products', 'btn-outline-olf-primary': view !== 'products'}\"\n\t\t\t\t(click)=\"onClick('products')\"\n\t\t\t\t>Products</button>\n\t\t\t<button \n\t\t\t\tclass=\"btn-outline-olf-primary btn\"\n\t\t\t\t[ngClass]=\"{'btn-olf-primary': view === 'producers', 'btn-outline-olf-primary': view !== 'producers'}\"\n\t\t\t\t(click)=\"onClick('producers')\"\n\t\t\t\t>Producers</button>\n\t\t\t<button \n\t\t\t\tclass=\"btn-outline-olf-primary btn\"\n\t\t\t\t[ngClass]=\"{'btn-olf-primary': view === 'calendar', 'btn-outline-olf-primary': view !== 'calendar'}\" \n\t\t\t\t(click)=\"onClick('calendar')\"\n\t\t\t\t>Calendar</button>\n\t\t</p>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/feature/search/search-results/filter-buttons/filter-buttons.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/filter-buttons/filter-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__ = __webpack_require__("./src/app/core/services/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterButtonsComponent = /** @class */ (function () {
    function FilterButtonsComponent(searchService) {
        this.searchService = searchService;
        this.view = "product";
    }
    FilterButtonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get the view setting
        this.searchService._viewStatus
            .subscribe(function (result) {
            _this.view = result;
        });
    };
    FilterButtonsComponent.prototype.onClick = function (view) {
        this.searchService.changeView(view);
    };
    FilterButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-filter-buttons',
            template: __webpack_require__("./src/app/feature/search/search-results/filter-buttons/filter-buttons.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/filter-buttons/filter-buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__["a" /* SearchService */]])
    ], FilterButtonsComponent);
    return FilterButtonsComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/results-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search-product *ngIf=\"view === 'products'\" [products]=\"searchResults\"></app-search-product>\n<app-search-producer *ngIf=\"view === 'producers'\"></app-search-producer>\n<app-search-calendar *ngIf=\"view === 'calendar'\"></app-search-calendar>\n\n"

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/results-pane.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/results-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__ = __webpack_require__("./src/app/core/services/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsPaneComponent = /** @class */ (function () {
    function ResultsPaneComponent(searchService) {
        this.searchService = searchService;
        this.searchResults = [];
        this.view = "product";
    }
    ResultsPaneComponent.prototype.ngOnChanges = function () { };
    ResultsPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to the copied collection
        this.searchService.getSearchResults()
            .subscribe(function (results) {
            _this.searchResults = results;
            // console.log("These are the search results from the subscription:");
            // console.log(this.searchResults);
        });
        //load all search results
        this.searchService.loadAll();
        //get the view setting
        this.searchService._viewStatus
            .subscribe(function (result) {
            _this.view = result;
        });
    };
    ResultsPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-results-pane',
            template: __webpack_require__("./src/app/feature/search/search-results/results-pane/results-pane.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/results-pane/results-pane.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__["a" /* SearchService */]])
    ], ResultsPaneComponent);
    return ResultsPaneComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-calendar/search-calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n      <ng-template #modalContent let-close=\"close\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">{{ modalData.event.meta.schedule.type }}</h5>\n          <button type=\"button\" class=\"close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div>\n            <h4>Event Details:</h4> \n            <br>           \n            <p><b>Where: </b>{{ modalData.event.meta.schedule.address }}, {{ modalData.event.meta.schedule.city }}, {{ modalData.event.meta.schedule.province }}</p>\n            <p><b>Date: </b>{{ modalData.event.meta.schedule.startDateTime | date:'fullDate' }}</p>\n            <p><b>Time: </b>{{ modalData.event.meta.schedule.startDateTime | date:'shortTime' }} - {{ modalData.event.meta.schedule.endDateTime | date:'shortTime' }}</p>\n            <p><b>Description: </b>{{ modalData.event.meta.schedule.description }}</p>\n            <p><b>Order Deadline: </b>{{ modalData.event.meta.schedule.orderDeadline | date:'shortTime' }}, {{ modalData.event.meta.schedule.orderDeadline | date:'fullDate' }}</p>\n            <div *ngIf=\"modalData.event.meta.schedule.type === 'Door-to-door Delivery' && modalData.event.meta.schedule.hasFee\">\n              <p><b>Delivery Fee: </b>{{ modalData.event.meta.schedule.fee | currency:'USD':true:'1.2-2' }}</p>\n              <p *ngIf=\"modalData.event.meta.schedule.feeWaiver\"><b>Fee Waiver: </b>{{ modalData.event.meta.schedule.feeWaiver | currency:'USD':true:'1.2-2' }}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <a class=\"btn btn-olf-primary\" [routerLink]=\"['../producer/' + modalData.event.meta.schedule.producerId]\" (click)=\"close()\">Visit their Store</a>\n          <button type=\"button\" class=\"btn btn-outline-olf-primary\" (click)=\"close()\">Close</button>\n        </div>\n      </ng-template>\n\n      <!-- Custom template for day in month view -->\n      <ng-template\n        #defaultTemplate\n        let-day=\"day\"\n        let-openDay=\"openDay\"\n        let-locale=\"locale\"\n        let-tooltipPlacement=\"tooltipPlacement\"\n        let-highlightDay=\"highlightDay\"\n        let-unhighlightDay=\"unhighlightDay\"\n        let-eventClicked=\"eventClicked\"\n        let-tooltipTemplate=\"tooltipTemplate\"\n        let-tooltipAppendToBody=\"tooltipAppendToBody\">\n        <div class=\"cal-cell-top\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n          <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n        </div>\n        <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n          <div\n            class=\"cal-event\"\n            *ngFor=\"let event of day.events\"\n            \n            [ngClass]=\"event?.cssClass\"\n            (mouseenter)=\"highlightDay.emit({event: event})\"\n            (mouseleave)=\"unhighlightDay.emit({event: event})\"\n            [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipEvent]=\"event\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            mwlDraggable\n            [dropData]=\"{event: event}\"\n            [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n            (mwlClick)=\"onEventClick($event, event)\">\n          </div>\n        </div>\n      </ng-template>\n        \n      <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-olf-primary\"\n              mwlCalendarPreviousView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"activeDayIsOpen = false\">\n              Previous\n            </div>\n            <!-- <div\n              class=\"btn btn-outline-secondary\"\n              mwlCalendarToday\n              [(viewDate)]=\"viewDate\">\n              Today\n            </div> -->\n            <div\n              class=\"btn btn-olf-primary\"\n              mwlCalendarNextView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"activeDayIsOpen = false\">\n              Next\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-8\">\n          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <!-- <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = 'month'\"\n              [class.active]=\"view === 'month'\">\n              Month\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = 'week'\"\n              [class.active]=\"view === 'week'\">\n              Week\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = 'day'\"\n              [class.active]=\"view === 'day'\">\n              Day\n            </div>\n          </div>\n        </div> -->\n      </div>\n\n      <br>\n\n      <div >\n          <div [ngSwitch]=\"view\">\n              <mwl-calendar-month-view\n                *ngSwitchCase=\"'month'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                [activeDayIsOpen]=\"activeDayIsOpen\"\n                (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\"\n                [cellTemplate]=\"defaultTemplate\">\n              </mwl-calendar-month-view>\n              <!-- <mwl-calendar-week-view\n                *ngSwitchCase=\"'week'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-week-view>\n              <mwl-calendar-day-view\n                *ngSwitchCase=\"'day'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n              </mwl-calendar-day-view> -->\n            </div>\n      </div>\n      \n        \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-calendar/search-calendar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-calendar/search-calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_search_search_service__ = __webpack_require__("./src/app/core/services/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    red: {
        primary: '#3c910f',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var SearchCalendarComponent = /** @class */ (function () {
    function SearchCalendarComponent(modal, route, searchService) {
        this.modal = modal;
        this.route = route;
        this.searchService = searchService;
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.events = [];
        this.activeDayIsOpen = true;
    }
    SearchCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    SearchCalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    SearchCalendarComponent.prototype.ngOnChanges = function () { };
    SearchCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the get method results
        this.searchService.getDeliveries()
            .subscribe(function (result) {
            console.log('result:');
            console.log(result);
            var data = result;
            data.forEach(function (result) {
                _this.events.push({
                    title: result.type,
                    color: colors.red,
                    start: new Date(result.startDateTime),
                    meta: {
                        schedule: result
                    }
                });
            });
            _this.refresh.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TemplateRef */])
    ], SearchCalendarComponent.prototype, "modalContent", void 0);
    SearchCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search-calendar',
            template: __webpack_require__("./src/app/feature/search/search-results/results-pane/search-calendar/search-calendar.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/results-pane/search-calendar/search-calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_search_search_service__["a" /* SearchService */]])
    ], SearchCalendarComponent);
    return SearchCalendarComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div class=\"card\">\n\n  <div class=\"card-block\">\n\n    <div class=\"row align-items-center\">\n\n      <!--Card image-->\n      <div class=\"col-5 col-md-3 view overlay hm-white-slight\">\n          <img src=\"../../assets/images/{{ producer.logoUrl }}\" class=\"img-fluid\" alt=\"\">\n          <a [routerLink]=\"['../producer/' + producer.id]\">\n              <div class=\"mask waves-effect waves-light\"></div>\n          </a>\n      </div>\n      <!--/.Card image-->\n\n      <!--Card content-->\n      <div class=\"col-7 col-md-4 text-center\">\n          <!--Product Name-->\n          <h5 class=\"card-title\"><strong><a [routerLink]=\"['../producer/' + producer.id]\">{{ producer.name }}</a></strong></h5>\n          <!--Description-->\n          <p class=\"card-text text-truncate small\">{{ producer.location }}, {{ producer.province }}</p>\n      </div>\n      <!--/.Card content-->\n\n      <div class=\"col-12 col-md-5\">\n        <div class=\"row justify-content-around\">\n          <a class=\"btn btn-olf-primary btn-sm\" [routerLink]=\"['../producer/' + producer.id + '/schedule']\">View Schedule</a>\n          <a class=\"btn btn-olf-primary btn-sm\" [routerLink]=\"['../producer/' + producer.id]\">Visit their Store</a>\n        </div>\n       \n      </div>\n\n    </div>\n    \n\n  </div>\n\n      \n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_producer_model__ = __webpack_require__("./src/app/core/models/producer.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { SearchProducerModel } from '../../../../../../core/models/search-producer.model';

var ProducerCardComponent = /** @class */ (function () {
    function ProducerCardComponent() {
    }
    ProducerCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_producer_model__["a" /* ProducerModel */])
    ], ProducerCardComponent.prototype, "producer", void 0);
    ProducerCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-producer-card',
            template: __webpack_require__("./src/app/feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProducerCardComponent);
    return ProducerCardComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-producer/search-producer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-producer-card class=\"col-xs-12 col-sm-8 offset-sm-2 mb-2\"  *ngFor=\"let producer of producers\" [producer]=\"producer\"></app-producer-card>\n</div>"

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-producer/search-producer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-producer/search-producer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProducerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__ = __webpack_require__("./src/app/core/services/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchProducerComponent = /** @class */ (function () {
    function SearchProducerComponent(searchService) {
        this.searchService = searchService;
        this.producers = [];
    }
    SearchProducerComponent.prototype.ngOnChanges = function () { };
    SearchProducerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getProducers()
            .subscribe(function (results) {
            _this.producers = results;
        });
    };
    SearchProducerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search-producer',
            template: __webpack_require__("./src/app/feature/search/search-results/results-pane/search-producer/search-producer.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/results-pane/search-producer/search-producer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_search_search_service__["a" /* SearchService */]])
    ], SearchProducerComponent);
    return SearchProducerComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-product/search-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-product-card class=\"col-12 col-sm-6 col-md-4 col-lg-3 mb-2\"  *ngFor=\"let product of products\" [product]=\"product\"></app-product-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-product/search-product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/results-pane/search-product/search-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchProductComponent = /** @class */ (function () {
    function SearchProductComponent() {
        this.products = [];
    }
    SearchProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchProductComponent.prototype, "products", void 0);
    SearchProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search-product',
            template: __webpack_require__("./src/app/feature/search/search-results/results-pane/search-product/search-product.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/results-pane/search-product/search-product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchProductComponent);
    return SearchProductComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search-results/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"card\">\n    <div class=\"card-header olf-primary-color white-text\">\n        Search Results\n    </div>\n    <div class=\"card-block grey lighten-3\">\n        <app-filter-buttons></app-filter-buttons>\n        <app-results-pane [products]=\"searchResults\"></app-results-pane>\n    </div>\n</div>\n<!--/.Panel-->"

/***/ }),

/***/ "./src/app/feature/search/search-results/search-results/search-results.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search-results/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent() {
        this.searchResults = [];
    }
    SearchResultsComponent.prototype.ngOnChanges = function () { };
    SearchResultsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchResultsComponent.prototype, "searchResults", void 0);
    SearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search-results',
            template: __webpack_require__("./src/app/feature/search/search-results/search-results/search-results.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search-results/search-results/search-results.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/feature/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-1\">\n\t\n\t<div class=\"col-12 col-md-3 mb-2\">\n\t\t<app-search-options></app-search-options>\n\t</div>\n\n\t<div class=\"col-12 col-md-9\">\n\t\t<app-loading *ngIf=\"!searchResults\"></app-loading>\n\t\t<app-search-results *ngIf=\"searchResults\" [searchResults]=\"searchResults\"></app-search-results>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/feature/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_location_location_service__ = __webpack_require__("./src/app/core/services/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_search_search_service__ = __webpack_require__("./src/app/core/services/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(locationService, searchService) {
        this.locationService = locationService;
        this.searchService = searchService;
        this.searchResults = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the location from the browser window
        this.locationService.getLocation()
            .subscribe(function (response) {
            _this.userLocation = response;
            // console.log(this.userLocation.coords.latitude);
            // console.log(this.userLocation.coords.longitude);
        });
        //subscribe to the copied collection
        this.searchService.getSearchResults()
            .subscribe(function (results) {
            _this.searchResults = results;
        });
        this.searchService.getProducers()
            .subscribe(function (results) { });
        // this.searchService.getDeliveries()
        // .subscribe(
        //   results => {
        //     console.log('from getDeliveries');
        //     console.log(results);
        //   }
        // );
        //load all search results
        this.searchService.loadAll();
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/feature/search/search.component.html"),
            styles: [__webpack_require__("./src/app/feature/search/search.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__core_services_search_search_service__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_search_search_service__["a" /* SearchService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/landing-content/landing-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  -->\n<main class=\"container-fluid olf-green-lighten-2\">\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <!-- <h2 class=\"text-muted responsive white-text\">\n                        We aren't selling local food.\n                    </h2>\n                    <h2 class=\"text-muted responsive white-text\">\n                        We aren't delivering it either.\n                    </h2>\n                    <br>\n                    <h1 class=\"text-muted responsive white-text\">\n                        But we show you who is.\n                    </h1> -->\n                    <h2 class=\"text-muted responsive white-text\">\n                        Onlylocalfood.com - we don't sell or deliver local food...\n                    </h2>\n                    <br>\n                    <h1 class=\"text-muted responsive white-text\">\n                        We show you who does!\n                    </h1>\n                    <br><br>\n                    <p class=\"lead grey-text\">\n                        Our platform shows you the farms and producers that have products available, including where and how to get them, and let's you order online. It's a farmers' market on the web, done right.\n                    </p>\n                    <!-- <p class=\"lead grey-text\">\n                        OLF is a platform for producers of local food to create their own online store. It shows consumers what products are available in their area and how to get them.\n                    </p> -->\n                </div>\n                <div class=\"col-md-12\">\n                    <p class=\"lead white-text text-center\">\n                        <a routerLink=\"search\" class=\"btn btn-olf-primary inline\">Start Searching</a>\n                    </p>\n                </div>\n                <div class=\"col-md-12\">\n                    <!-- <h2 class=\"text-muted responsive white-text\">\n                        Find and order local food online,\n                        <br>\n                        directly from the producers.\n                    </h2> -->\n                    <h2 class=\"text-muted responsive white-text\">\n                        Feed your family.\n                        <br>\n                        Feed your community.\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"row d-flex align-self-stretch\">\n                <div class=\"col-12 col-sm-6 offset-sm-3 col-md offset-md-0 d-flex\">\n                    <!--Card-->\n                    <div class=\"card jumbotron-card\">\n                        <div class=\"row\">\n                            <!--Card image-->\n                            <div class=\"col mt-3 text-center\">\n                                <img class=\"w-25\" src=\"assets/images/icon-1.png\">\n                            </div>\n                            <!--/.Card image-->\n\n                            <!--Card content-->\n                            <div class=\"card-block\">\n                                <!--Title-->\n                                <h5 class=\"card-title text-center\">Products and Schedules</h5>\n                                <hr>\n                                <p class=\"text-center\"><img src=\"assets/images/step-1-graphic.png\"></p>\n                                <!--Text-->\n                                <p class=\"card-text\">Producers load their products onto OLF and schedule deliveries and pickups. Everything you need to know is added - what products are for sale, prices, and (<b>this is the special bit</b>) how, when, and where you can get your order.</p>\n                                \n                            </div>\n                            <!--/.Card content-->\n                        </div>\n                    </div>\n                    <!--/.Card-->\n                </div>\n                <div class=\"col-sm-6 offset-sm-3 col-md offset-md-0 d-flex\">\n                    <!--Card-->\n                    <div class=\"card jumbotron-card\">\n                        <div class=\"row\">\n                            <!--Card image-->\n                            <div class=\"col mt-3 text-center\">\n                                <img class=\"w-25\" src=\"assets/images/icon-2.png\">\n                            </div>\n                            <!--/.Card image-->\n\n                            <!--Card content-->\n                            <div class=\"card-block\">\n                                <!--Title-->\n                                <h5 class=\"card-title text-center\">Search and Order</h5>\n                                <hr>\n                                <!--Text-->\n                                <p class=\"card-text\">Our search page shows you all the products that are <b>available in your area</b>. You can see who's selling and the delivery and pickup options. Add what you want to your cart, and instead of paying when you check out, you simply select how to get your order based on the producer's options.</p>\n                                <p class=\"text-center\"><img src=\"assets/images/step-2-graphic.png\"></p>\n                            </div>\n                            <!--/.Card content-->\n                        </div>\n                    </div>\n                    <!--/.Card-->\n                </div>\n                <div class=\"col-sm-6 offset-sm-3 col-md offset-md-0 d-flex\">\n                    <!--Card-->\n                    <div class=\"card jumbotron-card\">\n                        <div class=\"row\">\n                            <!--Card image-->\n                            <div class=\"col mt-3 text-center\">\n                                <img class=\"w-25\" src=\"assets/images/icon-3.png\">\n                            </div>\n                            <!--/.Card image-->\n\n                            <!--Card content-->\n                            <div class=\"card-block\">\n                                <!--Title-->\n                                <h5 class=\"card-title text-center\">Delivery, Pickup, and Payment</h5>\n                                <hr>\n                                <p class=\"text-center\"><img src=\"assets/images/step-3-graphic.png\"></p>\n                                <!--Text-->\n                                <p class=\"card-text\">At the date and time you chose, you and the producer get together (or maybe they come to you!). <b>You get the great local food you ordered and the producer gets paid directly</b>. It's exactly like a farmers' market, just easier.</p>\n                            </div>\n                            <!--/.Card content-->\n                        </div>\n                    </div>\n                    <!--/.Card-->\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <!-- <div class=\"flex-center\">\n                    \n        <div>\n            \n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-4 mt-auto mb-auto\">\n                    <div class=\"col-sm\">\n                        <h2 class=\"text-muted responsive white-text\">\n                            Find and order local food online,\n                            <br>\n                            directly from the producers.\n                        </h2>\n                        <p class=\"lead grey-text\">\n                            This will be a fancy description of OLF. a;dfha;lksdfj as;ldfkj ;lj ;ld asdfasfd as s f d g se sg dsf s fgd .\n                        </p>\n                    </div>\n                    <br>\n                    <div class=\"col-sm\">\n                        <p class=\"lead white-text\">\n                            <a routerLink=\"search\" class=\"btn btn-olf-primary inline\">Start Searching</a>\n                            or\n                            <a routerLink=\"learn-more\" class=\"btn btn-olf-primary inline\">Learn More</a>\n                        </p>\n                    </div>\n                    \n                </div>\n            </div>\n                \n\n        </div>\n\n    </div> -->\n\n</main>\n\n<div class=\"container\">\n\n<div class=\"divider-new\">\n            <h2 class=\"h2-responsive wow fadeIn\" data-wow-delay=\"0.2s\">About us</h2>\n        </div>\n\n        <!--Section: About-->\n        <section id=\"about\" class=\"text-center wow fadeIn\" data-wow-delay=\"0.2s\">\n\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit explicabo assumenda eligendi ex exercitationem harum deleniti quaerat beatae ducimus dolor voluptates magnam, reiciendis pariatur culpa tempore quibusdam quidem, saepe eius.</p>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit explicabo assumenda eligendi ex exercitationem harum deleniti quaerat beatae ducimus dolor voluptates magnam, reiciendis pariatur culpa tempore quibusdam quidem, saepe eius.</p>\n\n        </section>\n        <!--Section: About-->\n\n        <div class=\"divider-new\">\n            <h2 class=\"h2-responsive wow fadeIn\">Contact us</h2>\n        </div>\n\n        <!--Section: Contact-->\n        <section id=\"contact\">\n            <div class=\"row\">\n                <h1>Here we need a contact form</h1>\n            </div>\n        </section>\n        <!--Section: Contact-->\n        </div>"

/***/ }),

/***/ "./src/app/landing-content/landing-content.component.scss":
/***/ (function(module, exports) {

module.exports = "main {\n  background-color: #262626 !important;\n  padding: 5em 5%; }\n\nimg {\n  max-width: 95%;\n  margin: auto;\n  overflow: none; }\n\n.jumbotron-card {\n  margin-bottom: 1em; }\n"

/***/ }),

/***/ "./src/app/landing-content/landing-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingContentComponent = /** @class */ (function () {
    function LandingContentComponent() {
    }
    LandingContentComponent.prototype.ngOnInit = function () {
    };
    LandingContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-landing-content',
            template: __webpack_require__("./src/app/landing-content/landing-content.component.html"),
            styles: [__webpack_require__("./src/app/landing-content/landing-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingContentComponent);
    return LandingContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/account-info/account-info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n    <div class=\"col col-xs-12\">\n        <div role=\"tablist\" aria-multiselectable=\"true\">\n            <div class=\"card\">\n                <div class=\"card-header dash-accordion\" role=\"tab\">\n                    <h5 class=\"mb-0 text-white\">Account Information</h5>\n                </div>\n                <div role=\"tabpanel\" aria-labelledby=\"accountInfoHeading\">\n                    <div class=\"card-block\">\n                        <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n                        <div>\n                            <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n                        </div>\n                        <pre class=\"full-profile\">{{ profile | json }}</pre>\n                    </div>\n                    <div class=\"card-block\">\n                        <pre class=\"full-profile\">{{ user | json }}</pre>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"row\">\n        <div class=\"col col-xs-12\">\n            <div role=\"tablist\" aria-multiselectable=\"true\">\n    \n                <div class=\"col-12 col-md-8 mx-auto my-2\">\n                    <div class=\"jumbotron\">\n                        <div>\n                            <h2 class=\"h2-responsive\">\n                                <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n                                <strong>Your Profile</strong>\n                            </h2>\n                            <p></p>\n        \n                            <div class=\"card-block\">\n                                \n                                <div class=\"row mb-1\">\n                                    <div class=\"col-12 col-md-4\">\n                                        <h5 class=\"h5-responsive\">\n                                            <i class=\"fa fa-user prefix mr-3\"></i>Name:\n                                        </h5>\n                                    </div>\n                                    \n                                    <div class=\"pl-3 col-12 col-md-8\">\n                                        <p>{{ user.firstName }}</p>\n                                    </div>\n                                </div>\n    \n                                <div class=\"row mb-1\">\n                                    <div class=\"col-12 col-md-4\">\n                                        <h5 class=\"h5-responsive\">\n                                            <i class=\"fa fa-at prefix mr-3\"></i>Email:\n                                        </h5>\n                                    </div>\n                                    \n                                    <div class=\"pl-3 col-12 col-md-8\">\n                                        <p>{{ user.email }}</p>\n                                    </div>\n                                </div>\n    \n                                <div class=\"row mb-1\">\n                                    <div class=\"col-12 col-md-4\">\n                                        <h5 class=\"h5-responsive\">\n                                            <i class=\"fa fa-adjust prefix mr-3\"></i>Role:\n                                        </h5>\n                                    </div>\n                                    \n                                    <div class=\"pl-3 col-12 col-md-8\">\n                                        <p>{{ user.role | firstCharacterToUppercase }}</p>\n                                    </div>\n                                </div>\n    \n                                <div class=\"row mb-1\">\n                                    <p>You have been a member of OLF since {{ user.registrationDate | date:'fullDate' }}.</p>\n                                </div>\n    \n                                <div *ngIf=\"user?.role === 'producer'\">\n                                    <hr>\n                                    <div class=\"row mb-1\">\n                                        <div class=\"col-12 col-md-4\">\n                                            <h5 class=\"h5-responsive\">\n                                                <i class=\"fa fa-id-card prefix mr-3\"></i>Business Name:\n                                            </h5>\n                                        </div>\n                                        <div class=\"pl-3 col-12 col-md-8\">\n                                            <p>{{ producer?.name }}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-1\">\n                                        <div class=\"col-12 col-md-4\">\n                                            <h5 class=\"h5-responsive\">\n                                                <i class=\"fa fa-map-marker prefix mr-3\"></i>Location:\n                                            </h5>\n                                        </div>\n                                        <div class=\"pl-3 col-12 col-md-8\">\n                                            <p>{{ producer?.location }}, {{ producer?.province }}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-1\" *ngIf=\"producer?.address\">\n                                        <div class=\"col-12 col-md-4\">\n                                            <h5 class=\"h5-responsive\">\n                                                <i class=\"fa fa-map-marker prefix mr-3\"></i>Address:\n                                            </h5>\n                                        </div>\n                                        <div class=\"pl-3 col-12 col-md-8\">\n                                            <p>{{ producer.address }}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-1\" *ngIf=\"producer?.description\">\n                                        <div class=\"col-12 col-md-4\">\n                                            <h5 class=\"h5-responsive\">\n                                                <i class=\"fa fa-align-justify prefix mr-3\"></i>Description:\n                                            </h5>\n                                        </div>\n                                        <div class=\"pl-3 col-12 col-md-8\">\n                                            <p>{{ producer.description }}</p>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mb-1\">\n                                        <div class=\"col-12 col-md-4\">\n                                            <h5 class=\"h5-responsive\">\n                                                <i class=\"fa fa-image prefix mr-3\"></i>Logo:\n                                            </h5>\n                                        </div>\n                                        <div class=\"pl-3 col-12 col-md-8\">\n                                            <p *ngIf=\"producer?.logoUrl\">{{ producer.logoUrl }}</p>\n                                            <p *ngIf=\"!producer?.logoUrl\">No logo uploaded.</p>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                            \n                            <div class=\"row\">\n                                <div class=\"col-12 text-center\">\n                                    <button class=\"btn btn-olf-primary btn-sm\"><i class=\"fa fa-edit prefix mr-3\"></i>Edit</button>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/shared/account-info/account-info.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/account-info/account-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_user_user_service__ = __webpack_require__("./src/app/core/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_dashboard_producer_dashboard_service__ = __webpack_require__("./src/app/feature/dashboard/producer-dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_models_user_model__ = __webpack_require__("./src/app/core/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_producer_model__ = __webpack_require__("./src/app/core/models/producer.model.ts");
// import { Component, OnInit, Input } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { AuthService } from '../../auth/auth.service';
// import { UserModel } from '../../core/models/user.model';
// @Component({
//   selector: 'app-account-info',
//   templateUrl: './account-info.component.html',
//   styleUrls: ['./account-info.component.scss']
// })
// export class AccountInfoComponent implements OnInit {
//   profile: any;
//   @Input() user: UserModel;
//   constructor(private auth: AuthService) { }
//   ngOnInit() {
//     if (this.auth.userProfile) {
//       this.profile = this.auth.userProfile;
//     }
//   }
// }






var AccountInfoComponent = /** @class */ (function () {
    function AccountInfoComponent(auth, userService, producerService) {
        this.auth = auth;
        this.userService = userService;
        this.producerService = producerService;
    }
    AccountInfoComponent.prototype.ngOnInit = function () {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        console.log('user: ', this.user);
        console.log('producer: ', this.producer);
        // this.userService.getUser()
        //   .subscribe(
        //     result => {
        //       this.user = result;
        //       console.log('user: ', this.user);
        //     }
        //   );
        // this.producerService.getProducer()
        //   .subscribe(
        //     result => {
        //       this.producer = result;
        //       console.log('producer: ', this.producer);
        //     }
        //   );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__core_models_user_model__["a" /* UserModel */])
    ], AccountInfoComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__core_models_producer_model__["a" /* ProducerModel */])
    ], AccountInfoComponent.prototype, "producer", void 0);
    AccountInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-account-info',
            template: __webpack_require__("./src/app/shared/account-info/account-info.component.html"),
            styles: [__webpack_require__("./src/app/shared/account-info/account-info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__feature_dashboard_producer_dashboard_service__["a" /* ProducerDashboardService */]])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/add-to-cart/add-to-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"row\">\n        <div class=\"col-lg-8 col-offset-lg-2\">\n            <ng-template #modalContent let-close=\"close\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">          \n                        <p><em>Item added to cart.</em></p>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <a class=\"btn btn-olf-primary\" [routerLink]=\"['/cart']\" (click)=\"close()\">View Cart</a>\n                    <button type=\"button\" class=\"btn btn-outline-olf-primary\" (click)=\"close()\">Continue Shopping</button>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n    <div class=\"row mx-0\">\n        <div class=\"col-6 p-0\">\n            <div class=\"input-group h-100 m-0 p-0\">\n                <span class=\"input-group-btn col-4 p-0\">\n                    <button class=\"btn m-0 p-0\" type=\"button\" (click)=\"lessOne()\"><i class=\"fa fa-minus cart-button\" aria-hidden=\"true\"></i></button>\n                </span>\n                <input type=\"number\" class=\"form-control col-4 p-0 text-center border-0\" value=\"{{ orderQty }}\" min=\"1\" max=\"{{ product.qtyAvailable }}\">\n                <span class=\"input-group-btn col-4 p-0\">\n                    <button class=\"btn m-0 p-0\" type=\"button\" (click)=\"addOne()\"><i class=\"fa fa-plus cart-button\" aria-hidden=\"true\"></i></button>\n                </span>\n            </div>\n        </div>\n        <div class=\"col-6 p-0\">\n            <button class=\"btn btn-olf-primary btn-block px-0 m-0 h-100\" [disabled]=\"product.qtyAvailable < 1\" (click)=\"onAdd()\">Add <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></button>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/shared/add-to-cart/add-to-cart.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/add-to-cart/add-to-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_cart_service_cart_service__ = __webpack_require__("./src/app/core/services/cart-service/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(modal, cartService) {
        this.modal = modal;
        this.cartService = cartService;
    }
    AddToCartComponent.prototype.ngOnChanges = function () { };
    AddToCartComponent.prototype.addOne = function () {
        if (this.orderQty < this.product.qtyAvailable) {
            this.orderQty += 1;
        }
    };
    AddToCartComponent.prototype.lessOne = function () {
        if (this.orderQty > 1) {
            this.orderQty -= 1;
        }
    };
    AddToCartComponent.prototype.onAdd = function () {
        this.cartService.addToCart(this.product, this.orderQty);
        if (this.product.qtyAvailable > 0) {
            this.orderQty = 1;
        }
        else {
            this.orderQty = 0;
        }
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    AddToCartComponent.prototype.ngOnInit = function () {
        this.orderQty = 1; // no, this needs to be initialized as the value in the cart, or one if none exists
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TemplateRef */])
    ], AddToCartComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__core_models_product_model__["a" /* ProductModel */])
    ], AddToCartComponent.prototype, "product", void 0);
    AddToCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-add-to-cart',
            template: __webpack_require__("./src/app/shared/add-to-cart/add-to-cart.component.html"),
            styles: [__webpack_require__("./src/app/shared/add-to-cart/add-to-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_cart_service_cart_service__["a" /* CartService */]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "./src/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/spinner.svg\">\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\nimg {\n  display: block;\n  margin: 20px auto;\n  width: 50px; }\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/shared/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination\">\r\n    <div class=\"description\">\r\n        <span class=\"page-counts\">{{ getMin() }} - {{ getMax() }} of {{ count }}</span>  \r\n    </div>\r\n    <div class=\"numbers\">\r\n        <button \r\n            class=\"link\" \r\n            (click)=\"onPrev()\" \r\n            [disabled]=\"page === 1\" \r\n            [ngClass]=\"{ 'disabled': page === 1 }\">\r\n            &lt; Previous</button>\r\n        \r\n        <button\r\n            *ngFor=\"let pageNum of getPages()\"\r\n            (click)=\"onPage(pageNum)\"\r\n            [ngClass]=\"{'active': pageNum === page}\">\r\n            {{ pageNum }}</button>\r\n\r\n        <button \r\n            class=\"link\" \r\n            (click)=\"onNext()\" \r\n            [disabled]=\"lastPage()\" \r\n            [ngClass]=\"{ 'disabled': lastPage() }\">\r\n            Next &gt;</button>\r\n    </div>\r\n    <div class=\"pull-right\">\r\n        <span class=\"page-totals\">{{ totalPages() }} pages</span>\r\n    </div>\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 30px;\n          flex: 0 0 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host .pagination {\n    padding: 0.5em 1em;\n    width: 100%;\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background: grey;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host .pagination .description {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%);\n      left: base; }\n  :host .pagination .numbers {\n      display: block;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  :host .pagination .numbers button {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 auto;\n                flex: 0 0 auto;\n        outline: none;\n        border: 0;\n        background: transparent;\n        cursor: pointer; }\n  :host .pagination .numbers button.active {\n          font-weight: bold;\n          font-size: 120%; }\n  :host .pagination .numbers button.disabled {\n          color: lightgrey; }\n"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.goPrev = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.pagesToShow = 5; // how many pages between next/prev
    }
    PaginationComponent.prototype.getMin = function () {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };
    ;
    PaginationComponent.prototype.getMax = function () {
        var max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };
    ;
    PaginationComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    ;
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    ;
    PaginationComponent.prototype.onNext = function () {
        this.goNext.emit(true);
    };
    ;
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.count / this.perPage) || 0;
    };
    ;
    PaginationComponent.prototype.lastPage = function () {
        return this.perPage * this.page > this.count;
    };
    ;
    PaginationComponent.prototype.getPages = function () {
        var c = Math.ceil(this.count / this.perPage);
        var p = this.page || 1;
        var pagesToShow = this.pagesToShow || 9;
        var pages = [];
        pages.push(p);
        var times = pagesToShow - 1;
        for (var i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort(function (a, b) { return a - b; });
        return pages;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "perPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PaginationComponent.prototype, "goPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PaginationComponent.prototype, "goNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/shared/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/firstCharacterToUppercase.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstCharacterToUppercasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FirstCharacterToUppercasePipe = /** @class */ (function () {
    function FirstCharacterToUppercasePipe() {
    }
    FirstCharacterToUppercasePipe.prototype.transform = function (value, args) {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        });
    };
    FirstCharacterToUppercasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'firstCharacterToUppercase' })
    ], FirstCharacterToUppercasePipe);
    return FirstCharacterToUppercasePipe;
}());

;


/***/ }),

/***/ "./src/app/shared/pipes/format-cell.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatCellPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatCellPipe = /** @class */ (function () {
    function FormatCellPipe(datePipe, currencyPipe, uppercasePipe) {
        this.datePipe = datePipe;
        this.currencyPipe = currencyPipe;
        this.uppercasePipe = uppercasePipe;
    }
    // transform(value: any, format: string) { // make this into an object like { format, nestedProperty }
    FormatCellPipe.prototype.transform = function (value, format) {
        var strs;
        var formatType;
        var nestedProperty;
        var newValue;
        // if the format contains a comma, split the formatType and nestedProperty
        if (format.indexOf(',') != -1) {
            strs = format.split(',');
            formatType = strs[0];
            nestedProperty = strs[1];
        }
        else {
            formatType = format;
        }
        if (value === undefined) {
            newValue = 'N/A';
        }
        // if (typeof value === 'object' && !nestedProperty) { // the cell value is an object, but no property is given
        //     console.log('type of: ', typeof value);
        //     console.log('value: ', value);
        //     newValue = value.name;
        // } else 
        if (typeof value === 'object' && nestedProperty) {
            newValue = value[nestedProperty];
        }
        else {
            newValue = value;
        }
        if (formatType === 'currency') {
            newValue = this.currencyPipe.transform(newValue, 'CAD', 'symbol-narrow');
        }
        if (formatType === 'mediumDate') {
            newValue = this.datePipe.transform(newValue, 'mediumDate');
        }
        if (formatType === 'shortTime') {
            newValue = this.datePipe.transform(newValue, 'shortTime');
        }
        if (formatType === 'uppercase') {
            newValue = this.uppercasePipe.transform(newValue);
        }
        return newValue;
        // original code
        // if ( value === undefined ) {
        //     return 'not available';
        // } else if ( format === 'default' ) {
        //     if ( Array.isArray(value) ) {
        //         if ( typeof value[0] !== 'object' ) {
        //             return value.join(', ');
        //         } else {
        //             return value.map( obj => {
        //                 return obj.name;
        //             }).join(', ');
        //         }
        //     }
        //     if ( typeof value === 'object' ) {
        //         return value.name;
        //     }
        // } else if (format === 'currency') {
        //     console.log('format: ', format);
        //     return this.currencyPipe.transform(value, 'USD', true);
        // // } else if (format) {
        // //     return value[format];
        // }
        // return value;
    };
    FormatCellPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'formatCell' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* UpperCasePipe */]])
    ], FormatCellPipe);
    return FormatCellPipe;
}());



/***/ }),

/***/ "./src/app/shared/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div class=\"card\">\n\n    <!--Card image-->\n    <div class=\"view overlay hm-white-slight cover-div\">\n        <img *ngIf=\"product.image !== ''\" src=\"../../assets/images/{{ product.image }}\" class=\"img-fluid cover\" alt=\"\">\n        <img *ngIf=\"product.image === ''\" src=\"../../assets/images/beet.png\" class=\"img-fluid cover\" alt=\"\">\n        <a [routerLink]=\"['../producer/' + product.producer.id + '/product/' + product.id]\">\n            <div class=\"mask waves-effect waves-light\"></div>\n        </a>\n    </div>\n    <!--/.Card image-->\n\n    <!--Card content-->\n    <div class=\"card-block text-center\">\n        <!--Product Name-->\n        \n        <h5 class=\"card-title text-truncate\"><strong><a [routerLink]=\"['../producer/' + product.producer.id + '/product/' + product.id]\">{{ product.name }}</a></strong></h5>\n\n        <!--Description-->\n        <p class=\"card-text text-left text-truncate small\">{{ product.description }}</p>\n        \n        <!--Producer Name-->\n        <h6 class=\"text-truncate\"><a [routerLink]=\"['../producer/' + product.producer.id]\">{{ product.producer.name }}</a></h6>\n\n    </div>\n    <!--/.Card content-->\n\n    <!--Card footer-->\n    <div class=\"card-footer text-center px-0 pb-0\">\n        <p>{{ product.pricePerUnit | currency:'USD':true:'1.2-2' }}/{{ product.unit }}</p>\n        <app-add-to-cart [product]=\"product\"></app-add-to-cart>\n    </div>\n    <!--/.Card footer-->\n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./src/app/shared/product-card/product-card.component.scss":
/***/ (function(module, exports) {

module.exports = ".cover-div {\n  width: 100%; }\n\n.cover-div:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%; }\n\n.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_product_model__ = __webpack_require__("./src/app/core/models/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__core_models_product_model__["a" /* ProductModel */])
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-product-card',
            template: __webpack_require__("./src/app/shared/product-card/product-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/product-card/product-card.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/table-layout/layout.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColumnSettingModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnMap; });
var ColumnSettingModel = /** @class */ (function () {
    function ColumnSettingModel() {
    }
    return ColumnSettingModel;
}());

;
var ColumnMap = /** @class */ (function () {
    function ColumnMap(settings) {
        this.access = function (object) {
            if (object[this.primaryKey] || !this.alternativeKeys) {
                return this.primaryKey;
            }
            for (var _i = 0, _a = this.alternativeKeys; _i < _a.length; _i++) {
                var key = _a[_i];
                if (object[key]) {
                    return key;
                }
            }
            return this.primaryKey;
        };
        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
        this.sortable = settings.sortable;
        this.sortPath = settings.sortPath;
        this.nested = settings.nested;
    }
    Object.defineProperty(ColumnMap.prototype, "header", {
        get: function () {
            return this._header;
        },
        set: function (setting) {
            this._header = setting ?
                setting :
                this.primaryKey.slice(0, 1).toUpperCase() +
                    this.primaryKey.replace(/_/g, ' ').slice(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnMap.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (setting) {
            this._format = setting ? setting : 'default';
        },
        enumerable: true,
        configurable: true
    });
    return ColumnMap;
}());



/***/ }),

/***/ "./src/app/shared/table-layout/table-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TABLES -->\n<div class=\"row\">\n    <div class=\"col-12\">\n        <!-- <button *ngIf=\"!sortedRecords\" class=\"btn btn-sm btn-olf-primary\" (click)=\"download(records)\">Export as CSV</button> -->\n        <button *ngIf=\"sortedRecords.length !== 0\" class=\"btn btn-sm btn-olf-primary\" (click)=\"download(sortedRecords)\">Export as CSV</button>\n    </div>\n</div>\n<table class=\"table table-responsive-md table-hover\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let map of columnMaps\" class=\"no-wrap\">\n                <a *ngIf=\"map.sortable\" (click)=\"onSort(map)\">{{ map.header }}  <i class=\"fa fa-sort\"></i></a>\n                <p class=\"m-0\" *ngIf=\"!map.sortable\">{{ map.header }}</p>\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let record of paginatedRecords\">\n            <td *ngFor=\"let map of columnMaps\">{{ record[map.access(record)] | formatCell:map.format }}</td>\n            <td *ngIf=\"!pending\">\n                <a (click)=\"onOpenView(record)\">View</a>\n            </td>\n            <td *ngIf=\"editable\">\n                <a (click)=\"onOpenEdit(record)\">Edit</a>\n            </td>\n            <td *ngIf=\"pending\">\n                <a (click)=\"onOpenEdit(record)\">Accept/Deny</a>\n            </td>\n            <td *ngIf=\"deletable\">\n                <a (click)=\"onSelectDelete(record)\">Delete</a>\n            </td>\n            <td *ngIf=\"accepted && record.chosenSchedule.startDateTime < now\">\n                <a (click)=\"onMarkComplete(record)\">Mark Complete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<app-pagination \n    *ngIf=\"recordsCount > perPage\"\n    [count]=\"recordsCount\"\n    [page]=\"currentPage\"\n    [perPage]=\"perPage\"\n    [pagesToShow]=\"5\"\n    (goPrev)=\"prevPage()\"\n    (goNext)=\"nextPage()\"\n    (goPage)=\"goToPage($event)\">\n</app-pagination>"

/***/ }),

/***/ "./src/app/shared/table-layout/table-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/table-layout/table-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_dashboard_producer_modals_product_edit_product_modal_edit_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_dashboard_producer_modals_product_view_product_modal_view_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feature_dashboard_producer_modals_product_delete_product_modal_delete_product_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feature_dashboard_producer_modals_schedule_edit_schedule_modal_edit_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feature_dashboard_producer_modals_schedule_view_schedule_modal_view_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feature_dashboard_producer_modals_schedule_delete_schedule_modal_delete_schedule_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feature_dashboard_producer_modals_order_edit_order_modal_edit_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feature_dashboard_producer_modals_order_view_order_modal_view_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feature_dashboard_producer_modals_order_mark_complete_order_modal_mark_complete_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feature_dashboard_consumer_modals_order_view_order_modal_view_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feature_dashboard_consumer_modals_order_edit_order_modal_edit_order_modal_component__ = __webpack_require__("./src/app/feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_services_utility_utility_service__ = __webpack_require__("./src/app/core/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_table_layout_layout_model__ = __webpack_require__("./src/app/shared/table-layout/layout.model.ts");
// import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, ViewChild, TemplateRef, DoCheck, IterableDiffers } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { EditProductModalComponent } from '../../feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component';
// import { ViewProductModalComponent } from '../../feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component';
// import { DeleteProductModalComponent } from '../../feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component';
// import { EditScheduleModalComponent } from '../../feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component';
// import { ViewScheduleModalComponent } from '../../feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component';
// import { DeleteScheduleModalComponent } from '../../feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component';
// import { EditOrderModalComponent } from '../../feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component';
// import { ViewOrderModalComponent } from '../../feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component';
// import { MarkCompleteOrderModalComponent } from '../../feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component';
// import { ConsumerViewOrderModalComponent } from '../../feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component';
// import { ConsumerEditOrderModalComponent } from '../../feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component';
// import { UtilityService } from '../../core/services/utility/utility.service';
// import { ColumnSettingModel, ColumnMap } from '../../shared/table-layout/layout.model';
// import { FormatCellPipe } from '../../shared/pipes/format-cell.pipe';
// @Component({
//   selector: 'app-table-layout',
//   templateUrl: './table-layout.component.html',
//   styleUrls: ['./table-layout.component.scss']
// })
// export class TableLayoutComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
//   @Input() records: any[];
//   @Input() caption: string;
//   keys: string[];
//   @Input() settings: ColumnSettingModel[];
//   columnMaps: ColumnMap[];
//   @Input() editable: boolean; // governs display of Edit button
//   @Input() deletable: boolean; // display of Delete button
//   @Input() pending: boolean; // for orders that are pending
//   @Input() accepted: boolean; // for orders that are accepted
//   @Input() isConsumer: boolean = false; // to display the proper modals if a consumer
//   record: Object; // single record
//   @Input() recordType: string; // this will hold the type of record so that the proper modals can be shown
//   sortedRecords: any[];
//   sortDirection: any[]; // array of the column and it's sort value
//   firstModalSubscription: any;
//   secondModalSubscription: any;
//   @Output() orderAccepted = new EventEmitter<any>();
//   @Output() orderDenied = new EventEmitter<any>();
//   @Output() orderCompleted = new EventEmitter<any>();
//   @Output() orderIncompleted = new EventEmitter<any>();
//   // for pagination
//   recordsCount: number = 0; // total quantity of records
//   currentPage: number = 1; // current page number
//   perPage: number = 5; // number of records to show per page
//   paginatedRecords: any[]; // the array that will hold the current page's records
//   iterableDiffer: any;
//   now: string;
//   ngOnChanges() {
//     if (this.settings) { // when settings provided in the parent component property binding
//       this.columnMaps = this.settings
//         .map( col => new ColumnMap(col) );
//     } else { // no settings, create column maps with defaults
//       this.columnMaps = Object.keys(this.records[0])
//         .map( key => {
//           return new ColumnMap( { primaryKey: key } );
//       });
//     }
//     this.sortedRecords = this.records; // set sorted records to initial record list
//     this.recordsCount = this.records.length; // get the count
//     this.getPaginatedRecords(this.currentPage); // get the page of records
//   }
//   ngDoCheck() { // update the pagination count when a record is added.
//     let changes = this.iterableDiffer.diff(this.records);
//     if (changes) {
//       this.recordsCount = this.records.length;
//     }
//   }
//   constructor(private modal: NgbModal,
//               private utility: UtilityService,
//               private _iterableDiffers: IterableDiffers) {
//     this.iterableDiffer = this._iterableDiffers.find([]).create(null);
//     this.now = new Date().toISOString();
//     console.log('now: ', this.now);
//   }
//   ngOnInit() {
//   }
//   download(records) {
//     this.utility.convertAndDownload(records);
//   };
//   onOpenView(record) {
//     this.record = record;
//     if (this.recordType === 'product') {
//       const modalRef = this.modal.open(ViewProductModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//     if (this.recordType === 'schedule') {
//       const modalRef = this.modal.open(ViewScheduleModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//     if (this.recordType === 'order' && this.isConsumer === false) {
//       const modalRef = this.modal.open(ViewOrderModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     } else if (this.recordType === 'order' && this.isConsumer === true) {
//       const modalRef = this.modal.open(ConsumerViewOrderModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//   }
//   onOpenEdit(record) {
//     this.record = record;
//     if (this.recordType === 'product') {
//       const modalRef = this.modal.open(EditProductModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//     if (this.recordType === 'schedule') {
//       const modalRef = this.modal.open(EditScheduleModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//     if (this.recordType === 'order' && this.isConsumer === false) {
//       const modalRef = this.modal.open(EditOrderModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//       this.firstModalSubscription = modalRef.componentInstance.onOrderAccepted
//         .subscribe(
//           result => {
//             console.log('here is the result from table layout: ', result);
//             this.orderAccepted.emit(result);
//           }
//         );
//       this.secondModalSubscription = modalRef.componentInstance.onOrderDenied
//         .subscribe(
//           result => {
//             console.log('here is the denied result from table layout: ', result);
//             this.orderDenied.emit(result);
//           }
//         );
//     } else if (this.recordType === 'order' && this.isConsumer === true) {
//       const modalRef = this.modal.open(ConsumerEditOrderModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//   }
//   onSelectDelete(record) {
//     this.record = record;
//     if (this.recordType === 'product') {
//       const modalRef = this.modal.open(DeleteProductModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//     if (this.recordType === 'schedule') {
//       const modalRef = this.modal.open(DeleteScheduleModalComponent, { size: 'lg' });
//       modalRef.componentInstance.record = record;
//     }
//   };
//   onMarkComplete(record) {
//     this.record = record;
//     const modalRef = this.modal.open(MarkCompleteOrderModalComponent, { size: 'lg'});
//     modalRef.componentInstance.record = record;
//     this.firstModalSubscription = modalRef.componentInstance.onOrderCompleted
//       .subscribe(
//         result => {
//           console.log('from table layout: order completed');
//           this.orderCompleted.emit(result);
//         }
//       );
//     this.secondModalSubscription = modalRef.componentInstance.onOrderIncompleted
//       .subscribe(
//         result => {
//           console.log('from table layout: order incompleted');
//           this.orderIncompleted.emit(result);
//         }
//       );
//   };
//   onSort(map) {
//     this.setSortDirection(map);
//     // get the sorting column
//     let sortColumn = map.primaryKey;
//     // get the sort direction
//     let currentSortDirection = this.sortDirection[this.getSortDirectionIndex(sortColumn)].direction;
//     // see if column contains numbers
//     let isTypeOfNumber = this.isNumber(sortColumn);
//     // if column is not numbers, sort as text
//     if (!isTypeOfNumber) {
//       if (currentSortDirection === 'descending') {
//         this.sortedRecords = this.sortAscending(this.records, sortColumn);
//       } else {
//         this.sortedRecords = this.sortDescending(this.records, sortColumn);
//       }
//     };
//     // column is numbers
//     if (isTypeOfNumber && currentSortDirection === 'descending') {
//       this.sortedRecords = this.records.sort(function(a, b) {
//         return a[sortColumn] - b[sortColumn];
//       });
//     } else if (isTypeOfNumber && currentSortDirection === 'ascending') {
//       this.sortedRecords = this.records.sort(function(a, b) {
//         return b[sortColumn] - a[sortColumn];
//       });
//     };
//     this.getPaginatedRecords(this.currentPage);
//   }
//   sortAscending(array, sortColumn) {
//     return array.sort(function (a, b) {
//       let first;
//       let second;
//       // if the sortColumn is an Object
//       if (typeof a[sortColumn] === 'object') {
//         first = a[sortColumn].name.toLowerCase();
//         second = b[sortColumn].name.toLowerCase();
//         if (first < second) {
//           return -1
//         } else if (first > second) {
//           return 1
//         } else {
//           return 0
//         };
//       } else {
//         first = a[sortColumn].toLowerCase();
//         second = b[sortColumn].toLowerCase();
//         if (first < second) {
//           return -1
//         } else if (first > second) {
//           return 1
//         } else {
//           return 0
//         };
//       }
//     });
//   }
//   sortDescending(array, sortColumn) {
//     return array.sort(function (a, b) {
//       let first;
//       let second;
//       // if the sortColumn is an Object
//       if (typeof a[sortColumn] === 'object') {
//         first = a[sortColumn].name.toLowerCase();
//         second = b[sortColumn].name.toLowerCase();
//         if (first > second) {
//           return -1
//         } else if (first < second) {
//           return 1
//         } else {
//           return 0
//         };
//       } else {
//         first = a[sortColumn].toLowerCase();
//         second = b[sortColumn].toLowerCase();
//         if (first > second) {
//           return -1
//         } else if (first < second) {
//           return 1
//         } else {
//           return 0
//         };
//       }
//     });
//   }
//   isNumber(column) {
//     if (typeof this.records[0][column] === 'number') {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   setSortDirection(map) {
//     let index;
//     // get the index of the map.primaryKey
//     if (this.sortDirection) {
//       for (let i = 0; i < this.sortDirection.length; i++) {
//         if (this.sortDirection[i].key === map.primaryKey) {
//           index = i;
//           break;
//         } else {
//           index = -1;
//         }
//       }
//     }
//     let key = map.primaryKey;
//     // set the sort direction of this column
//     if (!this.sortDirection) {
//       this.sortDirection = [{ key: key, direction: 'ascending' }];
//     } else if (index === -1) {
//       this.sortDirection.push({ key: key, direction: 'ascending'});
//     } else if (this.sortDirection && this.sortDirection[index].direction === 'ascending') {
//       this.sortDirection[index].direction = 'descending';
//     } else {
//       this.sortDirection[index].direction = 'ascending';
//     }
//   }
//   getSortDirectionIndex(key) {
//     let index = -1;
//     for (let i = 0; i < this.sortDirection.length; i++) {
//       if (this.sortDirection[i].key === key) {
//         index = i;
//       }
//     }
//     return index;
//   }
//   // ********* PAGINATION *********
//   getPaginatedRecords(pageNumber) {
//     if (this.recordsCount <= this.perPage) {
//       this.paginatedRecords = this.sortedRecords;
//     } else {
//       let startIndex = ((pageNumber * this.perPage) - this.perPage);
//       let endIndex = (pageNumber * this.perPage || this.recordsCount);
//       console.log(startIndex);
//       console.log(endIndex);
//       this.paginatedRecords = this.sortedRecords.slice(startIndex, endIndex);
//     }
//   };
//   goToPage(n: number): void {
//     this.currentPage = n;
//     this.getPaginatedRecords(this.currentPage);
//   };
//   nextPage(): void {
//     this.currentPage++;
//     this.getPaginatedRecords(this.currentPage);
//   };
//   prevPage(): void {
//     this.currentPage--;
//     this.getPaginatedRecords(this.currentPage);
//   };
//   ngOnDestroy() {
//     if (this.firstModalSubscription) {
//       this.firstModalSubscription.unsubscribe();
//     }
//     if (this.secondModalSubscription) {
//       this.secondModalSubscription.unsubscribe();
//     }
//   };
// }















var TableLayoutComponent = /** @class */ (function () {
    function TableLayoutComponent(modal, utility, _iterableDiffers) {
        this.modal = modal;
        this.utility = utility;
        this._iterableDiffers = _iterableDiffers;
        this.isConsumer = false; // to display the proper modals if a consumer
        this.orderAccepted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.orderDenied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.orderCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.orderIncompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.scheduleDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.productObsoleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.productDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // for pagination
        this.recordsCount = 0; // total quantity of records
        this.currentPage = 1; // current page number
        this.perPage = 5; // number of records to show per page
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
        this.now = new Date().toISOString();
    }
    TableLayoutComponent.prototype.ngOnChanges = function () {
        if (this.settings) {
            this.columnMaps = this.settings
                .map(function (col) { return new __WEBPACK_IMPORTED_MODULE_14__shared_table_layout_layout_model__["a" /* ColumnMap */](col); });
        }
        else {
            this.columnMaps = Object.keys(this.records[0])
                .map(function (key) {
                return new __WEBPACK_IMPORTED_MODULE_14__shared_table_layout_layout_model__["a" /* ColumnMap */]({ primaryKey: key });
            });
        }
        this.sortedRecords = this.records; // set sorted records to initial record list
        this.recordsCount = this.records.length; // get the count
        this.getPaginatedRecords(this.currentPage); // get the page of records
    };
    TableLayoutComponent.prototype.ngDoCheck = function () {
        var changes = this.iterableDiffer.diff(this.records);
        if (changes) {
            this.recordsCount = this.records.length;
        }
    };
    TableLayoutComponent.prototype.ngOnInit = function () {
    };
    TableLayoutComponent.prototype.download = function (records) {
        this.utility.convertAndDownload(records);
    };
    ;
    TableLayoutComponent.prototype.onOpenView = function (record) {
        this.record = record;
        if (this.recordType === 'product') {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__feature_dashboard_producer_modals_product_view_product_modal_view_product_modal_component__["a" /* ViewProductModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
        if (this.recordType === 'schedule') {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_6__feature_dashboard_producer_modals_schedule_view_schedule_modal_view_schedule_modal_component__["a" /* ViewScheduleModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
        if (this.recordType === 'order' && this.isConsumer === false) {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_9__feature_dashboard_producer_modals_order_view_order_modal_view_order_modal_component__["a" /* ViewOrderModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
        else if (this.recordType === 'order' && this.isConsumer === true) {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_11__feature_dashboard_consumer_modals_order_view_order_modal_view_order_modal_component__["a" /* ConsumerViewOrderModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
    };
    TableLayoutComponent.prototype.onOpenEdit = function (record) {
        var _this = this;
        this.record = record;
        if (this.recordType === 'product') {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_2__feature_dashboard_producer_modals_product_edit_product_modal_edit_product_modal_component__["a" /* EditProductModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
        if (this.recordType === 'schedule') {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_5__feature_dashboard_producer_modals_schedule_edit_schedule_modal_edit_schedule_modal_component__["a" /* EditScheduleModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
        if (this.recordType === 'order' && this.isConsumer === false) {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_8__feature_dashboard_producer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* EditOrderModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
            this.firstModalSubscription = modalRef.componentInstance.onOrderAccepted
                .subscribe(function (result) {
                console.log('here is the accepted result from table layout: ', result);
                _this.orderAccepted.emit(result);
            });
            this.secondModalSubscription = modalRef.componentInstance.onOrderDenied
                .subscribe(function (result) {
                console.log('here is the denied result from table layout: ', result);
                _this.orderDenied.emit(result);
            });
        }
        else if (this.recordType === 'order' && this.isConsumer === true) {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_12__feature_dashboard_consumer_modals_order_edit_order_modal_edit_order_modal_component__["a" /* ConsumerEditOrderModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
        }
    };
    TableLayoutComponent.prototype.onSelectDelete = function (record) {
        var _this = this;
        this.record = record;
        if (this.recordType === 'product') {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_4__feature_dashboard_producer_modals_product_delete_product_modal_delete_product_modal_component__["a" /* DeleteProductModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
            this.firstModalSubscription = modalRef.componentInstance.onProductObsolete
                .subscribe(function (result) {
                console.log('table layout obsolete kicked out: ', result);
                _this.productObsoleted.emit(result);
            });
            this.secondModalSubscription = modalRef.componentInstance.onProductDelete
                .subscribe(function (result) {
                _this.productDeleted.emit(result);
            });
        }
        if (this.recordType === 'schedule') {
            var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_7__feature_dashboard_producer_modals_schedule_delete_schedule_modal_delete_schedule_modal_component__["a" /* DeleteScheduleModalComponent */], { size: 'lg' });
            modalRef.componentInstance.record = record;
            this.firstModalSubscription = modalRef.componentInstance.onScheduleDeleted
                .subscribe(function (result) {
                _this.scheduleDeleted.emit(result);
            });
        }
    };
    ;
    TableLayoutComponent.prototype.onMarkComplete = function (record) {
        var _this = this;
        this.record = record;
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_10__feature_dashboard_producer_modals_order_mark_complete_order_modal_mark_complete_order_modal_component__["a" /* MarkCompleteOrderModalComponent */], { size: 'lg' });
        modalRef.componentInstance.record = record;
        this.firstModalSubscription = modalRef.componentInstance.onOrderCompleted
            .subscribe(function (result) {
            console.log('from table layout: order completed');
            _this.orderCompleted.emit(result);
        });
        this.secondModalSubscription = modalRef.componentInstance.onOrderIncompleted
            .subscribe(function (result) {
            console.log('from table layout: order incompleted');
            _this.orderIncompleted.emit(result);
        });
    };
    ;
    TableLayoutComponent.prototype.onSort = function (map) {
        this.setSortDirection(map);
        // get the sorting column
        var sortColumn = map.primaryKey;
        // get the sort direction
        var currentSortDirection = this.sortDirection[this.getSortDirectionIndex(sortColumn)].direction;
        // see if column contains numbers
        var isTypeOfNumber = this.isNumber(sortColumn);
        // if nested sortPath exists
        if (map.nested && !isTypeOfNumber) {
            if (currentSortDirection === 'descending') {
                this.sortedRecords = this.sortAscendingSortPath(this.records, sortColumn, map.sortPath);
            }
            else {
                this.sortedRecords = this.sortDescendingSortPath(this.records, sortColumn, map.sortPath);
            }
        }
        // if column is not numbers, sort as text
        if (!map.nested && !isTypeOfNumber) {
            if (currentSortDirection === 'descending') {
                this.sortedRecords = this.sortAscending(this.records, sortColumn);
            }
            else {
                this.sortedRecords = this.sortDescending(this.records, sortColumn);
            }
        }
        ;
        // column is numbers
        if (isTypeOfNumber && currentSortDirection === 'descending') {
            this.sortedRecords = this.records.sort(function (a, b) {
                return a[sortColumn] - b[sortColumn];
            });
        }
        else if (isTypeOfNumber && currentSortDirection === 'ascending') {
            this.sortedRecords = this.records.sort(function (a, b) {
                return b[sortColumn] - a[sortColumn];
            });
        }
        ;
        this.getPaginatedRecords(this.currentPage);
    };
    TableLayoutComponent.prototype.sortAscending = function (array, sortColumn) {
        return array.sort(function (a, b) {
            var first;
            var second;
            // if the sortColumn is an Object
            if (typeof a[sortColumn] === 'object') {
                first = a[sortColumn].name.toLowerCase();
                second = b[sortColumn].name.toLowerCase();
                if (first < second) {
                    return -1;
                }
                else if (first > second) {
                    return 1;
                }
                else {
                    return 0;
                }
                ;
            }
            else {
                first = a[sortColumn].toLowerCase();
                second = b[sortColumn].toLowerCase();
                if (first < second) {
                    return -1;
                }
                else if (first > second) {
                    return 1;
                }
                else {
                    return 0;
                }
                ;
            }
        });
    };
    ;
    TableLayoutComponent.prototype.sortAscendingSortPath = function (array, sortColumn, sortPath) {
        return array.sort(function (a, b) {
            var first;
            var second;
            first = a[sortColumn][sortPath].toLowerCase();
            second = b[sortColumn][sortPath].toLowerCase();
            if (first < second) {
                return -1;
            }
            else if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
            ;
        });
    };
    ;
    TableLayoutComponent.prototype.sortDescendingSortPath = function (array, sortColumn, sortPath) {
        return array.sort(function (a, b) {
            var first;
            var second;
            first = a[sortColumn][sortPath].toLowerCase();
            second = b[sortColumn][sortPath].toLowerCase();
            if (first > second) {
                return -1;
            }
            else if (first < second) {
                return 1;
            }
            else {
                return 0;
            }
            ;
        });
    };
    TableLayoutComponent.prototype.sortDescending = function (array, sortColumn) {
        return array.sort(function (a, b) {
            var first;
            var second;
            // if the sortColumn is an Object
            if (typeof a[sortColumn] === 'object') {
                first = a[sortColumn].name.toLowerCase();
                second = b[sortColumn].name.toLowerCase();
                if (first > second) {
                    return -1;
                }
                else if (first < second) {
                    return 1;
                }
                else {
                    return 0;
                }
                ;
            }
            else {
                first = a[sortColumn].toLowerCase();
                second = b[sortColumn].toLowerCase();
                if (first > second) {
                    return -1;
                }
                else if (first < second) {
                    return 1;
                }
                else {
                    return 0;
                }
                ;
            }
        });
    };
    TableLayoutComponent.prototype.isNumber = function (column) {
        if (typeof this.records[0][column] === 'number') {
            return true;
        }
        else {
            return false;
        }
    };
    TableLayoutComponent.prototype.setSortDirection = function (map) {
        var index;
        // get the index of the map.primaryKey
        if (this.sortDirection) {
            for (var i = 0; i < this.sortDirection.length; i++) {
                if (this.sortDirection[i].key === map.primaryKey) {
                    index = i;
                    break;
                }
                else {
                    index = -1;
                }
            }
        }
        var key = map.primaryKey;
        // set the sort direction of this column
        if (!this.sortDirection) {
            this.sortDirection = [{ key: key, direction: 'ascending' }];
        }
        else if (index === -1) {
            this.sortDirection.push({ key: key, direction: 'ascending' });
        }
        else if (this.sortDirection && this.sortDirection[index].direction === 'ascending') {
            this.sortDirection[index].direction = 'descending';
        }
        else {
            this.sortDirection[index].direction = 'ascending';
        }
    };
    TableLayoutComponent.prototype.getSortDirectionIndex = function (key) {
        var index = -1;
        for (var i = 0; i < this.sortDirection.length; i++) {
            if (this.sortDirection[i].key === key) {
                index = i;
            }
        }
        return index;
    };
    // ********* PAGINATION *********
    TableLayoutComponent.prototype.getPaginatedRecords = function (pageNumber) {
        if (this.recordsCount <= this.perPage) {
            this.paginatedRecords = this.sortedRecords;
        }
        else {
            var startIndex = ((pageNumber * this.perPage) - this.perPage);
            var endIndex = (pageNumber * this.perPage || this.recordsCount);
            this.paginatedRecords = this.sortedRecords.slice(startIndex, endIndex);
        }
    };
    ;
    TableLayoutComponent.prototype.goToPage = function (n) {
        this.currentPage = n;
        this.getPaginatedRecords(this.currentPage);
    };
    ;
    TableLayoutComponent.prototype.nextPage = function () {
        this.currentPage++;
        this.getPaginatedRecords(this.currentPage);
    };
    ;
    TableLayoutComponent.prototype.prevPage = function () {
        this.currentPage--;
        this.getPaginatedRecords(this.currentPage);
    };
    ;
    TableLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.firstModalSubscription) {
            this.firstModalSubscription.unsubscribe();
        }
        if (this.secondModalSubscription) {
            this.secondModalSubscription.unsubscribe();
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TableLayoutComponent.prototype, "records", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TableLayoutComponent.prototype, "caption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TableLayoutComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "deletable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "pending", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "accepted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "isConsumer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TableLayoutComponent.prototype, "recordType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "orderAccepted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "orderDenied", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "orderCompleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "orderIncompleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "scheduleDeleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "productObsoleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "productDeleted", void 0);
    TableLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-table-layout',
            template: __webpack_require__("./src/app/shared/table-layout/table-layout.component.html"),
            styles: [__webpack_require__("./src/app/shared/table-layout/table-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_13__core_services_utility_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* IterableDiffers */]])
    ], TableLayoutComponent);
    return TableLayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map