import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/index';



@Injectable()
export class CrudUserService {

  public url = {
    registration: 'http://localhost:3000/api/register',
    allUsers: 'http://localhost:3000/users/getAllUsers',
    currentUser: 'http://localhost:3000/users/user',
    updateUser: 'http://localhost:3000/users/update',
    updateUserOff: 'http://localhost:3000/users/update',

  };

  constructor(private http: HttpClient, private api: ApiService) {
  }

  // registrateUser(user) {
  //   this.api.post(this.url, user).subscribe( res => {
  //   });
  // }


  addNewUser(userData) {
    return this.http.post(this.url.registration, userData);
  }

  getUserList(): Observable<any> {
    return this.http.get(this.url.allUsers);
  }

  getCurrentUser(req): Observable<any> {
    return this.api.get(this.url.currentUser + '/' + req);
  }

  updaterUser(req) {
    return this.http.put(this.url.updateUser + '/' + req.id, req);
  }

  updaterUserOff(req) {
    return this.http.put(this.url.updateUserOff + '/' + req.id, req);
  }

  disactiveUser(req) {
    return this.http.put(this.url.updateUser + '/' + req.id, req);
  }
}


