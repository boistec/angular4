import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.css']
})
export class NgDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = [1,2,3];
  viewMode = "list";
  jsoncourses = [
    {id:1, name:"course1"},
    {id:2, name:"course2"},
    {id:3, name:"course3"}
  ];

   changeViewMode($event) {    
    this.viewMode = $event.id;    
   }

   addItem() {
     let id = this.jsoncourses.length + 1;
     this.jsoncourses.push({id:id, name:"course"+id})
   }

   removeItem() {

     let id = this.jsoncourses.length - 1;
     console.log(id);
     if(id > 2) {
       this.jsoncourses.pop();       
     }
   }

   loadCourses() {
     this.jsoncourses =  [
      {id:1, name:"course1"},
      {id:2, name:"course2"},
      {id:3, name:"course3"}
     ];
   }

   trackCourse(index, course) {
     return course ? course.id : undefined;
   }
}
