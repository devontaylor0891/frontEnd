// import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ApiService } from '../../../../../../core/api.service';

// import { ProductModel } from '../../../../../../core/models/product.model';

// @Component({
//   selector: 'app-edit-product-modal',
//   templateUrl: './edit-product-modal.component.html',
//   styleUrls: ['./edit-product-modal.component.scss']
// })
// export class EditProductModalComponent implements OnInit {

//   @Input() record: ProductModel;
//   productForm: FormGroup;
//   initialProduct: ProductModel;
//   totalProductValue: number;
//   formChangeSub: Subscription;
//   submitProductSub: Subscription;
//   submitting: boolean = false;
//   submitObject: ProductModel;
//   error: boolean;

//   constructor(private fb: FormBuilder,
// 				private router: Router,
// 				private api: ApiService,
// 				private activeModal: NgbActiveModal) { }

//   ngOnInit() {
//     this.initialProduct = this.setInitialProduct();
// 	  this.buildForm();
// 	  this.calculateTotalValue();
//   }

//   private setInitialProduct() {
//     return new ProductModel(
//       this.record.id,
//       this.record.name,
//       this.record.description,
//       this.record.image,
//       this.record.pricePerUnit,
//       this.record.unit,
//       this.record.unitsPer,
//       this.record.category,
//       this.record.subcategory,
//       this.record.producer,
//       this.record.dateAdded,
//       this.record.qtyAvailable,
//       this.record.qtyPending,
//       this.record.qtyAccepted,
//       this.record.qtyCompleted,
//       this.record.isObsolete,
//       this.record.scheduleList
//     );
//   }

//   private buildForm() {
// 		this.productForm = this.fb.group({
// 			name: [this.record.name, [Validators.required]],
// 			description: [this.record.description, [Validators.required]],
// 			image: [this.record.image, [Validators.required]],
// 			pricePerUnit: [this.record.pricePerUnit, [Validators.required]],
// 			unit: [this.record.unit, [Validators.required]],
// 			unitsPer: [this.record.unitsPer, [Validators.required]],
// 			category: [this.record.category, [Validators.required]],
// 			subcategory: [this.record.subcategory, [Validators.required]],
// 			qtyAvailable: [this.record.qtyAvailable, [Validators.required]]
// 		});
		
// 		// Subscribe to form value changes
// 		this.formChangeSub = this.productForm
// 			.valueChanges
// 			.subscribe(data => this.onValueChanged());
//   };
  
//   private calculateTotalValue() {
// 	  this.totalProductValue = this.productForm.value.pricePerUnit * this.productForm.value.unitsPer;
//   }
  
//   onValueChanged() {
// 	  this.calculateTotalValue();
//   };
  
//   setSubmitObject() {
// 	  // make it equal to the original record
// 	  this.submitObject = this.record;
// 	  // then add the fields from the form
// 	  this.submitObject.name = this.productForm.value.name;
// 	  this.submitObject.description = this.productForm.value.description;
// 	  this.submitObject.image = this.productForm.value.image;
// 	  this.submitObject.pricePerUnit = this.productForm.value.pricePerUnit;
// 	  this.submitObject.unit = this.productForm.value.unit;
// 	  this.submitObject.unitsPer = this.productForm.value.unitsPer;
// 	  this.submitObject.category = this.productForm.value.category;
// 	  this.submitObject.subcategory = this.productForm.value.subcategory;
// 	  this.submitObject.qtyAvailable = this.productForm.value.qtyAvailable;
//   }
  
//   onSubmit() {
// 		this.submitting = true;
//     this.setSubmitObject();
//     console.log('submitted object: ', this.submitObject);
// 		this.submitProductSub = this.api
// 			.putProduct(this.record.id, this.submitObject)
// 			.subscribe(
// 			  data => this.handleSubmitSuccess(data),
// 			  err => this.handleSubmitError(err)
// 			);
//   };

