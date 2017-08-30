import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  data: any[];

  constructor(private followers: FollowersService) { }

  ngOnInit() {
    this.followers.getAll()
    .subscribe(response => this.data = response);
  }

}
