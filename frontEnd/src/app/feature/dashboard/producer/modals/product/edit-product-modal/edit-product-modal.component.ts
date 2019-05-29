import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';
import { ImageService } from '../../../../../../core/services/image/image.service';
import { ProducerDashboardService } from '../../../../producer-dashboard.service';

import { ProductModel } from '../../../../../../core/models/product.model';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit, OnDestroy {

  @Input() record: ProductModel;
  @Output() onProductInStock = new EventEmitter<ProductModel>();
  @Output() onProductRenewed = new EventEmitter<ProductModel>();

  productIsOutOfStock: boolean = false;
  productForm: FormGroup;
  initialProduct: ProductModel;
  totalProductValue: number;
  formChangeSub: Subscription;
  submitProductSub: Subscription;
  submitting: boolean = false;
  submitObject = {
    userId: null,
    name: '',
    description: '',
    image: '',
    pricePerUnit: 0,
    unit: '',
    unitsPer: 0,
    category: '',
    subcategory: '',
    qtyAvailable: 0,
    qtyPending: 0,
    qtyAccepted: 0,
    qtyCompleted: 0,
    dateAdded: '',
    isObsolete: null,
    scheduleList: 0,
    producerId: null
  };

  error: boolean;

  imageName: any;
  imageUploading: boolean;
  imageUploadingSub: Subscription;
  producerIdSub: Subscription;
  randomNumber: any;

  // if changing existing image
  changingImage: boolean = false;

  // if adding image for the first time
  addingImage: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private api: ApiService,
              public activeModal: NgbActiveModal,
              private imageService: ImageService,
              private producerDashboardService: ProducerDashboardService) { }

  ngOnInit() {
    this.randomize();
    // console.log('original record: ', this.record);
    this.submitObject.image = this.record.image;
    this.imageName = this.record.image;
    this.initialProduct = this.setInitialProduct();
    if (this.record.qtyAvailable === 0) {
      this.productIsOutOfStock = true;
    };
    this.buildForm();
    this.calculateTotalValue();
    this.imageUploadingSub = this.imageService._imageUploading
      .subscribe(
        result => {
          this.imageUploading = result;
        }
      );
    this.producerIdSub = this.producerDashboardService.getProducer()
      .subscribe(
        result => {
          // console.log('producer result: ', result);
          this.submitObject.producerId =  result.producerId
        }
      );
    this.setSubmitObject();
    // console.log('original submitObject: ', this.submitObject);
  }

  randomize() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
  };

  private setInitialProduct() {
    return new ProductModel(
      this.record.id,
      this.record.name,
      this.record.description,
      this.record.image,
      this.record.pricePerUnit,
      this.record.unit,
      this.record.unitsPer,
      this.record.category,
      this.record.subcategory,
      this.record.producer,
      this.record.dateAdded,
      this.record.qtyAvailable,
      this.record.qtyPending,
      this.record.qtyAccepted,
      this.record.qtyCompleted,
      this.record.isObsolete,
      this.record.scheduleList
    );
  }

  private buildForm() {
    this.productForm = this.fb.group({
      name: [this.record.name, [Validators.required]],
      description: [this.record.description, [Validators.required]],
      image: [this.record.image],
      pricePerUnit: [this.record.pricePerUnit, [Validators.required]],
      unit: [this.record.unit, [Validators.required]],
      unitsPer: [this.record.unitsPer, [Validators.required]],
      category: [this.record.category, [Validators.required]],
      subcategory: [this.record.subcategory, [Validators.required]],
      qtyAvailable: [this.record.qtyAvailable, [Validators.required]]
    });
    
    // Subscribe to form value changes
    this.formChangeSub = this.productForm
      .valueChanges
      .subscribe(data => this.onValueChanged());
      
    // console.log('form: ', this.productForm);
  };
  
  private calculateTotalValue() {
    this.totalProductValue = this.productForm.value.pricePerUnit * this.productForm.value.unitsPer;
  }
  
  onValueChanged() {
    this.calculateTotalValue();
  };
  
  setSubmitObject() {
    // add the fields from the form
    this.submitObject.userId = this.record.producer.id;
    this.submitObject.name = this.productForm.value.name;
    this.submitObject.description = this.productForm.value.description;
    this.submitObject.image = this.imageName;
    this.submitObject.pricePerUnit = this.productForm.value.pricePerUnit;
    this.submitObject.unit = this.productForm.value.unit;
    this.submitObject.unitsPer = this.productForm.value.unitsPer;
    this.submitObject.category = this.productForm.value.category;
    this.submitObject.subcategory = this.productForm.value.subcategory;
    this.submitObject.qtyAvailable = this.productForm.value.qtyAvailable;
    // add non-changing items
    this.submitObject.dateAdded = this.record.dateAdded;
    this.submitObject.qtyPending = this.record.qtyPending;
    this.submitObject.qtyAccepted = this.record.qtyAccepted;
    this.submitObject.qtyCompleted = this.record.qtyCompleted;
    this.submitObject.isObsolete = this.record.isObsolete;
  }
  
  onSubmit() {
    this.submitting = true;
    this.setSubmitObject();
    // console.log('submitted object: ', this.submitObject);
    // console.log('submitted id: ', this.record.id);
    if (this.addingImage || this.changingImage) {
      this.imageService.convertAndUpload();
      this.imageUploadingSub = this.imageService._imageUploading
        .subscribe(
          result => {
            if (!result) {
              console.log('image upload result: ', result);
              this.submitProductSub = this.api.putProduct(this.record.id, this.submitObject)
              .subscribe(
                data => this.handleSubmitSuccess(data),
                err => this.handleSubmitError(err)
              );
            }
          }
        );
    } else {
      this.submitProductSub = this.api.putProduct(this.record.id, this.submitObject)
        .subscribe(
          data => this.handleSubmitSuccess(data),
          err => this.handleSubmitError(err)
        );
    }
    
  };

  onRenew() {
    this.submitting = true;
    this.setSubmitObject();
    this.submitObject.isObsolete = false;
    // console.log('submitted object: ', this.submitObject);
    // console.log('submitted id: ', this.record.id);
    this.submitProductSub = this.api.putProduct(this.record.id, this.submitObject)
      .subscribe(
        data => this.handleSubmitSuccess(data),
        err => this.handleSubmitError(err)
      );
  }
  
  handleSubmitSuccess(res) {
    // console.log('put product result: ', res);
    if (this.record.isObsolete) {
      this.onProductRenewed.emit(this.record);
    }
    if (this.productIsOutOfStock) {
      this.record.qtyAvailable = this.submitObject.qtyAvailable;
      this.onProductInStock.emit(this.record);
    }
    this.submitting = false;
    this.activeModal.close();
  };
  
  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  onChangeImage() {
    this.randomize();
    // this.imageName = this.record.image;
    // this.productForm.patchValue({image: ''});
    this.changingImage = true;
    console.log('form value: ', this.productForm.value);
    console.log('form: ', this.productForm);
    // add required validator to form
    this.productForm.get('image').setValidators([Validators.required]);
    this.productForm.get('image').updateValueAndValidity();
  };

  onAddImage() {
    this.imageName = this.record.producer.id + '/' + new Date().getTime();
    this.addingImage = true;
    console.log('form value: ', this.productForm.value);
    console.log('form: ', this.productForm);
    // add required validator to form
    this.productForm.get('image').setValidators([Validators.required]);
    this.productForm.get('image').updateValueAndValidity();
  };

  onCancelAddImage() {
    // remove image name
    // this.imageName = '';
    this.productForm.patchValue({image: ''});
    // hide the image cropper
    this.addingImage = false;
    // this.changingImage = false;
    console.log('form value: ', this.productForm.value);
    console.log('form: ', this.productForm);
    // remove the required validator
    this.productForm.get('image').clearValidators();
    this.productForm.get('image').updateValueAndValidity();
    // reset the imageService
    this.imageService.reset();
  };

  onCancelChangeImage() {
    this.changingImage = false;
    // remove the required validator
    this.productForm.get('image').clearValidators();
    this.productForm.get('image').updateValueAndValidity();
    // reset the imageService
    this.imageService.reset();
  }
  
  ngOnDestroy() {
    if (this.submitProductSub) {
      this.submitProductSub.unsubscribe();
    };
    if (this.producerIdSub) {
      this.producerIdSub.unsubscribe();
    };
    this.formChangeSub.unsubscribe();
    if (this.imageUploadingSub) {
      this.imageUploadingSub.unsubscribe();
    };
    this.imageService.reset();
  }

};