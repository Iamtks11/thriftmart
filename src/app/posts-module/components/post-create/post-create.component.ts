import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared-module/services/authentication.service';
import { DataService } from '../../../shared-module/services/data.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private _authService: AuthenticationService, private _router: Router,
              private _dataService: DataService) {
    if(!_authService.isAuthenticated())
    {
      _router.navigate(['/users/signin']);
    }
    this.price = NaN;
  }

  title: string='';
  description: string='';
  price: number=0;

  ngOnInit(): void {
  }

  addProduct(){
    let image= "https://static.toiimg.com/thumb/resizemode-4,msid-55243435,width-800,height-450,ver-75/55243435.jpg"

    this._dataService.addPost(this.title, this.description, image, this.price );
  }



}
