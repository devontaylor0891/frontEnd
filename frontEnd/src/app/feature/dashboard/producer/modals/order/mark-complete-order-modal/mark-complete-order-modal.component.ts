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

    products: any;

    markCompleteForm: FormGroup;

    orderUpdateSubscription: any;
    submitting: boolean = false;
    submitObject: any;
    error: boolean;

    constructor(private fb: FormBuilder,
                private router: Router,
                private api: ApiService,
                public activeModal: NgbActiveModal,
                private cartService: CartService) {

        // build the products array to use in the table
        this.products = [
            {
                id: null,
                name: '',
                quantity: null,
                value: null
            }
        ];

    };

    ngOnInit() {

        this.buildProductsArray();

        this.markCompleteForm = this.fb.group({
            incompleteReason: ['', [Validators.required] ]
        });

        // console.log('this record: ', this.record);
        this.buildSubmitObject();

    };

    buildProductsArray() {
        let newProduct = {
            id: null,
            name: '',
            quantity: null,
            value: null
          };
        let array = this.record.orderDetails.productQuantities;
        // for each product in the productQuantities array, get the id, qty and value
        for (let i = 0; i < array.length; i++) {
            newProduct.id = array[i].productId;
            newProduct.quantity = array[i].orderQuantity;
            newProduct.value = array[i].orderValue;
            newProduct.name = this.getProductName(newProduct.id);
            this.products.push(newProduct);
        }
        // use the id to get the name from the productList array
    };
  
    getProductName(id) {
        for (let j = 0; j < this.record.productList.length; j++) {
            if (this.record.productList[j].id === id) {
                return this.record.productList[j].name;
            }
        }
    };

    buildSubmitObject() {
        this.submitObject = this.record;
    };

    onMarkComplete() {
        this.submitting = true;
        this.submitObject.orderDetails.orderStatus = 'complete';
        this.submitObject.orderDetails.incompleteReason = '';
        // console.log('record id: ', this.record.id);
        // console.log('submit object: ', this.submitObject);
        this.orderUpdateSubscription = this.api.putOrder(this.record.id, this.submitObject)
            .subscribe(
                result => {
                    // console.log('order completed and emitted from modal: ', this.submitObject);
                    this.handleSubmitCompleteSuccess(this.submitObject);
                }, error => {
                    this.handleSubmitError(error);
                }
            );
    };

    onMarkIncomplete() {
        this.submitting = true;
        // console.log('this is the submitObject before:', this.submitObject);
        this.submitObject.orderDetails.orderStatus = 'incomplete';
        this.submitObject.orderDetails.incompleteReason = this.markCompleteForm.value.incompleteReason;
        // console.log('this is the submitObject after:', this.submitObject);
        this.orderUpdateSubscription = this.api.putOrder(this.record.id, this.submitObject)
            .subscribe(
                result => {
                    // console.log('order incompleted and emitted from modal: ', this.submitObject);
                    this.handleSubmitIncompleteSuccess(this.submitObject);
                }, error => {
                    this.handleSubmitError(error);
                }
            );
    };

    handleSubmitCompleteSuccess(result) {
        this.submitting = false;
        // console.log('put!: ', result);
        this.onOrderCompleted.emit(result);
        // close modal
        this.activeModal.close();
    };

    handleSubmitIncompleteSuccess(result) {
        this.submitting = false;
        // console.log('put!: ', result);
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
        if (this.orderUpdateSubscription) {
            this.orderUpdateSubscription.unsubscribe();
        };
    };

}