import { Component, OnInit } from '@angular/core';
import {FinCompanyService} from '../../core/services/fin-company.service';
import {FormGroup, FormControl, Validators, NgModel} from '@angular/forms';
import { FinCompanyPipe } from '../../core/pipes/fin-company.pipe';
import { DateFilterPipe } from '../../core/pipes/date-filter.pipe';

@Component({
  selector: 'app-company-fin-operating',
  templateUrl: './company-fin-operating.component.html',
  styleUrls: ['./company-fin-operating.component.scss']
})
export class CompanyFinOperatingComponent implements OnInit {

  public operationList;
  public addNewBlock = false;
  public newTransactForm: FormGroup;
  public term;
  public today = new Date();
  public startDate;
  public endDate = this.today;


  constructor( private finCompanyService: FinCompanyService) { }

  ngOnInit() {
    console.log(this.today);
    this.getTransactionList();

    this.newTransactForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      transdate: new FormControl('' , [Validators.required]),
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
      postdate: new Date(),
      transdate: tran.transdate,
      description: tran.description,
      amount: tran.amount,
      isActive: true
    };
    this.finCompanyService.addNewOperation(operation).subscribe(res => {
      this.addNewBlock = !this.addNewBlock;
      this.ngOnInit();
    });
    console.log(operation);
  }

  deactiveOperation( operation ) {
    operation.isActive = false;
    this.finCompanyService.deactivateOperation(operation).subscribe( res => {
      this.ngOnInit();
    });
  }


}
