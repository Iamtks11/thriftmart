import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedNavbarComponent } from './fixed-navbar/fixed-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FixedNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FixedNavbarComponent
  ]
})
export class SharedModuleModule { }
