import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerCardComponent } from './producer-card.component';

describe('ProducerCardComponent', () => {
  let component: ProducerCardComponent;
  let fixture: ComponentFixture<ProducerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
