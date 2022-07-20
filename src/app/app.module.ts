import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModuleModule } from './home-module/home-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModuleModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
