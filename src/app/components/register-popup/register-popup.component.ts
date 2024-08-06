import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-popup',
  templateUrl: './register-popup.component.html',
  styleUrls: ['/src/styles.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RegisterPopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter<void>();

  passwordError: string | null = null;
  confirmPasswordError: string | null = null;

  ngOnInit() {
    this.populateYearOptions();
  }

  onClosePopup() {
    this.closePopup.emit();
  }

  populateYearOptions() {
    const yearSelect = document.getElementById('year') as HTMLSelectElement;
    for (let year = new Date().getFullYear(); year >= 1970; year--) {
      const option = document.createElement('option');
      option.value = year.toString();
      option.text = year.toString();
      yearSelect.appendChild(option);
    }
  }

  togglePasswordVisibility(fieldId: string): void {
    const inputField = document.getElementById(fieldId) as HTMLInputElement;
    if (inputField) {
      inputField.type = inputField.type === 'password' ? 'text' : 'password';
    }
  }
  
  
  
  onSubmit() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    this.passwordError = null;
    this.confirmPasswordError = null;

    if (!this.isPasswordValid(password)) {
      this.passwordError = 'Password must be at least eight characters long and include upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).';
    } else if (password !== confirmPassword) {
      this.confirmPasswordError = 'Passwords do not match.';
    } else {
      // Form submission logic
    }

    const dayInput = document.getElementById('day') as HTMLInputElement;
    const day = parseInt(dayInput.value, 10);
    if (isNaN(day) || day < 1 || day > 31) {
      dayInput.setCustomValidity('Please enter a valid day.');
    } else {
      dayInput.setCustomValidity('');
    }
  }

  isPasswordValid(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"?$%^&]).{8,}$/;
    return passwordRegex.test(password);
  }
}
