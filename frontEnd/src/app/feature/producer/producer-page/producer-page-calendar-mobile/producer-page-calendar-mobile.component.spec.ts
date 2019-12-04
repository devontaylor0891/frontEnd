import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerPageCalendarMobileComponent } from './producer-page-calendar-mobile.component';

describe('ProducerPageCalendarMobileComponent', () => {
  let component: ProducerPageCalendarMobileComponent;
  let fixture: ComponentFixture<ProducerPageCalendarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerPageCalendarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerPageCalendarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
