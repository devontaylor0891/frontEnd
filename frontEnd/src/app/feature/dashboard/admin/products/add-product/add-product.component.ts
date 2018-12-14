import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { ProducerService } from '../../../../../core/services/producer/producer.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form: FormGroup; // this will hold our form data in a js object

  constructor(private formBuild: FormBuilder,
              private location: Location,
              private producerService: ProducerService) {
    this.form = formBuild.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'image': [''],
      'pricePerUnit': [null, Validators.required],
      'unit': ['', Validators.required],
      'unitsPer': [1, Validators.required],
      'category': ['', Validators.required],
      'subcategory': ['', Validators.required],
      'producerName': ['', Validators.required],
      'dateAdded': ['September 1, 2017'],
      'qtyAvailable': [null, Validators.required],
      'qtyPending': [0],
      'qtyAccepted': [0],
      'qtyCompleted': [0],
      'isObsolete': ['false']
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.producerService.productAdded.emit(this.form.value);
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }

}
