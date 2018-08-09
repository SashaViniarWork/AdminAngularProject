import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CrudUserService {

  public url = {
    registration: 'http://localhost:3000/api/register'
  };

  constructor(private http: HttpClient, private api: ApiService) { }

  // registrateUser(user) {
  //   this.api.post(this.url, user).subscribe( res => {
  //   });
  // }


  addNewUser (userData) {
    return this.http.post(this.url.registration, userData);
  }

  getUserList (req): Observable<any> {
   return this.api.get(this.url);
  }

  getCurrentUser (req): Observable<any> {
    return this.api.get(this.url + '/' + req.id, );
  }

  updaterUser(req) {
    return this.api.put(this.url + '/' + req.id, req);
  }
}


