import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcbarComponent } from './searcbar/searcbar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { OpenPhotoComponent } from './open-photo/open-photo.component';
import { MainPageComponent } from './main-page/main-page.component';

import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearcbarComponent,
    MainHeaderComponent,
    OpenPhotoComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
