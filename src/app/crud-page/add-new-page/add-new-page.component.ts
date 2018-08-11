import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';



@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.scss']
})
export class AddNewPageComponent implements OnInit {

public addInCount: FormGroup;
ArrayInputs: any;

  constructor(private fb: FormBuilder) {
    this.addInCount = fb.group({
      count : [null, Validators.required],
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

  ngOnInit() {
  }

}
