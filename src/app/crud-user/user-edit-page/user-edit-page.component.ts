import {Component, OnInit} from '@angular/core';
import {CrudUserService} from '../../core/services/crud-user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {

  public userId;
  public userData;
  public userInfo: FormGroup;

  constructor(private crudUserServices: CrudUserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');

    this.userInfo = new FormGroup({
      name: new FormControl(['', Validators.required]),
      surname: new FormControl(['', Validators.required]),
      email: new FormControl(['', [Validators.required, Validators.email]]),
      phoneNumber: new FormControl(['', Validators.required]),
      birthday: new FormControl(['', Validators.required]),
      position: new FormControl(['', Validators.required]),
    });

    this.crudUserServices.getCurrentUser(this.userId).subscribe(user => {
      this.userData = user;
      this.userInfo.controls['name'].setValue(this.userData.name);
      this.userInfo.controls['surname'].setValue(this.userData.surname);
      this.userInfo.controls['email'].setValue(this.userData.email);
      this.userInfo.controls['phoneNumber'].setValue(this.userData.phone);
      this.userInfo.controls['birthday'].setValue(this.userData.birthday);
      this.userInfo.controls['position'].setValue(this.userData.position);
    });
  }


  onSubmit(user) {
    const req = {
      id: this.userId,
      name: user.name,
      surname: user.surname,
      birthday: user.birthday,
      position: user.position,
      phone: user.phoneNumber,
      email: user.email,
    }
    this.crudUserServices.updaterUser(req).subscribe(res => {
      this.router.navigate(['crud-user/']);
    });

  }
}
