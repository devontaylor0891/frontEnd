import { Component, OnInit, OnChanges } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../core/services/user/user.service';
import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit, OnChanges {

  userType: string;
  isAdmin: boolean;
	id: number;
	user: UserModel;

  ngOnChanges() {};

  constructor(private auth: AuthService,
              private userService: UserService) { }

  ngOnInit() {

	  this.userService.getUserType()
			.subscribe(
				result => {
					console.log('usertype result: ', result);
					this.userType = result;
				}
			);
		
		this.auth.getIsAdmin()
			.subscribe(
				result => {
					this.isAdmin = result;
				}
			);
			
		this.auth.getParsedId()
			.subscribe(
				result => {
					this.id = result;
				}
			);

		this.userService.getUser()
			.subscribe(
				result => {
					this.user = result;
				}
			);

    console.log('id: ', this.id);
    console.log('userType: ', this.userType);

  }

}