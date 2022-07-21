import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsModuleComponent } from './posts-module.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostCreateComponent } from './components/post-create/post-create.component';

const routes: Routes = [
  {
    path: '',
    component: PostsModuleComponent,
    children: [
      {path: 'details/:id', component: PostDetailsComponent},
      {path: 'create', component: PostCreateComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsModuleRoutingModule { }
