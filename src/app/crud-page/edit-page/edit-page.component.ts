import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public addCount: FormGroup;
  ArrayInputs: any;
  isValid = true;
  changeValue(valid: boolean) {
    this.isValid = valid;
  }

  constructor(private fb: FormBuilder) {
    this.addCount = fb.group({
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
    for (let i = 1; i < this.addCount.controls['count'].value; i++) {
      this.ArrayInputs.arr1.push('text' + (i + 1));
      this.addCount.addControl('text' + (i + 1), new FormControl(null, Validators.required));
      this.ArrayInputs.arr2.push('send' + (i + 1));
      this.addCount.addControl('send' + (i + 1), new FormControl(null, Validators.required));
    }}

  ngOnInit() {
  }

}
