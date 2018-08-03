import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  public urls = {
    login: 'http://localhost:3000/login',
    registration: '',
  };

  constructor( private api: ApiService, private router: Router) { }

  isAuthenticate() {
    const authData = JSON.parse(localStorage.getItem('auth')) || {};
    if (authData.token && authData.expire) {
      const currentDate = new Date();
      return currentDate <= authData.expire;
    }
    return false;
  }

  login(userData) {
    return this.api.post(this.urls.login, userData);
  }

  registrate (userData) {
    return this.api.post(this.urls.registration, userData)
  }

  loguot() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
