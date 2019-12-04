import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCalendarMobileComponent } from './checkout-calendar-mobile.component';

describe('CheckoutCalendarMobileComponent', () => {
  let component: CheckoutCalendarMobileComponent;
  let fixture: ComponentFixture<CheckoutCalendarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCalendarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCalendarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
