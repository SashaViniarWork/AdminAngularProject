import {CrudUserService} from '../../core/services/crud-user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userId;
  public userDayOff: FormGroup;
  public today = new Date();


  public userData;
  public userDataDayOff;
  public editData: number;
  public editIndex: number;
  public editId: string;
  public reason: string;
  public editTimeOff = false;
  public addTimeOff = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public crudUserService: CrudUserService) {
  }


  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
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


  checkAgreed(data, index: number) {
    const status = this.userDataDayOff[index].status = 'agreed';
    this.updateStatus(data, index, status);
  }

  checkRejected(data, index: number) {
    const status = this.userDataDayOff[index].status = 'rejected';
    this.updateStatus(data, index, status);
  }

  editTimeOffItem(data, index: number) {
    this.editTimeOff = true;
    this.editData = data;
    this.editIndex = +index;
    this.editId = this.userData._id;
    this.userDayOff = new FormGroup({
      type: new FormControl(data.typeOff),
      period: new FormControl([new Date(data.period[0]), new Date(data.period[1]), Validators.required]),
      reason: new FormControl(data.reason, Validators.required),
      proof: new FormControl(''),
    });

  }


  saveTimeOff() {
    this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
      this.userDataDayOff = data.dayOf;
      this.userDataDayOff[this.editIndex].typeOff = this.userDayOff.value.type;
      this.userDataDayOff[this.editIndex].publDate = this.today;
      this.userDataDayOff[this.editIndex].period = this.userDayOff.value.period;
      this.userDataDayOff[this.editIndex].reason = this.userDayOff.value.reason;
      this.userDataDayOff[this.editIndex].status = 'waiting';
      const newData = {id: this.userId, dayOf: this.userDataDayOff};
      this.crudUserService.updaterUserOff(newData).subscribe(res => {
        console.log(res);
        this.editTimeOff = false;
        // this.router.navigate(['crud-user/']);
      });
    });

  }

  removeUser(data, index) {

    if (index !== -1) {
      this.userDataDayOff.splice(index, 1);
    }
    console.log(this.userDataDayOff);
    const newData = {id: this.userId, dayOf: this.userDataDayOff};
    this.crudUserService.updaterUserOff(newData).subscribe(res => {
      console.log(res);
    });
  }

  updateStatus(data, index, status) {
    this.crudUserService.getCurrentUser(this.userId).subscribe(data => {
      console.log(data);
      this.userDataDayOff[index].status = status;
      const newData = {id: this.userId, dayOf: this.userDataDayOff};
      this.crudUserService.updaterUserOff(newData).subscribe(res => {
      });
    });
  }

  addTimeOffUSer(userId) {
    this.editId = userId;
    this.addTimeOff = true;
    this.userDayOff = new FormGroup({
      type: new FormControl('dayOff'),
      period: new FormControl([null, Validators.required]),
      reason: new FormControl(null, Validators.required),
      proof: new FormControl(''),
    });
  }

  addTimeOffUser() {
    this.userDataDayOff.push(
      {
        id: this.editId,
        log: 'Admin',
        typeOff: this.userDayOff.value.type,
        publDate: new Date(),
        period: this.userDayOff.value.period,
        reason: this.userDayOff.value.reason,
        status: 'waiting'
      });
    const newData = {id: this.userId, dayOf: this.userDataDayOff};
    this.crudUserService.updaterUserOff(newData).subscribe(res => {
      console.log(res);
    });
  }
}
