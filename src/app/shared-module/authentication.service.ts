import { Injectable } from '@angular/core';
import { User, EmptyUser, signupData } from './user';
import UsersData from './users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _auth: Boolean = false;
  private _user: User = EmptyUser;
  private _users = UsersData;

  printUsers(){
    console.log(this._users);
  }

  isAuthenticated(){
    return this._auth;
  }

  getName(){
    return this._user.name;
  }

  //pass only email and password
  authenticate(user:User)
  {
    let currentUser = this._users.find((obj)=>{
      return obj.email==user.email
    });

    if(currentUser && currentUser.password==user.password){
      this._auth = true;
      this._user = currentUser;
      return true;
    }
    return false;
  }

  logOut(){
    this._auth = false;
  }

  registerUser(data: signupData){
    console.log(data);
  }




  constructor() {  }
}
