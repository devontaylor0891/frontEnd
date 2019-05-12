import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // myGroup: FormGroup;
  myGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required),
    recaptcha: new FormControl(null, Validators.required),
  });
  siteKey = "6Le1SnEUAAAAADu0R-EM9sg2Yt75HIpRAICj7hge";



  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {}

  ngOnInit() {
    // this.myGroup = this.formBuilder.group({
    //   name: this.formBuilder.control('Todd Motto', Validators.required),
    //   email: this.formBuilder.control('', Validators.required),
    //   message: this.formBuilder.control('England, UK', Validators.required),
    //   recaptcha: this.formBuilder.control('', Validators.required)
    // });
    // console.log('form value: ', this.myGroup.value);
  }

  handleSubmit() {
    // console.log('form: ', this.myGroup);
    let emailObject = {
      name: this.myGroup.value.name,
      email: this.myGroup.value.email,
      message: this.myGroup.value.message,
      captchaResponse: this.myGroup.value.recaptcha
    }
    this.apiService.verifyAndSendEmail(emailObject)
      .subscribe(
        // res => console.log('res: ', res),
        res => alert('Your email has been sent. Thanks!'),
        err => console.log('err: ', err)
      );
  }
  handleLoad() {
    // console.log('handle load called');
  }
  handleSuccess() {
    // console.log('success');
  }
  handleExpire() {
    // console.log('expired');
  };

}
