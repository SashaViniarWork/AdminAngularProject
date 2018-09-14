import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-vacation',
  templateUrl: './user-vacation.component.html',
  styleUrls: ['./user-vacation.component.scss']
})
export class UserVacationComponent implements OnInit {
  public userId;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
