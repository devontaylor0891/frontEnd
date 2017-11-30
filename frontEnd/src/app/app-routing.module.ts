import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { SearchComponent } from './feature/search/search.component';
import { LearnMoreComponent } from './feature/learn-more/learn-more.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ProducerComponent } from './feature/producer/producer.component';
import { ProducerPageComponent } from './feature/producer/producer-page/producer-page.component';
import { ProductComponent } from './feature/producer/product/product.component';
import { ScheduleComponent } from './feature/producer/schedule/schedule.component';
import { CartsComponent } from './feature/cart/cart/carts.component';
import { CheckoutComponent } from './feature/cart/checkout/checkout.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { AddUserComponent } from './feature/dashboard/admin/add-new/add-user/add-user.component';
import { AddProducerComponent } from './feature/dashboard/admin/add-new/add-producer/add-producer.component';
import { AddProductComponent } from './feature/dashboard/admin/products/add-product/add-product.component';
import { AddDeliveryComponent } from './feature/dashboard/admin/add-new/add-delivery/add-delivery.component';
import { AddOrderComponent } from './feature/dashboard/admin/add-new/add-order/add-order.component';

const appRoutes: Routes = [
	
	{ path: 'search', component: SearchComponent },
	{ path: 'learn-more', component: LearnMoreComponent },
	{ path: 'dashboard', component: DashboardComponent, children: [
		{ path: 'add-user', component: AddUserComponent },
		{ path: 'add-producer', component: AddProducerComponent },
		{ path: 'add-product', component: AddProductComponent },
		{ path: 'add-delivery', component: AddDeliveryComponent },
		{ path: 'add-order', component: AddOrderComponent }
	]},
	{ path: 'producer/:id', component: ProducerComponent, children: [
		{ path: '', component: ProducerPageComponent },
		{ path: 'schedule', component: ScheduleComponent },
		{ path: 'product/:id', component: ProductComponent }
	]}
	,
	{ path: 'cart', component: CartsComponent },
	{ path: 'checkout/:tempId', component: CheckoutComponent },
	{ path: 'callback', component: CallbackComponent },
	{ path: '', component: LandingContentComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
