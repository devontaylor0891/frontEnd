import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarketScheduleModalComponent } from './delete-market-schedule-modal.component';

describe('DeleteMarketScheduleModalComponent', () => {
  let component: DeleteMarketScheduleModalComponent;
  let fixture: ComponentFixture<DeleteMarketScheduleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMarketScheduleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMarketScheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
