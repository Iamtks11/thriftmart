import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared-module/data.service';
import { Post } from '../../shared-module/post';
import { Router } from '@angular/router';
import { userCardData } from '../../shared-module/user';


@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }
  posts = this._dataService.getPosts();
  ngOnInit(): void {
  }

  sendToDetails(post: Post)
  {
    this._dataService.post = post;
    const user_id = post.user_id;
    const user = this._dataService.getUserById(user_id);
    if(user)
    {
      const post_user: userCardData = {
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
      this._dataService.post_user = post_user;
      this._router.navigate(['posts/details']);
    }
  }

}
