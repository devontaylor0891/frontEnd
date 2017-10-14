import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { LocationService } from './shared/services/location/location.service';

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
import { ProducerComponent } from './feature/producer/producer/producer.component';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService, ApiService, LocationService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
