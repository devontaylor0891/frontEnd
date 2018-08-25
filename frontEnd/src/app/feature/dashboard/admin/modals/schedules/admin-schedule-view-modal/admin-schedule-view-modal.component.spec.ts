import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScheduleViewModalComponent } from './admin-schedule-view-modal.component';

describe('AdminScheduleViewModalComponent', () => {
  let component: AdminScheduleViewModalComponent;
  let fixture: ComponentFixture<AdminScheduleViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminScheduleViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScheduleViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
