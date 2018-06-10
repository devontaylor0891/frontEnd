import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Output() itemCreated = new EventEmitter<ProductModel>();

  newItemUploading: boolean = false;
  imageName: any = '';
  imageUploading: boolean;
  addingImage: boolean = false;
  imageUploadingSub: Subscription;
  submitting: boolean;
  error: any;

  constructor(private dashboardService: ProducerDashboardService,
              private formBuild: FormBuilder,
              private activeModal: NgbActiveModal,
              private apiService: ApiService,
              private imageService: ImageService) {

    this.form = formBuild.group({
    'id': [''],
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
    this.newItemUploading = true;
    console.log(this.form.value);
    this.form.value.producerId = this.producer.id;
    this.form.value.producer = this.producer;
    // console.log(this.form.value);
    // this.dashboardService.addNewProduct(this.form.value);
    this.apiService.postProduct(this.form.value)
      .subscribe(
        result => {
          this.itemCreated.emit(result);
          this.newItemUploading = false;
          if (!this.imageUploading) {
            this.activeModal.close();
          };
        }
      );
  };

  handleSubmitSuccess(res) {
    if (this.addingImage) {
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

  onAddImage() {
    this.imageName = this.producer.id + '/' + new Date().getTime();
    this.addingImage = true;
  };

  ngOnInit() {

    this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          this.imageName = this.producer.id + '/' + new Date().getTime();
          this.form.value.image = this.imageName;
        }
      );

    this.imageUploadingSub = this.imageService._imageUploading
      .subscribe(
        result => {
          this.imageUploading = result;
        }
      )

  };

  ngOnDestroy() {
    this.imageUploadingSub.unsubscribe();
  }

}
