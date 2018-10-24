import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationNotificationSignUpModalComponent } from './location-notification-sign-up-modal.component';

describe('LocationNotificationSignUpModalComponent', () => {
  let component: LocationNotificationSignUpModalComponent;
  let fixture: ComponentFixture<LocationNotificationSignUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationNotificationSignUpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationNotificationSignUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
