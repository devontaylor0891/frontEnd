import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutWarningModalComponent } from './checkout-warning-modal.component';

describe('CheckoutWarningModalComponent', () => {
  let component: CheckoutWarningModalComponent;
  let fixture: ComponentFixture<CheckoutWarningModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutWarningModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutWarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
