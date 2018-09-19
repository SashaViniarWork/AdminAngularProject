import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CrudPageService {

  public url = {
    addNewPage: 'http://localhost:3000/pages/addpage',
  };
  constructor(private http: HttpClient) { }

  addNewPage (pageData) {
    return this.http.post(this.url.addNewPage, pageData);
  }

}
