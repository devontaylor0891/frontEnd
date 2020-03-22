import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketScheduleComponent } from './market-schedule.component';

describe('MarketScheduleComponent', () => {
  let component: MarketScheduleComponent;
  let fixture: ComponentFixture<MarketScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
