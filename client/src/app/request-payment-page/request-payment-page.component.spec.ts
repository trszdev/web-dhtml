import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPaymentPageComponent } from './request-payment-page.component';

describe('RequestPaymentPageComponent', () => {
  let component: RequestPaymentPageComponent;
  let fixture: ComponentFixture<RequestPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
