import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ConfirmedValidators } from '../ConfirmedValidators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  unamePattern = "^[a-z0-9_-]{8,15}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  pwdPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  userForm: any =  FormGroup;
  isValidFormSubmitted = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  
    }), { 
      validator: ConfirmedValidators('password', 'cpassword')
    };
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
