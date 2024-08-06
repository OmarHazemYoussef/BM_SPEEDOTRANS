import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { MobileAppComponent } from '../../components/mobile-app/mobile-app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FavouritePopUpModule } from '../../components/favourite-pop-up/favourite-pop-up.module'; // Import the NgModule
import { TransferComComponent } from '../../components/transfer-Comp/transfer-Comp.component';
@Component({
  selector: 'MoneyTransferComponent',
  standalone: true,
  imports: [
    FooterComponent,
    MobileAppComponent,
    HeaderComponent,
    TransferComComponent,
    FavouritePopUpModule // Import the NgModule containing the component
  ],
  templateUrl: './money-transfer1.component.html',
})
export class MoneyTransferComponent {
  isFavouritePopupVisible = false; // Variable to control the visibility of the popup

  openFavouritePopup() {
    this.isFavouritePopupVisible = true;
  }

  closeFavouritePopup() {
    this.isFavouritePopupVisible = false;
  }
}
