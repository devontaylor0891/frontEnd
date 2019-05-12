// import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

// import { AuthService } from '../../auth/auth.service';
// import { UserService } from '../../core/services/user/user.service';
// import { ProducerDashboardService } from '../../feature/dashboard/producer-dashboard.service';

// import { UserModel } from '../../core/models/user.model';
// import { ProducerModel } from '../../core/models/producer.model';

// import { EditAccountModalComponent } from '../edit-account-modal/edit-account-modal.component';

// import { Subscription } from 'rxjs/Subscription';

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
//   @Input() customUrlObject: any;
//   logoExists: boolean = false;

//   logoUploadSubscription: Subscription;
//   accountEditedSubscription: Subscription;

//   currentLogo: any;

//   ngOnChanges() {
//     console.log('producer: ', this.producer);
//     console.log('customurl: ', this.customUrl);

//     if (this.producer && this.producer.logoUrl !== '') {
//       this.currentLogo = 'https://s3-us-west-2.amazonaws.com/onlylocalfood-images/' + this.producer.id + '/logo?timeStamp=' + Date.now();
//       this.logoExists = true;
//     }
//   }

//   constructor(private auth: AuthService,
//               private userService: UserService,
//               private producerService: ProducerDashboardService,
//               private modal: NgbModal) { };

//   ngOnInit() {

//     if (this.auth.userProfile) {
//       this.profile = this.auth.userProfile;
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
//             this.logoExists = true;
//           }
//         );
//       this.accountEditedSubscription = modalRef.componentInstance.accountEdited
//         .subscribe(
//           result => {
//             if (result) { // if account was edited, reload the data in the service
//               this.userService.getUserFromDb(this.user.id);
//               this.producerService.loadData(this.producer.id);
//             };
//           }
//         );
//     };
//   };

//   ngOnDestroy() {
//     if (this.logoUploadSubscription) {
//       this.logoUploadSubscription.unsubscribe();
//     }
//     if (this.accountEditedSubscription) {
//     	this.accountEditedSubscription.unsubscribe();
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

import { Subscription } from 'rxjs/Subscription';

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
  @Input() customUrlObject: any;
  logoExists: boolean = false;

  logoUploadSubscription: Subscription;
  accountEditedSubscription: Subscription;

  currentLogo: any;

  ngOnChanges() {
    // console.log('producer: ', this.producer);
    // console.log('customurl: ', this.customUrlObject);

    if (this.producer && this.producer.logoUrl !== '') {
      this.currentLogo = 'https://s3-us-west-2.amazonaws.com/onlylocalfood-images/' + this.producer.id + '/logo?timeStamp=' + Date.now();
      this.logoExists = true;
    }
  }

  constructor(private auth: AuthService,
              private userService: UserService,
              private producerService: ProducerDashboardService,
              private modal: NgbModal) { };

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    }

  };

  onOpenEdit() {
    const modalRef = this.modal.open(EditAccountModalComponent, { size: 'lg' });
    modalRef.componentInstance.user = this.user;
    if (this.producer) {
      modalRef.componentInstance.producer = this.producer;
      modalRef.componentInstance.customUrlObject = this.customUrlObject;
      this.logoUploadSubscription = modalRef.componentInstance.imageUploaded
        .subscribe(
          result => {
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