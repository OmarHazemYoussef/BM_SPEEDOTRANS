import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MobileAppComponent } from '../mobile-app/mobile-app.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    MobileAppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {}
