import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userId;

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
