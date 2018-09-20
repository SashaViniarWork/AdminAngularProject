import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  public showSearch: false;
  @Output() onSearchType = new EventEmitter<boolean>();

  search(serchValue) {
    this.onSearchType.emit(serchValue);
  }

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }


}
