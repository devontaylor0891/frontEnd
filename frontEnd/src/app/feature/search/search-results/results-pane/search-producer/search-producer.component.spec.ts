import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProducerComponent } from './search-producer.component';

describe('SearchProducerComponent', () => {
  let component: SearchProducerComponent;
  let fixture: ComponentFixture<SearchProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
