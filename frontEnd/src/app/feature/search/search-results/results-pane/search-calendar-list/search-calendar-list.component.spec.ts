import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCalendarListComponent } from './search-calendar-list.component';

describe('SearchCalendarListComponent', () => {
  let component: SearchCalendarListComponent;
  let fixture: ComponentFixture<SearchCalendarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCalendarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCalendarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
