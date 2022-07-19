import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { UsersModuleComponent } from './users-module.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';

console.log('users module loaded');
@NgModule({
  declarations: [
    UsersModuleComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    SharedModuleModule,
    FormsModule
  ]
})
export class UsersModuleModule { }
