import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductModalComponent } from './view-product-modal.component';

describe('ViewProductModalComponent', () => {
  let component: ViewProductModalComponent;
  let fixture: ComponentFixture<ViewProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
