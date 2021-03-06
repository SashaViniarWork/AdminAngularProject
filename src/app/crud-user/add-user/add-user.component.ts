import {Component, OnInit} from '@angular/core';
import {CrudUserService} from '../../core/services/crud-user.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public addForm: FormGroup;


  ngOnInit() {

  }

  constructor(private crudUserService: CrudUserService, private fb: FormBuilder,
              private router: Router) {

    this.addForm = fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      birthday: [null, Validators.required],
      position: [null, Validators.required],
      password1: [null, [Validators.required, Validators.minLength(8)]],
      password2: [null, [Validators.required, Validators.minLength(8)]]
    });

  }


  add() {
    let userInfo;
    if (this.addForm.valid) {
      if (this.addForm.value.password1 === this.addForm.value.password2) {

        userInfo = {
          name: this.addForm.value.name,
          surname: this.addForm.value.surname,
          password: this.addForm.value.password1,
          birthday: this.addForm.value.birthday,
          position: this.addForm.value.position,
          phone: this.addForm.value.phoneNumber,
          email: this.addForm.value.email,
          isActive: true
        };
        this.crudUserService.addNewUser(userInfo).subscribe( req => {

          this.addForm.reset();
          this.router.navigate(['/crud-user/user-main']);
        });
        console.log(userInfo);

      } else {
        alert('Your passwords must be equal');
      }

    } else {
      alert('Please fill your fields');
    }

  }
}





