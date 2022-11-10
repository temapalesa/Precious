import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  userForm: any =  FormGroup;
  isValidFormSubmitted = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({    
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  
    })
  }


  get f() { return this.userForm.controls; }

  onSubmit() {
    this.isValidFormSubmitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value))
}
}
