import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketLocationComponent } from './add-market-location.component';

describe('AddMarketLocationComponent', () => {
  let component: AddMarketLocationComponent;
  let fixture: ComponentFixture<AddMarketLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
