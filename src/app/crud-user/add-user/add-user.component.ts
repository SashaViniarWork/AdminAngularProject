import {Component, OnInit} from '@angular/core';
import {CrudUserService} from '../../core/services/crud-user.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public addForm: FormGroup;


  ngOnInit() {

  }

  constructor(private crudUserService: CrudUserService, private fb: FormBuilder) {

    this.addForm = fb.group({
      fullName:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      birthday: [null, Validators.required],
      role: [null, Validators.required],
      position: [null, Validators.required],
      password1: [null, [Validators.required, Validators.minLength(8)]],
      password2: [null, [Validators.required, Validators.minLength(8)]]
    });

  }


  add() {
    let userInfo;
    if (this.addForm.valid) {
      if (this.addForm.value.password1 === this.addForm.value.password2) {
        userInfo = this.addForm.value;
        console.log(userInfo);
        this.addForm.reset();
        console.log(this.addForm.value);
      } else {
        return alert('Your passwords must be equal');
      }

    } else {
    }

  }
}





