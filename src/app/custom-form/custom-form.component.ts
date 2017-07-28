import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    {id:1, name:"Development"},
    {id:2, name:"Art"},
    {id:3, name:"Languages"}
  ];

  submit(course) {
    console.log(course);
  }
}
