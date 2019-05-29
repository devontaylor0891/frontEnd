import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ApiService } from '../../core/api.service';
import { ImageService } from '../../core/services/image/image.service';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit, OnChanges {

  @Input() name: string;

  imageChangedEvent: any = '';
  // croppedImage: any = '';
  // imageType: string;
  // imageFile: any;
  // presignedUrl: string;
  previewCroppedImage: any;
  imageLoadFailed = false;

  constructor(private apiService: ApiService,
              private imageService: ImageService) { };

  ngOnChanges() {};

  fileChangeEvent(event: any): void {
    this.imageService.fileChangeEvent(event);
    this.imageChangedEvent = this.imageService.imageChangedEvent;
    // this.imageChangedEvent = event;
    // this.imageFile = event.target.files[0];
    // this.imageType = event.target.files[0].type;
    // console.log('image type: ', this.imageType);
    // console.log('event files: ', event.target.files[0]);
    // const url = this.apiService.getPresignedUrl();
    // this.apiService.putFileToS3(event.target.files[0], url)
  };
  imageCropped(image) {
    this.imageService.imageCropped(image, this.name);
    // this.previewCroppedImage = image;
    // const jpg = image.split(',')[1];
    // var bs = atob(jpg);
    // var buffer = new ArrayBuffer(bs.length);
    // var ba = new Uint8Array(buffer);
    // for (var i = 0; i < bs.length; i++) {
    //     ba[i] = bs.charCodeAt(i);
    // };
    // this.croppedImage = new Blob([ba], { type: "image/png" });
    // this.croppedImage = new File([this.croppedImage], this.imageName);
    // this.getPresignedUrl(this.imageName);
    // this.uploadToS3(this.presignedUrl);
  };
  imageLoaded() {
    // show cropper
    this.imageLoadFailed = false;
  };
  loadImageFailed() {
    // show message
    this.imageLoadFailed = true;
  };

  // getPresignedUrl(imageName) {
  //   this.presignedUrl = this.apiService.getPresignedUrl(imageName);
  // }

  // uploadToS3(url: string) {
  //   this.apiService.putFileToS3(this.croppedImage, url)
  //     .subscribe(
  //       response => {
  //         console.log('file upload response: ', response);
  //       }
  //     );
  // };

  ngOnInit() {

    this.imageService._previewCroppedImage
      .subscribe(
        result => {
          this.previewCroppedImage = result;
        }
      );

  }

}
