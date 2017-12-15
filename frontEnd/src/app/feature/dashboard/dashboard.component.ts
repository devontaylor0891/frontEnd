import { Component, OnInit, OnChanges } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit, OnChanges {

  userType: string;
  isAdmin: boolean;

  ngOnChanges() {};

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.userType = this.auth.userProfile['http://myapp.com/userType'];
    this.isAdmin = this.auth.isAdmin;

  }

}
