import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// THIRD PARTY MODULES
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { AgmCoreModule } from '@agm/core';
// import { DateTimePickerModule } from 'ng-pick-datetime';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxCaptchaModule } from 'ngx-captcha';

// SERVICES
import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { LocationService } from './core/services/location/location.service';
import { SearchService } from './core/services/search/search.service';
import { CartService } from './core/services/cart-service/cart.service';
import { UtilityService } from './core/services/utility/utility.service';
import { ProducerDashboardService } from './feature/dashboard/producer-dashboard.service';
import { MarketDashboardService } from './feature/dashboard/market-dashboard.service';

import { PlacesService } from './core/services/places/places.service';
import { UserService } from './core/services/user/user.service';
import { ImageService } from './core/services/image/image.service';
import { ProducerService } from './core/services/producer/producer.service';
import { MarketService } from './core/services/market/market.service';

// PIPES
import { FormatCellPipe } from './shared/pipes/format-cell.pipe';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { FirstCharacterToUppercasePipe } from './shared/pipes/firstCharacterToUppercase.pipe';

// COMPONENTS
// core
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
// feature/search
import { SearchComponent } from './feature/search/search.component';
import { SearchOptionsComponent } from './feature/search/search-options/search-options/search-options.component';
import { SearchResultsComponent } from './feature/search/search-results/search-results/search-results.component';
import { FilterButtonsComponent } from './feature/search/search-results/filter-buttons/filter-buttons.component';
import { ResultsPaneComponent } from './feature/search/search-results/results-pane/results-pane.component';
import { SearchProducerComponent } from './feature/search/search-results/results-pane/search-producer/search-producer.component';
import { SearchCalendarComponent } from './feature/search/search-results/results-pane/search-calendar/search-calendar.component';
import { SearchProductComponent } from './feature/search/search-results/results-pane/search-product/search-product.component';
import { ProducerCardComponent } from './feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component';
// feature/producer
import { ProducerComponent } from './feature/producer/producer.component';
import { ProductComponent } from './feature/producer/product/product.component';
import { ScheduleComponent } from './feature/producer/schedule/schedule.component';
import { ProducerPageComponent } from './feature/producer/producer-page/producer-page.component';
import { ProducerPageProductCardComponent } from './feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component';
// feature/cart
import { CartsComponent } from './feature/cart/cart/carts.component';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';
import { CartComponent } from './feature/cart/cart/cart/cart.component';
import { CartProductComponent } from './feature/cart/cart/cart/cart-product/cart-product.component';
import { CheckoutComponent } from './feature/cart/checkout/checkout.component';
import { CheckoutProductComponent } from './feature/cart/checkout/checkout-product/checkout-product.component';
import { ConfirmationComponent } from './feature/cart/confirmation/confirmation.component';
// feature/learnmore
import { LearnMoreComponent } from './feature/learn-more/learn-more.component';
import { LearnMoreConsumerComponent } from './feature/learn-more/learn-more-consumer/learn-more-consumer.component';
import { LearnMoreProducerComponent } from './feature/learn-more/learn-more-producer/learn-more-producer.component';
// auth
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';

// shared
import { AccountInfoComponent } from './shared/account-info/account-info.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { TableLayoutComponent } from 'app/shared/table-layout/table-layout.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ImageCropperComponent } from './shared/image-cropper/image-cropper.component';

// dashboards - good candidate for lazy loading
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { UsersComponent } from './feature/dashboard/admin/users/users.component';
import { ProducersComponent } from './feature/dashboard/admin/producers/producers.component';
import { ProductsComponent } from './feature/dashboard/admin/products/products.component';
import { DeliveriesComponent } from './feature/dashboard/admin/deliveries/deliveries.component';
import { OrdersComponent } from './feature/dashboard/admin/orders/orders.component';
import { OrderViewDetailsComponent } from './feature/dashboard/admin/orders/order-view-details/order-view-details.component';
import { ProductViewDetailsComponent } from './feature/dashboard/admin/products/product-view-details/product-view-details.component';
import { ProductEditFormComponent } from './feature/dashboard/admin/products/product-edit-form/product-edit-form.component';
import { AddProductComponent } from './feature/dashboard/admin/products/add-product/add-product.component';
import { AddUserComponent } from './feature/dashboard/admin/add-new/add-user/add-user.component';
import { AddProducerComponent } from './feature/dashboard/admin/add-new/add-producer/add-producer.component';
import { AddDeliveryComponent } from './feature/dashboard/admin/add-new/add-delivery/add-delivery.component';
import { AddOrderComponent } from './feature/dashboard/admin/add-new/add-order/add-order.component';
import { AdminDashboardComponent } from './feature/dashboard/admin/admin-dashboard.component';
import { ConsumerDashboardComponent } from './feature/dashboard/consumer/consumer-dashboard.component';
import { ProducerDashboardComponent } from './feature/dashboard/producer/producer-dashboard.component';
import { ConsumerOrdersComponent } from './feature/dashboard/consumer/consumer-orders/consumer-orders.component';
import { ProducerOrdersComponent } from './feature/dashboard/producer/producer-orders/producer-orders.component';
import { ProducerProductsComponent } from './feature/dashboard/producer/producer-products/producer-products.component';
import { ProducerScheduleComponent } from './feature/dashboard/producer/producer-schedule/producer-schedule.component';

