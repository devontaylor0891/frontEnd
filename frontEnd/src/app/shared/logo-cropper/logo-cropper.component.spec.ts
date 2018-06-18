import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCropperComponent } from './logo-cropper.component';

describe('LogoCropperComponent', () => {
  let component: LogoCropperComponent;
  let fixture: ComponentFixture<LogoCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
