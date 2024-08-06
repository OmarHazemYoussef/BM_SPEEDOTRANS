import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferComponent3 } from './money-transfer3.component';

describe('MoneyTransferComponent3', () => {
  let component: MoneyTransferComponent3;
  let fixture: ComponentFixture<MoneyTransferComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferComponent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyTransferComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});