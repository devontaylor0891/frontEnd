import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ApiService } from '../../core/api.service';
import { ImageService } from '../../core/services/image/image.service';

@Component({
  selector: 'app-logo-cropper',
  templateUrl: './logo-cropper.component.html',
  styleUrls: ['./logo-cropper.component.scss']
})
export class LogoCropperComponent implements OnInit, OnChanges {

  @Input() name: string;

  imageChangedEvent: any = '';
  previewCroppedImage: any;

  constructor(private apiService: ApiService,
              private imageService: ImageService) { };

  ngOnChanges() {};

  fileChangeEvent(event: any): void {
    this.imageService.fileChangeEvent(event);
    this.imageChangedEvent = this.imageService.imageChangedEvent;
  };
  imageCropped(image) {
    this.imageService.imageCropped(image, this.name);
  };
  imageLoaded() {
    // show cropper
  };
  loadImageFailed() {
    // show message
  };

  ngOnInit() {

    this.imageService._previewCroppedImage
      .subscribe(
        result => {
          this.previewCroppedImage = result;
        }
      );

  }

}
