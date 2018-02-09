import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreConsumerComponent } from './learn-more-consumer.component';

describe('LearnMoreConsumerComponent', () => {
  let component: LearnMoreConsumerComponent;
  let fixture: ComponentFixture<LearnMoreConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
