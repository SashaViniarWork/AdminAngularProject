import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fin-navigate',
  templateUrl: './fin-navigate.component.html',
  styleUrls: ['./fin-navigate.component.scss']
})
export class FinNavigateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  companyFin() {
    this.router.navigate(['fin-operation/company-operations']);
  }

  employersFin() {
    this.router.navigate(['fin-operation/empl-operations']);
  }

}
