import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketLocationModalComponent } from './edit-market-location-modal.component';

describe('EditMarketLocationModalComponent', () => {
  let component: EditMarketLocationModalComponent;
  let fixture: ComponentFixture<EditMarketLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarketLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
