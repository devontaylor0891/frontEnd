import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  @Input() id: number;
  @Input() user: UserModel;

  constructor() { }

  ngOnInit() {
  }

}
