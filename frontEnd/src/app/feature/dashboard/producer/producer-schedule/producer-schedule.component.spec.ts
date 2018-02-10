import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerScheduleComponent } from './producer-schedule.component';

describe('ProducerScheduleComponent', () => {
  let component: ProducerScheduleComponent;
  let fixture: ComponentFixture<ProducerScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
