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
  id: number;

  ngOnChanges() {};

  constructor(private auth: AuthService) { }

  getIndexInString(string) {
    return string.indexOf('|');
  }

  ngOnInit() {

    this.userType = this.auth.userProfile['http://myapp.com/userType'];
    this.isAdmin = this.auth.isAdmin;
    this.id = +this.auth.userProfile.sub.slice(this.auth.userProfile.sub.indexOf('|') + 1);
    console.log('id: ', this.id);
    console.log('userType: ', this.userType);

  }

}
