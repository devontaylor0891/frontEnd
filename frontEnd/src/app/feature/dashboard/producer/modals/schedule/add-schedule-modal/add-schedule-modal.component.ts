import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ScheduleModel } from '../../../../../../core/models/schedule.model';
import { ProducerModel } from '../../../../../../core/models/producer.model';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';

@Component({
  selector: 'app-add-schedule-modal',
  templateUrl: './add-schedule-modal.component.html',
  styleUrls: ['./add-schedule-modal.component.scss']
})
export class AddScheduleModalComponent implements OnInit {

  form: FormGroup; //this will hold our form data in a js object
  
  producer: ProducerModel;
  type: string;
  hasDelFee: boolean = false;
  hasFeeWaiver: boolean = false;

  constructor(private dashboardService: ProducerDashboardService,
                private formBuild: FormBuilder,
                private activeModal: NgbActiveModal) {

    this.form = formBuild.group({
      'id':[''],
      'producerId': [null],
      'productList': [''],
      'type': ['', Validators.required],
      'description': [''],
      'startDateTime': ['', Validators.required],
      'endDateTime': ['', Validators.required],
      'hasFee': [false, Validators.required],
      'fee': [0],
      'hasWaiver': [false, Validators.required],
      'feeWaiver': [0],
      'latitude': [null],
      'longitude': [null],
      'city': ['', Validators.required],
      'address': [''],
      'province': ['', Validators.required],
      'orderDeadline': ['', Validators.required],
      'orderList': ['']
    });

  }

  onSubmit() {
    console.log(this.form.value);
    this.form.value.id = this.generateRandomId(); // remove for production as API should do this for us
    this.form.value.producerId = this.producer.id;
    this.form.value.productList = this.producer.productList;
    console.log(this.form.value);
    // this.dashboardService.addNewSchedule(this.form.value);
    this.activeModal.close();
  }

  generateRandomId() {
    return Math.floor( Math.random() * 1000000 )
  }


  ngOnInit() {

    this.dashboardService.getProducer()
    .subscribe(
      result => {
        this.producer = result;
      }
    )
  }

}
