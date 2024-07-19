import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviornment } from '../../../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);


  constructor() {}

  // https://dummyjson.com/auth/login
  Login(loginData: any) {
    return this.httpClient.post(
      `${enviornment.baseUrl}/auth/login`,
      loginData
    );
  }
}
