import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBankPageComponent } from './pay-bank-page.component';

describe('PayBankPageComponent', () => {
  let component: PayBankPageComponent;
  let fixture: ComponentFixture<PayBankPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayBankPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
