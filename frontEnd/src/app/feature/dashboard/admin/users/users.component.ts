import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { UserAdmin } from '../../../../shared/models/dashboard-admin/users/user-admin.model';

import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  producers: UserAdmin[] = [];
  consumers: UserAdmin[] = [];

  constructor(private userService: UserService) { }

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
