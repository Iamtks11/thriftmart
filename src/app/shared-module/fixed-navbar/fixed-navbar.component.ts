import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-fixed-navbar',
  templateUrl: './fixed-navbar.component.html',
  styleUrls: ['./fixed-navbar.component.css']
})
export class FixedNavbarComponent implements OnInit {

  constructor(private _authService: AuthenticationService) { }

  userName:string = this._authService.getName();

  ngOnInit(): void {
  }

  isAuthenticated(){
    return this._authService.isAuthenticated();
  }

  logOut(){
    this._authService.logOut();
  }

}