//   onRenew() {
//     this.submitting = true;
//     this.setSubmitObject();
//     this.submitObject.isObsolete = false;
//     this.api.putProduct(this.record.id, this.submitObject)
//       .subscribe(
//         response => {
//           this.submitting = false;
//           this.activeModal.close();
//         }, err => {
//           this.handleSubmitError(err)
//         }
//       )
//   }
  
//   handleSubmitSuccess(res) {
// 		this.submitting = false;
// 		// close modal
// 		this.activeModal.close();
//   };
  
//   handleSubmitError(err) {
// 		console.error(err);
// 		this.submitting = false;
// 		this.error = true;
//   };
  
//   ngOnDestroy() {
//     if (this.submitProductSub) {
//       this.submitProductSub.unsubscribe();
//     }
//     this.formChangeSub.unsubscribe();
//   }

// }

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';
import { ImageService } from '../../../../../../core/services/image/image.service';

import { ProductModel } from '../../../../../../core/models/product.model';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit, OnDestroy {

  @Input() record: ProductModel;
  productForm: FormGroup;
  initialProduct: ProductModel;
  totalProductValue: number;
  formChangeSub: Subscription;
  submitProductSub: Subscription;
  submitting: boolean = false;
  submitObject = {
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
    isObsolete: null
  };

  error: boolean;

  imageName: any = '';
  imageUploading: boolean;
  imageUploadingSub: Subscription;

  // if changing existing image
  changingImage: boolean = false;

  // if adding image for the first time
  addingImage: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private api: ApiService,
              private activeModal: NgbActiveModal,
              private imageService: ImageService) { }

  ngOnInit() {
    this.initialProduct = this.setInitialProduct();
	  this.buildForm();
    this.calculateTotalValue();
    this.imageUploadingSub = this.imageService._imageUploading
      .subscribe(
        result => {
          this.imageUploading = result;
        }
      );
  }

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
      
    console.log('form: ', this.productForm);
  };
  
  private calculateTotalValue() {
	  this.totalProductValue = this.productForm.value.pricePerUnit * this.productForm.value.unitsPer;
  }
  
  onValueChanged() {
	  this.calculateTotalValue();
  };
  
  setSubmitObject() {
	  // add the fields from the form
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
    console.log('submitted object: ', this.submitObject);
		this.submitProductSub = this.api.putProduct(this.record.id, this.submitObject)
			.subscribe(
			  data => this.handleSubmitSuccess(data),
			  err => this.handleSubmitError(err)
			);
  };

  onRenew() {
    this.submitting = true;
    this.setSubmitObject();
    this.submitObject.isObsolete = false;
    this.api.putProduct(this.record.id, this.submitObject)
      .subscribe(
        response => {
          this.submitting = false;
          this.activeModal.close();
        }, err => {
          this.handleSubmitError(err)
        }
      )
  }
  
  handleSubmitSuccess(res) {
    if (this.addingImage || this.changingImage) {
      this.imageService.convertAndUpload();
      this.imageService._imageUploading
        .subscribe(
          result => {
            if (!result) {
              this.submitting = false;
              this.activeModal.close();
            }
          }
        )
    } else {
      this.submitting = false;
      this.activeModal.close();
    };
  };
  
  handleSubmitError(err) {
		console.error(err);
		this.submitting = false;
		this.error = true;
  };

  onChangeImage() {
    this.imageName = this.record.image;
    this.changingImage = true;
  };

  onAddImage() {
    this.imageName = this.record.producer.id + '/' + new Date().getTime();
    this.addingImage = true;
  };
  
  ngOnDestroy() {
    if (this.submitProductSub) {
      this.submitProductSub.unsubscribe();
    };
    this.formChangeSub.unsubscribe();
    if (this.imageUploadingSub) {
      this.imageUploadingSub.unsubscribe();
    };
    this.imageService.reset();
  }

};