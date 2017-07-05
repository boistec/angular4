import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactMethods = [
    { id: 1, name: 'email1' },
    { id: 2, name: 'email2' },
    { id: 3, name: 'email3' }
  ];

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);        
  }
}
