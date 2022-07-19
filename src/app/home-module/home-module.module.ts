import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './home-module.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    HomeModuleComponent,
    HomeNavbarComponent,
    BannerComponent,
    PostsContainerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    HomeModuleComponent,
    HomeNavbarComponent,
    BannerComponent,
    PostsContainerComponent,
    FooterComponent
  ]
})
export class HomeModuleModule { }
