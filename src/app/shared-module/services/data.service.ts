import { Injectable } from '@angular/core';
import PostsData from '../../../assets/data/posts.json';
import { EmptyPost } from '../../../assets/models/post';
import UsersData from '../../../assets/data/users.json';
import { EmptyUserCardData } from '../../../assets/models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _posts = PostsData;
  private _users = UsersData;
  public post = EmptyPost;
  public postUser = EmptyUserCardData;
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
