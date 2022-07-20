import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared-module/data.service';


@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent implements OnInit {

  constructor(private _dataService: DataService) { }
  posts = this._dataService.getPosts();
  ngOnInit(): void {
  }

}
