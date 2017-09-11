import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower-profile',
  templateUrl: './follower-profile.component.html',
  styleUrls: ['./follower-profile.component.css']
})
export class FollowerProfileComponent implements OnInit {

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
        
    //the activatedRoute is an observable to consider an scenario when you are in the same page and have to move forward for example in a grid.
    this.routeActivated.paramMap    
    .subscribe(params => {
      let id = +params.get('id')
      console.log(id);
    });
    
    console.log("FollowerProfileComponent onInit");    
  }

  submit() {
    this.router.navigate(['/followers'] ,{
      queryParams: { page: 1, order: 'newest'}
    });
  }

}
