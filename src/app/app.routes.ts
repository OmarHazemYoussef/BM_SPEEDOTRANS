import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterPopupComponent } from './components/register-popup/register-popup.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NoProfileComponent } from './components/no-profile/no-profile.component';
import { MoneyTransferComponent } from './components/money-transfer1/money-transfer1.component';
import { MoneyTransferComponent2 } from './components/money-transfer2/money-transfer2.component';
import { MoneyTransferComponent3 } from './components/money-transfer3/money-transfer3.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPopupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'mobile', component: MobileAppComponent },
  { path: 'profile', component: MyAccountComponent },
  { path: 'components/payment-history', component: PaymentHistoryComponent },
  { path: 'components/settings', component: SettingsComponent },
  { path: 'components/changepassword', component: ChangePasswordComponent },
  { path: 'components/noprofile', component: NoProfileComponent },
  { path: 'src/app/components/money-transfer1/money-transfer1.component.ts', component: MoneyTransferComponent },
  { path: 'src/app/components/money-transfer2/money-transfer2.component', component: MoneyTransferComponent2 },
  { path: 'src/app/components/money-transfer3/money-transfer3.component', component: MoneyTransferComponent3 },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];