import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
              private activeModal: NgbActiveModal) { }

  ngOnInit() {

    if (this.producer) {
      this.producerForm = this.fb.group({
        firstName: [this.user.firstName, [Validators.required] ],
        email: [this.user.email, [Validators.required] ],
        name: [this.producer.name, [Validators.required]]
      });
    } else {
      this.userForm = this.fb.group({
        firstName: [this.user.firstName, [Validators.required] ],
        email: [this.user.email, [Validators.required] ]
      });
    };

  }

}
