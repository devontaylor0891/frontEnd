import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';
import { CartService } from '../../../../../../core/services/cart-service/cart.service';

import { OrderModel } from '../../../../../../core/models/order.model';

@Component({
  selector: 'app-mark-complete-order-modal',
  templateUrl: './mark-complete-order-modal.component.html',
  styleUrls: ['./mark-complete-order-modal.component.scss']
})
export class MarkCompleteOrderModalComponent implements OnInit, OnDestroy {

    @Input() record: OrderModel;
    @Output() onOrderCompleted = new EventEmitter<OrderModel>();
    @Output() onOrderIncompleted = new EventEmitter<OrderModel>();

    markCompleteForm: FormGroup;

    orderUpdateSubscription: any;
    submitting: boolean = false;
    submitObject: {
        'orderDetails': {
            'orderStatus': string,
            'incompleteReason': string
        }
    };
    error: boolean;

    constructor(private fb: FormBuilder,
                private router: Router,
                private api: ApiService,
                private activeModal: NgbActiveModal,
                private cartService: CartService) {

        this.submitObject = { orderDetails : { orderStatus: '', incompleteReason: '' } };

    };

    ngOnInit() {

        this.markCompleteForm = this.fb.group({
            incompleteReason: ['', [Validators.required] ]
        });

    }

    onMarkComplete() {
        this.submitting = true;
        this.submitObject.orderDetails.orderStatus = 'complete';
        this.submitObject.orderDetails.incompleteReason = '';
        this.orderUpdateSubscription = this.api.patchOrder(this.record.id, this.submitObject)
            .subscribe(
                result => {
                    console.log('order completed and emitted from modal: ', result);
                    this.handleSubmitCompleteSuccess(result);
                }, error => {
                    this.handleSubmitError(error);
                }
            );
    };

    onMarkIncomplete() {
        this.submitting = true;
        this.submitObject.orderDetails.orderStatus = 'incomplete';
        this.submitObject.orderDetails.incompleteReason = this.markCompleteForm.value.incompleteReason;
        this.orderUpdateSubscription = this.api.patchOrder(this.record.id, this.submitObject)
            .subscribe(
                result => {
                    console.log('order incompleted and emitted from modal: ', result);
                    this.handleSubmitIncompleteSuccess(result);
                }, error => {
                    this.handleSubmitError(error);
                }
            );
    };

    handleSubmitCompleteSuccess(result) {
        this.submitting = false;
        console.log('put!: ', result);
        this.onOrderCompleted.emit(result);
        // close modal
        this.activeModal.close();
    };

    handleSubmitIncompleteSuccess(result) {
        this.submitting = false;
        console.log('put!: ', result);
        this.onOrderIncompleted.emit(result);
        // close modal
        this.activeModal.close();
    };

    handleSubmitError(error) {
        console.error(error);
        this.submitting = false;
        this.error = true;
    };

    ngOnDestroy() {
        this.orderUpdateSubscription.unsubscribe();
    }

}