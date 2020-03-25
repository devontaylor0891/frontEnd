import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarketLocationModalComponent } from './delete-market-location-modal.component';

describe('DeleteMarketLocationModalComponent', () => {
  let component: DeleteMarketLocationModalComponent;
  let fixture: ComponentFixture<DeleteMarketLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMarketLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMarketLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
