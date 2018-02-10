import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProductComponent } from './checkout-product.component';

describe('CheckoutProductComponent', () => {
  let component: CheckoutProductComponent;
  let fixture: ComponentFixture<CheckoutProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
