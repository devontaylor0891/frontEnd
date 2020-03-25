import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-market-location-modal',
  templateUrl: './edit-market-location-modal.component.html',
  styleUrls: ['./edit-market-location-modal.component.scss']
})
export class EditMarketLocationModalComponent implements OnInit {

  @Input() location: any;

  @Output() locationEdited = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('location passed in: ', this.location);
  }

}
