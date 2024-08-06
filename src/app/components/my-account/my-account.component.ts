import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../../components/footer/footer.component';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AccountService } from '../../services/account/account.service';
import { MoneyTransferComponent } from '../../components/money-transfer1/money-transfer1.component';
import { TransferComComponent } from '../../components/transfer-Comp/transfer-Comp.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    HttpClientModule,
    FooterComponent,
    MobileAppComponent,
    HeaderComponent,
    SidebarComponent,
    RouterModule,
    MoneyTransferComponent,
    TransferComComponent,
  ],
  templateUrl: './my-account.component.html',
  providers: [AccountService], // Provide AccountService
})
export class MyAccountComponent {}
