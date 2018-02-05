import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ApiService } from '../../api.service';

import { UserModel } from '../../../core/models/user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  userType: string;
  user: UserModel;
  profileIncomplete: boolean;

  url = '../../../../assets/api/users.json';

  constructor(private http:Http,
              private apiService: ApiService) { }

  getUsers() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

  getUserFromDb(profile) {
    console.log('profile from subscription: ', profile);
    this.apiService.getUserById(profile.sub.slice(profile.sub.indexOf('|') + 1))
      .subscribe(
        result => {
          this.user = result;
          if (this.user.role && this.user.firstName) {
            this.userType = this.user.role;
            this.profileIncomplete = false;
          } else {
            this.profileIncomplete = true;
          }
          console.log('user from app comp: ', this.user);
        }
      );
  }



}
