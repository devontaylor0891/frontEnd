import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUrlResolverComponent } from './custom-url-resolver.component';

describe('CustomUrlResolverComponent', () => {
  let component: CustomUrlResolverComponent;
  let fixture: ComponentFixture<CustomUrlResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomUrlResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUrlResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
