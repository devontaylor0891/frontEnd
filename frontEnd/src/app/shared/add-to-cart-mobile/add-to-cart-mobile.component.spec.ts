import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartMobileComponent } from './add-to-cart-mobile.component';

describe('AddToCartMobileComponent', () => {
  let component: AddToCartMobileComponent;
  let fixture: ComponentFixture<AddToCartMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCartMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
