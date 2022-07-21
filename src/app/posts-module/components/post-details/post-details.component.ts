import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../shared-module/services/data.service';
import { Post, EmptyPost } from '../../../../assets/models/post';
import { userCardData } from 'src/assets/models/user';
import { EmptyUserCardData } from '../../../../assets/models/user';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {

  post: Post = EmptyPost;
  postUser: userCardData = EmptyUserCardData;
  name: string = '';
  email: string = '';
  phone: number;
  message: string = '';


  constructor(
    private _data: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.phone = NaN;
  }

  ngOnInit(): void {

    let query = this._route.snapshot.paramMap.get('id');

    let postId = Number(query);
    this.post = this._data.getPostById(postId);
    this.postUser = this._data.getUserCardById(this.post.userId);
    if (this.post.id == 0) {
      this._router.navigate(['/']);
    }
  }



  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
