import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderViewModalComponent } from './admin-order-view-modal.component';

describe('AdminOrderViewModalComponent', () => {
  let component: AdminOrderViewModalComponent;
  let fixture: ComponentFixture<AdminOrderViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
