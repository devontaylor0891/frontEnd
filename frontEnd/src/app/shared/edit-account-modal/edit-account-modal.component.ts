// import { Component, OnInit, Input } from '@angular/core';

// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { UserModel } from '../../core/models/user.model';
// import { ProducerModel } from '../../core/models/producer.model';

// @Component({
//   selector: 'app-edit-account-modal',
//   templateUrl: './edit-account-modal.component.html',
//   styleUrls: ['./edit-account-modal.component.scss']
// })
// export class EditAccountModalComponent implements OnInit {

//   @Input() user: UserModel;
//   @Input() producer: ProducerModel;

//   userForm: FormGroup;
//   producerForm: FormGroup;

//   constructor(private fb: FormBuilder,
//               private activeModal: NgbActiveModal) { }

//   ngOnInit() {

//     if (this.producer) {
//       this.producerForm = this.fb.group({
//         firstName: [this.user.firstName, [Validators.required] ],
//         email: [this.user.email, [Validators.required] ],
//         name: [this.producer.name, [Validators.required]]
//       });
//     } else {
//       this.userForm = this.fb.group({
//         firstName: [this.user.firstName, [Validators.required] ],
//         email: [this.user.email, [Validators.required] ]
//       });
//     };

//   }

// }

import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../core/api.service';

import { UserModel } from '../../core/models/user.model';
import { ProducerModel } from '../../core/models/producer.model';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: './edit-account-modal.component.html',
  styleUrls: ['./edit-account-modal.component.scss']
})
export class EditAccountModalComponent implements OnInit {

  @Input() user: UserModel;
  @Input() producer: ProducerModel;

  userForm: FormGroup;
  producerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activeModal: NgbActiveModal,
              private apiService: ApiService) { }

  ngOnInit() {

    if (this.producer) {
      this.producerForm = this.fb.group({
        firstName: [this.user.firstName, [Validators.required] ],
        email: [this.user.email, [Validators.required] ],
        name: [this.producer.name, [Validators.required] ],
        location: [this.producer.location, [Validators.required] ],
        description: [this.producer.description],
        logoUrl: [this.producer.logoUrl]
      });
    } else {
      this.userForm = this.fb.group({
        firstName: [this.user.firstName, [Validators.required] ],
        email: [this.user.email, [Validators.required] ] 
      });
    };

  };

  onSubmit(form: any, userType) {
    console.log('form value: ', form.value);
    console.log('user id: ', this.user.id);
    this.apiService.patchUser(this.user.id, form.value.user) // patch the user basic data
      .subscribe(
        result => {
        if (userType === 'producer') { // the type is also producer, patch those value too
          this.apiService.patchProducer(this.user.id, form.value.producer)
            .subscribe(
              res => {
                console.log('producer profile updated: ', res);
              }
            );
        };
      });
  };

}