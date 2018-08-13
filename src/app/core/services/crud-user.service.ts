import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CrudUserService {

  public url = {
    registration: 'http://localhost:3000/api/register',
    allUsers: 'http://localhost:3000/users/getAllUsers',
    currentUser: 'http://localhost:3000/users/user'
  };

  constructor(private http: HttpClient, private api: ApiService) { }

  // registrateUser(user) {
  //   this.api.post(this.url, user).subscribe( res => {
  //   });
  // }


  addNewUser (userData) {
    return this.http.post(this.url.registration, userData);
  }

  getUserList (): Observable<any> {
   return this.http.get(this.url.allUsers);
  }

  getCurrentUser (req): Observable<any> {
    return this.api.get(this.url.currentUser + '/' + req );
  }

  updaterUser(req) {
    return this.api.put(this.url.currentUser + '/' + req.id, req);
  }
}


