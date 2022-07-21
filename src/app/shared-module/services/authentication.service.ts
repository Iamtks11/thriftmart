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
      this._auth = (lsAuth=="true");
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

  getUserId(){
    return this._user.id;
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
      localStorage.setItem('auth', this._auth.toString());
      localStorage.setItem('user', JSON.stringify(this._user))
      return true;
    }
    return false;
  }

  logOut() {
    this._auth = false;
    localStorage.setItem('auth', this._auth.toString());
  }

  registerUser(data: signupData) {
    let userId = this._users.length;
    const user: User = {
      id: userId,
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
    }
    this._users.push(user);
    localStorage.setItem('users', JSON.stringify('users'));
  }


}
