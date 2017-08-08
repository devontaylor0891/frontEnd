import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
