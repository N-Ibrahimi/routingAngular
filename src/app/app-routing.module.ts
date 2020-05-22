import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HOME_CHILD_ROUTES } from './home/homeRoute';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'user/:userName', component: HomeComponent, children: HOME_CHILD_ROUTES },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
