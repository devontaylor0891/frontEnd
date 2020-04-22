import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLocationScheduleComponent } from './market-location-schedule.component';

describe('MarketLocationScheduleComponent', () => {
  let component: MarketLocationScheduleComponent;
  let fixture: ComponentFixture<MarketLocationScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketLocationScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLocationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
