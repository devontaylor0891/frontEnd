import { Component, OnInit, Input } from '@angular/core';

// import { ConsumerDashboardService } from './consumer-dashboard.service';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.scss'],
  providers: []
})
export class ConsumerDashboardComponent implements OnInit {

  @Input() id: number;
  @Input() user: UserModel;

  constructor() { }

  ngOnInit() {
  }

}
