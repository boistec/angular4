import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isSelectedByNgClass = false;
  isSelectedByPropertyBinding = false;

  onClickPropBinding() {
    this.isSelectedByPropertyBinding = !this.isSelectedByPropertyBinding;
  }

  onClickNgClass() {
    this.isSelectedByNgClass = !this.isSelectedByNgClass;
  }
}
