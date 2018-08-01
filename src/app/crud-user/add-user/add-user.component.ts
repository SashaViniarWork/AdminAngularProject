import {Component, OnInit} from '@angular/core';
import {CrudUserService} from '../../core/services/crud-user.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  addForm: FormGroup;
  fullName: FormControl;
  email: FormControl;
  phoneNumber: FormControl;
  birthday: FormControl;
  role: FormControl;
  position: FormControl;
  password1: FormControl;
  password2: FormControl;
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  constructor(private crudUserService: CrudUserService) {
  }

  createFormControls() {
    this.fullName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.phoneNumber = new FormControl('', Validators.required);
    this.birthday = new FormControl('');
    this.role = new FormControl('', Validators.required);
    this.position = new FormControl('');
    this.password1 = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.password2 = new FormControl('', Validators.required );

  }

  createForm() {
    this.addForm = new FormGroup({

      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      birthday: this.birthday,
      role: this.role,
      position: this.position,
      password1: this.password1,
      password2: this.password2

    });
  }
  onSubmit() {

      console.log(this.addForm.value);

    }
  }


// addForm = new FormGroup({
  //   fullName: new FormControl(''),
  //   email: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   birthday: new FormControl(''),
  //   role: new FormControl(''),
  //   position: new FormControl(''),
  //   password1: new FormControl(''),
  //   password2: new FormControl('')
  //
  // });




