import { Injectable } from '@angular/core';
import { User, EmptyUser, signupData } from '../../../assets/models/user';
import UsersData from '../../../assets/data/users.json';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _auth: Boolean = false;
  private _user: User = EmptyUser;
  private _users = UsersData;

  constructor() {}

  printUsers() {
  }

  isAuthenticated() {
    return this._auth;
  }

  getName() {
    return this._user.name;
  }

  //pass only email and password
  authenticate(email:string, password: string) {
    let currentUser = this._users.find((obj) => {
      return obj.email == email;
    });

    if (currentUser && currentUser.password == password) {
      this._auth = true;
      this._user = currentUser;
      return true;
    }
    return false;
  }

  logOut() {
    this._auth = false;
  }

  registerUser(data: signupData) {
  }


}
