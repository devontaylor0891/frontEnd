import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.scss']
})
export class ProductViewDetailsComponent implements OnInit {

  @Input()
  product: any;

  constructor() { }

  //this is to give the accordian/dropdown access to the toggle feature to be able to close itself
  toggleView(product: any) {
    product.showView = !product.showView;
  }

  ngOnInit() {
  }

}
