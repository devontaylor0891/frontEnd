import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerPageProductCardMobileComponent } from './producer-page-product-card-mobile.component';

describe('ProducerPageProductCardMobileComponent', () => {
  let component: ProducerPageProductCardMobileComponent;
  let fixture: ComponentFixture<ProducerPageProductCardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerPageProductCardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerPageProductCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
