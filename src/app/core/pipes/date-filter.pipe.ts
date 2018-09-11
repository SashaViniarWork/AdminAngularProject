import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(finList: any, startDate: any, endDate: any): any {
    if ( finList ) {
      if (!startDate && !endDate) {
        return finList;
      }
      if (startDate && !endDate) {
        return finList.filter(oper => {
          let res: any;
          if (new Date(oper.transdate) >= new Date(startDate)) {
            res = oper;
          }
          return res;
        });
      }
      if (!startDate) {
        return finList.filter(oper => {
          let res: any;
          if (new Date(oper.transdate) <= new Date(endDate)) {
            res = oper;
          }
          return res;
        });
      }
      if (startDate) {
        return finList.filter(oper => {
          let res: any;
          if (new Date(oper.transdate) >= new Date(startDate) &&
            new Date(oper.transdate) <= new Date(endDate)) {
            res = oper;
          }
          return res;
        });
      }
    }
  }
}
