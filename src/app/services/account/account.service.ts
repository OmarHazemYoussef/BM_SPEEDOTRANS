import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'https://api.example.com/account'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch account details
  getAccountDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/details`);
  }

  // Update account details
  updateAccountDetails(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update`, data);
  }

  // Fetch balance
  getBalance(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/balance`);
  }

  // Fetch user profile (example)
  getUserProfile(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile/${userId}`);
  }
}
