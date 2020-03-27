import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketLocationModalComponent } from './add-market-location-modal.component';

describe('AddMarketLocationModalComponent', () => {
  let component: AddMarketLocationModalComponent;
  let fixture: ComponentFixture<AddMarketLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
