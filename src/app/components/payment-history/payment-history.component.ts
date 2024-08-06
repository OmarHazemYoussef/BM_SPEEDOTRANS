import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [
    FooterComponent,
    MobileAppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './payment-history.component.html'
})
export class PaymentHistoryComponent {}
