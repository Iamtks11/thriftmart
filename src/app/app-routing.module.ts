import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module/home-module.component';

const routes: Routes = [
  {path: '', component: HomeModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
