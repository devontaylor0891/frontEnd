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

  ngOnInit() {
  }

}
