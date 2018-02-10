import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit, OnChanges {

  id: any;
  firstName: string;
  email: string;
  newValues: Object;

  constructor(private auth: AuthService,
              private apiService: ApiService,
              private userService: UserService,
              private router: Router) { }

  ngOnChanges() {}

  ngOnInit() { 

    this.auth.getParsedId()
      .subscribe(
        result => {
          this.id = result;
        }
      );

    this.userService.getFirstName()
      .subscribe(
        result => {
          this.firstName = result;
          console.log('firstName: ', this.firstName);
        }
      );
    
    this.userService.getEmail()
      .subscribe(
        result => {
          this.email = result;
        }
      );

  }
  
  onSubmit(form: any): void {
    console.log('form value: ', form);
    console.log(this.id);
    this.newValues = form;
    this.apiService.patchUser(this.id, this.newValues)
      .subscribe(
        result => {
          // on success, mark the profile as complete
          console.log('user updated: ', result);
          this.userService.profileIncomplete$.next(false);
          this.userService.getUserFromDb(this.id);
        }
      )
  }

}