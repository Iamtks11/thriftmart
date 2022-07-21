import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsModuleComponent } from './posts-module.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostsModuleComponent,
    children: [
      {path: 'details/:id', component: PostDetailsComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsModuleRoutingModule { }
