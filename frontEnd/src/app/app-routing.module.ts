import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SearchComponent } from './feature/search/search.component';
import { LearnMoreComponent } from './feature/learn-more/learn-more.component';

const appRoutes: Routes = [
	{ path: '', component: LandingContentComponent, pathMatch: 'full' },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'learn-more', component: LearnMoreComponent }

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
