// import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
// import { Subscription } from 'rxjs/Subscription';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ProductModel } from '../../../../../../core/models/product.model';
// import { ProducerModel } from '../../../../../../core/models/producer.model';

// import { ProducerDashboardService } from '../../../../producer-dashboard.service';
// import { ApiService } from '../../../../../../core/api.service';
// import { ImageService } from '../../../../../../core/services/image/image.service';
// import { stringList } from 'aws-sdk/clients/datapipeline';

// @Component({
//   selector: 'app-add-product-modal',
//   templateUrl: './add-product-modal.component.html',
//   styleUrls: ['./add-product-modal.component.scss']
// })
// export class AddProductModalComponent implements OnInit, OnDestroy {

//   form: FormGroup; // this will hold our form data in a js object

//   producer: ProducerModel;

//   @Output() itemCreated = new EventEmitter<ProductModel>();

//   submitSub: Subscription;

//   newItemUploading: boolean = false;
//   imageName: any = '';
//   imageUploading: boolean;
//   addingImage: boolean = false;
//   imageUploadingSub: Subscription;
//   imagePreviewSub: Subscription;
//   imagePreviewExists = false;
//   submitting: boolean;
//   error: any;

//   constructor(private dashboardService: ProducerDashboardService,
//               private formBuild: FormBuilder,
//               public activeModal: NgbActiveModal,
//               private apiService: ApiService,
//               private imageService: ImageService) {

//     this.form = formBuild.group({
//     'name': ['', Validators.required],
//     'description': ['', Validators.required],
//     'image': [''],
//     'pricePerUnit': [null, Validators.required],
//     'unit': ['', Validators.required],
//     'unitsPer': [1, Validators.required],
//     'category': ['', Validators.required],
//     'subcategory': ['', Validators.required],
//     'dateAdded': [new Date().toISOString()],
//     'qtyAvailable': [null, Validators.required],
//     'qtyPending': [0],
//     'qtyAccepted': [0],
//     'qtyCompleted': [0],
//     'isObsolete': [false],
//     'producerId': [''],
//     'producer': [{}],
//     'scheduleList': ['']
//     })

//   }

//   ngOnInit() {

//     this.dashboardService.getProducer()
//       .subscribe(
//         result => {
//           this.producer = result;
//           // this.imageName = this.producer.id + '/' + new Date().getTime();
//           // this.form.patchValue({image: this.imageName});
//         }
//       );

//     this.imageUploadingSub = this.imageService._imageUploading
//       .subscribe(
//         result => {
//           this.imageUploading = result;
//         }
//       )

//     this.imagePreviewSub = this.imageService._previewCroppedImage
//         .subscribe(
//           result => {
//             if (result) {
//               this.imagePreviewExists = true;
//               // create the image name
//               // this.imageName = this.producer.id + '/' + new Date().getTime();
//               this.form.patchValue({image: this.imageName});
//             } else {
//               this.imagePreviewExists = false;
//             }
//           }
//         );

//   };

//   onSubmit() {
//     this.newItemUploading = true;
//     this.submitting = true;
//     // console.log(this.form.value);
//     this.form.value.producerId = this.producer.producerId;
//     this.form.value.producer.id = this.producer.id;
//     // console.log(this.form.value);
//     // if adding image, upload it first
//     if (this.addingImage) {
//       this.imageService.convertAndUpload();
//       this.imageService._imageUploading
//         .subscribe(
//           result => { // when returns false, upload is complete
//             console.log('image upload result: ', result);
//             if (!result) {
//               this.submitSub = this.apiService.postProduct(this.form.value)
//                 .subscribe(
//                   data => this.handleSubmitSuccess(this.form.value),
//                   err => this.handleSubmitError(err)
//                 );
//             }
//           }
//         )
//     } else {
//       // if not, just post the product
//       this.submitSub = this.apiService.postProduct(this.form.value)
//         .subscribe(
//           data => this.handleSubmitSuccess(this.form.value),
//           err => this.handleSubmitError(err)
//         );
//     }
//   };

