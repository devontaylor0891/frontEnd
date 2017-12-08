import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  profile: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    }

  }

}
