import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {CrudUserService} from "../../core/services/crud-user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userId;
  public userDayOff: FormGroup;
  public today;


  public userData;
  public userDataDayOff;
  public reason: string;


  constructor(private route: ActivatedRoute,
              private router: Router,
              public crudUserService: CrudUserService) {
  }


  ngOnInit() {
    // this.tokenPayload = decode(this.token);
    // this.userId = this.tokenPayload.subject;
    this.userId = this.route.snapshot.paramMap.get('id');
    // this.userDayOff = new FormGroup({
    //   type: new FormControl('dayOff'),
    //   period: new FormControl('', Validators.required),
    //   reason: new FormControl('', Validators.required),
    //   proof: new FormControl(''),
    // });

    this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
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

  onSubmit() {
    console.log('submit');
    // this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
    //   this.userDataDayOff = data.dayOf;
    //   this.userDataDayOff.push(
    //     {
    //       id: this.userId,
    //       typeOff: user.type,
    //       publDate: new Date(),
    //       period: user.period,
    //       reason: user.reason,
    //       status: 'waiting'
    //     });
    //   const newData = {id: this.userId, dayOf: this.userDayOff};
    //
    //   this.crudUserService.updaterUserOff(newData).subscribe(res => {
    //     console.log(res);
    //     // this.router.navigate(['crud-user/']);
    //   });
    // });

  }

  checkAgreed(data, index) {
    const status = this.userDataDayOff[index].status = 'agreed';
    this.updateStatus(data, index, status);
  }

  checkRejected(data, index) {
    const status = this.userDataDayOff[index].status = 'rejected';
    this.updateStatus(data, index, status);
  }

  editTimeOff(data, index) {
    console.log(data);
  }

  removeUser(data, index) {
    console.log(data);
  }

  updateStatus(data, index, status) {
    this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
      this.userDataDayOff[index].status = status;
      const newData = {id: this.userId, dayOf: this.userDataDayOff};
      this.crudUserService.updaterUserOff(newData).subscribe(res => {
      });
    });
  }


  ngOnDestroy() {

  }
}
