import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { ProductService } from '../../../../../shared/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form: FormGroup; //this will hold our form data in a js object

  constructor(private formBuild: FormBuilder, private location: Location, private productService: ProductService) {
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
      'qtyAvailable': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.productAdded.emit(this.form.value);
  }

  onCancel() {
    this.location.back();
  }

}
