import { Component } from '@angular/core';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'MoneyTransferComponent2',
  standalone: true,
  imports: [MobileAppComponent, FooterComponent, HeaderComponent],
  templateUrl: './money-transfer2.component.html',
  styleUrl: './money-transfer2.component.css',
})
export class MoneyTransferComponent2 {}