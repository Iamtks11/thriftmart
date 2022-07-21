import { Injectable } from '@angular/core';
import PostsData from '../../../assets/data/posts.json';
import { EmptyPost } from '../../../assets/models/post';
import UsersData from '../../../assets/data/users.json';
import { EmptyUserCardData, userCardData } from '../../../assets/models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _posts = PostsData;
  private _users = UsersData;
  public post = EmptyPost;
  public postUser = EmptyUserCardData;
  constructor() {}

  getPosts() {
    return this._posts;
  }

  getUserCardById(id: number) {
    const user = this._users.find((obj) => {
      return obj.id == id;
    });
    if (!user) return EmptyUserCardData;
    const userCard: userCardData = {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
    return userCard;
  }

  getPostById(id: number) {
    const post = this._posts.find((obj) => {
      return obj.id == id;
    });
    if (!post) return EmptyPost;
    return post;
  }
}
