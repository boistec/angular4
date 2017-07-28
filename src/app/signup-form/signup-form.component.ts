//import { AuthorsService } from './../authors.service';
import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ], 
    UsernameValidators.shouldBeUnique ),
    password: new FormControl('',  [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  login() {
    //Add this until you have a real async method. :)

    // let isValid = authService.login(this.form.value);
    // if (!isValid) {
    //   this.form.setErrors({
    //     invalidLogin: true
    //   });
    // }
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

}
