import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketScheduleModalComponent } from './view-market-schedule-modal.component';

describe('ViewMarketScheduleModalComponent', () => {
  let component: ViewMarketScheduleModalComponent;
  let fixture: ComponentFixture<ViewMarketScheduleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMarketScheduleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarketScheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
