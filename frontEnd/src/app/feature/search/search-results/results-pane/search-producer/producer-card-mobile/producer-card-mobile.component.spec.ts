import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerCardMobileComponent } from './producer-card-mobile.component';

describe('ProducerCardMobileComponent', () => {
  let component: ProducerCardMobileComponent;
  let fixture: ComponentFixture<ProducerCardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerCardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
