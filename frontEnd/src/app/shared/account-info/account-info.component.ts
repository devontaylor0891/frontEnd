import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/services/user/user.service';
import { ProducerDashboardService } from '../../feature/dashboard/producer-dashboard.service';
import { MarketDashboardService } from '../../feature/dashboard/market-dashboard.service';

import { UserModel } from '../../core/models/user.model';
import { ProducerModel } from '../../core/models/producer.model';

import { EditAccountModalComponent } from '../edit-account-modal/edit-account-modal.component';
import { EditMarketLocationModalComponent } from '../../feature/dashboard/market/modals/locations/edit-market-location-modal/edit-market-location-modal.component';
import { DeleteMarketLocationModalComponent } from '../../feature/dashboard/market/modals/locations/delete-market-location-modal/delete-market-location-modal.component';
import { AddMarketLocationModalComponent } from '../../feature/dashboard/market/modals/locations/add-market-location-modal/add-market-location-modal.component';

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
  @Input() market: any;
  @Input() locations: any[];
  @Input() customUrlObject: any;
  logoExists = false;

  logoUploadSubscription: Subscription;
  accountEditedSubscription: Subscription;
  locationEditedSubscription: Subscription;
  locationDeletedSubscription: Subscription;
  locationAddedSubscription: Subscription;
  getLocationNotificationsSub: Subscription;

  currentLogo: any;

  currentLocationNotifsArray: any;

  ngOnChanges() {

    if (this.producer && this.producer.logoUrl !== '') {
      this.currentLogo = 'https://s3-us-west-2.amazonaws.com/onlylocalfood-images/' + this.producer.id + '/logo?timeStamp=' + Date.now();
      this.logoExists = true;
    };

    if (this.market && this.market.logoUrl !== '') {
      this.currentLogo = 'https://s3-us-west-2.amazonaws.com/onlylocalfood-images/' + this.market.logoUrl + '?timeStamp=' + Date.now();
      this.logoExists = true;
    };

  }

  constructor(private auth: AuthService,
              private userService: UserService,
              private producerService: ProducerDashboardService,
              private marketService: MarketDashboardService,
              private modal: NgbModal,
              private apiService: ApiService) { };

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    };

    // console.log('market passed in: ', this.market);

    this.getLocationNotificationsSub = this.apiService.getLocationNotifications(this.user.id)
      .subscribe(
        result => {
          this.currentLocationNotifsArray = result;
          // console.log('locations received: ', this.currentLocationNotifsArray);
        }
      )

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
    } else if (this.market) {
      modalRef.componentInstance.market = this.market;
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
              this.marketService.loadData(this.user.id);
            };
          }
        );
    };
  };

  onOpenEditLocation(loc) {
    // console.log('edit location:, ', loc);
    const modalRef = this.modal.open(EditMarketLocationModalComponent, { size: 'lg' });
    modalRef.componentInstance.location = loc;
    this.locationEditedSubscription = modalRef.componentInstance.locationEdited
      .subscribe(
        result => {
          if (result ) {
            console.log('location edited');
            this.marketService.loadData(this.user.id);
          } else {
            console.log('edits cancelled');
          }
        }
      );
  };

  onOpenDeleteLocation(loc) {
    console.log('delete this one: ', loc);
    const modalRef = this.modal.open(DeleteMarketLocationModalComponent, { size: 'lg' });
    modalRef.componentInstance.locationId = loc.id;
    this.locationDeletedSubscription = modalRef.componentInstance.locationDeleted
      .subscribe(
        result => {
          if (result ) {
            console.log('location deleted');
            this.marketService.loadData(this.user.id);
          } else {
            console.log('delete cancelled');
          }
        }
      );
  };

  onAddLocation() {
    const modalRef = this.modal.open(AddMarketLocationModalComponent, { size: 'lg' });
    modalRef.componentInstance.marketId = this.market.marketId;
    this.locationAddedSubscription = modalRef.componentInstance.locationAdded
      .subscribe(
        result => {
          if (result ) {
            console.log('location added');
            this.marketService.loadData(this.user.id);
          } else {
            console.log('add cancelled');
          }
        }
      );
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
