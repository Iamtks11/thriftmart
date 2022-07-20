import { Injectable } from '@angular/core';
import PostsData from './posts.json';
import { EmptyPost } from './post';
import UsersData from './users.json';
import { EmptyUserCardData } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _posts = PostsData;
  private _users = UsersData;
  public post = EmptyPost;
  public post_user = EmptyUserCardData;
  constructor() { }

  getPosts(){
    return this._posts;
  }

  getUserById(id: number)
  {
    return this._users.find((obj)=>{
      return obj.id==id
    });
  }


}
