import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guards/auth.guard';
import { AdminGuard } from './auth/auth-guards/admin.guard';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { SearchComponent } from './feature/search/search.component';
import { LearnMoreConsumerComponent } from './feature/learn-more/learn-more-consumer/learn-more-consumer.component';
import { LearnMoreProducerComponent } from './feature/learn-more/learn-more-producer/learn-more-producer.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ProducerComponent } from './feature/producer/producer.component';
import { ProducerPageComponent } from './feature/producer/producer-page/producer-page.component';
import { MarketComponent } from './feature/market/market.component';
import { MarketPageComponent } from './feature/market/market-page/market-page.component';
import { MarketLocationScheduleComponent } from './feature/market/market-location-schedule/market-location-schedule.component';
import { ProductComponent } from './feature/producer/product/product.component';
import { ScheduleComponent } from './feature/producer/schedule/schedule.component';
import { CartsComponent } from './feature/cart/cart/carts.component';
import { CheckoutComponent } from './feature/cart/checkout/checkout.component';
import { ConfirmationComponent } from './feature/cart/confirmation/confirmation.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';
import { AddUserComponent } from './feature/dashboard/admin/add-new/add-user/add-user.component';
import { AddProducerComponent } from './feature/dashboard/admin/add-new/add-producer/add-producer.component';
import { AddProductComponent } from './feature/dashboard/admin/products/add-product/add-product.component';
import { AddDeliveryComponent } from './feature/dashboard/admin/add-new/add-delivery/add-delivery.component';
import { AddOrderComponent } from './feature/dashboard/admin/add-new/add-order/add-order.component';
import { LocationNotificationComponent } from './feature/location-notification/location-notification.component';
import { CustomUrlResolverComponent } from './shared/custom-url-resolver/custom-url-resolver.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { TandcComponent } from './shared/tandc/tandc.component';
import { FaqComponent } from './feature/faq/faq.component';

const appRoutes: Routes = [

  { path: 'search', component: SearchComponent },
  { path: 'learn-more-consumer', component: LearnMoreConsumerComponent },
  { path: 'learn-more-producer', component: LearnMoreProducerComponent },
  { path: 'faq', component: FaqComponent },
  {
    path: 'dashboard',
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],
    children: [
      {
        path: '',
        component: DashboardComponent, children: [
          { path: 'add-user', component: AddUserComponent },
          { path: 'add-producer', component: AddProducerComponent },
          { path: 'add-product', component: AddProductComponent },
          { path: 'add-delivery', component: AddDeliveryComponent },
          { path: 'add-order', component: AddOrderComponent }
        ]
      }
    ]
  },
  {
    path: 'producer/:id', component: ProducerComponent, children: [
      { path: '', component: ProducerPageComponent },
      { path: 'schedule', component: ScheduleComponent }
    ]
  },
  {
    path: 'market/:id', component: MarketComponent, children: [
      { path: '', component: MarketPageComponent },
      { path: 'schedule/:id', component: MarketLocationScheduleComponent }
    ]
  },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartsComponent },
  { path: 'checkout/:tempId', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'location-notification', component: LocationNotificationComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'tandc', component: TandcComponent },
  { path: ':customUrl', component: CustomUrlResolverComponent },
  { path: '', component: LandingContentComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminGuard
  ]
})
export class AppRoutingModule { }
