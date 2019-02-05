import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProducerViewModalComponent } from './admin-producer-view-modal.component';

describe('AdminProducerViewModalComponent', () => {
  let component: AdminProducerViewModalComponent;
  let fixture: ComponentFixture<AdminProducerViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProducerViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProducerViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
