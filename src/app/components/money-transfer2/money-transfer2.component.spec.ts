import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferComponent2 } from './money-transfer2.component';

describe('MoneyTransferComponent2', () => {
  let component: MoneyTransferComponent2;
  let fixture: ComponentFixture<MoneyTransferComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyTransferComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});