import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module/home-module.component';

const routes: Routes = [
  {path: '', component: HomeModuleComponent},
  {path: 'users', loadChildren:()=>import('./users-module/users-module.module').then(mod=>mod.UsersModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
