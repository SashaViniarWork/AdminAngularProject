import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public show = false;
  public closeStyle = '';
  public menuValidation = false;

  constructor() { }

  ngOnInit() {
    this.menuValid();
  }

  onBurgerClick() {
    this.show = !this.show;
    if ( this.show ) {
      this.closeStyle = 'navigate-mobile';
    } else {
      this.closeStyle = '';
    }
  }

  menuValid() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      this.menuValidation = true;
    } else {
      this.menuValidation = false;
    }

  }
}
