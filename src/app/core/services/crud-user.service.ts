import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class CrudUserService {

  constructor(private http: HttpClient) { }

}
