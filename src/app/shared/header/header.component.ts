import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public show = false;
  public closeStyle = '';

  constructor() { }

  ngOnInit() {
  }

  onBurgerClick() {
    this.show = !this.show;
    if ( this.show ) {
      this.closeStyle = 'navigate-mobile';
    } else {
      this.closeStyle = '';
    }
  }
}
