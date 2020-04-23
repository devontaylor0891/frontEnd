import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCompactComponent } from './product-card-compact.component';

describe('ProductCardCompactComponent', () => {
  let component: ProductCardCompactComponent;
  let fixture: ComponentFixture<ProductCardCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
