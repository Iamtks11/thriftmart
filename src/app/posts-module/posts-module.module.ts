import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModuleRoutingModule } from './posts-module-routing.module';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    PostCardComponent
  ],
  imports: [
    CommonModule,
    PostsModuleRoutingModule
  ],
  exports: [
    PostCardComponent
  ]
})
export class PostsModuleModule { }
