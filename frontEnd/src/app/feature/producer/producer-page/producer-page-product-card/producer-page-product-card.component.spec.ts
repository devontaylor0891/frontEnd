import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerPageProductCardComponent } from './producer-page-product-card.component';

describe('ProducerPageProductCardComponent', () => {
  let component: ProducerPageProductCardComponent;
  let fixture: ComponentFixture<ProducerPageProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerPageProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerPageProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
