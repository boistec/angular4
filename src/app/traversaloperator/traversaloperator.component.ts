import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traversaloperator',
  templateUrl: './traversaloperator.component.html',
  styleUrls: ['./traversaloperator.component.css']
})
export class TraversaloperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  task = {
    title: 'Review applications',
    assignee: {
      name: null
    }
  }

}
