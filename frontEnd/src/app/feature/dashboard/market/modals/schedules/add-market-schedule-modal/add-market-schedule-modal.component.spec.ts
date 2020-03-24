import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketScheduleModalComponent } from './add-market-schedule-modal.component';

describe('AddMarketScheduleModalComponent', () => {
  let component: AddMarketScheduleModalComponent;
  let fixture: ComponentFixture<AddMarketScheduleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketScheduleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketScheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
