//to be used if i need to attached in the constructor another dependenci
/*
import { Injectable } from '@angular/core';

@Injectable()
*/
export class CoursesService {  

  /*
  constructor(logServuce: LogService) {

  }
  */

  getCourses() {
    return ["course1","course2","course3","course4"];
  }; 
}
