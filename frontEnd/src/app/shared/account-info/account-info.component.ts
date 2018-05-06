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

import { EditAccountModalComponent } from '../edit-account-modal/edit-account-modal.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  profile: any;
  @Input() user: UserModel;
  @Input() producer: ProducerModel;

  constructor(private auth: AuthService,
              private userService: UserService,
              private producerService: ProducerDashboardService,
              private modal: NgbModal) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    }

    console.log('user: ', this.user);
    console.log('producer: ', this.producer);

  };

  onOpenEdit() {
    const modalRef = this.modal.open(EditAccountModalComponent, { size: 'lg' });
    modalRef.componentInstance.user = this.user;
    if (this.producer) {
      modalRef.componentInstance.producer = this.producer;
    };
  };

}