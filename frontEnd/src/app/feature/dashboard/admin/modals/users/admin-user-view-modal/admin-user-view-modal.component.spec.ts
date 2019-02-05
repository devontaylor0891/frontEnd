import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserViewModalComponent } from './admin-user-view-modal.component';

describe('AdminUserViewModalComponent', () => {
  let component: AdminUserViewModalComponent;
  let fixture: ComponentFixture<AdminUserViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
