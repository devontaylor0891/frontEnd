import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { LocationService } from './core/services/location/location.service';
import { CartService } from './core/services/cart-service/cart.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { SearchComponent } from './feature/search/search.component';
import { LearnMoreComponent } from './feature/learn-more/learn-more.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { SearchOptionsComponent } from './feature/search/search-options/search-options/search-options.component';
import { SearchResultsComponent } from './feature/search/search-results/search-results/search-results.component';
import { FilterButtonsComponent } from './feature/search/search-results/filter-buttons/filter-buttons.component';
import { ResultsPaneComponent } from './feature/search/search-results/results-pane/results-pane.component';
import { ProducerComponent } from './feature/producer/producer.component';
import { ProductComponent } from './feature/producer/product/product.component';
import { ScheduleComponent } from './feature/producer/schedule/schedule.component';
import { CartComponent } from './feature/cart/cart/cart.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './feature/dashboard/admin/users/users.component';
import { ProducersComponent } from './feature/dashboard/admin/producers/producers.component';
import { ProductsComponent } from './feature/dashboard/admin/products/products.component';
import { DeliveriesComponent } from './feature/dashboard/admin/deliveries/deliveries.component';
import { AccountInfoComponent } from './feature/dashboard/admin/account-info/account-info.component';
import { OrdersComponent } from './feature/dashboard/admin/orders/orders.component';
import { OrderViewDetailsComponent } from './feature/dashboard/admin/orders/order-view-details/order-view-details.component';
import { CallbackComponent } from './auth/callback/callback.component';

import { ProductViewDetailsComponent } from './feature/dashboard/admin/products/product-view-details/product-view-details.component';
import { ProductEditFormComponent } from './feature/dashboard/admin/products/product-edit-form/product-edit-form.component';
import { AddProductComponent } from './feature/dashboard/admin/products/add-product/add-product.component';
import { AddUserComponent } from './feature/dashboard/admin/add-new/add-user/add-user.component';
import { AddProducerComponent } from './feature/dashboard/admin/add-new/add-producer/add-producer.component';
import { AddDeliveryComponent } from './feature/dashboard/admin/add-new/add-delivery/add-delivery.component';
import { AddOrderComponent } from './feature/dashboard/admin/add-new/add-order/add-order.component';
import { SearchProducerComponent } from './feature/search/search-results/results-pane/search-producer/search-producer.component';
import { SearchCalendarComponent } from './feature/search/search-results/results-pane/search-calendar/search-calendar.component';
import { SearchProductComponent } from './feature/search/search-results/results-pane/search-product/search-product.component';
import { ProducerCardComponent } from './feature/search/search-results/results-pane/search-producer/producer-card/producer-card.component';
import { ProducerPageComponent } from './feature/producer/producer-page/producer-page.component';
import { ProducerPageProductCardComponent } from './feature/producer/producer-page/producer-page-product-card/producer-page-product-card.component';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';

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
    CartComponent,
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    Ng2PageScrollModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [AuthService, ApiService, LocationService, CartService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
