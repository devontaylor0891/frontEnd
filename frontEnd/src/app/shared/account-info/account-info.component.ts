// import { Component, OnInit, Input } from '@angular/core';

// import { AuthService } from '../../auth/auth.service';

// import { UserModel } from '../../core/models/user.model';

// @Component({
//   selector: 'app-account-info',
//   templateUrl: './account-info.component.html',
//   styleUrls: ['./account-info.component.scss']
// })
// export class AccountInfoComponent implements OnInit {

//   profile: any;
//   @Input() user: UserModel;

//   constructor(private auth: AuthService) { }

//   ngOnInit() {

//     if (this.auth.userProfile) {
//       this.profile = this.auth.userProfile;
//     }

//   }

// }

import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../core/services/user/user.service';
import { ProducerDashboardService } from '../../feature/dashboard/producer-dashboard.service';

import { UserModel } from '../../core/models/user.model';
import { ProducerModel } from '../../core/models/producer.model';
import { ProducerDashboardComponent } from 'app/feature/dashboard/producer/producer-dashboard.component';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  profile: any;
  @Input() user: UserModel;
  producer: ProducerModel;

  constructor(private auth: AuthService,
              private userService: UserService,
              private producerService: ProducerDashboardService) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    }

    this.userService.getUser()
      .subscribe(
        result => {
          this.user = result;
          console.log('user: ', this.user);
        }
      );

    this.producerService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          console.log('producer: ', this.producer);
        }
      );

  }

}