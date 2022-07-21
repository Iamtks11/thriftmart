import { Injectable } from '@angular/core';
import PostsData from '../../../assets/data/posts.json';
import { EmptyPost, Post } from '../../../assets/models/post';
import UsersData from '../../../assets/data/users.json';
import { EmptyUserCardData, userCardData } from '../../../assets/models/user';
import { AuthenticationService } from './authentication.service';
import { Router, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _posts = PostsData;
  private _users = UsersData;
  public post = EmptyPost;
  public postUser = EmptyUserCardData;
  constructor(private _authService: AuthenticationService, private _router: Router) {
    let lsUsers = localStorage.getItem('users');
    if(lsUsers)
    {
      this._users = JSON.parse(lsUsers);
    }
    else{
      this._users = UsersData;
    }

    let lsPosts = localStorage.getItem('posts');

    if(lsPosts)
    {
      this._posts = JSON.parse(lsPosts);
    }
    else{
      this._posts = PostsData;
    }

  }

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

  addPost(title: string, description: string, image: string, price: number)
  {
    let postId = this._posts.length+1;
    let userId = this._authService.getUserId();
    let date = new Date();
    const post: Post = {
      id: postId,
      title: title,
      description: description,
      price: price,
      userId:userId,
      date: date.toISOString(),
      image: image
    }


    this._posts.push(post);
    localStorage.setItem('posts', JSON.stringify(this._posts));
    this._router.navigate(['/']);
  }
}
