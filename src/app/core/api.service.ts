import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  public readonly apiUrl = environment.apiUrl;
  public token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  get(url, params?) {
    const Params = new HttpParams();
    const token = this.token;

    const headers = new HttpHeaders().set('Authorization', 'JWT' + token);
    if (params) {
      Object.keys(params).map((key) => {
        Params.append(key, params[key]);
      });
    }

    const options = {
      headers: headers,
      params
    };
    return this.http.get(this.apiUrl + url, options);
  }

  // post(user, url) {
  // }

  post(url, data) {
    const payload = new FormData();
    const token = this.token;
    if (token !== null) {
      Object.keys(data).map((key) => {
        if (Array.isArray(data[key])) {
          data[key].forEach(item => {
            payload.append(key, item, item.name);
          });
        } else {
          payload.append(key, data[key]);
        }

      });
      const headers = new HttpHeaders().set('Authorization', 'JWT' + token);
      const options = {
        headers: headers,
      };
      return this.http.post(this.apiUrl + url, payload, options);
    } else {
      Object.keys(data).map((key) => {
        payload.append(key, data[key]);
      });
      return this.http.post(this.apiUrl + url, payload, {});
    }
  }

  put(url, params?) {
    const Params = new HttpParams();
    const token = this.token;

    const headers = new HttpHeaders().set('Authorization', 'JWT' + token);
    if (params) {
      Object.keys(params).map((key) => {
        Params.append(key, params[key]);
      });
    }

    const options = {
      headers: headers,
      params
    };
    return this.http.put(this.apiUrl + url, options);
  }


}
