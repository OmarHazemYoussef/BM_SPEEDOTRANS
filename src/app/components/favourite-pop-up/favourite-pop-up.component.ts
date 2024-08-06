import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-pop-up',
  templateUrl: './favourite-pop-up.component.html',
  styleUrls: ['./favourite-pop-up.component.css']
})
export class FavouritePopUpComponent {
  // Add a flag to control visibility if needed
  isPopupVisible: boolean = true;

  // Method to close the popup
  closePopup(): void {
    this.isPopupVisible = false;
    // Alternatively, if you're using a parent component or service to control visibility,
    // you might need to emit an event or call a method on a parent component/service
  }
}
