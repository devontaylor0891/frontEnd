import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMarketComponent } from './add-new-market.component';

describe('AddNewMarketComponent', () => {
  let component: AddNewMarketComponent;
  let fixture: ComponentFixture<AddNewMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
