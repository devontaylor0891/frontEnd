import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {

  @Input() record: any;

  constructor() { }

  ngOnInit() {
  }

}
