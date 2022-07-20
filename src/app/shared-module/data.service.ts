import { Injectable } from '@angular/core';
import PostsData from './posts.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _posts = PostsData;
  constructor() { }

  getPosts(){
    console.log(this._posts);
    return this._posts;
  }
}
