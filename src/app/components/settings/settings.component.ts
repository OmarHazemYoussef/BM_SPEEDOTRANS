import { Component } from '@angular/core';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MobileAppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {}
