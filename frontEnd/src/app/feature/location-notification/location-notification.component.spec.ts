import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationNotificationComponent } from './location-notification.component';

describe('LocationNotificationComponent', () => {
  let component: LocationNotificationComponent;
  let fixture: ComponentFixture<LocationNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
