import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPageComponent } from './fb-page.component';

describe('FbPageComponent', () => {
  let component: FbPageComponent;
  let fixture: ComponentFixture<FbPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
