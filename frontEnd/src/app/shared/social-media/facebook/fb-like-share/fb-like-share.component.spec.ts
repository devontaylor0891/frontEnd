import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLikeShareComponent } from './fb-like-share.component';

describe('FbLikeShareComponent', () => {
  let component: FbLikeShareComponent;
  let fixture: ComponentFixture<FbLikeShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbLikeShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLikeShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
