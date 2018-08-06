import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  addNewPageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addNewPageForm = new FormGroup({
      'label': new FormControl(),
      'parentMenu' : new FormControl(),
      'url' : new FormControl(),
      'activePage' : new FormControl()
    });
  }

  onSubmit() {
    console.log('ky');
  }

}
