import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  state: string;

  constructor(private activatedRoute: ActivatedRoute,
				private router: Router) { }


  ngOnInit() {
	this.activatedRoute.params.subscribe((params: Params) => {
        let state = params['state'];
        console.log('state received: ', state);
      });
  }
  
  onSubmit(form: any): void {
	  
	  console.log('form value: ', form.value);
	  
	  // call the auth or api service to do a patch on user_metadate, adding the appropriate fields
	  
	  // once a response is received, navigate to the continue url
	  this.router.navigateByUrl('https://olf.auth0.com/continue?state = ' + this.state);
  }

}