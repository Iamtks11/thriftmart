import { Component, OnInit } from '@angular/core';
import { signupData } from '../../shared-module/user';
import { AuthenticationService } from '../../shared-module/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  firstName: string='';
  lastName: string ='';
  email: string = '';
  gender: string='';
  password: string = '';
  confirmPassword: string = '';
  constructor(private _authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  print(){
    console.log(this.firstName, this.lastName, this.email, this.gender, this.password, this.confirmPassword)
  }


  //on submitting register a user
  onSubmit(){
    let data: signupData = {
      name: this.firstName + ' ' + this.lastName,
      email: this.email.toLowerCase(),
      gender: this.gender,
      password: this.password
    }

    this._authService.registerUser(data);
  }
}
