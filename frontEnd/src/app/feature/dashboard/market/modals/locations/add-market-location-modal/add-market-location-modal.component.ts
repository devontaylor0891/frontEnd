import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../../../../../core/api.service';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-market-location-modal',
  templateUrl: './add-market-location-modal.component.html',
  styleUrls: ['./add-market-location-modal.component.scss']
})
export class AddMarketLocationModalComponent implements OnInit {

  @Input() marketId: any;
  @Output() locationAdded = new EventEmitter<any>();

  newLocationSubscription: Subscription;

  submitObject: any;
  submitting = false;
  error: any;

  // market_id_fk: `${marketId}`,
  // latitude: `${location.latitude}`,
  // longitude: `${location.longitude}`,
  // address: `${location.address}`,
  // city: `${location.city}`,
  // province: `${location.province}`,
  // description: `${location.description}`,
  // timeframe: `${location.timeframe}`,
  // location_name: `${location.locationName}`

  constructor(private activeModal: NgbActiveModal,
              private apiService: ApiService) { }

  ngOnInit() {
    console.log('marketId: ', this.marketId);
    this.submitObject = {
      marketId: this.marketId,
      location: {}
    };
  };

  addNewLocation(value) {
    this.submitObject.location = value;
    console.log('submitOjb: ', this.submitObject);
    this.newLocationSubscription = this.apiService.createMarketLocation(this.submitObject)
      .subscribe(
        result => {
          this.handleSubmitSuccess();
        },
        err => this.handleSubmitError(err)
      );
  };

  handleSubmitSuccess() {
    this.submitting = false;
    this.locationAdded.emit(true);
    this.activeModal.close();
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
    this.activeModal.close();
  };

  close() {
    this.activeModal.close();
  };

}
