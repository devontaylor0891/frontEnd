import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete-market-location-modal',
  templateUrl: './delete-market-location-modal.component.html',
  styleUrls: ['./delete-market-location-modal.component.scss']
})
export class DeleteMarketLocationModalComponent implements OnInit {

  @Input() locationId: any;
  @Output() locationDeleted = new EventEmitter<boolean>();
  submitting = false;

  constructor(private apiService: ApiService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onConfirmDelete() {
    this.submitting = true;
    this.apiService.deleteMarketLocation(this.locationId)
      .subscribe(
        result => {
          console.log('location deleted: ', this.locationId);
          this.locationDeleted.emit(true);
          this.submitting = false;
          this.activeModal.close();
        }
      )
  };

  close() {
    this.activeModal.close();
  };

}
