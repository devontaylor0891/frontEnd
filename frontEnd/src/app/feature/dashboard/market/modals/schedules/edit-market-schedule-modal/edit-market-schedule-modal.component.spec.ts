import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketScheduleModalComponent } from './edit-market-schedule-modal.component';

describe('EditMarketScheduleModalComponent', () => {
  let component: EditMarketScheduleModalComponent;
  let fixture: ComponentFixture<EditMarketScheduleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarketScheduleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketScheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
