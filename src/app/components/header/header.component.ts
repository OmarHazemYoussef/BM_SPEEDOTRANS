import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  constructor(private router: Router) {}
  @Output() registerClicked = new EventEmitter<void>();

  onRegisterClick() {
    console.log('Register button clicked');
    this.registerClicked.emit();
  }
}

