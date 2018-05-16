import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../../../core/models/product.model';
import { ProducerModel } from '../../../../../../core/models/producer.model';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';
import { ApiService } from '../../../../../../core/api.service';
import { stringList } from 'aws-sdk/clients/datapipeline';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

  form: FormGroup; // this will hold our form data in a js object

  producer: ProducerModel;

  @Output() itemCreated = new EventEmitter<ProductModel>();

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageName: any;

  imageFile: any;
  presignedUrl: string;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imageFile = event.target.files[0];
    this.getPresignedUrl(this.imageName);
    this.uploadToS3(this.presignedUrl);
    console.log('event: ', event);
    console.log('time: ', new Date().getTime());
    console.log('event files: ', event.target.files[0]);
    // const url = this.apiService.getPresignedUrl();
    // this.apiService.putFileToS3(event.target.files[0], url)
  };
  imageCropped(image: string) {
    this.croppedImage = image;
    console.log('image: ', image);
    console.log('imageName: ', this.imageName);
  };
  imageLoaded() {
    // show cropper
  };
  loadImageFailed() {
    // show message
  };

  constructor(private dashboardService: ProducerDashboardService,
              private formBuild: FormBuilder,
              private activeModal: NgbActiveModal,
              private apiService: ApiService) {

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
    console.log(this.form.value);
    this.form.value.producerId = this.producer.id;
    this.form.value.producer = this.producer;
    // console.log(this.form.value);
    // this.dashboardService.addNewProduct(this.form.value);
    this.apiService.postProduct(this.form.value)
      .subscribe(
        result => {
          this.itemCreated.emit(result);
          this.activeModal.close();
        }
      );
  }

  ngOnInit() {

    this.imageName = new Date().getTime();

    this.dashboardService.getProducer()
    .subscribe(
      result => {
        this.producer = result;
      }
    )
  };

  // postProductStandin() {
  //   this.presignedUrl = this.apiService.getPresignedUrl();
  //   console.log('presigned url: ', this.presignedUrl);
  //   // this.apiService.uploadFile(url);
  // };

  getPresignedUrl(imageName) {
    this.presignedUrl = this.apiService.getPresignedUrl(imageName);
  }

  uploadToS3(url: string) {
    this.apiService.putFileToS3(this.imageFile, url)
      .subscribe(
        response => {
          console.log('file upload response: ', response);
        }
      );
  };

}
