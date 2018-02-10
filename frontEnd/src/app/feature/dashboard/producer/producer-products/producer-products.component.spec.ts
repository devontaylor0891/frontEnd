import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerProductsComponent } from './producer-products.component';

describe('ProducerProductsComponent', () => {
  let component: ProducerProductsComponent;
  let fixture: ComponentFixture<ProducerProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
