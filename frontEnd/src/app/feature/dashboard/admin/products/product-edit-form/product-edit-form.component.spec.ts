import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditFormComponent } from './product-edit-form.component';

describe('ProductEditFormComponent', () => {
  let component: ProductEditFormComponent;
  let fixture: ComponentFixture<ProductEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
