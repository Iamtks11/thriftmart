import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared-module/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string='';
  password: string='';
  invalid: boolean = false;
  constructor(private _authService: AuthenticationService, private _routerService: Router) { 

  }

  ngOnInit(): void {
  }

  authenticate(){
    let user={
      id: 0,
      name: "",
      email: this.email.toLowerCase(),
      password: this.password
    }

    if(this._authService.authenticate(user))
    {
      console.log("Sign in successful");
      this._routerService.navigate(['']);
    }
    else{
      this.invalid=true;
    }
  }

}
