import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public show = false;
  public closeStyle = '';
  public menuValidation = false;

  constructor( public auth: AuthService, private router: Router ) { }

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

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
