import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  url = '../../../../assets/api/users.json';

  constructor(private http:Http) { }

  getUsers() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

}
