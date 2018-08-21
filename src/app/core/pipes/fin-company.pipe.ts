import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finCompany'
})
export class FinCompanyPipe implements PipeTransform {

  transform(transactionList: any, term: any): any {
    if ( !term ) {
      return transactionList;
    } else {
      return transactionList.filter( tran => {
        const row: string = tran.description.toLowerCase() + ' ' + tran.amount.toLowerCase();
        tran = row.includes(term.toLowerCase());
        return tran;
      });
    }

  }

}
