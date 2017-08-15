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
   
//todo: add more products, import model, hook up these products to the loop in the template 
    // this.products = [
    //   {
    //     id: 1,
    //     name: 'Carrots',
    //     description: 'Here is a nice little description of these carrots.',
    //     price: 4,
    //     unit: 'lb',
    //     unitsPer: 1,
    //     totalPrice: 4,
    //     producerName: 'Garden Farms',
    //     imagePath: 'url',
    //     quantityAvailable: 34,
    //     quantityPending: 4,
    //     quantitySold: 786,
    //     status: 'active'
    //   }
    // ]

    
  }

  ngOnInit() {
  }

}
