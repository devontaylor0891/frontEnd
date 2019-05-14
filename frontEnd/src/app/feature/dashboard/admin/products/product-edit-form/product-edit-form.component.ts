import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.scss']
})
export class ProductEditFormComponent implements OnInit {

  @Input() product: any;
  @ViewChild('f') productEditForm: NgForm;

  constructor() { }

  //this is to give the accordian/dropdown access to the toggle feature to be able to close itself
  toggleEditForm(product: any) {
    product.showEditForm = !product.showEditForm;
  }

  onEditProduct(form: NgForm) {
    const value = form.value;
    // console.log(value);
    
  }

  ngOnInit() {
    
    this.productEditForm.setValue({
      name: this.product.name
    })
    
  }

}
