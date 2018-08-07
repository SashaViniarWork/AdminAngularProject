import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {
  public urls = {
    login: 'http://localhost:3000/api/login',
    registration: '',
  };

  constructor( private api: ApiService, private router: Router,
               private http: HttpClient) { }

  isAuthenticate() {
    const authData = localStorage.getItem('token') || {};
    if (authData) {
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(userData) {
    return this.http.post<any>(this.urls.login, userData);
  }

  registrate (userData) {
    return this.api.post(this.urls.registration, userData);
  }

  loguot() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
