import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  form;
  constructor(fb: FormBuilder) {     
    this.form = fb.group({
        oldpwd: fb.control('',[
          Validators.required          
        ]),
        newpwd: fb.control('',[
          Validators.required,
          Validators.minLength(8)
        ]),
        repeatpwd: fb.control('',[
          Validators.required,
          Validators.minLength(8)
        ])
    })
  }

  ngOnInit() {
  }

  get oldpwd() {
    return this.form.get('oldpwd');
  }

  get newpwd() {
    return this.form.get('newpwd');
  }

  get repeatpwd() {
    return this.form.get('repeatpwd');
  }

}
