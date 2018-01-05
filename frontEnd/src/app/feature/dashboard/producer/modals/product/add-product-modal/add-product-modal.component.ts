import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductModel } from '../../../../../../core/models/product.model';
import { ProducerModel } from '../../../../../../core/models/producer.model';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

  form: FormGroup; //this will hold our form data in a js object

  producer: ProducerModel;

  constructor(private dashboardService: ProducerDashboardService,
              private formBuild: FormBuilder) {

    this.form = formBuild.group({
    'id':[''],
    'name': ['', Validators.required],
    'description': ['', Validators.required],
    'image': [''],
    'pricePerUnit': [null, Validators.required],
    'unit': ['', Validators.required],
    'unitsPer': [1, Validators.required],
    'category': ['', Validators.required],
    'subcategory': ['', Validators.required],
    'dateAdded': [new Date().toISOString()],
    'qtyAvailable': [null, Validators.required],
    'qtyPending': [0],
    'qtyAccepted': [0],
    'qtyCompleted': [0],
    'isObsolete': [false],
    'producerId': [''],
    'producer': [''],
    'scheduleList': ['']
    })

  }

  onSubmit() {
    console.log(this.form.value);
    this.form.value.id = this.generateRandomId(); // remove for production as API should do this for us
    this.form.value.producerId = this.producer.id;
    this.form.value.producer = this.producer;
    this.form.value.scheduleList = this.producer.scheduleList;
    console.log(this.form.value);
    this.dashboardService.addNewProduct(this.form.value);
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
