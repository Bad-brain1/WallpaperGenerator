import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OpenPhotoComponent } from './open-photo/open-photo.component';

const routes: Routes = [
  {
    path:'Main',
    component: MainPageComponent
  },
  {
    path:'OpenPhoto',
    component:OpenPhotoComponent
  },
  {
    path:'',
    redirectTo:'Main',
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