// dashboard/modals - good candidate for lazy loading
import { EditProductModalComponent } from './feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component';
import { ViewProductModalComponent } from './feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component';
import { DeleteProductModalComponent } from './feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component';
import { EditOrderModalComponent } from './feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component';
import { ViewOrderModalComponent } from './feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component';
import { EditScheduleModalComponent } from './feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component';
import { ViewScheduleModalComponent } from './feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component';
import { DeleteScheduleModalComponent } from './feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component';
import { AddProductModalComponent } from './feature/dashboard/producer/modals/product/add-product-modal/add-product-modal.component';
import { AddScheduleModalComponent } from './feature/dashboard/producer/modals/schedule/add-schedule-modal/add-schedule-modal.component';
import { ConsumerViewOrderModalComponent } from './feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component';
import { ConsumerEditOrderModalComponent } from './feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component';
import { MarkCompleteOrderModalComponent } from './feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component';
import { EditAccountModalComponent } from './shared/edit-account-modal/edit-account-modal.component';
import { ImageComponent } from './shared/image/image.component';
import { LogoCropperComponent } from './shared/logo-cropper/logo-cropper.component';
import { AdminOrderViewModalComponent } from './feature/dashboard/admin/modals/orders/admin-order-view-modal/admin-order-view-modal.component';
import { AdminUserViewModalComponent } from './feature/dashboard/admin/modals/users/admin-user-view-modal/admin-user-view-modal.component';
import { AdminProducerViewModalComponent } from './feature/dashboard/admin/modals/producers/admin-producer-view-modal/admin-producer-view-modal.component';
import { AdminProductViewModalComponent } from './feature/dashboard/admin/modals/products/admin-product-view-modal/admin-product-view-modal.component';
import { AdminScheduleViewModalComponent } from './feature/dashboard/admin/modals/schedules/admin-schedule-view-modal/admin-schedule-view-modal.component';
import { ContactComponent } from './shared/contact/contact.component';
import { CheckoutWarningModalComponent } from './feature/cart/checkout/checkout-warning-modal/checkout-warning-modal.component';
import { LocationNotificationSignUpModalComponent } from './shared/location-notification-sign-up-modal/location-notification-sign-up-modal.component';
import { LocationNotificationComponent } from './feature/location-notification/location-notification.component';
import { FbPageComponent } from './shared/social-media/facebook/fb-page/fb-page.component';
import { FbLikeComponent } from './shared/social-media/facebook/fb-like/fb-like.component';
import { FbLikeShareComponent } from './shared/social-media/facebook/fb-like-share/fb-like-share.component';
import { FbShareComponent } from './shared/social-media/facebook/fb-share/fb-share.component';
import { TwitterTweetComponent } from './shared/social-media/twitter/twitter-tweet/twitter-tweet.component';
import { TwitterFeedComponent } from './shared/social-media/twitter/twitter-feed/twitter-feed.component';
import { CustomUrlResolverComponent } from './shared/custom-url-resolver/custom-url-resolver.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FaqComponent } from './feature/faq/faq.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { TandcComponent } from './shared/tandc/tandc.component';
import { SearchCalendarListComponent } from './feature/search/search-results/results-pane/search-calendar-list/search-calendar-list.component';
import { SearchMapComponent } from './feature/search/search-results/results-pane/search-map/search-map.component';
import { NgxPrintModule } from 'ngx-print';
import { ProductCardMobileComponent } from './shared/product-card-mobile/product-card-mobile.component';
import { AddToCartMobileComponent } from './shared/add-to-cart-mobile/add-to-cart-mobile.component';
import { SearchResultsMobileComponent } from './feature/search/search-results-mobile/search-results-mobile.component';
import { SearchOptionsMobileComponent } from './feature/search/search-options-mobile/search-options-mobile.component';
import { ProducerCardMobileComponent } from './feature/search/search-results/results-pane/search-producer/producer-card-mobile/producer-card-mobile.component';
import { ProducerPageCalendarMobileComponent } from './feature/producer/producer-page/producer-page-calendar-mobile/producer-page-calendar-mobile.component';
import { CheckoutCalendarMobileComponent } from './feature/cart/checkout/checkout-calendar-mobile/checkout-calendar-mobile.component';
import { MobileCheckoutComponent } from './feature/cart/mobile-checkout/mobile-checkout.component';
import { ProducerPageProductCardMobileComponent } from './feature/producer/producer-page/producer-page-product-card-mobile/producer-page-product-card-mobile.component';
import { MarketComponent } from './feature/market/market.component';
import { MarketPageComponent } from './feature/market/market-page/market-page.component';
import { AddMarketLocationComponent } from './shared/add-market-location/add-market-location.component';
import { AddNewMarketComponent } from './auth/update-profile/add-new-market/add-new-market.component';
import { AddNewProducerComponent } from './auth/update-profile/add-new-producer/add-new-producer.component';
import { MarketDashboardComponent } from './feature/dashboard/market/market-dashboard/market-dashboard.component';
import { MarketScheduleComponent } from './feature/dashboard/market/market-schedule/market-schedule.component';
import { AddMarketScheduleModalComponent } from './feature/dashboard/market/modals/schedules/add-market-schedule-modal/add-market-schedule-modal.component';
import { EditMarketScheduleModalComponent } from './feature/dashboard/market/modals/schedules/edit-market-schedule-modal/edit-market-schedule-modal.component';
import { ViewMarketScheduleModalComponent } from './feature/dashboard/market/modals/schedules/view-market-schedule-modal/view-market-schedule-modal.component';
import { DeleteMarketScheduleModalComponent } from './feature/dashboard/market/modals/schedules/delete-market-schedule-modal/delete-market-schedule-modal.component';
import { EditMarketLocationModalComponent } from './feature/dashboard/market/modals/locations/edit-market-location-modal/edit-market-location-modal.component';
import { DeleteMarketLocationModalComponent } from './feature/dashboard/market/modals/locations/delete-market-location-modal/delete-market-location-modal.component';
import { AddMarketLocationModalComponent } from './feature/dashboard/market/modals/locations/add-market-location-modal/add-market-location-modal.component';
import { MarketPageScheduleComponent } from './feature/market/market-page/market-page-schedule/market-page-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingContentComponent,
    SearchComponent,
    LearnMoreComponent,
    DashboardComponent,
    ProductCardComponent,
    SearchOptionsComponent,
    SearchResultsComponent,
    FilterButtonsComponent,
    ResultsPaneComponent,
    ProducerComponent,
    ProductComponent,
    ScheduleComponent,
    CartsComponent,
    SigninComponent,
    RegisterComponent,
    UsersComponent,
    ProducersComponent,
    ProductsComponent,
    DeliveriesComponent,
    AccountInfoComponent,
    OrdersComponent,
    OrderViewDetailsComponent,
    CallbackComponent,
    ProductViewDetailsComponent,
    ProductEditFormComponent,
    AddProductComponent,
    AddUserComponent,
    AddProducerComponent,
    AddDeliveryComponent,
    AddOrderComponent,
    SearchProducerComponent,
    SearchCalendarComponent,
    SearchProductComponent,
    ProducerCardComponent,
    ProducerPageComponent,
    ProducerPageProductCardComponent,
    AddToCartComponent,
    CartComponent,
    CartProductComponent,
    CheckoutComponent,
    CheckoutProductComponent,
    ConfirmationComponent,
    UpdateProfileComponent,
    TableLayoutComponent,
    FormatCellPipe,
    FirstCharacterToUppercasePipe,
    AdminDashboardComponent,
    ConsumerDashboardComponent,
    ProducerDashboardComponent,
    ConsumerOrdersComponent,
    ProducerOrdersComponent,
    ProducerProductsComponent,
    ProducerScheduleComponent,
    EditProductModalComponent,
    LoadingComponent,
    ViewProductModalComponent,
    DeleteProductModalComponent,
    EditOrderModalComponent,
    ViewOrderModalComponent,
    EditScheduleModalComponent,
    ViewScheduleModalComponent,
    DeleteScheduleModalComponent,
    AddProductModalComponent,
    AddScheduleModalComponent,
    ConsumerViewOrderModalComponent,
    ConsumerEditOrderModalComponent,
    LearnMoreConsumerComponent,
    LearnMoreProducerComponent,
    PaginationComponent,
    MarkCompleteOrderModalComponent,
    EditAccountModalComponent,
    ImageCropperComponent,
    ImageComponent,
    LogoCropperComponent,
    AdminOrderViewModalComponent,
    AdminUserViewModalComponent,
    AdminProducerViewModalComponent,
    AdminProductViewModalComponent,
    AdminScheduleViewModalComponent,
    ContactComponent,
    CheckoutWarningModalComponent,
    LocationNotificationSignUpModalComponent,
    LocationNotificationComponent,
    FbPageComponent,
    FbLikeComponent,
    FbLikeShareComponent,
    FbShareComponent,
    TwitterTweetComponent,
    TwitterFeedComponent,
    CustomUrlResolverComponent,
    PageNotFoundComponent,
    FaqComponent,
    PrivacyComponent,
    TandcComponent,
    SearchCalendarListComponent,
    SearchMapComponent,
    ProductCardMobileComponent,
    AddToCartMobileComponent,
    SearchResultsMobileComponent,
    SearchOptionsMobileComponent,
    ProducerCardMobileComponent,
    ProducerPageCalendarMobileComponent,
    CheckoutCalendarMobileComponent,
    MobileCheckoutComponent,
    ProducerPageProductCardMobileComponent,
    MarketComponent,
    MarketPageComponent,
    AddMarketLocationComponent,
    AddNewMarketComponent,
    AddNewProducerComponent,
    MarketDashboardComponent,
    MarketScheduleComponent,
    AddMarketScheduleModalComponent,
    EditMarketScheduleModalComponent,
    ViewMarketScheduleModalComponent,
    DeleteMarketScheduleModalComponent,
    EditMarketLocationModalComponent,
    DeleteMarketLocationModalComponent,
    AddMarketLocationModalComponent,
    MarketPageScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    Ng2PageScrollModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgN6Tt6BxP2Q-iNCNe7HiHfIGotu1j_uY',
      libraries: ['places']
    }),
    // DateTimePickerModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    RouterModule,
    AppRoutingModule,
    ImageCropperModule,
    NgxCaptchaModule,
    NgxPrintModule
  ],
  providers: [
    UserService,
    AuthService,
    ApiService,
    LocationService,
    SearchService,
    CartService,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    UtilityService,
    ProducerDashboardService,
    MarketDashboardService,
    EditProductModalComponent,
    NgbActiveModal,
    ViewProductModalComponent,
    DeleteProductModalComponent,
    EditOrderModalComponent,
    ViewOrderModalComponent,
    EditScheduleModalComponent,
    ViewScheduleModalComponent,
    DeleteScheduleModalComponent,
    AddProductModalComponent,
    AddScheduleModalComponent,
    ConsumerViewOrderModalComponent,
    ConsumerEditOrderModalComponent,
    PlacesService,
    Title,
    ImageService,
    ProducerService,
    MarketService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    EditProductModalComponent,
    ViewProductModalComponent,
    DeleteProductModalComponent,
    EditOrderModalComponent,
    ViewOrderModalComponent,
    EditScheduleModalComponent,
    ViewScheduleModalComponent,
    DeleteScheduleModalComponent,
    AddProductModalComponent,
    AddScheduleModalComponent,
    ConsumerViewOrderModalComponent,
    ConsumerEditOrderModalComponent,
    MarkCompleteOrderModalComponent,
    EditAccountModalComponent,
    AdminOrderViewModalComponent,
    AdminUserViewModalComponent,
    AdminProducerViewModalComponent,
    AdminProductViewModalComponent,
    AdminScheduleViewModalComponent,
    CheckoutWarningModalComponent,
    LocationNotificationSignUpModalComponent,
    AddMarketScheduleModalComponent,
    EditMarketScheduleModalComponent,
    ViewMarketScheduleModalComponent,
    DeleteMarketScheduleModalComponent,
    EditMarketLocationModalComponent,
    DeleteMarketLocationModalComponent,
    AddMarketLocationModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
