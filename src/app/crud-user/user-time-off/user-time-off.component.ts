import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CrudUserService} from "../../core/services/crud-user.service";
import * as decode from 'jwt-decode';
import {Subscription} from "rxjs/Subscription";

// import {default as decode} from 'jwt-decode';
@Component({
  selector: 'app-user-time-off',
  templateUrl: './user-time-off.component.html',
  styleUrls: ['./user-time-off.component.scss']
})
export class UserTimeOffComponent implements OnInit, OnDestroy {
  public userDayOff: FormGroup;
  public userData;
  public today;
  public userId;
  public token = localStorage.getItem('token');
  public tokenPayload = <any>{};
  public userDataDayOff;
  public reason: string;
  public sub1: Subscription;
  public sub2: Subscription;

  constructor(public crudUserService: CrudUserService) {
  }

  ngOnInit() {
    this.tokenPayload = decode(this.token);
    this.userId = this.tokenPayload.subject;
    this.userDayOff = new FormGroup({
      type: new FormControl('dayOff'),
      period: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      proof: new FormControl(''),
    });

    this.sub1 = this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
      console.log(data);
      this.userData = data;
      this.userDataDayOff = data.dayOf;

    });
  }

  selectVacation() {
    this.reason = ' ';
  }

  selectDayOff() {
    this.reason = '';
  }

  onSubmit(user) {
    debugger
    this.sub2 = this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
      this.userDataDayOff = data.dayOf;
      this.userDataDayOff.push(
        {
          id: this.userId,
          log: this.userData.name,
          typeOff: user.type,
          publDate: new Date(),
          period: user.period,
          reason: user.reason,
          status: 'waiting'
        });
      const newData = {id: this.userId, dayOf: this.userDataDayOff};

      this.crudUserService.updaterUserOff(newData).subscribe(res => {
        console.log(res);
        // this.router.navigate(['crud-user/']);
      });
    });

  }

  // checkAgreed(user) {
  //   console.log(user);
  // }
  // checkRejected() {
  //   console.log(user);
  // }
  editTimeOff() {
    console.log();
  }

  // removeUser() {
  //   console.log(user);
  // }
  ngOnDestroy() {
    // this.sub1.unsubscribe();
    // this.sub2.unsubscribe();
  }
}
