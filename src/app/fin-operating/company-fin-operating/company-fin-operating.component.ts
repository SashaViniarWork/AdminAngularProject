import { Component, OnInit } from '@angular/core';
import {FinCompanyService} from '../../core/services/fin-company.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-company-fin-operating',
  templateUrl: './company-fin-operating.component.html',
  styleUrls: ['./company-fin-operating.component.scss']
})
export class CompanyFinOperatingComponent implements OnInit {

  public operationList;
  public addNewBlock = false;
  public newTransactForm: FormGroup;


  constructor( private finCompanyService: FinCompanyService) { }

  ngOnInit() {

    this.getTransactionList();

    this.newTransactForm = new FormGroup({
      transaction: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required])
    });
  }

  getTransactionList () {
    this.finCompanyService.paymantsList().subscribe( res => {
      this.operationList = res;
      console.log(this.operationList);
    });
  }


  hideAddNew () {
    this.addNewBlock = !this.addNewBlock;
  }

  onSubmin (tran) {
    const operation = {
      date: new Date(),
      transactions: tran.transaction,
      amount: tran.amount,
    }
    this.finCompanyService.addNewOperation(operation).subscribe(res => {
      this.getTransactionList();
      this.addNewBlock = !this.addNewBlock;
    });
    console.log(tran);

  }


}
