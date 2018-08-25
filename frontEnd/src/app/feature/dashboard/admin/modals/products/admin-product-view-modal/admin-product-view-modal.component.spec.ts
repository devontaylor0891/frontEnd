import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductViewModalComponent } from './admin-product-view-modal.component';

describe('AdminProductViewModalComponent', () => {
  let component: AdminProductViewModalComponent;
  let fixture: ComponentFixture<AdminProductViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
