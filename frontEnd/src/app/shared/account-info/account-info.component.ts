import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  profile: any;
  @Input() user: UserModel;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    }

  }

}
