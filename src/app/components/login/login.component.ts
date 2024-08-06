import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  providers: [AuthService],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.authenticate(credentials).subscribe(
      (response: any) => {
        const token = response.token;
        localStorage.setItem('authToken', token);
        console.log('Login successful:', response);
        // Handle successful login
      },
      (error: any) => {
        console.error('Error logging in:', error);
        // Handle login error
      }
    );
  }
}
