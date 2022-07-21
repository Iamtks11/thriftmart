import { Injectable } from '@angular/core';
import { User, EmptyUser, signupData } from '../../../assets/models/user';
import UsersData from '../../../assets/data/users.json';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _auth: Boolean;
  private _user: User;
  private _users = UsersData;

  constructor() {

    //fetching auth variable from local storage
    let lsAuth = localStorage.getItem('auth');
    if(lsAuth)
    {
      this._auth = Boolean(lsAuth);
    }
    else{
      this._auth = false;
    }

    //fetching users data from local storage
    let lsUser = localStorage.getItem('user');
    if(lsUser)
    {
      this._user = JSON.parse(lsUser);
    }
    else{
      this._user = EmptyUser;
    }


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

      //saving session to local storage
      localStorage.setItem('auth', String(this._auth));
      localStorage.setItem('user', JSON.stringify(this._user))
      return true;
    }
    return false;
  }

  logOut() {
    this._auth = false;
    localStorage.setItem('auth', String(this._auth));
  }

  registerUser(data: signupData) {
  }


}
