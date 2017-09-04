import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  data: any[];

  constructor(
    private route: ActivatedRoute,
    private followers: FollowersService) { }

  ngOnInit() {

    // paramMap and queryParamMap are observables an could be separated if you ever need that
    Observable.combineLatest([
      this.route.paramMap, //to get the required parameters
      this.route.queryParamMap //to get the optionals parameters
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let id2 = combined[1].get('page');

      this.followers.getAll()
      .subscribe(response => this.data = response);      
    });
  }
}
