import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared-module/services/data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _data: DataService) {
    this.phone = NaN;
  }

  ngOnInit(): void {
  }
  post = this._data.post;
  postUser = this._data.postUser;
  name: string = '';
  email: string = '';
  phone: number;
  message: string = '';

}
