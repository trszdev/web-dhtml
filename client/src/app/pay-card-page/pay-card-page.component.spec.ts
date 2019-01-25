import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCardPageComponent } from './pay-card-page.component';

describe('PayCardPageComponent', () => {
  let component: PayCardPageComponent;
  let fixture: ComponentFixture<PayCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