//   handleSubmitSuccess(result) {
//     // console.log('new Product result: ', result);
//     this.itemCreated.emit(result);
//     // if (this.addingImage) { // upload image and then close the modal
//     //   this.imageService.convertAndUpload();
//     //   this.imageService._imageUploading
//     //     .subscribe(
//     //       result => {
//     //         console.log('image upload result: ', result);
//     //         if (!result) {
//     //           this.newItemUploading = false;
//     //           this.submitting = false;
//     //           this.activeModal.close();
//     //         }
//     //       }
//     //     )
//     // } else { // no image to upload
//       this.newItemUploading = false;
//       this.submitting = false;
//       this.activeModal.close();
//     // };
//   };

//   handleSubmitError(err) {
//     console.error(err);
//     this.submitting = false;
//     this.error = true;
//   };

//   onAddImage() {
//     // create the image name
//     this.imageName = this.producer.id + '/' + new Date().getTime();
//     // this.form.patchValue({image: this.imageName});
//     // show the image cropper
//     this.addingImage = true;
//     console.log('form value: ', this.form.value);
//     console.log('form: ', this.form);
//     // add required validator to form
//     this.form.get('image').setValidators([Validators.required]);
//     this.form.get('image').updateValueAndValidity();
//   };

//   onCancelAddImage() {
//     // remove image name
//     // this.imageName = '';
//     this.form.patchValue({image: ''});
//     // hide the image cropper
//     this.addingImage = false;
//     console.log('form value: ', this.form.value);
//     console.log('form: ', this.form);
//     // remove the required validator
//     this.form.get('image').clearValidators();
//     this.form.get('image').updateValueAndValidity();
//     // reset the imageService
//     this.imageService.reset();
//   }

//   ngOnDestroy() {
//     this.imageUploadingSub.unsubscribe();
//     this.imageService.reset();
//     this.imagePreviewSub.unsubscribe();
//   }

// }

