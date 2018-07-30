import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CrudUserService {

  constructor(private http: HttpClient) { }

}
