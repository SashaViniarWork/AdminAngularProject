import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {CrudPageService} from '../../core/services/crud-page.service';


@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.scss']
})
export class AddNewPageComponent implements OnInit {

public formControlNewPage: FormGroup;
  public addInCount: FormGroup;
  ArrayInputs: any;
  isValid = true;
  public arr = [];
  public req;
  public checkSub = true;

  changeValue(valid: boolean) {
    this.isValid = valid;
  }

  constructor(private fb: FormBuilder, private crudpageservice: CrudPageService) {

    this.addInCount = fb.group({
      name: [null, Validators.required],
      radioBut: [null, Validators.required],
      level: [null, Validators.required],
      selectSubPages: [null, Validators.required],
      count: [null, Validators.required],
      text1: [null, Validators.required],
      send1: [null, Validators.required]
    });


    this.ArrayInputs = {
      'arr1': ['text1'],
      'arr2': ['send1']
    };
  }

  consoleValue() {
    this.ArrayInputs = {
      'arr1': ['text1'],
      'arr2': ['send1']
    };
    for (let i = 1; i < this.addInCount.controls['count'].value; i++) {
      this.ArrayInputs.arr1.push('text' + (i + 1));
      this.addInCount.addControl('text' + (i + 1), new FormControl(null, Validators.required));
      this.ArrayInputs.arr2.push('send' + (i + 1));
      this.addInCount.addControl('send' + (i + 1), new FormControl(null, Validators.required));
    }
  }


  onClick() {
    // this.arr.push(this.addInCount.controls['text'])
    for (let i = 1; i <= this.addInCount.controls['count'].value; i++) {
      this.req = {text: this.addInCount.controls['text' + i].value, position: this.addInCount.controls['send' + i].value};
      this.arr.push(this.req);
    }
    this.req = {
      name: this.addInCount.controls['name'].value,
      level: this.addInCount.controls['level'].value,
      subpage: this.addInCount.controls['selectSubPages'].value,
      pageContent: this.arr
    };
    this.crudpageservice.addNewPage(this.req).subscribe(req => {

    });
    console.log(this.req);
    this.arr = [];
    this.checkSub = false;

  }


  ngOnInit() {

  }

}

