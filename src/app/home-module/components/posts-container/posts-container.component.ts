import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared-module/services/data.service';
import { Post } from '../../../../assets/models/post';
import { Router } from '@angular/router';
import { userCardData } from '../../../../assets/models/user';


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
    const userId = post.userId;
    const user = this._dataService.getUserById(userId);
    if(user)
    {
      const postUser: userCardData = {
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
      this._dataService.postUser = postUser;
      this._router.navigate(['posts/details']);
    }
  }

}
