import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-view-details',
  templateUrl: './order-view-details.component.html',
  styleUrls: ['./order-view-details.component.scss']
})
export class OrderViewDetailsComponent implements OnInit {

  @Input()
  order: any;

  constructor() { }

  //this is to give the accordian/dropdown access to the toggle feature to be able to close itself
  toggleView(order: any) {
    order.showView = !order.showView;
  }

  ngOnInit() {
  }

}
