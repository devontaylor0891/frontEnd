import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardMobileComponent } from './product-card-mobile.component';

describe('ProductCardMobileComponent', () => {
  let component: ProductCardMobileComponent;
  let fixture: ComponentFixture<ProductCardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
