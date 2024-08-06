import { Component } from '@angular/core';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-no-profile',
  standalone: true,
  imports: [MobileAppComponent, FooterComponent, HeaderComponent],
  templateUrl: './no-profile.component.html',
})
export class NoProfileComponent {}
