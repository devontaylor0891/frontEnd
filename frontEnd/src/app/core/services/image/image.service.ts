// service should handle:

// getting a presigned url for aws upload
// upload images to s3 with presigned url
// cropping
// image optimization - not operational yet
// image upload error handling - not done
// communication to parent components of upload status, and success or failure

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

@Injectable()
export class ImageService {

  imageName: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageType: string;
  imageFile: any;
  presignedUrl: string;

  previewCroppedImage: any = '';
  _previewCroppedImage: BehaviorSubject<any>;

  imageUploading: boolean;
  _imageUploading: BehaviorSubject<boolean>;
  

  constructor(private apiService: ApiService) { 

    this.imageUploading = false;
    this._imageUploading = <BehaviorSubject<boolean>>new BehaviorSubject(this.imageUploading);
    this._previewCroppedImage = <BehaviorSubject<any>>new BehaviorSubject('');

  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imageFile = event.target.files[0];
    this.imageType = event.target.files[0].type;
    console.log('event files: ', event.target.files[0]);
    // const url = this.apiService.getPresignedUrl();
    // this.apiService.putFileToS3(event.target.files[0], url)
  };
  imageCropped(image, name) {
    this.imageName = name;
    console.log('name: ', this.imageName);
    this.previewCroppedImage = image;
    this._previewCroppedImage.next(this.previewCroppedImage);
    // const jpg = image.split(',')[1];
    // var bs = atob(jpg);
    // var buffer = new ArrayBuffer(bs.length);
    // var ba = new Uint8Array(buffer);
    // for (var i = 0; i < bs.length; i++) {
    //     ba[i] = bs.charCodeAt(i);
    // };
    // this.croppedImage = new Blob([ba], { type: "image/png" });
    // this.croppedImage = new File([this.croppedImage], this.imageName);
    // this.getPresignedUrl(name);
    // this.uploadToS3(this.presignedUrl);
  };
  imageLoaded() {
    // show cropper
  };
  loadImageFailed() {
    // show message
  };

  convertAndUpload() {
    this.imageUploading = true;
    this._imageUploading.next(this.imageUploading);
    const jpg = this.previewCroppedImage.split(',')[1];
    var bs = atob(jpg);
    var buffer = new ArrayBuffer(bs.length);
    var ba = new Uint8Array(buffer);
    for (var i = 0; i < bs.length; i++) {
        ba[i] = bs.charCodeAt(i);
    };
    this.croppedImage = new Blob([ba], { type: 'image/jpeg' });
    this.croppedImage = new File([this.croppedImage], this.imageName);
    this.getPresignedUrl(this.imageName);
    this.uploadToS3(this.presignedUrl);
  }

  getPresignedUrl(imageName) {
    this.apiService.getPresignedUrl(imageName)
      .subscribe(
        result => {
          this.presignedUrl = result;
        }
      );
  }

  uploadToS3(url: string) {
    this.apiService.putFileToS3(this.croppedImage, url)
      .subscribe(
        response => {
          console.log('file upload response: ', response);
          this.imageUploading = false;
          this._imageUploading.next(this.imageUploading);
        }
      );
  };

}
