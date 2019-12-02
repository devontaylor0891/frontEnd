import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionsMobileComponent } from './search-options-mobile.component';

describe('SearchOptionsMobileComponent', () => {
  let component: SearchOptionsMobileComponent;
  let fixture: ComponentFixture<SearchOptionsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOptionsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOptionsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
