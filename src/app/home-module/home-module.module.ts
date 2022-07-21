import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './home-module.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { PostsModuleModule } from '../posts-module/posts-module.module';



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
    SharedModuleModule,
    PostsModuleModule
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
