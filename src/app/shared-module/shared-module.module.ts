import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedNavbarComponent } from './fixed-navbar/fixed-navbar.component';



@NgModule({
  declarations: [
    FixedNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FixedNavbarComponent
  ]
})
export class SharedModuleModule { }
