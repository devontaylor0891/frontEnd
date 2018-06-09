import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imageName: string;
  @Input() category: string;
  @Input() subcategory: string;
  @Input() productId: string;
  @Input() producerId: string;

  constructor() { }

  ngOnInit() {
  }

}
