import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { SearchComponent } from './feature/search/search.component';
import { LearnMoreComponent } from './feature/learn-more/learn-more.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ProducerComponent } from './feature/producer/producer/producer.component';
import { ProductComponent } from './feature/producer/product/product.component';
import { ScheduleComponent } from './feature/producer/schedule/schedule.component';
import { CartComponent } from './feature/cart/cart/cart.component';
import { CallbackComponent } from './auth/callback/callback.component';


const appRoutes: Routes = [
	{ path: '', component: LandingContentComponent, pathMatch: 'full' },
	{ path: 'search', component: SearchComponent },
	{ path: 'learn-more', component: LearnMoreComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'producer', component: ProducerComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'schedule', component: ScheduleComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'callback', component: CallbackComponent }
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
