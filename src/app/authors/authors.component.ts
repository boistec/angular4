import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = 'List of authors';
  colSpan;
  imageUrl = 'http://lorempixel.com/100/100/?1';
  authors;
  constructor(authorService: AuthorsService) { 
    this.authors = authorService.getAuthors();
    this.colSpan = 2;
  }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

}
