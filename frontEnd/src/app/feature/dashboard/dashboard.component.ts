import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DashboardService } from './dashboard.service';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../core/services/user/user.service';
import { ConsumerDashboardService } from './consumer/consumer-dashboard.service';

import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService, ConsumerDashboardService]
})
export class DashboardComponent implements OnInit, OnChanges {

  userType: string;
  isAdmin: boolean;
	id: number;
	user: UserModel;

  ngOnChanges() {};

  constructor(private auth: AuthService,
							private userService: UserService,
							private title: Title) { }

  ngOnInit() {

		this.title.setTitle('Your Dashboard');

	  this.userService.getUserType()
			.subscribe(
				result => {
					// console.log('usertype result: ', result);
					this.userType = result;
				}
			);
		
		this.auth.getIsAdmin()
			.subscribe(
				result => {
					this.isAdmin = result;
					// console.log('isAdmin: ', result);
				}
			);
			
		this.auth.getParsedId()
			.subscribe(
				result => {
					this.id = result;
					// console.log('Auth0 id: ', result);
				}
			);

		this.userService.getUser()
			.subscribe(
				result => {
					this.user = result;
					// console.log('user: ', result);
				}
			);

  }

}