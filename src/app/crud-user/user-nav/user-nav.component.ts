import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  public showSearch: false;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }


}
