import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: [{productName: string, pricePerUnit: number, units: string, unitsPer: number, totalPrice: number, quantityAvailable: number, quantityPending: number, producerName: string}];

  constructor() {
    
    this.products = [
      {
        productName: 'Carrots',
        pricePerUnit: 4,
        units: 'lb',
        unitsPer: 1,
        totalPrice: 4,
        quantityAvailable: 15,
        quantityPending: 3,
        producerName: 'Bob\'s Garden'
      }, {
        productName: 'Beans',
        pricePerUnit: 4,
        units: 'lb',
        unitsPer: 1,
        totalPrice: 3,
        quantityAvailable: 22,
        quantityPending: 4,
        producerName: 'Frank\'s Garden'
      }  
    ]
    
  }

  ngOnInit() {
  }

}
