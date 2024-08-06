import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterPopupComponent } from './components/register-popup/register-popup.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Add RouterModule here
    HeaderComponent,
    HomeComponent,
    GettingStartedComponent,
    MobileAppComponent,
    FooterComponent,
    RegisterPopupComponent
  ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showRegisterPopup = false;

  toggleRegisterPopup() {
    console.log('Toggling register popup');
    this.showRegisterPopup = !this.showRegisterPopup;
  }

  onCloseRegisterPopup() {
    console.log('Closing register popup');
    this.showRegisterPopup = false;
  }
}
