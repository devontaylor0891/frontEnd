import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPageScheduleComponent } from './market-page-schedule.component';

describe('MarketPageScheduleComponent', () => {
  let component: MarketPageScheduleComponent;
  let fixture: ComponentFixture<MarketPageScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketPageScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
