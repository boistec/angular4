import { CoursesService } from './../../courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: '../../templates/courses/courses.template.html'
})
export class CoursesComponent {
    title = "List of courses"
    courses;
    isActive = true;
    email="borja@boistec.com.mx";

    getTitle() {
        return this.title;
    }

    onSave($event) {
        console.log($event);
        $event.stopPropagation();
    }
    onDivClick() {
        console.log("Div was Clicked");
    }
    onKeyUp() {
        
        console.log("Enter was pressed: " + this.email)
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();        
    }
}