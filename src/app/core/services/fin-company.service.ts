import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FinCompanyService {

  public urls = {
    getlist: 'http://localhost:3000/payments/getAllPayments',
    addnew: 'http://localhost:3000/payments/addpayment',
    disactive: 'http://localhost:3000/payments/update/:id'
  }

  constructor(private http: HttpClient ) { }

  paymantsList (): Observable <any> {
    return this.http.get(this.urls.getlist);
  }

  addNewOperation (operation) {
    return this.http.post(this.urls.addnew, operation);
  }

  deactivateOperation ( operation ) {
    return this.http.put(this.urls.disactive + '/' + operation._id, operation);
  }

}
