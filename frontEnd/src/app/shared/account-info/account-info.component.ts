// import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

// import { AuthService } from '../../auth/auth.service';
// import { UserService } from '../../core/services/user/user.service';
// import { ProducerDashboardService } from '../../feature/dashboard/producer-dashboard.service';

// import { UserModel } from '../../core/models/user.model';
// import { ProducerModel } from '../../core/models/producer.model';

// import { EditAccountModalComponent } from '../edit-account-modal/edit-account-modal.component';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-account-info',
//   templateUrl: './account-info.component.html',
//   styleUrls: ['./account-info.component.scss']
// })
// export class AccountInfoComponent implements OnInit, OnChanges, OnDestroy {

//   profile: any;
//   @Input() user: UserModel;
//   @Input() producer: ProducerModel;
//   logoExists: boolean = false;

//   logoUploadSubscription: any;

//   ngOnChanges() {}

//   constructor(private auth: AuthService,
//               private userService: UserService,
//               private producerService: ProducerDashboardService,
//               private modal: NgbModal) { };

//   ngOnInit() {

//     if (this.auth.userProfile) {
//       this.profile = this.auth.userProfile;
//     }

//     console.log('user: ', this.user);
//     console.log('producer: ', this.producer);

//     if (this.producer && this.producer.logoUrl !== '') {
//       this.logoExists = true;
//     }

//   };

//   onOpenEdit() {
//     const modalRef = this.modal.open(EditAccountModalComponent, { size: 'lg' });
//     modalRef.componentInstance.user = this.user;
//     if (this.producer) {
//       modalRef.componentInstance.producer = this.producer;
//       this.logoUploadSubscription = modalRef.componentInstance.imageUploaded
//         .subscribe(
//           result => {
//             console.log('here is the result from edit account modal: ', result);
//             this.logoExists = true;
//           }
//         );
//     };
//   };

//   ngOnDestroy() {
//     if (this.logoUploadSubscription) {
//       this.logoUploadSubscription.unsubscribe();
//     }
//   }

// }

import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

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
export class AccountInfoComponent implements OnInit, OnChanges, OnDestroy {

  profile: any;
  @Input() user: UserModel;
  @Input() producer: ProducerModel;
  logoExists: boolean = false;

  logoUploadSubscription: any;
  accountEditedSubscription: any;

  ngOnChanges() {}

  constructor(private auth: AuthService,
              private userService: UserService,
              private producerService: ProducerDashboardService,
              private modal: NgbModal) { };

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    }

    console.log('user: ', this.user);
    console.log('producer: ', this.producer);

    if (this.producer && this.producer.logoUrl !== '') {
      this.logoExists = true;
    }

  };

  onOpenEdit() {
    const modalRef = this.modal.open(EditAccountModalComponent, { size: 'lg' });
    modalRef.componentInstance.user = this.user;
    if (this.producer) {
      modalRef.componentInstance.producer = this.producer;
      this.logoUploadSubscription = modalRef.componentInstance.imageUploaded
        .subscribe(
          result => {
            console.log('here is the result from edit account modal: ', result);
            this.logoExists = true;
          }
        );
      this.accountEditedSubscription = modalRef.componentInstance.accountEdited
        .subscribe(
          result => {
            if (result) { // if account was edited, reload the data in the service
              this.userService.getUserFromDb(this.user.id);
              this.producerService.loadData(this.producer.id);
            };
          }
        );
    };
  };

  ngOnDestroy() {
    if (this.logoUploadSubscription) {
      this.logoUploadSubscription.unsubscribe();
    }
    if (this.accountEditedSubscription) {
    	this.accountEditedSubscription.unsubscribe();
    }
  }

}