import { Component, OnInit } from '@angular/core';
import {FinCompanyService} from '../../core/services/fin-company.service';

@Component({
  selector: 'app-company-fin-operating',
  templateUrl: './company-fin-operating.component.html',
  styleUrls: ['./company-fin-operating.component.scss']
})
export class CompanyFinOperatingComponent implements OnInit {

  public operationList;

  constructor( private finCompanyService: FinCompanyService) { }

  ngOnInit() {
    this.finCompanyService.paymantsList().subscribe( res => {
      this.operationList = res;
      console.log(this.operationList);
    });
  }

}
