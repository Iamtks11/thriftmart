import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared-module/services/data.service';
import { Post } from '../../../../assets/models/post';
import { Router } from '@angular/router';
import { userCardData } from '../../../../assets/models/user';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css'],
})
export class PostsContainerComponent implements OnInit {
  constructor(private _dataService: DataService, private _router: Router) {}
  posts = this._dataService.getPosts();
  ngOnInit(): void {}

  sendToDetails(post: Post) {
    this._router.navigate(['posts/details', post.id]);
  }
}
