import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared-module/services/authentication.service';
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

    if(this._authService.authenticate(this.email.toLowerCase(), this.password))
    {
      console.log("Sign in successful");
      this._routerService.navigate(['']);
    }
    else{
      this.invalid=true;
    }
  }

}
