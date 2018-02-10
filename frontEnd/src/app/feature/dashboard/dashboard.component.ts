import { Component, OnInit, OnChanges } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../core/services/user/user.service';

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

    console.log('id: ', this.id);
    console.log('userType: ', this.userType);

  }

}