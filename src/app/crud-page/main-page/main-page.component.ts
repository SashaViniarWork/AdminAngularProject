import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  addNewPageForm: FormGroup;

  constructor() { }

  ngOnInit() {

  }

}
