import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  id: any;

  constructor(private auth: AuthService,
              private apiService: ApiService) { }


  ngOnInit() { }
  
  onSubmit(form: any): void {
    this.id = this.auth.userProfile.sub.slice(this.auth.userProfile.sub.indexOf('|') + 1);
    console.log('form value: ', form);
    console.log(this.id);
    // this.apiService.updateUserMetadata(this.id, this.auth.authResult.accessToken, { "user_metadata": { form }})
    //   .subscribe(
    //     result => {
    //       console.log('result: ', result);
    //       this.auth.handleAuth();
    //     }
    //   )
  }

}