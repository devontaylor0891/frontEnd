import { Component, OnInit, OnChanges } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { UserModel } from '../../../../core/models/user.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { UserService } from '../../../../core/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit, OnChanges {

  producers: UserModel[] = [];
  consumers: UserModel[] = [];

  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] = 
  [
      {
        primaryKey: 'firstName',
        header: 'Name'
      },
      {
        primaryKey: 'email',
        header: 'Email'
      }, {
        primaryKey: 'registrationDate',
        header: 'Reg. Date'
      }
  ];

  constructor(private userService: UserService) { }

  ngOnChanges() {}

  ngOnInit() {

    this.userService.getUsers()
      .subscribe( //returns an array
        (users) => {
          const producerList = users.filter(user => user.userType === 'producer');
          this.producers = producerList;
          const consumerList = users.filter(user => user.userType === 'consumer');
          this.consumers = consumerList;
        }  
      )

  }

}
