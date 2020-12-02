import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcbarComponent } from './searcbar/searcbar.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { OpenPhotoComponent } from './open-photo/open-photo.component';
import { MainPageComponent } from './main-page/main-page.component';

import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearcbarComponent,
    MainHeaderComponent,
    OpenPhotoComponent,
    MainPageComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
