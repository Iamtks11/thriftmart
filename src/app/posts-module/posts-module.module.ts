import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModuleRoutingModule } from './posts-module-routing.module';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsModuleComponent } from './posts-module.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    PostCardComponent,
    PostDetailsComponent,
    PostsModuleComponent,
    PostCreateComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    PostsModuleRoutingModule,
    FormsModule,
    SharedModuleModule
  ],
  exports: [
    PostCardComponent,
    FilterPipe
  ]
})
export class PostsModuleModule { }
