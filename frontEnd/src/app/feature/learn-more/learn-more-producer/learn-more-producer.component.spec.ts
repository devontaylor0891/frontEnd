import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreProducerComponent } from './learn-more-producer.component';

describe('LearnMoreProducerComponent', () => {
  let component: LearnMoreProducerComponent;
  let fixture: ComponentFixture<LearnMoreProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
