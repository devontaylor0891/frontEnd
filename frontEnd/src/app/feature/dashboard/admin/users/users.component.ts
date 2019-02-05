import { Component, OnInit, OnChanges } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { UserModel } from '../../../../core/models/user.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { DashboardService } from '../../dashboard.service';
import { DashboardComponent } from 'app/feature/dashboard/dashboard.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: []
})
export class UsersComponent implements OnInit, OnChanges {

  producers: UserModel[] = [];
  consumers: UserModel[] = [];

  recordType: string = 'user';

  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] = [
    {
      primaryKey: 'firstName',
      header: 'Name',
      format: 'null',
      sortable: true
    },
    {
      primaryKey: 'email',
      header: 'Email',
      format: 'null',
      sortable: true
    }, {
      primaryKey: 'registrationDate',
      header: 'Reg. Date',
      format: 'mediumDate',
      sortable: true
    }
  ];

  constructor(private dashboardService: DashboardService) { }

  ngOnChanges() {}

  ngOnInit() {

    this.dashboardService.getAllUsers()
      .subscribe( // returns an array
        (users) => {
          const producerList = users.filter(user => user.role === 'producer');
          this.producers = producerList;
          const consumerList = users.filter(user => user.role === 'consumer');
          this.consumers = consumerList;
        }
      );

    this.dashboardService.loadAllUsers();
  }

}