import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../../../core/models/product.model';
import { ProducerModel } from '../../../../../../core/models/producer.model';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';
import { ApiService } from '../../../../../../core/api.service';
import { ImageService } from '../../../../../../core/services/image/image.service';
import { stringList } from 'aws-sdk/clients/datapipeline';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit, OnDestroy {

  form: FormGroup; // this will hold our form data in a js object

  producer: ProducerModel;
  producerSub: Subscription;

  @Output() itemCreated = new EventEmitter<ProductModel>();

  submitSub: Subscription;

  newItemUploading: boolean = false;
  imageName: any = '';
  imageUploading: boolean;
  addingImage: boolean = false;
  imageUploadingSub: Subscription;
  imagePreviewSub: Subscription;
  imagePreviewExists = false;
  submitting: boolean;
  error: any;

  constructor(private dashboardService: ProducerDashboardService,
              private formBuild: FormBuilder,
              public activeModal: NgbActiveModal,
              private apiService: ApiService,
              private imageService: ImageService) {

    this.form = formBuild.group({
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
    'producer': [{}],
    'scheduleList': ['']
    })

  }

  ngOnInit() {

    this.producerSub = this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          this.imageName = this.producer.id + '/' + new Date().getTime();
          // this.form.patchValue({image: this.imageName});
        }
      );

    this.imageUploadingSub = this.imageService._imageUploading
      .subscribe(
        result => {
          this.imageUploading = result;
        }
      )

    // this.imagePreviewSub = this.imageService._previewCroppedImage
    //     .subscribe(
    //       result => {
    //         if (result) {
    //           this.imagePreviewExists = true;
    //           // create the image name
    //           // this.imageName = this.producer.id + '/' + new Date().getTime();
    //           this.form.patchValue({image: this.imageName});
    //         } else {
    //           this.imagePreviewExists = false;
    //         }
    //       }
    //     );

  };

  onSubmit() {
    this.newItemUploading = true;
    this.submitting = true;
    // console.log(this.form.value);
    this.form.value.producerId = this.producer.producerId;
    this.form.value.producer.id = this.producer.id;
    // console.log(this.form.value);
    // if adding image, upload it first
    if (this.addingImage) {
      this.imageService.convertAndUpload();
      this.imageService._imageUploading
        .subscribe(
          result => { // when returns false, upload is complete
            console.log('image upload result: ', result);
            if (!result) {
              this.submitSub = this.apiService.postProduct(this.form.value)
                .subscribe(
                  data => this.handleSubmitSuccess(this.form.value),
                  err => this.handleSubmitError(err)
                );
            }
          }
        )
    } else {
      // if not, just post the product
      this.submitSub = this.apiService.postProduct(this.form.value)
        .subscribe(
          data => this.handleSubmitSuccess(this.form.value),
          err => this.handleSubmitError(err)
        );
    }
  };

  handleSubmitSuccess(result) {
    // console.log('new Product result: ', result);
    this.itemCreated.emit(result);
    // if (this.addingImage) { // upload image and then close the modal
    //   this.imageService.convertAndUpload();
    //   this.imageService._imageUploading
    //     .subscribe(
    //       result => {
    //         console.log('image upload result: ', result);
    //         if (!result) {
    //           this.newItemUploading = false;
    //           this.submitting = false;
    //           this.activeModal.close();
    //         }
    //       }
    //     )
    // } else { // no image to upload
      this.newItemUploading = false;
      this.submitting = false;
      this.activeModal.close();
    // };
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  // onAddImage() {
  //   // create the image name
  //   this.imageName = this.producer.id + '/' + new Date().getTime();
  //   // this.form.patchValue({image: this.imageName});
  //   // show the image cropper
  //   this.addingImage = true;
  //   console.log('form value: ', this.form.value);
  //   console.log('form: ', this.form);
  //   // add required validator to form
  //   this.form.get('image').setValidators([Validators.required]);
  //   this.form.get('image').updateValueAndValidity();
  // };

  onAddImage() {
    this.addingImage = true;
    this.form.get('image').setValidators([Validators.required]);
    this.form.get('image').updateValueAndValidity();
    this.imagePreviewSub = this.imageService._previewCroppedImage
      .subscribe(
        result => {
          console.log('result from img preview sub: ', result);
          if (result !== '') {
            this.imagePreviewExists = true;
            // create the image name
            // this.imageName = this.producer.id + '/' + new Date().getTime();
            this.form.patchValue({image: this.imageName});
            // this.form.get('image').setValidators([Validators.required]);
            this.form.get('image').updateValueAndValidity();
            console.log('form: ', this.form.value);
          // } else {
          //   this.imagePreviewExists = false;
          }
        }
      );
  };

  onCancelAddImage() {
    this.addingImage = false;
    // this.imageName = '';
    this.imageService.reset();
    this.form.patchValue({image: ''});
    this.form.get('image').clearValidators();
    this.form.get('image').updateValueAndValidity();
    this.imagePreviewExists = false;
    this.imagePreviewSub.unsubscribe();
    console.log('form: ', this.form.value);
  }

  // onCancelAddImage() {
  //   // remove image name
  //   // this.imageName = '';
  //   this.form.patchValue({image: ''});
  //   // hide the image cropper
  //   this.addingImage = false;
  //   console.log('form value: ', this.form.value);
  //   console.log('form: ', this.form);
  //   // remove the required validator
  //   this.form.get('image').clearValidators();
  //   this.form.get('image').updateValueAndValidity();
  //   // reset the imageService
  //   this.imageService.reset();
  // }

  ngOnDestroy() {
    if (this.imageUploadingSub) {
      this.imageUploadingSub.unsubscribe();
    };
    if (this.imagePreviewSub) {
      this.imagePreviewSub.unsubscribe();
    };
    if (this.producerSub) {
      this.producerSub.unsubscribe();
    };
    this.imageService.reset();
  }

}
