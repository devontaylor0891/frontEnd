import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerOrdersComponent } from './producer-orders.component';

describe('ProducerOrdersComponent', () => {
  let component: ProducerOrdersComponent;
  let fixture: ComponentFixture<ProducerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
