import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCheckoutComponent } from './mobile-checkout.component';

describe('MobileCheckoutComponent', () => {
  let component: MobileCheckoutComponent;
  let fixture: ComponentFixture<MobileCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
